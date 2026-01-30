package utils

import (
	"bytes"
	"io"
<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
=======
	"net/http"
	"net/http/cookiejar"
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-c15f53d0/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
=======
	"net/http"
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-8f05837d/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
	"net/url"

	turbohttp "github.com/DalphanDev/Turbo/http"
<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
	"github.com/DalphanDev/Turbo/http/cookiejar"
<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
	"github.com/DalphanDev/Turbo/mimic"
	"github.com/andybalholm/brotli"
=======
=======
	fhttp "github.com/bogdanfinn/fhttp"
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-c15f53d0/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
	"github.com/bogdanfinn/tls-client/bandwidth"
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-c15f53d0/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
=======
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-8f05837d/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
)

type TurboTLSClient struct {
	client *turbohttp.Client
	jar    http.CookieJar
	proxy  string
}

<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
type TurboRequestOptions struct {
	URL     string
	Headers map[string]string
	Body    io.Reader
}

type TurboResponse struct {
	StatusCode int
	Headers    turbohttp.Header
	Body       string
}

func NewTurboTLSClient(proxy string, mimicBrowser string) (*TurboTLSClient, error) {
	if mimicBrowser == "" {
		mimicBrowser = "chrome"
=======
=======
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-8f05837d/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
func NewTurboTLSClient(proxyURL string, mimic string) (*TurboTLSClient, error) {
	transport := &turbohttp.Transport{}
	if mimic == "" {
		mimic = "chrome"
<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-c15f53d0/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
	}

<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
	transport := &turbohttp.Transport{
		MimicSetting:          mimicBrowser,
		ForceAttemptHTTP2:     true,
		MaxIdleConns:          100,
		IdleConnTimeout:       90 * time.Second,
		TLSHandshakeTimeout:   10 * time.Second,
		ExpectContinueTimeout: 1 * time.Second,
=======
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-8f05837d/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
	}
	transport.MimicSetting = mimic

=======
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-c15f53d0/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
	jar, err := cookiejar.New(nil)
	if err != nil {
		return nil, err
	}

	if proxyURL != "" {
		parsed, err := url.Parse(proxyURL)
		if err != nil {
			return nil, err
		}
		transport.Proxy = turbohttp.ProxyURL(parsed)
	}

<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
	return turboClient, nil
=======
	c := &turbohttp.Client{Transport: transport}

	return &TurboTLSClient{client: c, jar: jar, proxy: proxyURL}, nil
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-c15f53d0/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
}

func NewTurboTLSClientWithMimic(proxy string, settings mimic.Settings) (*TurboTLSClient, error) {
	mimic.SetMimicSettings("custom", settings)
=======
	c := &turbohttp.Client{Transport: transport}
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-8f05837d/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go

	return &TurboTLSClient{client: c, jar: jar, proxy: proxyURL}, nil
}

func NewTurboTLSClientChrome(proxyURL string) (*TurboTLSClient, error) {
	return NewTurboTLSClient(proxyURL, "chrome")
}

<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
	client := &turbohttp.Client{
		Transport: transport,
		Jar:       jar,
		Timeout:   30 * time.Second,
	}
=======
func (c *TurboTLSClient) SetCookieJar(jar http.CookieJar) {
	c.jar = jar
}
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-c15f53d0/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
=======
func (c *TurboTLSClient) GetCookies(u *url.URL) []*http.Cookie {
	return c.jar.Cookies(u)
}
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-8f05837d/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go

func (c *TurboTLSClient) SetCookies(u *url.URL, cookies []*http.Cookie) {
	c.jar.SetCookies(u, cookies)
}

func (c *TurboTLSClient) SetCookieJar(jar http.CookieJar) {
	c.jar = jar
}

func (c *TurboTLSClient) GetCookieJar() http.CookieJar {
	return c.jar
}

func (c *TurboTLSClient) SetProxy(proxyUrl string) error {
	c.proxy = proxyUrl
	transport, ok := c.client.Transport.(*turbohttp.Transport)
	if !ok {
		return nil
	}
	if proxyUrl == "" {
		transport.Proxy = nil
		return nil
	}
	parsed, err := url.Parse(proxyUrl)
	if err != nil {
		return err
	}
	transport.Proxy = turbohttp.ProxyURL(parsed)
	return nil
}

func (c *TurboTLSClient) GetProxy() string {
	return c.proxy
}

func (c *TurboTLSClient) SetFollowRedirect(followRedirect bool) {
	if followRedirect {
		c.client.CheckRedirect = nil
		return
	}
	c.client.CheckRedirect = func(req *turbohttp.Request, via []*turbohttp.Request) error {
		return turbohttp.ErrUseLastResponse
	}
}

<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
func (tc *TurboTLSClient) GetRawClient() *turbohttp.Client {
	return tc.client
=======
func (c *TurboTLSClient) GetFollowRedirect() bool {
	return c.client.CheckRedirect == nil
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-8f05837d/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
}
=======
func (c *TurboTLSClient) Do(req *fhttp.Request) (*fhttp.Response, error) {
	tr, ok := c.client.Transport.(*turbohttp.Transport)
	if !ok {
		return nil, fhttp.ErrNotSupported
	}

	if c.jar != nil {
		u := req.URL
		if u != nil {
			for _, ck := range c.jar.Cookies(u) {
				req.AddCookie(&fhttp.Cookie{Name: ck.Name, Value: ck.Value})
			}
		}
	}
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-c15f53d0/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go

func (c *TurboTLSClient) CloseIdleConnections() {
	if transport, ok := c.client.Transport.(*turbohttp.Transport); ok {
		transport.CloseIdleConnections()
	}
}

<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
func readTurboResponseBody(resp *turbohttp.Response) (string, error) {
	contentEncoding := resp.Header.Get("Content-Encoding")

	switch contentEncoding {
	case "gzip":
		gz, err := gzip.NewReader(resp.Body)
		if err != nil {
			return "", fmt.Errorf("failed to create gzip reader: %v", err)
		}
		defer gz.Close()
		body, err := io.ReadAll(gz)
		if err != nil {
			return "", fmt.Errorf("failed to read gzip body: %v", err)
		}
		return string(body), nil

<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
	case "br":
		br := brotli.NewReader(resp.Body)
		body, err := io.ReadAll(br)
		if err != nil {
			return "", fmt.Errorf("failed to read brotli body: %v", err)
		}
		return string(body), nil
=======
	resp, err := tr.RoundTrip(tReq)
	if err != nil {
		return nil, err
	}

	if c.jar != nil {
		u := req.URL
		if u != nil {
			cookies := (&http.Response{Header: http.Header(resp.Header)}).Cookies()
			if len(cookies) > 0 {
				c.jar.SetCookies(u, cookies)
			}
		}
	}

	out := &fhttp.Response{
		Status:           resp.Status,
		StatusCode:       resp.StatusCode,
		Proto:            resp.Proto,
		ProtoMajor:       resp.ProtoMajor,
		ProtoMinor:       resp.ProtoMinor,
		Header:           fhttp.Header(resp.Header),
		Body:             resp.Body,
		ContentLength:    resp.ContentLength,
		TransferEncoding: resp.TransferEncoding,
		Close:            resp.Close,
		Uncompressed:     resp.Uncompressed,
		Trailer:          fhttp.Header(resp.Trailer),
		Request:          req,
	}
	return out, nil
}

func (c *TurboTLSClient) Get(url string) (resp *fhttp.Response, err error) {
	req, err := fhttp.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}
	return c.Do(req)
}
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-c15f53d0/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go

<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
	default:
		body, err := io.ReadAll(resp.Body)
		if err != nil {
			return "", fmt.Errorf("failed to read body: %v", err)
		}
		return string(body), nil
=======
func (c *TurboTLSClient) Head(url string) (resp *fhttp.Response, err error) {
	req, err := fhttp.NewRequest("HEAD", url, nil)
	if err != nil {
		return nil, err
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-c15f53d0/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
=======
func (c *TurboTLSClient) Do(req *turbohttp.Request) (*turbohttp.Response, error) {
	tr, ok := c.client.Transport.(*turbohttp.Transport)
	if !ok {
		return nil, turbohttp.ErrNotSupported
	}

	if c.jar != nil {
		u := req.URL
		if u != nil {
			for _, ck := range c.jar.Cookies(u) {
				req.AddCookie(&turbohttp.Cookie{Name: ck.Name, Value: ck.Value})
			}
		}
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-8f05837d/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
	}

<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
<<<<<<< /home/cantwin/Compulsive Works/WasImpossible!/fnsolver/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
func parseTurboProxy(proxyString string) (*url.URL, error) {
	if strings.HasPrefix(proxyString, "http://") || strings.HasPrefix(proxyString, "https://") || strings.HasPrefix(proxyString, "socks5://") {
		return url.Parse(proxyString)
=======
func (c *TurboTLSClient) Post(url, contentType string, body io.Reader) (resp *fhttp.Response, err error) {
	var rc io.ReadCloser
	if body != nil {
		if c, ok := body.(io.ReadCloser); ok {
			rc = c
		} else {
			b, err := io.ReadAll(body)
			if err != nil {
				return nil, err
			}
			rc = io.NopCloser(bytes.NewReader(b))
		}
	}
	req, err := fhttp.NewRequest("POST", url, rc)
	if err != nil {
		return nil, err
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-c15f53d0/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
=======
	resp, err := tr.RoundTrip(req)
	if err != nil {
		return nil, err
>>>>>>> /home/cantwin/.windsurf/worktrees/fnsolver/fnsolver-8f05837d/fnsolve/arkose_solve/fcaptcha-solver/utils/tls_turbo.go
	}

	if c.jar != nil {
		u := req.URL
		if u != nil {
			cookies := (&http.Response{Header: http.Header(resp.Header)}).Cookies()
			if len(cookies) > 0 {
				c.jar.SetCookies(u, cookies)
			}
		}
	}

	return resp, nil
}

func (c *TurboTLSClient) Get(url string) (*turbohttp.Response, error) {
	req, err := turbohttp.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}
	return c.Do(req)
}

func (c *TurboTLSClient) Head(url string) (*turbohttp.Response, error) {
	req, err := turbohttp.NewRequest("HEAD", url, nil)
	if err != nil {
		return nil, err
	}
	return c.Do(req)
}

func (c *TurboTLSClient) Post(url, contentType string, body io.Reader) (*turbohttp.Response, error) {
	var rc io.ReadCloser
	if body != nil {
		if closer, ok := body.(io.ReadCloser); ok {
			rc = closer
		} else {
			b, err := io.ReadAll(body)
			if err != nil {
				return nil, err
			}
			rc = io.NopCloser(bytes.NewReader(b))
		}
	}
	req, err := turbohttp.NewRequest("POST", url, rc)
	if err != nil {
		return nil, err
	}
	if contentType != "" {
		req.Header.Set("Content-Type", contentType)
	}
	return c.Do(req)
}
