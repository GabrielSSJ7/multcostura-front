module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/static/styled-components/base */ "./src/static/styled-components/base.js");
/* harmony import */ var _src_components_web_home_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/web/home/Home */ "./src/components/web/home/Home.jsx");
/* harmony import */ var _src_components_web_Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/web/Map */ "./src/components/web/Map.jsx");
/* harmony import */ var _src_components_web_SlideWeb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/web/SlideWeb */ "./src/components/web/SlideWeb.jsx");
/* harmony import */ var _src_components_templates_Web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/templates/Web */ "./src/components/templates/Web.js");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/api */ "./src/api.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const IndexPage = () => {
  const {
    0: resellers,
    1: setResellers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: images,
    1: setImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: map,
    1: setMap
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: infobox,
    1: setInfobox
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function async() {
      Object(_src_api__WEBPACK_IMPORTED_MODULE_9__["default"])().get('/institutional/homeBanners').then(res => {
        setImages(res.data);
      }).catch(err => {});

      try {
        const response = await Object(_src_api__WEBPACK_IMPORTED_MODULE_9__["default"])().get('/reseller');
        setResellers(response.data);
        const revendedores = response.data;
        let map, infobox;

        function loadMapScenario() {
          map = new Microsoft.Maps.Map(document.getElementById('map'), {});
          setMap(map);

          for (let revendedor in revendedores) {
            //Create an infobox at the center of the map but don't show it.
            infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
              visible: false
            }); //Assign the infobox to a map instance.

            infobox.setMap(map); //Create a pushpin at a random location in the map bounds.

            var randomLocation = Microsoft.Maps.TestDataGenerator.getLocations(1, map.getBounds());
            var pin = new Microsoft.Maps.Pushpin({
              latitude: revendedores[revendedor].maps.lat,
              longitude: revendedores[revendedor].maps.lng,
              altitude: 0,
              altitudeReference: -1
            }); //Store some metadata with the pushpin.

            pin.metadata = {
              title: revendedores[revendedor].name,
              description: "Endereço: " + revendedores[revendedor].address + "<br/> Tel: " + revendedores[revendedor].phone + "<br/> E-mail: " + revendedores[revendedor].email
            }; //Add a click event handler to the pushpin.

            Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked); //Add pushpin to the map.

            map.entities.push(pin);
          }
        }

        function pushpinClicked(e) {
          //Make sure the infobox has metadata to display.
          if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
              location: e.target.getLocation(),
              title: e.target.metadata.title,
              description: e.target.metadata.description,
              visible: true
            });
          }
        } //adMapScenario();

      } catch (e) {
        console.log(e);
      }
    }

    async();
  }, []);
  return __jsx(_src_components_templates_Web__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(_src_static_styled_components_base__WEBPACK_IMPORTED_MODULE_4__["Column"], {
    style: {
      width: "100%"
    }
  }, __jsx(_src_components_web_SlideWeb__WEBPACK_IMPORTED_MODULE_7__["default"], {
    images: images.map(img => img.image)
  }), __jsx(_src_components_web_home_Home__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_src_components_web_Map__WEBPACK_IMPORTED_MODULE_6__["default"], {
    map: map,
    resellers: resellers
  })));
};

IndexPage.getInitialProps = ({
  reduxStore
}) => {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

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

/***/ "./src/components/templates/Web.js":
/*!*****************************************!*\
  !*** ./src/components/templates/Web.js ***!
  \*****************************************/
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
/* harmony import */ var _web_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web/Nav */ "./src/components/web/Nav.jsx");
/* harmony import */ var _web_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../web/Footer */ "./src/components/web/Footer.jsx");
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

    @media(max-width: 1228px) {
      .media-1228px {      
        font-size: .7rem;
      }
    }

     @media(max-width: 950px) {
      .media-1228px {      
        font-size: .6rem;
      }

      .baixe-nosso-ap-responsivo {
        font-size: .7rem;
      }

      .arrow-responsive {
         border-width: 0 1px 1px 0;
      }
    }

    @media(max-width: 750px) {
      .media-1228px {      
        font-size: .5rem;
      }
    }
    
`;

class Template extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: ""
    };
  }

  componentDidMount() {//new Microsoft.Maps.Map(document.getElementById('map'), {})
  }

  render() {
    return __jsx("div", {
      style: {
        margin: 0,
        padding: 0
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "Multcostura"), __jsx("script", {
      src: `http://www.bing.com/api/maps/mapcontrol?callback=loadMapScenario&key=${"ArBcF40dX4IT5Co3SIxT7TfvEqq3VNdafH09G2lYGLmm1PvaaFwU-xHaQLjtmpDe"}`,
      defer: true
    })), __jsx(GlobalStyle, null), __jsx(_web_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("div", {
      style: {
        margin: 0,
        padding: 0,
        display: "flex",
        minHeight: '100vh'
      }
    }, this.props.children), __jsx(_web_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Template);

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

/***/ "./src/components/web/Footer.jsx":
/*!***************************************!*\
  !*** ./src/components/web/Footer.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
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
/* harmony import */ var _static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/styled-components/base */ "./src/static/styled-components/base.js");
/* harmony import */ var _static_images_logo_colorido_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/images/logo-colorido.png */ "./src/static/images/logo-colorido.png");
/* harmony import */ var _static_images_logo_colorido_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_logo_colorido_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_images_facebook_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/images/facebook.png */ "./src/static/images/facebook.png");
/* harmony import */ var _static_images_facebook_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_facebook_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_instagram_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static/images/instagram.png */ "./src/static/images/instagram.png");
/* harmony import */ var _static_images_instagram_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_instagram_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_images_youtube_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../static/images/youtube.png */ "./src/static/images/youtube.png");
/* harmony import */ var _static_images_youtube_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_images_youtube_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_images_logo_bnds_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/images/logo bnds.png */ "./src/static/images/logo bnds.png");
/* harmony import */ var _static_images_logo_bnds_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_images_logo_bnds_png__WEBPACK_IMPORTED_MODULE_10__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function Footer() {
  return __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    style: {
      background: "#ECECEC",
      padding: "35px 9.89% 15px 7%",
      flexWrap: "wrap"
    }
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Column"], {
    flex: 1,
    jc: "flex-start",
    ait: "flex-end",
    style: {
      marginTop: '10px'
    }
  }, __jsx("img", {
    src: _static_images_logo_colorido_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    style: {
      width: "45\%",
      marginRight: "15%"
    }
  })), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    flex: 1
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Column"], {
    style: {
      marginRight: "25px"
    }
  }, __jsx(Item, {
    onClick: () => _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute('/empresa')
  }, "Empresa"), __jsx(Item, {
    onClick: () => _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute('/produtos')
  }, "M\xE1quinas"), __jsx(Item, {
    onClick: () => _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute('/produtos?type=tools')
  }, "Pe\xE7as"), __jsx(Item, {
    onClick: () => _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute('/noticias')
  }, "Not\xEDcias"), __jsx(Item, {
    onClick: () => _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute('/contato')
  }, "Contato")), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Column"], null, __jsx(Item, {
    onClick: () => _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute('/empresa')
  }, "Revendedores"), __jsx(Item, {
    onClick: () => _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute('/produtos')
  }, "Marcas"))), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    flex: 1,
    style: {
      position: "relative"
    }
  }, __jsx("div", {
    style: {
      paddingRight: "5px"
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMapMarkerAlt"],
    style: {
      marginRight: "5px",
      opacity: 0
    }
  })), __jsx("div", {
    style: {
      position: "absolute",
      top: '20%',
      bottom: '50%'
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMapMarkerAlt"],
    style: {
      marginRight: "5px",
      transform: {
        translateY: "50%"
      }
    }
  })), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Column"], null, __jsx("p", {
    style: {
      marginBottom: "5px",
      marginTop: "0px"
    }
  }, "Endere\xE7o"), __jsx("p", {
    style: {
      marginTop: 0,
      fontFamily: "sans-serif"
    }
  }, "Rua Newton Prado, 71", __jsx("br", null), " Bom Retiro S\xE3o Paulo SP ", __jsx("br", null), " Cep: 000000-000"))), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Column"], {
    flex: 1
  }, __jsx("p", {
    style: {
      marginBottom: "5px",
      marginTop: "0px"
    }
  }, "Sigam nossas redes sociais!"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    style: {
      padding: "0 5px"
    }
  }, __jsx(Item, {
    style: {
      marginRight: "48px"
    }
  }, __jsx("img", {
    src: _static_images_facebook_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    style: {
      width: "30px"
    }
  })), __jsx(Item, {
    style: {
      marginRight: "48px"
    }
  }, __jsx("img", {
    src: _static_images_instagram_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    style: {
      width: "30px"
    }
  })), __jsx(Item, {
    style: {
      marginRight: "48px"
    }
  }, __jsx("img", {
    src: _static_images_youtube_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    style: {
      width: "30px"
    }
  }))), __jsx("img", {
    src: _static_images_logo_bnds_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    style: {
      width: "60%"
    }
  })));
}
const Item = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Footer__Item",
  componentId: "sc-1ur0sw9-0"
})(["font-size:1rem;cursor:pointer;transition:.4s;:hover{opacity:.9;color:#81161B;}z-index:9;margin:0;padding:5px 0;"]);

/***/ }),

/***/ "./src/components/web/Map.jsx":
/*!************************************!*\
  !*** ./src/components/web/Map.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapsQuest; });
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! React */ "React");
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(React__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./src/api.js");
/* harmony import */ var _static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/styled-components/base */ "./src/static/styled-components/base.js");
var __jsx = React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




let infobox, map;
class MapsQuest extends React__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      states: [],
      cities: [],
      state: {
        id: 'Selecione um estado',
        name: null
      },
      city: null,
      resellersFound: false
    };
  }

  async componentDidMount() {
    const response = await Object(_api__WEBPACK_IMPORTED_MODULE_2__["default"])().get("/dist/locates.json");
    this.setState({
      states: response.data.estados,
      cities: response.data.cidades
    });
    if (!this.props.showMultcostura) this.loadMapScenario();else this.setMultViewMap();
  }

  async onChangeState(e) {
    const value = e.target.value.split("-");
    this.setState({
      state: {
        id: value[0],
        name: value[1]
      },
      city: 'Selecione uma cidade'
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  } //let map, infobox;


  async loadMapScenario() {
    const response = await Object(_api__WEBPACK_IMPORTED_MODULE_2__["default"])().get('/reseller'); //setResellers(response.data)

    const revendedores = response.data;
    map = new Microsoft.Maps.Map(document.getElementById('map'), {}); //setMap(map)

    for (let revendedor in revendedores) {
      //Create an infobox at the center of the map but don't show it.
      infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
        visible: false
      }); //Assign the infobox to a map instance.

      infobox.setMap(map); //Create a pushpin at a random location in the map bounds.

      var randomLocation = Microsoft.Maps.TestDataGenerator.getLocations(1, map.getBounds());
      var pin = new Microsoft.Maps.Pushpin({
        latitude: revendedores[revendedor].maps.lat,
        longitude: revendedores[revendedor].maps.lng,
        altitude: 0,
        altitudeReference: -1
      }); //Store some metadata with the pushpin.

      pin.metadata = {
        title: revendedores[revendedor].name,
        description: "Endereço: " + revendedores[revendedor].address + "<br/> Tel: " + revendedores[revendedor].phone + "<br/> E-mail: " + revendedores[revendedor].email
      }; //Add a click event handler to the pushpin.

      Microsoft.Maps.Events.addHandler(pin, 'click', this.pushpinClicked); //Add pushpin to the map.

      map.entities.push(pin);
    }
  }

  pushpinClicked(e) {
    //Make sure the infobox has metadata to display.
    if (e.target.metadata) {
      //Set the infobox options with the metadata of the pushpin.
      infobox.setOptions({
        location: e.target.getLocation(),
        title: e.target.metadata.title,
        description: e.target.metadata.description,
        visible: true
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.state !== prevState.state) {
      this.setViewMap(this.state.state, this.state.city);
    }

    if (this.state.city !== prevState.city) {
      this.setViewMap(this.state.state, this.state.city);
    }

    if (prevProps !== this.props) {
      console.log(this.props.showMultcostura); //if (this.props.showMultcostura)
      //this.setMultViewMap();
    }
  }

  async setViewMap(state, city) {
    //const map = new Microsoft.Maps.Map(document.getElementById('map'), {})
    //const { map } = this.props
    if (map) {
      if (state || city) {
        Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
          var searchManager = new Microsoft.Maps.Search.SearchManager(map);
          var requestOptions = {
            bounds: map.getBounds(),
            where: `${city ? city + ', ' + state.id : state.name}`,
            callback: function (answer, userData) {
              map.setView({
                center: new Microsoft.Maps.Location(answer.results[0].location.latitude, answer.results[0].location.longitude),
                zoom: 11
              });
            }
          };
          searchManager.geocode(requestOptions);
        });
      }
    }
  }

  async setMultViewMap() {
    console.log("setMultViewMap");
    map = new Microsoft.Maps.Map(document.getElementById('map'), {});
    Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
      var searchManager = new Microsoft.Maps.Search.SearchManager(map);
      var requestOptions = {
        bounds: map.getBounds(),
        where: `Rua Newton Prado, 71 Bom Retiro São Paulo SP`,
        callback: function (answer, userData) {
          var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(answer.results[0].location.latitude, answer.results[0].location.longitude), {
            text: 'M',
            title: 'Multcostura',
            subTitle: 'Rua Newton Prado, 71 Bom Retiro São Paulo SP'
          });
          map.entities.push(pushpin);
          map.setView({
            center: new Microsoft.Maps.Location(answer.results[0].location.latitude, answer.results[0].location.longitude),
            zoom: 17
          });
        }
      };
      searchManager.geocode(requestOptions);
    });
  }

  render() {
    return this.props.showMultcostura ? __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      id: "map",
      style: {
        width: "87%",
        height: "500px",
        marginBottom: "10px",
        marginLeft: '10px',
        minWidth: "300px",
        flex: 1
      }
    }) : __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__["Column"], {
      style: {
        width: "100%",
        marginTop: "100px"
      },
      ait: "center"
    }, __jsx("h1", {
      style: {
        color: "#5B5B5B"
      }
    }, "Encontre um revendedor pr\xF3ximo a voc\xEA!"), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      jc: "space-around",
      ait: "center",
      style: {
        width: "50%",
        flexWrap: "wrap"
      }
    }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      style: {
        minWidth: "120px",
        margin: "0 5px",
        width: "160px",
        padding: "0",
        background: "transparent linear-gradient(180deg, #FCF6F6 0%, #D6D6D6 100%) 0% 0% no-repeat padding-box",
        height: "40px"
      },
      onChange: this.onChangeState.bind(this),
      value: `${this.state.state.id}-${this.state.state.name}`
    }, __jsx("option", {
      value: 'Selecione um estado'
    }, "Selecione um estado"), this.state.states.map((st, i) => __jsx("option", {
      key: i,
      value: `${st.id}-${st.estado}`
    }, st.estado))), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      style: {
        minWidth: "120px",
        width: "160px",
        margin: "0 5px",
        padding: "0",
        background: "transparent linear-gradient(180deg, #FCF6F6 0%, #D6D6D6 100%) 0% 0% no-repeat padding-box",
        height: "40px"
      },
      onChange: this.onChangeCity.bind(this),
      value: this.state.city
    }, __jsx("option", {
      value: "Selecione uma cidade"
    }, "Selecione uma cidade"), this.state.cities.filter(cit => cit.estadoId == this.state.state.id ? cit : false).map((cit, i) => __jsx("option", {
      key: i,
      value: cit.id
    }, cit.cidade)))), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      id: "map",
      style: {
        width: "70%",
        height: "500px",
        marginBottom: "10px",
        marginTop: "10px"
      }
    }), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: {
        flexWrap: "wrap"
      }
    }, this.props.resellers.filter(resel => {
      const {
        city,
        state
      } = this.state;

      if ((new RegExp(state.id).test(resel.address) || new RegExp(state.name).test(resel.address)) && new RegExp(city).test(resel.address)) {
        return resel;
      } else {
        if (new RegExp(state.id).test(resel.address) || new RegExp(state.name).test(resel.address)) {
          return resel;
        }
      }
    }).map((resel, i) => __jsx(CardContainer, {
      key: i
    }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_3__["Column"], null, __jsx(Item, null, resel.name), __jsx("hr", {
      style: {
        width: "100%"
      }
    }), __jsx(Item, null, resel.address), __jsx(Item, null, "Tel: ", resel.phone), __jsx(Item, null, "E-mail: ", resel.email))))));
  }

}
const Item = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Map__Item",
  componentId: "sc-1fuegwh-0"
})(["margin:0;"]);
const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Map__CardContainer",
  componentId: "sc-1fuegwh-1"
})(["flex:1;min-width:250px;max-width:250px;max-height:300px;overflow:hidden;cursor:pointer;display:flex;flex-direction:column;padding:15px;flex-wrap:no-wrap;margin-bottom:10px;margin-right:10px;img{width:100%;max-width:230px;display:block;margin:auto}:hover{box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);}box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);}"]);
const SearchBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Map__SearchBtn",
  componentId: "sc-1fuegwh-2"
})(["height:16px;background:#282D90 0% 0% no-repeat padding-box;box-shadow:1px 1px 6px #00000029;border-radius:3px;opacity:1;cursor:pointer;color:white;padding:10px;transition:.3s;:hover{opacity:.8;}"]);

/***/ }),

/***/ "./src/components/web/Nav.jsx":
/*!************************************!*\
  !*** ./src/components/web/Nav.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api */ "./src/api.js");
/* harmony import */ var _static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../static/styled-components/base */ "./src/static/styled-components/base.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_images_logo_multcostura_oficial_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../static/images/logo-multcostura-(oficial).png */ "./src/static/images/logo-multcostura-(oficial).png");
/* harmony import */ var _static_images_logo_multcostura_oficial_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_images_logo_multcostura_oficial_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_images_logo_multcostura_horizontal_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../static/images/logo-multcostura--horizontal.png */ "./src/static/images/logo-multcostura--horizontal.png");
/* harmony import */ var _static_images_logo_multcostura_horizontal_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_images_logo_multcostura_horizontal_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_images_maquina_icon_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../static/images/maquina-icon.png */ "./src/static/images/maquina-icon.png");
/* harmony import */ var _static_images_maquina_icon_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_images_maquina_icon_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _static_images_peca_icon_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../static/images/peca-icon.png */ "./src/static/images/peca-icon.png");
/* harmony import */ var _static_images_peca_icon_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_images_peca_icon_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _static_images_fab_icon_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../static/images/fab-icon.png */ "./src/static/images/fab-icon.png");
/* harmony import */ var _static_images_fab_icon_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_images_fab_icon_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _static_images_whatsapp_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../static/images/whatsapp.png */ "./src/static/images/whatsapp.png");
/* harmony import */ var _static_images_whatsapp_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_images_whatsapp_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _static_images_arrow_up_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../static/images/arrow-up.png */ "./src/static/images/arrow-up.png");
/* harmony import */ var _static_images_arrow_up_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_images_arrow_up_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _static_images_arrow_down_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../static/images/arrow-down.png */ "./src/static/images/arrow-down.png");
/* harmony import */ var _static_images_arrow_down_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_static_images_arrow_down_png__WEBPACK_IMPORTED_MODULE_19__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 //import { Router, Link } from '../../../routes'
//import Router from 'next/router'











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});
function Nav() {
  const {
    0: categories,
    1: setCategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: manufacturers,
    1: setManufacturers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: hideDropMenu,
    1: setHideDropMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: hideManufMenu,
    1: setHideManufMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: translate,
    1: setTranslate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: highDolar,
    1: setHighDolar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: pctChange,
    1: setPctChange
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    window.addEventListener("resize", () => {
      setTranslate(window.innerWidth);
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTranslate(window.innerWidth);

    async function async() {
      Object(_api__WEBPACK_IMPORTED_MODULE_8__["default"])().get('/categories').then(response => {
        setCategories(response.data);
      }).catch(err => {});
      Object(_api__WEBPACK_IMPORTED_MODULE_8__["default"])().get('/manufacturer').then(response => {
        setManufacturers(response.data);
      }).catch(err => {});
      Object(_api__WEBPACK_IMPORTED_MODULE_8__["default"])().get("https://economia.awesomeapi.com.br/all/USD-BRL").then(response => {
        setHighDolar(parseFloat(response.data.USD.high).toFixed(2));
        setPctChange(parseFloat(response.data.USB.pctChange) > 0);
      }).catch(err => {});
    }

    async();
  }, []);
  return translate > 690 ? __jsx(NavBg, {
    props: {
      hideDropMenu,
      hideManufMenu,
      setHideManufMenu,
      setHideDropMenu,
      categories,
      manufacturers,
      highDolar,
      pctChange
    }
  }) : __jsx(NavSm, {
    props: {
      hideDropMenu,
      hideManufMenu,
      setHideManufMenu,
      setHideDropMenu,
      categories,
      manufacturers,
      highDolar,
      pctChange
    }
  });
} // NAV MOBILE

function NavSm({
  props: {
    hideDropMenu,
    hideManufMenu,
    setHideManufMenu,
    setHideDropMenu,
    categories,
    manufacturers,
    highDolar,
    pctChange
  }
}) {
  const Router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  const classes = useStyles();
  const {
    0: left,
    1: setLeft
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: searchKey,
    1: setSearchKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: list,
    1: setList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    categories: [],
    manufacturers: [],
    main: [__jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
      key: Math.round(Math.random() * 100),
      jc: "flex-start",
      ait: "center",
      style: {
        marginTop: "13px",
        padding: "0 15px"
      },
      onClick: () => Router.push("/")
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faHome"],
      size: "2x",
      style: {
        marginRight: "10px"
      }
    }), " ", __jsx("span", {
      style: {
        fontSize: "1.1rem"
      }
    }, "Inicio")), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
      key: Math.round(Math.random() * 100),
      onClick: () => setListController('categories'),
      jc: "flex-start",
      ait: "center",
      style: {
        marginTop: "13px",
        padding: "0 15px"
      }
    }, __jsx("img", {
      src: _static_images_maquina_icon_png__WEBPACK_IMPORTED_MODULE_14___default.a,
      style: {
        width: "36px",
        marginRight: "10px"
      }
    }), " ", __jsx("span", {
      style: {
        fontSize: "1.1rem"
      }
    }, "Categorias")), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
      key: Math.round(Math.random() * 100),
      onClick: () => setListController('manufacturers'),
      jc: "flex-start",
      ait: "center",
      style: {
        marginTop: "13px",
        padding: "0 15px"
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faIndustry"],
      size: "2x",
      style: {
        marginRight: "10px"
      }
    }), " ", __jsx("span", {
      style: {
        fontSize: "1.1rem"
      }
    }, "Fabricantes")), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
      key: Math.round(Math.random() * 100),
      jc: "flex-start",
      ait: "center",
      style: {
        marginTop: "13px",
        padding: "0 15px"
      },
      onClick: () => Router.push("/produtos?type=tools")
    }, __jsx("img", {
      src: _static_images_peca_icon_png__WEBPACK_IMPORTED_MODULE_15___default.a,
      style: {
        width: "36px",
        marginRight: "10px"
      }
    }), " ", __jsx("span", {
      style: {
        fontSize: "1.1rem"
      }
    }, "Pe\xE7as")), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
      key: Math.round(Math.random() * 100),
      jc: "flex-start",
      ait: "center",
      style: {
        marginTop: "13px",
        padding: "0 15px"
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      onClick: () => Router.push("/index#map"),
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUsers"],
      size: "2x",
      style: {
        marginRight: "10px"
      }
    }), " ", __jsx("span", {
      style: {
        fontSize: "1.1rem"
      }
    }, "Revendedores")), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
      key: Math.round(Math.random() * 100),
      jc: "flex-start",
      ait: "center",
      style: {
        marginTop: "13px",
        padding: "0 15px"
      },
      onClick: () => Router.push("/empresa")
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBuilding"],
      size: "2x",
      style: {
        marginRight: "10px"
      }
    }), " ", __jsx("span", {
      style: {
        fontSize: "1.1rem"
      }
    }, "Empresa")), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
      key: Math.round(Math.random() * 100),
      jc: "flex-start",
      ait: "center",
      style: {
        marginTop: "13px",
        padding: "0 15px"
      },
      onClick: () => Router.push("/contato")
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faHeadset"],
      size: "2x",
      style: {
        marginRight: "10px"
      }
    }), " ", __jsx("span", {
      style: {
        fontSize: "1.1rem"
      }
    }, "Contato")), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
      key: Math.round(Math.random() * 100),
      jc: "flex-start",
      ait: "center",
      style: {
        marginTop: "13px",
        padding: "0 15px"
      },
      onClick: () => Router.push("/noticias")
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faNewspaper"],
      size: "2x",
      style: {
        marginRight: "10px"
      }
    }), " ", __jsx("span", {
      style: {
        fontSize: "1.1rem"
      }
    }, "Not\xEDcias")), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Column"], {
      key: Math.round(Math.random() * 100),
      style: {
        padding: "10px"
      }
    }, __jsx("hr", {
      style: {
        width: "100%"
      }
    }), __jsx("div", {
      style: {
        flex: 2
      }
    }, __jsx("p", null, __jsx("img", {
      src: _static_images_whatsapp_png__WEBPACK_IMPORTED_MODULE_17___default.a
    }), "Whatsapp: (00) 00000-0000")), __jsx("div", {
      style: {
        flex: 2
      }
    }, __jsx("p", null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPhone"],
      style: {
        marginRight: "5px"
      }
    }), " (00) 00000-0000")), __jsx("div", {
      style: {
        flex: 2
      }
    }, __jsx("p", null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEnvelope"],
      style: {
        marginRight: "5px"
      }
    }), "contato@multcostura.com.br")), __jsx("div", {
      style: {
        flex: 1
      }
    }, __jsx("p", null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faDollarSign"],
      style: {
        marginRight: "5px"
      }
    }), "D\xF3lar: ", pctChange ? __jsx("img", {
      src: _static_images_arrow_up_png__WEBPACK_IMPORTED_MODULE_18___default.a,
      style: {
        width: "16px"
      }
    }) : __jsx("img", {
      src: _static_images_arrow_down_png__WEBPACK_IMPORTED_MODULE_19___default.a,
      style: {
        width: "16px"
      }
    }), " ", highDolar)))]
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setList(_objectSpread({}, list, {
      categories: [__jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        key: 10201210,
        ait: "center",
        jc: "space-around"
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowLeft"],
        onClick: () => setListController('main')
      }), " ", __jsx("h1", {
        style: {
          textAlign: "center"
        }
      }, "Categorias")), categories.map((cat, i) => __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Column"], {
        key: i,
        jc: "center",
        ait: "flex-start",
        style: {
          marginTop: "13px",
          padding: "0 15px"
        }
      }, __jsx("span", {
        style: {
          fontSize: "1.1rem"
        },
        onClick: () => Router.push('/produtos?type=categories&id=' + cat.id)
      }, cat.name), __jsx("hr", {
        style: {
          width: "100%"
        }
      })))],
      manufacturers: [__jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        key: 1020121,
        ait: "center",
        jc: "space-around"
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowLeft"],
        onClick: () => setListController('main')
      }), " ", __jsx("h1", {
        style: {
          textAlign: "center"
        }
      }, "Fabricantes")), manufacturers.map((man, i) => __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Column"], {
        key: i,
        jc: "center",
        ait: "flex-start",
        style: {
          marginTop: "13px",
          padding: "0 15px"
        },
        onClick: () => Router.push({
          pathname: "/produtos",
          query: {
            type: "manufacturer",
            id: man.id
          }
        })
      }, __jsx("span", {
        style: {
          fontSize: "1.1rem"
        }
      }, man.name), __jsx("hr", {
        style: {
          width: "100%"
        }
      })))]
    }));
  }, [categories, manufacturers]);
  const {
    0: listController,
    1: setListController
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('main');

  const sideList = side => __jsx("div", {
    className: classes.list,
    role: "presentation"
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      padding: 0
    }
  }, __jsx("div", {
    style: {
      width: "100%",
      background: "#EDEDED",
      padding: "15px 0",
      boxShadow: "grey 1px 1px 10px"
    }
  }, __jsx(LogoMaior, {
    src: _static_images_logo_multcostura_horizontal_png__WEBPACK_IMPORTED_MODULE_13___default.a
  })), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, list[listController])));

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setLeft(open);
  };

  return __jsx("div", null, !search ? __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    jc: "space-around",
    ait: "center",
    style: {
      background: "#EDEDED",
      width: "100%",
      height: "84px"
    }
  }, __jsx("span", {
    onClick: toggleDrawer('left', true)
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faList"],
    size: "2x"
  })), __jsx(LogoMobile, {
    src: _static_images_logo_multcostura_oficial_png__WEBPACK_IMPORTED_MODULE_12___default.a
  }), __jsx("span", {
    onClick: () => setSearch(true)
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSearch"],
    size: "2x"
  }))) : __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    jc: "center",
    ait: "center",
    style: {
      background: "#EDEDED",
      width: "100%",
      height: "84px"
    }
  }, __jsx("span", {
    onClick: () => setSearch(false),
    style: {
      padding: '10px',
      fontSize: "1.3rem"
    }
  }, "X"), __jsx(SearchInput, {
    style: {
      width: "70%",
      padding: "0 5px"
    },
    placeholder: "Buscar",
    value: searchKey,
    onChange: e => setSearchKey(e.target.value),
    onKeyDown: k => {
      if (k.key == "Enter") window.location.href = './produtos?search=' + searchKey;
    }
  }), __jsx(SearchBtn, {
    onClick: () => window.location.href = './produtos?search=' + searchKey
  }, "BUSCAR")), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    open: left,
    onClose: toggleDrawer('left', false)
  }, sideList('left')));
} // NAV GRANDE


function NavBg({
  props: {
    hideDropMenu,
    hideManufMenu,
    setHideManufMenu,
    setHideDropMenu,
    categories,
    manufacturers,
    highDolar,
    pctChange
  }
}) {
  const Router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  const {
    0: doll,
    1: setDoll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Column"], {
    style: {
      width: "100%"
    }
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    flex: "5",
    style: {
      flex: "5 1 auto",
      justifyContent: "center",
      background: "transparent linear-gradient(180deg, #E8E8E8 0%, #E7E7E7 48%, #D6D6D6 100%) 0% 0% no-repeat padding-box"
    }
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    style: {
      width: "90%"
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/"
  }, __jsx("a", {
    style: {
      width: '18%',
      padding: "10px 0",
      display: "flex"
    }
  }, __jsx(Logo, {
    src: _static_images_logo_multcostura_oficial_png__WEBPACK_IMPORTED_MODULE_12___default.a
  }))), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Column"], {
    style: {
      width: '87%',
      padding: "10px 10px 10px 0"
    },
    jc: "center"
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    style: {
      maxWidth: "100%",
      marginTop: "5px"
    }
  }, __jsx(SearchInput, {
    style: {
      width: "100%",
      padding: "0 5px"
    },
    placeholder: "Buscar",
    value: search,
    onChange: e => setSearch(e.target.value),
    onKeyDown: k => {
      if (k.key == "Enter") window.location.href = './produtos?search=' + search;
    }
  }), __jsx(SearchBtn, {
    onClick: () => window.location.href = './produtos?search=' + search
  }, "BUSCAR")), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    style: {
      maxWidth: "100%",
      marginTop: "18px"
    }
  }, __jsx("div", {
    style: {
      flex: 2
    }
  }, __jsx("p", {
    className: "media-1228px",
    style: {
      display: "flex",
      alignItems: "center",
      marginBottom: "0",
      fontFamily: "sans-serif"
    }
  }, __jsx("img", {
    src: _static_images_whatsapp_png__WEBPACK_IMPORTED_MODULE_17___default.a,
    style: {
      width: "18px",
      marginRight: "5px"
    }
  }), "Whatsapp: (00) 00000-0000")), __jsx("div", {
    style: {
      flex: 2
    }
  }, __jsx("p", {
    className: "media-1228px",
    style: {
      display: "flex",
      alignItems: "center",
      marginBottom: "0",
      fontFamily: "sans-serif"
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPhone"],
    style: {
      marginRight: "5px",
      color: "#929292"
    }
  }), " Telefone: (00) 00000-0000")), __jsx("div", {
    style: {
      flex: 2
    }
  }, __jsx("p", {
    className: "media-1228px",
    style: {
      display: "flex",
      alignItems: "center",
      marginBottom: "0",
      fontFamily: "sans-serif"
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEnvelope"],
    style: {
      marginRight: "5px",
      color: "#929292"
    }
  }), __jsx("span", {
    style: {
      fontSize: "98%",
      fontFamily: "sans-serif"
    }
  }, "E-mail:"), " contato@multcostura.com.br")), __jsx("div", {
    style: {
      flex: 1
    }
  }, __jsx("p", {
    className: "media-1228px",
    style: {
      textAlign: "end",
      marginBottom: "0",
      fontFamily: "sans-serif",
      fontWeight: "bold"
    }
  }, "D\xF3lar:  ", pctChange ? __jsx("img", {
    src: _static_images_arrow_up_png__WEBPACK_IMPORTED_MODULE_18___default.a,
    style: {
      width: "16px"
    }
  }) : __jsx("img", {
    src: _static_images_arrow_down_png__WEBPACK_IMPORTED_MODULE_19___default.a,
    style: {
      width: "14px"
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faDollarSign"],
    style: {
      color: pctChange ? "#20B138" : "red"
    }
  }), __jsx("span", {
    style: {
      color: pctChange ? "#20B138" : "red"
    }
  }, highDolar))))))), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    flex: "1",
    style: {
      justifyContent: "center",
      background: "transparent linear-gradient(180deg, #EFEFEF 0%, #E3E3E3 100%) 0% 0% no-repeat padding-box"
    }
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    style: {
      width: "85%",
      justifyContent: "space-between"
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "10px",
      position: "relative"
    },
    onMouseEnter: () => setHideManufMenu(true),
    onMouseLeave: () => setHideManufMenu(false)
  }, __jsx(Hover, {
    styles: "border-color: #81161B",
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, __jsx(Item, {
    className: "media-1228px"
  }, "Nossas marcas ", __jsx(ArrowDown, {
    className: "arrow-responsive",
    color: "black",
    margin: "0 0 1px 2px"
  }))), __jsx(DropDownMenu, {
    color: "black",
    bgcolor: "transparent linear-gradient(180deg, #EFEFEF 0%, #E3E3E3 100%) 0% 0% no-repeat padding-box",
    vis: hideManufMenu
  }, manufacturers.map((man, i) => __jsx(DropDownItem, {
    key: i,
    onClick: () => Router.push({
      pathname: "/produtos",
      query: {
        type: "manufacturer",
        id: man.id
      }
    })
  }, man.name)))), __jsx(Item, {
    className: "media-1228px",
    onClick: () => Router.push("/index#map")
  }, "Revendedores"), __jsx(Item, {
    className: "media-1228px",
    onClick: () => Router.push("/noticias")
  }, "Not\xEDcias"), __jsx(Item, {
    className: "media-1228px",
    onClick: () => Router.push("/contato")
  }, "Contato"), __jsx(Item, {
    className: "baixe-nosso-ap-responsivo",
    style: {
      color: "#81161B"
    }
  }, "BAIXE NOSSO APLICATIVO"))), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    flex: "1",
    jc: "center",
    style: {
      color: "white",
      background: "transparent linear-gradient(180deg, #323AD6 0%, #242873 100%) 0% 0% no-repeat padding-box",
      padding: "0 100px"
    }
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    style: {
      width: '95%'
    },
    jc: "space-between"
  }, categories.map((category, i) => {
    if (i < 8) return __jsx(Item, {
      key: i,
      className: "media-1228px",
      onClick: () => Router.push('/produtos?type=categories&id=' + category.id)
    }, category.name);
  }), __jsx(Item, {
    className: "media-1228px",
    onClick: () => Router.push("/produtos?type=tools")
  }, "Pe\xE7as e acess\xF3rios"), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "10px",
      position: "relative"
    },
    onMouseEnter: () => setHideDropMenu(true),
    onMouseLeave: () => setHideDropMenu(false)
  }, __jsx(Hover, {
    styles: "border-color: #81161B",
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, __jsx(Item, {
    className: "media-1228px",
    onClick: () => setHideDropMenu(hideDropMenu ? false : true)
  }, "Todas as categorias"), __jsx(ArrowDown, {
    className: "arrow-responsive",
    color: "white",
    margin: "0 0 5px 5px"
  })), __jsx(DropDownMenu, {
    color: "white",
    bgcolor: "transparent linear-gradient(180deg, #323AD6 0%, #242873 100%) 0% 0% no-repeat padding-box",
    vis: hideDropMenu
  }, categories.map((cat, i) => __jsx(DropDownItem, {
    key: i,
    onClick: () => Router.push('/produtos?type=categories&id=' + cat.id)
  }, cat.name)))))));
}

const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Nav__Logo",
  componentId: "sc-1fviv0k-0"
})(["max-width:100%;height:auto;margin:auto "]);
const LogoMobile = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Nav__LogoMobile",
  componentId: "sc-1fviv0k-1"
})(["height:60px;"]);
const LogoMaior = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Nav__LogoMaior",
  componentId: "sc-1fviv0k-2"
})(["display:block;margin:auto;width:80%;"]);
const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "Nav__SearchInput",
  componentId: "sc-1fviv0k-3"
})(["background:#FFFFFF 0% 0% no-repeat padding-box;border:1px solid #707070;border-radius:3px;opacity:1;height:32px;width:100%;margin-right:3px;"]);
const SearchBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Nav__SearchBtn",
  componentId: "sc-1fviv0k-4"
})(["height:16px;background:#282D90 0% 0% no-repeat padding-box;box-shadow:1px 1px 6px #00000029;border-radius:3px;opacity:1;cursor:pointer;color:white;padding:10px;transition:.3s;:hover{opacity:.8;}"]);
const Item = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Nav__Item",
  componentId: "sc-1fviv0k-5"
})(["font-size:1rem;cursor:pointer;transition:.4s;:hover{opacity:.9;color:#81161B;}z-index:9;margin:0;padding:12px 0;"]);
const DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Nav__DropDownItem",
  componentId: "sc-1fviv0k-6"
})(["border-bottom:1px solid grey;z-index:9;:last-child{border-bottom:none;}"]);
const DropDownMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Nav__DropDownMenu",
  componentId: "sc-1fviv0k-7"
})(["position:absolute;left:-10px;top:40px;z-index:99;background:", ";display:flex;transform-origin:top;transform:", ";transition:transform 0.2s !important;flex-direction:column;width:150px;transition:.2s;div{display:", ";color:", ";padding:10px;cursor:pointer;transition:.2s;:hover{color:#81161B;opacity:.8 !important;}}"], props => props.bgcolor, props => props.vis ? "scaleY(1)" : "scaleY(0)", props => props.vis ? "inherit" : "none", props => props.color);
const ArrowDown = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.i.withConfig({
  displayName: "Nav__ArrowDown",
  componentId: "sc-1fviv0k-8"
})(["border:solid ", ";border-width:0 3px 3px 0;display:inline-block;padding:3px;transform:rotate(45deg);-webkit-transform:rotate(45deg);margin:", ";"], props => props.color, props => props.margin);
const ArrowLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.i.withConfig({
  displayName: "Nav__ArrowLeft",
  componentId: "sc-1fviv0k-9"
})(["border:solid ", ";border-width:0 3px 3px 0px;display:inline-block;padding:3px;transform:rotate(135deg);-webkit-transform:rotate(135deg);margin:", ";"], props => props.color, props => props.margin);
const Hover = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Nav__Hover",
  componentId: "sc-1fviv0k-10"
})([":hover{p,i{transition:.4s;", ";}}"], props => props.styles);

/***/ }),

/***/ "./src/components/web/SlideWeb.jsx":
/*!*****************************************!*\
  !*** ./src/components/web/SlideWeb.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideWeb; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Slider */ "./src/components/utils/Slider.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SlideWeb({
  fixed,
  images
}) {
  return fixed ? __jsx(Wrapper, {
    height: "400px"
  }, __jsx(Slide, {
    width: "100%",
    height: "400px",
    src: images
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, images.length > 0 ? __jsx(_utils_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: "400px",
    images: images,
    slideWidth: "100%",
    arrows: true,
    autoSlide: true
  }) : '');
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SlideWeb__Wrapper",
  componentId: "gcalm9-0"
})(["width:100%;height:", ";overflow:hidden;display:-webkit-box;position:relative;"], props => props.height);
const Slide = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SlideWeb__Slide",
  componentId: "gcalm9-1"
})(["background-image:url('", "');background-size:cover;background-position:center;background-repeat:no-repeat;width:", ";height:", ";transform:translateX(", "px);transition:transform 0.4s ease-in-out;position:relative;"], props => props.src, props => props.width, props => props.height, props => props.translate);

/***/ }),

/***/ "./src/components/web/home/Home.jsx":
/*!******************************************!*\
  !*** ./src/components/web/home/Home.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api */ "./src/api.js");
/* harmony import */ var _static_styled_components_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../static/styled-components/base */ "./src/static/styled-components/base.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Home() {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    produtos: "",
    pecas: "",
    noticias: ""
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function asyncFunc() {
      const prod = await Object(_api__WEBPACK_IMPORTED_MODULE_3__["default"])().get('/institutional/produtos');
      const pecas = await Object(_api__WEBPACK_IMPORTED_MODULE_3__["default"])().get('/institutional/pecas');
      const noticias = await Object(_api__WEBPACK_IMPORTED_MODULE_3__["default"])().get('/institutional/noticias');
      setState({
        produtos: prod.data,
        pecas: pecas.data,
        noticias: noticias.data
      });
    }

    asyncFunc();
  }, []);
  return __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_4__["Column"], {
    style: {
      marginTop: "15px",
      width: "87%",
      padding: "0 6.46%"
    }
  }, __jsx("h1", {
    style: {
      color: "#5B5B5B"
    }
  }, "LAN\xC7AMENTOS"), __jsx(DivCards, {
    jc: "space-between",
    style: {
      width: "100%",
      flexWrap: "wrap"
    }
  }, __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_4__["Column"], {
    className: "div-card",
    style: {
      width: "27.95%",
      minWidth: "280px",
      maxHeight: ""
    }
  }, __jsx(CardTitle, {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/produtos")
  }, "Produtos"), __jsx(CardContainer, {
    className: "card",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/produtos")
  }, __jsx(DivImg, {
    src: state.produtos
  }))), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_4__["Column"], {
    className: "div-card",
    style: {
      width: "27.95%",
      minWidth: "280px"
    }
  }, __jsx(CardTitle, {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/produtos?type=tools")
  }, "Pe\xE7as"), __jsx(CardContainer, {
    className: "card",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/produtos?type=tools")
  }, __jsx(DivImg, {
    src: state.pecas
  }))), __jsx(_static_styled_components_base__WEBPACK_IMPORTED_MODULE_4__["Column"], {
    className: "div-card",
    style: {
      width: "27.95%",
      minWidth: "280px"
    }
  }, __jsx(CardTitle, {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/noticias")
  }, "Not\xEDcias"), __jsx(CardContainer, {
    className: "card",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/noticias")
  }, __jsx(DivImg, {
    src: state.noticias
  })))));
}
const DivCards = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Home__DivCards",
  componentId: "sc-1f189qj-0"
})(["display:flex;justify-content:space-between;width:100%;flex-wrap:wrap;@media (max-width:600px){justify-content:center;.div-card{width:100% !important;}.card{width:100% !important;height:400px !important;}}"]);
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Home__CardTitle",
  componentId: "sc-1f189qj-1"
})(["background:#E5E5E5;padding:5px;border-radius:5px 5px 0px 0px;width:24.17%;margin:0;font-size:1.1rem;padding:8px 15px;"]);
const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Home__CardContainer",
  componentId: "sc-1f189qj-2"
})(["height:200px;overflow:hidden;cursor:pointer;display:flex;flex-direction:column;flex-wrap:no-wrap;margin-bottom:10px;margin-right:15px;background:#E5E5E5;img{width:100%;max-height:200px;display:block;margin:auto}padding:5px;:hover{box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);}}"]);
const DivImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Home__DivImg",
  componentId: "sc-1f189qj-3"
})(["background-image:url(", ");background-size:cover;background-position:center;width:100%;height:100%;display:block;margin:auto"], props => props.src);

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

/***/ "./src/static/images/arrow-down.png":
/*!******************************************!*\
  !*** ./src/static/images/arrow-down.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/static/images/arrow-up.png":
/*!****************************************!*\
  !*** ./src/static/images/arrow-up.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABaFBMVEUAAAArqkAgsjghsDggsTggsTggsTggsTgXuS4AgAAhsTkgsTggsTgfsjcA/wAgsTghsTkktjcetDwhsjgfsTkgr0AgsTggsTgcqjkbrjYgsTcgsTgfsTgcszkgsTggtTUgsjggsTgdsTsgsTgfsjkgv0AgsTggsDgktkkfsTgisjkhsTggsjcgsjghsTggsTggsTkgsTcfsTggsjghsTggsDggrzgesTggsTghsTcgsTgfsTchsjgfsTkgsTgAqlUfsTgAv0AhsTggsjggsTggsTcktj0gsTggsDkgsTggsTggsDggsTggsjkisDgfsTggsTggsTggsTcgsjkhszcgsjggsjggsTggsDcgsTkgrzogsTkgsTggsjkhsjghtTofsTggsTgjsDUgsTkhsDggsTgjrjogsjcgsTggsDgfszohsTogsDggsTggsTggsjgfrTMirjYfsTggsTggsDciszcgsTgAAAAVyqmRAAAAdnRSTlMADGCs3PWqXwsCbOnnagGutA4RzMsQys4SE8/a2xvuGNbZGqljCOLgB1JMnJjJxN/d2MO/jIhAO81F/kGEgqcDowSkqIDBFbpH0epuaT9Ek+TSpllGjrXFr3kw1LZwbR/7+h2ZleUWOPc3OT6f/fyeGSbjwHglj1sjNwAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkAxMUFh/OssIbAAAK40lEQVR42u3dedtWVRmG8QcTkzQ0QLIITSuyOS0bqCgqG2i02WYabZ75/NHh+wYvPMMe1lr3vdZ5nh9gH8/a128v/uBANxtupx543YOnTz/40Osfjv4lFtCZNzxy66hH33g2+tdY6049duuuHn9T9O+xtp07f+tEF56I/kXWsicu3rqnNz8Z/ZusXffvrwBS2/ZXAKft+yuA0q79FcBo9/4KILRvfwWM3/79FTB6h/ZXwNgd3l8BIzdlfwWM27T9FTBqU/dXwJhN318BIzZnfwWM17z9FTBac/dXwFjN318BI7VkfwWM07L9FTBKS/dXwBgt318BI7Rm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"

/***/ }),

/***/ "./src/static/images/fab-icon.png":
/*!****************************************!*\
  !*** ./src/static/images/fab-icon.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAeJJREFUeNrsm+1tgzAQhp0o/+sNwgZhg3iEbBBG6AaQCTpC1Ak6AukEbSeADegG1KjXyrIK3CGjKvZ70v0hZ3I8ui8boVTisonseQqrmXftRpqEdFZ7T6upBdvIAGjpgm3qNSAmAPnI9UMqAPSStEAKRPQsGQAgBUTFMToAD2iDiQNQABA4Ou5N+gk1SAEAiBvAXI7r2AHopYCQAqm3uVRSIPkucIgdwD71LpAhBVAEl/0ey6uxnmGzQQoAwDSA09S+2ZNafb905Awgj6RriQkFIKcHuzLayqfV0uobw4EB0hPTthKADdIq/0qBwmoz48iHc9MB2gsDGhfwD9jivwC4jjRMR07kdMWwLSZsj46zVwJmGGBXK4KaHGmYoV4GtjWMqNFrAlBeqNeMUM8cpzXTdi6F3KhZoz78FqCeqQ3TriPHubYd878Lig5D8Dj3r0ICuHfFIAQAAAAAAAAAAAAAajdy/Wb1VXCfM42yF8GaPU10rdVnwbojTYBSH0vJJFgJQdaKdy7nb3R6WrtkZJf6iElQkgJnZ2/OkdyJBK5o76BEerAh9THobjCazdBYBLSkkgjQSvZpiqZ1w/niuzACsgU+GhRBFEEUQRRBpAD2AgAAAAAw0gZbldBHxhCSLwEGAEMOSu/cEsPcAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/static/images/facebook.png":
/*!****************************************!*\
  !*** ./src/static/images/facebook.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/static/images/instagram.png":
/*!*****************************************!*\
  !*** ./src/static/images/instagram.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/static/images/logo bnds.png":
/*!*****************************************!*\
  !*** ./src/static/images/logo bnds.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo bnds-d342944166a15f00f943bc862f2ab08a.png";

/***/ }),

/***/ "./src/static/images/logo-colorido.png":
/*!*********************************************!*\
  !*** ./src/static/images/logo-colorido.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/static/images/logo-multcostura-(oficial).png":
/*!**********************************************************!*\
  !*** ./src/static/images/logo-multcostura-(oficial).png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-multcostura-(oficial)-44a41389f2bf74e9703551314dcf91ad.png";

/***/ }),

/***/ "./src/static/images/logo-multcostura--horizontal.png":
/*!************************************************************!*\
  !*** ./src/static/images/logo-multcostura--horizontal.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-multcostura--horizontal-bfc4c87188c032cf547602257a67fff0.png";

/***/ }),

/***/ "./src/static/images/maquina-icon.png":
/*!********************************************!*\
  !*** ./src/static/images/maquina-icon.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAkCAYAAADPRbkKAAAABHNCSVQICAgIfAhkiAAAAa1JREFUWEft2L9KHVEQBvCfaMRYmASbpEsdhKA26XwBg2Ag9hEFqzSCTyA+gI34Ago2IY1FKhu18E/QKhBbW7ESIagcuMp6c1d3z66LC3vgwr1755v5vpmze2anS81XV835q0LAS0zgVWSyrnGAvU74NAEv2oz/ITiKWZ/xMwaYwJzjdVYBnzCFvgTgEKuRJIKv9UhsEtYx2Z0uzmMJPQl0KOFoJInKBSxgEd0Jwkf42AiIzEALlmkLTWIZ77j3hLrAn8j44eZ7H4lNwn4nfgzffm9XNVPgZi2BY2YXd7wbAZlzVq5hU4Fy85nfW1OB/DkrF9FUoNx85veWWoFprLT6oGB01frMYTN/nP8Qoa0eKeAnNJWz2E87iYcwju94i2OsYQN/CwS+he4gtOuxaxdfcJomIFwPb07b+IAf+Iaz2IhtuEoE9OIrBnGCX7isk4CSuHZ0U0kFGgEPZKCpQJanUK23UJi/POXqb5t25I0V5lPh9XYg7RyIHV7lJVLUPrWVqL2Ask7cohl+DP8mbQuNPYZ8Jv9vPdQLPROO2WhUMV7PxiTSqhEQmbjSYDdgN1Al5I4M5QAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/static/images/peca-icon.png":
/*!*****************************************!*\
  !*** ./src/static/images/peca-icon.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAmCAYAAACGeMg8AAAABHNCSVQICAgIfAhkiAAAA99JREFUWEftmFnITVEUx3+fmUyZp3iQ2QuRkgcPUkI8iCSzQsgDGZIHD8Z4ME8ZShRCmUvhwZyxZJYpL4Z4MH7G/tqnbqdzzl7n3tPtdrPr1ve1195n/ff6r7GCMlkVZYKD/0BKzZJpLVIN/llRv0ZAe2AA0AOYAbxxAH8UG2gaIF2AcYDAaHUEugF1gK/AaeCL2zsJnCsmmDRAZgFrnTV8Ou4EJvuEsty3AAlk5gKrjB/fC4w1yobF/uRzLg5IdUedTkBzoDbQHxhq/MhNYJ9RNldMID4BD4DLgNnXooA0A6YAwwEBqQdcAg6kVKwKsAhokvLcL+CFs/524LflfBiI/j/hIlEQoXTPDmCqc24B9S05/X3gFtDOJxyzr/MjgbuW87lAagJ6gShuC8gh4BhQ1XCxXnUlMB5obZCPEnkPTAKOWs7nAhnh6BNFNwHZBWwA6hsu/gZsAhYWAOSjo7ge0LsCpWsBu4FRMScEZBrQy8h5UUuUuFYAtQREuaiGy133gDXA6ygdAyAdAIXM3glAtgLnXQL0vVAlsBhQ7mnjE47ZF5CXQGcHRgFnIvAoCYgAyCJdE4AoW29xodin209HQyXFlj7hLIH0cUCEPmqJWrOBwUBDg2LyEeWBMwVSK7VFLEBWAPuBxgYg8pFlwFKgrUE+SiQvalmAXAU25hSNSfopiYmGioSqDPJZYSBXgDnA89Bl74DKwNktQBYA043UUjWsnCML5psQw0Aeu5IlzIghwPU0QJQT9LNSS7XWngyBPHURMxw8+sof0wC5A6xLwREFCBWZlpLG4iP6vnqecCG5DXiVBshyF1IbGMAoam0GVpeisyv8qg6zvPBn4BSg3JOVj2SWEM+6+km9im+paFTUEvAWPuEsE6KGCCpRFL3iEqIUU0+iusy3xGPRal6xSxSV8HLOMQlAFHoHGvOCqHURuFAgtW47i4oF6jrnA8+idMwt2Qe5piqujFc5vd5oEdVaKjJnAq185kuglgpPPYh00uMoGX73AVFrKqtMiBAMGqvjgOR8S5ldjZXGR/k2Vh9cP3LY9zHth19f3Z9GOcNcAxXsB/1Id2NCVGZ/CNwogFrK5KPdHV4sUTRq6hos1Uk93fBBXJU10ixZTtNHS94J36s2VxZVAo6kUvhA3DhIZUA/10uoMaprHMylARonq2T6BFBJor+1NCJSZo8dD0UB0ShU9FINYxngZaG87w4B0HBwSRyYKEU1iFPVasngPgWy2tfg7oibG7z1Ra1gX7RSIhMgy+gnK2WT7hG1NME5mMYiulCTC0spUgwQ+oYsIn+JnTqWig8U/CBlA+QvCAnmJ/gH0A0AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/static/images/whatsapp.png":
/*!****************************************!*\
  !*** ./src/static/images/whatsapp.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/static/images/youtube.png":
/*!***************************************!*\
  !*** ./src/static/images/youtube.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gluz\Projects\web\multcostura\multcostura-web\pages\index.js */"./pages/index.js");


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

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "React":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("React");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

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

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map