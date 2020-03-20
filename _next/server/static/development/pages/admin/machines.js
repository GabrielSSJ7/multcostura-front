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

/***/ "./pages/admin/machines/index.js":
/*!***************************************!*\
  !*** ./pages/admin/machines/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_templates_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/components/templates/Admin */ "./src/components/templates/Admin.jsx");
/* harmony import */ var _src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/static/styled-components/base */ "./src/static/styled-components/base.js");
/* harmony import */ var _src_components_admin_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/components/admin/Sidebar */ "./src/components/admin/Sidebar.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_components_admin_machines_ListMachines__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/components/admin/machines/ListMachines */ "./src/components/admin/machines/ListMachines.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Machines() {
  const {
    0: menuMachine,
    1: setMenuMachine
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(_src_components_templates_Admin__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_src_components_admin_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx("div", {
    style: {
      width: "100%"
    }
  }, __jsx("h1", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(35,43,111)"
    }
  }, "M\xE1quinas"), __jsx(_src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__["Hr"], null), __jsx("div", {
    style: {
      marginTop: "50px",
      padding: "0 15px"
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
    className: "main-title",
    style: {
      color: "rgb(129, 22, 27)"
    }
  }, "Op\xE7\xF5es"), __jsx(_src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: () => _routes__WEBPACK_IMPORTED_MODULE_1__["Router"].pushRoute("/admin/machines/new-machine")
  }, "Adicionar nova m\xE1quina")), __jsx(_src_components_admin_machines_ListMachines__WEBPACK_IMPORTED_MODULE_7__["default"], null)))));

  function selectOption(option) {
    switch (option) {
      case "edit":
        setMenuMachine(false);
        setAddMachineControll(true);
        break;

      case "back":
        setMenuMachine(true);
        setAddMachineControll(false);
        break;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Machines);

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

/***/ "./src/components/admin/machines/ListMachines.jsx":
/*!********************************************************!*\
  !*** ./src/components/admin/machines/ListMachines.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListMachines; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_styled_components_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../static/styled-components/base */ "./src/static/styled-components/base.js");
/* harmony import */ var _utils_machines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/machines */ "./src/utils/machines.js");
/* harmony import */ var _ducks_machines__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ducks/machines */ "./src/ducks/machines.js");
/* harmony import */ var _ducks_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ducks/utils */ "./src/ducks/utils.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function ListMachines() {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    category: null,
    manufacturer: null,
    search: ""
  });
  const {
    0: categories,
    1: setCategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: manufacturers,
    1: setManufacturers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    machines
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.Machine);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: snackBar,
    1: setSnackBar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    result: "success",
    open: false,
    message: ""
  });

  function handleClose() {
    setSnackBar(_objectSpread({}, snackBar, {
      open: false
    }));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function asyncFunc() {
      Object(_utils_machines__WEBPACK_IMPORTED_MODULE_5__["getMachines"])(function (err, machines) {
        if (err) {
          setSnackBar({
            result: "error",
            open: true,
            message: err
          });
          dispatch(_ducks_machines__WEBPACK_IMPORTED_MODULE_6__["Creators"].loadMachines([]));
          return;
        }

        dispatch(_ducks_machines__WEBPACK_IMPORTED_MODULE_6__["Creators"].loadMachines(machines));
      }, {
        category: state.category,
        manufacturer: state.manufacturer,
        search: state.search
      });
    }

    asyncFunc();
    return () => {};
  }, [state]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function asyncFunc() {
      Object(_utils_machines__WEBPACK_IMPORTED_MODULE_5__["getMachines"])(function (err, machines) {
        if (err) {
          setSnackBar({
            result: "error",
            message: err,
            open: true
          });
          return;
        }

        dispatch(_ducks_machines__WEBPACK_IMPORTED_MODULE_6__["Creators"].loadMachines(machines));
      });
      Object(_utils_machines__WEBPACK_IMPORTED_MODULE_5__["getOptions"])(function (err, data) {
        if (err) {
          setSnackBar({
            result: "error",
            open: true,
            message: err
          });
          return;
        }

        setCategories(data.categories.data);
        setManufacturers(data.manufacturers.data);
      });
    }

    asyncFunc();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8___default.a, {
    open: snackBar.open,
    autoHideDuration: 3000,
    onClose: handleClose
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9___default.a, {
    severity: snackBar.result
  }, snackBar.message)), __jsx("div", {
    style: {
      width: "100%",
      display: "block",
      margin: "auto"
    }
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    value: state.search,
    type: "text",
    name: "search",
    id: "search",
    placeholder: "Pesquise pelo nome",
    onChange: e => setState(_objectSpread({}, state, {
      search: e.target.value
    }))
  }), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    value: state.category,
    onChange: e => setState(_objectSpread({}, state, {
      category: e.target.value
    }))
  }, __jsx("option", {
    value: ""
  }, "Escolha uma categoria"), categories.map(category => __jsx("option", {
    selected: state.category == category.id ? category.id : false,
    value: category.id
  }, category.name))), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    value: state.manufacturer,
    onChange: e => setState(_objectSpread({}, state, {
      manufacturer: e.target.value
    }))
  }, __jsx("option", {
    value: ""
  }, "Escolha um fabricante"), manufacturers.map(manu => __jsx("option", {
    selected: state.manufacturer == manu.id ? manu.id : false,
    value: manu.id
  }, manu.name)))), __jsx(Container, null, machines.map(machine => __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: `/admin/machines/machine?id=${machine.id.toString()}`
  }, __jsx(CardContainer, null, __jsx("img", {
    src: machine.images[0]
  }), __jsx("div", null, __jsx(Title, null, " ", machine.name, " "), __jsx(Subtitle, null, machine.description)))))));

  function navigateToMachine(id) {
    _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].push(`/admin/machines/machine?id=${id}`);
  }
}
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ListMachines__Container",
  componentId: "um70bv-0"
})(["display:flex;flex-direction:row;width:100%;flex-wrap:wrap;justify-content:center;"]);
const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ListMachines__CardContainer",
  componentId: "um70bv-1"
})(["min-width:250px;max-width:250px;max-height:300px;overflow:hidden;cursor:pointer;display:flex;flex-direction:column;flex-wrap:no-wrap;margin-bottom:10px;margin-right:15px;img{width:100%;max-width:230px;display:block;margin:auto}padding:15px;:hover{box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);}box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "ListMachines__Title",
  componentId: "um70bv-2"
})(["font-size:22px;margin:0 15px;"]);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "ListMachines__Subtitle",
  componentId: "um70bv-3"
})(["color:lightgrey;margin:0 15px;"]);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "ListMachines__Description",
  componentId: "um70bv-4"
})(["color:grey;margin:15px 15px;"]);

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

/***/ "./src/ducks/machines.js":
/*!*******************************!*\
  !*** ./src/ducks/machines.js ***!
  \*******************************/
/*! exports provided: Types, Creators, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return Types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creators", function() { return Creators; });
/* harmony import */ var reduxsauce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reduxsauce */ "reduxsauce");
/* harmony import */ var reduxsauce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reduxsauce__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const {
  Types,
  Creators
} = Object(reduxsauce__WEBPACK_IMPORTED_MODULE_0__["createActions"])({
  loadMachines: ["machines"],
  loadMachinesForFilters: ["machines"],
  loadFilters: ["filters"]
});
const INITIAL_STATE = {
  machines: [],
  machinesForFilters: [],
  filters: {}
};

const loadMachines = (state = INITIAL_STATE, action) => _objectSpread({}, state, {
  machines: action.machines
});

const loadMachinesForFilters = (state = INITIAL_STATE, action) => _objectSpread({}, state, {
  machinesForFilters: action.machines
});

const loadFilters = (state = INITIAL_STATE, action) => _objectSpread({}, state, {
  filters: action.filters
});

/* harmony default export */ __webpack_exports__["default"] = (Object(reduxsauce__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(INITIAL_STATE, {
  [Types.LOAD_MACHINES]: loadMachines,
  [Types.LOAD_MACHINES_FOR_FILTERS]: loadMachinesForFilters,
  [Types.LOAD_FILTERS]: loadFilters
}));

/***/ }),

/***/ "./src/ducks/utils.js":
/*!****************************!*\
  !*** ./src/ducks/utils.js ***!
  \****************************/
/*! exports provided: Types, Creators, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return Types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creators", function() { return Creators; });
/* harmony import */ var reduxsauce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reduxsauce */ "reduxsauce");
/* harmony import */ var reduxsauce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reduxsauce__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const {
  Types,
  Creators
} = Object(reduxsauce__WEBPACK_IMPORTED_MODULE_0__["createActions"])({
  changeMessage: ["message"],
  changeMessageType: ["messageType"],
  changeMessageColor: ["messageColor"]
});
const INITIAL_STATE = {
  message: "",
  messageType: false,
  messageColor: ""
};

const changeMessage = (state = INITIAL_STATE, action) => _objectSpread({}, state, {
  message: action.message
});

const changeMessageType = (state = INITIAL_STATE, action) => _objectSpread({}, state, {
  messageType: action.messageType
});

const changeMessageColor = (state = INITIAL_STATE, action) => _objectSpread({}, state, {
  messageColor: action.messageColor
});

/* harmony default export */ __webpack_exports__["default"] = (Object(reduxsauce__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(INITIAL_STATE, {
  [Types.CHANGE_MESSAGE]: changeMessage,
  [Types.CHANGE_MESSAGE_TYPE]: changeMessageType,
  [Types.CHANGE_MESSAGE_COLOR]: changeMessageColor
}));

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
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/api.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/validate */ "./src/utils/validate.js");


function getMachines(cb, data) {
  const filter = data ? data : {};
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().get(`/machine?categories=${filter.category}&manufacturer=${filter.manufacturer}&search=${filter.search}`).then(response => {
    cb(null, response.data);
  }).catch(err => {
    cb(err.response ? err.response.data : err.toString());
  });
}
function getMachine(id, cb) {
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().get(`/machine/${id}`).then(response => {
    cb(null, response.data);
  }).catch(err => {
    cb(err.response ? err.response.data : err.toString());
  });
}
async function getOptions(cb) {
  try {
    const manufacturers = await Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/manufacturer");
    const categories = await Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/categories");
    cb(null, {
      manufacturers,
      categories
    });
  } catch (e) {
    cb(e);
  }
}
function deleteImage(id, type, image, cb) {
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().delete(`/images?id=${id}&type=${type}&image=${image}`).then(response => {
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
  console.log('specifications', JSON.stringify(specifications));
  formData.append("name", name);
  formData.append("description", description);
  formData.append("mainFeatures", mainFeatures);
  formData.append("specifications", specifications ? Object.keys(specifications).length > 0 ? JSON.stringify(specifications) : null : null);
  formData.append("category", category);
  formData.append("manufacturer", manufacturer);
  formData.append("video", machine.video);
  formData.append('folheto', files.folheto);
  formData.append('manual', files.manual);
  const machineFilesKeys = Object.keys(machineFiles);
  machineFilesKeys.forEach(mkey => {
    formData.append("machines", machineFiles[mkey]);
  });
  formData.append("sewingType", sewingFile);
  const prodRefFilesKeys = Object.keys(prodRefFiles);
  prodRefFilesKeys.forEach(prfkey => {
    formData.append("productReferences", prodRefFiles[prfkey]);
  });
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/machine/" + id, formData).then(response => {
    cb(null, response.data);
  }).catch(err => {
    cb(err.response ? err.response.data : err.toString());
  });
}
function addMachine(machine, machineFiles, sewingTypeFile, refProdFiles, files, cb) {
  const formData = new FormData();
  const machineFilesKeys = Object.keys(machineFiles);
  let hasError = [false, false, false];
  machineFilesKeys.forEach(mkey => {
    hasError[0] = !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_1__["validateImage"])(["png", "jpg", "jpeg", "svg", "gif", "webp"], 10000, machineFiles[mkey]);
    formData.append("machines", machineFiles[mkey]);
  });
  const refProdFilesKey = Object.keys(refProdFiles);
  refProdFilesKey.forEach(rfKey => {
    hasError[1] = !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_1__["validateImage"])(["png", "jpg", "jpeg", "svg", "gif", "webp"], 10000, refProdFiles[rfKey]);
    formData.append("productReferences", refProdFiles[rfKey]);
  });
  hasError[2] = !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_1__["validateImage"])(["png", "jpg", "jpeg", "svg", "gif", "webp"], 10000, sewingTypeFile);

  if (hasError.includes(true)) {
    return cb("Você precisa subir imagens png, jpg, jpeg, svg, gif, webp com no máximo 10MB");
  }

  const fieldError = Object(_utils_validate__WEBPACK_IMPORTED_MODULE_1__["fieldValidation"])({
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
    formData.append("specifications", JSON.stringify(machine.specifications));
    formData.append("video", machine.video);
    formData.append('folheto', files.folheto);
    formData.append('manual', files.manual);
    Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().post(`machine`, formData).then(response => {
      cb(null, response.data);
    }).catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
  } else {
    return cb(`${fieldError.message} ${fieldError.field}`);
  }
}
function deleteMachine(id, cb) {
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().delete(`/machine/${id}`).then(response => {
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
  Object.keys(object).forEach(function (key) {
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

/***/ 4:
/*!*********************************************!*\
  !*** multi ./pages/admin/machines/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gluz\Projects\web\multcostura\multcostura-web\pages\admin\machines\index.js */"./pages/admin/machines/index.js");


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

/***/ "reduxsauce":
/*!*****************************!*\
  !*** external "reduxsauce" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reduxsauce");

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
//# sourceMappingURL=machines.js.map