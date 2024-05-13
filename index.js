import * as XD from "react";
import { useState as KD, useRef as ZD, useEffect as JD } from "react";
function eb(B) {
  if (B.__esModule)
    return B;
  var Y = B.default;
  if (typeof Y == "function") {
    var w = function De() {
      return this instanceof De ? Reflect.construct(Y, arguments, this.constructor) : Y.apply(this, arguments);
    };
    w.prototype = Y.prototype;
  } else
    w = {};
  return Object.defineProperty(w, "__esModule", { value: !0 }), Object.keys(B).forEach(function(De) {
    var Ne = Object.getOwnPropertyDescriptor(B, De);
    Object.defineProperty(w, De, Ne.get ? Ne : {
      enumerable: !0,
      get: function() {
        return B[De];
      }
    });
  }), w;
}
var p0 = { exports: {} }, Dp = {};
const Am = /* @__PURE__ */ eb(XD);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XC;
function tb() {
  if (XC)
    return Dp;
  XC = 1;
  var B = Am, Y = Symbol.for("react.element"), w = Symbol.for("react.fragment"), De = Object.prototype.hasOwnProperty, Ne = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, xe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(tt, ie, re) {
    var Ve, X = {}, ue = null, ae = null;
    re !== void 0 && (ue = "" + re), ie.key !== void 0 && (ue = "" + ie.key), ie.ref !== void 0 && (ae = ie.ref);
    for (Ve in ie)
      De.call(ie, Ve) && !xe.hasOwnProperty(Ve) && (X[Ve] = ie[Ve]);
    if (tt && tt.defaultProps)
      for (Ve in ie = tt.defaultProps, ie)
        X[Ve] === void 0 && (X[Ve] = ie[Ve]);
    return { $$typeof: Y, type: tt, key: ue, ref: ae, props: X, _owner: Ne.current };
  }
  return Dp.Fragment = w, Dp.jsx = g, Dp.jsxs = g, Dp;
}
var bp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KC;
function nb() {
  return KC || (KC = 1, process.env.NODE_ENV !== "production" && function() {
    var B = Am, Y = Symbol.for("react.element"), w = Symbol.for("react.portal"), De = Symbol.for("react.fragment"), Ne = Symbol.for("react.strict_mode"), xe = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), tt = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), Ve = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), ae = Symbol.for("react.offscreen"), Oe = Symbol.iterator, nt = "@@iterator";
    function ut(E) {
      if (E === null || typeof E != "object")
        return null;
      var j = Oe && E[Oe] || E[nt];
      return typeof j == "function" ? j : null;
    }
    var Pt = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ke(E) {
      {
        for (var j = arguments.length, Q = new Array(j > 1 ? j - 1 : 0), me = 1; me < j; me++)
          Q[me - 1] = arguments[me];
        He("error", E, Q);
      }
    }
    function He(E, j, Q) {
      {
        var me = Pt.ReactDebugCurrentFrame, Xe = me.getStackAddendum();
        Xe !== "" && (j += "%s", Q = Q.concat([Xe]));
        var et = Q.map(function(we) {
          return String(we);
        });
        et.unshift("Warning: " + j), Function.prototype.apply.call(console[E], console, et);
      }
    }
    var pt = !1, Qe = !1, _t = !1, je = !1, wn = !1, Vn;
    Vn = Symbol.for("react.module.reference");
    function $t(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === De || E === xe || wn || E === Ne || E === re || E === Ve || je || E === ae || pt || Qe || _t || typeof E == "object" && E !== null && (E.$$typeof === ue || E.$$typeof === X || E.$$typeof === g || E.$$typeof === tt || E.$$typeof === ie || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === Vn || E.getModuleId !== void 0));
    }
    function yt(E, j, Q) {
      var me = E.displayName;
      if (me)
        return me;
      var Xe = j.displayName || j.name || "";
      return Xe !== "" ? Q + "(" + Xe + ")" : Q;
    }
    function _n(E) {
      return E.displayName || "Context";
    }
    function Me(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && Ke("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case De:
          return "Fragment";
        case w:
          return "Portal";
        case xe:
          return "Profiler";
        case Ne:
          return "StrictMode";
        case re:
          return "Suspense";
        case Ve:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case tt:
            var j = E;
            return _n(j) + ".Consumer";
          case g:
            var Q = E;
            return _n(Q._context) + ".Provider";
          case ie:
            return yt(E, E.render, "ForwardRef");
          case X:
            var me = E.displayName || null;
            return me !== null ? me : Me(E.type) || "Memo";
          case ue: {
            var Xe = E, et = Xe._payload, we = Xe._init;
            try {
              return Me(we(et));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var qe = Object.assign, vn = 0, Dt, Zn, I, Ce, te, rt, ot;
    function Dn() {
    }
    Dn.__reactDisabledLog = !0;
    function Jn() {
      {
        if (vn === 0) {
          Dt = console.log, Zn = console.info, I = console.warn, Ce = console.error, te = console.group, rt = console.groupCollapsed, ot = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: Dn,
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
        vn++;
      }
    }
    function Fa() {
      {
        if (vn--, vn === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: qe({}, E, {
              value: Dt
            }),
            info: qe({}, E, {
              value: Zn
            }),
            warn: qe({}, E, {
              value: I
            }),
            error: qe({}, E, {
              value: Ce
            }),
            group: qe({}, E, {
              value: te
            }),
            groupCollapsed: qe({}, E, {
              value: rt
            }),
            groupEnd: qe({}, E, {
              value: ot
            })
          });
        }
        vn < 0 && Ke("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ln = Pt.ReactCurrentDispatcher, qr;
    function Pn(E, j, Q) {
      {
        if (qr === void 0)
          try {
            throw Error();
          } catch (Xe) {
            var me = Xe.stack.trim().match(/\n( *(at )?)/);
            qr = me && me[1] || "";
          }
        return `
` + qr + E;
      }
    }
    var cr = !1, Ha;
    {
      var fr = typeof WeakMap == "function" ? WeakMap : Map;
      Ha = new fr();
    }
    function Xr(E, j) {
      if (!E || cr)
        return "";
      {
        var Q = Ha.get(E);
        if (Q !== void 0)
          return Q;
      }
      var me;
      cr = !0;
      var Xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var et;
      et = ln.current, ln.current = null, Jn();
      try {
        if (j) {
          var we = function() {
            throw Error();
          };
          if (Object.defineProperty(we.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(we, []);
            } catch (In) {
              me = In;
            }
            Reflect.construct(E, [], we);
          } else {
            try {
              we.call();
            } catch (In) {
              me = In;
            }
            E.call(we.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (In) {
            me = In;
          }
          E();
        }
      } catch (In) {
        if (In && me && typeof In.stack == "string") {
          for (var $e = In.stack.split(`
`), yn = me.stack.split(`
`), bt = $e.length - 1, Ht = yn.length - 1; bt >= 1 && Ht >= 0 && $e[bt] !== yn[Ht]; )
            Ht--;
          for (; bt >= 1 && Ht >= 0; bt--, Ht--)
            if ($e[bt] !== yn[Ht]) {
              if (bt !== 1 || Ht !== 1)
                do
                  if (bt--, Ht--, Ht < 0 || $e[bt] !== yn[Ht]) {
                    var pr = `
` + $e[bt].replace(" at new ", " at ");
                    return E.displayName && pr.includes("<anonymous>") && (pr = pr.replace("<anonymous>", E.displayName)), typeof E == "function" && Ha.set(E, pr), pr;
                  }
                while (bt >= 1 && Ht >= 0);
              break;
            }
        }
      } finally {
        cr = !1, ln.current = et, Fa(), Error.prepareStackTrace = Xe;
      }
      var Ni = E ? E.displayName || E.name : "", ct = Ni ? Pn(Ni) : "";
      return typeof E == "function" && Ha.set(E, ct), ct;
    }
    function hn(E, j, Q) {
      return Xr(E, !1);
    }
    function $n(E) {
      var j = E.prototype;
      return !!(j && j.isReactComponent);
    }
    function bn(E, j, Q) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return Xr(E, $n(E));
      if (typeof E == "string")
        return Pn(E);
      switch (E) {
        case re:
          return Pn("Suspense");
        case Ve:
          return Pn("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case ie:
            return hn(E.render);
          case X:
            return bn(E.type, j, Q);
          case ue: {
            var me = E, Xe = me._payload, et = me._init;
            try {
              return bn(et(Xe), j, Q);
            } catch {
            }
          }
        }
      return "";
    }
    var kn = Object.prototype.hasOwnProperty, Yn = {}, Kr = Pt.ReactDebugCurrentFrame;
    function Ta(E) {
      if (E) {
        var j = E._owner, Q = bn(E.type, E._source, j ? j.type : null);
        Kr.setExtraStackFrame(Q);
      } else
        Kr.setExtraStackFrame(null);
    }
    function ri(E, j, Q, me, Xe) {
      {
        var et = Function.call.bind(kn);
        for (var we in E)
          if (et(E, we)) {
            var $e = void 0;
            try {
              if (typeof E[we] != "function") {
                var yn = Error((me || "React class") + ": " + Q + " type `" + we + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[we] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw yn.name = "Invariant Violation", yn;
              }
              $e = E[we](j, we, me, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (bt) {
              $e = bt;
            }
            $e && !($e instanceof Error) && (Ta(Xe), Ke("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", Q, we, typeof $e), Ta(null)), $e instanceof Error && !($e.message in Yn) && (Yn[$e.message] = !0, Ta(Xe), Ke("Failed %s type: %s", Q, $e.message), Ta(null));
          }
      }
    }
    var ja = Array.isArray;
    function Ra(E) {
      return ja(E);
    }
    function Or(E) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, Q = j && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return Q;
      }
    }
    function Ba(E) {
      try {
        return Mr(E), !1;
      } catch {
        return !0;
      }
    }
    function Mr(E) {
      return "" + E;
    }
    function xa(E) {
      if (Ba(E))
        return Ke("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(E)), Mr(E);
    }
    var Jt = Pt.ReactCurrentOwner, Lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Mi, wa, q;
    q = {};
    function ge(E) {
      if (kn.call(E, "ref")) {
        var j = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Pe(E) {
      if (kn.call(E, "key")) {
        var j = Object.getOwnPropertyDescriptor(E, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function vt(E, j) {
      if (typeof E.ref == "string" && Jt.current && j && Jt.current.stateNode !== j) {
        var Q = Me(Jt.current.type);
        q[Q] || (Ke('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Me(Jt.current.type), E.ref), q[Q] = !0);
      }
    }
    function Ft(E, j) {
      {
        var Q = function() {
          Mi || (Mi = !0, Ke("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        Q.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: Q,
          configurable: !0
        });
      }
    }
    function mn(E, j) {
      {
        var Q = function() {
          wa || (wa = !0, Ke("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        Q.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: Q,
          configurable: !0
        });
      }
    }
    var Gt = function(E, j, Q, me, Xe, et, we) {
      var $e = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Y,
        // Built-in properties that belong on the element
        type: E,
        key: j,
        ref: Q,
        props: we,
        // Record the component responsible for creating this element.
        _owner: et
      };
      return $e._store = {}, Object.defineProperty($e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($e, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty($e, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Xe
      }), Object.freeze && (Object.freeze($e.props), Object.freeze($e)), $e;
    };
    function dr(E, j, Q, me, Xe) {
      {
        var et, we = {}, $e = null, yn = null;
        Q !== void 0 && (xa(Q), $e = "" + Q), Pe(j) && (xa(j.key), $e = "" + j.key), ge(j) && (yn = j.ref, vt(j, Xe));
        for (et in j)
          kn.call(j, et) && !Lr.hasOwnProperty(et) && (we[et] = j[et]);
        if (E && E.defaultProps) {
          var bt = E.defaultProps;
          for (et in bt)
            we[et] === void 0 && (we[et] = bt[et]);
        }
        if ($e || yn) {
          var Ht = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          $e && Ft(we, Ht), yn && mn(we, Ht);
        }
        return Gt(E, $e, yn, Xe, me, Jt.current, we);
      }
    }
    var Rt = Pt.ReactCurrentOwner, Nr = Pt.ReactDebugCurrentFrame;
    function Ct(E) {
      if (E) {
        var j = E._owner, Q = bn(E.type, E._source, j ? j.type : null);
        Nr.setExtraStackFrame(Q);
      } else
        Nr.setExtraStackFrame(null);
    }
    var xt;
    xt = !1;
    function Kl(E) {
      return typeof E == "object" && E !== null && E.$$typeof === Y;
    }
    function ol() {
      {
        if (Rt.current) {
          var E = Me(Rt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function Zl(E) {
      return "";
    }
    var lo = {};
    function gs(E) {
      {
        var j = ol();
        if (!j) {
          var Q = typeof E == "string" ? E : E.displayName || E.name;
          Q && (j = `

Check the top-level render call using <` + Q + ">.");
        }
        return j;
      }
    }
    function sl(E, j) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var Q = gs(j);
        if (lo[Q])
          return;
        lo[Q] = !0;
        var me = "";
        E && E._owner && E._owner !== Rt.current && (me = " It was passed a child from " + Me(E._owner.type) + "."), Ct(E), Ke('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, me), Ct(null);
      }
    }
    function Jl(E, j) {
      {
        if (typeof E != "object")
          return;
        if (Ra(E))
          for (var Q = 0; Q < E.length; Q++) {
            var me = E[Q];
            Kl(me) && sl(me, j);
          }
        else if (Kl(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var Xe = ut(E);
          if (typeof Xe == "function" && Xe !== E.entries)
            for (var et = Xe.call(E), we; !(we = et.next()).done; )
              Kl(we.value) && sl(we.value, j);
        }
      }
    }
    function cl(E) {
      {
        var j = E.type;
        if (j == null || typeof j == "string")
          return;
        var Q;
        if (typeof j == "function")
          Q = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === ie || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === X))
          Q = j.propTypes;
        else
          return;
        if (Q) {
          var me = Me(j);
          ri(Q, E.props, "prop", me, E);
        } else if (j.PropTypes !== void 0 && !xt) {
          xt = !0;
          var Xe = Me(j);
          Ke("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Xe || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && Ke("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function eu(E) {
      {
        for (var j = Object.keys(E.props), Q = 0; Q < j.length; Q++) {
          var me = j[Q];
          if (me !== "children" && me !== "key") {
            Ct(E), Ke("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), Ct(null);
            break;
          }
        }
        E.ref !== null && (Ct(E), Ke("Invalid attribute `ref` supplied to `React.Fragment`."), Ct(null));
      }
    }
    var Va = {};
    function ai(E, j, Q, me, Xe, et) {
      {
        var we = $t(E);
        if (!we) {
          var $e = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && ($e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var yn = Zl();
          yn ? $e += yn : $e += ol();
          var bt;
          E === null ? bt = "null" : Ra(E) ? bt = "array" : E !== void 0 && E.$$typeof === Y ? (bt = "<" + (Me(E.type) || "Unknown") + " />", $e = " Did you accidentally export a JSX literal instead of a component?") : bt = typeof E, Ke("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", bt, $e);
        }
        var Ht = dr(E, j, Q, Xe, et);
        if (Ht == null)
          return Ht;
        if (we) {
          var pr = j.children;
          if (pr !== void 0)
            if (me)
              if (Ra(pr)) {
                for (var Ni = 0; Ni < pr.length; Ni++)
                  Jl(pr[Ni], E);
                Object.freeze && Object.freeze(pr);
              } else
                Ke("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Jl(pr, E);
        }
        if (kn.call(j, "key")) {
          var ct = Me(E), In = Object.keys(j).filter(function(Pa) {
            return Pa !== "key";
          }), Ur = In.length > 0 ? "{key: someKey, " + In.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Va[ct + Ur]) {
            var Ye = In.length > 0 ? "{" + In.join(": ..., ") + ": ...}" : "{}";
            Ke(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ur, ct, Ye, ct), Va[ct + Ur] = !0;
          }
        }
        return E === De ? eu(Ht) : cl(Ht), Ht;
      }
    }
    function zr(E, j, Q) {
      return ai(E, j, Q, !0);
    }
    function _a(E, j, Q) {
      return ai(E, j, Q, !1);
    }
    var Li = _a, fl = zr;
    bp.Fragment = De, bp.jsx = Li, bp.jsxs = fl;
  }()), bp;
}
process.env.NODE_ENV === "production" ? p0.exports = tb() : p0.exports = nb();
var Be = p0.exports;
const rb = "_dimmed_17u9q_9", ab = "_modalWrapper_17u9q_15", ib = "_modalBottomWrapper_17u9q_25", lb = "_modal_17u9q_15", ub = "_modalBottom_17u9q_25", ob = "_small_17u9q_51", sb = "_medium_17u9q_55", cb = "_large_17u9q_59", fb = "_modalEnter_17u9q_63", db = "_modalFadeIn_17u9q_1", pb = "_modalExit_17u9q_67", vb = "_modalFadeOut_17u9q_1", hb = "_modalBottomEnter_17u9q_71", mb = "_modalBottomFadeIn_17u9q_1", yb = "_modalBottomExit_17u9q_75", gb = "_modalBottomFadeOut_17u9q_1", Gr = {
  dimmed: rb,
  modalWrapper: ab,
  modalBottomWrapper: ib,
  modal: lb,
  modalBottom: ub,
  small: ob,
  medium: sb,
  large: cb,
  modalEnter: fb,
  modalFadeIn: db,
  modalExit: pb,
  modalFadeOut: vb,
  modalBottomEnter: hb,
  modalBottomFadeIn: mb,
  modalBottomExit: yb,
  modalBottomFadeOut: gb
};
var v0 = { exports: {} }, Ea = {}, Lm = { exports: {} }, f0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZC;
function Sb() {
  return ZC || (ZC = 1, function(B) {
    function Y(I, Ce) {
      var te = I.length;
      I.push(Ce);
      e:
        for (; 0 < te; ) {
          var rt = te - 1 >>> 1, ot = I[rt];
          if (0 < Ne(ot, Ce))
            I[rt] = Ce, I[te] = ot, te = rt;
          else
            break e;
        }
    }
    function w(I) {
      return I.length === 0 ? null : I[0];
    }
    function De(I) {
      if (I.length === 0)
        return null;
      var Ce = I[0], te = I.pop();
      if (te !== Ce) {
        I[0] = te;
        e:
          for (var rt = 0, ot = I.length, Dn = ot >>> 1; rt < Dn; ) {
            var Jn = 2 * (rt + 1) - 1, Fa = I[Jn], ln = Jn + 1, qr = I[ln];
            if (0 > Ne(Fa, te))
              ln < ot && 0 > Ne(qr, Fa) ? (I[rt] = qr, I[ln] = te, rt = ln) : (I[rt] = Fa, I[Jn] = te, rt = Jn);
            else if (ln < ot && 0 > Ne(qr, te))
              I[rt] = qr, I[ln] = te, rt = ln;
            else
              break e;
          }
      }
      return Ce;
    }
    function Ne(I, Ce) {
      var te = I.sortIndex - Ce.sortIndex;
      return te !== 0 ? te : I.id - Ce.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var xe = performance;
      B.unstable_now = function() {
        return xe.now();
      };
    } else {
      var g = Date, tt = g.now();
      B.unstable_now = function() {
        return g.now() - tt;
      };
    }
    var ie = [], re = [], Ve = 1, X = null, ue = 3, ae = !1, Oe = !1, nt = !1, ut = typeof setTimeout == "function" ? setTimeout : null, Pt = typeof clearTimeout == "function" ? clearTimeout : null, Ke = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function He(I) {
      for (var Ce = w(re); Ce !== null; ) {
        if (Ce.callback === null)
          De(re);
        else if (Ce.startTime <= I)
          De(re), Ce.sortIndex = Ce.expirationTime, Y(ie, Ce);
        else
          break;
        Ce = w(re);
      }
    }
    function pt(I) {
      if (nt = !1, He(I), !Oe)
        if (w(ie) !== null)
          Oe = !0, Dt(Qe);
        else {
          var Ce = w(re);
          Ce !== null && Zn(pt, Ce.startTime - I);
        }
    }
    function Qe(I, Ce) {
      Oe = !1, nt && (nt = !1, Pt(wn), wn = -1), ae = !0;
      var te = ue;
      try {
        for (He(Ce), X = w(ie); X !== null && (!(X.expirationTime > Ce) || I && !yt()); ) {
          var rt = X.callback;
          if (typeof rt == "function") {
            X.callback = null, ue = X.priorityLevel;
            var ot = rt(X.expirationTime <= Ce);
            Ce = B.unstable_now(), typeof ot == "function" ? X.callback = ot : X === w(ie) && De(ie), He(Ce);
          } else
            De(ie);
          X = w(ie);
        }
        if (X !== null)
          var Dn = !0;
        else {
          var Jn = w(re);
          Jn !== null && Zn(pt, Jn.startTime - Ce), Dn = !1;
        }
        return Dn;
      } finally {
        X = null, ue = te, ae = !1;
      }
    }
    var _t = !1, je = null, wn = -1, Vn = 5, $t = -1;
    function yt() {
      return !(B.unstable_now() - $t < Vn);
    }
    function _n() {
      if (je !== null) {
        var I = B.unstable_now();
        $t = I;
        var Ce = !0;
        try {
          Ce = je(!0, I);
        } finally {
          Ce ? Me() : (_t = !1, je = null);
        }
      } else
        _t = !1;
    }
    var Me;
    if (typeof Ke == "function")
      Me = function() {
        Ke(_n);
      };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), vn = qe.port2;
      qe.port1.onmessage = _n, Me = function() {
        vn.postMessage(null);
      };
    } else
      Me = function() {
        ut(_n, 0);
      };
    function Dt(I) {
      je = I, _t || (_t = !0, Me());
    }
    function Zn(I, Ce) {
      wn = ut(function() {
        I(B.unstable_now());
      }, Ce);
    }
    B.unstable_IdlePriority = 5, B.unstable_ImmediatePriority = 1, B.unstable_LowPriority = 4, B.unstable_NormalPriority = 3, B.unstable_Profiling = null, B.unstable_UserBlockingPriority = 2, B.unstable_cancelCallback = function(I) {
      I.callback = null;
    }, B.unstable_continueExecution = function() {
      Oe || ae || (Oe = !0, Dt(Qe));
    }, B.unstable_forceFrameRate = function(I) {
      0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Vn = 0 < I ? Math.floor(1e3 / I) : 5;
    }, B.unstable_getCurrentPriorityLevel = function() {
      return ue;
    }, B.unstable_getFirstCallbackNode = function() {
      return w(ie);
    }, B.unstable_next = function(I) {
      switch (ue) {
        case 1:
        case 2:
        case 3:
          var Ce = 3;
          break;
        default:
          Ce = ue;
      }
      var te = ue;
      ue = Ce;
      try {
        return I();
      } finally {
        ue = te;
      }
    }, B.unstable_pauseExecution = function() {
    }, B.unstable_requestPaint = function() {
    }, B.unstable_runWithPriority = function(I, Ce) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var te = ue;
      ue = I;
      try {
        return Ce();
      } finally {
        ue = te;
      }
    }, B.unstable_scheduleCallback = function(I, Ce, te) {
      var rt = B.unstable_now();
      switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? rt + te : rt) : te = rt, I) {
        case 1:
          var ot = -1;
          break;
        case 2:
          ot = 250;
          break;
        case 5:
          ot = 1073741823;
          break;
        case 4:
          ot = 1e4;
          break;
        default:
          ot = 5e3;
      }
      return ot = te + ot, I = { id: Ve++, callback: Ce, priorityLevel: I, startTime: te, expirationTime: ot, sortIndex: -1 }, te > rt ? (I.sortIndex = te, Y(re, I), w(ie) === null && I === w(re) && (nt ? (Pt(wn), wn = -1) : nt = !0, Zn(pt, te - rt))) : (I.sortIndex = ot, Y(ie, I), Oe || ae || (Oe = !0, Dt(Qe))), I;
    }, B.unstable_shouldYield = yt, B.unstable_wrapCallback = function(I) {
      var Ce = ue;
      return function() {
        var te = ue;
        ue = Ce;
        try {
          return I.apply(this, arguments);
        } finally {
          ue = te;
        }
      };
    };
  }(f0)), f0;
}
var d0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JC;
function Eb() {
  return JC || (JC = 1, function(B) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Y = !1, w = !1, De = 5;
      function Ne(q, ge) {
        var Pe = q.length;
        q.push(ge), tt(q, ge, Pe);
      }
      function xe(q) {
        return q.length === 0 ? null : q[0];
      }
      function g(q) {
        if (q.length === 0)
          return null;
        var ge = q[0], Pe = q.pop();
        return Pe !== ge && (q[0] = Pe, ie(q, Pe, 0)), ge;
      }
      function tt(q, ge, Pe) {
        for (var vt = Pe; vt > 0; ) {
          var Ft = vt - 1 >>> 1, mn = q[Ft];
          if (re(mn, ge) > 0)
            q[Ft] = ge, q[vt] = mn, vt = Ft;
          else
            return;
        }
      }
      function ie(q, ge, Pe) {
        for (var vt = Pe, Ft = q.length, mn = Ft >>> 1; vt < mn; ) {
          var Gt = (vt + 1) * 2 - 1, dr = q[Gt], Rt = Gt + 1, Nr = q[Rt];
          if (re(dr, ge) < 0)
            Rt < Ft && re(Nr, dr) < 0 ? (q[vt] = Nr, q[Rt] = ge, vt = Rt) : (q[vt] = dr, q[Gt] = ge, vt = Gt);
          else if (Rt < Ft && re(Nr, ge) < 0)
            q[vt] = Nr, q[Rt] = ge, vt = Rt;
          else
            return;
        }
      }
      function re(q, ge) {
        var Pe = q.sortIndex - ge.sortIndex;
        return Pe !== 0 ? Pe : q.id - ge.id;
      }
      var Ve = 1, X = 2, ue = 3, ae = 4, Oe = 5;
      function nt(q, ge) {
      }
      var ut = typeof performance == "object" && typeof performance.now == "function";
      if (ut) {
        var Pt = performance;
        B.unstable_now = function() {
          return Pt.now();
        };
      } else {
        var Ke = Date, He = Ke.now();
        B.unstable_now = function() {
          return Ke.now() - He;
        };
      }
      var pt = 1073741823, Qe = -1, _t = 250, je = 5e3, wn = 1e4, Vn = pt, $t = [], yt = [], _n = 1, Me = null, qe = ue, vn = !1, Dt = !1, Zn = !1, I = typeof setTimeout == "function" ? setTimeout : null, Ce = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function rt(q) {
        for (var ge = xe(yt); ge !== null; ) {
          if (ge.callback === null)
            g(yt);
          else if (ge.startTime <= q)
            g(yt), ge.sortIndex = ge.expirationTime, Ne($t, ge);
          else
            return;
          ge = xe(yt);
        }
      }
      function ot(q) {
        if (Zn = !1, rt(q), !Dt)
          if (xe($t) !== null)
            Dt = !0, xa(Dn);
          else {
            var ge = xe(yt);
            ge !== null && Jt(ot, ge.startTime - q);
          }
      }
      function Dn(q, ge) {
        Dt = !1, Zn && (Zn = !1, Lr()), vn = !0;
        var Pe = qe;
        try {
          var vt;
          if (!w)
            return Jn(q, ge);
        } finally {
          Me = null, qe = Pe, vn = !1;
        }
      }
      function Jn(q, ge) {
        var Pe = ge;
        for (rt(Pe), Me = xe($t); Me !== null && !Y && !(Me.expirationTime > Pe && (!q || Ta())); ) {
          var vt = Me.callback;
          if (typeof vt == "function") {
            Me.callback = null, qe = Me.priorityLevel;
            var Ft = Me.expirationTime <= Pe, mn = vt(Ft);
            Pe = B.unstable_now(), typeof mn == "function" ? Me.callback = mn : Me === xe($t) && g($t), rt(Pe);
          } else
            g($t);
          Me = xe($t);
        }
        if (Me !== null)
          return !0;
        var Gt = xe(yt);
        return Gt !== null && Jt(ot, Gt.startTime - Pe), !1;
      }
      function Fa(q, ge) {
        switch (q) {
          case Ve:
          case X:
          case ue:
          case ae:
          case Oe:
            break;
          default:
            q = ue;
        }
        var Pe = qe;
        qe = q;
        try {
          return ge();
        } finally {
          qe = Pe;
        }
      }
      function ln(q) {
        var ge;
        switch (qe) {
          case Ve:
          case X:
          case ue:
            ge = ue;
            break;
          default:
            ge = qe;
            break;
        }
        var Pe = qe;
        qe = ge;
        try {
          return q();
        } finally {
          qe = Pe;
        }
      }
      function qr(q) {
        var ge = qe;
        return function() {
          var Pe = qe;
          qe = ge;
          try {
            return q.apply(this, arguments);
          } finally {
            qe = Pe;
          }
        };
      }
      function Pn(q, ge, Pe) {
        var vt = B.unstable_now(), Ft;
        if (typeof Pe == "object" && Pe !== null) {
          var mn = Pe.delay;
          typeof mn == "number" && mn > 0 ? Ft = vt + mn : Ft = vt;
        } else
          Ft = vt;
        var Gt;
        switch (q) {
          case Ve:
            Gt = Qe;
            break;
          case X:
            Gt = _t;
            break;
          case Oe:
            Gt = Vn;
            break;
          case ae:
            Gt = wn;
            break;
          case ue:
          default:
            Gt = je;
            break;
        }
        var dr = Ft + Gt, Rt = {
          id: _n++,
          callback: ge,
          priorityLevel: q,
          startTime: Ft,
          expirationTime: dr,
          sortIndex: -1
        };
        return Ft > vt ? (Rt.sortIndex = Ft, Ne(yt, Rt), xe($t) === null && Rt === xe(yt) && (Zn ? Lr() : Zn = !0, Jt(ot, Ft - vt))) : (Rt.sortIndex = dr, Ne($t, Rt), !Dt && !vn && (Dt = !0, xa(Dn))), Rt;
      }
      function cr() {
      }
      function Ha() {
        !Dt && !vn && (Dt = !0, xa(Dn));
      }
      function fr() {
        return xe($t);
      }
      function Xr(q) {
        q.callback = null;
      }
      function hn() {
        return qe;
      }
      var $n = !1, bn = null, kn = -1, Yn = De, Kr = -1;
      function Ta() {
        var q = B.unstable_now() - Kr;
        return !(q < Yn);
      }
      function ri() {
      }
      function ja(q) {
        if (q < 0 || q > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        q > 0 ? Yn = Math.floor(1e3 / q) : Yn = De;
      }
      var Ra = function() {
        if (bn !== null) {
          var q = B.unstable_now();
          Kr = q;
          var ge = !0, Pe = !0;
          try {
            Pe = bn(ge, q);
          } finally {
            Pe ? Or() : ($n = !1, bn = null);
          }
        } else
          $n = !1;
      }, Or;
      if (typeof te == "function")
        Or = function() {
          te(Ra);
        };
      else if (typeof MessageChannel < "u") {
        var Ba = new MessageChannel(), Mr = Ba.port2;
        Ba.port1.onmessage = Ra, Or = function() {
          Mr.postMessage(null);
        };
      } else
        Or = function() {
          I(Ra, 0);
        };
      function xa(q) {
        bn = q, $n || ($n = !0, Or());
      }
      function Jt(q, ge) {
        kn = I(function() {
          q(B.unstable_now());
        }, ge);
      }
      function Lr() {
        Ce(kn), kn = -1;
      }
      var Mi = ri, wa = null;
      B.unstable_IdlePriority = Oe, B.unstable_ImmediatePriority = Ve, B.unstable_LowPriority = ae, B.unstable_NormalPriority = ue, B.unstable_Profiling = wa, B.unstable_UserBlockingPriority = X, B.unstable_cancelCallback = Xr, B.unstable_continueExecution = Ha, B.unstable_forceFrameRate = ja, B.unstable_getCurrentPriorityLevel = hn, B.unstable_getFirstCallbackNode = fr, B.unstable_next = ln, B.unstable_pauseExecution = cr, B.unstable_requestPaint = Mi, B.unstable_runWithPriority = Fa, B.unstable_scheduleCallback = Pn, B.unstable_shouldYield = Ta, B.unstable_wrapCallback = qr, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(d0)), d0;
}
var eT;
function iT() {
  return eT || (eT = 1, process.env.NODE_ENV === "production" ? Lm.exports = Sb() : Lm.exports = Eb()), Lm.exports;
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
var tT;
function Cb() {
  if (tT)
    return Ea;
  tT = 1;
  var B = Am, Y = iT();
  function w(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var De = /* @__PURE__ */ new Set(), Ne = {};
  function xe(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (Ne[n] = r, n = 0; n < r.length; n++)
      De.add(r[n]);
  }
  var tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ie = Object.prototype.hasOwnProperty, re = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ve = {}, X = {};
  function ue(n) {
    return ie.call(X, n) ? !0 : ie.call(Ve, n) ? !1 : re.test(n) ? X[n] = !0 : (Ve[n] = !0, !1);
  }
  function ae(n, r, l, o) {
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
  function Oe(n, r, l, o) {
    if (r === null || typeof r > "u" || ae(n, r, l, o))
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
  function nt(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var ut = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ut[n] = new nt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ut[r] = new nt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ut[n] = new nt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ut[n] = new nt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ut[n] = new nt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ut[n] = new nt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ut[n] = new nt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ut[n] = new nt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ut[n] = new nt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Pt = /[\-:]([a-z])/g;
  function Ke(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Pt,
      Ke
    );
    ut[r] = new nt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Pt, Ke);
    ut[r] = new nt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Pt, Ke);
    ut[r] = new nt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ut[n] = new nt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ut.xlinkHref = new nt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ut[n] = new nt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function He(n, r, l, o) {
    var c = ut.hasOwnProperty(r) ? ut[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Oe(r, l, c, o) && (l = null), o || c === null ? ue(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var pt = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Qe = Symbol.for("react.element"), _t = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), wn = Symbol.for("react.strict_mode"), Vn = Symbol.for("react.profiler"), $t = Symbol.for("react.provider"), yt = Symbol.for("react.context"), _n = Symbol.for("react.forward_ref"), Me = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), vn = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Zn = Symbol.for("react.offscreen"), I = Symbol.iterator;
  function Ce(n) {
    return n === null || typeof n != "object" ? null : (n = I && n[I] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var te = Object.assign, rt;
  function ot(n) {
    if (rt === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        rt = r && r[1] || "";
      }
    return `
` + rt + n;
  }
  var Dn = !1;
  function Jn(n, r) {
    if (!n || Dn)
      return "";
    Dn = !0;
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
          } catch (M) {
            var o = M;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (M) {
            o = M;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (M) {
          o = M;
        }
        n();
      }
    } catch (M) {
      if (M && o && typeof M.stack == "string") {
        for (var c = M.stack.split(`
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
      Dn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ot(n) : "";
  }
  function Fa(n) {
    switch (n.tag) {
      case 5:
        return ot(n.type);
      case 16:
        return ot("Lazy");
      case 13:
        return ot("Suspense");
      case 19:
        return ot("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Jn(n.type, !1), n;
      case 11:
        return n = Jn(n.type.render, !1), n;
      case 1:
        return n = Jn(n.type, !0), n;
      default:
        return "";
    }
  }
  function ln(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case je:
        return "Fragment";
      case _t:
        return "Portal";
      case Vn:
        return "Profiler";
      case wn:
        return "StrictMode";
      case Me:
        return "Suspense";
      case qe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case yt:
          return (n.displayName || "Context") + ".Consumer";
        case $t:
          return (n._context.displayName || "Context") + ".Provider";
        case _n:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case vn:
          return r = n.displayName || null, r !== null ? r : ln(n.type) || "Memo";
        case Dt:
          r = n._payload, n = n._init;
          try {
            return ln(n(r));
          } catch {
          }
      }
    return null;
  }
  function qr(n) {
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
        return ln(r);
      case 8:
        return r === wn ? "StrictMode" : "Mode";
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
  function Pn(n) {
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
  function cr(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ha(n) {
    var r = cr(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function fr(n) {
    n._valueTracker || (n._valueTracker = Ha(n));
  }
  function Xr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = cr(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function hn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function $n(n, r) {
    var l = r.checked;
    return te({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function bn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Pn(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function kn(n, r) {
    r = r.checked, r != null && He(n, "checked", r, !1);
  }
  function Yn(n, r) {
    kn(n, r);
    var l = Pn(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ta(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ta(n, r.type, Pn(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Kr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ta(n, r, l) {
    (r !== "number" || hn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ri = Array.isArray;
  function ja(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Pn(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ra(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(w(91));
    return te({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Or(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(w(92));
        if (ri(l)) {
          if (1 < l.length)
            throw Error(w(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Pn(l) };
  }
  function Ba(n, r) {
    var l = Pn(r.value), o = Pn(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Mr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function xa(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Jt(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? xa(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Lr, Mi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Lr = Lr || document.createElement("div"), Lr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Lr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function wa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var q = {
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
  Object.keys(q).forEach(function(n) {
    ge.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), q[r] = q[n];
    });
  });
  function Pe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || q.hasOwnProperty(n) && q[n] ? ("" + r).trim() : r + "px";
  }
  function vt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = Pe(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Ft = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function mn(n, r) {
    if (r) {
      if (Ft[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(w(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(w(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(w(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(w(62));
    }
  }
  function Gt(n, r) {
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
  var dr = null;
  function Rt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Nr = null, Ct = null, xt = null;
  function Kl(n) {
    if (n = ko(n)) {
      if (typeof Nr != "function")
        throw Error(w(280));
      var r = n.stateNode;
      r && (r = Se(r), Nr(n.stateNode, n.type, r));
    }
  }
  function ol(n) {
    Ct ? xt ? xt.push(n) : xt = [n] : Ct = n;
  }
  function Zl() {
    if (Ct) {
      var n = Ct, r = xt;
      if (xt = Ct = null, Kl(n), r)
        for (n = 0; n < r.length; n++)
          Kl(r[n]);
    }
  }
  function lo(n, r) {
    return n(r);
  }
  function gs() {
  }
  var sl = !1;
  function Jl(n, r, l) {
    if (sl)
      return n(r, l);
    sl = !0;
    try {
      return lo(n, r, l);
    } finally {
      sl = !1, (Ct !== null || xt !== null) && (gs(), Zl());
    }
  }
  function cl(n, r) {
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
      throw Error(w(231, r, typeof l));
    return l;
  }
  var eu = !1;
  if (tt)
    try {
      var Va = {};
      Object.defineProperty(Va, "passive", { get: function() {
        eu = !0;
      } }), window.addEventListener("test", Va, Va), window.removeEventListener("test", Va, Va);
    } catch {
      eu = !1;
    }
  function ai(n, r, l, o, c, d, h, S, C) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, M);
    } catch (H) {
      this.onError(H);
    }
  }
  var zr = !1, _a = null, Li = !1, fl = null, E = { onError: function(n) {
    zr = !0, _a = n;
  } };
  function j(n, r, l, o, c, d, h, S, C) {
    zr = !1, _a = null, ai.apply(E, arguments);
  }
  function Q(n, r, l, o, c, d, h, S, C) {
    if (j.apply(this, arguments), zr) {
      if (zr) {
        var M = _a;
        zr = !1, _a = null;
      } else
        throw Error(w(198));
      Li || (Li = !0, fl = M);
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
  function Xe(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function et(n) {
    if (me(n) !== n)
      throw Error(w(188));
  }
  function we(n) {
    var r = n.alternate;
    if (!r) {
      if (r = me(n), r === null)
        throw Error(w(188));
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
            return et(c), n;
          if (d === o)
            return et(c), r;
          d = d.sibling;
        }
        throw Error(w(188));
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
            throw Error(w(189));
        }
      }
      if (l.alternate !== o)
        throw Error(w(190));
    }
    if (l.tag !== 3)
      throw Error(w(188));
    return l.stateNode.current === l ? n : r;
  }
  function $e(n) {
    return n = we(n), n !== null ? yn(n) : null;
  }
  function yn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = yn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var bt = Y.unstable_scheduleCallback, Ht = Y.unstable_cancelCallback, pr = Y.unstable_shouldYield, Ni = Y.unstable_requestPaint, ct = Y.unstable_now, In = Y.unstable_getCurrentPriorityLevel, Ur = Y.unstable_ImmediatePriority, Ye = Y.unstable_UserBlockingPriority, Pa = Y.unstable_NormalPriority, kp = Y.unstable_LowPriority, mf = Y.unstable_IdlePriority, uo = null, Da = null;
  function Op(n) {
    if (Da && typeof Da.onCommitFiberRoot == "function")
      try {
        Da.onCommitFiberRoot(uo, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Zr = Math.clz32 ? Math.clz32 : Fm, Mp = Math.log, Lp = Math.LN2;
  function Fm(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Mp(n) / Lp | 0) | 0;
  }
  var Ss = 64, tu = 4194304;
  function dl(n) {
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
  function ba(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var S = h & ~c;
      S !== 0 ? o = dl(S) : (d &= h, d !== 0 && (o = dl(d)));
    } else
      h = l & ~c, h !== 0 ? o = dl(h) : d !== 0 && (o = dl(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - Zr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function yf(n, r) {
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
  function Es(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - Zr(d), S = 1 << h, C = c[h];
      C === -1 ? (!(S & l) || S & o) && (c[h] = yf(S, r)) : C <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function gf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Cs() {
    var n = Ss;
    return Ss <<= 1, !(Ss & 4194240) && (Ss = 64), n;
  }
  function Sf(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function pl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Zr(r), n[r] = l;
  }
  function Hm(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Zr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function oo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Zr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var ht = 0;
  function Ef(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Np, Ts, mt, zp, Cf, Ue = !1, so = [], en = null, Jr = null, ea = null, co = /* @__PURE__ */ new Map(), un = /* @__PURE__ */ new Map(), gt = [], jm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ka(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        en = null;
        break;
      case "dragenter":
      case "dragleave":
        Jr = null;
        break;
      case "mouseover":
      case "mouseout":
        ea = null;
        break;
      case "pointerover":
      case "pointerout":
        co.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        un.delete(r.pointerId);
    }
  }
  function Qn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ko(r), r !== null && Ts(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function zi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return en = Qn(en, n, r, l, o, c), !0;
      case "dragenter":
        return Jr = Qn(Jr, n, r, l, o, c), !0;
      case "mouseover":
        return ea = Qn(ea, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return co.set(d, Qn(co.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, un.set(d, Qn(un.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Up(n) {
    var r = na(n.target);
    if (r !== null) {
      var l = me(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Xe(l), r !== null) {
            n.blockedOn = r, Cf(n.priority, function() {
              mt(l);
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
  function nu(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ws(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        dr = o, l.target.dispatchEvent(o), dr = null;
      } else
        return r = ko(l), r !== null && Ts(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Tf(n, r, l) {
    nu(n) && l.delete(r);
  }
  function Ap() {
    Ue = !1, en !== null && nu(en) && (en = null), Jr !== null && nu(Jr) && (Jr = null), ea !== null && nu(ea) && (ea = null), co.forEach(Tf), un.forEach(Tf);
  }
  function fo(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ue || (Ue = !0, Y.unstable_scheduleCallback(Y.unstable_NormalPriority, Ap)));
  }
  function po(n) {
    function r(c) {
      return fo(c, n);
    }
    if (0 < so.length) {
      fo(so[0], n);
      for (var l = 1; l < so.length; l++) {
        var o = so[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (en !== null && fo(en, n), Jr !== null && fo(Jr, n), ea !== null && fo(ea, n), co.forEach(r), un.forEach(r), l = 0; l < gt.length; l++)
      o = gt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < gt.length && (l = gt[0], l.blockedOn === null); )
      Up(l), l.blockedOn === null && gt.shift();
  }
  var ru = pt.ReactCurrentBatchConfig, vl = !0;
  function Fp(n, r, l, o) {
    var c = ht, d = ru.transition;
    ru.transition = null;
    try {
      ht = 1, xs(n, r, l, o);
    } finally {
      ht = c, ru.transition = d;
    }
  }
  function Rs(n, r, l, o) {
    var c = ht, d = ru.transition;
    ru.transition = null;
    try {
      ht = 4, xs(n, r, l, o);
    } finally {
      ht = c, ru.transition = d;
    }
  }
  function xs(n, r, l, o) {
    if (vl) {
      var c = ws(n, r, l, o);
      if (c === null)
        Fs(n, r, o, vo, l), ka(n, o);
      else if (zi(c, n, r, l, o))
        o.stopPropagation();
      else if (ka(n, o), r & 4 && -1 < jm.indexOf(n)) {
        for (; c !== null; ) {
          var d = ko(c);
          if (d !== null && Np(d), d = ws(n, r, l, o), d === null && Fs(n, r, o, vo, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        Fs(n, r, o, null, l);
    }
  }
  var vo = null;
  function ws(n, r, l, o) {
    if (vo = null, n = Rt(o), n = na(n), n !== null)
      if (r = me(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Xe(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return vo = n, null;
  }
  function Rf(n) {
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
        switch (In()) {
          case Ur:
            return 1;
          case Ye:
            return 4;
          case Pa:
          case kp:
            return 16;
          case mf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ii = null, ho = null, mo = null;
  function xf() {
    if (mo)
      return mo;
    var n, r = ho, l = r.length, o, c = "value" in ii ? ii.value : ii.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++)
      ;
    return mo = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function au(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function yo() {
    return !0;
  }
  function Hp() {
    return !1;
  }
  function Ar(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n)
        n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? yo : Hp, this.isPropagationStopped = Hp, this;
    }
    return te(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = yo);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = yo);
    }, persist: function() {
    }, isPersistent: yo }), r;
  }
  var Ui = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, _s = Ar(Ui), iu = te({}, Ui, { view: 0, detail: 0 }), jp = Ar(iu), Ds, wf, go, gn = te({}, iu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: kf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== go && (go && n.type === "mousemove" ? (Ds = n.screenX - go.screenX, wf = n.screenY - go.screenY) : wf = Ds = 0, go = n), Ds);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : wf;
  } }), bs = Ar(gn), Bp = te({}, gn, { dataTransfer: 0 }), Vp = Ar(Bp), Bm = te({}, iu, { relatedTarget: 0 }), Ai = Ar(Bm), _f = te({}, Ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Pp = Ar(_f), Vm = te({}, Ui, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Pm = Ar(Vm), $m = te({}, Ui, { data: 0 }), Df = Ar($m), bf = {
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
  }, $p = {
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
  }, Yp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ip(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Yp[n]) ? !!r[n] : !1;
  }
  function kf() {
    return Ip;
  }
  var li = te({}, iu, { key: function(n) {
    if (n.key) {
      var r = bf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = au(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? $p[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: kf, charCode: function(n) {
    return n.type === "keypress" ? au(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? au(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ym = Ar(li), Of = te({}, gn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ks = Ar(Of), Mf = te({}, iu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: kf }), Im = Ar(Mf), Os = te({}, Ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Qp = Ar(Os), vr = te({}, gn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ui = Ar(vr), tn = [9, 13, 27, 32], Oa = tt && "CompositionEvent" in window, hl = null;
  tt && "documentMode" in document && (hl = document.documentMode);
  var Ms = tt && "TextEvent" in window && !hl, Wp = tt && (!Oa || hl && 8 < hl && 11 >= hl), lu = " ", Gp = !1;
  function qp(n, r) {
    switch (n) {
      case "keyup":
        return tn.indexOf(r.keyCode) !== -1;
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
  var uu = !1;
  function Qm(n, r) {
    switch (n) {
      case "compositionend":
        return Ls(r);
      case "keypress":
        return r.which !== 32 ? null : (Gp = !0, lu);
      case "textInput":
        return n = r.data, n === lu && Gp ? null : n;
      default:
        return null;
    }
  }
  function Wm(n, r) {
    if (uu)
      return n === "compositionend" || !Oa && qp(n, r) ? (n = xf(), mo = ho = ii = null, uu = !1, n) : null;
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
        return Wp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Xp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Kp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Xp[n.type] : r === "textarea";
  }
  function Zp(n, r, l, o) {
    ol(o), r = _o(r, "onChange"), 0 < r.length && (l = new _s("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var So = null, ou = null;
  function su(n) {
    As(n, 0);
  }
  function cu(n) {
    var r = du(n);
    if (Xr(r))
      return n;
  }
  function Jp(n, r) {
    if (n === "change")
      return r;
  }
  var Lf = !1;
  if (tt) {
    var Nf;
    if (tt) {
      var zf = "oninput" in document;
      if (!zf) {
        var ev = document.createElement("div");
        ev.setAttribute("oninput", "return;"), zf = typeof ev.oninput == "function";
      }
      Nf = zf;
    } else
      Nf = !1;
    Lf = Nf && (!document.documentMode || 9 < document.documentMode);
  }
  function tv() {
    So && (So.detachEvent("onpropertychange", nv), ou = So = null);
  }
  function nv(n) {
    if (n.propertyName === "value" && cu(ou)) {
      var r = [];
      Zp(r, ou, n, Rt(n)), Jl(su, r);
    }
  }
  function Gm(n, r, l) {
    n === "focusin" ? (tv(), So = r, ou = l, So.attachEvent("onpropertychange", nv)) : n === "focusout" && tv();
  }
  function qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return cu(ou);
  }
  function Xm(n, r) {
    if (n === "click")
      return cu(r);
  }
  function rv(n, r) {
    if (n === "input" || n === "change")
      return cu(r);
  }
  function Km(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ta = typeof Object.is == "function" ? Object.is : Km;
  function Eo(n, r) {
    if (ta(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ie.call(r, c) || !ta(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function av(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function iv(n, r) {
    var l = av(n);
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
      l = av(l);
    }
  }
  function lv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? lv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ns() {
    for (var n = window, r = hn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = hn(n.document);
    }
    return r;
  }
  function oi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function zs(n) {
    var r = Ns(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && lv(l.ownerDocument.documentElement, l)) {
      if (o !== null && oi(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = iv(l, d);
          var h = iv(
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
  var uv = tt && "documentMode" in document && 11 >= document.documentMode, Ma = null, Uf = null, Co = null, Af = !1;
  function ov(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Af || Ma == null || Ma !== hn(o) || (o = Ma, "selectionStart" in o && oi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Co && Eo(Co, o) || (Co = o, o = _o(Uf, "onSelect"), 0 < o.length && (r = new _s("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ma)));
  }
  function Us(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var ml = { animationend: Us("Animation", "AnimationEnd"), animationiteration: Us("Animation", "AnimationIteration"), animationstart: Us("Animation", "AnimationStart"), transitionend: Us("Transition", "TransitionEnd") }, Ff = {}, Hf = {};
  tt && (Hf = document.createElement("div").style, "AnimationEvent" in window || (delete ml.animationend.animation, delete ml.animationiteration.animation, delete ml.animationstart.animation), "TransitionEvent" in window || delete ml.transitionend.transition);
  function Sn(n) {
    if (Ff[n])
      return Ff[n];
    if (!ml[n])
      return n;
    var r = ml[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Hf)
        return Ff[n] = r[l];
    return n;
  }
  var jf = Sn("animationend"), sv = Sn("animationiteration"), cv = Sn("animationstart"), fv = Sn("transitionend"), dv = /* @__PURE__ */ new Map(), pv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function si(n, r) {
    dv.set(n, r), xe(r, [n]);
  }
  for (var To = 0; To < pv.length; To++) {
    var yl = pv[To], Zm = yl.toLowerCase(), Ro = yl[0].toUpperCase() + yl.slice(1);
    si(Zm, "on" + Ro);
  }
  si(jf, "onAnimationEnd"), si(sv, "onAnimationIteration"), si(cv, "onAnimationStart"), si("dblclick", "onDoubleClick"), si("focusin", "onFocus"), si("focusout", "onBlur"), si(fv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), xe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), xe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), xe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), xe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), xe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), xe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));
  function vv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Q(o, r, void 0, n), n.currentTarget = null;
  }
  function As(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var h = o.length - 1; 0 <= h; h--) {
            var S = o[h], C = S.instance, M = S.currentTarget;
            if (S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            vv(c, S, M), d = C;
          }
        else
          for (h = 0; h < o.length; h++) {
            if (S = o[h], C = S.instance, M = S.currentTarget, S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            vv(c, S, M), d = C;
          }
      }
    }
    if (Li)
      throw n = fl, Li = !1, fl = null, n;
  }
  function Tt(n, r) {
    var l = r[Qf];
    l === void 0 && (l = r[Qf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (hv(r, n, 2, !1), l.add(o));
  }
  function Fi(n, r, l) {
    var o = 0;
    r && (o |= 4), hv(l, n, o, r);
  }
  var ci = "_reactListening" + Math.random().toString(36).slice(2);
  function fu(n) {
    if (!n[ci]) {
      n[ci] = !0, De.forEach(function(l) {
        l !== "selectionchange" && (Jm.has(l) || Fi(l, !1, n), Fi(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ci] || (r[ci] = !0, Fi("selectionchange", !1, r));
    }
  }
  function hv(n, r, l, o) {
    switch (Rf(r)) {
      case 1:
        var c = Fp;
        break;
      case 4:
        c = Rs;
        break;
      default:
        c = xs;
    }
    l = c.bind(null, r, l, n), c = void 0, !eu || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Fs(n, r, l, o, c) {
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
              if (h = na(S), h === null)
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
    Jl(function() {
      var M = d, H = Rt(l), V = [];
      e: {
        var F = dv.get(n);
        if (F !== void 0) {
          var J = _s, oe = n;
          switch (n) {
            case "keypress":
              if (au(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              J = Ym;
              break;
            case "focusin":
              oe = "focus", J = Ai;
              break;
            case "focusout":
              oe = "blur", J = Ai;
              break;
            case "beforeblur":
            case "afterblur":
              J = Ai;
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
              J = bs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = Vp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = Im;
              break;
            case jf:
            case sv:
            case cv:
              J = Pp;
              break;
            case fv:
              J = Qp;
              break;
            case "scroll":
              J = jp;
              break;
            case "wheel":
              J = ui;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = Pm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = ks;
          }
          var fe = (r & 4) !== 0, Kt = !fe && n === "scroll", _ = fe ? F !== null ? F + "Capture" : null : F;
          fe = [];
          for (var R = M, k; R !== null; ) {
            k = R;
            var $ = k.stateNode;
            if (k.tag === 5 && $ !== null && (k = $, _ !== null && ($ = cl(R, _), $ != null && fe.push(wo(R, $, k)))), Kt)
              break;
            R = R.return;
          }
          0 < fe.length && (F = new J(F, oe, null, l, H), V.push({ event: F, listeners: fe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (F = n === "mouseover" || n === "pointerover", J = n === "mouseout" || n === "pointerout", F && l !== dr && (oe = l.relatedTarget || l.fromElement) && (na(oe) || oe[fi]))
            break e;
          if ((J || F) && (F = H.window === H ? H : (F = H.ownerDocument) ? F.defaultView || F.parentWindow : window, J ? (oe = l.relatedTarget || l.toElement, J = M, oe = oe ? na(oe) : null, oe !== null && (Kt = me(oe), oe !== Kt || oe.tag !== 5 && oe.tag !== 6) && (oe = null)) : (J = null, oe = M), J !== oe)) {
            if (fe = bs, $ = "onMouseLeave", _ = "onMouseEnter", R = "mouse", (n === "pointerout" || n === "pointerover") && (fe = ks, $ = "onPointerLeave", _ = "onPointerEnter", R = "pointer"), Kt = J == null ? F : du(J), k = oe == null ? F : du(oe), F = new fe($, R + "leave", J, l, H), F.target = Kt, F.relatedTarget = k, $ = null, na(H) === M && (fe = new fe(_, R + "enter", oe, l, H), fe.target = k, fe.relatedTarget = Kt, $ = fe), Kt = $, J && oe)
              t: {
                for (fe = J, _ = oe, R = 0, k = fe; k; k = gl(k))
                  R++;
                for (k = 0, $ = _; $; $ = gl($))
                  k++;
                for (; 0 < R - k; )
                  fe = gl(fe), R--;
                for (; 0 < k - R; )
                  _ = gl(_), k--;
                for (; R--; ) {
                  if (fe === _ || _ !== null && fe === _.alternate)
                    break t;
                  fe = gl(fe), _ = gl(_);
                }
                fe = null;
              }
            else
              fe = null;
            J !== null && Bf(V, F, J, fe, !1), oe !== null && Kt !== null && Bf(V, Kt, oe, fe, !0);
          }
        }
        e: {
          if (F = M ? du(M) : window, J = F.nodeName && F.nodeName.toLowerCase(), J === "select" || J === "input" && F.type === "file")
            var pe = Jp;
          else if (Kp(F))
            if (Lf)
              pe = rv;
            else {
              pe = qm;
              var Te = Gm;
            }
          else
            (J = F.nodeName) && J.toLowerCase() === "input" && (F.type === "checkbox" || F.type === "radio") && (pe = Xm);
          if (pe && (pe = pe(n, M))) {
            Zp(V, pe, l, H);
            break e;
          }
          Te && Te(n, F, M), n === "focusout" && (Te = F._wrapperState) && Te.controlled && F.type === "number" && Ta(F, "number", F.value);
        }
        switch (Te = M ? du(M) : window, n) {
          case "focusin":
            (Kp(Te) || Te.contentEditable === "true") && (Ma = Te, Uf = M, Co = null);
            break;
          case "focusout":
            Co = Uf = Ma = null;
            break;
          case "mousedown":
            Af = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Af = !1, ov(V, l, H);
            break;
          case "selectionchange":
            if (uv)
              break;
          case "keydown":
          case "keyup":
            ov(V, l, H);
        }
        var se;
        if (Oa)
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
          uu ? qp(n, l) && (Re = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Re = "onCompositionStart");
        Re && (Wp && l.locale !== "ko" && (uu || Re !== "onCompositionStart" ? Re === "onCompositionEnd" && uu && (se = xf()) : (ii = H, ho = "value" in ii ? ii.value : ii.textContent, uu = !0)), Te = _o(M, Re), 0 < Te.length && (Re = new Df(Re, n, null, l, H), V.push({ event: Re, listeners: Te }), se ? Re.data = se : (se = Ls(l), se !== null && (Re.data = se)))), (se = Ms ? Qm(n, l) : Wm(n, l)) && (M = _o(M, "onBeforeInput"), 0 < M.length && (H = new Df("onBeforeInput", "beforeinput", null, l, H), V.push({ event: H, listeners: M }), H.data = se));
      }
      As(V, r);
    });
  }
  function wo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function _o(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = cl(n, l), d != null && o.unshift(wo(n, d, c)), d = cl(n, r), d != null && o.push(wo(n, d, c))), n = n.return;
    }
    return o;
  }
  function gl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Bf(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, M = S.stateNode;
      if (C !== null && C === o)
        break;
      S.tag === 5 && M !== null && (S = M, c ? (C = cl(l, d), C != null && h.unshift(wo(l, C, S))) : c || (C = cl(l, d), C != null && h.push(wo(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var Vf = /\r\n?/g, ey = /\u0000|\uFFFD/g;
  function Pf(n) {
    return (typeof n == "string" ? n : "" + n).replace(Vf, `
`).replace(ey, "");
  }
  function Hs(n, r, l) {
    if (r = Pf(r), Pf(n) !== r && l)
      throw Error(w(425));
  }
  function js() {
  }
  var $f = null, Sl = null;
  function Do(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var El = typeof setTimeout == "function" ? setTimeout : void 0, mv = typeof clearTimeout == "function" ? clearTimeout : void 0, Yf = typeof Promise == "function" ? Promise : void 0, If = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yf < "u" ? function(n) {
    return Yf.resolve(null).then(n).catch(ty);
  } : El;
  function ty(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Hi(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), po(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    po(r);
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
  function bo(n) {
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
  var ji = Math.random().toString(36).slice(2), $a = "__reactFiber$" + ji, Cl = "__reactProps$" + ji, fi = "__reactContainer$" + ji, Qf = "__reactEvents$" + ji, ny = "__reactListeners$" + ji, Wf = "__reactHandles$" + ji;
  function na(n) {
    var r = n[$a];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[fi] || l[$a]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = bo(n); n !== null; ) {
            if (l = n[$a])
              return l;
            n = bo(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ko(n) {
    return n = n[$a] || n[fi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function du(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(w(33));
  }
  function Se(n) {
    return n[Cl] || null;
  }
  var Bi = [], kt = -1;
  function Fe(n) {
    return { current: n };
  }
  function st(n) {
    0 > kt || (n.current = Bi[kt], Bi[kt] = null, kt--);
  }
  function ft(n, r) {
    kt++, Bi[kt] = n.current, n.current = r;
  }
  var Ya = {}, be = Fe(Ya), Yt = Fe(!1), hr = Ya;
  function ra(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Ya;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Nt(n) {
    return n = n.childContextTypes, n != null;
  }
  function aa() {
    st(Yt), st(be);
  }
  function Vi(n, r, l) {
    if (be.current !== Ya)
      throw Error(w(168));
    ft(be, r), ft(Yt, l);
  }
  function Oo(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(w(108, qr(n) || "Unknown", c));
    return te({}, l, o);
  }
  function Bs(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ya, hr = be.current, ft(be, n), ft(Yt, Yt.current), !0;
  }
  function yv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(w(169));
    l ? (n = Oo(n, r, hr), o.__reactInternalMemoizedMergedChildContext = n, st(Yt), st(be), ft(be, n)) : st(Yt), ft(Yt, l);
  }
  var Fr = null, En = !1, Mo = !1;
  function Gf(n) {
    Fr === null ? Fr = [n] : Fr.push(n);
  }
  function qf(n) {
    En = !0, Gf(n);
  }
  function mr() {
    if (!Mo && Fr !== null) {
      Mo = !0;
      var n = 0, r = ht;
      try {
        var l = Fr;
        for (ht = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Fr = null, En = !1;
      } catch (c) {
        throw Fr !== null && (Fr = Fr.slice(n + 1)), bt(Ur, mr), c;
      } finally {
        ht = r, Mo = !1;
      }
    }
    return null;
  }
  var Pi = [], yr = 0, Tl = null, pu = 0, gr = [], Wn = 0, ia = null, On = 1, di = "";
  function Hr(n, r) {
    Pi[yr++] = pu, Pi[yr++] = Tl, Tl = n, pu = r;
  }
  function Xf(n, r, l) {
    gr[Wn++] = On, gr[Wn++] = di, gr[Wn++] = ia, ia = n;
    var o = On;
    n = di;
    var c = 32 - Zr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Zr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, On = 1 << 32 - Zr(r) + c | l << c | o, di = d + n;
    } else
      On = 1 << d | l << c | o, di = n;
  }
  function Vs(n) {
    n.return !== null && (Hr(n, 1), Xf(n, 1, 0));
  }
  function Kf(n) {
    for (; n === Tl; )
      Tl = Pi[--yr], Pi[yr] = null, pu = Pi[--yr], Pi[yr] = null;
    for (; n === ia; )
      ia = gr[--Wn], gr[Wn] = null, di = gr[--Wn], gr[Wn] = null, On = gr[--Wn], gr[Wn] = null;
  }
  var jr = null, Sr = null, Ot = !1, la = null;
  function Zf(n, r) {
    var l = va(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function gv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, jr = n, Sr = La(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, jr = n, Sr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ia !== null ? { id: On, overflow: di } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = va(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, jr = n, Sr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ps(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function $s(n) {
    if (Ot) {
      var r = Sr;
      if (r) {
        var l = r;
        if (!gv(n, r)) {
          if (Ps(n))
            throw Error(w(418));
          r = La(l.nextSibling);
          var o = jr;
          r && gv(n, r) ? Zf(o, l) : (n.flags = n.flags & -4097 | 2, Ot = !1, jr = n);
        }
      } else {
        if (Ps(n))
          throw Error(w(418));
        n.flags = n.flags & -4097 | 2, Ot = !1, jr = n;
      }
    }
  }
  function Sv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    jr = n;
  }
  function Ys(n) {
    if (n !== jr)
      return !1;
    if (!Ot)
      return Sv(n), Ot = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Do(n.type, n.memoizedProps)), r && (r = Sr)) {
      if (Ps(n))
        throw Ev(), Error(w(418));
      for (; r; )
        Zf(n, r), r = La(r.nextSibling);
    }
    if (Sv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(w(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Sr = La(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Sr = null;
      }
    } else
      Sr = jr ? La(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ev() {
    for (var n = Sr; n; )
      n = La(n.nextSibling);
  }
  function jt() {
    Sr = jr = null, Ot = !1;
  }
  function Jf(n) {
    la === null ? la = [n] : la.push(n);
  }
  var Is = pt.ReactCurrentBatchConfig;
  function Rl(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(w(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(w(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(w(284));
      if (!l._owner)
        throw Error(w(290, n));
    }
    return n;
  }
  function Ia(n, r) {
    throw n = Object.prototype.toString.call(r), Error(w(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Cv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Qs(n) {
    function r(_, R) {
      if (n) {
        var k = _.deletions;
        k === null ? (_.deletions = [R], _.flags |= 16) : k.push(R);
      }
    }
    function l(_, R) {
      if (!n)
        return null;
      for (; R !== null; )
        r(_, R), R = R.sibling;
      return null;
    }
    function o(_, R) {
      for (_ = /* @__PURE__ */ new Map(); R !== null; )
        R.key !== null ? _.set(R.key, R) : _.set(R.index, R), R = R.sibling;
      return _;
    }
    function c(_, R) {
      return _ = Xi(_, R), _.index = 0, _.sibling = null, _;
    }
    function d(_, R, k) {
      return _.index = k, n ? (k = _.alternate, k !== null ? (k = k.index, k < R ? (_.flags |= 2, R) : k) : (_.flags |= 2, R)) : (_.flags |= 1048576, R);
    }
    function h(_) {
      return n && _.alternate === null && (_.flags |= 2), _;
    }
    function S(_, R, k, $) {
      return R === null || R.tag !== 6 ? (R = Nc(k, _.mode, $), R.return = _, R) : (R = c(R, k), R.return = _, R);
    }
    function C(_, R, k, $) {
      var pe = k.type;
      return pe === je ? H(_, R, k.props.children, $, k.key) : R !== null && (R.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === Dt && Cv(pe) === R.type) ? ($ = c(R, k.props), $.ref = Rl(_, R, k), $.return = _, $) : ($ = Mc(k.type, k.key, k.props, null, _.mode, $), $.ref = Rl(_, R, k), $.return = _, $);
    }
    function M(_, R, k, $) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== k.containerInfo || R.stateNode.implementation !== k.implementation ? (R = qo(k, _.mode, $), R.return = _, R) : (R = c(R, k.children || []), R.return = _, R);
    }
    function H(_, R, k, $, pe) {
      return R === null || R.tag !== 7 ? (R = Hl(k, _.mode, $, pe), R.return = _, R) : (R = c(R, k), R.return = _, R);
    }
    function V(_, R, k) {
      if (typeof R == "string" && R !== "" || typeof R == "number")
        return R = Nc("" + R, _.mode, k), R.return = _, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case Qe:
            return k = Mc(R.type, R.key, R.props, null, _.mode, k), k.ref = Rl(_, null, R), k.return = _, k;
          case _t:
            return R = qo(R, _.mode, k), R.return = _, R;
          case Dt:
            var $ = R._init;
            return V(_, $(R._payload), k);
        }
        if (ri(R) || Ce(R))
          return R = Hl(R, _.mode, k, null), R.return = _, R;
        Ia(_, R);
      }
      return null;
    }
    function F(_, R, k, $) {
      var pe = R !== null ? R.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number")
        return pe !== null ? null : S(_, R, "" + k, $);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Qe:
            return k.key === pe ? C(_, R, k, $) : null;
          case _t:
            return k.key === pe ? M(_, R, k, $) : null;
          case Dt:
            return pe = k._init, F(
              _,
              R,
              pe(k._payload),
              $
            );
        }
        if (ri(k) || Ce(k))
          return pe !== null ? null : H(_, R, k, $, null);
        Ia(_, k);
      }
      return null;
    }
    function J(_, R, k, $, pe) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number")
        return _ = _.get(k) || null, S(R, _, "" + $, pe);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case Qe:
            return _ = _.get($.key === null ? k : $.key) || null, C(R, _, $, pe);
          case _t:
            return _ = _.get($.key === null ? k : $.key) || null, M(R, _, $, pe);
          case Dt:
            var Te = $._init;
            return J(_, R, k, Te($._payload), pe);
        }
        if (ri($) || Ce($))
          return _ = _.get(k) || null, H(R, _, $, pe, null);
        Ia(R, $);
      }
      return null;
    }
    function oe(_, R, k, $) {
      for (var pe = null, Te = null, se = R, Re = R = 0, dn = null; se !== null && Re < k.length; Re++) {
        se.index > Re ? (dn = se, se = null) : dn = se.sibling;
        var at = F(_, se, k[Re], $);
        if (at === null) {
          se === null && (se = dn);
          break;
        }
        n && se && at.alternate === null && r(_, se), R = d(at, R, Re), Te === null ? pe = at : Te.sibling = at, Te = at, se = dn;
      }
      if (Re === k.length)
        return l(_, se), Ot && Hr(_, Re), pe;
      if (se === null) {
        for (; Re < k.length; Re++)
          se = V(_, k[Re], $), se !== null && (R = d(se, R, Re), Te === null ? pe = se : Te.sibling = se, Te = se);
        return Ot && Hr(_, Re), pe;
      }
      for (se = o(_, se); Re < k.length; Re++)
        dn = J(se, _, Re, k[Re], $), dn !== null && (n && dn.alternate !== null && se.delete(dn.key === null ? Re : dn.key), R = d(dn, R, Re), Te === null ? pe = dn : Te.sibling = dn, Te = dn);
      return n && se.forEach(function(Si) {
        return r(_, Si);
      }), Ot && Hr(_, Re), pe;
    }
    function fe(_, R, k, $) {
      var pe = Ce(k);
      if (typeof pe != "function")
        throw Error(w(150));
      if (k = pe.call(k), k == null)
        throw Error(w(151));
      for (var Te = pe = null, se = R, Re = R = 0, dn = null, at = k.next(); se !== null && !at.done; Re++, at = k.next()) {
        se.index > Re ? (dn = se, se = null) : dn = se.sibling;
        var Si = F(_, se, at.value, $);
        if (Si === null) {
          se === null && (se = dn);
          break;
        }
        n && se && Si.alternate === null && r(_, se), R = d(Si, R, Re), Te === null ? pe = Si : Te.sibling = Si, Te = Si, se = dn;
      }
      if (at.done)
        return l(
          _,
          se
        ), Ot && Hr(_, Re), pe;
      if (se === null) {
        for (; !at.done; Re++, at = k.next())
          at = V(_, at.value, $), at !== null && (R = d(at, R, Re), Te === null ? pe = at : Te.sibling = at, Te = at);
        return Ot && Hr(_, Re), pe;
      }
      for (se = o(_, se); !at.done; Re++, at = k.next())
        at = J(se, _, Re, at.value, $), at !== null && (n && at.alternate !== null && se.delete(at.key === null ? Re : at.key), R = d(at, R, Re), Te === null ? pe = at : Te.sibling = at, Te = at);
      return n && se.forEach(function(Ey) {
        return r(_, Ey);
      }), Ot && Hr(_, Re), pe;
    }
    function Kt(_, R, k, $) {
      if (typeof k == "object" && k !== null && k.type === je && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Qe:
            e: {
              for (var pe = k.key, Te = R; Te !== null; ) {
                if (Te.key === pe) {
                  if (pe = k.type, pe === je) {
                    if (Te.tag === 7) {
                      l(_, Te.sibling), R = c(Te, k.props.children), R.return = _, _ = R;
                      break e;
                    }
                  } else if (Te.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === Dt && Cv(pe) === Te.type) {
                    l(_, Te.sibling), R = c(Te, k.props), R.ref = Rl(_, Te, k), R.return = _, _ = R;
                    break e;
                  }
                  l(_, Te);
                  break;
                } else
                  r(_, Te);
                Te = Te.sibling;
              }
              k.type === je ? (R = Hl(k.props.children, _.mode, $, k.key), R.return = _, _ = R) : ($ = Mc(k.type, k.key, k.props, null, _.mode, $), $.ref = Rl(_, R, k), $.return = _, _ = $);
            }
            return h(_);
          case _t:
            e: {
              for (Te = k.key; R !== null; ) {
                if (R.key === Te)
                  if (R.tag === 4 && R.stateNode.containerInfo === k.containerInfo && R.stateNode.implementation === k.implementation) {
                    l(_, R.sibling), R = c(R, k.children || []), R.return = _, _ = R;
                    break e;
                  } else {
                    l(_, R);
                    break;
                  }
                else
                  r(_, R);
                R = R.sibling;
              }
              R = qo(k, _.mode, $), R.return = _, _ = R;
            }
            return h(_);
          case Dt:
            return Te = k._init, Kt(_, R, Te(k._payload), $);
        }
        if (ri(k))
          return oe(_, R, k, $);
        if (Ce(k))
          return fe(_, R, k, $);
        Ia(_, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, R !== null && R.tag === 6 ? (l(_, R.sibling), R = c(R, k), R.return = _, _ = R) : (l(_, R), R = Nc(k, _.mode, $), R.return = _, _ = R), h(_)) : l(_, R);
    }
    return Kt;
  }
  var vu = Qs(!0), Tv = Qs(!1), pi = Fe(null), on = null, W = null, ua = null;
  function Br() {
    ua = W = on = null;
  }
  function ed(n) {
    var r = pi.current;
    st(pi), n._currentValue = r;
  }
  function td(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function hu(n, r) {
    on = n, ua = W = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Tr = !0), n.firstContext = null);
  }
  function oa(n) {
    var r = n._currentValue;
    if (ua !== n)
      if (n = { context: n, memoizedValue: r, next: null }, W === null) {
        if (on === null)
          throw Error(w(308));
        W = n, on.dependencies = { lanes: 0, firstContext: n };
      } else
        W = W.next = n;
    return r;
  }
  var xl = null;
  function nn(n) {
    xl === null ? xl = [n] : xl.push(n);
  }
  function Rv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, nn(r)) : (l.next = c.next, c.next = l), r.interleaved = l, vi(n, o);
  }
  function vi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var $i = !1;
  function Ws(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function mu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Er(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Yi(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, We & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, vi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, nn(o)) : (r.next = c.next, c.next = r), o.interleaved = r, vi(n, l);
  }
  function Gs(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, oo(n, l);
    }
  }
  function xv(n, r) {
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
  function qs(n, r, l, o) {
    var c = n.updateQueue;
    $i = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var C = S, M = C.next;
      C.next = null, h === null ? d = M : h.next = M, h = C;
      var H = n.alternate;
      H !== null && (H = H.updateQueue, S = H.lastBaseUpdate, S !== h && (S === null ? H.firstBaseUpdate = M : S.next = M, H.lastBaseUpdate = C));
    }
    if (d !== null) {
      var V = c.baseState;
      h = 0, H = M = C = null, S = d;
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
            var oe = n, fe = S;
            switch (F = r, J = l, fe.tag) {
              case 1:
                if (oe = fe.payload, typeof oe == "function") {
                  V = oe.call(J, V, F);
                  break e;
                }
                V = oe;
                break e;
              case 3:
                oe.flags = oe.flags & -65537 | 128;
              case 0:
                if (oe = fe.payload, F = typeof oe == "function" ? oe.call(J, V, F) : oe, F == null)
                  break e;
                V = te({}, V, F);
                break e;
              case 2:
                $i = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, F = c.effects, F === null ? c.effects = [S] : F.push(S));
        } else
          J = { eventTime: J, lane: F, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, H === null ? (M = H = J, C = V) : H = H.next = J, h |= F;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null)
            break;
          F = S, S = F.next, F.next = null, c.lastBaseUpdate = F, c.shared.pending = null;
        }
      } while (!0);
      if (H === null && (C = V), c.baseState = C, c.firstBaseUpdate = M, c.lastBaseUpdate = H, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      zl |= h, n.lanes = h, n.memoizedState = V;
    }
  }
  function wv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(w(191, c));
          c.call(o);
        }
      }
  }
  var Lo = {}, Na = Fe(Lo), yu = Fe(Lo), No = Fe(Lo);
  function wl(n) {
    if (n === Lo)
      throw Error(w(174));
    return n;
  }
  function nd(n, r) {
    switch (ft(No, r), ft(yu, n), ft(Na, Lo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Jt(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Jt(r, n);
    }
    st(Na), ft(Na, r);
  }
  function gu() {
    st(Na), st(yu), st(No);
  }
  function _v(n) {
    wl(No.current);
    var r = wl(Na.current), l = Jt(r, n.type);
    r !== l && (ft(yu, n), ft(Na, l));
  }
  function rd(n) {
    yu.current === n && (st(Na), st(yu));
  }
  var zt = Fe(0);
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
  var Ks = [];
  function ad() {
    for (var n = 0; n < Ks.length; n++)
      Ks[n]._workInProgressVersionPrimary = null;
    Ks.length = 0;
  }
  var Zs = pt.ReactCurrentDispatcher, zo = pt.ReactCurrentBatchConfig, de = 0, ve = null, ke = null, Ie = null, Vr = !1, Su = !1, Uo = 0, ry = 0;
  function Gn() {
    throw Error(w(321));
  }
  function Ao(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ta(n[l], r[l]))
        return !1;
    return !0;
  }
  function A(n, r, l, o, c, d) {
    if (de = d, ve = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Zs.current = n === null || n.memoizedState === null ? ay : wt, n = l(o, c), Su) {
      d = 0;
      do {
        if (Su = !1, Uo = 0, 25 <= d)
          throw Error(w(301));
        d += 1, Ie = ke = null, r.updateQueue = null, Zs.current = pc, n = l(o, c);
      } while (Su);
    }
    if (Zs.current = qn, r = ke !== null && ke.next !== null, de = 0, Ie = ke = ve = null, Vr = !1, r)
      throw Error(w(300));
    return n;
  }
  function rn() {
    var n = Uo !== 0;
    return Uo = 0, n;
  }
  function ye() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ie === null ? ve.memoizedState = Ie = n : Ie = Ie.next = n, Ie;
  }
  function Mn() {
    if (ke === null) {
      var n = ve.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ke.next;
    var r = Ie === null ? ve.memoizedState : Ie.next;
    if (r !== null)
      Ie = r, ke = n;
    else {
      if (n === null)
        throw Error(w(310));
      ke = n, n = { memoizedState: ke.memoizedState, baseState: ke.baseState, baseQueue: ke.baseQueue, queue: ke.queue, next: null }, Ie === null ? ve.memoizedState = Ie = n : Ie = Ie.next = n;
    }
    return Ie;
  }
  function Pr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function hi(n) {
    var r = Mn(), l = r.queue;
    if (l === null)
      throw Error(w(311));
    l.lastRenderedReducer = n;
    var o = ke, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var S = h = null, C = null, M = d;
      do {
        var H = M.lane;
        if ((de & H) === H)
          C !== null && (C = C.next = { lane: 0, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), o = M.hasEagerState ? M.eagerState : n(o, M.action);
        else {
          var V = {
            lane: H,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          };
          C === null ? (S = C = V, h = o) : C = C.next = V, ve.lanes |= H, zl |= H;
        }
        M = M.next;
      } while (M !== null && M !== d);
      C === null ? h = o : C.next = S, ta(o, r.memoizedState) || (Tr = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, ve.lanes |= d, zl |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function sa(n) {
    var r = Mn(), l = r.queue;
    if (l === null)
      throw Error(w(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      ta(d, r.memoizedState) || (Tr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Eu() {
  }
  function _l(n, r) {
    var l = ve, o = Mn(), c = r(), d = !ta(o.memoizedState, c);
    if (d && (o.memoizedState = c, Tr = !0), o = o.queue, Fo(ec.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ie !== null && Ie.memoizedState.tag & 1) {
      if (l.flags |= 2048, Dl(9, Js.bind(null, l, o, c, r), void 0, null), Qt === null)
        throw Error(w(349));
      de & 30 || Cu(l, r, c);
    }
    return c;
  }
  function Cu(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = ve.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ve.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Js(n, r, l, o) {
    r.value = l, r.getSnapshot = o, tc(r) && nc(n);
  }
  function ec(n, r, l) {
    return l(function() {
      tc(r) && nc(n);
    });
  }
  function tc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ta(n, l);
    } catch {
      return !0;
    }
  }
  function nc(n) {
    var r = vi(n, 1);
    r !== null && Bt(r, n, 1, -1);
  }
  function rc(n) {
    var r = ye();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pr, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ho.bind(null, ve, n), [r.memoizedState, n];
  }
  function Dl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = ve.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ve.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function ac() {
    return Mn().memoizedState;
  }
  function Tu(n, r, l, o) {
    var c = ye();
    ve.flags |= n, c.memoizedState = Dl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Ru(n, r, l, o) {
    var c = Mn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (ke !== null) {
      var h = ke.memoizedState;
      if (d = h.destroy, o !== null && Ao(o, h.deps)) {
        c.memoizedState = Dl(r, l, d, o);
        return;
      }
    }
    ve.flags |= n, c.memoizedState = Dl(1 | r, l, d, o);
  }
  function ic(n, r) {
    return Tu(8390656, 8, n, r);
  }
  function Fo(n, r) {
    return Ru(2048, 8, n, r);
  }
  function lc(n, r) {
    return Ru(4, 2, n, r);
  }
  function uc(n, r) {
    return Ru(4, 4, n, r);
  }
  function oc(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function sc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Ru(4, 4, oc.bind(null, r, n), l);
  }
  function xu() {
  }
  function bl(n, r) {
    var l = Mn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ao(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function cc(n, r) {
    var l = Mn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ao(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function fc(n, r, l) {
    return de & 21 ? (ta(l, r) || (l = Cs(), ve.lanes |= l, zl |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Tr = !0), n.memoizedState = l);
  }
  function id(n, r) {
    var l = ht;
    ht = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = zo.transition;
    zo.transition = {};
    try {
      n(!1), r();
    } finally {
      ht = l, zo.transition = o;
    }
  }
  function dc() {
    return Mn().memoizedState;
  }
  function Dv(n, r, l) {
    var o = gi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, ld(n))
      wu(r, l);
    else if (l = Rv(n, r, l, o), l !== null) {
      var c = Rn();
      Bt(l, n, o, c), Ii(l, r, o);
    }
  }
  function Ho(n, r, l) {
    var o = gi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ld(n))
      wu(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var h = r.lastRenderedState, S = d(h, l);
          if (c.hasEagerState = !0, c.eagerState = S, ta(S, h)) {
            var C = r.interleaved;
            C === null ? (c.next = c, nn(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Rv(n, r, c, o), l !== null && (c = Rn(), Bt(l, n, o, c), Ii(l, r, o));
    }
  }
  function ld(n) {
    var r = n.alternate;
    return n === ve || r !== null && r === ve;
  }
  function wu(n, r) {
    Su = Vr = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Ii(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, oo(n, l);
    }
  }
  var qn = { readContext: oa, useCallback: Gn, useContext: Gn, useEffect: Gn, useImperativeHandle: Gn, useInsertionEffect: Gn, useLayoutEffect: Gn, useMemo: Gn, useReducer: Gn, useRef: Gn, useState: Gn, useDebugValue: Gn, useDeferredValue: Gn, useTransition: Gn, useMutableSource: Gn, useSyncExternalStore: Gn, useId: Gn, unstable_isNewReconciler: !1 }, ay = { readContext: oa, useCallback: function(n, r) {
    return ye().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: oa, useEffect: ic, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Tu(
      4194308,
      4,
      oc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Tu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Tu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = ye();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = ye();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Dv.bind(null, ve, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = ye();
    return n = { current: n }, r.memoizedState = n;
  }, useState: rc, useDebugValue: xu, useDeferredValue: function(n) {
    return ye().memoizedState = n;
  }, useTransition: function() {
    var n = rc(!1), r = n[0];
    return n = id.bind(null, n[1]), ye().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = ve, c = ye();
    if (Ot) {
      if (l === void 0)
        throw Error(w(407));
      l = l();
    } else {
      if (l = r(), Qt === null)
        throw Error(w(349));
      de & 30 || Cu(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, ic(ec.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Dl(9, Js.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = ye(), r = Qt.identifierPrefix;
    if (Ot) {
      var l = di, o = On;
      l = (o & ~(1 << 32 - Zr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Uo++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = ry++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, wt = {
    readContext: oa,
    useCallback: bl,
    useContext: oa,
    useEffect: Fo,
    useImperativeHandle: sc,
    useInsertionEffect: lc,
    useLayoutEffect: uc,
    useMemo: cc,
    useReducer: hi,
    useRef: ac,
    useState: function() {
      return hi(Pr);
    },
    useDebugValue: xu,
    useDeferredValue: function(n) {
      var r = Mn();
      return fc(r, ke.memoizedState, n);
    },
    useTransition: function() {
      var n = hi(Pr)[0], r = Mn().memoizedState;
      return [n, r];
    },
    useMutableSource: Eu,
    useSyncExternalStore: _l,
    useId: dc,
    unstable_isNewReconciler: !1
  }, pc = { readContext: oa, useCallback: bl, useContext: oa, useEffect: Fo, useImperativeHandle: sc, useInsertionEffect: lc, useLayoutEffect: uc, useMemo: cc, useReducer: sa, useRef: ac, useState: function() {
    return sa(Pr);
  }, useDebugValue: xu, useDeferredValue: function(n) {
    var r = Mn();
    return ke === null ? r.memoizedState = n : fc(r, ke.memoizedState, n);
  }, useTransition: function() {
    var n = sa(Pr)[0], r = Mn().memoizedState;
    return [n, r];
  }, useMutableSource: Eu, useSyncExternalStore: _l, useId: dc, unstable_isNewReconciler: !1 };
  function Cr(n, r) {
    if (n && n.defaultProps) {
      r = te({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kl(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : te({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ol = { isMounted: function(n) {
    return (n = n._reactInternals) ? me(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Rn(), c = gi(n), d = Er(o, c);
    d.payload = r, l != null && (d.callback = l), r = Yi(n, d, c), r !== null && (Bt(r, n, c, o), Gs(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Rn(), c = gi(n), d = Er(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Yi(n, d, c), r !== null && (Bt(r, n, c, o), Gs(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Rn(), o = gi(n), c = Er(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Yi(n, c, o), r !== null && (Bt(r, n, o, l), Gs(r, n, o));
  } };
  function bv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !Eo(l, o) || !Eo(c, d) : !0;
  }
  function kv(n, r, l) {
    var o = !1, c = Ya, d = r.contextType;
    return typeof d == "object" && d !== null ? d = oa(d) : (c = Nt(r) ? hr : be.current, o = r.contextTypes, d = (o = o != null) ? ra(n, c) : Ya), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ol, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Ov(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ol.enqueueReplaceState(r, r.state, null);
  }
  function ud(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Ws(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = oa(d) : (d = Nt(r) ? hr : be.current, c.context = ra(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kl(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ol.enqueueReplaceState(c, c.state, null), qs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Qi(n, r) {
    try {
      var l = "", o = r;
      do
        l += Fa(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function od(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function jo(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Mv = typeof WeakMap == "function" ? WeakMap : Map;
  function Lv(n, r, l) {
    l = Er(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      wc || (wc = !0, yd = o), jo(n, r);
    }, l;
  }
  function Nv(n, r, l) {
    l = Er(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        jo(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      jo(n, r), typeof o != "function" && (da === null ? da = /* @__PURE__ */ new Set([this]) : da.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function Bo(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Mv();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = vy.bind(null, n, r, l), r.then(n, n));
  }
  function zv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function sd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Er(-1, 1), r.tag = 2, Yi(l, r, 1))), l.lanes |= 1), n);
  }
  var Uv = pt.ReactCurrentOwner, Tr = !1;
  function qt(n, r, l, o) {
    r.child = n === null ? Tv(r, null, l, o) : vu(r, n.child, l, o);
  }
  function _u(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return hu(r, c), o = A(n, r, l, o, d, c), l = rn(), n !== null && !Tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Xt(n, r, c)) : (Ot && l && Vs(r), r.flags |= 1, qt(n, r, o, c), r.child);
  }
  function Wi(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Td(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, vc(n, r, d, o, c)) : (n = Mc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Eo, l(h, o) && n.ref === r.ref)
        return Xt(n, r, c);
    }
    return r.flags |= 1, n = Xi(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function vc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Eo(d, o) && n.ref === r.ref)
        if (Tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Tr = !0);
        else
          return r.lanes = n.lanes, Xt(n, r, c);
    }
    return Ae(n, r, l, o, c);
  }
  function Rr(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ft(Au, xr), xr |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, ft(Au, xr), xr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, ft(Au, xr), xr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, ft(Au, xr), xr |= o;
    return qt(n, r, c, l), r.child;
  }
  function Ml(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Ae(n, r, l, o, c) {
    var d = Nt(l) ? hr : be.current;
    return d = ra(r, d), hu(r, c), l = A(n, r, l, o, d, c), o = rn(), n !== null && !Tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Xt(n, r, c)) : (Ot && o && Vs(r), r.flags |= 1, qt(n, r, l, c), r.child);
  }
  function Vo(n, r, l, o, c) {
    if (Nt(l)) {
      var d = !0;
      Bs(r);
    } else
      d = !1;
    if (hu(r, c), r.stateNode === null)
      $o(n, r), kv(r, l, o), ud(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, M = l.contextType;
      typeof M == "object" && M !== null ? M = oa(M) : (M = Nt(l) ? hr : be.current, M = ra(r, M));
      var H = l.getDerivedStateFromProps, V = typeof H == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      V || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== M) && Ov(r, h, o, M), $i = !1;
      var F = r.memoizedState;
      h.state = F, qs(r, o, h, c), C = r.memoizedState, S !== o || F !== C || Yt.current || $i ? (typeof H == "function" && (kl(r, l, H, o), C = r.memoizedState), (S = $i || bv(r, l, S, o, F, C, M)) ? (V || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = M, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, mu(n, r), S = r.memoizedProps, M = r.type === r.elementType ? S : Cr(r.type, S), h.props = M, V = r.pendingProps, F = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = oa(C) : (C = Nt(l) ? hr : be.current, C = ra(r, C));
      var J = l.getDerivedStateFromProps;
      (H = typeof J == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== V || F !== C) && Ov(r, h, o, C), $i = !1, F = r.memoizedState, h.state = F, qs(r, o, h, c);
      var oe = r.memoizedState;
      S !== V || F !== oe || Yt.current || $i ? (typeof J == "function" && (kl(r, l, J, o), oe = r.memoizedState), (M = $i || bv(r, l, M, o, F, oe, C) || !1) ? (H || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, oe, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, oe, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = oe), h.props = o, h.state = oe, h.context = C, o = M) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return hc(n, r, l, o, d, c);
  }
  function hc(n, r, l, o, c, d) {
    Ml(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h)
      return c && yv(r, l, !1), Xt(n, r, d);
    o = r.stateNode, Uv.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = vu(r, n.child, null, d), r.child = vu(r, null, S, d)) : qt(n, r, S, d), r.memoizedState = o.state, c && yv(r, l, !0), r.child;
  }
  function iy(n) {
    var r = n.stateNode;
    r.pendingContext ? Vi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Vi(n, r.context, !1), nd(n, r.containerInfo);
  }
  function Av(n, r, l, o, c) {
    return jt(), Jf(c), r.flags |= 256, qt(n, r, l, o), r.child;
  }
  var Po = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ll(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Fv(n, r, l) {
    var o = r.pendingProps, c = zt.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), ft(zt, c & 1), n === null)
      return $s(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = Lc(h, o, 0, null), n = Hl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ll(l), r.memoizedState = Po, n) : mc(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null))
      return cd(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = Xi(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = Xi(S, d) : (d = Hl(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? Ll(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = Po, o;
    }
    return d = n.child, n = d.sibling, o = Xi(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function mc(n, r) {
    return r = Lc({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function yc(n, r, l, o) {
    return o !== null && Jf(o), vu(r, n.child, null, l), n = mc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function cd(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = od(Error(w(422))), yc(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Lc({ mode: "visible", children: o.children }, c, 0, null), d = Hl(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && vu(r, n.child, null, h), r.child.memoizedState = Ll(h), r.memoizedState = Po, d);
    if (!(r.mode & 1))
      return yc(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var S = o.dgst;
      return o = S, d = Error(w(419)), o = od(d, o, void 0), yc(n, r, h, o);
    }
    if (S = (h & n.childLanes) !== 0, Tr || S) {
      if (o = Qt, o !== null) {
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
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, vi(n, c), Bt(o, n, c, -1));
      }
      return Go(), o = od(Error(w(421))), yc(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Cd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Sr = La(c.nextSibling), jr = r, Ot = !0, la = null, n !== null && (gr[Wn++] = On, gr[Wn++] = di, gr[Wn++] = ia, On = n.id, di = n.overflow, ia = r), r = mc(r, o.children), r.flags |= 4096, r);
  }
  function Hv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), td(n.return, r, l);
  }
  function gc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function fd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (qt(n, r, o.children, l), o = zt.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Hv(n, l, r);
            else if (n.tag === 19)
              Hv(n, l, r);
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
    if (ft(zt, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Xs(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), gc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Xs(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          gc(r, !0, l, null, d);
          break;
        case "together":
          gc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function $o(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Xt(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), zl |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(w(153));
    if (r.child !== null) {
      for (n = r.child, l = Xi(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Xi(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function mi(n, r, l) {
    switch (r.tag) {
      case 3:
        iy(r), jt();
        break;
      case 5:
        _v(r);
        break;
      case 1:
        Nt(r.type) && Bs(r);
        break;
      case 4:
        nd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        ft(pi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (ft(zt, zt.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Fv(n, r, l) : (ft(zt, zt.current & 1), n = Xt(n, r, l), n !== null ? n.sibling : null);
        ft(zt, zt.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return fd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), ft(zt, zt.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Rr(n, r, l);
    }
    return Xt(n, r, l);
  }
  var Qa, Du, bu, ca;
  Qa = function(n, r) {
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
  }, bu = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, wl(Na.current);
      var d = null;
      switch (l) {
        case "input":
          c = $n(n, c), o = $n(n, o), d = [];
          break;
        case "select":
          c = te({}, c, { value: void 0 }), o = te({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Ra(n, c), o = Ra(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = js);
      }
      mn(l, o);
      var h;
      l = null;
      for (M in c)
        if (!o.hasOwnProperty(M) && c.hasOwnProperty(M) && c[M] != null)
          if (M === "style") {
            var S = c[M];
            for (h in S)
              S.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
          } else
            M !== "dangerouslySetInnerHTML" && M !== "children" && M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && M !== "autoFocus" && (Ne.hasOwnProperty(M) ? d || (d = []) : (d = d || []).push(M, null));
      for (M in o) {
        var C = o[M];
        if (S = c != null ? c[M] : void 0, o.hasOwnProperty(M) && C !== S && (C != null || S != null))
          if (M === "style")
            if (S) {
              for (h in S)
                !S.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
              for (h in C)
                C.hasOwnProperty(h) && S[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
            } else
              l || (d || (d = []), d.push(
                M,
                l
              )), l = C;
          else
            M === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(M, C)) : M === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(M, "" + C) : M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && (Ne.hasOwnProperty(M) ? (C != null && M === "onScroll" && Tt("scroll", n), d || S === C || (d = [])) : (d = d || []).push(M, C));
      }
      l && (d = d || []).push("style", l);
      var M = d;
      (r.updateQueue = M) && (r.flags |= 4);
    }
  }, ca = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function It(n, r) {
    if (!Ot)
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
  function Xn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ly(n, r, l) {
    var o = r.pendingProps;
    switch (Kf(r), r.tag) {
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
        return Xn(r), null;
      case 1:
        return Nt(r.type) && aa(), Xn(r), null;
      case 3:
        return o = r.stateNode, gu(), st(Yt), st(be), ad(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Ys(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, la !== null && (gd(la), la = null))), Du(n, r), Xn(r), null;
      case 5:
        rd(r);
        var c = wl(No.current);
        if (l = r.type, n !== null && r.stateNode != null)
          bu(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(w(166));
            return Xn(r), null;
          }
          if (n = wl(Na.current), Ys(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[$a] = r, o[Cl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Tt("cancel", o), Tt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Tt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < xo.length; c++)
                  Tt(xo[c], o);
                break;
              case "source":
                Tt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Tt(
                  "error",
                  o
                ), Tt("load", o);
                break;
              case "details":
                Tt("toggle", o);
                break;
              case "input":
                bn(o, d), Tt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Tt("invalid", o);
                break;
              case "textarea":
                Or(o, d), Tt("invalid", o);
            }
            mn(l, d), c = null;
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var S = d[h];
                h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && Hs(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && Hs(
                  o.textContent,
                  S,
                  n
                ), c = ["children", "" + S]) : Ne.hasOwnProperty(h) && S != null && h === "onScroll" && Tt("scroll", o);
              }
            switch (l) {
              case "input":
                fr(o), Kr(o, d, !0);
                break;
              case "textarea":
                fr(o), Mr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = js);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = xa(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[$a] = r, n[Cl] = o, Qa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = Gt(l, o), l) {
                case "dialog":
                  Tt("cancel", n), Tt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Tt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < xo.length; c++)
                    Tt(xo[c], n);
                  c = o;
                  break;
                case "source":
                  Tt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Tt(
                    "error",
                    n
                  ), Tt("load", n), c = o;
                  break;
                case "details":
                  Tt("toggle", n), c = o;
                  break;
                case "input":
                  bn(n, o), c = $n(n, o), Tt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = te({}, o, { value: void 0 }), Tt("invalid", n);
                  break;
                case "textarea":
                  Or(n, o), c = Ra(n, o), Tt("invalid", n);
                  break;
                default:
                  c = o;
              }
              mn(l, c), S = c;
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var C = S[d];
                  d === "style" ? vt(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Mi(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && wa(n, C) : typeof C == "number" && wa(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ne.hasOwnProperty(d) ? C != null && d === "onScroll" && Tt("scroll", n) : C != null && He(n, d, C, h));
                }
              switch (l) {
                case "input":
                  fr(n), Kr(n, o, !1);
                  break;
                case "textarea":
                  fr(n), Mr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Pn(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? ja(n, !!o.multiple, d, !1) : o.defaultValue != null && ja(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = js);
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
        return Xn(r), null;
      case 6:
        if (n && r.stateNode != null)
          ca(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(w(166));
          if (l = wl(No.current), wl(Na.current), Ys(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[$a] = r, (d = o.nodeValue !== l) && (n = jr, n !== null))
              switch (n.tag) {
                case 3:
                  Hs(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Hs(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[$a] = r, r.stateNode = o;
        }
        return Xn(r), null;
      case 13:
        if (st(zt), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Ot && Sr !== null && r.mode & 1 && !(r.flags & 128))
            Ev(), jt(), r.flags |= 98560, d = !1;
          else if (d = Ys(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(w(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(w(317));
              d[$a] = r;
            } else
              jt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Xn(r), d = !1;
          } else
            la !== null && (gd(la), la = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || zt.current & 1 ? cn === 0 && (cn = 3) : Go())), r.updateQueue !== null && (r.flags |= 4), Xn(r), null);
      case 4:
        return gu(), Du(n, r), n === null && fu(r.stateNode.containerInfo), Xn(r), null;
      case 10:
        return ed(r.type._context), Xn(r), null;
      case 17:
        return Nt(r.type) && aa(), Xn(r), null;
      case 19:
        if (st(zt), d = r.memoizedState, d === null)
          return Xn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null)
          if (o)
            It(d, !1);
          else {
            if (cn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (h = Xs(n), h !== null) {
                  for (r.flags |= 128, It(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return ft(zt, zt.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && ct() > Hu && (r.flags |= 128, o = !0, It(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Xs(h), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), It(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !Ot)
                return Xn(r), null;
            } else
              2 * ct() - d.renderingStartTime > Hu && l !== 1073741824 && (r.flags |= 128, o = !0, It(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = ct(), r.sibling = null, l = zt.current, ft(zt, o ? l & 1 | 2 : l & 1), r) : (Xn(r), null);
      case 22:
      case 23:
        return kc(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? xr & 1073741824 && (Xn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Xn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(w(156, r.tag));
  }
  function uy(n, r) {
    switch (Kf(r), r.tag) {
      case 1:
        return Nt(r.type) && aa(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return gu(), st(Yt), st(be), ad(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return rd(r), null;
      case 13:
        if (st(zt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(w(340));
          jt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return st(zt), null;
      case 4:
        return gu(), null;
      case 10:
        return ed(r.type._context), null;
      case 22:
      case 23:
        return kc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ku = !1, Ln = !1, Sc = typeof WeakSet == "function" ? WeakSet : Set, le = null;
  function Ou(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Wt(n, r, o);
        }
      else
        l.current = null;
  }
  function dd(n, r, l) {
    try {
      l();
    } catch (o) {
      Wt(n, r, o);
    }
  }
  var Ec = !1;
  function oy(n, r) {
    if ($f = vl, n = Ns(), oi(n)) {
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
            var h = 0, S = -1, C = -1, M = 0, H = 0, V = n, F = null;
            t:
              for (; ; ) {
                for (var J; V !== l || c !== 0 && V.nodeType !== 3 || (S = h + c), V !== d || o !== 0 && V.nodeType !== 3 || (C = h + o), V.nodeType === 3 && (h += V.nodeValue.length), (J = V.firstChild) !== null; )
                  F = V, V = J;
                for (; ; ) {
                  if (V === n)
                    break t;
                  if (F === l && ++M === c && (S = h), F === d && ++H === o && (C = h), (J = V.nextSibling) !== null)
                    break;
                  V = F, F = V.parentNode;
                }
                V = J;
              }
            l = S === -1 || C === -1 ? null : { start: S, end: C };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (Sl = { focusedElem: n, selectionRange: l }, vl = !1, le = r; le !== null; )
      if (r = le, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, le = n;
      else
        for (; le !== null; ) {
          r = le;
          try {
            var oe = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (oe !== null) {
                    var fe = oe.memoizedProps, Kt = oe.memoizedState, _ = r.stateNode, R = _.getSnapshotBeforeUpdate(r.elementType === r.type ? fe : Cr(r.type, fe), Kt);
                    _.__reactInternalSnapshotBeforeUpdate = R;
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
                  throw Error(w(163));
              }
          } catch ($) {
            Wt(r, r.return, $);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, le = n;
            break;
          }
          le = r.return;
        }
    return oe = Ec, Ec = !1, oe;
  }
  function Mu(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && dd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Cc(n, r) {
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
  function Tc(n) {
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
  function jv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, jv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[$a], delete r[Cl], delete r[Qf], delete r[ny], delete r[Wf])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function pd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Bv(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || pd(n.return))
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
  function Yo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = js));
    else if (o !== 4 && (n = n.child, n !== null))
      for (Yo(n, r, l), n = n.sibling; n !== null; )
        Yo(n, r, l), n = n.sibling;
  }
  function Lu(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Lu(n, r, l), n = n.sibling; n !== null; )
        Lu(n, r, l), n = n.sibling;
  }
  var Ut = null, Cn = !1;
  function er(n, r, l) {
    for (l = l.child; l !== null; )
      Nu(n, r, l), l = l.sibling;
  }
  function Nu(n, r, l) {
    if (Da && typeof Da.onCommitFiberUnmount == "function")
      try {
        Da.onCommitFiberUnmount(uo, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Ln || Ou(l, r);
      case 6:
        var o = Ut, c = Cn;
        Ut = null, er(n, r, l), Ut = o, Cn = c, Ut !== null && (Cn ? (n = Ut, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Ut.removeChild(l.stateNode));
        break;
      case 18:
        Ut !== null && (Cn ? (n = Ut, l = l.stateNode, n.nodeType === 8 ? Hi(n.parentNode, l) : n.nodeType === 1 && Hi(n, l), po(n)) : Hi(Ut, l.stateNode));
        break;
      case 4:
        o = Ut, c = Cn, Ut = l.stateNode.containerInfo, Cn = !0, er(n, r, l), Ut = o, Cn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ln && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && dd(l, r, h), c = c.next;
          } while (c !== o);
        }
        er(n, r, l);
        break;
      case 1:
        if (!Ln && (Ou(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (S) {
            Wt(l, r, S);
          }
        er(n, r, l);
        break;
      case 21:
        er(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Ln = (o = Ln) || l.memoizedState !== null, er(n, r, l), Ln = o) : er(n, r, l);
        break;
      default:
        er(n, r, l);
    }
  }
  function zu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Sc()), r.forEach(function(o) {
        var c = hy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Tn(n, r) {
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
                  Ut = S.stateNode, Cn = !1;
                  break e;
                case 3:
                  Ut = S.stateNode.containerInfo, Cn = !0;
                  break e;
                case 4:
                  Ut = S.stateNode.containerInfo, Cn = !0;
                  break e;
              }
              S = S.return;
            }
          if (Ut === null)
            throw Error(w(160));
          Nu(d, h, c), Ut = null, Cn = !1;
          var C = c.alternate;
          C !== null && (C.return = null), c.return = null;
        } catch (M) {
          Wt(c, r, M);
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
        if (Tn(r, n), Wa(n), o & 4) {
          try {
            Mu(3, n, n.return), Cc(3, n);
          } catch (fe) {
            Wt(n, n.return, fe);
          }
          try {
            Mu(5, n, n.return);
          } catch (fe) {
            Wt(n, n.return, fe);
          }
        }
        break;
      case 1:
        Tn(r, n), Wa(n), o & 512 && l !== null && Ou(l, l.return);
        break;
      case 5:
        if (Tn(r, n), Wa(n), o & 512 && l !== null && Ou(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            wa(c, "");
          } catch (fe) {
            Wt(n, n.return, fe);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null)
            try {
              S === "input" && d.type === "radio" && d.name != null && kn(c, d), Gt(S, h);
              var M = Gt(S, d);
              for (h = 0; h < C.length; h += 2) {
                var H = C[h], V = C[h + 1];
                H === "style" ? vt(c, V) : H === "dangerouslySetInnerHTML" ? Mi(c, V) : H === "children" ? wa(c, V) : He(c, H, V, M);
              }
              switch (S) {
                case "input":
                  Yn(c, d);
                  break;
                case "textarea":
                  Ba(c, d);
                  break;
                case "select":
                  var F = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var J = d.value;
                  J != null ? ja(c, !!d.multiple, J, !1) : F !== !!d.multiple && (d.defaultValue != null ? ja(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : ja(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Cl] = d;
            } catch (fe) {
              Wt(n, n.return, fe);
            }
        }
        break;
      case 6:
        if (Tn(r, n), Wa(n), o & 4) {
          if (n.stateNode === null)
            throw Error(w(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (fe) {
            Wt(n, n.return, fe);
          }
        }
        break;
      case 3:
        if (Tn(r, n), Wa(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            po(r.containerInfo);
          } catch (fe) {
            Wt(n, n.return, fe);
          }
        break;
      case 4:
        Tn(r, n), Wa(n);
        break;
      case 13:
        Tn(r, n), Wa(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (xc = ct())), o & 4 && zu(n);
        break;
      case 22:
        if (H = l !== null && l.memoizedState !== null, n.mode & 1 ? (Ln = (M = Ln) || H, Tn(r, n), Ln = M) : Tn(r, n), Wa(n), o & 8192) {
          if (M = n.memoizedState !== null, (n.stateNode.isHidden = M) && !H && n.mode & 1)
            for (le = n, H = n.child; H !== null; ) {
              for (V = le = H; le !== null; ) {
                switch (F = le, J = F.child, F.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Mu(4, F, F.return);
                    break;
                  case 1:
                    Ou(F, F.return);
                    var oe = F.stateNode;
                    if (typeof oe.componentWillUnmount == "function") {
                      o = F, l = F.return;
                      try {
                        r = o, oe.props = r.memoizedProps, oe.state = r.memoizedState, oe.componentWillUnmount();
                      } catch (fe) {
                        Wt(o, l, fe);
                      }
                    }
                    break;
                  case 5:
                    Ou(F, F.return);
                    break;
                  case 22:
                    if (F.memoizedState !== null) {
                      Pv(V);
                      continue;
                    }
                }
                J !== null ? (J.return = F, le = J) : Pv(V);
              }
              H = H.sibling;
            }
          e:
            for (H = null, V = n; ; ) {
              if (V.tag === 5) {
                if (H === null) {
                  H = V;
                  try {
                    c = V.stateNode, M ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = V.stateNode, C = V.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = Pe("display", h));
                  } catch (fe) {
                    Wt(n, n.return, fe);
                  }
                }
              } else if (V.tag === 6) {
                if (H === null)
                  try {
                    V.stateNode.nodeValue = M ? "" : V.memoizedProps;
                  } catch (fe) {
                    Wt(n, n.return, fe);
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
        Tn(r, n), Wa(n), o & 4 && zu(n);
        break;
      case 21:
        break;
      default:
        Tn(
          r,
          n
        ), Wa(n);
    }
  }
  function Wa(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (pd(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(w(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (wa(c, ""), o.flags &= -33);
            var d = Bv(n);
            Lu(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = Bv(n);
            Yo(n, S, h);
            break;
          default:
            throw Error(w(161));
        }
      } catch (C) {
        Wt(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function sy(n, r, l) {
    le = n, vd(n);
  }
  function vd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; le !== null; ) {
      var c = le, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || ku;
        if (!h) {
          var S = c.alternate, C = S !== null && S.memoizedState !== null || Ln;
          S = ku;
          var M = Ln;
          if (ku = h, (Ln = C) && !M)
            for (le = c; le !== null; )
              h = le, C = h.child, h.tag === 22 && h.memoizedState !== null ? hd(c) : C !== null ? (C.return = h, le = C) : hd(c);
          for (; d !== null; )
            le = d, vd(d), d = d.sibling;
          le = c, ku = S, Ln = M;
        }
        Uu(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, le = d) : Uu(n);
    }
  }
  function Uu(n) {
    for (; le !== null; ) {
      var r = le;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Ln || Cc(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Ln)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : Cr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && wv(r, d, o);
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
                  wv(r, h, l);
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
                  var M = r.alternate;
                  if (M !== null) {
                    var H = M.memoizedState;
                    if (H !== null) {
                      var V = H.dehydrated;
                      V !== null && po(V);
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
                throw Error(w(163));
            }
          Ln || r.flags & 512 && Tc(r);
        } catch (F) {
          Wt(r, r.return, F);
        }
      }
      if (r === n) {
        le = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, le = l;
        break;
      }
      le = r.return;
    }
  }
  function Pv(n) {
    for (; le !== null; ) {
      var r = le;
      if (r === n) {
        le = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, le = l;
        break;
      }
      le = r.return;
    }
  }
  function hd(n) {
    for (; le !== null; ) {
      var r = le;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Cc(4, r);
            } catch (C) {
              Wt(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                Wt(r, c, C);
              }
            }
            var d = r.return;
            try {
              Tc(r);
            } catch (C) {
              Wt(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              Tc(r);
            } catch (C) {
              Wt(r, h, C);
            }
        }
      } catch (C) {
        Wt(r, r.return, C);
      }
      if (r === n) {
        le = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, le = S;
        break;
      }
      le = r.return;
    }
  }
  var cy = Math.ceil, Nl = pt.ReactCurrentDispatcher, Rc = pt.ReactCurrentOwner, fa = pt.ReactCurrentBatchConfig, We = 0, Qt = null, Mt = null, sn = 0, xr = 0, Au = Fe(0), cn = 0, Io = null, zl = 0, Fu = 0, md = 0, Gi = null, Kn = null, xc = 0, Hu = 1 / 0, yi = null, wc = !1, yd = null, da = null, ju = !1, pa = null, _c = 0, Qo = 0, Dc = null, Wo = -1, Ul = 0;
  function Rn() {
    return We & 6 ? ct() : Wo !== -1 ? Wo : Wo = ct();
  }
  function gi(n) {
    return n.mode & 1 ? We & 2 && sn !== 0 ? sn & -sn : Is.transition !== null ? (Ul === 0 && (Ul = Cs()), Ul) : (n = ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Rf(n.type)), n) : 1;
  }
  function Bt(n, r, l, o) {
    if (50 < Qo)
      throw Qo = 0, Dc = null, Error(w(185));
    pl(n, l, o), (!(We & 2) || n !== Qt) && (n === Qt && (!(We & 2) && (Fu |= l), cn === 4 && Ga(n, sn)), fn(n, o), l === 1 && We === 0 && !(r.mode & 1) && (Hu = ct() + 500, En && mr()));
  }
  function fn(n, r) {
    var l = n.callbackNode;
    Es(n, r);
    var o = ba(n, n === Qt ? sn : 0);
    if (o === 0)
      l !== null && Ht(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Ht(l), r === 1)
        n.tag === 0 ? qf(Bu.bind(null, n)) : Gf(Bu.bind(null, n)), If(function() {
          !(We & 6) && mr();
        }), l = null;
      else {
        switch (Ef(o)) {
          case 1:
            l = Ur;
            break;
          case 4:
            l = Ye;
            break;
          case 16:
            l = Pa;
            break;
          case 536870912:
            l = mf;
            break;
          default:
            l = Pa;
        }
        l = Xv(l, bc.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function bc(n, r) {
    if (Wo = -1, Ul = 0, We & 6)
      throw Error(w(327));
    var l = n.callbackNode;
    if (Vu() && n.callbackNode !== l)
      return null;
    var o = ba(n, n === Qt ? sn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = Oc(n, o);
    else {
      r = o;
      var c = We;
      We |= 2;
      var d = Yv();
      (Qt !== n || sn !== r) && (yi = null, Hu = ct() + 500, Fl(n, r));
      do
        try {
          dy();
          break;
        } catch (S) {
          $v(n, S);
        }
      while (!0);
      Br(), Nl.current = d, We = c, Mt !== null ? r = 0 : (Qt = null, sn = 0, r = cn);
    }
    if (r !== 0) {
      if (r === 2 && (c = gf(n), c !== 0 && (o = c, r = Al(n, c))), r === 1)
        throw l = Io, Fl(n, 0), Ga(n, o), fn(n, ct()), l;
      if (r === 6)
        Ga(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Sd(c) && (r = Oc(n, o), r === 2 && (d = gf(n), d !== 0 && (o = d, r = Al(n, d))), r === 1))
          throw l = Io, Fl(n, 0), Ga(n, o), fn(n, ct()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(w(345));
          case 2:
            qi(n, Kn, yi);
            break;
          case 3:
            if (Ga(n, o), (o & 130023424) === o && (r = xc + 500 - ct(), 10 < r)) {
              if (ba(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Rn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = El(qi.bind(null, n, Kn, yi), r);
              break;
            }
            qi(n, Kn, yi);
            break;
          case 4:
            if (Ga(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - Zr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = ct() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * cy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = El(qi.bind(null, n, Kn, yi), o);
              break;
            }
            qi(n, Kn, yi);
            break;
          case 5:
            qi(n, Kn, yi);
            break;
          default:
            throw Error(w(329));
        }
      }
    }
    return fn(n, ct()), n.callbackNode === l ? bc.bind(null, n) : null;
  }
  function Al(n, r) {
    var l = Gi;
    return n.current.memoizedState.isDehydrated && (Fl(n, r).flags |= 256), n = Oc(n, r), n !== 2 && (r = Kn, Kn = l, r !== null && gd(r)), n;
  }
  function gd(n) {
    Kn === null ? Kn = n : Kn.push.apply(Kn, n);
  }
  function Sd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!ta(d(), c))
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
  function Ga(n, r) {
    for (r &= ~md, r &= ~Fu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Zr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Bu(n) {
    if (We & 6)
      throw Error(w(327));
    Vu();
    var r = ba(n, 0);
    if (!(r & 1))
      return fn(n, ct()), null;
    var l = Oc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gf(n);
      o !== 0 && (r = o, l = Al(n, o));
    }
    if (l === 1)
      throw l = Io, Fl(n, 0), Ga(n, r), fn(n, ct()), l;
    if (l === 6)
      throw Error(w(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, qi(n, Kn, yi), fn(n, ct()), null;
  }
  function Ed(n, r) {
    var l = We;
    We |= 1;
    try {
      return n(r);
    } finally {
      We = l, We === 0 && (Hu = ct() + 500, En && mr());
    }
  }
  function qa(n) {
    pa !== null && pa.tag === 0 && !(We & 6) && Vu();
    var r = We;
    We |= 1;
    var l = fa.transition, o = ht;
    try {
      if (fa.transition = null, ht = 1, n)
        return n();
    } finally {
      ht = o, fa.transition = l, We = r, !(We & 6) && mr();
    }
  }
  function kc() {
    xr = Au.current, st(Au);
  }
  function Fl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, mv(l)), Mt !== null)
      for (l = Mt.return; l !== null; ) {
        var o = l;
        switch (Kf(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && aa();
            break;
          case 3:
            gu(), st(Yt), st(be), ad();
            break;
          case 5:
            rd(o);
            break;
          case 4:
            gu();
            break;
          case 13:
            st(zt);
            break;
          case 19:
            st(zt);
            break;
          case 10:
            ed(o.type._context);
            break;
          case 22:
          case 23:
            kc();
        }
        l = l.return;
      }
    if (Qt = n, Mt = n = Xi(n.current, null), sn = xr = r, cn = 0, Io = null, md = Fu = zl = 0, Kn = Gi = null, xl !== null) {
      for (r = 0; r < xl.length; r++)
        if (l = xl[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var h = d.next;
            d.next = c, o.next = h;
          }
          l.pending = o;
        }
      xl = null;
    }
    return n;
  }
  function $v(n, r) {
    do {
      var l = Mt;
      try {
        if (Br(), Zs.current = qn, Vr) {
          for (var o = ve.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Vr = !1;
        }
        if (de = 0, Ie = ke = ve = null, Su = !1, Uo = 0, Rc.current = null, l === null || l.return === null) {
          cn = 1, Io = r, Mt = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = sn, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var M = C, H = S, V = H.tag;
            if (!(H.mode & 1) && (V === 0 || V === 11 || V === 15)) {
              var F = H.alternate;
              F ? (H.updateQueue = F.updateQueue, H.memoizedState = F.memoizedState, H.lanes = F.lanes) : (H.updateQueue = null, H.memoizedState = null);
            }
            var J = zv(h);
            if (J !== null) {
              J.flags &= -257, sd(J, h, S, d, r), J.mode & 1 && Bo(d, M, r), r = J, C = M;
              var oe = r.updateQueue;
              if (oe === null) {
                var fe = /* @__PURE__ */ new Set();
                fe.add(C), r.updateQueue = fe;
              } else
                oe.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                Bo(d, M, r), Go();
                break e;
              }
              C = Error(w(426));
            }
          } else if (Ot && S.mode & 1) {
            var Kt = zv(h);
            if (Kt !== null) {
              !(Kt.flags & 65536) && (Kt.flags |= 256), sd(Kt, h, S, d, r), Jf(Qi(C, S));
              break e;
            }
          }
          d = C = Qi(C, S), cn !== 4 && (cn = 2), Gi === null ? Gi = [d] : Gi.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var _ = Lv(d, C, r);
                xv(d, _);
                break e;
              case 1:
                S = C;
                var R = d.type, k = d.stateNode;
                if (!(d.flags & 128) && (typeof R.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (da === null || !da.has(k)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var $ = Nv(d, S, r);
                  xv(d, $);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Qv(l);
      } catch (pe) {
        r = pe, Mt === l && l !== null && (Mt = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Yv() {
    var n = Nl.current;
    return Nl.current = qn, n === null ? qn : n;
  }
  function Go() {
    (cn === 0 || cn === 3 || cn === 2) && (cn = 4), Qt === null || !(zl & 268435455) && !(Fu & 268435455) || Ga(Qt, sn);
  }
  function Oc(n, r) {
    var l = We;
    We |= 2;
    var o = Yv();
    (Qt !== n || sn !== r) && (yi = null, Fl(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        $v(n, c);
      }
    while (!0);
    if (Br(), We = l, Nl.current = o, Mt !== null)
      throw Error(w(261));
    return Qt = null, sn = 0, cn;
  }
  function fy() {
    for (; Mt !== null; )
      Iv(Mt);
  }
  function dy() {
    for (; Mt !== null && !pr(); )
      Iv(Mt);
  }
  function Iv(n) {
    var r = qv(n.alternate, n, xr);
    n.memoizedProps = n.pendingProps, r === null ? Qv(n) : Mt = r, Rc.current = null;
  }
  function Qv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = uy(l, r), l !== null) {
          l.flags &= 32767, Mt = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          cn = 6, Mt = null;
          return;
        }
      } else if (l = ly(l, r, xr), l !== null) {
        Mt = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Mt = r;
        return;
      }
      Mt = r = n;
    } while (r !== null);
    cn === 0 && (cn = 5);
  }
  function qi(n, r, l) {
    var o = ht, c = fa.transition;
    try {
      fa.transition = null, ht = 1, py(n, r, l, o);
    } finally {
      fa.transition = c, ht = o;
    }
    return null;
  }
  function py(n, r, l, o) {
    do
      Vu();
    while (pa !== null);
    if (We & 6)
      throw Error(w(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(w(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Hm(n, d), n === Qt && (Mt = Qt = null, sn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || ju || (ju = !0, Xv(Pa, function() {
      return Vu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = fa.transition, fa.transition = null;
      var h = ht;
      ht = 1;
      var S = We;
      We |= 4, Rc.current = null, oy(n, l), Vv(l, n), zs(Sl), vl = !!$f, Sl = $f = null, n.current = l, sy(l), Ni(), We = S, ht = h, fa.transition = d;
    } else
      n.current = l;
    if (ju && (ju = !1, pa = n, _c = c), d = n.pendingLanes, d === 0 && (da = null), Op(l.stateNode), fn(n, ct()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (wc)
      throw wc = !1, n = yd, yd = null, n;
    return _c & 1 && n.tag !== 0 && Vu(), d = n.pendingLanes, d & 1 ? n === Dc ? Qo++ : (Qo = 0, Dc = n) : Qo = 0, mr(), null;
  }
  function Vu() {
    if (pa !== null) {
      var n = Ef(_c), r = fa.transition, l = ht;
      try {
        if (fa.transition = null, ht = 16 > n ? 16 : n, pa === null)
          var o = !1;
        else {
          if (n = pa, pa = null, _c = 0, We & 6)
            throw Error(w(331));
          var c = We;
          for (We |= 4, le = n.current; le !== null; ) {
            var d = le, h = d.child;
            if (le.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var M = S[C];
                  for (le = M; le !== null; ) {
                    var H = le;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mu(8, H, d);
                    }
                    var V = H.child;
                    if (V !== null)
                      V.return = H, le = V;
                    else
                      for (; le !== null; ) {
                        H = le;
                        var F = H.sibling, J = H.return;
                        if (jv(H), H === M) {
                          le = null;
                          break;
                        }
                        if (F !== null) {
                          F.return = J, le = F;
                          break;
                        }
                        le = J;
                      }
                  }
                }
                var oe = d.alternate;
                if (oe !== null) {
                  var fe = oe.child;
                  if (fe !== null) {
                    oe.child = null;
                    do {
                      var Kt = fe.sibling;
                      fe.sibling = null, fe = Kt;
                    } while (fe !== null);
                  }
                }
                le = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null)
              h.return = d, le = h;
            else
              e:
                for (; le !== null; ) {
                  if (d = le, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mu(9, d, d.return);
                    }
                  var _ = d.sibling;
                  if (_ !== null) {
                    _.return = d.return, le = _;
                    break e;
                  }
                  le = d.return;
                }
          }
          var R = n.current;
          for (le = R; le !== null; ) {
            h = le;
            var k = h.child;
            if (h.subtreeFlags & 2064 && k !== null)
              k.return = h, le = k;
            else
              e:
                for (h = R; le !== null; ) {
                  if (S = le, S.flags & 2048)
                    try {
                      switch (S.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Cc(9, S);
                      }
                    } catch (pe) {
                      Wt(S, S.return, pe);
                    }
                  if (S === h) {
                    le = null;
                    break e;
                  }
                  var $ = S.sibling;
                  if ($ !== null) {
                    $.return = S.return, le = $;
                    break e;
                  }
                  le = S.return;
                }
          }
          if (We = c, mr(), Da && typeof Da.onPostCommitFiberRoot == "function")
            try {
              Da.onPostCommitFiberRoot(uo, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        ht = l, fa.transition = r;
      }
    }
    return !1;
  }
  function Wv(n, r, l) {
    r = Qi(l, r), r = Lv(n, r, 1), n = Yi(n, r, 1), r = Rn(), n !== null && (pl(n, 1, r), fn(n, r));
  }
  function Wt(n, r, l) {
    if (n.tag === 3)
      Wv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Wv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (da === null || !da.has(o))) {
            n = Qi(l, n), n = Nv(r, n, 1), r = Yi(r, n, 1), n = Rn(), r !== null && (pl(r, 1, n), fn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function vy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Rn(), n.pingedLanes |= n.suspendedLanes & l, Qt === n && (sn & l) === l && (cn === 4 || cn === 3 && (sn & 130023424) === sn && 500 > ct() - xc ? Fl(n, 0) : md |= l), fn(n, r);
  }
  function Gv(n, r) {
    r === 0 && (n.mode & 1 ? (r = tu, tu <<= 1, !(tu & 130023424) && (tu = 4194304)) : r = 1);
    var l = Rn();
    n = vi(n, r), n !== null && (pl(n, r, l), fn(n, l));
  }
  function Cd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Gv(n, l);
  }
  function hy(n, r) {
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
        throw Error(w(314));
    }
    o !== null && o.delete(r), Gv(n, l);
  }
  var qv;
  qv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Yt.current)
        Tr = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Tr = !1, mi(n, r, l);
        Tr = !!(n.flags & 131072);
      }
    else
      Tr = !1, Ot && r.flags & 1048576 && Xf(r, pu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        $o(n, r), n = r.pendingProps;
        var c = ra(r, be.current);
        hu(r, l), c = A(null, r, o, n, c, l);
        var d = rn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nt(o) ? (d = !0, Bs(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ws(r), c.updater = Ol, r.stateNode = c, c._reactInternals = r, ud(r, o, n, l), r = hc(null, r, o, !0, d, l)) : (r.tag = 0, Ot && d && Vs(r), qt(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch ($o(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = my(o), n = Cr(o, n), c) {
            case 0:
              r = Ae(null, r, o, n, l);
              break e;
            case 1:
              r = Vo(null, r, o, n, l);
              break e;
            case 11:
              r = _u(null, r, o, n, l);
              break e;
            case 14:
              r = Wi(null, r, o, Cr(o.type, n), l);
              break e;
          }
          throw Error(w(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Cr(o, c), Ae(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Cr(o, c), Vo(n, r, o, c, l);
      case 3:
        e: {
          if (iy(r), n === null)
            throw Error(w(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, mu(n, r), qs(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Qi(Error(w(423)), r), r = Av(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = Qi(Error(w(424)), r), r = Av(n, r, o, l, c);
              break e;
            } else
              for (Sr = La(r.stateNode.containerInfo.firstChild), jr = r, Ot = !0, la = null, l = Tv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (jt(), o === c) {
              r = Xt(n, r, l);
              break e;
            }
            qt(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return _v(r), n === null && $s(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, Do(o, c) ? h = null : d !== null && Do(o, d) && (r.flags |= 32), Ml(n, r), qt(n, r, h, l), r.child;
      case 6:
        return n === null && $s(r), null;
      case 13:
        return Fv(n, r, l);
      case 4:
        return nd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = vu(r, null, o, l) : qt(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Cr(o, c), _u(n, r, o, c, l);
      case 7:
        return qt(n, r, r.pendingProps, l), r.child;
      case 8:
        return qt(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return qt(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, ft(pi, o._currentValue), o._currentValue = h, d !== null)
            if (ta(d.value, h)) {
              if (d.children === c.children && !Yt.current) {
                r = Xt(n, r, l);
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
                        C = Er(-1, l & -l), C.tag = 2;
                        var M = d.updateQueue;
                        if (M !== null) {
                          M = M.shared;
                          var H = M.pending;
                          H === null ? C.next = C : (C.next = H.next, H.next = C), M.pending = C;
                        }
                      }
                      d.lanes |= l, C = d.alternate, C !== null && (C.lanes |= l), td(
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
                    throw Error(w(341));
                  h.lanes |= l, S = h.alternate, S !== null && (S.lanes |= l), td(h, l, r), h = d.sibling;
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
          qt(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, hu(r, l), c = oa(c), o = o(c), r.flags |= 1, qt(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Cr(o, r.pendingProps), c = Cr(o.type, c), Wi(n, r, o, c, l);
      case 15:
        return vc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Cr(o, c), $o(n, r), r.tag = 1, Nt(o) ? (n = !0, Bs(r)) : n = !1, hu(r, l), kv(r, o, c), ud(r, o, c, l), hc(null, r, o, !0, n, l);
      case 19:
        return fd(n, r, l);
      case 22:
        return Rr(n, r, l);
    }
    throw Error(w(156, r.tag));
  };
  function Xv(n, r) {
    return bt(n, r);
  }
  function Kv(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function va(n, r, l, o) {
    return new Kv(n, r, l, o);
  }
  function Td(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function")
      return Td(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _n)
        return 11;
      if (n === vn)
        return 14;
    }
    return 2;
  }
  function Xi(n, r) {
    var l = n.alternate;
    return l === null ? (l = va(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Mc(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function")
      Td(n) && (h = 1);
    else if (typeof n == "string")
      h = 5;
    else
      e:
        switch (n) {
          case je:
            return Hl(l.children, c, d, r);
          case wn:
            h = 8, c |= 8;
            break;
          case Vn:
            return n = va(12, l, r, c | 2), n.elementType = Vn, n.lanes = d, n;
          case Me:
            return n = va(13, l, r, c), n.elementType = Me, n.lanes = d, n;
          case qe:
            return n = va(19, l, r, c), n.elementType = qe, n.lanes = d, n;
          case Zn:
            return Lc(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case $t:
                  h = 10;
                  break e;
                case yt:
                  h = 9;
                  break e;
                case _n:
                  h = 11;
                  break e;
                case vn:
                  h = 14;
                  break e;
                case Dt:
                  h = 16, o = null;
                  break e;
              }
            throw Error(w(130, n == null ? n : typeof n, ""));
        }
    return r = va(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Hl(n, r, l, o) {
    return n = va(7, n, o, r), n.lanes = l, n;
  }
  function Lc(n, r, l, o) {
    return n = va(22, n, o, r), n.elementType = Zn, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Nc(n, r, l) {
    return n = va(6, n, null, r), n.lanes = l, n;
  }
  function qo(n, r, l) {
    return r = va(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Xo(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Sf(0), this.expirationTimes = Sf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Sf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Rd(n, r, l, o, c, d, h, S, C) {
    return n = new Xo(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = va(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ws(d), n;
  }
  function Zv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: _t, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function xd(n) {
    if (!n)
      return Ya;
    n = n._reactInternals;
    e: {
      if (me(n) !== n || n.tag !== 1)
        throw Error(w(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Nt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(w(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Nt(l))
        return Oo(n, l, r);
    }
    return r;
  }
  function wd(n, r, l, o, c, d, h, S, C) {
    return n = Rd(l, o, !0, n, c, d, h, S, C), n.context = xd(null), l = n.current, o = Rn(), c = gi(l), d = Er(o, c), d.callback = r ?? null, Yi(l, d, c), n.current.lanes = c, pl(n, c, o), fn(n, o), n;
  }
  function zc(n, r, l, o) {
    var c = r.current, d = Rn(), h = gi(c);
    return l = xd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Er(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Yi(c, r, h), n !== null && (Bt(n, c, h, d), Gs(n, c, h)), h;
  }
  function Ko(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Jv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function _d(n, r) {
    Jv(n, r), (n = n.alternate) && Jv(n, r);
  }
  function yy() {
    return null;
  }
  var Dd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Uc(n) {
    this._internalRoot = n;
  }
  Zo.prototype.render = Uc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(w(409));
    zc(n, r, null, null);
  }, Zo.prototype.unmount = Uc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      qa(function() {
        zc(null, n, null, null);
      }), r[fi] = null;
    }
  };
  function Zo(n) {
    this._internalRoot = n;
  }
  Zo.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = zp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < gt.length && r !== 0 && r < gt[l].priority; l++)
        ;
      gt.splice(l, 0, n), l === 0 && Up(n);
    }
  };
  function Ki(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Ac(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function eh() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var M = Ko(h);
          d.call(M);
        };
      }
      var h = wd(r, o, n, 0, null, !1, !1, "", eh);
      return n._reactRootContainer = h, n[fi] = h.current, fu(n.nodeType === 8 ? n.parentNode : n), qa(), h;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var M = Ko(C);
        S.call(M);
      };
    }
    var C = Rd(n, 0, !1, null, null, !1, !1, "", eh);
    return n._reactRootContainer = C, n[fi] = C.current, fu(n.nodeType === 8 ? n.parentNode : n), qa(function() {
      zc(r, C, l, o);
    }), C;
  }
  function Fc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var C = Ko(h);
          S.call(C);
        };
      }
      zc(r, h, n, c);
    } else
      h = gy(l, r, n, c, o);
    return Ko(h);
  }
  Np = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = dl(r.pendingLanes);
          l !== 0 && (oo(r, l | 1), fn(r, ct()), !(We & 6) && (Hu = ct() + 500, mr()));
        }
        break;
      case 13:
        qa(function() {
          var o = vi(n, 1);
          if (o !== null) {
            var c = Rn();
            Bt(o, n, 1, c);
          }
        }), _d(n, 1);
    }
  }, Ts = function(n) {
    if (n.tag === 13) {
      var r = vi(n, 134217728);
      if (r !== null) {
        var l = Rn();
        Bt(r, n, 134217728, l);
      }
      _d(n, 134217728);
    }
  }, mt = function(n) {
    if (n.tag === 13) {
      var r = gi(n), l = vi(n, r);
      if (l !== null) {
        var o = Rn();
        Bt(l, n, r, o);
      }
      _d(n, r);
    }
  }, zp = function() {
    return ht;
  }, Cf = function(n, r) {
    var l = ht;
    try {
      return ht = n, r();
    } finally {
      ht = l;
    }
  }, Nr = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Se(o);
              if (!c)
                throw Error(w(90));
              Xr(o), Yn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ba(n, l);
        break;
      case "select":
        r = l.value, r != null && ja(n, !!l.multiple, r, !1);
    }
  }, lo = Ed, gs = qa;
  var Sy = { usingClientEntryPoint: !1, Events: [ko, du, Se, ol, Zl, Ed] }, Jo = { findFiberByHostInstance: na, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, th = { bundleType: Jo.bundleType, version: Jo.version, rendererPackageName: Jo.rendererPackageName, rendererConfig: Jo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = $e(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Jo.findFiberByHostInstance || yy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hc.isDisabled && Hc.supportsFiber)
      try {
        uo = Hc.inject(th), Da = Hc;
      } catch {
      }
  }
  return Ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy, Ea.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ki(r))
      throw Error(w(200));
    return Zv(n, r, null, l);
  }, Ea.createRoot = function(n, r) {
    if (!Ki(n))
      throw Error(w(299));
    var l = !1, o = "", c = Dd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Rd(n, 1, !1, null, null, l, !1, o, c), n[fi] = r.current, fu(n.nodeType === 8 ? n.parentNode : n), new Uc(r);
  }, Ea.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(w(188)) : (n = Object.keys(n).join(","), Error(w(268, n)));
    return n = $e(r), n = n === null ? null : n.stateNode, n;
  }, Ea.flushSync = function(n) {
    return qa(n);
  }, Ea.hydrate = function(n, r, l) {
    if (!Ac(r))
      throw Error(w(200));
    return Fc(null, n, r, !0, l);
  }, Ea.hydrateRoot = function(n, r, l) {
    if (!Ki(n))
      throw Error(w(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = Dd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = wd(r, null, n, 1, l ?? null, c, !1, d, h), n[fi] = r.current, fu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Zo(r);
  }, Ea.render = function(n, r, l) {
    if (!Ac(r))
      throw Error(w(200));
    return Fc(null, n, r, !1, l);
  }, Ea.unmountComponentAtNode = function(n) {
    if (!Ac(n))
      throw Error(w(40));
    return n._reactRootContainer ? (qa(function() {
      Fc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[fi] = null;
      });
    }), !0) : !1;
  }, Ea.unstable_batchedUpdates = Ed, Ea.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Ac(l))
      throw Error(w(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(w(38));
    return Fc(n, r, l, !1, o);
  }, Ea.version = "18.3.1-next-f1338f8080-20240426", Ea;
}
var Ca = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function Tb() {
  return nT || (nT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var B = Am, Y = iT(), w = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = !1;
    function Ne(e) {
      De = e;
    }
    function xe(e) {
      if (!De) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        tt("warn", e, a);
      }
    }
    function g(e) {
      if (!De) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        tt("error", e, a);
      }
    }
    function tt(e, t, a) {
      {
        var i = w.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ie = 0, re = 1, Ve = 2, X = 3, ue = 4, ae = 5, Oe = 6, nt = 7, ut = 8, Pt = 9, Ke = 10, He = 11, pt = 12, Qe = 13, _t = 14, je = 15, wn = 16, Vn = 17, $t = 18, yt = 19, _n = 21, Me = 22, qe = 23, vn = 24, Dt = 25, Zn = !0, I = !1, Ce = !1, te = !1, rt = !1, ot = !0, Dn = !1, Jn = !0, Fa = !0, ln = !0, qr = !0, Pn = /* @__PURE__ */ new Set(), cr = {}, Ha = {};
    function fr(e, t) {
      Xr(e, t), Xr(e + "Capture", t);
    }
    function Xr(e, t) {
      cr[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), cr[e] = t;
      {
        var a = e.toLowerCase();
        Ha[a] = e, e === "onDoubleClick" && (Ha.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Pn.add(t[i]);
    }
    var hn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $n = Object.prototype.hasOwnProperty;
    function bn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function kn(e) {
      try {
        return Yn(e), !1;
      } catch {
        return !0;
      }
    }
    function Yn(e) {
      return "" + e;
    }
    function Kr(e, t) {
      if (kn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), Yn(e);
    }
    function Ta(e) {
      if (kn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bn(e)), Yn(e);
    }
    function ri(e, t) {
      if (kn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), Yn(e);
    }
    function ja(e, t) {
      if (kn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), Yn(e);
    }
    function Ra(e) {
      if (kn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", bn(e)), Yn(e);
    }
    function Or(e) {
      if (kn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", bn(e)), Yn(e);
    }
    var Ba = 0, Mr = 1, xa = 2, Jt = 3, Lr = 4, Mi = 5, wa = 6, q = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ge = q + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Pe = new RegExp("^[" + q + "][" + ge + "]*$"), vt = {}, Ft = {};
    function mn(e) {
      return $n.call(Ft, e) ? !0 : $n.call(vt, e) ? !1 : Pe.test(e) ? (Ft[e] = !0, !0) : (vt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Gt(e, t, a) {
      return t !== null ? t.type === Ba : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function dr(e, t, a, i) {
      if (a !== null && a.type === Ba)
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
    function Rt(e, t, a, i) {
      if (t === null || typeof t > "u" || dr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Jt:
            return !t;
          case Lr:
            return t === !1;
          case Mi:
            return isNaN(t);
          case wa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Nr(e) {
      return xt.hasOwnProperty(e) ? xt[e] : null;
    }
    function Ct(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === xa || t === Jt || t === Lr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var xt = {}, Kl = [
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
    Kl.forEach(function(e) {
      xt[e] = new Ct(
        e,
        Ba,
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
      xt[t] = new Ct(
        t,
        Mr,
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
      xt[e] = new Ct(
        e,
        xa,
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
      xt[e] = new Ct(
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
      xt[e] = new Ct(
        e,
        Jt,
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
      xt[e] = new Ct(
        e,
        Jt,
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
      xt[e] = new Ct(
        e,
        Lr,
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
      xt[e] = new Ct(
        e,
        wa,
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
      xt[e] = new Ct(
        e,
        Mi,
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
    var ol = /[\-\:]([a-z])/g, Zl = function(e) {
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
      var t = e.replace(ol, Zl);
      xt[t] = new Ct(
        t,
        Mr,
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
      var t = e.replace(ol, Zl);
      xt[t] = new Ct(
        t,
        Mr,
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
      var t = e.replace(ol, Zl);
      xt[t] = new Ct(
        t,
        Mr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      xt[e] = new Ct(
        e,
        Mr,
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
    var lo = "xlinkHref";
    xt[lo] = new Ct(
      "xlinkHref",
      Mr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      xt[e] = new Ct(
        e,
        Mr,
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
    var gs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, sl = !1;
    function Jl(e) {
      !sl && gs.test(e) && (sl = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function cl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Kr(a, t), i.sanitizeURL && Jl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Lr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Rt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Rt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Jt)
            return a;
          f = e.getAttribute(s);
        }
        return Rt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function eu(e, t, a, i) {
      {
        if (!mn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Kr(a, t), u === "" + a ? a : u;
      }
    }
    function Va(e, t, a, i) {
      var u = Nr(t);
      if (!Gt(t, u, i)) {
        if (Rt(t, a, u, i) && (a = null), i || u === null) {
          if (mn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Kr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Jt ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var x = u.type, T;
          x === Jt || x === Lr && a === !0 ? T = "" : (Kr(a, m), T = "" + a, u.sanitizeURL && Jl(T.toString())), y ? e.setAttributeNS(y, m, T) : e.setAttribute(m, T);
        }
      }
    }
    var ai = Symbol.for("react.element"), zr = Symbol.for("react.portal"), _a = Symbol.for("react.fragment"), Li = Symbol.for("react.strict_mode"), fl = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), j = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), et = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), $e = Symbol.for("react.scope"), yn = Symbol.for("react.debug_trace_mode"), bt = Symbol.for("react.offscreen"), Ht = Symbol.for("react.legacy_hidden"), pr = Symbol.for("react.cache"), Ni = Symbol.for("react.tracing_marker"), ct = Symbol.iterator, In = "@@iterator";
    function Ur(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ct && e[ct] || e[In];
      return typeof t == "function" ? t : null;
    }
    var Ye = Object.assign, Pa = 0, kp, mf, uo, Da, Op, Zr, Mp;
    function Lp() {
    }
    Lp.__reactDisabledLog = !0;
    function Fm() {
      {
        if (Pa === 0) {
          kp = console.log, mf = console.info, uo = console.warn, Da = console.error, Op = console.group, Zr = console.groupCollapsed, Mp = console.groupEnd;
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
        Pa++;
      }
    }
    function Ss() {
      {
        if (Pa--, Pa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ye({}, e, {
              value: kp
            }),
            info: Ye({}, e, {
              value: mf
            }),
            warn: Ye({}, e, {
              value: uo
            }),
            error: Ye({}, e, {
              value: Da
            }),
            group: Ye({}, e, {
              value: Op
            }),
            groupCollapsed: Ye({}, e, {
              value: Zr
            }),
            groupEnd: Ye({}, e, {
              value: Mp
            })
          });
        }
        Pa < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tu = w.ReactCurrentDispatcher, dl;
    function ba(e, t, a) {
      {
        if (dl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            dl = i && i[1] || "";
          }
        return `
` + dl + e;
      }
    }
    var yf = !1, Es;
    {
      var gf = typeof WeakMap == "function" ? WeakMap : Map;
      Es = new gf();
    }
    function Cs(e, t) {
      if (!e || yf)
        return "";
      {
        var a = Es.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      yf = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = tu.current, tu.current = null, Fm();
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
            } catch (L) {
              i = L;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (L) {
              i = L;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            i = L;
          }
          e();
        }
      } catch (L) {
        if (L && i && typeof L.stack == "string") {
          for (var p = L.stack.split(`
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
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && Es.set(e, x), x;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        yf = !1, tu.current = s, Ss(), Error.prepareStackTrace = u;
      }
      var T = e ? e.displayName || e.name : "", O = T ? ba(T) : "";
      return typeof e == "function" && Es.set(e, O), O;
    }
    function Sf(e, t, a) {
      return Cs(e, !0);
    }
    function pl(e, t, a) {
      return Cs(e, !1);
    }
    function Hm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function oo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Cs(e, Hm(e));
      if (typeof e == "string")
        return ba(e);
      switch (e) {
        case me:
          return ba("Suspense");
        case Xe:
          return ba("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            return pl(e.render);
          case et:
            return oo(e.type, t, a);
          case we: {
            var i = e, u = i._payload, s = i._init;
            try {
              return oo(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ht(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ae:
          return ba(e.type);
        case wn:
          return ba("Lazy");
        case Qe:
          return ba("Suspense");
        case yt:
          return ba("SuspenseList");
        case ie:
        case Ve:
        case je:
          return pl(e.type);
        case He:
          return pl(e.type.render);
        case re:
          return Sf(e.type);
        default:
          return "";
      }
    }
    function Ef(e) {
      try {
        var t = "", a = e;
        do
          t += ht(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Np(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ts(e) {
      return e.displayName || "Context";
    }
    function mt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _a:
          return "Fragment";
        case zr:
          return "Portal";
        case fl:
          return "Profiler";
        case Li:
          return "StrictMode";
        case me:
          return "Suspense";
        case Xe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var t = e;
            return Ts(t) + ".Consumer";
          case E:
            var a = e;
            return Ts(a._context) + ".Provider";
          case Q:
            return Np(e, e.render, "ForwardRef");
          case et:
            var i = e.displayName || null;
            return i !== null ? i : mt(e.type) || "Memo";
          case we: {
            var u = e, s = u._payload, f = u._init;
            try {
              return mt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function zp(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Cf(e) {
      return e.displayName || "Context";
    }
    function Ue(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case vn:
          return "Cache";
        case Pt:
          var i = a;
          return Cf(i) + ".Consumer";
        case Ke:
          var u = a;
          return Cf(u._context) + ".Provider";
        case $t:
          return "DehydratedFragment";
        case He:
          return zp(a, a.render, "ForwardRef");
        case nt:
          return "Fragment";
        case ae:
          return a;
        case ue:
          return "Portal";
        case X:
          return "Root";
        case Oe:
          return "Text";
        case wn:
          return mt(a);
        case ut:
          return a === Li ? "StrictMode" : "Mode";
        case Me:
          return "Offscreen";
        case pt:
          return "Profiler";
        case _n:
          return "Scope";
        case Qe:
          return "Suspense";
        case yt:
          return "SuspenseList";
        case Dt:
          return "TracingMarker";
        case re:
        case ie:
        case Vn:
        case Ve:
        case _t:
        case je:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var so = w.ReactDebugCurrentFrame, en = null, Jr = !1;
    function ea() {
      {
        if (en === null)
          return null;
        var e = en._debugOwner;
        if (e !== null && typeof e < "u")
          return Ue(e);
      }
      return null;
    }
    function co() {
      return en === null ? "" : Ef(en);
    }
    function un() {
      so.getCurrentStack = null, en = null, Jr = !1;
    }
    function gt(e) {
      so.getCurrentStack = e === null ? null : co, en = e, Jr = !1;
    }
    function jm() {
      return en;
    }
    function ka(e) {
      Jr = e;
    }
    function Qn(e) {
      return "" + e;
    }
    function zi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Or(e), e;
        default:
          return "";
      }
    }
    var Up = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function nu(e, t) {
      Up[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Tf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Ap(e) {
      return e._valueTracker;
    }
    function fo(e) {
      e._valueTracker = null;
    }
    function po(e) {
      var t = "";
      return e && (Tf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ru(e) {
      var t = Tf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Or(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Or(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Or(p), i = "" + p;
          },
          stopTracking: function() {
            fo(e), delete e[t];
          }
        };
        return f;
      }
    }
    function vl(e) {
      Ap(e) || (e._valueTracker = ru(e));
    }
    function Fp(e) {
      if (!e)
        return !1;
      var t = Ap(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = po(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Rs(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var xs = !1, vo = !1, ws = !1, Rf = !1;
    function ii(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ho(e, t) {
      var a = e, i = t.checked, u = Ye({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function mo(e, t) {
      nu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !vo && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ea() || "A component", t.type), vo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !xs && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ea() || "A component", t.type), xs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: zi(t.value != null ? t.value : i),
        controlled: ii(t)
      };
    }
    function xf(e, t) {
      var a = e, i = t.checked;
      i != null && Va(a, "checked", i, !1);
    }
    function au(e, t) {
      var a = e;
      {
        var i = ii(t);
        !a._wrapperState.controlled && i && !Rf && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Rf = !0), a._wrapperState.controlled && !i && !ws && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ws = !0);
      }
      xf(e, t);
      var u = zi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Qn(u)) : a.value !== Qn(u) && (a.value = Qn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ui(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ui(a, t.type, zi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function yo(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Qn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Hp(e, t) {
      var a = e;
      au(a, t), Ar(a, t);
    }
    function Ar(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Kr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = gh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Fp(f), au(f, p);
          }
        }
      }
    }
    function Ui(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Rs(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Qn(e._wrapperState.initialValue) : e.defaultValue !== Qn(a) && (e.defaultValue = Qn(a)));
    }
    var _s = !1, iu = !1, jp = !1;
    function Ds(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? B.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || iu || (iu = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (jp || (jp = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !_s && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), _s = !0);
    }
    function wf(e, t) {
      t.value != null && e.setAttribute("value", Qn(zi(t.value)));
    }
    var go = Array.isArray;
    function gn(e) {
      return go(e);
    }
    var bs;
    bs = !1;
    function Bp() {
      var e = ea();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Vp = ["value", "defaultValue"];
    function Bm(e) {
      {
        nu("select", e);
        for (var t = 0; t < Vp.length; t++) {
          var a = Vp[t];
          if (e[a] != null) {
            var i = gn(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Bp()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Bp());
          }
        }
      }
    }
    function Ai(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var y = Qn(zi(a)), x = null, T = 0; T < u.length; T++) {
          if (u[T].value === y) {
            u[T].selected = !0, i && (u[T].defaultSelected = !0);
            return;
          }
          x === null && !u[T].disabled && (x = u[T]);
        }
        x !== null && (x.selected = !0);
      }
    }
    function _f(e, t) {
      return Ye({}, t, {
        value: void 0
      });
    }
    function Pp(e, t) {
      var a = e;
      Bm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !bs && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), bs = !0);
    }
    function Vm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ai(a, !!t.multiple, i, !1) : t.defaultValue != null && Ai(a, !!t.multiple, t.defaultValue, !0);
    }
    function Pm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Ai(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ai(a, !!t.multiple, t.defaultValue, !0) : Ai(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function $m(e, t) {
      var a = e, i = t.value;
      i != null && Ai(a, !!t.multiple, i, !1);
    }
    var Df = !1;
    function bf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ye({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function $p(e, t) {
      var a = e;
      nu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Df && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ea() || "A component"), Df = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (gn(u)) {
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
        initialValue: zi(i)
      };
    }
    function Yp(e, t) {
      var a = e, i = zi(t.value), u = zi(t.defaultValue);
      if (i != null) {
        var s = Qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Qn(u));
    }
    function Ip(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function kf(e, t) {
      Yp(e, t);
    }
    var li = "http://www.w3.org/1999/xhtml", Ym = "http://www.w3.org/1998/Math/MathML", Of = "http://www.w3.org/2000/svg";
    function ks(e) {
      switch (e) {
        case "svg":
          return Of;
        case "math":
          return Ym;
        default:
          return li;
      }
    }
    function Mf(e, t) {
      return e == null || e === li ? ks(t) : e === Of && t === "foreignObject" ? li : e;
    }
    var Im = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Os, Qp = Im(function(e, t) {
      if (e.namespaceURI === Of && !("innerHTML" in e)) {
        Os = Os || document.createElement("div"), Os.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Os.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), vr = 1, ui = 3, tn = 8, Oa = 9, hl = 11, Ms = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ui) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Wp = {
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
    }, lu = {
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
    function Gp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var qp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(lu).forEach(function(e) {
      qp.forEach(function(t) {
        lu[Gp(t, e)] = lu[e];
      });
    });
    function Ls(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(lu.hasOwnProperty(e) && lu[e]) ? t + "px" : (ja(t, e), ("" + t).trim());
    }
    var uu = /([A-Z])/g, Qm = /^ms-/;
    function Wm(e) {
      return e.replace(uu, "-$1").toLowerCase().replace(Qm, "-ms-");
    }
    var Xp = function() {
    };
    {
      var Kp = /^(?:webkit|moz|o)[A-Z]/, Zp = /^-ms-/, So = /-(.)/g, ou = /;\s*$/, su = {}, cu = {}, Jp = !1, Lf = !1, Nf = function(e) {
        return e.replace(So, function(t, a) {
          return a.toUpperCase();
        });
      }, zf = function(e) {
        su.hasOwnProperty(e) && su[e] || (su[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Nf(e.replace(Zp, "ms-"))
        ));
      }, ev = function(e) {
        su.hasOwnProperty(e) && su[e] || (su[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, tv = function(e, t) {
        cu.hasOwnProperty(t) && cu[t] || (cu[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ou, "")));
      }, nv = function(e, t) {
        Jp || (Jp = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Gm = function(e, t) {
        Lf || (Lf = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Xp = function(e, t) {
        e.indexOf("-") > -1 ? zf(e) : Kp.test(e) ? ev(e) : ou.test(t) && tv(e, t), typeof t == "number" && (isNaN(t) ? nv(e, t) : isFinite(t) || Gm(e, t));
      };
    }
    var qm = Xp;
    function Xm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Wm(i)) + ":", t += Ls(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function rv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || qm(i, t[i]);
          var s = Ls(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Km(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ta(e) {
      var t = {};
      for (var a in e)
        for (var i = Wp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Eo(e, t) {
      {
        if (!t)
          return;
        var a = ta(e), i = ta(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Km(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var av = {
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
    }, iv = Ye({
      menuitem: !0
    }, av), lv = "__html";
    function Ns(e, t) {
      if (t) {
        if (iv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(lv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function oi(e, t) {
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
    var zs = {
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
    }, uv = {
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
    }, Ma = {}, Uf = new RegExp("^(aria)-[" + ge + "]*$"), Co = new RegExp("^(aria)[A-Z][" + ge + "]*$");
    function Af(e, t) {
      {
        if ($n.call(Ma, t) && Ma[t])
          return !0;
        if (Co.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = uv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ma[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ma[t] = !0, !0;
        }
        if (Uf.test(t)) {
          var u = t.toLowerCase(), s = uv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Ma[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ma[t] = !0, !0;
        }
      }
      return !0;
    }
    function ov(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Af(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Us(e, t) {
      oi(e, t) || ov(e, t);
    }
    var ml = !1;
    function Ff(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ml && (ml = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Hf = function() {
    };
    {
      var Sn = {}, jf = /^on./, sv = /^on[^A-Z]/, cv = new RegExp("^(aria)-[" + ge + "]*$"), fv = new RegExp("^(aria)[A-Z][" + ge + "]*$");
      Hf = function(e, t, a, i) {
        if ($n.call(Sn, t) && Sn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Sn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Sn[t] = !0, !0;
          if (jf.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), Sn[t] = !0, !0;
        } else if (jf.test(t))
          return sv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Sn[t] = !0, !0;
        if (cv.test(t) || fv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Sn[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Sn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Sn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Sn[t] = !0, !0;
        var v = Nr(t), m = v !== null && v.type === Ba;
        if (zs.hasOwnProperty(u)) {
          var y = zs[u];
          if (y !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, y), Sn[t] = !0, !0;
        } else if (!m && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Sn[t] = !0, !0;
        return typeof a == "boolean" && dr(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Sn[t] = !0, !0) : m ? !0 : dr(t, a, v, !1) ? (Sn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Jt && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Sn[t] = !0), !0);
      };
    }
    var dv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Hf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function pv(e, t, a) {
      oi(e, t) || dv(e, t, a);
    }
    var si = 1, To = 2, yl = 4, Zm = si | To | yl, Ro = null;
    function xo(e) {
      Ro !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ro = e;
    }
    function Jm() {
      Ro === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ro = null;
    }
    function vv(e) {
      return e === Ro;
    }
    function As(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ui ? t.parentNode : t;
    }
    var Tt = null, Fi = null, ci = null;
    function fu(e) {
      var t = Yu(e);
      if (t) {
        if (typeof Tt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = gh(a);
          Tt(t.stateNode, t.type, i);
        }
      }
    }
    function hv(e) {
      Tt = e;
    }
    function Fs(e) {
      Fi ? ci ? ci.push(e) : ci = [e] : Fi = e;
    }
    function wo() {
      return Fi !== null || ci !== null;
    }
    function _o() {
      if (Fi) {
        var e = Fi, t = ci;
        if (Fi = null, ci = null, fu(e), t)
          for (var a = 0; a < t.length; a++)
            fu(t[a]);
      }
    }
    var gl = function(e, t) {
      return e(t);
    }, Bf = function() {
    }, Vf = !1;
    function ey() {
      var e = wo();
      e && (Bf(), _o());
    }
    function Pf(e, t, a) {
      if (Vf)
        return e(t, a);
      Vf = !0;
      try {
        return gl(e, t, a);
      } finally {
        Vf = !1, ey();
      }
    }
    function Hs(e, t, a) {
      gl = e, Bf = a;
    }
    function js(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function $f(e, t, a) {
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
          return !!(a.disabled && js(t));
        default:
          return !1;
      }
    }
    function Sl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = gh(a);
      if (i === null)
        return null;
      var u = i[t];
      if ($f(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Do = !1;
    if (hn)
      try {
        var El = {};
        Object.defineProperty(El, "passive", {
          get: function() {
            Do = !0;
          }
        }), window.addEventListener("test", El, El), window.removeEventListener("test", El, El);
      } catch {
        Do = !1;
      }
    function mv(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var Yf = mv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var If = document.createElement("react");
      Yf = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), x = !1, T = !0, O = window.event, L = Object.getOwnPropertyDescriptor(window, "event");
        function N() {
          If.removeEventListener(z, Ee, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = O);
        }
        var K = Array.prototype.slice.call(arguments, 3);
        function Ee() {
          x = !0, N(), a.apply(i, K), T = !1;
        }
        var he, Je = !1, Ge = !1;
        function D(b) {
          if (he = b.error, Je = !0, he === null && b.colno === 0 && b.lineno === 0 && (Ge = !0), b.defaultPrevented && he != null && typeof he == "object")
            try {
              he._suppressLogging = !0;
            } catch {
            }
        }
        var z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), If.addEventListener(z, Ee, !1), y.initEvent(z, !1, !1), If.dispatchEvent(y), L && Object.defineProperty(window, "event", L), x && T && (Je ? Ge && (he = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : he = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(he)), window.removeEventListener("error", D), !x)
          return N(), mv.apply(this, arguments);
      };
    }
    var ty = Yf, Hi = !1, La = null, bo = !1, ji = null, $a = {
      onError: function(e) {
        Hi = !0, La = e;
      }
    };
    function Cl(e, t, a, i, u, s, f, p, v) {
      Hi = !1, La = null, ty.apply($a, arguments);
    }
    function fi(e, t, a, i, u, s, f, p, v) {
      if (Cl.apply(this, arguments), Hi) {
        var m = Wf();
        bo || (bo = !0, ji = m);
      }
    }
    function Qf() {
      if (bo) {
        var e = ji;
        throw bo = !1, ji = null, e;
      }
    }
    function ny() {
      return Hi;
    }
    function Wf() {
      if (Hi) {
        var e = La;
        return Hi = !1, La = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function na(e) {
      return e._reactInternals;
    }
    function ko(e) {
      return e._reactInternals !== void 0;
    }
    function du(e, t) {
      e._reactInternals = t;
    }
    var Se = (
      /*                      */
      0
    ), Bi = (
      /*                */
      1
    ), kt = (
      /*                    */
      2
    ), Fe = (
      /*                       */
      4
    ), st = (
      /*                */
      16
    ), ft = (
      /*                 */
      32
    ), Ya = (
      /*                     */
      64
    ), be = (
      /*                   */
      128
    ), Yt = (
      /*            */
      256
    ), hr = (
      /*                          */
      512
    ), ra = (
      /*                     */
      1024
    ), Nt = (
      /*                      */
      2048
    ), aa = (
      /*                    */
      4096
    ), Vi = (
      /*                   */
      8192
    ), Oo = (
      /*             */
      16384
    ), Bs = Nt | Fe | Ya | hr | ra | Oo, yv = (
      /*               */
      32767
    ), Fr = (
      /*                   */
      32768
    ), En = (
      /*                */
      65536
    ), Mo = (
      /* */
      131072
    ), Gf = (
      /*                       */
      1048576
    ), qf = (
      /*                    */
      2097152
    ), mr = (
      /*                 */
      4194304
    ), Pi = (
      /*                */
      8388608
    ), yr = (
      /*               */
      16777216
    ), Tl = (
      /*              */
      33554432
    ), pu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Fe | ra | 0
    ), gr = kt | Fe | st | ft | hr | aa | Vi, Wn = Fe | Ya | hr | Vi, ia = Nt | st, On = mr | Pi | qf, di = w.ReactCurrentOwner;
    function Hr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (kt | aa)) !== Se && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === X ? a : null;
    }
    function Xf(e) {
      if (e.tag === Qe) {
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
      return e.tag === X ? e.stateNode.containerInfo : null;
    }
    function Kf(e) {
      return Hr(e) === e;
    }
    function jr(e) {
      {
        var t = di.current;
        if (t !== null && t.tag === re) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ue(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = na(e);
      return u ? Hr(u) === u : !1;
    }
    function Sr(e) {
      if (Hr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Ot(e) {
      var t = e.alternate;
      if (!t) {
        var a = Hr(e);
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
              return Sr(s), e;
            if (v === u)
              return Sr(s), t;
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
      if (i.tag !== X)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function la(e) {
      var t = Ot(e);
      return t !== null ? Zf(t) : null;
    }
    function Zf(e) {
      if (e.tag === ae || e.tag === Oe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Zf(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function gv(e) {
      var t = Ot(e);
      return t !== null ? Ps(t) : null;
    }
    function Ps(e) {
      if (e.tag === ae || e.tag === Oe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ue) {
          var a = Ps(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var $s = Y.unstable_scheduleCallback, Sv = Y.unstable_cancelCallback, Ys = Y.unstable_shouldYield, Ev = Y.unstable_requestPaint, jt = Y.unstable_now, Jf = Y.unstable_getCurrentPriorityLevel, Is = Y.unstable_ImmediatePriority, Rl = Y.unstable_UserBlockingPriority, Ia = Y.unstable_NormalPriority, Cv = Y.unstable_LowPriority, Qs = Y.unstable_IdlePriority, vu = Y.unstable_yieldValue, Tv = Y.unstable_setDisableYieldValue, pi = null, on = null, W = null, ua = !1, Br = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ed(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Fa && (e = Ye({}, e, {
          getLaneLabelMap: vi,
          injectProfilingHooks: Rv
        })), pi = t.inject(e), on = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function td(e, t) {
      if (on && typeof on.onScheduleFiberRoot == "function")
        try {
          on.onScheduleFiberRoot(pi, e, t);
        } catch (a) {
          ua || (ua = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function hu(e, t) {
      if (on && typeof on.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & be) === be;
          if (ln) {
            var i;
            switch (t) {
              case Xt:
                i = Is;
                break;
              case mi:
                i = Rl;
                break;
              case Qa:
                i = Ia;
                break;
              case Du:
                i = Qs;
                break;
              default:
                i = Ia;
                break;
            }
            on.onCommitFiberRoot(pi, e, i, a);
          }
        } catch (u) {
          ua || (ua = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function oa(e) {
      if (on && typeof on.onPostCommitFiberRoot == "function")
        try {
          on.onPostCommitFiberRoot(pi, e);
        } catch (t) {
          ua || (ua = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function xl(e) {
      if (on && typeof on.onCommitFiberUnmount == "function")
        try {
          on.onCommitFiberUnmount(pi, e);
        } catch (t) {
          ua || (ua = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function nn(e) {
      if (typeof vu == "function" && (Tv(e), Ne(e)), on && typeof on.setStrictMode == "function")
        try {
          on.setStrictMode(pi, e);
        } catch (t) {
          ua || (ua = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Rv(e) {
      W = e;
    }
    function vi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ao; a++) {
          var i = ay(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function $i(e) {
      W !== null && typeof W.markCommitStarted == "function" && W.markCommitStarted(e);
    }
    function Ws() {
      W !== null && typeof W.markCommitStopped == "function" && W.markCommitStopped();
    }
    function mu(e) {
      W !== null && typeof W.markComponentRenderStarted == "function" && W.markComponentRenderStarted(e);
    }
    function Er() {
      W !== null && typeof W.markComponentRenderStopped == "function" && W.markComponentRenderStopped();
    }
    function Yi(e) {
      W !== null && typeof W.markComponentPassiveEffectMountStarted == "function" && W.markComponentPassiveEffectMountStarted(e);
    }
    function Gs() {
      W !== null && typeof W.markComponentPassiveEffectMountStopped == "function" && W.markComponentPassiveEffectMountStopped();
    }
    function xv(e) {
      W !== null && typeof W.markComponentPassiveEffectUnmountStarted == "function" && W.markComponentPassiveEffectUnmountStarted(e);
    }
    function qs() {
      W !== null && typeof W.markComponentPassiveEffectUnmountStopped == "function" && W.markComponentPassiveEffectUnmountStopped();
    }
    function wv(e) {
      W !== null && typeof W.markComponentLayoutEffectMountStarted == "function" && W.markComponentLayoutEffectMountStarted(e);
    }
    function Lo() {
      W !== null && typeof W.markComponentLayoutEffectMountStopped == "function" && W.markComponentLayoutEffectMountStopped();
    }
    function Na(e) {
      W !== null && typeof W.markComponentLayoutEffectUnmountStarted == "function" && W.markComponentLayoutEffectUnmountStarted(e);
    }
    function yu() {
      W !== null && typeof W.markComponentLayoutEffectUnmountStopped == "function" && W.markComponentLayoutEffectUnmountStopped();
    }
    function No(e, t, a) {
      W !== null && typeof W.markComponentErrored == "function" && W.markComponentErrored(e, t, a);
    }
    function wl(e, t, a) {
      W !== null && typeof W.markComponentSuspended == "function" && W.markComponentSuspended(e, t, a);
    }
    function nd(e) {
      W !== null && typeof W.markLayoutEffectsStarted == "function" && W.markLayoutEffectsStarted(e);
    }
    function gu() {
      W !== null && typeof W.markLayoutEffectsStopped == "function" && W.markLayoutEffectsStopped();
    }
    function _v(e) {
      W !== null && typeof W.markPassiveEffectsStarted == "function" && W.markPassiveEffectsStarted(e);
    }
    function rd() {
      W !== null && typeof W.markPassiveEffectsStopped == "function" && W.markPassiveEffectsStopped();
    }
    function zt(e) {
      W !== null && typeof W.markRenderStarted == "function" && W.markRenderStarted(e);
    }
    function Xs() {
      W !== null && typeof W.markRenderYielded == "function" && W.markRenderYielded();
    }
    function Ks() {
      W !== null && typeof W.markRenderStopped == "function" && W.markRenderStopped();
    }
    function ad(e) {
      W !== null && typeof W.markRenderScheduled == "function" && W.markRenderScheduled(e);
    }
    function Zs(e, t) {
      W !== null && typeof W.markForceUpdateScheduled == "function" && W.markForceUpdateScheduled(e, t);
    }
    function zo(e, t) {
      W !== null && typeof W.markStateUpdateScheduled == "function" && W.markStateUpdateScheduled(e, t);
    }
    var de = (
      /*                         */
      0
    ), ve = (
      /*                 */
      1
    ), ke = (
      /*                    */
      2
    ), Ie = (
      /*               */
      8
    ), Vr = (
      /*              */
      16
    ), Su = Math.clz32 ? Math.clz32 : Gn, Uo = Math.log, ry = Math.LN2;
    function Gn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Uo(t) / ry | 0) | 0;
    }
    var Ao = 31, A = (
      /*                        */
      0
    ), rn = (
      /*                          */
      0
    ), ye = (
      /*                        */
      1
    ), Mn = (
      /*    */
      2
    ), Pr = (
      /*             */
      4
    ), hi = (
      /*            */
      8
    ), sa = (
      /*                     */
      16
    ), Eu = (
      /*                */
      32
    ), _l = (
      /*                       */
      4194240
    ), Cu = (
      /*                        */
      64
    ), Js = (
      /*                        */
      128
    ), ec = (
      /*                        */
      256
    ), tc = (
      /*                        */
      512
    ), nc = (
      /*                        */
      1024
    ), rc = (
      /*                        */
      2048
    ), Dl = (
      /*                        */
      4096
    ), ac = (
      /*                        */
      8192
    ), Tu = (
      /*                        */
      16384
    ), Ru = (
      /*                       */
      32768
    ), ic = (
      /*                       */
      65536
    ), Fo = (
      /*                       */
      131072
    ), lc = (
      /*                       */
      262144
    ), uc = (
      /*                       */
      524288
    ), oc = (
      /*                       */
      1048576
    ), sc = (
      /*                       */
      2097152
    ), xu = (
      /*                            */
      130023424
    ), bl = (
      /*                             */
      4194304
    ), cc = (
      /*                             */
      8388608
    ), fc = (
      /*                             */
      16777216
    ), id = (
      /*                             */
      33554432
    ), dc = (
      /*                             */
      67108864
    ), Dv = bl, Ho = (
      /*          */
      134217728
    ), ld = (
      /*                          */
      268435455
    ), wu = (
      /*               */
      268435456
    ), Ii = (
      /*                        */
      536870912
    ), qn = (
      /*                   */
      1073741824
    );
    function ay(e) {
      {
        if (e & ye)
          return "Sync";
        if (e & Mn)
          return "InputContinuousHydration";
        if (e & Pr)
          return "InputContinuous";
        if (e & hi)
          return "DefaultHydration";
        if (e & sa)
          return "Default";
        if (e & Eu)
          return "TransitionHydration";
        if (e & _l)
          return "Transition";
        if (e & xu)
          return "Retry";
        if (e & Ho)
          return "SelectiveHydration";
        if (e & wu)
          return "IdleHydration";
        if (e & Ii)
          return "Idle";
        if (e & qn)
          return "Offscreen";
      }
    }
    var wt = -1, pc = Cu, Cr = bl;
    function kl(e) {
      switch (qt(e)) {
        case ye:
          return ye;
        case Mn:
          return Mn;
        case Pr:
          return Pr;
        case hi:
          return hi;
        case sa:
          return sa;
        case Eu:
          return Eu;
        case Cu:
        case Js:
        case ec:
        case tc:
        case nc:
        case rc:
        case Dl:
        case ac:
        case Tu:
        case Ru:
        case ic:
        case Fo:
        case lc:
        case uc:
        case oc:
        case sc:
          return e & _l;
        case bl:
        case cc:
        case fc:
        case id:
        case dc:
          return e & xu;
        case Ho:
          return Ho;
        case wu:
          return wu;
        case Ii:
          return Ii;
        case qn:
          return qn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ol(e, t) {
      var a = e.pendingLanes;
      if (a === A)
        return A;
      var i = A, u = e.suspendedLanes, s = e.pingedLanes, f = a & ld;
      if (f !== A) {
        var p = f & ~u;
        if (p !== A)
          i = kl(p);
        else {
          var v = f & s;
          v !== A && (i = kl(v));
        }
      } else {
        var m = a & ~u;
        m !== A ? i = kl(m) : s !== A && (i = kl(s));
      }
      if (i === A)
        return A;
      if (t !== A && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === A) {
        var y = qt(i), x = qt(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === sa && (x & _l) !== A
        )
          return t;
      }
      (i & Pr) !== A && (i |= a & sa);
      var T = e.entangledLanes;
      if (T !== A)
        for (var O = e.entanglements, L = i & T; L > 0; ) {
          var N = Wi(L), K = 1 << N;
          i |= O[N], L &= ~K;
        }
      return i;
    }
    function bv(e, t) {
      for (var a = e.eventTimes, i = wt; t > 0; ) {
        var u = Wi(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function kv(e, t) {
      switch (e) {
        case ye:
        case Mn:
        case Pr:
          return t + 250;
        case hi:
        case sa:
        case Eu:
        case Cu:
        case Js:
        case ec:
        case tc:
        case nc:
        case rc:
        case Dl:
        case ac:
        case Tu:
        case Ru:
        case ic:
        case Fo:
        case lc:
        case uc:
        case oc:
        case sc:
          return t + 5e3;
        case bl:
        case cc:
        case fc:
        case id:
        case dc:
          return wt;
        case Ho:
        case wu:
        case Ii:
        case qn:
          return wt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), wt;
      }
    }
    function Ov(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Wi(f), v = 1 << p, m = s[p];
        m === wt ? ((v & i) === A || (v & u) !== A) && (s[p] = kv(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ud(e) {
      return kl(e.pendingLanes);
    }
    function Qi(e) {
      var t = e.pendingLanes & ~qn;
      return t !== A ? t : t & qn ? qn : A;
    }
    function od(e) {
      return (e & ye) !== A;
    }
    function jo(e) {
      return (e & ld) !== A;
    }
    function Mv(e) {
      return (e & xu) === e;
    }
    function Lv(e) {
      var t = ye | Pr | sa;
      return (e & t) === A;
    }
    function Nv(e) {
      return (e & _l) === e;
    }
    function Bo(e, t) {
      var a = Mn | Pr | hi | sa;
      return (t & a) !== A;
    }
    function zv(e, t) {
      return (t & e.expiredLanes) !== A;
    }
    function sd(e) {
      return (e & _l) !== A;
    }
    function Uv() {
      var e = pc;
      return pc <<= 1, (pc & _l) === A && (pc = Cu), e;
    }
    function Tr() {
      var e = Cr;
      return Cr <<= 1, (Cr & xu) === A && (Cr = bl), e;
    }
    function qt(e) {
      return e & -e;
    }
    function _u(e) {
      return qt(e);
    }
    function Wi(e) {
      return 31 - Su(e);
    }
    function vc(e) {
      return Wi(e);
    }
    function Rr(e, t) {
      return (e & t) !== A;
    }
    function Ml(e, t) {
      return (e & t) === t;
    }
    function Ae(e, t) {
      return e | t;
    }
    function Vo(e, t) {
      return e & ~t;
    }
    function hc(e, t) {
      return e & t;
    }
    function iy(e) {
      return e;
    }
    function Av(e, t) {
      return e !== rn && e < t ? e : t;
    }
    function Po(e) {
      for (var t = [], a = 0; a < Ao; a++)
        t.push(e);
      return t;
    }
    function Ll(e, t, a) {
      e.pendingLanes |= t, t !== Ii && (e.suspendedLanes = A, e.pingedLanes = A);
      var i = e.eventTimes, u = vc(t);
      i[u] = a;
    }
    function Fv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Wi(i), s = 1 << u;
        a[u] = wt, i &= ~s;
      }
    }
    function mc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function yc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = A, e.pingedLanes = A, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Wi(f), v = 1 << p;
        i[p] = A, u[p] = wt, s[p] = wt, f &= ~v;
      }
    }
    function cd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Wi(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Hv(e, t) {
      var a = qt(t), i;
      switch (a) {
        case Pr:
          i = Mn;
          break;
        case sa:
          i = hi;
          break;
        case Cu:
        case Js:
        case ec:
        case tc:
        case nc:
        case rc:
        case Dl:
        case ac:
        case Tu:
        case Ru:
        case ic:
        case Fo:
        case lc:
        case uc:
        case oc:
        case sc:
        case bl:
        case cc:
        case fc:
        case id:
        case dc:
          i = Eu;
          break;
        case Ii:
          i = wu;
          break;
        default:
          i = rn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== rn ? rn : i;
    }
    function gc(e, t, a) {
      if (Br)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = vc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function fd(e, t) {
      if (Br)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = vc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function $o(e, t) {
      return null;
    }
    var Xt = ye, mi = Pr, Qa = sa, Du = Ii, bu = rn;
    function ca() {
      return bu;
    }
    function It(e) {
      bu = e;
    }
    function Xn(e, t) {
      var a = bu;
      try {
        return bu = e, t();
      } finally {
        bu = a;
      }
    }
    function ly(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function uy(e, t) {
      return e > t ? e : t;
    }
    function ku(e, t) {
      return e !== 0 && e < t;
    }
    function Ln(e) {
      var t = qt(e);
      return ku(Xt, t) ? ku(mi, t) ? jo(t) ? Qa : Du : mi : Xt;
    }
    function Sc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var le;
    function Ou(e) {
      le = e;
    }
    function dd(e) {
      le(e);
    }
    var Ec;
    function oy(e) {
      Ec = e;
    }
    var Mu;
    function Cc(e) {
      Mu = e;
    }
    var Tc;
    function jv(e) {
      Tc = e;
    }
    var pd;
    function Bv(e) {
      pd = e;
    }
    var Yo = !1, Lu = [], Ut = null, Cn = null, er = null, Nu = /* @__PURE__ */ new Map(), zu = /* @__PURE__ */ new Map(), Tn = [], Vv = [
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
    function Wa(e) {
      return Vv.indexOf(e) > -1;
    }
    function sy(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function vd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ut = null;
          break;
        case "dragenter":
        case "dragleave":
          Cn = null;
          break;
        case "mouseover":
        case "mouseout":
          er = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Nu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          zu.delete(i);
          break;
        }
      }
    }
    function Uu(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = sy(t, a, i, u, s);
        if (t !== null) {
          var p = Yu(t);
          p !== null && Ec(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Pv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ut = Uu(Ut, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Cn = Uu(Cn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return er = Uu(er, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return Nu.set(m, Uu(Nu.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var y = u, x = y.pointerId;
          return zu.set(x, Uu(zu.get(x) || null, e, t, a, i, y)), !0;
        }
      }
      return !1;
    }
    function hd(e) {
      var t = ns(e.target);
      if (t !== null) {
        var a = Hr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Qe) {
            var u = Xf(a);
            if (u !== null) {
              e.blockedOn = u, pd(e.priority, function() {
                Mu(a);
              });
              return;
            }
          } else if (i === X) {
            var s = a.stateNode;
            if (Sc(s)) {
              e.blockedOn = Vs(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function cy(e) {
      for (var t = Tc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Tn.length && ku(t, Tn[i].priority); i++)
        ;
      Tn.splice(i, 0, a), i === 0 && hd(a);
    }
    function Nl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Kn(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          xo(s), u.target.dispatchEvent(s), Jm();
        } else {
          var f = Yu(i);
          return f !== null && Ec(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Rc(e, t, a) {
      Nl(e) && a.delete(t);
    }
    function fa() {
      Yo = !1, Ut !== null && Nl(Ut) && (Ut = null), Cn !== null && Nl(Cn) && (Cn = null), er !== null && Nl(er) && (er = null), Nu.forEach(Rc), zu.forEach(Rc);
    }
    function We(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Yo || (Yo = !0, Y.unstable_scheduleCallback(Y.unstable_NormalPriority, fa)));
    }
    function Qt(e) {
      if (Lu.length > 0) {
        We(Lu[0], e);
        for (var t = 1; t < Lu.length; t++) {
          var a = Lu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ut !== null && We(Ut, e), Cn !== null && We(Cn, e), er !== null && We(er, e);
      var i = function(p) {
        return We(p, e);
      };
      Nu.forEach(i), zu.forEach(i);
      for (var u = 0; u < Tn.length; u++) {
        var s = Tn[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Tn.length > 0; ) {
        var f = Tn[0];
        if (f.blockedOn !== null)
          break;
        hd(f), f.blockedOn === null && Tn.shift();
      }
    }
    var Mt = w.ReactCurrentBatchConfig, sn = !0;
    function xr(e) {
      sn = !!e;
    }
    function Au() {
      return sn;
    }
    function cn(e, t, a) {
      var i = xc(t), u;
      switch (i) {
        case Xt:
          u = Io;
          break;
        case mi:
          u = zl;
          break;
        case Qa:
        default:
          u = Fu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Io(e, t, a, i) {
      var u = ca(), s = Mt.transition;
      Mt.transition = null;
      try {
        It(Xt), Fu(e, t, a, i);
      } finally {
        It(u), Mt.transition = s;
      }
    }
    function zl(e, t, a, i) {
      var u = ca(), s = Mt.transition;
      Mt.transition = null;
      try {
        It(mi), Fu(e, t, a, i);
      } finally {
        It(u), Mt.transition = s;
      }
    }
    function Fu(e, t, a, i) {
      sn && md(e, t, a, i);
    }
    function md(e, t, a, i) {
      var u = Kn(e, t, a, i);
      if (u === null) {
        Dy(e, t, i, Gi, a), vd(e, i);
        return;
      }
      if (Pv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (vd(e, i), t & yl && Wa(e)) {
        for (; u !== null; ) {
          var s = Yu(u);
          s !== null && dd(s);
          var f = Kn(e, t, a, i);
          if (f === null && Dy(e, t, i, Gi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Dy(e, t, i, null, a);
    }
    var Gi = null;
    function Kn(e, t, a, i) {
      Gi = null;
      var u = As(i), s = ns(u);
      if (s !== null) {
        var f = Hr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Qe) {
            var v = Xf(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === X) {
            var m = f.stateNode;
            if (Sc(m))
              return Vs(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Gi = s, null;
    }
    function xc(e) {
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
          return Xt;
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
          return mi;
        case "message": {
          var t = Jf();
          switch (t) {
            case Is:
              return Xt;
            case Rl:
              return mi;
            case Ia:
            case Cv:
              return Qa;
            case Qs:
              return Du;
            default:
              return Qa;
          }
        }
        default:
          return Qa;
      }
    }
    function Hu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function yi(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function wc(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function yd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var da = null, ju = null, pa = null;
    function _c(e) {
      return da = e, ju = Wo(), !0;
    }
    function Qo() {
      da = null, ju = null, pa = null;
    }
    function Dc() {
      if (pa)
        return pa;
      var e, t = ju, a = t.length, i, u = Wo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return pa = u.slice(e, p), pa;
    }
    function Wo() {
      return "value" in da ? da.value : da.textContent;
    }
    function Ul(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Rn() {
      return !0;
    }
    function gi() {
      return !1;
    }
    function Bt(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = Rn : this.isDefaultPrevented = gi, this.isPropagationStopped = gi, this;
      }
      return Ye(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Rn);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Rn);
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
        isPersistent: Rn
      }), t;
    }
    var fn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, bc = Bt(fn), Al = Ye({}, fn, {
      view: 0,
      detail: 0
    }), gd = Bt(Al), Sd, Ga, Bu;
    function Ed(e) {
      e !== Bu && (Bu && e.type === "mousemove" ? (Sd = e.screenX - Bu.screenX, Ga = e.screenY - Bu.screenY) : (Sd = 0, Ga = 0), Bu = e);
    }
    var qa = Ye({}, Al, {
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
      getModifierState: Cd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ed(e), Sd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ga;
      }
    }), kc = Bt(qa), Fl = Ye({}, qa, {
      dataTransfer: 0
    }), $v = Bt(Fl), Yv = Ye({}, Al, {
      relatedTarget: 0
    }), Go = Bt(Yv), Oc = Ye({}, fn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), fy = Bt(Oc), dy = Ye({}, fn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Iv = Bt(dy), Qv = Ye({}, fn, {
      data: 0
    }), qi = Bt(Qv), py = qi, Vu = {
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
    }, Wv = {
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
    function Wt(e) {
      if (e.key) {
        var t = Vu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Ul(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Wv[e.keyCode] || "Unidentified" : "";
    }
    var vy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Gv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = vy[e];
      return i ? !!a[i] : !1;
    }
    function Cd(e) {
      return Gv;
    }
    var hy = Ye({}, Al, {
      key: Wt,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Cd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Ul(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ul(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), qv = Bt(hy), Xv = Ye({}, qa, {
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
    }), Kv = Bt(Xv), va = Ye({}, Al, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Cd
    }), Td = Bt(va), my = Ye({}, fn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Xi = Bt(my), Mc = Ye({}, qa, {
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
    }), Hl = Bt(Mc), Lc = [9, 13, 27, 32], Nc = 229, qo = hn && "CompositionEvent" in window, Xo = null;
    hn && "documentMode" in document && (Xo = document.documentMode);
    var Rd = hn && "TextEvent" in window && !Xo, Zv = hn && (!qo || Xo && Xo > 8 && Xo <= 11), xd = 32, wd = String.fromCharCode(xd);
    function zc() {
      fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), fr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), fr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), fr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ko = !1;
    function Jv(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function _d(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function yy(e, t) {
      return e === "keydown" && t.keyCode === Nc;
    }
    function Dd(e, t) {
      switch (e) {
        case "keyup":
          return Lc.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Nc;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Uc(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Zo(e) {
      return e.locale === "ko";
    }
    var Ki = !1;
    function Ac(e, t, a, i, u) {
      var s, f;
      if (qo ? s = _d(t) : Ki ? Dd(t, i) && (s = "onCompositionEnd") : yy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Zv && !Zo(i) && (!Ki && s === "onCompositionStart" ? Ki = _c(u) : s === "onCompositionEnd" && Ki && (f = Dc()));
      var p = ih(a, s);
      if (p.length > 0) {
        var v = new qi(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = Uc(i);
          m !== null && (v.data = m);
        }
      }
    }
    function eh(e, t) {
      switch (e) {
        case "compositionend":
          return Uc(t);
        case "keypress":
          var a = t.which;
          return a !== xd ? null : (Ko = !0, wd);
        case "textInput":
          var i = t.data;
          return i === wd && Ko ? null : i;
        default:
          return null;
      }
    }
    function gy(e, t) {
      if (Ki) {
        if (e === "compositionend" || !qo && Dd(e, t)) {
          var a = Dc();
          return Qo(), Ki = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Jv(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Zv && !Zo(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Fc(e, t, a, i, u) {
      var s;
      if (Rd ? s = eh(t, i) : s = gy(t, i), !s)
        return null;
      var f = ih(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new py("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Sy(e, t, a, i, u, s, f) {
      Ac(e, t, a, i, u), Fc(e, t, a, i, u);
    }
    var Jo = {
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
    function th(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Jo[e.type] : t === "textarea";
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
    function Hc(e) {
      if (!hn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      fr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Fs(i);
      var u = ih(t, "onChange");
      if (u.length > 0) {
        var s = new bc("onChange", "change", null, a, i);
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
      r(t, o, e, As(e)), Pf(h, t);
    }
    function h(e) {
      D0(e, 0);
    }
    function S(e) {
      var t = Yc(e);
      if (Fp(t))
        return e;
    }
    function C(e, t) {
      if (e === "change")
        return t;
    }
    var M = !1;
    hn && (M = Hc("input") && (!document.documentMode || document.documentMode > 9));
    function H(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", F);
    }
    function V() {
      l && (l.detachEvent("onpropertychange", F), l = null, o = null);
    }
    function F(e) {
      e.propertyName === "value" && S(o) && d(e);
    }
    function J(e, t, a) {
      e === "focusin" ? (V(), H(t, a)) : e === "focusout" && V();
    }
    function oe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return S(o);
    }
    function fe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Kt(e, t) {
      if (e === "click")
        return S(t);
    }
    function _(e, t) {
      if (e === "input" || e === "change")
        return S(t);
    }
    function R(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ui(e, "number", e.value);
    }
    function k(e, t, a, i, u, s, f) {
      var p = a ? Yc(a) : window, v, m;
      if (c(p) ? v = C : th(p) ? M ? v = _ : (v = oe, m = J) : fe(p) && (v = Kt), v) {
        var y = v(t, a);
        if (y) {
          r(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && R(p);
    }
    function $() {
      Xr("onMouseEnter", ["mouseout", "mouseover"]), Xr("onMouseLeave", ["mouseout", "mouseover"]), Xr("onPointerEnter", ["pointerout", "pointerover"]), Xr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function pe(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !vv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (ns(m) || Vd(m)))
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
          var L = i.relatedTarget || i.toElement;
          if (T = a, O = L ? ns(L) : null, O !== null) {
            var N = Hr(O);
            (O !== N || O.tag !== ae && O.tag !== Oe) && (O = null);
          }
        } else
          T = null, O = a;
        if (T !== O) {
          var K = kc, Ee = "onMouseLeave", he = "onMouseEnter", Je = "mouse";
          (t === "pointerout" || t === "pointerover") && (K = Kv, Ee = "onPointerLeave", he = "onPointerEnter", Je = "pointer");
          var Ge = T == null ? y : Yc(T), D = O == null ? y : Yc(O), z = new K(Ee, Je + "leave", T, i, u);
          z.target = Ge, z.relatedTarget = D;
          var b = null, P = ns(u);
          if (P === a) {
            var ne = new K(he, Je + "enter", O, i, u);
            ne.target = D, ne.relatedTarget = Ge, b = ne;
          }
          bT(e, z, b, T, O);
        }
      }
    }
    function Te(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var se = typeof Object.is == "function" ? Object.is : Te;
    function Re(e, t) {
      if (se(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!$n.call(t, s) || !se(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function dn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function at(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Si(e, t) {
      for (var a = dn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === ui) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = dn(at(a));
      }
    }
    function Ey(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return oT(e, u, s, f, p);
    }
    function oT(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, y = e, x = null;
      e:
        for (; ; ) {
          for (var T = null; y === t && (a === 0 || y.nodeType === ui) && (f = s + a), y === i && (u === 0 || y.nodeType === ui) && (p = s + u), y.nodeType === ui && (s += y.nodeValue.length), (T = y.firstChild) !== null; )
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
    function sT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = Si(e, f), y = Si(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var x = a.createRange();
          x.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(y.node, y.offset)) : (x.setEnd(y.node, y.offset), u.addRange(x));
        }
      }
    }
    function h0(e) {
      return e && e.nodeType === ui;
    }
    function m0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : h0(e) ? !1 : h0(t) ? m0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cT(e) {
      return e && e.ownerDocument && m0(e.ownerDocument.documentElement, e);
    }
    function fT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function y0() {
      for (var e = window, t = Rs(); t instanceof e.HTMLIFrameElement; ) {
        if (fT(t))
          e = t.contentWindow;
        else
          return t;
        t = Rs(e.document);
      }
      return t;
    }
    function Cy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dT() {
      var e = y0();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? vT(e) : null
      };
    }
    function pT(e) {
      var t = y0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && cT(a)) {
        i !== null && Cy(a) && hT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === vr && u.push({
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
    function vT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ey(e), t || {
        start: 0,
        end: 0
      };
    }
    function hT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : sT(e, t);
    }
    var mT = hn && "documentMode" in document && document.documentMode <= 11;
    function yT() {
      fr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var jc = null, Ty = null, bd = null, Ry = !1;
    function gT(e) {
      if ("selectionStart" in e && Cy(e))
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
    function ST(e) {
      return e.window === e ? e.document : e.nodeType === Oa ? e : e.ownerDocument;
    }
    function g0(e, t, a) {
      var i = ST(a);
      if (!(Ry || jc == null || jc !== Rs(i))) {
        var u = gT(jc);
        if (!bd || !Re(bd, u)) {
          bd = u;
          var s = ih(Ty, "onSelect");
          if (s.length > 0) {
            var f = new bc("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = jc;
          }
        }
      }
    }
    function ET(e, t, a, i, u, s, f) {
      var p = a ? Yc(a) : window;
      switch (t) {
        case "focusin":
          (th(p) || p.contentEditable === "true") && (jc = p, Ty = a, bd = null);
          break;
        case "focusout":
          jc = null, Ty = null, bd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, g0(e, i, u);
          break;
        case "selectionchange":
          if (mT)
            break;
        case "keydown":
        case "keyup":
          g0(e, i, u);
      }
    }
    function nh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Bc = {
      animationend: nh("Animation", "AnimationEnd"),
      animationiteration: nh("Animation", "AnimationIteration"),
      animationstart: nh("Animation", "AnimationStart"),
      transitionend: nh("Transition", "TransitionEnd")
    }, xy = {}, S0 = {};
    hn && (S0 = document.createElement("div").style, "AnimationEvent" in window || (delete Bc.animationend.animation, delete Bc.animationiteration.animation, delete Bc.animationstart.animation), "TransitionEvent" in window || delete Bc.transitionend.transition);
    function rh(e) {
      if (xy[e])
        return xy[e];
      if (!Bc[e])
        return e;
      var t = Bc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in S0)
          return xy[e] = t[a];
      return e;
    }
    var E0 = rh("animationend"), C0 = rh("animationiteration"), T0 = rh("animationstart"), R0 = rh("transitionend"), x0 = /* @__PURE__ */ new Map(), w0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Pu(e, t) {
      x0.set(e, t), fr(t, [e]);
    }
    function CT() {
      for (var e = 0; e < w0.length; e++) {
        var t = w0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Pu(a, "on" + i);
      }
      Pu(E0, "onAnimationEnd"), Pu(C0, "onAnimationIteration"), Pu(T0, "onAnimationStart"), Pu("dblclick", "onDoubleClick"), Pu("focusin", "onFocus"), Pu("focusout", "onBlur"), Pu(R0, "onTransitionEnd");
    }
    function TT(e, t, a, i, u, s, f) {
      var p = x0.get(t);
      if (p !== void 0) {
        var v = bc, m = t;
        switch (t) {
          case "keypress":
            if (Ul(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = qv;
            break;
          case "focusin":
            m = "focus", v = Go;
            break;
          case "focusout":
            m = "blur", v = Go;
            break;
          case "beforeblur":
          case "afterblur":
            v = Go;
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
            v = kc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = $v;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Td;
            break;
          case E0:
          case C0:
          case T0:
            v = fy;
            break;
          case R0:
            v = Xi;
            break;
          case "scroll":
            v = gd;
            break;
          case "wheel":
            v = Hl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Iv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Kv;
            break;
        }
        var y = (s & yl) !== 0;
        {
          var x = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", T = _T(a, p, i.type, y, x);
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
    CT(), $(), n(), yT(), zc();
    function RT(e, t, a, i, u, s, f) {
      TT(e, t, a, i, u, s);
      var p = (s & Zm) === 0;
      p && (pe(e, t, a, i, u), k(e, t, a, i, u), ET(e, t, a, i, u), Sy(e, t, a, i, u));
    }
    var kd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(kd));
    function _0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, fi(i, t, void 0, e), e.currentTarget = null;
    }
    function xT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          _0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], x = y.instance, T = y.currentTarget, O = y.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          _0(e, O, T), i = x;
        }
    }
    function D0(e, t) {
      for (var a = (t & yl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        xT(s, f, a);
      }
      Qf();
    }
    function wT(e, t, a, i, u) {
      var s = As(a), f = [];
      RT(f, e, i, a, s, t), D0(f, t);
    }
    function Vt(e, t) {
      wy.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = tx(t), u = kT(e);
      i.has(u) || (b0(t, e, To, a), i.add(u));
    }
    function _y(e, t, a) {
      wy.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= yl), b0(a, e, i, t);
    }
    var ah = "_reactListening" + Math.random().toString(36).slice(2);
    function Od(e) {
      if (!e[ah]) {
        e[ah] = !0, Pn.forEach(function(a) {
          a !== "selectionchange" && (wy.has(a) || _y(a, !1, e), _y(a, !0, e));
        });
        var t = e.nodeType === Oa ? e : e.ownerDocument;
        t !== null && (t[ah] || (t[ah] = !0, _y("selectionchange", !1, t)));
      }
    }
    function b0(e, t, a, i, u) {
      var s = cn(e, t, a), f = void 0;
      Do && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? wc(e, t, s, f) : yi(e, t, s) : f !== void 0 ? yd(e, t, s, f) : Hu(e, t, s);
    }
    function k0(e, t) {
      return e === t || e.nodeType === tn && e.parentNode === t;
    }
    function Dy(e, t, a, i, u) {
      var s = i;
      if (!(t & si) && !(t & To)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === X || v === ue) {
                var m = p.stateNode.containerInfo;
                if (k0(m, f))
                  break;
                if (v === ue)
                  for (var y = p.return; y !== null; ) {
                    var x = y.tag;
                    if (x === X || x === ue) {
                      var T = y.stateNode.containerInfo;
                      if (k0(T, f))
                        return;
                    }
                    y = y.return;
                  }
                for (; m !== null; ) {
                  var O = ns(m);
                  if (O === null)
                    return;
                  var L = O.tag;
                  if (L === ae || L === Oe) {
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
      Pf(function() {
        return wT(e, t, a, s);
      });
    }
    function Md(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function _T(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var x = m, T = x.stateNode, O = x.tag;
        if (O === ae && T !== null && (y = T, p !== null)) {
          var L = Sl(m, p);
          L != null && v.push(Md(m, L, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function ih(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ae && f !== null) {
          var v = f, m = Sl(u, a);
          m != null && i.unshift(Md(u, m, v));
          var y = Sl(u, t);
          y != null && i.push(Md(u, y, v));
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
      while (e && e.tag !== ae);
      return e || null;
    }
    function DT(e, t) {
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
    function O0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, x = v.tag;
        if (m !== null && m === i)
          break;
        if (x === ae && y !== null) {
          var T = y;
          if (u) {
            var O = Sl(p, s);
            O != null && f.unshift(Md(p, O, T));
          } else if (!u) {
            var L = Sl(p, s);
            L != null && f.push(Md(p, L, T));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function bT(e, t, a, i, u) {
      var s = i && u ? DT(i, u) : null;
      i !== null && O0(e, t, i, s, !1), u !== null && a !== null && O0(e, a, u, s, !0);
    }
    function kT(e, t) {
      return e + "__bubble";
    }
    var ha = !1, Ld = "dangerouslySetInnerHTML", lh = "suppressContentEditableWarning", $u = "suppressHydrationWarning", M0 = "autoFocus", es = "children", ts = "style", uh = "__html", by, oh, Nd, L0, sh, N0, z0;
    by = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, oh = function(e, t) {
      Us(e, t), Ff(e, t), pv(e, t, {
        registrationNameDependencies: cr,
        possibleRegistrationNames: Ha
      });
    }, N0 = hn && !document.documentMode, Nd = function(e, t, a) {
      if (!ha) {
        var i = ch(a), u = ch(t);
        u !== i && (ha = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, L0 = function(e) {
      if (!ha) {
        ha = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, sh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, z0 = function(e, t) {
      var a = e.namespaceURI === li ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var OT = /\r\n?/g, MT = /\u0000|\uFFFD/g;
    function ch(e) {
      Ra(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(OT, `
`).replace(MT, "");
    }
    function fh(e, t, a, i) {
      var u = ch(t), s = ch(e);
      if (s !== u && (i && (ha || (ha = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Zn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function U0(e) {
      return e.nodeType === Oa ? e : e.ownerDocument;
    }
    function LT() {
    }
    function dh(e) {
      e.onclick = LT;
    }
    function NT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === ts)
            f && Object.freeze(f), rv(t, f);
          else if (s === Ld) {
            var p = f ? f[uh] : void 0;
            p != null && Qp(t, p);
          } else if (s === es)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && Ms(t, f);
            } else
              typeof f == "number" && Ms(t, "" + f);
          else
            s === lh || s === $u || s === M0 || (cr.hasOwnProperty(s) ? f != null && (typeof f != "function" && sh(s, f), s === "onScroll" && Vt("scroll", t)) : f != null && Va(t, s, f, u));
        }
    }
    function zT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === ts ? rv(e, f) : s === Ld ? Qp(e, f) : s === es ? Ms(e, f) : Va(e, s, f, i);
      }
    }
    function UT(e, t, a, i) {
      var u, s = U0(a), f, p = i;
      if (p === li && (p = ks(e)), p === li) {
        if (u = oi(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === li && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !$n.call(by, e) && (by[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function AT(e, t) {
      return U0(t).createTextNode(e);
    }
    function FT(e, t, a, i) {
      var u = oi(t, a);
      oh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Vt("cancel", e), Vt("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Vt("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < kd.length; f++)
            Vt(kd[f], e);
          s = a;
          break;
        case "source":
          Vt("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Vt("error", e), Vt("load", e), s = a;
          break;
        case "details":
          Vt("toggle", e), s = a;
          break;
        case "input":
          mo(e, a), s = ho(e, a), Vt("invalid", e);
          break;
        case "option":
          Ds(e, a), s = a;
          break;
        case "select":
          Pp(e, a), s = _f(e, a), Vt("invalid", e);
          break;
        case "textarea":
          $p(e, a), s = bf(e, a), Vt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ns(t, s), NT(t, e, i, s, u), t) {
        case "input":
          vl(e), yo(e, a, !1);
          break;
        case "textarea":
          vl(e), Ip(e);
          break;
        case "option":
          wf(e, a);
          break;
        case "select":
          Vm(e, a);
          break;
        default:
          typeof s.onClick == "function" && dh(e);
          break;
      }
    }
    function HT(e, t, a, i, u) {
      oh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ho(e, a), p = ho(e, i), s = [];
          break;
        case "select":
          f = _f(e, a), p = _f(e, i), s = [];
          break;
        case "textarea":
          f = bf(e, a), p = bf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && dh(e);
          break;
      }
      Ns(t, p);
      var v, m, y = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === ts) {
            var x = f[v];
            for (m in x)
              x.hasOwnProperty(m) && (y || (y = {}), y[m] = "");
          } else
            v === Ld || v === es || v === lh || v === $u || v === M0 || (cr.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var T = p[v], O = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || T === O || T == null && O == null))
          if (v === ts)
            if (T && Object.freeze(T), O) {
              for (m in O)
                O.hasOwnProperty(m) && (!T || !T.hasOwnProperty(m)) && (y || (y = {}), y[m] = "");
              for (m in T)
                T.hasOwnProperty(m) && O[m] !== T[m] && (y || (y = {}), y[m] = T[m]);
            } else
              y || (s || (s = []), s.push(v, y)), y = T;
          else if (v === Ld) {
            var L = T ? T[uh] : void 0, N = O ? O[uh] : void 0;
            L != null && N !== L && (s = s || []).push(v, L);
          } else
            v === es ? (typeof T == "string" || typeof T == "number") && (s = s || []).push(v, "" + T) : v === lh || v === $u || (cr.hasOwnProperty(v) ? (T != null && (typeof T != "function" && sh(v, T), v === "onScroll" && Vt("scroll", e)), !s && O !== T && (s = [])) : (s = s || []).push(v, T));
      }
      return y && (Eo(y, p[ts]), (s = s || []).push(ts, y)), s;
    }
    function jT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && xf(e, u);
      var s = oi(a, i), f = oi(a, u);
      switch (zT(e, t, s, f), a) {
        case "input":
          au(e, u);
          break;
        case "textarea":
          Yp(e, u);
          break;
        case "select":
          Pm(e, u);
          break;
      }
    }
    function BT(e) {
      {
        var t = e.toLowerCase();
        return zs.hasOwnProperty(t) && zs[t] || null;
      }
    }
    function VT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = oi(t, a), oh(t, a), t) {
        case "dialog":
          Vt("cancel", e), Vt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Vt("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < kd.length; m++)
            Vt(kd[m], e);
          break;
        case "source":
          Vt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Vt("error", e), Vt("load", e);
          break;
        case "details":
          Vt("toggle", e);
          break;
        case "input":
          mo(e, a), Vt("invalid", e);
          break;
        case "option":
          Ds(e, a);
          break;
        case "select":
          Pp(e, a), Vt("invalid", e);
          break;
        case "textarea":
          $p(e, a), Vt("invalid", e);
          break;
      }
      Ns(t, a);
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
      for (var L in a)
        if (a.hasOwnProperty(L)) {
          var N = a[L];
          if (L === es)
            typeof N == "string" ? e.textContent !== N && (a[$u] !== !0 && fh(e.textContent, N, s, f), O = [es, N]) : typeof N == "number" && e.textContent !== "" + N && (a[$u] !== !0 && fh(e.textContent, N, s, f), O = [es, "" + N]);
          else if (cr.hasOwnProperty(L))
            N != null && (typeof N != "function" && sh(L, N), L === "onScroll" && Vt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var K = void 0, Ee = p && Dn ? null : Nr(L);
            if (a[$u] !== !0) {
              if (!(L === lh || L === $u || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              L === "value" || L === "checked" || L === "selected")) {
                if (L === Ld) {
                  var he = e.innerHTML, Je = N ? N[uh] : void 0;
                  if (Je != null) {
                    var Ge = z0(e, Je);
                    Ge !== he && Nd(L, he, Ge);
                  }
                } else if (L === ts) {
                  if (v.delete(L), N0) {
                    var D = Xm(N);
                    K = e.getAttribute("style"), D !== K && Nd(L, K, D);
                  }
                } else if (p && !Dn)
                  v.delete(L.toLowerCase()), K = eu(e, L, N), N !== K && Nd(L, K, N);
                else if (!Gt(L, Ee, p) && !Rt(L, N, Ee, p)) {
                  var z = !1;
                  if (Ee !== null)
                    v.delete(Ee.attributeName), K = cl(e, L, N, Ee);
                  else {
                    var b = i;
                    if (b === li && (b = ks(t)), b === li)
                      v.delete(L.toLowerCase());
                    else {
                      var P = BT(L);
                      P !== null && P !== L && (z = !0, v.delete(P)), v.delete(L);
                    }
                    K = eu(e, L, N);
                  }
                  var ne = Dn;
                  !ne && N !== K && !z && Nd(L, K, N);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[$u] !== !0 && L0(v), t) {
        case "input":
          vl(e), yo(e, a, !0);
          break;
        case "textarea":
          vl(e), Ip(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && dh(e);
          break;
      }
      return O;
    }
    function PT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (ha)
          return;
        ha = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (ha)
          return;
        ha = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function My(e, t, a) {
      {
        if (ha)
          return;
        ha = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || ha)
          return;
        ha = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function $T(e, t, a) {
      switch (t) {
        case "input":
          Hp(e, a);
          return;
        case "textarea":
          kf(e, a);
          return;
        case "select":
          $m(e, a);
          return;
      }
    }
    var zd = function() {
    }, Ud = function() {
    };
    {
      var YT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], A0 = [
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
      ], IT = A0.concat(["button"]), QT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], F0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Ud = function(e, t) {
        var a = Ye({}, e || F0), i = {
          tag: t
        };
        return A0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), IT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), YT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var WT = function(e, t) {
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
            return QT.indexOf(t) === -1;
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
      }, GT = function(e, t) {
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
      }, H0 = {};
      zd = function(e, t, a) {
        a = a || F0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = WT(e, u) ? null : i, f = s ? null : GT(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!H0[m]) {
            H0[m] = !0;
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
    var ph = "suppressHydrationWarning", vh = "$", hh = "/$", Ad = "$?", Fd = "$!", qT = "style", Ny = null, zy = null;
    function XT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Oa:
        case hl: {
          t = i === Oa ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Mf(null, "");
          break;
        }
        default: {
          var s = i === tn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Mf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Ud(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function KT(e, t, a) {
      {
        var i = e, u = Mf(i.namespace, t), s = Ud(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function ck(e) {
      return e;
    }
    function ZT(e) {
      Ny = Au(), zy = dT();
      var t = null;
      return xr(!1), t;
    }
    function JT(e) {
      pT(zy), xr(Ny), Ny = null, zy = null;
    }
    function eR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (zd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Ud(f.ancestorInfo, e);
          zd(null, p, v);
        }
        s = f.namespace;
      }
      var m = UT(e, t, a, s);
      return Bd(u, m), Py(m, t), m;
    }
    function tR(e, t) {
      e.appendChild(t);
    }
    function nR(e, t, a, i, u) {
      switch (FT(e, t, a, i), t) {
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
    function rR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Ud(f.ancestorInfo, t);
          zd(null, p, v);
        }
      }
      return HT(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function aR(e, t, a, i) {
      {
        var u = a;
        zd(null, e, u.ancestorInfo);
      }
      var s = AT(e, t);
      return Bd(i, s), s;
    }
    function iR() {
      var e = window.event;
      return e === void 0 ? Qa : xc(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, lR = typeof clearTimeout == "function" ? clearTimeout : void 0, Fy = -1, j0 = typeof Promise == "function" ? Promise : void 0, uR = typeof queueMicrotask == "function" ? queueMicrotask : typeof j0 < "u" ? function(e) {
      return j0.resolve(null).then(e).catch(oR);
    } : Ay;
    function oR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function sR(e, t, a, i) {
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
    function cR(e, t, a, i, u, s) {
      jT(e, t, a, i, u), Py(e, u);
    }
    function B0(e) {
      Ms(e, "");
    }
    function fR(e, t, a) {
      e.nodeValue = a;
    }
    function dR(e, t) {
      e.appendChild(t);
    }
    function pR(e, t) {
      var a;
      e.nodeType === tn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && dh(a);
    }
    function vR(e, t, a) {
      e.insertBefore(t, a);
    }
    function hR(e, t, a) {
      e.nodeType === tn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function mR(e, t) {
      e.removeChild(t);
    }
    function yR(e, t) {
      e.nodeType === tn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Hy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === tn) {
          var s = u.data;
          if (s === hh)
            if (i === 0) {
              e.removeChild(u), Qt(t);
              return;
            } else
              i--;
          else
            (s === vh || s === Ad || s === Fd) && i++;
        }
        a = u;
      } while (a);
      Qt(t);
    }
    function gR(e, t) {
      e.nodeType === tn ? Hy(e.parentNode, t) : e.nodeType === vr && Hy(e, t), Qt(e);
    }
    function SR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ER(e) {
      e.nodeValue = "";
    }
    function CR(e, t) {
      e = e;
      var a = t[qT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ls("display", i);
    }
    function TR(e, t) {
      e.nodeValue = t;
    }
    function RR(e) {
      e.nodeType === vr ? e.textContent = "" : e.nodeType === Oa && e.documentElement && e.removeChild(e.documentElement);
    }
    function xR(e, t, a) {
      return e.nodeType !== vr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function wR(e, t) {
      return t === "" || e.nodeType !== ui ? null : e;
    }
    function _R(e) {
      return e.nodeType !== tn ? null : e;
    }
    function V0(e) {
      return e.data === Ad;
    }
    function jy(e) {
      return e.data === Fd;
    }
    function DR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function bR(e, t) {
      e._reactRetry = t;
    }
    function mh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === vr || t === ui)
          break;
        if (t === tn) {
          var a = e.data;
          if (a === vh || a === Fd || a === Ad)
            break;
          if (a === hh)
            return null;
        }
      }
      return e;
    }
    function Hd(e) {
      return mh(e.nextSibling);
    }
    function kR(e) {
      return mh(e.firstChild);
    }
    function OR(e) {
      return mh(e.firstChild);
    }
    function MR(e) {
      return mh(e.nextSibling);
    }
    function LR(e, t, a, i, u, s, f) {
      Bd(s, e), Py(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & ve) !== de;
      return VT(e, t, a, p, i, m, f);
    }
    function NR(e, t, a, i) {
      return Bd(a, e), a.mode & ve, PT(e, t);
    }
    function zR(e, t) {
      Bd(t, e);
    }
    function UR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === tn) {
          var i = t.data;
          if (i === hh) {
            if (a === 0)
              return Hd(t);
            a--;
          } else
            (i === vh || i === Fd || i === Ad) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function P0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === tn) {
          var i = t.data;
          if (i === vh || i === Fd || i === Ad) {
            if (a === 0)
              return t;
            a--;
          } else
            i === hh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function AR(e) {
      Qt(e);
    }
    function FR(e) {
      Qt(e);
    }
    function HR(e) {
      return e !== "head" && e !== "body";
    }
    function jR(e, t, a, i) {
      var u = !0;
      fh(t.nodeValue, a, i, u);
    }
    function BR(e, t, a, i, u, s) {
      if (t[ph] !== !0) {
        var f = !0;
        fh(i.nodeValue, u, s, f);
      }
    }
    function VR(e, t) {
      t.nodeType === vr ? ky(e, t) : t.nodeType === tn || Oy(e, t);
    }
    function PR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === vr ? ky(a, t) : t.nodeType === tn || Oy(a, t));
      }
    }
    function $R(e, t, a, i, u) {
      (u || t[ph] !== !0) && (i.nodeType === vr ? ky(a, i) : i.nodeType === tn || Oy(a, i));
    }
    function YR(e, t, a) {
      My(e, t);
    }
    function IR(e, t) {
      Ly(e, t);
    }
    function QR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && My(i, t);
      }
    }
    function WR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function GR(e, t, a, i, u, s) {
      (s || t[ph] !== !0) && My(a, i);
    }
    function qR(e, t, a, i, u) {
      (u || t[ph] !== !0) && Ly(a, i);
    }
    function XR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function KR(e) {
      Od(e);
    }
    var Pc = Math.random().toString(36).slice(2), $c = "__reactFiber$" + Pc, By = "__reactProps$" + Pc, jd = "__reactContainer$" + Pc, Vy = "__reactEvents$" + Pc, ZR = "__reactListeners$" + Pc, JR = "__reactHandles$" + Pc;
    function ex(e) {
      delete e[$c], delete e[By], delete e[Vy], delete e[ZR], delete e[JR];
    }
    function Bd(e, t) {
      t[$c] = e;
    }
    function yh(e, t) {
      t[jd] = e;
    }
    function $0(e) {
      e[jd] = null;
    }
    function Vd(e) {
      return !!e[jd];
    }
    function ns(e) {
      var t = e[$c];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[jd] || a[$c], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = P0(e); u !== null; ) {
              var s = u[$c];
              if (s)
                return s;
              u = P0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Yu(e) {
      var t = e[$c] || e[jd];
      return t && (t.tag === ae || t.tag === Oe || t.tag === Qe || t.tag === X) ? t : null;
    }
    function Yc(e) {
      if (e.tag === ae || e.tag === Oe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function gh(e) {
      return e[By] || null;
    }
    function Py(e, t) {
      e[By] = t;
    }
    function tx(e) {
      var t = e[Vy];
      return t === void 0 && (t = e[Vy] = /* @__PURE__ */ new Set()), t;
    }
    var Y0 = {}, I0 = w.ReactDebugCurrentFrame;
    function Sh(e) {
      if (e) {
        var t = e._owner, a = oo(e.type, e._source, t ? t.type : null);
        I0.setExtraStackFrame(a);
      } else
        I0.setExtraStackFrame(null);
    }
    function Ei(e, t, a, i, u) {
      {
        var s = Function.call.bind($n);
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
            p && !(p instanceof Error) && (Sh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Sh(null)), p instanceof Error && !(p.message in Y0) && (Y0[p.message] = !0, Sh(u), g("Failed %s type: %s", a, p.message), Sh(null));
          }
      }
    }
    var $y = [], Eh;
    Eh = [];
    var jl = -1;
    function Iu(e) {
      return {
        current: e
      };
    }
    function wr(e, t) {
      if (jl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Eh[jl] && g("Unexpected Fiber popped."), e.current = $y[jl], $y[jl] = null, Eh[jl] = null, jl--;
    }
    function _r(e, t, a) {
      jl++, $y[jl] = e.current, Eh[jl] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var za = {};
    Object.freeze(za);
    var Bl = Iu(za), Zi = Iu(!1), Iy = za;
    function Ic(e, t, a) {
      return a && Ji(t) ? Iy : Bl.current;
    }
    function Q0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Qc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return za;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ue(e) || "Unknown";
          Ei(i, s, "context", p);
        }
        return u && Q0(e, t, s), s;
      }
    }
    function Ch() {
      return Zi.current;
    }
    function Ji(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Th(e) {
      wr(Zi, e), wr(Bl, e);
    }
    function Qy(e) {
      wr(Zi, e), wr(Bl, e);
    }
    function W0(e, t, a) {
      {
        if (Bl.current !== za)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        _r(Bl, t, e), _r(Zi, a, e);
      }
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ue(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ue(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ue(e) || "Unknown";
          Ei(u, f, "child context", v);
        }
        return Ye({}, a, f);
      }
    }
    function Rh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || za;
        return Iy = Bl.current, _r(Bl, a, e), _r(Zi, Zi.current, e), !0;
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = G0(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, wr(Zi, e), wr(Bl, e), _r(Bl, u, e), _r(Zi, a, e);
        } else
          wr(Zi, e), _r(Zi, a, e);
      }
    }
    function nx(e) {
      {
        if (!Kf(e) || e.tag !== re)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case X:
              return t.stateNode.context;
            case re: {
              var a = t.type;
              if (Ji(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Qu = 0, xh = 1, Vl = null, Wy = !1, Gy = !1;
    function X0(e) {
      Vl === null ? Vl = [e] : Vl.push(e);
    }
    function rx(e) {
      Wy = !0, X0(e);
    }
    function K0() {
      Wy && Wu();
    }
    function Wu() {
      if (!Gy && Vl !== null) {
        Gy = !0;
        var e = 0, t = ca();
        try {
          var a = !0, i = Vl;
          for (It(Xt); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Vl = null, Wy = !1;
        } catch (s) {
          throw Vl !== null && (Vl = Vl.slice(e + 1)), $s(Is, Wu), s;
        } finally {
          It(t), Gy = !1;
        }
      }
      return null;
    }
    var Wc = [], Gc = 0, wh = null, _h = 0, Xa = [], Ka = 0, rs = null, Pl = 1, $l = "";
    function ax(e) {
      return is(), (e.flags & Gf) !== Se;
    }
    function ix(e) {
      return is(), _h;
    }
    function lx() {
      var e = $l, t = Pl, a = t & ~ux(t);
      return a.toString(32) + e;
    }
    function as(e, t) {
      is(), Wc[Gc++] = _h, Wc[Gc++] = wh, wh = e, _h = t;
    }
    function Z0(e, t, a) {
      is(), Xa[Ka++] = Pl, Xa[Ka++] = $l, Xa[Ka++] = rs, rs = e;
      var i = Pl, u = $l, s = Dh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Dh(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, x = (f & y).toString(32), T = f >> m, O = s - m, L = Dh(t) + O, N = p << O, K = N | T, Ee = x + u;
        Pl = 1 << L | K, $l = Ee;
      } else {
        var he = p << s, Je = he | f, Ge = u;
        Pl = 1 << v | Je, $l = Ge;
      }
    }
    function qy(e) {
      is();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        as(e, a), Z0(e, a, i);
      }
    }
    function Dh(e) {
      return 32 - Su(e);
    }
    function ux(e) {
      return 1 << Dh(e) - 1;
    }
    function Xy(e) {
      for (; e === wh; )
        wh = Wc[--Gc], Wc[Gc] = null, _h = Wc[--Gc], Wc[Gc] = null;
      for (; e === rs; )
        rs = Xa[--Ka], Xa[Ka] = null, $l = Xa[--Ka], Xa[Ka] = null, Pl = Xa[--Ka], Xa[Ka] = null;
    }
    function ox() {
      return is(), rs !== null ? {
        id: Pl,
        overflow: $l
      } : null;
    }
    function sx(e, t) {
      is(), Xa[Ka++] = Pl, Xa[Ka++] = $l, Xa[Ka++] = rs, Pl = t.id, $l = t.overflow, rs = e;
    }
    function is() {
      nr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var tr = null, Za = null, Ci = !1, ls = !1, Gu = null;
    function cx() {
      Ci && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function J0() {
      ls = !0;
    }
    function fx() {
      return ls;
    }
    function dx(e) {
      var t = e.stateNode.containerInfo;
      return Za = OR(t), tr = e, Ci = !0, Gu = null, ls = !1, !0;
    }
    function px(e, t, a) {
      return Za = MR(t), tr = e, Ci = !0, Gu = null, ls = !1, a !== null && sx(e, a), !0;
    }
    function eE(e, t) {
      switch (e.tag) {
        case X: {
          VR(e.stateNode.containerInfo, t);
          break;
        }
        case ae: {
          var a = (e.mode & ve) !== de;
          $R(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Qe: {
          var i = e.memoizedState;
          i.dehydrated !== null && PR(i.dehydrated, t);
          break;
        }
      }
    }
    function tE(e, t) {
      eE(e, t);
      var a = yD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= st) : i.push(a);
    }
    function Ky(e, t) {
      {
        if (ls)
          return;
        switch (e.tag) {
          case X: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ae:
                var i = t.type;
                t.pendingProps, YR(a, i);
                break;
              case Oe:
                var u = t.pendingProps;
                IR(a, u);
                break;
            }
            break;
          }
          case ae: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ae: {
                var v = t.type, m = t.pendingProps, y = (e.mode & ve) !== de;
                GR(
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
              case Oe: {
                var x = t.pendingProps, T = (e.mode & ve) !== de;
                qR(
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
          case Qe: {
            var O = e.memoizedState, L = O.dehydrated;
            if (L !== null)
              switch (t.tag) {
                case ae:
                  var N = t.type;
                  t.pendingProps, QR(L, N);
                  break;
                case Oe:
                  var K = t.pendingProps;
                  WR(L, K);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function nE(e, t) {
      t.flags = t.flags & ~aa | kt, Ky(e, t);
    }
    function rE(e, t) {
      switch (e.tag) {
        case ae: {
          var a = e.type;
          e.pendingProps;
          var i = xR(t, a);
          return i !== null ? (e.stateNode = i, tr = e, Za = kR(i), !0) : !1;
        }
        case Oe: {
          var u = e.pendingProps, s = wR(t, u);
          return s !== null ? (e.stateNode = s, tr = e, Za = null, !0) : !1;
        }
        case Qe: {
          var f = _R(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ox(),
              retryLane: qn
            };
            e.memoizedState = p;
            var v = gD(f);
            return v.return = e, e.child = v, tr = e, Za = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Zy(e) {
      return (e.mode & ve) !== de && (e.flags & be) === Se;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (Ci) {
        var t = Za;
        if (!t) {
          Zy(e) && (Ky(tr, e), Jy()), nE(tr, e), Ci = !1, tr = e;
          return;
        }
        var a = t;
        if (!rE(e, t)) {
          Zy(e) && (Ky(tr, e), Jy()), t = Hd(a);
          var i = tr;
          if (!t || !rE(e, t)) {
            nE(tr, e), Ci = !1, tr = e;
            return;
          }
          tE(i, a);
        }
      }
    }
    function vx(e, t, a) {
      var i = e.stateNode, u = !ls, s = LR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function hx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = NR(t, a, e);
      if (i) {
        var u = tr;
        if (u !== null)
          switch (u.tag) {
            case X: {
              var s = u.stateNode.containerInfo, f = (u.mode & ve) !== de;
              jR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ae: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & ve) !== de;
              BR(
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
    function mx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      zR(a, e);
    }
    function yx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return UR(a);
    }
    function aE(e) {
      for (var t = e.return; t !== null && t.tag !== ae && t.tag !== X && t.tag !== Qe; )
        t = t.return;
      tr = t;
    }
    function bh(e) {
      if (e !== tr)
        return !1;
      if (!Ci)
        return aE(e), Ci = !0, !1;
      if (e.tag !== X && (e.tag !== ae || HR(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = Za;
        if (t)
          if (Zy(e))
            iE(e), Jy();
          else
            for (; t; )
              tE(e, t), t = Hd(t);
      }
      return aE(e), e.tag === Qe ? Za = yx(e) : Za = tr ? Hd(e.stateNode) : null, !0;
    }
    function gx() {
      return Ci && Za !== null;
    }
    function iE(e) {
      for (var t = Za; t; )
        eE(e, t), t = Hd(t);
    }
    function qc() {
      tr = null, Za = null, Ci = !1, ls = !1;
    }
    function lE() {
      Gu !== null && (J1(Gu), Gu = null);
    }
    function nr() {
      return Ci;
    }
    function tg(e) {
      Gu === null ? Gu = [e] : Gu.push(e);
    }
    var Sx = w.ReactCurrentBatchConfig, Ex = null;
    function Cx() {
      return Sx.transition;
    }
    var Ti = {
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
      var Tx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Ie && (t = a), a = a.return;
        return t;
      }, us = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Pd = [], $d = [], Yd = [], Id = [], Qd = [], Wd = [], os = /* @__PURE__ */ new Set();
      Ti.recordUnsafeLifecycleWarnings = function(e, t) {
        os.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Pd.push(e), e.mode & Ie && typeof t.UNSAFE_componentWillMount == "function" && $d.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Yd.push(e), e.mode & Ie && typeof t.UNSAFE_componentWillReceiveProps == "function" && Id.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Qd.push(e), e.mode & Ie && typeof t.UNSAFE_componentWillUpdate == "function" && Wd.push(e));
      }, Ti.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Pd.length > 0 && (Pd.forEach(function(T) {
          e.add(Ue(T) || "Component"), os.add(T.type);
        }), Pd = []);
        var t = /* @__PURE__ */ new Set();
        $d.length > 0 && ($d.forEach(function(T) {
          t.add(Ue(T) || "Component"), os.add(T.type);
        }), $d = []);
        var a = /* @__PURE__ */ new Set();
        Yd.length > 0 && (Yd.forEach(function(T) {
          a.add(Ue(T) || "Component"), os.add(T.type);
        }), Yd = []);
        var i = /* @__PURE__ */ new Set();
        Id.length > 0 && (Id.forEach(function(T) {
          i.add(Ue(T) || "Component"), os.add(T.type);
        }), Id = []);
        var u = /* @__PURE__ */ new Set();
        Qd.length > 0 && (Qd.forEach(function(T) {
          u.add(Ue(T) || "Component"), os.add(T.type);
        }), Qd = []);
        var s = /* @__PURE__ */ new Set();
        if (Wd.length > 0 && (Wd.forEach(function(T) {
          s.add(Ue(T) || "Component"), os.add(T.type);
        }), Wd = []), t.size > 0) {
          var f = us(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = us(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = us(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = us(e);
          xe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = us(a);
          xe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var x = us(u);
          xe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var kh = /* @__PURE__ */ new Map(), uE = /* @__PURE__ */ new Set();
      Ti.recordLegacyContextWarning = function(e, t) {
        var a = Tx(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!uE.has(e.type)) {
          var i = kh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], kh.set(a, i)), i.push(e));
        }
      }, Ti.flushLegacyContextWarning = function() {
        kh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ue(s) || "Component"), uE.add(s.type);
            });
            var u = us(i);
            try {
              gt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              un();
            }
          }
        });
      }, Ti.discardPendingWarnings = function() {
        Pd = [], $d = [], Yd = [], Id = [], Qd = [], Wd = [], kh = /* @__PURE__ */ new Map();
      };
    }
    var ng, rg, ag, ig, lg, oE = function(e, t) {
    };
    ng = !1, rg = !1, ag = {}, ig = {}, lg = {}, oE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ue(t) || "Component";
        ig[a] || (ig[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Rx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Gd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Ie || Jn) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== re) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Rx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ue(e) || "Component";
          ag[u] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ag[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== re)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ri(i, "ref");
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
    function Oh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Mh(e) {
      {
        var t = Ue(e) || "Component";
        if (lg[t])
          return;
        lg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function sE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function cE(e) {
      function t(D, z) {
        if (e) {
          var b = D.deletions;
          b === null ? (D.deletions = [z], D.flags |= st) : b.push(z);
        }
      }
      function a(D, z) {
        if (!e)
          return null;
        for (var b = z; b !== null; )
          t(D, b), b = b.sibling;
        return null;
      }
      function i(D, z) {
        for (var b = /* @__PURE__ */ new Map(), P = z; P !== null; )
          P.key !== null ? b.set(P.key, P) : b.set(P.index, P), P = P.sibling;
        return b;
      }
      function u(D, z) {
        var b = ys(D, z);
        return b.index = 0, b.sibling = null, b;
      }
      function s(D, z, b) {
        if (D.index = b, !e)
          return D.flags |= Gf, z;
        var P = D.alternate;
        if (P !== null) {
          var ne = P.index;
          return ne < z ? (D.flags |= kt, z) : ne;
        } else
          return D.flags |= kt, z;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= kt), D;
      }
      function p(D, z, b, P) {
        if (z === null || z.tag !== Oe) {
          var ne = t0(b, D.mode, P);
          return ne.return = D, ne;
        } else {
          var Z = u(z, b);
          return Z.return = D, Z;
        }
      }
      function v(D, z, b, P) {
        var ne = b.type;
        if (ne === _a)
          return y(D, z, b.props.children, P, b.key);
        if (z !== null && (z.elementType === ne || // Keep this check inline so it only runs on the false path:
        hC(z, b) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ne == "object" && ne !== null && ne.$$typeof === we && sE(ne) === z.type)) {
          var Z = u(z, b.props);
          return Z.ref = Gd(D, z, b), Z.return = D, Z._debugSource = b._source, Z._debugOwner = b._owner, Z;
        }
        var _e = e0(b, D.mode, P);
        return _e.ref = Gd(D, z, b), _e.return = D, _e;
      }
      function m(D, z, b, P) {
        if (z === null || z.tag !== ue || z.stateNode.containerInfo !== b.containerInfo || z.stateNode.implementation !== b.implementation) {
          var ne = n0(b, D.mode, P);
          return ne.return = D, ne;
        } else {
          var Z = u(z, b.children || []);
          return Z.return = D, Z;
        }
      }
      function y(D, z, b, P, ne) {
        if (z === null || z.tag !== nt) {
          var Z = io(b, D.mode, P, ne);
          return Z.return = D, Z;
        } else {
          var _e = u(z, b);
          return _e.return = D, _e;
        }
      }
      function x(D, z, b) {
        if (typeof z == "string" && z !== "" || typeof z == "number") {
          var P = t0("" + z, D.mode, b);
          return P.return = D, P;
        }
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case ai: {
              var ne = e0(z, D.mode, b);
              return ne.ref = Gd(D, null, z), ne.return = D, ne;
            }
            case zr: {
              var Z = n0(z, D.mode, b);
              return Z.return = D, Z;
            }
            case we: {
              var _e = z._payload, ze = z._init;
              return x(D, ze(_e), b);
            }
          }
          if (gn(z) || Ur(z)) {
            var Et = io(z, D.mode, b, null);
            return Et.return = D, Et;
          }
          Oh(D, z);
        }
        return typeof z == "function" && Mh(D), null;
      }
      function T(D, z, b, P) {
        var ne = z !== null ? z.key : null;
        if (typeof b == "string" && b !== "" || typeof b == "number")
          return ne !== null ? null : p(D, z, "" + b, P);
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case ai:
              return b.key === ne ? v(D, z, b, P) : null;
            case zr:
              return b.key === ne ? m(D, z, b, P) : null;
            case we: {
              var Z = b._payload, _e = b._init;
              return T(D, z, _e(Z), P);
            }
          }
          if (gn(b) || Ur(b))
            return ne !== null ? null : y(D, z, b, P, null);
          Oh(D, b);
        }
        return typeof b == "function" && Mh(D), null;
      }
      function O(D, z, b, P, ne) {
        if (typeof P == "string" && P !== "" || typeof P == "number") {
          var Z = D.get(b) || null;
          return p(z, Z, "" + P, ne);
        }
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case ai: {
              var _e = D.get(P.key === null ? b : P.key) || null;
              return v(z, _e, P, ne);
            }
            case zr: {
              var ze = D.get(P.key === null ? b : P.key) || null;
              return m(z, ze, P, ne);
            }
            case we:
              var Et = P._payload, it = P._init;
              return O(D, z, b, it(Et), ne);
          }
          if (gn(P) || Ur(P)) {
            var pn = D.get(b) || null;
            return y(z, pn, P, ne, null);
          }
          Oh(z, P);
        }
        return typeof P == "function" && Mh(z), null;
      }
      function L(D, z, b) {
        {
          if (typeof D != "object" || D === null)
            return z;
          switch (D.$$typeof) {
            case ai:
            case zr:
              oE(D, b);
              var P = D.key;
              if (typeof P != "string")
                break;
              if (z === null) {
                z = /* @__PURE__ */ new Set(), z.add(P);
                break;
              }
              if (!z.has(P)) {
                z.add(P);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", P);
              break;
            case we:
              var ne = D._payload, Z = D._init;
              L(Z(ne), z, b);
              break;
          }
        }
        return z;
      }
      function N(D, z, b, P) {
        for (var ne = null, Z = 0; Z < b.length; Z++) {
          var _e = b[Z];
          ne = L(_e, ne, D);
        }
        for (var ze = null, Et = null, it = z, pn = 0, lt = 0, an = null; it !== null && lt < b.length; lt++) {
          it.index > lt ? (an = it, it = null) : an = it.sibling;
          var br = T(D, it, b[lt], P);
          if (br === null) {
            it === null && (it = an);
            break;
          }
          e && it && br.alternate === null && t(D, it), pn = s(br, pn, lt), Et === null ? ze = br : Et.sibling = br, Et = br, it = an;
        }
        if (lt === b.length) {
          if (a(D, it), nr()) {
            var sr = lt;
            as(D, sr);
          }
          return ze;
        }
        if (it === null) {
          for (; lt < b.length; lt++) {
            var Aa = x(D, b[lt], P);
            Aa !== null && (pn = s(Aa, pn, lt), Et === null ? ze = Aa : Et.sibling = Aa, Et = Aa);
          }
          if (nr()) {
            var Qr = lt;
            as(D, Qr);
          }
          return ze;
        }
        for (var Wr = i(D, it); lt < b.length; lt++) {
          var kr = O(Wr, D, lt, b[lt], P);
          kr !== null && (e && kr.alternate !== null && Wr.delete(kr.key === null ? lt : kr.key), pn = s(kr, pn, lt), Et === null ? ze = kr : Et.sibling = kr, Et = kr);
        }
        if (e && Wr.forEach(function(hf) {
          return t(D, hf);
        }), nr()) {
          var Xl = lt;
          as(D, Xl);
        }
        return ze;
      }
      function K(D, z, b, P) {
        var ne = Ur(b);
        if (typeof ne != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          b[Symbol.toStringTag] === "Generator" && (rg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), b.entries === ne && (ng || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
          var Z = ne.call(b);
          if (Z)
            for (var _e = null, ze = Z.next(); !ze.done; ze = Z.next()) {
              var Et = ze.value;
              _e = L(Et, _e, D);
            }
        }
        var it = ne.call(b);
        if (it == null)
          throw new Error("An iterable object provided no iterator.");
        for (var pn = null, lt = null, an = z, br = 0, sr = 0, Aa = null, Qr = it.next(); an !== null && !Qr.done; sr++, Qr = it.next()) {
          an.index > sr ? (Aa = an, an = null) : Aa = an.sibling;
          var Wr = T(D, an, Qr.value, P);
          if (Wr === null) {
            an === null && (an = Aa);
            break;
          }
          e && an && Wr.alternate === null && t(D, an), br = s(Wr, br, sr), lt === null ? pn = Wr : lt.sibling = Wr, lt = Wr, an = Aa;
        }
        if (Qr.done) {
          if (a(D, an), nr()) {
            var kr = sr;
            as(D, kr);
          }
          return pn;
        }
        if (an === null) {
          for (; !Qr.done; sr++, Qr = it.next()) {
            var Xl = x(D, Qr.value, P);
            Xl !== null && (br = s(Xl, br, sr), lt === null ? pn = Xl : lt.sibling = Xl, lt = Xl);
          }
          if (nr()) {
            var hf = sr;
            as(D, hf);
          }
          return pn;
        }
        for (var _p = i(D, an); !Qr.done; sr++, Qr = it.next()) {
          var ul = O(_p, D, sr, Qr.value, P);
          ul !== null && (e && ul.alternate !== null && _p.delete(ul.key === null ? sr : ul.key), br = s(ul, br, sr), lt === null ? pn = ul : lt.sibling = ul, lt = ul);
        }
        if (e && _p.forEach(function(qD) {
          return t(D, qD);
        }), nr()) {
          var GD = sr;
          as(D, GD);
        }
        return pn;
      }
      function Ee(D, z, b, P) {
        if (z !== null && z.tag === Oe) {
          a(D, z.sibling);
          var ne = u(z, b);
          return ne.return = D, ne;
        }
        a(D, z);
        var Z = t0(b, D.mode, P);
        return Z.return = D, Z;
      }
      function he(D, z, b, P) {
        for (var ne = b.key, Z = z; Z !== null; ) {
          if (Z.key === ne) {
            var _e = b.type;
            if (_e === _a) {
              if (Z.tag === nt) {
                a(D, Z.sibling);
                var ze = u(Z, b.props.children);
                return ze.return = D, ze._debugSource = b._source, ze._debugOwner = b._owner, ze;
              }
            } else if (Z.elementType === _e || // Keep this check inline so it only runs on the false path:
            hC(Z, b) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof _e == "object" && _e !== null && _e.$$typeof === we && sE(_e) === Z.type) {
              a(D, Z.sibling);
              var Et = u(Z, b.props);
              return Et.ref = Gd(D, Z, b), Et.return = D, Et._debugSource = b._source, Et._debugOwner = b._owner, Et;
            }
            a(D, Z);
            break;
          } else
            t(D, Z);
          Z = Z.sibling;
        }
        if (b.type === _a) {
          var it = io(b.props.children, D.mode, P, b.key);
          return it.return = D, it;
        } else {
          var pn = e0(b, D.mode, P);
          return pn.ref = Gd(D, z, b), pn.return = D, pn;
        }
      }
      function Je(D, z, b, P) {
        for (var ne = b.key, Z = z; Z !== null; ) {
          if (Z.key === ne)
            if (Z.tag === ue && Z.stateNode.containerInfo === b.containerInfo && Z.stateNode.implementation === b.implementation) {
              a(D, Z.sibling);
              var _e = u(Z, b.children || []);
              return _e.return = D, _e;
            } else {
              a(D, Z);
              break;
            }
          else
            t(D, Z);
          Z = Z.sibling;
        }
        var ze = n0(b, D.mode, P);
        return ze.return = D, ze;
      }
      function Ge(D, z, b, P) {
        var ne = typeof b == "object" && b !== null && b.type === _a && b.key === null;
        if (ne && (b = b.props.children), typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case ai:
              return f(he(D, z, b, P));
            case zr:
              return f(Je(D, z, b, P));
            case we:
              var Z = b._payload, _e = b._init;
              return Ge(D, z, _e(Z), P);
          }
          if (gn(b))
            return N(D, z, b, P);
          if (Ur(b))
            return K(D, z, b, P);
          Oh(D, b);
        }
        return typeof b == "string" && b !== "" || typeof b == "number" ? f(Ee(D, z, "" + b, P)) : (typeof b == "function" && Mh(D), a(D, z));
      }
      return Ge;
    }
    var Xc = cE(!0), fE = cE(!1);
    function xx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ys(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ys(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function wx(e, t) {
      for (var a = e.child; a !== null; )
        dD(a, t), a = a.sibling;
    }
    var ug = Iu(null), og;
    og = {};
    var Lh = null, Kc = null, sg = null, Nh = !1;
    function zh() {
      Lh = null, Kc = null, sg = null, Nh = !1;
    }
    function dE() {
      Nh = !0;
    }
    function pE() {
      Nh = !1;
    }
    function vE(e, t, a) {
      _r(ug, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== og && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = og;
    }
    function cg(e, t) {
      var a = ug.current;
      wr(ug, t), e._currentValue = a;
    }
    function fg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Ml(i.childLanes, t) ? u !== null && !Ml(u.childLanes, t) && (u.childLanes = Ae(u.childLanes, t)) : (i.childLanes = Ae(i.childLanes, t), u !== null && (u.childLanes = Ae(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _x(e, t, a) {
      Dx(e, t, a);
    }
    function Dx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === re) {
                var p = _u(a), v = Yl(wt, p);
                v.tag = Ah;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, x = y.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), y.pending = v;
                }
              }
              i.lanes = Ae(i.lanes, a);
              var T = i.alternate;
              T !== null && (T.lanes = Ae(T.lanes, a)), fg(i.return, a, e), s.lanes = Ae(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ke)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === $t) {
          var O = i.return;
          if (O === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          O.lanes = Ae(O.lanes, a);
          var L = O.alternate;
          L !== null && (L.lanes = Ae(L.lanes, a)), fg(O, a, e), u = i.sibling;
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
    function Zc(e, t) {
      Lh = e, Kc = null, sg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Rr(a.lanes, t) && sp(), a.firstContext = null);
      }
    }
    function xn(e) {
      Nh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (sg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Kc === null) {
          if (Lh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Kc = a, Lh.dependencies = {
            lanes: A,
            firstContext: a
          };
        } else
          Kc = Kc.next = a;
      }
      return t;
    }
    var ss = null;
    function dg(e) {
      ss === null ? ss = [e] : ss.push(e);
    }
    function bx() {
      if (ss !== null) {
        for (var e = 0; e < ss.length; e++) {
          var t = ss[e], a = t.interleaved;
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
        ss = null;
      }
    }
    function hE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Uh(e, i);
    }
    function kx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Ox(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Uh(e, i);
    }
    function ma(e, t) {
      return Uh(e, t);
    }
    var Mx = Uh;
    function Uh(e, t) {
      e.lanes = Ae(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ae(a.lanes, t)), a === null && (e.flags & (kt | aa)) !== Se && fC(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ae(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ae(a.childLanes, t) : (u.flags & (kt | aa)) !== Se && fC(e), i = u, u = u.return;
      if (i.tag === X) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var mE = 0, yE = 1, Ah = 2, pg = 3, Fh = !1, vg, Hh;
    vg = !1, Hh = null;
    function hg(e) {
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
    function gE(e, t) {
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
    function Yl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: mE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function qu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Hh === u && !vg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vg = !0), k_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Mx(e, a);
      } else
        return Ox(e, u, t, a);
    }
    function jh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (sd(a)) {
          var s = u.lanes;
          s = hc(s, e.pendingLanes);
          var f = Ae(s, a);
          u.lanes = f, cd(e, f);
        }
      }
    }
    function mg(e, t) {
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
        case yE: {
          var f = a.payload;
          if (typeof f == "function") {
            dE();
            var p = f.call(s, i, u);
            {
              if (e.mode & Ie) {
                nn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  nn(!1);
                }
              }
              pE();
            }
            return p;
          }
          return f;
        }
        case pg:
          e.flags = e.flags & ~En | be;
        case mE: {
          var v = a.payload, m;
          if (typeof v == "function") {
            dE(), m = v.call(s, i, u);
            {
              if (e.mode & Ie) {
                nn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  nn(!1);
                }
              }
              pE();
            }
          } else
            m = v;
          return m == null ? i : Ye({}, i, m);
        }
        case Ah:
          return Fh = !0, i;
      }
      return i;
    }
    function Bh(e, t, a, i) {
      var u = e.updateQueue;
      Fh = !1, Hh = u.shared;
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
        var O = u.baseState, L = A, N = null, K = null, Ee = null, he = s;
        do {
          var Je = he.lane, Ge = he.eventTime;
          if (Ml(i, Je)) {
            if (Ee !== null) {
              var z = {
                eventTime: Ge,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: rn,
                tag: he.tag,
                payload: he.payload,
                callback: he.callback,
                next: null
              };
              Ee = Ee.next = z;
            }
            O = Lx(e, u, he, O, t, a);
            var b = he.callback;
            if (b !== null && // If the update was already committed, we should not queue its
            // callback again.
            he.lane !== rn) {
              e.flags |= Ya;
              var P = u.effects;
              P === null ? u.effects = [he] : P.push(he);
            }
          } else {
            var D = {
              eventTime: Ge,
              lane: Je,
              tag: he.tag,
              payload: he.payload,
              callback: he.callback,
              next: null
            };
            Ee === null ? (K = Ee = D, N = O) : Ee = Ee.next = D, L = Ae(L, Je);
          }
          if (he = he.next, he === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ne = p, Z = ne.next;
            ne.next = null, he = Z, u.lastBaseUpdate = ne, u.shared.pending = null;
          }
        } while (!0);
        Ee === null && (N = O), u.baseState = N, u.firstBaseUpdate = K, u.lastBaseUpdate = Ee;
        var _e = u.shared.interleaved;
        if (_e !== null) {
          var ze = _e;
          do
            L = Ae(L, ze.lane), ze = ze.next;
          while (ze !== _e);
        } else
          s === null && (u.shared.lanes = A);
        Cp(L), e.lanes = L, e.memoizedState = O;
      }
      Hh = null;
    }
    function Nx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function SE() {
      Fh = !1;
    }
    function Vh() {
      return Fh;
    }
    function EE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Nx(f, a));
        }
    }
    var qd = {}, Xu = Iu(qd), Xd = Iu(qd), Ph = Iu(qd);
    function $h(e) {
      if (e === qd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function CE() {
      var e = $h(Ph.current);
      return e;
    }
    function yg(e, t) {
      _r(Ph, t, e), _r(Xd, e, e), _r(Xu, qd, e);
      var a = XT(t);
      wr(Xu, e), _r(Xu, a, e);
    }
    function Jc(e) {
      wr(Xu, e), wr(Xd, e), wr(Ph, e);
    }
    function gg() {
      var e = $h(Xu.current);
      return e;
    }
    function TE(e) {
      $h(Ph.current);
      var t = $h(Xu.current), a = KT(t, e.type);
      t !== a && (_r(Xd, e, e), _r(Xu, a, e));
    }
    function Sg(e) {
      Xd.current === e && (wr(Xu, e), wr(Xd, e));
    }
    var zx = 0, RE = 1, xE = 1, Kd = 2, Ri = Iu(zx);
    function Eg(e, t) {
      return (e & t) !== 0;
    }
    function ef(e) {
      return e & RE;
    }
    function Cg(e, t) {
      return e & RE | t;
    }
    function Ux(e, t) {
      return e | t;
    }
    function Ku(e, t) {
      _r(Ri, t, e);
    }
    function tf(e) {
      wr(Ri, e);
    }
    function Ax(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Yh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Qe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || V0(i) || jy(i))
              return t;
          }
        } else if (t.tag === yt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & be) !== Se;
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
    var ya = (
      /*   */
      0
    ), Nn = (
      /* */
      1
    ), el = (
      /*  */
      2
    ), zn = (
      /*    */
      4
    ), rr = (
      /*   */
      8
    ), Tg = [];
    function Rg() {
      for (var e = 0; e < Tg.length; e++) {
        var t = Tg[e];
        t._workInProgressVersionPrimary = null;
      }
      Tg.length = 0;
    }
    function Fx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ee = w.ReactCurrentDispatcher, Zd = w.ReactCurrentBatchConfig, xg, nf;
    xg = /* @__PURE__ */ new Set();
    var cs = A, St = null, Un = null, An = null, Ih = !1, Jd = !1, ep = 0, Hx = 0, jx = 25, U = null, Ja = null, Zu = -1, wg = !1;
    function dt() {
      {
        var e = U;
        Ja === null ? Ja = [e] : Ja.push(e);
      }
    }
    function G() {
      {
        var e = U;
        Ja !== null && (Zu++, Ja[Zu] !== e && Bx(e));
      }
    }
    function rf(e) {
      e != null && !gn(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", U, typeof e);
    }
    function Bx(e) {
      {
        var t = Ue(St);
        if (!xg.has(t) && (xg.add(t), Ja !== null)) {
          for (var a = "", i = 30, u = 0; u <= Zu; u++) {
            for (var s = Ja[u], f = u === Zu ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function Dr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function _g(e, t) {
      if (wg)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", U), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, U, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!se(e[a], t[a]))
          return !1;
      return !0;
    }
    function af(e, t, a, i, u, s) {
      cs = s, St = t, Ja = e !== null ? e._debugHookTypes : null, Zu = -1, wg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = A, e !== null && e.memoizedState !== null ? ee.current = QE : Ja !== null ? ee.current = IE : ee.current = YE;
      var f = a(i, u);
      if (Jd) {
        var p = 0;
        do {
          if (Jd = !1, ep = 0, p >= jx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, wg = !1, Un = null, An = null, t.updateQueue = null, Zu = -1, ee.current = WE, f = a(i, u);
        } while (Jd);
      }
      ee.current = am, t._debugHookTypes = Ja;
      var v = Un !== null && Un.next !== null;
      if (cs = A, St = null, Un = null, An = null, U = null, Ja = null, Zu = -1, e !== null && (e.flags & On) !== (t.flags & On) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ve) !== de && g("Internal React error: Expected static flag was missing. Please notify the React team."), Ih = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function lf() {
      var e = ep !== 0;
      return ep = 0, e;
    }
    function wE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Vr) !== de ? t.flags &= ~(Tl | yr | Nt | Fe) : t.flags &= ~(Nt | Fe), e.lanes = Vo(e.lanes, a);
    }
    function _E() {
      if (ee.current = am, Ih) {
        for (var e = St.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Ih = !1;
      }
      cs = A, St = null, Un = null, An = null, Ja = null, Zu = -1, U = null, jE = !1, Jd = !1, ep = 0;
    }
    function tl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return An === null ? St.memoizedState = An = e : An = An.next = e, An;
    }
    function ei() {
      var e;
      if (Un === null) {
        var t = St.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Un.next;
      var a;
      if (An === null ? a = St.memoizedState : a = An.next, a !== null)
        An = a, a = An.next, Un = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Un = e;
        var i = {
          memoizedState: Un.memoizedState,
          baseState: Un.baseState,
          baseQueue: Un.baseQueue,
          queue: Un.queue,
          next: null
        };
        An === null ? St.memoizedState = An = i : An = An.next = i;
      }
      return An;
    }
    function DE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Dg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function bg(e, t, a) {
      var i = tl(), u;
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
      var f = s.dispatch = Yx.bind(null, St, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = ei(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Un, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, m = p.next;
          f.next = m, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var y = f.next, x = s.baseState, T = null, O = null, L = null, N = y;
        do {
          var K = N.lane;
          if (Ml(cs, K)) {
            if (L !== null) {
              var he = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: rn,
                action: N.action,
                hasEagerState: N.hasEagerState,
                eagerState: N.eagerState,
                next: null
              };
              L = L.next = he;
            }
            if (N.hasEagerState)
              x = N.eagerState;
            else {
              var Je = N.action;
              x = e(x, Je);
            }
          } else {
            var Ee = {
              lane: K,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            };
            L === null ? (O = L = Ee, T = x) : L = L.next = Ee, St.lanes = Ae(St.lanes, K), Cp(K);
          }
          N = N.next;
        } while (N !== null && N !== y);
        L === null ? T = x : L.next = O, se(x, i.memoizedState) || sp(), i.memoizedState = x, i.baseState = T, i.baseQueue = L, u.lastRenderedState = x;
      }
      var Ge = u.interleaved;
      if (Ge !== null) {
        var D = Ge;
        do {
          var z = D.lane;
          St.lanes = Ae(St.lanes, z), Cp(z), D = D.next;
        } while (D !== Ge);
      } else
        f === null && (u.lanes = A);
      var b = u.dispatch;
      return [i.memoizedState, b];
    }
    function Og(e, t, a) {
      var i = ei(), u = i.queue;
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
        se(p, i.memoizedState) || sp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function fk(e, t, a) {
    }
    function dk(e, t, a) {
    }
    function Mg(e, t, a) {
      var i = St, u = tl(), s, f = nr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), nf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), nf = !0);
      } else {
        if (s = t(), !nf) {
          var p = t();
          se(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), nf = !0);
        }
        var v = Rm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Bo(v, cs) || bE(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, Xh(OE.bind(null, i, m, e), [e]), i.flags |= Nt, tp(Nn | rr, kE.bind(null, i, m, s, t), void 0, null), s;
    }
    function Qh(e, t, a) {
      var i = St, u = ei(), s = t();
      if (!nf) {
        var f = t();
        se(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), nf = !0);
      }
      var p = u.memoizedState, v = !se(p, s);
      v && (u.memoizedState = s, sp());
      var m = u.queue;
      if (rp(OE.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      An !== null && An.memoizedState.tag & Nn) {
        i.flags |= Nt, tp(Nn | rr, kE.bind(null, i, m, s, t), void 0, null);
        var y = Rm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Bo(y, cs) || bE(i, t, s);
      }
      return s;
    }
    function bE(e, t, a) {
      e.flags |= Oo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = St.updateQueue;
      if (u === null)
        u = DE(), St.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function kE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ME(t) && LE(e);
    }
    function OE(e, t, a) {
      var i = function() {
        ME(t) && LE(e);
      };
      return a(i);
    }
    function ME(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !se(a, i);
      } catch {
        return !0;
      }
    }
    function LE(e) {
      var t = ma(e, ye);
      t !== null && Bn(t, e, ye, wt);
    }
    function Wh(e) {
      var t = tl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: A,
        dispatch: null,
        lastRenderedReducer: Dg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Ix.bind(null, St, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return kg(Dg);
    }
    function Ng(e) {
      return Og(Dg);
    }
    function tp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = St.updateQueue;
      if (s === null)
        s = DE(), St.updateQueue = s, s.lastEffect = u.next = u;
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
    function zg(e) {
      var t = tl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Gh(e) {
      var t = ei();
      return t.memoizedState;
    }
    function np(e, t, a, i) {
      var u = tl(), s = i === void 0 ? null : i;
      St.flags |= e, u.memoizedState = tp(Nn | t, a, void 0, s);
    }
    function qh(e, t, a, i) {
      var u = ei(), s = i === void 0 ? null : i, f = void 0;
      if (Un !== null) {
        var p = Un.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (_g(s, v)) {
            u.memoizedState = tp(t, a, f, s);
            return;
          }
        }
      }
      St.flags |= e, u.memoizedState = tp(Nn | t, a, f, s);
    }
    function Xh(e, t) {
      return (St.mode & Vr) !== de ? np(Tl | Nt | Pi, rr, e, t) : np(Nt | Pi, rr, e, t);
    }
    function rp(e, t) {
      return qh(Nt, rr, e, t);
    }
    function Ug(e, t) {
      return np(Fe, el, e, t);
    }
    function Kh(e, t) {
      return qh(Fe, el, e, t);
    }
    function Ag(e, t) {
      var a = Fe;
      return a |= mr, (St.mode & Vr) !== de && (a |= yr), np(a, zn, e, t);
    }
    function Zh(e, t) {
      return qh(Fe, zn, e, t);
    }
    function NE(e, t) {
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
    function Fg(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Fe;
      return u |= mr, (St.mode & Vr) !== de && (u |= yr), np(u, zn, NE.bind(null, t, e), i);
    }
    function Jh(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return qh(Fe, zn, NE.bind(null, t, e), i);
    }
    function Vx(e, t) {
    }
    var em = Vx;
    function Hg(e, t) {
      var a = tl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function tm(e, t) {
      var a = ei(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (_g(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function jg(e, t) {
      var a = tl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function nm(e, t) {
      var a = ei(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (_g(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Bg(e) {
      var t = tl();
      return t.memoizedState = e, e;
    }
    function zE(e) {
      var t = ei(), a = Un, i = a.memoizedState;
      return AE(t, i, e);
    }
    function UE(e) {
      var t = ei();
      if (Un === null)
        return t.memoizedState = e, e;
      var a = Un.memoizedState;
      return AE(t, a, e);
    }
    function AE(e, t, a) {
      var i = !Lv(cs);
      if (i) {
        if (!se(a, t)) {
          var u = Uv();
          St.lanes = Ae(St.lanes, u), Cp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, sp()), e.memoizedState = a, a;
    }
    function Px(e, t, a) {
      var i = ca();
      It(ly(i, mi)), e(!0);
      var u = Zd.transition;
      Zd.transition = {};
      var s = Zd.transition;
      Zd.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (It(i), Zd.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && xe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Vg() {
      var e = Wh(!1), t = e[0], a = e[1], i = Px.bind(null, a), u = tl();
      return u.memoizedState = i, [t, i];
    }
    function FE() {
      var e = Lg(), t = e[0], a = ei(), i = a.memoizedState;
      return [t, i];
    }
    function HE() {
      var e = Ng(), t = e[0], a = ei(), i = a.memoizedState;
      return [t, i];
    }
    var jE = !1;
    function $x() {
      return jE;
    }
    function Pg() {
      var e = tl(), t = Rm(), a = t.identifierPrefix, i;
      if (nr()) {
        var u = lx();
        i = ":" + a + "R" + u;
        var s = ep++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Hx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function rm() {
      var e = ei(), t = e.memoizedState;
      return t;
    }
    function Yx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ro(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (BE(e))
        VE(t, u);
      else {
        var s = hE(e, t, u, i);
        if (s !== null) {
          var f = Ir();
          Bn(s, e, i, f), PE(s, t, i);
        }
      }
      $E(e, i);
    }
    function Ix(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ro(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (BE(e))
        VE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === A && (s === null || s.lanes === A)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ee.current, ee.current = xi;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, se(m, v)) {
                kx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ee.current = p;
            }
          }
        }
        var y = hE(e, t, u, i);
        if (y !== null) {
          var x = Ir();
          Bn(y, e, i, x), PE(y, t, i);
        }
      }
      $E(e, i);
    }
    function BE(e) {
      var t = e.alternate;
      return e === St || t !== null && t === St;
    }
    function VE(e, t) {
      Jd = Ih = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function PE(e, t, a) {
      if (sd(a)) {
        var i = t.lanes;
        i = hc(i, e.pendingLanes);
        var u = Ae(i, a);
        t.lanes = u, cd(e, u);
      }
    }
    function $E(e, t, a) {
      zo(e, t);
    }
    var am = {
      readContext: xn,
      useCallback: Dr,
      useContext: Dr,
      useEffect: Dr,
      useImperativeHandle: Dr,
      useInsertionEffect: Dr,
      useLayoutEffect: Dr,
      useMemo: Dr,
      useReducer: Dr,
      useRef: Dr,
      useState: Dr,
      useDebugValue: Dr,
      useDeferredValue: Dr,
      useTransition: Dr,
      useMutableSource: Dr,
      useSyncExternalStore: Dr,
      useId: Dr,
      unstable_isNewReconciler: I
    }, YE = null, IE = null, QE = null, WE = null, nl = null, xi = null, im = null;
    {
      var $g = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Le = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      YE = {
        readContext: function(e) {
          return xn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", dt(), rf(t), Hg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", dt(), xn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", dt(), rf(t), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", dt(), rf(a), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", dt(), rf(t), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", dt(), rf(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", dt(), rf(t);
          var a = ee.current;
          ee.current = nl;
          try {
            return jg(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", dt();
          var i = ee.current;
          ee.current = nl;
          try {
            return bg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", dt(), zg(e);
        },
        useState: function(e) {
          U = "useState", dt();
          var t = ee.current;
          ee.current = nl;
          try {
            return Wh(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", dt(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", dt(), Bg(e);
        },
        useTransition: function() {
          return U = "useTransition", dt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", dt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", dt(), Mg(e, t, a);
        },
        useId: function() {
          return U = "useId", dt(), Pg();
        },
        unstable_isNewReconciler: I
      }, IE = {
        readContext: function(e) {
          return xn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", G(), Hg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", G(), xn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", G(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", G(), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", G(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", G(), Ag(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", G();
          var a = ee.current;
          ee.current = nl;
          try {
            return jg(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", G();
          var i = ee.current;
          ee.current = nl;
          try {
            return bg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", G(), zg(e);
        },
        useState: function(e) {
          U = "useState", G();
          var t = ee.current;
          ee.current = nl;
          try {
            return Wh(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", G(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", G(), Bg(e);
        },
        useTransition: function() {
          return U = "useTransition", G(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", G(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", G(), Mg(e, t, a);
        },
        useId: function() {
          return U = "useId", G(), Pg();
        },
        unstable_isNewReconciler: I
      }, QE = {
        readContext: function(e) {
          return xn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", G(), tm(e, t);
        },
        useContext: function(e) {
          return U = "useContext", G(), xn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", G(), rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", G(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", G(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", G(), Zh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", G();
          var a = ee.current;
          ee.current = xi;
          try {
            return nm(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", G();
          var i = ee.current;
          ee.current = xi;
          try {
            return kg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", G(), Gh();
        },
        useState: function(e) {
          U = "useState", G();
          var t = ee.current;
          ee.current = xi;
          try {
            return Lg(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", G(), em();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", G(), zE(e);
        },
        useTransition: function() {
          return U = "useTransition", G(), FE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", G(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", G(), Qh(e, t);
        },
        useId: function() {
          return U = "useId", G(), rm();
        },
        unstable_isNewReconciler: I
      }, WE = {
        readContext: function(e) {
          return xn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", G(), tm(e, t);
        },
        useContext: function(e) {
          return U = "useContext", G(), xn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", G(), rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", G(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", G(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", G(), Zh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", G();
          var a = ee.current;
          ee.current = im;
          try {
            return nm(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", G();
          var i = ee.current;
          ee.current = im;
          try {
            return Og(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", G(), Gh();
        },
        useState: function(e) {
          U = "useState", G();
          var t = ee.current;
          ee.current = im;
          try {
            return Ng(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", G(), em();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", G(), UE(e);
        },
        useTransition: function() {
          return U = "useTransition", G(), HE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", G(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", G(), Qh(e, t);
        },
        useId: function() {
          return U = "useId", G(), rm();
        },
        unstable_isNewReconciler: I
      }, nl = {
        readContext: function(e) {
          return $g(), xn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Le(), dt(), Hg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Le(), dt(), xn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Le(), dt(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Le(), dt(), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Le(), dt(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Le(), dt(), Ag(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Le(), dt();
          var a = ee.current;
          ee.current = nl;
          try {
            return jg(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Le(), dt();
          var i = ee.current;
          ee.current = nl;
          try {
            return bg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Le(), dt(), zg(e);
        },
        useState: function(e) {
          U = "useState", Le(), dt();
          var t = ee.current;
          ee.current = nl;
          try {
            return Wh(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Le(), dt(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Le(), dt(), Bg(e);
        },
        useTransition: function() {
          return U = "useTransition", Le(), dt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Le(), dt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Le(), dt(), Mg(e, t, a);
        },
        useId: function() {
          return U = "useId", Le(), dt(), Pg();
        },
        unstable_isNewReconciler: I
      }, xi = {
        readContext: function(e) {
          return $g(), xn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Le(), G(), tm(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Le(), G(), xn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Le(), G(), rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Le(), G(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Le(), G(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Le(), G(), Zh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Le(), G();
          var a = ee.current;
          ee.current = xi;
          try {
            return nm(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Le(), G();
          var i = ee.current;
          ee.current = xi;
          try {
            return kg(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Le(), G(), Gh();
        },
        useState: function(e) {
          U = "useState", Le(), G();
          var t = ee.current;
          ee.current = xi;
          try {
            return Lg(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Le(), G(), em();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Le(), G(), zE(e);
        },
        useTransition: function() {
          return U = "useTransition", Le(), G(), FE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Le(), G(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Le(), G(), Qh(e, t);
        },
        useId: function() {
          return U = "useId", Le(), G(), rm();
        },
        unstable_isNewReconciler: I
      }, im = {
        readContext: function(e) {
          return $g(), xn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Le(), G(), tm(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Le(), G(), xn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Le(), G(), rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Le(), G(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Le(), G(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Le(), G(), Zh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Le(), G();
          var a = ee.current;
          ee.current = xi;
          try {
            return nm(e, t);
          } finally {
            ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Le(), G();
          var i = ee.current;
          ee.current = xi;
          try {
            return Og(e, t, a);
          } finally {
            ee.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Le(), G(), Gh();
        },
        useState: function(e) {
          U = "useState", Le(), G();
          var t = ee.current;
          ee.current = xi;
          try {
            return Ng(e);
          } finally {
            ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Le(), G(), em();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Le(), G(), UE(e);
        },
        useTransition: function() {
          return U = "useTransition", Le(), G(), HE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Le(), G(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Le(), G(), Qh(e, t);
        },
        useId: function() {
          return U = "useId", Le(), G(), rm();
        },
        unstable_isNewReconciler: I
      };
    }
    var Ju = Y.unstable_now, GE = 0, lm = -1, ap = -1, um = -1, Yg = !1, om = !1;
    function qE() {
      return Yg;
    }
    function Qx() {
      om = !0;
    }
    function Wx() {
      Yg = !1, om = !1;
    }
    function Gx() {
      Yg = om, om = !1;
    }
    function XE() {
      return GE;
    }
    function KE() {
      GE = Ju();
    }
    function Ig(e) {
      ap = Ju(), e.actualStartTime < 0 && (e.actualStartTime = Ju());
    }
    function ZE(e) {
      ap = -1;
    }
    function sm(e, t) {
      if (ap >= 0) {
        var a = Ju() - ap;
        e.actualDuration += a, t && (e.selfBaseDuration = a), ap = -1;
      }
    }
    function rl(e) {
      if (lm >= 0) {
        var t = Ju() - lm;
        lm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case X:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case pt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Qg(e) {
      if (um >= 0) {
        var t = Ju() - um;
        um = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case X:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case pt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function al() {
      lm = Ju();
    }
    function Wg() {
      um = Ju();
    }
    function Gg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function wi(e, t) {
      if (e && e.defaultProps) {
        var a = Ye({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Xg, Kg, Zg, Jg, eS, JE, cm, tS, nS, rS, ip;
    {
      Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), ip = /* @__PURE__ */ new Set();
      var e1 = /* @__PURE__ */ new Set();
      cm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          e1.has(a) || (e1.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, JE = function(e, t) {
        if (t === void 0) {
          var a = mt(e) || "Component";
          eS.has(a) || (eS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(qg);
    }
    function aS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Ie) {
          nn(!0);
          try {
            s = a(i, u);
          } finally {
            nn(!1);
          }
        }
        JE(t, s);
      }
      var f = s == null ? u : Ye({}, u, s);
      if (e.memoizedState = f, e.lanes === A) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var iS = {
      isMounted: jr,
      enqueueSetState: function(e, t, a) {
        var i = na(e), u = Ir(), s = ro(i), f = Yl(u, s);
        f.payload = t, a != null && (cm(a, "setState"), f.callback = a);
        var p = qu(i, f, s);
        p !== null && (Bn(p, i, s, u), jh(p, i, s)), zo(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = na(e), u = Ir(), s = ro(i), f = Yl(u, s);
        f.tag = yE, f.payload = t, a != null && (cm(a, "replaceState"), f.callback = a);
        var p = qu(i, f, s);
        p !== null && (Bn(p, i, s, u), jh(p, i, s)), zo(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = na(e), i = Ir(), u = ro(a), s = Yl(i, u);
        s.tag = Ah, t != null && (cm(t, "forceUpdate"), s.callback = t);
        var f = qu(a, s, u);
        f !== null && (Bn(f, a, u, i), jh(f, a, u)), Zs(a, u);
      }
    };
    function t1(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Ie) {
            nn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              nn(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", mt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Re(a, i) || !Re(u, s) : !0;
    }
    function qx(e, t, a) {
      var i = e.stateNode;
      {
        var u = mt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !ip.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ie) === de && (ip.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !ip.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ie) === de && (ip.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !nS.has(t) && (nS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", mt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Zg.has(t) && (Zg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", mt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || gn(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function n1(e, t) {
      t.updater = iS, e.stateNode = t, du(t, e), t._reactInternalInstance = qg;
    }
    function r1(e, t, a) {
      var i = !1, u = za, s = za, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === j && f._context === void 0
        );
        if (!p && !rS.has(t)) {
          rS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === E ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", mt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = xn(f);
      else {
        u = Ic(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? Qc(e, u) : za;
      }
      var y = new t(a, s);
      if (e.mode & Ie) {
        nn(!0);
        try {
          y = new t(a, s);
        } finally {
          nn(!1);
        }
      }
      var x = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      n1(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var T = mt(t) || "Component";
          Kg.has(T) || (Kg.add(T), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", T, y.state === null ? "null" : "undefined", T));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var O = null, L = null, N = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? O = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (O = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? L = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (L = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? N = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (N = "UNSAFE_componentWillUpdate"), O !== null || L !== null || N !== null) {
            var K = mt(t) || "Component", Ee = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jg.has(K) || (Jg.add(K), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, K, Ee, O !== null ? `
  ` + O : "", L !== null ? `
  ` + L : "", N !== null ? `
  ` + N : ""));
          }
        }
      }
      return i && Q0(e, u, s), y;
    }
    function Xx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ue(e) || "Component"), iS.enqueueReplaceState(t, t.state, null));
    }
    function a1(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ue(e) || "Component";
          Xg.has(s) || (Xg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        iS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      qx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, hg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = xn(s);
      else {
        var f = Ic(e, t, !0);
        u.context = Qc(e, f);
      }
      {
        if (u.state === a) {
          var p = mt(t) || "Component";
          tS.has(p) || (tS.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Ie && Ti.recordLegacyContextWarning(e, u), Ti.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (aS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Xx(e, u), Bh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = Fe;
        m |= mr, (e.mode & Vr) !== de && (m |= yr), e.flags |= m;
      }
    }
    function Kx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = za;
      if (typeof p == "object" && p !== null)
        v = xn(p);
      else {
        var m = Ic(e, t, !0);
        v = Qc(e, m);
      }
      var y = t.getDerivedStateFromProps, x = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && a1(e, u, a, v), SE();
      var T = e.memoizedState, O = u.state = T;
      if (Bh(e, a, u, i), O = e.memoizedState, s === a && T === O && !Ch() && !Vh()) {
        if (typeof u.componentDidMount == "function") {
          var L = Fe;
          L |= mr, (e.mode & Vr) !== de && (L |= yr), e.flags |= L;
        }
        return !1;
      }
      typeof y == "function" && (aS(e, t, y, a), O = e.memoizedState);
      var N = Vh() || t1(e, t, s, a, T, O, v);
      if (N) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var K = Fe;
          K |= mr, (e.mode & Vr) !== de && (K |= yr), e.flags |= K;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ee = Fe;
          Ee |= mr, (e.mode & Vr) !== de && (Ee |= yr), e.flags |= Ee;
        }
        e.memoizedProps = a, e.memoizedState = O;
      }
      return u.props = a, u.state = O, u.context = v, N;
    }
    function Zx(e, t, a, i, u) {
      var s = t.stateNode;
      gE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : wi(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, x = za;
      if (typeof y == "object" && y !== null)
        x = xn(y);
      else {
        var T = Ic(t, a, !0);
        x = Qc(t, T);
      }
      var O = a.getDerivedStateFromProps, L = typeof O == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !L && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== x) && a1(t, s, i, x), SE();
      var N = t.memoizedState, K = s.state = N;
      if (Bh(t, i, s, u), K = t.memoizedState, f === v && N === K && !Ch() && !Vh() && !Ce)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= Fe), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= ra), !1;
      typeof O == "function" && (aS(t, a, O, i), K = t.memoizedState);
      var Ee = Vh() || t1(t, a, p, i, N, K, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ce;
      return Ee ? (!L && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, K, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, K, x)), typeof s.componentDidUpdate == "function" && (t.flags |= Fe), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ra)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= Fe), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= ra), t.memoizedProps = i, t.memoizedState = K), s.props = i, s.state = K, s.context = x, Ee;
    }
    function fs(e, t) {
      return {
        value: e,
        source: t,
        stack: Ef(t),
        digest: null
      };
    }
    function uS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Jx(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = Jx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === re)
            return;
          console.error(i);
        }
        var p = u ? Ue(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === X)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Ue(e) || "Anonymous";
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
    var ew = typeof WeakMap == "function" ? WeakMap : Map;
    function i1(e, t, a) {
      var i = Yl(wt, a);
      i.tag = pg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Q_(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = Yl(wt, a);
      i.tag = pg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          mC(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        mC(e), oS(e, t), typeof u != "function" && Y_(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Rr(e.lanes, ye) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ue(e) || "Unknown"));
      }), i;
    }
    function l1(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ew(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = W_.bind(null, e, t, a);
        Br && Tp(e, a), t.then(s, s);
      }
    }
    function tw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function nw(e, t) {
      var a = e.tag;
      if ((e.mode & ve) === de && (a === ie || a === He || a === je)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function u1(e) {
      var t = e;
      do {
        if (t.tag === Qe && Ax(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function o1(e, t, a, i, u) {
      if ((e.mode & ve) === de) {
        if (e === t)
          e.flags |= En;
        else {
          if (e.flags |= be, a.flags |= Mo, a.flags &= ~(Bs | Fr), a.tag === re) {
            var s = a.alternate;
            if (s === null)
              a.tag = Vn;
            else {
              var f = Yl(wt, ye);
              f.tag = Ah, qu(a, f, ye);
            }
          }
          a.lanes = Ae(a.lanes, ye);
        }
        return e;
      }
      return e.flags |= En, e.lanes = u, e;
    }
    function rw(e, t, a, i, u) {
      if (a.flags |= Fr, Br && Tp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nw(a), nr() && a.mode & ve && J0();
        var f = u1(t);
        if (f !== null) {
          f.flags &= ~Yt, o1(f, t, a, e, u), f.mode & ve && l1(e, s, u), tw(f, e, s);
          return;
        } else {
          if (!od(u)) {
            l1(e, s, u), PS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (nr() && a.mode & ve) {
        J0();
        var v = u1(t);
        if (v !== null) {
          (v.flags & En) === Se && (v.flags |= Yt), o1(v, t, a, e, u), tg(fs(i, a));
          return;
        }
      }
      i = fs(i, a), A_(i);
      var m = t;
      do {
        switch (m.tag) {
          case X: {
            var y = i;
            m.flags |= En;
            var x = _u(u);
            m.lanes = Ae(m.lanes, x);
            var T = i1(m, y, x);
            mg(m, T);
            return;
          }
          case re:
            var O = i, L = m.type, N = m.stateNode;
            if ((m.flags & be) === Se && (typeof L.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && !uC(N))) {
              m.flags |= En;
              var K = _u(u);
              m.lanes = Ae(m.lanes, K);
              var Ee = sS(m, O, K);
              mg(m, Ee);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function aw() {
      return null;
    }
    var lp = w.ReactCurrentOwner, _i = !1, cS, up, fS, dS, pS, ds, vS, fm, op;
    cS = {}, up = {}, fS = {}, dS = {}, pS = {}, ds = !1, vS = {}, fm = {}, op = {};
    function $r(e, t, a, i) {
      e === null ? t.child = fE(t, null, a, i) : t.child = Xc(t, e.child, a, i);
    }
    function iw(e, t, a, i) {
      t.child = Xc(t, e.child, null, i), t.child = Xc(t, null, a, i);
    }
    function s1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ei(
          s,
          i,
          // Resolved props
          "prop",
          mt(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      Zc(t, u), mu(t);
      {
        if (lp.current = t, ka(!0), v = af(e, t, f, i, p, u), m = lf(), t.mode & Ie) {
          nn(!0);
          try {
            v = af(e, t, f, i, p, u), m = lf();
          } finally {
            nn(!1);
          }
        }
        ka(!1);
      }
      return Er(), e !== null && !_i ? (wE(e, t, u), Il(e, t, u)) : (nr() && m && qy(t), t.flags |= Bi, $r(e, t, v, u), t.child);
    }
    function c1(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (cD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = vf(s), t.tag = je, t.type = f, yS(t, s), f1(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Ei(
            p,
            i,
            // Resolved props
            "prop",
            mt(s)
          ), a.defaultProps !== void 0) {
            var v = mt(s) || "Unknown";
            op[v] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), op[v] = !0);
          }
        }
        var m = JS(a.type, null, i, t, t.mode, u);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var y = a.type, x = y.propTypes;
        x && Ei(
          x,
          i,
          // Resolved props
          "prop",
          mt(y)
        );
      }
      var T = e.child, O = RS(e, u);
      if (!O) {
        var L = T.memoizedProps, N = a.compare;
        if (N = N !== null ? N : Re, N(L, i) && e.ref === t.ref)
          return Il(e, t, u);
      }
      t.flags |= Bi;
      var K = ys(T, i);
      return K.ref = t.ref, K.return = t, t.child = K, K;
    }
    function f1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === we) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && Ei(
            m,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            mt(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (Re(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (_i = !1, t.pendingProps = i = y, RS(e, u))
            (e.flags & Mo) !== Se && (_i = !0);
          else
            return t.lanes = e.lanes, Il(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function d1(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || te)
        if ((t.mode & ve) === de) {
          var f = {
            baseLanes: A,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, xm(t, a);
        } else if (Rr(a, qn)) {
          var x = {
            baseLanes: A,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var T = s !== null ? s.baseLanes : a;
          xm(t, T);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = Ae(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = qn;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, xm(t, v), null;
        }
      else {
        var O;
        s !== null ? (O = Ae(s.baseLanes, a), t.memoizedState = null) : O = a, xm(t, O);
      }
      return $r(e, t, u, a), t.child;
    }
    function lw(e, t, a) {
      var i = t.pendingProps;
      return $r(e, t, i, a), t.child;
    }
    function uw(e, t, a) {
      var i = t.pendingProps.children;
      return $r(e, t, i, a), t.child;
    }
    function ow(e, t, a) {
      {
        t.flags |= Fe;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return $r(e, t, s, a), t.child;
    }
    function p1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= hr, t.flags |= qf);
    }
    function hS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ei(
          s,
          i,
          // Resolved props
          "prop",
          mt(a)
        );
      }
      var f;
      {
        var p = Ic(t, a, !0);
        f = Qc(t, p);
      }
      var v, m;
      Zc(t, u), mu(t);
      {
        if (lp.current = t, ka(!0), v = af(e, t, a, i, f, u), m = lf(), t.mode & Ie) {
          nn(!0);
          try {
            v = af(e, t, a, i, f, u), m = lf();
          } finally {
            nn(!1);
          }
        }
        ka(!1);
      }
      return Er(), e !== null && !_i ? (wE(e, t, u), Il(e, t, u)) : (nr() && m && qy(t), t.flags |= Bi, $r(e, t, v, u), t.child);
    }
    function v1(e, t, a, i, u) {
      {
        switch (wD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= be, t.flags |= En;
            var m = new Error("Simulated error coming from DevTools"), y = _u(u);
            t.lanes = Ae(t.lanes, y);
            var x = sS(t, fs(m, t), y);
            mg(t, x);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var T = a.propTypes;
          T && Ei(
            T,
            i,
            // Resolved props
            "prop",
            mt(a)
          );
        }
      }
      var O;
      Ji(a) ? (O = !0, Rh(t)) : O = !1, Zc(t, u);
      var L = t.stateNode, N;
      L === null ? (pm(e, t), r1(t, a, i), lS(t, a, i, u), N = !0) : e === null ? N = Kx(t, a, i, u) : N = Zx(e, t, a, i, u);
      var K = mS(e, t, a, N, O, u);
      {
        var Ee = t.stateNode;
        N && Ee.props !== i && (ds || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ue(t) || "a component"), ds = !0);
      }
      return K;
    }
    function mS(e, t, a, i, u, s) {
      p1(e, t);
      var f = (t.flags & be) !== Se;
      if (!i && !f)
        return u && q0(t, a, !1), Il(e, t, s);
      var p = t.stateNode;
      lp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, ZE();
      else {
        mu(t);
        {
          if (ka(!0), v = p.render(), t.mode & Ie) {
            nn(!0);
            try {
              p.render();
            } finally {
              nn(!1);
            }
          }
          ka(!1);
        }
        Er();
      }
      return t.flags |= Bi, e !== null && f ? iw(e, t, v, s) : $r(e, t, v, s), t.memoizedState = p.state, u && q0(t, a, !0), t.child;
    }
    function h1(e) {
      var t = e.stateNode;
      t.pendingContext ? W0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && W0(e, t.context, !1), yg(e, t.containerInfo);
    }
    function sw(e, t, a) {
      if (h1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      gE(e, t), Bh(t, i, null, a);
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
        if (m.baseState = v, t.memoizedState = v, t.flags & Yt) {
          var y = fs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return m1(e, t, p, a, y);
        } else if (p !== s) {
          var x = fs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return m1(e, t, p, a, x);
        } else {
          dx(t);
          var T = fE(t, null, p, a);
          t.child = T;
          for (var O = T; O; )
            O.flags = O.flags & ~kt | aa, O = O.sibling;
        }
      } else {
        if (qc(), p === s)
          return Il(e, t, a);
        $r(e, t, p, a);
      }
      return t.child;
    }
    function m1(e, t, a, i, u) {
      return qc(), tg(u), t.flags |= Yt, $r(e, t, a, i), t.child;
    }
    function cw(e, t, a) {
      TE(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= ft), p1(e, t), $r(e, t, f, a), t.child;
    }
    function fw(e, t) {
      return e === null && eg(t), null;
    }
    function dw(e, t, a, i) {
      pm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = fD(v), y = wi(v, u), x;
      switch (m) {
        case ie:
          return yS(t, v), t.type = v = vf(v), x = hS(null, t, v, y, i), x;
        case re:
          return t.type = v = WS(v), x = v1(null, t, v, y, i), x;
        case He:
          return t.type = v = GS(v), x = s1(null, t, v, y, i), x;
        case _t: {
          if (t.type !== t.elementType) {
            var T = v.propTypes;
            T && Ei(
              T,
              y,
              // Resolved for outer only
              "prop",
              mt(v)
            );
          }
          return x = c1(
            null,
            t,
            v,
            wi(v.type, y),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var O = "";
      throw v !== null && typeof v == "object" && v.$$typeof === we && (O = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + O));
    }
    function pw(e, t, a, i, u) {
      pm(e, t), t.tag = re;
      var s;
      return Ji(a) ? (s = !0, Rh(t)) : s = !1, Zc(t, u), r1(t, a, i), lS(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function vw(e, t, a, i) {
      pm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Ic(t, a, !1);
        s = Qc(t, f);
      }
      Zc(t, i);
      var p, v;
      mu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = mt(a) || "Unknown";
          cS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), cS[m] = !0);
        }
        t.mode & Ie && Ti.recordLegacyContextWarning(t, null), ka(!0), lp.current = t, p = af(null, t, a, u, s, i), v = lf(), ka(!1);
      }
      if (Er(), t.flags |= Bi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = mt(a) || "Unknown";
        up[y] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), up[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = mt(a) || "Unknown";
          up[x] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), up[x] = !0);
        }
        t.tag = re, t.memoizedState = null, t.updateQueue = null;
        var T = !1;
        return Ji(a) ? (T = !0, Rh(t)) : T = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, hg(t), n1(t, p), lS(t, a, u, i), mS(null, t, a, !0, T, i);
      } else {
        if (t.tag = ie, t.mode & Ie) {
          nn(!0);
          try {
            p = af(null, t, a, u, s, i), v = lf();
          } finally {
            nn(!1);
          }
        }
        return nr() && v && qy(t), $r(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ea();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = mt(t) || "Unknown";
          op[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), op[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = mt(t) || "Unknown";
          dS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), dS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = mt(t) || "Unknown";
          fS[v] || (g("%s: Function components do not support contextType.", v), fS[v] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: rn
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: aw(),
        transitions: null
      };
    }
    function hw(e, t) {
      var a = null;
      return {
        baseLanes: Ae(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Eg(e, Kd);
    }
    function yw(e, t) {
      return Vo(e.childLanes, t);
    }
    function y1(e, t, a) {
      var i = t.pendingProps;
      _D(t) && (t.flags |= be);
      var u = Ri.current, s = !1, f = (t.flags & be) !== Se;
      if (f || mw(u, e) ? (s = !0, t.flags &= ~be) : (e === null || e.memoizedState !== null) && (u = Ux(u, xE)), u = ef(u), Ku(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Tw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var x = gw(t, m, y, a), T = t.child;
          return T.memoizedState = SS(a), t.memoizedState = gS, x;
        } else
          return ES(t, m);
      } else {
        var O = e.memoizedState;
        if (O !== null) {
          var L = O.dehydrated;
          if (L !== null)
            return Rw(e, t, f, i, L, O, a);
        }
        if (s) {
          var N = i.fallback, K = i.children, Ee = Ew(e, t, K, N, a), he = t.child, Je = e.child.memoizedState;
          return he.memoizedState = Je === null ? SS(a) : hw(Je, a), he.childLanes = yw(e, a), t.memoizedState = gS, Ee;
        } else {
          var Ge = i.children, D = Sw(e, t, Ge, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = CS(u, i);
      return s.return = e, e.child = s, s;
    }
    function gw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ve) === de && s !== null ? (p = s, p.childLanes = A, p.pendingProps = f, e.mode & ke && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = io(a, u, i, null)) : (p = CS(f, u), v = io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return gC(e, t, A, null);
    }
    function g1(e, t) {
      return ys(e, t);
    }
    function Sw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = g1(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ve) === de && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= st) : p.push(s);
      }
      return t.child = f, f;
    }
    function Ew(e, t, a, i, u) {
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
        m = y, m.childLanes = A, m.pendingProps = v, t.mode & ke && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = g1(f, v), m.subtreeFlags = f.subtreeFlags & On;
      var x;
      return p !== null ? x = ys(p, i) : (x = io(i, s, u, null), x.flags |= kt), x.return = t, m.return = t, m.sibling = x, t.child = m, x;
    }
    function dm(e, t, a, i) {
      i !== null && tg(i), Xc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= kt, t.memoizedState = null, f;
    }
    function Cw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = io(i, s, u, null);
      return v.flags |= kt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ve) !== de && Xc(t, e.child, null, u), v;
    }
    function Tw(e, t, a) {
      return (e.mode & ve) === de ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ye) : jy(t) ? e.lanes = hi : e.lanes = qn, null;
    }
    function Rw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Yt) {
          t.flags &= ~Yt;
          var D = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return dm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= be, null;
          var z = i.children, b = i.fallback, P = Cw(e, t, z, b, f), ne = t.child;
          return ne.memoizedState = SS(f), t.memoizedState = gS, P;
        }
      else {
        if (cx(), (t.mode & ve) === de)
          return dm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (jy(u)) {
          var p, v, m;
          {
            var y = DR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var T = uS(x, p, m);
          return dm(e, t, f, T);
        }
        var O = Rr(f, e.childLanes);
        if (_i || O) {
          var L = Rm();
          if (L !== null) {
            var N = Hv(L, f);
            if (N !== rn && N !== s.retryLane) {
              s.retryLane = N;
              var K = wt;
              ma(e, N), Bn(L, e, N, K);
            }
          }
          PS();
          var Ee = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return dm(e, t, f, Ee);
        } else if (V0(u)) {
          t.flags |= be, t.child = e.child;
          var he = G_.bind(null, e);
          return bR(u, he), null;
        } else {
          px(t, u, s.treeContext);
          var Je = i.children, Ge = ES(t, Je);
          return Ge.flags |= aa, Ge;
        }
      }
    }
    function S1(e, t, a) {
      e.lanes = Ae(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ae(i.lanes, t)), fg(e.return, t, a);
    }
    function xw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Qe) {
          var u = i.memoizedState;
          u !== null && S1(i, a, e);
        } else if (i.tag === yt)
          S1(i, a, e);
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
    function ww(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Yh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function _w(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vS[e])
        if (vS[e] = !0, typeof e == "string")
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
    function Dw(e, t) {
      e !== void 0 && !fm[e] && (e !== "collapsed" && e !== "hidden" ? (fm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (fm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function E1(e, t) {
      {
        var a = gn(e), i = !a && typeof Ur(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function bw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (gn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!E1(e[a], a))
              return;
        } else {
          var i = Ur(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!E1(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function TS(e, t, a, i, u) {
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
    function C1(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      _w(u), Dw(s, u), bw(f, u), $r(e, t, f, a);
      var p = Ri.current, v = Eg(p, Kd);
      if (v)
        p = Cg(p, Kd), t.flags |= be;
      else {
        var m = e !== null && (e.flags & be) !== Se;
        m && xw(t, t.child, a), p = ef(p);
      }
      if (Ku(t, p), (t.mode & ve) === de)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = ww(t.child), x;
            y === null ? (x = t.child, t.child = null) : (x = y.sibling, y.sibling = null), TS(
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
              var L = O.alternate;
              if (L !== null && Yh(L) === null) {
                t.child = O;
                break;
              }
              var N = O.sibling;
              O.sibling = T, T = O, O = N;
            }
            TS(
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
            TS(
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
    function kw(e, t, a) {
      yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Xc(t, null, i, a) : $r(e, t, i, a), t.child;
    }
    var T1 = !1;
    function Ow(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || T1 || (T1 = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ei(v, s, "prop", "Context.Provider");
      }
      if (vE(t, u, p), f !== null) {
        var m = f.value;
        if (se(m, p)) {
          if (f.children === s.children && !Ch())
            return Il(e, t, a);
        } else
          _x(t, u, a);
      }
      var y = s.children;
      return $r(e, t, y, a), t.child;
    }
    var R1 = !1;
    function Mw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (R1 || (R1 = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Zc(t, a);
      var f = xn(i);
      mu(t);
      var p;
      return lp.current = t, ka(!0), p = s(f), ka(!1), Er(), t.flags |= Bi, $r(e, t, p, a), t.child;
    }
    function sp() {
      _i = !0;
    }
    function pm(e, t) {
      (t.mode & ve) === de && e !== null && (e.alternate = null, t.alternate = null, t.flags |= kt);
    }
    function Il(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ZE(), Cp(t.lanes), Rr(a, t.childLanes) ? (xx(e, t), t.child) : null;
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
        return s === null ? (i.deletions = [e], i.flags |= st) : s.push(e), a.flags |= kt, a;
      }
    }
    function RS(e, t) {
      var a = e.lanes;
      return !!Rr(a, t);
    }
    function Nw(e, t, a) {
      switch (t.tag) {
        case X:
          h1(t), t.stateNode, qc();
          break;
        case ae:
          TE(t);
          break;
        case re: {
          var i = t.type;
          Ji(i) && Rh(t);
          break;
        }
        case ue:
          yg(t, t.stateNode.containerInfo);
          break;
        case Ke: {
          var u = t.memoizedProps.value, s = t.type._context;
          vE(t, s, u);
          break;
        }
        case pt:
          {
            var f = Rr(a, t.childLanes);
            f && (t.flags |= Fe);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Qe: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ku(t, ef(Ri.current)), t.flags |= be, null;
            var m = t.child, y = m.childLanes;
            if (Rr(a, y))
              return y1(e, t, a);
            Ku(t, ef(Ri.current));
            var x = Il(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            Ku(t, ef(Ri.current));
          break;
        }
        case yt: {
          var T = (e.flags & be) !== Se, O = Rr(a, t.childLanes);
          if (T) {
            if (O)
              return C1(e, t, a);
            t.flags |= be;
          }
          var L = t.memoizedState;
          if (L !== null && (L.rendering = null, L.tail = null, L.lastEffect = null), Ku(t, Ri.current), O)
            break;
          return null;
        }
        case Me:
        case qe:
          return t.lanes = A, d1(e, t, a);
      }
      return Il(e, t, a);
    }
    function x1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Lw(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Ch() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          _i = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & be) === Se)
            return _i = !1, Nw(e, t, a);
          (e.flags & Mo) !== Se ? _i = !0 : _i = !1;
        }
      } else if (_i = !1, nr() && ax(t)) {
        var f = t.index, p = ix();
        Z0(t, p, f);
      }
      switch (t.lanes = A, t.tag) {
        case Ve:
          return vw(e, t, t.type, a);
        case wn: {
          var v = t.elementType;
          return dw(e, t, v, a);
        }
        case ie: {
          var m = t.type, y = t.pendingProps, x = t.elementType === m ? y : wi(m, y);
          return hS(e, t, m, x, a);
        }
        case re: {
          var T = t.type, O = t.pendingProps, L = t.elementType === T ? O : wi(T, O);
          return v1(e, t, T, L, a);
        }
        case X:
          return sw(e, t, a);
        case ae:
          return cw(e, t, a);
        case Oe:
          return fw(e, t);
        case Qe:
          return y1(e, t, a);
        case ue:
          return kw(e, t, a);
        case He: {
          var N = t.type, K = t.pendingProps, Ee = t.elementType === N ? K : wi(N, K);
          return s1(e, t, N, Ee, a);
        }
        case nt:
          return lw(e, t, a);
        case ut:
          return uw(e, t, a);
        case pt:
          return ow(e, t, a);
        case Ke:
          return Ow(e, t, a);
        case Pt:
          return Mw(e, t, a);
        case _t: {
          var he = t.type, Je = t.pendingProps, Ge = wi(he, Je);
          if (t.type !== t.elementType) {
            var D = he.propTypes;
            D && Ei(
              D,
              Ge,
              // Resolved for outer only
              "prop",
              mt(he)
            );
          }
          return Ge = wi(he.type, Ge), c1(e, t, he, Ge, a);
        }
        case je:
          return f1(e, t, t.type, t.pendingProps, a);
        case Vn: {
          var z = t.type, b = t.pendingProps, P = t.elementType === z ? b : wi(z, b);
          return pw(e, t, z, P, a);
        }
        case yt:
          return C1(e, t, a);
        case _n:
          break;
        case Me:
          return d1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function uf(e) {
      e.flags |= Fe;
    }
    function w1(e) {
      e.flags |= hr, e.flags |= qf;
    }
    var _1, xS, D1, b1;
    _1 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ae || u.tag === Oe)
          tR(e, u.stateNode);
        else if (u.tag !== ue) {
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
    }, xS = function(e, t) {
    }, D1 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = gg(), v = rR(f, a, s, i, u, p);
        t.updateQueue = v, v && uf(t);
      }
    }, b1 = function(e, t, a, i) {
      a !== i && uf(t);
    };
    function cp(e, t) {
      if (!nr())
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
    function ar(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = A, i = Se;
      if (t) {
        if ((e.mode & ke) !== de) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Ae(a, Ae(m.lanes, m.childLanes)), i |= m.subtreeFlags & On, i |= m.flags & On, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = Ae(a, Ae(y.lanes, y.childLanes)), i |= y.subtreeFlags & On, i |= y.flags & On, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & ke) !== de) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ae(a, Ae(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ae(a, Ae(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function zw(e, t, a) {
      if (gx() && (t.mode & ve) !== de && (t.flags & be) === Se)
        return iE(t), qc(), t.flags |= Yt | Fr | En, !1;
      var i = bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (mx(t), ar(t), (t.mode & ke) !== de) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (qc(), (t.flags & be) === Se && (t.memoizedState = null), t.flags |= Fe, ar(t), (t.mode & ke) !== de) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return lE(), !0;
    }
    function k1(e, t, a) {
      var i = t.pendingProps;
      switch (Xy(t), t.tag) {
        case Ve:
        case wn:
        case je:
        case ie:
        case He:
        case nt:
        case ut:
        case pt:
        case Pt:
        case _t:
          return ar(t), null;
        case re: {
          var u = t.type;
          return Ji(u) && Th(t), ar(t), null;
        }
        case X: {
          var s = t.stateNode;
          if (Jc(t), Qy(t), Rg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = bh(t);
            if (f)
              uf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Yt) !== Se) && (t.flags |= ra, lE());
            }
          }
          return xS(e, t), ar(t), null;
        }
        case ae: {
          Sg(t);
          var v = CE(), m = t.type;
          if (e !== null && t.stateNode != null)
            D1(e, t, m, i, v), e.ref !== t.ref && w1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return ar(t), null;
            }
            var y = gg(), x = bh(t);
            if (x)
              vx(t, v, y) && uf(t);
            else {
              var T = eR(m, i, v, y, t);
              _1(T, t, !1, !1), t.stateNode = T, nR(T, m, i, v) && uf(t);
            }
            t.ref !== null && w1(t);
          }
          return ar(t), null;
        }
        case Oe: {
          var O = i;
          if (e && t.stateNode != null) {
            var L = e.memoizedProps;
            b1(e, t, L, O);
          } else {
            if (typeof O != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var N = CE(), K = gg(), Ee = bh(t);
            Ee ? hx(t) && uf(t) : t.stateNode = aR(O, N, K, t);
          }
          return ar(t), null;
        }
        case Qe: {
          tf(t);
          var he = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Je = zw(e, t, he);
            if (!Je)
              return t.flags & En ? t : null;
          }
          if ((t.flags & be) !== Se)
            return t.lanes = a, (t.mode & ke) !== de && Gg(t), t;
          var Ge = he !== null, D = e !== null && e.memoizedState !== null;
          if (Ge !== D && Ge) {
            var z = t.child;
            if (z.flags |= Vi, (t.mode & ve) !== de) {
              var b = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !rt);
              b || Eg(Ri.current, xE) ? U_() : PS();
            }
          }
          var P = t.updateQueue;
          if (P !== null && (t.flags |= Fe), ar(t), (t.mode & ke) !== de && Ge) {
            var ne = t.child;
            ne !== null && (t.treeBaseDuration -= ne.treeBaseDuration);
          }
          return null;
        }
        case ue:
          return Jc(t), xS(e, t), e === null && KR(t.stateNode.containerInfo), ar(t), null;
        case Ke:
          var Z = t.type._context;
          return cg(Z, t), ar(t), null;
        case Vn: {
          var _e = t.type;
          return Ji(_e) && Th(t), ar(t), null;
        }
        case yt: {
          tf(t);
          var ze = t.memoizedState;
          if (ze === null)
            return ar(t), null;
          var Et = (t.flags & be) !== Se, it = ze.rendering;
          if (it === null)
            if (Et)
              cp(ze, !1);
            else {
              var pn = F_() && (e === null || (e.flags & be) === Se);
              if (!pn)
                for (var lt = t.child; lt !== null; ) {
                  var an = Yh(lt);
                  if (an !== null) {
                    Et = !0, t.flags |= be, cp(ze, !1);
                    var br = an.updateQueue;
                    return br !== null && (t.updateQueue = br, t.flags |= Fe), t.subtreeFlags = Se, wx(t, a), Ku(t, Cg(Ri.current, Kd)), t.child;
                  }
                  lt = lt.sibling;
                }
              ze.tail !== null && jt() > X1() && (t.flags |= be, Et = !0, cp(ze, !1), t.lanes = Dv);
            }
          else {
            if (!Et) {
              var sr = Yh(it);
              if (sr !== null) {
                t.flags |= be, Et = !0;
                var Aa = sr.updateQueue;
                if (Aa !== null && (t.updateQueue = Aa, t.flags |= Fe), cp(ze, !0), ze.tail === null && ze.tailMode === "hidden" && !it.alternate && !nr())
                  return ar(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                jt() * 2 - ze.renderingStartTime > X1() && a !== qn && (t.flags |= be, Et = !0, cp(ze, !1), t.lanes = Dv);
            }
            if (ze.isBackwards)
              it.sibling = t.child, t.child = it;
            else {
              var Qr = ze.last;
              Qr !== null ? Qr.sibling = it : t.child = it, ze.last = it;
            }
          }
          if (ze.tail !== null) {
            var Wr = ze.tail;
            ze.rendering = Wr, ze.tail = Wr.sibling, ze.renderingStartTime = jt(), Wr.sibling = null;
            var kr = Ri.current;
            return Et ? kr = Cg(kr, Kd) : kr = ef(kr), Ku(t, kr), Wr;
          }
          return ar(t), null;
        }
        case _n:
          break;
        case Me:
        case qe: {
          VS(t);
          var Xl = t.memoizedState, hf = Xl !== null;
          if (e !== null) {
            var _p = e.memoizedState, ul = _p !== null;
            ul !== hf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !te && (t.flags |= Vi);
          }
          return !hf || (t.mode & ve) === de ? ar(t) : Rr(ll, qn) && (ar(t), t.subtreeFlags & (kt | Fe) && (t.flags |= Vi)), null;
        }
        case vn:
          return null;
        case Dt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Uw(e, t, a) {
      switch (Xy(t), t.tag) {
        case re: {
          var i = t.type;
          Ji(i) && Th(t);
          var u = t.flags;
          return u & En ? (t.flags = u & ~En | be, (t.mode & ke) !== de && Gg(t), t) : null;
        }
        case X: {
          t.stateNode, Jc(t), Qy(t), Rg();
          var s = t.flags;
          return (s & En) !== Se && (s & be) === Se ? (t.flags = s & ~En | be, t) : null;
        }
        case ae:
          return Sg(t), null;
        case Qe: {
          tf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            qc();
          }
          var p = t.flags;
          return p & En ? (t.flags = p & ~En | be, (t.mode & ke) !== de && Gg(t), t) : null;
        }
        case yt:
          return tf(t), null;
        case ue:
          return Jc(t), null;
        case Ke:
          var v = t.type._context;
          return cg(v, t), null;
        case Me:
        case qe:
          return VS(t), null;
        case vn:
          return null;
        default:
          return null;
      }
    }
    function O1(e, t, a) {
      switch (Xy(t), t.tag) {
        case re: {
          var i = t.type.childContextTypes;
          i != null && Th(t);
          break;
        }
        case X: {
          t.stateNode, Jc(t), Qy(t), Rg();
          break;
        }
        case ae: {
          Sg(t);
          break;
        }
        case ue:
          Jc(t);
          break;
        case Qe:
          tf(t);
          break;
        case yt:
          tf(t);
          break;
        case Ke:
          var u = t.type._context;
          cg(u, t);
          break;
        case Me:
        case qe:
          VS(t);
          break;
      }
    }
    var M1 = null;
    M1 = /* @__PURE__ */ new Set();
    var vm = !1, ir = !1, Aw = typeof WeakSet == "function" ? WeakSet : Set, ce = null, of = null, sf = null;
    function Fw(e) {
      Cl(null, function() {
        throw e;
      }), Wf();
    }
    var Hw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ke)
        try {
          al(), t.componentWillUnmount();
        } finally {
          rl(e);
        }
      else
        t.componentWillUnmount();
    };
    function L1(e, t) {
      try {
        eo(zn, e);
      } catch (a) {
        Lt(e, t, a);
      }
    }
    function wS(e, t, a) {
      try {
        Hw(e, a);
      } catch (i) {
        Lt(e, t, i);
      }
    }
    function jw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Lt(e, t, i);
      }
    }
    function N1(e, t) {
      try {
        U1(e);
      } catch (a) {
        Lt(e, t, a);
      }
    }
    function cf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ln && qr && e.mode & ke)
              try {
                al(), i = a(null);
              } finally {
                rl(e);
              }
            else
              i = a(null);
          } catch (u) {
            Lt(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ue(e));
        } else
          a.current = null;
    }
    function hm(e, t, a) {
      try {
        a();
      } catch (i) {
        Lt(e, t, i);
      }
    }
    var z1 = !1;
    function Bw(e, t) {
      ZT(e.containerInfo), ce = t, Vw();
      var a = z1;
      return z1 = !1, a;
    }
    function Vw() {
      for (; ce !== null; ) {
        var e = ce, t = e.child;
        (e.subtreeFlags & pu) !== Se && t !== null ? (t.return = e, ce = t) : Pw();
      }
    }
    function Pw() {
      for (; ce !== null; ) {
        var e = ce;
        gt(e);
        try {
          $w(e);
        } catch (a) {
          Lt(e, e.return, a);
        }
        un();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ce = t;
          return;
        }
        ce = e.return;
      }
    }
    function $w(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ra) !== Se) {
        switch (gt(e), e.tag) {
          case ie:
          case He:
          case je:
            break;
          case re: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ds && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : wi(e.type, i), u);
              {
                var p = M1;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ue(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case X: {
            {
              var v = e.stateNode;
              RR(v.containerInfo);
            }
            break;
          }
          case ae:
          case Oe:
          case ue:
          case Vn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        un();
      }
    }
    function Di(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & rr) !== ya ? xv(t) : (e & zn) !== ya && Na(t), (e & el) !== ya && Rp(!0), hm(t, a, p), (e & el) !== ya && Rp(!1), (e & rr) !== ya ? qs() : (e & zn) !== ya && yu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function eo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & rr) !== ya ? Yi(t) : (e & zn) !== ya && wv(t);
            var f = s.create;
            (e & el) !== ya && Rp(!0), s.destroy = f(), (e & el) !== ya && Rp(!1), (e & rr) !== ya ? Gs() : (e & zn) !== ya && Lo();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & zn) !== Se ? v = "useLayoutEffect" : (s.tag & el) !== Se ? v = "useInsertionEffect" : v = "useEffect";
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
    function Yw(e, t) {
      if ((t.flags & Fe) !== Se)
        switch (t.tag) {
          case pt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = XE(), p = t.alternate === null ? "mount" : "update";
            qE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case X:
                    var m = v.stateNode;
                    m.passiveEffectDuration += a;
                    break e;
                  case pt:
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
    function Iw(e, t, a, i) {
      if ((a.flags & Wn) !== Se)
        switch (a.tag) {
          case ie:
          case He:
          case je: {
            if (!ir)
              if (a.mode & ke)
                try {
                  al(), eo(zn | Nn, a);
                } finally {
                  rl(a);
                }
              else
                eo(zn | Nn, a);
            break;
          }
          case re: {
            var u = a.stateNode;
            if (a.flags & Fe && !ir)
              if (t === null)
                if (a.type === a.elementType && !ds && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(a) || "instance")), a.mode & ke)
                  try {
                    al(), u.componentDidMount();
                  } finally {
                    rl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : wi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ds && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(a) || "instance")), a.mode & ke)
                  try {
                    al(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    rl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ds && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(a) || "instance")), EE(a, p, u));
            break;
          }
          case X: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ae:
                    m = a.child.stateNode;
                    break;
                  case re:
                    m = a.child.stateNode;
                    break;
                }
              EE(a, v, m);
            }
            break;
          }
          case ae: {
            var y = a.stateNode;
            if (t === null && a.flags & Fe) {
              var x = a.type, T = a.memoizedProps;
              sR(y, x, T);
            }
            break;
          }
          case Oe:
            break;
          case ue:
            break;
          case pt: {
            {
              var O = a.memoizedProps, L = O.onCommit, N = O.onRender, K = a.stateNode.effectDuration, Ee = XE(), he = t === null ? "mount" : "update";
              qE() && (he = "nested-update"), typeof N == "function" && N(a.memoizedProps.id, he, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ee);
              {
                typeof L == "function" && L(a.memoizedProps.id, he, K, Ee), P_(a);
                var Je = a.return;
                e:
                  for (; Je !== null; ) {
                    switch (Je.tag) {
                      case X:
                        var Ge = Je.stateNode;
                        Ge.effectDuration += K;
                        break e;
                      case pt:
                        var D = Je.stateNode;
                        D.effectDuration += K;
                        break e;
                    }
                    Je = Je.return;
                  }
              }
            }
            break;
          }
          case Qe: {
            Jw(e, a);
            break;
          }
          case yt:
          case Vn:
          case _n:
          case Me:
          case qe:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      ir || a.flags & hr && U1(a);
    }
    function Qw(e) {
      switch (e.tag) {
        case ie:
        case He:
        case je: {
          if (e.mode & ke)
            try {
              al(), L1(e, e.return);
            } finally {
              rl(e);
            }
          else
            L1(e, e.return);
          break;
        }
        case re: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && jw(e, e.return, t), N1(e, e.return);
          break;
        }
        case ae: {
          N1(e, e.return);
          break;
        }
      }
    }
    function Ww(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ae) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? SR(u) : CR(i.stateNode, i.memoizedProps);
            } catch (f) {
              Lt(e, e.return, f);
            }
          }
        } else if (i.tag === Oe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? ER(s) : TR(s, i.memoizedProps);
            } catch (f) {
              Lt(e, e.return, f);
            }
        } else if (!((i.tag === Me || i.tag === qe) && i.memoizedState !== null && i !== e)) {
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
    function U1(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ae:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & ke)
            try {
              al(), u = t(i);
            } finally {
              rl(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ue(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ue(e)), t.current = i;
      }
    }
    function Gw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function A1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, A1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ae) {
          var a = e.stateNode;
          a !== null && ex(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function qw(e) {
      for (var t = e.return; t !== null; ) {
        if (F1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function F1(e) {
      return e.tag === ae || e.tag === X || e.tag === ue;
    }
    function H1(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || F1(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ae && t.tag !== Oe && t.tag !== $t; ) {
            if (t.flags & kt || t.child === null || t.tag === ue)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & kt))
            return t.stateNode;
        }
    }
    function Xw(e) {
      var t = qw(e);
      switch (t.tag) {
        case ae: {
          var a = t.stateNode;
          t.flags & ft && (B0(a), t.flags &= ~ft);
          var i = H1(e);
          DS(e, i, a);
          break;
        }
        case X:
        case ue: {
          var u = t.stateNode.containerInfo, s = H1(e);
          _S(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === ae || i === Oe;
      if (u) {
        var s = e.stateNode;
        t ? hR(a, s, t) : pR(a, s);
      } else if (i !== ue) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    function DS(e, t, a) {
      var i = e.tag, u = i === ae || i === Oe;
      if (u) {
        var s = e.stateNode;
        t ? vR(a, s, t) : dR(a, s);
      } else if (i !== ue) {
        var f = e.child;
        if (f !== null) {
          DS(f, t, a);
          for (var p = f.sibling; p !== null; )
            DS(p, t, a), p = p.sibling;
        }
      }
    }
    var lr = null, bi = !1;
    function Kw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ae: {
                lr = i.stateNode, bi = !1;
                break e;
              }
              case X: {
                lr = i.stateNode.containerInfo, bi = !0;
                break e;
              }
              case ue: {
                lr = i.stateNode.containerInfo, bi = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (lr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        j1(e, t, a), lr = null, bi = !1;
      }
      Gw(a);
    }
    function to(e, t, a) {
      for (var i = a.child; i !== null; )
        j1(e, t, i), i = i.sibling;
    }
    function j1(e, t, a) {
      switch (xl(a), a.tag) {
        case ae:
          ir || cf(a, t);
        case Oe: {
          {
            var i = lr, u = bi;
            lr = null, to(e, t, a), lr = i, bi = u, lr !== null && (bi ? yR(lr, a.stateNode) : mR(lr, a.stateNode));
          }
          return;
        }
        case $t: {
          lr !== null && (bi ? gR(lr, a.stateNode) : Hy(lr, a.stateNode));
          return;
        }
        case ue: {
          {
            var s = lr, f = bi;
            lr = a.stateNode.containerInfo, bi = !0, to(e, t, a), lr = s, bi = f;
          }
          return;
        }
        case ie:
        case He:
        case _t:
        case je: {
          if (!ir) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var x = y, T = x.destroy, O = x.tag;
                  T !== void 0 && ((O & el) !== ya ? hm(a, t, T) : (O & zn) !== ya && (Na(a), a.mode & ke ? (al(), hm(a, t, T), rl(a)) : hm(a, t, T), yu())), y = y.next;
                } while (y !== m);
              }
            }
          }
          to(e, t, a);
          return;
        }
        case re: {
          if (!ir) {
            cf(a, t);
            var L = a.stateNode;
            typeof L.componentWillUnmount == "function" && wS(a, t, L);
          }
          to(e, t, a);
          return;
        }
        case _n: {
          to(e, t, a);
          return;
        }
        case Me: {
          if (
            // TODO: Remove this dead flag
            a.mode & ve
          ) {
            var N = ir;
            ir = N || a.memoizedState !== null, to(e, t, a), ir = N;
          } else
            to(e, t, a);
          break;
        }
        default: {
          to(e, t, a);
          return;
        }
      }
    }
    function Zw(e) {
      e.memoizedState;
    }
    function Jw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && FR(s);
          }
        }
      }
    }
    function B1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Aw()), t.forEach(function(i) {
          var u = q_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Br)
              if (of !== null && sf !== null)
                Tp(sf, of);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function e_(e, t, a) {
      of = a, sf = e, gt(t), V1(t, e), gt(t), of = null, sf = null;
    }
    function ki(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Kw(e, t, s);
          } catch (v) {
            Lt(s, t, v);
          }
        }
      var f = jm();
      if (t.subtreeFlags & gr)
        for (var p = t.child; p !== null; )
          gt(p), V1(p, e), p = p.sibling;
      gt(f);
    }
    function V1(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ie:
        case He:
        case _t:
        case je: {
          if (ki(t, e), il(e), u & Fe) {
            try {
              Di(el | Nn, e, e.return), eo(el | Nn, e);
            } catch (_e) {
              Lt(e, e.return, _e);
            }
            if (e.mode & ke) {
              try {
                al(), Di(zn | Nn, e, e.return);
              } catch (_e) {
                Lt(e, e.return, _e);
              }
              rl(e);
            } else
              try {
                Di(zn | Nn, e, e.return);
              } catch (_e) {
                Lt(e, e.return, _e);
              }
          }
          return;
        }
        case re: {
          ki(t, e), il(e), u & hr && i !== null && cf(i, i.return);
          return;
        }
        case ae: {
          ki(t, e), il(e), u & hr && i !== null && cf(i, i.return);
          {
            if (e.flags & ft) {
              var s = e.stateNode;
              try {
                B0(s);
              } catch (_e) {
                Lt(e, e.return, _e);
              }
            }
            if (u & Fe) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    cR(f, y, m, v, p, e);
                  } catch (_e) {
                    Lt(e, e.return, _e);
                  }
              }
            }
          }
          return;
        }
        case Oe: {
          if (ki(t, e), il(e), u & Fe) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, T = e.memoizedProps, O = i !== null ? i.memoizedProps : T;
            try {
              fR(x, O, T);
            } catch (_e) {
              Lt(e, e.return, _e);
            }
          }
          return;
        }
        case X: {
          if (ki(t, e), il(e), u & Fe && i !== null) {
            var L = i.memoizedState;
            if (L.isDehydrated)
              try {
                AR(t.containerInfo);
              } catch (_e) {
                Lt(e, e.return, _e);
              }
          }
          return;
        }
        case ue: {
          ki(t, e), il(e);
          return;
        }
        case Qe: {
          ki(t, e), il(e);
          var N = e.child;
          if (N.flags & Vi) {
            var K = N.stateNode, Ee = N.memoizedState, he = Ee !== null;
            if (K.isHidden = he, he) {
              var Je = N.alternate !== null && N.alternate.memoizedState !== null;
              Je || z_();
            }
          }
          if (u & Fe) {
            try {
              Zw(e);
            } catch (_e) {
              Lt(e, e.return, _e);
            }
            B1(e);
          }
          return;
        }
        case Me: {
          var Ge = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ve
          ) {
            var D = ir;
            ir = D || Ge, ki(t, e), ir = D;
          } else
            ki(t, e);
          if (il(e), u & Vi) {
            var z = e.stateNode, b = e.memoizedState, P = b !== null, ne = e;
            if (z.isHidden = P, P && !Ge && (ne.mode & ve) !== de) {
              ce = ne;
              for (var Z = ne.child; Z !== null; )
                ce = Z, n_(Z), Z = Z.sibling;
            }
            Ww(ne, P);
          }
          return;
        }
        case yt: {
          ki(t, e), il(e), u & Fe && B1(e);
          return;
        }
        case _n:
          return;
        default: {
          ki(t, e), il(e);
          return;
        }
      }
    }
    function il(e) {
      var t = e.flags;
      if (t & kt) {
        try {
          Xw(e);
        } catch (a) {
          Lt(e, e.return, a);
        }
        e.flags &= ~kt;
      }
      t & aa && (e.flags &= ~aa);
    }
    function t_(e, t, a) {
      of = a, sf = t, ce = e, P1(e, t, a), of = null, sf = null;
    }
    function P1(e, t, a) {
      for (var i = (e.mode & ve) !== de; ce !== null; ) {
        var u = ce, s = u.child;
        if (u.tag === Me && i) {
          var f = u.memoizedState !== null, p = f || vm;
          if (p) {
            bS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || ir, x = vm, T = ir;
            vm = p, ir = y, ir && !T && (ce = u, r_(u));
            for (var O = s; O !== null; )
              ce = O, P1(
                O,
                // New root; bubble back up to here and stop.
                t,
                a
              ), O = O.sibling;
            ce = u, vm = x, ir = T, bS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Wn) !== Se && s !== null ? (s.return = u, ce = s) : bS(e, t, a);
      }
    }
    function bS(e, t, a) {
      for (; ce !== null; ) {
        var i = ce;
        if ((i.flags & Wn) !== Se) {
          var u = i.alternate;
          gt(i);
          try {
            Iw(t, u, i, a);
          } catch (f) {
            Lt(i, i.return, f);
          }
          un();
        }
        if (i === e) {
          ce = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ce = s;
          return;
        }
        ce = i.return;
      }
    }
    function n_(e) {
      for (; ce !== null; ) {
        var t = ce, a = t.child;
        switch (t.tag) {
          case ie:
          case He:
          case _t:
          case je: {
            if (t.mode & ke)
              try {
                al(), Di(zn, t, t.return);
              } finally {
                rl(t);
              }
            else
              Di(zn, t, t.return);
            break;
          }
          case re: {
            cf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && wS(t, t.return, i);
            break;
          }
          case ae: {
            cf(t, t.return);
            break;
          }
          case Me: {
            var u = t.memoizedState !== null;
            if (u) {
              $1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ce = a) : $1(e);
      }
    }
    function $1(e) {
      for (; ce !== null; ) {
        var t = ce;
        if (t === e) {
          ce = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ce = a;
          return;
        }
        ce = t.return;
      }
    }
    function r_(e) {
      for (; ce !== null; ) {
        var t = ce, a = t.child;
        if (t.tag === Me) {
          var i = t.memoizedState !== null;
          if (i) {
            Y1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ce = a) : Y1(e);
      }
    }
    function Y1(e) {
      for (; ce !== null; ) {
        var t = ce;
        gt(t);
        try {
          Qw(t);
        } catch (i) {
          Lt(t, t.return, i);
        }
        if (un(), t === e) {
          ce = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ce = a;
          return;
        }
        ce = t.return;
      }
    }
    function a_(e, t, a, i) {
      ce = t, i_(t, e, a, i);
    }
    function i_(e, t, a, i) {
      for (; ce !== null; ) {
        var u = ce, s = u.child;
        (u.subtreeFlags & ia) !== Se && s !== null ? (s.return = u, ce = s) : l_(e, t, a, i);
      }
    }
    function l_(e, t, a, i) {
      for (; ce !== null; ) {
        var u = ce;
        if ((u.flags & Nt) !== Se) {
          gt(u);
          try {
            u_(t, u, a, i);
          } catch (f) {
            Lt(u, u.return, f);
          }
          un();
        }
        if (u === e) {
          ce = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ce = s;
          return;
        }
        ce = u.return;
      }
    }
    function u_(e, t, a, i) {
      switch (t.tag) {
        case ie:
        case He:
        case je: {
          if (t.mode & ke) {
            Wg();
            try {
              eo(rr | Nn, t);
            } finally {
              Qg(t);
            }
          } else
            eo(rr | Nn, t);
          break;
        }
      }
    }
    function o_(e) {
      ce = e, s_();
    }
    function s_() {
      for (; ce !== null; ) {
        var e = ce, t = e.child;
        if ((ce.flags & st) !== Se) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ce = u, d_(u, e);
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
            ce = e;
          }
        }
        (e.subtreeFlags & ia) !== Se && t !== null ? (t.return = e, ce = t) : c_();
      }
    }
    function c_() {
      for (; ce !== null; ) {
        var e = ce;
        (e.flags & Nt) !== Se && (gt(e), f_(e), un());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ce = t;
          return;
        }
        ce = e.return;
      }
    }
    function f_(e) {
      switch (e.tag) {
        case ie:
        case He:
        case je: {
          e.mode & ke ? (Wg(), Di(rr | Nn, e, e.return), Qg(e)) : Di(rr | Nn, e, e.return);
          break;
        }
      }
    }
    function d_(e, t) {
      for (; ce !== null; ) {
        var a = ce;
        gt(a), v_(a, t), un();
        var i = a.child;
        i !== null ? (i.return = a, ce = i) : p_(e);
      }
    }
    function p_(e) {
      for (; ce !== null; ) {
        var t = ce, a = t.sibling, i = t.return;
        if (A1(t), t === e) {
          ce = null;
          return;
        }
        if (a !== null) {
          a.return = i, ce = a;
          return;
        }
        ce = i;
      }
    }
    function v_(e, t) {
      switch (e.tag) {
        case ie:
        case He:
        case je: {
          e.mode & ke ? (Wg(), Di(rr, e, t), Qg(e)) : Di(rr, e, t);
          break;
        }
      }
    }
    function h_(e) {
      switch (e.tag) {
        case ie:
        case He:
        case je: {
          try {
            eo(zn | Nn, e);
          } catch (a) {
            Lt(e, e.return, a);
          }
          break;
        }
        case re: {
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
    function m_(e) {
      switch (e.tag) {
        case ie:
        case He:
        case je: {
          try {
            eo(rr | Nn, e);
          } catch (t) {
            Lt(e, e.return, t);
          }
          break;
        }
      }
    }
    function y_(e) {
      switch (e.tag) {
        case ie:
        case He:
        case je: {
          try {
            Di(zn | Nn, e, e.return);
          } catch (a) {
            Lt(e, e.return, a);
          }
          break;
        }
        case re: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && wS(e, e.return, t);
          break;
        }
      }
    }
    function g_(e) {
      switch (e.tag) {
        case ie:
        case He:
        case je:
          try {
            Di(rr | Nn, e, e.return);
          } catch (t) {
            Lt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var fp = Symbol.for;
      fp("selector.component"), fp("selector.has_pseudo_class"), fp("selector.role"), fp("selector.test_id"), fp("selector.text");
    }
    var S_ = [];
    function E_() {
      S_.forEach(function(e) {
        return e();
      });
    }
    var C_ = w.ReactCurrentActQueue;
    function T_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function I1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && C_.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var R_ = Math.ceil, kS = w.ReactCurrentDispatcher, OS = w.ReactCurrentOwner, ur = w.ReactCurrentBatchConfig, Oi = w.ReactCurrentActQueue, Fn = (
      /*             */
      0
    ), Q1 = (
      /*               */
      1
    ), or = (
      /*                */
      2
    ), ti = (
      /*                */
      4
    ), Ql = 0, dp = 1, ps = 2, mm = 3, pp = 4, W1 = 5, MS = 6, Ze = Fn, Yr = null, Zt = null, Hn = A, ll = A, LS = Iu(A), jn = Ql, vp = null, ym = A, hp = A, gm = A, mp = null, ga = null, NS = 0, G1 = 500, q1 = 1 / 0, x_ = 500, Wl = null;
    function yp() {
      q1 = jt() + x_;
    }
    function X1() {
      return q1;
    }
    var Sm = !1, zS = null, ff = null, vs = !1, no = null, gp = A, US = [], AS = null, w_ = 50, Sp = 0, FS = null, HS = !1, Em = !1, __ = 50, df = 0, Cm = null, Ep = wt, Tm = A, K1 = !1;
    function Rm() {
      return Yr;
    }
    function Ir() {
      return (Ze & (or | ti)) !== Fn ? jt() : (Ep !== wt || (Ep = jt()), Ep);
    }
    function ro(e) {
      var t = e.mode;
      if ((t & ve) === de)
        return ye;
      if ((Ze & or) !== Fn && Hn !== A)
        return _u(Hn);
      var a = Cx() !== Ex;
      if (a) {
        if (ur.transition !== null) {
          var i = ur.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Tm === rn && (Tm = Uv()), Tm;
      }
      var u = ca();
      if (u !== rn)
        return u;
      var s = iR();
      return s;
    }
    function D_(e) {
      var t = e.mode;
      return (t & ve) === de ? ye : Tr();
    }
    function Bn(e, t, a, i) {
      K_(), K1 && g("useInsertionEffect must not schedule updates."), HS && (Em = !0), Ll(e, a, i), (Ze & or) !== A && e === Yr ? eD(t) : (Br && gc(e, t, a), tD(t), e === Yr && ((Ze & or) === Fn && (hp = Ae(hp, a)), jn === pp && ao(e, Hn)), Sa(e, i), a === ye && Ze === Fn && (t.mode & ve) === de && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Oi.isBatchingLegacy && (yp(), K0()));
    }
    function b_(e, t, a) {
      var i = e.current;
      i.lanes = t, Ll(e, t, a), Sa(e, a);
    }
    function k_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ze & or) !== Fn
      );
    }
    function Sa(e, t) {
      var a = e.callbackNode;
      Ov(e, t);
      var i = Ol(e, e === Yr ? Hn : A);
      if (i === A) {
        a !== null && pC(a), e.callbackNode = null, e.callbackPriority = rn;
        return;
      }
      var u = qt(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Oi.current !== null && a !== IS)) {
        a == null && s !== ye && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && pC(a);
      var f;
      if (u === ye)
        e.tag === Qu ? (Oi.isBatchingLegacy !== null && (Oi.didScheduleLegacyUpdate = !0), rx(eC.bind(null, e))) : X0(eC.bind(null, e)), Oi.current !== null ? Oi.current.push(Wu) : uR(function() {
          (Ze & (or | ti)) === Fn && Wu();
        }), f = null;
      else {
        var p;
        switch (Ln(i)) {
          case Xt:
            p = Is;
            break;
          case mi:
            p = Rl;
            break;
          case Qa:
            p = Ia;
            break;
          case Du:
            p = Qs;
            break;
          default:
            p = Ia;
            break;
        }
        f = QS(p, Z1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function Z1(e, t) {
      if (Wx(), Ep = wt, Tm = A, (Ze & (or | ti)) !== Fn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = ql();
      if (i && e.callbackNode !== a)
        return null;
      var u = Ol(e, e === Yr ? Hn : A);
      if (u === A)
        return null;
      var s = !Bo(e, u) && !zv(e, u) && !t, f = s ? j_(e, u) : wm(e, u);
      if (f !== Ql) {
        if (f === ps) {
          var p = Qi(e);
          p !== A && (u = p, f = jS(e, p));
        }
        if (f === dp) {
          var v = vp;
          throw hs(e, A), ao(e, u), Sa(e, jt()), v;
        }
        if (f === MS)
          ao(e, u);
        else {
          var m = !Bo(e, u), y = e.current.alternate;
          if (m && !M_(y)) {
            if (f = wm(e, u), f === ps) {
              var x = Qi(e);
              x !== A && (u = x, f = jS(e, x));
            }
            if (f === dp) {
              var T = vp;
              throw hs(e, A), ao(e, u), Sa(e, jt()), T;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, O_(e, f, u);
        }
      }
      return Sa(e, jt()), e.callbackNode === a ? Z1.bind(null, e) : null;
    }
    function jS(e, t) {
      var a = mp;
      if (Sc(e)) {
        var i = hs(e, t);
        i.flags |= Yt, XR(e.containerInfo);
      }
      var u = wm(e, t);
      if (u !== ps) {
        var s = ga;
        ga = a, s !== null && J1(s);
      }
      return u;
    }
    function J1(e) {
      ga === null ? ga = e : ga.push.apply(ga, e);
    }
    function O_(e, t, a) {
      switch (t) {
        case Ql:
        case dp:
          throw new Error("Root did not complete. This is a bug in React.");
        case ps: {
          ms(e, ga, Wl);
          break;
        }
        case mm: {
          if (ao(e, a), Mv(a) && // do not delay if we're inside an act() scope
          !vC()) {
            var i = NS + G1 - jt();
            if (i > 10) {
              var u = Ol(e, A);
              if (u !== A)
                break;
              var s = e.suspendedLanes;
              if (!Ml(s, a)) {
                Ir(), mc(e, s);
                break;
              }
              e.timeoutHandle = Ay(ms.bind(null, e, ga, Wl), i);
              break;
            }
          }
          ms(e, ga, Wl);
          break;
        }
        case pp: {
          if (ao(e, a), Nv(a))
            break;
          if (!vC()) {
            var f = bv(e, a), p = f, v = jt() - p, m = X_(v) - v;
            if (m > 10) {
              e.timeoutHandle = Ay(ms.bind(null, e, ga, Wl), m);
              break;
            }
          }
          ms(e, ga, Wl);
          break;
        }
        case W1: {
          ms(e, ga, Wl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function M_(e) {
      for (var t = e; ; ) {
        if (t.flags & Oo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!se(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Oo && v !== null) {
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
    function ao(e, t) {
      t = Vo(t, gm), t = Vo(t, hp), Fv(e, t);
    }
    function eC(e) {
      if (Gx(), (Ze & (or | ti)) !== Fn)
        throw new Error("Should not already be working.");
      ql();
      var t = Ol(e, A);
      if (!Rr(t, ye))
        return Sa(e, jt()), null;
      var a = wm(e, t);
      if (e.tag !== Qu && a === ps) {
        var i = Qi(e);
        i !== A && (t = i, a = jS(e, i));
      }
      if (a === dp) {
        var u = vp;
        throw hs(e, A), ao(e, t), Sa(e, jt()), u;
      }
      if (a === MS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ms(e, ga, Wl), Sa(e, jt()), null;
    }
    function L_(e, t) {
      t !== A && (cd(e, Ae(t, ye)), Sa(e, jt()), (Ze & (or | ti)) === Fn && (yp(), Wu()));
    }
    function BS(e, t) {
      var a = Ze;
      Ze |= Q1;
      try {
        return e(t);
      } finally {
        Ze = a, Ze === Fn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Oi.isBatchingLegacy && (yp(), K0());
      }
    }
    function N_(e, t, a, i, u) {
      var s = ca(), f = ur.transition;
      try {
        return ur.transition = null, It(Xt), e(t, a, i, u);
      } finally {
        It(s), ur.transition = f, Ze === Fn && yp();
      }
    }
    function Gl(e) {
      no !== null && no.tag === Qu && (Ze & (or | ti)) === Fn && ql();
      var t = Ze;
      Ze |= Q1;
      var a = ur.transition, i = ca();
      try {
        return ur.transition = null, It(Xt), e ? e() : void 0;
      } finally {
        It(i), ur.transition = a, Ze = t, (Ze & (or | ti)) === Fn && Wu();
      }
    }
    function tC() {
      return (Ze & (or | ti)) !== Fn;
    }
    function xm(e, t) {
      _r(LS, ll, e), ll = Ae(ll, t);
    }
    function VS(e) {
      ll = LS.current, wr(LS, e);
    }
    function hs(e, t) {
      e.finishedWork = null, e.finishedLanes = A;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, lR(a)), Zt !== null)
        for (var i = Zt.return; i !== null; ) {
          var u = i.alternate;
          O1(u, i), i = i.return;
        }
      Yr = e;
      var s = ys(e.current, null);
      return Zt = s, Hn = ll = t, jn = Ql, vp = null, ym = A, hp = A, gm = A, mp = null, ga = null, bx(), Ti.discardPendingWarnings(), s;
    }
    function nC(e, t) {
      do {
        var a = Zt;
        try {
          if (zh(), _E(), un(), OS.current = null, a === null || a.return === null) {
            jn = dp, vp = t, Zt = null;
            return;
          }
          if (ln && a.mode & ke && sm(a, !0), Fa)
            if (Er(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              wl(a, i, Hn);
            } else
              No(a, t, Hn);
          rw(e, a.return, a, t, Hn), lC(a);
        } catch (u) {
          t = u, Zt === a && a !== null ? (a = a.return, Zt = a) : a = Zt;
          continue;
        }
        return;
      } while (!0);
    }
    function rC() {
      var e = kS.current;
      return kS.current = am, e === null ? am : e;
    }
    function aC(e) {
      kS.current = e;
    }
    function z_() {
      NS = jt();
    }
    function Cp(e) {
      ym = Ae(e, ym);
    }
    function U_() {
      jn === Ql && (jn = mm);
    }
    function PS() {
      (jn === Ql || jn === mm || jn === ps) && (jn = pp), Yr !== null && (jo(ym) || jo(hp)) && ao(Yr, Hn);
    }
    function A_(e) {
      jn !== pp && (jn = ps), mp === null ? mp = [e] : mp.push(e);
    }
    function F_() {
      return jn === Ql;
    }
    function wm(e, t) {
      var a = Ze;
      Ze |= or;
      var i = rC();
      if (Yr !== e || Hn !== t) {
        if (Br) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Tp(e, Hn), u.clear()), fd(e, t);
        }
        Wl = $o(), hs(e, t);
      }
      zt(t);
      do
        try {
          H_();
          break;
        } catch (s) {
          nC(e, s);
        }
      while (!0);
      if (zh(), Ze = a, aC(i), Zt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ks(), Yr = null, Hn = A, jn;
    }
    function H_() {
      for (; Zt !== null; )
        iC(Zt);
    }
    function j_(e, t) {
      var a = Ze;
      Ze |= or;
      var i = rC();
      if (Yr !== e || Hn !== t) {
        if (Br) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Tp(e, Hn), u.clear()), fd(e, t);
        }
        Wl = $o(), yp(), hs(e, t);
      }
      zt(t);
      do
        try {
          B_();
          break;
        } catch (s) {
          nC(e, s);
        }
      while (!0);
      return zh(), aC(i), Ze = a, Zt !== null ? (Xs(), Ql) : (Ks(), Yr = null, Hn = A, jn);
    }
    function B_() {
      for (; Zt !== null && !Ys(); )
        iC(Zt);
    }
    function iC(e) {
      var t = e.alternate;
      gt(e);
      var a;
      (e.mode & ke) !== de ? (Ig(e), a = $S(t, e, ll), sm(e, !0)) : a = $S(t, e, ll), un(), e.memoizedProps = e.pendingProps, a === null ? lC(e) : Zt = a, OS.current = null;
    }
    function lC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Fr) === Se) {
          gt(t);
          var u = void 0;
          if ((t.mode & ke) === de ? u = k1(a, t, ll) : (Ig(t), u = k1(a, t, ll), sm(t, !1)), un(), u !== null) {
            Zt = u;
            return;
          }
        } else {
          var s = Uw(a, t);
          if (s !== null) {
            s.flags &= yv, Zt = s;
            return;
          }
          if ((t.mode & ke) !== de) {
            sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Fr, i.subtreeFlags = Se, i.deletions = null;
          else {
            jn = MS, Zt = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Zt = v;
          return;
        }
        t = i, Zt = t;
      } while (t !== null);
      jn === Ql && (jn = W1);
    }
    function ms(e, t, a) {
      var i = ca(), u = ur.transition;
      try {
        ur.transition = null, It(Xt), V_(e, t, a, i);
      } finally {
        ur.transition = u, It(i);
      }
      return null;
    }
    function V_(e, t, a, i) {
      do
        ql();
      while (no !== null);
      if (Z_(), (Ze & (or | ti)) !== Fn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if ($i(s), u === null)
        return Ws(), null;
      if (s === A && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = A, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = rn;
      var f = Ae(u.lanes, u.childLanes);
      yc(e, f), e === Yr && (Yr = null, Zt = null, Hn = A), ((u.subtreeFlags & ia) !== Se || (u.flags & ia) !== Se) && (vs || (vs = !0, AS = a, QS(Ia, function() {
        return ql(), null;
      })));
      var p = (u.subtreeFlags & (pu | gr | Wn | ia)) !== Se, v = (u.flags & (pu | gr | Wn | ia)) !== Se;
      if (p || v) {
        var m = ur.transition;
        ur.transition = null;
        var y = ca();
        It(Xt);
        var x = Ze;
        Ze |= ti, OS.current = null, Bw(e, u), KE(), e_(e, u, s), JT(e.containerInfo), e.current = u, nd(s), t_(u, e, s), gu(), Ev(), Ze = x, It(y), ur.transition = m;
      } else
        e.current = u, KE();
      var T = vs;
      if (vs ? (vs = !1, no = e, gp = s) : (df = 0, Cm = null), f = e.pendingLanes, f === A && (ff = null), T || cC(e.current, !1), hu(u.stateNode, i), Br && e.memoizedUpdaters.clear(), E_(), Sa(e, jt()), t !== null)
        for (var O = e.onRecoverableError, L = 0; L < t.length; L++) {
          var N = t[L], K = N.stack, Ee = N.digest;
          O(N.value, {
            componentStack: K,
            digest: Ee
          });
        }
      if (Sm) {
        Sm = !1;
        var he = zS;
        throw zS = null, he;
      }
      return Rr(gp, ye) && e.tag !== Qu && ql(), f = e.pendingLanes, Rr(f, ye) ? (Qx(), e === FS ? Sp++ : (Sp = 0, FS = e)) : Sp = 0, Wu(), Ws(), null;
    }
    function ql() {
      if (no !== null) {
        var e = Ln(gp), t = uy(Qa, e), a = ur.transition, i = ca();
        try {
          return ur.transition = null, It(t), $_();
        } finally {
          It(i), ur.transition = a;
        }
      }
      return !1;
    }
    function P_(e) {
      US.push(e), vs || (vs = !0, QS(Ia, function() {
        return ql(), null;
      }));
    }
    function $_() {
      if (no === null)
        return !1;
      var e = AS;
      AS = null;
      var t = no, a = gp;
      if (no = null, gp = A, (Ze & (or | ti)) !== Fn)
        throw new Error("Cannot flush passive effects while already rendering.");
      HS = !0, Em = !1, _v(a);
      var i = Ze;
      Ze |= ti, o_(t.current), a_(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Yw(t, f);
        }
      }
      rd(), cC(t.current, !0), Ze = i, Wu(), Em ? t === Cm ? df++ : (df = 0, Cm = t) : df = 0, HS = !1, Em = !1, oa(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function uC(e) {
      return ff !== null && ff.has(e);
    }
    function Y_(e) {
      ff === null ? ff = /* @__PURE__ */ new Set([e]) : ff.add(e);
    }
    function I_(e) {
      Sm || (Sm = !0, zS = e);
    }
    var Q_ = I_;
    function oC(e, t, a) {
      var i = fs(a, t), u = i1(e, i, ye), s = qu(e, u, ye), f = Ir();
      s !== null && (Ll(s, ye, f), Sa(s, f));
    }
    function Lt(e, t, a) {
      if (Fw(a), Rp(!1), e.tag === X) {
        oC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === X) {
          oC(i, e, a);
          return;
        } else if (i.tag === re) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !uC(s)) {
            var f = fs(a, e), p = sS(i, f, ye), v = qu(i, p, ye), m = Ir();
            v !== null && (Ll(v, ye, m), Sa(v, m));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function W_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ir();
      mc(e, a), nD(e), Yr === e && Ml(Hn, a) && (jn === pp || jn === mm && Mv(Hn) && jt() - NS < G1 ? hs(e, A) : gm = Ae(gm, a)), Sa(e, u);
    }
    function sC(e, t) {
      t === rn && (t = D_(e));
      var a = Ir(), i = ma(e, t);
      i !== null && (Ll(i, t, a), Sa(i, a));
    }
    function G_(e) {
      var t = e.memoizedState, a = rn;
      t !== null && (a = t.retryLane), sC(e, a);
    }
    function q_(e, t) {
      var a = rn, i;
      switch (e.tag) {
        case Qe:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case yt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), sC(e, a);
    }
    function X_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : R_(e / 1960) * 1960;
    }
    function K_() {
      if (Sp > w_)
        throw Sp = 0, FS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      df > __ && (df = 0, Cm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Z_() {
      Ti.flushLegacyContextWarning(), Ti.flushPendingUnsafeLifecycleWarnings();
    }
    function cC(e, t) {
      gt(e), _m(e, yr, y_), t && _m(e, Tl, g_), _m(e, yr, h_), t && _m(e, Tl, m_), un();
    }
    function _m(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Se ? i = i.child : ((i.flags & t) !== Se && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Dm = null;
    function fC(e) {
      {
        if ((Ze & or) !== Fn || !(e.mode & ve))
          return;
        var t = e.tag;
        if (t !== Ve && t !== X && t !== re && t !== ie && t !== He && t !== _t && t !== je)
          return;
        var a = Ue(e) || "ReactComponent";
        if (Dm !== null) {
          if (Dm.has(a))
            return;
          Dm.add(a);
        } else
          Dm = /* @__PURE__ */ new Set([a]);
        var i = en;
        try {
          gt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? gt(e) : un();
        }
      }
    }
    var $S;
    {
      var J_ = null;
      $S = function(e, t, a) {
        var i = SC(J_, t);
        try {
          return x1(e, t, a);
        } catch (s) {
          if (fx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (zh(), _E(), O1(e, t), SC(t, i), t.mode & ke && Ig(t), Cl(null, x1, null, e, t, a), ny()) {
            var u = Wf();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var dC = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function eD(e) {
      if (Jr && !$x())
        switch (e.tag) {
          case ie:
          case He:
          case je: {
            var t = Zt && Ue(Zt) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Ue(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case re: {
            dC || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), dC = !0);
            break;
          }
        }
    }
    function Tp(e, t) {
      if (Br) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          gc(e, i, t);
        });
      }
    }
    var IS = {};
    function QS(e, t) {
      {
        var a = Oi.current;
        return a !== null ? (a.push(t), IS) : $s(e, t);
      }
    }
    function pC(e) {
      if (e !== IS)
        return Sv(e);
    }
    function vC() {
      return Oi.current !== null;
    }
    function tD(e) {
      {
        if (e.mode & ve) {
          if (!I1())
            return;
        } else if (!T_() || Ze !== Fn || e.tag !== ie && e.tag !== He && e.tag !== je)
          return;
        if (Oi.current === null) {
          var t = en;
          try {
            gt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ue(e));
          } finally {
            t ? gt(e) : un();
          }
        }
      }
    }
    function nD(e) {
      e.tag !== Qu && I1() && Oi.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Rp(e) {
      K1 = e;
    }
    var ni = null, pf = null, rD = function(e) {
      ni = e;
    };
    function vf(e) {
      {
        if (ni === null)
          return e;
        var t = ni(e);
        return t === void 0 ? e : t.current;
      }
    }
    function WS(e) {
      return vf(e);
    }
    function GS(e) {
      {
        if (ni === null)
          return e;
        var t = ni(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = vf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Q,
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
    function hC(e, t) {
      {
        if (ni === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case re: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ie: {
            (typeof i == "function" || s === we) && (u = !0);
            break;
          }
          case He: {
            (s === Q || s === we) && (u = !0);
            break;
          }
          case _t:
          case je: {
            (s === et || s === we) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ni(a);
          if (f !== void 0 && f === ni(i))
            return !0;
        }
        return !1;
      }
    }
    function mC(e) {
      {
        if (ni === null || typeof WeakSet != "function")
          return;
        pf === null && (pf = /* @__PURE__ */ new WeakSet()), pf.add(e);
      }
    }
    var aD = function(e, t) {
      {
        if (ni === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        ql(), Gl(function() {
          qS(e.current, i, a);
        });
      }
    }, iD = function(e, t) {
      {
        if (e.context !== za)
          return;
        ql(), Gl(function() {
          xp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ie:
          case je:
          case re:
            v = p;
            break;
          case He:
            v = p.render;
            break;
        }
        if (ni === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var x = ni(v);
          x !== void 0 && (a.has(x) ? y = !0 : t.has(x) && (f === re ? y = !0 : m = !0));
        }
        if (pf !== null && (pf.has(e) || i !== null && pf.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var T = ma(e, ye);
          T !== null && Bn(T, e, ye, wt);
        }
        u !== null && !y && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var lD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return XS(e.current, i, a), a;
      }
    };
    function XS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ie:
          case je:
          case re:
            p = f;
            break;
          case He:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? uD(e, a) : i !== null && XS(i, t, a), u !== null && XS(u, t, a);
      }
    }
    function uD(e, t) {
      {
        var a = oD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ae:
              t.add(i.stateNode);
              return;
            case ue:
              t.add(i.stateNode.containerInfo);
              return;
            case X:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function oD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ae)
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
    var KS;
    {
      KS = !1;
      try {
        var yC = Object.preventExtensions({});
      } catch {
        KS = !0;
      }
    }
    function sD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Se, this.subtreeFlags = Se, this.deletions = null, this.lanes = A, this.childLanes = A, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !KS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ua = function(e, t, a, i) {
      return new sD(e, t, a, i);
    };
    function ZS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function cD(e) {
      return typeof e == "function" && !ZS(e) && e.defaultProps === void 0;
    }
    function fD(e) {
      if (typeof e == "function")
        return ZS(e) ? re : ie;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Q)
          return He;
        if (t === et)
          return _t;
      }
      return Ve;
    }
    function ys(e, t) {
      var a = e.alternate;
      a === null ? (a = Ua(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Se, a.subtreeFlags = Se, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & On, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ve:
        case ie:
        case je:
          a.type = vf(e.type);
          break;
        case re:
          a.type = WS(e.type);
          break;
        case He:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function dD(e, t) {
      e.flags &= On | kt;
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
    function pD(e, t, a) {
      var i;
      return e === xh ? (i = ve, t === !0 && (i |= Ie, i |= Vr)) : i = de, Br && (i |= ke), Ua(X, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = Ve, p = e;
      if (typeof e == "function")
        ZS(e) ? (f = re, p = WS(p)) : p = vf(p);
      else if (typeof e == "string")
        f = ae;
      else
        e:
          switch (e) {
            case _a:
              return io(a.children, u, s, t);
            case Li:
              f = ut, u |= Ie, (u & ve) !== de && (u |= Vr);
              break;
            case fl:
              return vD(a, u, s, t);
            case me:
              return hD(a, u, s, t);
            case Xe:
              return mD(a, u, s, t);
            case bt:
              return gC(a, u, s, t);
            case Ht:
            case $e:
            case pr:
            case Ni:
            case yn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case E:
                    f = Ke;
                    break e;
                  case j:
                    f = Pt;
                    break e;
                  case Q:
                    f = He, p = GS(p);
                    break e;
                  case et:
                    f = _t;
                    break e;
                  case we:
                    f = wn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var m = i ? Ue(i) : null;
                m && (v += `

Check the render method of \`` + m + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var y = Ua(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function e0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function io(e, t, a, i) {
      var u = Ua(nt, e, i, t);
      return u.lanes = a, u;
    }
    function vD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Ua(pt, e, i, t | ke);
      return u.elementType = fl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function hD(e, t, a, i) {
      var u = Ua(Qe, e, i, t);
      return u.elementType = me, u.lanes = a, u;
    }
    function mD(e, t, a, i) {
      var u = Ua(yt, e, i, t);
      return u.elementType = Xe, u.lanes = a, u;
    }
    function gC(e, t, a, i) {
      var u = Ua(Me, e, i, t);
      u.elementType = bt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function t0(e, t, a) {
      var i = Ua(Oe, e, null, t);
      return i.lanes = a, i;
    }
    function yD() {
      var e = Ua(ae, null, null, de);
      return e.elementType = "DELETED", e;
    }
    function gD(e) {
      var t = Ua($t, null, null, de);
      return t.stateNode = e, t;
    }
    function n0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Ua(ue, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function SC(e, t) {
      return e === null && (e = Ua(Ve, null, null, de)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function SD(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = rn, this.eventTimes = Po(A), this.expirationTimes = Po(wt), this.pendingLanes = A, this.suspendedLanes = A, this.pingedLanes = A, this.expiredLanes = A, this.mutableReadLanes = A, this.finishedLanes = A, this.entangledLanes = A, this.entanglements = Po(A), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Ao; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case xh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Qu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function EC(e, t, a, i, u, s, f, p, v, m) {
      var y = new SD(e, t, a, p, v), x = pD(t, s);
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
      return hg(x), y;
    }
    var r0 = "18.3.1";
    function ED(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ta(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: zr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var a0, i0;
    a0 = !1, i0 = {};
    function CC(e) {
      if (!e)
        return za;
      var t = na(e), a = nx(t);
      if (t.tag === re) {
        var i = t.type;
        if (Ji(i))
          return G0(t, i, a);
      }
      return a;
    }
    function CD(e, t) {
      {
        var a = na(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = la(a);
        if (u === null)
          return null;
        if (u.mode & Ie) {
          var s = Ue(a) || "Component";
          if (!i0[s]) {
            i0[s] = !0;
            var f = en;
            try {
              gt(u), a.mode & Ie ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? gt(f) : un();
            }
          }
        }
        return u.stateNode;
      }
    }
    function TC(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return EC(e, t, v, m, a, i, u, s, f);
    }
    function RC(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, x = EC(a, i, y, e, u, s, f, p, v);
      x.context = CC(null);
      var T = x.current, O = Ir(), L = ro(T), N = Yl(O, L);
      return N.callback = t ?? null, qu(T, N, L), b_(x, L, O), x;
    }
    function xp(e, t, a, i) {
      td(t, e);
      var u = t.current, s = Ir(), f = ro(u);
      ad(f);
      var p = CC(a);
      t.context === null ? t.context = p : t.pendingContext = p, Jr && en !== null && !a0 && (a0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ue(en) || "Unknown"));
      var v = Yl(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = qu(u, v, f);
      return m !== null && (Bn(m, u, f, s), jh(m, u, f)), f;
    }
    function bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ae:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function TD(e) {
      switch (e.tag) {
        case X: {
          var t = e.stateNode;
          if (Sc(t)) {
            var a = ud(t);
            L_(t, a);
          }
          break;
        }
        case Qe: {
          Gl(function() {
            var u = ma(e, ye);
            if (u !== null) {
              var s = Ir();
              Bn(u, e, ye, s);
            }
          });
          var i = ye;
          l0(e, i);
          break;
        }
      }
    }
    function xC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Av(a.retryLane, t));
    }
    function l0(e, t) {
      xC(e, t);
      var a = e.alternate;
      a && xC(a, t);
    }
    function RD(e) {
      if (e.tag === Qe) {
        var t = Ho, a = ma(e, t);
        if (a !== null) {
          var i = Ir();
          Bn(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function xD(e) {
      if (e.tag === Qe) {
        var t = ro(e), a = ma(e, t);
        if (a !== null) {
          var i = Ir();
          Bn(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function wC(e) {
      var t = gv(e);
      return t === null ? null : t.stateNode;
    }
    var _C = function(e) {
      return null;
    };
    function wD(e) {
      return _C(e);
    }
    var DC = function(e) {
      return !1;
    };
    function _D(e) {
      return DC(e);
    }
    var bC = null, kC = null, OC = null, MC = null, LC = null, NC = null, zC = null, UC = null, AC = null;
    {
      var FC = function(e, t, a) {
        var i = t[a], u = gn(e) ? e.slice() : Ye({}, e);
        return a + 1 === t.length ? (gn(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = FC(e[i], t, a + 1), u);
      }, HC = function(e, t) {
        return FC(e, t, 0);
      }, jC = function(e, t, a, i) {
        var u = t[i], s = gn(e) ? e.slice() : Ye({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], gn(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = jC(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, BC = function(e, t, a) {
        if (t.length !== a.length) {
          xe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              xe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return jC(e, t, a, 0);
      }, VC = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = gn(e) ? e.slice() : Ye({}, e);
        return s[u] = VC(e[u], t, a + 1, i), s;
      }, PC = function(e, t, a) {
        return VC(e, t, 0, a);
      }, u0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      bC = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = PC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ye({}, e.memoizedProps);
          var f = ma(e, ye);
          f !== null && Bn(f, e, ye, wt);
        }
      }, kC = function(e, t, a) {
        var i = u0(e, t);
        if (i !== null) {
          var u = HC(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ye({}, e.memoizedProps);
          var s = ma(e, ye);
          s !== null && Bn(s, e, ye, wt);
        }
      }, OC = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = BC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ye({}, e.memoizedProps);
          var f = ma(e, ye);
          f !== null && Bn(f, e, ye, wt);
        }
      }, MC = function(e, t, a) {
        e.pendingProps = PC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ma(e, ye);
        i !== null && Bn(i, e, ye, wt);
      }, LC = function(e, t) {
        e.pendingProps = HC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ma(e, ye);
        a !== null && Bn(a, e, ye, wt);
      }, NC = function(e, t, a) {
        e.pendingProps = BC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ma(e, ye);
        i !== null && Bn(i, e, ye, wt);
      }, zC = function(e) {
        var t = ma(e, ye);
        t !== null && Bn(t, e, ye, wt);
      }, UC = function(e) {
        _C = e;
      }, AC = function(e) {
        DC = e;
      };
    }
    function DD(e) {
      var t = la(e);
      return t === null ? null : t.stateNode;
    }
    function bD(e) {
      return null;
    }
    function kD() {
      return en;
    }
    function OD(e) {
      var t = e.findFiberByHostInstance, a = w.ReactCurrentDispatcher;
      return ed({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: bC,
        overrideHookStateDeletePath: kC,
        overrideHookStateRenamePath: OC,
        overrideProps: MC,
        overridePropsDeletePath: LC,
        overridePropsRenamePath: NC,
        setErrorHandler: UC,
        setSuspenseHandler: AC,
        scheduleUpdate: zC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: DD,
        findFiberByHostInstance: t || bD,
        // React Refresh
        findHostInstancesForRefresh: lD,
        scheduleRefresh: aD,
        scheduleRoot: iD,
        setRefreshHandler: rD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: kD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: r0
      });
    }
    var $C = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function o0(e) {
      this._internalRoot = e;
    }
    km.prototype.render = o0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Om(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== tn) {
          var i = wC(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      xp(e, t, null, null);
    }, km.prototype.unmount = o0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        tC() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Gl(function() {
          xp(null, e, null, null);
        }), $0(t);
      }
    };
    function MD(e, t) {
      if (!Om(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      YC(e);
      var a = !1, i = !1, u = "", s = $C;
      t != null && (t.hydrate ? xe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ai && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = TC(e, xh, null, a, i, u, s);
      yh(f.current, e);
      var p = e.nodeType === tn ? e.parentNode : e;
      return Od(p), new o0(f);
    }
    function km(e) {
      this._internalRoot = e;
    }
    function LD(e) {
      e && cy(e);
    }
    km.prototype.unstable_scheduleHydration = LD;
    function ND(e, t, a) {
      if (!Om(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      YC(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = $C;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = RC(t, null, e, xh, i, s, f, p, v);
      if (yh(m.current, e), Od(e), u)
        for (var y = 0; y < u.length; y++) {
          var x = u[y];
          Fx(m, x);
        }
      return new km(m);
    }
    function Om(e) {
      return !!(e && (e.nodeType === vr || e.nodeType === Oa || e.nodeType === hl || !ot));
    }
    function wp(e) {
      return !!(e && (e.nodeType === vr || e.nodeType === Oa || e.nodeType === hl || e.nodeType === tn && e.nodeValue === " react-mount-point-unstable "));
    }
    function YC(e) {
      e.nodeType === vr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Vd(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var zD = w.ReactCurrentOwner, IC;
    IC = function(e) {
      if (e._reactRootContainer && e.nodeType !== tn) {
        var t = wC(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = s0(e), u = !!(i && Yu(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === vr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function s0(e) {
      return e ? e.nodeType === Oa ? e.documentElement : e.firstChild : null;
    }
    function QC() {
    }
    function UD(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var T = bm(f);
            s.call(T);
          };
        }
        var f = RC(
          t,
          i,
          e,
          Qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QC
        );
        e._reactRootContainer = f, yh(f.current, e);
        var p = e.nodeType === tn ? e.parentNode : e;
        return Od(p), Gl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var T = bm(y);
            m.call(T);
          };
        }
        var y = TC(
          e,
          Qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QC
        );
        e._reactRootContainer = y, yh(y.current, e);
        var x = e.nodeType === tn ? e.parentNode : e;
        return Od(x), Gl(function() {
          xp(t, y, a, i);
        }), y;
      }
    }
    function AD(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Mm(e, t, a, i, u) {
      IC(a), AD(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = UD(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = bm(f);
            p.call(v);
          };
        }
        xp(t, f, e, u);
      }
      return bm(f);
    }
    var WC = !1;
    function FD(e) {
      {
        WC || (WC = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = zD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", mt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === vr ? e : CD(e, "findDOMNode");
    }
    function HD(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Vd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Mm(null, e, t, !0, a);
    }
    function jD(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Vd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Mm(null, e, t, !1, a);
    }
    function BD(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ko(e))
        throw new Error("parentComponent must be a valid React Component");
      return Mm(e, t, a, !1, i);
    }
    var GC = !1;
    function VD(e) {
      if (GC || (GC = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !wp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Vd(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = s0(e), i = a && !Yu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Gl(function() {
          Mm(null, null, e, !1, function() {
            e._reactRootContainer = null, $0(e);
          });
        }), !0;
      } else {
        {
          var u = s0(e), s = !!(u && Yu(u)), f = e.nodeType === vr && wp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ou(TD), oy(RD), Cc(xD), jv(ca), Bv(Xn), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), hv($T), Hs(BS, N_, Gl);
    function PD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Om(t))
        throw new Error("Target container is not a DOM element.");
      return ED(e, t, null, a);
    }
    function $D(e, t, a, i) {
      return BD(e, t, a, i);
    }
    var c0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Yu, Yc, gh, Fs, _o, BS]
    };
    function YD(e, t) {
      return c0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), MD(e, t);
    }
    function ID(e, t, a) {
      return c0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ND(e, t, a);
    }
    function QD(e) {
      return tC() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Gl(e);
    }
    var WD = OD({
      findFiberByHostInstance: ns,
      bundleType: 1,
      version: r0,
      rendererPackageName: "react-dom"
    });
    if (!WD && hn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qC = window.location.protocol;
      /^(https?|file):$/.test(qC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0, Ca.createPortal = PD, Ca.createRoot = YD, Ca.findDOMNode = FD, Ca.flushSync = QD, Ca.hydrate = HD, Ca.hydrateRoot = ID, Ca.render = jD, Ca.unmountComponentAtNode = VD, Ca.unstable_batchedUpdates = BS, Ca.unstable_renderSubtreeIntoContainer = $D, Ca.version = r0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ca;
}
function lT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lT);
    } catch (B) {
      console.error(B);
    }
  }
}
process.env.NODE_ENV === "production" ? (lT(), v0.exports = Cb()) : v0.exports = Tb();
var uT = v0.exports;
const rT = {
  center: {
    enter: `${Gr.modal} ${Gr.modalEnter}`,
    exit: `${Gr.modal} ${Gr.modalExit}`
  },
  bottom: {
    enter: `${Gr.modalBottom} ${Gr.modalBottomEnter}`,
    exit: `${Gr.modalBottom} ${Gr.modalBottomExit}`
  }
}, Rb = ({ isAnimation: B, isOpen: Y, position: w, delay: De }) => {
  const [Ne, xe] = KD(!1), g = ZD(), tt = Y ? rT[w].enter : rT[w].exit;
  return JD(() => {
    if (!B) {
      xe(Y);
      return;
    }
    return Y ? xe(!0) : !Y && Ne && (g.current = setTimeout(() => {
      xe(!1);
    }, De)), () => {
      clearTimeout(g.current);
    };
  }, [B, Y, Ne, De]), { mounted: Ne, modalAnimationClass: tt };
}, xb = "_dimmed_21fx6_1", wb = {
  dimmed: xb
}, _b = ({ onDimmedClick: B, style: Y, ...w }) => uT.createPortal(
  /* @__PURE__ */ Be.jsx("div", { className: wb.dimmed, style: Y, onClick: B, ...w }),
  document.body
), Db = "_modalHeader_1m1z4_1", bb = {
  modalHeader: Db
}, kb = ({ style: B, children: Y, ...w }) => /* @__PURE__ */ Be.jsx("header", { className: bb.modalHeader, style: B, ...w, children: Y }), Ob = "_title_jysup_1", Mb = {
  title: Ob
}, Lb = ({ title: B }) => /* @__PURE__ */ Be.jsx("span", { className: Mb.title, children: B && B }), Nb = "_closeButton_xu7h7_1", zb = {
  closeButton: Nb
}, aT = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2729_1438)'%3e%3cpath%20d='M19.8167%206.41L18.4067%205L12.8167%2010.59L7.22665%205L5.81665%206.41L11.4067%2012L5.81665%2017.59L7.22665%2019L12.8167%2013.41L18.4067%2019L19.8167%2017.59L14.2267%2012L19.8167%206.41Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2729_1438'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.81665)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Ub = ({
  onClose: B,
  showCloseIcon: Y = !0,
  customCloseIcon: w
}) => {
  const De = (Ne) => {
    Ne.currentTarget.src = aT;
  };
  return /* @__PURE__ */ Be.jsx(Be.Fragment, { children: Y && /* @__PURE__ */ Be.jsx(
    "img",
    {
      src: w ?? aT,
      alt: "close",
      className: zb.closeButton,
      onClick: B,
      onError: De
    }
  ) });
}, Ab = "_content_oq6f1_1", Fb = {
  content: Ab
}, Hb = ({ style: B, children: Y, ...w }) => Y ? /* @__PURE__ */ Be.jsx("section", { className: Fb.content, style: B, ...w, children: Y }) : null, jb = "_closeButton_12g5j_1", Bb = "_small_12g5j_8", Vb = "_medium_12g5j_12", Pb = "_large_12g5j_16", zm = {
  closeButton: jb,
  small: Bb,
  medium: Vb,
  large: Pb
}, $b = {
  small: zm.small,
  medium: zm.medium,
  large: zm.large
}, Yb = ({
  label: B,
  onClose: Y,
  size: w,
  style: De,
  ...Ne
}) => {
  const xe = w ? $b[w] : "";
  return /* @__PURE__ */ Be.jsx(
    "button",
    {
      className: `${zm.closeButton} ${xe}`,
      style: De,
      onClick: Y,
      ...Ne,
      children: B
    }
  );
}, Ib = "_confirmButton_c7ziy_1", Qb = "_small_c7ziy_8", Wb = "_medium_c7ziy_12", Gb = "_large_c7ziy_16", Um = {
  confirmButton: Ib,
  small: Qb,
  medium: Wb,
  large: Gb
}, qb = {
  small: Um.small,
  medium: Um.medium,
  large: Um.large
}, Xb = ({
  label: B,
  onConfirm: Y,
  size: w,
  style: De,
  ...Ne
}) => {
  const xe = w ? qb[w] : "";
  return /* @__PURE__ */ Be.jsx(
    "button",
    {
      className: `${Um.confirmButton} ${xe}`,
      style: De,
      onClick: Y,
      ...Ne,
      children: B
    }
  );
}, Kb = "_row_hr5wl_1", Zb = "_rowReverse_hr5wl_9", Jb = "_column_hr5wl_18", ek = "_columnReverse_hr5wl_27", Nm = {
  row: Kb,
  rowReverse: Zb,
  column: Jb,
  columnReverse: ek
}, tk = {
  row: Nm.row,
  "row-reverse": Nm.rowReverse,
  column: Nm.column,
  "column-reverse": Nm.columnReverse
}, nk = ({
  position: B = "column",
  justifyContent: Y,
  alignItems: w,
  children: De,
  ...Ne
}) => {
  const xe = Y || "space-between", g = w || "center";
  return /* @__PURE__ */ Be.jsx(
    "footer",
    {
      className: tk[B],
      style: { justifyContent: xe, alignItems: g },
      ...Ne,
      children: De
    }
  );
}, rk = {
  center: Gr.modalWrapper,
  bottom: Gr.modalBottomWrapper
}, ak = {
  center: Gr.modal,
  bottom: Gr.modalBottom
}, ik = {
  small: Gr.small,
  medium: Gr.medium,
  large: Gr.large
}, lk = ({
  isOpen: B,
  size: Y,
  position: w = "center",
  isAnimation: De = !1,
  animationDuration: Ne,
  style: xe,
  children: g,
  ...tt
}) => {
  const { mounted: ie, modalAnimationClass: re } = Rb({
    isAnimation: De,
    isOpen: B,
    position: w,
    delay: Ne
  }), Ve = De ? re : ak[w], X = rk[w], ue = Y ? ik[Y] : "";
  return ie ? /* @__PURE__ */ Be.jsx(Be.Fragment, { children: uT.createPortal(
    /* @__PURE__ */ Be.jsx("div", { className: `${X} ${ue}`, style: xe, children: /* @__PURE__ */ Be.jsx(
      "div",
      {
        className: Ve,
        style: { animationDuration: `${Ne}ms` },
        ...tt,
        children: g
      }
    ) }),
    document.body
  ) }) : null;
}, At = Object.assign(lk, {
  Dimmed: _b,
  Header: kb,
  Title: Lb,
  CloseIcon: Ub,
  Content: Hb,
  CloseButton: Yb,
  ConfirmButton: Xb,
  Footer: nk
}), vk = ({
  isOpen: B,
  onCloseIcon: Y,
  onConfirmButton: w,
  onDimmedClick: De,
  position: Ne = "center",
  modalSize: xe,
  content: g,
  isAnimation: tt = !1,
  animationDuration: ie,
  title: re,
  showCloseIcon: Ve = !0,
  buttonLabel: X = "확인"
}) => {
  const ue = () => {
    De && De();
  }, ae = () => {
    Y && Y();
  }, Oe = () => {
    w && w();
  };
  return /* @__PURE__ */ Be.jsxs(
    At,
    {
      isOpen: B,
      position: Ne,
      size: xe,
      isAnimation: tt,
      animationDuration: ie,
      children: [
        /* @__PURE__ */ Be.jsx(At.Dimmed, { onDimmedClick: ue }),
        /* @__PURE__ */ Be.jsxs(At.Header, { children: [
          /* @__PURE__ */ Be.jsx(At.Title, { title: re }),
          /* @__PURE__ */ Be.jsx(At.CloseIcon, { onClose: ae, showCloseIcon: Ve })
        ] }),
        g && /* @__PURE__ */ Be.jsx(At.Content, { children: g }),
        /* @__PURE__ */ Be.jsx(At.Footer, { position: "row", justifyContent: "flex-end", children: /* @__PURE__ */ Be.jsx(At.ConfirmButton, { size: "small", label: X, onConfirm: Oe }) })
      ]
    }
  );
}, hk = ({
  isOpen: B,
  onCloseIcon: Y,
  onCloseButton: w,
  onConfirmButton: De,
  onDimmedClick: Ne,
  position: xe = "center",
  modalSize: g,
  content: tt,
  isAnimation: ie = !1,
  animationDuration: re,
  title: Ve,
  showCloseIcon: X = !0,
  closeButtonLabel: ue = "취소",
  confirmButtonLabel: ae = "확인"
}) => {
  const Oe = () => {
    Ne && Ne();
  }, nt = () => {
    Y && Y();
  }, ut = () => {
    De && De();
  }, Pt = () => {
    w && w();
  };
  return /* @__PURE__ */ Be.jsxs(
    At,
    {
      isOpen: B,
      position: xe,
      size: g,
      isAnimation: ie,
      animationDuration: re,
      children: [
        /* @__PURE__ */ Be.jsx(At.Dimmed, { onDimmedClick: Oe }),
        /* @__PURE__ */ Be.jsxs(At.Header, { children: [
          /* @__PURE__ */ Be.jsx(At.Title, { title: Ve }),
          /* @__PURE__ */ Be.jsx(At.CloseIcon, { onClose: nt, showCloseIcon: X })
        ] }),
        tt && /* @__PURE__ */ Be.jsx(At.Content, { children: tt }),
        /* @__PURE__ */ Be.jsxs(At.Footer, { position: "row", justifyContent: "flex-end", children: [
          /* @__PURE__ */ Be.jsx(At.CloseButton, { size: "small", label: ue, onClose: Pt }),
          /* @__PURE__ */ Be.jsx(
            At.ConfirmButton,
            {
              size: "small",
              label: ae,
              onConfirm: ut
            }
          )
        ] })
      ]
    }
  );
}, mk = ({
  isOpen: B,
  onCloseIcon: Y,
  onCloseButton: w,
  onConfirmButton: De,
  onDimmedClick: Ne,
  position: xe = "center",
  modalSize: g,
  content: tt,
  isAnimation: ie = !1,
  animationDuration: re,
  title: Ve,
  showCloseIcon: X = !0,
  closeButtonLabel: ue = "취소",
  confirmButtonLabel: ae = "확인",
  value: Oe,
  onChange: nt,
  placeholder: ut = "입력해주세요"
}) => {
  const Pt = () => {
    Ne && Ne();
  }, Ke = () => {
    Y && Y();
  }, He = () => {
    De && De();
  }, pt = () => {
    w && w();
  };
  return /* @__PURE__ */ Be.jsxs(
    At,
    {
      isOpen: B,
      position: xe,
      size: g,
      isAnimation: ie,
      animationDuration: re,
      children: [
        /* @__PURE__ */ Be.jsx(At.Dimmed, { onDimmedClick: Pt }),
        /* @__PURE__ */ Be.jsxs(At.Header, { children: [
          /* @__PURE__ */ Be.jsx(At.Title, { title: Ve }),
          /* @__PURE__ */ Be.jsx(At.CloseIcon, { onClose: Ke, showCloseIcon: X })
        ] }),
        tt && /* @__PURE__ */ Be.jsx(At.Content, { children: /* @__PURE__ */ Be.jsx(sk, { value: Oe, onChange: nt, placeholder: ut, autoFocus: !0 }) }),
        /* @__PURE__ */ Be.jsxs(At.Footer, { position: "row", justifyContent: "flex-end", children: [
          /* @__PURE__ */ Be.jsx(At.CloseButton, { size: "small", label: ue, onClose: pt }),
          /* @__PURE__ */ Be.jsx(
            At.ConfirmButton,
            {
              size: "small",
              label: ae,
              onConfirm: He
            }
          )
        ] })
      ]
    }
  );
}, uk = "_input_fcje0_1", ok = {
  input: uk
}, sk = ({ value: B, onChange: Y, ...w }) => /* @__PURE__ */ Be.jsx("input", { className: ok.input, value: B, onChange: Y, ...w });
export {
  vk as AlertModal,
  hk as ConfirmModal,
  sk as Input,
  At as Modal,
  mk as PromptModal
};
