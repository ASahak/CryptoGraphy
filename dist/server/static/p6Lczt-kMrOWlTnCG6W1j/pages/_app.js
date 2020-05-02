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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// CONCATENATED MODULE: ./components/shared/helpers/global-styles.js

/* harmony default export */ var global_styles = (external_styled_components_["createGlobalStyle"]`
      @import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');
      html,
      body {
        font-family: Dosis, serif;
        background-image: url('./assets/images/backgroundEncrypt.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        padding: 0;
        margin: 0;
        position: relative;
      }
      body.bg-none {
        background-image: none;
        background-color: #fff;
      }
      body.still-loading:after {
        content: '';
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
        background-image: url(./assets/images/loading.gif);
        background-position: center;
        background-size: 40%;
        background-repeat: no-repeat;
        background-color: #fff;
        transition: .5s;
        opacity: 1;
      }
      body.still-animation-leave:after {
        opacity: 0;
      }
      * {
        box-sizing: border-box;
      }
      #portal {
        position: fixed;
        right: 0;
        max-width: 300px;
        max-height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    
    .spinner {
      margin: 0;
      height: 16px;
      width: 30px;
      display: flex;
      align-items: center;
      text-align: center;
    }
    
    .spinner > div {
      width: 8px;
      height: 8px;
      border-radius: 100%;
      display: inline-block;
      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      background: rgba(0,0,0,.3);
    }
     
    .spinner .bounce1 {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }
    
    .spinner .bounce2 {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
    
    @-webkit-keyframes sk-bouncedelay {
      0%,
      80%,
      100% {
        -webkit-transform: scale(0)
      }
      40% {
        -webkit-transform: scale(1.0)
      }
    }
    
    @keyframes sk-bouncedelay {
      0%,
      80%,
      100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      40% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
      }
    }
`);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/index.js + 3 modules
var store = __webpack_require__("kQFM");

// CONCATENATED MODULE: ./pages/_app.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







class _app_AppWrapper extends app_default.a {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      Component,
      pageProps,
      initialProps
    } = this.props;
    return __jsx(external_react_default.a.Fragment, null, __jsx(global_styles, null), __jsx(external_react_redux_["Provider"], {
      store: store["a" /* default */]
    }, __jsx(Component, _extends({}, pageProps, initialProps))));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_AppWrapper);

/***/ }),

/***/ "1Vj6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SET_IS_LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_IS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MY_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALL_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SET_USER_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_MORE_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return STATUS_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_ENCRYPT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_MOBILE_LIST_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SEND_MOBILE_MESSAGE_NOTIFY; });
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

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "Xp8U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __CHANGE_IS_LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __CHANGE_STATUS_IS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __SET_ALL_CHAT_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __SET_MY_USERS_CHAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __SET_ACTIVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __SET_MY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __SET_ACTIVE_USER_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __LOAD_MORE_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __CHANGE_STATUS_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __SET_ENCRYPT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __CHANGE_MOBILE_LIST_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __SEND_MOBILE_MESSAGE_NOTIFY; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1Vj6");

const __CHANGE_IS_LOGGED = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* SET_IS_LOGGED */ "j"],
  payload
});
const __CHANGE_STATUS_IS_LOADING = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* SET_IS_LOADING */ "i"],
  payload
});
const __SET_ALL_CHAT_USERS = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ALL_USERS */ "b"],
  payload
});
const __SET_MY_USERS_CHAT = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* MY_USERS */ "f"],
  payload
});
const __SET_ACTIVE_USER = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ACTIVE_USER */ "a"],
  payload
});
const __SET_MY_DATA = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* MY_DATA */ "e"],
  payload
});
const __SET_ACTIVE_USER_MESSAGES = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* SET_USER_MESSAGES */ "k"],
  payload
});
const __LOAD_MORE_MESSAGES = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_MORE_MESSAGES */ "d"],
  payload
});
const __CHANGE_STATUS_MODAL = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* STATUS_MODAL */ "l"]
});
const __SET_ENCRYPT_DATA = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* SET_ENCRYPT_DATA */ "h"],
  payload
});
const __CHANGE_MOBILE_LIST_OPEN = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* CHANGE_MOBILE_LIST_OPEN */ "c"],
  payload
});
const __SEND_MOBILE_MESSAGE_NOTIFY = payload => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__[/* SEND_MOBILE_MESSAGE_NOTIFY */ "g"],
  payload
});

/***/ }),

/***/ "Z5Ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pNaP");
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
/* harmony default export */ __webpack_exports__["a"] = (fire);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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

  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "kQFM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./store/types/index.js
var types = __webpack_require__("1Vj6");

// CONCATENATED MODULE: ./store/reducers/auth.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const auth = (state = {}, action) => {
  switch (action.type) {
    case types["j" /* SET_IS_LOGGED */]:
      return _objectSpread({}, state, {
        isLogged: action.payload
      });

    case types["i" /* SET_IS_LOADING */]:
      return _objectSpread({}, state, {
        isLoading: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_auth = (auth);
// CONCATENATED MODULE: ./store/reducers/chat.js
function chat_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function chat_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { chat_ownKeys(Object(source), true).forEach(function (key) { chat_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { chat_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function chat_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const chat = (state = {}, action) => {
  switch (action.type) {
    case types["h" /* SET_ENCRYPT_DATA */]:
      return chat_objectSpread({}, state, {
        encryptData: chat_objectSpread({}, state.encryptData, {}, (() => {
          let makeObj = {};

          if (action.payload instanceof Array) {
            action.payload.map(obj => makeObj[obj.type] = obj.value);
          } else makeObj[action.payload.type] = action.payload.value;

          return makeObj;
        })())
      });

    case types["l" /* STATUS_MODAL */]:
      return chat_objectSpread({}, state, {
        isShowModal: !state.isShowModal
      });

    case types["d" /* LOAD_MORE_MESSAGES */]:
      return chat_objectSpread({}, state, {
        messagesPage: state.messagesPage += action.payload
      });

    case types["k" /* SET_USER_MESSAGES */]:
      return chat_objectSpread({}, state, {
        activeUserMessages: action.payload
      });

    case types["c" /* CHANGE_MOBILE_LIST_OPEN */]:
      return chat_objectSpread({}, state, {
        mobileUsersListOpen: action.payload
      });

    case types["e" /* MY_DATA */]:
      return chat_objectSpread({}, state, {
        loggedUser: action.payload
      });

    case types["f" /* MY_USERS */]:
      return chat_objectSpread({}, state, {
        myChatUsers: action.payload
      });

    case types["g" /* SEND_MOBILE_MESSAGE_NOTIFY */]:
      return chat_objectSpread({}, state, {
        mobileNotifyNewMsg: action.payload
      });

    case types["b" /* ALL_USERS */]:
      action.payload && state.myChatUsers.map(item => {
        action.payload.splice(action.payload.findIndex(el => el.id === item.id), 1);
      });
      return chat_objectSpread({}, state, {
        allChatUsers: action.payload
      });

    case types["a" /* ACTIVE_USER */]:
      return chat_objectSpread({}, state, {
        activeUser: action.payload || {}
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_chat = (chat);
// CONCATENATED MODULE: ./store/reducers/index.js



/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  auth: reducers_auth,
  chat: reducers_chat
}));
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./store/saga/index.js
var saga = __webpack_require__("wLeX");

// CONCATENATED MODULE: ./store/index.js
/* unused harmony export configureStore */




const composeEnhancers = external_redux_["compose"];
const store_state = {
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
  const sagaMiddleware = external_redux_saga_default()();
  const store = Object(external_redux_["createStore"])(reducers, initialState, composeEnhancers(Object(external_redux_["applyMiddleware"])(sagaMiddleware)));
  store.runSaga = sagaMiddleware.run;
  return store;
}
const store_store = configureStore(store_state);
store_store.runSaga(saga["j" /* _rootSaga */]);
/* harmony default export */ var store_0 = __webpack_exports__["a"] = (store_store);

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "wLeX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __SET_LOGGED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __GET_ALL_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __GET_CHAT_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __CHANGE_IS_SEEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __GET_ACTIVE_USERS_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __IS_TYPING_TO_ACTIVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __GO_PRIVATE_CHAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __ADD_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __REMOVE_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __EDIT_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("RmXt");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Xp8U");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kQFM");
/* harmony import */ var config_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Z5Ad");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function* __SET_LOGGED(action) {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[/* __CHANGE_IS_LOGGED */ "a"])(action)));
}
async function* __GET_ALL_USERS(data) {
  if (data) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[/* __SET_ALL_CHAT_USERS */ "i"])(null)));
    return;
  }

  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].firestore();
  const fakeObj = [];
  await db.collection('users').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      const _data = doc.data();

      delete _data.messages;
      fakeObj.push(_objectSpread({}, _data));
    });
  });
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[/* __SET_ALL_CHAT_USERS */ "i"])(fakeObj)));
}
let unsubscribeUsers;
async function* __GET_CHAT_USERS(data) {
  if (unsubscribeUsers) unsubscribeUsers();
  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].firestore();
  let usersData = [];

  if (data) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[/* __SET_MY_USERS_CHAT */ "l"])(data)));
  } else {
    unsubscribeUsers = db.collection('users').where("email", "==", config_fire__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].auth().currentUser.email).onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        var _store$getState$chat$, _usersData$;

        usersData = doc.data().messages;
        const userId = ((_store$getState$chat$ = store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getState().chat.activeUser) === null || _store$getState$chat$ === void 0 ? void 0 : _store$getState$chat$.id) || ((_usersData$ = usersData[0]) === null || _usersData$ === void 0 ? void 0 : _usersData$.id);
        doc.data().messages.forEach((user, index) => {
          if (user.id === userId) {
            const _cloneActiveUser = JSON.parse(JSON.stringify(usersData[index]));

            _cloneActiveUser.letters = _cloneActiveUser.letters.slice(-1).pop();
            store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[/* __SET_ACTIVE_USER */ "g"])(_cloneActiveUser));
          }

          usersData[index].letters = user.letters.slice(-1).pop();
        });
        store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[/* __SET_MY_USERS_CHAT */ "l"])(usersData));
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
  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].firestore();
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
  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].firestore();
  await new Promise(resolve => {
    unsubscribe = db.collection('users').where("email", "==", config_fire__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].auth().currentUser.email).onSnapshot(res => {
      res.forEach(doc => {
        var _doc$data;

        const _findIndex = (_doc$data = doc.data()) === null || _doc$data === void 0 ? void 0 : _doc$data.messages.findIndex(item => item.id === data);

        if (_findIndex !== -1) {
          _messages = doc.data().messages[_findIndex];
          store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[/* __SET_ACTIVE_USER_MESSAGES */ "h"])([..._messages.letters]));
          resolve();
        }
      });
    });
  });
  yield _messages;
}
async function* __IS_TYPING_TO_ACTIVE_USER(hint, toUserId, myId) {
  let friendUsers = null;
  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].firestore();
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
  const usersData = store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getState().chat.myChatUsers;
  const findActiveUser = usersData.find(user => user.id === idUser);

  if (findActiveUser) {
    store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[/* __SET_ACTIVE_USER */ "g"])(findActiveUser));
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
  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].firestore();
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
  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].firestore();
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
  const db = config_fire__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].firestore();
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

/***/ })

/******/ });