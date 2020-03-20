webpackHotUpdate("static\\development\\pages\\admin\\machines\\machine.js",{

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_machines__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/machines */ "./src/utils/machines.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/images */ "./src/utils/images.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_images__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EditMachine/FileInput */ "./src/components/admin/machines/EditMachine/FileInput.jsx");
/* harmony import */ var _utils_Message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/Message */ "./src/components/utils/Message.jsx");
/* harmony import */ var _static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../static/styled-components/base */ "./src/static/styled-components/base.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














function EditMachine(_ref) {
  var id = _ref.id;
  var imageMessageError = "Extens\xE3o do arquivo enviado \xE9 inv\xE1lido. Extens\xF5es permitidas ".concat(["jpg","JPG","png","webp","svg","jpeg"].toString(), ", com no m\xE1ximo 10MB");
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    result: "success",
    open: false,
    message: ""
  }),
      snackBar = _useState[0],
      setSnackBar = _useState[1];

  function handleClose() {
    setSnackBar(_objectSpread({}, snackBar, {
      open: false
    }));
  }

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: "",
    description: "",
    mainFeatures: "",
    specifications: {},
    category: null,
    manufacturer: null,
    images: [],
    productRef: []
  }),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    machineFile1: null,
    machineFile2: null,
    machineFile3: null,
    machineFile4: null,
    machineFile5: null
  }),
      machineFiles = _useState3[0],
      setMachineFiles = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      sewingFile = _useState4[0],
      setSewingFile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    refProdFile1: null,
    refProdFile2: null,
    refProdFile3: null,
    refProdFile4: null,
    refProdFile5: null
  }),
      refProdFiles = _useState5[0],
      setRefProdFiles = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    categories: [],
    manufacturers: []
  }),
      categoriesManufacturers = _useState6[0],
      setCategoriesManufacturers = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      visible = _useState7[0],
      setVisible = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      title = _useState8[0],
      setTitle = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function asyncFunc() {
      Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["getOptions"])(function (err, dataCb) {
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
      Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["getMachine"])(id, function (err, machine) {
        if (err) {
          setSnackBar({
            result: "error",
            message: err,
            open: true
          });
          return;
        }

        console.log(machine);
        setState(_objectSpread({}, machine, {
          name: machine.name,
          description: machine.description,
          mainFeatures: machine.mainFeatures,
          specifications: machine.specifications,
          category: machine.category._id,
          manufacturer: machine.manufacturer,
          video: machine.video
        }));
      });
    }

    asyncFunc();
    return function () {};
  }, []);

  function handleChangeVideo(e) {
    var YTBaseURL = "https://www.youtube.com/embed/";

    if (getParam(e.target.value) == 0) {
      setState(_objectSpread({}, state, {
        video: YTBaseURL + getParam(e.target.value)
      }));
      setSnackBar({
        open: true,
        result: 'error',
        message: 'O endereço não é uma URL válida do YouTube'
      });
    } else {
      setState(_objectSpread({}, state, {
        video: YTBaseURL + getParam(e.target.value)
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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      folheto = _useState9[0],
      setFolheto = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      manual = _useState10[0],
      setManual = _useState10[1];

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

  function machineHandleChange(e) {
    if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["validateImage"])(["jpg","JPG","png","webp","svg","jpeg"], 10000, e.target.files[0])) {
      var newName = parseInt(e.target.name[e.target.name.length - 1]) - 1;
      setMachineFiles(_objectSpread({}, machineFiles, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["changeFileName"])(e.target.files[0], newName))));
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
    if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["validateImage"])(["jpg","JPG","png","webp","svg","jpeg"], 10000, e.target.files[0])) {
      var newName = parseInt(e.target.name[e.target.name.length - 1]) - 1;
      setRefProdFiles(_objectSpread({}, refProdFiles, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["changeFileName"])(e.target.files[0], newName))));
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

  function sewingHandleChange(e) {
    if (Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["validateImage"])(["jpg","JPG","png","webp","svg","jpeg"], 10000, e.target.files[0])) {
      var newName = parseInt(e.target.name[e.target.name.length - 1]) - 1;
      setSewingTypeFile(Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["changeFileName"])(e.target.files[0], newName));
    } else {
      setSnackBar({
        open: true,
        result: 'error',
        message: imageMessageError
      });
    }
  }

  function renderImage(name, type) {
    var image = "";
    state[type].forEach(function (img) {
      var imgSplit = img.split("/");

      if (parseInt(name[name.length - 1]) - 1 == imgSplit[imgSplit.length - 1][0]) {
        image = img;
      }
    });
    return image;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !title ? __jsx("h1", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(35,43,111)"
    }
  }, state.name, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faPencilAlt"],
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
    onClick: function onClick() {
      setTitle(true);
    }
  })) : __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    style: {
      width: "30%",
      display: "block",
      margin: "15px auto"
    },
    placeholder: "Nome",
    value: state.name,
    onChange: function onChange(e) {
      return setState(_objectSpread({}, state, {
        name: e.target.value
      }));
    }
  }), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Hr"], null), !title ? __jsx("h4", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "grey"
    }
  }, state.description, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faPencilAlt"],
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
    onClick: function onClick() {
      setTitle(true);
    }
  })) : __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    style: {
      width: "30%",
      display: "block",
      margin: "15px auto"
    },
    placeholder: "Subt\xEDtulo",
    value: state.description,
    onChange: function onChange(e) {
      return setState(_objectSpread({}, state, {
        description: e.target.value
      }));
    }
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
  }, __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    file: machineFiles.machineFile1,
    handleChange: machineHandleChange,
    deleteImage: function deleteImage() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["deleteImage"])(state.id, "machine", Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["getNameImageFromUrl"])(renderImage("machineFile1", "images")), function (err) {
        if (err) return;
        location.reload();
      });
    },
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
  }, __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    file: machineFiles.machineFile2,
    handleChange: machineHandleChange,
    deleteImage: function deleteImage() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["deleteImage"])(state.id, "machine", Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["getNameImageFromUrl"])(renderImage("machineFile2", "images")), function (err) {
        if (err) return;
        location.reload();
      });
    },
    cleanFileInput: machineCleanFileInput,
    imageURL: renderImage("machineFile2", "images"),
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    labelInputFile: "Imagem 2",
    id: "machineFile2",
    name: "machineFile2"
  }), __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    file: machineFiles.machineFile3,
    handleChange: machineHandleChange,
    deleteImage: function deleteImage() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["deleteImage"])(state.id, "machine", Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["getNameImageFromUrl"])(renderImage("machineFile3", "images")), function (err) {
        if (err) return;
        location.reload();
      });
    },
    cleanFileInput: machineCleanFileInput,
    imageURL: renderImage("machineFile3", "images"),
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    labelInputFile: "Imagem 3",
    id: "machineFile3",
    name: "machineFile3"
  }), __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    file: machineFiles.machineFile4,
    handleChange: machineHandleChange,
    deleteImage: function deleteImage() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["deleteImage"])(state.id, "machine", Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["getNameImageFromUrl"])(renderImage("machineFile4", "images")), function (err) {
        if (err) return;
        location.reload();
      });
    },
    cleanFileInput: machineCleanFileInput,
    imageURL: renderImage("machineFile4", "images"),
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    labelInputFile: "Imagem 4",
    id: "machineFile4",
    name: "machineFile4"
  }), __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    file: machineFiles.machineFile5,
    handleChange: machineHandleChange,
    deleteImage: function deleteImage() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["deleteImage"])(state.id, "machine", Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["getNameImageFromUrl"])(renderImage("machineFile5", "images")), function (err) {
        if (err) return;
        location.reload();
      });
    },
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
  }, "Tipo de ponto"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Hr"], null), __jsx("div", {
    id: "sewing-type-images",
    style: {
      width: "100%"
    }
  }, __jsx(ContainerInputFile, {
    style: {
      justifyContent: "center",
      marginBottom: "15px"
    }
  }, __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    file: sewingFile,
    handleChange: sewingHandleChange,
    deleteImage: function deleteImage() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["deleteImage"])(state.id, "sewingType", Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["getNameImageFromUrl"])(state.sewingType), function (err) {
        if (err) return;
        location.reload();
      });
    },
    cleanFileInput: function cleanFileInput() {
      return setSewingFile(null);
    },
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
  }, "Produtos ideias para produzir"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Hr"], null), __jsx("div", {
    id: "ref-prod-images",
    style: {
      width: "100%"
    }
  }, __jsx(ContainerInputFile, {
    style: {
      flexWrap: "wrap"
    }
  }, __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    file: refProdFiles.refProdFile1,
    handleChange: refProdHandleChange,
    deleteImage: function deleteImage() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["deleteImage"])(state.id, "productRef", Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["getNameImageFromUrl"])(renderImage("refProdFile1", "productRef")), function (err) {
        if (err) return;
        location.reload();
      });
    },
    cleanFileInput: refProdCleanFileInput,
    imageURL: renderImage("refProdFile1", "productRef"),
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    labelInputFile: "Imagem 1",
    id: "refProdFile1",
    name: "refProdFile1"
  }), __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    file: refProdFiles.refProdFile2,
    handleChange: refProdHandleChange,
    deleteImage: function deleteImage() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["deleteImage"])(state.id, "productRef", Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["getNameImageFromUrl"])(renderImage("refProdFile2", "productRef")), function (err) {
        if (err) return;
        location.reload();
      });
    },
    cleanFileInput: refProdCleanFileInput,
    imageURL: renderImage("refProdFile2", "productRef"),
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    labelInputFile: "Imagem 2",
    id: "refProdFile2",
    name: "refProdFile2"
  }), __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    file: refProdFiles.refProdFile3,
    handleChange: refProdHandleChange,
    deleteImage: function deleteImage() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["deleteImage"])(state.id, "productRef", Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["getNameImageFromUrl"])(renderImage("refProdFile3", "productRef")), function (err) {
        if (err) return;
        location.reload();
      });
    },
    cleanFileInput: refProdCleanFileInput,
    imageURL: renderImage("refProdFile3", "productRef"),
    labelWidth: "200px",
    labelHeight: "200px",
    maxWidth: "200px",
    labelInputFile: "Imagem 3",
    id: "refProdFile3",
    name: "refProdFile3"
  }), __jsx(_EditMachine_FileInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    file: refProdFiles.refProdFile4,
    handleChange: refProdHandleChange,
    deleteImage: function deleteImage() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["deleteImage"])(state.id, "productRef", Object(_utils_images__WEBPACK_IMPORTED_MODULE_8__["getNameImageFromUrl"])(renderImage("refProdFile4", "productRef")), function (err) {
        if (err) return;
        location.reload();
      });
    },
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
  }, "Caracter\xEDsticas"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Hr"], null), __jsx("div", {
    style: {
      width: "50%",
      display: "block",
      margin: "auto"
    }
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["TextArea"], {
    value: state.mainFeatures,
    onChange: function onChange(e) {
      return setState(_objectSpread({}, state, {
        mainFeatures: e.target.value
      }));
    },
    rows: "5"
  }, state.mainFeatures))), __jsx(Section, null, __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)"
    }
  }, "Especifica\xE7\xF5es T\xE9cnicas"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Hr"], null), __jsx("div", {
    style: {
      width: "50%",
      display: "block",
      margin: "auto"
    }
  }, __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "modelo"
  }, "Modelo:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    placeholder: "Modelo",
    value: state.specifications ? state.specifications.modelo : "",
    onChange: function onChange(e) {
      return setState(_objectSpread({}, state, {
        specifications: _objectSpread({}, state.specifications, {
          modelo: e.target.value
        })
      }));
    }
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "alturaCalcador"
  }, "Altura do Cal\xE7ador:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    placeholder: "Altura do Cal\xE7ador",
    value: state.specifications ? state.specifications.alturaCalcador : "",
    onChange: function onChange(e) {
      return setState(_objectSpread({}, state, {
        specifications: _objectSpread({}, state.specifications, {
          alturaCalcador: e.target.value
        })
      }));
    }
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "comprimentoDoPonto"
  }, "Comprimento do ponto:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    placeholder: "Comprimento do ponto",
    value: state.specifications ? state.specifications.comprimentoDoPonto : "",
    onChange: function onChange(e) {
      return setState(_objectSpread({}, state, {
        specifications: _objectSpread({}, state.specifications, {
          comprimentoDoPonto: e.target.value
        })
      }));
    }
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "corteDeLinha"
  }, "Corte de Linha:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    placeholder: "Corte de linha",
    value: state.specifications ? state.specifications.corteDeLinha : "",
    onChange: function onChange(e) {
      return setState(_objectSpread({}, state, {
        specifications: _objectSpread({}, state.specifications, {
          corteDeLinha: e.target.value
        })
      }));
    }
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "velocidadeMaxima"
  }, "Velocidade M\xE1xima:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    placeholder: "Velocidade m\xE1xima",
    value: state.specifications ? state.specifications.velocidadeMaxima : "",
    onChange: function onChange(e) {
      return setState(_objectSpread({}, state, {
        specifications: _objectSpread({}, state.specifications, {
          velocidadeMaxima: e.target.value
        })
      }));
    }
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "motor"
  }, "Motor:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    placeholder: "Motor",
    value: state.specifications ? state.specifications.motor : "",
    onChange: function onChange(e) {
      return setState(_objectSpread({}, state, {
        specifications: _objectSpread({}, state.specifications, {
          motor: e.target.value
        })
      }));
    }
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "numeroDeAgulhas"
  }, "N\xFAmero de Agulhas:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    placeholder: "N\xFAmero de agulhas",
    value: state.specifications ? state.specifications.numeroDeAgulhas : "",
    onChange: function onChange(e) {
      return setState(_objectSpread({}, state, {
        specifications: _objectSpread({}, state.specifications, {
          numeroDeAgulhas: e.target.value
        })
      }));
    }
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "painelTouchScreen"
  }, "Painel touch screen:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    placeholder: "Painel touch screen",
    value: state.specifications ? state.specifications.painelTouchScreen : "",
    onChange: function onChange(e) {
      return setState(_objectSpread({}, state, {
        specifications: _objectSpread({}, state.specifications, {
          painelTouchScreen: e.target.value
        })
      }));
    }
  })), __jsx(InputGroup, null, __jsx("label", {
    htmlFor: "tipoDeAgulha"
  }, "Tipo de agulha:"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    placeholder: "Tipo de agulha",
    value: state.specifications ? state.specifications.tipoDeAgulha : "",
    onChange: function onChange(e) {
      return setState(_objectSpread({}, state, {
        specifications: _objectSpread({}, state.specifications, {
          tipoDeAgulha: e.target.value
        })
      }));
    }
  })))), __jsx(Section, null, __jsx("h3", {
    className: "main-title",
    style: {
      textAlign: "center",
      color: "rgb(129, 22, 27)"
    }
  }, "Categoria e fabricante"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Hr"], null), __jsx("div", {
    style: {
      width: "50%",
      display: "block",
      margin: "auto"
    }
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Select"], {
    value: state.category,
    onChange: function onChange(e) {
      return setState(_objectSpread({}, state, {
        category: e.target.value
      }));
    }
  }, __jsx("option", {
    value: ""
  }, "Escolha uma categoria"), categoriesManufacturers.categories.map(function (category) {
    return __jsx("option", {
      selected: state.category == category.id ? category.id : false,
      value: category.id
    }, category.name);
  })), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Select"], {
    value: state.manufacturer,
    onChange: function onChange(e) {
      return setState(_objectSpread({}, state, {
        manufacturer: e.target.value
      }));
    }
  }, __jsx("option", {
    value: ""
  }, "Escolha um fabricante"), categoriesManufacturers.manufacturers.map(function (manu) {
    return __jsx("option", {
      selected: state.manufacturer == manu.id ? manu.id : false,
      value: manu.id
    }, manu.name);
  })))), __jsx(Section, null, __jsx("h3", {
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
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Input"], {
    style: {
      width: "50%"
    },
    placeholder: "Ex: https://www.youtube.com/watch?v=5qdtbMvC2Rs",
    value: state.video,
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
  }, folheto ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faTrash"],
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
  }) : state.folheto ? __jsx(ButtonDelImg, {
    onClick: function onClick() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["deleteImage"])(state.id, "folheto", formatFileName(state.folheto), function (err) {
        if (err) return;
        location.reload();
      });
    }
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
  }, manual ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faTrash"],
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
  }) : state.manual ? __jsx(ButtonDelImg, {
    onClick: function onClick() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["deleteImage"])(state.id, "manual", formatFileName(state.manual), function (err) {
        if (err) return;
        location.reload();
      });
    }
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
  }, __jsx(_utils_Message__WEBPACK_IMPORTED_MODULE_12__["default"], {
    result: result,
    message: message,
    color: color
  }), " ") : null, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    style: {
      width: "50%",
      margin: "auto",
      display: "block"
    },
    onClick: function onClick() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["updateMachine"])(state, machineFiles, sewingFile, refProdFiles, {
        folheto: folheto,
        manual: manual
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
        setTimeout(function () {
          location.reload();
        }, 2000);
      });
    }
  }, "Salvar"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    style: {
      width: "50%",
      margin: "15px auto",
      display: "block"
    },
    onClick: function onClick() {
      return Object(_utils_machines__WEBPACK_IMPORTED_MODULE_7__["deleteMachine"])(state.id, function (err, response) {
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
        setTimeout(function () {
          _routes__WEBPACK_IMPORTED_MODULE_6__["Router"].pushRoute("/admin/machines");
        }, 2000);
      });
    }
  }, "Excluir m\xE1quina"), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: snackBar.open,
    autoHideDuration: 1500,
    onClose: handleClose
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_5__["default"], {
    severity: snackBar.result
  }, snackBar.message))));

  function formatFileName(name) {
    var splitName = name.split('/');
    var splittedName = splitName[splitName.length - 1].split('.');
    return splittedName[0];
  }
}
var ButtonDelImg = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "EditMachine__ButtonDelImg",
  componentId: "md2rfm-0"
})(["background-color:#960d03;color:white;padding:8px 20px;margin:8px 0;border:none;border-radius:4px;position:absolute;width:75px;right:0;top:0px;font-size:8px;z-index:9;cursor:pointer;"]);
var Section = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "EditMachine__Section",
  componentId: "md2rfm-1"
})(["margin:10% 0;"]);
var MainImg = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "EditMachine__MainImg",
  componentId: "md2rfm-2"
})(["width:50%;margin:10px auto;display:block;cursor:pointer;"]);
var SecondaryImages = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "EditMachine__SecondaryImages",
  componentId: "md2rfm-3"
})(["max-width:25%;margin-right:5px;cursor:pointer;:hover{box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);}box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);"]);
var PrefImage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "EditMachine__PrefImage",
  componentId: "md2rfm-4"
})(["width:49%;margin-right:5px;margin-bottom:5px;cursor:pointer;:hover{box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);}box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);"]);
var MainFeaturesText = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "EditMachine__MainFeaturesText",
  componentId: "md2rfm-5"
})([""]);
var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "EditMachine__InputGroup",
  componentId: "md2rfm-6"
})(["display:flex;flex-direction:column;width:", ";"], function (props) {
  return props.width ? props.width : "100%";
});
var ContainerInputFile = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "EditMachine__ContainerInputFile",
  componentId: "md2rfm-7"
})(["img{width:100%;margin:10px auto;display:block;cursor:pointer;}display:flex;justify-content:center;"]);

/***/ })

})
//# sourceMappingURL=machine.js.78938a3617f8703c948c.hot-update.js.map