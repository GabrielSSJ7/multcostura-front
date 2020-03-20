module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "./pages/admin/home.js":
/*!*****************************!*\
  !*** ./pages/admin/home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_templates_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/templates/Admin */ "./src/components/templates/Admin.jsx");
/* harmony import */ var _src_utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/utils/auth */ "./src/utils/auth.js");
/* harmony import */ var _src_components_admin_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/admin/Sidebar */ "./src/components/admin/Sidebar.jsx");
/* harmony import */ var _src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/static/styled-components/base */ "./src/static/styled-components/base.js");
/* harmony import */ var _src_components_admin_institutional_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/admin/institutional/Home */ "./src/components/admin/institutional/Home.jsx");
/* harmony import */ var _src_components_admin_institutional_BannerFixed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/components/admin/institutional/BannerFixed */ "./src/components/admin/institutional/BannerFixed.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Home() {
  const {
    0: components,
    1: setComponents
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    home: __jsx(_src_components_admin_institutional_Home__WEBPACK_IMPORTED_MODULE_6__["default"], null),
    enterprise: __jsx(_src_components_admin_institutional_BannerFixed__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "enterpriseBanner"
    }),
    news: __jsx(_src_components_admin_institutional_BannerFixed__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "newsBanner"
    }),
    contact: __jsx(_src_components_admin_institutional_BannerFixed__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "contactBanner"
    }),
    produtos: __jsx(_src_components_admin_institutional_BannerFixed__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "produtos"
    }),
    pecas: __jsx(_src_components_admin_institutional_BannerFixed__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "pecas"
    }),
    noticias: __jsx(_src_components_admin_institutional_BannerFixed__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "noticias"
    })
  });
  const {
    0: componentsKey,
    1: setComponentsKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function setMenu(key) {
    setShow(true);
    setComponentsKey(key);
  }

  return __jsx(_src_components_templates_Admin__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_src_components_admin_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Container"], null, __jsx("h1", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(35,43,111)"
    }
  }, "Institucional"), __jsx(Hr, null), !show ? __jsx(Row, {
    style: {
      width: "93%"
    }
  }, __jsx(Column, {
    style: {
      width: "100%"
    }
  }, __jsx("h3", {
    className: "main-title",
    style: {
      color: "rgb(129, 22, 27)"
    }
  }, "Op\xE7\xF5es"), __jsx("h1", null, "Slides"), __jsx(CardContainer, {
    onClick: () => setMenu("home")
  }, __jsx(Row, {
    style: {
      margin: "5px",
      alignItems: "center"
    }
  }, __jsx("p", {
    style: {
      margin: "0 20px"
    }
  }, "P\xE1gina inicial")), __jsx(RedPartCardContainer, {
    className: "red-part"
  }, __jsx("p", {
    style: {
      color: "white"
    }
  }, "Gerenciar slide"))), __jsx(CardContainer, {
    onClick: () => setMenu("enterprise")
  }, __jsx(Row, {
    style: {
      margin: "5px",
      alignItems: "center"
    }
  }, __jsx("p", {
    style: {
      margin: "0 20px"
    }
  }, "P\xE1gina A Empresa")), __jsx(RedPartCardContainer, {
    className: "red-part"
  }, __jsx("p", {
    style: {
      color: "white"
    }
  }, "Alterar banner fixo"))), __jsx(CardContainer, {
    onClick: () => setMenu("news")
  }, __jsx(Row, {
    style: {
      margin: "5px",
      alignItems: "center"
    }
  }, __jsx("p", {
    style: {
      margin: "0 20px"
    }
  }, "P\xE1gina Not\xEDcias")), __jsx(RedPartCardContainer, {
    className: "red-part"
  }, __jsx("p", {
    style: {
      color: "white"
    }
  }, "Alterar banner fixo"))), __jsx(CardContainer, {
    onClick: () => setMenu("contact")
  }, __jsx(Row, {
    style: {
      margin: "5px",
      alignItems: "center"
    }
  }, __jsx("p", {
    style: {
      margin: "0 20px"
    }
  }, "P\xE1gina Contato")), __jsx(RedPartCardContainer, {
    className: "red-part"
  }, __jsx("p", {
    style: {
      color: "white"
    }
  }, "Alterar banner fixo"))), __jsx("h1", null, "Lan\xE7amentos"), __jsx(CardContainer, {
    onClick: () => setMenu("produtos")
  }, __jsx(Row, {
    style: {
      margin: "5px",
      alignItems: "center"
    }
  }, __jsx("p", {
    style: {
      margin: "0 20px"
    }
  }, "Card Produtos")), __jsx(RedPartCardContainer, {
    className: "red-part"
  }, __jsx("p", {
    style: {
      color: "white"
    }
  }, "Alterar pr\xE9via"))), __jsx(CardContainer, {
    onClick: () => setMenu("pecas")
  }, __jsx(Row, {
    style: {
      margin: "5px",
      alignItems: "center"
    }
  }, __jsx("p", {
    style: {
      margin: "0 20px"
    }
  }, "Card Pe\xE7as")), __jsx(RedPartCardContainer, {
    className: "red-part"
  }, __jsx("p", {
    style: {
      color: "white"
    }
  }, "Alterar pr\xE9via"))), __jsx(CardContainer, {
    onClick: () => setMenu("noticias")
  }, __jsx(Row, {
    style: {
      margin: "5px",
      alignItems: "center"
    }
  }, __jsx("p", {
    style: {
      margin: "0 20px"
    }
  }, "Card Not\xEDcias")), __jsx(RedPartCardContainer, {
    className: "red-part"
  }, __jsx("p", {
    style: {
      color: "white"
    }
  }, "Alterar pr\xE9via"))))) : components[componentsKey]));
}

const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "home__CardContainer",
  componentId: "sc-8if6wb-0"
})(["max-height:300px;height:100px;overflow:hidden;cursor:pointer;display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;margin-right:15px;padding:0 0 0 15px;transition:.5s;:hover{box-shadow:0 5px 12px rgba(0,0,0,0.25);.red-part{opacity:.9;}padding:0 2px;p{color:rgb(129,22,27);}span{color:rgb(129,22,27);}}box-shadow:0 1px 2px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);}"]);
const RedPartCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "home__RedPartCardContainer",
  componentId: "sc-8if6wb-1"
})(["background:rgb(129,22,27);height:20vh;width:20%;justify-self:end;transition:0.5s;display:flex;justify-content:center;padding-left:15px;align-items:center;"]);
const Hr = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.hr.withConfig({
  displayName: "home__Hr",
  componentId: "sc-8if6wb-2"
})(["width:50%;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "home__Row",
  componentId: "sc-8if6wb-3"
})(["display:flex;margin-top:7%;margin-left:30px;"]);
const Column = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "home__Column",
  componentId: "sc-8if6wb-4"
})(["display:flex;flex-direction:column;"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_src_utils_auth__WEBPACK_IMPORTED_MODULE_3__["withAuthSync"])(Home));

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function setApi(headers) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
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

/***/ "./src/components/admin/institutional/BannerFixed.jsx":
/*!************************************************************!*\
  !*** ./src/components/admin/institutional/BannerFixed.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BannerFixed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_FileInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/FileInput */ "./src/components/utils/FileInput.jsx");
/* harmony import */ var _static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../static/styled-components/base */ "./src/static/styled-components/base.js");
/* harmony import */ var _utils_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/banner */ "./src/utils/banner.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/images */ "./src/utils/images.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_images__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../static/images/image-404.jpg */ "./src/static/images/image-404.jpg");
/* harmony import */ var _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function BannerFixed({
  type
}) {
  const imageMessageError = `Extensão do arquivo enviado é inválido. Extensões permitidas ${["jpg","JPG","png","webp","svg","jpeg"].toString()}, com no máximo 10MB`;
  const {
    0: banner,
    1: setBanner
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_8___default.a);
  const {
    0: bannerBase,
    1: setBannerBase
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: file,
    1: setFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: snackBar,
    1: setSnackBar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    result: "success",
    open: false,
    message: ""
  });

  function handleChange(e) {
    if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_7__["validateImage"])(["jpg","JPG","png","webp","svg","jpeg"], 10000, e.target.files[0])) {
      setBanner(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    } else {
      setSnackBar({
        open: true,
        result: 'error',
        message: imageMessageError
      });
    }
  }

  function handleClose() {
    setSnackBar(_objectSpread({}, snackBar, {
      open: false
    }));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function asynFunc() {
      Object(_utils_banner__WEBPACK_IMPORTED_MODULE_6__["getBannerFixed"])(type, function (err, d) {
        if (err) {
          setSnackbar({
            open: true,
            result: "error",
            message: err
          });
          return;
        }

        setBannerBase(d ? d : null);
        setBanner(d ? d : _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_8___default.a);
      });
    }

    asynFunc();
    return () => {};
  }, []);

  function saveBanner() {
    Object(_utils_banner__WEBPACK_IMPORTED_MODULE_6__["saveBannerFixed"])(type, file, function (err, r) {
      if (err) {
        setSnackBar({
          open: true,
          result: "error",
          message: err
        });
        return;
      }

      setSnackBar({
        open: true,
        result: "success",
        message: "Banner salvo com sucesso!"
      });
      setFile(null);
    });
  }

  function deleteBanner() {
    Object(_utils_banner__WEBPACK_IMPORTED_MODULE_6__["deleteBannerFixed"])(type, function (err, r) {
      if (err) {
        setSnackBar({
          open: true,
          result: "error",
          message: err
        });
        return;
      }

      setSnackBar({
        open: true,
        result: "success",
        message: "Banner excluido com sucesso!"
      });
      setFile(null);
      setBanner(_static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_8___default.a);
    });
  }

  return __jsx(Column, null, __jsx("div", {
    onClick: () => location.reload(),
    className: "arrow-back",
    style: {
      background: "#960d03",
      borderRadius: "5px",
      padding: "5px",
      maxWidth: "60px",
      marginLeft: "10px",
      marginBottom: "5px",
      display: 'flex',
      flexDirection: "row"
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faArrowLeft"],
    style: {
      color: "white"
    }
  }), __jsx("span", {
    style: {
      color: "white"
    }
  }, "Voltar")), __jsx("style", null, `  

            .arrow-back {
              transition: .5s;
            }

            .arrow-back:hover {
              cursor: pointer;
              opacity: .8;
            }
          `), __jsx(Row, null, __jsx(Wrapper, null, banner != _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_8___default.a ? __jsx(BtnDelete, {
    onClick: deleteBanner
  }, "Excluir banner") : "", __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    open: snackBar.open,
    autoHideDuration: 2500,
    onClose: handleClose
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3___default.a, {
    severity: snackBar.result
  }, snackBar.message)), __jsx(Slide, {
    src: banner
  }))), __jsx(Row, null, __jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleChange: handleChange,
    labelInputFile: "Enviar imagem",
    id: "bannerFixed",
    name: "bannerFixed",
    labelWidth: "200px",
    labelHeight: "80px",
    maxWidth: "100px",
    file: file,
    cleanFileInput: () => {
      setFile(null);
      setBanner(bannerBase ? bannerBase : _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_8___default.a);
    }
  })), __jsx(Row, {
    style: {
      justifyContent: "center"
    }
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    style: {
      width: "50%"
    },
    onClick: () => saveBanner()
  }, "Salvar")));
}
const BtnDelete = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "BannerFixed__BtnDelete",
  componentId: "sc-1dgf4pc-0"
})(["background:#960d03;padding:5px;position:absolute;z-index:9;left:10px;top:0;cursor:pointer;color:white;text-transform:uppercase;font-size:0.8rem;border-radius:5px;transition:0.3s;:hover{opacity:0.9;padding:5px 6px;}"]);
const Column = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "BannerFixed__Column",
  componentId: "sc-1dgf4pc-1"
})(["display:flex;flex-direction:column;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "BannerFixed__Row",
  componentId: "sc-1dgf4pc-2"
})(["display:flex;justify-content:center;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "BannerFixed__Wrapper",
  componentId: "sc-1dgf4pc-3"
})(["width:100%;height:", ";overflow:hidden;display:-webkit-box;position:relative;height:400px;"], props => props.height);
const Slide = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "BannerFixed__Slide",
  componentId: "sc-1dgf4pc-4"
})(["background-image:url('", "');width:100%;background-position:center;background-repeat:no-repeat;width:", ";height:", ";transform:translateX(", "px);transition:transform 0.4s ease-in-out;position:relative;"], props => props.src, props => props.width, props => props.height, props => props.translate);

/***/ }),

/***/ "./src/components/admin/institutional/Home.jsx":
/*!*****************************************************!*\
  !*** ./src/components/admin/institutional/Home.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeBanner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../templates/Admin */ "./src/components/templates/Admin.jsx");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sidebar */ "./src/components/admin/Sidebar.jsx");
/* harmony import */ var _utils_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/Slider */ "./src/components/utils/Slider.jsx");
/* harmony import */ var _static_styled_components_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../static/styled-components/base */ "./src/static/styled-components/base.js");
/* harmony import */ var _utils_FileInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/FileInput */ "./src/components/utils/FileInput.jsx");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/images */ "./src/utils/images.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utils_images__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_banner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/banner */ "./src/utils/banner.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../static/images/image-404.jpg */ "./src/static/images/image-404.jpg");
/* harmony import */ var _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_14__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function HomeBanner() {
  const imageMessageError = `Extensão do arquivo enviado é inválido. Extensões permitidas ${["jpg","JPG","png","webp","svg","jpeg"].toString()}, com no máximo 10MB`;
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: images,
    1: setImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: files,
    1: setFiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: slideControl,
    1: setSlideControl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: snackBar,
    1: setSnackBar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    result: "success",
    open: false,
    message: ""
  });

  function handleChange(e, inputIndex) {
    changeBannerImage(e.target.files[0], inputIndex);
  }

  function addSlide() {
    const inputIndex = images.length;
    setImages([...images, {
      image: _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
      pos: inputIndex,
      name: ""
    }]);
    setInputs([...inputs, __jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "file",
      handleChange: e => handleChange(e, inputIndex),
      labelInputFile: `Enviar Imagem`,
      maxWidth: "50%",
      labelHeight: "50px",
      labelWidth: "150px",
      id: inputIndex,
      key: inputIndex
    })]);
    files.push(null);
    setFiles(files);
    setSlideControl(images.length + 1);
    setSnackBar({
      open: true,
      result: "success",
      message: "Banner adicionado a lista"
    });
  }

  function changeBannerImage(file, index) {
    if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_10__["validateImage"])(["jpg","JPG","png","webp","svg","jpeg"], 10000, file)) {
      const newFile = Object(_utils_images__WEBPACK_IMPORTED_MODULE_10__["changeFileName"])(file, Math.round(Math.random() * 100000 + 1) + "" + Date.now());
      setImages(images => images.map((image, ind) => {
        if (image.pos == index) {
          return file ? {
            image: URL.createObjectURL(file),
            pos: index,
            name: newFile.name
          } : {
            image: _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
            pos: index,
            name: file.name
          };
        }

        return image;
      }));
      const _files = files;
      _files[index] = newFile;
      setFiles(_files);
      setSlideControl(index + 1);
    } else {
      setSnackBar({
        open: true,
        result: 'error',
        message: imageMessageError
      });
    }
  }

  function handleClose() {
    setSnackBar(_objectSpread({}, snackBar, {
      open: false
    }));
  }

  function removeSlide(id) {
    setImages(images => {
      images.splice(id, 1);
      return images;
    });
    setInputs(inputs => {
      inputs.splice(id, 1);
      return inputs;
    });
    setFiles(files => {
      files.splice(id, 1);
      return files;
    });
    setSlideControl(id == 0 ? id + 1 : id);
    setSnackBar({
      open: true,
      result: "success",
      message: "Banner removido da lista"
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setName(next_router__WEBPACK_IMPORTED_MODULE_2___default.a.query.name);

    function asyncFunc() {
      Object(_utils_banner__WEBPACK_IMPORTED_MODULE_11__["getSlide"])("institutional", "homeBanners", function (err, response) {
        if (err) {
          setSnackBar({
            open: true,
            message: err,
            result: "error"
          });
          return;
        }

        const Inputs = [];
        const Files = [];

        for (let a = 0; a < response.length; a++) {
          Inputs.push(__jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
            type: "file",
            handleChange: e => handleChange(e, a),
            labelInputFile: `Enviar Imagem`,
            maxWidth: "50%",
            labelHeight: "50px",
            labelWidth: "150px",
            id: a,
            key: a
          }));
          Files.push(a + 1);
        }

        setInputs(Inputs);
        setFiles(Files);
        setImages(response.map(banner => _objectSpread({}, banner, {
          name: banner.name
        })));
      });
    }

    asyncFunc();
    return () => {};
  }, []);

  function makeBannerFirst() {
    const ctrl = slideControl - 1;
    let currentBanner = images[ctrl];
    let firstBanner = images[0];
    let currentFile = files[ctrl];
    let firstFile = files[0];
    setImages(images => {
      const newImages = images;
      newImages[0] = {
        image: currentBanner.image,
        pos: 0,
        name: currentBanner.name
      };
      newImages[ctrl] = {
        image: firstBanner.image,
        pos: ctrl,
        name: firstBanner.name
      };
      return newImages;
    });
    setFiles(files => {
      const newFiles = files;
      newFiles[0] = currentFile;
      newFiles[ctrl] = firstFile;
      return newFiles;
    });
    setSlideControl(1);
  }

  function _saveSlide() {
    let hasEmptyFile = false;
    files.forEach(file => {
      if (!file) hasEmptyFile = true;
    });
    if (hasEmptyFile) setSnackBar({
      result: "error",
      message: "Há banners sem imagens",
      open: true
    });else {
      if (files.length == 0) return setSnackBar({
        result: "error",
        message: "Há banners sem imagens",
        open: true
      });
      Object(_utils_banner__WEBPACK_IMPORTED_MODULE_11__["saveSlide"])(null, images, files, "homeBanners", function (err, response) {
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
          message: "Sucesso",
          open: true
        });
      });
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8___default.a, {
    open: snackBar.open,
    autoHideDuration: 1500,
    onClose: handleClose
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9___default.a, {
    severity: snackBar.result
  }, snackBar.message)), __jsx(Column, null, __jsx("div", {
    onClick: () => location.reload(),
    className: "arrow-back",
    style: {
      background: "#960d03",
      borderRadius: "5px",
      padding: "5px",
      maxWidth: "60px",
      marginLeft: "10px",
      marginBottom: "5px",
      display: 'flex',
      flexDirection: "row"
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faArrowLeft"],
    style: {
      color: "white"
    }
  }), __jsx("span", {
    style: {
      color: "white"
    }
  }, "Voltar")), __jsx("style", null, `  

            .arrow-back {
              transition: .5s;
            }

            .arrow-back:hover {
              cursor: pointer;
              opacity: .8;
            }
          `), __jsx(Row, {
    align: "center"
  }, __jsx(Column, {
    style: {
      width: "100%"
    }
  }, images.length == 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      height: "400px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", null, "Voc\xEA ainda n\xE3o adicionou nenhum banner a lista de banners."), __jsx("p", null, "Clique no bot\xE3o", " ", __jsx("strong", null, "\"Adicionar banner a lista\""), ".")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, slideControl - 1 != 0 ? __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    style: {
      width: "50%",
      display: "block",
      margin: "10px auto"
    },
    onClick: makeBannerFirst
  }, "Tornar este banner o principal") : __jsx("span", {
    style: {
      width: "20px",
      height: "64px"
    }
  }), __jsx("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, __jsx(ArrowLeft, {
    onClick: () => {
      setSlideControl(sl => {
        if (sl == 1) return 1;
        return sl - 1;
      });
    }
  }), __jsx(ArrowRight, {
    onClick: () => {
      setSlideControl(sl => {
        if (sl == images.length) return 1;
        return sl + 1;
      });
    }
  }), __jsx(_utils_Slider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    slideCtrl: slideControl,
    images: images.map(image => image.image),
    height: "400px",
    slideWidth: "100%"
  })), __jsx("div", {
    style: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "5px",
      padding: "2px 0"
    }
  }, images.map((image, id) => __jsx(ThumbnailBanner, {
    style: {
      border: `${id == slideControl - 1 ? "2px solid #960d03" : "2px solid transparent"}`
    },
    onClick: () => {
      setSlideControl(parseInt(id + 1));
    }
  }, __jsx("img", {
    src: image.image,
    style: {
      width: "100%"
    }
  })))), __jsx("h2", {
    style: {
      textAlign: "center"
    }
  }, "Posi\xE7\xE3o do banner ", slideControl), __jsx("h4", {
    style: {
      textAlign: "center"
    }
  }, "Total de banners ", inputs.length))), __jsx(Column, {
    style: {
      width: "100%"
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    }
  }, inputs[slideControl - 1], " ", images.length != 0 ? __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    style: {
      width: "30%"
    },
    onClick: () => removeSlide(slideControl - 1)
  }, "Remover banner") : ""), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    style: {
      width: "50%",
      margin: "15px auto",
      display: "block"
    },
    onClick: addSlide
  }, "Adicionar banner a lista"), images.length != 0 ? __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    style: {
      width: "50%",
      margin: "15px auto",
      display: "block"
    },
    onClick: _saveSlide
  }, "Salvar") : "", __jsx("div", {
    style: {
      border: "1px solid grey",
      margin: "10px"
    }
  }, __jsx("p", {
    style: {
      textAlign: "center"
    }
  }, "*As imagens devem ter 1920x400"))))));
}
const Column = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Home__Column",
  componentId: "sc-1ji1hcl-0"
})(["display:flex;flex-direction:column;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Home__Row",
  componentId: "sc-1ji1hcl-1"
})(["display:flex;flex-direction:row;justify-content:", ";width:", ";"], props => props.align, props => props.w);
const ThumbnailBanner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Home__ThumbnailBanner",
  componentId: "sc-1ji1hcl-2"
})(["width:100px;display:flex;margin-right:5px;align-items:center;transition:0.2s;cursor:pointer;:hover{opacity:0.8;}"]);
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Home__ImageContainer",
  componentId: "sc-1ji1hcl-3"
})(["img{max-width:120px;}"]);
const ArrowLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Home__ArrowLeft",
  componentId: "sc-1ji1hcl-4"
})([":hover{opacity:0.8;}transition:0.2s;position:absolute;z-index:9;left:0;margin-left:40px;cursor:pointer;top:50%;margin-top:-10px;border-top:30px solid transparent;border-bottom:30px solid transparent;border-right:30px solid #960d03;"]);
const ArrowRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Home__ArrowRight",
  componentId: "sc-1ji1hcl-5"
})([":hover{opacity:0.8;}transition:0.2s;position:absolute;z-index:9;right:0;margin-right:40px;cursor:pointer;width:0;height:0;top:50%;margin-top:-10px;border-top:30px solid transparent;border-bottom:30px solid transparent;border-left:30px solid #960d03;"]);

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

/***/ "./src/components/utils/FileInput.jsx":
/*!********************************************!*\
  !*** ./src/components/utils/FileInput.jsx ***!
  \********************************************/
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
  btnDelete,
  border
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
    className: "div-file-input",
    style: {
      border: !border ? "1px dotted lightgrey" : '',
      cursor: "pointer",
      padding: "10px",
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
      cursor: "pointer",
      width: labelWidth,
      height: labelHeight,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
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
  }), " ", __jsx("br", null), labelInputFile), file ? __jsx("img", {
    className: "image-container",
    style: {
      maxWidth
    },
    src: file ? URL.createObjectURL(file) : ""
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, imageURL ? !btnDelete ? __jsx(ButtonDelImg, {
    onClick: deleteImage
  }, "Excluir Imagem") : null : null, __jsx("img", {
    className: "image-container",
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
  componentId: "hidghm-0"
})(["background-color:#960d03;color:white;padding:8px 20px;margin:8px 0;border:none;border-radius:4px;position:absolute;width:75px;right:0;top:0px;font-size:8px;z-index:9;cursor:pointer;"]);

/***/ }),

/***/ "./src/components/utils/Slider.jsx":
/*!*****************************************!*\
  !*** ./src/components/utils/Slider.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Slider__Wrapper",
  componentId: "sc-1ke79mt-0"
})(["width:100%;height:", ";overflow:hidden;display:-webkit-box;position:relative;"], props => props.height);
const Slide = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Slider__Slide",
  componentId: "sc-1ke79mt-1"
})(["background-repeat:no-repeat;background-color:#E3E3E3;width:", ";height:", ";transform:translateX(", "px);transition:transform 0.4s ease-in-out;position:relative;"], props => props.width, props => props.height, props => props.translate);
const ArrowLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Slider__ArrowLeft",
  componentId: "sc-1ke79mt-2"
})([":hover{opacity:0.8;}transition:0.2s;position:absolute;z-index:9;left:0;margin-left:40px;cursor:pointer;top:50%;margin-top:-10px;border-top:30px solid transparent;border-bottom:30px solid transparent;border-right:30px solid #960d03;"]);
const ArrowRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Slider__ArrowRight",
  componentId: "sc-1ke79mt-3"
})([":hover{opacity:0.8;}transition:0.2s;position:absolute;z-index:9;right:0;margin-right:40px;cursor:pointer;width:0;height:0;top:50%;margin-top:-10px;border-top:30px solid transparent;border-bottom:30px solid transparent;border-left:30px solid #960d03;"]);
/* harmony default export */ __webpack_exports__["default"] = (({
  link,
  images,
  autoSlide,
  slideCtrl,
  balls,
  arrows,
  height,
  slideWidth
}) => {
  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: translate,
    1: setTranslate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        next();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [index]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (slideCtrl) {
      setIndex(slideCtrl);
      if (slideCtrl != index) setTranslate(getSlideWidth() - slideCtrl * getSlideWidth());
    }
  }, [slideCtrl]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    window.addEventListener("resize", () => {
      setTranslate(getSlideWidth() - index * getSlideWidth());
    });
  });

  function prev() {
    if (index == 1) return;
    setTranslate(getSlideWidth() - (index - 1) * getSlideWidth());
    setIndex(index - 1);
  }

  function next() {
    if (index == images.length) {
      setTranslate(1);
      setIndex(1);
    } else {
      setTranslate(getSlideWidth() - (index + 1) * getSlideWidth());
      setIndex(index => index + 1);
    }
  }

  function getSlideWidth() {
    return document.querySelector(".slide") ? document.querySelector(".slide").clientWidth : 0;
  }

  function suckBalls(i) {
    setIndex(i);

    if (i != index) {
      setTranslate(getSlideWidth() - i * getSlideWidth());
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Wrapper, {
    height: "400px"
  }, images ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, arrows ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ArrowLeft, {
    onClick: () => prev()
  }), __jsx(ArrowRight, {
    onClick: () => next()
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, images.map((img, i) => __jsx(Slide, {
    className: "slide",
    key: i,
    src: img,
    translate: translate,
    height: "100%",
    width: slideWidth
  }, __jsx("img", {
    src: img,
    style: {
      width: "100%",
      height: "100%"
    }
  }))))) : __jsx("p", null, " no image")), balls ? __jsx("div", {
    id: "bolas",
    style: {
      display: "flex",
      flexDirection: "row",
      width: "50%",
      justifyContent: "center",
      margin: "10px auto"
    }
  }, images.map((img, i) => __jsx("div", {
    key: i,
    onClick: () => suckBalls(i + 1),
    style: {
      width: "8px",
      height: "8px",
      background: index == i + 1 ? "black" : "transparent",
      border: "1px solid black",
      borderRadius: "100%",
      marginRight: "10px",
      cursor: "pointer"
    }
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null));
});

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

/***/ "./src/static/images/image-404.jpg":
/*!*****************************************!*\
  !*** ./src/static/images/image-404.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image-404-6921071c00e075e955ce994afab8b356.jpg";

/***/ }),

/***/ "./src/static/images/logo-multcostura-opção-3.png":
/*!********************************************************!*\
  !*** ./src/static/images/logo-multcostura-opção-3.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-multcostura-opção-3-c1348ddb586f0519b6c525d576fd9c5d.png";

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

/***/ "./src/utils/auth.js":
/*!***************************!*\
  !*** ./src/utils/auth.js ***!
  \***************************/
/*! exports provided: withAuthSync, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getDisplayName = Component => Component.displayName || Component.name || "Component";

const withAuthSync = WrappedComponent => {
  var _class, _temp;

  return _temp = _class = class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    static async getInitialProps(ctx) {
      const token = auth(ctx);
      const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
      return _objectSpread({}, componentProps, {
        token
      });
    }

    render() {
      return __jsx(WrappedComponent, this.props);
    }

  }, _defineProperty(_class, "displayName", `withAuthSync(${getDisplayName(WrappedComponent)})`), _temp;
};


const auth = ctx => {
  const {
    user
  } = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx);

  if (ctx.req && !user) {
    ctx.res.writeHead(302, {
      Location: "/login"
    });
    ctx.res.end();
    return;
  }

  if (!user) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/login");
  }

  return user;
};

/***/ }),

/***/ "./src/utils/banner.js":
/*!*****************************!*\
  !*** ./src/utils/banner.js ***!
  \*****************************/
/*! exports provided: saveSlide, getSlide, getBannerFixed, saveBannerFixed, deleteBannerFixed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSlide", function() { return saveSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlide", function() { return getSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBannerFixed", function() { return getBannerFixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBannerFixed", function() { return saveBannerFixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBannerFixed", function() { return deleteBannerFixed; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/api.js");

function saveSlide(id, images, files, type, cb) {
  const formData = new FormData();
  files.forEach(file => {
    if (typeof file == "object") formData.append("img", file);
  });
  formData.append("id", id);
  formData.append("images", JSON.stringify(images));
  formData.append("type", type);
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/banner", formData).then(res => cb(null, res.data)).catch(err => cb(err.response ? err.response.data : err.toString()));
}
function getSlide(route, id, cb) {
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().get(`/${route}${id ? "/" + id : ""}`).then(response => {
    cb(null, response.data);
  }).catch(err => {
    cb(err.response ? err.response.data : err.toString());
  });
}
function getBannerFixed(type, cb) {
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().get(`/institutional/${type}`).then(response => {
    console.log("r =>   ", response.data);
    cb(null, response.data);
  }).catch(err => {
    cb(err.response ? err.response.data : err.toString());
  });
}
function saveBannerFixed(type, file, cb) {
  const formData = new FormData();
  formData.append("img", file);
  formData.append("type", type);
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().post(`/institutional`, formData).then(response => {
    cb(null, response.data);
  }).catch(err => {
    cb(err.response ? err.response.data : err.toString());
  });
}
function deleteBannerFixed(type, cb) {
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().delete("/institutional/" + type).then(r => {
    cb(null, r.data);
  }).catch(err => {
    cb(err.response ? err.response.data : err.toString());
  });
}

/***/ }),

/***/ "./src/utils/images.js":
/*!*****************************!*\
  !*** ./src/utils/images.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/admin/home.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gluz\Projects\web\multcostura\multcostura-web\pages\admin\home.js */"./pages/admin/home.js");


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

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

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
//# sourceMappingURL=home.js.map