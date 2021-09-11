// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/color_schema.json":[function(require,module,exports) {
module.exports = {
  "light_default": {
    "transparent": "transparent",
    "blue600": "#0083EB",
    "blue500": "#1D9BF0",
    "blue300": "#6BC9FB",
    "blue200": "#97E3FF",
    "blue100": "#BFF2FF",
    "blue50": "#D7F6FF",
    "blue0": "#EAFAFF",
    "plum600": "#AB2BAE",
    "plum500": "#C936CC",
    "plum300": "#DF82E0",
    "plum200": "#E9A7EB",
    "plum100": "#F4CDF5",
    "plum50": "#FAE0FA",
    "plum0": "#FFEFFF",
    "purple600": "#6545DB",
    "purple500": "#7856FF",
    "purple300": "#AC97FF",
    "purple200": "#C5B7FF",
    "purple100": "#DFD8FF",
    "purple50": "#ECE8FF",
    "purple0": "#F5F3FF",
    "green600": "#009C64",
    "green500": "#00BA7C",
    "green300": "#61D6A3",
    "green200": "#92E3BF",
    "green100": "#C2F1DC",
    "green50": "#DBF8EB",
    "green0": "#EDFFF9",
    "yellow600": "#DCAB00",
    "yellow500": "#FFD400",
    "yellow300": "#FFEB6B",
    "yellow200": "#FFF595",
    "yellow100": "#FFFEC0",
    "yellow50": "#FFFED7",
    "yellow0": "#FFFDEA",
    "magenta600": "#D4136D",
    "magenta500": "#F91880",
    "magenta300": "#FB70B0",
    "magenta200": "#FD9BC9",
    "magenta100": "#FEC7E1",
    "magenta50": "#FFDDED",
    "magenta0": "#FFF1F8",
    "orange600": "#D86000",
    "orange500": "#FF7A00",
    "orange300": "#FFAD61",
    "orange200": "#FFC692",
    "orange100": "#FFE0C2",
    "orange50": "#FFEDDB",
    "orange0": "#FEF5EC",
    "red600": "#D11A28",
    "red500": "#F4212E",
    "red300": "#F87580",
    "red200": "#FB9FA8",
    "red100": "#FDC9CE",
    "red50": "#FEDEE3",
    "red0": "#FFF0F1",
    "teal600": "#009399",
    "teal500": "#00AFB6",
    "teal300": "#3CD6DD",
    "teal200": "#78E4E8",
    "teal100": "#B3F1F4",
    "teal50": "#D1F8FA",
    "teal0": "#E9FEFF",
    "gray1100": "#0F1419",
    "translucentBlack77": "rgba(0,0,0,0.77)",
    "translucentBlack30": "rgba(0,0,0,0.3)",
    "translucentBlack15": "rgba(0,0,0,0.15)",
    "white": "#FFFFFF",
    "primary": "#1D9BF0",
    "primaryOnWhite": "#1D9BF0",
    "lightPrimary": "#6BC9FB",
    "lightPrimaryWithOpacity": "#6BC9FB",
    "primary50": "#D7F6FF",
    "link": "#1B95E0",
    "unreadCellBackground": "#EAFAFF",
    "experimentalButtonAlwaysBlack": "#0F1419",
    "experimentalButtonAlwaysWhite": "#EFF3F4",
    "experimentalLightButtonText": "#FFFFFF",
    "legacyPink": "#E0245E"
  },
  "light_default_high_contrast": {
    "transparent": "transparent",
    "blue600": "#0083EB",
    "blue500": "#70C8FF",
    "blue300": "#6BC9FB",
    "blue200": "#97E3FF",
    "blue100": "#BFF2FF",
    "blue50": "#D7F6FF",
    "blue0": "#EAFAFF",
    "plum600": "#AB2BAE",
    "plum500": "#DF82E0",
    "plum300": "#DF82E0",
    "plum200": "#E9A7EB",
    "plum100": "#F4CDF5",
    "plum50": "#FAE0FA",
    "plum0": "#FFEFFF",
    "purple600": "#6545DB",
    "purple500": "#BEA8E2",
    "purple300": "#AC97FF",
    "purple200": "#C5B7FF",
    "purple100": "#DFD8FF",
    "purple50": "#ECE8FF",
    "purple0": "#F5F3FF",
    "green600": "#009C64",
    "green500": "#66D397",
    "green300": "#61D6A3",
    "green200": "#92E3BF",
    "green100": "#C2F1DC",
    "green50": "#DBF8EB",
    "green0": "#EDFFF9",
    "yellow600": "#DCAB00",
    "yellow500": "#FFCB70",
    "yellow300": "#FFEB6B",
    "yellow200": "#FFF595",
    "yellow100": "#FFFEC0",
    "yellow50": "#FFFED7",
    "yellow0": "#FFFDEA",
    "magenta600": "#D4136D",
    "magenta500": "#F098B3",
    "magenta300": "#FB70B0",
    "magenta200": "#FD9BC9",
    "magenta100": "#FEC7E1",
    "magenta50": "#FFDDED",
    "magenta0": "#FFF1F8",
    "orange600": "#D86000",
    "orange500": "#F89A75",
    "orange300": "#FFAD61",
    "orange200": "#FFC692",
    "orange100": "#FFE0C2",
    "orange50": "#FFEDDB",
    "orange0": "#FEF5EC",
    "red600": "#D11A28",
    "red500": "#F4212E",
    "red300": "#F87580",
    "red200": "#FB9FA8",
    "red100": "#FDC9CE",
    "red50": "#FEDEE3",
    "red0": "#FFF0F1",
    "teal600": "#009399",
    "teal500": "#00AFB6",
    "teal300": "#3CD6DD",
    "teal200": "#78E4E8",
    "teal100": "#B3F1F4",
    "teal50": "#D1F8FA",
    "teal0": "#E9FEFF",
    "gray1100": "#0F1419",
    "translucentBlack77": "rgba(0,0,0,0.77)",
    "translucentBlack30": "rgba(0,0,0,0.3)",
    "translucentBlack15": "rgba(0,0,0,0.15)",
    "white": "#FFFFFF",
    "primary": "#1D9BF0",
    "primaryOnWhite": "#1D9BF0",
    "lightPrimary": "#6BC9FB",
    "lightPrimaryWithOpacity": "#6BC9FB",
    "primary50": "#D7F6FF",
    "link": "#70C8FF",
    "unreadCellBackground": "#EAFAFF",
    "experimentalButtonAlwaysBlack": "#0F1419",
    "experimentalButtonAlwaysWhite": "#EFF3F4",
    "experimentalLightButtonText": "#0F1419",
    "legacyPink": "#E0245E",
    "experimentalDestructionButtonOutlinedBorder": "#D4136D"
  },
  "light": {
    "transparent": "transparent",
    "blue600": "#0083EB",
    "blue500": "#1D9BF0",
    "blue300": "#6BC9FB",
    "blue200": "#97E3FF",
    "blue100": "#BFF2FF",
    "blue50": "#D7F6FF",
    "blue0": "#EAFAFF",
    "plum600": "#AB2BAE",
    "plum500": "#C936CC",
    "plum300": "#DF82E0",
    "plum200": "#E9A7EB",
    "plum100": "#F4CDF5",
    "plum50": "#FAE0FA",
    "plum0": "#FFEFFF",
    "purple600": "#6545DB",
    "purple500": "#7856FF",
    "purple300": "#AC97FF",
    "purple200": "#C5B7FF",
    "purple100": "#DFD8FF",
    "purple50": "#ECE8FF",
    "purple0": "#F5F3FF",
    "green600": "#009C64",
    "green500": "#00BA7C",
    "green300": "#61D6A3",
    "green200": "#92E3BF",
    "green100": "#C2F1DC",
    "green50": "#DBF8EB",
    "green0": "#EDFFF9",
    "yellow600": "#DCAB00",
    "yellow500": "#FFD400",
    "yellow300": "#FFEB6B",
    "yellow200": "#FFF595",
    "yellow100": "#FFFEC0",
    "yellow50": "#FFFED7",
    "yellow0": "#FFFDEA",
    "magenta600": "#D4136D",
    "magenta500": "#F91880",
    "magenta300": "#FB70B0",
    "magenta200": "#FD9BC9",
    "magenta100": "#FEC7E1",
    "magenta50": "#FFDDED",
    "magenta0": "#FFF1F8",
    "orange600": "#D86000",
    "orange500": "#FF7A00",
    "orange300": "#FFAD61",
    "orange200": "#FFC692",
    "orange100": "#FFE0C2",
    "orange50": "#FFEDDB",
    "orange0": "#FEF5EC",
    "red600": "#D11A28",
    "red500": "#F4212E",
    "red300": "#F87580",
    "red200": "#FB9FA8",
    "red100": "#FDC9CE",
    "red50": "#FEDEE3",
    "red0": "#FFF0F1",
    "teal600": "#009399",
    "teal500": "#00AFB6",
    "teal300": "#3CD6DD",
    "teal200": "#78E4E8",
    "teal100": "#B3F1F4",
    "teal50": "#D1F8FA",
    "teal0": "#E9FEFF",
    "gray1100": "#0F1419",
    "translucentBlack77": "rgba(0,0,0,0.77)",
    "translucentBlack30": "rgba(0,0,0,0.3)",
    "translucentBlack15": "rgba(0,0,0,0.15)",
    "white": "#FFFFFF",
    "primary": "#1D9BF0",
    "primaryOnWhite": "#1D9BF0",
    "lightPrimary": "#6BC9FB",
    "lightPrimaryWithOpacity": "#6BC9FB",
    "primary50": "#D7F6FF",
    "link": "#1B95E0",
    "unreadCellBackground": "#EAFAFF",
    "experimentalButtonAlwaysBlack": "#0F1419",
    "experimentalButtonAlwaysWhite": "#EFF3F4",
    "experimentalLightButtonText": "#FFFFFF",
    "legacyPink": "#E0245E",
    "text": "#0F1419",
    "textOverflowBackground": "#FD9BC9",
    "gray700": "#536471",
    "gray300": "#B9CAD3",
    "gray200": "#CFD9DE",
    "gray50": "#EFF3F4",
    "gray0": "#F7F9F9",
    "activeFaintGray": "rgba(230, 236, 240, 0.7)",
    "activeBlack": "rgba(0,0,0,0.07)",
    "hoverBlack": "rgba(0,0,0,0.03)",
    "navigationBackground": "#FFFFFF",
    "navigationBackground95": "rgba(255,255,255,0.95)",
    "cellBackground": "#FFFFFF",
    "borderColor": "#EFF3F4",
    "nestedBorderColor": "#CFD9DE",
    "dmReceivedBubbleBackground": "#EFF3F4",
    "badgeColor": "#1D9BF0",
    "maskColor": "rgba(0,0,0,0.4)",
    "hoverLabelColor": "rgba(0,0,0,0.6)",
    "elevatedBackground": "#FFFFFF",
    "brandColor": "#1D9BF0",
    "whiteOnColor": "#FFFFFF",
    "experimentalButtonBlack": "#0F1419",
    "experimentalButtonWhite": "#FFFFFF",
    "experimentalButtonGray": "#CFD9DE",
    "experimentalButtonOutlinedBorder": "#CFD9DE",
    "experimentalDestructionButtonOutlinedBorder": "#FFDDED",
    "experimentalBlue200": "#97E3FF",
    "experimentalBlue100": "#BFF2FF",
    "experimentalBlue50": "#D7F6FF",
    "experimentalBlue0": "#EAFAFF",
    "experimentalOrange200": "#FFC692",
    "experimentalOrange100": "#FFE0C2",
    "experimentalOrange50": "#FFEDDB",
    "experimentalOrange0": "#FEF5EC",
    "experimentalRed500": "#F4212E",
    "experimentalRed200": "#FB9FA8",
    "experimentalRed100": "#FDC9CE",
    "experimentalRed50": "#FEDEE3",
    "experimentalRed0": "#FFF0F1"
  },
  "light_high_contrast": {
    "transparent": "transparent",
    "blue600": "#0083EB",
    "blue500": "#264A9D",
    "blue300": "#6BC9FB",
    "blue200": "#97E3FF",
    "blue100": "#BFF2FF",
    "blue50": "#D7F6FF",
    "blue0": "#EAFAFF",
    "plum600": "#AB2BAE",
    "plum500": "#8D2090",
    "plum300": "#DF82E0",
    "plum200": "#E9A7EB",
    "plum100": "#F4CDF5",
    "plum50": "#FAE0FA",
    "plum0": "#FFEFFF",
    "purple600": "#6545DB",
    "purple500": "#512892",
    "purple300": "#AC97FF",
    "purple200": "#C5B7FF",
    "purple100": "#DFD8FF",
    "purple50": "#ECE8FF",
    "purple0": "#F5F3FF",
    "green600": "#009C64",
    "green500": "#096633",
    "green300": "#61D6A3",
    "green200": "#92E3BF",
    "green100": "#C2F1DC",
    "green50": "#DBF8EB",
    "green0": "#EDFFF9",
    "yellow600": "#DCAB00",
    "yellow500": "#79500B",
    "yellow300": "#FFEB6B",
    "yellow200": "#FFF595",
    "yellow100": "#FFFEC0",
    "yellow50": "#FFFED7",
    "yellow0": "#FFFDEA",
    "magenta600": "#D4136D",
    "magenta500": "#9F0C3A",
    "magenta300": "#FB70B0",
    "magenta200": "#FD9BC9",
    "magenta100": "#FEC7E1",
    "magenta50": "#FFDDED",
    "magenta0": "#FFF1F8",
    "orange600": "#D86000",
    "orange500": "#99350D",
    "orange300": "#FFAD61",
    "orange200": "#FFC692",
    "orange100": "#FFE0C2",
    "orange50": "#FFEDDB",
    "orange0": "#FEF5EC",
    "red600": "#D11A28",
    "red500": "#F4212E",
    "red300": "#F87580",
    "red200": "#FB9FA8",
    "red100": "#FDC9CE",
    "red50": "#FEDEE3",
    "red0": "#FFF0F1",
    "teal600": "#009399",
    "teal500": "#00AFB6",
    "teal300": "#3CD6DD",
    "teal200": "#78E4E8",
    "teal100": "#B3F1F4",
    "teal50": "#D1F8FA",
    "teal0": "#E9FEFF",
    "gray1100": "#0F1419",
    "translucentBlack77": "rgba(0,0,0,0.77)",
    "translucentBlack30": "rgba(0,0,0,0.3)",
    "translucentBlack15": "rgba(0,0,0,0.15)",
    "white": "#FFFFFF",
    "primary": "#1D9BF0",
    "primaryOnWhite": "#1D9BF0",
    "lightPrimary": "#6BC9FB",
    "lightPrimaryWithOpacity": "#6BC9FB",
    "primary50": "#D7F6FF",
    "link": "#264A9D",
    "unreadCellBackground": "#EAFAFF",
    "experimentalButtonAlwaysBlack": "#0F1419",
    "experimentalButtonAlwaysWhite": "#EFF3F4",
    "experimentalLightButtonText": "#FFFFFF",
    "legacyPink": "#E0245E",
    "text": "#141D26",
    "textOverflowBackground": "#FD9BC9",
    "gray700": "#3B4C5C",
    "gray300": "#697987",
    "gray200": "#697987",
    "gray50": "#CFD9DE",
    "gray0": "#EFF3F4",
    "activeFaintGray": "rgba(230, 236, 240, 0.7)",
    "activeBlack": "rgba(0,0,0,0.07)",
    "hoverBlack": "rgba(0,0,0,0.03)",
    "navigationBackground": "#FFFFFF",
    "navigationBackground95": "#FFFFFF",
    "cellBackground": "#FFFFFF",
    "borderColor": "#B9CAD3",
    "nestedBorderColor": "#B9CAD3",
    "dmReceivedBubbleBackground": "#CFD9DE",
    "badgeColor": "#264A9D",
    "maskColor": "rgba(0,0,0,0.4)",
    "hoverLabelColor": "rgba(0,0,0,0.6)",
    "elevatedBackground": "#FFFFFF",
    "brandColor": "#1D9BF0",
    "whiteOnColor": "#FFFFFF",
    "experimentalButtonBlack": "#0F1419",
    "experimentalButtonWhite": "#FFFFFF",
    "experimentalButtonGray": "#697987",
    "experimentalButtonOutlinedBorder": "#536471",
    "experimentalDestructionButtonOutlinedBorder": "#D4136D",
    "experimentalBlue200": "#97E3FF",
    "experimentalBlue100": "#BFF2FF",
    "experimentalBlue50": "#D7F6FF",
    "experimentalBlue0": "#EAFAFF",
    "experimentalOrange200": "#FFC692",
    "experimentalOrange100": "#FFE0C2",
    "experimentalOrange50": "#FFEDDB",
    "experimentalOrange0": "#FEF5EC",
    "experimentalRed500": "#AE1425",
    "experimentalRed200": "#FB9FA8",
    "experimentalRed100": "#FDC9CE",
    "experimentalRed50": "#FEDEE3",
    "experimentalRed0": "#FFF0F1"
  },
  "dark": {
    "transparent": "transparent",
    "blue600": "#0083EB",
    "blue500": "#1D9BF0",
    "blue300": "#6BC9FB",
    "blue200": "#97E3FF",
    "blue100": "#BFF2FF",
    "blue50": "#D7F6FF",
    "blue0": "#EAFAFF",
    "plum600": "#AB2BAE",
    "plum500": "#C936CC",
    "plum300": "#DF82E0",
    "plum200": "#E9A7EB",
    "plum100": "#F4CDF5",
    "plum50": "#FAE0FA",
    "plum0": "#FFEFFF",
    "purple600": "#6545DB",
    "purple500": "#7856FF",
    "purple300": "#AC97FF",
    "purple200": "#C5B7FF",
    "purple100": "#DFD8FF",
    "purple50": "#ECE8FF",
    "purple0": "#F5F3FF",
    "green600": "#009C64",
    "green500": "#00BA7C",
    "green300": "#61D6A3",
    "green200": "#92E3BF",
    "green100": "#C2F1DC",
    "green50": "#DBF8EB",
    "green0": "#EDFFF9",
    "yellow600": "#DCAB00",
    "yellow500": "#FFD400",
    "yellow300": "#FFEB6B",
    "yellow200": "#FFF595",
    "yellow100": "#FFFEC0",
    "yellow50": "#FFFED7",
    "yellow0": "#FFFDEA",
    "magenta600": "#D4136D",
    "magenta500": "#F91880",
    "magenta300": "#FB70B0",
    "magenta200": "#FD9BC9",
    "magenta100": "#FEC7E1",
    "magenta50": "#FFDDED",
    "magenta0": "#FFF1F8",
    "orange600": "#D86000",
    "orange500": "#FF7A00",
    "orange300": "#FFAD61",
    "orange200": "#FFC692",
    "orange100": "#FFE0C2",
    "orange50": "#FFEDDB",
    "orange0": "#FEF5EC",
    "red600": "#D11A28",
    "red500": "#F4212E",
    "red300": "#F87580",
    "red200": "#FB9FA8",
    "red100": "#FDC9CE",
    "red50": "#FEDEE3",
    "red0": "#FFF0F1",
    "teal600": "#009399",
    "teal500": "#00AFB6",
    "teal300": "#3CD6DD",
    "teal200": "#78E4E8",
    "teal100": "#B3F1F4",
    "teal50": "#D1F8FA",
    "teal0": "#E9FEFF",
    "gray1100": "#0F1419",
    "translucentBlack77": "rgba(0,0,0,0.77)",
    "translucentBlack30": "rgba(0,0,0,0.3)",
    "translucentBlack15": "rgba(0,0,0,0.15)",
    "white": "#FFFFFF",
    "primary": "#1D9BF0",
    "primaryOnWhite": "#1D9BF0",
    "lightPrimary": "#6BC9FB",
    "lightPrimaryWithOpacity": "#6BC9FB",
    "primary50": "#D7F6FF",
    "link": "#1B95E0",
    "unreadCellBackground": "#EAFAFF",
    "experimentalButtonAlwaysBlack": "#0F1419",
    "experimentalButtonAlwaysWhite": "#EFF3F4",
    "experimentalLightButtonText": "#FFFFFF",
    "legacyPink": "#E0245E",
    "text": "#FFFFFF",
    "textOverflowBackground": "#F91880",
    "gray700": "#8899A6",
    "gray300": "#6B7D8C",
    "gray200": "#3D5466",
    "gray50": "#253341",
    "gray0": "#192734",
    "activeFaintGray": "rgba(20, 29, 38, 0.7)",
    "activeBlack": "rgba(255,255,255,0.07)",
    "hoverBlack": "rgba(255,255,255,0.03)",
    "navigationBackground": "#15202B",
    "navigationBackground95": "rgba(21, 32, 43, 0.95)",
    "cellBackground": "#15202B",
    "borderColor": "#38444D",
    "nestedBorderColor": "#38444D",
    "dmReceivedBubbleBackground": "#3D5466",
    "badgeColor": "#FFFFFF",
    "maskColor": "rgba(91,112,131,0.4)",
    "hoverLabelColor": "rgba(91,112,131,0.8)",
    "elevatedBackground": "#1C2C3C",
    "brandColor": "#FFFFFF",
    "whiteOnColor": "#FFFFFF",
    "experimentalButtonBlack": "#EFF3F4",
    "experimentalButtonWhite": "#0F1419",
    "experimentalButtonGray": "#CFD9DE",
    "experimentalButtonOutlinedBorder": "#536471",
    "experimentalDestructionButtonOutlinedBorder": "#67070F",
    "experimentalBlue200": "#005AC2",
    "experimentalBlue100": "#003886",
    "experimentalBlue50": "#00154A",
    "experimentalBlue0": "#020F34",
    "experimentalOrange200": "#892B00",
    "experimentalOrange100": "#692100",
    "experimentalOrange50": "#491600",
    "experimentalOrange0": "#381101",
    "experimentalRed500": "#F4212E",
    "experimentalRed200": "#8A0D20",
    "experimentalRed100": "#67070F",
    "experimentalRed50": "#440004",
    "experimentalRed0": "#330104"
  },
  "dark_high_contrast": {
    "transparent": "transparent",
    "blue600": "#0083EB",
    "blue500": "#70C8FF",
    "blue300": "#6BC9FB",
    "blue200": "#97E3FF",
    "blue100": "#BFF2FF",
    "blue50": "#D7F6FF",
    "blue0": "#EAFAFF",
    "plum600": "#AB2BAE",
    "plum500": "#DF82E0",
    "plum300": "#DF82E0",
    "plum200": "#E9A7EB",
    "plum100": "#F4CDF5",
    "plum50": "#FAE0FA",
    "plum0": "#FFEFFF",
    "purple600": "#6545DB",
    "purple500": "#BEA8E2",
    "purple300": "#AC97FF",
    "purple200": "#C5B7FF",
    "purple100": "#DFD8FF",
    "purple50": "#ECE8FF",
    "purple0": "#F5F3FF",
    "green600": "#009C64",
    "green500": "#66D397",
    "green300": "#61D6A3",
    "green200": "#92E3BF",
    "green100": "#C2F1DC",
    "green50": "#DBF8EB",
    "green0": "#EDFFF9",
    "yellow600": "#DCAB00",
    "yellow500": "#FFCB70",
    "yellow300": "#FFEB6B",
    "yellow200": "#FFF595",
    "yellow100": "#FFFEC0",
    "yellow50": "#FFFED7",
    "yellow0": "#FFFDEA",
    "magenta600": "#D4136D",
    "magenta500": "#F098B3",
    "magenta300": "#FB70B0",
    "magenta200": "#FD9BC9",
    "magenta100": "#FEC7E1",
    "magenta50": "#FFDDED",
    "magenta0": "#FFF1F8",
    "orange600": "#D86000",
    "orange500": "#F89A75",
    "orange300": "#FFAD61",
    "orange200": "#FFC692",
    "orange100": "#FFE0C2",
    "orange50": "#FFEDDB",
    "orange0": "#FEF5EC",
    "red600": "#D11A28",
    "red500": "#F4212E",
    "red300": "#F87580",
    "red200": "#FB9FA8",
    "red100": "#FDC9CE",
    "red50": "#FEDEE3",
    "red0": "#FFF0F1",
    "teal600": "#009399",
    "teal500": "#00AFB6",
    "teal300": "#3CD6DD",
    "teal200": "#78E4E8",
    "teal100": "#B3F1F4",
    "teal50": "#D1F8FA",
    "teal0": "#E9FEFF",
    "gray1100": "#0F1419",
    "translucentBlack77": "rgba(0,0,0,0.77)",
    "translucentBlack30": "rgba(0,0,0,0.3)",
    "translucentBlack15": "rgba(0,0,0,0.15)",
    "white": "#FFFFFF",
    "primary": "#1D9BF0",
    "primaryOnWhite": "#1D9BF0",
    "lightPrimary": "#6BC9FB",
    "lightPrimaryWithOpacity": "#6BC9FB",
    "primary50": "#D7F6FF",
    "link": "#70C8FF",
    "unreadCellBackground": "#325D7D",
    "experimentalButtonAlwaysBlack": "#0F1419",
    "experimentalButtonAlwaysWhite": "#EFF3F4",
    "experimentalLightButtonText": "#0F1419",
    "legacyPink": "#E0245E",
    "text": "#FFFFFF",
    "textOverflowBackground": "#9F0C3A",
    "gray700": "#B8CBD9",
    "gray300": "#92A4B3",
    "gray200": "#697987",
    "gray50": "#10171E",
    "gray0": "#182430",
    "activeFaintGray": "rgba(20, 29, 38, 0.7)",
    "activeBlack": "rgba(255,255,255,0.07)",
    "hoverBlack": "rgba(255,255,255,0.03)",
    "navigationBackground": "#15202B",
    "navigationBackground95": "#15202B",
    "cellBackground": "#15202B",
    "borderColor": "#38444D",
    "nestedBorderColor": "#38444D",
    "dmReceivedBubbleBackground": "#B8CBD9",
    "badgeColor": "#70C8FF",
    "maskColor": "rgba(91,112,131,0.4)",
    "hoverLabelColor": "rgba(91,112,131,0.8)",
    "elevatedBackground": "#1C2C3C",
    "brandColor": "#FFFFFF",
    "whiteOnColor": "#0F1419",
    "experimentalButtonBlack": "#EFF3F4",
    "experimentalButtonWhite": "#0F1419",
    "experimentalButtonGray": "#CFD9DE",
    "experimentalButtonOutlinedBorder": "#B9CAD3",
    "experimentalDestructionButtonOutlinedBorder": "#D4136D",
    "experimentalBlue200": "#005AC2",
    "experimentalBlue100": "#003886",
    "experimentalBlue50": "#00154A",
    "experimentalBlue0": "#020F34",
    "experimentalOrange200": "#892B00",
    "experimentalOrange100": "#692100",
    "experimentalOrange50": "#491600",
    "experimentalOrange0": "#381101",
    "experimentalRed500": "#F87580",
    "experimentalRed200": "#8A0D20",
    "experimentalRed100": "#67070F",
    "experimentalRed50": "#440004",
    "experimentalRed0": "#330104"
  },
  "darker": {
    "transparent": "transparent",
    "blue600": "#0083EB",
    "blue500": "#1D9BF0",
    "blue300": "#6BC9FB",
    "blue200": "#97E3FF",
    "blue100": "#BFF2FF",
    "blue50": "#D7F6FF",
    "blue0": "#EAFAFF",
    "plum600": "#AB2BAE",
    "plum500": "#C936CC",
    "plum300": "#DF82E0",
    "plum200": "#E9A7EB",
    "plum100": "#F4CDF5",
    "plum50": "#FAE0FA",
    "plum0": "#FFEFFF",
    "purple600": "#6545DB",
    "purple500": "#7856FF",
    "purple300": "#AC97FF",
    "purple200": "#C5B7FF",
    "purple100": "#DFD8FF",
    "purple50": "#ECE8FF",
    "purple0": "#F5F3FF",
    "green600": "#009C64",
    "green500": "#00BA7C",
    "green300": "#61D6A3",
    "green200": "#92E3BF",
    "green100": "#C2F1DC",
    "green50": "#DBF8EB",
    "green0": "#EDFFF9",
    "yellow600": "#DCAB00",
    "yellow500": "#FFD400",
    "yellow300": "#FFEB6B",
    "yellow200": "#FFF595",
    "yellow100": "#FFFEC0",
    "yellow50": "#FFFED7",
    "yellow0": "#FFFDEA",
    "magenta600": "#D4136D",
    "magenta500": "#F91880",
    "magenta300": "#FB70B0",
    "magenta200": "#FD9BC9",
    "magenta100": "#FEC7E1",
    "magenta50": "#FFDDED",
    "magenta0": "#FFF1F8",
    "orange600": "#D86000",
    "orange500": "#FF7A00",
    "orange300": "#FFAD61",
    "orange200": "#FFC692",
    "orange100": "#FFE0C2",
    "orange50": "#FFEDDB",
    "orange0": "#FEF5EC",
    "red600": "#D11A28",
    "red500": "#F4212E",
    "red300": "#F87580",
    "red200": "#FB9FA8",
    "red100": "#FDC9CE",
    "red50": "#FEDEE3",
    "red0": "#FFF0F1",
    "teal600": "#009399",
    "teal500": "#00AFB6",
    "teal300": "#3CD6DD",
    "teal200": "#78E4E8",
    "teal100": "#B3F1F4",
    "teal50": "#D1F8FA",
    "teal0": "#E9FEFF",
    "gray1100": "#0F1419",
    "translucentBlack77": "rgba(0,0,0,0.77)",
    "translucentBlack30": "rgba(0,0,0,0.3)",
    "translucentBlack15": "rgba(0,0,0,0.15)",
    "white": "#FFFFFF",
    "primary": "#1D9BF0",
    "primaryOnWhite": "#1D9BF0",
    "lightPrimary": "#6BC9FB",
    "lightPrimaryWithOpacity": "#6BC9FB",
    "primary50": "#D7F6FF",
    "link": "#1B95E0",
    "unreadCellBackground": "#041722",
    "experimentalButtonAlwaysBlack": "#0F1419",
    "experimentalButtonAlwaysWhite": "#EFF3F4",
    "experimentalLightButtonText": "#FFFFFF",
    "legacyPink": "#E0245E",
    "text": "#D9D9D9",
    "textOverflowBackground": "#F91880",
    "gray700": "#6E767D",
    "gray300": "#3D4145",
    "gray200": "#2F3336",
    "gray50": "#202327",
    "gray0": "#15181C",
    "activeFaintGray": "rgba(18, 21, 23, 0.7)",
    "activeBlack": "rgba(255,255,255,0.07)",
    "hoverBlack": "rgba(255,255,255,0.03)",
    "navigationBackground": "#000000",
    "navigationBackground95": "rgba(0,0,0,0.95)",
    "cellBackground": "#000000",
    "borderColor": "#2F3336",
    "nestedBorderColor": "#2F3336",
    "dmReceivedBubbleBackground": "#2F3336",
    "badgeColor": "#D9D9D9",
    "maskColor": "rgba(91,112,131,0.4)",
    "hoverLabelColor": "rgba(91,112,131,0.8)",
    "elevatedBackground": "#1B2023",
    "brandColor": "#D9D9D9",
    "whiteOnColor": "#FFFFFF",
    "experimentalButtonBlack": "#EFF3F4",
    "experimentalButtonWhite": "#0F1419",
    "experimentalButtonGray": "#CFD9DE",
    "experimentalButtonOutlinedBorder": "#536471",
    "experimentalDestructionButtonOutlinedBorder": "#67070F",
    "experimentalBlue200": "#005AC2",
    "experimentalBlue100": "#003886",
    "experimentalBlue50": "#00154A",
    "experimentalBlue0": "#020F34",
    "experimentalOrange200": "#892B00",
    "experimentalOrange100": "#692100",
    "experimentalOrange50": "#491600",
    "experimentalOrange0": "#381101",
    "experimentalRed500": "#F4212E",
    "experimentalRed200": "#8A0D20",
    "experimentalRed100": "#67070F",
    "experimentalRed50": "#440004",
    "experimentalRed0": "#330104"
  },
  "darker_high_contrast": {
    "transparent": "transparent",
    "blue600": "#0083EB",
    "blue500": "#70C8FF",
    "blue300": "#6BC9FB",
    "blue200": "#97E3FF",
    "blue100": "#BFF2FF",
    "blue50": "#D7F6FF",
    "blue0": "#EAFAFF",
    "plum600": "#AB2BAE",
    "plum500": "#DF82E0",
    "plum300": "#DF82E0",
    "plum200": "#E9A7EB",
    "plum100": "#F4CDF5",
    "plum50": "#FAE0FA",
    "plum0": "#FFEFFF",
    "purple600": "#6545DB",
    "purple500": "#BEA8E2",
    "purple300": "#AC97FF",
    "purple200": "#C5B7FF",
    "purple100": "#DFD8FF",
    "purple50": "#ECE8FF",
    "purple0": "#F5F3FF",
    "green600": "#009C64",
    "green500": "#66D397",
    "green300": "#61D6A3",
    "green200": "#92E3BF",
    "green100": "#C2F1DC",
    "green50": "#DBF8EB",
    "green0": "#EDFFF9",
    "yellow600": "#DCAB00",
    "yellow500": "#FFCB70",
    "yellow300": "#FFEB6B",
    "yellow200": "#FFF595",
    "yellow100": "#FFFEC0",
    "yellow50": "#FFFED7",
    "yellow0": "#FFFDEA",
    "magenta600": "#D4136D",
    "magenta500": "#F098B3",
    "magenta300": "#FB70B0",
    "magenta200": "#FD9BC9",
    "magenta100": "#FEC7E1",
    "magenta50": "#FFDDED",
    "magenta0": "#FFF1F8",
    "orange600": "#D86000",
    "orange500": "#F89A75",
    "orange300": "#FFAD61",
    "orange200": "#FFC692",
    "orange100": "#FFE0C2",
    "orange50": "#FFEDDB",
    "orange0": "#FEF5EC",
    "red600": "#D11A28",
    "red500": "#F4212E",
    "red300": "#F87580",
    "red200": "#FB9FA8",
    "red100": "#FDC9CE",
    "red50": "#FEDEE3",
    "red0": "#FFF0F1",
    "teal600": "#009399",
    "teal500": "#00AFB6",
    "teal300": "#3CD6DD",
    "teal200": "#78E4E8",
    "teal100": "#B3F1F4",
    "teal50": "#D1F8FA",
    "teal0": "#E9FEFF",
    "gray1100": "#0F1419",
    "translucentBlack77": "rgba(0,0,0,0.77)",
    "translucentBlack30": "rgba(0,0,0,0.3)",
    "translucentBlack15": "rgba(0,0,0,0.15)",
    "white": "#FFFFFF",
    "primary": "#1D9BF0",
    "primaryOnWhite": "#1D9BF0",
    "lightPrimary": "#6BC9FB",
    "lightPrimaryWithOpacity": "#6BC9FB",
    "primary50": "#D7F6FF",
    "link": "#70C8FF",
    "unreadCellBackground": "#244052",
    "experimentalButtonAlwaysBlack": "#0F1419",
    "experimentalButtonAlwaysWhite": "#EFF3F4",
    "experimentalLightButtonText": "#0F1419",
    "legacyPink": "#E0245E",
    "text": "#FFFFFF",
    "textOverflowBackground": "#9F0C3A",
    "gray700": "#929ca6",
    "gray300": "#6e767d",
    "gray200": "#3D4145",
    "gray50": "#121517",
    "gray0": "#0E1012",
    "activeFaintGray": "rgba(18, 21, 23, 0.7)",
    "activeBlack": "rgba(255,255,255,0.07)",
    "hoverBlack": "rgba(255,255,255,0.03)",
    "navigationBackground": "#050505",
    "navigationBackground95": "#050505",
    "cellBackground": "#050505",
    "borderColor": "#3D4145",
    "nestedBorderColor": "#3D4145",
    "dmReceivedBubbleBackground": "#929CA6",
    "badgeColor": "#70C8FF",
    "maskColor": "rgba(91,112,131,0.4)",
    "hoverLabelColor": "rgba(91,112,131,0.8)",
    "elevatedBackground": "#1B2023",
    "brandColor": "#D9D9D9",
    "whiteOnColor": "#0F1419",
    "experimentalButtonBlack": "#EFF3F4",
    "experimentalButtonWhite": "#0F1419",
    "experimentalButtonGray": "#CFD9DE",
    "experimentalButtonOutlinedBorder": "#B9CAD3",
    "experimentalDestructionButtonOutlinedBorder": "#D4136D",
    "experimentalBlue200": "#005AC2",
    "experimentalBlue100": "#003886",
    "experimentalBlue50": "#00154A",
    "experimentalBlue0": "#020F34",
    "experimentalOrange200": "#892B00",
    "experimentalOrange100": "#692100",
    "experimentalOrange50": "#491600",
    "experimentalOrange0": "#381101",
    "experimentalRed500": "#F87580",
    "experimentalRed200": "#8A0D20",
    "experimentalRed100": "#67070F",
    "experimentalRed50": "#440004",
    "experimentalRed0": "#330104"
  }
};
},{}],"index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var color_schema_json_1 = __importDefault(require("./data/color_schema.json"));

function main() {
  console.log(color_schema_json_1.default);
}

main();
},{"./data/color_schema.json":"data/color_schema.json"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55338" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/TwitterSchema.77de5100.js.map