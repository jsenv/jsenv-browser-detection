import { executeTestPlan, launchChromiumTab, launchFirefoxTab, launchWebkitTab } from "@jsenv/core"
import * as jsenvConfig from "../../jsenv.config.js"

executeTestPlan({
  ...jsenvConfig,
  testPlan: {
    "test/**/*.test.js": {
      chromium: {
        launch: launchChromiumTab,
      },
      firefox: {
        launch: launchFirefoxTab,
      },
      webkit: {
        launch: launchWebkitTab,
      },
    },
    "test/**/*.chromium.test.js": {
      chromium: {
        launch: launchChromiumTab,
      },
      firefox: null,
      webkit: null,
    },
    "test/**/*.firefox.test.js": {
      chromium: null,
      firefox: {
        launch: launchFirefoxTab,
      },
      webkit: null,
    },
    "test/**/*.webkit.test.js": {
      chromium: null,
      firefox: null,
      webkit: {
        launch: launchWebkitTab,
      },
    },
  },
  completedExecutionLogMerging: true,
})
