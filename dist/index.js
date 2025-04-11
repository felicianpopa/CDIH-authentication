/*!
  web-authentication v1.0.13
  undefined
  Released under the undefined License.
*/
'use strict';



function ___$insertStylesToHeader(css) {
  if (!css) {
    return
  }
  if (typeof window === 'undefined') {
    return
  }

  const style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css
}

var React = require('react');
var router = require('next/router');
var nookies = require('nookies');
var axios = require('axios');
var FEUtils = require('FE-utils');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);
var axios__default = /*#__PURE__*/_interopDefaultCompat(axios);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: true
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = false, next;
            return next.value = t, next.done = true, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = true;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}
_export(exports, {
  /**
  * This function lets you dynamically import a component.
  * It uses [React.lazy()](https://react.dev/reference/react/lazy) with [Suspense](https://react.dev/reference/react/Suspense) under the hood.
  *
  * Read more: [Next.js Docs: `next/dynamic`](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#nextdynamic)
  */
  "default": function _default() {
    return dynamic$2;
  },
  noSSR: function noSSR() {
    return _noSSR;
  }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _jsxruntime = require("react/jsx-runtime");
/*#__PURE__*/_interop_require_default._(require("react"));
var _loadablesharedruntime = /*#__PURE__*/_interop_require_default._(require("./loadable.shared-runtime"));
var isServerSide = typeof window === 'undefined';
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
  return {
    "default": (mod == null ? void 0 : mod["default"]) || mod
  };
}
function _noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules;
  // This check is necessary to prevent react-loadable from initializing on the server
  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }
  var Loading = loadableOptions.loading;
  // This will only be rendered on the server side
  return function () {
    return /*#__PURE__*/(0, _jsxruntime.jsx)(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
}
function dynamic$2(dynamicOptions, options) {
  var loadableFn = _loadablesharedruntime["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(param) {
      var error = param.error,
        isLoading = param.isLoading,
        pastDelay = param.pastDelay;
      if (!pastDelay) return null;
      if (process.env.NODE_ENV !== 'production') {
        if (isLoading) {
          return null;
        }
        if (error) {
          return /*#__PURE__*/(0, _jsxruntime.jsxs)("p", {
            children: [error.message, /*#__PURE__*/(0, _jsxruntime.jsx)("br", {}), error.stack]
          });
        }
      }
      return null;
    }
  };
  // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first
  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    };
    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))
  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions;
    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (_typeof(dynamicOptions) === 'object') {
    loadableOptions = _objectSpread2(_objectSpread2({}, loadableOptions), dynamicOptions);
  }
  // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})
  loadableOptions = _objectSpread2(_objectSpread2({}, loadableOptions), options);
  var loaderFn = loadableOptions.loader;
  var loader = function loader() {
    return loaderFn != null ? loaderFn().then(convertModule) : Promise.resolve(convertModule(function () {
      return null;
    }));
  };
  // coming from build/babel/plugins/react-loadable-plugin.js
  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread2(_objectSpread2({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  }
  // support for disabling server side rendering, eg: dynamic(() => import('../hello-world'), {ssr: false}).
  if (typeof loadableOptions.ssr === 'boolean' && !loadableOptions.ssr) {
    delete loadableOptions.webpack;
    delete loadableOptions.modules;
    return _noSSR(loadableFn, loadableOptions);
  }
  return loadableFn(_objectSpread2(_objectSpread2({}, loadableOptions), {}, {
    loader: loader
  }));
}
if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

var dynamic$3 = /*#__PURE__*/Object.freeze({
  __proto__: null
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(dynamic$3);

var dynamic = require$$0;

var dynamic$1 = /*@__PURE__*/getDefaultExportFromCjs(dynamic);

var createAxiosInstance = function createAxiosInstance(apiUrl) {
  return axios__default.default.create({
    baseURL: apiUrl
  });
};
var createAxiosPrivateInstance = function createAxiosPrivateInstance(apiUrl) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var instance = axios__default.default.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
  });

  // When called server-side with context
  if (ctx) {
    var cookies = nookies.parseCookies(ctx);
    if (cookies.bitUser) {
      try {
        var userData = JSON.parse(cookies.bitUser);
        if (userData.token) {
          instance.defaults.headers.Authorization = "Bearer ".concat(userData.token);
        }
      } catch (error) {
        console.error("Error parsing cookie:", error);
      }
    }
  }
  return instance;
};

var GetAuth = function GetAuth() {
  var ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var cookies = nookies.parseCookies(ctx);
  var userCookies = null;
  if (cookies.bitUser) {
    try {
      userCookies = JSON.parse(cookies.bitUser);
    } catch (error) {
      console.error("Error parsing user cookie:", error);
    }
  }
  return userCookies;
};

var useRefreshToken = function useRefreshToken(apiUrl, refreshUrl) {
  var refresh = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var ctx,
        cookies,
        refresh_token,
        userData,
        axiosInstance,
        response,
        _userData,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            ctx = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
            cookies = nookies.parseCookies(ctx);
            refresh_token = "";
            if (cookies.bitUser) {
              try {
                userData = JSON.parse(cookies.bitUser);
                refresh_token = userData.refresh_token || "";
              } catch (error) {
                console.error("Error parsing user cookie:", error);
              }
            }
            if (refresh_token) {
              _context.next = 6;
              break;
            }
            throw new Error("No refresh token available");
          case 6:
            axiosInstance = createAxiosInstance(apiUrl);
            _context.prev = 7;
            _context.next = 10;
            return axiosInstance.post(refreshUrl, {
              refresh_token: refresh_token
            }, {
              withCredentials: true
            });
          case 10:
            response = _context.sent;
            // Update cookies - works on client-side
            if (typeof window !== "undefined" && cookies.bitUser) {
              try {
                _userData = JSON.parse(cookies.bitUser);
                nookies.setCookie(null, "bitUser", JSON.stringify(_objectSpread2(_objectSpread2({}, _userData), {}, {
                  token: response.data.token
                })), {
                  maxAge: 86400,
                  path: "/"
                });
              } catch (error) {
                console.error("Error updating token in cookie:", error);
              }
            }
            return _context.abrupt("return", response.data);
          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](7);
            console.error("Error refreshing token:", _context.t0);
            throw _context.t0;
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[7, 15]]);
    }));
    return function refresh() {
      return _ref.apply(this, arguments);
    };
  }();
  return refresh;
};

var useAxiosPrivate = function useAxiosPrivate(apiUrl, refreshUrl) {
  var router$1 = router.useRouter();
  var refresh = useRefreshToken(apiUrl, refreshUrl);
  var axiosPrivate = createAxiosPrivateInstance(apiUrl);
  React.useEffect(function () {
    var requestIntercept = axiosPrivate.interceptors.request.use(function (config) {
      // If no Authorization header is set, try to add it from cookies
      if (!config.headers["Authorization"]) {
        var cookies = nookies.parseCookies();
        if (cookies.bitUser) {
          try {
            var userData = JSON.parse(cookies.bitUser);
            if (userData.token) {
              config.headers["Authorization"] = "Bearer ".concat(userData.token);
            }
          } catch (error) {
            console.error("Error reading token from cookie:", error);
          }
        }
      }
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    var responseIntercept = axiosPrivate.interceptors.response.use(function (response) {
      return response;
    }, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(error) {
        var _error$response;
        var prevRequest, refreshData, cookies, userData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              prevRequest = error === null || error === void 0 ? void 0 : error.config;
              if (!((error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 401 && !(prevRequest !== null && prevRequest !== void 0 && prevRequest.sent))) {
                _context.next = 19;
                break;
              }
              prevRequest.sent = true;
              _context.prev = 3;
              _context.next = 6;
              return refresh();
            case 6:
              refreshData = _context.sent;
              if (!(refreshData !== null && refreshData !== void 0 && refreshData.token)) {
                _context.next = 12;
                break;
              }
              // Update the cookies
              cookies = nookies.parseCookies();
              if (cookies.bitUser) {
                try {
                  userData = JSON.parse(cookies.bitUser);
                  nookies.setCookie(null, "bitUser", JSON.stringify(_objectSpread2(_objectSpread2({}, userData), {}, {
                    token: refreshData.token
                  })), {
                    maxAge: 86400,
                    path: "/"
                  });
                } catch (error) {
                  console.error("Error updating token in cookie:", error);
                }
              }

              // Update the Authorization header
              prevRequest.headers["Authorization"] = "Bearer ".concat(refreshData.token);
              return _context.abrupt("return", axiosPrivate(prevRequest));
            case 12:
              _context.next = 19;
              break;
            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](3);
              console.error("Token refresh error:", _context.t0);
              // Redirect to login if token refresh fails
              router$1.push("/login");
              return _context.abrupt("return", Promise.reject(_context.t0));
            case 19:
              return _context.abrupt("return", Promise.reject(error));
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 14]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    return function () {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [apiUrl, refresh, router$1]);
  return axiosPrivate;
};

var UserDataMapper = /*#__PURE__*/function () {
  function UserDataMapper(response) {
    _classCallCheck(this, UserDataMapper);
    this.user_id = response.id;
    this.user_roles = response.roles;
  }
  return _createClass(UserDataMapper, null, [{
    key: "map",
    value: function map(data) {
      var response = new UserDataMapper(data);
      return response;
    }
  }]);
}();

var useGetUserData = function useGetUserData(apiUrl, getUserDataUrl) {
  var axiosPrivate = useAxiosPrivate(apiUrl, "api/token/refresh");

  // For client-side use with auth header
  var fetchUserDataWithAuth = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(token) {
      var axiosInstance, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            axiosInstance = createAxiosInstance(apiUrl);
            _context.next = 4;
            return axiosInstance.get(getUserDataUrl, {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            });
          case 4:
            response = _context.sent;
            return _context.abrupt("return", UserDataMapper.map(response.data));
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error("Error fetching user data:", _context.t0);
            throw _context.t0;
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function fetchUserDataWithAuth(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  // For authenticated requests using interceptor
  var fetchUserData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return axiosPrivate.get(getUserDataUrl);
          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", UserDataMapper.map(response.data));
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error("Error fetching user data:", _context2.t0);
            throw _context2.t0;
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function fetchUserData() {
      return _ref2.apply(this, arguments);
    };
  }();
  return {
    fetchUserData: fetchUserData,
    fetchUserDataWithAuth: fetchUserDataWithAuth
  };
};

var useLogout = function useLogout(apiUrl) {
  var logoutUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var router$1 = router.useRouter();
  var axiosInstance = createAxiosInstance(apiUrl);
  var logout = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var redirectPath,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            redirectPath = _args.length > 0 && _args[0] !== undefined ? _args[0] : "/login";
            // Remove cookies
            nookies.destroyCookie(null, "bitUser", {
              path: "/"
            });
            nookies.destroyCookie(null, "bitUserData", {
              path: "/"
            });

            // Optional API call to invalidate token on server
            if (!logoutUrl) {
              _context.next = 12;
              break;
            }
            _context.prev = 4;
            _context.next = 7;
            return axiosInstance.post(logoutUrl, {}, {
              withCredentials: true
            });
          case 7:
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](4);
            console.error("Error during logout:", _context.t0);
            // Continue with client-side logout even if server request fails
          case 12:
            // Redirect to login page
            if (redirectPath) {
              router$1.push(redirectPath);
            }
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 9]]);
    }));
    return function logout() {
      return _ref.apply(this, arguments);
    };
  }();
  return logout;
};

var UserAuthMapper = /*#__PURE__*/function () {
  function UserAuthMapper(response) {
    _classCallCheck(this, UserAuthMapper);
    this.user_id = response.user_id;
    this.user_roles = response.user_roles;
    this.token = response.token;
    this.refresh_token = response.refresh_token;
  }
  return _createClass(UserAuthMapper, null, [{
    key: "map",
    value: function map(data) {
      var response = new UserAuthMapper(data);
      return response;
    }
  }]);
}();

var DynamicForm = dynamic$1(function () {
  return import('FE-utils').then(function (mod) {
    return mod.DynamicForm;
  });
}, {
  ssr: false
});
var Login = function Login(_ref) {
  var children = _ref.children,
    loginSuccess = _ref.loginSuccess,
    cookiesAge = _ref.cookiesAge,
    apiUrl = _ref.apiUrl,
    loginUrl = _ref.loginUrl,
    getUserDataUrl = _ref.getUserDataUrl,
    _ref$redirectPath = _ref.redirectPath,
    redirectPath = _ref$redirectPath === void 0 ? "/dashboard" : _ref$redirectPath;
  var router$1 = router.useRouter();
  var _useGetUserData = useGetUserData(apiUrl, getUserDataUrl),
    fetchUserDataWithAuth = _useGetUserData.fetchUserDataWithAuth;
  var axiosInstance = createAxiosInstance(apiUrl);
  var errRef = React.useRef();
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loginLoading = _useState2[0],
    setLoginLoading = _useState2[1];
  var _useState3 = React.useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    errMsg = _useState4[0],
    setErrMsg = _useState4[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(formData) {
      var email, password, response, authData, userData, returnUrl, _err$response, _err$response2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoginLoading(true);
            email = formData.email, password = formData.password;
            _context.prev = 2;
            _context.next = 5;
            return axiosInstance.post(loginUrl, JSON.stringify({
              email: email,
              password: password
            }), {
              headers: {
                "Content-Type": "application/json"
              },
              withCredentials: true
            });
          case 5:
            response = _context.sent;
            authData = UserAuthMapper.map(response.data); // Set cookies using nookies
            nookies.setCookie(null, "bitUser", JSON.stringify(_objectSpread2({}, authData)), {
              path: "/",
              maxAge: cookiesAge,
              secure: process.env.NODE_ENV === "production",
              sameSite: "lax"
            });

            // Fetch user data
            _context.next = 10;
            return fetchUserDataWithAuth(authData.token);
          case 10:
            userData = _context.sent;
            nookies.setCookie(null, "bitUserData", JSON.stringify(_objectSpread2({}, userData)), {
              path: "/",
              maxAge: cookiesAge,
              secure: process.env.NODE_ENV === "production",
              sameSite: "lax"
            });

            // Handle successful login
            if (loginSuccess) {
              loginSuccess(authData);
            } else {
              // Use Next.js router to redirect
              returnUrl = router$1.query.returnUrl || redirectPath;
              router$1.push(returnUrl);
            }
            _context.next = 20;
            break;
          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](2);
            console.error("Login error:", _context.t0);
            if (!(_context.t0 !== null && _context.t0 !== void 0 && _context.t0.response)) {
              setErrMsg("No server response");
            } else if (((_err$response = _context.t0.response) === null || _err$response === void 0 ? void 0 : _err$response.status) === 400) {
              setErrMsg("Missing Email or Password");
            } else if (((_err$response2 = _context.t0.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.status) === 401) {
              setErrMsg("Unauthorized");
            } else {
              setErrMsg("Login failed");
            }
            if (errRef.current) {
              errRef.current.focus();
            }
          case 20:
            _context.prev = 20;
            setLoginLoading(false);
            return _context.finish(20);
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 15, 20, 23]]);
    }));
    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var loginFormData = {
    formTitle: "",
    formSections: [{
      sectionName: "",
      formFields: [{
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email",
        validations: {
          required: "This input is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please insert a valid email"
          }
        },
        initialValue: ""
      }, {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        validations: {
          required: "This input is required"
        },
        initialValue: ""
      }, {
        name: "rememberMe",
        label: "Remember me",
        type: "checkbox",
        placeholder: "",
        initialValue: ""
      }]
    }]
  };
  return /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, /*#__PURE__*/React__default.default.createElement("div", {
    className: "bit bit-login"
  }, children, errMsg && /*#__PURE__*/React__default.default.createElement("p", {
    ref: errRef,
    className: "error-message",
    "aria-live": "assertive"
  }, errMsg), /*#__PURE__*/React__default.default.createElement(DynamicForm, {
    formData: loginFormData,
    submitData: handleSubmit
  }, /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, /*#__PURE__*/React__default.default.createElement("a", {
    href: "#",
    className: "forgot-password"
  }, "Forgot Password ?"), loginLoading ? /*#__PURE__*/React__default.default.createElement("button", {
    disabled: true,
    className: "btn btn-primary"
  }, "Signing you in ...") : /*#__PURE__*/React__default.default.createElement("button", {
    className: "btn btn-primary"
  }, "Sign In")))));
};

___$insertStylesToHeader("");

var Register = function Register(_ref) {
  var children = _ref.children,
    registerSuccess = _ref.registerSuccess,
    apiUrl = _ref.apiUrl,
    _ref$registerUrl = _ref.registerUrl,
    registerUrl = _ref$registerUrl === void 0 ? "/register" : _ref$registerUrl,
    formData = _ref.formData,
    _ref$redirectPath = _ref.redirectPath,
    redirectPath = _ref$redirectPath === void 0 ? "/login" : _ref$redirectPath;
  var router$1 = router.useRouter();
  var axiosInstance = createAxiosInstance(apiUrl);
  var errRef = React.useRef();
  var _useState = React.useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    errMsg = _useState2[0],
    setErrMsg = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    registering = _useState4[0],
    setRegistering = _useState4[1];
  var submitData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(formData) {
      var response, _err$response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setRegistering(true);
            _context.prev = 1;
            _context.next = 4;
            return axiosInstance.post(registerUrl, JSON.stringify(_objectSpread2({}, formData)), {
              headers: {
                "Content-Type": "application/json"
              },
              withCredentials: true
            });
          case 4:
            response = _context.sent;
            if (registerSuccess) {
              registerSuccess(response.data);
            } else {
              // Use Next.js router to redirect
              router$1.push(redirectPath);
            }
            _context.next = 12;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            if (!(_context.t0 !== null && _context.t0 !== void 0 && _context.t0.response)) {
              setErrMsg("No Server Response");
            } else if (((_err$response = _context.t0.response) === null || _err$response === void 0 ? void 0 : _err$response.status) === 409) {
              setErrMsg("Email Already Taken");
            } else {
              setErrMsg("Registration Failed");
            }
            if (errRef.current) {
              errRef.current.focus();
            }
          case 12:
            _context.prev = 12;
            setRegistering(false);
            return _context.finish(12);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8, 12, 15]]);
    }));
    return function submitData(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React__default.default.createElement("div", {
    className: "bit bit-register"
  }, errMsg && /*#__PURE__*/React__default.default.createElement("p", {
    ref: errRef,
    className: "error-message",
    "aria-live": "assertive"
  }, errMsg), /*#__PURE__*/React__default.default.createElement(FEUtils.DynamicForm, {
    formData: formData,
    submitData: submitData
  }, registering ? /*#__PURE__*/React__default.default.createElement("button", {
    disabled: true,
    className: "btn btn-primary"
  }, "Registering...") : children));
};

exports.GetAuth = GetAuth;
exports.Login = Login;
exports.Register = Register;
exports.createAxiosInstance = createAxiosInstance;
exports.createAxiosPrivateInstance = createAxiosPrivateInstance;
exports.useAxiosPrivate = useAxiosPrivate;
exports.useLogout = useLogout;
exports.useRefreshToken = useRefreshToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljLmpzIiwiLi4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcyIsIi4uL3NyYy9hcGkvYXhpb3MuanMiLCIuLi9zcmMvaG9va3MvZ2V0QXV0aC5qcyIsIi4uL3NyYy9ob29rcy91c2VSZWZyZXNoVG9rZW4uanMiLCIuLi9zcmMvaG9va3MvdXNlQXhpb3NQcml2YXRlLmpzIiwiLi4vc3JjL2RhdGEvdXNlckRhdGFNYXBwZXIuanMiLCIuLi9zcmMvaG9va3MvdXNlR2V0VXNlckRhdGEuanMiLCIuLi9zcmMvaG9va3MvdXNlTG9nb3V0LmpzIiwiLi4vc3JjL2RhdGEvdXNlckF1dGhNYXBwZXIuanMiLCIuLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9SZWdpc3Rlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0OiBudWxsLFxuICAgIG5vU1NSOiBudWxsXG59KTtcbmZ1bmN0aW9uIF9leHBvcnQodGFyZ2V0LCBhbGwpIHtcbiAgICBmb3IodmFyIG5hbWUgaW4gYWxsKU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBhbGxbbmFtZV1cbiAgICB9KTtcbn1cbl9leHBvcnQoZXhwb3J0cywge1xuICAgIC8qKlxuICogVGhpcyBmdW5jdGlvbiBsZXRzIHlvdSBkeW5hbWljYWxseSBpbXBvcnQgYSBjb21wb25lbnQuXG4gKiBJdCB1c2VzIFtSZWFjdC5sYXp5KCldKGh0dHBzOi8vcmVhY3QuZGV2L3JlZmVyZW5jZS9yZWFjdC9sYXp5KSB3aXRoIFtTdXNwZW5zZV0oaHR0cHM6Ly9yZWFjdC5kZXYvcmVmZXJlbmNlL3JlYWN0L1N1c3BlbnNlKSB1bmRlciB0aGUgaG9vZC5cbiAqXG4gKiBSZWFkIG1vcmU6IFtOZXh0LmpzIERvY3M6IGBuZXh0L2R5bmFtaWNgXShodHRwczovL25leHRqcy5vcmcvZG9jcy9hcHAvYnVpbGRpbmcteW91ci1hcHBsaWNhdGlvbi9vcHRpbWl6aW5nL2xhenktbG9hZGluZyNuZXh0ZHluYW1pYylcbiAqLyBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGR5bmFtaWM7XG4gICAgfSxcbiAgICBub1NTUjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBub1NTUjtcbiAgICB9XG59KTtcbmNvbnN0IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvXy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHRcIik7XG5jb25zdCBfanN4cnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IF9yZWFjdCA9IC8qI19fUFVSRV9fKi8gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0Ll8ocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IF9sb2FkYWJsZXNoYXJlZHJ1bnRpbWUgPSAvKiNfX1BVUkVfXyovIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5fKHJlcXVpcmUoXCIuL2xvYWRhYmxlLnNoYXJlZC1ydW50aW1lXCIpKTtcbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuLy8gTm9ybWFsaXplIGxvYWRlciB0byByZXR1cm4gdGhlIG1vZHVsZSBhcyBmb3JtIHsgZGVmYXVsdDogQ29tcG9uZW50IH0gZm9yIGBSZWFjdC5sYXp5YC5cbi8vIEFsc28gZm9yIGJhY2t3YXJkIGNvbXBhdGlibGUgc2luY2UgbmV4dC9keW5hbWljIGFsbG93cyB0byByZXNvbHZlIGEgY29tcG9uZW50IGRpcmVjdGx5IHdpdGggbG9hZGVyXG4vLyBDbGllbnQgY29tcG9uZW50IHJlZmVyZW5jZSBwcm94eSBuZWVkIHRvIGJlIGNvbnZlcnRlZCB0byBhIG1vZHVsZS5cbmZ1bmN0aW9uIGNvbnZlcnRNb2R1bGUobW9kKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVmYXVsdDogKG1vZCA9PSBudWxsID8gdm9pZCAwIDogbW9kLmRlZmF1bHQpIHx8IG1vZFxuICAgIH07XG59XG5mdW5jdGlvbiBub1NTUihMb2FkYWJsZUluaXRpYWxpemVyLCBsb2FkYWJsZU9wdGlvbnMpIHtcbiAgICAvLyBSZW1vdmluZyB3ZWJwYWNrIGFuZCBtb2R1bGVzIG1lYW5zIHJlYWN0LWxvYWRhYmxlIHdvbid0IHRyeSBwcmVsb2FkaW5nXG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy53ZWJwYWNrO1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubW9kdWxlcztcbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IHJlYWN0LWxvYWRhYmxlIGZyb20gaW5pdGlhbGl6aW5nIG9uIHRoZSBzZXJ2ZXJcbiAgICBpZiAoIWlzU2VydmVyU2lkZSkge1xuICAgICAgICByZXR1cm4gTG9hZGFibGVJbml0aWFsaXplcihsb2FkYWJsZU9wdGlvbnMpO1xuICAgIH1cbiAgICBjb25zdCBMb2FkaW5nID0gbG9hZGFibGVPcHRpb25zLmxvYWRpbmc7XG4gICAgLy8gVGhpcyB3aWxsIG9ubHkgYmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlciBzaWRlXG4gICAgcmV0dXJuICgpPT4vKiNfX1BVUkVfXyovICgwLCBfanN4cnVudGltZS5qc3gpKExvYWRpbmcsIHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9KTtcbn1cbmZ1bmN0aW9uIGR5bmFtaWMoZHluYW1pY09wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBsZXQgbG9hZGFibGVGbiA9IF9sb2FkYWJsZXNoYXJlZHJ1bnRpbWUuZGVmYXVsdDtcbiAgICBsZXQgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxuICAgICAgICBsb2FkaW5nOiAocGFyYW0pPT57XG4gICAgICAgICAgICBsZXQgeyBlcnJvciwgaXNMb2FkaW5nLCBwYXN0RGVsYXkgfSA9IHBhcmFtO1xuICAgICAgICAgICAgaWYgKCFwYXN0RGVsYXkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gKDAsIF9qc3hydW50aW1lLmpzeHMpKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyojX19QVVJFX18qLyAoMCwgX2pzeHJ1bnRpbWUuanN4KShcImJyXCIsIHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5zdGFja1xuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbiAgICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XG4gICAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gKCk9PmR5bmFtaWNPcHRpb25zO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4uZHluYW1pY09wdGlvbnNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBjb25zdCBsb2FkZXJGbiA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkZXI7XG4gICAgY29uc3QgbG9hZGVyID0gKCk9PmxvYWRlckZuICE9IG51bGwgPyBsb2FkZXJGbigpLnRoZW4oY29udmVydE1vZHVsZSkgOiBQcm9taXNlLnJlc29sdmUoY29udmVydE1vZHVsZSgoKT0+bnVsbCkpO1xuICAgIC8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXG4gICAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWRcbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZDtcbiAgICB9XG4gICAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pLlxuICAgIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nICYmICFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzO1xuICAgICAgICByZXR1cm4gbm9TU1IobG9hZGFibGVGbiwgbG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvYWRhYmxlRm4oe1xuICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgIGxvYWRlcjogbG9hZGVyXG4gICAgfSk7XG59XG5cbmlmICgodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cy5kZWZhdWx0ICE9PSBudWxsKSkgJiYgdHlwZW9mIGV4cG9ydHMuZGVmYXVsdC5fX2VzTW9kdWxlID09PSAndW5kZWZpbmVkJykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cy5kZWZhdWx0LCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gIE9iamVjdC5hc3NpZ24oZXhwb3J0cy5kZWZhdWx0LCBleHBvcnRzKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWMuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljJylcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XG5cbmNvbnN0IGNyZWF0ZUF4aW9zSW5zdGFuY2UgPSAoYXBpVXJsKSA9PiB7XG4gIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IGFwaVVybCxcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVBeGlvc1ByaXZhdGVJbnN0YW5jZSA9IChhcGlVcmwsIGN0eCA9IG51bGwpID0+IHtcbiAgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IGFwaVVybCxcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICB9KTtcblxuICAvLyBXaGVuIGNhbGxlZCBzZXJ2ZXItc2lkZSB3aXRoIGNvbnRleHRcbiAgaWYgKGN0eCkge1xuICAgIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoY3R4KTtcbiAgICBpZiAoY29va2llcy5iaXRVc2VyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UoY29va2llcy5iaXRVc2VyKTtcbiAgICAgICAgaWYgKHVzZXJEYXRhLnRva2VuKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3VzZXJEYXRhLnRva2VufWA7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIGNvb2tpZTpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbnN0YW5jZTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUF4aW9zSW5zdGFuY2UsIGNyZWF0ZUF4aW9zUHJpdmF0ZUluc3RhbmNlIH07XG4iLCJpbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xuXG5jb25zdCBHZXRBdXRoID0gKGN0eCA9IG51bGwpID0+IHtcbiAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhjdHgpO1xuICBsZXQgdXNlckNvb2tpZXMgPSBudWxsO1xuXG4gIGlmIChjb29raWVzLmJpdFVzZXIpIHtcbiAgICB0cnkge1xuICAgICAgdXNlckNvb2tpZXMgPSBKU09OLnBhcnNlKGNvb2tpZXMuYml0VXNlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIHVzZXIgY29va2llOlwiLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVzZXJDb29raWVzO1xufTtcblxuZXhwb3J0IHsgR2V0QXV0aCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQXhpb3NJbnN0YW5jZSB9IGZyb20gXCIuLi9hcGkvYXhpb3NcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcywgc2V0Q29va2llIH0gZnJvbSBcIm5vb2tpZXNcIjtcblxuY29uc3QgdXNlUmVmcmVzaFRva2VuID0gKGFwaVVybCwgcmVmcmVzaFVybCkgPT4ge1xuICBjb25zdCByZWZyZXNoID0gYXN5bmMgKGN0eCA9IG51bGwpID0+IHtcbiAgICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKGN0eCk7XG4gICAgbGV0IHJlZnJlc2hfdG9rZW4gPSBcIlwiO1xuXG4gICAgaWYgKGNvb2tpZXMuYml0VXNlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGNvb2tpZXMuYml0VXNlcik7XG4gICAgICAgIHJlZnJlc2hfdG9rZW4gPSB1c2VyRGF0YS5yZWZyZXNoX3Rva2VuIHx8IFwiXCI7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcGFyc2luZyB1c2VyIGNvb2tpZTpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcmVmcmVzaF90b2tlbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVmcmVzaCB0b2tlbiBhdmFpbGFibGVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGNyZWF0ZUF4aW9zSW5zdGFuY2UoYXBpVXJsKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UucG9zdChcbiAgICAgICAgcmVmcmVzaFVybCxcbiAgICAgICAge1xuICAgICAgICAgIHJlZnJlc2hfdG9rZW4sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIC8vIFVwZGF0ZSBjb29raWVzIC0gd29ya3Mgb24gY2xpZW50LXNpZGVcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIGNvb2tpZXMuYml0VXNlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShjb29raWVzLmJpdFVzZXIpO1xuICAgICAgICAgIHNldENvb2tpZShcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBcImJpdFVzZXJcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgLi4udXNlckRhdGEsXG4gICAgICAgICAgICAgIHRva2VuOiByZXNwb25zZS5kYXRhLnRva2VuLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1heEFnZTogODY0MDAsXG4gICAgICAgICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIHRva2VuIGluIGNvb2tpZTpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVmcmVzaGluZyB0b2tlbjpcIiwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiByZWZyZXNoO1xufTtcblxuZXhwb3J0IHsgdXNlUmVmcmVzaFRva2VuIH07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUF4aW9zUHJpdmF0ZUluc3RhbmNlIH0gZnJvbSBcIi4uL2FwaS9heGlvc1wiO1xuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBzZXRDb29raWUgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IHsgdXNlUmVmcmVzaFRva2VuIH0gZnJvbSBcIi4vdXNlUmVmcmVzaFRva2VuXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgdXNlQXhpb3NQcml2YXRlID0gKGFwaVVybCwgcmVmcmVzaFVybCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcmVmcmVzaCA9IHVzZVJlZnJlc2hUb2tlbihhcGlVcmwsIHJlZnJlc2hVcmwpO1xuICBjb25zdCBheGlvc1ByaXZhdGUgPSBjcmVhdGVBeGlvc1ByaXZhdGVJbnN0YW5jZShhcGlVcmwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdEludGVyY2VwdCA9IGF4aW9zUHJpdmF0ZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gICAgICAoY29uZmlnKSA9PiB7XG4gICAgICAgIC8vIElmIG5vIEF1dGhvcml6YXRpb24gaGVhZGVyIGlzIHNldCwgdHJ5IHRvIGFkZCBpdCBmcm9tIGNvb2tpZXNcbiAgICAgICAgaWYgKCFjb25maWcuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0pIHtcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKCk7XG4gICAgICAgICAgaWYgKGNvb2tpZXMuYml0VXNlcikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGNvb2tpZXMuYml0VXNlcik7XG4gICAgICAgICAgICAgIGlmICh1c2VyRGF0YS50b2tlbikge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHt1c2VyRGF0YS50b2tlbn1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVhZGluZyB0b2tlbiBmcm9tIGNvb2tpZTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlSW50ZXJjZXB0ID0gYXhpb3NQcml2YXRlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gICAgICAocmVzcG9uc2UpID0+IHJlc3BvbnNlLFxuICAgICAgYXN5bmMgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZSZXF1ZXN0ID0gZXJyb3I/LmNvbmZpZztcbiAgICAgICAgaWYgKGVycm9yPy5yZXNwb25zZT8uc3RhdHVzID09PSA0MDEgJiYgIXByZXZSZXF1ZXN0Py5zZW50KSB7XG4gICAgICAgICAgcHJldlJlcXVlc3Quc2VudCA9IHRydWU7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVmcmVzaERhdGEgPSBhd2FpdCByZWZyZXNoKCk7XG5cbiAgICAgICAgICAgIGlmIChyZWZyZXNoRGF0YT8udG9rZW4pIHtcbiAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjb29raWVzXG4gICAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoKTtcbiAgICAgICAgICAgICAgaWYgKGNvb2tpZXMuYml0VXNlcikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UoY29va2llcy5iaXRVc2VyKTtcbiAgICAgICAgICAgICAgICAgIHNldENvb2tpZShcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJiaXRVc2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi51c2VyRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogcmVmcmVzaERhdGEudG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbWF4QWdlOiA4NjQwMCxcbiAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIHRva2VuIGluIGNvb2tpZTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgcHJldlJlcXVlc3QuaGVhZGVyc1tcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIlxuICAgICAgICAgICAgICBdID0gYEJlYXJlciAke3JlZnJlc2hEYXRhLnRva2VufWA7XG4gICAgICAgICAgICAgIHJldHVybiBheGlvc1ByaXZhdGUocHJldlJlcXVlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVG9rZW4gcmVmcmVzaCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gbG9naW4gaWYgdG9rZW4gcmVmcmVzaCBmYWlsc1xuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYXhpb3NQcml2YXRlLmludGVyY2VwdG9ycy5yZXF1ZXN0LmVqZWN0KHJlcXVlc3RJbnRlcmNlcHQpO1xuICAgICAgYXhpb3NQcml2YXRlLmludGVyY2VwdG9ycy5yZXNwb25zZS5lamVjdChyZXNwb25zZUludGVyY2VwdCk7XG4gICAgfTtcbiAgfSwgW2FwaVVybCwgcmVmcmVzaCwgcm91dGVyXSk7XG5cbiAgcmV0dXJuIGF4aW9zUHJpdmF0ZTtcbn07XG5cbmV4cG9ydCB7IHVzZUF4aW9zUHJpdmF0ZSB9O1xuIiwiZXhwb3J0IGNsYXNzIFVzZXJEYXRhTWFwcGVyIHtcbiAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICB0aGlzLnVzZXJfaWQgPSByZXNwb25zZS5pZDtcbiAgICB0aGlzLnVzZXJfcm9sZXMgPSByZXNwb25zZS5yb2xlcztcbiAgfVxuXG4gIHN0YXRpYyBtYXAoZGF0YSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gbmV3IFVzZXJEYXRhTWFwcGVyKGRhdGEpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdXNlQXhpb3NQcml2YXRlIH0gZnJvbSBcIi4vdXNlQXhpb3NQcml2YXRlXCI7XG5pbXBvcnQgeyBVc2VyRGF0YU1hcHBlciB9IGZyb20gXCIuLi9kYXRhL3VzZXJEYXRhTWFwcGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVBeGlvc0luc3RhbmNlIH0gZnJvbSBcIi4uL2FwaS9heGlvc1wiO1xuXG5jb25zdCB1c2VHZXRVc2VyRGF0YSA9IChhcGlVcmwsIGdldFVzZXJEYXRhVXJsKSA9PiB7XG4gIGNvbnN0IGF4aW9zUHJpdmF0ZSA9IHVzZUF4aW9zUHJpdmF0ZShhcGlVcmwsIFwiYXBpL3Rva2VuL3JlZnJlc2hcIik7XG5cbiAgLy8gRm9yIGNsaWVudC1zaWRlIHVzZSB3aXRoIGF1dGggaGVhZGVyXG4gIGNvbnN0IGZldGNoVXNlckRhdGFXaXRoQXV0aCA9IGFzeW5jICh0b2tlbikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBheGlvc0luc3RhbmNlID0gY3JlYXRlQXhpb3NJbnN0YW5jZShhcGlVcmwpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0luc3RhbmNlLmdldChnZXRVc2VyRGF0YVVybCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFVzZXJEYXRhTWFwcGVyLm1hcChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9O1xuXG4gIC8vIEZvciBhdXRoZW50aWNhdGVkIHJlcXVlc3RzIHVzaW5nIGludGVyY2VwdG9yXG4gIGNvbnN0IGZldGNoVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NQcml2YXRlLmdldChnZXRVc2VyRGF0YVVybCk7XG4gICAgICByZXR1cm4gVXNlckRhdGFNYXBwZXIubWFwKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlciBkYXRhOlwiLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgZmV0Y2hVc2VyRGF0YSwgZmV0Y2hVc2VyRGF0YVdpdGhBdXRoIH07XG59O1xuXG5leHBvcnQgeyB1c2VHZXRVc2VyRGF0YSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQXhpb3NJbnN0YW5jZSB9IGZyb20gXCIuLi9hcGlcIjtcbmltcG9ydCB7IGRlc3Ryb3lDb29raWUgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IHVzZUxvZ291dCA9IChhcGlVcmwsIGxvZ291dFVybCA9IG51bGwpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBjcmVhdGVBeGlvc0luc3RhbmNlKGFwaVVybCk7XG5cbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKHJlZGlyZWN0UGF0aCA9IFwiL2xvZ2luXCIpID0+IHtcbiAgICAvLyBSZW1vdmUgY29va2llc1xuICAgIGRlc3Ryb3lDb29raWUobnVsbCwgXCJiaXRVc2VyXCIsIHsgcGF0aDogXCIvXCIgfSk7XG4gICAgZGVzdHJveUNvb2tpZShudWxsLCBcImJpdFVzZXJEYXRhXCIsIHsgcGF0aDogXCIvXCIgfSk7XG5cbiAgICAvLyBPcHRpb25hbCBBUEkgY2FsbCB0byBpbnZhbGlkYXRlIHRva2VuIG9uIHNlcnZlclxuICAgIGlmIChsb2dvdXRVcmwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGF4aW9zSW5zdGFuY2UucG9zdChcbiAgICAgICAgICBsb2dvdXRVcmwsXG4gICAgICAgICAge30sXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkdXJpbmcgbG9nb3V0OlwiLCBlcnJvcik7XG4gICAgICAgIC8vIENvbnRpbnVlIHdpdGggY2xpZW50LXNpZGUgbG9nb3V0IGV2ZW4gaWYgc2VydmVyIHJlcXVlc3QgZmFpbHNcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWRpcmVjdCB0byBsb2dpbiBwYWdlXG4gICAgaWYgKHJlZGlyZWN0UGF0aCkge1xuICAgICAgcm91dGVyLnB1c2gocmVkaXJlY3RQYXRoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxvZ291dDtcbn07XG5cbmV4cG9ydCB7IHVzZUxvZ291dCB9O1xuIiwiZXhwb3J0IGNsYXNzIFVzZXJBdXRoTWFwcGVyIHtcbiAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICB0aGlzLnVzZXJfaWQgPSByZXNwb25zZS51c2VyX2lkO1xuICAgIHRoaXMudXNlcl9yb2xlcyA9IHJlc3BvbnNlLnVzZXJfcm9sZXM7XG4gICAgdGhpcy50b2tlbiA9IHJlc3BvbnNlLnRva2VuO1xuICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IHJlc3BvbnNlLnJlZnJlc2hfdG9rZW47XG4gIH1cblxuICBzdGF0aWMgbWFwKGRhdGEpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IG5ldyBVc2VyQXV0aE1hcHBlcihkYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBcIi4uL3N0eWxlL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgc2V0Q29va2llIH0gZnJvbSBcIm5vb2tpZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUF4aW9zSW5zdGFuY2UgfSBmcm9tIFwiLi4vYXBpL2F4aW9zXCI7XG5pbXBvcnQgeyB1c2VHZXRVc2VyRGF0YSB9IGZyb20gXCIuLi9ob29rc1wiO1xuXG5jb25zdCBEeW5hbWljRm9ybSA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydChcIkZFLXV0aWxzXCIpLnRoZW4oKG1vZCkgPT4gbW9kLkR5bmFtaWNGb3JtKSxcbiAgeyBzc3I6IGZhbHNlIH1cbik7XG5cbmltcG9ydCB7IFVzZXJBdXRoTWFwcGVyIH0gZnJvbSBcIi4uL2RhdGEvdXNlckF1dGhNYXBwZXJcIjtcblxuY29uc3QgTG9naW4gPSAoe1xuICBjaGlsZHJlbixcbiAgbG9naW5TdWNjZXNzLFxuICBjb29raWVzQWdlLFxuICBhcGlVcmwsXG4gIGxvZ2luVXJsLFxuICBnZXRVc2VyRGF0YVVybCxcbiAgcmVkaXJlY3RQYXRoID0gXCIvZGFzaGJvYXJkXCIsXG59KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGZldGNoVXNlckRhdGFXaXRoQXV0aCB9ID0gdXNlR2V0VXNlckRhdGEoYXBpVXJsLCBnZXRVc2VyRGF0YVVybCk7XG4gIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBjcmVhdGVBeGlvc0luc3RhbmNlKGFwaVVybCk7XG5cbiAgY29uc3QgZXJyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtsb2dpbkxvYWRpbmcsIHNldExvZ2luTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJNc2csIHNldEVyck1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZm9ybURhdGEpID0+IHtcbiAgICBzZXRMb2dpbkxvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGZvcm1EYXRhO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UucG9zdChcbiAgICAgICAgbG9naW5VcmwsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgY29uc3QgYXV0aERhdGEgPSBVc2VyQXV0aE1hcHBlci5tYXAocmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgIC8vIFNldCBjb29raWVzIHVzaW5nIG5vb2tpZXNcbiAgICAgIHNldENvb2tpZShudWxsLCBcImJpdFVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoeyAuLi5hdXRoRGF0YSB9KSwge1xuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgbWF4QWdlOiBjb29raWVzQWdlLFxuICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgICB9KTtcblxuICAgICAgLy8gRmV0Y2ggdXNlciBkYXRhXG4gICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IGZldGNoVXNlckRhdGFXaXRoQXV0aChhdXRoRGF0YS50b2tlbik7XG5cbiAgICAgIHNldENvb2tpZShudWxsLCBcImJpdFVzZXJEYXRhXCIsIEpTT04uc3RyaW5naWZ5KHsgLi4udXNlckRhdGEgfSksIHtcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIG1heEFnZTogY29va2llc0FnZSxcbiAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEhhbmRsZSBzdWNjZXNzZnVsIGxvZ2luXG4gICAgICBpZiAobG9naW5TdWNjZXNzKSB7XG4gICAgICAgIGxvZ2luU3VjY2VzcyhhdXRoRGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVc2UgTmV4dC5qcyByb3V0ZXIgdG8gcmVkaXJlY3RcbiAgICAgICAgY29uc3QgcmV0dXJuVXJsID0gcm91dGVyLnF1ZXJ5LnJldHVyblVybCB8fCByZWRpcmVjdFBhdGg7XG4gICAgICAgIHJvdXRlci5wdXNoKHJldHVyblVybCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTG9naW4gZXJyb3I6XCIsIGVycik7XG4gICAgICBpZiAoIWVycj8ucmVzcG9uc2UpIHtcbiAgICAgICAgc2V0RXJyTXNnKFwiTm8gc2VydmVyIHJlc3BvbnNlXCIpO1xuICAgICAgfSBlbHNlIGlmIChlcnIucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgIHNldEVyck1zZyhcIk1pc3NpbmcgRW1haWwgb3IgUGFzc3dvcmRcIik7XG4gICAgICB9IGVsc2UgaWYgKGVyci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgc2V0RXJyTXNnKFwiVW5hdXRob3JpemVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyTXNnKFwiTG9naW4gZmFpbGVkXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXJyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgZXJyUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9naW5Mb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9naW5Gb3JtRGF0YSA9IHtcbiAgICBmb3JtVGl0bGU6IFwiXCIsXG4gICAgZm9ybVNlY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIHNlY3Rpb25OYW1lOiBcIlwiLFxuICAgICAgICBmb3JtRmllbGRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiRW1haWwgQWRkcmVzc1wiLFxuICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgeW91ciBlbWFpbFwiLFxuICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiVGhpcyBpbnB1dCBpcyByZXF1aXJlZFwiLFxuICAgICAgICAgICAgICBwYXR0ZXJuOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIGVtYWlsXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiUGFzc3dvcmRcIixcbiAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIHlvdXIgcGFzc3dvcmRcIixcbiAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlRoaXMgaW5wdXQgaXMgcmVxdWlyZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU6IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInJlbWVtYmVyTWVcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIlJlbWVtYmVyIG1lXCIsXG4gICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIixcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYml0IGJpdC1sb2dpblwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtlcnJNc2cgJiYgKFxuICAgICAgICAgIDxwIHJlZj17ZXJyUmVmfSBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCI+XG4gICAgICAgICAgICB7ZXJyTXNnfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPER5bmFtaWNGb3JtIGZvcm1EYXRhPXtsb2dpbkZvcm1EYXRhfSBzdWJtaXREYXRhPXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvcmdvdC1wYXNzd29yZFwiPlxuICAgICAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQgP1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAge2xvZ2luTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZCBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICBTaWduaW5nIHlvdSBpbiAuLi5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNpZ24gSW48L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvRHluYW1pY0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IExvZ2luIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVBeGlvc0luc3RhbmNlIH0gZnJvbSBcIi4uL2FwaS9heGlvc1wiO1xuaW1wb3J0IFwiRkUtdXRpbHMvZGlzdC9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtIH0gZnJvbSBcIkZFLXV0aWxzXCI7XG5cbmNvbnN0IFJlZ2lzdGVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIHJlZ2lzdGVyU3VjY2VzcyxcbiAgYXBpVXJsLFxuICByZWdpc3RlclVybCA9IFwiL3JlZ2lzdGVyXCIsXG4gIGZvcm1EYXRhLFxuICByZWRpcmVjdFBhdGggPSBcIi9sb2dpblwiLFxufSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGNyZWF0ZUF4aW9zSW5zdGFuY2UoYXBpVXJsKTtcbiAgY29uc3QgZXJyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtlcnJNc2csIHNldEVyck1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlZ2lzdGVyaW5nLCBzZXRSZWdpc3RlcmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc3VibWl0RGF0YSA9IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuICAgIHNldFJlZ2lzdGVyaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UucG9zdChcbiAgICAgICAgcmVnaXN0ZXJVcmwsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgLi4uZm9ybURhdGEgfSksXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBpZiAocmVnaXN0ZXJTdWNjZXNzKSB7XG4gICAgICAgIHJlZ2lzdGVyU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZSBOZXh0LmpzIHJvdXRlciB0byByZWRpcmVjdFxuICAgICAgICByb3V0ZXIucHVzaChyZWRpcmVjdFBhdGgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKCFlcnI/LnJlc3BvbnNlKSB7XG4gICAgICAgIHNldEVyck1zZyhcIk5vIFNlcnZlciBSZXNwb25zZVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwOSkge1xuICAgICAgICBzZXRFcnJNc2coXCJFbWFpbCBBbHJlYWR5IFRha2VuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyTXNnKFwiUmVnaXN0cmF0aW9uIEZhaWxlZFwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVyclJlZi5jdXJyZW50KSB7XG4gICAgICAgIGVyclJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFJlZ2lzdGVyaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJpdCBiaXQtcmVnaXN0ZXJcIj5cbiAgICAgIHtlcnJNc2cgJiYgKFxuICAgICAgICA8cCByZWY9e2VyclJlZn0gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiPlxuICAgICAgICAgIHtlcnJNc2d9XG4gICAgICAgIDwvcD5cbiAgICAgICl9XG4gICAgICA8RHluYW1pY0Zvcm0gZm9ybURhdGE9e2Zvcm1EYXRhfSBzdWJtaXREYXRhPXtzdWJtaXREYXRhfT5cbiAgICAgICAge3JlZ2lzdGVyaW5nID8gKFxuICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICBSZWdpc3RlcmluZy4uLlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICl9XG4gICAgICA8L0R5bmFtaWNGb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IHsgUmVnaXN0ZXIgfTtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiZHluYW1pYyIsIm5vU1NSIiwiaXNTZXJ2ZXJTaWRlIiwid2luZG93IiwiY29udmVydE1vZHVsZSIsIm1vZCIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJsb2FkYWJsZU9wdGlvbnMiLCJ3ZWJwYWNrIiwibW9kdWxlcyIsIkxvYWRpbmciLCJsb2FkaW5nIiwiX2pzeHJ1bnRpbWUiLCJqc3giLCJlcnJvciIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiZHluYW1pY09wdGlvbnMiLCJvcHRpb25zIiwibG9hZGFibGVGbiIsIl9sb2FkYWJsZXNoYXJlZHJ1bnRpbWUiLCJwYXJhbSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImpzeHMiLCJtZXNzYWdlIiwic3RhY2siLCJQcm9taXNlIiwibG9hZGVyIiwiX3R5cGVvZiIsIl9vYmplY3RTcHJlYWQiLCJsb2FkZXJGbiIsInRoZW4iLCJyZXNvbHZlIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiLCJtb2R1bGUiLCJyZXF1aXJlIiwiY3JlYXRlQXhpb3NJbnN0YW5jZSIsImFwaVVybCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImNyZWF0ZUF4aW9zUHJpdmF0ZUluc3RhbmNlIiwiY3R4IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaW5zdGFuY2UiLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIiwiY29va2llcyIsInBhcnNlQ29va2llcyIsImJpdFVzZXIiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsInRva2VuIiwiZGVmYXVsdHMiLCJBdXRob3JpemF0aW9uIiwiY29uY2F0IiwiY29uc29sZSIsIkdldEF1dGgiLCJ1c2VyQ29va2llcyIsInVzZVJlZnJlc2hUb2tlbiIsInJlZnJlc2hVcmwiLCJyZWZyZXNoIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwicmVmcmVzaF90b2tlbiIsImF4aW9zSW5zdGFuY2UiLCJyZXNwb25zZSIsIl91c2VyRGF0YSIsIl9hcmdzIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIkVycm9yIiwicG9zdCIsInNlbnQiLCJzZXRDb29raWUiLCJzdHJpbmdpZnkiLCJkYXRhIiwibWF4QWdlIiwicGF0aCIsImFicnVwdCIsInQwIiwic3RvcCIsImFwcGx5IiwidXNlQXhpb3NQcml2YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXhpb3NQcml2YXRlIiwidXNlRWZmZWN0IiwicmVxdWVzdEludGVyY2VwdCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJyZWplY3QiLCJyZXNwb25zZUludGVyY2VwdCIsIl9lcnJvciRyZXNwb25zZSIsInByZXZSZXF1ZXN0IiwicmVmcmVzaERhdGEiLCJzdGF0dXMiLCJwdXNoIiwiX3giLCJlamVjdCIsIlVzZXJEYXRhTWFwcGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwidXNlcl9pZCIsImlkIiwidXNlcl9yb2xlcyIsInJvbGVzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJtYXAiLCJ1c2VHZXRVc2VyRGF0YSIsImdldFVzZXJEYXRhVXJsIiwiZmV0Y2hVc2VyRGF0YVdpdGhBdXRoIiwiZ2V0IiwiZmV0Y2hVc2VyRGF0YSIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJ1c2VMb2dvdXQiLCJsb2dvdXRVcmwiLCJsb2dvdXQiLCJyZWRpcmVjdFBhdGgiLCJkZXN0cm95Q29va2llIiwiVXNlckF1dGhNYXBwZXIiLCJEeW5hbWljRm9ybSIsIkxvZ2luIiwiY2hpbGRyZW4iLCJsb2dpblN1Y2Nlc3MiLCJjb29raWVzQWdlIiwibG9naW5VcmwiLCJfcmVmJHJlZGlyZWN0UGF0aCIsIl91c2VHZXRVc2VyRGF0YSIsImVyclJlZiIsInVzZVJlZiIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibG9naW5Mb2FkaW5nIiwic2V0TG9naW5Mb2FkaW5nIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlcnJNc2ciLCJzZXRFcnJNc2ciLCJoYW5kbGVTdWJtaXQiLCJmb3JtRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJhdXRoRGF0YSIsInJldHVyblVybCIsIl9lcnIkcmVzcG9uc2UiLCJfZXJyJHJlc3BvbnNlMiIsInNlY3VyZSIsInNhbWVTaXRlIiwicXVlcnkiLCJjdXJyZW50IiwiZm9jdXMiLCJmaW5pc2giLCJsb2dpbkZvcm1EYXRhIiwiZm9ybVRpdGxlIiwiZm9ybVNlY3Rpb25zIiwic2VjdGlvbk5hbWUiLCJmb3JtRmllbGRzIiwibmFtZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsaWRhdGlvbnMiLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJpbml0aWFsVmFsdWUiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsInJlZiIsInN1Ym1pdERhdGEiLCJocmVmIiwiZGlzYWJsZWQiLCJSZWdpc3RlciIsInJlZ2lzdGVyU3VjY2VzcyIsIl9yZWYkcmVnaXN0ZXJVcmwiLCJyZWdpc3RlclVybCIsInJlZ2lzdGVyaW5nIiwic2V0UmVnaXN0ZXJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
