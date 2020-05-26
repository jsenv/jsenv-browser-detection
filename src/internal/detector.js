import { detectAndroid } from "./detectAndroid.js";
import { detectInternetExplorer } from "./detectInternetExplorer.js";
import { detectOpera } from "./detectOpera.js";
import { detectEdge } from "./detectEdge.js";
import { detectFirefox } from "./detectFirefox.js";
import { detectChrome } from "./detectChrome.js";
import { detectSafari } from "./detectSafari.js";
import { detectElectron } from "./detectElectron.js";
import { detectIOS } from "./detectIOS.js";

const detectorCompose = (detectors) => () => {
  let i = 0;
  while (i < detectors.length) {
    const detector = detectors[i];
    i++;
    const result = detector();
    if (result) {
      return result;
    }
  }
  return null;
};

export const detector = detectorCompose([
  detectOpera,
  detectInternetExplorer,
  detectEdge,
  detectFirefox,
  detectChrome,
  detectSafari,
  detectElectron,
  detectIOS,
  detectAndroid,
]);
