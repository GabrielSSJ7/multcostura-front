webpackHotUpdate("static/development/pages/admin/machines.js",{

/***/ "./src/components/admin/machines/ListMachines.jsx":
/*!********************************************************!*\
  !*** ./src/components/admin/machines/ListMachines.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListMachines; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_styled_components_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../static/styled-components/base */ "./src/static/styled-components/base.js");
/* harmony import */ var _utils_machines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/machines */ "./src/utils/machines.js");
/* harmony import */ var _ducks_machines__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ducks/machines */ "./src/ducks/machines.js");
/* harmony import */ var _ducks_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ducks/utils */ "./src/ducks/utils.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function ListMachines() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      hideBtns = _useState[0],
      setHideBtns = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.Utils;
  }),
      message = _useSelector.message,
      messageType = _useSelector.messageType,
      messageColor = _useSelector.messageColor;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.Machine;
  }),
      machines = _useSelector2.machines;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function _getMachines() {
      Object(_utils_machines__WEBPACK_IMPORTED_MODULE_5__["getMachines"])(function (err, machines) {
        if (err) {
          dispatch(_ducks_utils__WEBPACK_IMPORTED_MODULE_7__["Creators"].changeMessage(err));
          dispatch(_ducks_utils__WEBPACK_IMPORTED_MODULE_7__["Creators"].changeType(false));
          dispatch(_ducks_utils__WEBPACK_IMPORTED_MODULE_7__["Creators"].changeColor("red"));
          return;
        }

        dispatch(_ducks_machines__WEBPACK_IMPORTED_MODULE_6__["Creators"].loadMachines(machines));
      });
    }

    _getMachines();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, hideBtns ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: function onClick() {}
  }, "Filtrar por categorias"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_4__["Button"], null, "Filtrar por fabricantes")) : null, __jsx(Container, null, machines.map(function (machine) {
    return __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      as: "/admin/machine/".concat(machine.id.toString()),
      href: "/admin/machine/machine?id=".concat(machine.id.toString())
    }, __jsx(CardContainer, null, __jsx("img", {
      src: machine.images[0]
    }), __jsx("div", null, __jsx(Title, null, " ", machine.name, " "), __jsx(Subtitle, null, machine.description)), __jsx(Description, null, machine.mainFeatures)));
  })));

  function navigateToMachine(id) {
    _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].push("/admin/machine/machine", "/machine/machine/[id]");
  }
}
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ListMachines__Container",
  componentId: "um70bv-0"
})(["display:flex;flex-direction:row;width:100%;flex-wrap:wrap;justify-content:center;"]);
var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ListMachines__CardContainer",
  componentId: "um70bv-1"
})(["min-width:250px;max-width:250px;max-height:300px;overflow:hidden;cursor:pointer;display:flex;flex-direction:column;flex-wrap:no-wrap;margin-bottom:10px;margin-right:15px;img{width:100%;max-width:230px;display:block;margin:auto}padding:15px;:hover{box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);}box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);}"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "ListMachines__Title",
  componentId: "um70bv-2"
})(["font-size:22px;margin:0 15px;"]);
var Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "ListMachines__Subtitle",
  componentId: "um70bv-3"
})(["color:lightgrey;margin:0 15px;"]);
var Description = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "ListMachines__Description",
  componentId: "um70bv-4"
})(["color:grey;margin:15px 15px;"]);

/***/ })

})
//# sourceMappingURL=machines.js.856cafca2e4942d624c0.hot-update.js.map