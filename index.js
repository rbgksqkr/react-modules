import * as W_ from "react";
import { useState as G_, useRef as X_, useEffect as q_ } from "react";
function K_(P) {
  if (P.__esModule)
    return P;
  var K = P.default;
  if (typeof K == "function") {
    var k = function Pe() {
      return this instanceof Pe ? Reflect.construct(K, arguments, this.constructor) : K.apply(this, arguments);
    };
    k.prototype = K.prototype;
  } else
    k = {};
  return Object.defineProperty(k, "__esModule", { value: !0 }), Object.keys(P).forEach(function(Pe) {
    var it = Object.getOwnPropertyDescriptor(P, Pe);
    Object.defineProperty(k, Pe, it.get ? it : {
      enumerable: !0,
      get: function() {
        return P[Pe];
      }
    });
  }), k;
}
var c0 = { exports: {} }, Dp = {};
const Nm = /* @__PURE__ */ K_(W_);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WC;
function Z_() {
  if (WC)
    return Dp;
  WC = 1;
  var P = Nm, K = Symbol.for("react.element"), k = Symbol.for("react.fragment"), Pe = Object.prototype.hasOwnProperty, it = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ve = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(Ct, ce, ue) {
    var nt, ne = {}, he = null, oe = null;
    ue !== void 0 && (he = "" + ue), ce.key !== void 0 && (he = "" + ce.key), ce.ref !== void 0 && (oe = ce.ref);
    for (nt in ce)
      Pe.call(ce, nt) && !Ve.hasOwnProperty(nt) && (ne[nt] = ce[nt]);
    if (Ct && Ct.defaultProps)
      for (nt in ce = Ct.defaultProps, ce)
        ne[nt] === void 0 && (ne[nt] = ce[nt]);
    return { $$typeof: K, type: Ct, key: he, ref: oe, props: ne, _owner: it.current };
  }
  return Dp.Fragment = k, Dp.jsx = g, Dp.jsxs = g, Dp;
}
var _p = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GC;
function J_() {
  return GC || (GC = 1, process.env.NODE_ENV !== "production" && function() {
    var P = Nm, K = Symbol.for("react.element"), k = Symbol.for("react.portal"), Pe = Symbol.for("react.fragment"), it = Symbol.for("react.strict_mode"), Ve = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), Ct = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), nt = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), ze = Symbol.iterator, st = "@@iterator";
    function yt(E) {
      if (E === null || typeof E != "object")
        return null;
      var j = ze && E[ze] || E[st];
      return typeof j == "function" ? j : null;
    }
    var fn = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ke(E) {
      {
        for (var j = arguments.length, I = new Array(j > 1 ? j - 1 : 0), me = 1; me < j; me++)
          I[me - 1] = arguments[me];
        Be("error", E, I);
      }
    }
    function Be(E, j, I) {
      {
        var me = fn.ReactDebugCurrentFrame, We = me.getStackAddendum();
        We !== "" && (j += "%s", I = I.concat([We]));
        var qe = I.map(function(xe) {
          return String(xe);
        });
        qe.unshift("Warning: " + j), Function.prototype.apply.call(console[E], console, qe);
      }
    }
    var gt = !1, $e = !1, wt = !1, Ue = !1, Rn = !1, jn;
    jn = Symbol.for("react.module.reference");
    function Vt(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === Pe || E === Ve || Rn || E === it || E === ue || E === nt || Ue || E === oe || gt || $e || wt || typeof E == "object" && E !== null && (E.$$typeof === he || E.$$typeof === ne || E.$$typeof === g || E.$$typeof === Ct || E.$$typeof === ce || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === jn || E.getModuleId !== void 0));
    }
    function pt(E, j, I) {
      var me = E.displayName;
      if (me)
        return me;
      var We = j.displayName || j.name || "";
      return We !== "" ? I + "(" + We + ")" : I;
    }
    function xn(E) {
      return E.displayName || "Context";
    }
    function be(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && Ke("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case Pe:
          return "Fragment";
        case k:
          return "Portal";
        case Ve:
          return "Profiler";
        case it:
          return "StrictMode";
        case ue:
          return "Suspense";
        case nt:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case Ct:
            var j = E;
            return xn(j) + ".Consumer";
          case g:
            var I = E;
            return xn(I._context) + ".Provider";
          case ce:
            return pt(E, E.render, "ForwardRef");
          case ne:
            var me = E.displayName || null;
            return me !== null ? me : be(E.type) || "Memo";
          case he: {
            var We = E, qe = We._payload, xe = We._init;
            try {
              return be(xe(qe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Qe = Object.assign, dn = 0, Dt, qn, Y, Ce, ee, Ze, rt;
    function wn() {
    }
    wn.__reactDisabledLog = !0;
    function Kn() {
      {
        if (dn === 0) {
          Dt = console.log, qn = console.info, Y = console.warn, Ce = console.error, ee = console.group, Ze = console.groupCollapsed, rt = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: wn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        dn++;
      }
    }
    function Ua() {
      {
        if (dn--, dn === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Qe({}, E, {
              value: Dt
            }),
            info: Qe({}, E, {
              value: qn
            }),
            warn: Qe({}, E, {
              value: Y
            }),
            error: Qe({}, E, {
              value: Ce
            }),
            group: Qe({}, E, {
              value: ee
            }),
            groupCollapsed: Qe({}, E, {
              value: Ze
            }),
            groupEnd: Qe({}, E, {
              value: rt
            })
          });
        }
        dn < 0 && Ke("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var nn = fn.ReactCurrentDispatcher, Qr;
    function Vn(E, j, I) {
      {
        if (Qr === void 0)
          try {
            throw Error();
          } catch (We) {
            var me = We.stack.trim().match(/\n( *(at )?)/);
            Qr = me && me[1] || "";
          }
        return `
` + Qr + E;
      }
    }
    var or = !1, Aa;
    {
      var sr = typeof WeakMap == "function" ? WeakMap : Map;
      Aa = new sr();
    }
    function Wr(E, j) {
      if (!E || or)
        return "";
      {
        var I = Aa.get(E);
        if (I !== void 0)
          return I;
      }
      var me;
      or = !0;
      var We = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var qe;
      qe = nn.current, nn.current = null, Kn();
      try {
        if (j) {
          var xe = function() {
            throw Error();
          };
          if (Object.defineProperty(xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(xe, []);
            } catch ($n) {
              me = $n;
            }
            Reflect.construct(E, [], xe);
          } else {
            try {
              xe.call();
            } catch ($n) {
              me = $n;
            }
            E.call(xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($n) {
            me = $n;
          }
          E();
        }
      } catch ($n) {
        if ($n && me && typeof $n.stack == "string") {
          for (var Fe = $n.stack.split(`
`), hn = me.stack.split(`
`), _t = Fe.length - 1, At = hn.length - 1; _t >= 1 && At >= 0 && Fe[_t] !== hn[At]; )
            At--;
          for (; _t >= 1 && At >= 0; _t--, At--)
            if (Fe[_t] !== hn[At]) {
              if (_t !== 1 || At !== 1)
                do
                  if (_t--, At--, At < 0 || Fe[_t] !== hn[At]) {
                    var fr = `
` + Fe[_t].replace(" at new ", " at ");
                    return E.displayName && fr.includes("<anonymous>") && (fr = fr.replace("<anonymous>", E.displayName)), typeof E == "function" && Aa.set(E, fr), fr;
                  }
                while (_t >= 1 && At >= 0);
              break;
            }
        }
      } finally {
        or = !1, nn.current = qe, Ua(), Error.prepareStackTrace = We;
      }
      var Mi = E ? E.displayName || E.name : "", lt = Mi ? Vn(Mi) : "";
      return typeof E == "function" && Aa.set(E, lt), lt;
    }
    function pn(E, j, I) {
      return Wr(E, !1);
    }
    function Bn(E) {
      var j = E.prototype;
      return !!(j && j.isReactComponent);
    }
    function Dn(E, j, I) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return Wr(E, Bn(E));
      if (typeof E == "string")
        return Vn(E);
      switch (E) {
        case ue:
          return Vn("Suspense");
        case nt:
          return Vn("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case ce:
            return pn(E.render);
          case ne:
            return Dn(E.type, j, I);
          case he: {
            var me = E, We = me._payload, qe = me._init;
            try {
              return Dn(qe(We), j, I);
            } catch {
            }
          }
        }
      return "";
    }
    var _n = Object.prototype.hasOwnProperty, Pn = {}, Gr = fn.ReactDebugCurrentFrame;
    function Ea(E) {
      if (E) {
        var j = E._owner, I = Dn(E.type, E._source, j ? j.type : null);
        Gr.setExtraStackFrame(I);
      } else
        Gr.setExtraStackFrame(null);
    }
    function ni(E, j, I, me, We) {
      {
        var qe = Function.call.bind(_n);
        for (var xe in E)
          if (qe(E, xe)) {
            var Fe = void 0;
            try {
              if (typeof E[xe] != "function") {
                var hn = Error((me || "React class") + ": " + I + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw hn.name = "Invariant Violation", hn;
              }
              Fe = E[xe](j, xe, me, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_t) {
              Fe = _t;
            }
            Fe && !(Fe instanceof Error) && (Ea(We), Ke("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", I, xe, typeof Fe), Ea(null)), Fe instanceof Error && !(Fe.message in Pn) && (Pn[Fe.message] = !0, Ea(We), Ke("Failed %s type: %s", I, Fe.message), Ea(null));
          }
      }
    }
    var Fa = Array.isArray;
    function Ca(E) {
      return Fa(E);
    }
    function br(E) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, I = j && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return I;
      }
    }
    function Ha(E) {
      try {
        return kr(E), !1;
      } catch {
        return !0;
      }
    }
    function kr(E) {
      return "" + E;
    }
    function Ta(E) {
      if (Ha(E))
        return Ke("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(E)), kr(E);
    }
    var qt = fn.ReactCurrentOwner, Or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oi, Ra, G;
    G = {};
    function ge(E) {
      if (_n.call(E, "ref")) {
        var j = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Ae(E) {
      if (_n.call(E, "key")) {
        var j = Object.getOwnPropertyDescriptor(E, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function ct(E, j) {
      if (typeof E.ref == "string" && qt.current && j && qt.current.stateNode !== j) {
        var I = be(qt.current.type);
        G[I] || (Ke('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', be(qt.current.type), E.ref), G[I] = !0);
      }
    }
    function Ut(E, j) {
      {
        var I = function() {
          Oi || (Oi = !0, Ke("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        I.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function vn(E, j) {
      {
        var I = function() {
          Ra || (Ra = !0, Ke("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        I.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var It = function(E, j, I, me, We, qe, xe) {
      var Fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: K,
        // Built-in properties that belong on the element
        type: E,
        key: j,
        ref: I,
        props: xe,
        // Record the component responsible for creating this element.
        _owner: qe
      };
      return Fe._store = {}, Object.defineProperty(Fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty(Fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: We
      }), Object.freeze && (Object.freeze(Fe.props), Object.freeze(Fe)), Fe;
    };
    function cr(E, j, I, me, We) {
      {
        var qe, xe = {}, Fe = null, hn = null;
        I !== void 0 && (Ta(I), Fe = "" + I), Ae(j) && (Ta(j.key), Fe = "" + j.key), ge(j) && (hn = j.ref, ct(j, We));
        for (qe in j)
          _n.call(j, qe) && !Or.hasOwnProperty(qe) && (xe[qe] = j[qe]);
        if (E && E.defaultProps) {
          var _t = E.defaultProps;
          for (qe in _t)
            xe[qe] === void 0 && (xe[qe] = _t[qe]);
        }
        if (Fe || hn) {
          var At = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          Fe && Ut(xe, At), hn && vn(xe, At);
        }
        return It(E, Fe, hn, We, me, qt.current, xe);
      }
    }
    var Tt = fn.ReactCurrentOwner, Lr = fn.ReactDebugCurrentFrame;
    function St(E) {
      if (E) {
        var j = E._owner, I = Dn(E.type, E._source, j ? j.type : null);
        Lr.setExtraStackFrame(I);
      } else
        Lr.setExtraStackFrame(null);
    }
    var Rt;
    Rt = !1;
    function ql(E) {
      return typeof E == "object" && E !== null && E.$$typeof === K;
    }
    function ul() {
      {
        if (Tt.current) {
          var E = be(Tt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function Kl(E) {
      return "";
    }
    var io = {};
    function ys(E) {
      {
        var j = ul();
        if (!j) {
          var I = typeof E == "string" ? E : E.displayName || E.name;
          I && (j = `

Check the top-level render call using <` + I + ">.");
        }
        return j;
      }
    }
    function ol(E, j) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var I = ys(j);
        if (io[I])
          return;
        io[I] = !0;
        var me = "";
        E && E._owner && E._owner !== Tt.current && (me = " It was passed a child from " + be(E._owner.type) + "."), St(E), Ke('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, me), St(null);
      }
    }
    function Zl(E, j) {
      {
        if (typeof E != "object")
          return;
        if (Ca(E))
          for (var I = 0; I < E.length; I++) {
            var me = E[I];
            ql(me) && ol(me, j);
          }
        else if (ql(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var We = yt(E);
          if (typeof We == "function" && We !== E.entries)
            for (var qe = We.call(E), xe; !(xe = qe.next()).done; )
              ql(xe.value) && ol(xe.value, j);
        }
      }
    }
    function sl(E) {
      {
        var j = E.type;
        if (j == null || typeof j == "string")
          return;
        var I;
        if (typeof j == "function")
          I = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === ce || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === ne))
          I = j.propTypes;
        else
          return;
        if (I) {
          var me = be(j);
          ni(I, E.props, "prop", me, E);
        } else if (j.PropTypes !== void 0 && !Rt) {
          Rt = !0;
          var We = be(j);
          Ke("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", We || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && Ke("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jl(E) {
      {
        for (var j = Object.keys(E.props), I = 0; I < j.length; I++) {
          var me = j[I];
          if (me !== "children" && me !== "key") {
            St(E), Ke("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), St(null);
            break;
          }
        }
        E.ref !== null && (St(E), Ke("Invalid attribute `ref` supplied to `React.Fragment`."), St(null));
      }
    }
    var ja = {};
    function ri(E, j, I, me, We, qe) {
      {
        var xe = Vt(E);
        if (!xe) {
          var Fe = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (Fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var hn = Kl();
          hn ? Fe += hn : Fe += ul();
          var _t;
          E === null ? _t = "null" : Ca(E) ? _t = "array" : E !== void 0 && E.$$typeof === K ? (_t = "<" + (be(E.type) || "Unknown") + " />", Fe = " Did you accidentally export a JSX literal instead of a component?") : _t = typeof E, Ke("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _t, Fe);
        }
        var At = cr(E, j, I, We, qe);
        if (At == null)
          return At;
        if (xe) {
          var fr = j.children;
          if (fr !== void 0)
            if (me)
              if (Ca(fr)) {
                for (var Mi = 0; Mi < fr.length; Mi++)
                  Zl(fr[Mi], E);
                Object.freeze && Object.freeze(fr);
              } else
                Ke("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zl(fr, E);
        }
        if (_n.call(j, "key")) {
          var lt = be(E), $n = Object.keys(j).filter(function(Va) {
            return Va !== "key";
          }), Nr = $n.length > 0 ? "{key: someKey, " + $n.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ja[lt + Nr]) {
            var He = $n.length > 0 ? "{" + $n.join(": ..., ") + ": ...}" : "{}";
            Ke(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Nr, lt, He, lt), ja[lt + Nr] = !0;
          }
        }
        return E === Pe ? Jl(At) : sl(At), At;
      }
    }
    function Mr(E, j, I) {
      return ri(E, j, I, !0);
    }
    function xa(E, j, I) {
      return ri(E, j, I, !1);
    }
    var Li = xa, cl = Mr;
    _p.Fragment = Pe, _p.jsx = Li, _p.jsxs = cl;
  }()), _p;
}
process.env.NODE_ENV === "production" ? c0.exports = Z_() : c0.exports = J_();
var Sa = c0.exports;
const eb = "_dimmed_yizsj_9", tb = "_modalWrapper_yizsj_15", nb = "_modalBottomWrapper_yizsj_25", rb = "_modal_yizsj_15", ab = "_modalBottom_yizsj_25", ib = "_modalEnter_yizsj_52", lb = "_modalFadeIn_yizsj_1", ub = "_modalExit_yizsj_56", ob = "_modalFadeOut_yizsj_1", sb = "_modalBottomEnter_yizsj_60", cb = "_modalBottomFadeIn_yizsj_1", fb = "_modalBottomExit_yizsj_64", db = "_modalBottomFadeOut_yizsj_1", ti = {
  dimmed: eb,
  modalWrapper: tb,
  modalBottomWrapper: nb,
  modal: rb,
  modalBottom: ab,
  modalEnter: ib,
  modalFadeIn: lb,
  modalExit: ub,
  modalFadeOut: ob,
  modalBottomEnter: sb,
  modalBottomFadeIn: cb,
  modalBottomExit: fb,
  modalBottomFadeOut: db
};
var f0 = { exports: {} }, ya = {}, Lm = { exports: {} }, o0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XC;
function pb() {
  return XC || (XC = 1, function(P) {
    function K(Y, Ce) {
      var ee = Y.length;
      Y.push(Ce);
      e:
        for (; 0 < ee; ) {
          var Ze = ee - 1 >>> 1, rt = Y[Ze];
          if (0 < it(rt, Ce))
            Y[Ze] = Ce, Y[ee] = rt, ee = Ze;
          else
            break e;
        }
    }
    function k(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function Pe(Y) {
      if (Y.length === 0)
        return null;
      var Ce = Y[0], ee = Y.pop();
      if (ee !== Ce) {
        Y[0] = ee;
        e:
          for (var Ze = 0, rt = Y.length, wn = rt >>> 1; Ze < wn; ) {
            var Kn = 2 * (Ze + 1) - 1, Ua = Y[Kn], nn = Kn + 1, Qr = Y[nn];
            if (0 > it(Ua, ee))
              nn < rt && 0 > it(Qr, Ua) ? (Y[Ze] = Qr, Y[nn] = ee, Ze = nn) : (Y[Ze] = Ua, Y[Kn] = ee, Ze = Kn);
            else if (nn < rt && 0 > it(Qr, ee))
              Y[Ze] = Qr, Y[nn] = ee, Ze = nn;
            else
              break e;
          }
      }
      return Ce;
    }
    function it(Y, Ce) {
      var ee = Y.sortIndex - Ce.sortIndex;
      return ee !== 0 ? ee : Y.id - Ce.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ve = performance;
      P.unstable_now = function() {
        return Ve.now();
      };
    } else {
      var g = Date, Ct = g.now();
      P.unstable_now = function() {
        return g.now() - Ct;
      };
    }
    var ce = [], ue = [], nt = 1, ne = null, he = 3, oe = !1, ze = !1, st = !1, yt = typeof setTimeout == "function" ? setTimeout : null, fn = typeof clearTimeout == "function" ? clearTimeout : null, Ke = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Be(Y) {
      for (var Ce = k(ue); Ce !== null; ) {
        if (Ce.callback === null)
          Pe(ue);
        else if (Ce.startTime <= Y)
          Pe(ue), Ce.sortIndex = Ce.expirationTime, K(ce, Ce);
        else
          break;
        Ce = k(ue);
      }
    }
    function gt(Y) {
      if (st = !1, Be(Y), !ze)
        if (k(ce) !== null)
          ze = !0, Dt($e);
        else {
          var Ce = k(ue);
          Ce !== null && qn(gt, Ce.startTime - Y);
        }
    }
    function $e(Y, Ce) {
      ze = !1, st && (st = !1, fn(Rn), Rn = -1), oe = !0;
      var ee = he;
      try {
        for (Be(Ce), ne = k(ce); ne !== null && (!(ne.expirationTime > Ce) || Y && !pt()); ) {
          var Ze = ne.callback;
          if (typeof Ze == "function") {
            ne.callback = null, he = ne.priorityLevel;
            var rt = Ze(ne.expirationTime <= Ce);
            Ce = P.unstable_now(), typeof rt == "function" ? ne.callback = rt : ne === k(ce) && Pe(ce), Be(Ce);
          } else
            Pe(ce);
          ne = k(ce);
        }
        if (ne !== null)
          var wn = !0;
        else {
          var Kn = k(ue);
          Kn !== null && qn(gt, Kn.startTime - Ce), wn = !1;
        }
        return wn;
      } finally {
        ne = null, he = ee, oe = !1;
      }
    }
    var wt = !1, Ue = null, Rn = -1, jn = 5, Vt = -1;
    function pt() {
      return !(P.unstable_now() - Vt < jn);
    }
    function xn() {
      if (Ue !== null) {
        var Y = P.unstable_now();
        Vt = Y;
        var Ce = !0;
        try {
          Ce = Ue(!0, Y);
        } finally {
          Ce ? be() : (wt = !1, Ue = null);
        }
      } else
        wt = !1;
    }
    var be;
    if (typeof Ke == "function")
      be = function() {
        Ke(xn);
      };
    else if (typeof MessageChannel < "u") {
      var Qe = new MessageChannel(), dn = Qe.port2;
      Qe.port1.onmessage = xn, be = function() {
        dn.postMessage(null);
      };
    } else
      be = function() {
        yt(xn, 0);
      };
    function Dt(Y) {
      Ue = Y, wt || (wt = !0, be());
    }
    function qn(Y, Ce) {
      Rn = yt(function() {
        Y(P.unstable_now());
      }, Ce);
    }
    P.unstable_IdlePriority = 5, P.unstable_ImmediatePriority = 1, P.unstable_LowPriority = 4, P.unstable_NormalPriority = 3, P.unstable_Profiling = null, P.unstable_UserBlockingPriority = 2, P.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, P.unstable_continueExecution = function() {
      ze || oe || (ze = !0, Dt($e));
    }, P.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : jn = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, P.unstable_getCurrentPriorityLevel = function() {
      return he;
    }, P.unstable_getFirstCallbackNode = function() {
      return k(ce);
    }, P.unstable_next = function(Y) {
      switch (he) {
        case 1:
        case 2:
        case 3:
          var Ce = 3;
          break;
        default:
          Ce = he;
      }
      var ee = he;
      he = Ce;
      try {
        return Y();
      } finally {
        he = ee;
      }
    }, P.unstable_pauseExecution = function() {
    }, P.unstable_requestPaint = function() {
    }, P.unstable_runWithPriority = function(Y, Ce) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var ee = he;
      he = Y;
      try {
        return Ce();
      } finally {
        he = ee;
      }
    }, P.unstable_scheduleCallback = function(Y, Ce, ee) {
      var Ze = P.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? Ze + ee : Ze) : ee = Ze, Y) {
        case 1:
          var rt = -1;
          break;
        case 2:
          rt = 250;
          break;
        case 5:
          rt = 1073741823;
          break;
        case 4:
          rt = 1e4;
          break;
        default:
          rt = 5e3;
      }
      return rt = ee + rt, Y = { id: nt++, callback: Ce, priorityLevel: Y, startTime: ee, expirationTime: rt, sortIndex: -1 }, ee > Ze ? (Y.sortIndex = ee, K(ue, Y), k(ce) === null && Y === k(ue) && (st ? (fn(Rn), Rn = -1) : st = !0, qn(gt, ee - Ze))) : (Y.sortIndex = rt, K(ce, Y), ze || oe || (ze = !0, Dt($e))), Y;
    }, P.unstable_shouldYield = pt, P.unstable_wrapCallback = function(Y) {
      var Ce = he;
      return function() {
        var ee = he;
        he = Ce;
        try {
          return Y.apply(this, arguments);
        } finally {
          he = ee;
        }
      };
    };
  }(o0)), o0;
}
var s0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qC;
function vb() {
  return qC || (qC = 1, function(P) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var K = !1, k = !1, Pe = 5;
      function it(G, ge) {
        var Ae = G.length;
        G.push(ge), Ct(G, ge, Ae);
      }
      function Ve(G) {
        return G.length === 0 ? null : G[0];
      }
      function g(G) {
        if (G.length === 0)
          return null;
        var ge = G[0], Ae = G.pop();
        return Ae !== ge && (G[0] = Ae, ce(G, Ae, 0)), ge;
      }
      function Ct(G, ge, Ae) {
        for (var ct = Ae; ct > 0; ) {
          var Ut = ct - 1 >>> 1, vn = G[Ut];
          if (ue(vn, ge) > 0)
            G[Ut] = ge, G[ct] = vn, ct = Ut;
          else
            return;
        }
      }
      function ce(G, ge, Ae) {
        for (var ct = Ae, Ut = G.length, vn = Ut >>> 1; ct < vn; ) {
          var It = (ct + 1) * 2 - 1, cr = G[It], Tt = It + 1, Lr = G[Tt];
          if (ue(cr, ge) < 0)
            Tt < Ut && ue(Lr, cr) < 0 ? (G[ct] = Lr, G[Tt] = ge, ct = Tt) : (G[ct] = cr, G[It] = ge, ct = It);
          else if (Tt < Ut && ue(Lr, ge) < 0)
            G[ct] = Lr, G[Tt] = ge, ct = Tt;
          else
            return;
        }
      }
      function ue(G, ge) {
        var Ae = G.sortIndex - ge.sortIndex;
        return Ae !== 0 ? Ae : G.id - ge.id;
      }
      var nt = 1, ne = 2, he = 3, oe = 4, ze = 5;
      function st(G, ge) {
      }
      var yt = typeof performance == "object" && typeof performance.now == "function";
      if (yt) {
        var fn = performance;
        P.unstable_now = function() {
          return fn.now();
        };
      } else {
        var Ke = Date, Be = Ke.now();
        P.unstable_now = function() {
          return Ke.now() - Be;
        };
      }
      var gt = 1073741823, $e = -1, wt = 250, Ue = 5e3, Rn = 1e4, jn = gt, Vt = [], pt = [], xn = 1, be = null, Qe = he, dn = !1, Dt = !1, qn = !1, Y = typeof setTimeout == "function" ? setTimeout : null, Ce = typeof clearTimeout == "function" ? clearTimeout : null, ee = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Ze(G) {
        for (var ge = Ve(pt); ge !== null; ) {
          if (ge.callback === null)
            g(pt);
          else if (ge.startTime <= G)
            g(pt), ge.sortIndex = ge.expirationTime, it(Vt, ge);
          else
            return;
          ge = Ve(pt);
        }
      }
      function rt(G) {
        if (qn = !1, Ze(G), !Dt)
          if (Ve(Vt) !== null)
            Dt = !0, Ta(wn);
          else {
            var ge = Ve(pt);
            ge !== null && qt(rt, ge.startTime - G);
          }
      }
      function wn(G, ge) {
        Dt = !1, qn && (qn = !1, Or()), dn = !0;
        var Ae = Qe;
        try {
          var ct;
          if (!k)
            return Kn(G, ge);
        } finally {
          be = null, Qe = Ae, dn = !1;
        }
      }
      function Kn(G, ge) {
        var Ae = ge;
        for (Ze(Ae), be = Ve(Vt); be !== null && !K && !(be.expirationTime > Ae && (!G || Ea())); ) {
          var ct = be.callback;
          if (typeof ct == "function") {
            be.callback = null, Qe = be.priorityLevel;
            var Ut = be.expirationTime <= Ae, vn = ct(Ut);
            Ae = P.unstable_now(), typeof vn == "function" ? be.callback = vn : be === Ve(Vt) && g(Vt), Ze(Ae);
          } else
            g(Vt);
          be = Ve(Vt);
        }
        if (be !== null)
          return !0;
        var It = Ve(pt);
        return It !== null && qt(rt, It.startTime - Ae), !1;
      }
      function Ua(G, ge) {
        switch (G) {
          case nt:
          case ne:
          case he:
          case oe:
          case ze:
            break;
          default:
            G = he;
        }
        var Ae = Qe;
        Qe = G;
        try {
          return ge();
        } finally {
          Qe = Ae;
        }
      }
      function nn(G) {
        var ge;
        switch (Qe) {
          case nt:
          case ne:
          case he:
            ge = he;
            break;
          default:
            ge = Qe;
            break;
        }
        var Ae = Qe;
        Qe = ge;
        try {
          return G();
        } finally {
          Qe = Ae;
        }
      }
      function Qr(G) {
        var ge = Qe;
        return function() {
          var Ae = Qe;
          Qe = ge;
          try {
            return G.apply(this, arguments);
          } finally {
            Qe = Ae;
          }
        };
      }
      function Vn(G, ge, Ae) {
        var ct = P.unstable_now(), Ut;
        if (typeof Ae == "object" && Ae !== null) {
          var vn = Ae.delay;
          typeof vn == "number" && vn > 0 ? Ut = ct + vn : Ut = ct;
        } else
          Ut = ct;
        var It;
        switch (G) {
          case nt:
            It = $e;
            break;
          case ne:
            It = wt;
            break;
          case ze:
            It = jn;
            break;
          case oe:
            It = Rn;
            break;
          case he:
          default:
            It = Ue;
            break;
        }
        var cr = Ut + It, Tt = {
          id: xn++,
          callback: ge,
          priorityLevel: G,
          startTime: Ut,
          expirationTime: cr,
          sortIndex: -1
        };
        return Ut > ct ? (Tt.sortIndex = Ut, it(pt, Tt), Ve(Vt) === null && Tt === Ve(pt) && (qn ? Or() : qn = !0, qt(rt, Ut - ct))) : (Tt.sortIndex = cr, it(Vt, Tt), !Dt && !dn && (Dt = !0, Ta(wn))), Tt;
      }
      function or() {
      }
      function Aa() {
        !Dt && !dn && (Dt = !0, Ta(wn));
      }
      function sr() {
        return Ve(Vt);
      }
      function Wr(G) {
        G.callback = null;
      }
      function pn() {
        return Qe;
      }
      var Bn = !1, Dn = null, _n = -1, Pn = Pe, Gr = -1;
      function Ea() {
        var G = P.unstable_now() - Gr;
        return !(G < Pn);
      }
      function ni() {
      }
      function Fa(G) {
        if (G < 0 || G > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        G > 0 ? Pn = Math.floor(1e3 / G) : Pn = Pe;
      }
      var Ca = function() {
        if (Dn !== null) {
          var G = P.unstable_now();
          Gr = G;
          var ge = !0, Ae = !0;
          try {
            Ae = Dn(ge, G);
          } finally {
            Ae ? br() : (Bn = !1, Dn = null);
          }
        } else
          Bn = !1;
      }, br;
      if (typeof ee == "function")
        br = function() {
          ee(Ca);
        };
      else if (typeof MessageChannel < "u") {
        var Ha = new MessageChannel(), kr = Ha.port2;
        Ha.port1.onmessage = Ca, br = function() {
          kr.postMessage(null);
        };
      } else
        br = function() {
          Y(Ca, 0);
        };
      function Ta(G) {
        Dn = G, Bn || (Bn = !0, br());
      }
      function qt(G, ge) {
        _n = Y(function() {
          G(P.unstable_now());
        }, ge);
      }
      function Or() {
        Ce(_n), _n = -1;
      }
      var Oi = ni, Ra = null;
      P.unstable_IdlePriority = ze, P.unstable_ImmediatePriority = nt, P.unstable_LowPriority = oe, P.unstable_NormalPriority = he, P.unstable_Profiling = Ra, P.unstable_UserBlockingPriority = ne, P.unstable_cancelCallback = Wr, P.unstable_continueExecution = Aa, P.unstable_forceFrameRate = Fa, P.unstable_getCurrentPriorityLevel = pn, P.unstable_getFirstCallbackNode = sr, P.unstable_next = nn, P.unstable_pauseExecution = or, P.unstable_requestPaint = Oi, P.unstable_runWithPriority = Ua, P.unstable_scheduleCallback = Vn, P.unstable_shouldYield = Ea, P.unstable_wrapCallback = Qr, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(s0)), s0;
}
var KC;
function nT() {
  return KC || (KC = 1, process.env.NODE_ENV === "production" ? Lm.exports = pb() : Lm.exports = vb()), Lm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZC;
function hb() {
  if (ZC)
    return ya;
  ZC = 1;
  var P = Nm, K = nT();
  function k(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Pe = /* @__PURE__ */ new Set(), it = {};
  function Ve(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (it[n] = r, n = 0; n < r.length; n++)
      Pe.add(r[n]);
  }
  var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ce = Object.prototype.hasOwnProperty, ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, nt = {}, ne = {};
  function he(n) {
    return ce.call(ne, n) ? !0 : ce.call(nt, n) ? !1 : ue.test(n) ? ne[n] = !0 : (nt[n] = !0, !1);
  }
  function oe(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ze(n, r, l, o) {
    if (r === null || typeof r > "u" || oe(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function st(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var yt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    yt[n] = new st(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    yt[r] = new st(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    yt[n] = new st(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    yt[n] = new st(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    yt[n] = new st(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    yt[n] = new st(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    yt[n] = new st(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    yt[n] = new st(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    yt[n] = new st(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var fn = /[\-:]([a-z])/g;
  function Ke(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fn,
      Ke
    );
    yt[r] = new st(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fn, Ke);
    yt[r] = new st(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fn, Ke);
    yt[r] = new st(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    yt[n] = new st(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), yt.xlinkHref = new st("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    yt[n] = new st(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Be(n, r, l, o) {
    var c = yt.hasOwnProperty(r) ? yt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ze(r, l, c, o) && (l = null), o || c === null ? he(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var gt = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $e = Symbol.for("react.element"), wt = Symbol.for("react.portal"), Ue = Symbol.for("react.fragment"), Rn = Symbol.for("react.strict_mode"), jn = Symbol.for("react.profiler"), Vt = Symbol.for("react.provider"), pt = Symbol.for("react.context"), xn = Symbol.for("react.forward_ref"), be = Symbol.for("react.suspense"), Qe = Symbol.for("react.suspense_list"), dn = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), qn = Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function Ce(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ee = Object.assign, Ze;
  function rt(n) {
    if (Ze === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        Ze = r && r[1] || "";
      }
    return `
` + Ze + n;
  }
  var wn = !1;
  function Kn(n, r) {
    if (!n || wn)
      return "";
    wn = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (L) {
            var o = L;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (L) {
            o = L;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (L) {
          o = L;
        }
        n();
      }
    } catch (L) {
      if (L && o && typeof L.stack == "string") {
        for (var c = L.stack.split(`
`), d = o.stack.split(`
`), h = c.length - 1, S = d.length - 1; 1 <= h && 0 <= S && c[h] !== d[S]; )
          S--;
        for (; 1 <= h && 0 <= S; h--, S--)
          if (c[h] !== d[S]) {
            if (h !== 1 || S !== 1)
              do
                if (h--, S--, 0 > S || c[h] !== d[S]) {
                  var C = `
` + c[h].replace(" at new ", " at ");
                  return n.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", n.displayName)), C;
                }
              while (1 <= h && 0 <= S);
            break;
          }
      }
    } finally {
      wn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? rt(n) : "";
  }
  function Ua(n) {
    switch (n.tag) {
      case 5:
        return rt(n.type);
      case 16:
        return rt("Lazy");
      case 13:
        return rt("Suspense");
      case 19:
        return rt("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Kn(n.type, !1), n;
      case 11:
        return n = Kn(n.type.render, !1), n;
      case 1:
        return n = Kn(n.type, !0), n;
      default:
        return "";
    }
  }
  function nn(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Ue:
        return "Fragment";
      case wt:
        return "Portal";
      case jn:
        return "Profiler";
      case Rn:
        return "StrictMode";
      case be:
        return "Suspense";
      case Qe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case pt:
          return (n.displayName || "Context") + ".Consumer";
        case Vt:
          return (n._context.displayName || "Context") + ".Provider";
        case xn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case dn:
          return r = n.displayName || null, r !== null ? r : nn(n.type) || "Memo";
        case Dt:
          r = n._payload, n = n._init;
          try {
            return nn(n(r));
          } catch {
          }
      }
    return null;
  }
  function Qr(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return nn(r);
      case 8:
        return r === Rn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Vn(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function or(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Aa(n) {
    var r = or(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(h) {
        o = "" + h, d.call(this, h);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(h) {
        o = "" + h;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function sr(n) {
    n._valueTracker || (n._valueTracker = Aa(n));
  }
  function Wr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = or(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function pn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Bn(n, r) {
    var l = r.checked;
    return ee({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Dn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Vn(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function _n(n, r) {
    r = r.checked, r != null && Be(n, "checked", r, !1);
  }
  function Pn(n, r) {
    _n(n, r);
    var l = Vn(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ea(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ea(n, r.type, Vn(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Gr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ea(n, r, l) {
    (r !== "number" || pn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ni = Array.isArray;
  function Fa(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Vn(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ca(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(k(91));
    return ee({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function br(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(k(92));
        if (ni(l)) {
          if (1 < l.length)
            throw Error(k(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Vn(l) };
  }
  function Ha(n, r) {
    var l = Vn(r.value), o = Vn(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function kr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Ta(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function qt(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ta(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Or, Oi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Or = Or || document.createElement("div"), Or.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Or.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Ra(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var G = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ge = ["Webkit", "ms", "Moz", "O"];
  Object.keys(G).forEach(function(n) {
    ge.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), G[r] = G[n];
    });
  });
  function Ae(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || G.hasOwnProperty(n) && G[n] ? ("" + r).trim() : r + "px";
  }
  function ct(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = Ae(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Ut = ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function vn(n, r) {
    if (r) {
      if (Ut[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(k(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(k(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(k(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(k(62));
    }
  }
  function It(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var cr = null;
  function Tt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Lr = null, St = null, Rt = null;
  function ql(n) {
    if (n = bo(n)) {
      if (typeof Lr != "function")
        throw Error(k(280));
      var r = n.stateNode;
      r && (r = Se(r), Lr(n.stateNode, n.type, r));
    }
  }
  function ul(n) {
    St ? Rt ? Rt.push(n) : Rt = [n] : St = n;
  }
  function Kl() {
    if (St) {
      var n = St, r = Rt;
      if (Rt = St = null, ql(n), r)
        for (n = 0; n < r.length; n++)
          ql(r[n]);
    }
  }
  function io(n, r) {
    return n(r);
  }
  function ys() {
  }
  var ol = !1;
  function Zl(n, r, l) {
    if (ol)
      return n(r, l);
    ol = !0;
    try {
      return io(n, r, l);
    } finally {
      ol = !1, (St !== null || Rt !== null) && (ys(), Kl());
    }
  }
  function sl(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Se(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(k(231, r, typeof l));
    return l;
  }
  var Jl = !1;
  if (Ct)
    try {
      var ja = {};
      Object.defineProperty(ja, "passive", { get: function() {
        Jl = !0;
      } }), window.addEventListener("test", ja, ja), window.removeEventListener("test", ja, ja);
    } catch {
      Jl = !1;
    }
  function ri(n, r, l, o, c, d, h, S, C) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, L);
    } catch (H) {
      this.onError(H);
    }
  }
  var Mr = !1, xa = null, Li = !1, cl = null, E = { onError: function(n) {
    Mr = !0, xa = n;
  } };
  function j(n, r, l, o, c, d, h, S, C) {
    Mr = !1, xa = null, ri.apply(E, arguments);
  }
  function I(n, r, l, o, c, d, h, S, C) {
    if (j.apply(this, arguments), Mr) {
      if (Mr) {
        var L = xa;
        Mr = !1, xa = null;
      } else
        throw Error(k(198));
      Li || (Li = !0, cl = L);
    }
  }
  function me(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function We(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function qe(n) {
    if (me(n) !== n)
      throw Error(k(188));
  }
  function xe(n) {
    var r = n.alternate;
    if (!r) {
      if (r = me(n), r === null)
        throw Error(k(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return qe(c), n;
          if (d === o)
            return qe(c), r;
          d = d.sibling;
        }
        throw Error(k(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var h = !1, S = c.child; S; ) {
          if (S === l) {
            h = !0, l = c, o = d;
            break;
          }
          if (S === o) {
            h = !0, o = c, l = d;
            break;
          }
          S = S.sibling;
        }
        if (!h) {
          for (S = d.child; S; ) {
            if (S === l) {
              h = !0, l = d, o = c;
              break;
            }
            if (S === o) {
              h = !0, o = d, l = c;
              break;
            }
            S = S.sibling;
          }
          if (!h)
            throw Error(k(189));
        }
      }
      if (l.alternate !== o)
        throw Error(k(190));
    }
    if (l.tag !== 3)
      throw Error(k(188));
    return l.stateNode.current === l ? n : r;
  }
  function Fe(n) {
    return n = xe(n), n !== null ? hn(n) : null;
  }
  function hn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = hn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var _t = K.unstable_scheduleCallback, At = K.unstable_cancelCallback, fr = K.unstable_shouldYield, Mi = K.unstable_requestPaint, lt = K.unstable_now, $n = K.unstable_getCurrentPriorityLevel, Nr = K.unstable_ImmediatePriority, He = K.unstable_UserBlockingPriority, Va = K.unstable_NormalPriority, bp = K.unstable_LowPriority, hf = K.unstable_IdlePriority, lo = null, wa = null;
  function kp(n) {
    if (wa && typeof wa.onCommitFiberRoot == "function")
      try {
        wa.onCommitFiberRoot(lo, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Xr = Math.clz32 ? Math.clz32 : zm, Op = Math.log, Lp = Math.LN2;
  function zm(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Op(n) / Lp | 0) | 0;
  }
  var gs = 64, eu = 4194304;
  function fl(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Da(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var S = h & ~c;
      S !== 0 ? o = fl(S) : (d &= h, d !== 0 && (o = fl(d)));
    } else
      h = l & ~c, h !== 0 ? o = fl(h) : d !== 0 && (o = fl(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - Xr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function mf(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ss(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - Xr(d), S = 1 << h, C = c[h];
      C === -1 ? (!(S & l) || S & o) && (c[h] = mf(S, r)) : C <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function yf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Es() {
    var n = gs;
    return gs <<= 1, !(gs & 4194240) && (gs = 64), n;
  }
  function gf(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function dl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Xr(r), n[r] = l;
  }
  function Um(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Xr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function uo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Xr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var ft = 0;
  function Sf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Mp, Cs, dt, Np, Ef, Le = !1, oo = [], Kt = null, qr = null, Kr = null, so = /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ new Map(), vt = [], Am = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function _a(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Kt = null;
        break;
      case "dragenter":
      case "dragleave":
        qr = null;
        break;
      case "mouseover":
      case "mouseout":
        Kr = null;
        break;
      case "pointerover":
      case "pointerout":
        so.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        rn.delete(r.pointerId);
    }
  }
  function Yn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = bo(r), r !== null && Cs(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Ni(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Kt = Yn(Kt, n, r, l, o, c), !0;
      case "dragenter":
        return qr = Yn(qr, n, r, l, o, c), !0;
      case "mouseover":
        return Kr = Yn(Kr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return so.set(d, Yn(so.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, rn.set(d, Yn(rn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function zp(n) {
    var r = Jr(n.target);
    if (r !== null) {
      var l = me(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = We(l), r !== null) {
            n.blockedOn = r, Ef(n.priority, function() {
              dt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function tu(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = xs(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        cr = o, l.target.dispatchEvent(o), cr = null;
      } else
        return r = bo(l), r !== null && Cs(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Cf(n, r, l) {
    tu(n) && l.delete(r);
  }
  function Up() {
    Le = !1, Kt !== null && tu(Kt) && (Kt = null), qr !== null && tu(qr) && (qr = null), Kr !== null && tu(Kr) && (Kr = null), so.forEach(Cf), rn.forEach(Cf);
  }
  function co(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Le || (Le = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, Up)));
  }
  function fo(n) {
    function r(c) {
      return co(c, n);
    }
    if (0 < oo.length) {
      co(oo[0], n);
      for (var l = 1; l < oo.length; l++) {
        var o = oo[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Kt !== null && co(Kt, n), qr !== null && co(qr, n), Kr !== null && co(Kr, n), so.forEach(r), rn.forEach(r), l = 0; l < vt.length; l++)
      o = vt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < vt.length && (l = vt[0], l.blockedOn === null); )
      zp(l), l.blockedOn === null && vt.shift();
  }
  var nu = gt.ReactCurrentBatchConfig, pl = !0;
  function Ap(n, r, l, o) {
    var c = ft, d = nu.transition;
    nu.transition = null;
    try {
      ft = 1, Rs(n, r, l, o);
    } finally {
      ft = c, nu.transition = d;
    }
  }
  function Ts(n, r, l, o) {
    var c = ft, d = nu.transition;
    nu.transition = null;
    try {
      ft = 4, Rs(n, r, l, o);
    } finally {
      ft = c, nu.transition = d;
    }
  }
  function Rs(n, r, l, o) {
    if (pl) {
      var c = xs(n, r, l, o);
      if (c === null)
        As(n, r, o, po, l), _a(n, o);
      else if (Ni(c, n, r, l, o))
        o.stopPropagation();
      else if (_a(n, o), r & 4 && -1 < Am.indexOf(n)) {
        for (; c !== null; ) {
          var d = bo(c);
          if (d !== null && Mp(d), d = xs(n, r, l, o), d === null && As(n, r, o, po, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        As(n, r, o, null, l);
    }
  }
  var po = null;
  function xs(n, r, l, o) {
    if (po = null, n = Tt(o), n = Jr(n), n !== null)
      if (r = me(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = We(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return po = n, null;
  }
  function Tf(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch ($n()) {
          case Nr:
            return 1;
          case He:
            return 4;
          case Va:
          case bp:
            return 16;
          case hf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ai = null, vo = null, ho = null;
  function Rf() {
    if (ho)
      return ho;
    var n, r = vo, l = r.length, o, c = "value" in ai ? ai.value : ai.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++)
      ;
    return ho = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function ru(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function mo() {
    return !0;
  }
  function Fp() {
    return !1;
  }
  function zr(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n)
        n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? mo : Fp, this.isPropagationStopped = Fp, this;
    }
    return ee(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = mo);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = mo);
    }, persist: function() {
    }, isPersistent: mo }), r;
  }
  var zi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ws = zr(zi), au = ee({}, zi, { view: 0, detail: 0 }), Hp = zr(au), Ds, xf, yo, mn = ee({}, au, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: bf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== yo && (yo && n.type === "mousemove" ? (Ds = n.screenX - yo.screenX, xf = n.screenY - yo.screenY) : xf = Ds = 0, yo = n), Ds);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : xf;
  } }), _s = zr(mn), jp = ee({}, mn, { dataTransfer: 0 }), Vp = zr(jp), Fm = ee({}, au, { relatedTarget: 0 }), Ui = zr(Fm), wf = ee({}, zi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Bp = zr(wf), Hm = ee({}, zi, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), jm = zr(Hm), Vm = ee({}, zi, { data: 0 }), Df = zr(Vm), _f = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Pp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, $p = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = $p[n]) ? !!r[n] : !1;
  }
  function bf() {
    return Yp;
  }
  var ii = ee({}, au, { key: function(n) {
    if (n.key) {
      var r = _f[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = ru(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Pp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: bf, charCode: function(n) {
    return n.type === "keypress" ? ru(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? ru(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Bm = zr(ii), kf = ee({}, mn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bs = zr(kf), Of = ee({}, au, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: bf }), Pm = zr(Of), ks = ee({}, zi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ip = zr(ks), dr = ee({}, mn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), li = zr(dr), Zt = [9, 13, 27, 32], ba = Ct && "CompositionEvent" in window, vl = null;
  Ct && "documentMode" in document && (vl = document.documentMode);
  var Os = Ct && "TextEvent" in window && !vl, Qp = Ct && (!ba || vl && 8 < vl && 11 >= vl), iu = " ", Wp = !1;
  function Gp(n, r) {
    switch (n) {
      case "keyup":
        return Zt.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ls(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var lu = !1;
  function $m(n, r) {
    switch (n) {
      case "compositionend":
        return Ls(r);
      case "keypress":
        return r.which !== 32 ? null : (Wp = !0, iu);
      case "textInput":
        return n = r.data, n === iu && Wp ? null : n;
      default:
        return null;
    }
  }
  function Ym(n, r) {
    if (lu)
      return n === "compositionend" || !ba && Gp(n, r) ? (n = Rf(), ho = vo = ai = null, lu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Qp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Xp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function qp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Xp[n.type] : r === "textarea";
  }
  function Kp(n, r, l, o) {
    ul(o), r = wo(r, "onChange"), 0 < r.length && (l = new ws("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var go = null, uu = null;
  function ou(n) {
    Us(n, 0);
  }
  function su(n) {
    var r = fu(n);
    if (Wr(r))
      return n;
  }
  function Zp(n, r) {
    if (n === "change")
      return r;
  }
  var Lf = !1;
  if (Ct) {
    var Mf;
    if (Ct) {
      var Nf = "oninput" in document;
      if (!Nf) {
        var Jp = document.createElement("div");
        Jp.setAttribute("oninput", "return;"), Nf = typeof Jp.oninput == "function";
      }
      Mf = Nf;
    } else
      Mf = !1;
    Lf = Mf && (!document.documentMode || 9 < document.documentMode);
  }
  function ev() {
    go && (go.detachEvent("onpropertychange", tv), uu = go = null);
  }
  function tv(n) {
    if (n.propertyName === "value" && su(uu)) {
      var r = [];
      Kp(r, uu, n, Tt(n)), Zl(ou, r);
    }
  }
  function Im(n, r, l) {
    n === "focusin" ? (ev(), go = r, uu = l, go.attachEvent("onpropertychange", tv)) : n === "focusout" && ev();
  }
  function Qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return su(uu);
  }
  function Wm(n, r) {
    if (n === "click")
      return su(r);
  }
  function nv(n, r) {
    if (n === "input" || n === "change")
      return su(r);
  }
  function Gm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Zr = typeof Object.is == "function" ? Object.is : Gm;
  function So(n, r) {
    if (Zr(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ce.call(r, c) || !Zr(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function rv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function av(n, r) {
    var l = rv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = rv(l);
    }
  }
  function iv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? iv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ms() {
    for (var n = window, r = pn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = pn(n.document);
    }
    return r;
  }
  function ui(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Ns(n) {
    var r = Ms(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && iv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ui(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = av(l, d);
          var h = av(
            l,
            o
          );
          c && h && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== h.node || n.focusOffset !== h.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(h.node, h.offset)) : (r.setEnd(h.node, h.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var lv = Ct && "documentMode" in document && 11 >= document.documentMode, ka = null, zf = null, Eo = null, Uf = !1;
  function uv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Uf || ka == null || ka !== pn(o) || (o = ka, "selectionStart" in o && ui(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Eo && So(Eo, o) || (Eo = o, o = wo(zf, "onSelect"), 0 < o.length && (r = new ws("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = ka)));
  }
  function zs(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var hl = { animationend: zs("Animation", "AnimationEnd"), animationiteration: zs("Animation", "AnimationIteration"), animationstart: zs("Animation", "AnimationStart"), transitionend: zs("Transition", "TransitionEnd") }, Af = {}, Ff = {};
  Ct && (Ff = document.createElement("div").style, "AnimationEvent" in window || (delete hl.animationend.animation, delete hl.animationiteration.animation, delete hl.animationstart.animation), "TransitionEvent" in window || delete hl.transitionend.transition);
  function yn(n) {
    if (Af[n])
      return Af[n];
    if (!hl[n])
      return n;
    var r = hl[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Ff)
        return Af[n] = r[l];
    return n;
  }
  var Hf = yn("animationend"), ov = yn("animationiteration"), sv = yn("animationstart"), cv = yn("transitionend"), fv = /* @__PURE__ */ new Map(), dv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function oi(n, r) {
    fv.set(n, r), Ve(r, [n]);
  }
  for (var Co = 0; Co < dv.length; Co++) {
    var ml = dv[Co], Xm = ml.toLowerCase(), To = ml[0].toUpperCase() + ml.slice(1);
    oi(Xm, "on" + To);
  }
  oi(Hf, "onAnimationEnd"), oi(ov, "onAnimationIteration"), oi(sv, "onAnimationStart"), oi("dblclick", "onDoubleClick"), oi("focusin", "onFocus"), oi("focusout", "onBlur"), oi(cv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), Ve("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ve("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ve("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ve("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ve("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ve("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));
  function pv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, I(o, r, void 0, n), n.currentTarget = null;
  }
  function Us(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var h = o.length - 1; 0 <= h; h--) {
            var S = o[h], C = S.instance, L = S.currentTarget;
            if (S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            pv(c, S, L), d = C;
          }
        else
          for (h = 0; h < o.length; h++) {
            if (S = o[h], C = S.instance, L = S.currentTarget, S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            pv(c, S, L), d = C;
          }
      }
    }
    if (Li)
      throw n = cl, Li = !1, cl = null, n;
  }
  function Et(n, r) {
    var l = r[If];
    l === void 0 && (l = r[If] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (vv(r, n, 2, !1), l.add(o));
  }
  function Ai(n, r, l) {
    var o = 0;
    r && (o |= 4), vv(l, n, o, r);
  }
  var si = "_reactListening" + Math.random().toString(36).slice(2);
  function cu(n) {
    if (!n[si]) {
      n[si] = !0, Pe.forEach(function(l) {
        l !== "selectionchange" && (qm.has(l) || Ai(l, !1, n), Ai(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[si] || (r[si] = !0, Ai("selectionchange", !1, r));
    }
  }
  function vv(n, r, l, o) {
    switch (Tf(r)) {
      case 1:
        var c = Ap;
        break;
      case 4:
        c = Ts;
        break;
      default:
        c = Rs;
    }
    l = c.bind(null, r, l, n), c = void 0, !Jl || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function As(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var h = o.tag;
          if (h === 3 || h === 4) {
            var S = o.stateNode.containerInfo;
            if (S === c || S.nodeType === 8 && S.parentNode === c)
              break;
            if (h === 4)
              for (h = o.return; h !== null; ) {
                var C = h.tag;
                if ((C === 3 || C === 4) && (C = h.stateNode.containerInfo, C === c || C.nodeType === 8 && C.parentNode === c))
                  return;
                h = h.return;
              }
            for (; S !== null; ) {
              if (h = Jr(S), h === null)
                return;
              if (C = h.tag, C === 5 || C === 6) {
                o = d = h;
                continue e;
              }
              S = S.parentNode;
            }
          }
          o = o.return;
        }
    Zl(function() {
      var L = d, H = Tt(l), V = [];
      e: {
        var F = fv.get(n);
        if (F !== void 0) {
          var Z = ws, ae = n;
          switch (n) {
            case "keypress":
              if (ru(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              Z = Bm;
              break;
            case "focusin":
              ae = "focus", Z = Ui;
              break;
            case "focusout":
              ae = "blur", Z = Ui;
              break;
            case "beforeblur":
            case "afterblur":
              Z = Ui;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Z = _s;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Vp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = Pm;
              break;
            case Hf:
            case ov:
            case sv:
              Z = Bp;
              break;
            case cv:
              Z = Ip;
              break;
            case "scroll":
              Z = Hp;
              break;
            case "wheel":
              Z = li;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = jm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = bs;
          }
          var se = (r & 4) !== 0, Gt = !se && n === "scroll", w = se ? F !== null ? F + "Capture" : null : F;
          se = [];
          for (var R = L, b; R !== null; ) {
            b = R;
            var $ = b.stateNode;
            if (b.tag === 5 && $ !== null && (b = $, w !== null && ($ = sl(R, w), $ != null && se.push(xo(R, $, b)))), Gt)
              break;
            R = R.return;
          }
          0 < se.length && (F = new Z(F, ae, null, l, H), V.push({ event: F, listeners: se }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (F = n === "mouseover" || n === "pointerover", Z = n === "mouseout" || n === "pointerout", F && l !== cr && (ae = l.relatedTarget || l.fromElement) && (Jr(ae) || ae[ci]))
            break e;
          if ((Z || F) && (F = H.window === H ? H : (F = H.ownerDocument) ? F.defaultView || F.parentWindow : window, Z ? (ae = l.relatedTarget || l.toElement, Z = L, ae = ae ? Jr(ae) : null, ae !== null && (Gt = me(ae), ae !== Gt || ae.tag !== 5 && ae.tag !== 6) && (ae = null)) : (Z = null, ae = L), Z !== ae)) {
            if (se = _s, $ = "onMouseLeave", w = "onMouseEnter", R = "mouse", (n === "pointerout" || n === "pointerover") && (se = bs, $ = "onPointerLeave", w = "onPointerEnter", R = "pointer"), Gt = Z == null ? F : fu(Z), b = ae == null ? F : fu(ae), F = new se($, R + "leave", Z, l, H), F.target = Gt, F.relatedTarget = b, $ = null, Jr(H) === L && (se = new se(w, R + "enter", ae, l, H), se.target = b, se.relatedTarget = Gt, $ = se), Gt = $, Z && ae)
              t: {
                for (se = Z, w = ae, R = 0, b = se; b; b = yl(b))
                  R++;
                for (b = 0, $ = w; $; $ = yl($))
                  b++;
                for (; 0 < R - b; )
                  se = yl(se), R--;
                for (; 0 < b - R; )
                  w = yl(w), b--;
                for (; R--; ) {
                  if (se === w || w !== null && se === w.alternate)
                    break t;
                  se = yl(se), w = yl(w);
                }
                se = null;
              }
            else
              se = null;
            Z !== null && jf(V, F, Z, se, !1), ae !== null && Gt !== null && jf(V, Gt, ae, se, !0);
          }
        }
        e: {
          if (F = L ? fu(L) : window, Z = F.nodeName && F.nodeName.toLowerCase(), Z === "select" || Z === "input" && F.type === "file")
            var de = Zp;
          else if (qp(F))
            if (Lf)
              de = nv;
            else {
              de = Qm;
              var Te = Im;
            }
          else
            (Z = F.nodeName) && Z.toLowerCase() === "input" && (F.type === "checkbox" || F.type === "radio") && (de = Wm);
          if (de && (de = de(n, L))) {
            Kp(V, de, l, H);
            break e;
          }
          Te && Te(n, F, L), n === "focusout" && (Te = F._wrapperState) && Te.controlled && F.type === "number" && Ea(F, "number", F.value);
        }
        switch (Te = L ? fu(L) : window, n) {
          case "focusin":
            (qp(Te) || Te.contentEditable === "true") && (ka = Te, zf = L, Eo = null);
            break;
          case "focusout":
            Eo = zf = ka = null;
            break;
          case "mousedown":
            Uf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Uf = !1, uv(V, l, H);
            break;
          case "selectionchange":
            if (lv)
              break;
          case "keydown":
          case "keyup":
            uv(V, l, H);
        }
        var ie;
        if (ba)
          e: {
            switch (n) {
              case "compositionstart":
                var Re = "onCompositionStart";
                break e;
              case "compositionend":
                Re = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Re = "onCompositionUpdate";
                break e;
            }
            Re = void 0;
          }
        else
          lu ? Gp(n, l) && (Re = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Re = "onCompositionStart");
        Re && (Qp && l.locale !== "ko" && (lu || Re !== "onCompositionStart" ? Re === "onCompositionEnd" && lu && (ie = Rf()) : (ai = H, vo = "value" in ai ? ai.value : ai.textContent, lu = !0)), Te = wo(L, Re), 0 < Te.length && (Re = new Df(Re, n, null, l, H), V.push({ event: Re, listeners: Te }), ie ? Re.data = ie : (ie = Ls(l), ie !== null && (Re.data = ie)))), (ie = Os ? $m(n, l) : Ym(n, l)) && (L = wo(L, "onBeforeInput"), 0 < L.length && (H = new Df("onBeforeInput", "beforeinput", null, l, H), V.push({ event: H, listeners: L }), H.data = ie));
      }
      Us(V, r);
    });
  }
  function xo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function wo(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = sl(n, l), d != null && o.unshift(xo(n, d, c)), d = sl(n, r), d != null && o.push(xo(n, d, c))), n = n.return;
    }
    return o;
  }
  function yl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function jf(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, L = S.stateNode;
      if (C !== null && C === o)
        break;
      S.tag === 5 && L !== null && (S = L, c ? (C = sl(l, d), C != null && h.unshift(xo(l, C, S))) : c || (C = sl(l, d), C != null && h.push(xo(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var Vf = /\r\n?/g, Km = /\u0000|\uFFFD/g;
  function Bf(n) {
    return (typeof n == "string" ? n : "" + n).replace(Vf, `
`).replace(Km, "");
  }
  function Fs(n, r, l) {
    if (r = Bf(r), Bf(n) !== r && l)
      throw Error(k(425));
  }
  function Hs() {
  }
  var Pf = null, gl = null;
  function Do(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Sl = typeof setTimeout == "function" ? setTimeout : void 0, hv = typeof clearTimeout == "function" ? clearTimeout : void 0, $f = typeof Promise == "function" ? Promise : void 0, Yf = typeof queueMicrotask == "function" ? queueMicrotask : typeof $f < "u" ? function(n) {
    return $f.resolve(null).then(n).catch(Zm);
  } : Sl;
  function Zm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Fi(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), fo(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    fo(r);
  }
  function Oa(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function _o(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Hi = Math.random().toString(36).slice(2), Ba = "__reactFiber$" + Hi, El = "__reactProps$" + Hi, ci = "__reactContainer$" + Hi, If = "__reactEvents$" + Hi, Jm = "__reactListeners$" + Hi, Qf = "__reactHandles$" + Hi;
  function Jr(n) {
    var r = n[Ba];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ci] || l[Ba]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = _o(n); n !== null; ) {
            if (l = n[Ba])
              return l;
            n = _o(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function bo(n) {
    return n = n[Ba] || n[ci], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function fu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(k(33));
  }
  function Se(n) {
    return n[El] || null;
  }
  var ji = [], bt = -1;
  function Ne(n) {
    return { current: n };
  }
  function at(n) {
    0 > bt || (n.current = ji[bt], ji[bt] = null, bt--);
  }
  function ut(n, r) {
    bt++, ji[bt] = n.current, n.current = r;
  }
  var Pa = {}, De = Ne(Pa), Bt = Ne(!1), pr = Pa;
  function ea(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Pa;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Mt(n) {
    return n = n.childContextTypes, n != null;
  }
  function ta() {
    at(Bt), at(De);
  }
  function Vi(n, r, l) {
    if (De.current !== Pa)
      throw Error(k(168));
    ut(De, r), ut(Bt, l);
  }
  function ko(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(k(108, Qr(n) || "Unknown", c));
    return ee({}, l, o);
  }
  function js(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Pa, pr = De.current, ut(De, n), ut(Bt, Bt.current), !0;
  }
  function mv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(k(169));
    l ? (n = ko(n, r, pr), o.__reactInternalMemoizedMergedChildContext = n, at(Bt), at(De), ut(De, n)) : at(Bt), ut(Bt, l);
  }
  var Ur = null, gn = !1, Oo = !1;
  function Wf(n) {
    Ur === null ? Ur = [n] : Ur.push(n);
  }
  function Gf(n) {
    gn = !0, Wf(n);
  }
  function vr() {
    if (!Oo && Ur !== null) {
      Oo = !0;
      var n = 0, r = ft;
      try {
        var l = Ur;
        for (ft = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ur = null, gn = !1;
      } catch (c) {
        throw Ur !== null && (Ur = Ur.slice(n + 1)), _t(Nr, vr), c;
      } finally {
        ft = r, Oo = !1;
      }
    }
    return null;
  }
  var Bi = [], hr = 0, Cl = null, du = 0, mr = [], In = 0, na = null, bn = 1, fi = "";
  function Ar(n, r) {
    Bi[hr++] = du, Bi[hr++] = Cl, Cl = n, du = r;
  }
  function Xf(n, r, l) {
    mr[In++] = bn, mr[In++] = fi, mr[In++] = na, na = n;
    var o = bn;
    n = fi;
    var c = 32 - Xr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Xr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, bn = 1 << 32 - Xr(r) + c | l << c | o, fi = d + n;
    } else
      bn = 1 << d | l << c | o, fi = n;
  }
  function Vs(n) {
    n.return !== null && (Ar(n, 1), Xf(n, 1, 0));
  }
  function qf(n) {
    for (; n === Cl; )
      Cl = Bi[--hr], Bi[hr] = null, du = Bi[--hr], Bi[hr] = null;
    for (; n === na; )
      na = mr[--In], mr[In] = null, fi = mr[--In], mr[In] = null, bn = mr[--In], mr[In] = null;
  }
  var Fr = null, yr = null, kt = !1, ra = null;
  function Kf(n, r) {
    var l = fa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function yv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Fr = n, yr = Oa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Fr = n, yr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = na !== null ? { id: bn, overflow: fi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = fa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Fr = n, yr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Bs(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ps(n) {
    if (kt) {
      var r = yr;
      if (r) {
        var l = r;
        if (!yv(n, r)) {
          if (Bs(n))
            throw Error(k(418));
          r = Oa(l.nextSibling);
          var o = Fr;
          r && yv(n, r) ? Kf(o, l) : (n.flags = n.flags & -4097 | 2, kt = !1, Fr = n);
        }
      } else {
        if (Bs(n))
          throw Error(k(418));
        n.flags = n.flags & -4097 | 2, kt = !1, Fr = n;
      }
    }
  }
  function gv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Fr = n;
  }
  function $s(n) {
    if (n !== Fr)
      return !1;
    if (!kt)
      return gv(n), kt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Do(n.type, n.memoizedProps)), r && (r = yr)) {
      if (Bs(n))
        throw Sv(), Error(k(418));
      for (; r; )
        Kf(n, r), r = Oa(r.nextSibling);
    }
    if (gv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(k(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                yr = Oa(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        yr = null;
      }
    } else
      yr = Fr ? Oa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Sv() {
    for (var n = yr; n; )
      n = Oa(n.nextSibling);
  }
  function Ft() {
    yr = Fr = null, kt = !1;
  }
  function Zf(n) {
    ra === null ? ra = [n] : ra.push(n);
  }
  var Ys = gt.ReactCurrentBatchConfig;
  function Tl(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(k(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(k(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(k(284));
      if (!l._owner)
        throw Error(k(290, n));
    }
    return n;
  }
  function $a(n, r) {
    throw n = Object.prototype.toString.call(r), Error(k(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Ev(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Is(n) {
    function r(w, R) {
      if (n) {
        var b = w.deletions;
        b === null ? (w.deletions = [R], w.flags |= 16) : b.push(R);
      }
    }
    function l(w, R) {
      if (!n)
        return null;
      for (; R !== null; )
        r(w, R), R = R.sibling;
      return null;
    }
    function o(w, R) {
      for (w = /* @__PURE__ */ new Map(); R !== null; )
        R.key !== null ? w.set(R.key, R) : w.set(R.index, R), R = R.sibling;
      return w;
    }
    function c(w, R) {
      return w = Xi(w, R), w.index = 0, w.sibling = null, w;
    }
    function d(w, R, b) {
      return w.index = b, n ? (b = w.alternate, b !== null ? (b = b.index, b < R ? (w.flags |= 2, R) : b) : (w.flags |= 2, R)) : (w.flags |= 1048576, R);
    }
    function h(w) {
      return n && w.alternate === null && (w.flags |= 2), w;
    }
    function S(w, R, b, $) {
      return R === null || R.tag !== 6 ? (R = Mc(b, w.mode, $), R.return = w, R) : (R = c(R, b), R.return = w, R);
    }
    function C(w, R, b, $) {
      var de = b.type;
      return de === Ue ? H(w, R, b.props.children, $, b.key) : R !== null && (R.elementType === de || typeof de == "object" && de !== null && de.$$typeof === Dt && Ev(de) === R.type) ? ($ = c(R, b.props), $.ref = Tl(w, R, b), $.return = w, $) : ($ = Oc(b.type, b.key, b.props, null, w.mode, $), $.ref = Tl(w, R, b), $.return = w, $);
    }
    function L(w, R, b, $) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== b.containerInfo || R.stateNode.implementation !== b.implementation ? (R = Go(b, w.mode, $), R.return = w, R) : (R = c(R, b.children || []), R.return = w, R);
    }
    function H(w, R, b, $, de) {
      return R === null || R.tag !== 7 ? (R = Fl(b, w.mode, $, de), R.return = w, R) : (R = c(R, b), R.return = w, R);
    }
    function V(w, R, b) {
      if (typeof R == "string" && R !== "" || typeof R == "number")
        return R = Mc("" + R, w.mode, b), R.return = w, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case $e:
            return b = Oc(R.type, R.key, R.props, null, w.mode, b), b.ref = Tl(w, null, R), b.return = w, b;
          case wt:
            return R = Go(R, w.mode, b), R.return = w, R;
          case Dt:
            var $ = R._init;
            return V(w, $(R._payload), b);
        }
        if (ni(R) || Ce(R))
          return R = Fl(R, w.mode, b, null), R.return = w, R;
        $a(w, R);
      }
      return null;
    }
    function F(w, R, b, $) {
      var de = R !== null ? R.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number")
        return de !== null ? null : S(w, R, "" + b, $);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case $e:
            return b.key === de ? C(w, R, b, $) : null;
          case wt:
            return b.key === de ? L(w, R, b, $) : null;
          case Dt:
            return de = b._init, F(
              w,
              R,
              de(b._payload),
              $
            );
        }
        if (ni(b) || Ce(b))
          return de !== null ? null : H(w, R, b, $, null);
        $a(w, b);
      }
      return null;
    }
    function Z(w, R, b, $, de) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number")
        return w = w.get(b) || null, S(R, w, "" + $, de);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case $e:
            return w = w.get($.key === null ? b : $.key) || null, C(R, w, $, de);
          case wt:
            return w = w.get($.key === null ? b : $.key) || null, L(R, w, $, de);
          case Dt:
            var Te = $._init;
            return Z(w, R, b, Te($._payload), de);
        }
        if (ni($) || Ce($))
          return w = w.get(b) || null, H(R, w, $, de, null);
        $a(R, $);
      }
      return null;
    }
    function ae(w, R, b, $) {
      for (var de = null, Te = null, ie = R, Re = R = 0, sn = null; ie !== null && Re < b.length; Re++) {
        ie.index > Re ? (sn = ie, ie = null) : sn = ie.sibling;
        var Je = F(w, ie, b[Re], $);
        if (Je === null) {
          ie === null && (ie = sn);
          break;
        }
        n && ie && Je.alternate === null && r(w, ie), R = d(Je, R, Re), Te === null ? de = Je : Te.sibling = Je, Te = Je, ie = sn;
      }
      if (Re === b.length)
        return l(w, ie), kt && Ar(w, Re), de;
      if (ie === null) {
        for (; Re < b.length; Re++)
          ie = V(w, b[Re], $), ie !== null && (R = d(ie, R, Re), Te === null ? de = ie : Te.sibling = ie, Te = ie);
        return kt && Ar(w, Re), de;
      }
      for (ie = o(w, ie); Re < b.length; Re++)
        sn = Z(ie, w, Re, b[Re], $), sn !== null && (n && sn.alternate !== null && ie.delete(sn.key === null ? Re : sn.key), R = d(sn, R, Re), Te === null ? de = sn : Te.sibling = sn, Te = sn);
      return n && ie.forEach(function(gi) {
        return r(w, gi);
      }), kt && Ar(w, Re), de;
    }
    function se(w, R, b, $) {
      var de = Ce(b);
      if (typeof de != "function")
        throw Error(k(150));
      if (b = de.call(b), b == null)
        throw Error(k(151));
      for (var Te = de = null, ie = R, Re = R = 0, sn = null, Je = b.next(); ie !== null && !Je.done; Re++, Je = b.next()) {
        ie.index > Re ? (sn = ie, ie = null) : sn = ie.sibling;
        var gi = F(w, ie, Je.value, $);
        if (gi === null) {
          ie === null && (ie = sn);
          break;
        }
        n && ie && gi.alternate === null && r(w, ie), R = d(gi, R, Re), Te === null ? de = gi : Te.sibling = gi, Te = gi, ie = sn;
      }
      if (Je.done)
        return l(
          w,
          ie
        ), kt && Ar(w, Re), de;
      if (ie === null) {
        for (; !Je.done; Re++, Je = b.next())
          Je = V(w, Je.value, $), Je !== null && (R = d(Je, R, Re), Te === null ? de = Je : Te.sibling = Je, Te = Je);
        return kt && Ar(w, Re), de;
      }
      for (ie = o(w, ie); !Je.done; Re++, Je = b.next())
        Je = Z(ie, w, Re, Je.value, $), Je !== null && (n && Je.alternate !== null && ie.delete(Je.key === null ? Re : Je.key), R = d(Je, R, Re), Te === null ? de = Je : Te.sibling = Je, Te = Je);
      return n && ie.forEach(function(yy) {
        return r(w, yy);
      }), kt && Ar(w, Re), de;
    }
    function Gt(w, R, b, $) {
      if (typeof b == "object" && b !== null && b.type === Ue && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case $e:
            e: {
              for (var de = b.key, Te = R; Te !== null; ) {
                if (Te.key === de) {
                  if (de = b.type, de === Ue) {
                    if (Te.tag === 7) {
                      l(w, Te.sibling), R = c(Te, b.props.children), R.return = w, w = R;
                      break e;
                    }
                  } else if (Te.elementType === de || typeof de == "object" && de !== null && de.$$typeof === Dt && Ev(de) === Te.type) {
                    l(w, Te.sibling), R = c(Te, b.props), R.ref = Tl(w, Te, b), R.return = w, w = R;
                    break e;
                  }
                  l(w, Te);
                  break;
                } else
                  r(w, Te);
                Te = Te.sibling;
              }
              b.type === Ue ? (R = Fl(b.props.children, w.mode, $, b.key), R.return = w, w = R) : ($ = Oc(b.type, b.key, b.props, null, w.mode, $), $.ref = Tl(w, R, b), $.return = w, w = $);
            }
            return h(w);
          case wt:
            e: {
              for (Te = b.key; R !== null; ) {
                if (R.key === Te)
                  if (R.tag === 4 && R.stateNode.containerInfo === b.containerInfo && R.stateNode.implementation === b.implementation) {
                    l(w, R.sibling), R = c(R, b.children || []), R.return = w, w = R;
                    break e;
                  } else {
                    l(w, R);
                    break;
                  }
                else
                  r(w, R);
                R = R.sibling;
              }
              R = Go(b, w.mode, $), R.return = w, w = R;
            }
            return h(w);
          case Dt:
            return Te = b._init, Gt(w, R, Te(b._payload), $);
        }
        if (ni(b))
          return ae(w, R, b, $);
        if (Ce(b))
          return se(w, R, b, $);
        $a(w, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, R !== null && R.tag === 6 ? (l(w, R.sibling), R = c(R, b), R.return = w, w = R) : (l(w, R), R = Mc(b, w.mode, $), R.return = w, w = R), h(w)) : l(w, R);
    }
    return Gt;
  }
  var pu = Is(!0), Cv = Is(!1), di = Ne(null), an = null, Q = null, aa = null;
  function Hr() {
    aa = Q = an = null;
  }
  function Jf(n) {
    var r = di.current;
    at(di), n._currentValue = r;
  }
  function ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function vu(n, r) {
    an = n, aa = Q = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Er = !0), n.firstContext = null);
  }
  function ia(n) {
    var r = n._currentValue;
    if (aa !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Q === null) {
        if (an === null)
          throw Error(k(308));
        Q = n, an.dependencies = { lanes: 0, firstContext: n };
      } else
        Q = Q.next = n;
    return r;
  }
  var Rl = null;
  function Jt(n) {
    Rl === null ? Rl = [n] : Rl.push(n);
  }
  function Tv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Jt(r)) : (l.next = c.next, c.next = l), r.interleaved = l, pi(n, o);
  }
  function pi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Pi = !1;
  function Qs(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function hu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function gr(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function $i(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, Ye & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, pi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Jt(o)) : (r.next = c.next, c.next = r), o.interleaved = r, pi(n, l);
  }
  function Ws(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, uo(n, l);
    }
  }
  function Rv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var h = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = h : d = d.next = h, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Gs(n, r, l, o) {
    var c = n.updateQueue;
    Pi = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var C = S, L = C.next;
      C.next = null, h === null ? d = L : h.next = L, h = C;
      var H = n.alternate;
      H !== null && (H = H.updateQueue, S = H.lastBaseUpdate, S !== h && (S === null ? H.firstBaseUpdate = L : S.next = L, H.lastBaseUpdate = C));
    }
    if (d !== null) {
      var V = c.baseState;
      h = 0, H = L = C = null, S = d;
      do {
        var F = S.lane, Z = S.eventTime;
        if ((o & F) === F) {
          H !== null && (H = H.next = {
            eventTime: Z,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var ae = n, se = S;
            switch (F = r, Z = l, se.tag) {
              case 1:
                if (ae = se.payload, typeof ae == "function") {
                  V = ae.call(Z, V, F);
                  break e;
                }
                V = ae;
                break e;
              case 3:
                ae.flags = ae.flags & -65537 | 128;
              case 0:
                if (ae = se.payload, F = typeof ae == "function" ? ae.call(Z, V, F) : ae, F == null)
                  break e;
                V = ee({}, V, F);
                break e;
              case 2:
                Pi = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, F = c.effects, F === null ? c.effects = [S] : F.push(S));
        } else
          Z = { eventTime: Z, lane: F, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, H === null ? (L = H = Z, C = V) : H = H.next = Z, h |= F;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null)
            break;
          F = S, S = F.next, F.next = null, c.lastBaseUpdate = F, c.shared.pending = null;
        }
      } while (!0);
      if (H === null && (C = V), c.baseState = C, c.firstBaseUpdate = L, c.lastBaseUpdate = H, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Nl |= h, n.lanes = h, n.memoizedState = V;
    }
  }
  function xv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(k(191, c));
          c.call(o);
        }
      }
  }
  var Lo = {}, La = Ne(Lo), mu = Ne(Lo), Mo = Ne(Lo);
  function xl(n) {
    if (n === Lo)
      throw Error(k(174));
    return n;
  }
  function td(n, r) {
    switch (ut(Mo, r), ut(mu, n), ut(La, Lo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : qt(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = qt(r, n);
    }
    at(La), ut(La, r);
  }
  function yu() {
    at(La), at(mu), at(Mo);
  }
  function wv(n) {
    xl(Mo.current);
    var r = xl(La.current), l = qt(r, n.type);
    r !== l && (ut(mu, n), ut(La, l));
  }
  function nd(n) {
    mu.current === n && (at(La), at(mu));
  }
  var Nt = Ne(0);
  function Xs(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var qs = [];
  function rd() {
    for (var n = 0; n < qs.length; n++)
      qs[n]._workInProgressVersionPrimary = null;
    qs.length = 0;
  }
  var Ks = gt.ReactCurrentDispatcher, No = gt.ReactCurrentBatchConfig, fe = 0, pe = null, _e = null, je = null, jr = !1, gu = !1, zo = 0, ey = 0;
  function Qn() {
    throw Error(k(321));
  }
  function Uo(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!Zr(n[l], r[l]))
        return !1;
    return !0;
  }
  function A(n, r, l, o, c, d) {
    if (fe = d, pe = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ks.current = n === null || n.memoizedState === null ? ty : xt, n = l(o, c), gu) {
      d = 0;
      do {
        if (gu = !1, zo = 0, 25 <= d)
          throw Error(k(301));
        d += 1, je = _e = null, r.updateQueue = null, Ks.current = dc, n = l(o, c);
      } while (gu);
    }
    if (Ks.current = Wn, r = _e !== null && _e.next !== null, fe = 0, je = _e = pe = null, jr = !1, r)
      throw Error(k(300));
    return n;
  }
  function en() {
    var n = zo !== 0;
    return zo = 0, n;
  }
  function ye() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return je === null ? pe.memoizedState = je = n : je = je.next = n, je;
  }
  function kn() {
    if (_e === null) {
      var n = pe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = _e.next;
    var r = je === null ? pe.memoizedState : je.next;
    if (r !== null)
      je = r, _e = n;
    else {
      if (n === null)
        throw Error(k(310));
      _e = n, n = { memoizedState: _e.memoizedState, baseState: _e.baseState, baseQueue: _e.baseQueue, queue: _e.queue, next: null }, je === null ? pe.memoizedState = je = n : je = je.next = n;
    }
    return je;
  }
  function Vr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function vi(n) {
    var r = kn(), l = r.queue;
    if (l === null)
      throw Error(k(311));
    l.lastRenderedReducer = n;
    var o = _e, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var S = h = null, C = null, L = d;
      do {
        var H = L.lane;
        if ((fe & H) === H)
          C !== null && (C = C.next = { lane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), o = L.hasEagerState ? L.eagerState : n(o, L.action);
        else {
          var V = {
            lane: H,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          };
          C === null ? (S = C = V, h = o) : C = C.next = V, pe.lanes |= H, Nl |= H;
        }
        L = L.next;
      } while (L !== null && L !== d);
      C === null ? h = o : C.next = S, Zr(o, r.memoizedState) || (Er = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, pe.lanes |= d, Nl |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function la(n) {
    var r = kn(), l = r.queue;
    if (l === null)
      throw Error(k(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      Zr(d, r.memoizedState) || (Er = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Su() {
  }
  function wl(n, r) {
    var l = pe, o = kn(), c = r(), d = !Zr(o.memoizedState, c);
    if (d && (o.memoizedState = c, Er = !0), o = o.queue, Ao(Js.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || je !== null && je.memoizedState.tag & 1) {
      if (l.flags |= 2048, Dl(9, Zs.bind(null, l, o, c, r), void 0, null), $t === null)
        throw Error(k(349));
      fe & 30 || Eu(l, r, c);
    }
    return c;
  }
  function Eu(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = pe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, pe.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Zs(n, r, l, o) {
    r.value = l, r.getSnapshot = o, ec(r) && tc(n);
  }
  function Js(n, r, l) {
    return l(function() {
      ec(r) && tc(n);
    });
  }
  function ec(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Zr(n, l);
    } catch {
      return !0;
    }
  }
  function tc(n) {
    var r = pi(n, 1);
    r !== null && Ht(r, n, 1, -1);
  }
  function nc(n) {
    var r = ye();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vr, lastRenderedState: n }, r.queue = n, n = n.dispatch = Fo.bind(null, pe, n), [r.memoizedState, n];
  }
  function Dl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = pe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, pe.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function rc() {
    return kn().memoizedState;
  }
  function Cu(n, r, l, o) {
    var c = ye();
    pe.flags |= n, c.memoizedState = Dl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Tu(n, r, l, o) {
    var c = kn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (_e !== null) {
      var h = _e.memoizedState;
      if (d = h.destroy, o !== null && Uo(o, h.deps)) {
        c.memoizedState = Dl(r, l, d, o);
        return;
      }
    }
    pe.flags |= n, c.memoizedState = Dl(1 | r, l, d, o);
  }
  function ac(n, r) {
    return Cu(8390656, 8, n, r);
  }
  function Ao(n, r) {
    return Tu(2048, 8, n, r);
  }
  function ic(n, r) {
    return Tu(4, 2, n, r);
  }
  function lc(n, r) {
    return Tu(4, 4, n, r);
  }
  function uc(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function oc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Tu(4, 4, uc.bind(null, r, n), l);
  }
  function Ru() {
  }
  function _l(n, r) {
    var l = kn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Uo(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function sc(n, r) {
    var l = kn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Uo(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function cc(n, r, l) {
    return fe & 21 ? (Zr(l, r) || (l = Es(), pe.lanes |= l, Nl |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Er = !0), n.memoizedState = l);
  }
  function ad(n, r) {
    var l = ft;
    ft = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = No.transition;
    No.transition = {};
    try {
      n(!1), r();
    } finally {
      ft = l, No.transition = o;
    }
  }
  function fc() {
    return kn().memoizedState;
  }
  function Dv(n, r, l) {
    var o = yi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, id(n))
      xu(r, l);
    else if (l = Tv(n, r, l, o), l !== null) {
      var c = Cn();
      Ht(l, n, o, c), Yi(l, r, o);
    }
  }
  function Fo(n, r, l) {
    var o = yi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (id(n))
      xu(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var h = r.lastRenderedState, S = d(h, l);
          if (c.hasEagerState = !0, c.eagerState = S, Zr(S, h)) {
            var C = r.interleaved;
            C === null ? (c.next = c, Jt(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Tv(n, r, c, o), l !== null && (c = Cn(), Ht(l, n, o, c), Yi(l, r, o));
    }
  }
  function id(n) {
    var r = n.alternate;
    return n === pe || r !== null && r === pe;
  }
  function xu(n, r) {
    gu = jr = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Yi(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, uo(n, l);
    }
  }
  var Wn = { readContext: ia, useCallback: Qn, useContext: Qn, useEffect: Qn, useImperativeHandle: Qn, useInsertionEffect: Qn, useLayoutEffect: Qn, useMemo: Qn, useReducer: Qn, useRef: Qn, useState: Qn, useDebugValue: Qn, useDeferredValue: Qn, useTransition: Qn, useMutableSource: Qn, useSyncExternalStore: Qn, useId: Qn, unstable_isNewReconciler: !1 }, ty = { readContext: ia, useCallback: function(n, r) {
    return ye().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ia, useEffect: ac, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Cu(
      4194308,
      4,
      uc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Cu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Cu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = ye();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = ye();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Dv.bind(null, pe, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = ye();
    return n = { current: n }, r.memoizedState = n;
  }, useState: nc, useDebugValue: Ru, useDeferredValue: function(n) {
    return ye().memoizedState = n;
  }, useTransition: function() {
    var n = nc(!1), r = n[0];
    return n = ad.bind(null, n[1]), ye().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = pe, c = ye();
    if (kt) {
      if (l === void 0)
        throw Error(k(407));
      l = l();
    } else {
      if (l = r(), $t === null)
        throw Error(k(349));
      fe & 30 || Eu(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, ac(Js.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Dl(9, Zs.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = ye(), r = $t.identifierPrefix;
    if (kt) {
      var l = fi, o = bn;
      l = (o & ~(1 << 32 - Xr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = zo++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = ey++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, xt = {
    readContext: ia,
    useCallback: _l,
    useContext: ia,
    useEffect: Ao,
    useImperativeHandle: oc,
    useInsertionEffect: ic,
    useLayoutEffect: lc,
    useMemo: sc,
    useReducer: vi,
    useRef: rc,
    useState: function() {
      return vi(Vr);
    },
    useDebugValue: Ru,
    useDeferredValue: function(n) {
      var r = kn();
      return cc(r, _e.memoizedState, n);
    },
    useTransition: function() {
      var n = vi(Vr)[0], r = kn().memoizedState;
      return [n, r];
    },
    useMutableSource: Su,
    useSyncExternalStore: wl,
    useId: fc,
    unstable_isNewReconciler: !1
  }, dc = { readContext: ia, useCallback: _l, useContext: ia, useEffect: Ao, useImperativeHandle: oc, useInsertionEffect: ic, useLayoutEffect: lc, useMemo: sc, useReducer: la, useRef: rc, useState: function() {
    return la(Vr);
  }, useDebugValue: Ru, useDeferredValue: function(n) {
    var r = kn();
    return _e === null ? r.memoizedState = n : cc(r, _e.memoizedState, n);
  }, useTransition: function() {
    var n = la(Vr)[0], r = kn().memoizedState;
    return [n, r];
  }, useMutableSource: Su, useSyncExternalStore: wl, useId: fc, unstable_isNewReconciler: !1 };
  function Sr(n, r) {
    if (n && n.defaultProps) {
      r = ee({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function bl(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ee({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var kl = { isMounted: function(n) {
    return (n = n._reactInternals) ? me(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cn(), c = yi(n), d = gr(o, c);
    d.payload = r, l != null && (d.callback = l), r = $i(n, d, c), r !== null && (Ht(r, n, c, o), Ws(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cn(), c = yi(n), d = gr(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = $i(n, d, c), r !== null && (Ht(r, n, c, o), Ws(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Cn(), o = yi(n), c = gr(l, o);
    c.tag = 2, r != null && (c.callback = r), r = $i(n, c, o), r !== null && (Ht(r, n, o, l), Ws(r, n, o));
  } };
  function _v(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !So(l, o) || !So(c, d) : !0;
  }
  function bv(n, r, l) {
    var o = !1, c = Pa, d = r.contextType;
    return typeof d == "object" && d !== null ? d = ia(d) : (c = Mt(r) ? pr : De.current, o = r.contextTypes, d = (o = o != null) ? ea(n, c) : Pa), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = kl, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function kv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && kl.enqueueReplaceState(r, r.state, null);
  }
  function ld(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Qs(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = ia(d) : (d = Mt(r) ? pr : De.current, c.context = ea(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (bl(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && kl.enqueueReplaceState(c, c.state, null), Gs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ii(n, r) {
    try {
      var l = "", o = r;
      do
        l += Ua(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function ud(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ho(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Ov = typeof WeakMap == "function" ? WeakMap : Map;
  function Lv(n, r, l) {
    l = gr(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      xc || (xc = !0, md = o), Ho(n, r);
    }, l;
  }
  function Mv(n, r, l) {
    l = gr(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ho(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ho(n, r), typeof o != "function" && (sa === null ? sa = /* @__PURE__ */ new Set([this]) : sa.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function jo(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Ov();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = fy.bind(null, n, r, l), r.then(n, n));
  }
  function Nv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function od(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = gr(-1, 1), r.tag = 2, $i(l, r, 1))), l.lanes |= 1), n);
  }
  var zv = gt.ReactCurrentOwner, Er = !1;
  function Qt(n, r, l, o) {
    r.child = n === null ? Cv(r, null, l, o) : pu(r, n.child, l, o);
  }
  function wu(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return vu(r, c), o = A(n, r, l, o, d, c), l = en(), n !== null && !Er ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Wt(n, r, c)) : (kt && l && Vs(r), r.flags |= 1, Qt(n, r, o, c), r.child);
  }
  function Qi(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Cd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, pc(n, r, d, o, c)) : (n = Oc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : So, l(h, o) && n.ref === r.ref)
        return Wt(n, r, c);
    }
    return r.flags |= 1, n = Xi(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function pc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (So(d, o) && n.ref === r.ref)
        if (Er = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Er = !0);
        else
          return r.lanes = n.lanes, Wt(n, r, c);
    }
    return Me(n, r, l, o, c);
  }
  function Cr(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ut(Uu, Tr), Tr |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, ut(Uu, Tr), Tr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, ut(Uu, Tr), Tr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, ut(Uu, Tr), Tr |= o;
    return Qt(n, r, c, l), r.child;
  }
  function Ol(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Me(n, r, l, o, c) {
    var d = Mt(l) ? pr : De.current;
    return d = ea(r, d), vu(r, c), l = A(n, r, l, o, d, c), o = en(), n !== null && !Er ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Wt(n, r, c)) : (kt && o && Vs(r), r.flags |= 1, Qt(n, r, l, c), r.child);
  }
  function Vo(n, r, l, o, c) {
    if (Mt(l)) {
      var d = !0;
      js(r);
    } else
      d = !1;
    if (vu(r, c), r.stateNode === null)
      Po(n, r), bv(r, l, o), ld(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, L = l.contextType;
      typeof L == "object" && L !== null ? L = ia(L) : (L = Mt(l) ? pr : De.current, L = ea(r, L));
      var H = l.getDerivedStateFromProps, V = typeof H == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      V || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== L) && kv(r, h, o, L), Pi = !1;
      var F = r.memoizedState;
      h.state = F, Gs(r, o, h, c), C = r.memoizedState, S !== o || F !== C || Bt.current || Pi ? (typeof H == "function" && (bl(r, l, H, o), C = r.memoizedState), (S = Pi || _v(r, l, S, o, F, C, L)) ? (V || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = L, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, hu(n, r), S = r.memoizedProps, L = r.type === r.elementType ? S : Sr(r.type, S), h.props = L, V = r.pendingProps, F = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = ia(C) : (C = Mt(l) ? pr : De.current, C = ea(r, C));
      var Z = l.getDerivedStateFromProps;
      (H = typeof Z == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== V || F !== C) && kv(r, h, o, C), Pi = !1, F = r.memoizedState, h.state = F, Gs(r, o, h, c);
      var ae = r.memoizedState;
      S !== V || F !== ae || Bt.current || Pi ? (typeof Z == "function" && (bl(r, l, Z, o), ae = r.memoizedState), (L = Pi || _v(r, l, L, o, F, ae, C) || !1) ? (H || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, ae, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, ae, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ae), h.props = o, h.state = ae, h.context = C, o = L) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return vc(n, r, l, o, d, c);
  }
  function vc(n, r, l, o, c, d) {
    Ol(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h)
      return c && mv(r, l, !1), Wt(n, r, d);
    o = r.stateNode, zv.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = pu(r, n.child, null, d), r.child = pu(r, null, S, d)) : Qt(n, r, S, d), r.memoizedState = o.state, c && mv(r, l, !0), r.child;
  }
  function ny(n) {
    var r = n.stateNode;
    r.pendingContext ? Vi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Vi(n, r.context, !1), td(n, r.containerInfo);
  }
  function Uv(n, r, l, o, c) {
    return Ft(), Zf(c), r.flags |= 256, Qt(n, r, l, o), r.child;
  }
  var Bo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ll(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Av(n, r, l) {
    var o = r.pendingProps, c = Nt.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), ut(Nt, c & 1), n === null)
      return Ps(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = Lc(h, o, 0, null), n = Fl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ll(l), r.memoizedState = Bo, n) : hc(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null))
      return sd(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = Xi(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = Xi(S, d) : (d = Fl(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? Ll(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = Bo, o;
    }
    return d = n.child, n = d.sibling, o = Xi(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function hc(n, r) {
    return r = Lc({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function mc(n, r, l, o) {
    return o !== null && Zf(o), pu(r, n.child, null, l), n = hc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function sd(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = ud(Error(k(422))), mc(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Lc({ mode: "visible", children: o.children }, c, 0, null), d = Fl(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && pu(r, n.child, null, h), r.child.memoizedState = Ll(h), r.memoizedState = Bo, d);
    if (!(r.mode & 1))
      return mc(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var S = o.dgst;
      return o = S, d = Error(k(419)), o = ud(d, o, void 0), mc(n, r, h, o);
    }
    if (S = (h & n.childLanes) !== 0, Er || S) {
      if (o = $t, o !== null) {
        switch (h & -h) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, pi(n, c), Ht(o, n, c, -1));
      }
      return Wo(), o = ud(Error(k(421))), mc(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ed.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, yr = Oa(c.nextSibling), Fr = r, kt = !0, ra = null, n !== null && (mr[In++] = bn, mr[In++] = fi, mr[In++] = na, bn = n.id, fi = n.overflow, na = r), r = hc(r, o.children), r.flags |= 4096, r);
  }
  function Fv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), ed(n.return, r, l);
  }
  function yc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function cd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Qt(n, r, o.children, l), o = Nt.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Fv(n, l, r);
            else if (n.tag === 19)
              Fv(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (ut(Nt, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Xs(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), yc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Xs(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          yc(r, !0, l, null, d);
          break;
        case "together":
          yc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Po(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Wt(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Nl |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(k(153));
    if (r.child !== null) {
      for (n = r.child, l = Xi(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Xi(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function hi(n, r, l) {
    switch (r.tag) {
      case 3:
        ny(r), Ft();
        break;
      case 5:
        wv(r);
        break;
      case 1:
        Mt(r.type) && js(r);
        break;
      case 4:
        td(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        ut(di, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (ut(Nt, Nt.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Av(n, r, l) : (ut(Nt, Nt.current & 1), n = Wt(n, r, l), n !== null ? n.sibling : null);
        ut(Nt, Nt.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return cd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), ut(Nt, Nt.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Cr(n, r, l);
    }
    return Wt(n, r, l);
  }
  var Ya, Du, _u, ua;
  Ya = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Du = function() {
  }, _u = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, xl(La.current);
      var d = null;
      switch (l) {
        case "input":
          c = Bn(n, c), o = Bn(n, o), d = [];
          break;
        case "select":
          c = ee({}, c, { value: void 0 }), o = ee({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Ca(n, c), o = Ca(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Hs);
      }
      vn(l, o);
      var h;
      l = null;
      for (L in c)
        if (!o.hasOwnProperty(L) && c.hasOwnProperty(L) && c[L] != null)
          if (L === "style") {
            var S = c[L];
            for (h in S)
              S.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
          } else
            L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (it.hasOwnProperty(L) ? d || (d = []) : (d = d || []).push(L, null));
      for (L in o) {
        var C = o[L];
        if (S = c != null ? c[L] : void 0, o.hasOwnProperty(L) && C !== S && (C != null || S != null))
          if (L === "style")
            if (S) {
              for (h in S)
                !S.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
              for (h in C)
                C.hasOwnProperty(h) && S[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
            } else
              l || (d || (d = []), d.push(
                L,
                l
              )), l = C;
          else
            L === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(L, C)) : L === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(L, "" + C) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && (it.hasOwnProperty(L) ? (C != null && L === "onScroll" && Et("scroll", n), d || S === C || (d = [])) : (d = d || []).push(L, C));
      }
      l && (d = d || []).push("style", l);
      var L = d;
      (r.updateQueue = L) && (r.flags |= 4);
    }
  }, ua = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Pt(n, r) {
    if (!kt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Gn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ry(n, r, l) {
    var o = r.pendingProps;
    switch (qf(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Gn(r), null;
      case 1:
        return Mt(r.type) && ta(), Gn(r), null;
      case 3:
        return o = r.stateNode, yu(), at(Bt), at(De), rd(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && ($s(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ra !== null && (yd(ra), ra = null))), Du(n, r), Gn(r), null;
      case 5:
        nd(r);
        var c = xl(Mo.current);
        if (l = r.type, n !== null && r.stateNode != null)
          _u(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(k(166));
            return Gn(r), null;
          }
          if (n = xl(La.current), $s(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ba] = r, o[El] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Et("cancel", o), Et("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Et("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Ro.length; c++)
                  Et(Ro[c], o);
                break;
              case "source":
                Et("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Et(
                  "error",
                  o
                ), Et("load", o);
                break;
              case "details":
                Et("toggle", o);
                break;
              case "input":
                Dn(o, d), Et("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Et("invalid", o);
                break;
              case "textarea":
                br(o, d), Et("invalid", o);
            }
            vn(l, d), c = null;
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var S = d[h];
                h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && Fs(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && Fs(
                  o.textContent,
                  S,
                  n
                ), c = ["children", "" + S]) : it.hasOwnProperty(h) && S != null && h === "onScroll" && Et("scroll", o);
              }
            switch (l) {
              case "input":
                sr(o), Gr(o, d, !0);
                break;
              case "textarea":
                sr(o), kr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Hs);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ta(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[Ba] = r, n[El] = o, Ya(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = It(l, o), l) {
                case "dialog":
                  Et("cancel", n), Et("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Et("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Ro.length; c++)
                    Et(Ro[c], n);
                  c = o;
                  break;
                case "source":
                  Et("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Et(
                    "error",
                    n
                  ), Et("load", n), c = o;
                  break;
                case "details":
                  Et("toggle", n), c = o;
                  break;
                case "input":
                  Dn(n, o), c = Bn(n, o), Et("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ee({}, o, { value: void 0 }), Et("invalid", n);
                  break;
                case "textarea":
                  br(n, o), c = Ca(n, o), Et("invalid", n);
                  break;
                default:
                  c = o;
              }
              vn(l, c), S = c;
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var C = S[d];
                  d === "style" ? ct(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Oi(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && Ra(n, C) : typeof C == "number" && Ra(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (it.hasOwnProperty(d) ? C != null && d === "onScroll" && Et("scroll", n) : C != null && Be(n, d, C, h));
                }
              switch (l) {
                case "input":
                  sr(n), Gr(n, o, !1);
                  break;
                case "textarea":
                  sr(n), kr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Vn(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Fa(n, !!o.multiple, d, !1) : o.defaultValue != null && Fa(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Hs);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Gn(r), null;
      case 6:
        if (n && r.stateNode != null)
          ua(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(k(166));
          if (l = xl(Mo.current), xl(La.current), $s(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ba] = r, (d = o.nodeValue !== l) && (n = Fr, n !== null))
              switch (n.tag) {
                case 3:
                  Fs(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Fs(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ba] = r, r.stateNode = o;
        }
        return Gn(r), null;
      case 13:
        if (at(Nt), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (kt && yr !== null && r.mode & 1 && !(r.flags & 128))
            Sv(), Ft(), r.flags |= 98560, d = !1;
          else if (d = $s(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(k(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(k(317));
              d[Ba] = r;
            } else
              Ft(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Gn(r), d = !1;
          } else
            ra !== null && (yd(ra), ra = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Nt.current & 1 ? un === 0 && (un = 3) : Wo())), r.updateQueue !== null && (r.flags |= 4), Gn(r), null);
      case 4:
        return yu(), Du(n, r), n === null && cu(r.stateNode.containerInfo), Gn(r), null;
      case 10:
        return Jf(r.type._context), Gn(r), null;
      case 17:
        return Mt(r.type) && ta(), Gn(r), null;
      case 19:
        if (at(Nt), d = r.memoizedState, d === null)
          return Gn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null)
          if (o)
            Pt(d, !1);
          else {
            if (un !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (h = Xs(n), h !== null) {
                  for (r.flags |= 128, Pt(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return ut(Nt, Nt.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && lt() > Fu && (r.flags |= 128, o = !0, Pt(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Xs(h), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Pt(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !kt)
                return Gn(r), null;
            } else
              2 * lt() - d.renderingStartTime > Fu && l !== 1073741824 && (r.flags |= 128, o = !0, Pt(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = lt(), r.sibling = null, l = Nt.current, ut(Nt, o ? l & 1 | 2 : l & 1), r) : (Gn(r), null);
      case 22:
      case 23:
        return bc(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Tr & 1073741824 && (Gn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Gn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(k(156, r.tag));
  }
  function ay(n, r) {
    switch (qf(r), r.tag) {
      case 1:
        return Mt(r.type) && ta(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return yu(), at(Bt), at(De), rd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return nd(r), null;
      case 13:
        if (at(Nt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(k(340));
          Ft();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return at(Nt), null;
      case 4:
        return yu(), null;
      case 10:
        return Jf(r.type._context), null;
      case 22:
      case 23:
        return bc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var bu = !1, On = !1, gc = typeof WeakSet == "function" ? WeakSet : Set, re = null;
  function ku(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Yt(n, r, o);
        }
      else
        l.current = null;
  }
  function fd(n, r, l) {
    try {
      l();
    } catch (o) {
      Yt(n, r, o);
    }
  }
  var Sc = !1;
  function iy(n, r) {
    if (Pf = pl, n = Ms(), ui(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var h = 0, S = -1, C = -1, L = 0, H = 0, V = n, F = null;
            t:
              for (; ; ) {
                for (var Z; V !== l || c !== 0 && V.nodeType !== 3 || (S = h + c), V !== d || o !== 0 && V.nodeType !== 3 || (C = h + o), V.nodeType === 3 && (h += V.nodeValue.length), (Z = V.firstChild) !== null; )
                  F = V, V = Z;
                for (; ; ) {
                  if (V === n)
                    break t;
                  if (F === l && ++L === c && (S = h), F === d && ++H === o && (C = h), (Z = V.nextSibling) !== null)
                    break;
                  V = F, F = V.parentNode;
                }
                V = Z;
              }
            l = S === -1 || C === -1 ? null : { start: S, end: C };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (gl = { focusedElem: n, selectionRange: l }, pl = !1, re = r; re !== null; )
      if (r = re, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, re = n;
      else
        for (; re !== null; ) {
          r = re;
          try {
            var ae = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ae !== null) {
                    var se = ae.memoizedProps, Gt = ae.memoizedState, w = r.stateNode, R = w.getSnapshotBeforeUpdate(r.elementType === r.type ? se : Sr(r.type, se), Gt);
                    w.__reactInternalSnapshotBeforeUpdate = R;
                  }
                  break;
                case 3:
                  var b = r.stateNode.containerInfo;
                  b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(k(163));
              }
          } catch ($) {
            Yt(r, r.return, $);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, re = n;
            break;
          }
          re = r.return;
        }
    return ae = Sc, Sc = !1, ae;
  }
  function Ou(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && fd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ec(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Cc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Hv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Hv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ba], delete r[El], delete r[If], delete r[Jm], delete r[Qf])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function dd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function jv(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || dd(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function $o(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Hs));
    else if (o !== 4 && (n = n.child, n !== null))
      for ($o(n, r, l), n = n.sibling; n !== null; )
        $o(n, r, l), n = n.sibling;
  }
  function Lu(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Lu(n, r, l), n = n.sibling; n !== null; )
        Lu(n, r, l), n = n.sibling;
  }
  var zt = null, Sn = !1;
  function Zn(n, r, l) {
    for (l = l.child; l !== null; )
      Mu(n, r, l), l = l.sibling;
  }
  function Mu(n, r, l) {
    if (wa && typeof wa.onCommitFiberUnmount == "function")
      try {
        wa.onCommitFiberUnmount(lo, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        On || ku(l, r);
      case 6:
        var o = zt, c = Sn;
        zt = null, Zn(n, r, l), zt = o, Sn = c, zt !== null && (Sn ? (n = zt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : zt.removeChild(l.stateNode));
        break;
      case 18:
        zt !== null && (Sn ? (n = zt, l = l.stateNode, n.nodeType === 8 ? Fi(n.parentNode, l) : n.nodeType === 1 && Fi(n, l), fo(n)) : Fi(zt, l.stateNode));
        break;
      case 4:
        o = zt, c = Sn, zt = l.stateNode.containerInfo, Sn = !0, Zn(n, r, l), zt = o, Sn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!On && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && fd(l, r, h), c = c.next;
          } while (c !== o);
        }
        Zn(n, r, l);
        break;
      case 1:
        if (!On && (ku(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (S) {
            Yt(l, r, S);
          }
        Zn(n, r, l);
        break;
      case 21:
        Zn(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (On = (o = On) || l.memoizedState !== null, Zn(n, r, l), On = o) : Zn(n, r, l);
        break;
      default:
        Zn(n, r, l);
    }
  }
  function Nu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new gc()), r.forEach(function(o) {
        var c = dy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function En(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, h = r, S = h;
          e:
            for (; S !== null; ) {
              switch (S.tag) {
                case 5:
                  zt = S.stateNode, Sn = !1;
                  break e;
                case 3:
                  zt = S.stateNode.containerInfo, Sn = !0;
                  break e;
                case 4:
                  zt = S.stateNode.containerInfo, Sn = !0;
                  break e;
              }
              S = S.return;
            }
          if (zt === null)
            throw Error(k(160));
          Mu(d, h, c), zt = null, Sn = !1;
          var C = c.alternate;
          C !== null && (C.return = null), c.return = null;
        } catch (L) {
          Yt(c, r, L);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Vv(r, n), r = r.sibling;
  }
  function Vv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (En(r, n), Ia(n), o & 4) {
          try {
            Ou(3, n, n.return), Ec(3, n);
          } catch (se) {
            Yt(n, n.return, se);
          }
          try {
            Ou(5, n, n.return);
          } catch (se) {
            Yt(n, n.return, se);
          }
        }
        break;
      case 1:
        En(r, n), Ia(n), o & 512 && l !== null && ku(l, l.return);
        break;
      case 5:
        if (En(r, n), Ia(n), o & 512 && l !== null && ku(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Ra(c, "");
          } catch (se) {
            Yt(n, n.return, se);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null)
            try {
              S === "input" && d.type === "radio" && d.name != null && _n(c, d), It(S, h);
              var L = It(S, d);
              for (h = 0; h < C.length; h += 2) {
                var H = C[h], V = C[h + 1];
                H === "style" ? ct(c, V) : H === "dangerouslySetInnerHTML" ? Oi(c, V) : H === "children" ? Ra(c, V) : Be(c, H, V, L);
              }
              switch (S) {
                case "input":
                  Pn(c, d);
                  break;
                case "textarea":
                  Ha(c, d);
                  break;
                case "select":
                  var F = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var Z = d.value;
                  Z != null ? Fa(c, !!d.multiple, Z, !1) : F !== !!d.multiple && (d.defaultValue != null ? Fa(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Fa(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[El] = d;
            } catch (se) {
              Yt(n, n.return, se);
            }
        }
        break;
      case 6:
        if (En(r, n), Ia(n), o & 4) {
          if (n.stateNode === null)
            throw Error(k(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (se) {
            Yt(n, n.return, se);
          }
        }
        break;
      case 3:
        if (En(r, n), Ia(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            fo(r.containerInfo);
          } catch (se) {
            Yt(n, n.return, se);
          }
        break;
      case 4:
        En(r, n), Ia(n);
        break;
      case 13:
        En(r, n), Ia(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Rc = lt())), o & 4 && Nu(n);
        break;
      case 22:
        if (H = l !== null && l.memoizedState !== null, n.mode & 1 ? (On = (L = On) || H, En(r, n), On = L) : En(r, n), Ia(n), o & 8192) {
          if (L = n.memoizedState !== null, (n.stateNode.isHidden = L) && !H && n.mode & 1)
            for (re = n, H = n.child; H !== null; ) {
              for (V = re = H; re !== null; ) {
                switch (F = re, Z = F.child, F.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ou(4, F, F.return);
                    break;
                  case 1:
                    ku(F, F.return);
                    var ae = F.stateNode;
                    if (typeof ae.componentWillUnmount == "function") {
                      o = F, l = F.return;
                      try {
                        r = o, ae.props = r.memoizedProps, ae.state = r.memoizedState, ae.componentWillUnmount();
                      } catch (se) {
                        Yt(o, l, se);
                      }
                    }
                    break;
                  case 5:
                    ku(F, F.return);
                    break;
                  case 22:
                    if (F.memoizedState !== null) {
                      Bv(V);
                      continue;
                    }
                }
                Z !== null ? (Z.return = F, re = Z) : Bv(V);
              }
              H = H.sibling;
            }
          e:
            for (H = null, V = n; ; ) {
              if (V.tag === 5) {
                if (H === null) {
                  H = V;
                  try {
                    c = V.stateNode, L ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = V.stateNode, C = V.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = Ae("display", h));
                  } catch (se) {
                    Yt(n, n.return, se);
                  }
                }
              } else if (V.tag === 6) {
                if (H === null)
                  try {
                    V.stateNode.nodeValue = L ? "" : V.memoizedProps;
                  } catch (se) {
                    Yt(n, n.return, se);
                  }
              } else if ((V.tag !== 22 && V.tag !== 23 || V.memoizedState === null || V === n) && V.child !== null) {
                V.child.return = V, V = V.child;
                continue;
              }
              if (V === n)
                break e;
              for (; V.sibling === null; ) {
                if (V.return === null || V.return === n)
                  break e;
                H === V && (H = null), V = V.return;
              }
              H === V && (H = null), V.sibling.return = V.return, V = V.sibling;
            }
        }
        break;
      case 19:
        En(r, n), Ia(n), o & 4 && Nu(n);
        break;
      case 21:
        break;
      default:
        En(
          r,
          n
        ), Ia(n);
    }
  }
  function Ia(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (dd(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(k(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Ra(c, ""), o.flags &= -33);
            var d = jv(n);
            Lu(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = jv(n);
            $o(n, S, h);
            break;
          default:
            throw Error(k(161));
        }
      } catch (C) {
        Yt(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ly(n, r, l) {
    re = n, pd(n);
  }
  function pd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; re !== null; ) {
      var c = re, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || bu;
        if (!h) {
          var S = c.alternate, C = S !== null && S.memoizedState !== null || On;
          S = bu;
          var L = On;
          if (bu = h, (On = C) && !L)
            for (re = c; re !== null; )
              h = re, C = h.child, h.tag === 22 && h.memoizedState !== null ? vd(c) : C !== null ? (C.return = h, re = C) : vd(c);
          for (; d !== null; )
            re = d, pd(d), d = d.sibling;
          re = c, bu = S, On = L;
        }
        zu(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, re = d) : zu(n);
    }
  }
  function zu(n) {
    for (; re !== null; ) {
      var r = re;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                On || Ec(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !On)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : Sr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && xv(r, d, o);
                break;
              case 3:
                var h = r.updateQueue;
                if (h !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  xv(r, h, l);
                }
                break;
              case 5:
                var S = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = S;
                  var C = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      C.autoFocus && l.focus();
                      break;
                    case "img":
                      C.src && (l.src = C.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var L = r.alternate;
                  if (L !== null) {
                    var H = L.memoizedState;
                    if (H !== null) {
                      var V = H.dehydrated;
                      V !== null && fo(V);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(k(163));
            }
          On || r.flags & 512 && Cc(r);
        } catch (F) {
          Yt(r, r.return, F);
        }
      }
      if (r === n) {
        re = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, re = l;
        break;
      }
      re = r.return;
    }
  }
  function Bv(n) {
    for (; re !== null; ) {
      var r = re;
      if (r === n) {
        re = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, re = l;
        break;
      }
      re = r.return;
    }
  }
  function vd(n) {
    for (; re !== null; ) {
      var r = re;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ec(4, r);
            } catch (C) {
              Yt(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                Yt(r, c, C);
              }
            }
            var d = r.return;
            try {
              Cc(r);
            } catch (C) {
              Yt(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              Cc(r);
            } catch (C) {
              Yt(r, h, C);
            }
        }
      } catch (C) {
        Yt(r, r.return, C);
      }
      if (r === n) {
        re = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, re = S;
        break;
      }
      re = r.return;
    }
  }
  var uy = Math.ceil, Ml = gt.ReactCurrentDispatcher, Tc = gt.ReactCurrentOwner, oa = gt.ReactCurrentBatchConfig, Ye = 0, $t = null, Ot = null, ln = 0, Tr = 0, Uu = Ne(0), un = 0, Yo = null, Nl = 0, Au = 0, hd = 0, Wi = null, Xn = null, Rc = 0, Fu = 1 / 0, mi = null, xc = !1, md = null, sa = null, Hu = !1, ca = null, wc = 0, Io = 0, Dc = null, Qo = -1, zl = 0;
  function Cn() {
    return Ye & 6 ? lt() : Qo !== -1 ? Qo : Qo = lt();
  }
  function yi(n) {
    return n.mode & 1 ? Ye & 2 && ln !== 0 ? ln & -ln : Ys.transition !== null ? (zl === 0 && (zl = Es()), zl) : (n = ft, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Tf(n.type)), n) : 1;
  }
  function Ht(n, r, l, o) {
    if (50 < Io)
      throw Io = 0, Dc = null, Error(k(185));
    dl(n, l, o), (!(Ye & 2) || n !== $t) && (n === $t && (!(Ye & 2) && (Au |= l), un === 4 && Qa(n, ln)), on(n, o), l === 1 && Ye === 0 && !(r.mode & 1) && (Fu = lt() + 500, gn && vr()));
  }
  function on(n, r) {
    var l = n.callbackNode;
    Ss(n, r);
    var o = Da(n, n === $t ? ln : 0);
    if (o === 0)
      l !== null && At(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && At(l), r === 1)
        n.tag === 0 ? Gf(ju.bind(null, n)) : Wf(ju.bind(null, n)), Yf(function() {
          !(Ye & 6) && vr();
        }), l = null;
      else {
        switch (Sf(o)) {
          case 1:
            l = Nr;
            break;
          case 4:
            l = He;
            break;
          case 16:
            l = Va;
            break;
          case 536870912:
            l = hf;
            break;
          default:
            l = Va;
        }
        l = Xv(l, _c.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function _c(n, r) {
    if (Qo = -1, zl = 0, Ye & 6)
      throw Error(k(327));
    var l = n.callbackNode;
    if (Vu() && n.callbackNode !== l)
      return null;
    var o = Da(n, n === $t ? ln : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = kc(n, o);
    else {
      r = o;
      var c = Ye;
      Ye |= 2;
      var d = $v();
      ($t !== n || ln !== r) && (mi = null, Fu = lt() + 500, Al(n, r));
      do
        try {
          sy();
          break;
        } catch (S) {
          Pv(n, S);
        }
      while (!0);
      Hr(), Ml.current = d, Ye = c, Ot !== null ? r = 0 : ($t = null, ln = 0, r = un);
    }
    if (r !== 0) {
      if (r === 2 && (c = yf(n), c !== 0 && (o = c, r = Ul(n, c))), r === 1)
        throw l = Yo, Al(n, 0), Qa(n, o), on(n, lt()), l;
      if (r === 6)
        Qa(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !gd(c) && (r = kc(n, o), r === 2 && (d = yf(n), d !== 0 && (o = d, r = Ul(n, d))), r === 1))
          throw l = Yo, Al(n, 0), Qa(n, o), on(n, lt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(k(345));
          case 2:
            Gi(n, Xn, mi);
            break;
          case 3:
            if (Qa(n, o), (o & 130023424) === o && (r = Rc + 500 - lt(), 10 < r)) {
              if (Da(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Cn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Sl(Gi.bind(null, n, Xn, mi), r);
              break;
            }
            Gi(n, Xn, mi);
            break;
          case 4:
            if (Qa(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - Xr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = lt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * uy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Sl(Gi.bind(null, n, Xn, mi), o);
              break;
            }
            Gi(n, Xn, mi);
            break;
          case 5:
            Gi(n, Xn, mi);
            break;
          default:
            throw Error(k(329));
        }
      }
    }
    return on(n, lt()), n.callbackNode === l ? _c.bind(null, n) : null;
  }
  function Ul(n, r) {
    var l = Wi;
    return n.current.memoizedState.isDehydrated && (Al(n, r).flags |= 256), n = kc(n, r), n !== 2 && (r = Xn, Xn = l, r !== null && yd(r)), n;
  }
  function yd(n) {
    Xn === null ? Xn = n : Xn.push.apply(Xn, n);
  }
  function gd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!Zr(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Qa(n, r) {
    for (r &= ~hd, r &= ~Au, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Xr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function ju(n) {
    if (Ye & 6)
      throw Error(k(327));
    Vu();
    var r = Da(n, 0);
    if (!(r & 1))
      return on(n, lt()), null;
    var l = kc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = yf(n);
      o !== 0 && (r = o, l = Ul(n, o));
    }
    if (l === 1)
      throw l = Yo, Al(n, 0), Qa(n, r), on(n, lt()), l;
    if (l === 6)
      throw Error(k(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Gi(n, Xn, mi), on(n, lt()), null;
  }
  function Sd(n, r) {
    var l = Ye;
    Ye |= 1;
    try {
      return n(r);
    } finally {
      Ye = l, Ye === 0 && (Fu = lt() + 500, gn && vr());
    }
  }
  function Wa(n) {
    ca !== null && ca.tag === 0 && !(Ye & 6) && Vu();
    var r = Ye;
    Ye |= 1;
    var l = oa.transition, o = ft;
    try {
      if (oa.transition = null, ft = 1, n)
        return n();
    } finally {
      ft = o, oa.transition = l, Ye = r, !(Ye & 6) && vr();
    }
  }
  function bc() {
    Tr = Uu.current, at(Uu);
  }
  function Al(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, hv(l)), Ot !== null)
      for (l = Ot.return; l !== null; ) {
        var o = l;
        switch (qf(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && ta();
            break;
          case 3:
            yu(), at(Bt), at(De), rd();
            break;
          case 5:
            nd(o);
            break;
          case 4:
            yu();
            break;
          case 13:
            at(Nt);
            break;
          case 19:
            at(Nt);
            break;
          case 10:
            Jf(o.type._context);
            break;
          case 22:
          case 23:
            bc();
        }
        l = l.return;
      }
    if ($t = n, Ot = n = Xi(n.current, null), ln = Tr = r, un = 0, Yo = null, hd = Au = Nl = 0, Xn = Wi = null, Rl !== null) {
      for (r = 0; r < Rl.length; r++)
        if (l = Rl[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var h = d.next;
            d.next = c, o.next = h;
          }
          l.pending = o;
        }
      Rl = null;
    }
    return n;
  }
  function Pv(n, r) {
    do {
      var l = Ot;
      try {
        if (Hr(), Ks.current = Wn, jr) {
          for (var o = pe.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          jr = !1;
        }
        if (fe = 0, je = _e = pe = null, gu = !1, zo = 0, Tc.current = null, l === null || l.return === null) {
          un = 1, Yo = r, Ot = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = ln, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var L = C, H = S, V = H.tag;
            if (!(H.mode & 1) && (V === 0 || V === 11 || V === 15)) {
              var F = H.alternate;
              F ? (H.updateQueue = F.updateQueue, H.memoizedState = F.memoizedState, H.lanes = F.lanes) : (H.updateQueue = null, H.memoizedState = null);
            }
            var Z = Nv(h);
            if (Z !== null) {
              Z.flags &= -257, od(Z, h, S, d, r), Z.mode & 1 && jo(d, L, r), r = Z, C = L;
              var ae = r.updateQueue;
              if (ae === null) {
                var se = /* @__PURE__ */ new Set();
                se.add(C), r.updateQueue = se;
              } else
                ae.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                jo(d, L, r), Wo();
                break e;
              }
              C = Error(k(426));
            }
          } else if (kt && S.mode & 1) {
            var Gt = Nv(h);
            if (Gt !== null) {
              !(Gt.flags & 65536) && (Gt.flags |= 256), od(Gt, h, S, d, r), Zf(Ii(C, S));
              break e;
            }
          }
          d = C = Ii(C, S), un !== 4 && (un = 2), Wi === null ? Wi = [d] : Wi.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var w = Lv(d, C, r);
                Rv(d, w);
                break e;
              case 1:
                S = C;
                var R = d.type, b = d.stateNode;
                if (!(d.flags & 128) && (typeof R.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (sa === null || !sa.has(b)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var $ = Mv(d, S, r);
                  Rv(d, $);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Iv(l);
      } catch (de) {
        r = de, Ot === l && l !== null && (Ot = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function $v() {
    var n = Ml.current;
    return Ml.current = Wn, n === null ? Wn : n;
  }
  function Wo() {
    (un === 0 || un === 3 || un === 2) && (un = 4), $t === null || !(Nl & 268435455) && !(Au & 268435455) || Qa($t, ln);
  }
  function kc(n, r) {
    var l = Ye;
    Ye |= 2;
    var o = $v();
    ($t !== n || ln !== r) && (mi = null, Al(n, r));
    do
      try {
        oy();
        break;
      } catch (c) {
        Pv(n, c);
      }
    while (!0);
    if (Hr(), Ye = l, Ml.current = o, Ot !== null)
      throw Error(k(261));
    return $t = null, ln = 0, un;
  }
  function oy() {
    for (; Ot !== null; )
      Yv(Ot);
  }
  function sy() {
    for (; Ot !== null && !fr(); )
      Yv(Ot);
  }
  function Yv(n) {
    var r = Gv(n.alternate, n, Tr);
    n.memoizedProps = n.pendingProps, r === null ? Iv(n) : Ot = r, Tc.current = null;
  }
  function Iv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ay(l, r), l !== null) {
          l.flags &= 32767, Ot = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          un = 6, Ot = null;
          return;
        }
      } else if (l = ry(l, r, Tr), l !== null) {
        Ot = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Ot = r;
        return;
      }
      Ot = r = n;
    } while (r !== null);
    un === 0 && (un = 5);
  }
  function Gi(n, r, l) {
    var o = ft, c = oa.transition;
    try {
      oa.transition = null, ft = 1, cy(n, r, l, o);
    } finally {
      oa.transition = c, ft = o;
    }
    return null;
  }
  function cy(n, r, l, o) {
    do
      Vu();
    while (ca !== null);
    if (Ye & 6)
      throw Error(k(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(k(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Um(n, d), n === $t && (Ot = $t = null, ln = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Hu || (Hu = !0, Xv(Va, function() {
      return Vu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = oa.transition, oa.transition = null;
      var h = ft;
      ft = 1;
      var S = Ye;
      Ye |= 4, Tc.current = null, iy(n, l), Vv(l, n), Ns(gl), pl = !!Pf, gl = Pf = null, n.current = l, ly(l), Mi(), Ye = S, ft = h, oa.transition = d;
    } else
      n.current = l;
    if (Hu && (Hu = !1, ca = n, wc = c), d = n.pendingLanes, d === 0 && (sa = null), kp(l.stateNode), on(n, lt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (xc)
      throw xc = !1, n = md, md = null, n;
    return wc & 1 && n.tag !== 0 && Vu(), d = n.pendingLanes, d & 1 ? n === Dc ? Io++ : (Io = 0, Dc = n) : Io = 0, vr(), null;
  }
  function Vu() {
    if (ca !== null) {
      var n = Sf(wc), r = oa.transition, l = ft;
      try {
        if (oa.transition = null, ft = 16 > n ? 16 : n, ca === null)
          var o = !1;
        else {
          if (n = ca, ca = null, wc = 0, Ye & 6)
            throw Error(k(331));
          var c = Ye;
          for (Ye |= 4, re = n.current; re !== null; ) {
            var d = re, h = d.child;
            if (re.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var L = S[C];
                  for (re = L; re !== null; ) {
                    var H = re;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ou(8, H, d);
                    }
                    var V = H.child;
                    if (V !== null)
                      V.return = H, re = V;
                    else
                      for (; re !== null; ) {
                        H = re;
                        var F = H.sibling, Z = H.return;
                        if (Hv(H), H === L) {
                          re = null;
                          break;
                        }
                        if (F !== null) {
                          F.return = Z, re = F;
                          break;
                        }
                        re = Z;
                      }
                  }
                }
                var ae = d.alternate;
                if (ae !== null) {
                  var se = ae.child;
                  if (se !== null) {
                    ae.child = null;
                    do {
                      var Gt = se.sibling;
                      se.sibling = null, se = Gt;
                    } while (se !== null);
                  }
                }
                re = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null)
              h.return = d, re = h;
            else
              e:
                for (; re !== null; ) {
                  if (d = re, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ou(9, d, d.return);
                    }
                  var w = d.sibling;
                  if (w !== null) {
                    w.return = d.return, re = w;
                    break e;
                  }
                  re = d.return;
                }
          }
          var R = n.current;
          for (re = R; re !== null; ) {
            h = re;
            var b = h.child;
            if (h.subtreeFlags & 2064 && b !== null)
              b.return = h, re = b;
            else
              e:
                for (h = R; re !== null; ) {
                  if (S = re, S.flags & 2048)
                    try {
                      switch (S.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ec(9, S);
                      }
                    } catch (de) {
                      Yt(S, S.return, de);
                    }
                  if (S === h) {
                    re = null;
                    break e;
                  }
                  var $ = S.sibling;
                  if ($ !== null) {
                    $.return = S.return, re = $;
                    break e;
                  }
                  re = S.return;
                }
          }
          if (Ye = c, vr(), wa && typeof wa.onPostCommitFiberRoot == "function")
            try {
              wa.onPostCommitFiberRoot(lo, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        ft = l, oa.transition = r;
      }
    }
    return !1;
  }
  function Qv(n, r, l) {
    r = Ii(l, r), r = Lv(n, r, 1), n = $i(n, r, 1), r = Cn(), n !== null && (dl(n, 1, r), on(n, r));
  }
  function Yt(n, r, l) {
    if (n.tag === 3)
      Qv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Qv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (sa === null || !sa.has(o))) {
            n = Ii(l, n), n = Mv(r, n, 1), r = $i(r, n, 1), n = Cn(), r !== null && (dl(r, 1, n), on(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function fy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Cn(), n.pingedLanes |= n.suspendedLanes & l, $t === n && (ln & l) === l && (un === 4 || un === 3 && (ln & 130023424) === ln && 500 > lt() - Rc ? Al(n, 0) : hd |= l), on(n, r);
  }
  function Wv(n, r) {
    r === 0 && (n.mode & 1 ? (r = eu, eu <<= 1, !(eu & 130023424) && (eu = 4194304)) : r = 1);
    var l = Cn();
    n = pi(n, r), n !== null && (dl(n, r, l), on(n, l));
  }
  function Ed(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Wv(n, l);
  }
  function dy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(k(314));
    }
    o !== null && o.delete(r), Wv(n, l);
  }
  var Gv;
  Gv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Bt.current)
        Er = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Er = !1, hi(n, r, l);
        Er = !!(n.flags & 131072);
      }
    else
      Er = !1, kt && r.flags & 1048576 && Xf(r, du, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Po(n, r), n = r.pendingProps;
        var c = ea(r, De.current);
        vu(r, l), c = A(null, r, o, n, c, l);
        var d = en();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Mt(o) ? (d = !0, js(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Qs(r), c.updater = kl, r.stateNode = c, c._reactInternals = r, ld(r, o, n, l), r = vc(null, r, o, !0, d, l)) : (r.tag = 0, kt && d && Vs(r), Qt(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Po(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = py(o), n = Sr(o, n), c) {
            case 0:
              r = Me(null, r, o, n, l);
              break e;
            case 1:
              r = Vo(null, r, o, n, l);
              break e;
            case 11:
              r = wu(null, r, o, n, l);
              break e;
            case 14:
              r = Qi(null, r, o, Sr(o.type, n), l);
              break e;
          }
          throw Error(k(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Sr(o, c), Me(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Sr(o, c), Vo(n, r, o, c, l);
      case 3:
        e: {
          if (ny(r), n === null)
            throw Error(k(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, hu(n, r), Gs(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Ii(Error(k(423)), r), r = Uv(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = Ii(Error(k(424)), r), r = Uv(n, r, o, l, c);
              break e;
            } else
              for (yr = Oa(r.stateNode.containerInfo.firstChild), Fr = r, kt = !0, ra = null, l = Cv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ft(), o === c) {
              r = Wt(n, r, l);
              break e;
            }
            Qt(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return wv(r), n === null && Ps(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, Do(o, c) ? h = null : d !== null && Do(o, d) && (r.flags |= 32), Ol(n, r), Qt(n, r, h, l), r.child;
      case 6:
        return n === null && Ps(r), null;
      case 13:
        return Av(n, r, l);
      case 4:
        return td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = pu(r, null, o, l) : Qt(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Sr(o, c), wu(n, r, o, c, l);
      case 7:
        return Qt(n, r, r.pendingProps, l), r.child;
      case 8:
        return Qt(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Qt(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, ut(di, o._currentValue), o._currentValue = h, d !== null)
            if (Zr(d.value, h)) {
              if (d.children === c.children && !Bt.current) {
                r = Wt(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var S = d.dependencies;
                if (S !== null) {
                  h = d.child;
                  for (var C = S.firstContext; C !== null; ) {
                    if (C.context === o) {
                      if (d.tag === 1) {
                        C = gr(-1, l & -l), C.tag = 2;
                        var L = d.updateQueue;
                        if (L !== null) {
                          L = L.shared;
                          var H = L.pending;
                          H === null ? C.next = C : (C.next = H.next, H.next = C), L.pending = C;
                        }
                      }
                      d.lanes |= l, C = d.alternate, C !== null && (C.lanes |= l), ed(
                        d.return,
                        l,
                        r
                      ), S.lanes |= l;
                      break;
                    }
                    C = C.next;
                  }
                } else if (d.tag === 10)
                  h = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (h = d.return, h === null)
                    throw Error(k(341));
                  h.lanes |= l, S = h.alternate, S !== null && (S.lanes |= l), ed(h, l, r), h = d.sibling;
                } else
                  h = d.child;
                if (h !== null)
                  h.return = d;
                else
                  for (h = d; h !== null; ) {
                    if (h === r) {
                      h = null;
                      break;
                    }
                    if (d = h.sibling, d !== null) {
                      d.return = h.return, h = d;
                      break;
                    }
                    h = h.return;
                  }
                d = h;
              }
          Qt(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, vu(r, l), c = ia(c), o = o(c), r.flags |= 1, Qt(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Sr(o, r.pendingProps), c = Sr(o.type, c), Qi(n, r, o, c, l);
      case 15:
        return pc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Sr(o, c), Po(n, r), r.tag = 1, Mt(o) ? (n = !0, js(r)) : n = !1, vu(r, l), bv(r, o, c), ld(r, o, c, l), vc(null, r, o, !0, n, l);
      case 19:
        return cd(n, r, l);
      case 22:
        return Cr(n, r, l);
    }
    throw Error(k(156, r.tag));
  };
  function Xv(n, r) {
    return _t(n, r);
  }
  function qv(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fa(n, r, l, o) {
    return new qv(n, r, l, o);
  }
  function Cd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function py(n) {
    if (typeof n == "function")
      return Cd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === xn)
        return 11;
      if (n === dn)
        return 14;
    }
    return 2;
  }
  function Xi(n, r) {
    var l = n.alternate;
    return l === null ? (l = fa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Oc(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function")
      Cd(n) && (h = 1);
    else if (typeof n == "string")
      h = 5;
    else
      e:
        switch (n) {
          case Ue:
            return Fl(l.children, c, d, r);
          case Rn:
            h = 8, c |= 8;
            break;
          case jn:
            return n = fa(12, l, r, c | 2), n.elementType = jn, n.lanes = d, n;
          case be:
            return n = fa(13, l, r, c), n.elementType = be, n.lanes = d, n;
          case Qe:
            return n = fa(19, l, r, c), n.elementType = Qe, n.lanes = d, n;
          case qn:
            return Lc(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Vt:
                  h = 10;
                  break e;
                case pt:
                  h = 9;
                  break e;
                case xn:
                  h = 11;
                  break e;
                case dn:
                  h = 14;
                  break e;
                case Dt:
                  h = 16, o = null;
                  break e;
              }
            throw Error(k(130, n == null ? n : typeof n, ""));
        }
    return r = fa(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Fl(n, r, l, o) {
    return n = fa(7, n, o, r), n.lanes = l, n;
  }
  function Lc(n, r, l, o) {
    return n = fa(22, n, o, r), n.elementType = qn, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Mc(n, r, l) {
    return n = fa(6, n, null, r), n.lanes = l, n;
  }
  function Go(n, r, l) {
    return r = fa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Xo(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gf(0), this.expirationTimes = gf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Td(n, r, l, o, c, d, h, S, C) {
    return n = new Xo(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = fa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qs(d), n;
  }
  function Kv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: wt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Rd(n) {
    if (!n)
      return Pa;
    n = n._reactInternals;
    e: {
      if (me(n) !== n || n.tag !== 1)
        throw Error(k(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Mt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(k(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Mt(l))
        return ko(n, l, r);
    }
    return r;
  }
  function xd(n, r, l, o, c, d, h, S, C) {
    return n = Td(l, o, !0, n, c, d, h, S, C), n.context = Rd(null), l = n.current, o = Cn(), c = yi(l), d = gr(o, c), d.callback = r ?? null, $i(l, d, c), n.current.lanes = c, dl(n, c, o), on(n, o), n;
  }
  function Nc(n, r, l, o) {
    var c = r.current, d = Cn(), h = yi(c);
    return l = Rd(l), r.context === null ? r.context = l : r.pendingContext = l, r = gr(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = $i(c, r, h), n !== null && (Ht(n, c, h, d), Ws(n, c, h)), h;
  }
  function qo(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Zv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function wd(n, r) {
    Zv(n, r), (n = n.alternate) && Zv(n, r);
  }
  function vy() {
    return null;
  }
  var Dd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function zc(n) {
    this._internalRoot = n;
  }
  Ko.prototype.render = zc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(k(409));
    Nc(n, r, null, null);
  }, Ko.prototype.unmount = zc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Wa(function() {
        Nc(null, n, null, null);
      }), r[ci] = null;
    }
  };
  function Ko(n) {
    this._internalRoot = n;
  }
  Ko.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Np();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < vt.length && r !== 0 && r < vt[l].priority; l++)
        ;
      vt.splice(l, 0, n), l === 0 && zp(n);
    }
  };
  function qi(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Uc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Jv() {
  }
  function hy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var L = qo(h);
          d.call(L);
        };
      }
      var h = xd(r, o, n, 0, null, !1, !1, "", Jv);
      return n._reactRootContainer = h, n[ci] = h.current, cu(n.nodeType === 8 ? n.parentNode : n), Wa(), h;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var L = qo(C);
        S.call(L);
      };
    }
    var C = Td(n, 0, !1, null, null, !1, !1, "", Jv);
    return n._reactRootContainer = C, n[ci] = C.current, cu(n.nodeType === 8 ? n.parentNode : n), Wa(function() {
      Nc(r, C, l, o);
    }), C;
  }
  function Ac(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var C = qo(h);
          S.call(C);
        };
      }
      Nc(r, h, n, c);
    } else
      h = hy(l, r, n, c, o);
    return qo(h);
  }
  Mp = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = fl(r.pendingLanes);
          l !== 0 && (uo(r, l | 1), on(r, lt()), !(Ye & 6) && (Fu = lt() + 500, vr()));
        }
        break;
      case 13:
        Wa(function() {
          var o = pi(n, 1);
          if (o !== null) {
            var c = Cn();
            Ht(o, n, 1, c);
          }
        }), wd(n, 1);
    }
  }, Cs = function(n) {
    if (n.tag === 13) {
      var r = pi(n, 134217728);
      if (r !== null) {
        var l = Cn();
        Ht(r, n, 134217728, l);
      }
      wd(n, 134217728);
    }
  }, dt = function(n) {
    if (n.tag === 13) {
      var r = yi(n), l = pi(n, r);
      if (l !== null) {
        var o = Cn();
        Ht(l, n, r, o);
      }
      wd(n, r);
    }
  }, Np = function() {
    return ft;
  }, Ef = function(n, r) {
    var l = ft;
    try {
      return ft = n, r();
    } finally {
      ft = l;
    }
  }, Lr = function(n, r, l) {
    switch (r) {
      case "input":
        if (Pn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Se(o);
              if (!c)
                throw Error(k(90));
              Wr(o), Pn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ha(n, l);
        break;
      case "select":
        r = l.value, r != null && Fa(n, !!l.multiple, r, !1);
    }
  }, io = Sd, ys = Wa;
  var my = { usingClientEntryPoint: !1, Events: [bo, fu, Se, ul, Kl, Sd] }, Zo = { findFiberByHostInstance: Jr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, eh = { bundleType: Zo.bundleType, version: Zo.version, rendererPackageName: Zo.rendererPackageName, rendererConfig: Zo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Fe(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Zo.findFiberByHostInstance || vy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fc.isDisabled && Fc.supportsFiber)
      try {
        lo = Fc.inject(eh), wa = Fc;
      } catch {
      }
  }
  return ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = my, ya.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qi(r))
      throw Error(k(200));
    return Kv(n, r, null, l);
  }, ya.createRoot = function(n, r) {
    if (!qi(n))
      throw Error(k(299));
    var l = !1, o = "", c = Dd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Td(n, 1, !1, null, null, l, !1, o, c), n[ci] = r.current, cu(n.nodeType === 8 ? n.parentNode : n), new zc(r);
  }, ya.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(k(188)) : (n = Object.keys(n).join(","), Error(k(268, n)));
    return n = Fe(r), n = n === null ? null : n.stateNode, n;
  }, ya.flushSync = function(n) {
    return Wa(n);
  }, ya.hydrate = function(n, r, l) {
    if (!Uc(r))
      throw Error(k(200));
    return Ac(null, n, r, !0, l);
  }, ya.hydrateRoot = function(n, r, l) {
    if (!qi(n))
      throw Error(k(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = Dd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = xd(r, null, n, 1, l ?? null, c, !1, d, h), n[ci] = r.current, cu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Ko(r);
  }, ya.render = function(n, r, l) {
    if (!Uc(r))
      throw Error(k(200));
    return Ac(null, n, r, !1, l);
  }, ya.unmountComponentAtNode = function(n) {
    if (!Uc(n))
      throw Error(k(40));
    return n._reactRootContainer ? (Wa(function() {
      Ac(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ci] = null;
      });
    }), !0) : !1;
  }, ya.unstable_batchedUpdates = Sd, ya.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Uc(l))
      throw Error(k(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(k(38));
    return Ac(n, r, l, !1, o);
  }, ya.version = "18.3.1-next-f1338f8080-20240426", ya;
}
var ga = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JC;
function mb() {
  return JC || (JC = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var P = Nm, K = nT(), k = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Pe = !1;
    function it(e) {
      Pe = e;
    }
    function Ve(e) {
      if (!Pe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ct("warn", e, a);
      }
    }
    function g(e) {
      if (!Pe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ct("error", e, a);
      }
    }
    function Ct(e, t, a) {
      {
        var i = k.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ce = 0, ue = 1, nt = 2, ne = 3, he = 4, oe = 5, ze = 6, st = 7, yt = 8, fn = 9, Ke = 10, Be = 11, gt = 12, $e = 13, wt = 14, Ue = 15, Rn = 16, jn = 17, Vt = 18, pt = 19, xn = 21, be = 22, Qe = 23, dn = 24, Dt = 25, qn = !0, Y = !1, Ce = !1, ee = !1, Ze = !1, rt = !0, wn = !1, Kn = !0, Ua = !0, nn = !0, Qr = !0, Vn = /* @__PURE__ */ new Set(), or = {}, Aa = {};
    function sr(e, t) {
      Wr(e, t), Wr(e + "Capture", t);
    }
    function Wr(e, t) {
      or[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), or[e] = t;
      {
        var a = e.toLowerCase();
        Aa[a] = e, e === "onDoubleClick" && (Aa.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Vn.add(t[i]);
    }
    var pn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Bn = Object.prototype.hasOwnProperty;
    function Dn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function _n(e) {
      try {
        return Pn(e), !1;
      } catch {
        return !0;
      }
    }
    function Pn(e) {
      return "" + e;
    }
    function Gr(e, t) {
      if (_n(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Pn(e);
    }
    function Ea(e) {
      if (_n(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dn(e)), Pn(e);
    }
    function ni(e, t) {
      if (_n(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Pn(e);
    }
    function Fa(e, t) {
      if (_n(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Pn(e);
    }
    function Ca(e) {
      if (_n(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Dn(e)), Pn(e);
    }
    function br(e) {
      if (_n(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Dn(e)), Pn(e);
    }
    var Ha = 0, kr = 1, Ta = 2, qt = 3, Or = 4, Oi = 5, Ra = 6, G = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ge = G + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ae = new RegExp("^[" + G + "][" + ge + "]*$"), ct = {}, Ut = {};
    function vn(e) {
      return Bn.call(Ut, e) ? !0 : Bn.call(ct, e) ? !1 : Ae.test(e) ? (Ut[e] = !0, !0) : (ct[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function It(e, t, a) {
      return t !== null ? t.type === Ha : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function cr(e, t, a, i) {
      if (a !== null && a.type === Ha)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Tt(e, t, a, i) {
      if (t === null || typeof t > "u" || cr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case qt:
            return !t;
          case Or:
            return t === !1;
          case Oi:
            return isNaN(t);
          case Ra:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Lr(e) {
      return Rt.hasOwnProperty(e) ? Rt[e] : null;
    }
    function St(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ta || t === qt || t === Or, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Rt = {}, ql = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ql.forEach(function(e) {
      Rt[e] = new St(
        e,
        Ha,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Rt[t] = new St(
        t,
        kr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Rt[e] = new St(
        e,
        Ta,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Rt[e] = new St(
        e,
        Ta,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Rt[e] = new St(
        e,
        qt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Rt[e] = new St(
        e,
        qt,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Rt[e] = new St(
        e,
        Or,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Rt[e] = new St(
        e,
        Ra,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Rt[e] = new St(
        e,
        Oi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ul = /[\-\:]([a-z])/g, Kl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ul, Kl);
      Rt[t] = new St(
        t,
        kr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ul, Kl);
      Rt[t] = new St(
        t,
        kr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ul, Kl);
      Rt[t] = new St(
        t,
        kr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Rt[e] = new St(
        e,
        kr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var io = "xlinkHref";
    Rt[io] = new St(
      "xlinkHref",
      kr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Rt[e] = new St(
        e,
        kr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ys = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ol = !1;
    function Zl(e) {
      !ol && ys.test(e) && (ol = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function sl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Gr(a, t), i.sanitizeURL && Zl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Or) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Tt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Tt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === qt)
            return a;
          f = e.getAttribute(s);
        }
        return Tt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Jl(e, t, a, i) {
      {
        if (!vn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Gr(a, t), u === "" + a ? a : u;
      }
    }
    function ja(e, t, a, i) {
      var u = Lr(t);
      if (!It(t, u, i)) {
        if (Tt(t, a, u, i) && (a = null), i || u === null) {
          if (vn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Gr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === qt ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var x = u.type, T;
          x === qt || x === Or && a === !0 ? T = "" : (Gr(a, m), T = "" + a, u.sanitizeURL && Zl(T.toString())), y ? e.setAttributeNS(y, m, T) : e.setAttribute(m, T);
        }
      }
    }
    var ri = Symbol.for("react.element"), Mr = Symbol.for("react.portal"), xa = Symbol.for("react.fragment"), Li = Symbol.for("react.strict_mode"), cl = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), j = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), We = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), xe = Symbol.for("react.lazy"), Fe = Symbol.for("react.scope"), hn = Symbol.for("react.debug_trace_mode"), _t = Symbol.for("react.offscreen"), At = Symbol.for("react.legacy_hidden"), fr = Symbol.for("react.cache"), Mi = Symbol.for("react.tracing_marker"), lt = Symbol.iterator, $n = "@@iterator";
    function Nr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = lt && e[lt] || e[$n];
      return typeof t == "function" ? t : null;
    }
    var He = Object.assign, Va = 0, bp, hf, lo, wa, kp, Xr, Op;
    function Lp() {
    }
    Lp.__reactDisabledLog = !0;
    function zm() {
      {
        if (Va === 0) {
          bp = console.log, hf = console.info, lo = console.warn, wa = console.error, kp = console.group, Xr = console.groupCollapsed, Op = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Lp,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Va++;
      }
    }
    function gs() {
      {
        if (Va--, Va === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: He({}, e, {
              value: bp
            }),
            info: He({}, e, {
              value: hf
            }),
            warn: He({}, e, {
              value: lo
            }),
            error: He({}, e, {
              value: wa
            }),
            group: He({}, e, {
              value: kp
            }),
            groupCollapsed: He({}, e, {
              value: Xr
            }),
            groupEnd: He({}, e, {
              value: Op
            })
          });
        }
        Va < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var eu = k.ReactCurrentDispatcher, fl;
    function Da(e, t, a) {
      {
        if (fl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            fl = i && i[1] || "";
          }
        return `
` + fl + e;
      }
    }
    var mf = !1, Ss;
    {
      var yf = typeof WeakMap == "function" ? WeakMap : Map;
      Ss = new yf();
    }
    function Es(e, t) {
      if (!e || mf)
        return "";
      {
        var a = Ss.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      mf = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = eu.current, eu.current = null, zm();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (M) {
              i = M;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (M) {
              i = M;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            i = M;
          }
          e();
        }
      } catch (M) {
        if (M && i && typeof M.stack == "string") {
          for (var p = M.stack.split(`
`), v = i.stack.split(`
`), m = p.length - 1, y = v.length - 1; m >= 1 && y >= 0 && p[m] !== v[y]; )
            y--;
          for (; m >= 1 && y >= 0; m--, y--)
            if (p[m] !== v[y]) {
              if (m !== 1 || y !== 1)
                do
                  if (m--, y--, y < 0 || p[m] !== v[y]) {
                    var x = `
` + p[m].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && Ss.set(e, x), x;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        mf = !1, eu.current = s, gs(), Error.prepareStackTrace = u;
      }
      var T = e ? e.displayName || e.name : "", O = T ? Da(T) : "";
      return typeof e == "function" && Ss.set(e, O), O;
    }
    function gf(e, t, a) {
      return Es(e, !0);
    }
    function dl(e, t, a) {
      return Es(e, !1);
    }
    function Um(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function uo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Es(e, Um(e));
      if (typeof e == "string")
        return Da(e);
      switch (e) {
        case me:
          return Da("Suspense");
        case We:
          return Da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            return dl(e.render);
          case qe:
            return uo(e.type, t, a);
          case xe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return uo(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ft(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case oe:
          return Da(e.type);
        case Rn:
          return Da("Lazy");
        case $e:
          return Da("Suspense");
        case pt:
          return Da("SuspenseList");
        case ce:
        case nt:
        case Ue:
          return dl(e.type);
        case Be:
          return dl(e.type.render);
        case ue:
          return gf(e.type);
        default:
          return "";
      }
    }
    function Sf(e) {
      try {
        var t = "", a = e;
        do
          t += ft(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Mp(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Cs(e) {
      return e.displayName || "Context";
    }
    function dt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case xa:
          return "Fragment";
        case Mr:
          return "Portal";
        case cl:
          return "Profiler";
        case Li:
          return "StrictMode";
        case me:
          return "Suspense";
        case We:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var t = e;
            return Cs(t) + ".Consumer";
          case E:
            var a = e;
            return Cs(a._context) + ".Provider";
          case I:
            return Mp(e, e.render, "ForwardRef");
          case qe:
            var i = e.displayName || null;
            return i !== null ? i : dt(e.type) || "Memo";
          case xe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return dt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Np(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Ef(e) {
      return e.displayName || "Context";
    }
    function Le(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case dn:
          return "Cache";
        case fn:
          var i = a;
          return Ef(i) + ".Consumer";
        case Ke:
          var u = a;
          return Ef(u._context) + ".Provider";
        case Vt:
          return "DehydratedFragment";
        case Be:
          return Np(a, a.render, "ForwardRef");
        case st:
          return "Fragment";
        case oe:
          return a;
        case he:
          return "Portal";
        case ne:
          return "Root";
        case ze:
          return "Text";
        case Rn:
          return dt(a);
        case yt:
          return a === Li ? "StrictMode" : "Mode";
        case be:
          return "Offscreen";
        case gt:
          return "Profiler";
        case xn:
          return "Scope";
        case $e:
          return "Suspense";
        case pt:
          return "SuspenseList";
        case Dt:
          return "TracingMarker";
        case ue:
        case ce:
        case jn:
        case nt:
        case wt:
        case Ue:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var oo = k.ReactDebugCurrentFrame, Kt = null, qr = !1;
    function Kr() {
      {
        if (Kt === null)
          return null;
        var e = Kt._debugOwner;
        if (e !== null && typeof e < "u")
          return Le(e);
      }
      return null;
    }
    function so() {
      return Kt === null ? "" : Sf(Kt);
    }
    function rn() {
      oo.getCurrentStack = null, Kt = null, qr = !1;
    }
    function vt(e) {
      oo.getCurrentStack = e === null ? null : so, Kt = e, qr = !1;
    }
    function Am() {
      return Kt;
    }
    function _a(e) {
      qr = e;
    }
    function Yn(e) {
      return "" + e;
    }
    function Ni(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return br(e), e;
        default:
          return "";
      }
    }
    var zp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function tu(e, t) {
      zp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Cf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Up(e) {
      return e._valueTracker;
    }
    function co(e) {
      e._valueTracker = null;
    }
    function fo(e) {
      var t = "";
      return e && (Cf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function nu(e) {
      var t = Cf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      br(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            br(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            br(p), i = "" + p;
          },
          stopTracking: function() {
            co(e), delete e[t];
          }
        };
        return f;
      }
    }
    function pl(e) {
      Up(e) || (e._valueTracker = nu(e));
    }
    function Ap(e) {
      if (!e)
        return !1;
      var t = Up(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = fo(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ts(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Rs = !1, po = !1, xs = !1, Tf = !1;
    function ai(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function vo(e, t) {
      var a = e, i = t.checked, u = He({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ho(e, t) {
      tu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !po && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Kr() || "A component", t.type), po = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Rs && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Kr() || "A component", t.type), Rs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ni(t.value != null ? t.value : i),
        controlled: ai(t)
      };
    }
    function Rf(e, t) {
      var a = e, i = t.checked;
      i != null && ja(a, "checked", i, !1);
    }
    function ru(e, t) {
      var a = e;
      {
        var i = ai(t);
        !a._wrapperState.controlled && i && !Tf && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Tf = !0), a._wrapperState.controlled && !i && !xs && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), xs = !0);
      }
      Rf(e, t);
      var u = Ni(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Yn(u)) : a.value !== Yn(u) && (a.value = Yn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? zi(a, t.type, u) : t.hasOwnProperty("defaultValue") && zi(a, t.type, Ni(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function mo(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Yn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Fp(e, t) {
      var a = e;
      ru(a, t), zr(a, t);
    }
    function zr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Gr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = yh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ap(f), ru(f, p);
          }
        }
      }
    }
    function zi(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ts(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Yn(e._wrapperState.initialValue) : e.defaultValue !== Yn(a) && (e.defaultValue = Yn(a)));
    }
    var ws = !1, au = !1, Hp = !1;
    function Ds(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? P.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || au || (au = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Hp || (Hp = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ws && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ws = !0);
    }
    function xf(e, t) {
      t.value != null && e.setAttribute("value", Yn(Ni(t.value)));
    }
    var yo = Array.isArray;
    function mn(e) {
      return yo(e);
    }
    var _s;
    _s = !1;
    function jp() {
      var e = Kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Vp = ["value", "defaultValue"];
    function Fm(e) {
      {
        tu("select", e);
        for (var t = 0; t < Vp.length; t++) {
          var a = Vp[t];
          if (e[a] != null) {
            var i = mn(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, jp()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, jp());
          }
        }
      }
    }
    function Ui(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var y = Yn(Ni(a)), x = null, T = 0; T < u.length; T++) {
          if (u[T].value === y) {
            u[T].selected = !0, i && (u[T].defaultSelected = !0);
            return;
          }
          x === null && !u[T].disabled && (x = u[T]);
        }
        x !== null && (x.selected = !0);
      }
    }
    function wf(e, t) {
      return He({}, t, {
        value: void 0
      });
    }
    function Bp(e, t) {
      var a = e;
      Fm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !_s && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), _s = !0);
    }
    function Hm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ui(a, !!t.multiple, i, !1) : t.defaultValue != null && Ui(a, !!t.multiple, t.defaultValue, !0);
    }
    function jm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Ui(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ui(a, !!t.multiple, t.defaultValue, !0) : Ui(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Vm(e, t) {
      var a = e, i = t.value;
      i != null && Ui(a, !!t.multiple, i, !1);
    }
    var Df = !1;
    function _f(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = He({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Yn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Pp(e, t) {
      var a = e;
      tu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Df && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Kr() || "A component"), Df = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (mn(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ni(i)
      };
    }
    function $p(e, t) {
      var a = e, i = Ni(t.value), u = Ni(t.defaultValue);
      if (i != null) {
        var s = Yn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Yn(u));
    }
    function Yp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function bf(e, t) {
      $p(e, t);
    }
    var ii = "http://www.w3.org/1999/xhtml", Bm = "http://www.w3.org/1998/Math/MathML", kf = "http://www.w3.org/2000/svg";
    function bs(e) {
      switch (e) {
        case "svg":
          return kf;
        case "math":
          return Bm;
        default:
          return ii;
      }
    }
    function Of(e, t) {
      return e == null || e === ii ? bs(t) : e === kf && t === "foreignObject" ? ii : e;
    }
    var Pm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, ks, Ip = Pm(function(e, t) {
      if (e.namespaceURI === kf && !("innerHTML" in e)) {
        ks = ks || document.createElement("div"), ks.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ks.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), dr = 1, li = 3, Zt = 8, ba = 9, vl = 11, Os = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === li) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Qp = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, iu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Wp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Gp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(iu).forEach(function(e) {
      Gp.forEach(function(t) {
        iu[Wp(t, e)] = iu[e];
      });
    });
    function Ls(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(iu.hasOwnProperty(e) && iu[e]) ? t + "px" : (Fa(t, e), ("" + t).trim());
    }
    var lu = /([A-Z])/g, $m = /^ms-/;
    function Ym(e) {
      return e.replace(lu, "-$1").toLowerCase().replace($m, "-ms-");
    }
    var Xp = function() {
    };
    {
      var qp = /^(?:webkit|moz|o)[A-Z]/, Kp = /^-ms-/, go = /-(.)/g, uu = /;\s*$/, ou = {}, su = {}, Zp = !1, Lf = !1, Mf = function(e) {
        return e.replace(go, function(t, a) {
          return a.toUpperCase();
        });
      }, Nf = function(e) {
        ou.hasOwnProperty(e) && ou[e] || (ou[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Mf(e.replace(Kp, "ms-"))
        ));
      }, Jp = function(e) {
        ou.hasOwnProperty(e) && ou[e] || (ou[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ev = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(uu, "")));
      }, tv = function(e, t) {
        Zp || (Zp = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Im = function(e, t) {
        Lf || (Lf = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Xp = function(e, t) {
        e.indexOf("-") > -1 ? Nf(e) : qp.test(e) ? Jp(e) : uu.test(t) && ev(e, t), typeof t == "number" && (isNaN(t) ? tv(e, t) : isFinite(t) || Im(e, t));
      };
    }
    var Qm = Xp;
    function Wm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Ym(i)) + ":", t += Ls(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function nv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Qm(i, t[i]);
          var s = Ls(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Gm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Zr(e) {
      var t = {};
      for (var a in e)
        for (var i = Qp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function So(e, t) {
      {
        if (!t)
          return;
        var a = Zr(e), i = Zr(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Gm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var rv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, av = He({
      menuitem: !0
    }, rv), iv = "__html";
    function Ms(e, t) {
      if (t) {
        if (av[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(iv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ui(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Ns = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, lv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ka = {}, zf = new RegExp("^(aria)-[" + ge + "]*$"), Eo = new RegExp("^(aria)[A-Z][" + ge + "]*$");
    function Uf(e, t) {
      {
        if (Bn.call(ka, t) && ka[t])
          return !0;
        if (Eo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = lv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ka[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ka[t] = !0, !0;
        }
        if (zf.test(t)) {
          var u = t.toLowerCase(), s = lv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return ka[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ka[t] = !0, !0;
        }
      }
      return !0;
    }
    function uv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Uf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function zs(e, t) {
      ui(e, t) || uv(e, t);
    }
    var hl = !1;
    function Af(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !hl && (hl = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ff = function() {
    };
    {
      var yn = {}, Hf = /^on./, ov = /^on[^A-Z]/, sv = new RegExp("^(aria)-[" + ge + "]*$"), cv = new RegExp("^(aria)[A-Z][" + ge + "]*$");
      Ff = function(e, t, a, i) {
        if (Bn.call(yn, t) && yn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), yn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), yn[t] = !0, !0;
          if (Hf.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), yn[t] = !0, !0;
        } else if (Hf.test(t))
          return ov.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), yn[t] = !0, !0;
        if (sv.test(t) || cv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), yn[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), yn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), yn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), yn[t] = !0, !0;
        var v = Lr(t), m = v !== null && v.type === Ha;
        if (Ns.hasOwnProperty(u)) {
          var y = Ns[u];
          if (y !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, y), yn[t] = !0, !0;
        } else if (!m && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), yn[t] = !0, !0;
        return typeof a == "boolean" && cr(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), yn[t] = !0, !0) : m ? !0 : cr(t, a, v, !1) ? (yn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === qt && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), yn[t] = !0), !0);
      };
    }
    var fv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Ff(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function dv(e, t, a) {
      ui(e, t) || fv(e, t, a);
    }
    var oi = 1, Co = 2, ml = 4, Xm = oi | Co | ml, To = null;
    function Ro(e) {
      To !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), To = e;
    }
    function qm() {
      To === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), To = null;
    }
    function pv(e) {
      return e === To;
    }
    function Us(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === li ? t.parentNode : t;
    }
    var Et = null, Ai = null, si = null;
    function cu(e) {
      var t = $u(e);
      if (t) {
        if (typeof Et != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = yh(a);
          Et(t.stateNode, t.type, i);
        }
      }
    }
    function vv(e) {
      Et = e;
    }
    function As(e) {
      Ai ? si ? si.push(e) : si = [e] : Ai = e;
    }
    function xo() {
      return Ai !== null || si !== null;
    }
    function wo() {
      if (Ai) {
        var e = Ai, t = si;
        if (Ai = null, si = null, cu(e), t)
          for (var a = 0; a < t.length; a++)
            cu(t[a]);
      }
    }
    var yl = function(e, t) {
      return e(t);
    }, jf = function() {
    }, Vf = !1;
    function Km() {
      var e = xo();
      e && (jf(), wo());
    }
    function Bf(e, t, a) {
      if (Vf)
        return e(t, a);
      Vf = !0;
      try {
        return yl(e, t, a);
      } finally {
        Vf = !1, Km();
      }
    }
    function Fs(e, t, a) {
      yl = e, jf = a;
    }
    function Hs(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Pf(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Hs(t));
        default:
          return !1;
      }
    }
    function gl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = yh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Pf(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Do = !1;
    if (pn)
      try {
        var Sl = {};
        Object.defineProperty(Sl, "passive", {
          get: function() {
            Do = !0;
          }
        }), window.addEventListener("test", Sl, Sl), window.removeEventListener("test", Sl, Sl);
      } catch {
        Do = !1;
      }
    function hv(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var $f = hv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Yf = document.createElement("react");
      $f = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), x = !1, T = !0, O = window.event, M = Object.getOwnPropertyDescriptor(window, "event");
        function N() {
          Yf.removeEventListener(z, Ee, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = O);
        }
        var X = Array.prototype.slice.call(arguments, 3);
        function Ee() {
          x = !0, N(), a.apply(i, X), T = !1;
        }
        var ve, Xe = !1, Ie = !1;
        function D(_) {
          if (ve = _.error, Xe = !0, ve === null && _.colno === 0 && _.lineno === 0 && (Ie = !0), _.defaultPrevented && ve != null && typeof ve == "object")
            try {
              ve._suppressLogging = !0;
            } catch {
            }
        }
        var z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), Yf.addEventListener(z, Ee, !1), y.initEvent(z, !1, !1), Yf.dispatchEvent(y), M && Object.defineProperty(window, "event", M), x && T && (Xe ? Ie && (ve = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ve = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ve)), window.removeEventListener("error", D), !x)
          return N(), hv.apply(this, arguments);
      };
    }
    var Zm = $f, Fi = !1, Oa = null, _o = !1, Hi = null, Ba = {
      onError: function(e) {
        Fi = !0, Oa = e;
      }
    };
    function El(e, t, a, i, u, s, f, p, v) {
      Fi = !1, Oa = null, Zm.apply(Ba, arguments);
    }
    function ci(e, t, a, i, u, s, f, p, v) {
      if (El.apply(this, arguments), Fi) {
        var m = Qf();
        _o || (_o = !0, Hi = m);
      }
    }
    function If() {
      if (_o) {
        var e = Hi;
        throw _o = !1, Hi = null, e;
      }
    }
    function Jm() {
      return Fi;
    }
    function Qf() {
      if (Fi) {
        var e = Oa;
        return Fi = !1, Oa = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Jr(e) {
      return e._reactInternals;
    }
    function bo(e) {
      return e._reactInternals !== void 0;
    }
    function fu(e, t) {
      e._reactInternals = t;
    }
    var Se = (
      /*                      */
      0
    ), ji = (
      /*                */
      1
    ), bt = (
      /*                    */
      2
    ), Ne = (
      /*                       */
      4
    ), at = (
      /*                */
      16
    ), ut = (
      /*                 */
      32
    ), Pa = (
      /*                     */
      64
    ), De = (
      /*                   */
      128
    ), Bt = (
      /*            */
      256
    ), pr = (
      /*                          */
      512
    ), ea = (
      /*                     */
      1024
    ), Mt = (
      /*                      */
      2048
    ), ta = (
      /*                    */
      4096
    ), Vi = (
      /*                   */
      8192
    ), ko = (
      /*             */
      16384
    ), js = Mt | Ne | Pa | pr | ea | ko, mv = (
      /*               */
      32767
    ), Ur = (
      /*                   */
      32768
    ), gn = (
      /*                */
      65536
    ), Oo = (
      /* */
      131072
    ), Wf = (
      /*                       */
      1048576
    ), Gf = (
      /*                    */
      2097152
    ), vr = (
      /*                 */
      4194304
    ), Bi = (
      /*                */
      8388608
    ), hr = (
      /*               */
      16777216
    ), Cl = (
      /*              */
      33554432
    ), du = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ne | ea | 0
    ), mr = bt | Ne | at | ut | pr | ta | Vi, In = Ne | Pa | pr | Vi, na = Mt | at, bn = vr | Bi | Gf, fi = k.ReactCurrentOwner;
    function Ar(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (bt | ta)) !== Se && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ne ? a : null;
    }
    function Xf(e) {
      if (e.tag === $e) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Vs(e) {
      return e.tag === ne ? e.stateNode.containerInfo : null;
    }
    function qf(e) {
      return Ar(e) === e;
    }
    function Fr(e) {
      {
        var t = fi.current;
        if (t !== null && t.tag === ue) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Le(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Jr(e);
      return u ? Ar(u) === u : !1;
    }
    function yr(e) {
      if (Ar(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function kt(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ar(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return yr(s), e;
            if (v === u)
              return yr(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var m = !1, y = s.child; y; ) {
            if (y === i) {
              m = !0, i = s, u = f;
              break;
            }
            if (y === u) {
              m = !0, u = s, i = f;
              break;
            }
            y = y.sibling;
          }
          if (!m) {
            for (y = f.child; y; ) {
              if (y === i) {
                m = !0, i = f, u = s;
                break;
              }
              if (y === u) {
                m = !0, u = f, i = s;
                break;
              }
              y = y.sibling;
            }
            if (!m)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ne)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ra(e) {
      var t = kt(e);
      return t !== null ? Kf(t) : null;
    }
    function Kf(e) {
      if (e.tag === oe || e.tag === ze)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Kf(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function yv(e) {
      var t = kt(e);
      return t !== null ? Bs(t) : null;
    }
    function Bs(e) {
      if (e.tag === oe || e.tag === ze)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== he) {
          var a = Bs(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ps = K.unstable_scheduleCallback, gv = K.unstable_cancelCallback, $s = K.unstable_shouldYield, Sv = K.unstable_requestPaint, Ft = K.unstable_now, Zf = K.unstable_getCurrentPriorityLevel, Ys = K.unstable_ImmediatePriority, Tl = K.unstable_UserBlockingPriority, $a = K.unstable_NormalPriority, Ev = K.unstable_LowPriority, Is = K.unstable_IdlePriority, pu = K.unstable_yieldValue, Cv = K.unstable_setDisableYieldValue, di = null, an = null, Q = null, aa = !1, Hr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Jf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ua && (e = He({}, e, {
          getLaneLabelMap: pi,
          injectProfilingHooks: Tv
        })), di = t.inject(e), an = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function ed(e, t) {
      if (an && typeof an.onScheduleFiberRoot == "function")
        try {
          an.onScheduleFiberRoot(di, e, t);
        } catch (a) {
          aa || (aa = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function vu(e, t) {
      if (an && typeof an.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & De) === De;
          if (nn) {
            var i;
            switch (t) {
              case Wt:
                i = Ys;
                break;
              case hi:
                i = Tl;
                break;
              case Ya:
                i = $a;
                break;
              case Du:
                i = Is;
                break;
              default:
                i = $a;
                break;
            }
            an.onCommitFiberRoot(di, e, i, a);
          }
        } catch (u) {
          aa || (aa = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function ia(e) {
      if (an && typeof an.onPostCommitFiberRoot == "function")
        try {
          an.onPostCommitFiberRoot(di, e);
        } catch (t) {
          aa || (aa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Rl(e) {
      if (an && typeof an.onCommitFiberUnmount == "function")
        try {
          an.onCommitFiberUnmount(di, e);
        } catch (t) {
          aa || (aa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Jt(e) {
      if (typeof pu == "function" && (Cv(e), it(e)), an && typeof an.setStrictMode == "function")
        try {
          an.setStrictMode(di, e);
        } catch (t) {
          aa || (aa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Tv(e) {
      Q = e;
    }
    function pi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Uo; a++) {
          var i = ty(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Pi(e) {
      Q !== null && typeof Q.markCommitStarted == "function" && Q.markCommitStarted(e);
    }
    function Qs() {
      Q !== null && typeof Q.markCommitStopped == "function" && Q.markCommitStopped();
    }
    function hu(e) {
      Q !== null && typeof Q.markComponentRenderStarted == "function" && Q.markComponentRenderStarted(e);
    }
    function gr() {
      Q !== null && typeof Q.markComponentRenderStopped == "function" && Q.markComponentRenderStopped();
    }
    function $i(e) {
      Q !== null && typeof Q.markComponentPassiveEffectMountStarted == "function" && Q.markComponentPassiveEffectMountStarted(e);
    }
    function Ws() {
      Q !== null && typeof Q.markComponentPassiveEffectMountStopped == "function" && Q.markComponentPassiveEffectMountStopped();
    }
    function Rv(e) {
      Q !== null && typeof Q.markComponentPassiveEffectUnmountStarted == "function" && Q.markComponentPassiveEffectUnmountStarted(e);
    }
    function Gs() {
      Q !== null && typeof Q.markComponentPassiveEffectUnmountStopped == "function" && Q.markComponentPassiveEffectUnmountStopped();
    }
    function xv(e) {
      Q !== null && typeof Q.markComponentLayoutEffectMountStarted == "function" && Q.markComponentLayoutEffectMountStarted(e);
    }
    function Lo() {
      Q !== null && typeof Q.markComponentLayoutEffectMountStopped == "function" && Q.markComponentLayoutEffectMountStopped();
    }
    function La(e) {
      Q !== null && typeof Q.markComponentLayoutEffectUnmountStarted == "function" && Q.markComponentLayoutEffectUnmountStarted(e);
    }
    function mu() {
      Q !== null && typeof Q.markComponentLayoutEffectUnmountStopped == "function" && Q.markComponentLayoutEffectUnmountStopped();
    }
    function Mo(e, t, a) {
      Q !== null && typeof Q.markComponentErrored == "function" && Q.markComponentErrored(e, t, a);
    }
    function xl(e, t, a) {
      Q !== null && typeof Q.markComponentSuspended == "function" && Q.markComponentSuspended(e, t, a);
    }
    function td(e) {
      Q !== null && typeof Q.markLayoutEffectsStarted == "function" && Q.markLayoutEffectsStarted(e);
    }
    function yu() {
      Q !== null && typeof Q.markLayoutEffectsStopped == "function" && Q.markLayoutEffectsStopped();
    }
    function wv(e) {
      Q !== null && typeof Q.markPassiveEffectsStarted == "function" && Q.markPassiveEffectsStarted(e);
    }
    function nd() {
      Q !== null && typeof Q.markPassiveEffectsStopped == "function" && Q.markPassiveEffectsStopped();
    }
    function Nt(e) {
      Q !== null && typeof Q.markRenderStarted == "function" && Q.markRenderStarted(e);
    }
    function Xs() {
      Q !== null && typeof Q.markRenderYielded == "function" && Q.markRenderYielded();
    }
    function qs() {
      Q !== null && typeof Q.markRenderStopped == "function" && Q.markRenderStopped();
    }
    function rd(e) {
      Q !== null && typeof Q.markRenderScheduled == "function" && Q.markRenderScheduled(e);
    }
    function Ks(e, t) {
      Q !== null && typeof Q.markForceUpdateScheduled == "function" && Q.markForceUpdateScheduled(e, t);
    }
    function No(e, t) {
      Q !== null && typeof Q.markStateUpdateScheduled == "function" && Q.markStateUpdateScheduled(e, t);
    }
    var fe = (
      /*                         */
      0
    ), pe = (
      /*                 */
      1
    ), _e = (
      /*                    */
      2
    ), je = (
      /*               */
      8
    ), jr = (
      /*              */
      16
    ), gu = Math.clz32 ? Math.clz32 : Qn, zo = Math.log, ey = Math.LN2;
    function Qn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (zo(t) / ey | 0) | 0;
    }
    var Uo = 31, A = (
      /*                        */
      0
    ), en = (
      /*                          */
      0
    ), ye = (
      /*                        */
      1
    ), kn = (
      /*    */
      2
    ), Vr = (
      /*             */
      4
    ), vi = (
      /*            */
      8
    ), la = (
      /*                     */
      16
    ), Su = (
      /*                */
      32
    ), wl = (
      /*                       */
      4194240
    ), Eu = (
      /*                        */
      64
    ), Zs = (
      /*                        */
      128
    ), Js = (
      /*                        */
      256
    ), ec = (
      /*                        */
      512
    ), tc = (
      /*                        */
      1024
    ), nc = (
      /*                        */
      2048
    ), Dl = (
      /*                        */
      4096
    ), rc = (
      /*                        */
      8192
    ), Cu = (
      /*                        */
      16384
    ), Tu = (
      /*                       */
      32768
    ), ac = (
      /*                       */
      65536
    ), Ao = (
      /*                       */
      131072
    ), ic = (
      /*                       */
      262144
    ), lc = (
      /*                       */
      524288
    ), uc = (
      /*                       */
      1048576
    ), oc = (
      /*                       */
      2097152
    ), Ru = (
      /*                            */
      130023424
    ), _l = (
      /*                             */
      4194304
    ), sc = (
      /*                             */
      8388608
    ), cc = (
      /*                             */
      16777216
    ), ad = (
      /*                             */
      33554432
    ), fc = (
      /*                             */
      67108864
    ), Dv = _l, Fo = (
      /*          */
      134217728
    ), id = (
      /*                          */
      268435455
    ), xu = (
      /*               */
      268435456
    ), Yi = (
      /*                        */
      536870912
    ), Wn = (
      /*                   */
      1073741824
    );
    function ty(e) {
      {
        if (e & ye)
          return "Sync";
        if (e & kn)
          return "InputContinuousHydration";
        if (e & Vr)
          return "InputContinuous";
        if (e & vi)
          return "DefaultHydration";
        if (e & la)
          return "Default";
        if (e & Su)
          return "TransitionHydration";
        if (e & wl)
          return "Transition";
        if (e & Ru)
          return "Retry";
        if (e & Fo)
          return "SelectiveHydration";
        if (e & xu)
          return "IdleHydration";
        if (e & Yi)
          return "Idle";
        if (e & Wn)
          return "Offscreen";
      }
    }
    var xt = -1, dc = Eu, Sr = _l;
    function bl(e) {
      switch (Qt(e)) {
        case ye:
          return ye;
        case kn:
          return kn;
        case Vr:
          return Vr;
        case vi:
          return vi;
        case la:
          return la;
        case Su:
          return Su;
        case Eu:
        case Zs:
        case Js:
        case ec:
        case tc:
        case nc:
        case Dl:
        case rc:
        case Cu:
        case Tu:
        case ac:
        case Ao:
        case ic:
        case lc:
        case uc:
        case oc:
          return e & wl;
        case _l:
        case sc:
        case cc:
        case ad:
        case fc:
          return e & Ru;
        case Fo:
          return Fo;
        case xu:
          return xu;
        case Yi:
          return Yi;
        case Wn:
          return Wn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function kl(e, t) {
      var a = e.pendingLanes;
      if (a === A)
        return A;
      var i = A, u = e.suspendedLanes, s = e.pingedLanes, f = a & id;
      if (f !== A) {
        var p = f & ~u;
        if (p !== A)
          i = bl(p);
        else {
          var v = f & s;
          v !== A && (i = bl(v));
        }
      } else {
        var m = a & ~u;
        m !== A ? i = bl(m) : s !== A && (i = bl(s));
      }
      if (i === A)
        return A;
      if (t !== A && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === A) {
        var y = Qt(i), x = Qt(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === la && (x & wl) !== A
        )
          return t;
      }
      (i & Vr) !== A && (i |= a & la);
      var T = e.entangledLanes;
      if (T !== A)
        for (var O = e.entanglements, M = i & T; M > 0; ) {
          var N = Qi(M), X = 1 << N;
          i |= O[N], M &= ~X;
        }
      return i;
    }
    function _v(e, t) {
      for (var a = e.eventTimes, i = xt; t > 0; ) {
        var u = Qi(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function bv(e, t) {
      switch (e) {
        case ye:
        case kn:
        case Vr:
          return t + 250;
        case vi:
        case la:
        case Su:
        case Eu:
        case Zs:
        case Js:
        case ec:
        case tc:
        case nc:
        case Dl:
        case rc:
        case Cu:
        case Tu:
        case ac:
        case Ao:
        case ic:
        case lc:
        case uc:
        case oc:
          return t + 5e3;
        case _l:
        case sc:
        case cc:
        case ad:
        case fc:
          return xt;
        case Fo:
        case xu:
        case Yi:
        case Wn:
          return xt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), xt;
      }
    }
    function kv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Qi(f), v = 1 << p, m = s[p];
        m === xt ? ((v & i) === A || (v & u) !== A) && (s[p] = bv(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ld(e) {
      return bl(e.pendingLanes);
    }
    function Ii(e) {
      var t = e.pendingLanes & ~Wn;
      return t !== A ? t : t & Wn ? Wn : A;
    }
    function ud(e) {
      return (e & ye) !== A;
    }
    function Ho(e) {
      return (e & id) !== A;
    }
    function Ov(e) {
      return (e & Ru) === e;
    }
    function Lv(e) {
      var t = ye | Vr | la;
      return (e & t) === A;
    }
    function Mv(e) {
      return (e & wl) === e;
    }
    function jo(e, t) {
      var a = kn | Vr | vi | la;
      return (t & a) !== A;
    }
    function Nv(e, t) {
      return (t & e.expiredLanes) !== A;
    }
    function od(e) {
      return (e & wl) !== A;
    }
    function zv() {
      var e = dc;
      return dc <<= 1, (dc & wl) === A && (dc = Eu), e;
    }
    function Er() {
      var e = Sr;
      return Sr <<= 1, (Sr & Ru) === A && (Sr = _l), e;
    }
    function Qt(e) {
      return e & -e;
    }
    function wu(e) {
      return Qt(e);
    }
    function Qi(e) {
      return 31 - gu(e);
    }
    function pc(e) {
      return Qi(e);
    }
    function Cr(e, t) {
      return (e & t) !== A;
    }
    function Ol(e, t) {
      return (e & t) === t;
    }
    function Me(e, t) {
      return e | t;
    }
    function Vo(e, t) {
      return e & ~t;
    }
    function vc(e, t) {
      return e & t;
    }
    function ny(e) {
      return e;
    }
    function Uv(e, t) {
      return e !== en && e < t ? e : t;
    }
    function Bo(e) {
      for (var t = [], a = 0; a < Uo; a++)
        t.push(e);
      return t;
    }
    function Ll(e, t, a) {
      e.pendingLanes |= t, t !== Yi && (e.suspendedLanes = A, e.pingedLanes = A);
      var i = e.eventTimes, u = pc(t);
      i[u] = a;
    }
    function Av(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Qi(i), s = 1 << u;
        a[u] = xt, i &= ~s;
      }
    }
    function hc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function mc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = A, e.pingedLanes = A, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Qi(f), v = 1 << p;
        i[p] = A, u[p] = xt, s[p] = xt, f &= ~v;
      }
    }
    function sd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Qi(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Fv(e, t) {
      var a = Qt(t), i;
      switch (a) {
        case Vr:
          i = kn;
          break;
        case la:
          i = vi;
          break;
        case Eu:
        case Zs:
        case Js:
        case ec:
        case tc:
        case nc:
        case Dl:
        case rc:
        case Cu:
        case Tu:
        case ac:
        case Ao:
        case ic:
        case lc:
        case uc:
        case oc:
        case _l:
        case sc:
        case cc:
        case ad:
        case fc:
          i = Su;
          break;
        case Yi:
          i = xu;
          break;
        default:
          i = en;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== en ? en : i;
    }
    function yc(e, t, a) {
      if (Hr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = pc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function cd(e, t) {
      if (Hr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = pc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Po(e, t) {
      return null;
    }
    var Wt = ye, hi = Vr, Ya = la, Du = Yi, _u = en;
    function ua() {
      return _u;
    }
    function Pt(e) {
      _u = e;
    }
    function Gn(e, t) {
      var a = _u;
      try {
        return _u = e, t();
      } finally {
        _u = a;
      }
    }
    function ry(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ay(e, t) {
      return e > t ? e : t;
    }
    function bu(e, t) {
      return e !== 0 && e < t;
    }
    function On(e) {
      var t = Qt(e);
      return bu(Wt, t) ? bu(hi, t) ? Ho(t) ? Ya : Du : hi : Wt;
    }
    function gc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var re;
    function ku(e) {
      re = e;
    }
    function fd(e) {
      re(e);
    }
    var Sc;
    function iy(e) {
      Sc = e;
    }
    var Ou;
    function Ec(e) {
      Ou = e;
    }
    var Cc;
    function Hv(e) {
      Cc = e;
    }
    var dd;
    function jv(e) {
      dd = e;
    }
    var $o = !1, Lu = [], zt = null, Sn = null, Zn = null, Mu = /* @__PURE__ */ new Map(), Nu = /* @__PURE__ */ new Map(), En = [], Vv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ia(e) {
      return Vv.indexOf(e) > -1;
    }
    function ly(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function pd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          zt = null;
          break;
        case "dragenter":
        case "dragleave":
          Sn = null;
          break;
        case "mouseover":
        case "mouseout":
          Zn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Mu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Nu.delete(i);
          break;
        }
      }
    }
    function zu(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ly(t, a, i, u, s);
        if (t !== null) {
          var p = $u(t);
          p !== null && Sc(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Bv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return zt = zu(zt, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Sn = zu(Sn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Zn = zu(Zn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return Mu.set(m, zu(Mu.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var y = u, x = y.pointerId;
          return Nu.set(x, zu(Nu.get(x) || null, e, t, a, i, y)), !0;
        }
      }
      return !1;
    }
    function vd(e) {
      var t = ts(e.target);
      if (t !== null) {
        var a = Ar(t);
        if (a !== null) {
          var i = a.tag;
          if (i === $e) {
            var u = Xf(a);
            if (u !== null) {
              e.blockedOn = u, dd(e.priority, function() {
                Ou(a);
              });
              return;
            }
          } else if (i === ne) {
            var s = a.stateNode;
            if (gc(s)) {
              e.blockedOn = Vs(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function uy(e) {
      for (var t = Cc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < En.length && bu(t, En[i].priority); i++)
        ;
      En.splice(i, 0, a), i === 0 && vd(a);
    }
    function Ml(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Xn(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Ro(s), u.target.dispatchEvent(s), qm();
        } else {
          var f = $u(i);
          return f !== null && Sc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Tc(e, t, a) {
      Ml(e) && a.delete(t);
    }
    function oa() {
      $o = !1, zt !== null && Ml(zt) && (zt = null), Sn !== null && Ml(Sn) && (Sn = null), Zn !== null && Ml(Zn) && (Zn = null), Mu.forEach(Tc), Nu.forEach(Tc);
    }
    function Ye(e, t) {
      e.blockedOn === t && (e.blockedOn = null, $o || ($o = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, oa)));
    }
    function $t(e) {
      if (Lu.length > 0) {
        Ye(Lu[0], e);
        for (var t = 1; t < Lu.length; t++) {
          var a = Lu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      zt !== null && Ye(zt, e), Sn !== null && Ye(Sn, e), Zn !== null && Ye(Zn, e);
      var i = function(p) {
        return Ye(p, e);
      };
      Mu.forEach(i), Nu.forEach(i);
      for (var u = 0; u < En.length; u++) {
        var s = En[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; En.length > 0; ) {
        var f = En[0];
        if (f.blockedOn !== null)
          break;
        vd(f), f.blockedOn === null && En.shift();
      }
    }
    var Ot = k.ReactCurrentBatchConfig, ln = !0;
    function Tr(e) {
      ln = !!e;
    }
    function Uu() {
      return ln;
    }
    function un(e, t, a) {
      var i = Rc(t), u;
      switch (i) {
        case Wt:
          u = Yo;
          break;
        case hi:
          u = Nl;
          break;
        case Ya:
        default:
          u = Au;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Yo(e, t, a, i) {
      var u = ua(), s = Ot.transition;
      Ot.transition = null;
      try {
        Pt(Wt), Au(e, t, a, i);
      } finally {
        Pt(u), Ot.transition = s;
      }
    }
    function Nl(e, t, a, i) {
      var u = ua(), s = Ot.transition;
      Ot.transition = null;
      try {
        Pt(hi), Au(e, t, a, i);
      } finally {
        Pt(u), Ot.transition = s;
      }
    }
    function Au(e, t, a, i) {
      ln && hd(e, t, a, i);
    }
    function hd(e, t, a, i) {
      var u = Xn(e, t, a, i);
      if (u === null) {
        xy(e, t, i, Wi, a), pd(e, i);
        return;
      }
      if (Bv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (pd(e, i), t & ml && Ia(e)) {
        for (; u !== null; ) {
          var s = $u(u);
          s !== null && fd(s);
          var f = Xn(e, t, a, i);
          if (f === null && xy(e, t, i, Wi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      xy(e, t, i, null, a);
    }
    var Wi = null;
    function Xn(e, t, a, i) {
      Wi = null;
      var u = Us(i), s = ts(u);
      if (s !== null) {
        var f = Ar(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === $e) {
            var v = Xf(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ne) {
            var m = f.stateNode;
            if (gc(m))
              return Vs(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Wi = s, null;
    }
    function Rc(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Wt;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return hi;
        case "message": {
          var t = Zf();
          switch (t) {
            case Ys:
              return Wt;
            case Tl:
              return hi;
            case $a:
            case Ev:
              return Ya;
            case Is:
              return Du;
            default:
              return Ya;
          }
        }
        default:
          return Ya;
      }
    }
    function Fu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function mi(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function xc(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function md(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var sa = null, Hu = null, ca = null;
    function wc(e) {
      return sa = e, Hu = Qo(), !0;
    }
    function Io() {
      sa = null, Hu = null, ca = null;
    }
    function Dc() {
      if (ca)
        return ca;
      var e, t = Hu, a = t.length, i, u = Qo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return ca = u.slice(e, p), ca;
    }
    function Qo() {
      return "value" in sa ? sa.value : sa.textContent;
    }
    function zl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Cn() {
      return !0;
    }
    function yi() {
      return !1;
    }
    function Ht(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = Cn : this.isDefaultPrevented = yi, this.isPropagationStopped = yi, this;
      }
      return He(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Cn);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Cn);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Cn
      }), t;
    }
    var on = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, _c = Ht(on), Ul = He({}, on, {
      view: 0,
      detail: 0
    }), yd = Ht(Ul), gd, Qa, ju;
    function Sd(e) {
      e !== ju && (ju && e.type === "mousemove" ? (gd = e.screenX - ju.screenX, Qa = e.screenY - ju.screenY) : (gd = 0, Qa = 0), ju = e);
    }
    var Wa = He({}, Ul, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ed,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Sd(e), gd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Qa;
      }
    }), bc = Ht(Wa), Al = He({}, Wa, {
      dataTransfer: 0
    }), Pv = Ht(Al), $v = He({}, Ul, {
      relatedTarget: 0
    }), Wo = Ht($v), kc = He({}, on, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), oy = Ht(kc), sy = He({}, on, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Yv = Ht(sy), Iv = He({}, on, {
      data: 0
    }), Gi = Ht(Iv), cy = Gi, Vu = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Qv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Yt(e) {
      if (e.key) {
        var t = Vu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = zl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Qv[e.keyCode] || "Unidentified" : "";
    }
    var fy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Wv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = fy[e];
      return i ? !!a[i] : !1;
    }
    function Ed(e) {
      return Wv;
    }
    var dy = He({}, Ul, {
      key: Yt,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ed,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? zl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? zl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Gv = Ht(dy), Xv = He({}, Wa, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), qv = Ht(Xv), fa = He({}, Ul, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ed
    }), Cd = Ht(fa), py = He({}, on, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Xi = Ht(py), Oc = He({}, Wa, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Fl = Ht(Oc), Lc = [9, 13, 27, 32], Mc = 229, Go = pn && "CompositionEvent" in window, Xo = null;
    pn && "documentMode" in document && (Xo = document.documentMode);
    var Td = pn && "TextEvent" in window && !Xo, Kv = pn && (!Go || Xo && Xo > 8 && Xo <= 11), Rd = 32, xd = String.fromCharCode(Rd);
    function Nc() {
      sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), sr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), sr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), sr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var qo = !1;
    function Zv(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function wd(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function vy(e, t) {
      return e === "keydown" && t.keyCode === Mc;
    }
    function Dd(e, t) {
      switch (e) {
        case "keyup":
          return Lc.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Mc;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function zc(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ko(e) {
      return e.locale === "ko";
    }
    var qi = !1;
    function Uc(e, t, a, i, u) {
      var s, f;
      if (Go ? s = wd(t) : qi ? Dd(t, i) && (s = "onCompositionEnd") : vy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Kv && !Ko(i) && (!qi && s === "onCompositionStart" ? qi = wc(u) : s === "onCompositionEnd" && qi && (f = Dc()));
      var p = ah(a, s);
      if (p.length > 0) {
        var v = new Gi(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = zc(i);
          m !== null && (v.data = m);
        }
      }
    }
    function Jv(e, t) {
      switch (e) {
        case "compositionend":
          return zc(t);
        case "keypress":
          var a = t.which;
          return a !== Rd ? null : (qo = !0, xd);
        case "textInput":
          var i = t.data;
          return i === xd && qo ? null : i;
        default:
          return null;
      }
    }
    function hy(e, t) {
      if (qi) {
        if (e === "compositionend" || !Go && Dd(e, t)) {
          var a = Dc();
          return Io(), qi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Zv(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Kv && !Ko(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ac(e, t, a, i, u) {
      var s;
      if (Td ? s = Jv(t, i) : s = hy(t, i), !s)
        return null;
      var f = ah(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new cy("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function my(e, t, a, i, u, s, f) {
      Uc(e, t, a, i, u), Ac(e, t, a, i, u);
    }
    var Zo = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function eh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Zo[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Fc(e) {
      if (!pn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      sr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      As(i);
      var u = ah(t, "onChange");
      if (u.length > 0) {
        var s = new _c("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, Us(e)), Bf(h, t);
    }
    function h(e) {
      x0(e, 0);
    }
    function S(e) {
      var t = $c(e);
      if (Ap(t))
        return e;
    }
    function C(e, t) {
      if (e === "change")
        return t;
    }
    var L = !1;
    pn && (L = Fc("input") && (!document.documentMode || document.documentMode > 9));
    function H(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", F);
    }
    function V() {
      l && (l.detachEvent("onpropertychange", F), l = null, o = null);
    }
    function F(e) {
      e.propertyName === "value" && S(o) && d(e);
    }
    function Z(e, t, a) {
      e === "focusin" ? (V(), H(t, a)) : e === "focusout" && V();
    }
    function ae(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return S(o);
    }
    function se(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Gt(e, t) {
      if (e === "click")
        return S(t);
    }
    function w(e, t) {
      if (e === "input" || e === "change")
        return S(t);
    }
    function R(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || zi(e, "number", e.value);
    }
    function b(e, t, a, i, u, s, f) {
      var p = a ? $c(a) : window, v, m;
      if (c(p) ? v = C : eh(p) ? L ? v = w : (v = ae, m = Z) : se(p) && (v = Gt), v) {
        var y = v(t, a);
        if (y) {
          r(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && R(p);
    }
    function $() {
      Wr("onMouseEnter", ["mouseout", "mouseover"]), Wr("onMouseLeave", ["mouseout", "mouseover"]), Wr("onPointerEnter", ["pointerout", "pointerover"]), Wr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function de(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !pv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (ts(m) || Vd(m)))
          return;
      }
      if (!(!v && !p)) {
        var y;
        if (u.window === u)
          y = u;
        else {
          var x = u.ownerDocument;
          x ? y = x.defaultView || x.parentWindow : y = window;
        }
        var T, O;
        if (v) {
          var M = i.relatedTarget || i.toElement;
          if (T = a, O = M ? ts(M) : null, O !== null) {
            var N = Ar(O);
            (O !== N || O.tag !== oe && O.tag !== ze) && (O = null);
          }
        } else
          T = null, O = a;
        if (T !== O) {
          var X = bc, Ee = "onMouseLeave", ve = "onMouseEnter", Xe = "mouse";
          (t === "pointerout" || t === "pointerover") && (X = qv, Ee = "onPointerLeave", ve = "onPointerEnter", Xe = "pointer");
          var Ie = T == null ? y : $c(T), D = O == null ? y : $c(O), z = new X(Ee, Xe + "leave", T, i, u);
          z.target = Ie, z.relatedTarget = D;
          var _ = null, B = ts(u);
          if (B === a) {
            var te = new X(ve, Xe + "enter", O, i, u);
            te.target = D, te.relatedTarget = Ie, _ = te;
          }
          wT(e, z, _, T, O);
        }
      }
    }
    function Te(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ie = typeof Object.is == "function" ? Object.is : Te;
    function Re(e, t) {
      if (ie(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Bn.call(t, s) || !ie(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function sn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Je(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function gi(e, t) {
      for (var a = sn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === li) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = sn(Je(a));
      }
    }
    function yy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return iT(e, u, s, f, p);
    }
    function iT(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, y = e, x = null;
      e:
        for (; ; ) {
          for (var T = null; y === t && (a === 0 || y.nodeType === li) && (f = s + a), y === i && (u === 0 || y.nodeType === li) && (p = s + u), y.nodeType === li && (s += y.nodeValue.length), (T = y.firstChild) !== null; )
            x = y, y = T;
          for (; ; ) {
            if (y === e)
              break e;
            if (x === t && ++v === a && (f = s), x === i && ++m === u && (p = s), (T = y.nextSibling) !== null)
              break;
            y = x, x = y.parentNode;
          }
          y = T;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function lT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = gi(e, f), y = gi(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var x = a.createRange();
          x.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(y.node, y.offset)) : (x.setEnd(y.node, y.offset), u.addRange(x));
        }
      }
    }
    function d0(e) {
      return e && e.nodeType === li;
    }
    function p0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : d0(e) ? !1 : d0(t) ? p0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function uT(e) {
      return e && e.ownerDocument && p0(e.ownerDocument.documentElement, e);
    }
    function oT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function v0() {
      for (var e = window, t = Ts(); t instanceof e.HTMLIFrameElement; ) {
        if (oT(t))
          e = t.contentWindow;
        else
          return t;
        t = Ts(e.document);
      }
      return t;
    }
    function gy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function sT() {
      var e = v0();
      return {
        focusedElem: e,
        selectionRange: gy(e) ? fT(e) : null
      };
    }
    function cT(e) {
      var t = v0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && uT(a)) {
        i !== null && gy(a) && dT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === dr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function fT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = yy(e), t || {
        start: 0,
        end: 0
      };
    }
    function dT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : lT(e, t);
    }
    var pT = pn && "documentMode" in document && document.documentMode <= 11;
    function vT() {
      sr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Hc = null, Sy = null, _d = null, Ey = !1;
    function hT(e) {
      if ("selectionStart" in e && gy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function mT(e) {
      return e.window === e ? e.document : e.nodeType === ba ? e : e.ownerDocument;
    }
    function h0(e, t, a) {
      var i = mT(a);
      if (!(Ey || Hc == null || Hc !== Ts(i))) {
        var u = hT(Hc);
        if (!_d || !Re(_d, u)) {
          _d = u;
          var s = ah(Sy, "onSelect");
          if (s.length > 0) {
            var f = new _c("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Hc;
          }
        }
      }
    }
    function yT(e, t, a, i, u, s, f) {
      var p = a ? $c(a) : window;
      switch (t) {
        case "focusin":
          (eh(p) || p.contentEditable === "true") && (Hc = p, Sy = a, _d = null);
          break;
        case "focusout":
          Hc = null, Sy = null, _d = null;
          break;
        case "mousedown":
          Ey = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ey = !1, h0(e, i, u);
          break;
        case "selectionchange":
          if (pT)
            break;
        case "keydown":
        case "keyup":
          h0(e, i, u);
      }
    }
    function th(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var jc = {
      animationend: th("Animation", "AnimationEnd"),
      animationiteration: th("Animation", "AnimationIteration"),
      animationstart: th("Animation", "AnimationStart"),
      transitionend: th("Transition", "TransitionEnd")
    }, Cy = {}, m0 = {};
    pn && (m0 = document.createElement("div").style, "AnimationEvent" in window || (delete jc.animationend.animation, delete jc.animationiteration.animation, delete jc.animationstart.animation), "TransitionEvent" in window || delete jc.transitionend.transition);
    function nh(e) {
      if (Cy[e])
        return Cy[e];
      if (!jc[e])
        return e;
      var t = jc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in m0)
          return Cy[e] = t[a];
      return e;
    }
    var y0 = nh("animationend"), g0 = nh("animationiteration"), S0 = nh("animationstart"), E0 = nh("transitionend"), C0 = /* @__PURE__ */ new Map(), T0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Bu(e, t) {
      C0.set(e, t), sr(t, [e]);
    }
    function gT() {
      for (var e = 0; e < T0.length; e++) {
        var t = T0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Bu(a, "on" + i);
      }
      Bu(y0, "onAnimationEnd"), Bu(g0, "onAnimationIteration"), Bu(S0, "onAnimationStart"), Bu("dblclick", "onDoubleClick"), Bu("focusin", "onFocus"), Bu("focusout", "onBlur"), Bu(E0, "onTransitionEnd");
    }
    function ST(e, t, a, i, u, s, f) {
      var p = C0.get(t);
      if (p !== void 0) {
        var v = _c, m = t;
        switch (t) {
          case "keypress":
            if (zl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = Gv;
            break;
          case "focusin":
            m = "focus", v = Wo;
            break;
          case "focusout":
            m = "blur", v = Wo;
            break;
          case "beforeblur":
          case "afterblur":
            v = Wo;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = bc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Pv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Cd;
            break;
          case y0:
          case g0:
          case S0:
            v = oy;
            break;
          case E0:
            v = Xi;
            break;
          case "scroll":
            v = yd;
            break;
          case "wheel":
            v = Fl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Yv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = qv;
            break;
        }
        var y = (s & ml) !== 0;
        {
          var x = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", T = RT(a, p, i.type, y, x);
          if (T.length > 0) {
            var O = new v(p, m, null, i, u);
            e.push({
              event: O,
              listeners: T
            });
          }
        }
      }
    }
    gT(), $(), n(), vT(), Nc();
    function ET(e, t, a, i, u, s, f) {
      ST(e, t, a, i, u, s);
      var p = (s & Xm) === 0;
      p && (de(e, t, a, i, u), b(e, t, a, i, u), yT(e, t, a, i, u), my(e, t, a, i, u));
    }
    var bd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ty = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(bd));
    function R0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ci(i, t, void 0, e), e.currentTarget = null;
    }
    function CT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          R0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], x = y.instance, T = y.currentTarget, O = y.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          R0(e, O, T), i = x;
        }
    }
    function x0(e, t) {
      for (var a = (t & ml) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        CT(s, f, a);
      }
      If();
    }
    function TT(e, t, a, i, u) {
      var s = Us(a), f = [];
      ET(f, e, i, a, s, t), x0(f, t);
    }
    function jt(e, t) {
      Ty.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ZR(t), u = DT(e);
      i.has(u) || (w0(t, e, Co, a), i.add(u));
    }
    function Ry(e, t, a) {
      Ty.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ml), w0(a, e, i, t);
    }
    var rh = "_reactListening" + Math.random().toString(36).slice(2);
    function kd(e) {
      if (!e[rh]) {
        e[rh] = !0, Vn.forEach(function(a) {
          a !== "selectionchange" && (Ty.has(a) || Ry(a, !1, e), Ry(a, !0, e));
        });
        var t = e.nodeType === ba ? e : e.ownerDocument;
        t !== null && (t[rh] || (t[rh] = !0, Ry("selectionchange", !1, t)));
      }
    }
    function w0(e, t, a, i, u) {
      var s = un(e, t, a), f = void 0;
      Do && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? xc(e, t, s, f) : mi(e, t, s) : f !== void 0 ? md(e, t, s, f) : Fu(e, t, s);
    }
    function D0(e, t) {
      return e === t || e.nodeType === Zt && e.parentNode === t;
    }
    function xy(e, t, a, i, u) {
      var s = i;
      if (!(t & oi) && !(t & Co)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === ne || v === he) {
                var m = p.stateNode.containerInfo;
                if (D0(m, f))
                  break;
                if (v === he)
                  for (var y = p.return; y !== null; ) {
                    var x = y.tag;
                    if (x === ne || x === he) {
                      var T = y.stateNode.containerInfo;
                      if (D0(T, f))
                        return;
                    }
                    y = y.return;
                  }
                for (; m !== null; ) {
                  var O = ts(m);
                  if (O === null)
                    return;
                  var M = O.tag;
                  if (M === oe || M === ze) {
                    p = s = O;
                    continue e;
                  }
                  m = m.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      Bf(function() {
        return TT(e, t, a, s);
      });
    }
    function Od(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function RT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var x = m, T = x.stateNode, O = x.tag;
        if (O === oe && T !== null && (y = T, p !== null)) {
          var M = gl(m, p);
          M != null && v.push(Od(m, M, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function ah(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === oe && f !== null) {
          var v = f, m = gl(u, a);
          m != null && i.unshift(Od(u, m, v));
          var y = gl(u, t);
          y != null && i.push(Od(u, y, v));
        }
        u = u.return;
      }
      return i;
    }
    function Vc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== oe);
      return e || null;
    }
    function xT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Vc(s))
        u++;
      for (var f = 0, p = i; p; p = Vc(p))
        f++;
      for (; u - f > 0; )
        a = Vc(a), u--;
      for (; f - u > 0; )
        i = Vc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Vc(a), i = Vc(i);
      }
      return null;
    }
    function _0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, x = v.tag;
        if (m !== null && m === i)
          break;
        if (x === oe && y !== null) {
          var T = y;
          if (u) {
            var O = gl(p, s);
            O != null && f.unshift(Od(p, O, T));
          } else if (!u) {
            var M = gl(p, s);
            M != null && f.push(Od(p, M, T));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function wT(e, t, a, i, u) {
      var s = i && u ? xT(i, u) : null;
      i !== null && _0(e, t, i, s, !1), u !== null && a !== null && _0(e, a, u, s, !0);
    }
    function DT(e, t) {
      return e + "__bubble";
    }
    var da = !1, Ld = "dangerouslySetInnerHTML", ih = "suppressContentEditableWarning", Pu = "suppressHydrationWarning", b0 = "autoFocus", Jo = "children", es = "style", lh = "__html", wy, uh, Md, k0, oh, O0, L0;
    wy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, uh = function(e, t) {
      zs(e, t), Af(e, t), dv(e, t, {
        registrationNameDependencies: or,
        possibleRegistrationNames: Aa
      });
    }, O0 = pn && !document.documentMode, Md = function(e, t, a) {
      if (!da) {
        var i = sh(a), u = sh(t);
        u !== i && (da = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, k0 = function(e) {
      if (!da) {
        da = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, oh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, L0 = function(e, t) {
      var a = e.namespaceURI === ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var _T = /\r\n?/g, bT = /\u0000|\uFFFD/g;
    function sh(e) {
      Ca(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(_T, `
`).replace(bT, "");
    }
    function ch(e, t, a, i) {
      var u = sh(t), s = sh(e);
      if (s !== u && (i && (da || (da = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && qn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function M0(e) {
      return e.nodeType === ba ? e : e.ownerDocument;
    }
    function kT() {
    }
    function fh(e) {
      e.onclick = kT;
    }
    function OT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === es)
            f && Object.freeze(f), nv(t, f);
          else if (s === Ld) {
            var p = f ? f[lh] : void 0;
            p != null && Ip(t, p);
          } else if (s === Jo)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && Os(t, f);
            } else
              typeof f == "number" && Os(t, "" + f);
          else
            s === ih || s === Pu || s === b0 || (or.hasOwnProperty(s) ? f != null && (typeof f != "function" && oh(s, f), s === "onScroll" && jt("scroll", t)) : f != null && ja(t, s, f, u));
        }
    }
    function LT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === es ? nv(e, f) : s === Ld ? Ip(e, f) : s === Jo ? Os(e, f) : ja(e, s, f, i);
      }
    }
    function MT(e, t, a, i) {
      var u, s = M0(a), f, p = i;
      if (p === ii && (p = bs(e)), p === ii) {
        if (u = ui(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var m = v.firstChild;
          f = v.removeChild(m);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var y = f;
          t.multiple ? y.multiple = !0 : t.size && (y.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === ii && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Bn.call(wy, e) && (wy[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function NT(e, t) {
      return M0(t).createTextNode(e);
    }
    function zT(e, t, a, i) {
      var u = ui(t, a);
      uh(t, a);
      var s;
      switch (t) {
        case "dialog":
          jt("cancel", e), jt("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          jt("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < bd.length; f++)
            jt(bd[f], e);
          s = a;
          break;
        case "source":
          jt("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          jt("error", e), jt("load", e), s = a;
          break;
        case "details":
          jt("toggle", e), s = a;
          break;
        case "input":
          ho(e, a), s = vo(e, a), jt("invalid", e);
          break;
        case "option":
          Ds(e, a), s = a;
          break;
        case "select":
          Bp(e, a), s = wf(e, a), jt("invalid", e);
          break;
        case "textarea":
          Pp(e, a), s = _f(e, a), jt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ms(t, s), OT(t, e, i, s, u), t) {
        case "input":
          pl(e), mo(e, a, !1);
          break;
        case "textarea":
          pl(e), Yp(e);
          break;
        case "option":
          xf(e, a);
          break;
        case "select":
          Hm(e, a);
          break;
        default:
          typeof s.onClick == "function" && fh(e);
          break;
      }
    }
    function UT(e, t, a, i, u) {
      uh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = vo(e, a), p = vo(e, i), s = [];
          break;
        case "select":
          f = wf(e, a), p = wf(e, i), s = [];
          break;
        case "textarea":
          f = _f(e, a), p = _f(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && fh(e);
          break;
      }
      Ms(t, p);
      var v, m, y = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === es) {
            var x = f[v];
            for (m in x)
              x.hasOwnProperty(m) && (y || (y = {}), y[m] = "");
          } else
            v === Ld || v === Jo || v === ih || v === Pu || v === b0 || (or.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var T = p[v], O = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || T === O || T == null && O == null))
          if (v === es)
            if (T && Object.freeze(T), O) {
              for (m in O)
                O.hasOwnProperty(m) && (!T || !T.hasOwnProperty(m)) && (y || (y = {}), y[m] = "");
              for (m in T)
                T.hasOwnProperty(m) && O[m] !== T[m] && (y || (y = {}), y[m] = T[m]);
            } else
              y || (s || (s = []), s.push(v, y)), y = T;
          else if (v === Ld) {
            var M = T ? T[lh] : void 0, N = O ? O[lh] : void 0;
            M != null && N !== M && (s = s || []).push(v, M);
          } else
            v === Jo ? (typeof T == "string" || typeof T == "number") && (s = s || []).push(v, "" + T) : v === ih || v === Pu || (or.hasOwnProperty(v) ? (T != null && (typeof T != "function" && oh(v, T), v === "onScroll" && jt("scroll", e)), !s && O !== T && (s = [])) : (s = s || []).push(v, T));
      }
      return y && (So(y, p[es]), (s = s || []).push(es, y)), s;
    }
    function AT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && Rf(e, u);
      var s = ui(a, i), f = ui(a, u);
      switch (LT(e, t, s, f), a) {
        case "input":
          ru(e, u);
          break;
        case "textarea":
          $p(e, u);
          break;
        case "select":
          jm(e, u);
          break;
      }
    }
    function FT(e) {
      {
        var t = e.toLowerCase();
        return Ns.hasOwnProperty(t) && Ns[t] || null;
      }
    }
    function HT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = ui(t, a), uh(t, a), t) {
        case "dialog":
          jt("cancel", e), jt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          jt("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < bd.length; m++)
            jt(bd[m], e);
          break;
        case "source":
          jt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          jt("error", e), jt("load", e);
          break;
        case "details":
          jt("toggle", e);
          break;
        case "input":
          ho(e, a), jt("invalid", e);
          break;
        case "option":
          Ds(e, a);
          break;
        case "select":
          Bp(e, a), jt("invalid", e);
          break;
        case "textarea":
          Pp(e, a), jt("invalid", e);
          break;
      }
      Ms(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var y = e.attributes, x = 0; x < y.length; x++) {
          var T = y[x].name.toLowerCase();
          switch (T) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(y[x].name);
          }
        }
      }
      var O = null;
      for (var M in a)
        if (a.hasOwnProperty(M)) {
          var N = a[M];
          if (M === Jo)
            typeof N == "string" ? e.textContent !== N && (a[Pu] !== !0 && ch(e.textContent, N, s, f), O = [Jo, N]) : typeof N == "number" && e.textContent !== "" + N && (a[Pu] !== !0 && ch(e.textContent, N, s, f), O = [Jo, "" + N]);
          else if (or.hasOwnProperty(M))
            N != null && (typeof N != "function" && oh(M, N), M === "onScroll" && jt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var X = void 0, Ee = p && wn ? null : Lr(M);
            if (a[Pu] !== !0) {
              if (!(M === ih || M === Pu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              M === "value" || M === "checked" || M === "selected")) {
                if (M === Ld) {
                  var ve = e.innerHTML, Xe = N ? N[lh] : void 0;
                  if (Xe != null) {
                    var Ie = L0(e, Xe);
                    Ie !== ve && Md(M, ve, Ie);
                  }
                } else if (M === es) {
                  if (v.delete(M), O0) {
                    var D = Wm(N);
                    X = e.getAttribute("style"), D !== X && Md(M, X, D);
                  }
                } else if (p && !wn)
                  v.delete(M.toLowerCase()), X = Jl(e, M, N), N !== X && Md(M, X, N);
                else if (!It(M, Ee, p) && !Tt(M, N, Ee, p)) {
                  var z = !1;
                  if (Ee !== null)
                    v.delete(Ee.attributeName), X = sl(e, M, N, Ee);
                  else {
                    var _ = i;
                    if (_ === ii && (_ = bs(t)), _ === ii)
                      v.delete(M.toLowerCase());
                    else {
                      var B = FT(M);
                      B !== null && B !== M && (z = !0, v.delete(B)), v.delete(M);
                    }
                    X = Jl(e, M, N);
                  }
                  var te = wn;
                  !te && N !== X && !z && Md(M, X, N);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Pu] !== !0 && k0(v), t) {
        case "input":
          pl(e), mo(e, a, !0);
          break;
        case "textarea":
          pl(e), Yp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && fh(e);
          break;
      }
      return O;
    }
    function jT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Dy(e, t) {
      {
        if (da)
          return;
        da = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function _y(e, t) {
      {
        if (da)
          return;
        da = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function by(e, t, a) {
      {
        if (da)
          return;
        da = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (t === "" || da)
          return;
        da = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function VT(e, t, a) {
      switch (t) {
        case "input":
          Fp(e, a);
          return;
        case "textarea":
          bf(e, a);
          return;
        case "select":
          Vm(e, a);
          return;
      }
    }
    var Nd = function() {
    }, zd = function() {
    };
    {
      var BT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], N0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], PT = N0.concat(["button"]), $T = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], z0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      zd = function(e, t) {
        var a = He({}, e || z0), i = {
          tag: t
        };
        return N0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), PT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), BT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var YT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return $T.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, IT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, U0 = {};
      Nd = function(e, t, a) {
        a = a || z0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = YT(e, u) ? null : i, f = s ? null : IT(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!U0[m]) {
            U0[m] = !0;
            var y = e, x = "";
            if (e === "#text" ? /\S/.test(t) ? y = "Text nodes" : (y = "Whitespace text nodes", x = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : y = "<" + e + ">", s) {
              var T = "";
              v === "table" && e === "tr" && (T += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", y, v, x, T);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", y, v);
          }
        }
      };
    }
    var dh = "suppressHydrationWarning", ph = "$", vh = "/$", Ud = "$?", Ad = "$!", QT = "style", Oy = null, Ly = null;
    function WT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ba:
        case vl: {
          t = i === ba ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Of(null, "");
          break;
        }
        default: {
          var s = i === Zt ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Of(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = zd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function GT(e, t, a) {
      {
        var i = e, u = Of(i.namespace, t), s = zd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Gb(e) {
      return e;
    }
    function XT(e) {
      Oy = Uu(), Ly = sT();
      var t = null;
      return Tr(!1), t;
    }
    function qT(e) {
      cT(Ly), Tr(Oy), Oy = null, Ly = null;
    }
    function KT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Nd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = zd(f.ancestorInfo, e);
          Nd(null, p, v);
        }
        s = f.namespace;
      }
      var m = MT(e, t, a, s);
      return jd(u, m), jy(m, t), m;
    }
    function ZT(e, t) {
      e.appendChild(t);
    }
    function JT(e, t, a, i, u) {
      switch (zT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function eR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = zd(f.ancestorInfo, t);
          Nd(null, p, v);
        }
      }
      return UT(e, t, a, i);
    }
    function My(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function tR(e, t, a, i) {
      {
        var u = a;
        Nd(null, e, u.ancestorInfo);
      }
      var s = NT(e, t);
      return jd(i, s), s;
    }
    function nR() {
      var e = window.event;
      return e === void 0 ? Ya : Rc(e.type);
    }
    var Ny = typeof setTimeout == "function" ? setTimeout : void 0, rR = typeof clearTimeout == "function" ? clearTimeout : void 0, zy = -1, A0 = typeof Promise == "function" ? Promise : void 0, aR = typeof queueMicrotask == "function" ? queueMicrotask : typeof A0 < "u" ? function(e) {
      return A0.resolve(null).then(e).catch(iR);
    } : Ny;
    function iR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function lR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function uR(e, t, a, i, u, s) {
      AT(e, t, a, i, u), jy(e, u);
    }
    function F0(e) {
      Os(e, "");
    }
    function oR(e, t, a) {
      e.nodeValue = a;
    }
    function sR(e, t) {
      e.appendChild(t);
    }
    function cR(e, t) {
      var a;
      e.nodeType === Zt ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && fh(a);
    }
    function fR(e, t, a) {
      e.insertBefore(t, a);
    }
    function dR(e, t, a) {
      e.nodeType === Zt ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function pR(e, t) {
      e.removeChild(t);
    }
    function vR(e, t) {
      e.nodeType === Zt ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Uy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Zt) {
          var s = u.data;
          if (s === vh)
            if (i === 0) {
              e.removeChild(u), $t(t);
              return;
            } else
              i--;
          else
            (s === ph || s === Ud || s === Ad) && i++;
        }
        a = u;
      } while (a);
      $t(t);
    }
    function hR(e, t) {
      e.nodeType === Zt ? Uy(e.parentNode, t) : e.nodeType === dr && Uy(e, t), $t(e);
    }
    function mR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function yR(e) {
      e.nodeValue = "";
    }
    function gR(e, t) {
      e = e;
      var a = t[QT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ls("display", i);
    }
    function SR(e, t) {
      e.nodeValue = t;
    }
    function ER(e) {
      e.nodeType === dr ? e.textContent = "" : e.nodeType === ba && e.documentElement && e.removeChild(e.documentElement);
    }
    function CR(e, t, a) {
      return e.nodeType !== dr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function TR(e, t) {
      return t === "" || e.nodeType !== li ? null : e;
    }
    function RR(e) {
      return e.nodeType !== Zt ? null : e;
    }
    function H0(e) {
      return e.data === Ud;
    }
    function Ay(e) {
      return e.data === Ad;
    }
    function xR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function wR(e, t) {
      e._reactRetry = t;
    }
    function hh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === dr || t === li)
          break;
        if (t === Zt) {
          var a = e.data;
          if (a === ph || a === Ad || a === Ud)
            break;
          if (a === vh)
            return null;
        }
      }
      return e;
    }
    function Fd(e) {
      return hh(e.nextSibling);
    }
    function DR(e) {
      return hh(e.firstChild);
    }
    function _R(e) {
      return hh(e.firstChild);
    }
    function bR(e) {
      return hh(e.nextSibling);
    }
    function kR(e, t, a, i, u, s, f) {
      jd(s, e), jy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & pe) !== fe;
      return HT(e, t, a, p, i, m, f);
    }
    function OR(e, t, a, i) {
      return jd(a, e), a.mode & pe, jT(e, t);
    }
    function LR(e, t) {
      jd(t, e);
    }
    function MR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Zt) {
          var i = t.data;
          if (i === vh) {
            if (a === 0)
              return Fd(t);
            a--;
          } else
            (i === ph || i === Ad || i === Ud) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function j0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Zt) {
          var i = t.data;
          if (i === ph || i === Ad || i === Ud) {
            if (a === 0)
              return t;
            a--;
          } else
            i === vh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function NR(e) {
      $t(e);
    }
    function zR(e) {
      $t(e);
    }
    function UR(e) {
      return e !== "head" && e !== "body";
    }
    function AR(e, t, a, i) {
      var u = !0;
      ch(t.nodeValue, a, i, u);
    }
    function FR(e, t, a, i, u, s) {
      if (t[dh] !== !0) {
        var f = !0;
        ch(i.nodeValue, u, s, f);
      }
    }
    function HR(e, t) {
      t.nodeType === dr ? Dy(e, t) : t.nodeType === Zt || _y(e, t);
    }
    function jR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === dr ? Dy(a, t) : t.nodeType === Zt || _y(a, t));
      }
    }
    function VR(e, t, a, i, u) {
      (u || t[dh] !== !0) && (i.nodeType === dr ? Dy(a, i) : i.nodeType === Zt || _y(a, i));
    }
    function BR(e, t, a) {
      by(e, t);
    }
    function PR(e, t) {
      ky(e, t);
    }
    function $R(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && by(i, t);
      }
    }
    function YR(e, t) {
      {
        var a = e.parentNode;
        a !== null && ky(a, t);
      }
    }
    function IR(e, t, a, i, u, s) {
      (s || t[dh] !== !0) && by(a, i);
    }
    function QR(e, t, a, i, u) {
      (u || t[dh] !== !0) && ky(a, i);
    }
    function WR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function GR(e) {
      kd(e);
    }
    var Bc = Math.random().toString(36).slice(2), Pc = "__reactFiber$" + Bc, Fy = "__reactProps$" + Bc, Hd = "__reactContainer$" + Bc, Hy = "__reactEvents$" + Bc, XR = "__reactListeners$" + Bc, qR = "__reactHandles$" + Bc;
    function KR(e) {
      delete e[Pc], delete e[Fy], delete e[Hy], delete e[XR], delete e[qR];
    }
    function jd(e, t) {
      t[Pc] = e;
    }
    function mh(e, t) {
      t[Hd] = e;
    }
    function V0(e) {
      e[Hd] = null;
    }
    function Vd(e) {
      return !!e[Hd];
    }
    function ts(e) {
      var t = e[Pc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Hd] || a[Pc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = j0(e); u !== null; ) {
              var s = u[Pc];
              if (s)
                return s;
              u = j0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function $u(e) {
      var t = e[Pc] || e[Hd];
      return t && (t.tag === oe || t.tag === ze || t.tag === $e || t.tag === ne) ? t : null;
    }
    function $c(e) {
      if (e.tag === oe || e.tag === ze)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function yh(e) {
      return e[Fy] || null;
    }
    function jy(e, t) {
      e[Fy] = t;
    }
    function ZR(e) {
      var t = e[Hy];
      return t === void 0 && (t = e[Hy] = /* @__PURE__ */ new Set()), t;
    }
    var B0 = {}, P0 = k.ReactDebugCurrentFrame;
    function gh(e) {
      if (e) {
        var t = e._owner, a = uo(e.type, e._source, t ? t.type : null);
        P0.setExtraStackFrame(a);
      } else
        P0.setExtraStackFrame(null);
    }
    function Si(e, t, a, i, u) {
      {
        var s = Function.call.bind(Bn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              p = m;
            }
            p && !(p instanceof Error) && (gh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), gh(null)), p instanceof Error && !(p.message in B0) && (B0[p.message] = !0, gh(u), g("Failed %s type: %s", a, p.message), gh(null));
          }
      }
    }
    var Vy = [], Sh;
    Sh = [];
    var Hl = -1;
    function Yu(e) {
      return {
        current: e
      };
    }
    function Rr(e, t) {
      if (Hl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Sh[Hl] && g("Unexpected Fiber popped."), e.current = Vy[Hl], Vy[Hl] = null, Sh[Hl] = null, Hl--;
    }
    function xr(e, t, a) {
      Hl++, Vy[Hl] = e.current, Sh[Hl] = a, e.current = t;
    }
    var By;
    By = {};
    var Ma = {};
    Object.freeze(Ma);
    var jl = Yu(Ma), Ki = Yu(!1), Py = Ma;
    function Yc(e, t, a) {
      return a && Zi(t) ? Py : jl.current;
    }
    function $0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Ic(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Ma;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Le(e) || "Unknown";
          Si(i, s, "context", p);
        }
        return u && $0(e, t, s), s;
      }
    }
    function Eh() {
      return Ki.current;
    }
    function Zi(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ch(e) {
      Rr(Ki, e), Rr(jl, e);
    }
    function $y(e) {
      Rr(Ki, e), Rr(jl, e);
    }
    function Y0(e, t, a) {
      {
        if (jl.current !== Ma)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        xr(jl, t, e), xr(Ki, a, e);
      }
    }
    function I0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Le(e) || "Unknown";
            By[s] || (By[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Le(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Le(e) || "Unknown";
          Si(u, f, "child context", v);
        }
        return He({}, a, f);
      }
    }
    function Th(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ma;
        return Py = jl.current, xr(jl, a, e), xr(Ki, Ki.current, e), !0;
      }
    }
    function Q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = I0(e, t, Py);
          i.__reactInternalMemoizedMergedChildContext = u, Rr(Ki, e), Rr(jl, e), xr(jl, u, e), xr(Ki, a, e);
        } else
          Rr(Ki, e), xr(Ki, a, e);
      }
    }
    function JR(e) {
      {
        if (!qf(e) || e.tag !== ue)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ne:
              return t.stateNode.context;
            case ue: {
              var a = t.type;
              if (Zi(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Iu = 0, Rh = 1, Vl = null, Yy = !1, Iy = !1;
    function W0(e) {
      Vl === null ? Vl = [e] : Vl.push(e);
    }
    function ex(e) {
      Yy = !0, W0(e);
    }
    function G0() {
      Yy && Qu();
    }
    function Qu() {
      if (!Iy && Vl !== null) {
        Iy = !0;
        var e = 0, t = ua();
        try {
          var a = !0, i = Vl;
          for (Pt(Wt); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Vl = null, Yy = !1;
        } catch (s) {
          throw Vl !== null && (Vl = Vl.slice(e + 1)), Ps(Ys, Qu), s;
        } finally {
          Pt(t), Iy = !1;
        }
      }
      return null;
    }
    var Qc = [], Wc = 0, xh = null, wh = 0, Ga = [], Xa = 0, ns = null, Bl = 1, Pl = "";
    function tx(e) {
      return as(), (e.flags & Wf) !== Se;
    }
    function nx(e) {
      return as(), wh;
    }
    function rx() {
      var e = Pl, t = Bl, a = t & ~ax(t);
      return a.toString(32) + e;
    }
    function rs(e, t) {
      as(), Qc[Wc++] = wh, Qc[Wc++] = xh, xh = e, wh = t;
    }
    function X0(e, t, a) {
      as(), Ga[Xa++] = Bl, Ga[Xa++] = Pl, Ga[Xa++] = ns, ns = e;
      var i = Bl, u = Pl, s = Dh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Dh(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, x = (f & y).toString(32), T = f >> m, O = s - m, M = Dh(t) + O, N = p << O, X = N | T, Ee = x + u;
        Bl = 1 << M | X, Pl = Ee;
      } else {
        var ve = p << s, Xe = ve | f, Ie = u;
        Bl = 1 << v | Xe, Pl = Ie;
      }
    }
    function Qy(e) {
      as();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        rs(e, a), X0(e, a, i);
      }
    }
    function Dh(e) {
      return 32 - gu(e);
    }
    function ax(e) {
      return 1 << Dh(e) - 1;
    }
    function Wy(e) {
      for (; e === xh; )
        xh = Qc[--Wc], Qc[Wc] = null, wh = Qc[--Wc], Qc[Wc] = null;
      for (; e === ns; )
        ns = Ga[--Xa], Ga[Xa] = null, Pl = Ga[--Xa], Ga[Xa] = null, Bl = Ga[--Xa], Ga[Xa] = null;
    }
    function ix() {
      return as(), ns !== null ? {
        id: Bl,
        overflow: Pl
      } : null;
    }
    function lx(e, t) {
      as(), Ga[Xa++] = Bl, Ga[Xa++] = Pl, Ga[Xa++] = ns, Bl = t.id, Pl = t.overflow, ns = e;
    }
    function as() {
      er() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Jn = null, qa = null, Ei = !1, is = !1, Wu = null;
    function ux() {
      Ei && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function q0() {
      is = !0;
    }
    function ox() {
      return is;
    }
    function sx(e) {
      var t = e.stateNode.containerInfo;
      return qa = _R(t), Jn = e, Ei = !0, Wu = null, is = !1, !0;
    }
    function cx(e, t, a) {
      return qa = bR(t), Jn = e, Ei = !0, Wu = null, is = !1, a !== null && lx(e, a), !0;
    }
    function K0(e, t) {
      switch (e.tag) {
        case ne: {
          HR(e.stateNode.containerInfo, t);
          break;
        }
        case oe: {
          var a = (e.mode & pe) !== fe;
          VR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case $e: {
          var i = e.memoizedState;
          i.dehydrated !== null && jR(i.dehydrated, t);
          break;
        }
      }
    }
    function Z0(e, t) {
      K0(e, t);
      var a = v_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= at) : i.push(a);
    }
    function Gy(e, t) {
      {
        if (is)
          return;
        switch (e.tag) {
          case ne: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case oe:
                var i = t.type;
                t.pendingProps, BR(a, i);
                break;
              case ze:
                var u = t.pendingProps;
                PR(a, u);
                break;
            }
            break;
          }
          case oe: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case oe: {
                var v = t.type, m = t.pendingProps, y = (e.mode & pe) !== fe;
                IR(
                  s,
                  f,
                  p,
                  v,
                  m,
                  // TODO: Delete this argument when we remove the legacy root API.
                  y
                );
                break;
              }
              case ze: {
                var x = t.pendingProps, T = (e.mode & pe) !== fe;
                QR(
                  s,
                  f,
                  p,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
            }
            break;
          }
          case $e: {
            var O = e.memoizedState, M = O.dehydrated;
            if (M !== null)
              switch (t.tag) {
                case oe:
                  var N = t.type;
                  t.pendingProps, $R(M, N);
                  break;
                case ze:
                  var X = t.pendingProps;
                  YR(M, X);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function J0(e, t) {
      t.flags = t.flags & ~ta | bt, Gy(e, t);
    }
    function eE(e, t) {
      switch (e.tag) {
        case oe: {
          var a = e.type;
          e.pendingProps;
          var i = CR(t, a);
          return i !== null ? (e.stateNode = i, Jn = e, qa = DR(i), !0) : !1;
        }
        case ze: {
          var u = e.pendingProps, s = TR(t, u);
          return s !== null ? (e.stateNode = s, Jn = e, qa = null, !0) : !1;
        }
        case $e: {
          var f = RR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ix(),
              retryLane: Wn
            };
            e.memoizedState = p;
            var v = h_(f);
            return v.return = e, e.child = v, Jn = e, qa = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Xy(e) {
      return (e.mode & pe) !== fe && (e.flags & De) === Se;
    }
    function qy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ky(e) {
      if (Ei) {
        var t = qa;
        if (!t) {
          Xy(e) && (Gy(Jn, e), qy()), J0(Jn, e), Ei = !1, Jn = e;
          return;
        }
        var a = t;
        if (!eE(e, t)) {
          Xy(e) && (Gy(Jn, e), qy()), t = Fd(a);
          var i = Jn;
          if (!t || !eE(e, t)) {
            J0(Jn, e), Ei = !1, Jn = e;
            return;
          }
          Z0(i, a);
        }
      }
    }
    function fx(e, t, a) {
      var i = e.stateNode, u = !is, s = kR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function dx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = OR(t, a, e);
      if (i) {
        var u = Jn;
        if (u !== null)
          switch (u.tag) {
            case ne: {
              var s = u.stateNode.containerInfo, f = (u.mode & pe) !== fe;
              AR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case oe: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & pe) !== fe;
              FR(
                p,
                v,
                m,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                y
              );
              break;
            }
          }
      }
      return i;
    }
    function px(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      LR(a, e);
    }
    function vx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return MR(a);
    }
    function tE(e) {
      for (var t = e.return; t !== null && t.tag !== oe && t.tag !== ne && t.tag !== $e; )
        t = t.return;
      Jn = t;
    }
    function _h(e) {
      if (e !== Jn)
        return !1;
      if (!Ei)
        return tE(e), Ei = !0, !1;
      if (e.tag !== ne && (e.tag !== oe || UR(e.type) && !My(e.type, e.memoizedProps))) {
        var t = qa;
        if (t)
          if (Xy(e))
            nE(e), qy();
          else
            for (; t; )
              Z0(e, t), t = Fd(t);
      }
      return tE(e), e.tag === $e ? qa = vx(e) : qa = Jn ? Fd(e.stateNode) : null, !0;
    }
    function hx() {
      return Ei && qa !== null;
    }
    function nE(e) {
      for (var t = qa; t; )
        K0(e, t), t = Fd(t);
    }
    function Gc() {
      Jn = null, qa = null, Ei = !1, is = !1;
    }
    function rE() {
      Wu !== null && (q1(Wu), Wu = null);
    }
    function er() {
      return Ei;
    }
    function Zy(e) {
      Wu === null ? Wu = [e] : Wu.push(e);
    }
    var mx = k.ReactCurrentBatchConfig, yx = null;
    function gx() {
      return mx.transition;
    }
    var Ci = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Sx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & je && (t = a), a = a.return;
        return t;
      }, ls = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Bd = [], Pd = [], $d = [], Yd = [], Id = [], Qd = [], us = /* @__PURE__ */ new Set();
      Ci.recordUnsafeLifecycleWarnings = function(e, t) {
        us.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Bd.push(e), e.mode & je && typeof t.UNSAFE_componentWillMount == "function" && Pd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && $d.push(e), e.mode & je && typeof t.UNSAFE_componentWillReceiveProps == "function" && Yd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Id.push(e), e.mode & je && typeof t.UNSAFE_componentWillUpdate == "function" && Qd.push(e));
      }, Ci.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Bd.length > 0 && (Bd.forEach(function(T) {
          e.add(Le(T) || "Component"), us.add(T.type);
        }), Bd = []);
        var t = /* @__PURE__ */ new Set();
        Pd.length > 0 && (Pd.forEach(function(T) {
          t.add(Le(T) || "Component"), us.add(T.type);
        }), Pd = []);
        var a = /* @__PURE__ */ new Set();
        $d.length > 0 && ($d.forEach(function(T) {
          a.add(Le(T) || "Component"), us.add(T.type);
        }), $d = []);
        var i = /* @__PURE__ */ new Set();
        Yd.length > 0 && (Yd.forEach(function(T) {
          i.add(Le(T) || "Component"), us.add(T.type);
        }), Yd = []);
        var u = /* @__PURE__ */ new Set();
        Id.length > 0 && (Id.forEach(function(T) {
          u.add(Le(T) || "Component"), us.add(T.type);
        }), Id = []);
        var s = /* @__PURE__ */ new Set();
        if (Qd.length > 0 && (Qd.forEach(function(T) {
          s.add(Le(T) || "Component"), us.add(T.type);
        }), Qd = []), t.size > 0) {
          var f = ls(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = ls(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = ls(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = ls(e);
          Ve(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = ls(a);
          Ve(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var x = ls(u);
          Ve(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var bh = /* @__PURE__ */ new Map(), aE = /* @__PURE__ */ new Set();
      Ci.recordLegacyContextWarning = function(e, t) {
        var a = Sx(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!aE.has(e.type)) {
          var i = bh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], bh.set(a, i)), i.push(e));
        }
      }, Ci.flushLegacyContextWarning = function() {
        bh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Le(s) || "Component"), aE.add(s.type);
            });
            var u = ls(i);
            try {
              vt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              rn();
            }
          }
        });
      }, Ci.discardPendingWarnings = function() {
        Bd = [], Pd = [], $d = [], Yd = [], Id = [], Qd = [], bh = /* @__PURE__ */ new Map();
      };
    }
    var Jy, eg, tg, ng, rg, iE = function(e, t) {
    };
    Jy = !1, eg = !1, tg = {}, ng = {}, rg = {}, iE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Le(t) || "Component";
        ng[a] || (ng[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Ex(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Wd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & je || Kn) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ue) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Ex(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Le(e) || "Component";
          tg[u] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), tg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ue)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ni(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var y = function(x) {
            var T = v.refs;
            x === null ? delete T[m] : T[m] = x;
          };
          return y._stringRef = m, y;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function kh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Oh(e) {
      {
        var t = Le(e) || "Component";
        if (rg[t])
          return;
        rg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function lE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function uE(e) {
      function t(D, z) {
        if (e) {
          var _ = D.deletions;
          _ === null ? (D.deletions = [z], D.flags |= at) : _.push(z);
        }
      }
      function a(D, z) {
        if (!e)
          return null;
        for (var _ = z; _ !== null; )
          t(D, _), _ = _.sibling;
        return null;
      }
      function i(D, z) {
        for (var _ = /* @__PURE__ */ new Map(), B = z; B !== null; )
          B.key !== null ? _.set(B.key, B) : _.set(B.index, B), B = B.sibling;
        return _;
      }
      function u(D, z) {
        var _ = ms(D, z);
        return _.index = 0, _.sibling = null, _;
      }
      function s(D, z, _) {
        if (D.index = _, !e)
          return D.flags |= Wf, z;
        var B = D.alternate;
        if (B !== null) {
          var te = B.index;
          return te < z ? (D.flags |= bt, z) : te;
        } else
          return D.flags |= bt, z;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= bt), D;
      }
      function p(D, z, _, B) {
        if (z === null || z.tag !== ze) {
          var te = ZS(_, D.mode, B);
          return te.return = D, te;
        } else {
          var q = u(z, _);
          return q.return = D, q;
        }
      }
      function v(D, z, _, B) {
        var te = _.type;
        if (te === xa)
          return y(D, z, _.props.children, B, _.key);
        if (z !== null && (z.elementType === te || // Keep this check inline so it only runs on the false path:
        dC(z, _) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof te == "object" && te !== null && te.$$typeof === xe && lE(te) === z.type)) {
          var q = u(z, _.props);
          return q.ref = Wd(D, z, _), q.return = D, q._debugSource = _._source, q._debugOwner = _._owner, q;
        }
        var we = KS(_, D.mode, B);
        return we.ref = Wd(D, z, _), we.return = D, we;
      }
      function m(D, z, _, B) {
        if (z === null || z.tag !== he || z.stateNode.containerInfo !== _.containerInfo || z.stateNode.implementation !== _.implementation) {
          var te = JS(_, D.mode, B);
          return te.return = D, te;
        } else {
          var q = u(z, _.children || []);
          return q.return = D, q;
        }
      }
      function y(D, z, _, B, te) {
        if (z === null || z.tag !== st) {
          var q = ao(_, D.mode, B, te);
          return q.return = D, q;
        } else {
          var we = u(z, _);
          return we.return = D, we;
        }
      }
      function x(D, z, _) {
        if (typeof z == "string" && z !== "" || typeof z == "number") {
          var B = ZS("" + z, D.mode, _);
          return B.return = D, B;
        }
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case ri: {
              var te = KS(z, D.mode, _);
              return te.ref = Wd(D, null, z), te.return = D, te;
            }
            case Mr: {
              var q = JS(z, D.mode, _);
              return q.return = D, q;
            }
            case xe: {
              var we = z._payload, Oe = z._init;
              return x(D, Oe(we), _);
            }
          }
          if (mn(z) || Nr(z)) {
            var mt = ao(z, D.mode, _, null);
            return mt.return = D, mt;
          }
          kh(D, z);
        }
        return typeof z == "function" && Oh(D), null;
      }
      function T(D, z, _, B) {
        var te = z !== null ? z.key : null;
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
          return te !== null ? null : p(D, z, "" + _, B);
        if (typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case ri:
              return _.key === te ? v(D, z, _, B) : null;
            case Mr:
              return _.key === te ? m(D, z, _, B) : null;
            case xe: {
              var q = _._payload, we = _._init;
              return T(D, z, we(q), B);
            }
          }
          if (mn(_) || Nr(_))
            return te !== null ? null : y(D, z, _, B, null);
          kh(D, _);
        }
        return typeof _ == "function" && Oh(D), null;
      }
      function O(D, z, _, B, te) {
        if (typeof B == "string" && B !== "" || typeof B == "number") {
          var q = D.get(_) || null;
          return p(z, q, "" + B, te);
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case ri: {
              var we = D.get(B.key === null ? _ : B.key) || null;
              return v(z, we, B, te);
            }
            case Mr: {
              var Oe = D.get(B.key === null ? _ : B.key) || null;
              return m(z, Oe, B, te);
            }
            case xe:
              var mt = B._payload, et = B._init;
              return O(D, z, _, et(mt), te);
          }
          if (mn(B) || Nr(B)) {
            var cn = D.get(_) || null;
            return y(z, cn, B, te, null);
          }
          kh(z, B);
        }
        return typeof B == "function" && Oh(z), null;
      }
      function M(D, z, _) {
        {
          if (typeof D != "object" || D === null)
            return z;
          switch (D.$$typeof) {
            case ri:
            case Mr:
              iE(D, _);
              var B = D.key;
              if (typeof B != "string")
                break;
              if (z === null) {
                z = /* @__PURE__ */ new Set(), z.add(B);
                break;
              }
              if (!z.has(B)) {
                z.add(B);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", B);
              break;
            case xe:
              var te = D._payload, q = D._init;
              M(q(te), z, _);
              break;
          }
        }
        return z;
      }
      function N(D, z, _, B) {
        for (var te = null, q = 0; q < _.length; q++) {
          var we = _[q];
          te = M(we, te, D);
        }
        for (var Oe = null, mt = null, et = z, cn = 0, tt = 0, tn = null; et !== null && tt < _.length; tt++) {
          et.index > tt ? (tn = et, et = null) : tn = et.sibling;
          var Dr = T(D, et, _[tt], B);
          if (Dr === null) {
            et === null && (et = tn);
            break;
          }
          e && et && Dr.alternate === null && t(D, et), cn = s(Dr, cn, tt), mt === null ? Oe = Dr : mt.sibling = Dr, mt = Dr, et = tn;
        }
        if (tt === _.length) {
          if (a(D, et), er()) {
            var ur = tt;
            rs(D, ur);
          }
          return Oe;
        }
        if (et === null) {
          for (; tt < _.length; tt++) {
            var za = x(D, _[tt], B);
            za !== null && (cn = s(za, cn, tt), mt === null ? Oe = za : mt.sibling = za, mt = za);
          }
          if (er()) {
            var Yr = tt;
            rs(D, Yr);
          }
          return Oe;
        }
        for (var Ir = i(D, et); tt < _.length; tt++) {
          var _r = O(Ir, D, tt, _[tt], B);
          _r !== null && (e && _r.alternate !== null && Ir.delete(_r.key === null ? tt : _r.key), cn = s(_r, cn, tt), mt === null ? Oe = _r : mt.sibling = _r, mt = _r);
        }
        if (e && Ir.forEach(function(vf) {
          return t(D, vf);
        }), er()) {
          var Xl = tt;
          rs(D, Xl);
        }
        return Oe;
      }
      function X(D, z, _, B) {
        var te = Nr(_);
        if (typeof te != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          _[Symbol.toStringTag] === "Generator" && (eg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), eg = !0), _.entries === te && (Jy || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jy = !0);
          var q = te.call(_);
          if (q)
            for (var we = null, Oe = q.next(); !Oe.done; Oe = q.next()) {
              var mt = Oe.value;
              we = M(mt, we, D);
            }
        }
        var et = te.call(_);
        if (et == null)
          throw new Error("An iterable object provided no iterator.");
        for (var cn = null, tt = null, tn = z, Dr = 0, ur = 0, za = null, Yr = et.next(); tn !== null && !Yr.done; ur++, Yr = et.next()) {
          tn.index > ur ? (za = tn, tn = null) : za = tn.sibling;
          var Ir = T(D, tn, Yr.value, B);
          if (Ir === null) {
            tn === null && (tn = za);
            break;
          }
          e && tn && Ir.alternate === null && t(D, tn), Dr = s(Ir, Dr, ur), tt === null ? cn = Ir : tt.sibling = Ir, tt = Ir, tn = za;
        }
        if (Yr.done) {
          if (a(D, tn), er()) {
            var _r = ur;
            rs(D, _r);
          }
          return cn;
        }
        if (tn === null) {
          for (; !Yr.done; ur++, Yr = et.next()) {
            var Xl = x(D, Yr.value, B);
            Xl !== null && (Dr = s(Xl, Dr, ur), tt === null ? cn = Xl : tt.sibling = Xl, tt = Xl);
          }
          if (er()) {
            var vf = ur;
            rs(D, vf);
          }
          return cn;
        }
        for (var wp = i(D, tn); !Yr.done; ur++, Yr = et.next()) {
          var ll = O(wp, D, ur, Yr.value, B);
          ll !== null && (e && ll.alternate !== null && wp.delete(ll.key === null ? ur : ll.key), Dr = s(ll, Dr, ur), tt === null ? cn = ll : tt.sibling = ll, tt = ll);
        }
        if (e && wp.forEach(function(Q_) {
          return t(D, Q_);
        }), er()) {
          var I_ = ur;
          rs(D, I_);
        }
        return cn;
      }
      function Ee(D, z, _, B) {
        if (z !== null && z.tag === ze) {
          a(D, z.sibling);
          var te = u(z, _);
          return te.return = D, te;
        }
        a(D, z);
        var q = ZS(_, D.mode, B);
        return q.return = D, q;
      }
      function ve(D, z, _, B) {
        for (var te = _.key, q = z; q !== null; ) {
          if (q.key === te) {
            var we = _.type;
            if (we === xa) {
              if (q.tag === st) {
                a(D, q.sibling);
                var Oe = u(q, _.props.children);
                return Oe.return = D, Oe._debugSource = _._source, Oe._debugOwner = _._owner, Oe;
              }
            } else if (q.elementType === we || // Keep this check inline so it only runs on the false path:
            dC(q, _) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof we == "object" && we !== null && we.$$typeof === xe && lE(we) === q.type) {
              a(D, q.sibling);
              var mt = u(q, _.props);
              return mt.ref = Wd(D, q, _), mt.return = D, mt._debugSource = _._source, mt._debugOwner = _._owner, mt;
            }
            a(D, q);
            break;
          } else
            t(D, q);
          q = q.sibling;
        }
        if (_.type === xa) {
          var et = ao(_.props.children, D.mode, B, _.key);
          return et.return = D, et;
        } else {
          var cn = KS(_, D.mode, B);
          return cn.ref = Wd(D, z, _), cn.return = D, cn;
        }
      }
      function Xe(D, z, _, B) {
        for (var te = _.key, q = z; q !== null; ) {
          if (q.key === te)
            if (q.tag === he && q.stateNode.containerInfo === _.containerInfo && q.stateNode.implementation === _.implementation) {
              a(D, q.sibling);
              var we = u(q, _.children || []);
              return we.return = D, we;
            } else {
              a(D, q);
              break;
            }
          else
            t(D, q);
          q = q.sibling;
        }
        var Oe = JS(_, D.mode, B);
        return Oe.return = D, Oe;
      }
      function Ie(D, z, _, B) {
        var te = typeof _ == "object" && _ !== null && _.type === xa && _.key === null;
        if (te && (_ = _.props.children), typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case ri:
              return f(ve(D, z, _, B));
            case Mr:
              return f(Xe(D, z, _, B));
            case xe:
              var q = _._payload, we = _._init;
              return Ie(D, z, we(q), B);
          }
          if (mn(_))
            return N(D, z, _, B);
          if (Nr(_))
            return X(D, z, _, B);
          kh(D, _);
        }
        return typeof _ == "string" && _ !== "" || typeof _ == "number" ? f(Ee(D, z, "" + _, B)) : (typeof _ == "function" && Oh(D), a(D, z));
      }
      return Ie;
    }
    var Xc = uE(!0), oE = uE(!1);
    function Cx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ms(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ms(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Tx(e, t) {
      for (var a = e.child; a !== null; )
        s_(a, t), a = a.sibling;
    }
    var ag = Yu(null), ig;
    ig = {};
    var Lh = null, qc = null, lg = null, Mh = !1;
    function Nh() {
      Lh = null, qc = null, lg = null, Mh = !1;
    }
    function sE() {
      Mh = !0;
    }
    function cE() {
      Mh = !1;
    }
    function fE(e, t, a) {
      xr(ag, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ig && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ig;
    }
    function ug(e, t) {
      var a = ag.current;
      Rr(ag, t), e._currentValue = a;
    }
    function og(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Ol(i.childLanes, t) ? u !== null && !Ol(u.childLanes, t) && (u.childLanes = Me(u.childLanes, t)) : (i.childLanes = Me(i.childLanes, t), u !== null && (u.childLanes = Me(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Rx(e, t, a) {
      xx(e, t, a);
    }
    function xx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ue) {
                var p = wu(a), v = $l(xt, p);
                v.tag = Uh;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, x = y.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), y.pending = v;
                }
              }
              i.lanes = Me(i.lanes, a);
              var T = i.alternate;
              T !== null && (T.lanes = Me(T.lanes, a)), og(i.return, a, e), s.lanes = Me(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ke)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Vt) {
          var O = i.return;
          if (O === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          O.lanes = Me(O.lanes, a);
          var M = O.alternate;
          M !== null && (M.lanes = Me(M.lanes, a)), og(O, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var N = u.sibling;
            if (N !== null) {
              N.return = u.return, u = N;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Kc(e, t) {
      Lh = e, qc = null, lg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Cr(a.lanes, t) && op(), a.firstContext = null);
      }
    }
    function Tn(e) {
      Mh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (lg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (qc === null) {
          if (Lh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          qc = a, Lh.dependencies = {
            lanes: A,
            firstContext: a
          };
        } else
          qc = qc.next = a;
      }
      return t;
    }
    var os = null;
    function sg(e) {
      os === null ? os = [e] : os.push(e);
    }
    function wx() {
      if (os !== null) {
        for (var e = 0; e < os.length; e++) {
          var t = os[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        os = null;
      }
    }
    function dE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, zh(e, i);
    }
    function Dx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function _x(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, zh(e, i);
    }
    function pa(e, t) {
      return zh(e, t);
    }
    var bx = zh;
    function zh(e, t) {
      e.lanes = Me(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Me(a.lanes, t)), a === null && (e.flags & (bt | ta)) !== Se && oC(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Me(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Me(a.childLanes, t) : (u.flags & (bt | ta)) !== Se && oC(e), i = u, u = u.return;
      if (i.tag === ne) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var pE = 0, vE = 1, Uh = 2, cg = 3, Ah = !1, fg, Fh;
    fg = !1, Fh = null;
    function dg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: A
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function hE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function $l(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: pE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Gu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Fh === u && !fg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), fg = !0), DD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, bx(e, a);
      } else
        return _x(e, u, t, a);
    }
    function Hh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (od(a)) {
          var s = u.lanes;
          s = vc(s, e.pendingLanes);
          var f = Me(s, a);
          u.lanes = f, sd(e, f);
        }
      }
    }
    function pg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var m = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = m : (f.next = m, f = m), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var y = a.lastBaseUpdate;
      y === null ? a.firstBaseUpdate = t : y.next = t, a.lastBaseUpdate = t;
    }
    function kx(e, t, a, i, u, s) {
      switch (a.tag) {
        case vE: {
          var f = a.payload;
          if (typeof f == "function") {
            sE();
            var p = f.call(s, i, u);
            {
              if (e.mode & je) {
                Jt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Jt(!1);
                }
              }
              cE();
            }
            return p;
          }
          return f;
        }
        case cg:
          e.flags = e.flags & ~gn | De;
        case pE: {
          var v = a.payload, m;
          if (typeof v == "function") {
            sE(), m = v.call(s, i, u);
            {
              if (e.mode & je) {
                Jt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Jt(!1);
                }
              }
              cE();
            }
          } else
            m = v;
          return m == null ? i : He({}, i, m);
        }
        case Uh:
          return Ah = !0, i;
      }
      return i;
    }
    function jh(e, t, a, i) {
      var u = e.updateQueue;
      Ah = !1, Fh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, m = v.next;
        v.next = null, f === null ? s = m : f.next = m, f = v;
        var y = e.alternate;
        if (y !== null) {
          var x = y.updateQueue, T = x.lastBaseUpdate;
          T !== f && (T === null ? x.firstBaseUpdate = m : T.next = m, x.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var O = u.baseState, M = A, N = null, X = null, Ee = null, ve = s;
        do {
          var Xe = ve.lane, Ie = ve.eventTime;
          if (Ol(i, Xe)) {
            if (Ee !== null) {
              var z = {
                eventTime: Ie,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: en,
                tag: ve.tag,
                payload: ve.payload,
                callback: ve.callback,
                next: null
              };
              Ee = Ee.next = z;
            }
            O = kx(e, u, ve, O, t, a);
            var _ = ve.callback;
            if (_ !== null && // If the update was already committed, we should not queue its
            // callback again.
            ve.lane !== en) {
              e.flags |= Pa;
              var B = u.effects;
              B === null ? u.effects = [ve] : B.push(ve);
            }
          } else {
            var D = {
              eventTime: Ie,
              lane: Xe,
              tag: ve.tag,
              payload: ve.payload,
              callback: ve.callback,
              next: null
            };
            Ee === null ? (X = Ee = D, N = O) : Ee = Ee.next = D, M = Me(M, Xe);
          }
          if (ve = ve.next, ve === null) {
            if (p = u.shared.pending, p === null)
              break;
            var te = p, q = te.next;
            te.next = null, ve = q, u.lastBaseUpdate = te, u.shared.pending = null;
          }
        } while (!0);
        Ee === null && (N = O), u.baseState = N, u.firstBaseUpdate = X, u.lastBaseUpdate = Ee;
        var we = u.shared.interleaved;
        if (we !== null) {
          var Oe = we;
          do
            M = Me(M, Oe.lane), Oe = Oe.next;
          while (Oe !== we);
        } else
          s === null && (u.shared.lanes = A);
        Ep(M), e.lanes = M, e.memoizedState = O;
      }
      Fh = null;
    }
    function Ox(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function mE() {
      Ah = !1;
    }
    function Vh() {
      return Ah;
    }
    function yE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Ox(f, a));
        }
    }
    var Gd = {}, Xu = Yu(Gd), Xd = Yu(Gd), Bh = Yu(Gd);
    function Ph(e) {
      if (e === Gd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function gE() {
      var e = Ph(Bh.current);
      return e;
    }
    function vg(e, t) {
      xr(Bh, t, e), xr(Xd, e, e), xr(Xu, Gd, e);
      var a = WT(t);
      Rr(Xu, e), xr(Xu, a, e);
    }
    function Zc(e) {
      Rr(Xu, e), Rr(Xd, e), Rr(Bh, e);
    }
    function hg() {
      var e = Ph(Xu.current);
      return e;
    }
    function SE(e) {
      Ph(Bh.current);
      var t = Ph(Xu.current), a = GT(t, e.type);
      t !== a && (xr(Xd, e, e), xr(Xu, a, e));
    }
    function mg(e) {
      Xd.current === e && (Rr(Xu, e), Rr(Xd, e));
    }
    var Lx = 0, EE = 1, CE = 1, qd = 2, Ti = Yu(Lx);
    function yg(e, t) {
      return (e & t) !== 0;
    }
    function Jc(e) {
      return e & EE;
    }
    function gg(e, t) {
      return e & EE | t;
    }
    function Mx(e, t) {
      return e | t;
    }
    function qu(e, t) {
      xr(Ti, t, e);
    }
    function ef(e) {
      Rr(Ti, e);
    }
    function Nx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function $h(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === $e) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || H0(i) || Ay(i))
              return t;
          }
        } else if (t.tag === pt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & De) !== Se;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var va = (
      /*   */
      0
    ), Ln = (
      /* */
      1
    ), Ji = (
      /*  */
      2
    ), Mn = (
      /*    */
      4
    ), tr = (
      /*   */
      8
    ), Sg = [];
    function Eg() {
      for (var e = 0; e < Sg.length; e++) {
        var t = Sg[e];
        t._workInProgressVersionPrimary = null;
      }
      Sg.length = 0;
    }
    function zx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var J = k.ReactCurrentDispatcher, Kd = k.ReactCurrentBatchConfig, Cg, tf;
    Cg = /* @__PURE__ */ new Set();
    var ss = A, ht = null, Nn = null, zn = null, Yh = !1, Zd = !1, Jd = 0, Ux = 0, Ax = 25, U = null, Ka = null, Ku = -1, Tg = !1;
    function ot() {
      {
        var e = U;
        Ka === null ? Ka = [e] : Ka.push(e);
      }
    }
    function W() {
      {
        var e = U;
        Ka !== null && (Ku++, Ka[Ku] !== e && Fx(e));
      }
    }
    function nf(e) {
      e != null && !mn(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", U, typeof e);
    }
    function Fx(e) {
      {
        var t = Le(ht);
        if (!Cg.has(t) && (Cg.add(t), Ka !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ku; u++) {
            for (var s = Ka[u], f = u === Ku ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function wr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Rg(e, t) {
      if (Tg)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", U), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, U, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ie(e[a], t[a]))
          return !1;
      return !0;
    }
    function rf(e, t, a, i, u, s) {
      ss = s, ht = t, Ka = e !== null ? e._debugHookTypes : null, Ku = -1, Tg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = A, e !== null && e.memoizedState !== null ? J.current = $E : Ka !== null ? J.current = PE : J.current = BE;
      var f = a(i, u);
      if (Zd) {
        var p = 0;
        do {
          if (Zd = !1, Jd = 0, p >= Ax)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Tg = !1, Nn = null, zn = null, t.updateQueue = null, Ku = -1, J.current = YE, f = a(i, u);
        } while (Zd);
      }
      J.current = rm, t._debugHookTypes = Ka;
      var v = Nn !== null && Nn.next !== null;
      if (ss = A, ht = null, Nn = null, zn = null, U = null, Ka = null, Ku = -1, e !== null && (e.flags & bn) !== (t.flags & bn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & pe) !== fe && g("Internal React error: Expected static flag was missing. Please notify the React team."), Yh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function af() {
      var e = Jd !== 0;
      return Jd = 0, e;
    }
    function TE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & jr) !== fe ? t.flags &= ~(Cl | hr | Mt | Ne) : t.flags &= ~(Mt | Ne), e.lanes = Vo(e.lanes, a);
    }
    function RE() {
      if (J.current = rm, Yh) {
        for (var e = ht.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Yh = !1;
      }
      ss = A, ht = null, Nn = null, zn = null, Ka = null, Ku = -1, U = null, AE = !1, Zd = !1, Jd = 0;
    }
    function el() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return zn === null ? ht.memoizedState = zn = e : zn = zn.next = e, zn;
    }
    function Za() {
      var e;
      if (Nn === null) {
        var t = ht.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Nn.next;
      var a;
      if (zn === null ? a = ht.memoizedState : a = zn.next, a !== null)
        zn = a, a = zn.next, Nn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Nn = e;
        var i = {
          memoizedState: Nn.memoizedState,
          baseState: Nn.baseState,
          baseQueue: Nn.baseQueue,
          queue: Nn.queue,
          next: null
        };
        zn === null ? ht.memoizedState = zn = i : zn = zn.next = i;
      }
      return zn;
    }
    function xE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function xg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function wg(e, t, a) {
      var i = el(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: A,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Bx.bind(null, ht, s);
      return [i.memoizedState, f];
    }
    function Dg(e, t, a) {
      var i = Za(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Nn, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, m = p.next;
          f.next = m, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var y = f.next, x = s.baseState, T = null, O = null, M = null, N = y;
        do {
          var X = N.lane;
          if (Ol(ss, X)) {
            if (M !== null) {
              var ve = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: en,
                action: N.action,
                hasEagerState: N.hasEagerState,
                eagerState: N.eagerState,
                next: null
              };
              M = M.next = ve;
            }
            if (N.hasEagerState)
              x = N.eagerState;
            else {
              var Xe = N.action;
              x = e(x, Xe);
            }
          } else {
            var Ee = {
              lane: X,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            };
            M === null ? (O = M = Ee, T = x) : M = M.next = Ee, ht.lanes = Me(ht.lanes, X), Ep(X);
          }
          N = N.next;
        } while (N !== null && N !== y);
        M === null ? T = x : M.next = O, ie(x, i.memoizedState) || op(), i.memoizedState = x, i.baseState = T, i.baseQueue = M, u.lastRenderedState = x;
      }
      var Ie = u.interleaved;
      if (Ie !== null) {
        var D = Ie;
        do {
          var z = D.lane;
          ht.lanes = Me(ht.lanes, z), Ep(z), D = D.next;
        } while (D !== Ie);
      } else
        f === null && (u.lanes = A);
      var _ = u.dispatch;
      return [i.memoizedState, _];
    }
    function _g(e, t, a) {
      var i = Za(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, m = v;
        do {
          var y = m.action;
          p = e(p, y), m = m.next;
        } while (m !== v);
        ie(p, i.memoizedState) || op(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Xb(e, t, a) {
    }
    function qb(e, t, a) {
    }
    function bg(e, t, a) {
      var i = ht, u = el(), s, f = er();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), tf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), tf = !0);
      } else {
        if (s = t(), !tf) {
          var p = t();
          ie(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), tf = !0);
        }
        var v = Tm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        jo(v, ss) || wE(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, Xh(_E.bind(null, i, m, e), [e]), i.flags |= Mt, ep(Ln | tr, DE.bind(null, i, m, s, t), void 0, null), s;
    }
    function Ih(e, t, a) {
      var i = ht, u = Za(), s = t();
      if (!tf) {
        var f = t();
        ie(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), tf = !0);
      }
      var p = u.memoizedState, v = !ie(p, s);
      v && (u.memoizedState = s, op());
      var m = u.queue;
      if (np(_E.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      zn !== null && zn.memoizedState.tag & Ln) {
        i.flags |= Mt, ep(Ln | tr, DE.bind(null, i, m, s, t), void 0, null);
        var y = Tm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        jo(y, ss) || wE(i, t, s);
      }
      return s;
    }
    function wE(e, t, a) {
      e.flags |= ko;
      var i = {
        getSnapshot: t,
        value: a
      }, u = ht.updateQueue;
      if (u === null)
        u = xE(), ht.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function DE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, bE(t) && kE(e);
    }
    function _E(e, t, a) {
      var i = function() {
        bE(t) && kE(e);
      };
      return a(i);
    }
    function bE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ie(a, i);
      } catch {
        return !0;
      }
    }
    function kE(e) {
      var t = pa(e, ye);
      t !== null && Hn(t, e, ye, xt);
    }
    function Qh(e) {
      var t = el();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: A,
        dispatch: null,
        lastRenderedReducer: xg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Px.bind(null, ht, a);
      return [t.memoizedState, i];
    }
    function kg(e) {
      return Dg(xg);
    }
    function Og(e) {
      return _g(xg);
    }
    function ep(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = ht.updateQueue;
      if (s === null)
        s = xE(), ht.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Lg(e) {
      var t = el();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Wh(e) {
      var t = Za();
      return t.memoizedState;
    }
    function tp(e, t, a, i) {
      var u = el(), s = i === void 0 ? null : i;
      ht.flags |= e, u.memoizedState = ep(Ln | t, a, void 0, s);
    }
    function Gh(e, t, a, i) {
      var u = Za(), s = i === void 0 ? null : i, f = void 0;
      if (Nn !== null) {
        var p = Nn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Rg(s, v)) {
            u.memoizedState = ep(t, a, f, s);
            return;
          }
        }
      }
      ht.flags |= e, u.memoizedState = ep(Ln | t, a, f, s);
    }
    function Xh(e, t) {
      return (ht.mode & jr) !== fe ? tp(Cl | Mt | Bi, tr, e, t) : tp(Mt | Bi, tr, e, t);
    }
    function np(e, t) {
      return Gh(Mt, tr, e, t);
    }
    function Mg(e, t) {
      return tp(Ne, Ji, e, t);
    }
    function qh(e, t) {
      return Gh(Ne, Ji, e, t);
    }
    function Ng(e, t) {
      var a = Ne;
      return a |= vr, (ht.mode & jr) !== fe && (a |= hr), tp(a, Mn, e, t);
    }
    function Kh(e, t) {
      return Gh(Ne, Mn, e, t);
    }
    function OE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function zg(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ne;
      return u |= vr, (ht.mode & jr) !== fe && (u |= hr), tp(u, Mn, OE.bind(null, t, e), i);
    }
    function Zh(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Gh(Ne, Mn, OE.bind(null, t, e), i);
    }
    function Hx(e, t) {
    }
    var Jh = Hx;
    function Ug(e, t) {
      var a = el(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function em(e, t) {
      var a = Za(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Rg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ag(e, t) {
      var a = el(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function tm(e, t) {
      var a = Za(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Rg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Fg(e) {
      var t = el();
      return t.memoizedState = e, e;
    }
    function LE(e) {
      var t = Za(), a = Nn, i = a.memoizedState;
      return NE(t, i, e);
    }
    function ME(e) {
      var t = Za();
      if (Nn === null)
        return t.memoizedState = e, e;
      var a = Nn.memoizedState;
      return NE(t, a, e);
    }
    function NE(e, t, a) {
      var i = !Lv(ss);
      if (i) {
        if (!ie(a, t)) {
          var u = zv();
          ht.lanes = Me(ht.lanes, u), Ep(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, op()), e.memoizedState = a, a;
    }
    function jx(e, t, a) {
      var i = ua();
      Pt(ry(i, hi)), e(!0);
      var u = Kd.transition;
      Kd.transition = {};
      var s = Kd.transition;
      Kd.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Pt(i), Kd.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ve("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Hg() {
      var e = Qh(!1), t = e[0], a = e[1], i = jx.bind(null, a), u = el();
      return u.memoizedState = i, [t, i];
    }
    function zE() {
      var e = kg(), t = e[0], a = Za(), i = a.memoizedState;
      return [t, i];
    }
    function UE() {
      var e = Og(), t = e[0], a = Za(), i = a.memoizedState;
      return [t, i];
    }
    var AE = !1;
    function Vx() {
      return AE;
    }
    function jg() {
      var e = el(), t = Tm(), a = t.identifierPrefix, i;
      if (er()) {
        var u = rx();
        i = ":" + a + "R" + u;
        var s = Jd++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Ux++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function nm() {
      var e = Za(), t = e.memoizedState;
      return t;
    }
    function Bx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = no(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (FE(e))
        HE(t, u);
      else {
        var s = dE(e, t, u, i);
        if (s !== null) {
          var f = $r();
          Hn(s, e, i, f), jE(s, t, i);
        }
      }
      VE(e, i);
    }
    function Px(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = no(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (FE(e))
        HE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === A && (s === null || s.lanes === A)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = J.current, J.current = Ri;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, ie(m, v)) {
                Dx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              J.current = p;
            }
          }
        }
        var y = dE(e, t, u, i);
        if (y !== null) {
          var x = $r();
          Hn(y, e, i, x), jE(y, t, i);
        }
      }
      VE(e, i);
    }
    function FE(e) {
      var t = e.alternate;
      return e === ht || t !== null && t === ht;
    }
    function HE(e, t) {
      Zd = Yh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function jE(e, t, a) {
      if (od(a)) {
        var i = t.lanes;
        i = vc(i, e.pendingLanes);
        var u = Me(i, a);
        t.lanes = u, sd(e, u);
      }
    }
    function VE(e, t, a) {
      No(e, t);
    }
    var rm = {
      readContext: Tn,
      useCallback: wr,
      useContext: wr,
      useEffect: wr,
      useImperativeHandle: wr,
      useInsertionEffect: wr,
      useLayoutEffect: wr,
      useMemo: wr,
      useReducer: wr,
      useRef: wr,
      useState: wr,
      useDebugValue: wr,
      useDeferredValue: wr,
      useTransition: wr,
      useMutableSource: wr,
      useSyncExternalStore: wr,
      useId: wr,
      unstable_isNewReconciler: Y
    }, BE = null, PE = null, $E = null, YE = null, tl = null, Ri = null, am = null;
    {
      var Vg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ke = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      BE = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", ot(), nf(t), Ug(e, t);
        },
        useContext: function(e) {
          return U = "useContext", ot(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", ot(), nf(t), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", ot(), nf(a), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", ot(), nf(t), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ot(), nf(t), Ng(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ot(), nf(t);
          var a = J.current;
          J.current = tl;
          try {
            return Ag(e, t);
          } finally {
            J.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ot();
          var i = J.current;
          J.current = tl;
          try {
            return wg(e, t, a);
          } finally {
            J.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ot(), Lg(e);
        },
        useState: function(e) {
          U = "useState", ot();
          var t = J.current;
          J.current = tl;
          try {
            return Qh(e);
          } finally {
            J.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ot(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ot(), Fg(e);
        },
        useTransition: function() {
          return U = "useTransition", ot(), Hg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", ot(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", ot(), bg(e, t, a);
        },
        useId: function() {
          return U = "useId", ot(), jg();
        },
        unstable_isNewReconciler: Y
      }, PE = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", W(), Ug(e, t);
        },
        useContext: function(e) {
          return U = "useContext", W(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", W(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", W(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", W(), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", W(), Ng(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", W();
          var a = J.current;
          J.current = tl;
          try {
            return Ag(e, t);
          } finally {
            J.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", W();
          var i = J.current;
          J.current = tl;
          try {
            return wg(e, t, a);
          } finally {
            J.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", W(), Lg(e);
        },
        useState: function(e) {
          U = "useState", W();
          var t = J.current;
          J.current = tl;
          try {
            return Qh(e);
          } finally {
            J.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", W(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", W(), Fg(e);
        },
        useTransition: function() {
          return U = "useTransition", W(), Hg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", W(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", W(), bg(e, t, a);
        },
        useId: function() {
          return U = "useId", W(), jg();
        },
        unstable_isNewReconciler: Y
      }, $E = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", W(), em(e, t);
        },
        useContext: function(e) {
          return U = "useContext", W(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", W(), np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", W(), Zh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", W(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", W(), Kh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", W();
          var a = J.current;
          J.current = Ri;
          try {
            return tm(e, t);
          } finally {
            J.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", W();
          var i = J.current;
          J.current = Ri;
          try {
            return Dg(e, t, a);
          } finally {
            J.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", W(), Wh();
        },
        useState: function(e) {
          U = "useState", W();
          var t = J.current;
          J.current = Ri;
          try {
            return kg(e);
          } finally {
            J.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", W(), Jh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", W(), LE(e);
        },
        useTransition: function() {
          return U = "useTransition", W(), zE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", W(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", W(), Ih(e, t);
        },
        useId: function() {
          return U = "useId", W(), nm();
        },
        unstable_isNewReconciler: Y
      }, YE = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", W(), em(e, t);
        },
        useContext: function(e) {
          return U = "useContext", W(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", W(), np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", W(), Zh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", W(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", W(), Kh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", W();
          var a = J.current;
          J.current = am;
          try {
            return tm(e, t);
          } finally {
            J.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", W();
          var i = J.current;
          J.current = am;
          try {
            return _g(e, t, a);
          } finally {
            J.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", W(), Wh();
        },
        useState: function(e) {
          U = "useState", W();
          var t = J.current;
          J.current = am;
          try {
            return Og(e);
          } finally {
            J.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", W(), Jh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", W(), ME(e);
        },
        useTransition: function() {
          return U = "useTransition", W(), UE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", W(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", W(), Ih(e, t);
        },
        useId: function() {
          return U = "useId", W(), nm();
        },
        unstable_isNewReconciler: Y
      }, tl = {
        readContext: function(e) {
          return Vg(), Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", ke(), ot(), Ug(e, t);
        },
        useContext: function(e) {
          return U = "useContext", ke(), ot(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", ke(), ot(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", ke(), ot(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", ke(), ot(), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ke(), ot(), Ng(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ke(), ot();
          var a = J.current;
          J.current = tl;
          try {
            return Ag(e, t);
          } finally {
            J.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ke(), ot();
          var i = J.current;
          J.current = tl;
          try {
            return wg(e, t, a);
          } finally {
            J.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ke(), ot(), Lg(e);
        },
        useState: function(e) {
          U = "useState", ke(), ot();
          var t = J.current;
          J.current = tl;
          try {
            return Qh(e);
          } finally {
            J.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ke(), ot(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ke(), ot(), Fg(e);
        },
        useTransition: function() {
          return U = "useTransition", ke(), ot(), Hg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", ke(), ot(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", ke(), ot(), bg(e, t, a);
        },
        useId: function() {
          return U = "useId", ke(), ot(), jg();
        },
        unstable_isNewReconciler: Y
      }, Ri = {
        readContext: function(e) {
          return Vg(), Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", ke(), W(), em(e, t);
        },
        useContext: function(e) {
          return U = "useContext", ke(), W(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", ke(), W(), np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", ke(), W(), Zh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", ke(), W(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ke(), W(), Kh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ke(), W();
          var a = J.current;
          J.current = Ri;
          try {
            return tm(e, t);
          } finally {
            J.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ke(), W();
          var i = J.current;
          J.current = Ri;
          try {
            return Dg(e, t, a);
          } finally {
            J.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ke(), W(), Wh();
        },
        useState: function(e) {
          U = "useState", ke(), W();
          var t = J.current;
          J.current = Ri;
          try {
            return kg(e);
          } finally {
            J.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ke(), W(), Jh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ke(), W(), LE(e);
        },
        useTransition: function() {
          return U = "useTransition", ke(), W(), zE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", ke(), W(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", ke(), W(), Ih(e, t);
        },
        useId: function() {
          return U = "useId", ke(), W(), nm();
        },
        unstable_isNewReconciler: Y
      }, am = {
        readContext: function(e) {
          return Vg(), Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", ke(), W(), em(e, t);
        },
        useContext: function(e) {
          return U = "useContext", ke(), W(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", ke(), W(), np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", ke(), W(), Zh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", ke(), W(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ke(), W(), Kh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ke(), W();
          var a = J.current;
          J.current = Ri;
          try {
            return tm(e, t);
          } finally {
            J.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ke(), W();
          var i = J.current;
          J.current = Ri;
          try {
            return _g(e, t, a);
          } finally {
            J.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ke(), W(), Wh();
        },
        useState: function(e) {
          U = "useState", ke(), W();
          var t = J.current;
          J.current = Ri;
          try {
            return Og(e);
          } finally {
            J.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ke(), W(), Jh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ke(), W(), ME(e);
        },
        useTransition: function() {
          return U = "useTransition", ke(), W(), UE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", ke(), W(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", ke(), W(), Ih(e, t);
        },
        useId: function() {
          return U = "useId", ke(), W(), nm();
        },
        unstable_isNewReconciler: Y
      };
    }
    var Zu = K.unstable_now, IE = 0, im = -1, rp = -1, lm = -1, Bg = !1, um = !1;
    function QE() {
      return Bg;
    }
    function $x() {
      um = !0;
    }
    function Yx() {
      Bg = !1, um = !1;
    }
    function Ix() {
      Bg = um, um = !1;
    }
    function WE() {
      return IE;
    }
    function GE() {
      IE = Zu();
    }
    function Pg(e) {
      rp = Zu(), e.actualStartTime < 0 && (e.actualStartTime = Zu());
    }
    function XE(e) {
      rp = -1;
    }
    function om(e, t) {
      if (rp >= 0) {
        var a = Zu() - rp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), rp = -1;
      }
    }
    function nl(e) {
      if (im >= 0) {
        var t = Zu() - im;
        im = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ne:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case gt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function $g(e) {
      if (lm >= 0) {
        var t = Zu() - lm;
        lm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ne:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case gt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function rl() {
      im = Zu();
    }
    function Yg() {
      lm = Zu();
    }
    function Ig(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function xi(e, t) {
      if (e && e.defaultProps) {
        var a = He({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Qg = {}, Wg, Gg, Xg, qg, Kg, qE, sm, Zg, Jg, eS, ap;
    {
      Wg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), ap = /* @__PURE__ */ new Set();
      var KE = /* @__PURE__ */ new Set();
      sm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          KE.has(a) || (KE.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, qE = function(e, t) {
        if (t === void 0) {
          var a = dt(e) || "Component";
          Kg.has(a) || (Kg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Qg);
    }
    function tS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & je) {
          Jt(!0);
          try {
            s = a(i, u);
          } finally {
            Jt(!1);
          }
        }
        qE(t, s);
      }
      var f = s == null ? u : He({}, u, s);
      if (e.memoizedState = f, e.lanes === A) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var nS = {
      isMounted: Fr,
      enqueueSetState: function(e, t, a) {
        var i = Jr(e), u = $r(), s = no(i), f = $l(u, s);
        f.payload = t, a != null && (sm(a, "setState"), f.callback = a);
        var p = Gu(i, f, s);
        p !== null && (Hn(p, i, s, u), Hh(p, i, s)), No(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Jr(e), u = $r(), s = no(i), f = $l(u, s);
        f.tag = vE, f.payload = t, a != null && (sm(a, "replaceState"), f.callback = a);
        var p = Gu(i, f, s);
        p !== null && (Hn(p, i, s, u), Hh(p, i, s)), No(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Jr(e), i = $r(), u = no(a), s = $l(i, u);
        s.tag = Uh, t != null && (sm(t, "forceUpdate"), s.callback = t);
        var f = Gu(a, s, u);
        f !== null && (Hn(f, a, u, i), Hh(f, a, u)), Ks(a, u);
      }
    };
    function ZE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & je) {
            Jt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Jt(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", dt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Re(a, i) || !Re(u, s) : !0;
    }
    function Qx(e, t, a) {
      var i = e.stateNode;
      {
        var u = dt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & je) === fe && (ap.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & je) === fe && (ap.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Jg.has(t) && (Jg.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", dt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Xg.has(t) && (Xg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", dt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || mn(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function JE(e, t) {
      t.updater = nS, e.stateNode = t, fu(t, e), t._reactInternalInstance = Qg;
    }
    function e1(e, t, a) {
      var i = !1, u = Ma, s = Ma, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === j && f._context === void 0
        );
        if (!p && !eS.has(t)) {
          eS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === E ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", dt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Tn(f);
      else {
        u = Yc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? Ic(e, u) : Ma;
      }
      var y = new t(a, s);
      if (e.mode & je) {
        Jt(!0);
        try {
          y = new t(a, s);
        } finally {
          Jt(!1);
        }
      }
      var x = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      JE(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var T = dt(t) || "Component";
          Gg.has(T) || (Gg.add(T), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", T, y.state === null ? "null" : "undefined", T));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var O = null, M = null, N = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? O = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (O = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? M = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (M = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? N = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (N = "UNSAFE_componentWillUpdate"), O !== null || M !== null || N !== null) {
            var X = dt(t) || "Component", Ee = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            qg.has(X) || (qg.add(X), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, X, Ee, O !== null ? `
  ` + O : "", M !== null ? `
  ` + M : "", N !== null ? `
  ` + N : ""));
          }
        }
      }
      return i && $0(e, u, s), y;
    }
    function Wx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Le(e) || "Component"), nS.enqueueReplaceState(t, t.state, null));
    }
    function t1(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Le(e) || "Component";
          Wg.has(s) || (Wg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        nS.enqueueReplaceState(t, t.state, null);
      }
    }
    function rS(e, t, a, i) {
      Qx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, dg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Tn(s);
      else {
        var f = Yc(e, t, !0);
        u.context = Ic(e, f);
      }
      {
        if (u.state === a) {
          var p = dt(t) || "Component";
          Zg.has(p) || (Zg.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & je && Ci.recordLegacyContextWarning(e, u), Ci.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (tS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Wx(e, u), jh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = Ne;
        m |= vr, (e.mode & jr) !== fe && (m |= hr), e.flags |= m;
      }
    }
    function Gx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = Ma;
      if (typeof p == "object" && p !== null)
        v = Tn(p);
      else {
        var m = Yc(e, t, !0);
        v = Ic(e, m);
      }
      var y = t.getDerivedStateFromProps, x = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && t1(e, u, a, v), mE();
      var T = e.memoizedState, O = u.state = T;
      if (jh(e, a, u, i), O = e.memoizedState, s === a && T === O && !Eh() && !Vh()) {
        if (typeof u.componentDidMount == "function") {
          var M = Ne;
          M |= vr, (e.mode & jr) !== fe && (M |= hr), e.flags |= M;
        }
        return !1;
      }
      typeof y == "function" && (tS(e, t, y, a), O = e.memoizedState);
      var N = Vh() || ZE(e, t, s, a, T, O, v);
      if (N) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var X = Ne;
          X |= vr, (e.mode & jr) !== fe && (X |= hr), e.flags |= X;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ee = Ne;
          Ee |= vr, (e.mode & jr) !== fe && (Ee |= hr), e.flags |= Ee;
        }
        e.memoizedProps = a, e.memoizedState = O;
      }
      return u.props = a, u.state = O, u.context = v, N;
    }
    function Xx(e, t, a, i, u) {
      var s = t.stateNode;
      hE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : xi(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, x = Ma;
      if (typeof y == "object" && y !== null)
        x = Tn(y);
      else {
        var T = Yc(t, a, !0);
        x = Ic(t, T);
      }
      var O = a.getDerivedStateFromProps, M = typeof O == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !M && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== x) && t1(t, s, i, x), mE();
      var N = t.memoizedState, X = s.state = N;
      if (jh(t, i, s, u), X = t.memoizedState, f === v && N === X && !Eh() && !Vh() && !Ce)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= Ne), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= ea), !1;
      typeof O == "function" && (tS(t, a, O, i), X = t.memoizedState);
      var Ee = Vh() || ZE(t, a, p, i, N, X, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ce;
      return Ee ? (!M && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, X, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, X, x)), typeof s.componentDidUpdate == "function" && (t.flags |= Ne), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ea)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= Ne), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= ea), t.memoizedProps = i, t.memoizedState = X), s.props = i, s.state = X, s.context = x, Ee;
    }
    function cs(e, t) {
      return {
        value: e,
        source: t,
        stack: Sf(t),
        digest: null
      };
    }
    function aS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function qx(e, t) {
      return !0;
    }
    function iS(e, t) {
      try {
        var a = qx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ue)
            return;
          console.error(i);
        }
        var p = u ? Le(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === ne)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Le(e) || "Anonymous";
          m = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + y + ".");
        }
        var x = v + `
` + f + `

` + ("" + m);
        console.error(x);
      } catch (T) {
        setTimeout(function() {
          throw T;
        });
      }
    }
    var Kx = typeof WeakMap == "function" ? WeakMap : Map;
    function n1(e, t, a) {
      var i = $l(xt, a);
      i.tag = cg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        $D(u), iS(e, t);
      }, i;
    }
    function lS(e, t, a) {
      var i = $l(xt, a);
      i.tag = cg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          pC(e), iS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        pC(e), iS(e, t), typeof u != "function" && BD(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Cr(e.lanes, ye) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Le(e) || "Unknown"));
      }), i;
    }
    function r1(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Kx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = YD.bind(null, e, t, a);
        Hr && Cp(e, a), t.then(s, s);
      }
    }
    function Zx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Jx(e, t) {
      var a = e.tag;
      if ((e.mode & pe) === fe && (a === ce || a === Be || a === Ue)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function a1(e) {
      var t = e;
      do {
        if (t.tag === $e && Nx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function i1(e, t, a, i, u) {
      if ((e.mode & pe) === fe) {
        if (e === t)
          e.flags |= gn;
        else {
          if (e.flags |= De, a.flags |= Oo, a.flags &= ~(js | Ur), a.tag === ue) {
            var s = a.alternate;
            if (s === null)
              a.tag = jn;
            else {
              var f = $l(xt, ye);
              f.tag = Uh, Gu(a, f, ye);
            }
          }
          a.lanes = Me(a.lanes, ye);
        }
        return e;
      }
      return e.flags |= gn, e.lanes = u, e;
    }
    function ew(e, t, a, i, u) {
      if (a.flags |= Ur, Hr && Cp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Jx(a), er() && a.mode & pe && q0();
        var f = a1(t);
        if (f !== null) {
          f.flags &= ~Bt, i1(f, t, a, e, u), f.mode & pe && r1(e, s, u), Zx(f, e, s);
          return;
        } else {
          if (!ud(u)) {
            r1(e, s, u), jS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (er() && a.mode & pe) {
        q0();
        var v = a1(t);
        if (v !== null) {
          (v.flags & gn) === Se && (v.flags |= Bt), i1(v, t, a, e, u), Zy(cs(i, a));
          return;
        }
      }
      i = cs(i, a), ND(i);
      var m = t;
      do {
        switch (m.tag) {
          case ne: {
            var y = i;
            m.flags |= gn;
            var x = wu(u);
            m.lanes = Me(m.lanes, x);
            var T = n1(m, y, x);
            pg(m, T);
            return;
          }
          case ue:
            var O = i, M = m.type, N = m.stateNode;
            if ((m.flags & De) === Se && (typeof M.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && !aC(N))) {
              m.flags |= gn;
              var X = wu(u);
              m.lanes = Me(m.lanes, X);
              var Ee = lS(m, O, X);
              pg(m, Ee);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function tw() {
      return null;
    }
    var ip = k.ReactCurrentOwner, wi = !1, uS, lp, oS, sS, cS, fs, fS, cm, up;
    uS = {}, lp = {}, oS = {}, sS = {}, cS = {}, fs = !1, fS = {}, cm = {}, up = {};
    function Br(e, t, a, i) {
      e === null ? t.child = oE(t, null, a, i) : t.child = Xc(t, e.child, a, i);
    }
    function nw(e, t, a, i) {
      t.child = Xc(t, e.child, null, i), t.child = Xc(t, null, a, i);
    }
    function l1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Si(
          s,
          i,
          // Resolved props
          "prop",
          dt(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      Kc(t, u), hu(t);
      {
        if (ip.current = t, _a(!0), v = rf(e, t, f, i, p, u), m = af(), t.mode & je) {
          Jt(!0);
          try {
            v = rf(e, t, f, i, p, u), m = af();
          } finally {
            Jt(!1);
          }
        }
        _a(!1);
      }
      return gr(), e !== null && !wi ? (TE(e, t, u), Yl(e, t, u)) : (er() && m && Qy(t), t.flags |= ji, Br(e, t, v, u), t.child);
    }
    function u1(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (u_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = pf(s), t.tag = Ue, t.type = f, vS(t, s), o1(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Si(
            p,
            i,
            // Resolved props
            "prop",
            dt(s)
          ), a.defaultProps !== void 0) {
            var v = dt(s) || "Unknown";
            up[v] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), up[v] = !0);
          }
        }
        var m = qS(a.type, null, i, t, t.mode, u);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var y = a.type, x = y.propTypes;
        x && Si(
          x,
          i,
          // Resolved props
          "prop",
          dt(y)
        );
      }
      var T = e.child, O = ES(e, u);
      if (!O) {
        var M = T.memoizedProps, N = a.compare;
        if (N = N !== null ? N : Re, N(M, i) && e.ref === t.ref)
          return Yl(e, t, u);
      }
      t.flags |= ji;
      var X = ms(T, i);
      return X.ref = t.ref, X.return = t, t.child = X, X;
    }
    function o1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === xe) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && Si(
            m,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            dt(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (Re(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (wi = !1, t.pendingProps = i = y, ES(e, u))
            (e.flags & Oo) !== Se && (wi = !0);
          else
            return t.lanes = e.lanes, Yl(e, t, u);
      }
      return dS(e, t, a, i, u);
    }
    function s1(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ee)
        if ((t.mode & pe) === fe) {
          var f = {
            baseLanes: A,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Rm(t, a);
        } else if (Cr(a, Wn)) {
          var x = {
            baseLanes: A,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var T = s !== null ? s.baseLanes : a;
          Rm(t, T);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = Me(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = Wn;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, Rm(t, v), null;
        }
      else {
        var O;
        s !== null ? (O = Me(s.baseLanes, a), t.memoizedState = null) : O = a, Rm(t, O);
      }
      return Br(e, t, u, a), t.child;
    }
    function rw(e, t, a) {
      var i = t.pendingProps;
      return Br(e, t, i, a), t.child;
    }
    function aw(e, t, a) {
      var i = t.pendingProps.children;
      return Br(e, t, i, a), t.child;
    }
    function iw(e, t, a) {
      {
        t.flags |= Ne;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Br(e, t, s, a), t.child;
    }
    function c1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= pr, t.flags |= Gf);
    }
    function dS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Si(
          s,
          i,
          // Resolved props
          "prop",
          dt(a)
        );
      }
      var f;
      {
        var p = Yc(t, a, !0);
        f = Ic(t, p);
      }
      var v, m;
      Kc(t, u), hu(t);
      {
        if (ip.current = t, _a(!0), v = rf(e, t, a, i, f, u), m = af(), t.mode & je) {
          Jt(!0);
          try {
            v = rf(e, t, a, i, f, u), m = af();
          } finally {
            Jt(!1);
          }
        }
        _a(!1);
      }
      return gr(), e !== null && !wi ? (TE(e, t, u), Yl(e, t, u)) : (er() && m && Qy(t), t.flags |= ji, Br(e, t, v, u), t.child);
    }
    function f1(e, t, a, i, u) {
      {
        switch (T_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= De, t.flags |= gn;
            var m = new Error("Simulated error coming from DevTools"), y = wu(u);
            t.lanes = Me(t.lanes, y);
            var x = lS(t, cs(m, t), y);
            pg(t, x);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var T = a.propTypes;
          T && Si(
            T,
            i,
            // Resolved props
            "prop",
            dt(a)
          );
        }
      }
      var O;
      Zi(a) ? (O = !0, Th(t)) : O = !1, Kc(t, u);
      var M = t.stateNode, N;
      M === null ? (dm(e, t), e1(t, a, i), rS(t, a, i, u), N = !0) : e === null ? N = Gx(t, a, i, u) : N = Xx(e, t, a, i, u);
      var X = pS(e, t, a, N, O, u);
      {
        var Ee = t.stateNode;
        N && Ee.props !== i && (fs || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Le(t) || "a component"), fs = !0);
      }
      return X;
    }
    function pS(e, t, a, i, u, s) {
      c1(e, t);
      var f = (t.flags & De) !== Se;
      if (!i && !f)
        return u && Q0(t, a, !1), Yl(e, t, s);
      var p = t.stateNode;
      ip.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, XE();
      else {
        hu(t);
        {
          if (_a(!0), v = p.render(), t.mode & je) {
            Jt(!0);
            try {
              p.render();
            } finally {
              Jt(!1);
            }
          }
          _a(!1);
        }
        gr();
      }
      return t.flags |= ji, e !== null && f ? nw(e, t, v, s) : Br(e, t, v, s), t.memoizedState = p.state, u && Q0(t, a, !0), t.child;
    }
    function d1(e) {
      var t = e.stateNode;
      t.pendingContext ? Y0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Y0(e, t.context, !1), vg(e, t.containerInfo);
    }
    function lw(e, t, a) {
      if (d1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      hE(e, t), jh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, m = t.updateQueue;
        if (m.baseState = v, t.memoizedState = v, t.flags & Bt) {
          var y = cs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return p1(e, t, p, a, y);
        } else if (p !== s) {
          var x = cs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return p1(e, t, p, a, x);
        } else {
          sx(t);
          var T = oE(t, null, p, a);
          t.child = T;
          for (var O = T; O; )
            O.flags = O.flags & ~bt | ta, O = O.sibling;
        }
      } else {
        if (Gc(), p === s)
          return Yl(e, t, a);
        Br(e, t, p, a);
      }
      return t.child;
    }
    function p1(e, t, a, i, u) {
      return Gc(), Zy(u), t.flags |= Bt, Br(e, t, a, i), t.child;
    }
    function uw(e, t, a) {
      SE(t), e === null && Ky(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = My(i, u);
      return p ? f = null : s !== null && My(i, s) && (t.flags |= ut), c1(e, t), Br(e, t, f, a), t.child;
    }
    function ow(e, t) {
      return e === null && Ky(t), null;
    }
    function sw(e, t, a, i) {
      dm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = o_(v), y = xi(v, u), x;
      switch (m) {
        case ce:
          return vS(t, v), t.type = v = pf(v), x = dS(null, t, v, y, i), x;
        case ue:
          return t.type = v = YS(v), x = f1(null, t, v, y, i), x;
        case Be:
          return t.type = v = IS(v), x = l1(null, t, v, y, i), x;
        case wt: {
          if (t.type !== t.elementType) {
            var T = v.propTypes;
            T && Si(
              T,
              y,
              // Resolved for outer only
              "prop",
              dt(v)
            );
          }
          return x = u1(
            null,
            t,
            v,
            xi(v.type, y),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var O = "";
      throw v !== null && typeof v == "object" && v.$$typeof === xe && (O = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + O));
    }
    function cw(e, t, a, i, u) {
      dm(e, t), t.tag = ue;
      var s;
      return Zi(a) ? (s = !0, Th(t)) : s = !1, Kc(t, u), e1(t, a, i), rS(t, a, i, u), pS(null, t, a, !0, s, u);
    }
    function fw(e, t, a, i) {
      dm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Yc(t, a, !1);
        s = Ic(t, f);
      }
      Kc(t, i);
      var p, v;
      hu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = dt(a) || "Unknown";
          uS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), uS[m] = !0);
        }
        t.mode & je && Ci.recordLegacyContextWarning(t, null), _a(!0), ip.current = t, p = rf(null, t, a, u, s, i), v = af(), _a(!1);
      }
      if (gr(), t.flags |= ji, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = dt(a) || "Unknown";
        lp[y] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), lp[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = dt(a) || "Unknown";
          lp[x] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), lp[x] = !0);
        }
        t.tag = ue, t.memoizedState = null, t.updateQueue = null;
        var T = !1;
        return Zi(a) ? (T = !0, Th(t)) : T = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, dg(t), JE(t, p), rS(t, a, u, i), pS(null, t, a, !0, T, i);
      } else {
        if (t.tag = ce, t.mode & je) {
          Jt(!0);
          try {
            p = rf(null, t, a, u, s, i), v = af();
          } finally {
            Jt(!1);
          }
        }
        return er() && v && Qy(t), Br(null, t, p, i), vS(t, a), t.child;
      }
    }
    function vS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), cS[u] || (cS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = dt(t) || "Unknown";
          up[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), up[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = dt(t) || "Unknown";
          sS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), sS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = dt(t) || "Unknown";
          oS[v] || (g("%s: Function components do not support contextType.", v), oS[v] = !0);
        }
      }
    }
    var hS = {
      dehydrated: null,
      treeContext: null,
      retryLane: en
    };
    function mS(e) {
      return {
        baseLanes: e,
        cachePool: tw(),
        transitions: null
      };
    }
    function dw(e, t) {
      var a = null;
      return {
        baseLanes: Me(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function pw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return yg(e, qd);
    }
    function vw(e, t) {
      return Vo(e.childLanes, t);
    }
    function v1(e, t, a) {
      var i = t.pendingProps;
      R_(t) && (t.flags |= De);
      var u = Ti.current, s = !1, f = (t.flags & De) !== Se;
      if (f || pw(u, e) ? (s = !0, t.flags &= ~De) : (e === null || e.memoizedState !== null) && (u = Mx(u, CE)), u = Jc(u), qu(t, u), e === null) {
        Ky(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Sw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var x = hw(t, m, y, a), T = t.child;
          return T.memoizedState = mS(a), t.memoizedState = hS, x;
        } else
          return yS(t, m);
      } else {
        var O = e.memoizedState;
        if (O !== null) {
          var M = O.dehydrated;
          if (M !== null)
            return Ew(e, t, f, i, M, O, a);
        }
        if (s) {
          var N = i.fallback, X = i.children, Ee = yw(e, t, X, N, a), ve = t.child, Xe = e.child.memoizedState;
          return ve.memoizedState = Xe === null ? mS(a) : dw(Xe, a), ve.childLanes = vw(e, a), t.memoizedState = hS, Ee;
        } else {
          var Ie = i.children, D = mw(e, t, Ie, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function yS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = gS(u, i);
      return s.return = e, e.child = s, s;
    }
    function hw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & pe) === fe && s !== null ? (p = s, p.childLanes = A, p.pendingProps = f, e.mode & _e && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = ao(a, u, i, null)) : (p = gS(f, u), v = ao(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function gS(e, t, a) {
      return hC(e, t, A, null);
    }
    function h1(e, t) {
      return ms(e, t);
    }
    function mw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = h1(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & pe) === fe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= at) : p.push(s);
      }
      return t.child = f, f;
    }
    function yw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & pe) === fe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = A, m.pendingProps = v, t.mode & _e && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = h1(f, v), m.subtreeFlags = f.subtreeFlags & bn;
      var x;
      return p !== null ? x = ms(p, i) : (x = ao(i, s, u, null), x.flags |= bt), x.return = t, m.return = t, m.sibling = x, t.child = m, x;
    }
    function fm(e, t, a, i) {
      i !== null && Zy(i), Xc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = yS(t, s);
      return f.flags |= bt, t.memoizedState = null, f;
    }
    function gw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = gS(f, s), v = ao(i, s, u, null);
      return v.flags |= bt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & pe) !== fe && Xc(t, e.child, null, u), v;
    }
    function Sw(e, t, a) {
      return (e.mode & pe) === fe ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ye) : Ay(t) ? e.lanes = vi : e.lanes = Wn, null;
    }
    function Ew(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Bt) {
          t.flags &= ~Bt;
          var D = aS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return fm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= De, null;
          var z = i.children, _ = i.fallback, B = gw(e, t, z, _, f), te = t.child;
          return te.memoizedState = mS(f), t.memoizedState = hS, B;
        }
      else {
        if (ux(), (t.mode & pe) === fe)
          return fm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Ay(u)) {
          var p, v, m;
          {
            var y = xR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var T = aS(x, p, m);
          return fm(e, t, f, T);
        }
        var O = Cr(f, e.childLanes);
        if (wi || O) {
          var M = Tm();
          if (M !== null) {
            var N = Fv(M, f);
            if (N !== en && N !== s.retryLane) {
              s.retryLane = N;
              var X = xt;
              pa(e, N), Hn(M, e, N, X);
            }
          }
          jS();
          var Ee = aS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return fm(e, t, f, Ee);
        } else if (H0(u)) {
          t.flags |= De, t.child = e.child;
          var ve = ID.bind(null, e);
          return wR(u, ve), null;
        } else {
          cx(t, u, s.treeContext);
          var Xe = i.children, Ie = yS(t, Xe);
          return Ie.flags |= ta, Ie;
        }
      }
    }
    function m1(e, t, a) {
      e.lanes = Me(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Me(i.lanes, t)), og(e.return, t, a);
    }
    function Cw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === $e) {
          var u = i.memoizedState;
          u !== null && m1(i, a, e);
        } else if (i.tag === pt)
          m1(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Tw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && $h(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Rw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !fS[e])
        if (fS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function xw(e, t) {
      e !== void 0 && !cm[e] && (e !== "collapsed" && e !== "hidden" ? (cm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (cm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function y1(e, t) {
      {
        var a = mn(e), i = !a && typeof Nr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function ww(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (mn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!y1(e[a], a))
              return;
        } else {
          var i = Nr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!y1(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function SS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function g1(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Rw(u), xw(s, u), ww(f, u), Br(e, t, f, a);
      var p = Ti.current, v = yg(p, qd);
      if (v)
        p = gg(p, qd), t.flags |= De;
      else {
        var m = e !== null && (e.flags & De) !== Se;
        m && Cw(t, t.child, a), p = Jc(p);
      }
      if (qu(t, p), (t.mode & pe) === fe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = Tw(t.child), x;
            y === null ? (x = t.child, t.child = null) : (x = y.sibling, y.sibling = null), SS(
              t,
              !1,
              // isBackwards
              x,
              y,
              s
            );
            break;
          }
          case "backwards": {
            var T = null, O = t.child;
            for (t.child = null; O !== null; ) {
              var M = O.alternate;
              if (M !== null && $h(M) === null) {
                t.child = O;
                break;
              }
              var N = O.sibling;
              O.sibling = T, T = O, O = N;
            }
            SS(
              t,
              !0,
              // isBackwards
              T,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            SS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Dw(e, t, a) {
      vg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Xc(t, null, i, a) : Br(e, t, i, a), t.child;
    }
    var S1 = !1;
    function _w(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || S1 || (S1 = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Si(v, s, "prop", "Context.Provider");
      }
      if (fE(t, u, p), f !== null) {
        var m = f.value;
        if (ie(m, p)) {
          if (f.children === s.children && !Eh())
            return Yl(e, t, a);
        } else
          Rx(t, u, a);
      }
      var y = s.children;
      return Br(e, t, y, a), t.child;
    }
    var E1 = !1;
    function bw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (E1 || (E1 = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Kc(t, a);
      var f = Tn(i);
      hu(t);
      var p;
      return ip.current = t, _a(!0), p = s(f), _a(!1), gr(), t.flags |= ji, Br(e, t, p, a), t.child;
    }
    function op() {
      wi = !0;
    }
    function dm(e, t) {
      (t.mode & pe) === fe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= bt);
    }
    function Yl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), XE(), Ep(t.lanes), Cr(a, t.childLanes) ? (Cx(e, t), t.child) : null;
    }
    function kw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= at) : s.push(e), a.flags |= bt, a;
      }
    }
    function ES(e, t) {
      var a = e.lanes;
      return !!Cr(a, t);
    }
    function Ow(e, t, a) {
      switch (t.tag) {
        case ne:
          d1(t), t.stateNode, Gc();
          break;
        case oe:
          SE(t);
          break;
        case ue: {
          var i = t.type;
          Zi(i) && Th(t);
          break;
        }
        case he:
          vg(t, t.stateNode.containerInfo);
          break;
        case Ke: {
          var u = t.memoizedProps.value, s = t.type._context;
          fE(t, s, u);
          break;
        }
        case gt:
          {
            var f = Cr(a, t.childLanes);
            f && (t.flags |= Ne);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case $e: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return qu(t, Jc(Ti.current)), t.flags |= De, null;
            var m = t.child, y = m.childLanes;
            if (Cr(a, y))
              return v1(e, t, a);
            qu(t, Jc(Ti.current));
            var x = Yl(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            qu(t, Jc(Ti.current));
          break;
        }
        case pt: {
          var T = (e.flags & De) !== Se, O = Cr(a, t.childLanes);
          if (T) {
            if (O)
              return g1(e, t, a);
            t.flags |= De;
          }
          var M = t.memoizedState;
          if (M !== null && (M.rendering = null, M.tail = null, M.lastEffect = null), qu(t, Ti.current), O)
            break;
          return null;
        }
        case be:
        case Qe:
          return t.lanes = A, s1(e, t, a);
      }
      return Yl(e, t, a);
    }
    function C1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return kw(e, t, qS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Eh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          wi = !0;
        else {
          var s = ES(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & De) === Se)
            return wi = !1, Ow(e, t, a);
          (e.flags & Oo) !== Se ? wi = !0 : wi = !1;
        }
      } else if (wi = !1, er() && tx(t)) {
        var f = t.index, p = nx();
        X0(t, p, f);
      }
      switch (t.lanes = A, t.tag) {
        case nt:
          return fw(e, t, t.type, a);
        case Rn: {
          var v = t.elementType;
          return sw(e, t, v, a);
        }
        case ce: {
          var m = t.type, y = t.pendingProps, x = t.elementType === m ? y : xi(m, y);
          return dS(e, t, m, x, a);
        }
        case ue: {
          var T = t.type, O = t.pendingProps, M = t.elementType === T ? O : xi(T, O);
          return f1(e, t, T, M, a);
        }
        case ne:
          return lw(e, t, a);
        case oe:
          return uw(e, t, a);
        case ze:
          return ow(e, t);
        case $e:
          return v1(e, t, a);
        case he:
          return Dw(e, t, a);
        case Be: {
          var N = t.type, X = t.pendingProps, Ee = t.elementType === N ? X : xi(N, X);
          return l1(e, t, N, Ee, a);
        }
        case st:
          return rw(e, t, a);
        case yt:
          return aw(e, t, a);
        case gt:
          return iw(e, t, a);
        case Ke:
          return _w(e, t, a);
        case fn:
          return bw(e, t, a);
        case wt: {
          var ve = t.type, Xe = t.pendingProps, Ie = xi(ve, Xe);
          if (t.type !== t.elementType) {
            var D = ve.propTypes;
            D && Si(
              D,
              Ie,
              // Resolved for outer only
              "prop",
              dt(ve)
            );
          }
          return Ie = xi(ve.type, Ie), u1(e, t, ve, Ie, a);
        }
        case Ue:
          return o1(e, t, t.type, t.pendingProps, a);
        case jn: {
          var z = t.type, _ = t.pendingProps, B = t.elementType === z ? _ : xi(z, _);
          return cw(e, t, z, B, a);
        }
        case pt:
          return g1(e, t, a);
        case xn:
          break;
        case be:
          return s1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function lf(e) {
      e.flags |= Ne;
    }
    function T1(e) {
      e.flags |= pr, e.flags |= Gf;
    }
    var R1, CS, x1, w1;
    R1 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === oe || u.tag === ze)
          ZT(e, u.stateNode);
        else if (u.tag !== he) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, CS = function(e, t) {
    }, x1 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = hg(), v = eR(f, a, s, i, u, p);
        t.updateQueue = v, v && lf(t);
      }
    }, w1 = function(e, t, a, i) {
      a !== i && lf(t);
    };
    function sp(e, t) {
      if (!er())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function nr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = A, i = Se;
      if (t) {
        if ((e.mode & _e) !== fe) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Me(a, Me(m.lanes, m.childLanes)), i |= m.subtreeFlags & bn, i |= m.flags & bn, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = Me(a, Me(y.lanes, y.childLanes)), i |= y.subtreeFlags & bn, i |= y.flags & bn, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & _e) !== fe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Me(a, Me(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Me(a, Me(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Lw(e, t, a) {
      if (hx() && (t.mode & pe) !== fe && (t.flags & De) === Se)
        return nE(t), Gc(), t.flags |= Bt | Ur | gn, !1;
      var i = _h(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (px(t), nr(t), (t.mode & _e) !== fe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Gc(), (t.flags & De) === Se && (t.memoizedState = null), t.flags |= Ne, nr(t), (t.mode & _e) !== fe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return rE(), !0;
    }
    function D1(e, t, a) {
      var i = t.pendingProps;
      switch (Wy(t), t.tag) {
        case nt:
        case Rn:
        case Ue:
        case ce:
        case Be:
        case st:
        case yt:
        case gt:
        case fn:
        case wt:
          return nr(t), null;
        case ue: {
          var u = t.type;
          return Zi(u) && Ch(t), nr(t), null;
        }
        case ne: {
          var s = t.stateNode;
          if (Zc(t), $y(t), Eg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = _h(t);
            if (f)
              lf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Bt) !== Se) && (t.flags |= ea, rE());
            }
          }
          return CS(e, t), nr(t), null;
        }
        case oe: {
          mg(t);
          var v = gE(), m = t.type;
          if (e !== null && t.stateNode != null)
            x1(e, t, m, i, v), e.ref !== t.ref && T1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return nr(t), null;
            }
            var y = hg(), x = _h(t);
            if (x)
              fx(t, v, y) && lf(t);
            else {
              var T = KT(m, i, v, y, t);
              R1(T, t, !1, !1), t.stateNode = T, JT(T, m, i, v) && lf(t);
            }
            t.ref !== null && T1(t);
          }
          return nr(t), null;
        }
        case ze: {
          var O = i;
          if (e && t.stateNode != null) {
            var M = e.memoizedProps;
            w1(e, t, M, O);
          } else {
            if (typeof O != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var N = gE(), X = hg(), Ee = _h(t);
            Ee ? dx(t) && lf(t) : t.stateNode = tR(O, N, X, t);
          }
          return nr(t), null;
        }
        case $e: {
          ef(t);
          var ve = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Xe = Lw(e, t, ve);
            if (!Xe)
              return t.flags & gn ? t : null;
          }
          if ((t.flags & De) !== Se)
            return t.lanes = a, (t.mode & _e) !== fe && Ig(t), t;
          var Ie = ve !== null, D = e !== null && e.memoizedState !== null;
          if (Ie !== D && Ie) {
            var z = t.child;
            if (z.flags |= Vi, (t.mode & pe) !== fe) {
              var _ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Ze);
              _ || yg(Ti.current, CE) ? MD() : jS();
            }
          }
          var B = t.updateQueue;
          if (B !== null && (t.flags |= Ne), nr(t), (t.mode & _e) !== fe && Ie) {
            var te = t.child;
            te !== null && (t.treeBaseDuration -= te.treeBaseDuration);
          }
          return null;
        }
        case he:
          return Zc(t), CS(e, t), e === null && GR(t.stateNode.containerInfo), nr(t), null;
        case Ke:
          var q = t.type._context;
          return ug(q, t), nr(t), null;
        case jn: {
          var we = t.type;
          return Zi(we) && Ch(t), nr(t), null;
        }
        case pt: {
          ef(t);
          var Oe = t.memoizedState;
          if (Oe === null)
            return nr(t), null;
          var mt = (t.flags & De) !== Se, et = Oe.rendering;
          if (et === null)
            if (mt)
              sp(Oe, !1);
            else {
              var cn = zD() && (e === null || (e.flags & De) === Se);
              if (!cn)
                for (var tt = t.child; tt !== null; ) {
                  var tn = $h(tt);
                  if (tn !== null) {
                    mt = !0, t.flags |= De, sp(Oe, !1);
                    var Dr = tn.updateQueue;
                    return Dr !== null && (t.updateQueue = Dr, t.flags |= Ne), t.subtreeFlags = Se, Tx(t, a), qu(t, gg(Ti.current, qd)), t.child;
                  }
                  tt = tt.sibling;
                }
              Oe.tail !== null && Ft() > W1() && (t.flags |= De, mt = !0, sp(Oe, !1), t.lanes = Dv);
            }
          else {
            if (!mt) {
              var ur = $h(et);
              if (ur !== null) {
                t.flags |= De, mt = !0;
                var za = ur.updateQueue;
                if (za !== null && (t.updateQueue = za, t.flags |= Ne), sp(Oe, !0), Oe.tail === null && Oe.tailMode === "hidden" && !et.alternate && !er())
                  return nr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Ft() * 2 - Oe.renderingStartTime > W1() && a !== Wn && (t.flags |= De, mt = !0, sp(Oe, !1), t.lanes = Dv);
            }
            if (Oe.isBackwards)
              et.sibling = t.child, t.child = et;
            else {
              var Yr = Oe.last;
              Yr !== null ? Yr.sibling = et : t.child = et, Oe.last = et;
            }
          }
          if (Oe.tail !== null) {
            var Ir = Oe.tail;
            Oe.rendering = Ir, Oe.tail = Ir.sibling, Oe.renderingStartTime = Ft(), Ir.sibling = null;
            var _r = Ti.current;
            return mt ? _r = gg(_r, qd) : _r = Jc(_r), qu(t, _r), Ir;
          }
          return nr(t), null;
        }
        case xn:
          break;
        case be:
        case Qe: {
          HS(t);
          var Xl = t.memoizedState, vf = Xl !== null;
          if (e !== null) {
            var wp = e.memoizedState, ll = wp !== null;
            ll !== vf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ee && (t.flags |= Vi);
          }
          return !vf || (t.mode & pe) === fe ? nr(t) : Cr(il, Wn) && (nr(t), t.subtreeFlags & (bt | Ne) && (t.flags |= Vi)), null;
        }
        case dn:
          return null;
        case Dt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Mw(e, t, a) {
      switch (Wy(t), t.tag) {
        case ue: {
          var i = t.type;
          Zi(i) && Ch(t);
          var u = t.flags;
          return u & gn ? (t.flags = u & ~gn | De, (t.mode & _e) !== fe && Ig(t), t) : null;
        }
        case ne: {
          t.stateNode, Zc(t), $y(t), Eg();
          var s = t.flags;
          return (s & gn) !== Se && (s & De) === Se ? (t.flags = s & ~gn | De, t) : null;
        }
        case oe:
          return mg(t), null;
        case $e: {
          ef(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Gc();
          }
          var p = t.flags;
          return p & gn ? (t.flags = p & ~gn | De, (t.mode & _e) !== fe && Ig(t), t) : null;
        }
        case pt:
          return ef(t), null;
        case he:
          return Zc(t), null;
        case Ke:
          var v = t.type._context;
          return ug(v, t), null;
        case be:
        case Qe:
          return HS(t), null;
        case dn:
          return null;
        default:
          return null;
      }
    }
    function _1(e, t, a) {
      switch (Wy(t), t.tag) {
        case ue: {
          var i = t.type.childContextTypes;
          i != null && Ch(t);
          break;
        }
        case ne: {
          t.stateNode, Zc(t), $y(t), Eg();
          break;
        }
        case oe: {
          mg(t);
          break;
        }
        case he:
          Zc(t);
          break;
        case $e:
          ef(t);
          break;
        case pt:
          ef(t);
          break;
        case Ke:
          var u = t.type._context;
          ug(u, t);
          break;
        case be:
        case Qe:
          HS(t);
          break;
      }
    }
    var b1 = null;
    b1 = /* @__PURE__ */ new Set();
    var pm = !1, rr = !1, Nw = typeof WeakSet == "function" ? WeakSet : Set, le = null, uf = null, of = null;
    function zw(e) {
      El(null, function() {
        throw e;
      }), Qf();
    }
    var Uw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & _e)
        try {
          rl(), t.componentWillUnmount();
        } finally {
          nl(e);
        }
      else
        t.componentWillUnmount();
    };
    function k1(e, t) {
      try {
        Ju(Mn, e);
      } catch (a) {
        Lt(e, t, a);
      }
    }
    function TS(e, t, a) {
      try {
        Uw(e, a);
      } catch (i) {
        Lt(e, t, i);
      }
    }
    function Aw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Lt(e, t, i);
      }
    }
    function O1(e, t) {
      try {
        M1(e);
      } catch (a) {
        Lt(e, t, a);
      }
    }
    function sf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (nn && Qr && e.mode & _e)
              try {
                rl(), i = a(null);
              } finally {
                nl(e);
              }
            else
              i = a(null);
          } catch (u) {
            Lt(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Le(e));
        } else
          a.current = null;
    }
    function vm(e, t, a) {
      try {
        a();
      } catch (i) {
        Lt(e, t, i);
      }
    }
    var L1 = !1;
    function Fw(e, t) {
      XT(e.containerInfo), le = t, Hw();
      var a = L1;
      return L1 = !1, a;
    }
    function Hw() {
      for (; le !== null; ) {
        var e = le, t = e.child;
        (e.subtreeFlags & du) !== Se && t !== null ? (t.return = e, le = t) : jw();
      }
    }
    function jw() {
      for (; le !== null; ) {
        var e = le;
        vt(e);
        try {
          Vw(e);
        } catch (a) {
          Lt(e, e.return, a);
        }
        rn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, le = t;
          return;
        }
        le = e.return;
      }
    }
    function Vw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ea) !== Se) {
        switch (vt(e), e.tag) {
          case ce:
          case Be:
          case Ue:
            break;
          case ue: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !fs && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : xi(e.type, i), u);
              {
                var p = b1;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Le(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ne: {
            {
              var v = e.stateNode;
              ER(v.containerInfo);
            }
            break;
          }
          case oe:
          case ze:
          case he:
          case jn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        rn();
      }
    }
    function Di(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & tr) !== va ? Rv(t) : (e & Mn) !== va && La(t), (e & Ji) !== va && Tp(!0), vm(t, a, p), (e & Ji) !== va && Tp(!1), (e & tr) !== va ? Gs() : (e & Mn) !== va && mu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ju(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & tr) !== va ? $i(t) : (e & Mn) !== va && xv(t);
            var f = s.create;
            (e & Ji) !== va && Tp(!0), s.destroy = f(), (e & Ji) !== va && Tp(!1), (e & tr) !== va ? Ws() : (e & Mn) !== va && Lo();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Mn) !== Se ? v = "useLayoutEffect" : (s.tag & Ji) !== Se ? v = "useInsertionEffect" : v = "useEffect";
                var m = void 0;
                p === null ? m = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? m = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : m = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", v, m);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Bw(e, t) {
      if ((t.flags & Ne) !== Se)
        switch (t.tag) {
          case gt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = WE(), p = t.alternate === null ? "mount" : "update";
            QE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case ne:
                    var m = v.stateNode;
                    m.passiveEffectDuration += a;
                    break e;
                  case gt:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Pw(e, t, a, i) {
      if ((a.flags & In) !== Se)
        switch (a.tag) {
          case ce:
          case Be:
          case Ue: {
            if (!rr)
              if (a.mode & _e)
                try {
                  rl(), Ju(Mn | Ln, a);
                } finally {
                  nl(a);
                }
              else
                Ju(Mn | Ln, a);
            break;
          }
          case ue: {
            var u = a.stateNode;
            if (a.flags & Ne && !rr)
              if (t === null)
                if (a.type === a.elementType && !fs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(a) || "instance")), a.mode & _e)
                  try {
                    rl(), u.componentDidMount();
                  } finally {
                    nl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : xi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !fs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(a) || "instance")), a.mode & _e)
                  try {
                    rl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    nl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !fs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(a) || "instance")), yE(a, p, u));
            break;
          }
          case ne: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case oe:
                    m = a.child.stateNode;
                    break;
                  case ue:
                    m = a.child.stateNode;
                    break;
                }
              yE(a, v, m);
            }
            break;
          }
          case oe: {
            var y = a.stateNode;
            if (t === null && a.flags & Ne) {
              var x = a.type, T = a.memoizedProps;
              lR(y, x, T);
            }
            break;
          }
          case ze:
            break;
          case he:
            break;
          case gt: {
            {
              var O = a.memoizedProps, M = O.onCommit, N = O.onRender, X = a.stateNode.effectDuration, Ee = WE(), ve = t === null ? "mount" : "update";
              QE() && (ve = "nested-update"), typeof N == "function" && N(a.memoizedProps.id, ve, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ee);
              {
                typeof M == "function" && M(a.memoizedProps.id, ve, X, Ee), jD(a);
                var Xe = a.return;
                e:
                  for (; Xe !== null; ) {
                    switch (Xe.tag) {
                      case ne:
                        var Ie = Xe.stateNode;
                        Ie.effectDuration += X;
                        break e;
                      case gt:
                        var D = Xe.stateNode;
                        D.effectDuration += X;
                        break e;
                    }
                    Xe = Xe.return;
                  }
              }
            }
            break;
          }
          case $e: {
            qw(e, a);
            break;
          }
          case pt:
          case jn:
          case xn:
          case be:
          case Qe:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      rr || a.flags & pr && M1(a);
    }
    function $w(e) {
      switch (e.tag) {
        case ce:
        case Be:
        case Ue: {
          if (e.mode & _e)
            try {
              rl(), k1(e, e.return);
            } finally {
              nl(e);
            }
          else
            k1(e, e.return);
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Aw(e, e.return, t), O1(e, e.return);
          break;
        }
        case oe: {
          O1(e, e.return);
          break;
        }
      }
    }
    function Yw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === oe) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? mR(u) : gR(i.stateNode, i.memoizedProps);
            } catch (f) {
              Lt(e, e.return, f);
            }
          }
        } else if (i.tag === ze) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? yR(s) : SR(s, i.memoizedProps);
            } catch (f) {
              Lt(e, e.return, f);
            }
        } else if (!((i.tag === be || i.tag === Qe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function M1(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case oe:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & _e)
            try {
              rl(), u = t(i);
            } finally {
              nl(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Le(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Le(e)), t.current = i;
      }
    }
    function Iw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function N1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, N1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === oe) {
          var a = e.stateNode;
          a !== null && KR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Qw(e) {
      for (var t = e.return; t !== null; ) {
        if (z1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function z1(e) {
      return e.tag === oe || e.tag === ne || e.tag === he;
    }
    function U1(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || z1(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== oe && t.tag !== ze && t.tag !== Vt; ) {
            if (t.flags & bt || t.child === null || t.tag === he)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & bt))
            return t.stateNode;
        }
    }
    function Ww(e) {
      var t = Qw(e);
      switch (t.tag) {
        case oe: {
          var a = t.stateNode;
          t.flags & ut && (F0(a), t.flags &= ~ut);
          var i = U1(e);
          xS(e, i, a);
          break;
        }
        case ne:
        case he: {
          var u = t.stateNode.containerInfo, s = U1(e);
          RS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function RS(e, t, a) {
      var i = e.tag, u = i === oe || i === ze;
      if (u) {
        var s = e.stateNode;
        t ? dR(a, s, t) : cR(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          RS(f, t, a);
          for (var p = f.sibling; p !== null; )
            RS(p, t, a), p = p.sibling;
        }
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === oe || i === ze;
      if (u) {
        var s = e.stateNode;
        t ? fR(a, s, t) : sR(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    var ar = null, _i = !1;
    function Gw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case oe: {
                ar = i.stateNode, _i = !1;
                break e;
              }
              case ne: {
                ar = i.stateNode.containerInfo, _i = !0;
                break e;
              }
              case he: {
                ar = i.stateNode.containerInfo, _i = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (ar === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        A1(e, t, a), ar = null, _i = !1;
      }
      Iw(a);
    }
    function eo(e, t, a) {
      for (var i = a.child; i !== null; )
        A1(e, t, i), i = i.sibling;
    }
    function A1(e, t, a) {
      switch (Rl(a), a.tag) {
        case oe:
          rr || sf(a, t);
        case ze: {
          {
            var i = ar, u = _i;
            ar = null, eo(e, t, a), ar = i, _i = u, ar !== null && (_i ? vR(ar, a.stateNode) : pR(ar, a.stateNode));
          }
          return;
        }
        case Vt: {
          ar !== null && (_i ? hR(ar, a.stateNode) : Uy(ar, a.stateNode));
          return;
        }
        case he: {
          {
            var s = ar, f = _i;
            ar = a.stateNode.containerInfo, _i = !0, eo(e, t, a), ar = s, _i = f;
          }
          return;
        }
        case ce:
        case Be:
        case wt:
        case Ue: {
          if (!rr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var x = y, T = x.destroy, O = x.tag;
                  T !== void 0 && ((O & Ji) !== va ? vm(a, t, T) : (O & Mn) !== va && (La(a), a.mode & _e ? (rl(), vm(a, t, T), nl(a)) : vm(a, t, T), mu())), y = y.next;
                } while (y !== m);
              }
            }
          }
          eo(e, t, a);
          return;
        }
        case ue: {
          if (!rr) {
            sf(a, t);
            var M = a.stateNode;
            typeof M.componentWillUnmount == "function" && TS(a, t, M);
          }
          eo(e, t, a);
          return;
        }
        case xn: {
          eo(e, t, a);
          return;
        }
        case be: {
          if (
            // TODO: Remove this dead flag
            a.mode & pe
          ) {
            var N = rr;
            rr = N || a.memoizedState !== null, eo(e, t, a), rr = N;
          } else
            eo(e, t, a);
          break;
        }
        default: {
          eo(e, t, a);
          return;
        }
      }
    }
    function Xw(e) {
      e.memoizedState;
    }
    function qw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && zR(s);
          }
        }
      }
    }
    function F1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Nw()), t.forEach(function(i) {
          var u = QD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Hr)
              if (uf !== null && of !== null)
                Cp(of, uf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Kw(e, t, a) {
      uf = a, of = e, vt(t), H1(t, e), vt(t), uf = null, of = null;
    }
    function bi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Gw(e, t, s);
          } catch (v) {
            Lt(s, t, v);
          }
        }
      var f = Am();
      if (t.subtreeFlags & mr)
        for (var p = t.child; p !== null; )
          vt(p), H1(p, e), p = p.sibling;
      vt(f);
    }
    function H1(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ce:
        case Be:
        case wt:
        case Ue: {
          if (bi(t, e), al(e), u & Ne) {
            try {
              Di(Ji | Ln, e, e.return), Ju(Ji | Ln, e);
            } catch (we) {
              Lt(e, e.return, we);
            }
            if (e.mode & _e) {
              try {
                rl(), Di(Mn | Ln, e, e.return);
              } catch (we) {
                Lt(e, e.return, we);
              }
              nl(e);
            } else
              try {
                Di(Mn | Ln, e, e.return);
              } catch (we) {
                Lt(e, e.return, we);
              }
          }
          return;
        }
        case ue: {
          bi(t, e), al(e), u & pr && i !== null && sf(i, i.return);
          return;
        }
        case oe: {
          bi(t, e), al(e), u & pr && i !== null && sf(i, i.return);
          {
            if (e.flags & ut) {
              var s = e.stateNode;
              try {
                F0(s);
              } catch (we) {
                Lt(e, e.return, we);
              }
            }
            if (u & Ne) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    uR(f, y, m, v, p, e);
                  } catch (we) {
                    Lt(e, e.return, we);
                  }
              }
            }
          }
          return;
        }
        case ze: {
          if (bi(t, e), al(e), u & Ne) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, T = e.memoizedProps, O = i !== null ? i.memoizedProps : T;
            try {
              oR(x, O, T);
            } catch (we) {
              Lt(e, e.return, we);
            }
          }
          return;
        }
        case ne: {
          if (bi(t, e), al(e), u & Ne && i !== null) {
            var M = i.memoizedState;
            if (M.isDehydrated)
              try {
                NR(t.containerInfo);
              } catch (we) {
                Lt(e, e.return, we);
              }
          }
          return;
        }
        case he: {
          bi(t, e), al(e);
          return;
        }
        case $e: {
          bi(t, e), al(e);
          var N = e.child;
          if (N.flags & Vi) {
            var X = N.stateNode, Ee = N.memoizedState, ve = Ee !== null;
            if (X.isHidden = ve, ve) {
              var Xe = N.alternate !== null && N.alternate.memoizedState !== null;
              Xe || LD();
            }
          }
          if (u & Ne) {
            try {
              Xw(e);
            } catch (we) {
              Lt(e, e.return, we);
            }
            F1(e);
          }
          return;
        }
        case be: {
          var Ie = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & pe
          ) {
            var D = rr;
            rr = D || Ie, bi(t, e), rr = D;
          } else
            bi(t, e);
          if (al(e), u & Vi) {
            var z = e.stateNode, _ = e.memoizedState, B = _ !== null, te = e;
            if (z.isHidden = B, B && !Ie && (te.mode & pe) !== fe) {
              le = te;
              for (var q = te.child; q !== null; )
                le = q, Jw(q), q = q.sibling;
            }
            Yw(te, B);
          }
          return;
        }
        case pt: {
          bi(t, e), al(e), u & Ne && F1(e);
          return;
        }
        case xn:
          return;
        default: {
          bi(t, e), al(e);
          return;
        }
      }
    }
    function al(e) {
      var t = e.flags;
      if (t & bt) {
        try {
          Ww(e);
        } catch (a) {
          Lt(e, e.return, a);
        }
        e.flags &= ~bt;
      }
      t & ta && (e.flags &= ~ta);
    }
    function Zw(e, t, a) {
      uf = a, of = t, le = e, j1(e, t, a), uf = null, of = null;
    }
    function j1(e, t, a) {
      for (var i = (e.mode & pe) !== fe; le !== null; ) {
        var u = le, s = u.child;
        if (u.tag === be && i) {
          var f = u.memoizedState !== null, p = f || pm;
          if (p) {
            wS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || rr, x = pm, T = rr;
            pm = p, rr = y, rr && !T && (le = u, eD(u));
            for (var O = s; O !== null; )
              le = O, j1(
                O,
                // New root; bubble back up to here and stop.
                t,
                a
              ), O = O.sibling;
            le = u, pm = x, rr = T, wS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & In) !== Se && s !== null ? (s.return = u, le = s) : wS(e, t, a);
      }
    }
    function wS(e, t, a) {
      for (; le !== null; ) {
        var i = le;
        if ((i.flags & In) !== Se) {
          var u = i.alternate;
          vt(i);
          try {
            Pw(t, u, i, a);
          } catch (f) {
            Lt(i, i.return, f);
          }
          rn();
        }
        if (i === e) {
          le = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, le = s;
          return;
        }
        le = i.return;
      }
    }
    function Jw(e) {
      for (; le !== null; ) {
        var t = le, a = t.child;
        switch (t.tag) {
          case ce:
          case Be:
          case wt:
          case Ue: {
            if (t.mode & _e)
              try {
                rl(), Di(Mn, t, t.return);
              } finally {
                nl(t);
              }
            else
              Di(Mn, t, t.return);
            break;
          }
          case ue: {
            sf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && TS(t, t.return, i);
            break;
          }
          case oe: {
            sf(t, t.return);
            break;
          }
          case be: {
            var u = t.memoizedState !== null;
            if (u) {
              V1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, le = a) : V1(e);
      }
    }
    function V1(e) {
      for (; le !== null; ) {
        var t = le;
        if (t === e) {
          le = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, le = a;
          return;
        }
        le = t.return;
      }
    }
    function eD(e) {
      for (; le !== null; ) {
        var t = le, a = t.child;
        if (t.tag === be) {
          var i = t.memoizedState !== null;
          if (i) {
            B1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, le = a) : B1(e);
      }
    }
    function B1(e) {
      for (; le !== null; ) {
        var t = le;
        vt(t);
        try {
          $w(t);
        } catch (i) {
          Lt(t, t.return, i);
        }
        if (rn(), t === e) {
          le = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, le = a;
          return;
        }
        le = t.return;
      }
    }
    function tD(e, t, a, i) {
      le = t, nD(t, e, a, i);
    }
    function nD(e, t, a, i) {
      for (; le !== null; ) {
        var u = le, s = u.child;
        (u.subtreeFlags & na) !== Se && s !== null ? (s.return = u, le = s) : rD(e, t, a, i);
      }
    }
    function rD(e, t, a, i) {
      for (; le !== null; ) {
        var u = le;
        if ((u.flags & Mt) !== Se) {
          vt(u);
          try {
            aD(t, u, a, i);
          } catch (f) {
            Lt(u, u.return, f);
          }
          rn();
        }
        if (u === e) {
          le = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, le = s;
          return;
        }
        le = u.return;
      }
    }
    function aD(e, t, a, i) {
      switch (t.tag) {
        case ce:
        case Be:
        case Ue: {
          if (t.mode & _e) {
            Yg();
            try {
              Ju(tr | Ln, t);
            } finally {
              $g(t);
            }
          } else
            Ju(tr | Ln, t);
          break;
        }
      }
    }
    function iD(e) {
      le = e, lD();
    }
    function lD() {
      for (; le !== null; ) {
        var e = le, t = e.child;
        if ((le.flags & at) !== Se) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              le = u, sD(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            le = e;
          }
        }
        (e.subtreeFlags & na) !== Se && t !== null ? (t.return = e, le = t) : uD();
      }
    }
    function uD() {
      for (; le !== null; ) {
        var e = le;
        (e.flags & Mt) !== Se && (vt(e), oD(e), rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, le = t;
          return;
        }
        le = e.return;
      }
    }
    function oD(e) {
      switch (e.tag) {
        case ce:
        case Be:
        case Ue: {
          e.mode & _e ? (Yg(), Di(tr | Ln, e, e.return), $g(e)) : Di(tr | Ln, e, e.return);
          break;
        }
      }
    }
    function sD(e, t) {
      for (; le !== null; ) {
        var a = le;
        vt(a), fD(a, t), rn();
        var i = a.child;
        i !== null ? (i.return = a, le = i) : cD(e);
      }
    }
    function cD(e) {
      for (; le !== null; ) {
        var t = le, a = t.sibling, i = t.return;
        if (N1(t), t === e) {
          le = null;
          return;
        }
        if (a !== null) {
          a.return = i, le = a;
          return;
        }
        le = i;
      }
    }
    function fD(e, t) {
      switch (e.tag) {
        case ce:
        case Be:
        case Ue: {
          e.mode & _e ? (Yg(), Di(tr, e, t), $g(e)) : Di(tr, e, t);
          break;
        }
      }
    }
    function dD(e) {
      switch (e.tag) {
        case ce:
        case Be:
        case Ue: {
          try {
            Ju(Mn | Ln, e);
          } catch (a) {
            Lt(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Lt(e, e.return, a);
          }
          break;
        }
      }
    }
    function pD(e) {
      switch (e.tag) {
        case ce:
        case Be:
        case Ue: {
          try {
            Ju(tr | Ln, e);
          } catch (t) {
            Lt(e, e.return, t);
          }
          break;
        }
      }
    }
    function vD(e) {
      switch (e.tag) {
        case ce:
        case Be:
        case Ue: {
          try {
            Di(Mn | Ln, e, e.return);
          } catch (a) {
            Lt(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && TS(e, e.return, t);
          break;
        }
      }
    }
    function hD(e) {
      switch (e.tag) {
        case ce:
        case Be:
        case Ue:
          try {
            Di(tr | Ln, e, e.return);
          } catch (t) {
            Lt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var cp = Symbol.for;
      cp("selector.component"), cp("selector.has_pseudo_class"), cp("selector.role"), cp("selector.test_id"), cp("selector.text");
    }
    var mD = [];
    function yD() {
      mD.forEach(function(e) {
        return e();
      });
    }
    var gD = k.ReactCurrentActQueue;
    function SD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function P1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && gD.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var ED = Math.ceil, DS = k.ReactCurrentDispatcher, _S = k.ReactCurrentOwner, ir = k.ReactCurrentBatchConfig, ki = k.ReactCurrentActQueue, Un = (
      /*             */
      0
    ), $1 = (
      /*               */
      1
    ), lr = (
      /*                */
      2
    ), Ja = (
      /*                */
      4
    ), Il = 0, fp = 1, ds = 2, hm = 3, dp = 4, Y1 = 5, bS = 6, Ge = Un, Pr = null, Xt = null, An = A, il = A, kS = Yu(A), Fn = Il, pp = null, mm = A, vp = A, ym = A, hp = null, ha = null, OS = 0, I1 = 500, Q1 = 1 / 0, CD = 500, Ql = null;
    function mp() {
      Q1 = Ft() + CD;
    }
    function W1() {
      return Q1;
    }
    var gm = !1, LS = null, cf = null, ps = !1, to = null, yp = A, MS = [], NS = null, TD = 50, gp = 0, zS = null, US = !1, Sm = !1, RD = 50, ff = 0, Em = null, Sp = xt, Cm = A, G1 = !1;
    function Tm() {
      return Pr;
    }
    function $r() {
      return (Ge & (lr | Ja)) !== Un ? Ft() : (Sp !== xt || (Sp = Ft()), Sp);
    }
    function no(e) {
      var t = e.mode;
      if ((t & pe) === fe)
        return ye;
      if ((Ge & lr) !== Un && An !== A)
        return wu(An);
      var a = gx() !== yx;
      if (a) {
        if (ir.transition !== null) {
          var i = ir.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Cm === en && (Cm = zv()), Cm;
      }
      var u = ua();
      if (u !== en)
        return u;
      var s = nR();
      return s;
    }
    function xD(e) {
      var t = e.mode;
      return (t & pe) === fe ? ye : Er();
    }
    function Hn(e, t, a, i) {
      GD(), G1 && g("useInsertionEffect must not schedule updates."), US && (Sm = !0), Ll(e, a, i), (Ge & lr) !== A && e === Pr ? KD(t) : (Hr && yc(e, t, a), ZD(t), e === Pr && ((Ge & lr) === Un && (vp = Me(vp, a)), Fn === dp && ro(e, An)), ma(e, i), a === ye && Ge === Un && (t.mode & pe) === fe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ki.isBatchingLegacy && (mp(), G0()));
    }
    function wD(e, t, a) {
      var i = e.current;
      i.lanes = t, Ll(e, t, a), ma(e, a);
    }
    function DD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ge & lr) !== Un
      );
    }
    function ma(e, t) {
      var a = e.callbackNode;
      kv(e, t);
      var i = kl(e, e === Pr ? An : A);
      if (i === A) {
        a !== null && cC(a), e.callbackNode = null, e.callbackPriority = en;
        return;
      }
      var u = Qt(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ki.current !== null && a !== PS)) {
        a == null && s !== ye && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && cC(a);
      var f;
      if (u === ye)
        e.tag === Iu ? (ki.isBatchingLegacy !== null && (ki.didScheduleLegacyUpdate = !0), ex(K1.bind(null, e))) : W0(K1.bind(null, e)), ki.current !== null ? ki.current.push(Qu) : aR(function() {
          (Ge & (lr | Ja)) === Un && Qu();
        }), f = null;
      else {
        var p;
        switch (On(i)) {
          case Wt:
            p = Ys;
            break;
          case hi:
            p = Tl;
            break;
          case Ya:
            p = $a;
            break;
          case Du:
            p = Is;
            break;
          default:
            p = $a;
            break;
        }
        f = $S(p, X1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function X1(e, t) {
      if (Yx(), Sp = xt, Cm = A, (Ge & (lr | Ja)) !== Un)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Gl();
      if (i && e.callbackNode !== a)
        return null;
      var u = kl(e, e === Pr ? An : A);
      if (u === A)
        return null;
      var s = !jo(e, u) && !Nv(e, u) && !t, f = s ? AD(e, u) : xm(e, u);
      if (f !== Il) {
        if (f === ds) {
          var p = Ii(e);
          p !== A && (u = p, f = AS(e, p));
        }
        if (f === fp) {
          var v = pp;
          throw vs(e, A), ro(e, u), ma(e, Ft()), v;
        }
        if (f === bS)
          ro(e, u);
        else {
          var m = !jo(e, u), y = e.current.alternate;
          if (m && !bD(y)) {
            if (f = xm(e, u), f === ds) {
              var x = Ii(e);
              x !== A && (u = x, f = AS(e, x));
            }
            if (f === fp) {
              var T = pp;
              throw vs(e, A), ro(e, u), ma(e, Ft()), T;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, _D(e, f, u);
        }
      }
      return ma(e, Ft()), e.callbackNode === a ? X1.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = hp;
      if (gc(e)) {
        var i = vs(e, t);
        i.flags |= Bt, WR(e.containerInfo);
      }
      var u = xm(e, t);
      if (u !== ds) {
        var s = ha;
        ha = a, s !== null && q1(s);
      }
      return u;
    }
    function q1(e) {
      ha === null ? ha = e : ha.push.apply(ha, e);
    }
    function _D(e, t, a) {
      switch (t) {
        case Il:
        case fp:
          throw new Error("Root did not complete. This is a bug in React.");
        case ds: {
          hs(e, ha, Ql);
          break;
        }
        case hm: {
          if (ro(e, a), Ov(a) && // do not delay if we're inside an act() scope
          !fC()) {
            var i = OS + I1 - Ft();
            if (i > 10) {
              var u = kl(e, A);
              if (u !== A)
                break;
              var s = e.suspendedLanes;
              if (!Ol(s, a)) {
                $r(), hc(e, s);
                break;
              }
              e.timeoutHandle = Ny(hs.bind(null, e, ha, Ql), i);
              break;
            }
          }
          hs(e, ha, Ql);
          break;
        }
        case dp: {
          if (ro(e, a), Mv(a))
            break;
          if (!fC()) {
            var f = _v(e, a), p = f, v = Ft() - p, m = WD(v) - v;
            if (m > 10) {
              e.timeoutHandle = Ny(hs.bind(null, e, ha, Ql), m);
              break;
            }
          }
          hs(e, ha, Ql);
          break;
        }
        case Y1: {
          hs(e, ha, Ql);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function bD(e) {
      for (var t = e; ; ) {
        if (t.flags & ko) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ie(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & ko && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ro(e, t) {
      t = Vo(t, ym), t = Vo(t, vp), Av(e, t);
    }
    function K1(e) {
      if (Ix(), (Ge & (lr | Ja)) !== Un)
        throw new Error("Should not already be working.");
      Gl();
      var t = kl(e, A);
      if (!Cr(t, ye))
        return ma(e, Ft()), null;
      var a = xm(e, t);
      if (e.tag !== Iu && a === ds) {
        var i = Ii(e);
        i !== A && (t = i, a = AS(e, i));
      }
      if (a === fp) {
        var u = pp;
        throw vs(e, A), ro(e, t), ma(e, Ft()), u;
      }
      if (a === bS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, hs(e, ha, Ql), ma(e, Ft()), null;
    }
    function kD(e, t) {
      t !== A && (sd(e, Me(t, ye)), ma(e, Ft()), (Ge & (lr | Ja)) === Un && (mp(), Qu()));
    }
    function FS(e, t) {
      var a = Ge;
      Ge |= $1;
      try {
        return e(t);
      } finally {
        Ge = a, Ge === Un && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ki.isBatchingLegacy && (mp(), G0());
      }
    }
    function OD(e, t, a, i, u) {
      var s = ua(), f = ir.transition;
      try {
        return ir.transition = null, Pt(Wt), e(t, a, i, u);
      } finally {
        Pt(s), ir.transition = f, Ge === Un && mp();
      }
    }
    function Wl(e) {
      to !== null && to.tag === Iu && (Ge & (lr | Ja)) === Un && Gl();
      var t = Ge;
      Ge |= $1;
      var a = ir.transition, i = ua();
      try {
        return ir.transition = null, Pt(Wt), e ? e() : void 0;
      } finally {
        Pt(i), ir.transition = a, Ge = t, (Ge & (lr | Ja)) === Un && Qu();
      }
    }
    function Z1() {
      return (Ge & (lr | Ja)) !== Un;
    }
    function Rm(e, t) {
      xr(kS, il, e), il = Me(il, t);
    }
    function HS(e) {
      il = kS.current, Rr(kS, e);
    }
    function vs(e, t) {
      e.finishedWork = null, e.finishedLanes = A;
      var a = e.timeoutHandle;
      if (a !== zy && (e.timeoutHandle = zy, rR(a)), Xt !== null)
        for (var i = Xt.return; i !== null; ) {
          var u = i.alternate;
          _1(u, i), i = i.return;
        }
      Pr = e;
      var s = ms(e.current, null);
      return Xt = s, An = il = t, Fn = Il, pp = null, mm = A, vp = A, ym = A, hp = null, ha = null, wx(), Ci.discardPendingWarnings(), s;
    }
    function J1(e, t) {
      do {
        var a = Xt;
        try {
          if (Nh(), RE(), rn(), _S.current = null, a === null || a.return === null) {
            Fn = fp, pp = t, Xt = null;
            return;
          }
          if (nn && a.mode & _e && om(a, !0), Ua)
            if (gr(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              xl(a, i, An);
            } else
              Mo(a, t, An);
          ew(e, a.return, a, t, An), rC(a);
        } catch (u) {
          t = u, Xt === a && a !== null ? (a = a.return, Xt = a) : a = Xt;
          continue;
        }
        return;
      } while (!0);
    }
    function eC() {
      var e = DS.current;
      return DS.current = rm, e === null ? rm : e;
    }
    function tC(e) {
      DS.current = e;
    }
    function LD() {
      OS = Ft();
    }
    function Ep(e) {
      mm = Me(e, mm);
    }
    function MD() {
      Fn === Il && (Fn = hm);
    }
    function jS() {
      (Fn === Il || Fn === hm || Fn === ds) && (Fn = dp), Pr !== null && (Ho(mm) || Ho(vp)) && ro(Pr, An);
    }
    function ND(e) {
      Fn !== dp && (Fn = ds), hp === null ? hp = [e] : hp.push(e);
    }
    function zD() {
      return Fn === Il;
    }
    function xm(e, t) {
      var a = Ge;
      Ge |= lr;
      var i = eC();
      if (Pr !== e || An !== t) {
        if (Hr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Cp(e, An), u.clear()), cd(e, t);
        }
        Ql = Po(), vs(e, t);
      }
      Nt(t);
      do
        try {
          UD();
          break;
        } catch (s) {
          J1(e, s);
        }
      while (!0);
      if (Nh(), Ge = a, tC(i), Xt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return qs(), Pr = null, An = A, Fn;
    }
    function UD() {
      for (; Xt !== null; )
        nC(Xt);
    }
    function AD(e, t) {
      var a = Ge;
      Ge |= lr;
      var i = eC();
      if (Pr !== e || An !== t) {
        if (Hr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Cp(e, An), u.clear()), cd(e, t);
        }
        Ql = Po(), mp(), vs(e, t);
      }
      Nt(t);
      do
        try {
          FD();
          break;
        } catch (s) {
          J1(e, s);
        }
      while (!0);
      return Nh(), tC(i), Ge = a, Xt !== null ? (Xs(), Il) : (qs(), Pr = null, An = A, Fn);
    }
    function FD() {
      for (; Xt !== null && !$s(); )
        nC(Xt);
    }
    function nC(e) {
      var t = e.alternate;
      vt(e);
      var a;
      (e.mode & _e) !== fe ? (Pg(e), a = VS(t, e, il), om(e, !0)) : a = VS(t, e, il), rn(), e.memoizedProps = e.pendingProps, a === null ? rC(e) : Xt = a, _S.current = null;
    }
    function rC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ur) === Se) {
          vt(t);
          var u = void 0;
          if ((t.mode & _e) === fe ? u = D1(a, t, il) : (Pg(t), u = D1(a, t, il), om(t, !1)), rn(), u !== null) {
            Xt = u;
            return;
          }
        } else {
          var s = Mw(a, t);
          if (s !== null) {
            s.flags &= mv, Xt = s;
            return;
          }
          if ((t.mode & _e) !== fe) {
            om(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Ur, i.subtreeFlags = Se, i.deletions = null;
          else {
            Fn = bS, Xt = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Xt = v;
          return;
        }
        t = i, Xt = t;
      } while (t !== null);
      Fn === Il && (Fn = Y1);
    }
    function hs(e, t, a) {
      var i = ua(), u = ir.transition;
      try {
        ir.transition = null, Pt(Wt), HD(e, t, a, i);
      } finally {
        ir.transition = u, Pt(i);
      }
      return null;
    }
    function HD(e, t, a, i) {
      do
        Gl();
      while (to !== null);
      if (XD(), (Ge & (lr | Ja)) !== Un)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Pi(s), u === null)
        return Qs(), null;
      if (s === A && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = A, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = en;
      var f = Me(u.lanes, u.childLanes);
      mc(e, f), e === Pr && (Pr = null, Xt = null, An = A), ((u.subtreeFlags & na) !== Se || (u.flags & na) !== Se) && (ps || (ps = !0, NS = a, $S($a, function() {
        return Gl(), null;
      })));
      var p = (u.subtreeFlags & (du | mr | In | na)) !== Se, v = (u.flags & (du | mr | In | na)) !== Se;
      if (p || v) {
        var m = ir.transition;
        ir.transition = null;
        var y = ua();
        Pt(Wt);
        var x = Ge;
        Ge |= Ja, _S.current = null, Fw(e, u), GE(), Kw(e, u, s), qT(e.containerInfo), e.current = u, td(s), Zw(u, e, s), yu(), Sv(), Ge = x, Pt(y), ir.transition = m;
      } else
        e.current = u, GE();
      var T = ps;
      if (ps ? (ps = !1, to = e, yp = s) : (ff = 0, Em = null), f = e.pendingLanes, f === A && (cf = null), T || uC(e.current, !1), vu(u.stateNode, i), Hr && e.memoizedUpdaters.clear(), yD(), ma(e, Ft()), t !== null)
        for (var O = e.onRecoverableError, M = 0; M < t.length; M++) {
          var N = t[M], X = N.stack, Ee = N.digest;
          O(N.value, {
            componentStack: X,
            digest: Ee
          });
        }
      if (gm) {
        gm = !1;
        var ve = LS;
        throw LS = null, ve;
      }
      return Cr(yp, ye) && e.tag !== Iu && Gl(), f = e.pendingLanes, Cr(f, ye) ? ($x(), e === zS ? gp++ : (gp = 0, zS = e)) : gp = 0, Qu(), Qs(), null;
    }
    function Gl() {
      if (to !== null) {
        var e = On(yp), t = ay(Ya, e), a = ir.transition, i = ua();
        try {
          return ir.transition = null, Pt(t), VD();
        } finally {
          Pt(i), ir.transition = a;
        }
      }
      return !1;
    }
    function jD(e) {
      MS.push(e), ps || (ps = !0, $S($a, function() {
        return Gl(), null;
      }));
    }
    function VD() {
      if (to === null)
        return !1;
      var e = NS;
      NS = null;
      var t = to, a = yp;
      if (to = null, yp = A, (Ge & (lr | Ja)) !== Un)
        throw new Error("Cannot flush passive effects while already rendering.");
      US = !0, Sm = !1, wv(a);
      var i = Ge;
      Ge |= Ja, iD(t.current), tD(t, t.current, a, e);
      {
        var u = MS;
        MS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Bw(t, f);
        }
      }
      nd(), uC(t.current, !0), Ge = i, Qu(), Sm ? t === Em ? ff++ : (ff = 0, Em = t) : ff = 0, US = !1, Sm = !1, ia(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function aC(e) {
      return cf !== null && cf.has(e);
    }
    function BD(e) {
      cf === null ? cf = /* @__PURE__ */ new Set([e]) : cf.add(e);
    }
    function PD(e) {
      gm || (gm = !0, LS = e);
    }
    var $D = PD;
    function iC(e, t, a) {
      var i = cs(a, t), u = n1(e, i, ye), s = Gu(e, u, ye), f = $r();
      s !== null && (Ll(s, ye, f), ma(s, f));
    }
    function Lt(e, t, a) {
      if (zw(a), Tp(!1), e.tag === ne) {
        iC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ne) {
          iC(i, e, a);
          return;
        } else if (i.tag === ue) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !aC(s)) {
            var f = cs(a, e), p = lS(i, f, ye), v = Gu(i, p, ye), m = $r();
            v !== null && (Ll(v, ye, m), ma(v, m));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function YD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = $r();
      hc(e, a), JD(e), Pr === e && Ol(An, a) && (Fn === dp || Fn === hm && Ov(An) && Ft() - OS < I1 ? vs(e, A) : ym = Me(ym, a)), ma(e, u);
    }
    function lC(e, t) {
      t === en && (t = xD(e));
      var a = $r(), i = pa(e, t);
      i !== null && (Ll(i, t, a), ma(i, a));
    }
    function ID(e) {
      var t = e.memoizedState, a = en;
      t !== null && (a = t.retryLane), lC(e, a);
    }
    function QD(e, t) {
      var a = en, i;
      switch (e.tag) {
        case $e:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case pt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), lC(e, a);
    }
    function WD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : ED(e / 1960) * 1960;
    }
    function GD() {
      if (gp > TD)
        throw gp = 0, zS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ff > RD && (ff = 0, Em = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function XD() {
      Ci.flushLegacyContextWarning(), Ci.flushPendingUnsafeLifecycleWarnings();
    }
    function uC(e, t) {
      vt(e), wm(e, hr, vD), t && wm(e, Cl, hD), wm(e, hr, dD), t && wm(e, Cl, pD), rn();
    }
    function wm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Se ? i = i.child : ((i.flags & t) !== Se && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Dm = null;
    function oC(e) {
      {
        if ((Ge & lr) !== Un || !(e.mode & pe))
          return;
        var t = e.tag;
        if (t !== nt && t !== ne && t !== ue && t !== ce && t !== Be && t !== wt && t !== Ue)
          return;
        var a = Le(e) || "ReactComponent";
        if (Dm !== null) {
          if (Dm.has(a))
            return;
          Dm.add(a);
        } else
          Dm = /* @__PURE__ */ new Set([a]);
        var i = Kt;
        try {
          vt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? vt(e) : rn();
        }
      }
    }
    var VS;
    {
      var qD = null;
      VS = function(e, t, a) {
        var i = mC(qD, t);
        try {
          return C1(e, t, a);
        } catch (s) {
          if (ox() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Nh(), RE(), _1(e, t), mC(t, i), t.mode & _e && Pg(t), El(null, C1, null, e, t, a), Jm()) {
            var u = Qf();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var sC = !1, BS;
    BS = /* @__PURE__ */ new Set();
    function KD(e) {
      if (qr && !Vx())
        switch (e.tag) {
          case ce:
          case Be:
          case Ue: {
            var t = Xt && Le(Xt) || "Unknown", a = t;
            if (!BS.has(a)) {
              BS.add(a);
              var i = Le(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ue: {
            sC || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), sC = !0);
            break;
          }
        }
    }
    function Cp(e, t) {
      if (Hr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          yc(e, i, t);
        });
      }
    }
    var PS = {};
    function $S(e, t) {
      {
        var a = ki.current;
        return a !== null ? (a.push(t), PS) : Ps(e, t);
      }
    }
    function cC(e) {
      if (e !== PS)
        return gv(e);
    }
    function fC() {
      return ki.current !== null;
    }
    function ZD(e) {
      {
        if (e.mode & pe) {
          if (!P1())
            return;
        } else if (!SD() || Ge !== Un || e.tag !== ce && e.tag !== Be && e.tag !== Ue)
          return;
        if (ki.current === null) {
          var t = Kt;
          try {
            vt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Le(e));
          } finally {
            t ? vt(e) : rn();
          }
        }
      }
    }
    function JD(e) {
      e.tag !== Iu && P1() && ki.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Tp(e) {
      G1 = e;
    }
    var ei = null, df = null, e_ = function(e) {
      ei = e;
    };
    function pf(e) {
      {
        if (ei === null)
          return e;
        var t = ei(e);
        return t === void 0 ? e : t.current;
      }
    }
    function YS(e) {
      return pf(e);
    }
    function IS(e) {
      {
        if (ei === null)
          return e;
        var t = ei(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = pf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: I,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function dC(e, t) {
      {
        if (ei === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ue: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ce: {
            (typeof i == "function" || s === xe) && (u = !0);
            break;
          }
          case Be: {
            (s === I || s === xe) && (u = !0);
            break;
          }
          case wt:
          case Ue: {
            (s === qe || s === xe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ei(a);
          if (f !== void 0 && f === ei(i))
            return !0;
        }
        return !1;
      }
    }
    function pC(e) {
      {
        if (ei === null || typeof WeakSet != "function")
          return;
        df === null && (df = /* @__PURE__ */ new WeakSet()), df.add(e);
      }
    }
    var t_ = function(e, t) {
      {
        if (ei === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Gl(), Wl(function() {
          QS(e.current, i, a);
        });
      }
    }, n_ = function(e, t) {
      {
        if (e.context !== Ma)
          return;
        Gl(), Wl(function() {
          Rp(t, e, null, null);
        });
      }
    };
    function QS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ce:
          case Ue:
          case ue:
            v = p;
            break;
          case Be:
            v = p.render;
            break;
        }
        if (ei === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var x = ei(v);
          x !== void 0 && (a.has(x) ? y = !0 : t.has(x) && (f === ue ? y = !0 : m = !0));
        }
        if (df !== null && (df.has(e) || i !== null && df.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var T = pa(e, ye);
          T !== null && Hn(T, e, ye, xt);
        }
        u !== null && !y && QS(u, t, a), s !== null && QS(s, t, a);
      }
    }
    var r_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return WS(e.current, i, a), a;
      }
    };
    function WS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ce:
          case Ue:
          case ue:
            p = f;
            break;
          case Be:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? a_(e, a) : i !== null && WS(i, t, a), u !== null && WS(u, t, a);
      }
    }
    function a_(e, t) {
      {
        var a = i_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case oe:
              t.add(i.stateNode);
              return;
            case he:
              t.add(i.stateNode.containerInfo);
              return;
            case ne:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function i_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === oe)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var GS;
    {
      GS = !1;
      try {
        var vC = Object.preventExtensions({});
      } catch {
        GS = !0;
      }
    }
    function l_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Se, this.subtreeFlags = Se, this.deletions = null, this.lanes = A, this.childLanes = A, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !GS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Na = function(e, t, a, i) {
      return new l_(e, t, a, i);
    };
    function XS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function u_(e) {
      return typeof e == "function" && !XS(e) && e.defaultProps === void 0;
    }
    function o_(e) {
      if (typeof e == "function")
        return XS(e) ? ue : ce;
      if (e != null) {
        var t = e.$$typeof;
        if (t === I)
          return Be;
        if (t === qe)
          return wt;
      }
      return nt;
    }
    function ms(e, t) {
      var a = e.alternate;
      a === null ? (a = Na(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Se, a.subtreeFlags = Se, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & bn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case nt:
        case ce:
        case Ue:
          a.type = pf(e.type);
          break;
        case ue:
          a.type = YS(e.type);
          break;
        case Be:
          a.type = IS(e.type);
          break;
      }
      return a;
    }
    function s_(e, t) {
      e.flags &= bn | bt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = A, e.lanes = t, e.child = null, e.subtreeFlags = Se, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Se, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function c_(e, t, a) {
      var i;
      return e === Rh ? (i = pe, t === !0 && (i |= je, i |= jr)) : i = fe, Hr && (i |= _e), Na(ne, null, null, i);
    }
    function qS(e, t, a, i, u, s) {
      var f = nt, p = e;
      if (typeof e == "function")
        XS(e) ? (f = ue, p = YS(p)) : p = pf(p);
      else if (typeof e == "string")
        f = oe;
      else
        e:
          switch (e) {
            case xa:
              return ao(a.children, u, s, t);
            case Li:
              f = yt, u |= je, (u & pe) !== fe && (u |= jr);
              break;
            case cl:
              return f_(a, u, s, t);
            case me:
              return d_(a, u, s, t);
            case We:
              return p_(a, u, s, t);
            case _t:
              return hC(a, u, s, t);
            case At:
            case Fe:
            case fr:
            case Mi:
            case hn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case E:
                    f = Ke;
                    break e;
                  case j:
                    f = fn;
                    break e;
                  case I:
                    f = Be, p = IS(p);
                    break e;
                  case qe:
                    f = wt;
                    break e;
                  case xe:
                    f = Rn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var m = i ? Le(i) : null;
                m && (v += `

Check the render method of \`` + m + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var y = Na(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function KS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = qS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function ao(e, t, a, i) {
      var u = Na(st, e, i, t);
      return u.lanes = a, u;
    }
    function f_(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Na(gt, e, i, t | _e);
      return u.elementType = cl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function d_(e, t, a, i) {
      var u = Na($e, e, i, t);
      return u.elementType = me, u.lanes = a, u;
    }
    function p_(e, t, a, i) {
      var u = Na(pt, e, i, t);
      return u.elementType = We, u.lanes = a, u;
    }
    function hC(e, t, a, i) {
      var u = Na(be, e, i, t);
      u.elementType = _t, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function ZS(e, t, a) {
      var i = Na(ze, e, null, t);
      return i.lanes = a, i;
    }
    function v_() {
      var e = Na(oe, null, null, fe);
      return e.elementType = "DELETED", e;
    }
    function h_(e) {
      var t = Na(Vt, null, null, fe);
      return t.stateNode = e, t;
    }
    function JS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Na(he, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function mC(e, t) {
      return e === null && (e = Na(nt, null, null, fe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function m_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = zy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = en, this.eventTimes = Bo(A), this.expirationTimes = Bo(xt), this.pendingLanes = A, this.suspendedLanes = A, this.pingedLanes = A, this.expiredLanes = A, this.mutableReadLanes = A, this.finishedLanes = A, this.entangledLanes = A, this.entanglements = Bo(A), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Uo; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Rh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Iu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function yC(e, t, a, i, u, s, f, p, v, m) {
      var y = new m_(e, t, a, p, v), x = c_(t, s);
      y.current = x, x.stateNode = y;
      {
        var T = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        x.memoizedState = T;
      }
      return dg(x), y;
    }
    var e0 = "18.3.1";
    function y_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ea(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Mr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var t0, n0;
    t0 = !1, n0 = {};
    function gC(e) {
      if (!e)
        return Ma;
      var t = Jr(e), a = JR(t);
      if (t.tag === ue) {
        var i = t.type;
        if (Zi(i))
          return I0(t, i, a);
      }
      return a;
    }
    function g_(e, t) {
      {
        var a = Jr(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ra(a);
        if (u === null)
          return null;
        if (u.mode & je) {
          var s = Le(a) || "Component";
          if (!n0[s]) {
            n0[s] = !0;
            var f = Kt;
            try {
              vt(u), a.mode & je ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? vt(f) : rn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function SC(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return yC(e, t, v, m, a, i, u, s, f);
    }
    function EC(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, x = yC(a, i, y, e, u, s, f, p, v);
      x.context = gC(null);
      var T = x.current, O = $r(), M = no(T), N = $l(O, M);
      return N.callback = t ?? null, Gu(T, N, M), wD(x, M, O), x;
    }
    function Rp(e, t, a, i) {
      ed(t, e);
      var u = t.current, s = $r(), f = no(u);
      rd(f);
      var p = gC(a);
      t.context === null ? t.context = p : t.pendingContext = p, qr && Kt !== null && !t0 && (t0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Le(Kt) || "Unknown"));
      var v = $l(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = Gu(u, v, f);
      return m !== null && (Hn(m, u, f, s), Hh(m, u, f)), f;
    }
    function _m(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case oe:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function S_(e) {
      switch (e.tag) {
        case ne: {
          var t = e.stateNode;
          if (gc(t)) {
            var a = ld(t);
            kD(t, a);
          }
          break;
        }
        case $e: {
          Wl(function() {
            var u = pa(e, ye);
            if (u !== null) {
              var s = $r();
              Hn(u, e, ye, s);
            }
          });
          var i = ye;
          r0(e, i);
          break;
        }
      }
    }
    function CC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Uv(a.retryLane, t));
    }
    function r0(e, t) {
      CC(e, t);
      var a = e.alternate;
      a && CC(a, t);
    }
    function E_(e) {
      if (e.tag === $e) {
        var t = Fo, a = pa(e, t);
        if (a !== null) {
          var i = $r();
          Hn(a, e, t, i);
        }
        r0(e, t);
      }
    }
    function C_(e) {
      if (e.tag === $e) {
        var t = no(e), a = pa(e, t);
        if (a !== null) {
          var i = $r();
          Hn(a, e, t, i);
        }
        r0(e, t);
      }
    }
    function TC(e) {
      var t = yv(e);
      return t === null ? null : t.stateNode;
    }
    var RC = function(e) {
      return null;
    };
    function T_(e) {
      return RC(e);
    }
    var xC = function(e) {
      return !1;
    };
    function R_(e) {
      return xC(e);
    }
    var wC = null, DC = null, _C = null, bC = null, kC = null, OC = null, LC = null, MC = null, NC = null;
    {
      var zC = function(e, t, a) {
        var i = t[a], u = mn(e) ? e.slice() : He({}, e);
        return a + 1 === t.length ? (mn(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = zC(e[i], t, a + 1), u);
      }, UC = function(e, t) {
        return zC(e, t, 0);
      }, AC = function(e, t, a, i) {
        var u = t[i], s = mn(e) ? e.slice() : He({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], mn(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = AC(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, FC = function(e, t, a) {
        if (t.length !== a.length) {
          Ve("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ve("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return AC(e, t, a, 0);
      }, HC = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = mn(e) ? e.slice() : He({}, e);
        return s[u] = HC(e[u], t, a + 1, i), s;
      }, jC = function(e, t, a) {
        return HC(e, t, 0, a);
      }, a0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      wC = function(e, t, a, i) {
        var u = a0(e, t);
        if (u !== null) {
          var s = jC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = He({}, e.memoizedProps);
          var f = pa(e, ye);
          f !== null && Hn(f, e, ye, xt);
        }
      }, DC = function(e, t, a) {
        var i = a0(e, t);
        if (i !== null) {
          var u = UC(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = He({}, e.memoizedProps);
          var s = pa(e, ye);
          s !== null && Hn(s, e, ye, xt);
        }
      }, _C = function(e, t, a, i) {
        var u = a0(e, t);
        if (u !== null) {
          var s = FC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = He({}, e.memoizedProps);
          var f = pa(e, ye);
          f !== null && Hn(f, e, ye, xt);
        }
      }, bC = function(e, t, a) {
        e.pendingProps = jC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = pa(e, ye);
        i !== null && Hn(i, e, ye, xt);
      }, kC = function(e, t) {
        e.pendingProps = UC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = pa(e, ye);
        a !== null && Hn(a, e, ye, xt);
      }, OC = function(e, t, a) {
        e.pendingProps = FC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = pa(e, ye);
        i !== null && Hn(i, e, ye, xt);
      }, LC = function(e) {
        var t = pa(e, ye);
        t !== null && Hn(t, e, ye, xt);
      }, MC = function(e) {
        RC = e;
      }, NC = function(e) {
        xC = e;
      };
    }
    function x_(e) {
      var t = ra(e);
      return t === null ? null : t.stateNode;
    }
    function w_(e) {
      return null;
    }
    function D_() {
      return Kt;
    }
    function __(e) {
      var t = e.findFiberByHostInstance, a = k.ReactCurrentDispatcher;
      return Jf({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: wC,
        overrideHookStateDeletePath: DC,
        overrideHookStateRenamePath: _C,
        overrideProps: bC,
        overridePropsDeletePath: kC,
        overridePropsRenamePath: OC,
        setErrorHandler: MC,
        setSuspenseHandler: NC,
        scheduleUpdate: LC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: x_,
        findFiberByHostInstance: t || w_,
        // React Refresh
        findHostInstancesForRefresh: r_,
        scheduleRefresh: t_,
        scheduleRoot: n_,
        setRefreshHandler: e_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: D_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: e0
      });
    }
    var VC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function i0(e) {
      this._internalRoot = e;
    }
    bm.prototype.render = i0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : km(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Zt) {
          var i = TC(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Rp(e, t, null, null);
    }, bm.prototype.unmount = i0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Z1() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Wl(function() {
          Rp(null, e, null, null);
        }), V0(t);
      }
    };
    function b_(e, t) {
      if (!km(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      BC(e);
      var a = !1, i = !1, u = "", s = VC;
      t != null && (t.hydrate ? Ve("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ri && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = SC(e, Rh, null, a, i, u, s);
      mh(f.current, e);
      var p = e.nodeType === Zt ? e.parentNode : e;
      return kd(p), new i0(f);
    }
    function bm(e) {
      this._internalRoot = e;
    }
    function k_(e) {
      e && uy(e);
    }
    bm.prototype.unstable_scheduleHydration = k_;
    function O_(e, t, a) {
      if (!km(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      BC(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = VC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = EC(t, null, e, Rh, i, s, f, p, v);
      if (mh(m.current, e), kd(e), u)
        for (var y = 0; y < u.length; y++) {
          var x = u[y];
          zx(m, x);
        }
      return new bm(m);
    }
    function km(e) {
      return !!(e && (e.nodeType === dr || e.nodeType === ba || e.nodeType === vl || !rt));
    }
    function xp(e) {
      return !!(e && (e.nodeType === dr || e.nodeType === ba || e.nodeType === vl || e.nodeType === Zt && e.nodeValue === " react-mount-point-unstable "));
    }
    function BC(e) {
      e.nodeType === dr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Vd(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var L_ = k.ReactCurrentOwner, PC;
    PC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Zt) {
        var t = TC(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = l0(e), u = !!(i && $u(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === dr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function l0(e) {
      return e ? e.nodeType === ba ? e.documentElement : e.firstChild : null;
    }
    function $C() {
    }
    function M_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var T = _m(f);
            s.call(T);
          };
        }
        var f = EC(
          t,
          i,
          e,
          Iu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          $C
        );
        e._reactRootContainer = f, mh(f.current, e);
        var p = e.nodeType === Zt ? e.parentNode : e;
        return kd(p), Wl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var T = _m(y);
            m.call(T);
          };
        }
        var y = SC(
          e,
          Iu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          $C
        );
        e._reactRootContainer = y, mh(y.current, e);
        var x = e.nodeType === Zt ? e.parentNode : e;
        return kd(x), Wl(function() {
          Rp(t, y, a, i);
        }), y;
      }
    }
    function N_(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Om(e, t, a, i, u) {
      PC(a), N_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = M_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = _m(f);
            p.call(v);
          };
        }
        Rp(t, f, e, u);
      }
      return _m(f);
    }
    var YC = !1;
    function z_(e) {
      {
        YC || (YC = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = L_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", dt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === dr ? e : g_(e, "findDOMNode");
    }
    function U_(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Vd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Om(null, e, t, !0, a);
    }
    function A_(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Vd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Om(null, e, t, !1, a);
    }
    function F_(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !xp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !bo(e))
        throw new Error("parentComponent must be a valid React Component");
      return Om(e, t, a, !1, i);
    }
    var IC = !1;
    function H_(e) {
      if (IC || (IC = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !xp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Vd(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = l0(e), i = a && !$u(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Wl(function() {
          Om(null, null, e, !1, function() {
            e._reactRootContainer = null, V0(e);
          });
        }), !0;
      } else {
        {
          var u = l0(e), s = !!(u && $u(u)), f = e.nodeType === dr && xp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ku(S_), iy(E_), Ec(C_), Hv(ua), jv(Gn), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), vv(VT), Fs(FS, OD, Wl);
    function j_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!km(t))
        throw new Error("Target container is not a DOM element.");
      return y_(e, t, null, a);
    }
    function V_(e, t, a, i) {
      return F_(e, t, a, i);
    }
    var u0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [$u, $c, yh, As, wo, FS]
    };
    function B_(e, t) {
      return u0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), b_(e, t);
    }
    function P_(e, t, a) {
      return u0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), O_(e, t, a);
    }
    function $_(e) {
      return Z1() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Wl(e);
    }
    var Y_ = __({
      findFiberByHostInstance: ts,
      bundleType: 1,
      version: e0,
      rendererPackageName: "react-dom"
    });
    if (!Y_ && pn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var QC = window.location.protocol;
      /^(https?|file):$/.test(QC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (QC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u0, ga.createPortal = j_, ga.createRoot = B_, ga.findDOMNode = z_, ga.flushSync = $_, ga.hydrate = U_, ga.hydrateRoot = P_, ga.render = A_, ga.unmountComponentAtNode = H_, ga.unstable_batchedUpdates = FS, ga.unstable_renderSubtreeIntoContainer = V_, ga.version = e0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ga;
}
function rT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rT);
    } catch (P) {
      console.error(P);
    }
  }
}
process.env.NODE_ENV === "production" ? (rT(), f0.exports = hb()) : f0.exports = mb();
var aT = f0.exports;
const eT = {
  center: {
    enter: `${ti.modal} ${ti.modalEnter}`,
    exit: `${ti.modal} ${ti.modalExit}`
  },
  bottom: {
    enter: `${ti.modalBottom} ${ti.modalBottomEnter}`,
    exit: `${ti.modalBottom} ${ti.modalBottomExit}`
  }
}, yb = ({ isAnimation: P, isOpen: K, position: k, delay: Pe }) => {
  const [it, Ve] = G_(!1), g = X_(), Ct = K ? eT[k].enter : eT[k].exit;
  return q_(() => {
    if (!P) {
      Ve(K);
      return;
    }
    return K ? Ve(!0) : !K && it && (g.current = setTimeout(() => {
      Ve(!1);
    }, Pe)), () => {
      clearTimeout(g.current);
    };
  }, [P, K, it, Pe]), { mounted: it, modalAnimationClass: Ct };
}, gb = "_dimmed_21fx6_1", Sb = {
  dimmed: gb
}, Eb = ({ onDimmedClick: P, style: K, ...k }) => aT.createPortal(
  /* @__PURE__ */ Sa.jsx("div", { className: Sb.dimmed, style: K, onClick: P, ...k }),
  document.body
), Cb = "_modalHeader_1m1z4_1", Tb = {
  modalHeader: Cb
}, Rb = ({ style: P, children: K, ...k }) => /* @__PURE__ */ Sa.jsx("header", { className: Tb.modalHeader, style: P, ...k, children: K }), xb = "_title_jysup_1", wb = {
  title: xb
}, Db = ({ title: P }) => /* @__PURE__ */ Sa.jsx("span", { className: wb.title, children: P && P }), _b = "_closeButton_xu7h7_1", bb = {
  closeButton: _b
}, tT = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2729_1438)'%3e%3cpath%20d='M19.8167%206.41L18.4067%205L12.8167%2010.59L7.22665%205L5.81665%206.41L11.4067%2012L5.81665%2017.59L7.22665%2019L12.8167%2013.41L18.4067%2019L19.8167%2017.59L14.2267%2012L19.8167%206.41Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2729_1438'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.81665)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", kb = ({
  onClose: P,
  showCloseIcon: K = !0,
  customCloseIcon: k
}) => {
  const Pe = (it) => {
    it.currentTarget.src = tT;
  };
  return /* @__PURE__ */ Sa.jsx(Sa.Fragment, { children: K && /* @__PURE__ */ Sa.jsx(
    "img",
    {
      src: k ?? tT,
      alt: "close",
      className: bb.closeButton,
      onClick: P,
      onError: Pe
    }
  ) });
}, Ob = "_content_oq6f1_1", Lb = {
  content: Ob
}, Mb = ({ style: P, children: K, ...k }) => K ? /* @__PURE__ */ Sa.jsx("section", { className: Lb.content, style: P, ...k, children: K }) : null, Nb = "_closeButton_jjdzn_1", zb = {
  closeButton: Nb
}, Ub = ({
  label: P,
  onClose: K,
  style: k,
  ...Pe
}) => /* @__PURE__ */ Sa.jsx("button", { className: zb.closeButton, style: k, onClick: K, ...Pe, children: P }), Ab = "_confirmButton_9g36g_1", Fb = {
  confirmButton: Ab
}, Hb = ({
  label: P,
  onConfirm: K,
  style: k,
  ...Pe
}) => /* @__PURE__ */ Sa.jsx("button", { className: Fb.confirmButton, style: k, onClick: K, ...Pe, children: P }), jb = "_row_hr5wl_1", Vb = "_rowReverse_hr5wl_9", Bb = "_column_hr5wl_18", Pb = "_columnReverse_hr5wl_27", Mm = {
  row: jb,
  rowReverse: Vb,
  column: Bb,
  columnReverse: Pb
}, $b = {
  row: Mm.row,
  "row-reverse": Mm.rowReverse,
  column: Mm.column,
  "column-reverse": Mm.columnReverse
}, Yb = ({
  position: P = "column",
  children: K,
  ...k
}) => /* @__PURE__ */ Sa.jsx("footer", { className: $b[P], ...k, children: K }), Ib = {
  center: ti.modalWrapper,
  bottom: ti.modalBottomWrapper
}, Qb = {
  center: ti.modal,
  bottom: ti.modalBottom
}, Wb = ({
  isOpen: P,
  position: K = "center",
  isAnimation: k = !1,
  duration: Pe,
  style: it,
  children: Ve,
  ...g
}) => {
  const { mounted: Ct, modalAnimationClass: ce } = yb({
    isAnimation: k,
    isOpen: P,
    position: K,
    delay: Pe
  }), ue = k ? ce : Qb[K];
  return Ct ? /* @__PURE__ */ Sa.jsx(Sa.Fragment, { children: aT.createPortal(
    /* @__PURE__ */ Sa.jsx("div", { className: Ib[K], children: /* @__PURE__ */ Sa.jsx(
      "div",
      {
        className: ue,
        style: { animationDuration: `${Pe}ms`, ...it },
        ...g,
        children: Ve
      }
    ) }),
    document.body
  ) }) : null;
}, Zb = Object.assign(Wb, {
  Dimmed: Eb,
  Header: Rb,
  Title: Db,
  CloseIcon: kb,
  Content: Mb,
  CloseButton: Ub,
  ConfirmButton: Hb,
  Footer: Yb
});
export {
  Zb as Modal
};
