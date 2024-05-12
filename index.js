import * as qD from "react";
import { useState as XD, useRef as KD, useEffect as ZD } from "react";
function JD(P) {
  if (P.__esModule)
    return P;
  var K = P.default;
  if (typeof K == "function") {
    var b = function Fe() {
      return this instanceof Fe ? Reflect.construct(K, arguments, this.constructor) : K.apply(this, arguments);
    };
    b.prototype = K.prototype;
  } else
    b = {};
  return Object.defineProperty(b, "__esModule", { value: !0 }), Object.keys(P).forEach(function(Fe) {
    var $e = Object.getOwnPropertyDescriptor(P, Fe);
    Object.defineProperty(b, Fe, $e.get ? $e : {
      enumerable: !0,
      get: function() {
        return P[Fe];
      }
    });
  }), b;
}
var d0 = { exports: {} }, _p = {};
const Um = /* @__PURE__ */ JD(qD);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qC;
function eb() {
  if (qC)
    return _p;
  qC = 1;
  var P = Um, K = Symbol.for("react.element"), b = Symbol.for("react.fragment"), Fe = Object.prototype.hasOwnProperty, $e = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(Ct, ce, ue) {
    var Ze, Z = {}, fe = null, oe = null;
    ue !== void 0 && (fe = "" + ue), ce.key !== void 0 && (fe = "" + ce.key), ce.ref !== void 0 && (oe = ce.ref);
    for (Ze in ce)
      Fe.call(ce, Ze) && !Le.hasOwnProperty(Ze) && (Z[Ze] = ce[Ze]);
    if (Ct && Ct.defaultProps)
      for (Ze in ce = Ct.defaultProps, ce)
        Z[Ze] === void 0 && (Z[Ze] = ce[Ze]);
    return { $$typeof: K, type: Ct, key: fe, ref: oe, props: Z, _owner: $e.current };
  }
  return _p.Fragment = b, _p.jsx = g, _p.jsxs = g, _p;
}
var Dp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XC;
function tb() {
  return XC || (XC = 1, process.env.NODE_ENV !== "production" && function() {
    var P = Um, K = Symbol.for("react.element"), b = Symbol.for("react.portal"), Fe = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), Le = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), Ct = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Ze = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), Ue = Symbol.iterator, st = "@@iterator";
    function yt(E) {
      if (E === null || typeof E != "object")
        return null;
      var j = Ue && E[Ue] || E[st];
      return typeof j == "function" ? j : null;
    }
    var fn = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Je(E) {
      {
        for (var j = arguments.length, I = new Array(j > 1 ? j - 1 : 0), me = 1; me < j; me++)
          I[me - 1] = arguments[me];
        Pe("error", E, I);
      }
    }
    function Pe(E, j, I) {
      {
        var me = fn.ReactDebugCurrentFrame, Ge = me.getStackAddendum();
        Ge !== "" && (j += "%s", I = I.concat([Ge]));
        var Ke = I.map(function(xe) {
          return String(xe);
        });
        Ke.unshift("Warning: " + j), Function.prototype.apply.call(console[E], console, Ke);
      }
    }
    var gt = !1, Ye = !1, wt = !1, Ae = !1, Rn = !1, jn;
    jn = Symbol.for("react.module.reference");
    function Bt(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === Fe || E === Le || Rn || E === $e || E === ue || E === Ze || Ae || E === oe || gt || Ye || wt || typeof E == "object" && E !== null && (E.$$typeof === fe || E.$$typeof === Z || E.$$typeof === g || E.$$typeof === Ct || E.$$typeof === ce || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === jn || E.getModuleId !== void 0));
    }
    function pt(E, j, I) {
      var me = E.displayName;
      if (me)
        return me;
      var Ge = j.displayName || j.name || "";
      return Ge !== "" ? I + "(" + Ge + ")" : I;
    }
    function xn(E) {
      return E.displayName || "Context";
    }
    function be(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && Je("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case Fe:
          return "Fragment";
        case b:
          return "Portal";
        case Le:
          return "Profiler";
        case $e:
          return "StrictMode";
        case ue:
          return "Suspense";
        case Ze:
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
          case Z:
            var me = E.displayName || null;
            return me !== null ? me : be(E.type) || "Memo";
          case fe: {
            var Ge = E, Ke = Ge._payload, xe = Ge._init;
            try {
              return be(xe(Ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var We = Object.assign, dn = 0, _t, Xn, Y, Ce, te, et, at;
    function wn() {
    }
    wn.__reactDisabledLog = !0;
    function Kn() {
      {
        if (dn === 0) {
          _t = console.log, Xn = console.info, Y = console.warn, Ce = console.error, te = console.group, et = console.groupCollapsed, at = console.groupEnd;
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
    function Aa() {
      {
        if (dn--, dn === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: We({}, E, {
              value: _t
            }),
            info: We({}, E, {
              value: Xn
            }),
            warn: We({}, E, {
              value: Y
            }),
            error: We({}, E, {
              value: Ce
            }),
            group: We({}, E, {
              value: te
            }),
            groupCollapsed: We({}, E, {
              value: et
            }),
            groupEnd: We({}, E, {
              value: at
            })
          });
        }
        dn < 0 && Je("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var nn = fn.ReactCurrentDispatcher, Gr;
    function Bn(E, j, I) {
      {
        if (Gr === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var me = Ge.stack.trim().match(/\n( *(at )?)/);
            Gr = me && me[1] || "";
          }
        return `
` + Gr + E;
      }
    }
    var or = !1, Fa;
    {
      var sr = typeof WeakMap == "function" ? WeakMap : Map;
      Fa = new sr();
    }
    function qr(E, j) {
      if (!E || or)
        return "";
      {
        var I = Fa.get(E);
        if (I !== void 0)
          return I;
      }
      var me;
      or = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ke;
      Ke = nn.current, nn.current = null, Kn();
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
          for (var je = $n.stack.split(`
`), hn = me.stack.split(`
`), Dt = je.length - 1, At = hn.length - 1; Dt >= 1 && At >= 0 && je[Dt] !== hn[At]; )
            At--;
          for (; Dt >= 1 && At >= 0; Dt--, At--)
            if (je[Dt] !== hn[At]) {
              if (Dt !== 1 || At !== 1)
                do
                  if (Dt--, At--, At < 0 || je[Dt] !== hn[At]) {
                    var fr = `
` + je[Dt].replace(" at new ", " at ");
                    return E.displayName && fr.includes("<anonymous>") && (fr = fr.replace("<anonymous>", E.displayName)), typeof E == "function" && Fa.set(E, fr), fr;
                  }
                while (Dt >= 1 && At >= 0);
              break;
            }
        }
      } finally {
        or = !1, nn.current = Ke, Aa(), Error.prepareStackTrace = Ge;
      }
      var Mi = E ? E.displayName || E.name : "", lt = Mi ? Bn(Mi) : "";
      return typeof E == "function" && Fa.set(E, lt), lt;
    }
    function pn(E, j, I) {
      return qr(E, !1);
    }
    function Vn(E) {
      var j = E.prototype;
      return !!(j && j.isReactComponent);
    }
    function _n(E, j, I) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return qr(E, Vn(E));
      if (typeof E == "string")
        return Bn(E);
      switch (E) {
        case ue:
          return Bn("Suspense");
        case Ze:
          return Bn("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case ce:
            return pn(E.render);
          case Z:
            return _n(E.type, j, I);
          case fe: {
            var me = E, Ge = me._payload, Ke = me._init;
            try {
              return _n(Ke(Ge), j, I);
            } catch {
            }
          }
        }
      return "";
    }
    var Dn = Object.prototype.hasOwnProperty, Pn = {}, Xr = fn.ReactDebugCurrentFrame;
    function Ca(E) {
      if (E) {
        var j = E._owner, I = _n(E.type, E._source, j ? j.type : null);
        Xr.setExtraStackFrame(I);
      } else
        Xr.setExtraStackFrame(null);
    }
    function ni(E, j, I, me, Ge) {
      {
        var Ke = Function.call.bind(Dn);
        for (var xe in E)
          if (Ke(E, xe)) {
            var je = void 0;
            try {
              if (typeof E[xe] != "function") {
                var hn = Error((me || "React class") + ": " + I + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw hn.name = "Invariant Violation", hn;
              }
              je = E[xe](j, xe, me, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Dt) {
              je = Dt;
            }
            je && !(je instanceof Error) && (Ca(Ge), Je("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", I, xe, typeof je), Ca(null)), je instanceof Error && !(je.message in Pn) && (Pn[je.message] = !0, Ca(Ge), Je("Failed %s type: %s", I, je.message), Ca(null));
          }
      }
    }
    var Ha = Array.isArray;
    function Ta(E) {
      return Ha(E);
    }
    function br(E) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, I = j && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return I;
      }
    }
    function ja(E) {
      try {
        return kr(E), !1;
      } catch {
        return !0;
      }
    }
    function kr(E) {
      return "" + E;
    }
    function Ra(E) {
      if (ja(E))
        return Je("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(E)), kr(E);
    }
    var Xt = fn.ReactCurrentOwner, Or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oi, xa, G;
    G = {};
    function ge(E) {
      if (Dn.call(E, "ref")) {
        var j = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function He(E) {
      if (Dn.call(E, "key")) {
        var j = Object.getOwnPropertyDescriptor(E, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function ct(E, j) {
      if (typeof E.ref == "string" && Xt.current && j && Xt.current.stateNode !== j) {
        var I = be(Xt.current.type);
        G[I] || (Je('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', be(Xt.current.type), E.ref), G[I] = !0);
      }
    }
    function Ut(E, j) {
      {
        var I = function() {
          Oi || (Oi = !0, Je("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
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
          xa || (xa = !0, Je("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        I.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var It = function(E, j, I, me, Ge, Ke, xe) {
      var je = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: K,
        // Built-in properties that belong on the element
        type: E,
        key: j,
        ref: I,
        props: xe,
        // Record the component responsible for creating this element.
        _owner: Ke
      };
      return je._store = {}, Object.defineProperty(je._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(je, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty(je, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(je.props), Object.freeze(je)), je;
    };
    function cr(E, j, I, me, Ge) {
      {
        var Ke, xe = {}, je = null, hn = null;
        I !== void 0 && (Ra(I), je = "" + I), He(j) && (Ra(j.key), je = "" + j.key), ge(j) && (hn = j.ref, ct(j, Ge));
        for (Ke in j)
          Dn.call(j, Ke) && !Or.hasOwnProperty(Ke) && (xe[Ke] = j[Ke]);
        if (E && E.defaultProps) {
          var Dt = E.defaultProps;
          for (Ke in Dt)
            xe[Ke] === void 0 && (xe[Ke] = Dt[Ke]);
        }
        if (je || hn) {
          var At = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          je && Ut(xe, At), hn && vn(xe, At);
        }
        return It(E, je, hn, Ge, me, Xt.current, xe);
      }
    }
    var Tt = fn.ReactCurrentOwner, Lr = fn.ReactDebugCurrentFrame;
    function St(E) {
      if (E) {
        var j = E._owner, I = _n(E.type, E._source, j ? j.type : null);
        Lr.setExtraStackFrame(I);
      } else
        Lr.setExtraStackFrame(null);
    }
    var Rt;
    Rt = !1;
    function Xl(E) {
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
        E && E._owner && E._owner !== Tt.current && (me = " It was passed a child from " + be(E._owner.type) + "."), St(E), Je('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, me), St(null);
      }
    }
    function Zl(E, j) {
      {
        if (typeof E != "object")
          return;
        if (Ta(E))
          for (var I = 0; I < E.length; I++) {
            var me = E[I];
            Xl(me) && ol(me, j);
          }
        else if (Xl(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var Ge = yt(E);
          if (typeof Ge == "function" && Ge !== E.entries)
            for (var Ke = Ge.call(E), xe; !(xe = Ke.next()).done; )
              Xl(xe.value) && ol(xe.value, j);
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
        j.$$typeof === Z))
          I = j.propTypes;
        else
          return;
        if (I) {
          var me = be(j);
          ni(I, E.props, "prop", me, E);
        } else if (j.PropTypes !== void 0 && !Rt) {
          Rt = !0;
          var Ge = be(j);
          Je("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && Je("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jl(E) {
      {
        for (var j = Object.keys(E.props), I = 0; I < j.length; I++) {
          var me = j[I];
          if (me !== "children" && me !== "key") {
            St(E), Je("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), St(null);
            break;
          }
        }
        E.ref !== null && (St(E), Je("Invalid attribute `ref` supplied to `React.Fragment`."), St(null));
      }
    }
    var Ba = {};
    function ri(E, j, I, me, Ge, Ke) {
      {
        var xe = Bt(E);
        if (!xe) {
          var je = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (je += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var hn = Kl();
          hn ? je += hn : je += ul();
          var Dt;
          E === null ? Dt = "null" : Ta(E) ? Dt = "array" : E !== void 0 && E.$$typeof === K ? (Dt = "<" + (be(E.type) || "Unknown") + " />", je = " Did you accidentally export a JSX literal instead of a component?") : Dt = typeof E, Je("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Dt, je);
        }
        var At = cr(E, j, I, Ge, Ke);
        if (At == null)
          return At;
        if (xe) {
          var fr = j.children;
          if (fr !== void 0)
            if (me)
              if (Ta(fr)) {
                for (var Mi = 0; Mi < fr.length; Mi++)
                  Zl(fr[Mi], E);
                Object.freeze && Object.freeze(fr);
              } else
                Je("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zl(fr, E);
        }
        if (Dn.call(j, "key")) {
          var lt = be(E), $n = Object.keys(j).filter(function(Va) {
            return Va !== "key";
          }), Nr = $n.length > 0 ? "{key: someKey, " + $n.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ba[lt + Nr]) {
            var Be = $n.length > 0 ? "{" + $n.join(": ..., ") + ": ...}" : "{}";
            Je(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Nr, lt, Be, lt), Ba[lt + Nr] = !0;
          }
        }
        return E === Fe ? Jl(At) : sl(At), At;
      }
    }
    function Mr(E, j, I) {
      return ri(E, j, I, !0);
    }
    function wa(E, j, I) {
      return ri(E, j, I, !1);
    }
    var Li = wa, cl = Mr;
    Dp.Fragment = Fe, Dp.jsx = Li, Dp.jsxs = cl;
  }()), Dp;
}
process.env.NODE_ENV === "production" ? d0.exports = eb() : d0.exports = tb();
var Wr = d0.exports;
const nb = "_dimmed_17u9q_9", rb = "_modalWrapper_17u9q_15", ab = "_modalBottomWrapper_17u9q_25", ib = "_modal_17u9q_15", lb = "_modalBottom_17u9q_25", ub = "_small_17u9q_51", ob = "_medium_17u9q_55", sb = "_large_17u9q_59", cb = "_modalEnter_17u9q_63", fb = "_modalFadeIn_17u9q_1", db = "_modalExit_17u9q_67", pb = "_modalFadeOut_17u9q_1", vb = "_modalBottomEnter_17u9q_71", hb = "_modalBottomFadeIn_17u9q_1", mb = "_modalBottomExit_17u9q_75", yb = "_modalBottomFadeOut_17u9q_1", Qr = {
  dimmed: nb,
  modalWrapper: rb,
  modalBottomWrapper: ab,
  modal: ib,
  modalBottom: lb,
  small: ub,
  medium: ob,
  large: sb,
  modalEnter: cb,
  modalFadeIn: fb,
  modalExit: db,
  modalFadeOut: pb,
  modalBottomEnter: vb,
  modalBottomFadeIn: hb,
  modalBottomExit: mb,
  modalBottomFadeOut: yb
};
var p0 = { exports: {} }, Sa = {}, Lm = { exports: {} }, c0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KC;
function gb() {
  return KC || (KC = 1, function(P) {
    function K(Y, Ce) {
      var te = Y.length;
      Y.push(Ce);
      e:
        for (; 0 < te; ) {
          var et = te - 1 >>> 1, at = Y[et];
          if (0 < $e(at, Ce))
            Y[et] = Ce, Y[te] = at, te = et;
          else
            break e;
        }
    }
    function b(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function Fe(Y) {
      if (Y.length === 0)
        return null;
      var Ce = Y[0], te = Y.pop();
      if (te !== Ce) {
        Y[0] = te;
        e:
          for (var et = 0, at = Y.length, wn = at >>> 1; et < wn; ) {
            var Kn = 2 * (et + 1) - 1, Aa = Y[Kn], nn = Kn + 1, Gr = Y[nn];
            if (0 > $e(Aa, te))
              nn < at && 0 > $e(Gr, Aa) ? (Y[et] = Gr, Y[nn] = te, et = nn) : (Y[et] = Aa, Y[Kn] = te, et = Kn);
            else if (nn < at && 0 > $e(Gr, te))
              Y[et] = Gr, Y[nn] = te, et = nn;
            else
              break e;
          }
      }
      return Ce;
    }
    function $e(Y, Ce) {
      var te = Y.sortIndex - Ce.sortIndex;
      return te !== 0 ? te : Y.id - Ce.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Le = performance;
      P.unstable_now = function() {
        return Le.now();
      };
    } else {
      var g = Date, Ct = g.now();
      P.unstable_now = function() {
        return g.now() - Ct;
      };
    }
    var ce = [], ue = [], Ze = 1, Z = null, fe = 3, oe = !1, Ue = !1, st = !1, yt = typeof setTimeout == "function" ? setTimeout : null, fn = typeof clearTimeout == "function" ? clearTimeout : null, Je = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Pe(Y) {
      for (var Ce = b(ue); Ce !== null; ) {
        if (Ce.callback === null)
          Fe(ue);
        else if (Ce.startTime <= Y)
          Fe(ue), Ce.sortIndex = Ce.expirationTime, K(ce, Ce);
        else
          break;
        Ce = b(ue);
      }
    }
    function gt(Y) {
      if (st = !1, Pe(Y), !Ue)
        if (b(ce) !== null)
          Ue = !0, _t(Ye);
        else {
          var Ce = b(ue);
          Ce !== null && Xn(gt, Ce.startTime - Y);
        }
    }
    function Ye(Y, Ce) {
      Ue = !1, st && (st = !1, fn(Rn), Rn = -1), oe = !0;
      var te = fe;
      try {
        for (Pe(Ce), Z = b(ce); Z !== null && (!(Z.expirationTime > Ce) || Y && !pt()); ) {
          var et = Z.callback;
          if (typeof et == "function") {
            Z.callback = null, fe = Z.priorityLevel;
            var at = et(Z.expirationTime <= Ce);
            Ce = P.unstable_now(), typeof at == "function" ? Z.callback = at : Z === b(ce) && Fe(ce), Pe(Ce);
          } else
            Fe(ce);
          Z = b(ce);
        }
        if (Z !== null)
          var wn = !0;
        else {
          var Kn = b(ue);
          Kn !== null && Xn(gt, Kn.startTime - Ce), wn = !1;
        }
        return wn;
      } finally {
        Z = null, fe = te, oe = !1;
      }
    }
    var wt = !1, Ae = null, Rn = -1, jn = 5, Bt = -1;
    function pt() {
      return !(P.unstable_now() - Bt < jn);
    }
    function xn() {
      if (Ae !== null) {
        var Y = P.unstable_now();
        Bt = Y;
        var Ce = !0;
        try {
          Ce = Ae(!0, Y);
        } finally {
          Ce ? be() : (wt = !1, Ae = null);
        }
      } else
        wt = !1;
    }
    var be;
    if (typeof Je == "function")
      be = function() {
        Je(xn);
      };
    else if (typeof MessageChannel < "u") {
      var We = new MessageChannel(), dn = We.port2;
      We.port1.onmessage = xn, be = function() {
        dn.postMessage(null);
      };
    } else
      be = function() {
        yt(xn, 0);
      };
    function _t(Y) {
      Ae = Y, wt || (wt = !0, be());
    }
    function Xn(Y, Ce) {
      Rn = yt(function() {
        Y(P.unstable_now());
      }, Ce);
    }
    P.unstable_IdlePriority = 5, P.unstable_ImmediatePriority = 1, P.unstable_LowPriority = 4, P.unstable_NormalPriority = 3, P.unstable_Profiling = null, P.unstable_UserBlockingPriority = 2, P.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, P.unstable_continueExecution = function() {
      Ue || oe || (Ue = !0, _t(Ye));
    }, P.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : jn = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, P.unstable_getCurrentPriorityLevel = function() {
      return fe;
    }, P.unstable_getFirstCallbackNode = function() {
      return b(ce);
    }, P.unstable_next = function(Y) {
      switch (fe) {
        case 1:
        case 2:
        case 3:
          var Ce = 3;
          break;
        default:
          Ce = fe;
      }
      var te = fe;
      fe = Ce;
      try {
        return Y();
      } finally {
        fe = te;
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
      var te = fe;
      fe = Y;
      try {
        return Ce();
      } finally {
        fe = te;
      }
    }, P.unstable_scheduleCallback = function(Y, Ce, te) {
      var et = P.unstable_now();
      switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? et + te : et) : te = et, Y) {
        case 1:
          var at = -1;
          break;
        case 2:
          at = 250;
          break;
        case 5:
          at = 1073741823;
          break;
        case 4:
          at = 1e4;
          break;
        default:
          at = 5e3;
      }
      return at = te + at, Y = { id: Ze++, callback: Ce, priorityLevel: Y, startTime: te, expirationTime: at, sortIndex: -1 }, te > et ? (Y.sortIndex = te, K(ue, Y), b(ce) === null && Y === b(ue) && (st ? (fn(Rn), Rn = -1) : st = !0, Xn(gt, te - et))) : (Y.sortIndex = at, K(ce, Y), Ue || oe || (Ue = !0, _t(Ye))), Y;
    }, P.unstable_shouldYield = pt, P.unstable_wrapCallback = function(Y) {
      var Ce = fe;
      return function() {
        var te = fe;
        fe = Ce;
        try {
          return Y.apply(this, arguments);
        } finally {
          fe = te;
        }
      };
    };
  }(c0)), c0;
}
var f0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZC;
function Sb() {
  return ZC || (ZC = 1, function(P) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var K = !1, b = !1, Fe = 5;
      function $e(G, ge) {
        var He = G.length;
        G.push(ge), Ct(G, ge, He);
      }
      function Le(G) {
        return G.length === 0 ? null : G[0];
      }
      function g(G) {
        if (G.length === 0)
          return null;
        var ge = G[0], He = G.pop();
        return He !== ge && (G[0] = He, ce(G, He, 0)), ge;
      }
      function Ct(G, ge, He) {
        for (var ct = He; ct > 0; ) {
          var Ut = ct - 1 >>> 1, vn = G[Ut];
          if (ue(vn, ge) > 0)
            G[Ut] = ge, G[ct] = vn, ct = Ut;
          else
            return;
        }
      }
      function ce(G, ge, He) {
        for (var ct = He, Ut = G.length, vn = Ut >>> 1; ct < vn; ) {
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
        var He = G.sortIndex - ge.sortIndex;
        return He !== 0 ? He : G.id - ge.id;
      }
      var Ze = 1, Z = 2, fe = 3, oe = 4, Ue = 5;
      function st(G, ge) {
      }
      var yt = typeof performance == "object" && typeof performance.now == "function";
      if (yt) {
        var fn = performance;
        P.unstable_now = function() {
          return fn.now();
        };
      } else {
        var Je = Date, Pe = Je.now();
        P.unstable_now = function() {
          return Je.now() - Pe;
        };
      }
      var gt = 1073741823, Ye = -1, wt = 250, Ae = 5e3, Rn = 1e4, jn = gt, Bt = [], pt = [], xn = 1, be = null, We = fe, dn = !1, _t = !1, Xn = !1, Y = typeof setTimeout == "function" ? setTimeout : null, Ce = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function et(G) {
        for (var ge = Le(pt); ge !== null; ) {
          if (ge.callback === null)
            g(pt);
          else if (ge.startTime <= G)
            g(pt), ge.sortIndex = ge.expirationTime, $e(Bt, ge);
          else
            return;
          ge = Le(pt);
        }
      }
      function at(G) {
        if (Xn = !1, et(G), !_t)
          if (Le(Bt) !== null)
            _t = !0, Ra(wn);
          else {
            var ge = Le(pt);
            ge !== null && Xt(at, ge.startTime - G);
          }
      }
      function wn(G, ge) {
        _t = !1, Xn && (Xn = !1, Or()), dn = !0;
        var He = We;
        try {
          var ct;
          if (!b)
            return Kn(G, ge);
        } finally {
          be = null, We = He, dn = !1;
        }
      }
      function Kn(G, ge) {
        var He = ge;
        for (et(He), be = Le(Bt); be !== null && !K && !(be.expirationTime > He && (!G || Ca())); ) {
          var ct = be.callback;
          if (typeof ct == "function") {
            be.callback = null, We = be.priorityLevel;
            var Ut = be.expirationTime <= He, vn = ct(Ut);
            He = P.unstable_now(), typeof vn == "function" ? be.callback = vn : be === Le(Bt) && g(Bt), et(He);
          } else
            g(Bt);
          be = Le(Bt);
        }
        if (be !== null)
          return !0;
        var It = Le(pt);
        return It !== null && Xt(at, It.startTime - He), !1;
      }
      function Aa(G, ge) {
        switch (G) {
          case Ze:
          case Z:
          case fe:
          case oe:
          case Ue:
            break;
          default:
            G = fe;
        }
        var He = We;
        We = G;
        try {
          return ge();
        } finally {
          We = He;
        }
      }
      function nn(G) {
        var ge;
        switch (We) {
          case Ze:
          case Z:
          case fe:
            ge = fe;
            break;
          default:
            ge = We;
            break;
        }
        var He = We;
        We = ge;
        try {
          return G();
        } finally {
          We = He;
        }
      }
      function Gr(G) {
        var ge = We;
        return function() {
          var He = We;
          We = ge;
          try {
            return G.apply(this, arguments);
          } finally {
            We = He;
          }
        };
      }
      function Bn(G, ge, He) {
        var ct = P.unstable_now(), Ut;
        if (typeof He == "object" && He !== null) {
          var vn = He.delay;
          typeof vn == "number" && vn > 0 ? Ut = ct + vn : Ut = ct;
        } else
          Ut = ct;
        var It;
        switch (G) {
          case Ze:
            It = Ye;
            break;
          case Z:
            It = wt;
            break;
          case Ue:
            It = jn;
            break;
          case oe:
            It = Rn;
            break;
          case fe:
          default:
            It = Ae;
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
        return Ut > ct ? (Tt.sortIndex = Ut, $e(pt, Tt), Le(Bt) === null && Tt === Le(pt) && (Xn ? Or() : Xn = !0, Xt(at, Ut - ct))) : (Tt.sortIndex = cr, $e(Bt, Tt), !_t && !dn && (_t = !0, Ra(wn))), Tt;
      }
      function or() {
      }
      function Fa() {
        !_t && !dn && (_t = !0, Ra(wn));
      }
      function sr() {
        return Le(Bt);
      }
      function qr(G) {
        G.callback = null;
      }
      function pn() {
        return We;
      }
      var Vn = !1, _n = null, Dn = -1, Pn = Fe, Xr = -1;
      function Ca() {
        var G = P.unstable_now() - Xr;
        return !(G < Pn);
      }
      function ni() {
      }
      function Ha(G) {
        if (G < 0 || G > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        G > 0 ? Pn = Math.floor(1e3 / G) : Pn = Fe;
      }
      var Ta = function() {
        if (_n !== null) {
          var G = P.unstable_now();
          Xr = G;
          var ge = !0, He = !0;
          try {
            He = _n(ge, G);
          } finally {
            He ? br() : (Vn = !1, _n = null);
          }
        } else
          Vn = !1;
      }, br;
      if (typeof te == "function")
        br = function() {
          te(Ta);
        };
      else if (typeof MessageChannel < "u") {
        var ja = new MessageChannel(), kr = ja.port2;
        ja.port1.onmessage = Ta, br = function() {
          kr.postMessage(null);
        };
      } else
        br = function() {
          Y(Ta, 0);
        };
      function Ra(G) {
        _n = G, Vn || (Vn = !0, br());
      }
      function Xt(G, ge) {
        Dn = Y(function() {
          G(P.unstable_now());
        }, ge);
      }
      function Or() {
        Ce(Dn), Dn = -1;
      }
      var Oi = ni, xa = null;
      P.unstable_IdlePriority = Ue, P.unstable_ImmediatePriority = Ze, P.unstable_LowPriority = oe, P.unstable_NormalPriority = fe, P.unstable_Profiling = xa, P.unstable_UserBlockingPriority = Z, P.unstable_cancelCallback = qr, P.unstable_continueExecution = Fa, P.unstable_forceFrameRate = Ha, P.unstable_getCurrentPriorityLevel = pn, P.unstable_getFirstCallbackNode = sr, P.unstable_next = nn, P.unstable_pauseExecution = or, P.unstable_requestPaint = Oi, P.unstable_runWithPriority = Aa, P.unstable_scheduleCallback = Bn, P.unstable_shouldYield = Ca, P.unstable_wrapCallback = Gr, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(f0)), f0;
}
var JC;
function aT() {
  return JC || (JC = 1, process.env.NODE_ENV === "production" ? Lm.exports = gb() : Lm.exports = Sb()), Lm.exports;
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
var eT;
function Eb() {
  if (eT)
    return Sa;
  eT = 1;
  var P = Um, K = aT();
  function b(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Fe = /* @__PURE__ */ new Set(), $e = {};
  function Le(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for ($e[n] = r, n = 0; n < r.length; n++)
      Fe.add(r[n]);
  }
  var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ce = Object.prototype.hasOwnProperty, ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ze = {}, Z = {};
  function fe(n) {
    return ce.call(Z, n) ? !0 : ce.call(Ze, n) ? !1 : ue.test(n) ? Z[n] = !0 : (Ze[n] = !0, !1);
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
  function Ue(n, r, l, o) {
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
  function Je(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fn,
      Je
    );
    yt[r] = new st(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fn, Je);
    yt[r] = new st(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fn, Je);
    yt[r] = new st(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    yt[n] = new st(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), yt.xlinkHref = new st("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    yt[n] = new st(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Pe(n, r, l, o) {
    var c = yt.hasOwnProperty(r) ? yt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ue(r, l, c, o) && (l = null), o || c === null ? fe(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var gt = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ye = Symbol.for("react.element"), wt = Symbol.for("react.portal"), Ae = Symbol.for("react.fragment"), Rn = Symbol.for("react.strict_mode"), jn = Symbol.for("react.profiler"), Bt = Symbol.for("react.provider"), pt = Symbol.for("react.context"), xn = Symbol.for("react.forward_ref"), be = Symbol.for("react.suspense"), We = Symbol.for("react.suspense_list"), dn = Symbol.for("react.memo"), _t = Symbol.for("react.lazy"), Xn = Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function Ce(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var te = Object.assign, et;
  function at(n) {
    if (et === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        et = r && r[1] || "";
      }
    return `
` + et + n;
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
    return (n = n ? n.displayName || n.name : "") ? at(n) : "";
  }
  function Aa(n) {
    switch (n.tag) {
      case 5:
        return at(n.type);
      case 16:
        return at("Lazy");
      case 13:
        return at("Suspense");
      case 19:
        return at("SuspenseList");
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
      case Ae:
        return "Fragment";
      case wt:
        return "Portal";
      case jn:
        return "Profiler";
      case Rn:
        return "StrictMode";
      case be:
        return "Suspense";
      case We:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case pt:
          return (n.displayName || "Context") + ".Consumer";
        case Bt:
          return (n._context.displayName || "Context") + ".Provider";
        case xn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case dn:
          return r = n.displayName || null, r !== null ? r : nn(n.type) || "Memo";
        case _t:
          r = n._payload, n = n._init;
          try {
            return nn(n(r));
          } catch {
          }
      }
    return null;
  }
  function Gr(n) {
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
  function Bn(n) {
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
  function Fa(n) {
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
    n._valueTracker || (n._valueTracker = Fa(n));
  }
  function qr(n) {
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
  function Vn(n, r) {
    var l = r.checked;
    return te({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function _n(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Bn(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Dn(n, r) {
    r = r.checked, r != null && Pe(n, "checked", r, !1);
  }
  function Pn(n, r) {
    Dn(n, r);
    var l = Bn(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ca(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ca(n, r.type, Bn(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Xr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ca(n, r, l) {
    (r !== "number" || pn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ni = Array.isArray;
  function Ha(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Bn(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ta(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(b(91));
    return te({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function br(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(b(92));
        if (ni(l)) {
          if (1 < l.length)
            throw Error(b(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Bn(l) };
  }
  function ja(n, r) {
    var l = Bn(r.value), o = Bn(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function kr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Ra(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Xt(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ra(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
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
  function xa(n, r) {
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
  function He(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || G.hasOwnProperty(n) && G[n] ? ("" + r).trim() : r + "px";
  }
  function ct(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = He(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Ut = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function vn(n, r) {
    if (r) {
      if (Ut[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(b(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(b(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(b(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(b(62));
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
  function Xl(n) {
    if (n = bo(n)) {
      if (typeof Lr != "function")
        throw Error(b(280));
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
      if (Rt = St = null, Xl(n), r)
        for (n = 0; n < r.length; n++)
          Xl(r[n]);
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
      throw Error(b(231, r, typeof l));
    return l;
  }
  var Jl = !1;
  if (Ct)
    try {
      var Ba = {};
      Object.defineProperty(Ba, "passive", { get: function() {
        Jl = !0;
      } }), window.addEventListener("test", Ba, Ba), window.removeEventListener("test", Ba, Ba);
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
  var Mr = !1, wa = null, Li = !1, cl = null, E = { onError: function(n) {
    Mr = !0, wa = n;
  } };
  function j(n, r, l, o, c, d, h, S, C) {
    Mr = !1, wa = null, ri.apply(E, arguments);
  }
  function I(n, r, l, o, c, d, h, S, C) {
    if (j.apply(this, arguments), Mr) {
      if (Mr) {
        var L = wa;
        Mr = !1, wa = null;
      } else
        throw Error(b(198));
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
  function Ge(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Ke(n) {
    if (me(n) !== n)
      throw Error(b(188));
  }
  function xe(n) {
    var r = n.alternate;
    if (!r) {
      if (r = me(n), r === null)
        throw Error(b(188));
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
            return Ke(c), n;
          if (d === o)
            return Ke(c), r;
          d = d.sibling;
        }
        throw Error(b(188));
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
            throw Error(b(189));
        }
      }
      if (l.alternate !== o)
        throw Error(b(190));
    }
    if (l.tag !== 3)
      throw Error(b(188));
    return l.stateNode.current === l ? n : r;
  }
  function je(n) {
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
  var Dt = K.unstable_scheduleCallback, At = K.unstable_cancelCallback, fr = K.unstable_shouldYield, Mi = K.unstable_requestPaint, lt = K.unstable_now, $n = K.unstable_getCurrentPriorityLevel, Nr = K.unstable_ImmediatePriority, Be = K.unstable_UserBlockingPriority, Va = K.unstable_NormalPriority, bp = K.unstable_LowPriority, hf = K.unstable_IdlePriority, lo = null, _a = null;
  function kp(n) {
    if (_a && typeof _a.onCommitFiberRoot == "function")
      try {
        _a.onCommitFiberRoot(lo, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Kr = Math.clz32 ? Math.clz32 : Am, Op = Math.log, Lp = Math.LN2;
  function Am(n) {
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
        l = 31 - Kr(r), c = 1 << l, o |= n[l], r &= ~c;
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
      var h = 31 - Kr(d), S = 1 << h, C = c[h];
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
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Kr(r), n[r] = l;
  }
  function Fm(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function uo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var ft = 0;
  function Sf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Mp, Cs, dt, Np, Ef, Me = !1, oo = [], Kt = null, Zr = null, Jr = null, so = /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ new Map(), vt = [], Hm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ba(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Kt = null;
        break;
      case "dragenter":
      case "dragleave":
        Zr = null;
        break;
      case "mouseover":
      case "mouseout":
        Jr = null;
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
        return Zr = Yn(Zr, n, r, l, o, c), !0;
      case "mouseover":
        return Jr = Yn(Jr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return so.set(d, Yn(so.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, rn.set(d, Yn(rn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function zp(n) {
    var r = ta(n.target);
    if (r !== null) {
      var l = me(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ge(l), r !== null) {
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
    Me = !1, Kt !== null && tu(Kt) && (Kt = null), Zr !== null && tu(Zr) && (Zr = null), Jr !== null && tu(Jr) && (Jr = null), so.forEach(Cf), rn.forEach(Cf);
  }
  function co(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Me || (Me = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, Up)));
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
    for (Kt !== null && co(Kt, n), Zr !== null && co(Zr, n), Jr !== null && co(Jr, n), so.forEach(r), rn.forEach(r), l = 0; l < vt.length; l++)
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
        As(n, r, o, po, l), ba(n, o);
      else if (Ni(c, n, r, l, o))
        o.stopPropagation();
      else if (ba(n, o), r & 4 && -1 < Hm.indexOf(n)) {
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
    if (po = null, n = Tt(o), n = ta(n), n !== null)
      if (r = me(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Ge(r), n !== null)
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
          case Be:
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
    return te(r.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, ws = zr(zi), au = te({}, zi, { view: 0, detail: 0 }), Hp = zr(au), _s, xf, yo, mn = te({}, au, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: bf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== yo && (yo && n.type === "mousemove" ? (_s = n.screenX - yo.screenX, xf = n.screenY - yo.screenY) : xf = _s = 0, yo = n), _s);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : xf;
  } }), Ds = zr(mn), jp = te({}, mn, { dataTransfer: 0 }), Bp = zr(jp), jm = te({}, au, { relatedTarget: 0 }), Ui = zr(jm), wf = te({}, zi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vp = zr(wf), Bm = te({}, zi, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Vm = zr(Bm), Pm = te({}, zi, { data: 0 }), _f = zr(Pm), Df = {
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
  var ii = te({}, au, { key: function(n) {
    if (n.key) {
      var r = Df[n.key] || n.key;
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
  } }), $m = zr(ii), kf = te({}, mn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bs = zr(kf), Of = te({}, au, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: bf }), Ym = zr(Of), ks = te({}, zi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ip = zr(ks), dr = te({}, mn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), li = zr(dr), Zt = [9, 13, 27, 32], ka = Ct && "CompositionEvent" in window, vl = null;
  Ct && "documentMode" in document && (vl = document.documentMode);
  var Os = Ct && "TextEvent" in window && !vl, Qp = Ct && (!ka || vl && 8 < vl && 11 >= vl), iu = " ", Wp = !1;
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
  function Im(n, r) {
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
  function Qm(n, r) {
    if (lu)
      return n === "compositionend" || !ka && Gp(n, r) ? (n = Rf(), ho = vo = ai = null, lu = !1, n) : null;
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
  var qp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Xp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!qp[n.type] : r === "textarea";
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
    if (qr(r))
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
  function Wm(n, r, l) {
    n === "focusin" ? (ev(), go = r, uu = l, go.attachEvent("onpropertychange", tv)) : n === "focusout" && ev();
  }
  function Gm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return su(uu);
  }
  function qm(n, r) {
    if (n === "click")
      return su(r);
  }
  function nv(n, r) {
    if (n === "input" || n === "change")
      return su(r);
  }
  function Xm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ea = typeof Object.is == "function" ? Object.is : Xm;
  function So(n, r) {
    if (ea(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ce.call(r, c) || !ea(n[c], r[c]))
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
  var lv = Ct && "documentMode" in document && 11 >= document.documentMode, Oa = null, zf = null, Eo = null, Uf = !1;
  function uv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Uf || Oa == null || Oa !== pn(o) || (o = Oa, "selectionStart" in o && ui(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Eo && So(Eo, o) || (Eo = o, o = wo(zf, "onSelect"), 0 < o.length && (r = new ws("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Oa)));
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
    fv.set(n, r), Le(r, [n]);
  }
  for (var Co = 0; Co < dv.length; Co++) {
    var ml = dv[Co], Km = ml.toLowerCase(), To = ml[0].toUpperCase() + ml.slice(1);
    oi(Km, "on" + To);
  }
  oi(Hf, "onAnimationEnd"), oi(ov, "onAnimationIteration"), oi(sv, "onAnimationStart"), oi("dblclick", "onDoubleClick"), oi("focusin", "onFocus"), oi("focusout", "onBlur"), oi(cv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), Le("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Le("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Le("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Le("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Le("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Le("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));
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
      n[si] = !0, Fe.forEach(function(l) {
        l !== "selectionchange" && (Zm.has(l) || Ai(l, !1, n), Ai(l, !0, n));
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
              if (h = ta(S), h === null)
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
      var L = d, H = Tt(l), B = [];
      e: {
        var F = fv.get(n);
        if (F !== void 0) {
          var J = ws, ae = n;
          switch (n) {
            case "keypress":
              if (ru(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              J = $m;
              break;
            case "focusin":
              ae = "focus", J = Ui;
              break;
            case "focusout":
              ae = "blur", J = Ui;
              break;
            case "beforeblur":
            case "afterblur":
              J = Ui;
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
              J = Ds;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = Bp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = Ym;
              break;
            case Hf:
            case ov:
            case sv:
              J = Vp;
              break;
            case cv:
              J = Ip;
              break;
            case "scroll":
              J = Hp;
              break;
            case "wheel":
              J = li;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = Vm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = bs;
          }
          var se = (r & 4) !== 0, Gt = !se && n === "scroll", w = se ? F !== null ? F + "Capture" : null : F;
          se = [];
          for (var R = L, k; R !== null; ) {
            k = R;
            var $ = k.stateNode;
            if (k.tag === 5 && $ !== null && (k = $, w !== null && ($ = sl(R, w), $ != null && se.push(xo(R, $, k)))), Gt)
              break;
            R = R.return;
          }
          0 < se.length && (F = new J(F, ae, null, l, H), B.push({ event: F, listeners: se }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (F = n === "mouseover" || n === "pointerover", J = n === "mouseout" || n === "pointerout", F && l !== cr && (ae = l.relatedTarget || l.fromElement) && (ta(ae) || ae[ci]))
            break e;
          if ((J || F) && (F = H.window === H ? H : (F = H.ownerDocument) ? F.defaultView || F.parentWindow : window, J ? (ae = l.relatedTarget || l.toElement, J = L, ae = ae ? ta(ae) : null, ae !== null && (Gt = me(ae), ae !== Gt || ae.tag !== 5 && ae.tag !== 6) && (ae = null)) : (J = null, ae = L), J !== ae)) {
            if (se = Ds, $ = "onMouseLeave", w = "onMouseEnter", R = "mouse", (n === "pointerout" || n === "pointerover") && (se = bs, $ = "onPointerLeave", w = "onPointerEnter", R = "pointer"), Gt = J == null ? F : fu(J), k = ae == null ? F : fu(ae), F = new se($, R + "leave", J, l, H), F.target = Gt, F.relatedTarget = k, $ = null, ta(H) === L && (se = new se(w, R + "enter", ae, l, H), se.target = k, se.relatedTarget = Gt, $ = se), Gt = $, J && ae)
              t: {
                for (se = J, w = ae, R = 0, k = se; k; k = yl(k))
                  R++;
                for (k = 0, $ = w; $; $ = yl($))
                  k++;
                for (; 0 < R - k; )
                  se = yl(se), R--;
                for (; 0 < k - R; )
                  w = yl(w), k--;
                for (; R--; ) {
                  if (se === w || w !== null && se === w.alternate)
                    break t;
                  se = yl(se), w = yl(w);
                }
                se = null;
              }
            else
              se = null;
            J !== null && jf(B, F, J, se, !1), ae !== null && Gt !== null && jf(B, Gt, ae, se, !0);
          }
        }
        e: {
          if (F = L ? fu(L) : window, J = F.nodeName && F.nodeName.toLowerCase(), J === "select" || J === "input" && F.type === "file")
            var pe = Zp;
          else if (Xp(F))
            if (Lf)
              pe = nv;
            else {
              pe = Gm;
              var Te = Wm;
            }
          else
            (J = F.nodeName) && J.toLowerCase() === "input" && (F.type === "checkbox" || F.type === "radio") && (pe = qm);
          if (pe && (pe = pe(n, L))) {
            Kp(B, pe, l, H);
            break e;
          }
          Te && Te(n, F, L), n === "focusout" && (Te = F._wrapperState) && Te.controlled && F.type === "number" && Ca(F, "number", F.value);
        }
        switch (Te = L ? fu(L) : window, n) {
          case "focusin":
            (Xp(Te) || Te.contentEditable === "true") && (Oa = Te, zf = L, Eo = null);
            break;
          case "focusout":
            Eo = zf = Oa = null;
            break;
          case "mousedown":
            Uf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Uf = !1, uv(B, l, H);
            break;
          case "selectionchange":
            if (lv)
              break;
          case "keydown":
          case "keyup":
            uv(B, l, H);
        }
        var ie;
        if (ka)
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
        Re && (Qp && l.locale !== "ko" && (lu || Re !== "onCompositionStart" ? Re === "onCompositionEnd" && lu && (ie = Rf()) : (ai = H, vo = "value" in ai ? ai.value : ai.textContent, lu = !0)), Te = wo(L, Re), 0 < Te.length && (Re = new _f(Re, n, null, l, H), B.push({ event: Re, listeners: Te }), ie ? Re.data = ie : (ie = Ls(l), ie !== null && (Re.data = ie)))), (ie = Os ? Im(n, l) : Qm(n, l)) && (L = wo(L, "onBeforeInput"), 0 < L.length && (H = new _f("onBeforeInput", "beforeinput", null, l, H), B.push({ event: H, listeners: L }), H.data = ie));
      }
      Us(B, r);
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
  var Bf = /\r\n?/g, Jm = /\u0000|\uFFFD/g;
  function Vf(n) {
    return (typeof n == "string" ? n : "" + n).replace(Bf, `
`).replace(Jm, "");
  }
  function Fs(n, r, l) {
    if (r = Vf(r), Vf(n) !== r && l)
      throw Error(b(425));
  }
  function Hs() {
  }
  var Pf = null, gl = null;
  function _o(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Sl = typeof setTimeout == "function" ? setTimeout : void 0, hv = typeof clearTimeout == "function" ? clearTimeout : void 0, $f = typeof Promise == "function" ? Promise : void 0, Yf = typeof queueMicrotask == "function" ? queueMicrotask : typeof $f < "u" ? function(n) {
    return $f.resolve(null).then(n).catch(ey);
  } : Sl;
  function ey(n) {
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
  function La(n) {
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
  function Do(n) {
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
  var Hi = Math.random().toString(36).slice(2), Pa = "__reactFiber$" + Hi, El = "__reactProps$" + Hi, ci = "__reactContainer$" + Hi, If = "__reactEvents$" + Hi, ty = "__reactListeners$" + Hi, Qf = "__reactHandles$" + Hi;
  function ta(n) {
    var r = n[Pa];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ci] || l[Pa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = Do(n); n !== null; ) {
            if (l = n[Pa])
              return l;
            n = Do(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function bo(n) {
    return n = n[Pa] || n[ci], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function fu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(b(33));
  }
  function Se(n) {
    return n[El] || null;
  }
  var ji = [], bt = -1;
  function ze(n) {
    return { current: n };
  }
  function it(n) {
    0 > bt || (n.current = ji[bt], ji[bt] = null, bt--);
  }
  function ut(n, r) {
    bt++, ji[bt] = n.current, n.current = r;
  }
  var $a = {}, _e = ze($a), Vt = ze(!1), pr = $a;
  function na(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return $a;
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
  function ra() {
    it(Vt), it(_e);
  }
  function Bi(n, r, l) {
    if (_e.current !== $a)
      throw Error(b(168));
    ut(_e, r), ut(Vt, l);
  }
  function ko(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(b(108, Gr(n) || "Unknown", c));
    return te({}, l, o);
  }
  function js(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || $a, pr = _e.current, ut(_e, n), ut(Vt, Vt.current), !0;
  }
  function mv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(b(169));
    l ? (n = ko(n, r, pr), o.__reactInternalMemoizedMergedChildContext = n, it(Vt), it(_e), ut(_e, n)) : it(Vt), ut(Vt, l);
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
        throw Ur !== null && (Ur = Ur.slice(n + 1)), Dt(Nr, vr), c;
      } finally {
        ft = r, Oo = !1;
      }
    }
    return null;
  }
  var Vi = [], hr = 0, Cl = null, du = 0, mr = [], In = 0, aa = null, bn = 1, fi = "";
  function Ar(n, r) {
    Vi[hr++] = du, Vi[hr++] = Cl, Cl = n, du = r;
  }
  function qf(n, r, l) {
    mr[In++] = bn, mr[In++] = fi, mr[In++] = aa, aa = n;
    var o = bn;
    n = fi;
    var c = 32 - Kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Kr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, bn = 1 << 32 - Kr(r) + c | l << c | o, fi = d + n;
    } else
      bn = 1 << d | l << c | o, fi = n;
  }
  function Bs(n) {
    n.return !== null && (Ar(n, 1), qf(n, 1, 0));
  }
  function Xf(n) {
    for (; n === Cl; )
      Cl = Vi[--hr], Vi[hr] = null, du = Vi[--hr], Vi[hr] = null;
    for (; n === aa; )
      aa = mr[--In], mr[In] = null, fi = mr[--In], mr[In] = null, bn = mr[--In], mr[In] = null;
  }
  var Fr = null, yr = null, kt = !1, ia = null;
  function Kf(n, r) {
    var l = pa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function yv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Fr = n, yr = La(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Fr = n, yr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = aa !== null ? { id: bn, overflow: fi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = pa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Fr = n, yr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Vs(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ps(n) {
    if (kt) {
      var r = yr;
      if (r) {
        var l = r;
        if (!yv(n, r)) {
          if (Vs(n))
            throw Error(b(418));
          r = La(l.nextSibling);
          var o = Fr;
          r && yv(n, r) ? Kf(o, l) : (n.flags = n.flags & -4097 | 2, kt = !1, Fr = n);
        }
      } else {
        if (Vs(n))
          throw Error(b(418));
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
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !_o(n.type, n.memoizedProps)), r && (r = yr)) {
      if (Vs(n))
        throw Sv(), Error(b(418));
      for (; r; )
        Kf(n, r), r = La(r.nextSibling);
    }
    if (gv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(b(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                yr = La(n.nextSibling);
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
      yr = Fr ? La(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Sv() {
    for (var n = yr; n; )
      n = La(n.nextSibling);
  }
  function Ft() {
    yr = Fr = null, kt = !1;
  }
  function Zf(n) {
    ia === null ? ia = [n] : ia.push(n);
  }
  var Ys = gt.ReactCurrentBatchConfig;
  function Tl(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(b(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(b(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(b(284));
      if (!l._owner)
        throw Error(b(290, n));
    }
    return n;
  }
  function Ya(n, r) {
    throw n = Object.prototype.toString.call(r), Error(b(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Ev(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Is(n) {
    function r(w, R) {
      if (n) {
        var k = w.deletions;
        k === null ? (w.deletions = [R], w.flags |= 16) : k.push(R);
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
      return w = qi(w, R), w.index = 0, w.sibling = null, w;
    }
    function d(w, R, k) {
      return w.index = k, n ? (k = w.alternate, k !== null ? (k = k.index, k < R ? (w.flags |= 2, R) : k) : (w.flags |= 2, R)) : (w.flags |= 1048576, R);
    }
    function h(w) {
      return n && w.alternate === null && (w.flags |= 2), w;
    }
    function S(w, R, k, $) {
      return R === null || R.tag !== 6 ? (R = Mc(k, w.mode, $), R.return = w, R) : (R = c(R, k), R.return = w, R);
    }
    function C(w, R, k, $) {
      var pe = k.type;
      return pe === Ae ? H(w, R, k.props.children, $, k.key) : R !== null && (R.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === _t && Ev(pe) === R.type) ? ($ = c(R, k.props), $.ref = Tl(w, R, k), $.return = w, $) : ($ = Oc(k.type, k.key, k.props, null, w.mode, $), $.ref = Tl(w, R, k), $.return = w, $);
    }
    function L(w, R, k, $) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== k.containerInfo || R.stateNode.implementation !== k.implementation ? (R = Go(k, w.mode, $), R.return = w, R) : (R = c(R, k.children || []), R.return = w, R);
    }
    function H(w, R, k, $, pe) {
      return R === null || R.tag !== 7 ? (R = Fl(k, w.mode, $, pe), R.return = w, R) : (R = c(R, k), R.return = w, R);
    }
    function B(w, R, k) {
      if (typeof R == "string" && R !== "" || typeof R == "number")
        return R = Mc("" + R, w.mode, k), R.return = w, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case Ye:
            return k = Oc(R.type, R.key, R.props, null, w.mode, k), k.ref = Tl(w, null, R), k.return = w, k;
          case wt:
            return R = Go(R, w.mode, k), R.return = w, R;
          case _t:
            var $ = R._init;
            return B(w, $(R._payload), k);
        }
        if (ni(R) || Ce(R))
          return R = Fl(R, w.mode, k, null), R.return = w, R;
        Ya(w, R);
      }
      return null;
    }
    function F(w, R, k, $) {
      var pe = R !== null ? R.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number")
        return pe !== null ? null : S(w, R, "" + k, $);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ye:
            return k.key === pe ? C(w, R, k, $) : null;
          case wt:
            return k.key === pe ? L(w, R, k, $) : null;
          case _t:
            return pe = k._init, F(
              w,
              R,
              pe(k._payload),
              $
            );
        }
        if (ni(k) || Ce(k))
          return pe !== null ? null : H(w, R, k, $, null);
        Ya(w, k);
      }
      return null;
    }
    function J(w, R, k, $, pe) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number")
        return w = w.get(k) || null, S(R, w, "" + $, pe);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case Ye:
            return w = w.get($.key === null ? k : $.key) || null, C(R, w, $, pe);
          case wt:
            return w = w.get($.key === null ? k : $.key) || null, L(R, w, $, pe);
          case _t:
            var Te = $._init;
            return J(w, R, k, Te($._payload), pe);
        }
        if (ni($) || Ce($))
          return w = w.get(k) || null, H(R, w, $, pe, null);
        Ya(R, $);
      }
      return null;
    }
    function ae(w, R, k, $) {
      for (var pe = null, Te = null, ie = R, Re = R = 0, sn = null; ie !== null && Re < k.length; Re++) {
        ie.index > Re ? (sn = ie, ie = null) : sn = ie.sibling;
        var tt = F(w, ie, k[Re], $);
        if (tt === null) {
          ie === null && (ie = sn);
          break;
        }
        n && ie && tt.alternate === null && r(w, ie), R = d(tt, R, Re), Te === null ? pe = tt : Te.sibling = tt, Te = tt, ie = sn;
      }
      if (Re === k.length)
        return l(w, ie), kt && Ar(w, Re), pe;
      if (ie === null) {
        for (; Re < k.length; Re++)
          ie = B(w, k[Re], $), ie !== null && (R = d(ie, R, Re), Te === null ? pe = ie : Te.sibling = ie, Te = ie);
        return kt && Ar(w, Re), pe;
      }
      for (ie = o(w, ie); Re < k.length; Re++)
        sn = J(ie, w, Re, k[Re], $), sn !== null && (n && sn.alternate !== null && ie.delete(sn.key === null ? Re : sn.key), R = d(sn, R, Re), Te === null ? pe = sn : Te.sibling = sn, Te = sn);
      return n && ie.forEach(function(gi) {
        return r(w, gi);
      }), kt && Ar(w, Re), pe;
    }
    function se(w, R, k, $) {
      var pe = Ce(k);
      if (typeof pe != "function")
        throw Error(b(150));
      if (k = pe.call(k), k == null)
        throw Error(b(151));
      for (var Te = pe = null, ie = R, Re = R = 0, sn = null, tt = k.next(); ie !== null && !tt.done; Re++, tt = k.next()) {
        ie.index > Re ? (sn = ie, ie = null) : sn = ie.sibling;
        var gi = F(w, ie, tt.value, $);
        if (gi === null) {
          ie === null && (ie = sn);
          break;
        }
        n && ie && gi.alternate === null && r(w, ie), R = d(gi, R, Re), Te === null ? pe = gi : Te.sibling = gi, Te = gi, ie = sn;
      }
      if (tt.done)
        return l(
          w,
          ie
        ), kt && Ar(w, Re), pe;
      if (ie === null) {
        for (; !tt.done; Re++, tt = k.next())
          tt = B(w, tt.value, $), tt !== null && (R = d(tt, R, Re), Te === null ? pe = tt : Te.sibling = tt, Te = tt);
        return kt && Ar(w, Re), pe;
      }
      for (ie = o(w, ie); !tt.done; Re++, tt = k.next())
        tt = J(ie, w, Re, tt.value, $), tt !== null && (n && tt.alternate !== null && ie.delete(tt.key === null ? Re : tt.key), R = d(tt, R, Re), Te === null ? pe = tt : Te.sibling = tt, Te = tt);
      return n && ie.forEach(function(Sy) {
        return r(w, Sy);
      }), kt && Ar(w, Re), pe;
    }
    function Gt(w, R, k, $) {
      if (typeof k == "object" && k !== null && k.type === Ae && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ye:
            e: {
              for (var pe = k.key, Te = R; Te !== null; ) {
                if (Te.key === pe) {
                  if (pe = k.type, pe === Ae) {
                    if (Te.tag === 7) {
                      l(w, Te.sibling), R = c(Te, k.props.children), R.return = w, w = R;
                      break e;
                    }
                  } else if (Te.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === _t && Ev(pe) === Te.type) {
                    l(w, Te.sibling), R = c(Te, k.props), R.ref = Tl(w, Te, k), R.return = w, w = R;
                    break e;
                  }
                  l(w, Te);
                  break;
                } else
                  r(w, Te);
                Te = Te.sibling;
              }
              k.type === Ae ? (R = Fl(k.props.children, w.mode, $, k.key), R.return = w, w = R) : ($ = Oc(k.type, k.key, k.props, null, w.mode, $), $.ref = Tl(w, R, k), $.return = w, w = $);
            }
            return h(w);
          case wt:
            e: {
              for (Te = k.key; R !== null; ) {
                if (R.key === Te)
                  if (R.tag === 4 && R.stateNode.containerInfo === k.containerInfo && R.stateNode.implementation === k.implementation) {
                    l(w, R.sibling), R = c(R, k.children || []), R.return = w, w = R;
                    break e;
                  } else {
                    l(w, R);
                    break;
                  }
                else
                  r(w, R);
                R = R.sibling;
              }
              R = Go(k, w.mode, $), R.return = w, w = R;
            }
            return h(w);
          case _t:
            return Te = k._init, Gt(w, R, Te(k._payload), $);
        }
        if (ni(k))
          return ae(w, R, k, $);
        if (Ce(k))
          return se(w, R, k, $);
        Ya(w, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, R !== null && R.tag === 6 ? (l(w, R.sibling), R = c(R, k), R.return = w, w = R) : (l(w, R), R = Mc(k, w.mode, $), R.return = w, w = R), h(w)) : l(w, R);
    }
    return Gt;
  }
  var pu = Is(!0), Cv = Is(!1), di = ze(null), an = null, Q = null, la = null;
  function Hr() {
    la = Q = an = null;
  }
  function Jf(n) {
    var r = di.current;
    it(di), n._currentValue = r;
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
    an = n, la = Q = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Er = !0), n.firstContext = null);
  }
  function ua(n) {
    var r = n._currentValue;
    if (la !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Q === null) {
        if (an === null)
          throw Error(b(308));
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
    if (o = o.shared, Ie & 2) {
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
      var B = c.baseState;
      h = 0, H = L = C = null, S = d;
      do {
        var F = S.lane, J = S.eventTime;
        if ((o & F) === F) {
          H !== null && (H = H.next = {
            eventTime: J,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var ae = n, se = S;
            switch (F = r, J = l, se.tag) {
              case 1:
                if (ae = se.payload, typeof ae == "function") {
                  B = ae.call(J, B, F);
                  break e;
                }
                B = ae;
                break e;
              case 3:
                ae.flags = ae.flags & -65537 | 128;
              case 0:
                if (ae = se.payload, F = typeof ae == "function" ? ae.call(J, B, F) : ae, F == null)
                  break e;
                B = te({}, B, F);
                break e;
              case 2:
                Pi = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, F = c.effects, F === null ? c.effects = [S] : F.push(S));
        } else
          J = { eventTime: J, lane: F, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, H === null ? (L = H = J, C = B) : H = H.next = J, h |= F;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null)
            break;
          F = S, S = F.next, F.next = null, c.lastBaseUpdate = F, c.shared.pending = null;
        }
      } while (!0);
      if (H === null && (C = B), c.baseState = C, c.firstBaseUpdate = L, c.lastBaseUpdate = H, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Nl |= h, n.lanes = h, n.memoizedState = B;
    }
  }
  function xv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(b(191, c));
          c.call(o);
        }
      }
  }
  var Lo = {}, Ma = ze(Lo), mu = ze(Lo), Mo = ze(Lo);
  function xl(n) {
    if (n === Lo)
      throw Error(b(174));
    return n;
  }
  function td(n, r) {
    switch (ut(Mo, r), ut(mu, n), ut(Ma, Lo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Xt(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Xt(r, n);
    }
    it(Ma), ut(Ma, r);
  }
  function yu() {
    it(Ma), it(mu), it(Mo);
  }
  function wv(n) {
    xl(Mo.current);
    var r = xl(Ma.current), l = Xt(r, n.type);
    r !== l && (ut(mu, n), ut(Ma, l));
  }
  function nd(n) {
    mu.current === n && (it(Ma), it(mu));
  }
  var Nt = ze(0);
  function qs(n) {
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
  var Xs = [];
  function rd() {
    for (var n = 0; n < Xs.length; n++)
      Xs[n]._workInProgressVersionPrimary = null;
    Xs.length = 0;
  }
  var Ks = gt.ReactCurrentDispatcher, No = gt.ReactCurrentBatchConfig, de = 0, ve = null, De = null, Ve = null, jr = !1, gu = !1, zo = 0, ny = 0;
  function Qn() {
    throw Error(b(321));
  }
  function Uo(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ea(n[l], r[l]))
        return !1;
    return !0;
  }
  function A(n, r, l, o, c, d) {
    if (de = d, ve = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ks.current = n === null || n.memoizedState === null ? ry : xt, n = l(o, c), gu) {
      d = 0;
      do {
        if (gu = !1, zo = 0, 25 <= d)
          throw Error(b(301));
        d += 1, Ve = De = null, r.updateQueue = null, Ks.current = dc, n = l(o, c);
      } while (gu);
    }
    if (Ks.current = Wn, r = De !== null && De.next !== null, de = 0, Ve = De = ve = null, jr = !1, r)
      throw Error(b(300));
    return n;
  }
  function en() {
    var n = zo !== 0;
    return zo = 0, n;
  }
  function ye() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ve === null ? ve.memoizedState = Ve = n : Ve = Ve.next = n, Ve;
  }
  function kn() {
    if (De === null) {
      var n = ve.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = De.next;
    var r = Ve === null ? ve.memoizedState : Ve.next;
    if (r !== null)
      Ve = r, De = n;
    else {
      if (n === null)
        throw Error(b(310));
      De = n, n = { memoizedState: De.memoizedState, baseState: De.baseState, baseQueue: De.baseQueue, queue: De.queue, next: null }, Ve === null ? ve.memoizedState = Ve = n : Ve = Ve.next = n;
    }
    return Ve;
  }
  function Br(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function vi(n) {
    var r = kn(), l = r.queue;
    if (l === null)
      throw Error(b(311));
    l.lastRenderedReducer = n;
    var o = De, c = o.baseQueue, d = l.pending;
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
        if ((de & H) === H)
          C !== null && (C = C.next = { lane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), o = L.hasEagerState ? L.eagerState : n(o, L.action);
        else {
          var B = {
            lane: H,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          };
          C === null ? (S = C = B, h = o) : C = C.next = B, ve.lanes |= H, Nl |= H;
        }
        L = L.next;
      } while (L !== null && L !== d);
      C === null ? h = o : C.next = S, ea(o, r.memoizedState) || (Er = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, ve.lanes |= d, Nl |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function oa(n) {
    var r = kn(), l = r.queue;
    if (l === null)
      throw Error(b(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      ea(d, r.memoizedState) || (Er = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Su() {
  }
  function wl(n, r) {
    var l = ve, o = kn(), c = r(), d = !ea(o.memoizedState, c);
    if (d && (o.memoizedState = c, Er = !0), o = o.queue, Ao(Js.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ve !== null && Ve.memoizedState.tag & 1) {
      if (l.flags |= 2048, _l(9, Zs.bind(null, l, o, c, r), void 0, null), $t === null)
        throw Error(b(349));
      de & 30 || Eu(l, r, c);
    }
    return c;
  }
  function Eu(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = ve.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ve.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
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
      return !ea(n, l);
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
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Br, lastRenderedState: n }, r.queue = n, n = n.dispatch = Fo.bind(null, ve, n), [r.memoizedState, n];
  }
  function _l(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = ve.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ve.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function rc() {
    return kn().memoizedState;
  }
  function Cu(n, r, l, o) {
    var c = ye();
    ve.flags |= n, c.memoizedState = _l(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Tu(n, r, l, o) {
    var c = kn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (De !== null) {
      var h = De.memoizedState;
      if (d = h.destroy, o !== null && Uo(o, h.deps)) {
        c.memoizedState = _l(r, l, d, o);
        return;
      }
    }
    ve.flags |= n, c.memoizedState = _l(1 | r, l, d, o);
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
  function Dl(n, r) {
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
    return de & 21 ? (ea(l, r) || (l = Es(), ve.lanes |= l, Nl |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Er = !0), n.memoizedState = l);
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
  function _v(n, r, l) {
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
          if (c.hasEagerState = !0, c.eagerState = S, ea(S, h)) {
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
    return n === ve || r !== null && r === ve;
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
  var Wn = { readContext: ua, useCallback: Qn, useContext: Qn, useEffect: Qn, useImperativeHandle: Qn, useInsertionEffect: Qn, useLayoutEffect: Qn, useMemo: Qn, useReducer: Qn, useRef: Qn, useState: Qn, useDebugValue: Qn, useDeferredValue: Qn, useTransition: Qn, useMutableSource: Qn, useSyncExternalStore: Qn, useId: Qn, unstable_isNewReconciler: !1 }, ry = { readContext: ua, useCallback: function(n, r) {
    return ye().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ua, useEffect: ac, useImperativeHandle: function(n, r, l) {
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
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = _v.bind(null, ve, n), [o.memoizedState, n];
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
    var o = ve, c = ye();
    if (kt) {
      if (l === void 0)
        throw Error(b(407));
      l = l();
    } else {
      if (l = r(), $t === null)
        throw Error(b(349));
      de & 30 || Eu(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, ac(Js.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, _l(9, Zs.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = ye(), r = $t.identifierPrefix;
    if (kt) {
      var l = fi, o = bn;
      l = (o & ~(1 << 32 - Kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = zo++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = ny++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, xt = {
    readContext: ua,
    useCallback: Dl,
    useContext: ua,
    useEffect: Ao,
    useImperativeHandle: oc,
    useInsertionEffect: ic,
    useLayoutEffect: lc,
    useMemo: sc,
    useReducer: vi,
    useRef: rc,
    useState: function() {
      return vi(Br);
    },
    useDebugValue: Ru,
    useDeferredValue: function(n) {
      var r = kn();
      return cc(r, De.memoizedState, n);
    },
    useTransition: function() {
      var n = vi(Br)[0], r = kn().memoizedState;
      return [n, r];
    },
    useMutableSource: Su,
    useSyncExternalStore: wl,
    useId: fc,
    unstable_isNewReconciler: !1
  }, dc = { readContext: ua, useCallback: Dl, useContext: ua, useEffect: Ao, useImperativeHandle: oc, useInsertionEffect: ic, useLayoutEffect: lc, useMemo: sc, useReducer: oa, useRef: rc, useState: function() {
    return oa(Br);
  }, useDebugValue: Ru, useDeferredValue: function(n) {
    var r = kn();
    return De === null ? r.memoizedState = n : cc(r, De.memoizedState, n);
  }, useTransition: function() {
    var n = oa(Br)[0], r = kn().memoizedState;
    return [n, r];
  }, useMutableSource: Su, useSyncExternalStore: wl, useId: fc, unstable_isNewReconciler: !1 };
  function Sr(n, r) {
    if (n && n.defaultProps) {
      r = te({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function bl(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : te({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
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
  function Dv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !So(l, o) || !So(c, d) : !0;
  }
  function bv(n, r, l) {
    var o = !1, c = $a, d = r.contextType;
    return typeof d == "object" && d !== null ? d = ua(d) : (c = Mt(r) ? pr : _e.current, o = r.contextTypes, d = (o = o != null) ? na(n, c) : $a), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = kl, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function kv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && kl.enqueueReplaceState(r, r.state, null);
  }
  function ld(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Qs(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = ua(d) : (d = Mt(r) ? pr : _e.current, c.context = na(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (bl(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && kl.enqueueReplaceState(c, c.state, null), Gs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ii(n, r) {
    try {
      var l = "", o = r;
      do
        l += Aa(o), o = o.return;
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
      Ho(n, r), typeof o != "function" && (fa === null ? fa = /* @__PURE__ */ new Set([this]) : fa.add(this));
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
    c.has(l) || (c.add(l), n = py.bind(null, n, r, l), r.then(n, n));
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
    return vu(r, c), o = A(n, r, l, o, d, c), l = en(), n !== null && !Er ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Wt(n, r, c)) : (kt && l && Bs(r), r.flags |= 1, Qt(n, r, o, c), r.child);
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
    return r.flags |= 1, n = qi(d, o), n.ref = r.ref, n.return = r, r.child = n;
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
    return Ne(n, r, l, o, c);
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
  function Ne(n, r, l, o, c) {
    var d = Mt(l) ? pr : _e.current;
    return d = na(r, d), vu(r, c), l = A(n, r, l, o, d, c), o = en(), n !== null && !Er ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Wt(n, r, c)) : (kt && o && Bs(r), r.flags |= 1, Qt(n, r, l, c), r.child);
  }
  function Bo(n, r, l, o, c) {
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
      typeof L == "object" && L !== null ? L = ua(L) : (L = Mt(l) ? pr : _e.current, L = na(r, L));
      var H = l.getDerivedStateFromProps, B = typeof H == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      B || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== L) && kv(r, h, o, L), Pi = !1;
      var F = r.memoizedState;
      h.state = F, Gs(r, o, h, c), C = r.memoizedState, S !== o || F !== C || Vt.current || Pi ? (typeof H == "function" && (bl(r, l, H, o), C = r.memoizedState), (S = Pi || Dv(r, l, S, o, F, C, L)) ? (B || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = L, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, hu(n, r), S = r.memoizedProps, L = r.type === r.elementType ? S : Sr(r.type, S), h.props = L, B = r.pendingProps, F = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = ua(C) : (C = Mt(l) ? pr : _e.current, C = na(r, C));
      var J = l.getDerivedStateFromProps;
      (H = typeof J == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== B || F !== C) && kv(r, h, o, C), Pi = !1, F = r.memoizedState, h.state = F, Gs(r, o, h, c);
      var ae = r.memoizedState;
      S !== B || F !== ae || Vt.current || Pi ? (typeof J == "function" && (bl(r, l, J, o), ae = r.memoizedState), (L = Pi || Dv(r, l, L, o, F, ae, C) || !1) ? (H || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, ae, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, ae, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ae), h.props = o, h.state = ae, h.context = C, o = L) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 1024), o = !1);
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
  function ay(n) {
    var r = n.stateNode;
    r.pendingContext ? Bi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Bi(n, r.context, !1), td(n, r.containerInfo);
  }
  function Uv(n, r, l, o, c) {
    return Ft(), Zf(c), r.flags |= 256, Qt(n, r, l, o), r.child;
  }
  var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ll(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Av(n, r, l) {
    var o = r.pendingProps, c = Nt.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), ut(Nt, c & 1), n === null)
      return Ps(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = Lc(h, o, 0, null), n = Fl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ll(l), r.memoizedState = Vo, n) : hc(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null))
      return sd(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = qi(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = qi(S, d) : (d = Fl(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? Ll(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = Vo, o;
    }
    return d = n.child, n = d.sibling, o = qi(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function hc(n, r) {
    return r = Lc({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function mc(n, r, l, o) {
    return o !== null && Zf(o), pu(r, n.child, null, l), n = hc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function sd(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = ud(Error(b(422))), mc(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Lc({ mode: "visible", children: o.children }, c, 0, null), d = Fl(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && pu(r, n.child, null, h), r.child.memoizedState = Ll(h), r.memoizedState = Vo, d);
    if (!(r.mode & 1))
      return mc(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var S = o.dgst;
      return o = S, d = Error(b(419)), o = ud(d, o, void 0), mc(n, r, h, o);
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
      return Wo(), o = ud(Error(b(421))), mc(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ed.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, yr = La(c.nextSibling), Fr = r, kt = !0, ia = null, n !== null && (mr[In++] = bn, mr[In++] = fi, mr[In++] = aa, bn = n.id, fi = n.overflow, aa = r), r = hc(r, o.children), r.flags |= 4096, r);
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
            n = l.alternate, n !== null && qs(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), yc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && qs(n) === null) {
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
      throw Error(b(153));
    if (r.child !== null) {
      for (n = r.child, l = qi(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = qi(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function hi(n, r, l) {
    switch (r.tag) {
      case 3:
        ay(r), Ft();
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
  var Ia, _u, Du, sa;
  Ia = function(n, r) {
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
  }, _u = function() {
  }, Du = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, xl(Ma.current);
      var d = null;
      switch (l) {
        case "input":
          c = Vn(n, c), o = Vn(n, o), d = [];
          break;
        case "select":
          c = te({}, c, { value: void 0 }), o = te({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Ta(n, c), o = Ta(n, o), d = [];
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
            L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && ($e.hasOwnProperty(L) ? d || (d = []) : (d = d || []).push(L, null));
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
            L === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(L, C)) : L === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(L, "" + C) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && ($e.hasOwnProperty(L) ? (C != null && L === "onScroll" && Et("scroll", n), d || S === C || (d = [])) : (d = d || []).push(L, C));
      }
      l && (d = d || []).push("style", l);
      var L = d;
      (r.updateQueue = L) && (r.flags |= 4);
    }
  }, sa = function(n, r, l, o) {
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
  function iy(n, r, l) {
    var o = r.pendingProps;
    switch (Xf(r), r.tag) {
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
        return Mt(r.type) && ra(), Gn(r), null;
      case 3:
        return o = r.stateNode, yu(), it(Vt), it(_e), rd(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && ($s(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ia !== null && (yd(ia), ia = null))), _u(n, r), Gn(r), null;
      case 5:
        nd(r);
        var c = xl(Mo.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Du(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(b(166));
            return Gn(r), null;
          }
          if (n = xl(Ma.current), $s(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Pa] = r, o[El] = d, n = (r.mode & 1) !== 0, l) {
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
                _n(o, d), Et("invalid", o);
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
                ), c = ["children", "" + S]) : $e.hasOwnProperty(h) && S != null && h === "onScroll" && Et("scroll", o);
              }
            switch (l) {
              case "input":
                sr(o), Xr(o, d, !0);
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
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ra(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[Pa] = r, n[El] = o, Ia(n, r, !1, !1), r.stateNode = n;
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
                  _n(n, o), c = Vn(n, o), Et("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = te({}, o, { value: void 0 }), Et("invalid", n);
                  break;
                case "textarea":
                  br(n, o), c = Ta(n, o), Et("invalid", n);
                  break;
                default:
                  c = o;
              }
              vn(l, c), S = c;
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var C = S[d];
                  d === "style" ? ct(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Oi(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && xa(n, C) : typeof C == "number" && xa(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && ($e.hasOwnProperty(d) ? C != null && d === "onScroll" && Et("scroll", n) : C != null && Pe(n, d, C, h));
                }
              switch (l) {
                case "input":
                  sr(n), Xr(n, o, !1);
                  break;
                case "textarea":
                  sr(n), kr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Bn(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Ha(n, !!o.multiple, d, !1) : o.defaultValue != null && Ha(
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
          sa(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(b(166));
          if (l = xl(Mo.current), xl(Ma.current), $s(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Pa] = r, (d = o.nodeValue !== l) && (n = Fr, n !== null))
              switch (n.tag) {
                case 3:
                  Fs(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Fs(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Pa] = r, r.stateNode = o;
        }
        return Gn(r), null;
      case 13:
        if (it(Nt), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (kt && yr !== null && r.mode & 1 && !(r.flags & 128))
            Sv(), Ft(), r.flags |= 98560, d = !1;
          else if (d = $s(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(b(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(b(317));
              d[Pa] = r;
            } else
              Ft(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Gn(r), d = !1;
          } else
            ia !== null && (yd(ia), ia = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Nt.current & 1 ? un === 0 && (un = 3) : Wo())), r.updateQueue !== null && (r.flags |= 4), Gn(r), null);
      case 4:
        return yu(), _u(n, r), n === null && cu(r.stateNode.containerInfo), Gn(r), null;
      case 10:
        return Jf(r.type._context), Gn(r), null;
      case 17:
        return Mt(r.type) && ra(), Gn(r), null;
      case 19:
        if (it(Nt), d = r.memoizedState, d === null)
          return Gn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null)
          if (o)
            Pt(d, !1);
          else {
            if (un !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (h = qs(n), h !== null) {
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
            if (n = qs(h), n !== null) {
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
    throw Error(b(156, r.tag));
  }
  function ly(n, r) {
    switch (Xf(r), r.tag) {
      case 1:
        return Mt(r.type) && ra(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return yu(), it(Vt), it(_e), rd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return nd(r), null;
      case 13:
        if (it(Nt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(b(340));
          Ft();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return it(Nt), null;
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
  function uy(n, r) {
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
            var h = 0, S = -1, C = -1, L = 0, H = 0, B = n, F = null;
            t:
              for (; ; ) {
                for (var J; B !== l || c !== 0 && B.nodeType !== 3 || (S = h + c), B !== d || o !== 0 && B.nodeType !== 3 || (C = h + o), B.nodeType === 3 && (h += B.nodeValue.length), (J = B.firstChild) !== null; )
                  F = B, B = J;
                for (; ; ) {
                  if (B === n)
                    break t;
                  if (F === l && ++L === c && (S = h), F === d && ++H === o && (C = h), (J = B.nextSibling) !== null)
                    break;
                  B = F, F = B.parentNode;
                }
                B = J;
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
                  var k = r.stateNode.containerInfo;
                  k.nodeType === 1 ? k.textContent = "" : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(b(163));
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
    r !== null && (n.alternate = null, Hv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Pa], delete r[El], delete r[If], delete r[ty], delete r[Qf])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
    if (_a && typeof _a.onCommitFiberUnmount == "function")
      try {
        _a.onCommitFiberUnmount(lo, l);
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
        var c = vy.bind(null, n, o);
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
            throw Error(b(160));
          Mu(d, h, c), zt = null, Sn = !1;
          var C = c.alternate;
          C !== null && (C.return = null), c.return = null;
        } catch (L) {
          Yt(c, r, L);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Bv(r, n), r = r.sibling;
  }
  function Bv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (En(r, n), Qa(n), o & 4) {
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
        En(r, n), Qa(n), o & 512 && l !== null && ku(l, l.return);
        break;
      case 5:
        if (En(r, n), Qa(n), o & 512 && l !== null && ku(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            xa(c, "");
          } catch (se) {
            Yt(n, n.return, se);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null)
            try {
              S === "input" && d.type === "radio" && d.name != null && Dn(c, d), It(S, h);
              var L = It(S, d);
              for (h = 0; h < C.length; h += 2) {
                var H = C[h], B = C[h + 1];
                H === "style" ? ct(c, B) : H === "dangerouslySetInnerHTML" ? Oi(c, B) : H === "children" ? xa(c, B) : Pe(c, H, B, L);
              }
              switch (S) {
                case "input":
                  Pn(c, d);
                  break;
                case "textarea":
                  ja(c, d);
                  break;
                case "select":
                  var F = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var J = d.value;
                  J != null ? Ha(c, !!d.multiple, J, !1) : F !== !!d.multiple && (d.defaultValue != null ? Ha(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Ha(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[El] = d;
            } catch (se) {
              Yt(n, n.return, se);
            }
        }
        break;
      case 6:
        if (En(r, n), Qa(n), o & 4) {
          if (n.stateNode === null)
            throw Error(b(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (se) {
            Yt(n, n.return, se);
          }
        }
        break;
      case 3:
        if (En(r, n), Qa(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            fo(r.containerInfo);
          } catch (se) {
            Yt(n, n.return, se);
          }
        break;
      case 4:
        En(r, n), Qa(n);
        break;
      case 13:
        En(r, n), Qa(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Rc = lt())), o & 4 && Nu(n);
        break;
      case 22:
        if (H = l !== null && l.memoizedState !== null, n.mode & 1 ? (On = (L = On) || H, En(r, n), On = L) : En(r, n), Qa(n), o & 8192) {
          if (L = n.memoizedState !== null, (n.stateNode.isHidden = L) && !H && n.mode & 1)
            for (re = n, H = n.child; H !== null; ) {
              for (B = re = H; re !== null; ) {
                switch (F = re, J = F.child, F.tag) {
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
                      Vv(B);
                      continue;
                    }
                }
                J !== null ? (J.return = F, re = J) : Vv(B);
              }
              H = H.sibling;
            }
          e:
            for (H = null, B = n; ; ) {
              if (B.tag === 5) {
                if (H === null) {
                  H = B;
                  try {
                    c = B.stateNode, L ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = B.stateNode, C = B.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = He("display", h));
                  } catch (se) {
                    Yt(n, n.return, se);
                  }
                }
              } else if (B.tag === 6) {
                if (H === null)
                  try {
                    B.stateNode.nodeValue = L ? "" : B.memoizedProps;
                  } catch (se) {
                    Yt(n, n.return, se);
                  }
              } else if ((B.tag !== 22 && B.tag !== 23 || B.memoizedState === null || B === n) && B.child !== null) {
                B.child.return = B, B = B.child;
                continue;
              }
              if (B === n)
                break e;
              for (; B.sibling === null; ) {
                if (B.return === null || B.return === n)
                  break e;
                H === B && (H = null), B = B.return;
              }
              H === B && (H = null), B.sibling.return = B.return, B = B.sibling;
            }
        }
        break;
      case 19:
        En(r, n), Qa(n), o & 4 && Nu(n);
        break;
      case 21:
        break;
      default:
        En(
          r,
          n
        ), Qa(n);
    }
  }
  function Qa(n) {
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
          throw Error(b(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (xa(c, ""), o.flags &= -33);
            var d = jv(n);
            Lu(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = jv(n);
            $o(n, S, h);
            break;
          default:
            throw Error(b(161));
        }
      } catch (C) {
        Yt(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function oy(n, r, l) {
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
                      var B = H.dehydrated;
                      B !== null && fo(B);
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
                throw Error(b(163));
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
  function Vv(n) {
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
  var sy = Math.ceil, Ml = gt.ReactCurrentDispatcher, Tc = gt.ReactCurrentOwner, ca = gt.ReactCurrentBatchConfig, Ie = 0, $t = null, Ot = null, ln = 0, Tr = 0, Uu = ze(0), un = 0, Yo = null, Nl = 0, Au = 0, hd = 0, Wi = null, qn = null, Rc = 0, Fu = 1 / 0, mi = null, xc = !1, md = null, fa = null, Hu = !1, da = null, wc = 0, Io = 0, _c = null, Qo = -1, zl = 0;
  function Cn() {
    return Ie & 6 ? lt() : Qo !== -1 ? Qo : Qo = lt();
  }
  function yi(n) {
    return n.mode & 1 ? Ie & 2 && ln !== 0 ? ln & -ln : Ys.transition !== null ? (zl === 0 && (zl = Es()), zl) : (n = ft, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Tf(n.type)), n) : 1;
  }
  function Ht(n, r, l, o) {
    if (50 < Io)
      throw Io = 0, _c = null, Error(b(185));
    dl(n, l, o), (!(Ie & 2) || n !== $t) && (n === $t && (!(Ie & 2) && (Au |= l), un === 4 && Wa(n, ln)), on(n, o), l === 1 && Ie === 0 && !(r.mode & 1) && (Fu = lt() + 500, gn && vr()));
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
          !(Ie & 6) && vr();
        }), l = null;
      else {
        switch (Sf(o)) {
          case 1:
            l = Nr;
            break;
          case 4:
            l = Be;
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
        l = qv(l, Dc.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Dc(n, r) {
    if (Qo = -1, zl = 0, Ie & 6)
      throw Error(b(327));
    var l = n.callbackNode;
    if (Bu() && n.callbackNode !== l)
      return null;
    var o = Da(n, n === $t ? ln : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = kc(n, o);
    else {
      r = o;
      var c = Ie;
      Ie |= 2;
      var d = $v();
      ($t !== n || ln !== r) && (mi = null, Fu = lt() + 500, Al(n, r));
      do
        try {
          fy();
          break;
        } catch (S) {
          Pv(n, S);
        }
      while (!0);
      Hr(), Ml.current = d, Ie = c, Ot !== null ? r = 0 : ($t = null, ln = 0, r = un);
    }
    if (r !== 0) {
      if (r === 2 && (c = yf(n), c !== 0 && (o = c, r = Ul(n, c))), r === 1)
        throw l = Yo, Al(n, 0), Wa(n, o), on(n, lt()), l;
      if (r === 6)
        Wa(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !gd(c) && (r = kc(n, o), r === 2 && (d = yf(n), d !== 0 && (o = d, r = Ul(n, d))), r === 1))
          throw l = Yo, Al(n, 0), Wa(n, o), on(n, lt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(b(345));
          case 2:
            Gi(n, qn, mi);
            break;
          case 3:
            if (Wa(n, o), (o & 130023424) === o && (r = Rc + 500 - lt(), 10 < r)) {
              if (Da(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Cn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Sl(Gi.bind(null, n, qn, mi), r);
              break;
            }
            Gi(n, qn, mi);
            break;
          case 4:
            if (Wa(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - Kr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = lt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * sy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Sl(Gi.bind(null, n, qn, mi), o);
              break;
            }
            Gi(n, qn, mi);
            break;
          case 5:
            Gi(n, qn, mi);
            break;
          default:
            throw Error(b(329));
        }
      }
    }
    return on(n, lt()), n.callbackNode === l ? Dc.bind(null, n) : null;
  }
  function Ul(n, r) {
    var l = Wi;
    return n.current.memoizedState.isDehydrated && (Al(n, r).flags |= 256), n = kc(n, r), n !== 2 && (r = qn, qn = l, r !== null && yd(r)), n;
  }
  function yd(n) {
    qn === null ? qn = n : qn.push.apply(qn, n);
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
              if (!ea(d(), c))
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
  function Wa(n, r) {
    for (r &= ~hd, r &= ~Au, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function ju(n) {
    if (Ie & 6)
      throw Error(b(327));
    Bu();
    var r = Da(n, 0);
    if (!(r & 1))
      return on(n, lt()), null;
    var l = kc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = yf(n);
      o !== 0 && (r = o, l = Ul(n, o));
    }
    if (l === 1)
      throw l = Yo, Al(n, 0), Wa(n, r), on(n, lt()), l;
    if (l === 6)
      throw Error(b(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Gi(n, qn, mi), on(n, lt()), null;
  }
  function Sd(n, r) {
    var l = Ie;
    Ie |= 1;
    try {
      return n(r);
    } finally {
      Ie = l, Ie === 0 && (Fu = lt() + 500, gn && vr());
    }
  }
  function Ga(n) {
    da !== null && da.tag === 0 && !(Ie & 6) && Bu();
    var r = Ie;
    Ie |= 1;
    var l = ca.transition, o = ft;
    try {
      if (ca.transition = null, ft = 1, n)
        return n();
    } finally {
      ft = o, ca.transition = l, Ie = r, !(Ie & 6) && vr();
    }
  }
  function bc() {
    Tr = Uu.current, it(Uu);
  }
  function Al(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, hv(l)), Ot !== null)
      for (l = Ot.return; l !== null; ) {
        var o = l;
        switch (Xf(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && ra();
            break;
          case 3:
            yu(), it(Vt), it(_e), rd();
            break;
          case 5:
            nd(o);
            break;
          case 4:
            yu();
            break;
          case 13:
            it(Nt);
            break;
          case 19:
            it(Nt);
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
    if ($t = n, Ot = n = qi(n.current, null), ln = Tr = r, un = 0, Yo = null, hd = Au = Nl = 0, qn = Wi = null, Rl !== null) {
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
          for (var o = ve.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          jr = !1;
        }
        if (de = 0, Ve = De = ve = null, gu = !1, zo = 0, Tc.current = null, l === null || l.return === null) {
          un = 1, Yo = r, Ot = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = ln, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var L = C, H = S, B = H.tag;
            if (!(H.mode & 1) && (B === 0 || B === 11 || B === 15)) {
              var F = H.alternate;
              F ? (H.updateQueue = F.updateQueue, H.memoizedState = F.memoizedState, H.lanes = F.lanes) : (H.updateQueue = null, H.memoizedState = null);
            }
            var J = Nv(h);
            if (J !== null) {
              J.flags &= -257, od(J, h, S, d, r), J.mode & 1 && jo(d, L, r), r = J, C = L;
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
              C = Error(b(426));
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
                var R = d.type, k = d.stateNode;
                if (!(d.flags & 128) && (typeof R.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (fa === null || !fa.has(k)))) {
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
      } catch (pe) {
        r = pe, Ot === l && l !== null && (Ot = l = l.return);
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
    (un === 0 || un === 3 || un === 2) && (un = 4), $t === null || !(Nl & 268435455) && !(Au & 268435455) || Wa($t, ln);
  }
  function kc(n, r) {
    var l = Ie;
    Ie |= 2;
    var o = $v();
    ($t !== n || ln !== r) && (mi = null, Al(n, r));
    do
      try {
        cy();
        break;
      } catch (c) {
        Pv(n, c);
      }
    while (!0);
    if (Hr(), Ie = l, Ml.current = o, Ot !== null)
      throw Error(b(261));
    return $t = null, ln = 0, un;
  }
  function cy() {
    for (; Ot !== null; )
      Yv(Ot);
  }
  function fy() {
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
        if (l = ly(l, r), l !== null) {
          l.flags &= 32767, Ot = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          un = 6, Ot = null;
          return;
        }
      } else if (l = iy(l, r, Tr), l !== null) {
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
    var o = ft, c = ca.transition;
    try {
      ca.transition = null, ft = 1, dy(n, r, l, o);
    } finally {
      ca.transition = c, ft = o;
    }
    return null;
  }
  function dy(n, r, l, o) {
    do
      Bu();
    while (da !== null);
    if (Ie & 6)
      throw Error(b(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(b(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Fm(n, d), n === $t && (Ot = $t = null, ln = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Hu || (Hu = !0, qv(Va, function() {
      return Bu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = ca.transition, ca.transition = null;
      var h = ft;
      ft = 1;
      var S = Ie;
      Ie |= 4, Tc.current = null, uy(n, l), Bv(l, n), Ns(gl), pl = !!Pf, gl = Pf = null, n.current = l, oy(l), Mi(), Ie = S, ft = h, ca.transition = d;
    } else
      n.current = l;
    if (Hu && (Hu = !1, da = n, wc = c), d = n.pendingLanes, d === 0 && (fa = null), kp(l.stateNode), on(n, lt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (xc)
      throw xc = !1, n = md, md = null, n;
    return wc & 1 && n.tag !== 0 && Bu(), d = n.pendingLanes, d & 1 ? n === _c ? Io++ : (Io = 0, _c = n) : Io = 0, vr(), null;
  }
  function Bu() {
    if (da !== null) {
      var n = Sf(wc), r = ca.transition, l = ft;
      try {
        if (ca.transition = null, ft = 16 > n ? 16 : n, da === null)
          var o = !1;
        else {
          if (n = da, da = null, wc = 0, Ie & 6)
            throw Error(b(331));
          var c = Ie;
          for (Ie |= 4, re = n.current; re !== null; ) {
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
                    var B = H.child;
                    if (B !== null)
                      B.return = H, re = B;
                    else
                      for (; re !== null; ) {
                        H = re;
                        var F = H.sibling, J = H.return;
                        if (Hv(H), H === L) {
                          re = null;
                          break;
                        }
                        if (F !== null) {
                          F.return = J, re = F;
                          break;
                        }
                        re = J;
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
            var k = h.child;
            if (h.subtreeFlags & 2064 && k !== null)
              k.return = h, re = k;
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
                    } catch (pe) {
                      Yt(S, S.return, pe);
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
          if (Ie = c, vr(), _a && typeof _a.onPostCommitFiberRoot == "function")
            try {
              _a.onPostCommitFiberRoot(lo, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        ft = l, ca.transition = r;
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
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (fa === null || !fa.has(o))) {
            n = Ii(l, n), n = Mv(r, n, 1), r = $i(r, n, 1), n = Cn(), r !== null && (dl(r, 1, n), on(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function py(n, r, l) {
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
  function vy(n, r) {
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
        throw Error(b(314));
    }
    o !== null && o.delete(r), Wv(n, l);
  }
  var Gv;
  Gv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Vt.current)
        Er = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Er = !1, hi(n, r, l);
        Er = !!(n.flags & 131072);
      }
    else
      Er = !1, kt && r.flags & 1048576 && qf(r, du, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Po(n, r), n = r.pendingProps;
        var c = na(r, _e.current);
        vu(r, l), c = A(null, r, o, n, c, l);
        var d = en();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Mt(o) ? (d = !0, js(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Qs(r), c.updater = kl, r.stateNode = c, c._reactInternals = r, ld(r, o, n, l), r = vc(null, r, o, !0, d, l)) : (r.tag = 0, kt && d && Bs(r), Qt(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Po(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = hy(o), n = Sr(o, n), c) {
            case 0:
              r = Ne(null, r, o, n, l);
              break e;
            case 1:
              r = Bo(null, r, o, n, l);
              break e;
            case 11:
              r = wu(null, r, o, n, l);
              break e;
            case 14:
              r = Qi(null, r, o, Sr(o.type, n), l);
              break e;
          }
          throw Error(b(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Sr(o, c), Ne(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Sr(o, c), Bo(n, r, o, c, l);
      case 3:
        e: {
          if (ay(r), n === null)
            throw Error(b(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, hu(n, r), Gs(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Ii(Error(b(423)), r), r = Uv(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = Ii(Error(b(424)), r), r = Uv(n, r, o, l, c);
              break e;
            } else
              for (yr = La(r.stateNode.containerInfo.firstChild), Fr = r, kt = !0, ia = null, l = Cv(r, null, o, l), r.child = l; l; )
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
        return wv(r), n === null && Ps(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, _o(o, c) ? h = null : d !== null && _o(o, d) && (r.flags |= 32), Ol(n, r), Qt(n, r, h, l), r.child;
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
            if (ea(d.value, h)) {
              if (d.children === c.children && !Vt.current) {
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
                    throw Error(b(341));
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
        return c = r.type, o = r.pendingProps.children, vu(r, l), c = ua(c), o = o(c), r.flags |= 1, Qt(n, r, o, l), r.child;
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
    throw Error(b(156, r.tag));
  };
  function qv(n, r) {
    return Dt(n, r);
  }
  function Xv(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function pa(n, r, l, o) {
    return new Xv(n, r, l, o);
  }
  function Cd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function hy(n) {
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
  function qi(n, r) {
    var l = n.alternate;
    return l === null ? (l = pa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
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
          case Ae:
            return Fl(l.children, c, d, r);
          case Rn:
            h = 8, c |= 8;
            break;
          case jn:
            return n = pa(12, l, r, c | 2), n.elementType = jn, n.lanes = d, n;
          case be:
            return n = pa(13, l, r, c), n.elementType = be, n.lanes = d, n;
          case We:
            return n = pa(19, l, r, c), n.elementType = We, n.lanes = d, n;
          case Xn:
            return Lc(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Bt:
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
                case _t:
                  h = 16, o = null;
                  break e;
              }
            throw Error(b(130, n == null ? n : typeof n, ""));
        }
    return r = pa(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Fl(n, r, l, o) {
    return n = pa(7, n, o, r), n.lanes = l, n;
  }
  function Lc(n, r, l, o) {
    return n = pa(22, n, o, r), n.elementType = Xn, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Mc(n, r, l) {
    return n = pa(6, n, null, r), n.lanes = l, n;
  }
  function Go(n, r, l) {
    return r = pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function qo(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gf(0), this.expirationTimes = gf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Td(n, r, l, o, c, d, h, S, C) {
    return n = new qo(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = pa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qs(d), n;
  }
  function Kv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: wt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Rd(n) {
    if (!n)
      return $a;
    n = n._reactInternals;
    e: {
      if (me(n) !== n || n.tag !== 1)
        throw Error(b(170));
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
      throw Error(b(171));
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
  function Xo(n) {
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
  function my() {
    return null;
  }
  var _d = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function zc(n) {
    this._internalRoot = n;
  }
  Ko.prototype.render = zc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(b(409));
    Nc(n, r, null, null);
  }, Ko.prototype.unmount = zc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ga(function() {
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
  function Xi(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Uc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Jv() {
  }
  function yy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var L = Xo(h);
          d.call(L);
        };
      }
      var h = xd(r, o, n, 0, null, !1, !1, "", Jv);
      return n._reactRootContainer = h, n[ci] = h.current, cu(n.nodeType === 8 ? n.parentNode : n), Ga(), h;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var L = Xo(C);
        S.call(L);
      };
    }
    var C = Td(n, 0, !1, null, null, !1, !1, "", Jv);
    return n._reactRootContainer = C, n[ci] = C.current, cu(n.nodeType === 8 ? n.parentNode : n), Ga(function() {
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
          var C = Xo(h);
          S.call(C);
        };
      }
      Nc(r, h, n, c);
    } else
      h = yy(l, r, n, c, o);
    return Xo(h);
  }
  Mp = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = fl(r.pendingLanes);
          l !== 0 && (uo(r, l | 1), on(r, lt()), !(Ie & 6) && (Fu = lt() + 500, vr()));
        }
        break;
      case 13:
        Ga(function() {
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
                throw Error(b(90));
              qr(o), Pn(o, c);
            }
          }
        }
        break;
      case "textarea":
        ja(n, l);
        break;
      case "select":
        r = l.value, r != null && Ha(n, !!l.multiple, r, !1);
    }
  }, io = Sd, ys = Ga;
  var gy = { usingClientEntryPoint: !1, Events: [bo, fu, Se, ul, Kl, Sd] }, Zo = { findFiberByHostInstance: ta, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, eh = { bundleType: Zo.bundleType, version: Zo.version, rendererPackageName: Zo.rendererPackageName, rendererConfig: Zo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = je(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Zo.findFiberByHostInstance || my, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fc.isDisabled && Fc.supportsFiber)
      try {
        lo = Fc.inject(eh), _a = Fc;
      } catch {
      }
  }
  return Sa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy, Sa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xi(r))
      throw Error(b(200));
    return Kv(n, r, null, l);
  }, Sa.createRoot = function(n, r) {
    if (!Xi(n))
      throw Error(b(299));
    var l = !1, o = "", c = _d;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Td(n, 1, !1, null, null, l, !1, o, c), n[ci] = r.current, cu(n.nodeType === 8 ? n.parentNode : n), new zc(r);
  }, Sa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(b(188)) : (n = Object.keys(n).join(","), Error(b(268, n)));
    return n = je(r), n = n === null ? null : n.stateNode, n;
  }, Sa.flushSync = function(n) {
    return Ga(n);
  }, Sa.hydrate = function(n, r, l) {
    if (!Uc(r))
      throw Error(b(200));
    return Ac(null, n, r, !0, l);
  }, Sa.hydrateRoot = function(n, r, l) {
    if (!Xi(n))
      throw Error(b(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = _d;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = xd(r, null, n, 1, l ?? null, c, !1, d, h), n[ci] = r.current, cu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Ko(r);
  }, Sa.render = function(n, r, l) {
    if (!Uc(r))
      throw Error(b(200));
    return Ac(null, n, r, !1, l);
  }, Sa.unmountComponentAtNode = function(n) {
    if (!Uc(n))
      throw Error(b(40));
    return n._reactRootContainer ? (Ga(function() {
      Ac(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ci] = null;
      });
    }), !0) : !1;
  }, Sa.unstable_batchedUpdates = Sd, Sa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Uc(l))
      throw Error(b(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(b(38));
    return Ac(n, r, l, !1, o);
  }, Sa.version = "18.3.1-next-f1338f8080-20240426", Sa;
}
var Ea = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function Cb() {
  return tT || (tT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var P = Um, K = aT(), b = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Fe = !1;
    function $e(e) {
      Fe = e;
    }
    function Le(e) {
      if (!Fe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ct("warn", e, a);
      }
    }
    function g(e) {
      if (!Fe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ct("error", e, a);
      }
    }
    function Ct(e, t, a) {
      {
        var i = b.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ce = 0, ue = 1, Ze = 2, Z = 3, fe = 4, oe = 5, Ue = 6, st = 7, yt = 8, fn = 9, Je = 10, Pe = 11, gt = 12, Ye = 13, wt = 14, Ae = 15, Rn = 16, jn = 17, Bt = 18, pt = 19, xn = 21, be = 22, We = 23, dn = 24, _t = 25, Xn = !0, Y = !1, Ce = !1, te = !1, et = !1, at = !0, wn = !1, Kn = !0, Aa = !0, nn = !0, Gr = !0, Bn = /* @__PURE__ */ new Set(), or = {}, Fa = {};
    function sr(e, t) {
      qr(e, t), qr(e + "Capture", t);
    }
    function qr(e, t) {
      or[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), or[e] = t;
      {
        var a = e.toLowerCase();
        Fa[a] = e, e === "onDoubleClick" && (Fa.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Bn.add(t[i]);
    }
    var pn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Vn = Object.prototype.hasOwnProperty;
    function _n(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Dn(e) {
      try {
        return Pn(e), !1;
      } catch {
        return !0;
      }
    }
    function Pn(e) {
      return "" + e;
    }
    function Xr(e, t) {
      if (Dn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, _n(e)), Pn(e);
    }
    function Ca(e) {
      if (Dn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _n(e)), Pn(e);
    }
    function ni(e, t) {
      if (Dn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, _n(e)), Pn(e);
    }
    function Ha(e, t) {
      if (Dn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, _n(e)), Pn(e);
    }
    function Ta(e) {
      if (Dn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", _n(e)), Pn(e);
    }
    function br(e) {
      if (Dn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", _n(e)), Pn(e);
    }
    var ja = 0, kr = 1, Ra = 2, Xt = 3, Or = 4, Oi = 5, xa = 6, G = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ge = G + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", He = new RegExp("^[" + G + "][" + ge + "]*$"), ct = {}, Ut = {};
    function vn(e) {
      return Vn.call(Ut, e) ? !0 : Vn.call(ct, e) ? !1 : He.test(e) ? (Ut[e] = !0, !0) : (ct[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function It(e, t, a) {
      return t !== null ? t.type === ja : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function cr(e, t, a, i) {
      if (a !== null && a.type === ja)
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
          case Xt:
            return !t;
          case Or:
            return t === !1;
          case Oi:
            return isNaN(t);
          case xa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Lr(e) {
      return Rt.hasOwnProperty(e) ? Rt[e] : null;
    }
    function St(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ra || t === Xt || t === Or, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Rt = {}, Xl = [
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
    Xl.forEach(function(e) {
      Rt[e] = new St(
        e,
        ja,
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
        Ra,
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
        Xt,
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
        Xt,
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
        xa,
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
        Xr(a, t), i.sanitizeURL && Zl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Or) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Tt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Tt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Xt)
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
        return Xr(a, t), u === "" + a ? a : u;
      }
    }
    function Ba(e, t, a, i) {
      var u = Lr(t);
      if (!It(t, u, i)) {
        if (Tt(t, a, u, i) && (a = null), i || u === null) {
          if (vn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Xr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Xt ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var x = u.type, T;
          x === Xt || x === Or && a === !0 ? T = "" : (Xr(a, m), T = "" + a, u.sanitizeURL && Zl(T.toString())), y ? e.setAttributeNS(y, m, T) : e.setAttribute(m, T);
        }
      }
    }
    var ri = Symbol.for("react.element"), Mr = Symbol.for("react.portal"), wa = Symbol.for("react.fragment"), Li = Symbol.for("react.strict_mode"), cl = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), j = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), Ge = Symbol.for("react.suspense_list"), Ke = Symbol.for("react.memo"), xe = Symbol.for("react.lazy"), je = Symbol.for("react.scope"), hn = Symbol.for("react.debug_trace_mode"), Dt = Symbol.for("react.offscreen"), At = Symbol.for("react.legacy_hidden"), fr = Symbol.for("react.cache"), Mi = Symbol.for("react.tracing_marker"), lt = Symbol.iterator, $n = "@@iterator";
    function Nr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = lt && e[lt] || e[$n];
      return typeof t == "function" ? t : null;
    }
    var Be = Object.assign, Va = 0, bp, hf, lo, _a, kp, Kr, Op;
    function Lp() {
    }
    Lp.__reactDisabledLog = !0;
    function Am() {
      {
        if (Va === 0) {
          bp = console.log, hf = console.info, lo = console.warn, _a = console.error, kp = console.group, Kr = console.groupCollapsed, Op = console.groupEnd;
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
            log: Be({}, e, {
              value: bp
            }),
            info: Be({}, e, {
              value: hf
            }),
            warn: Be({}, e, {
              value: lo
            }),
            error: Be({}, e, {
              value: _a
            }),
            group: Be({}, e, {
              value: kp
            }),
            groupCollapsed: Be({}, e, {
              value: Kr
            }),
            groupEnd: Be({}, e, {
              value: Op
            })
          });
        }
        Va < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var eu = b.ReactCurrentDispatcher, fl;
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
      s = eu.current, eu.current = null, Am();
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
    function Fm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function uo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Es(e, Fm(e));
      if (typeof e == "string")
        return Da(e);
      switch (e) {
        case me:
          return Da("Suspense");
        case Ge:
          return Da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            return dl(e.render);
          case Ke:
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
        case Ye:
          return Da("Suspense");
        case pt:
          return Da("SuspenseList");
        case ce:
        case Ze:
        case Ae:
          return dl(e.type);
        case Pe:
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
        case wa:
          return "Fragment";
        case Mr:
          return "Portal";
        case cl:
          return "Profiler";
        case Li:
          return "StrictMode";
        case me:
          return "Suspense";
        case Ge:
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
          case Ke:
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
    function Me(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case dn:
          return "Cache";
        case fn:
          var i = a;
          return Ef(i) + ".Consumer";
        case Je:
          var u = a;
          return Ef(u._context) + ".Provider";
        case Bt:
          return "DehydratedFragment";
        case Pe:
          return Np(a, a.render, "ForwardRef");
        case st:
          return "Fragment";
        case oe:
          return a;
        case fe:
          return "Portal";
        case Z:
          return "Root";
        case Ue:
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
        case Ye:
          return "Suspense";
        case pt:
          return "SuspenseList";
        case _t:
          return "TracingMarker";
        case ue:
        case ce:
        case jn:
        case Ze:
        case wt:
        case Ae:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var oo = b.ReactDebugCurrentFrame, Kt = null, Zr = !1;
    function Jr() {
      {
        if (Kt === null)
          return null;
        var e = Kt._debugOwner;
        if (e !== null && typeof e < "u")
          return Me(e);
      }
      return null;
    }
    function so() {
      return Kt === null ? "" : Sf(Kt);
    }
    function rn() {
      oo.getCurrentStack = null, Kt = null, Zr = !1;
    }
    function vt(e) {
      oo.getCurrentStack = e === null ? null : so, Kt = e, Zr = !1;
    }
    function Hm() {
      return Kt;
    }
    function ba(e) {
      Zr = e;
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
      var a = e, i = t.checked, u = Be({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ho(e, t) {
      tu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !po && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Jr() || "A component", t.type), po = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Rs && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Jr() || "A component", t.type), Rs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ni(t.value != null ? t.value : i),
        controlled: ai(t)
      };
    }
    function Rf(e, t) {
      var a = e, i = t.checked;
      i != null && Ba(a, "checked", i, !1);
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
        Xr(a, "name");
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
    function _s(e, t) {
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
    var Ds;
    Ds = !1;
    function jp() {
      var e = Jr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Bp = ["value", "defaultValue"];
    function jm(e) {
      {
        tu("select", e);
        for (var t = 0; t < Bp.length; t++) {
          var a = Bp[t];
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
      return Be({}, t, {
        value: void 0
      });
    }
    function Vp(e, t) {
      var a = e;
      jm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ds && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ds = !0);
    }
    function Bm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ui(a, !!t.multiple, i, !1) : t.defaultValue != null && Ui(a, !!t.multiple, t.defaultValue, !0);
    }
    function Vm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Ui(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ui(a, !!t.multiple, t.defaultValue, !0) : Ui(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Pm(e, t) {
      var a = e, i = t.value;
      i != null && Ui(a, !!t.multiple, i, !1);
    }
    var _f = !1;
    function Df(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Be({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Yn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Pp(e, t) {
      var a = e;
      tu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !_f && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Jr() || "A component"), _f = !0);
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
    var ii = "http://www.w3.org/1999/xhtml", $m = "http://www.w3.org/1998/Math/MathML", kf = "http://www.w3.org/2000/svg";
    function bs(e) {
      switch (e) {
        case "svg":
          return kf;
        case "math":
          return $m;
        default:
          return ii;
      }
    }
    function Of(e, t) {
      return e == null || e === ii ? bs(t) : e === kf && t === "foreignObject" ? ii : e;
    }
    var Ym = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, ks, Ip = Ym(function(e, t) {
      if (e.namespaceURI === kf && !("innerHTML" in e)) {
        ks = ks || document.createElement("div"), ks.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ks.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), dr = 1, li = 3, Zt = 8, ka = 9, vl = 11, Os = function(e, t) {
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
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(iu.hasOwnProperty(e) && iu[e]) ? t + "px" : (Ha(t, e), ("" + t).trim());
    }
    var lu = /([A-Z])/g, Im = /^ms-/;
    function Qm(e) {
      return e.replace(lu, "-$1").toLowerCase().replace(Im, "-ms-");
    }
    var qp = function() {
    };
    {
      var Xp = /^(?:webkit|moz|o)[A-Z]/, Kp = /^-ms-/, go = /-(.)/g, uu = /;\s*$/, ou = {}, su = {}, Zp = !1, Lf = !1, Mf = function(e) {
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
      }, Wm = function(e, t) {
        Lf || (Lf = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      qp = function(e, t) {
        e.indexOf("-") > -1 ? Nf(e) : Xp.test(e) ? Jp(e) : uu.test(t) && ev(e, t), typeof t == "number" && (isNaN(t) ? tv(e, t) : isFinite(t) || Wm(e, t));
      };
    }
    var Gm = qp;
    function qm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Qm(i)) + ":", t += Ls(i, u, s), a = ";";
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
          u || Gm(i, t[i]);
          var s = Ls(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Xm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ea(e) {
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
        var a = ea(e), i = ea(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Xm(e[f]) ? "Removing" : "Updating", f, p);
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
    }, av = Be({
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
    }, Oa = {}, zf = new RegExp("^(aria)-[" + ge + "]*$"), Eo = new RegExp("^(aria)[A-Z][" + ge + "]*$");
    function Uf(e, t) {
      {
        if (Vn.call(Oa, t) && Oa[t])
          return !0;
        if (Eo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = lv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Oa[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Oa[t] = !0, !0;
        }
        if (zf.test(t)) {
          var u = t.toLowerCase(), s = lv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Oa[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Oa[t] = !0, !0;
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
        if (Vn.call(yn, t) && yn[t])
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
        var v = Lr(t), m = v !== null && v.type === ja;
        if (Ns.hasOwnProperty(u)) {
          var y = Ns[u];
          if (y !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, y), yn[t] = !0, !0;
        } else if (!m && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), yn[t] = !0, !0;
        return typeof a == "boolean" && cr(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), yn[t] = !0, !0) : m ? !0 : cr(t, a, v, !1) ? (yn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Xt && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), yn[t] = !0), !0);
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
    var oi = 1, Co = 2, ml = 4, Km = oi | Co | ml, To = null;
    function Ro(e) {
      To !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), To = e;
    }
    function Zm() {
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
    }, Bf = !1;
    function Jm() {
      var e = xo();
      e && (jf(), wo());
    }
    function Vf(e, t, a) {
      if (Bf)
        return e(t, a);
      Bf = !0;
      try {
        return yl(e, t, a);
      } finally {
        Bf = !1, Jm();
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
    var _o = !1;
    if (pn)
      try {
        var Sl = {};
        Object.defineProperty(Sl, "passive", {
          get: function() {
            _o = !0;
          }
        }), window.addEventListener("test", Sl, Sl), window.removeEventListener("test", Sl, Sl);
      } catch {
        _o = !1;
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
        var q = Array.prototype.slice.call(arguments, 3);
        function Ee() {
          x = !0, N(), a.apply(i, q), T = !1;
        }
        var he, Xe = !1, Qe = !1;
        function _(D) {
          if (he = D.error, Xe = !0, he === null && D.colno === 0 && D.lineno === 0 && (Qe = !0), D.defaultPrevented && he != null && typeof he == "object")
            try {
              he._suppressLogging = !0;
            } catch {
            }
        }
        var z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", _), Yf.addEventListener(z, Ee, !1), y.initEvent(z, !1, !1), Yf.dispatchEvent(y), M && Object.defineProperty(window, "event", M), x && T && (Xe ? Qe && (he = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : he = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(he)), window.removeEventListener("error", _), !x)
          return N(), hv.apply(this, arguments);
      };
    }
    var ey = $f, Fi = !1, La = null, Do = !1, Hi = null, Pa = {
      onError: function(e) {
        Fi = !0, La = e;
      }
    };
    function El(e, t, a, i, u, s, f, p, v) {
      Fi = !1, La = null, ey.apply(Pa, arguments);
    }
    function ci(e, t, a, i, u, s, f, p, v) {
      if (El.apply(this, arguments), Fi) {
        var m = Qf();
        Do || (Do = !0, Hi = m);
      }
    }
    function If() {
      if (Do) {
        var e = Hi;
        throw Do = !1, Hi = null, e;
      }
    }
    function ty() {
      return Fi;
    }
    function Qf() {
      if (Fi) {
        var e = La;
        return Fi = !1, La = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ta(e) {
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
    ), ze = (
      /*                       */
      4
    ), it = (
      /*                */
      16
    ), ut = (
      /*                 */
      32
    ), $a = (
      /*                     */
      64
    ), _e = (
      /*                   */
      128
    ), Vt = (
      /*            */
      256
    ), pr = (
      /*                          */
      512
    ), na = (
      /*                     */
      1024
    ), Mt = (
      /*                      */
      2048
    ), ra = (
      /*                    */
      4096
    ), Bi = (
      /*                   */
      8192
    ), ko = (
      /*             */
      16384
    ), js = Mt | ze | $a | pr | na | ko, mv = (
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
    ), Vi = (
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
      ze | na | 0
    ), mr = bt | ze | it | ut | pr | ra | Bi, In = ze | $a | pr | Bi, aa = Mt | it, bn = vr | Vi | Gf, fi = b.ReactCurrentOwner;
    function Ar(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (bt | ra)) !== Se && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Z ? a : null;
    }
    function qf(e) {
      if (e.tag === Ye) {
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
    function Bs(e) {
      return e.tag === Z ? e.stateNode.containerInfo : null;
    }
    function Xf(e) {
      return Ar(e) === e;
    }
    function Fr(e) {
      {
        var t = fi.current;
        if (t !== null && t.tag === ue) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Me(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ta(e);
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
      if (i.tag !== Z)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ia(e) {
      var t = kt(e);
      return t !== null ? Kf(t) : null;
    }
    function Kf(e) {
      if (e.tag === oe || e.tag === Ue)
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
      return t !== null ? Vs(t) : null;
    }
    function Vs(e) {
      if (e.tag === oe || e.tag === Ue)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== fe) {
          var a = Vs(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ps = K.unstable_scheduleCallback, gv = K.unstable_cancelCallback, $s = K.unstable_shouldYield, Sv = K.unstable_requestPaint, Ft = K.unstable_now, Zf = K.unstable_getCurrentPriorityLevel, Ys = K.unstable_ImmediatePriority, Tl = K.unstable_UserBlockingPriority, Ya = K.unstable_NormalPriority, Ev = K.unstable_LowPriority, Is = K.unstable_IdlePriority, pu = K.unstable_yieldValue, Cv = K.unstable_setDisableYieldValue, di = null, an = null, Q = null, la = !1, Hr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Jf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Aa && (e = Be({}, e, {
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
          la || (la = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function vu(e, t) {
      if (an && typeof an.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & _e) === _e;
          if (nn) {
            var i;
            switch (t) {
              case Wt:
                i = Ys;
                break;
              case hi:
                i = Tl;
                break;
              case Ia:
                i = Ya;
                break;
              case _u:
                i = Is;
                break;
              default:
                i = Ya;
                break;
            }
            an.onCommitFiberRoot(di, e, i, a);
          }
        } catch (u) {
          la || (la = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function ua(e) {
      if (an && typeof an.onPostCommitFiberRoot == "function")
        try {
          an.onPostCommitFiberRoot(di, e);
        } catch (t) {
          la || (la = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Rl(e) {
      if (an && typeof an.onCommitFiberUnmount == "function")
        try {
          an.onCommitFiberUnmount(di, e);
        } catch (t) {
          la || (la = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Jt(e) {
      if (typeof pu == "function" && (Cv(e), $e(e)), an && typeof an.setStrictMode == "function")
        try {
          an.setStrictMode(di, e);
        } catch (t) {
          la || (la = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Tv(e) {
      Q = e;
    }
    function pi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Uo; a++) {
          var i = ry(t);
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
    function Ma(e) {
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
    function qs() {
      Q !== null && typeof Q.markRenderYielded == "function" && Q.markRenderYielded();
    }
    function Xs() {
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
    var de = (
      /*                         */
      0
    ), ve = (
      /*                 */
      1
    ), De = (
      /*                    */
      2
    ), Ve = (
      /*               */
      8
    ), jr = (
      /*              */
      16
    ), gu = Math.clz32 ? Math.clz32 : Qn, zo = Math.log, ny = Math.LN2;
    function Qn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (zo(t) / ny | 0) | 0;
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
    ), Br = (
      /*             */
      4
    ), vi = (
      /*            */
      8
    ), oa = (
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
    ), _l = (
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
    ), Dl = (
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
    ), _v = Dl, Fo = (
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
    function ry(e) {
      {
        if (e & ye)
          return "Sync";
        if (e & kn)
          return "InputContinuousHydration";
        if (e & Br)
          return "InputContinuous";
        if (e & vi)
          return "DefaultHydration";
        if (e & oa)
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
    var xt = -1, dc = Eu, Sr = Dl;
    function bl(e) {
      switch (Qt(e)) {
        case ye:
          return ye;
        case kn:
          return kn;
        case Br:
          return Br;
        case vi:
          return vi;
        case oa:
          return oa;
        case Su:
          return Su;
        case Eu:
        case Zs:
        case Js:
        case ec:
        case tc:
        case nc:
        case _l:
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
        case Dl:
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
          y === oa && (x & wl) !== A
        )
          return t;
      }
      (i & Br) !== A && (i |= a & oa);
      var T = e.entangledLanes;
      if (T !== A)
        for (var O = e.entanglements, M = i & T; M > 0; ) {
          var N = Qi(M), q = 1 << N;
          i |= O[N], M &= ~q;
        }
      return i;
    }
    function Dv(e, t) {
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
        case Br:
          return t + 250;
        case vi:
        case oa:
        case Su:
        case Eu:
        case Zs:
        case Js:
        case ec:
        case tc:
        case nc:
        case _l:
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
        case Dl:
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
      var t = ye | Br | oa;
      return (e & t) === A;
    }
    function Mv(e) {
      return (e & wl) === e;
    }
    function jo(e, t) {
      var a = kn | Br | vi | oa;
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
      return Sr <<= 1, (Sr & Ru) === A && (Sr = Dl), e;
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
    function Ne(e, t) {
      return e | t;
    }
    function Bo(e, t) {
      return e & ~t;
    }
    function vc(e, t) {
      return e & t;
    }
    function ay(e) {
      return e;
    }
    function Uv(e, t) {
      return e !== en && e < t ? e : t;
    }
    function Vo(e) {
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
        case Br:
          i = kn;
          break;
        case oa:
          i = vi;
          break;
        case Eu:
        case Zs:
        case Js:
        case ec:
        case tc:
        case nc:
        case _l:
        case rc:
        case Cu:
        case Tu:
        case ac:
        case Ao:
        case ic:
        case lc:
        case uc:
        case oc:
        case Dl:
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
    var Wt = ye, hi = Br, Ia = oa, _u = Yi, Du = en;
    function sa() {
      return Du;
    }
    function Pt(e) {
      Du = e;
    }
    function Gn(e, t) {
      var a = Du;
      try {
        return Du = e, t();
      } finally {
        Du = a;
      }
    }
    function iy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ly(e, t) {
      return e > t ? e : t;
    }
    function bu(e, t) {
      return e !== 0 && e < t;
    }
    function On(e) {
      var t = Qt(e);
      return bu(Wt, t) ? bu(hi, t) ? Ho(t) ? Ia : _u : hi : Wt;
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
    function uy(e) {
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
    var $o = !1, Lu = [], zt = null, Sn = null, Zn = null, Mu = /* @__PURE__ */ new Map(), Nu = /* @__PURE__ */ new Map(), En = [], Bv = [
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
    function Qa(e) {
      return Bv.indexOf(e) > -1;
    }
    function oy(e, t, a, i, u) {
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
        var f = oy(t, a, i, u, s);
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
    function Vv(e, t, a, i, u) {
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
          if (i === Ye) {
            var u = qf(a);
            if (u !== null) {
              e.blockedOn = u, dd(e.priority, function() {
                Ou(a);
              });
              return;
            }
          } else if (i === Z) {
            var s = a.stateNode;
            if (gc(s)) {
              e.blockedOn = Bs(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function sy(e) {
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
        var a = t[0], i = qn(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Ro(s), u.target.dispatchEvent(s), Zm();
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
    function ca() {
      $o = !1, zt !== null && Ml(zt) && (zt = null), Sn !== null && Ml(Sn) && (Sn = null), Zn !== null && Ml(Zn) && (Zn = null), Mu.forEach(Tc), Nu.forEach(Tc);
    }
    function Ie(e, t) {
      e.blockedOn === t && (e.blockedOn = null, $o || ($o = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, ca)));
    }
    function $t(e) {
      if (Lu.length > 0) {
        Ie(Lu[0], e);
        for (var t = 1; t < Lu.length; t++) {
          var a = Lu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      zt !== null && Ie(zt, e), Sn !== null && Ie(Sn, e), Zn !== null && Ie(Zn, e);
      var i = function(p) {
        return Ie(p, e);
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
    var Ot = b.ReactCurrentBatchConfig, ln = !0;
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
        case Ia:
        default:
          u = Au;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Yo(e, t, a, i) {
      var u = sa(), s = Ot.transition;
      Ot.transition = null;
      try {
        Pt(Wt), Au(e, t, a, i);
      } finally {
        Pt(u), Ot.transition = s;
      }
    }
    function Nl(e, t, a, i) {
      var u = sa(), s = Ot.transition;
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
      var u = qn(e, t, a, i);
      if (u === null) {
        _y(e, t, i, Wi, a), pd(e, i);
        return;
      }
      if (Vv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (pd(e, i), t & ml && Qa(e)) {
        for (; u !== null; ) {
          var s = $u(u);
          s !== null && fd(s);
          var f = qn(e, t, a, i);
          if (f === null && _y(e, t, i, Wi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var Wi = null;
    function qn(e, t, a, i) {
      Wi = null;
      var u = Us(i), s = ts(u);
      if (s !== null) {
        var f = Ar(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ye) {
            var v = qf(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === Z) {
            var m = f.stateNode;
            if (gc(m))
              return Bs(f);
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
            case Ya:
            case Ev:
              return Ia;
            case Is:
              return _u;
            default:
              return Ia;
          }
        }
        default:
          return Ia;
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
    var fa = null, Hu = null, da = null;
    function wc(e) {
      return fa = e, Hu = Qo(), !0;
    }
    function Io() {
      fa = null, Hu = null, da = null;
    }
    function _c() {
      if (da)
        return da;
      var e, t = Hu, a = t.length, i, u = Qo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return da = u.slice(e, p), da;
    }
    function Qo() {
      return "value" in fa ? fa.value : fa.textContent;
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
      return Be(t.prototype, {
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
    }, Dc = Ht(on), Ul = Be({}, on, {
      view: 0,
      detail: 0
    }), yd = Ht(Ul), gd, Wa, ju;
    function Sd(e) {
      e !== ju && (ju && e.type === "mousemove" ? (gd = e.screenX - ju.screenX, Wa = e.screenY - ju.screenY) : (gd = 0, Wa = 0), ju = e);
    }
    var Ga = Be({}, Ul, {
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
        return "movementY" in e ? e.movementY : Wa;
      }
    }), bc = Ht(Ga), Al = Be({}, Ga, {
      dataTransfer: 0
    }), Pv = Ht(Al), $v = Be({}, Ul, {
      relatedTarget: 0
    }), Wo = Ht($v), kc = Be({}, on, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cy = Ht(kc), fy = Be({}, on, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Yv = Ht(fy), Iv = Be({}, on, {
      data: 0
    }), Gi = Ht(Iv), dy = Gi, Bu = {
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
        var t = Bu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = zl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Qv[e.keyCode] || "Unidentified" : "";
    }
    var py = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Wv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = py[e];
      return i ? !!a[i] : !1;
    }
    function Ed(e) {
      return Wv;
    }
    var vy = Be({}, Ul, {
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
    }), Gv = Ht(vy), qv = Be({}, Ga, {
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
    }), Xv = Ht(qv), pa = Be({}, Ul, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ed
    }), Cd = Ht(pa), hy = Be({}, on, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), qi = Ht(hy), Oc = Be({}, Ga, {
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
    }), Fl = Ht(Oc), Lc = [9, 13, 27, 32], Mc = 229, Go = pn && "CompositionEvent" in window, qo = null;
    pn && "documentMode" in document && (qo = document.documentMode);
    var Td = pn && "TextEvent" in window && !qo, Kv = pn && (!Go || qo && qo > 8 && qo <= 11), Rd = 32, xd = String.fromCharCode(Rd);
    function Nc() {
      sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), sr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), sr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), sr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Xo = !1;
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
    function my(e, t) {
      return e === "keydown" && t.keyCode === Mc;
    }
    function _d(e, t) {
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
    var Xi = !1;
    function Uc(e, t, a, i, u) {
      var s, f;
      if (Go ? s = wd(t) : Xi ? _d(t, i) && (s = "onCompositionEnd") : my(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Kv && !Ko(i) && (!Xi && s === "onCompositionStart" ? Xi = wc(u) : s === "onCompositionEnd" && Xi && (f = _c()));
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
          return a !== Rd ? null : (Xo = !0, xd);
        case "textInput":
          var i = t.data;
          return i === xd && Xo ? null : i;
        default:
          return null;
      }
    }
    function yy(e, t) {
      if (Xi) {
        if (e === "compositionend" || !Go && _d(e, t)) {
          var a = _c();
          return Io(), Xi = !1, a;
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
      if (Td ? s = Jv(t, i) : s = yy(t, i), !s)
        return null;
      var f = ah(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new dy("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function gy(e, t, a, i, u, s, f) {
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
        var s = new Dc("onChange", "change", null, a, i);
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
      r(t, o, e, Us(e)), Vf(h, t);
    }
    function h(e) {
      _0(e, 0);
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
    function B() {
      l && (l.detachEvent("onpropertychange", F), l = null, o = null);
    }
    function F(e) {
      e.propertyName === "value" && S(o) && d(e);
    }
    function J(e, t, a) {
      e === "focusin" ? (B(), H(t, a)) : e === "focusout" && B();
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
    function k(e, t, a, i, u, s, f) {
      var p = a ? $c(a) : window, v, m;
      if (c(p) ? v = C : eh(p) ? L ? v = w : (v = ae, m = J) : se(p) && (v = Gt), v) {
        var y = v(t, a);
        if (y) {
          r(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && R(p);
    }
    function $() {
      qr("onMouseEnter", ["mouseout", "mouseover"]), qr("onMouseLeave", ["mouseout", "mouseover"]), qr("onPointerEnter", ["pointerout", "pointerover"]), qr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function pe(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !pv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (ts(m) || Bd(m)))
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
            (O !== N || O.tag !== oe && O.tag !== Ue) && (O = null);
          }
        } else
          T = null, O = a;
        if (T !== O) {
          var q = bc, Ee = "onMouseLeave", he = "onMouseEnter", Xe = "mouse";
          (t === "pointerout" || t === "pointerover") && (q = Xv, Ee = "onPointerLeave", he = "onPointerEnter", Xe = "pointer");
          var Qe = T == null ? y : $c(T), _ = O == null ? y : $c(O), z = new q(Ee, Xe + "leave", T, i, u);
          z.target = Qe, z.relatedTarget = _;
          var D = null, V = ts(u);
          if (V === a) {
            var ne = new q(he, Xe + "enter", O, i, u);
            ne.target = _, ne.relatedTarget = Qe, D = ne;
          }
          DT(e, z, D, T, O);
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
        if (!Vn.call(t, s) || !ie(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function sn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function tt(e) {
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
        a = sn(tt(a));
      }
    }
    function Sy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return uT(e, u, s, f, p);
    }
    function uT(e, t, a, i, u) {
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
    function oT(e, t) {
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
    function v0(e) {
      return e && e.nodeType === li;
    }
    function h0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : v0(e) ? !1 : v0(t) ? h0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function sT(e) {
      return e && e.ownerDocument && h0(e.ownerDocument.documentElement, e);
    }
    function cT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function m0() {
      for (var e = window, t = Ts(); t instanceof e.HTMLIFrameElement; ) {
        if (cT(t))
          e = t.contentWindow;
        else
          return t;
        t = Ts(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function fT() {
      var e = m0();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? pT(e) : null
      };
    }
    function dT(e) {
      var t = m0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && sT(a)) {
        i !== null && Ey(a) && vT(a, i);
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
    function pT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Sy(e), t || {
        start: 0,
        end: 0
      };
    }
    function vT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : oT(e, t);
    }
    var hT = pn && "documentMode" in document && document.documentMode <= 11;
    function mT() {
      sr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Hc = null, Cy = null, Dd = null, Ty = !1;
    function yT(e) {
      if ("selectionStart" in e && Ey(e))
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
    function gT(e) {
      return e.window === e ? e.document : e.nodeType === ka ? e : e.ownerDocument;
    }
    function y0(e, t, a) {
      var i = gT(a);
      if (!(Ty || Hc == null || Hc !== Ts(i))) {
        var u = yT(Hc);
        if (!Dd || !Re(Dd, u)) {
          Dd = u;
          var s = ah(Cy, "onSelect");
          if (s.length > 0) {
            var f = new Dc("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Hc;
          }
        }
      }
    }
    function ST(e, t, a, i, u, s, f) {
      var p = a ? $c(a) : window;
      switch (t) {
        case "focusin":
          (eh(p) || p.contentEditable === "true") && (Hc = p, Cy = a, Dd = null);
          break;
        case "focusout":
          Hc = null, Cy = null, Dd = null;
          break;
        case "mousedown":
          Ty = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ty = !1, y0(e, i, u);
          break;
        case "selectionchange":
          if (hT)
            break;
        case "keydown":
        case "keyup":
          y0(e, i, u);
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
    }, Ry = {}, g0 = {};
    pn && (g0 = document.createElement("div").style, "AnimationEvent" in window || (delete jc.animationend.animation, delete jc.animationiteration.animation, delete jc.animationstart.animation), "TransitionEvent" in window || delete jc.transitionend.transition);
    function nh(e) {
      if (Ry[e])
        return Ry[e];
      if (!jc[e])
        return e;
      var t = jc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in g0)
          return Ry[e] = t[a];
      return e;
    }
    var S0 = nh("animationend"), E0 = nh("animationiteration"), C0 = nh("animationstart"), T0 = nh("transitionend"), R0 = /* @__PURE__ */ new Map(), x0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Vu(e, t) {
      R0.set(e, t), sr(t, [e]);
    }
    function ET() {
      for (var e = 0; e < x0.length; e++) {
        var t = x0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Vu(a, "on" + i);
      }
      Vu(S0, "onAnimationEnd"), Vu(E0, "onAnimationIteration"), Vu(C0, "onAnimationStart"), Vu("dblclick", "onDoubleClick"), Vu("focusin", "onFocus"), Vu("focusout", "onBlur"), Vu(T0, "onTransitionEnd");
    }
    function CT(e, t, a, i, u, s, f) {
      var p = R0.get(t);
      if (p !== void 0) {
        var v = Dc, m = t;
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
          case S0:
          case E0:
          case C0:
            v = cy;
            break;
          case T0:
            v = qi;
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
            v = Xv;
            break;
        }
        var y = (s & ml) !== 0;
        {
          var x = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", T = wT(a, p, i.type, y, x);
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
    ET(), $(), n(), mT(), Nc();
    function TT(e, t, a, i, u, s, f) {
      CT(e, t, a, i, u, s);
      var p = (s & Km) === 0;
      p && (pe(e, t, a, i, u), k(e, t, a, i, u), ST(e, t, a, i, u), gy(e, t, a, i, u));
    }
    var bd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], xy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(bd));
    function w0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ci(i, t, void 0, e), e.currentTarget = null;
    }
    function RT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          w0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], x = y.instance, T = y.currentTarget, O = y.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          w0(e, O, T), i = x;
        }
    }
    function _0(e, t) {
      for (var a = (t & ml) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        RT(s, f, a);
      }
      If();
    }
    function xT(e, t, a, i, u) {
      var s = Us(a), f = [];
      TT(f, e, i, a, s, t), _0(f, t);
    }
    function jt(e, t) {
      xy.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ex(t), u = bT(e);
      i.has(u) || (D0(t, e, Co, a), i.add(u));
    }
    function wy(e, t, a) {
      xy.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ml), D0(a, e, i, t);
    }
    var rh = "_reactListening" + Math.random().toString(36).slice(2);
    function kd(e) {
      if (!e[rh]) {
        e[rh] = !0, Bn.forEach(function(a) {
          a !== "selectionchange" && (xy.has(a) || wy(a, !1, e), wy(a, !0, e));
        });
        var t = e.nodeType === ka ? e : e.ownerDocument;
        t !== null && (t[rh] || (t[rh] = !0, wy("selectionchange", !1, t)));
      }
    }
    function D0(e, t, a, i, u) {
      var s = un(e, t, a), f = void 0;
      _o && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? xc(e, t, s, f) : mi(e, t, s) : f !== void 0 ? md(e, t, s, f) : Fu(e, t, s);
    }
    function b0(e, t) {
      return e === t || e.nodeType === Zt && e.parentNode === t;
    }
    function _y(e, t, a, i, u) {
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
              if (v === Z || v === fe) {
                var m = p.stateNode.containerInfo;
                if (b0(m, f))
                  break;
                if (v === fe)
                  for (var y = p.return; y !== null; ) {
                    var x = y.tag;
                    if (x === Z || x === fe) {
                      var T = y.stateNode.containerInfo;
                      if (b0(T, f))
                        return;
                    }
                    y = y.return;
                  }
                for (; m !== null; ) {
                  var O = ts(m);
                  if (O === null)
                    return;
                  var M = O.tag;
                  if (M === oe || M === Ue) {
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
      Vf(function() {
        return xT(e, t, a, s);
      });
    }
    function Od(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function wT(e, t, a, i, u, s) {
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
    function Bc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== oe);
      return e || null;
    }
    function _T(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Bc(s))
        u++;
      for (var f = 0, p = i; p; p = Bc(p))
        f++;
      for (; u - f > 0; )
        a = Bc(a), u--;
      for (; f - u > 0; )
        i = Bc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Bc(a), i = Bc(i);
      }
      return null;
    }
    function k0(e, t, a, i, u) {
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
    function DT(e, t, a, i, u) {
      var s = i && u ? _T(i, u) : null;
      i !== null && k0(e, t, i, s, !1), u !== null && a !== null && k0(e, a, u, s, !0);
    }
    function bT(e, t) {
      return e + "__bubble";
    }
    var va = !1, Ld = "dangerouslySetInnerHTML", ih = "suppressContentEditableWarning", Pu = "suppressHydrationWarning", O0 = "autoFocus", Jo = "children", es = "style", lh = "__html", Dy, uh, Md, L0, oh, M0, N0;
    Dy = {
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
        possibleRegistrationNames: Fa
      });
    }, M0 = pn && !document.documentMode, Md = function(e, t, a) {
      if (!va) {
        var i = sh(a), u = sh(t);
        u !== i && (va = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, L0 = function(e) {
      if (!va) {
        va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, oh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, N0 = function(e, t) {
      var a = e.namespaceURI === ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var kT = /\r\n?/g, OT = /\u0000|\uFFFD/g;
    function sh(e) {
      Ta(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(kT, `
`).replace(OT, "");
    }
    function ch(e, t, a, i) {
      var u = sh(t), s = sh(e);
      if (s !== u && (i && (va || (va = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Xn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function z0(e) {
      return e.nodeType === ka ? e : e.ownerDocument;
    }
    function LT() {
    }
    function fh(e) {
      e.onclick = LT;
    }
    function MT(e, t, a, i, u) {
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
            s === ih || s === Pu || s === O0 || (or.hasOwnProperty(s) ? f != null && (typeof f != "function" && oh(s, f), s === "onScroll" && jt("scroll", t)) : f != null && Ba(t, s, f, u));
        }
    }
    function NT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === es ? nv(e, f) : s === Ld ? Ip(e, f) : s === Jo ? Os(e, f) : Ba(e, s, f, i);
      }
    }
    function zT(e, t, a, i) {
      var u, s = z0(a), f, p = i;
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
      return p === ii && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Vn.call(Dy, e) && (Dy[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function UT(e, t) {
      return z0(t).createTextNode(e);
    }
    function AT(e, t, a, i) {
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
          _s(e, a), s = a;
          break;
        case "select":
          Vp(e, a), s = wf(e, a), jt("invalid", e);
          break;
        case "textarea":
          Pp(e, a), s = Df(e, a), jt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ms(t, s), MT(t, e, i, s, u), t) {
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
          Bm(e, a);
          break;
        default:
          typeof s.onClick == "function" && fh(e);
          break;
      }
    }
    function FT(e, t, a, i, u) {
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
          f = Df(e, a), p = Df(e, i), s = [];
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
            v === Ld || v === Jo || v === ih || v === Pu || v === O0 || (or.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
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
    function HT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && Rf(e, u);
      var s = ui(a, i), f = ui(a, u);
      switch (NT(e, t, s, f), a) {
        case "input":
          ru(e, u);
          break;
        case "textarea":
          $p(e, u);
          break;
        case "select":
          Vm(e, u);
          break;
      }
    }
    function jT(e) {
      {
        var t = e.toLowerCase();
        return Ns.hasOwnProperty(t) && Ns[t] || null;
      }
    }
    function BT(e, t, a, i, u, s, f) {
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
          _s(e, a);
          break;
        case "select":
          Vp(e, a), jt("invalid", e);
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
            var q = void 0, Ee = p && wn ? null : Lr(M);
            if (a[Pu] !== !0) {
              if (!(M === ih || M === Pu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              M === "value" || M === "checked" || M === "selected")) {
                if (M === Ld) {
                  var he = e.innerHTML, Xe = N ? N[lh] : void 0;
                  if (Xe != null) {
                    var Qe = N0(e, Xe);
                    Qe !== he && Md(M, he, Qe);
                  }
                } else if (M === es) {
                  if (v.delete(M), M0) {
                    var _ = qm(N);
                    q = e.getAttribute("style"), _ !== q && Md(M, q, _);
                  }
                } else if (p && !wn)
                  v.delete(M.toLowerCase()), q = Jl(e, M, N), N !== q && Md(M, q, N);
                else if (!It(M, Ee, p) && !Tt(M, N, Ee, p)) {
                  var z = !1;
                  if (Ee !== null)
                    v.delete(Ee.attributeName), q = sl(e, M, N, Ee);
                  else {
                    var D = i;
                    if (D === ii && (D = bs(t)), D === ii)
                      v.delete(M.toLowerCase());
                    else {
                      var V = jT(M);
                      V !== null && V !== M && (z = !0, v.delete(V)), v.delete(M);
                    }
                    q = Jl(e, M, N);
                  }
                  var ne = wn;
                  !ne && N !== q && !z && Md(M, q, N);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Pu] !== !0 && L0(v), t) {
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
    function VT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function by(e, t) {
      {
        if (va)
          return;
        va = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (va)
          return;
        va = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t, a) {
      {
        if (va)
          return;
        va = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || va)
          return;
        va = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function PT(e, t, a) {
      switch (t) {
        case "input":
          Fp(e, a);
          return;
        case "textarea":
          bf(e, a);
          return;
        case "select":
          Pm(e, a);
          return;
      }
    }
    var Nd = function() {
    }, zd = function() {
    };
    {
      var $T = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], U0 = [
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
      ], YT = U0.concat(["button"]), IT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], A0 = {
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
        var a = Be({}, e || A0), i = {
          tag: t
        };
        return U0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), YT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), $T.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var QT = function(e, t) {
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
            return IT.indexOf(t) === -1;
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
      }, WT = function(e, t) {
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
      }, F0 = {};
      Nd = function(e, t, a) {
        a = a || A0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = QT(e, u) ? null : i, f = s ? null : WT(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!F0[m]) {
            F0[m] = !0;
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
    var dh = "suppressHydrationWarning", ph = "$", vh = "/$", Ud = "$?", Ad = "$!", GT = "style", My = null, Ny = null;
    function qT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ka:
        case vl: {
          t = i === ka ? "#document" : "#fragment";
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
    function XT(e, t, a) {
      {
        var i = e, u = Of(i.namespace, t), s = zd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function sk(e) {
      return e;
    }
    function KT(e) {
      My = Uu(), Ny = fT();
      var t = null;
      return Tr(!1), t;
    }
    function ZT(e) {
      dT(Ny), Tr(My), My = null, Ny = null;
    }
    function JT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Nd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = zd(f.ancestorInfo, e);
          Nd(null, p, v);
        }
        s = f.namespace;
      }
      var m = zT(e, t, a, s);
      return jd(u, m), Vy(m, t), m;
    }
    function eR(e, t) {
      e.appendChild(t);
    }
    function tR(e, t, a, i, u) {
      switch (AT(e, t, a, i), t) {
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
    function nR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = zd(f.ancestorInfo, t);
          Nd(null, p, v);
        }
      }
      return FT(e, t, a, i);
    }
    function zy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function rR(e, t, a, i) {
      {
        var u = a;
        Nd(null, e, u.ancestorInfo);
      }
      var s = UT(e, t);
      return jd(i, s), s;
    }
    function aR() {
      var e = window.event;
      return e === void 0 ? Ia : Rc(e.type);
    }
    var Uy = typeof setTimeout == "function" ? setTimeout : void 0, iR = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, H0 = typeof Promise == "function" ? Promise : void 0, lR = typeof queueMicrotask == "function" ? queueMicrotask : typeof H0 < "u" ? function(e) {
      return H0.resolve(null).then(e).catch(uR);
    } : Uy;
    function uR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function oR(e, t, a, i) {
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
    function sR(e, t, a, i, u, s) {
      HT(e, t, a, i, u), Vy(e, u);
    }
    function j0(e) {
      Os(e, "");
    }
    function cR(e, t, a) {
      e.nodeValue = a;
    }
    function fR(e, t) {
      e.appendChild(t);
    }
    function dR(e, t) {
      var a;
      e.nodeType === Zt ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && fh(a);
    }
    function pR(e, t, a) {
      e.insertBefore(t, a);
    }
    function vR(e, t, a) {
      e.nodeType === Zt ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function hR(e, t) {
      e.removeChild(t);
    }
    function mR(e, t) {
      e.nodeType === Zt ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Fy(e, t) {
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
    function yR(e, t) {
      e.nodeType === Zt ? Fy(e.parentNode, t) : e.nodeType === dr && Fy(e, t), $t(e);
    }
    function gR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function SR(e) {
      e.nodeValue = "";
    }
    function ER(e, t) {
      e = e;
      var a = t[GT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ls("display", i);
    }
    function CR(e, t) {
      e.nodeValue = t;
    }
    function TR(e) {
      e.nodeType === dr ? e.textContent = "" : e.nodeType === ka && e.documentElement && e.removeChild(e.documentElement);
    }
    function RR(e, t, a) {
      return e.nodeType !== dr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function xR(e, t) {
      return t === "" || e.nodeType !== li ? null : e;
    }
    function wR(e) {
      return e.nodeType !== Zt ? null : e;
    }
    function B0(e) {
      return e.data === Ud;
    }
    function Hy(e) {
      return e.data === Ad;
    }
    function _R(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function DR(e, t) {
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
    function bR(e) {
      return hh(e.firstChild);
    }
    function kR(e) {
      return hh(e.firstChild);
    }
    function OR(e) {
      return hh(e.nextSibling);
    }
    function LR(e, t, a, i, u, s, f) {
      jd(s, e), Vy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & ve) !== de;
      return BT(e, t, a, p, i, m, f);
    }
    function MR(e, t, a, i) {
      return jd(a, e), a.mode & ve, VT(e, t);
    }
    function NR(e, t) {
      jd(t, e);
    }
    function zR(e) {
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
    function V0(e) {
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
    function UR(e) {
      $t(e);
    }
    function AR(e) {
      $t(e);
    }
    function FR(e) {
      return e !== "head" && e !== "body";
    }
    function HR(e, t, a, i) {
      var u = !0;
      ch(t.nodeValue, a, i, u);
    }
    function jR(e, t, a, i, u, s) {
      if (t[dh] !== !0) {
        var f = !0;
        ch(i.nodeValue, u, s, f);
      }
    }
    function BR(e, t) {
      t.nodeType === dr ? by(e, t) : t.nodeType === Zt || ky(e, t);
    }
    function VR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === dr ? by(a, t) : t.nodeType === Zt || ky(a, t));
      }
    }
    function PR(e, t, a, i, u) {
      (u || t[dh] !== !0) && (i.nodeType === dr ? by(a, i) : i.nodeType === Zt || ky(a, i));
    }
    function $R(e, t, a) {
      Oy(e, t);
    }
    function YR(e, t) {
      Ly(e, t);
    }
    function IR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function QR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function WR(e, t, a, i, u, s) {
      (s || t[dh] !== !0) && Oy(a, i);
    }
    function GR(e, t, a, i, u) {
      (u || t[dh] !== !0) && Ly(a, i);
    }
    function qR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function XR(e) {
      kd(e);
    }
    var Vc = Math.random().toString(36).slice(2), Pc = "__reactFiber$" + Vc, jy = "__reactProps$" + Vc, Hd = "__reactContainer$" + Vc, By = "__reactEvents$" + Vc, KR = "__reactListeners$" + Vc, ZR = "__reactHandles$" + Vc;
    function JR(e) {
      delete e[Pc], delete e[jy], delete e[By], delete e[KR], delete e[ZR];
    }
    function jd(e, t) {
      t[Pc] = e;
    }
    function mh(e, t) {
      t[Hd] = e;
    }
    function P0(e) {
      e[Hd] = null;
    }
    function Bd(e) {
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
            for (var u = V0(e); u !== null; ) {
              var s = u[Pc];
              if (s)
                return s;
              u = V0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function $u(e) {
      var t = e[Pc] || e[Hd];
      return t && (t.tag === oe || t.tag === Ue || t.tag === Ye || t.tag === Z) ? t : null;
    }
    function $c(e) {
      if (e.tag === oe || e.tag === Ue)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function yh(e) {
      return e[jy] || null;
    }
    function Vy(e, t) {
      e[jy] = t;
    }
    function ex(e) {
      var t = e[By];
      return t === void 0 && (t = e[By] = /* @__PURE__ */ new Set()), t;
    }
    var $0 = {}, Y0 = b.ReactDebugCurrentFrame;
    function gh(e) {
      if (e) {
        var t = e._owner, a = uo(e.type, e._source, t ? t.type : null);
        Y0.setExtraStackFrame(a);
      } else
        Y0.setExtraStackFrame(null);
    }
    function Si(e, t, a, i, u) {
      {
        var s = Function.call.bind(Vn);
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
            p && !(p instanceof Error) && (gh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), gh(null)), p instanceof Error && !(p.message in $0) && ($0[p.message] = !0, gh(u), g("Failed %s type: %s", a, p.message), gh(null));
          }
      }
    }
    var Py = [], Sh;
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
      t !== Sh[Hl] && g("Unexpected Fiber popped."), e.current = Py[Hl], Py[Hl] = null, Sh[Hl] = null, Hl--;
    }
    function xr(e, t, a) {
      Hl++, Py[Hl] = e.current, Sh[Hl] = a, e.current = t;
    }
    var $y;
    $y = {};
    var Na = {};
    Object.freeze(Na);
    var jl = Yu(Na), Ki = Yu(!1), Yy = Na;
    function Yc(e, t, a) {
      return a && Zi(t) ? Yy : jl.current;
    }
    function I0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Ic(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Na;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Me(e) || "Unknown";
          Si(i, s, "context", p);
        }
        return u && I0(e, t, s), s;
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
    function Iy(e) {
      Rr(Ki, e), Rr(jl, e);
    }
    function Q0(e, t, a) {
      {
        if (jl.current !== Na)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        xr(jl, t, e), xr(Ki, a, e);
      }
    }
    function W0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Me(e) || "Unknown";
            $y[s] || ($y[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Me(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Me(e) || "Unknown";
          Si(u, f, "child context", v);
        }
        return Be({}, a, f);
      }
    }
    function Th(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Na;
        return Yy = jl.current, xr(jl, a, e), xr(Ki, Ki.current, e), !0;
      }
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = W0(e, t, Yy);
          i.__reactInternalMemoizedMergedChildContext = u, Rr(Ki, e), Rr(jl, e), xr(jl, u, e), xr(Ki, a, e);
        } else
          Rr(Ki, e), xr(Ki, a, e);
      }
    }
    function tx(e) {
      {
        if (!Xf(e) || e.tag !== ue)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Z:
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
    var Iu = 0, Rh = 1, Bl = null, Qy = !1, Wy = !1;
    function q0(e) {
      Bl === null ? Bl = [e] : Bl.push(e);
    }
    function nx(e) {
      Qy = !0, q0(e);
    }
    function X0() {
      Qy && Qu();
    }
    function Qu() {
      if (!Wy && Bl !== null) {
        Wy = !0;
        var e = 0, t = sa();
        try {
          var a = !0, i = Bl;
          for (Pt(Wt); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Bl = null, Qy = !1;
        } catch (s) {
          throw Bl !== null && (Bl = Bl.slice(e + 1)), Ps(Ys, Qu), s;
        } finally {
          Pt(t), Wy = !1;
        }
      }
      return null;
    }
    var Qc = [], Wc = 0, xh = null, wh = 0, qa = [], Xa = 0, ns = null, Vl = 1, Pl = "";
    function rx(e) {
      return as(), (e.flags & Wf) !== Se;
    }
    function ax(e) {
      return as(), wh;
    }
    function ix() {
      var e = Pl, t = Vl, a = t & ~lx(t);
      return a.toString(32) + e;
    }
    function rs(e, t) {
      as(), Qc[Wc++] = wh, Qc[Wc++] = xh, xh = e, wh = t;
    }
    function K0(e, t, a) {
      as(), qa[Xa++] = Vl, qa[Xa++] = Pl, qa[Xa++] = ns, ns = e;
      var i = Vl, u = Pl, s = _h(i) - 1, f = i & ~(1 << s), p = a + 1, v = _h(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, x = (f & y).toString(32), T = f >> m, O = s - m, M = _h(t) + O, N = p << O, q = N | T, Ee = x + u;
        Vl = 1 << M | q, Pl = Ee;
      } else {
        var he = p << s, Xe = he | f, Qe = u;
        Vl = 1 << v | Xe, Pl = Qe;
      }
    }
    function Gy(e) {
      as();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        rs(e, a), K0(e, a, i);
      }
    }
    function _h(e) {
      return 32 - gu(e);
    }
    function lx(e) {
      return 1 << _h(e) - 1;
    }
    function qy(e) {
      for (; e === xh; )
        xh = Qc[--Wc], Qc[Wc] = null, wh = Qc[--Wc], Qc[Wc] = null;
      for (; e === ns; )
        ns = qa[--Xa], qa[Xa] = null, Pl = qa[--Xa], qa[Xa] = null, Vl = qa[--Xa], qa[Xa] = null;
    }
    function ux() {
      return as(), ns !== null ? {
        id: Vl,
        overflow: Pl
      } : null;
    }
    function ox(e, t) {
      as(), qa[Xa++] = Vl, qa[Xa++] = Pl, qa[Xa++] = ns, Vl = t.id, Pl = t.overflow, ns = e;
    }
    function as() {
      er() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Jn = null, Ka = null, Ei = !1, is = !1, Wu = null;
    function sx() {
      Ei && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Z0() {
      is = !0;
    }
    function cx() {
      return is;
    }
    function fx(e) {
      var t = e.stateNode.containerInfo;
      return Ka = kR(t), Jn = e, Ei = !0, Wu = null, is = !1, !0;
    }
    function dx(e, t, a) {
      return Ka = OR(t), Jn = e, Ei = !0, Wu = null, is = !1, a !== null && ox(e, a), !0;
    }
    function J0(e, t) {
      switch (e.tag) {
        case Z: {
          BR(e.stateNode.containerInfo, t);
          break;
        }
        case oe: {
          var a = (e.mode & ve) !== de;
          PR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ye: {
          var i = e.memoizedState;
          i.dehydrated !== null && VR(i.dehydrated, t);
          break;
        }
      }
    }
    function eE(e, t) {
      J0(e, t);
      var a = mD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= it) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (is)
          return;
        switch (e.tag) {
          case Z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case oe:
                var i = t.type;
                t.pendingProps, $R(a, i);
                break;
              case Ue:
                var u = t.pendingProps;
                YR(a, u);
                break;
            }
            break;
          }
          case oe: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case oe: {
                var v = t.type, m = t.pendingProps, y = (e.mode & ve) !== de;
                WR(
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
              case Ue: {
                var x = t.pendingProps, T = (e.mode & ve) !== de;
                GR(
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
          case Ye: {
            var O = e.memoizedState, M = O.dehydrated;
            if (M !== null)
              switch (t.tag) {
                case oe:
                  var N = t.type;
                  t.pendingProps, IR(M, N);
                  break;
                case Ue:
                  var q = t.pendingProps;
                  QR(M, q);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function tE(e, t) {
      t.flags = t.flags & ~ra | bt, Xy(e, t);
    }
    function nE(e, t) {
      switch (e.tag) {
        case oe: {
          var a = e.type;
          e.pendingProps;
          var i = RR(t, a);
          return i !== null ? (e.stateNode = i, Jn = e, Ka = bR(i), !0) : !1;
        }
        case Ue: {
          var u = e.pendingProps, s = xR(t, u);
          return s !== null ? (e.stateNode = s, Jn = e, Ka = null, !0) : !1;
        }
        case Ye: {
          var f = wR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ux(),
              retryLane: Wn
            };
            e.memoizedState = p;
            var v = yD(f);
            return v.return = e, e.child = v, Jn = e, Ka = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ky(e) {
      return (e.mode & ve) !== de && (e.flags & _e) === Se;
    }
    function Zy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Jy(e) {
      if (Ei) {
        var t = Ka;
        if (!t) {
          Ky(e) && (Xy(Jn, e), Zy()), tE(Jn, e), Ei = !1, Jn = e;
          return;
        }
        var a = t;
        if (!nE(e, t)) {
          Ky(e) && (Xy(Jn, e), Zy()), t = Fd(a);
          var i = Jn;
          if (!t || !nE(e, t)) {
            tE(Jn, e), Ei = !1, Jn = e;
            return;
          }
          eE(i, a);
        }
      }
    }
    function px(e, t, a) {
      var i = e.stateNode, u = !is, s = LR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function vx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = MR(t, a, e);
      if (i) {
        var u = Jn;
        if (u !== null)
          switch (u.tag) {
            case Z: {
              var s = u.stateNode.containerInfo, f = (u.mode & ve) !== de;
              HR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case oe: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & ve) !== de;
              jR(
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
    function hx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      NR(a, e);
    }
    function mx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return zR(a);
    }
    function rE(e) {
      for (var t = e.return; t !== null && t.tag !== oe && t.tag !== Z && t.tag !== Ye; )
        t = t.return;
      Jn = t;
    }
    function Dh(e) {
      if (e !== Jn)
        return !1;
      if (!Ei)
        return rE(e), Ei = !0, !1;
      if (e.tag !== Z && (e.tag !== oe || FR(e.type) && !zy(e.type, e.memoizedProps))) {
        var t = Ka;
        if (t)
          if (Ky(e))
            aE(e), Zy();
          else
            for (; t; )
              eE(e, t), t = Fd(t);
      }
      return rE(e), e.tag === Ye ? Ka = mx(e) : Ka = Jn ? Fd(e.stateNode) : null, !0;
    }
    function yx() {
      return Ei && Ka !== null;
    }
    function aE(e) {
      for (var t = Ka; t; )
        J0(e, t), t = Fd(t);
    }
    function Gc() {
      Jn = null, Ka = null, Ei = !1, is = !1;
    }
    function iE() {
      Wu !== null && (Z1(Wu), Wu = null);
    }
    function er() {
      return Ei;
    }
    function eg(e) {
      Wu === null ? Wu = [e] : Wu.push(e);
    }
    var gx = b.ReactCurrentBatchConfig, Sx = null;
    function Ex() {
      return gx.transition;
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
      var Cx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Ve && (t = a), a = a.return;
        return t;
      }, ls = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Vd = [], Pd = [], $d = [], Yd = [], Id = [], Qd = [], us = /* @__PURE__ */ new Set();
      Ci.recordUnsafeLifecycleWarnings = function(e, t) {
        us.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Vd.push(e), e.mode & Ve && typeof t.UNSAFE_componentWillMount == "function" && Pd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && $d.push(e), e.mode & Ve && typeof t.UNSAFE_componentWillReceiveProps == "function" && Yd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Id.push(e), e.mode & Ve && typeof t.UNSAFE_componentWillUpdate == "function" && Qd.push(e));
      }, Ci.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Vd.length > 0 && (Vd.forEach(function(T) {
          e.add(Me(T) || "Component"), us.add(T.type);
        }), Vd = []);
        var t = /* @__PURE__ */ new Set();
        Pd.length > 0 && (Pd.forEach(function(T) {
          t.add(Me(T) || "Component"), us.add(T.type);
        }), Pd = []);
        var a = /* @__PURE__ */ new Set();
        $d.length > 0 && ($d.forEach(function(T) {
          a.add(Me(T) || "Component"), us.add(T.type);
        }), $d = []);
        var i = /* @__PURE__ */ new Set();
        Yd.length > 0 && (Yd.forEach(function(T) {
          i.add(Me(T) || "Component"), us.add(T.type);
        }), Yd = []);
        var u = /* @__PURE__ */ new Set();
        Id.length > 0 && (Id.forEach(function(T) {
          u.add(Me(T) || "Component"), us.add(T.type);
        }), Id = []);
        var s = /* @__PURE__ */ new Set();
        if (Qd.length > 0 && (Qd.forEach(function(T) {
          s.add(Me(T) || "Component"), us.add(T.type);
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
          Le(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = ls(a);
          Le(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var x = ls(u);
          Le(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var bh = /* @__PURE__ */ new Map(), lE = /* @__PURE__ */ new Set();
      Ci.recordLegacyContextWarning = function(e, t) {
        var a = Cx(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!lE.has(e.type)) {
          var i = bh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], bh.set(a, i)), i.push(e));
        }
      }, Ci.flushLegacyContextWarning = function() {
        bh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Me(s) || "Component"), lE.add(s.type);
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
        Vd = [], Pd = [], $d = [], Yd = [], Id = [], Qd = [], bh = /* @__PURE__ */ new Map();
      };
    }
    var tg, ng, rg, ag, ig, uE = function(e, t) {
    };
    tg = !1, ng = !1, rg = {}, ag = {}, ig = {}, uE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Me(t) || "Component";
        ag[a] || (ag[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Tx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Wd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Ve || Kn) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ue) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Tx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Me(e) || "Component";
          rg[u] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), rg[u] = !0);
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
        var t = Me(e) || "Component";
        if (ig[t])
          return;
        ig[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function oE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function sE(e) {
      function t(_, z) {
        if (e) {
          var D = _.deletions;
          D === null ? (_.deletions = [z], _.flags |= it) : D.push(z);
        }
      }
      function a(_, z) {
        if (!e)
          return null;
        for (var D = z; D !== null; )
          t(_, D), D = D.sibling;
        return null;
      }
      function i(_, z) {
        for (var D = /* @__PURE__ */ new Map(), V = z; V !== null; )
          V.key !== null ? D.set(V.key, V) : D.set(V.index, V), V = V.sibling;
        return D;
      }
      function u(_, z) {
        var D = ms(_, z);
        return D.index = 0, D.sibling = null, D;
      }
      function s(_, z, D) {
        if (_.index = D, !e)
          return _.flags |= Wf, z;
        var V = _.alternate;
        if (V !== null) {
          var ne = V.index;
          return ne < z ? (_.flags |= bt, z) : ne;
        } else
          return _.flags |= bt, z;
      }
      function f(_) {
        return e && _.alternate === null && (_.flags |= bt), _;
      }
      function p(_, z, D, V) {
        if (z === null || z.tag !== Ue) {
          var ne = e0(D, _.mode, V);
          return ne.return = _, ne;
        } else {
          var X = u(z, D);
          return X.return = _, X;
        }
      }
      function v(_, z, D, V) {
        var ne = D.type;
        if (ne === wa)
          return y(_, z, D.props.children, V, D.key);
        if (z !== null && (z.elementType === ne || // Keep this check inline so it only runs on the false path:
        vC(z, D) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ne == "object" && ne !== null && ne.$$typeof === xe && oE(ne) === z.type)) {
          var X = u(z, D.props);
          return X.ref = Wd(_, z, D), X.return = _, X._debugSource = D._source, X._debugOwner = D._owner, X;
        }
        var we = JS(D, _.mode, V);
        return we.ref = Wd(_, z, D), we.return = _, we;
      }
      function m(_, z, D, V) {
        if (z === null || z.tag !== fe || z.stateNode.containerInfo !== D.containerInfo || z.stateNode.implementation !== D.implementation) {
          var ne = t0(D, _.mode, V);
          return ne.return = _, ne;
        } else {
          var X = u(z, D.children || []);
          return X.return = _, X;
        }
      }
      function y(_, z, D, V, ne) {
        if (z === null || z.tag !== st) {
          var X = ao(D, _.mode, V, ne);
          return X.return = _, X;
        } else {
          var we = u(z, D);
          return we.return = _, we;
        }
      }
      function x(_, z, D) {
        if (typeof z == "string" && z !== "" || typeof z == "number") {
          var V = e0("" + z, _.mode, D);
          return V.return = _, V;
        }
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case ri: {
              var ne = JS(z, _.mode, D);
              return ne.ref = Wd(_, null, z), ne.return = _, ne;
            }
            case Mr: {
              var X = t0(z, _.mode, D);
              return X.return = _, X;
            }
            case xe: {
              var we = z._payload, Oe = z._init;
              return x(_, Oe(we), D);
            }
          }
          if (mn(z) || Nr(z)) {
            var mt = ao(z, _.mode, D, null);
            return mt.return = _, mt;
          }
          kh(_, z);
        }
        return typeof z == "function" && Oh(_), null;
      }
      function T(_, z, D, V) {
        var ne = z !== null ? z.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number")
          return ne !== null ? null : p(_, z, "" + D, V);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case ri:
              return D.key === ne ? v(_, z, D, V) : null;
            case Mr:
              return D.key === ne ? m(_, z, D, V) : null;
            case xe: {
              var X = D._payload, we = D._init;
              return T(_, z, we(X), V);
            }
          }
          if (mn(D) || Nr(D))
            return ne !== null ? null : y(_, z, D, V, null);
          kh(_, D);
        }
        return typeof D == "function" && Oh(_), null;
      }
      function O(_, z, D, V, ne) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var X = _.get(D) || null;
          return p(z, X, "" + V, ne);
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case ri: {
              var we = _.get(V.key === null ? D : V.key) || null;
              return v(z, we, V, ne);
            }
            case Mr: {
              var Oe = _.get(V.key === null ? D : V.key) || null;
              return m(z, Oe, V, ne);
            }
            case xe:
              var mt = V._payload, nt = V._init;
              return O(_, z, D, nt(mt), ne);
          }
          if (mn(V) || Nr(V)) {
            var cn = _.get(D) || null;
            return y(z, cn, V, ne, null);
          }
          kh(z, V);
        }
        return typeof V == "function" && Oh(z), null;
      }
      function M(_, z, D) {
        {
          if (typeof _ != "object" || _ === null)
            return z;
          switch (_.$$typeof) {
            case ri:
            case Mr:
              uE(_, D);
              var V = _.key;
              if (typeof V != "string")
                break;
              if (z === null) {
                z = /* @__PURE__ */ new Set(), z.add(V);
                break;
              }
              if (!z.has(V)) {
                z.add(V);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", V);
              break;
            case xe:
              var ne = _._payload, X = _._init;
              M(X(ne), z, D);
              break;
          }
        }
        return z;
      }
      function N(_, z, D, V) {
        for (var ne = null, X = 0; X < D.length; X++) {
          var we = D[X];
          ne = M(we, ne, _);
        }
        for (var Oe = null, mt = null, nt = z, cn = 0, rt = 0, tn = null; nt !== null && rt < D.length; rt++) {
          nt.index > rt ? (tn = nt, nt = null) : tn = nt.sibling;
          var _r = T(_, nt, D[rt], V);
          if (_r === null) {
            nt === null && (nt = tn);
            break;
          }
          e && nt && _r.alternate === null && t(_, nt), cn = s(_r, cn, rt), mt === null ? Oe = _r : mt.sibling = _r, mt = _r, nt = tn;
        }
        if (rt === D.length) {
          if (a(_, nt), er()) {
            var ur = rt;
            rs(_, ur);
          }
          return Oe;
        }
        if (nt === null) {
          for (; rt < D.length; rt++) {
            var Ua = x(_, D[rt], V);
            Ua !== null && (cn = s(Ua, cn, rt), mt === null ? Oe = Ua : mt.sibling = Ua, mt = Ua);
          }
          if (er()) {
            var Yr = rt;
            rs(_, Yr);
          }
          return Oe;
        }
        for (var Ir = i(_, nt); rt < D.length; rt++) {
          var Dr = O(Ir, _, rt, D[rt], V);
          Dr !== null && (e && Dr.alternate !== null && Ir.delete(Dr.key === null ? rt : Dr.key), cn = s(Dr, cn, rt), mt === null ? Oe = Dr : mt.sibling = Dr, mt = Dr);
        }
        if (e && Ir.forEach(function(vf) {
          return t(_, vf);
        }), er()) {
          var ql = rt;
          rs(_, ql);
        }
        return Oe;
      }
      function q(_, z, D, V) {
        var ne = Nr(D);
        if (typeof ne != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          D[Symbol.toStringTag] === "Generator" && (ng || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ng = !0), D.entries === ne && (tg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tg = !0);
          var X = ne.call(D);
          if (X)
            for (var we = null, Oe = X.next(); !Oe.done; Oe = X.next()) {
              var mt = Oe.value;
              we = M(mt, we, _);
            }
        }
        var nt = ne.call(D);
        if (nt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var cn = null, rt = null, tn = z, _r = 0, ur = 0, Ua = null, Yr = nt.next(); tn !== null && !Yr.done; ur++, Yr = nt.next()) {
          tn.index > ur ? (Ua = tn, tn = null) : Ua = tn.sibling;
          var Ir = T(_, tn, Yr.value, V);
          if (Ir === null) {
            tn === null && (tn = Ua);
            break;
          }
          e && tn && Ir.alternate === null && t(_, tn), _r = s(Ir, _r, ur), rt === null ? cn = Ir : rt.sibling = Ir, rt = Ir, tn = Ua;
        }
        if (Yr.done) {
          if (a(_, tn), er()) {
            var Dr = ur;
            rs(_, Dr);
          }
          return cn;
        }
        if (tn === null) {
          for (; !Yr.done; ur++, Yr = nt.next()) {
            var ql = x(_, Yr.value, V);
            ql !== null && (_r = s(ql, _r, ur), rt === null ? cn = ql : rt.sibling = ql, rt = ql);
          }
          if (er()) {
            var vf = ur;
            rs(_, vf);
          }
          return cn;
        }
        for (var wp = i(_, tn); !Yr.done; ur++, Yr = nt.next()) {
          var ll = O(wp, _, ur, Yr.value, V);
          ll !== null && (e && ll.alternate !== null && wp.delete(ll.key === null ? ur : ll.key), _r = s(ll, _r, ur), rt === null ? cn = ll : rt.sibling = ll, rt = ll);
        }
        if (e && wp.forEach(function(GD) {
          return t(_, GD);
        }), er()) {
          var WD = ur;
          rs(_, WD);
        }
        return cn;
      }
      function Ee(_, z, D, V) {
        if (z !== null && z.tag === Ue) {
          a(_, z.sibling);
          var ne = u(z, D);
          return ne.return = _, ne;
        }
        a(_, z);
        var X = e0(D, _.mode, V);
        return X.return = _, X;
      }
      function he(_, z, D, V) {
        for (var ne = D.key, X = z; X !== null; ) {
          if (X.key === ne) {
            var we = D.type;
            if (we === wa) {
              if (X.tag === st) {
                a(_, X.sibling);
                var Oe = u(X, D.props.children);
                return Oe.return = _, Oe._debugSource = D._source, Oe._debugOwner = D._owner, Oe;
              }
            } else if (X.elementType === we || // Keep this check inline so it only runs on the false path:
            vC(X, D) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof we == "object" && we !== null && we.$$typeof === xe && oE(we) === X.type) {
              a(_, X.sibling);
              var mt = u(X, D.props);
              return mt.ref = Wd(_, X, D), mt.return = _, mt._debugSource = D._source, mt._debugOwner = D._owner, mt;
            }
            a(_, X);
            break;
          } else
            t(_, X);
          X = X.sibling;
        }
        if (D.type === wa) {
          var nt = ao(D.props.children, _.mode, V, D.key);
          return nt.return = _, nt;
        } else {
          var cn = JS(D, _.mode, V);
          return cn.ref = Wd(_, z, D), cn.return = _, cn;
        }
      }
      function Xe(_, z, D, V) {
        for (var ne = D.key, X = z; X !== null; ) {
          if (X.key === ne)
            if (X.tag === fe && X.stateNode.containerInfo === D.containerInfo && X.stateNode.implementation === D.implementation) {
              a(_, X.sibling);
              var we = u(X, D.children || []);
              return we.return = _, we;
            } else {
              a(_, X);
              break;
            }
          else
            t(_, X);
          X = X.sibling;
        }
        var Oe = t0(D, _.mode, V);
        return Oe.return = _, Oe;
      }
      function Qe(_, z, D, V) {
        var ne = typeof D == "object" && D !== null && D.type === wa && D.key === null;
        if (ne && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case ri:
              return f(he(_, z, D, V));
            case Mr:
              return f(Xe(_, z, D, V));
            case xe:
              var X = D._payload, we = D._init;
              return Qe(_, z, we(X), V);
          }
          if (mn(D))
            return N(_, z, D, V);
          if (Nr(D))
            return q(_, z, D, V);
          kh(_, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? f(Ee(_, z, "" + D, V)) : (typeof D == "function" && Oh(_), a(_, z));
      }
      return Qe;
    }
    var qc = sE(!0), cE = sE(!1);
    function Rx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ms(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ms(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function xx(e, t) {
      for (var a = e.child; a !== null; )
        fD(a, t), a = a.sibling;
    }
    var lg = Yu(null), ug;
    ug = {};
    var Lh = null, Xc = null, og = null, Mh = !1;
    function Nh() {
      Lh = null, Xc = null, og = null, Mh = !1;
    }
    function fE() {
      Mh = !0;
    }
    function dE() {
      Mh = !1;
    }
    function pE(e, t, a) {
      xr(lg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ug && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ug;
    }
    function sg(e, t) {
      var a = lg.current;
      Rr(lg, t), e._currentValue = a;
    }
    function cg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Ol(i.childLanes, t) ? u !== null && !Ol(u.childLanes, t) && (u.childLanes = Ne(u.childLanes, t)) : (i.childLanes = Ne(i.childLanes, t), u !== null && (u.childLanes = Ne(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function wx(e, t, a) {
      _x(e, t, a);
    }
    function _x(e, t, a) {
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
              i.lanes = Ne(i.lanes, a);
              var T = i.alternate;
              T !== null && (T.lanes = Ne(T.lanes, a)), cg(i.return, a, e), s.lanes = Ne(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Je)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Bt) {
          var O = i.return;
          if (O === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          O.lanes = Ne(O.lanes, a);
          var M = O.alternate;
          M !== null && (M.lanes = Ne(M.lanes, a)), cg(O, a, e), u = i.sibling;
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
      Lh = e, Xc = null, og = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Cr(a.lanes, t) && op(), a.firstContext = null);
      }
    }
    function Tn(e) {
      Mh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (og !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Xc === null) {
          if (Lh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Xc = a, Lh.dependencies = {
            lanes: A,
            firstContext: a
          };
        } else
          Xc = Xc.next = a;
      }
      return t;
    }
    var os = null;
    function fg(e) {
      os === null ? os = [e] : os.push(e);
    }
    function Dx() {
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
    function vE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, zh(e, i);
    }
    function bx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function kx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, zh(e, i);
    }
    function ha(e, t) {
      return zh(e, t);
    }
    var Ox = zh;
    function zh(e, t) {
      e.lanes = Ne(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ne(a.lanes, t)), a === null && (e.flags & (bt | ra)) !== Se && cC(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ne(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ne(a.childLanes, t) : (u.flags & (bt | ra)) !== Se && cC(e), i = u, u = u.return;
      if (i.tag === Z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var hE = 0, mE = 1, Uh = 2, dg = 3, Ah = !1, pg, Fh;
    pg = !1, Fh = null;
    function vg(e) {
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
    function yE(e, t) {
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
        tag: hE,
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
      if (Fh === u && !pg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), pg = !0), b_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Ox(e, a);
      } else
        return kx(e, u, t, a);
    }
    function Hh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (od(a)) {
          var s = u.lanes;
          s = vc(s, e.pendingLanes);
          var f = Ne(s, a);
          u.lanes = f, sd(e, f);
        }
      }
    }
    function hg(e, t) {
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
    function Lx(e, t, a, i, u, s) {
      switch (a.tag) {
        case mE: {
          var f = a.payload;
          if (typeof f == "function") {
            fE();
            var p = f.call(s, i, u);
            {
              if (e.mode & Ve) {
                Jt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Jt(!1);
                }
              }
              dE();
            }
            return p;
          }
          return f;
        }
        case dg:
          e.flags = e.flags & ~gn | _e;
        case hE: {
          var v = a.payload, m;
          if (typeof v == "function") {
            fE(), m = v.call(s, i, u);
            {
              if (e.mode & Ve) {
                Jt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Jt(!1);
                }
              }
              dE();
            }
          } else
            m = v;
          return m == null ? i : Be({}, i, m);
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
        var O = u.baseState, M = A, N = null, q = null, Ee = null, he = s;
        do {
          var Xe = he.lane, Qe = he.eventTime;
          if (Ol(i, Xe)) {
            if (Ee !== null) {
              var z = {
                eventTime: Qe,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: en,
                tag: he.tag,
                payload: he.payload,
                callback: he.callback,
                next: null
              };
              Ee = Ee.next = z;
            }
            O = Lx(e, u, he, O, t, a);
            var D = he.callback;
            if (D !== null && // If the update was already committed, we should not queue its
            // callback again.
            he.lane !== en) {
              e.flags |= $a;
              var V = u.effects;
              V === null ? u.effects = [he] : V.push(he);
            }
          } else {
            var _ = {
              eventTime: Qe,
              lane: Xe,
              tag: he.tag,
              payload: he.payload,
              callback: he.callback,
              next: null
            };
            Ee === null ? (q = Ee = _, N = O) : Ee = Ee.next = _, M = Ne(M, Xe);
          }
          if (he = he.next, he === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ne = p, X = ne.next;
            ne.next = null, he = X, u.lastBaseUpdate = ne, u.shared.pending = null;
          }
        } while (!0);
        Ee === null && (N = O), u.baseState = N, u.firstBaseUpdate = q, u.lastBaseUpdate = Ee;
        var we = u.shared.interleaved;
        if (we !== null) {
          var Oe = we;
          do
            M = Ne(M, Oe.lane), Oe = Oe.next;
          while (Oe !== we);
        } else
          s === null && (u.shared.lanes = A);
        Ep(M), e.lanes = M, e.memoizedState = O;
      }
      Fh = null;
    }
    function Mx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function gE() {
      Ah = !1;
    }
    function Bh() {
      return Ah;
    }
    function SE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Mx(f, a));
        }
    }
    var Gd = {}, qu = Yu(Gd), qd = Yu(Gd), Vh = Yu(Gd);
    function Ph(e) {
      if (e === Gd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function EE() {
      var e = Ph(Vh.current);
      return e;
    }
    function mg(e, t) {
      xr(Vh, t, e), xr(qd, e, e), xr(qu, Gd, e);
      var a = qT(t);
      Rr(qu, e), xr(qu, a, e);
    }
    function Zc(e) {
      Rr(qu, e), Rr(qd, e), Rr(Vh, e);
    }
    function yg() {
      var e = Ph(qu.current);
      return e;
    }
    function CE(e) {
      Ph(Vh.current);
      var t = Ph(qu.current), a = XT(t, e.type);
      t !== a && (xr(qd, e, e), xr(qu, a, e));
    }
    function gg(e) {
      qd.current === e && (Rr(qu, e), Rr(qd, e));
    }
    var Nx = 0, TE = 1, RE = 1, Xd = 2, Ti = Yu(Nx);
    function Sg(e, t) {
      return (e & t) !== 0;
    }
    function Jc(e) {
      return e & TE;
    }
    function Eg(e, t) {
      return e & TE | t;
    }
    function zx(e, t) {
      return e | t;
    }
    function Xu(e, t) {
      xr(Ti, t, e);
    }
    function ef(e) {
      Rr(Ti, e);
    }
    function Ux(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function $h(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ye) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || B0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === pt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & _e) !== Se;
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
    var ma = (
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
    ), Cg = [];
    function Tg() {
      for (var e = 0; e < Cg.length; e++) {
        var t = Cg[e];
        t._workInProgressVersionPrimary = null;
      }
      Cg.length = 0;
    }
    function Ax(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ee = b.ReactCurrentDispatcher, Kd = b.ReactCurrentBatchConfig, Rg, tf;
    Rg = /* @__PURE__ */ new Set();
    var ss = A, ht = null, Nn = null, zn = null, Yh = !1, Zd = !1, Jd = 0, Fx = 0, Hx = 25, U = null, Za = null, Ku = -1, xg = !1;
    function ot() {
      {
        var e = U;
        Za === null ? Za = [e] : Za.push(e);
      }
    }
    function W() {
      {
        var e = U;
        Za !== null && (Ku++, Za[Ku] !== e && jx(e));
      }
    }
    function nf(e) {
      e != null && !mn(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", U, typeof e);
    }
    function jx(e) {
      {
        var t = Me(ht);
        if (!Rg.has(t) && (Rg.add(t), Za !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ku; u++) {
            for (var s = Za[u], f = u === Ku ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function wg(e, t) {
      if (xg)
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
      ss = s, ht = t, Za = e !== null ? e._debugHookTypes : null, Ku = -1, xg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = A, e !== null && e.memoizedState !== null ? ee.current = IE : Za !== null ? ee.current = YE : ee.current = $E;
      var f = a(i, u);
      if (Zd) {
        var p = 0;
        do {
          if (Zd = !1, Jd = 0, p >= Hx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, xg = !1, Nn = null, zn = null, t.updateQueue = null, Ku = -1, ee.current = QE, f = a(i, u);
        } while (Zd);
      }
      ee.current = rm, t._debugHookTypes = Za;
      var v = Nn !== null && Nn.next !== null;
      if (ss = A, ht = null, Nn = null, zn = null, U = null, Za = null, Ku = -1, e !== null && (e.flags & bn) !== (t.flags & bn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ve) !== de && g("Internal React error: Expected static flag was missing. Please notify the React team."), Yh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function af() {
      var e = Jd !== 0;
      return Jd = 0, e;
    }
    function xE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & jr) !== de ? t.flags &= ~(Cl | hr | Mt | ze) : t.flags &= ~(Mt | ze), e.lanes = Bo(e.lanes, a);
    }
    function wE() {
      if (ee.current = rm, Yh) {
        for (var e = ht.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Yh = !1;
      }
      ss = A, ht = null, Nn = null, zn = null, Za = null, Ku = -1, U = null, HE = !1, Zd = !1, Jd = 0;
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
    function Ja() {
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
    function _E() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function _g(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Dg(e, t, a) {
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
      var f = s.dispatch = $x.bind(null, ht, s);
      return [i.memoizedState, f];
    }
    function bg(e, t, a) {
      var i = Ja(), u = i.queue;
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
          var q = N.lane;
          if (Ol(ss, q)) {
            if (M !== null) {
              var he = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: en,
                action: N.action,
                hasEagerState: N.hasEagerState,
                eagerState: N.eagerState,
                next: null
              };
              M = M.next = he;
            }
            if (N.hasEagerState)
              x = N.eagerState;
            else {
              var Xe = N.action;
              x = e(x, Xe);
            }
          } else {
            var Ee = {
              lane: q,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            };
            M === null ? (O = M = Ee, T = x) : M = M.next = Ee, ht.lanes = Ne(ht.lanes, q), Ep(q);
          }
          N = N.next;
        } while (N !== null && N !== y);
        M === null ? T = x : M.next = O, ie(x, i.memoizedState) || op(), i.memoizedState = x, i.baseState = T, i.baseQueue = M, u.lastRenderedState = x;
      }
      var Qe = u.interleaved;
      if (Qe !== null) {
        var _ = Qe;
        do {
          var z = _.lane;
          ht.lanes = Ne(ht.lanes, z), Ep(z), _ = _.next;
        } while (_ !== Qe);
      } else
        f === null && (u.lanes = A);
      var D = u.dispatch;
      return [i.memoizedState, D];
    }
    function kg(e, t, a) {
      var i = Ja(), u = i.queue;
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
    function ck(e, t, a) {
    }
    function fk(e, t, a) {
    }
    function Og(e, t, a) {
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
        jo(v, ss) || DE(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, qh(kE.bind(null, i, m, e), [e]), i.flags |= Mt, ep(Ln | tr, bE.bind(null, i, m, s, t), void 0, null), s;
    }
    function Ih(e, t, a) {
      var i = ht, u = Ja(), s = t();
      if (!tf) {
        var f = t();
        ie(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), tf = !0);
      }
      var p = u.memoizedState, v = !ie(p, s);
      v && (u.memoizedState = s, op());
      var m = u.queue;
      if (np(kE.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      zn !== null && zn.memoizedState.tag & Ln) {
        i.flags |= Mt, ep(Ln | tr, bE.bind(null, i, m, s, t), void 0, null);
        var y = Tm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        jo(y, ss) || DE(i, t, s);
      }
      return s;
    }
    function DE(e, t, a) {
      e.flags |= ko;
      var i = {
        getSnapshot: t,
        value: a
      }, u = ht.updateQueue;
      if (u === null)
        u = _E(), ht.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function bE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, OE(t) && LE(e);
    }
    function kE(e, t, a) {
      var i = function() {
        OE(t) && LE(e);
      };
      return a(i);
    }
    function OE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ie(a, i);
      } catch {
        return !0;
      }
    }
    function LE(e) {
      var t = ha(e, ye);
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
        lastRenderedReducer: _g,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Yx.bind(null, ht, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return bg(_g);
    }
    function Mg(e) {
      return kg(_g);
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
        s = _E(), ht.updateQueue = s, s.lastEffect = u.next = u;
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
    function Ng(e) {
      var t = el();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Wh(e) {
      var t = Ja();
      return t.memoizedState;
    }
    function tp(e, t, a, i) {
      var u = el(), s = i === void 0 ? null : i;
      ht.flags |= e, u.memoizedState = ep(Ln | t, a, void 0, s);
    }
    function Gh(e, t, a, i) {
      var u = Ja(), s = i === void 0 ? null : i, f = void 0;
      if (Nn !== null) {
        var p = Nn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (wg(s, v)) {
            u.memoizedState = ep(t, a, f, s);
            return;
          }
        }
      }
      ht.flags |= e, u.memoizedState = ep(Ln | t, a, f, s);
    }
    function qh(e, t) {
      return (ht.mode & jr) !== de ? tp(Cl | Mt | Vi, tr, e, t) : tp(Mt | Vi, tr, e, t);
    }
    function np(e, t) {
      return Gh(Mt, tr, e, t);
    }
    function zg(e, t) {
      return tp(ze, Ji, e, t);
    }
    function Xh(e, t) {
      return Gh(ze, Ji, e, t);
    }
    function Ug(e, t) {
      var a = ze;
      return a |= vr, (ht.mode & jr) !== de && (a |= hr), tp(a, Mn, e, t);
    }
    function Kh(e, t) {
      return Gh(ze, Mn, e, t);
    }
    function ME(e, t) {
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
    function Ag(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = ze;
      return u |= vr, (ht.mode & jr) !== de && (u |= hr), tp(u, Mn, ME.bind(null, t, e), i);
    }
    function Zh(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Gh(ze, Mn, ME.bind(null, t, e), i);
    }
    function Bx(e, t) {
    }
    var Jh = Bx;
    function Fg(e, t) {
      var a = el(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function em(e, t) {
      var a = Ja(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (wg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Hg(e, t) {
      var a = el(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function tm(e, t) {
      var a = Ja(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (wg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function jg(e) {
      var t = el();
      return t.memoizedState = e, e;
    }
    function NE(e) {
      var t = Ja(), a = Nn, i = a.memoizedState;
      return UE(t, i, e);
    }
    function zE(e) {
      var t = Ja();
      if (Nn === null)
        return t.memoizedState = e, e;
      var a = Nn.memoizedState;
      return UE(t, a, e);
    }
    function UE(e, t, a) {
      var i = !Lv(ss);
      if (i) {
        if (!ie(a, t)) {
          var u = zv();
          ht.lanes = Ne(ht.lanes, u), Ep(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, op()), e.memoizedState = a, a;
    }
    function Vx(e, t, a) {
      var i = sa();
      Pt(iy(i, hi)), e(!0);
      var u = Kd.transition;
      Kd.transition = {};
      var s = Kd.transition;
      Kd.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Pt(i), Kd.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Le("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Bg() {
      var e = Qh(!1), t = e[0], a = e[1], i = Vx.bind(null, a), u = el();
      return u.memoizedState = i, [t, i];
    }
    function AE() {
      var e = Lg(), t = e[0], a = Ja(), i = a.memoizedState;
      return [t, i];
    }
    function FE() {
      var e = Mg(), t = e[0], a = Ja(), i = a.memoizedState;
      return [t, i];
    }
    var HE = !1;
    function Px() {
      return HE;
    }
    function Vg() {
      var e = el(), t = Tm(), a = t.identifierPrefix, i;
      if (er()) {
        var u = ix();
        i = ":" + a + "R" + u;
        var s = Jd++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Fx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function nm() {
      var e = Ja(), t = e.memoizedState;
      return t;
    }
    function $x(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = no(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (jE(e))
        BE(t, u);
      else {
        var s = vE(e, t, u, i);
        if (s !== null) {
          var f = $r();
          Hn(s, e, i, f), VE(s, t, i);
        }
      }
      PE(e, i);
    }
    function Yx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = no(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (jE(e))
        BE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === A && (s === null || s.lanes === A)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ee.current, ee.current = Ri;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, ie(m, v)) {
                bx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ee.current = p;
            }
          }
        }
        var y = vE(e, t, u, i);
        if (y !== null) {
          var x = $r();
          Hn(y, e, i, x), VE(y, t, i);
        }
      }
      PE(e, i);
    }
    function jE(e) {
      var t = e.alternate;
      return e === ht || t !== null && t === ht;
    }
    function BE(e, t) {
      Zd = Yh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function VE(e, t, a) {
      if (od(a)) {
        var i = t.lanes;
        i = vc(i, e.pendingLanes);
        var u = Ne(i, a);
        t.lanes = u, sd(e, u);
      }
    }
    function PE(e, t, a) {
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
    }, $E = null, YE = null, IE = null, QE = null, tl = null, Ri = null, am = null;
    {
      var Pg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ke = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $E = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", ot(), nf(t), Fg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", ot(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", ot(), nf(t), qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", ot(), nf(a), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", ot(), nf(t), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ot(), nf(t), Ug(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ot(), nf(t);
          var a = ee.current;
          ee.current = tl;
          try {
            return Hg(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ot();
          var i = ee.current;
          ee.current = tl;
          try {
            return Dg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ot(), Ng(e);
        },
        useState: function(e) {
          U = "useState", ot();
          var t = ee.current;
          ee.current = tl;
          try {
            return Qh(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ot(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ot(), jg(e);
        },
        useTransition: function() {
          return U = "useTransition", ot(), Bg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", ot(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", ot(), Og(e, t, a);
        },
        useId: function() {
          return U = "useId", ot(), Vg();
        },
        unstable_isNewReconciler: Y
      }, YE = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", W(), Fg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", W(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", W(), qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", W(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", W(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", W(), Ug(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", W();
          var a = ee.current;
          ee.current = tl;
          try {
            return Hg(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", W();
          var i = ee.current;
          ee.current = tl;
          try {
            return Dg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", W(), Ng(e);
        },
        useState: function(e) {
          U = "useState", W();
          var t = ee.current;
          ee.current = tl;
          try {
            return Qh(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", W(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", W(), jg(e);
        },
        useTransition: function() {
          return U = "useTransition", W(), Bg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", W(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", W(), Og(e, t, a);
        },
        useId: function() {
          return U = "useId", W(), Vg();
        },
        unstable_isNewReconciler: Y
      }, IE = {
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
          return U = "useInsertionEffect", W(), Xh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", W(), Kh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", W();
          var a = ee.current;
          ee.current = Ri;
          try {
            return tm(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", W();
          var i = ee.current;
          ee.current = Ri;
          try {
            return bg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", W(), Wh();
        },
        useState: function(e) {
          U = "useState", W();
          var t = ee.current;
          ee.current = Ri;
          try {
            return Lg(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", W(), Jh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", W(), NE(e);
        },
        useTransition: function() {
          return U = "useTransition", W(), AE();
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
      }, QE = {
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
          return U = "useInsertionEffect", W(), Xh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", W(), Kh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", W();
          var a = ee.current;
          ee.current = am;
          try {
            return tm(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", W();
          var i = ee.current;
          ee.current = am;
          try {
            return kg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", W(), Wh();
        },
        useState: function(e) {
          U = "useState", W();
          var t = ee.current;
          ee.current = am;
          try {
            return Mg(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", W(), Jh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", W(), zE(e);
        },
        useTransition: function() {
          return U = "useTransition", W(), FE();
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
          return Pg(), Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", ke(), ot(), Fg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", ke(), ot(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", ke(), ot(), qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", ke(), ot(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", ke(), ot(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ke(), ot(), Ug(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ke(), ot();
          var a = ee.current;
          ee.current = tl;
          try {
            return Hg(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ke(), ot();
          var i = ee.current;
          ee.current = tl;
          try {
            return Dg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ke(), ot(), Ng(e);
        },
        useState: function(e) {
          U = "useState", ke(), ot();
          var t = ee.current;
          ee.current = tl;
          try {
            return Qh(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ke(), ot(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ke(), ot(), jg(e);
        },
        useTransition: function() {
          return U = "useTransition", ke(), ot(), Bg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", ke(), ot(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", ke(), ot(), Og(e, t, a);
        },
        useId: function() {
          return U = "useId", ke(), ot(), Vg();
        },
        unstable_isNewReconciler: Y
      }, Ri = {
        readContext: function(e) {
          return Pg(), Tn(e);
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
          return U = "useInsertionEffect", ke(), W(), Xh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ke(), W(), Kh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ke(), W();
          var a = ee.current;
          ee.current = Ri;
          try {
            return tm(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ke(), W();
          var i = ee.current;
          ee.current = Ri;
          try {
            return bg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ke(), W(), Wh();
        },
        useState: function(e) {
          U = "useState", ke(), W();
          var t = ee.current;
          ee.current = Ri;
          try {
            return Lg(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ke(), W(), Jh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ke(), W(), NE(e);
        },
        useTransition: function() {
          return U = "useTransition", ke(), W(), AE();
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
          return Pg(), Tn(e);
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
          return U = "useInsertionEffect", ke(), W(), Xh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ke(), W(), Kh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ke(), W();
          var a = ee.current;
          ee.current = Ri;
          try {
            return tm(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ke(), W();
          var i = ee.current;
          ee.current = Ri;
          try {
            return kg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ke(), W(), Wh();
        },
        useState: function(e) {
          U = "useState", ke(), W();
          var t = ee.current;
          ee.current = Ri;
          try {
            return Mg(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ke(), W(), Jh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ke(), W(), zE(e);
        },
        useTransition: function() {
          return U = "useTransition", ke(), W(), FE();
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
    var Zu = K.unstable_now, WE = 0, im = -1, rp = -1, lm = -1, $g = !1, um = !1;
    function GE() {
      return $g;
    }
    function Ix() {
      um = !0;
    }
    function Qx() {
      $g = !1, um = !1;
    }
    function Wx() {
      $g = um, um = !1;
    }
    function qE() {
      return WE;
    }
    function XE() {
      WE = Zu();
    }
    function Yg(e) {
      rp = Zu(), e.actualStartTime < 0 && (e.actualStartTime = Zu());
    }
    function KE(e) {
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
            case Z:
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
    function Ig(e) {
      if (lm >= 0) {
        var t = Zu() - lm;
        lm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
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
    function Qg() {
      lm = Zu();
    }
    function Wg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function xi(e, t) {
      if (e && e.defaultProps) {
        var a = Be({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Gg = {}, qg, Xg, Kg, Zg, Jg, ZE, sm, eS, tS, nS, ap;
    {
      qg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), ap = /* @__PURE__ */ new Set();
      var JE = /* @__PURE__ */ new Set();
      sm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          JE.has(a) || (JE.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, ZE = function(e, t) {
        if (t === void 0) {
          var a = dt(e) || "Component";
          Jg.has(a) || (Jg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Gg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Gg);
    }
    function rS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Ve) {
          Jt(!0);
          try {
            s = a(i, u);
          } finally {
            Jt(!1);
          }
        }
        ZE(t, s);
      }
      var f = s == null ? u : Be({}, u, s);
      if (e.memoizedState = f, e.lanes === A) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var aS = {
      isMounted: Fr,
      enqueueSetState: function(e, t, a) {
        var i = ta(e), u = $r(), s = no(i), f = $l(u, s);
        f.payload = t, a != null && (sm(a, "setState"), f.callback = a);
        var p = Gu(i, f, s);
        p !== null && (Hn(p, i, s, u), Hh(p, i, s)), No(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ta(e), u = $r(), s = no(i), f = $l(u, s);
        f.tag = mE, f.payload = t, a != null && (sm(a, "replaceState"), f.callback = a);
        var p = Gu(i, f, s);
        p !== null && (Hn(p, i, s, u), Hh(p, i, s)), No(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ta(e), i = $r(), u = no(a), s = $l(i, u);
        s.tag = Uh, t != null && (sm(t, "forceUpdate"), s.callback = t);
        var f = Gu(a, s, u);
        f !== null && (Hn(f, a, u, i), Hh(f, a, u)), Ks(a, u);
      }
    };
    function e1(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Ve) {
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
    function Gx(e, t, a) {
      var i = e.stateNode;
      {
        var u = dt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ve) === de && (ap.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ve) === de && (ap.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", dt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Kg.has(t) && (Kg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", dt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || mn(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function t1(e, t) {
      t.updater = aS, e.stateNode = t, fu(t, e), t._reactInternalInstance = Gg;
    }
    function n1(e, t, a) {
      var i = !1, u = Na, s = Na, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === j && f._context === void 0
        );
        if (!p && !nS.has(t)) {
          nS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === E ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", dt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Tn(f);
      else {
        u = Yc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? Ic(e, u) : Na;
      }
      var y = new t(a, s);
      if (e.mode & Ve) {
        Jt(!0);
        try {
          y = new t(a, s);
        } finally {
          Jt(!1);
        }
      }
      var x = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      t1(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var T = dt(t) || "Component";
          Xg.has(T) || (Xg.add(T), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", T, y.state === null ? "null" : "undefined", T));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var O = null, M = null, N = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? O = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (O = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? M = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (M = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? N = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (N = "UNSAFE_componentWillUpdate"), O !== null || M !== null || N !== null) {
            var q = dt(t) || "Component", Ee = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(q) || (Zg.add(q), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, q, Ee, O !== null ? `
  ` + O : "", M !== null ? `
  ` + M : "", N !== null ? `
  ` + N : ""));
          }
        }
      }
      return i && I0(e, u, s), y;
    }
    function qx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Me(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function r1(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Me(e) || "Component";
          qg.has(s) || (qg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      Gx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, vg(e);
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
          eS.has(p) || (eS.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Ve && Ci.recordLegacyContextWarning(e, u), Ci.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (rS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (qx(e, u), jh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = ze;
        m |= vr, (e.mode & jr) !== de && (m |= hr), e.flags |= m;
      }
    }
    function Xx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = Na;
      if (typeof p == "object" && p !== null)
        v = Tn(p);
      else {
        var m = Yc(e, t, !0);
        v = Ic(e, m);
      }
      var y = t.getDerivedStateFromProps, x = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && r1(e, u, a, v), gE();
      var T = e.memoizedState, O = u.state = T;
      if (jh(e, a, u, i), O = e.memoizedState, s === a && T === O && !Eh() && !Bh()) {
        if (typeof u.componentDidMount == "function") {
          var M = ze;
          M |= vr, (e.mode & jr) !== de && (M |= hr), e.flags |= M;
        }
        return !1;
      }
      typeof y == "function" && (rS(e, t, y, a), O = e.memoizedState);
      var N = Bh() || e1(e, t, s, a, T, O, v);
      if (N) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var q = ze;
          q |= vr, (e.mode & jr) !== de && (q |= hr), e.flags |= q;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ee = ze;
          Ee |= vr, (e.mode & jr) !== de && (Ee |= hr), e.flags |= Ee;
        }
        e.memoizedProps = a, e.memoizedState = O;
      }
      return u.props = a, u.state = O, u.context = v, N;
    }
    function Kx(e, t, a, i, u) {
      var s = t.stateNode;
      yE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : xi(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, x = Na;
      if (typeof y == "object" && y !== null)
        x = Tn(y);
      else {
        var T = Yc(t, a, !0);
        x = Ic(t, T);
      }
      var O = a.getDerivedStateFromProps, M = typeof O == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !M && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== x) && r1(t, s, i, x), gE();
      var N = t.memoizedState, q = s.state = N;
      if (jh(t, i, s, u), q = t.memoizedState, f === v && N === q && !Eh() && !Bh() && !Ce)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= ze), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= na), !1;
      typeof O == "function" && (rS(t, a, O, i), q = t.memoizedState);
      var Ee = Bh() || e1(t, a, p, i, N, q, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ce;
      return Ee ? (!M && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, q, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, q, x)), typeof s.componentDidUpdate == "function" && (t.flags |= ze), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= na)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= ze), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= na), t.memoizedProps = i, t.memoizedState = q), s.props = i, s.state = q, s.context = x, Ee;
    }
    function cs(e, t) {
      return {
        value: e,
        source: t,
        stack: Sf(t),
        digest: null
      };
    }
    function lS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Zx(e, t) {
      return !0;
    }
    function uS(e, t) {
      try {
        var a = Zx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ue)
            return;
          console.error(i);
        }
        var p = u ? Me(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === Z)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Me(e) || "Anonymous";
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
    var Jx = typeof WeakMap == "function" ? WeakMap : Map;
    function a1(e, t, a) {
      var i = $l(xt, a);
      i.tag = dg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        I_(u), uS(e, t);
      }, i;
    }
    function oS(e, t, a) {
      var i = $l(xt, a);
      i.tag = dg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          hC(e), uS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        hC(e), uS(e, t), typeof u != "function" && $_(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Cr(e.lanes, ye) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Me(e) || "Unknown"));
      }), i;
    }
    function i1(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Jx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Q_.bind(null, e, t, a);
        Hr && Cp(e, a), t.then(s, s);
      }
    }
    function ew(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function tw(e, t) {
      var a = e.tag;
      if ((e.mode & ve) === de && (a === ce || a === Pe || a === Ae)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function l1(e) {
      var t = e;
      do {
        if (t.tag === Ye && Ux(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function u1(e, t, a, i, u) {
      if ((e.mode & ve) === de) {
        if (e === t)
          e.flags |= gn;
        else {
          if (e.flags |= _e, a.flags |= Oo, a.flags &= ~(js | Ur), a.tag === ue) {
            var s = a.alternate;
            if (s === null)
              a.tag = jn;
            else {
              var f = $l(xt, ye);
              f.tag = Uh, Gu(a, f, ye);
            }
          }
          a.lanes = Ne(a.lanes, ye);
        }
        return e;
      }
      return e.flags |= gn, e.lanes = u, e;
    }
    function nw(e, t, a, i, u) {
      if (a.flags |= Ur, Hr && Cp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        tw(a), er() && a.mode & ve && Z0();
        var f = l1(t);
        if (f !== null) {
          f.flags &= ~Vt, u1(f, t, a, e, u), f.mode & ve && i1(e, s, u), ew(f, e, s);
          return;
        } else {
          if (!ud(u)) {
            i1(e, s, u), VS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (er() && a.mode & ve) {
        Z0();
        var v = l1(t);
        if (v !== null) {
          (v.flags & gn) === Se && (v.flags |= Vt), u1(v, t, a, e, u), eg(cs(i, a));
          return;
        }
      }
      i = cs(i, a), U_(i);
      var m = t;
      do {
        switch (m.tag) {
          case Z: {
            var y = i;
            m.flags |= gn;
            var x = wu(u);
            m.lanes = Ne(m.lanes, x);
            var T = a1(m, y, x);
            hg(m, T);
            return;
          }
          case ue:
            var O = i, M = m.type, N = m.stateNode;
            if ((m.flags & _e) === Se && (typeof M.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && !lC(N))) {
              m.flags |= gn;
              var q = wu(u);
              m.lanes = Ne(m.lanes, q);
              var Ee = oS(m, O, q);
              hg(m, Ee);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function rw() {
      return null;
    }
    var ip = b.ReactCurrentOwner, wi = !1, sS, lp, cS, fS, dS, fs, pS, cm, up;
    sS = {}, lp = {}, cS = {}, fS = {}, dS = {}, fs = !1, pS = {}, cm = {}, up = {};
    function Vr(e, t, a, i) {
      e === null ? t.child = cE(t, null, a, i) : t.child = qc(t, e.child, a, i);
    }
    function aw(e, t, a, i) {
      t.child = qc(t, e.child, null, i), t.child = qc(t, null, a, i);
    }
    function o1(e, t, a, i, u) {
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
        if (ip.current = t, ba(!0), v = rf(e, t, f, i, p, u), m = af(), t.mode & Ve) {
          Jt(!0);
          try {
            v = rf(e, t, f, i, p, u), m = af();
          } finally {
            Jt(!1);
          }
        }
        ba(!1);
      }
      return gr(), e !== null && !wi ? (xE(e, t, u), Yl(e, t, u)) : (er() && m && Gy(t), t.flags |= ji, Vr(e, t, v, u), t.child);
    }
    function s1(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (sD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = pf(s), t.tag = Ae, t.type = f, mS(t, s), c1(e, t, f, i, u);
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
        var m = ZS(a.type, null, i, t, t.mode, u);
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
      var T = e.child, O = TS(e, u);
      if (!O) {
        var M = T.memoizedProps, N = a.compare;
        if (N = N !== null ? N : Re, N(M, i) && e.ref === t.ref)
          return Yl(e, t, u);
      }
      t.flags |= ji;
      var q = ms(T, i);
      return q.ref = t.ref, q.return = t, t.child = q, q;
    }
    function c1(e, t, a, i, u) {
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
          if (wi = !1, t.pendingProps = i = y, TS(e, u))
            (e.flags & Oo) !== Se && (wi = !0);
          else
            return t.lanes = e.lanes, Yl(e, t, u);
      }
      return vS(e, t, a, i, u);
    }
    function f1(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || te)
        if ((t.mode & ve) === de) {
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
            v = Ne(m, a);
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
        s !== null ? (O = Ne(s.baseLanes, a), t.memoizedState = null) : O = a, Rm(t, O);
      }
      return Vr(e, t, u, a), t.child;
    }
    function iw(e, t, a) {
      var i = t.pendingProps;
      return Vr(e, t, i, a), t.child;
    }
    function lw(e, t, a) {
      var i = t.pendingProps.children;
      return Vr(e, t, i, a), t.child;
    }
    function uw(e, t, a) {
      {
        t.flags |= ze;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Vr(e, t, s, a), t.child;
    }
    function d1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= pr, t.flags |= Gf);
    }
    function vS(e, t, a, i, u) {
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
        if (ip.current = t, ba(!0), v = rf(e, t, a, i, f, u), m = af(), t.mode & Ve) {
          Jt(!0);
          try {
            v = rf(e, t, a, i, f, u), m = af();
          } finally {
            Jt(!1);
          }
        }
        ba(!1);
      }
      return gr(), e !== null && !wi ? (xE(e, t, u), Yl(e, t, u)) : (er() && m && Gy(t), t.flags |= ji, Vr(e, t, v, u), t.child);
    }
    function p1(e, t, a, i, u) {
      {
        switch (xD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= _e, t.flags |= gn;
            var m = new Error("Simulated error coming from DevTools"), y = wu(u);
            t.lanes = Ne(t.lanes, y);
            var x = oS(t, cs(m, t), y);
            hg(t, x);
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
      M === null ? (dm(e, t), n1(t, a, i), iS(t, a, i, u), N = !0) : e === null ? N = Xx(t, a, i, u) : N = Kx(e, t, a, i, u);
      var q = hS(e, t, a, N, O, u);
      {
        var Ee = t.stateNode;
        N && Ee.props !== i && (fs || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Me(t) || "a component"), fs = !0);
      }
      return q;
    }
    function hS(e, t, a, i, u, s) {
      d1(e, t);
      var f = (t.flags & _e) !== Se;
      if (!i && !f)
        return u && G0(t, a, !1), Yl(e, t, s);
      var p = t.stateNode;
      ip.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, KE();
      else {
        hu(t);
        {
          if (ba(!0), v = p.render(), t.mode & Ve) {
            Jt(!0);
            try {
              p.render();
            } finally {
              Jt(!1);
            }
          }
          ba(!1);
        }
        gr();
      }
      return t.flags |= ji, e !== null && f ? aw(e, t, v, s) : Vr(e, t, v, s), t.memoizedState = p.state, u && G0(t, a, !0), t.child;
    }
    function v1(e) {
      var t = e.stateNode;
      t.pendingContext ? Q0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Q0(e, t.context, !1), mg(e, t.containerInfo);
    }
    function ow(e, t, a) {
      if (v1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      yE(e, t), jh(t, i, null, a);
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
        if (m.baseState = v, t.memoizedState = v, t.flags & Vt) {
          var y = cs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return h1(e, t, p, a, y);
        } else if (p !== s) {
          var x = cs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return h1(e, t, p, a, x);
        } else {
          fx(t);
          var T = cE(t, null, p, a);
          t.child = T;
          for (var O = T; O; )
            O.flags = O.flags & ~bt | ra, O = O.sibling;
        }
      } else {
        if (Gc(), p === s)
          return Yl(e, t, a);
        Vr(e, t, p, a);
      }
      return t.child;
    }
    function h1(e, t, a, i, u) {
      return Gc(), eg(u), t.flags |= Vt, Vr(e, t, a, i), t.child;
    }
    function sw(e, t, a) {
      CE(t), e === null && Jy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = zy(i, u);
      return p ? f = null : s !== null && zy(i, s) && (t.flags |= ut), d1(e, t), Vr(e, t, f, a), t.child;
    }
    function cw(e, t) {
      return e === null && Jy(t), null;
    }
    function fw(e, t, a, i) {
      dm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = cD(v), y = xi(v, u), x;
      switch (m) {
        case ce:
          return mS(t, v), t.type = v = pf(v), x = vS(null, t, v, y, i), x;
        case ue:
          return t.type = v = QS(v), x = p1(null, t, v, y, i), x;
        case Pe:
          return t.type = v = WS(v), x = o1(null, t, v, y, i), x;
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
          return x = s1(
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
    function dw(e, t, a, i, u) {
      dm(e, t), t.tag = ue;
      var s;
      return Zi(a) ? (s = !0, Th(t)) : s = !1, Kc(t, u), n1(t, a, i), iS(t, a, i, u), hS(null, t, a, !0, s, u);
    }
    function pw(e, t, a, i) {
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
          sS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), sS[m] = !0);
        }
        t.mode & Ve && Ci.recordLegacyContextWarning(t, null), ba(!0), ip.current = t, p = rf(null, t, a, u, s, i), v = af(), ba(!1);
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
        return Zi(a) ? (T = !0, Th(t)) : T = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, vg(t), t1(t, p), iS(t, a, u, i), hS(null, t, a, !0, T, i);
      } else {
        if (t.tag = ce, t.mode & Ve) {
          Jt(!0);
          try {
            p = rf(null, t, a, u, s, i), v = af();
          } finally {
            Jt(!1);
          }
        }
        return er() && v && Gy(t), Vr(null, t, p, i), mS(t, a), t.child;
      }
    }
    function mS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Jr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), dS[u] || (dS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = dt(t) || "Unknown";
          up[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), up[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = dt(t) || "Unknown";
          fS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), fS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = dt(t) || "Unknown";
          cS[v] || (g("%s: Function components do not support contextType.", v), cS[v] = !0);
        }
      }
    }
    var yS = {
      dehydrated: null,
      treeContext: null,
      retryLane: en
    };
    function gS(e) {
      return {
        baseLanes: e,
        cachePool: rw(),
        transitions: null
      };
    }
    function vw(e, t) {
      var a = null;
      return {
        baseLanes: Ne(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function hw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Sg(e, Xd);
    }
    function mw(e, t) {
      return Bo(e.childLanes, t);
    }
    function m1(e, t, a) {
      var i = t.pendingProps;
      wD(t) && (t.flags |= _e);
      var u = Ti.current, s = !1, f = (t.flags & _e) !== Se;
      if (f || hw(u, e) ? (s = !0, t.flags &= ~_e) : (e === null || e.memoizedState !== null) && (u = zx(u, RE)), u = Jc(u), Xu(t, u), e === null) {
        Jy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Cw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var x = yw(t, m, y, a), T = t.child;
          return T.memoizedState = gS(a), t.memoizedState = yS, x;
        } else
          return SS(t, m);
      } else {
        var O = e.memoizedState;
        if (O !== null) {
          var M = O.dehydrated;
          if (M !== null)
            return Tw(e, t, f, i, M, O, a);
        }
        if (s) {
          var N = i.fallback, q = i.children, Ee = Sw(e, t, q, N, a), he = t.child, Xe = e.child.memoizedState;
          return he.memoizedState = Xe === null ? gS(a) : vw(Xe, a), he.childLanes = mw(e, a), t.memoizedState = yS, Ee;
        } else {
          var Qe = i.children, _ = gw(e, t, Qe, a);
          return t.memoizedState = null, _;
        }
      }
    }
    function SS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = ES(u, i);
      return s.return = e, e.child = s, s;
    }
    function yw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ve) === de && s !== null ? (p = s, p.childLanes = A, p.pendingProps = f, e.mode & De && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = ao(a, u, i, null)) : (p = ES(f, u), v = ao(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return yC(e, t, A, null);
    }
    function y1(e, t) {
      return ms(e, t);
    }
    function gw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = y1(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ve) === de && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= it) : p.push(s);
      }
      return t.child = f, f;
    }
    function Sw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ve) === de && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = A, m.pendingProps = v, t.mode & De && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = y1(f, v), m.subtreeFlags = f.subtreeFlags & bn;
      var x;
      return p !== null ? x = ms(p, i) : (x = ao(i, s, u, null), x.flags |= bt), x.return = t, m.return = t, m.sibling = x, t.child = m, x;
    }
    function fm(e, t, a, i) {
      i !== null && eg(i), qc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = SS(t, s);
      return f.flags |= bt, t.memoizedState = null, f;
    }
    function Ew(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = ao(i, s, u, null);
      return v.flags |= bt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ve) !== de && qc(t, e.child, null, u), v;
    }
    function Cw(e, t, a) {
      return (e.mode & ve) === de ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ye) : Hy(t) ? e.lanes = vi : e.lanes = Wn, null;
    }
    function Tw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Vt) {
          t.flags &= ~Vt;
          var _ = lS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return fm(e, t, f, _);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= _e, null;
          var z = i.children, D = i.fallback, V = Ew(e, t, z, D, f), ne = t.child;
          return ne.memoizedState = gS(f), t.memoizedState = yS, V;
        }
      else {
        if (sx(), (t.mode & ve) === de)
          return fm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, m;
          {
            var y = _R(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var T = lS(x, p, m);
          return fm(e, t, f, T);
        }
        var O = Cr(f, e.childLanes);
        if (wi || O) {
          var M = Tm();
          if (M !== null) {
            var N = Fv(M, f);
            if (N !== en && N !== s.retryLane) {
              s.retryLane = N;
              var q = xt;
              ha(e, N), Hn(M, e, N, q);
            }
          }
          VS();
          var Ee = lS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return fm(e, t, f, Ee);
        } else if (B0(u)) {
          t.flags |= _e, t.child = e.child;
          var he = W_.bind(null, e);
          return DR(u, he), null;
        } else {
          dx(t, u, s.treeContext);
          var Xe = i.children, Qe = SS(t, Xe);
          return Qe.flags |= ra, Qe;
        }
      }
    }
    function g1(e, t, a) {
      e.lanes = Ne(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ne(i.lanes, t)), cg(e.return, t, a);
    }
    function Rw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ye) {
          var u = i.memoizedState;
          u !== null && g1(i, a, e);
        } else if (i.tag === pt)
          g1(i, a, e);
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
    function xw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && $h(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function ww(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !pS[e])
        if (pS[e] = !0, typeof e == "string")
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
    function _w(e, t) {
      e !== void 0 && !cm[e] && (e !== "collapsed" && e !== "hidden" ? (cm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (cm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function S1(e, t) {
      {
        var a = mn(e), i = !a && typeof Nr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Dw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (mn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!S1(e[a], a))
              return;
        } else {
          var i = Nr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!S1(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function CS(e, t, a, i, u) {
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
    function E1(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      ww(u), _w(s, u), Dw(f, u), Vr(e, t, f, a);
      var p = Ti.current, v = Sg(p, Xd);
      if (v)
        p = Eg(p, Xd), t.flags |= _e;
      else {
        var m = e !== null && (e.flags & _e) !== Se;
        m && Rw(t, t.child, a), p = Jc(p);
      }
      if (Xu(t, p), (t.mode & ve) === de)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = xw(t.child), x;
            y === null ? (x = t.child, t.child = null) : (x = y.sibling, y.sibling = null), CS(
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
            CS(
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
            CS(
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
    function bw(e, t, a) {
      mg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = qc(t, null, i, a) : Vr(e, t, i, a), t.child;
    }
    var C1 = !1;
    function kw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || C1 || (C1 = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Si(v, s, "prop", "Context.Provider");
      }
      if (pE(t, u, p), f !== null) {
        var m = f.value;
        if (ie(m, p)) {
          if (f.children === s.children && !Eh())
            return Yl(e, t, a);
        } else
          wx(t, u, a);
      }
      var y = s.children;
      return Vr(e, t, y, a), t.child;
    }
    var T1 = !1;
    function Ow(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (T1 || (T1 = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Kc(t, a);
      var f = Tn(i);
      hu(t);
      var p;
      return ip.current = t, ba(!0), p = s(f), ba(!1), gr(), t.flags |= ji, Vr(e, t, p, a), t.child;
    }
    function op() {
      wi = !0;
    }
    function dm(e, t) {
      (t.mode & ve) === de && e !== null && (e.alternate = null, t.alternate = null, t.flags |= bt);
    }
    function Yl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), KE(), Ep(t.lanes), Cr(a, t.childLanes) ? (Rx(e, t), t.child) : null;
    }
    function Lw(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= it) : s.push(e), a.flags |= bt, a;
      }
    }
    function TS(e, t) {
      var a = e.lanes;
      return !!Cr(a, t);
    }
    function Mw(e, t, a) {
      switch (t.tag) {
        case Z:
          v1(t), t.stateNode, Gc();
          break;
        case oe:
          CE(t);
          break;
        case ue: {
          var i = t.type;
          Zi(i) && Th(t);
          break;
        }
        case fe:
          mg(t, t.stateNode.containerInfo);
          break;
        case Je: {
          var u = t.memoizedProps.value, s = t.type._context;
          pE(t, s, u);
          break;
        }
        case gt:
          {
            var f = Cr(a, t.childLanes);
            f && (t.flags |= ze);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ye: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Xu(t, Jc(Ti.current)), t.flags |= _e, null;
            var m = t.child, y = m.childLanes;
            if (Cr(a, y))
              return m1(e, t, a);
            Xu(t, Jc(Ti.current));
            var x = Yl(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            Xu(t, Jc(Ti.current));
          break;
        }
        case pt: {
          var T = (e.flags & _e) !== Se, O = Cr(a, t.childLanes);
          if (T) {
            if (O)
              return E1(e, t, a);
            t.flags |= _e;
          }
          var M = t.memoizedState;
          if (M !== null && (M.rendering = null, M.tail = null, M.lastEffect = null), Xu(t, Ti.current), O)
            break;
          return null;
        }
        case be:
        case We:
          return t.lanes = A, f1(e, t, a);
      }
      return Yl(e, t, a);
    }
    function R1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Lw(e, t, ZS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Eh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          wi = !0;
        else {
          var s = TS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & _e) === Se)
            return wi = !1, Mw(e, t, a);
          (e.flags & Oo) !== Se ? wi = !0 : wi = !1;
        }
      } else if (wi = !1, er() && rx(t)) {
        var f = t.index, p = ax();
        K0(t, p, f);
      }
      switch (t.lanes = A, t.tag) {
        case Ze:
          return pw(e, t, t.type, a);
        case Rn: {
          var v = t.elementType;
          return fw(e, t, v, a);
        }
        case ce: {
          var m = t.type, y = t.pendingProps, x = t.elementType === m ? y : xi(m, y);
          return vS(e, t, m, x, a);
        }
        case ue: {
          var T = t.type, O = t.pendingProps, M = t.elementType === T ? O : xi(T, O);
          return p1(e, t, T, M, a);
        }
        case Z:
          return ow(e, t, a);
        case oe:
          return sw(e, t, a);
        case Ue:
          return cw(e, t);
        case Ye:
          return m1(e, t, a);
        case fe:
          return bw(e, t, a);
        case Pe: {
          var N = t.type, q = t.pendingProps, Ee = t.elementType === N ? q : xi(N, q);
          return o1(e, t, N, Ee, a);
        }
        case st:
          return iw(e, t, a);
        case yt:
          return lw(e, t, a);
        case gt:
          return uw(e, t, a);
        case Je:
          return kw(e, t, a);
        case fn:
          return Ow(e, t, a);
        case wt: {
          var he = t.type, Xe = t.pendingProps, Qe = xi(he, Xe);
          if (t.type !== t.elementType) {
            var _ = he.propTypes;
            _ && Si(
              _,
              Qe,
              // Resolved for outer only
              "prop",
              dt(he)
            );
          }
          return Qe = xi(he.type, Qe), s1(e, t, he, Qe, a);
        }
        case Ae:
          return c1(e, t, t.type, t.pendingProps, a);
        case jn: {
          var z = t.type, D = t.pendingProps, V = t.elementType === z ? D : xi(z, D);
          return dw(e, t, z, V, a);
        }
        case pt:
          return E1(e, t, a);
        case xn:
          break;
        case be:
          return f1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function lf(e) {
      e.flags |= ze;
    }
    function x1(e) {
      e.flags |= pr, e.flags |= Gf;
    }
    var w1, RS, _1, D1;
    w1 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === oe || u.tag === Ue)
          eR(e, u.stateNode);
        else if (u.tag !== fe) {
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
    }, RS = function(e, t) {
    }, _1 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = yg(), v = nR(f, a, s, i, u, p);
        t.updateQueue = v, v && lf(t);
      }
    }, D1 = function(e, t, a, i) {
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
        if ((e.mode & De) !== de) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Ne(a, Ne(m.lanes, m.childLanes)), i |= m.subtreeFlags & bn, i |= m.flags & bn, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = Ne(a, Ne(y.lanes, y.childLanes)), i |= y.subtreeFlags & bn, i |= y.flags & bn, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & De) !== de) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ne(a, Ne(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ne(a, Ne(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Nw(e, t, a) {
      if (yx() && (t.mode & ve) !== de && (t.flags & _e) === Se)
        return aE(t), Gc(), t.flags |= Vt | Ur | gn, !1;
      var i = Dh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (hx(t), nr(t), (t.mode & De) !== de) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Gc(), (t.flags & _e) === Se && (t.memoizedState = null), t.flags |= ze, nr(t), (t.mode & De) !== de) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return iE(), !0;
    }
    function b1(e, t, a) {
      var i = t.pendingProps;
      switch (qy(t), t.tag) {
        case Ze:
        case Rn:
        case Ae:
        case ce:
        case Pe:
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
        case Z: {
          var s = t.stateNode;
          if (Zc(t), Iy(t), Tg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Dh(t);
            if (f)
              lf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Vt) !== Se) && (t.flags |= na, iE());
            }
          }
          return RS(e, t), nr(t), null;
        }
        case oe: {
          gg(t);
          var v = EE(), m = t.type;
          if (e !== null && t.stateNode != null)
            _1(e, t, m, i, v), e.ref !== t.ref && x1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return nr(t), null;
            }
            var y = yg(), x = Dh(t);
            if (x)
              px(t, v, y) && lf(t);
            else {
              var T = JT(m, i, v, y, t);
              w1(T, t, !1, !1), t.stateNode = T, tR(T, m, i, v) && lf(t);
            }
            t.ref !== null && x1(t);
          }
          return nr(t), null;
        }
        case Ue: {
          var O = i;
          if (e && t.stateNode != null) {
            var M = e.memoizedProps;
            D1(e, t, M, O);
          } else {
            if (typeof O != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var N = EE(), q = yg(), Ee = Dh(t);
            Ee ? vx(t) && lf(t) : t.stateNode = rR(O, N, q, t);
          }
          return nr(t), null;
        }
        case Ye: {
          ef(t);
          var he = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Xe = Nw(e, t, he);
            if (!Xe)
              return t.flags & gn ? t : null;
          }
          if ((t.flags & _e) !== Se)
            return t.lanes = a, (t.mode & De) !== de && Wg(t), t;
          var Qe = he !== null, _ = e !== null && e.memoizedState !== null;
          if (Qe !== _ && Qe) {
            var z = t.child;
            if (z.flags |= Bi, (t.mode & ve) !== de) {
              var D = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !et);
              D || Sg(Ti.current, RE) ? z_() : VS();
            }
          }
          var V = t.updateQueue;
          if (V !== null && (t.flags |= ze), nr(t), (t.mode & De) !== de && Qe) {
            var ne = t.child;
            ne !== null && (t.treeBaseDuration -= ne.treeBaseDuration);
          }
          return null;
        }
        case fe:
          return Zc(t), RS(e, t), e === null && XR(t.stateNode.containerInfo), nr(t), null;
        case Je:
          var X = t.type._context;
          return sg(X, t), nr(t), null;
        case jn: {
          var we = t.type;
          return Zi(we) && Ch(t), nr(t), null;
        }
        case pt: {
          ef(t);
          var Oe = t.memoizedState;
          if (Oe === null)
            return nr(t), null;
          var mt = (t.flags & _e) !== Se, nt = Oe.rendering;
          if (nt === null)
            if (mt)
              sp(Oe, !1);
            else {
              var cn = A_() && (e === null || (e.flags & _e) === Se);
              if (!cn)
                for (var rt = t.child; rt !== null; ) {
                  var tn = $h(rt);
                  if (tn !== null) {
                    mt = !0, t.flags |= _e, sp(Oe, !1);
                    var _r = tn.updateQueue;
                    return _r !== null && (t.updateQueue = _r, t.flags |= ze), t.subtreeFlags = Se, xx(t, a), Xu(t, Eg(Ti.current, Xd)), t.child;
                  }
                  rt = rt.sibling;
                }
              Oe.tail !== null && Ft() > q1() && (t.flags |= _e, mt = !0, sp(Oe, !1), t.lanes = _v);
            }
          else {
            if (!mt) {
              var ur = $h(nt);
              if (ur !== null) {
                t.flags |= _e, mt = !0;
                var Ua = ur.updateQueue;
                if (Ua !== null && (t.updateQueue = Ua, t.flags |= ze), sp(Oe, !0), Oe.tail === null && Oe.tailMode === "hidden" && !nt.alternate && !er())
                  return nr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Ft() * 2 - Oe.renderingStartTime > q1() && a !== Wn && (t.flags |= _e, mt = !0, sp(Oe, !1), t.lanes = _v);
            }
            if (Oe.isBackwards)
              nt.sibling = t.child, t.child = nt;
            else {
              var Yr = Oe.last;
              Yr !== null ? Yr.sibling = nt : t.child = nt, Oe.last = nt;
            }
          }
          if (Oe.tail !== null) {
            var Ir = Oe.tail;
            Oe.rendering = Ir, Oe.tail = Ir.sibling, Oe.renderingStartTime = Ft(), Ir.sibling = null;
            var Dr = Ti.current;
            return mt ? Dr = Eg(Dr, Xd) : Dr = Jc(Dr), Xu(t, Dr), Ir;
          }
          return nr(t), null;
        }
        case xn:
          break;
        case be:
        case We: {
          BS(t);
          var ql = t.memoizedState, vf = ql !== null;
          if (e !== null) {
            var wp = e.memoizedState, ll = wp !== null;
            ll !== vf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !te && (t.flags |= Bi);
          }
          return !vf || (t.mode & ve) === de ? nr(t) : Cr(il, Wn) && (nr(t), t.subtreeFlags & (bt | ze) && (t.flags |= Bi)), null;
        }
        case dn:
          return null;
        case _t:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function zw(e, t, a) {
      switch (qy(t), t.tag) {
        case ue: {
          var i = t.type;
          Zi(i) && Ch(t);
          var u = t.flags;
          return u & gn ? (t.flags = u & ~gn | _e, (t.mode & De) !== de && Wg(t), t) : null;
        }
        case Z: {
          t.stateNode, Zc(t), Iy(t), Tg();
          var s = t.flags;
          return (s & gn) !== Se && (s & _e) === Se ? (t.flags = s & ~gn | _e, t) : null;
        }
        case oe:
          return gg(t), null;
        case Ye: {
          ef(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Gc();
          }
          var p = t.flags;
          return p & gn ? (t.flags = p & ~gn | _e, (t.mode & De) !== de && Wg(t), t) : null;
        }
        case pt:
          return ef(t), null;
        case fe:
          return Zc(t), null;
        case Je:
          var v = t.type._context;
          return sg(v, t), null;
        case be:
        case We:
          return BS(t), null;
        case dn:
          return null;
        default:
          return null;
      }
    }
    function k1(e, t, a) {
      switch (qy(t), t.tag) {
        case ue: {
          var i = t.type.childContextTypes;
          i != null && Ch(t);
          break;
        }
        case Z: {
          t.stateNode, Zc(t), Iy(t), Tg();
          break;
        }
        case oe: {
          gg(t);
          break;
        }
        case fe:
          Zc(t);
          break;
        case Ye:
          ef(t);
          break;
        case pt:
          ef(t);
          break;
        case Je:
          var u = t.type._context;
          sg(u, t);
          break;
        case be:
        case We:
          BS(t);
          break;
      }
    }
    var O1 = null;
    O1 = /* @__PURE__ */ new Set();
    var pm = !1, rr = !1, Uw = typeof WeakSet == "function" ? WeakSet : Set, le = null, uf = null, of = null;
    function Aw(e) {
      El(null, function() {
        throw e;
      }), Qf();
    }
    var Fw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & De)
        try {
          rl(), t.componentWillUnmount();
        } finally {
          nl(e);
        }
      else
        t.componentWillUnmount();
    };
    function L1(e, t) {
      try {
        Ju(Mn, e);
      } catch (a) {
        Lt(e, t, a);
      }
    }
    function xS(e, t, a) {
      try {
        Fw(e, a);
      } catch (i) {
        Lt(e, t, i);
      }
    }
    function Hw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Lt(e, t, i);
      }
    }
    function M1(e, t) {
      try {
        z1(e);
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
            if (nn && Gr && e.mode & De)
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
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Me(e));
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
    var N1 = !1;
    function jw(e, t) {
      KT(e.containerInfo), le = t, Bw();
      var a = N1;
      return N1 = !1, a;
    }
    function Bw() {
      for (; le !== null; ) {
        var e = le, t = e.child;
        (e.subtreeFlags & du) !== Se && t !== null ? (t.return = e, le = t) : Vw();
      }
    }
    function Vw() {
      for (; le !== null; ) {
        var e = le;
        vt(e);
        try {
          Pw(e);
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
    function Pw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & na) !== Se) {
        switch (vt(e), e.tag) {
          case ce:
          case Pe:
          case Ae:
            break;
          case ue: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !fs && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Me(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : xi(e.type, i), u);
              {
                var p = O1;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Me(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case Z: {
            {
              var v = e.stateNode;
              TR(v.containerInfo);
            }
            break;
          }
          case oe:
          case Ue:
          case fe:
          case jn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        rn();
      }
    }
    function _i(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & tr) !== ma ? Rv(t) : (e & Mn) !== ma && Ma(t), (e & Ji) !== ma && Tp(!0), vm(t, a, p), (e & Ji) !== ma && Tp(!1), (e & tr) !== ma ? Gs() : (e & Mn) !== ma && mu());
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
            (e & tr) !== ma ? $i(t) : (e & Mn) !== ma && xv(t);
            var f = s.create;
            (e & Ji) !== ma && Tp(!0), s.destroy = f(), (e & Ji) !== ma && Tp(!1), (e & tr) !== ma ? Ws() : (e & Mn) !== ma && Lo();
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
    function $w(e, t) {
      if ((t.flags & ze) !== Se)
        switch (t.tag) {
          case gt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = qE(), p = t.alternate === null ? "mount" : "update";
            GE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case Z:
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
    function Yw(e, t, a, i) {
      if ((a.flags & In) !== Se)
        switch (a.tag) {
          case ce:
          case Pe:
          case Ae: {
            if (!rr)
              if (a.mode & De)
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
            if (a.flags & ze && !rr)
              if (t === null)
                if (a.type === a.elementType && !fs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Me(a) || "instance")), a.mode & De)
                  try {
                    rl(), u.componentDidMount();
                  } finally {
                    nl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : xi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !fs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Me(a) || "instance")), a.mode & De)
                  try {
                    rl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    nl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !fs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Me(a) || "instance")), SE(a, p, u));
            break;
          }
          case Z: {
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
              SE(a, v, m);
            }
            break;
          }
          case oe: {
            var y = a.stateNode;
            if (t === null && a.flags & ze) {
              var x = a.type, T = a.memoizedProps;
              oR(y, x, T);
            }
            break;
          }
          case Ue:
            break;
          case fe:
            break;
          case gt: {
            {
              var O = a.memoizedProps, M = O.onCommit, N = O.onRender, q = a.stateNode.effectDuration, Ee = qE(), he = t === null ? "mount" : "update";
              GE() && (he = "nested-update"), typeof N == "function" && N(a.memoizedProps.id, he, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ee);
              {
                typeof M == "function" && M(a.memoizedProps.id, he, q, Ee), V_(a);
                var Xe = a.return;
                e:
                  for (; Xe !== null; ) {
                    switch (Xe.tag) {
                      case Z:
                        var Qe = Xe.stateNode;
                        Qe.effectDuration += q;
                        break e;
                      case gt:
                        var _ = Xe.stateNode;
                        _.effectDuration += q;
                        break e;
                    }
                    Xe = Xe.return;
                  }
              }
            }
            break;
          }
          case Ye: {
            Zw(e, a);
            break;
          }
          case pt:
          case jn:
          case xn:
          case be:
          case We:
          case _t:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      rr || a.flags & pr && z1(a);
    }
    function Iw(e) {
      switch (e.tag) {
        case ce:
        case Pe:
        case Ae: {
          if (e.mode & De)
            try {
              rl(), L1(e, e.return);
            } finally {
              nl(e);
            }
          else
            L1(e, e.return);
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Hw(e, e.return, t), M1(e, e.return);
          break;
        }
        case oe: {
          M1(e, e.return);
          break;
        }
      }
    }
    function Qw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === oe) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? gR(u) : ER(i.stateNode, i.memoizedProps);
            } catch (f) {
              Lt(e, e.return, f);
            }
          }
        } else if (i.tag === Ue) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? SR(s) : CR(s, i.memoizedProps);
            } catch (f) {
              Lt(e, e.return, f);
            }
        } else if (!((i.tag === be || i.tag === We) && i.memoizedState !== null && i !== e)) {
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
    function z1(e) {
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
          if (e.mode & De)
            try {
              rl(), u = t(i);
            } finally {
              nl(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Me(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Me(e)), t.current = i;
      }
    }
    function Ww(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function U1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, U1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === oe) {
          var a = e.stateNode;
          a !== null && JR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Gw(e) {
      for (var t = e.return; t !== null; ) {
        if (A1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function A1(e) {
      return e.tag === oe || e.tag === Z || e.tag === fe;
    }
    function F1(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || A1(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== oe && t.tag !== Ue && t.tag !== Bt; ) {
            if (t.flags & bt || t.child === null || t.tag === fe)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & bt))
            return t.stateNode;
        }
    }
    function qw(e) {
      var t = Gw(e);
      switch (t.tag) {
        case oe: {
          var a = t.stateNode;
          t.flags & ut && (j0(a), t.flags &= ~ut);
          var i = F1(e);
          _S(e, i, a);
          break;
        }
        case Z:
        case fe: {
          var u = t.stateNode.containerInfo, s = F1(e);
          wS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === oe || i === Ue;
      if (u) {
        var s = e.stateNode;
        t ? vR(a, s, t) : dR(a, s);
      } else if (i !== fe) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === oe || i === Ue;
      if (u) {
        var s = e.stateNode;
        t ? pR(a, s, t) : fR(a, s);
      } else if (i !== fe) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    var ar = null, Di = !1;
    function Xw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case oe: {
                ar = i.stateNode, Di = !1;
                break e;
              }
              case Z: {
                ar = i.stateNode.containerInfo, Di = !0;
                break e;
              }
              case fe: {
                ar = i.stateNode.containerInfo, Di = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (ar === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        H1(e, t, a), ar = null, Di = !1;
      }
      Ww(a);
    }
    function eo(e, t, a) {
      for (var i = a.child; i !== null; )
        H1(e, t, i), i = i.sibling;
    }
    function H1(e, t, a) {
      switch (Rl(a), a.tag) {
        case oe:
          rr || sf(a, t);
        case Ue: {
          {
            var i = ar, u = Di;
            ar = null, eo(e, t, a), ar = i, Di = u, ar !== null && (Di ? mR(ar, a.stateNode) : hR(ar, a.stateNode));
          }
          return;
        }
        case Bt: {
          ar !== null && (Di ? yR(ar, a.stateNode) : Fy(ar, a.stateNode));
          return;
        }
        case fe: {
          {
            var s = ar, f = Di;
            ar = a.stateNode.containerInfo, Di = !0, eo(e, t, a), ar = s, Di = f;
          }
          return;
        }
        case ce:
        case Pe:
        case wt:
        case Ae: {
          if (!rr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var x = y, T = x.destroy, O = x.tag;
                  T !== void 0 && ((O & Ji) !== ma ? vm(a, t, T) : (O & Mn) !== ma && (Ma(a), a.mode & De ? (rl(), vm(a, t, T), nl(a)) : vm(a, t, T), mu())), y = y.next;
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
            typeof M.componentWillUnmount == "function" && xS(a, t, M);
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
            a.mode & ve
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
    function Kw(e) {
      e.memoizedState;
    }
    function Zw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && AR(s);
          }
        }
      }
    }
    function j1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Uw()), t.forEach(function(i) {
          var u = G_.bind(null, e, i);
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
    function Jw(e, t, a) {
      uf = a, of = e, vt(t), B1(t, e), vt(t), uf = null, of = null;
    }
    function bi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Xw(e, t, s);
          } catch (v) {
            Lt(s, t, v);
          }
        }
      var f = Hm();
      if (t.subtreeFlags & mr)
        for (var p = t.child; p !== null; )
          vt(p), B1(p, e), p = p.sibling;
      vt(f);
    }
    function B1(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ce:
        case Pe:
        case wt:
        case Ae: {
          if (bi(t, e), al(e), u & ze) {
            try {
              _i(Ji | Ln, e, e.return), Ju(Ji | Ln, e);
            } catch (we) {
              Lt(e, e.return, we);
            }
            if (e.mode & De) {
              try {
                rl(), _i(Mn | Ln, e, e.return);
              } catch (we) {
                Lt(e, e.return, we);
              }
              nl(e);
            } else
              try {
                _i(Mn | Ln, e, e.return);
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
                j0(s);
              } catch (we) {
                Lt(e, e.return, we);
              }
            }
            if (u & ze) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    sR(f, y, m, v, p, e);
                  } catch (we) {
                    Lt(e, e.return, we);
                  }
              }
            }
          }
          return;
        }
        case Ue: {
          if (bi(t, e), al(e), u & ze) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, T = e.memoizedProps, O = i !== null ? i.memoizedProps : T;
            try {
              cR(x, O, T);
            } catch (we) {
              Lt(e, e.return, we);
            }
          }
          return;
        }
        case Z: {
          if (bi(t, e), al(e), u & ze && i !== null) {
            var M = i.memoizedState;
            if (M.isDehydrated)
              try {
                UR(t.containerInfo);
              } catch (we) {
                Lt(e, e.return, we);
              }
          }
          return;
        }
        case fe: {
          bi(t, e), al(e);
          return;
        }
        case Ye: {
          bi(t, e), al(e);
          var N = e.child;
          if (N.flags & Bi) {
            var q = N.stateNode, Ee = N.memoizedState, he = Ee !== null;
            if (q.isHidden = he, he) {
              var Xe = N.alternate !== null && N.alternate.memoizedState !== null;
              Xe || N_();
            }
          }
          if (u & ze) {
            try {
              Kw(e);
            } catch (we) {
              Lt(e, e.return, we);
            }
            j1(e);
          }
          return;
        }
        case be: {
          var Qe = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ve
          ) {
            var _ = rr;
            rr = _ || Qe, bi(t, e), rr = _;
          } else
            bi(t, e);
          if (al(e), u & Bi) {
            var z = e.stateNode, D = e.memoizedState, V = D !== null, ne = e;
            if (z.isHidden = V, V && !Qe && (ne.mode & ve) !== de) {
              le = ne;
              for (var X = ne.child; X !== null; )
                le = X, t_(X), X = X.sibling;
            }
            Qw(ne, V);
          }
          return;
        }
        case pt: {
          bi(t, e), al(e), u & ze && j1(e);
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
          qw(e);
        } catch (a) {
          Lt(e, e.return, a);
        }
        e.flags &= ~bt;
      }
      t & ra && (e.flags &= ~ra);
    }
    function e_(e, t, a) {
      uf = a, of = t, le = e, V1(e, t, a), uf = null, of = null;
    }
    function V1(e, t, a) {
      for (var i = (e.mode & ve) !== de; le !== null; ) {
        var u = le, s = u.child;
        if (u.tag === be && i) {
          var f = u.memoizedState !== null, p = f || pm;
          if (p) {
            DS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || rr, x = pm, T = rr;
            pm = p, rr = y, rr && !T && (le = u, n_(u));
            for (var O = s; O !== null; )
              le = O, V1(
                O,
                // New root; bubble back up to here and stop.
                t,
                a
              ), O = O.sibling;
            le = u, pm = x, rr = T, DS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & In) !== Se && s !== null ? (s.return = u, le = s) : DS(e, t, a);
      }
    }
    function DS(e, t, a) {
      for (; le !== null; ) {
        var i = le;
        if ((i.flags & In) !== Se) {
          var u = i.alternate;
          vt(i);
          try {
            Yw(t, u, i, a);
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
    function t_(e) {
      for (; le !== null; ) {
        var t = le, a = t.child;
        switch (t.tag) {
          case ce:
          case Pe:
          case wt:
          case Ae: {
            if (t.mode & De)
              try {
                rl(), _i(Mn, t, t.return);
              } finally {
                nl(t);
              }
            else
              _i(Mn, t, t.return);
            break;
          }
          case ue: {
            sf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && xS(t, t.return, i);
            break;
          }
          case oe: {
            sf(t, t.return);
            break;
          }
          case be: {
            var u = t.memoizedState !== null;
            if (u) {
              P1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, le = a) : P1(e);
      }
    }
    function P1(e) {
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
    function n_(e) {
      for (; le !== null; ) {
        var t = le, a = t.child;
        if (t.tag === be) {
          var i = t.memoizedState !== null;
          if (i) {
            $1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, le = a) : $1(e);
      }
    }
    function $1(e) {
      for (; le !== null; ) {
        var t = le;
        vt(t);
        try {
          Iw(t);
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
    function r_(e, t, a, i) {
      le = t, a_(t, e, a, i);
    }
    function a_(e, t, a, i) {
      for (; le !== null; ) {
        var u = le, s = u.child;
        (u.subtreeFlags & aa) !== Se && s !== null ? (s.return = u, le = s) : i_(e, t, a, i);
      }
    }
    function i_(e, t, a, i) {
      for (; le !== null; ) {
        var u = le;
        if ((u.flags & Mt) !== Se) {
          vt(u);
          try {
            l_(t, u, a, i);
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
    function l_(e, t, a, i) {
      switch (t.tag) {
        case ce:
        case Pe:
        case Ae: {
          if (t.mode & De) {
            Qg();
            try {
              Ju(tr | Ln, t);
            } finally {
              Ig(t);
            }
          } else
            Ju(tr | Ln, t);
          break;
        }
      }
    }
    function u_(e) {
      le = e, o_();
    }
    function o_() {
      for (; le !== null; ) {
        var e = le, t = e.child;
        if ((le.flags & it) !== Se) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              le = u, f_(u, e);
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
        (e.subtreeFlags & aa) !== Se && t !== null ? (t.return = e, le = t) : s_();
      }
    }
    function s_() {
      for (; le !== null; ) {
        var e = le;
        (e.flags & Mt) !== Se && (vt(e), c_(e), rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, le = t;
          return;
        }
        le = e.return;
      }
    }
    function c_(e) {
      switch (e.tag) {
        case ce:
        case Pe:
        case Ae: {
          e.mode & De ? (Qg(), _i(tr | Ln, e, e.return), Ig(e)) : _i(tr | Ln, e, e.return);
          break;
        }
      }
    }
    function f_(e, t) {
      for (; le !== null; ) {
        var a = le;
        vt(a), p_(a, t), rn();
        var i = a.child;
        i !== null ? (i.return = a, le = i) : d_(e);
      }
    }
    function d_(e) {
      for (; le !== null; ) {
        var t = le, a = t.sibling, i = t.return;
        if (U1(t), t === e) {
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
    function p_(e, t) {
      switch (e.tag) {
        case ce:
        case Pe:
        case Ae: {
          e.mode & De ? (Qg(), _i(tr, e, t), Ig(e)) : _i(tr, e, t);
          break;
        }
      }
    }
    function v_(e) {
      switch (e.tag) {
        case ce:
        case Pe:
        case Ae: {
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
    function h_(e) {
      switch (e.tag) {
        case ce:
        case Pe:
        case Ae: {
          try {
            Ju(tr | Ln, e);
          } catch (t) {
            Lt(e, e.return, t);
          }
          break;
        }
      }
    }
    function m_(e) {
      switch (e.tag) {
        case ce:
        case Pe:
        case Ae: {
          try {
            _i(Mn | Ln, e, e.return);
          } catch (a) {
            Lt(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && xS(e, e.return, t);
          break;
        }
      }
    }
    function y_(e) {
      switch (e.tag) {
        case ce:
        case Pe:
        case Ae:
          try {
            _i(tr | Ln, e, e.return);
          } catch (t) {
            Lt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var cp = Symbol.for;
      cp("selector.component"), cp("selector.has_pseudo_class"), cp("selector.role"), cp("selector.test_id"), cp("selector.text");
    }
    var g_ = [];
    function S_() {
      g_.forEach(function(e) {
        return e();
      });
    }
    var E_ = b.ReactCurrentActQueue;
    function C_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function Y1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && E_.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var T_ = Math.ceil, bS = b.ReactCurrentDispatcher, kS = b.ReactCurrentOwner, ir = b.ReactCurrentBatchConfig, ki = b.ReactCurrentActQueue, Un = (
      /*             */
      0
    ), I1 = (
      /*               */
      1
    ), lr = (
      /*                */
      2
    ), ei = (
      /*                */
      4
    ), Il = 0, fp = 1, ds = 2, hm = 3, dp = 4, Q1 = 5, OS = 6, qe = Un, Pr = null, qt = null, An = A, il = A, LS = Yu(A), Fn = Il, pp = null, mm = A, vp = A, ym = A, hp = null, ya = null, MS = 0, W1 = 500, G1 = 1 / 0, R_ = 500, Ql = null;
    function mp() {
      G1 = Ft() + R_;
    }
    function q1() {
      return G1;
    }
    var gm = !1, NS = null, cf = null, ps = !1, to = null, yp = A, zS = [], US = null, x_ = 50, gp = 0, AS = null, FS = !1, Sm = !1, w_ = 50, ff = 0, Em = null, Sp = xt, Cm = A, X1 = !1;
    function Tm() {
      return Pr;
    }
    function $r() {
      return (qe & (lr | ei)) !== Un ? Ft() : (Sp !== xt || (Sp = Ft()), Sp);
    }
    function no(e) {
      var t = e.mode;
      if ((t & ve) === de)
        return ye;
      if ((qe & lr) !== Un && An !== A)
        return wu(An);
      var a = Ex() !== Sx;
      if (a) {
        if (ir.transition !== null) {
          var i = ir.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Cm === en && (Cm = zv()), Cm;
      }
      var u = sa();
      if (u !== en)
        return u;
      var s = aR();
      return s;
    }
    function __(e) {
      var t = e.mode;
      return (t & ve) === de ? ye : Er();
    }
    function Hn(e, t, a, i) {
      X_(), X1 && g("useInsertionEffect must not schedule updates."), FS && (Sm = !0), Ll(e, a, i), (qe & lr) !== A && e === Pr ? J_(t) : (Hr && yc(e, t, a), eD(t), e === Pr && ((qe & lr) === Un && (vp = Ne(vp, a)), Fn === dp && ro(e, An)), ga(e, i), a === ye && qe === Un && (t.mode & ve) === de && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ki.isBatchingLegacy && (mp(), X0()));
    }
    function D_(e, t, a) {
      var i = e.current;
      i.lanes = t, Ll(e, t, a), ga(e, a);
    }
    function b_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (qe & lr) !== Un
      );
    }
    function ga(e, t) {
      var a = e.callbackNode;
      kv(e, t);
      var i = kl(e, e === Pr ? An : A);
      if (i === A) {
        a !== null && dC(a), e.callbackNode = null, e.callbackPriority = en;
        return;
      }
      var u = Qt(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ki.current !== null && a !== YS)) {
        a == null && s !== ye && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && dC(a);
      var f;
      if (u === ye)
        e.tag === Iu ? (ki.isBatchingLegacy !== null && (ki.didScheduleLegacyUpdate = !0), nx(J1.bind(null, e))) : q0(J1.bind(null, e)), ki.current !== null ? ki.current.push(Qu) : lR(function() {
          (qe & (lr | ei)) === Un && Qu();
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
          case Ia:
            p = Ya;
            break;
          case _u:
            p = Is;
            break;
          default:
            p = Ya;
            break;
        }
        f = IS(p, K1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function K1(e, t) {
      if (Qx(), Sp = xt, Cm = A, (qe & (lr | ei)) !== Un)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Gl();
      if (i && e.callbackNode !== a)
        return null;
      var u = kl(e, e === Pr ? An : A);
      if (u === A)
        return null;
      var s = !jo(e, u) && !Nv(e, u) && !t, f = s ? H_(e, u) : xm(e, u);
      if (f !== Il) {
        if (f === ds) {
          var p = Ii(e);
          p !== A && (u = p, f = HS(e, p));
        }
        if (f === fp) {
          var v = pp;
          throw vs(e, A), ro(e, u), ga(e, Ft()), v;
        }
        if (f === OS)
          ro(e, u);
        else {
          var m = !jo(e, u), y = e.current.alternate;
          if (m && !O_(y)) {
            if (f = xm(e, u), f === ds) {
              var x = Ii(e);
              x !== A && (u = x, f = HS(e, x));
            }
            if (f === fp) {
              var T = pp;
              throw vs(e, A), ro(e, u), ga(e, Ft()), T;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, k_(e, f, u);
        }
      }
      return ga(e, Ft()), e.callbackNode === a ? K1.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = hp;
      if (gc(e)) {
        var i = vs(e, t);
        i.flags |= Vt, qR(e.containerInfo);
      }
      var u = xm(e, t);
      if (u !== ds) {
        var s = ya;
        ya = a, s !== null && Z1(s);
      }
      return u;
    }
    function Z1(e) {
      ya === null ? ya = e : ya.push.apply(ya, e);
    }
    function k_(e, t, a) {
      switch (t) {
        case Il:
        case fp:
          throw new Error("Root did not complete. This is a bug in React.");
        case ds: {
          hs(e, ya, Ql);
          break;
        }
        case hm: {
          if (ro(e, a), Ov(a) && // do not delay if we're inside an act() scope
          !pC()) {
            var i = MS + W1 - Ft();
            if (i > 10) {
              var u = kl(e, A);
              if (u !== A)
                break;
              var s = e.suspendedLanes;
              if (!Ol(s, a)) {
                $r(), hc(e, s);
                break;
              }
              e.timeoutHandle = Uy(hs.bind(null, e, ya, Ql), i);
              break;
            }
          }
          hs(e, ya, Ql);
          break;
        }
        case dp: {
          if (ro(e, a), Mv(a))
            break;
          if (!pC()) {
            var f = Dv(e, a), p = f, v = Ft() - p, m = q_(v) - v;
            if (m > 10) {
              e.timeoutHandle = Uy(hs.bind(null, e, ya, Ql), m);
              break;
            }
          }
          hs(e, ya, Ql);
          break;
        }
        case Q1: {
          hs(e, ya, Ql);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function O_(e) {
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
      t = Bo(t, ym), t = Bo(t, vp), Av(e, t);
    }
    function J1(e) {
      if (Wx(), (qe & (lr | ei)) !== Un)
        throw new Error("Should not already be working.");
      Gl();
      var t = kl(e, A);
      if (!Cr(t, ye))
        return ga(e, Ft()), null;
      var a = xm(e, t);
      if (e.tag !== Iu && a === ds) {
        var i = Ii(e);
        i !== A && (t = i, a = HS(e, i));
      }
      if (a === fp) {
        var u = pp;
        throw vs(e, A), ro(e, t), ga(e, Ft()), u;
      }
      if (a === OS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, hs(e, ya, Ql), ga(e, Ft()), null;
    }
    function L_(e, t) {
      t !== A && (sd(e, Ne(t, ye)), ga(e, Ft()), (qe & (lr | ei)) === Un && (mp(), Qu()));
    }
    function jS(e, t) {
      var a = qe;
      qe |= I1;
      try {
        return e(t);
      } finally {
        qe = a, qe === Un && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ki.isBatchingLegacy && (mp(), X0());
      }
    }
    function M_(e, t, a, i, u) {
      var s = sa(), f = ir.transition;
      try {
        return ir.transition = null, Pt(Wt), e(t, a, i, u);
      } finally {
        Pt(s), ir.transition = f, qe === Un && mp();
      }
    }
    function Wl(e) {
      to !== null && to.tag === Iu && (qe & (lr | ei)) === Un && Gl();
      var t = qe;
      qe |= I1;
      var a = ir.transition, i = sa();
      try {
        return ir.transition = null, Pt(Wt), e ? e() : void 0;
      } finally {
        Pt(i), ir.transition = a, qe = t, (qe & (lr | ei)) === Un && Qu();
      }
    }
    function eC() {
      return (qe & (lr | ei)) !== Un;
    }
    function Rm(e, t) {
      xr(LS, il, e), il = Ne(il, t);
    }
    function BS(e) {
      il = LS.current, Rr(LS, e);
    }
    function vs(e, t) {
      e.finishedWork = null, e.finishedLanes = A;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, iR(a)), qt !== null)
        for (var i = qt.return; i !== null; ) {
          var u = i.alternate;
          k1(u, i), i = i.return;
        }
      Pr = e;
      var s = ms(e.current, null);
      return qt = s, An = il = t, Fn = Il, pp = null, mm = A, vp = A, ym = A, hp = null, ya = null, Dx(), Ci.discardPendingWarnings(), s;
    }
    function tC(e, t) {
      do {
        var a = qt;
        try {
          if (Nh(), wE(), rn(), kS.current = null, a === null || a.return === null) {
            Fn = fp, pp = t, qt = null;
            return;
          }
          if (nn && a.mode & De && om(a, !0), Aa)
            if (gr(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              xl(a, i, An);
            } else
              Mo(a, t, An);
          nw(e, a.return, a, t, An), iC(a);
        } catch (u) {
          t = u, qt === a && a !== null ? (a = a.return, qt = a) : a = qt;
          continue;
        }
        return;
      } while (!0);
    }
    function nC() {
      var e = bS.current;
      return bS.current = rm, e === null ? rm : e;
    }
    function rC(e) {
      bS.current = e;
    }
    function N_() {
      MS = Ft();
    }
    function Ep(e) {
      mm = Ne(e, mm);
    }
    function z_() {
      Fn === Il && (Fn = hm);
    }
    function VS() {
      (Fn === Il || Fn === hm || Fn === ds) && (Fn = dp), Pr !== null && (Ho(mm) || Ho(vp)) && ro(Pr, An);
    }
    function U_(e) {
      Fn !== dp && (Fn = ds), hp === null ? hp = [e] : hp.push(e);
    }
    function A_() {
      return Fn === Il;
    }
    function xm(e, t) {
      var a = qe;
      qe |= lr;
      var i = nC();
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
          F_();
          break;
        } catch (s) {
          tC(e, s);
        }
      while (!0);
      if (Nh(), qe = a, rC(i), qt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Xs(), Pr = null, An = A, Fn;
    }
    function F_() {
      for (; qt !== null; )
        aC(qt);
    }
    function H_(e, t) {
      var a = qe;
      qe |= lr;
      var i = nC();
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
          j_();
          break;
        } catch (s) {
          tC(e, s);
        }
      while (!0);
      return Nh(), rC(i), qe = a, qt !== null ? (qs(), Il) : (Xs(), Pr = null, An = A, Fn);
    }
    function j_() {
      for (; qt !== null && !$s(); )
        aC(qt);
    }
    function aC(e) {
      var t = e.alternate;
      vt(e);
      var a;
      (e.mode & De) !== de ? (Yg(e), a = PS(t, e, il), om(e, !0)) : a = PS(t, e, il), rn(), e.memoizedProps = e.pendingProps, a === null ? iC(e) : qt = a, kS.current = null;
    }
    function iC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ur) === Se) {
          vt(t);
          var u = void 0;
          if ((t.mode & De) === de ? u = b1(a, t, il) : (Yg(t), u = b1(a, t, il), om(t, !1)), rn(), u !== null) {
            qt = u;
            return;
          }
        } else {
          var s = zw(a, t);
          if (s !== null) {
            s.flags &= mv, qt = s;
            return;
          }
          if ((t.mode & De) !== de) {
            om(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Ur, i.subtreeFlags = Se, i.deletions = null;
          else {
            Fn = OS, qt = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          qt = v;
          return;
        }
        t = i, qt = t;
      } while (t !== null);
      Fn === Il && (Fn = Q1);
    }
    function hs(e, t, a) {
      var i = sa(), u = ir.transition;
      try {
        ir.transition = null, Pt(Wt), B_(e, t, a, i);
      } finally {
        ir.transition = u, Pt(i);
      }
      return null;
    }
    function B_(e, t, a, i) {
      do
        Gl();
      while (to !== null);
      if (K_(), (qe & (lr | ei)) !== Un)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Pi(s), u === null)
        return Qs(), null;
      if (s === A && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = A, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = en;
      var f = Ne(u.lanes, u.childLanes);
      mc(e, f), e === Pr && (Pr = null, qt = null, An = A), ((u.subtreeFlags & aa) !== Se || (u.flags & aa) !== Se) && (ps || (ps = !0, US = a, IS(Ya, function() {
        return Gl(), null;
      })));
      var p = (u.subtreeFlags & (du | mr | In | aa)) !== Se, v = (u.flags & (du | mr | In | aa)) !== Se;
      if (p || v) {
        var m = ir.transition;
        ir.transition = null;
        var y = sa();
        Pt(Wt);
        var x = qe;
        qe |= ei, kS.current = null, jw(e, u), XE(), Jw(e, u, s), ZT(e.containerInfo), e.current = u, td(s), e_(u, e, s), yu(), Sv(), qe = x, Pt(y), ir.transition = m;
      } else
        e.current = u, XE();
      var T = ps;
      if (ps ? (ps = !1, to = e, yp = s) : (ff = 0, Em = null), f = e.pendingLanes, f === A && (cf = null), T || sC(e.current, !1), vu(u.stateNode, i), Hr && e.memoizedUpdaters.clear(), S_(), ga(e, Ft()), t !== null)
        for (var O = e.onRecoverableError, M = 0; M < t.length; M++) {
          var N = t[M], q = N.stack, Ee = N.digest;
          O(N.value, {
            componentStack: q,
            digest: Ee
          });
        }
      if (gm) {
        gm = !1;
        var he = NS;
        throw NS = null, he;
      }
      return Cr(yp, ye) && e.tag !== Iu && Gl(), f = e.pendingLanes, Cr(f, ye) ? (Ix(), e === AS ? gp++ : (gp = 0, AS = e)) : gp = 0, Qu(), Qs(), null;
    }
    function Gl() {
      if (to !== null) {
        var e = On(yp), t = ly(Ia, e), a = ir.transition, i = sa();
        try {
          return ir.transition = null, Pt(t), P_();
        } finally {
          Pt(i), ir.transition = a;
        }
      }
      return !1;
    }
    function V_(e) {
      zS.push(e), ps || (ps = !0, IS(Ya, function() {
        return Gl(), null;
      }));
    }
    function P_() {
      if (to === null)
        return !1;
      var e = US;
      US = null;
      var t = to, a = yp;
      if (to = null, yp = A, (qe & (lr | ei)) !== Un)
        throw new Error("Cannot flush passive effects while already rendering.");
      FS = !0, Sm = !1, wv(a);
      var i = qe;
      qe |= ei, u_(t.current), r_(t, t.current, a, e);
      {
        var u = zS;
        zS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          $w(t, f);
        }
      }
      nd(), sC(t.current, !0), qe = i, Qu(), Sm ? t === Em ? ff++ : (ff = 0, Em = t) : ff = 0, FS = !1, Sm = !1, ua(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function lC(e) {
      return cf !== null && cf.has(e);
    }
    function $_(e) {
      cf === null ? cf = /* @__PURE__ */ new Set([e]) : cf.add(e);
    }
    function Y_(e) {
      gm || (gm = !0, NS = e);
    }
    var I_ = Y_;
    function uC(e, t, a) {
      var i = cs(a, t), u = a1(e, i, ye), s = Gu(e, u, ye), f = $r();
      s !== null && (Ll(s, ye, f), ga(s, f));
    }
    function Lt(e, t, a) {
      if (Aw(a), Tp(!1), e.tag === Z) {
        uC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Z) {
          uC(i, e, a);
          return;
        } else if (i.tag === ue) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !lC(s)) {
            var f = cs(a, e), p = oS(i, f, ye), v = Gu(i, p, ye), m = $r();
            v !== null && (Ll(v, ye, m), ga(v, m));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Q_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = $r();
      hc(e, a), tD(e), Pr === e && Ol(An, a) && (Fn === dp || Fn === hm && Ov(An) && Ft() - MS < W1 ? vs(e, A) : ym = Ne(ym, a)), ga(e, u);
    }
    function oC(e, t) {
      t === en && (t = __(e));
      var a = $r(), i = ha(e, t);
      i !== null && (Ll(i, t, a), ga(i, a));
    }
    function W_(e) {
      var t = e.memoizedState, a = en;
      t !== null && (a = t.retryLane), oC(e, a);
    }
    function G_(e, t) {
      var a = en, i;
      switch (e.tag) {
        case Ye:
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
      i !== null && i.delete(t), oC(e, a);
    }
    function q_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : T_(e / 1960) * 1960;
    }
    function X_() {
      if (gp > x_)
        throw gp = 0, AS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ff > w_ && (ff = 0, Em = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function K_() {
      Ci.flushLegacyContextWarning(), Ci.flushPendingUnsafeLifecycleWarnings();
    }
    function sC(e, t) {
      vt(e), wm(e, hr, m_), t && wm(e, Cl, y_), wm(e, hr, v_), t && wm(e, Cl, h_), rn();
    }
    function wm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Se ? i = i.child : ((i.flags & t) !== Se && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var _m = null;
    function cC(e) {
      {
        if ((qe & lr) !== Un || !(e.mode & ve))
          return;
        var t = e.tag;
        if (t !== Ze && t !== Z && t !== ue && t !== ce && t !== Pe && t !== wt && t !== Ae)
          return;
        var a = Me(e) || "ReactComponent";
        if (_m !== null) {
          if (_m.has(a))
            return;
          _m.add(a);
        } else
          _m = /* @__PURE__ */ new Set([a]);
        var i = Kt;
        try {
          vt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? vt(e) : rn();
        }
      }
    }
    var PS;
    {
      var Z_ = null;
      PS = function(e, t, a) {
        var i = gC(Z_, t);
        try {
          return R1(e, t, a);
        } catch (s) {
          if (cx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Nh(), wE(), k1(e, t), gC(t, i), t.mode & De && Yg(t), El(null, R1, null, e, t, a), ty()) {
            var u = Qf();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var fC = !1, $S;
    $S = /* @__PURE__ */ new Set();
    function J_(e) {
      if (Zr && !Px())
        switch (e.tag) {
          case ce:
          case Pe:
          case Ae: {
            var t = qt && Me(qt) || "Unknown", a = t;
            if (!$S.has(a)) {
              $S.add(a);
              var i = Me(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ue: {
            fC || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), fC = !0);
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
    var YS = {};
    function IS(e, t) {
      {
        var a = ki.current;
        return a !== null ? (a.push(t), YS) : Ps(e, t);
      }
    }
    function dC(e) {
      if (e !== YS)
        return gv(e);
    }
    function pC() {
      return ki.current !== null;
    }
    function eD(e) {
      {
        if (e.mode & ve) {
          if (!Y1())
            return;
        } else if (!C_() || qe !== Un || e.tag !== ce && e.tag !== Pe && e.tag !== Ae)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Me(e));
          } finally {
            t ? vt(e) : rn();
          }
        }
      }
    }
    function tD(e) {
      e.tag !== Iu && Y1() && ki.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Tp(e) {
      X1 = e;
    }
    var ti = null, df = null, nD = function(e) {
      ti = e;
    };
    function pf(e) {
      {
        if (ti === null)
          return e;
        var t = ti(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return pf(e);
    }
    function WS(e) {
      {
        if (ti === null)
          return e;
        var t = ti(e);
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
    function vC(e, t) {
      {
        if (ti === null)
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
          case Pe: {
            (s === I || s === xe) && (u = !0);
            break;
          }
          case wt:
          case Ae: {
            (s === Ke || s === xe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ti(a);
          if (f !== void 0 && f === ti(i))
            return !0;
        }
        return !1;
      }
    }
    function hC(e) {
      {
        if (ti === null || typeof WeakSet != "function")
          return;
        df === null && (df = /* @__PURE__ */ new WeakSet()), df.add(e);
      }
    }
    var rD = function(e, t) {
      {
        if (ti === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Gl(), Wl(function() {
          GS(e.current, i, a);
        });
      }
    }, aD = function(e, t) {
      {
        if (e.context !== Na)
          return;
        Gl(), Wl(function() {
          Rp(t, e, null, null);
        });
      }
    };
    function GS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ce:
          case Ae:
          case ue:
            v = p;
            break;
          case Pe:
            v = p.render;
            break;
        }
        if (ti === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var x = ti(v);
          x !== void 0 && (a.has(x) ? y = !0 : t.has(x) && (f === ue ? y = !0 : m = !0));
        }
        if (df !== null && (df.has(e) || i !== null && df.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var T = ha(e, ye);
          T !== null && Hn(T, e, ye, xt);
        }
        u !== null && !y && GS(u, t, a), s !== null && GS(s, t, a);
      }
    }
    var iD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return qS(e.current, i, a), a;
      }
    };
    function qS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ce:
          case Ae:
          case ue:
            p = f;
            break;
          case Pe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? lD(e, a) : i !== null && qS(i, t, a), u !== null && qS(u, t, a);
      }
    }
    function lD(e, t) {
      {
        var a = uD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case oe:
              t.add(i.stateNode);
              return;
            case fe:
              t.add(i.stateNode.containerInfo);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function uD(e, t) {
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
    var XS;
    {
      XS = !1;
      try {
        var mC = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function oD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Se, this.subtreeFlags = Se, this.deletions = null, this.lanes = A, this.childLanes = A, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var za = function(e, t, a, i) {
      return new oD(e, t, a, i);
    };
    function KS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function sD(e) {
      return typeof e == "function" && !KS(e) && e.defaultProps === void 0;
    }
    function cD(e) {
      if (typeof e == "function")
        return KS(e) ? ue : ce;
      if (e != null) {
        var t = e.$$typeof;
        if (t === I)
          return Pe;
        if (t === Ke)
          return wt;
      }
      return Ze;
    }
    function ms(e, t) {
      var a = e.alternate;
      a === null ? (a = za(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Se, a.subtreeFlags = Se, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & bn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ze:
        case ce:
        case Ae:
          a.type = pf(e.type);
          break;
        case ue:
          a.type = QS(e.type);
          break;
        case Pe:
          a.type = WS(e.type);
          break;
      }
      return a;
    }
    function fD(e, t) {
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
    function dD(e, t, a) {
      var i;
      return e === Rh ? (i = ve, t === !0 && (i |= Ve, i |= jr)) : i = de, Hr && (i |= De), za(Z, null, null, i);
    }
    function ZS(e, t, a, i, u, s) {
      var f = Ze, p = e;
      if (typeof e == "function")
        KS(e) ? (f = ue, p = QS(p)) : p = pf(p);
      else if (typeof e == "string")
        f = oe;
      else
        e:
          switch (e) {
            case wa:
              return ao(a.children, u, s, t);
            case Li:
              f = yt, u |= Ve, (u & ve) !== de && (u |= jr);
              break;
            case cl:
              return pD(a, u, s, t);
            case me:
              return vD(a, u, s, t);
            case Ge:
              return hD(a, u, s, t);
            case Dt:
              return yC(a, u, s, t);
            case At:
            case je:
            case fr:
            case Mi:
            case hn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case E:
                    f = Je;
                    break e;
                  case j:
                    f = fn;
                    break e;
                  case I:
                    f = Pe, p = WS(p);
                    break e;
                  case Ke:
                    f = wt;
                    break e;
                  case xe:
                    f = Rn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var m = i ? Me(i) : null;
                m && (v += `

Check the render method of \`` + m + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var y = za(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function JS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = ZS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function ao(e, t, a, i) {
      var u = za(st, e, i, t);
      return u.lanes = a, u;
    }
    function pD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = za(gt, e, i, t | De);
      return u.elementType = cl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function vD(e, t, a, i) {
      var u = za(Ye, e, i, t);
      return u.elementType = me, u.lanes = a, u;
    }
    function hD(e, t, a, i) {
      var u = za(pt, e, i, t);
      return u.elementType = Ge, u.lanes = a, u;
    }
    function yC(e, t, a, i) {
      var u = za(be, e, i, t);
      u.elementType = Dt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function e0(e, t, a) {
      var i = za(Ue, e, null, t);
      return i.lanes = a, i;
    }
    function mD() {
      var e = za(oe, null, null, de);
      return e.elementType = "DELETED", e;
    }
    function yD(e) {
      var t = za(Bt, null, null, de);
      return t.stateNode = e, t;
    }
    function t0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = za(fe, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function gC(e, t) {
      return e === null && (e = za(Ze, null, null, de)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function gD(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = en, this.eventTimes = Vo(A), this.expirationTimes = Vo(xt), this.pendingLanes = A, this.suspendedLanes = A, this.pingedLanes = A, this.expiredLanes = A, this.mutableReadLanes = A, this.finishedLanes = A, this.entangledLanes = A, this.entanglements = Vo(A), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
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
    function SC(e, t, a, i, u, s, f, p, v, m) {
      var y = new gD(e, t, a, p, v), x = dD(t, s);
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
      return vg(x), y;
    }
    var n0 = "18.3.1";
    function SD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ca(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Mr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var r0, a0;
    r0 = !1, a0 = {};
    function EC(e) {
      if (!e)
        return Na;
      var t = ta(e), a = tx(t);
      if (t.tag === ue) {
        var i = t.type;
        if (Zi(i))
          return W0(t, i, a);
      }
      return a;
    }
    function ED(e, t) {
      {
        var a = ta(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ia(a);
        if (u === null)
          return null;
        if (u.mode & Ve) {
          var s = Me(a) || "Component";
          if (!a0[s]) {
            a0[s] = !0;
            var f = Kt;
            try {
              vt(u), a.mode & Ve ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? vt(f) : rn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function CC(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return SC(e, t, v, m, a, i, u, s, f);
    }
    function TC(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, x = SC(a, i, y, e, u, s, f, p, v);
      x.context = EC(null);
      var T = x.current, O = $r(), M = no(T), N = $l(O, M);
      return N.callback = t ?? null, Gu(T, N, M), D_(x, M, O), x;
    }
    function Rp(e, t, a, i) {
      ed(t, e);
      var u = t.current, s = $r(), f = no(u);
      rd(f);
      var p = EC(a);
      t.context === null ? t.context = p : t.pendingContext = p, Zr && Kt !== null && !r0 && (r0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Me(Kt) || "Unknown"));
      var v = $l(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = Gu(u, v, f);
      return m !== null && (Hn(m, u, f, s), Hh(m, u, f)), f;
    }
    function Dm(e) {
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
    function CD(e) {
      switch (e.tag) {
        case Z: {
          var t = e.stateNode;
          if (gc(t)) {
            var a = ld(t);
            L_(t, a);
          }
          break;
        }
        case Ye: {
          Wl(function() {
            var u = ha(e, ye);
            if (u !== null) {
              var s = $r();
              Hn(u, e, ye, s);
            }
          });
          var i = ye;
          i0(e, i);
          break;
        }
      }
    }
    function RC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Uv(a.retryLane, t));
    }
    function i0(e, t) {
      RC(e, t);
      var a = e.alternate;
      a && RC(a, t);
    }
    function TD(e) {
      if (e.tag === Ye) {
        var t = Fo, a = ha(e, t);
        if (a !== null) {
          var i = $r();
          Hn(a, e, t, i);
        }
        i0(e, t);
      }
    }
    function RD(e) {
      if (e.tag === Ye) {
        var t = no(e), a = ha(e, t);
        if (a !== null) {
          var i = $r();
          Hn(a, e, t, i);
        }
        i0(e, t);
      }
    }
    function xC(e) {
      var t = yv(e);
      return t === null ? null : t.stateNode;
    }
    var wC = function(e) {
      return null;
    };
    function xD(e) {
      return wC(e);
    }
    var _C = function(e) {
      return !1;
    };
    function wD(e) {
      return _C(e);
    }
    var DC = null, bC = null, kC = null, OC = null, LC = null, MC = null, NC = null, zC = null, UC = null;
    {
      var AC = function(e, t, a) {
        var i = t[a], u = mn(e) ? e.slice() : Be({}, e);
        return a + 1 === t.length ? (mn(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = AC(e[i], t, a + 1), u);
      }, FC = function(e, t) {
        return AC(e, t, 0);
      }, HC = function(e, t, a, i) {
        var u = t[i], s = mn(e) ? e.slice() : Be({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], mn(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = HC(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, jC = function(e, t, a) {
        if (t.length !== a.length) {
          Le("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Le("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return HC(e, t, a, 0);
      }, BC = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = mn(e) ? e.slice() : Be({}, e);
        return s[u] = BC(e[u], t, a + 1, i), s;
      }, VC = function(e, t, a) {
        return BC(e, t, 0, a);
      }, l0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      DC = function(e, t, a, i) {
        var u = l0(e, t);
        if (u !== null) {
          var s = VC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Be({}, e.memoizedProps);
          var f = ha(e, ye);
          f !== null && Hn(f, e, ye, xt);
        }
      }, bC = function(e, t, a) {
        var i = l0(e, t);
        if (i !== null) {
          var u = FC(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Be({}, e.memoizedProps);
          var s = ha(e, ye);
          s !== null && Hn(s, e, ye, xt);
        }
      }, kC = function(e, t, a, i) {
        var u = l0(e, t);
        if (u !== null) {
          var s = jC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Be({}, e.memoizedProps);
          var f = ha(e, ye);
          f !== null && Hn(f, e, ye, xt);
        }
      }, OC = function(e, t, a) {
        e.pendingProps = VC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ha(e, ye);
        i !== null && Hn(i, e, ye, xt);
      }, LC = function(e, t) {
        e.pendingProps = FC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ha(e, ye);
        a !== null && Hn(a, e, ye, xt);
      }, MC = function(e, t, a) {
        e.pendingProps = jC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ha(e, ye);
        i !== null && Hn(i, e, ye, xt);
      }, NC = function(e) {
        var t = ha(e, ye);
        t !== null && Hn(t, e, ye, xt);
      }, zC = function(e) {
        wC = e;
      }, UC = function(e) {
        _C = e;
      };
    }
    function _D(e) {
      var t = ia(e);
      return t === null ? null : t.stateNode;
    }
    function DD(e) {
      return null;
    }
    function bD() {
      return Kt;
    }
    function kD(e) {
      var t = e.findFiberByHostInstance, a = b.ReactCurrentDispatcher;
      return Jf({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: DC,
        overrideHookStateDeletePath: bC,
        overrideHookStateRenamePath: kC,
        overrideProps: OC,
        overridePropsDeletePath: LC,
        overridePropsRenamePath: MC,
        setErrorHandler: zC,
        setSuspenseHandler: UC,
        scheduleUpdate: NC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: _D,
        findFiberByHostInstance: t || DD,
        // React Refresh
        findHostInstancesForRefresh: iD,
        scheduleRefresh: rD,
        scheduleRoot: aD,
        setRefreshHandler: nD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: bD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: n0
      });
    }
    var PC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function u0(e) {
      this._internalRoot = e;
    }
    bm.prototype.render = u0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : km(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Zt) {
          var i = xC(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Rp(e, t, null, null);
    }, bm.prototype.unmount = u0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        eC() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Wl(function() {
          Rp(null, e, null, null);
        }), P0(t);
      }
    };
    function OD(e, t) {
      if (!km(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $C(e);
      var a = !1, i = !1, u = "", s = PC;
      t != null && (t.hydrate ? Le("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ri && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = CC(e, Rh, null, a, i, u, s);
      mh(f.current, e);
      var p = e.nodeType === Zt ? e.parentNode : e;
      return kd(p), new u0(f);
    }
    function bm(e) {
      this._internalRoot = e;
    }
    function LD(e) {
      e && sy(e);
    }
    bm.prototype.unstable_scheduleHydration = LD;
    function MD(e, t, a) {
      if (!km(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $C(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = PC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = TC(t, null, e, Rh, i, s, f, p, v);
      if (mh(m.current, e), kd(e), u)
        for (var y = 0; y < u.length; y++) {
          var x = u[y];
          Ax(m, x);
        }
      return new bm(m);
    }
    function km(e) {
      return !!(e && (e.nodeType === dr || e.nodeType === ka || e.nodeType === vl || !at));
    }
    function xp(e) {
      return !!(e && (e.nodeType === dr || e.nodeType === ka || e.nodeType === vl || e.nodeType === Zt && e.nodeValue === " react-mount-point-unstable "));
    }
    function $C(e) {
      e.nodeType === dr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Bd(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var ND = b.ReactCurrentOwner, YC;
    YC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Zt) {
        var t = xC(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = o0(e), u = !!(i && $u(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === dr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function o0(e) {
      return e ? e.nodeType === ka ? e.documentElement : e.firstChild : null;
    }
    function IC() {
    }
    function zD(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var T = Dm(f);
            s.call(T);
          };
        }
        var f = TC(
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
          IC
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
            var T = Dm(y);
            m.call(T);
          };
        }
        var y = CC(
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
          IC
        );
        e._reactRootContainer = y, mh(y.current, e);
        var x = e.nodeType === Zt ? e.parentNode : e;
        return kd(x), Wl(function() {
          Rp(t, y, a, i);
        }), y;
      }
    }
    function UD(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Om(e, t, a, i, u) {
      YC(a), UD(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = zD(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Dm(f);
            p.call(v);
          };
        }
        Rp(t, f, e, u);
      }
      return Dm(f);
    }
    var QC = !1;
    function AD(e) {
      {
        QC || (QC = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = ND.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", dt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === dr ? e : ED(e, "findDOMNode");
    }
    function FD(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Bd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Om(null, e, t, !0, a);
    }
    function HD(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Bd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Om(null, e, t, !1, a);
    }
    function jD(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !xp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !bo(e))
        throw new Error("parentComponent must be a valid React Component");
      return Om(e, t, a, !1, i);
    }
    var WC = !1;
    function BD(e) {
      if (WC || (WC = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !xp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Bd(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = o0(e), i = a && !$u(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Wl(function() {
          Om(null, null, e, !1, function() {
            e._reactRootContainer = null, P0(e);
          });
        }), !0;
      } else {
        {
          var u = o0(e), s = !!(u && $u(u)), f = e.nodeType === dr && xp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ku(CD), uy(TD), Ec(RD), Hv(sa), jv(Gn), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), vv(PT), Fs(jS, M_, Wl);
    function VD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!km(t))
        throw new Error("Target container is not a DOM element.");
      return SD(e, t, null, a);
    }
    function PD(e, t, a, i) {
      return jD(e, t, a, i);
    }
    var s0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [$u, $c, yh, As, wo, jS]
    };
    function $D(e, t) {
      return s0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), OD(e, t);
    }
    function YD(e, t, a) {
      return s0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), MD(e, t, a);
    }
    function ID(e) {
      return eC() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Wl(e);
    }
    var QD = kD({
      findFiberByHostInstance: ts,
      bundleType: 1,
      version: n0,
      rendererPackageName: "react-dom"
    });
    if (!QD && pn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var GC = window.location.protocol;
      /^(https?|file):$/.test(GC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (GC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s0, Ea.createPortal = VD, Ea.createRoot = $D, Ea.findDOMNode = AD, Ea.flushSync = ID, Ea.hydrate = FD, Ea.hydrateRoot = YD, Ea.render = HD, Ea.unmountComponentAtNode = BD, Ea.unstable_batchedUpdates = jS, Ea.unstable_renderSubtreeIntoContainer = PD, Ea.version = n0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ea;
}
function iT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iT);
    } catch (P) {
      console.error(P);
    }
  }
}
process.env.NODE_ENV === "production" ? (iT(), p0.exports = Eb()) : p0.exports = Cb();
var lT = p0.exports;
const nT = {
  center: {
    enter: `${Qr.modal} ${Qr.modalEnter}`,
    exit: `${Qr.modal} ${Qr.modalExit}`
  },
  bottom: {
    enter: `${Qr.modalBottom} ${Qr.modalBottomEnter}`,
    exit: `${Qr.modalBottom} ${Qr.modalBottomExit}`
  }
}, Tb = ({ isAnimation: P, isOpen: K, position: b, delay: Fe }) => {
  const [$e, Le] = XD(!1), g = KD(), Ct = K ? nT[b].enter : nT[b].exit;
  return ZD(() => {
    if (!P) {
      Le(K);
      return;
    }
    return K ? Le(!0) : !K && $e && (g.current = setTimeout(() => {
      Le(!1);
    }, Fe)), () => {
      clearTimeout(g.current);
    };
  }, [P, K, $e, Fe]), { mounted: $e, modalAnimationClass: Ct };
}, Rb = "_dimmed_21fx6_1", xb = {
  dimmed: Rb
}, wb = ({ onDimmedClick: P, style: K, ...b }) => lT.createPortal(
  /* @__PURE__ */ Wr.jsx("div", { className: xb.dimmed, style: K, onClick: P, ...b }),
  document.body
), _b = "_modalHeader_1m1z4_1", Db = {
  modalHeader: _b
}, bb = ({ style: P, children: K, ...b }) => /* @__PURE__ */ Wr.jsx("header", { className: Db.modalHeader, style: P, ...b, children: K }), kb = "_title_jysup_1", Ob = {
  title: kb
}, Lb = ({ title: P }) => /* @__PURE__ */ Wr.jsx("span", { className: Ob.title, children: P && P }), Mb = "_closeButton_xu7h7_1", Nb = {
  closeButton: Mb
}, rT = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2729_1438)'%3e%3cpath%20d='M19.8167%206.41L18.4067%205L12.8167%2010.59L7.22665%205L5.81665%206.41L11.4067%2012L5.81665%2017.59L7.22665%2019L12.8167%2013.41L18.4067%2019L19.8167%2017.59L14.2267%2012L19.8167%206.41Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2729_1438'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.81665)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", zb = ({
  onClose: P,
  showCloseIcon: K = !0,
  customCloseIcon: b
}) => {
  const Fe = ($e) => {
    $e.currentTarget.src = rT;
  };
  return /* @__PURE__ */ Wr.jsx(Wr.Fragment, { children: K && /* @__PURE__ */ Wr.jsx(
    "img",
    {
      src: b ?? rT,
      alt: "close",
      className: Nb.closeButton,
      onClick: P,
      onError: Fe
    }
  ) });
}, Ub = "_content_oq6f1_1", Ab = {
  content: Ub
}, Fb = ({ style: P, children: K, ...b }) => K ? /* @__PURE__ */ Wr.jsx("section", { className: Ab.content, style: P, ...b, children: K }) : null, Hb = "_closeButton_12g5j_1", jb = "_small_12g5j_8", Bb = "_medium_12g5j_12", Vb = "_large_12g5j_16", Nm = {
  closeButton: Hb,
  small: jb,
  medium: Bb,
  large: Vb
}, Pb = {
  small: Nm.small,
  medium: Nm.medium,
  large: Nm.large
}, $b = ({
  label: P,
  onClose: K,
  size: b,
  style: Fe,
  ...$e
}) => {
  const Le = b ? Pb[b] : "";
  return /* @__PURE__ */ Wr.jsx(
    "button",
    {
      className: `${Nm.closeButton} ${Le}`,
      style: Fe,
      onClick: K,
      ...$e,
      children: P
    }
  );
}, Yb = "_confirmButton_c7ziy_1", Ib = "_small_c7ziy_8", Qb = "_medium_c7ziy_12", Wb = "_large_c7ziy_16", zm = {
  confirmButton: Yb,
  small: Ib,
  medium: Qb,
  large: Wb
}, Gb = {
  small: zm.small,
  medium: zm.medium,
  large: zm.large
}, qb = ({
  label: P,
  onConfirm: K,
  size: b,
  style: Fe,
  ...$e
}) => {
  const Le = b ? Gb[b] : "";
  return /* @__PURE__ */ Wr.jsx(
    "button",
    {
      className: `${zm.confirmButton} ${Le}`,
      style: Fe,
      onClick: K,
      ...$e,
      children: P
    }
  );
}, Xb = "_row_hr5wl_1", Kb = "_rowReverse_hr5wl_9", Zb = "_column_hr5wl_18", Jb = "_columnReverse_hr5wl_27", Mm = {
  row: Xb,
  rowReverse: Kb,
  column: Zb,
  columnReverse: Jb
}, ek = {
  row: Mm.row,
  "row-reverse": Mm.rowReverse,
  column: Mm.column,
  "column-reverse": Mm.columnReverse
}, tk = ({
  position: P = "column",
  justifyContent: K,
  alignItems: b,
  children: Fe,
  ...$e
}) => {
  const Le = K || "space-between", g = b || "center";
  return /* @__PURE__ */ Wr.jsx(
    "footer",
    {
      className: ek[P],
      style: { justifyContent: Le, alignItems: g },
      ...$e,
      children: Fe
    }
  );
}, nk = "_input_fcje0_1", rk = {
  input: nk
}, ak = ({ value: P, onChange: K, ...b }) => /* @__PURE__ */ Wr.jsx("input", { className: rk.input, value: P, onChange: K, ...b }), ik = {
  center: Qr.modalWrapper,
  bottom: Qr.modalBottomWrapper
}, lk = {
  center: Qr.modal,
  bottom: Qr.modalBottom
}, uk = {
  small: Qr.small,
  medium: Qr.medium,
  large: Qr.large
}, ok = ({
  isOpen: P,
  size: K,
  position: b = "center",
  isAnimation: Fe = !1,
  duration: $e,
  style: Le,
  children: g,
  ...Ct
}) => {
  const { mounted: ce, modalAnimationClass: ue } = Tb({
    isAnimation: Fe,
    isOpen: P,
    position: b,
    delay: $e
  }), Ze = Fe ? ue : lk[b], Z = ik[b], fe = K ? uk[K] : "";
  return ce ? /* @__PURE__ */ Wr.jsx(Wr.Fragment, { children: lT.createPortal(
    /* @__PURE__ */ Wr.jsx("div", { className: `${Z} ${fe}`, style: Le, children: /* @__PURE__ */ Wr.jsx("div", { className: Ze, style: { animationDuration: `${$e}ms` }, ...Ct, children: g }) }),
    document.body
  ) }) : null;
}, pk = Object.assign(ok, {
  Dimmed: wb,
  Header: bb,
  Title: Lb,
  CloseIcon: zb,
  Content: Fb,
  CloseButton: $b,
  ConfirmButton: qb,
  Footer: tk,
  Input: ak
});
export {
  pk as Modal
};
