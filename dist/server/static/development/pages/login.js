module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Icons/Error.js":
/*!***********************************!*\
  !*** ./components/Icons/Error.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Icons\\Error.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Error() {
  return __jsx("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 455.111 455.111",
    style: {
      enableBackground: 'new 0 0 455.111 455.111'
    },
    xmlSpace: "preserve",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("circle", {
    style: {
      fill: '#E24C4B'
    },
    cx: "227.556",
    cy: "227.556",
    r: "227.556",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    style: {
      fill: '#D1403F'
    },
    d: "M455.111,227.556c0,125.156-102.4,227.556-227.556,227.556c-72.533,0-136.533-32.711-177.778-85.333\r c38.4,31.289,88.178,49.778,142.222,49.778c125.156,0,227.556-102.4,227.556-227.556c0-54.044-18.489-103.822-49.778-142.222\r C422.4,91.022,455.111,155.022,455.111,227.556z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }), __jsx("path", {
    style: {
      fill: '#FFFFFF'
    },
    d: "M331.378,331.378c-8.533,8.533-22.756,8.533-31.289,0l-72.533-72.533l-72.533,72.533\r c-8.533,8.533-22.756,8.533-31.289,0c-8.533-8.533-8.533-22.756,0-31.289l72.533-72.533l-72.533-72.533\r c-8.533-8.533-8.533-22.756,0-31.289c8.533-8.533,22.756-8.533,31.289,0l72.533,72.533l72.533-72.533\r c8.533-8.533,22.756-8.533,31.289,0c8.533,8.533,8.533,22.756,0,31.289l-72.533,72.533l72.533,72.533\r C339.911,308.622,339.911,322.844,331.378,331.378z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./components/Icons/Exit.js":
/*!**********************************!*\
  !*** ./components/Icons/Exit.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Exit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Icons\\Exit.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Exit() {
  return __jsx("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 511.989 511.989",
    style: {
      "enableBackground": 'new 0 0 511.989 511.989'
    },
    xmlSpace: "preserve",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M110.933,221.782c-4.71,0-8.533,3.823-8.533,8.533v51.2c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-51.2\r C119.467,225.605,115.644,221.782,110.933,221.782z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M111.855,2.304L31.172,34.586C8.448,43,0,54.418,0,76.715v358.477c0,22.298,8.448,33.715,30.959,42.061l81.058,32.427\r c4.011,1.519,8.038,2.287,11.981,2.287c17.152,0,29.602-14.336,29.602-34.091V34.049C153.6,9.78,134.246-6.126,111.855,2.304z\r M136.533,477.876c0,10.18-5.035,17.024-12.535,17.024c-1.869,0-3.883-0.401-5.803-1.118L37.103,461.33\r c-16.102-5.965-20.036-11.102-20.036-26.138V76.715c0-15.036,3.934-20.164,20.241-26.206l80.725-32.29\r c2.082-0.785,4.087-1.186,5.956-1.186c7.501,0,12.544,6.835,12.544,17.016V477.876z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M178.133,51.115h120.533c14.114,0,25.6,11.486,25.6,25.6v128c0,4.71,3.814,8.533,8.533,8.533\r c4.719,0,8.533-3.823,8.533-8.533v-128c0-23.526-19.14-42.667-42.667-42.667H178.133c-4.71,0-8.533,3.823-8.533,8.533\r S173.423,51.115,178.133,51.115z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M332.8,298.582c-4.719,0-8.533,3.823-8.533,8.533v128c0,14.114-11.486,25.6-25.6,25.6H179.2\r c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h119.467c23.526,0,42.667-19.14,42.667-42.667v-128\r C341.333,302.405,337.519,298.582,332.8,298.582z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M511.343,252.655c-0.435-1.05-1.058-1.988-1.852-2.782l-85.325-85.333c-3.337-3.336-8.73-3.336-12.066,0\r c-3.337,3.337-3.337,8.73,0,12.066l70.767,70.775H196.267c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533\r h286.601L412.1,335.215c-3.337,3.337-3.337,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5\r l85.325-85.325c0.794-0.794,1.417-1.732,1.852-2.782C512.205,257.093,512.205,254.738,511.343,252.655z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })))), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }));
}

/***/ }),

/***/ "./components/Icons/Loading.js":
/*!*************************************!*\
  !*** ./components/Icons/Loading.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Icons\\Loading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Loading() {
  return __jsx("svg", {
    version: "1.1",
    id: "L9",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 0 0",
    xmlSpace: "preserve",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "#fff",
    d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "1s",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 15
    }
  })));
}

/***/ }),

/***/ "./components/Icons/Locked.js":
/*!************************************!*\
  !*** ./components/Icons/Locked.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Locked; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Icons\\Locked.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Locked() {
  return __jsx("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    style: {
      enableBackground: "new 0 0 512 512"
    },
    xmlSpace: "preserve",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, "Encrypt"), __jsx("path", {
    style: {
      fill: '#B2B2E0'
    },
    d: "M358.61,102.61C358.61,46.03,312.579,0,256,0S153.39,46.03,153.39,102.61v111.14h51.794V101.901\r c0-28.02,22.795-50.816,50.816-50.816s50.816,22.796,50.816,50.816V213.75h51.794L358.61,102.61L358.61,102.61z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }), __jsx("path", {
    style: {
      fill: '#F2EBFA'
    },
    d: "M256,0c-56.579,0-102.61,46.03-102.61,102.61v111.14h51.794V101.901\r c0-28.02,22.795-50.816,50.816-50.816V0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx("path", {
    style: {
      fill: '#FCC200'
    },
    d: "M349.735,512h-187.47c-34.64,0-62.721-28.081-62.721-62.721V234.751\r c0-16.566,13.428-29.994,29.994-29.994h252.926c16.565,0,29.994,13.428,29.994,29.994v214.528\r C412.456,483.919,384.375,512,349.735,512z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("path", {
    style: {
      fill: '#FFDE47'
    },
    d: "M256,204.758H129.537c-16.566,0-29.994,13.428-29.994,29.994v214.528\r c0,34.64,28.081,62.721,62.721,62.721h93.735L256,204.758L256,204.758z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("path", {
    style: {
      fill: '#1D1D2E'
    },
    d: "M286.41,330.768c0-16.767-13.642-30.41-30.41-30.41s-30.41,13.642-30.41,30.41\r c0,11.316,6.218,21.201,15.413,26.437v42.246c0,8.282,6.715,14.997,14.997,14.997c8.282,0,14.997-6.715,14.997-14.997v-42.247\r C280.191,351.969,286.41,342.084,286.41,330.768z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("path", {
    style: {
      fill: '#3F4052'
    },
    d: "M256,300.359c-16.767,0-30.41,13.642-30.41,30.41c0,11.316,6.218,21.201,15.413,26.437v42.246\r c0,8.282,6.715,14.997,14.997,14.997V300.359z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }));
}

/***/ }),

/***/ "./components/Icons/Logout.js":
/*!************************************!*\
  !*** ./components/Icons/Logout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Icons\\Logout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Logout() {
  return __jsx("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    style: {
      enableBackground: 'new 0 0 512 512'
    },
    xmlSpace: "preserve",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M330.667,384c-5.896,0-10.667,4.771-10.667,10.667v74.667c0,11.76-9.573,21.333-21.333,21.333h-256\r c-11.76,0-21.333-9.573-21.333-21.333V42.667c0-11.76,9.573-21.333,21.333-21.333h256c11.76,0,21.333,9.573,21.333,21.333v74.667\r c0,5.896,4.771,10.667,10.667,10.667c5.896,0,10.667-4.771,10.667-10.667V42.667C341.333,19.135,322.198,0,298.667,0h-256\r C19.135,0,0,19.135,0,42.667v426.667C0,492.865,19.135,512,42.667,512h256c23.531,0,42.667-19.135,42.667-42.667v-74.667\r C341.333,388.771,336.563,384,330.667,384z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M508.542,248.135l-128-117.333c-4.365-3.979-11.083-3.677-15.073,0.656c-3.979,4.344-3.688,11.094,0.656,15.073\r l107.79,98.802H138.667c-5.896,0-10.667,4.771-10.667,10.667s4.771,10.667,10.667,10.667h335.249l-107.79,98.802\r c-4.344,3.979-4.635,10.729-0.656,15.073c2.104,2.292,4.979,3.458,7.865,3.458c2.573,0,5.156-0.927,7.208-2.802l128-117.333\r C510.75,261.844,512,258.99,512,256S510.75,250.156,508.542,248.135z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })))), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }));
}

/***/ }),

/***/ "./components/Icons/Modal.js":
/*!***********************************!*\
  !*** ./components/Icons/Modal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Icons\\Modal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Modal() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "25",
    height: "25",
    viewBox: "0 0 16 16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "#444444",
    d: "M0 4v11h16v-14h-16v3zM14 2h1v1h-1v-1zM1 4h14v10h-14v-10z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#444444",
    d: "M3 6h2v1h-2v-1z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#444444",
    d: "M6 6h7v1h-7v-1z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#444444",
    d: "M3 8h2v1h-2v-1z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#444444",
    d: "M6 8h7v1h-7v-1z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#444444",
    d: "M3 10h2v1h-2v-1z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#444444",
    d: "M6 10h7v1h-7v-1z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./components/Icons/Success.js":
/*!*************************************!*\
  !*** ./components/Icons/Success.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Success; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Icons\\Success.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Success() {
  return __jsx("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 367.805 367.805",
    style: {
      enableBackground: 'new 0 0 367.805 367.805'
    },
    xmlSpace: "preserve",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("path", {
    style: {
      fill: '#3BB54A'
    },
    d: "M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902\r S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("polygon", {
    style: {
      fill: '#D4E1F4'
    },
    points: "285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801\r 256.001,103.968 \t",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  })), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./components/Icons/Unlocked.js":
/*!**************************************!*\
  !*** ./components/Icons/Unlocked.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Unlocked; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Icons\\Unlocked.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Unlocked() {
  return __jsx("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    style: {
      enableBackground: 'new 0 0 512 512'
    },
    xmlSpace: "preserve",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, "Decrypt"), __jsx("polygon", {
    style: {
      fill: '#FFC813'
    },
    points: "512,236.879 343.489,236.879 323.473,359.348 343.489,512 512,512 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("path", {
    style: {
      fill: '#F5F5F6'
    },
    d: "M127.077,0L127.077,0C56.894,0,0,56.894,0,127.077V186h47.803v-58.923\r c0-43.711,35.562-79.273,79.274-79.273s79.274,35.562,79.274,79.273v139.826h47.803V127.077C254.154,56.894,197.26,0,127.077,0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx("rect", {
    x: "174.98",
    y: "236.88",
    style: {
      fill: '#FFDF78'
    },
    width: "168.51",
    height: "275.12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("path", {
    style: {
      fill: '#FFE6A1'
    },
    d: "M343.489,299.628L323.473,351l20.016,98.25h24.674v-67.651c12.067-8.004,20.027-21.706,20.027-37.271\r C388.19,319.641,368.177,299.628,343.489,299.628z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("path", {
    style: {
      fill: '#FFFFFF'
    },
    d: "M298.789,344.329c0,15.565,7.96,29.266,20.027,37.271v67.651h24.673V299.628\r C318.802,299.628,298.789,319.641,298.789,344.329z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }));
}

/***/ }),

/***/ "./components/Icons/User.js":
/*!**********************************!*\
  !*** ./components/Icons/User.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Icons\\User.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function User() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-42 0 512 512.002",
    width: "512px",
    height: "512px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 106
    }
  }, __jsx("path", {
    d: "m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#37415C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 109
    }
  }), __jsx("path", {
    d: "m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#37415C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 635
    }
  })), " ");
}

/***/ }),

/***/ "./components/Icons/icon.js":
/*!**********************************!*\
  !*** ./components/Icons/icon.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Icons */ "./components/Icons/index.js");
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Icons\\icon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const iconTypes = {
  exit: components_Icons__WEBPACK_IMPORTED_MODULE_2__["Exit"],
  user: components_Icons__WEBPACK_IMPORTED_MODULE_2__["User"],
  loading: components_Icons__WEBPACK_IMPORTED_MODULE_2__["Loading"],
  error: components_Icons__WEBPACK_IMPORTED_MODULE_2__["Error"],
  success: components_Icons__WEBPACK_IMPORTED_MODULE_2__["Success"],
  logout: components_Icons__WEBPACK_IMPORTED_MODULE_2__["Logout"],
  modal: components_Icons__WEBPACK_IMPORTED_MODULE_2__["Modal"],
  unlocked: components_Icons__WEBPACK_IMPORTED_MODULE_2__["Unlocked"],
  locked: components_Icons__WEBPACK_IMPORTED_MODULE_2__["Locked"]
};

const IconComponent = (_ref) => {
  let {
    name
  } = _ref,
      props = _objectWithoutProperties(_ref, ["name"]);

  let Icon = iconTypes[name];
  return __jsx(Icon, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 12
    }
  }));
};

IconComponent.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (IconComponent);

/***/ }),

/***/ "./components/Icons/index.js":
/*!***********************************!*\
  !*** ./components/Icons/index.js ***!
  \***********************************/
/*! exports provided: User, Exit, Error, Success, Loading, Logout, Modal, Unlocked, Locked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./components/Icons/User.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Exit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Exit */ "./components/Icons/Exit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Exit", function() { return _Exit__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading */ "./components/Icons/Loading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _Loading__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Error */ "./components/Icons/Error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return _Error__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Success__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Success */ "./components/Icons/Success.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Success", function() { return _Success__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logout */ "./components/Icons/Logout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _Logout__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modal */ "./components/Icons/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Unlocked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Unlocked */ "./components/Icons/Unlocked.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Unlocked", function() { return _Unlocked__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Locked__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Locked */ "./components/Icons/Locked.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Locked", function() { return _Locked__WEBPACK_IMPORTED_MODULE_8__["default"]; });












/***/ }),

/***/ "./components/shared/UI/Alert.jsx":
/*!****************************************!*\
  !*** ./components/shared/UI/Alert.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Icons_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Icons/icon */ "./components/Icons/icon.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\shared\\UI\\Alert.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Alert(props) {
  const alertRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    0: alertShow,
    1: setAlertShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const domElement = document.getElementById('portal');
  const showTimeout = setTimeout(() => {
    setAlertShow(false);

    if (alertRef.current && domElement.contains(alertRef.current)) {
      alertRef.current.remove();
    }
  }, props.timeout);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setTimeout(() => {
      !alertShow && setAlertShow(true);
    }, 0);
    return () => {
      clearTimeout(showTimeout);
    };
  });
  return react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal(__jsx("div", {
    ref: alertRef,
    className: "jsx-2115912602" + " " + `${props.type}-container main-alert-container ${alertShow ? 'active-alert' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(components_Icons_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: props.type,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "jsx-2115912602",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, props.message), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2115912602",
    __self: this
  }, ".main-alert-container svg{min-width:20px;height:20px;}.main-alert-container p{margin:0;margin-left:15px;}.main-alert-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border:1px solid #403f3f54;padding:15px;background-color:#0000007a;-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px);margin-top:15px;border-top-left-radius:8px;border-bottom-left-radius:8px;position:relative;right:-100%;-webkit-transition:all 400ms cubic-bezier(0.175,0.885,0.32,1);transition:all 400ms cubic-bezier(0.175,0.885,0.32,1);color:#fff;}.active-alert{right:0%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcc2hhcmVkXFxVSVxcQWxlcnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCK0IsQUFHb0MsQUFJTixBQUlJLEFBY0osU0FqQlEsQUFrQnJCLE1BdEJnQixXQUtoQixDQUpBLCtDQU8rQiwyQkFDZCxhQUNjLDJCQUNELDREQUNWLGdCQUNXLDJCQUNHLDhCQUNaLGtCQUNOLFlBQzZDLG9IQUM5QyxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcc2hhcmVkXFxVSVxcQWxlcnQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgSWNvbiBmcm9tICdjb21wb25lbnRzL0ljb25zL2ljb24nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gQWxlcnQgKHByb3BzKSB7XHJcbiAgICBjb25zdCBhbGVydFJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgW2FsZXJ0U2hvdywgc2V0QWxlcnRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGFsJyk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRBbGVydFNob3coZmFsc2UpO1xyXG4gICAgICAgIGlmIChhbGVydFJlZi5jdXJyZW50ICYmIGRvbUVsZW1lbnQuY29udGFpbnMoYWxlcnRSZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgICAgYWxlcnRSZWYuY3VycmVudC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBwcm9wcy50aW1lb3V0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAhYWxlcnRTaG93ICYmIHNldEFsZXJ0U2hvdyh0cnVlKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2hvd1RpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXHJcbiAgICAgICAgPGRpdiByZWY9e2FsZXJ0UmVmfSBjbGFzc05hbWU9e2Ake3Byb3BzLnR5cGV9LWNvbnRhaW5lciBtYWluLWFsZXJ0LWNvbnRhaW5lciAke2FsZXJ0U2hvdyA/ICdhY3RpdmUtYWxlcnQnIDogJyd9YH0+XHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9e3Byb3BzLnR5cGV9Lz5cclxuICAgICAgICAgICAgPHA+e3Byb3BzLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm1haW4tYWxlcnQtY29udGFpbmVyIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tYWluLWFsZXJ0LWNvbnRhaW5lciBwIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWFpbi1hbGVydC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQwM2YzZjU0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDdhO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFjdGl2ZS1hbGVydCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgIGRvbUVsZW1lbnRcclxuICAgIClcclxufVxyXG5BbGVydC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGltZW91dDogNDAwMCxcclxufTtcclxuQWxlcnQucHJvcFR5cGVzID0ge1xyXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcclxuICBpY29uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBbGVydCk7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\shared\\\\UI\\\\Alert.jsx */")), domElement);
}

Alert.defaultProps = {
  timeout: 4000
};
Alert.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  message: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Alert));

/***/ }),

/***/ "./components/shared/UI/Button.jsx":
/*!*****************************************!*\
  !*** ./components/shared/UI/Button.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Icons_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Icons/icon */ "./components/Icons/icon.js");
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\shared\\UI\\Button.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Button = props => {
  const width = _objectSpread({
    background: props.background,
    border: props.border,
    color: props.color,
    fontSize: props.fontSize + 'px',
    margin: props.margin[0] + ' ' + props.margin[1] + ' ' + props.margin[2] + ' ' + props.margin[3]
  }, !props.fullWidth && props.width && {
    width: props.width + 'px'
  }, {}, props.fullWidth && {
    width: '100%',
    display: 'flex'
  });

  return __jsx("button", {
    style: width,
    onClick: props.onClick,
    disabled: props.disabled,
    className: "jsx-1958915024" + " " + `btn-global btn-${props.size} ${props.hover}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, props.icon.dir && props.icon.dir === 'left' ? __jsx(components_Icons_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: props.icon.element,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 60
    }
  }) : null, props.text, props.icon.dir && props.icon.dir === 'right' ? __jsx(components_Icons_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: props.icon.element,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 61
    }
  }) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1958915024",
    __self: undefined
  }, "button.btn-global svg{height:30px;fill:#fff;margin:0 10px;}button.btn-global{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;outline:none;text-transform:uppercase;color:#ebe6e6;border:none;border-radius:8px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:auto;padding:0px 15px;height:30px;}button.btn-md{padding:0px 15px;height:40px;}button.btn-sm{padding:0px 10px;height:30px;}.hover-from-transparent:hover{background-color:#37415c !important;color:#fff !important;}button:disabled{pointer-events:none;opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcc2hhcmVkXFxVSVxcQnV0dG9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQitCLEFBR2lDLEFBS0MsQUFjSSxBQUlBLEFBSW1CLEFBSWhCLFlBOUJWLEtBbUJFLEFBSUEsR0FRQSxFQTlCQyxPQW1CakIsQUFJQSxHQVFBLElBOUJBLEFBeUIwQixzQkFDMUIsZ0JBdkJ1Qiw2RkFDSixlQUNGLGFBQ1kseUJBQ1gsY0FDRixZQUNNLGtCQUNLLG1HQUNYLFlBQ0ssaUJBQ0wsWUFDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcQVNhaGFrXFxkYXNlclxcbmV4dFxcQ3J5cHRvR3JhcGh5XFxjb21wb25lbnRzXFxzaGFyZWRcXFVJXFxCdXR0b24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEljb24gZnJvbSAnY29tcG9uZW50cy9JY29ucy9pY29uJztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgd2lkdGggPSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcHJvcHMuYmFja2dyb3VuZCxcclxuICAgICAgICBib3JkZXI6IHByb3BzLmJvcmRlcixcclxuICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXHJcbiAgICAgICAgZm9udFNpemU6IHByb3BzLmZvbnRTaXplICsgJ3B4JyxcclxuICAgICAgICBtYXJnaW46IHByb3BzLm1hcmdpblswXSArICcgJyArIHByb3BzLm1hcmdpblsxXSArICcgJyArIHByb3BzLm1hcmdpblsyXSArICcgJyArIHByb3BzLm1hcmdpblszXSxcclxuICAgICAgICAuLi4oKCFwcm9wcy5mdWxsV2lkdGggJiYgcHJvcHMud2lkdGgpICYmIHt3aWR0aDogcHJvcHMud2lkdGggKyAncHgnfSksXHJcbiAgICAgICAgLi4uKHByb3BzLmZ1bGxXaWR0aCAmJiB7d2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnfSlcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYnRuLWdsb2JhbCBidG4tJHtwcm9wcy5zaXplfSAke3Byb3BzLmhvdmVyfWB9IHN0eWxlPXt3aWR0aH0gb25DbGljaz17cHJvcHMub25DbGlja30gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT5cclxuICAgICAgICAgICAge3Byb3BzLmljb24uZGlyICYmIHByb3BzLmljb24uZGlyID09PSAnbGVmdCcgPyA8SWNvbiBuYW1lPXtwcm9wcy5pY29uLmVsZW1lbnR9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgICAgIHtwcm9wcy5pY29uLmRpciAmJiBwcm9wcy5pY29uLmRpciA9PT0gJ3JpZ2h0JyA/IDxJY29uIG5hbWU9e3Byb3BzLmljb24uZWxlbWVudH0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmJ0bi1nbG9iYWwgc3ZneyBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmJ0bi1nbG9iYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZWJlNmU2O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5idG4tbWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5idG4tc20ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ob3Zlci1mcm9tLXRyYW5zcGFyZW50OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0MTVjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59O1xyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc2l6ZTogJ21kJyxcclxuICAgIGljb246IHt9LFxyXG4gICAgdHlwZTogJ2J1dHRvbicsXHJcbiAgICBmdWxsV2lkdGg6IGZhbHNlLFxyXG4gICAgYmFja2dyb3VuZDogJyMzNzQxNWMnLFxyXG4gICAgZm9udFNpemU6IDEzLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICMzNzQxNWMnLFxyXG4gICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbn07XHJcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBiYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYm9yZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaG92ZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGljb246IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBmb250U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5LCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\shared\\\\UI\\\\Button.jsx */"));
};

Button.defaultProps = {
  size: 'md',
  icon: {},
  type: 'button',
  fullWidth: false,
  background: '#37415c',
  fontSize: 13,
  border: '1px solid #37415c',
  margin: 'auto',
  disabled: false
};
Button.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  background: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  border: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  hover: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/shared/UI/Input.jsx":
/*!****************************************!*\
  !*** ./components/shared/UI/Input.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\shared\\UI\\Input.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Input = props => {
  const styleDiv = _objectSpread({}, props.label && {
    display: props.fullWidth ? 'flex' : 'inline-flex',
    flexDirection: 'column'
  }, {}, !props.label && {
    display: props.fullWidth ? 'block' : 'inline-block'
  });

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (props.refBind.current) {
      props.refBind.current.value = props.value;
    }
  }, [props.value]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (props.refBind.current) {
      if (props.attr.length) {
        props.attr.map(attr => {
          props.refBind.current.setAttribute(attr.name, attr.value);
        });
      }
    }
  }, [props.attr]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (props.refBind.current) {
      if (props.attr.length) {
        props.attr.map(attr => {
          props.refBind.current.setAttribute(attr.name, attr.value);
        });
      }

      for (let event = 0; event < props.events.length; event++) {
        props.refBind.current.addEventListener(props.events[event], props['on' + props.events[event].replace(props.events[event].charAt(0), props.events[event].charAt(0).toUpperCase())]);
      }
    }

    return () => {
      if (props.refBind.current) {
        for (let event = 0; event < props.events.length; event++) {
          props.refBind.current.removeEventListener(props.events[event], props['on' + props.events[event].replace(props.events[event].charAt(0), props.events[event].charAt(0).toUpperCase())]);
        }
      }
    };
  }, []);
  return __jsx("div", {
    style: styleDiv,
    className: "jsx-2614468807" + " " + `input-wrap ${props.errors ? 'error-field' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, props.label ? __jsx("label", {
    className: "jsx-2614468807",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 28
    }
  }, props.label) : null, __jsx("input", {
    name: props.name,
    ref: props.refBind,
    type: props.type,
    id: props.id,
    disabled: props.disabled,
    placeholder: props.placeholder || '',
    className: "jsx-2614468807" + " " + ('input-' + props.size || false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), props.errors && __jsx("span", {
    className: "jsx-2614468807" + " " + "error-line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 30
    }
  }, props.errors), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2614468807",
    __self: undefined
  }, ".input-wrap.jsx-2614468807 label.jsx-2614468807{font-weight:600;margin-bottom:5px;color:#37415c;}.input-wrap.jsx-2614468807{position:relative;}.input-wrap.jsx-2614468807 input.jsx-2614468807{width:100%;background:#E5E6E8;margin-bottom:20px;-webkit-transition:all 400ms cubic-bezier(0.175,0.885,0.32,1.275);transition:all 400ms cubic-bezier(0.175,0.885,0.32,1.275);position:relative;z-index:2;}.input-wrap.jsx-2614468807 input.jsx-2614468807:disabled{background-color:#e7e7e7;}.input-wrap.jsx-2614468807 .error-line.jsx-2614468807{position:absolute;left:0;bottom:0;display:inline-block;margin-bottom:10px;-webkit-transition:all 400ms cubic-bezier(0.175,0.885,0.32,1.275);transition:all 400ms cubic-bezier(0.175,0.885,0.32,1.275);font-size:14px;color:red;}.input-wrap.jsx-2614468807 input[type=color].jsx-2614468807{height:46px;padding:6px 15px 6px 85%!important;}.input-wrap.jsx-2614468807 input.input-md.jsx-2614468807{padding:15px;border:none;}.error-field.jsx-2614468807 input.jsx-2614468807{margin-bottom:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcc2hhcmVkXFxVSVxcSW5wdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fd0IsQUFHcUMsQUFLRSxBQUdQLEFBUWMsQUFHUCxBQVVOLEFBSUMsQUFNTSxXQTlCQSxDQXFCZ0IsQ0FJdkIsR0FqQ00sRUFLdEIsQUFjVyxDQW9CWCxNQXZCQSxBQUlhLEFBY2IsS0F6QnVCLElBUkwsQUFvQk8sYUFTekIsQ0E1QkEsQ0FRaUUsTUFZMUMsbUJBQzBDLG1HQVozQyxrQkFDUixPQVlLLEdBWG5CLFlBWWMsVUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxBU2FoYWtcXGRhc2VyXFxuZXh0XFxDcnlwdG9HcmFwaHlcXGNvbXBvbmVudHNcXHNoYXJlZFxcVUlcXElucHV0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IElucHV0ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc3R5bGVEaXYgPSB7XHJcbiAgICAgICAgLi4uKHByb3BzLmxhYmVsICYmIHtcclxuICAgICAgICAgICAgZGlzcGxheTogcHJvcHMuZnVsbFdpZHRoID8gJ2ZsZXgnIDogJ2lubGluZS1mbGV4JyxcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcclxuICAgICAgICB9KSxcclxuICAgICAgICAuLi4oIXByb3BzLmxhYmVsICYmIHtcclxuICAgICAgICAgICAgZGlzcGxheTogcHJvcHMuZnVsbFdpZHRoID8gJ2Jsb2NrJyA6ICdpbmxpbmUtYmxvY2snXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnJlZkJpbmQuY3VycmVudCkge1xyXG4gICAgICAgICAgICBwcm9wcy5yZWZCaW5kLmN1cnJlbnQudmFsdWUgPSBwcm9wcy52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy52YWx1ZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnJlZkJpbmQuY3VycmVudCkge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMuYXR0ci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmF0dHIubWFwKGF0dHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnJlZkJpbmQuY3VycmVudC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5hdHRyXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMucmVmQmluZC5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5hdHRyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuYXR0ci5tYXAoYXR0ciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucmVmQmluZC5jdXJyZW50LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGV2ZW50ID0gMDsgZXZlbnQ8IHByb3BzLmV2ZW50cy5sZW5ndGg7IGV2ZW50KyspIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnJlZkJpbmQuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmV2ZW50c1tldmVudF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbJ29uJyArIHByb3BzLmV2ZW50c1tldmVudF0ucmVwbGFjZShwcm9wcy5ldmVudHNbZXZlbnRdLmNoYXJBdCgwKSwgcHJvcHMuZXZlbnRzW2V2ZW50XS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMucmVmQmluZC5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBldmVudCA9IDA7IGV2ZW50PCBwcm9wcy5ldmVudHMubGVuZ3RoOyBldmVudCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucmVmQmluZC5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmV2ZW50c1tldmVudF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzWydvbicgKyBwcm9wcy5ldmVudHNbZXZlbnRdLnJlcGxhY2UocHJvcHMuZXZlbnRzW2V2ZW50XS5jaGFyQXQoMCksIHByb3BzLmV2ZW50c1tldmVudF0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlRGl2fSBjbGFzc05hbWU9e2BpbnB1dC13cmFwICR7cHJvcHMuZXJyb3JzID8gJ2Vycm9yLWZpZWxkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICB7cHJvcHMubGFiZWwgPyA8bGFiZWw+e3Byb3BzLmxhYmVsfTwvbGFiZWw+IDogbnVsbH1cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnaW5wdXQtJyArIHByb3BzLnNpemV9XHJcbiAgICAgICAgICAgICAgICByZWY9e3Byb3BzLnJlZkJpbmR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyIHx8ICcnfSAvPlxyXG4gICAgICAgICAgICB7cHJvcHMuZXJyb3JzICYmIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLWxpbmVcIj57cHJvcHMuZXJyb3JzfTwvc3Bhbj59XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5pbnB1dC13cmFwIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM3NDE1YztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbnB1dC13cmFwIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5wdXQtd3JhcCBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0U1RTZFODtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5wdXQtd3JhcCBpbnB1dDpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbnB1dC13cmFwIC5lcnJvci1saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDQwMG1zIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbnB1dC13cmFwIGlucHV0W3R5cGU9Y29sb3Jde1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTVweCA2cHggODUlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbnB1dC13cmFwIGlucHV0LmlucHV0LW1ke1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmVycm9yLWZpZWxkIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5lcnJvci1maWVsZCBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc2l6ZTogJ21kJyxcclxuICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgIGZ1bGxXaWR0aDogZmFsc2UsXHJcbiAgICBldmVudHM6IFtdLFxyXG4gICAgYXR0cjogW10sXHJcbn07XHJcbklucHV0LnByb3BUeXBlcyA9IHtcclxuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcmVmQmluZDogUHJvcFR5cGVzLmFueSxcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZXJyb3JzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBldmVudHM6IFByb3BUeXBlcy5hcnJheSxcclxuICBhdHRyOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBQcm9wVHlwZXMubnVtYmVyXHJcbiAgXSksXHJcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IElucHV0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\shared\\\\UI\\\\Input.jsx */"));
};

Input.defaultProps = {
  size: 'md',
  type: 'text',
  fullWidth: false,
  events: [],
  attr: []
};
Input.propTypes = {
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  refBind: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  events: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  attr: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/shared/UI/Select.jsx":
/*!*****************************************!*\
  !*** ./components/shared/UI/Select.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\shared\\UI\\Select.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Select extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.selectChange = this.selectChange.bind(this);
  }

  selectChange(event) {
    this.props.selectEncrypt(event.target.value);
  }

  render() {
    const option = this.props.dataOptions.map(option => __jsx("option", {
      key: option.value,
      value: option.value,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 62
      }
    }, option.name));
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("select", {
      defaultValue: 'rsa',
      required: true,
      style: this.props.style,
      onChange: this.selectChange,
      className: "jsx-3665154029",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, option), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3665154029",
      __self: this
    }, "select.jsx-3665154029{cursor:pointer;outline:none;}option[value=\"default\"][disabled].jsx-3665154029{display:none;}option.jsx-3665154029{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcc2hhcmVkXFxVSVxcU2VsZWN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQjRCLEFBR3dDLEFBSUosQUFHRCxZQUNkLENBSEEsRUFKaUIsYUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcQVNhaGFrXFxkYXNlclxcbmV4dFxcQ3J5cHRvR3JhcGh5XFxjb21wb25lbnRzXFxzaGFyZWRcXFVJXFxTZWxlY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNsYXNzIFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RDaGFuZ2UgPSB0aGlzLnNlbGVjdENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdENoYW5nZSAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdEVuY3J5cHQoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5wcm9wcy5kYXRhT3B0aW9ucy5tYXAob3B0aW9uID0+ICg8b3B0aW9uIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT57b3B0aW9uLm5hbWV9PC9vcHRpb24+KSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgZGVmYXVsdFZhbHVlPXsncnNhJ30gcmVxdWlyZWQgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IG9uQ2hhbmdlPXt0aGlzLnNlbGVjdENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uW3ZhbHVlPVwiZGVmYXVsdFwiXVtkaXNhYmxlZF0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRhdGFPcHRpb25zOiBbXVxyXG59O1xyXG5cclxuU2VsZWN0LnByb3BUeXBlcyA9IHtcclxuICAgIHN0eWxlU2VsZWN0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkYXRhT3B0aW9uczogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\shared\\\\UI\\\\Select.jsx */"));
  }

}

Select.defaultProps = {
  dataOptions: []
};
Select.propTypes = {
  styleSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  dataOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./components/shared/UI/User-Image.jsx":
/*!*********************************************!*\
  !*** ./components/shared/UI/User-Image.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\shared\\UI\\User-Image.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class UserImage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  get FN() {
    return this.props.firstName.slice(0, 1).toUpperCase();
  }

  get LN() {
    var _this$props$lastName;

    return (_this$props$lastName = this.props.lastName) === null || _this$props$lastName === void 0 ? void 0 : _this$props$lastName.slice(0, 1).toUpperCase();
  }

  render() {
    return __jsx("div", {
      style: {
        borderColor: this.props.fill || '#ccc',
        color: this.props.fill || '#ccc'
      },
      className: "jsx-189482190",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, this.FN, this.LN, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "189482190",
      __self: this
    }, "div.jsx-189482190{height:35px;width:35px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:2px solid;border-radius:50%;background-color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcc2hhcmVkXFxVSVxcVXNlci1JbWFnZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0I0QixBQUdxQyxZQUNELFdBQ1Msc0dBQ0csbUdBQ0osNkZBQ0YsaUJBQ0Msa0JBQ0ksc0JBQzFCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcc2hhcmVkXFxVSVxcVXNlci1JbWFnZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY2xhc3MgVXNlckltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuICAgIGdldCBGTiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZmlyc3ROYW1lLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgTE4gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmxhc3ROYW1lPy5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tib3JkZXJDb2xvcjogdGhpcy5wcm9wcy5maWxsIHx8ICcjY2NjJywgY29sb3I6IHRoaXMucHJvcHMuZmlsbCB8fCAnI2NjYyd9fT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLkZOfVxyXG4gICAgICAgICAgICAgICAge3RoaXMuTE59XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblVzZXJJbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgZmlyc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxhc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGZpbGw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJJbWFnZTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\shared\\\\UI\\\\User-Image.jsx */"));
  }

}

UserImage.propTypes = {
  firstName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  lastName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (UserImage);

/***/ }),

/***/ "./components/shared/UI/index.js":
/*!***************************************!*\
  !*** ./components/shared/UI/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./components/shared/UI/Input.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./components/shared/UI/Button.jsx");
/* harmony import */ var _User_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User-Image */ "./components/shared/UI/User-Image.jsx");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Select */ "./components/shared/UI/Select.jsx");




/* harmony default export */ __webpack_exports__["default"] = ({
  Input: _Input__WEBPACK_IMPORTED_MODULE_0__["default"],
  Button: _Button__WEBPACK_IMPORTED_MODULE_1__["default"],
  UserImage: _User_Image__WEBPACK_IMPORTED_MODULE_2__["default"],
  Select: _Select__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./components/shared/helpers/global-functions.js":
/*!*******************************************************!*\
  !*** ./components/shared/helpers/global-functions.js ***!
  \*******************************************************/
/*! exports provided: __bodyLoading, __getRandomColor, __detectCryptIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__bodyLoading", function() { return __bodyLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__getRandomColor", function() { return __getRandomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__detectCryptIcon", function() { return __detectCryptIcon; });
/* harmony import */ var store_saga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/saga */ "./store/saga/index.js");

function __bodyLoading(isLoading, isLogged = false) {
  if (false) {}
}
function __getRandomColor() {
  let letters = '012345'.split('');
  let color = '#';
  color += letters[Math.round(Math.random() * 5)];
  letters = '0123456789ABCDEF'.split('');

  for (let i = 0; i < 5; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }

  return color;
}
function __detectCryptIcon(msg) {
  return msg.message === msg.key && msg.message === msg.encryptType && msg.message === msg.decryptedMsg && msg.message === msg.encryptType;
}

/***/ }),

/***/ "./config/fire.js":
/*!************************!*\
  !*** ./config/fire.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

const firebaseConfig = {
  apiKey: "AIzaSyANv-u4AnV5oGmBEjyoi14zvx9RnURPZoY",
  authDomain: "encrypto-polytechnic.firebaseapp.com",
  databaseURL: "https://encrypto-polytechnic.firebaseio.com",
  projectId: "encrypto-polytechnic",
  storageBucket: "encrypto-polytechnic.appspot.com",
  messagingSenderId: "220539569957",
  appId: "1:220539569957:web:d13d04a51efd84fac77ccc",
  measurementId: "G-FD5NF92VE1"
};

try {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const fire = firebase__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = (fire);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Icons_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Icons/icon */ "./components/Icons/icon.js");
/* harmony import */ var components_shared_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/shared/UI */ "./components/shared/UI/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var config_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! config/fire */ "./config/fire.js");
/* harmony import */ var components_shared_UI_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/shared/UI/Alert */ "./components/shared/UI/Alert.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/auth-service */ "./utils/auth-service.js");
/* harmony import */ var components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/shared/helpers/global-functions */ "./components/shared/helpers/global-functions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! store/actions */ "./store/actions/index.js");
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\pages\\login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














function LoginForm() {
  const _timeout = 4000;
  const {
    0: loadingLogin,
    1: setLoadingLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    register,
    handleSubmit,
    errors,
    reset
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])();

  const onSubmit = data => {
    const timeStart = new Date().getTime();
    setLoadingLogin(true);
    config_fire__WEBPACK_IMPORTED_MODULE_7__["default"].auth().signInWithEmailAndPassword(data.email, data.password).then(user => {
      setLoadingLogin(false);
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.replace('/');
    }).catch(err => {
      setLoadingLogin(false);
      setErrorMessage(err.message);
      reset();
      const timeEnd = new Date().getTime();

      if (timeEnd - timeStart > _timeout) {
        setErrorMessage('');
      } else {
        setTimeout(() => {
          setErrorMessage('');
        }, _timeout - (timeEnd - timeStart));
      }
    });
  };

  return __jsx("form", {
    className: "login-form",
    onSubmit: handleSubmit(onSubmit),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, errorMessage && __jsx(components_shared_UI_Alert__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "error",
    timeout: _timeout,
    message: errorMessage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 30
    }
  }), __jsx(components_shared_UI__WEBPACK_IMPORTED_MODULE_4__["default"].Input, {
    name: "email",
    type: "email",
    refBind: register({
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Invalid email address"
      }
    }),
    fullWidth: true,
    errors: errors.email && errors.email.message,
    placeholder: "Email ID",
    size: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx(components_shared_UI__WEBPACK_IMPORTED_MODULE_4__["default"].Input, {
    refBind: register({
      required: "You must specify a password",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }),
    errors: errors.password && errors.password.message,
    name: "password",
    type: "password",
    fullWidth: true,
    placeholder: "Password",
    size: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx(components_shared_UI__WEBPACK_IMPORTED_MODULE_4__["default"].Button, {
    type: "submit",
    icon: loadingLogin ? {
      dir: 'right',
      element: 'loading'
    } : {},
    text: "Login",
    width: 190,
    size: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/reset-password",
    prefetch: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "link-to-reset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, "Forgot password? click to reset")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/register",
    prefetch: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "link-to-reset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, "I am new here. I want an account")));
}

class Login extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading
    };

    Object(components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_11__["__bodyLoading"])(this.props.isLoading, false);

    utils_auth_service__WEBPACK_IMPORTED_MODULE_10__["__isLogged"]().then(res => {
      if (res) {
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
      } else {
        this.setState({
          isLoading: false
        }, () => Object(components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_11__["__bodyLoading"])(this.state.isLoading, false));
      }
    });
  }

  componentDidMount() {
    this.props.__CHANGE_STATUS_IS_LOADING(false);
  }

  render() {
    if (this.state.isLoading) return '';
    return __jsx("div", {
      className: "jsx-3113113131" + " " + "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }, __jsx("title", {
      className: "jsx-3113113131",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 21
      }
    }, "Login")), __jsx("main", {
      className: "jsx-3113113131",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-3113113131" + " " + "login-form-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "jsx-3113113131" + " " + "form-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 25
      }
    }, __jsx(components_Icons_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "user",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 29
      }
    })), __jsx("h4", {
      className: "jsx-3113113131" + " " + "title-form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }, "Member Login"), __jsx(LoginForm, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 25
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3113113131",
      __self: this
    }, ".login-form-container{position:absolute;left:0;right:0;margin:auto;width:400px;padding:25px 20px;background:#ececec30;bottom:0;top:0;height:-webkit-max-content;height:-moz-max-content;height:max-content;border-radius:5px;-webkit-backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);border:1px solid #ffffff24;}.login-form-container .title-form{margin-bottom:10px;text-align:center;text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-size:23px;margin:10px 10px 20px 10px;color:#fbfbfc;font-weight:400;}.login-form-container .link-to-reset{text-align:center;display:block;margin:10px;font-size:13px;font-style:italic;color:#e5e6e8;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.login-form-container .form-icon{width:40px;height:40px;margin:auto;}.login-form-container .form-icon svg{width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxccGFnZXNcXGxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1JbUMsQUFHMkMsQUFnQkMsQUFVRCxBQVNQLEFBS0EsV0FKQyxBQUtBLE9BeENMLEFBMEJPLENBVkksSUFvQk4sQUFLaEIsRUF4Q1ksT0EwQkksQ0F6QkEsRUFtQ2hCLEVBcEI2QixPQVdWLENBekJILFlBQ00sRUF5QkEsR0FYQyxhQWJFLEVBeUJQLGNBQ0ssS0F6QlYsU0FDSCxNQUNhLDRDQVdKLGVBQ1ksV0FYVCxHQXVCdEIsYUFYa0IsRUFYb0IsWUFZbEIsZ0JBQ3BCLE1BWjhCLDREQUNDLDJCQUMvQiIsImZpbGUiOiJDOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxBU2FoYWtcXGRhc2VyXFxuZXh0XFxDcnlwdG9HcmFwaHlcXHBhZ2VzXFxsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEljb24gZnJvbSAnY29tcG9uZW50cy9JY29ucy9pY29uJztcclxuaW1wb3J0IFVJX0VMRU1FTlRTIGZyb20gJ2NvbXBvbmVudHMvc2hhcmVkL1VJJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBmaXJlIGZyb20gJ2NvbmZpZy9maXJlJztcclxuaW1wb3J0IEFsZXJ0IGZyb20gJ2NvbXBvbmVudHMvc2hhcmVkL1VJL0FsZXJ0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgYXV0aFNlcnZpY2UgZnJvbSBcInV0aWxzL2F1dGgtc2VydmljZVwiO1xyXG5pbXBvcnQgeyBfX2JvZHlMb2FkaW5nIH0gZnJvbSAnY29tcG9uZW50cy9zaGFyZWQvaGVscGVycy9nbG9iYWwtZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtcclxuICAgIF9fQ0hBTkdFX1NUQVRVU19JU19MT0FESU5HXHJcbn0gZnJvbSAnc3RvcmUvYWN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBMb2dpbkZvcm0gKCkge1xyXG4gICAgY29uc3QgX3RpbWVvdXQgPSA0MDAwO1xyXG4gICAgY29uc3QgW2xvYWRpbmdMb2dpbiwgc2V0TG9hZGluZ0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycywgcmVzZXQgfSA9IHVzZUZvcm0oKTtcclxuICAgIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGltZVN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgc2V0TG9hZGluZ0xvZ2luKHRydWUpO1xyXG4gICAgICAgIGZpcmUuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGRhdGEuZW1haWwsIGRhdGEucGFzc3dvcmQpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmdMb2dpbihmYWxzZSk7XHJcbiAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZ0xvZ2luKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgcmVzZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgdGltZUVuZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBpZiAodGltZUVuZCAtIHRpbWVTdGFydCA+IF90aW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCcnKTtcclxuICAgICAgICAgICAgICAgIH0sIChfdGltZW91dCAtICh0aW1lRW5kIC0gdGltZVN0YXJ0KSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPEFsZXJ0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgdGltZW91dD17X3RpbWVvdXR9XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICA8VUlfRUxFTUVOVFMuSW5wdXRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcmVmQmluZD17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRW1haWwgaXMgcmVxdWlyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgZW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9ycy5lbWFpbCAmJiBlcnJvcnMuZW1haWwubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgSURcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCIgLz5cclxuICAgICAgICAgICAgPFVJX0VMRU1FTlRTLklucHV0XHJcbiAgICAgICAgICAgICAgICByZWZCaW5kPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiWW91IG11c3Qgc3BlY2lmeSBhIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBhc3N3b3JkIG11c3QgaGF2ZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnMucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCIgLz5cclxuICAgICAgICAgICAgPFVJX0VMRU1FTlRTLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBpY29uPXtsb2FkaW5nTG9naW4gPyB7ZGlyOiAncmlnaHQnLCBlbGVtZW50OiAnbG9hZGluZyd9IDoge319XHJcbiAgICAgICAgICAgICAgICB0ZXh0PVwiTG9naW5cIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezE5MH1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiLz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXNldC1wYXNzd29yZFwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rLXRvLXJlc2V0XCI+Rm9yZ290IHBhc3N3b3JkPyBjbGljayB0byByZXNldDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCIgcHJlZmV0Y2g9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmstdG8tcmVzZXRcIj5JIGFtIG5ldyBoZXJlLiBJIHdhbnQgYW4gYWNjb3VudDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0aGlzLnByb3BzLmlzTG9hZGluZ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgX19ib2R5TG9hZGluZyh0aGlzLnByb3BzLmlzTG9hZGluZywgZmFsc2UpO1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlLl9faXNMb2dnZWQoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sICgpID0+IF9fYm9keUxvYWRpbmcodGhpcy5zdGF0ZS5pc0xvYWRpbmcsIGZhbHNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5fX0NIQU5HRV9TVEFUVVNfSVNfTE9BRElORyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzTG9hZGluZykgcmV0dXJuICcnO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TG9naW48L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZS1mb3JtXCI+TWVtYmVyIExvZ2luPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luRm9ybS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAubG9naW4tZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjVweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmMjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2dpbi1mb3JtLWNvbnRhaW5lciAudGl0bGUtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAyMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmJmYmZjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubG9naW4tZm9ybS1jb250YWluZXIgLmxpbmstdG8tcmVzZXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTZlODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxvZ2luLWZvcm0tY29udGFpbmVyIC5mb3JtLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2dpbi1mb3JtLWNvbnRhaW5lciAuZm9ybS1pY29uIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBpc0xvYWRpbmc6IHN0YXRlLmF1dGguaXNMb2FkaW5nXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgX19DSEFOR0VfU1RBVFVTX0lTX0xPQURJTkdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShSZWFjdC5tZW1vKExvZ2luKSk7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\pages\\\\login.js */"));
  }

}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading
});

const mapDispatchToProps = {
  __CHANGE_STATUS_IS_LOADING: store_actions__WEBPACK_IMPORTED_MODULE_13__["__CHANGE_STATUS_IS_LOADING"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Login)));

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/*! exports provided: __CHANGE_IS_LOGGED, __CHANGE_STATUS_IS_LOADING, __SET_ALL_CHAT_USERS, __SET_MY_USERS_CHAT, __SET_ACTIVE_USER, __SET_MY_DATA, __SET_ACTIVE_USER_MESSAGES, __LOAD_MORE_MESSAGES, __CHANGE_STATUS_MODAL, __SET_ENCRYPT_DATA, __CHANGE_MOBILE_LIST_OPEN, __SEND_MOBILE_MESSAGE_NOTIFY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__CHANGE_IS_LOGGED", function() { return __CHANGE_IS_LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__CHANGE_STATUS_IS_LOADING", function() { return __CHANGE_STATUS_IS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SET_ALL_CHAT_USERS", function() { return __SET_ALL_CHAT_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SET_MY_USERS_CHAT", function() { return __SET_MY_USERS_CHAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SET_ACTIVE_USER", function() { return __SET_ACTIVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SET_MY_DATA", function() { return __SET_MY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SET_ACTIVE_USER_MESSAGES", function() { return __SET_ACTIVE_USER_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__LOAD_MORE_MESSAGES", function() { return __LOAD_MORE_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__CHANGE_STATUS_MODAL", function() { return __CHANGE_STATUS_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SET_ENCRYPT_DATA", function() { return __SET_ENCRYPT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__CHANGE_MOBILE_LIST_OPEN", function() { return __CHANGE_MOBILE_LIST_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SEND_MOBILE_MESSAGE_NOTIFY", function() { return __SEND_MOBILE_MESSAGE_NOTIFY; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types/index.js");

const __CHANGE_IS_LOGGED = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_IS_LOGGED"],
  payload
});
const __CHANGE_STATUS_IS_LOADING = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_IS_LOADING"],
  payload
});
const __SET_ALL_CHAT_USERS = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["ALL_USERS"],
  payload
});
const __SET_MY_USERS_CHAT = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["MY_USERS"],
  payload
});
const __SET_ACTIVE_USER = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["ACTIVE_USER"],
  payload
});
const __SET_MY_DATA = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["MY_DATA"],
  payload
});
const __SET_ACTIVE_USER_MESSAGES = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_USER_MESSAGES"],
  payload
});
const __LOAD_MORE_MESSAGES = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_MORE_MESSAGES"],
  payload
});
const __CHANGE_STATUS_MODAL = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["STATUS_MODAL"]
});
const __SET_ENCRYPT_DATA = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_ENCRYPT_DATA"],
  payload
});
const __CHANGE_MOBILE_LIST_OPEN = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_MOBILE_LIST_OPEN"],
  payload
});
const __SEND_MOBILE_MESSAGE_NOTIFY = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SEND_MOBILE_MESSAGE_NOTIFY"],
  payload
});

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: configureStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony import */ var store_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/reducers */ "./store/reducers/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/saga */ "./store/saga/index.js");




const composeEnhancers = redux__WEBPACK_IMPORTED_MODULE_1__["compose"];
const state = {
  chat: {
    isShowModal: false,
    loggedUser: null,
    activeUser: {},
    myChatUsers: null,
    allChatUsers: null,
    activeUserMessages: [],
    mobileUsersListOpen: false,
    mobileNotifyNewMsg: false,
    messagesPage: 1,
    encryptData: {
      disabled: false,
      key: '',
      type: '',
      warning: false
    }
  },
  auth: {
    isLoading: true,
    isLogged: false
  }
};
function configureStore(initialState = {}) {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(store_reducers__WEBPACK_IMPORTED_MODULE_0__["default"], initialState, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(sagaMiddleware)));
  store.runSaga = sagaMiddleware.run;
  return store;
}
const store = configureStore(state);
store.runSaga(store_saga__WEBPACK_IMPORTED_MODULE_3__["_rootSaga"]);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./store/reducers/auth.js":
/*!********************************!*\
  !*** ./store/reducers/auth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const auth = (state = {}, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_IS_LOGGED"]:
      return _objectSpread({}, state, {
        isLogged: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_IS_LOADING"]:
      return _objectSpread({}, state, {
        isLoading: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./store/reducers/chat.js":
/*!********************************!*\
  !*** ./store/reducers/chat.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const chat = (state = {}, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_ENCRYPT_DATA"]:
      return _objectSpread({}, state, {
        encryptData: _objectSpread({}, state.encryptData, {}, (() => {
          let makeObj = {};

          if (action.payload instanceof Array) {
            action.payload.map(obj => makeObj[obj.type] = obj.value);
          } else makeObj[action.payload.type] = action.payload.value;

          return makeObj;
        })())
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["STATUS_MODAL"]:
      return _objectSpread({}, state, {
        isShowModal: !state.isShowModal
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_MORE_MESSAGES"]:
      return _objectSpread({}, state, {
        messagesPage: state.messagesPage += action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_USER_MESSAGES"]:
      return _objectSpread({}, state, {
        activeUserMessages: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_MOBILE_LIST_OPEN"]:
      return _objectSpread({}, state, {
        mobileUsersListOpen: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["MY_DATA"]:
      return _objectSpread({}, state, {
        loggedUser: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["MY_USERS"]:
      return _objectSpread({}, state, {
        myChatUsers: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SEND_MOBILE_MESSAGE_NOTIFY"]:
      return _objectSpread({}, state, {
        mobileNotifyNewMsg: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["ALL_USERS"]:
      action.payload && state.myChatUsers.map(item => {
        action.payload.splice(action.payload.findIndex(el => el.id === item.id), 1);
      });
      return _objectSpread({}, state, {
        allChatUsers: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["ACTIVE_USER"]:
      return _objectSpread({}, state, {
        activeUser: action.payload || {}
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (chat);

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./store/reducers/auth.js");
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat */ "./store/reducers/chat.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"],
  chat: _chat__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./store/saga/index.js":
/*!*****************************!*\
  !*** ./store/saga/index.js ***!
  \*****************************/
/*! exports provided: __SET_LOGGED, __GET_ALL_USERS, __GET_CHAT_USERS, __CHANGE_IS_SEEN, __GET_ACTIVE_USERS_MESSAGES, __IS_TYPING_TO_ACTIVE_USER, __GO_PRIVATE_CHAT, __ADD_MESSAGE, __REMOVE_MESSAGE, __EDIT_MESSAGE, _rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SET_LOGGED", function() { return __SET_LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__GET_ALL_USERS", function() { return __GET_ALL_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__GET_CHAT_USERS", function() { return __GET_CHAT_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__CHANGE_IS_SEEN", function() { return __CHANGE_IS_SEEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__GET_ACTIVE_USERS_MESSAGES", function() { return __GET_ACTIVE_USERS_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__IS_TYPING_TO_ACTIVE_USER", function() { return __IS_TYPING_TO_ACTIVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__GO_PRIVATE_CHAT", function() { return __GO_PRIVATE_CHAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__ADD_MESSAGE", function() { return __ADD_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__REMOVE_MESSAGE", function() { return __REMOVE_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__EDIT_MESSAGE", function() { return __EDIT_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_rootSaga", function() { return _rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./store/actions/index.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store */ "./store/index.js");
/* harmony import */ var config_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config/fire */ "./config/fire.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function* __SET_LOGGED(action) {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["__CHANGE_IS_LOGGED"])(action)));
}
async function* __GET_ALL_USERS(data) {
  if (data) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["__SET_ALL_CHAT_USERS"])(null)));
    return;
  }

  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
  const fakeObj = [];
  await db.collection('users').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      const _data = doc.data();

      delete _data.messages;
      fakeObj.push(_objectSpread({}, _data));
    });
  });
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["__SET_ALL_CHAT_USERS"])(fakeObj)));
}
let unsubscribeUsers;
async function* __GET_CHAT_USERS(data) {
  if (unsubscribeUsers) unsubscribeUsers();
  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
  let usersData = [];

  if (data) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["__SET_MY_USERS_CHAT"])(data)));
  } else {
    unsubscribeUsers = db.collection('users').where("email", "==", config_fire__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser.email).onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        var _store$getState$chat$, _usersData$;

        usersData = doc.data().messages;
        const userId = ((_store$getState$chat$ = store__WEBPACK_IMPORTED_MODULE_2__["default"].getState().chat.activeUser) === null || _store$getState$chat$ === void 0 ? void 0 : _store$getState$chat$.id) || ((_usersData$ = usersData[0]) === null || _usersData$ === void 0 ? void 0 : _usersData$.id);
        doc.data().messages.forEach((user, index) => {
          if (user.id === userId) {
            const _cloneActiveUser = JSON.parse(JSON.stringify(usersData[index]));

            _cloneActiveUser.letters = _cloneActiveUser.letters.slice(-1).pop();
            store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["__SET_ACTIVE_USER"])(_cloneActiveUser));
          }

          usersData[index].letters = user.letters.slice(-1).pop();
        });
        store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["__SET_MY_USERS_CHAT"])(usersData));
      });
    });
    yield usersData;
  }
}
async function* __CHANGE_IS_SEEN({
  senderID,
  myID
}) {
  // Change my seen
  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
  await db.collection('users').doc(myID).get().then(res => {
    var _res$data;

    const myObj = db.doc(`users/${myID}`);

    let _messagesMy = (_res$data = res.data()) === null || _res$data === void 0 ? void 0 : _res$data.messages;

    if (!_messagesMy) return;

    const _findIndex = res.data().messages.findIndex(item => item.id === senderID);

    if (_findIndex !== -1) {
      _messagesMy[_findIndex].isSeen = true;
      _messagesMy[_findIndex].countMessagesDelivered = 0;
    }

    myObj.update('messages', _messagesMy);
  });
  await db.collection('users').doc(senderID).get().then(res => {
    var _res$data2;

    const senderObj = db.doc(`users/${senderID}`);

    let _messagesMy = (_res$data2 = res.data()) === null || _res$data2 === void 0 ? void 0 : _res$data2.messages;

    if (!_messagesMy) return;

    const _findIndex = res.data().messages.findIndex(item => item.id === myID);

    if (_findIndex !== -1) {
      _messagesMy[_findIndex].isSeen = true;
      _messagesMy[_findIndex].countMessagesDelivered = 0;
    }

    senderObj.update('messages', _messagesMy);
  });
  yield;
}
let unsubscribe;
async function* __GET_ACTIVE_USERS_MESSAGES(data) {
  if (unsubscribe) {
    unsubscribe();
  }

  let _messages = [];
  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
  await new Promise(resolve => {
    unsubscribe = db.collection('users').where("email", "==", config_fire__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser.email).onSnapshot(res => {
      res.forEach(doc => {
        var _doc$data;

        const _findIndex = (_doc$data = doc.data()) === null || _doc$data === void 0 ? void 0 : _doc$data.messages.findIndex(item => item.id === data);

        if (_findIndex !== -1) {
          _messages = doc.data().messages[_findIndex];
          store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["__SET_ACTIVE_USER_MESSAGES"])([..._messages.letters]));
          resolve();
        }
      });
    });
  });
  yield _messages;
}
async function* __IS_TYPING_TO_ACTIVE_USER(hint, toUserId, myId) {
  let friendUsers = null;
  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
  await db.collection('users').doc(toUserId).get().then(res => {
    const myObj = db.doc(`users/${toUserId}`);
    friendUsers = res.data();
    let _messagesMy = res.data().messages;

    const _findIndex = res.data().messages.findIndex(item => item.id === myId);

    if (_findIndex !== -1) {
      _messagesMy[_findIndex].isTyping = hint;
      myObj.update('messages', _messagesMy);
    }
  });
}
async function* __GO_PRIVATE_CHAT(idUser, loggedId) {
  const usersData = store__WEBPACK_IMPORTED_MODULE_2__["default"].getState().chat.myChatUsers;
  const findActiveUser = usersData.find(user => user.id === idUser);

  if (findActiveUser) {
    store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["__SET_ACTIVE_USER"])(findActiveUser));
  }

  let friendChatMyObj = {};
  await __CHANGE_IS_SEEN({
    senderID: idUser,
    myID: loggedId
  }).next();
  yield friendChatMyObj;
}
let unsubscribeAddMessageMy;
let unsubscribeAddMessageFriend;
async function* __ADD_MESSAGE({
  friend,
  my
}) {
  if (unsubscribeAddMessageMy) unsubscribeAddMessageMy();
  if (unsubscribeAddMessageFriend) unsubscribeAddMessageFriend();
  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
  const updateMyUsers = db.collection('users').doc(my.loggedUser.id);
  let friendUsers = {};
  await db.collection('users').doc(my.friendId).get().then(res => {
    friendUsers = res.data();
  });
  unsubscribeAddMessageMy = updateMyUsers.onSnapshot(querySnapshot => {
    const myUsers = querySnapshot.data();
    if (!myUsers) return;

    const _findIndex = myUsers.messages.findIndex(item => item.id === my.friendId);

    if (_findIndex === -1) {
      myUsers.messages.unshift({
        id: my.friendId,
        isSeen: true,
        isTyping: false,
        isSender: true,
        countMessagesDelivered: 0,
        color: friendUsers.color,
        fullName: friendUsers.fullName,
        letters: [my.msgData]
      });
      updateMyUsers.update('messages', myUsers.messages);
    } else if (!myUsers.messages[_findIndex].letters.filter(msg => msg.time === my.msgData.time).length) {
      const _saveData = myUsers.messages[_findIndex];

      if (myUsers.messages[_findIndex].letters.length === 1 && myUsers.messages[_findIndex].letters[0].time === null) {
        myUsers.messages[_findIndex].letters[0] = my.msgData;
      } else {
        myUsers.messages[_findIndex].letters.push(my.msgData);
      }

      myUsers.messages[_findIndex].isSeen = false;
      myUsers.messages[_findIndex].isTyping = false;
      myUsers.messages[_findIndex].isSender = true;
      myUsers.messages.splice(_findIndex, 1);
      myUsers.messages.unshift(_saveData);
      updateMyUsers.update('messages', myUsers.messages);
    }
  });
  if (!friend) return;
  const updateFriendUsers = db.collection('users').doc(friend.friendId);
  unsubscribeAddMessageFriend = updateFriendUsers.onSnapshot(querySnapshot => {
    const friendUsers = querySnapshot.data();
    if (!friendUsers) return;

    const _findIndex = friendUsers.messages.findIndex(item => {
      var _friend$loggedUser;

      return item.id === ((_friend$loggedUser = friend.loggedUser) === null || _friend$loggedUser === void 0 ? void 0 : _friend$loggedUser.id);
    });

    if (_findIndex === -1) {
      friendUsers.messages.push({
        id: friend.loggedUser.id,
        color: friend.loggedUser.color,
        isSeen: false,
        isSender: false,
        isTyping: false,
        countMessagesDelivered: 1,
        fullName: friend.loggedUser.fullName,
        letters: [friend.msgData]
      });
      updateFriendUsers.update('messages', friendUsers.messages);
    } else if (!friendUsers.messages[_findIndex].letters.filter(msg => msg.time === friend.msgData.time).length) {
      if (friendUsers.messages[_findIndex].letters.length === 1 && friendUsers.messages[_findIndex].letters[0].time === null) {
        friendUsers.messages[_findIndex].letters[0] = friend.msgData;
      } else {
        friendUsers.messages[_findIndex].letters.push(friend.msgData);
      }

      friendUsers.messages[_findIndex].isSeen = false;
      friendUsers.messages[_findIndex].countMessagesDelivered += 1;
      friendUsers.messages[_findIndex].isSender = false;
      friendUsers.messages[_findIndex].isTyping = false;
      updateFriendUsers.update('messages', friendUsers.messages);
    }
  });
  yield;
}
let unsubscribeRemoveMy;
let unsubscribeRemoveFriend;
async function* __REMOVE_MESSAGE(time, {
  idUser,
  myId
}) {
  if (unsubscribeRemoveMy) unsubscribeRemoveMy();
  if (unsubscribeRemoveFriend) unsubscribeRemoveFriend();
  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
  let updateFriendUsers = null,
      friendUsers = null,
      updateMyUsers = null,
      myUsers = null;
  unsubscribeRemoveFriend = await db.collection('users').doc(idUser).onSnapshot(snapshot => {
    updateFriendUsers = db.doc(`users/${snapshot.data().id}`);
    friendUsers = snapshot.data();
    if (!friendUsers) return;

    const _findIndexInFriend = friendUsers.messages.findIndex(item => item.id === myId);

    const foundedItem = friendUsers.messages[_findIndexInFriend].letters.findIndex(msg => msg.time === time);

    if (foundedItem !== -1 && friendUsers.messages[_findIndexInFriend].letters[foundedItem].removed) return;

    if (foundedItem !== -1 && friendUsers.messages[_findIndexInFriend].letters[foundedItem]) {
      friendUsers.messages[_findIndexInFriend].letters[foundedItem].removed = true;
      friendUsers.messages[_findIndexInFriend].removedMessageIndex = foundedItem;
    }

    updateFriendUsers.update('messages', friendUsers.messages);
  });
  unsubscribeRemoveMy = db.collection('users').doc(myId).onSnapshot(snapshot => {
    updateMyUsers = db.doc(`users/${snapshot.data().id}`);
    myUsers = snapshot.data();
    if (!myUsers) return;

    const _findIndexInMy = myUsers.messages.findIndex(item => item.id === idUser);

    const foundedItem = myUsers.messages[_findIndexInMy].letters.findIndex(msg => msg.time === time);

    if (foundedItem !== -1 && myUsers.messages[_findIndexInMy].letters[foundedItem].removed) return;

    if (foundedItem !== -1 && myUsers.messages[_findIndexInMy].letters[foundedItem]) {
      myUsers.messages[_findIndexInMy].letters[foundedItem].removed = true;
      myUsers.messages[_findIndexInMy].removedMessageIndex = foundedItem;
    }

    updateMyUsers.update('messages', myUsers.messages);
  });
  yield;
}
async function* __EDIT_MESSAGE(msgData, index, {
  idUser,
  myId
}) {
  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
  let updateFriendUsers = null,
      friendUsers = null,
      updateMyUsers = null,
      myUsers = null;
  await db.collection('users').doc(idUser).get().then(async res => {
    updateFriendUsers = db.doc(`users/${res.data().id}`);
    friendUsers = res.data();
    if (!friendUsers) return;

    const _findIndexInFriend = friendUsers.messages.findIndex(item => item.id === myId);

    if (!msgData) {
      friendUsers.messages[_findIndexInFriend].editedMsgIndex = -1;
      friendUsers.messages[_findIndexInFriend].countMessagesDelivered = 0;
      friendUsers.messages[_findIndexInFriend].isSeen = true;
      friendUsers.messages[_findIndexInFriend].isSender = true;
      friendUsers.messages[_findIndexInFriend].isTyping = false;
    } else if (_findIndexInFriend !== -1) {
      friendUsers.messages[_findIndexInFriend].editedMsgIndex = index;
      friendUsers.messages[_findIndexInFriend].letters[index] = _objectSpread({}, friendUsers.messages[_findIndexInFriend].letters[index], {
        decryptedMsg: msgData.d,
        encryptedMsg: msgData.e,
        message: msgData.value,
        edited: true
      });
    }

    await updateFriendUsers.update('messages', friendUsers.messages);
  });
  await db.collection('users').doc(myId).get().then(async res => {
    updateMyUsers = db.doc(`users/${res.data().id}`);
    myUsers = res.data();
    if (!myUsers) return;

    const _findIndexInMy = myUsers.messages.findIndex(item => item.id === idUser);

    if (!msgData) {
      myUsers.messages[_findIndexInMy].editedMsgIndex = -1;
      myUsers.messages[_findIndexInMy].countMessagesDelivered = 0;
      myUsers.messages[_findIndexInMy].isSeen = true;
      myUsers.messages[_findIndexInMy].isSender = true;
      myUsers.messages[_findIndexInMy].isTyping = false;
    } else if (_findIndexInMy !== -1) {
      myUsers.messages[_findIndexInMy].editedMsgIndex = index;
      myUsers.messages[_findIndexInMy].letters[index] = _objectSpread({}, myUsers.messages[_findIndexInMy].letters[index], {
        decryptedMsg: msgData.d,
        encryptedMsg: msgData.e,
        message: msgData.value,
        edited: true
      });
    }

    await updateMyUsers.update('messages', myUsers.messages);
  });
  yield;
}
function* _rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([__SET_LOGGED, __GET_CHAT_USERS, __GET_ALL_USERS, __CHANGE_IS_SEEN, __GET_ACTIVE_USERS_MESSAGES, __IS_TYPING_TO_ACTIVE_USER, __GO_PRIVATE_CHAT, __EDIT_MESSAGE, __REMOVE_MESSAGE, __ADD_MESSAGE]);
}

/***/ }),

/***/ "./store/types/index.js":
/*!******************************!*\
  !*** ./store/types/index.js ***!
  \******************************/
/*! exports provided: SET_IS_LOGGED, SET_IS_LOADING, MY_USERS, ALL_USERS, ACTIVE_USER, MY_DATA, SET_USER_MESSAGES, LOAD_MORE_MESSAGES, STATUS_MODAL, SET_ENCRYPT_DATA, CHANGE_MOBILE_LIST_OPEN, SEND_MOBILE_MESSAGE_NOTIFY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_IS_LOGGED", function() { return SET_IS_LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_IS_LOADING", function() { return SET_IS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_USERS", function() { return MY_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_USERS", function() { return ALL_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE_USER", function() { return ACTIVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_DATA", function() { return MY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_MESSAGES", function() { return SET_USER_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MORE_MESSAGES", function() { return LOAD_MORE_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_MODAL", function() { return STATUS_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ENCRYPT_DATA", function() { return SET_ENCRYPT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_MOBILE_LIST_OPEN", function() { return CHANGE_MOBILE_LIST_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_MOBILE_MESSAGE_NOTIFY", function() { return SEND_MOBILE_MESSAGE_NOTIFY; });
const SET_IS_LOGGED = 'IS_LOGGED';
const SET_IS_LOADING = 'IS_LOADING';
const MY_USERS = 'MY_USERS';
const ALL_USERS = 'ALL_USERS';
const ACTIVE_USER = 'ACTIVE_USER';
const MY_DATA = 'MY_DATA';
const SET_USER_MESSAGES = 'SET_USER_MESSAGES';
const LOAD_MORE_MESSAGES = 'LOAD_MORE_MESSAGES';
const STATUS_MODAL = 'STATUS_MODAL';
const SET_ENCRYPT_DATA = 'SET_ENCRYPT_DATA';
const CHANGE_MOBILE_LIST_OPEN = 'CHANGE_MOBILE_LIST_OPEN';
const SEND_MOBILE_MESSAGE_NOTIFY = 'SEND_MOBILE_MESSAGE_NOTIFY';

/***/ }),

/***/ "./utils/auth-service.js":
/*!*******************************!*\
  !*** ./utils/auth-service.js ***!
  \*******************************/
/*! exports provided: __isLogged, __resetPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__isLogged", function() { return __isLogged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__resetPassword", function() { return __resetPassword; });
/* harmony import */ var config_fire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config/fire */ "./config/fire.js");

const __isLogged = () => {
  return new Promise(resolve => config_fire__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged(user => {
    resolve(user);
  }));
};
const __resetPassword = _userEmail => {
  const _auth = config_fire__WEBPACK_IMPORTED_MODULE_0__["default"].auth();

  if (_userEmail == null) {
    _userEmail = _auth.currentUser.email;
  }

  return _auth.sendPasswordResetEmail(_userEmail);
};

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ruala\Desktop\ASahak\daser\next\CryptoGraphy\pages\login.js */"./pages/login.js");


/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map