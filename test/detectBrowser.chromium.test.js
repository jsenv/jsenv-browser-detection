import { assert } from "@jsenv/assert"
import { detectBrowser } from "../index.js"

const actual = detectBrowser()
const expected = {
  name: "chrome",
  version: "84.0.4135",
}
assert({ actual, expected })
