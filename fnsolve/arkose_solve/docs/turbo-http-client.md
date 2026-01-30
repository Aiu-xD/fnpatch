# Turbo HTTP Client
> A Go HTTP client library with TLS fingerprint mimicking capabilities for bypassing bot detection systems through browser impersonation.

## Table of Contents
- [Core Concepts](#core-concepts)
- [Browser Mimics](#browser-mimics)
- [Installation](#installation)
- [API Reference](#api-reference)
- [Node.js Bridge](#nodejs-bridge)
- [Fingerprint Verification](#fingerprint-verification)
- [Troubleshooting](#troubleshooting)
- [Appendix: Full Parameter Dictionary](#appendix-full-parameter-dictionary)

## Core Concepts

### Why TLS Fingerprinting Matters

Modern bot detection systems analyze multiple layers of your HTTP requests to identify automated traffic:

1. **JA3/JA4 Fingerprints** - Hash of TLS ClientHello parameters (cipher suites, extensions, curves)
2. **HTTP/2 Settings Fingerprint** - Initial H2 SETTINGS frame values and header order
3. **Header Order** - The sequence of HTTP headers in requests

Standard Go `net/http` produces distinctive fingerprints that are easily flagged. Turbo solves this by:
- Using **uTLS** (refraction-networking/utls) to mimic real browser TLS handshakes
- Configuring **HTTP/2 settings** to match browser behavior
- Maintaining **pseudo-header order** (`:method`, `:authority`, etc.) consistent with target browsers

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                      Turbo Client                           │
├─────────────────────────────────────────────────────────────┤
│  TurboClient (turbo.go / src/client.go)                     │
│    ├── Automatic response decompression (gzip, brotli)      │
│    ├── Cookie jar management                                │
│    └── Proxy support (ip:port:user:pass format)             │
├─────────────────────────────────────────────────────────────┤
│  Custom HTTP Transport (http/transport.go)                  │
│    ├── MimicSetting field for browser selection             │
│    └── Modified TLS dial with uTLS                          │
├─────────────────────────────────────────────────────────────┤
│  Mimic Profiles (mimic/mimic.go)                            │
│    ├── Chrome, Firefox, Goat, Nike profiles                 │
│    ├── TLS ClientHelloSpec configurations                   │
│    └── H2 Settings and priority frames                      │
└─────────────────────────────────────────────────────────────┘
```

## Browser Mimics

Turbo provides pre-configured browser profiles that replicate real browser TLS/H2 fingerprints.

### Available Profiles

| Profile | JA3 Hash | H2 Fingerprint | Use Case |
|---------|----------|----------------|----------|
| `chrome` | `68985b9b6a2cd258ef6742a3b7ddbee8` | `1:65536;3:1000;4:6291456;6:262144\|15663105\|\|m,a,s,p` | General purpose, most common |
| `firefox` | `f2a9f94284e5d331627ccacf0511219b` | `1:65536;4:131072;5:16384\|12517377\|3:0:0:201,...\|m,p,a,s` | Alternative fingerprint |
| `goat` | Custom | Chrome-based H2 | Specialized targets |
| `nike` | Custom | Chrome-based H2 | Specialized targets |

> **Note:** The `goat` and `nike` profiles share similar TLS configurations but may differ in specific extension ordering for targeted use cases.

### Chrome Profile Details

**H2 Pseudo-Header Order:**
```
:method → :authority → :scheme → :path
```

**H2 Settings:**
| Setting | ID | Value |
|---------|-----|-------|
| HEADER_TABLE_SIZE | 0x1 | 65536 |
| MAX_CONCURRENT_STREAMS | 0x3 | 1000 |
| INITIAL_WINDOW_SIZE | 0x4 | 6291456 |
| MAX_HEADER_LIST_SIZE | 0x6 | 262144 |

**H2 Stream Flow:** `15663105`

**TLS Cipher Suites:**
```
GREASE, TLS_AES_128_GCM_SHA256, TLS_AES_256_GCM_SHA384,
TLS_CHACHA20_POLY1305_SHA256, TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,
TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256, TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,
TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384, TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256,
TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,
TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_128_GCM_SHA256,
TLS_RSA_WITH_AES_256_GCM_SHA384, TLS_RSA_WITH_AES_128_CBC_SHA,
TLS_RSA_WITH_AES_256_CBC_SHA
```

**TLS Version Range:** TLS 1.2 - TLS 1.3

### Firefox Profile Details

**H2 Pseudo-Header Order:**
```
:method → :path → :authority → :scheme
```

**H2 Settings:**
| Setting | ID | Value |
|---------|-----|-------|
| HEADER_TABLE_SIZE | 0x1 | 65536 |
| INITIAL_WINDOW_SIZE | 0x4 | 131072 |
| MAX_FRAME_SIZE | 0x5 | 16384 |

**H2 Stream Flow:** `12517377`

**H2 Priority Frames:**
| StreamID | Exclusive | StreamDep | Weight |
|----------|-----------|-----------|--------|
| 3 | false | 0 | 201 |
| 5 | false | 0 | 101 |
| 7 | false | 0 | 1 |
| 9 | false | 7 | 1 |
| 11 | false | 3 | 1 |
| 13 | false | 0 | 241 |

**TLS Version Range:** TLS 1.0 - TLS 1.3

### Custom Mimic Registration

```go
import "github.com/DalphanDev/Turbo/mimic"

// Register a custom mimic profile
customSettings := mimic.Settings{
    H2HeaderOrder: []string{":method", ":authority", ":scheme", ":path"},
    H2Settings: []mimic.H2Setting{
        {ID: mimic.H2SettingHeaderTableSize, Val: 65536},
        {ID: mimic.H2SettingInitialWindowSize, Val: 6291456},
    },
    H2StreamFlow: 15663105,
    ClientHello: func() *utls.ClientHelloSpec {
        // Return custom ClientHelloSpec
    },
}

mimic.SetMimicSettings("custom", customSettings)
```

### Selecting Browser Profile on Transport

To apply a mimic profile at the transport level:

```go
import (
    "github.com/DalphanDev/Turbo/http"
    "github.com/DalphanDev/Turbo/http/cookiejar"
)

func main() {
    transport := &http.Transport{
        MimicSetting: "chrome",  // Options: "chrome", "firefox", "goat", "nike"
    }
    
    jar, _ := cookiejar.New(nil)
    client := &http.Client{
        Transport: transport,
        Jar:       jar,
    }
    
    // Use client for requests...
}
```

## Installation

### Prerequisites
- Go 1.21 or higher

### Install via Go Modules

```bash
go get github.com/DalphanDev/Turbo
```

### Package Import Options

| Package | Use Case |
|---------|----------|
| `github.com/DalphanDev/Turbo` | Main package with `turbo.go` client |
| `github.com/DalphanDev/Turbo/src` | Alternative client used by bridge |
| `github.com/DalphanDev/Turbo/mimic` | Direct access to mimic profiles |
| `github.com/DalphanDev/Turbo/http` | Custom HTTP transport with MimicSetting |

> **Note:** Both `turbo.go` and `src/client.go` provide identical `TurboClient` implementations. Use the main package for direct Go usage; the `src` package is primarily for the Node.js bridge.

### Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `github.com/refraction-networking/utls` | v1.5.4 | TLS fingerprint mimicking |
| `github.com/andybalholm/brotli` | v1.0.6 | Brotli decompression |
| `github.com/google/uuid` | v1.5.0 | Client ID generation (bridge) |
| `golang.org/x/net` | v0.19.0 | HTTP utilities |

## API Reference

### TurboClient

The main HTTP client with fingerprint mimicking capabilities.

#### Constructor

```go
func NewTurboClient(proxy string) *TurboClient
```

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| proxy | string | Proxy in `ip:port:username:password` format. Empty string for no proxy. |

**Example:**
```go
// Without proxy
client := turbo.NewTurboClient("")

// With proxy
client := turbo.NewTurboClient("207.90.213.151:15413:username:password")
```

#### Do Method

```go
func (tc *TurboClient) Do(method string, options RequestOptions) (*TurboResponse, error)
```

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| method | string | HTTP method (GET, POST, PUT, DELETE, etc.) |
| options | RequestOptions | Request configuration |

### RequestOptions

```go
type RequestOptions struct {
    URL     string            // Target URL
    Headers map[string]string // Custom headers (merged with defaults)
    Body    io.Reader         // Request body (nil for GET)
}
```

### TurboResponse

```go
type TurboResponse struct {
    StatusCode int         // HTTP status code
    Headers    http.Header // Response headers
    Body       string      // Decompressed response body
}
```

### Default Headers

Every request includes these default headers (can be overridden):

| Header | Value |
|--------|-------|
| Accept | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7` |
| Accept-Language | `en-US,en;q=0.9` |
| Accept-Encoding | `gzip, deflate, br` |
| dnt | `1` |
| sec-ch-ua | `"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"` |
| sec-ch-ua-mobile | `?0` |
| sec-ch-ua-platform | `"Windows"` |
| sec-fetch-dest | `document` |
| sec-fetch-mode | `navigate` |
| sec-fetch-site | `none` |
| sec-fetch-user | `?1` |
| upgrade-insecure-requests | `1` |
| user-agent | `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36` |

> **Warning:** The default User-Agent reflects Chrome 110. Update this header to match your target browser version for consistency with the TLS fingerprint. Mismatched versions can trigger detection.

### Usage Examples

#### Basic GET Request

```go
package main

import (
    "fmt"
    "github.com/DalphanDev/Turbo"
)

func main() {
    client := turbo.NewTurboClient("")
    
    options := turbo.RequestOptions{
        URL: "https://api.example.com/data",
    }
    
    resp, err := client.Do("GET", options)
    if err != nil {
        panic(err)
    }
    
    fmt.Printf("Status: %d\n", resp.StatusCode)
    fmt.Printf("Body: %s\n", resp.Body)
}
```

#### POST Request with Custom Headers

```go
package main

import (
    "fmt"
    "strings"
    "github.com/DalphanDev/Turbo"
)

func main() {
    client := turbo.NewTurboClient("")
    
    headers := map[string]string{
        "Content-Type": "application/json",
        "User-Agent":   "Custom Agent",  // Overrides default
    }
    
    body := `{"key": "value"}`
    
    options := turbo.RequestOptions{
        URL:     "https://api.example.com/submit",
        Headers: headers,
        Body:    strings.NewReader(body),
    }
    
    resp, err := client.Do("POST", options)
    if err != nil {
        panic(err)
    }
    
    fmt.Println(resp.Body)
}
```

#### Using Proxy

```go
// Format: ip:port:username:password
client := turbo.NewTurboClient("192.168.1.1:8080:user:pass")

options := turbo.RequestOptions{
    URL: "https://httpbin.org/ip",
}

resp, _ := client.Do("GET", options)
fmt.Println(resp.Body) // Shows proxy IP
```

## Node.js Bridge

Turbo includes a bridge executable for Node.js integration via stdin/stdout JSON communication.

### Bridge Architecture

```
┌──────────────┐    JSON/stdin     ┌──────────────┐
│   Node.js    │ ───────────────▶  │  bridge.exe  │
│   Process    │ ◀───────────────  │   (Go)       │
└──────────────┘    JSON/stdout    └──────────────┘
```

### Building the Bridge

```bash
cd bridge
go build -o bridge.exe bridge.go
```

### Bridge Commands

#### new_client

Creates a new TurboClient instance.

**Request:**
```json
{
  "command": "new_client",
  "proxy": "ip:port:user:pass"
}
```

**Response:**
```json
{
  "command": "new_client",
  "clientID": "uuid-string"
}
```

#### do

Sends an HTTP request using an existing client.

**Request:**
```json
{
  "command": "do",
  "clientID": "uuid-from-new_client",
  "url": "https://example.com",
  "method": "GET",
  "headers": {
    "User-Agent": "Custom Agent"
  },
  "body": ""
}
```

**Response:**
```json
{
  "command": "do",
  "clientID": "uuid-string",
  "statusCode": 200,
  "headers": {
    "Content-Type": ["application/json"]
  },
  "body": "response body content"
}
```

### Node.js Integration Example

```javascript
const { spawn } = require("child_process");
const path = require("path");

const bridgePath = path.join(__dirname, "bridge", "bridge.exe");
const worker = spawn(bridgePath);

let clientID = null;

worker.stdout.on("data", (data) => {
  const response = JSON.parse(data.toString());
  
  if (response.command === "new_client") {
    clientID = response.clientID;
    console.log(`Client created: ${clientID}`);
    
    // Send request
    worker.stdin.write(JSON.stringify({
      command: "do",
      clientID: clientID,
      url: "https://httpbin.org/get",
      method: "GET",
      headers: { "User-Agent": "Turbo Bridge" },
      body: ""
    }) + "\n");
  }
  
  if (response.command === "do") {
    console.log(`Status: ${response.statusCode}`);
    console.log(`Body: ${response.body}`);
  }
});

worker.stderr.on("data", (data) => {
  console.error(`Error: ${data}`);
});

// Create client
worker.stdin.write(JSON.stringify({
  command: "new_client",
  proxy: ""
}) + "\n");
```

## Fingerprint Verification

### Testing Your Fingerprint

Verify your TLS fingerprint matches the target browser using these services:

| Service | URL | What It Shows |
|---------|-----|---------------|
| TLS Fingerprint | https://tls.peet.ws/api/all | JA3, JA4, Akamai H2 fingerprint |
| JA3er | https://ja3er.com/json | JA3 hash and details |
| Scrapfly | https://tools.scrapfly.io/api/fp/ja3 | Comprehensive fingerprint |

### Expected Chrome Fingerprint

```
JA3: 771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,13-11-65281-5-17513-16-0-51-23-45-18-35-43-27-10-21,29-23-24,0
JA3 Hash: 68985b9b6a2cd258ef6742a3b7ddbee8

H2 Fingerprint: 1:65536;3:1000;4:6291456;6:262144|15663105||m,a,s,p
H2 Hash: 8a32ff5cb625ed4ae2d092e76beb6d99
```

### Verification Code

```go
package main

import (
    "fmt"
    "github.com/DalphanDev/Turbo"
)

func main() {
    client := turbo.NewTurboClient("")
    
    options := turbo.RequestOptions{
        URL: "https://tls.peet.ws/api/all",
    }
    
    resp, err := client.Do("GET", options)
    if err != nil {
        panic(err)
    }
    
    fmt.Println("TLS Fingerprint Response:")
    fmt.Println(resp.Body)
}
```

## Troubleshooting

### Common Issues

#### 1. Fingerprint Mismatch

**Symptom:** Detection systems still blocking requests despite using Turbo.

**Solutions:**
- Verify fingerprint at tls.peet.ws matches expected values
- Check if target site uses additional detection (canvas, WebGL)
- Ensure headers match browser expectations (order matters)
- Update mimic profile to match latest browser version

#### 2. Proxy Connection Failures

**Symptom:** `invalid proxy string format` error

**Solution:** Ensure proxy format is exactly `ip:port:username:password`:
```go
// Correct
client := turbo.NewTurboClient("192.168.1.1:8080:user:pass")

// Incorrect
client := turbo.NewTurboClient("http://user:pass@192.168.1.1:8080")
```

#### 3. Response Decompression Errors

**Symptom:** `Error reading gzip` or garbled response body

**Causes:**
- Server sent uncompressed response but set wrong Content-Encoding
- Corrupted response data

**Solution:** Check `resp.Headers.Get("Content-Encoding")` and handle edge cases.

> **Known Limitation:** Despite sending `Accept-Encoding: gzip, deflate, br`, Turbo only handles gzip and brotli decompression. Deflate responses will not be automatically decompressed and may cause issues. Most modern servers prefer gzip/brotli, so this rarely occurs in practice.

#### 4. Bridge Communication Issues

**Symptom:** Node.js not receiving responses

**Solutions:**
- Ensure each JSON message ends with `\n`
- Parse stdout data as complete JSON objects
- Check stderr for Go-side errors

### Debug Tips

1. **Enable verbose logging** by adding print statements in `turbo.go`
2. **Capture raw TLS handshake** using Wireshark with SSLKEYLOGFILE
3. **Compare fingerprints** side-by-side with real browser using tls.peet.ws

## Appendix: Full Parameter Dictionary

### H2 Setting IDs

| Constant | ID | Description |
|----------|-----|-------------|
| H2SettingHeaderTableSize | 0x1 | Maximum header table size for HPACK |
| H2SettingEnablePush | 0x2 | Server push enabled/disabled |
| H2SettingMaxConcurrentStreams | 0x3 | Maximum concurrent streams |
| H2SettingInitialWindowSize | 0x4 | Initial flow control window size |
| H2SettingMaxFrameSize | 0x5 | Maximum frame payload size |
| H2SettingMaxHeaderListSize | 0x6 | Maximum header list size |

### TLS Extension Types

| Extension | Purpose |
|-----------|---------|
| SNI | Server Name Indication |
| ALPN | Application-Layer Protocol Negotiation |
| SupportedVersions | TLS version negotiation |
| KeyShare | Key exchange for TLS 1.3 |
| SignatureAlgorithms | Supported signature algorithms |
| SupportedCurves | Elliptic curves for ECDHE |
| PSKKeyExchangeModes | Pre-shared key modes |
| CompressCertificate | Certificate compression (brotli) |
| SessionTicket | TLS session resumption |
| GREASE | Generate Random Extensions And Sustain Extensibility |

### Mimic Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| GetMimicSettings | browser string | *Settings | Get mimic profile by name |
| SetMimicSettings | browser string, settings Settings | void | Register custom mimic profile |

### Transport Fields

| Field | Type | Description |
|-------|------|-------------|
| MimicSetting | string | Browser name for TLS mimicking |
| Proxy | func(*Request) (*url.URL, error) | Proxy configuration function |
| TLSHandshakeTimeout | time.Duration | TLS handshake timeout |
| DisableKeepAlives | bool | Disable HTTP keep-alives |
| DisableCompression | bool | Disable automatic compression |
| MaxIdleConns | int | Maximum idle connections |
| IdleConnTimeout | time.Duration | Idle connection timeout |
