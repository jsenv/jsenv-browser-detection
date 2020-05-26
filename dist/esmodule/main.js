var firstMatch = function firstMatch(regexp, string) {
  var match = string.match(regexp);
  return match && match.length > 0 ? match[1] || undefined : undefined;
};
var secondMatch = function secondMatch(regexp, string) {
  var match = string.match(regexp);
  return match && match.length > 1 ? match[2] || undefined : undefined;
};
var userAgentToVersion = function userAgentToVersion(userAgent) {
  return firstMatch(/version\/(\d+(\.?_?\d+)+)/i, userAgent) || undefined;
};

var detectAndroid = function detectAndroid() {
  return navigatorToBrowser(window.navigator);
};

var navigatorToBrowser = function navigatorToBrowser(_ref) {
  var userAgent = _ref.userAgent,
      appVersion = _ref.appVersion;

  if (/(android)/i.test(userAgent)) {
    return {
      name: "android",
      version: firstMatch(/Android (\d+(\.?_?\d+)+)/i, appVersion)
    };
  }

  return null;
};

var detectInternetExplorer = function detectInternetExplorer() {
  return userAgentToBrowser(window.navigator.userAgent);
};

var userAgentToBrowser = function userAgentToBrowser(userAgent) {
  if (/msie|trident/i.test(userAgent)) {
    return {
      name: "ie",
      version: firstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, userAgent)
    };
  }

  return null;
};

var detectOpera = function detectOpera() {
  return userAgentToBrowser$1(window.navigator.userAgent);
};

var userAgentToBrowser$1 = function userAgentToBrowser(userAgent) {
  // opera below 13
  if (/opera/i.test(userAgent)) {
    return {
      name: "opera",
      version: userAgentToVersion(userAgent) || firstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, userAgent)
    };
  } // opera above 13


  if (/opr\/|opios/i.test(userAgent)) {
    return {
      name: "opera",
      version: firstMatch(/(?:opr|opios)[\s/](\S+)/i, userAgent) || userAgentToVersion(userAgent)
    };
  }

  return null;
};

var detectEdge = function detectEdge() {
  return userAgentToBrowser$2(window.navigator.userAgent);
};

var userAgentToBrowser$2 = function userAgentToBrowser(userAgent) {
  if (/edg([ea]|ios)/i.test(userAgent)) {
    return {
      name: "edge",
      version: secondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, userAgent)
    };
  }

  return null;
};

var detectFirefox = function detectFirefox() {
  return userAgentToBrowser$3(window.navigator.userAgent);
};

var userAgentToBrowser$3 = function userAgentToBrowser(userAgent) {
  if (/firefox|iceweasel|fxios/i.test(userAgent)) {
    return {
      name: "firefox",
      version: firstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, userAgent)
    };
  }

  return null;
};

var detectChrome = function detectChrome() {
  return userAgentToBrowser$4(window.navigator.userAgent);
};

var userAgentToBrowser$4 = function userAgentToBrowser(userAgent) {
  if (/chromium/i.test(userAgent)) {
    return {
      name: "chrome",
      version: firstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, userAgent) || userAgentToVersion(userAgent)
    };
  }

  if (/chrome|crios|crmo/i.test(userAgent)) {
    return {
      name: "chrome",
      version: firstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, userAgent)
    };
  }

  return null;
};

var detectSafari = function detectSafari() {
  return userAgentToBrowser$5(window.navigator.userAgent);
};

var userAgentToBrowser$5 = function userAgentToBrowser(userAgent) {
  if (/safari|applewebkit/i.test(userAgent)) {
    return {
      name: "safari",
      version: userAgentToVersion(userAgent)
    };
  }

  return null;
};

var detectElectron = function detectElectron() {
  return null;
}; // TODO

var detectIOS = function detectIOS() {
  return navigatorToBrowser$1(window.navigator);
};

var navigatorToBrowser$1 = function navigatorToBrowser(_ref) {
  var userAgent = _ref.userAgent,
      appVersion = _ref.appVersion;

  if (/iPhone;/.test(userAgent)) {
    return {
      name: "ios",
      version: firstMatch(/OS (\d+(\.?_?\d+)+)/i, appVersion)
    };
  }

  if (/iPad;/.test(userAgent)) {
    return {
      name: "ios",
      version: firstMatch(/OS (\d+(\.?_?\d+)+)/i, appVersion)
    };
  }

  return null;
};

var detectorCompose = function detectorCompose(detectors) {
  return function () {
    var i = 0;

    while (i < detectors.length) {
      var _detector = detectors[i];
      i++;

      var result = _detector();

      if (result) {
        return result;
      }
    }

    return null;
  };
};

var detector = detectorCompose([detectOpera, detectInternetExplorer, detectEdge, detectFirefox, detectChrome, detectSafari, detectElectron, detectIOS, detectAndroid]);

/*
https://github.com/Ahmdrza/detect-browser/blob/26254f85cf92795655a983bfd759d85f3de850c6/detect-browser.js#L1
https://github.com/lancedikson/bowser/blob/master/src/parser-browsers.js#L1
*/
var detectBrowser = function detectBrowser() {
  var _ref = detector() || {},
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? "other" : _ref$name,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? "unknown" : _ref$version;

  return {
    name: normalizeName(name),
    version: normalizeVersion(version)
  };
};

var normalizeName = function normalizeName(name) {
  return name.toLowerCase();
};

var normalizeVersion = function normalizeVersion(version) {
  if (version.indexOf(".") > -1) {
    var parts = version.split("."); // remove extraneous .

    return parts.slice(0, 3).join(".");
  }

  if (version.indexOf("_") > -1) {
    var _parts = version.split("_"); // remove extraneous _


    return _parts.slice(0, 3).join("_");
  }

  return version;
};

export { detectBrowser };
//# sourceMappingURL=main.js.map
