/*!
  web-authentication v1.0.12
  undefined
  Released under the undefined License.
*/
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

import React, { useEffect, useRef, useState } from 'react';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import axios from 'axios';
import { DynamicForm as DynamicForm$1 } from 'FE-utils';

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
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return p;
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
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
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
function _export$1(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}
_export$1(exports, {
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
var _interop_require_default$1 = require("@swc/helpers/_/_interop_require_default");
var _jsxruntime = require("react/jsx-runtime");
/*#__PURE__*/_interop_require_default$1._(require("react"));
var _loadablesharedruntime = /*#__PURE__*/_interop_require_default$1._(require("./loadable.shared-runtime"));
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

var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(dynamic$3);

var dynamic = require$$0$1;

var dynamic$1 = /*@__PURE__*/getDefaultExportFromCjs(dynamic);

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
  Router: function Router() {
    return _router["default"];
  },
  createRouter: function createRouter() {
    return _createRouter;
  },
  // Export the singletonRouter and this is the public API.
  "default": function _default() {
    return _default2;
  },
  makePublicRouterInstance: function makePublicRouterInstance() {
    return _makePublicRouterInstance;
  },
  useRouter: function useRouter() {
    return _useRouter;
  },
  withRouter: function withRouter() {
    return _withrouter["default"];
  }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _react = /*#__PURE__*/_interop_require_default._(require("react"));
var _router = /*#__PURE__*/_interop_require_default._(require("../shared/lib/router/router"));
var _routercontextsharedruntime = require("../shared/lib/router-context.shared-runtime");
var _iserror = /*#__PURE__*/_interop_require_default._(require("../lib/is-error"));
var _withrouter = /*#__PURE__*/_interop_require_default._(require("./with-router"));
var singletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(callback) {
    if (this.router) return callback();
    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(callback);
    }
  }
};
// Create public properties and methods of the router in the singletonRouter
var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState'];
// Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router["default"].events;
  }
});
function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: false,
      configurable: true
    });
  }
  return singletonRouter.router;
}
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  singletonRouter[field] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var router = getRouter();
    return router[field].apply(router, args);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router["default"].events.on(event, function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, args);
        } catch (err) {
          console.error("Error when running the Router event: " + eventField);
          console.error((0, _iserror["default"])(err) ? err.message + "\n" + err.stack : err + '');
        }
      }
    });
  });
});
var _default2 = singletonRouter;
function _useRouter() {
  var router = _react["default"].useContext(_routercontextsharedruntime.RouterContext);
  if (!router) {
    throw Object.defineProperty(new Error('NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted'), "__NEXT_ERROR_CODE", {
      value: "E509",
      enumerable: false,
      configurable: true
    });
  }
  return router;
}
function _createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  singletonRouter.router = _construct(_router["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}
function _makePublicRouterInstance(router) {
  var scopedRouter = router;
  var instance = {};
  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;
      if (_typeof(scopedRouter[property]) === 'object') {
        instance[property] = Object.assign(Array.isArray(scopedRouter[property]) ? [] : {}, scopedRouter[property]) // makes sure query is not stateful
        ;
        continue;
      }
      instance[property] = scopedRouter[property];
    }
    // Events is a static property on the router, the router doesn't have to be initialized to use it
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  instance.events = _router["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return scopedRouter[field].apply(scopedRouter, args);
    };
  });
  return instance;
}
if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

var router$1 = /*#__PURE__*/Object.freeze({
  __proto__: null
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(router$1);

var router = require$$0;

var createAxiosInstance = function createAxiosInstance(apiUrl) {
  return axios.create({
    baseURL: apiUrl
  });
};
var createAxiosPrivateInstance = function createAxiosPrivateInstance(apiUrl) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var instance = axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
  });

  // When called server-side with context
  if (ctx) {
    var cookies = parseCookies(ctx);
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
  var cookies = parseCookies(ctx);
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
            cookies = parseCookies(ctx);
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
                setCookie(null, "bitUser", JSON.stringify(_objectSpread2(_objectSpread2({}, _userData), {}, {
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
  useEffect(function () {
    var requestIntercept = axiosPrivate.interceptors.request.use(function (config) {
      // If no Authorization header is set, try to add it from cookies
      if (!config.headers["Authorization"]) {
        var cookies = parseCookies();
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
              cookies = parseCookies();
              if (cookies.bitUser) {
                try {
                  userData = JSON.parse(cookies.bitUser);
                  setCookie(null, "bitUser", JSON.stringify(_objectSpread2(_objectSpread2({}, userData), {}, {
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
            destroyCookie(null, "bitUser", {
              path: "/"
            });
            destroyCookie(null, "bitUserData", {
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
  var errRef = useRef();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loginLoading = _useState2[0],
    setLoginLoading = _useState2[1];
  var _useState3 = useState(""),
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
            setCookie(null, "bitUser", JSON.stringify(_objectSpread2({}, authData)), {
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
            setCookie(null, "bitUserData", JSON.stringify(_objectSpread2({}, userData)), {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bit bit-login"
  }, children, errMsg && /*#__PURE__*/React.createElement("p", {
    ref: errRef,
    className: "error-message",
    "aria-live": "assertive"
  }, errMsg), /*#__PURE__*/React.createElement(DynamicForm, {
    formData: loginFormData,
    submitData: handleSubmit
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "forgot-password"
  }, "Forgot Password ?"), loginLoading ? /*#__PURE__*/React.createElement("button", {
    disabled: true,
    className: "btn btn-primary"
  }, "Signing you in ...") : /*#__PURE__*/React.createElement("button", {
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
  var errRef = useRef();
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    errMsg = _useState2[0],
    setErrMsg = _useState2[1];
  var _useState3 = useState(false),
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
  return /*#__PURE__*/React.createElement("div", {
    className: "bit bit-register"
  }, errMsg && /*#__PURE__*/React.createElement("p", {
    ref: errRef,
    className: "error-message",
    "aria-live": "assertive"
  }, errMsg), /*#__PURE__*/React.createElement(DynamicForm$1, {
    formData: formData,
    submitData: submitData
  }, registering ? /*#__PURE__*/React.createElement("button", {
    disabled: true,
    className: "btn btn-primary"
  }, "Registering...") : children));
};

export { GetAuth, Login, Register, createAxiosInstance, createAxiosPrivateInstance, useAxiosPrivate, useLogout, useRefreshToken };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljLmpzIiwiLi4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcyIsIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcyIsIi4uL3NyYy9hcGkvYXhpb3MuanMiLCIuLi9zcmMvaG9va3MvZ2V0QXV0aC5qcyIsIi4uL3NyYy9ob29rcy91c2VSZWZyZXNoVG9rZW4uanMiLCIuLi9zcmMvaG9va3MvdXNlQXhpb3NQcml2YXRlLmpzIiwiLi4vc3JjL2RhdGEvdXNlckRhdGFNYXBwZXIuanMiLCIuLi9zcmMvaG9va3MvdXNlR2V0VXNlckRhdGEuanMiLCIuLi9zcmMvaG9va3MvdXNlTG9nb3V0LmpzIiwiLi4vc3JjL2RhdGEvdXNlckF1dGhNYXBwZXIuanMiLCIuLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9SZWdpc3Rlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0OiBudWxsLFxuICAgIG5vU1NSOiBudWxsXG59KTtcbmZ1bmN0aW9uIF9leHBvcnQodGFyZ2V0LCBhbGwpIHtcbiAgICBmb3IodmFyIG5hbWUgaW4gYWxsKU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBhbGxbbmFtZV1cbiAgICB9KTtcbn1cbl9leHBvcnQoZXhwb3J0cywge1xuICAgIC8qKlxuICogVGhpcyBmdW5jdGlvbiBsZXRzIHlvdSBkeW5hbWljYWxseSBpbXBvcnQgYSBjb21wb25lbnQuXG4gKiBJdCB1c2VzIFtSZWFjdC5sYXp5KCldKGh0dHBzOi8vcmVhY3QuZGV2L3JlZmVyZW5jZS9yZWFjdC9sYXp5KSB3aXRoIFtTdXNwZW5zZV0oaHR0cHM6Ly9yZWFjdC5kZXYvcmVmZXJlbmNlL3JlYWN0L1N1c3BlbnNlKSB1bmRlciB0aGUgaG9vZC5cbiAqXG4gKiBSZWFkIG1vcmU6IFtOZXh0LmpzIERvY3M6IGBuZXh0L2R5bmFtaWNgXShodHRwczovL25leHRqcy5vcmcvZG9jcy9hcHAvYnVpbGRpbmcteW91ci1hcHBsaWNhdGlvbi9vcHRpbWl6aW5nL2xhenktbG9hZGluZyNuZXh0ZHluYW1pYylcbiAqLyBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGR5bmFtaWM7XG4gICAgfSxcbiAgICBub1NTUjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBub1NTUjtcbiAgICB9XG59KTtcbmNvbnN0IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvXy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHRcIik7XG5jb25zdCBfanN4cnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbmNvbnN0IF9yZWFjdCA9IC8qI19fUFVSRV9fKi8gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0Ll8ocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IF9sb2FkYWJsZXNoYXJlZHJ1bnRpbWUgPSAvKiNfX1BVUkVfXyovIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5fKHJlcXVpcmUoXCIuL2xvYWRhYmxlLnNoYXJlZC1ydW50aW1lXCIpKTtcbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuLy8gTm9ybWFsaXplIGxvYWRlciB0byByZXR1cm4gdGhlIG1vZHVsZSBhcyBmb3JtIHsgZGVmYXVsdDogQ29tcG9uZW50IH0gZm9yIGBSZWFjdC5sYXp5YC5cbi8vIEFsc28gZm9yIGJhY2t3YXJkIGNvbXBhdGlibGUgc2luY2UgbmV4dC9keW5hbWljIGFsbG93cyB0byByZXNvbHZlIGEgY29tcG9uZW50IGRpcmVjdGx5IHdpdGggbG9hZGVyXG4vLyBDbGllbnQgY29tcG9uZW50IHJlZmVyZW5jZSBwcm94eSBuZWVkIHRvIGJlIGNvbnZlcnRlZCB0byBhIG1vZHVsZS5cbmZ1bmN0aW9uIGNvbnZlcnRNb2R1bGUobW9kKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVmYXVsdDogKG1vZCA9PSBudWxsID8gdm9pZCAwIDogbW9kLmRlZmF1bHQpIHx8IG1vZFxuICAgIH07XG59XG5mdW5jdGlvbiBub1NTUihMb2FkYWJsZUluaXRpYWxpemVyLCBsb2FkYWJsZU9wdGlvbnMpIHtcbiAgICAvLyBSZW1vdmluZyB3ZWJwYWNrIGFuZCBtb2R1bGVzIG1lYW5zIHJlYWN0LWxvYWRhYmxlIHdvbid0IHRyeSBwcmVsb2FkaW5nXG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy53ZWJwYWNrO1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubW9kdWxlcztcbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IHJlYWN0LWxvYWRhYmxlIGZyb20gaW5pdGlhbGl6aW5nIG9uIHRoZSBzZXJ2ZXJcbiAgICBpZiAoIWlzU2VydmVyU2lkZSkge1xuICAgICAgICByZXR1cm4gTG9hZGFibGVJbml0aWFsaXplcihsb2FkYWJsZU9wdGlvbnMpO1xuICAgIH1cbiAgICBjb25zdCBMb2FkaW5nID0gbG9hZGFibGVPcHRpb25zLmxvYWRpbmc7XG4gICAgLy8gVGhpcyB3aWxsIG9ubHkgYmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlciBzaWRlXG4gICAgcmV0dXJuICgpPT4vKiNfX1BVUkVfXyovICgwLCBfanN4cnVudGltZS5qc3gpKExvYWRpbmcsIHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9KTtcbn1cbmZ1bmN0aW9uIGR5bmFtaWMoZHluYW1pY09wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBsZXQgbG9hZGFibGVGbiA9IF9sb2FkYWJsZXNoYXJlZHJ1bnRpbWUuZGVmYXVsdDtcbiAgICBsZXQgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxuICAgICAgICBsb2FkaW5nOiAocGFyYW0pPT57XG4gICAgICAgICAgICBsZXQgeyBlcnJvciwgaXNMb2FkaW5nLCBwYXN0RGVsYXkgfSA9IHBhcmFtO1xuICAgICAgICAgICAgaWYgKCFwYXN0RGVsYXkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gKDAsIF9qc3hydW50aW1lLmpzeHMpKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyojX19QVVJFX18qLyAoMCwgX2pzeHJ1bnRpbWUuanN4KShcImJyXCIsIHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5zdGFja1xuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbiAgICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XG4gICAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gKCk9PmR5bmFtaWNPcHRpb25zO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4uZHluYW1pY09wdGlvbnNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBjb25zdCBsb2FkZXJGbiA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkZXI7XG4gICAgY29uc3QgbG9hZGVyID0gKCk9PmxvYWRlckZuICE9IG51bGwgPyBsb2FkZXJGbigpLnRoZW4oY29udmVydE1vZHVsZSkgOiBQcm9taXNlLnJlc29sdmUoY29udmVydE1vZHVsZSgoKT0+bnVsbCkpO1xuICAgIC8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXG4gICAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWRcbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZDtcbiAgICB9XG4gICAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pLlxuICAgIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nICYmICFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzO1xuICAgICAgICByZXR1cm4gbm9TU1IobG9hZGFibGVGbiwgbG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvYWRhYmxlRm4oe1xuICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgIGxvYWRlcjogbG9hZGVyXG4gICAgfSk7XG59XG5cbmlmICgodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cy5kZWZhdWx0ICE9PSBudWxsKSkgJiYgdHlwZW9mIGV4cG9ydHMuZGVmYXVsdC5fX2VzTW9kdWxlID09PSAndW5kZWZpbmVkJykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cy5kZWZhdWx0LCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gIE9iamVjdC5hc3NpZ24oZXhwb3J0cy5kZWZhdWx0LCBleHBvcnRzKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWMuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljJylcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi8gXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBSb3V0ZXI6IG51bGwsXG4gICAgY3JlYXRlUm91dGVyOiBudWxsLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlOiBudWxsLFxuICAgIHVzZVJvdXRlcjogbnVsbCxcbiAgICB3aXRoUm91dGVyOiBudWxsXG59KTtcbmZ1bmN0aW9uIF9leHBvcnQodGFyZ2V0LCBhbGwpIHtcbiAgICBmb3IodmFyIG5hbWUgaW4gYWxsKU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBhbGxbbmFtZV1cbiAgICB9KTtcbn1cbl9leHBvcnQoZXhwb3J0cywge1xuICAgIFJvdXRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfSxcbiAgICBjcmVhdGVSb3V0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlUm91dGVyO1xuICAgIH0sXG4gICAgLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG4gICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdDtcbiAgICB9LFxuICAgIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG4gICAgfSxcbiAgICB1c2VSb3V0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdXNlUm91dGVyO1xuICAgIH0sXG4gICAgd2l0aFJvdXRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aHJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuY29uc3QgX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0ID0gcmVxdWlyZShcIkBzd2MvaGVscGVycy9fL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdFwiKTtcbmNvbnN0IF9yZWFjdCA9IC8qI19fUFVSRV9fKi8gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0Ll8ocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IF9yb3V0ZXIgPSAvKiNfX1BVUkVfXyovIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5fKHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xuY29uc3QgX3JvdXRlcmNvbnRleHRzaGFyZWRydW50aW1lID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuc2hhcmVkLXJ1bnRpbWVcIik7XG5jb25zdCBfaXNlcnJvciA9IC8qI19fUFVSRV9fKi8gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0Ll8ocmVxdWlyZShcIi4uL2xpYi9pcy1lcnJvclwiKSk7XG5jb25zdCBfd2l0aHJvdXRlciA9IC8qI19fUFVSRV9fKi8gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0Ll8ocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcydcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZSdcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3IEVycm9yKG1lc3NhZ2UpLCBcIl9fTkVYVF9FUlJPUl9DT0RFXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiBcIkUzOTRcIixcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgICA7XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKyl7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5Kyspe1xuICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gXCJvblwiICsgZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBldmVudC5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiICsgZXZlbnRGaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoKDAsIF9pc2Vycm9yLmRlZmF1bHQpKGVycikgPyBlcnIubWVzc2FnZSArIFwiXFxuXCIgKyBlcnIuc3RhY2sgOiBlcnIgKyAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuY29uc3QgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyY29udGV4dHNoYXJlZHJ1bnRpbWUuUm91dGVyQ29udGV4dCk7XG4gICAgaWYgKCFyb3V0ZXIpIHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ldyBFcnJvcignTmV4dFJvdXRlciB3YXMgbm90IG1vdW50ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtcm91dGVyLW5vdC1tb3VudGVkJyksIFwiX19ORVhUX0VSUk9SX0NPREVcIiwge1xuICAgICAgICAgICAgdmFsdWU6IFwiRTUwOVwiLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByb3V0ZXI7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKSB7XG4gICAgZm9yKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5Kyspe1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBzY29wZWRSb3V0ZXIgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBzY29wZWRSb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KHNjb3BlZFJvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSwgc2NvcGVkUm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IHNjb3BlZFJvdXRlcltwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5Kyspe1xuICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVkUm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbmlmICgodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cy5kZWZhdWx0ICE9PSBudWxsKSkgJiYgdHlwZW9mIGV4cG9ydHMuZGVmYXVsdC5fX2VzTW9kdWxlID09PSAndW5kZWZpbmVkJykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cy5kZWZhdWx0LCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gIE9iamVjdC5hc3NpZ24oZXhwb3J0cy5kZWZhdWx0LCBleHBvcnRzKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvcm91dGVyJylcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XG5cbmNvbnN0IGNyZWF0ZUF4aW9zSW5zdGFuY2UgPSAoYXBpVXJsKSA9PiB7XG4gIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IGFwaVVybCxcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVBeGlvc1ByaXZhdGVJbnN0YW5jZSA9IChhcGlVcmwsIGN0eCA9IG51bGwpID0+IHtcbiAgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IGFwaVVybCxcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICB9KTtcblxuICAvLyBXaGVuIGNhbGxlZCBzZXJ2ZXItc2lkZSB3aXRoIGNvbnRleHRcbiAgaWYgKGN0eCkge1xuICAgIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoY3R4KTtcbiAgICBpZiAoY29va2llcy5iaXRVc2VyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UoY29va2llcy5iaXRVc2VyKTtcbiAgICAgICAgaWYgKHVzZXJEYXRhLnRva2VuKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3VzZXJEYXRhLnRva2VufWA7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIGNvb2tpZTpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbnN0YW5jZTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUF4aW9zSW5zdGFuY2UsIGNyZWF0ZUF4aW9zUHJpdmF0ZUluc3RhbmNlIH07XG4iLCJpbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xuXG5jb25zdCBHZXRBdXRoID0gKGN0eCA9IG51bGwpID0+IHtcbiAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhjdHgpO1xuICBsZXQgdXNlckNvb2tpZXMgPSBudWxsO1xuXG4gIGlmIChjb29raWVzLmJpdFVzZXIpIHtcbiAgICB0cnkge1xuICAgICAgdXNlckNvb2tpZXMgPSBKU09OLnBhcnNlKGNvb2tpZXMuYml0VXNlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIHVzZXIgY29va2llOlwiLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVzZXJDb29raWVzO1xufTtcblxuZXhwb3J0IHsgR2V0QXV0aCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQXhpb3NJbnN0YW5jZSB9IGZyb20gXCIuLi9hcGkvYXhpb3NcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcywgc2V0Q29va2llIH0gZnJvbSBcIm5vb2tpZXNcIjtcblxuY29uc3QgdXNlUmVmcmVzaFRva2VuID0gKGFwaVVybCwgcmVmcmVzaFVybCkgPT4ge1xuICBjb25zdCByZWZyZXNoID0gYXN5bmMgKGN0eCA9IG51bGwpID0+IHtcbiAgICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKGN0eCk7XG4gICAgbGV0IHJlZnJlc2hfdG9rZW4gPSBcIlwiO1xuXG4gICAgaWYgKGNvb2tpZXMuYml0VXNlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGNvb2tpZXMuYml0VXNlcik7XG4gICAgICAgIHJlZnJlc2hfdG9rZW4gPSB1c2VyRGF0YS5yZWZyZXNoX3Rva2VuIHx8IFwiXCI7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcGFyc2luZyB1c2VyIGNvb2tpZTpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcmVmcmVzaF90b2tlbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVmcmVzaCB0b2tlbiBhdmFpbGFibGVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGNyZWF0ZUF4aW9zSW5zdGFuY2UoYXBpVXJsKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UucG9zdChcbiAgICAgICAgcmVmcmVzaFVybCxcbiAgICAgICAge1xuICAgICAgICAgIHJlZnJlc2hfdG9rZW4sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIC8vIFVwZGF0ZSBjb29raWVzIC0gd29ya3Mgb24gY2xpZW50LXNpZGVcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIGNvb2tpZXMuYml0VXNlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShjb29raWVzLmJpdFVzZXIpO1xuICAgICAgICAgIHNldENvb2tpZShcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBcImJpdFVzZXJcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgLi4udXNlckRhdGEsXG4gICAgICAgICAgICAgIHRva2VuOiByZXNwb25zZS5kYXRhLnRva2VuLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1heEFnZTogODY0MDAsXG4gICAgICAgICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIHRva2VuIGluIGNvb2tpZTpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVmcmVzaGluZyB0b2tlbjpcIiwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiByZWZyZXNoO1xufTtcblxuZXhwb3J0IHsgdXNlUmVmcmVzaFRva2VuIH07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUF4aW9zUHJpdmF0ZUluc3RhbmNlIH0gZnJvbSBcIi4uL2FwaS9heGlvc1wiO1xuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBzZXRDb29raWUgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IHsgdXNlUmVmcmVzaFRva2VuIH0gZnJvbSBcIi4vdXNlUmVmcmVzaFRva2VuXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgdXNlQXhpb3NQcml2YXRlID0gKGFwaVVybCwgcmVmcmVzaFVybCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcmVmcmVzaCA9IHVzZVJlZnJlc2hUb2tlbihhcGlVcmwsIHJlZnJlc2hVcmwpO1xuICBjb25zdCBheGlvc1ByaXZhdGUgPSBjcmVhdGVBeGlvc1ByaXZhdGVJbnN0YW5jZShhcGlVcmwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdEludGVyY2VwdCA9IGF4aW9zUHJpdmF0ZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gICAgICAoY29uZmlnKSA9PiB7XG4gICAgICAgIC8vIElmIG5vIEF1dGhvcml6YXRpb24gaGVhZGVyIGlzIHNldCwgdHJ5IHRvIGFkZCBpdCBmcm9tIGNvb2tpZXNcbiAgICAgICAgaWYgKCFjb25maWcuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0pIHtcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKCk7XG4gICAgICAgICAgaWYgKGNvb2tpZXMuYml0VXNlcikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGNvb2tpZXMuYml0VXNlcik7XG4gICAgICAgICAgICAgIGlmICh1c2VyRGF0YS50b2tlbikge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHt1c2VyRGF0YS50b2tlbn1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVhZGluZyB0b2tlbiBmcm9tIGNvb2tpZTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlSW50ZXJjZXB0ID0gYXhpb3NQcml2YXRlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gICAgICAocmVzcG9uc2UpID0+IHJlc3BvbnNlLFxuICAgICAgYXN5bmMgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZSZXF1ZXN0ID0gZXJyb3I/LmNvbmZpZztcbiAgICAgICAgaWYgKGVycm9yPy5yZXNwb25zZT8uc3RhdHVzID09PSA0MDEgJiYgIXByZXZSZXF1ZXN0Py5zZW50KSB7XG4gICAgICAgICAgcHJldlJlcXVlc3Quc2VudCA9IHRydWU7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVmcmVzaERhdGEgPSBhd2FpdCByZWZyZXNoKCk7XG5cbiAgICAgICAgICAgIGlmIChyZWZyZXNoRGF0YT8udG9rZW4pIHtcbiAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjb29raWVzXG4gICAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoKTtcbiAgICAgICAgICAgICAgaWYgKGNvb2tpZXMuYml0VXNlcikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UoY29va2llcy5iaXRVc2VyKTtcbiAgICAgICAgICAgICAgICAgIHNldENvb2tpZShcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJiaXRVc2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi51c2VyRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogcmVmcmVzaERhdGEudG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbWF4QWdlOiA4NjQwMCxcbiAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIHRva2VuIGluIGNvb2tpZTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgcHJldlJlcXVlc3QuaGVhZGVyc1tcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIlxuICAgICAgICAgICAgICBdID0gYEJlYXJlciAke3JlZnJlc2hEYXRhLnRva2VufWA7XG4gICAgICAgICAgICAgIHJldHVybiBheGlvc1ByaXZhdGUocHJldlJlcXVlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVG9rZW4gcmVmcmVzaCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gbG9naW4gaWYgdG9rZW4gcmVmcmVzaCBmYWlsc1xuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYXhpb3NQcml2YXRlLmludGVyY2VwdG9ycy5yZXF1ZXN0LmVqZWN0KHJlcXVlc3RJbnRlcmNlcHQpO1xuICAgICAgYXhpb3NQcml2YXRlLmludGVyY2VwdG9ycy5yZXNwb25zZS5lamVjdChyZXNwb25zZUludGVyY2VwdCk7XG4gICAgfTtcbiAgfSwgW2FwaVVybCwgcmVmcmVzaCwgcm91dGVyXSk7XG5cbiAgcmV0dXJuIGF4aW9zUHJpdmF0ZTtcbn07XG5cbmV4cG9ydCB7IHVzZUF4aW9zUHJpdmF0ZSB9O1xuIiwiZXhwb3J0IGNsYXNzIFVzZXJEYXRhTWFwcGVyIHtcbiAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICB0aGlzLnVzZXJfaWQgPSByZXNwb25zZS5pZDtcbiAgICB0aGlzLnVzZXJfcm9sZXMgPSByZXNwb25zZS5yb2xlcztcbiAgfVxuXG4gIHN0YXRpYyBtYXAoZGF0YSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gbmV3IFVzZXJEYXRhTWFwcGVyKGRhdGEpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdXNlQXhpb3NQcml2YXRlIH0gZnJvbSBcIi4vdXNlQXhpb3NQcml2YXRlXCI7XG5pbXBvcnQgeyBVc2VyRGF0YU1hcHBlciB9IGZyb20gXCIuLi9kYXRhL3VzZXJEYXRhTWFwcGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVBeGlvc0luc3RhbmNlIH0gZnJvbSBcIi4uL2FwaS9heGlvc1wiO1xuXG5jb25zdCB1c2VHZXRVc2VyRGF0YSA9IChhcGlVcmwsIGdldFVzZXJEYXRhVXJsKSA9PiB7XG4gIGNvbnN0IGF4aW9zUHJpdmF0ZSA9IHVzZUF4aW9zUHJpdmF0ZShhcGlVcmwsIFwiYXBpL3Rva2VuL3JlZnJlc2hcIik7XG5cbiAgLy8gRm9yIGNsaWVudC1zaWRlIHVzZSB3aXRoIGF1dGggaGVhZGVyXG4gIGNvbnN0IGZldGNoVXNlckRhdGFXaXRoQXV0aCA9IGFzeW5jICh0b2tlbikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBheGlvc0luc3RhbmNlID0gY3JlYXRlQXhpb3NJbnN0YW5jZShhcGlVcmwpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0luc3RhbmNlLmdldChnZXRVc2VyRGF0YVVybCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFVzZXJEYXRhTWFwcGVyLm1hcChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9O1xuXG4gIC8vIEZvciBhdXRoZW50aWNhdGVkIHJlcXVlc3RzIHVzaW5nIGludGVyY2VwdG9yXG4gIGNvbnN0IGZldGNoVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NQcml2YXRlLmdldChnZXRVc2VyRGF0YVVybCk7XG4gICAgICByZXR1cm4gVXNlckRhdGFNYXBwZXIubWFwKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlciBkYXRhOlwiLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgZmV0Y2hVc2VyRGF0YSwgZmV0Y2hVc2VyRGF0YVdpdGhBdXRoIH07XG59O1xuXG5leHBvcnQgeyB1c2VHZXRVc2VyRGF0YSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQXhpb3NJbnN0YW5jZSB9IGZyb20gXCIuLi9hcGlcIjtcbmltcG9ydCB7IGRlc3Ryb3lDb29raWUgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IHVzZUxvZ291dCA9IChhcGlVcmwsIGxvZ291dFVybCA9IG51bGwpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBjcmVhdGVBeGlvc0luc3RhbmNlKGFwaVVybCk7XG5cbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKHJlZGlyZWN0UGF0aCA9IFwiL2xvZ2luXCIpID0+IHtcbiAgICAvLyBSZW1vdmUgY29va2llc1xuICAgIGRlc3Ryb3lDb29raWUobnVsbCwgXCJiaXRVc2VyXCIsIHsgcGF0aDogXCIvXCIgfSk7XG4gICAgZGVzdHJveUNvb2tpZShudWxsLCBcImJpdFVzZXJEYXRhXCIsIHsgcGF0aDogXCIvXCIgfSk7XG5cbiAgICAvLyBPcHRpb25hbCBBUEkgY2FsbCB0byBpbnZhbGlkYXRlIHRva2VuIG9uIHNlcnZlclxuICAgIGlmIChsb2dvdXRVcmwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGF4aW9zSW5zdGFuY2UucG9zdChcbiAgICAgICAgICBsb2dvdXRVcmwsXG4gICAgICAgICAge30sXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkdXJpbmcgbG9nb3V0OlwiLCBlcnJvcik7XG4gICAgICAgIC8vIENvbnRpbnVlIHdpdGggY2xpZW50LXNpZGUgbG9nb3V0IGV2ZW4gaWYgc2VydmVyIHJlcXVlc3QgZmFpbHNcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWRpcmVjdCB0byBsb2dpbiBwYWdlXG4gICAgaWYgKHJlZGlyZWN0UGF0aCkge1xuICAgICAgcm91dGVyLnB1c2gocmVkaXJlY3RQYXRoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxvZ291dDtcbn07XG5cbmV4cG9ydCB7IHVzZUxvZ291dCB9O1xuIiwiZXhwb3J0IGNsYXNzIFVzZXJBdXRoTWFwcGVyIHtcbiAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICB0aGlzLnVzZXJfaWQgPSByZXNwb25zZS51c2VyX2lkO1xuICAgIHRoaXMudXNlcl9yb2xlcyA9IHJlc3BvbnNlLnVzZXJfcm9sZXM7XG4gICAgdGhpcy50b2tlbiA9IHJlc3BvbnNlLnRva2VuO1xuICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IHJlc3BvbnNlLnJlZnJlc2hfdG9rZW47XG4gIH1cblxuICBzdGF0aWMgbWFwKGRhdGEpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IG5ldyBVc2VyQXV0aE1hcHBlcihkYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBcIi4uL3N0eWxlL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgc2V0Q29va2llIH0gZnJvbSBcIm5vb2tpZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUF4aW9zSW5zdGFuY2UgfSBmcm9tIFwiLi4vYXBpL2F4aW9zXCI7XG5pbXBvcnQgeyB1c2VHZXRVc2VyRGF0YSB9IGZyb20gXCIuLi9ob29rc1wiO1xuXG5jb25zdCBEeW5hbWljRm9ybSA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydChcIkZFLXV0aWxzXCIpLnRoZW4oKG1vZCkgPT4gbW9kLkR5bmFtaWNGb3JtKSxcbiAgeyBzc3I6IGZhbHNlIH1cbik7XG5cbmltcG9ydCB7IFVzZXJBdXRoTWFwcGVyIH0gZnJvbSBcIi4uL2RhdGEvdXNlckF1dGhNYXBwZXJcIjtcblxuY29uc3QgTG9naW4gPSAoe1xuICBjaGlsZHJlbixcbiAgbG9naW5TdWNjZXNzLFxuICBjb29raWVzQWdlLFxuICBhcGlVcmwsXG4gIGxvZ2luVXJsLFxuICBnZXRVc2VyRGF0YVVybCxcbiAgcmVkaXJlY3RQYXRoID0gXCIvZGFzaGJvYXJkXCIsXG59KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGZldGNoVXNlckRhdGFXaXRoQXV0aCB9ID0gdXNlR2V0VXNlckRhdGEoYXBpVXJsLCBnZXRVc2VyRGF0YVVybCk7XG4gIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBjcmVhdGVBeGlvc0luc3RhbmNlKGFwaVVybCk7XG5cbiAgY29uc3QgZXJyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtsb2dpbkxvYWRpbmcsIHNldExvZ2luTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJNc2csIHNldEVyck1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZm9ybURhdGEpID0+IHtcbiAgICBzZXRMb2dpbkxvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGZvcm1EYXRhO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UucG9zdChcbiAgICAgICAgbG9naW5VcmwsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgY29uc3QgYXV0aERhdGEgPSBVc2VyQXV0aE1hcHBlci5tYXAocmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgIC8vIFNldCBjb29raWVzIHVzaW5nIG5vb2tpZXNcbiAgICAgIHNldENvb2tpZShudWxsLCBcImJpdFVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoeyAuLi5hdXRoRGF0YSB9KSwge1xuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgbWF4QWdlOiBjb29raWVzQWdlLFxuICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgICB9KTtcblxuICAgICAgLy8gRmV0Y2ggdXNlciBkYXRhXG4gICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IGZldGNoVXNlckRhdGFXaXRoQXV0aChhdXRoRGF0YS50b2tlbik7XG5cbiAgICAgIHNldENvb2tpZShudWxsLCBcImJpdFVzZXJEYXRhXCIsIEpTT04uc3RyaW5naWZ5KHsgLi4udXNlckRhdGEgfSksIHtcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIG1heEFnZTogY29va2llc0FnZSxcbiAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEhhbmRsZSBzdWNjZXNzZnVsIGxvZ2luXG4gICAgICBpZiAobG9naW5TdWNjZXNzKSB7XG4gICAgICAgIGxvZ2luU3VjY2VzcyhhdXRoRGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVc2UgTmV4dC5qcyByb3V0ZXIgdG8gcmVkaXJlY3RcbiAgICAgICAgY29uc3QgcmV0dXJuVXJsID0gcm91dGVyLnF1ZXJ5LnJldHVyblVybCB8fCByZWRpcmVjdFBhdGg7XG4gICAgICAgIHJvdXRlci5wdXNoKHJldHVyblVybCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTG9naW4gZXJyb3I6XCIsIGVycik7XG4gICAgICBpZiAoIWVycj8ucmVzcG9uc2UpIHtcbiAgICAgICAgc2V0RXJyTXNnKFwiTm8gc2VydmVyIHJlc3BvbnNlXCIpO1xuICAgICAgfSBlbHNlIGlmIChlcnIucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgIHNldEVyck1zZyhcIk1pc3NpbmcgRW1haWwgb3IgUGFzc3dvcmRcIik7XG4gICAgICB9IGVsc2UgaWYgKGVyci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgc2V0RXJyTXNnKFwiVW5hdXRob3JpemVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyTXNnKFwiTG9naW4gZmFpbGVkXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXJyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgZXJyUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9naW5Mb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9naW5Gb3JtRGF0YSA9IHtcbiAgICBmb3JtVGl0bGU6IFwiXCIsXG4gICAgZm9ybVNlY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIHNlY3Rpb25OYW1lOiBcIlwiLFxuICAgICAgICBmb3JtRmllbGRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiRW1haWwgQWRkcmVzc1wiLFxuICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgeW91ciBlbWFpbFwiLFxuICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiVGhpcyBpbnB1dCBpcyByZXF1aXJlZFwiLFxuICAgICAgICAgICAgICBwYXR0ZXJuOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIGVtYWlsXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiUGFzc3dvcmRcIixcbiAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIHlvdXIgcGFzc3dvcmRcIixcbiAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlRoaXMgaW5wdXQgaXMgcmVxdWlyZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU6IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInJlbWVtYmVyTWVcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIlJlbWVtYmVyIG1lXCIsXG4gICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIixcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYml0IGJpdC1sb2dpblwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtlcnJNc2cgJiYgKFxuICAgICAgICAgIDxwIHJlZj17ZXJyUmVmfSBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCI+XG4gICAgICAgICAgICB7ZXJyTXNnfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPER5bmFtaWNGb3JtIGZvcm1EYXRhPXtsb2dpbkZvcm1EYXRhfSBzdWJtaXREYXRhPXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvcmdvdC1wYXNzd29yZFwiPlxuICAgICAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQgP1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAge2xvZ2luTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZCBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICBTaWduaW5nIHlvdSBpbiAuLi5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNpZ24gSW48L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvRHluYW1pY0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IExvZ2luIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVBeGlvc0luc3RhbmNlIH0gZnJvbSBcIi4uL2FwaS9heGlvc1wiO1xuaW1wb3J0IFwiRkUtdXRpbHMvZGlzdC9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IER5bmFtaWNGb3JtIH0gZnJvbSBcIkZFLXV0aWxzXCI7XG5cbmNvbnN0IFJlZ2lzdGVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIHJlZ2lzdGVyU3VjY2VzcyxcbiAgYXBpVXJsLFxuICByZWdpc3RlclVybCA9IFwiL3JlZ2lzdGVyXCIsXG4gIGZvcm1EYXRhLFxuICByZWRpcmVjdFBhdGggPSBcIi9sb2dpblwiLFxufSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGNyZWF0ZUF4aW9zSW5zdGFuY2UoYXBpVXJsKTtcbiAgY29uc3QgZXJyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtlcnJNc2csIHNldEVyck1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlZ2lzdGVyaW5nLCBzZXRSZWdpc3RlcmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc3VibWl0RGF0YSA9IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuICAgIHNldFJlZ2lzdGVyaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UucG9zdChcbiAgICAgICAgcmVnaXN0ZXJVcmwsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgLi4uZm9ybURhdGEgfSksXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBpZiAocmVnaXN0ZXJTdWNjZXNzKSB7XG4gICAgICAgIHJlZ2lzdGVyU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZSBOZXh0LmpzIHJvdXRlciB0byByZWRpcmVjdFxuICAgICAgICByb3V0ZXIucHVzaChyZWRpcmVjdFBhdGgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKCFlcnI/LnJlc3BvbnNlKSB7XG4gICAgICAgIHNldEVyck1zZyhcIk5vIFNlcnZlciBSZXNwb25zZVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwOSkge1xuICAgICAgICBzZXRFcnJNc2coXCJFbWFpbCBBbHJlYWR5IFRha2VuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyTXNnKFwiUmVnaXN0cmF0aW9uIEZhaWxlZFwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVyclJlZi5jdXJyZW50KSB7XG4gICAgICAgIGVyclJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFJlZ2lzdGVyaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJpdCBiaXQtcmVnaXN0ZXJcIj5cbiAgICAgIHtlcnJNc2cgJiYgKFxuICAgICAgICA8cCByZWY9e2VyclJlZn0gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiPlxuICAgICAgICAgIHtlcnJNc2d9XG4gICAgICAgIDwvcD5cbiAgICAgICl9XG4gICAgICA8RHluYW1pY0Zvcm0gZm9ybURhdGE9e2Zvcm1EYXRhfSBzdWJtaXREYXRhPXtzdWJtaXREYXRhfT5cbiAgICAgICAge3JlZ2lzdGVyaW5nID8gKFxuICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICBSZWdpc3RlcmluZy4uLlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICl9XG4gICAgICA8L0R5bmFtaWNGb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IHsgUmVnaXN0ZXIgfTtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiZHluYW1pYyIsIm5vU1NSIiwiX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0IiwiaXNTZXJ2ZXJTaWRlIiwid2luZG93IiwiY29udmVydE1vZHVsZSIsIm1vZCIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJsb2FkYWJsZU9wdGlvbnMiLCJ3ZWJwYWNrIiwibW9kdWxlcyIsIkxvYWRpbmciLCJsb2FkaW5nIiwiX2pzeHJ1bnRpbWUiLCJqc3giLCJlcnJvciIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiZHluYW1pY09wdGlvbnMiLCJvcHRpb25zIiwibG9hZGFibGVGbiIsIl9sb2FkYWJsZXNoYXJlZHJ1bnRpbWUiLCJwYXJhbSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImpzeHMiLCJtZXNzYWdlIiwic3RhY2siLCJQcm9taXNlIiwibG9hZGVyIiwiX3R5cGVvZiIsIl9vYmplY3RTcHJlYWQiLCJsb2FkZXJGbiIsInRoZW4iLCJyZXNvbHZlIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiLCJtb2R1bGUiLCJyZXF1aXJlIiwiUm91dGVyIiwiX3JvdXRlciIsImNyZWF0ZVJvdXRlciIsIl9kZWZhdWx0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwidXNlUm91dGVyIiwid2l0aFJvdXRlciIsIl93aXRocm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsImNhbGxiYWNrIiwicHVzaCIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiZXZlbnRzIiwiZ2V0Um91dGVyIiwiRXJyb3IiLCJmb3JFYWNoIiwiZmllbGQiLCJhcmdzIiwiQXJyYXkiLCJfbGVuIiwiX2tleSIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJlcnIiLCJjb25zb2xlIiwiX2lzZXJyb3IiLCJfcmVhY3QiLCJ1c2VDb250ZXh0IiwiX3JvdXRlcmNvbnRleHRzaGFyZWRydW50aW1lIiwiUm91dGVyQ29udGV4dCIsImxlbmd0aCIsIl9jb25zdHJ1Y3QiLCJjYiIsInNjb3BlZFJvdXRlciIsImluc3RhbmNlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsInByb3BlcnR5IiwidmFsdWUiLCJhc3NpZ24iLCJpc0FycmF5IiwiZSIsImYiLCJjcmVhdGVBeGlvc0luc3RhbmNlIiwiYXBpVXJsIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY3JlYXRlQXhpb3NQcml2YXRlSW5zdGFuY2UiLCJjdHgiLCJ1bmRlZmluZWQiLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIiwiY29va2llcyIsInBhcnNlQ29va2llcyIsImJpdFVzZXIiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsInRva2VuIiwiZGVmYXVsdHMiLCJBdXRob3JpemF0aW9uIiwiY29uY2F0IiwiR2V0QXV0aCIsInVzZXJDb29raWVzIiwidXNlUmVmcmVzaFRva2VuIiwicmVmcmVzaFVybCIsInJlZnJlc2giLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJyZWZyZXNoX3Rva2VuIiwiYXhpb3NJbnN0YW5jZSIsInJlc3BvbnNlIiwiX3VzZXJEYXRhIiwiX2FyZ3MiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwicG9zdCIsInNlbnQiLCJzZXRDb29raWUiLCJzdHJpbmdpZnkiLCJkYXRhIiwibWF4QWdlIiwicGF0aCIsImFicnVwdCIsInQwIiwic3RvcCIsInVzZUF4aW9zUHJpdmF0ZSIsImF4aW9zUHJpdmF0ZSIsInVzZUVmZmVjdCIsInJlcXVlc3RJbnRlcmNlcHQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwicmVqZWN0IiwicmVzcG9uc2VJbnRlcmNlcHQiLCJfZXJyb3IkcmVzcG9uc2UiLCJwcmV2UmVxdWVzdCIsInJlZnJlc2hEYXRhIiwic3RhdHVzIiwiX3giLCJlamVjdCIsIlVzZXJEYXRhTWFwcGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwidXNlcl9pZCIsImlkIiwidXNlcl9yb2xlcyIsInJvbGVzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwibWFwIiwidXNlR2V0VXNlckRhdGEiLCJnZXRVc2VyRGF0YVVybCIsImZldGNoVXNlckRhdGFXaXRoQXV0aCIsImZldGNoVXNlckRhdGEiLCJfcmVmMiIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwidXNlTG9nb3V0IiwibG9nb3V0VXJsIiwibG9nb3V0IiwicmVkaXJlY3RQYXRoIiwiZGVzdHJveUNvb2tpZSIsIlVzZXJBdXRoTWFwcGVyIiwiRHluYW1pY0Zvcm0iLCJMb2dpbiIsImNoaWxkcmVuIiwibG9naW5TdWNjZXNzIiwiY29va2llc0FnZSIsImxvZ2luVXJsIiwiX3JlZiRyZWRpcmVjdFBhdGgiLCJfdXNlR2V0VXNlckRhdGEiLCJlcnJSZWYiLCJ1c2VSZWYiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImxvZ2luTG9hZGluZyIsInNldExvZ2luTG9hZGluZyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZXJyTXNnIiwic2V0RXJyTXNnIiwiaGFuZGxlU3VibWl0IiwiZm9ybURhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXV0aERhdGEiLCJyZXR1cm5VcmwiLCJfZXJyJHJlc3BvbnNlIiwiX2VyciRyZXNwb25zZTIiLCJzZWN1cmUiLCJzYW1lU2l0ZSIsInF1ZXJ5IiwiY3VycmVudCIsImZvY3VzIiwiZmluaXNoIiwibG9naW5Gb3JtRGF0YSIsImZvcm1UaXRsZSIsImZvcm1TZWN0aW9ucyIsInNlY3Rpb25OYW1lIiwiZm9ybUZpZWxkcyIsIm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbGlkYXRpb25zIiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwiaW5pdGlhbFZhbHVlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJyZWYiLCJzdWJtaXREYXRhIiwiaHJlZiIsImRpc2FibGVkIiwiUmVnaXN0ZXIiLCJyZWdpc3RlclN1Y2Nlc3MiLCJfcmVmJHJlZ2lzdGVyVXJsIiwicmVnaXN0ZXJVcmwiLCJyZWdpc3RlcmluZyIsInNldFJlZ2lzdGVyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdFQTs7Ozs7O0VBTUEsU0FxRUMs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
