import { assert } from "@jsenv/assert"
import { detectBrowser } from "../index.js"

const actual = detectBrowser()
const expected = {
  name: "firefox",
  version: "76.0",
}
assert({ actual, expected })
