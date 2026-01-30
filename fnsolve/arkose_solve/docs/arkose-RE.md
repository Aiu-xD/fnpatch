Published Time: Sun, 17 Aug 2025 05:49:18 GMT

Arkose FP Docs
===============

This document contains some research on ArkoseLabs' FunCaptcha fingerprinting. This is missing a bunch of signals that I haven't got around to documenting since they're boring or self-explanatory. For example, hashes.

[x] LINKS [x]

*   [Source code](https://github.com/AzureFlow/arkose-fp-docs/blob/main/arkose_re_docs.html)
*   [Known public keys](https://azureflow.github.io/arkose-fp-docs/keys.html)
*   [Payload decrypter (&lt;4.x.x)](https://azureflow.github.io/arkose-fp-docs/decrypt.html)
*   [Mouse data](https://azureflow.github.io/arkose-fp-docs/mouse.html)
*   [Breaker v2 (tguess)](https://azureflow.github.io/arkose-fp-docs/breaker.html)
*   [Arkose Mobile SDK (Android) fingerprint docs](https://gist.github.com/AzureFlow/38788d6ee3eb5b2b811f88415bfa8d78)

    *   [Blob information](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/lib/arkose/data_exchange_payload.rb#L42)
    *   [Arkose overview](https://docs.gitlab.com/ee/integration/arkose.html)
    *   [Arkose documentation](https://developer.arkoselabs.com/docs/)

This page was lasted updated 6/24/2025, 11:57:46 PM.

### Table of Contents

*   [is_keyless](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_is_keyless)
*   [cfp](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_cfp)
*   [WebGL](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_WebGL)
*   [audio_fingerprint](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_audio_fingerprint)
*   [wh](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_wh)
*   [n](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_n)
*   [window__tree_index](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_window__tree_index)
*   [window__tree_structure](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_window__tree_structure)
*   [window__ancestor_origins](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_window__ancestor_origins)
*   [browser_object_checks](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_object_checks)
*   [browser_detection_brave](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_detection_brave)
*   [browser_detection_firefox](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_detection_firefox)
*   [navigator_pdf_viewer_enabled](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_pdf_viewer_enabled)
*   [user_agent_data_brands](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_user_agent_data_brands)
*   [user_agent_data_mobile](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_user_agent_data_mobile)
*   [screen_orientation (3f76dd27)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_screen_orientation_(3f76dd27))
*   [fake_browser](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_fake_browser)
*   [headless_browser_generic (862f2c1)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_headless_browser_generic_(862f2c1))
*   [hasFakeOS](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_hasFakeOS)
*   [browser_api_checks (f58835f)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_api_checks_(f58835f))
*   [navigator_permissions_hash (replaced by 1f220c9)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_permissions_hash_(replaced_by_1f220c9))
*   [navigator_permissions_hash (1f220c9)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_permissions_hash_(1f220c9))
*   [getPlugins](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getPlugins)
*   [speech_default](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_speech_default)
*   [navigator_battery_charging](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_battery_charging)
*   [media_devices (7541c2s)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_media_devices_(7541c2s))
*   [getAudio](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getAudio)
*   [getVideo](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getVideo)
*   [supported_math_functions](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_supported_math_functions)
*   [math_fingerprint](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_math_fingerprint)
*   [1l2l5234ar2](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_1l2l5234ar2)
*   [29s83ih9](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_29s83ih9)
*   [media_query_dark_mode](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_media_query_dark_mode)
*   [f9bf2db](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_f9bf2db)
*   [css_media_queries (replaced by f9bf2db)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_media_queries_(replaced_by_f9bf2db))
*   [css_color_gamut](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_color_gamut)
*   [css_contrast](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_contrast)
*   [css_monochrome](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_monochrome)
*   [css_pointer](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_pointer)
*   [css_grid_support](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_grid_support)
*   [getFonts](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getFonts)
*   [TO](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_TO)
*   [rtc_peer_connection (5dd48ca0)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_rtc_peer_connection_(5dd48ca0))
*   [jsbd](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_jsbd)
*   [6a62b2a558](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_6a62b2a558)
*   [4b4b269e68](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_4b4b269e68)
*   [c8480e29a](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_c8480e29a)
*   [4ca87df3d1](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_4ca87df3d1)
*   [867e25e5d4](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_867e25e5d4)
*   [d4a306884c](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_d4a306884c)
*   [43f2d94](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_43f2d94)
*   [4f59ca8](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_4f59ca8)
*   [20c15922](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_20c15922)
*   [c2d2015](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_c2d2015)
*   [3ea7194](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_3ea7194)
*   [05d3d24](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_05d3d24)
*   [83eb055](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_83eb055)
*   [vsadsa](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_vsadsa)
*   [basfas](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_basfas)
*   [lfasdgs](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_lfasdgs)
*   [network_info_rtt_type](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_network_info_rtt_type)
*   [screen_pixel_depth](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_screen_pixel_depth)

* * *

### is_keyless[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_is_keyless)

This field is true if no public key is provided in the "[...]/v2/api.js" script url. Instead, the public key is provided with "setConfig". More information can be found [here](https://web.archive.org/web/20250323002049/https://developer.arkoselabs.com/docs/standard-setup#dynamic-client-api-key-setup).

### cfp[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_cfp)

Canvas fingerprint that's hashed using Java's hashCode method.

\\\`json
1172951004
\\\`

### WebGL[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_WebGL)

Collects supported operations by your GPU via the WebGL API. This could, in theory, be used to correlate your [canvas fingerprint](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_cfp) as described in this [paper by Google](https://research.google/pubs/picasso-lightweight-device-class-fingerprinting-for-web-clients/).

\\\`json
{
    "webgl_extensions": "ANGLE_instanced_arrays;EXT_blend_minmax;EXT_clip_control;EXT_color_buffer_half_float;EXT_depth_clamp;EXT_float_blend;EXT_frag_depth;EXT_polygon_offset_clamp;EXT_shader_texture_lod;EXT_texture_compression_bptc;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;EXT_texture_mirror_clamp_to_edge;EXT_sRGB;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_astc;WEBGL_compressed_texture_etc;WEBGL_compressed_texture_etc1;WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw;WEBGL_polygon_mode",
    "webgl_extensions_hash": "a0b3b7ac4cbca4984e183045148a91f4",
    "webgl_renderer": "WebKit WebGL",
    "webgl_vendor": "WebKit",
    "webgl_version": "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
    "webgl_shading_language_version": "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
    "webgl_aliased_line_width_range": "[1, 1]",
    "webgl_aliased_point_size_range": "[1, 1023]",
    "webgl_antialiasing": "yes",
    "webgl_bits": "8,8,24,8,8,0",
    "webgl_max_params": "16,64,16384,4096,8192,32,8192,31,16,32,4096",
    "webgl_max_viewport_dims": "[8192, 8192]",
    "webgl_unmasked_vendor": "Intel Inc.",
    "webgl_unmasked_renderer": "Intel Iris OpenGL Engine",
    "webgl_vsf_params": "23,127,127,10,15,15,10,15,15",
    "webgl_vsi_params": "0,31,30,0,15,14,0,15,14",
    "webgl_fsf_params": "23,127,127,10,15,15,10,15,15",
    "webgl_fsi_params": "0,31,30,0,15,14,0,15,14",
    "webgl_hash_webgl": "1363a2c8545b91bcadc923b448b70932"
}
\\\`

### audio_fingerprint[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_audio_fingerprint)

See:

1.   [How the Web Audio API is used for audio fingerprinting](https://fingerprint.com/blog/audio-fingerprinting/)
2.   [How We Bypassed Safari 17's Advanced Audio Fingerprinting Protection](https://fingerprint.com/blog/bypassing-safari-17-audio-fingerprinting-protection/)

\\\`json
{
    "key": "audio_fingerprint",
    "value": "124.04347527516074"
}
\\\`

### wh[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_wh)

Window hash:

1.   Gets all the objects on the current window and sorts them.
2.   TODO: Prototype stuff.
3.   murmurHash3 both with a seed of 420.
4.   Join with "|".

\\\`json
"878d2d73be192b66d92aadd6abd5f1f9|79169737225f825ee428975a81c22b8f"
\\\`

### n[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_n)

Base64 encoded timestamp.

\\\`json
"MTc2OTc3MjYyOA=="
\\\`

### window__tree_index[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_window__tree_index)

These don't work in this environment.

\\\`json
[]
\\\`

### window__tree_structure[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_window__tree_structure)

TODO

\\\`json
"[]"
\\\`

### window__ancestor_origins[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_window__ancestor_origins)

TODO

\\\`json
[]
\\\`

### browser_object_checks[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_object_checks)

*   Checks for global objects belonging to different browsers.
*   Sorts them.
*   Joins them with ",".
*   md5 hashes them.

See the console for more details.

\\\`json
"554838a8451ac36cb977e719e9d6623c"
\\\`

### browser_detection_brave[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_detection_brave)

Detects the Brave browser via the brave global object.

\\\`json
false
\\\`

### browser_detection_firefox[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_detection_firefox)

Checks the [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) for "Firefox".

\\\`json
false
\\\`

### navigator_pdf_viewer_enabled[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_pdf_viewer_enabled)

NOTICE: Removed as of 2.16.0.

 Checks: 
\\\`javascript
navigator.pdfViewerEnabled;
\\\`

\\\`json
true
\\\`

### user_agent_data_brands[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_user_agent_data_brands)

 Checks: 
\\\`javascript
navigator.userAgentData.brands;
\\\`

\\\`json
""
\\\`

### user_agent_data_mobile[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_user_agent_data_mobile)

 Checks: 
\\\`javascript
navigator.userAgentData.mobile;
\\\`

\\\`json
false
\\\`

### screen_orientation (3f76dd27)[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_screen_orientation_(3f76dd27))

Gets the current device screen orientation.

\\\`json
"portrait-primary"
\\\`

### fake_browser[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_fake_browser)

Checks for inconsistencies between the User-Agent and the behavior of the browser state.

\\\`json
false
\\\`

### headless_browser_generic (862f2c1)[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_headless_browser_generic_(862f2c1))

Checks the various objects on the document and window related to browser automation frameworks. Including:

*   [Selenium](https://www.selenium.dev/)
*   [Spynner](https://pypi.org/project/spynner/)
*   Awesomium
*   ...and more.

\\\`json
4
\\\`

### hasFakeOS[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_hasFakeOS)

Checks for inconsistencies with userAgent and platform.

\\\`json
true
\\\`

### browser_api_checks (f58835f)[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_api_checks_(f58835f))

NOTICE: "f58835f" is now md5 hashed as of 2.16.0.

Supported browser features

\\\`json
"6681f2144d3d1ceb383fe87f7aad9600"
\\\`

### navigator_permissions_hash (replaced by [1f220c9](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_1f220c9))[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_permissions_hash_(replaced_by_1f220c9))

NOTICE: Removed as of 2.15.0 and 3.5.0

*   Checks which permissions the current page has.
*   Joins them with "|".
*   md5 hashes them.

\\\`json
{
    "key": "navigator_permissions_hash",
    "value": "67419471976a14a1430378465782c62d"
}
\\\`

### navigator_permissions_hash (1f220c9)[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_permissions_hash_(1f220c9))

NOTICE: Not _currently_ part of 4.x.x

*   Checks which permissions the current page has (including accelerometer, gamepad, nfc, etc).
*   JSON stringifies them
*   md5 hashes them

This hasn't been "reverted" in 4.x.x, as some have claimed. ArkoseLabs maintains multiple [branches](https://git-scm.com/docs/git-branch) and active deployments. The 4.x.x branch was created from an older revision that predates the 3.5.0 release. Both versions are being developed in parallel and will eventually be [merged](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests). Development has been very slow and could take a while to merge all the different active versions (2.x, 3.x, &amp; 4.x).

In addition, ArkoseLabs performs [A/B testing](https://en.wikipedia.org/wiki/A/B_testing) on new versions with a limited user base before broader rollout. Clients will eventually have to migrate to the [new versions](https://developer.arkoselabs.com/docs/pick-a-tile-end-of-life-communication).

\\\`json
{
    "key": "1f220c9",
    "value": "4265a56c672d7e6aa6193578832fbe69"
}
\\\`

### getPlugins[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getPlugins)

Browser [plugins](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/plugins).

\\\`json
[
    "Chrome PDF Viewer",
    "Chromium PDF Viewer",
    "Microsoft Edge PDF Viewer",
    "PDF Viewer",
    "WebKit built-in PDF"
]
\\\`

### speech_default[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_speech_default)

Text to speach information.

For the hash:

*   Checks voices you have installed.
*   Joins them with ",".
*   md5 hashes them.

\\\`json
[
    {
        "key": "speech_default_voice",
        "value": null
    },
    {
        "key": "speech_voices_hash",
        "value": null
    }
]
\\\`

### navigator_battery_charging[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_battery_charging)

 Checks: 
\\\`javascript
(await navigator.getBattery()).charging;
\\\`

\\\`json
{
    "key": "navigator_battery_charging",
    "value": true
}
\\\`

### media_devices (7541c2s)[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_media_devices_(7541c2s))

NOTICE: "media_device_kinds" is no longer included in the payload.

Checks which media devices are available.

\\\`json
[
    {
        "key": "media_device_kinds",
        "value": []
    },
    {
        "key": "media_devices_hash",
        "value": "d751713988987e9331980363e24189ce"
    }
]
\\\`

### getAudio[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getAudio)

NOTICE: "audio_codecs_extended" is no longer included in the payload to reduce payload size.

Checks which audio codecs are available. This can be used to detect browser environments that don't support DRM.

\\\`json
{
    "audio_codecs": "{\"ogg\":\"probably\",\"mp3\":\"probably\",\"wav\":\"probably\",\"m4a\":\"maybe\",\"aac\":\"probably\"}",
    "audio_codecs_extended": "{\"audio/mp4; codecs=\\\"mp4a.40\\\"\":{\"canPlay\":\"maybe\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.1\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.2\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"audio/mp4; codecs=\\\"mp4a.40.3\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.4\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.5\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"audio/mp4; codecs=\\\"mp4a.40.6\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.7\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.8\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.9\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.12\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.13\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.14\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.15\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.16\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.17\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.19\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.20\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.21\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.22\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.23\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.24\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.25\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.26\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.27\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.28\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.29\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"audio/mp4; codecs=\\\"mp4a.40.32\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.33\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.34\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.35\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.40.36\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.66\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.67\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"audio/mp4; codecs=\\\"mp4a.68\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.69\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp4a.6B\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"mp3\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"flac\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"audio/mp4; codecs=\\\"bogus\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"aac\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"ac3\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mp4; codecs=\\\"A52\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/mpeg; codecs=\\\"mp3\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":false},\"audio/wav; codecs=\\\"0\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/wav; codecs=\\\"2\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/wave; codecs=\\\"0\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/wave; codecs=\\\"1\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/wave; codecs=\\\"2\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/x-wav; codecs=\\\"0\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/x-wav; codecs=\\\"1\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":false},\"audio/x-wav; codecs=\\\"2\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/x-pn-wav; codecs=\\\"0\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/x-pn-wav; codecs=\\\"1\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"audio/x-pn-wav; codecs=\\\"2\\\"\":{\"canPlay\":\"\",\"mediaSource\":false}}",
    "audio_codecs_extended_hash": "805036349642e2569ec299baed02315b"
}
\\\`

### getVideo[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getVideo)

Checks which video codecs are available. This can be used to detect browser environments that don't support DRM.

NOTICE: "video_codecs_extended" is no longer included in the payload to reduce payload size.

\\\`json
{
    "video_codecs": "{\"ogg\":\"\",\"h264\":\"probably\",\"webm\":\"probably\",\"mpeg4v\":\"\",\"mpeg4a\":\"\",\"theora\":\"\"}",
    "video_codecs_extended": "{\"video/mp4; codecs=\\\"hev1.1.6.L93.90\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"video/mp4; codecs=\\\"hvc1.1.6.L93.90\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"video/mp4; codecs=\\\"hev1.1.6.L93.B0\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"video/mp4; codecs=\\\"hvc1.1.6.L93.B0\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"video/mp4; codecs=\\\"vp09.00.10.08\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"video/mp4; codecs=\\\"vp09.00.50.08\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"video/mp4; codecs=\\\"vp09.01.20.08.01\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"video/mp4; codecs=\\\"vp09.01.20.08.01.01.01.01.00\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"video/mp4; codecs=\\\"vp09.02.10.10.01.09.16.09.01\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"video/mp4; codecs=\\\"av01.0.08M.08\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"video/webm; codecs=\\\"vorbis\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"video/webm; codecs=\\\"vp8\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"video/webm; codecs=\\\"vp8.0\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":false},\"video/webm; codecs=\\\"vp8.0, vorbis\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":false},\"video/webm; codecs=\\\"vp8, opus\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"video/webm; codecs=\\\"vp9\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"video/webm; codecs=\\\"vp9, vorbis\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"video/webm; codecs=\\\"vp9, opus\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":true},\"video/x-matroska; codecs=\\\"theora\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"application/x-mpegURL; codecs=\\\"avc1.42E01E\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":false},\"video/ogg; codecs=\\\"dirac, vorbis\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"video/ogg; codecs=\\\"theora, speex\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"video/ogg; codecs=\\\"theora, vorbis\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"video/ogg; codecs=\\\"theora, flac\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"video/ogg; codecs=\\\"dirac, flac\\\"\":{\"canPlay\":\"\",\"mediaSource\":false},\"video/ogg; codecs=\\\"flac\\\"\":{\"canPlay\":\"probably\",\"mediaSource\":false},\"video/3gpp; codecs=\\\"mp4v.20.8, samr\\\"\":{\"canPlay\":\"\",\"mediaSource\":false}}",
    "video_codecs_extended_hash": "860df88c1903a4e3930122c4dec33a52"
}
\\\`

### supported_math_functions[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_supported_math_functions)

Checks what Math functions are supported in the current browser.

\\\`json
"67d1759d7e92844d98045708c0a91c2f"
\\\`

### math_fingerprint[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_math_fingerprint)

Runs a bunch of math calculations.

This can be used to detect if the enforcement script is being run in a different environment than is claimed by the client. For example, calculating the math like V8 (Chrome) but claiming to be JavaScriptCore (Safari).

\\\`json
"0ce80c69b75667d69baedc0a70c82da7"
\\\`

### 1l2l5234ar2[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_1l2l5234ar2)

Checks if you have DevTools open or are using Puppeteer.

\\\`json
"1769772628786\\u2063"
\\\`

### 29s83ih9[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_29s83ih9)

Checks for different sandbox environments such as JSDom.

\\\`json
"68934a3e9455fa72420237eb05902327\\u2063"
\\\`

### media_query_dark_mode[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_media_query_dark_mode)

Queries for dark mode.

\\\`javascript
matchMedia("(prefers-color-scheme: dark)").matches;
\\\`

\\\`javascript
false
\\\`

### f9bf2db[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_f9bf2db)

Checks various CSS media queries shown below:

*   "pc" = "prefers-contrast"
*   "ah" = "any-hover"
*   "ap" = "any-pointer"
*   "p" = "pointer"
*   "h" = "hover"
*   "u" = "update"
*   "ic" = "inverted-colors"
*   "prm" = "prefers-reduced-motion"
*   "prt" = "prefers-reduced-transparency"
*   "s" = "scripting"
*   "fc" = "forced-colors"

This succeeds css_media_queries.

\\\`json
"{\"pc\":\"no-preference\",\"ah\":\"none\",\"ap\":\"none\",\"p\":\"none\",\"h\":\"none\",\"u\":\"fast\",\"prm\":\"no-preference\",\"prt\":\"no-preference\",\"s\":\"enabled\",\"fc\":\"none\"}"
\\\`

### css_media_queries (replaced by [f9bf2db](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_f9bf2db))[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_media_queries_(replaced_by_f9bf2db))

NOTICE: Removed as of 3.4.0

*   \\\`javascript
matchMedia("(prefers-color-scheme:light)");
\\\`
*   \\\`javascript
matchMedia("(prefers-color-scheme:dark)");
\\\`

\\\`json
0
\\\`

### css_color_gamut[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_color_gamut)

NOTICE: Removed as of 3.4.0

Checks what color gamuts are supported.

*   \\\`javascript
matchMedia("(color-gamut:rec2020)");
\\\`
*   \\\`javascript
matchMedia("(color-gamut:p3)");
\\\`
*   \\\`javascript
matchMedia("(color-gamut:srgb)");
\\\`

\\\`json
"srgb"
\\\`

### css_contrast[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_contrast)

NOTICE: Removed as of 3.4.0

Checks user's contrast preference.

*   \\\`javascript
matchMedia("(prefers-contrast:low)");
\\\`
*   \\\`javascript
matchMedia("(prefers-contrast:less)");
\\\`
*   \\\`javascript
matchMedia("(prefers-contrast:no-preference)");
\\\`
*   \\\`javascript
matchMedia("(prefers-contrast:more)");
\\\`
*   \\\`javascript
matchMedia("(prefers-contrast:high)");
\\\`
*   \\\`javascript
matchMedia("(prefers-contrast:forced)");
\\\`

\\\`json
"no-preference"
\\\`

### css_monochrome[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_monochrome)

NOTICE: Removed as of 3.4.0

Checks user's monochrome preference.

\\\`json
"0"
\\\`

### css_pointer[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_pointer)

NOTICE: Removed as of 3.4.0

*   \\\`javascript
matchMedia("(any-pointer:1)");
\\\`
*   \\\`javascript
matchMedia("(any-pointer:coarse)");
\\\`
*   \\\`javascript
matchMedia("(any-pointer:none");
							")
\\\`
*   \\\`javascript
matchMedia("(any-pointer:fine)");
\\\`

\\\`json
"none"
\\\`

### css_grid_support[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_grid_support)

NOTICE: Removed as of 3.4.0

*   \\\`javascript
matchMedia("(grid:1)");
\\\`
*   \\\`javascript
matchMedia("(grid:0)");
\\\`

\\\`json
false
\\\`

### getFonts[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getFonts)

Checks for the presence of 65 different fonts from a predetermined list. This could be used to detect your platform. For example, Wingdings is only on Windows.

Can can be empty on some sites including R****x due to display: none on their dialog.

Search for "fade modal-modern modal-modern-challenge-captcha in modal"

[Source:](https://js.rbxcdn.com/e522b6ce43e33f1f4895045b603e11793093272b186d8a8084f747085ebceb2f.js)
\\\`javascript
{
					className: "modal-modern modal-modern-challenge-captcha",
					show: (p || !T) &amp;&amp; !L.current,
					style: {
					display: T ? "block" : "none"
					},
					onHide: P,
					backdrop: !!T &amp;&amp; "static"
					}
\\\`
[Source](https://css.rbxcdn.com/bc981bafa6b0a52c86d071d1f81b24168a8dd92e72b8ac52d37cb46bf8bd8c42.css): 
\\\`css
.modal-dialog .modal-content .modal-body .modal-processing {
					display: none
					}
\\\`

\\\`json
[
    "Arial",
    "Courier",
    "Courier New",
    "Helvetica",
    "Times",
    "Times New Roman"
]
\\\`

### TO[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_TO)

Checks your timezone. This can be correlated with the approximate location of your IP address.

\\\`json
0
\\\`

### rtc_peer_connection (5dd48ca0)[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_rtc_peer_connection_(5dd48ca0))

Checks the existence of:

*   \\\`javascript
window.RTCPeerConnection;
\\\`
*   \\\`javascript
window.mozRTCPeerConnection;
\\\`
*   \\\`javascript
window.webkitRTCPeerConnection;
\\\`

And then stores the result in a number using bit shifting.

\\\`json
5
\\\`

### jsbd[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_jsbd)

*   HL: 
\\\`javascript
window.history.length;
\\\`
*   NCE: 
\\\`javascript
navigator.cookieEnabled;
\\\`
*   DT: 
\\\`javascript
document.title;
\\\`
*   NWD: 
\\\`javascript
JSON.stringify(navigator.webdriver);
\\\`

\\\`json
{
    "HL": 2,
    "NCE": true,
    "DT": "Arkose FP Docs",
    "NWD": "false",
    "DMTO": 1,
    "DOTO": 1
}
\\\`

### 6a62b2a558[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_6a62b2a558)

Script version hash:

\\\`bash
"enforcement.6c9d6e9be9aa044cc5ce9548b4abe1b0.js";
\\\`

### 4b4b269e68[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_4b4b269e68)

Random UUID:

\\\`javascript
crypto.randomUUID();
\\\`

### c8480e29a[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_c8480e29a)

MD5 hashed surl.

\\\`javascript
md5(surl) + (surl ? "\u2062" : "\u2063");
\\\`

### 4ca87df3d1[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_4ca87df3d1)

mbio mouse events. See the [events page](https://azureflow.github.io/arkose-fp-docs/mouse.html) for more details.

\\\`javascript
function insertEvent() {
					const n = {
					timestamp: Date.now() - Qt.timestamp,
					type: e,
					x: m.pageX,
					y: m.pageY,
					};
					Qt["4ca87df3d1"].push(n);
					_lastMouseMove = n;
					}

					if(Qt["4ca87df3d1"].length &lt; 75) {
					if(e === 0) {
					if(_lastMouseMove) {
					if(Math.sqrt((m.pageX - _lastMouseMove.x) * (m.pageX - _lastMouseMove.x) + (m.pageY - _lastMouseMove.y) * (m.pageY - _lastMouseMove.y)) &gt; 5) {
					insertEvent();
					}
					return;
					}
					else {
					insertEvent();
					return;
					}
					}
					Qt["4ca87df3d1"].push({
					timestamp: Date.now() - Qt.timestamp,
					type: e,
					x: m.pageX,
					y: m.pageY,
					});
					}
\\\`

### 867e25e5d4[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_867e25e5d4)

mbio touch events. See the [events page](https://azureflow.github.io/arkose-fp-docs/mouse.html) for more details.

\\\`javascript
for(let i = 0; i &lt; v.touches.length; i += 1) {
					if(Qt["867e25e5d4"].length &lt; 75) {
					Qt["867e25e5d4"].push({
					timestamp: Date.now() - Qt.timestamp,
					type: e,
					x: Math.floor(v.touches[i].pageX),
					y: Math.floor(v.touches[i].pageY),
					});
					}
					}
\\\`

### d4a306884c[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_d4a306884c)

mbio key events. See the [events page](https://azureflow.github.io/arkose-fp-docs/mouse.html) for more details.

\\\`javascript
const keyboardEventTypes = {
					Tab: 0,
					Enter: 1,
					Space: 3,
					ShiftLeft: 4,
					ShiftRight: 5,
					ControlLeft: 6,
					ControlRight: 7,
					MetaLeft: 8,
					MetaRight: 9,
					AltLeft: 10,
					AltRight: 11,
					Backspace: 12,
					Escape: 13,
					};
					if(Qt.d4a306884c.length &lt; 75) {
					Qt.d4a306884c.push({
					timestamp: Date.now() - Qt.timestamp,
					type: e,
					code: keyboardEventTypes[A.code] ?? 14,
					});
					}
\\\`

### 43f2d94[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_43f2d94)

Collects web3 data such as if MetaMask is available.

\\\`json
[]
\\\`

### 4f59ca8[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_4f59ca8)

Checks if Apple Pay is available and what version is supported.

\\\`json
null
\\\`

### 20c15922[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_20c15922)

Checks if Bluetooth is available.

\\\`json
false
\\\`

### c2d2015[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_c2d2015)

Collects sensor data (see source) and MD5 hashes it.

\\\`json
"29d13b1af8803cb86c2697345d7ea9eb"
\\\`

### 3ea7194[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_3ea7194)

Checks if "HDR10", "HLG", "DolbyVision" codecs are supported. Checks if HDR is supported.

\\\`json
{
    "supported": false,
    "formats": [],
    "isHDR": false
}
\\\`

### 05d3d24[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_05d3d24)

Checks the following CSS properties, sorts, stringify "key=value;key=value", md5 hash:

*   \\\`javascript
"(prefers-color-scheme: dark)"
\\\`
*   \\\`javascript
"(prefers-reduced-motion: reduce)"
\\\`
*   \\\`javascript
"(forced-colors: active)"
\\\`
*   \\\`javascript
"(color-gamut: p3)"
\\\`
*   \\\`javascript
"(color-gamut: srgb)"
\\\`
*   \\\`javascript
"(prefers-contrast: more)"
\\\`
*   \\\`javascript
"(inverted-colors: inverted)"
\\\`
*   \\\`javascript
"(any-hover: hover)"
\\\`
*   \\\`javascript
"(prefers-reduced-data: reduce)"
\\\`
*   \\\`javascript
"(prefers-reduced-transparency: reduce)"
\\\`
*   \\\`javascript
"(dynamic-range: high)"
\\\`
*   \\\`javascript
"(hover: hover)"
\\\`
*   \\\`javascript
"(pointer: fine)"
\\\`
*   \\\`javascript
"(pointer: coarse)"
\\\`
*   \\\`javascript
"(orientation: landscape)"
\\\`
*   \\\`javascript
"(display-mode: fullscreen)"
\\\`
*   \\\`javascript
"(display-mode: standalone)"
\\\`
*   \\\`javascript
"(display-mode: minimal-ui)"
\\\`
*   \\\`javascript
"(video-color-gamut: p3)"
\\\`
*   \\\`javascript
"(video-color-gamut: srgb)"
\\\`
*   \\\`javascript
"(video-color-gamut: rec2020)"
\\\`
*   \\\`javascript
"(video-contrast: high)"
\\\`
*   \\\`javascript
"(video-dynamic-range: high)"
\\\`

\\\`json
"46703a4fda9ef2186238e1df90ef6a37"
\\\`

### 83eb055[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_83eb055)

Gets the keyboard layout. Returns false in 2.13.0 because of "SecurityError: getLayoutMap() must be called from a top-level browsing context or allowed by the permission policy." since 3.x.x is architected differently.

\\\`json
{
    "key": "83eb055",
    "value": "79f0e97a84a3d83d5c46791ee529e4a0"
}
\\\`

### vsadsa[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_vsadsa)

\\\`json
1
\\\`

### basfas[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_basfas)

window.performance.memory.jsHeapSizeLimit

\\\`json
[
    0,
    2248146944
]
\\\`

### lfasdgs[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_lfasdgs)

Arkose Build ID (header: "ark-build-id"). "cbid" likely stands for Client Build ID.

\\\`javascript
window.arkl.cbid
\\\`

### network_info_rtt_type[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_network_info_rtt_type)

This value has been repurposed for use inside the virtual machine. It takes the first 3 characters of webgl_extensions_hash and webgl_hash_webgl then merges them.

\\\`json
{
    "key": "network_info_rtt_type",
    "value": "a0b136"
}
\\\`

### screen_pixel_depth[#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_screen_pixel_depth)

This value has been repurposed for use inside the virtual machine. It takes the pixel depth and multiplies by 3.

\\\`json
72
\\\`

* * *

 Made by [AzureFlow](https://github.com/AzureFlow).

Images:
This page does not seem to contain any images.

Links/Buttons:
- [Buy me a coffee ☕](https://ko-fi.com/azureflow)
- [Source code](https://github.com/AzureFlow/arkose-fp-docs/blob/main/arkose_re_docs.html)
- [Known public keys](https://azureflow.github.io/arkose-fp-docs/keys.html)
- [Payload decrypter (&lt;4.x.x)](https://azureflow.github.io/arkose-fp-docs/decrypt.html)
- [Mouse data](https://azureflow.github.io/arkose-fp-docs/mouse.html)
- [Breaker v2 (tguess)](https://azureflow.github.io/arkose-fp-docs/breaker.html)
- [Arkose Mobile SDK (Android) fingerprint docs](https://gist.github.com/AzureFlow/38788d6ee3eb5b2b811f88415bfa8d78)
- [Blob information](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/lib/arkose/data_exchange_payload.rb#L42)
- [Arkose overview](https://docs.gitlab.com/ee/integration/arkose.html)
- [Arkose documentation](https://developer.arkoselabs.com/docs/)
- [is_keyless](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_is_keyless)
- [cfp](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_cfp)
- [WebGL](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_WebGL)
- [audio_fingerprint](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_audio_fingerprint)
- [wh](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_wh)
- [n](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_n)
- [window__tree_index](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_window__tree_index)
- [window__tree_structure](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_window__tree_structure)
- [window__ancestor_origins](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_window__ancestor_origins)
- [browser_object_checks](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_object_checks)
- [browser_detection_brave](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_detection_brave)
- [browser_detection_firefox](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_detection_firefox)
- [navigator_pdf_viewer_enabled](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_pdf_viewer_enabled)
- [user_agent_data_brands](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_user_agent_data_brands)
- [user_agent_data_mobile](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_user_agent_data_mobile)
- [screen_orientation (3f76dd27)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_screen_orientation_(3f76dd27))
- [fake_browser](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_fake_browser)
- [headless_browser_generic (862f2c1)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_headless_browser_generic_(862f2c1))
- [hasFakeOS](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_hasFakeOS)
- [browser_api_checks (f58835f)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_api_checks_(f58835f))
- [navigator_permissions_hash (replaced by 1f220c9)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_permissions_hash_(replaced_by_1f220c9))
- [navigator_permissions_hash (1f220c9)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_permissions_hash_(1f220c9))
- [getPlugins](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getPlugins)
- [speech_default](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_speech_default)
- [navigator_battery_charging](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_battery_charging)
- [media_devices (7541c2s)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_media_devices_(7541c2s))
- [getAudio](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getAudio)
- [getVideo](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getVideo)
- [supported_math_functions](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_supported_math_functions)
- [math_fingerprint](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_math_fingerprint)
- [1l2l5234ar2](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_1l2l5234ar2)
- [29s83ih9](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_29s83ih9)
- [media_query_dark_mode](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_media_query_dark_mode)
- [f9bf2db](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_f9bf2db)
- [css_media_queries (replaced by f9bf2db)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_media_queries_(replaced_by_f9bf2db))
- [css_color_gamut](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_color_gamut)
- [css_contrast](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_contrast)
- [css_monochrome](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_monochrome)
- [css_pointer](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_pointer)
- [css_grid_support](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_grid_support)
- [getFonts](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getFonts)
- [TO](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_TO)
- [rtc_peer_connection (5dd48ca0)](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_rtc_peer_connection_(5dd48ca0))
- [jsbd](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_jsbd)
- [6a62b2a558](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_6a62b2a558)
- [4b4b269e68](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_4b4b269e68)
- [c8480e29a](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_c8480e29a)
- [4ca87df3d1](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_4ca87df3d1)
- [867e25e5d4](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_867e25e5d4)
- [d4a306884c](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_d4a306884c)
- [43f2d94](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_43f2d94)
- [4f59ca8](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_4f59ca8)
- [20c15922](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_20c15922)
- [c2d2015](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_c2d2015)
- [3ea7194](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_3ea7194)
- [05d3d24](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_05d3d24)
- [83eb055](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_83eb055)
- [vsadsa](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_vsadsa)
- [basfas](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_basfas)
- [lfasdgs](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_lfasdgs)
- [network_info_rtt_type](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_network_info_rtt_type)
- [screen_pixel_depth](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_screen_pixel_depth)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_is_keyless)
- [here](https://web.archive.org/web/20250323002049/https://developer.arkoselabs.com/docs/standard-setup#dynamic-client-api-key-setup)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_cfp)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_WebGL)
- [canvas fingerprint](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_cfp)
- [paper by Google](https://research.google/pubs/picasso-lightweight-device-class-fingerprinting-for-web-clients/)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_audio_fingerprint)
- [How the Web Audio API is used for audio fingerprinting](https://fingerprint.com/blog/audio-fingerprinting/)
- [How We Bypassed Safari 17's Advanced Audio Fingerprinting Protection](https://fingerprint.com/blog/bypassing-safari-17-audio-fingerprinting-protection/)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_wh)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_n)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_window__tree_index)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_window__tree_structure)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_window__ancestor_origins)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_object_checks)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_detection_brave)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_detection_firefox)
- [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_pdf_viewer_enabled)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_user_agent_data_brands)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_user_agent_data_mobile)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_screen_orientation_(3f76dd27))
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_fake_browser)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_headless_browser_generic_(862f2c1))
- [Selenium](https://www.selenium.dev/)
- [Spynner](https://pypi.org/project/spynner/)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_hasFakeOS)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_browser_api_checks_(f58835f))
- [1f220c9](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_1f220c9)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_permissions_hash_(replaced_by_1f220c9))
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_permissions_hash_(1f220c9))
- [branches](https://git-scm.com/docs/git-branch)
- [merged](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [A/B testing](https://en.wikipedia.org/wiki/A/B_testing)
- [new versions](https://developer.arkoselabs.com/docs/pick-a-tile-end-of-life-communication)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getPlugins)
- [plugins](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/plugins)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_speech_default)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_navigator_battery_charging)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_media_devices_(7541c2s))
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getAudio)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getVideo)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_supported_math_functions)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_math_fingerprint)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_1l2l5234ar2)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_29s83ih9)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_media_query_dark_mode)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_f9bf2db)
- [f9bf2db](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_f9bf2db)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_media_queries_(replaced_by_f9bf2db))
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_color_gamut)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_contrast)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_monochrome)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_pointer)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_css_grid_support)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_getFonts)
- [Source:](https://js.rbxcdn.com/e522b6ce43e33f1f4895045b603e11793093272b186d8a8084f747085ebceb2f.js)
- [Source](https://css.rbxcdn.com/bc981bafa6b0a52c86d071d1f81b24168a8dd92e72b8ac52d37cb46bf8bd8c42.css)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_TO)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_rtc_peer_connection_(5dd48ca0))
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_jsbd)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_6a62b2a558)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_4b4b269e68)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_c8480e29a)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_4ca87df3d1)
- [events page](https://azureflow.github.io/arkose-fp-docs/mouse.html)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_867e25e5d4)
- [events page](https://azureflow.github.io/arkose-fp-docs/mouse.html)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_d4a306884c)
- [events page](https://azureflow.github.io/arkose-fp-docs/mouse.html)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_43f2d94)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_4f59ca8)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_20c15922)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_c2d2015)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_3ea7194)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_05d3d24)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_83eb055)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_vsadsa)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_basfas)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_lfasdgs)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_network_info_rtt_type)
- [#](https://azureflow.github.io/arkose-fp-docs/arkose_re_docs.html#h_screen_pixel_depth)
- [AzureFlow](https://github.com/AzureFlow)

