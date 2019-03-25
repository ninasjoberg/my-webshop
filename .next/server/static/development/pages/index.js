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

/***/ "./cmsApi.js":
/*!*******************!*\
  !*** ./cmsApi.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sanityClient = __webpack_require__(/*! @sanity/client */ "@sanity/client");

var client = sanityClient({
  projectId: '37lcj78e',
  dataset: 'products',
  useCdn: true
});
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "./components/ActionButton.js":
/*!************************************!*\
  !*** ./components/ActionButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "ActionButton__Button",
  componentId: "rpq1ll-0"
})(["width:150px;height:50px;display:flex;align-items:center;justify-content:space-evenly;font-size:16px;letter-spacing:1px;cursor:pointer;background-color:black;color:white;border-radius:6px;:hover{opacity:0.4;}"]);

var ActionButton = function ActionButton(_ref) {
  var buttonText = _ref.buttonText,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    type: "submit",
    value: "Submit",
    onClick: onClick
  }, buttonText);
};

/* harmony default export */ __webpack_exports__["default"] = (ActionButton);

/***/ }),

/***/ "./components/AddressForm.js":
/*!***********************************!*\
  !*** ./components/AddressForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActionButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionButton.js */ "./components/ActionButton.js");



var Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "AddressForm__Form",
  componentId: "sc-1g7dwk8-0"
})(["display:flex;flex-direction:column;label{display:flex;flex-direction:column;align-items:flex-start;margin-top:10px;color:#51616a;input{height:52px;width:100%;border-radius:3px;border:1px solid lightgray;margin-bottom:10px;padding:0 0 0 10px;font-size:12px;}}p{text-align:left;margin:10px 0;}"]);
var ErrorInfo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AddressForm__ErrorInfo",
  componentId: "sc-1g7dwk8-1"
})(["position:fixed;top:36%;left:50%;background-color:white;width:400px;height:100px;border:3px solid orange;display:flex;align-items:center;justify-content:center;p{color:orange;font-size:24px;}"]);

var AddressForm = function AddressForm(_ref) {
  var name = _ref.name,
      street = _ref.street,
      zipcode = _ref.zipcode,
      city = _ref.city,
      email = _ref.email,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      errorText = _ref.errorText;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      handleSubmit(e);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Namn:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "name",
    value: name,
    onChange: handleChange,
    placeholder: "F\xF6rnamn Efternamn"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Adress:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "street",
    value: street,
    onChange: handleChange,
    placeholder: "gatauadress"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "zipcode",
    value: zipcode,
    onChange: handleChange,
    placeholder: "postnummer"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "city",
    value: city,
    onChange: handleChange,
    placeholder: "stad"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Mailadress:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "email",
    value: email,
    onChange: handleChange,
    placeholder: "mailadress"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Efter att ordern har skickats till mig s\xE5 kommer jag kontakta dig med vidare instruktioner f\xF6r betalning och leverans. Fram\xF6ver kommer du kunna betala med Stripe, men till dess s\xE5 betalar du f\xF6rslagsvis med Swish i samband med att jag bekr\xE4ftar ordern. Vidare instruktioner om betalning och info om leveranstid f\xE5r du via mail s\xE5 snart jag behandlat din order."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonText: "Skicka order"
  }), errorText && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorInfo, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, errorText))));
};

/* harmony default export */ __webpack_exports__["default"] = (AddressForm);

/***/ }),

/***/ "./components/CartModal.js":
/*!*********************************!*\
  !*** ./components/CartModal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AddressForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddressForm.js */ "./components/AddressForm.js");
/* harmony import */ var _ActionButton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActionButton.js */ "./components/ActionButton.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var CartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CartModal__CartWrapper",
  componentId: "y8wzf7-0"
})(["background-color:#fff;position:fixed;right:40px;width:500px;max-height:80vh;overflow-x:scroll;padding:50px;border:1px solid #dce1e2;border-color:#dce1e2;border-radius:3px;box-shadow:0 0 10px rgba(0,0,0,0.16);display:flex;flex-direction:column;@media (max-width:700px){left:50%;transform:translate(-50%,0);width:85%;padding:20px;}"]);
var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "CartModal__CloseButton",
  componentId: "y8wzf7-1"
})(["display:flex;align-self:flex-end;width:20px;border:none;cursor:pointer;padding:0;background-color:white;:hover{opacity:0.4;}i{font-size:24px;}"]);
var InfoHeaders = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CartModal__InfoHeaders",
  componentId: "y8wzf7-2"
})(["display:flex;justify-content:space-between;"]);
var ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CartModal__ProductInfo",
  componentId: "y8wzf7-3"
})(["display:flex;flex-direction:column;"]);
var RemoveButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "CartModal__RemoveButton",
  componentId: "y8wzf7-4"
})(["display:flex;justify-content:center;width:24px;height:24px;border:none;border-radius:50%;background-color:#f5eee8;color:#51616a;cursor:pointer;:hover{opacity:0.4;}i{font-size:16px;}"]);
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CartModal__Divider",
  componentId: "y8wzf7-5"
})(["height:1px;width:100%;background-color:lightgray;"]);
var ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CartModal__ItemWrapper",
  componentId: "y8wzf7-6"
})(["display:flex;margin:20px 0;align-items:center;justify-content:space-between;"]);
var ProductInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CartModal__ProductInfoWrapper",
  componentId: "y8wzf7-7"
})(["display:flex;flex-basis:50%;align-items:center;img{width:auto;padding-right:20px;}@media (max-width:700px){p{text-align:left;font-size:14px;}img{padding-right:10px;}}"]);
var QuantityWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CartModal__QuantityWrapper",
  componentId: "y8wzf7-8"
})(["display:flex;flex-basis:25%;p{display:flex;margin-right:25px;text-align:right;}"]);
var PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "CartModal__PriceTag",
  componentId: "y8wzf7-9"
})(["display:flex;flex-basis:25%;justify-content:flex-end;"]);
var ItemText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CartModal__ItemText",
  componentId: "y8wzf7-10"
})(["display:flex;flex-direction:column;align-items:flex-start;"]);
var TotalCost = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "CartModal__TotalCost",
  componentId: "y8wzf7-11"
})(["text-align:right;font-weight:bold;padding:10px 0;"]);
var CartModal = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(CartModal, _Component);

  function CartModal(props) {
    var _this;

    _classCallCheck(this, CartModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CartModal).call(this, props));
    _this.state = {
      showAddressForm: false,
      userInformation: {
        name: '',
        street: '',
        zipcode: '',
        city: '',
        email: ''
      },
      errorText: '',
      submitted: false
    };
    _this.addAddressClick = _this.addAddressClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.removeProductFromCart = _this.removeProductFromCart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CartModal, [{
    key: "removeProductFromCart",
    value: function removeProductFromCart(item) {
      var productInfo = {
        id: item._id,
        title: item.title,
        images: item.imageUrls,
        price: item.price,
        quantity: 1
      };
      this.props.store.removeFromCart(productInfo);
    }
  }, {
    key: "addAddressClick",
    value: function addAddressClick() {
      this.setState({
        showAddressForm: true
      });
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState({
        errorText: ''
      });
      this.setState({
        userInformation: _objectSpread({}, this.state.userInformation, _defineProperty({}, e.target.name, e.target.value))
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this2 = this;

      if (Object.values(this.state.userInformation).includes('')) {
        this.setState({
          errorText: 'Du måste fylla i adress och email.'
        });
        return;
      }

      var body = {
        userInfo: this.state.userInformation,
        order: this.props.store.cart
      };
      fetch('/api/address', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(function (res) {
        res.status === 200 ? _this2.setState({
          submitted: true
        }) : '';
      });
      this.props.onCartClose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var showAddressForm = this.state.showAddressForm;
      var _this$props = this.props,
          store = _this$props.store,
          onCartClose = _this$props.onCartClose;
      var productArray = store.cart.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductInfo, {
          key: item._id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductInfoWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: item.images[0],
          alt: "product picture",
          height: "60",
          width: "60"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemText, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.variants), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.price))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QuantityWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.quantity, " st"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RemoveButton, {
          onClick: function onClick() {
            return _this3.removeProductFromCart(item);
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "material-icons"
        }, "close"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PriceTag, null, item.price * item.quantity, " kr")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Divider, null));
      });
      var price = store.cart.map(function (item) {
        return item.price * item.quantity;
      }).reduce(function (item, currentValue) {
        return item + currentValue;
      }, 0);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CartWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CloseButton, {
        onClick: onCartClose
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons"
      }, "close")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "H\xC4R \xC4R DIN VARUKORG"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoHeaders, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Produkt"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Antal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Pris")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Divider, null), productArray, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TotalCost, null, "totalt: ", price, " sek"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Divider, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        buttonText: "Leveransadress",
        onClick: function onClick() {
          _this3.addAddressClick();
        }
      }), showAddressForm && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddressForm_js__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, this.state, {
        handleChange: this.onChange,
        handleSubmit: this.onSubmit
      })));
    }
  }]);

  return CartModal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (CartModal);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/localStorage */ "./utils/localStorage.js");
/* harmony import */ var _CartModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CartModal */ "./components/CartModal.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Header__Wrapper",
  componentId: "cec4fj-0"
})(["display:flex;flex-direction:column;padding:20px 50px;background-color:#3c3c3c;@media (max-width:700px){padding:12px;}"]);
var Cart = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.button.withConfig({
  displayName: "Header__Cart",
  componentId: "cec4fj-1"
})(["display:flex;align-items:center;color:#f5eee8;background-color:#3c3c3c;border:none;cursor:pointer;p{font-size:16px;color:#f5eee8;}@media (max-width:700px){p,i{font-size:12px;}}"]);
var LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Header__LinkWrapper",
  componentId: "cec4fj-2"
})(["display:flex;justify-content:space-between;"]);
var LinkStyle = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.a.withConfig({
  displayName: "Header__LinkStyle",
  componentId: "cec4fj-3"
})(["color:#06d0b2;margin:10px;@media (max-width:700px){font-size:12px;}", ""], function (_ref) {
  var active = _ref.active;
  return active && "\n\t\tcolor: #f5eee8;\n\t";
});
var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Header__TitleWrapper",
  componentId: "cec4fj-4"
})(["display:flex;flex-direction:column;align-items:center;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h1.withConfig({
  displayName: "Header__Title",
  componentId: "cec4fj-5"
})(["color:#06d0b2;@media (max-width:700px){margin:6px;}"]);
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p.withConfig({
  displayName: "Header__SubTitle",
  componentId: "cec4fj-6"
})(["color:#f5eee8;letter-spacing:2px;font-weight:300;@media (max-width:700px){font-size:12px;font-weight:200;}"]);
var Header = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.state = {
      showCart: false
    };
    _this.onCartClick = _this.onCartClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onCartClose = _this.onCartClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var productsInCart = Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_5__["getItemListFromLocalStorage"])('cartArray');
      this.props.store.setCart(productsInCart);
    }
  }, {
    key: "onCartClick",
    value: function onCartClick() {
      this.setState({
        showCart: !this.state.showCart
      });
    }
  }, {
    key: "onCartClose",
    value: function onCartClose() {
      this.setState({
        showCart: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          store = _this$props.store,
          _this$props$router = _this$props.router;
      _this$props$router = _this$props$router === void 0 ? {} : _this$props$router;
      var _this$props$router$as = _this$props$router.asPath,
          asPath = _this$props$router$as === void 0 ? '/' : _this$props$router$as;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyle, {
        active: asPath === '/'
      }, "Bell Pepper")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/about",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyle, {
        active: asPath === '/about'
      }, "Om")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/product-care",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyle, {
        active: asPath === '/product-care'
      }, "Sk\xF6tselr\xE5d"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cart, {
        onClick: function onClick() {
          return _this2.onCartClick();
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons"
      }, "shopping_cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, store.cartCount, " produkter"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, "BELL PEPPER"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, null, "Handgjorda smycken i 925 sterling silver. Tillverkade i liten skala, av mig Nina Johanna Sj\xF6berg.")), this.state.showCart && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onCartClose: this.onCartClose
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Header));

/***/ }),

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Products; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "Products__Wrapper",
  componentId: "tkn8er-0"
})(["display:flex;flex-wrap:wrap;justify-content:center;"]);
var ProductWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li.withConfig({
  displayName: "Products__ProductWrapper",
  componentId: "tkn8er-1"
})(["background-color:#f5eee8;padding:12px;margin:12px;@media (max-width:700px){width:45%;padding:0 0 6px;margin:6px;h3,p{font-size:12px;margin:0;}img{height:100%;width:100%;margin-bottom:8px;}}"]);
var DispalyProduct = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "Products__DispalyProduct",
  componentId: "tkn8er-2"
})(["display:flex;flex-direction:column;align-items:center;color:#222;letter-spacing:0.6px;font-weight:200;"]);

var ProductLink = function ProductLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "/p/".concat(props.slug),
    href: "/product?title=".concat(props.slug),
    passHref: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DispalyProduct, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.img,
    alt: "product picture",
    height: "300",
    width: "300"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.price, " SEK"))));
};

var Products =
/*#__PURE__*/
function (_Component) {
  _inherits(Products, _Component);

  function Products() {
    _classCallCheck(this, Products);

    return _possibleConstructorReturn(this, _getPrototypeOf(Products).apply(this, arguments));
  }

  _createClass(Products, [{
    key: "render",
    value: function render() {
      var productList = this.props.products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductLink, {
          key: product._id,
          id: product._id,
          title: product.title,
          slug: product.slug.current,
          img: product.imageUrls,
          price: product.price
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, productList);
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cmsApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cmsApi */ "./cmsApi.js");
/* harmony import */ var _components_Products_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Products.js */ "./components/Products.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Wrapper",
  componentId: "sc-117xkgy-0"
})(["min-height:100vh;display:flex;flex-direction:column;background-color:#3c3c3c;"]);

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Products_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        products: this.props.products
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var productsQuery, products;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                productsQuery = "*[_type == 'product'] {\n\t\t\t_id,\n\t\t\ttitle,\n\t\t\tslug,\n\t\t\tprice,\n\t\t\t\"imageUrls\": images[0].asset->url\n\t\t}";
                _context.next = 3;
                return _cmsApi__WEBPACK_IMPORTED_MODULE_3__["default"].fetch(productsQuery);

              case 3:
                products = _context.sent;
                return _context.abrupt("return", {
                  products: products
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/localStorage.js":
/*!*******************************!*\
  !*** ./utils/localStorage.js ***!
  \*******************************/
/*! exports provided: saveItemToLocalStorage, updateItemListToLocalStorage, getItemListFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveItemToLocalStorage", function() { return saveItemToLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItemListToLocalStorage", function() { return updateItemListToLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemListFromLocalStorage", function() { return getItemListFromLocalStorage; });
function saveItemToLocalStorage(product, listName) {
  var cartArray = getItemListFromLocalStorage(listName);

  if (cartArray) {
    cartArray.push(product);
  }

  localStorage.setItem(listName, JSON.stringify(cartArray));
}
function updateItemListToLocalStorage(productList, listName) {
  var cartArray = getItemListFromLocalStorage(listName);
  cartArray = productList;
  localStorage.setItem(listName, JSON.stringify(cartArray));
}
function getItemListFromLocalStorage(listName) {
  var storedCartArray = JSON.parse(localStorage.getItem(listName));
  return storedCartArray || [];
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map