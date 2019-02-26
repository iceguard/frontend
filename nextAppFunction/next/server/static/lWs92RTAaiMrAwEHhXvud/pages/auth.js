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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/@core/form/Form.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Form_Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, _getPrototypeOf(Form).apply(this, arguments));
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onSubmit = _this$props.onSubmit,
          children = _this$props.children;
      return external_react_default.a.createElement("form", {
        onSubmit: onSubmit
      }, children);
    }
  }]);

  return Form;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/@core/form/FormInput.js
function FormInput_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FormInput_typeof = function _typeof(obj) { return typeof obj; }; } else { FormInput_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FormInput_typeof(obj); }

function FormInput_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FormInput_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FormInput_createClass(Constructor, protoProps, staticProps) { if (protoProps) FormInput_defineProperties(Constructor.prototype, protoProps); if (staticProps) FormInput_defineProperties(Constructor, staticProps); return Constructor; }

function FormInput_possibleConstructorReturn(self, call) { if (call && (FormInput_typeof(call) === "object" || typeof call === "function")) { return call; } return FormInput_assertThisInitialized(self); }

function FormInput_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FormInput_getPrototypeOf(o) { FormInput_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FormInput_getPrototypeOf(o); }

function FormInput_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FormInput_setPrototypeOf(subClass, superClass); }

function FormInput_setPrototypeOf(o, p) { FormInput_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FormInput_setPrototypeOf(o, p); }



var FormInput_FormInput =
/*#__PURE__*/
function (_Component) {
  FormInput_inherits(FormInput, _Component);

  function FormInput() {
    FormInput_classCallCheck(this, FormInput);

    return FormInput_possibleConstructorReturn(this, FormInput_getPrototypeOf(FormInput).apply(this, arguments));
  }

  FormInput_createClass(FormInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          name = _this$props.name,
          type = _this$props.type,
          required = _this$props.required,
          initialValue = _this$props.initialValue,
          errorMessage = _this$props.errorMessage,
          onChange = _this$props.onChange,
          hasError = _this$props.hasError;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("label", {
        htmlFor: name
      }, label), external_react_default.a.createElement("input", {
        id: name,
        type: type,
        name: name,
        required: required,
        value: initialValue,
        autoComplete: "off",
        onChange: onChange
      }), hasError && external_react_default.a.createElement("div", null, errorMessage));
    }
  }]);

  return FormInput;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/@core/form/FormInfoBar.js
function FormInfoBar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FormInfoBar_typeof = function _typeof(obj) { return typeof obj; }; } else { FormInfoBar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FormInfoBar_typeof(obj); }

function FormInfoBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FormInfoBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FormInfoBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) FormInfoBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) FormInfoBar_defineProperties(Constructor, staticProps); return Constructor; }

function FormInfoBar_possibleConstructorReturn(self, call) { if (call && (FormInfoBar_typeof(call) === "object" || typeof call === "function")) { return call; } return FormInfoBar_assertThisInitialized(self); }

function FormInfoBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FormInfoBar_getPrototypeOf(o) { FormInfoBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FormInfoBar_getPrototypeOf(o); }

function FormInfoBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FormInfoBar_setPrototypeOf(subClass, superClass); }

function FormInfoBar_setPrototypeOf(o, p) { FormInfoBar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FormInfoBar_setPrototypeOf(o, p); }



var FormInfoBar_FormInfoBar =
/*#__PURE__*/
function (_Component) {
  FormInfoBar_inherits(FormInfoBar, _Component);

  function FormInfoBar() {
    FormInfoBar_classCallCheck(this, FormInfoBar);

    return FormInfoBar_possibleConstructorReturn(this, FormInfoBar_getPrototypeOf(FormInfoBar).apply(this, arguments));
  }

  FormInfoBar_createClass(FormInfoBar, [{
    key: "render",
    value: function render() {
      var infoMessage = this.props.infoMessage;
      return external_react_default.a.createElement("div", null, infoMessage);
    }
  }]);

  return FormInfoBar;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/@core/form/FormSubmit.js
function FormSubmit_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FormSubmit_typeof = function _typeof(obj) { return typeof obj; }; } else { FormSubmit_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FormSubmit_typeof(obj); }

function FormSubmit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FormSubmit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FormSubmit_createClass(Constructor, protoProps, staticProps) { if (protoProps) FormSubmit_defineProperties(Constructor.prototype, protoProps); if (staticProps) FormSubmit_defineProperties(Constructor, staticProps); return Constructor; }

function FormSubmit_possibleConstructorReturn(self, call) { if (call && (FormSubmit_typeof(call) === "object" || typeof call === "function")) { return call; } return FormSubmit_assertThisInitialized(self); }

function FormSubmit_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FormSubmit_getPrototypeOf(o) { FormSubmit_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FormSubmit_getPrototypeOf(o); }

function FormSubmit_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FormSubmit_setPrototypeOf(subClass, superClass); }

function FormSubmit_setPrototypeOf(o, p) { FormSubmit_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FormSubmit_setPrototypeOf(o, p); }



var FormSubmit_FormInput =
/*#__PURE__*/
function (_Component) {
  FormSubmit_inherits(FormInput, _Component);

  function FormInput() {
    FormSubmit_classCallCheck(this, FormInput);

    return FormSubmit_possibleConstructorReturn(this, FormSubmit_getPrototypeOf(FormInput).apply(this, arguments));
  }

  FormSubmit_createClass(FormInput, [{
    key: "render",
    value: function render() {
      var value = this.props.value;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("input", {
        type: "submit",
        value: value
      }));
    }
  }]);

  return FormInput;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/@core/form/index.js
/* concated harmony reexport Form */__webpack_require__.d(__webpack_exports__, "a", function() { return Form_Form; });
/* concated harmony reexport FormInput */__webpack_require__.d(__webpack_exports__, "c", function() { return FormInput_FormInput; });
/* concated harmony reexport FormInfoBar */__webpack_require__.d(__webpack_exports__, "b", function() { return FormInfoBar_FormInfoBar; });
/* concated harmony reexport FormSubmit */__webpack_require__.d(__webpack_exports__, "d", function() { return FormSubmit_FormInput; });





/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./store/actions/auth.js
var SET_USER = 'SET_USER';
var setUser = function setUser(user) {
  return {
    type: SET_USER,
    user: user
  };
};
// CONCATENATED MODULE: ./store/actions/index.js
/* concated harmony reexport SET_USER */__webpack_require__.d(__webpack_exports__, "a", function() { return SET_USER; });
/* concated harmony reexport setUser */__webpack_require__.d(__webpack_exports__, "b", function() { return setUser; });


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(1);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(5);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(4);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(2);

// CONCATENATED MODULE: ./components/@misc/WithUser.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var WithUser_WithUser =
/*#__PURE__*/
function (_Component) {
  _inherits(WithUser, _Component);

  function WithUser() {
    _classCallCheck(this, WithUser);

    return _possibleConstructorReturn(this, _getPrototypeOf(WithUser).apply(this, arguments));
  }

  _createClass(WithUser, [{
    key: "render",
    value: function render() {
      var user = this.props.user;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, this.props.children(user));
    }
  }]);

  return WithUser;
}(external_react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

/* harmony default export */ var _misc_WithUser = (Object(external_react_redux_["connect"])(mapStateToProps)(WithUser_WithUser));
// CONCATENATED MODULE: ./components/@layout/Header.js
function Header_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header_typeof = function _typeof(obj) { return typeof obj; }; } else { Header_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header_typeof(obj); }

function Header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header_createClass(Constructor, protoProps, staticProps) { if (protoProps) Header_defineProperties(Constructor.prototype, protoProps); if (staticProps) Header_defineProperties(Constructor, staticProps); return Constructor; }

function Header_possibleConstructorReturn(self, call) { if (call && (Header_typeof(call) === "object" || typeof call === "function")) { return call; } return Header_assertThisInitialized(self); }

function Header_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header_getPrototypeOf(o) { Header_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Header_getPrototypeOf(o); }

function Header_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Header_setPrototypeOf(subClass, superClass); }

function Header_setPrototypeOf(o, p) { Header_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Header_setPrototypeOf(o, p); }







var Header_Header =
/*#__PURE__*/
function (_PureComponent) {
  Header_inherits(Header, _PureComponent);

  function Header() {
    Header_classCallCheck(this, Header);

    return Header_possibleConstructorReturn(this, Header_getPrototypeOf(Header).apply(this, arguments));
  }

  Header_createClass(Header, [{
    key: "render",
    value: function render() {
      var pathname = this.props.pathname;
      return external_react_default.a.createElement(_misc_WithUser, null, function (user) {
        return external_react_default.a.createElement("header", null, external_react_default.a.createElement("h1", null, "Ice Guard Surveillance System"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
          href: "/"
        }, external_react_default.a.createElement("a", {
          className: pathname === '/' ? 'is-active' : ''
        }, "Home"))), !user.email ? external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
          href: "/login"
        }, external_react_default.a.createElement("a", {
          className: pathname === '/login' ? 'is-active' : ''
        }, "Login"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
          href: "/signup"
        }, external_react_default.a.createElement("a", {
          className: pathname === '/signup' ? 'is-active' : ''
        }, "Sign Up")))) : null), user.email ? external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Curent user: ", user.email), external_react_default.a.createElement("button", {
          onClick: function onClick() {
            return app_default.a.auth().signOut();
          }
        }, "Logout")) : null, external_react_default.a.createElement("hr", null));
      });
    }
  }]);

  return Header;
}(external_react_["PureComponent"]);


// EXTERNAL MODULE: ./store/actions/index.js + 1 modules
var actions = __webpack_require__(6);

// CONCATENATED MODULE: ./components/@layout/Main.js
function Main_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Main_typeof = function _typeof(obj) { return typeof obj; }; } else { Main_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Main_typeof(obj); }

function Main_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Main_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Main_createClass(Constructor, protoProps, staticProps) { if (protoProps) Main_defineProperties(Constructor.prototype, protoProps); if (staticProps) Main_defineProperties(Constructor, staticProps); return Constructor; }

function Main_possibleConstructorReturn(self, call) { if (call && (Main_typeof(call) === "object" || typeof call === "function")) { return call; } return Main_assertThisInitialized(self); }

function Main_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Main_getPrototypeOf(o) { Main_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Main_getPrototypeOf(o); }

function Main_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Main_setPrototypeOf(subClass, superClass); }

function Main_setPrototypeOf(o, p) { Main_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Main_setPrototypeOf(o, p); }








var Main_Main =
/*#__PURE__*/
function (_Component) {
  Main_inherits(Main, _Component);

  function Main() {
    var _this;

    Main_classCallCheck(this, Main);

    _this = Main_possibleConstructorReturn(this, Main_getPrototypeOf(Main).call(this));

    if (!app_default.a.apps.length) {
      app_default.a.initializeApp({
        apiKey: 'AIzaSyBNYyxvZ3Ccg8yonKZPCxboOMu32YvtvoA',
        authDomain: 'ice-guard.firebaseapp.com',
        databaseURL: 'https://ice-guard.firebaseio.com',
        projectId: 'ice-guard',
        storageBucket: 'ice-guard.appspot.com',
        messagingSenderId: '896872120637'
      });
    }

    return _this;
  }

  Main_createClass(Main, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onAuthChange = this.props.onAuthChange;
      app_default.a.auth().onAuthStateChanged(function (user) {
        onAuthChange({
          displayName: user ? user.displayName : null,
          email: user ? user.email : null,
          emailVerified: user ? user.emailVerified : null,
          isAnonymous: user ? user.isAnonymous : null,
          phoneNumber: user ? user.phoneNumber : null,
          photoURL: user ? user.photoURL : null,
          uid: user ? user.uid : null
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("main", null, external_react_default.a.createElement(Header_Header, null), this.props.children);
    }
  }]);

  return Main;
}(external_react_["Component"]);

var Main_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAuthChange: function onAuthChange(user) {
      return dispatch(Object(actions["b" /* setUser */])(user));
    }
  };
};

/* harmony default export */ var _layout_Main = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(null, Main_mapDispatchToProps)(Main_Main));

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/@layout/Main.js + 2 modules
var Main = __webpack_require__(7);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(10);

// CONCATENATED MODULE: ./components/@misc/WithRouter.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var WithRouter_WithRouter =
/*#__PURE__*/
function (_Component) {
  _inherits(WithRouter, _Component);

  function WithRouter() {
    _classCallCheck(this, WithRouter);

    return _possibleConstructorReturn(this, _getPrototypeOf(WithRouter).apply(this, arguments));
  }

  _createClass(WithRouter, [{
    key: "render",
    value: function render() {
      var router = this.props.router;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, this.props.children(router));
    }
  }]);

  return WithRouter;
}(external_react_["Component"]);

/* harmony default export */ var _misc_WithRouter = (Object(router_["withRouter"])(WithRouter_WithRouter));
// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(1);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/@core/form/index.js + 4 modules
var _core_form = __webpack_require__(3);

// CONCATENATED MODULE: ./components/@auth/ChangePassword.js
function ChangePassword_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ChangePassword_typeof = function _typeof(obj) { return typeof obj; }; } else { ChangePassword_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ChangePassword_typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function ChangePassword_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ChangePassword_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ChangePassword_createClass(Constructor, protoProps, staticProps) { if (protoProps) ChangePassword_defineProperties(Constructor.prototype, protoProps); if (staticProps) ChangePassword_defineProperties(Constructor, staticProps); return Constructor; }

function ChangePassword_possibleConstructorReturn(self, call) { if (call && (ChangePassword_typeof(call) === "object" || typeof call === "function")) { return call; } return ChangePassword_assertThisInitialized(self); }

function ChangePassword_getPrototypeOf(o) { ChangePassword_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ChangePassword_getPrototypeOf(o); }

function ChangePassword_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ChangePassword_setPrototypeOf(subClass, superClass); }

function ChangePassword_setPrototypeOf(o, p) { ChangePassword_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ChangePassword_setPrototypeOf(o, p); }

function ChangePassword_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ChangePassword_ChangePassword =
/*#__PURE__*/
function (_Component) {
  ChangePassword_inherits(ChangePassword, _Component);

  function ChangePassword() {
    var _this;

    ChangePassword_classCallCheck(this, ChangePassword);

    _this = ChangePassword_possibleConstructorReturn(this, ChangePassword_getPrototypeOf(ChangePassword).call(this));

    _defineProperty(ChangePassword_assertThisInitialized(ChangePassword_assertThisInitialized(_this)), "updateFormState", function (form) {
      _this.setState({
        form: _objectSpread({}, _this.state.form, form)
      });
    });

    _defineProperty(ChangePassword_assertThisInitialized(ChangePassword_assertThisInitialized(_this)), "updateInputValue", function (event) {
      var form = _objectSpread({}, _this.state.form);

      form[event.target.name].value = event.target.value;

      _this.updateFormState(form);
    });

    _defineProperty(ChangePassword_assertThisInitialized(ChangePassword_assertThisInitialized(_this)), "handleSubmit", function (event) {
      event.preventDefault();
      var oobCode = _this.props.oobCode;
      var newPassword = _this.state.form.newPassword.value;
      var newPasswordRepeat = _this.state.form.newPasswordRepeat.value;

      if (newPassword !== newPasswordRepeat) {
        var form = _objectSpread({}, _this.state.form);

        form.infoMessage = 'Passwörter stimmen nicht überein';

        _this.updateFormState(form);

        return;
      }

      app_default.a.auth().confirmPasswordReset(oobCode, newPassword).then(function () {
        _this.setState({
          changePasswordSuccess: true
        });
      }).catch(function (error) {
        var errorCode = error.code;

        var form = _objectSpread({}, _this.state.form);

        if (errorCode === 'aauth/expired-action-code') {
          form.infoMessage = 'Action Code ist abgelaufen';
        } else if (errorCode === 'auth/invalid-action-code') {
          form.infoMessage = 'Action Code ist ungültig';
        } else if (errorCode == 'auth/user-disabled') {
          form.infoMessage = 'User wurde deaktiviert';
        } else if (errorCode == 'auth/user-not-found') {
          form.infoMessage = 'User wurde nicht gefunden';
        } else if (errorCode == 'auth/weak-password') {
          form.infoMessage = 'Schwaches Passwort';
        } else {
          form.infoMessage = errorCode;
        }

        _this.updateFormState(form);
      });
    });

    _this.state = {
      changePasswordSuccess: false,
      actionCodeIsValid: false,
      form: {
        infoMessage: '',
        newPassword: {
          label: 'Neues Passwort',
          name: 'newPassword',
          type: 'password',
          value: '',
          required: true,
          errorMessage: '',
          hasError: false
        },
        newPasswordRepeat: {
          label: 'Neues Passwort wiederholen',
          name: 'newPasswordRepeat',
          type: 'password',
          value: '',
          required: true,
          errorMessage: '',
          hasError: false
        }
      }
    };
    return _this;
  }

  ChangePassword_createClass(ChangePassword, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var oobCode = this.props.oobCode;
      app_default.a.auth().checkActionCode(oobCode).then(function () {
        _this2.setState({
          actionCodeIsValid: true
        });
      }).catch(function () {
        _this2.setState({
          actionCodeIsValid: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          form = _this$state.form,
          changePasswordSuccess = _this$state.changePasswordSuccess;

      if (changePasswordSuccess) {
        return external_react_default.a.createElement("p", null, "Ihr Password wurde ge\xE4ndert");
      }

      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h2", null, "Passwort \xE4ndern"), external_react_default.a.createElement(_core_form["a" /* Form */], {
        onSubmit: this.handleSubmit
      }, external_react_default.a.createElement(_core_form["b" /* FormInfoBar */], {
        infoMessage: form.infoMessage
      }), external_react_default.a.createElement(_core_form["c" /* FormInput */], {
        label: form.newPassword.label,
        name: form.newPassword.name,
        type: form.newPassword.type,
        required: form.newPassword.required,
        intitialValue: form.newPassword.value,
        errorMessage: form.newPassword.errorMessage,
        onChange: this.updateInputValue,
        hasError: form.newPassword.hasError
      }), external_react_default.a.createElement(_core_form["c" /* FormInput */], {
        label: form.newPasswordRepeat.label,
        name: form.newPasswordRepeat.name,
        type: form.newPasswordRepeat.type,
        required: form.newPasswordRepeat.required,
        intitialValue: form.newPasswordRepeat.value,
        errorMessage: form.newPasswordRepeat.errorMessage,
        onChange: this.updateInputValue,
        hasError: form.newPasswordRepeat.hasError
      }), external_react_default.a.createElement(_core_form["d" /* FormSubmit */], {
        value: "Password \xE4ndern"
      })));
    }
  }]);

  return ChangePassword;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/@auth/Auth.js
function Auth_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Auth_typeof = function _typeof(obj) { return typeof obj; }; } else { Auth_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Auth_typeof(obj); }

function Auth_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Auth_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Auth_createClass(Constructor, protoProps, staticProps) { if (protoProps) Auth_defineProperties(Constructor.prototype, protoProps); if (staticProps) Auth_defineProperties(Constructor, staticProps); return Constructor; }

function Auth_possibleConstructorReturn(self, call) { if (call && (Auth_typeof(call) === "object" || typeof call === "function")) { return call; } return Auth_assertThisInitialized(self); }

function Auth_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Auth_getPrototypeOf(o) { Auth_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Auth_getPrototypeOf(o); }

function Auth_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Auth_setPrototypeOf(subClass, superClass); }

function Auth_setPrototypeOf(o, p) { Auth_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Auth_setPrototypeOf(o, p); }





var Auth_Auth =
/*#__PURE__*/
function (_Component) {
  Auth_inherits(Auth, _Component);

  function Auth() {
    Auth_classCallCheck(this, Auth);

    return Auth_possibleConstructorReturn(this, Auth_getPrototypeOf(Auth).call(this));
  }

  Auth_createClass(Auth, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(_misc_WithRouter, null, function (router) {
        var _router$query = router.query,
            mode = _router$query.mode,
            oobCode = _router$query.oobCode;
        var authView = null;

        if (!mode || !oobCode) {
          return null;
        }

        switch (mode) {
          case 'resetPassword':
            authView = external_react_default.a.createElement(ChangePassword_ChangePassword, {
              mode: mode,
              oobCode: oobCode
            });
            break;

          default:
            break;
        }

        return authView;
      });
    }
  }]);

  return Auth;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./pages/auth.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return auth_AuthPage; });
function auth_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { auth_typeof = function _typeof(obj) { return typeof obj; }; } else { auth_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return auth_typeof(obj); }

function auth_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function auth_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function auth_createClass(Constructor, protoProps, staticProps) { if (protoProps) auth_defineProperties(Constructor.prototype, protoProps); if (staticProps) auth_defineProperties(Constructor, staticProps); return Constructor; }

function auth_possibleConstructorReturn(self, call) { if (call && (auth_typeof(call) === "object" || typeof call === "function")) { return call; } return auth_assertThisInitialized(self); }

function auth_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function auth_getPrototypeOf(o) { auth_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return auth_getPrototypeOf(o); }

function auth_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) auth_setPrototypeOf(subClass, superClass); }

function auth_setPrototypeOf(o, p) { auth_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return auth_setPrototypeOf(o, p); }





var auth_AuthPage =
/*#__PURE__*/
function (_Component) {
  auth_inherits(AuthPage, _Component);

  function AuthPage() {
    auth_classCallCheck(this, AuthPage);

    return auth_possibleConstructorReturn(this, auth_getPrototypeOf(AuthPage).apply(this, arguments));
  }

  auth_createClass(AuthPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(Main["a" /* default */], null, external_react_default.a.createElement(Auth_Auth, null));
    }
  }]);

  return AuthPage;
}(external_react_["Component"]);



/***/ })
/******/ ]);