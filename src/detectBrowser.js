/*
https://github.com/Ahmdrza/detect-browser/blob/26254f85cf92795655a983bfd759d85f3de850c6/detect-browser.js#L1
https://github.com/lancedikson/bowser/blob/master/src/parser-browsers.js#L1
*/

import { detector } from "./internal/detector.js"

export const detectBrowser = () => {
  const { name = "other", version = "unknown" } = detector() || {}

  return {
    name: normalizeName(name),
    version: normalizeVersion(version),
  }
}

const normalizeName = (name) => {
  return name.toLowerCase()
}

const normalizeVersion = (version) => {
  if (version.indexOf(".") > -1) {
    const parts = version.split(".")
    // remove extraneous .
    return parts.slice(0, 3).join(".")
  }

  if (version.indexOf("_") > -1) {
    const parts = version.split("_")
    // remove extraneous _
    return parts.slice(0, 3).join("_")
  }

  return version
}
