# Requests Package for Go
> A flexible and powerful HTTP client library for Go that simplifies making web requests with comprehensive parameter handling and debugging capabilities.

## Table of Contents
- [Core Concepts](#core-concepts)
- [Installation](#installation)
- [Configuration Reference](#configuration-reference)
- [Usage Examples](#usage-examples)
- [Advanced Features](#advanced-features)
- [Stream Mode](#stream-mode)
- [Proxy Configuration](#proxy-configuration)
- [Response Handling](#response-handling)
- [Troubleshooting](#troubleshooting)
- [Appendix: Full Parameter Dictionary](#appendix-full-parameter-dictionary)

## Core Concepts

The Requests package provides a simplified interface for making HTTP requests in Go. It supports flexible parameter passing, automatic content decoding, and comprehensive debugging capabilities. The library handles various data types automatically and converts them into appropriate HTTP request formats.

## Installation

```bash
go get github.com/wangluozhe/requests
```

Import the package in your Go code:

```go
import (
    "github.com/wangluozhe/requests"
    "github.com/wangluozhe/requests/url"
)
```

## Configuration Reference

### Request Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| Params | Multiple types | Query string parameters | `map[string]string{"key": "value"}` |
| Headers | Multiple types | HTTP headers | `map[string]string{"Auth": "Bearer token"}` |
| Cookies | Multiple types | Request cookies | `map[string]string{"session": "abc123"}` |
| Data | Multiple types | Form data | `url.NewData()` |
| Files | Multiple types | File uploads | `map[string]string{"file": "/path/to/file"}` |
| Body | Multiple types | Raw request body | `"raw body content"` |
| Proxies | string | Proxy configuration | `"http://127.0.0.1:32768"` |
| Stream | bool | Enable streaming mode | `true` |

### Supported Data Types

#### Params (Query String)
- `*url.Params`
- `string` (e.g., `"key=value&a=1"`)
- `map[string]string`
- `map[string][]string`
- `map[string]int`
- `map[string][]int`
- `map[string]float64`
- `map[string][]float64`
- `map[string]interface{}` (supports recursive parsing)

#### Headers
- `*http.Header`
- `string` (e.g., `"User-Agent: abc\nAccept: */*"`)
- `map[string]string`
- `map[string][]string`
- `map[string]interface{}` (values support string, int, float64, bool)
- `map[string][]interface{}`

#### Cookies
- `*cookiejar.Jar`
- `string` (e.g., `"name=value; a=1"`)
- `map[string]string`
- `map[string]int`
- `map[string]float64`
- `map[string]interface{}` (values support string, int, float64, bool)

#### Data (Form Data)
- `*url.Values`
- `string` (e.g., `"key=value&a=1"`)
- `map[string]string`
- `map[string][]string`
- `map[string]int`
- `map[string][]int`
- `map[string]float64`
- `map[string][]float64`
- `map[string]interface{}` (supports recursive parsing)

#### Files
- `*url.Files`
- `map[string]string` (key is field name, value is file path)
- `string`
- `[]byte`
- `io.Reader`

## Usage Examples

### Basic GET Request

```go
package main

import (
    "fmt"
    "github.com/wangluozhe/requests"
)

func main() {
    r, err := requests.Get("https://api.github.com/events", nil)
    if err != nil {
        fmt.Println(err)
    }
    fmt.Println(r.Text())
}
```

### POST Request with Form Data

```go
package main

import (
    "fmt"
    "github.com/wangluozhe/requests"
    "github.com/wangluozhe/requests/url"
)

func main() {
    data := url.NewData()
    data.Set("key", "value")
    r, err := requests.Post("http://httpbin.org/post", &url.Request{Data: data})
    if err != nil {
        fmt.Println(err)
    }
    fmt.Println(r.Text())
}
```

### Request with Query Parameters

```go
// Using NewParams
params := url.NewParams()
params.Set("key1", "value1")
params.Set("key2", "value2")
r, err := requests.Get("http://httpbin.org/get", &url.Request{Params: params})

// Using map
req := url.NewRequest()
params := map[string]interface{}{
    "page":  []interface{}{"1", 2},
    "limit": []string{"20"},
    "skip":  []int{5},
}
req.Params = url.ParseParams(params)
r, err := requests.Get("https://httpbin.org/get", req)

// Using string
params := url.ParseParams("key1=value1&key2=value2")
r, err := requests.Get("http://httpbin.org/get", &url.Request{Params: params})
```

### Multiple Values for Same Parameter

```go
params := url.NewParams()
params.Set("key1", "value1")
params.Add("key1", "value2")
params.Set("key2", "value2")
r, err := requests.Get("http://httpbin.org/get", &url.Request{Params: params})
// Result: http://httpbin.org/get?key1=value1&key1=value2&key2=value2
```

## Advanced Features

### Debug Mode

Enable debug mode to print request details to stderr:

```go
// Enable debug mode
requests.SetDebug(true)

// Make requests...

// Disable debug mode
requests.SetDebug(false)
```

> **Note:** Debug mode prints the `url.Request` structure, original request, and original response content to stderr for debugging purposes.

### Flexible Request Structure

```go
req := &url.Request{
    // Direct map for query parameters
    Params: map[string]string{
        "page": "1",
        "size": "20",
    },
    // Direct map for headers
    Headers: map[string]string{
        "Authorization": "Bearer token123",
    },
    // Direct string body
    Body: "raw body content",
}
```

## Stream Mode

For large file downloads, use stream mode to avoid loading entire response into memory:

```go
package main

import (
    "fmt"
    "io"
    "os"
    "github.com/wangluozhe/requests"
    "github.com/wangluozhe/requests/url"
)

func main() {
    req := url.NewRequest()
    req.Stream = true // Enable stream mode

    r, err := requests.Get("https://httpbin.org/stream-bytes/1024", req)
    if err != nil {
        fmt.Println(err)
    }
    defer r.Body.Close()

    // Create output file
    file, err := os.Create("output.bin")
    if err != nil {
        fmt.Println(err)
    }
    defer file.Close()

    // Copy stream to file
    _, err = io.Copy(file, r.Body)
    if err != nil {
        fmt.Println(err)
    }
}
```

> **Note:** In stream mode, `r.Content` will be empty. You must manually handle reading and closing `r.Body`.

## Proxy Configuration

Configure proxy for requests:

```go
req := url.NewRequest()
req.Proxies = "http://127.0.0.1:32768"
// For authenticated proxy: req.Proxies = "http://username:password@ip:port"

r, err := requests.Get("https://api.github.com/events", req)
```

## Response Handling

### Text Response

```go
r, err := requests.Get("https://api.github.com/events", nil)
if err != nil {
    fmt.Println(err)
}
fmt.Println(r.Text())
```

### Binary Response

```go
fmt.Println(r.Content)
// Returns: [91 123 34 105 100 34 58 34 50 48 55 49 52 50 51 57 56 48 53 34 44 34 116 121 112 101 34 58 34...]

// Save binary data to file
jpg, _ := os.Create("1.jpg")
io.Copy(jpg, r.Body)      // Method 1
// jpg.Write(r.Content)   // Method 2
```

> **Note:** Requests automatically decodes gzip, deflate, and brotli encoded responses.

## HTTP Methods

All HTTP methods are supported with consistent APIs:

```go
data := url.NewData()
data.Set("key", "value")

r, err := requests.Post("http://httpbin.org/post", &url.Request{Data: data})
r, err = requests.Delete("http://httpbin.org/delete")
r, err = requests.Head("http://httpbin.org/get")
r, err = requests.Options("http://httpbin.org/get")
r, err = requests.Put("http://httpbin.org/put", &url.Request{Data: data})
```

## Troubleshooting

### Common Issues

1. **Memory Usage with Large Files**
   - Use stream mode (`req.Stream = true`) for large file downloads
   - Always close `r.Body` when using stream mode

2. **Parameter Encoding**
   - Use `url.ParseParams()` for complex parameter structures
   - Check URL encoding with `fmt.Println(r.Url)` after request

3. **Debug Information**
   - Enable debug mode with `requests.SetDebug(true)` to view request details
   - Check stderr for debug output

4. **Binary Data Handling**
   - Use `r.Content` for binary data as byte array
   - Use `r.Body` for streaming binary data
   - Remember to close `r.Body` when done

## Appendix: Full Parameter Dictionary

### Request Structure Parameters

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| Params | interface{} | nil | Query parameters (multiple supported types) |
| Headers | interface{} | nil | HTTP headers (multiple supported types) |
| Cookies | interface{} | nil | Request cookies (multiple supported types) |
| Data | interface{} | nil | Form data (multiple supported types) |
| Files | interface{} | nil | File uploads (multiple supported types) |
| Body | interface{} | nil | Raw request body |
| Proxies | string | "" | Proxy URL (e.g., "http://127.0.0.1:32768") |
| Stream | bool | false | Enable streaming response mode |

### Response Object Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| Text() | string | Response body as text |
| Content | []byte | Response body as bytes |
| Body | io.ReadCloser | Response body as reader (for streaming) |
| Url | string | Final URL after redirects |

### Global Functions

| Function | Parameters | Description |
|----------|------------|-------------|
| SetDebug | bool | Enable/disable debug mode globally |
| Get | url, *Request | Send GET request |
| Post | url, *Request | Send POST request |
| Put | url, *Request | Send PUT request |
| Delete | url, *Request | Send DELETE request |
| Head | url, *Request | Send HEAD request |
| Options | url, *Request | Send OPTIONS request |

### Utility Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| NewRequest | none | *Request | Create new request object |
| NewParams | none | *Params | Create new params object |
| NewData | none | *Data | Create new form data object |
| ParseParams | interface{} | *Params | Parse parameters from various types |
