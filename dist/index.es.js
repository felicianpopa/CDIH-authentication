/*!
  web-authentication v1.0.7
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

import React, { useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { DynamicForm } from 'FE-utils';

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
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
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
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
      enumerable: !0,
      configurable: !0,
      writable: !0
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
          done: !0
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
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
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
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
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
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
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
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var createAxiosInstance = function createAxiosInstance(apiUrl) {
  return axios.create({
    baseURL: apiUrl
  });
};
var createAxiosPrivateInstance = function createAxiosPrivateInstance(apiUrl) {
  return axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
  });
};

var GetAuth = function GetAuth() {
  var _useCookies = useCookies(["bitUser"]),
    _useCookies2 = _slicedToArray(_useCookies, 1),
    cookies = _useCookies2[0];
  var userCookies = cookies["bitUser"];
  return userCookies;
};

var useRefreshToken = function useRefreshToken(apiUrl, refreshUrl) {
  var _useCookies = useCookies(["bitUser"]),
    _useCookies2 = _slicedToArray(_useCookies, 2),
    cookies = _useCookies2[0];
    _useCookies2[1];
  var axiosInstance = createAxiosInstance(apiUrl);
  var refresh = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _cookies$bitUser;
      var refresh_token, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            refresh_token = (cookies === null || cookies === void 0 || (_cookies$bitUser = cookies.bitUser) === null || _cookies$bitUser === void 0 ? void 0 : _cookies$bitUser.refresh_token) || "";
            _context.prev = 1;
            _context.next = 4;
            return axiosInstance.post("".concat(apiUrl, "/").concat(refreshUrl), {
              refresh_token: refresh_token
            }, {
              withCredentials: true
            });
          case 4:
            response = _context.sent;
            return _context.abrupt("return", response.data);
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error("Error refreshing token:", _context.t0);
            throw _context.t0;
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    return function refresh() {
      return _ref.apply(this, arguments);
    };
  }();
  return refresh;
};

var useAxiosPrivate = function useAxiosPrivate(apiUrl, refreshUrl) {
  var _useCookies = useCookies(["bitUser"]),
    _useCookies2 = _slicedToArray(_useCookies, 2),
    cookies = _useCookies2[0],
    setCookie = _useCookies2[1];
  var refresh = useRefreshToken(apiUrl, refreshUrl);
  var axiosPrivate = createAxiosPrivateInstance(apiUrl);
  axiosPrivate.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  axiosPrivate.interceptors.response.use(function (response) {
    return response;
  }, /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(error) {
      var _error$response;
      var prevRequest, refreshData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            prevRequest = error === null || error === void 0 ? void 0 : error.config;
            if (!((error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 401 && !(prevRequest !== null && prevRequest !== void 0 && prevRequest.sent))) {
              _context.next = 8;
              break;
            }
            prevRequest.sent = true;
            _context.next = 5;
            return refresh();
          case 5:
            refreshData = _context.sent;
            if (refreshData !== null && refreshData !== void 0 && refreshData.token) {
              setCookie("bitUser", _objectSpread2(_objectSpread2({}, cookies.bitUser), {}, {
                token: refreshData.token
              }));
              prevRequest.headers["Authorization"] = "Bearer ".concat(refreshData.token);
            }
            return _context.abrupt("return", axiosPrivate(prevRequest));
          case 8:
            return _context.abrupt("return", Promise.reject(error));
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
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
  var axiosInstance = useAxiosPrivate(apiUrl, "api/token/refresh");
  var fetchUserData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(token) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axiosInstance.get(getUserDataUrl, {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            });
          case 3:
            response = _context.sent;
            return _context.abrupt("return", UserDataMapper.map(response.data));
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error("error ", _context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function fetchUserData(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return fetchUserData;
};

var useLogout = function useLogout(apiUrl) {
  var _useCookies = useCookies(["bitUser"]),
    _useCookies2 = _slicedToArray(_useCookies, 3);
    _useCookies2[0];
    _useCookies2[1];
    var removeCookie = _useCookies2[2];
  createAxiosInstance(apiUrl);
  var logout = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            removeCookie("bitUser", {
              path: "/"
            });
            // return axiosInstance("/token/invalidate", {
            //   withCredentials: true,
            // })
            //   .then((res) => {
            //     removeCookie("bitUser",{path:'/'});
            //   })
            //   .catch((error) => {
            //     throw error;
            //   });
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
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

var Login = function Login(_ref) {
  var children = _ref.children,
    loginSuccess = _ref.loginSuccess,
    cookiesAge = _ref.cookiesAge,
    apiUrl = _ref.apiUrl,
    loginUrl = _ref.loginUrl,
    getUserDataUrl = _ref.getUserDataUrl;
  var _useCookies = useCookies(["bitUser", "bitUserData"]),
    _useCookies2 = _slicedToArray(_useCookies, 2);
    _useCookies2[0];
    var setCookie = _useCookies2[1];
  var fetchUserData = useGetUserData(apiUrl, getUserDataUrl);
  var axiosInstance = createAxiosInstance(apiUrl);
  var errRef = useRef();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loginLoading = _useState2[0],
    setLoginLoading = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    var setErrMsg = _useState4[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(formData) {
      var email, password, response, authData, userData, _err$response, _err$response2;
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
            authData = UserAuthMapper.map(response.data);
            setCookie("bitUser", _objectSpread2({}, authData), {
              path: "/",
              maxAge: cookiesAge
            });
            _context.next = 10;
            return fetchUserData(authData.token);
          case 10:
            userData = _context.sent;
            setCookie("bitUserData", _objectSpread2({}, userData), {
              path: "/",
              maxAge: cookiesAge
            });
            if (loginSuccess) {
              loginSuccess(authData);
            }
            _context.next = 20;
            break;
          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](2);
            console.error("error ", _context.t0);
            if (!(_context.t0 !== null && _context.t0 !== void 0 && _context.t0.response)) {
              setErrMsg("No server response");
            } else if (((_err$response = _context.t0.response) === null || _err$response === void 0 ? void 0 : _err$response.status) === 400) {
              setErrMsg("Missing Email or Password");
            } else if (((_err$response2 = _context.t0.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.status) === 4001) {
              setErrMsg("Unauthorized");
            } else {
              setErrMsg("Login failed");
            }
            errRef.current.focus();
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
            message: "Please inert a valid email"
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
  }, children, /*#__PURE__*/React.createElement(DynamicForm, {
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

var REGISTER_URL = "/register";
var Register = function Register(_ref) {
  var children = _ref.children,
    registerSuccess = _ref.registerSuccess,
    apiUrl = _ref.apiUrl,
    formData = _ref.formData;
  var axiosInstance = createAxiosInstance(apiUrl);
  var submitData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(formData) {
      var _err$response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axiosInstance.post(REGISTER_URL, JSON.stringify(_objectSpread2({}, formData)), {
              headers: {
                "Content-Type": "application/json"
              },
              withCredentials: true
            });
          case 3:
            _context.sent;
            if (registerSuccess) {
              registerSuccess();
            }
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            if (!(_context.t0 !== null && _context.t0 !== void 0 && _context.t0.response)) {
              console.warn("No Server Response");
            } else if (((_err$response = _context.t0.response) === null || _err$response === void 0 ? void 0 : _err$response.status) === 409) {
              console.warn("Email Taken");
            } else {
              console.warn("Registration Failed");
            }
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function submitData(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(DynamicForm, {
    formData: formData,
    submitData: submitData
  }, children);
};

export { GetAuth, Login, Register, createAxiosInstance, createAxiosPrivateInstance, useAxiosPrivate, useLogout, useRefreshToken };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGkvYXhpb3MuanMiLCIuLi9zcmMvaG9va3MvZ2V0QXV0aC5qcyIsIi4uL3NyYy9ob29rcy91c2VSZWZyZXNoVG9rZW4uanMiLCIuLi9zcmMvaG9va3MvdXNlQXhpb3NQcml2YXRlLmpzIiwiLi4vc3JjL2RhdGEvdXNlckRhdGFNYXBwZXIuanMiLCIuLi9zcmMvaG9va3MvdXNlR2V0VXNlckRhdGEuanMiLCIuLi9zcmMvaG9va3MvdXNlTG9nb3V0LmpzIiwiLi4vc3JjL2RhdGEvdXNlckF1dGhNYXBwZXIuanMiLCIuLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9SZWdpc3Rlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBjcmVhdGVBeGlvc0luc3RhbmNlID0gKGFwaVVybCkgPT4ge1xuICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBhcGlVcmwsXG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlQXhpb3NQcml2YXRlSW5zdGFuY2UgPSAoYXBpVXJsKSA9PiB7XG4gIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IGFwaVVybCxcblxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVBeGlvc0luc3RhbmNlLCBjcmVhdGVBeGlvc1ByaXZhdGVJbnN0YW5jZSB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcblxuY29uc3QgR2V0QXV0aCA9ICgpID0+IHtcbiAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbXCJiaXRVc2VyXCJdKTtcbiAgY29uc3QgdXNlckNvb2tpZXMgPSBjb29raWVzW1wiYml0VXNlclwiXTtcbiAgcmV0dXJuIHVzZXJDb29raWVzO1xufTtcblxuZXhwb3J0IHsgR2V0QXV0aCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQXhpb3NJbnN0YW5jZSB9IGZyb20gXCIuLi9hcGkvYXhpb3NcIjtcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XG5jb25zdCB1c2VSZWZyZXNoVG9rZW4gPSAoYXBpVXJsLCByZWZyZXNoVXJsKSA9PiB7XG4gIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbXCJiaXRVc2VyXCJdKTtcbiAgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGNyZWF0ZUF4aW9zSW5zdGFuY2UoYXBpVXJsKTtcblxuICBjb25zdCByZWZyZXNoID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlZnJlc2hfdG9rZW4gPSBjb29raWVzPy5iaXRVc2VyPy5yZWZyZXNoX3Rva2VuIHx8IFwiXCI7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0luc3RhbmNlLnBvc3QoXG4gICAgICAgIGAke2FwaVVybH0vJHtyZWZyZXNoVXJsfWAsXG4gICAgICAgIHtcbiAgICAgICAgICByZWZyZXNoX3Rva2VuLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZWZyZXNoaW5nIHRva2VuOlwiLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHJlZnJlc2g7XG59O1xuXG5leHBvcnQgeyB1c2VSZWZyZXNoVG9rZW4gfTtcbiIsImltcG9ydCB7IGNyZWF0ZUF4aW9zUHJpdmF0ZUluc3RhbmNlIH0gZnJvbSBcIi4uL2FwaS9heGlvc1wiO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcbmltcG9ydCB7IHVzZVJlZnJlc2hUb2tlbiB9IGZyb20gXCIuL3VzZVJlZnJlc2hUb2tlblwiO1xuXG5jb25zdCB1c2VBeGlvc1ByaXZhdGUgPSAoYXBpVXJsLCByZWZyZXNoVXJsKSA9PiB7XG4gIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbXCJiaXRVc2VyXCJdKTtcbiAgY29uc3QgcmVmcmVzaCA9IHVzZVJlZnJlc2hUb2tlbihhcGlVcmwsIHJlZnJlc2hVcmwpO1xuICBjb25zdCBheGlvc1ByaXZhdGUgPSBjcmVhdGVBeGlvc1ByaXZhdGVJbnN0YW5jZShhcGlVcmwpO1xuXG4gIGF4aW9zUHJpdmF0ZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gICAgKGNvbmZpZykgPT4ge1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9LFxuICAgIChlcnJvcikgPT4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICk7XG5cbiAgYXhpb3NQcml2YXRlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gICAgKHJlc3BvbnNlKSA9PiByZXNwb25zZSxcbiAgICBhc3luYyAoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IHByZXZSZXF1ZXN0ID0gZXJyb3I/LmNvbmZpZztcbiAgICAgIGlmIChlcnJvcj8ucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAxICYmICFwcmV2UmVxdWVzdD8uc2VudCkge1xuICAgICAgICBwcmV2UmVxdWVzdC5zZW50ID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCByZWZyZXNoRGF0YSA9IGF3YWl0IHJlZnJlc2goKTtcblxuICAgICAgICBpZiAocmVmcmVzaERhdGE/LnRva2VuKSB7XG4gICAgICAgICAgc2V0Q29va2llKFwiYml0VXNlclwiLCB7XG4gICAgICAgICAgICAuLi5jb29raWVzLmJpdFVzZXIsXG4gICAgICAgICAgICB0b2tlbjogcmVmcmVzaERhdGEudG9rZW4sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcHJldlJlcXVlc3QuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7cmVmcmVzaERhdGEudG9rZW59YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBheGlvc1ByaXZhdGUocHJldlJlcXVlc3QpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIGF4aW9zUHJpdmF0ZTtcbn07XG5cbmV4cG9ydCB7IHVzZUF4aW9zUHJpdmF0ZSB9O1xuIiwiZXhwb3J0IGNsYXNzIFVzZXJEYXRhTWFwcGVyIHtcbiAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICB0aGlzLnVzZXJfaWQgPSByZXNwb25zZS5pZDtcbiAgICB0aGlzLnVzZXJfcm9sZXMgPSByZXNwb25zZS5yb2xlcztcbiAgfVxuXG4gIHN0YXRpYyBtYXAoZGF0YSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gbmV3IFVzZXJEYXRhTWFwcGVyKGRhdGEpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXhpb3NQcml2YXRlIH0gZnJvbSBcIi4vdXNlQXhpb3NQcml2YXRlXCI7XG5pbXBvcnQgeyBVc2VyRGF0YU1hcHBlciB9IGZyb20gXCIuLi9kYXRhL3VzZXJEYXRhTWFwcGVyXCI7XG5cbmNvbnN0IHVzZUdldFVzZXJEYXRhID0gKGFwaVVybCwgZ2V0VXNlckRhdGFVcmwpID0+IHtcbiAgY29uc3QgYXhpb3NJbnN0YW5jZSA9IHVzZUF4aW9zUHJpdmF0ZShhcGlVcmwsIFwiYXBpL3Rva2VuL3JlZnJlc2hcIik7XG5cbiAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGFzeW5jICh0b2tlbikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0KGdldFVzZXJEYXRhVXJsLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gVXNlckRhdGFNYXBwZXIubWFwKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3IgXCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGZldGNoVXNlckRhdGE7XG59O1xuXG5leHBvcnQgeyB1c2VHZXRVc2VyRGF0YSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQXhpb3NJbnN0YW5jZSB9IGZyb20gXCIuLi9hcGlcIjtcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XG5cbmNvbnN0IHVzZUxvZ291dCA9IChhcGlVcmwpID0+IHtcbiAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZSwgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoW1wiYml0VXNlclwiXSk7XG4gIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBjcmVhdGVBeGlvc0luc3RhbmNlKGFwaVVybCk7XG5cbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHJlbW92ZUNvb2tpZShcImJpdFVzZXJcIiwgeyBwYXRoOiBcIi9cIiB9KTtcbiAgICAvLyByZXR1cm4gYXhpb3NJbnN0YW5jZShcIi90b2tlbi9pbnZhbGlkYXRlXCIsIHtcbiAgICAvLyAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAvLyB9KVxuICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xuICAgIC8vICAgICByZW1vdmVDb29raWUoXCJiaXRVc2VyXCIse3BhdGg6Jy8nfSk7XG4gICAgLy8gICB9KVxuICAgIC8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vICAgICB0aHJvdyBlcnJvcjtcbiAgICAvLyAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBsb2dvdXQ7XG59O1xuXG5leHBvcnQgeyB1c2VMb2dvdXQgfTtcbiIsImV4cG9ydCBjbGFzcyBVc2VyQXV0aE1hcHBlciB7XG4gIGNvbnN0cnVjdG9yKHJlc3BvbnNlKSB7XG4gICAgdGhpcy51c2VyX2lkID0gcmVzcG9uc2UudXNlcl9pZDtcbiAgICB0aGlzLnVzZXJfcm9sZXMgPSByZXNwb25zZS51c2VyX3JvbGVzO1xuICAgIHRoaXMudG9rZW4gPSByZXNwb25zZS50b2tlbjtcbiAgICB0aGlzLnJlZnJlc2hfdG9rZW4gPSByZXNwb25zZS5yZWZyZXNoX3Rva2VuO1xuICB9XG5cbiAgc3RhdGljIG1hcChkYXRhKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBuZXcgVXNlckF1dGhNYXBwZXIoZGF0YSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZS9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgXCJGRS11dGlscy9kaXN0L3N0eWxlL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcbmltcG9ydCB7IGNyZWF0ZUF4aW9zSW5zdGFuY2UgfSBmcm9tIFwiLi4vYXBpL2F4aW9zXCI7XG5pbXBvcnQgeyB1c2VHZXRVc2VyRGF0YSB9IGZyb20gXCIuLi9ob29rc1wiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm0gfSBmcm9tIFwiRkUtdXRpbHNcIjtcblxuaW1wb3J0IHsgVXNlckF1dGhNYXBwZXIgfSBmcm9tIFwiLi4vZGF0YS91c2VyQXV0aE1hcHBlclwiO1xuXG5jb25zdCBMb2dpbiA9ICh7XG4gIGNoaWxkcmVuLFxuICBsb2dpblN1Y2Nlc3MsXG4gIGNvb2tpZXNBZ2UsXG4gIGFwaVVybCxcbiAgbG9naW5VcmwsXG4gIGdldFVzZXJEYXRhVXJsLFxufSkgPT4ge1xuICBjb25zdCBbY29va2llcywgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoW1wiYml0VXNlclwiLCBcImJpdFVzZXJEYXRhXCJdKTtcbiAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IHVzZUdldFVzZXJEYXRhKGFwaVVybCwgZ2V0VXNlckRhdGFVcmwpO1xuXG4gIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBjcmVhdGVBeGlvc0luc3RhbmNlKGFwaVVybCk7XG5cbiAgY29uc3QgZXJyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtsb2dpbkxvYWRpbmcsIHNldExvZ2luTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2Vyck1zZywgc2V0RXJyTXNnXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuICAgIHNldExvZ2luTG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gZm9ybURhdGE7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5wb3N0KFxuICAgICAgICBsb2dpblVybCxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc3QgYXV0aERhdGEgPSBVc2VyQXV0aE1hcHBlci5tYXAocmVzcG9uc2UuZGF0YSk7XG4gICAgICBzZXRDb29raWUoXCJiaXRVc2VyXCIsIHsgLi4uYXV0aERhdGEgfSwgeyBwYXRoOiBcIi9cIiwgbWF4QWdlOiBjb29raWVzQWdlIH0pO1xuICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBmZXRjaFVzZXJEYXRhKGF1dGhEYXRhLnRva2VuKTtcbiAgICAgIHNldENvb2tpZShcbiAgICAgICAgXCJiaXRVc2VyRGF0YVwiLFxuICAgICAgICB7IC4uLnVzZXJEYXRhIH0sXG4gICAgICAgIHsgcGF0aDogXCIvXCIsIG1heEFnZTogY29va2llc0FnZSB9XG4gICAgICApO1xuICAgICAgaWYgKGxvZ2luU3VjY2Vzcykge1xuICAgICAgICBsb2dpblN1Y2Nlc3MoYXV0aERhdGEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcImVycm9yIFwiLCBlcnIpO1xuICAgICAgaWYgKCFlcnI/LnJlc3BvbnNlKSB7XG4gICAgICAgIHNldEVyck1zZyhcIk5vIHNlcnZlciByZXNwb25zZVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICBzZXRFcnJNc2coXCJNaXNzaW5nIEVtYWlsIG9yIFBhc3N3b3JkXCIpO1xuICAgICAgfSBlbHNlIGlmIChlcnIucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAwMSkge1xuICAgICAgICBzZXRFcnJNc2coXCJVbmF1dGhvcml6ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJNc2coXCJMb2dpbiBmYWlsZWRcIik7XG4gICAgICB9XG4gICAgICBlcnJSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2dpbkxvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2dpbkZvcm1EYXRhID0ge1xuICAgIGZvcm1UaXRsZTogXCJcIixcbiAgICBmb3JtU2VjdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgc2VjdGlvbk5hbWU6IFwiXCIsXG4gICAgICAgIGZvcm1GaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJFbWFpbCBBZGRyZXNzXCIsXG4gICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciB5b3VyIGVtYWlsXCIsXG4gICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICByZXF1aXJlZDogXCJUaGlzIGlucHV0IGlzIHJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8sXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5lcnQgYSB2YWxpZCBlbWFpbFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciB5b3VyIHBhc3N3b3JkXCIsXG4gICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICByZXF1aXJlZDogXCJUaGlzIGlucHV0IGlzIHJlcXVpcmVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJyZW1lbWJlck1lXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJSZW1lbWJlciBtZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCIsXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU6IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpdCBiaXQtbG9naW5cIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8RHluYW1pY0Zvcm0gZm9ybURhdGE9e2xvZ2luRm9ybURhdGF9IHN1Ym1pdERhdGE9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9yZ290LXBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZCA/XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB7bG9naW5Mb2FkaW5nID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIFNpZ25pbmcgeW91IGluIC4uLlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2lnbiBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgPC9EeW5hbWljRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IHsgTG9naW4gfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUF4aW9zSW5zdGFuY2UgfSBmcm9tIFwiLi4vYXBpL2F4aW9zXCI7XG5pbXBvcnQgXCJGRS11dGlscy9kaXN0L3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm0gfSBmcm9tIFwiRkUtdXRpbHNcIjtcblxuY29uc3QgUkVHSVNURVJfVVJMID0gXCIvcmVnaXN0ZXJcIjtcblxuY29uc3QgUmVnaXN0ZXIgPSAoeyBjaGlsZHJlbiwgcmVnaXN0ZXJTdWNjZXNzLCBhcGlVcmwsIGZvcm1EYXRhIH0pID0+IHtcbiAgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGNyZWF0ZUF4aW9zSW5zdGFuY2UoYXBpVXJsKTtcblxuICBjb25zdCBzdWJtaXREYXRhID0gYXN5bmMgKGZvcm1EYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5wb3N0KFxuICAgICAgICBSRUdJU1RFUl9VUkwsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgLi4uZm9ybURhdGEgfSksXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgaWYgKHJlZ2lzdGVyU3VjY2Vzcykge1xuICAgICAgICByZWdpc3RlclN1Y2Nlc3MoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmICghZXJyPy5yZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJObyBTZXJ2ZXIgUmVzcG9uc2VcIik7XG4gICAgICB9IGVsc2UgaWYgKGVyci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiRW1haWwgVGFrZW5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJSZWdpc3RyYXRpb24gRmFpbGVkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEeW5hbWljRm9ybSBmb3JtRGF0YT17Zm9ybURhdGF9IHN1Ym1pdERhdGE9e3N1Ym1pdERhdGF9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRHluYW1pY0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgeyBSZWdpc3RlciB9O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUF4aW9zSW5zdGFuY2UiLCJhcGlVcmwiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJjcmVhdGVBeGlvc1ByaXZhdGVJbnN0YW5jZSIsImhlYWRlcnMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJHZXRBdXRoIiwiX3VzZUNvb2tpZXMiLCJ1c2VDb29raWVzIiwiX3VzZUNvb2tpZXMyIiwiX3NsaWNlZFRvQXJyYXkiLCJjb29raWVzIiwidXNlckNvb2tpZXMiLCJ1c2VSZWZyZXNoVG9rZW4iLCJyZWZyZXNoVXJsIiwic2V0Q29va2llIiwiYXhpb3NJbnN0YW5jZSIsInJlZnJlc2giLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJfY29va2llcyRiaXRVc2VyIiwicmVmcmVzaF90b2tlbiIsInJlc3BvbnNlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImJpdFVzZXIiLCJwb3N0IiwiY29uY2F0Iiwic2VudCIsImFicnVwdCIsImRhdGEiLCJ0MCIsImNvbnNvbGUiLCJlcnJvciIsInN0b3AiLCJhcHBseSIsImFyZ3VtZW50cyIsInVzZUF4aW9zUHJpdmF0ZSIsImF4aW9zUHJpdmF0ZSIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJQcm9taXNlIiwicmVqZWN0IiwiX2Vycm9yJHJlc3BvbnNlIiwicHJldlJlcXVlc3QiLCJyZWZyZXNoRGF0YSIsInN0YXR1cyIsInRva2VuIiwiX29iamVjdFNwcmVhZCIsIl94IiwiVXNlckRhdGFNYXBwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJ1c2VyX2lkIiwiaWQiLCJ1c2VyX3JvbGVzIiwicm9sZXMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIm1hcCIsInVzZUdldFVzZXJEYXRhIiwiZ2V0VXNlckRhdGFVcmwiLCJmZXRjaFVzZXJEYXRhIiwiZ2V0IiwiQXV0aG9yaXphdGlvbiIsInVzZUxvZ291dCIsInJlbW92ZUNvb2tpZSIsImxvZ291dCIsInBhdGgiLCJVc2VyQXV0aE1hcHBlciIsIkxvZ2luIiwiY2hpbGRyZW4iLCJsb2dpblN1Y2Nlc3MiLCJjb29raWVzQWdlIiwibG9naW5VcmwiLCJlcnJSZWYiLCJ1c2VSZWYiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJsb2dpbkxvYWRpbmciLCJzZXRMb2dpbkxvYWRpbmciLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImVyck1zZyIsInNldEVyck1zZyIsImhhbmRsZVN1Ym1pdCIsIl9yZWYyIiwiZm9ybURhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXV0aERhdGEiLCJ1c2VyRGF0YSIsIl9lcnIkcmVzcG9uc2UiLCJfZXJyJHJlc3BvbnNlMiIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXhBZ2UiLCJjdXJyZW50IiwiZm9jdXMiLCJmaW5pc2giLCJsb2dpbkZvcm1EYXRhIiwiZm9ybVRpdGxlIiwiZm9ybVNlY3Rpb25zIiwic2VjdGlvbk5hbWUiLCJmb3JtRmllbGRzIiwibmFtZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsaWRhdGlvbnMiLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJtZXNzYWdlIiwiaW5pdGlhbFZhbHVlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJEeW5hbWljRm9ybSIsInN1Ym1pdERhdGEiLCJocmVmIiwiZGlzYWJsZWQiLCJSRUdJU1RFUl9VUkwiLCJSZWdpc3RlciIsInJlZ2lzdGVyU3VjY2VzcyIsIndhcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
