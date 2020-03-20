webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/utils/Slider.jsx":
/*!*****************************************!*\
  !*** ./src/components/utils/Slider.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Slider__Wrapper",
  componentId: "sc-1ke79mt-0"
})(["width:100%;height:", ";overflow:hidden;display:-webkit-box;position:relative;"], function (props) {
  return props.height;
});
var Slide = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Slider__Slide",
  componentId: "sc-1ke79mt-1"
})(["background-repeat:no-repeat;background-color:#E3E3E3;width:", ";height:", ";transform:translateX(", "px);transition:transform 0.4s ease-in-out;position:relative;"], function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.translate;
});
var ArrowLeft = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Slider__ArrowLeft",
  componentId: "sc-1ke79mt-2"
})([":hover{opacity:0.8;}transition:0.2s;position:absolute;z-index:9;left:0;margin-left:40px;cursor:pointer;top:50%;margin-top:-10px;border-top:30px solid transparent;border-bottom:30px solid transparent;border-right:30px solid #960d03;"]);
var ArrowRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Slider__ArrowRight",
  componentId: "sc-1ke79mt-3"
})([":hover{opacity:0.8;}transition:0.2s;position:absolute;z-index:9;right:0;margin-right:40px;cursor:pointer;width:0;height:0;top:50%;margin-top:-10px;border-top:30px solid transparent;border-bottom:30px solid transparent;border-left:30px solid #960d03;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var link = _ref.link,
      images = _ref.images,
      autoSlide = _ref.autoSlide,
      slideCtrl = _ref.slideCtrl,
      balls = _ref.balls,
      arrows = _ref.arrows,
      height = _ref.height,
      slideWidth = _ref.slideWidth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      index = _useState[0],
      setIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      translate = _useState2[0],
      setTranslate = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (autoSlide) {
      var interval = setInterval(function () {
        next();
      }, 4000);
      return function () {
        return clearInterval(interval);
      };
    }
  }, [index]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (slideCtrl) {
      setIndex(slideCtrl);
      if (slideCtrl != index) setTranslate(getSlideWidth() - slideCtrl * getSlideWidth());
    }
  }, [slideCtrl]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    window.addEventListener("resize", function () {
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
      setIndex(function (index) {
        return index + 1;
      });
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
    height: height
  }, images ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, arrows ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ArrowLeft, {
    onClick: function onClick() {
      return prev();
    }
  }), __jsx(ArrowRight, {
    onClick: function onClick() {
      return next();
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, images.map(function (img, i) {
    return __jsx(Slide, {
      className: "slide",
      key: i,
      src: img,
      translate: translate,
      height: height,
      width: slideWidth
    }, __jsx("img", {
      src: img,
      style: {
        width: "100%",
        height: "auto%"
      }
    }));
  }))) : __jsx("p", null, " no image")), balls ? __jsx("div", {
    id: "bolas",
    style: {
      display: "flex",
      flexDirection: "row",
      width: "50%",
      justifyContent: "center",
      margin: "10px auto"
    }
  }, images.map(function (img, i) {
    return __jsx("div", {
      key: i,
      onClick: function onClick() {
        return suckBalls(i + 1);
      },
      style: {
        width: "8px",
        height: "8px",
        background: index == i + 1 ? "black" : "transparent",
        border: "1px solid black",
        borderRadius: "100%",
        marginRight: "10px",
        cursor: "pointer"
      }
    });
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null));
});

/***/ })

})
//# sourceMappingURL=index.js.b73027bc42e10ec3de03.hot-update.js.map