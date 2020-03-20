webpackHotUpdate("static\\development\\pages\\admin\\home.js",{

/***/ "./src/components/admin/institutional/BannerFixed.jsx":
/*!************************************************************!*\
  !*** ./src/components/admin/institutional/BannerFixed.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BannerFixed; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _utils_FileInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/FileInput */ "./src/components/utils/FileInput.jsx");
/* harmony import */ var _static_styled_components_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../static/styled-components/base */ "./src/static/styled-components/base.js");
/* harmony import */ var _utils_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/banner */ "./src/utils/banner.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/images */ "./src/utils/images.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_images__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../static/images/image-404.jpg */ "./src/static/images/image-404.jpg");
/* harmony import */ var _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function BannerFixed(_ref) {
  var type = _ref.type;
  var imageMessageError = "Extens\xE3o do arquivo enviado \xE9 inv\xE1lido. Extens\xF5es permitidas ".concat(["jpg","JPG","png","webp","svg","jpeg"].toString(), ", com no m\xE1ximo 10MB");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_9___default.a),
      banner = _useState[0],
      setBanner = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      bannerBase = _useState2[0],
      setBannerBase = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      file = _useState3[0],
      setFile = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    result: "success",
    open: false,
    message: ""
  }),
      snackBar = _useState4[0],
      setSnackBar = _useState4[1];

  function handleChange(e) {
    if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["validateImage"])(["jpg","JPG","png","webp","svg","jpeg"], 10000, e.target.files[0])) {
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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function asynFunc() {
      Object(_utils_banner__WEBPACK_IMPORTED_MODULE_7__["getBannerFixed"])(type, function (err, d) {
        if (err) {
          setSnackbar({
            open: true,
            result: "error",
            message: err
          });
          return;
        }

        setBannerBase(d ? d : null);
        setBanner(d ? d : _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_9___default.a);
      });
    }

    asynFunc();
    return function () {};
  }, []);

  function saveBanner() {
    Object(_utils_banner__WEBPACK_IMPORTED_MODULE_7__["saveBannerFixed"])(type, file, function (err, r) {
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
    Object(_utils_banner__WEBPACK_IMPORTED_MODULE_7__["deleteBannerFixed"])(type, function (err, r) {
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
      setBanner(_static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_9___default.a);
    });
  }

  return __jsx(Column, null, __jsx("div", {
    onClick: function onClick() {
      return location.reload();
    },
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
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faArrowLeft"],
    style: {
      color: "white"
    }
  }), __jsx("span", {
    style: {
      color: "white"
    }
  }, "Voltar")), __jsx("style", null, "  \n\n            .arrow-back {\n              transition: .5s;\n            }\n\n            .arrow-back:hover {\n              cursor: pointer;\n              opacity: .8;\n            }\n          "), __jsx(Row, null, __jsx(Wrapper, null, banner != _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_9___default.a ? __jsx(BtnDelete, {
    onClick: deleteBanner
  }, "Excluir banner") : "", __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: snackBar.open,
    autoHideDuration: 2500,
    onClose: handleClose
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], {
    severity: snackBar.result
  }, snackBar.message)), __jsx(Slide, {
    src: banner
  }))), __jsx(Row, null, __jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleChange: handleChange,
    labelInputFile: "Enviar imagem",
    id: "bannerFixed",
    name: "bannerFixed",
    labelWidth: "200px",
    labelHeight: "80px",
    maxWidth: "100px",
    file: file,
    cleanFileInput: function cleanFileInput() {
      setFile(null);
      setBanner(bannerBase ? bannerBase : _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_9___default.a);
    }
  })), __jsx(Row, {
    style: {
      justifyContent: "center"
    }
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    style: {
      width: "50%"
    },
    onClick: function onClick() {
      return saveBanner();
    }
  }, "Salvar")));
}
var BtnDelete = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "BannerFixed__BtnDelete",
  componentId: "sc-1dgf4pc-0"
})(["background:#960d03;padding:5px;position:absolute;z-index:9;left:10px;top:0;cursor:pointer;color:white;text-transform:uppercase;font-size:0.8rem;border-radius:5px;transition:0.3s;:hover{opacity:0.9;padding:5px 6px;}"]);
var Column = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "BannerFixed__Column",
  componentId: "sc-1dgf4pc-1"
})(["display:flex;flex-direction:column;"]);
var Row = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "BannerFixed__Row",
  componentId: "sc-1dgf4pc-2"
})(["display:flex;justify-content:center;"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "BannerFixed__Wrapper",
  componentId: "sc-1dgf4pc-3"
})(["width:100%;height:", ";overflow:hidden;display:-webkit-box;position:relative;height:400px;"], function (props) {
  return props.height;
});
var Slide = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "BannerFixed__Slide",
  componentId: "sc-1dgf4pc-4"
})(["background-image:url('", "');width:100%;background-position:center;background-repeat:no-repeat;width:", ";height:", ";transform:translateX(", "px);transition:transform 0.4s ease-in-out;position:relative;"], function (props) {
  return props.src;
}, function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.translate;
});

/***/ })

})
//# sourceMappingURL=home.js.f272630e07dda162014e.hot-update.js.map