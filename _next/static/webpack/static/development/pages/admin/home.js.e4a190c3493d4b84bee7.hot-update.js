webpackHotUpdate("static\\development\\pages\\admin\\home.js",{

/***/ "./src/components/admin/institutional/Home.jsx":
/*!*****************************************************!*\
  !*** ./src/components/admin/institutional/Home.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeBanner; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _templates_Admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../templates/Admin */ "./src/components/templates/Admin.jsx");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Sidebar */ "./src/components/admin/Sidebar.jsx");
/* harmony import */ var _utils_Slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/Slider */ "./src/components/utils/Slider.jsx");
/* harmony import */ var _static_styled_components_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../static/styled-components/base */ "./src/static/styled-components/base.js");
/* harmony import */ var _utils_FileInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/FileInput */ "./src/components/utils/FileInput.jsx");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/images */ "./src/utils/images.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_images__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_banner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/banner */ "./src/utils/banner.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../static/images/image-404.jpg */ "./src/static/images/image-404.jpg");
/* harmony import */ var _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_16__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















function HomeBanner() {
  var imageMessageError = "Extens\xE3o do arquivo enviado \xE9 inv\xE1lido. Extens\xF5es permitidas ".concat(["jpg","JPG","png","webp","svg","jpeg"].toString(), ", com no m\xE1ximo 10MB");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      images = _useState2[0],
      setImages = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      inputs = _useState3[0],
      setInputs = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      files = _useState4[0],
      setFiles = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      slideControl = _useState5[0],
      setSlideControl = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    result: "success",
    open: false,
    message: ""
  }),
      snackBar = _useState6[0],
      setSnackBar = _useState6[1];

  function _handleChange(e, inputIndex) {
    changeBannerImage(e.target.files[0], inputIndex);
  }

  function addSlide() {
    var inputIndex = images.length;
    setImages([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(images), [{
      image: _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
      pos: inputIndex,
      name: ""
    }]));
    setInputs([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(inputs), [__jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "file",
      handleChange: function handleChange(e) {
        return _handleChange(e, inputIndex);
      },
      labelInputFile: "Enviar Imagem",
      maxWidth: "50%",
      labelHeight: "50px",
      labelWidth: "150px",
      id: inputIndex,
      key: inputIndex
    })]));
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
    if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_12__["validateImage"])(["jpg","JPG","png","webp","svg","jpeg"], 10000, file)) {
      var newFile = Object(_utils_images__WEBPACK_IMPORTED_MODULE_12__["changeFileName"])(file, Math.round(Math.random() * 100000 + 1) + "" + Date.now());
      setImages(function (images) {
        return images.map(function (image, ind) {
          if (image.pos == index) {
            return file ? {
              image: URL.createObjectURL(file),
              pos: index,
              name: newFile.name
            } : {
              image: _static_images_image_404_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
              pos: index,
              name: file.name
            };
          }

          return image;
        });
      });
      var _files = files;
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
    setImages(function (images) {
      images.splice(id, 1);
      return images;
    });
    setInputs(function (inputs) {
      inputs.splice(id, 1);
      return inputs;
    });
    setFiles(function (files) {
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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setName(next_router__WEBPACK_IMPORTED_MODULE_4___default.a.query.name);

    function asyncFunc() {
      Object(_utils_banner__WEBPACK_IMPORTED_MODULE_13__["getSlide"])("institutional", "homeBanners", function (err, response) {
        if (err) {
          setSnackBar({
            open: true,
            message: err,
            result: "error"
          });
          return;
        }

        var Inputs = [];
        var Files = [];

        var _loop = function _loop(a) {
          Inputs.push(__jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
            type: "file",
            handleChange: function handleChange(e) {
              return _handleChange(e, a);
            },
            labelInputFile: "Enviar Imagem",
            maxWidth: "50%",
            labelHeight: "50px",
            labelWidth: "150px",
            id: a,
            key: a
          }));
          Files.push(a + 1);
        };

        for (var a = 0; a < response.length; a++) {
          _loop(a);
        }

        setInputs(Inputs);
        setFiles(Files);
        setImages(response.map(function (banner) {
          return _objectSpread({}, banner, {
            name: banner.name
          });
        }));
      });
    }

    asyncFunc();
    return function () {};
  }, []);

  function makeBannerFirst() {
    var ctrl = slideControl - 1;
    var currentBanner = images[ctrl];
    var firstBanner = images[0];
    var currentFile = files[ctrl];
    var firstFile = files[0];
    setImages(function (images) {
      var newImages = images;
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
    setFiles(function (files) {
      var newFiles = files;
      newFiles[0] = currentFile;
      newFiles[ctrl] = firstFile;
      return newFiles;
    });
    setSlideControl(1);
  }

  function _saveSlide() {
    var hasEmptyFile = false;
    files.forEach(function (file) {
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
      Object(_utils_banner__WEBPACK_IMPORTED_MODULE_13__["saveSlide"])(null, images, files, "homeBanners", function (err, response) {
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: snackBar.open,
    autoHideDuration: 1500,
    onClose: handleClose
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__["default"], {
    severity: snackBar.result
  }, snackBar.message)), __jsx(Column, null, __jsx("div", {
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
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faArrowLeft"],
    style: {
      color: "white"
    }
  }), __jsx("span", {
    style: {
      color: "white"
    }
  }, "Voltar")), __jsx("style", null, "  \n\n            .arrow-back {\n              transition: .5s;\n            }\n\n            .arrow-back:hover {\n              cursor: pointer;\n              opacity: .8;\n            }\n          "), __jsx(Row, {
    align: "center"
  }, __jsx(Column, {
    style: {
      width: "100%"
    }
  }, images.length == 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    style: {
      height: "400px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("p", null, "Voc\xEA ainda n\xE3o adicionou nenhum banner a lista de banners."), __jsx("p", null, "Clique no bot\xE3o", " ", __jsx("strong", null, "\"Adicionar banner a lista\""), ".")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, slideControl - 1 != 0 ? __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
    onClick: function onClick() {
      setSlideControl(function (sl) {
        if (sl == 1) return 1;
        return sl - 1;
      });
    }
  }), __jsx(ArrowRight, {
    onClick: function onClick() {
      setSlideControl(function (sl) {
        if (sl == images.length) return 1;
        return sl + 1;
      });
    }
  }), __jsx(_utils_Slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
    slideCtrl: slideControl,
    images: images.map(function (image) {
      return image.image;
    }),
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
  }, images.map(function (image, id) {
    return __jsx(ThumbnailBanner, {
      style: {
        border: "".concat(id == slideControl - 1 ? "2px solid #960d03" : "2px solid transparent")
      },
      onClick: function onClick() {
        setSlideControl(parseInt(id + 1));
      }
    }, __jsx("img", {
      src: image.image,
      style: {
        width: "100%"
      }
    }));
  })), __jsx("h2", {
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
  }, inputs[slideControl - 1], " ", images.length != 0 ? __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    style: {
      width: "30%"
    },
    onClick: function onClick() {
      return removeSlide(slideControl - 1);
    }
  }, "Remover banner") : ""), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    style: {
      width: "50%",
      margin: "15px auto",
      display: "block"
    },
    onClick: addSlide
  }, "Adicionar banner a lista"), images.length != 0 ? __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
  }, "As imagens devem ter 1920x400"))))));
}
var Column = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__Column",
  componentId: "sc-1ji1hcl-0"
})(["display:flex;flex-direction:column;"]);
var Row = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__Row",
  componentId: "sc-1ji1hcl-1"
})(["display:flex;flex-direction:row;justify-content:", ";width:", ";"], function (props) {
  return props.align;
}, function (props) {
  return props.w;
});
var ThumbnailBanner = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__ThumbnailBanner",
  componentId: "sc-1ji1hcl-2"
})(["width:100px;display:flex;margin-right:5px;align-items:center;transition:0.2s;cursor:pointer;:hover{opacity:0.8;}"]);
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__ImageContainer",
  componentId: "sc-1ji1hcl-3"
})(["img{max-width:120px;}"]);
var ArrowLeft = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Home__ArrowLeft",
  componentId: "sc-1ji1hcl-4"
})([":hover{opacity:0.8;}transition:0.2s;position:absolute;z-index:9;left:0;margin-left:40px;cursor:pointer;top:50%;margin-top:-10px;border-top:30px solid transparent;border-bottom:30px solid transparent;border-right:30px solid #960d03;"]);
var ArrowRight = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Home__ArrowRight",
  componentId: "sc-1ji1hcl-5"
})([":hover{opacity:0.8;}transition:0.2s;position:absolute;z-index:9;right:0;margin-right:40px;cursor:pointer;width:0;height:0;top:50%;margin-top:-10px;border-top:30px solid transparent;border-bottom:30px solid transparent;border-left:30px solid #960d03;"]);

/***/ })

})
//# sourceMappingURL=home.js.e4a190c3493d4b84bee7.hot-update.js.map