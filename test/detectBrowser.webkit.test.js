import { assert } from "@jsenv/assert"
import { detectBrowser } from "../index.js"

const actual = detectBrowser()
const expected = {
  name: "safari",
  version: "13.0.4",
}
assert({ actual, expected })
