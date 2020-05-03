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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Chat-Content.jsx":
/*!*************************************!*\
  !*** ./components/Chat-Content.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Chat_Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Chat-Users */ "./components/Chat-Users.jsx");
/* harmony import */ var components_Chat_Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Chat-Messages */ "./components/Chat-Messages.jsx");
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Chat-Content.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class ChatContent extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor() {
    super();
  }

  render() {
    return __jsx("div", {
      className: "jsx-243684195" + " " + "chat-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx(components_Chat_Users__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }), __jsx(components_Chat_Messages__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "243684195",
      __self: this
    }, ".chat-content.jsx-243684195{height:calc(100vh - 79px);width:calc(100vw - 10vw);margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:16px;max-width:1200px;padding-bottom:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcQ2hhdC1Db250ZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhNEIsQUFHbUQsMEJBQ0QseUJBQ2IsWUFDQywwRUFDZ0IsbUhBQ2IsZ0JBQ0MsaUJBQ0csb0JBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcQ2hhdC1Db250ZW50LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaGF0VXNlcnMgZnJvbSAnY29tcG9uZW50cy9DaGF0LVVzZXJzJztcclxuaW1wb3J0IENoYXRNZXNzYWdlcyBmcm9tICdjb21wb25lbnRzL0NoYXQtTWVzc2FnZXMnO1xyXG5cclxuY2xhc3MgQ2hhdENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hhdFVzZXJzIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2hhdE1lc3NhZ2VzIC8+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYXQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc5cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEwdncpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdENvbnRlbnQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\Chat-Content.jsx */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ChatContent);

/***/ }),

/***/ "./components/Chat-Messages.jsx":
/*!**************************************!*\
  !*** ./components/Chat-Messages.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_shared_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/shared/UI */ "./components/shared/UI/index.js");
/* harmony import */ var components_Icons_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Icons/icon */ "./components/Icons/icon.js");
/* harmony import */ var components_Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Messages */ "./components/Messages.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store/actions */ "./store/actions/index.js");
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Chat-Messages.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class ChatMessages extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._encryptData = [{
      value: 'substitution',
      name: 'Substitution'
    }, {
      value: 'vigenere',
      name: 'Vigenere'
    }, {
      value: 'caesar',
      name: 'Caesar'
    }, {
      value: 'playfair',
      name: 'Playfair'
    }, {
      value: 'vernam',
      name: 'Vernam'
    }];
    this.__selectEncrypt = this.__selectEncrypt.bind(this);
    this.__generateValue = this.__generateValue.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.encryptData.type !== this.props.encryptData.type) {
      if (this.props.encryptData.type === 'substitution') {
        this.props.__SET_ENCRYPT_DATA([{
          type: 'key',
          value: ''
        }, {
          type: 'warning',
          value: false
        }, {
          type: 'disabled',
          value: true
        }]);
      } else if (this.props.encryptData.type === 'vernam') {
        this.props.__SET_ENCRYPT_DATA([{
          type: 'key',
          value: ''
        }, {
          type: 'warning',
          value: false
        }, {
          type: 'disabled',
          value: true
        }]);
      } else {
        let value = this.props.encryptData.type === 'caesar' ? 3 : '';

        this.props.__SET_ENCRYPT_DATA([{
          type: 'key',
          value: value
        }, {
          type: 'warning',
          value: false
        }, {
          type: 'disabled',
          value: false
        }]);
      }
    }
  }

  componentDidMount() {
    this.props.__SET_ENCRYPT_DATA({
      type: 'type',
      value: 'substitution'
    });
  }

  __generateValue(value) {
    this.props.__SET_ENCRYPT_DATA({
      type: 'key',
      value: ''
    });

    if (this.props.encryptData.type === 'caesar' && value === '') {
      value = 3;
    }

    return value;
  }

  __selectEncrypt(data) {
    this.props.__SET_ENCRYPT_DATA({
      type: 'type',
      value: data
    });
  }

  render() {
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["265333361", [!this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 100 : 0]]]) + " " + "chat-messages",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["265333361", [!this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 100 : 0]]]) + " " + "select-bar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, __jsx("span", {
      onClick: () => this.props.__CHANGE_MOBILE_LIST_OPEN(true),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["265333361", [!this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 100 : 0]]]) + " " + `lnr lnr-menu d-none_sm ${this.props.mobileNotifyNewMsg ? 'new-mobile-msg' : ''}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }), __jsx(components_shared_UI__WEBPACK_IMPORTED_MODULE_2__["default"].Select, {
      selectEncrypt: this.__selectEncrypt,
      placeholder: "Please choose encrypt type",
      style: {
        display: 'block',
        width: '70%',
        padding: '12px',
        border: 'none',
        borderBottom: '1px solid #e3dede',
        marginLeft: '1px',
        backgroundColor: 'transparent'
      },
      dataOptions: this._encryptData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }), __jsx("div", {
      style: {
        height: '100%'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["265333361", [!this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 100 : 0]]]) + " " + ((this.props.encryptData.warning ? 'warning-wrap' : '') || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }
    }, __jsx(components_shared_UI__WEBPACK_IMPORTED_MODULE_2__["default"].Input, {
      name: "key",
      attr: this.props.encryptData.type === 'caesar' ? [{
        name: 'min',
        value: 1
      }] : [],
      type: this.props.encryptData.type === 'caesar' ? 'number' : 'text',
      id: "key",
      disabled: this.props.encryptData.disabled,
      value: this.props.encryptData.key,
      refBind: react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef(),
      placeholder: this.props.encryptData.type === 'caesar' ? "Press 1-25 digits only" : "Key",
      events: ['change', 'input'],
      onChange: e => {
        this.props.__SET_ENCRYPT_DATA({
          type: 'key',
          value: this.__generateValue(e.target.value)
        });
      },
      onInput: () => this.props.__SET_ENCRYPT_DATA({
        type: 'warning',
        value: false
      }),
      size: "md",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 25
      }
    })), __jsx("span", {
      onClick: () => this.props.__CHANGE_STATUS_MODAL(),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["265333361", [!this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 100 : 0]]]) + " " + `show-modal-icon ${!this.props.isShowModal ? 'disable-modal' : ''}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }, __jsx(components_Icons_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "modal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 25
      }
    }))), __jsx(components_Messages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "265333361",
      dynamic: [!this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 100 : 0],
      __self: this
    }, `.chat-messages .select-bar .disable-modal svg{opacity:0.3;-webkit-filter:blur(1px);filter:blur(1px);}.chat-messages .select-bar .show-modal-icon{height:100%;width:61px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-left:1px solid rgb(227,222,222);cursor:pointer;}.chat-messages .select-bar .input-wrap{height:100%;}.chat-messages .select-bar .input-wrap input{margin-bottom:0;height:100%;background-color:#fff;border-left:1px solid rgb(227,222,222) !important;border-top:0;border-right:0;}.chat-messages .select-bar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:41.8px;border-bottom:1px solid rgb(227,222,222);}.chat-messages .select-bar .lnr-menu{font-size:26px;padding-left:10px;cursor:pointer;}.chat-messages .select-bar .warning-wrap{box-shadow:0 0 0 0 rgba(0,0,0,1);-webkit-animation:pulse 1.5s infinite;animation:pulse 1.5s infinite;}@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 rgba(214,20,20,0.7);}70%{box-shadow:0 0 0 4px rgba(182,13,13,0);}100%{box-shadow:0 0 0 0 rgba(0,0,0,0);}}@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(214,20,20,0.7);}70%{box-shadow:0 0 0 4px rgba(182,13,13,0);}100%{box-shadow:0 0 0 0 rgba(0,0,0,0);}}.chat-messages{width:70%;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);}.d-none_sm{display:none;}.new-mobile-msg{position:relative;}.new-mobile-msg:after{content:"";position:absolute;top:0px;right:-3px;width:10px;height:10px;background:red;border-radius:50%;}@media screen and (max-width:767px){.d-none_sm{display:block;}.chat-messages{opacity:${!this.props.mobileUsersListOpen ? 1 : 0};-webkit-transition:width .2s;transition:width .2s;overflow:hidden;width:${!this.props.mobileUsersListOpen ? 100 : 0}%;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcQ2hhdC1NZXNzYWdlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0dtQyxBQUdxQyxBQUlBLEFBU0EsQUFHSSxBQVFILEFBTUUsQUFLcUIsQUFLUyxBQUdDLEFBR1QsQUFJM0IsQUFJRyxBQUdLLEFBR1AsQUFXTyxBQUd1QixVQXZCNkQsQ0FVcEYsQ0E1REQsQUFJTixBQVNmLENBeUNBLENBaUJJLENBekNrQixDQWROLEVBeUNoQixLQXBEaUIsS0FZUyxDQTRDZCxJQTlCTyxBQUllLEFBVzlCLElBZ0JXLEFBWWMsRUFsQ3pCLEFBR0EsU0FYSixBQStCZSxFQTdDeUMsSUFqQnhELEtBK0RnQixZQUNHLEdBekNJLFlBMENELENBU0UsVUFyRUQsR0FhTixDQWlCakIsRUF3QzRDLENBVDVDLE1BaEJBLEdBL0JtQixlQUNuQixXQXdESSw0QkFwRGMsY0FDNkIsU0FuQnBCLGdDQW9CM0IsbUVBbkI2Qyx1Q0FDMUIsZUFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcQVNhaGFrXFxkYXNlclxcbmV4dFxcQ3J5cHRvR3JhcGh5XFxjb21wb25lbnRzXFxDaGF0LU1lc3NhZ2VzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBVSV9FTEVNRU5UUyBmcm9tICdjb21wb25lbnRzL3NoYXJlZC9VSSc7XHJcbmltcG9ydCBJY29uIGZyb20gJ2NvbXBvbmVudHMvSWNvbnMvaWNvbic7XHJcbmltcG9ydCBNZXNzYWdlcyBmcm9tIFwiY29tcG9uZW50cy9NZXNzYWdlc1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gICAgX19DSEFOR0VfU1RBVFVTX01PREFMLFxyXG4gICAgX19TRVRfRU5DUllQVF9EQVRBLFxyXG4gICAgX19DSEFOR0VfTU9CSUxFX0xJU1RfT1BFTixcclxufSBmcm9tICdzdG9yZS9hY3Rpb25zJztcclxuXHJcblxyXG5jbGFzcyBDaGF0TWVzc2FnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2VuY3J5cHREYXRhID0gW1xyXG4gICAgICAgICAgICB7dmFsdWU6ICdzdWJzdGl0dXRpb24nLCBuYW1lOiAnU3Vic3RpdHV0aW9uJ30sXHJcbiAgICAgICAgICAgIHt2YWx1ZTogJ3ZpZ2VuZXJlJywgbmFtZTogJ1ZpZ2VuZXJlJ30sXHJcbiAgICAgICAgICAgIHt2YWx1ZTogJ2NhZXNhcicsIG5hbWU6ICdDYWVzYXInfSxcclxuICAgICAgICAgICAge3ZhbHVlOiAncGxheWZhaXInLCBuYW1lOiAnUGxheWZhaXInfSxcclxuICAgICAgICAgICAge3ZhbHVlOiAndmVybmFtJywgbmFtZTogJ1Zlcm5hbSd9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5fX3NlbGVjdEVuY3J5cHQgICAgPSB0aGlzLl9fc2VsZWN0RW5jcnlwdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX19nZW5lcmF0ZVZhbHVlICAgID0gdGhpcy5fX2dlbmVyYXRlVmFsdWUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XHJcbiAgICAgICAgaWYgKHByZXZQcm9wcy5lbmNyeXB0RGF0YS50eXBlICE9PSB0aGlzLnByb3BzLmVuY3J5cHREYXRhLnR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZW5jcnlwdERhdGEudHlwZSA9PT0gJ3N1YnN0aXR1dGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuX19TRVRfRU5DUllQVF9EQVRBKFt7dHlwZTogJ2tleScsIHZhbHVlOiAnJ30sIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LCB7dHlwZTogJ2Rpc2FibGVkJywgdmFsdWU6IHRydWV9XSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5lbmNyeXB0RGF0YS50eXBlID09PSAndmVybmFtJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5fX1NFVF9FTkNSWVBUX0RBVEEoW3t0eXBlOiAna2V5JywgdmFsdWU6ICcnfSwge3R5cGU6ICd3YXJuaW5nJywgdmFsdWU6IGZhbHNlfSwge3R5cGU6ICdkaXNhYmxlZCcsIHZhbHVlOiB0cnVlfV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy5lbmNyeXB0RGF0YS50eXBlID09PSAnY2Flc2FyJyA/IDMgOiAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuX19TRVRfRU5DUllQVF9EQVRBKFt7dHlwZTogJ2tleScsIHZhbHVlOiB2YWx1ZX0sIHt0eXBlOiAnd2FybmluZycsIHZhbHVlOiBmYWxzZX0sIHt0eXBlOiAnZGlzYWJsZWQnLCB2YWx1ZTogZmFsc2V9XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuX19TRVRfRU5DUllQVF9EQVRBKHt0eXBlOiAndHlwZScsIHZhbHVlOiAnc3Vic3RpdHV0aW9uJ30pXHJcbiAgICB9XHJcblxyXG4gICAgX19nZW5lcmF0ZVZhbHVlICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuX19TRVRfRU5DUllQVF9EQVRBKHt0eXBlOiAna2V5JywgdmFsdWU6ICcnfSk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZW5jcnlwdERhdGEudHlwZSAgPT09ICdjYWVzYXInICYmIHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIF9fc2VsZWN0RW5jcnlwdCAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuX19TRVRfRU5DUllQVF9EQVRBKHt0eXBlOiAndHlwZScsIHZhbHVlOiBkYXRhfSlcclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LW1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1iYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BsbnIgbG5yLW1lbnUgZC1ub25lX3NtICR7dGhpcy5wcm9wcy5tb2JpbGVOb3RpZnlOZXdNc2cgPyAnbmV3LW1vYmlsZS1tc2cnIDogJyd9YH0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5fX0NIQU5HRV9NT0JJTEVfTElTVF9PUEVOKHRydWUpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVJX0VMRU1FTlRTLlNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RFbmNyeXB0PXt0aGlzLl9fc2VsZWN0RW5jcnlwdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2UgY2hvb3NlIGVuY3J5cHQgdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc3MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2UzZGVkZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhT3B0aW9ucz17dGhpcy5fZW5jcnlwdERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fSBjbGFzc05hbWU9e3RoaXMucHJvcHMuZW5jcnlwdERhdGEud2FybmluZyA/ICd3YXJuaW5nLXdyYXAnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VUlfRUxFTUVOVFMuSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cj17dGhpcy5wcm9wcy5lbmNyeXB0RGF0YS50eXBlID09PSAnY2Flc2FyJyA/IFt7bmFtZTogJ21pbicsIHZhbHVlOiAxfV0gOiBbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3RoaXMucHJvcHMuZW5jcnlwdERhdGEudHlwZSA9PT0gJ2NhZXNhcicgPyAnbnVtYmVyJyA6ICd0ZXh0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwia2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmVuY3J5cHREYXRhLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZW5jcnlwdERhdGEua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQmluZD17UmVhY3QuY3JlYXRlUmVmKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5lbmNyeXB0RGF0YS50eXBlICA9PT0gJ2NhZXNhcicgPyBcIlByZXNzIDEtMjUgZGlnaXRzIG9ubHlcIiA6IFwiS2V5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudHM9e1snY2hhbmdlJywgJ2lucHV0J119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHt0aGlzLnByb3BzLl9fU0VUX0VOQ1JZUFRfREFUQSh7dHlwZTogJ2tleScsIHZhbHVlOiB0aGlzLl9fZ2VuZXJhdGVWYWx1ZShlLnRhcmdldC52YWx1ZSl9KX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoKSA9PiB0aGlzLnByb3BzLl9fU0VUX0VOQ1JZUFRfREFUQSh7dHlwZTogJ3dhcm5pbmcnLCB2YWx1ZTogZmFsc2V9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgc2hvdy1tb2RhbC1pY29uICR7IXRoaXMucHJvcHMuaXNTaG93TW9kYWwgPyAnZGlzYWJsZS1tb2RhbCcgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLl9fQ0hBTkdFX1NUQVRVU19NT0RBTCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cIm1vZGFsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlcyAvPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAuY2hhdC1tZXNzYWdlcyAuc2VsZWN0LWJhciAuZGlzYWJsZS1tb2RhbCBzdmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigxcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hhdC1tZXNzYWdlcyAuc2VsZWN0LWJhciAuc2hvdy1tb2RhbC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDIyNywgMjIyLCAyMjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGF0LW1lc3NhZ2VzIC5zZWxlY3QtYmFyIC5pbnB1dC13cmFwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGF0LW1lc3NhZ2VzIC5zZWxlY3QtYmFyIC5pbnB1dC13cmFwIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDIyNywgMjIyLCAyMjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYXQtbWVzc2FnZXMgLnNlbGVjdC1iYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQxLjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjcsIDIyMiwgMjIyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYXQtbWVzc2FnZXMgLnNlbGVjdC1iYXIgLmxuci1tZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYXQtbWVzc2FnZXMgLnNlbGVjdC1iYXIgLndhcm5pbmctd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAxLjVzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjE0LCAyMCwgMjAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgNzAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDE4MiwgMTMsIDEzLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLDAsMCwwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hhdC1tZXNzYWdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmQtbm9uZV9zbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uZXctbW9iaWxlLW1zZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5ldy1tb2JpbGUtbXNnOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0zcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZC1ub25lX3NtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGF0LW1lc3NhZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICR7IXRoaXMucHJvcHMubW9iaWxlVXNlcnNMaXN0T3BlbiA/IDEgOiAwfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHshdGhpcy5wcm9wcy5tb2JpbGVVc2Vyc0xpc3RPcGVuID8gMTAwIDogMH0lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBpc1Nob3dNb2RhbDogc3RhdGUuY2hhdC5pc1Nob3dNb2RhbCxcclxuICAgIGVuY3J5cHREYXRhOiBzdGF0ZS5jaGF0LmVuY3J5cHREYXRhLFxyXG4gICAgbW9iaWxlVXNlcnNMaXN0T3Blbjogc3RhdGUuY2hhdC5tb2JpbGVVc2Vyc0xpc3RPcGVuLFxyXG4gICAgbW9iaWxlTm90aWZ5TmV3TXNnOiBzdGF0ZS5jaGF0Lm1vYmlsZU5vdGlmeU5ld01zZyxcclxufSk7XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIF9fQ0hBTkdFX1NUQVRVU19NT0RBTCxcclxuICAgIF9fU0VUX0VOQ1JZUFRfREFUQSxcclxuICAgIF9fQ0hBTkdFX01PQklMRV9MSVNUX09QRU4sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoQ2hhdE1lc3NhZ2VzKTsiXX0= */
/*@ sourceURL=C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Chat-Messages.jsx */`));
  }

}

const mapStateToProps = state => ({
  isShowModal: state.chat.isShowModal,
  encryptData: state.chat.encryptData,
  mobileUsersListOpen: state.chat.mobileUsersListOpen,
  mobileNotifyNewMsg: state.chat.mobileNotifyNewMsg
});

const mapDispatchToProps = {
  __CHANGE_STATUS_MODAL: store_actions__WEBPACK_IMPORTED_MODULE_6__["__CHANGE_STATUS_MODAL"],
  __SET_ENCRYPT_DATA: store_actions__WEBPACK_IMPORTED_MODULE_6__["__SET_ENCRYPT_DATA"],
  __CHANGE_MOBILE_LIST_OPEN: store_actions__WEBPACK_IMPORTED_MODULE_6__["__CHANGE_MOBILE_LIST_OPEN"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(ChatMessages));

/***/ }),

/***/ "./components/Chat-Users.jsx":
/*!***********************************!*\
  !*** ./components/Chat-Users.jsx ***!
  \***********************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_shared_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/shared/UI */ "./components/shared/UI/index.js");
/* harmony import */ var components_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Skeleton */ "./components/Skeleton/index.jsx");
/* harmony import */ var store_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store/saga */ "./store/saga/index.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store/actions */ "./store/actions/index.js");
/* harmony import */ var components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/shared/helpers/global-functions */ "./components/shared/helpers/global-functions.js");
/* harmony import */ var components_elements_NoChatUsers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/elements/NoChatUsers */ "./components/elements/NoChatUsers.jsx");
/* harmony import */ var components_elements_CommonRoom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/elements/CommonRoom */ "./components/elements/CommonRoom.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/shared/helpers/Bus */ "./components/shared/helpers/Bus.js");
/* harmony import */ var components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Chat-Users.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const EveryUser = props => {
  return __jsx("div", {
    onClick: () => props.goPrivateChat(props.id),
    className: `user-messages-container ${props.isActiveUser === props.id ? 'active-user' : ''} 
          ${props.dataMSG.letters.owner && props.dataMSG.letters.owner !== 'Me' && props.dataMSG.isSeen === false ? 'must-open-message' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(components_shared_UI__WEBPACK_IMPORTED_MODULE_4__["default"].UserImage, {
    firstName: props.dataMSG.fullName.split(' ')[0],
    lastName: props.dataMSG.fullName.split(' ')[1] || '',
    fill: props.dataMSG.color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "user-message-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "user-message-info_left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, props.dataMSG.fullName + (props.dataMSG.letters.owner && props.dataMSG.letters.owner !== 'Me' && props.dataMSG.isSeen === false ? ` ( ${props.dataMSG.countMessagesDelivered} )` : '')), props.dataMSG.isTyping === true ? __jsx("div", {
    className: "spinner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "bounce1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 27
    }
  }), __jsx("div", {
    className: "bounce2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 27
    }
  }), __jsx("div", {
    className: "bounce3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 27
    }
  })) : __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 23
    }
  }, props.dataMSG.letters && props.dataMSG.letters.message ? Object(components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_8__["__detectCryptIcon"])(props.dataMSG.letters) ? __jsx("img", {
    src: "./assets/images/key.png",
    alt: "iconKey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 31
    }
  }) : props.dataMSG.letters.message : 'No messages yet')), __jsx("div", {
    className: "user-message-info_right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, props.dataMSG.letters && props.dataMSG.letters.time ? moment__WEBPACK_IMPORTED_MODULE_3__(props.dataMSG.letters.time).fromNow() : ''))));
};

EveryUser.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  isActiveUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  dataMSG: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  loggedUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

class ChatUsers extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      commonRoom: false,
      startedNewChat: true
    };
    this.__moveToCommonRoom = this.__moveToCommonRoom.bind(this);
    this.__goPrivateChat = this.__goPrivateChat.bind(this);
    components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_12__["Bus"].subscribe('startChat', data => this.__startPrivateChat(data));
  }

  componentDidMount() {
    Object(store_saga__WEBPACK_IMPORTED_MODULE_6__["__GET_CHAT_USERS"])().next();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.usersList instanceof Array) {
      if (this.props.usersList.some(user => user.isSeen === false && user.isSender === false)) {
        this.props.__SEND_MOBILE_MESSAGE_NOTIFY(true);
      } else {
        this.props.__SEND_MOBILE_MESSAGE_NOTIFY(false);
      }
    }

    if (prevProps.usersList !== this.props.usersList) {
      this.props.__SET_ACTIVE_USER(this.props.activeUser.id ? this.props.activeUser : this.props.usersList[0]);
    }
  }

  componentWillUnmount() {
    components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_12__["Bus"].unsubscribe('startChat');

    Object(store_saga__WEBPACK_IMPORTED_MODULE_6__["__GET_CHAT_USERS"])({}).next();
  }

  __moveToCommonRoom() {
    this.setState({
      commonRoom: !this.state.commonRoom
    });
  }

  async __goPrivateChat(idUser) {
    this.props.__CHANGE_MOBILE_LIST_OPEN(false);

    this.setState({
      startedNewChat: false
    });
    await Object(store_saga__WEBPACK_IMPORTED_MODULE_6__["__GO_PRIVATE_CHAT"])(idUser, this.props.loggedUser.id).next();
    this.setState({
      startedNewChat: true
    });
  }

  async __startPrivateChat(data) {
    this.setState({
      startedNewChat: false
    });
    const _reverseArray = [_objectSpread({}, data), ...this.props.usersList];
    await Object(store_saga__WEBPACK_IMPORTED_MODULE_6__["__ADD_MESSAGE"])({
      my: {
        friendId: data.id,
        loggedUser: this.props.loggedUser,
        msgData: {
          time: null,
          message: ''
        }
      }
    }).next();

    Object(store_saga__WEBPACK_IMPORTED_MODULE_6__["__GET_CHAT_USERS"])(_reverseArray).next();

    this.props.__SET_ACTIVE_USER(data);

    this.__moveToCommonRoom();

    this.setState({
      startedNewChat: true
    });
  }

  render() {
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["756282593", [this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 'width' : '', this.props.mobileUsersListOpen ? 100 : 0]]]) + " " + "chat-users",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    }, __jsx("h4", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["756282593", [this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 'width' : '', this.props.mobileUsersListOpen ? 100 : 0]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }
    }, !this.state.commonRoom ? 'Your Messages' : __jsx("a", {
      onClick: this.__moveToCommonRoom,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["756282593", [this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 'width' : '', this.props.mobileUsersListOpen ? 100 : 0]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["756282593", [this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 'width' : '', this.props.mobileUsersListOpen ? 100 : 0]]]) + " " + "lnr lnr-chevron-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 58
      }
    }), " Back"), __jsx("span", {
      onClick: () => this.props.__CHANGE_MOBILE_LIST_OPEN(false),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["756282593", [this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 'width' : '', this.props.mobileUsersListOpen ? 100 : 0]]]) + " " + "lnr lnr-arrow-left d-none_sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["756282593", [this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 'width' : '', this.props.mobileUsersListOpen ? 100 : 0]]]) + " " + `chat-room-wrapper ${!this.state.startedNewChat ? 'until-load-allowing' : ''}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    }, !this.state.commonRoom ? __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["756282593", [this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 'width' : '', this.props.mobileUsersListOpen ? 100 : 0]]]) + " " + "users-messages-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 47
      }
    }, this.props.usersList === null ? new Array(8).fill('').map((_, i) => {
      return __jsx("div", {
        key: i + Math.random().toString(16).slice(2, 6),
        style: {
          opacity: (8 - i) * 0.09
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["756282593", [this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 'width' : '', this.props.mobileUsersListOpen ? 100 : 0]]]) + " " + "skeleton-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 32
        }
      }, __jsx(components_Skeleton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        width: "35px",
        height: "35px",
        margin: ['5px', '10px', '0px', '10px'],
        radius: "50%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 36
        }
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["756282593", [this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 'width' : '', this.props.mobileUsersListOpen ? 100 : 0]]]) + " " + "line-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 36
        }
      }, __jsx(components_Skeleton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        width: "100%",
        height: "12px",
        margin: ['5px', '0px', '10px', '0px'],
        radius: "0%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 40
        }
      }), __jsx(components_Skeleton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        width: "100%",
        height: "12px",
        margin: ['5px', '0px', '10px', '0px'],
        radius: "0%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 40
        }
      })));
    }) : this.props.usersList.length ? this.props.usersList.map(user => {
      var _this$props$activeUse, _this$props$loggedUse;

      return __jsx(EveryUser, {
        isActiveUser: (_this$props$activeUse = this.props.activeUser) === null || _this$props$activeUse === void 0 ? void 0 : _this$props$activeUse.id,
        loggedUser: (_this$props$loggedUse = this.props.loggedUser) === null || _this$props$loggedUse === void 0 ? void 0 : _this$props$loggedUse.id,
        id: user.id,
        dataMSG: user,
        key: user.id,
        goPrivateChat: this.__goPrivateChat,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 92
        }
      });
    }) : __jsx(components_elements_NoChatUsers__WEBPACK_IMPORTED_MODULE_9__["default"], {
      goToCommonRoom: () => this.__moveToCommonRoom,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 32
      }
    })) : __jsx(components_elements_CommonRoom__WEBPACK_IMPORTED_MODULE_10__["default"], {
      startedNewChat: this.state.startedNewChat,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 29
      }
    }), !this.state.commonRoom && this.props.usersList !== null && this.props.usersList.length ? __jsx(components_shared_UI__WEBPACK_IMPORTED_MODULE_4__["default"].Button, {
      background: "transparent",
      color: "#37415c",
      fontSize: 11,
      hover: "hover-from-transparent",
      type: "button",
      text: 'Common Room',
      width: 150,
      margin: ['20px', 'auto', '0', 'auto'],
      onClick: this.__moveToCommonRoom,
      size: "sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 25
      }
    }) : ''), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "756282593",
      dynamic: [this.props.mobileUsersListOpen ? 1 : 0, !this.props.mobileUsersListOpen ? 'width' : '', this.props.mobileUsersListOpen ? 100 : 0],
      __self: this
    }, `.until-load-allowing{pointer-events:none;}.skeleton-container{padding:10px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.skeleton-container .line-wrap{width:calc(100% - 70px);}.chat-users{width:30%;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);}.chat-users>h4{margin:0;padding:10px;border-bottom:1px solid #e3dede;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:41.5px;}.chat-users>h4>a>span{font-size:12px;}.chat-users>h4>a{cursor:pointer;color:#0000ffba;font-size:13px;}.users-messages-container .user-messages-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;border-bottom:1px solid #e3dede;-webkit-transition:.4s;transition:.4s;cursor:pointer;}.users-messages-container .user-messages-container.active-user{border-right:2px solid #1ab898;background-color:#eeeeee;}.users-messages-container .must-open-message{background-color:#eeeeee63;font-weight:900;}.users-messages-container .user-messages-container:hover{background-color:#eeeeee;}.user-messages-container .user-message-info{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:10px;width:calc(100% - 50px);-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.user-messages-container .user-message-info .user-message-info_left{width:calc(100% - 90px);}.user-messages-container .user-message-info .user-message-info_right{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;white-space:nowrap;}.user-messages-container .user-message-info .user-message-info_right>span{font-size:13px;}.user-messages-container .user-message-info .user-message-info_left h4{margin-top:2px;font-size:14px;margin-bottom:5px;}.user-messages-container .user-message-info .user-message-info_left p{margin:0;height:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;}.user-messages-container .user-message-info .user-message-info_left p>img{height:15px;}.chat-room-wrapper{height:calc(100% - 41.5px);}.chat-room-wrapper .users-messages-container{overflow-x:hidden;max-height:calc(100% - 60px);}.chat-room-wrapper .main-room-list{overflow-x:hidden;max-height:100%;}.chat-room-wrapper .main-room-list::-webkit-scrollbar,.chat-room-wrapper .users-messages-container::-webkit-scrollbar{width:0px;height:10px;}.chat-room-wrapper .main-room-list::-webkit-scrollbar-thumb,.chat-room-wrapper .users-messages-container::-webkit-scrollbar-thumb{background:transparent;}.chat-room-wrapper .main-room-list::-webkit-scrollbar-track,.chat-room-wrapper .users-messages-container::-webkit-scrollbar-track{background:transparent;}.d-none_sm{display:none;}.chat-users>h4 .lnr-arrow-left{font-size:26px;cursor:pointer;}@media screen and (max-width:767px){.d-none_sm{display:block;}.chat-users{opacity:${this.props.mobileUsersListOpen ? 1 : 0};-webkit-transition:${!this.props.mobileUsersListOpen ? 'width' : ''} .2s;transition:${!this.props.mobileUsersListOpen ? 'width' : ''} .2s;overflow:hidden;width:${this.props.mobileUsersListOpen ? 100 : 0}%;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcQ2hhdC1Vc2Vycy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa01tQyxBQUc2QyxBQUdMLEFBSVMsQUFHZCxBQUlELEFBUU0sQUFHQSxBQUtGLEFBUWtCLEFBSUosQUFJRixBQUdaLEFBTVcsQUFHTixBQUlILEFBR0EsQUFLTixBQVFHLEFBR2UsQUFHVCxBQUlBLEFBSVIsQUFLYSxBQUdBLEFBR1YsQUFHRSxBQUtHLEFBR3VCLFNBbkc1QixBQXdERCxDQTVEMEYsQUFrRjFGLEVBZGhCLENBeUJBLENBUUksQ0E1R2EsQUFtQmpCLEFBR29CLEFBcUNwQixBQUdtQixBQXlDQSxHQXRCYyxBQUliLEVBeEZwQixDQXVFb0IsQ0F4RGdCLEFBOEVwQyxDQUlBLEFBR0EsQ0E3RkEsQUFnREEsQ0FUQSxFQUpvQixBQXVDcEIsR0Fmc0IsQUF5Q3RCLENBakZtQixBQVlVLEdBbUQ3QixHQWpCMkIsQUEwQ3lCLE1BdkVwRCxHQWhCQSxDQTBEQSxDQWxCQSxNQW5EaUIsRUF1QmpCLElBa0N1QixPQWZBLE9BNUJBLEFBbUJGLEtBeUJGLE9BZm5CLEdBdkRBLEVBOEM0QixHQXlCNUIsZ0JBaEVBLEtBd0NrQyxhQWxDQSxLQWtHVixnQkFDb0Isa0JBckYzQixhQUNtQixLQXFGaEMsMkJBcEZlLGtCQW1CbkIsYUFsQ2tCLE9BZ0JDLE9BZm5CLFFBZ0JBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcQ2hhdC1Vc2Vycy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IFVJX0VMRU1FTlRTIGZyb20gXCJjb21wb25lbnRzL3NoYXJlZC9VSVwiO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnY29tcG9uZW50cy9Ta2VsZXRvbic7XHJcbmltcG9ydCB7XHJcbiAgICBfX0dFVF9DSEFUX1VTRVJTLFxyXG4gICAgX19BRERfTUVTU0FHRSxcclxuICAgIF9fR09fUFJJVkFURV9DSEFULFxyXG59IGZyb20gJ3N0b3JlL3NhZ2EnO1xyXG5pbXBvcnQge1xyXG4gICAgX19DSEFOR0VfTU9CSUxFX0xJU1RfT1BFTixcclxuICAgIF9fU0VUX0FDVElWRV9VU0VSLFxyXG4gICAgX19TRU5EX01PQklMRV9NRVNTQUdFX05PVElGWSxcclxufSBmcm9tICdzdG9yZS9hY3Rpb25zJztcclxuaW1wb3J0IHtcclxuICAgIF9fZGV0ZWN0Q3J5cHRJY29uXHJcbn0gZnJvbSAnY29tcG9uZW50cy9zaGFyZWQvaGVscGVycy9nbG9iYWwtZnVuY3Rpb25zJztcclxuaW1wb3J0IE5vQ2hhdFVzZXJzIGZyb20gJ2NvbXBvbmVudHMvZWxlbWVudHMvTm9DaGF0VXNlcnMnO1xyXG5pbXBvcnQgQ29tbW9uUm9vbSBmcm9tICdjb21wb25lbnRzL2VsZW1lbnRzL0NvbW1vblJvb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBCdXMgfSBmcm9tICdjb21wb25lbnRzL3NoYXJlZC9oZWxwZXJzL0J1cyc7XHJcblxyXG5jb25zdCBFdmVyeVVzZXIgPSBwcm9wcyA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5nb1ByaXZhdGVDaGF0KHByb3BzLmlkKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHVzZXItbWVzc2FnZXMtY29udGFpbmVyICR7cHJvcHMuaXNBY3RpdmVVc2VyID09PSBwcm9wcy5pZCA/ICdhY3RpdmUtdXNlcicgOiAnJ30gXHJcbiAgICAgICAgICAkeyBwcm9wcy5kYXRhTVNHLmxldHRlcnMub3duZXIgJiYgcHJvcHMuZGF0YU1TRy5sZXR0ZXJzLm93bmVyICE9PSAnTWUnICYmIHByb3BzLmRhdGFNU0cuaXNTZWVuID09PSBmYWxzZSA/ICdtdXN0LW9wZW4tbWVzc2FnZScgOiAnJ31gfT5cclxuICAgICAgICAgIDxVSV9FTEVNRU5UUy5Vc2VySW1hZ2VcclxuICAgICAgICAgICAgICBmaXJzdE5hbWU9e3Byb3BzLmRhdGFNU0cuZnVsbE5hbWUuc3BsaXQoJyAnKVswXX1cclxuICAgICAgICAgICAgICBsYXN0TmFtZT17cHJvcHMuZGF0YU1TRy5mdWxsTmFtZS5zcGxpdCgnICcpWzFdIHx8ICcnfVxyXG4gICAgICAgICAgICAgIGZpbGw9e3Byb3BzLmRhdGFNU0cuY29sb3J9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLW1lc3NhZ2UtaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1tZXNzYWdlLWluZm9fbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+e3Byb3BzLmRhdGFNU0cuZnVsbE5hbWUgKyAocHJvcHMuZGF0YU1TRy5sZXR0ZXJzLm93bmVyICYmIHByb3BzLmRhdGFNU0cubGV0dGVycy5vd25lciAhPT0gJ01lJyAmJiBwcm9wcy5kYXRhTVNHLmlzU2VlbiA9PT0gZmFsc2UgPyBgICggJHtwcm9wcy5kYXRhTVNHLmNvdW50TWVzc2FnZXNEZWxpdmVyZWR9IClgIDogJycpfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhTVNHLmlzVHlwaW5nID09PSB0cnVlID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGlubmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm91bmNlMSc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvdW5jZTInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3VuY2UzJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgIDxwPnsocHJvcHMuZGF0YU1TRy5sZXR0ZXJzICYmIHByb3BzLmRhdGFNU0cubGV0dGVycy5tZXNzYWdlKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX19kZXRlY3RDcnlwdEljb24ocHJvcHMuZGF0YU1TRy5sZXR0ZXJzKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2tleS5wbmdcIiBhbHQ9XCJpY29uS2V5XCIvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmRhdGFNU0cubGV0dGVycy5tZXNzYWdlIDogJ05vIG1lc3NhZ2VzIHlldCd9PC9wPn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItbWVzc2FnZS1pbmZvX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnsocHJvcHMuZGF0YU1TRy5sZXR0ZXJzICYmIHByb3BzLmRhdGFNU0cubGV0dGVycy50aW1lKSA/IG1vbWVudChwcm9wcy5kYXRhTVNHLmxldHRlcnMudGltZSkuZnJvbU5vdygpIDogJyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuRXZlcnlVc2VyLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaXNBY3RpdmVVc2VyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGF0YU1TRzogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGxvZ2dlZFVzZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5jbGFzcyBDaGF0VXNlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29tbW9uUm9vbTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0YXJ0ZWROZXdDaGF0OiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fX21vdmVUb0NvbW1vblJvb20gICAgICAgICAgPSB0aGlzLl9fbW92ZVRvQ29tbW9uUm9vbS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX19nb1ByaXZhdGVDaGF0ICAgICAgICAgICAgID0gdGhpcy5fX2dvUHJpdmF0ZUNoYXQuYmluZCh0aGlzKTtcclxuICAgICAgICBCdXMuc3Vic2NyaWJlKCdzdGFydENoYXQnLCAoZGF0YSkgPT4gdGhpcy5fX3N0YXJ0UHJpdmF0ZUNoYXQoZGF0YSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgX19HRVRfQ0hBVF9VU0VSUygpLm5leHQoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy51c2Vyc0xpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy51c2Vyc0xpc3Quc29tZSh1c2VyID0+ICh1c2VyLmlzU2VlbiA9PT0gZmFsc2UgJiYgdXNlci5pc1NlbmRlciA9PT0gZmFsc2UpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5fX1NFTkRfTU9CSUxFX01FU1NBR0VfTk9USUZZKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5fX1NFTkRfTU9CSUxFX01FU1NBR0VfTk9USUZZKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJldlByb3BzLnVzZXJzTGlzdCAhPT0gdGhpcy5wcm9wcy51c2Vyc0xpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5fX1NFVF9BQ1RJVkVfVVNFUih0aGlzLnByb3BzLmFjdGl2ZVVzZXIuaWQgPyB0aGlzLnByb3BzLmFjdGl2ZVVzZXIgOiB0aGlzLnByb3BzLnVzZXJzTGlzdFswXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgQnVzLnVuc3Vic2NyaWJlKCdzdGFydENoYXQnKTtcclxuICAgICAgICBfX0dFVF9DSEFUX1VTRVJTKHt9KS5uZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgX19tb3ZlVG9Db21tb25Sb29tICgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29tbW9uUm9vbTogIXRoaXMuc3RhdGUuY29tbW9uUm9vbVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgX19nb1ByaXZhdGVDaGF0IChpZFVzZXIpIHtcclxuICAgICAgICB0aGlzLnByb3BzLl9fQ0hBTkdFX01PQklMRV9MSVNUX09QRU4oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzdGFydGVkTmV3Q2hhdDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCBfX0dPX1BSSVZBVEVfQ0hBVChpZFVzZXIsIHRoaXMucHJvcHMubG9nZ2VkVXNlci5pZCkubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzdGFydGVkTmV3Q2hhdDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIF9fc3RhcnRQcml2YXRlQ2hhdCAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzdGFydGVkTmV3Q2hhdDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBfcmV2ZXJzZUFycmF5ID0gW1xyXG4gICAgICAgICAgICB7Li4uZGF0YX0sXHJcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMudXNlcnNMaXN0XHJcbiAgICAgICAgXTtcclxuICAgICAgICBhd2FpdCBfX0FERF9NRVNTQUdFKHtteToge1xyXG4gICAgICAgICAgICAgICAgZnJpZW5kSWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICBsb2dnZWRVc2VyOiB0aGlzLnByb3BzLmxvZ2dlZFVzZXIsXHJcbiAgICAgICAgICAgICAgICBtc2dEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH19KS5uZXh0KCk7XHJcbiAgICAgICAgX19HRVRfQ0hBVF9VU0VSUyhfcmV2ZXJzZUFycmF5KS5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5fX1NFVF9BQ1RJVkVfVVNFUihkYXRhKTtcclxuICAgICAgICB0aGlzLl9fbW92ZVRvQ29tbW9uUm9vbSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzdGFydGVkTmV3Q2hhdDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXVzZXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+eyF0aGlzLnN0YXRlLmNvbW1vblJvb20gP1xyXG4gICAgICAgICAgICAgICAgICAgICdZb3VyIE1lc3NhZ2VzJzpcclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLl9fbW92ZVRvQ29tbW9uUm9vbX0+PHNwYW4gY2xhc3NOYW1lPVwibG5yIGxuci1jaGV2cm9uLWxlZnRcIj48L3NwYW4+IEJhY2s8L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxuciBsbnItYXJyb3ctbGVmdCBkLW5vbmVfc21cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLl9fQ0hBTkdFX01PQklMRV9MSVNUX09QRU4oZmFsc2UpfT48L3NwYW4+PC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2hhdC1yb29tLXdyYXBwZXIgJHshdGhpcy5zdGF0ZS5zdGFydGVkTmV3Q2hhdCA/ICd1bnRpbC1sb2FkLWFsbG93aW5nJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5jb21tb25Sb29tID8gPGRpdiBjbGFzc05hbWU9XCJ1c2Vycy1tZXNzYWdlcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudXNlcnNMaXN0ID09PSBudWxsID8gbmV3IEFycmF5KDgpLmZpbGwoJycpLm1hcCgoXywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsZXRvbi1jb250YWluZXJcIiBrZXk9e2kgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyLCA2KX0gc3R5bGU9e3tvcGFjaXR5OiAoOCAtIGkpICogMC4wOX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjM1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXtbJzVweCcsICcxMHB4JyAsICcwcHgnLCAnMTBweCddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM9XCI1MCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNrZWxldG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49e1snNXB4JywgJzBweCcgLCAnMTBweCcsICcwcHgnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cz1cIjAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNrZWxldG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49e1snNXB4JywgJzBweCcgLCAnMTBweCcsICcwcHgnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cz1cIjAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTogdGhpcy5wcm9wcy51c2Vyc0xpc3QubGVuZ3RoID8gdGhpcy5wcm9wcy51c2Vyc0xpc3QubWFwKHVzZXIgPT4gPEV2ZXJ5VXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVVc2VyPXt0aGlzLnByb3BzLmFjdGl2ZVVzZXI/LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VkVXNlcj17dGhpcy5wcm9wcy5sb2dnZWRVc2VyPy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt1c2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1TRz17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dXNlci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvUHJpdmF0ZUNoYXQ9e3RoaXMuX19nb1ByaXZhdGVDaGF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiApIDogPE5vQ2hhdFVzZXJzIGdvVG9Db21tb25Sb29tPXsoKSA9PiB0aGlzLl9fbW92ZVRvQ29tbW9uUm9vbX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+OiA8Q29tbW9uUm9vbSBzdGFydGVkTmV3Q2hhdD17dGhpcy5zdGF0ZS5zdGFydGVkTmV3Q2hhdH0vPn1cclxuICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuY29tbW9uUm9vbSAmJiB0aGlzLnByb3BzLnVzZXJzTGlzdCAhPT0gbnVsbCAmJiB0aGlzLnByb3BzLnVzZXJzTGlzdC5sZW5ndGggP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VUlfRUxFTUVOVFMuQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMzc0MTVjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsxMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyPVwiaG92ZXItZnJvbS10cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9eydDb21tb24gUm9vbSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXtbJzIwcHgnLCAnYXV0bycsICcwJywgJ2F1dG8nXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX19tb3ZlVG9Db21tb25Sb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC51bnRpbC1sb2FkLWFsbG93aW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5za2VsZXRvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5za2VsZXRvbi1jb250YWluZXIgLmxpbmUtd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hhdC11c2VycyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYXQtdXNlcnMgPiBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2RlZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MS41cHg7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hhdC11c2VycyA+IGg0ID4gYSA+IHNwYW57IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAuY2hhdC11c2VycyA+IGg0ID4gYXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwZmZiYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudXNlcnMtbWVzc2FnZXMtY29udGFpbmVyIC51c2VyLW1lc3NhZ2VzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNkZWRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZXJzLW1lc3NhZ2VzLWNvbnRhaW5lciAudXNlci1tZXNzYWdlcy1jb250YWluZXIuYWN0aXZlLXVzZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMWFiODk4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudXNlcnMtbWVzc2FnZXMtY29udGFpbmVyIC5tdXN0LW9wZW4tbWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU2MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZXJzLW1lc3NhZ2VzLWNvbnRhaW5lciAudXNlci1tZXNzYWdlcy1jb250YWluZXI6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VyLW1lc3NhZ2VzLWNvbnRhaW5lciAudXNlci1tZXNzYWdlLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VyLW1lc3NhZ2VzLWNvbnRhaW5lciAudXNlci1tZXNzYWdlLWluZm8gLnVzZXItbWVzc2FnZS1pbmZvX2xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VyLW1lc3NhZ2VzLWNvbnRhaW5lciAudXNlci1tZXNzYWdlLWluZm8gLnVzZXItbWVzc2FnZS1pbmZvX3JpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudXNlci1tZXNzYWdlcy1jb250YWluZXIgLnVzZXItbWVzc2FnZS1pbmZvIC51c2VyLW1lc3NhZ2UtaW5mb19yaWdodCA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VyLW1lc3NhZ2VzLWNvbnRhaW5lciAudXNlci1tZXNzYWdlLWluZm8gLnVzZXItbWVzc2FnZS1pbmZvX2xlZnQgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudXNlci1tZXNzYWdlcy1jb250YWluZXIgLnVzZXItbWVzc2FnZS1pbmZvIC51c2VyLW1lc3NhZ2UtaW5mb19sZWZ0IHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZXItbWVzc2FnZXMtY29udGFpbmVyIC51c2VyLW1lc3NhZ2UtaW5mbyAudXNlci1tZXNzYWdlLWluZm9fbGVmdCBwID4gaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGF0LXJvb20td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDEuNXB4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYXQtcm9vbS13cmFwcGVyIC51c2Vycy1tZXNzYWdlcy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYXQtcm9vbS13cmFwcGVyIC5tYWluLXJvb20tbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYXQtcm9vbS13cmFwcGVyIC5tYWluLXJvb20tbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIsIC5jaGF0LXJvb20td3JhcHBlciAudXNlcnMtbWVzc2FnZXMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYXQtcm9vbS13cmFwcGVyIC5tYWluLXJvb20tbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsIC5jaGF0LXJvb20td3JhcHBlciAudXNlcnMtbWVzc2FnZXMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hhdC1yb29tLXdyYXBwZXIgLm1haW4tcm9vbS1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjaywgLmNoYXQtcm9vbS13cmFwcGVyIC51c2Vycy1tZXNzYWdlcy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5kLW5vbmVfc20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hhdC11c2VycyA+IGg0IC5sbnItYXJyb3ctbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZC1ub25lX3NtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGF0LXVzZXJzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICR7dGhpcy5wcm9wcy5tb2JpbGVVc2Vyc0xpc3RPcGVuID8gMSA6IDB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJHshdGhpcy5wcm9wcy5tb2JpbGVVc2Vyc0xpc3RPcGVuID8gJ3dpZHRoJzogJyd9IC4ycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHt0aGlzLnByb3BzLm1vYmlsZVVzZXJzTGlzdE9wZW4gPyAxMDAgOiAwfSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGxvZ2dlZFVzZXI6IHN0YXRlLmNoYXQubG9nZ2VkVXNlcixcclxuICAgIHVzZXJzTGlzdDogc3RhdGUuY2hhdC5teUNoYXRVc2VycyxcclxuICAgIGFjdGl2ZVVzZXI6IHN0YXRlLmNoYXQuYWN0aXZlVXNlcixcclxuICAgIG1vYmlsZVVzZXJzTGlzdE9wZW46IHN0YXRlLmNoYXQubW9iaWxlVXNlcnNMaXN0T3BlbixcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBfX1NFVF9BQ1RJVkVfVVNFUixcclxuICAgIF9fQ0hBTkdFX01PQklMRV9MSVNUX09QRU4sXHJcbiAgICBfX1NFTkRfTU9CSUxFX01FU1NBR0VfTk9USUZZLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKENoYXRVc2Vycyk7Il19 */
/*@ sourceURL=C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Chat-Users.jsx */`));
  }

}

const mapStateToProps = state => ({
  loggedUser: state.chat.loggedUser,
  usersList: state.chat.myChatUsers,
  activeUser: state.chat.activeUser,
  mobileUsersListOpen: state.chat.mobileUsersListOpen
});

const mapDispatchToProps = {
  __SET_ACTIVE_USER: store_actions__WEBPACK_IMPORTED_MODULE_7__["__SET_ACTIVE_USER"],
  __CHANGE_MOBILE_LIST_OPEN: store_actions__WEBPACK_IMPORTED_MODULE_7__["__CHANGE_MOBILE_LIST_OPEN"],
  __SEND_MOBILE_MESSAGE_NOTIFY: store_actions__WEBPACK_IMPORTED_MODULE_7__["__SEND_MOBILE_MESSAGE_NOTIFY"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(ChatUsers));

/***/ }),

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

/***/ "./components/Messages.jsx":
/*!*********************************!*\
  !*** ./components/Messages.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/saga */ "./store/saga/index.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/actions */ "./store/actions/index.js");
/* harmony import */ var components_elements_TextAreaMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/elements/TextAreaMessage */ "./components/elements/TextAreaMessage.jsx");
/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Skeleton */ "./components/Skeleton/index.jsx");
/* harmony import */ var components_elements_PrivateMessageContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/elements/PrivateMessageContent */ "./components/elements/PrivateMessageContent.jsx");
/* harmony import */ var components_shared_UI_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/shared/UI/Modal */ "./components/shared/UI/Modal.jsx");
/* harmony import */ var _shared_UI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/UI */ "./components/shared/UI/index.js");
/* harmony import */ var components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/shared/helpers/Bus */ "./components/shared/helpers/Bus.js");
/* harmony import */ var components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var libraries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! libraries */ "./libraries/index.js");
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Messages.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class Messages extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      startMessageNotify: '',
      skeletonLoading: true,
      noChatUser: false,
      activeUserData: {},
      showModal: false,
      beforeClose: false,
      sendMessage: '',
      modalData: {
        yourMessage: '',
        encryptText: '',
        warningMsg: ''
      }
    };
    this.__sendMessage = this.__sendMessage.bind(this);
    this.__isTyping = this.__isTyping.bind(this);
    this.__handleSuccess = this.__handleSuccess.bind(this);
    this.__closeModal = this.__closeModal.bind(this);
    this.__handleSubmitMessage = this.__handleSubmitMessage.bind(this);
    this.__updateStateContent = this.__updateStateContent.bind(this);
    this.__messagesHaveBeenDeleted = this.__messagesHaveBeenDeleted.bind(this);
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    var _prevProps$activeUser, _this$props$activeUse, _prevProps$activeUser2, _this$props$activeUse2, _prevProps$activeUser3, _this$props$activeUse4, _this$props$activeUse5;

    // Working when my chat list is empty
    if (!this.state.noChatUser && this.props.usersList && this.props.usersList.length === 0) {
      this.setState({
        noChatUser: true
      });
    } else if (this.state.noChatUser && this.props.usersList && this.props.usersList.length !== 0) {
      this.setState({
        noChatUser: false
      });
    }

    if (!((_prevProps$activeUser = prevProps.activeUser) === null || _prevProps$activeUser === void 0 ? void 0 : _prevProps$activeUser.id) && ((_this$props$activeUse = this.props.activeUser) === null || _this$props$activeUse === void 0 ? void 0 : _this$props$activeUse.id) && ((_prevProps$activeUser2 = prevProps.activeUser) === null || _prevProps$activeUser2 === void 0 ? void 0 : _prevProps$activeUser2.id) !== ((_this$props$activeUse2 = this.props.activeUser) === null || _this$props$activeUse2 === void 0 ? void 0 : _this$props$activeUse2.id)) {
      var _this$props$activeUse3;

      this.setState({
        startMessageNotify: '',
        skeletonLoading: true
      });
      const startTime = new Date().getTime();
      const genMessages = await Object(store_saga__WEBPACK_IMPORTED_MODULE_3__["__GET_ACTIVE_USERS_MESSAGES"])((_this$props$activeUse3 = this.props.activeUser) === null || _this$props$activeUse3 === void 0 ? void 0 : _this$props$activeUse3.id).next();
      const endTime = new Date().getTime();

      this.__updateStateContent(genMessages.value.letters[0].message, endTime, startTime);
    } else if (((_prevProps$activeUser3 = prevProps.activeUser) === null || _prevProps$activeUser3 === void 0 ? void 0 : _prevProps$activeUser3.id) !== ((_this$props$activeUse4 = this.props.activeUser) === null || _this$props$activeUse4 === void 0 ? void 0 : _this$props$activeUse4.id) && ((_this$props$activeUse5 = this.props.activeUser) === null || _this$props$activeUse5 === void 0 ? void 0 : _this$props$activeUse5.id)) {
      var _this$props$activeUse6;

      this.setState({
        startMessageNotify: '',
        skeletonLoading: true
      });
      const startTime = new Date().getTime();
      const genMessages = await Object(store_saga__WEBPACK_IMPORTED_MODULE_3__["__GET_ACTIVE_USERS_MESSAGES"])((_this$props$activeUse6 = this.props.activeUser) === null || _this$props$activeUse6 === void 0 ? void 0 : _this$props$activeUse6.id).next();
      const endTime = new Date().getTime();

      this.__updateStateContent(genMessages.value.letters[0].message, endTime, startTime);
    } else if (prevProps.messages.length === 1 && prevProps.messages[0].message === '' && this.props.messages.length === 1 && this.props.messages[0].message !== '') {
      this.setState({
        startMessageNotify: ''
      });
    }
  }

  __messagesHaveBeenDeleted() {
    this.setState({
      startMessageNotify: 'Send the first letter'
    });
  }

  __updateStateContent(message, endTime, startTime) {
    this.setState(_objectSpread({}, message === '' && {
      startMessageNotify: 'Send the first letter'
    }));

    if (endTime - startTime < 1000) {
      setTimeout(() => {
        this.setState({
          noChatUser: false,
          skeletonLoading: false
        });
      }, 1000);
    } else {
      this.setState({
        noChatUser: false,
        skeletonLoading: false
      });
    }
  }

  __isTyping(hint) {
    var _this$props$activeUse7;

    Object(store_saga__WEBPACK_IMPORTED_MODULE_3__["__IS_TYPING_TO_ACTIVE_USER"])(hint, (_this$props$activeUse7 = this.props.activeUser) === null || _this$props$activeUse7 === void 0 ? void 0 : _this$props$activeUse7.id, this.props.loggedUser.id).next();
  }

  __handleSuccess() {
    this.setState({
      beforeClose: true
    });
  }

  __closeModal() {
    this.setState({
      beforeClose: false,
      showModal: false
    }, () => {
      if (this.state.modalData.encryptText) this.__handleSubmitMessage(this.state.sendMessage, this.state.modalData.encryptText, this.state.modalData.decryptText);
    });
  }

  async __handleSubmitMessage(value, encryptedMsg, decryptMsg) {
    var _this$props$encryptDa, _this$props$activeUse8, _this$props$activeUse9;

    const isKey = value === 'crypt' && value === encryptedMsg && value === decryptMsg && isNaN(decryptMsg);
    const messageData = {
      time: new Date().getTime(),
      message: value,
      encryptedMsg: encryptedMsg,
      decryptedMsg: decryptMsg,
      key: isKey ? 'crypt' : (_this$props$encryptDa = this.props.encryptData) === null || _this$props$encryptDa === void 0 ? void 0 : _this$props$encryptDa.key,
      encryptType: isKey ? 'crypt' : this.props.encryptData.type
    };
    await Object(store_saga__WEBPACK_IMPORTED_MODULE_3__["__ADD_MESSAGE"])({
      friend: {
        friendId: (_this$props$activeUse8 = this.props.activeUser) === null || _this$props$activeUse8 === void 0 ? void 0 : _this$props$activeUse8.id,
        loggedUser: this.props.loggedUser,
        msgData: _objectSpread({}, messageData, {
          owner: this.props.loggedUser.id
        })
      },
      my: {
        friendId: (_this$props$activeUse9 = this.props.activeUser) === null || _this$props$activeUse9 === void 0 ? void 0 : _this$props$activeUse9.id,
        loggedUser: this.props.loggedUser,
        msgData: _objectSpread({}, messageData, {
          owner: 'Me'
        })
      }
    }).next();

    Object(store_saga__WEBPACK_IMPORTED_MODULE_3__["__GET_CHAT_USERS"])().next();

    this.setState({
      startMessageNotify: ''
    });
    components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_10__["Bus"].dispatch('messageSendingFinish');
  }

  __encryptCommon(value, key, type, callback = () => {}) {
    let sendMSG = {};

    switch (type) {
      case 'vigenere':
        const encryptedMsgV = libraries__WEBPACK_IMPORTED_MODULE_11__["Vigenere"].doCryptVigenere(false, value, key, msg => {
          callback(msg);

          this.props.__SET_ENCRYPT_DATA({
            type: 'warning',
            value: true
          });
        });
        return sendMSG = {
          encryptedMSG: encryptedMsgV,
          decryptedMSG: libraries__WEBPACK_IMPORTED_MODULE_11__["Vigenere"].doCryptVigenere(true, encryptedMsgV, key, msg => {
            callback(msg);

            this.props.__SET_ENCRYPT_DATA({
              type: 'warning',
              value: true
            });
          })
        };

      case 'substitution':
        const encryptedMsgS = Object(libraries__WEBPACK_IMPORTED_MODULE_11__["Substitution"])(value);
        return sendMSG = {
          encryptedMSG: encryptedMsgS.encrypt,
          decryptedMSG: encryptedMsgS.decrypt
        };

      case 'rsa':
        // Message
        const message = value; // Generate RSA keys

        const keys = libraries__WEBPACK_IMPORTED_MODULE_11__["RSA"].generate(key);
        const encoded_message = libraries__WEBPACK_IMPORTED_MODULE_11__["RSA"].encode(message);
        const encrypted_message = libraries__WEBPACK_IMPORTED_MODULE_11__["RSA"].encrypt(encoded_message, keys.n, keys.e);
        const decrypted_message = libraries__WEBPACK_IMPORTED_MODULE_11__["RSA"].decrypt(encrypted_message, keys.d, keys.n);
        const decoded_message = libraries__WEBPACK_IMPORTED_MODULE_11__["RSA"].decode(decrypted_message);
        return sendMSG = {
          encryptedMSG: encoded_message.toString(),
          decryptedMSG: decoded_message
        };

      case 'caesar':
        const encryptedMsgC = libraries__WEBPACK_IMPORTED_MODULE_11__["Caesar"].doCrypt(false, value, key, msg => {
          callback(msg);
        });
        return sendMSG = {
          encryptedMSG: encryptedMsgC,
          decryptedMSG: libraries__WEBPACK_IMPORTED_MODULE_11__["Caesar"].doCrypt(true, encryptedMsgC, key, msg => {
            callback(msg);
          })
        };

      case 'playfair':
        return sendMSG = {
          encryptedMSG: libraries__WEBPACK_IMPORTED_MODULE_11__["Playfair"].doCipher(value, key, msg => {
            callback(msg);
          }),
          decryptedMSG: libraries__WEBPACK_IMPORTED_MODULE_11__["Playfair"].deCodeCipher(value, key)
        };

      case 'vernam':
        let _keyE = '';
        const encryptedMsgVer = libraries__WEBPACK_IMPORTED_MODULE_11__["Vernam"].doEncrypt(value, _key => {
          _keyE = _key;

          this.props.__SET_ENCRYPT_DATA({
            type: 'key',
            value: _key
          });
        });
        return sendMSG = {
          encryptedMSG: encryptedMsgVer,
          decryptedMSG: libraries__WEBPACK_IMPORTED_MODULE_11__["Vernam"].doDecrypt(value, _keyE)
        };

      default:
        break;
    }
  }

  async __sendMessage(value, isKey) {
    if (isKey instanceof Object) {
      var _isKey$mainObj, _isKey$mainObj2, _this$props$activeUse10, _this$props$loggedUse;

      const encryptedMsg = this.__encryptCommon.call(this, value, (_isKey$mainObj = isKey.mainObj) === null || _isKey$mainObj === void 0 ? void 0 : _isKey$mainObj.key, (_isKey$mainObj2 = isKey.mainObj) === null || _isKey$mainObj2 === void 0 ? void 0 : _isKey$mainObj2.encryptType);

      await Object(store_saga__WEBPACK_IMPORTED_MODULE_3__["__EDIT_MESSAGE"])({
        value,
        e: encryptedMsg.encryptedMSG,
        d: encryptedMsg.decryptedMSG
      }, isKey === null || isKey === void 0 ? void 0 : isKey.index, {
        idUser: (_this$props$activeUse10 = this.props.activeUser) === null || _this$props$activeUse10 === void 0 ? void 0 : _this$props$activeUse10.id,
        myId: (_this$props$loggedUse = this.props.loggedUser) === null || _this$props$loggedUse === void 0 ? void 0 : _this$props$loggedUse.id
      }).next();
      components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_10__["Bus"].dispatch('endEditing');
      components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_10__["Bus"].dispatch('messageSendingFinish');
      return;
    } else if (isKey) {
      this.__handleSubmitMessage('crypt', 'crypt', 'crypt');

      return;
    }

    let warning = '';
    this.setState({
      sendMessage: value
    }, () => {
      var _this$props$encryptDa2;

      const encryptMsg = this.__encryptCommon.call(this, value, (_this$props$encryptDa2 = this.props.encryptData) === null || _this$props$encryptDa2 === void 0 ? void 0 : _this$props$encryptDa2.key, this.props.encryptData.type, msg => {
        warning = msg;
      });

      if (this.props.isShowModal) {
        this.setState({
          modalData: _objectSpread({
            yourMessage: value
          }, warning && {
            warningMsg: warning
          }, {}, encryptMsg.encryptedMSG && {
            encryptText: encryptMsg.encryptedMSG
          }, {}, encryptMsg.decryptedMSG && {
            decryptText: encryptMsg.decryptedMSG
          }),
          showModal: true
        });
      } else if (encryptMsg.encryptedMSG && encryptMsg.decryptedMSG) this.__handleSubmitMessage(value, encryptMsg.encryptedMSG, encryptMsg.decryptedMSG);
    });
  }

  render() {
    var _this$props$loggedUse2;

    return __jsx("div", {
      className: "jsx-610849184" + " " + `message-content-right 
                ${this.state.skeletonLoading ? 'skeleton-loading-content' : ''} 
                ${!this.state.noChatUser ? 'hidden-overlay' : ''} 
                ${this.state.startMessageNotify ? 'empty-message-content' : ''}
                ${this.state.noChatUser ? 'no-chat-user' : ''}
                `,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 13
      }
    }, this.state.skeletonLoading && !this.state.noChatUser ? new Array(6).fill('').map((_, i) => {
      return __jsx("div", {
        key: i + Math.random().toString(16).slice(2, 6),
        style: {
          opacity: (6 - i) * 0.10
        },
        className: "jsx-610849184" + " " + `skeleton-container-messages ${i % 2 !== 0 ? 'odd-container-skeleton' : ''}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 33
        }
      }, __jsx(_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        width: "35px",
        height: "35px",
        margin: ['5px', '10px', '0px', '10px'],
        radius: "50%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 37
        }
      }), __jsx("div", {
        className: "jsx-610849184" + " " + "line-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 37
        }
      }, __jsx(_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        width: "55%",
        height: "52px",
        margin: ['5px', '0px', '0px', i % 2 !== 0 ? 'auto' : '0px'],
        radius: "0%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 41
        }
      }), i % 2 !== 0 ? __jsx(_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        width: "55%",
        height: "52px",
        margin: ['5px', '0px', '0px', 'auto'],
        radius: "0%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 45
        }
      }) : ''));
    }) : this.state.startMessageNotify ? __jsx("div", {
      className: "jsx-610849184" + " " + "send-first-message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 55
      }
    }, this.state.startMessageNotify) : !this.state.noChatUser && __jsx(components_elements_PrivateMessageContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      messagesHaveBeenDeleted: this.__messagesHaveBeenDeleted,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 21
      }
    }), !this.state.skeletonLoading && __jsx(components_elements_TextAreaMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      activeUser: this.props.activeUser,
      loggedUserId: (_this$props$loggedUse2 = this.props.loggedUser) === null || _this$props$loggedUse2 === void 0 ? void 0 : _this$props$loggedUse2.id,
      isTyping: this.__isTyping,
      sendMessage: this.__sendMessage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 49
      }
    }), __jsx(components_shared_UI_Modal__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
      show: this.state.showModal,
      beforeClose: this.state.beforeClose,
      close: this.__closeModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-610849184" + " " + "scroll-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 21
      }
    }, __jsx("h2", {
      className: "jsx-610849184",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 25
      }
    }, "Please confirm message"), __jsx("h4", {
      className: "jsx-610849184",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 25
      }
    }, "Your included text"), __jsx("p", {
      className: "jsx-610849184" + " " + "message-p",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 25
      }
    }, this.state.modalData.yourMessage), __jsx("h4", {
      className: "jsx-610849184",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 25
      }
    }, "Encrypted text"), this.state.modalData.warningMsg ? __jsx("p", {
      className: "jsx-610849184" + " " + "warning-message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 60
      }
    }, this.state.modalData.warningMsg) : __jsx("p", {
      className: "jsx-610849184" + " " + "message-p",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 29
      }
    }, this.state.modalData.encryptText)), __jsx(_shared_UI__WEBPACK_IMPORTED_MODULE_9__["default"].Button, {
      background: "#37415c",
      color: "#fff",
      fontSize: 11,
      type: "button",
      text: 'Send',
      width: 100,
      margin: ['20px', '0', '0', 'auto'],
      onClick: this.__handleSuccess,
      size: "sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 21
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "610849184",
      __self: this
    }, ".scroll-content.jsx-610849184{max-height:70vh;overflow-x:hidden;}.message-p.jsx-610849184{word-break:break-all;}.warning-message.jsx-610849184{color:#ffa100;}.skeleton-container-messages.jsx-610849184 .line-wrap.jsx-610849184{width:calc(100% - 70px);margin-bottom:10px;}.odd-container-skeleton.jsx-610849184{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.skeleton-container-messages.jsx-610849184{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.message-content-right.hidden-overlay.jsx-610849184{overflow:hidden;}.message-content-right.skeleton-loading-content.jsx-610849184{overflow:hidden;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.message-content-right.jsx-610849184{height:calc(100% - 42px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.empty-message-content.jsx-610849184{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.send-first-message.jsx-610849184{text-align:center;font-size:20px;margin-bottom:16px;}.no-chat-user.jsx-610849184{background-image:url('./assets/images/nochat.png');background-position:center;background-repeat:no-repeat;opacity:.2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcTWVzc2FnZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlWNkIsQUFHeUMsQUFJSyxBQUdQLEFBR1UsQUFJRyxBQUdkLEFBR0csQUFHQSxBQUlTLEFBTUEsQUFHUCxBQUtpQyxjQWpDdkQsRUFQc0IsQUFvQnRCLEFBRytCLEVBYVosR0FoQ25CLEdBTXVCLENBaUJOLFFBVU0sQ0FwQ3ZCLFNBVUEsUUE4QitCLENBSC9CLHNCQXJCQSxJQXlCZ0MsZUE1QmhDLElBbUJBLEVBTDBCLE9BZVgsV0FDZixJQXBCQSx3REFLa0MsbUhBQ2xDIiwiZmlsZSI6IkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcTWVzc2FnZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICAgIF9fR0VUX0FDVElWRV9VU0VSU19NRVNTQUdFUyxcclxuICAgIF9fQUREX01FU1NBR0UsXHJcbiAgICBfX0dFVF9DSEFUX1VTRVJTLFxyXG4gICAgX19JU19UWVBJTkdfVE9fQUNUSVZFX1VTRVIsXHJcbiAgICBfX0VESVRfTUVTU0FHRSxcclxufSBmcm9tICdzdG9yZS9zYWdhJztcclxuaW1wb3J0IHtcclxuICAgIF9fU0VUX0VOQ1JZUFRfREFUQSxcclxufSBmcm9tICdzdG9yZS9hY3Rpb25zJztcclxuaW1wb3J0IFRleHRBcmVhTWVzc2FnZSBmcm9tICdjb21wb25lbnRzL2VsZW1lbnRzL1RleHRBcmVhTWVzc2FnZSc7XHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tIFwiLi9Ta2VsZXRvblwiO1xyXG5pbXBvcnQgUHJpdmF0ZU1lc3NhZ2VDb250ZW50IGZyb20gXCJjb21wb25lbnRzL2VsZW1lbnRzL1ByaXZhdGVNZXNzYWdlQ29udGVudFwiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2NvbXBvbmVudHMvc2hhcmVkL1VJL01vZGFsJztcclxuaW1wb3J0IFVJX0VMRU1FTlRTIGZyb20gXCIuL3NoYXJlZC9VSVwiO1xyXG5pbXBvcnQgeyBCdXMgfSBmcm9tIFwiY29tcG9uZW50cy9zaGFyZWQvaGVscGVycy9CdXNcIjtcclxuaW1wb3J0IHtcclxuICAgIFZpZ2VuZXJlLFxyXG4gICAgUlNBLFxyXG4gICAgQ2Flc2FyLFxyXG4gICAgUGxheWZhaXIsXHJcbiAgICBWZXJuYW0sXHJcbiAgICBTdWJzdGl0dXRpb24sXHJcbn0gZnJvbSAnbGlicmFyaWVzJztcclxuXHJcblxyXG5jbGFzcyBNZXNzYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3RhcnRNZXNzYWdlTm90aWZ5OiAnJyxcclxuICAgICAgICAgICAgc2tlbGV0b25Mb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBub0NoYXRVc2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgYWN0aXZlVXNlckRhdGE6IHt9LFxyXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBiZWZvcmVDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlOiAnJyxcclxuICAgICAgICAgICAgbW9kYWxEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB5b3VyTWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgICAgICBlbmNyeXB0VGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nTXNnOiAnJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fX3NlbmRNZXNzYWdlICAgICAgICAgICAgICA9IHRoaXMuX19zZW5kTWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX19pc1R5cGluZyAgICAgICAgICAgICAgICAgPSB0aGlzLl9faXNUeXBpbmcuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9faGFuZGxlU3VjY2VzcyAgICAgICAgICAgID0gdGhpcy5fX2hhbmRsZVN1Y2Nlc3MuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fY2xvc2VNb2RhbCAgICAgICAgICAgICAgID0gdGhpcy5fX2Nsb3NlTW9kYWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9faGFuZGxlU3VibWl0TWVzc2FnZSAgICAgID0gdGhpcy5fX2hhbmRsZVN1Ym1pdE1lc3NhZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fdXBkYXRlU3RhdGVDb250ZW50ICAgICAgID0gdGhpcy5fX3VwZGF0ZVN0YXRlQ29udGVudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX19tZXNzYWdlc0hhdmVCZWVuRGVsZXRlZCAgPSB0aGlzLl9fbWVzc2FnZXNIYXZlQmVlbkRlbGV0ZWQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XHJcbiAgICAgICAgLy8gV29ya2luZyB3aGVuIG15IGNoYXQgbGlzdCBpcyBlbXB0eVxyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5ub0NoYXRVc2VyICYmIHRoaXMucHJvcHMudXNlcnNMaXN0ICYmIHRoaXMucHJvcHMudXNlcnNMaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG5vQ2hhdFVzZXI6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUubm9DaGF0VXNlciAmJiB0aGlzLnByb3BzLnVzZXJzTGlzdCAmJiB0aGlzLnByb3BzLnVzZXJzTGlzdC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBub0NoYXRVc2VyOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXByZXZQcm9wcy5hY3RpdmVVc2VyPy5pZCAmJiB0aGlzLnByb3BzLmFjdGl2ZVVzZXI/LmlkICYmIHByZXZQcm9wcy5hY3RpdmVVc2VyPy5pZCAhPT0gdGhpcy5wcm9wcy5hY3RpdmVVc2VyPy5pZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0TWVzc2FnZU5vdGlmeTogJycsXHJcbiAgICAgICAgICAgICAgICBza2VsZXRvbkxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBnZW5NZXNzYWdlcyA9IGF3YWl0IF9fR0VUX0FDVElWRV9VU0VSU19NRVNTQUdFUyh0aGlzLnByb3BzLmFjdGl2ZVVzZXI/LmlkKS5uZXh0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5fX3VwZGF0ZVN0YXRlQ29udGVudChnZW5NZXNzYWdlcy52YWx1ZS5sZXR0ZXJzWzBdLm1lc3NhZ2UsIGVuZFRpbWUsIHN0YXJ0VGltZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2UHJvcHMuYWN0aXZlVXNlcj8uaWQgIT09IHRoaXMucHJvcHMuYWN0aXZlVXNlcj8uaWQgJiYgdGhpcy5wcm9wcy5hY3RpdmVVc2VyPy5pZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0TWVzc2FnZU5vdGlmeTogJycsXHJcbiAgICAgICAgICAgICAgICBza2VsZXRvbkxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBnZW5NZXNzYWdlcyA9IGF3YWl0IF9fR0VUX0FDVElWRV9VU0VSU19NRVNTQUdFUyh0aGlzLnByb3BzLmFjdGl2ZVVzZXI/LmlkKS5uZXh0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX191cGRhdGVTdGF0ZUNvbnRlbnQoZ2VuTWVzc2FnZXMudmFsdWUubGV0dGVyc1swXS5tZXNzYWdlLCBlbmRUaW1lLCBzdGFydFRpbWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJldlByb3BzLm1lc3NhZ2VzLmxlbmd0aCA9PT0gMSAmJiBwcmV2UHJvcHMubWVzc2FnZXNbMF0ubWVzc2FnZSA9PT0gJycgJiYgdGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGggPT09IDEgJiYgdGhpcy5wcm9wcy5tZXNzYWdlc1swXS5tZXNzYWdlICE9PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0TWVzc2FnZU5vdGlmeTogJycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfX21lc3NhZ2VzSGF2ZUJlZW5EZWxldGVkICgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc3RhcnRNZXNzYWdlTm90aWZ5OiAnU2VuZCB0aGUgZmlyc3QgbGV0dGVyJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX191cGRhdGVTdGF0ZUNvbnRlbnQgKG1lc3NhZ2UsIGVuZFRpbWUsIHN0YXJ0VGltZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey8vSWYgdGhlcmUgYXJlbid0IGFueSBtZXNzYWdlc1xyXG4gICAgICAgICAgICAuLi4obWVzc2FnZSA9PT0gJycgJiYge3N0YXJ0TWVzc2FnZU5vdGlmeTogJ1NlbmQgdGhlIGZpcnN0IGxldHRlcid9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoZW5kVGltZSAtIHN0YXJ0VGltZSA8IDEwMDApIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBub0NoYXRVc2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBza2VsZXRvbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG5vQ2hhdFVzZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2tlbGV0b25Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX19pc1R5cGluZyAoaGludCkge1xyXG4gICAgICAgIF9fSVNfVFlQSU5HX1RPX0FDVElWRV9VU0VSKGhpbnQsIHRoaXMucHJvcHMuYWN0aXZlVXNlcj8uaWQsIHRoaXMucHJvcHMubG9nZ2VkVXNlci5pZCkubmV4dCgpXHJcbiAgICB9XHJcblxyXG4gICAgX19oYW5kbGVTdWNjZXNzICgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYmVmb3JlQ2xvc2U6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfX2Nsb3NlTW9kYWwgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBiZWZvcmVDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2VcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1vZGFsRGF0YS5lbmNyeXB0VGV4dCkgdGhpcy5fX2hhbmRsZVN1Ym1pdE1lc3NhZ2UodGhpcy5zdGF0ZS5zZW5kTWVzc2FnZSwgdGhpcy5zdGF0ZS5tb2RhbERhdGEuZW5jcnlwdFRleHQsIHRoaXMuc3RhdGUubW9kYWxEYXRhLmRlY3J5cHRUZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBfX2hhbmRsZVN1Ym1pdE1lc3NhZ2UgKHZhbHVlLCBlbmNyeXB0ZWRNc2csIGRlY3J5cHRNc2cpIHtcclxuICAgICAgICBjb25zdCBpc0tleSA9ICh2YWx1ZSA9PT0gJ2NyeXB0JyAmJiB2YWx1ZSA9PT0gZW5jcnlwdGVkTXNnICYmIHZhbHVlID09PSBkZWNyeXB0TXNnICYmIChpc05hTihkZWNyeXB0TXNnKSkpO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VEYXRhID0ge1xyXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgbWVzc2FnZTogdmFsdWUsXHJcbiAgICAgICAgICAgIGVuY3J5cHRlZE1zZzogZW5jcnlwdGVkTXNnLFxyXG4gICAgICAgICAgICBkZWNyeXB0ZWRNc2c6IGRlY3J5cHRNc2csXHJcbiAgICAgICAgICAgIGtleTogaXNLZXkgPyAnY3J5cHQnIDogdGhpcy5wcm9wcy5lbmNyeXB0RGF0YT8ua2V5LFxyXG4gICAgICAgICAgICBlbmNyeXB0VHlwZTogaXNLZXkgPyAnY3J5cHQnIDogdGhpcy5wcm9wcy5lbmNyeXB0RGF0YS50eXBlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXdhaXQgX19BRERfTUVTU0FHRSh7XHJcbiAgICAgICAgICAgIGZyaWVuZDoge1xyXG4gICAgICAgICAgICAgICAgZnJpZW5kSWQ6IHRoaXMucHJvcHMuYWN0aXZlVXNlcj8uaWQsXHJcbiAgICAgICAgICAgICAgICBsb2dnZWRVc2VyOiB0aGlzLnByb3BzLmxvZ2dlZFVzZXIsXHJcbiAgICAgICAgICAgICAgICBtc2dEYXRhOiB7Li4ubWVzc2FnZURhdGEsIG93bmVyOiB0aGlzLnByb3BzLmxvZ2dlZFVzZXIuaWR9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG15OiB7XHJcbiAgICAgICAgICAgICAgICBmcmllbmRJZDogdGhpcy5wcm9wcy5hY3RpdmVVc2VyPy5pZCxcclxuICAgICAgICAgICAgICAgIGxvZ2dlZFVzZXI6IHRoaXMucHJvcHMubG9nZ2VkVXNlcixcclxuICAgICAgICAgICAgICAgIG1zZ0RhdGE6IHsuLi5tZXNzYWdlRGF0YSwgb3duZXI6ICdNZSd9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5uZXh0KCk7XHJcblxyXG4gICAgICAgIF9fR0VUX0NIQVRfVVNFUlMoKS5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN0YXJ0TWVzc2FnZU5vdGlmeTogJydcclxuICAgICAgICB9KTtcclxuICAgICAgICBCdXMuZGlzcGF0Y2goJ21lc3NhZ2VTZW5kaW5nRmluaXNoJyk7XHJcbiAgICB9XHJcblxyXG4gICAgX19lbmNyeXB0Q29tbW9uICh2YWx1ZSwga2V5LCB0eXBlLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XHJcbiAgICAgICAgbGV0IHNlbmRNU0cgPSB7fTtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAndmlnZW5lcmUnOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5jcnlwdGVkTXNnViA9IFZpZ2VuZXJlLmRvQ3J5cHRWaWdlbmVyZShmYWxzZSwgdmFsdWUsIGtleSwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5fX1NFVF9FTkNSWVBUX0RBVEEoe3R5cGU6ICd3YXJuaW5nJywgdmFsdWU6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbmRNU0cgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5jcnlwdGVkTVNHOiBlbmNyeXB0ZWRNc2dWLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZE1TRzogVmlnZW5lcmUuZG9DcnlwdFZpZ2VuZXJlKHRydWUsIGVuY3J5cHRlZE1zZ1YsIGtleSwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLl9fU0VUX0VOQ1JZUFRfREFUQSh7dHlwZTogJ3dhcm5pbmcnLCB2YWx1ZTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAnc3Vic3RpdHV0aW9uJyA6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmNyeXB0ZWRNc2dTID0gU3Vic3RpdHV0aW9uKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kTVNHID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZE1TRzogZW5jcnlwdGVkTXNnUy5lbmNyeXB0LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZE1TRzogZW5jcnlwdGVkTXNnUy5kZWNyeXB0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlICdyc2EnIDpcclxuICAgICAgICAgICAgICAgIC8vIE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBSU0Ega2V5c1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IFJTQS5nZW5lcmF0ZShrZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuY29kZWRfbWVzc2FnZSA9IFJTQS5lbmNvZGUobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmNyeXB0ZWRfbWVzc2FnZSA9IFJTQS5lbmNyeXB0KGVuY29kZWRfbWVzc2FnZSwga2V5cy5uLCBrZXlzLmUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVjcnlwdGVkX21lc3NhZ2UgPSBSU0EuZGVjcnlwdChlbmNyeXB0ZWRfbWVzc2FnZSwga2V5cy5kLCBrZXlzLm4pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlZF9tZXNzYWdlID0gUlNBLmRlY29kZShkZWNyeXB0ZWRfbWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbmRNU0cgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5jcnlwdGVkTVNHOiBlbmNvZGVkX21lc3NhZ2UudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWRNU0c6IGRlY29kZWRfbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAnY2Flc2FyJzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuY3J5cHRlZE1zZ0MgPSBDYWVzYXIuZG9DcnlwdChmYWxzZSwgdmFsdWUsIGtleSwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG1zZyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kTVNHID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZE1TRzogZW5jcnlwdGVkTXNnQyxcclxuICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWRNU0c6IENhZXNhci5kb0NyeXB0KHRydWUsIGVuY3J5cHRlZE1zZ0MsIGtleSwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlICdwbGF5ZmFpcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VuZE1TRyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmNyeXB0ZWRNU0c6IFBsYXlmYWlyLmRvQ2lwaGVyKHZhbHVlLCBrZXksIChtc2cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWRNU0c6IFBsYXlmYWlyLmRlQ29kZUNpcGhlcih2YWx1ZSwga2V5KVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAndmVybmFtJzpcclxuICAgICAgICAgICAgICAgIGxldCBfa2V5RSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5jcnlwdGVkTXNnVmVyID0gVmVybmFtLmRvRW5jcnlwdCh2YWx1ZSwgKF9rZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBfa2V5RSA9IF9rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5fX1NFVF9FTkNSWVBUX0RBVEEoe3R5cGU6ICdrZXknLCB2YWx1ZTogX2tleX0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VuZE1TRyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmNyeXB0ZWRNU0c6IGVuY3J5cHRlZE1zZ1ZlcixcclxuICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWRNU0c6IFZlcm5hbS5kb0RlY3J5cHQodmFsdWUsIF9rZXlFKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGVmYXVsdCA6IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBfX3NlbmRNZXNzYWdlICh2YWx1ZSwgaXNLZXkpIHtcclxuICAgICAgICBpZiAoaXNLZXkgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICAgICAgY29uc3QgZW5jcnlwdGVkTXNnID0gdGhpcy5fX2VuY3J5cHRDb21tb24uY2FsbCh0aGlzLCB2YWx1ZSwgaXNLZXkubWFpbk9iaj8ua2V5LCBpc0tleS5tYWluT2JqPy5lbmNyeXB0VHlwZSk7XHJcbiAgICAgICAgICAgIGF3YWl0IF9fRURJVF9NRVNTQUdFKFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlLCBlOiBlbmNyeXB0ZWRNc2cuZW5jcnlwdGVkTVNHLCBkOiBlbmNyeXB0ZWRNc2cuZGVjcnlwdGVkTVNHfSxcclxuICAgICAgICAgICAgICAgIGlzS2V5Py5pbmRleCxcclxuICAgICAgICAgICAgICAgIHtpZFVzZXI6IHRoaXMucHJvcHMuYWN0aXZlVXNlcj8uaWQsIG15SWQ6IHRoaXMucHJvcHMubG9nZ2VkVXNlcj8uaWR9KS5uZXh0KCk7XHJcbiAgICAgICAgICAgIEJ1cy5kaXNwYXRjaCgnZW5kRWRpdGluZycpO1xyXG4gICAgICAgICAgICBCdXMuZGlzcGF0Y2goJ21lc3NhZ2VTZW5kaW5nRmluaXNoJyk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2hhbmRsZVN1Ym1pdE1lc3NhZ2UoJ2NyeXB0JywgJ2NyeXB0JywgJ2NyeXB0Jyk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd2FybmluZyA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZW5kTWVzc2FnZTogdmFsdWVcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuY3J5cHRNc2cgPSB0aGlzLl9fZW5jcnlwdENvbW1vbi5jYWxsKHRoaXMsIHZhbHVlLCB0aGlzLnByb3BzLmVuY3J5cHREYXRhPy5rZXksIHRoaXMucHJvcHMuZW5jcnlwdERhdGEudHlwZSwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZyA9IG1zZztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmlzU2hvd01vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbERhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeW91ck1lc3NhZ2U6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4od2FybmluZyAmJiB7d2FybmluZ01zZzogd2FybmluZ30pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oZW5jcnlwdE1zZy5lbmNyeXB0ZWRNU0cgJiYge2VuY3J5cHRUZXh0OiBlbmNyeXB0TXNnLmVuY3J5cHRlZE1TR30pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oZW5jcnlwdE1zZy5kZWNyeXB0ZWRNU0cgJiYge2RlY3J5cHRUZXh0OiBlbmNyeXB0TXNnLmRlY3J5cHRlZE1TR30pLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbmNyeXB0TXNnLmVuY3J5cHRlZE1TRyAmJiBlbmNyeXB0TXNnLmRlY3J5cHRlZE1TRykgdGhpcy5fX2hhbmRsZVN1Ym1pdE1lc3NhZ2UodmFsdWUsIGVuY3J5cHRNc2cuZW5jcnlwdGVkTVNHLCBlbmNyeXB0TXNnLmRlY3J5cHRlZE1TRyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtZXNzYWdlLWNvbnRlbnQtcmlnaHQgXHJcbiAgICAgICAgICAgICAgICAke3RoaXMuc3RhdGUuc2tlbGV0b25Mb2FkaW5nID8gJ3NrZWxldG9uLWxvYWRpbmctY29udGVudCcgOiAnJ30gXHJcbiAgICAgICAgICAgICAgICAkeyF0aGlzLnN0YXRlLm5vQ2hhdFVzZXIgPyAnaGlkZGVuLW92ZXJsYXknIDogJyd9IFxyXG4gICAgICAgICAgICAgICAgJHt0aGlzLnN0YXRlLnN0YXJ0TWVzc2FnZU5vdGlmeSA/ICdlbXB0eS1tZXNzYWdlLWNvbnRlbnQnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAke3RoaXMuc3RhdGUubm9DaGF0VXNlciA/ICduby1jaGF0LXVzZXInOiAnJ31cclxuICAgICAgICAgICAgICAgIGB9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2tlbGV0b25Mb2FkaW5nICYmICF0aGlzLnN0YXRlLm5vQ2hhdFVzZXIgP1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBBcnJheSg2KS5maWxsKCcnKS5tYXAoKF8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bza2VsZXRvbi1jb250YWluZXItbWVzc2FnZXMgJHtpICUgMiAhPT0gMCA/ICdvZGQtY29udGFpbmVyLXNrZWxldG9uJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIsIDYpfSBzdHlsZT17e29wYWNpdHk6ICg2IC0gaSkgKiAwLjEwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXtbJzVweCcsICcxMHB4JywgJzBweCcsICcxMHB4J119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM9XCI1MCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNrZWxldG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1NSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUycHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17Wyc1cHgnLCAnMHB4JywgJzBweCcsIGkgJSAyICE9PSAwID8gJ2F1dG8nIDogJzBweCddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cz1cIjAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aSAlIDIgIT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjU1JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUycHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49e1snNXB4JywgJzBweCcsICcwcHgnLCAnYXV0byddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM9XCIwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz46ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5zdGFydE1lc3NhZ2VOb3RpZnkgPyA8ZGl2IGNsYXNzTmFtZT1cInNlbmQtZmlyc3QtbWVzc2FnZVwiPnt0aGlzLnN0YXRlLnN0YXJ0TWVzc2FnZU5vdGlmeX08L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUubm9DaGF0VXNlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcml2YXRlTWVzc2FnZUNvbnRlbnQgbWVzc2FnZXNIYXZlQmVlbkRlbGV0ZWQ9e3RoaXMuX19tZXNzYWdlc0hhdmVCZWVuRGVsZXRlZH0gLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5za2VsZXRvbkxvYWRpbmcgJiYgPFRleHRBcmVhTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXI9e3RoaXMucHJvcHMuYWN0aXZlVXNlcn1cclxuICAgICAgICAgICAgICAgICAgICBsb2dnZWRVc2VySWQ9e3RoaXMucHJvcHMubG9nZ2VkVXNlcj8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNUeXBpbmc9e3RoaXMuX19pc1R5cGluZ31cclxuICAgICAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZT17dGhpcy5fX3NlbmRNZXNzYWdlfS8+fVxyXG5cclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZUNsb3NlPXt0aGlzLnN0YXRlLmJlZm9yZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlPXt0aGlzLl9fY2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+UGxlYXNlIGNvbmZpcm0gbWVzc2FnZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Zb3VyIGluY2x1ZGVkIHRleHQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZXNzYWdlLXBcIj57dGhpcy5zdGF0ZS5tb2RhbERhdGEueW91ck1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RW5jcnlwdGVkIHRleHQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tb2RhbERhdGEud2FybmluZ01zZyA/IDxwIGNsYXNzTmFtZT1cIndhcm5pbmctbWVzc2FnZVwiPnt0aGlzLnN0YXRlLm1vZGFsRGF0YS53YXJuaW5nTXNnfTwvcD46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZXNzYWdlLXBcIj57dGhpcy5zdGF0ZS5tb2RhbERhdGEuZW5jcnlwdFRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVJX0VMRU1FTlRTLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPVwiIzM3NDE1Y1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2ZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsxMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9eydTZW5kJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXtbJzIwcHgnLCAnMCcsICcwJywgJ2F1dG8nXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fX2hhbmRsZVN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4ID57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5zY3JvbGwtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDcwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2UtcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLndhcm5pbmctbWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZhMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2tlbGV0b24tY29udGFpbmVyLW1lc3NhZ2VzIC5saW5lLXdyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm9kZC1jb250YWluZXItc2tlbGV0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5za2VsZXRvbi1jb250YWluZXItbWVzc2FnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubWVzc2FnZS1jb250ZW50LXJpZ2h0LmhpZGRlbi1vdmVybGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2UtY29udGVudC1yaWdodC5za2VsZXRvbi1sb2FkaW5nLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlLWNvbnRlbnQtcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQycHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5lbXB0eS1tZXNzYWdlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2VuZC1maXJzdC1tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uby1jaGF0LXVzZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL2ltYWdlcy9ub2NoYXQucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBsb2dnZWRVc2VyOiBzdGF0ZS5jaGF0LmxvZ2dlZFVzZXIsXHJcbiAgICBhY3RpdmVVc2VyOiBzdGF0ZS5jaGF0LmFjdGl2ZVVzZXIsXHJcbiAgICB1c2Vyc0xpc3Q6IHN0YXRlLmNoYXQubXlDaGF0VXNlcnMsXHJcbiAgICBpc1Nob3dNb2RhbDogc3RhdGUuY2hhdC5pc1Nob3dNb2RhbCxcclxuICAgIGVuY3J5cHREYXRhOiBzdGF0ZS5jaGF0LmVuY3J5cHREYXRhLFxyXG4gICAgbWVzc2FnZXM6IHN0YXRlLmNoYXQuYWN0aXZlVXNlck1lc3NhZ2VzLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIF9fU0VUX0VOQ1JZUFRfREFUQSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShNZXNzYWdlcyk7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\Messages.jsx */"));
  }

}

const mapStateToProps = state => ({
  loggedUser: state.chat.loggedUser,
  activeUser: state.chat.activeUser,
  usersList: state.chat.myChatUsers,
  isShowModal: state.chat.isShowModal,
  encryptData: state.chat.encryptData,
  messages: state.chat.activeUserMessages
});

const mapDispatchToProps = {
  __SET_ENCRYPT_DATA: store_actions__WEBPACK_IMPORTED_MODULE_4__["__SET_ENCRYPT_DATA"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Messages));

/***/ }),

/***/ "./components/Skeleton/index.jsx":
/*!***************************************!*\
  !*** ./components/Skeleton/index.jsx ***!
  \***************************************/
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
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\Skeleton\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Skeleton = props => {
  const _style = Object.assign({}, {
    width: props.width,
    height: props.height,
    borderRadius: props.radius,
    margin: props.margin[0] + ' ' + props.margin[1] + ' ' + props.margin[2] + ' ' + props.margin[3]
  });

  return __jsx("div", {
    style: _style,
    className: "jsx-1576339329" + " " + "skeleton-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1576339329",
    __self: undefined
  }, ".skeleton-wrap.jsx-1576339329{direction:ltr;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden;background-color:#D3D8DD;border:1px solid #D3D8DD;}.skeleton-wrap.jsx-1576339329:before{content:\" \";position:absolute;top:0;right:0;bottom:0;left:50%;z-index:1;width:500%;margin-left:-250%;-webkit-animation:phAnimation-jsx-1576339329 .8s linear infinite;animation:phAnimation-jsx-1576339329 .8s linear infinite;background:linear-gradient(to right,rgba(255,255,255,0) 46%,rgba(255,255,255,0.35) 50%,rgba(255,255,255,0) 54%) 50% 50%;}@-webkit-keyframes phAnimation-jsx-1576339329{0%{-webkit-transform:translate3d(-30%,0,0);-ms-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0);}100%{-webkit-transform:translate3d(30%,0,0);-ms-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0);}}@keyframes phAnimation-jsx-1576339329{0%{-webkit-transform:translate3d(-30%,0,0);-ms-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0);}100%{-webkit-transform:translate3d(30%,0,0);-ms-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcU2tlbGV0b25cXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFld0IsQUFHbUMsQUFTRixBQWMwQixBQUdELFlBaEJuQixFQVRBLGdCQVVaLEVBVE8sSUFVTCxRQUNDLFNBQ0EsU0FDQyxVQUNDLFdBQ08sa0JBQ3dCLElBUzFDLENBeEJlLEVBcUJmLHVEQXBCZ0IsZ0JBQ1MseUJBQ0EsbUJBYTJHLE1BWnhJLGtIQWFBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcU2tlbGV0b25cXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmNvbnN0IFNrZWxldG9uID0gcHJvcHMgPT4ge1xyXG5cclxuICAgIGNvbnN0IF9zdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHtcclxuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBwcm9wcy5yYWRpdXMsXHJcbiAgICAgICAgbWFyZ2luOiBwcm9wcy5tYXJnaW5bMF0gKyAnICcgKyBwcm9wcy5tYXJnaW5bMV0gKyAnICcgKyBwcm9wcy5tYXJnaW5bMl0gKyAnICcgKyBwcm9wcy5tYXJnaW5bM10sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbGV0b24td3JhcFwiIHN0eWxlPXtfc3R5bGV9PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnNrZWxldG9uLXdyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEM0Q4REQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0QzRDhERDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5za2VsZXRvbi13cmFwOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcGhBbmltYXRpb24gLjhzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNDYlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA1NCUpIDUwJSA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHBoQW5pbWF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwJSwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwJSwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5Ta2VsZXRvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICByYWRpdXM6ICcwcHgnLFxyXG4gICAgbWFyZ2luOiBbMCwgMCwgMCwgMF1cclxufTtcclxuXHJcblNrZWxldG9uLnByb3BUeXBlcyA9IHtcclxuICAgIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcmFkaXVzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWFyZ2luOiBQcm9wVHlwZXMuYXJyYXlcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTa2VsZXRvbik7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\Skeleton\\\\index.jsx */"));
};

Skeleton.defaultProps = {
  width: 'auto',
  height: 'auto',
  radius: '0px',
  margin: [0, 0, 0, 0]
};
Skeleton.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  radius: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Skeleton));

/***/ }),

/***/ "./components/elements/CommonRoom.jsx":
/*!********************************************!*\
  !*** ./components/elements/CommonRoom.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/UI */ "./components/shared/UI/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/fire */ "./config/fire.js");
/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Skeleton */ "./components/Skeleton/index.jsx");
/* harmony import */ var store_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store/saga */ "./store/saga/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/shared/helpers/Bus */ "./components/shared/helpers/Bus.js");
/* harmony import */ var components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\elements\\CommonRoom.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function EveryUser(props) {
  const {
    0: loadingPrivateIcon,
    1: setLoadingPrivateIcon
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx("div", {
    className: "user-messages-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_shared_UI__WEBPACK_IMPORTED_MODULE_2__["default"].UserImage, {
    firstName: props.dataMSG.fullName.split(' ')[0],
    lastName: props.dataMSG.fullName.split(' ')[1] || '',
    fill: props.dataMSG.color,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "user-chat-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "user-message-info_left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, props.dataMSG.fullName)), __jsx("a", {
    onClick: () => {
      components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_8__["Bus"].dispatch('startChat', {
        id: props.dataMSG.id,
        color: props.dataMSG.color,
        isSeen: true,
        isTyping: false,
        countMessagesDelivered: 0,
        fullName: props.dataMSG.fullName,
        isSender: true,
        letters: {
          message: '',
          time: null
        }
      });
      setLoadingPrivateIcon(true);
    },
    className: _config_fire__WEBPACK_IMPORTED_MODULE_4__["default"].auth().currentUser.email === props.dataMSG.email ? 'disable-btn common-room-btn' : 'common-room-btn',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, _config_fire__WEBPACK_IMPORTED_MODULE_4__["default"].auth().currentUser.email === props.dataMSG.email ? __jsx("span", {
    className: "you",
    onClick: e => e.stopPropagation(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 77
    }
  }, "You") : loadingPrivateIcon ? __jsx("div", {
    className: "sbl-circ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 170
    }
  }) : __jsx("span", {
    className: "lnr lnr-envelope",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 205
    }
  }))));
}

const CommonRoom = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (props.allChatUsers == null) {
      Object(store_saga__WEBPACK_IMPORTED_MODULE_6__["__GET_ALL_USERS"])().next();
    }

    return () => {
      Object(store_saga__WEBPACK_IMPORTED_MODULE_6__["__GET_ALL_USERS"])({}).next();
    };
  }, []);
  return __jsx("div", {
    className: "jsx-3815667810" + " " + `${!props.startedNewChat ? 'until-load-allowing' : ''} main-room-list`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, props.usersList === null && new Array(8).fill('').map((_, i) => {
    return __jsx("div", {
      key: i + Math.random().toString(16).slice(2, 6),
      style: {
        opacity: (8 - i) * 0.09
      },
      className: "jsx-3815667810" + " " + "skeleton-container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, __jsx(_Skeleton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      width: "35px",
      height: "35px",
      margin: ['5px', '10px', '0px', '10px'],
      radius: "50%",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "jsx-3815667810" + " " + "line-wrap",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, __jsx(_Skeleton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      width: "100%",
      height: "12px",
      margin: ['5px', '0px', '10px', '0px'],
      radius: "0%",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }
    }), __jsx(_Skeleton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      width: "100%",
      height: "12px",
      margin: ['5px', '0px', '10px', '0px'],
      radius: "0%",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 29
      }
    })));
  }), props.usersList !== null && props.usersList.map(user => __jsx(EveryUser, {
    dataMSG: user,
    key: user.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 70
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3815667810",
    __self: undefined
  }, ".until-load-allowing{pointer-events:none;}.sbl-circ{height:20px;width:20px;color:#5a5a5a;position:relative;display:block;border:1px solid;border-radius:50%;border-top-color:transparent;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;margin:5px auto;}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotate{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.user-messages-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px;border-bottom:1px solid #e3dede;}.user-messages-container .user-chat-btn{padding-left:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:calc(100% - 45px);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.common-room-btn{cursor:pointer;font-size:18px;margin-top:0px;display:inline-block;}.common-room-btn>span.you{font-size:14px;}.common-room-btn>span:not(.you):hover{font-weight:900;}.user-messages-container .user-chat-btn .user-message-info_left h4{margin:0;max-height:40px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcZWxlbWVudHNcXENvbW1vblJvb20uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGK0IsQUFHeUMsQUFHVixBQWNVLEFBRUssQUFJWixBQUtLLEFBT0osQUFNQyxBQUdDLEFBR1AsU0FDTyxHQTVDUCxHQWdDTSxBQU1uQixDQUdBLEVBaEJpQixFQTVCakIsR0FJZ0IsRUE0Q0ksS0FaRCxPQS9CQyxJQTRDcEIsSUFaeUIsVUEvQlQsV0FnQ2hCLEdBL0JtQixHQVNNLEVBT1IsWUFmRyxDQVVVLEFBTU0sS0FLRixZQXBCSCxlQWdCL0IsY0Fmc0MsMEVBb0JWLE1BbkJWLGdCQUNsQixFQW1CdUIsNkZBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcZWxlbWVudHNcXENvbW1vblJvb20uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVUlfRUxFTUVOVFMgZnJvbSBcIi4uL3NoYXJlZC9VSVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgZmlyZSBmcm9tIFwiLi4vLi4vY29uZmlnL2ZpcmVcIjtcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCIuLi9Ta2VsZXRvblwiO1xyXG5pbXBvcnQge1xyXG4gICAgX19HRVRfQUxMX1VTRVJTXHJcbn0gZnJvbSBcInN0b3JlL3NhZ2FcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQnVzIH0gZnJvbSAnY29tcG9uZW50cy9zaGFyZWQvaGVscGVycy9CdXMnO1xyXG5cclxuZnVuY3Rpb24gRXZlcnlVc2VyIChwcm9wcykge1xyXG4gICAgY29uc3QgW2xvYWRpbmdQcml2YXRlSWNvbiwgc2V0TG9hZGluZ1ByaXZhdGVJY29uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLW1lc3NhZ2VzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8VUlfRUxFTUVOVFMuVXNlckltYWdlXHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU9e3Byb3BzLmRhdGFNU0cuZnVsbE5hbWUuc3BsaXQoJyAnKVswXX1cclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lPXtwcm9wcy5kYXRhTVNHLmZ1bGxOYW1lLnNwbGl0KCcgJylbMV0gfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBmaWxsPXtwcm9wcy5kYXRhTVNHLmNvbG9yfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2hhdC1idG5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1tZXNzYWdlLWluZm9fbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND57cHJvcHMuZGF0YU1TRy5mdWxsTmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4ge0J1cy5kaXNwYXRjaCgnc3RhcnRDaGF0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcHJvcHMuZGF0YU1TRy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmRhdGFNU0cuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VlbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUeXBpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudE1lc3NhZ2VzRGVsaXZlcmVkOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZTogcHJvcHMuZGF0YU1TRy5mdWxsTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZW5kZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7IHNldExvYWRpbmdQcml2YXRlSWNvbih0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtmaXJlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbCA9PT0gcHJvcHMuZGF0YU1TRy5lbWFpbCA/ICdkaXNhYmxlLWJ0biBjb21tb24tcm9vbS1idG4nIDogJ2NvbW1vbi1yb29tLWJ0bid9PntcclxuICAgICAgICAgICAgICAgICAgICBmaXJlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbCA9PT0gcHJvcHMuZGF0YU1TRy5lbWFpbCA/IDxzcGFuIGNsYXNzTmFtZT1cInlvdVwiIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5Zb3U8L3NwYW4+IDogbG9hZGluZ1ByaXZhdGVJY29uID8gPGRpdiBjbGFzc05hbWU9XCJzYmwtY2lyY1wiPjwvZGl2PiA6IDxzcGFuIGNsYXNzTmFtZT1cImxuciBsbnItZW52ZWxvcGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgQ29tbW9uUm9vbSA9IHByb3BzID0+IHtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuYWxsQ2hhdFVzZXJzID09IG51bGwpIHtcclxuICAgICAgICAgICAgX19HRVRfQUxMX1VTRVJTKCkubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBfX0dFVF9BTExfVVNFUlMoe30pLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7IXByb3BzLnN0YXJ0ZWROZXdDaGF0ID8gJ3VudGlsLWxvYWQtYWxsb3dpbmcnIDogJyd9IG1haW4tcm9vbS1saXN0YH0+XHJcbiAgICAgICAgICAgIHtwcm9wcy51c2Vyc0xpc3QgPT09IG51bGwgJiYgbmV3IEFycmF5KDgpLmZpbGwoJycpLm1hcCgoXywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWxldG9uLWNvbnRhaW5lclwiIGtleT17aSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIsIDYpfSBzdHlsZT17e29wYWNpdHk6ICg4IC0gaSkgKiAwLjA5fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXtbJzVweCcsICcxMHB4JywgJzBweCcsICcxMHB4J119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM9XCI1MCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNrZWxldG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49e1snNXB4JywgJzBweCcsICcxMHB4JywgJzBweCddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cz1cIjAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEycHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17Wyc1cHgnLCAnMHB4JywgJzEwcHgnLCAnMHB4J119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzPVwiMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB7cHJvcHMudXNlcnNMaXN0ICE9PSBudWxsICYmIHByb3BzLnVzZXJzTGlzdC5tYXAodXNlciA9PiA8RXZlcnlVc2VyXHJcbiAgICAgICAgICAgICAgICBkYXRhTVNHPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAga2V5PXt1c2VyLmlkfVxyXG4gICAgICAgICAgICAvPil9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAudW50aWwtbG9hZC1hbGxvd2luZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2JsLWNpcmMge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzVhNWE1YTtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlIDFzIGxpbmVhciBpbmZpbml0ZTsgXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyByb3RhdGUge1xyXG4gICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cclxuICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnVzZXItbWVzc2FnZXMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2RlZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudXNlci1tZXNzYWdlcy1jb250YWluZXIgLnVzZXItY2hhdC1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0NXB4KTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbW1vbi1yb29tLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29tbW9uLXJvb20tYnRuID4gc3Bhbi55b3V7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbW1vbi1yb29tLWJ0biA+IHNwYW46bm90KC55b3UpOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudXNlci1tZXNzYWdlcy1jb250YWluZXIgLnVzZXItY2hhdC1idG4gLnVzZXItbWVzc2FnZS1pbmZvX2xlZnQgaDR7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5Db21tb25Sb29tLnByb3BUeXBlcyA9IHtcclxuICAgIHN0YXJ0ZWROZXdDaGF0OiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICB1c2Vyc0xpc3Q6IHN0YXRlLmNoYXQuYWxsQ2hhdFVzZXJzXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKENvbW1vblJvb20pOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\elements\\\\CommonRoom.jsx */"));
};

CommonRoom.propTypes = {
  startedNewChat: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

const mapStateToProps = state => ({
  usersList: state.chat.allChatUsers
});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(CommonRoom));

/***/ }),

/***/ "./components/elements/NoChatUsers.jsx":
/*!*********************************************!*\
  !*** ./components/elements/NoChatUsers.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_shared_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/shared/UI */ "./components/shared/UI/index.js");
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\elements\\NoChatUsers.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NoChatUsers = props => {
  return __jsx("div", {
    className: "no-chat-users",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("p", {
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "You haven't any chat yet"), __jsx(components_shared_UI__WEBPACK_IMPORTED_MODULE_1__["default"].Button, {
    type: "button",
    text: "Start Chat",
    width: 150,
    onClick: props.goToCommonRoom(),
    size: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NoChatUsers);

/***/ }),

/***/ "./components/elements/PrivateMessageContent.jsx":
/*!*******************************************************!*\
  !*** ./components/elements/PrivateMessageContent.jsx ***!
  \*******************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_shared_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/shared/UI */ "./components/shared/UI/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Icons_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Icons/icon */ "./components/Icons/icon.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! store/actions */ "./store/actions/index.js");
/* harmony import */ var components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/shared/helpers/Bus */ "./components/shared/helpers/Bus.js");
/* harmony import */ var components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/shared/helpers/constants */ "./components/shared/helpers/constants.js");
/* harmony import */ var store_reselect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/reselect */ "./store/reselect/index.js");
/* harmony import */ var components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/shared/helpers/global-functions */ "./components/shared/helpers/global-functions.js");
/* harmony import */ var store_saga__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! store/saga */ "./store/saga/index.js");
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\elements\\PrivateMessageContent.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














class PrivateMessageContent extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    var _this$props$activeUse, _this$props$loggedUse;

    super(props);
    this.state = {
      leftColor: this.props.activeUser && ((_this$props$activeUse = this.props.activeUser) === null || _this$props$activeUse === void 0 ? void 0 : _this$props$activeUse.color) || '#0C4651',
      rightColor: this.props.activeUser && ((_this$props$loggedUse = this.props.loggedUser) === null || _this$props$loggedUse === void 0 ? void 0 : _this$props$loggedUse.color) || '#1BBC9B',
      scrollLoadingAllow: true,
      messagesSelector: [],
      encryptIcon: true,
      scrollPosition: null,
      previousScrollHeight: 0,
      previousScrollTop: 0,
      loadingMessages: false,
      isEditing: false,
      isRemoving: false,
      editingMsgIndex: null
    };
    this._messagesEnd = null;
    this._handleDomClick = null;
    this._handleClickRemove = null;
    this.__scrollToBottom = this.__scrollToBottom.bind(this);
    this.__handleScrollTop = this.__handleScrollTop.bind(this);
    this.__showEncryptPopUp = this.__showEncryptPopUp.bind(this);
    this.__doEncryptType = this.__doEncryptType.bind(this);
    this.__hidePopUpEncrypt = this.__hidePopUpEncrypt.bind(this);
    this.__editMessage = this.__editMessage.bind(this);
    this.__removeMessageConfirm = this.__removeMessageConfirm.bind(this);
    this.__removeMessage = this.__removeMessage.bind(this);
    this.__clickRemovePopUp = this.__clickRemovePopUp.bind(this);
    this._scrollContent = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_9__["Bus"].subscribe('cancelEditing', () => {
      this.setState({
        isEditing: false
      });
    });
    components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_9__["Bus"].subscribe('endEditing', () => {
      this.setState({
        isEditing: false,
        isRemoving: false,
        editingMsgIndex: null
      });
    });
  }

  __scrollToBottom(behavior) {
    setTimeout(() => {
      var _this$_messagesEnd;

      (_this$_messagesEnd = this._messagesEnd) === null || _this$_messagesEnd === void 0 ? void 0 : _this$_messagesEnd.scrollIntoView({
        behavior: behavior ? 'smooth' : 'auto'
      });
    }, 0);
  }

  __handleScrollTop(e) {
    if (this.state.scrollLoadingAllow && e.target.scrollTop < 50) {
      var _this$_scrollContent, _this$_scrollContent2;

      this.setState({
        previousScrollTop: (_this$_scrollContent = this._scrollContent) === null || _this$_scrollContent === void 0 ? void 0 : _this$_scrollContent.scrollTop,
        previousScrollHeight: (_this$_scrollContent2 = this._scrollContent) === null || _this$_scrollContent2 === void 0 ? void 0 : _this$_scrollContent2.scrollHeight,
        scrollLoadingAllow: false,
        loadingMessages: true
      }, () => {
        setTimeout(() => {
          this.props.__LOAD_MORE_MESSAGES(1);
        }, 1000);
      });
    } else {
      this.setState({
        scrollLoadingAllow: true
      });
    }
  }

  __showEncryptPopUp(evt, index, isKey) {
    if (evt.target.closest('.remove-confirm-container')) return;

    const _currentSrc = evt.target.closest('.separate-p');

    if (document.body.querySelector('.opened-encryptPopUp') && document.body.querySelector('.opened-encryptPopUp') !== _currentSrc) {
      document.body.querySelector('.opened-encryptPopUp').setAttribute('data-hint-encrypt', false);
      document.body.querySelector('.opened-encryptPopUp').classList.remove('opened-encryptPopUp');
    }

    if (isKey) return;

    if (_currentSrc) {
      const dataIcon = _currentSrc.getAttribute('data-hint-encrypt');

      this.state.messagesSelector = [...this.state.messagesSelector];
      this.state.messagesSelector[index].isEncrypt = false;
      this.setState({
        encryptIcon: JSON.parse(dataIcon),
        messagesSelector: this.state.messagesSelector
      }, () => this.forceUpdate());

      _currentSrc.classList.toggle('opened-encryptPopUp');
    }

    setTimeout(() => {
      addEventListener('click', this._handleDomClick = this.__hidePopUpEncrypt.bind(this, index));
    }, 0);
  }

  __hidePopUpEncrypt(index, e) {
    this.state.messagesSelector = [...this.state.messagesSelector];
    delete this.state.messagesSelector[index].isEncrypt;
    this.setState({
      messagesSelector: this.state.messagesSelector
    }, () => this.forceUpdate());
    removeEventListener('click', this._handleDomClick);

    if (!e.target.closest('div[data-hint-encrypt]') && document.body.querySelector('.opened-encryptPopUp')) {
      document.body.querySelector('.opened-encryptPopUp').setAttribute('data-hint-encrypt', false);
      document.body.querySelector('.opened-encryptPopUp').classList.remove('opened-encryptPopUp');
    }
  }

  __doEncryptType(e, index) {
    const _currentSrc = e.target.closest('.separate-p');

    e.stopPropagation();
    this.setState({
      encryptIcon: !this.state.encryptIcon
    }, () => {
      _currentSrc.setAttribute('data-hint-encrypt', this.state.encryptIcon);

      const newEncryption = [...this.state.messagesSelector];
      newEncryption[index].isEncrypt = this.state.encryptIcon;
      this.setState({
        messagesSelector: newEncryption
      });
    });
  }

  __editMessage(evt, msg, time) {
    var _this$props$activeUse2, _this$props$loggedUse2;

    const index = this.props.messages.findIndex(msg => msg.time === time);

    Object(store_saga__WEBPACK_IMPORTED_MODULE_13__["__EDIT_MESSAGE"])(null, index, {
      idUser: (_this$props$activeUse2 = this.props.activeUser) === null || _this$props$activeUse2 === void 0 ? void 0 : _this$props$activeUse2.id,
      myId: (_this$props$loggedUse2 = this.props.loggedUser) === null || _this$props$loggedUse2 === void 0 ? void 0 : _this$props$loggedUse2.id
    }).next();

    evt.stopPropagation();
    this.setState({
      isEditing: true,
      editingMsgIndex: index
    }, () => {
      components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_9__["Bus"].dispatch('editMessage', {
        msg,
        index
      });
    });
  }

  __removeMessageConfirm(evt) {
    var _evt$target$closest;

    evt.stopPropagation();

    const _currentSrc = evt.target.closest('.separate-p');

    const alreadyDeclared = (_evt$target$closest = evt.target.closest('.messages-content')) === null || _evt$target$closest === void 0 ? void 0 : _evt$target$closest.querySelector('.opened-pop-confirm-remove');

    if (alreadyDeclared) {
      alreadyDeclared.classList.remove('opened-pop-confirm-remove');
    }

    _currentSrc.classList.add('opened-pop-confirm-remove');

    setTimeout(() => {
      addEventListener('click', this._handleClickRemove = this.__clickRemovePopUp.bind(this));
    }, 0);
  }

  __removeMessage(time) {
    var _this$props$activeUse3, _this$props$loggedUse3;

    Object(store_saga__WEBPACK_IMPORTED_MODULE_13__["__REMOVE_MESSAGE"])(time, {
      idUser: (_this$props$activeUse3 = this.props.activeUser) === null || _this$props$activeUse3 === void 0 ? void 0 : _this$props$activeUse3.id,
      myId: (_this$props$loggedUse3 = this.props.loggedUser) === null || _this$props$loggedUse3 === void 0 ? void 0 : _this$props$loggedUse3.id
    }).next();
  }

  __clickRemovePopUp(evt) {
    var _evt$target$closest2;

    const alreadyDeclared = (_evt$target$closest2 = evt.target.closest('.messages-content')) === null || _evt$target$closest2 === void 0 ? void 0 : _evt$target$closest2.querySelector('.opened-pop-confirm-remove');

    if (alreadyDeclared && !evt.target.closest('.remove-confirm-container') || evt.target.closest('.trigger-close-dialog')) {
      alreadyDeclared.classList.remove('opened-pop-confirm-remove');
      removeEventListener('click', this._handleClickRemove);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    var _this$props$activeUse4, _prevProps$messages$t, _this$props$messages$, _this$props$activeUse5, _this$props$activeUse6, _this$props$activeUse7;

    // if (prevProps.activeUser.isTyping !== this.props.activeUser.isTyping) { todo
    //     this.props.activeUser.isTyping && this.__scrollToBottom('behavior');
    // }
    // Detect if there are removed message
    if (((_this$props$activeUse4 = this.props.activeUser) === null || _this$props$activeUse4 === void 0 ? void 0 : _this$props$activeUse4.removedMessageIndex) >= 0 && (((_prevProps$messages$t = prevProps.messages[this.props.activeUser.removedMessageIndex]) === null || _prevProps$messages$t === void 0 ? void 0 : _prevProps$messages$t.removed) !== ((_this$props$messages$ = this.props.messages[this.props.activeUser.removedMessageIndex]) === null || _this$props$messages$ === void 0 ? void 0 : _this$props$messages$.removed) || !(() => {
      var _this$state$messagesS;

      const currentIndex = this.state.messagesSelector.length - (this.props.messages.length - this.props.activeUser.removedMessageIndex);
      if (currentIndex < 0) return false;
      return (_this$state$messagesS = this.state.messagesSelector[currentIndex]) === null || _this$state$messagesS === void 0 ? void 0 : _this$state$messagesS.removed;
    })())) {
      const currentIndex = this.state.messagesSelector.length - (this.props.messages.length - this.props.activeUser.removedMessageIndex);

      if (currentIndex >= 0) {
        const newEncryption = [...this.state.messagesSelector];

        if (newEncryption[currentIndex]) {
          newEncryption[currentIndex].removed = true;
          this.setState({
            messagesSelector: newEncryption
          });
        }
      }
    } // when editing have been finished


    if (((_this$props$activeUse5 = this.props.activeUser) === null || _this$props$activeUse5 === void 0 ? void 0 : _this$props$activeUse5.editedMsgIndex) >= 0 && (this.props.messages[(_this$props$activeUse6 = this.props.activeUser) === null || _this$props$activeUse6 === void 0 ? void 0 : _this$props$activeUse6.editedMsgIndex].message !== prevProps.messages[(_this$props$activeUse7 = this.props.activeUser) === null || _this$props$activeUse7 === void 0 ? void 0 : _this$props$activeUse7.editedMsgIndex].message || (() => {
      var _this$props$activeUse8, _this$props$activeUse9;

      const currentIndex = this.state.messagesSelector.length - (this.props.messages.length - ((_this$props$activeUse8 = this.props.activeUser) === null || _this$props$activeUse8 === void 0 ? void 0 : _this$props$activeUse8.editedMsgIndex));
      if (currentIndex < 0) return false;
      return this.state.messagesSelector[currentIndex].message !== this.props.messages[(_this$props$activeUse9 = this.props.activeUser) === null || _this$props$activeUse9 === void 0 ? void 0 : _this$props$activeUse9.editedMsgIndex].message;
    })())) {
      var _this$props$activeUse10;

      const currentIndex = this.state.messagesSelector.length - (this.props.messages.length - ((_this$props$activeUse10 = this.props.activeUser) === null || _this$props$activeUse10 === void 0 ? void 0 : _this$props$activeUse10.editedMsgIndex));

      if (currentIndex >= 0) {
        var _this$props$activeUse11;

        const editedArray = [...this.state.messagesSelector];
        editedArray[currentIndex] = this.props.messages[(_this$props$activeUse11 = this.props.activeUser) === null || _this$props$activeUse11 === void 0 ? void 0 : _this$props$activeUse11.editedMsgIndex];
        this.setState({
          isEditing: false,
          isRemoving: false,
          editingMsgIndex: null,
          messagesSelector: editedArray
        });
      }
    } // Sending notification when there was not any messages


    if (this.props.messages.length === 1 && this.props.messages[0].message === '' || prevProps.messages.length === 1 && prevProps.messages[0].message === '') {
      this.props.messagesHaveBeenDeleted();
    } // Update message list


    if (prevProps.messagesPage !== this.props.messagesPage || prevProps.messages.length !== this.props.messages.length) {
      if ((this.props.messagesPage - 1) * components_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_10__["_EVERY_PAGE_LIMIT_MESSAGES"] <= this.props.messages.length) {
        this.setState({
          scrollLoadingAllow: true,
          loadingMessages: false,
          messagesSelector: Object(store_reselect__WEBPACK_IMPORTED_MODULE_11__["__getUserMessages"])({
            data: this.props.messages,
            page: this.props.messagesPage
          })
        }, () => {
          if (prevProps.messages.length !== this.props.messages.length) {
            this.__scrollToBottom('behavior');
          } else {
            this._scrollContent.scrollTo(0, this._scrollContent.scrollHeight - this.state.previousScrollHeight + this.state.previousScrollTop - 45);
          }
        });
      } else {
        this.props.__LOAD_MORE_MESSAGES(-1);
      }
    }
  }

  componentDidMount() {
    this.setState({
      messagesSelector: Object(store_reselect__WEBPACK_IMPORTED_MODULE_11__["__getUserMessages"])({
        data: this.props.messages,
        page: this.props.messagesPage
      })
    }, () => {
      this._scrollContent.onscroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default()(e => {
        if (this.props.messages.length > components_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_10__["_EVERY_PAGE_LIMIT_MESSAGES"]) {
          this.__handleScrollTop(e);
        }
      }, 100);

      this.__scrollToBottom();
    });
  }

  componentWillUnmount() {
    removeEventListener('click', this._handleClickRemove);
    removeEventListener('click', this._handleDomClick);
    components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_9__["Bus"].unsubscribe('cancelEditing');
    components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_9__["Bus"].unsubscribe('endEditing');
  }

  get FN() {
    return this.props.activeUser ? this.props.activeUser.fullName.split(' ')[0].slice(0, 1).toUpperCase() : '';
  }

  get LN() {
    return this.props.activeUser ? this.props.activeUser.fullName.split(' ')[1].slice(0, 1) || ''.toUpperCase() : '';
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      ref: el => this._scrollContent = el,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + `messages-content ${this.state.loadingMessages ? 'scroll-disable' : ''}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }
    }, this.state.loadingMessages && __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + "sbl-circ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 52
      }
    }), this.state.messagesSelector.map((message, index) => {
      const _isOwner = message.owner === 'Me';

      const _dataMSG = _isOwner ? this.props.loggedUser : this.props.activeUser;

      if (!_dataMSG) return '';
      return __jsx("div", {
        key: message.time + index,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + ((_isOwner ? 'content-right_owner' : 'content-left_owner') || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 29
        }
      }, __jsx(components_shared_UI__WEBPACK_IMPORTED_MODULE_4__["default"].UserImage, {
        firstName: _dataMSG.fullName.split(' ')[0],
        lastName: _dataMSG.fullName.split(' ')[1] || '',
        fill: _dataMSG.color,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 33
        }
      }), message.removed ? __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + "removed-message",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 52
        }
      }, "Removed message") : __jsx("div", {
        "data-message-type": message.encryptType,
        "data-message-key": message.key,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + `message-time ${Object(components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_12__["__detectCryptIcon"])(message) ? 'crypt-message' : ''}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 33
        }
      }, __jsx("div", {
        onClick: e => this.__showEncryptPopUp(e, index, Object(components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_12__["__detectCryptIcon"])(message)),
        "data-hint-encrypt": false,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + "separate-p",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 37
        }
      }, _isOwner && !Object(components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_12__["__detectCryptIcon"])(message) && !this.state.isEditing && !this.state.isRemoving && __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + "edit-remove",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 41
        }
      }, __jsx("i", {
        onClick: e => this.__editMessage(e, message, message.time),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + "lnr lnr-pencil",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 45
        }
      }), __jsx("i", {
        onClick: e => this.__removeMessageConfirm(e),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + "lnr lnr-cross",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 45
        }
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + "remove-confirm-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 45
        }
      }, "Are you sure?", __jsx("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 49
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + "trigger-close-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 53
        }
      }, "No"), __jsx("a", {
        onClick: () => this.__removeMessage(message.time),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 53
        }
      }, "Yes")))), __jsx("span", {
        onClick: e => this.__doEncryptType(e, index),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + "encryptPopUp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 41
        }
      }, this.state.encryptIcon ? __jsx(components_Icons_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "unlocked",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 71
        }
      }) : __jsx(components_Icons_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "locked",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 45
        }
      })), Object(components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_12__["__detectCryptIcon"])(message) ? __jsx("img", {
        src: "./assets/images/key.png",
        alt: "iconSend",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 71
        }
      }) : __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 45
        }
      }, message.isEncrypt === false ? message.decryptedMsg : //there will be some case which is equal undefined
      message.isEncrypt === true ? message.encryptedMsg : message.message, " "), " ", message.edited && __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + "edited-msg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 146
        }
      }, "(edited)")), __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + "time-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 37
        }
      }, moment__WEBPACK_IMPORTED_MODULE_5__(+message.time).format('lll')), _isOwner ? index === this.state.messagesSelector.length - 1 ? this.props.activeUser.isSeen ? __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + "status-message",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 41
        }
      }, "Seen") : __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + "status-message",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 85
        }
      }, "Delivered") : '' : ''));
    }), __jsx("div", {
      ref: el => {
        this._messagesEnd = el;
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 21
      }
    })), this.props.activeUser.isTyping && __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + "is-typing-wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 52
      }
    }, this.FN + this.LN + ' is typing ', __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + 'spinner',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + 'bounce1',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + 'bounce2',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2020876622", [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor]]]) + " " + 'bounce3',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 25
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2020876622",
      dynamic: [this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.rightColor, this.state.leftColor, this.state.rightColor, this.state.leftColor],
      __self: this
    }, `.sbl-circ{height:35px;width:35px;color:#5a5a5a;position:relative;display:block;border:2px solid;border-radius:50%;border-top-color:transparent;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;margin:5px auto;}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotate{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.messages-content{height:100%;overflow-x:hidden;position:relative;padding-top:10px;}.scroll-disable{overflow:hidden;}.messages-content::-webkit-scrollbar{width:0px;height:10px;}.messages-content::-webkit-scrollbar-thumb{background:transparent;}.messages-content::-webkit-scrollbar-track{background:transparent;}.content-right_owner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-flow:row-reverse;-ms-flex-flow:row-reverse;flex-flow:row-reverse;text-align:right;padding:0 10px;margin:7px;}.content-left_owner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:end;-ms-flex-pack:end;justify-content:end;text-align:left;padding:0 10px;margin:7px;}.content-left_owner .message-time{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:5px 10px;max-width:50%;position:relative;}.content-left_owner .removed-message,.content-right_owner .removed-message{padding:5px 10px;max-width:50%;position:relative;background-color:#d9d7d7;border-radius:6px;font-size:14px;height:27px;font-style:italic;color:#767575;margin-top:5px;margin-bottom:10px;}.content-left_owner .removed-message{margin-left:10px;}.content-right_owner .removed-message{margin-right:10px;}.content-right_owner .message-time{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding:5px 10px;max-width:50%;position:relative;}.content-left_owner .message-time>div.separate-p .edited-msg,.content-right_owner .message-time>div.separate-p .edited-msg{font-size:10px;font-family:sans-serif;font-style:italic;}.content-left_owner .crypt-message>div.separate-p,.content-right_owner .crypt-message>div.separate-p{background-color:transparent !important;padding:0 !important;height:27px;}.content-left_owner .crypt-message>div.separate-p img,.content-right_owner .crypt-message>div.separate-p img{width:30px;}.content-left_owner .crypt-message>div.separate-p:before,.content-right_owner .crypt-message>div.separate-p:before{border-color:transparent !important;}.message-time .status-message{font-size:12px;color:#424242;}.message-time:hover>span{opacity:1 !important;visibility:visible !important;}.content-right_owner .message-time>span,.content-left_owner .message-time>span{opacity:0;-webkit-transition:.4s;transition:.4s;font-size:9px;font-family:sans-serif;position:absolute;top:-13px;text-align:center;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;background-color:red;padding:3px 5px;color:#fff;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;white-space:nowrap;border-radius:4px;visibility:hidden;}.content-right_owner .message-time>div.separate-p .edit-remove i{padding:2px 4px;position:relative;}.content-right_owner .message-time>div.separate-p .edit-remove i.lnr-pencil:after{content:'';position:absolute;width:5px;height:5px;background:${this.state.rightColor};top:0;right:-5px;}.content-right_owner .message-time>div.separate-p .edit-remove i.lnr-cross:after{content:'';position:absolute;width:5px;height:5px;background:${this.state.rightColor};bottom:0;right:-5px;}.content-right_owner .message-time>div.separate-p .edit-remove .remove-confirm-container p{margin:4px 0 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.content-right_owner .message-time>div.separate-p .edit-remove .remove-confirm-container p>a:first-child{height:19px;display:inline-block;border:1px solid #ccc;width:25px;border-radius:2px;text-align:center;font-size:12px;vertical-align:middle;margin-right:7px;background-color:${this.state.rightColor};color:#fff;cursor:pointer;}.opened-pop-confirm-remove .edit-remove{opacity:1 !important;visibility:visible !important;left:-18px !important;}.content-right_owner .message-time>div.separate-p .edit-remove .remove-confirm-container p>a:last-child{height:19px;display:inline-block;border:1px solid #ccc;width:25px;border-radius:2px;text-align:center;font-size:12px;vertical-align:middle;background-color:#c5cbca;color:#fff;cursor:pointer;}.content-right_owner .message-time>div.separate-p .edit-remove .remove-confirm-container{position:absolute;width:120px;right:24px;padding:6px;color:#000;font-size:13px;border:1px solid #ccc;border-radius:3px;top:14px;bottom:0;margin:auto;height:55px;opacity:0;z-index:22;background:#fff;-webkit-transition:.4s;transition:.4s;visibility:hidden;cursor:default;}.content-right_owner .message-time>div.separate-p .edit-remove .remove-confirm-container:after{content:'';width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:4px solid #dcdcdc;position:absolute;right:-4px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);top:21px;}.content-right_owner .message-time>div.separate-p .edit-remove .remove-confirm-container:before{content:'';width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:3px solid #fff;position:absolute;right:-3px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);top:22px;z-index:22;}.opened-pop-confirm-remove .remove-confirm-container{opacity:1 !important;visibility:visible !important;}.opened-pop-confirm-remove+.time-wrap{display:none;}.content-right_owner .message-time>div.separate-p .edit-remove{position:absolute;left:-15px;background:${this.state.rightColor};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;top:0;width:18px;font-size:9px;height:27px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-right:1px solid;opacity:0;-webkit-transition:.2s;transition:.2s;visibility:hidden;}.content-right_owner .message-time>div.separate-p:hover .edit-remove{opacity:1;visibility:visible;left:-18px;}.content-right_owner .message-time>div.separate-p .edit-remove:after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;height:0.8px;width:18px;margin:auto;background:#fff;}.content-right_owner .message-time>div.separate-p .edit-remove:before{content:'';position:absolute;top:0;bottom:0;right:-1px;height:27px;width:0.8px;margin:auto;background:#fff;z-index:2;}.opened-encryptPopUp .edit-remove{display:none !important;}.content-right_owner .message-time>div.separate-p .encryptPopUp,.content-left_owner .message-time>div.separate-p .encryptPopUp{position:absolute;height:25px;display:none;width:25px;padding:2px;bottom:0;top:0;margin:auto;cursor:pointer;border-radius:5px;}.content-right_owner .message-time>div.separate-p .encryptPopUp{left:-30px;}.content-left_owner .message-time>div.separate-p .encryptPopUp{right:-30px;}.opened-encryptPopUp{background-color:#e7e7e7 !important;color:#000 !important;}.opened-encryptPopUp:before{border-left-color:#e7e7e7 !important;}.opened-encryptPopUp .encryptPopUp{display:block !important;}.content-right_owner .message-time>div.separate-p,.content-left_owner .message-time>div.separate-p{cursor:pointer;text-align:left;margin:0 0 5px 0;display:inline-block;padding:5px 10px;color:#fff;font-size:13px;border-radius:5px;position:relative;min-height:27px;word-break:break-all;}.content-right_owner .message-time>div.separate-p,.content-right_owner .message-time>span{background-color:${this.state.rightColor};}.content-left_owner .message-time>div.separate-p,.content-left_owner .message-time>span{background-color:${this.state.leftColor};}.content-right_owner .message-time>div.separate-p:before{content:'';width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:4px solid ${this.state.rightColor};position:absolute;right:-3px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);top:7px;}.content-left_owner .message-time>div.separate-p:before{content:'';width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:4px solid ${this.state.leftColor};position:absolute;left:-3px;-webkit-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg);top:7px;}.is-typing-wrap{margin-left:20px;margin-bottom:7px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:13px;}.is-typing-wrap .spinner{margin-top:5px;margin-left:10px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcZWxlbWVudHNcXFByaXZhdGVNZXNzYWdlQ29udGVudC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ1dtQyxBQUdtQyxBQWNVLEFBRUssQUFJYixBQU1JLEFBR1IsQUFLYSxBQUlBLEFBR1IsQUFRQSxBQU9BLEFBUUksQUFhQSxBQUdDLEFBR0wsQUFTRSxBQU15QixBQU03QixBQUd5QixBQUdyQixBQUlNLEFBS1gsQUFpQk0sQUFJTCxBQVNBLEFBU0ksQUFLSCxBQWNTLEFBS1QsQUFhTSxBQW9CUCxBQWNBLEFBZVUsQUFJUixBQUdLLEFBd0JSLEFBS0MsQUFZQSxBQVlhLEFBS04sQUFhUCxBQUdDLEFBSXdCLEFBSUMsQUFHWixBQUlWLEFBYStCLEFBR0EsQUFHbkMsQUFZQSxBQWFNLEFBT0YsVUF6V0wsQUEwRkssQUE0SkksQ0EzS3ZCLEFBb0NzQixBQVNBLEFBa0VWLEFBY0EsQUFtRFUsQUFZQSxBQThCdEIsQUFxQ1ksQUFZQSxDQW5YQyxBQW9CUyxBQStJRyxBQW1CQSxBQStJekIsQ0E3RUEsRUE1SjJCLEFBa0JULEFBZ0RELEFBc0xFLEFBbURFLENBN1dyQixBQThHc0IsQ0F4RUosQUFhbEIsQUFtVHNCLENBaFR0QixBQW1IZ0IsQUF3REQsQUEwREMsQ0E3RkgsQUFjQSxBQWtJQSxBQVlBLEVBbFFxQixBQStEQSxBQW1FQSxDQXRObEMsQ0E3QmdCLEFBaUNoQixBQUlBLENBMFFBLENBZ0NBLEdBdkhxQyxBQWNBLEFBa0lBLEFBWUEsQ0F0UXJDLEFBOEJjLEFBU0EsQUFzRzhCLEFBd0I3QixBQUtMLEFBWUEsQ0FoUlksQUErS1AsQUFrSEUsQ0FyUEssQUFvUkQsQ0FtRHJCLENBcE8wQixBQW1CQSxDQTlDMUIsQ0FpSmEsQUFZQSxBQTJGSSxDQXRSakIsQUE4TjBCLENBdlVOLEFBMlVwQixDQWhQc0IsQ0FpRFAsQUFTQSxDQXJEVSxBQW1MekIsQ0FoRmdCLEVBa0hELENBNUJKLEFBWUksRUEwRGYsQUFHQSxFQTlVcUIsQUFrR0gsQUE4Tk8sQ0FwUkksQ0E2RWUsQUFTQSxDQXJDNUMsQUErRDBCLEFBbUUxQixBQXVDWSxFQXRGRyxDQWtIQyxDQXJUQSxBQWtLRCxBQW1CQSxBQWdIQyxDQTFNaEIsRUE0T0EsQ0E3Q2lCLEVBMUxELEFBdUh3QixBQWNBLEFBa0lBLEFBWUEsQ0E3UGIsRUE4RVIsQ0FoTG5CLENBK0lzQixBQW1CQSxBQWdJVCxDQWhCRyxFQXJTRyxBQXlQSyxBQTBGSCxHQTFVSSxBQWlSVixDQTFMZixBQStFQSxDQTFJK0IsQUFRUCxBQU9FLEFBV0osQUFnQkksQ0F1T2hCLElBbEhnQixBQWtHVixFQWlCQSxFQTVCQSxDQXhITSxBQW1CQSxDQWhFQSxDQXJIRixBQW1WTCxDQXpVZSxFQWdKRCxBQStGSixDQTlHZixBQVNHLENBa0pPLENBdk9ELENBd1BBLEVBNUJDLENBL0lMLENBMEVtQixBQWNILEFBZ0haLEFBa0JvQyxBQVlBLEVBN054QyxFQStDTyxDQWpDSCxBQW1CQSxDQWhFTCxDQXJIaUIsR0ErRGYsQUE2RWhCLEFBMEpjLENBaUJRLENBcUVDLENBdk92QixBQW9Hd0IsQ0FrQ3hCLENBeURzQixDQTlOQSxJQTZDSSxBQW1CQSxBQWlIMUIsRUF2T3NCLEFBb0lULEtBZ0NTLEVBcUZ0QixDQW5Hc0IsQ0FqQlQsRUFxREksQUEyRkssQ0E5TkksRUF0SFksSUFnRXBCLEFBcUlGLEVBbENLLEFBbUJRLEdBOENkLEdBZEEsR0ErSEssQUFnQkUsQUFZQSxDQTNLTixFQXJJRyxDQWZRLEFBMkJGLENBd0pVLEdBakVlLEFBbURmLEtBNUtmLEFBNEpOLEdBaEJDLEFBK0pVLEVBcFJGLEFBb1NSLEFBWUQsS0ExS0MsSUFoQkksQ0EyTFcsQ0F2VVgsQUEyVFEsRUFwVUQsR0FzS04sRUE2QlcsQ0FuSy9CLEFBb1JBLENBOUxBLENBK0QrQixHQS9CL0IsRUE1SWUsTUE2SkksSUFyQ0osQUF1TkksQ0E5VW5CLENBNE1rQyxNQW5JVCxDQWdIRSxFQXRPVCxBQXFLQyxDQW1EUSxHQW9LM0IsV0F0TkEsQ0FyS0EsRUFzSG9CLEdBbUlVLEVBaERSLFdBbEZQLE1BM0NNLENBOEhGLEdBeEtFLENBc0ZILEFBOE9OLEVBNUdjLENBek1MLEtBc1RyQixBQVdZLEdBdktaLENBOUhrQixJQTFDQyxBQWdWbkIsSUFqVWtCLE1BNEJJLEtBMUNQLEdBZU8sQUFtTFQsR0FkQSxLQW5MYixDQWtNZSxDQXhKZixFQTBJQSxNQXJLQSxFQW9MQSxFQS9HdUIsbUJBQ0QsS0FpSVosTUFDSyxPQWpJTyxJQWtJSixjQWpJbEIsQUFrSWdCLFlBQ2EseUJBQ2Esc0NBQ2hCLHNCQUNRLG1IQUNQLHVCQUNiLFVBQ0ssc0NBQ0csa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcZWxlbWVudHNcXFByaXZhdGVNZXNzYWdlQ29udGVudC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgVUlfRUxFTUVOVFMgZnJvbSBcImNvbXBvbmVudHMvc2hhcmVkL1VJXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICdjb21wb25lbnRzL0ljb25zL2ljb24nO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC5kZWJvdW5jZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgX19MT0FEX01PUkVfTUVTU0FHRVMsXHJcbn0gZnJvbSAnc3RvcmUvYWN0aW9ucyc7XHJcbmltcG9ydCB7IEJ1cyB9IGZyb20gJ2NvbXBvbmVudHMvc2hhcmVkL2hlbHBlcnMvQnVzJztcclxuaW1wb3J0IHtcclxuICAgIF9FVkVSWV9QQUdFX0xJTUlUX01FU1NBR0VTXHJcbn0gZnJvbSAnY29tcG9uZW50cy9zaGFyZWQvaGVscGVycy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBfX2dldFVzZXJNZXNzYWdlcyB9IGZyb20gJ3N0b3JlL3Jlc2VsZWN0JztcclxuaW1wb3J0IHtcclxuICAgIF9fZGV0ZWN0Q3J5cHRJY29uXHJcbn0gZnJvbSAnY29tcG9uZW50cy9zaGFyZWQvaGVscGVycy9nbG9iYWwtZnVuY3Rpb25zJztcclxuaW1wb3J0IHtcclxuICAgIF9fRURJVF9NRVNTQUdFLFxyXG4gICAgX19SRU1PVkVfTUVTU0FHRSxcclxufSBmcm9tIFwic3RvcmUvc2FnYVwiO1xyXG5cclxuY2xhc3MgUHJpdmF0ZU1lc3NhZ2VDb250ZW50IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsZWZ0Q29sb3I6IHRoaXMucHJvcHMuYWN0aXZlVXNlciAmJiB0aGlzLnByb3BzLmFjdGl2ZVVzZXI/LmNvbG9yIHx8ICcjMEM0NjUxJyxcclxuICAgICAgICAgICAgcmlnaHRDb2xvcjogdGhpcy5wcm9wcy5hY3RpdmVVc2VyICYmIHRoaXMucHJvcHMubG9nZ2VkVXNlcj8uY29sb3IgfHwgJyMxQkJDOUInLFxyXG4gICAgICAgICAgICBzY3JvbGxMb2FkaW5nQWxsb3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzU2VsZWN0b3I6IFtdLFxyXG4gICAgICAgICAgICBlbmNyeXB0SWNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2Nyb2xsUG9zaXRpb246IG51bGwsXHJcbiAgICAgICAgICAgIHByZXZpb3VzU2Nyb2xsSGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICBwcmV2aW91c1Njcm9sbFRvcDogMCxcclxuICAgICAgICAgICAgbG9hZGluZ01lc3NhZ2VzOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNFZGl0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNSZW1vdmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGVkaXRpbmdNc2dJbmRleDogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX21lc3NhZ2VzRW5kICAgICAgICAgICA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRG9tQ2xpY2sgICAgICAgID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9oYW5kbGVDbGlja1JlbW92ZSAgICAgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX19zY3JvbGxUb0JvdHRvbSAgICAgICA9IHRoaXMuX19zY3JvbGxUb0JvdHRvbS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX19oYW5kbGVTY3JvbGxUb3AgICAgICA9IHRoaXMuX19oYW5kbGVTY3JvbGxUb3AuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fc2hvd0VuY3J5cHRQb3BVcCAgICAgPSB0aGlzLl9fc2hvd0VuY3J5cHRQb3BVcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX19kb0VuY3J5cHRUeXBlICAgICAgICA9IHRoaXMuX19kb0VuY3J5cHRUeXBlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fX2hpZGVQb3BVcEVuY3J5cHQgICAgID0gdGhpcy5fX2hpZGVQb3BVcEVuY3J5cHQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fZWRpdE1lc3NhZ2UgICAgICAgICAgPSB0aGlzLl9fZWRpdE1lc3NhZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fcmVtb3ZlTWVzc2FnZUNvbmZpcm0gPSB0aGlzLl9fcmVtb3ZlTWVzc2FnZUNvbmZpcm0uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fcmVtb3ZlTWVzc2FnZSAgICAgICAgPSB0aGlzLl9fcmVtb3ZlTWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX19jbGlja1JlbW92ZVBvcFVwID0gdGhpcy5fX2NsaWNrUmVtb3ZlUG9wVXAuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9zY3JvbGxDb250ZW50ICAgICA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgIEJ1cy5zdWJzY3JpYmUoJ2NhbmNlbEVkaXRpbmcnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEJ1cy5zdWJzY3JpYmUoJ2VuZEVkaXRpbmcnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzUmVtb3Zpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZWRpdGluZ01zZ0luZGV4OiBudWxsLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX19zY3JvbGxUb0JvdHRvbSAoYmVoYXZpb3IpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZXNFbmQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IChiZWhhdmlvciA/ICdzbW9vdGgnIDogJ2F1dG8nKX0pO1xyXG4gICAgICAgIH0sIDApXHJcbiAgICB9XHJcblxyXG4gICAgX19oYW5kbGVTY3JvbGxUb3AgKGUpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2Nyb2xsTG9hZGluZ0FsbG93ICYmIGUudGFyZ2V0LnNjcm9sbFRvcCA8IDUwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNTY3JvbGxUb3A6IHRoaXMuX3Njcm9sbENvbnRlbnQ/LnNjcm9sbFRvcCxcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzU2Nyb2xsSGVpZ2h0OiB0aGlzLl9zY3JvbGxDb250ZW50Py5zY3JvbGxIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxMb2FkaW5nQWxsb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ01lc3NhZ2VzOiB0cnVlLFxyXG4gICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLl9fTE9BRF9NT1JFX01FU1NBR0VTKDEpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxMb2FkaW5nQWxsb3c6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX19zaG93RW5jcnlwdFBvcFVwIChldnQsIGluZGV4LCBpc0tleSkge1xyXG4gICAgICAgIGlmIChldnQudGFyZ2V0LmNsb3Nlc3QoJy5yZW1vdmUtY29uZmlybS1jb250YWluZXInKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBfY3VycmVudFNyYyA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLnNlcGFyYXRlLXAnKTtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcub3BlbmVkLWVuY3J5cHRQb3BVcCcpICYmXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLm9wZW5lZC1lbmNyeXB0UG9wVXAnKSAhPT0gX2N1cnJlbnRTcmNcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcub3BlbmVkLWVuY3J5cHRQb3BVcCcpLnNldEF0dHJpYnV0ZSgnZGF0YS1oaW50LWVuY3J5cHQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLm9wZW5lZC1lbmNyeXB0UG9wVXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuZWQtZW5jcnlwdFBvcFVwJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzS2V5KSByZXR1cm47XHJcbiAgICAgICAgaWYgKF9jdXJyZW50U3JjKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFJY29uID0gX2N1cnJlbnRTcmMuZ2V0QXR0cmlidXRlKCdkYXRhLWhpbnQtZW5jcnlwdCcpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1lc3NhZ2VzU2VsZWN0b3IgPSBbLi4udGhpcy5zdGF0ZS5tZXNzYWdlc1NlbGVjdG9yXTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZXNzYWdlc1NlbGVjdG9yW2luZGV4XS5pc0VuY3J5cHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlbmNyeXB0SWNvbjogSlNPTi5wYXJzZShkYXRhSWNvbiksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlc1NlbGVjdG9yOiB0aGlzLnN0YXRlLm1lc3NhZ2VzU2VsZWN0b3JcclxuICAgICAgICAgICAgfSwgKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcclxuICAgICAgICAgICAgX2N1cnJlbnRTcmMuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkLWVuY3J5cHRQb3BVcCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVEb21DbGljayA9IHRoaXMuX19oaWRlUG9wVXBFbmNyeXB0LmJpbmQodGhpcywgaW5kZXgpKVxyXG4gICAgICAgIH0sIDApXHJcbiAgICB9XHJcblxyXG4gICAgX19oaWRlUG9wVXBFbmNyeXB0IChpbmRleCwgZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3RvciA9IFsuLi50aGlzLnN0YXRlLm1lc3NhZ2VzU2VsZWN0b3JdO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnN0YXRlLm1lc3NhZ2VzU2VsZWN0b3JbaW5kZXhdLmlzRW5jcnlwdDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWVzc2FnZXNTZWxlY3RvcjogdGhpcy5zdGF0ZS5tZXNzYWdlc1NlbGVjdG9yXHJcbiAgICAgICAgfSwgKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcclxuXHJcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVEb21DbGljayk7XHJcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCdkaXZbZGF0YS1oaW50LWVuY3J5cHRdJykgJiYgZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcub3BlbmVkLWVuY3J5cHRQb3BVcCcpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLm9wZW5lZC1lbmNyeXB0UG9wVXAnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGludC1lbmNyeXB0JywgZmFsc2UpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuZWQtZW5jcnlwdFBvcFVwJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkLWVuY3J5cHRQb3BVcCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9fZG9FbmNyeXB0VHlwZSAoZSwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBfY3VycmVudFNyYyA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zZXBhcmF0ZS1wJyk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVuY3J5cHRJY29uOiAhdGhpcy5zdGF0ZS5lbmNyeXB0SWNvblxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgX2N1cnJlbnRTcmMuc2V0QXR0cmlidXRlKCdkYXRhLWhpbnQtZW5jcnlwdCcsIHRoaXMuc3RhdGUuZW5jcnlwdEljb24pO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdFbmNyeXB0aW9uID0gWy4uLnRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3Rvcl07XHJcbiAgICAgICAgICAgIG5ld0VuY3J5cHRpb25baW5kZXhdLmlzRW5jcnlwdCA9IHRoaXMuc3RhdGUuZW5jcnlwdEljb247XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNTZWxlY3RvcjogbmV3RW5jcnlwdGlvblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX19lZGl0TWVzc2FnZSAoZXZ0LCBtc2csIHRpbWUpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvcHMubWVzc2FnZXMuZmluZEluZGV4KG1zZyA9PiBtc2cudGltZSA9PT0gdGltZSk7XHJcbiAgICAgICAgX19FRElUX01FU1NBR0UobnVsbCwgaW5kZXgsIHtpZFVzZXI6IHRoaXMucHJvcHMuYWN0aXZlVXNlcj8uaWQsIG15SWQ6IHRoaXMucHJvcHMubG9nZ2VkVXNlcj8uaWR9KS5uZXh0KCk7XHJcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0VkaXRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGVkaXRpbmdNc2dJbmRleDogaW5kZXhcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEJ1cy5kaXNwYXRjaCgnZWRpdE1lc3NhZ2UnLCB7bXNnLCBpbmRleH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgIF9fcmVtb3ZlTWVzc2FnZUNvbmZpcm0gKGV2dCkge1xyXG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCBfY3VycmVudFNyYyAgICAgID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuc2VwYXJhdGUtcCcpO1xyXG4gICAgICAgIGNvbnN0IGFscmVhZHlEZWNsYXJlZCAgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5tZXNzYWdlcy1jb250ZW50Jyk/LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuZWQtcG9wLWNvbmZpcm0tcmVtb3ZlJyk7XHJcbiAgICAgICAgaWYgKGFscmVhZHlEZWNsYXJlZCkge1xyXG4gICAgICAgICAgICBhbHJlYWR5RGVjbGFyZWQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkLXBvcC1jb25maXJtLXJlbW92ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfY3VycmVudFNyYy5jbGFzc0xpc3QuYWRkKCdvcGVuZWQtcG9wLWNvbmZpcm0tcmVtb3ZlJyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2xpY2tSZW1vdmUgPSB0aGlzLl9fY2xpY2tSZW1vdmVQb3BVcC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIF9fcmVtb3ZlTWVzc2FnZSAodGltZSkge1xyXG4gICAgICAgIF9fUkVNT1ZFX01FU1NBR0UodGltZSwge2lkVXNlcjogdGhpcy5wcm9wcy5hY3RpdmVVc2VyPy5pZCwgbXlJZDogdGhpcy5wcm9wcy5sb2dnZWRVc2VyPy5pZH0pLm5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBfX2NsaWNrUmVtb3ZlUG9wVXAgKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IGFscmVhZHlEZWNsYXJlZCAgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5tZXNzYWdlcy1jb250ZW50Jyk/LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuZWQtcG9wLWNvbmZpcm0tcmVtb3ZlJyk7XHJcbiAgICAgICAgaWYgKGFscmVhZHlEZWNsYXJlZCAmJiAhZXZ0LnRhcmdldC5jbG9zZXN0KCcucmVtb3ZlLWNvbmZpcm0tY29udGFpbmVyJykgfHwgZXZ0LnRhcmdldC5jbG9zZXN0KCcudHJpZ2dlci1jbG9zZS1kaWFsb2cnKSkge1xyXG4gICAgICAgICAgICBhbHJlYWR5RGVjbGFyZWQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkLXBvcC1jb25maXJtLXJlbW92ZScpO1xyXG4gICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrUmVtb3ZlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG4gICAgICAgIC8vIGlmIChwcmV2UHJvcHMuYWN0aXZlVXNlci5pc1R5cGluZyAhPT0gdGhpcy5wcm9wcy5hY3RpdmVVc2VyLmlzVHlwaW5nKSB7IHRvZG9cclxuICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5hY3RpdmVVc2VyLmlzVHlwaW5nICYmIHRoaXMuX19zY3JvbGxUb0JvdHRvbSgnYmVoYXZpb3InKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIERldGVjdCBpZiB0aGVyZSBhcmUgcmVtb3ZlZCBtZXNzYWdlXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlVXNlcj8ucmVtb3ZlZE1lc3NhZ2VJbmRleCA+PSAwICYmXHJcbiAgICAgICAgICAgIChwcmV2UHJvcHMubWVzc2FnZXNbdGhpcy5wcm9wcy5hY3RpdmVVc2VyLnJlbW92ZWRNZXNzYWdlSW5kZXhdPy5yZW1vdmVkICE9PSB0aGlzLnByb3BzLm1lc3NhZ2VzW3RoaXMucHJvcHMuYWN0aXZlVXNlci5yZW1vdmVkTWVzc2FnZUluZGV4XT8ucmVtb3ZlZCB8fFxyXG4gICAgICAgICAgICAhKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3Rvci5sZW5ndGggLSAodGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGggLSB0aGlzLnByb3BzLmFjdGl2ZVVzZXIucmVtb3ZlZE1lc3NhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3RvcltjdXJyZW50SW5kZXhdPy5yZW1vdmVkXHJcbiAgICAgICAgICAgIH0pKCkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3Rvci5sZW5ndGggLSAodGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGggLSB0aGlzLnByb3BzLmFjdGl2ZVVzZXIucmVtb3ZlZE1lc3NhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RW5jcnlwdGlvbiA9IFsuLi50aGlzLnN0YXRlLm1lc3NhZ2VzU2VsZWN0b3JdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld0VuY3J5cHRpb25bY3VycmVudEluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0VuY3J5cHRpb25bY3VycmVudEluZGV4XS5yZW1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXNTZWxlY3RvcjogbmV3RW5jcnlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdoZW4gZWRpdGluZyBoYXZlIGJlZW4gZmluaXNoZWRcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVVc2VyPy5lZGl0ZWRNc2dJbmRleCA+PSAwICYmXHJcbiAgICAgICAgICAgICh0aGlzLnByb3BzLm1lc3NhZ2VzW3RoaXMucHJvcHMuYWN0aXZlVXNlcj8uZWRpdGVkTXNnSW5kZXhdLm1lc3NhZ2UgIT09IHByZXZQcm9wcy5tZXNzYWdlc1t0aGlzLnByb3BzLmFjdGl2ZVVzZXI/LmVkaXRlZE1zZ0luZGV4XS5tZXNzYWdlIHx8XHJcbiAgICAgICAgICAgICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLnN0YXRlLm1lc3NhZ2VzU2VsZWN0b3IubGVuZ3RoIC0gKHRoaXMucHJvcHMubWVzc2FnZXMubGVuZ3RoIC0gdGhpcy5wcm9wcy5hY3RpdmVVc2VyPy5lZGl0ZWRNc2dJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3RvcltjdXJyZW50SW5kZXhdLm1lc3NhZ2UgIT09IHRoaXMucHJvcHMubWVzc2FnZXNbdGhpcy5wcm9wcy5hY3RpdmVVc2VyPy5lZGl0ZWRNc2dJbmRleF0ubWVzc2FnZTtcclxuICAgICAgICAgICAgfSkoKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5zdGF0ZS5tZXNzYWdlc1NlbGVjdG9yLmxlbmd0aCAtICh0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aCAtIHRoaXMucHJvcHMuYWN0aXZlVXNlcj8uZWRpdGVkTXNnSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRlZEFycmF5ID0gWy4uLnRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3Rvcl07XHJcbiAgICAgICAgICAgICAgICBlZGl0ZWRBcnJheVtjdXJyZW50SW5kZXhdID0gdGhpcy5wcm9wcy5tZXNzYWdlc1t0aGlzLnByb3BzLmFjdGl2ZVVzZXI/LmVkaXRlZE1zZ0luZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRWRpdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZW1vdmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdGluZ01zZ0luZGV4OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzU2VsZWN0b3I6IGVkaXRlZEFycmF5XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZW5kaW5nIG5vdGlmaWNhdGlvbiB3aGVuIHRoZXJlIHdhcyBub3QgYW55IG1lc3NhZ2VzXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZXMubGVuZ3RoID09PSAxICYmIHRoaXMucHJvcHMubWVzc2FnZXNbMF0ubWVzc2FnZSA9PT0gJycgfHwgcHJldlByb3BzLm1lc3NhZ2VzLmxlbmd0aCA9PT0gMSAmJiBwcmV2UHJvcHMubWVzc2FnZXNbMF0ubWVzc2FnZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tZXNzYWdlc0hhdmVCZWVuRGVsZXRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBVcGRhdGUgbWVzc2FnZSBsaXN0XHJcbiAgICAgICAgaWYgKChwcmV2UHJvcHMubWVzc2FnZXNQYWdlICE9PSB0aGlzLnByb3BzLm1lc3NhZ2VzUGFnZSB8fCBwcmV2UHJvcHMubWVzc2FnZXMubGVuZ3RoICE9PSB0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgaWYgKCh0aGlzLnByb3BzLm1lc3NhZ2VzUGFnZSAtIDEpICogX0VWRVJZX1BBR0VfTElNSVRfTUVTU0FHRVMgPD0gdGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxMb2FkaW5nQWxsb3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01lc3NhZ2VzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlc1NlbGVjdG9yOiBfX2dldFVzZXJNZXNzYWdlcyh7ZGF0YTogdGhpcy5wcm9wcy5tZXNzYWdlcywgcGFnZTogdGhpcy5wcm9wcy5tZXNzYWdlc1BhZ2V9KVxyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2UHJvcHMubWVzc2FnZXMubGVuZ3RoICE9PSB0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fc2Nyb2xsVG9Cb3R0b20oJ2JlaGF2aW9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsQ29udGVudC5zY3JvbGxUbygwLCAodGhpcy5fc2Nyb2xsQ29udGVudC5zY3JvbGxIZWlnaHQgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcmV2aW91c1Njcm9sbEhlaWdodCArIHRoaXMuc3RhdGUucHJldmlvdXNTY3JvbGxUb3AgLSA0NSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5fX0xPQURfTU9SRV9NRVNTQUdFUygtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzU2VsZWN0b3I6IF9fZ2V0VXNlck1lc3NhZ2VzKHtkYXRhOiB0aGlzLnByb3BzLm1lc3NhZ2VzLCBwYWdlOiB0aGlzLnByb3BzLm1lc3NhZ2VzUGFnZX0pXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxDb250ZW50Lm9uc2Nyb2xsID0gZGVib3VuY2UoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aCA+IF9FVkVSWV9QQUdFX0xJTUlUX01FU1NBR0VTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2hhbmRsZVNjcm9sbFRvcChlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB0aGlzLl9fc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrUmVtb3ZlKTtcclxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZURvbUNsaWNrKTtcclxuICAgICAgICBCdXMudW5zdWJzY3JpYmUoJ2NhbmNlbEVkaXRpbmcnKTtcclxuICAgICAgICBCdXMudW5zdWJzY3JpYmUoJ2VuZEVkaXRpbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRk4gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmFjdGl2ZVVzZXIgPyB0aGlzLnByb3BzLmFjdGl2ZVVzZXIuZnVsbE5hbWUuc3BsaXQoJyAnKVswXS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpIDogJyc7XHJcbiAgICB9XHJcbiAgICBnZXQgTE4gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmFjdGl2ZVVzZXIgPyB0aGlzLnByb3BzLmFjdGl2ZVVzZXIuZnVsbE5hbWUuc3BsaXQoJyAnKVsxXS5zbGljZSgwLCAxKSB8fCAnJy50b1VwcGVyQ2FzZSgpIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1lc3NhZ2VzLWNvbnRlbnQgJHt0aGlzLnN0YXRlLmxvYWRpbmdNZXNzYWdlcyA/ICdzY3JvbGwtZGlzYWJsZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17KGVsKSA9PiB0aGlzLl9zY3JvbGxDb250ZW50ID0gZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmdNZXNzYWdlcyAmJiA8ZGl2IGNsYXNzTmFtZT1cInNibC1jaXJjXCI+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2VzU2VsZWN0b3IubWFwKChtZXNzYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfaXNPd25lciA9IG1lc3NhZ2Uub3duZXIgPT09ICdNZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9kYXRhTVNHID0gX2lzT3duZXIgPyB0aGlzLnByb3BzLmxvZ2dlZFVzZXIgOiB0aGlzLnByb3BzLmFjdGl2ZVVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2RhdGFNU0cpIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttZXNzYWdlLnRpbWUgKyBpbmRleH0gY2xhc3NOYW1lPXtfaXNPd25lciA/ICdjb250ZW50LXJpZ2h0X293bmVyJyA6ICdjb250ZW50LWxlZnRfb3duZXInfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VUlfRUxFTUVOVFMuVXNlckltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17X2RhdGFNU0cuZnVsbE5hbWUuc3BsaXQoJyAnKVswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU9e19kYXRhTVNHLmZ1bGxOYW1lLnNwbGl0KCcgJylbMV0gfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e19kYXRhTVNHLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UucmVtb3ZlZCA/IDxkaXYgY2xhc3NOYW1lPVwicmVtb3ZlZC1tZXNzYWdlXCI+UmVtb3ZlZCBtZXNzYWdlPC9kaXY+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lc3NhZ2UtdGltZSAke19fZGV0ZWN0Q3J5cHRJY29uKG1lc3NhZ2UpID8gJ2NyeXB0LW1lc3NhZ2UnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbWVzc2FnZS10eXBlPXttZXNzYWdlLmVuY3J5cHRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1tZXNzYWdlLWtleT17bWVzc2FnZS5rZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXBhcmF0ZS1wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLl9fc2hvd0VuY3J5cHRQb3BVcChlLCBpbmRleCwgX19kZXRlY3RDcnlwdEljb24obWVzc2FnZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oaW50LWVuY3J5cHQ9e2ZhbHNlfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KF9pc093bmVyICYmICFfX2RldGVjdENyeXB0SWNvbihtZXNzYWdlKSAmJiAoIXRoaXMuc3RhdGUuaXNFZGl0aW5nICYmICF0aGlzLnN0YXRlLmlzUmVtb3ZpbmcpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWRpdC1yZW1vdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJsbnIgbG5yLXBlbmNpbFwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLl9fZWRpdE1lc3NhZ2UoZSwgbWVzc2FnZSwgbWVzc2FnZS50aW1lKX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImxuciBsbnItY3Jvc3NcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5fX3JlbW92ZU1lc3NhZ2VDb25maXJtKGUpfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZW1vdmUtY29uZmlybS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJlIHlvdSBzdXJlP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRyaWdnZXItY2xvc2UtZGlhbG9nXCI+Tm88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB0aGlzLl9fcmVtb3ZlTWVzc2FnZShtZXNzYWdlLnRpbWUpfT5ZZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZW5jcnlwdFBvcFVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLl9fZG9FbmNyeXB0VHlwZShlLCBpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVuY3J5cHRJY29uID8gPEljb24gbmFtZT1cInVubG9ja2VkXCIgLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJsb2NrZWRcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X19kZXRlY3RDcnlwdEljb24obWVzc2FnZSkgPyA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9rZXkucG5nXCIgYWx0PVwiaWNvblNlbmRcIi8+IDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21lc3NhZ2UuaXNFbmNyeXB0ID09PSBmYWxzZSA/IG1lc3NhZ2UuZGVjcnlwdGVkTXNnIDovL3RoZXJlIHdpbGwgYmUgc29tZSBjYXNlIHdoaWNoIGlzIGVxdWFsIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmlzRW5jcnlwdCA9PT0gdHJ1ZSA/IG1lc3NhZ2UuZW5jcnlwdGVkTXNnIDogbWVzc2FnZS5tZXNzYWdlfSA8L3NwYW4+fSB7bWVzc2FnZS5lZGl0ZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZWRpdGVkLW1zZ1wiPihlZGl0ZWQpPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWUtd3JhcFwiPnttb21lbnQoK21lc3NhZ2UudGltZSkuZm9ybWF0KCdsbGwnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfaXNPd25lciA/IChpbmRleCA9PT0gdGhpcy5zdGF0ZS5tZXNzYWdlc1NlbGVjdG9yLmxlbmd0aCAtIDEpID8gdGhpcy5wcm9wcy5hY3RpdmVVc2VyLmlzU2VlbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1cy1tZXNzYWdlXCI+U2VlbjwvZGl2PjogPGRpdiBjbGFzc05hbWU9XCJzdGF0dXMtbWVzc2FnZVwiPkRlbGl2ZXJlZDwvZGl2PiA6ICcnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17KGVsKSA9PiB7IHRoaXMuX21lc3NhZ2VzRW5kID0gZWwgfX0+ey8qU2Nyb2xsIEludG8gVmlldyovfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3RpdmVVc2VyLmlzVHlwaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwiaXMtdHlwaW5nLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5GTiArIHRoaXMuTE4gKyAnIGlzIHR5cGluZyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGlubmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvdW5jZTEnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm91bmNlMic+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3VuY2UzJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgICAgLnNibC1jaXJjIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1YTVhNWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2VzLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNjcm9sbC1kaXNhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2VzLWNvbnRlbnQgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAubWVzc2FnZXMtY29udGVudCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAubWVzc2FnZXMtY29udGVudCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LWxlZnRfb3duZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDdweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtbGVmdF9vd25lciAubWVzc2FnZS10aW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1sZWZ0X293bmVyIC5yZW1vdmVkLW1lc3NhZ2UsIC5jb250ZW50LXJpZ2h0X293bmVyIC5yZW1vdmVkLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDdkNztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc2NzU3NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1sZWZ0X293bmVyIC5yZW1vdmVkLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLnJlbW92ZWQtbWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LWxlZnRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wIC5lZGl0ZWQtbXNnLCBcclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAgLmVkaXRlZC1tc2d7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtbGVmdF9vd25lciAuY3J5cHQtbWVzc2FnZSA+IGRpdi5zZXBhcmF0ZS1wLCBcclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAuY3J5cHQtbWVzc2FnZSA+IGRpdi5zZXBhcmF0ZS1wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LWxlZnRfb3duZXIgLmNyeXB0LW1lc3NhZ2UgPiBkaXYuc2VwYXJhdGUtcCBpbWcsIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5jcnlwdC1tZXNzYWdlID4gZGl2LnNlcGFyYXRlLXAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtbGVmdF9vd25lciAuY3J5cHQtbWVzc2FnZSA+IGRpdi5zZXBhcmF0ZS1wOmJlZm9yZSwgLmNvbnRlbnQtcmlnaHRfb3duZXIgLmNyeXB0LW1lc3NhZ2UgPiBkaXYuc2VwYXJhdGUtcDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlLXRpbWUgLnN0YXR1cy1tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQyNDI0MjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2UtdGltZTpob3ZlciA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IHNwYW4sXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtbGVmdF9vd25lciAubWVzc2FnZS10aW1lID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAgLmVkaXQtcmVtb3ZlIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA0cHg7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcCAuZWRpdC1yZW1vdmUgaS5sbnItcGVuY2lsOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLnJpZ2h0Q29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAgLmVkaXQtcmVtb3ZlIGkubG5yLWNyb3NzOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLnJpZ2h0Q29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAgLmVkaXQtcmVtb3ZlIC5yZW1vdmUtY29uZmlybS1jb250YWluZXIgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4IDAgMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wIC5lZGl0LXJlbW92ZSAucmVtb3ZlLWNvbmZpcm0tY29udGFpbmVyIHAgPiBhOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMuc3RhdGUucmlnaHRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAub3BlbmVkLXBvcC1jb25maXJtLXJlbW92ZSAuZWRpdC1yZW1vdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTE4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wIC5lZGl0LXJlbW92ZSAucmVtb3ZlLWNvbmZpcm0tY29udGFpbmVyIHAgPiBhOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M1Y2JjYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcCAuZWRpdC1yZW1vdmUgLnJlbW92ZS1jb25maXJtLWNvbnRhaW5lcnsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcCAuZWRpdC1yZW1vdmUgLnJlbW92ZS1jb25maXJtLWNvbnRhaW5lcjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNkY2RjZGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC00cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcCAuZWRpdC1yZW1vdmUgLnJlbW92ZS1jb25maXJtLWNvbnRhaW5lcjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLm9wZW5lZC1wb3AtY29uZmlybS1yZW1vdmUgLnJlbW92ZS1jb25maXJtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAub3BlbmVkLXBvcC1jb25maXJtLXJlbW92ZSArIC50aW1lLXdyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAgLmVkaXQtcmVtb3Zle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoaXMuc3RhdGUucmlnaHRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcDpob3ZlciAuZWRpdC1yZW1vdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAgLmVkaXQtcmVtb3ZlOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMC44cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcCAuZWRpdC1yZW1vdmU6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0xcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAuOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuZWQtZW5jcnlwdFBvcFVwIC5lZGl0LXJlbW92ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wIC5lbmNyeXB0UG9wVXAsXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtbGVmdF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAgLmVuY3J5cHRQb3BVcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wIC5lbmNyeXB0UG9wVXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtbGVmdF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAgLmVuY3J5cHRQb3BVcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAub3BlbmVkLWVuY3J5cHRQb3BVcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuZWQtZW5jcnlwdFBvcFVwOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZTdlN2U3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuZWQtZW5jcnlwdFBvcFVwIC5lbmNyeXB0UG9wVXB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcCxcclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1sZWZ0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wLCAuY29udGVudC1yaWdodF9vd25lciAubWVzc2FnZS10aW1lID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5zdGF0ZS5yaWdodENvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtbGVmdF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAsIC5jb250ZW50LWxlZnRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMuc3RhdGUubGVmdENvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAke3RoaXMuc3RhdGUucmlnaHRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0zcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtbGVmdF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXA6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICR7dGhpcy5zdGF0ZS5sZWZ0Q29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0zcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmlzLXR5cGluZy13cmFwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaXMtdHlwaW5nLXdyYXAgLnNwaW5uZXJ7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblByaXZhdGVNZXNzYWdlQ29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgICBtZXNzYWdlc0hhdmVCZWVuRGVsZXRlZDogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbG9nZ2VkVXNlcjogc3RhdGUuY2hhdC5sb2dnZWRVc2VyLFxyXG4gICAgYWN0aXZlVXNlcjogc3RhdGUuY2hhdC5hY3RpdmVVc2VyLFxyXG4gICAgbWVzc2FnZXM6IHN0YXRlLmNoYXQuYWN0aXZlVXNlck1lc3NhZ2VzLFxyXG4gICAgbWVzc2FnZXNQYWdlOiBzdGF0ZS5jaGF0Lm1lc3NhZ2VzUGFnZSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBfX0xPQURfTU9SRV9NRVNTQUdFU1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFByaXZhdGVNZXNzYWdlQ29udGVudCk7XHJcbiJdfQ== */
/*@ sourceURL=C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\elements\\PrivateMessageContent.jsx */`));
  }

}

PrivateMessageContent.propTypes = {
  messagesHaveBeenDeleted: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

const mapStateToProps = state => ({
  loggedUser: state.chat.loggedUser,
  activeUser: state.chat.activeUser,
  messages: state.chat.activeUserMessages,
  messagesPage: state.chat.messagesPage
});

const mapDispatchToProps = {
  __LOAD_MORE_MESSAGES: store_actions__WEBPACK_IMPORTED_MODULE_8__["__LOAD_MORE_MESSAGES"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(PrivateMessageContent));

/***/ }),

/***/ "./components/elements/TextAreaMessage.jsx":
/*!*************************************************!*\
  !*** ./components/elements/TextAreaMessage.jsx ***!
  \*************************************************/
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
/* harmony import */ var hooks_use_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/use-debounce */ "./hooks/use-debounce.jsx");
/* harmony import */ var _store_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/saga */ "./store/saga/index.js");
/* harmony import */ var components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/shared/helpers/Bus */ "./components/shared/helpers/Bus.js");
/* harmony import */ var components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\elements\\TextAreaMessage.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SendIcon = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.inProcessing ? __jsx("div", {
    className: "jsx-148590241" + " " + "sbl-circ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 35
    }
  }) : props.value ? __jsx("img", {
    src: "./assets/images/send.png",
    onClick: () => props.sendMessage('message'),
    className: "jsx-148590241",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }) : __jsx("img", {
    src: "./assets/images/key.png",
    onClick: () => props.sendMessage('key'),
    className: "jsx-148590241",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "148590241",
    __self: undefined
  }, ".sbl-circ.jsx-148590241{height:22px;width:22px;color:#5a5a5a;position:relative;display:block;border:2px solid;border-radius:50%;border-top-color:transparent;-webkit-animation:rotate-jsx-148590241 1s linear infinite;animation:rotate-jsx-148590241 1s linear infinite;margin:5px 10px 5px 5px;}@-webkit-keyframes rotate-jsx-148590241{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotate-jsx-148590241{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcZWxlbWVudHNcXFRleHRBcmVhTWVzc2FnZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXdCLEFBRytCLEFBY1UsQUFFSyxZQWZoQixXQUNHLGNBQ0ksa0JBQ0osY0FDRyxHQVNNLGNBUkwsQ0FVVSxpQkFUQyw2QkFDTyw0R0FDWix3QkFDMUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcQVNhaGFrXFxkYXNlclxcbmV4dFxcQ3J5cHRvR3JhcGh5XFxjb21wb25lbnRzXFxlbGVtZW50c1xcVGV4dEFyZWFNZXNzYWdlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGNsYXNzRGVib3VuY2UgfSBmcm9tICdob29rcy91c2UtZGVib3VuY2UnO1xyXG5pbXBvcnQge1xyXG4gICAgX19DSEFOR0VfSVNfU0VFTlxyXG59IGZyb20gXCIuLi8uLi9zdG9yZS9zYWdhXCI7XHJcbmltcG9ydCB7IEJ1cyB9IGZyb20gXCJjb21wb25lbnRzL3NoYXJlZC9oZWxwZXJzL0J1c1wiO1xyXG5cclxuY29uc3QgU2VuZEljb24gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Byb3BzLmluUHJvY2Vzc2luZyA/IDxkaXYgY2xhc3NOYW1lPVwic2JsLWNpcmNcIj48L2Rpdj4gOiBwcm9wcy52YWx1ZSA/XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9zZW5kLnBuZ1wiIG9uQ2xpY2s9eygpID0+IHByb3BzLnNlbmRNZXNzYWdlKCdtZXNzYWdlJyl9Lz4gOlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMva2V5LnBuZ1wiIG9uQ2xpY2s9eygpID0+IHByb3BzLnNlbmRNZXNzYWdlKCdrZXknKX0vPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5zYmwtY2lyYyB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMXMgbGluZWFyIGluZmluaXRlOyBcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMTBweCA1cHggNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApOyB9XHJcbiAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuU2VuZEljb24ucHJvcFR5cGVzID0ge1xyXG4gICAgaW5Qcm9jZXNzaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2VuZE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuY2xhc3MgVGV4dEFyZWFNZXNzYWdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlQXJlYSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIGluUHJvY2Vzc2luZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGVkaXRNZXNzYWdlOiB7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG1zZzogJycsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX19kZWJvdW5jZVR5cGluZyAgICAgPSB0aGlzLl9fZGVib3VuY2VUeXBpbmcuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fc2V0TWVzc2FnZVZhbHVlICAgID0gdGhpcy5fX3NldE1lc3NhZ2VWYWx1ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX19hdXRvU2l6ZSAgICAgICAgICAgPSB0aGlzLl9fYXV0b1NpemUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fc3VibWl0TWVzc2FnZSAgICAgID0gdGhpcy5fX3N1Ym1pdE1lc3NhZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fdXNlcklzT25saW5lICAgICAgID0gdGhpcy5fX3VzZXJJc09ubGluZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX191c2VySXNPZmZsaW5lICAgICAgPSB0aGlzLl9fdXNlcklzT2ZmbGluZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICBCdXMuc3Vic2NyaWJlKCdlZGl0TWVzc2FnZScsICh7bXNnLCBpbmRleH0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlZGl0TWVzc2FnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5PYmo6IG1zZyxcclxuICAgICAgICAgICAgICAgICAgICBtc2c6IG1zZz8ubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgKCkgPT4gdGhpcy5tZXNzYWdlQXJlYS5jdXJyZW50Py5mb2N1cygpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEJ1cy5zdWJzY3JpYmUoJ21lc3NhZ2VTZW5kaW5nRmluaXNoJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGluUHJvY2Vzc2luZzogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZWRpdE1lc3NhZ2UuaGFzT3duUHJvcGVydHkoJ21haW5PYmonKSAmJiAhdGhpcy5zdGF0ZS5lZGl0TWVzc2FnZS5tc2cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNUeXBpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfX2F1dG9TaXplICgpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VBcmVhLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUFyZWEuY3VycmVudC5zdHlsZS5oZWlnaHQgPSAodGhpcy5tZXNzYWdlQXJlYS5jdXJyZW50LnNjcm9sbEhlaWdodCkgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIF9fdXNlcklzT2ZmbGluZSAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZWRpdE1lc3NhZ2UuaGFzT3duUHJvcGVydHkoJ21haW5PYmonKSAmJiAhdGhpcy5zdGF0ZS5lZGl0TWVzc2FnZS5tc2cpIHtcclxuICAgICAgICAgICAgQnVzLmRpc3BhdGNoKCdjYW5jZWxFZGl0aW5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZWRpdE1lc3NhZ2U6IHt9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfX3VzZXJJc09ubGluZSAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlVXNlcj8uaWQgJiYgdGhpcy5wcm9wcy5sb2dnZWRVc2VySWQgJiYgIXRoaXMucHJvcHMuYWN0aXZlVXNlcj8uaXNTZW5kZXIpIHtcclxuICAgICAgICAgICAgX19DSEFOR0VfSVNfU0VFTih7c2VuZGVySUQ6IHRoaXMucHJvcHMuYWN0aXZlVXNlcj8uaWQsIG15SUQ6IHRoaXMucHJvcHMubG9nZ2VkVXNlcklkfSkubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgX19kZWJvdW5jZVR5cGluZyA9IGNsYXNzRGVib3VuY2UodGhpcy5fX2lzVHlwaW5nLCA2MDApO1xyXG5cclxuICAgIF9faXNUeXBpbmcgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lc3NhZ2VWYWx1ZSAhPT0gJycgJiYgIXRoaXMuc3RhdGUuZWRpdE1lc3NhZ2UubXNnICkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmlzVHlwaW5nKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfX3N1Ym1pdE1lc3NhZ2UgKGV2dCkge1xyXG4gICAgICAgIGlmIChldnQua2V5ID09PSAnRW50ZXInICYmIGV2dC5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldnQgPT09ICdrZXknKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE1lc3NhZ2UoJ2tleScsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGluUHJvY2Vzc2luZzogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2dCA9PT0gJ21lc3NhZ2UnIHx8IGV2dC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpblByb2Nlc3Npbmc6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmVkaXRNZXNzYWdlLm1zZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTWVzc2FnZSh0aGlzLnN0YXRlLmVkaXRNZXNzYWdlLm1zZywgdGhpcy5zdGF0ZS5lZGl0TWVzc2FnZSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm1lc3NhZ2VWYWx1ZSAhPT0gJycgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE1lc3NhZ2UodGhpcy5zdGF0ZS5tZXNzYWdlVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUFyZWEuY3VycmVudC5ibHVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZWRpdE1lc3NhZ2U6IHt9LFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVZhbHVlOiAnJ1xyXG4gICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VBcmVhLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZXZ0LmtleSAmJiBldnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfX3NldE1lc3NhZ2VWYWx1ZSAoZXZ0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLih0aGlzLnN0YXRlLmVkaXRNZXNzYWdlLm1zZyAmJiB7XHJcbiAgICAgICAgICAgICAgICBlZGl0TWVzc2FnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZWRpdE1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNnOiBldnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBtZXNzYWdlVmFsdWU6IGV2dC50YXJnZXQudmFsdWVcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1lc3NhZ2VWYWx1ZSA9PT0gJycgJiYgIXRoaXMuc3RhdGUuZWRpdE1lc3NhZ2UubXNnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzVHlwaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgQnVzLnVuc3Vic2NyaWJlKCdlZGl0TWVzc2FnZScpO1xyXG4gICAgICAgIEJ1cy51bnN1YnNjcmliZSgnbWVzc2FnZVNlbmRpbmdGaW5pc2gnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2Utc2VuZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLm1lc3NhZ2VBcmVhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lZGl0TWVzc2FnZS5tc2cgfHwgdGhpcy5zdGF0ZS5tZXNzYWdlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e3RoaXMuc3RhdGUucm93TGluZUNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLl9fdXNlcklzT25saW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuX191c2VySXNPZmZsaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLl9fYXV0b1NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7dGhpcy5fX3NldE1lc3NhZ2VWYWx1ZShldnQpOyB0aGlzLl9fZGVib3VuY2VUeXBpbmcoKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBtZXNzYWdlLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLl9fc3VibWl0TWVzc2FnZX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VuZEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5Qcm9jZXNzaW5nPXt0aGlzLnN0YXRlLmluUHJvY2Vzc2luZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2U9e3RoaXMuX19zdWJtaXRNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tZXNzYWdlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAubWVzc2FnZS1zZW5kLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjI3LCAyMjIsIDIyMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlLXNlbmQtY29udGFpbmVyIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlLXNlbmQtY29udGFpbmVyIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2Utc2VuZC1jb250YWluZXIgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlLXNlbmQtY29udGFpbmVyIHRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2Utc2VuZC1jb250YWluZXIgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5UZXh0QXJlYU1lc3NhZ2UucHJvcFR5cGVzID0ge1xyXG4gICAgbG9nZ2VkVXNlcklkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYWN0aXZlVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlzVHlwaW5nOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIHNlbmRNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhTWVzc2FnZTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\elements\\\\TextAreaMessage.jsx */"));
};

SendIcon.propTypes = {
  inProcessing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  sendMessage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

class TextAreaMessage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "__debounceTyping", Object(hooks_use_debounce__WEBPACK_IMPORTED_MODULE_3__["classDebounce"])(this.__isTyping, 600));

    this.messageArea = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.state = {
      messageValue: '',
      inProcessing: false,
      editMessage: {
        index: null,
        msg: ''
      }
    };
    this.__debounceTyping = this.__debounceTyping.bind(this);
    this.__setMessageValue = this.__setMessageValue.bind(this);
    this.__autoSize = this.__autoSize.bind(this);
    this.__submitMessage = this.__submitMessage.bind(this);
    this.__userIsOnline = this.__userIsOnline.bind(this);
    this.__userIsOffline = this.__userIsOffline.bind(this);
    components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_5__["Bus"].subscribe('editMessage', ({
      msg,
      index
    }) => {
      this.setState({
        editMessage: {
          mainObj: msg,
          msg: msg === null || msg === void 0 ? void 0 : msg.message,
          index: index
        }
      }, () => {
        var _this$messageArea$cur;

        return (_this$messageArea$cur = this.messageArea.current) === null || _this$messageArea$cur === void 0 ? void 0 : _this$messageArea$cur.focus();
      });
    });
    components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_5__["Bus"].subscribe('messageSendingFinish', () => {
      this.setState({
        inProcessing: false
      });
    });
    addEventListener('blur', () => {
      if (this.state.editMessage.hasOwnProperty('mainObj') && !this.state.editMessage.msg) {
        this.props.isTyping(false);
      }
    });
  }

  __autoSize() {
    this.messageArea.current.style.height = 'auto';
    this.messageArea.current.style.height = this.messageArea.current.scrollHeight + 'px';
  }

  __userIsOffline() {
    if (this.state.editMessage.hasOwnProperty('mainObj') && !this.state.editMessage.msg) {
      components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_5__["Bus"].dispatch('cancelEditing');
      this.setState({
        editMessage: {}
      });
    }
  }

  __userIsOnline() {
    var _this$props$activeUse, _this$props$activeUse2;

    if (((_this$props$activeUse = this.props.activeUser) === null || _this$props$activeUse === void 0 ? void 0 : _this$props$activeUse.id) && this.props.loggedUserId && !((_this$props$activeUse2 = this.props.activeUser) === null || _this$props$activeUse2 === void 0 ? void 0 : _this$props$activeUse2.isSender)) {
      var _this$props$activeUse3;

      Object(_store_saga__WEBPACK_IMPORTED_MODULE_4__["__CHANGE_IS_SEEN"])({
        senderID: (_this$props$activeUse3 = this.props.activeUser) === null || _this$props$activeUse3 === void 0 ? void 0 : _this$props$activeUse3.id,
        myID: this.props.loggedUserId
      }).next();
    }
  }

  __isTyping() {
    if (this.state.messageValue !== '' && !this.state.editMessage.msg) {
      this.props.isTyping(true);
    }
  }

  __submitMessage(evt) {
    if (evt.key === 'Enter' && evt.shiftKey) {
      return;
    }

    if (evt === 'key') {
      this.props.sendMessage('key', true);
      this.setState({
        inProcessing: true
      });
    } else if (evt === 'message' || evt.key === 'Enter') {
      this.setState({
        inProcessing: true
      });

      if (this.state.editMessage.msg) {
        this.props.sendMessage(this.state.editMessage.msg, this.state.editMessage);
      } else if (this.state.messageValue !== '') {
        this.props.sendMessage(this.state.messageValue);
      }

      this.messageArea.current.blur();
      this.setState({
        editMessage: {},
        messageValue: ''
      }, () => {
        this.messageArea.current.style.height = 'auto';
      });
      evt.key && evt.preventDefault();
    }
  }

  __setMessageValue(evt) {
    this.setState(_objectSpread({}, this.state.editMessage.msg && {
      editMessage: _objectSpread({}, this.state.editMessage, {
        msg: evt.target.value
      })
    }, {
      messageValue: evt.target.value
    }), () => {
      if (this.state.messageValue === '' && !this.state.editMessage.msg) {
        this.props.isTyping(false);
      }
    });
  }

  componentWillUnmount() {
    components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_5__["Bus"].unsubscribe('editMessage');
    components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_5__["Bus"].unsubscribe('messageSendingFinish');
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "jsx-1746285459" + " " + "message-send-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }
    }, __jsx("textarea", {
      ref: this.messageArea,
      value: this.state.editMessage.msg || this.state.messageValue,
      rows: this.state.rowLineCount,
      onFocus: this.__userIsOnline,
      onBlur: this.__userIsOffline,
      onInput: this.__autoSize,
      onChange: evt => {
        this.__setMessageValue(evt);

        this.__debounceTyping();
      },
      placeholder: "Type message...",
      onKeyDown: this.__submitMessage,
      className: "jsx-1746285459",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 21
      }
    }), __jsx(SendIcon, {
      inProcessing: this.state.inProcessing,
      sendMessage: this.__submitMessage,
      value: this.state.messageValue,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 21
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1746285459",
      __self: this
    }, ".message-send-container{padding-left:3px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid rgb(227,222,222);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.message-send-container img{width:25px;height:25px;margin-right:7px;cursor:pointer;}.message-send-container textarea{resize:none;max-height:70px;width:calc(100% - 30px);border:none;outline:none;}.message-send-container textarea::-webkit-scrollbar{width:0px;height:10px;}.message-send-container textarea::-webkit-scrollbar-thumb{background:transparent;}.message-send-container textarea::-webkit-scrollbar-track{background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcZWxlbWVudHNcXFRleHRBcmVhTWVzc2FnZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0xtQyxBQUcwQyxBQU9OLEFBTUMsQUFPSixBQUthLEFBSUEsVUFSWCxDQWJFLENBTUksS0FiSCxLQXFCakIsQ0FicUIsQUFpQnJCLEFBSUEsS0FmNEIsWUFMVCxZQU1ILEdBTGhCLFNBTWlCLGFBQ2pCLGNBaEJrQyxtSEFDVSxzQ0FDckIsNkZBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcZWxlbWVudHNcXFRleHRBcmVhTWVzc2FnZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBjbGFzc0RlYm91bmNlIH0gZnJvbSAnaG9va3MvdXNlLWRlYm91bmNlJztcclxuaW1wb3J0IHtcclxuICAgIF9fQ0hBTkdFX0lTX1NFRU5cclxufSBmcm9tIFwiLi4vLi4vc3RvcmUvc2FnYVwiO1xyXG5pbXBvcnQgeyBCdXMgfSBmcm9tIFwiY29tcG9uZW50cy9zaGFyZWQvaGVscGVycy9CdXNcIjtcclxuXHJcbmNvbnN0IFNlbmRJY29uID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtwcm9wcy5pblByb2Nlc3NpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cInNibC1jaXJjXCI+PC9kaXY+IDogcHJvcHMudmFsdWUgP1xyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvc2VuZC5wbmdcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZW5kTWVzc2FnZSgnbWVzc2FnZScpfS8+IDpcclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2tleS5wbmdcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZW5kTWVzc2FnZSgna2V5Jyl9Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuc2JsLWNpcmMge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzVhNWE1YTtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlIDFzIGxpbmVhciBpbmZpbml0ZTsgXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHggNXB4IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxyXG4gICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcblNlbmRJY29uLnByb3BUeXBlcyA9IHtcclxuICAgIGluUHJvY2Vzc2luZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNlbmRNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmNsYXNzIFRleHRBcmVhTWVzc2FnZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUFyZWEgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtZXNzYWdlVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBpblByb2Nlc3Npbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBlZGl0TWVzc2FnZToge1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtc2c6ICcnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9fZGVib3VuY2VUeXBpbmcgICAgID0gdGhpcy5fX2RlYm91bmNlVHlwaW5nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fX3NldE1lc3NhZ2VWYWx1ZSAgICA9IHRoaXMuX19zZXRNZXNzYWdlVmFsdWUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fYXV0b1NpemUgICAgICAgICAgID0gdGhpcy5fX2F1dG9TaXplLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fX3N1Ym1pdE1lc3NhZ2UgICAgICA9IHRoaXMuX19zdWJtaXRNZXNzYWdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fX3VzZXJJc09ubGluZSAgICAgICA9IHRoaXMuX191c2VySXNPbmxpbmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fdXNlcklzT2ZmbGluZSAgICAgID0gdGhpcy5fX3VzZXJJc09mZmxpbmUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgQnVzLnN1YnNjcmliZSgnZWRpdE1lc3NhZ2UnLCAoe21zZywgaW5kZXh9KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZWRpdE1lc3NhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBtYWluT2JqOiBtc2csXHJcbiAgICAgICAgICAgICAgICAgICAgbXNnOiBtc2c/Lm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sICgpID0+IHRoaXMubWVzc2FnZUFyZWEuY3VycmVudD8uZm9jdXMoKSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBCdXMuc3Vic2NyaWJlKCdtZXNzYWdlU2VuZGluZ0ZpbmlzaCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpblByb2Nlc3Npbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmVkaXRNZXNzYWdlLmhhc093blByb3BlcnR5KCdtYWluT2JqJykgJiYgIXRoaXMuc3RhdGUuZWRpdE1lc3NhZ2UubXNnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzVHlwaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX19hdXRvU2l6ZSAoKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlQXJlYS5jdXJyZW50LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgICB0aGlzLm1lc3NhZ2VBcmVhLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gKHRoaXMubWVzc2FnZUFyZWEuY3VycmVudC5zY3JvbGxIZWlnaHQpICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBfX3VzZXJJc09mZmxpbmUgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVkaXRNZXNzYWdlLmhhc093blByb3BlcnR5KCdtYWluT2JqJykgJiYgIXRoaXMuc3RhdGUuZWRpdE1lc3NhZ2UubXNnKSB7XHJcbiAgICAgICAgICAgIEJ1cy5kaXNwYXRjaCgnY2FuY2VsRWRpdGluZycpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGVkaXRNZXNzYWdlOiB7fSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX191c2VySXNPbmxpbmUgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZVVzZXI/LmlkICYmIHRoaXMucHJvcHMubG9nZ2VkVXNlcklkICYmICF0aGlzLnByb3BzLmFjdGl2ZVVzZXI/LmlzU2VuZGVyKSB7XHJcbiAgICAgICAgICAgIF9fQ0hBTkdFX0lTX1NFRU4oe3NlbmRlcklEOiB0aGlzLnByb3BzLmFjdGl2ZVVzZXI/LmlkLCBteUlEOiB0aGlzLnByb3BzLmxvZ2dlZFVzZXJJZH0pLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9fZGVib3VuY2VUeXBpbmcgPSBjbGFzc0RlYm91bmNlKHRoaXMuX19pc1R5cGluZywgNjAwKTtcclxuXHJcbiAgICBfX2lzVHlwaW5nICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tZXNzYWdlVmFsdWUgIT09ICcnICYmICF0aGlzLnN0YXRlLmVkaXRNZXNzYWdlLm1zZyApIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pc1R5cGluZyh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX19zdWJtaXRNZXNzYWdlIChldnQpIHtcclxuICAgICAgICBpZiAoZXZ0LmtleSA9PT0gJ0VudGVyJyAmJiBldnQuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZ0ID09PSAna2V5Jykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRNZXNzYWdlKCdrZXknLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpblByb2Nlc3Npbmc6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldnQgPT09ICdtZXNzYWdlJyB8fCBldnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaW5Qcm9jZXNzaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5lZGl0TWVzc2FnZS5tc2cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE1lc3NhZ2UodGhpcy5zdGF0ZS5lZGl0TWVzc2FnZS5tc2csIHRoaXMuc3RhdGUuZWRpdE1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5tZXNzYWdlVmFsdWUgIT09ICcnICl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRNZXNzYWdlKHRoaXMuc3RhdGUubWVzc2FnZVZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VBcmVhLmN1cnJlbnQuYmx1cigpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGVkaXRNZXNzYWdlOiB7fSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VWYWx1ZTogJydcclxuICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQXJlYS5jdXJyZW50LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV2dC5rZXkgJiYgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX19zZXRNZXNzYWdlVmFsdWUgKGV2dCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi4odGhpcy5zdGF0ZS5lZGl0TWVzc2FnZS5tc2cgJiYge1xyXG4gICAgICAgICAgICAgICAgZWRpdE1lc3NhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmVkaXRNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1zZzogZXZ0LnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbWVzc2FnZVZhbHVlOiBldnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5tZXNzYWdlVmFsdWUgPT09ICcnICYmICF0aGlzLnN0YXRlLmVkaXRNZXNzYWdlLm1zZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc1R5cGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIEJ1cy51bnN1YnNjcmliZSgnZWRpdE1lc3NhZ2UnKTtcclxuICAgICAgICBCdXMudW5zdWJzY3JpYmUoJ21lc3NhZ2VTZW5kaW5nRmluaXNoJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLXNlbmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5tZXNzYWdlQXJlYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZWRpdE1lc3NhZ2UubXNnIHx8IHRoaXMuc3RhdGUubWVzc2FnZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXt0aGlzLnN0YXRlLnJvd0xpbmVDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5fX3VzZXJJc09ubGluZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLl9fdXNlcklzT2ZmbGluZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5fX2F1dG9TaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge3RoaXMuX19zZXRNZXNzYWdlVmFsdWUoZXZ0KTsgdGhpcy5fX2RlYm91bmNlVHlwaW5nKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgbWVzc2FnZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5fX3N1Ym1pdE1lc3NhZ2V9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbmRJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluUHJvY2Vzc2luZz17dGhpcy5zdGF0ZS5pblByb2Nlc3Npbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlPXt0aGlzLl9fc3VibWl0TWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWVzc2FnZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2Utc2VuZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIyNywgMjIyLCAyMjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubWVzc2FnZS1zZW5kLWNvbnRhaW5lciBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubWVzc2FnZS1zZW5kLWNvbnRhaW5lciB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlLXNlbmQtY29udGFpbmVyIHRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAubWVzc2FnZS1zZW5kLWNvbnRhaW5lciB0ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlLXNlbmQtY29udGFpbmVyIHRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuVGV4dEFyZWFNZXNzYWdlLnByb3BUeXBlcyA9IHtcclxuICAgIGxvZ2dlZFVzZXJJZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGFjdGl2ZVVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpc1R5cGluZzogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBzZW5kTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYU1lc3NhZ2U7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\elements\\\\TextAreaMessage.jsx */"));
  }

}

TextAreaMessage.propTypes = {
  loggedUserId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  activeUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  isTyping: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  sendMessage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (TextAreaMessage);

/***/ }),

/***/ "./components/header.jsx":
/*!*******************************!*\
  !*** ./components/header.jsx ***!
  \*******************************/
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
/* harmony import */ var config_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config/fire */ "./config/fire.js");
/* harmony import */ var components_Icons_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Icons/icon */ "./components/Icons/icon.js");
/* harmony import */ var components_shared_UI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/shared/UI */ "./components/shared/UI/index.js");
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\header.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class Header extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  logOut() {
    config_fire__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signOut().then(_ => {
      window.location = '/login';
    });
  }

  render() {
    return __jsx("header", {
      className: "jsx-3543887565",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-3543887565",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "./assets/images/logo.png",
      alt: "encrypt",
      className: "jsx-3543887565",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }), "encrypt"), this.props.user && __jsx("div", {
      className: "jsx-3543887565" + " " + "user-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 37
      }
    }, __jsx(components_shared_UI__WEBPACK_IMPORTED_MODULE_5__["default"].UserImage, {
      firstName: this.props.user.fullName.split(' ')[0],
      lastName: this.props.user.fullName.split(' ')[1] || '',
      fill: this.props.user.color,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }), __jsx("span", {
      onClick: () => this.logOut(),
      className: "jsx-3543887565",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, __jsx(components_Icons_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "logout",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3543887565",
      __self: this
    }, "header{background-color:#262626;padding:5px 5vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);}header>a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;-webkit-text-decoration:none;text-decoration:none;font-family:fantasy;}header>a img{max-width:35px;margin-right:5px;}.user-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.user-wrapper svg{margin-left:10px;width:20px;fill:#fff;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcaGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ21DLEFBR2tELEFBUVosQUFPRSxBQUlGLEFBSUksZUFQQSxFQVFOLFFBdkJLLEdBd0JOLElBUmQsTUFTbUIsR0F4QkYsWUF5QmpCLHFCQWxCdUIsQUFXQSx5Q0FqQkEsb0RBT1IsQUFXZixXQVZ5Qiw4QkFQUyxvQkFRVixvQkFDeEIsMkVBUm1ILG9HQUNuSCIsImZpbGUiOiJDOlxcVXNlcnNcXHJ1YWxhXFxEZXNrdG9wXFxBU2FoYWtcXGRhc2VyXFxuZXh0XFxDcnlwdG9HcmFwaHlcXGNvbXBvbmVudHNcXGhlYWRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgZmlyZSBmcm9tIFwiY29uZmlnL2ZpcmVcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnY29tcG9uZW50cy9JY29ucy9pY29uJztcclxuaW1wb3J0IFVJX0VMRU1FTlRTIGZyb20gJ2NvbXBvbmVudHMvc2hhcmVkL1VJJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dPdXQgKCkge1xyXG4gICAgICAgIGZpcmUuYXV0aCgpLnNpZ25PdXQoKS50aGVuKF8gPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiZW5jcnlwdFwiLz5cclxuICAgICAgICAgICAgICAgICAgICBlbmNyeXB0XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VyICYmIDxkaXYgY2xhc3NOYW1lPVwidXNlci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVJX0VMRU1FTlRTLlVzZXJJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU9e3RoaXMucHJvcHMudXNlci5mdWxsTmFtZS5zcGxpdCgnICcpWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZT17dGhpcy5wcm9wcy51c2VyLmZ1bGxOYW1lLnNwbGl0KCcgJylbMV0gfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e3RoaXMucHJvcHMudXNlci5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMubG9nT3V0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwibG9nb3V0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDV2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciA+IGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogZmFudGFzeTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyID4gYSBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudXNlci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VyLXdyYXBwZXIgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB1c2VyOiB7fVxyXG59O1xyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICAgIHVzZXI6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSGVhZGVyKTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\header.jsx */"));
  }

}

Header.defaultProps = {
  user: {}
};
Header.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Header));

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

/***/ "./components/shared/UI/Modal.jsx":
/*!****************************************!*\
  !*** ./components/shared/UI/Modal.jsx ***!
  \****************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_use_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/use-portal */ "./hooks/use-portal.jsx");
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\shared\\UI\\Modal.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



let refModal = null;
const Modal = ({
  show,
  beforeClose,
  close,
  children
}) => {
  const target = Object(hooks_use_portal__WEBPACK_IMPORTED_MODULE_3__["default"])('modal-root');

  const targetHandler = e => {
    if (!e.target.closest('.not-clickable-area')) {
      var _refModal;

      (_refModal = refModal) === null || _refModal === void 0 ? void 0 : _refModal.classList.add('trigger-closing');
      setTimeout(() => {
        var _refModal2;

        (_refModal2 = refModal) === null || _refModal2 === void 0 ? void 0 : _refModal2.classList.remove('trigger-closing');
      }, 70);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setTimeout(() => {
      var _refModal3;

      (_refModal3 = refModal) === null || _refModal3 === void 0 ? void 0 : _refModal3.classList.add('appear-modal');
    }, 0);
    show && globalThis.addEventListener('click', targetHandler);
    return () => {
      var _refModal4;

      (_refModal4 = refModal) === null || _refModal4 === void 0 ? void 0 : _refModal4.classList.remove('appear-modal');
      globalThis.removeEventListener('click', targetHandler);
    };
  }, [show]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (beforeClose) {
      var _refModal5;

      (_refModal5 = refModal) === null || _refModal5 === void 0 ? void 0 : _refModal5.classList.remove('appear-modal');
      setTimeout(() => {
        close();
      }, 300);
    }
  }, [beforeClose]);
  return show && Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(__jsx("div", {
    ref: el => refModal = el,
    className: "jsx-1356994971" + " " + "modal-parent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "jsx-1356994971" + " " + "not-clickable-area",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1356994971",
    __self: undefined
  }, ".modal-parent{position:fixed;top:0;bottom:0;margin:auto;height:-webkit-fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;left:0;right:0;width:90vw;max-width:500px;background:#fff;display:block;}.not-clickable-area{-webkit-transition:0.3s cubic-bezier(0.25,0.8,0.25,1);-webkit-transition:0.3s cubic-bezier(0.25,0.8,0.25,1);transition:0.3s cubic-bezier(0.25,0.8,0.25,1);padding:10px 16px;opacity:0;-webkit-transform:scale(0.7);-ms-transform:scale(0.7);transform:scale(0.7);}.appear-modal:before{opacity:1 !important;-webkit-transform:scale(1) !important;-ms-transform:scale(1) !important;transform:scale(1) !important;}.appear-modal .not-clickable-area{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}.not-clickable-area>h2{margin:0;position:relative;padding:0 0 10px;font-size:20px;}.not-clickable-area>h2:after{background:#efefef;content:'';left:-16px;top:-10px;width:calc(100% + 32px);height:calc(100% + 10px);position:absolute;z-index:-1;}.modal-parent:after{content:\"\";position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:-1;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);}.modal-parent:before{-webkit-transition:0.3s cubic-bezier(0.25,0.8,0.25,1);-webkit-transition:0.3s cubic-bezier(0.25,0.8,0.25,1);transition:0.3s cubic-bezier(0.25,0.8,0.25,1);content:\"\";-webkit-transform:scale(0.7);-ms-transform:scale(0.7);transform:scale(0.7);position:absolute;left:0;top:0;height:100%;width:100%;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);z-index:0;opacity:0;}.modal-parent>*{z-index:22;position:relative;}.trigger-closing .not-clickable-area,.trigger-closing:before{-webkit-animation-duration:0.15s;animation-duration:0.15s;-webkit-animation-name:animate-dialog;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(0.25,0.8,0.25,1);-webkit-animation-timing-function:cubic-bezier(0.25,0.8,0.25,1);animation-timing-function:cubic-bezier(0.25,0.8,0.25,1);}@-webkit-keyframes animate-dialog{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}50%{-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes animate-dialog{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}50%{-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcc2hhcmVkXFxVSVxcTW9kYWwuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDK0IsQUFHb0MsQUFlMEMsQUFPcEMsQUFJRixBQUlWLEFBTVUsQUFVUixBQVU4QyxBQWM5QyxBQUljLEFBU0YsQUFJRyxBQUdILFNBM0ROLEVBZ0JGLEFBd0JHLElBdEVaLElBb0NLLEVBbkNGLEFBcUJxQixLQXlCdkIsQ0FoQlUsRUF3Q3JCLENBckVnQixBQW1DRCxHQVdMLE1BQ00sRUFYRixDQW5DaUIsRUE2QlosT0FPUyxBQVdYLEdBbkNvQyxBQXlDQSxJQWtCWCxDQXpDMUMsS0FrQmUsS0EvQ2EsQUFzQmQsQUF5RFYsQUFPQSxNQWxEeUIsQUFZQyxHQW1DMUIsQ0E1REosY0F0QnVCLEdBc0VXLElBbENaLGtCQUNQLEtBbkJmLE1Bb0JBLE1BVUEsbUJBckNzQixBQXlDUCxTQW5ESixDQXNFNEQsQ0FsQjlDLEtBbkRiLEVBVUUsTUFUQyxJQVVVLE9BVEwsZ0JBQ0EsZ0JBQ0YsT0FrRTZDLE9BakUvRCxLQStDc0IsaUJBeEN0QixDQXlDVyxPQUNELE1BQ00sWUFDRCxXQUMyRixzREFjMUcsOENBYmMsVUFDQSxVQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcc2hhcmVkXFxVSVxcTW9kYWwuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB1c2VQb3J0YWwgZnJvbSAnaG9va3MvdXNlLXBvcnRhbCc7XHJcblxyXG5cclxubGV0IHJlZk1vZGFsID0gbnVsbDtcclxuZXhwb3J0IGNvbnN0IE1vZGFsID0gKHtzaG93LCBiZWZvcmVDbG9zZSwgY2xvc2UsIGNoaWxkcmVufSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHRhcmdldCA9IHVzZVBvcnRhbCgnbW9kYWwtcm9vdCcpO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmICghZS50YXJnZXQuY2xvc2VzdCgnLm5vdC1jbGlja2FibGUtYXJlYScpKSB7XHJcbiAgICAgICAgICAgIHJlZk1vZGFsPy5jbGFzc0xpc3QuYWRkKCd0cmlnZ2VyLWNsb3NpbmcnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWZNb2RhbD8uY2xhc3NMaXN0LnJlbW92ZSgndHJpZ2dlci1jbG9zaW5nJyk7XHJcbiAgICAgICAgICAgIH0sIDcwKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcmVmTW9kYWw/LmNsYXNzTGlzdC5hZGQoJ2FwcGVhci1tb2RhbCcpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIHNob3cgJiYgZ2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhcmdldEhhbmRsZXIpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlZk1vZGFsPy5jbGFzc0xpc3QucmVtb3ZlKCdhcHBlYXItbW9kYWwnKTtcclxuICAgICAgICAgICAgZ2xvYmFsVGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRhcmdldEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzaG93XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYmVmb3JlQ2xvc2UpIHtcclxuICAgICAgICAgICAgcmVmTW9kYWw/LmNsYXNzTGlzdC5yZW1vdmUoJ2FwcGVhci1tb2RhbCcpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsb3NlKClcclxuICAgICAgICAgICAgfSwgMzAwKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtiZWZvcmVDbG9zZV0pO1xyXG5cclxuICAgIHJldHVybiBzaG93ICYmIGNyZWF0ZVBvcnRhbChcclxuICAgICAgICAoPGRpdiByZWY9eyhlbCkgPT4gcmVmTW9kYWwgPSBlbH0gY2xhc3NOYW1lPVwibW9kYWwtcGFyZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90LWNsaWNrYWJsZS1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLm1vZGFsLXBhcmVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogLXdlYmtpdC1maXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ub3QtY2xpY2thYmxlLWFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcHBlYXItbW9kYWw6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFwcGVhci1tb2RhbCAubm90LWNsaWNrYWJsZS1hcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubm90LWNsaWNrYWJsZS1hcmVhID4gaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ub3QtY2xpY2thYmxlLWFyZWEgPiBoMjphZnRlcnsgXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tb2RhbC1wYXJlbnQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1vZGFsLXBhcmVudDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tb2RhbC1wYXJlbnQgPiAqIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyMjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudHJpZ2dlci1jbG9zaW5nIC5ub3QtY2xpY2thYmxlLWFyZWEsIC50cmlnZ2VyLWNsb3Npbmc6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMTVzO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGUtZGlhbG9nO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlLWRpYWxvZztcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGFuaW1hdGUtZGlhbG9nIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+KSxcclxuICAgICAgICB0YXJnZXQsXHJcbiAgICApXHJcbn07Il19 */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\shared\\\\UI\\\\Modal.jsx */")), target);
};

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
    return this.props.lastName.slice(0, 1).toUpperCase();
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
    }, "div.jsx-189482190{height:35px;width:35px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:2px solid;border-radius:50%;background-color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcc2hhcmVkXFxVSVxcVXNlci1JbWFnZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0I0QixBQUdxQyxZQUNELFdBQ1Msc0dBQ0csbUdBQ0osNkZBQ0YsaUJBQ0Msa0JBQ0ksc0JBQzFCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcc2hhcmVkXFxVSVxcVXNlci1JbWFnZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY2xhc3MgVXNlckltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuICAgIGdldCBGTiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZmlyc3ROYW1lLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgTE4gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmxhc3ROYW1lLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JvcmRlckNvbG9yOiB0aGlzLnByb3BzLmZpbGwgfHwgJyNjY2MnLCBjb2xvcjogdGhpcy5wcm9wcy5maWxsIHx8ICcjY2NjJ319PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuRk59XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5MTn1cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuVXNlckltYWdlLnByb3BUeXBlcyA9IHtcclxuICBmaXJzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZmlsbDogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVXNlckltYWdlOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\shared\\\\UI\\\\User-Image.jsx */"));
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

/***/ "./components/shared/helpers/Bus.js":
/*!******************************************!*\
  !*** ./components/shared/helpers/Bus.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const Bus = {
  events: {},
  dispatch: function (event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(data));
  },
  subscribe: function (event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  },
  unsubscribe: function (event) {
    this.events[event] = [];
  }
};
module.exports = {
  Bus
};

/***/ }),

/***/ "./components/shared/helpers/constants.js":
/*!************************************************!*\
  !*** ./components/shared/helpers/constants.js ***!
  \************************************************/
/*! exports provided: _EVERY_PAGE_LIMIT_MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_EVERY_PAGE_LIMIT_MESSAGES", function() { return _EVERY_PAGE_LIMIT_MESSAGES; });
const _EVERY_PAGE_LIMIT_MESSAGES = 15;

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

/***/ "./hooks/use-debounce.jsx":
/*!********************************!*\
  !*** ./hooks/use-debounce.jsx ***!
  \********************************/
/*! exports provided: useDebounce, classDebounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return useDebounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classDebounce", function() { return classDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebounce(value, delay) {
  // State and setters for debounced value
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay); // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}
function classDebounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
        args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/***/ }),

/***/ "./hooks/use-portal.jsx":
/*!******************************!*\
  !*** ./hooks/use-portal.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePortal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePortal(id) {
  const rootElemRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(document.createElement('div'));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Look for existing target dom element to append to
    const parentElem = document.querySelector(`#${id}`); // Add the detached element to the parent

    parentElem.appendChild(rootElemRef.current); // This function is run on unmount

    return () => {
      rootElemRef.current.remove();
    };
  }, []);
  return rootElemRef.current;
}

/***/ }),

/***/ "./libraries/Caesar.js":
/*!*****************************!*\
  !*** ./libraries/Caesar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Caesar; });
class Caesar {
  static doCrypt(isDecrypt, msg, shift, callback) {
    if (!/^-?\d+$/.test(shift)) {
      callback("Shift is not an integer");
      return;
    }

    let _shift = parseInt(shift, 10);

    if (_shift < 0 || _shift >= 26) {
      callback("Shift is out of range! (please include 1 - 25 digits only)");
      return;
    }

    if (isDecrypt) {
      _shift = (26 - _shift) % 26;
    }

    return this.caesarShift(msg, _shift);
  }
  /*
   * Returns the result of having each alphabetic letter of the given text string shifted forward
   * by the given amount, with wraparound. Case is preserved, and non-letters are unchanged.
   * Examples:
   * - caesarShift("abz",  0) = "abz".
   * - caesarShift("abz",  1) = "bca".
   * - caesarShift("abz", 25) = "zay".
   * - caesarShift("THe 123 !@#$", 13) = "GUr 123 !@#$".
   */


  static caesarShift(text, shift) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
      let c = text.charCodeAt(i);
      if (65 <= c && c <= 90) result += String.fromCharCode((c - 65 + shift) % 26 + 65); // Uppercase
      else if (97 <= c && c <= 122) result += String.fromCharCode((c - 97 + shift) % 26 + 97); // Lowercase
        else result += text.charAt(i); // Copy
    }

    return result;
  }

}

/***/ }),

/***/ "./libraries/Playfair.js":
/*!*******************************!*\
  !*** ./libraries/Playfair.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Playfair; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Playfair {
  // static isChet = false;
  // static flag = false;
  static deCodeCipher(msg, key) {
    let text = '';
    let text1 = this.doCipher(msg, key);
    let keyResult = this.processKey(key);

    for (let i = 0; i < text1.length; i += 2) {
      let pair1 = text1[i];
      let pair2 = text1[i + 1];
      let p1i, p1j, p2i, p2j;

      for (let stroke = 0; stroke < keyResult.length; stroke++) {
        for (let stolbec = 0; stolbec < keyResult[stroke].length; stolbec++) {
          if (keyResult[stroke][stolbec] === pair1) {
            p1i = stroke;
            p1j = stolbec;
          }

          if (keyResult[stroke][stolbec] === pair2) {
            p2i = stroke;
            p2j = stolbec;
          }
        }
      }

      let coord1 = '',
          coord2 = '';

      if (p1i === p2i) {
        if (p1j === 0) {
          coord1 = keyResult[p1i][4];
        } else {
          coord1 = keyResult[p1i][p1j - 1];
        }

        if (p2j === 0) {
          coord2 = keyResult[p2i][4];
        } else {
          coord2 = keyResult[p2i][p2j - 1];
        }
      }

      if (p1j === p2j) {
        if (p1i === 0) {
          coord1 = keyResult[4][p1j];
        } else {
          coord1 = keyResult[p1i - 1][p1j];
        }

        if (p2i === 0) {
          coord2 = keyResult[4][p2j];
        } else {
          coord2 = keyResult[p2i - 1][p2j];
        }
      }

      if (p1i !== p2i && p1j !== p2j) {
        coord1 = keyResult[p1i][p2j];
        coord2 = keyResult[p2i][p1j];
      }

      text = text + coord1 + coord2;
    }

    text = text.split('');

    for (let i = 0; i < text.length; i++) {
      let count;

      if (this.flagAdd) {
        if (text[i] === text[i + 2] && (text[i + 1] === 'X' || text[i + 1] === 'Q')) {
          count = i + 1;
          text.splice(count, 1);
        }
      } else if (this.flagAdd && this.isEnd && (this.flagX || !this.flagX)) {
        if (text[i - 2] === text[i] && (text[i - 1] === 'X' || text[i - 1] === 'Q')) count = i + 1;
        text.splice(count, 1);
      } else if (!this.flagAdd) {
        break;
      }
    }

    if (this.flagX) {
      text.pop();
    }

    if (this.isEnd && !this.flagX) {
      text.pop();
    }

    text = text.join('');
    return text;
  }

  static processKey(key) {
    let _key = key;
    _key = _key.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
    let temp = '';
    let alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < _key.length; i++) {
      if (alphabet.indexOf(_key[i]) !== -1) {
        alphabet = alphabet.replace(_key[i], '');
        temp += _key[i];
      }
    }

    temp += alphabet;
    const result = [];
    temp = temp.split('');

    while (temp[0]) {
      result.push(temp.splice(0, 5));
    }

    return result;
  }

}

_defineProperty(Playfair, "flagX", false);

_defineProperty(Playfair, "flagAdd", false);

_defineProperty(Playfair, "isEnd", false);

_defineProperty(Playfair, "doCipher", (msg, key, callback) => {
  let keyResult = Playfair.processKey(key);
  let error = 'Warning!!! String is empty';
  let textPhrase, separator;
  msg = msg.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");

  if (msg.length === 0) {
    callback(error);
    return;
  } else {
    textPhrase = msg[0];
  }

  let help = 0;

  for (let i = 1; i < msg.length; i++) {
    if (msg[i - 1] === msg[i]) {
      if (msg[i] === 'X') {
        separator = 'Q';
      } else {
        separator = 'X';
      }

      textPhrase += separator + msg[i];
      help = 1;
    } else {
      textPhrase += msg[i];
    }

    if (help === 1) {
      Playfair.flagAdd = true;
    }
  }

  if (textPhrase.length % 2 !== 0) {
    if (textPhrase[textPhrase.length - 1] === 'X') {
      textPhrase += 'Q';
      Playfair.isEnd = true;
      Playfair.flagX = false;
    } else {
      textPhrase += 'X';
      Playfair.isEnd = true;
      Playfair.flagX = true;
    }
  }

  let enCodeStr = '';

  for (let i = 0; i < textPhrase.length; i += 2) {
    let pair1 = textPhrase[i];
    let pair2 = textPhrase[i + 1];
    let p1i, p1j, p2i, p2j;

    for (let stroke = 0; stroke < keyResult.length; stroke++) {
      for (let stolbec = 0; stolbec < keyResult[stroke].length; stolbec++) {
        if (keyResult[stroke][stolbec] === pair1) {
          p1i = stroke;
          p1j = stolbec;
        }

        if (keyResult[stroke][stolbec] === pair2) {
          p2i = stroke;
          p2j = stolbec;
        }
      }
    }

    let coord1 = '',
        coord2 = '';

    if (p1i === p2i) {
      if (p1j === 4) {
        coord1 = keyResult[p1i][0];
      } else {
        coord1 = keyResult[p1i][p1j + 1];
      }

      if (p2j === 4) {
        coord2 = keyResult[p2i][0];
      } else {
        coord2 = keyResult[p2i][p2j + 1];
      }
    }

    if (p1j === p2j) {
      if (p1i === 4) {
        coord1 = keyResult[0][p1j];
      } else {
        coord1 = keyResult[p1i + 1][p1j];
      }

      if (p2i === 4) {
        coord2 = keyResult[0][p2j];
      } else {
        coord2 = keyResult[p2i + 1][p2j];
      }
    }

    if (p1i !== p2i && p1j !== p2j) {
      coord1 = keyResult[p1i][p2j];
      coord2 = keyResult[p2i][p1j];
    }

    enCodeStr = enCodeStr + coord1 + coord2;
  }

  return enCodeStr;
});

/***/ }),

/***/ "./libraries/ROT13.js":
/*!****************************!*\
  !*** ./libraries/ROT13.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ROT13; });
function ROT13(string) {
  let messageArray = string.split('');
  let messageInNumbers = messageArray.map(function (char) {
    if (!char) {
      return char;
    } else return char.charCodeAt(0);
  });
  const messageNumbersShifted = messageInNumbers.map(function (charCode) {
    let translatedCharCode; //caps

    if (charCode >= 65 && charCode <= 90) {
      if (charCode > 'M'.charCodeAt(0)) {
        translatedCharCode = charCode - 13;
      } else {
        translatedCharCode = charCode + 13;
      }

      return String.fromCharCode(translatedCharCode);
    } //lower case
    else if (charCode >= 97 && charCode <= 122) {
        if (charCode > 'm'.charCodeAt(0)) {
          translatedCharCode = charCode - 13;
        } else {
          translatedCharCode = charCode + 13;
        }

        return String.fromCharCode(translatedCharCode);
      } //characters that are left alone
      else {
          return String.fromCharCode(charCode);
        }
  });
  return messageNumbersShifted.join('');
}

/***/ }),

/***/ "./libraries/RSA.js":
/*!**************************!*\
  !*** ./libraries/RSA.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RSA; });
const bigInt = __webpack_require__(/*! big-integer */ "big-integer");

class RSA {
  static randomPrime(bits) {
    const min = bigInt.one.shiftLeft(bits - 1);
    const max = bigInt.one.shiftLeft(bits).prev();

    while (true) {
      let p = bigInt.randBetween(min, max);

      if (p.isProbablePrime(256)) {
        return p;
      }
    }
  }

  static generate(keysize) {
    const e = bigInt(65537);
    let p;
    let q;
    let totient;

    do {
      p = this.randomPrime(keysize / 2);
      q = this.randomPrime(keysize / 2);
      totient = bigInt.lcm(p.prev(), q.prev());
    } while (bigInt.gcd(e, totient).notEquals(1) || p.minus(q).abs().shiftRight(keysize / 2 - 100).isZero());

    return {
      e,
      n: p.multiply(q),
      d: e.modInv(totient)
    };
  }

  static encrypt(encodedMsg, n, e) {
    return bigInt(encodedMsg).modPow(e, n);
  }

  static decrypt(encryptedMsg, d, n) {
    return bigInt(encryptedMsg).modPow(d, n);
  }

  static encode(str) {
    const codes = str.split('').map(i => i.charCodeAt()).join('');
    return bigInt(codes);
  }

  static decode(code) {
    const stringified = code.toString();
    let string = '';

    for (let i = 0; i < stringified.length; i += 2) {
      let num = Number(stringified.substr(i, 2));

      if (num <= 30) {
        string += String.fromCharCode(Number(stringified.substr(i, 3)));
        i++;
      } else {
        string += String.fromCharCode(num);
      }
    }

    return string;
  }

}

/***/ }),

/***/ "./libraries/Subsituation.js":
/*!***********************************!*\
  !*** ./libraries/Subsituation.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Substitution; });
function Substitution(message) {
  const symbolsUpper = [['~~'], ['!!'], ['##'], ['$$'], ['%%'], ['^^'], ['**'], ['&&'], ['(-'], ['-)'], ['=='], ['[='], ['=]'], ['=\\='], [';;'], ['::'], ['>>'], ['<<'], ['//'], [',,'], ['..'], ['@@'], ['{{'], ['}}'], ['-('], ['-)']];
  const symbolsLower = [['~'], ['!'], ['@'], ['#'], ['$'], ['%'], ['^'], ['*'], ['&'], ['('], [')'], ['='], ['/'], [';'], [':'], ['>'], ['<'], ['?'], [','], ['.'], ['<>'], ['<{'], ['}>'], [':;'], ['|'], ['~]']];
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  return message.split('').reduce((acc, letter) => {
    if (lower.indexOf(letter) !== -1) {
      acc.encrypt += symbolsLower[lower.indexOf(letter)];
      acc.decrypt += letter;
    } else if (upper.indexOf(letter) !== -1) {
      acc.decrypt += letter;
      acc.encrypt += symbolsUpper[upper.indexOf(letter)];
    } else {
      acc.encrypt += letter;
      acc.decrypt += letter;
    }

    return acc;
  }, {
    encrypt: '',
    decrypt: ''
  });
}

/***/ }),

/***/ "./libraries/Vernam.js":
/*!*****************************!*\
  !*** ./libraries/Vernam.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vernam; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Vernam {
  static generateRandomStringByAmount(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  static doEncrypt(msg, callback) {
    const sum = [];
    const enc = [];
    this.letters = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    let input = msg.toUpperCase();
    let key = this.generateRandomStringByAmount(msg.length).toUpperCase();
    let inputIndex;
    callback(key);

    for (let i = 0; i < msg.length; i++) {
      inputIndex = this.letters.indexOf(input[i]);
      let keyIndex = this.letters.indexOf(key[i]);
      sum[i] = inputIndex + keyIndex;

      if (sum[i] >= 26) {
        sum[i] = sum[i] % 26;
      }
    }

    for (let j = 0; j < msg.length; j++) {
      enc[j] = this.letters[sum[j]];
      this.abc[j] = sum[j];
    }

    const encr = enc.toString();
    const encrypt = encr.split(",").join("");
    return encrypt;
  }

  static doDecrypt(msg, key) {
    const arr = [];
    const dec = []; // const enter = msg.toUpperCase();

    const keyD = key.toUpperCase();

    for (let k = 0; k < keyD.length; k++) {
      let xyz = this.letters.indexOf(keyD[k]);
      arr[k] = this.abc[k] - xyz;

      if (arr[k] < 0) {
        arr[k] += 26;
      }
    }

    for (let m = 0; m < keyD.length; m++) {
      dec[m] = this.letters[arr[m]];
    }

    const decr = dec.toString();
    const decrypt = decr.split(",").join("");
    return decrypt;
  }

}

_defineProperty(Vernam, "letters", []);

_defineProperty(Vernam, "abc", []);

/***/ }),

/***/ "./libraries/Vigenere.js":
/*!*******************************!*\
  !*** ./libraries/Vigenere.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vigenere; });


class Vigenere {
  static doCryptVigenere(isDecrypt, value, key, callback) {
    if (key.length === 0) {
      callback("Key is empty");
      return;
    }

    let keyDouble = this.filterKey(key);

    if (keyDouble.length === 0) {
      callback("Key has no letters");
      return;
    }

    if (isDecrypt) {
      for (let i = 0; i < keyDouble.length; i++) keyDouble[i] = (26 - keyDouble[i]) % 26;
    }

    return this.crypt(value, keyDouble);
  }
  /*
   * Returns the result the Vigenere encryption on the given text with the given key.
   */


  static crypt(input, key) {
    let output = "";

    for (let i = 0, j = 0; i < input.length; i++) {
      let c = input.charCodeAt(i);

      if (this.isUppercase(c)) {
        output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
        j++;
      } else if (this.isLowercase(c)) {
        output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
        j++;
      } else {
        output += input.charAt(i);
      }
    }

    return output;
  }
  /*
   * Returns an array of numbers, each in the range [0, 26), representing the given key.
   * The key is case-insensitive, and non-letters are ignored.
   * Examples:
   * - filterKey("AAA") = [0, 0, 0].
   * - filterKey("abc") = [0, 1, 2].
   * - filterKey("the $123# EHT") = [19, 7, 4, 4, 7, 19].
   */


  static filterKey(key) {
    let result = [];

    for (let i = 0; i < key.length; i++) {
      let c = key.charCodeAt(i);
      if (this.isLetter(c)) result.push((c - 65) % 32);
    }

    return result;
  } // Tests whether the specified character code is a letter.


  static isLetter(c) {
    return this.isUppercase(c) || this.isLowercase(c);
  } // Tests whether the specified character code is an uppercase letter.


  static isUppercase(c) {
    return 65 <= c && c <= 90; // 65 is character code for 'A'. 90 is 'Z'.
  } // Tests whether the specified character code is a lowercase letter.


  static isLowercase(c) {
    return 97 <= c && c <= 122; // 97 is character code for 'a'. 122 is 'z'.
  }

}

/***/ }),

/***/ "./libraries/index.js":
/*!****************************!*\
  !*** ./libraries/index.js ***!
  \****************************/
/*! exports provided: Vigenere, RSA, Caesar, Playfair, Vernam, ROT13, Substitution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vigenere__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vigenere */ "./libraries/Vigenere.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vigenere", function() { return _Vigenere__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _RSA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RSA */ "./libraries/RSA.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RSA", function() { return _RSA__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Caesar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Caesar */ "./libraries/Caesar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Caesar", function() { return _Caesar__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Playfair__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Playfair */ "./libraries/Playfair.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Playfair", function() { return _Playfair__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Vernam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vernam */ "./libraries/Vernam.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vernam", function() { return _Vernam__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ROT13__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ROT13 */ "./libraries/ROT13.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROT13", function() { return _ROT13__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Subsituation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subsituation */ "./libraries/Subsituation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Substitution", function() { return _Subsituation__WEBPACK_IMPORTED_MODULE_6__["default"]; });










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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/auth */ "./utils/auth.js");
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/header */ "./components/header.jsx");
/* harmony import */ var components_Chat_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Chat-Content */ "./components/Chat-Content.jsx");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store/actions */ "./store/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var config_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! config/fire */ "./config/fire.js");
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









class Home extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };

    this.__bodyClass('add');
  }

  __bodyClass(type) {
    if (false) {}
  }

  componentWillUnmount() {
    this.__bodyClass('remove');
  }

  componentDidMount() {
    const db = config_fire__WEBPACK_IMPORTED_MODULE_8__["default"].firestore();
    db.collection('users').where("email", "==", config_fire__WEBPACK_IMPORTED_MODULE_8__["default"].auth().currentUser.email).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.props.__SET_MY_DATA({
          id: doc.data().id,
          color: doc.data().color,
          fullName: doc.data().fullName
        });

        this.setState({
          user: doc.data()
        });
      });
    });
  }

  render() {
    return __jsx("div", {
      className: "jsx-444455215" + " " + "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, __jsx("title", {
      className: "jsx-444455215",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }, "Home")), __jsx("main", {
      className: "jsx-444455215",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, __jsx(components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: this.state.user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }), __jsx(components_Chat_Content__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    })), __jsx("div", {
      id: "modal-root",
      className: "jsx-444455215",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "444455215",
      __self: this
    }, "#modal-root.jsx-444455215{position:absolute;z-index:999999;top:0;left:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThENEIsQUFHMEMsa0JBQ0YsZUFDVCxNQUNDLE9BQ1giLCJmaWxlIjoiQzpcXFVzZXJzXFxydWFsYVxcRGVza3RvcFxcQVNhaGFrXFxkYXNlclxcbmV4dFxcQ3J5cHRvR3JhcGh5XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICd1dGlscy9hdXRoJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBDaGF0Q29udGVudCBmcm9tICdjb21wb25lbnRzL0NoYXQtQ29udGVudCc7XHJcbmltcG9ydCB7XHJcbiAgICBfX1NFVF9NWV9EQVRBXHJcbn0gZnJvbSAnc3RvcmUvYWN0aW9ucyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBmaXJlIGZyb20gXCJjb25maWcvZmlyZVwiO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB1c2VyOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9fYm9keUNsYXNzKCdhZGQnKTtcclxuICAgIH1cclxuICAgIF9fYm9keUNsYXNzICh0eXBlKSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgY29uc3QgX2JvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgICAgaWYgKF9ib2R5KSB7XHJcbiAgICAgICAgICAgICAgX2JvZHkuY2xhc3NMaXN0W3R5cGVdKCdiZy1ub25lJylcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuX19ib2R5Q2xhc3MoJ3JlbW92ZScpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgZGIgPSBmaXJlLmZpcmVzdG9yZSgpO1xyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykud2hlcmUoXCJlbWFpbFwiLCBcIj09XCIsIGZpcmUuYXV0aCgpLmN1cnJlbnRVc2VyLmVtYWlsKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5fX1NFVF9NWV9EQVRBKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5kYXRhKCkuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkb2MuZGF0YSgpLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZTogZG9jLmRhdGEoKS5mdWxsTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdXNlcj17dGhpcy5zdGF0ZS51c2VyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoYXRDb250ZW50IC8+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWwtcm9vdFwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAjbW9kYWwtcm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgaXNMb2dnZWQ6IHN0YXRlLmF1dGguaXNMb2dnZWRcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBfX1NFVF9NWV9EQVRBXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikod2l0aEF1dGgoSG9tZSkpO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\pages\\\\index.js */"));
  }

}

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged
});

const mapDispatchToProps = {
  __SET_MY_DATA: store_actions__WEBPACK_IMPORTED_MODULE_6__["__SET_MY_DATA"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Object(utils_auth__WEBPACK_IMPORTED_MODULE_3__["default"])(Home)));

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

/***/ "./store/reselect/index.js":
/*!*********************************!*\
  !*** ./store/reselect/index.js ***!
  \*********************************/
/*! exports provided: __getUserMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__getUserMessages", function() { return __getUserMessages; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/shared/helpers/constants */ "./components/shared/helpers/constants.js");



const _messagesData = state => state;

const _everyPage = components_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_1__["_EVERY_PAGE_LIMIT_MESSAGES"];
const __getUserMessages = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_messagesData, ({
  data,
  page
}) => {
  let returnedData = [];

  for (let i = data.length - 1; i > data.length - page * _everyPage - 1; i--) {
    if (!data[i]) break;
    returnedData.unshift(data[i]);
  }

  return returnedData;
});

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

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/login */ "./pages/login.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-service */ "./utils/auth-service.js");
/* harmony import */ var components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/shared/helpers/global-functions */ "./components/shared/helpers/global-functions.js");
var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\utils\\auth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function withAuth(AuthComponent) {
  return class Authenticated extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
      super(props);
      this.state = {
        isAuth: false,
        isLoading: true
      };

      Object(components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_4__["__bodyLoading"])(this.state.isLoading);

      _auth_service__WEBPACK_IMPORTED_MODULE_3__["__isLogged"]().then(res => {
        if (res) {
          if (next_router__WEBPACK_IMPORTED_MODULE_1___default.a.pathname === '/login' || next_router__WEBPACK_IMPORTED_MODULE_1___default.a.pathname === '/register') {
            next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
            this.setState({
              isAuth: true
            });
          } else {
            this.setState({
              isAuth: true,
              isLoading: false
            }, () => Object(components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_4__["__bodyLoading"])(this.state.isLoading, this.state.isAuth));
          }
        } else {
          this.setState({
            isLoading: false
          }, () => {
            Object(components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_4__["__bodyLoading"])(this.state.isLoading, this.state.isAuth);

            next_router__WEBPACK_IMPORTED_MODULE_1___default.a.replace('/login');
          });
        }
      });
    }

    render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }
      }, !this.state.isLoading && (this.state.isAuth ? __jsx(AuthComponent, _extends({}, this.props, {
        auth: _auth_service__WEBPACK_IMPORTED_MODULE_3__,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 68
        }
      })) : __jsx(_pages_login__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 123
        }
      })));
    }

  };
}
;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ruala\Desktop\ASahak\daser\next\CryptoGraphy\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "big-integer":
/*!******************************!*\
  !*** external "big-integer" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("big-integer");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

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
//# sourceMappingURL=index.js.map