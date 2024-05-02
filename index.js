import * as $b from "react";
import { useRef as Qb, useEffect as Ib } from "react";
function Wb(J) {
  if (J.__esModule)
    return J;
  var xe = J.default;
  if (typeof xe == "function") {
    var M = function mt() {
      return this instanceof mt ? Reflect.construct(xe, arguments, this.constructor) : xe.apply(this, arguments);
    };
    M.prototype = xe.prototype;
  } else
    M = {};
  return Object.defineProperty(M, "__esModule", { value: !0 }), Object.keys(J).forEach(function(mt) {
    var Rt = Object.getOwnPropertyDescriptor(J, mt);
    Object.defineProperty(M, mt, Rt.get ? Rt : {
      enumerable: !0,
      get: function() {
        return J[mt];
      }
    });
  }), M;
}
var s0 = { exports: {} }, Dp = {};
const Mm = /* @__PURE__ */ Wb($b);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I1;
function Gb() {
  if (I1)
    return Dp;
  I1 = 1;
  var J = Mm, xe = Symbol.for("react.element"), M = Symbol.for("react.fragment"), mt = Object.prototype.hasOwnProperty, Rt = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(xt, se, ue) {
    var qe, q = {}, oe = null, re = null;
    ue !== void 0 && (oe = "" + ue), se.key !== void 0 && (oe = "" + se.key), se.ref !== void 0 && (re = se.ref);
    for (qe in se)
      mt.call(se, qe) && !Oe.hasOwnProperty(qe) && (q[qe] = se[qe]);
    if (xt && xt.defaultProps)
      for (qe in se = xt.defaultProps, se)
        q[qe] === void 0 && (q[qe] = se[qe]);
    return { $$typeof: xe, type: xt, key: oe, ref: re, props: q, _owner: Rt.current };
  }
  return Dp.Fragment = M, Dp.jsx = g, Dp.jsxs = g, Dp;
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
var W1;
function Xb() {
  return W1 || (W1 = 1, process.env.NODE_ENV !== "production" && function() {
    var J = Mm, xe = Symbol.for("react.element"), M = Symbol.for("react.portal"), mt = Symbol.for("react.fragment"), Rt = Symbol.for("react.strict_mode"), Oe = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), xt = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), Ue = Symbol.iterator, rt = "@@iterator";
    function Ze(E) {
      if (E === null || typeof E != "object")
        return null;
      var j = Ue && E[Ue] || E[rt];
      return typeof j == "function" ? j : null;
    }
    var qt = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ke(E) {
      {
        for (var j = arguments.length, $ = new Array(j > 1 ? j - 1 : 0), he = 1; he < j; he++)
          $[he - 1] = arguments[he];
        Be("error", E, $);
      }
    }
    function Be(E, j, $) {
      {
        var he = qt.ReactDebugCurrentFrame, Ie = he.getStackAddendum();
        Ie !== "" && (j += "%s", $ = $.concat([Ie]));
        var Xe = $.map(function(Re) {
          return String(Re);
        });
        Xe.unshift("Warning: " + j), Function.prototype.apply.call(console[E], console, Xe);
      }
    }
    var yt = !1, Pe = !1, wt = !1, Ae = !1, Rn = !1, jn;
    jn = Symbol.for("react.module.reference");
    function Vt(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === mt || E === Oe || Rn || E === Rt || E === ue || E === qe || Ae || E === re || yt || Pe || wt || typeof E == "object" && E !== null && (E.$$typeof === oe || E.$$typeof === q || E.$$typeof === g || E.$$typeof === xt || E.$$typeof === se || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === jn || E.getModuleId !== void 0));
    }
    function dt(E, j, $) {
      var he = E.displayName;
      if (he)
        return he;
      var Ie = j.displayName || j.name || "";
      return Ie !== "" ? $ + "(" + Ie + ")" : $;
    }
    function xn(E) {
      return E.displayName || "Context";
    }
    function _e(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && Ke("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case mt:
          return "Fragment";
        case M:
          return "Portal";
        case Oe:
          return "Profiler";
        case Rt:
          return "StrictMode";
        case ue:
          return "Suspense";
        case qe:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case xt:
            var j = E;
            return xn(j) + ".Consumer";
          case g:
            var $ = E;
            return xn($._context) + ".Provider";
          case se:
            return dt(E, E.render, "ForwardRef");
          case q:
            var he = E.displayName || null;
            return he !== null ? he : _e(E.type) || "Memo";
          case oe: {
            var Ie = E, Xe = Ie._payload, Re = Ie._init;
            try {
              return _e(Re(Xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Qe = Object.assign, dn = 0, Dt, qn, Y, Ee, ee, Je, at;
    function wn() {
    }
    wn.__reactDisabledLog = !0;
    function Kn() {
      {
        if (dn === 0) {
          Dt = console.log, qn = console.info, Y = console.warn, Ee = console.error, ee = console.group, Je = console.groupCollapsed, at = console.groupEnd;
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
    function za() {
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
              value: Ee
            }),
            group: Qe({}, E, {
              value: ee
            }),
            groupCollapsed: Qe({}, E, {
              value: Je
            }),
            groupEnd: Qe({}, E, {
              value: at
            })
          });
        }
        dn < 0 && Ke("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var rn = qt.ReactCurrentDispatcher, Ir;
    function Vn(E, j, $) {
      {
        if (Ir === void 0)
          try {
            throw Error();
          } catch (Ie) {
            var he = Ie.stack.trim().match(/\n( *(at )?)/);
            Ir = he && he[1] || "";
          }
        return `
` + Ir + E;
      }
    }
    var or = !1, Ua;
    {
      var sr = typeof WeakMap == "function" ? WeakMap : Map;
      Ua = new sr();
    }
    function Wr(E, j) {
      if (!E || or)
        return "";
      {
        var $ = Ua.get(E);
        if ($ !== void 0)
          return $;
      }
      var he;
      or = !0;
      var Ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Xe;
      Xe = rn.current, rn.current = null, Kn();
      try {
        if (j) {
          var Re = function() {
            throw Error();
          };
          if (Object.defineProperty(Re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Re, []);
            } catch (Yn) {
              he = Yn;
            }
            Reflect.construct(E, [], Re);
          } else {
            try {
              Re.call();
            } catch (Yn) {
              he = Yn;
            }
            E.call(Re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Yn) {
            he = Yn;
          }
          E();
        }
      } catch (Yn) {
        if (Yn && he && typeof Yn.stack == "string") {
          for (var Fe = Yn.stack.split(`
`), hn = he.stack.split(`
`), bt = Fe.length - 1, At = hn.length - 1; bt >= 1 && At >= 0 && Fe[bt] !== hn[At]; )
            At--;
          for (; bt >= 1 && At >= 0; bt--, At--)
            if (Fe[bt] !== hn[At]) {
              if (bt !== 1 || At !== 1)
                do
                  if (bt--, At--, At < 0 || Fe[bt] !== hn[At]) {
                    var fr = `
` + Fe[bt].replace(" at new ", " at ");
                    return E.displayName && fr.includes("<anonymous>") && (fr = fr.replace("<anonymous>", E.displayName)), typeof E == "function" && Ua.set(E, fr), fr;
                  }
                while (bt >= 1 && At >= 0);
              break;
            }
        }
      } finally {
        or = !1, rn.current = Xe, za(), Error.prepareStackTrace = Ie;
      }
      var Li = E ? E.displayName || E.name : "", lt = Li ? Vn(Li) : "";
      return typeof E == "function" && Ua.set(E, lt), lt;
    }
    function pn(E, j, $) {
      return Wr(E, !1);
    }
    function Bn(E) {
      var j = E.prototype;
      return !!(j && j.isReactComponent);
    }
    function Dn(E, j, $) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return Wr(E, Bn(E));
      if (typeof E == "string")
        return Vn(E);
      switch (E) {
        case ue:
          return Vn("Suspense");
        case qe:
          return Vn("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case se:
            return pn(E.render);
          case q:
            return Dn(E.type, j, $);
          case oe: {
            var he = E, Ie = he._payload, Xe = he._init;
            try {
              return Dn(Xe(Ie), j, $);
            } catch {
            }
          }
        }
      return "";
    }
    var bn = Object.prototype.hasOwnProperty, Pn = {}, Gr = qt.ReactDebugCurrentFrame;
    function Sa(E) {
      if (E) {
        var j = E._owner, $ = Dn(E.type, E._source, j ? j.type : null);
        Gr.setExtraStackFrame($);
      } else
        Gr.setExtraStackFrame(null);
    }
    function ei(E, j, $, he, Ie) {
      {
        var Xe = Function.call.bind(bn);
        for (var Re in E)
          if (Xe(E, Re)) {
            var Fe = void 0;
            try {
              if (typeof E[Re] != "function") {
                var hn = Error((he || "React class") + ": " + $ + " type `" + Re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[Re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw hn.name = "Invariant Violation", hn;
              }
              Fe = E[Re](j, Re, he, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (bt) {
              Fe = bt;
            }
            Fe && !(Fe instanceof Error) && (Sa(Ie), Ke("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", $, Re, typeof Fe), Sa(null)), Fe instanceof Error && !(Fe.message in Pn) && (Pn[Fe.message] = !0, Sa(Ie), Ke("Failed %s type: %s", $, Fe.message), Sa(null));
          }
      }
    }
    var Aa = Array.isArray;
    function Ea(E) {
      return Aa(E);
    }
    function _r(E) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, $ = j && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return $;
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
    function Ca(E) {
      if (Ha(E))
        return Ke("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _r(E)), kr(E);
    }
    var Kt = qt.ReactCurrentOwner, Or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ki, Ta, W;
    W = {};
    function ye(E) {
      if (bn.call(E, "ref")) {
        var j = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function He(E) {
      if (bn.call(E, "key")) {
        var j = Object.getOwnPropertyDescriptor(E, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function st(E, j) {
      if (typeof E.ref == "string" && Kt.current && j && Kt.current.stateNode !== j) {
        var $ = _e(Kt.current.type);
        W[$] || (Ke('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _e(Kt.current.type), E.ref), W[$] = !0);
      }
    }
    function Ut(E, j) {
      {
        var $ = function() {
          ki || (ki = !0, Ke("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        $.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: $,
          configurable: !0
        });
      }
    }
    function vn(E, j) {
      {
        var $ = function() {
          Ta || (Ta = !0, Ke("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        $.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: $,
          configurable: !0
        });
      }
    }
    var Qt = function(E, j, $, he, Ie, Xe, Re) {
      var Fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: xe,
        // Built-in properties that belong on the element
        type: E,
        key: j,
        ref: $,
        props: Re,
        // Record the component responsible for creating this element.
        _owner: Xe
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
        value: he
      }), Object.defineProperty(Fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.freeze && (Object.freeze(Fe.props), Object.freeze(Fe)), Fe;
    };
    function cr(E, j, $, he, Ie) {
      {
        var Xe, Re = {}, Fe = null, hn = null;
        $ !== void 0 && (Ca($), Fe = "" + $), He(j) && (Ca(j.key), Fe = "" + j.key), ye(j) && (hn = j.ref, st(j, Ie));
        for (Xe in j)
          bn.call(j, Xe) && !Or.hasOwnProperty(Xe) && (Re[Xe] = j[Xe]);
        if (E && E.defaultProps) {
          var bt = E.defaultProps;
          for (Xe in bt)
            Re[Xe] === void 0 && (Re[Xe] = bt[Xe]);
        }
        if (Fe || hn) {
          var At = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          Fe && Ut(Re, At), hn && vn(Re, At);
        }
        return Qt(E, Fe, hn, Ie, he, Kt.current, Re);
      }
    }
    var Et = qt.ReactCurrentOwner, Lr = qt.ReactDebugCurrentFrame;
    function gt(E) {
      if (E) {
        var j = E._owner, $ = Dn(E.type, E._source, j ? j.type : null);
        Lr.setExtraStackFrame($);
      } else
        Lr.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function ql(E) {
      return typeof E == "object" && E !== null && E.$$typeof === xe;
    }
    function ll() {
      {
        if (Et.current) {
          var E = _e(Et.current.type);
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
        var j = ll();
        if (!j) {
          var $ = typeof E == "string" ? E : E.displayName || E.name;
          $ && (j = `

Check the top-level render call using <` + $ + ">.");
        }
        return j;
      }
    }
    function ul(E, j) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var $ = ys(j);
        if (io[$])
          return;
        io[$] = !0;
        var he = "";
        E && E._owner && E._owner !== Et.current && (he = " It was passed a child from " + _e(E._owner.type) + "."), gt(E), Ke('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, he), gt(null);
      }
    }
    function Zl(E, j) {
      {
        if (typeof E != "object")
          return;
        if (Ea(E))
          for (var $ = 0; $ < E.length; $++) {
            var he = E[$];
            ql(he) && ul(he, j);
          }
        else if (ql(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var Ie = Ze(E);
          if (typeof Ie == "function" && Ie !== E.entries)
            for (var Xe = Ie.call(E), Re; !(Re = Xe.next()).done; )
              ql(Re.value) && ul(Re.value, j);
        }
      }
    }
    function ol(E) {
      {
        var j = E.type;
        if (j == null || typeof j == "string")
          return;
        var $;
        if (typeof j == "function")
          $ = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === se || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === q))
          $ = j.propTypes;
        else
          return;
        if ($) {
          var he = _e(j);
          ei($, E.props, "prop", he, E);
        } else if (j.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var Ie = _e(j);
          Ke("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ie || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && Ke("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jl(E) {
      {
        for (var j = Object.keys(E.props), $ = 0; $ < j.length; $++) {
          var he = j[$];
          if (he !== "children" && he !== "key") {
            gt(E), Ke("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), gt(null);
            break;
          }
        }
        E.ref !== null && (gt(E), Ke("Invalid attribute `ref` supplied to `React.Fragment`."), gt(null));
      }
    }
    var Fa = {};
    function ti(E, j, $, he, Ie, Xe) {
      {
        var Re = Vt(E);
        if (!Re) {
          var Fe = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (Fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var hn = Kl();
          hn ? Fe += hn : Fe += ll();
          var bt;
          E === null ? bt = "null" : Ea(E) ? bt = "array" : E !== void 0 && E.$$typeof === xe ? (bt = "<" + (_e(E.type) || "Unknown") + " />", Fe = " Did you accidentally export a JSX literal instead of a component?") : bt = typeof E, Ke("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", bt, Fe);
        }
        var At = cr(E, j, $, Ie, Xe);
        if (At == null)
          return At;
        if (Re) {
          var fr = j.children;
          if (fr !== void 0)
            if (he)
              if (Ea(fr)) {
                for (var Li = 0; Li < fr.length; Li++)
                  Zl(fr[Li], E);
                Object.freeze && Object.freeze(fr);
              } else
                Ke("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zl(fr, E);
        }
        if (bn.call(j, "key")) {
          var lt = _e(E), Yn = Object.keys(j).filter(function(ja) {
            return ja !== "key";
          }), Nr = Yn.length > 0 ? "{key: someKey, " + Yn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fa[lt + Nr]) {
            var je = Yn.length > 0 ? "{" + Yn.join(": ..., ") + ": ...}" : "{}";
            Ke(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Nr, lt, je, lt), Fa[lt + Nr] = !0;
          }
        }
        return E === mt ? Jl(At) : ol(At), At;
      }
    }
    function Mr(E, j, $) {
      return ti(E, j, $, !0);
    }
    function Ra(E, j, $) {
      return ti(E, j, $, !1);
    }
    var Oi = Ra, sl = Mr;
    bp.Fragment = mt, bp.jsx = Oi, bp.jsxs = sl;
  }()), bp;
}
process.env.NODE_ENV === "production" ? s0.exports = Gb() : s0.exports = Xb();
var Xl = s0.exports, c0 = { exports: {} }, ya = {}, Lm = { exports: {} }, u0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G1;
function qb() {
  return G1 || (G1 = 1, function(J) {
    function xe(Y, Ee) {
      var ee = Y.length;
      Y.push(Ee);
      e:
        for (; 0 < ee; ) {
          var Je = ee - 1 >>> 1, at = Y[Je];
          if (0 < Rt(at, Ee))
            Y[Je] = Ee, Y[ee] = at, ee = Je;
          else
            break e;
        }
    }
    function M(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function mt(Y) {
      if (Y.length === 0)
        return null;
      var Ee = Y[0], ee = Y.pop();
      if (ee !== Ee) {
        Y[0] = ee;
        e:
          for (var Je = 0, at = Y.length, wn = at >>> 1; Je < wn; ) {
            var Kn = 2 * (Je + 1) - 1, za = Y[Kn], rn = Kn + 1, Ir = Y[rn];
            if (0 > Rt(za, ee))
              rn < at && 0 > Rt(Ir, za) ? (Y[Je] = Ir, Y[rn] = ee, Je = rn) : (Y[Je] = za, Y[Kn] = ee, Je = Kn);
            else if (rn < at && 0 > Rt(Ir, ee))
              Y[Je] = Ir, Y[rn] = ee, Je = rn;
            else
              break e;
          }
      }
      return Ee;
    }
    function Rt(Y, Ee) {
      var ee = Y.sortIndex - Ee.sortIndex;
      return ee !== 0 ? ee : Y.id - Ee.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Oe = performance;
      J.unstable_now = function() {
        return Oe.now();
      };
    } else {
      var g = Date, xt = g.now();
      J.unstable_now = function() {
        return g.now() - xt;
      };
    }
    var se = [], ue = [], qe = 1, q = null, oe = 3, re = !1, Ue = !1, rt = !1, Ze = typeof setTimeout == "function" ? setTimeout : null, qt = typeof clearTimeout == "function" ? clearTimeout : null, Ke = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Be(Y) {
      for (var Ee = M(ue); Ee !== null; ) {
        if (Ee.callback === null)
          mt(ue);
        else if (Ee.startTime <= Y)
          mt(ue), Ee.sortIndex = Ee.expirationTime, xe(se, Ee);
        else
          break;
        Ee = M(ue);
      }
    }
    function yt(Y) {
      if (rt = !1, Be(Y), !Ue)
        if (M(se) !== null)
          Ue = !0, Dt(Pe);
        else {
          var Ee = M(ue);
          Ee !== null && qn(yt, Ee.startTime - Y);
        }
    }
    function Pe(Y, Ee) {
      Ue = !1, rt && (rt = !1, qt(Rn), Rn = -1), re = !0;
      var ee = oe;
      try {
        for (Be(Ee), q = M(se); q !== null && (!(q.expirationTime > Ee) || Y && !dt()); ) {
          var Je = q.callback;
          if (typeof Je == "function") {
            q.callback = null, oe = q.priorityLevel;
            var at = Je(q.expirationTime <= Ee);
            Ee = J.unstable_now(), typeof at == "function" ? q.callback = at : q === M(se) && mt(se), Be(Ee);
          } else
            mt(se);
          q = M(se);
        }
        if (q !== null)
          var wn = !0;
        else {
          var Kn = M(ue);
          Kn !== null && qn(yt, Kn.startTime - Ee), wn = !1;
        }
        return wn;
      } finally {
        q = null, oe = ee, re = !1;
      }
    }
    var wt = !1, Ae = null, Rn = -1, jn = 5, Vt = -1;
    function dt() {
      return !(J.unstable_now() - Vt < jn);
    }
    function xn() {
      if (Ae !== null) {
        var Y = J.unstable_now();
        Vt = Y;
        var Ee = !0;
        try {
          Ee = Ae(!0, Y);
        } finally {
          Ee ? _e() : (wt = !1, Ae = null);
        }
      } else
        wt = !1;
    }
    var _e;
    if (typeof Ke == "function")
      _e = function() {
        Ke(xn);
      };
    else if (typeof MessageChannel < "u") {
      var Qe = new MessageChannel(), dn = Qe.port2;
      Qe.port1.onmessage = xn, _e = function() {
        dn.postMessage(null);
      };
    } else
      _e = function() {
        Ze(xn, 0);
      };
    function Dt(Y) {
      Ae = Y, wt || (wt = !0, _e());
    }
    function qn(Y, Ee) {
      Rn = Ze(function() {
        Y(J.unstable_now());
      }, Ee);
    }
    J.unstable_IdlePriority = 5, J.unstable_ImmediatePriority = 1, J.unstable_LowPriority = 4, J.unstable_NormalPriority = 3, J.unstable_Profiling = null, J.unstable_UserBlockingPriority = 2, J.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, J.unstable_continueExecution = function() {
      Ue || re || (Ue = !0, Dt(Pe));
    }, J.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : jn = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, J.unstable_getCurrentPriorityLevel = function() {
      return oe;
    }, J.unstable_getFirstCallbackNode = function() {
      return M(se);
    }, J.unstable_next = function(Y) {
      switch (oe) {
        case 1:
        case 2:
        case 3:
          var Ee = 3;
          break;
        default:
          Ee = oe;
      }
      var ee = oe;
      oe = Ee;
      try {
        return Y();
      } finally {
        oe = ee;
      }
    }, J.unstable_pauseExecution = function() {
    }, J.unstable_requestPaint = function() {
    }, J.unstable_runWithPriority = function(Y, Ee) {
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
      var ee = oe;
      oe = Y;
      try {
        return Ee();
      } finally {
        oe = ee;
      }
    }, J.unstable_scheduleCallback = function(Y, Ee, ee) {
      var Je = J.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? Je + ee : Je) : ee = Je, Y) {
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
      return at = ee + at, Y = { id: qe++, callback: Ee, priorityLevel: Y, startTime: ee, expirationTime: at, sortIndex: -1 }, ee > Je ? (Y.sortIndex = ee, xe(ue, Y), M(se) === null && Y === M(ue) && (rt ? (qt(Rn), Rn = -1) : rt = !0, qn(yt, ee - Je))) : (Y.sortIndex = at, xe(se, Y), Ue || re || (Ue = !0, Dt(Pe))), Y;
    }, J.unstable_shouldYield = dt, J.unstable_wrapCallback = function(Y) {
      var Ee = oe;
      return function() {
        var ee = oe;
        oe = Ee;
        try {
          return Y.apply(this, arguments);
        } finally {
          oe = ee;
        }
      };
    };
  }(u0)), u0;
}
var o0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X1;
function Kb() {
  return X1 || (X1 = 1, function(J) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var xe = !1, M = !1, mt = 5;
      function Rt(W, ye) {
        var He = W.length;
        W.push(ye), xt(W, ye, He);
      }
      function Oe(W) {
        return W.length === 0 ? null : W[0];
      }
      function g(W) {
        if (W.length === 0)
          return null;
        var ye = W[0], He = W.pop();
        return He !== ye && (W[0] = He, se(W, He, 0)), ye;
      }
      function xt(W, ye, He) {
        for (var st = He; st > 0; ) {
          var Ut = st - 1 >>> 1, vn = W[Ut];
          if (ue(vn, ye) > 0)
            W[Ut] = ye, W[st] = vn, st = Ut;
          else
            return;
        }
      }
      function se(W, ye, He) {
        for (var st = He, Ut = W.length, vn = Ut >>> 1; st < vn; ) {
          var Qt = (st + 1) * 2 - 1, cr = W[Qt], Et = Qt + 1, Lr = W[Et];
          if (ue(cr, ye) < 0)
            Et < Ut && ue(Lr, cr) < 0 ? (W[st] = Lr, W[Et] = ye, st = Et) : (W[st] = cr, W[Qt] = ye, st = Qt);
          else if (Et < Ut && ue(Lr, ye) < 0)
            W[st] = Lr, W[Et] = ye, st = Et;
          else
            return;
        }
      }
      function ue(W, ye) {
        var He = W.sortIndex - ye.sortIndex;
        return He !== 0 ? He : W.id - ye.id;
      }
      var qe = 1, q = 2, oe = 3, re = 4, Ue = 5;
      function rt(W, ye) {
      }
      var Ze = typeof performance == "object" && typeof performance.now == "function";
      if (Ze) {
        var qt = performance;
        J.unstable_now = function() {
          return qt.now();
        };
      } else {
        var Ke = Date, Be = Ke.now();
        J.unstable_now = function() {
          return Ke.now() - Be;
        };
      }
      var yt = 1073741823, Pe = -1, wt = 250, Ae = 5e3, Rn = 1e4, jn = yt, Vt = [], dt = [], xn = 1, _e = null, Qe = oe, dn = !1, Dt = !1, qn = !1, Y = typeof setTimeout == "function" ? setTimeout : null, Ee = typeof clearTimeout == "function" ? clearTimeout : null, ee = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Je(W) {
        for (var ye = Oe(dt); ye !== null; ) {
          if (ye.callback === null)
            g(dt);
          else if (ye.startTime <= W)
            g(dt), ye.sortIndex = ye.expirationTime, Rt(Vt, ye);
          else
            return;
          ye = Oe(dt);
        }
      }
      function at(W) {
        if (qn = !1, Je(W), !Dt)
          if (Oe(Vt) !== null)
            Dt = !0, Ca(wn);
          else {
            var ye = Oe(dt);
            ye !== null && Kt(at, ye.startTime - W);
          }
      }
      function wn(W, ye) {
        Dt = !1, qn && (qn = !1, Or()), dn = !0;
        var He = Qe;
        try {
          var st;
          if (!M)
            return Kn(W, ye);
        } finally {
          _e = null, Qe = He, dn = !1;
        }
      }
      function Kn(W, ye) {
        var He = ye;
        for (Je(He), _e = Oe(Vt); _e !== null && !xe && !(_e.expirationTime > He && (!W || Sa())); ) {
          var st = _e.callback;
          if (typeof st == "function") {
            _e.callback = null, Qe = _e.priorityLevel;
            var Ut = _e.expirationTime <= He, vn = st(Ut);
            He = J.unstable_now(), typeof vn == "function" ? _e.callback = vn : _e === Oe(Vt) && g(Vt), Je(He);
          } else
            g(Vt);
          _e = Oe(Vt);
        }
        if (_e !== null)
          return !0;
        var Qt = Oe(dt);
        return Qt !== null && Kt(at, Qt.startTime - He), !1;
      }
      function za(W, ye) {
        switch (W) {
          case qe:
          case q:
          case oe:
          case re:
          case Ue:
            break;
          default:
            W = oe;
        }
        var He = Qe;
        Qe = W;
        try {
          return ye();
        } finally {
          Qe = He;
        }
      }
      function rn(W) {
        var ye;
        switch (Qe) {
          case qe:
          case q:
          case oe:
            ye = oe;
            break;
          default:
            ye = Qe;
            break;
        }
        var He = Qe;
        Qe = ye;
        try {
          return W();
        } finally {
          Qe = He;
        }
      }
      function Ir(W) {
        var ye = Qe;
        return function() {
          var He = Qe;
          Qe = ye;
          try {
            return W.apply(this, arguments);
          } finally {
            Qe = He;
          }
        };
      }
      function Vn(W, ye, He) {
        var st = J.unstable_now(), Ut;
        if (typeof He == "object" && He !== null) {
          var vn = He.delay;
          typeof vn == "number" && vn > 0 ? Ut = st + vn : Ut = st;
        } else
          Ut = st;
        var Qt;
        switch (W) {
          case qe:
            Qt = Pe;
            break;
          case q:
            Qt = wt;
            break;
          case Ue:
            Qt = jn;
            break;
          case re:
            Qt = Rn;
            break;
          case oe:
          default:
            Qt = Ae;
            break;
        }
        var cr = Ut + Qt, Et = {
          id: xn++,
          callback: ye,
          priorityLevel: W,
          startTime: Ut,
          expirationTime: cr,
          sortIndex: -1
        };
        return Ut > st ? (Et.sortIndex = Ut, Rt(dt, Et), Oe(Vt) === null && Et === Oe(dt) && (qn ? Or() : qn = !0, Kt(at, Ut - st))) : (Et.sortIndex = cr, Rt(Vt, Et), !Dt && !dn && (Dt = !0, Ca(wn))), Et;
      }
      function or() {
      }
      function Ua() {
        !Dt && !dn && (Dt = !0, Ca(wn));
      }
      function sr() {
        return Oe(Vt);
      }
      function Wr(W) {
        W.callback = null;
      }
      function pn() {
        return Qe;
      }
      var Bn = !1, Dn = null, bn = -1, Pn = mt, Gr = -1;
      function Sa() {
        var W = J.unstable_now() - Gr;
        return !(W < Pn);
      }
      function ei() {
      }
      function Aa(W) {
        if (W < 0 || W > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        W > 0 ? Pn = Math.floor(1e3 / W) : Pn = mt;
      }
      var Ea = function() {
        if (Dn !== null) {
          var W = J.unstable_now();
          Gr = W;
          var ye = !0, He = !0;
          try {
            He = Dn(ye, W);
          } finally {
            He ? _r() : (Bn = !1, Dn = null);
          }
        } else
          Bn = !1;
      }, _r;
      if (typeof ee == "function")
        _r = function() {
          ee(Ea);
        };
      else if (typeof MessageChannel < "u") {
        var Ha = new MessageChannel(), kr = Ha.port2;
        Ha.port1.onmessage = Ea, _r = function() {
          kr.postMessage(null);
        };
      } else
        _r = function() {
          Y(Ea, 0);
        };
      function Ca(W) {
        Dn = W, Bn || (Bn = !0, _r());
      }
      function Kt(W, ye) {
        bn = Y(function() {
          W(J.unstable_now());
        }, ye);
      }
      function Or() {
        Ee(bn), bn = -1;
      }
      var ki = ei, Ta = null;
      J.unstable_IdlePriority = Ue, J.unstable_ImmediatePriority = qe, J.unstable_LowPriority = re, J.unstable_NormalPriority = oe, J.unstable_Profiling = Ta, J.unstable_UserBlockingPriority = q, J.unstable_cancelCallback = Wr, J.unstable_continueExecution = Ua, J.unstable_forceFrameRate = Aa, J.unstable_getCurrentPriorityLevel = pn, J.unstable_getFirstCallbackNode = sr, J.unstable_next = rn, J.unstable_pauseExecution = or, J.unstable_requestPaint = ki, J.unstable_runWithPriority = za, J.unstable_scheduleCallback = Vn, J.unstable_shouldYield = Sa, J.unstable_wrapCallback = Ir, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(o0)), o0;
}
var q1;
function eT() {
  return q1 || (q1 = 1, process.env.NODE_ENV === "production" ? Lm.exports = qb() : Lm.exports = Kb()), Lm.exports;
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
var K1;
function Zb() {
  if (K1)
    return ya;
  K1 = 1;
  var J = Mm, xe = eT();
  function M(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var mt = /* @__PURE__ */ new Set(), Rt = {};
  function Oe(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (Rt[n] = r, n = 0; n < r.length; n++)
      mt.add(r[n]);
  }
  var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), se = Object.prototype.hasOwnProperty, ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, qe = {}, q = {};
  function oe(n) {
    return se.call(q, n) ? !0 : se.call(qe, n) ? !1 : ue.test(n) ? q[n] = !0 : (qe[n] = !0, !1);
  }
  function re(n, r, l, o) {
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
    if (r === null || typeof r > "u" || re(n, r, l, o))
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
  function rt(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var Ze = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ze[n] = new rt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ze[r] = new rt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ze[n] = new rt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ze[n] = new rt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ze[n] = new rt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ze[n] = new rt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ze[n] = new rt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ze[n] = new rt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ze[n] = new rt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var qt = /[\-:]([a-z])/g;
  function Ke(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      qt,
      Ke
    );
    Ze[r] = new rt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(qt, Ke);
    Ze[r] = new rt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(qt, Ke);
    Ze[r] = new rt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ze[n] = new rt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ze.xlinkHref = new rt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ze[n] = new rt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Be(n, r, l, o) {
    var c = Ze.hasOwnProperty(r) ? Ze[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ue(r, l, c, o) && (l = null), o || c === null ? oe(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var yt = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Pe = Symbol.for("react.element"), wt = Symbol.for("react.portal"), Ae = Symbol.for("react.fragment"), Rn = Symbol.for("react.strict_mode"), jn = Symbol.for("react.profiler"), Vt = Symbol.for("react.provider"), dt = Symbol.for("react.context"), xn = Symbol.for("react.forward_ref"), _e = Symbol.for("react.suspense"), Qe = Symbol.for("react.suspense_list"), dn = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), qn = Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function Ee(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ee = Object.assign, Je;
  function at(n) {
    if (Je === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        Je = r && r[1] || "";
      }
    return `
` + Je + n;
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
          } catch (O) {
            var o = O;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (O) {
            o = O;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (O) {
          o = O;
        }
        n();
      }
    } catch (O) {
      if (O && o && typeof O.stack == "string") {
        for (var c = O.stack.split(`
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
  function za(n) {
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
  function rn(n) {
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
      case _e:
        return "Suspense";
      case Qe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case dt:
          return (n.displayName || "Context") + ".Consumer";
        case Vt:
          return (n._context.displayName || "Context") + ".Provider";
        case xn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case dn:
          return r = n.displayName || null, r !== null ? r : rn(n.type) || "Memo";
        case Dt:
          r = n._payload, n = n._init;
          try {
            return rn(n(r));
          } catch {
          }
      }
    return null;
  }
  function Ir(n) {
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
        return rn(r);
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
  function Ua(n) {
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
    n._valueTracker || (n._valueTracker = Ua(n));
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
  function bn(n, r) {
    r = r.checked, r != null && Be(n, "checked", r, !1);
  }
  function Pn(n, r) {
    bn(n, r);
    var l = Vn(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Sa(n, r.type, l) : r.hasOwnProperty("defaultValue") && Sa(n, r.type, Vn(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
  function Sa(n, r, l) {
    (r !== "number" || pn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ei = Array.isArray;
  function Aa(n, r, l, o) {
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
  function Ea(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(M(91));
    return ee({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function _r(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(M(92));
        if (ei(l)) {
          if (1 < l.length)
            throw Error(M(93));
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
  function Ca(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Kt(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ca(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Or, ki = function(n) {
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
  function Ta(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var W = {
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
  }, ye = ["Webkit", "ms", "Moz", "O"];
  Object.keys(W).forEach(function(n) {
    ye.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), W[r] = W[n];
    });
  });
  function He(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || W.hasOwnProperty(n) && W[n] ? ("" + r).trim() : r + "px";
  }
  function st(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = He(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Ut = ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function vn(n, r) {
    if (r) {
      if (Ut[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(M(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(M(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(M(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(M(62));
    }
  }
  function Qt(n, r) {
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
  function Et(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Lr = null, gt = null, Ct = null;
  function ql(n) {
    if (n = _o(n)) {
      if (typeof Lr != "function")
        throw Error(M(280));
      var r = n.stateNode;
      r && (r = ge(r), Lr(n.stateNode, n.type, r));
    }
  }
  function ll(n) {
    gt ? Ct ? Ct.push(n) : Ct = [n] : gt = n;
  }
  function Kl() {
    if (gt) {
      var n = gt, r = Ct;
      if (Ct = gt = null, ql(n), r)
        for (n = 0; n < r.length; n++)
          ql(r[n]);
    }
  }
  function io(n, r) {
    return n(r);
  }
  function ys() {
  }
  var ul = !1;
  function Zl(n, r, l) {
    if (ul)
      return n(r, l);
    ul = !0;
    try {
      return io(n, r, l);
    } finally {
      ul = !1, (gt !== null || Ct !== null) && (ys(), Kl());
    }
  }
  function ol(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = ge(l);
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
      throw Error(M(231, r, typeof l));
    return l;
  }
  var Jl = !1;
  if (xt)
    try {
      var Fa = {};
      Object.defineProperty(Fa, "passive", { get: function() {
        Jl = !0;
      } }), window.addEventListener("test", Fa, Fa), window.removeEventListener("test", Fa, Fa);
    } catch {
      Jl = !1;
    }
  function ti(n, r, l, o, c, d, h, S, C) {
    var O = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, O);
    } catch (F) {
      this.onError(F);
    }
  }
  var Mr = !1, Ra = null, Oi = !1, sl = null, E = { onError: function(n) {
    Mr = !0, Ra = n;
  } };
  function j(n, r, l, o, c, d, h, S, C) {
    Mr = !1, Ra = null, ti.apply(E, arguments);
  }
  function $(n, r, l, o, c, d, h, S, C) {
    if (j.apply(this, arguments), Mr) {
      if (Mr) {
        var O = Ra;
        Mr = !1, Ra = null;
      } else
        throw Error(M(198));
      Oi || (Oi = !0, sl = O);
    }
  }
  function he(n) {
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
  function Ie(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Xe(n) {
    if (he(n) !== n)
      throw Error(M(188));
  }
  function Re(n) {
    var r = n.alternate;
    if (!r) {
      if (r = he(n), r === null)
        throw Error(M(188));
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
            return Xe(c), n;
          if (d === o)
            return Xe(c), r;
          d = d.sibling;
        }
        throw Error(M(188));
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
            throw Error(M(189));
        }
      }
      if (l.alternate !== o)
        throw Error(M(190));
    }
    if (l.tag !== 3)
      throw Error(M(188));
    return l.stateNode.current === l ? n : r;
  }
  function Fe(n) {
    return n = Re(n), n !== null ? hn(n) : null;
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
  var bt = xe.unstable_scheduleCallback, At = xe.unstable_cancelCallback, fr = xe.unstable_shouldYield, Li = xe.unstable_requestPaint, lt = xe.unstable_now, Yn = xe.unstable_getCurrentPriorityLevel, Nr = xe.unstable_ImmediatePriority, je = xe.unstable_UserBlockingPriority, ja = xe.unstable_NormalPriority, _p = xe.unstable_LowPriority, hf = xe.unstable_IdlePriority, lo = null, xa = null;
  function kp(n) {
    if (xa && typeof xa.onCommitFiberRoot == "function")
      try {
        xa.onCommitFiberRoot(lo, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Xr = Math.clz32 ? Math.clz32 : Nm, Op = Math.log, Lp = Math.LN2;
  function Nm(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Op(n) / Lp | 0) | 0;
  }
  var gs = 64, eu = 4194304;
  function cl(n) {
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
  function wa(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var S = h & ~c;
      S !== 0 ? o = cl(S) : (d &= h, d !== 0 && (o = cl(d)));
    } else
      h = l & ~c, h !== 0 ? o = cl(h) : d !== 0 && (o = cl(d));
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
  function fl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Xr(r), n[r] = l;
  }
  function zm(n, r) {
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
  var ct = 0;
  function Sf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Mp, Cs, ft, Np, Ef, Me = !1, oo = [], Zt = null, qr = null, Kr = null, so = /* @__PURE__ */ new Map(), an = /* @__PURE__ */ new Map(), pt = [], Um = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Da(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Zt = null;
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
        an.delete(r.pointerId);
    }
  }
  function $n(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = _o(r), r !== null && Cs(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Mi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Zt = $n(Zt, n, r, l, o, c), !0;
      case "dragenter":
        return qr = $n(qr, n, r, l, o, c), !0;
      case "mouseover":
        return Kr = $n(Kr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return so.set(d, $n(so.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, an.set(d, $n(an.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function zp(n) {
    var r = Jr(n.target);
    if (r !== null) {
      var l = he(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ie(l), r !== null) {
            n.blockedOn = r, Ef(n.priority, function() {
              ft(l);
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
        return r = _o(l), r !== null && Cs(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Cf(n, r, l) {
    tu(n) && l.delete(r);
  }
  function Up() {
    Me = !1, Zt !== null && tu(Zt) && (Zt = null), qr !== null && tu(qr) && (qr = null), Kr !== null && tu(Kr) && (Kr = null), so.forEach(Cf), an.forEach(Cf);
  }
  function co(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Me || (Me = !0, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Up)));
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
    for (Zt !== null && co(Zt, n), qr !== null && co(qr, n), Kr !== null && co(Kr, n), so.forEach(r), an.forEach(r), l = 0; l < pt.length; l++)
      o = pt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < pt.length && (l = pt[0], l.blockedOn === null); )
      zp(l), l.blockedOn === null && pt.shift();
  }
  var nu = yt.ReactCurrentBatchConfig, dl = !0;
  function Ap(n, r, l, o) {
    var c = ct, d = nu.transition;
    nu.transition = null;
    try {
      ct = 1, Rs(n, r, l, o);
    } finally {
      ct = c, nu.transition = d;
    }
  }
  function Ts(n, r, l, o) {
    var c = ct, d = nu.transition;
    nu.transition = null;
    try {
      ct = 4, Rs(n, r, l, o);
    } finally {
      ct = c, nu.transition = d;
    }
  }
  function Rs(n, r, l, o) {
    if (dl) {
      var c = xs(n, r, l, o);
      if (c === null)
        As(n, r, o, po, l), Da(n, o);
      else if (Mi(c, n, r, l, o))
        o.stopPropagation();
      else if (Da(n, o), r & 4 && -1 < Um.indexOf(n)) {
        for (; c !== null; ) {
          var d = _o(c);
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
    if (po = null, n = Et(o), n = Jr(n), n !== null)
      if (r = he(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Ie(r), n !== null)
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
        switch (Yn()) {
          case Nr:
            return 1;
          case je:
            return 4;
          case ja:
          case _p:
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
  var ni = null, vo = null, ho = null;
  function Rf() {
    if (ho)
      return ho;
    var n, r = vo, l = r.length, o, c = "value" in ni ? ni.value : ni.textContent, d = c.length;
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
  function Hp() {
    return !1;
  }
  function zr(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n)
        n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? mo : Hp, this.isPropagationStopped = Hp, this;
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
  var Ni = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ws = zr(Ni), au = ee({}, Ni, { view: 0, detail: 0 }), Fp = zr(au), Ds, xf, yo, mn = ee({}, au, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _f, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== yo && (yo && n.type === "mousemove" ? (Ds = n.screenX - yo.screenX, xf = n.screenY - yo.screenY) : xf = Ds = 0, yo = n), Ds);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : xf;
  } }), bs = zr(mn), jp = ee({}, mn, { dataTransfer: 0 }), Vp = zr(jp), Am = ee({}, au, { relatedTarget: 0 }), zi = zr(Am), wf = ee({}, Ni, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Bp = zr(wf), Hm = ee({}, Ni, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Fm = zr(Hm), jm = ee({}, Ni, { data: 0 }), Df = zr(jm), bf = {
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
  }, Yp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $p(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Yp[n]) ? !!r[n] : !1;
  }
  function _f() {
    return $p;
  }
  var ri = ee({}, au, { key: function(n) {
    if (n.key) {
      var r = bf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = ru(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Pp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _f, charCode: function(n) {
    return n.type === "keypress" ? ru(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? ru(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Vm = zr(ri), kf = ee({}, mn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), _s = zr(kf), Of = ee({}, au, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _f }), Bm = zr(Of), ks = ee({}, Ni, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Qp = zr(ks), dr = ee({}, mn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ai = zr(dr), Jt = [9, 13, 27, 32], ba = xt && "CompositionEvent" in window, pl = null;
  xt && "documentMode" in document && (pl = document.documentMode);
  var Os = xt && "TextEvent" in window && !pl, Ip = xt && (!ba || pl && 8 < pl && 11 >= pl), iu = " ", Wp = !1;
  function Gp(n, r) {
    switch (n) {
      case "keyup":
        return Jt.indexOf(r.keyCode) !== -1;
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
  function Pm(n, r) {
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
      return n === "compositionend" || !ba && Gp(n, r) ? (n = Rf(), ho = vo = ni = null, lu = !1, n) : null;
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
        return Ip && r.locale !== "ko" ? null : r.data;
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
    ll(o), r = wo(r, "onChange"), 0 < r.length && (l = new ws("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
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
  if (xt) {
    var Mf;
    if (xt) {
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
      Kp(r, uu, n, Et(n)), Zl(ou, r);
    }
  }
  function $m(n, r, l) {
    n === "focusin" ? (ev(), go = r, uu = l, go.attachEvent("onpropertychange", tv)) : n === "focusout" && ev();
  }
  function Qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return su(uu);
  }
  function Im(n, r) {
    if (n === "click")
      return su(r);
  }
  function nv(n, r) {
    if (n === "input" || n === "change")
      return su(r);
  }
  function Wm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Zr = typeof Object.is == "function" ? Object.is : Wm;
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
      if (!se.call(r, c) || !Zr(n[c], r[c]))
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
  function ii(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Ns(n) {
    var r = Ms(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && iv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ii(l)) {
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
  var lv = xt && "documentMode" in document && 11 >= document.documentMode, _a = null, zf = null, Eo = null, Uf = !1;
  function uv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Uf || _a == null || _a !== pn(o) || (o = _a, "selectionStart" in o && ii(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Eo && So(Eo, o) || (Eo = o, o = wo(zf, "onSelect"), 0 < o.length && (r = new ws("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = _a)));
  }
  function zs(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var vl = { animationend: zs("Animation", "AnimationEnd"), animationiteration: zs("Animation", "AnimationIteration"), animationstart: zs("Animation", "AnimationStart"), transitionend: zs("Transition", "TransitionEnd") }, Af = {}, Hf = {};
  xt && (Hf = document.createElement("div").style, "AnimationEvent" in window || (delete vl.animationend.animation, delete vl.animationiteration.animation, delete vl.animationstart.animation), "TransitionEvent" in window || delete vl.transitionend.transition);
  function yn(n) {
    if (Af[n])
      return Af[n];
    if (!vl[n])
      return n;
    var r = vl[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Hf)
        return Af[n] = r[l];
    return n;
  }
  var Ff = yn("animationend"), ov = yn("animationiteration"), sv = yn("animationstart"), cv = yn("transitionend"), fv = /* @__PURE__ */ new Map(), dv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function li(n, r) {
    fv.set(n, r), Oe(r, [n]);
  }
  for (var Co = 0; Co < dv.length; Co++) {
    var hl = dv[Co], Gm = hl.toLowerCase(), To = hl[0].toUpperCase() + hl.slice(1);
    li(Gm, "on" + To);
  }
  li(Ff, "onAnimationEnd"), li(ov, "onAnimationIteration"), li(sv, "onAnimationStart"), li("dblclick", "onDoubleClick"), li("focusin", "onFocus"), li("focusout", "onBlur"), li(cv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), Oe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Oe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Oe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Oe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Oe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Oe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));
  function pv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, $(o, r, void 0, n), n.currentTarget = null;
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
            var S = o[h], C = S.instance, O = S.currentTarget;
            if (S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            pv(c, S, O), d = C;
          }
        else
          for (h = 0; h < o.length; h++) {
            if (S = o[h], C = S.instance, O = S.currentTarget, S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            pv(c, S, O), d = C;
          }
      }
    }
    if (Oi)
      throw n = sl, Oi = !1, sl = null, n;
  }
  function St(n, r) {
    var l = r[Qf];
    l === void 0 && (l = r[Qf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (vv(r, n, 2, !1), l.add(o));
  }
  function Ui(n, r, l) {
    var o = 0;
    r && (o |= 4), vv(l, n, o, r);
  }
  var ui = "_reactListening" + Math.random().toString(36).slice(2);
  function cu(n) {
    if (!n[ui]) {
      n[ui] = !0, mt.forEach(function(l) {
        l !== "selectionchange" && (Xm.has(l) || Ui(l, !1, n), Ui(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ui] || (r[ui] = !0, Ui("selectionchange", !1, r));
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
      var O = d, F = Et(l), V = [];
      e: {
        var H = fv.get(n);
        if (H !== void 0) {
          var K = ws, ae = n;
          switch (n) {
            case "keypress":
              if (ru(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              K = Vm;
              break;
            case "focusin":
              ae = "focus", K = zi;
              break;
            case "focusout":
              ae = "blur", K = zi;
              break;
            case "beforeblur":
            case "afterblur":
              K = zi;
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
              K = bs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              K = Vp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              K = Bm;
              break;
            case Ff:
            case ov:
            case sv:
              K = Bp;
              break;
            case cv:
              K = Qp;
              break;
            case "scroll":
              K = Fp;
              break;
            case "wheel":
              K = ai;
              break;
            case "copy":
            case "cut":
            case "paste":
              K = Fm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              K = _s;
          }
          var ce = (r & 4) !== 0, Gt = !ce && n === "scroll", w = ce ? H !== null ? H + "Capture" : null : H;
          ce = [];
          for (var R = O, _; R !== null; ) {
            _ = R;
            var P = _.stateNode;
            if (_.tag === 5 && P !== null && (_ = P, w !== null && (P = ol(R, w), P != null && ce.push(xo(R, P, _)))), Gt)
              break;
            R = R.return;
          }
          0 < ce.length && (H = new K(H, ae, null, l, F), V.push({ event: H, listeners: ce }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (H = n === "mouseover" || n === "pointerover", K = n === "mouseout" || n === "pointerout", H && l !== cr && (ae = l.relatedTarget || l.fromElement) && (Jr(ae) || ae[oi]))
            break e;
          if ((K || H) && (H = F.window === F ? F : (H = F.ownerDocument) ? H.defaultView || H.parentWindow : window, K ? (ae = l.relatedTarget || l.toElement, K = O, ae = ae ? Jr(ae) : null, ae !== null && (Gt = he(ae), ae !== Gt || ae.tag !== 5 && ae.tag !== 6) && (ae = null)) : (K = null, ae = O), K !== ae)) {
            if (ce = bs, P = "onMouseLeave", w = "onMouseEnter", R = "mouse", (n === "pointerout" || n === "pointerover") && (ce = _s, P = "onPointerLeave", w = "onPointerEnter", R = "pointer"), Gt = K == null ? H : fu(K), _ = ae == null ? H : fu(ae), H = new ce(P, R + "leave", K, l, F), H.target = Gt, H.relatedTarget = _, P = null, Jr(F) === O && (ce = new ce(w, R + "enter", ae, l, F), ce.target = _, ce.relatedTarget = Gt, P = ce), Gt = P, K && ae)
              t: {
                for (ce = K, w = ae, R = 0, _ = ce; _; _ = ml(_))
                  R++;
                for (_ = 0, P = w; P; P = ml(P))
                  _++;
                for (; 0 < R - _; )
                  ce = ml(ce), R--;
                for (; 0 < _ - R; )
                  w = ml(w), _--;
                for (; R--; ) {
                  if (ce === w || w !== null && ce === w.alternate)
                    break t;
                  ce = ml(ce), w = ml(w);
                }
                ce = null;
              }
            else
              ce = null;
            K !== null && jf(V, H, K, ce, !1), ae !== null && Gt !== null && jf(V, Gt, ae, ce, !0);
          }
        }
        e: {
          if (H = O ? fu(O) : window, K = H.nodeName && H.nodeName.toLowerCase(), K === "select" || K === "input" && H.type === "file")
            var de = Zp;
          else if (qp(H))
            if (Lf)
              de = nv;
            else {
              de = Qm;
              var Ce = $m;
            }
          else
            (K = H.nodeName) && K.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (de = Im);
          if (de && (de = de(n, O))) {
            Kp(V, de, l, F);
            break e;
          }
          Ce && Ce(n, H, O), n === "focusout" && (Ce = H._wrapperState) && Ce.controlled && H.type === "number" && Sa(H, "number", H.value);
        }
        switch (Ce = O ? fu(O) : window, n) {
          case "focusin":
            (qp(Ce) || Ce.contentEditable === "true") && (_a = Ce, zf = O, Eo = null);
            break;
          case "focusout":
            Eo = zf = _a = null;
            break;
          case "mousedown":
            Uf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Uf = !1, uv(V, l, F);
            break;
          case "selectionchange":
            if (lv)
              break;
          case "keydown":
          case "keyup":
            uv(V, l, F);
        }
        var ie;
        if (ba)
          e: {
            switch (n) {
              case "compositionstart":
                var Te = "onCompositionStart";
                break e;
              case "compositionend":
                Te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Te = "onCompositionUpdate";
                break e;
            }
            Te = void 0;
          }
        else
          lu ? Gp(n, l) && (Te = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Te = "onCompositionStart");
        Te && (Ip && l.locale !== "ko" && (lu || Te !== "onCompositionStart" ? Te === "onCompositionEnd" && lu && (ie = Rf()) : (ni = F, vo = "value" in ni ? ni.value : ni.textContent, lu = !0)), Ce = wo(O, Te), 0 < Ce.length && (Te = new Df(Te, n, null, l, F), V.push({ event: Te, listeners: Ce }), ie ? Te.data = ie : (ie = Ls(l), ie !== null && (Te.data = ie)))), (ie = Os ? Pm(n, l) : Ym(n, l)) && (O = wo(O, "onBeforeInput"), 0 < O.length && (F = new Df("onBeforeInput", "beforeinput", null, l, F), V.push({ event: F, listeners: O }), F.data = ie));
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
      c.tag === 5 && d !== null && (c = d, d = ol(n, l), d != null && o.unshift(xo(n, d, c)), d = ol(n, r), d != null && o.push(xo(n, d, c))), n = n.return;
    }
    return o;
  }
  function ml(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function jf(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, O = S.stateNode;
      if (C !== null && C === o)
        break;
      S.tag === 5 && O !== null && (S = O, c ? (C = ol(l, d), C != null && h.unshift(xo(l, C, S))) : c || (C = ol(l, d), C != null && h.push(xo(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var Vf = /\r\n?/g, qm = /\u0000|\uFFFD/g;
  function Bf(n) {
    return (typeof n == "string" ? n : "" + n).replace(Vf, `
`).replace(qm, "");
  }
  function Hs(n, r, l) {
    if (r = Bf(r), Bf(n) !== r && l)
      throw Error(M(425));
  }
  function Fs() {
  }
  var Pf = null, yl = null;
  function Do(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var gl = typeof setTimeout == "function" ? setTimeout : void 0, hv = typeof clearTimeout == "function" ? clearTimeout : void 0, Yf = typeof Promise == "function" ? Promise : void 0, $f = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yf < "u" ? function(n) {
    return Yf.resolve(null).then(n).catch(Km);
  } : gl;
  function Km(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ai(n, r) {
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
  function ka(n) {
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
  var Hi = Math.random().toString(36).slice(2), Va = "__reactFiber$" + Hi, Sl = "__reactProps$" + Hi, oi = "__reactContainer$" + Hi, Qf = "__reactEvents$" + Hi, Zm = "__reactListeners$" + Hi, If = "__reactHandles$" + Hi;
  function Jr(n) {
    var r = n[Va];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[oi] || l[Va]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = bo(n); n !== null; ) {
            if (l = n[Va])
              return l;
            n = bo(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function _o(n) {
    return n = n[Va] || n[oi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function fu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(M(33));
  }
  function ge(n) {
    return n[Sl] || null;
  }
  var Fi = [], _t = -1;
  function ze(n) {
    return { current: n };
  }
  function it(n) {
    0 > _t || (n.current = Fi[_t], Fi[_t] = null, _t--);
  }
  function ut(n, r) {
    _t++, Fi[_t] = n.current, n.current = r;
  }
  var Ba = {}, De = ze(Ba), Bt = ze(!1), pr = Ba;
  function ea(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Ba;
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
    it(Bt), it(De);
  }
  function ji(n, r, l) {
    if (De.current !== Ba)
      throw Error(M(168));
    ut(De, r), ut(Bt, l);
  }
  function ko(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(M(108, Ir(n) || "Unknown", c));
    return ee({}, l, o);
  }
  function js(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ba, pr = De.current, ut(De, n), ut(Bt, Bt.current), !0;
  }
  function mv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(M(169));
    l ? (n = ko(n, r, pr), o.__reactInternalMemoizedMergedChildContext = n, it(Bt), it(De), ut(De, n)) : it(Bt), ut(Bt, l);
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
      var n = 0, r = ct;
      try {
        var l = Ur;
        for (ct = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ur = null, gn = !1;
      } catch (c) {
        throw Ur !== null && (Ur = Ur.slice(n + 1)), bt(Nr, vr), c;
      } finally {
        ct = r, Oo = !1;
      }
    }
    return null;
  }
  var Vi = [], hr = 0, El = null, du = 0, mr = [], Qn = 0, na = null, _n = 1, si = "";
  function Ar(n, r) {
    Vi[hr++] = du, Vi[hr++] = El, El = n, du = r;
  }
  function Xf(n, r, l) {
    mr[Qn++] = _n, mr[Qn++] = si, mr[Qn++] = na, na = n;
    var o = _n;
    n = si;
    var c = 32 - Xr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Xr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, _n = 1 << 32 - Xr(r) + c | l << c | o, si = d + n;
    } else
      _n = 1 << d | l << c | o, si = n;
  }
  function Vs(n) {
    n.return !== null && (Ar(n, 1), Xf(n, 1, 0));
  }
  function qf(n) {
    for (; n === El; )
      El = Vi[--hr], Vi[hr] = null, du = Vi[--hr], Vi[hr] = null;
    for (; n === na; )
      na = mr[--Qn], mr[Qn] = null, si = mr[--Qn], mr[Qn] = null, _n = mr[--Qn], mr[Qn] = null;
  }
  var Hr = null, yr = null, kt = !1, ra = null;
  function Kf(n, r) {
    var l = fa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function yv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Hr = n, yr = ka(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Hr = n, yr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = na !== null ? { id: _n, overflow: si } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = fa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Hr = n, yr = null, !0) : !1;
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
            throw Error(M(418));
          r = ka(l.nextSibling);
          var o = Hr;
          r && yv(n, r) ? Kf(o, l) : (n.flags = n.flags & -4097 | 2, kt = !1, Hr = n);
        }
      } else {
        if (Bs(n))
          throw Error(M(418));
        n.flags = n.flags & -4097 | 2, kt = !1, Hr = n;
      }
    }
  }
  function gv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Hr = n;
  }
  function Ys(n) {
    if (n !== Hr)
      return !1;
    if (!kt)
      return gv(n), kt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Do(n.type, n.memoizedProps)), r && (r = yr)) {
      if (Bs(n))
        throw Sv(), Error(M(418));
      for (; r; )
        Kf(n, r), r = ka(r.nextSibling);
    }
    if (gv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(M(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                yr = ka(n.nextSibling);
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
      yr = Hr ? ka(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Sv() {
    for (var n = yr; n; )
      n = ka(n.nextSibling);
  }
  function Ht() {
    yr = Hr = null, kt = !1;
  }
  function Zf(n) {
    ra === null ? ra = [n] : ra.push(n);
  }
  var $s = yt.ReactCurrentBatchConfig;
  function Cl(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(M(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(M(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(M(284));
      if (!l._owner)
        throw Error(M(290, n));
    }
    return n;
  }
  function Pa(n, r) {
    throw n = Object.prototype.toString.call(r), Error(M(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Ev(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Qs(n) {
    function r(w, R) {
      if (n) {
        var _ = w.deletions;
        _ === null ? (w.deletions = [R], w.flags |= 16) : _.push(R);
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
      return w = Gi(w, R), w.index = 0, w.sibling = null, w;
    }
    function d(w, R, _) {
      return w.index = _, n ? (_ = w.alternate, _ !== null ? (_ = _.index, _ < R ? (w.flags |= 2, R) : _) : (w.flags |= 2, R)) : (w.flags |= 1048576, R);
    }
    function h(w) {
      return n && w.alternate === null && (w.flags |= 2), w;
    }
    function S(w, R, _, P) {
      return R === null || R.tag !== 6 ? (R = Mc(_, w.mode, P), R.return = w, R) : (R = c(R, _), R.return = w, R);
    }
    function C(w, R, _, P) {
      var de = _.type;
      return de === Ae ? F(w, R, _.props.children, P, _.key) : R !== null && (R.elementType === de || typeof de == "object" && de !== null && de.$$typeof === Dt && Ev(de) === R.type) ? (P = c(R, _.props), P.ref = Cl(w, R, _), P.return = w, P) : (P = Oc(_.type, _.key, _.props, null, w.mode, P), P.ref = Cl(w, R, _), P.return = w, P);
    }
    function O(w, R, _, P) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== _.containerInfo || R.stateNode.implementation !== _.implementation ? (R = Go(_, w.mode, P), R.return = w, R) : (R = c(R, _.children || []), R.return = w, R);
    }
    function F(w, R, _, P, de) {
      return R === null || R.tag !== 7 ? (R = Al(_, w.mode, P, de), R.return = w, R) : (R = c(R, _), R.return = w, R);
    }
    function V(w, R, _) {
      if (typeof R == "string" && R !== "" || typeof R == "number")
        return R = Mc("" + R, w.mode, _), R.return = w, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case Pe:
            return _ = Oc(R.type, R.key, R.props, null, w.mode, _), _.ref = Cl(w, null, R), _.return = w, _;
          case wt:
            return R = Go(R, w.mode, _), R.return = w, R;
          case Dt:
            var P = R._init;
            return V(w, P(R._payload), _);
        }
        if (ei(R) || Ee(R))
          return R = Al(R, w.mode, _, null), R.return = w, R;
        Pa(w, R);
      }
      return null;
    }
    function H(w, R, _, P) {
      var de = R !== null ? R.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number")
        return de !== null ? null : S(w, R, "" + _, P);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Pe:
            return _.key === de ? C(w, R, _, P) : null;
          case wt:
            return _.key === de ? O(w, R, _, P) : null;
          case Dt:
            return de = _._init, H(
              w,
              R,
              de(_._payload),
              P
            );
        }
        if (ei(_) || Ee(_))
          return de !== null ? null : F(w, R, _, P, null);
        Pa(w, _);
      }
      return null;
    }
    function K(w, R, _, P, de) {
      if (typeof P == "string" && P !== "" || typeof P == "number")
        return w = w.get(_) || null, S(R, w, "" + P, de);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case Pe:
            return w = w.get(P.key === null ? _ : P.key) || null, C(R, w, P, de);
          case wt:
            return w = w.get(P.key === null ? _ : P.key) || null, O(R, w, P, de);
          case Dt:
            var Ce = P._init;
            return K(w, R, _, Ce(P._payload), de);
        }
        if (ei(P) || Ee(P))
          return w = w.get(_) || null, F(R, w, P, de, null);
        Pa(R, P);
      }
      return null;
    }
    function ae(w, R, _, P) {
      for (var de = null, Ce = null, ie = R, Te = R = 0, cn = null; ie !== null && Te < _.length; Te++) {
        ie.index > Te ? (cn = ie, ie = null) : cn = ie.sibling;
        var et = H(w, ie, _[Te], P);
        if (et === null) {
          ie === null && (ie = cn);
          break;
        }
        n && ie && et.alternate === null && r(w, ie), R = d(et, R, Te), Ce === null ? de = et : Ce.sibling = et, Ce = et, ie = cn;
      }
      if (Te === _.length)
        return l(w, ie), kt && Ar(w, Te), de;
      if (ie === null) {
        for (; Te < _.length; Te++)
          ie = V(w, _[Te], P), ie !== null && (R = d(ie, R, Te), Ce === null ? de = ie : Ce.sibling = ie, Ce = ie);
        return kt && Ar(w, Te), de;
      }
      for (ie = o(w, ie); Te < _.length; Te++)
        cn = K(ie, w, Te, _[Te], P), cn !== null && (n && cn.alternate !== null && ie.delete(cn.key === null ? Te : cn.key), R = d(cn, R, Te), Ce === null ? de = cn : Ce.sibling = cn, Ce = cn);
      return n && ie.forEach(function(mi) {
        return r(w, mi);
      }), kt && Ar(w, Te), de;
    }
    function ce(w, R, _, P) {
      var de = Ee(_);
      if (typeof de != "function")
        throw Error(M(150));
      if (_ = de.call(_), _ == null)
        throw Error(M(151));
      for (var Ce = de = null, ie = R, Te = R = 0, cn = null, et = _.next(); ie !== null && !et.done; Te++, et = _.next()) {
        ie.index > Te ? (cn = ie, ie = null) : cn = ie.sibling;
        var mi = H(w, ie, et.value, P);
        if (mi === null) {
          ie === null && (ie = cn);
          break;
        }
        n && ie && mi.alternate === null && r(w, ie), R = d(mi, R, Te), Ce === null ? de = mi : Ce.sibling = mi, Ce = mi, ie = cn;
      }
      if (et.done)
        return l(
          w,
          ie
        ), kt && Ar(w, Te), de;
      if (ie === null) {
        for (; !et.done; Te++, et = _.next())
          et = V(w, et.value, P), et !== null && (R = d(et, R, Te), Ce === null ? de = et : Ce.sibling = et, Ce = et);
        return kt && Ar(w, Te), de;
      }
      for (ie = o(w, ie); !et.done; Te++, et = _.next())
        et = K(ie, w, Te, et.value, P), et !== null && (n && et.alternate !== null && ie.delete(et.key === null ? Te : et.key), R = d(et, R, Te), Ce === null ? de = et : Ce.sibling = et, Ce = et);
      return n && ie.forEach(function(my) {
        return r(w, my);
      }), kt && Ar(w, Te), de;
    }
    function Gt(w, R, _, P) {
      if (typeof _ == "object" && _ !== null && _.type === Ae && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Pe:
            e: {
              for (var de = _.key, Ce = R; Ce !== null; ) {
                if (Ce.key === de) {
                  if (de = _.type, de === Ae) {
                    if (Ce.tag === 7) {
                      l(w, Ce.sibling), R = c(Ce, _.props.children), R.return = w, w = R;
                      break e;
                    }
                  } else if (Ce.elementType === de || typeof de == "object" && de !== null && de.$$typeof === Dt && Ev(de) === Ce.type) {
                    l(w, Ce.sibling), R = c(Ce, _.props), R.ref = Cl(w, Ce, _), R.return = w, w = R;
                    break e;
                  }
                  l(w, Ce);
                  break;
                } else
                  r(w, Ce);
                Ce = Ce.sibling;
              }
              _.type === Ae ? (R = Al(_.props.children, w.mode, P, _.key), R.return = w, w = R) : (P = Oc(_.type, _.key, _.props, null, w.mode, P), P.ref = Cl(w, R, _), P.return = w, w = P);
            }
            return h(w);
          case wt:
            e: {
              for (Ce = _.key; R !== null; ) {
                if (R.key === Ce)
                  if (R.tag === 4 && R.stateNode.containerInfo === _.containerInfo && R.stateNode.implementation === _.implementation) {
                    l(w, R.sibling), R = c(R, _.children || []), R.return = w, w = R;
                    break e;
                  } else {
                    l(w, R);
                    break;
                  }
                else
                  r(w, R);
                R = R.sibling;
              }
              R = Go(_, w.mode, P), R.return = w, w = R;
            }
            return h(w);
          case Dt:
            return Ce = _._init, Gt(w, R, Ce(_._payload), P);
        }
        if (ei(_))
          return ae(w, R, _, P);
        if (Ee(_))
          return ce(w, R, _, P);
        Pa(w, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" ? (_ = "" + _, R !== null && R.tag === 6 ? (l(w, R.sibling), R = c(R, _), R.return = w, w = R) : (l(w, R), R = Mc(_, w.mode, P), R.return = w, w = R), h(w)) : l(w, R);
    }
    return Gt;
  }
  var pu = Qs(!0), Cv = Qs(!1), ci = ze(null), ln = null, Q = null, aa = null;
  function Fr() {
    aa = Q = ln = null;
  }
  function Jf(n) {
    var r = ci.current;
    it(ci), n._currentValue = r;
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
    ln = n, aa = Q = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Er = !0), n.firstContext = null);
  }
  function ia(n) {
    var r = n._currentValue;
    if (aa !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Q === null) {
        if (ln === null)
          throw Error(M(308));
        Q = n, ln.dependencies = { lanes: 0, firstContext: n };
      } else
        Q = Q.next = n;
    return r;
  }
  var Tl = null;
  function en(n) {
    Tl === null ? Tl = [n] : Tl.push(n);
  }
  function Tv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, en(r)) : (l.next = c.next, c.next = l), r.interleaved = l, fi(n, o);
  }
  function fi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Bi = !1;
  function Is(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function hu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function gr(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Pi(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, Ye & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, fi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, en(o)) : (r.next = c.next, c.next = r), o.interleaved = r, fi(n, l);
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
    Bi = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var C = S, O = C.next;
      C.next = null, h === null ? d = O : h.next = O, h = C;
      var F = n.alternate;
      F !== null && (F = F.updateQueue, S = F.lastBaseUpdate, S !== h && (S === null ? F.firstBaseUpdate = O : S.next = O, F.lastBaseUpdate = C));
    }
    if (d !== null) {
      var V = c.baseState;
      h = 0, F = O = C = null, S = d;
      do {
        var H = S.lane, K = S.eventTime;
        if ((o & H) === H) {
          F !== null && (F = F.next = {
            eventTime: K,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var ae = n, ce = S;
            switch (H = r, K = l, ce.tag) {
              case 1:
                if (ae = ce.payload, typeof ae == "function") {
                  V = ae.call(K, V, H);
                  break e;
                }
                V = ae;
                break e;
              case 3:
                ae.flags = ae.flags & -65537 | 128;
              case 0:
                if (ae = ce.payload, H = typeof ae == "function" ? ae.call(K, V, H) : ae, H == null)
                  break e;
                V = ee({}, V, H);
                break e;
              case 2:
                Bi = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, H = c.effects, H === null ? c.effects = [S] : H.push(S));
        } else
          K = { eventTime: K, lane: H, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, F === null ? (O = F = K, C = V) : F = F.next = K, h |= H;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null)
            break;
          H = S, S = H.next, H.next = null, c.lastBaseUpdate = H, c.shared.pending = null;
        }
      } while (!0);
      if (F === null && (C = V), c.baseState = C, c.firstBaseUpdate = O, c.lastBaseUpdate = F, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Ml |= h, n.lanes = h, n.memoizedState = V;
    }
  }
  function xv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(M(191, c));
          c.call(o);
        }
      }
  }
  var Lo = {}, Oa = ze(Lo), mu = ze(Lo), Mo = ze(Lo);
  function Rl(n) {
    if (n === Lo)
      throw Error(M(174));
    return n;
  }
  function td(n, r) {
    switch (ut(Mo, r), ut(mu, n), ut(Oa, Lo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Kt(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Kt(r, n);
    }
    it(Oa), ut(Oa, r);
  }
  function yu() {
    it(Oa), it(mu), it(Mo);
  }
  function wv(n) {
    Rl(Mo.current);
    var r = Rl(Oa.current), l = Kt(r, n.type);
    r !== l && (ut(mu, n), ut(Oa, l));
  }
  function nd(n) {
    mu.current === n && (it(Oa), it(mu));
  }
  var Nt = ze(0);
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
  var Ks = yt.ReactCurrentDispatcher, No = yt.ReactCurrentBatchConfig, fe = 0, pe = null, be = null, Ve = null, jr = !1, gu = !1, zo = 0, Jm = 0;
  function In() {
    throw Error(M(321));
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
    if (fe = d, pe = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ks.current = n === null || n.memoizedState === null ? ey : Tt, n = l(o, c), gu) {
      d = 0;
      do {
        if (gu = !1, zo = 0, 25 <= d)
          throw Error(M(301));
        d += 1, Ve = be = null, r.updateQueue = null, Ks.current = dc, n = l(o, c);
      } while (gu);
    }
    if (Ks.current = Wn, r = be !== null && be.next !== null, fe = 0, Ve = be = pe = null, jr = !1, r)
      throw Error(M(300));
    return n;
  }
  function tn() {
    var n = zo !== 0;
    return zo = 0, n;
  }
  function me() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ve === null ? pe.memoizedState = Ve = n : Ve = Ve.next = n, Ve;
  }
  function kn() {
    if (be === null) {
      var n = pe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = be.next;
    var r = Ve === null ? pe.memoizedState : Ve.next;
    if (r !== null)
      Ve = r, be = n;
    else {
      if (n === null)
        throw Error(M(310));
      be = n, n = { memoizedState: be.memoizedState, baseState: be.baseState, baseQueue: be.baseQueue, queue: be.queue, next: null }, Ve === null ? pe.memoizedState = Ve = n : Ve = Ve.next = n;
    }
    return Ve;
  }
  function Vr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function di(n) {
    var r = kn(), l = r.queue;
    if (l === null)
      throw Error(M(311));
    l.lastRenderedReducer = n;
    var o = be, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var S = h = null, C = null, O = d;
      do {
        var F = O.lane;
        if ((fe & F) === F)
          C !== null && (C = C.next = { lane: 0, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }), o = O.hasEagerState ? O.eagerState : n(o, O.action);
        else {
          var V = {
            lane: F,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          };
          C === null ? (S = C = V, h = o) : C = C.next = V, pe.lanes |= F, Ml |= F;
        }
        O = O.next;
      } while (O !== null && O !== d);
      C === null ? h = o : C.next = S, Zr(o, r.memoizedState) || (Er = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, pe.lanes |= d, Ml |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function la(n) {
    var r = kn(), l = r.queue;
    if (l === null)
      throw Error(M(311));
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
  function xl(n, r) {
    var l = pe, o = kn(), c = r(), d = !Zr(o.memoizedState, c);
    if (d && (o.memoizedState = c, Er = !0), o = o.queue, Ao(Js.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ve !== null && Ve.memoizedState.tag & 1) {
      if (l.flags |= 2048, wl(9, Zs.bind(null, l, o, c, r), void 0, null), Yt === null)
        throw Error(M(349));
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
    var r = fi(n, 1);
    r !== null && Ft(r, n, 1, -1);
  }
  function nc(n) {
    var r = me();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vr, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ho.bind(null, pe, n), [r.memoizedState, n];
  }
  function wl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = pe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, pe.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function rc() {
    return kn().memoizedState;
  }
  function Cu(n, r, l, o) {
    var c = me();
    pe.flags |= n, c.memoizedState = wl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Tu(n, r, l, o) {
    var c = kn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (be !== null) {
      var h = be.memoizedState;
      if (d = h.destroy, o !== null && Uo(o, h.deps)) {
        c.memoizedState = wl(r, l, d, o);
        return;
      }
    }
    pe.flags |= n, c.memoizedState = wl(1 | r, l, d, o);
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
    return fe & 21 ? (Zr(l, r) || (l = Es(), pe.lanes |= l, Ml |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Er = !0), n.memoizedState = l);
  }
  function ad(n, r) {
    var l = ct;
    ct = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = No.transition;
    No.transition = {};
    try {
      n(!1), r();
    } finally {
      ct = l, No.transition = o;
    }
  }
  function fc() {
    return kn().memoizedState;
  }
  function Dv(n, r, l) {
    var o = hi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, id(n))
      xu(r, l);
    else if (l = Tv(n, r, l, o), l !== null) {
      var c = Cn();
      Ft(l, n, o, c), Yi(l, r, o);
    }
  }
  function Ho(n, r, l) {
    var o = hi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (id(n))
      xu(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var h = r.lastRenderedState, S = d(h, l);
          if (c.hasEagerState = !0, c.eagerState = S, Zr(S, h)) {
            var C = r.interleaved;
            C === null ? (c.next = c, en(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Tv(n, r, c, o), l !== null && (c = Cn(), Ft(l, n, o, c), Yi(l, r, o));
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
  var Wn = { readContext: ia, useCallback: In, useContext: In, useEffect: In, useImperativeHandle: In, useInsertionEffect: In, useLayoutEffect: In, useMemo: In, useReducer: In, useRef: In, useState: In, useDebugValue: In, useDeferredValue: In, useTransition: In, useMutableSource: In, useSyncExternalStore: In, useId: In, unstable_isNewReconciler: !1 }, ey = { readContext: ia, useCallback: function(n, r) {
    return me().memoizedState = [n, r === void 0 ? null : r], n;
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
    var l = me();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = me();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Dv.bind(null, pe, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = me();
    return n = { current: n }, r.memoizedState = n;
  }, useState: nc, useDebugValue: Ru, useDeferredValue: function(n) {
    return me().memoizedState = n;
  }, useTransition: function() {
    var n = nc(!1), r = n[0];
    return n = ad.bind(null, n[1]), me().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = pe, c = me();
    if (kt) {
      if (l === void 0)
        throw Error(M(407));
      l = l();
    } else {
      if (l = r(), Yt === null)
        throw Error(M(349));
      fe & 30 || Eu(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, ac(Js.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, wl(9, Zs.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = me(), r = Yt.identifierPrefix;
    if (kt) {
      var l = si, o = _n;
      l = (o & ~(1 << 32 - Xr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = zo++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Jm++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Tt = {
    readContext: ia,
    useCallback: Dl,
    useContext: ia,
    useEffect: Ao,
    useImperativeHandle: oc,
    useInsertionEffect: ic,
    useLayoutEffect: lc,
    useMemo: sc,
    useReducer: di,
    useRef: rc,
    useState: function() {
      return di(Vr);
    },
    useDebugValue: Ru,
    useDeferredValue: function(n) {
      var r = kn();
      return cc(r, be.memoizedState, n);
    },
    useTransition: function() {
      var n = di(Vr)[0], r = kn().memoizedState;
      return [n, r];
    },
    useMutableSource: Su,
    useSyncExternalStore: xl,
    useId: fc,
    unstable_isNewReconciler: !1
  }, dc = { readContext: ia, useCallback: Dl, useContext: ia, useEffect: Ao, useImperativeHandle: oc, useInsertionEffect: ic, useLayoutEffect: lc, useMemo: sc, useReducer: la, useRef: rc, useState: function() {
    return la(Vr);
  }, useDebugValue: Ru, useDeferredValue: function(n) {
    var r = kn();
    return be === null ? r.memoizedState = n : cc(r, be.memoizedState, n);
  }, useTransition: function() {
    var n = la(Vr)[0], r = kn().memoizedState;
    return [n, r];
  }, useMutableSource: Su, useSyncExternalStore: xl, useId: fc, unstable_isNewReconciler: !1 };
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
  var _l = { isMounted: function(n) {
    return (n = n._reactInternals) ? he(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cn(), c = hi(n), d = gr(o, c);
    d.payload = r, l != null && (d.callback = l), r = Pi(n, d, c), r !== null && (Ft(r, n, c, o), Ws(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cn(), c = hi(n), d = gr(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Pi(n, d, c), r !== null && (Ft(r, n, c, o), Ws(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Cn(), o = hi(n), c = gr(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Pi(n, c, o), r !== null && (Ft(r, n, o, l), Ws(r, n, o));
  } };
  function bv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !So(l, o) || !So(c, d) : !0;
  }
  function _v(n, r, l) {
    var o = !1, c = Ba, d = r.contextType;
    return typeof d == "object" && d !== null ? d = ia(d) : (c = Mt(r) ? pr : De.current, o = r.contextTypes, d = (o = o != null) ? ea(n, c) : Ba), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = _l, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function kv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && _l.enqueueReplaceState(r, r.state, null);
  }
  function ld(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Is(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = ia(d) : (d = Mt(r) ? pr : De.current, c.context = ea(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (bl(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && _l.enqueueReplaceState(c, c.state, null), Gs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function $i(n, r) {
    try {
      var l = "", o = r;
      do
        l += za(o), o = o.return;
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
  function Fo(n, r) {
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
      xc || (xc = !0, md = o), Fo(n, r);
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
        Fo(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Fo(n, r), typeof o != "function" && (sa === null ? sa = /* @__PURE__ */ new Set([this]) : sa.add(this));
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
    c.has(l) || (c.add(l), n = cy.bind(null, n, r, l), r.then(n, n));
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
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = gr(-1, 1), r.tag = 2, Pi(l, r, 1))), l.lanes |= 1), n);
  }
  var zv = yt.ReactCurrentOwner, Er = !1;
  function It(n, r, l, o) {
    r.child = n === null ? Cv(r, null, l, o) : pu(r, n.child, l, o);
  }
  function wu(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return vu(r, c), o = A(n, r, l, o, d, c), l = tn(), n !== null && !Er ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Wt(n, r, c)) : (kt && l && Vs(r), r.flags |= 1, It(n, r, o, c), r.child);
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
    return r.flags |= 1, n = Gi(d, o), n.ref = r.ref, n.return = r, r.child = n;
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
    return It(n, r, c, l), r.child;
  }
  function kl(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Ne(n, r, l, o, c) {
    var d = Mt(l) ? pr : De.current;
    return d = ea(r, d), vu(r, c), l = A(n, r, l, o, d, c), o = tn(), n !== null && !Er ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Wt(n, r, c)) : (kt && o && Vs(r), r.flags |= 1, It(n, r, l, c), r.child);
  }
  function Vo(n, r, l, o, c) {
    if (Mt(l)) {
      var d = !0;
      js(r);
    } else
      d = !1;
    if (vu(r, c), r.stateNode === null)
      Po(n, r), _v(r, l, o), ld(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, O = l.contextType;
      typeof O == "object" && O !== null ? O = ia(O) : (O = Mt(l) ? pr : De.current, O = ea(r, O));
      var F = l.getDerivedStateFromProps, V = typeof F == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      V || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== O) && kv(r, h, o, O), Bi = !1;
      var H = r.memoizedState;
      h.state = H, Gs(r, o, h, c), C = r.memoizedState, S !== o || H !== C || Bt.current || Bi ? (typeof F == "function" && (bl(r, l, F, o), C = r.memoizedState), (S = Bi || bv(r, l, S, o, H, C, O)) ? (V || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = O, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, hu(n, r), S = r.memoizedProps, O = r.type === r.elementType ? S : Sr(r.type, S), h.props = O, V = r.pendingProps, H = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = ia(C) : (C = Mt(l) ? pr : De.current, C = ea(r, C));
      var K = l.getDerivedStateFromProps;
      (F = typeof K == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== V || H !== C) && kv(r, h, o, C), Bi = !1, H = r.memoizedState, h.state = H, Gs(r, o, h, c);
      var ae = r.memoizedState;
      S !== V || H !== ae || Bt.current || Bi ? (typeof K == "function" && (bl(r, l, K, o), ae = r.memoizedState), (O = Bi || bv(r, l, O, o, H, ae, C) || !1) ? (F || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, ae, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, ae, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ae), h.props = o, h.state = ae, h.context = C, o = O) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return vc(n, r, l, o, d, c);
  }
  function vc(n, r, l, o, c, d) {
    kl(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h)
      return c && mv(r, l, !1), Wt(n, r, d);
    o = r.stateNode, zv.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = pu(r, n.child, null, d), r.child = pu(r, null, S, d)) : It(n, r, S, d), r.memoizedState = o.state, c && mv(r, l, !0), r.child;
  }
  function ty(n) {
    var r = n.stateNode;
    r.pendingContext ? ji(n, r.pendingContext, r.pendingContext !== r.context) : r.context && ji(n, r.context, !1), td(n, r.containerInfo);
  }
  function Uv(n, r, l, o, c) {
    return Ht(), Zf(c), r.flags |= 256, It(n, r, l, o), r.child;
  }
  var Bo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ol(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Av(n, r, l) {
    var o = r.pendingProps, c = Nt.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), ut(Nt, c & 1), n === null)
      return Ps(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = Lc(h, o, 0, null), n = Al(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ol(l), r.memoizedState = Bo, n) : hc(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null))
      return sd(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = Gi(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = Gi(S, d) : (d = Al(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? Ol(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = Bo, o;
    }
    return d = n.child, n = d.sibling, o = Gi(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function hc(n, r) {
    return r = Lc({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function mc(n, r, l, o) {
    return o !== null && Zf(o), pu(r, n.child, null, l), n = hc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function sd(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = ud(Error(M(422))), mc(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Lc({ mode: "visible", children: o.children }, c, 0, null), d = Al(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && pu(r, n.child, null, h), r.child.memoizedState = Ol(h), r.memoizedState = Bo, d);
    if (!(r.mode & 1))
      return mc(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var S = o.dgst;
      return o = S, d = Error(M(419)), o = ud(d, o, void 0), mc(n, r, h, o);
    }
    if (S = (h & n.childLanes) !== 0, Er || S) {
      if (o = Yt, o !== null) {
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
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, fi(n, c), Ft(o, n, c, -1));
      }
      return Wo(), o = ud(Error(M(421))), mc(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ed.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, yr = ka(c.nextSibling), Hr = r, kt = !0, ra = null, n !== null && (mr[Qn++] = _n, mr[Qn++] = si, mr[Qn++] = na, _n = n.id, si = n.overflow, na = r), r = hc(r, o.children), r.flags |= 4096, r);
  }
  function Hv(n, r, l) {
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
    if (It(n, r, o.children, l), o = Nt.current, o & 2)
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
    if (n !== null && (r.dependencies = n.dependencies), Ml |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(M(153));
    if (r.child !== null) {
      for (n = r.child, l = Gi(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Gi(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function pi(n, r, l) {
    switch (r.tag) {
      case 3:
        ty(r), Ht();
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
        ut(ci, o._currentValue), o._currentValue = c;
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
  var Ya, Du, bu, ua;
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
  }, bu = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Rl(Oa.current);
      var d = null;
      switch (l) {
        case "input":
          c = Bn(n, c), o = Bn(n, o), d = [];
          break;
        case "select":
          c = ee({}, c, { value: void 0 }), o = ee({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Ea(n, c), o = Ea(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Fs);
      }
      vn(l, o);
      var h;
      l = null;
      for (O in c)
        if (!o.hasOwnProperty(O) && c.hasOwnProperty(O) && c[O] != null)
          if (O === "style") {
            var S = c[O];
            for (h in S)
              S.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
          } else
            O !== "dangerouslySetInnerHTML" && O !== "children" && O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && O !== "autoFocus" && (Rt.hasOwnProperty(O) ? d || (d = []) : (d = d || []).push(O, null));
      for (O in o) {
        var C = o[O];
        if (S = c != null ? c[O] : void 0, o.hasOwnProperty(O) && C !== S && (C != null || S != null))
          if (O === "style")
            if (S) {
              for (h in S)
                !S.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
              for (h in C)
                C.hasOwnProperty(h) && S[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
            } else
              l || (d || (d = []), d.push(
                O,
                l
              )), l = C;
          else
            O === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(O, C)) : O === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(O, "" + C) : O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && (Rt.hasOwnProperty(O) ? (C != null && O === "onScroll" && St("scroll", n), d || S === C || (d = [])) : (d = d || []).push(O, C));
      }
      l && (d = d || []).push("style", l);
      var O = d;
      (r.updateQueue = O) && (r.flags |= 4);
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
  function ny(n, r, l) {
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
        return o = r.stateNode, yu(), it(Bt), it(De), rd(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Ys(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ra !== null && (yd(ra), ra = null))), Du(n, r), Gn(r), null;
      case 5:
        nd(r);
        var c = Rl(Mo.current);
        if (l = r.type, n !== null && r.stateNode != null)
          bu(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(M(166));
            return Gn(r), null;
          }
          if (n = Rl(Oa.current), Ys(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Va] = r, o[Sl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                St("cancel", o), St("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                St("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Ro.length; c++)
                  St(Ro[c], o);
                break;
              case "source":
                St("error", o);
                break;
              case "img":
              case "image":
              case "link":
                St(
                  "error",
                  o
                ), St("load", o);
                break;
              case "details":
                St("toggle", o);
                break;
              case "input":
                Dn(o, d), St("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, St("invalid", o);
                break;
              case "textarea":
                _r(o, d), St("invalid", o);
            }
            vn(l, d), c = null;
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var S = d[h];
                h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && Hs(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && Hs(
                  o.textContent,
                  S,
                  n
                ), c = ["children", "" + S]) : Rt.hasOwnProperty(h) && S != null && h === "onScroll" && St("scroll", o);
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
                typeof d.onClick == "function" && (o.onclick = Fs);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ca(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[Va] = r, n[Sl] = o, Ya(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = Qt(l, o), l) {
                case "dialog":
                  St("cancel", n), St("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  St("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Ro.length; c++)
                    St(Ro[c], n);
                  c = o;
                  break;
                case "source":
                  St("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  St(
                    "error",
                    n
                  ), St("load", n), c = o;
                  break;
                case "details":
                  St("toggle", n), c = o;
                  break;
                case "input":
                  Dn(n, o), c = Bn(n, o), St("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ee({}, o, { value: void 0 }), St("invalid", n);
                  break;
                case "textarea":
                  _r(n, o), c = Ea(n, o), St("invalid", n);
                  break;
                default:
                  c = o;
              }
              vn(l, c), S = c;
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var C = S[d];
                  d === "style" ? st(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && ki(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && Ta(n, C) : typeof C == "number" && Ta(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Rt.hasOwnProperty(d) ? C != null && d === "onScroll" && St("scroll", n) : C != null && Be(n, d, C, h));
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
                  n.multiple = !!o.multiple, d = o.value, d != null ? Aa(n, !!o.multiple, d, !1) : o.defaultValue != null && Aa(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Fs);
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
            throw Error(M(166));
          if (l = Rl(Mo.current), Rl(Oa.current), Ys(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Va] = r, (d = o.nodeValue !== l) && (n = Hr, n !== null))
              switch (n.tag) {
                case 3:
                  Hs(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Hs(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Va] = r, r.stateNode = o;
        }
        return Gn(r), null;
      case 13:
        if (it(Nt), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (kt && yr !== null && r.mode & 1 && !(r.flags & 128))
            Sv(), Ht(), r.flags |= 98560, d = !1;
          else if (d = Ys(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(M(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(M(317));
              d[Va] = r;
            } else
              Ht(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Gn(r), d = !1;
          } else
            ra !== null && (yd(ra), ra = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Nt.current & 1 ? on === 0 && (on = 3) : Wo())), r.updateQueue !== null && (r.flags |= 4), Gn(r), null);
      case 4:
        return yu(), Du(n, r), n === null && cu(r.stateNode.containerInfo), Gn(r), null;
      case 10:
        return Jf(r.type._context), Gn(r), null;
      case 17:
        return Mt(r.type) && ta(), Gn(r), null;
      case 19:
        if (it(Nt), d = r.memoizedState, d === null)
          return Gn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null)
          if (o)
            Pt(d, !1);
          else {
            if (on !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (h = Xs(n), h !== null) {
                  for (r.flags |= 128, Pt(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return ut(Nt, Nt.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && lt() > Hu && (r.flags |= 128, o = !0, Pt(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Xs(h), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Pt(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !kt)
                return Gn(r), null;
            } else
              2 * lt() - d.renderingStartTime > Hu && l !== 1073741824 && (r.flags |= 128, o = !0, Pt(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = lt(), r.sibling = null, l = Nt.current, ut(Nt, o ? l & 1 | 2 : l & 1), r) : (Gn(r), null);
      case 22:
      case 23:
        return _c(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Tr & 1073741824 && (Gn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Gn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(M(156, r.tag));
  }
  function ry(n, r) {
    switch (qf(r), r.tag) {
      case 1:
        return Mt(r.type) && ta(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return yu(), it(Bt), it(De), rd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return nd(r), null;
      case 13:
        if (it(Nt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(M(340));
          Ht();
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
        return _c(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var _u = !1, On = !1, gc = typeof WeakSet == "function" ? WeakSet : Set, ne = null;
  function ku(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          $t(n, r, o);
        }
      else
        l.current = null;
  }
  function fd(n, r, l) {
    try {
      l();
    } catch (o) {
      $t(n, r, o);
    }
  }
  var Sc = !1;
  function ay(n, r) {
    if (Pf = dl, n = Ms(), ii(n)) {
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
            var h = 0, S = -1, C = -1, O = 0, F = 0, V = n, H = null;
            t:
              for (; ; ) {
                for (var K; V !== l || c !== 0 && V.nodeType !== 3 || (S = h + c), V !== d || o !== 0 && V.nodeType !== 3 || (C = h + o), V.nodeType === 3 && (h += V.nodeValue.length), (K = V.firstChild) !== null; )
                  H = V, V = K;
                for (; ; ) {
                  if (V === n)
                    break t;
                  if (H === l && ++O === c && (S = h), H === d && ++F === o && (C = h), (K = V.nextSibling) !== null)
                    break;
                  V = H, H = V.parentNode;
                }
                V = K;
              }
            l = S === -1 || C === -1 ? null : { start: S, end: C };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (yl = { focusedElem: n, selectionRange: l }, dl = !1, ne = r; ne !== null; )
      if (r = ne, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ne = n;
      else
        for (; ne !== null; ) {
          r = ne;
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
                    var ce = ae.memoizedProps, Gt = ae.memoizedState, w = r.stateNode, R = w.getSnapshotBeforeUpdate(r.elementType === r.type ? ce : Sr(r.type, ce), Gt);
                    w.__reactInternalSnapshotBeforeUpdate = R;
                  }
                  break;
                case 3:
                  var _ = r.stateNode.containerInfo;
                  _.nodeType === 1 ? _.textContent = "" : _.nodeType === 9 && _.documentElement && _.removeChild(_.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(M(163));
              }
          } catch (P) {
            $t(r, r.return, P);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ne = n;
            break;
          }
          ne = r.return;
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
  function Fv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Fv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Va], delete r[Sl], delete r[Qf], delete r[Zm], delete r[If])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  function Yo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Fs));
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
  var zt = null, Sn = !1;
  function Zn(n, r, l) {
    for (l = l.child; l !== null; )
      Mu(n, r, l), l = l.sibling;
  }
  function Mu(n, r, l) {
    if (xa && typeof xa.onCommitFiberUnmount == "function")
      try {
        xa.onCommitFiberUnmount(lo, l);
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
        zt !== null && (Sn ? (n = zt, l = l.stateNode, n.nodeType === 8 ? Ai(n.parentNode, l) : n.nodeType === 1 && Ai(n, l), fo(n)) : Ai(zt, l.stateNode));
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
            $t(l, r, S);
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
        var c = fy.bind(null, n, o);
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
            throw Error(M(160));
          Mu(d, h, c), zt = null, Sn = !1;
          var C = c.alternate;
          C !== null && (C.return = null), c.return = null;
        } catch (O) {
          $t(c, r, O);
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
        if (En(r, n), $a(n), o & 4) {
          try {
            Ou(3, n, n.return), Ec(3, n);
          } catch (ce) {
            $t(n, n.return, ce);
          }
          try {
            Ou(5, n, n.return);
          } catch (ce) {
            $t(n, n.return, ce);
          }
        }
        break;
      case 1:
        En(r, n), $a(n), o & 512 && l !== null && ku(l, l.return);
        break;
      case 5:
        if (En(r, n), $a(n), o & 512 && l !== null && ku(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Ta(c, "");
          } catch (ce) {
            $t(n, n.return, ce);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null)
            try {
              S === "input" && d.type === "radio" && d.name != null && bn(c, d), Qt(S, h);
              var O = Qt(S, d);
              for (h = 0; h < C.length; h += 2) {
                var F = C[h], V = C[h + 1];
                F === "style" ? st(c, V) : F === "dangerouslySetInnerHTML" ? ki(c, V) : F === "children" ? Ta(c, V) : Be(c, F, V, O);
              }
              switch (S) {
                case "input":
                  Pn(c, d);
                  break;
                case "textarea":
                  Ha(c, d);
                  break;
                case "select":
                  var H = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var K = d.value;
                  K != null ? Aa(c, !!d.multiple, K, !1) : H !== !!d.multiple && (d.defaultValue != null ? Aa(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Aa(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Sl] = d;
            } catch (ce) {
              $t(n, n.return, ce);
            }
        }
        break;
      case 6:
        if (En(r, n), $a(n), o & 4) {
          if (n.stateNode === null)
            throw Error(M(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (ce) {
            $t(n, n.return, ce);
          }
        }
        break;
      case 3:
        if (En(r, n), $a(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            fo(r.containerInfo);
          } catch (ce) {
            $t(n, n.return, ce);
          }
        break;
      case 4:
        En(r, n), $a(n);
        break;
      case 13:
        En(r, n), $a(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Rc = lt())), o & 4 && Nu(n);
        break;
      case 22:
        if (F = l !== null && l.memoizedState !== null, n.mode & 1 ? (On = (O = On) || F, En(r, n), On = O) : En(r, n), $a(n), o & 8192) {
          if (O = n.memoizedState !== null, (n.stateNode.isHidden = O) && !F && n.mode & 1)
            for (ne = n, F = n.child; F !== null; ) {
              for (V = ne = F; ne !== null; ) {
                switch (H = ne, K = H.child, H.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ou(4, H, H.return);
                    break;
                  case 1:
                    ku(H, H.return);
                    var ae = H.stateNode;
                    if (typeof ae.componentWillUnmount == "function") {
                      o = H, l = H.return;
                      try {
                        r = o, ae.props = r.memoizedProps, ae.state = r.memoizedState, ae.componentWillUnmount();
                      } catch (ce) {
                        $t(o, l, ce);
                      }
                    }
                    break;
                  case 5:
                    ku(H, H.return);
                    break;
                  case 22:
                    if (H.memoizedState !== null) {
                      Bv(V);
                      continue;
                    }
                }
                K !== null ? (K.return = H, ne = K) : Bv(V);
              }
              F = F.sibling;
            }
          e:
            for (F = null, V = n; ; ) {
              if (V.tag === 5) {
                if (F === null) {
                  F = V;
                  try {
                    c = V.stateNode, O ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = V.stateNode, C = V.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = He("display", h));
                  } catch (ce) {
                    $t(n, n.return, ce);
                  }
                }
              } else if (V.tag === 6) {
                if (F === null)
                  try {
                    V.stateNode.nodeValue = O ? "" : V.memoizedProps;
                  } catch (ce) {
                    $t(n, n.return, ce);
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
                F === V && (F = null), V = V.return;
              }
              F === V && (F = null), V.sibling.return = V.return, V = V.sibling;
            }
        }
        break;
      case 19:
        En(r, n), $a(n), o & 4 && Nu(n);
        break;
      case 21:
        break;
      default:
        En(
          r,
          n
        ), $a(n);
    }
  }
  function $a(n) {
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
          throw Error(M(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Ta(c, ""), o.flags &= -33);
            var d = jv(n);
            Lu(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = jv(n);
            Yo(n, S, h);
            break;
          default:
            throw Error(M(161));
        }
      } catch (C) {
        $t(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function iy(n, r, l) {
    ne = n, pd(n);
  }
  function pd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ne !== null; ) {
      var c = ne, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || _u;
        if (!h) {
          var S = c.alternate, C = S !== null && S.memoizedState !== null || On;
          S = _u;
          var O = On;
          if (_u = h, (On = C) && !O)
            for (ne = c; ne !== null; )
              h = ne, C = h.child, h.tag === 22 && h.memoizedState !== null ? vd(c) : C !== null ? (C.return = h, ne = C) : vd(c);
          for (; d !== null; )
            ne = d, pd(d), d = d.sibling;
          ne = c, _u = S, On = O;
        }
        zu(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, ne = d) : zu(n);
    }
  }
  function zu(n) {
    for (; ne !== null; ) {
      var r = ne;
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
                  var O = r.alternate;
                  if (O !== null) {
                    var F = O.memoizedState;
                    if (F !== null) {
                      var V = F.dehydrated;
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
                throw Error(M(163));
            }
          On || r.flags & 512 && Cc(r);
        } catch (H) {
          $t(r, r.return, H);
        }
      }
      if (r === n) {
        ne = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ne = l;
        break;
      }
      ne = r.return;
    }
  }
  function Bv(n) {
    for (; ne !== null; ) {
      var r = ne;
      if (r === n) {
        ne = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ne = l;
        break;
      }
      ne = r.return;
    }
  }
  function vd(n) {
    for (; ne !== null; ) {
      var r = ne;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ec(4, r);
            } catch (C) {
              $t(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                $t(r, c, C);
              }
            }
            var d = r.return;
            try {
              Cc(r);
            } catch (C) {
              $t(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              Cc(r);
            } catch (C) {
              $t(r, h, C);
            }
        }
      } catch (C) {
        $t(r, r.return, C);
      }
      if (r === n) {
        ne = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, ne = S;
        break;
      }
      ne = r.return;
    }
  }
  var ly = Math.ceil, Ll = yt.ReactCurrentDispatcher, Tc = yt.ReactCurrentOwner, oa = yt.ReactCurrentBatchConfig, Ye = 0, Yt = null, Ot = null, un = 0, Tr = 0, Uu = ze(0), on = 0, $o = null, Ml = 0, Au = 0, hd = 0, Ii = null, Xn = null, Rc = 0, Hu = 1 / 0, vi = null, xc = !1, md = null, sa = null, Fu = !1, ca = null, wc = 0, Qo = 0, Dc = null, Io = -1, Nl = 0;
  function Cn() {
    return Ye & 6 ? lt() : Io !== -1 ? Io : Io = lt();
  }
  function hi(n) {
    return n.mode & 1 ? Ye & 2 && un !== 0 ? un & -un : $s.transition !== null ? (Nl === 0 && (Nl = Es()), Nl) : (n = ct, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Tf(n.type)), n) : 1;
  }
  function Ft(n, r, l, o) {
    if (50 < Qo)
      throw Qo = 0, Dc = null, Error(M(185));
    fl(n, l, o), (!(Ye & 2) || n !== Yt) && (n === Yt && (!(Ye & 2) && (Au |= l), on === 4 && Qa(n, un)), sn(n, o), l === 1 && Ye === 0 && !(r.mode & 1) && (Hu = lt() + 500, gn && vr()));
  }
  function sn(n, r) {
    var l = n.callbackNode;
    Ss(n, r);
    var o = wa(n, n === Yt ? un : 0);
    if (o === 0)
      l !== null && At(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && At(l), r === 1)
        n.tag === 0 ? Gf(ju.bind(null, n)) : Wf(ju.bind(null, n)), $f(function() {
          !(Ye & 6) && vr();
        }), l = null;
      else {
        switch (Sf(o)) {
          case 1:
            l = Nr;
            break;
          case 4:
            l = je;
            break;
          case 16:
            l = ja;
            break;
          case 536870912:
            l = hf;
            break;
          default:
            l = ja;
        }
        l = Xv(l, bc.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function bc(n, r) {
    if (Io = -1, Nl = 0, Ye & 6)
      throw Error(M(327));
    var l = n.callbackNode;
    if (Vu() && n.callbackNode !== l)
      return null;
    var o = wa(n, n === Yt ? un : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = kc(n, o);
    else {
      r = o;
      var c = Ye;
      Ye |= 2;
      var d = Yv();
      (Yt !== n || un !== r) && (vi = null, Hu = lt() + 500, Ul(n, r));
      do
        try {
          oy();
          break;
        } catch (S) {
          Pv(n, S);
        }
      while (!0);
      Fr(), Ll.current = d, Ye = c, Ot !== null ? r = 0 : (Yt = null, un = 0, r = on);
    }
    if (r !== 0) {
      if (r === 2 && (c = yf(n), c !== 0 && (o = c, r = zl(n, c))), r === 1)
        throw l = $o, Ul(n, 0), Qa(n, o), sn(n, lt()), l;
      if (r === 6)
        Qa(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !gd(c) && (r = kc(n, o), r === 2 && (d = yf(n), d !== 0 && (o = d, r = zl(n, d))), r === 1))
          throw l = $o, Ul(n, 0), Qa(n, o), sn(n, lt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(M(345));
          case 2:
            Wi(n, Xn, vi);
            break;
          case 3:
            if (Qa(n, o), (o & 130023424) === o && (r = Rc + 500 - lt(), 10 < r)) {
              if (wa(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Cn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = gl(Wi.bind(null, n, Xn, vi), r);
              break;
            }
            Wi(n, Xn, vi);
            break;
          case 4:
            if (Qa(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - Xr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = lt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * ly(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = gl(Wi.bind(null, n, Xn, vi), o);
              break;
            }
            Wi(n, Xn, vi);
            break;
          case 5:
            Wi(n, Xn, vi);
            break;
          default:
            throw Error(M(329));
        }
      }
    }
    return sn(n, lt()), n.callbackNode === l ? bc.bind(null, n) : null;
  }
  function zl(n, r) {
    var l = Ii;
    return n.current.memoizedState.isDehydrated && (Ul(n, r).flags |= 256), n = kc(n, r), n !== 2 && (r = Xn, Xn = l, r !== null && yd(r)), n;
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
      throw Error(M(327));
    Vu();
    var r = wa(n, 0);
    if (!(r & 1))
      return sn(n, lt()), null;
    var l = kc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = yf(n);
      o !== 0 && (r = o, l = zl(n, o));
    }
    if (l === 1)
      throw l = $o, Ul(n, 0), Qa(n, r), sn(n, lt()), l;
    if (l === 6)
      throw Error(M(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Wi(n, Xn, vi), sn(n, lt()), null;
  }
  function Sd(n, r) {
    var l = Ye;
    Ye |= 1;
    try {
      return n(r);
    } finally {
      Ye = l, Ye === 0 && (Hu = lt() + 500, gn && vr());
    }
  }
  function Ia(n) {
    ca !== null && ca.tag === 0 && !(Ye & 6) && Vu();
    var r = Ye;
    Ye |= 1;
    var l = oa.transition, o = ct;
    try {
      if (oa.transition = null, ct = 1, n)
        return n();
    } finally {
      ct = o, oa.transition = l, Ye = r, !(Ye & 6) && vr();
    }
  }
  function _c() {
    Tr = Uu.current, it(Uu);
  }
  function Ul(n, r) {
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
            yu(), it(Bt), it(De), rd();
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
            _c();
        }
        l = l.return;
      }
    if (Yt = n, Ot = n = Gi(n.current, null), un = Tr = r, on = 0, $o = null, hd = Au = Ml = 0, Xn = Ii = null, Tl !== null) {
      for (r = 0; r < Tl.length; r++)
        if (l = Tl[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var h = d.next;
            d.next = c, o.next = h;
          }
          l.pending = o;
        }
      Tl = null;
    }
    return n;
  }
  function Pv(n, r) {
    do {
      var l = Ot;
      try {
        if (Fr(), Ks.current = Wn, jr) {
          for (var o = pe.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          jr = !1;
        }
        if (fe = 0, Ve = be = pe = null, gu = !1, zo = 0, Tc.current = null, l === null || l.return === null) {
          on = 1, $o = r, Ot = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = un, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var O = C, F = S, V = F.tag;
            if (!(F.mode & 1) && (V === 0 || V === 11 || V === 15)) {
              var H = F.alternate;
              H ? (F.updateQueue = H.updateQueue, F.memoizedState = H.memoizedState, F.lanes = H.lanes) : (F.updateQueue = null, F.memoizedState = null);
            }
            var K = Nv(h);
            if (K !== null) {
              K.flags &= -257, od(K, h, S, d, r), K.mode & 1 && jo(d, O, r), r = K, C = O;
              var ae = r.updateQueue;
              if (ae === null) {
                var ce = /* @__PURE__ */ new Set();
                ce.add(C), r.updateQueue = ce;
              } else
                ae.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                jo(d, O, r), Wo();
                break e;
              }
              C = Error(M(426));
            }
          } else if (kt && S.mode & 1) {
            var Gt = Nv(h);
            if (Gt !== null) {
              !(Gt.flags & 65536) && (Gt.flags |= 256), od(Gt, h, S, d, r), Zf($i(C, S));
              break e;
            }
          }
          d = C = $i(C, S), on !== 4 && (on = 2), Ii === null ? Ii = [d] : Ii.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var w = Lv(d, C, r);
                Rv(d, w);
                break e;
              case 1:
                S = C;
                var R = d.type, _ = d.stateNode;
                if (!(d.flags & 128) && (typeof R.getDerivedStateFromError == "function" || _ !== null && typeof _.componentDidCatch == "function" && (sa === null || !sa.has(_)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var P = Mv(d, S, r);
                  Rv(d, P);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Qv(l);
      } catch (de) {
        r = de, Ot === l && l !== null && (Ot = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Yv() {
    var n = Ll.current;
    return Ll.current = Wn, n === null ? Wn : n;
  }
  function Wo() {
    (on === 0 || on === 3 || on === 2) && (on = 4), Yt === null || !(Ml & 268435455) && !(Au & 268435455) || Qa(Yt, un);
  }
  function kc(n, r) {
    var l = Ye;
    Ye |= 2;
    var o = Yv();
    (Yt !== n || un !== r) && (vi = null, Ul(n, r));
    do
      try {
        uy();
        break;
      } catch (c) {
        Pv(n, c);
      }
    while (!0);
    if (Fr(), Ye = l, Ll.current = o, Ot !== null)
      throw Error(M(261));
    return Yt = null, un = 0, on;
  }
  function uy() {
    for (; Ot !== null; )
      $v(Ot);
  }
  function oy() {
    for (; Ot !== null && !fr(); )
      $v(Ot);
  }
  function $v(n) {
    var r = Gv(n.alternate, n, Tr);
    n.memoizedProps = n.pendingProps, r === null ? Qv(n) : Ot = r, Tc.current = null;
  }
  function Qv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ry(l, r), l !== null) {
          l.flags &= 32767, Ot = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          on = 6, Ot = null;
          return;
        }
      } else if (l = ny(l, r, Tr), l !== null) {
        Ot = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Ot = r;
        return;
      }
      Ot = r = n;
    } while (r !== null);
    on === 0 && (on = 5);
  }
  function Wi(n, r, l) {
    var o = ct, c = oa.transition;
    try {
      oa.transition = null, ct = 1, sy(n, r, l, o);
    } finally {
      oa.transition = c, ct = o;
    }
    return null;
  }
  function sy(n, r, l, o) {
    do
      Vu();
    while (ca !== null);
    if (Ye & 6)
      throw Error(M(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(M(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (zm(n, d), n === Yt && (Ot = Yt = null, un = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Fu || (Fu = !0, Xv(ja, function() {
      return Vu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = oa.transition, oa.transition = null;
      var h = ct;
      ct = 1;
      var S = Ye;
      Ye |= 4, Tc.current = null, ay(n, l), Vv(l, n), Ns(yl), dl = !!Pf, yl = Pf = null, n.current = l, iy(l), Li(), Ye = S, ct = h, oa.transition = d;
    } else
      n.current = l;
    if (Fu && (Fu = !1, ca = n, wc = c), d = n.pendingLanes, d === 0 && (sa = null), kp(l.stateNode), sn(n, lt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (xc)
      throw xc = !1, n = md, md = null, n;
    return wc & 1 && n.tag !== 0 && Vu(), d = n.pendingLanes, d & 1 ? n === Dc ? Qo++ : (Qo = 0, Dc = n) : Qo = 0, vr(), null;
  }
  function Vu() {
    if (ca !== null) {
      var n = Sf(wc), r = oa.transition, l = ct;
      try {
        if (oa.transition = null, ct = 16 > n ? 16 : n, ca === null)
          var o = !1;
        else {
          if (n = ca, ca = null, wc = 0, Ye & 6)
            throw Error(M(331));
          var c = Ye;
          for (Ye |= 4, ne = n.current; ne !== null; ) {
            var d = ne, h = d.child;
            if (ne.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var O = S[C];
                  for (ne = O; ne !== null; ) {
                    var F = ne;
                    switch (F.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ou(8, F, d);
                    }
                    var V = F.child;
                    if (V !== null)
                      V.return = F, ne = V;
                    else
                      for (; ne !== null; ) {
                        F = ne;
                        var H = F.sibling, K = F.return;
                        if (Fv(F), F === O) {
                          ne = null;
                          break;
                        }
                        if (H !== null) {
                          H.return = K, ne = H;
                          break;
                        }
                        ne = K;
                      }
                  }
                }
                var ae = d.alternate;
                if (ae !== null) {
                  var ce = ae.child;
                  if (ce !== null) {
                    ae.child = null;
                    do {
                      var Gt = ce.sibling;
                      ce.sibling = null, ce = Gt;
                    } while (ce !== null);
                  }
                }
                ne = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null)
              h.return = d, ne = h;
            else
              e:
                for (; ne !== null; ) {
                  if (d = ne, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ou(9, d, d.return);
                    }
                  var w = d.sibling;
                  if (w !== null) {
                    w.return = d.return, ne = w;
                    break e;
                  }
                  ne = d.return;
                }
          }
          var R = n.current;
          for (ne = R; ne !== null; ) {
            h = ne;
            var _ = h.child;
            if (h.subtreeFlags & 2064 && _ !== null)
              _.return = h, ne = _;
            else
              e:
                for (h = R; ne !== null; ) {
                  if (S = ne, S.flags & 2048)
                    try {
                      switch (S.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ec(9, S);
                      }
                    } catch (de) {
                      $t(S, S.return, de);
                    }
                  if (S === h) {
                    ne = null;
                    break e;
                  }
                  var P = S.sibling;
                  if (P !== null) {
                    P.return = S.return, ne = P;
                    break e;
                  }
                  ne = S.return;
                }
          }
          if (Ye = c, vr(), xa && typeof xa.onPostCommitFiberRoot == "function")
            try {
              xa.onPostCommitFiberRoot(lo, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        ct = l, oa.transition = r;
      }
    }
    return !1;
  }
  function Iv(n, r, l) {
    r = $i(l, r), r = Lv(n, r, 1), n = Pi(n, r, 1), r = Cn(), n !== null && (fl(n, 1, r), sn(n, r));
  }
  function $t(n, r, l) {
    if (n.tag === 3)
      Iv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Iv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (sa === null || !sa.has(o))) {
            n = $i(l, n), n = Mv(r, n, 1), r = Pi(r, n, 1), n = Cn(), r !== null && (fl(r, 1, n), sn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function cy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Cn(), n.pingedLanes |= n.suspendedLanes & l, Yt === n && (un & l) === l && (on === 4 || on === 3 && (un & 130023424) === un && 500 > lt() - Rc ? Ul(n, 0) : hd |= l), sn(n, r);
  }
  function Wv(n, r) {
    r === 0 && (n.mode & 1 ? (r = eu, eu <<= 1, !(eu & 130023424) && (eu = 4194304)) : r = 1);
    var l = Cn();
    n = fi(n, r), n !== null && (fl(n, r, l), sn(n, l));
  }
  function Ed(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Wv(n, l);
  }
  function fy(n, r) {
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
        throw Error(M(314));
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
          return Er = !1, pi(n, r, l);
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
        var d = tn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Mt(o) ? (d = !0, js(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Is(r), c.updater = _l, r.stateNode = c, c._reactInternals = r, ld(r, o, n, l), r = vc(null, r, o, !0, d, l)) : (r.tag = 0, kt && d && Vs(r), It(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Po(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = dy(o), n = Sr(o, n), c) {
            case 0:
              r = Ne(null, r, o, n, l);
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
          throw Error(M(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Sr(o, c), Ne(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Sr(o, c), Vo(n, r, o, c, l);
      case 3:
        e: {
          if (ty(r), n === null)
            throw Error(M(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, hu(n, r), Gs(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = $i(Error(M(423)), r), r = Uv(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = $i(Error(M(424)), r), r = Uv(n, r, o, l, c);
              break e;
            } else
              for (yr = ka(r.stateNode.containerInfo.firstChild), Hr = r, kt = !0, ra = null, l = Cv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ht(), o === c) {
              r = Wt(n, r, l);
              break e;
            }
            It(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return wv(r), n === null && Ps(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, Do(o, c) ? h = null : d !== null && Do(o, d) && (r.flags |= 32), kl(n, r), It(n, r, h, l), r.child;
      case 6:
        return n === null && Ps(r), null;
      case 13:
        return Av(n, r, l);
      case 4:
        return td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = pu(r, null, o, l) : It(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Sr(o, c), wu(n, r, o, c, l);
      case 7:
        return It(n, r, r.pendingProps, l), r.child;
      case 8:
        return It(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return It(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, ut(ci, o._currentValue), o._currentValue = h, d !== null)
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
                        var O = d.updateQueue;
                        if (O !== null) {
                          O = O.shared;
                          var F = O.pending;
                          F === null ? C.next = C : (C.next = F.next, F.next = C), O.pending = C;
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
                    throw Error(M(341));
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
          It(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, vu(r, l), c = ia(c), o = o(c), r.flags |= 1, It(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Sr(o, r.pendingProps), c = Sr(o.type, c), Qi(n, r, o, c, l);
      case 15:
        return pc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Sr(o, c), Po(n, r), r.tag = 1, Mt(o) ? (n = !0, js(r)) : n = !1, vu(r, l), _v(r, o, c), ld(r, o, c, l), vc(null, r, o, !0, n, l);
      case 19:
        return cd(n, r, l);
      case 22:
        return Cr(n, r, l);
    }
    throw Error(M(156, r.tag));
  };
  function Xv(n, r) {
    return bt(n, r);
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
  function dy(n) {
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
  function Gi(n, r) {
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
          case Ae:
            return Al(l.children, c, d, r);
          case Rn:
            h = 8, c |= 8;
            break;
          case jn:
            return n = fa(12, l, r, c | 2), n.elementType = jn, n.lanes = d, n;
          case _e:
            return n = fa(13, l, r, c), n.elementType = _e, n.lanes = d, n;
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
                case dt:
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
            throw Error(M(130, n == null ? n : typeof n, ""));
        }
    return r = fa(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Al(n, r, l, o) {
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
    return n = new Xo(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = fa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Is(d), n;
  }
  function Kv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: wt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Rd(n) {
    if (!n)
      return Ba;
    n = n._reactInternals;
    e: {
      if (he(n) !== n || n.tag !== 1)
        throw Error(M(170));
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
      throw Error(M(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Mt(l))
        return ko(n, l, r);
    }
    return r;
  }
  function xd(n, r, l, o, c, d, h, S, C) {
    return n = Td(l, o, !0, n, c, d, h, S, C), n.context = Rd(null), l = n.current, o = Cn(), c = hi(l), d = gr(o, c), d.callback = r ?? null, Pi(l, d, c), n.current.lanes = c, fl(n, c, o), sn(n, o), n;
  }
  function Nc(n, r, l, o) {
    var c = r.current, d = Cn(), h = hi(c);
    return l = Rd(l), r.context === null ? r.context = l : r.pendingContext = l, r = gr(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Pi(c, r, h), n !== null && (Ft(n, c, h, d), Ws(n, c, h)), h;
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
  function py() {
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
      throw Error(M(409));
    Nc(n, r, null, null);
  }, Ko.prototype.unmount = zc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ia(function() {
        Nc(null, n, null, null);
      }), r[oi] = null;
    }
  };
  function Ko(n) {
    this._internalRoot = n;
  }
  Ko.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Np();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < pt.length && r !== 0 && r < pt[l].priority; l++)
        ;
      pt.splice(l, 0, n), l === 0 && zp(n);
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
  function vy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var O = qo(h);
          d.call(O);
        };
      }
      var h = xd(r, o, n, 0, null, !1, !1, "", Jv);
      return n._reactRootContainer = h, n[oi] = h.current, cu(n.nodeType === 8 ? n.parentNode : n), Ia(), h;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var O = qo(C);
        S.call(O);
      };
    }
    var C = Td(n, 0, !1, null, null, !1, !1, "", Jv);
    return n._reactRootContainer = C, n[oi] = C.current, cu(n.nodeType === 8 ? n.parentNode : n), Ia(function() {
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
      h = vy(l, r, n, c, o);
    return qo(h);
  }
  Mp = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = cl(r.pendingLanes);
          l !== 0 && (uo(r, l | 1), sn(r, lt()), !(Ye & 6) && (Hu = lt() + 500, vr()));
        }
        break;
      case 13:
        Ia(function() {
          var o = fi(n, 1);
          if (o !== null) {
            var c = Cn();
            Ft(o, n, 1, c);
          }
        }), wd(n, 1);
    }
  }, Cs = function(n) {
    if (n.tag === 13) {
      var r = fi(n, 134217728);
      if (r !== null) {
        var l = Cn();
        Ft(r, n, 134217728, l);
      }
      wd(n, 134217728);
    }
  }, ft = function(n) {
    if (n.tag === 13) {
      var r = hi(n), l = fi(n, r);
      if (l !== null) {
        var o = Cn();
        Ft(l, n, r, o);
      }
      wd(n, r);
    }
  }, Np = function() {
    return ct;
  }, Ef = function(n, r) {
    var l = ct;
    try {
      return ct = n, r();
    } finally {
      ct = l;
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
              var c = ge(o);
              if (!c)
                throw Error(M(90));
              Wr(o), Pn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ha(n, l);
        break;
      case "select":
        r = l.value, r != null && Aa(n, !!l.multiple, r, !1);
    }
  }, io = Sd, ys = Ia;
  var hy = { usingClientEntryPoint: !1, Events: [_o, fu, ge, ll, Kl, Sd] }, Zo = { findFiberByHostInstance: Jr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, eh = { bundleType: Zo.bundleType, version: Zo.version, rendererPackageName: Zo.rendererPackageName, rendererConfig: Zo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Fe(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Zo.findFiberByHostInstance || py, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hc.isDisabled && Hc.supportsFiber)
      try {
        lo = Hc.inject(eh), xa = Hc;
      } catch {
      }
  }
  return ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hy, ya.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xi(r))
      throw Error(M(200));
    return Kv(n, r, null, l);
  }, ya.createRoot = function(n, r) {
    if (!Xi(n))
      throw Error(M(299));
    var l = !1, o = "", c = Dd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Td(n, 1, !1, null, null, l, !1, o, c), n[oi] = r.current, cu(n.nodeType === 8 ? n.parentNode : n), new zc(r);
  }, ya.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(M(188)) : (n = Object.keys(n).join(","), Error(M(268, n)));
    return n = Fe(r), n = n === null ? null : n.stateNode, n;
  }, ya.flushSync = function(n) {
    return Ia(n);
  }, ya.hydrate = function(n, r, l) {
    if (!Uc(r))
      throw Error(M(200));
    return Ac(null, n, r, !0, l);
  }, ya.hydrateRoot = function(n, r, l) {
    if (!Xi(n))
      throw Error(M(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = Dd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = xd(r, null, n, 1, l ?? null, c, !1, d, h), n[oi] = r.current, cu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Ko(r);
  }, ya.render = function(n, r, l) {
    if (!Uc(r))
      throw Error(M(200));
    return Ac(null, n, r, !1, l);
  }, ya.unmountComponentAtNode = function(n) {
    if (!Uc(n))
      throw Error(M(40));
    return n._reactRootContainer ? (Ia(function() {
      Ac(null, null, n, !1, function() {
        n._reactRootContainer = null, n[oi] = null;
      });
    }), !0) : !1;
  }, ya.unstable_batchedUpdates = Sd, ya.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Uc(l))
      throw Error(M(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(M(38));
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
var Z1;
function Jb() {
  return Z1 || (Z1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var J = Mm, xe = eT(), M = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, mt = !1;
    function Rt(e) {
      mt = e;
    }
    function Oe(e) {
      if (!mt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        xt("warn", e, a);
      }
    }
    function g(e) {
      if (!mt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        xt("error", e, a);
      }
    }
    function xt(e, t, a) {
      {
        var i = M.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var se = 0, ue = 1, qe = 2, q = 3, oe = 4, re = 5, Ue = 6, rt = 7, Ze = 8, qt = 9, Ke = 10, Be = 11, yt = 12, Pe = 13, wt = 14, Ae = 15, Rn = 16, jn = 17, Vt = 18, dt = 19, xn = 21, _e = 22, Qe = 23, dn = 24, Dt = 25, qn = !0, Y = !1, Ee = !1, ee = !1, Je = !1, at = !0, wn = !1, Kn = !0, za = !0, rn = !0, Ir = !0, Vn = /* @__PURE__ */ new Set(), or = {}, Ua = {};
    function sr(e, t) {
      Wr(e, t), Wr(e + "Capture", t);
    }
    function Wr(e, t) {
      or[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), or[e] = t;
      {
        var a = e.toLowerCase();
        Ua[a] = e, e === "onDoubleClick" && (Ua.ondblclick = e);
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
    function bn(e) {
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
      if (bn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Pn(e);
    }
    function Sa(e) {
      if (bn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dn(e)), Pn(e);
    }
    function ei(e, t) {
      if (bn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Pn(e);
    }
    function Aa(e, t) {
      if (bn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Pn(e);
    }
    function Ea(e) {
      if (bn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Dn(e)), Pn(e);
    }
    function _r(e) {
      if (bn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Dn(e)), Pn(e);
    }
    var Ha = 0, kr = 1, Ca = 2, Kt = 3, Or = 4, ki = 5, Ta = 6, W = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ye = W + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", He = new RegExp("^[" + W + "][" + ye + "]*$"), st = {}, Ut = {};
    function vn(e) {
      return Bn.call(Ut, e) ? !0 : Bn.call(st, e) ? !1 : He.test(e) ? (Ut[e] = !0, !0) : (st[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Qt(e, t, a) {
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
    function Et(e, t, a, i) {
      if (t === null || typeof t > "u" || cr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Kt:
            return !t;
          case Or:
            return t === !1;
          case ki:
            return isNaN(t);
          case Ta:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Lr(e) {
      return Ct.hasOwnProperty(e) ? Ct[e] : null;
    }
    function gt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ca || t === Kt || t === Or, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ct = {}, ql = [
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
      Ct[e] = new gt(
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
      Ct[t] = new gt(
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
      Ct[e] = new gt(
        e,
        Ca,
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
      Ct[e] = new gt(
        e,
        Ca,
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
      Ct[e] = new gt(
        e,
        Kt,
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
      Ct[e] = new gt(
        e,
        Kt,
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
      Ct[e] = new gt(
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
      Ct[e] = new gt(
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
    }), ["rowSpan", "start"].forEach(function(e) {
      Ct[e] = new gt(
        e,
        ki,
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
    var ll = /[\-\:]([a-z])/g, Kl = function(e) {
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
      var t = e.replace(ll, Kl);
      Ct[t] = new gt(
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
      var t = e.replace(ll, Kl);
      Ct[t] = new gt(
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
      var t = e.replace(ll, Kl);
      Ct[t] = new gt(
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
      Ct[e] = new gt(
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
    Ct[io] = new gt(
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
      Ct[e] = new gt(
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
    var ys = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ul = !1;
    function Zl(e) {
      !ul && ys.test(e) && (ul = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ol(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Gr(a, t), i.sanitizeURL && Zl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Or) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Et(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Et(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Kt)
            return a;
          f = e.getAttribute(s);
        }
        return Et(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
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
    function Fa(e, t, a, i) {
      var u = Lr(t);
      if (!Qt(t, u, i)) {
        if (Et(t, a, u, i) && (a = null), i || u === null) {
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
            e[p] = v === Kt ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var x = u.type, T;
          x === Kt || x === Or && a === !0 ? T = "" : (Gr(a, m), T = "" + a, u.sanitizeURL && Zl(T.toString())), y ? e.setAttributeNS(y, m, T) : e.setAttribute(m, T);
        }
      }
    }
    var ti = Symbol.for("react.element"), Mr = Symbol.for("react.portal"), Ra = Symbol.for("react.fragment"), Oi = Symbol.for("react.strict_mode"), sl = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), j = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), Ie = Symbol.for("react.suspense_list"), Xe = Symbol.for("react.memo"), Re = Symbol.for("react.lazy"), Fe = Symbol.for("react.scope"), hn = Symbol.for("react.debug_trace_mode"), bt = Symbol.for("react.offscreen"), At = Symbol.for("react.legacy_hidden"), fr = Symbol.for("react.cache"), Li = Symbol.for("react.tracing_marker"), lt = Symbol.iterator, Yn = "@@iterator";
    function Nr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = lt && e[lt] || e[Yn];
      return typeof t == "function" ? t : null;
    }
    var je = Object.assign, ja = 0, _p, hf, lo, xa, kp, Xr, Op;
    function Lp() {
    }
    Lp.__reactDisabledLog = !0;
    function Nm() {
      {
        if (ja === 0) {
          _p = console.log, hf = console.info, lo = console.warn, xa = console.error, kp = console.group, Xr = console.groupCollapsed, Op = console.groupEnd;
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
        ja++;
      }
    }
    function gs() {
      {
        if (ja--, ja === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: je({}, e, {
              value: _p
            }),
            info: je({}, e, {
              value: hf
            }),
            warn: je({}, e, {
              value: lo
            }),
            error: je({}, e, {
              value: xa
            }),
            group: je({}, e, {
              value: kp
            }),
            groupCollapsed: je({}, e, {
              value: Xr
            }),
            groupEnd: je({}, e, {
              value: Op
            })
          });
        }
        ja < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var eu = M.ReactCurrentDispatcher, cl;
    function wa(e, t, a) {
      {
        if (cl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            cl = i && i[1] || "";
          }
        return `
` + cl + e;
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
      s = eu.current, eu.current = null, Nm();
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
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && Ss.set(e, x), x;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        mf = !1, eu.current = s, gs(), Error.prepareStackTrace = u;
      }
      var T = e ? e.displayName || e.name : "", k = T ? wa(T) : "";
      return typeof e == "function" && Ss.set(e, k), k;
    }
    function gf(e, t, a) {
      return Es(e, !0);
    }
    function fl(e, t, a) {
      return Es(e, !1);
    }
    function zm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function uo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Es(e, zm(e));
      if (typeof e == "string")
        return wa(e);
      switch (e) {
        case he:
          return wa("Suspense");
        case Ie:
          return wa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $:
            return fl(e.render);
          case Xe:
            return uo(e.type, t, a);
          case Re: {
            var i = e, u = i._payload, s = i._init;
            try {
              return uo(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ct(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case re:
          return wa(e.type);
        case Rn:
          return wa("Lazy");
        case Pe:
          return wa("Suspense");
        case dt:
          return wa("SuspenseList");
        case se:
        case qe:
        case Ae:
          return fl(e.type);
        case Be:
          return fl(e.type.render);
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
          t += ct(a), a = a.return;
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
    function ft(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ra:
          return "Fragment";
        case Mr:
          return "Portal";
        case sl:
          return "Profiler";
        case Oi:
          return "StrictMode";
        case he:
          return "Suspense";
        case Ie:
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
          case $:
            return Mp(e, e.render, "ForwardRef");
          case Xe:
            var i = e.displayName || null;
            return i !== null ? i : ft(e.type) || "Memo";
          case Re: {
            var u = e, s = u._payload, f = u._init;
            try {
              return ft(f(s));
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
        case qt:
          var i = a;
          return Ef(i) + ".Consumer";
        case Ke:
          var u = a;
          return Ef(u._context) + ".Provider";
        case Vt:
          return "DehydratedFragment";
        case Be:
          return Np(a, a.render, "ForwardRef");
        case rt:
          return "Fragment";
        case re:
          return a;
        case oe:
          return "Portal";
        case q:
          return "Root";
        case Ue:
          return "Text";
        case Rn:
          return ft(a);
        case Ze:
          return a === Oi ? "StrictMode" : "Mode";
        case _e:
          return "Offscreen";
        case yt:
          return "Profiler";
        case xn:
          return "Scope";
        case Pe:
          return "Suspense";
        case dt:
          return "SuspenseList";
        case Dt:
          return "TracingMarker";
        case ue:
        case se:
        case jn:
        case qe:
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
    var oo = M.ReactDebugCurrentFrame, Zt = null, qr = !1;
    function Kr() {
      {
        if (Zt === null)
          return null;
        var e = Zt._debugOwner;
        if (e !== null && typeof e < "u")
          return Me(e);
      }
      return null;
    }
    function so() {
      return Zt === null ? "" : Sf(Zt);
    }
    function an() {
      oo.getCurrentStack = null, Zt = null, qr = !1;
    }
    function pt(e) {
      oo.getCurrentStack = e === null ? null : so, Zt = e, qr = !1;
    }
    function Um() {
      return Zt;
    }
    function Da(e) {
      qr = e;
    }
    function $n(e) {
      return "" + e;
    }
    function Mi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return _r(e), e;
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
      _r(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            _r(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            _r(p), i = "" + p;
          },
          stopTracking: function() {
            co(e), delete e[t];
          }
        };
        return f;
      }
    }
    function dl(e) {
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
    function ni(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function vo(e, t) {
      var a = e, i = t.checked, u = je({}, t, {
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
        initialValue: Mi(t.value != null ? t.value : i),
        controlled: ni(t)
      };
    }
    function Rf(e, t) {
      var a = e, i = t.checked;
      i != null && Fa(a, "checked", i, !1);
    }
    function ru(e, t) {
      var a = e;
      {
        var i = ni(t);
        !a._wrapperState.controlled && i && !Tf && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Tf = !0), a._wrapperState.controlled && !i && !xs && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), xs = !0);
      }
      Rf(e, t);
      var u = Mi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = $n(u)) : a.value !== $n(u) && (a.value = $n(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ni(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ni(a, t.type, Mi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function mo(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = $n(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Hp(e, t) {
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
    function Ni(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ts(e.ownerDocument) !== e) && (a == null ? e.defaultValue = $n(e._wrapperState.initialValue) : e.defaultValue !== $n(a) && (e.defaultValue = $n(a)));
    }
    var ws = !1, au = !1, Fp = !1;
    function Ds(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? J.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || au || (au = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Fp || (Fp = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ws && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ws = !0);
    }
    function xf(e, t) {
      t.value != null && e.setAttribute("value", $n(Mi(t.value)));
    }
    var yo = Array.isArray;
    function mn(e) {
      return yo(e);
    }
    var bs;
    bs = !1;
    function jp() {
      var e = Kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Vp = ["value", "defaultValue"];
    function Am(e) {
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
    function zi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var y = $n(Mi(a)), x = null, T = 0; T < u.length; T++) {
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
      return je({}, t, {
        value: void 0
      });
    }
    function Bp(e, t) {
      var a = e;
      Am(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !bs && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), bs = !0);
    }
    function Hm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? zi(a, !!t.multiple, i, !1) : t.defaultValue != null && zi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Fm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? zi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? zi(a, !!t.multiple, t.defaultValue, !0) : zi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function jm(e, t) {
      var a = e, i = t.value;
      i != null && zi(a, !!t.multiple, i, !1);
    }
    var Df = !1;
    function bf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = je({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: $n(a._wrapperState.initialValue)
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
        initialValue: Mi(i)
      };
    }
    function Yp(e, t) {
      var a = e, i = Mi(t.value), u = Mi(t.defaultValue);
      if (i != null) {
        var s = $n(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = $n(u));
    }
    function $p(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function _f(e, t) {
      Yp(e, t);
    }
    var ri = "http://www.w3.org/1999/xhtml", Vm = "http://www.w3.org/1998/Math/MathML", kf = "http://www.w3.org/2000/svg";
    function _s(e) {
      switch (e) {
        case "svg":
          return kf;
        case "math":
          return Vm;
        default:
          return ri;
      }
    }
    function Of(e, t) {
      return e == null || e === ri ? _s(t) : e === kf && t === "foreignObject" ? ri : e;
    }
    var Bm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, ks, Qp = Bm(function(e, t) {
      if (e.namespaceURI === kf && !("innerHTML" in e)) {
        ks = ks || document.createElement("div"), ks.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ks.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), dr = 1, ai = 3, Jt = 8, ba = 9, pl = 11, Os = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ai) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Ip = {
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
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(iu.hasOwnProperty(e) && iu[e]) ? t + "px" : (Aa(t, e), ("" + t).trim());
    }
    var lu = /([A-Z])/g, Pm = /^ms-/;
    function Ym(e) {
      return e.replace(lu, "-$1").toLowerCase().replace(Pm, "-ms-");
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
      }, $m = function(e, t) {
        Lf || (Lf = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Xp = function(e, t) {
        e.indexOf("-") > -1 ? Nf(e) : qp.test(e) ? Jp(e) : uu.test(t) && ev(e, t), typeof t == "number" && (isNaN(t) ? tv(e, t) : isFinite(t) || $m(e, t));
      };
    }
    var Qm = Xp;
    function Im(e) {
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
    function Wm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Zr(e) {
      var t = {};
      for (var a in e)
        for (var i = Ip[a] || [a], u = 0; u < i.length; u++)
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
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Wm(e[f]) ? "Removing" : "Updating", f, p);
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
    }, av = je({
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
    function ii(e, t) {
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
    }, _a = {}, zf = new RegExp("^(aria)-[" + ye + "]*$"), Eo = new RegExp("^(aria)[A-Z][" + ye + "]*$");
    function Uf(e, t) {
      {
        if (Bn.call(_a, t) && _a[t])
          return !0;
        if (Eo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = lv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), _a[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), _a[t] = !0, !0;
        }
        if (zf.test(t)) {
          var u = t.toLowerCase(), s = lv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return _a[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), _a[t] = !0, !0;
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
      ii(e, t) || uv(e, t);
    }
    var vl = !1;
    function Af(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !vl && (vl = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Hf = function() {
    };
    {
      var yn = {}, Ff = /^on./, ov = /^on[^A-Z]/, sv = new RegExp("^(aria)-[" + ye + "]*$"), cv = new RegExp("^(aria)[A-Z][" + ye + "]*$");
      Hf = function(e, t, a, i) {
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
          if (Ff.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), yn[t] = !0, !0;
        } else if (Ff.test(t))
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
        return typeof a == "boolean" && cr(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), yn[t] = !0, !0) : m ? !0 : cr(t, a, v, !1) ? (yn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Kt && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), yn[t] = !0), !0);
      };
    }
    var fv = function(e, t, a) {
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
    function dv(e, t, a) {
      ii(e, t) || fv(e, t, a);
    }
    var li = 1, Co = 2, hl = 4, Gm = li | Co | hl, To = null;
    function Ro(e) {
      To !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), To = e;
    }
    function Xm() {
      To === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), To = null;
    }
    function pv(e) {
      return e === To;
    }
    function Us(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ai ? t.parentNode : t;
    }
    var St = null, Ui = null, ui = null;
    function cu(e) {
      var t = Yu(e);
      if (t) {
        if (typeof St != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = yh(a);
          St(t.stateNode, t.type, i);
        }
      }
    }
    function vv(e) {
      St = e;
    }
    function As(e) {
      Ui ? ui ? ui.push(e) : ui = [e] : Ui = e;
    }
    function xo() {
      return Ui !== null || ui !== null;
    }
    function wo() {
      if (Ui) {
        var e = Ui, t = ui;
        if (Ui = null, ui = null, cu(e), t)
          for (var a = 0; a < t.length; a++)
            cu(t[a]);
      }
    }
    var ml = function(e, t) {
      return e(t);
    }, jf = function() {
    }, Vf = !1;
    function qm() {
      var e = xo();
      e && (jf(), wo());
    }
    function Bf(e, t, a) {
      if (Vf)
        return e(t, a);
      Vf = !0;
      try {
        return ml(e, t, a);
      } finally {
        Vf = !1, qm();
      }
    }
    function Hs(e, t, a) {
      ml = e, jf = a;
    }
    function Fs(e) {
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
          return !!(a.disabled && Fs(t));
        default:
          return !1;
      }
    }
    function yl(e, t) {
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
        var gl = {};
        Object.defineProperty(gl, "passive", {
          get: function() {
            Do = !0;
          }
        }), window.addEventListener("test", gl, gl), window.removeEventListener("test", gl, gl);
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
    var Yf = hv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var $f = document.createElement("react");
      Yf = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), x = !1, T = !0, k = window.event, L = Object.getOwnPropertyDescriptor(window, "event");
        function N() {
          $f.removeEventListener(z, Se, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = k);
        }
        var G = Array.prototype.slice.call(arguments, 3);
        function Se() {
          x = !0, N(), a.apply(i, G), T = !1;
        }
        var ve, Ge = !1, $e = !1;
        function D(b) {
          if (ve = b.error, Ge = !0, ve === null && b.colno === 0 && b.lineno === 0 && ($e = !0), b.defaultPrevented && ve != null && typeof ve == "object")
            try {
              ve._suppressLogging = !0;
            } catch {
            }
        }
        var z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), $f.addEventListener(z, Se, !1), y.initEvent(z, !1, !1), $f.dispatchEvent(y), L && Object.defineProperty(window, "event", L), x && T && (Ge ? $e && (ve = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ve = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ve)), window.removeEventListener("error", D), !x)
          return N(), hv.apply(this, arguments);
      };
    }
    var Km = Yf, Ai = !1, ka = null, bo = !1, Hi = null, Va = {
      onError: function(e) {
        Ai = !0, ka = e;
      }
    };
    function Sl(e, t, a, i, u, s, f, p, v) {
      Ai = !1, ka = null, Km.apply(Va, arguments);
    }
    function oi(e, t, a, i, u, s, f, p, v) {
      if (Sl.apply(this, arguments), Ai) {
        var m = If();
        bo || (bo = !0, Hi = m);
      }
    }
    function Qf() {
      if (bo) {
        var e = Hi;
        throw bo = !1, Hi = null, e;
      }
    }
    function Zm() {
      return Ai;
    }
    function If() {
      if (Ai) {
        var e = ka;
        return Ai = !1, ka = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Jr(e) {
      return e._reactInternals;
    }
    function _o(e) {
      return e._reactInternals !== void 0;
    }
    function fu(e, t) {
      e._reactInternals = t;
    }
    var ge = (
      /*                      */
      0
    ), Fi = (
      /*                */
      1
    ), _t = (
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
    ), Ba = (
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
    ), ji = (
      /*                   */
      8192
    ), ko = (
      /*             */
      16384
    ), js = Mt | ze | Ba | pr | ea | ko, mv = (
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
    ), El = (
      /*              */
      33554432
    ), du = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ze | ea | 0
    ), mr = _t | ze | it | ut | pr | ta | ji, Qn = ze | Ba | pr | ji, na = Mt | it, _n = vr | Vi | Gf, si = M.ReactCurrentOwner;
    function Ar(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (_t | ta)) !== ge && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === q ? a : null;
    }
    function Xf(e) {
      if (e.tag === Pe) {
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
      return e.tag === q ? e.stateNode.containerInfo : null;
    }
    function qf(e) {
      return Ar(e) === e;
    }
    function Hr(e) {
      {
        var t = si.current;
        if (t !== null && t.tag === ue) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Me(a) || "A component"), i._warnedAboutRefsInRender = !0;
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
      if (i.tag !== q)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ra(e) {
      var t = kt(e);
      return t !== null ? Kf(t) : null;
    }
    function Kf(e) {
      if (e.tag === re || e.tag === Ue)
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
      if (e.tag === re || e.tag === Ue)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== oe) {
          var a = Bs(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ps = xe.unstable_scheduleCallback, gv = xe.unstable_cancelCallback, Ys = xe.unstable_shouldYield, Sv = xe.unstable_requestPaint, Ht = xe.unstable_now, Zf = xe.unstable_getCurrentPriorityLevel, $s = xe.unstable_ImmediatePriority, Cl = xe.unstable_UserBlockingPriority, Pa = xe.unstable_NormalPriority, Ev = xe.unstable_LowPriority, Qs = xe.unstable_IdlePriority, pu = xe.unstable_yieldValue, Cv = xe.unstable_setDisableYieldValue, ci = null, ln = null, Q = null, aa = !1, Fr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Jf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        za && (e = je({}, e, {
          getLaneLabelMap: fi,
          injectProfilingHooks: Tv
        })), ci = t.inject(e), ln = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function ed(e, t) {
      if (ln && typeof ln.onScheduleFiberRoot == "function")
        try {
          ln.onScheduleFiberRoot(ci, e, t);
        } catch (a) {
          aa || (aa = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function vu(e, t) {
      if (ln && typeof ln.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & De) === De;
          if (rn) {
            var i;
            switch (t) {
              case Wt:
                i = $s;
                break;
              case pi:
                i = Cl;
                break;
              case Ya:
                i = Pa;
                break;
              case Du:
                i = Qs;
                break;
              default:
                i = Pa;
                break;
            }
            ln.onCommitFiberRoot(ci, e, i, a);
          }
        } catch (u) {
          aa || (aa = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function ia(e) {
      if (ln && typeof ln.onPostCommitFiberRoot == "function")
        try {
          ln.onPostCommitFiberRoot(ci, e);
        } catch (t) {
          aa || (aa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Tl(e) {
      if (ln && typeof ln.onCommitFiberUnmount == "function")
        try {
          ln.onCommitFiberUnmount(ci, e);
        } catch (t) {
          aa || (aa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function en(e) {
      if (typeof pu == "function" && (Cv(e), Rt(e)), ln && typeof ln.setStrictMode == "function")
        try {
          ln.setStrictMode(ci, e);
        } catch (t) {
          aa || (aa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Tv(e) {
      Q = e;
    }
    function fi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Uo; a++) {
          var i = ey(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Bi(e) {
      Q !== null && typeof Q.markCommitStarted == "function" && Q.markCommitStarted(e);
    }
    function Is() {
      Q !== null && typeof Q.markCommitStopped == "function" && Q.markCommitStopped();
    }
    function hu(e) {
      Q !== null && typeof Q.markComponentRenderStarted == "function" && Q.markComponentRenderStarted(e);
    }
    function gr() {
      Q !== null && typeof Q.markComponentRenderStopped == "function" && Q.markComponentRenderStopped();
    }
    function Pi(e) {
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
    function Oa(e) {
      Q !== null && typeof Q.markComponentLayoutEffectUnmountStarted == "function" && Q.markComponentLayoutEffectUnmountStarted(e);
    }
    function mu() {
      Q !== null && typeof Q.markComponentLayoutEffectUnmountStopped == "function" && Q.markComponentLayoutEffectUnmountStopped();
    }
    function Mo(e, t, a) {
      Q !== null && typeof Q.markComponentErrored == "function" && Q.markComponentErrored(e, t, a);
    }
    function Rl(e, t, a) {
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
    ), be = (
      /*                    */
      2
    ), Ve = (
      /*               */
      8
    ), jr = (
      /*              */
      16
    ), gu = Math.clz32 ? Math.clz32 : In, zo = Math.log, Jm = Math.LN2;
    function In(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (zo(t) / Jm | 0) | 0;
    }
    var Uo = 31, A = (
      /*                        */
      0
    ), tn = (
      /*                          */
      0
    ), me = (
      /*                        */
      1
    ), kn = (
      /*    */
      2
    ), Vr = (
      /*             */
      4
    ), di = (
      /*            */
      8
    ), la = (
      /*                     */
      16
    ), Su = (
      /*                */
      32
    ), xl = (
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
    ), wl = (
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
    ), Dv = Dl, Ho = (
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
    function ey(e) {
      {
        if (e & me)
          return "Sync";
        if (e & kn)
          return "InputContinuousHydration";
        if (e & Vr)
          return "InputContinuous";
        if (e & di)
          return "DefaultHydration";
        if (e & la)
          return "Default";
        if (e & Su)
          return "TransitionHydration";
        if (e & xl)
          return "Transition";
        if (e & Ru)
          return "Retry";
        if (e & Ho)
          return "SelectiveHydration";
        if (e & xu)
          return "IdleHydration";
        if (e & Yi)
          return "Idle";
        if (e & Wn)
          return "Offscreen";
      }
    }
    var Tt = -1, dc = Eu, Sr = Dl;
    function bl(e) {
      switch (It(e)) {
        case me:
          return me;
        case kn:
          return kn;
        case Vr:
          return Vr;
        case di:
          return di;
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
        case wl:
        case rc:
        case Cu:
        case Tu:
        case ac:
        case Ao:
        case ic:
        case lc:
        case uc:
        case oc:
          return e & xl;
        case Dl:
        case sc:
        case cc:
        case ad:
        case fc:
          return e & Ru;
        case Ho:
          return Ho;
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
    function _l(e, t) {
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
        var y = It(i), x = It(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === la && (x & xl) !== A
        )
          return t;
      }
      (i & Vr) !== A && (i |= a & la);
      var T = e.entangledLanes;
      if (T !== A)
        for (var k = e.entanglements, L = i & T; L > 0; ) {
          var N = Qi(L), G = 1 << N;
          i |= k[N], L &= ~G;
        }
      return i;
    }
    function bv(e, t) {
      for (var a = e.eventTimes, i = Tt; t > 0; ) {
        var u = Qi(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function _v(e, t) {
      switch (e) {
        case me:
        case kn:
        case Vr:
          return t + 250;
        case di:
        case la:
        case Su:
        case Eu:
        case Zs:
        case Js:
        case ec:
        case tc:
        case nc:
        case wl:
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
          return Tt;
        case Ho:
        case xu:
        case Yi:
        case Wn:
          return Tt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), Tt;
      }
    }
    function kv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Qi(f), v = 1 << p, m = s[p];
        m === Tt ? ((v & i) === A || (v & u) !== A) && (s[p] = _v(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ld(e) {
      return bl(e.pendingLanes);
    }
    function $i(e) {
      var t = e.pendingLanes & ~Wn;
      return t !== A ? t : t & Wn ? Wn : A;
    }
    function ud(e) {
      return (e & me) !== A;
    }
    function Fo(e) {
      return (e & id) !== A;
    }
    function Ov(e) {
      return (e & Ru) === e;
    }
    function Lv(e) {
      var t = me | Vr | la;
      return (e & t) === A;
    }
    function Mv(e) {
      return (e & xl) === e;
    }
    function jo(e, t) {
      var a = kn | Vr | di | la;
      return (t & a) !== A;
    }
    function Nv(e, t) {
      return (t & e.expiredLanes) !== A;
    }
    function od(e) {
      return (e & xl) !== A;
    }
    function zv() {
      var e = dc;
      return dc <<= 1, (dc & xl) === A && (dc = Eu), e;
    }
    function Er() {
      var e = Sr;
      return Sr <<= 1, (Sr & Ru) === A && (Sr = Dl), e;
    }
    function It(e) {
      return e & -e;
    }
    function wu(e) {
      return It(e);
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
    function kl(e, t) {
      return (e & t) === t;
    }
    function Ne(e, t) {
      return e | t;
    }
    function Vo(e, t) {
      return e & ~t;
    }
    function vc(e, t) {
      return e & t;
    }
    function ty(e) {
      return e;
    }
    function Uv(e, t) {
      return e !== tn && e < t ? e : t;
    }
    function Bo(e) {
      for (var t = [], a = 0; a < Uo; a++)
        t.push(e);
      return t;
    }
    function Ol(e, t, a) {
      e.pendingLanes |= t, t !== Yi && (e.suspendedLanes = A, e.pingedLanes = A);
      var i = e.eventTimes, u = pc(t);
      i[u] = a;
    }
    function Av(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Qi(i), s = 1 << u;
        a[u] = Tt, i &= ~s;
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
        i[p] = A, u[p] = Tt, s[p] = Tt, f &= ~v;
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
    function Hv(e, t) {
      var a = It(t), i;
      switch (a) {
        case Vr:
          i = kn;
          break;
        case la:
          i = di;
          break;
        case Eu:
        case Zs:
        case Js:
        case ec:
        case tc:
        case nc:
        case wl:
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
          i = tn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== tn ? tn : i;
    }
    function yc(e, t, a) {
      if (Fr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = pc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function cd(e, t) {
      if (Fr)
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
    var Wt = me, pi = Vr, Ya = la, Du = Yi, bu = tn;
    function ua() {
      return bu;
    }
    function Pt(e) {
      bu = e;
    }
    function Gn(e, t) {
      var a = bu;
      try {
        return bu = e, t();
      } finally {
        bu = a;
      }
    }
    function ny(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ry(e, t) {
      return e > t ? e : t;
    }
    function _u(e, t) {
      return e !== 0 && e < t;
    }
    function On(e) {
      var t = It(e);
      return _u(Wt, t) ? _u(pi, t) ? Fo(t) ? Ya : Du : pi : Wt;
    }
    function gc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ne;
    function ku(e) {
      ne = e;
    }
    function fd(e) {
      ne(e);
    }
    var Sc;
    function ay(e) {
      Sc = e;
    }
    var Ou;
    function Ec(e) {
      Ou = e;
    }
    var Cc;
    function Fv(e) {
      Cc = e;
    }
    var dd;
    function jv(e) {
      dd = e;
    }
    var Yo = !1, Lu = [], zt = null, Sn = null, Zn = null, Mu = /* @__PURE__ */ new Map(), Nu = /* @__PURE__ */ new Map(), En = [], Vv = [
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
    function $a(e) {
      return Vv.indexOf(e) > -1;
    }
    function iy(e, t, a, i, u) {
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
        var f = iy(t, a, i, u, s);
        if (t !== null) {
          var p = Yu(t);
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
          if (i === Pe) {
            var u = Xf(a);
            if (u !== null) {
              e.blockedOn = u, dd(e.priority, function() {
                Ou(a);
              });
              return;
            }
          } else if (i === q) {
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
    function ly(e) {
      for (var t = Cc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < En.length && _u(t, En[i].priority); i++)
        ;
      En.splice(i, 0, a), i === 0 && vd(a);
    }
    function Ll(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Xn(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Ro(s), u.target.dispatchEvent(s), Xm();
        } else {
          var f = Yu(i);
          return f !== null && Sc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Tc(e, t, a) {
      Ll(e) && a.delete(t);
    }
    function oa() {
      Yo = !1, zt !== null && Ll(zt) && (zt = null), Sn !== null && Ll(Sn) && (Sn = null), Zn !== null && Ll(Zn) && (Zn = null), Mu.forEach(Tc), Nu.forEach(Tc);
    }
    function Ye(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Yo || (Yo = !0, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, oa)));
    }
    function Yt(e) {
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
    var Ot = M.ReactCurrentBatchConfig, un = !0;
    function Tr(e) {
      un = !!e;
    }
    function Uu() {
      return un;
    }
    function on(e, t, a) {
      var i = Rc(t), u;
      switch (i) {
        case Wt:
          u = $o;
          break;
        case pi:
          u = Ml;
          break;
        case Ya:
        default:
          u = Au;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function $o(e, t, a, i) {
      var u = ua(), s = Ot.transition;
      Ot.transition = null;
      try {
        Pt(Wt), Au(e, t, a, i);
      } finally {
        Pt(u), Ot.transition = s;
      }
    }
    function Ml(e, t, a, i) {
      var u = ua(), s = Ot.transition;
      Ot.transition = null;
      try {
        Pt(pi), Au(e, t, a, i);
      } finally {
        Pt(u), Ot.transition = s;
      }
    }
    function Au(e, t, a, i) {
      un && hd(e, t, a, i);
    }
    function hd(e, t, a, i) {
      var u = Xn(e, t, a, i);
      if (u === null) {
        Ry(e, t, i, Ii, a), pd(e, i);
        return;
      }
      if (Bv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (pd(e, i), t & hl && $a(e)) {
        for (; u !== null; ) {
          var s = Yu(u);
          s !== null && fd(s);
          var f = Xn(e, t, a, i);
          if (f === null && Ry(e, t, i, Ii, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ry(e, t, i, null, a);
    }
    var Ii = null;
    function Xn(e, t, a, i) {
      Ii = null;
      var u = Us(i), s = ts(u);
      if (s !== null) {
        var f = Ar(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Pe) {
            var v = Xf(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === q) {
            var m = f.stateNode;
            if (gc(m))
              return Vs(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Ii = s, null;
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
          return pi;
        case "message": {
          var t = Zf();
          switch (t) {
            case $s:
              return Wt;
            case Cl:
              return pi;
            case Pa:
            case Ev:
              return Ya;
            case Qs:
              return Du;
            default:
              return Ya;
          }
        }
        default:
          return Ya;
      }
    }
    function Hu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function vi(e, t, a) {
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
    var sa = null, Fu = null, ca = null;
    function wc(e) {
      return sa = e, Fu = Io(), !0;
    }
    function Qo() {
      sa = null, Fu = null, ca = null;
    }
    function Dc() {
      if (ca)
        return ca;
      var e, t = Fu, a = t.length, i, u = Io(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return ca = u.slice(e, p), ca;
    }
    function Io() {
      return "value" in sa ? sa.value : sa.textContent;
    }
    function Nl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Cn() {
      return !0;
    }
    function hi() {
      return !1;
    }
    function Ft(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = Cn : this.isDefaultPrevented = hi, this.isPropagationStopped = hi, this;
      }
      return je(t.prototype, {
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
    var sn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, bc = Ft(sn), zl = je({}, sn, {
      view: 0,
      detail: 0
    }), yd = Ft(zl), gd, Qa, ju;
    function Sd(e) {
      e !== ju && (ju && e.type === "mousemove" ? (gd = e.screenX - ju.screenX, Qa = e.screenY - ju.screenY) : (gd = 0, Qa = 0), ju = e);
    }
    var Ia = je({}, zl, {
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
    }), _c = Ft(Ia), Ul = je({}, Ia, {
      dataTransfer: 0
    }), Pv = Ft(Ul), Yv = je({}, zl, {
      relatedTarget: 0
    }), Wo = Ft(Yv), kc = je({}, sn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), uy = Ft(kc), oy = je({}, sn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), $v = Ft(oy), Qv = je({}, sn, {
      data: 0
    }), Wi = Ft(Qv), sy = Wi, Vu = {
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
    }, Iv = {
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
    function $t(e) {
      if (e.key) {
        var t = Vu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Nl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Iv[e.keyCode] || "Unidentified" : "";
    }
    var cy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Wv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = cy[e];
      return i ? !!a[i] : !1;
    }
    function Ed(e) {
      return Wv;
    }
    var fy = je({}, zl, {
      key: $t,
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
        return e.type === "keypress" ? Nl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Nl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Gv = Ft(fy), Xv = je({}, Ia, {
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
    }), qv = Ft(Xv), fa = je({}, zl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ed
    }), Cd = Ft(fa), dy = je({}, sn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Gi = Ft(dy), Oc = je({}, Ia, {
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
    }), Al = Ft(Oc), Lc = [9, 13, 27, 32], Mc = 229, Go = pn && "CompositionEvent" in window, Xo = null;
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
    function py(e, t) {
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
    var Xi = !1;
    function Uc(e, t, a, i, u) {
      var s, f;
      if (Go ? s = wd(t) : Xi ? Dd(t, i) && (s = "onCompositionEnd") : py(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Kv && !Ko(i) && (!Xi && s === "onCompositionStart" ? Xi = wc(u) : s === "onCompositionEnd" && Xi && (f = Dc()));
      var p = ah(a, s);
      if (p.length > 0) {
        var v = new Wi(s, t, null, i, u);
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
    function vy(e, t) {
      if (Xi) {
        if (e === "compositionend" || !Go && Dd(e, t)) {
          var a = Dc();
          return Qo(), Xi = !1, a;
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
      if (Td ? s = Jv(t, i) : s = vy(t, i), !s)
        return null;
      var f = ah(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new sy("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function hy(e, t, a, i, u, s, f) {
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
    function Hc(e) {
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
      r(t, o, e, Us(e)), Bf(h, t);
    }
    function h(e) {
      R0(e, 0);
    }
    function S(e) {
      var t = Yc(e);
      if (Ap(t))
        return e;
    }
    function C(e, t) {
      if (e === "change")
        return t;
    }
    var O = !1;
    pn && (O = Hc("input") && (!document.documentMode || document.documentMode > 9));
    function F(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", H);
    }
    function V() {
      l && (l.detachEvent("onpropertychange", H), l = null, o = null);
    }
    function H(e) {
      e.propertyName === "value" && S(o) && d(e);
    }
    function K(e, t, a) {
      e === "focusin" ? (V(), F(t, a)) : e === "focusout" && V();
    }
    function ae(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return S(o);
    }
    function ce(e) {
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
      !t || !t.controlled || e.type !== "number" || Ni(e, "number", e.value);
    }
    function _(e, t, a, i, u, s, f) {
      var p = a ? Yc(a) : window, v, m;
      if (c(p) ? v = C : eh(p) ? O ? v = w : (v = ae, m = K) : ce(p) && (v = Gt), v) {
        var y = v(t, a);
        if (y) {
          r(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && R(p);
    }
    function P() {
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
        var T, k;
        if (v) {
          var L = i.relatedTarget || i.toElement;
          if (T = a, k = L ? ts(L) : null, k !== null) {
            var N = Ar(k);
            (k !== N || k.tag !== re && k.tag !== Ue) && (k = null);
          }
        } else
          T = null, k = a;
        if (T !== k) {
          var G = _c, Se = "onMouseLeave", ve = "onMouseEnter", Ge = "mouse";
          (t === "pointerout" || t === "pointerover") && (G = qv, Se = "onPointerLeave", ve = "onPointerEnter", Ge = "pointer");
          var $e = T == null ? y : Yc(T), D = k == null ? y : Yc(k), z = new G(Se, Ge + "leave", T, i, u);
          z.target = $e, z.relatedTarget = D;
          var b = null, B = ts(u);
          if (B === a) {
            var te = new G(ve, Ge + "enter", k, i, u);
            te.target = D, te.relatedTarget = $e, b = te;
          }
          TT(e, z, b, T, k);
        }
      }
    }
    function Ce(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ie = typeof Object.is == "function" ? Object.is : Ce;
    function Te(e, t) {
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
    function cn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function et(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function mi(e, t) {
      for (var a = cn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === ai) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = cn(et(a));
      }
    }
    function my(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return nT(e, u, s, f, p);
    }
    function nT(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, y = e, x = null;
      e:
        for (; ; ) {
          for (var T = null; y === t && (a === 0 || y.nodeType === ai) && (f = s + a), y === i && (u === 0 || y.nodeType === ai) && (p = s + u), y.nodeType === ai && (s += y.nodeValue.length), (T = y.firstChild) !== null; )
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
    function rT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = mi(e, f), y = mi(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var x = a.createRange();
          x.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(y.node, y.offset)) : (x.setEnd(y.node, y.offset), u.addRange(x));
        }
      }
    }
    function f0(e) {
      return e && e.nodeType === ai;
    }
    function d0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : f0(e) ? !1 : f0(t) ? d0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function aT(e) {
      return e && e.ownerDocument && d0(e.ownerDocument.documentElement, e);
    }
    function iT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function p0() {
      for (var e = window, t = Ts(); t instanceof e.HTMLIFrameElement; ) {
        if (iT(t))
          e = t.contentWindow;
        else
          return t;
        t = Ts(e.document);
      }
      return t;
    }
    function yy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function lT() {
      var e = p0();
      return {
        focusedElem: e,
        selectionRange: yy(e) ? oT(e) : null
      };
    }
    function uT(e) {
      var t = p0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && aT(a)) {
        i !== null && yy(a) && sT(a, i);
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
    function oT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = my(e), t || {
        start: 0,
        end: 0
      };
    }
    function sT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : rT(e, t);
    }
    var cT = pn && "documentMode" in document && document.documentMode <= 11;
    function fT() {
      sr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Fc = null, gy = null, bd = null, Sy = !1;
    function dT(e) {
      if ("selectionStart" in e && yy(e))
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
    function pT(e) {
      return e.window === e ? e.document : e.nodeType === ba ? e : e.ownerDocument;
    }
    function v0(e, t, a) {
      var i = pT(a);
      if (!(Sy || Fc == null || Fc !== Ts(i))) {
        var u = dT(Fc);
        if (!bd || !Te(bd, u)) {
          bd = u;
          var s = ah(gy, "onSelect");
          if (s.length > 0) {
            var f = new bc("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Fc;
          }
        }
      }
    }
    function vT(e, t, a, i, u, s, f) {
      var p = a ? Yc(a) : window;
      switch (t) {
        case "focusin":
          (eh(p) || p.contentEditable === "true") && (Fc = p, gy = a, bd = null);
          break;
        case "focusout":
          Fc = null, gy = null, bd = null;
          break;
        case "mousedown":
          Sy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Sy = !1, v0(e, i, u);
          break;
        case "selectionchange":
          if (cT)
            break;
        case "keydown":
        case "keyup":
          v0(e, i, u);
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
    }, Ey = {}, h0 = {};
    pn && (h0 = document.createElement("div").style, "AnimationEvent" in window || (delete jc.animationend.animation, delete jc.animationiteration.animation, delete jc.animationstart.animation), "TransitionEvent" in window || delete jc.transitionend.transition);
    function nh(e) {
      if (Ey[e])
        return Ey[e];
      if (!jc[e])
        return e;
      var t = jc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in h0)
          return Ey[e] = t[a];
      return e;
    }
    var m0 = nh("animationend"), y0 = nh("animationiteration"), g0 = nh("animationstart"), S0 = nh("transitionend"), E0 = /* @__PURE__ */ new Map(), C0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Bu(e, t) {
      E0.set(e, t), sr(t, [e]);
    }
    function hT() {
      for (var e = 0; e < C0.length; e++) {
        var t = C0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Bu(a, "on" + i);
      }
      Bu(m0, "onAnimationEnd"), Bu(y0, "onAnimationIteration"), Bu(g0, "onAnimationStart"), Bu("dblclick", "onDoubleClick"), Bu("focusin", "onFocus"), Bu("focusout", "onBlur"), Bu(S0, "onTransitionEnd");
    }
    function mT(e, t, a, i, u, s, f) {
      var p = E0.get(t);
      if (p !== void 0) {
        var v = bc, m = t;
        switch (t) {
          case "keypress":
            if (Nl(i) === 0)
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
            v = _c;
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
          case m0:
          case y0:
          case g0:
            v = uy;
            break;
          case S0:
            v = Gi;
            break;
          case "scroll":
            v = yd;
            break;
          case "wheel":
            v = Al;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = $v;
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
        var y = (s & hl) !== 0;
        {
          var x = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", T = ET(a, p, i.type, y, x);
          if (T.length > 0) {
            var k = new v(p, m, null, i, u);
            e.push({
              event: k,
              listeners: T
            });
          }
        }
      }
    }
    hT(), P(), n(), fT(), Nc();
    function yT(e, t, a, i, u, s, f) {
      mT(e, t, a, i, u, s);
      var p = (s & Gm) === 0;
      p && (de(e, t, a, i, u), _(e, t, a, i, u), vT(e, t, a, i, u), hy(e, t, a, i, u));
    }
    var _d = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Cy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(_d));
    function T0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, oi(i, t, void 0, e), e.currentTarget = null;
    }
    function gT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          T0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], x = y.instance, T = y.currentTarget, k = y.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          T0(e, k, T), i = x;
        }
    }
    function R0(e, t) {
      for (var a = (t & hl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        gT(s, f, a);
      }
      Qf();
    }
    function ST(e, t, a, i, u) {
      var s = Us(a), f = [];
      yT(f, e, i, a, s, t), R0(f, t);
    }
    function jt(e, t) {
      Cy.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = XR(t), u = RT(e);
      i.has(u) || (x0(t, e, Co, a), i.add(u));
    }
    function Ty(e, t, a) {
      Cy.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= hl), x0(a, e, i, t);
    }
    var rh = "_reactListening" + Math.random().toString(36).slice(2);
    function kd(e) {
      if (!e[rh]) {
        e[rh] = !0, Vn.forEach(function(a) {
          a !== "selectionchange" && (Cy.has(a) || Ty(a, !1, e), Ty(a, !0, e));
        });
        var t = e.nodeType === ba ? e : e.ownerDocument;
        t !== null && (t[rh] || (t[rh] = !0, Ty("selectionchange", !1, t)));
      }
    }
    function x0(e, t, a, i, u) {
      var s = on(e, t, a), f = void 0;
      Do && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? xc(e, t, s, f) : vi(e, t, s) : f !== void 0 ? md(e, t, s, f) : Hu(e, t, s);
    }
    function w0(e, t) {
      return e === t || e.nodeType === Jt && e.parentNode === t;
    }
    function Ry(e, t, a, i, u) {
      var s = i;
      if (!(t & li) && !(t & Co)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === q || v === oe) {
                var m = p.stateNode.containerInfo;
                if (w0(m, f))
                  break;
                if (v === oe)
                  for (var y = p.return; y !== null; ) {
                    var x = y.tag;
                    if (x === q || x === oe) {
                      var T = y.stateNode.containerInfo;
                      if (w0(T, f))
                        return;
                    }
                    y = y.return;
                  }
                for (; m !== null; ) {
                  var k = ts(m);
                  if (k === null)
                    return;
                  var L = k.tag;
                  if (L === re || L === Ue) {
                    p = s = k;
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
        return ST(e, t, a, s);
      });
    }
    function Od(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ET(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var x = m, T = x.stateNode, k = x.tag;
        if (k === re && T !== null && (y = T, p !== null)) {
          var L = yl(m, p);
          L != null && v.push(Od(m, L, y));
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
        if (p === re && f !== null) {
          var v = f, m = yl(u, a);
          m != null && i.unshift(Od(u, m, v));
          var y = yl(u, t);
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
      while (e && e.tag !== re);
      return e || null;
    }
    function CT(e, t) {
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
    function D0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, x = v.tag;
        if (m !== null && m === i)
          break;
        if (x === re && y !== null) {
          var T = y;
          if (u) {
            var k = yl(p, s);
            k != null && f.unshift(Od(p, k, T));
          } else if (!u) {
            var L = yl(p, s);
            L != null && f.push(Od(p, L, T));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function TT(e, t, a, i, u) {
      var s = i && u ? CT(i, u) : null;
      i !== null && D0(e, t, i, s, !1), u !== null && a !== null && D0(e, a, u, s, !0);
    }
    function RT(e, t) {
      return e + "__bubble";
    }
    var da = !1, Ld = "dangerouslySetInnerHTML", ih = "suppressContentEditableWarning", Pu = "suppressHydrationWarning", b0 = "autoFocus", Jo = "children", es = "style", lh = "__html", xy, uh, Md, _0, oh, k0, O0;
    xy = {
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
        possibleRegistrationNames: Ua
      });
    }, k0 = pn && !document.documentMode, Md = function(e, t, a) {
      if (!da) {
        var i = sh(a), u = sh(t);
        u !== i && (da = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, _0 = function(e) {
      if (!da) {
        da = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, oh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, O0 = function(e, t) {
      var a = e.namespaceURI === ri ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var xT = /\r\n?/g, wT = /\u0000|\uFFFD/g;
    function sh(e) {
      Ea(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(xT, `
`).replace(wT, "");
    }
    function ch(e, t, a, i) {
      var u = sh(t), s = sh(e);
      if (s !== u && (i && (da || (da = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && qn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function L0(e) {
      return e.nodeType === ba ? e : e.ownerDocument;
    }
    function DT() {
    }
    function fh(e) {
      e.onclick = DT;
    }
    function bT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === es)
            f && Object.freeze(f), nv(t, f);
          else if (s === Ld) {
            var p = f ? f[lh] : void 0;
            p != null && Qp(t, p);
          } else if (s === Jo)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && Os(t, f);
            } else
              typeof f == "number" && Os(t, "" + f);
          else
            s === ih || s === Pu || s === b0 || (or.hasOwnProperty(s) ? f != null && (typeof f != "function" && oh(s, f), s === "onScroll" && jt("scroll", t)) : f != null && Fa(t, s, f, u));
        }
    }
    function _T(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === es ? nv(e, f) : s === Ld ? Qp(e, f) : s === Jo ? Os(e, f) : Fa(e, s, f, i);
      }
    }
    function kT(e, t, a, i) {
      var u, s = L0(a), f, p = i;
      if (p === ri && (p = _s(e)), p === ri) {
        if (u = ii(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === ri && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Bn.call(xy, e) && (xy[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function OT(e, t) {
      return L0(t).createTextNode(e);
    }
    function LT(e, t, a, i) {
      var u = ii(t, a);
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
          for (var f = 0; f < _d.length; f++)
            jt(_d[f], e);
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
          Pp(e, a), s = bf(e, a), jt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ms(t, s), bT(t, e, i, s, u), t) {
        case "input":
          dl(e), mo(e, a, !1);
          break;
        case "textarea":
          dl(e), $p(e);
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
    function MT(e, t, a, i, u) {
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
          f = bf(e, a), p = bf(e, i), s = [];
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
        var T = p[v], k = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || T === k || T == null && k == null))
          if (v === es)
            if (T && Object.freeze(T), k) {
              for (m in k)
                k.hasOwnProperty(m) && (!T || !T.hasOwnProperty(m)) && (y || (y = {}), y[m] = "");
              for (m in T)
                T.hasOwnProperty(m) && k[m] !== T[m] && (y || (y = {}), y[m] = T[m]);
            } else
              y || (s || (s = []), s.push(v, y)), y = T;
          else if (v === Ld) {
            var L = T ? T[lh] : void 0, N = k ? k[lh] : void 0;
            L != null && N !== L && (s = s || []).push(v, L);
          } else
            v === Jo ? (typeof T == "string" || typeof T == "number") && (s = s || []).push(v, "" + T) : v === ih || v === Pu || (or.hasOwnProperty(v) ? (T != null && (typeof T != "function" && oh(v, T), v === "onScroll" && jt("scroll", e)), !s && k !== T && (s = [])) : (s = s || []).push(v, T));
      }
      return y && (So(y, p[es]), (s = s || []).push(es, y)), s;
    }
    function NT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && Rf(e, u);
      var s = ii(a, i), f = ii(a, u);
      switch (_T(e, t, s, f), a) {
        case "input":
          ru(e, u);
          break;
        case "textarea":
          Yp(e, u);
          break;
        case "select":
          Fm(e, u);
          break;
      }
    }
    function zT(e) {
      {
        var t = e.toLowerCase();
        return Ns.hasOwnProperty(t) && Ns[t] || null;
      }
    }
    function UT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = ii(t, a), uh(t, a), t) {
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
          for (var m = 0; m < _d.length; m++)
            jt(_d[m], e);
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
      var k = null;
      for (var L in a)
        if (a.hasOwnProperty(L)) {
          var N = a[L];
          if (L === Jo)
            typeof N == "string" ? e.textContent !== N && (a[Pu] !== !0 && ch(e.textContent, N, s, f), k = [Jo, N]) : typeof N == "number" && e.textContent !== "" + N && (a[Pu] !== !0 && ch(e.textContent, N, s, f), k = [Jo, "" + N]);
          else if (or.hasOwnProperty(L))
            N != null && (typeof N != "function" && oh(L, N), L === "onScroll" && jt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var G = void 0, Se = p && wn ? null : Lr(L);
            if (a[Pu] !== !0) {
              if (!(L === ih || L === Pu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              L === "value" || L === "checked" || L === "selected")) {
                if (L === Ld) {
                  var ve = e.innerHTML, Ge = N ? N[lh] : void 0;
                  if (Ge != null) {
                    var $e = O0(e, Ge);
                    $e !== ve && Md(L, ve, $e);
                  }
                } else if (L === es) {
                  if (v.delete(L), k0) {
                    var D = Im(N);
                    G = e.getAttribute("style"), D !== G && Md(L, G, D);
                  }
                } else if (p && !wn)
                  v.delete(L.toLowerCase()), G = Jl(e, L, N), N !== G && Md(L, G, N);
                else if (!Qt(L, Se, p) && !Et(L, N, Se, p)) {
                  var z = !1;
                  if (Se !== null)
                    v.delete(Se.attributeName), G = ol(e, L, N, Se);
                  else {
                    var b = i;
                    if (b === ri && (b = _s(t)), b === ri)
                      v.delete(L.toLowerCase());
                    else {
                      var B = zT(L);
                      B !== null && B !== L && (z = !0, v.delete(B)), v.delete(L);
                    }
                    G = Jl(e, L, N);
                  }
                  var te = wn;
                  !te && N !== G && !z && Md(L, G, N);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Pu] !== !0 && _0(v), t) {
        case "input":
          dl(e), mo(e, a, !0);
          break;
        case "textarea":
          dl(e), $p(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && fh(e);
          break;
      }
      return k;
    }
    function AT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function wy(e, t) {
      {
        if (da)
          return;
        da = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
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
    function _y(e, t) {
      {
        if (t === "" || da)
          return;
        da = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function HT(e, t, a) {
      switch (t) {
        case "input":
          Hp(e, a);
          return;
        case "textarea":
          _f(e, a);
          return;
        case "select":
          jm(e, a);
          return;
      }
    }
    var Nd = function() {
    }, zd = function() {
    };
    {
      var FT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], M0 = [
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
      ], jT = M0.concat(["button"]), VT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], N0 = {
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
        var a = je({}, e || N0), i = {
          tag: t
        };
        return M0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), jT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), FT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var BT = function(e, t) {
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
            return VT.indexOf(t) === -1;
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
      }, PT = function(e, t) {
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
      }, z0 = {};
      Nd = function(e, t, a) {
        a = a || N0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = BT(e, u) ? null : i, f = s ? null : PT(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!z0[m]) {
            z0[m] = !0;
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
    var dh = "suppressHydrationWarning", ph = "$", vh = "/$", Ud = "$?", Ad = "$!", YT = "style", ky = null, Oy = null;
    function $T(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ba:
        case pl: {
          t = i === ba ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Of(null, "");
          break;
        }
        default: {
          var s = i === Jt ? e.parentNode : e, f = s.namespaceURI || null;
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
    function QT(e, t, a) {
      {
        var i = e, u = Of(i.namespace, t), s = zd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function p_(e) {
      return e;
    }
    function IT(e) {
      ky = Uu(), Oy = lT();
      var t = null;
      return Tr(!1), t;
    }
    function WT(e) {
      uT(Oy), Tr(ky), ky = null, Oy = null;
    }
    function GT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Nd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = zd(f.ancestorInfo, e);
          Nd(null, p, v);
        }
        s = f.namespace;
      }
      var m = kT(e, t, a, s);
      return jd(u, m), Fy(m, t), m;
    }
    function XT(e, t) {
      e.appendChild(t);
    }
    function qT(e, t, a, i, u) {
      switch (LT(e, t, a, i), t) {
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
    function KT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = zd(f.ancestorInfo, t);
          Nd(null, p, v);
        }
      }
      return MT(e, t, a, i);
    }
    function Ly(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ZT(e, t, a, i) {
      {
        var u = a;
        Nd(null, e, u.ancestorInfo);
      }
      var s = OT(e, t);
      return jd(i, s), s;
    }
    function JT() {
      var e = window.event;
      return e === void 0 ? Ya : Rc(e.type);
    }
    var My = typeof setTimeout == "function" ? setTimeout : void 0, eR = typeof clearTimeout == "function" ? clearTimeout : void 0, Ny = -1, U0 = typeof Promise == "function" ? Promise : void 0, tR = typeof queueMicrotask == "function" ? queueMicrotask : typeof U0 < "u" ? function(e) {
      return U0.resolve(null).then(e).catch(nR);
    } : My;
    function nR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function rR(e, t, a, i) {
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
    function aR(e, t, a, i, u, s) {
      NT(e, t, a, i, u), Fy(e, u);
    }
    function A0(e) {
      Os(e, "");
    }
    function iR(e, t, a) {
      e.nodeValue = a;
    }
    function lR(e, t) {
      e.appendChild(t);
    }
    function uR(e, t) {
      var a;
      e.nodeType === Jt ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && fh(a);
    }
    function oR(e, t, a) {
      e.insertBefore(t, a);
    }
    function sR(e, t, a) {
      e.nodeType === Jt ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function cR(e, t) {
      e.removeChild(t);
    }
    function fR(e, t) {
      e.nodeType === Jt ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function zy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Jt) {
          var s = u.data;
          if (s === vh)
            if (i === 0) {
              e.removeChild(u), Yt(t);
              return;
            } else
              i--;
          else
            (s === ph || s === Ud || s === Ad) && i++;
        }
        a = u;
      } while (a);
      Yt(t);
    }
    function dR(e, t) {
      e.nodeType === Jt ? zy(e.parentNode, t) : e.nodeType === dr && zy(e, t), Yt(e);
    }
    function pR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function vR(e) {
      e.nodeValue = "";
    }
    function hR(e, t) {
      e = e;
      var a = t[YT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ls("display", i);
    }
    function mR(e, t) {
      e.nodeValue = t;
    }
    function yR(e) {
      e.nodeType === dr ? e.textContent = "" : e.nodeType === ba && e.documentElement && e.removeChild(e.documentElement);
    }
    function gR(e, t, a) {
      return e.nodeType !== dr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function SR(e, t) {
      return t === "" || e.nodeType !== ai ? null : e;
    }
    function ER(e) {
      return e.nodeType !== Jt ? null : e;
    }
    function H0(e) {
      return e.data === Ud;
    }
    function Uy(e) {
      return e.data === Ad;
    }
    function CR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function TR(e, t) {
      e._reactRetry = t;
    }
    function hh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === dr || t === ai)
          break;
        if (t === Jt) {
          var a = e.data;
          if (a === ph || a === Ad || a === Ud)
            break;
          if (a === vh)
            return null;
        }
      }
      return e;
    }
    function Hd(e) {
      return hh(e.nextSibling);
    }
    function RR(e) {
      return hh(e.firstChild);
    }
    function xR(e) {
      return hh(e.firstChild);
    }
    function wR(e) {
      return hh(e.nextSibling);
    }
    function DR(e, t, a, i, u, s, f) {
      jd(s, e), Fy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & pe) !== fe;
      return UT(e, t, a, p, i, m, f);
    }
    function bR(e, t, a, i) {
      return jd(a, e), a.mode & pe, AT(e, t);
    }
    function _R(e, t) {
      jd(t, e);
    }
    function kR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Jt) {
          var i = t.data;
          if (i === vh) {
            if (a === 0)
              return Hd(t);
            a--;
          } else
            (i === ph || i === Ad || i === Ud) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function F0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Jt) {
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
    function OR(e) {
      Yt(e);
    }
    function LR(e) {
      Yt(e);
    }
    function MR(e) {
      return e !== "head" && e !== "body";
    }
    function NR(e, t, a, i) {
      var u = !0;
      ch(t.nodeValue, a, i, u);
    }
    function zR(e, t, a, i, u, s) {
      if (t[dh] !== !0) {
        var f = !0;
        ch(i.nodeValue, u, s, f);
      }
    }
    function UR(e, t) {
      t.nodeType === dr ? wy(e, t) : t.nodeType === Jt || Dy(e, t);
    }
    function AR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === dr ? wy(a, t) : t.nodeType === Jt || Dy(a, t));
      }
    }
    function HR(e, t, a, i, u) {
      (u || t[dh] !== !0) && (i.nodeType === dr ? wy(a, i) : i.nodeType === Jt || Dy(a, i));
    }
    function FR(e, t, a) {
      by(e, t);
    }
    function jR(e, t) {
      _y(e, t);
    }
    function VR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && by(i, t);
      }
    }
    function BR(e, t) {
      {
        var a = e.parentNode;
        a !== null && _y(a, t);
      }
    }
    function PR(e, t, a, i, u, s) {
      (s || t[dh] !== !0) && by(a, i);
    }
    function YR(e, t, a, i, u) {
      (u || t[dh] !== !0) && _y(a, i);
    }
    function $R(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function QR(e) {
      kd(e);
    }
    var Bc = Math.random().toString(36).slice(2), Pc = "__reactFiber$" + Bc, Ay = "__reactProps$" + Bc, Fd = "__reactContainer$" + Bc, Hy = "__reactEvents$" + Bc, IR = "__reactListeners$" + Bc, WR = "__reactHandles$" + Bc;
    function GR(e) {
      delete e[Pc], delete e[Ay], delete e[Hy], delete e[IR], delete e[WR];
    }
    function jd(e, t) {
      t[Pc] = e;
    }
    function mh(e, t) {
      t[Fd] = e;
    }
    function j0(e) {
      e[Fd] = null;
    }
    function Vd(e) {
      return !!e[Fd];
    }
    function ts(e) {
      var t = e[Pc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Fd] || a[Pc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = F0(e); u !== null; ) {
              var s = u[Pc];
              if (s)
                return s;
              u = F0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Yu(e) {
      var t = e[Pc] || e[Fd];
      return t && (t.tag === re || t.tag === Ue || t.tag === Pe || t.tag === q) ? t : null;
    }
    function Yc(e) {
      if (e.tag === re || e.tag === Ue)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function yh(e) {
      return e[Ay] || null;
    }
    function Fy(e, t) {
      e[Ay] = t;
    }
    function XR(e) {
      var t = e[Hy];
      return t === void 0 && (t = e[Hy] = /* @__PURE__ */ new Set()), t;
    }
    var V0 = {}, B0 = M.ReactDebugCurrentFrame;
    function gh(e) {
      if (e) {
        var t = e._owner, a = uo(e.type, e._source, t ? t.type : null);
        B0.setExtraStackFrame(a);
      } else
        B0.setExtraStackFrame(null);
    }
    function yi(e, t, a, i, u) {
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
            p && !(p instanceof Error) && (gh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), gh(null)), p instanceof Error && !(p.message in V0) && (V0[p.message] = !0, gh(u), g("Failed %s type: %s", a, p.message), gh(null));
          }
      }
    }
    var jy = [], Sh;
    Sh = [];
    var Hl = -1;
    function $u(e) {
      return {
        current: e
      };
    }
    function Rr(e, t) {
      if (Hl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Sh[Hl] && g("Unexpected Fiber popped."), e.current = jy[Hl], jy[Hl] = null, Sh[Hl] = null, Hl--;
    }
    function xr(e, t, a) {
      Hl++, jy[Hl] = e.current, Sh[Hl] = a, e.current = t;
    }
    var Vy;
    Vy = {};
    var La = {};
    Object.freeze(La);
    var Fl = $u(La), qi = $u(!1), By = La;
    function $c(e, t, a) {
      return a && Ki(t) ? By : Fl.current;
    }
    function P0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Qc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return La;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Me(e) || "Unknown";
          yi(i, s, "context", p);
        }
        return u && P0(e, t, s), s;
      }
    }
    function Eh() {
      return qi.current;
    }
    function Ki(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ch(e) {
      Rr(qi, e), Rr(Fl, e);
    }
    function Py(e) {
      Rr(qi, e), Rr(Fl, e);
    }
    function Y0(e, t, a) {
      {
        if (Fl.current !== La)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        xr(Fl, t, e), xr(qi, a, e);
      }
    }
    function $0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Me(e) || "Unknown";
            Vy[s] || (Vy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Me(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Me(e) || "Unknown";
          yi(u, f, "child context", v);
        }
        return je({}, a, f);
      }
    }
    function Th(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || La;
        return By = Fl.current, xr(Fl, a, e), xr(qi, qi.current, e), !0;
      }
    }
    function Q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = $0(e, t, By);
          i.__reactInternalMemoizedMergedChildContext = u, Rr(qi, e), Rr(Fl, e), xr(Fl, u, e), xr(qi, a, e);
        } else
          Rr(qi, e), xr(qi, a, e);
      }
    }
    function qR(e) {
      {
        if (!qf(e) || e.tag !== ue)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case q:
              return t.stateNode.context;
            case ue: {
              var a = t.type;
              if (Ki(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Qu = 0, Rh = 1, jl = null, Yy = !1, $y = !1;
    function I0(e) {
      jl === null ? jl = [e] : jl.push(e);
    }
    function KR(e) {
      Yy = !0, I0(e);
    }
    function W0() {
      Yy && Iu();
    }
    function Iu() {
      if (!$y && jl !== null) {
        $y = !0;
        var e = 0, t = ua();
        try {
          var a = !0, i = jl;
          for (Pt(Wt); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          jl = null, Yy = !1;
        } catch (s) {
          throw jl !== null && (jl = jl.slice(e + 1)), Ps($s, Iu), s;
        } finally {
          Pt(t), $y = !1;
        }
      }
      return null;
    }
    var Ic = [], Wc = 0, xh = null, wh = 0, Wa = [], Ga = 0, ns = null, Vl = 1, Bl = "";
    function ZR(e) {
      return as(), (e.flags & Wf) !== ge;
    }
    function JR(e) {
      return as(), wh;
    }
    function ex() {
      var e = Bl, t = Vl, a = t & ~tx(t);
      return a.toString(32) + e;
    }
    function rs(e, t) {
      as(), Ic[Wc++] = wh, Ic[Wc++] = xh, xh = e, wh = t;
    }
    function G0(e, t, a) {
      as(), Wa[Ga++] = Vl, Wa[Ga++] = Bl, Wa[Ga++] = ns, ns = e;
      var i = Vl, u = Bl, s = Dh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Dh(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, x = (f & y).toString(32), T = f >> m, k = s - m, L = Dh(t) + k, N = p << k, G = N | T, Se = x + u;
        Vl = 1 << L | G, Bl = Se;
      } else {
        var ve = p << s, Ge = ve | f, $e = u;
        Vl = 1 << v | Ge, Bl = $e;
      }
    }
    function Qy(e) {
      as();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        rs(e, a), G0(e, a, i);
      }
    }
    function Dh(e) {
      return 32 - gu(e);
    }
    function tx(e) {
      return 1 << Dh(e) - 1;
    }
    function Iy(e) {
      for (; e === xh; )
        xh = Ic[--Wc], Ic[Wc] = null, wh = Ic[--Wc], Ic[Wc] = null;
      for (; e === ns; )
        ns = Wa[--Ga], Wa[Ga] = null, Bl = Wa[--Ga], Wa[Ga] = null, Vl = Wa[--Ga], Wa[Ga] = null;
    }
    function nx() {
      return as(), ns !== null ? {
        id: Vl,
        overflow: Bl
      } : null;
    }
    function rx(e, t) {
      as(), Wa[Ga++] = Vl, Wa[Ga++] = Bl, Wa[Ga++] = ns, Vl = t.id, Bl = t.overflow, ns = e;
    }
    function as() {
      er() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Jn = null, Xa = null, gi = !1, is = !1, Wu = null;
    function ax() {
      gi && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function X0() {
      is = !0;
    }
    function ix() {
      return is;
    }
    function lx(e) {
      var t = e.stateNode.containerInfo;
      return Xa = xR(t), Jn = e, gi = !0, Wu = null, is = !1, !0;
    }
    function ux(e, t, a) {
      return Xa = wR(t), Jn = e, gi = !0, Wu = null, is = !1, a !== null && rx(e, a), !0;
    }
    function q0(e, t) {
      switch (e.tag) {
        case q: {
          UR(e.stateNode.containerInfo, t);
          break;
        }
        case re: {
          var a = (e.mode & pe) !== fe;
          HR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Pe: {
          var i = e.memoizedState;
          i.dehydrated !== null && AR(i.dehydrated, t);
          break;
        }
      }
    }
    function K0(e, t) {
      q0(e, t);
      var a = fb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= it) : i.push(a);
    }
    function Wy(e, t) {
      {
        if (is)
          return;
        switch (e.tag) {
          case q: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case re:
                var i = t.type;
                t.pendingProps, FR(a, i);
                break;
              case Ue:
                var u = t.pendingProps;
                jR(a, u);
                break;
            }
            break;
          }
          case re: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case re: {
                var v = t.type, m = t.pendingProps, y = (e.mode & pe) !== fe;
                PR(
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
                var x = t.pendingProps, T = (e.mode & pe) !== fe;
                YR(
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
          case Pe: {
            var k = e.memoizedState, L = k.dehydrated;
            if (L !== null)
              switch (t.tag) {
                case re:
                  var N = t.type;
                  t.pendingProps, VR(L, N);
                  break;
                case Ue:
                  var G = t.pendingProps;
                  BR(L, G);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function Z0(e, t) {
      t.flags = t.flags & ~ta | _t, Wy(e, t);
    }
    function J0(e, t) {
      switch (e.tag) {
        case re: {
          var a = e.type;
          e.pendingProps;
          var i = gR(t, a);
          return i !== null ? (e.stateNode = i, Jn = e, Xa = RR(i), !0) : !1;
        }
        case Ue: {
          var u = e.pendingProps, s = SR(t, u);
          return s !== null ? (e.stateNode = s, Jn = e, Xa = null, !0) : !1;
        }
        case Pe: {
          var f = ER(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: nx(),
              retryLane: Wn
            };
            e.memoizedState = p;
            var v = db(f);
            return v.return = e, e.child = v, Jn = e, Xa = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Gy(e) {
      return (e.mode & pe) !== fe && (e.flags & De) === ge;
    }
    function Xy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function qy(e) {
      if (gi) {
        var t = Xa;
        if (!t) {
          Gy(e) && (Wy(Jn, e), Xy()), Z0(Jn, e), gi = !1, Jn = e;
          return;
        }
        var a = t;
        if (!J0(e, t)) {
          Gy(e) && (Wy(Jn, e), Xy()), t = Hd(a);
          var i = Jn;
          if (!t || !J0(e, t)) {
            Z0(Jn, e), gi = !1, Jn = e;
            return;
          }
          K0(i, a);
        }
      }
    }
    function ox(e, t, a) {
      var i = e.stateNode, u = !is, s = DR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function sx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = bR(t, a, e);
      if (i) {
        var u = Jn;
        if (u !== null)
          switch (u.tag) {
            case q: {
              var s = u.stateNode.containerInfo, f = (u.mode & pe) !== fe;
              NR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case re: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & pe) !== fe;
              zR(
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
    function cx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      _R(a, e);
    }
    function fx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return kR(a);
    }
    function eE(e) {
      for (var t = e.return; t !== null && t.tag !== re && t.tag !== q && t.tag !== Pe; )
        t = t.return;
      Jn = t;
    }
    function bh(e) {
      if (e !== Jn)
        return !1;
      if (!gi)
        return eE(e), gi = !0, !1;
      if (e.tag !== q && (e.tag !== re || MR(e.type) && !Ly(e.type, e.memoizedProps))) {
        var t = Xa;
        if (t)
          if (Gy(e))
            tE(e), Xy();
          else
            for (; t; )
              K0(e, t), t = Hd(t);
      }
      return eE(e), e.tag === Pe ? Xa = fx(e) : Xa = Jn ? Hd(e.stateNode) : null, !0;
    }
    function dx() {
      return gi && Xa !== null;
    }
    function tE(e) {
      for (var t = Xa; t; )
        q0(e, t), t = Hd(t);
    }
    function Gc() {
      Jn = null, Xa = null, gi = !1, is = !1;
    }
    function nE() {
      Wu !== null && (XC(Wu), Wu = null);
    }
    function er() {
      return gi;
    }
    function Ky(e) {
      Wu === null ? Wu = [e] : Wu.push(e);
    }
    var px = M.ReactCurrentBatchConfig, vx = null;
    function hx() {
      return px.transition;
    }
    var Si = {
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
      var mx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Ve && (t = a), a = a.return;
        return t;
      }, ls = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Bd = [], Pd = [], Yd = [], $d = [], Qd = [], Id = [], us = /* @__PURE__ */ new Set();
      Si.recordUnsafeLifecycleWarnings = function(e, t) {
        us.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Bd.push(e), e.mode & Ve && typeof t.UNSAFE_componentWillMount == "function" && Pd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Yd.push(e), e.mode & Ve && typeof t.UNSAFE_componentWillReceiveProps == "function" && $d.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Qd.push(e), e.mode & Ve && typeof t.UNSAFE_componentWillUpdate == "function" && Id.push(e));
      }, Si.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Bd.length > 0 && (Bd.forEach(function(T) {
          e.add(Me(T) || "Component"), us.add(T.type);
        }), Bd = []);
        var t = /* @__PURE__ */ new Set();
        Pd.length > 0 && (Pd.forEach(function(T) {
          t.add(Me(T) || "Component"), us.add(T.type);
        }), Pd = []);
        var a = /* @__PURE__ */ new Set();
        Yd.length > 0 && (Yd.forEach(function(T) {
          a.add(Me(T) || "Component"), us.add(T.type);
        }), Yd = []);
        var i = /* @__PURE__ */ new Set();
        $d.length > 0 && ($d.forEach(function(T) {
          i.add(Me(T) || "Component"), us.add(T.type);
        }), $d = []);
        var u = /* @__PURE__ */ new Set();
        Qd.length > 0 && (Qd.forEach(function(T) {
          u.add(Me(T) || "Component"), us.add(T.type);
        }), Qd = []);
        var s = /* @__PURE__ */ new Set();
        if (Id.length > 0 && (Id.forEach(function(T) {
          s.add(Me(T) || "Component"), us.add(T.type);
        }), Id = []), t.size > 0) {
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
          Oe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = ls(a);
          Oe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var x = ls(u);
          Oe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var _h = /* @__PURE__ */ new Map(), rE = /* @__PURE__ */ new Set();
      Si.recordLegacyContextWarning = function(e, t) {
        var a = mx(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!rE.has(e.type)) {
          var i = _h.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], _h.set(a, i)), i.push(e));
        }
      }, Si.flushLegacyContextWarning = function() {
        _h.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Me(s) || "Component"), rE.add(s.type);
            });
            var u = ls(i);
            try {
              pt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              an();
            }
          }
        });
      }, Si.discardPendingWarnings = function() {
        Bd = [], Pd = [], Yd = [], $d = [], Qd = [], Id = [], _h = /* @__PURE__ */ new Map();
      };
    }
    var Zy, Jy, eg, tg, ng, aE = function(e, t) {
    };
    Zy = !1, Jy = !1, eg = {}, tg = {}, ng = {}, aE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Me(t) || "Component";
        tg[a] || (tg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function yx(e) {
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
        !(typeof a.type == "function" && !yx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Me(e) || "Component";
          eg[u] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), eg[u] = !0);
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
          ei(i, "ref");
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
        if (ng[t])
          return;
        ng[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function iE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function lE(e) {
      function t(D, z) {
        if (e) {
          var b = D.deletions;
          b === null ? (D.deletions = [z], D.flags |= it) : b.push(z);
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
        for (var b = /* @__PURE__ */ new Map(), B = z; B !== null; )
          B.key !== null ? b.set(B.key, B) : b.set(B.index, B), B = B.sibling;
        return b;
      }
      function u(D, z) {
        var b = ms(D, z);
        return b.index = 0, b.sibling = null, b;
      }
      function s(D, z, b) {
        if (D.index = b, !e)
          return D.flags |= Wf, z;
        var B = D.alternate;
        if (B !== null) {
          var te = B.index;
          return te < z ? (D.flags |= _t, z) : te;
        } else
          return D.flags |= _t, z;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= _t), D;
      }
      function p(D, z, b, B) {
        if (z === null || z.tag !== Ue) {
          var te = KS(b, D.mode, B);
          return te.return = D, te;
        } else {
          var X = u(z, b);
          return X.return = D, X;
        }
      }
      function v(D, z, b, B) {
        var te = b.type;
        if (te === Ra)
          return y(D, z, b.props.children, B, b.key);
        if (z !== null && (z.elementType === te || // Keep this check inline so it only runs on the false path:
        f1(z, b) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof te == "object" && te !== null && te.$$typeof === Re && iE(te) === z.type)) {
          var X = u(z, b.props);
          return X.ref = Wd(D, z, b), X.return = D, X._debugSource = b._source, X._debugOwner = b._owner, X;
        }
        var we = qS(b, D.mode, B);
        return we.ref = Wd(D, z, b), we.return = D, we;
      }
      function m(D, z, b, B) {
        if (z === null || z.tag !== oe || z.stateNode.containerInfo !== b.containerInfo || z.stateNode.implementation !== b.implementation) {
          var te = ZS(b, D.mode, B);
          return te.return = D, te;
        } else {
          var X = u(z, b.children || []);
          return X.return = D, X;
        }
      }
      function y(D, z, b, B, te) {
        if (z === null || z.tag !== rt) {
          var X = ao(b, D.mode, B, te);
          return X.return = D, X;
        } else {
          var we = u(z, b);
          return we.return = D, we;
        }
      }
      function x(D, z, b) {
        if (typeof z == "string" && z !== "" || typeof z == "number") {
          var B = KS("" + z, D.mode, b);
          return B.return = D, B;
        }
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case ti: {
              var te = qS(z, D.mode, b);
              return te.ref = Wd(D, null, z), te.return = D, te;
            }
            case Mr: {
              var X = ZS(z, D.mode, b);
              return X.return = D, X;
            }
            case Re: {
              var we = z._payload, Le = z._init;
              return x(D, Le(we), b);
            }
          }
          if (mn(z) || Nr(z)) {
            var ht = ao(z, D.mode, b, null);
            return ht.return = D, ht;
          }
          kh(D, z);
        }
        return typeof z == "function" && Oh(D), null;
      }
      function T(D, z, b, B) {
        var te = z !== null ? z.key : null;
        if (typeof b == "string" && b !== "" || typeof b == "number")
          return te !== null ? null : p(D, z, "" + b, B);
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case ti:
              return b.key === te ? v(D, z, b, B) : null;
            case Mr:
              return b.key === te ? m(D, z, b, B) : null;
            case Re: {
              var X = b._payload, we = b._init;
              return T(D, z, we(X), B);
            }
          }
          if (mn(b) || Nr(b))
            return te !== null ? null : y(D, z, b, B, null);
          kh(D, b);
        }
        return typeof b == "function" && Oh(D), null;
      }
      function k(D, z, b, B, te) {
        if (typeof B == "string" && B !== "" || typeof B == "number") {
          var X = D.get(b) || null;
          return p(z, X, "" + B, te);
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case ti: {
              var we = D.get(B.key === null ? b : B.key) || null;
              return v(z, we, B, te);
            }
            case Mr: {
              var Le = D.get(B.key === null ? b : B.key) || null;
              return m(z, Le, B, te);
            }
            case Re:
              var ht = B._payload, tt = B._init;
              return k(D, z, b, tt(ht), te);
          }
          if (mn(B) || Nr(B)) {
            var fn = D.get(b) || null;
            return y(z, fn, B, te, null);
          }
          kh(z, B);
        }
        return typeof B == "function" && Oh(z), null;
      }
      function L(D, z, b) {
        {
          if (typeof D != "object" || D === null)
            return z;
          switch (D.$$typeof) {
            case ti:
            case Mr:
              aE(D, b);
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
            case Re:
              var te = D._payload, X = D._init;
              L(X(te), z, b);
              break;
          }
        }
        return z;
      }
      function N(D, z, b, B) {
        for (var te = null, X = 0; X < b.length; X++) {
          var we = b[X];
          te = L(we, te, D);
        }
        for (var Le = null, ht = null, tt = z, fn = 0, nt = 0, nn = null; tt !== null && nt < b.length; nt++) {
          tt.index > nt ? (nn = tt, tt = null) : nn = tt.sibling;
          var Dr = T(D, tt, b[nt], B);
          if (Dr === null) {
            tt === null && (tt = nn);
            break;
          }
          e && tt && Dr.alternate === null && t(D, tt), fn = s(Dr, fn, nt), ht === null ? Le = Dr : ht.sibling = Dr, ht = Dr, tt = nn;
        }
        if (nt === b.length) {
          if (a(D, tt), er()) {
            var ur = nt;
            rs(D, ur);
          }
          return Le;
        }
        if (tt === null) {
          for (; nt < b.length; nt++) {
            var Na = x(D, b[nt], B);
            Na !== null && (fn = s(Na, fn, nt), ht === null ? Le = Na : ht.sibling = Na, ht = Na);
          }
          if (er()) {
            var $r = nt;
            rs(D, $r);
          }
          return Le;
        }
        for (var Qr = i(D, tt); nt < b.length; nt++) {
          var br = k(Qr, D, nt, b[nt], B);
          br !== null && (e && br.alternate !== null && Qr.delete(br.key === null ? nt : br.key), fn = s(br, fn, nt), ht === null ? Le = br : ht.sibling = br, ht = br);
        }
        if (e && Qr.forEach(function(vf) {
          return t(D, vf);
        }), er()) {
          var Gl = nt;
          rs(D, Gl);
        }
        return Le;
      }
      function G(D, z, b, B) {
        var te = Nr(b);
        if (typeof te != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          b[Symbol.toStringTag] === "Generator" && (Jy || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Jy = !0), b.entries === te && (Zy || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zy = !0);
          var X = te.call(b);
          if (X)
            for (var we = null, Le = X.next(); !Le.done; Le = X.next()) {
              var ht = Le.value;
              we = L(ht, we, D);
            }
        }
        var tt = te.call(b);
        if (tt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var fn = null, nt = null, nn = z, Dr = 0, ur = 0, Na = null, $r = tt.next(); nn !== null && !$r.done; ur++, $r = tt.next()) {
          nn.index > ur ? (Na = nn, nn = null) : Na = nn.sibling;
          var Qr = T(D, nn, $r.value, B);
          if (Qr === null) {
            nn === null && (nn = Na);
            break;
          }
          e && nn && Qr.alternate === null && t(D, nn), Dr = s(Qr, Dr, ur), nt === null ? fn = Qr : nt.sibling = Qr, nt = Qr, nn = Na;
        }
        if ($r.done) {
          if (a(D, nn), er()) {
            var br = ur;
            rs(D, br);
          }
          return fn;
        }
        if (nn === null) {
          for (; !$r.done; ur++, $r = tt.next()) {
            var Gl = x(D, $r.value, B);
            Gl !== null && (Dr = s(Gl, Dr, ur), nt === null ? fn = Gl : nt.sibling = Gl, nt = Gl);
          }
          if (er()) {
            var vf = ur;
            rs(D, vf);
          }
          return fn;
        }
        for (var wp = i(D, nn); !$r.done; ur++, $r = tt.next()) {
          var il = k(wp, D, ur, $r.value, B);
          il !== null && (e && il.alternate !== null && wp.delete(il.key === null ? ur : il.key), Dr = s(il, Dr, ur), nt === null ? fn = il : nt.sibling = il, nt = il);
        }
        if (e && wp.forEach(function(Yb) {
          return t(D, Yb);
        }), er()) {
          var Pb = ur;
          rs(D, Pb);
        }
        return fn;
      }
      function Se(D, z, b, B) {
        if (z !== null && z.tag === Ue) {
          a(D, z.sibling);
          var te = u(z, b);
          return te.return = D, te;
        }
        a(D, z);
        var X = KS(b, D.mode, B);
        return X.return = D, X;
      }
      function ve(D, z, b, B) {
        for (var te = b.key, X = z; X !== null; ) {
          if (X.key === te) {
            var we = b.type;
            if (we === Ra) {
              if (X.tag === rt) {
                a(D, X.sibling);
                var Le = u(X, b.props.children);
                return Le.return = D, Le._debugSource = b._source, Le._debugOwner = b._owner, Le;
              }
            } else if (X.elementType === we || // Keep this check inline so it only runs on the false path:
            f1(X, b) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof we == "object" && we !== null && we.$$typeof === Re && iE(we) === X.type) {
              a(D, X.sibling);
              var ht = u(X, b.props);
              return ht.ref = Wd(D, X, b), ht.return = D, ht._debugSource = b._source, ht._debugOwner = b._owner, ht;
            }
            a(D, X);
            break;
          } else
            t(D, X);
          X = X.sibling;
        }
        if (b.type === Ra) {
          var tt = ao(b.props.children, D.mode, B, b.key);
          return tt.return = D, tt;
        } else {
          var fn = qS(b, D.mode, B);
          return fn.ref = Wd(D, z, b), fn.return = D, fn;
        }
      }
      function Ge(D, z, b, B) {
        for (var te = b.key, X = z; X !== null; ) {
          if (X.key === te)
            if (X.tag === oe && X.stateNode.containerInfo === b.containerInfo && X.stateNode.implementation === b.implementation) {
              a(D, X.sibling);
              var we = u(X, b.children || []);
              return we.return = D, we;
            } else {
              a(D, X);
              break;
            }
          else
            t(D, X);
          X = X.sibling;
        }
        var Le = ZS(b, D.mode, B);
        return Le.return = D, Le;
      }
      function $e(D, z, b, B) {
        var te = typeof b == "object" && b !== null && b.type === Ra && b.key === null;
        if (te && (b = b.props.children), typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case ti:
              return f(ve(D, z, b, B));
            case Mr:
              return f(Ge(D, z, b, B));
            case Re:
              var X = b._payload, we = b._init;
              return $e(D, z, we(X), B);
          }
          if (mn(b))
            return N(D, z, b, B);
          if (Nr(b))
            return G(D, z, b, B);
          kh(D, b);
        }
        return typeof b == "string" && b !== "" || typeof b == "number" ? f(Se(D, z, "" + b, B)) : (typeof b == "function" && Oh(D), a(D, z));
      }
      return $e;
    }
    var Xc = lE(!0), uE = lE(!1);
    function gx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ms(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ms(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Sx(e, t) {
      for (var a = e.child; a !== null; )
        lb(a, t), a = a.sibling;
    }
    var rg = $u(null), ag;
    ag = {};
    var Lh = null, qc = null, ig = null, Mh = !1;
    function Nh() {
      Lh = null, qc = null, ig = null, Mh = !1;
    }
    function oE() {
      Mh = !0;
    }
    function sE() {
      Mh = !1;
    }
    function cE(e, t, a) {
      xr(rg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ag && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ag;
    }
    function lg(e, t) {
      var a = rg.current;
      Rr(rg, t), e._currentValue = a;
    }
    function ug(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (kl(i.childLanes, t) ? u !== null && !kl(u.childLanes, t) && (u.childLanes = Ne(u.childLanes, t)) : (i.childLanes = Ne(i.childLanes, t), u !== null && (u.childLanes = Ne(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ex(e, t, a) {
      Cx(e, t, a);
    }
    function Cx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ue) {
                var p = wu(a), v = Pl(Tt, p);
                v.tag = Uh;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, x = y.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), y.pending = v;
                }
              }
              i.lanes = Ne(i.lanes, a);
              var T = i.alternate;
              T !== null && (T.lanes = Ne(T.lanes, a)), ug(i.return, a, e), s.lanes = Ne(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ke)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Vt) {
          var k = i.return;
          if (k === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          k.lanes = Ne(k.lanes, a);
          var L = k.alternate;
          L !== null && (L.lanes = Ne(L.lanes, a)), ug(k, a, e), u = i.sibling;
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
      Lh = e, qc = null, ig = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Cr(a.lanes, t) && op(), a.firstContext = null);
      }
    }
    function Tn(e) {
      Mh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ig !== e) {
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
    function og(e) {
      os === null ? os = [e] : os.push(e);
    }
    function Tx() {
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
    function fE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a, zh(e, i);
    }
    function Rx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function xx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a, zh(e, i);
    }
    function pa(e, t) {
      return zh(e, t);
    }
    var wx = zh;
    function zh(e, t) {
      e.lanes = Ne(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ne(a.lanes, t)), a === null && (e.flags & (_t | ta)) !== ge && u1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ne(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ne(a.childLanes, t) : (u.flags & (_t | ta)) !== ge && u1(e), i = u, u = u.return;
      if (i.tag === q) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var dE = 0, pE = 1, Uh = 2, sg = 3, Ah = !1, cg, Hh;
    cg = !1, Hh = null;
    function fg(e) {
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
    function vE(e, t) {
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
    function Pl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: dE,
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
      if (Hh === u && !cg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), cg = !0), RD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, wx(e, a);
      } else
        return xx(e, u, t, a);
    }
    function Fh(e, t, a) {
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
    function dg(e, t) {
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
    function Dx(e, t, a, i, u, s) {
      switch (a.tag) {
        case pE: {
          var f = a.payload;
          if (typeof f == "function") {
            oE();
            var p = f.call(s, i, u);
            {
              if (e.mode & Ve) {
                en(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  en(!1);
                }
              }
              sE();
            }
            return p;
          }
          return f;
        }
        case sg:
          e.flags = e.flags & ~gn | De;
        case dE: {
          var v = a.payload, m;
          if (typeof v == "function") {
            oE(), m = v.call(s, i, u);
            {
              if (e.mode & Ve) {
                en(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  en(!1);
                }
              }
              sE();
            }
          } else
            m = v;
          return m == null ? i : je({}, i, m);
        }
        case Uh:
          return Ah = !0, i;
      }
      return i;
    }
    function jh(e, t, a, i) {
      var u = e.updateQueue;
      Ah = !1, Hh = u.shared;
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
        var k = u.baseState, L = A, N = null, G = null, Se = null, ve = s;
        do {
          var Ge = ve.lane, $e = ve.eventTime;
          if (kl(i, Ge)) {
            if (Se !== null) {
              var z = {
                eventTime: $e,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: tn,
                tag: ve.tag,
                payload: ve.payload,
                callback: ve.callback,
                next: null
              };
              Se = Se.next = z;
            }
            k = Dx(e, u, ve, k, t, a);
            var b = ve.callback;
            if (b !== null && // If the update was already committed, we should not queue its
            // callback again.
            ve.lane !== tn) {
              e.flags |= Ba;
              var B = u.effects;
              B === null ? u.effects = [ve] : B.push(ve);
            }
          } else {
            var D = {
              eventTime: $e,
              lane: Ge,
              tag: ve.tag,
              payload: ve.payload,
              callback: ve.callback,
              next: null
            };
            Se === null ? (G = Se = D, N = k) : Se = Se.next = D, L = Ne(L, Ge);
          }
          if (ve = ve.next, ve === null) {
            if (p = u.shared.pending, p === null)
              break;
            var te = p, X = te.next;
            te.next = null, ve = X, u.lastBaseUpdate = te, u.shared.pending = null;
          }
        } while (!0);
        Se === null && (N = k), u.baseState = N, u.firstBaseUpdate = G, u.lastBaseUpdate = Se;
        var we = u.shared.interleaved;
        if (we !== null) {
          var Le = we;
          do
            L = Ne(L, Le.lane), Le = Le.next;
          while (Le !== we);
        } else
          s === null && (u.shared.lanes = A);
        Ep(L), e.lanes = L, e.memoizedState = k;
      }
      Hh = null;
    }
    function bx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function hE() {
      Ah = !1;
    }
    function Vh() {
      return Ah;
    }
    function mE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, bx(f, a));
        }
    }
    var Gd = {}, Xu = $u(Gd), Xd = $u(Gd), Bh = $u(Gd);
    function Ph(e) {
      if (e === Gd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function yE() {
      var e = Ph(Bh.current);
      return e;
    }
    function pg(e, t) {
      xr(Bh, t, e), xr(Xd, e, e), xr(Xu, Gd, e);
      var a = $T(t);
      Rr(Xu, e), xr(Xu, a, e);
    }
    function Zc(e) {
      Rr(Xu, e), Rr(Xd, e), Rr(Bh, e);
    }
    function vg() {
      var e = Ph(Xu.current);
      return e;
    }
    function gE(e) {
      Ph(Bh.current);
      var t = Ph(Xu.current), a = QT(t, e.type);
      t !== a && (xr(Xd, e, e), xr(Xu, a, e));
    }
    function hg(e) {
      Xd.current === e && (Rr(Xu, e), Rr(Xd, e));
    }
    var _x = 0, SE = 1, EE = 1, qd = 2, Ei = $u(_x);
    function mg(e, t) {
      return (e & t) !== 0;
    }
    function Jc(e) {
      return e & SE;
    }
    function yg(e, t) {
      return e & SE | t;
    }
    function kx(e, t) {
      return e | t;
    }
    function qu(e, t) {
      xr(Ei, t, e);
    }
    function ef(e) {
      Rr(Ei, e);
    }
    function Ox(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Yh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Pe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || H0(i) || Uy(i))
              return t;
          }
        } else if (t.tag === dt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & De) !== ge;
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
    ), Zi = (
      /*  */
      2
    ), Mn = (
      /*    */
      4
    ), tr = (
      /*   */
      8
    ), gg = [];
    function Sg() {
      for (var e = 0; e < gg.length; e++) {
        var t = gg[e];
        t._workInProgressVersionPrimary = null;
      }
      gg.length = 0;
    }
    function Lx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Z = M.ReactCurrentDispatcher, Kd = M.ReactCurrentBatchConfig, Eg, tf;
    Eg = /* @__PURE__ */ new Set();
    var ss = A, vt = null, Nn = null, zn = null, $h = !1, Zd = !1, Jd = 0, Mx = 0, Nx = 25, U = null, qa = null, Ku = -1, Cg = !1;
    function ot() {
      {
        var e = U;
        qa === null ? qa = [e] : qa.push(e);
      }
    }
    function I() {
      {
        var e = U;
        qa !== null && (Ku++, qa[Ku] !== e && zx(e));
      }
    }
    function nf(e) {
      e != null && !mn(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", U, typeof e);
    }
    function zx(e) {
      {
        var t = Me(vt);
        if (!Eg.has(t) && (Eg.add(t), qa !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ku; u++) {
            for (var s = qa[u], f = u === Ku ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function Tg(e, t) {
      if (Cg)
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
      ss = s, vt = t, qa = e !== null ? e._debugHookTypes : null, Ku = -1, Cg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = A, e !== null && e.memoizedState !== null ? Z.current = PE : qa !== null ? Z.current = BE : Z.current = VE;
      var f = a(i, u);
      if (Zd) {
        var p = 0;
        do {
          if (Zd = !1, Jd = 0, p >= Nx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Cg = !1, Nn = null, zn = null, t.updateQueue = null, Ku = -1, Z.current = YE, f = a(i, u);
        } while (Zd);
      }
      Z.current = rm, t._debugHookTypes = qa;
      var v = Nn !== null && Nn.next !== null;
      if (ss = A, vt = null, Nn = null, zn = null, U = null, qa = null, Ku = -1, e !== null && (e.flags & _n) !== (t.flags & _n) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & pe) !== fe && g("Internal React error: Expected static flag was missing. Please notify the React team."), $h = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function af() {
      var e = Jd !== 0;
      return Jd = 0, e;
    }
    function CE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & jr) !== fe ? t.flags &= ~(El | hr | Mt | ze) : t.flags &= ~(Mt | ze), e.lanes = Vo(e.lanes, a);
    }
    function TE() {
      if (Z.current = rm, $h) {
        for (var e = vt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        $h = !1;
      }
      ss = A, vt = null, Nn = null, zn = null, qa = null, Ku = -1, U = null, UE = !1, Zd = !1, Jd = 0;
    }
    function Ji() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return zn === null ? vt.memoizedState = zn = e : zn = zn.next = e, zn;
    }
    function Ka() {
      var e;
      if (Nn === null) {
        var t = vt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Nn.next;
      var a;
      if (zn === null ? a = vt.memoizedState : a = zn.next, a !== null)
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
        zn === null ? vt.memoizedState = zn = i : zn = zn.next = i;
      }
      return zn;
    }
    function RE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Rg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function xg(e, t, a) {
      var i = Ji(), u;
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
      var f = s.dispatch = Fx.bind(null, vt, s);
      return [i.memoizedState, f];
    }
    function wg(e, t, a) {
      var i = Ka(), u = i.queue;
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
        var y = f.next, x = s.baseState, T = null, k = null, L = null, N = y;
        do {
          var G = N.lane;
          if (kl(ss, G)) {
            if (L !== null) {
              var ve = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: tn,
                action: N.action,
                hasEagerState: N.hasEagerState,
                eagerState: N.eagerState,
                next: null
              };
              L = L.next = ve;
            }
            if (N.hasEagerState)
              x = N.eagerState;
            else {
              var Ge = N.action;
              x = e(x, Ge);
            }
          } else {
            var Se = {
              lane: G,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            };
            L === null ? (k = L = Se, T = x) : L = L.next = Se, vt.lanes = Ne(vt.lanes, G), Ep(G);
          }
          N = N.next;
        } while (N !== null && N !== y);
        L === null ? T = x : L.next = k, ie(x, i.memoizedState) || op(), i.memoizedState = x, i.baseState = T, i.baseQueue = L, u.lastRenderedState = x;
      }
      var $e = u.interleaved;
      if ($e !== null) {
        var D = $e;
        do {
          var z = D.lane;
          vt.lanes = Ne(vt.lanes, z), Ep(z), D = D.next;
        } while (D !== $e);
      } else
        f === null && (u.lanes = A);
      var b = u.dispatch;
      return [i.memoizedState, b];
    }
    function Dg(e, t, a) {
      var i = Ka(), u = i.queue;
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
    function v_(e, t, a) {
    }
    function h_(e, t, a) {
    }
    function bg(e, t, a) {
      var i = vt, u = Ji(), s, f = er();
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
        jo(v, ss) || xE(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, Xh(DE.bind(null, i, m, e), [e]), i.flags |= Mt, ep(Ln | tr, wE.bind(null, i, m, s, t), void 0, null), s;
    }
    function Qh(e, t, a) {
      var i = vt, u = Ka(), s = t();
      if (!tf) {
        var f = t();
        ie(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), tf = !0);
      }
      var p = u.memoizedState, v = !ie(p, s);
      v && (u.memoizedState = s, op());
      var m = u.queue;
      if (np(DE.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      zn !== null && zn.memoizedState.tag & Ln) {
        i.flags |= Mt, ep(Ln | tr, wE.bind(null, i, m, s, t), void 0, null);
        var y = Tm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        jo(y, ss) || xE(i, t, s);
      }
      return s;
    }
    function xE(e, t, a) {
      e.flags |= ko;
      var i = {
        getSnapshot: t,
        value: a
      }, u = vt.updateQueue;
      if (u === null)
        u = RE(), vt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function wE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, bE(t) && _E(e);
    }
    function DE(e, t, a) {
      var i = function() {
        bE(t) && _E(e);
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
    function _E(e) {
      var t = pa(e, me);
      t !== null && Fn(t, e, me, Tt);
    }
    function Ih(e) {
      var t = Ji();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: A,
        dispatch: null,
        lastRenderedReducer: Rg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = jx.bind(null, vt, a);
      return [t.memoizedState, i];
    }
    function _g(e) {
      return wg(Rg);
    }
    function kg(e) {
      return Dg(Rg);
    }
    function ep(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = vt.updateQueue;
      if (s === null)
        s = RE(), vt.updateQueue = s, s.lastEffect = u.next = u;
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
    function Og(e) {
      var t = Ji();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Wh(e) {
      var t = Ka();
      return t.memoizedState;
    }
    function tp(e, t, a, i) {
      var u = Ji(), s = i === void 0 ? null : i;
      vt.flags |= e, u.memoizedState = ep(Ln | t, a, void 0, s);
    }
    function Gh(e, t, a, i) {
      var u = Ka(), s = i === void 0 ? null : i, f = void 0;
      if (Nn !== null) {
        var p = Nn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Tg(s, v)) {
            u.memoizedState = ep(t, a, f, s);
            return;
          }
        }
      }
      vt.flags |= e, u.memoizedState = ep(Ln | t, a, f, s);
    }
    function Xh(e, t) {
      return (vt.mode & jr) !== fe ? tp(El | Mt | Vi, tr, e, t) : tp(Mt | Vi, tr, e, t);
    }
    function np(e, t) {
      return Gh(Mt, tr, e, t);
    }
    function Lg(e, t) {
      return tp(ze, Zi, e, t);
    }
    function qh(e, t) {
      return Gh(ze, Zi, e, t);
    }
    function Mg(e, t) {
      var a = ze;
      return a |= vr, (vt.mode & jr) !== fe && (a |= hr), tp(a, Mn, e, t);
    }
    function Kh(e, t) {
      return Gh(ze, Mn, e, t);
    }
    function kE(e, t) {
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
    function Ng(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = ze;
      return u |= vr, (vt.mode & jr) !== fe && (u |= hr), tp(u, Mn, kE.bind(null, t, e), i);
    }
    function Zh(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Gh(ze, Mn, kE.bind(null, t, e), i);
    }
    function Ux(e, t) {
    }
    var Jh = Ux;
    function zg(e, t) {
      var a = Ji(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function em(e, t) {
      var a = Ka(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Tg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ug(e, t) {
      var a = Ji(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function tm(e, t) {
      var a = Ka(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Tg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Ag(e) {
      var t = Ji();
      return t.memoizedState = e, e;
    }
    function OE(e) {
      var t = Ka(), a = Nn, i = a.memoizedState;
      return ME(t, i, e);
    }
    function LE(e) {
      var t = Ka();
      if (Nn === null)
        return t.memoizedState = e, e;
      var a = Nn.memoizedState;
      return ME(t, a, e);
    }
    function ME(e, t, a) {
      var i = !Lv(ss);
      if (i) {
        if (!ie(a, t)) {
          var u = zv();
          vt.lanes = Ne(vt.lanes, u), Ep(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, op()), e.memoizedState = a, a;
    }
    function Ax(e, t, a) {
      var i = ua();
      Pt(ny(i, pi)), e(!0);
      var u = Kd.transition;
      Kd.transition = {};
      var s = Kd.transition;
      Kd.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Pt(i), Kd.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Oe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Hg() {
      var e = Ih(!1), t = e[0], a = e[1], i = Ax.bind(null, a), u = Ji();
      return u.memoizedState = i, [t, i];
    }
    function NE() {
      var e = _g(), t = e[0], a = Ka(), i = a.memoizedState;
      return [t, i];
    }
    function zE() {
      var e = kg(), t = e[0], a = Ka(), i = a.memoizedState;
      return [t, i];
    }
    var UE = !1;
    function Hx() {
      return UE;
    }
    function Fg() {
      var e = Ji(), t = Tm(), a = t.identifierPrefix, i;
      if (er()) {
        var u = ex();
        i = ":" + a + "R" + u;
        var s = Jd++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Mx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function nm() {
      var e = Ka(), t = e.memoizedState;
      return t;
    }
    function Fx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = no(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (AE(e))
        HE(t, u);
      else {
        var s = fE(e, t, u, i);
        if (s !== null) {
          var f = Yr();
          Fn(s, e, i, f), FE(s, t, i);
        }
      }
      jE(e, i);
    }
    function jx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = no(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (AE(e))
        HE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === A && (s === null || s.lanes === A)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Z.current, Z.current = Ci;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, ie(m, v)) {
                Rx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Z.current = p;
            }
          }
        }
        var y = fE(e, t, u, i);
        if (y !== null) {
          var x = Yr();
          Fn(y, e, i, x), FE(y, t, i);
        }
      }
      jE(e, i);
    }
    function AE(e) {
      var t = e.alternate;
      return e === vt || t !== null && t === vt;
    }
    function HE(e, t) {
      Zd = $h = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function FE(e, t, a) {
      if (od(a)) {
        var i = t.lanes;
        i = vc(i, e.pendingLanes);
        var u = Ne(i, a);
        t.lanes = u, sd(e, u);
      }
    }
    function jE(e, t, a) {
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
    }, VE = null, BE = null, PE = null, YE = null, el = null, Ci = null, am = null;
    {
      var jg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ke = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      VE = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", ot(), nf(t), zg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", ot(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", ot(), nf(t), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", ot(), nf(a), Ng(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", ot(), nf(t), Lg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ot(), nf(t), Mg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ot(), nf(t);
          var a = Z.current;
          Z.current = el;
          try {
            return Ug(e, t);
          } finally {
            Z.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ot();
          var i = Z.current;
          Z.current = el;
          try {
            return xg(e, t, a);
          } finally {
            Z.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ot(), Og(e);
        },
        useState: function(e) {
          U = "useState", ot();
          var t = Z.current;
          Z.current = el;
          try {
            return Ih(e);
          } finally {
            Z.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ot(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ot(), Ag(e);
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
          return U = "useId", ot(), Fg();
        },
        unstable_isNewReconciler: Y
      }, BE = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", I(), zg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", I(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", I(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", I(), Ng(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", I(), Lg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", I(), Mg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", I();
          var a = Z.current;
          Z.current = el;
          try {
            return Ug(e, t);
          } finally {
            Z.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", I();
          var i = Z.current;
          Z.current = el;
          try {
            return xg(e, t, a);
          } finally {
            Z.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", I(), Og(e);
        },
        useState: function(e) {
          U = "useState", I();
          var t = Z.current;
          Z.current = el;
          try {
            return Ih(e);
          } finally {
            Z.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", I(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", I(), Ag(e);
        },
        useTransition: function() {
          return U = "useTransition", I(), Hg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", I(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", I(), bg(e, t, a);
        },
        useId: function() {
          return U = "useId", I(), Fg();
        },
        unstable_isNewReconciler: Y
      }, PE = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", I(), em(e, t);
        },
        useContext: function(e) {
          return U = "useContext", I(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", I(), np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", I(), Zh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", I(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", I(), Kh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", I();
          var a = Z.current;
          Z.current = Ci;
          try {
            return tm(e, t);
          } finally {
            Z.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", I();
          var i = Z.current;
          Z.current = Ci;
          try {
            return wg(e, t, a);
          } finally {
            Z.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", I(), Wh();
        },
        useState: function(e) {
          U = "useState", I();
          var t = Z.current;
          Z.current = Ci;
          try {
            return _g(e);
          } finally {
            Z.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", I(), Jh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", I(), OE(e);
        },
        useTransition: function() {
          return U = "useTransition", I(), NE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", I(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", I(), Qh(e, t);
        },
        useId: function() {
          return U = "useId", I(), nm();
        },
        unstable_isNewReconciler: Y
      }, YE = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", I(), em(e, t);
        },
        useContext: function(e) {
          return U = "useContext", I(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", I(), np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", I(), Zh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", I(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", I(), Kh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", I();
          var a = Z.current;
          Z.current = am;
          try {
            return tm(e, t);
          } finally {
            Z.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", I();
          var i = Z.current;
          Z.current = am;
          try {
            return Dg(e, t, a);
          } finally {
            Z.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", I(), Wh();
        },
        useState: function(e) {
          U = "useState", I();
          var t = Z.current;
          Z.current = am;
          try {
            return kg(e);
          } finally {
            Z.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", I(), Jh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", I(), LE(e);
        },
        useTransition: function() {
          return U = "useTransition", I(), zE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", I(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", I(), Qh(e, t);
        },
        useId: function() {
          return U = "useId", I(), nm();
        },
        unstable_isNewReconciler: Y
      }, el = {
        readContext: function(e) {
          return jg(), Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", ke(), ot(), zg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", ke(), ot(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", ke(), ot(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", ke(), ot(), Ng(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", ke(), ot(), Lg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ke(), ot(), Mg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ke(), ot();
          var a = Z.current;
          Z.current = el;
          try {
            return Ug(e, t);
          } finally {
            Z.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ke(), ot();
          var i = Z.current;
          Z.current = el;
          try {
            return xg(e, t, a);
          } finally {
            Z.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ke(), ot(), Og(e);
        },
        useState: function(e) {
          U = "useState", ke(), ot();
          var t = Z.current;
          Z.current = el;
          try {
            return Ih(e);
          } finally {
            Z.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ke(), ot(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ke(), ot(), Ag(e);
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
          return U = "useId", ke(), ot(), Fg();
        },
        unstable_isNewReconciler: Y
      }, Ci = {
        readContext: function(e) {
          return jg(), Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", ke(), I(), em(e, t);
        },
        useContext: function(e) {
          return U = "useContext", ke(), I(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", ke(), I(), np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", ke(), I(), Zh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", ke(), I(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ke(), I(), Kh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ke(), I();
          var a = Z.current;
          Z.current = Ci;
          try {
            return tm(e, t);
          } finally {
            Z.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ke(), I();
          var i = Z.current;
          Z.current = Ci;
          try {
            return wg(e, t, a);
          } finally {
            Z.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ke(), I(), Wh();
        },
        useState: function(e) {
          U = "useState", ke(), I();
          var t = Z.current;
          Z.current = Ci;
          try {
            return _g(e);
          } finally {
            Z.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ke(), I(), Jh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ke(), I(), OE(e);
        },
        useTransition: function() {
          return U = "useTransition", ke(), I(), NE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", ke(), I(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", ke(), I(), Qh(e, t);
        },
        useId: function() {
          return U = "useId", ke(), I(), nm();
        },
        unstable_isNewReconciler: Y
      }, am = {
        readContext: function(e) {
          return jg(), Tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", ke(), I(), em(e, t);
        },
        useContext: function(e) {
          return U = "useContext", ke(), I(), Tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", ke(), I(), np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", ke(), I(), Zh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", ke(), I(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ke(), I(), Kh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ke(), I();
          var a = Z.current;
          Z.current = Ci;
          try {
            return tm(e, t);
          } finally {
            Z.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ke(), I();
          var i = Z.current;
          Z.current = Ci;
          try {
            return Dg(e, t, a);
          } finally {
            Z.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ke(), I(), Wh();
        },
        useState: function(e) {
          U = "useState", ke(), I();
          var t = Z.current;
          Z.current = Ci;
          try {
            return kg(e);
          } finally {
            Z.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ke(), I(), Jh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ke(), I(), LE(e);
        },
        useTransition: function() {
          return U = "useTransition", ke(), I(), zE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", ke(), I(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", ke(), I(), Qh(e, t);
        },
        useId: function() {
          return U = "useId", ke(), I(), nm();
        },
        unstable_isNewReconciler: Y
      };
    }
    var Zu = xe.unstable_now, $E = 0, im = -1, rp = -1, lm = -1, Vg = !1, um = !1;
    function QE() {
      return Vg;
    }
    function Vx() {
      um = !0;
    }
    function Bx() {
      Vg = !1, um = !1;
    }
    function Px() {
      Vg = um, um = !1;
    }
    function IE() {
      return $E;
    }
    function WE() {
      $E = Zu();
    }
    function Bg(e) {
      rp = Zu(), e.actualStartTime < 0 && (e.actualStartTime = Zu());
    }
    function GE(e) {
      rp = -1;
    }
    function om(e, t) {
      if (rp >= 0) {
        var a = Zu() - rp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), rp = -1;
      }
    }
    function tl(e) {
      if (im >= 0) {
        var t = Zu() - im;
        im = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case q:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case yt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Pg(e) {
      if (lm >= 0) {
        var t = Zu() - lm;
        lm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case q:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case yt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function nl() {
      im = Zu();
    }
    function Yg() {
      lm = Zu();
    }
    function $g(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ti(e, t) {
      if (e && e.defaultProps) {
        var a = je({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Qg = {}, Ig, Wg, Gg, Xg, qg, XE, sm, Kg, Zg, Jg, ap;
    {
      Ig = /* @__PURE__ */ new Set(), Wg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), ap = /* @__PURE__ */ new Set();
      var qE = /* @__PURE__ */ new Set();
      sm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          qE.has(a) || (qE.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, XE = function(e, t) {
        if (t === void 0) {
          var a = ft(e) || "Component";
          qg.has(a) || (qg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Qg);
    }
    function eS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Ve) {
          en(!0);
          try {
            s = a(i, u);
          } finally {
            en(!1);
          }
        }
        XE(t, s);
      }
      var f = s == null ? u : je({}, u, s);
      if (e.memoizedState = f, e.lanes === A) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var tS = {
      isMounted: Hr,
      enqueueSetState: function(e, t, a) {
        var i = Jr(e), u = Yr(), s = no(i), f = Pl(u, s);
        f.payload = t, a != null && (sm(a, "setState"), f.callback = a);
        var p = Gu(i, f, s);
        p !== null && (Fn(p, i, s, u), Fh(p, i, s)), No(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Jr(e), u = Yr(), s = no(i), f = Pl(u, s);
        f.tag = pE, f.payload = t, a != null && (sm(a, "replaceState"), f.callback = a);
        var p = Gu(i, f, s);
        p !== null && (Fn(p, i, s, u), Fh(p, i, s)), No(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Jr(e), i = Yr(), u = no(a), s = Pl(i, u);
        s.tag = Uh, t != null && (sm(t, "forceUpdate"), s.callback = t);
        var f = Gu(a, s, u);
        f !== null && (Fn(f, a, u, i), Fh(f, a, u)), Ks(a, u);
      }
    };
    function KE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Ve) {
            en(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              en(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", ft(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Te(a, i) || !Te(u, s) : !0;
    }
    function Yx(e, t, a) {
      var i = e.stateNode;
      {
        var u = ft(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ve) === fe && (ap.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ve) === fe && (ap.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Zg.has(t) && (Zg.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ft(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Gg.has(t) && (Gg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ft(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || mn(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function ZE(e, t) {
      t.updater = tS, e.stateNode = t, fu(t, e), t._reactInternalInstance = Qg;
    }
    function JE(e, t, a) {
      var i = !1, u = La, s = La, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === j && f._context === void 0
        );
        if (!p && !Jg.has(t)) {
          Jg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === E ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ft(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Tn(f);
      else {
        u = $c(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? Qc(e, u) : La;
      }
      var y = new t(a, s);
      if (e.mode & Ve) {
        en(!0);
        try {
          y = new t(a, s);
        } finally {
          en(!1);
        }
      }
      var x = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      ZE(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var T = ft(t) || "Component";
          Wg.has(T) || (Wg.add(T), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", T, y.state === null ? "null" : "undefined", T));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var k = null, L = null, N = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? k = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (k = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? L = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (L = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? N = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (N = "UNSAFE_componentWillUpdate"), k !== null || L !== null || N !== null) {
            var G = ft(t) || "Component", Se = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Xg.has(G) || (Xg.add(G), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, G, Se, k !== null ? `
  ` + k : "", L !== null ? `
  ` + L : "", N !== null ? `
  ` + N : ""));
          }
        }
      }
      return i && P0(e, u, s), y;
    }
    function $x(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Me(e) || "Component"), tS.enqueueReplaceState(t, t.state, null));
    }
    function eC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Me(e) || "Component";
          Ig.has(s) || (Ig.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        tS.enqueueReplaceState(t, t.state, null);
      }
    }
    function nS(e, t, a, i) {
      Yx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, fg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Tn(s);
      else {
        var f = $c(e, t, !0);
        u.context = Qc(e, f);
      }
      {
        if (u.state === a) {
          var p = ft(t) || "Component";
          Kg.has(p) || (Kg.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Ve && Si.recordLegacyContextWarning(e, u), Si.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (eS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && ($x(e, u), jh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = ze;
        m |= vr, (e.mode & jr) !== fe && (m |= hr), e.flags |= m;
      }
    }
    function Qx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = La;
      if (typeof p == "object" && p !== null)
        v = Tn(p);
      else {
        var m = $c(e, t, !0);
        v = Qc(e, m);
      }
      var y = t.getDerivedStateFromProps, x = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && eC(e, u, a, v), hE();
      var T = e.memoizedState, k = u.state = T;
      if (jh(e, a, u, i), k = e.memoizedState, s === a && T === k && !Eh() && !Vh()) {
        if (typeof u.componentDidMount == "function") {
          var L = ze;
          L |= vr, (e.mode & jr) !== fe && (L |= hr), e.flags |= L;
        }
        return !1;
      }
      typeof y == "function" && (eS(e, t, y, a), k = e.memoizedState);
      var N = Vh() || KE(e, t, s, a, T, k, v);
      if (N) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var G = ze;
          G |= vr, (e.mode & jr) !== fe && (G |= hr), e.flags |= G;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Se = ze;
          Se |= vr, (e.mode & jr) !== fe && (Se |= hr), e.flags |= Se;
        }
        e.memoizedProps = a, e.memoizedState = k;
      }
      return u.props = a, u.state = k, u.context = v, N;
    }
    function Ix(e, t, a, i, u) {
      var s = t.stateNode;
      vE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Ti(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, x = La;
      if (typeof y == "object" && y !== null)
        x = Tn(y);
      else {
        var T = $c(t, a, !0);
        x = Qc(t, T);
      }
      var k = a.getDerivedStateFromProps, L = typeof k == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !L && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== x) && eC(t, s, i, x), hE();
      var N = t.memoizedState, G = s.state = N;
      if (jh(t, i, s, u), G = t.memoizedState, f === v && N === G && !Eh() && !Vh() && !Ee)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= ze), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= ea), !1;
      typeof k == "function" && (eS(t, a, k, i), G = t.memoizedState);
      var Se = Vh() || KE(t, a, p, i, N, G, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ee;
      return Se ? (!L && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, G, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, G, x)), typeof s.componentDidUpdate == "function" && (t.flags |= ze), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ea)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= ze), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= ea), t.memoizedProps = i, t.memoizedState = G), s.props = i, s.state = G, s.context = x, Se;
    }
    function cs(e, t) {
      return {
        value: e,
        source: t,
        stack: Sf(t),
        digest: null
      };
    }
    function rS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Wx(e, t) {
      return !0;
    }
    function aS(e, t) {
      try {
        var a = Wx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ue)
            return;
          console.error(i);
        }
        var p = u ? Me(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === q)
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
    var Gx = typeof WeakMap == "function" ? WeakMap : Map;
    function tC(e, t, a) {
      var i = Pl(Tt, a);
      i.tag = sg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        VD(u), aS(e, t);
      }, i;
    }
    function iS(e, t, a) {
      var i = Pl(Tt, a);
      i.tag = sg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          d1(e), aS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        d1(e), aS(e, t), typeof u != "function" && FD(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Cr(e.lanes, me) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Me(e) || "Unknown"));
      }), i;
    }
    function nC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Gx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = BD.bind(null, e, t, a);
        Fr && Cp(e, a), t.then(s, s);
      }
    }
    function Xx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function qx(e, t) {
      var a = e.tag;
      if ((e.mode & pe) === fe && (a === se || a === Be || a === Ae)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function rC(e) {
      var t = e;
      do {
        if (t.tag === Pe && Ox(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function aC(e, t, a, i, u) {
      if ((e.mode & pe) === fe) {
        if (e === t)
          e.flags |= gn;
        else {
          if (e.flags |= De, a.flags |= Oo, a.flags &= ~(js | Ur), a.tag === ue) {
            var s = a.alternate;
            if (s === null)
              a.tag = jn;
            else {
              var f = Pl(Tt, me);
              f.tag = Uh, Gu(a, f, me);
            }
          }
          a.lanes = Ne(a.lanes, me);
        }
        return e;
      }
      return e.flags |= gn, e.lanes = u, e;
    }
    function Kx(e, t, a, i, u) {
      if (a.flags |= Ur, Fr && Cp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        qx(a), er() && a.mode & pe && X0();
        var f = rC(t);
        if (f !== null) {
          f.flags &= ~Bt, aC(f, t, a, e, u), f.mode & pe && nC(e, s, u), Xx(f, e, s);
          return;
        } else {
          if (!ud(u)) {
            nC(e, s, u), FS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (er() && a.mode & pe) {
        X0();
        var v = rC(t);
        if (v !== null) {
          (v.flags & gn) === ge && (v.flags |= Bt), aC(v, t, a, e, u), Ky(cs(i, a));
          return;
        }
      }
      i = cs(i, a), OD(i);
      var m = t;
      do {
        switch (m.tag) {
          case q: {
            var y = i;
            m.flags |= gn;
            var x = wu(u);
            m.lanes = Ne(m.lanes, x);
            var T = tC(m, y, x);
            dg(m, T);
            return;
          }
          case ue:
            var k = i, L = m.type, N = m.stateNode;
            if ((m.flags & De) === ge && (typeof L.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && !r1(N))) {
              m.flags |= gn;
              var G = wu(u);
              m.lanes = Ne(m.lanes, G);
              var Se = iS(m, k, G);
              dg(m, Se);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function Zx() {
      return null;
    }
    var ip = M.ReactCurrentOwner, Ri = !1, lS, lp, uS, oS, sS, fs, cS, cm, up;
    lS = {}, lp = {}, uS = {}, oS = {}, sS = {}, fs = !1, cS = {}, cm = {}, up = {};
    function Br(e, t, a, i) {
      e === null ? t.child = uE(t, null, a, i) : t.child = Xc(t, e.child, a, i);
    }
    function Jx(e, t, a, i) {
      t.child = Xc(t, e.child, null, i), t.child = Xc(t, null, a, i);
    }
    function iC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && yi(
          s,
          i,
          // Resolved props
          "prop",
          ft(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      Kc(t, u), hu(t);
      {
        if (ip.current = t, Da(!0), v = rf(e, t, f, i, p, u), m = af(), t.mode & Ve) {
          en(!0);
          try {
            v = rf(e, t, f, i, p, u), m = af();
          } finally {
            en(!1);
          }
        }
        Da(!1);
      }
      return gr(), e !== null && !Ri ? (CE(e, t, u), Yl(e, t, u)) : (er() && m && Qy(t), t.flags |= Fi, Br(e, t, v, u), t.child);
    }
    function lC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (ab(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = pf(s), t.tag = Ae, t.type = f, pS(t, s), uC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && yi(
            p,
            i,
            // Resolved props
            "prop",
            ft(s)
          ), a.defaultProps !== void 0) {
            var v = ft(s) || "Unknown";
            up[v] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), up[v] = !0);
          }
        }
        var m = XS(a.type, null, i, t, t.mode, u);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var y = a.type, x = y.propTypes;
        x && yi(
          x,
          i,
          // Resolved props
          "prop",
          ft(y)
        );
      }
      var T = e.child, k = SS(e, u);
      if (!k) {
        var L = T.memoizedProps, N = a.compare;
        if (N = N !== null ? N : Te, N(L, i) && e.ref === t.ref)
          return Yl(e, t, u);
      }
      t.flags |= Fi;
      var G = ms(T, i);
      return G.ref = t.ref, G.return = t, t.child = G, G;
    }
    function uC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Re) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && yi(
            m,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            ft(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (Te(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ri = !1, t.pendingProps = i = y, SS(e, u))
            (e.flags & Oo) !== ge && (Ri = !0);
          else
            return t.lanes = e.lanes, Yl(e, t, u);
      }
      return fS(e, t, a, i, u);
    }
    function oC(e, t, a) {
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
        var k;
        s !== null ? (k = Ne(s.baseLanes, a), t.memoizedState = null) : k = a, Rm(t, k);
      }
      return Br(e, t, u, a), t.child;
    }
    function ew(e, t, a) {
      var i = t.pendingProps;
      return Br(e, t, i, a), t.child;
    }
    function tw(e, t, a) {
      var i = t.pendingProps.children;
      return Br(e, t, i, a), t.child;
    }
    function nw(e, t, a) {
      {
        t.flags |= ze;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Br(e, t, s, a), t.child;
    }
    function sC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= pr, t.flags |= Gf);
    }
    function fS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && yi(
          s,
          i,
          // Resolved props
          "prop",
          ft(a)
        );
      }
      var f;
      {
        var p = $c(t, a, !0);
        f = Qc(t, p);
      }
      var v, m;
      Kc(t, u), hu(t);
      {
        if (ip.current = t, Da(!0), v = rf(e, t, a, i, f, u), m = af(), t.mode & Ve) {
          en(!0);
          try {
            v = rf(e, t, a, i, f, u), m = af();
          } finally {
            en(!1);
          }
        }
        Da(!1);
      }
      return gr(), e !== null && !Ri ? (CE(e, t, u), Yl(e, t, u)) : (er() && m && Qy(t), t.flags |= Fi, Br(e, t, v, u), t.child);
    }
    function cC(e, t, a, i, u) {
      {
        switch (Sb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= De, t.flags |= gn;
            var m = new Error("Simulated error coming from DevTools"), y = wu(u);
            t.lanes = Ne(t.lanes, y);
            var x = iS(t, cs(m, t), y);
            dg(t, x);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var T = a.propTypes;
          T && yi(
            T,
            i,
            // Resolved props
            "prop",
            ft(a)
          );
        }
      }
      var k;
      Ki(a) ? (k = !0, Th(t)) : k = !1, Kc(t, u);
      var L = t.stateNode, N;
      L === null ? (dm(e, t), JE(t, a, i), nS(t, a, i, u), N = !0) : e === null ? N = Qx(t, a, i, u) : N = Ix(e, t, a, i, u);
      var G = dS(e, t, a, N, k, u);
      {
        var Se = t.stateNode;
        N && Se.props !== i && (fs || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Me(t) || "a component"), fs = !0);
      }
      return G;
    }
    function dS(e, t, a, i, u, s) {
      sC(e, t);
      var f = (t.flags & De) !== ge;
      if (!i && !f)
        return u && Q0(t, a, !1), Yl(e, t, s);
      var p = t.stateNode;
      ip.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, GE();
      else {
        hu(t);
        {
          if (Da(!0), v = p.render(), t.mode & Ve) {
            en(!0);
            try {
              p.render();
            } finally {
              en(!1);
            }
          }
          Da(!1);
        }
        gr();
      }
      return t.flags |= Fi, e !== null && f ? Jx(e, t, v, s) : Br(e, t, v, s), t.memoizedState = p.state, u && Q0(t, a, !0), t.child;
    }
    function fC(e) {
      var t = e.stateNode;
      t.pendingContext ? Y0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Y0(e, t.context, !1), pg(e, t.containerInfo);
    }
    function rw(e, t, a) {
      if (fC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      vE(e, t), jh(t, i, null, a);
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
          return dC(e, t, p, a, y);
        } else if (p !== s) {
          var x = cs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return dC(e, t, p, a, x);
        } else {
          lx(t);
          var T = uE(t, null, p, a);
          t.child = T;
          for (var k = T; k; )
            k.flags = k.flags & ~_t | ta, k = k.sibling;
        }
      } else {
        if (Gc(), p === s)
          return Yl(e, t, a);
        Br(e, t, p, a);
      }
      return t.child;
    }
    function dC(e, t, a, i, u) {
      return Gc(), Ky(u), t.flags |= Bt, Br(e, t, a, i), t.child;
    }
    function aw(e, t, a) {
      gE(t), e === null && qy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ly(i, u);
      return p ? f = null : s !== null && Ly(i, s) && (t.flags |= ut), sC(e, t), Br(e, t, f, a), t.child;
    }
    function iw(e, t) {
      return e === null && qy(t), null;
    }
    function lw(e, t, a, i) {
      dm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = ib(v), y = Ti(v, u), x;
      switch (m) {
        case se:
          return pS(t, v), t.type = v = pf(v), x = fS(null, t, v, y, i), x;
        case ue:
          return t.type = v = YS(v), x = cC(null, t, v, y, i), x;
        case Be:
          return t.type = v = $S(v), x = iC(null, t, v, y, i), x;
        case wt: {
          if (t.type !== t.elementType) {
            var T = v.propTypes;
            T && yi(
              T,
              y,
              // Resolved for outer only
              "prop",
              ft(v)
            );
          }
          return x = lC(
            null,
            t,
            v,
            Ti(v.type, y),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var k = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Re && (k = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + k));
    }
    function uw(e, t, a, i, u) {
      dm(e, t), t.tag = ue;
      var s;
      return Ki(a) ? (s = !0, Th(t)) : s = !1, Kc(t, u), JE(t, a, i), nS(t, a, i, u), dS(null, t, a, !0, s, u);
    }
    function ow(e, t, a, i) {
      dm(e, t);
      var u = t.pendingProps, s;
      {
        var f = $c(t, a, !1);
        s = Qc(t, f);
      }
      Kc(t, i);
      var p, v;
      hu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = ft(a) || "Unknown";
          lS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), lS[m] = !0);
        }
        t.mode & Ve && Si.recordLegacyContextWarning(t, null), Da(!0), ip.current = t, p = rf(null, t, a, u, s, i), v = af(), Da(!1);
      }
      if (gr(), t.flags |= Fi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = ft(a) || "Unknown";
        lp[y] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), lp[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = ft(a) || "Unknown";
          lp[x] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), lp[x] = !0);
        }
        t.tag = ue, t.memoizedState = null, t.updateQueue = null;
        var T = !1;
        return Ki(a) ? (T = !0, Th(t)) : T = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, fg(t), ZE(t, p), nS(t, a, u, i), dS(null, t, a, !0, T, i);
      } else {
        if (t.tag = se, t.mode & Ve) {
          en(!0);
          try {
            p = rf(null, t, a, u, s, i), v = af();
          } finally {
            en(!1);
          }
        }
        return er() && v && Qy(t), Br(null, t, p, i), pS(t, a), t.child;
      }
    }
    function pS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), sS[u] || (sS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = ft(t) || "Unknown";
          up[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), up[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = ft(t) || "Unknown";
          oS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), oS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = ft(t) || "Unknown";
          uS[v] || (g("%s: Function components do not support contextType.", v), uS[v] = !0);
        }
      }
    }
    var vS = {
      dehydrated: null,
      treeContext: null,
      retryLane: tn
    };
    function hS(e) {
      return {
        baseLanes: e,
        cachePool: Zx(),
        transitions: null
      };
    }
    function sw(e, t) {
      var a = null;
      return {
        baseLanes: Ne(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function cw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return mg(e, qd);
    }
    function fw(e, t) {
      return Vo(e.childLanes, t);
    }
    function pC(e, t, a) {
      var i = t.pendingProps;
      Eb(t) && (t.flags |= De);
      var u = Ei.current, s = !1, f = (t.flags & De) !== ge;
      if (f || cw(u, e) ? (s = !0, t.flags &= ~De) : (e === null || e.memoizedState !== null) && (u = kx(u, EE)), u = Jc(u), qu(t, u), e === null) {
        qy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return mw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var x = dw(t, m, y, a), T = t.child;
          return T.memoizedState = hS(a), t.memoizedState = vS, x;
        } else
          return mS(t, m);
      } else {
        var k = e.memoizedState;
        if (k !== null) {
          var L = k.dehydrated;
          if (L !== null)
            return yw(e, t, f, i, L, k, a);
        }
        if (s) {
          var N = i.fallback, G = i.children, Se = vw(e, t, G, N, a), ve = t.child, Ge = e.child.memoizedState;
          return ve.memoizedState = Ge === null ? hS(a) : sw(Ge, a), ve.childLanes = fw(e, a), t.memoizedState = vS, Se;
        } else {
          var $e = i.children, D = pw(e, t, $e, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function mS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = yS(u, i);
      return s.return = e, e.child = s, s;
    }
    function dw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & pe) === fe && s !== null ? (p = s, p.childLanes = A, p.pendingProps = f, e.mode & be && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = ao(a, u, i, null)) : (p = yS(f, u), v = ao(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function yS(e, t, a) {
      return v1(e, t, A, null);
    }
    function vC(e, t) {
      return ms(e, t);
    }
    function pw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = vC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & pe) === fe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= it) : p.push(s);
      }
      return t.child = f, f;
    }
    function vw(e, t, a, i, u) {
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
        m = y, m.childLanes = A, m.pendingProps = v, t.mode & be && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = vC(f, v), m.subtreeFlags = f.subtreeFlags & _n;
      var x;
      return p !== null ? x = ms(p, i) : (x = ao(i, s, u, null), x.flags |= _t), x.return = t, m.return = t, m.sibling = x, t.child = m, x;
    }
    function fm(e, t, a, i) {
      i !== null && Ky(i), Xc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = mS(t, s);
      return f.flags |= _t, t.memoizedState = null, f;
    }
    function hw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = yS(f, s), v = ao(i, s, u, null);
      return v.flags |= _t, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & pe) !== fe && Xc(t, e.child, null, u), v;
    }
    function mw(e, t, a) {
      return (e.mode & pe) === fe ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = me) : Uy(t) ? e.lanes = di : e.lanes = Wn, null;
    }
    function yw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Bt) {
          t.flags &= ~Bt;
          var D = rS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return fm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= De, null;
          var z = i.children, b = i.fallback, B = hw(e, t, z, b, f), te = t.child;
          return te.memoizedState = hS(f), t.memoizedState = vS, B;
        }
      else {
        if (ax(), (t.mode & pe) === fe)
          return fm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Uy(u)) {
          var p, v, m;
          {
            var y = CR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var T = rS(x, p, m);
          return fm(e, t, f, T);
        }
        var k = Cr(f, e.childLanes);
        if (Ri || k) {
          var L = Tm();
          if (L !== null) {
            var N = Hv(L, f);
            if (N !== tn && N !== s.retryLane) {
              s.retryLane = N;
              var G = Tt;
              pa(e, N), Fn(L, e, N, G);
            }
          }
          FS();
          var Se = rS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return fm(e, t, f, Se);
        } else if (H0(u)) {
          t.flags |= De, t.child = e.child;
          var ve = PD.bind(null, e);
          return TR(u, ve), null;
        } else {
          ux(t, u, s.treeContext);
          var Ge = i.children, $e = mS(t, Ge);
          return $e.flags |= ta, $e;
        }
      }
    }
    function hC(e, t, a) {
      e.lanes = Ne(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ne(i.lanes, t)), ug(e.return, t, a);
    }
    function gw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Pe) {
          var u = i.memoizedState;
          u !== null && hC(i, a, e);
        } else if (i.tag === dt)
          hC(i, a, e);
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
    function Sw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Yh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Ew(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !cS[e])
        if (cS[e] = !0, typeof e == "string")
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
    function Cw(e, t) {
      e !== void 0 && !cm[e] && (e !== "collapsed" && e !== "hidden" ? (cm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (cm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function mC(e, t) {
      {
        var a = mn(e), i = !a && typeof Nr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Tw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (mn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!mC(e[a], a))
              return;
        } else {
          var i = Nr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!mC(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function gS(e, t, a, i, u) {
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
    function yC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Ew(u), Cw(s, u), Tw(f, u), Br(e, t, f, a);
      var p = Ei.current, v = mg(p, qd);
      if (v)
        p = yg(p, qd), t.flags |= De;
      else {
        var m = e !== null && (e.flags & De) !== ge;
        m && gw(t, t.child, a), p = Jc(p);
      }
      if (qu(t, p), (t.mode & pe) === fe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = Sw(t.child), x;
            y === null ? (x = t.child, t.child = null) : (x = y.sibling, y.sibling = null), gS(
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
            var T = null, k = t.child;
            for (t.child = null; k !== null; ) {
              var L = k.alternate;
              if (L !== null && Yh(L) === null) {
                t.child = k;
                break;
              }
              var N = k.sibling;
              k.sibling = T, T = k, k = N;
            }
            gS(
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
            gS(
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
    function Rw(e, t, a) {
      pg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Xc(t, null, i, a) : Br(e, t, i, a), t.child;
    }
    var gC = !1;
    function xw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || gC || (gC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && yi(v, s, "prop", "Context.Provider");
      }
      if (cE(t, u, p), f !== null) {
        var m = f.value;
        if (ie(m, p)) {
          if (f.children === s.children && !Eh())
            return Yl(e, t, a);
        } else
          Ex(t, u, a);
      }
      var y = s.children;
      return Br(e, t, y, a), t.child;
    }
    var SC = !1;
    function ww(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (SC || (SC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Kc(t, a);
      var f = Tn(i);
      hu(t);
      var p;
      return ip.current = t, Da(!0), p = s(f), Da(!1), gr(), t.flags |= Fi, Br(e, t, p, a), t.child;
    }
    function op() {
      Ri = !0;
    }
    function dm(e, t) {
      (t.mode & pe) === fe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= _t);
    }
    function Yl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), GE(), Ep(t.lanes), Cr(a, t.childLanes) ? (gx(e, t), t.child) : null;
    }
    function Dw(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= it) : s.push(e), a.flags |= _t, a;
      }
    }
    function SS(e, t) {
      var a = e.lanes;
      return !!Cr(a, t);
    }
    function bw(e, t, a) {
      switch (t.tag) {
        case q:
          fC(t), t.stateNode, Gc();
          break;
        case re:
          gE(t);
          break;
        case ue: {
          var i = t.type;
          Ki(i) && Th(t);
          break;
        }
        case oe:
          pg(t, t.stateNode.containerInfo);
          break;
        case Ke: {
          var u = t.memoizedProps.value, s = t.type._context;
          cE(t, s, u);
          break;
        }
        case yt:
          {
            var f = Cr(a, t.childLanes);
            f && (t.flags |= ze);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Pe: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return qu(t, Jc(Ei.current)), t.flags |= De, null;
            var m = t.child, y = m.childLanes;
            if (Cr(a, y))
              return pC(e, t, a);
            qu(t, Jc(Ei.current));
            var x = Yl(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            qu(t, Jc(Ei.current));
          break;
        }
        case dt: {
          var T = (e.flags & De) !== ge, k = Cr(a, t.childLanes);
          if (T) {
            if (k)
              return yC(e, t, a);
            t.flags |= De;
          }
          var L = t.memoizedState;
          if (L !== null && (L.rendering = null, L.tail = null, L.lastEffect = null), qu(t, Ei.current), k)
            break;
          return null;
        }
        case _e:
        case Qe:
          return t.lanes = A, oC(e, t, a);
      }
      return Yl(e, t, a);
    }
    function EC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Dw(e, t, XS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Eh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ri = !0;
        else {
          var s = SS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & De) === ge)
            return Ri = !1, bw(e, t, a);
          (e.flags & Oo) !== ge ? Ri = !0 : Ri = !1;
        }
      } else if (Ri = !1, er() && ZR(t)) {
        var f = t.index, p = JR();
        G0(t, p, f);
      }
      switch (t.lanes = A, t.tag) {
        case qe:
          return ow(e, t, t.type, a);
        case Rn: {
          var v = t.elementType;
          return lw(e, t, v, a);
        }
        case se: {
          var m = t.type, y = t.pendingProps, x = t.elementType === m ? y : Ti(m, y);
          return fS(e, t, m, x, a);
        }
        case ue: {
          var T = t.type, k = t.pendingProps, L = t.elementType === T ? k : Ti(T, k);
          return cC(e, t, T, L, a);
        }
        case q:
          return rw(e, t, a);
        case re:
          return aw(e, t, a);
        case Ue:
          return iw(e, t);
        case Pe:
          return pC(e, t, a);
        case oe:
          return Rw(e, t, a);
        case Be: {
          var N = t.type, G = t.pendingProps, Se = t.elementType === N ? G : Ti(N, G);
          return iC(e, t, N, Se, a);
        }
        case rt:
          return ew(e, t, a);
        case Ze:
          return tw(e, t, a);
        case yt:
          return nw(e, t, a);
        case Ke:
          return xw(e, t, a);
        case qt:
          return ww(e, t, a);
        case wt: {
          var ve = t.type, Ge = t.pendingProps, $e = Ti(ve, Ge);
          if (t.type !== t.elementType) {
            var D = ve.propTypes;
            D && yi(
              D,
              $e,
              // Resolved for outer only
              "prop",
              ft(ve)
            );
          }
          return $e = Ti(ve.type, $e), lC(e, t, ve, $e, a);
        }
        case Ae:
          return uC(e, t, t.type, t.pendingProps, a);
        case jn: {
          var z = t.type, b = t.pendingProps, B = t.elementType === z ? b : Ti(z, b);
          return uw(e, t, z, B, a);
        }
        case dt:
          return yC(e, t, a);
        case xn:
          break;
        case _e:
          return oC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function lf(e) {
      e.flags |= ze;
    }
    function CC(e) {
      e.flags |= pr, e.flags |= Gf;
    }
    var TC, ES, RC, xC;
    TC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === re || u.tag === Ue)
          XT(e, u.stateNode);
        else if (u.tag !== oe) {
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
    }, ES = function(e, t) {
    }, RC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = vg(), v = KT(f, a, s, i, u, p);
        t.updateQueue = v, v && lf(t);
      }
    }, xC = function(e, t, a, i) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = A, i = ge;
      if (t) {
        if ((e.mode & be) !== fe) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Ne(a, Ne(m.lanes, m.childLanes)), i |= m.subtreeFlags & _n, i |= m.flags & _n, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = Ne(a, Ne(y.lanes, y.childLanes)), i |= y.subtreeFlags & _n, i |= y.flags & _n, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & be) !== fe) {
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
    function _w(e, t, a) {
      if (dx() && (t.mode & pe) !== fe && (t.flags & De) === ge)
        return tE(t), Gc(), t.flags |= Bt | Ur | gn, !1;
      var i = bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (cx(t), nr(t), (t.mode & be) !== fe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Gc(), (t.flags & De) === ge && (t.memoizedState = null), t.flags |= ze, nr(t), (t.mode & be) !== fe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return nE(), !0;
    }
    function wC(e, t, a) {
      var i = t.pendingProps;
      switch (Iy(t), t.tag) {
        case qe:
        case Rn:
        case Ae:
        case se:
        case Be:
        case rt:
        case Ze:
        case yt:
        case qt:
        case wt:
          return nr(t), null;
        case ue: {
          var u = t.type;
          return Ki(u) && Ch(t), nr(t), null;
        }
        case q: {
          var s = t.stateNode;
          if (Zc(t), Py(t), Sg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = bh(t);
            if (f)
              lf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Bt) !== ge) && (t.flags |= ea, nE());
            }
          }
          return ES(e, t), nr(t), null;
        }
        case re: {
          hg(t);
          var v = yE(), m = t.type;
          if (e !== null && t.stateNode != null)
            RC(e, t, m, i, v), e.ref !== t.ref && CC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return nr(t), null;
            }
            var y = vg(), x = bh(t);
            if (x)
              ox(t, v, y) && lf(t);
            else {
              var T = GT(m, i, v, y, t);
              TC(T, t, !1, !1), t.stateNode = T, qT(T, m, i, v) && lf(t);
            }
            t.ref !== null && CC(t);
          }
          return nr(t), null;
        }
        case Ue: {
          var k = i;
          if (e && t.stateNode != null) {
            var L = e.memoizedProps;
            xC(e, t, L, k);
          } else {
            if (typeof k != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var N = yE(), G = vg(), Se = bh(t);
            Se ? sx(t) && lf(t) : t.stateNode = ZT(k, N, G, t);
          }
          return nr(t), null;
        }
        case Pe: {
          ef(t);
          var ve = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ge = _w(e, t, ve);
            if (!Ge)
              return t.flags & gn ? t : null;
          }
          if ((t.flags & De) !== ge)
            return t.lanes = a, (t.mode & be) !== fe && $g(t), t;
          var $e = ve !== null, D = e !== null && e.memoizedState !== null;
          if ($e !== D && $e) {
            var z = t.child;
            if (z.flags |= ji, (t.mode & pe) !== fe) {
              var b = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Je);
              b || mg(Ei.current, EE) ? kD() : FS();
            }
          }
          var B = t.updateQueue;
          if (B !== null && (t.flags |= ze), nr(t), (t.mode & be) !== fe && $e) {
            var te = t.child;
            te !== null && (t.treeBaseDuration -= te.treeBaseDuration);
          }
          return null;
        }
        case oe:
          return Zc(t), ES(e, t), e === null && QR(t.stateNode.containerInfo), nr(t), null;
        case Ke:
          var X = t.type._context;
          return lg(X, t), nr(t), null;
        case jn: {
          var we = t.type;
          return Ki(we) && Ch(t), nr(t), null;
        }
        case dt: {
          ef(t);
          var Le = t.memoizedState;
          if (Le === null)
            return nr(t), null;
          var ht = (t.flags & De) !== ge, tt = Le.rendering;
          if (tt === null)
            if (ht)
              sp(Le, !1);
            else {
              var fn = LD() && (e === null || (e.flags & De) === ge);
              if (!fn)
                for (var nt = t.child; nt !== null; ) {
                  var nn = Yh(nt);
                  if (nn !== null) {
                    ht = !0, t.flags |= De, sp(Le, !1);
                    var Dr = nn.updateQueue;
                    return Dr !== null && (t.updateQueue = Dr, t.flags |= ze), t.subtreeFlags = ge, Sx(t, a), qu(t, yg(Ei.current, qd)), t.child;
                  }
                  nt = nt.sibling;
                }
              Le.tail !== null && Ht() > IC() && (t.flags |= De, ht = !0, sp(Le, !1), t.lanes = Dv);
            }
          else {
            if (!ht) {
              var ur = Yh(tt);
              if (ur !== null) {
                t.flags |= De, ht = !0;
                var Na = ur.updateQueue;
                if (Na !== null && (t.updateQueue = Na, t.flags |= ze), sp(Le, !0), Le.tail === null && Le.tailMode === "hidden" && !tt.alternate && !er())
                  return nr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Ht() * 2 - Le.renderingStartTime > IC() && a !== Wn && (t.flags |= De, ht = !0, sp(Le, !1), t.lanes = Dv);
            }
            if (Le.isBackwards)
              tt.sibling = t.child, t.child = tt;
            else {
              var $r = Le.last;
              $r !== null ? $r.sibling = tt : t.child = tt, Le.last = tt;
            }
          }
          if (Le.tail !== null) {
            var Qr = Le.tail;
            Le.rendering = Qr, Le.tail = Qr.sibling, Le.renderingStartTime = Ht(), Qr.sibling = null;
            var br = Ei.current;
            return ht ? br = yg(br, qd) : br = Jc(br), qu(t, br), Qr;
          }
          return nr(t), null;
        }
        case xn:
          break;
        case _e:
        case Qe: {
          HS(t);
          var Gl = t.memoizedState, vf = Gl !== null;
          if (e !== null) {
            var wp = e.memoizedState, il = wp !== null;
            il !== vf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ee && (t.flags |= ji);
          }
          return !vf || (t.mode & pe) === fe ? nr(t) : Cr(al, Wn) && (nr(t), t.subtreeFlags & (_t | ze) && (t.flags |= ji)), null;
        }
        case dn:
          return null;
        case Dt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function kw(e, t, a) {
      switch (Iy(t), t.tag) {
        case ue: {
          var i = t.type;
          Ki(i) && Ch(t);
          var u = t.flags;
          return u & gn ? (t.flags = u & ~gn | De, (t.mode & be) !== fe && $g(t), t) : null;
        }
        case q: {
          t.stateNode, Zc(t), Py(t), Sg();
          var s = t.flags;
          return (s & gn) !== ge && (s & De) === ge ? (t.flags = s & ~gn | De, t) : null;
        }
        case re:
          return hg(t), null;
        case Pe: {
          ef(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Gc();
          }
          var p = t.flags;
          return p & gn ? (t.flags = p & ~gn | De, (t.mode & be) !== fe && $g(t), t) : null;
        }
        case dt:
          return ef(t), null;
        case oe:
          return Zc(t), null;
        case Ke:
          var v = t.type._context;
          return lg(v, t), null;
        case _e:
        case Qe:
          return HS(t), null;
        case dn:
          return null;
        default:
          return null;
      }
    }
    function DC(e, t, a) {
      switch (Iy(t), t.tag) {
        case ue: {
          var i = t.type.childContextTypes;
          i != null && Ch(t);
          break;
        }
        case q: {
          t.stateNode, Zc(t), Py(t), Sg();
          break;
        }
        case re: {
          hg(t);
          break;
        }
        case oe:
          Zc(t);
          break;
        case Pe:
          ef(t);
          break;
        case dt:
          ef(t);
          break;
        case Ke:
          var u = t.type._context;
          lg(u, t);
          break;
        case _e:
        case Qe:
          HS(t);
          break;
      }
    }
    var bC = null;
    bC = /* @__PURE__ */ new Set();
    var pm = !1, rr = !1, Ow = typeof WeakSet == "function" ? WeakSet : Set, le = null, uf = null, of = null;
    function Lw(e) {
      Sl(null, function() {
        throw e;
      }), If();
    }
    var Mw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & be)
        try {
          nl(), t.componentWillUnmount();
        } finally {
          tl(e);
        }
      else
        t.componentWillUnmount();
    };
    function _C(e, t) {
      try {
        Ju(Mn, e);
      } catch (a) {
        Lt(e, t, a);
      }
    }
    function CS(e, t, a) {
      try {
        Mw(e, a);
      } catch (i) {
        Lt(e, t, i);
      }
    }
    function Nw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Lt(e, t, i);
      }
    }
    function kC(e, t) {
      try {
        LC(e);
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
            if (rn && Ir && e.mode & be)
              try {
                nl(), i = a(null);
              } finally {
                tl(e);
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
    var OC = !1;
    function zw(e, t) {
      IT(e.containerInfo), le = t, Uw();
      var a = OC;
      return OC = !1, a;
    }
    function Uw() {
      for (; le !== null; ) {
        var e = le, t = e.child;
        (e.subtreeFlags & du) !== ge && t !== null ? (t.return = e, le = t) : Aw();
      }
    }
    function Aw() {
      for (; le !== null; ) {
        var e = le;
        pt(e);
        try {
          Hw(e);
        } catch (a) {
          Lt(e, e.return, a);
        }
        an();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, le = t;
          return;
        }
        le = e.return;
      }
    }
    function Hw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ea) !== ge) {
        switch (pt(e), e.tag) {
          case se:
          case Be:
          case Ae:
            break;
          case ue: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !fs && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Me(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ti(e.type, i), u);
              {
                var p = bC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Me(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case q: {
            {
              var v = e.stateNode;
              yR(v.containerInfo);
            }
            break;
          }
          case re:
          case Ue:
          case oe:
          case jn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        an();
      }
    }
    function xi(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & tr) !== va ? Rv(t) : (e & Mn) !== va && Oa(t), (e & Zi) !== va && Tp(!0), vm(t, a, p), (e & Zi) !== va && Tp(!1), (e & tr) !== va ? Gs() : (e & Mn) !== va && mu());
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
            (e & tr) !== va ? Pi(t) : (e & Mn) !== va && xv(t);
            var f = s.create;
            (e & Zi) !== va && Tp(!0), s.destroy = f(), (e & Zi) !== va && Tp(!1), (e & tr) !== va ? Ws() : (e & Mn) !== va && Lo();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Mn) !== ge ? v = "useLayoutEffect" : (s.tag & Zi) !== ge ? v = "useInsertionEffect" : v = "useEffect";
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
    function Fw(e, t) {
      if ((t.flags & ze) !== ge)
        switch (t.tag) {
          case yt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = IE(), p = t.alternate === null ? "mount" : "update";
            QE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case q:
                    var m = v.stateNode;
                    m.passiveEffectDuration += a;
                    break e;
                  case yt:
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
    function jw(e, t, a, i) {
      if ((a.flags & Qn) !== ge)
        switch (a.tag) {
          case se:
          case Be:
          case Ae: {
            if (!rr)
              if (a.mode & be)
                try {
                  nl(), Ju(Mn | Ln, a);
                } finally {
                  tl(a);
                }
              else
                Ju(Mn | Ln, a);
            break;
          }
          case ue: {
            var u = a.stateNode;
            if (a.flags & ze && !rr)
              if (t === null)
                if (a.type === a.elementType && !fs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Me(a) || "instance")), a.mode & be)
                  try {
                    nl(), u.componentDidMount();
                  } finally {
                    tl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ti(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !fs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Me(a) || "instance")), a.mode & be)
                  try {
                    nl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    tl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !fs && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Me(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Me(a) || "instance")), mE(a, p, u));
            break;
          }
          case q: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case re:
                    m = a.child.stateNode;
                    break;
                  case ue:
                    m = a.child.stateNode;
                    break;
                }
              mE(a, v, m);
            }
            break;
          }
          case re: {
            var y = a.stateNode;
            if (t === null && a.flags & ze) {
              var x = a.type, T = a.memoizedProps;
              rR(y, x, T);
            }
            break;
          }
          case Ue:
            break;
          case oe:
            break;
          case yt: {
            {
              var k = a.memoizedProps, L = k.onCommit, N = k.onRender, G = a.stateNode.effectDuration, Se = IE(), ve = t === null ? "mount" : "update";
              QE() && (ve = "nested-update"), typeof N == "function" && N(a.memoizedProps.id, ve, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Se);
              {
                typeof L == "function" && L(a.memoizedProps.id, ve, G, Se), AD(a);
                var Ge = a.return;
                e:
                  for (; Ge !== null; ) {
                    switch (Ge.tag) {
                      case q:
                        var $e = Ge.stateNode;
                        $e.effectDuration += G;
                        break e;
                      case yt:
                        var D = Ge.stateNode;
                        D.effectDuration += G;
                        break e;
                    }
                    Ge = Ge.return;
                  }
              }
            }
            break;
          }
          case Pe: {
            Ww(e, a);
            break;
          }
          case dt:
          case jn:
          case xn:
          case _e:
          case Qe:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      rr || a.flags & pr && LC(a);
    }
    function Vw(e) {
      switch (e.tag) {
        case se:
        case Be:
        case Ae: {
          if (e.mode & be)
            try {
              nl(), _C(e, e.return);
            } finally {
              tl(e);
            }
          else
            _C(e, e.return);
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Nw(e, e.return, t), kC(e, e.return);
          break;
        }
        case re: {
          kC(e, e.return);
          break;
        }
      }
    }
    function Bw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === re) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? pR(u) : hR(i.stateNode, i.memoizedProps);
            } catch (f) {
              Lt(e, e.return, f);
            }
          }
        } else if (i.tag === Ue) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? vR(s) : mR(s, i.memoizedProps);
            } catch (f) {
              Lt(e, e.return, f);
            }
        } else if (!((i.tag === _e || i.tag === Qe) && i.memoizedState !== null && i !== e)) {
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
    function LC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case re:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & be)
            try {
              nl(), u = t(i);
            } finally {
              tl(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Me(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Me(e)), t.current = i;
      }
    }
    function Pw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function MC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, MC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === re) {
          var a = e.stateNode;
          a !== null && GR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Yw(e) {
      for (var t = e.return; t !== null; ) {
        if (NC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function NC(e) {
      return e.tag === re || e.tag === q || e.tag === oe;
    }
    function zC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || NC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== re && t.tag !== Ue && t.tag !== Vt; ) {
            if (t.flags & _t || t.child === null || t.tag === oe)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & _t))
            return t.stateNode;
        }
    }
    function $w(e) {
      var t = Yw(e);
      switch (t.tag) {
        case re: {
          var a = t.stateNode;
          t.flags & ut && (A0(a), t.flags &= ~ut);
          var i = zC(e);
          RS(e, i, a);
          break;
        }
        case q:
        case oe: {
          var u = t.stateNode.containerInfo, s = zC(e);
          TS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === re || i === Ue;
      if (u) {
        var s = e.stateNode;
        t ? sR(a, s, t) : uR(a, s);
      } else if (i !== oe) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    function RS(e, t, a) {
      var i = e.tag, u = i === re || i === Ue;
      if (u) {
        var s = e.stateNode;
        t ? oR(a, s, t) : lR(a, s);
      } else if (i !== oe) {
        var f = e.child;
        if (f !== null) {
          RS(f, t, a);
          for (var p = f.sibling; p !== null; )
            RS(p, t, a), p = p.sibling;
        }
      }
    }
    var ar = null, wi = !1;
    function Qw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case re: {
                ar = i.stateNode, wi = !1;
                break e;
              }
              case q: {
                ar = i.stateNode.containerInfo, wi = !0;
                break e;
              }
              case oe: {
                ar = i.stateNode.containerInfo, wi = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (ar === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        UC(e, t, a), ar = null, wi = !1;
      }
      Pw(a);
    }
    function eo(e, t, a) {
      for (var i = a.child; i !== null; )
        UC(e, t, i), i = i.sibling;
    }
    function UC(e, t, a) {
      switch (Tl(a), a.tag) {
        case re:
          rr || sf(a, t);
        case Ue: {
          {
            var i = ar, u = wi;
            ar = null, eo(e, t, a), ar = i, wi = u, ar !== null && (wi ? fR(ar, a.stateNode) : cR(ar, a.stateNode));
          }
          return;
        }
        case Vt: {
          ar !== null && (wi ? dR(ar, a.stateNode) : zy(ar, a.stateNode));
          return;
        }
        case oe: {
          {
            var s = ar, f = wi;
            ar = a.stateNode.containerInfo, wi = !0, eo(e, t, a), ar = s, wi = f;
          }
          return;
        }
        case se:
        case Be:
        case wt:
        case Ae: {
          if (!rr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var x = y, T = x.destroy, k = x.tag;
                  T !== void 0 && ((k & Zi) !== va ? vm(a, t, T) : (k & Mn) !== va && (Oa(a), a.mode & be ? (nl(), vm(a, t, T), tl(a)) : vm(a, t, T), mu())), y = y.next;
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
            var L = a.stateNode;
            typeof L.componentWillUnmount == "function" && CS(a, t, L);
          }
          eo(e, t, a);
          return;
        }
        case xn: {
          eo(e, t, a);
          return;
        }
        case _e: {
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
    function Iw(e) {
      e.memoizedState;
    }
    function Ww(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && LR(s);
          }
        }
      }
    }
    function AC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Ow()), t.forEach(function(i) {
          var u = YD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Fr)
              if (uf !== null && of !== null)
                Cp(of, uf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Gw(e, t, a) {
      uf = a, of = e, pt(t), HC(t, e), pt(t), uf = null, of = null;
    }
    function Di(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Qw(e, t, s);
          } catch (v) {
            Lt(s, t, v);
          }
        }
      var f = Um();
      if (t.subtreeFlags & mr)
        for (var p = t.child; p !== null; )
          pt(p), HC(p, e), p = p.sibling;
      pt(f);
    }
    function HC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case se:
        case Be:
        case wt:
        case Ae: {
          if (Di(t, e), rl(e), u & ze) {
            try {
              xi(Zi | Ln, e, e.return), Ju(Zi | Ln, e);
            } catch (we) {
              Lt(e, e.return, we);
            }
            if (e.mode & be) {
              try {
                nl(), xi(Mn | Ln, e, e.return);
              } catch (we) {
                Lt(e, e.return, we);
              }
              tl(e);
            } else
              try {
                xi(Mn | Ln, e, e.return);
              } catch (we) {
                Lt(e, e.return, we);
              }
          }
          return;
        }
        case ue: {
          Di(t, e), rl(e), u & pr && i !== null && sf(i, i.return);
          return;
        }
        case re: {
          Di(t, e), rl(e), u & pr && i !== null && sf(i, i.return);
          {
            if (e.flags & ut) {
              var s = e.stateNode;
              try {
                A0(s);
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
                    aR(f, y, m, v, p, e);
                  } catch (we) {
                    Lt(e, e.return, we);
                  }
              }
            }
          }
          return;
        }
        case Ue: {
          if (Di(t, e), rl(e), u & ze) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, T = e.memoizedProps, k = i !== null ? i.memoizedProps : T;
            try {
              iR(x, k, T);
            } catch (we) {
              Lt(e, e.return, we);
            }
          }
          return;
        }
        case q: {
          if (Di(t, e), rl(e), u & ze && i !== null) {
            var L = i.memoizedState;
            if (L.isDehydrated)
              try {
                OR(t.containerInfo);
              } catch (we) {
                Lt(e, e.return, we);
              }
          }
          return;
        }
        case oe: {
          Di(t, e), rl(e);
          return;
        }
        case Pe: {
          Di(t, e), rl(e);
          var N = e.child;
          if (N.flags & ji) {
            var G = N.stateNode, Se = N.memoizedState, ve = Se !== null;
            if (G.isHidden = ve, ve) {
              var Ge = N.alternate !== null && N.alternate.memoizedState !== null;
              Ge || _D();
            }
          }
          if (u & ze) {
            try {
              Iw(e);
            } catch (we) {
              Lt(e, e.return, we);
            }
            AC(e);
          }
          return;
        }
        case _e: {
          var $e = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & pe
          ) {
            var D = rr;
            rr = D || $e, Di(t, e), rr = D;
          } else
            Di(t, e);
          if (rl(e), u & ji) {
            var z = e.stateNode, b = e.memoizedState, B = b !== null, te = e;
            if (z.isHidden = B, B && !$e && (te.mode & pe) !== fe) {
              le = te;
              for (var X = te.child; X !== null; )
                le = X, qw(X), X = X.sibling;
            }
            Bw(te, B);
          }
          return;
        }
        case dt: {
          Di(t, e), rl(e), u & ze && AC(e);
          return;
        }
        case xn:
          return;
        default: {
          Di(t, e), rl(e);
          return;
        }
      }
    }
    function rl(e) {
      var t = e.flags;
      if (t & _t) {
        try {
          $w(e);
        } catch (a) {
          Lt(e, e.return, a);
        }
        e.flags &= ~_t;
      }
      t & ta && (e.flags &= ~ta);
    }
    function Xw(e, t, a) {
      uf = a, of = t, le = e, FC(e, t, a), uf = null, of = null;
    }
    function FC(e, t, a) {
      for (var i = (e.mode & pe) !== fe; le !== null; ) {
        var u = le, s = u.child;
        if (u.tag === _e && i) {
          var f = u.memoizedState !== null, p = f || pm;
          if (p) {
            xS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || rr, x = pm, T = rr;
            pm = p, rr = y, rr && !T && (le = u, Kw(u));
            for (var k = s; k !== null; )
              le = k, FC(
                k,
                // New root; bubble back up to here and stop.
                t,
                a
              ), k = k.sibling;
            le = u, pm = x, rr = T, xS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Qn) !== ge && s !== null ? (s.return = u, le = s) : xS(e, t, a);
      }
    }
    function xS(e, t, a) {
      for (; le !== null; ) {
        var i = le;
        if ((i.flags & Qn) !== ge) {
          var u = i.alternate;
          pt(i);
          try {
            jw(t, u, i, a);
          } catch (f) {
            Lt(i, i.return, f);
          }
          an();
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
    function qw(e) {
      for (; le !== null; ) {
        var t = le, a = t.child;
        switch (t.tag) {
          case se:
          case Be:
          case wt:
          case Ae: {
            if (t.mode & be)
              try {
                nl(), xi(Mn, t, t.return);
              } finally {
                tl(t);
              }
            else
              xi(Mn, t, t.return);
            break;
          }
          case ue: {
            sf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && CS(t, t.return, i);
            break;
          }
          case re: {
            sf(t, t.return);
            break;
          }
          case _e: {
            var u = t.memoizedState !== null;
            if (u) {
              jC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, le = a) : jC(e);
      }
    }
    function jC(e) {
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
    function Kw(e) {
      for (; le !== null; ) {
        var t = le, a = t.child;
        if (t.tag === _e) {
          var i = t.memoizedState !== null;
          if (i) {
            VC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, le = a) : VC(e);
      }
    }
    function VC(e) {
      for (; le !== null; ) {
        var t = le;
        pt(t);
        try {
          Vw(t);
        } catch (i) {
          Lt(t, t.return, i);
        }
        if (an(), t === e) {
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
    function Zw(e, t, a, i) {
      le = t, Jw(t, e, a, i);
    }
    function Jw(e, t, a, i) {
      for (; le !== null; ) {
        var u = le, s = u.child;
        (u.subtreeFlags & na) !== ge && s !== null ? (s.return = u, le = s) : eD(e, t, a, i);
      }
    }
    function eD(e, t, a, i) {
      for (; le !== null; ) {
        var u = le;
        if ((u.flags & Mt) !== ge) {
          pt(u);
          try {
            tD(t, u, a, i);
          } catch (f) {
            Lt(u, u.return, f);
          }
          an();
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
    function tD(e, t, a, i) {
      switch (t.tag) {
        case se:
        case Be:
        case Ae: {
          if (t.mode & be) {
            Yg();
            try {
              Ju(tr | Ln, t);
            } finally {
              Pg(t);
            }
          } else
            Ju(tr | Ln, t);
          break;
        }
      }
    }
    function nD(e) {
      le = e, rD();
    }
    function rD() {
      for (; le !== null; ) {
        var e = le, t = e.child;
        if ((le.flags & it) !== ge) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              le = u, lD(u, e);
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
        (e.subtreeFlags & na) !== ge && t !== null ? (t.return = e, le = t) : aD();
      }
    }
    function aD() {
      for (; le !== null; ) {
        var e = le;
        (e.flags & Mt) !== ge && (pt(e), iD(e), an());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, le = t;
          return;
        }
        le = e.return;
      }
    }
    function iD(e) {
      switch (e.tag) {
        case se:
        case Be:
        case Ae: {
          e.mode & be ? (Yg(), xi(tr | Ln, e, e.return), Pg(e)) : xi(tr | Ln, e, e.return);
          break;
        }
      }
    }
    function lD(e, t) {
      for (; le !== null; ) {
        var a = le;
        pt(a), oD(a, t), an();
        var i = a.child;
        i !== null ? (i.return = a, le = i) : uD(e);
      }
    }
    function uD(e) {
      for (; le !== null; ) {
        var t = le, a = t.sibling, i = t.return;
        if (MC(t), t === e) {
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
    function oD(e, t) {
      switch (e.tag) {
        case se:
        case Be:
        case Ae: {
          e.mode & be ? (Yg(), xi(tr, e, t), Pg(e)) : xi(tr, e, t);
          break;
        }
      }
    }
    function sD(e) {
      switch (e.tag) {
        case se:
        case Be:
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
    function cD(e) {
      switch (e.tag) {
        case se:
        case Be:
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
    function fD(e) {
      switch (e.tag) {
        case se:
        case Be:
        case Ae: {
          try {
            xi(Mn | Ln, e, e.return);
          } catch (a) {
            Lt(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && CS(e, e.return, t);
          break;
        }
      }
    }
    function dD(e) {
      switch (e.tag) {
        case se:
        case Be:
        case Ae:
          try {
            xi(tr | Ln, e, e.return);
          } catch (t) {
            Lt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var cp = Symbol.for;
      cp("selector.component"), cp("selector.has_pseudo_class"), cp("selector.role"), cp("selector.test_id"), cp("selector.text");
    }
    var pD = [];
    function vD() {
      pD.forEach(function(e) {
        return e();
      });
    }
    var hD = M.ReactCurrentActQueue;
    function mD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function BC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && hD.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var yD = Math.ceil, wS = M.ReactCurrentDispatcher, DS = M.ReactCurrentOwner, ir = M.ReactCurrentBatchConfig, bi = M.ReactCurrentActQueue, Un = (
      /*             */
      0
    ), PC = (
      /*               */
      1
    ), lr = (
      /*                */
      2
    ), Za = (
      /*                */
      4
    ), $l = 0, fp = 1, ds = 2, hm = 3, dp = 4, YC = 5, bS = 6, We = Un, Pr = null, Xt = null, An = A, al = A, _S = $u(A), Hn = $l, pp = null, mm = A, vp = A, ym = A, hp = null, ha = null, kS = 0, $C = 500, QC = 1 / 0, gD = 500, Ql = null;
    function mp() {
      QC = Ht() + gD;
    }
    function IC() {
      return QC;
    }
    var gm = !1, OS = null, cf = null, ps = !1, to = null, yp = A, LS = [], MS = null, SD = 50, gp = 0, NS = null, zS = !1, Sm = !1, ED = 50, ff = 0, Em = null, Sp = Tt, Cm = A, WC = !1;
    function Tm() {
      return Pr;
    }
    function Yr() {
      return (We & (lr | Za)) !== Un ? Ht() : (Sp !== Tt || (Sp = Ht()), Sp);
    }
    function no(e) {
      var t = e.mode;
      if ((t & pe) === fe)
        return me;
      if ((We & lr) !== Un && An !== A)
        return wu(An);
      var a = hx() !== vx;
      if (a) {
        if (ir.transition !== null) {
          var i = ir.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Cm === tn && (Cm = zv()), Cm;
      }
      var u = ua();
      if (u !== tn)
        return u;
      var s = JT();
      return s;
    }
    function CD(e) {
      var t = e.mode;
      return (t & pe) === fe ? me : Er();
    }
    function Fn(e, t, a, i) {
      QD(), WC && g("useInsertionEffect must not schedule updates."), zS && (Sm = !0), Ol(e, a, i), (We & lr) !== A && e === Pr ? GD(t) : (Fr && yc(e, t, a), XD(t), e === Pr && ((We & lr) === Un && (vp = Ne(vp, a)), Hn === dp && ro(e, An)), ma(e, i), a === me && We === Un && (t.mode & pe) === fe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !bi.isBatchingLegacy && (mp(), W0()));
    }
    function TD(e, t, a) {
      var i = e.current;
      i.lanes = t, Ol(e, t, a), ma(e, a);
    }
    function RD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (We & lr) !== Un
      );
    }
    function ma(e, t) {
      var a = e.callbackNode;
      kv(e, t);
      var i = _l(e, e === Pr ? An : A);
      if (i === A) {
        a !== null && s1(a), e.callbackNode = null, e.callbackPriority = tn;
        return;
      }
      var u = It(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(bi.current !== null && a !== BS)) {
        a == null && s !== me && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && s1(a);
      var f;
      if (u === me)
        e.tag === Qu ? (bi.isBatchingLegacy !== null && (bi.didScheduleLegacyUpdate = !0), KR(qC.bind(null, e))) : I0(qC.bind(null, e)), bi.current !== null ? bi.current.push(Iu) : tR(function() {
          (We & (lr | Za)) === Un && Iu();
        }), f = null;
      else {
        var p;
        switch (On(i)) {
          case Wt:
            p = $s;
            break;
          case pi:
            p = Cl;
            break;
          case Ya:
            p = Pa;
            break;
          case Du:
            p = Qs;
            break;
          default:
            p = Pa;
            break;
        }
        f = PS(p, GC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function GC(e, t) {
      if (Bx(), Sp = Tt, Cm = A, (We & (lr | Za)) !== Un)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Wl();
      if (i && e.callbackNode !== a)
        return null;
      var u = _l(e, e === Pr ? An : A);
      if (u === A)
        return null;
      var s = !jo(e, u) && !Nv(e, u) && !t, f = s ? ND(e, u) : xm(e, u);
      if (f !== $l) {
        if (f === ds) {
          var p = $i(e);
          p !== A && (u = p, f = US(e, p));
        }
        if (f === fp) {
          var v = pp;
          throw vs(e, A), ro(e, u), ma(e, Ht()), v;
        }
        if (f === bS)
          ro(e, u);
        else {
          var m = !jo(e, u), y = e.current.alternate;
          if (m && !wD(y)) {
            if (f = xm(e, u), f === ds) {
              var x = $i(e);
              x !== A && (u = x, f = US(e, x));
            }
            if (f === fp) {
              var T = pp;
              throw vs(e, A), ro(e, u), ma(e, Ht()), T;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, xD(e, f, u);
        }
      }
      return ma(e, Ht()), e.callbackNode === a ? GC.bind(null, e) : null;
    }
    function US(e, t) {
      var a = hp;
      if (gc(e)) {
        var i = vs(e, t);
        i.flags |= Bt, $R(e.containerInfo);
      }
      var u = xm(e, t);
      if (u !== ds) {
        var s = ha;
        ha = a, s !== null && XC(s);
      }
      return u;
    }
    function XC(e) {
      ha === null ? ha = e : ha.push.apply(ha, e);
    }
    function xD(e, t, a) {
      switch (t) {
        case $l:
        case fp:
          throw new Error("Root did not complete. This is a bug in React.");
        case ds: {
          hs(e, ha, Ql);
          break;
        }
        case hm: {
          if (ro(e, a), Ov(a) && // do not delay if we're inside an act() scope
          !c1()) {
            var i = kS + $C - Ht();
            if (i > 10) {
              var u = _l(e, A);
              if (u !== A)
                break;
              var s = e.suspendedLanes;
              if (!kl(s, a)) {
                Yr(), hc(e, s);
                break;
              }
              e.timeoutHandle = My(hs.bind(null, e, ha, Ql), i);
              break;
            }
          }
          hs(e, ha, Ql);
          break;
        }
        case dp: {
          if (ro(e, a), Mv(a))
            break;
          if (!c1()) {
            var f = bv(e, a), p = f, v = Ht() - p, m = $D(v) - v;
            if (m > 10) {
              e.timeoutHandle = My(hs.bind(null, e, ha, Ql), m);
              break;
            }
          }
          hs(e, ha, Ql);
          break;
        }
        case YC: {
          hs(e, ha, Ql);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function wD(e) {
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
    function qC(e) {
      if (Px(), (We & (lr | Za)) !== Un)
        throw new Error("Should not already be working.");
      Wl();
      var t = _l(e, A);
      if (!Cr(t, me))
        return ma(e, Ht()), null;
      var a = xm(e, t);
      if (e.tag !== Qu && a === ds) {
        var i = $i(e);
        i !== A && (t = i, a = US(e, i));
      }
      if (a === fp) {
        var u = pp;
        throw vs(e, A), ro(e, t), ma(e, Ht()), u;
      }
      if (a === bS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, hs(e, ha, Ql), ma(e, Ht()), null;
    }
    function DD(e, t) {
      t !== A && (sd(e, Ne(t, me)), ma(e, Ht()), (We & (lr | Za)) === Un && (mp(), Iu()));
    }
    function AS(e, t) {
      var a = We;
      We |= PC;
      try {
        return e(t);
      } finally {
        We = a, We === Un && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !bi.isBatchingLegacy && (mp(), W0());
      }
    }
    function bD(e, t, a, i, u) {
      var s = ua(), f = ir.transition;
      try {
        return ir.transition = null, Pt(Wt), e(t, a, i, u);
      } finally {
        Pt(s), ir.transition = f, We === Un && mp();
      }
    }
    function Il(e) {
      to !== null && to.tag === Qu && (We & (lr | Za)) === Un && Wl();
      var t = We;
      We |= PC;
      var a = ir.transition, i = ua();
      try {
        return ir.transition = null, Pt(Wt), e ? e() : void 0;
      } finally {
        Pt(i), ir.transition = a, We = t, (We & (lr | Za)) === Un && Iu();
      }
    }
    function KC() {
      return (We & (lr | Za)) !== Un;
    }
    function Rm(e, t) {
      xr(_S, al, e), al = Ne(al, t);
    }
    function HS(e) {
      al = _S.current, Rr(_S, e);
    }
    function vs(e, t) {
      e.finishedWork = null, e.finishedLanes = A;
      var a = e.timeoutHandle;
      if (a !== Ny && (e.timeoutHandle = Ny, eR(a)), Xt !== null)
        for (var i = Xt.return; i !== null; ) {
          var u = i.alternate;
          DC(u, i), i = i.return;
        }
      Pr = e;
      var s = ms(e.current, null);
      return Xt = s, An = al = t, Hn = $l, pp = null, mm = A, vp = A, ym = A, hp = null, ha = null, Tx(), Si.discardPendingWarnings(), s;
    }
    function ZC(e, t) {
      do {
        var a = Xt;
        try {
          if (Nh(), TE(), an(), DS.current = null, a === null || a.return === null) {
            Hn = fp, pp = t, Xt = null;
            return;
          }
          if (rn && a.mode & be && om(a, !0), za)
            if (gr(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Rl(a, i, An);
            } else
              Mo(a, t, An);
          Kx(e, a.return, a, t, An), n1(a);
        } catch (u) {
          t = u, Xt === a && a !== null ? (a = a.return, Xt = a) : a = Xt;
          continue;
        }
        return;
      } while (!0);
    }
    function JC() {
      var e = wS.current;
      return wS.current = rm, e === null ? rm : e;
    }
    function e1(e) {
      wS.current = e;
    }
    function _D() {
      kS = Ht();
    }
    function Ep(e) {
      mm = Ne(e, mm);
    }
    function kD() {
      Hn === $l && (Hn = hm);
    }
    function FS() {
      (Hn === $l || Hn === hm || Hn === ds) && (Hn = dp), Pr !== null && (Fo(mm) || Fo(vp)) && ro(Pr, An);
    }
    function OD(e) {
      Hn !== dp && (Hn = ds), hp === null ? hp = [e] : hp.push(e);
    }
    function LD() {
      return Hn === $l;
    }
    function xm(e, t) {
      var a = We;
      We |= lr;
      var i = JC();
      if (Pr !== e || An !== t) {
        if (Fr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Cp(e, An), u.clear()), cd(e, t);
        }
        Ql = Po(), vs(e, t);
      }
      Nt(t);
      do
        try {
          MD();
          break;
        } catch (s) {
          ZC(e, s);
        }
      while (!0);
      if (Nh(), We = a, e1(i), Xt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return qs(), Pr = null, An = A, Hn;
    }
    function MD() {
      for (; Xt !== null; )
        t1(Xt);
    }
    function ND(e, t) {
      var a = We;
      We |= lr;
      var i = JC();
      if (Pr !== e || An !== t) {
        if (Fr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Cp(e, An), u.clear()), cd(e, t);
        }
        Ql = Po(), mp(), vs(e, t);
      }
      Nt(t);
      do
        try {
          zD();
          break;
        } catch (s) {
          ZC(e, s);
        }
      while (!0);
      return Nh(), e1(i), We = a, Xt !== null ? (Xs(), $l) : (qs(), Pr = null, An = A, Hn);
    }
    function zD() {
      for (; Xt !== null && !Ys(); )
        t1(Xt);
    }
    function t1(e) {
      var t = e.alternate;
      pt(e);
      var a;
      (e.mode & be) !== fe ? (Bg(e), a = jS(t, e, al), om(e, !0)) : a = jS(t, e, al), an(), e.memoizedProps = e.pendingProps, a === null ? n1(e) : Xt = a, DS.current = null;
    }
    function n1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ur) === ge) {
          pt(t);
          var u = void 0;
          if ((t.mode & be) === fe ? u = wC(a, t, al) : (Bg(t), u = wC(a, t, al), om(t, !1)), an(), u !== null) {
            Xt = u;
            return;
          }
        } else {
          var s = kw(a, t);
          if (s !== null) {
            s.flags &= mv, Xt = s;
            return;
          }
          if ((t.mode & be) !== fe) {
            om(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Ur, i.subtreeFlags = ge, i.deletions = null;
          else {
            Hn = bS, Xt = null;
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
      Hn === $l && (Hn = YC);
    }
    function hs(e, t, a) {
      var i = ua(), u = ir.transition;
      try {
        ir.transition = null, Pt(Wt), UD(e, t, a, i);
      } finally {
        ir.transition = u, Pt(i);
      }
      return null;
    }
    function UD(e, t, a, i) {
      do
        Wl();
      while (to !== null);
      if (ID(), (We & (lr | Za)) !== Un)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Bi(s), u === null)
        return Is(), null;
      if (s === A && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = A, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = tn;
      var f = Ne(u.lanes, u.childLanes);
      mc(e, f), e === Pr && (Pr = null, Xt = null, An = A), ((u.subtreeFlags & na) !== ge || (u.flags & na) !== ge) && (ps || (ps = !0, MS = a, PS(Pa, function() {
        return Wl(), null;
      })));
      var p = (u.subtreeFlags & (du | mr | Qn | na)) !== ge, v = (u.flags & (du | mr | Qn | na)) !== ge;
      if (p || v) {
        var m = ir.transition;
        ir.transition = null;
        var y = ua();
        Pt(Wt);
        var x = We;
        We |= Za, DS.current = null, zw(e, u), WE(), Gw(e, u, s), WT(e.containerInfo), e.current = u, td(s), Xw(u, e, s), yu(), Sv(), We = x, Pt(y), ir.transition = m;
      } else
        e.current = u, WE();
      var T = ps;
      if (ps ? (ps = !1, to = e, yp = s) : (ff = 0, Em = null), f = e.pendingLanes, f === A && (cf = null), T || l1(e.current, !1), vu(u.stateNode, i), Fr && e.memoizedUpdaters.clear(), vD(), ma(e, Ht()), t !== null)
        for (var k = e.onRecoverableError, L = 0; L < t.length; L++) {
          var N = t[L], G = N.stack, Se = N.digest;
          k(N.value, {
            componentStack: G,
            digest: Se
          });
        }
      if (gm) {
        gm = !1;
        var ve = OS;
        throw OS = null, ve;
      }
      return Cr(yp, me) && e.tag !== Qu && Wl(), f = e.pendingLanes, Cr(f, me) ? (Vx(), e === NS ? gp++ : (gp = 0, NS = e)) : gp = 0, Iu(), Is(), null;
    }
    function Wl() {
      if (to !== null) {
        var e = On(yp), t = ry(Ya, e), a = ir.transition, i = ua();
        try {
          return ir.transition = null, Pt(t), HD();
        } finally {
          Pt(i), ir.transition = a;
        }
      }
      return !1;
    }
    function AD(e) {
      LS.push(e), ps || (ps = !0, PS(Pa, function() {
        return Wl(), null;
      }));
    }
    function HD() {
      if (to === null)
        return !1;
      var e = MS;
      MS = null;
      var t = to, a = yp;
      if (to = null, yp = A, (We & (lr | Za)) !== Un)
        throw new Error("Cannot flush passive effects while already rendering.");
      zS = !0, Sm = !1, wv(a);
      var i = We;
      We |= Za, nD(t.current), Zw(t, t.current, a, e);
      {
        var u = LS;
        LS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Fw(t, f);
        }
      }
      nd(), l1(t.current, !0), We = i, Iu(), Sm ? t === Em ? ff++ : (ff = 0, Em = t) : ff = 0, zS = !1, Sm = !1, ia(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function r1(e) {
      return cf !== null && cf.has(e);
    }
    function FD(e) {
      cf === null ? cf = /* @__PURE__ */ new Set([e]) : cf.add(e);
    }
    function jD(e) {
      gm || (gm = !0, OS = e);
    }
    var VD = jD;
    function a1(e, t, a) {
      var i = cs(a, t), u = tC(e, i, me), s = Gu(e, u, me), f = Yr();
      s !== null && (Ol(s, me, f), ma(s, f));
    }
    function Lt(e, t, a) {
      if (Lw(a), Tp(!1), e.tag === q) {
        a1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === q) {
          a1(i, e, a);
          return;
        } else if (i.tag === ue) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !r1(s)) {
            var f = cs(a, e), p = iS(i, f, me), v = Gu(i, p, me), m = Yr();
            v !== null && (Ol(v, me, m), ma(v, m));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function BD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Yr();
      hc(e, a), qD(e), Pr === e && kl(An, a) && (Hn === dp || Hn === hm && Ov(An) && Ht() - kS < $C ? vs(e, A) : ym = Ne(ym, a)), ma(e, u);
    }
    function i1(e, t) {
      t === tn && (t = CD(e));
      var a = Yr(), i = pa(e, t);
      i !== null && (Ol(i, t, a), ma(i, a));
    }
    function PD(e) {
      var t = e.memoizedState, a = tn;
      t !== null && (a = t.retryLane), i1(e, a);
    }
    function YD(e, t) {
      var a = tn, i;
      switch (e.tag) {
        case Pe:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case dt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), i1(e, a);
    }
    function $D(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : yD(e / 1960) * 1960;
    }
    function QD() {
      if (gp > SD)
        throw gp = 0, NS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ff > ED && (ff = 0, Em = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function ID() {
      Si.flushLegacyContextWarning(), Si.flushPendingUnsafeLifecycleWarnings();
    }
    function l1(e, t) {
      pt(e), wm(e, hr, fD), t && wm(e, El, dD), wm(e, hr, sD), t && wm(e, El, cD), an();
    }
    function wm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ge ? i = i.child : ((i.flags & t) !== ge && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Dm = null;
    function u1(e) {
      {
        if ((We & lr) !== Un || !(e.mode & pe))
          return;
        var t = e.tag;
        if (t !== qe && t !== q && t !== ue && t !== se && t !== Be && t !== wt && t !== Ae)
          return;
        var a = Me(e) || "ReactComponent";
        if (Dm !== null) {
          if (Dm.has(a))
            return;
          Dm.add(a);
        } else
          Dm = /* @__PURE__ */ new Set([a]);
        var i = Zt;
        try {
          pt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? pt(e) : an();
        }
      }
    }
    var jS;
    {
      var WD = null;
      jS = function(e, t, a) {
        var i = h1(WD, t);
        try {
          return EC(e, t, a);
        } catch (s) {
          if (ix() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Nh(), TE(), DC(e, t), h1(t, i), t.mode & be && Bg(t), Sl(null, EC, null, e, t, a), Zm()) {
            var u = If();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var o1 = !1, VS;
    VS = /* @__PURE__ */ new Set();
    function GD(e) {
      if (qr && !Hx())
        switch (e.tag) {
          case se:
          case Be:
          case Ae: {
            var t = Xt && Me(Xt) || "Unknown", a = t;
            if (!VS.has(a)) {
              VS.add(a);
              var i = Me(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ue: {
            o1 || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), o1 = !0);
            break;
          }
        }
    }
    function Cp(e, t) {
      if (Fr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          yc(e, i, t);
        });
      }
    }
    var BS = {};
    function PS(e, t) {
      {
        var a = bi.current;
        return a !== null ? (a.push(t), BS) : Ps(e, t);
      }
    }
    function s1(e) {
      if (e !== BS)
        return gv(e);
    }
    function c1() {
      return bi.current !== null;
    }
    function XD(e) {
      {
        if (e.mode & pe) {
          if (!BC())
            return;
        } else if (!mD() || We !== Un || e.tag !== se && e.tag !== Be && e.tag !== Ae)
          return;
        if (bi.current === null) {
          var t = Zt;
          try {
            pt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Me(e));
          } finally {
            t ? pt(e) : an();
          }
        }
      }
    }
    function qD(e) {
      e.tag !== Qu && BC() && bi.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Tp(e) {
      WC = e;
    }
    var Ja = null, df = null, KD = function(e) {
      Ja = e;
    };
    function pf(e) {
      {
        if (Ja === null)
          return e;
        var t = Ja(e);
        return t === void 0 ? e : t.current;
      }
    }
    function YS(e) {
      return pf(e);
    }
    function $S(e) {
      {
        if (Ja === null)
          return e;
        var t = Ja(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = pf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: $,
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
    function f1(e, t) {
      {
        if (Ja === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ue: {
            typeof i == "function" && (u = !0);
            break;
          }
          case se: {
            (typeof i == "function" || s === Re) && (u = !0);
            break;
          }
          case Be: {
            (s === $ || s === Re) && (u = !0);
            break;
          }
          case wt:
          case Ae: {
            (s === Xe || s === Re) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Ja(a);
          if (f !== void 0 && f === Ja(i))
            return !0;
        }
        return !1;
      }
    }
    function d1(e) {
      {
        if (Ja === null || typeof WeakSet != "function")
          return;
        df === null && (df = /* @__PURE__ */ new WeakSet()), df.add(e);
      }
    }
    var ZD = function(e, t) {
      {
        if (Ja === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Wl(), Il(function() {
          QS(e.current, i, a);
        });
      }
    }, JD = function(e, t) {
      {
        if (e.context !== La)
          return;
        Wl(), Il(function() {
          Rp(t, e, null, null);
        });
      }
    };
    function QS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case se:
          case Ae:
          case ue:
            v = p;
            break;
          case Be:
            v = p.render;
            break;
        }
        if (Ja === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var x = Ja(v);
          x !== void 0 && (a.has(x) ? y = !0 : t.has(x) && (f === ue ? y = !0 : m = !0));
        }
        if (df !== null && (df.has(e) || i !== null && df.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var T = pa(e, me);
          T !== null && Fn(T, e, me, Tt);
        }
        u !== null && !y && QS(u, t, a), s !== null && QS(s, t, a);
      }
    }
    var eb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return IS(e.current, i, a), a;
      }
    };
    function IS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case se:
          case Ae:
          case ue:
            p = f;
            break;
          case Be:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? tb(e, a) : i !== null && IS(i, t, a), u !== null && IS(u, t, a);
      }
    }
    function tb(e, t) {
      {
        var a = nb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case re:
              t.add(i.stateNode);
              return;
            case oe:
              t.add(i.stateNode.containerInfo);
              return;
            case q:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function nb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === re)
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
    var WS;
    {
      WS = !1;
      try {
        var p1 = Object.preventExtensions({});
      } catch {
        WS = !0;
      }
    }
    function rb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ge, this.subtreeFlags = ge, this.deletions = null, this.lanes = A, this.childLanes = A, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !WS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ma = function(e, t, a, i) {
      return new rb(e, t, a, i);
    };
    function GS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ab(e) {
      return typeof e == "function" && !GS(e) && e.defaultProps === void 0;
    }
    function ib(e) {
      if (typeof e == "function")
        return GS(e) ? ue : se;
      if (e != null) {
        var t = e.$$typeof;
        if (t === $)
          return Be;
        if (t === Xe)
          return wt;
      }
      return qe;
    }
    function ms(e, t) {
      var a = e.alternate;
      a === null ? (a = Ma(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ge, a.subtreeFlags = ge, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & _n, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case qe:
        case se:
        case Ae:
          a.type = pf(e.type);
          break;
        case ue:
          a.type = YS(e.type);
          break;
        case Be:
          a.type = $S(e.type);
          break;
      }
      return a;
    }
    function lb(e, t) {
      e.flags &= _n | _t;
      var a = e.alternate;
      if (a === null)
        e.childLanes = A, e.lanes = t, e.child = null, e.subtreeFlags = ge, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ge, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function ub(e, t, a) {
      var i;
      return e === Rh ? (i = pe, t === !0 && (i |= Ve, i |= jr)) : i = fe, Fr && (i |= be), Ma(q, null, null, i);
    }
    function XS(e, t, a, i, u, s) {
      var f = qe, p = e;
      if (typeof e == "function")
        GS(e) ? (f = ue, p = YS(p)) : p = pf(p);
      else if (typeof e == "string")
        f = re;
      else
        e:
          switch (e) {
            case Ra:
              return ao(a.children, u, s, t);
            case Oi:
              f = Ze, u |= Ve, (u & pe) !== fe && (u |= jr);
              break;
            case sl:
              return ob(a, u, s, t);
            case he:
              return sb(a, u, s, t);
            case Ie:
              return cb(a, u, s, t);
            case bt:
              return v1(a, u, s, t);
            case At:
            case Fe:
            case fr:
            case Li:
            case hn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case E:
                    f = Ke;
                    break e;
                  case j:
                    f = qt;
                    break e;
                  case $:
                    f = Be, p = $S(p);
                    break e;
                  case Xe:
                    f = wt;
                    break e;
                  case Re:
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
      var y = Ma(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function qS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = XS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function ao(e, t, a, i) {
      var u = Ma(rt, e, i, t);
      return u.lanes = a, u;
    }
    function ob(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Ma(yt, e, i, t | be);
      return u.elementType = sl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function sb(e, t, a, i) {
      var u = Ma(Pe, e, i, t);
      return u.elementType = he, u.lanes = a, u;
    }
    function cb(e, t, a, i) {
      var u = Ma(dt, e, i, t);
      return u.elementType = Ie, u.lanes = a, u;
    }
    function v1(e, t, a, i) {
      var u = Ma(_e, e, i, t);
      u.elementType = bt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function KS(e, t, a) {
      var i = Ma(Ue, e, null, t);
      return i.lanes = a, i;
    }
    function fb() {
      var e = Ma(re, null, null, fe);
      return e.elementType = "DELETED", e;
    }
    function db(e) {
      var t = Ma(Vt, null, null, fe);
      return t.stateNode = e, t;
    }
    function ZS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Ma(oe, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function h1(e, t) {
      return e === null && (e = Ma(qe, null, null, fe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function pb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ny, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = tn, this.eventTimes = Bo(A), this.expirationTimes = Bo(Tt), this.pendingLanes = A, this.suspendedLanes = A, this.pingedLanes = A, this.expiredLanes = A, this.mutableReadLanes = A, this.finishedLanes = A, this.entangledLanes = A, this.entanglements = Bo(A), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Uo; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Rh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Qu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function m1(e, t, a, i, u, s, f, p, v, m) {
      var y = new pb(e, t, a, p, v), x = ub(t, s);
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
      return fg(x), y;
    }
    var JS = "18.3.1";
    function vb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Sa(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Mr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var e0, t0;
    e0 = !1, t0 = {};
    function y1(e) {
      if (!e)
        return La;
      var t = Jr(e), a = qR(t);
      if (t.tag === ue) {
        var i = t.type;
        if (Ki(i))
          return $0(t, i, a);
      }
      return a;
    }
    function hb(e, t) {
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
        if (u.mode & Ve) {
          var s = Me(a) || "Component";
          if (!t0[s]) {
            t0[s] = !0;
            var f = Zt;
            try {
              pt(u), a.mode & Ve ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? pt(f) : an();
            }
          }
        }
        return u.stateNode;
      }
    }
    function g1(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return m1(e, t, v, m, a, i, u, s, f);
    }
    function S1(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, x = m1(a, i, y, e, u, s, f, p, v);
      x.context = y1(null);
      var T = x.current, k = Yr(), L = no(T), N = Pl(k, L);
      return N.callback = t ?? null, Gu(T, N, L), TD(x, L, k), x;
    }
    function Rp(e, t, a, i) {
      ed(t, e);
      var u = t.current, s = Yr(), f = no(u);
      rd(f);
      var p = y1(a);
      t.context === null ? t.context = p : t.pendingContext = p, qr && Zt !== null && !e0 && (e0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Me(Zt) || "Unknown"));
      var v = Pl(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = Gu(u, v, f);
      return m !== null && (Fn(m, u, f, s), Fh(m, u, f)), f;
    }
    function bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case re:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function mb(e) {
      switch (e.tag) {
        case q: {
          var t = e.stateNode;
          if (gc(t)) {
            var a = ld(t);
            DD(t, a);
          }
          break;
        }
        case Pe: {
          Il(function() {
            var u = pa(e, me);
            if (u !== null) {
              var s = Yr();
              Fn(u, e, me, s);
            }
          });
          var i = me;
          n0(e, i);
          break;
        }
      }
    }
    function E1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Uv(a.retryLane, t));
    }
    function n0(e, t) {
      E1(e, t);
      var a = e.alternate;
      a && E1(a, t);
    }
    function yb(e) {
      if (e.tag === Pe) {
        var t = Ho, a = pa(e, t);
        if (a !== null) {
          var i = Yr();
          Fn(a, e, t, i);
        }
        n0(e, t);
      }
    }
    function gb(e) {
      if (e.tag === Pe) {
        var t = no(e), a = pa(e, t);
        if (a !== null) {
          var i = Yr();
          Fn(a, e, t, i);
        }
        n0(e, t);
      }
    }
    function C1(e) {
      var t = yv(e);
      return t === null ? null : t.stateNode;
    }
    var T1 = function(e) {
      return null;
    };
    function Sb(e) {
      return T1(e);
    }
    var R1 = function(e) {
      return !1;
    };
    function Eb(e) {
      return R1(e);
    }
    var x1 = null, w1 = null, D1 = null, b1 = null, _1 = null, k1 = null, O1 = null, L1 = null, M1 = null;
    {
      var N1 = function(e, t, a) {
        var i = t[a], u = mn(e) ? e.slice() : je({}, e);
        return a + 1 === t.length ? (mn(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = N1(e[i], t, a + 1), u);
      }, z1 = function(e, t) {
        return N1(e, t, 0);
      }, U1 = function(e, t, a, i) {
        var u = t[i], s = mn(e) ? e.slice() : je({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], mn(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = U1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, A1 = function(e, t, a) {
        if (t.length !== a.length) {
          Oe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Oe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return U1(e, t, a, 0);
      }, H1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = mn(e) ? e.slice() : je({}, e);
        return s[u] = H1(e[u], t, a + 1, i), s;
      }, F1 = function(e, t, a) {
        return H1(e, t, 0, a);
      }, r0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      x1 = function(e, t, a, i) {
        var u = r0(e, t);
        if (u !== null) {
          var s = F1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = je({}, e.memoizedProps);
          var f = pa(e, me);
          f !== null && Fn(f, e, me, Tt);
        }
      }, w1 = function(e, t, a) {
        var i = r0(e, t);
        if (i !== null) {
          var u = z1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = je({}, e.memoizedProps);
          var s = pa(e, me);
          s !== null && Fn(s, e, me, Tt);
        }
      }, D1 = function(e, t, a, i) {
        var u = r0(e, t);
        if (u !== null) {
          var s = A1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = je({}, e.memoizedProps);
          var f = pa(e, me);
          f !== null && Fn(f, e, me, Tt);
        }
      }, b1 = function(e, t, a) {
        e.pendingProps = F1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = pa(e, me);
        i !== null && Fn(i, e, me, Tt);
      }, _1 = function(e, t) {
        e.pendingProps = z1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = pa(e, me);
        a !== null && Fn(a, e, me, Tt);
      }, k1 = function(e, t, a) {
        e.pendingProps = A1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = pa(e, me);
        i !== null && Fn(i, e, me, Tt);
      }, O1 = function(e) {
        var t = pa(e, me);
        t !== null && Fn(t, e, me, Tt);
      }, L1 = function(e) {
        T1 = e;
      }, M1 = function(e) {
        R1 = e;
      };
    }
    function Cb(e) {
      var t = ra(e);
      return t === null ? null : t.stateNode;
    }
    function Tb(e) {
      return null;
    }
    function Rb() {
      return Zt;
    }
    function xb(e) {
      var t = e.findFiberByHostInstance, a = M.ReactCurrentDispatcher;
      return Jf({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: x1,
        overrideHookStateDeletePath: w1,
        overrideHookStateRenamePath: D1,
        overrideProps: b1,
        overridePropsDeletePath: _1,
        overridePropsRenamePath: k1,
        setErrorHandler: L1,
        setSuspenseHandler: M1,
        scheduleUpdate: O1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Cb,
        findFiberByHostInstance: t || Tb,
        // React Refresh
        findHostInstancesForRefresh: eb,
        scheduleRefresh: ZD,
        scheduleRoot: JD,
        setRefreshHandler: KD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Rb,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: JS
      });
    }
    var j1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function a0(e) {
      this._internalRoot = e;
    }
    _m.prototype.render = a0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : km(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Jt) {
          var i = C1(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Rp(e, t, null, null);
    }, _m.prototype.unmount = a0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        KC() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Il(function() {
          Rp(null, e, null, null);
        }), j0(t);
      }
    };
    function wb(e, t) {
      if (!km(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      V1(e);
      var a = !1, i = !1, u = "", s = j1;
      t != null && (t.hydrate ? Oe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ti && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = g1(e, Rh, null, a, i, u, s);
      mh(f.current, e);
      var p = e.nodeType === Jt ? e.parentNode : e;
      return kd(p), new a0(f);
    }
    function _m(e) {
      this._internalRoot = e;
    }
    function Db(e) {
      e && ly(e);
    }
    _m.prototype.unstable_scheduleHydration = Db;
    function bb(e, t, a) {
      if (!km(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      V1(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = j1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = S1(t, null, e, Rh, i, s, f, p, v);
      if (mh(m.current, e), kd(e), u)
        for (var y = 0; y < u.length; y++) {
          var x = u[y];
          Lx(m, x);
        }
      return new _m(m);
    }
    function km(e) {
      return !!(e && (e.nodeType === dr || e.nodeType === ba || e.nodeType === pl || !at));
    }
    function xp(e) {
      return !!(e && (e.nodeType === dr || e.nodeType === ba || e.nodeType === pl || e.nodeType === Jt && e.nodeValue === " react-mount-point-unstable "));
    }
    function V1(e) {
      e.nodeType === dr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Vd(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var _b = M.ReactCurrentOwner, B1;
    B1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Jt) {
        var t = C1(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = i0(e), u = !!(i && Yu(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === dr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function i0(e) {
      return e ? e.nodeType === ba ? e.documentElement : e.firstChild : null;
    }
    function P1() {
    }
    function kb(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var T = bm(f);
            s.call(T);
          };
        }
        var f = S1(
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
          P1
        );
        e._reactRootContainer = f, mh(f.current, e);
        var p = e.nodeType === Jt ? e.parentNode : e;
        return kd(p), Il(), f;
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
        var y = g1(
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
          P1
        );
        e._reactRootContainer = y, mh(y.current, e);
        var x = e.nodeType === Jt ? e.parentNode : e;
        return kd(x), Il(function() {
          Rp(t, y, a, i);
        }), y;
      }
    }
    function Ob(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Om(e, t, a, i, u) {
      B1(a), Ob(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = kb(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = bm(f);
            p.call(v);
          };
        }
        Rp(t, f, e, u);
      }
      return bm(f);
    }
    var Y1 = !1;
    function Lb(e) {
      {
        Y1 || (Y1 = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = _b.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ft(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === dr ? e : hb(e, "findDOMNode");
    }
    function Mb(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Vd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Om(null, e, t, !0, a);
    }
    function Nb(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Vd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Om(null, e, t, !1, a);
    }
    function zb(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !xp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !_o(e))
        throw new Error("parentComponent must be a valid React Component");
      return Om(e, t, a, !1, i);
    }
    var $1 = !1;
    function Ub(e) {
      if ($1 || ($1 = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !xp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Vd(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = i0(e), i = a && !Yu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Il(function() {
          Om(null, null, e, !1, function() {
            e._reactRootContainer = null, j0(e);
          });
        }), !0;
      } else {
        {
          var u = i0(e), s = !!(u && Yu(u)), f = e.nodeType === dr && xp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ku(mb), ay(yb), Ec(gb), Fv(ua), jv(Gn), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), vv(HT), Hs(AS, bD, Il);
    function Ab(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!km(t))
        throw new Error("Target container is not a DOM element.");
      return vb(e, t, null, a);
    }
    function Hb(e, t, a, i) {
      return zb(e, t, a, i);
    }
    var l0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Yu, Yc, yh, As, wo, AS]
    };
    function Fb(e, t) {
      return l0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), wb(e, t);
    }
    function jb(e, t, a) {
      return l0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), bb(e, t, a);
    }
    function Vb(e) {
      return KC() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Il(e);
    }
    var Bb = xb({
      findFiberByHostInstance: ts,
      bundleType: 1,
      version: JS,
      rendererPackageName: "react-dom"
    });
    if (!Bb && pn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Q1 = window.location.protocol;
      /^(https?|file):$/.test(Q1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Q1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l0, ga.createPortal = Ab, ga.createRoot = Fb, ga.findDOMNode = Lb, ga.flushSync = Vb, ga.hydrate = Mb, ga.hydrateRoot = jb, ga.render = Nb, ga.unmountComponentAtNode = Ub, ga.unstable_batchedUpdates = AS, ga.unstable_renderSubtreeIntoContainer = Hb, ga.version = JS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ga;
}
function tT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tT);
    } catch (J) {
      console.error(J);
    }
  }
}
process.env.NODE_ENV === "production" ? (tT(), c0.exports = Zb()) : c0.exports = Jb();
var e_ = c0.exports;
const t_ = "_dimmed_3clts_9", n_ = "_modal_3clts_16", r_ = "_modalBottom_3clts_32", a_ = "_modalHeader_3clts_45", i_ = "_closeButton_3clts_52", l_ = "_title_3clts_59", u_ = "_buttonRow_3clts_68", o_ = "_buttonRowReverse_3clts_76", s_ = "_buttonColumn_3clts_85", c_ = "_buttonColumnReverse_3clts_94", _i = {
  dimmed: t_,
  modal: n_,
  modalBottom: r_,
  modalHeader: a_,
  closeButton: i_,
  title: l_,
  buttonRow: u_,
  buttonRowReverse: o_,
  buttonColumn: s_,
  buttonColumnReverse: c_
}, J1 = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2729_1438)'%3e%3cpath%20d='M19.8167%206.41L18.4067%205L12.8167%2010.59L7.22665%205L5.81665%206.41L11.4067%2012L5.81665%2017.59L7.22665%2019L12.8167%2013.41L18.4067%2019L19.8167%2017.59L14.2267%2012L19.8167%206.41Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2729_1438'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.81665)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", f_ = {
  center: _i.modal,
  bottom: _i.modalBottom
}, d_ = {
  row: _i.buttonRow,
  "row-reverse": _i.buttonRowReverse,
  column: _i.buttonColumn,
  "column-reverse": _i.buttonColumnReverse
}, y_ = ({
  isOpen: J,
  onClose: xe,
  title: M,
  position: mt,
  content: Rt,
  style: Oe,
  closeButton: g,
  confirmButton: xt,
  buttonPosition: se,
  closeOnOutsideClick: ue = !0,
  customCloseIcon: qe,
  hideCloseIcon: q = !1
}) => {
  const oe = Qb(null), re = g || xt, Ue = se ? d_[se] : _i.buttonRow;
  Ib(() => {
    const Ze = (qt) => {
      oe.current && !oe.current.contains(qt.target) && ue && xe();
    };
    return document.addEventListener("mousedown", Ze), () => {
      document.removeEventListener("mousedown", Ze);
    };
  }, [oe, xe, ue]);
  const rt = (Ze) => {
    Ze.currentTarget.src = J1;
  };
  return /* @__PURE__ */ Xl.jsx(Xl.Fragment, { children: J && e_.createPortal(
    /* @__PURE__ */ Xl.jsx("div", { className: _i.dimmed, style: Oe == null ? void 0 : Oe.dimmed, children: /* @__PURE__ */ Xl.jsxs("section", { className: f_[mt], ref: oe, style: Oe == null ? void 0 : Oe.modal, children: [
      /* @__PURE__ */ Xl.jsxs("header", { className: _i.modalHeader, style: Oe == null ? void 0 : Oe.modalHeader, children: [
        /* @__PURE__ */ Xl.jsx("span", { className: _i.title, style: Oe == null ? void 0 : Oe.modalTitle, children: M }),
        !q && /* @__PURE__ */ Xl.jsx(
          "img",
          {
            src: qe ?? J1,
            alt: "close",
            className: _i.closeButton,
            onClick: xe,
            onError: rt
          }
        )
      ] }),
      Rt && /* @__PURE__ */ Xl.jsx("section", { children: Rt }),
      re && /* @__PURE__ */ Xl.jsxs("footer", { className: Ue, children: [
        g,
        xt
      ] })
    ] }) }),
    document.body
  ) });
};
export {
  y_ as Modal
};
