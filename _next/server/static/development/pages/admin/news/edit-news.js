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

/***/ "./pages/admin/news/edit-news.js":
/*!***************************************!*\
  !*** ./pages/admin/news/edit-news.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditNews; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/api */ "./src/api.js");
/* harmony import */ var _src_components_admin_news_EditGalleryImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/components/admin/news/EditGalleryImages */ "./src/components/admin/news/EditGalleryImages.jsx");
/* harmony import */ var _src_components_admin_news_EditGalleryVideos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/components/admin/news/EditGalleryVideos */ "./src/components/admin/news/EditGalleryVideos.jsx");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_templates_Admin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/components/templates/Admin */ "./src/components/templates/Admin.jsx");
/* harmony import */ var _src_components_admin_Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/components/admin/Sidebar */ "./src/components/admin/Sidebar.jsx");
/* harmony import */ var _src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../src/static/styled-components/base */ "./src/static/styled-components/base.js");
/* harmony import */ var _src_static_images_loading_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../src/static/images/loading.gif */ "./src/static/images/loading.gif");
/* harmony import */ var _src_static_images_loading_gif__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_static_images_loading_gif__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-input-mask */ "react-input-mask");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_12__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function EditNews({
  id
}) {
  const {
    0: news,
    1: setNews
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: images,
    1: setImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: videos,
    1: setVideos
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: dis,
    1: setDis
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: "",
    description: "",
    date: ""
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function async() {
      Object(_src_api__WEBPACK_IMPORTED_MODULE_3__["default"])().get("/news/" + id).then(response => {
        setNews(response.data);
        setForm(_objectSpread({}, response.data));
      }).catch(err => {
        setSnackBar({
          open: true,
          message: err.response ? err.response.data.toString() : err.toString()
        });
      });

      _getImages();
    }

    async();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (form.description.length >= 200) {
      setDis(true);
      setSnackBar({
        open: true,
        result: "error",
        message: "A descrição deve ter no máximo 200 caractéres"
      });
    } else {
      setDis(false);
    }
  }, [form.description]);

  function _getImages() {
    getImages(id, function (err, r) {
      if (err) {
        setSnackBar({
          result: "error",
          open: true,
          message: err.response ? err.response.data.toString() : err.toString()
        });
        return;
      }

      setVideos(r.gallery.videos);
      setImages(r.gallery.images);
    });
  }

  const {
    0: galleryOpen,
    1: setGalleryOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: snackBar,
    1: setSnackBar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    result: "success",
    open: false,
    message: ""
  });

  function handleChange(e) {
    setForm(_objectSpread({}, form, {
      [e.target.name]: e.target.value
    }));
  }

  function editNews() {
    Object(_src_api__WEBPACK_IMPORTED_MODULE_3__["default"])().put("/news/" + id, _objectSpread({}, form)).then(response => {
      setSnackBar({
        open: true,
        result: "success",
        message: "Notícia editada com sucesso!"
      });
    }).catch(err => {
      setSnackBar({
        open: true,
        result: "error",
        message: err.response ? err.response.data.toString() : err.toString()
      });
    });
  }

  function handleClose() {
    setSnackBar(_objectSpread({}, snackBar, {
      open: false
    }));
  }

  function deleteNews() {
    Object(_src_api__WEBPACK_IMPORTED_MODULE_3__["default"])().delete("/news/" + id).then(response => {
      setSnackBar({
        open: true,
        result: "success",
        message: `Notícia ${form.title} excluída com sucesso`
      });
      _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute("/admin/news");
    }).catch(err => {
      setSnackBar({
        result: "error",
        open: true,
        message: err.response ? err.response.data.toString() : err.toString()
      });
    });
  }

  function removeImage(index) {
    Object(_src_api__WEBPACK_IMPORTED_MODULE_3__["default"])({
      model: "news",
      type: "images",
      index
    }).delete("/gallery/" + id).then(response => {
      setSnackBar({
        open: true,
        result: "success",
        message: "A imagem foi excluida com sucesso!"
      });

      _getImages();
    }).catch(err => {
      setSnackBar({
        open: true,
        result: "error",
        message: err.response ? err.response.data.toString() : err.toString()
      });
    });
  }

  function removeVideo(index) {
    Object(_src_api__WEBPACK_IMPORTED_MODULE_3__["default"])({
      model: "news",
      type: "videos",
      index
    }).delete("/gallery/" + id).then(response => {
      setSnackBar({
        open: true,
        result: "success",
        message: "O video foi excluido com sucesso!"
      });

      _getImages();
    }).catch(err => {
      setSnackBar({
        open: true,
        result: "error",
        message: err.response ? err.response.data.toString() : err.toString()
      });
    });
  }

  function onSuccess() {
    _getImages();

    setSnackBar({
      open: true,
      result: "success",
      message: "Os arquivos foram enviados com sucesso"
    });
  }

  function onError(e) {
    setSnackBar({
      open: true,
      result: "error",
      message: e.toString()
    });
  }

  return __jsx(_src_components_templates_Admin__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    open: snackBar.open,
    autoHideDuration: 3500,
    onClose: handleClose
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    severity: snackBar.result
  }, snackBar.message)), __jsx(_src_components_admin_Sidebar__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_10__["Container"], null, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-around"
    }
  }, __jsx("h1", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(35,43,111)"
    }
  }, "Editar ", form.title)), __jsx(_src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_10__["Hr"], null), __jsx(Form, null, __jsx(_src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_10__["Input"], {
    placeholder: "T\xEDtulo",
    onChange: handleChange,
    name: "title",
    id: "title",
    value: form.title
  }), __jsx(_src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_10__["TextArea"], {
    placeholder: "Descri\xE7\xE3o",
    onChange: handleChange,
    name: "description",
    id: "description",
    value: form.description,
    rows: "5",
    style: {
      border: dis ? '2px solid red' : '',
      outline: 'none',
      resize: 'none'
    }
  }), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_12___default.a, {
    placeholder: "Data",
    className: "form-control",
    mask: "99/99/9999",
    name: "date",
    maskChar: null,
    onChange: handleChange,
    value: form.date
  }), __jsx(_src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    style: {
      opacity: dis ? ".8" : "1"
    },
    onClick: editNews,
    disabled: dis
  }, "Editar"), !galleryOpen ? __jsx(_src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    onClick: () => setGalleryOpen(true)
  }, "Atualizar Galeria de fotos e v\xEDdeos") : "", galleryOpen ? __jsx("div", null, __jsx(_src_components_admin_news_EditGalleryImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: images,
    removeImage: removeImage,
    onSuccess: onSuccess,
    onError: onError,
    headers: {
      model: "news",
      type: "images",
      id
    }
  }), " ", __jsx(_src_components_admin_news_EditGalleryVideos__WEBPACK_IMPORTED_MODULE_5__["default"], {
    images: videos,
    removeVideo: removeVideo,
    onSuccess: onSuccess,
    onError: onError,
    headers: {
      model: "news",
      type: "videos",
      id
    }
  }), " ") : "", __jsx(_src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    onClick: deleteNews
  }, "Excluir esta not\xEDcia"))));
}

function getImages(id, cb) {
  Object(_src_api__WEBPACK_IMPORTED_MODULE_3__["default"])({
    model: "news"
  }).get(`/news/${id}`).then(response => {
    cb(null, response.data);
  }).catch(err => {
    cb(err);
  });
}

EditNews.getInitialProps = ({
  query
}) => {
  return {
    id: query.id
  };
};

const Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "edit-news__Form",
  componentId: "sc-1pzc2ot-0"
})(["display:flex;flex-direction:column;margin:20px;justify-content:space-between;"]);

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

/***/ "./src/components/admin/news/EditGalleryImages.jsx":
/*!*********************************************************!*\
  !*** ./src/components/admin/news/EditGalleryImages.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditGalleryImages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-upload */ "rc-upload");
/* harmony import */ var rc_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GalleryImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GalleryImages */ "./src/components/admin/news/GalleryImages.jsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api */ "./src/api.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_loading_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../static/images/loading.gif */ "./src/static/images/loading.gif");
/* harmony import */ var _static_images_loading_gif__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_loading_gif__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/images */ "./src/utils/images.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_images__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function EditGalleryImages({
  images,
  removeImage,
  onSuccess,
  onError,
  headers
}) {
  const {
    0: uploading,
    1: setUp
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onDrop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async acceptedFiles => {
    setUp(true);
    let error = false;

    for (let file in acceptedFiles) {
      if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_9__["validateImage"])(["jpg","JPG","png","webp","svg","jpeg"], 10000, acceptedFiles[file])) {
        const formData = new FormData();
        formData.append("img", acceptedFiles[file]);
        await Object(_api__WEBPACK_IMPORTED_MODULE_5__["default"])(_objectSpread({}, headers)).post("/gallery", formData);
        error = false;
        onSuccess();
      } else {
        onError(`Extensão do arquivo ${acceptedFiles[file].name} é inválido. Extensões permitidas ${["jpg","JPG","png","webp","svg","jpeg"].toString()}, com no máximo 10MB`);
        error = true;
      }
    }

    setUp(false);
  }, []);
  const {
    getRootProps,
    getInputProps
  } = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_3__["useDropzone"])({
    onDrop
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Row, null, __jsx("h3", {
    className: "main-title",
    style: {
      color: "rgb(129, 22, 27)"
    }
  }, "Galeria de Imagens")), __jsx(Row, null, __jsx(_GalleryImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: images,
    removeImage: removeImage,
    uploading: uploading
  })), __jsx(Row, null, uploading ? __jsx(Loading, {
    src: _static_images_loading_gif__WEBPACK_IMPORTED_MODULE_8___default.a
  }) : __jsx(LabelInput, getRootProps(), __jsx("input", getInputProps()), __jsx("p", null, "Arraste e solte os arquivos ou clique aqui para enviar as imagens"))));
}
const Loading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "EditGalleryImages__Loading",
  componentId: "ql1sqt-0"
})(["width:32px;height:32px;display:block;margin:auto;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EditGalleryImages__Row",
  componentId: "ql1sqt-1"
})(["display:flex;flex:1;flex-direction:row;justify-content:center;padding:15px;"]);
const LabelInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EditGalleryImages__LabelInput",
  componentId: "ql1sqt-2"
})(["display:flex;flex-direction:column;color:grey;align-items:center;width:100%;border:3px dotted grey;cursor:pointer;padding:50px;text-align:center;:hover{border:3px dotted lightblue;}"]);

/***/ }),

/***/ "./src/components/admin/news/EditGalleryVideos.jsx":
/*!*********************************************************!*\
  !*** ./src/components/admin/news/EditGalleryVideos.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditGalleryVideos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-upload */ "rc-upload");
/* harmony import */ var rc_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GalleryVideos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GalleryVideos */ "./src/components/admin/news/GalleryVideos.jsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api */ "./src/api.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_loading_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../static/images/loading.gif */ "./src/static/images/loading.gif");
/* harmony import */ var _static_images_loading_gif__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_loading_gif__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/images */ "./src/utils/images.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_images__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function EditGalleryVideos({
  images,
  removeVideo,
  onSuccess,
  onError,
  headers
}) {
  const {
    0: uploading,
    1: setUp
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onDrop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async acceptedFiles => {
    setUp(true);

    for (let file in acceptedFiles) {
      if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_9__["validateImage"])(["mp4","ogg","avi","gif"], 10000, acceptedFiles[file])) {
        const formData = new FormData();

        if (acceptedFiles[file].type.split("/")[0] != "video") {
          onError("Formato de arquivo inválido - " + acceptedFiles[file].name);
          setUp(false);
        } else {
          formData.append("img", acceptedFiles[file]);
        }

        await Object(_api__WEBPACK_IMPORTED_MODULE_5__["default"])(_objectSpread({}, headers)).post("/gallery", formData);
        onSuccess();
      } else {
        onError(`Extensão do arquivo ${acceptedFiles[file].name} é inválido. Extensões permitidas ${["mp4","ogg","avi","gif"].toString()}`);
      }
    }

    setUp(false);
  }, []);
  const {
    getRootProps,
    getInputProps
  } = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_3__["useDropzone"])({
    onDrop
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Row, null, __jsx("h3", {
    className: "main-title",
    style: {
      color: "rgb(129, 22, 27)"
    }
  }, "Galeria de V\xEDdeos")), __jsx(Row, null, __jsx(_GalleryVideos__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: images,
    removeVideo: removeVideo,
    uploading: uploading
  })), __jsx(Row, null, uploading ? __jsx(Loading, {
    src: _static_images_loading_gif__WEBPACK_IMPORTED_MODULE_8___default.a
  }) : __jsx(LabelInput, getRootProps(), __jsx("input", getInputProps()), __jsx("p", null, "Arraste e solte os arquivos ou clique aqui para enviar os v\xEDdeos"))));
}
const Loading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "EditGalleryVideos__Loading",
  componentId: "dsvpm5-0"
})(["width:32px;height:32px;display:block;margin:auto;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EditGalleryVideos__Row",
  componentId: "dsvpm5-1"
})(["display:flex;flex:1;flex-direction:row;justify-content:center;padding:15px;"]);
const LabelInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EditGalleryVideos__LabelInput",
  componentId: "dsvpm5-2"
})(["display:flex;flex-direction:column;color:grey;align-items:center;width:100%;border:3px dotted grey;cursor:pointer;padding:50px;text-align:center;:hover{border:3px dotted lightblue;}"]);

/***/ }),

/***/ "./src/components/admin/news/GalleryImages.jsx":
/*!*****************************************************!*\
  !*** ./src/components/admin/news/GalleryImages.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryImages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function GalleryImages({
  images,
  removeImage,
  uploading
}) {
  return __jsx(ImagesContainer, null, !images.length ? __jsx("p", null, "Nenhuma imagem foi enviada") : images.map((img, i) => __jsx(Image, {
    src: img,
    width: "150px",
    height: "150px",
    key: i,
    onClick: () => removeImage(i)
  }, __jsx("p", null, "Clique aqui para excluir"))));
}
const Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "GalleryImages__Image",
  componentId: "sc-1lu4v1c-0"
})(["display:flex;align-items:center;justify-content:center;background-image:url('", "');background-size:cover;background-position:center;background-repeat:no-repeat;width:", ";height:", ";margin:10px;transition:0.4s;position:relative;cursor:pointer;p{opacity:0;transition:.2s;text-align:center;}:hover{opacity:.8;p{opacity:1;color:black;background:white;padding:5px;}}"], props => props.src, props => props.width, props => props.height);
const ImagesContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "GalleryImages__ImagesContainer",
  componentId: "sc-1lu4v1c-1"
})(["display:flex;max-height:400px;overflow:auto;height:400px;flex-wrap:wrap;"]);

/***/ }),

/***/ "./src/components/admin/news/GalleryVideos.jsx":
/*!*****************************************************!*\
  !*** ./src/components/admin/news/GalleryVideos.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryVideos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function GalleryVideos({
  images,
  removeVideo,
  uploading
}) {
  return __jsx(VideosContainer, null, !images.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, uploading ? __jsx("p", null, "Enviando arquivos, aguarde...") : __jsx("p", null, "Nenhum v\xEDdeo foi enviado")) : images.map((vid, i) => __jsx(VideoContainer, null, " ", __jsx("p", {
    style: {
      position: "absolute",
      top: "100px",
      background: "black",
      color: "white",
      padding: "10px",
      zIndex: "9",
      cursor: "pointer"
    },
    onClick: () => removeVideo(i)
  }, "Clique aqui para excluir"), __jsx(Video, {
    width: "220px",
    height: "220px",
    src: vid,
    key: i,
    controls: true
  }))));
}
const Video = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.video.withConfig({
  displayName: "GalleryVideos__Video",
  componentId: "sc-2b81zu-0"
})(["    position:relative;background-image:url('", "');background-size:cover;background-position:center;background-repeat:no-repeat;width:", ";height:", ";margin:10px;transition:0.4s;position:relative;cursor:pointer;:hover{opacity:.8;}"], props => props.src, props => props.width, props => props.height);
const VideoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "GalleryVideos__VideoContainer",
  componentId: "sc-2b81zu-1"
})(["position:relative;display:flex;height:220px;justify-content:center;p{opacity:0;transition:0.2s;text-align:center;position:absolute;top:-10px;}:hover{p{opacity:1;color:black;background:white;padding:5px;}}}"]);
const VideosContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "GalleryVideos__VideosContainer",
  componentId: "sc-2b81zu-2"
})(["display:flex;max-height:400px;overflow:auto;height:400px;flex-wrap:wrap;"]);

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

/***/ "./src/static/images/loading.gif":
/*!***************************************!*\
  !*** ./src/static/images/loading.gif ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/loading-a5be3183a6fc9f33fd260dc0b0ad5a9f.gif";

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

/***/ 7:
/*!*********************************************!*\
  !*** multi ./pages/admin/news/edit-news.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gluz\Projects\web\multcostura\multcostura-web\pages\admin\news\edit-news.js */"./pages/admin/news/edit-news.js");


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

/***/ "rc-upload":
/*!****************************!*\
  !*** external "rc-upload" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-upload");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "react-input-mask":
/*!***********************************!*\
  !*** external "react-input-mask" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-input-mask");

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
//# sourceMappingURL=edit-news.js.map