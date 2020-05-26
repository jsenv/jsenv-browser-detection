# browser detection

Browser detection script.

[![github package](https://img.shields.io/github/package-json/v/jsenv/jsenv-browser-detection.svg?logo=github&label=package)](https://github.com/jsenv/jsenv-browser-detection/packages)
[![npm package](https://img.shields.io/npm/v/@jsenv/browser-detection.svg?logo=npm&label=package)](https://www.npmjs.com/package/@jsenv/browser-detection)
[![github ci](https://github.com/jsenv/jsenv-browser-detection/workflows/ci/badge.svg)](https://github.com/jsenv/jsenv-browser-detection/actions?workflow=ci)
[![codecov coverage](https://codecov.io/gh/jsenv/jsenv-browser-detection/branch/master/graph/badge.svg)](https://codecov.io/gh/jsenv/jsenv-browser-detection)

## Example

```html
<html>
  <head>
    <script type="module">
      import { detectBrowser } from "https://unpkg.com/@jsenv/browser-detection@latest/dist/esmodule/main.js"

      console.log(detectBrowser())
    </script>
  </head>
</html>
```

See https://codepen.io/dmail/pen/OJyGYPP
