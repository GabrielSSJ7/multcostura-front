webpackHotUpdate("static\\development\\pages\\admin\\machines\\new-machine.js",{

/***/ "./src/components/admin/machines/AddMachine.jsx":
/*!******************************************************!*\
  !*** ./src/components/admin/machines/AddMachine.jsx ***!
  \******************************************************/
/*! exports provided: default, ImageContainer, Row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../static/styled-components/base */ "./src/static/styled-components/base.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _utils_machines__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/machines */ "./src/utils/machines.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/images */ "./src/utils/images.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_images__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_FileInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/FileInput */ "./src/components/utils/FileInput.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function AddMachine() {
  var imageMessageError = "Extens\xE3o do arquivo enviado \xE9 inv\xE1lido. Extens\xF5es permitidas ".concat(["jpg","JPG","png","webp","svg","jpeg"].toString(), ", com no m\xE1ximo 10MB");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      manufacturer = _useState2[0],
      setManufacturer = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      description = _useState3[0],
      setDescription = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      mainFeatures = _useState4[0],
      setMainFeatures = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      category = _useState5[0],
      setCategory = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      specifications = _useState6[0],
      setSpecifications = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      video = _useState7[0],
      setVideo = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    result: "success",
    open: false,
    message: ""
  }),
      snackBar = _useState8[0],
      setSnackBar = _useState8[1];

  function handleClose() {
    setSnackBar(_objectSpread({}, snackBar, {
      open: false
    }));
  }

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    categories: [],
    manufacturers: []
  }),
      categoriesManufacturers = _useState9[0],
      setCategoriesManufacturers = _useState9[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function asyncFunc() {
      Object(_utils_machines__WEBPACK_IMPORTED_MODULE_8__["getOptions"])(function (err, response) {
        if (err) {
          setSnackBar(_objectSpread({}, snackBar, {
            open: false
          }));
          return;
        }

        setCategoriesManufacturers({
          manufacturers: response.manufacturers.data,
          categories: response.categories.data
        });
      });
    }

    asyncFunc();
  }, []);

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    machineFile1: null,
    machineFile2: null,
    machineFile3: null,
    machineFile4: null,
    machineFile5: null
  }),
      machineFiles = _useState10[0],
      setMachineFiles = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    refProdFile1: null,
    refProdFile2: null,
    refProdFile3: null,
    refProdFile4: null,
    refProdFile5: null
  }),
      refProdFiles = _useState11[0],
      setRefProdFiles = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      folheto = _useState12[0],
      setFolheto = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      manual = _useState13[0],
      setManual = _useState13[1];

  function folhetoChange(e) {
    if (e) {
      var type = e.target.files[0].name.split(".");

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
      var type = e.target.files[0].name.split(".");

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

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      sewingTypeFile = _useState14[0],
      setSewingTypeFile = _useState14[1];

  function machineHandleChange(e) {
    if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_9__["validateImage"])(["jpg","JPG","png","webp","svg","jpeg"], 10000, e.target.files[0])) {
      var newName = parseInt(e.target.name[e.target.name.length - 1]) - 1;
      setMachineFiles(_objectSpread({}, machineFiles, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, Object(_utils_images__WEBPACK_IMPORTED_MODULE_9__["changeFileName"])(e.target.files[0], newName))));
    } else {
      setSnackBar({
        open: true,
        result: 'error',
        message: imageMessageError
      });
    }
  }

  function machineCleanFileInput(name) {
    setMachineFiles(_objectSpread({}, machineFiles, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, null)));
  }

  function refProdHandleChange(e) {
    if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_9__["validateImage"])(["jpg","JPG","png","webp","svg","jpeg"], 10000, e.target.files[0])) {
      var newName = parseInt(e.target.name[e.target.name.length - 1]) - 1;
      setRefProdFiles(_objectSpread({}, refProdFiles, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, Object(_utils_images__WEBPACK_IMPORTED_MODULE_9__["changeFileName"])(e.target.files[0], newName))));
    } else {
      setSnackBar({
        open: true,
        result: 'error',
        message: imageMessageError
      });
    }
  }

  function refProdCleanFileInput(name) {
    setRefProdFiles(_objectSpread({}, refProdFiles, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, null)));
  }

  function sewingTypeHandleChange(e) {
    if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_9__["validateImage"])(["jpg","JPG","png","webp","svg","jpeg"], 10000, e.target.files[0])) {
      var newName = parseInt(e.target.name[e.target.name.length - 1]) - 1;
      setSewingTypeFile(Object(_utils_images__WEBPACK_IMPORTED_MODULE_9__["changeFileName"])(e.target.files[0], newName));
    } else {
      setSnackBar({
        open: true,
        result: 'error',
        message: imageMessageError
      });
    }
  }

  function handleChangeVideo(e) {
    var YTBaseURL = "https://www.youtube.com/embed/";

    if (getParam(e.target.value) == 0) {
      setVideo(e.target.value);
      setSnackBar({
        open: true,
        result: 'error',
        message: 'O endereço não é uma URL válida do YouTube'
      });
    } else {
      setVideo(YTBaseURL + getParam(e.target.value));
    }
  }

  function getParam(url) {
    var results = new RegExp('[\?&]' + 'v' + '=([^&#]*)').exec(url);

    if (results == null) {
      return 0;
    }

    return results[1] || 0;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "main-title",
    style: {
      color: "rgb(129, 22, 27)"
    }
  }, "Adicionar nova m\xE1quina"), __jsx("div", null, __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: snackBar.open,
    autoHideDuration: 3500,
    onClose: handleClose
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], {
    severity: snackBar.result
  }, snackBar.message)), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    placeholder: "Nome",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    value: name
  }), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    placeholder: "Subt\xEDtulo",
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    },
    value: description
  }), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["TextArea"], {
    placeholder: "Caracter\xEDsticas",
    onChange: function onChange(e) {
      return setMainFeatures(e.target.value);
    },
    value: mainFeatures,
    rows: "5"
  }), __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)"
    }
  }, "Categoria e fabricante"), __jsx(Row, null, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    value: category,
    onChange: function onChange(e) {
      return setCategory(e.target.value);
    }
  }, __jsx("option", {
    value: ""
  }, "Escolha uma categoria"), categoriesManufacturers.categories.map(function (category) {
    return __jsx("option", {
      value: category.id
    }, category.name);
  })), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    value: manufacturer,
    onChange: function onChange(e) {
      return setManufacturer(e.target.value);
    }
  }, __jsx("option", {
    value: ""
  }, "Escolha um fabricante"), categoriesManufacturers.manufacturers.map(function (manufacturer) {
    return __jsx("option", {
      value: manufacturer.id
    }, manufacturer.name);
  }))), __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)"
    }
  }, "Especifica\xE7\xF5es t\xE9cnicas"), __jsx(Row, null, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    style: {
      flex: 2
    },
    placeholder: "Modelo",
    value: specifications.modelo,
    onChange: function onChange(e) {
      return setSpecifications(_objectSpread({}, specifications, {
        modelo: e.target.value
      }));
    }
  }), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    placeholder: "Altura do cal\xE7ador (mm)",
    style: {
      flex: 1
    },
    value: specifications.alturaCalcador,
    onChange: function onChange(e) {
      return setSpecifications(_objectSpread({}, specifications, {
        alturaCalcador: e.target.value
      }));
    }
  }), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    style: {
      flex: 1
    },
    placeholder: "Comprimento do ponto (mm)",
    value: specifications.comprimentoDoPonto,
    onChange: function onChange(e) {
      return setSpecifications(_objectSpread({}, specifications, {
        comprimentoDoPonto: e.target.value
      }));
    }
  })), __jsx(Row, null, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    style: {
      flex: 1
    },
    placeholder: "Corte de linha",
    value: specifications.corteDeLinha,
    onChange: function onChange(e) {
      return setSpecifications(_objectSpread({}, specifications, {
        corteDeLinha: e.target.value
      }));
    }
  }), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    style: {
      flex: 1
    },
    placeholder: "Velocidade m\xE1xima(PPM)",
    value: specifications.velocidadeMaxima,
    onChange: function onChange(e) {
      return setSpecifications(_objectSpread({}, specifications, {
        velocidadeMaxima: e.target.value
      }));
    }
  }), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    style: {
      flex: 3
    },
    placeholder: "Motor",
    value: specifications.motor,
    onChange: function onChange(e) {
      return setSpecifications(_objectSpread({}, specifications, {
        motor: e.target.value
      }));
    }
  })), __jsx(Row, null, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    style: {
      flex: 1
    },
    value: specifications.numeroDeAgulhas,
    placeholder: "N\xFAmero de agulhas",
    onChange: function onChange(e) {
      return setSpecifications(_objectSpread({}, specifications, {
        numeroDeAgulhas: e.target.value
      }));
    }
  }), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    style: {
      flex: 1
    },
    placeholder: "Painel touch screen",
    value: specifications.painelTouchScreen,
    onChange: function onChange(e) {
      return setSpecifications(_objectSpread({}, specifications, {
        painelTouchScreen: e.target.value
      }));
    }
  }), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    style: {
      flex: 1
    },
    placeholder: "Tipo de agulha",
    value: specifications.tipoDeAgulha,
    onChange: function onChange(e) {
      return setSpecifications(_objectSpread({}, specifications, {
        tipoDeAgulha: e.target.value
      }));
    }
  })), __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)"
    }
  }, "Fotos do produto"), __jsx(Row, {
    style: {
      margin: "30px 0 ",
      justifyContent: "center"
    }
  }, __jsx(ImageContainer, {
    maxWidth: "300px"
  }, __jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleChange: machineHandleChange,
    labelInputFile: "Imagem principal",
    id: "machineFile1",
    name: "machineFile1",
    labelWidth: "250px",
    labelHeight: "250px",
    maxWidth: "250px",
    file: machineFiles.machineFile1,
    cleanFileInput: function cleanFileInput() {
      return machineCleanFileInput("machineFile1");
    }
  }))), __jsx(Row, {
    style: {
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, __jsx(ImageContainer, {
    maxWidth: "200px"
  }, __jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleChange: machineHandleChange,
    labelInputFile: "Imagem 2",
    id: "machineFile2",
    name: "machineFile2",
    labelWidth: "150px",
    labelHeight: "150px",
    maxWidth: "150px",
    file: machineFiles.machineFile2,
    cleanFileInput: function cleanFileInput() {
      return machineCleanFileInput("machineFile2");
    }
  })), __jsx(ImageContainer, {
    maxWidth: "200px"
  }, __jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleChange: machineHandleChange,
    labelInputFile: "Imagem 3",
    id: "machineFile3",
    name: "machineFile3",
    labelWidth: "150px",
    labelHeight: "150px",
    maxWidth: "150px",
    file: machineFiles.machineFile3,
    cleanFileInput: function cleanFileInput() {
      return machineCleanFileInput("machineFile3");
    }
  })), __jsx(ImageContainer, {
    maxWidth: "200px"
  }, __jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleChange: machineHandleChange,
    labelInputFile: "Imagem 4",
    id: "machineFile4",
    name: "machineFile4",
    labelWidth: "150px",
    labelHeight: "150px",
    maxWidth: "150px",
    file: machineFiles.machineFile4,
    cleanFileInput: function cleanFileInput() {
      return machineCleanFileInput("machineFile4");
    }
  })), __jsx(ImageContainer, {
    maxWidth: "200px"
  }, __jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleChange: machineHandleChange,
    labelInputFile: "Imagem 5",
    id: "machineFile5",
    name: "machineFile5",
    labelWidth: "150px",
    labelHeight: "150px",
    maxWidth: "150px",
    file: machineFiles.machineFile5,
    cleanFileInput: function cleanFileInput() {
      return machineCleanFileInput("machineFile5");
    }
  }))), __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)",
      marginTop: "15px"
    }
  }, "Exemplo do produto produzido pela m\xE1quina"), __jsx(Row, {
    style: {
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, __jsx(ImageContainer, {
    maxWidth: "200px"
  }, __jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleChange: refProdHandleChange,
    labelInputFile: "Imagem 1",
    id: "refProdFiles1",
    name: "refProdFiles1",
    labelWidth: "100px",
    labelHeight: "100px",
    maxWidth: "100px",
    file: refProdFiles.refProdFiles1,
    cleanFileInput: function cleanFileInput() {
      return refProdCleanFileInput("refProdFiles1");
    }
  })), __jsx(ImageContainer, {
    maxWidth: "200px"
  }, __jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleChange: refProdHandleChange,
    labelInputFile: "Imagem 2",
    id: "refProdFiles2",
    name: "refProdFiles2",
    labelWidth: "100px",
    labelHeight: "100px",
    maxWidth: "100px",
    file: refProdFiles.refProdFiles2,
    cleanFileInput: function cleanFileInput() {
      return refProdCleanFileInput("refProdFiles2");
    }
  })), __jsx(ImageContainer, {
    maxWidth: "200px"
  }, __jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleChange: refProdHandleChange,
    labelInputFile: "Imagem 3",
    id: "refProdFiles3",
    name: "refProdFiles3",
    labelWidth: "100px",
    labelHeight: "100px",
    maxWidth: "100px",
    file: refProdFiles.refProdFiles3,
    cleanFileInput: function cleanFileInput() {
      return refProdCleanFileInput("refProdFiles3");
    }
  })), __jsx(ImageContainer, {
    maxWidth: "200px"
  }, __jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleChange: refProdHandleChange,
    labelInputFile: "Imagem 4",
    id: "refProdFiles4",
    name: "refProdFiles4",
    labelWidth: "100px",
    labelHeight: "100px",
    maxWidth: "100px",
    file: refProdFiles.refProdFiles4,
    cleanFileInput: function cleanFileInput() {
      return refProdCleanFileInput("refProdFiles4");
    }
  }))), __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)",
      marginTop: "15px"
    }
  }, "Tipo de ponto"), __jsx(Row, {
    style: {
      justifyContent: "center"
    }
  }, __jsx(_utils_FileInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleChange: sewingTypeHandleChange,
    labelInputFile: "Imagem \xFAnica",
    id: "sewingTypeFile",
    name: "sewingTypeFile",
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    file: sewingTypeFile,
    cleanFileInput: function cleanFileInput() {
      return setSewingTypeFile(null);
    }
  })), __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)",
      marginTop: "15px"
    }
  }, "V\xEDdeo (YouTube)"), __jsx(Row, null, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    style: {
      flex: 1
    },
    placeholder: "Ex: https://www.youtube.com/watch?v=5qdtbMvC2Rs",
    value: video,
    onChange: handleChangeVideo
  })), __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)",
      marginTop: "15px"
    }
  }, "Folheto e Manual"), __jsx(Row, {
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
      marginRight: "5px",
      position: "relative"
    }
  }, folheto ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTrash"],
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
    onClick: function onClick() {
      return setFolheto(null);
    }
  }) : null, __jsx("label", {
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
  }, "FOLHETO ", __jsx("br", null), __jsx("br", null), folheto ? folheto.name : "Clique para escolher um arquivo"), __jsx("input", {
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
  }, manual ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTrash"],
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
    onClick: function onClick() {
      return setManual(null);
    }
  }) : null, __jsx("label", {
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
  }, "MANUAL ", __jsx("br", null), __jsx("br", null), manual ? manual.name : "Clique para escolher um arquivo"), __jsx("input", {
    style: {
      width: 0
    },
    type: "file",
    name: "manual",
    id: "manual",
    onChange: manualChange
  })))), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: function onClick() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_8__["addMachine"])({
        name: name,
        manufacturer: manufacturer,
        description: description,
        mainFeatures: mainFeatures,
        category: category,
        specifications: specifications,
        video: video
      }, machineFiles, sewingTypeFile, refProdFiles, {
        folheto: folheto,
        manual: manual
      }, function (err, data) {
        if (err) {
          setSnackBar({
            result: 'error',
            message: err,
            open: true
          });
          return;
        }

        setSnackBar({
          result: 'success',
          message: 'Máquina criada com sucesso',
          open: true
        });
        cleanForm();
      });
    }
  }, "Adicionar m\xE1quina"));

  function cleanForm() {
    setName("");
    setDescription("");
    setManufacturer("");
    setCategory("");
    setMainFeatures("");
    setSpecifications({
      modelo: "",
      motor: "",
      alturaCalcador: "",
      comprimentoDoPonto: "",
      corteDeLinha: "",
      velocidadeMaxima: "",
      numeroDeAgulhas: "",
      painelTouchScreen: "",
      tipoDeAgulha: ""
    });
    setMachineFiles({
      machineFile1: null,
      machineFile2: null,
      machineFile3: null,
      machineFile4: null,
      machineFile5: null
    });
    setRefProdFiles({
      refProdFile1: null,
      refProdFile2: null,
      refProdFile3: null,
      refProdFile4: null
    });
    setFolheto(null);
    setManual(null);
    setSewingTypeFile(null);
  }
}
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "AddMachine__ImageContainer",
  componentId: "f5zi3f-0"
})(["img{max-width:", ";}"], function (props) {
  return props.maxWidth;
});
var Row = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "AddMachine__Row",
  componentId: "f5zi3f-1"
})(["display:flex;width:100%;flex-direction:row;justify-content:space-between;input{margin-right:5px;}select{margin-right:5px;}"]);

/***/ })

})
//# sourceMappingURL=new-machine.js.9c4ffeefc3605b885dc3.hot-update.js.map