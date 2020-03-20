module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/admin/machines/machine.js":
/*!*****************************************!*\
  !*** ./pages/admin/machines/machine.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Machine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_templates_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/templates/Admin */ "./src/components/templates/Admin.jsx");
/* harmony import */ var _src_components_admin_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/components/admin/Sidebar */ "./src/components/admin/Sidebar.jsx");
/* harmony import */ var _src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/static/styled-components/base */ "./src/static/styled-components/base.js");
/* harmony import */ var _src_components_admin_machines_EditMachine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/components/admin/machines/EditMachine */ "./src/components/admin/machines/EditMachine.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Machine({
  id
}) {
  return __jsx(_src_components_templates_Admin__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(_src_components_admin_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx("div", {
    style: {
      width: "100%"
    }
  }, __jsx(_src_components_admin_machines_EditMachine__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: id
  }))));
}

Machine.getInitialProps = async ({
  query
}) => {
  return {
    id: query.id
  };
};

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const nextRoutes = __webpack_require__(/*! next-routes */ "next-routes");

const routes = module.exports = nextRoutes();
routes.add("login", "/login/:id").add("machine", "/admin/machine/:id", "/admin/machines/machine").add("/admin/banner/category/:category", "/admin/banner/categories").add("machines", "/admin/machines", "/admin/machines/index") //.add("tools", "/admin/tools/:id", "/admin/tools/edit-tool")
.add("add-tools", "/admin/add-tool", "/admin/tools/add-tool") //.add("edit-news", "/admin/news/edit-news/:id", "/admin/news/edit-news")
.add("pecas", "/categorias/pecas", "/pecas");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



function setApi(headers) {
  return axios__WEBPACK_IMPORTED_MODULE_7___default.a.create({
    baseURL: "http://187.108.207.29:4000/",
    headers: _objectSpread({}, headers)
  });
}

/* harmony default export */ __webpack_exports__["default"] = (setApi);

/***/ }),

/***/ "./src/components/admin/Sidebar.jsx":
/*!******************************************!*\
  !*** ./src/components/admin/Sidebar.jsx ***!
  \******************************************/
/*! exports provided: default, DivRoot, DivHeader, ImageHeader, DivItem, NavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivRoot", function() { return DivRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivHeader", function() { return DivHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageHeader", function() { return ImageHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivItem", function() { return DivItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_local__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/local */ "./src/utils/local.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(DivRoot, null, __jsx(DivHeader, null, __jsx(ImageHeader, {
  src: __webpack_require__(/*! ../../static/images/logo-multcostura-opção-3.png */ "./src/static/images/logo-multcostura-opção-3.png")
})), __jsx("hr", {
  style: {
    width: "80%"
  }
}), __jsx(DivItem, {
  onClick: () => navigate("home")
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHome"],
  size: "2x"
}), __jsx(NavLink, null, "Institucional")), __jsx(DivItem, {
  onClick: () => navigate("categories")
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faList"],
  size: "2x"
}), __jsx(NavLink, null, "Categorias")), __jsx(DivItem, {
  onClick: () => navigate("manufacturers")
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUsers"],
  size: "2x"
}), __jsx(NavLink, null, "Fabricantes")), __jsx(DivItem, {
  onClick: () => navigate("reseller")
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHandshake"],
  size: "2x"
}), __jsx(NavLink, null, "Revendedores")), __jsx(DivItem, {
  onClick: () => navigate("machines")
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCartPlus"],
  size: "2x"
}), __jsx(NavLink, null, "M\xE1quinas")), __jsx(DivItem, {
  onClick: () => navigate("news")
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faNewspaper"],
  size: "2x"
}), __jsx(NavLink, null, "Not\xEDcias")), __jsx(DivItem, {
  onClick: () => navigate("tools")
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTools"],
  size: "2x"
}), __jsx(NavLink, null, "Pe\xE7as")), __jsx(DivItem, {
  onClick: () => logout()
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDoorOpen"],
  size: "2x"
}), __jsx("span", null, "Sair"))));

function navigate(route) {
  _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute(`/admin/${route}`);
}

function logout() {
  //removeItem("user");
  document.cookie = `user=;`;
  _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute("/login");
}

const DivRoot = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__DivRoot",
  componentId: "doaggk-0"
})(["background-color:rgb(129,22,27);height:100vh;width:220px;display:flex;position:fixed;flex-direction:column;overflow:auto;max-height:100%;::-webkit-scrollbar{display:none;}"]); //vermelho 129, 22, 27
//azul 35,43,111

const DivHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__DivHeader",
  componentId: "doaggk-1"
})([""]);
const ImageHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Sidebar__ImageHeader",
  componentId: "doaggk-2"
})(["width:100%;margin:20px auto;display:block;"]);
const DivItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__DivItem",
  componentId: "doaggk-3"
})(["padding:20px 15px;color:white;transition:0.5s;display:flex;align-items:center;flex-direction:row;svg{width:15px;margin-right:10px;}cursor:pointer;:hover{background:rgb(35,43,111);}"]);
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Sidebar__NavLink",
  componentId: "doaggk-4"
})(["text-decoration:none;color:white;cursor:pointer;"]);

/***/ }),

/***/ "./src/components/admin/machines/EditMachine.jsx":
/*!*******************************************************!*\
  !*** ./src/components/admin/machines/EditMachine.jsx ***!
  \*******************************************************/
/*! exports provided: default, Section, MainImg, SecondaryImages, PrefImage, MainFeaturesText, InputGroup, ContainerInputFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainImg", function() { return MainImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryImages", function() { return SecondaryImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefImage", function() { return PrefImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFeaturesText", function() { return MainFeaturesText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return InputGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerInputFile", function() { return ContainerInputFile; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_machines__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../utils/machines */ "./src/utils/machines.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../utils/images */ "./src/utils/images.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_utils_images__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./EditMachine/FileInput */ "./src/components/admin/machines/EditMachine/FileInput.jsx");
/* harmony import */ var _utils_Message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/Message */ "./src/components/utils/Message.jsx");
/* harmony import */ var _static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../static/styled-components/base */ "./src/static/styled-components/base.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }














function EditMachine({
  id
}) {
  const imageMessageError = `Extensão do arquivo enviado é inválido. Extensões permitidas ${["jpg","JPG","png","webp","svg","jpeg"].toString()}, com no máximo 10MB`;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  const {
    0: snackBar,
    1: setSnackBar
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    result: "success",
    open: false,
    message: ""
  });

  function handleClose() {
    setSnackBar(_objectSpread({}, snackBar, {
      open: false
    }));
  }

  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    name: "",
    description: "",
    mainFeatures: "",
    specifications: {},
    category: null,
    manufacturer: null,
    images: [],
    productRef: []
  });
  const {
    0: machineFiles,
    1: setMachineFiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    machineFile1: null,
    machineFile2: null,
    machineFile3: null,
    machineFile4: null,
    machineFile5: null
  });
  const {
    0: sewingFile,
    1: setSewingFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null);
  const {
    0: refProdFiles,
    1: setRefProdFiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    refProdFile1: null,
    refProdFile2: null,
    refProdFile3: null,
    refProdFile4: null,
    refProdFile5: null
  });
  const {
    0: categoriesManufacturers,
    1: setCategoriesManufacturers
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    categories: [],
    manufacturers: []
  });
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false);
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    function asyncFunc() {
      Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["getOptions"])(function (err, dataCb) {
        if (err) {
          setSnackBar({
            result: "error",
            message: err,
            open: true
          });
          return;
        }

        setCategoriesManufacturers({
          manufacturers: dataCb.manufacturers.data,
          categories: dataCb.categories.data
        });
      });
      Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["getMachine"])(id, function (err, machine) {
        if (err) {
          setSnackBar({
            result: "error",
            message: err,
            open: true
          });
          return;
        }

        setState(_objectSpread({}, machine, {
          name: machine.name,
          description: machine.description,
          mainFeatures: machine.mainFeatures,
          specifications: machine.specifications,
          category: machine.category._id,
          manufacturer: machine.manufacturer,
          videoInput: machine.video
        }));
      });
    }

    asyncFunc();
    return () => {};
  }, []);

  function handleChangeVideo(e) {
    const YTBaseURL = "https://www.youtube.com/embed/";

    if (getParam(e.target.value) == 0) {
      setState(_objectSpread({}, state, {
        videoInput: e.target.value,
        video: ''
      }));
      setSnackBar({
        open: true,
        result: 'error',
        message: 'O endereço não é uma URL válida do YouTube'
      });
    } else {
      console.log(e.target.value);
      setState(_objectSpread({}, state, {
        video: YTBaseURL + getParam(e.target.value),
        videoInput: e.target.value
      }));
    }
  }

  function getParam(url) {
    var results = new RegExp('[\?&]' + 'v' + '=([^&#]*)').exec(url);

    if (results == null) {
      return 0;
    }

    return results[1] || 0;
  }

  const {
    0: folheto,
    1: setFolheto
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null);
  const {
    0: manual,
    1: setManual
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null);

  function folhetoChange(e) {
    if (e) {
      const type = e.target.files[0].name.split(".");

      if (type[1] != "pdf") {
        setSnackBar({
          open: true,
          result: 'error',
          message: 'O folheto deve ser apenas formato PDF'
        });
      } else {
        setFolheto(e.target.files[0]);
      }
    }
  }

  function manualChange(e) {
    if (e) {
      const type = e.target.files[0].name.split(".");

      if (type[1] != "pdf") {
        setSnackBar({
          open: true,
          result: 'error',
          message: 'O manual deve ser apenas formato PDF'
        });
      } else {
        setManual(e.target.files[0]);
      }
    }
  }

  function machineHandleChange(e) {
    if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["validateImage"])(["jpg","JPG","png","webp","svg","jpeg"], 10000, e.target.files[0])) {
      const newName = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(e.target.name[e.target.name.length - 1]) - 1;
      setMachineFiles(_objectSpread({}, machineFiles, {
        [e.target.name]: Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["changeFileName"])(e.target.files[0], newName)
      }));
    } else {
      setSnackBar({
        open: true,
        result: 'error',
        message: imageMessageError
      });
    }
  }

  function machineCleanFileInput(name) {
    setMachineFiles(_objectSpread({}, machineFiles, {
      [name]: null
    }));
  }

  function refProdHandleChange(e) {
    if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["validateImage"])(["jpg","JPG","png","webp","svg","jpeg"], 10000, e.target.files[0])) {
      const newName = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(e.target.name[e.target.name.length - 1]) - 1;
      setRefProdFiles(_objectSpread({}, refProdFiles, {
        [e.target.name]: Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["changeFileName"])(e.target.files[0], newName)
      }));
    } else {
      setSnackBar({
        open: true,
        result: 'error',
        message: imageMessageError
      });
    }
  }

  function refProdCleanFileInput(name) {
    setRefProdFiles(_objectSpread({}, refProdFiles, {
      [name]: null
    }));
  }

  function sewingHandleChange(e) {
    if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["validateImage"])(["jpg","JPG","png","webp","svg","jpeg"], 10000, e.target.files[0])) {
      const newName = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(e.target.name[e.target.name.length - 1]) - 1;
      setSewingTypeFile(Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["changeFileName"])(e.target.files[0], newName));
    } else {
      setSnackBar({
        open: true,
        result: 'error',
        message: imageMessageError
      });
    }
  }

  function renderImage(name, type) {
    let image = "";
    state[type].forEach(img => {
      const imgSplit = img.split("/");

      if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(name[name.length - 1]) - 1 == imgSplit[imgSplit.length - 1][0]) {
        image = img;
      }
    });
    return image;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, !title ? __jsx("h1", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(35,43,111)"
    }
  }, state.name, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faPencilAlt"],
    style: {
      width: "16px",
      position: "absolute",
      borderRadius: "10px",
      padding: "3px",
      background: "rgb(129, 22, 27)",
      color: "white",
      marginLeft: "2%",
      top: "20px",
      cursor: "pointer",
      zIndex: "9"
    },
    onClick: () => {
      setTitle(true);
    }
  })) : __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Input"], {
    style: {
      width: "30%",
      display: "block",
      margin: "15px auto"
    },
    placeholder: "Nome",
    value: state.name,
    onChange: e => setState(_objectSpread({}, state, {
      name: e.target.value
    }))
  }), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Hr"], null), !title ? __jsx("h4", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "grey"
    }
  }, state.description, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faPencilAlt"],
    style: {
      width: "16px",
      borderRadius: "10px",
      padding: "3px",
      background: "rgb(129, 22, 27)",
      color: "white",
      marginLeft: "2%",
      cursor: "pointer",
      zIndex: "9"
    },
    onClick: () => {
      setTitle(true);
    }
  })) : __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Input"], {
    style: {
      width: "30%",
      display: "block",
      margin: "15px auto"
    },
    placeholder: "Subt\xEDtulo",
    value: state.description,
    onChange: e => setState(_objectSpread({}, state, {
      description: e.target.value
    }))
  }), __jsx("div", {
    id: "machine-images",
    style: {
      width: "100%"
    }
  }, __jsx(ContainerInputFile, {
    style: {
      justifyContent: "center",
      marginBottom: "15px",
      flexWrap: "wrap"
    }
  }, __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
    file: machineFiles.machineFile1,
    handleChange: machineHandleChange,
    deleteImage: () => Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["deleteImage"])(state.id, "machine", Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["getNameImageFromUrl"])(renderImage("machineFile1", "images")), function (err) {
      if (err) return;
      location.reload();
    }),
    cleanFileInput: machineCleanFileInput,
    imageURL: renderImage("machineFile1", "images"),
    maxWidth: "100%",
    labelWidth: "70%",
    labelInputFile: "Imagem principal",
    id: "machineFile1",
    name: "machineFile1"
  })), __jsx(ContainerInputFile, {
    style: {
      flexWrap: "wrap"
    }
  }, __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
    file: machineFiles.machineFile2,
    handleChange: machineHandleChange,
    deleteImage: () => Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["deleteImage"])(state.id, "machine", Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["getNameImageFromUrl"])(renderImage("machineFile2", "images")), function (err) {
      if (err) return;
      location.reload();
    }),
    cleanFileInput: machineCleanFileInput,
    imageURL: renderImage("machineFile2", "images"),
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    labelInputFile: "Imagem 2",
    id: "machineFile2",
    name: "machineFile2"
  }), __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
    file: machineFiles.machineFile3,
    handleChange: machineHandleChange,
    deleteImage: () => Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["deleteImage"])(state.id, "machine", Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["getNameImageFromUrl"])(renderImage("machineFile3", "images")), function (err) {
      if (err) return;
      location.reload();
    }),
    cleanFileInput: machineCleanFileInput,
    imageURL: renderImage("machineFile3", "images"),
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    labelInputFile: "Imagem 3",
    id: "machineFile3",
    name: "machineFile3"
  }), __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
    file: machineFiles.machineFile4,
    handleChange: machineHandleChange,
    deleteImage: () => Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["deleteImage"])(state.id, "machine", Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["getNameImageFromUrl"])(renderImage("machineFile4", "images")), function (err) {
      if (err) return;
      location.reload();
    }),
    cleanFileInput: machineCleanFileInput,
    imageURL: renderImage("machineFile4", "images"),
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    labelInputFile: "Imagem 4",
    id: "machineFile4",
    name: "machineFile4"
  }), __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
    file: machineFiles.machineFile5,
    handleChange: machineHandleChange,
    deleteImage: () => Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["deleteImage"])(state.id, "machine", Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["getNameImageFromUrl"])(renderImage("machineFile5", "images")), function (err) {
      if (err) return;
      location.reload();
    }),
    cleanFileInput: machineCleanFileInput,
    imageURL: renderImage("machineFile5", "images"),
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    labelInputFile: "Imagem 5",
    id: "machineFile5",
    name: "machineFile5"
  }))), __jsx(Section, {
    style: {}
  }, __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)"
    }
  }, "Tipo de ponto"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Hr"], null), __jsx("div", {
    id: "sewing-type-images",
    style: {
      width: "100%"
    }
  }, __jsx(ContainerInputFile, {
    style: {
      justifyContent: "center",
      marginBottom: "15px"
    }
  }, __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
    file: sewingFile,
    handleChange: sewingHandleChange,
    deleteImage: () => Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["deleteImage"])(state.id, "sewingType", Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["getNameImageFromUrl"])(state.sewingType), function (err) {
      if (err) return;
      location.reload();
    }),
    cleanFileInput: () => setSewingFile(null),
    imageURL: state.sewingType,
    maxWidth: "60%",
    labelWidth: "70%",
    labelInputFile: "Imagem principal",
    id: "sewingFile1",
    name: "sewingFile1"
  })))), __jsx(Section, null, __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)"
    }
  }, "Produtos ideias para produzir"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Hr"], null), __jsx("div", {
    id: "ref-prod-images",
    style: {
      width: "100%"
    }
  }, __jsx(ContainerInputFile, {
    style: {
      flexWrap: "wrap"
    }
  }, __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
    file: refProdFiles.refProdFile1,
    handleChange: refProdHandleChange,
    deleteImage: () => Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["deleteImage"])(state.id, "productRef", Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["getNameImageFromUrl"])(renderImage("refProdFile1", "productRef")), function (err) {
      if (err) return;
      location.reload();
    }),
    cleanFileInput: refProdCleanFileInput,
    imageURL: renderImage("refProdFile1", "productRef"),
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    labelInputFile: "Imagem 1",
    id: "refProdFile1",
    name: "refProdFile1"
  }), __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
    file: refProdFiles.refProdFile2,
    handleChange: refProdHandleChange,
    deleteImage: () => Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["deleteImage"])(state.id, "productRef", Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["getNameImageFromUrl"])(renderImage("refProdFile2", "productRef")), function (err) {
      if (err) return;
      location.reload();
    }),
    cleanFileInput: refProdCleanFileInput,
    imageURL: renderImage("refProdFile2", "productRef"),
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    labelInputFile: "Imagem 2",
    id: "refProdFile2",
    name: "refProdFile2"
  }), __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
    file: refProdFiles.refProdFile3,
    handleChange: refProdHandleChange,
    deleteImage: () => Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["deleteImage"])(state.id, "productRef", Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["getNameImageFromUrl"])(renderImage("refProdFile3", "productRef")), function (err) {
      if (err) return;
      location.reload();
    }),
    cleanFileInput: refProdCleanFileInput,
    imageURL: renderImage("refProdFile3", "productRef"),
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    labelInputFile: "Imagem 3",
    id: "refProdFile3",
    name: "refProdFile3"
  }), __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
    file: refProdFiles.refProdFile4,
    handleChange: refProdHandleChange,
    deleteImage: () => Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["deleteImage"])(state.id, "productRef", Object(_utils_images__WEBPACK_IMPORTED_MODULE_15__["getNameImageFromUrl"])(renderImage("refProdFile4", "productRef")), function (err) {
      if (err) return;
      location.reload();
    }),
    cleanFileInput: refProdCleanFileInput,
    imageURL: renderImage("refProdFile4", "productRef"),
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    labelInputFile: "Imagem 4",
    id: "refProdFile4",
    name: "refProdFile4"
  })))), __jsx(Section, null, __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)"
    }
  }, "Caracter\xEDsticas"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Hr"], null), __jsx("div", {
    style: {
      width: "50%",
      display: "block",
      margin: "auto"
    }
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["TextArea"], {
    value: state.mainFeatures,
    onChange: e => setState(_objectSpread({}, state, {
      mainFeatures: e.target.value
    })),
    rows: "5"
  }, state.mainFeatures))), __jsx(Section, null, __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)"
    }
  }, "Especifica\xE7\xF5es T\xE9cnicas"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Hr"], null), __jsx("div", {
    style: {
      width: "50%",
      display: "block",
      margin: "auto"
    }
  }, __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "modelo"
  }, "Modelo:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Input"], {
    placeholder: "Modelo",
    value: state.specifications ? state.specifications.modelo : "",
    onChange: e => setState(_objectSpread({}, state, {
      specifications: _objectSpread({}, state.specifications, {
        modelo: e.target.value
      })
    }))
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "alturaCalcador"
  }, "Altura do Cal\xE7ador:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Input"], {
    placeholder: "Altura do Cal\xE7ador",
    value: state.specifications ? state.specifications.alturaCalcador : "",
    onChange: e => setState(_objectSpread({}, state, {
      specifications: _objectSpread({}, state.specifications, {
        alturaCalcador: e.target.value
      })
    }))
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "comprimentoDoPonto"
  }, "Comprimento do ponto:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Input"], {
    placeholder: "Comprimento do ponto",
    value: state.specifications ? state.specifications.comprimentoDoPonto : "",
    onChange: e => setState(_objectSpread({}, state, {
      specifications: _objectSpread({}, state.specifications, {
        comprimentoDoPonto: e.target.value
      })
    }))
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "corteDeLinha"
  }, "Corte de Linha:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Input"], {
    placeholder: "Corte de linha",
    value: state.specifications ? state.specifications.corteDeLinha : "",
    onChange: e => setState(_objectSpread({}, state, {
      specifications: _objectSpread({}, state.specifications, {
        corteDeLinha: e.target.value
      })
    }))
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "velocidadeMaxima"
  }, "Velocidade M\xE1xima:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Input"], {
    placeholder: "Velocidade m\xE1xima",
    value: state.specifications ? state.specifications.velocidadeMaxima : "",
    onChange: e => setState(_objectSpread({}, state, {
      specifications: _objectSpread({}, state.specifications, {
        velocidadeMaxima: e.target.value
      })
    }))
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "motor"
  }, "Motor:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Input"], {
    placeholder: "Motor",
    value: state.specifications ? state.specifications.motor : "",
    onChange: e => setState(_objectSpread({}, state, {
      specifications: _objectSpread({}, state.specifications, {
        motor: e.target.value
      })
    }))
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "numeroDeAgulhas"
  }, "N\xFAmero de Agulhas:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Input"], {
    placeholder: "N\xFAmero de agulhas",
    value: state.specifications ? state.specifications.numeroDeAgulhas : "",
    onChange: e => setState(_objectSpread({}, state, {
      specifications: _objectSpread({}, state.specifications, {
        numeroDeAgulhas: e.target.value
      })
    }))
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "painelTouchScreen"
  }, "Painel touch screen:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Input"], {
    placeholder: "Painel touch screen",
    value: state.specifications ? state.specifications.painelTouchScreen : "",
    onChange: e => setState(_objectSpread({}, state, {
      specifications: _objectSpread({}, state.specifications, {
        painelTouchScreen: e.target.value
      })
    }))
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "tipoDeAgulha"
  }, "Tipo de agulha:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Input"], {
    placeholder: "Tipo de agulha",
    value: state.specifications ? state.specifications.tipoDeAgulha : "",
    onChange: e => setState(_objectSpread({}, state, {
      specifications: _objectSpread({}, state.specifications, {
        tipoDeAgulha: e.target.value
      })
    }))
  })))), __jsx(Section, null, __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)"
    }
  }, "Categoria e fabricante"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Hr"], null), __jsx("div", {
    style: {
      width: "50%",
      display: "block",
      margin: "auto"
    }
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Select"], {
    value: state.category,
    onChange: e => setState(_objectSpread({}, state, {
      category: e.target.value
    }))
  }, __jsx("option", {
    value: ""
  }, "Escolha uma categoria"), categoriesManufacturers.categories.map(category => __jsx("option", {
    selected: state.category == category.id ? category.id : false,
    value: category.id
  }, category.name))), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Select"], {
    value: state.manufacturer,
    onChange: e => setState(_objectSpread({}, state, {
      manufacturer: e.target.value
    }))
  }, __jsx("option", {
    value: ""
  }, "Escolha um fabricante"), categoriesManufacturers.manufacturers.map(manu => __jsx("option", {
    selected: state.manufacturer == manu.id ? manu.id : false,
    value: manu.id
  }, manu.name))))), __jsx(Section, null, __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)",
      marginTop: "15px"
    }
  }, "V\xEDdeo (YouTube)"), __jsx(Section, {
    style: {
      justifyContent: "center",
      display: "flex"
    }
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Input"], {
    style: {
      width: "50%"
    },
    placeholder: "Ex: https://www.youtube.com/watch?v=5qdtbMvC2Rs",
    value: state.videoInput,
    onChange: handleChangeVideo
  })), __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)",
      marginTop: "15px"
    }
  }, "Folheto e Manual"), __jsx(Section, {
    style: {
      flexWrap: "wrap",
      justifyContent: "center",
      width: "50%",
      margin: "auto"
    }
  }, __jsx("div", {
    style: {
      border: '2px dotted lightgrey',
      padding: '5px',
      minHeight: "100px",
      flex: 1,
      position: "relative"
    }
  }, folheto ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faTrash"],
    style: {
      width: "16px",
      position: "absolute",
      borderRadius: "10px",
      padding: "3px",
      background: "rgb(129, 22, 27)",
      color: "white",
      right: "13px",
      top: "10px",
      cursor: "pointer",
      zIndex: "9"
    },
    onClick: () => setFolheto(null)
  }) : state.folheto ? __jsx(ButtonDelImg, {
    onClick: () => Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["deleteImage"])(state.id, "folheto", formatFileName(state.folheto), function (err) {
      if (err) return;
      location.reload();
    })
  }, "Excluir documento") : null, __jsx("label", {
    htmlFor: "folheto",
    style: {
      cursor: "pointer",
      minHeight: "100px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }
  }, "FOLHETO ", __jsx("br", null), __jsx("br", null), folheto ? folheto.name : state.folheto ? formatFileName(state.folheto) : "Clique para escolher um arquivo"), __jsx("input", {
    style: {
      width: 0
    },
    type: "file",
    name: "folheto",
    id: "folheto",
    onChange: folhetoChange
  })), __jsx("div", {
    style: {
      border: '2px dotted lightgrey',
      padding: '5px',
      minHeight: "100px",
      flex: 1,
      position: "relative"
    }
  }, manual ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faTrash"],
    style: {
      width: "16px",
      position: "absolute",
      borderRadius: "10px",
      padding: "3px",
      background: "rgb(129, 22, 27)",
      color: "white",
      right: "13px",
      top: "10px",
      cursor: "pointer",
      zIndex: "9"
    },
    onClick: () => setManual(null)
  }) : state.manual ? __jsx(ButtonDelImg, {
    onClick: () => Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["deleteImage"])(state.id, "manual", formatFileName(state.manual), function (err) {
      if (err) return;
      location.reload();
    })
  }, "Excluir documento") : null, __jsx("label", {
    htmlFor: "manual",
    style: {
      cursor: "pointer",
      minHeight: "100px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }
  }, "MANUAL ", __jsx("br", null), __jsx("br", null), manual ? manual.name : state.manual ? formatFileName(state.manual) : "Clique para escolher um arquivo"), __jsx("input", {
    style: {
      width: 0
    },
    type: "file",
    name: "manual",
    id: "manual",
    onChange: manualChange
  })))), __jsx(Section, null, visible ? __jsx("div", {
    style: {
      display: "flex",
      margin: "15px auto",
      width: "100%",
      justifyContent: "center"
    }
  }, __jsx(_utils_Message__WEBPACK_IMPORTED_MODULE_19__["default"], {
    result: result,
    message: message,
    color: color
  }), " ") : null, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Button"], {
    style: {
      width: "50%",
      margin: "auto",
      display: "block"
    },
    onClick: () => {
      console.log(getParam(state.videoInput), state.video);

      if (getParam(state.videoInput) != 0) {
        Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["updateMachine"])(state, machineFiles, sewingFile, refProdFiles, {
          folheto,
          manual
        }, function (err, res) {
          if (err) {
            setSnackBar({
              result: "error",
              open: true,
              message: err
            });
            return;
          }

          setSnackBar({
            result: "success",
            open: true,
            message: "Máquina alterada com sucesso"
          });
          setTimeout(() => {
            location.reload();
          }, 2000);
        });
      } else {
        handleChangeVideo({
          target: {
            value: state.video
          }
        });
      }
    }
  }, "Salvar"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_20__["Button"], {
    style: {
      width: "50%",
      margin: "15px auto",
      display: "block"
    },
    onClick: () => Object(_utils_machines__WEBPACK_IMPORTED_MODULE_14__["deleteMachine"])(state.id, function (err, response) {
      if (err) {
        setSnackBar({
          result: "error",
          message: err,
          open: true
        });
        return;
      }

      setSnackBar({
        result: "success",
        message: "Máquina excluída com sucesso",
        open: true
      });
      setTimeout(() => {
        _routes__WEBPACK_IMPORTED_MODULE_13__["Router"].pushRoute("/admin/machines");
      }, 2000);
    })
  }, "Excluir m\xE1quina"), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11___default.a, {
    open: snackBar.open,
    autoHideDuration: 1500,
    onClose: handleClose
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12___default.a, {
    severity: snackBar.result
  }, snackBar.message))));

  function formatFileName(name) {
    const splitName = name.split('/');
    const splittedName = splitName[splitName.length - 1].split('.');
    return splittedName[0];
  }
}
const ButtonDelImg = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.button.withConfig({
  displayName: "EditMachine__ButtonDelImg",
  componentId: "md2rfm-0"
})(["background-color:#960d03;color:white;padding:8px 20px;margin:8px 0;border:none;border-radius:4px;position:absolute;width:75px;right:0;top:0px;font-size:8px;z-index:9;cursor:pointer;"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "EditMachine__Section",
  componentId: "md2rfm-1"
})(["margin:10% 0;"]);
const MainImg = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.img.withConfig({
  displayName: "EditMachine__MainImg",
  componentId: "md2rfm-2"
})(["width:50%;margin:10px auto;display:block;cursor:pointer;"]);
const SecondaryImages = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.img.withConfig({
  displayName: "EditMachine__SecondaryImages",
  componentId: "md2rfm-3"
})(["max-width:25%;margin-right:5px;cursor:pointer;:hover{box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);}box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);"]);
const PrefImage = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.img.withConfig({
  displayName: "EditMachine__PrefImage",
  componentId: "md2rfm-4"
})(["width:49%;margin-right:5px;margin-bottom:5px;cursor:pointer;:hover{box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);}box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);"]);
const MainFeaturesText = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.p.withConfig({
  displayName: "EditMachine__MainFeaturesText",
  componentId: "md2rfm-5"
})([""]);
const InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "EditMachine__InputGroup",
  componentId: "md2rfm-6"
})(["display:flex;flex-direction:column;width:", ";"], props => props.width ? props.width : "100%");
const ContainerInputFile = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "EditMachine__ContainerInputFile",
  componentId: "md2rfm-7"
})(["img{width:100%;margin:10px auto;display:block;cursor:pointer;}display:flex;justify-content:center;"]);

/***/ }),

/***/ "./src/components/admin/machines/EditMachine/FileInput.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/admin/machines/EditMachine/FileInput.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Upload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Upload({
  file,
  handleChange,
  deleteImage,
  imageURL,
  labelInputFile,
  id,
  name,
  key,
  labelWidth,
  labelHeight,
  maxWidth,
  cleanFileInput,
  btnDelete
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    type: "file",
    style: {
      width: "0.1px",
      height: "0.1px",
      opacity: 0,
      overflow: "hidden",
      position: "absolute",
      zIndex: -1
    },
    name: name,
    id: id,
    onChange: handleChange,
    key: key
  }), __jsx("div", {
    style: {
      border: "1px dotted lightgrey",
      padding: "50px 10px",
      cursor: "pointer",
      textAlign: "center",
      width: labelWidth,
      height: labelHeight,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, __jsx("label", {
    style: {
      cursor: "pointer"
    },
    htmlFor: id
  }, __jsx("span", {
    style: {
      display: file ? "none" : imageURL ? "none" : "flex",
      flexDirection: "column "
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowUp"],
    style: {
      width: "32px",
      margin: "auto",
      display: "block"
    }
  }), " ", __jsx("br", null), __jsx("hr", {
    style: {
      width: "100%"
    }
  }), labelInputFile), file ? __jsx("img", {
    style: {
      maxWidth
    },
    src: file ? URL.createObjectURL(file) : ""
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, imageURL ? !btnDelete ? __jsx(ButtonDelImg, {
    onClick: deleteImage
  }, "Excluir Imagem") : null : null, __jsx("img", {
    style: {
      maxWidth
    },
    src: imageURL
  }))), file ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"],
    style: {
      width: "16px",
      position: "absolute",
      borderRadius: "10px",
      padding: "3px",
      background: "rgb(129, 22, 27)",
      color: "white",
      right: "13px",
      top: "10px",
      cursor: "pointer",
      zIndex: "9"
    },
    onClick: () => cleanFileInput(name)
  }) : ""));
}
const ButtonDelImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "FileInput__ButtonDelImg",
  componentId: "sc-1lzm9rb-0"
})(["background-color:#960d03;color:white;padding:8px 20px;margin:8px 0;border:none;border-radius:4px;position:absolute;width:75px;right:0;top:0px;font-size:8px;z-index:9;cursor:pointer;"]);

/***/ }),

/***/ "./src/components/templates/Admin.jsx":
/*!********************************************!*\
  !*** ./src/components/templates/Admin.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _admin_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/Sidebar */ "./src/components/admin/Sidebar.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"]`
    @font-face {
      font-family: LithosPro
      src: url(${__webpack_require__(/*! ../../static/fonts/lithos-pro/LithosPro-Light.otf */ "./src/static/fonts/lithos-pro/LithosPro-Light.otf")})
    }    

    @font-face {
      font-family: Myriad
      src: url(${__webpack_require__(/*! ../../static/fonts/myriad-pro/MyriadPro-Bold.otf */ "./src/static/fonts/myriad-pro/MyriadPro-Bold.otf")})
    }

    .main-title {
      font-family: LithosPro !important;
      
    }
    * {
      font-family: Myriad
    }

    body {
      margin: 0;
      padding: 0;
    }
		.carousel div {
			max-height: 350px
    }
    
    .form-control {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
`;

class Template extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: ""
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = "http://localhost:4000";
  }

  componentDidMount() {
    if (localStorage.getItem("nick")) {
      nick = localStorage.getItem("nick");
      Axios.post(`${actionTypes.URL}validateToken`, {
        token: localStorage.getItem("authToken")
      }).then(res => {
        if (!res.data) {
          localStorage.removeItem("authToken");
          Axios.defaults.headers.common.Authorization = "";
        } else {
          this.props.temApelido();
        }
      }).catch(erro => {});
    }

    console.log("componentDidMount");
    const script = document.createElement("script");
    script.src = `https://www.bing.com/api/maps/mapcontrol?key=${"ArBcF40dX4IT5Co3SIxT7TfvEqq3VNdafH09G2lYGLmm1PvaaFwU-xHaQLjtmpDe"}&callback=loadMapScenario`;
    script.async = false;
    document.body.appendChild(script);
  }

  render() {
    return __jsx("div", {
      style: {
        margin: 0,
        padding: 0
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "Multcostura"), __jsx("style", null, `
            
          `)), __jsx(GlobalStyle, null), __jsx("div", {
      style: {
        margin: 0,
        padding: 0,
        display: "flex"
      }
    }, this.props.children));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Template);

/***/ }),

/***/ "./src/components/utils/Message.jsx":
/*!******************************************!*\
  !*** ./src/components/utils/Message.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_triangle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/triangle.png */ "./src/static/images/triangle.png");
/* harmony import */ var _static_images_triangle_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_triangle_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_images_success_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/success.png */ "./src/static/images/success.png");
/* harmony import */ var _static_images_success_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_images_success_png__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (({
  message,
  color,
  result
}) => __jsx(DivMessage, {
  style: {
    backgroundColor: color,
    color: "white",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
}, __jsx("img", {
  src: result ? _static_images_success_png__WEBPACK_IMPORTED_MODULE_3___default.a : _static_images_triangle_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  style: {
    width: "16px",
    marginRight: "5px"
  }
}), __jsx("span", {
  style: {
    marginTop: "5px"
  }
}, message)));
const DivMessage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Message__DivMessage",
  componentId: "sc-1nf5u46-0"
})(["padding:10px;margin-top:15px;background:#ff5647;width:250px;border-radius:10px;p{color:white !important;}opacity:", ";transition:0.5s;"], props => props.show);

/***/ }),

/***/ "./src/static/fonts/lithos-pro/LithosPro-Light.otf":
/*!*********************************************************!*\
  !*** ./src/static/fonts/lithos-pro/LithosPro-Light.otf ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/LithosPro-Light-353f0deba557604794b9e637ec9b1070.otf";

/***/ }),

/***/ "./src/static/fonts/myriad-pro/MyriadPro-Bold.otf":
/*!********************************************************!*\
  !*** ./src/static/fonts/myriad-pro/MyriadPro-Bold.otf ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/MyriadPro-Bold-9c12cd3b945e33ee64ae9b1761153d68.otf";

/***/ }),

/***/ "./src/static/images/logo-multcostura-opção-3.png":
/*!********************************************************!*\
  !*** ./src/static/images/logo-multcostura-opção-3.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-multcostura-opção-3-c1348ddb586f0519b6c525d576fd9c5d.png";

/***/ }),

/***/ "./src/static/images/success.png":
/*!***************************************!*\
  !*** ./src/static/images/success.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAjcAAAI3AGf6F88AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAANVQTFRF////JLaSIJ+AIKqKKa2FKLCIJq+IJa6HJa6JJa6IJa6IJa2IJa6IJa6IJa6IJa6IJa6IJa6IJq6IKK+JKK+KKrCLLrGNL7KOMrOPNrSRN7WSPLeVQrmYRLmZSrycTr2eUb6gUb+gWsKlY8Wqbsmwb8mwdcy0d8y1e863g9G7hdK8htK9i9TAjNTAjtXBktfEntvKoNzLquDRruHTtePWt+TYv+fcx+rhyOvh0e7m1e/o2fHq4PTu5PXx5vbx7Pj18fr49fv59/z7+Pz7+f38/P79/f7+dNHCUgAAABF0Uk5TAAcIGBktSYSXmMHI2uPy8/XVqDFbAAABB0lEQVQ4y42T13qDMAyFZUKMbebp3mmbrnTvlY60TXn/R+oFGAyYzz1Xx/wylmWJqBLjUkVpGinJGXXliwSVEuG3sBdkaCgLPJMPQnQUDmo+jGFRPKz2WzkQl//wQvQoLPII0KuAiMjP+gMyn4iEFU1eAQCCiCU2fpCfFBVjxG18f35VOk7Swndmt9pKUl2++fG4qL2iqMPXpi8r1SKitDDne/rT8vPbRh2d6oC7n6PCLNx/bsEM0Edc5DdLAHD9tWueF9VJjmdP68DZ77iRkDKuuT19Hx3mx82MpVmo1Yfv+WXrSrxZ6slpiyes77FKif88t7Nh3C3nbFp327sHxz167uHtH/8/eds7gGsUQbkAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/static/images/triangle.png":
/*!****************************************!*\
  !*** ./src/static/images/triangle.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABYgAAAWIBXyfQUwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPRSURBVHic3ZvNa1RXGIef985EzSRWsdVFhS7sQlynUsGlW60E/IJSNQqu/EBTk8aUMBAxE3AhSt0ENNouTEtB/RvsSsQ/QQRBrAmiRtOmjm8X5mSSyXzce+ecc++dBwIzMHPOm9/vucNcmCN4RPfvz7GlezewD9gBfAnkgGmER6D3WFP4XYrXZ33NJL420oEju5DgGrCtyUtfgg7L+OSEj7m8BKADfUMIF4Eg/JuYojB7WIp/zLubDPIuFwfQn46dR/VS5DcKB5nrzikcEFAHoy1s4xAdOLoDkQd8us7jrnJaxievWRuqivBKRkRBELlKS/88gIxq/4kvrAxVA2cBMNj3HbDdwkrryM/3W1inJu4CgGF7S8kp/fGHTfbWq+AkAB3s24ud9g1d5HJnLa63iCsDLLZvcGOB9QActG9wYoELAxy0b7BvgdUAHLZvsG6BbQMctm+wa4G1ADy0b7BqgU0DPLRvsGeBlQBitf/V13C+BCNXoWdn1C2tWWDLgOjt7z4En2+CQjf0HoZ8R8QF7FjQcgCxr/3P1lce5zugqzvqClYssGGAx2u/mtYtaCkAj5/89WjZglYNSLB9g5zSob6Ncd8dO4AUtG/oQoltQSsGpKD9BZTTcS2IFUCK2jfEtiCuAelp3xDTgsgBpLB9QywL4hiQvvYNMSyIFECK2zdEtiCqAelt3xDRgtABZKB9QyQLohiQ/vYNESwIFUCG2jeEtiCsAdlp3xDSgqYBZLB9QygLwhiQvfYNISxoGECG2zc0taCZAdlt39DEgroBtEH7hoYWNDIg++0bGlhQM4A2at9Q14J6BrRP+4Y6FqwIwFv7r2Yqj+f/hdm3rnesaUEtA/y0f/83ePYEZv6GqQkof3C/Zw0Llv1OcKH9u+4nSRBhTEo3L5in1Qa037VfTZUFiwG04Sd/PZZ9Fiw1wG/7qzuhs1D5E28/XF9mQR4Sav/cKKzbUHk+1g+vX/na3VhwwRjws6+dU4NyUs8e3xDo0JGdwDdJz5MAa1lVPpqnHPT6OzeyhLn3sGpN5bk6OxLQAOnNI7rd48mZCldG/O+5kp4AZHPSUyRIp8ufy2eCAHie9BAJ8k8APEx6isRQeRRA0N43P40QvSsKwuCxh6A9Sc/jmTcE5S2BgBKUzwDlpCfyilCUsdszAYCM3foL0fa/FV5E/6R08wosuRuU0uQ46DAOT2mmAmWK92u/N6dRV3wFXDjk/Auw1ftwbplGZJjSjYmlR3FrfgfWYjFg7ukePh1z/xbYDBT8zGmNeZQXBDzmo9zn43935PKv76pf9D/LDB/nwy/SPAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/static/styled-components/base.js":
/*!**********************************************!*\
  !*** ./src/static/styled-components/base.js ***!
  \**********************************************/
/*! exports provided: Container, Title, Row, Column, Input, Select, TextArea, Button, DivMessage, Hr, UploadImageContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivMessage", function() { return DivMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hr", function() { return Hr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageContainer", function() { return UploadImageContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "base__Container",
  componentId: "sc-162z2l6-0"
})(["margin-left:220px;width:100%;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "base__Title",
  componentId: "sc-162z2l6-1"
})(["text-align:left;font:Bold 30px/37px;letter-spacing:0;color:#5B5B5B;opacity:1;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "base__Row",
  componentId: "sc-162z2l6-2"
})(["display:flex;flex:", ";justify-content:", ";align-items:", ";flex-wrap:", ""], props => props.flex, props => props.jc, props => props.ait, props => props.fw);
const Column = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "base__Column",
  componentId: "sc-162z2l6-3"
})(["display:flex;flex-direction:column;flex:", ";justify-content:", ";align-items:", ";flex-wrap:", ";"], props => props.flex, props => props.jc, props => props.ait, props => props.fw);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "base__Input",
  componentId: "sc-162z2l6-4"
})(["width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;"]);
const Select = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.select.withConfig({
  displayName: "base__Select",
  componentId: "sc-162z2l6-5"
})([":hover{border:1px solid #960d03;}transition:.2s;width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;"]);
const TextArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.textarea.withConfig({
  displayName: "base__TextArea",
  componentId: "sc-162z2l6-6"
})(["width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "base__Button",
  componentId: "sc-162z2l6-7"
})(["width:100%;:hover{opacity:0.8;}transition:0.2s;background-color:#960d03;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;"]);
const DivMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "base__DivMessage",
  componentId: "sc-162z2l6-8"
})(["padding:10px;margin-top:15px;background:#ff5647;width:250px;border-radius:10px;p{color:white !important;}opacity:", ";transition:0.5s;"], props => props.show);
const Hr = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.hr.withConfig({
  displayName: "base__Hr",
  componentId: "sc-162z2l6-9"
})(["width:50%;"]);
const UploadImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "base__UploadImageContainer",
  componentId: "sc-162z2l6-10"
})(["img{max-width:320px;}"]);

/***/ }),

/***/ "./src/utils/images.js":
/*!*****************************!*\
  !*** ./src/utils/images.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "axios"));

module.exports = {
  changeFileName(file, newName) {
    if (file) {
      var blob = file.slice(0, file.size, "image/png");
      const typeFile = file.type.split("/");
      const newFile = new File([blob], `${newName}.${typeFile[1]}`, {
        type: file.type
      });
      return newFile;
    }
  },

  deleteImage(id, type, image, {
    f,
    files,
    keys
  }, cleanUpFile) {
    _axios.default.delete(`/images?id=${id}&type=${type}&image=${image}`).then(response => {
      cleanUpFile(f, files, keys);
      location.reload();
    }).catch(err => {});
  },

  renderInputOrImages(images, objLength, _exclude) {
    const _images = [];
    const exclude = _exclude || [];

    for (let x = 0; x < objLength; x++) {
      let isNull = true;
      images.forEach((img, i) => {
        let snBar = img.split("/");
        let sn = snBar[snBar.length - 1];

        if (!exclude.includes(x)) {
          if (x == sn[0]) {
            isNull = false;

            _images.push(img);
          }
        } else {
          isNull = false;
        }
      });
      if (isNull) _images.push(null);
    }

    return _images;
  },

  validateImage(types, size, file) {
    if (!file) return true;
    let ok = false,
        filesize = size / 1000;
    const fileType = file.type.split("/");
    types.forEach(types => {
      if (types == fileType[1]) ok = true;
    });
    if (filesize > 100) ok = false;
    if (ok) return true;else return false;
  },

  getNameImageFromUrl(url) {
    const splitted = url.split("/");
    const image = splitted[splitted.length - 1];
    const imageSplitted = image.split(".");
    return imageSplitted[0];
  }

};

/***/ }),

/***/ "./src/utils/local.js":
/*!****************************!*\
  !*** ./src/utils/local.js ***!
  \****************************/
/*! exports provided: setItem, getItem, removeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
function setItem(key, value) {
  if (!key) {
    return false;
  } else if (!value) {
    return false;
  } else {
    localStorage.setItem(key, value);
    return true;
  }
}
function getItem(key) {
  if (!key) return false;
  return localStorage.getItem(key);
}
function removeItem(key) {
  if (!key) return false;
  return localStorage.removeItem(key);
}

/***/ }),

/***/ "./src/utils/machines.js":
/*!*******************************!*\
  !*** ./src/utils/machines.js ***!
  \*******************************/
/*! exports provided: getMachines, getMachine, getOptions, deleteImage, updateMachine, addMachine, deleteMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMachines", function() { return getMachines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMachine", function() { return getMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptions", function() { return getOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteImage", function() { return deleteImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMachine", function() { return updateMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMachine", function() { return addMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMachine", function() { return deleteMachine; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/api.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/validate */ "./src/utils/validate.js");




function getMachines(cb, data) {
  const filter = data ? data : {};
  Object(_api__WEBPACK_IMPORTED_MODULE_2__["default"])().get(`/machine?categories=${filter.category}&manufacturer=${filter.manufacturer}&search=${filter.search}`).then(response => {
    cb(null, response.data);
  }).catch(err => {
    cb(err.response ? err.response.data : err.toString());
  });
}
function getMachine(id, cb) {
  Object(_api__WEBPACK_IMPORTED_MODULE_2__["default"])().get(`/machine/${id}`).then(response => {
    cb(null, response.data);
  }).catch(err => {
    cb(err.response ? err.response.data : err.toString());
  });
}
async function getOptions(cb) {
  try {
    const manufacturers = await Object(_api__WEBPACK_IMPORTED_MODULE_2__["default"])().get("/manufacturer");
    const categories = await Object(_api__WEBPACK_IMPORTED_MODULE_2__["default"])().get("/categories");
    cb(null, {
      manufacturers,
      categories
    });
  } catch (e) {
    cb(e);
  }
}
function deleteImage(id, type, image, cb) {
  Object(_api__WEBPACK_IMPORTED_MODULE_2__["default"])().delete(`/images?id=${id}&type=${type}&image=${image}`).then(response => {
    cb(null);
  }).catch(err => {
    cb(err.response ? err.response.data : err.toString());
  });
}
async function updateMachine(machine, machineFiles, sewingFile, prodRefFiles, files, cb) {
  console.log(sewingFile);
  const {
    id,
    name,
    description,
    mainFeatures,
    specifications,
    category,
    manufacturer
  } = machine;
  const formData = new FormData();
  console.log('specifications', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(specifications));
  formData.append("name", name);
  formData.append("description", description);
  formData.append("mainFeatures", mainFeatures);
  formData.append("specifications", specifications ? _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(specifications).length > 0 ? _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(specifications) : null : null);
  formData.append("category", category);
  formData.append("manufacturer", manufacturer);
  formData.append("video", machine.video);
  formData.append('folheto', files.folheto);
  formData.append('manual', files.manual);

  const machineFilesKeys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(machineFiles);

  machineFilesKeys.forEach(mkey => {
    formData.append("machines", machineFiles[mkey]);
  });
  formData.append("sewingType", sewingFile);

  const prodRefFilesKeys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(prodRefFiles);

  prodRefFilesKeys.forEach(prfkey => {
    formData.append("productReferences", prodRefFiles[prfkey]);
  });
  Object(_api__WEBPACK_IMPORTED_MODULE_2__["default"])().put("/machine/" + id, formData).then(response => {
    cb(null, response.data);
  }).catch(err => {
    cb(err.response ? err.response.data : err.toString());
  });
}
function addMachine(machine, machineFiles, sewingTypeFile, refProdFiles, files, cb) {
  const formData = new FormData();

  const machineFilesKeys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(machineFiles);

  let hasError = [false, false, false];
  machineFilesKeys.forEach(mkey => {
    hasError[0] = !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_3__["validateImage"])(["png", "jpg", "jpeg", "svg", "gif", "webp"], 10000, machineFiles[mkey]);
    formData.append("machines", machineFiles[mkey]);
  });

  const refProdFilesKey = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(refProdFiles);

  refProdFilesKey.forEach(rfKey => {
    hasError[1] = !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_3__["validateImage"])(["png", "jpg", "jpeg", "svg", "gif", "webp"], 10000, refProdFiles[rfKey]);
    formData.append("productReferences", refProdFiles[rfKey]);
  });
  hasError[2] = !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_3__["validateImage"])(["png", "jpg", "jpeg", "svg", "gif", "webp"], 10000, sewingTypeFile);

  if (hasError.includes(true)) {
    return cb("Você precisa subir imagens png, jpg, jpeg, svg, gif, webp com no máximo 10MB");
  }

  const fieldError = Object(_utils_validate__WEBPACK_IMPORTED_MODULE_3__["fieldValidation"])({
    nome: machine.name,
    fabricante: machine.manufacturer,
    subtítulo: machine.description,
    categoria: machine.category,
    características: machine.mainFeatures
  });

  if (fieldError.return) {
    formData.append("name", machine.name);
    formData.append("manufacturer", machine.manufacturer);
    formData.append("description", machine.description);
    formData.append("category", machine.category);
    formData.append("mainFeatures", machine.mainFeatures);
    formData.append("specifications", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(machine.specifications));
    formData.append("video", machine.video);
    formData.append('folheto', files.folheto);
    formData.append('manual', files.manual);
    Object(_api__WEBPACK_IMPORTED_MODULE_2__["default"])().post(`machine`, formData).then(response => {
      cb(null, response.data);
    }).catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
  } else {
    return cb(`${fieldError.message} ${fieldError.field}`);
  }
}
function deleteMachine(id, cb) {
  Object(_api__WEBPACK_IMPORTED_MODULE_2__["default"])().delete(`/machine/${id}`).then(response => {
    cb(null, response.data);
  }).catch(err => {
    cb(err.response ? err.response.data : err.toString());
  });
}

/***/ }),

/***/ "./src/utils/validate.js":
/*!*******************************!*\
  !*** ./src/utils/validate.js ***!
  \*******************************/
/*! exports provided: validateImage, fieldValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateImage", function() { return validateImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldValidation", function() { return fieldValidation; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function validateImage(types, size, file) {
  if (!file) return true;
  let ok = false,
      filesize = size / 1000;
  const fileType = file.type.split("/");
  types.forEach(types => {
    console.log(types, fileType[1]);
    if (types == fileType[1]) ok = true;
  });
  if (filesize > 100) ok = false;
  if (ok) return true;else return false;
}
function fieldValidation(object) {
  let _return = {
    return: true,
    message: "",
    field: ""
  };
  let hasError = false;

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object).forEach(function (key) {
    if (!hasError) if (!object[key]) {
      hasError = true;
      _return = {
        return: false,
        message: "Campo vazio: ",
        field: key
      };
    }
  });

  return _return;
}

/***/ }),

/***/ 7:
/*!***********************************************!*\
  !*** multi ./pages/admin/machines/machine.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/webpeople/multcostura-web/pages/admin/machines/machine.js */"./pages/admin/machines/machine.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/lab/Alert":
/*!*****************************************!*\
  !*** external "@material-ui/lab/Alert" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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
//# sourceMappingURL=machine.js.map