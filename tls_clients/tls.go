package fnfuck

import (
	"bytes"
	"io"
	"slices"
	"strings"

	http "github.com/bogdanfinn/fhttp"
	tlsclient "github.com/bogdanfinn/tls-client"
	"github.com/bogdanfinn/tls-client/profiles"
)

var (
	methodsWithoutRequestBody = []string{
		http.MethodGet,
		http.MethodHead,
		http.MethodOptions,
		http.MethodTrace,
	}
)

type tlsData struct {
	RequestURL     string
	RequestMethod  string
	RequestHeaders map[string][]string
	RequestBody    []byte

	TLSClientProxy              string
	TLSClientProfile            profiles.ClientProfile
	TLSClientTimeout            int
	TLSFollowRedirects          bool
	TLSWithRandomExtensionOrder bool
	TLSForceHTTP1               bool
	TLSInsecureSkipVerify       bool
	TLSHeaderOrder              []string
	TLSPseudoHeaderOrder        []string
}

type requestResponse struct {
	ResponseBody    []byte
	ResponseCode    int
	ResponseHeaders map[string]string
	ResponseCookies []*http.Cookie
}

// ForwardRequest performs an HTTP request with the supplied TLS configuration
// and returns the raw response data.
func ForwardRequest(cfg *tlsData) (*requestResponse, error) {
	return doRequest(cfg)
}

func doRequest(cfg *tlsData) (*requestResponse, error) {
	req, err := createRequest(cfg)
	if err != nil {
		return nil, err
	}

	client, err := buildTLSClient(cfg)
	if err != nil {
		return nil, err
	}

	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	body, err := DecompressBody(resp)
	if err != nil {
		return nil, err
	}

	headers := getResponseHeaders(resp)
	cookies := resp.Cookies()

	return &requestResponse{
		ResponseBody:    body,
		ResponseCode:    resp.StatusCode,
		ResponseHeaders: headers,
		ResponseCookies: cookies,
	}, nil
}

func createRequest(cfg *tlsData) (*http.Request, error) {
	var bodyReader io.Reader
	if cfg.RequestMethod != http.MethodGet && len(cfg.RequestBody) > 0 {
		bodyReader = bytes.NewReader(cfg.RequestBody)
	}

	req, err := http.NewRequest(cfg.RequestMethod, cfg.RequestURL, bodyReader)
	if err != nil {
		return nil, err
	}

	setRequestHeaders(cfg, req)
	return req, nil
}

func buildTLSClient(cfg *tlsData) (tlsclient.HttpClient, error) {
	opts := []tlsclient.HttpClientOption{
		tlsclient.WithTimeoutSeconds(cfg.TLSClientTimeout),
		tlsclient.WithClientProfile(cfg.TLSClientProfile),
		tlsclient.WithTransportOptions(&tlsclient.TransportOptions{DisableCompression: true}),
	}

	if !cfg.TLSFollowRedirects {
		opts = append(opts, tlsclient.WithNotFollowRedirects())
	}
	if cfg.TLSWithRandomExtensionOrder {
		opts = append(opts, tlsclient.WithRandomTLSExtensionOrder())
	}
	if cfg.TLSForceHTTP1 {
		opts = append(opts, tlsclient.WithForceHttp1())
	}
	if cfg.TLSInsecureSkipVerify {
		opts = append(opts, tlsclient.WithInsecureSkipVerify())
	}
	if cfg.TLSClientProxy != "" {
		opts = append(opts, tlsclient.WithProxyUrl(cfg.TLSClientProxy))
	}

	return tlsclient.NewHttpClient(tlsclient.NewNoopLogger(), opts...)
}

func setRequestHeaders(cfg *tlsData, req *http.Request) {
	for key, values := range cfg.RequestHeaders {
		keyLower := strings.ToLower(key)
		isContentType := keyLower == "content-type" && slices.Contains(methodsWithoutRequestBody, cfg.RequestMethod)
		isContentLength := keyLower == "content-length"
		isTLSHeader := strings.HasPrefix(keyLower, "x-tls")

		if isContentType || isContentLength || isTLSHeader {
			continue
		}

		for _, v := range values {
			req.Header.Set(key, v)
		}
	}

	if len(cfg.TLSHeaderOrder) > 0 {
		req.Header[http.HeaderOrderKey] = cfg.TLSHeaderOrder
	}
	if len(cfg.TLSPseudoHeaderOrder) > 0 {
		req.Header[http.PHeaderOrderKey] = cfg.TLSPseudoHeaderOrder
	}
}

func getResponseHeaders(resp *http.Response) map[string]string {
	result := make(map[string]string)
	for k, vs := range resp.Header {
		for _, v := range vs {
			if k != "Content-Length" && k != "Content-Encoding" {
				result[k] = v
			}
		}
	}
	return result
}
