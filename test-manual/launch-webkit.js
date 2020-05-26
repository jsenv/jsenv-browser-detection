// this file launches a webkit brwoser, useful to test if exploring works on wekbit

import { createRequire } from "module"

const require = createRequire(import.meta.url)

const start = async () => {
  const { webkit } = require("playwright-webkit")

  const browser = await webkit.launch({ headless: false })
  const context = await browser.newContext()
  await context.newPage()
}

start()
