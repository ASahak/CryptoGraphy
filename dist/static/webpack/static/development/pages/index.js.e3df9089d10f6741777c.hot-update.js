webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/elements/PrivateMessageContent.jsx":
/*!*******************************************************!*\
  !*** ./components/elements/PrivateMessageContent.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_shared_UI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/shared/UI */ "./components/shared/UI/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var components_Icons_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Icons/icon */ "./components/Icons/icon.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! store/actions */ "./store/actions/index.js");
/* harmony import */ var components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/shared/helpers/Bus */ "./components/shared/helpers/Bus.js");
/* harmony import */ var components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var components_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/shared/helpers/constants */ "./components/shared/helpers/constants.js");
/* harmony import */ var store_reselect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! store/reselect */ "./store/reselect/index.js");
/* harmony import */ var components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/shared/helpers/global-functions */ "./components/shared/helpers/global-functions.js");
/* harmony import */ var store_saga__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! store/saga */ "./store/saga/index.js");







var _jsxFileName = "C:\\Users\\ruala\\Desktop\\ASahak\\daser\\next\\CryptoGraphy\\components\\elements\\PrivateMessageContent.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }















var PrivateMessageContent = /*#__PURE__*/function (_React$PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PrivateMessageContent, _React$PureComponent);

  var _super = _createSuper(PrivateMessageContent);

  function PrivateMessageContent(props) {
    var _this$props$activeUse, _this$props$loggedUse;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PrivateMessageContent);

    _this = _super.call(this, props);
    _this.state = {
      leftColor: _this.props.activeUser && ((_this$props$activeUse = _this.props.activeUser) === null || _this$props$activeUse === void 0 ? void 0 : _this$props$activeUse.color) || '#0C4651',
      rightColor: _this.props.activeUser && ((_this$props$loggedUse = _this.props.loggedUser) === null || _this$props$loggedUse === void 0 ? void 0 : _this$props$loggedUse.color) || '#1BBC9B',
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
    _this._messagesEnd = null;
    _this._handleDomClick = null;
    _this._handleClickRemove = null;
    _this.__scrollToBottom = _this.__scrollToBottom.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.__handleScrollTop = _this.__handleScrollTop.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.__showEncryptPopUp = _this.__showEncryptPopUp.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.__doEncryptType = _this.__doEncryptType.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.__hidePopUpEncrypt = _this.__hidePopUpEncrypt.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.__editMessage = _this.__editMessage.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.__removeMessageConfirm = _this.__removeMessageConfirm.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.__removeMessage = _this.__removeMessage.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.__clickRemovePopUp = _this.__clickRemovePopUp.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this._scrollContent = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_16__["Bus"].subscribe('cancelEditing', function () {
      _this.setState({
        isEditing: false
      });
    });
    components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_16__["Bus"].subscribe('endEditing', function () {
      _this.setState({
        isEditing: false,
        isRemoving: false,
        editingMsgIndex: null
      });
    });
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PrivateMessageContent, [{
    key: "__scrollToBottom",
    value: function __scrollToBottom(behavior) {
      var _this2 = this;

      setTimeout(function () {
        var _this2$_messagesEnd;

        (_this2$_messagesEnd = _this2._messagesEnd) === null || _this2$_messagesEnd === void 0 ? void 0 : _this2$_messagesEnd.scrollIntoView({
          behavior: behavior ? 'smooth' : 'auto'
        });
      }, 0);
    }
  }, {
    key: "__handleScrollTop",
    value: function __handleScrollTop(e) {
      var _this3 = this;

      if (this.state.scrollLoadingAllow && e.target.scrollTop < 50) {
        var _this$_scrollContent, _this$_scrollContent2;

        this.setState({
          previousScrollTop: (_this$_scrollContent = this._scrollContent) === null || _this$_scrollContent === void 0 ? void 0 : _this$_scrollContent.scrollTop,
          previousScrollHeight: (_this$_scrollContent2 = this._scrollContent) === null || _this$_scrollContent2 === void 0 ? void 0 : _this$_scrollContent2.scrollHeight,
          scrollLoadingAllow: false,
          loadingMessages: true
        }, function () {
          setTimeout(function () {
            _this3.props.__LOAD_MORE_MESSAGES(1);
          }, 1000);
        });
      } else {
        this.setState({
          scrollLoadingAllow: true
        });
      }
    }
  }, {
    key: "__showEncryptPopUp",
    value: function __showEncryptPopUp(evt, index, isKey) {
      var _this4 = this;

      if (evt.target.closest('.remove-confirm-container')) return;

      var _currentSrc = evt.target.closest('.separate-p');

      if (document.body.querySelector('.opened-encryptPopUp') && document.body.querySelector('.opened-encryptPopUp') !== _currentSrc) {
        document.body.querySelector('.opened-encryptPopUp').setAttribute('data-hint-encrypt', false);
        document.body.querySelector('.opened-encryptPopUp').classList.remove('opened-encryptPopUp');
      }

      if (isKey) return;

      if (_currentSrc) {
        var dataIcon = _currentSrc.getAttribute('data-hint-encrypt');

        this.state.messagesSelector = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.messagesSelector);
        this.state.messagesSelector[index].isEncrypt = false;
        this.setState({
          encryptIcon: JSON.parse(dataIcon),
          messagesSelector: this.state.messagesSelector
        }, function () {
          return _this4.forceUpdate();
        });

        _currentSrc.classList.toggle('opened-encryptPopUp');
      }

      setTimeout(function () {
        addEventListener('click', _this4._handleDomClick = _this4.__hidePopUpEncrypt.bind(_this4, index));
      }, 0);
    }
  }, {
    key: "__hidePopUpEncrypt",
    value: function __hidePopUpEncrypt(index, e) {
      var _this5 = this;

      this.state.messagesSelector = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.messagesSelector);
      delete this.state.messagesSelector[index].isEncrypt;
      this.setState({
        messagesSelector: this.state.messagesSelector
      }, function () {
        return _this5.forceUpdate();
      });
      removeEventListener('click', this._handleDomClick);

      if (!e.target.closest('div[data-hint-encrypt]') && document.body.querySelector('.opened-encryptPopUp')) {
        document.body.querySelector('.opened-encryptPopUp').setAttribute('data-hint-encrypt', false);
        document.body.querySelector('.opened-encryptPopUp').classList.remove('opened-encryptPopUp');
      }
    }
  }, {
    key: "__doEncryptType",
    value: function __doEncryptType(e, index) {
      var _this6 = this;

      var _currentSrc = e.target.closest('.separate-p');

      e.stopPropagation();
      this.setState({
        encryptIcon: !this.state.encryptIcon
      }, function () {
        _currentSrc.setAttribute('data-hint-encrypt', _this6.state.encryptIcon);

        var newEncryption = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this6.state.messagesSelector);

        newEncryption[index].isEncrypt = _this6.state.encryptIcon;

        _this6.setState({
          messagesSelector: newEncryption
        });
      });
    }
  }, {
    key: "__editMessage",
    value: function __editMessage(evt, msg, time) {
      var _this$props$activeUse2, _this$props$loggedUse2;

      var index = this.props.messages.findIndex(function (msg) {
        return msg.time === time;
      });

      Object(store_saga__WEBPACK_IMPORTED_MODULE_20__["__EDIT_MESSAGE"])(null, index, {
        idUser: (_this$props$activeUse2 = this.props.activeUser) === null || _this$props$activeUse2 === void 0 ? void 0 : _this$props$activeUse2.id,
        myId: (_this$props$loggedUse2 = this.props.loggedUser) === null || _this$props$loggedUse2 === void 0 ? void 0 : _this$props$loggedUse2.id
      }).next();

      evt.stopPropagation();
      this.setState({
        isEditing: true,
        editingMsgIndex: index
      }, function () {
        components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_16__["Bus"].dispatch('editMessage', {
          msg: msg,
          index: index
        });
      });
    }
  }, {
    key: "__removeMessageConfirm",
    value: function __removeMessageConfirm(evt) {
      var _evt$target$closest,
          _this7 = this;

      evt.stopPropagation();

      var _currentSrc = evt.target.closest('.separate-p');

      var alreadyDeclared = (_evt$target$closest = evt.target.closest('.messages-content')) === null || _evt$target$closest === void 0 ? void 0 : _evt$target$closest.querySelector('.opened-pop-confirm-remove');

      if (alreadyDeclared) {
        alreadyDeclared.classList.remove('opened-pop-confirm-remove');
      }

      _currentSrc.classList.add('opened-pop-confirm-remove');

      setTimeout(function () {
        addEventListener('click', _this7._handleClickRemove = _this7.__clickRemovePopUp.bind(_this7));
      }, 0);
    }
  }, {
    key: "__removeMessage",
    value: function __removeMessage(time) {
      var _this$props$activeUse3, _this$props$loggedUse3;

      Object(store_saga__WEBPACK_IMPORTED_MODULE_20__["__REMOVE_MESSAGE"])(time, {
        idUser: (_this$props$activeUse3 = this.props.activeUser) === null || _this$props$activeUse3 === void 0 ? void 0 : _this$props$activeUse3.id,
        myId: (_this$props$loggedUse3 = this.props.loggedUser) === null || _this$props$loggedUse3 === void 0 ? void 0 : _this$props$loggedUse3.id
      }).next();
    }
  }, {
    key: "__clickRemovePopUp",
    value: function __clickRemovePopUp(evt) {
      var _evt$target$closest2;

      var alreadyDeclared = (_evt$target$closest2 = evt.target.closest('.messages-content')) === null || _evt$target$closest2 === void 0 ? void 0 : _evt$target$closest2.querySelector('.opened-pop-confirm-remove');

      if (alreadyDeclared && !evt.target.closest('.remove-confirm-container') || evt.target.closest('.trigger-close-dialog')) {
        alreadyDeclared.classList.remove('opened-pop-confirm-remove');
        removeEventListener('click', this._handleClickRemove);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this$props$activeUse4,
          _prevProps$messages$t,
          _this$props$messages$,
          _this8 = this,
          _this$props$activeUse5,
          _this$props$activeUse6,
          _this$props$activeUse7;

      // if (prevProps.activeUser.isTyping !== this.props.activeUser.isTyping) { todo
      //     this.props.activeUser.isTyping && this.__scrollToBottom('behavior');
      // }
      // Detect if there are removed message
      if (((_this$props$activeUse4 = this.props.activeUser) === null || _this$props$activeUse4 === void 0 ? void 0 : _this$props$activeUse4.removedMessageIndex) >= 0 && (((_prevProps$messages$t = prevProps.messages[this.props.activeUser.removedMessageIndex]) === null || _prevProps$messages$t === void 0 ? void 0 : _prevProps$messages$t.removed) !== ((_this$props$messages$ = this.props.messages[this.props.activeUser.removedMessageIndex]) === null || _this$props$messages$ === void 0 ? void 0 : _this$props$messages$.removed) || !function () {
        var _this8$state$messages;

        var currentIndex = _this8.state.messagesSelector.length - (_this8.props.messages.length - _this8.props.activeUser.removedMessageIndex);
        if (currentIndex < 0) return false;
        return (_this8$state$messages = _this8.state.messagesSelector[currentIndex]) === null || _this8$state$messages === void 0 ? void 0 : _this8$state$messages.removed;
      }())) {
        var currentIndex = this.state.messagesSelector.length - (this.props.messages.length - this.props.activeUser.removedMessageIndex);

        if (currentIndex >= 0) {
          var newEncryption = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.messagesSelector);

          if (newEncryption[currentIndex]) {
            newEncryption[currentIndex].removed = true;
            this.setState({
              messagesSelector: newEncryption
            });
          }
        }
      } // when editing have been finished


      if (((_this$props$activeUse5 = this.props.activeUser) === null || _this$props$activeUse5 === void 0 ? void 0 : _this$props$activeUse5.editedMsgIndex) >= 0 && (this.props.messages[(_this$props$activeUse6 = this.props.activeUser) === null || _this$props$activeUse6 === void 0 ? void 0 : _this$props$activeUse6.editedMsgIndex].message !== prevProps.messages[(_this$props$activeUse7 = this.props.activeUser) === null || _this$props$activeUse7 === void 0 ? void 0 : _this$props$activeUse7.editedMsgIndex].message || function () {
        var _this8$props$activeUs, _this8$props$activeUs2;

        var currentIndex = _this8.state.messagesSelector.length - (_this8.props.messages.length - ((_this8$props$activeUs = _this8.props.activeUser) === null || _this8$props$activeUs === void 0 ? void 0 : _this8$props$activeUs.editedMsgIndex));
        if (currentIndex < 0) return false;
        return _this8.state.messagesSelector[currentIndex].message !== _this8.props.messages[(_this8$props$activeUs2 = _this8.props.activeUser) === null || _this8$props$activeUs2 === void 0 ? void 0 : _this8$props$activeUs2.editedMsgIndex].message;
      }())) {
        var _this$props$activeUse8;

        var _currentIndex = this.state.messagesSelector.length - (this.props.messages.length - ((_this$props$activeUse8 = this.props.activeUser) === null || _this$props$activeUse8 === void 0 ? void 0 : _this$props$activeUse8.editedMsgIndex));

        if (_currentIndex >= 0) {
          var _this$props$activeUse9;

          var editedArray = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.messagesSelector);

          editedArray[_currentIndex] = this.props.messages[(_this$props$activeUse9 = this.props.activeUser) === null || _this$props$activeUse9 === void 0 ? void 0 : _this$props$activeUse9.editedMsgIndex];
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
        if ((this.props.messagesPage - 1) * components_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_17__["_EVERY_PAGE_LIMIT_MESSAGES"] <= this.props.messages.length) {
          this.setState({
            scrollLoadingAllow: true,
            loadingMessages: false,
            messagesSelector: Object(store_reselect__WEBPACK_IMPORTED_MODULE_18__["__getUserMessages"])({
              data: this.props.messages,
              page: this.props.messagesPage
            })
          }, function () {
            if (prevProps.messages.length !== _this8.props.messages.length) {
              _this8.__scrollToBottom('behavior');
            } else {
              _this8._scrollContent.scrollTo(0, _this8._scrollContent.scrollHeight - _this8.state.previousScrollHeight + _this8.state.previousScrollTop - 45);
            }
          });
        } else {
          this.props.__LOAD_MORE_MESSAGES(-1);
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this9 = this;

      this.setState({
        messagesSelector: Object(store_reselect__WEBPACK_IMPORTED_MODULE_18__["__getUserMessages"])({
          data: this.props.messages,
          page: this.props.messagesPage
        })
      }, function () {
        _this9._scrollContent.onscroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_14___default()(function (e) {
          if (_this9.props.messages.length > components_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_17__["_EVERY_PAGE_LIMIT_MESSAGES"]) {
            _this9.__handleScrollTop(e);
          }
        }, 100);

        _this9.__scrollToBottom();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      removeEventListener('click', this._handleClickRemove);
      removeEventListener('click', this._handleDomClick);
      components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_16__["Bus"].unsubscribe('cancelEditing');
      components_shared_helpers_Bus__WEBPACK_IMPORTED_MODULE_16__["Bus"].unsubscribe('endEditing');
    }
  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
        ref: function ref(el) {
          return _this10._scrollContent = el;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "messages-content ".concat(this.state.loadingMessages ? 'scroll-disable' : ''),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 17
        }
      }, this.state.loadingMessages && __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "sbl-circ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 52
        }
      }), this.state.messagesSelector.map(function (message, index) {
        var _isOwner = message.owner === 'Me';

        var _dataMSG = _isOwner ? _this10.props.loggedUser : _this10.props.activeUser;

        if (!_dataMSG) return '';
        return __jsx("div", {
          key: message.time + index,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + ((_isOwner ? 'content-right_owner' : 'content-left_owner') || ""),
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 29
          }
        }, __jsx(components_shared_UI__WEBPACK_IMPORTED_MODULE_11__["default"].UserImage, {
          firstName: _dataMSG.fullName.split(' ')[0],
          lastName: _dataMSG.fullName.split(' ')[1] || '',
          fill: _dataMSG.color,
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 33
          }
        }), message.removed ? __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "removed-message",
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 52
          }
        }, "Removed message") : __jsx("div", {
          "data-message-type": message.encryptType,
          "data-message-key": message.key,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "message-time ".concat(Object(components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_19__["__detectCryptIcon"])(message) ? 'crypt-message' : ''),
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 304,
            columnNumber: 33
          }
        }, __jsx("div", {
          onClick: function onClick(e) {
            return _this10.__showEncryptPopUp(e, index, Object(components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_19__["__detectCryptIcon"])(message));
          },
          "data-hint-encrypt": false,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "separate-p",
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 37
          }
        }, _isOwner && !Object(components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_19__["__detectCryptIcon"])(message) && !_this10.state.isEditing && !_this10.state.isRemoving && __jsx("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "edit-remove",
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 41
          }
        }, __jsx("i", {
          onClick: function onClick(e) {
            return _this10.__editMessage(e, message, message.time);
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "lnr lnr-pencil",
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 45
          }
        }), __jsx("i", {
          onClick: function onClick(e) {
            return _this10.__removeMessageConfirm(e);
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "lnr lnr-cross",
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 45
          }
        }), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "remove-confirm-container",
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 45
          }
        }, "Are you sure?", __jsx("p", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]),
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318,
            columnNumber: 49
          }
        }, __jsx("a", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "trigger-close-dialog",
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 53
          }
        }, "No"), __jsx("a", {
          onClick: function onClick() {
            return _this10.__removeMessage(message.time);
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]),
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 53
          }
        }, "Yes")))), __jsx("span", {
          onClick: function onClick(e) {
            return _this10.__doEncryptType(e, index);
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "encryptPopUp",
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 325,
            columnNumber: 41
          }
        }, _this10.state.encryptIcon ? __jsx(components_Icons_icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
          name: "unlocked",
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 71
          }
        }) : __jsx(components_Icons_icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
          name: "locked",
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 45
          }
        })), Object(components_shared_helpers_global_functions__WEBPACK_IMPORTED_MODULE_19__["__detectCryptIcon"])(message) ? __jsx("img", {
          src: "./assets/images/key.png",
          alt: "iconSend",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]),
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 71
          }
        }) : __jsx("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]),
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333,
            columnNumber: 45
          }
        }, message.isEncrypt === false ? message.decryptedMsg : //there will be some case which is equal undefined
        message.isEncrypt === true ? message.encryptedMsg : message.message, " "), " ", message.edited && __jsx("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "edited-msg",
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 146
          }
        }, "(edited)")), __jsx("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "time-wrap",
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 37
          }
        }, moment__WEBPACK_IMPORTED_MODULE_12__(+message.time).format('lll')), _isOwner ? index === _this10.state.messagesSelector.length - 1 ? _this10.props.activeUser.isSeen ? __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "status-message",
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 41
          }
        }, "Seen") : __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "status-message",
          __self: _this10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 85
          }
        }, "Delivered") : '' : ''));
      }), __jsx("div", {
        ref: function ref(el) {
          _this10._messagesEnd = el;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 21
        }
      })), this.props.activeUser.isTyping && __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + "is-typing-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 52
        }
      }, this.FN + this.LN + ' is typing ', __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + 'spinner',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + 'bounce1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + 'bounce2',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2020876622", [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor]]]) + " " + 'bounce3',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 25
        }
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2020876622",
        dynamic: [_this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.rightColor, _this10.state.leftColor, _this10.state.rightColor, _this10.state.leftColor],
        __self: this
      }, ".sbl-circ{height:35px;width:35px;color:#5a5a5a;position:relative;display:block;border:2px solid;border-radius:50%;border-top-color:transparent;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;margin:5px auto;}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotate{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.messages-content{height:100%;overflow-x:hidden;position:relative;padding-top:10px;}.scroll-disable{overflow:hidden;}.messages-content::-webkit-scrollbar{width:0px;height:10px;}.messages-content::-webkit-scrollbar-thumb{background:transparent;}.messages-content::-webkit-scrollbar-track{background:transparent;}.content-right_owner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-flow:row-reverse;-ms-flex-flow:row-reverse;flex-flow:row-reverse;text-align:right;padding:0 10px;margin:7px;}.content-left_owner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:end;-ms-flex-pack:end;justify-content:end;text-align:left;padding:0 10px;margin:7px;}.content-left_owner .message-time{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:5px 10px;max-width:50%;position:relative;}.content-left_owner .removed-message,.content-right_owner .removed-message{padding:5px 10px;max-width:50%;position:relative;background-color:#d9d7d7;border-radius:6px;font-size:14px;height:27px;font-style:italic;color:#767575;margin-top:5px;margin-bottom:10px;}.content-left_owner .removed-message{margin-left:10px;}.content-right_owner .removed-message{margin-right:10px;}.content-right_owner .message-time{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding:5px 10px;max-width:50%;position:relative;}.content-left_owner .message-time>div.separate-p .edited-msg,.content-right_owner .message-time>div.separate-p .edited-msg{font-size:10px;font-family:sans-serif;font-style:italic;}.content-left_owner .crypt-message>div.separate-p,.content-right_owner .crypt-message>div.separate-p{background-color:transparent !important;padding:0 !important;height:27px;}.content-left_owner .crypt-message>div.separate-p img,.content-right_owner .crypt-message>div.separate-p img{width:30px;}.content-left_owner .crypt-message>div.separate-p:before,.content-right_owner .crypt-message>div.separate-p:before{border-color:transparent !important;}.message-time .status-message{font-size:12px;color:#424242;}.message-time:hover>span{opacity:1 !important;visibility:visible !important;}.content-right_owner .message-time>span,.content-left_owner .message-time>span{opacity:0;-webkit-transition:.4s;transition:.4s;font-size:9px;font-family:sans-serif;position:absolute;top:-13px;text-align:center;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;background-color:red;padding:3px 5px;color:#fff;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;white-space:nowrap;border-radius:4px;visibility:hidden;}.content-right_owner .message-time>div.separate-p .edit-remove i{padding:2px 4px;position:relative;}.content-right_owner .message-time>div.separate-p .edit-remove i.lnr-pencil:after{content:'';position:absolute;width:5px;height:5px;background:".concat(this.state.rightColor, ";top:0;right:-5px;}.content-right_owner .message-time>div.separate-p .edit-remove i.lnr-cross:after{content:'';position:absolute;width:5px;height:5px;background:").concat(this.state.rightColor, ";bottom:0;right:-5px;}.content-right_owner .message-time>div.separate-p .edit-remove .remove-confirm-container p{margin:4px 0 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.content-right_owner .message-time>div.separate-p .edit-remove .remove-confirm-container p>a:first-child{height:19px;display:inline-block;border:1px solid #ccc;width:25px;border-radius:2px;text-align:center;font-size:12px;vertical-align:middle;margin-right:7px;background-color:").concat(this.state.rightColor, ";color:#fff;cursor:pointer;}.opened-pop-confirm-remove .edit-remove{opacity:1 !important;visibility:visible !important;left:-18px !important;}.content-right_owner .message-time>div.separate-p .edit-remove .remove-confirm-container p>a:last-child{height:19px;display:inline-block;border:1px solid #ccc;width:25px;border-radius:2px;text-align:center;font-size:12px;vertical-align:middle;background-color:#c5cbca;color:#fff;cursor:pointer;}.content-right_owner .message-time>div.separate-p .edit-remove .remove-confirm-container{position:absolute;width:120px;right:24px;padding:6px;color:#000;font-size:13px;border:1px solid #ccc;border-radius:3px;top:14px;bottom:0;margin:auto;height:55px;opacity:0;z-index:22;background:#fff;-webkit-transition:.4s;transition:.4s;visibility:hidden;cursor:default;}.content-right_owner .message-time>div.separate-p .edit-remove .remove-confirm-container:after{content:'';width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:4px solid #dcdcdc;position:absolute;right:-4px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);top:21px;}.content-right_owner .message-time>div.separate-p .edit-remove .remove-confirm-container:before{content:'';width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:3px solid #fff;position:absolute;right:-3px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);top:22px;z-index:22;}.opened-pop-confirm-remove .remove-confirm-container{opacity:1 !important;visibility:visible !important;}.opened-pop-confirm-remove+.time-wrap{display:none;}.content-right_owner .message-time>div.separate-p .edit-remove{position:absolute;left:-15px;background:").concat(this.state.rightColor, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;top:0;width:18px;font-size:9px;height:27px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-right:1px solid;opacity:0;-webkit-transition:.2s;transition:.2s;visibility:hidden;}.content-right_owner .message-time>div.separate-p:hover .edit-remove{opacity:1;visibility:visible;left:-18px;}.content-right_owner .message-time>div.separate-p .edit-remove:after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;height:0.8px;width:18px;margin:auto;background:#fff;}.content-right_owner .message-time>div.separate-p .edit-remove:before{content:'';position:absolute;top:0;bottom:0;right:-1px;height:27px;width:0.8px;margin:auto;background:#fff;z-index:2;}.opened-encryptPopUp .edit-remove{display:none !important;}.content-right_owner .message-time>div.separate-p .encryptPopUp,.content-left_owner .message-time>div.separate-p .encryptPopUp{position:absolute;height:25px;display:none;width:25px;padding:2px;bottom:0;top:0;margin:auto;cursor:pointer;border-radius:5px;}.content-right_owner .message-time>div.separate-p .encryptPopUp{left:-30px;}.content-left_owner .message-time>div.separate-p .encryptPopUp{right:-30px;}.opened-encryptPopUp{background-color:#e7e7e7 !important;color:#000 !important;}.opened-encryptPopUp:before{border-left-color:#e7e7e7 !important;}.opened-encryptPopUp .encryptPopUp{display:block !important;}.content-right_owner .message-time>div.separate-p,.content-left_owner .message-time>div.separate-p{cursor:pointer;text-align:left;margin:0 0 5px 0;display:inline-block;padding:5px 10px;color:#fff;font-size:13px;border-radius:5px;position:relative;min-height:27px;word-break:break-all;}.content-right_owner .message-time>div.separate-p,.content-right_owner .message-time>span{background-color:").concat(this.state.rightColor, ";}.content-left_owner .message-time>div.separate-p,.content-left_owner .message-time>span{background-color:").concat(this.state.leftColor, ";}.content-right_owner .message-time>div.separate-p:before{content:'';width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:4px solid ").concat(this.state.rightColor, ";position:absolute;right:-3px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);top:7px;}.content-left_owner .message-time>div.separate-p:before{content:'';width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:4px solid ").concat(this.state.leftColor, ";position:absolute;left:-3px;-webkit-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg);top:7px;}.is-typing-wrap{margin-left:20px;margin-bottom:7px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:13px;}.is-typing-wrap .spinner{margin-top:5px;margin-left:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcZWxlbWVudHNcXFByaXZhdGVNZXNzYWdlQ29udGVudC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ1dtQyxBQUdtQyxBQWNVLEFBRUssQUFJYixBQU1JLEFBR1IsQUFLYSxBQUlBLEFBR1IsQUFRQSxBQU9BLEFBUUksQUFhQSxBQUdDLEFBR0wsQUFTRSxBQU15QixBQU03QixBQUd5QixBQUdyQixBQUlNLEFBS1gsQUFpQk0sQUFJTCxBQVNBLEFBU0ksQUFLSCxBQWNTLEFBS1QsQUFhTSxBQW9CUCxBQWNBLEFBZVUsQUFJUixBQUdLLEFBd0JSLEFBS0MsQUFZQSxBQVlhLEFBS04sQUFhUCxBQUdDLEFBSXdCLEFBSUMsQUFHWixBQUlWLEFBYStCLEFBR0EsQUFHbkMsQUFZQSxBQWFNLEFBT0YsVUF6V0wsQUEwRkssQUE0SkksQ0EzS3ZCLEFBb0NzQixBQVNBLEFBa0VWLEFBY0EsQUFtRFUsQUFZQSxBQThCdEIsQUFxQ1ksQUFZQSxDQW5YQyxBQW9CUyxBQStJRyxBQW1CQSxBQStJekIsQ0E3RUEsRUE1SjJCLEFBa0JULEFBZ0RELEFBc0xFLEFBbURFLENBN1dyQixBQThHc0IsQ0F4RUosQUFhbEIsQUFtVHNCLENBaFR0QixBQW1IZ0IsQUF3REQsQUEwREMsQ0E3RkgsQUFjQSxBQWtJQSxBQVlBLEVBbFFxQixBQStEQSxBQW1FQSxDQXRObEMsQ0E3QmdCLEFBaUNoQixBQUlBLENBMFFBLENBZ0NBLEdBdkhxQyxBQWNBLEFBa0lBLEFBWUEsQ0F0UXJDLEFBOEJjLEFBU0EsQUFzRzhCLEFBd0I3QixBQUtMLEFBWUEsQ0FoUlksQUErS1AsQUFrSEUsQ0FyUEssQUFvUkQsQ0FtRHJCLENBcE8wQixBQW1CQSxDQTlDMUIsQ0FpSmEsQUFZQSxBQTJGSSxDQXRSakIsQUE4TjBCLENBdlVOLEFBMlVwQixDQWhQc0IsQ0FpRFAsQUFTQSxDQXJEVSxBQW1MekIsQ0FoRmdCLEVBa0hELENBNUJKLEFBWUksRUEwRGYsQUFHQSxFQTlVcUIsQUFrR0gsQUE4Tk8sQ0FwUkksQ0E2RWUsQUFTQSxDQXJDNUMsQUErRDBCLEFBbUUxQixBQXVDWSxFQXRGRyxDQWtIQyxDQXJUQSxBQWtLRCxBQW1CQSxBQWdIQyxDQTFNaEIsRUE0T0EsQ0E3Q2lCLEVBMUxELEFBdUh3QixBQWNBLEFBa0lBLEFBWUEsQ0E3UGIsRUE4RVIsQ0FoTG5CLENBK0lzQixBQW1CQSxBQWdJVCxDQWhCRyxFQXJTRyxBQXlQSyxBQTBGSCxHQTFVSSxBQWlSVixDQTFMZixBQStFQSxDQTFJK0IsQUFRUCxBQU9FLEFBV0osQUFnQkksQ0F1T2hCLElBbEhnQixBQWtHVixFQWlCQSxFQTVCQSxDQXhITSxBQW1CQSxDQWhFQSxDQXJIRixBQW1WTCxDQXpVZSxFQWdKRCxBQStGSixDQTlHZixBQVNHLENBa0pPLENBdk9ELENBd1BBLEVBNUJDLENBL0lMLENBMEVtQixBQWNILEFBZ0haLEFBa0JvQyxBQVlBLEVBN054QyxFQStDTyxDQWpDSCxBQW1CQSxDQWhFTCxDQXJIaUIsR0ErRGYsQUE2RWhCLEFBMEpjLENBaUJRLENBcUVDLENBdk92QixBQW9Hd0IsQ0FrQ3hCLENBeURzQixDQTlOQSxJQTZDSSxBQW1CQSxBQWlIMUIsRUF2T3NCLEFBb0lULEtBZ0NTLEVBcUZ0QixDQW5Hc0IsQ0FqQlQsRUFxREksQUEyRkssQ0E5TkksRUF0SFksSUFnRXBCLEFBcUlGLEVBbENLLEFBbUJRLEdBOENkLEdBZEEsR0ErSEssQUFnQkUsQUFZQSxDQTNLTixFQXJJRyxDQWZRLEFBMkJGLENBd0pVLEdBakVlLEFBbURmLEtBNUtmLEFBNEpOLEdBaEJDLEFBK0pVLEVBcFJGLEFBb1NSLEFBWUQsS0ExS0MsSUFoQkksQ0EyTFcsQ0F2VVgsQUEyVFEsRUFwVUQsR0FzS04sRUE2QlcsQ0FuSy9CLEFBb1JBLENBOUxBLENBK0QrQixHQS9CL0IsRUE1SWUsTUE2SkksSUFyQ0osQUF1TkksQ0E5VW5CLENBNE1rQyxNQW5JVCxDQWdIRSxFQXRPVCxBQXFLQyxDQW1EUSxHQW9LM0IsV0F0TkEsQ0FyS0EsRUFzSG9CLEdBbUlVLEVBaERSLFdBbEZQLE1BM0NNLENBOEhGLEdBeEtFLENBc0ZILEFBOE9OLEVBNUdjLENBek1MLEtBc1RyQixBQVdZLEdBdktaLENBOUhrQixJQTFDQyxBQWdWbkIsSUFqVWtCLE1BNEJJLEtBMUNQLEdBZU8sQUFtTFQsR0FkQSxLQW5MYixDQWtNZSxDQXhKZixFQTBJQSxNQXJLQSxFQW9MQSxFQS9HdUIsbUJBQ0QsS0FpSVosTUFDSyxPQWpJTyxJQWtJSixjQWpJbEIsQUFrSWdCLFlBQ2EseUJBQ2Esc0NBQ2hCLHNCQUNRLG1IQUNQLHVCQUNiLFVBQ0ssc0NBQ0csa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccnVhbGFcXERlc2t0b3BcXEFTYWhha1xcZGFzZXJcXG5leHRcXENyeXB0b0dyYXBoeVxcY29tcG9uZW50c1xcZWxlbWVudHNcXFByaXZhdGVNZXNzYWdlQ29udGVudC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgVUlfRUxFTUVOVFMgZnJvbSBcImNvbXBvbmVudHMvc2hhcmVkL1VJXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICdjb21wb25lbnRzL0ljb25zL2ljb24nO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC5kZWJvdW5jZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgX19MT0FEX01PUkVfTUVTU0FHRVMsXHJcbn0gZnJvbSAnc3RvcmUvYWN0aW9ucyc7XHJcbmltcG9ydCB7IEJ1cyB9IGZyb20gJ2NvbXBvbmVudHMvc2hhcmVkL2hlbHBlcnMvQnVzJztcclxuaW1wb3J0IHtcclxuICAgIF9FVkVSWV9QQUdFX0xJTUlUX01FU1NBR0VTXHJcbn0gZnJvbSAnY29tcG9uZW50cy9zaGFyZWQvaGVscGVycy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBfX2dldFVzZXJNZXNzYWdlcyB9IGZyb20gJ3N0b3JlL3Jlc2VsZWN0JztcclxuaW1wb3J0IHtcclxuICAgIF9fZGV0ZWN0Q3J5cHRJY29uXHJcbn0gZnJvbSAnY29tcG9uZW50cy9zaGFyZWQvaGVscGVycy9nbG9iYWwtZnVuY3Rpb25zJztcclxuaW1wb3J0IHtcclxuICAgIF9fRURJVF9NRVNTQUdFLFxyXG4gICAgX19SRU1PVkVfTUVTU0FHRSxcclxufSBmcm9tIFwic3RvcmUvc2FnYVwiO1xyXG5cclxuY2xhc3MgUHJpdmF0ZU1lc3NhZ2VDb250ZW50IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsZWZ0Q29sb3I6IHRoaXMucHJvcHMuYWN0aXZlVXNlciAmJiB0aGlzLnByb3BzLmFjdGl2ZVVzZXI/LmNvbG9yIHx8ICcjMEM0NjUxJyxcclxuICAgICAgICAgICAgcmlnaHRDb2xvcjogdGhpcy5wcm9wcy5hY3RpdmVVc2VyICYmIHRoaXMucHJvcHMubG9nZ2VkVXNlcj8uY29sb3IgfHwgJyMxQkJDOUInLFxyXG4gICAgICAgICAgICBzY3JvbGxMb2FkaW5nQWxsb3c6IHRydWUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzU2VsZWN0b3I6IFtdLFxyXG4gICAgICAgICAgICBlbmNyeXB0SWNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2Nyb2xsUG9zaXRpb246IG51bGwsXHJcbiAgICAgICAgICAgIHByZXZpb3VzU2Nyb2xsSGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICBwcmV2aW91c1Njcm9sbFRvcDogMCxcclxuICAgICAgICAgICAgbG9hZGluZ01lc3NhZ2VzOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNFZGl0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNSZW1vdmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGVkaXRpbmdNc2dJbmRleDogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX21lc3NhZ2VzRW5kICAgICAgICAgICA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRG9tQ2xpY2sgICAgICAgID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9oYW5kbGVDbGlja1JlbW92ZSAgICAgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX19zY3JvbGxUb0JvdHRvbSAgICAgICA9IHRoaXMuX19zY3JvbGxUb0JvdHRvbS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX19oYW5kbGVTY3JvbGxUb3AgICAgICA9IHRoaXMuX19oYW5kbGVTY3JvbGxUb3AuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fc2hvd0VuY3J5cHRQb3BVcCAgICAgPSB0aGlzLl9fc2hvd0VuY3J5cHRQb3BVcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX19kb0VuY3J5cHRUeXBlICAgICAgICA9IHRoaXMuX19kb0VuY3J5cHRUeXBlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fX2hpZGVQb3BVcEVuY3J5cHQgICAgID0gdGhpcy5fX2hpZGVQb3BVcEVuY3J5cHQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fZWRpdE1lc3NhZ2UgICAgICAgICAgPSB0aGlzLl9fZWRpdE1lc3NhZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fcmVtb3ZlTWVzc2FnZUNvbmZpcm0gPSB0aGlzLl9fcmVtb3ZlTWVzc2FnZUNvbmZpcm0uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9fcmVtb3ZlTWVzc2FnZSAgICAgICAgPSB0aGlzLl9fcmVtb3ZlTWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX19jbGlja1JlbW92ZVBvcFVwID0gdGhpcy5fX2NsaWNrUmVtb3ZlUG9wVXAuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9zY3JvbGxDb250ZW50ICAgICA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgIEJ1cy5zdWJzY3JpYmUoJ2NhbmNlbEVkaXRpbmcnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEJ1cy5zdWJzY3JpYmUoJ2VuZEVkaXRpbmcnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzUmVtb3Zpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZWRpdGluZ01zZ0luZGV4OiBudWxsLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX19zY3JvbGxUb0JvdHRvbSAoYmVoYXZpb3IpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZXNFbmQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IChiZWhhdmlvciA/ICdzbW9vdGgnIDogJ2F1dG8nKX0pO1xyXG4gICAgICAgIH0sIDApXHJcbiAgICB9XHJcblxyXG4gICAgX19oYW5kbGVTY3JvbGxUb3AgKGUpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2Nyb2xsTG9hZGluZ0FsbG93ICYmIGUudGFyZ2V0LnNjcm9sbFRvcCA8IDUwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNTY3JvbGxUb3A6IHRoaXMuX3Njcm9sbENvbnRlbnQ/LnNjcm9sbFRvcCxcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzU2Nyb2xsSGVpZ2h0OiB0aGlzLl9zY3JvbGxDb250ZW50Py5zY3JvbGxIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxMb2FkaW5nQWxsb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ01lc3NhZ2VzOiB0cnVlLFxyXG4gICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLl9fTE9BRF9NT1JFX01FU1NBR0VTKDEpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxMb2FkaW5nQWxsb3c6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX19zaG93RW5jcnlwdFBvcFVwIChldnQsIGluZGV4LCBpc0tleSkge1xyXG4gICAgICAgIGlmIChldnQudGFyZ2V0LmNsb3Nlc3QoJy5yZW1vdmUtY29uZmlybS1jb250YWluZXInKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBfY3VycmVudFNyYyA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLnNlcGFyYXRlLXAnKTtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcub3BlbmVkLWVuY3J5cHRQb3BVcCcpICYmXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLm9wZW5lZC1lbmNyeXB0UG9wVXAnKSAhPT0gX2N1cnJlbnRTcmNcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcub3BlbmVkLWVuY3J5cHRQb3BVcCcpLnNldEF0dHJpYnV0ZSgnZGF0YS1oaW50LWVuY3J5cHQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLm9wZW5lZC1lbmNyeXB0UG9wVXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuZWQtZW5jcnlwdFBvcFVwJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzS2V5KSByZXR1cm47XHJcbiAgICAgICAgaWYgKF9jdXJyZW50U3JjKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFJY29uID0gX2N1cnJlbnRTcmMuZ2V0QXR0cmlidXRlKCdkYXRhLWhpbnQtZW5jcnlwdCcpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1lc3NhZ2VzU2VsZWN0b3IgPSBbLi4udGhpcy5zdGF0ZS5tZXNzYWdlc1NlbGVjdG9yXTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZXNzYWdlc1NlbGVjdG9yW2luZGV4XS5pc0VuY3J5cHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlbmNyeXB0SWNvbjogSlNPTi5wYXJzZShkYXRhSWNvbiksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlc1NlbGVjdG9yOiB0aGlzLnN0YXRlLm1lc3NhZ2VzU2VsZWN0b3JcclxuICAgICAgICAgICAgfSwgKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcclxuICAgICAgICAgICAgX2N1cnJlbnRTcmMuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkLWVuY3J5cHRQb3BVcCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVEb21DbGljayA9IHRoaXMuX19oaWRlUG9wVXBFbmNyeXB0LmJpbmQodGhpcywgaW5kZXgpKVxyXG4gICAgICAgIH0sIDApXHJcbiAgICB9XHJcblxyXG4gICAgX19oaWRlUG9wVXBFbmNyeXB0IChpbmRleCwgZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3RvciA9IFsuLi50aGlzLnN0YXRlLm1lc3NhZ2VzU2VsZWN0b3JdO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnN0YXRlLm1lc3NhZ2VzU2VsZWN0b3JbaW5kZXhdLmlzRW5jcnlwdDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWVzc2FnZXNTZWxlY3RvcjogdGhpcy5zdGF0ZS5tZXNzYWdlc1NlbGVjdG9yXHJcbiAgICAgICAgfSwgKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcclxuXHJcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVEb21DbGljayk7XHJcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCdkaXZbZGF0YS1oaW50LWVuY3J5cHRdJykgJiYgZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcub3BlbmVkLWVuY3J5cHRQb3BVcCcpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLm9wZW5lZC1lbmNyeXB0UG9wVXAnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGludC1lbmNyeXB0JywgZmFsc2UpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuZWQtZW5jcnlwdFBvcFVwJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkLWVuY3J5cHRQb3BVcCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9fZG9FbmNyeXB0VHlwZSAoZSwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBfY3VycmVudFNyYyA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zZXBhcmF0ZS1wJyk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVuY3J5cHRJY29uOiAhdGhpcy5zdGF0ZS5lbmNyeXB0SWNvblxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgX2N1cnJlbnRTcmMuc2V0QXR0cmlidXRlKCdkYXRhLWhpbnQtZW5jcnlwdCcsIHRoaXMuc3RhdGUuZW5jcnlwdEljb24pO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdFbmNyeXB0aW9uID0gWy4uLnRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3Rvcl07XHJcbiAgICAgICAgICAgIG5ld0VuY3J5cHRpb25baW5kZXhdLmlzRW5jcnlwdCA9IHRoaXMuc3RhdGUuZW5jcnlwdEljb247XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNTZWxlY3RvcjogbmV3RW5jcnlwdGlvblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX19lZGl0TWVzc2FnZSAoZXZ0LCBtc2csIHRpbWUpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvcHMubWVzc2FnZXMuZmluZEluZGV4KG1zZyA9PiBtc2cudGltZSA9PT0gdGltZSk7XHJcbiAgICAgICAgX19FRElUX01FU1NBR0UobnVsbCwgaW5kZXgsIHtpZFVzZXI6IHRoaXMucHJvcHMuYWN0aXZlVXNlcj8uaWQsIG15SWQ6IHRoaXMucHJvcHMubG9nZ2VkVXNlcj8uaWR9KS5uZXh0KCk7XHJcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0VkaXRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGVkaXRpbmdNc2dJbmRleDogaW5kZXhcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEJ1cy5kaXNwYXRjaCgnZWRpdE1lc3NhZ2UnLCB7bXNnLCBpbmRleH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgIF9fcmVtb3ZlTWVzc2FnZUNvbmZpcm0gKGV2dCkge1xyXG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCBfY3VycmVudFNyYyAgICAgID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuc2VwYXJhdGUtcCcpO1xyXG4gICAgICAgIGNvbnN0IGFscmVhZHlEZWNsYXJlZCAgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5tZXNzYWdlcy1jb250ZW50Jyk/LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuZWQtcG9wLWNvbmZpcm0tcmVtb3ZlJyk7XHJcbiAgICAgICAgaWYgKGFscmVhZHlEZWNsYXJlZCkge1xyXG4gICAgICAgICAgICBhbHJlYWR5RGVjbGFyZWQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkLXBvcC1jb25maXJtLXJlbW92ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfY3VycmVudFNyYy5jbGFzc0xpc3QuYWRkKCdvcGVuZWQtcG9wLWNvbmZpcm0tcmVtb3ZlJyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2xpY2tSZW1vdmUgPSB0aGlzLl9fY2xpY2tSZW1vdmVQb3BVcC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIF9fcmVtb3ZlTWVzc2FnZSAodGltZSkge1xyXG4gICAgICAgIF9fUkVNT1ZFX01FU1NBR0UodGltZSwge2lkVXNlcjogdGhpcy5wcm9wcy5hY3RpdmVVc2VyPy5pZCwgbXlJZDogdGhpcy5wcm9wcy5sb2dnZWRVc2VyPy5pZH0pLm5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBfX2NsaWNrUmVtb3ZlUG9wVXAgKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IGFscmVhZHlEZWNsYXJlZCAgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5tZXNzYWdlcy1jb250ZW50Jyk/LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuZWQtcG9wLWNvbmZpcm0tcmVtb3ZlJyk7XHJcbiAgICAgICAgaWYgKGFscmVhZHlEZWNsYXJlZCAmJiAhZXZ0LnRhcmdldC5jbG9zZXN0KCcucmVtb3ZlLWNvbmZpcm0tY29udGFpbmVyJykgfHwgZXZ0LnRhcmdldC5jbG9zZXN0KCcudHJpZ2dlci1jbG9zZS1kaWFsb2cnKSkge1xyXG4gICAgICAgICAgICBhbHJlYWR5RGVjbGFyZWQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkLXBvcC1jb25maXJtLXJlbW92ZScpO1xyXG4gICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrUmVtb3ZlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG4gICAgICAgIC8vIGlmIChwcmV2UHJvcHMuYWN0aXZlVXNlci5pc1R5cGluZyAhPT0gdGhpcy5wcm9wcy5hY3RpdmVVc2VyLmlzVHlwaW5nKSB7IHRvZG9cclxuICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5hY3RpdmVVc2VyLmlzVHlwaW5nICYmIHRoaXMuX19zY3JvbGxUb0JvdHRvbSgnYmVoYXZpb3InKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIERldGVjdCBpZiB0aGVyZSBhcmUgcmVtb3ZlZCBtZXNzYWdlXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlVXNlcj8ucmVtb3ZlZE1lc3NhZ2VJbmRleCA+PSAwICYmXHJcbiAgICAgICAgICAgIChwcmV2UHJvcHMubWVzc2FnZXNbdGhpcy5wcm9wcy5hY3RpdmVVc2VyLnJlbW92ZWRNZXNzYWdlSW5kZXhdPy5yZW1vdmVkICE9PSB0aGlzLnByb3BzLm1lc3NhZ2VzW3RoaXMucHJvcHMuYWN0aXZlVXNlci5yZW1vdmVkTWVzc2FnZUluZGV4XT8ucmVtb3ZlZCB8fFxyXG4gICAgICAgICAgICAhKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3Rvci5sZW5ndGggLSAodGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGggLSB0aGlzLnByb3BzLmFjdGl2ZVVzZXIucmVtb3ZlZE1lc3NhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3RvcltjdXJyZW50SW5kZXhdPy5yZW1vdmVkXHJcbiAgICAgICAgICAgIH0pKCkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3Rvci5sZW5ndGggLSAodGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGggLSB0aGlzLnByb3BzLmFjdGl2ZVVzZXIucmVtb3ZlZE1lc3NhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RW5jcnlwdGlvbiA9IFsuLi50aGlzLnN0YXRlLm1lc3NhZ2VzU2VsZWN0b3JdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld0VuY3J5cHRpb25bY3VycmVudEluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0VuY3J5cHRpb25bY3VycmVudEluZGV4XS5yZW1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXNTZWxlY3RvcjogbmV3RW5jcnlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdoZW4gZWRpdGluZyBoYXZlIGJlZW4gZmluaXNoZWRcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVVc2VyPy5lZGl0ZWRNc2dJbmRleCA+PSAwICYmXHJcbiAgICAgICAgICAgICh0aGlzLnByb3BzLm1lc3NhZ2VzW3RoaXMucHJvcHMuYWN0aXZlVXNlcj8uZWRpdGVkTXNnSW5kZXhdLm1lc3NhZ2UgIT09IHByZXZQcm9wcy5tZXNzYWdlc1t0aGlzLnByb3BzLmFjdGl2ZVVzZXI/LmVkaXRlZE1zZ0luZGV4XS5tZXNzYWdlIHx8XHJcbiAgICAgICAgICAgICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLnN0YXRlLm1lc3NhZ2VzU2VsZWN0b3IubGVuZ3RoIC0gKHRoaXMucHJvcHMubWVzc2FnZXMubGVuZ3RoIC0gdGhpcy5wcm9wcy5hY3RpdmVVc2VyPy5lZGl0ZWRNc2dJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3RvcltjdXJyZW50SW5kZXhdLm1lc3NhZ2UgIT09IHRoaXMucHJvcHMubWVzc2FnZXNbdGhpcy5wcm9wcy5hY3RpdmVVc2VyPy5lZGl0ZWRNc2dJbmRleF0ubWVzc2FnZTtcclxuICAgICAgICAgICAgfSkoKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5zdGF0ZS5tZXNzYWdlc1NlbGVjdG9yLmxlbmd0aCAtICh0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aCAtIHRoaXMucHJvcHMuYWN0aXZlVXNlcj8uZWRpdGVkTXNnSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRlZEFycmF5ID0gWy4uLnRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3Rvcl07XHJcbiAgICAgICAgICAgICAgICBlZGl0ZWRBcnJheVtjdXJyZW50SW5kZXhdID0gdGhpcy5wcm9wcy5tZXNzYWdlc1t0aGlzLnByb3BzLmFjdGl2ZVVzZXI/LmVkaXRlZE1zZ0luZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRWRpdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZW1vdmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdGluZ01zZ0luZGV4OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzU2VsZWN0b3I6IGVkaXRlZEFycmF5XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZW5kaW5nIG5vdGlmaWNhdGlvbiB3aGVuIHRoZXJlIHdhcyBub3QgYW55IG1lc3NhZ2VzXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZXMubGVuZ3RoID09PSAxICYmIHRoaXMucHJvcHMubWVzc2FnZXNbMF0ubWVzc2FnZSA9PT0gJycgfHwgcHJldlByb3BzLm1lc3NhZ2VzLmxlbmd0aCA9PT0gMSAmJiBwcmV2UHJvcHMubWVzc2FnZXNbMF0ubWVzc2FnZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tZXNzYWdlc0hhdmVCZWVuRGVsZXRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBVcGRhdGUgbWVzc2FnZSBsaXN0XHJcbiAgICAgICAgaWYgKChwcmV2UHJvcHMubWVzc2FnZXNQYWdlICE9PSB0aGlzLnByb3BzLm1lc3NhZ2VzUGFnZSB8fCBwcmV2UHJvcHMubWVzc2FnZXMubGVuZ3RoICE9PSB0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgaWYgKCh0aGlzLnByb3BzLm1lc3NhZ2VzUGFnZSAtIDEpICogX0VWRVJZX1BBR0VfTElNSVRfTUVTU0FHRVMgPD0gdGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxMb2FkaW5nQWxsb3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01lc3NhZ2VzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlc1NlbGVjdG9yOiBfX2dldFVzZXJNZXNzYWdlcyh7ZGF0YTogdGhpcy5wcm9wcy5tZXNzYWdlcywgcGFnZTogdGhpcy5wcm9wcy5tZXNzYWdlc1BhZ2V9KVxyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2UHJvcHMubWVzc2FnZXMubGVuZ3RoICE9PSB0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fc2Nyb2xsVG9Cb3R0b20oJ2JlaGF2aW9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsQ29udGVudC5zY3JvbGxUbygwLCAodGhpcy5fc2Nyb2xsQ29udGVudC5zY3JvbGxIZWlnaHQgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcmV2aW91c1Njcm9sbEhlaWdodCArIHRoaXMuc3RhdGUucHJldmlvdXNTY3JvbGxUb3AgLSA0NSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5fX0xPQURfTU9SRV9NRVNTQUdFUygtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzU2VsZWN0b3I6IF9fZ2V0VXNlck1lc3NhZ2VzKHtkYXRhOiB0aGlzLnByb3BzLm1lc3NhZ2VzLCBwYWdlOiB0aGlzLnByb3BzLm1lc3NhZ2VzUGFnZX0pXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxDb250ZW50Lm9uc2Nyb2xsID0gZGVib3VuY2UoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aCA+IF9FVkVSWV9QQUdFX0xJTUlUX01FU1NBR0VTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2hhbmRsZVNjcm9sbFRvcChlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB0aGlzLl9fc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrUmVtb3ZlKTtcclxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZURvbUNsaWNrKTtcclxuICAgICAgICBCdXMudW5zdWJzY3JpYmUoJ2NhbmNlbEVkaXRpbmcnKTtcclxuICAgICAgICBCdXMudW5zdWJzY3JpYmUoJ2VuZEVkaXRpbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRk4gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmFjdGl2ZVVzZXIgPyB0aGlzLnByb3BzLmFjdGl2ZVVzZXIuZnVsbE5hbWUuc3BsaXQoJyAnKVswXS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpIDogJyc7XHJcbiAgICB9XHJcbiAgICBnZXQgTE4gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmFjdGl2ZVVzZXIgPyB0aGlzLnByb3BzLmFjdGl2ZVVzZXIuZnVsbE5hbWUuc3BsaXQoJyAnKVsxXT8uc2xpY2UoMCwgMSkgfHwgJycudG9VcHBlckNhc2UoKSA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtZXNzYWdlcy1jb250ZW50ICR7dGhpcy5zdGF0ZS5sb2FkaW5nTWVzc2FnZXMgPyAnc2Nyb2xsLWRpc2FibGUnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICByZWY9eyhlbCkgPT4gdGhpcy5fc2Nyb2xsQ29udGVudCA9IGVsfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nTWVzc2FnZXMgJiYgPGRpdiBjbGFzc05hbWU9XCJzYmwtY2lyY1wiPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlc1NlbGVjdG9yLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2lzT3duZXIgPSBtZXNzYWdlLm93bmVyID09PSAnTWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfZGF0YU1TRyA9IF9pc093bmVyID8gdGhpcy5wcm9wcy5sb2dnZWRVc2VyIDogdGhpcy5wcm9wcy5hY3RpdmVVc2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9kYXRhTVNHKSByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bWVzc2FnZS50aW1lICsgaW5kZXh9IGNsYXNzTmFtZT17X2lzT3duZXIgPyAnY29udGVudC1yaWdodF9vd25lcicgOiAnY29udGVudC1sZWZ0X293bmVyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVJX0VMRU1FTlRTLlVzZXJJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU9e19kYXRhTVNHLmZ1bGxOYW1lLnNwbGl0KCcgJylbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lPXtfZGF0YU1TRy5mdWxsTmFtZS5zcGxpdCgnICcpWzFdIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPXtfZGF0YU1TRy5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnJlbW92ZWQgPyA8ZGl2IGNsYXNzTmFtZT1cInJlbW92ZWQtbWVzc2FnZVwiPlJlbW92ZWQgbWVzc2FnZTwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZXNzYWdlLXRpbWUgJHtfX2RldGVjdENyeXB0SWNvbihtZXNzYWdlKSA/ICdjcnlwdC1tZXNzYWdlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW1lc3NhZ2UtdHlwZT17bWVzc2FnZS5lbmNyeXB0VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbWVzc2FnZS1rZXk9e21lc3NhZ2Uua2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VwYXJhdGUtcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5fX3Nob3dFbmNyeXB0UG9wVXAoZSwgaW5kZXgsIF9fZGV0ZWN0Q3J5cHRJY29uKG1lc3NhZ2UpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGludC1lbmNyeXB0PXtmYWxzZX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhfaXNPd25lciAmJiAhX19kZXRlY3RDcnlwdEljb24obWVzc2FnZSkgJiYgKCF0aGlzLnN0YXRlLmlzRWRpdGluZyAmJiAhdGhpcy5zdGF0ZS5pc1JlbW92aW5nKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVkaXQtcmVtb3ZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibG5yIGxuci1wZW5jaWxcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5fX2VkaXRNZXNzYWdlKGUsIG1lc3NhZ2UsIG1lc3NhZ2UudGltZSl9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJsbnIgbG5yLWNyb3NzXCIgb25DbGljaz17KGUpID0+IHRoaXMuX19yZW1vdmVNZXNzYWdlQ29uZmlybShlKX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtb3ZlLWNvbmZpcm0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFyZSB5b3Ugc3VyZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0cmlnZ2VyLWNsb3NlLWRpYWxvZ1wiPk5vPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5fX3JlbW92ZU1lc3NhZ2UobWVzc2FnZS50aW1lKX0+WWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVuY3J5cHRQb3BVcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5fX2RvRW5jcnlwdFR5cGUoZSwgaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbmNyeXB0SWNvbiA/IDxJY29uIG5hbWU9XCJ1bmxvY2tlZFwiIC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwibG9ja2VkXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19fZGV0ZWN0Q3J5cHRJY29uKG1lc3NhZ2UpID8gPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMva2V5LnBuZ1wiIGFsdD1cImljb25TZW5kXCIvPiA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttZXNzYWdlLmlzRW5jcnlwdCA9PT0gZmFsc2UgPyBtZXNzYWdlLmRlY3J5cHRlZE1zZyA6Ly90aGVyZSB3aWxsIGJlIHNvbWUgY2FzZSB3aGljaCBpcyBlcXVhbCB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5pc0VuY3J5cHQgPT09IHRydWUgPyBtZXNzYWdlLmVuY3J5cHRlZE1zZyA6IG1lc3NhZ2UubWVzc2FnZX0gPC9zcGFuPn0ge21lc3NhZ2UuZWRpdGVkICYmIDxzcGFuIGNsYXNzTmFtZT1cImVkaXRlZC1tc2dcIj4oZWRpdGVkKTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lLXdyYXBcIj57bW9tZW50KCttZXNzYWdlLnRpbWUpLmZvcm1hdCgnbGxsJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X2lzT3duZXIgPyAoaW5kZXggPT09IHRoaXMuc3RhdGUubWVzc2FnZXNTZWxlY3Rvci5sZW5ndGggLSAxKSA/IHRoaXMucHJvcHMuYWN0aXZlVXNlci5pc1NlZW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXMtbWVzc2FnZVwiPlNlZW48L2Rpdj46IDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzLW1lc3NhZ2VcIj5EZWxpdmVyZWQ8L2Rpdj4gOiAnJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyhlbCkgPT4geyB0aGlzLl9tZXNzYWdlc0VuZCA9IGVsIH19PnsvKlNjcm9sbCBJbnRvIFZpZXcqL308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWN0aXZlVXNlci5pc1R5cGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cImlzLXR5cGluZy13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuRk4gKyB0aGlzLkxOICsgJyBpcyB0eXBpbmcgJ31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3Bpbm5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3VuY2UxJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvdW5jZTInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm91bmNlMyc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5zYmwtY2lyYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMXMgbGluZWFyIGluZmluaXRlOyBcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlcy1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zY3JvbGwtZGlzYWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlcy1jb250ZW50IDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2VzLWNvbnRlbnQgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2VzLWNvbnRlbnQgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93LXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1sZWZ0X293bmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LWxlZnRfb3duZXIgLm1lc3NhZ2UtdGltZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtbGVmdF9vd25lciAucmVtb3ZlZC1tZXNzYWdlLCAuY29udGVudC1yaWdodF9vd25lciAucmVtb3ZlZC1tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWQ3ZDc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3Njc1NzU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtbGVmdF9vd25lciAucmVtb3ZlZC1tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5yZW1vdmVkLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1sZWZ0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcCAuZWRpdGVkLW1zZywgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wIC5lZGl0ZWQtbXNne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LWxlZnRfb3duZXIgLmNyeXB0LW1lc3NhZ2UgPiBkaXYuc2VwYXJhdGUtcCwgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLmNyeXB0LW1lc3NhZ2UgPiBkaXYuc2VwYXJhdGUtcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1sZWZ0X293bmVyIC5jcnlwdC1tZXNzYWdlID4gZGl2LnNlcGFyYXRlLXAgaW1nLCBcclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAuY3J5cHQtbWVzc2FnZSA+IGRpdi5zZXBhcmF0ZS1wIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LWxlZnRfb3duZXIgLmNyeXB0LW1lc3NhZ2UgPiBkaXYuc2VwYXJhdGUtcDpiZWZvcmUsIC5jb250ZW50LXJpZ2h0X293bmVyIC5jcnlwdC1tZXNzYWdlID4gZGl2LnNlcGFyYXRlLXA6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubWVzc2FnZS10aW1lIC5zdGF0dXMtbWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MjQyNDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlLXRpbWU6aG92ZXIgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBzcGFuLFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LWxlZnRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wIC5lZGl0LXJlbW92ZSBpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNHB4OyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAgLmVkaXQtcmVtb3ZlIGkubG5yLXBlbmNpbDphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhpcy5zdGF0ZS5yaWdodENvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wIC5lZGl0LXJlbW92ZSBpLmxuci1jcm9zczphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhpcy5zdGF0ZS5yaWdodENvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wIC5lZGl0LXJlbW92ZSAucmVtb3ZlLWNvbmZpcm0tY29udGFpbmVyIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweCAwIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcCAuZWRpdC1yZW1vdmUgLnJlbW92ZS1jb25maXJtLWNvbnRhaW5lciBwID4gYTpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnN0YXRlLnJpZ2h0Q29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLm9wZW5lZC1wb3AtY29uZmlybS1yZW1vdmUgLmVkaXQtcmVtb3ZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcCAuZWRpdC1yZW1vdmUgLnJlbW92ZS1jb25maXJtLWNvbnRhaW5lciBwID4gYTpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNWNiY2E7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAgLmVkaXQtcmVtb3ZlIC5yZW1vdmUtY29uZmlybS1jb250YWluZXJ7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAgLmVkaXQtcmVtb3ZlIC5yZW1vdmUtY29uZmlybS1jb250YWluZXI6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZGNkY2RjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAgLmVkaXQtcmVtb3ZlIC5yZW1vdmUtY29uZmlybS1jb250YWluZXI6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyMjtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuZWQtcG9wLWNvbmZpcm0tcmVtb3ZlIC5yZW1vdmUtY29uZmlybS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm9wZW5lZC1wb3AtY29uZmlybS1yZW1vdmUgKyAudGltZS13cmFwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wIC5lZGl0LXJlbW92ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLnJpZ2h0Q29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXA6aG92ZXIgLmVkaXQtcmVtb3Zle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMThweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wIC5lZGl0LXJlbW92ZTphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAgLmVkaXQtcmVtb3ZlOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAub3BlbmVkLWVuY3J5cHRQb3BVcCAuZWRpdC1yZW1vdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcCAuZW5jcnlwdFBvcFVwLFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LWxlZnRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wIC5lbmNyeXB0UG9wVXB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcCAuZW5jcnlwdFBvcFVwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LWxlZnRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wIC5lbmNyeXB0UG9wVXB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm9wZW5lZC1lbmNyeXB0UG9wVXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAub3BlbmVkLWVuY3J5cHRQb3BVcDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2U3ZTdlNyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAub3BlbmVkLWVuY3J5cHRQb3BVcCAuZW5jcnlwdFBvcFVwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1yaWdodF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAsXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtbGVmdF9vd25lciAubWVzc2FnZS10aW1lID4gZGl2LnNlcGFyYXRlLXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcCwgLmNvbnRlbnQtcmlnaHRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMuc3RhdGUucmlnaHRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LWxlZnRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wLCAuY29udGVudC1sZWZ0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnN0YXRlLmxlZnRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXJpZ2h0X293bmVyIC5tZXNzYWdlLXRpbWUgPiBkaXYuc2VwYXJhdGUtcDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgJHt0aGlzLnN0YXRlLnJpZ2h0Q29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LWxlZnRfb3duZXIgLm1lc3NhZ2UtdGltZSA+IGRpdi5zZXBhcmF0ZS1wOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAke3RoaXMuc3RhdGUubGVmdENvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5pcy10eXBpbmctd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmlzLXR5cGluZy13cmFwIC5zcGlubmVyeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5Qcml2YXRlTWVzc2FnZUNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gICAgbWVzc2FnZXNIYXZlQmVlbkRlbGV0ZWQ6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGxvZ2dlZFVzZXI6IHN0YXRlLmNoYXQubG9nZ2VkVXNlcixcclxuICAgIGFjdGl2ZVVzZXI6IHN0YXRlLmNoYXQuYWN0aXZlVXNlcixcclxuICAgIG1lc3NhZ2VzOiBzdGF0ZS5jaGF0LmFjdGl2ZVVzZXJNZXNzYWdlcyxcclxuICAgIG1lc3NhZ2VzUGFnZTogc3RhdGUuY2hhdC5tZXNzYWdlc1BhZ2UsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgX19MT0FEX01PUkVfTUVTU0FHRVNcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShQcml2YXRlTWVzc2FnZUNvbnRlbnQpO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ruala\\\\Desktop\\\\ASahak\\\\daser\\\\next\\\\CryptoGraphy\\\\components\\\\elements\\\\PrivateMessageContent.jsx */")));
    }
  }, {
    key: "FN",
    get: function get() {
      return this.props.activeUser ? this.props.activeUser.fullName.split(' ')[0].slice(0, 1).toUpperCase() : '';
    }
  }, {
    key: "LN",
    get: function get() {
      var _this$props$activeUse10;

      return this.props.activeUser ? ((_this$props$activeUse10 = this.props.activeUser.fullName.split(' ')[1]) === null || _this$props$activeUse10 === void 0 ? void 0 : _this$props$activeUse10.slice(0, 1)) || ''.toUpperCase() : '';
    }
  }]);

  return PrivateMessageContent;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);

PrivateMessageContent.propTypes = {
  messagesHaveBeenDeleted: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedUser: state.chat.loggedUser,
    activeUser: state.chat.activeUser,
    messages: state.chat.activeUserMessages,
    messagesPage: state.chat.messagesPage
  };
};

var mapDispatchToProps = {
  __LOAD_MORE_MESSAGES: store_actions__WEBPACK_IMPORTED_MODULE_15__["__LOAD_MORE_MESSAGES"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(PrivateMessageContent));

/***/ })

})
//# sourceMappingURL=index.js.e3df9089d10f6741777c.hot-update.js.map