var hg = t => {
    throw TypeError(t)
}
;
var Xc = (t, e, r) => e.has(t) || hg("Cannot " + r);
var R = (t, e, r) => (Xc(t, e, "read from private field"),
r ? r.call(t) : e.get(t))
  , pe = (t, e, r) => e.has(t) ? hg("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r)
  , Z = (t, e, r, i) => (Xc(t, e, "write to private field"),
i ? i.call(t, r) : e.set(t, r),
r)
  , Te = (t, e, r) => (Xc(t, e, "access private method"),
r);
var ll = (t, e, r, i) => ({
    set _(a) {
        Z(t, e, a, r)
    },
    get _() {
        return R(t, e, i)
    }
});
function h2(t, e) {
    for (var r = 0; r < e.length; r++) {
        const i = e[r];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const a in i)
                if (a !== "default" && !(a in t)) {
                    const l = Object.getOwnPropertyDescriptor(i, a);
                    l && Object.defineProperty(t, a, l.get ? l : {
                        enumerable: !0,
                        get: () => i[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        i(a);
    new MutationObserver(a => {
        for (const l of a)
            if (l.type === "childList")
                for (const u of l.addedNodes)
                    u.tagName === "LINK" && u.rel === "modulepreload" && i(u)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(a) {
        const l = {};
        return a.integrity && (l.integrity = a.integrity),
        a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? l.credentials = "include" : a.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function i(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const l = r(a);
        fetch(a.href, l)
    }
}
)();
function ov(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Jc = {
    exports: {}
}
  , lo = {}
  , Zc = {
    exports: {}
}
  , Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pg;
function p2() {
    if (pg)
        return Ee;
    pg = 1;
    var t = Symbol.for("react.element")
      , e = Symbol.for("react.portal")
      , r = Symbol.for("react.fragment")
      , i = Symbol.for("react.strict_mode")
      , a = Symbol.for("react.profiler")
      , l = Symbol.for("react.provider")
      , u = Symbol.for("react.context")
      , d = Symbol.for("react.forward_ref")
      , h = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , g = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function w(O) {
        return O === null || typeof O != "object" ? null : (O = y && O[y] || O["@@iterator"],
        typeof O == "function" ? O : null)
    }
    var k = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , T = Object.assign
      , E = {};
    function S(O, z, ye) {
        this.props = O,
        this.context = z,
        this.refs = E,
        this.updater = ye || k
    }
    S.prototype.isReactComponent = {},
    S.prototype.setState = function(O, z) {
        if (typeof O != "object" && typeof O != "function" && O != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, O, z, "setState")
    }
    ,
    S.prototype.forceUpdate = function(O) {
        this.updater.enqueueForceUpdate(this, O, "forceUpdate")
    }
    ;
    function b() {}
    b.prototype = S.prototype;
    function P(O, z, ye) {
        this.props = O,
        this.context = z,
        this.refs = E,
        this.updater = ye || k
    }
    var A = P.prototype = new b;
    A.constructor = P,
    T(A, S.prototype),
    A.isPureReactComponent = !0;
    var M = Array.isArray
      , F = Object.prototype.hasOwnProperty
      , $ = {
        current: null
    }
      , J = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function V(O, z, ye) {
        var ve, he = {}, G = null, Se = null;
        if (z != null)
            for (ve in z.ref !== void 0 && (Se = z.ref),
            z.key !== void 0 && (G = "" + z.key),
            z)
                F.call(z, ve) && !J.hasOwnProperty(ve) && (he[ve] = z[ve]);
        var Ce = arguments.length - 2;
        if (Ce === 1)
            he.children = ye;
        else if (1 < Ce) {
            for (var we = Array(Ce), it = 0; it < Ce; it++)
                we[it] = arguments[it + 2];
            he.children = we
        }
        if (O && O.defaultProps)
            for (ve in Ce = O.defaultProps,
            Ce)
                he[ve] === void 0 && (he[ve] = Ce[ve]);
        return {
            $$typeof: t,
            type: O,
            key: G,
            ref: Se,
            props: he,
            _owner: $.current
        }
    }
    function ee(O, z) {
        return {
            $$typeof: t,
            type: O.type,
            key: z,
            ref: O.ref,
            props: O.props,
            _owner: O._owner
        }
    }
    function ue(O) {
        return typeof O == "object" && O !== null && O.$$typeof === t
    }
    function le(O) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + O.replace(/[=:]/g, function(ye) {
            return z[ye]
        })
    }
    var Ae = /\/+/g;
    function ze(O, z) {
        return typeof O == "object" && O !== null && O.key != null ? le("" + O.key) : z.toString(36)
    }
    function Re(O, z, ye, ve, he) {
        var G = typeof O;
        (G === "undefined" || G === "boolean") && (O = null);
        var Se = !1;
        if (O === null)
            Se = !0;
        else
            switch (G) {
            case "string":
            case "number":
                Se = !0;
                break;
            case "object":
                switch (O.$$typeof) {
                case t:
                case e:
                    Se = !0
                }
            }
        if (Se)
            return Se = O,
            he = he(Se),
            O = ve === "" ? "." + ze(Se, 0) : ve,
            M(he) ? (ye = "",
            O != null && (ye = O.replace(Ae, "$&/") + "/"),
            Re(he, z, ye, "", function(it) {
                return it
            })) : he != null && (ue(he) && (he = ee(he, ye + (!he.key || Se && Se.key === he.key ? "" : ("" + he.key).replace(Ae, "$&/") + "/") + O)),
            z.push(he)),
            1;
        if (Se = 0,
        ve = ve === "" ? "." : ve + ":",
        M(O))
            for (var Ce = 0; Ce < O.length; Ce++) {
                G = O[Ce];
                var we = ve + ze(G, Ce);
                Se += Re(G, z, ye, we, he)
            }
        else if (we = w(O),
        typeof we == "function")
            for (O = we.call(O),
            Ce = 0; !(G = O.next()).done; )
                G = G.value,
                we = ve + ze(G, Ce++),
                Se += Re(G, z, ye, we, he);
        else if (G === "object")
            throw z = String(O),
            Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
        return Se
    }
    function De(O, z, ye) {
        if (O == null)
            return O;
        var ve = []
          , he = 0;
        return Re(O, ve, "", "", function(G) {
            return z.call(ye, G, he++)
        }),
        ve
    }
    function Ne(O) {
        if (O._status === -1) {
            var z = O._result;
            z = z(),
            z.then(function(ye) {
                (O._status === 0 || O._status === -1) && (O._status = 1,
                O._result = ye)
            }, function(ye) {
                (O._status === 0 || O._status === -1) && (O._status = 2,
                O._result = ye)
            }),
            O._status === -1 && (O._status = 0,
            O._result = z)
        }
        if (O._status === 1)
            return O._result.default;
        throw O._result
    }
    var me = {
        current: null
    }
      , Q = {
        transition: null
    }
      , oe = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: Q,
        ReactCurrentOwner: $
    };
    function U() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Ee.Children = {
        map: De,
        forEach: function(O, z, ye) {
            De(O, function() {
                z.apply(this, arguments)
            }, ye)
        },
        count: function(O) {
            var z = 0;
            return De(O, function() {
                z++
            }),
            z
        },
        toArray: function(O) {
            return De(O, function(z) {
                return z
            }) || []
        },
        only: function(O) {
            if (!ue(O))
                throw Error("React.Children.only expected to receive a single React element child.");
            return O
        }
    },
    Ee.Component = S,
    Ee.Fragment = r,
    Ee.Profiler = a,
    Ee.PureComponent = P,
    Ee.StrictMode = i,
    Ee.Suspense = h,
    Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe,
    Ee.act = U,
    Ee.cloneElement = function(O, z, ye) {
        if (O == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
        var ve = T({}, O.props)
          , he = O.key
          , G = O.ref
          , Se = O._owner;
        if (z != null) {
            if (z.ref !== void 0 && (G = z.ref,
            Se = $.current),
            z.key !== void 0 && (he = "" + z.key),
            O.type && O.type.defaultProps)
                var Ce = O.type.defaultProps;
            for (we in z)
                F.call(z, we) && !J.hasOwnProperty(we) && (ve[we] = z[we] === void 0 && Ce !== void 0 ? Ce[we] : z[we])
        }
        var we = arguments.length - 2;
        if (we === 1)
            ve.children = ye;
        else if (1 < we) {
            Ce = Array(we);
            for (var it = 0; it < we; it++)
                Ce[it] = arguments[it + 2];
            ve.children = Ce
        }
        return {
            $$typeof: t,
            type: O.type,
            key: he,
            ref: G,
            props: ve,
            _owner: Se
        }
    }
    ,
    Ee.createContext = function(O) {
        return O = {
            $$typeof: u,
            _currentValue: O,
            _currentValue2: O,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        O.Provider = {
            $$typeof: l,
            _context: O
        },
        O.Consumer = O
    }
    ,
    Ee.createElement = V,
    Ee.createFactory = function(O) {
        var z = V.bind(null, O);
        return z.type = O,
        z
    }
    ,
    Ee.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Ee.forwardRef = function(O) {
        return {
            $$typeof: d,
            render: O
        }
    }
    ,
    Ee.isValidElement = ue,
    Ee.lazy = function(O) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: O
            },
            _init: Ne
        }
    }
    ,
    Ee.memo = function(O, z) {
        return {
            $$typeof: m,
            type: O,
            compare: z === void 0 ? null : z
        }
    }
    ,
    Ee.startTransition = function(O) {
        var z = Q.transition;
        Q.transition = {};
        try {
            O()
        } finally {
            Q.transition = z
        }
    }
    ,
    Ee.unstable_act = U,
    Ee.useCallback = function(O, z) {
        return me.current.useCallback(O, z)
    }
    ,
    Ee.useContext = function(O) {
        return me.current.useContext(O)
    }
    ,
    Ee.useDebugValue = function() {}
    ,
    Ee.useDeferredValue = function(O) {
        return me.current.useDeferredValue(O)
    }
    ,
    Ee.useEffect = function(O, z) {
        return me.current.useEffect(O, z)
    }
    ,
    Ee.useId = function() {
        return me.current.useId()
    }
    ,
    Ee.useImperativeHandle = function(O, z, ye) {
        return me.current.useImperativeHandle(O, z, ye)
    }
    ,
    Ee.useInsertionEffect = function(O, z) {
        return me.current.useInsertionEffect(O, z)
    }
    ,
    Ee.useLayoutEffect = function(O, z) {
        return me.current.useLayoutEffect(O, z)
    }
    ,
    Ee.useMemo = function(O, z) {
        return me.current.useMemo(O, z)
    }
    ,
    Ee.useReducer = function(O, z, ye) {
        return me.current.useReducer(O, z, ye)
    }
    ,
    Ee.useRef = function(O) {
        return me.current.useRef(O)
    }
    ,
    Ee.useState = function(O) {
        return me.current.useState(O)
    }
    ,
    Ee.useSyncExternalStore = function(O, z, ye) {
        return me.current.useSyncExternalStore(O, z, ye)
    }
    ,
    Ee.useTransition = function() {
        return me.current.useTransition()
    }
    ,
    Ee.version = "18.3.1",
    Ee
}
var mg;
function Sf() {
    return mg || (mg = 1,
    Zc.exports = p2()),
    Zc.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gg;
function m2() {
    if (gg)
        return lo;
    gg = 1;
    var t = Sf()
      , e = Symbol.for("react.element")
      , r = Symbol.for("react.fragment")
      , i = Object.prototype.hasOwnProperty
      , a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , l = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function u(d, h, m) {
        var g, y = {}, w = null, k = null;
        m !== void 0 && (w = "" + m),
        h.key !== void 0 && (w = "" + h.key),
        h.ref !== void 0 && (k = h.ref);
        for (g in h)
            i.call(h, g) && !l.hasOwnProperty(g) && (y[g] = h[g]);
        if (d && d.defaultProps)
            for (g in h = d.defaultProps,
            h)
                y[g] === void 0 && (y[g] = h[g]);
        return {
            $$typeof: e,
            type: d,
            key: w,
            ref: k,
            props: y,
            _owner: a.current
        }
    }
    return lo.Fragment = r,
    lo.jsx = u,
    lo.jsxs = u,
    lo
}
var yg;
function g2() {
    return yg || (yg = 1,
    Jc.exports = m2()),
    Jc.exports
}
var v = g2()
  , L = Sf();
const y2 = ov(L)
  , v2 = h2({
    __proto__: null,
    default: y2
}, [L]);
var ul = {}
  , ed = {
    exports: {}
}
  , Dt = {}
  , td = {
    exports: {}
}
  , nd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vg;
function x2() {
    return vg || (vg = 1,
    (function(t) {
        function e(Q, oe) {
            var U = Q.length;
            Q.push(oe);
            e: for (; 0 < U; ) {
                var O = U - 1 >>> 1
                  , z = Q[O];
                if (0 < a(z, oe))
                    Q[O] = oe,
                    Q[U] = z,
                    U = O;
                else
                    break e
            }
        }
        function r(Q) {
            return Q.length === 0 ? null : Q[0]
        }
        function i(Q) {
            if (Q.length === 0)
                return null;
            var oe = Q[0]
              , U = Q.pop();
            if (U !== oe) {
                Q[0] = U;
                e: for (var O = 0, z = Q.length, ye = z >>> 1; O < ye; ) {
                    var ve = 2 * (O + 1) - 1
                      , he = Q[ve]
                      , G = ve + 1
                      , Se = Q[G];
                    if (0 > a(he, U))
                        G < z && 0 > a(Se, he) ? (Q[O] = Se,
                        Q[G] = U,
                        O = G) : (Q[O] = he,
                        Q[ve] = U,
                        O = ve);
                    else if (G < z && 0 > a(Se, U))
                        Q[O] = Se,
                        Q[G] = U,
                        O = G;
                    else
                        break e
                }
            }
            return oe
        }
        function a(Q, oe) {
            var U = Q.sortIndex - oe.sortIndex;
            return U !== 0 ? U : Q.id - oe.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var l = performance;
            t.unstable_now = function() {
                return l.now()
            }
        } else {
            var u = Date
              , d = u.now();
            t.unstable_now = function() {
                return u.now() - d
            }
        }
        var h = []
          , m = []
          , g = 1
          , y = null
          , w = 3
          , k = !1
          , T = !1
          , E = !1
          , S = typeof setTimeout == "function" ? setTimeout : null
          , b = typeof clearTimeout == "function" ? clearTimeout : null
          , P = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function A(Q) {
            for (var oe = r(m); oe !== null; ) {
                if (oe.callback === null)
                    i(m);
                else if (oe.startTime <= Q)
                    i(m),
                    oe.sortIndex = oe.expirationTime,
                    e(h, oe);
                else
                    break;
                oe = r(m)
            }
        }
        function M(Q) {
            if (E = !1,
            A(Q),
            !T)
                if (r(h) !== null)
                    T = !0,
                    Ne(F);
                else {
                    var oe = r(m);
                    oe !== null && me(M, oe.startTime - Q)
                }
        }
        function F(Q, oe) {
            T = !1,
            E && (E = !1,
            b(V),
            V = -1),
            k = !0;
            var U = w;
            try {
                for (A(oe),
                y = r(h); y !== null && (!(y.expirationTime > oe) || Q && !le()); ) {
                    var O = y.callback;
                    if (typeof O == "function") {
                        y.callback = null,
                        w = y.priorityLevel;
                        var z = O(y.expirationTime <= oe);
                        oe = t.unstable_now(),
                        typeof z == "function" ? y.callback = z : y === r(h) && i(h),
                        A(oe)
                    } else
                        i(h);
                    y = r(h)
                }
                if (y !== null)
                    var ye = !0;
                else {
                    var ve = r(m);
                    ve !== null && me(M, ve.startTime - oe),
                    ye = !1
                }
                return ye
            } finally {
                y = null,
                w = U,
                k = !1
            }
        }
        var $ = !1
          , J = null
          , V = -1
          , ee = 5
          , ue = -1;
        function le() {
            return !(t.unstable_now() - ue < ee)
        }
        function Ae() {
            if (J !== null) {
                var Q = t.unstable_now();
                ue = Q;
                var oe = !0;
                try {
                    oe = J(!0, Q)
                } finally {
                    oe ? ze() : ($ = !1,
                    J = null)
                }
            } else
                $ = !1
        }
        var ze;
        if (typeof P == "function")
            ze = function() {
                P(Ae)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Re = new MessageChannel
              , De = Re.port2;
            Re.port1.onmessage = Ae,
            ze = function() {
                De.postMessage(null)
            }
        } else
            ze = function() {
                S(Ae, 0)
            }
            ;
        function Ne(Q) {
            J = Q,
            $ || ($ = !0,
            ze())
        }
        function me(Q, oe) {
            V = S(function() {
                Q(t.unstable_now())
            }, oe)
        }
        t.unstable_IdlePriority = 5,
        t.unstable_ImmediatePriority = 1,
        t.unstable_LowPriority = 4,
        t.unstable_NormalPriority = 3,
        t.unstable_Profiling = null,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_cancelCallback = function(Q) {
            Q.callback = null
        }
        ,
        t.unstable_continueExecution = function() {
            T || k || (T = !0,
            Ne(F))
        }
        ,
        t.unstable_forceFrameRate = function(Q) {
            0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ee = 0 < Q ? Math.floor(1e3 / Q) : 5
        }
        ,
        t.unstable_getCurrentPriorityLevel = function() {
            return w
        }
        ,
        t.unstable_getFirstCallbackNode = function() {
            return r(h)
        }
        ,
        t.unstable_next = function(Q) {
            switch (w) {
            case 1:
            case 2:
            case 3:
                var oe = 3;
                break;
            default:
                oe = w
            }
            var U = w;
            w = oe;
            try {
                return Q()
            } finally {
                w = U
            }
        }
        ,
        t.unstable_pauseExecution = function() {}
        ,
        t.unstable_requestPaint = function() {}
        ,
        t.unstable_runWithPriority = function(Q, oe) {
            switch (Q) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                Q = 3
            }
            var U = w;
            w = Q;
            try {
                return oe()
            } finally {
                w = U
            }
        }
        ,
        t.unstable_scheduleCallback = function(Q, oe, U) {
            var O = t.unstable_now();
            switch (typeof U == "object" && U !== null ? (U = U.delay,
            U = typeof U == "number" && 0 < U ? O + U : O) : U = O,
            Q) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
            }
            return z = U + z,
            Q = {
                id: g++,
                callback: oe,
                priorityLevel: Q,
                startTime: U,
                expirationTime: z,
                sortIndex: -1
            },
            U > O ? (Q.sortIndex = U,
            e(m, Q),
            r(h) === null && Q === r(m) && (E ? (b(V),
            V = -1) : E = !0,
            me(M, U - O))) : (Q.sortIndex = z,
            e(h, Q),
            T || k || (T = !0,
            Ne(F))),
            Q
        }
        ,
        t.unstable_shouldYield = le,
        t.unstable_wrapCallback = function(Q) {
            var oe = w;
            return function() {
                var U = w;
                w = oe;
                try {
                    return Q.apply(this, arguments)
                } finally {
                    w = U
                }
            }
        }
    }
    )(nd)),
    nd
}
var xg;
function w2() {
    return xg || (xg = 1,
    td.exports = x2()),
    td.exports
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
var wg;
function b2() {
    if (wg)
        return Dt;
    wg = 1;
    var t = Sf()
      , e = w2();
    function r(n) {
        for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
            s += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + n + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set
      , a = {};
    function l(n, s) {
        u(n, s),
        u(n + "Capture", s)
    }
    function u(n, s) {
        for (a[n] = s,
        n = 0; n < s.length; n++)
            i.add(s[n])
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , h = Object.prototype.hasOwnProperty
      , m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , g = {}
      , y = {};
    function w(n) {
        return h.call(y, n) ? !0 : h.call(g, n) ? !1 : m.test(n) ? y[n] = !0 : (g[n] = !0,
        !1)
    }
    function k(n, s, o, c) {
        if (o !== null && o.type === 0)
            return !1;
        switch (typeof s) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return c ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5),
            n !== "data-" && n !== "aria-");
        default:
            return !1
        }
    }
    function T(n, s, o, c) {
        if (s === null || typeof s > "u" || k(n, s, o, c))
            return !0;
        if (c)
            return !1;
        if (o !== null)
            switch (o.type) {
            case 3:
                return !s;
            case 4:
                return s === !1;
            case 5:
                return isNaN(s);
            case 6:
                return isNaN(s) || 1 > s
            }
        return !1
    }
    function E(n, s, o, c, f, p, x) {
        this.acceptsBooleans = s === 2 || s === 3 || s === 4,
        this.attributeName = c,
        this.attributeNamespace = f,
        this.mustUseProperty = o,
        this.propertyName = n,
        this.type = s,
        this.sanitizeURL = p,
        this.removeEmptyString = x
    }
    var S = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
        S[n] = new E(n,0,!1,n,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
        var s = n[0];
        S[s] = new E(s,1,!1,n[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
        S[n] = new E(n,2,!1,n.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
        S[n] = new E(n,2,!1,n,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
        S[n] = new E(n,3,!1,n.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(n) {
        S[n] = new E(n,3,!0,n,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(n) {
        S[n] = new E(n,4,!1,n,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(n) {
        S[n] = new E(n,6,!1,n,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(n) {
        S[n] = new E(n,5,!1,n.toLowerCase(),null,!1,!1)
    });
    var b = /[\-:]([a-z])/g;
    function P(n) {
        return n[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
        var s = n.replace(b, P);
        S[s] = new E(s,1,!1,n,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
        var s = n.replace(b, P);
        S[s] = new E(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
        var s = n.replace(b, P);
        S[s] = new E(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(n) {
        S[n] = new E(n,1,!1,n.toLowerCase(),null,!1,!1)
    }),
    S.xlinkHref = new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(n) {
        S[n] = new E(n,1,!1,n.toLowerCase(),null,!0,!0)
    });
    function A(n, s, o, c) {
        var f = S.hasOwnProperty(s) ? S[s] : null;
        (f !== null ? f.type !== 0 : c || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (T(s, o, f, c) && (o = null),
        c || f === null ? w(s) && (o === null ? n.removeAttribute(s) : n.setAttribute(s, "" + o)) : f.mustUseProperty ? n[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (s = f.attributeName,
        c = f.attributeNamespace,
        o === null ? n.removeAttribute(s) : (f = f.type,
        o = f === 3 || f === 4 && o === !0 ? "" : "" + o,
        c ? n.setAttributeNS(c, s, o) : n.setAttribute(s, o))))
    }
    var M = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , F = Symbol.for("react.element")
      , $ = Symbol.for("react.portal")
      , J = Symbol.for("react.fragment")
      , V = Symbol.for("react.strict_mode")
      , ee = Symbol.for("react.profiler")
      , ue = Symbol.for("react.provider")
      , le = Symbol.for("react.context")
      , Ae = Symbol.for("react.forward_ref")
      , ze = Symbol.for("react.suspense")
      , Re = Symbol.for("react.suspense_list")
      , De = Symbol.for("react.memo")
      , Ne = Symbol.for("react.lazy")
      , me = Symbol.for("react.offscreen")
      , Q = Symbol.iterator;
    function oe(n) {
        return n === null || typeof n != "object" ? null : (n = Q && n[Q] || n["@@iterator"],
        typeof n == "function" ? n : null)
    }
    var U = Object.assign, O;
    function z(n) {
        if (O === void 0)
            try {
                throw Error()
            } catch (o) {
                var s = o.stack.trim().match(/\n( *(at )?)/);
                O = s && s[1] || ""
            }
        return `
` + O + n
    }
    var ye = !1;
    function ve(n, s) {
        if (!n || ye)
            return "";
        ye = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (s)
                if (s = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(s.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (B) {
                        var c = B
                    }
                    Reflect.construct(n, [], s)
                } else {
                    try {
                        s.call()
                    } catch (B) {
                        c = B
                    }
                    n.call(s.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (B) {
                    c = B
                }
                n()
            }
        } catch (B) {
            if (B && c && typeof B.stack == "string") {
                for (var f = B.stack.split(`
`), p = c.stack.split(`
`), x = f.length - 1, C = p.length - 1; 1 <= x && 0 <= C && f[x] !== p[C]; )
                    C--;
                for (; 1 <= x && 0 <= C; x--,
                C--)
                    if (f[x] !== p[C]) {
                        if (x !== 1 || C !== 1)
                            do
                                if (x--,
                                C--,
                                0 > C || f[x] !== p[C]) {
                                    var _ = `
` + f[x].replace(" at new ", " at ");
                                    return n.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", n.displayName)),
                                    _
                                }
                            while (1 <= x && 0 <= C);
                        break
                    }
            }
        } finally {
            ye = !1,
            Error.prepareStackTrace = o
        }
        return (n = n ? n.displayName || n.name : "") ? z(n) : ""
    }
    function he(n) {
        switch (n.tag) {
        case 5:
            return z(n.type);
        case 16:
            return z("Lazy");
        case 13:
            return z("Suspense");
        case 19:
            return z("SuspenseList");
        case 0:
        case 2:
        case 15:
            return n = ve(n.type, !1),
            n;
        case 11:
            return n = ve(n.type.render, !1),
            n;
        case 1:
            return n = ve(n.type, !0),
            n;
        default:
            return ""
        }
    }
    function G(n) {
        if (n == null)
            return null;
        if (typeof n == "function")
            return n.displayName || n.name || null;
        if (typeof n == "string")
            return n;
        switch (n) {
        case J:
            return "Fragment";
        case $:
            return "Portal";
        case ee:
            return "Profiler";
        case V:
            return "StrictMode";
        case ze:
            return "Suspense";
        case Re:
            return "SuspenseList"
        }
        if (typeof n == "object")
            switch (n.$$typeof) {
            case le:
                return (n.displayName || "Context") + ".Consumer";
            case ue:
                return (n._context.displayName || "Context") + ".Provider";
            case Ae:
                var s = n.render;
                return n = n.displayName,
                n || (n = s.displayName || s.name || "",
                n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"),
                n;
            case De:
                return s = n.displayName || null,
                s !== null ? s : G(n.type) || "Memo";
            case Ne:
                s = n._payload,
                n = n._init;
                try {
                    return G(n(s))
                } catch {}
            }
        return null
    }
    function Se(n) {
        var s = n.type;
        switch (n.tag) {
        case 24:
            return "Cache";
        case 9:
            return (s.displayName || "Context") + ".Consumer";
        case 10:
            return (s._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return n = s.render,
            n = n.displayName || n.name || "",
            s.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return s;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return G(s);
        case 8:
            return s === V ? "StrictMode" : "Mode";
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
            if (typeof s == "function")
                return s.displayName || s.name || null;
            if (typeof s == "string")
                return s
        }
        return null
    }
    function Ce(n) {
        switch (typeof n) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return n;
        case "object":
            return n;
        default:
            return ""
        }
    }
    function we(n) {
        var s = n.type;
        return (n = n.nodeName) && n.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }
    function it(n) {
        var s = we(n) ? "checked" : "value"
          , o = Object.getOwnPropertyDescriptor(n.constructor.prototype, s)
          , c = "" + n[s];
        if (!n.hasOwnProperty(s) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var f = o.get
              , p = o.set;
            return Object.defineProperty(n, s, {
                configurable: !0,
                get: function() {
                    return f.call(this)
                },
                set: function(x) {
                    c = "" + x,
                    p.call(this, x)
                }
            }),
            Object.defineProperty(n, s, {
                enumerable: o.enumerable
            }),
            {
                getValue: function() {
                    return c
                },
                setValue: function(x) {
                    c = "" + x
                },
                stopTracking: function() {
                    n._valueTracker = null,
                    delete n[s]
                }
            }
        }
    }
    function Kt(n) {
        n._valueTracker || (n._valueTracker = it(n))
    }
    function ct(n) {
        if (!n)
            return !1;
        var s = n._valueTracker;
        if (!s)
            return !0;
        var o = s.getValue()
          , c = "";
        return n && (c = we(n) ? n.checked ? "true" : "false" : n.value),
        n = c,
        n !== o ? (s.setValue(n),
        !0) : !1
    }
    function ln(n) {
        if (n = n || (typeof document < "u" ? document : void 0),
        typeof n > "u")
            return null;
        try {
            return n.activeElement || n.body
        } catch {
            return n.body
        }
    }
    function Qt(n, s) {
        var o = s.checked;
        return U({}, s, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ?? n._wrapperState.initialChecked
        })
    }
    function Gt(n, s) {
        var o = s.defaultValue == null ? "" : s.defaultValue
          , c = s.checked != null ? s.checked : s.defaultChecked;
        o = Ce(s.value != null ? s.value : o),
        n._wrapperState = {
            initialChecked: c,
            initialValue: o,
            controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
        }
    }
    function be(n, s) {
        s = s.checked,
        s != null && A(n, "checked", s, !1)
    }
    function dt(n, s) {
        be(n, s);
        var o = Ce(s.value)
          , c = s.type;
        if (o != null)
            c === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
        else if (c === "submit" || c === "reset") {
            n.removeAttribute("value");
            return
        }
        s.hasOwnProperty("value") ? cn(n, s.type, o) : s.hasOwnProperty("defaultValue") && cn(n, s.type, Ce(s.defaultValue)),
        s.checked == null && s.defaultChecked != null && (n.defaultChecked = !!s.defaultChecked)
    }
    function un(n, s, o) {
        if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
            var c = s.type;
            if (!(c !== "submit" && c !== "reset" || s.value !== void 0 && s.value !== null))
                return;
            s = "" + n._wrapperState.initialValue,
            o || s === n.value || (n.value = s),
            n.defaultValue = s
        }
        o = n.name,
        o !== "" && (n.name = ""),
        n.defaultChecked = !!n._wrapperState.initialChecked,
        o !== "" && (n.name = o)
    }
    function cn(n, s, o) {
        (s !== "number" || ln(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o))
    }
    var Zn = Array.isArray;
    function er(n, s, o, c) {
        if (n = n.options,
        s) {
            s = {};
            for (var f = 0; f < o.length; f++)
                s["$" + o[f]] = !0;
            for (o = 0; o < n.length; o++)
                f = s.hasOwnProperty("$" + n[o].value),
                n[o].selected !== f && (n[o].selected = f),
                f && c && (n[o].defaultSelected = !0)
        } else {
            for (o = "" + Ce(o),
            s = null,
            f = 0; f < n.length; f++) {
                if (n[f].value === o) {
                    n[f].selected = !0,
                    c && (n[f].defaultSelected = !0);
                    return
                }
                s !== null || n[f].disabled || (s = n[f])
            }
            s !== null && (s.selected = !0)
        }
    }
    function Ln(n, s) {
        if (s.dangerouslySetInnerHTML != null)
            throw Error(r(91));
        return U({}, s, {
            value: void 0,
            defaultValue: void 0,
            children: "" + n._wrapperState.initialValue
        })
    }
    function kh(n, s) {
        var o = s.value;
        if (o == null) {
            if (o = s.children,
            s = s.defaultValue,
            o != null) {
                if (s != null)
                    throw Error(r(92));
                if (Zn(o)) {
                    if (1 < o.length)
                        throw Error(r(93));
                    o = o[0]
                }
                s = o
            }
            s == null && (s = ""),
            o = s
        }
        n._wrapperState = {
            initialValue: Ce(o)
        }
    }
    function Eh(n, s) {
        var o = Ce(s.value)
          , c = Ce(s.defaultValue);
        o != null && (o = "" + o,
        o !== n.value && (n.value = o),
        s.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)),
        c != null && (n.defaultValue = "" + c)
    }
    function Ch(n) {
        var s = n.textContent;
        s === n._wrapperState.initialValue && s !== "" && s !== null && (n.value = s)
    }
    function Th(n) {
        switch (n) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function lu(n, s) {
        return n == null || n === "http://www.w3.org/1999/xhtml" ? Th(s) : n === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n
    }
    var ea, _h = (function(n) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, o, c, f) {
            MSApp.execUnsafeLocalFunction(function() {
                return n(s, o, c, f)
            })
        }
        : n
    }
    )(function(n, s) {
        if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in n)
            n.innerHTML = s;
        else {
            for (ea = ea || document.createElement("div"),
            ea.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>",
            s = ea.firstChild; n.firstChild; )
                n.removeChild(n.firstChild);
            for (; s.firstChild; )
                n.appendChild(s.firstChild)
        }
    });
    function Ei(n, s) {
        if (s) {
            var o = n.firstChild;
            if (o && o === n.lastChild && o.nodeType === 3) {
                o.nodeValue = s;
                return
            }
        }
        n.textContent = s
    }
    var Ci = {
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
    }
      , y1 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ci).forEach(function(n) {
        y1.forEach(function(s) {
            s = s + n.charAt(0).toUpperCase() + n.substring(1),
            Ci[s] = Ci[n]
        })
    });
    function Ph(n, s, o) {
        return s == null || typeof s == "boolean" || s === "" ? "" : o || typeof s != "number" || s === 0 || Ci.hasOwnProperty(n) && Ci[n] ? ("" + s).trim() : s + "px"
    }
    function Rh(n, s) {
        n = n.style;
        for (var o in s)
            if (s.hasOwnProperty(o)) {
                var c = o.indexOf("--") === 0
                  , f = Ph(o, s[o], c);
                o === "float" && (o = "cssFloat"),
                c ? n.setProperty(o, f) : n[o] = f
            }
    }
    var v1 = U({
        menuitem: !0
    }, {
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
    });
    function uu(n, s) {
        if (s) {
            if (v1[n] && (s.children != null || s.dangerouslySetInnerHTML != null))
                throw Error(r(137, n));
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null)
                    throw Error(r(60));
                if (typeof s.dangerouslySetInnerHTML != "object" || !("__html"in s.dangerouslySetInnerHTML))
                    throw Error(r(61))
            }
            if (s.style != null && typeof s.style != "object")
                throw Error(r(62))
        }
    }
    function cu(n, s) {
        if (n.indexOf("-") === -1)
            return typeof s.is == "string";
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
            return !0
        }
    }
    var du = null;
    function fu(n) {
        return n = n.target || n.srcElement || window,
        n.correspondingUseElement && (n = n.correspondingUseElement),
        n.nodeType === 3 ? n.parentNode : n
    }
    var hu = null
      , Ss = null
      , ks = null;
    function Ah(n) {
        if (n = Ki(n)) {
            if (typeof hu != "function")
                throw Error(r(280));
            var s = n.stateNode;
            s && (s = ka(s),
            hu(n.stateNode, n.type, s))
        }
    }
    function Nh(n) {
        Ss ? ks ? ks.push(n) : ks = [n] : Ss = n
    }
    function Oh() {
        if (Ss) {
            var n = Ss
              , s = ks;
            if (ks = Ss = null,
            Ah(n),
            s)
                for (n = 0; n < s.length; n++)
                    Ah(s[n])
        }
    }
    function jh(n, s) {
        return n(s)
    }
    function Mh() {}
    var pu = !1;
    function Lh(n, s, o) {
        if (pu)
            return n(s, o);
        pu = !0;
        try {
            return jh(n, s, o)
        } finally {
            pu = !1,
            (Ss !== null || ks !== null) && (Mh(),
            Oh())
        }
    }
    function Ti(n, s) {
        var o = n.stateNode;
        if (o === null)
            return null;
        var c = ka(o);
        if (c === null)
            return null;
        o = c[s];
        e: switch (s) {
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
            (c = !c.disabled) || (n = n.type,
            c = !(n === "button" || n === "input" || n === "select" || n === "textarea")),
            n = !c;
            break e;
        default:
            n = !1
        }
        if (n)
            return null;
        if (o && typeof o != "function")
            throw Error(r(231, s, typeof o));
        return o
    }
    var mu = !1;
    if (d)
        try {
            var _i = {};
            Object.defineProperty(_i, "passive", {
                get: function() {
                    mu = !0
                }
            }),
            window.addEventListener("test", _i, _i),
            window.removeEventListener("test", _i, _i)
        } catch {
            mu = !1
        }
    function x1(n, s, o, c, f, p, x, C, _) {
        var B = Array.prototype.slice.call(arguments, 3);
        try {
            s.apply(o, B)
        } catch (q) {
            this.onError(q)
        }
    }
    var Pi = !1
      , ta = null
      , na = !1
      , gu = null
      , w1 = {
        onError: function(n) {
            Pi = !0,
            ta = n
        }
    };
    function b1(n, s, o, c, f, p, x, C, _) {
        Pi = !1,
        ta = null,
        x1.apply(w1, arguments)
    }
    function S1(n, s, o, c, f, p, x, C, _) {
        if (b1.apply(this, arguments),
        Pi) {
            if (Pi) {
                var B = ta;
                Pi = !1,
                ta = null
            } else
                throw Error(r(198));
            na || (na = !0,
            gu = B)
        }
    }
    function Vr(n) {
        var s = n
          , o = n;
        if (n.alternate)
            for (; s.return; )
                s = s.return;
        else {
            n = s;
            do
                s = n,
                (s.flags & 4098) !== 0 && (o = s.return),
                n = s.return;
            while (n)
        }
        return s.tag === 3 ? o : null
    }
    function Dh(n) {
        if (n.tag === 13) {
            var s = n.memoizedState;
            if (s === null && (n = n.alternate,
            n !== null && (s = n.memoizedState)),
            s !== null)
                return s.dehydrated
        }
        return null
    }
    function Ih(n) {
        if (Vr(n) !== n)
            throw Error(r(188))
    }
    function k1(n) {
        var s = n.alternate;
        if (!s) {
            if (s = Vr(n),
            s === null)
                throw Error(r(188));
            return s !== n ? null : n
        }
        for (var o = n, c = s; ; ) {
            var f = o.return;
            if (f === null)
                break;
            var p = f.alternate;
            if (p === null) {
                if (c = f.return,
                c !== null) {
                    o = c;
                    continue
                }
                break
            }
            if (f.child === p.child) {
                for (p = f.child; p; ) {
                    if (p === o)
                        return Ih(f),
                        n;
                    if (p === c)
                        return Ih(f),
                        s;
                    p = p.sibling
                }
                throw Error(r(188))
            }
            if (o.return !== c.return)
                o = f,
                c = p;
            else {
                for (var x = !1, C = f.child; C; ) {
                    if (C === o) {
                        x = !0,
                        o = f,
                        c = p;
                        break
                    }
                    if (C === c) {
                        x = !0,
                        c = f,
                        o = p;
                        break
                    }
                    C = C.sibling
                }
                if (!x) {
                    for (C = p.child; C; ) {
                        if (C === o) {
                            x = !0,
                            o = p,
                            c = f;
                            break
                        }
                        if (C === c) {
                            x = !0,
                            c = p,
                            o = f;
                            break
                        }
                        C = C.sibling
                    }
                    if (!x)
                        throw Error(r(189))
                }
            }
            if (o.alternate !== c)
                throw Error(r(190))
        }
        if (o.tag !== 3)
            throw Error(r(188));
        return o.stateNode.current === o ? n : s
    }
    function Fh(n) {
        return n = k1(n),
        n !== null ? Vh(n) : null
    }
    function Vh(n) {
        if (n.tag === 5 || n.tag === 6)
            return n;
        for (n = n.child; n !== null; ) {
            var s = Vh(n);
            if (s !== null)
                return s;
            n = n.sibling
        }
        return null
    }
    var Bh = e.unstable_scheduleCallback
      , Uh = e.unstable_cancelCallback
      , E1 = e.unstable_shouldYield
      , C1 = e.unstable_requestPaint
      , Ye = e.unstable_now
      , T1 = e.unstable_getCurrentPriorityLevel
      , yu = e.unstable_ImmediatePriority
      , zh = e.unstable_UserBlockingPriority
      , ra = e.unstable_NormalPriority
      , _1 = e.unstable_LowPriority
      , $h = e.unstable_IdlePriority
      , sa = null
      , kn = null;
    function P1(n) {
        if (kn && typeof kn.onCommitFiberRoot == "function")
            try {
                kn.onCommitFiberRoot(sa, n, void 0, (n.current.flags & 128) === 128)
            } catch {}
    }
    var dn = Math.clz32 ? Math.clz32 : N1
      , R1 = Math.log
      , A1 = Math.LN2;
    function N1(n) {
        return n >>>= 0,
        n === 0 ? 32 : 31 - (R1(n) / A1 | 0) | 0
    }
    var ia = 64
      , oa = 4194304;
    function Ri(n) {
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
            return n
        }
    }
    function aa(n, s) {
        var o = n.pendingLanes;
        if (o === 0)
            return 0;
        var c = 0
          , f = n.suspendedLanes
          , p = n.pingedLanes
          , x = o & 268435455;
        if (x !== 0) {
            var C = x & ~f;
            C !== 0 ? c = Ri(C) : (p &= x,
            p !== 0 && (c = Ri(p)))
        } else
            x = o & ~f,
            x !== 0 ? c = Ri(x) : p !== 0 && (c = Ri(p));
        if (c === 0)
            return 0;
        if (s !== 0 && s !== c && (s & f) === 0 && (f = c & -c,
        p = s & -s,
        f >= p || f === 16 && (p & 4194240) !== 0))
            return s;
        if ((c & 4) !== 0 && (c |= o & 16),
        s = n.entangledLanes,
        s !== 0)
            for (n = n.entanglements,
            s &= c; 0 < s; )
                o = 31 - dn(s),
                f = 1 << o,
                c |= n[o],
                s &= ~f;
        return c
    }
    function O1(n, s) {
        switch (n) {
        case 1:
        case 2:
        case 4:
            return s + 250;
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
            return s + 5e3;
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
            return -1
        }
    }
    function j1(n, s) {
        for (var o = n.suspendedLanes, c = n.pingedLanes, f = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
            var x = 31 - dn(p)
              , C = 1 << x
              , _ = f[x];
            _ === -1 ? ((C & o) === 0 || (C & c) !== 0) && (f[x] = O1(C, s)) : _ <= s && (n.expiredLanes |= C),
            p &= ~C
        }
    }
    function vu(n) {
        return n = n.pendingLanes & -1073741825,
        n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    }
    function Hh() {
        var n = ia;
        return ia <<= 1,
        (ia & 4194240) === 0 && (ia = 64),
        n
    }
    function xu(n) {
        for (var s = [], o = 0; 31 > o; o++)
            s.push(n);
        return s
    }
    function Ai(n, s, o) {
        n.pendingLanes |= s,
        s !== 536870912 && (n.suspendedLanes = 0,
        n.pingedLanes = 0),
        n = n.eventTimes,
        s = 31 - dn(s),
        n[s] = o
    }
    function M1(n, s) {
        var o = n.pendingLanes & ~s;
        n.pendingLanes = s,
        n.suspendedLanes = 0,
        n.pingedLanes = 0,
        n.expiredLanes &= s,
        n.mutableReadLanes &= s,
        n.entangledLanes &= s,
        s = n.entanglements;
        var c = n.eventTimes;
        for (n = n.expirationTimes; 0 < o; ) {
            var f = 31 - dn(o)
              , p = 1 << f;
            s[f] = 0,
            c[f] = -1,
            n[f] = -1,
            o &= ~p
        }
    }
    function wu(n, s) {
        var o = n.entangledLanes |= s;
        for (n = n.entanglements; o; ) {
            var c = 31 - dn(o)
              , f = 1 << c;
            f & s | n[c] & s && (n[c] |= s),
            o &= ~f
        }
    }
    var Le = 0;
    function qh(n) {
        return n &= -n,
        1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Wh, bu, Kh, Qh, Gh, Su = !1, la = [], tr = null, nr = null, rr = null, Ni = new Map, Oi = new Map, sr = [], L1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Yh(n, s) {
        switch (n) {
        case "focusin":
        case "focusout":
            tr = null;
            break;
        case "dragenter":
        case "dragleave":
            nr = null;
            break;
        case "mouseover":
        case "mouseout":
            rr = null;
            break;
        case "pointerover":
        case "pointerout":
            Ni.delete(s.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Oi.delete(s.pointerId)
        }
    }
    function ji(n, s, o, c, f, p) {
        return n === null || n.nativeEvent !== p ? (n = {
            blockedOn: s,
            domEventName: o,
            eventSystemFlags: c,
            nativeEvent: p,
            targetContainers: [f]
        },
        s !== null && (s = Ki(s),
        s !== null && bu(s)),
        n) : (n.eventSystemFlags |= c,
        s = n.targetContainers,
        f !== null && s.indexOf(f) === -1 && s.push(f),
        n)
    }
    function D1(n, s, o, c, f) {
        switch (s) {
        case "focusin":
            return tr = ji(tr, n, s, o, c, f),
            !0;
        case "dragenter":
            return nr = ji(nr, n, s, o, c, f),
            !0;
        case "mouseover":
            return rr = ji(rr, n, s, o, c, f),
            !0;
        case "pointerover":
            var p = f.pointerId;
            return Ni.set(p, ji(Ni.get(p) || null, n, s, o, c, f)),
            !0;
        case "gotpointercapture":
            return p = f.pointerId,
            Oi.set(p, ji(Oi.get(p) || null, n, s, o, c, f)),
            !0
        }
        return !1
    }
    function Xh(n) {
        var s = Br(n.target);
        if (s !== null) {
            var o = Vr(s);
            if (o !== null) {
                if (s = o.tag,
                s === 13) {
                    if (s = Dh(o),
                    s !== null) {
                        n.blockedOn = s,
                        Gh(n.priority, function() {
                            Kh(o)
                        });
                        return
                    }
                } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        n.blockedOn = null
    }
    function ua(n) {
        if (n.blockedOn !== null)
            return !1;
        for (var s = n.targetContainers; 0 < s.length; ) {
            var o = Eu(n.domEventName, n.eventSystemFlags, s[0], n.nativeEvent);
            if (o === null) {
                o = n.nativeEvent;
                var c = new o.constructor(o.type,o);
                du = c,
                o.target.dispatchEvent(c),
                du = null
            } else
                return s = Ki(o),
                s !== null && bu(s),
                n.blockedOn = o,
                !1;
            s.shift()
        }
        return !0
    }
    function Jh(n, s, o) {
        ua(n) && o.delete(s)
    }
    function I1() {
        Su = !1,
        tr !== null && ua(tr) && (tr = null),
        nr !== null && ua(nr) && (nr = null),
        rr !== null && ua(rr) && (rr = null),
        Ni.forEach(Jh),
        Oi.forEach(Jh)
    }
    function Mi(n, s) {
        n.blockedOn === s && (n.blockedOn = null,
        Su || (Su = !0,
        e.unstable_scheduleCallback(e.unstable_NormalPriority, I1)))
    }
    function Li(n) {
        function s(f) {
            return Mi(f, n)
        }
        if (0 < la.length) {
            Mi(la[0], n);
            for (var o = 1; o < la.length; o++) {
                var c = la[o];
                c.blockedOn === n && (c.blockedOn = null)
            }
        }
        for (tr !== null && Mi(tr, n),
        nr !== null && Mi(nr, n),
        rr !== null && Mi(rr, n),
        Ni.forEach(s),
        Oi.forEach(s),
        o = 0; o < sr.length; o++)
            c = sr[o],
            c.blockedOn === n && (c.blockedOn = null);
        for (; 0 < sr.length && (o = sr[0],
        o.blockedOn === null); )
            Xh(o),
            o.blockedOn === null && sr.shift()
    }
    var Es = M.ReactCurrentBatchConfig
      , ca = !0;
    function F1(n, s, o, c) {
        var f = Le
          , p = Es.transition;
        Es.transition = null;
        try {
            Le = 1,
            ku(n, s, o, c)
        } finally {
            Le = f,
            Es.transition = p
        }
    }
    function V1(n, s, o, c) {
        var f = Le
          , p = Es.transition;
        Es.transition = null;
        try {
            Le = 4,
            ku(n, s, o, c)
        } finally {
            Le = f,
            Es.transition = p
        }
    }
    function ku(n, s, o, c) {
        if (ca) {
            var f = Eu(n, s, o, c);
            if (f === null)
                Uu(n, s, c, da, o),
                Yh(n, c);
            else if (D1(f, n, s, o, c))
                c.stopPropagation();
            else if (Yh(n, c),
            s & 4 && -1 < L1.indexOf(n)) {
                for (; f !== null; ) {
                    var p = Ki(f);
                    if (p !== null && Wh(p),
                    p = Eu(n, s, o, c),
                    p === null && Uu(n, s, c, da, o),
                    p === f)
                        break;
                    f = p
                }
                f !== null && c.stopPropagation()
            } else
                Uu(n, s, c, null, o)
        }
    }
    var da = null;
    function Eu(n, s, o, c) {
        if (da = null,
        n = fu(c),
        n = Br(n),
        n !== null)
            if (s = Vr(n),
            s === null)
                n = null;
            else if (o = s.tag,
            o === 13) {
                if (n = Dh(s),
                n !== null)
                    return n;
                n = null
            } else if (o === 3) {
                if (s.stateNode.current.memoizedState.isDehydrated)
                    return s.tag === 3 ? s.stateNode.containerInfo : null;
                n = null
            } else
                s !== n && (n = null);
        return da = n,
        null
    }
    function Zh(n) {
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
            switch (T1()) {
            case yu:
                return 1;
            case zh:
                return 4;
            case ra:
            case _1:
                return 16;
            case $h:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var ir = null
      , Cu = null
      , fa = null;
    function ep() {
        if (fa)
            return fa;
        var n, s = Cu, o = s.length, c, f = "value"in ir ? ir.value : ir.textContent, p = f.length;
        for (n = 0; n < o && s[n] === f[n]; n++)
            ;
        var x = o - n;
        for (c = 1; c <= x && s[o - c] === f[p - c]; c++)
            ;
        return fa = f.slice(n, 1 < c ? 1 - c : void 0)
    }
    function ha(n) {
        var s = n.keyCode;
        return "charCode"in n ? (n = n.charCode,
        n === 0 && s === 13 && (n = 13)) : n = s,
        n === 10 && (n = 13),
        32 <= n || n === 13 ? n : 0
    }
    function pa() {
        return !0
    }
    function tp() {
        return !1
    }
    function Ut(n) {
        function s(o, c, f, p, x) {
            this._reactName = o,
            this._targetInst = f,
            this.type = c,
            this.nativeEvent = p,
            this.target = x,
            this.currentTarget = null;
            for (var C in n)
                n.hasOwnProperty(C) && (o = n[C],
                this[C] = o ? o(p) : p[C]);
            return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? pa : tp,
            this.isPropagationStopped = tp,
            this
        }
        return U(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1),
                this.isDefaultPrevented = pa)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
                this.isPropagationStopped = pa)
            },
            persist: function() {},
            isPersistent: pa
        }),
        s
    }
    var Cs = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(n) {
            return n.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Tu = Ut(Cs), Di = U({}, Cs, {
        view: 0,
        detail: 0
    }), B1 = Ut(Di), _u, Pu, Ii, ma = U({}, Di, {
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
        getModifierState: Au,
        button: 0,
        buttons: 0,
        relatedTarget: function(n) {
            return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget
        },
        movementX: function(n) {
            return "movementX"in n ? n.movementX : (n !== Ii && (Ii && n.type === "mousemove" ? (_u = n.screenX - Ii.screenX,
            Pu = n.screenY - Ii.screenY) : Pu = _u = 0,
            Ii = n),
            _u)
        },
        movementY: function(n) {
            return "movementY"in n ? n.movementY : Pu
        }
    }), np = Ut(ma), U1 = U({}, ma, {
        dataTransfer: 0
    }), z1 = Ut(U1), $1 = U({}, Di, {
        relatedTarget: 0
    }), Ru = Ut($1), H1 = U({}, Cs, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), q1 = Ut(H1), W1 = U({}, Cs, {
        clipboardData: function(n) {
            return "clipboardData"in n ? n.clipboardData : window.clipboardData
        }
    }), K1 = Ut(W1), Q1 = U({}, Cs, {
        data: 0
    }), rp = Ut(Q1), G1 = {
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
    }, Y1 = {
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
    }, X1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function J1(n) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(n) : (n = X1[n]) ? !!s[n] : !1
    }
    function Au() {
        return J1
    }
    var Z1 = U({}, Di, {
        key: function(n) {
            if (n.key) {
                var s = G1[n.key] || n.key;
                if (s !== "Unidentified")
                    return s
            }
            return n.type === "keypress" ? (n = ha(n),
            n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Y1[n.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Au,
        charCode: function(n) {
            return n.type === "keypress" ? ha(n) : 0
        },
        keyCode: function(n) {
            return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
        },
        which: function(n) {
            return n.type === "keypress" ? ha(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
        }
    })
      , eb = Ut(Z1)
      , tb = U({}, ma, {
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
    })
      , sp = Ut(tb)
      , nb = U({}, Di, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Au
    })
      , rb = Ut(nb)
      , sb = U({}, Cs, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , ib = Ut(sb)
      , ob = U({}, ma, {
        deltaX: function(n) {
            return "deltaX"in n ? n.deltaX : "wheelDeltaX"in n ? -n.wheelDeltaX : 0
        },
        deltaY: function(n) {
            return "deltaY"in n ? n.deltaY : "wheelDeltaY"in n ? -n.wheelDeltaY : "wheelDelta"in n ? -n.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , ab = Ut(ob)
      , lb = [9, 13, 27, 32]
      , Nu = d && "CompositionEvent"in window
      , Fi = null;
    d && "documentMode"in document && (Fi = document.documentMode);
    var ub = d && "TextEvent"in window && !Fi
      , ip = d && (!Nu || Fi && 8 < Fi && 11 >= Fi)
      , op = " "
      , ap = !1;
    function lp(n, s) {
        switch (n) {
        case "keyup":
            return lb.indexOf(s.keyCode) !== -1;
        case "keydown":
            return s.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function up(n) {
        return n = n.detail,
        typeof n == "object" && "data"in n ? n.data : null
    }
    var Ts = !1;
    function cb(n, s) {
        switch (n) {
        case "compositionend":
            return up(s);
        case "keypress":
            return s.which !== 32 ? null : (ap = !0,
            op);
        case "textInput":
            return n = s.data,
            n === op && ap ? null : n;
        default:
            return null
        }
    }
    function db(n, s) {
        if (Ts)
            return n === "compositionend" || !Nu && lp(n, s) ? (n = ep(),
            fa = Cu = ir = null,
            Ts = !1,
            n) : null;
        switch (n) {
        case "paste":
            return null;
        case "keypress":
            if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                if (s.char && 1 < s.char.length)
                    return s.char;
                if (s.which)
                    return String.fromCharCode(s.which)
            }
            return null;
        case "compositionend":
            return ip && s.locale !== "ko" ? null : s.data;
        default:
            return null
        }
    }
    var fb = {
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
    function cp(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s === "input" ? !!fb[n.type] : s === "textarea"
    }
    function dp(n, s, o, c) {
        Nh(c),
        s = wa(s, "onChange"),
        0 < s.length && (o = new Tu("onChange","change",null,o,c),
        n.push({
            event: o,
            listeners: s
        }))
    }
    var Vi = null
      , Bi = null;
    function hb(n) {
        Rp(n, 0)
    }
    function ga(n) {
        var s = Ns(n);
        if (ct(s))
            return n
    }
    function pb(n, s) {
        if (n === "change")
            return s
    }
    var fp = !1;
    if (d) {
        var Ou;
        if (d) {
            var ju = "oninput"in document;
            if (!ju) {
                var hp = document.createElement("div");
                hp.setAttribute("oninput", "return;"),
                ju = typeof hp.oninput == "function"
            }
            Ou = ju
        } else
            Ou = !1;
        fp = Ou && (!document.documentMode || 9 < document.documentMode)
    }
    function pp() {
        Vi && (Vi.detachEvent("onpropertychange", mp),
        Bi = Vi = null)
    }
    function mp(n) {
        if (n.propertyName === "value" && ga(Bi)) {
            var s = [];
            dp(s, Bi, n, fu(n)),
            Lh(hb, s)
        }
    }
    function mb(n, s, o) {
        n === "focusin" ? (pp(),
        Vi = s,
        Bi = o,
        Vi.attachEvent("onpropertychange", mp)) : n === "focusout" && pp()
    }
    function gb(n) {
        if (n === "selectionchange" || n === "keyup" || n === "keydown")
            return ga(Bi)
    }
    function yb(n, s) {
        if (n === "click")
            return ga(s)
    }
    function vb(n, s) {
        if (n === "input" || n === "change")
            return ga(s)
    }
    function xb(n, s) {
        return n === s && (n !== 0 || 1 / n === 1 / s) || n !== n && s !== s
    }
    var fn = typeof Object.is == "function" ? Object.is : xb;
    function Ui(n, s) {
        if (fn(n, s))
            return !0;
        if (typeof n != "object" || n === null || typeof s != "object" || s === null)
            return !1;
        var o = Object.keys(n)
          , c = Object.keys(s);
        if (o.length !== c.length)
            return !1;
        for (c = 0; c < o.length; c++) {
            var f = o[c];
            if (!h.call(s, f) || !fn(n[f], s[f]))
                return !1
        }
        return !0
    }
    function gp(n) {
        for (; n && n.firstChild; )
            n = n.firstChild;
        return n
    }
    function yp(n, s) {
        var o = gp(n);
        n = 0;
        for (var c; o; ) {
            if (o.nodeType === 3) {
                if (c = n + o.textContent.length,
                n <= s && c >= s)
                    return {
                        node: o,
                        offset: s - n
                    };
                n = c
            }
            e: {
                for (; o; ) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = gp(o)
        }
    }
    function vp(n, s) {
        return n && s ? n === s ? !0 : n && n.nodeType === 3 ? !1 : s && s.nodeType === 3 ? vp(n, s.parentNode) : "contains"in n ? n.contains(s) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(s) & 16) : !1 : !1
    }
    function xp() {
        for (var n = window, s = ln(); s instanceof n.HTMLIFrameElement; ) {
            try {
                var o = typeof s.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o)
                n = s.contentWindow;
            else
                break;
            s = ln(n.document)
        }
        return s
    }
    function Mu(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s && (s === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || s === "textarea" || n.contentEditable === "true")
    }
    function wb(n) {
        var s = xp()
          , o = n.focusedElem
          , c = n.selectionRange;
        if (s !== o && o && o.ownerDocument && vp(o.ownerDocument.documentElement, o)) {
            if (c !== null && Mu(o)) {
                if (s = c.start,
                n = c.end,
                n === void 0 && (n = s),
                "selectionStart"in o)
                    o.selectionStart = s,
                    o.selectionEnd = Math.min(n, o.value.length);
                else if (n = (s = o.ownerDocument || document) && s.defaultView || window,
                n.getSelection) {
                    n = n.getSelection();
                    var f = o.textContent.length
                      , p = Math.min(c.start, f);
                    c = c.end === void 0 ? p : Math.min(c.end, f),
                    !n.extend && p > c && (f = c,
                    c = p,
                    p = f),
                    f = yp(o, p);
                    var x = yp(o, c);
                    f && x && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== x.node || n.focusOffset !== x.offset) && (s = s.createRange(),
                    s.setStart(f.node, f.offset),
                    n.removeAllRanges(),
                    p > c ? (n.addRange(s),
                    n.extend(x.node, x.offset)) : (s.setEnd(x.node, x.offset),
                    n.addRange(s)))
                }
            }
            for (s = [],
            n = o; n = n.parentNode; )
                n.nodeType === 1 && s.push({
                    element: n,
                    left: n.scrollLeft,
                    top: n.scrollTop
                });
            for (typeof o.focus == "function" && o.focus(),
            o = 0; o < s.length; o++)
                n = s[o],
                n.element.scrollLeft = n.left,
                n.element.scrollTop = n.top
        }
    }
    var bb = d && "documentMode"in document && 11 >= document.documentMode
      , _s = null
      , Lu = null
      , zi = null
      , Du = !1;
    function wp(n, s, o) {
        var c = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        Du || _s == null || _s !== ln(c) || (c = _s,
        "selectionStart"in c && Mu(c) ? c = {
            start: c.selectionStart,
            end: c.selectionEnd
        } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(),
        c = {
            anchorNode: c.anchorNode,
            anchorOffset: c.anchorOffset,
            focusNode: c.focusNode,
            focusOffset: c.focusOffset
        }),
        zi && Ui(zi, c) || (zi = c,
        c = wa(Lu, "onSelect"),
        0 < c.length && (s = new Tu("onSelect","select",null,s,o),
        n.push({
            event: s,
            listeners: c
        }),
        s.target = _s)))
    }
    function ya(n, s) {
        var o = {};
        return o[n.toLowerCase()] = s.toLowerCase(),
        o["Webkit" + n] = "webkit" + s,
        o["Moz" + n] = "moz" + s,
        o
    }
    var Ps = {
        animationend: ya("Animation", "AnimationEnd"),
        animationiteration: ya("Animation", "AnimationIteration"),
        animationstart: ya("Animation", "AnimationStart"),
        transitionend: ya("Transition", "TransitionEnd")
    }
      , Iu = {}
      , bp = {};
    d && (bp = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ps.animationend.animation,
    delete Ps.animationiteration.animation,
    delete Ps.animationstart.animation),
    "TransitionEvent"in window || delete Ps.transitionend.transition);
    function va(n) {
        if (Iu[n])
            return Iu[n];
        if (!Ps[n])
            return n;
        var s = Ps[n], o;
        for (o in s)
            if (s.hasOwnProperty(o) && o in bp)
                return Iu[n] = s[o];
        return n
    }
    var Sp = va("animationend")
      , kp = va("animationiteration")
      , Ep = va("animationstart")
      , Cp = va("transitionend")
      , Tp = new Map
      , _p = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function or(n, s) {
        Tp.set(n, s),
        l(s, [n])
    }
    for (var Fu = 0; Fu < _p.length; Fu++) {
        var Vu = _p[Fu]
          , Sb = Vu.toLowerCase()
          , kb = Vu[0].toUpperCase() + Vu.slice(1);
        or(Sb, "on" + kb)
    }
    or(Sp, "onAnimationEnd"),
    or(kp, "onAnimationIteration"),
    or(Ep, "onAnimationStart"),
    or("dblclick", "onDoubleClick"),
    or("focusin", "onFocus"),
    or("focusout", "onBlur"),
    or(Cp, "onTransitionEnd"),
    u("onMouseEnter", ["mouseout", "mouseover"]),
    u("onMouseLeave", ["mouseout", "mouseover"]),
    u("onPointerEnter", ["pointerout", "pointerover"]),
    u("onPointerLeave", ["pointerout", "pointerover"]),
    l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var $i = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Eb = new Set("cancel close invalid load scroll toggle".split(" ").concat($i));
    function Pp(n, s, o) {
        var c = n.type || "unknown-event";
        n.currentTarget = o,
        S1(c, s, void 0, n),
        n.currentTarget = null
    }
    function Rp(n, s) {
        s = (s & 4) !== 0;
        for (var o = 0; o < n.length; o++) {
            var c = n[o]
              , f = c.event;
            c = c.listeners;
            e: {
                var p = void 0;
                if (s)
                    for (var x = c.length - 1; 0 <= x; x--) {
                        var C = c[x]
                          , _ = C.instance
                          , B = C.currentTarget;
                        if (C = C.listener,
                        _ !== p && f.isPropagationStopped())
                            break e;
                        Pp(f, C, B),
                        p = _
                    }
                else
                    for (x = 0; x < c.length; x++) {
                        if (C = c[x],
                        _ = C.instance,
                        B = C.currentTarget,
                        C = C.listener,
                        _ !== p && f.isPropagationStopped())
                            break e;
                        Pp(f, C, B),
                        p = _
                    }
            }
        }
        if (na)
            throw n = gu,
            na = !1,
            gu = null,
            n
    }
    function Ve(n, s) {
        var o = s[Ku];
        o === void 0 && (o = s[Ku] = new Set);
        var c = n + "__bubble";
        o.has(c) || (Ap(s, n, 2, !1),
        o.add(c))
    }
    function Bu(n, s, o) {
        var c = 0;
        s && (c |= 4),
        Ap(o, n, c, s)
    }
    var xa = "_reactListening" + Math.random().toString(36).slice(2);
    function Hi(n) {
        if (!n[xa]) {
            n[xa] = !0,
            i.forEach(function(o) {
                o !== "selectionchange" && (Eb.has(o) || Bu(o, !1, n),
                Bu(o, !0, n))
            });
            var s = n.nodeType === 9 ? n : n.ownerDocument;
            s === null || s[xa] || (s[xa] = !0,
            Bu("selectionchange", !1, s))
        }
    }
    function Ap(n, s, o, c) {
        switch (Zh(s)) {
        case 1:
            var f = F1;
            break;
        case 4:
            f = V1;
            break;
        default:
            f = ku
        }
        o = f.bind(null, s, o, n),
        f = void 0,
        !mu || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (f = !0),
        c ? f !== void 0 ? n.addEventListener(s, o, {
            capture: !0,
            passive: f
        }) : n.addEventListener(s, o, !0) : f !== void 0 ? n.addEventListener(s, o, {
            passive: f
        }) : n.addEventListener(s, o, !1)
    }
    function Uu(n, s, o, c, f) {
        var p = c;
        if ((s & 1) === 0 && (s & 2) === 0 && c !== null)
            e: for (; ; ) {
                if (c === null)
                    return;
                var x = c.tag;
                if (x === 3 || x === 4) {
                    var C = c.stateNode.containerInfo;
                    if (C === f || C.nodeType === 8 && C.parentNode === f)
                        break;
                    if (x === 4)
                        for (x = c.return; x !== null; ) {
                            var _ = x.tag;
                            if ((_ === 3 || _ === 4) && (_ = x.stateNode.containerInfo,
                            _ === f || _.nodeType === 8 && _.parentNode === f))
                                return;
                            x = x.return
                        }
                    for (; C !== null; ) {
                        if (x = Br(C),
                        x === null)
                            return;
                        if (_ = x.tag,
                        _ === 5 || _ === 6) {
                            c = p = x;
                            continue e
                        }
                        C = C.parentNode
                    }
                }
                c = c.return
            }
        Lh(function() {
            var B = p
              , q = fu(o)
              , W = [];
            e: {
                var H = Tp.get(n);
                if (H !== void 0) {
                    var Y = Tu
                      , ne = n;
                    switch (n) {
                    case "keypress":
                        if (ha(o) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        Y = eb;
                        break;
                    case "focusin":
                        ne = "focus",
                        Y = Ru;
                        break;
                    case "focusout":
                        ne = "blur",
                        Y = Ru;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        Y = Ru;
                        break;
                    case "click":
                        if (o.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        Y = np;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        Y = z1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        Y = rb;
                        break;
                    case Sp:
                    case kp:
                    case Ep:
                        Y = q1;
                        break;
                    case Cp:
                        Y = ib;
                        break;
                    case "scroll":
                        Y = B1;
                        break;
                    case "wheel":
                        Y = ab;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        Y = K1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        Y = sp
                    }
                    var ie = (s & 4) !== 0
                      , Xe = !ie && n === "scroll"
                      , D = ie ? H !== null ? H + "Capture" : null : H;
                    ie = [];
                    for (var N = B, I; N !== null; ) {
                        I = N;
                        var K = I.stateNode;
                        if (I.tag === 5 && K !== null && (I = K,
                        D !== null && (K = Ti(N, D),
                        K != null && ie.push(qi(N, K, I)))),
                        Xe)
                            break;
                        N = N.return
                    }
                    0 < ie.length && (H = new Y(H,ne,null,o,q),
                    W.push({
                        event: H,
                        listeners: ie
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if (H = n === "mouseover" || n === "pointerover",
                    Y = n === "mouseout" || n === "pointerout",
                    H && o !== du && (ne = o.relatedTarget || o.fromElement) && (Br(ne) || ne[Dn]))
                        break e;
                    if ((Y || H) && (H = q.window === q ? q : (H = q.ownerDocument) ? H.defaultView || H.parentWindow : window,
                    Y ? (ne = o.relatedTarget || o.toElement,
                    Y = B,
                    ne = ne ? Br(ne) : null,
                    ne !== null && (Xe = Vr(ne),
                    ne !== Xe || ne.tag !== 5 && ne.tag !== 6) && (ne = null)) : (Y = null,
                    ne = B),
                    Y !== ne)) {
                        if (ie = np,
                        K = "onMouseLeave",
                        D = "onMouseEnter",
                        N = "mouse",
                        (n === "pointerout" || n === "pointerover") && (ie = sp,
                        K = "onPointerLeave",
                        D = "onPointerEnter",
                        N = "pointer"),
                        Xe = Y == null ? H : Ns(Y),
                        I = ne == null ? H : Ns(ne),
                        H = new ie(K,N + "leave",Y,o,q),
                        H.target = Xe,
                        H.relatedTarget = I,
                        K = null,
                        Br(q) === B && (ie = new ie(D,N + "enter",ne,o,q),
                        ie.target = I,
                        ie.relatedTarget = Xe,
                        K = ie),
                        Xe = K,
                        Y && ne)
                            t: {
                                for (ie = Y,
                                D = ne,
                                N = 0,
                                I = ie; I; I = Rs(I))
                                    N++;
                                for (I = 0,
                                K = D; K; K = Rs(K))
                                    I++;
                                for (; 0 < N - I; )
                                    ie = Rs(ie),
                                    N--;
                                for (; 0 < I - N; )
                                    D = Rs(D),
                                    I--;
                                for (; N--; ) {
                                    if (ie === D || D !== null && ie === D.alternate)
                                        break t;
                                    ie = Rs(ie),
                                    D = Rs(D)
                                }
                                ie = null
                            }
                        else
                            ie = null;
                        Y !== null && Np(W, H, Y, ie, !1),
                        ne !== null && Xe !== null && Np(W, Xe, ne, ie, !0)
                    }
                }
                e: {
                    if (H = B ? Ns(B) : window,
                    Y = H.nodeName && H.nodeName.toLowerCase(),
                    Y === "select" || Y === "input" && H.type === "file")
                        var ae = pb;
                    else if (cp(H))
                        if (fp)
                            ae = vb;
                        else {
                            ae = gb;
                            var ce = mb
                        }
                    else
                        (Y = H.nodeName) && Y.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (ae = yb);
                    if (ae && (ae = ae(n, B))) {
                        dp(W, ae, o, q);
                        break e
                    }
                    ce && ce(n, H, B),
                    n === "focusout" && (ce = H._wrapperState) && ce.controlled && H.type === "number" && cn(H, "number", H.value)
                }
                switch (ce = B ? Ns(B) : window,
                n) {
                case "focusin":
                    (cp(ce) || ce.contentEditable === "true") && (_s = ce,
                    Lu = B,
                    zi = null);
                    break;
                case "focusout":
                    zi = Lu = _s = null;
                    break;
                case "mousedown":
                    Du = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Du = !1,
                    wp(W, o, q);
                    break;
                case "selectionchange":
                    if (bb)
                        break;
                case "keydown":
                case "keyup":
                    wp(W, o, q)
                }
                var de;
                if (Nu)
                    e: {
                        switch (n) {
                        case "compositionstart":
                            var xe = "onCompositionStart";
                            break e;
                        case "compositionend":
                            xe = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            xe = "onCompositionUpdate";
                            break e
                        }
                        xe = void 0
                    }
                else
                    Ts ? lp(n, o) && (xe = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (xe = "onCompositionStart");
                xe && (ip && o.locale !== "ko" && (Ts || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && Ts && (de = ep()) : (ir = q,
                Cu = "value"in ir ? ir.value : ir.textContent,
                Ts = !0)),
                ce = wa(B, xe),
                0 < ce.length && (xe = new rp(xe,n,null,o,q),
                W.push({
                    event: xe,
                    listeners: ce
                }),
                de ? xe.data = de : (de = up(o),
                de !== null && (xe.data = de)))),
                (de = ub ? cb(n, o) : db(n, o)) && (B = wa(B, "onBeforeInput"),
                0 < B.length && (q = new rp("onBeforeInput","beforeinput",null,o,q),
                W.push({
                    event: q,
                    listeners: B
                }),
                q.data = de))
            }
            Rp(W, s)
        })
    }
    function qi(n, s, o) {
        return {
            instance: n,
            listener: s,
            currentTarget: o
        }
    }
    function wa(n, s) {
        for (var o = s + "Capture", c = []; n !== null; ) {
            var f = n
              , p = f.stateNode;
            f.tag === 5 && p !== null && (f = p,
            p = Ti(n, o),
            p != null && c.unshift(qi(n, p, f)),
            p = Ti(n, s),
            p != null && c.push(qi(n, p, f))),
            n = n.return
        }
        return c
    }
    function Rs(n) {
        if (n === null)
            return null;
        do
            n = n.return;
        while (n && n.tag !== 5);
        return n || null
    }
    function Np(n, s, o, c, f) {
        for (var p = s._reactName, x = []; o !== null && o !== c; ) {
            var C = o
              , _ = C.alternate
              , B = C.stateNode;
            if (_ !== null && _ === c)
                break;
            C.tag === 5 && B !== null && (C = B,
            f ? (_ = Ti(o, p),
            _ != null && x.unshift(qi(o, _, C))) : f || (_ = Ti(o, p),
            _ != null && x.push(qi(o, _, C)))),
            o = o.return
        }
        x.length !== 0 && n.push({
            event: s,
            listeners: x
        })
    }
    var Cb = /\r\n?/g
      , Tb = /\u0000|\uFFFD/g;
    function Op(n) {
        return (typeof n == "string" ? n : "" + n).replace(Cb, `
`).replace(Tb, "")
    }
    function ba(n, s, o) {
        if (s = Op(s),
        Op(n) !== s && o)
            throw Error(r(425))
    }
    function Sa() {}
    var zu = null
      , $u = null;
    function Hu(n, s) {
        return n === "textarea" || n === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var qu = typeof setTimeout == "function" ? setTimeout : void 0
      , _b = typeof clearTimeout == "function" ? clearTimeout : void 0
      , jp = typeof Promise == "function" ? Promise : void 0
      , Pb = typeof queueMicrotask == "function" ? queueMicrotask : typeof jp < "u" ? function(n) {
        return jp.resolve(null).then(n).catch(Rb)
    }
    : qu;
    function Rb(n) {
        setTimeout(function() {
            throw n
        })
    }
    function Wu(n, s) {
        var o = s
          , c = 0;
        do {
            var f = o.nextSibling;
            if (n.removeChild(o),
            f && f.nodeType === 8)
                if (o = f.data,
                o === "/$") {
                    if (c === 0) {
                        n.removeChild(f),
                        Li(s);
                        return
                    }
                    c--
                } else
                    o !== "$" && o !== "$?" && o !== "$!" || c++;
            o = f
        } while (o);
        Li(s)
    }
    function ar(n) {
        for (; n != null; n = n.nextSibling) {
            var s = n.nodeType;
            if (s === 1 || s === 3)
                break;
            if (s === 8) {
                if (s = n.data,
                s === "$" || s === "$!" || s === "$?")
                    break;
                if (s === "/$")
                    return null
            }
        }
        return n
    }
    function Mp(n) {
        n = n.previousSibling;
        for (var s = 0; n; ) {
            if (n.nodeType === 8) {
                var o = n.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (s === 0)
                        return n;
                    s--
                } else
                    o === "/$" && s++
            }
            n = n.previousSibling
        }
        return null
    }
    var As = Math.random().toString(36).slice(2)
      , En = "__reactFiber$" + As
      , Wi = "__reactProps$" + As
      , Dn = "__reactContainer$" + As
      , Ku = "__reactEvents$" + As
      , Ab = "__reactListeners$" + As
      , Nb = "__reactHandles$" + As;
    function Br(n) {
        var s = n[En];
        if (s)
            return s;
        for (var o = n.parentNode; o; ) {
            if (s = o[Dn] || o[En]) {
                if (o = s.alternate,
                s.child !== null || o !== null && o.child !== null)
                    for (n = Mp(n); n !== null; ) {
                        if (o = n[En])
                            return o;
                        n = Mp(n)
                    }
                return s
            }
            n = o,
            o = n.parentNode
        }
        return null
    }
    function Ki(n) {
        return n = n[En] || n[Dn],
        !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n
    }
    function Ns(n) {
        if (n.tag === 5 || n.tag === 6)
            return n.stateNode;
        throw Error(r(33))
    }
    function ka(n) {
        return n[Wi] || null
    }
    var Qu = []
      , Os = -1;
    function lr(n) {
        return {
            current: n
        }
    }
    function Be(n) {
        0 > Os || (n.current = Qu[Os],
        Qu[Os] = null,
        Os--)
    }
    function Fe(n, s) {
        Os++,
        Qu[Os] = n.current,
        n.current = s
    }
    var ur = {}
      , xt = lr(ur)
      , Nt = lr(!1)
      , Ur = ur;
    function js(n, s) {
        var o = n.type.contextTypes;
        if (!o)
            return ur;
        var c = n.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === s)
            return c.__reactInternalMemoizedMaskedChildContext;
        var f = {}, p;
        for (p in o)
            f[p] = s[p];
        return c && (n = n.stateNode,
        n.__reactInternalMemoizedUnmaskedChildContext = s,
        n.__reactInternalMemoizedMaskedChildContext = f),
        f
    }
    function Ot(n) {
        return n = n.childContextTypes,
        n != null
    }
    function Ea() {
        Be(Nt),
        Be(xt)
    }
    function Lp(n, s, o) {
        if (xt.current !== ur)
            throw Error(r(168));
        Fe(xt, s),
        Fe(Nt, o)
    }
    function Dp(n, s, o) {
        var c = n.stateNode;
        if (s = s.childContextTypes,
        typeof c.getChildContext != "function")
            return o;
        c = c.getChildContext();
        for (var f in c)
            if (!(f in s))
                throw Error(r(108, Se(n) || "Unknown", f));
        return U({}, o, c)
    }
    function Ca(n) {
        return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ur,
        Ur = xt.current,
        Fe(xt, n),
        Fe(Nt, Nt.current),
        !0
    }
    function Ip(n, s, o) {
        var c = n.stateNode;
        if (!c)
            throw Error(r(169));
        o ? (n = Dp(n, s, Ur),
        c.__reactInternalMemoizedMergedChildContext = n,
        Be(Nt),
        Be(xt),
        Fe(xt, n)) : Be(Nt),
        Fe(Nt, o)
    }
    var In = null
      , Ta = !1
      , Gu = !1;
    function Fp(n) {
        In === null ? In = [n] : In.push(n)
    }
    function Ob(n) {
        Ta = !0,
        Fp(n)
    }
    function cr() {
        if (!Gu && In !== null) {
            Gu = !0;
            var n = 0
              , s = Le;
            try {
                var o = In;
                for (Le = 1; n < o.length; n++) {
                    var c = o[n];
                    do
                        c = c(!0);
                    while (c !== null)
                }
                In = null,
                Ta = !1
            } catch (f) {
                throw In !== null && (In = In.slice(n + 1)),
                Bh(yu, cr),
                f
            } finally {
                Le = s,
                Gu = !1
            }
        }
        return null
    }
    var Ms = []
      , Ls = 0
      , _a = null
      , Pa = 0
      , Yt = []
      , Xt = 0
      , zr = null
      , Fn = 1
      , Vn = "";
    function $r(n, s) {
        Ms[Ls++] = Pa,
        Ms[Ls++] = _a,
        _a = n,
        Pa = s
    }
    function Vp(n, s, o) {
        Yt[Xt++] = Fn,
        Yt[Xt++] = Vn,
        Yt[Xt++] = zr,
        zr = n;
        var c = Fn;
        n = Vn;
        var f = 32 - dn(c) - 1;
        c &= ~(1 << f),
        o += 1;
        var p = 32 - dn(s) + f;
        if (30 < p) {
            var x = f - f % 5;
            p = (c & (1 << x) - 1).toString(32),
            c >>= x,
            f -= x,
            Fn = 1 << 32 - dn(s) + f | o << f | c,
            Vn = p + n
        } else
            Fn = 1 << p | o << f | c,
            Vn = n
    }
    function Yu(n) {
        n.return !== null && ($r(n, 1),
        Vp(n, 1, 0))
    }
    function Xu(n) {
        for (; n === _a; )
            _a = Ms[--Ls],
            Ms[Ls] = null,
            Pa = Ms[--Ls],
            Ms[Ls] = null;
        for (; n === zr; )
            zr = Yt[--Xt],
            Yt[Xt] = null,
            Vn = Yt[--Xt],
            Yt[Xt] = null,
            Fn = Yt[--Xt],
            Yt[Xt] = null
    }
    var zt = null
      , $t = null
      , $e = !1
      , hn = null;
    function Bp(n, s) {
        var o = tn(5, null, null, 0);
        o.elementType = "DELETED",
        o.stateNode = s,
        o.return = n,
        s = n.deletions,
        s === null ? (n.deletions = [o],
        n.flags |= 16) : s.push(o)
    }
    function Up(n, s) {
        switch (n.tag) {
        case 5:
            var o = n.type;
            return s = s.nodeType !== 1 || o.toLowerCase() !== s.nodeName.toLowerCase() ? null : s,
            s !== null ? (n.stateNode = s,
            zt = n,
            $t = ar(s.firstChild),
            !0) : !1;
        case 6:
            return s = n.pendingProps === "" || s.nodeType !== 3 ? null : s,
            s !== null ? (n.stateNode = s,
            zt = n,
            $t = null,
            !0) : !1;
        case 13:
            return s = s.nodeType !== 8 ? null : s,
            s !== null ? (o = zr !== null ? {
                id: Fn,
                overflow: Vn
            } : null,
            n.memoizedState = {
                dehydrated: s,
                treeContext: o,
                retryLane: 1073741824
            },
            o = tn(18, null, null, 0),
            o.stateNode = s,
            o.return = n,
            n.child = o,
            zt = n,
            $t = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function Ju(n) {
        return (n.mode & 1) !== 0 && (n.flags & 128) === 0
    }
    function Zu(n) {
        if ($e) {
            var s = $t;
            if (s) {
                var o = s;
                if (!Up(n, s)) {
                    if (Ju(n))
                        throw Error(r(418));
                    s = ar(o.nextSibling);
                    var c = zt;
                    s && Up(n, s) ? Bp(c, o) : (n.flags = n.flags & -4097 | 2,
                    $e = !1,
                    zt = n)
                }
            } else {
                if (Ju(n))
                    throw Error(r(418));
                n.flags = n.flags & -4097 | 2,
                $e = !1,
                zt = n
            }
        }
    }
    function zp(n) {
        for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
            n = n.return;
        zt = n
    }
    function Ra(n) {
        if (n !== zt)
            return !1;
        if (!$e)
            return zp(n),
            $e = !0,
            !1;
        var s;
        if ((s = n.tag !== 3) && !(s = n.tag !== 5) && (s = n.type,
        s = s !== "head" && s !== "body" && !Hu(n.type, n.memoizedProps)),
        s && (s = $t)) {
            if (Ju(n))
                throw $p(),
                Error(r(418));
            for (; s; )
                Bp(n, s),
                s = ar(s.nextSibling)
        }
        if (zp(n),
        n.tag === 13) {
            if (n = n.memoizedState,
            n = n !== null ? n.dehydrated : null,
            !n)
                throw Error(r(317));
            e: {
                for (n = n.nextSibling,
                s = 0; n; ) {
                    if (n.nodeType === 8) {
                        var o = n.data;
                        if (o === "/$") {
                            if (s === 0) {
                                $t = ar(n.nextSibling);
                                break e
                            }
                            s--
                        } else
                            o !== "$" && o !== "$!" && o !== "$?" || s++
                    }
                    n = n.nextSibling
                }
                $t = null
            }
        } else
            $t = zt ? ar(n.stateNode.nextSibling) : null;
        return !0
    }
    function $p() {
        for (var n = $t; n; )
            n = ar(n.nextSibling)
    }
    function Ds() {
        $t = zt = null,
        $e = !1
    }
    function ec(n) {
        hn === null ? hn = [n] : hn.push(n)
    }
    var jb = M.ReactCurrentBatchConfig;
    function Qi(n, s, o) {
        if (n = o.ref,
        n !== null && typeof n != "function" && typeof n != "object") {
            if (o._owner) {
                if (o = o._owner,
                o) {
                    if (o.tag !== 1)
                        throw Error(r(309));
                    var c = o.stateNode
                }
                if (!c)
                    throw Error(r(147, n));
                var f = c
                  , p = "" + n;
                return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === p ? s.ref : (s = function(x) {
                    var C = f.refs;
                    x === null ? delete C[p] : C[p] = x
                }
                ,
                s._stringRef = p,
                s)
            }
            if (typeof n != "string")
                throw Error(r(284));
            if (!o._owner)
                throw Error(r(290, n))
        }
        return n
    }
    function Aa(n, s) {
        throw n = Object.prototype.toString.call(s),
        Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : n))
    }
    function Hp(n) {
        var s = n._init;
        return s(n._payload)
    }
    function qp(n) {
        function s(D, N) {
            if (n) {
                var I = D.deletions;
                I === null ? (D.deletions = [N],
                D.flags |= 16) : I.push(N)
            }
        }
        function o(D, N) {
            if (!n)
                return null;
            for (; N !== null; )
                s(D, N),
                N = N.sibling;
            return null
        }
        function c(D, N) {
            for (D = new Map; N !== null; )
                N.key !== null ? D.set(N.key, N) : D.set(N.index, N),
                N = N.sibling;
            return D
        }
        function f(D, N) {
            return D = vr(D, N),
            D.index = 0,
            D.sibling = null,
            D
        }
        function p(D, N, I) {
            return D.index = I,
            n ? (I = D.alternate,
            I !== null ? (I = I.index,
            I < N ? (D.flags |= 2,
            N) : I) : (D.flags |= 2,
            N)) : (D.flags |= 1048576,
            N)
        }
        function x(D) {
            return n && D.alternate === null && (D.flags |= 2),
            D
        }
        function C(D, N, I, K) {
            return N === null || N.tag !== 6 ? (N = qc(I, D.mode, K),
            N.return = D,
            N) : (N = f(N, I),
            N.return = D,
            N)
        }
        function _(D, N, I, K) {
            var ae = I.type;
            return ae === J ? q(D, N, I.props.children, K, I.key) : N !== null && (N.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === Ne && Hp(ae) === N.type) ? (K = f(N, I.props),
            K.ref = Qi(D, N, I),
            K.return = D,
            K) : (K = el(I.type, I.key, I.props, null, D.mode, K),
            K.ref = Qi(D, N, I),
            K.return = D,
            K)
        }
        function B(D, N, I, K) {
            return N === null || N.tag !== 4 || N.stateNode.containerInfo !== I.containerInfo || N.stateNode.implementation !== I.implementation ? (N = Wc(I, D.mode, K),
            N.return = D,
            N) : (N = f(N, I.children || []),
            N.return = D,
            N)
        }
        function q(D, N, I, K, ae) {
            return N === null || N.tag !== 7 ? (N = Xr(I, D.mode, K, ae),
            N.return = D,
            N) : (N = f(N, I),
            N.return = D,
            N)
        }
        function W(D, N, I) {
            if (typeof N == "string" && N !== "" || typeof N == "number")
                return N = qc("" + N, D.mode, I),
                N.return = D,
                N;
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                case F:
                    return I = el(N.type, N.key, N.props, null, D.mode, I),
                    I.ref = Qi(D, null, N),
                    I.return = D,
                    I;
                case $:
                    return N = Wc(N, D.mode, I),
                    N.return = D,
                    N;
                case Ne:
                    var K = N._init;
                    return W(D, K(N._payload), I)
                }
                if (Zn(N) || oe(N))
                    return N = Xr(N, D.mode, I, null),
                    N.return = D,
                    N;
                Aa(D, N)
            }
            return null
        }
        function H(D, N, I, K) {
            var ae = N !== null ? N.key : null;
            if (typeof I == "string" && I !== "" || typeof I == "number")
                return ae !== null ? null : C(D, N, "" + I, K);
            if (typeof I == "object" && I !== null) {
                switch (I.$$typeof) {
                case F:
                    return I.key === ae ? _(D, N, I, K) : null;
                case $:
                    return I.key === ae ? B(D, N, I, K) : null;
                case Ne:
                    return ae = I._init,
                    H(D, N, ae(I._payload), K)
                }
                if (Zn(I) || oe(I))
                    return ae !== null ? null : q(D, N, I, K, null);
                Aa(D, I)
            }
            return null
        }
        function Y(D, N, I, K, ae) {
            if (typeof K == "string" && K !== "" || typeof K == "number")
                return D = D.get(I) || null,
                C(N, D, "" + K, ae);
            if (typeof K == "object" && K !== null) {
                switch (K.$$typeof) {
                case F:
                    return D = D.get(K.key === null ? I : K.key) || null,
                    _(N, D, K, ae);
                case $:
                    return D = D.get(K.key === null ? I : K.key) || null,
                    B(N, D, K, ae);
                case Ne:
                    var ce = K._init;
                    return Y(D, N, I, ce(K._payload), ae)
                }
                if (Zn(K) || oe(K))
                    return D = D.get(I) || null,
                    q(N, D, K, ae, null);
                Aa(N, K)
            }
            return null
        }
        function ne(D, N, I, K) {
            for (var ae = null, ce = null, de = N, xe = N = 0, lt = null; de !== null && xe < I.length; xe++) {
                de.index > xe ? (lt = de,
                de = null) : lt = de.sibling;
                var je = H(D, de, I[xe], K);
                if (je === null) {
                    de === null && (de = lt);
                    break
                }
                n && de && je.alternate === null && s(D, de),
                N = p(je, N, xe),
                ce === null ? ae = je : ce.sibling = je,
                ce = je,
                de = lt
            }
            if (xe === I.length)
                return o(D, de),
                $e && $r(D, xe),
                ae;
            if (de === null) {
                for (; xe < I.length; xe++)
                    de = W(D, I[xe], K),
                    de !== null && (N = p(de, N, xe),
                    ce === null ? ae = de : ce.sibling = de,
                    ce = de);
                return $e && $r(D, xe),
                ae
            }
            for (de = c(D, de); xe < I.length; xe++)
                lt = Y(de, D, xe, I[xe], K),
                lt !== null && (n && lt.alternate !== null && de.delete(lt.key === null ? xe : lt.key),
                N = p(lt, N, xe),
                ce === null ? ae = lt : ce.sibling = lt,
                ce = lt);
            return n && de.forEach(function(xr) {
                return s(D, xr)
            }),
            $e && $r(D, xe),
            ae
        }
        function ie(D, N, I, K) {
            var ae = oe(I);
            if (typeof ae != "function")
                throw Error(r(150));
            if (I = ae.call(I),
            I == null)
                throw Error(r(151));
            for (var ce = ae = null, de = N, xe = N = 0, lt = null, je = I.next(); de !== null && !je.done; xe++,
            je = I.next()) {
                de.index > xe ? (lt = de,
                de = null) : lt = de.sibling;
                var xr = H(D, de, je.value, K);
                if (xr === null) {
                    de === null && (de = lt);
                    break
                }
                n && de && xr.alternate === null && s(D, de),
                N = p(xr, N, xe),
                ce === null ? ae = xr : ce.sibling = xr,
                ce = xr,
                de = lt
            }
            if (je.done)
                return o(D, de),
                $e && $r(D, xe),
                ae;
            if (de === null) {
                for (; !je.done; xe++,
                je = I.next())
                    je = W(D, je.value, K),
                    je !== null && (N = p(je, N, xe),
                    ce === null ? ae = je : ce.sibling = je,
                    ce = je);
                return $e && $r(D, xe),
                ae
            }
            for (de = c(D, de); !je.done; xe++,
            je = I.next())
                je = Y(de, D, xe, je.value, K),
                je !== null && (n && je.alternate !== null && de.delete(je.key === null ? xe : je.key),
                N = p(je, N, xe),
                ce === null ? ae = je : ce.sibling = je,
                ce = je);
            return n && de.forEach(function(f2) {
                return s(D, f2)
            }),
            $e && $r(D, xe),
            ae
        }
        function Xe(D, N, I, K) {
            if (typeof I == "object" && I !== null && I.type === J && I.key === null && (I = I.props.children),
            typeof I == "object" && I !== null) {
                switch (I.$$typeof) {
                case F:
                    e: {
                        for (var ae = I.key, ce = N; ce !== null; ) {
                            if (ce.key === ae) {
                                if (ae = I.type,
                                ae === J) {
                                    if (ce.tag === 7) {
                                        o(D, ce.sibling),
                                        N = f(ce, I.props.children),
                                        N.return = D,
                                        D = N;
                                        break e
                                    }
                                } else if (ce.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === Ne && Hp(ae) === ce.type) {
                                    o(D, ce.sibling),
                                    N = f(ce, I.props),
                                    N.ref = Qi(D, ce, I),
                                    N.return = D,
                                    D = N;
                                    break e
                                }
                                o(D, ce);
                                break
                            } else
                                s(D, ce);
                            ce = ce.sibling
                        }
                        I.type === J ? (N = Xr(I.props.children, D.mode, K, I.key),
                        N.return = D,
                        D = N) : (K = el(I.type, I.key, I.props, null, D.mode, K),
                        K.ref = Qi(D, N, I),
                        K.return = D,
                        D = K)
                    }
                    return x(D);
                case $:
                    e: {
                        for (ce = I.key; N !== null; ) {
                            if (N.key === ce)
                                if (N.tag === 4 && N.stateNode.containerInfo === I.containerInfo && N.stateNode.implementation === I.implementation) {
                                    o(D, N.sibling),
                                    N = f(N, I.children || []),
                                    N.return = D,
                                    D = N;
                                    break e
                                } else {
                                    o(D, N);
                                    break
                                }
                            else
                                s(D, N);
                            N = N.sibling
                        }
                        N = Wc(I, D.mode, K),
                        N.return = D,
                        D = N
                    }
                    return x(D);
                case Ne:
                    return ce = I._init,
                    Xe(D, N, ce(I._payload), K)
                }
                if (Zn(I))
                    return ne(D, N, I, K);
                if (oe(I))
                    return ie(D, N, I, K);
                Aa(D, I)
            }
            return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I,
            N !== null && N.tag === 6 ? (o(D, N.sibling),
            N = f(N, I),
            N.return = D,
            D = N) : (o(D, N),
            N = qc(I, D.mode, K),
            N.return = D,
            D = N),
            x(D)) : o(D, N)
        }
        return Xe
    }
    var Is = qp(!0)
      , Wp = qp(!1)
      , Na = lr(null)
      , Oa = null
      , Fs = null
      , tc = null;
    function nc() {
        tc = Fs = Oa = null
    }
    function rc(n) {
        var s = Na.current;
        Be(Na),
        n._currentValue = s
    }
    function sc(n, s, o) {
        for (; n !== null; ) {
            var c = n.alternate;
            if ((n.childLanes & s) !== s ? (n.childLanes |= s,
            c !== null && (c.childLanes |= s)) : c !== null && (c.childLanes & s) !== s && (c.childLanes |= s),
            n === o)
                break;
            n = n.return
        }
    }
    function Vs(n, s) {
        Oa = n,
        tc = Fs = null,
        n = n.dependencies,
        n !== null && n.firstContext !== null && ((n.lanes & s) !== 0 && (jt = !0),
        n.firstContext = null)
    }
    function Jt(n) {
        var s = n._currentValue;
        if (tc !== n)
            if (n = {
                context: n,
                memoizedValue: s,
                next: null
            },
            Fs === null) {
                if (Oa === null)
                    throw Error(r(308));
                Fs = n,
                Oa.dependencies = {
                    lanes: 0,
                    firstContext: n
                }
            } else
                Fs = Fs.next = n;
        return s
    }
    var Hr = null;
    function ic(n) {
        Hr === null ? Hr = [n] : Hr.push(n)
    }
    function Kp(n, s, o, c) {
        var f = s.interleaved;
        return f === null ? (o.next = o,
        ic(s)) : (o.next = f.next,
        f.next = o),
        s.interleaved = o,
        Bn(n, c)
    }
    function Bn(n, s) {
        n.lanes |= s;
        var o = n.alternate;
        for (o !== null && (o.lanes |= s),
        o = n,
        n = n.return; n !== null; )
            n.childLanes |= s,
            o = n.alternate,
            o !== null && (o.childLanes |= s),
            o = n,
            n = n.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var dr = !1;
    function oc(n) {
        n.updateQueue = {
            baseState: n.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function Qp(n, s) {
        n = n.updateQueue,
        s.updateQueue === n && (s.updateQueue = {
            baseState: n.baseState,
            firstBaseUpdate: n.firstBaseUpdate,
            lastBaseUpdate: n.lastBaseUpdate,
            shared: n.shared,
            effects: n.effects
        })
    }
    function Un(n, s) {
        return {
            eventTime: n,
            lane: s,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function fr(n, s, o) {
        var c = n.updateQueue;
        if (c === null)
            return null;
        if (c = c.shared,
        (Oe & 2) !== 0) {
            var f = c.pending;
            return f === null ? s.next = s : (s.next = f.next,
            f.next = s),
            c.pending = s,
            Bn(n, o)
        }
        return f = c.interleaved,
        f === null ? (s.next = s,
        ic(c)) : (s.next = f.next,
        f.next = s),
        c.interleaved = s,
        Bn(n, o)
    }
    function ja(n, s, o) {
        if (s = s.updateQueue,
        s !== null && (s = s.shared,
        (o & 4194240) !== 0)) {
            var c = s.lanes;
            c &= n.pendingLanes,
            o |= c,
            s.lanes = o,
            wu(n, o)
        }
    }
    function Gp(n, s) {
        var o = n.updateQueue
          , c = n.alternate;
        if (c !== null && (c = c.updateQueue,
        o === c)) {
            var f = null
              , p = null;
            if (o = o.firstBaseUpdate,
            o !== null) {
                do {
                    var x = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    p === null ? f = p = x : p = p.next = x,
                    o = o.next
                } while (o !== null);
                p === null ? f = p = s : p = p.next = s
            } else
                f = p = s;
            o = {
                baseState: c.baseState,
                firstBaseUpdate: f,
                lastBaseUpdate: p,
                shared: c.shared,
                effects: c.effects
            },
            n.updateQueue = o;
            return
        }
        n = o.lastBaseUpdate,
        n === null ? o.firstBaseUpdate = s : n.next = s,
        o.lastBaseUpdate = s
    }
    function Ma(n, s, o, c) {
        var f = n.updateQueue;
        dr = !1;
        var p = f.firstBaseUpdate
          , x = f.lastBaseUpdate
          , C = f.shared.pending;
        if (C !== null) {
            f.shared.pending = null;
            var _ = C
              , B = _.next;
            _.next = null,
            x === null ? p = B : x.next = B,
            x = _;
            var q = n.alternate;
            q !== null && (q = q.updateQueue,
            C = q.lastBaseUpdate,
            C !== x && (C === null ? q.firstBaseUpdate = B : C.next = B,
            q.lastBaseUpdate = _))
        }
        if (p !== null) {
            var W = f.baseState;
            x = 0,
            q = B = _ = null,
            C = p;
            do {
                var H = C.lane
                  , Y = C.eventTime;
                if ((c & H) === H) {
                    q !== null && (q = q.next = {
                        eventTime: Y,
                        lane: 0,
                        tag: C.tag,
                        payload: C.payload,
                        callback: C.callback,
                        next: null
                    });
                    e: {
                        var ne = n
                          , ie = C;
                        switch (H = s,
                        Y = o,
                        ie.tag) {
                        case 1:
                            if (ne = ie.payload,
                            typeof ne == "function") {
                                W = ne.call(Y, W, H);
                                break e
                            }
                            W = ne;
                            break e;
                        case 3:
                            ne.flags = ne.flags & -65537 | 128;
                        case 0:
                            if (ne = ie.payload,
                            H = typeof ne == "function" ? ne.call(Y, W, H) : ne,
                            H == null)
                                break e;
                            W = U({}, W, H);
                            break e;
                        case 2:
                            dr = !0
                        }
                    }
                    C.callback !== null && C.lane !== 0 && (n.flags |= 64,
                    H = f.effects,
                    H === null ? f.effects = [C] : H.push(C))
                } else
                    Y = {
                        eventTime: Y,
                        lane: H,
                        tag: C.tag,
                        payload: C.payload,
                        callback: C.callback,
                        next: null
                    },
                    q === null ? (B = q = Y,
                    _ = W) : q = q.next = Y,
                    x |= H;
                if (C = C.next,
                C === null) {
                    if (C = f.shared.pending,
                    C === null)
                        break;
                    H = C,
                    C = H.next,
                    H.next = null,
                    f.lastBaseUpdate = H,
                    f.shared.pending = null
                }
            } while (!0);
            if (q === null && (_ = W),
            f.baseState = _,
            f.firstBaseUpdate = B,
            f.lastBaseUpdate = q,
            s = f.shared.interleaved,
            s !== null) {
                f = s;
                do
                    x |= f.lane,
                    f = f.next;
                while (f !== s)
            } else
                p === null && (f.shared.lanes = 0);
            Kr |= x,
            n.lanes = x,
            n.memoizedState = W
        }
    }
    function Yp(n, s, o) {
        if (n = s.effects,
        s.effects = null,
        n !== null)
            for (s = 0; s < n.length; s++) {
                var c = n[s]
                  , f = c.callback;
                if (f !== null) {
                    if (c.callback = null,
                    c = o,
                    typeof f != "function")
                        throw Error(r(191, f));
                    f.call(c)
                }
            }
    }
    var Gi = {}
      , Cn = lr(Gi)
      , Yi = lr(Gi)
      , Xi = lr(Gi);
    function qr(n) {
        if (n === Gi)
            throw Error(r(174));
        return n
    }
    function ac(n, s) {
        switch (Fe(Xi, s),
        Fe(Yi, n),
        Fe(Cn, Gi),
        n = s.nodeType,
        n) {
        case 9:
        case 11:
            s = (s = s.documentElement) ? s.namespaceURI : lu(null, "");
            break;
        default:
            n = n === 8 ? s.parentNode : s,
            s = n.namespaceURI || null,
            n = n.tagName,
            s = lu(s, n)
        }
        Be(Cn),
        Fe(Cn, s)
    }
    function Bs() {
        Be(Cn),
        Be(Yi),
        Be(Xi)
    }
    function Xp(n) {
        qr(Xi.current);
        var s = qr(Cn.current)
          , o = lu(s, n.type);
        s !== o && (Fe(Yi, n),
        Fe(Cn, o))
    }
    function lc(n) {
        Yi.current === n && (Be(Cn),
        Be(Yi))
    }
    var He = lr(0);
    function La(n) {
        for (var s = n; s !== null; ) {
            if (s.tag === 13) {
                var o = s.memoizedState;
                if (o !== null && (o = o.dehydrated,
                o === null || o.data === "$?" || o.data === "$!"))
                    return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0)
                    return s
            } else if (s.child !== null) {
                s.child.return = s,
                s = s.child;
                continue
            }
            if (s === n)
                break;
            for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                    return null;
                s = s.return
            }
            s.sibling.return = s.return,
            s = s.sibling
        }
        return null
    }
    var uc = [];
    function cc() {
        for (var n = 0; n < uc.length; n++)
            uc[n]._workInProgressVersionPrimary = null;
        uc.length = 0
    }
    var Da = M.ReactCurrentDispatcher
      , dc = M.ReactCurrentBatchConfig
      , Wr = 0
      , qe = null
      , nt = null
      , ot = null
      , Ia = !1
      , Ji = !1
      , Zi = 0
      , Mb = 0;
    function wt() {
        throw Error(r(321))
    }
    function fc(n, s) {
        if (s === null)
            return !1;
        for (var o = 0; o < s.length && o < n.length; o++)
            if (!fn(n[o], s[o]))
                return !1;
        return !0
    }
    function hc(n, s, o, c, f, p) {
        if (Wr = p,
        qe = s,
        s.memoizedState = null,
        s.updateQueue = null,
        s.lanes = 0,
        Da.current = n === null || n.memoizedState === null ? Fb : Vb,
        n = o(c, f),
        Ji) {
            p = 0;
            do {
                if (Ji = !1,
                Zi = 0,
                25 <= p)
                    throw Error(r(301));
                p += 1,
                ot = nt = null,
                s.updateQueue = null,
                Da.current = Bb,
                n = o(c, f)
            } while (Ji)
        }
        if (Da.current = Ba,
        s = nt !== null && nt.next !== null,
        Wr = 0,
        ot = nt = qe = null,
        Ia = !1,
        s)
            throw Error(r(300));
        return n
    }
    function pc() {
        var n = Zi !== 0;
        return Zi = 0,
        n
    }
    function Tn() {
        var n = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ot === null ? qe.memoizedState = ot = n : ot = ot.next = n,
        ot
    }
    function Zt() {
        if (nt === null) {
            var n = qe.alternate;
            n = n !== null ? n.memoizedState : null
        } else
            n = nt.next;
        var s = ot === null ? qe.memoizedState : ot.next;
        if (s !== null)
            ot = s,
            nt = n;
        else {
            if (n === null)
                throw Error(r(310));
            nt = n,
            n = {
                memoizedState: nt.memoizedState,
                baseState: nt.baseState,
                baseQueue: nt.baseQueue,
                queue: nt.queue,
                next: null
            },
            ot === null ? qe.memoizedState = ot = n : ot = ot.next = n
        }
        return ot
    }
    function eo(n, s) {
        return typeof s == "function" ? s(n) : s
    }
    function mc(n) {
        var s = Zt()
          , o = s.queue;
        if (o === null)
            throw Error(r(311));
        o.lastRenderedReducer = n;
        var c = nt
          , f = c.baseQueue
          , p = o.pending;
        if (p !== null) {
            if (f !== null) {
                var x = f.next;
                f.next = p.next,
                p.next = x
            }
            c.baseQueue = f = p,
            o.pending = null
        }
        if (f !== null) {
            p = f.next,
            c = c.baseState;
            var C = x = null
              , _ = null
              , B = p;
            do {
                var q = B.lane;
                if ((Wr & q) === q)
                    _ !== null && (_ = _.next = {
                        lane: 0,
                        action: B.action,
                        hasEagerState: B.hasEagerState,
                        eagerState: B.eagerState,
                        next: null
                    }),
                    c = B.hasEagerState ? B.eagerState : n(c, B.action);
                else {
                    var W = {
                        lane: q,
                        action: B.action,
                        hasEagerState: B.hasEagerState,
                        eagerState: B.eagerState,
                        next: null
                    };
                    _ === null ? (C = _ = W,
                    x = c) : _ = _.next = W,
                    qe.lanes |= q,
                    Kr |= q
                }
                B = B.next
            } while (B !== null && B !== p);
            _ === null ? x = c : _.next = C,
            fn(c, s.memoizedState) || (jt = !0),
            s.memoizedState = c,
            s.baseState = x,
            s.baseQueue = _,
            o.lastRenderedState = c
        }
        if (n = o.interleaved,
        n !== null) {
            f = n;
            do
                p = f.lane,
                qe.lanes |= p,
                Kr |= p,
                f = f.next;
            while (f !== n)
        } else
            f === null && (o.lanes = 0);
        return [s.memoizedState, o.dispatch]
    }
    function gc(n) {
        var s = Zt()
          , o = s.queue;
        if (o === null)
            throw Error(r(311));
        o.lastRenderedReducer = n;
        var c = o.dispatch
          , f = o.pending
          , p = s.memoizedState;
        if (f !== null) {
            o.pending = null;
            var x = f = f.next;
            do
                p = n(p, x.action),
                x = x.next;
            while (x !== f);
            fn(p, s.memoizedState) || (jt = !0),
            s.memoizedState = p,
            s.baseQueue === null && (s.baseState = p),
            o.lastRenderedState = p
        }
        return [p, c]
    }
    function Jp() {}
    function Zp(n, s) {
        var o = qe
          , c = Zt()
          , f = s()
          , p = !fn(c.memoizedState, f);
        if (p && (c.memoizedState = f,
        jt = !0),
        c = c.queue,
        yc(nm.bind(null, o, c, n), [n]),
        c.getSnapshot !== s || p || ot !== null && ot.memoizedState.tag & 1) {
            if (o.flags |= 2048,
            to(9, tm.bind(null, o, c, f, s), void 0, null),
            at === null)
                throw Error(r(349));
            (Wr & 30) !== 0 || em(o, s, f)
        }
        return f
    }
    function em(n, s, o) {
        n.flags |= 16384,
        n = {
            getSnapshot: s,
            value: o
        },
        s = qe.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        qe.updateQueue = s,
        s.stores = [n]) : (o = s.stores,
        o === null ? s.stores = [n] : o.push(n))
    }
    function tm(n, s, o, c) {
        s.value = o,
        s.getSnapshot = c,
        rm(s) && sm(n)
    }
    function nm(n, s, o) {
        return o(function() {
            rm(s) && sm(n)
        })
    }
    function rm(n) {
        var s = n.getSnapshot;
        n = n.value;
        try {
            var o = s();
            return !fn(n, o)
        } catch {
            return !0
        }
    }
    function sm(n) {
        var s = Bn(n, 1);
        s !== null && yn(s, n, 1, -1)
    }
    function im(n) {
        var s = Tn();
        return typeof n == "function" && (n = n()),
        s.memoizedState = s.baseState = n,
        n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: eo,
            lastRenderedState: n
        },
        s.queue = n,
        n = n.dispatch = Ib.bind(null, qe, n),
        [s.memoizedState, n]
    }
    function to(n, s, o, c) {
        return n = {
            tag: n,
            create: s,
            destroy: o,
            deps: c,
            next: null
        },
        s = qe.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        qe.updateQueue = s,
        s.lastEffect = n.next = n) : (o = s.lastEffect,
        o === null ? s.lastEffect = n.next = n : (c = o.next,
        o.next = n,
        n.next = c,
        s.lastEffect = n)),
        n
    }
    function om() {
        return Zt().memoizedState
    }
    function Fa(n, s, o, c) {
        var f = Tn();
        qe.flags |= n,
        f.memoizedState = to(1 | s, o, void 0, c === void 0 ? null : c)
    }
    function Va(n, s, o, c) {
        var f = Zt();
        c = c === void 0 ? null : c;
        var p = void 0;
        if (nt !== null) {
            var x = nt.memoizedState;
            if (p = x.destroy,
            c !== null && fc(c, x.deps)) {
                f.memoizedState = to(s, o, p, c);
                return
            }
        }
        qe.flags |= n,
        f.memoizedState = to(1 | s, o, p, c)
    }
    function am(n, s) {
        return Fa(8390656, 8, n, s)
    }
    function yc(n, s) {
        return Va(2048, 8, n, s)
    }
    function lm(n, s) {
        return Va(4, 2, n, s)
    }
    function um(n, s) {
        return Va(4, 4, n, s)
    }
    function cm(n, s) {
        if (typeof s == "function")
            return n = n(),
            s(n),
            function() {
                s(null)
            }
            ;
        if (s != null)
            return n = n(),
            s.current = n,
            function() {
                s.current = null
            }
    }
    function dm(n, s, o) {
        return o = o != null ? o.concat([n]) : null,
        Va(4, 4, cm.bind(null, s, n), o)
    }
    function vc() {}
    function fm(n, s) {
        var o = Zt();
        s = s === void 0 ? null : s;
        var c = o.memoizedState;
        return c !== null && s !== null && fc(s, c[1]) ? c[0] : (o.memoizedState = [n, s],
        n)
    }
    function hm(n, s) {
        var o = Zt();
        s = s === void 0 ? null : s;
        var c = o.memoizedState;
        return c !== null && s !== null && fc(s, c[1]) ? c[0] : (n = n(),
        o.memoizedState = [n, s],
        n)
    }
    function pm(n, s, o) {
        return (Wr & 21) === 0 ? (n.baseState && (n.baseState = !1,
        jt = !0),
        n.memoizedState = o) : (fn(o, s) || (o = Hh(),
        qe.lanes |= o,
        Kr |= o,
        n.baseState = !0),
        s)
    }
    function Lb(n, s) {
        var o = Le;
        Le = o !== 0 && 4 > o ? o : 4,
        n(!0);
        var c = dc.transition;
        dc.transition = {};
        try {
            n(!1),
            s()
        } finally {
            Le = o,
            dc.transition = c
        }
    }
    function mm() {
        return Zt().memoizedState
    }
    function Db(n, s, o) {
        var c = gr(n);
        if (o = {
            lane: c,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        gm(n))
            ym(s, o);
        else if (o = Kp(n, s, o, c),
        o !== null) {
            var f = Rt();
            yn(o, n, c, f),
            vm(o, s, c)
        }
    }
    function Ib(n, s, o) {
        var c = gr(n)
          , f = {
            lane: c,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (gm(n))
            ym(s, f);
        else {
            var p = n.alternate;
            if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = s.lastRenderedReducer,
            p !== null))
                try {
                    var x = s.lastRenderedState
                      , C = p(x, o);
                    if (f.hasEagerState = !0,
                    f.eagerState = C,
                    fn(C, x)) {
                        var _ = s.interleaved;
                        _ === null ? (f.next = f,
                        ic(s)) : (f.next = _.next,
                        _.next = f),
                        s.interleaved = f;
                        return
                    }
                } catch {} finally {}
            o = Kp(n, s, f, c),
            o !== null && (f = Rt(),
            yn(o, n, c, f),
            vm(o, s, c))
        }
    }
    function gm(n) {
        var s = n.alternate;
        return n === qe || s !== null && s === qe
    }
    function ym(n, s) {
        Ji = Ia = !0;
        var o = n.pending;
        o === null ? s.next = s : (s.next = o.next,
        o.next = s),
        n.pending = s
    }
    function vm(n, s, o) {
        if ((o & 4194240) !== 0) {
            var c = s.lanes;
            c &= n.pendingLanes,
            o |= c,
            s.lanes = o,
            wu(n, o)
        }
    }
    var Ba = {
        readContext: Jt,
        useCallback: wt,
        useContext: wt,
        useEffect: wt,
        useImperativeHandle: wt,
        useInsertionEffect: wt,
        useLayoutEffect: wt,
        useMemo: wt,
        useReducer: wt,
        useRef: wt,
        useState: wt,
        useDebugValue: wt,
        useDeferredValue: wt,
        useTransition: wt,
        useMutableSource: wt,
        useSyncExternalStore: wt,
        useId: wt,
        unstable_isNewReconciler: !1
    }
      , Fb = {
        readContext: Jt,
        useCallback: function(n, s) {
            return Tn().memoizedState = [n, s === void 0 ? null : s],
            n
        },
        useContext: Jt,
        useEffect: am,
        useImperativeHandle: function(n, s, o) {
            return o = o != null ? o.concat([n]) : null,
            Fa(4194308, 4, cm.bind(null, s, n), o)
        },
        useLayoutEffect: function(n, s) {
            return Fa(4194308, 4, n, s)
        },
        useInsertionEffect: function(n, s) {
            return Fa(4, 2, n, s)
        },
        useMemo: function(n, s) {
            var o = Tn();
            return s = s === void 0 ? null : s,
            n = n(),
            o.memoizedState = [n, s],
            n
        },
        useReducer: function(n, s, o) {
            var c = Tn();
            return s = o !== void 0 ? o(s) : s,
            c.memoizedState = c.baseState = s,
            n = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: n,
                lastRenderedState: s
            },
            c.queue = n,
            n = n.dispatch = Db.bind(null, qe, n),
            [c.memoizedState, n]
        },
        useRef: function(n) {
            var s = Tn();
            return n = {
                current: n
            },
            s.memoizedState = n
        },
        useState: im,
        useDebugValue: vc,
        useDeferredValue: function(n) {
            return Tn().memoizedState = n
        },
        useTransition: function() {
            var n = im(!1)
              , s = n[0];
            return n = Lb.bind(null, n[1]),
            Tn().memoizedState = n,
            [s, n]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(n, s, o) {
            var c = qe
              , f = Tn();
            if ($e) {
                if (o === void 0)
                    throw Error(r(407));
                o = o()
            } else {
                if (o = s(),
                at === null)
                    throw Error(r(349));
                (Wr & 30) !== 0 || em(c, s, o)
            }
            f.memoizedState = o;
            var p = {
                value: o,
                getSnapshot: s
            };
            return f.queue = p,
            am(nm.bind(null, c, p, n), [n]),
            c.flags |= 2048,
            to(9, tm.bind(null, c, p, o, s), void 0, null),
            o
        },
        useId: function() {
            var n = Tn()
              , s = at.identifierPrefix;
            if ($e) {
                var o = Vn
                  , c = Fn;
                o = (c & ~(1 << 32 - dn(c) - 1)).toString(32) + o,
                s = ":" + s + "R" + o,
                o = Zi++,
                0 < o && (s += "H" + o.toString(32)),
                s += ":"
            } else
                o = Mb++,
                s = ":" + s + "r" + o.toString(32) + ":";
            return n.memoizedState = s
        },
        unstable_isNewReconciler: !1
    }
      , Vb = {
        readContext: Jt,
        useCallback: fm,
        useContext: Jt,
        useEffect: yc,
        useImperativeHandle: dm,
        useInsertionEffect: lm,
        useLayoutEffect: um,
        useMemo: hm,
        useReducer: mc,
        useRef: om,
        useState: function() {
            return mc(eo)
        },
        useDebugValue: vc,
        useDeferredValue: function(n) {
            var s = Zt();
            return pm(s, nt.memoizedState, n)
        },
        useTransition: function() {
            var n = mc(eo)[0]
              , s = Zt().memoizedState;
            return [n, s]
        },
        useMutableSource: Jp,
        useSyncExternalStore: Zp,
        useId: mm,
        unstable_isNewReconciler: !1
    }
      , Bb = {
        readContext: Jt,
        useCallback: fm,
        useContext: Jt,
        useEffect: yc,
        useImperativeHandle: dm,
        useInsertionEffect: lm,
        useLayoutEffect: um,
        useMemo: hm,
        useReducer: gc,
        useRef: om,
        useState: function() {
            return gc(eo)
        },
        useDebugValue: vc,
        useDeferredValue: function(n) {
            var s = Zt();
            return nt === null ? s.memoizedState = n : pm(s, nt.memoizedState, n)
        },
        useTransition: function() {
            var n = gc(eo)[0]
              , s = Zt().memoizedState;
            return [n, s]
        },
        useMutableSource: Jp,
        useSyncExternalStore: Zp,
        useId: mm,
        unstable_isNewReconciler: !1
    };
    function pn(n, s) {
        if (n && n.defaultProps) {
            s = U({}, s),
            n = n.defaultProps;
            for (var o in n)
                s[o] === void 0 && (s[o] = n[o]);
            return s
        }
        return s
    }
    function xc(n, s, o, c) {
        s = n.memoizedState,
        o = o(c, s),
        o = o == null ? s : U({}, s, o),
        n.memoizedState = o,
        n.lanes === 0 && (n.updateQueue.baseState = o)
    }
    var Ua = {
        isMounted: function(n) {
            return (n = n._reactInternals) ? Vr(n) === n : !1
        },
        enqueueSetState: function(n, s, o) {
            n = n._reactInternals;
            var c = Rt()
              , f = gr(n)
              , p = Un(c, f);
            p.payload = s,
            o != null && (p.callback = o),
            s = fr(n, p, f),
            s !== null && (yn(s, n, f, c),
            ja(s, n, f))
        },
        enqueueReplaceState: function(n, s, o) {
            n = n._reactInternals;
            var c = Rt()
              , f = gr(n)
              , p = Un(c, f);
            p.tag = 1,
            p.payload = s,
            o != null && (p.callback = o),
            s = fr(n, p, f),
            s !== null && (yn(s, n, f, c),
            ja(s, n, f))
        },
        enqueueForceUpdate: function(n, s) {
            n = n._reactInternals;
            var o = Rt()
              , c = gr(n)
              , f = Un(o, c);
            f.tag = 2,
            s != null && (f.callback = s),
            s = fr(n, f, c),
            s !== null && (yn(s, n, c, o),
            ja(s, n, c))
        }
    };
    function xm(n, s, o, c, f, p, x) {
        return n = n.stateNode,
        typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, p, x) : s.prototype && s.prototype.isPureReactComponent ? !Ui(o, c) || !Ui(f, p) : !0
    }
    function wm(n, s, o) {
        var c = !1
          , f = ur
          , p = s.contextType;
        return typeof p == "object" && p !== null ? p = Jt(p) : (f = Ot(s) ? Ur : xt.current,
        c = s.contextTypes,
        p = (c = c != null) ? js(n, f) : ur),
        s = new s(o,p),
        n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        s.updater = Ua,
        n.stateNode = s,
        s._reactInternals = n,
        c && (n = n.stateNode,
        n.__reactInternalMemoizedUnmaskedChildContext = f,
        n.__reactInternalMemoizedMaskedChildContext = p),
        s
    }
    function bm(n, s, o, c) {
        n = s.state,
        typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(o, c),
        typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(o, c),
        s.state !== n && Ua.enqueueReplaceState(s, s.state, null)
    }
    function wc(n, s, o, c) {
        var f = n.stateNode;
        f.props = o,
        f.state = n.memoizedState,
        f.refs = {},
        oc(n);
        var p = s.contextType;
        typeof p == "object" && p !== null ? f.context = Jt(p) : (p = Ot(s) ? Ur : xt.current,
        f.context = js(n, p)),
        f.state = n.memoizedState,
        p = s.getDerivedStateFromProps,
        typeof p == "function" && (xc(n, s, p, o),
        f.state = n.memoizedState),
        typeof s.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (s = f.state,
        typeof f.componentWillMount == "function" && f.componentWillMount(),
        typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
        s !== f.state && Ua.enqueueReplaceState(f, f.state, null),
        Ma(n, o, f, c),
        f.state = n.memoizedState),
        typeof f.componentDidMount == "function" && (n.flags |= 4194308)
    }
    function Us(n, s) {
        try {
            var o = ""
              , c = s;
            do
                o += he(c),
                c = c.return;
            while (c);
            var f = o
        } catch (p) {
            f = `
Error generating stack: ` + p.message + `
` + p.stack
        }
        return {
            value: n,
            source: s,
            stack: f,
            digest: null
        }
    }
    function bc(n, s, o) {
        return {
            value: n,
            source: null,
            stack: o ?? null,
            digest: s ?? null
        }
    }
    function Sc(n, s) {
        try {
            console.error(s.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var Ub = typeof WeakMap == "function" ? WeakMap : Map;
    function Sm(n, s, o) {
        o = Un(-1, o),
        o.tag = 3,
        o.payload = {
            element: null
        };
        var c = s.value;
        return o.callback = function() {
            Qa || (Qa = !0,
            Ic = c),
            Sc(n, s)
        }
        ,
        o
    }
    function km(n, s, o) {
        o = Un(-1, o),
        o.tag = 3;
        var c = n.type.getDerivedStateFromError;
        if (typeof c == "function") {
            var f = s.value;
            o.payload = function() {
                return c(f)
            }
            ,
            o.callback = function() {
                Sc(n, s)
            }
        }
        var p = n.stateNode;
        return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
            Sc(n, s),
            typeof c != "function" && (pr === null ? pr = new Set([this]) : pr.add(this));
            var x = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: x !== null ? x : ""
            })
        }
        ),
        o
    }
    function Em(n, s, o) {
        var c = n.pingCache;
        if (c === null) {
            c = n.pingCache = new Ub;
            var f = new Set;
            c.set(s, f)
        } else
            f = c.get(s),
            f === void 0 && (f = new Set,
            c.set(s, f));
        f.has(o) || (f.add(o),
        n = t2.bind(null, n, s, o),
        s.then(n, n))
    }
    function Cm(n) {
        do {
            var s;
            if ((s = n.tag === 13) && (s = n.memoizedState,
            s = s !== null ? s.dehydrated !== null : !0),
            s)
                return n;
            n = n.return
        } while (n !== null);
        return null
    }
    function Tm(n, s, o, c, f) {
        return (n.mode & 1) === 0 ? (n === s ? n.flags |= 65536 : (n.flags |= 128,
        o.flags |= 131072,
        o.flags &= -52805,
        o.tag === 1 && (o.alternate === null ? o.tag = 17 : (s = Un(-1, 1),
        s.tag = 2,
        fr(o, s, 1))),
        o.lanes |= 1),
        n) : (n.flags |= 65536,
        n.lanes = f,
        n)
    }
    var zb = M.ReactCurrentOwner
      , jt = !1;
    function Pt(n, s, o, c) {
        s.child = n === null ? Wp(s, null, o, c) : Is(s, n.child, o, c)
    }
    function _m(n, s, o, c, f) {
        o = o.render;
        var p = s.ref;
        return Vs(s, f),
        c = hc(n, s, o, c, p, f),
        o = pc(),
        n !== null && !jt ? (s.updateQueue = n.updateQueue,
        s.flags &= -2053,
        n.lanes &= ~f,
        zn(n, s, f)) : ($e && o && Yu(s),
        s.flags |= 1,
        Pt(n, s, c, f),
        s.child)
    }
    function Pm(n, s, o, c, f) {
        if (n === null) {
            var p = o.type;
            return typeof p == "function" && !Hc(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (s.tag = 15,
            s.type = p,
            Rm(n, s, p, c, f)) : (n = el(o.type, null, c, s, s.mode, f),
            n.ref = s.ref,
            n.return = s,
            s.child = n)
        }
        if (p = n.child,
        (n.lanes & f) === 0) {
            var x = p.memoizedProps;
            if (o = o.compare,
            o = o !== null ? o : Ui,
            o(x, c) && n.ref === s.ref)
                return zn(n, s, f)
        }
        return s.flags |= 1,
        n = vr(p, c),
        n.ref = s.ref,
        n.return = s,
        s.child = n
    }
    function Rm(n, s, o, c, f) {
        if (n !== null) {
            var p = n.memoizedProps;
            if (Ui(p, c) && n.ref === s.ref)
                if (jt = !1,
                s.pendingProps = c = p,
                (n.lanes & f) !== 0)
                    (n.flags & 131072) !== 0 && (jt = !0);
                else
                    return s.lanes = n.lanes,
                    zn(n, s, f)
        }
        return kc(n, s, o, c, f)
    }
    function Am(n, s, o) {
        var c = s.pendingProps
          , f = c.children
          , p = n !== null ? n.memoizedState : null;
        if (c.mode === "hidden")
            if ((s.mode & 1) === 0)
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Fe($s, Ht),
                Ht |= o;
            else {
                if ((o & 1073741824) === 0)
                    return n = p !== null ? p.baseLanes | o : o,
                    s.lanes = s.childLanes = 1073741824,
                    s.memoizedState = {
                        baseLanes: n,
                        cachePool: null,
                        transitions: null
                    },
                    s.updateQueue = null,
                    Fe($s, Ht),
                    Ht |= n,
                    null;
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                c = p !== null ? p.baseLanes : o,
                Fe($s, Ht),
                Ht |= c
            }
        else
            p !== null ? (c = p.baseLanes | o,
            s.memoizedState = null) : c = o,
            Fe($s, Ht),
            Ht |= c;
        return Pt(n, s, f, o),
        s.child
    }
    function Nm(n, s) {
        var o = s.ref;
        (n === null && o !== null || n !== null && n.ref !== o) && (s.flags |= 512,
        s.flags |= 2097152)
    }
    function kc(n, s, o, c, f) {
        var p = Ot(o) ? Ur : xt.current;
        return p = js(s, p),
        Vs(s, f),
        o = hc(n, s, o, c, p, f),
        c = pc(),
        n !== null && !jt ? (s.updateQueue = n.updateQueue,
        s.flags &= -2053,
        n.lanes &= ~f,
        zn(n, s, f)) : ($e && c && Yu(s),
        s.flags |= 1,
        Pt(n, s, o, f),
        s.child)
    }
    function Om(n, s, o, c, f) {
        if (Ot(o)) {
            var p = !0;
            Ca(s)
        } else
            p = !1;
        if (Vs(s, f),
        s.stateNode === null)
            $a(n, s),
            wm(s, o, c),
            wc(s, o, c, f),
            c = !0;
        else if (n === null) {
            var x = s.stateNode
              , C = s.memoizedProps;
            x.props = C;
            var _ = x.context
              , B = o.contextType;
            typeof B == "object" && B !== null ? B = Jt(B) : (B = Ot(o) ? Ur : xt.current,
            B = js(s, B));
            var q = o.getDerivedStateFromProps
              , W = typeof q == "function" || typeof x.getSnapshotBeforeUpdate == "function";
            W || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (C !== c || _ !== B) && bm(s, x, c, B),
            dr = !1;
            var H = s.memoizedState;
            x.state = H,
            Ma(s, c, x, f),
            _ = s.memoizedState,
            C !== c || H !== _ || Nt.current || dr ? (typeof q == "function" && (xc(s, o, q, c),
            _ = s.memoizedState),
            (C = dr || xm(s, o, C, c, H, _, B)) ? (W || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(),
            typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()),
            typeof x.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (s.flags |= 4194308),
            s.memoizedProps = c,
            s.memoizedState = _),
            x.props = c,
            x.state = _,
            x.context = B,
            c = C) : (typeof x.componentDidMount == "function" && (s.flags |= 4194308),
            c = !1)
        } else {
            x = s.stateNode,
            Qp(n, s),
            C = s.memoizedProps,
            B = s.type === s.elementType ? C : pn(s.type, C),
            x.props = B,
            W = s.pendingProps,
            H = x.context,
            _ = o.contextType,
            typeof _ == "object" && _ !== null ? _ = Jt(_) : (_ = Ot(o) ? Ur : xt.current,
            _ = js(s, _));
            var Y = o.getDerivedStateFromProps;
            (q = typeof Y == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (C !== W || H !== _) && bm(s, x, c, _),
            dr = !1,
            H = s.memoizedState,
            x.state = H,
            Ma(s, c, x, f);
            var ne = s.memoizedState;
            C !== W || H !== ne || Nt.current || dr ? (typeof Y == "function" && (xc(s, o, Y, c),
            ne = s.memoizedState),
            (B = dr || xm(s, o, B, c, H, ne, _) || !1) ? (q || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(c, ne, _),
            typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(c, ne, _)),
            typeof x.componentDidUpdate == "function" && (s.flags |= 4),
            typeof x.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || C === n.memoizedProps && H === n.memoizedState || (s.flags |= 4),
            typeof x.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && H === n.memoizedState || (s.flags |= 1024),
            s.memoizedProps = c,
            s.memoizedState = ne),
            x.props = c,
            x.state = ne,
            x.context = _,
            c = B) : (typeof x.componentDidUpdate != "function" || C === n.memoizedProps && H === n.memoizedState || (s.flags |= 4),
            typeof x.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && H === n.memoizedState || (s.flags |= 1024),
            c = !1)
        }
        return Ec(n, s, o, c, p, f)
    }
    function Ec(n, s, o, c, f, p) {
        Nm(n, s);
        var x = (s.flags & 128) !== 0;
        if (!c && !x)
            return f && Ip(s, o, !1),
            zn(n, s, p);
        c = s.stateNode,
        zb.current = s;
        var C = x && typeof o.getDerivedStateFromError != "function" ? null : c.render();
        return s.flags |= 1,
        n !== null && x ? (s.child = Is(s, n.child, null, p),
        s.child = Is(s, null, C, p)) : Pt(n, s, C, p),
        s.memoizedState = c.state,
        f && Ip(s, o, !0),
        s.child
    }
    function jm(n) {
        var s = n.stateNode;
        s.pendingContext ? Lp(n, s.pendingContext, s.pendingContext !== s.context) : s.context && Lp(n, s.context, !1),
        ac(n, s.containerInfo)
    }
    function Mm(n, s, o, c, f) {
        return Ds(),
        ec(f),
        s.flags |= 256,
        Pt(n, s, o, c),
        s.child
    }
    var Cc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Tc(n) {
        return {
            baseLanes: n,
            cachePool: null,
            transitions: null
        }
    }
    function Lm(n, s, o) {
        var c = s.pendingProps, f = He.current, p = !1, x = (s.flags & 128) !== 0, C;
        if ((C = x) || (C = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0),
        C ? (p = !0,
        s.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1),
        Fe(He, f & 1),
        n === null)
            return Zu(s),
            n = s.memoizedState,
            n !== null && (n = n.dehydrated,
            n !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : n.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824,
            null) : (x = c.children,
            n = c.fallback,
            p ? (c = s.mode,
            p = s.child,
            x = {
                mode: "hidden",
                children: x
            },
            (c & 1) === 0 && p !== null ? (p.childLanes = 0,
            p.pendingProps = x) : p = tl(x, c, 0, null),
            n = Xr(n, c, o, null),
            p.return = s,
            n.return = s,
            p.sibling = n,
            s.child = p,
            s.child.memoizedState = Tc(o),
            s.memoizedState = Cc,
            n) : _c(s, x));
        if (f = n.memoizedState,
        f !== null && (C = f.dehydrated,
        C !== null))
            return $b(n, s, x, c, C, f, o);
        if (p) {
            p = c.fallback,
            x = s.mode,
            f = n.child,
            C = f.sibling;
            var _ = {
                mode: "hidden",
                children: c.children
            };
            return (x & 1) === 0 && s.child !== f ? (c = s.child,
            c.childLanes = 0,
            c.pendingProps = _,
            s.deletions = null) : (c = vr(f, _),
            c.subtreeFlags = f.subtreeFlags & 14680064),
            C !== null ? p = vr(C, p) : (p = Xr(p, x, o, null),
            p.flags |= 2),
            p.return = s,
            c.return = s,
            c.sibling = p,
            s.child = c,
            c = p,
            p = s.child,
            x = n.child.memoizedState,
            x = x === null ? Tc(o) : {
                baseLanes: x.baseLanes | o,
                cachePool: null,
                transitions: x.transitions
            },
            p.memoizedState = x,
            p.childLanes = n.childLanes & ~o,
            s.memoizedState = Cc,
            c
        }
        return p = n.child,
        n = p.sibling,
        c = vr(p, {
            mode: "visible",
            children: c.children
        }),
        (s.mode & 1) === 0 && (c.lanes = o),
        c.return = s,
        c.sibling = null,
        n !== null && (o = s.deletions,
        o === null ? (s.deletions = [n],
        s.flags |= 16) : o.push(n)),
        s.child = c,
        s.memoizedState = null,
        c
    }
    function _c(n, s) {
        return s = tl({
            mode: "visible",
            children: s
        }, n.mode, 0, null),
        s.return = n,
        n.child = s
    }
    function za(n, s, o, c) {
        return c !== null && ec(c),
        Is(s, n.child, null, o),
        n = _c(s, s.pendingProps.children),
        n.flags |= 2,
        s.memoizedState = null,
        n
    }
    function $b(n, s, o, c, f, p, x) {
        if (o)
            return s.flags & 256 ? (s.flags &= -257,
            c = bc(Error(r(422))),
            za(n, s, x, c)) : s.memoizedState !== null ? (s.child = n.child,
            s.flags |= 128,
            null) : (p = c.fallback,
            f = s.mode,
            c = tl({
                mode: "visible",
                children: c.children
            }, f, 0, null),
            p = Xr(p, f, x, null),
            p.flags |= 2,
            c.return = s,
            p.return = s,
            c.sibling = p,
            s.child = c,
            (s.mode & 1) !== 0 && Is(s, n.child, null, x),
            s.child.memoizedState = Tc(x),
            s.memoizedState = Cc,
            p);
        if ((s.mode & 1) === 0)
            return za(n, s, x, null);
        if (f.data === "$!") {
            if (c = f.nextSibling && f.nextSibling.dataset,
            c)
                var C = c.dgst;
            return c = C,
            p = Error(r(419)),
            c = bc(p, c, void 0),
            za(n, s, x, c)
        }
        if (C = (x & n.childLanes) !== 0,
        jt || C) {
            if (c = at,
            c !== null) {
                switch (x & -x) {
                case 4:
                    f = 2;
                    break;
                case 16:
                    f = 8;
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
                    f = 32;
                    break;
                case 536870912:
                    f = 268435456;
                    break;
                default:
                    f = 0
                }
                f = (f & (c.suspendedLanes | x)) !== 0 ? 0 : f,
                f !== 0 && f !== p.retryLane && (p.retryLane = f,
                Bn(n, f),
                yn(c, n, f, -1))
            }
            return $c(),
            c = bc(Error(r(421))),
            za(n, s, x, c)
        }
        return f.data === "$?" ? (s.flags |= 128,
        s.child = n.child,
        s = n2.bind(null, n),
        f._reactRetry = s,
        null) : (n = p.treeContext,
        $t = ar(f.nextSibling),
        zt = s,
        $e = !0,
        hn = null,
        n !== null && (Yt[Xt++] = Fn,
        Yt[Xt++] = Vn,
        Yt[Xt++] = zr,
        Fn = n.id,
        Vn = n.overflow,
        zr = s),
        s = _c(s, c.children),
        s.flags |= 4096,
        s)
    }
    function Dm(n, s, o) {
        n.lanes |= s;
        var c = n.alternate;
        c !== null && (c.lanes |= s),
        sc(n.return, s, o)
    }
    function Pc(n, s, o, c, f) {
        var p = n.memoizedState;
        p === null ? n.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: c,
            tail: o,
            tailMode: f
        } : (p.isBackwards = s,
        p.rendering = null,
        p.renderingStartTime = 0,
        p.last = c,
        p.tail = o,
        p.tailMode = f)
    }
    function Im(n, s, o) {
        var c = s.pendingProps
          , f = c.revealOrder
          , p = c.tail;
        if (Pt(n, s, c.children, o),
        c = He.current,
        (c & 2) !== 0)
            c = c & 1 | 2,
            s.flags |= 128;
        else {
            if (n !== null && (n.flags & 128) !== 0)
                e: for (n = s.child; n !== null; ) {
                    if (n.tag === 13)
                        n.memoizedState !== null && Dm(n, o, s);
                    else if (n.tag === 19)
                        Dm(n, o, s);
                    else if (n.child !== null) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === s)
                        break e;
                    for (; n.sibling === null; ) {
                        if (n.return === null || n.return === s)
                            break e;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            c &= 1
        }
        if (Fe(He, c),
        (s.mode & 1) === 0)
            s.memoizedState = null;
        else
            switch (f) {
            case "forwards":
                for (o = s.child,
                f = null; o !== null; )
                    n = o.alternate,
                    n !== null && La(n) === null && (f = o),
                    o = o.sibling;
                o = f,
                o === null ? (f = s.child,
                s.child = null) : (f = o.sibling,
                o.sibling = null),
                Pc(s, !1, f, o, p);
                break;
            case "backwards":
                for (o = null,
                f = s.child,
                s.child = null; f !== null; ) {
                    if (n = f.alternate,
                    n !== null && La(n) === null) {
                        s.child = f;
                        break
                    }
                    n = f.sibling,
                    f.sibling = o,
                    o = f,
                    f = n
                }
                Pc(s, !0, o, null, p);
                break;
            case "together":
                Pc(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
            }
        return s.child
    }
    function $a(n, s) {
        (s.mode & 1) === 0 && n !== null && (n.alternate = null,
        s.alternate = null,
        s.flags |= 2)
    }
    function zn(n, s, o) {
        if (n !== null && (s.dependencies = n.dependencies),
        Kr |= s.lanes,
        (o & s.childLanes) === 0)
            return null;
        if (n !== null && s.child !== n.child)
            throw Error(r(153));
        if (s.child !== null) {
            for (n = s.child,
            o = vr(n, n.pendingProps),
            s.child = o,
            o.return = s; n.sibling !== null; )
                n = n.sibling,
                o = o.sibling = vr(n, n.pendingProps),
                o.return = s;
            o.sibling = null
        }
        return s.child
    }
    function Hb(n, s, o) {
        switch (s.tag) {
        case 3:
            jm(s),
            Ds();
            break;
        case 5:
            Xp(s);
            break;
        case 1:
            Ot(s.type) && Ca(s);
            break;
        case 4:
            ac(s, s.stateNode.containerInfo);
            break;
        case 10:
            var c = s.type._context
              , f = s.memoizedProps.value;
            Fe(Na, c._currentValue),
            c._currentValue = f;
            break;
        case 13:
            if (c = s.memoizedState,
            c !== null)
                return c.dehydrated !== null ? (Fe(He, He.current & 1),
                s.flags |= 128,
                null) : (o & s.child.childLanes) !== 0 ? Lm(n, s, o) : (Fe(He, He.current & 1),
                n = zn(n, s, o),
                n !== null ? n.sibling : null);
            Fe(He, He.current & 1);
            break;
        case 19:
            if (c = (o & s.childLanes) !== 0,
            (n.flags & 128) !== 0) {
                if (c)
                    return Im(n, s, o);
                s.flags |= 128
            }
            if (f = s.memoizedState,
            f !== null && (f.rendering = null,
            f.tail = null,
            f.lastEffect = null),
            Fe(He, He.current),
            c)
                break;
            return null;
        case 22:
        case 23:
            return s.lanes = 0,
            Am(n, s, o)
        }
        return zn(n, s, o)
    }
    var Fm, Rc, Vm, Bm;
    Fm = function(n, s) {
        for (var o = s.child; o !== null; ) {
            if (o.tag === 5 || o.tag === 6)
                n.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o,
                o = o.child;
                continue
            }
            if (o === s)
                break;
            for (; o.sibling === null; ) {
                if (o.return === null || o.return === s)
                    return;
                o = o.return
            }
            o.sibling.return = o.return,
            o = o.sibling
        }
    }
    ,
    Rc = function() {}
    ,
    Vm = function(n, s, o, c) {
        var f = n.memoizedProps;
        if (f !== c) {
            n = s.stateNode,
            qr(Cn.current);
            var p = null;
            switch (o) {
            case "input":
                f = Qt(n, f),
                c = Qt(n, c),
                p = [];
                break;
            case "select":
                f = U({}, f, {
                    value: void 0
                }),
                c = U({}, c, {
                    value: void 0
                }),
                p = [];
                break;
            case "textarea":
                f = Ln(n, f),
                c = Ln(n, c),
                p = [];
                break;
            default:
                typeof f.onClick != "function" && typeof c.onClick == "function" && (n.onclick = Sa)
            }
            uu(o, c);
            var x;
            o = null;
            for (B in f)
                if (!c.hasOwnProperty(B) && f.hasOwnProperty(B) && f[B] != null)
                    if (B === "style") {
                        var C = f[B];
                        for (x in C)
                            C.hasOwnProperty(x) && (o || (o = {}),
                            o[x] = "")
                    } else
                        B !== "dangerouslySetInnerHTML" && B !== "children" && B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && B !== "autoFocus" && (a.hasOwnProperty(B) ? p || (p = []) : (p = p || []).push(B, null));
            for (B in c) {
                var _ = c[B];
                if (C = f != null ? f[B] : void 0,
                c.hasOwnProperty(B) && _ !== C && (_ != null || C != null))
                    if (B === "style")
                        if (C) {
                            for (x in C)
                                !C.hasOwnProperty(x) || _ && _.hasOwnProperty(x) || (o || (o = {}),
                                o[x] = "");
                            for (x in _)
                                _.hasOwnProperty(x) && C[x] !== _[x] && (o || (o = {}),
                                o[x] = _[x])
                        } else
                            o || (p || (p = []),
                            p.push(B, o)),
                            o = _;
                    else
                        B === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0,
                        C = C ? C.__html : void 0,
                        _ != null && C !== _ && (p = p || []).push(B, _)) : B === "children" ? typeof _ != "string" && typeof _ != "number" || (p = p || []).push(B, "" + _) : B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && (a.hasOwnProperty(B) ? (_ != null && B === "onScroll" && Ve("scroll", n),
                        p || C === _ || (p = [])) : (p = p || []).push(B, _))
            }
            o && (p = p || []).push("style", o);
            var B = p;
            (s.updateQueue = B) && (s.flags |= 4)
        }
    }
    ,
    Bm = function(n, s, o, c) {
        o !== c && (s.flags |= 4)
    }
    ;
    function no(n, s) {
        if (!$e)
            switch (n.tailMode) {
            case "hidden":
                s = n.tail;
                for (var o = null; s !== null; )
                    s.alternate !== null && (o = s),
                    s = s.sibling;
                o === null ? n.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = n.tail;
                for (var c = null; o !== null; )
                    o.alternate !== null && (c = o),
                    o = o.sibling;
                c === null ? s || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null
            }
    }
    function bt(n) {
        var s = n.alternate !== null && n.alternate.child === n.child
          , o = 0
          , c = 0;
        if (s)
            for (var f = n.child; f !== null; )
                o |= f.lanes | f.childLanes,
                c |= f.subtreeFlags & 14680064,
                c |= f.flags & 14680064,
                f.return = n,
                f = f.sibling;
        else
            for (f = n.child; f !== null; )
                o |= f.lanes | f.childLanes,
                c |= f.subtreeFlags,
                c |= f.flags,
                f.return = n,
                f = f.sibling;
        return n.subtreeFlags |= c,
        n.childLanes = o,
        s
    }
    function qb(n, s, o) {
        var c = s.pendingProps;
        switch (Xu(s),
        s.tag) {
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
            return bt(s),
            null;
        case 1:
            return Ot(s.type) && Ea(),
            bt(s),
            null;
        case 3:
            return c = s.stateNode,
            Bs(),
            Be(Nt),
            Be(xt),
            cc(),
            c.pendingContext && (c.context = c.pendingContext,
            c.pendingContext = null),
            (n === null || n.child === null) && (Ra(s) ? s.flags |= 4 : n === null || n.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024,
            hn !== null && (Bc(hn),
            hn = null))),
            Rc(n, s),
            bt(s),
            null;
        case 5:
            lc(s);
            var f = qr(Xi.current);
            if (o = s.type,
            n !== null && s.stateNode != null)
                Vm(n, s, o, c, f),
                n.ref !== s.ref && (s.flags |= 512,
                s.flags |= 2097152);
            else {
                if (!c) {
                    if (s.stateNode === null)
                        throw Error(r(166));
                    return bt(s),
                    null
                }
                if (n = qr(Cn.current),
                Ra(s)) {
                    c = s.stateNode,
                    o = s.type;
                    var p = s.memoizedProps;
                    switch (c[En] = s,
                    c[Wi] = p,
                    n = (s.mode & 1) !== 0,
                    o) {
                    case "dialog":
                        Ve("cancel", c),
                        Ve("close", c);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Ve("load", c);
                        break;
                    case "video":
                    case "audio":
                        for (f = 0; f < $i.length; f++)
                            Ve($i[f], c);
                        break;
                    case "source":
                        Ve("error", c);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Ve("error", c),
                        Ve("load", c);
                        break;
                    case "details":
                        Ve("toggle", c);
                        break;
                    case "input":
                        Gt(c, p),
                        Ve("invalid", c);
                        break;
                    case "select":
                        c._wrapperState = {
                            wasMultiple: !!p.multiple
                        },
                        Ve("invalid", c);
                        break;
                    case "textarea":
                        kh(c, p),
                        Ve("invalid", c)
                    }
                    uu(o, p),
                    f = null;
                    for (var x in p)
                        if (p.hasOwnProperty(x)) {
                            var C = p[x];
                            x === "children" ? typeof C == "string" ? c.textContent !== C && (p.suppressHydrationWarning !== !0 && ba(c.textContent, C, n),
                            f = ["children", C]) : typeof C == "number" && c.textContent !== "" + C && (p.suppressHydrationWarning !== !0 && ba(c.textContent, C, n),
                            f = ["children", "" + C]) : a.hasOwnProperty(x) && C != null && x === "onScroll" && Ve("scroll", c)
                        }
                    switch (o) {
                    case "input":
                        Kt(c),
                        un(c, p, !0);
                        break;
                    case "textarea":
                        Kt(c),
                        Ch(c);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof p.onClick == "function" && (c.onclick = Sa)
                    }
                    c = f,
                    s.updateQueue = c,
                    c !== null && (s.flags |= 4)
                } else {
                    x = f.nodeType === 9 ? f : f.ownerDocument,
                    n === "http://www.w3.org/1999/xhtml" && (n = Th(o)),
                    n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = x.createElement("div"),
                    n.innerHTML = "<script><\/script>",
                    n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = x.createElement(o, {
                        is: c.is
                    }) : (n = x.createElement(o),
                    o === "select" && (x = n,
                    c.multiple ? x.multiple = !0 : c.size && (x.size = c.size))) : n = x.createElementNS(n, o),
                    n[En] = s,
                    n[Wi] = c,
                    Fm(n, s, !1, !1),
                    s.stateNode = n;
                    e: {
                        switch (x = cu(o, c),
                        o) {
                        case "dialog":
                            Ve("cancel", n),
                            Ve("close", n),
                            f = c;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Ve("load", n),
                            f = c;
                            break;
                        case "video":
                        case "audio":
                            for (f = 0; f < $i.length; f++)
                                Ve($i[f], n);
                            f = c;
                            break;
                        case "source":
                            Ve("error", n),
                            f = c;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Ve("error", n),
                            Ve("load", n),
                            f = c;
                            break;
                        case "details":
                            Ve("toggle", n),
                            f = c;
                            break;
                        case "input":
                            Gt(n, c),
                            f = Qt(n, c),
                            Ve("invalid", n);
                            break;
                        case "option":
                            f = c;
                            break;
                        case "select":
                            n._wrapperState = {
                                wasMultiple: !!c.multiple
                            },
                            f = U({}, c, {
                                value: void 0
                            }),
                            Ve("invalid", n);
                            break;
                        case "textarea":
                            kh(n, c),
                            f = Ln(n, c),
                            Ve("invalid", n);
                            break;
                        default:
                            f = c
                        }
                        uu(o, f),
                        C = f;
                        for (p in C)
                            if (C.hasOwnProperty(p)) {
                                var _ = C[p];
                                p === "style" ? Rh(n, _) : p === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0,
                                _ != null && _h(n, _)) : p === "children" ? typeof _ == "string" ? (o !== "textarea" || _ !== "") && Ei(n, _) : typeof _ == "number" && Ei(n, "" + _) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (a.hasOwnProperty(p) ? _ != null && p === "onScroll" && Ve("scroll", n) : _ != null && A(n, p, _, x))
                            }
                        switch (o) {
                        case "input":
                            Kt(n),
                            un(n, c, !1);
                            break;
                        case "textarea":
                            Kt(n),
                            Ch(n);
                            break;
                        case "option":
                            c.value != null && n.setAttribute("value", "" + Ce(c.value));
                            break;
                        case "select":
                            n.multiple = !!c.multiple,
                            p = c.value,
                            p != null ? er(n, !!c.multiple, p, !1) : c.defaultValue != null && er(n, !!c.multiple, c.defaultValue, !0);
                            break;
                        default:
                            typeof f.onClick == "function" && (n.onclick = Sa)
                        }
                        switch (o) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            c = !!c.autoFocus;
                            break e;
                        case "img":
                            c = !0;
                            break e;
                        default:
                            c = !1
                        }
                    }
                    c && (s.flags |= 4)
                }
                s.ref !== null && (s.flags |= 512,
                s.flags |= 2097152)
            }
            return bt(s),
            null;
        case 6:
            if (n && s.stateNode != null)
                Bm(n, s, n.memoizedProps, c);
            else {
                if (typeof c != "string" && s.stateNode === null)
                    throw Error(r(166));
                if (o = qr(Xi.current),
                qr(Cn.current),
                Ra(s)) {
                    if (c = s.stateNode,
                    o = s.memoizedProps,
                    c[En] = s,
                    (p = c.nodeValue !== o) && (n = zt,
                    n !== null))
                        switch (n.tag) {
                        case 3:
                            ba(c.nodeValue, o, (n.mode & 1) !== 0);
                            break;
                        case 5:
                            n.memoizedProps.suppressHydrationWarning !== !0 && ba(c.nodeValue, o, (n.mode & 1) !== 0)
                        }
                    p && (s.flags |= 4)
                } else
                    c = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(c),
                    c[En] = s,
                    s.stateNode = c
            }
            return bt(s),
            null;
        case 13:
            if (Be(He),
            c = s.memoizedState,
            n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
                if ($e && $t !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0)
                    $p(),
                    Ds(),
                    s.flags |= 98560,
                    p = !1;
                else if (p = Ra(s),
                c !== null && c.dehydrated !== null) {
                    if (n === null) {
                        if (!p)
                            throw Error(r(318));
                        if (p = s.memoizedState,
                        p = p !== null ? p.dehydrated : null,
                        !p)
                            throw Error(r(317));
                        p[En] = s
                    } else
                        Ds(),
                        (s.flags & 128) === 0 && (s.memoizedState = null),
                        s.flags |= 4;
                    bt(s),
                    p = !1
                } else
                    hn !== null && (Bc(hn),
                    hn = null),
                    p = !0;
                if (!p)
                    return s.flags & 65536 ? s : null
            }
            return (s.flags & 128) !== 0 ? (s.lanes = o,
            s) : (c = c !== null,
            c !== (n !== null && n.memoizedState !== null) && c && (s.child.flags |= 8192,
            (s.mode & 1) !== 0 && (n === null || (He.current & 1) !== 0 ? rt === 0 && (rt = 3) : $c())),
            s.updateQueue !== null && (s.flags |= 4),
            bt(s),
            null);
        case 4:
            return Bs(),
            Rc(n, s),
            n === null && Hi(s.stateNode.containerInfo),
            bt(s),
            null;
        case 10:
            return rc(s.type._context),
            bt(s),
            null;
        case 17:
            return Ot(s.type) && Ea(),
            bt(s),
            null;
        case 19:
            if (Be(He),
            p = s.memoizedState,
            p === null)
                return bt(s),
                null;
            if (c = (s.flags & 128) !== 0,
            x = p.rendering,
            x === null)
                if (c)
                    no(p, !1);
                else {
                    if (rt !== 0 || n !== null && (n.flags & 128) !== 0)
                        for (n = s.child; n !== null; ) {
                            if (x = La(n),
                            x !== null) {
                                for (s.flags |= 128,
                                no(p, !1),
                                c = x.updateQueue,
                                c !== null && (s.updateQueue = c,
                                s.flags |= 4),
                                s.subtreeFlags = 0,
                                c = o,
                                o = s.child; o !== null; )
                                    p = o,
                                    n = c,
                                    p.flags &= 14680066,
                                    x = p.alternate,
                                    x === null ? (p.childLanes = 0,
                                    p.lanes = n,
                                    p.child = null,
                                    p.subtreeFlags = 0,
                                    p.memoizedProps = null,
                                    p.memoizedState = null,
                                    p.updateQueue = null,
                                    p.dependencies = null,
                                    p.stateNode = null) : (p.childLanes = x.childLanes,
                                    p.lanes = x.lanes,
                                    p.child = x.child,
                                    p.subtreeFlags = 0,
                                    p.deletions = null,
                                    p.memoizedProps = x.memoizedProps,
                                    p.memoizedState = x.memoizedState,
                                    p.updateQueue = x.updateQueue,
                                    p.type = x.type,
                                    n = x.dependencies,
                                    p.dependencies = n === null ? null : {
                                        lanes: n.lanes,
                                        firstContext: n.firstContext
                                    }),
                                    o = o.sibling;
                                return Fe(He, He.current & 1 | 2),
                                s.child
                            }
                            n = n.sibling
                        }
                    p.tail !== null && Ye() > Hs && (s.flags |= 128,
                    c = !0,
                    no(p, !1),
                    s.lanes = 4194304)
                }
            else {
                if (!c)
                    if (n = La(x),
                    n !== null) {
                        if (s.flags |= 128,
                        c = !0,
                        o = n.updateQueue,
                        o !== null && (s.updateQueue = o,
                        s.flags |= 4),
                        no(p, !0),
                        p.tail === null && p.tailMode === "hidden" && !x.alternate && !$e)
                            return bt(s),
                            null
                    } else
                        2 * Ye() - p.renderingStartTime > Hs && o !== 1073741824 && (s.flags |= 128,
                        c = !0,
                        no(p, !1),
                        s.lanes = 4194304);
                p.isBackwards ? (x.sibling = s.child,
                s.child = x) : (o = p.last,
                o !== null ? o.sibling = x : s.child = x,
                p.last = x)
            }
            return p.tail !== null ? (s = p.tail,
            p.rendering = s,
            p.tail = s.sibling,
            p.renderingStartTime = Ye(),
            s.sibling = null,
            o = He.current,
            Fe(He, c ? o & 1 | 2 : o & 1),
            s) : (bt(s),
            null);
        case 22:
        case 23:
            return zc(),
            c = s.memoizedState !== null,
            n !== null && n.memoizedState !== null !== c && (s.flags |= 8192),
            c && (s.mode & 1) !== 0 ? (Ht & 1073741824) !== 0 && (bt(s),
            s.subtreeFlags & 6 && (s.flags |= 8192)) : bt(s),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(r(156, s.tag))
    }
    function Wb(n, s) {
        switch (Xu(s),
        s.tag) {
        case 1:
            return Ot(s.type) && Ea(),
            n = s.flags,
            n & 65536 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 3:
            return Bs(),
            Be(Nt),
            Be(xt),
            cc(),
            n = s.flags,
            (n & 65536) !== 0 && (n & 128) === 0 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 5:
            return lc(s),
            null;
        case 13:
            if (Be(He),
            n = s.memoizedState,
            n !== null && n.dehydrated !== null) {
                if (s.alternate === null)
                    throw Error(r(340));
                Ds()
            }
            return n = s.flags,
            n & 65536 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 19:
            return Be(He),
            null;
        case 4:
            return Bs(),
            null;
        case 10:
            return rc(s.type._context),
            null;
        case 22:
        case 23:
            return zc(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Ha = !1
      , St = !1
      , Kb = typeof WeakSet == "function" ? WeakSet : Set
      , te = null;
    function zs(n, s) {
        var o = n.ref;
        if (o !== null)
            if (typeof o == "function")
                try {
                    o(null)
                } catch (c) {
                    Ke(n, s, c)
                }
            else
                o.current = null
    }
    function Ac(n, s, o) {
        try {
            o()
        } catch (c) {
            Ke(n, s, c)
        }
    }
    var Um = !1;
    function Qb(n, s) {
        if (zu = ca,
        n = xp(),
        Mu(n)) {
            if ("selectionStart"in n)
                var o = {
                    start: n.selectionStart,
                    end: n.selectionEnd
                };
            else
                e: {
                    o = (o = n.ownerDocument) && o.defaultView || window;
                    var c = o.getSelection && o.getSelection();
                    if (c && c.rangeCount !== 0) {
                        o = c.anchorNode;
                        var f = c.anchorOffset
                          , p = c.focusNode;
                        c = c.focusOffset;
                        try {
                            o.nodeType,
                            p.nodeType
                        } catch {
                            o = null;
                            break e
                        }
                        var x = 0
                          , C = -1
                          , _ = -1
                          , B = 0
                          , q = 0
                          , W = n
                          , H = null;
                        t: for (; ; ) {
                            for (var Y; W !== o || f !== 0 && W.nodeType !== 3 || (C = x + f),
                            W !== p || c !== 0 && W.nodeType !== 3 || (_ = x + c),
                            W.nodeType === 3 && (x += W.nodeValue.length),
                            (Y = W.firstChild) !== null; )
                                H = W,
                                W = Y;
                            for (; ; ) {
                                if (W === n)
                                    break t;
                                if (H === o && ++B === f && (C = x),
                                H === p && ++q === c && (_ = x),
                                (Y = W.nextSibling) !== null)
                                    break;
                                W = H,
                                H = W.parentNode
                            }
                            W = Y
                        }
                        o = C === -1 || _ === -1 ? null : {
                            start: C,
                            end: _
                        }
                    } else
                        o = null
                }
            o = o || {
                start: 0,
                end: 0
            }
        } else
            o = null;
        for ($u = {
            focusedElem: n,
            selectionRange: o
        },
        ca = !1,
        te = s; te !== null; )
            if (s = te,
            n = s.child,
            (s.subtreeFlags & 1028) !== 0 && n !== null)
                n.return = s,
                te = n;
            else
                for (; te !== null; ) {
                    s = te;
                    try {
                        var ne = s.alternate;
                        if ((s.flags & 1024) !== 0)
                            switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (ne !== null) {
                                    var ie = ne.memoizedProps
                                      , Xe = ne.memoizedState
                                      , D = s.stateNode
                                      , N = D.getSnapshotBeforeUpdate(s.elementType === s.type ? ie : pn(s.type, ie), Xe);
                                    D.__reactInternalSnapshotBeforeUpdate = N
                                }
                                break;
                            case 3:
                                var I = s.stateNode.containerInfo;
                                I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(r(163))
                            }
                    } catch (K) {
                        Ke(s, s.return, K)
                    }
                    if (n = s.sibling,
                    n !== null) {
                        n.return = s.return,
                        te = n;
                        break
                    }
                    te = s.return
                }
        return ne = Um,
        Um = !1,
        ne
    }
    function ro(n, s, o) {
        var c = s.updateQueue;
        if (c = c !== null ? c.lastEffect : null,
        c !== null) {
            var f = c = c.next;
            do {
                if ((f.tag & n) === n) {
                    var p = f.destroy;
                    f.destroy = void 0,
                    p !== void 0 && Ac(s, o, p)
                }
                f = f.next
            } while (f !== c)
        }
    }
    function qa(n, s) {
        if (s = s.updateQueue,
        s = s !== null ? s.lastEffect : null,
        s !== null) {
            var o = s = s.next;
            do {
                if ((o.tag & n) === n) {
                    var c = o.create;
                    o.destroy = c()
                }
                o = o.next
            } while (o !== s)
        }
    }
    function Nc(n) {
        var s = n.ref;
        if (s !== null) {
            var o = n.stateNode;
            switch (n.tag) {
            case 5:
                n = o;
                break;
            default:
                n = o
            }
            typeof s == "function" ? s(n) : s.current = n
        }
    }
    function zm(n) {
        var s = n.alternate;
        s !== null && (n.alternate = null,
        zm(s)),
        n.child = null,
        n.deletions = null,
        n.sibling = null,
        n.tag === 5 && (s = n.stateNode,
        s !== null && (delete s[En],
        delete s[Wi],
        delete s[Ku],
        delete s[Ab],
        delete s[Nb])),
        n.stateNode = null,
        n.return = null,
        n.dependencies = null,
        n.memoizedProps = null,
        n.memoizedState = null,
        n.pendingProps = null,
        n.stateNode = null,
        n.updateQueue = null
    }
    function $m(n) {
        return n.tag === 5 || n.tag === 3 || n.tag === 4
    }
    function Hm(n) {
        e: for (; ; ) {
            for (; n.sibling === null; ) {
                if (n.return === null || $m(n.return))
                    return null;
                n = n.return
            }
            for (n.sibling.return = n.return,
            n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
                if (n.flags & 2 || n.child === null || n.tag === 4)
                    continue e;
                n.child.return = n,
                n = n.child
            }
            if (!(n.flags & 2))
                return n.stateNode
        }
    }
    function Oc(n, s, o) {
        var c = n.tag;
        if (c === 5 || c === 6)
            n = n.stateNode,
            s ? o.nodeType === 8 ? o.parentNode.insertBefore(n, s) : o.insertBefore(n, s) : (o.nodeType === 8 ? (s = o.parentNode,
            s.insertBefore(n, o)) : (s = o,
            s.appendChild(n)),
            o = o._reactRootContainer,
            o != null || s.onclick !== null || (s.onclick = Sa));
        else if (c !== 4 && (n = n.child,
        n !== null))
            for (Oc(n, s, o),
            n = n.sibling; n !== null; )
                Oc(n, s, o),
                n = n.sibling
    }
    function jc(n, s, o) {
        var c = n.tag;
        if (c === 5 || c === 6)
            n = n.stateNode,
            s ? o.insertBefore(n, s) : o.appendChild(n);
        else if (c !== 4 && (n = n.child,
        n !== null))
            for (jc(n, s, o),
            n = n.sibling; n !== null; )
                jc(n, s, o),
                n = n.sibling
    }
    var ft = null
      , mn = !1;
    function hr(n, s, o) {
        for (o = o.child; o !== null; )
            qm(n, s, o),
            o = o.sibling
    }
    function qm(n, s, o) {
        if (kn && typeof kn.onCommitFiberUnmount == "function")
            try {
                kn.onCommitFiberUnmount(sa, o)
            } catch {}
        switch (o.tag) {
        case 5:
            St || zs(o, s);
        case 6:
            var c = ft
              , f = mn;
            ft = null,
            hr(n, s, o),
            ft = c,
            mn = f,
            ft !== null && (mn ? (n = ft,
            o = o.stateNode,
            n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : ft.removeChild(o.stateNode));
            break;
        case 18:
            ft !== null && (mn ? (n = ft,
            o = o.stateNode,
            n.nodeType === 8 ? Wu(n.parentNode, o) : n.nodeType === 1 && Wu(n, o),
            Li(n)) : Wu(ft, o.stateNode));
            break;
        case 4:
            c = ft,
            f = mn,
            ft = o.stateNode.containerInfo,
            mn = !0,
            hr(n, s, o),
            ft = c,
            mn = f;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!St && (c = o.updateQueue,
            c !== null && (c = c.lastEffect,
            c !== null))) {
                f = c = c.next;
                do {
                    var p = f
                      , x = p.destroy;
                    p = p.tag,
                    x !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && Ac(o, s, x),
                    f = f.next
                } while (f !== c)
            }
            hr(n, s, o);
            break;
        case 1:
            if (!St && (zs(o, s),
            c = o.stateNode,
            typeof c.componentWillUnmount == "function"))
                try {
                    c.props = o.memoizedProps,
                    c.state = o.memoizedState,
                    c.componentWillUnmount()
                } catch (C) {
                    Ke(o, s, C)
                }
            hr(n, s, o);
            break;
        case 21:
            hr(n, s, o);
            break;
        case 22:
            o.mode & 1 ? (St = (c = St) || o.memoizedState !== null,
            hr(n, s, o),
            St = c) : hr(n, s, o);
            break;
        default:
            hr(n, s, o)
        }
    }
    function Wm(n) {
        var s = n.updateQueue;
        if (s !== null) {
            n.updateQueue = null;
            var o = n.stateNode;
            o === null && (o = n.stateNode = new Kb),
            s.forEach(function(c) {
                var f = r2.bind(null, n, c);
                o.has(c) || (o.add(c),
                c.then(f, f))
            })
        }
    }
    function gn(n, s) {
        var o = s.deletions;
        if (o !== null)
            for (var c = 0; c < o.length; c++) {
                var f = o[c];
                try {
                    var p = n
                      , x = s
                      , C = x;
                    e: for (; C !== null; ) {
                        switch (C.tag) {
                        case 5:
                            ft = C.stateNode,
                            mn = !1;
                            break e;
                        case 3:
                            ft = C.stateNode.containerInfo,
                            mn = !0;
                            break e;
                        case 4:
                            ft = C.stateNode.containerInfo,
                            mn = !0;
                            break e
                        }
                        C = C.return
                    }
                    if (ft === null)
                        throw Error(r(160));
                    qm(p, x, f),
                    ft = null,
                    mn = !1;
                    var _ = f.alternate;
                    _ !== null && (_.return = null),
                    f.return = null
                } catch (B) {
                    Ke(f, s, B)
                }
            }
        if (s.subtreeFlags & 12854)
            for (s = s.child; s !== null; )
                Km(s, n),
                s = s.sibling
    }
    function Km(n, s) {
        var o = n.alternate
          , c = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (gn(s, n),
            _n(n),
            c & 4) {
                try {
                    ro(3, n, n.return),
                    qa(3, n)
                } catch (ie) {
                    Ke(n, n.return, ie)
                }
                try {
                    ro(5, n, n.return)
                } catch (ie) {
                    Ke(n, n.return, ie)
                }
            }
            break;
        case 1:
            gn(s, n),
            _n(n),
            c & 512 && o !== null && zs(o, o.return);
            break;
        case 5:
            if (gn(s, n),
            _n(n),
            c & 512 && o !== null && zs(o, o.return),
            n.flags & 32) {
                var f = n.stateNode;
                try {
                    Ei(f, "")
                } catch (ie) {
                    Ke(n, n.return, ie)
                }
            }
            if (c & 4 && (f = n.stateNode,
            f != null)) {
                var p = n.memoizedProps
                  , x = o !== null ? o.memoizedProps : p
                  , C = n.type
                  , _ = n.updateQueue;
                if (n.updateQueue = null,
                _ !== null)
                    try {
                        C === "input" && p.type === "radio" && p.name != null && be(f, p),
                        cu(C, x);
                        var B = cu(C, p);
                        for (x = 0; x < _.length; x += 2) {
                            var q = _[x]
                              , W = _[x + 1];
                            q === "style" ? Rh(f, W) : q === "dangerouslySetInnerHTML" ? _h(f, W) : q === "children" ? Ei(f, W) : A(f, q, W, B)
                        }
                        switch (C) {
                        case "input":
                            dt(f, p);
                            break;
                        case "textarea":
                            Eh(f, p);
                            break;
                        case "select":
                            var H = f._wrapperState.wasMultiple;
                            f._wrapperState.wasMultiple = !!p.multiple;
                            var Y = p.value;
                            Y != null ? er(f, !!p.multiple, Y, !1) : H !== !!p.multiple && (p.defaultValue != null ? er(f, !!p.multiple, p.defaultValue, !0) : er(f, !!p.multiple, p.multiple ? [] : "", !1))
                        }
                        f[Wi] = p
                    } catch (ie) {
                        Ke(n, n.return, ie)
                    }
            }
            break;
        case 6:
            if (gn(s, n),
            _n(n),
            c & 4) {
                if (n.stateNode === null)
                    throw Error(r(162));
                f = n.stateNode,
                p = n.memoizedProps;
                try {
                    f.nodeValue = p
                } catch (ie) {
                    Ke(n, n.return, ie)
                }
            }
            break;
        case 3:
            if (gn(s, n),
            _n(n),
            c & 4 && o !== null && o.memoizedState.isDehydrated)
                try {
                    Li(s.containerInfo)
                } catch (ie) {
                    Ke(n, n.return, ie)
                }
            break;
        case 4:
            gn(s, n),
            _n(n);
            break;
        case 13:
            gn(s, n),
            _n(n),
            f = n.child,
            f.flags & 8192 && (p = f.memoizedState !== null,
            f.stateNode.isHidden = p,
            !p || f.alternate !== null && f.alternate.memoizedState !== null || (Dc = Ye())),
            c & 4 && Wm(n);
            break;
        case 22:
            if (q = o !== null && o.memoizedState !== null,
            n.mode & 1 ? (St = (B = St) || q,
            gn(s, n),
            St = B) : gn(s, n),
            _n(n),
            c & 8192) {
                if (B = n.memoizedState !== null,
                (n.stateNode.isHidden = B) && !q && (n.mode & 1) !== 0)
                    for (te = n,
                    q = n.child; q !== null; ) {
                        for (W = te = q; te !== null; ) {
                            switch (H = te,
                            Y = H.child,
                            H.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                ro(4, H, H.return);
                                break;
                            case 1:
                                zs(H, H.return);
                                var ne = H.stateNode;
                                if (typeof ne.componentWillUnmount == "function") {
                                    c = H,
                                    o = H.return;
                                    try {
                                        s = c,
                                        ne.props = s.memoizedProps,
                                        ne.state = s.memoizedState,
                                        ne.componentWillUnmount()
                                    } catch (ie) {
                                        Ke(c, o, ie)
                                    }
                                }
                                break;
                            case 5:
                                zs(H, H.return);
                                break;
                            case 22:
                                if (H.memoizedState !== null) {
                                    Ym(W);
                                    continue
                                }
                            }
                            Y !== null ? (Y.return = H,
                            te = Y) : Ym(W)
                        }
                        q = q.sibling
                    }
                e: for (q = null,
                W = n; ; ) {
                    if (W.tag === 5) {
                        if (q === null) {
                            q = W;
                            try {
                                f = W.stateNode,
                                B ? (p = f.style,
                                typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (C = W.stateNode,
                                _ = W.memoizedProps.style,
                                x = _ != null && _.hasOwnProperty("display") ? _.display : null,
                                C.style.display = Ph("display", x))
                            } catch (ie) {
                                Ke(n, n.return, ie)
                            }
                        }
                    } else if (W.tag === 6) {
                        if (q === null)
                            try {
                                W.stateNode.nodeValue = B ? "" : W.memoizedProps
                            } catch (ie) {
                                Ke(n, n.return, ie)
                            }
                    } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
                        W.child.return = W,
                        W = W.child;
                        continue
                    }
                    if (W === n)
                        break e;
                    for (; W.sibling === null; ) {
                        if (W.return === null || W.return === n)
                            break e;
                        q === W && (q = null),
                        W = W.return
                    }
                    q === W && (q = null),
                    W.sibling.return = W.return,
                    W = W.sibling
                }
            }
            break;
        case 19:
            gn(s, n),
            _n(n),
            c & 4 && Wm(n);
            break;
        case 21:
            break;
        default:
            gn(s, n),
            _n(n)
        }
    }
    function _n(n) {
        var s = n.flags;
        if (s & 2) {
            try {
                e: {
                    for (var o = n.return; o !== null; ) {
                        if ($m(o)) {
                            var c = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(r(160))
                }
                switch (c.tag) {
                case 5:
                    var f = c.stateNode;
                    c.flags & 32 && (Ei(f, ""),
                    c.flags &= -33);
                    var p = Hm(n);
                    jc(n, p, f);
                    break;
                case 3:
                case 4:
                    var x = c.stateNode.containerInfo
                      , C = Hm(n);
                    Oc(n, C, x);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (_) {
                Ke(n, n.return, _)
            }
            n.flags &= -3
        }
        s & 4096 && (n.flags &= -4097)
    }
    function Gb(n, s, o) {
        te = n,
        Qm(n)
    }
    function Qm(n, s, o) {
        for (var c = (n.mode & 1) !== 0; te !== null; ) {
            var f = te
              , p = f.child;
            if (f.tag === 22 && c) {
                var x = f.memoizedState !== null || Ha;
                if (!x) {
                    var C = f.alternate
                      , _ = C !== null && C.memoizedState !== null || St;
                    C = Ha;
                    var B = St;
                    if (Ha = x,
                    (St = _) && !B)
                        for (te = f; te !== null; )
                            x = te,
                            _ = x.child,
                            x.tag === 22 && x.memoizedState !== null ? Xm(f) : _ !== null ? (_.return = x,
                            te = _) : Xm(f);
                    for (; p !== null; )
                        te = p,
                        Qm(p),
                        p = p.sibling;
                    te = f,
                    Ha = C,
                    St = B
                }
                Gm(n)
            } else
                (f.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = f,
                te = p) : Gm(n)
        }
    }
    function Gm(n) {
        for (; te !== null; ) {
            var s = te;
            if ((s.flags & 8772) !== 0) {
                var o = s.alternate;
                try {
                    if ((s.flags & 8772) !== 0)
                        switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                            St || qa(5, s);
                            break;
                        case 1:
                            var c = s.stateNode;
                            if (s.flags & 4 && !St)
                                if (o === null)
                                    c.componentDidMount();
                                else {
                                    var f = s.elementType === s.type ? o.memoizedProps : pn(s.type, o.memoizedProps);
                                    c.componentDidUpdate(f, o.memoizedState, c.__reactInternalSnapshotBeforeUpdate)
                                }
                            var p = s.updateQueue;
                            p !== null && Yp(s, p, c);
                            break;
                        case 3:
                            var x = s.updateQueue;
                            if (x !== null) {
                                if (o = null,
                                s.child !== null)
                                    switch (s.child.tag) {
                                    case 5:
                                        o = s.child.stateNode;
                                        break;
                                    case 1:
                                        o = s.child.stateNode
                                    }
                                Yp(s, x, o)
                            }
                            break;
                        case 5:
                            var C = s.stateNode;
                            if (o === null && s.flags & 4) {
                                o = C;
                                var _ = s.memoizedProps;
                                switch (s.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    _.autoFocus && o.focus();
                                    break;
                                case "img":
                                    _.src && (o.src = _.src)
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
                            if (s.memoizedState === null) {
                                var B = s.alternate;
                                if (B !== null) {
                                    var q = B.memoizedState;
                                    if (q !== null) {
                                        var W = q.dehydrated;
                                        W !== null && Li(W)
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
                            throw Error(r(163))
                        }
                    St || s.flags & 512 && Nc(s)
                } catch (H) {
                    Ke(s, s.return, H)
                }
            }
            if (s === n) {
                te = null;
                break
            }
            if (o = s.sibling,
            o !== null) {
                o.return = s.return,
                te = o;
                break
            }
            te = s.return
        }
    }
    function Ym(n) {
        for (; te !== null; ) {
            var s = te;
            if (s === n) {
                te = null;
                break
            }
            var o = s.sibling;
            if (o !== null) {
                o.return = s.return,
                te = o;
                break
            }
            te = s.return
        }
    }
    function Xm(n) {
        for (; te !== null; ) {
            var s = te;
            try {
                switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    var o = s.return;
                    try {
                        qa(4, s)
                    } catch (_) {
                        Ke(s, o, _)
                    }
                    break;
                case 1:
                    var c = s.stateNode;
                    if (typeof c.componentDidMount == "function") {
                        var f = s.return;
                        try {
                            c.componentDidMount()
                        } catch (_) {
                            Ke(s, f, _)
                        }
                    }
                    var p = s.return;
                    try {
                        Nc(s)
                    } catch (_) {
                        Ke(s, p, _)
                    }
                    break;
                case 5:
                    var x = s.return;
                    try {
                        Nc(s)
                    } catch (_) {
                        Ke(s, x, _)
                    }
                }
            } catch (_) {
                Ke(s, s.return, _)
            }
            if (s === n) {
                te = null;
                break
            }
            var C = s.sibling;
            if (C !== null) {
                C.return = s.return,
                te = C;
                break
            }
            te = s.return
        }
    }
    var Yb = Math.ceil
      , Wa = M.ReactCurrentDispatcher
      , Mc = M.ReactCurrentOwner
      , en = M.ReactCurrentBatchConfig
      , Oe = 0
      , at = null
      , et = null
      , ht = 0
      , Ht = 0
      , $s = lr(0)
      , rt = 0
      , so = null
      , Kr = 0
      , Ka = 0
      , Lc = 0
      , io = null
      , Mt = null
      , Dc = 0
      , Hs = 1 / 0
      , $n = null
      , Qa = !1
      , Ic = null
      , pr = null
      , Ga = !1
      , mr = null
      , Ya = 0
      , oo = 0
      , Fc = null
      , Xa = -1
      , Ja = 0;
    function Rt() {
        return (Oe & 6) !== 0 ? Ye() : Xa !== -1 ? Xa : Xa = Ye()
    }
    function gr(n) {
        return (n.mode & 1) === 0 ? 1 : (Oe & 2) !== 0 && ht !== 0 ? ht & -ht : jb.transition !== null ? (Ja === 0 && (Ja = Hh()),
        Ja) : (n = Le,
        n !== 0 || (n = window.event,
        n = n === void 0 ? 16 : Zh(n.type)),
        n)
    }
    function yn(n, s, o, c) {
        if (50 < oo)
            throw oo = 0,
            Fc = null,
            Error(r(185));
        Ai(n, o, c),
        ((Oe & 2) === 0 || n !== at) && (n === at && ((Oe & 2) === 0 && (Ka |= o),
        rt === 4 && yr(n, ht)),
        Lt(n, c),
        o === 1 && Oe === 0 && (s.mode & 1) === 0 && (Hs = Ye() + 500,
        Ta && cr()))
    }
    function Lt(n, s) {
        var o = n.callbackNode;
        j1(n, s);
        var c = aa(n, n === at ? ht : 0);
        if (c === 0)
            o !== null && Uh(o),
            n.callbackNode = null,
            n.callbackPriority = 0;
        else if (s = c & -c,
        n.callbackPriority !== s) {
            if (o != null && Uh(o),
            s === 1)
                n.tag === 0 ? Ob(Zm.bind(null, n)) : Fp(Zm.bind(null, n)),
                Pb(function() {
                    (Oe & 6) === 0 && cr()
                }),
                o = null;
            else {
                switch (qh(c)) {
                case 1:
                    o = yu;
                    break;
                case 4:
                    o = zh;
                    break;
                case 16:
                    o = ra;
                    break;
                case 536870912:
                    o = $h;
                    break;
                default:
                    o = ra
                }
                o = ag(o, Jm.bind(null, n))
            }
            n.callbackPriority = s,
            n.callbackNode = o
        }
    }
    function Jm(n, s) {
        if (Xa = -1,
        Ja = 0,
        (Oe & 6) !== 0)
            throw Error(r(327));
        var o = n.callbackNode;
        if (qs() && n.callbackNode !== o)
            return null;
        var c = aa(n, n === at ? ht : 0);
        if (c === 0)
            return null;
        if ((c & 30) !== 0 || (c & n.expiredLanes) !== 0 || s)
            s = Za(n, c);
        else {
            s = c;
            var f = Oe;
            Oe |= 2;
            var p = tg();
            (at !== n || ht !== s) && ($n = null,
            Hs = Ye() + 500,
            Gr(n, s));
            do
                try {
                    Zb();
                    break
                } catch (C) {
                    eg(n, C)
                }
            while (!0);
            nc(),
            Wa.current = p,
            Oe = f,
            et !== null ? s = 0 : (at = null,
            ht = 0,
            s = rt)
        }
        if (s !== 0) {
            if (s === 2 && (f = vu(n),
            f !== 0 && (c = f,
            s = Vc(n, f))),
            s === 1)
                throw o = so,
                Gr(n, 0),
                yr(n, c),
                Lt(n, Ye()),
                o;
            if (s === 6)
                yr(n, c);
            else {
                if (f = n.current.alternate,
                (c & 30) === 0 && !Xb(f) && (s = Za(n, c),
                s === 2 && (p = vu(n),
                p !== 0 && (c = p,
                s = Vc(n, p))),
                s === 1))
                    throw o = so,
                    Gr(n, 0),
                    yr(n, c),
                    Lt(n, Ye()),
                    o;
                switch (n.finishedWork = f,
                n.finishedLanes = c,
                s) {
                case 0:
                case 1:
                    throw Error(r(345));
                case 2:
                    Yr(n, Mt, $n);
                    break;
                case 3:
                    if (yr(n, c),
                    (c & 130023424) === c && (s = Dc + 500 - Ye(),
                    10 < s)) {
                        if (aa(n, 0) !== 0)
                            break;
                        if (f = n.suspendedLanes,
                        (f & c) !== c) {
                            Rt(),
                            n.pingedLanes |= n.suspendedLanes & f;
                            break
                        }
                        n.timeoutHandle = qu(Yr.bind(null, n, Mt, $n), s);
                        break
                    }
                    Yr(n, Mt, $n);
                    break;
                case 4:
                    if (yr(n, c),
                    (c & 4194240) === c)
                        break;
                    for (s = n.eventTimes,
                    f = -1; 0 < c; ) {
                        var x = 31 - dn(c);
                        p = 1 << x,
                        x = s[x],
                        x > f && (f = x),
                        c &= ~p
                    }
                    if (c = f,
                    c = Ye() - c,
                    c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * Yb(c / 1960)) - c,
                    10 < c) {
                        n.timeoutHandle = qu(Yr.bind(null, n, Mt, $n), c);
                        break
                    }
                    Yr(n, Mt, $n);
                    break;
                case 5:
                    Yr(n, Mt, $n);
                    break;
                default:
                    throw Error(r(329))
                }
            }
        }
        return Lt(n, Ye()),
        n.callbackNode === o ? Jm.bind(null, n) : null
    }
    function Vc(n, s) {
        var o = io;
        return n.current.memoizedState.isDehydrated && (Gr(n, s).flags |= 256),
        n = Za(n, s),
        n !== 2 && (s = Mt,
        Mt = o,
        s !== null && Bc(s)),
        n
    }
    function Bc(n) {
        Mt === null ? Mt = n : Mt.push.apply(Mt, n)
    }
    function Xb(n) {
        for (var s = n; ; ) {
            if (s.flags & 16384) {
                var o = s.updateQueue;
                if (o !== null && (o = o.stores,
                o !== null))
                    for (var c = 0; c < o.length; c++) {
                        var f = o[c]
                          , p = f.getSnapshot;
                        f = f.value;
                        try {
                            if (!fn(p(), f))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = s.child,
            s.subtreeFlags & 16384 && o !== null)
                o.return = s,
                s = o;
            else {
                if (s === n)
                    break;
                for (; s.sibling === null; ) {
                    if (s.return === null || s.return === n)
                        return !0;
                    s = s.return
                }
                s.sibling.return = s.return,
                s = s.sibling
            }
        }
        return !0
    }
    function yr(n, s) {
        for (s &= ~Lc,
        s &= ~Ka,
        n.suspendedLanes |= s,
        n.pingedLanes &= ~s,
        n = n.expirationTimes; 0 < s; ) {
            var o = 31 - dn(s)
              , c = 1 << o;
            n[o] = -1,
            s &= ~c
        }
    }
    function Zm(n) {
        if ((Oe & 6) !== 0)
            throw Error(r(327));
        qs();
        var s = aa(n, 0);
        if ((s & 1) === 0)
            return Lt(n, Ye()),
            null;
        var o = Za(n, s);
        if (n.tag !== 0 && o === 2) {
            var c = vu(n);
            c !== 0 && (s = c,
            o = Vc(n, c))
        }
        if (o === 1)
            throw o = so,
            Gr(n, 0),
            yr(n, s),
            Lt(n, Ye()),
            o;
        if (o === 6)
            throw Error(r(345));
        return n.finishedWork = n.current.alternate,
        n.finishedLanes = s,
        Yr(n, Mt, $n),
        Lt(n, Ye()),
        null
    }
    function Uc(n, s) {
        var o = Oe;
        Oe |= 1;
        try {
            return n(s)
        } finally {
            Oe = o,
            Oe === 0 && (Hs = Ye() + 500,
            Ta && cr())
        }
    }
    function Qr(n) {
        mr !== null && mr.tag === 0 && (Oe & 6) === 0 && qs();
        var s = Oe;
        Oe |= 1;
        var o = en.transition
          , c = Le;
        try {
            if (en.transition = null,
            Le = 1,
            n)
                return n()
        } finally {
            Le = c,
            en.transition = o,
            Oe = s,
            (Oe & 6) === 0 && cr()
        }
    }
    function zc() {
        Ht = $s.current,
        Be($s)
    }
    function Gr(n, s) {
        n.finishedWork = null,
        n.finishedLanes = 0;
        var o = n.timeoutHandle;
        if (o !== -1 && (n.timeoutHandle = -1,
        _b(o)),
        et !== null)
            for (o = et.return; o !== null; ) {
                var c = o;
                switch (Xu(c),
                c.tag) {
                case 1:
                    c = c.type.childContextTypes,
                    c != null && Ea();
                    break;
                case 3:
                    Bs(),
                    Be(Nt),
                    Be(xt),
                    cc();
                    break;
                case 5:
                    lc(c);
                    break;
                case 4:
                    Bs();
                    break;
                case 13:
                    Be(He);
                    break;
                case 19:
                    Be(He);
                    break;
                case 10:
                    rc(c.type._context);
                    break;
                case 22:
                case 23:
                    zc()
                }
                o = o.return
            }
        if (at = n,
        et = n = vr(n.current, null),
        ht = Ht = s,
        rt = 0,
        so = null,
        Lc = Ka = Kr = 0,
        Mt = io = null,
        Hr !== null) {
            for (s = 0; s < Hr.length; s++)
                if (o = Hr[s],
                c = o.interleaved,
                c !== null) {
                    o.interleaved = null;
                    var f = c.next
                      , p = o.pending;
                    if (p !== null) {
                        var x = p.next;
                        p.next = f,
                        c.next = x
                    }
                    o.pending = c
                }
            Hr = null
        }
        return n
    }
    function eg(n, s) {
        do {
            var o = et;
            try {
                if (nc(),
                Da.current = Ba,
                Ia) {
                    for (var c = qe.memoizedState; c !== null; ) {
                        var f = c.queue;
                        f !== null && (f.pending = null),
                        c = c.next
                    }
                    Ia = !1
                }
                if (Wr = 0,
                ot = nt = qe = null,
                Ji = !1,
                Zi = 0,
                Mc.current = null,
                o === null || o.return === null) {
                    rt = 1,
                    so = s,
                    et = null;
                    break
                }
                e: {
                    var p = n
                      , x = o.return
                      , C = o
                      , _ = s;
                    if (s = ht,
                    C.flags |= 32768,
                    _ !== null && typeof _ == "object" && typeof _.then == "function") {
                        var B = _
                          , q = C
                          , W = q.tag;
                        if ((q.mode & 1) === 0 && (W === 0 || W === 11 || W === 15)) {
                            var H = q.alternate;
                            H ? (q.updateQueue = H.updateQueue,
                            q.memoizedState = H.memoizedState,
                            q.lanes = H.lanes) : (q.updateQueue = null,
                            q.memoizedState = null)
                        }
                        var Y = Cm(x);
                        if (Y !== null) {
                            Y.flags &= -257,
                            Tm(Y, x, C, p, s),
                            Y.mode & 1 && Em(p, B, s),
                            s = Y,
                            _ = B;
                            var ne = s.updateQueue;
                            if (ne === null) {
                                var ie = new Set;
                                ie.add(_),
                                s.updateQueue = ie
                            } else
                                ne.add(_);
                            break e
                        } else {
                            if ((s & 1) === 0) {
                                Em(p, B, s),
                                $c();
                                break e
                            }
                            _ = Error(r(426))
                        }
                    } else if ($e && C.mode & 1) {
                        var Xe = Cm(x);
                        if (Xe !== null) {
                            (Xe.flags & 65536) === 0 && (Xe.flags |= 256),
                            Tm(Xe, x, C, p, s),
                            ec(Us(_, C));
                            break e
                        }
                    }
                    p = _ = Us(_, C),
                    rt !== 4 && (rt = 2),
                    io === null ? io = [p] : io.push(p),
                    p = x;
                    do {
                        switch (p.tag) {
                        case 3:
                            p.flags |= 65536,
                            s &= -s,
                            p.lanes |= s;
                            var D = Sm(p, _, s);
                            Gp(p, D);
                            break e;
                        case 1:
                            C = _;
                            var N = p.type
                              , I = p.stateNode;
                            if ((p.flags & 128) === 0 && (typeof N.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (pr === null || !pr.has(I)))) {
                                p.flags |= 65536,
                                s &= -s,
                                p.lanes |= s;
                                var K = km(p, C, s);
                                Gp(p, K);
                                break e
                            }
                        }
                        p = p.return
                    } while (p !== null)
                }
                rg(o)
            } catch (ae) {
                s = ae,
                et === o && o !== null && (et = o = o.return);
                continue
            }
            break
        } while (!0)
    }
    function tg() {
        var n = Wa.current;
        return Wa.current = Ba,
        n === null ? Ba : n
    }
    function $c() {
        (rt === 0 || rt === 3 || rt === 2) && (rt = 4),
        at === null || (Kr & 268435455) === 0 && (Ka & 268435455) === 0 || yr(at, ht)
    }
    function Za(n, s) {
        var o = Oe;
        Oe |= 2;
        var c = tg();
        (at !== n || ht !== s) && ($n = null,
        Gr(n, s));
        do
            try {
                Jb();
                break
            } catch (f) {
                eg(n, f)
            }
        while (!0);
        if (nc(),
        Oe = o,
        Wa.current = c,
        et !== null)
            throw Error(r(261));
        return at = null,
        ht = 0,
        rt
    }
    function Jb() {
        for (; et !== null; )
            ng(et)
    }
    function Zb() {
        for (; et !== null && !E1(); )
            ng(et)
    }
    function ng(n) {
        var s = og(n.alternate, n, Ht);
        n.memoizedProps = n.pendingProps,
        s === null ? rg(n) : et = s,
        Mc.current = null
    }
    function rg(n) {
        var s = n;
        do {
            var o = s.alternate;
            if (n = s.return,
            (s.flags & 32768) === 0) {
                if (o = qb(o, s, Ht),
                o !== null) {
                    et = o;
                    return
                }
            } else {
                if (o = Wb(o, s),
                o !== null) {
                    o.flags &= 32767,
                    et = o;
                    return
                }
                if (n !== null)
                    n.flags |= 32768,
                    n.subtreeFlags = 0,
                    n.deletions = null;
                else {
                    rt = 6,
                    et = null;
                    return
                }
            }
            if (s = s.sibling,
            s !== null) {
                et = s;
                return
            }
            et = s = n
        } while (s !== null);
        rt === 0 && (rt = 5)
    }
    function Yr(n, s, o) {
        var c = Le
          , f = en.transition;
        try {
            en.transition = null,
            Le = 1,
            e2(n, s, o, c)
        } finally {
            en.transition = f,
            Le = c
        }
        return null
    }
    function e2(n, s, o, c) {
        do
            qs();
        while (mr !== null);
        if ((Oe & 6) !== 0)
            throw Error(r(327));
        o = n.finishedWork;
        var f = n.finishedLanes;
        if (o === null)
            return null;
        if (n.finishedWork = null,
        n.finishedLanes = 0,
        o === n.current)
            throw Error(r(177));
        n.callbackNode = null,
        n.callbackPriority = 0;
        var p = o.lanes | o.childLanes;
        if (M1(n, p),
        n === at && (et = at = null,
        ht = 0),
        (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Ga || (Ga = !0,
        ag(ra, function() {
            return qs(),
            null
        })),
        p = (o.flags & 15990) !== 0,
        (o.subtreeFlags & 15990) !== 0 || p) {
            p = en.transition,
            en.transition = null;
            var x = Le;
            Le = 1;
            var C = Oe;
            Oe |= 4,
            Mc.current = null,
            Qb(n, o),
            Km(o, n),
            wb($u),
            ca = !!zu,
            $u = zu = null,
            n.current = o,
            Gb(o),
            C1(),
            Oe = C,
            Le = x,
            en.transition = p
        } else
            n.current = o;
        if (Ga && (Ga = !1,
        mr = n,
        Ya = f),
        p = n.pendingLanes,
        p === 0 && (pr = null),
        P1(o.stateNode),
        Lt(n, Ye()),
        s !== null)
            for (c = n.onRecoverableError,
            o = 0; o < s.length; o++)
                f = s[o],
                c(f.value, {
                    componentStack: f.stack,
                    digest: f.digest
                });
        if (Qa)
            throw Qa = !1,
            n = Ic,
            Ic = null,
            n;
        return (Ya & 1) !== 0 && n.tag !== 0 && qs(),
        p = n.pendingLanes,
        (p & 1) !== 0 ? n === Fc ? oo++ : (oo = 0,
        Fc = n) : oo = 0,
        cr(),
        null
    }
    function qs() {
        if (mr !== null) {
            var n = qh(Ya)
              , s = en.transition
              , o = Le;
            try {
                if (en.transition = null,
                Le = 16 > n ? 16 : n,
                mr === null)
                    var c = !1;
                else {
                    if (n = mr,
                    mr = null,
                    Ya = 0,
                    (Oe & 6) !== 0)
                        throw Error(r(331));
                    var f = Oe;
                    for (Oe |= 4,
                    te = n.current; te !== null; ) {
                        var p = te
                          , x = p.child;
                        if ((te.flags & 16) !== 0) {
                            var C = p.deletions;
                            if (C !== null) {
                                for (var _ = 0; _ < C.length; _++) {
                                    var B = C[_];
                                    for (te = B; te !== null; ) {
                                        var q = te;
                                        switch (q.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ro(8, q, p)
                                        }
                                        var W = q.child;
                                        if (W !== null)
                                            W.return = q,
                                            te = W;
                                        else
                                            for (; te !== null; ) {
                                                q = te;
                                                var H = q.sibling
                                                  , Y = q.return;
                                                if (zm(q),
                                                q === B) {
                                                    te = null;
                                                    break
                                                }
                                                if (H !== null) {
                                                    H.return = Y,
                                                    te = H;
                                                    break
                                                }
                                                te = Y
                                            }
                                    }
                                }
                                var ne = p.alternate;
                                if (ne !== null) {
                                    var ie = ne.child;
                                    if (ie !== null) {
                                        ne.child = null;
                                        do {
                                            var Xe = ie.sibling;
                                            ie.sibling = null,
                                            ie = Xe
                                        } while (ie !== null)
                                    }
                                }
                                te = p
                            }
                        }
                        if ((p.subtreeFlags & 2064) !== 0 && x !== null)
                            x.return = p,
                            te = x;
                        else
                            e: for (; te !== null; ) {
                                if (p = te,
                                (p.flags & 2048) !== 0)
                                    switch (p.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ro(9, p, p.return)
                                    }
                                var D = p.sibling;
                                if (D !== null) {
                                    D.return = p.return,
                                    te = D;
                                    break e
                                }
                                te = p.return
                            }
                    }
                    var N = n.current;
                    for (te = N; te !== null; ) {
                        x = te;
                        var I = x.child;
                        if ((x.subtreeFlags & 2064) !== 0 && I !== null)
                            I.return = x,
                            te = I;
                        else
                            e: for (x = N; te !== null; ) {
                                if (C = te,
                                (C.flags & 2048) !== 0)
                                    try {
                                        switch (C.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            qa(9, C)
                                        }
                                    } catch (ae) {
                                        Ke(C, C.return, ae)
                                    }
                                if (C === x) {
                                    te = null;
                                    break e
                                }
                                var K = C.sibling;
                                if (K !== null) {
                                    K.return = C.return,
                                    te = K;
                                    break e
                                }
                                te = C.return
                            }
                    }
                    if (Oe = f,
                    cr(),
                    kn && typeof kn.onPostCommitFiberRoot == "function")
                        try {
                            kn.onPostCommitFiberRoot(sa, n)
                        } catch {}
                    c = !0
                }
                return c
            } finally {
                Le = o,
                en.transition = s
            }
        }
        return !1
    }
    function sg(n, s, o) {
        s = Us(o, s),
        s = Sm(n, s, 1),
        n = fr(n, s, 1),
        s = Rt(),
        n !== null && (Ai(n, 1, s),
        Lt(n, s))
    }
    function Ke(n, s, o) {
        if (n.tag === 3)
            sg(n, n, o);
        else
            for (; s !== null; ) {
                if (s.tag === 3) {
                    sg(s, n, o);
                    break
                } else if (s.tag === 1) {
                    var c = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (pr === null || !pr.has(c))) {
                        n = Us(o, n),
                        n = km(s, n, 1),
                        s = fr(s, n, 1),
                        n = Rt(),
                        s !== null && (Ai(s, 1, n),
                        Lt(s, n));
                        break
                    }
                }
                s = s.return
            }
    }
    function t2(n, s, o) {
        var c = n.pingCache;
        c !== null && c.delete(s),
        s = Rt(),
        n.pingedLanes |= n.suspendedLanes & o,
        at === n && (ht & o) === o && (rt === 4 || rt === 3 && (ht & 130023424) === ht && 500 > Ye() - Dc ? Gr(n, 0) : Lc |= o),
        Lt(n, s)
    }
    function ig(n, s) {
        s === 0 && ((n.mode & 1) === 0 ? s = 1 : (s = oa,
        oa <<= 1,
        (oa & 130023424) === 0 && (oa = 4194304)));
        var o = Rt();
        n = Bn(n, s),
        n !== null && (Ai(n, s, o),
        Lt(n, o))
    }
    function n2(n) {
        var s = n.memoizedState
          , o = 0;
        s !== null && (o = s.retryLane),
        ig(n, o)
    }
    function r2(n, s) {
        var o = 0;
        switch (n.tag) {
        case 13:
            var c = n.stateNode
              , f = n.memoizedState;
            f !== null && (o = f.retryLane);
            break;
        case 19:
            c = n.stateNode;
            break;
        default:
            throw Error(r(314))
        }
        c !== null && c.delete(s),
        ig(n, o)
    }
    var og;
    og = function(n, s, o) {
        if (n !== null)
            if (n.memoizedProps !== s.pendingProps || Nt.current)
                jt = !0;
            else {
                if ((n.lanes & o) === 0 && (s.flags & 128) === 0)
                    return jt = !1,
                    Hb(n, s, o);
                jt = (n.flags & 131072) !== 0
            }
        else
            jt = !1,
            $e && (s.flags & 1048576) !== 0 && Vp(s, Pa, s.index);
        switch (s.lanes = 0,
        s.tag) {
        case 2:
            var c = s.type;
            $a(n, s),
            n = s.pendingProps;
            var f = js(s, xt.current);
            Vs(s, o),
            f = hc(null, s, c, n, f, o);
            var p = pc();
            return s.flags |= 1,
            typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (s.tag = 1,
            s.memoizedState = null,
            s.updateQueue = null,
            Ot(c) ? (p = !0,
            Ca(s)) : p = !1,
            s.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null,
            oc(s),
            f.updater = Ua,
            s.stateNode = f,
            f._reactInternals = s,
            wc(s, c, n, o),
            s = Ec(null, s, c, !0, p, o)) : (s.tag = 0,
            $e && p && Yu(s),
            Pt(null, s, f, o),
            s = s.child),
            s;
        case 16:
            c = s.elementType;
            e: {
                switch ($a(n, s),
                n = s.pendingProps,
                f = c._init,
                c = f(c._payload),
                s.type = c,
                f = s.tag = i2(c),
                n = pn(c, n),
                f) {
                case 0:
                    s = kc(null, s, c, n, o);
                    break e;
                case 1:
                    s = Om(null, s, c, n, o);
                    break e;
                case 11:
                    s = _m(null, s, c, n, o);
                    break e;
                case 14:
                    s = Pm(null, s, c, pn(c.type, n), o);
                    break e
                }
                throw Error(r(306, c, ""))
            }
            return s;
        case 0:
            return c = s.type,
            f = s.pendingProps,
            f = s.elementType === c ? f : pn(c, f),
            kc(n, s, c, f, o);
        case 1:
            return c = s.type,
            f = s.pendingProps,
            f = s.elementType === c ? f : pn(c, f),
            Om(n, s, c, f, o);
        case 3:
            e: {
                if (jm(s),
                n === null)
                    throw Error(r(387));
                c = s.pendingProps,
                p = s.memoizedState,
                f = p.element,
                Qp(n, s),
                Ma(s, c, null, o);
                var x = s.memoizedState;
                if (c = x.element,
                p.isDehydrated)
                    if (p = {
                        element: c,
                        isDehydrated: !1,
                        cache: x.cache,
                        pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
                        transitions: x.transitions
                    },
                    s.updateQueue.baseState = p,
                    s.memoizedState = p,
                    s.flags & 256) {
                        f = Us(Error(r(423)), s),
                        s = Mm(n, s, c, o, f);
                        break e
                    } else if (c !== f) {
                        f = Us(Error(r(424)), s),
                        s = Mm(n, s, c, o, f);
                        break e
                    } else
                        for ($t = ar(s.stateNode.containerInfo.firstChild),
                        zt = s,
                        $e = !0,
                        hn = null,
                        o = Wp(s, null, c, o),
                        s.child = o; o; )
                            o.flags = o.flags & -3 | 4096,
                            o = o.sibling;
                else {
                    if (Ds(),
                    c === f) {
                        s = zn(n, s, o);
                        break e
                    }
                    Pt(n, s, c, o)
                }
                s = s.child
            }
            return s;
        case 5:
            return Xp(s),
            n === null && Zu(s),
            c = s.type,
            f = s.pendingProps,
            p = n !== null ? n.memoizedProps : null,
            x = f.children,
            Hu(c, f) ? x = null : p !== null && Hu(c, p) && (s.flags |= 32),
            Nm(n, s),
            Pt(n, s, x, o),
            s.child;
        case 6:
            return n === null && Zu(s),
            null;
        case 13:
            return Lm(n, s, o);
        case 4:
            return ac(s, s.stateNode.containerInfo),
            c = s.pendingProps,
            n === null ? s.child = Is(s, null, c, o) : Pt(n, s, c, o),
            s.child;
        case 11:
            return c = s.type,
            f = s.pendingProps,
            f = s.elementType === c ? f : pn(c, f),
            _m(n, s, c, f, o);
        case 7:
            return Pt(n, s, s.pendingProps, o),
            s.child;
        case 8:
            return Pt(n, s, s.pendingProps.children, o),
            s.child;
        case 12:
            return Pt(n, s, s.pendingProps.children, o),
            s.child;
        case 10:
            e: {
                if (c = s.type._context,
                f = s.pendingProps,
                p = s.memoizedProps,
                x = f.value,
                Fe(Na, c._currentValue),
                c._currentValue = x,
                p !== null)
                    if (fn(p.value, x)) {
                        if (p.children === f.children && !Nt.current) {
                            s = zn(n, s, o);
                            break e
                        }
                    } else
                        for (p = s.child,
                        p !== null && (p.return = s); p !== null; ) {
                            var C = p.dependencies;
                            if (C !== null) {
                                x = p.child;
                                for (var _ = C.firstContext; _ !== null; ) {
                                    if (_.context === c) {
                                        if (p.tag === 1) {
                                            _ = Un(-1, o & -o),
                                            _.tag = 2;
                                            var B = p.updateQueue;
                                            if (B !== null) {
                                                B = B.shared;
                                                var q = B.pending;
                                                q === null ? _.next = _ : (_.next = q.next,
                                                q.next = _),
                                                B.pending = _
                                            }
                                        }
                                        p.lanes |= o,
                                        _ = p.alternate,
                                        _ !== null && (_.lanes |= o),
                                        sc(p.return, o, s),
                                        C.lanes |= o;
                                        break
                                    }
                                    _ = _.next
                                }
                            } else if (p.tag === 10)
                                x = p.type === s.type ? null : p.child;
                            else if (p.tag === 18) {
                                if (x = p.return,
                                x === null)
                                    throw Error(r(341));
                                x.lanes |= o,
                                C = x.alternate,
                                C !== null && (C.lanes |= o),
                                sc(x, o, s),
                                x = p.sibling
                            } else
                                x = p.child;
                            if (x !== null)
                                x.return = p;
                            else
                                for (x = p; x !== null; ) {
                                    if (x === s) {
                                        x = null;
                                        break
                                    }
                                    if (p = x.sibling,
                                    p !== null) {
                                        p.return = x.return,
                                        x = p;
                                        break
                                    }
                                    x = x.return
                                }
                            p = x
                        }
                Pt(n, s, f.children, o),
                s = s.child
            }
            return s;
        case 9:
            return f = s.type,
            c = s.pendingProps.children,
            Vs(s, o),
            f = Jt(f),
            c = c(f),
            s.flags |= 1,
            Pt(n, s, c, o),
            s.child;
        case 14:
            return c = s.type,
            f = pn(c, s.pendingProps),
            f = pn(c.type, f),
            Pm(n, s, c, f, o);
        case 15:
            return Rm(n, s, s.type, s.pendingProps, o);
        case 17:
            return c = s.type,
            f = s.pendingProps,
            f = s.elementType === c ? f : pn(c, f),
            $a(n, s),
            s.tag = 1,
            Ot(c) ? (n = !0,
            Ca(s)) : n = !1,
            Vs(s, o),
            wm(s, c, f),
            wc(s, c, f, o),
            Ec(null, s, c, !0, n, o);
        case 19:
            return Im(n, s, o);
        case 22:
            return Am(n, s, o)
        }
        throw Error(r(156, s.tag))
    }
    ;
    function ag(n, s) {
        return Bh(n, s)
    }
    function s2(n, s, o, c) {
        this.tag = n,
        this.key = o,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = s,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = c,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function tn(n, s, o, c) {
        return new s2(n,s,o,c)
    }
    function Hc(n) {
        return n = n.prototype,
        !(!n || !n.isReactComponent)
    }
    function i2(n) {
        if (typeof n == "function")
            return Hc(n) ? 1 : 0;
        if (n != null) {
            if (n = n.$$typeof,
            n === Ae)
                return 11;
            if (n === De)
                return 14
        }
        return 2
    }
    function vr(n, s) {
        var o = n.alternate;
        return o === null ? (o = tn(n.tag, s, n.key, n.mode),
        o.elementType = n.elementType,
        o.type = n.type,
        o.stateNode = n.stateNode,
        o.alternate = n,
        n.alternate = o) : (o.pendingProps = s,
        o.type = n.type,
        o.flags = 0,
        o.subtreeFlags = 0,
        o.deletions = null),
        o.flags = n.flags & 14680064,
        o.childLanes = n.childLanes,
        o.lanes = n.lanes,
        o.child = n.child,
        o.memoizedProps = n.memoizedProps,
        o.memoizedState = n.memoizedState,
        o.updateQueue = n.updateQueue,
        s = n.dependencies,
        o.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        },
        o.sibling = n.sibling,
        o.index = n.index,
        o.ref = n.ref,
        o
    }
    function el(n, s, o, c, f, p) {
        var x = 2;
        if (c = n,
        typeof n == "function")
            Hc(n) && (x = 1);
        else if (typeof n == "string")
            x = 5;
        else
            e: switch (n) {
            case J:
                return Xr(o.children, f, p, s);
            case V:
                x = 8,
                f |= 8;
                break;
            case ee:
                return n = tn(12, o, s, f | 2),
                n.elementType = ee,
                n.lanes = p,
                n;
            case ze:
                return n = tn(13, o, s, f),
                n.elementType = ze,
                n.lanes = p,
                n;
            case Re:
                return n = tn(19, o, s, f),
                n.elementType = Re,
                n.lanes = p,
                n;
            case me:
                return tl(o, f, p, s);
            default:
                if (typeof n == "object" && n !== null)
                    switch (n.$$typeof) {
                    case ue:
                        x = 10;
                        break e;
                    case le:
                        x = 9;
                        break e;
                    case Ae:
                        x = 11;
                        break e;
                    case De:
                        x = 14;
                        break e;
                    case Ne:
                        x = 16,
                        c = null;
                        break e
                    }
                throw Error(r(130, n == null ? n : typeof n, ""))
            }
        return s = tn(x, o, s, f),
        s.elementType = n,
        s.type = c,
        s.lanes = p,
        s
    }
    function Xr(n, s, o, c) {
        return n = tn(7, n, c, s),
        n.lanes = o,
        n
    }
    function tl(n, s, o, c) {
        return n = tn(22, n, c, s),
        n.elementType = me,
        n.lanes = o,
        n.stateNode = {
            isHidden: !1
        },
        n
    }
    function qc(n, s, o) {
        return n = tn(6, n, null, s),
        n.lanes = o,
        n
    }
    function Wc(n, s, o) {
        return s = tn(4, n.children !== null ? n.children : [], n.key, s),
        s.lanes = o,
        s.stateNode = {
            containerInfo: n.containerInfo,
            pendingChildren: null,
            implementation: n.implementation
        },
        s
    }
    function o2(n, s, o, c, f) {
        this.tag = s,
        this.containerInfo = n,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = xu(0),
        this.expirationTimes = xu(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = xu(0),
        this.identifierPrefix = c,
        this.onRecoverableError = f,
        this.mutableSourceEagerHydrationData = null
    }
    function Kc(n, s, o, c, f, p, x, C, _) {
        return n = new o2(n,s,o,C,_),
        s === 1 ? (s = 1,
        p === !0 && (s |= 8)) : s = 0,
        p = tn(3, null, null, s),
        n.current = p,
        p.stateNode = n,
        p.memoizedState = {
            element: c,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        oc(p),
        n
    }
    function a2(n, s, o) {
        var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: $,
            key: c == null ? null : "" + c,
            children: n,
            containerInfo: s,
            implementation: o
        }
    }
    function lg(n) {
        if (!n)
            return ur;
        n = n._reactInternals;
        e: {
            if (Vr(n) !== n || n.tag !== 1)
                throw Error(r(170));
            var s = n;
            do {
                switch (s.tag) {
                case 3:
                    s = s.stateNode.context;
                    break e;
                case 1:
                    if (Ot(s.type)) {
                        s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                s = s.return
            } while (s !== null);
            throw Error(r(171))
        }
        if (n.tag === 1) {
            var o = n.type;
            if (Ot(o))
                return Dp(n, o, s)
        }
        return s
    }
    function ug(n, s, o, c, f, p, x, C, _) {
        return n = Kc(o, c, !0, n, f, p, x, C, _),
        n.context = lg(null),
        o = n.current,
        c = Rt(),
        f = gr(o),
        p = Un(c, f),
        p.callback = s ?? null,
        fr(o, p, f),
        n.current.lanes = f,
        Ai(n, f, c),
        Lt(n, c),
        n
    }
    function nl(n, s, o, c) {
        var f = s.current
          , p = Rt()
          , x = gr(f);
        return o = lg(o),
        s.context === null ? s.context = o : s.pendingContext = o,
        s = Un(p, x),
        s.payload = {
            element: n
        },
        c = c === void 0 ? null : c,
        c !== null && (s.callback = c),
        n = fr(f, s, x),
        n !== null && (yn(n, f, x, p),
        ja(n, f, x)),
        x
    }
    function rl(n) {
        if (n = n.current,
        !n.child)
            return null;
        switch (n.child.tag) {
        case 5:
            return n.child.stateNode;
        default:
            return n.child.stateNode
        }
    }
    function cg(n, s) {
        if (n = n.memoizedState,
        n !== null && n.dehydrated !== null) {
            var o = n.retryLane;
            n.retryLane = o !== 0 && o < s ? o : s
        }
    }
    function Qc(n, s) {
        cg(n, s),
        (n = n.alternate) && cg(n, s)
    }
    function l2() {
        return null
    }
    var dg = typeof reportError == "function" ? reportError : function(n) {
        console.error(n)
    }
    ;
    function Gc(n) {
        this._internalRoot = n
    }
    sl.prototype.render = Gc.prototype.render = function(n) {
        var s = this._internalRoot;
        if (s === null)
            throw Error(r(409));
        nl(n, s, null, null)
    }
    ,
    sl.prototype.unmount = Gc.prototype.unmount = function() {
        var n = this._internalRoot;
        if (n !== null) {
            this._internalRoot = null;
            var s = n.containerInfo;
            Qr(function() {
                nl(null, n, null, null)
            }),
            s[Dn] = null
        }
    }
    ;
    function sl(n) {
        this._internalRoot = n
    }
    sl.prototype.unstable_scheduleHydration = function(n) {
        if (n) {
            var s = Qh();
            n = {
                blockedOn: null,
                target: n,
                priority: s
            };
            for (var o = 0; o < sr.length && s !== 0 && s < sr[o].priority; o++)
                ;
            sr.splice(o, 0, n),
            o === 0 && Xh(n)
        }
    }
    ;
    function Yc(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
    }
    function il(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    }
    function fg() {}
    function u2(n, s, o, c, f) {
        if (f) {
            if (typeof c == "function") {
                var p = c;
                c = function() {
                    var B = rl(x);
                    p.call(B)
                }
            }
            var x = ug(s, c, n, 0, null, !1, !1, "", fg);
            return n._reactRootContainer = x,
            n[Dn] = x.current,
            Hi(n.nodeType === 8 ? n.parentNode : n),
            Qr(),
            x
        }
        for (; f = n.lastChild; )
            n.removeChild(f);
        if (typeof c == "function") {
            var C = c;
            c = function() {
                var B = rl(_);
                C.call(B)
            }
        }
        var _ = Kc(n, 0, !1, null, null, !1, !1, "", fg);
        return n._reactRootContainer = _,
        n[Dn] = _.current,
        Hi(n.nodeType === 8 ? n.parentNode : n),
        Qr(function() {
            nl(s, _, o, c)
        }),
        _
    }
    function ol(n, s, o, c, f) {
        var p = o._reactRootContainer;
        if (p) {
            var x = p;
            if (typeof f == "function") {
                var C = f;
                f = function() {
                    var _ = rl(x);
                    C.call(_)
                }
            }
            nl(s, x, n, f)
        } else
            x = u2(o, s, n, f, c);
        return rl(x)
    }
    Wh = function(n) {
        switch (n.tag) {
        case 3:
            var s = n.stateNode;
            if (s.current.memoizedState.isDehydrated) {
                var o = Ri(s.pendingLanes);
                o !== 0 && (wu(s, o | 1),
                Lt(s, Ye()),
                (Oe & 6) === 0 && (Hs = Ye() + 500,
                cr()))
            }
            break;
        case 13:
            Qr(function() {
                var c = Bn(n, 1);
                if (c !== null) {
                    var f = Rt();
                    yn(c, n, 1, f)
                }
            }),
            Qc(n, 1)
        }
    }
    ,
    bu = function(n) {
        if (n.tag === 13) {
            var s = Bn(n, 134217728);
            if (s !== null) {
                var o = Rt();
                yn(s, n, 134217728, o)
            }
            Qc(n, 134217728)
        }
    }
    ,
    Kh = function(n) {
        if (n.tag === 13) {
            var s = gr(n)
              , o = Bn(n, s);
            if (o !== null) {
                var c = Rt();
                yn(o, n, s, c)
            }
            Qc(n, s)
        }
    }
    ,
    Qh = function() {
        return Le
    }
    ,
    Gh = function(n, s) {
        var o = Le;
        try {
            return Le = n,
            s()
        } finally {
            Le = o
        }
    }
    ,
    hu = function(n, s, o) {
        switch (s) {
        case "input":
            if (dt(n, o),
            s = o.name,
            o.type === "radio" && s != null) {
                for (o = n; o.parentNode; )
                    o = o.parentNode;
                for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'),
                s = 0; s < o.length; s++) {
                    var c = o[s];
                    if (c !== n && c.form === n.form) {
                        var f = ka(c);
                        if (!f)
                            throw Error(r(90));
                        ct(c),
                        dt(c, f)
                    }
                }
            }
            break;
        case "textarea":
            Eh(n, o);
            break;
        case "select":
            s = o.value,
            s != null && er(n, !!o.multiple, s, !1)
        }
    }
    ,
    jh = Uc,
    Mh = Qr;
    var c2 = {
        usingClientEntryPoint: !1,
        Events: [Ki, Ns, ka, Nh, Oh, Uc]
    }
      , ao = {
        findFiberByHostInstance: Br,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , d2 = {
        bundleType: ao.bundleType,
        version: ao.version,
        rendererPackageName: ao.rendererPackageName,
        rendererConfig: ao.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: M.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(n) {
            return n = Fh(n),
            n === null ? null : n.stateNode
        },
        findFiberByHostInstance: ao.findFiberByHostInstance || l2,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!al.isDisabled && al.supportsFiber)
            try {
                sa = al.inject(d2),
                kn = al
            } catch {}
    }
    return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c2,
    Dt.createPortal = function(n, s) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Yc(s))
            throw Error(r(200));
        return a2(n, s, null, o)
    }
    ,
    Dt.createRoot = function(n, s) {
        if (!Yc(n))
            throw Error(r(299));
        var o = !1
          , c = ""
          , f = dg;
        return s != null && (s.unstable_strictMode === !0 && (o = !0),
        s.identifierPrefix !== void 0 && (c = s.identifierPrefix),
        s.onRecoverableError !== void 0 && (f = s.onRecoverableError)),
        s = Kc(n, 1, !1, null, null, o, !1, c, f),
        n[Dn] = s.current,
        Hi(n.nodeType === 8 ? n.parentNode : n),
        new Gc(s)
    }
    ,
    Dt.findDOMNode = function(n) {
        if (n == null)
            return null;
        if (n.nodeType === 1)
            return n;
        var s = n._reactInternals;
        if (s === void 0)
            throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","),
            Error(r(268, n)));
        return n = Fh(s),
        n = n === null ? null : n.stateNode,
        n
    }
    ,
    Dt.flushSync = function(n) {
        return Qr(n)
    }
    ,
    Dt.hydrate = function(n, s, o) {
        if (!il(s))
            throw Error(r(200));
        return ol(null, n, s, !0, o)
    }
    ,
    Dt.hydrateRoot = function(n, s, o) {
        if (!Yc(n))
            throw Error(r(405));
        var c = o != null && o.hydratedSources || null
          , f = !1
          , p = ""
          , x = dg;
        if (o != null && (o.unstable_strictMode === !0 && (f = !0),
        o.identifierPrefix !== void 0 && (p = o.identifierPrefix),
        o.onRecoverableError !== void 0 && (x = o.onRecoverableError)),
        s = ug(s, null, n, 1, o ?? null, f, !1, p, x),
        n[Dn] = s.current,
        Hi(n),
        c)
            for (n = 0; n < c.length; n++)
                o = c[n],
                f = o._getVersion,
                f = f(o._source),
                s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [o, f] : s.mutableSourceEagerHydrationData.push(o, f);
        return new sl(s)
    }
    ,
    Dt.render = function(n, s, o) {
        if (!il(s))
            throw Error(r(200));
        return ol(null, n, s, !1, o)
    }
    ,
    Dt.unmountComponentAtNode = function(n) {
        if (!il(n))
            throw Error(r(40));
        return n._reactRootContainer ? (Qr(function() {
            ol(null, null, n, !1, function() {
                n._reactRootContainer = null,
                n[Dn] = null
            })
        }),
        !0) : !1
    }
    ,
    Dt.unstable_batchedUpdates = Uc,
    Dt.unstable_renderSubtreeIntoContainer = function(n, s, o, c) {
        if (!il(o))
            throw Error(r(200));
        if (n == null || n._reactInternals === void 0)
            throw Error(r(38));
        return ol(n, s, o, !1, c)
    }
    ,
    Dt.version = "18.3.1-next-f1338f8080-20240426",
    Dt
}
var bg;
function av() {
    if (bg)
        return ed.exports;
    bg = 1;
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (e) {
                console.error(e)
            }
    }
    return t(),
    ed.exports = b2(),
    ed.exports
}
var Sg;
function S2() {
    if (Sg)
        return ul;
    Sg = 1;
    var t = av();
    return ul.createRoot = t.createRoot,
    ul.hydrateRoot = t.hydrateRoot,
    ul
}
var k2 = S2();
const E2 = ov(k2)
  , C2 = 20
  , T2 = 1e6
  , Qn = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let rd = 0;
function _2() {
    return rd = (rd + 1) % Number.MAX_VALUE,
    rd.toString()
}
const sd = new Map
  , kg = t => {
    if (sd.has(t))
        return;
    const e = setTimeout( () => {
        sd.delete(t),
        ko({
            type: Qn.REMOVE_TOAST,
            toastId: t
        })
    }
    , T2);
    sd.set(t, e)
}
  , P2 = (t, e) => {
    switch (e.type) {
    case Qn.ADD_TOAST:
        return {
            ...t,
            toasts: [e.toast, ...t.toasts].slice(0, C2)
        };
    case Qn.UPDATE_TOAST:
        return {
            ...t,
            toasts: t.toasts.map(r => r.id === e.toast.id ? {
                ...r,
                ...e.toast
            } : r)
        };
    case Qn.DISMISS_TOAST:
        {
            const {toastId: r} = e;
            return r ? kg(r) : t.toasts.forEach(i => {
                kg(i.id)
            }
            ),
            {
                ...t,
                toasts: t.toasts.map(i => i.id === r || r === void 0 ? {
                    ...i,
                    open: !1
                } : i)
            }
        }
    case Qn.REMOVE_TOAST:
        return e.toastId === void 0 ? {
            ...t,
            toasts: []
        } : {
            ...t,
            toasts: t.toasts.filter(r => r.id !== e.toastId)
        }
    }
}
  , wl = [];
let bl = {
    toasts: []
};
function ko(t) {
    bl = P2(bl, t),
    wl.forEach(e => {
        e(bl)
    }
    )
}
function R2({...t}) {
    const e = _2()
      , r = a => ko({
        type: Qn.UPDATE_TOAST,
        toast: {
            ...a,
            id: e
        }
    })
      , i = () => ko({
        type: Qn.DISMISS_TOAST,
        toastId: e
    });
    return ko({
        type: Qn.ADD_TOAST,
        toast: {
            ...t,
            id: e,
            open: !0,
            onOpenChange: a => {
                a || i()
            }
        }
    }),
    {
        id: e,
        dismiss: i,
        update: r
    }
}
function A2() {
    const [t,e] = L.useState(bl);
    return L.useEffect( () => (wl.push(e),
    () => {
        const r = wl.indexOf(e);
        r > -1 && wl.splice(r, 1)
    }
    ), [t]),
    {
        ...t,
        toast: R2,
        dismiss: r => ko({
            type: Qn.DISMISS_TOAST,
            toastId: r
        })
    }
}
function lv(t) {
    var e, r, i = "";
    if (typeof t == "string" || typeof t == "number")
        i += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var a = t.length;
            for (e = 0; e < a; e++)
                t[e] && (r = lv(t[e])) && (i && (i += " "),
                i += r)
        } else
            for (r in t)
                t[r] && (i && (i += " "),
                i += r);
    return i
}
function uv() {
    for (var t, e, r = 0, i = "", a = arguments.length; r < a; r++)
        (t = arguments[r]) && (e = lv(t)) && (i && (i += " "),
        i += e);
    return i
}
const Eg = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t
  , Cg = uv
  , N2 = (t, e) => r => {
    var i;
    if ((e == null ? void 0 : e.variants) == null)
        return Cg(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const {variants: a, defaultVariants: l} = e
      , u = Object.keys(a).map(m => {
        const g = r == null ? void 0 : r[m]
          , y = l == null ? void 0 : l[m];
        if (g === null)
            return null;
        const w = Eg(g) || Eg(y);
        return a[m][w]
    }
    )
      , d = r && Object.entries(r).reduce( (m, g) => {
        let[y,w] = g;
        return w === void 0 || (m[y] = w),
        m
    }
    , {})
      , h = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce( (m, g) => {
        let {class: y, className: w, ...k} = g;
        return Object.entries(k).every(T => {
            let[E,S] = T;
            return Array.isArray(S) ? S.includes({
                ...l,
                ...d
            }[E]) : {
                ...l,
                ...d
            }[E] === S
        }
        ) ? [...m, y, w] : m
    }
    , []);
    return Cg(t, u, h, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O2 = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , cv = (...t) => t.filter( (e, r, i) => !!e && e.trim() !== "" && i.indexOf(e) === r).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var j2 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M2 = L.forwardRef( ({color: t="currentColor", size: e=24, strokeWidth: r=2, absoluteStrokeWidth: i, className: a="", children: l, iconNode: u, ...d}, h) => L.createElement("svg", {
    ref: h,
    ...j2,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(r) * 24 / Number(e) : r,
    className: cv("lucide", a),
    ...d
}, [...u.map( ([m,g]) => L.createElement(m, g)), ...Array.isArray(l) ? l : [l]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = (t, e) => {
    const r = L.forwardRef( ({className: i, ...a}, l) => L.createElement(M2, {
        ref: l,
        iconNode: e,
        className: cv(`lucide-${O2(t)}`, i),
        ...a
    }));
    return r.displayName = `${t}`,
    r
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L2 = [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]
  , D2 = vt("Award", L2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I2 = [["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
}], ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
}]]
  , F2 = vt("Briefcase", I2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V2 = [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]
  , B2 = vt("ChevronDown", V2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U2 = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]
  , z2 = vt("CircleCheck", U2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $2 = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]
  , H2 = vt("Globe", $2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q2 = [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]
  , Rd = vt("Heart", q2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W2 = [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2",
    key: "1m3agn"
}], ["circle", {
    cx: "9",
    cy: "9",
    r: "2",
    key: "af1f0g"
}], ["path", {
    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
    key: "1xmnt7"
}]]
  , K2 = vt("Image", W2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q2 = [["polyline", {
    points: "15 3 21 3 21 9",
    key: "mznyad"
}], ["polyline", {
    points: "9 21 3 21 3 15",
    key: "1avn1i"
}], ["line", {
    x1: "21",
    x2: "14",
    y1: "3",
    y2: "10",
    key: "ota7mn"
}], ["line", {
    x1: "3",
    x2: "10",
    y1: "21",
    y2: "14",
    key: "1atl0r"
}]]
  , dv = vt("Maximize2", Q2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G2 = [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]
  , Y2 = vt("Send", G2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X2 = [["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "2",
    rx: "2",
    ry: "2",
    key: "ngkwjq"
}], ["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "14",
    rx: "2",
    ry: "2",
    key: "iecqi9"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "6",
    y2: "6",
    key: "16zg32"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "18",
    y2: "18",
    key: "nzw8ys"
}]]
  , J2 = vt("Server", X2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z2 = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]
  , $o = vt("Shield", Z2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eS = [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]
  , tS = vt("Sparkles", eS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nS = [["path", {
    d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",
    key: "2ksp49"
}]]
  , rS = vt("StarHalf", nS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sS = [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]
  , fi = vt("Star", sS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iS = [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]
  , oS = vt("TrendingUp", iS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aS = [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]
  , Kl = vt("Users", aS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lS = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , Ol = vt("X", lS)
  , uS = (t, e) => {
    const r = new Array(t.length + e.length);
    for (let i = 0; i < t.length; i++)
        r[i] = t[i];
    for (let i = 0; i < e.length; i++)
        r[t.length + i] = e[i];
    return r
}
  , cS = (t, e) => ({
    classGroupId: t,
    validator: e
})
  , fv = (t=new Map, e=null, r) => ({
    nextPart: t,
    validators: e,
    classGroupId: r
})
  , jl = "-"
  , Tg = []
  , dS = "arbitrary.."
  , fS = t => {
    const e = pS(t)
      , {conflictingClassGroups: r, conflictingClassGroupModifiers: i} = t;
    return {
        getClassGroupId: u => {
            if (u.startsWith("[") && u.endsWith("]"))
                return hS(u);
            const d = u.split(jl)
              , h = d[0] === "" && d.length > 1 ? 1 : 0;
            return hv(d, h, e)
        }
        ,
        getConflictingClassGroupIds: (u, d) => {
            if (d) {
                const h = i[u]
                  , m = r[u];
                return h ? m ? uS(m, h) : h : m || Tg
            }
            return r[u] || Tg
        }
    }
}
  , hv = (t, e, r) => {
    if (t.length - e === 0)
        return r.classGroupId;
    const a = t[e]
      , l = r.nextPart.get(a);
    if (l) {
        const m = hv(t, e + 1, l);
        if (m)
            return m
    }
    const u = r.validators;
    if (u === null)
        return;
    const d = e === 0 ? t.join(jl) : t.slice(e).join(jl)
      , h = u.length;
    for (let m = 0; m < h; m++) {
        const g = u[m];
        if (g.validator(d))
            return g.classGroupId
    }
}
  , hS = t => t.slice(1, -1).indexOf(":") === -1 ? void 0 : ( () => {
    const e = t.slice(1, -1)
      , r = e.indexOf(":")
      , i = e.slice(0, r);
    return i ? dS + i : void 0
}
)()
  , pS = t => {
    const {theme: e, classGroups: r} = t;
    return mS(r, e)
}
  , mS = (t, e) => {
    const r = fv();
    for (const i in t) {
        const a = t[i];
        kf(a, r, i, e)
    }
    return r
}
  , kf = (t, e, r, i) => {
    const a = t.length;
    for (let l = 0; l < a; l++) {
        const u = t[l];
        gS(u, e, r, i)
    }
}
  , gS = (t, e, r, i) => {
    if (typeof t == "string") {
        yS(t, e, r);
        return
    }
    if (typeof t == "function") {
        vS(t, e, r, i);
        return
    }
    xS(t, e, r, i)
}
  , yS = (t, e, r) => {
    const i = t === "" ? e : pv(e, t);
    i.classGroupId = r
}
  , vS = (t, e, r, i) => {
    if (wS(t)) {
        kf(t(i), e, r, i);
        return
    }
    e.validators === null && (e.validators = []),
    e.validators.push(cS(r, t))
}
  , xS = (t, e, r, i) => {
    const a = Object.entries(t)
      , l = a.length;
    for (let u = 0; u < l; u++) {
        const [d,h] = a[u];
        kf(h, pv(e, d), r, i)
    }
}
  , pv = (t, e) => {
    let r = t;
    const i = e.split(jl)
      , a = i.length;
    for (let l = 0; l < a; l++) {
        const u = i[l];
        let d = r.nextPart.get(u);
        d || (d = fv(),
        r.nextPart.set(u, d)),
        r = d
    }
    return r
}
  , wS = t => "isThemeGetter"in t && t.isThemeGetter === !0
  , bS = t => {
    if (t < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let e = 0
      , r = Object.create(null)
      , i = Object.create(null);
    const a = (l, u) => {
        r[l] = u,
        e++,
        e > t && (e = 0,
        i = r,
        r = Object.create(null))
    }
    ;
    return {
        get(l) {
            let u = r[l];
            if (u !== void 0)
                return u;
            if ((u = i[l]) !== void 0)
                return a(l, u),
                u
        },
        set(l, u) {
            l in r ? r[l] = u : a(l, u)
        }
    }
}
  , Ad = "!"
  , _g = ":"
  , SS = []
  , Pg = (t, e, r, i, a) => ({
    modifiers: t,
    hasImportantModifier: e,
    baseClassName: r,
    maybePostfixModifierPosition: i,
    isExternal: a
})
  , kS = t => {
    const {prefix: e, experimentalParseClassName: r} = t;
    let i = a => {
        const l = [];
        let u = 0, d = 0, h = 0, m;
        const g = a.length;
        for (let E = 0; E < g; E++) {
            const S = a[E];
            if (u === 0 && d === 0) {
                if (S === _g) {
                    l.push(a.slice(h, E)),
                    h = E + 1;
                    continue
                }
                if (S === "/") {
                    m = E;
                    continue
                }
            }
            S === "[" ? u++ : S === "]" ? u-- : S === "(" ? d++ : S === ")" && d--
        }
        const y = l.length === 0 ? a : a.slice(h);
        let w = y
          , k = !1;
        y.endsWith(Ad) ? (w = y.slice(0, -1),
        k = !0) : y.startsWith(Ad) && (w = y.slice(1),
        k = !0);
        const T = m && m > h ? m - h : void 0;
        return Pg(l, k, w, T)
    }
    ;
    if (e) {
        const a = e + _g
          , l = i;
        i = u => u.startsWith(a) ? l(u.slice(a.length)) : Pg(SS, !1, u, void 0, !0)
    }
    if (r) {
        const a = i;
        i = l => r({
            className: l,
            parseClassName: a
        })
    }
    return i
}
  , ES = t => {
    const e = new Map;
    return t.orderSensitiveModifiers.forEach( (r, i) => {
        e.set(r, 1e6 + i)
    }
    ),
    r => {
        const i = [];
        let a = [];
        for (let l = 0; l < r.length; l++) {
            const u = r[l]
              , d = u[0] === "["
              , h = e.has(u);
            d || h ? (a.length > 0 && (a.sort(),
            i.push(...a),
            a = []),
            i.push(u)) : a.push(u)
        }
        return a.length > 0 && (a.sort(),
        i.push(...a)),
        i
    }
}
  , CS = t => ({
    cache: bS(t.cacheSize),
    parseClassName: kS(t),
    sortModifiers: ES(t),
    ...fS(t)
})
  , TS = /\s+/
  , _S = (t, e) => {
    const {parseClassName: r, getClassGroupId: i, getConflictingClassGroupIds: a, sortModifiers: l} = e
      , u = []
      , d = t.trim().split(TS);
    let h = "";
    for (let m = d.length - 1; m >= 0; m -= 1) {
        const g = d[m]
          , {isExternal: y, modifiers: w, hasImportantModifier: k, baseClassName: T, maybePostfixModifierPosition: E} = r(g);
        if (y) {
            h = g + (h.length > 0 ? " " + h : h);
            continue
        }
        let S = !!E
          , b = i(S ? T.substring(0, E) : T);
        if (!b) {
            if (!S) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            if (b = i(T),
            !b) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            S = !1
        }
        const P = w.length === 0 ? "" : w.length === 1 ? w[0] : l(w).join(":")
          , A = k ? P + Ad : P
          , M = A + b;
        if (u.indexOf(M) > -1)
            continue;
        u.push(M);
        const F = a(b, S);
        for (let $ = 0; $ < F.length; ++$) {
            const J = F[$];
            u.push(A + J)
        }
        h = g + (h.length > 0 ? " " + h : h)
    }
    return h
}
  , PS = (...t) => {
    let e = 0, r, i, a = "";
    for (; e < t.length; )
        (r = t[e++]) && (i = mv(r)) && (a && (a += " "),
        a += i);
    return a
}
  , mv = t => {
    if (typeof t == "string")
        return t;
    let e, r = "";
    for (let i = 0; i < t.length; i++)
        t[i] && (e = mv(t[i])) && (r && (r += " "),
        r += e);
    return r
}
  , RS = (t, ...e) => {
    let r, i, a, l;
    const u = h => {
        const m = e.reduce( (g, y) => y(g), t());
        return r = CS(m),
        i = r.cache.get,
        a = r.cache.set,
        l = d,
        d(h)
    }
      , d = h => {
        const m = i(h);
        if (m)
            return m;
        const g = _S(h, r);
        return a(h, g),
        g
    }
    ;
    return l = u,
    (...h) => l(PS(...h))
}
  , AS = []
  , st = t => {
    const e = r => r[t] || AS;
    return e.isThemeGetter = !0,
    e
}
  , gv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , yv = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , NS = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
  , OS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , jS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , MS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , LS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , DS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , wr = t => NS.test(t)
  , ke = t => !!t && !Number.isNaN(Number(t))
  , br = t => !!t && Number.isInteger(Number(t))
  , id = t => t.endsWith("%") && ke(t.slice(0, -1))
  , Hn = t => OS.test(t)
  , vv = () => !0
  , IS = t => jS.test(t) && !MS.test(t)
  , Ef = () => !1
  , FS = t => LS.test(t)
  , VS = t => DS.test(t)
  , BS = t => !re(t) && !se(t)
  , US = t => Ir(t, bv, Ef)
  , re = t => gv.test(t)
  , Jr = t => Ir(t, Sv, IS)
  , Rg = t => Ir(t, GS, ke)
  , zS = t => Ir(t, Ev, vv)
  , $S = t => Ir(t, kv, Ef)
  , Ag = t => Ir(t, xv, Ef)
  , HS = t => Ir(t, wv, VS)
  , cl = t => Ir(t, Cv, FS)
  , se = t => yv.test(t)
  , uo = t => ws(t, Sv)
  , qS = t => ws(t, kv)
  , Ng = t => ws(t, xv)
  , WS = t => ws(t, bv)
  , KS = t => ws(t, wv)
  , dl = t => ws(t, Cv, !0)
  , QS = t => ws(t, Ev, !0)
  , Ir = (t, e, r) => {
    const i = gv.exec(t);
    return i ? i[1] ? e(i[1]) : r(i[2]) : !1
}
  , ws = (t, e, r=!1) => {
    const i = yv.exec(t);
    return i ? i[1] ? e(i[1]) : r : !1
}
  , xv = t => t === "position" || t === "percentage"
  , wv = t => t === "image" || t === "url"
  , bv = t => t === "length" || t === "size" || t === "bg-size"
  , Sv = t => t === "length"
  , GS = t => t === "number"
  , kv = t => t === "family-name"
  , Ev = t => t === "number" || t === "weight"
  , Cv = t => t === "shadow"
  , YS = () => {
    const t = st("color")
      , e = st("font")
      , r = st("text")
      , i = st("font-weight")
      , a = st("tracking")
      , l = st("leading")
      , u = st("breakpoint")
      , d = st("container")
      , h = st("spacing")
      , m = st("radius")
      , g = st("shadow")
      , y = st("inset-shadow")
      , w = st("text-shadow")
      , k = st("drop-shadow")
      , T = st("blur")
      , E = st("perspective")
      , S = st("aspect")
      , b = st("ease")
      , P = st("animate")
      , A = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , M = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , F = () => [...M(), se, re]
      , $ = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , J = () => ["auto", "contain", "none"]
      , V = () => [se, re, h]
      , ee = () => [wr, "full", "auto", ...V()]
      , ue = () => [br, "none", "subgrid", se, re]
      , le = () => ["auto", {
        span: ["full", br, se, re]
    }, br, se, re]
      , Ae = () => [br, "auto", se, re]
      , ze = () => ["auto", "min", "max", "fr", se, re]
      , Re = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , De = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , Ne = () => ["auto", ...V()]
      , me = () => [wr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...V()]
      , Q = () => [wr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...V()]
      , oe = () => [wr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...V()]
      , U = () => [t, se, re]
      , O = () => [...M(), Ng, Ag, {
        position: [se, re]
    }]
      , z = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , ye = () => ["auto", "cover", "contain", WS, US, {
        size: [se, re]
    }]
      , ve = () => [id, uo, Jr]
      , he = () => ["", "none", "full", m, se, re]
      , G = () => ["", ke, uo, Jr]
      , Se = () => ["solid", "dashed", "dotted", "double"]
      , Ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , we = () => [ke, id, Ng, Ag]
      , it = () => ["", "none", T, se, re]
      , Kt = () => ["none", ke, se, re]
      , ct = () => ["none", ke, se, re]
      , ln = () => [ke, se, re]
      , Qt = () => [wr, "full", ...V()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [Hn],
            breakpoint: [Hn],
            color: [vv],
            container: [Hn],
            "drop-shadow": [Hn],
            ease: ["in", "out", "in-out"],
            font: [BS],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [Hn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [Hn],
            shadow: [Hn],
            spacing: ["px", ke],
            text: [Hn],
            "text-shadow": [Hn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", wr, re, se, S]
            }],
            container: ["container"],
            columns: [{
                columns: [ke, re, se, d]
            }],
            "break-after": [{
                "break-after": A()
            }],
            "break-before": [{
                "break-before": A()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: F()
            }],
            overflow: [{
                overflow: $()
            }],
            "overflow-x": [{
                "overflow-x": $()
            }],
            "overflow-y": [{
                "overflow-y": $()
            }],
            overscroll: [{
                overscroll: J()
            }],
            "overscroll-x": [{
                "overscroll-x": J()
            }],
            "overscroll-y": [{
                "overscroll-y": J()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: ee()
            }],
            "inset-x": [{
                "inset-x": ee()
            }],
            "inset-y": [{
                "inset-y": ee()
            }],
            start: [{
                "inset-s": ee(),
                start: ee()
            }],
            end: [{
                "inset-e": ee(),
                end: ee()
            }],
            "inset-bs": [{
                "inset-bs": ee()
            }],
            "inset-be": [{
                "inset-be": ee()
            }],
            top: [{
                top: ee()
            }],
            right: [{
                right: ee()
            }],
            bottom: [{
                bottom: ee()
            }],
            left: [{
                left: ee()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [br, "auto", se, re]
            }],
            basis: [{
                basis: [wr, "full", "auto", d, ...V()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [ke, wr, "auto", "initial", "none", re]
            }],
            grow: [{
                grow: ["", ke, se, re]
            }],
            shrink: [{
                shrink: ["", ke, se, re]
            }],
            order: [{
                order: [br, "first", "last", "none", se, re]
            }],
            "grid-cols": [{
                "grid-cols": ue()
            }],
            "col-start-end": [{
                col: le()
            }],
            "col-start": [{
                "col-start": Ae()
            }],
            "col-end": [{
                "col-end": Ae()
            }],
            "grid-rows": [{
                "grid-rows": ue()
            }],
            "row-start-end": [{
                row: le()
            }],
            "row-start": [{
                "row-start": Ae()
            }],
            "row-end": [{
                "row-end": Ae()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ze()
            }],
            "auto-rows": [{
                "auto-rows": ze()
            }],
            gap: [{
                gap: V()
            }],
            "gap-x": [{
                "gap-x": V()
            }],
            "gap-y": [{
                "gap-y": V()
            }],
            "justify-content": [{
                justify: [...Re(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...De(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...De()]
            }],
            "align-content": [{
                content: ["normal", ...Re()]
            }],
            "align-items": [{
                items: [...De(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...De(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": Re()
            }],
            "place-items": [{
                "place-items": [...De(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...De()]
            }],
            p: [{
                p: V()
            }],
            px: [{
                px: V()
            }],
            py: [{
                py: V()
            }],
            ps: [{
                ps: V()
            }],
            pe: [{
                pe: V()
            }],
            pbs: [{
                pbs: V()
            }],
            pbe: [{
                pbe: V()
            }],
            pt: [{
                pt: V()
            }],
            pr: [{
                pr: V()
            }],
            pb: [{
                pb: V()
            }],
            pl: [{
                pl: V()
            }],
            m: [{
                m: Ne()
            }],
            mx: [{
                mx: Ne()
            }],
            my: [{
                my: Ne()
            }],
            ms: [{
                ms: Ne()
            }],
            me: [{
                me: Ne()
            }],
            mbs: [{
                mbs: Ne()
            }],
            mbe: [{
                mbe: Ne()
            }],
            mt: [{
                mt: Ne()
            }],
            mr: [{
                mr: Ne()
            }],
            mb: [{
                mb: Ne()
            }],
            ml: [{
                ml: Ne()
            }],
            "space-x": [{
                "space-x": V()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": V()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: me()
            }],
            "inline-size": [{
                inline: ["auto", ...Q()]
            }],
            "min-inline-size": [{
                "min-inline": ["auto", ...Q()]
            }],
            "max-inline-size": [{
                "max-inline": ["none", ...Q()]
            }],
            "block-size": [{
                block: ["auto", ...oe()]
            }],
            "min-block-size": [{
                "min-block": ["auto", ...oe()]
            }],
            "max-block-size": [{
                "max-block": ["none", ...oe()]
            }],
            w: [{
                w: [d, "screen", ...me()]
            }],
            "min-w": [{
                "min-w": [d, "screen", "none", ...me()]
            }],
            "max-w": [{
                "max-w": [d, "screen", "none", "prose", {
                    screen: [u]
                }, ...me()]
            }],
            h: [{
                h: ["screen", "lh", ...me()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...me()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...me()]
            }],
            "font-size": [{
                text: ["base", r, uo, Jr]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [i, QS, zS]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", id, re]
            }],
            "font-family": [{
                font: [qS, $S, e]
            }],
            "font-features": [{
                "font-features": [re]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [a, se, re]
            }],
            "line-clamp": [{
                "line-clamp": [ke, "none", se, Rg]
            }],
            leading: [{
                leading: [l, ...V()]
            }],
            "list-image": [{
                "list-image": ["none", se, re]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", se, re]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: U()
            }],
            "text-color": [{
                text: U()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...Se(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [ke, "from-font", "auto", se, Jr]
            }],
            "text-decoration-color": [{
                decoration: U()
            }],
            "underline-offset": [{
                "underline-offset": [ke, "auto", se, re]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: V()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", se, re]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", se, re]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: O()
            }],
            "bg-repeat": [{
                bg: z()
            }],
            "bg-size": [{
                bg: ye()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, br, se, re],
                    radial: ["", se, re],
                    conic: [br, se, re]
                }, KS, HS]
            }],
            "bg-color": [{
                bg: U()
            }],
            "gradient-from-pos": [{
                from: ve()
            }],
            "gradient-via-pos": [{
                via: ve()
            }],
            "gradient-to-pos": [{
                to: ve()
            }],
            "gradient-from": [{
                from: U()
            }],
            "gradient-via": [{
                via: U()
            }],
            "gradient-to": [{
                to: U()
            }],
            rounded: [{
                rounded: he()
            }],
            "rounded-s": [{
                "rounded-s": he()
            }],
            "rounded-e": [{
                "rounded-e": he()
            }],
            "rounded-t": [{
                "rounded-t": he()
            }],
            "rounded-r": [{
                "rounded-r": he()
            }],
            "rounded-b": [{
                "rounded-b": he()
            }],
            "rounded-l": [{
                "rounded-l": he()
            }],
            "rounded-ss": [{
                "rounded-ss": he()
            }],
            "rounded-se": [{
                "rounded-se": he()
            }],
            "rounded-ee": [{
                "rounded-ee": he()
            }],
            "rounded-es": [{
                "rounded-es": he()
            }],
            "rounded-tl": [{
                "rounded-tl": he()
            }],
            "rounded-tr": [{
                "rounded-tr": he()
            }],
            "rounded-br": [{
                "rounded-br": he()
            }],
            "rounded-bl": [{
                "rounded-bl": he()
            }],
            "border-w": [{
                border: G()
            }],
            "border-w-x": [{
                "border-x": G()
            }],
            "border-w-y": [{
                "border-y": G()
            }],
            "border-w-s": [{
                "border-s": G()
            }],
            "border-w-e": [{
                "border-e": G()
            }],
            "border-w-bs": [{
                "border-bs": G()
            }],
            "border-w-be": [{
                "border-be": G()
            }],
            "border-w-t": [{
                "border-t": G()
            }],
            "border-w-r": [{
                "border-r": G()
            }],
            "border-w-b": [{
                "border-b": G()
            }],
            "border-w-l": [{
                "border-l": G()
            }],
            "divide-x": [{
                "divide-x": G()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": G()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...Se(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...Se(), "hidden", "none"]
            }],
            "border-color": [{
                border: U()
            }],
            "border-color-x": [{
                "border-x": U()
            }],
            "border-color-y": [{
                "border-y": U()
            }],
            "border-color-s": [{
                "border-s": U()
            }],
            "border-color-e": [{
                "border-e": U()
            }],
            "border-color-bs": [{
                "border-bs": U()
            }],
            "border-color-be": [{
                "border-be": U()
            }],
            "border-color-t": [{
                "border-t": U()
            }],
            "border-color-r": [{
                "border-r": U()
            }],
            "border-color-b": [{
                "border-b": U()
            }],
            "border-color-l": [{
                "border-l": U()
            }],
            "divide-color": [{
                divide: U()
            }],
            "outline-style": [{
                outline: [...Se(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [ke, se, re]
            }],
            "outline-w": [{
                outline: ["", ke, uo, Jr]
            }],
            "outline-color": [{
                outline: U()
            }],
            shadow: [{
                shadow: ["", "none", g, dl, cl]
            }],
            "shadow-color": [{
                shadow: U()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", y, dl, cl]
            }],
            "inset-shadow-color": [{
                "inset-shadow": U()
            }],
            "ring-w": [{
                ring: G()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: U()
            }],
            "ring-offset-w": [{
                "ring-offset": [ke, Jr]
            }],
            "ring-offset-color": [{
                "ring-offset": U()
            }],
            "inset-ring-w": [{
                "inset-ring": G()
            }],
            "inset-ring-color": [{
                "inset-ring": U()
            }],
            "text-shadow": [{
                "text-shadow": ["none", w, dl, cl]
            }],
            "text-shadow-color": [{
                "text-shadow": U()
            }],
            opacity: [{
                opacity: [ke, se, re]
            }],
            "mix-blend": [{
                "mix-blend": [...Ce(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": Ce()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [ke]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": we()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": we()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": U()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": U()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": we()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": we()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": U()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": U()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": we()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": we()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": U()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": U()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": we()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": we()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": U()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": U()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": we()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": we()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": U()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": U()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": we()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": we()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": U()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": U()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": we()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": we()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": U()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": U()
            }],
            "mask-image-radial": [{
                "mask-radial": [se, re]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": we()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": we()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": U()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": U()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": M()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [ke]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": we()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": we()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": U()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": U()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: O()
            }],
            "mask-repeat": [{
                mask: z()
            }],
            "mask-size": [{
                mask: ye()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", se, re]
            }],
            filter: [{
                filter: ["", "none", se, re]
            }],
            blur: [{
                blur: it()
            }],
            brightness: [{
                brightness: [ke, se, re]
            }],
            contrast: [{
                contrast: [ke, se, re]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", k, dl, cl]
            }],
            "drop-shadow-color": [{
                "drop-shadow": U()
            }],
            grayscale: [{
                grayscale: ["", ke, se, re]
            }],
            "hue-rotate": [{
                "hue-rotate": [ke, se, re]
            }],
            invert: [{
                invert: ["", ke, se, re]
            }],
            saturate: [{
                saturate: [ke, se, re]
            }],
            sepia: [{
                sepia: ["", ke, se, re]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", se, re]
            }],
            "backdrop-blur": [{
                "backdrop-blur": it()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [ke, se, re]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [ke, se, re]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", ke, se, re]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [ke, se, re]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", ke, se, re]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [ke, se, re]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [ke, se, re]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", ke, se, re]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": V()
            }],
            "border-spacing-x": [{
                "border-spacing-x": V()
            }],
            "border-spacing-y": [{
                "border-spacing-y": V()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", se, re]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [ke, "initial", se, re]
            }],
            ease: [{
                ease: ["linear", "initial", b, se, re]
            }],
            delay: [{
                delay: [ke, se, re]
            }],
            animate: [{
                animate: ["none", P, se, re]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [E, se, re]
            }],
            "perspective-origin": [{
                "perspective-origin": F()
            }],
            rotate: [{
                rotate: Kt()
            }],
            "rotate-x": [{
                "rotate-x": Kt()
            }],
            "rotate-y": [{
                "rotate-y": Kt()
            }],
            "rotate-z": [{
                "rotate-z": Kt()
            }],
            scale: [{
                scale: ct()
            }],
            "scale-x": [{
                "scale-x": ct()
            }],
            "scale-y": [{
                "scale-y": ct()
            }],
            "scale-z": [{
                "scale-z": ct()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: ln()
            }],
            "skew-x": [{
                "skew-x": ln()
            }],
            "skew-y": [{
                "skew-y": ln()
            }],
            transform: [{
                transform: [se, re, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: F()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: Qt()
            }],
            "translate-x": [{
                "translate-x": Qt()
            }],
            "translate-y": [{
                "translate-y": Qt()
            }],
            "translate-z": [{
                "translate-z": Qt()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: U()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: U()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", se, re]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": V()
            }],
            "scroll-mx": [{
                "scroll-mx": V()
            }],
            "scroll-my": [{
                "scroll-my": V()
            }],
            "scroll-ms": [{
                "scroll-ms": V()
            }],
            "scroll-me": [{
                "scroll-me": V()
            }],
            "scroll-mbs": [{
                "scroll-mbs": V()
            }],
            "scroll-mbe": [{
                "scroll-mbe": V()
            }],
            "scroll-mt": [{
                "scroll-mt": V()
            }],
            "scroll-mr": [{
                "scroll-mr": V()
            }],
            "scroll-mb": [{
                "scroll-mb": V()
            }],
            "scroll-ml": [{
                "scroll-ml": V()
            }],
            "scroll-p": [{
                "scroll-p": V()
            }],
            "scroll-px": [{
                "scroll-px": V()
            }],
            "scroll-py": [{
                "scroll-py": V()
            }],
            "scroll-ps": [{
                "scroll-ps": V()
            }],
            "scroll-pe": [{
                "scroll-pe": V()
            }],
            "scroll-pbs": [{
                "scroll-pbs": V()
            }],
            "scroll-pbe": [{
                "scroll-pbe": V()
            }],
            "scroll-pt": [{
                "scroll-pt": V()
            }],
            "scroll-pr": [{
                "scroll-pr": V()
            }],
            "scroll-pb": [{
                "scroll-pb": V()
            }],
            "scroll-pl": [{
                "scroll-pl": V()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", se, re]
            }],
            fill: [{
                fill: ["none", ...U()]
            }],
            "stroke-w": [{
                stroke: [ke, uo, Jr, Rg]
            }],
            stroke: [{
                stroke: ["none", ...U()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , XS = RS(YS);
function Ho(...t) {
    return XS(uv(t))
}
const Tv = L.forwardRef( ({...t}, e) => v.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
Tv.displayName = "ToastProvider";
const _v = L.forwardRef( ({...t}, e) => v.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
_v.displayName = "ToastViewport";
const JS = N2("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Pv = L.forwardRef( ({className: t, variant: e, ...r}, i) => v.jsx("div", {
    ref: i,
    className: Ho(JS({
        variant: e
    }), t),
    ...r
}));
Pv.displayName = "Toast";
const ZS = L.forwardRef( ({className: t, ...e}, r) => v.jsx("div", {
    ref: r,
    className: Ho("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
    ...e
}));
ZS.displayName = "ToastAction";
const Rv = L.forwardRef( ({className: t, ...e}, r) => v.jsx("button", {
    ref: r,
    className: Ho("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: v.jsx(Ol, {
        className: "h-4 w-4"
    })
}));
Rv.displayName = "ToastClose";
const Av = L.forwardRef( ({className: t, ...e}, r) => v.jsx("div", {
    ref: r,
    className: Ho("text-sm font-semibold", t),
    ...e
}));
Av.displayName = "ToastTitle";
const Nv = L.forwardRef( ({className: t, ...e}, r) => v.jsx("div", {
    ref: r,
    className: Ho("text-sm opacity-90", t),
    ...e
}));
Nv.displayName = "ToastDescription";
function ek() {
    const {toasts: t} = A2();
    return v.jsxs(Tv, {
        children: [t.map(function({id: e, title: r, description: i, action: a, ...l}) {
            return v.jsxs(Pv, {
                ...l,
                children: [v.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && v.jsx(Av, {
                        children: r
                    }), i && v.jsx(Nv, {
                        children: i
                    })]
                }), a, v.jsx(Rv, {})]
            }, e)
        }), v.jsx(_v, {})]
    })
}
var qo = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        return this.listeners.add(t),
        this.onSubscribe(),
        () => {
            this.listeners.delete(t),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
, tk = {
    setTimeout: (t, e) => setTimeout(t, e),
    clearTimeout: t => clearTimeout(t),
    setInterval: (t, e) => setInterval(t, e),
    clearInterval: t => clearInterval(t)
}, Er, bf, Yy, nk = (Yy = class {
    constructor() {
        pe(this, Er, tk);
        pe(this, bf, !1)
    }
    setTimeoutProvider(t) {
        Z(this, Er, t)
    }
    setTimeout(t, e) {
        return R(this, Er).setTimeout(t, e)
    }
    clearTimeout(t) {
        R(this, Er).clearTimeout(t)
    }
    setInterval(t, e) {
        return R(this, Er).setInterval(t, e)
    }
    clearInterval(t) {
        R(this, Er).clearInterval(t)
    }
}
,
Er = new WeakMap,
bf = new WeakMap,
Yy), ns = new nk;
function rk(t) {
    setTimeout(t, 0)
}
var ys = typeof window > "u" || "Deno"in globalThis;
function Ft() {}
function sk(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Nd(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}
function Ov(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}
function jr(t, e) {
    return typeof t == "function" ? t(e) : t
}
function on(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Og(t, e) {
    const {type: r="all", exact: i, fetchStatus: a, predicate: l, queryKey: u, stale: d} = t;
    if (u) {
        if (i) {
            if (e.queryHash !== Cf(u, e.options))
                return !1
        } else if (!No(e.queryKey, u))
            return !1
    }
    if (r !== "all") {
        const h = e.isActive();
        if (r === "active" && !h || r === "inactive" && h)
            return !1
    }
    return !(typeof d == "boolean" && e.isStale() !== d || a && a !== e.state.fetchStatus || l && !l(e))
}
function jg(t, e) {
    const {exact: r, status: i, predicate: a, mutationKey: l} = t;
    if (l) {
        if (!e.options.mutationKey)
            return !1;
        if (r) {
            if (Ao(e.options.mutationKey) !== Ao(l))
                return !1
        } else if (!No(e.options.mutationKey, l))
            return !1
    }
    return !(i && e.state.status !== i || a && !a(e))
}
function Cf(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || Ao)(t)
}
function Ao(t) {
    return JSON.stringify(t, (e, r) => jd(r) ? Object.keys(r).sort().reduce( (i, a) => (i[a] = r[a],
    i), {}) : r)
}
function No(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(r => No(t[r], e[r])) : !1
}
var ik = Object.prototype.hasOwnProperty;
function jv(t, e, r=0) {
    if (t === e)
        return t;
    if (r > 500)
        return e;
    const i = Mg(t) && Mg(e);
    if (!i && !(jd(t) && jd(e)))
        return e;
    const l = (i ? t : Object.keys(t)).length
      , u = i ? e : Object.keys(e)
      , d = u.length
      , h = i ? new Array(d) : {};
    let m = 0;
    for (let g = 0; g < d; g++) {
        const y = i ? g : u[g]
          , w = t[y]
          , k = e[y];
        if (w === k) {
            h[y] = w,
            (i ? g < l : ik.call(t, y)) && m++;
            continue
        }
        if (w === null || k === null || typeof w != "object" || typeof k != "object") {
            h[y] = k;
            continue
        }
        const T = jv(w, k, r + 1);
        h[y] = T,
        T === w && m++
    }
    return l === d && m === l ? t : h
}
function Od(t, e) {
    if (!e || Object.keys(t).length !== Object.keys(e).length)
        return !1;
    for (const r in t)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function Mg(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}
function jd(t) {
    if (!Lg(t))
        return !1;
    const e = t.constructor;
    if (e === void 0)
        return !0;
    const r = e.prototype;
    return !(!Lg(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}
function Lg(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function ok(t) {
    return new Promise(e => {
        ns.setTimeout(e, t)
    }
    )
}
function Md(t, e, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? jv(t, e) : e
}
function ak(t, e, r=0) {
    const i = [...t, e];
    return r && i.length > r ? i.slice(1) : i
}
function lk(t, e, r=0) {
    const i = [e, ...t];
    return r && i.length > r ? i.slice(0, -1) : i
}
var Tf = Symbol();
function Mv(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Tf ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
function Lv(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}
function uk(t, e, r) {
    let i = !1, a;
    return Object.defineProperty(t, "signal", {
        enumerable: !0,
        get: () => (a ?? (a = e()),
        i || (i = !0,
        a.aborted ? r() : a.addEventListener("abort", r, {
            once: !0
        })),
        a)
    }),
    t
}
var is, Cr, ei, Xy, ck = (Xy = class extends qo {
    constructor() {
        super();
        pe(this, is);
        pe(this, Cr);
        pe(this, ei);
        Z(this, ei, e => {
            if (!ys && window.addEventListener) {
                const r = () => e();
                return window.addEventListener("visibilitychange", r, !1),
                () => {
                    window.removeEventListener("visibilitychange", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        R(this, Cr) || this.setEventListener(R(this, ei))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = R(this, Cr)) == null || e.call(this),
        Z(this, Cr, void 0))
    }
    setEventListener(e) {
        var r;
        Z(this, ei, e),
        (r = R(this, Cr)) == null || r.call(this),
        Z(this, Cr, e(i => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
        }
        ))
    }
    setFocused(e) {
        R(this, is) !== e && (Z(this, is, e),
        this.onFocus())
    }
    onFocus() {
        const e = this.isFocused();
        this.listeners.forEach(r => {
            r(e)
        }
        )
    }
    isFocused() {
        var e;
        return typeof R(this, is) == "boolean" ? R(this, is) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
    }
}
,
is = new WeakMap,
Cr = new WeakMap,
ei = new WeakMap,
Xy), _f = new ck;
function Ld() {
    let t, e;
    const r = new Promise( (a, l) => {
        t = a,
        e = l
    }
    );
    r.status = "pending",
    r.catch( () => {}
    );
    function i(a) {
        Object.assign(r, a),
        delete r.resolve,
        delete r.reject
    }
    return r.resolve = a => {
        i({
            status: "fulfilled",
            value: a
        }),
        t(a)
    }
    ,
    r.reject = a => {
        i({
            status: "rejected",
            reason: a
        }),
        e(a)
    }
    ,
    r
}
var dk = rk;
function fk() {
    let t = []
      , e = 0
      , r = d => {
        d()
    }
      , i = d => {
        d()
    }
      , a = dk;
    const l = d => {
        e ? t.push(d) : a( () => {
            r(d)
        }
        )
    }
      , u = () => {
        const d = t;
        t = [],
        d.length && a( () => {
            i( () => {
                d.forEach(h => {
                    r(h)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: d => {
            let h;
            e++;
            try {
                h = d()
            } finally {
                e--,
                e || u()
            }
            return h
        }
        ,
        batchCalls: d => (...h) => {
            l( () => {
                d(...h)
            }
            )
        }
        ,
        schedule: l,
        setNotifyFunction: d => {
            r = d
        }
        ,
        setBatchNotifyFunction: d => {
            i = d
        }
        ,
        setScheduler: d => {
            a = d
        }
    }
}
var gt = fk(), ti, Tr, ni, Jy, hk = (Jy = class extends qo {
    constructor() {
        super();
        pe(this, ti, !0);
        pe(this, Tr);
        pe(this, ni);
        Z(this, ni, e => {
            if (!ys && window.addEventListener) {
                const r = () => e(!0)
                  , i = () => e(!1);
                return window.addEventListener("online", r, !1),
                window.addEventListener("offline", i, !1),
                () => {
                    window.removeEventListener("online", r),
                    window.removeEventListener("offline", i)
                }
            }
        }
        )
    }
    onSubscribe() {
        R(this, Tr) || this.setEventListener(R(this, ni))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = R(this, Tr)) == null || e.call(this),
        Z(this, Tr, void 0))
    }
    setEventListener(e) {
        var r;
        Z(this, ni, e),
        (r = R(this, Tr)) == null || r.call(this),
        Z(this, Tr, e(this.setOnline.bind(this)))
    }
    setOnline(e) {
        R(this, ti) !== e && (Z(this, ti, e),
        this.listeners.forEach(i => {
            i(e)
        }
        ))
    }
    isOnline() {
        return R(this, ti)
    }
}
,
ti = new WeakMap,
Tr = new WeakMap,
ni = new WeakMap,
Jy), Ml = new hk;
function pk(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}
function Dv(t) {
    return (t ?? "online") === "online" ? Ml.isOnline() : !0
}
var Dd = class extends Error {
    constructor(t) {
        super("CancelledError"),
        this.revert = t == null ? void 0 : t.revert,
        this.silent = t == null ? void 0 : t.silent
    }
}
;
function Iv(t) {
    let e = !1, r = 0, i;
    const a = Ld()
      , l = () => a.status !== "pending"
      , u = E => {
        var S;
        if (!l()) {
            const b = new Dd(E);
            w(b),
            (S = t.onCancel) == null || S.call(t, b)
        }
    }
      , d = () => {
        e = !0
    }
      , h = () => {
        e = !1
    }
      , m = () => _f.isFocused() && (t.networkMode === "always" || Ml.isOnline()) && t.canRun()
      , g = () => Dv(t.networkMode) && t.canRun()
      , y = E => {
        l() || (i == null || i(),
        a.resolve(E))
    }
      , w = E => {
        l() || (i == null || i(),
        a.reject(E))
    }
      , k = () => new Promise(E => {
        var S;
        i = b => {
            (l() || m()) && E(b)
        }
        ,
        (S = t.onPause) == null || S.call(t)
    }
    ).then( () => {
        var E;
        i = void 0,
        l() || (E = t.onContinue) == null || E.call(t)
    }
    )
      , T = () => {
        if (l())
            return;
        let E;
        const S = r === 0 ? t.initialPromise : void 0;
        try {
            E = S ?? t.fn()
        } catch (b) {
            E = Promise.reject(b)
        }
        Promise.resolve(E).then(y).catch(b => {
            var $;
            if (l())
                return;
            const P = t.retry ?? (ys ? 0 : 3)
              , A = t.retryDelay ?? pk
              , M = typeof A == "function" ? A(r, b) : A
              , F = P === !0 || typeof P == "number" && r < P || typeof P == "function" && P(r, b);
            if (e || !F) {
                w(b);
                return
            }
            r++,
            ($ = t.onFail) == null || $.call(t, r, b),
            ok(M).then( () => m() ? void 0 : k()).then( () => {
                e ? w(b) : T()
            }
            )
        }
        )
    }
    ;
    return {
        promise: a,
        status: () => a.status,
        cancel: u,
        continue: () => (i == null || i(),
        a),
        cancelRetry: d,
        continueRetry: h,
        canStart: g,
        start: () => (g() ? T() : k().then(T),
        a)
    }
}
var os, Zy, Fv = (Zy = class {
    constructor() {
        pe(this, os)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Nd(this.gcTime) && Z(this, os, ns.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (ys ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        R(this, os) && (ns.clearTimeout(R(this, os)),
        Z(this, os, void 0))
    }
}
,
os = new WeakMap,
Zy), as, ri, sn, ls, ut, Fo, us, xn, qn, ev, mk = (ev = class extends Fv {
    constructor(e) {
        super();
        pe(this, xn);
        pe(this, as);
        pe(this, ri);
        pe(this, sn);
        pe(this, ls);
        pe(this, ut);
        pe(this, Fo);
        pe(this, us);
        Z(this, us, !1),
        Z(this, Fo, e.defaultOptions),
        this.setOptions(e.options),
        this.observers = [],
        Z(this, ls, e.client),
        Z(this, sn, R(this, ls).getQueryCache()),
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        Z(this, as, Ig(this.options)),
        this.state = e.state ?? R(this, as),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var e;
        return (e = R(this, ut)) == null ? void 0 : e.promise
    }
    setOptions(e) {
        if (this.options = {
            ...R(this, Fo),
            ...e
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const r = Ig(this.options);
            r.data !== void 0 && (this.setState(Dg(r.data, r.dataUpdatedAt)),
            Z(this, as, r))
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && R(this, sn).remove(this)
    }
    setData(e, r) {
        const i = Md(this.state.data, e, this.options);
        return Te(this, xn, qn).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual
        }),
        i
    }
    setState(e, r) {
        Te(this, xn, qn).call(this, {
            type: "setState",
            state: e,
            setStateOptions: r
        })
    }
    cancel(e) {
        var i, a;
        const r = (i = R(this, ut)) == null ? void 0 : i.promise;
        return (a = R(this, ut)) == null || a.cancel(e),
        r ? r.then(Ft).catch(Ft) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(R(this, as))
    }
    isActive() {
        return this.observers.some(e => on(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Tf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e => jr(e.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e=0) {
        return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !Ov(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        var r;
        const e = this.observers.find(i => i.shouldFetchOnWindowFocus());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (r = R(this, ut)) == null || r.continue()
    }
    onOnline() {
        var r;
        const e = this.observers.find(i => i.shouldFetchOnReconnect());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (r = R(this, ut)) == null || r.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        R(this, sn).notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(r => r !== e),
        this.observers.length || (R(this, ut) && (R(this, us) ? R(this, ut).cancel({
            revert: !0
        }) : R(this, ut).cancelRetry()),
        this.scheduleGc()),
        R(this, sn).notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Te(this, xn, qn).call(this, {
            type: "invalidate"
        })
    }
    async fetch(e, r) {
        var h, m, g, y, w, k, T, E, S, b, P, A;
        if (this.state.fetchStatus !== "idle" && ((h = R(this, ut)) == null ? void 0 : h.status()) !== "rejected") {
            if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (R(this, ut))
                return R(this, ut).continueRetry(),
                R(this, ut).promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            const M = this.observers.find(F => F.options.queryFn);
            M && this.setOptions(M.options)
        }
        const i = new AbortController
          , a = M => {
            Object.defineProperty(M, "signal", {
                enumerable: !0,
                get: () => (Z(this, us, !0),
                i.signal)
            })
        }
          , l = () => {
            const M = Mv(this.options, r)
              , $ = ( () => {
                const J = {
                    client: R(this, ls),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return a(J),
                J
            }
            )();
            return Z(this, us, !1),
            this.options.persister ? this.options.persister(M, $, this) : M($)
        }
          , d = ( () => {
            const M = {
                fetchOptions: r,
                options: this.options,
                queryKey: this.queryKey,
                client: R(this, ls),
                state: this.state,
                fetchFn: l
            };
            return a(M),
            M
        }
        )();
        (m = this.options.behavior) == null || m.onFetch(d, this),
        Z(this, ri, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((g = d.fetchOptions) == null ? void 0 : g.meta)) && Te(this, xn, qn).call(this, {
            type: "fetch",
            meta: (y = d.fetchOptions) == null ? void 0 : y.meta
        }),
        Z(this, ut, Iv({
            initialPromise: r == null ? void 0 : r.initialPromise,
            fn: d.fetchFn,
            onCancel: M => {
                M instanceof Dd && M.revert && this.setState({
                    ...R(this, ri),
                    fetchStatus: "idle"
                }),
                i.abort()
            }
            ,
            onFail: (M, F) => {
                Te(this, xn, qn).call(this, {
                    type: "failed",
                    failureCount: M,
                    error: F
                })
            }
            ,
            onPause: () => {
                Te(this, xn, qn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Te(this, xn, qn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: d.options.retry,
            retryDelay: d.options.retryDelay,
            networkMode: d.options.networkMode,
            canRun: () => !0
        }));
        try {
            const M = await R(this, ut).start();
            if (M === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(M),
            (k = (w = R(this, sn).config).onSuccess) == null || k.call(w, M, this),
            (E = (T = R(this, sn).config).onSettled) == null || E.call(T, M, this.state.error, this),
            M
        } catch (M) {
            if (M instanceof Dd) {
                if (M.silent)
                    return R(this, ut).promise;
                if (M.revert) {
                    if (this.state.data === void 0)
                        throw M;
                    return this.state.data
                }
            }
            throw Te(this, xn, qn).call(this, {
                type: "error",
                error: M
            }),
            (b = (S = R(this, sn).config).onError) == null || b.call(S, M, this),
            (A = (P = R(this, sn).config).onSettled) == null || A.call(P, this.state.data, M, this),
            M
        } finally {
            this.scheduleGc()
        }
    }
}
,
as = new WeakMap,
ri = new WeakMap,
sn = new WeakMap,
ls = new WeakMap,
ut = new WeakMap,
Fo = new WeakMap,
us = new WeakMap,
xn = new WeakSet,
qn = function(e) {
    const r = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                fetchFailureCount: e.failureCount,
                fetchFailureReason: e.error
            };
        case "pause":
            return {
                ...i,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...i,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...i,
                ...Vv(i.data, this.options),
                fetchMeta: e.meta ?? null
            };
        case "success":
            const a = {
                ...i,
                ...Dg(e.data, e.dataUpdatedAt),
                dataUpdateCount: i.dataUpdateCount + 1,
                ...!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
            return Z(this, ri, e.manual ? a : void 0),
            a;
        case "error":
            const l = e.error;
            return {
                ...i,
                error: l,
                errorUpdateCount: i.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: i.fetchFailureCount + 1,
                fetchFailureReason: l,
                fetchStatus: "idle",
                status: "error",
                isInvalidated: !0
            };
        case "invalidate":
            return {
                ...i,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...i,
                ...e.state
            }
        }
    }
    ;
    this.state = r(this.state),
    gt.batch( () => {
        this.observers.forEach(i => {
            i.onQueryUpdate()
        }
        ),
        R(this, sn).notify({
            query: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
ev);
function Vv(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Dv(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Dg(t, e) {
    return {
        data: t,
        dataUpdatedAt: e ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}
function Ig(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData
      , r = e !== void 0
      , i = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var It, _e, Vo, At, cs, si, Wn, _r, Bo, ii, oi, ds, fs, Pr, ai, Me, mo, Id, Fd, Vd, Bd, Ud, zd, $d, Bv, tv, gk = (tv = class extends qo {
    constructor(e, r) {
        super();
        pe(this, Me);
        pe(this, It);
        pe(this, _e);
        pe(this, Vo);
        pe(this, At);
        pe(this, cs);
        pe(this, si);
        pe(this, Wn);
        pe(this, _r);
        pe(this, Bo);
        pe(this, ii);
        pe(this, oi);
        pe(this, ds);
        pe(this, fs);
        pe(this, Pr);
        pe(this, ai, new Set);
        this.options = r,
        Z(this, It, e),
        Z(this, _r, null),
        Z(this, Wn, Ld()),
        this.bindMethods(),
        this.setOptions(r)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (R(this, _e).addObserver(this),
        Fg(R(this, _e), this.options) ? Te(this, Me, mo).call(this) : this.updateResult(),
        Te(this, Me, Bd).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Hd(R(this, _e), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Hd(R(this, _e), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        Te(this, Me, Ud).call(this),
        Te(this, Me, zd).call(this),
        R(this, _e).removeObserver(this)
    }
    setOptions(e) {
        const r = this.options
          , i = R(this, _e);
        if (this.options = R(this, It).defaultQueryOptions(e),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof on(this.options.enabled, R(this, _e)) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        Te(this, Me, $d).call(this),
        R(this, _e).setOptions(this.options),
        r._defaulted && !Od(this.options, r) && R(this, It).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: R(this, _e),
            observer: this
        });
        const a = this.hasListeners();
        a && Vg(R(this, _e), i, this.options, r) && Te(this, Me, mo).call(this),
        this.updateResult(),
        a && (R(this, _e) !== i || on(this.options.enabled, R(this, _e)) !== on(r.enabled, R(this, _e)) || jr(this.options.staleTime, R(this, _e)) !== jr(r.staleTime, R(this, _e))) && Te(this, Me, Id).call(this);
        const l = Te(this, Me, Fd).call(this);
        a && (R(this, _e) !== i || on(this.options.enabled, R(this, _e)) !== on(r.enabled, R(this, _e)) || l !== R(this, Pr)) && Te(this, Me, Vd).call(this, l)
    }
    getOptimisticResult(e) {
        const r = R(this, It).getQueryCache().build(R(this, It), e)
          , i = this.createResult(r, e);
        return vk(this, i) && (Z(this, At, i),
        Z(this, si, this.options),
        Z(this, cs, R(this, _e).state)),
        i
    }
    getCurrentResult() {
        return R(this, At)
    }
    trackResult(e, r) {
        return new Proxy(e,{
            get: (i, a) => (this.trackProp(a),
            r == null || r(a),
            a === "promise" && (this.trackProp("data"),
            !this.options.experimental_prefetchInRender && R(this, Wn).status === "pending" && R(this, Wn).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),
            Reflect.get(i, a))
        })
    }
    trackProp(e) {
        R(this, ai).add(e)
    }
    getCurrentQuery() {
        return R(this, _e)
    }
    refetch({...e}={}) {
        return this.fetch({
            ...e
        })
    }
    fetchOptimistic(e) {
        const r = R(this, It).defaultQueryOptions(e)
          , i = R(this, It).getQueryCache().build(R(this, It), r);
        return i.fetch().then( () => this.createResult(i, r))
    }
    fetch(e) {
        return Te(this, Me, mo).call(this, {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        R(this, At)))
    }
    createResult(e, r) {
        var ee;
        const i = R(this, _e)
          , a = this.options
          , l = R(this, At)
          , u = R(this, cs)
          , d = R(this, si)
          , m = e !== i ? e.state : R(this, Vo)
          , {state: g} = e;
        let y = {
            ...g
        }, w = !1, k;
        if (r._optimisticResults) {
            const ue = this.hasListeners()
              , le = !ue && Fg(e, r)
              , Ae = ue && Vg(e, i, r, a);
            (le || Ae) && (y = {
                ...y,
                ...Vv(g.data, e.options)
            }),
            r._optimisticResults === "isRestoring" && (y.fetchStatus = "idle")
        }
        let {error: T, errorUpdatedAt: E, status: S} = y;
        k = y.data;
        let b = !1;
        if (r.placeholderData !== void 0 && k === void 0 && S === "pending") {
            let ue;
            l != null && l.isPlaceholderData && r.placeholderData === (d == null ? void 0 : d.placeholderData) ? (ue = l.data,
            b = !0) : ue = typeof r.placeholderData == "function" ? r.placeholderData((ee = R(this, oi)) == null ? void 0 : ee.state.data, R(this, oi)) : r.placeholderData,
            ue !== void 0 && (S = "success",
            k = Md(l == null ? void 0 : l.data, ue, r),
            w = !0)
        }
        if (r.select && k !== void 0 && !b)
            if (l && k === (u == null ? void 0 : u.data) && r.select === R(this, Bo))
                k = R(this, ii);
            else
                try {
                    Z(this, Bo, r.select),
                    k = r.select(k),
                    k = Md(l == null ? void 0 : l.data, k, r),
                    Z(this, ii, k),
                    Z(this, _r, null)
                } catch (ue) {
                    Z(this, _r, ue)
                }
        R(this, _r) && (T = R(this, _r),
        k = R(this, ii),
        E = Date.now(),
        S = "error");
        const P = y.fetchStatus === "fetching"
          , A = S === "pending"
          , M = S === "error"
          , F = A && P
          , $ = k !== void 0
          , V = {
            status: S,
            fetchStatus: y.fetchStatus,
            isPending: A,
            isSuccess: S === "success",
            isError: M,
            isInitialLoading: F,
            isLoading: F,
            data: k,
            dataUpdatedAt: y.dataUpdatedAt,
            error: T,
            errorUpdatedAt: E,
            failureCount: y.fetchFailureCount,
            failureReason: y.fetchFailureReason,
            errorUpdateCount: y.errorUpdateCount,
            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
            isFetchedAfterMount: y.dataUpdateCount > m.dataUpdateCount || y.errorUpdateCount > m.errorUpdateCount,
            isFetching: P,
            isRefetching: P && !A,
            isLoadingError: M && !$,
            isPaused: y.fetchStatus === "paused",
            isPlaceholderData: w,
            isRefetchError: M && $,
            isStale: Pf(e, r),
            refetch: this.refetch,
            promise: R(this, Wn),
            isEnabled: on(r.enabled, e) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            const ue = V.data !== void 0
              , le = V.status === "error" && !ue
              , Ae = De => {
                le ? De.reject(V.error) : ue && De.resolve(V.data)
            }
              , ze = () => {
                const De = Z(this, Wn, V.promise = Ld());
                Ae(De)
            }
              , Re = R(this, Wn);
            switch (Re.status) {
            case "pending":
                e.queryHash === i.queryHash && Ae(Re);
                break;
            case "fulfilled":
                (le || V.data !== Re.value) && ze();
                break;
            case "rejected":
                (!le || V.error !== Re.reason) && ze();
                break
            }
        }
        return V
    }
    updateResult() {
        const e = R(this, At)
          , r = this.createResult(R(this, _e), this.options);
        if (Z(this, cs, R(this, _e).state),
        Z(this, si, this.options),
        R(this, cs).data !== void 0 && Z(this, oi, R(this, _e)),
        Od(r, e))
            return;
        Z(this, At, r);
        const i = () => {
            if (!e)
                return !0;
            const {notifyOnChangeProps: a} = this.options
              , l = typeof a == "function" ? a() : a;
            if (l === "all" || !l && !R(this, ai).size)
                return !0;
            const u = new Set(l ?? R(this, ai));
            return this.options.throwOnError && u.add("error"),
            Object.keys(R(this, At)).some(d => {
                const h = d;
                return R(this, At)[h] !== e[h] && u.has(h)
            }
            )
        }
        ;
        Te(this, Me, Bv).call(this, {
            listeners: i()
        })
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && Te(this, Me, Bd).call(this)
    }
}
,
It = new WeakMap,
_e = new WeakMap,
Vo = new WeakMap,
At = new WeakMap,
cs = new WeakMap,
si = new WeakMap,
Wn = new WeakMap,
_r = new WeakMap,
Bo = new WeakMap,
ii = new WeakMap,
oi = new WeakMap,
ds = new WeakMap,
fs = new WeakMap,
Pr = new WeakMap,
ai = new WeakMap,
Me = new WeakSet,
mo = function(e) {
    Te(this, Me, $d).call(this);
    let r = R(this, _e).fetch(this.options, e);
    return e != null && e.throwOnError || (r = r.catch(Ft)),
    r
}
,
Id = function() {
    Te(this, Me, Ud).call(this);
    const e = jr(this.options.staleTime, R(this, _e));
    if (ys || R(this, At).isStale || !Nd(e))
        return;
    const i = Ov(R(this, At).dataUpdatedAt, e) + 1;
    Z(this, ds, ns.setTimeout( () => {
        R(this, At).isStale || this.updateResult()
    }
    , i))
}
,
Fd = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(R(this, _e)) : this.options.refetchInterval) ?? !1
}
,
Vd = function(e) {
    Te(this, Me, zd).call(this),
    Z(this, Pr, e),
    !(ys || on(this.options.enabled, R(this, _e)) === !1 || !Nd(R(this, Pr)) || R(this, Pr) === 0) && Z(this, fs, ns.setInterval( () => {
        (this.options.refetchIntervalInBackground || _f.isFocused()) && Te(this, Me, mo).call(this)
    }
    , R(this, Pr)))
}
,
Bd = function() {
    Te(this, Me, Id).call(this),
    Te(this, Me, Vd).call(this, Te(this, Me, Fd).call(this))
}
,
Ud = function() {
    R(this, ds) && (ns.clearTimeout(R(this, ds)),
    Z(this, ds, void 0))
}
,
zd = function() {
    R(this, fs) && (ns.clearInterval(R(this, fs)),
    Z(this, fs, void 0))
}
,
$d = function() {
    const e = R(this, It).getQueryCache().build(R(this, It), this.options);
    if (e === R(this, _e))
        return;
    const r = R(this, _e);
    Z(this, _e, e),
    Z(this, Vo, e.state),
    this.hasListeners() && (r == null || r.removeObserver(this),
    e.addObserver(this))
}
,
Bv = function(e) {
    gt.batch( () => {
        e.listeners && this.listeners.forEach(r => {
            r(R(this, At))
        }
        ),
        R(this, It).getQueryCache().notify({
            query: R(this, _e),
            type: "observerResultsUpdated"
        })
    }
    )
}
,
tv);
function yk(t, e) {
    return on(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1)
}
function Fg(t, e) {
    return yk(t, e) || t.state.data !== void 0 && Hd(t, e, e.refetchOnMount)
}
function Hd(t, e, r) {
    if (on(e.enabled, t) !== !1 && jr(e.staleTime, t) !== "static") {
        const i = typeof r == "function" ? r(t) : r;
        return i === "always" || i !== !1 && Pf(t, e)
    }
    return !1
}
function Vg(t, e, r, i) {
    return (t !== e || on(i.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && Pf(t, r)
}
function Pf(t, e) {
    return on(e.enabled, t) !== !1 && t.isStaleByTime(jr(e.staleTime, t))
}
function vk(t, e) {
    return !Od(t.getCurrentResult(), e)
}
function Bg(t) {
    return {
        onFetch: (e, r) => {
            var g, y, w, k, T;
            const i = e.options
              , a = (w = (y = (g = e.fetchOptions) == null ? void 0 : g.meta) == null ? void 0 : y.fetchMore) == null ? void 0 : w.direction
              , l = ((k = e.state.data) == null ? void 0 : k.pages) || []
              , u = ((T = e.state.data) == null ? void 0 : T.pageParams) || [];
            let d = {
                pages: [],
                pageParams: []
            }
              , h = 0;
            const m = async () => {
                let E = !1;
                const S = A => {
                    uk(A, () => e.signal, () => E = !0)
                }
                  , b = Mv(e.options, e.fetchOptions)
                  , P = async (A, M, F) => {
                    if (E)
                        return Promise.reject();
                    if (M == null && A.pages.length)
                        return Promise.resolve(A);
                    const J = ( () => {
                        const le = {
                            client: e.client,
                            queryKey: e.queryKey,
                            pageParam: M,
                            direction: F ? "backward" : "forward",
                            meta: e.options.meta
                        };
                        return S(le),
                        le
                    }
                    )()
                      , V = await b(J)
                      , {maxPages: ee} = e.options
                      , ue = F ? lk : ak;
                    return {
                        pages: ue(A.pages, V, ee),
                        pageParams: ue(A.pageParams, M, ee)
                    }
                }
                ;
                if (a && l.length) {
                    const A = a === "backward"
                      , M = A ? xk : Ug
                      , F = {
                        pages: l,
                        pageParams: u
                    }
                      , $ = M(i, F);
                    d = await P(F, $, A)
                } else {
                    const A = t ?? l.length;
                    do {
                        const M = h === 0 ? u[0] ?? i.initialPageParam : Ug(i, d);
                        if (h > 0 && M == null)
                            break;
                        d = await P(d, M),
                        h++
                    } while (h < A)
                }
                return d
            }
            ;
            e.options.persister ? e.fetchFn = () => {
                var E, S;
                return (S = (E = e.options).persister) == null ? void 0 : S.call(E, m, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, r)
            }
            : e.fetchFn = m
        }
    }
}
function Ug(t, {pages: e, pageParams: r}) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, r[i], r) : void 0
}
function xk(t, {pages: e, pageParams: r}) {
    var i;
    return e.length > 0 ? (i = t.getPreviousPageParam) == null ? void 0 : i.call(t, e[0], e, r[0], r) : void 0
}
var Uo, Pn, Et, hs, Rn, Sr, nv, wk = (nv = class extends Fv {
    constructor(e) {
        super();
        pe(this, Rn);
        pe(this, Uo);
        pe(this, Pn);
        pe(this, Et);
        pe(this, hs);
        Z(this, Uo, e.client),
        this.mutationId = e.mutationId,
        Z(this, Et, e.mutationCache),
        Z(this, Pn, []),
        this.state = e.state || bk(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        R(this, Pn).includes(e) || (R(this, Pn).push(e),
        this.clearGcTimeout(),
        R(this, Et).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        Z(this, Pn, R(this, Pn).filter(r => r !== e)),
        this.scheduleGc(),
        R(this, Et).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        R(this, Pn).length || (this.state.status === "pending" ? this.scheduleGc() : R(this, Et).remove(this))
    }
    continue() {
        var e;
        return ((e = R(this, hs)) == null ? void 0 : e.continue()) ?? this.execute(this.state.variables)
    }
    async execute(e) {
        var u, d, h, m, g, y, w, k, T, E, S, b, P, A, M, F, $, J;
        const r = () => {
            Te(this, Rn, Sr).call(this, {
                type: "continue"
            })
        }
          , i = {
            client: R(this, Uo),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        Z(this, hs, Iv({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: (V, ee) => {
                Te(this, Rn, Sr).call(this, {
                    type: "failed",
                    failureCount: V,
                    error: ee
                })
            }
            ,
            onPause: () => {
                Te(this, Rn, Sr).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => R(this, Et).canRun(this)
        }));
        const a = this.state.status === "pending"
          , l = !R(this, hs).canStart();
        try {
            if (a)
                r();
            else {
                Te(this, Rn, Sr).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: l
                }),
                R(this, Et).config.onMutate && await R(this, Et).config.onMutate(e, this, i);
                const ee = await ((d = (u = this.options).onMutate) == null ? void 0 : d.call(u, e, i));
                ee !== this.state.context && Te(this, Rn, Sr).call(this, {
                    type: "pending",
                    context: ee,
                    variables: e,
                    isPaused: l
                })
            }
            const V = await R(this, hs).start();
            return await ((m = (h = R(this, Et).config).onSuccess) == null ? void 0 : m.call(h, V, e, this.state.context, this, i)),
            await ((y = (g = this.options).onSuccess) == null ? void 0 : y.call(g, V, e, this.state.context, i)),
            await ((k = (w = R(this, Et).config).onSettled) == null ? void 0 : k.call(w, V, null, this.state.variables, this.state.context, this, i)),
            await ((E = (T = this.options).onSettled) == null ? void 0 : E.call(T, V, null, e, this.state.context, i)),
            Te(this, Rn, Sr).call(this, {
                type: "success",
                data: V
            }),
            V
        } catch (V) {
            try {
                await ((b = (S = R(this, Et).config).onError) == null ? void 0 : b.call(S, V, e, this.state.context, this, i))
            } catch (ee) {
                Promise.reject(ee)
            }
            try {
                await ((A = (P = this.options).onError) == null ? void 0 : A.call(P, V, e, this.state.context, i))
            } catch (ee) {
                Promise.reject(ee)
            }
            try {
                await ((F = (M = R(this, Et).config).onSettled) == null ? void 0 : F.call(M, void 0, V, this.state.variables, this.state.context, this, i))
            } catch (ee) {
                Promise.reject(ee)
            }
            try {
                await ((J = ($ = this.options).onSettled) == null ? void 0 : J.call($, void 0, V, e, this.state.context, i))
            } catch (ee) {
                Promise.reject(ee)
            }
            throw Te(this, Rn, Sr).call(this, {
                type: "error",
                error: V
            }),
            V
        } finally {
            R(this, Et).runNext(this)
        }
    }
}
,
Uo = new WeakMap,
Pn = new WeakMap,
Et = new WeakMap,
hs = new WeakMap,
Rn = new WeakSet,
Sr = function(e) {
    const r = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                failureCount: e.failureCount,
                failureReason: e.error
            };
        case "pause":
            return {
                ...i,
                isPaused: !0
            };
        case "continue":
            return {
                ...i,
                isPaused: !1
            };
        case "pending":
            return {
                ...i,
                context: e.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: e.isPaused,
                status: "pending",
                variables: e.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...i,
                data: e.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...i,
                data: void 0,
                error: e.error,
                failureCount: i.failureCount + 1,
                failureReason: e.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = r(this.state),
    gt.batch( () => {
        R(this, Pn).forEach(i => {
            i.onMutationUpdate(e)
        }
        ),
        R(this, Et).notify({
            mutation: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
nv);
function bk() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Kn, wn, zo, rv, Sk = (rv = class extends qo {
    constructor(e={}) {
        super();
        pe(this, Kn);
        pe(this, wn);
        pe(this, zo);
        this.config = e,
        Z(this, Kn, new Set),
        Z(this, wn, new Map),
        Z(this, zo, 0)
    }
    build(e, r, i) {
        const a = new wk({
            client: e,
            mutationCache: this,
            mutationId: ++ll(this, zo)._,
            options: e.defaultMutationOptions(r),
            state: i
        });
        return this.add(a),
        a
    }
    add(e) {
        R(this, Kn).add(e);
        const r = fl(e);
        if (typeof r == "string") {
            const i = R(this, wn).get(r);
            i ? i.push(e) : R(this, wn).set(r, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (R(this, Kn).delete(e)) {
            const r = fl(e);
            if (typeof r == "string") {
                const i = R(this, wn).get(r);
                if (i)
                    if (i.length > 1) {
                        const a = i.indexOf(e);
                        a !== -1 && i.splice(a, 1)
                    } else
                        i[0] === e && R(this, wn).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const r = fl(e);
        if (typeof r == "string") {
            const i = R(this, wn).get(r)
              , a = i == null ? void 0 : i.find(l => l.state.status === "pending");
            return !a || a === e
        } else
            return !0
    }
    runNext(e) {
        var i;
        const r = fl(e);
        if (typeof r == "string") {
            const a = (i = R(this, wn).get(r)) == null ? void 0 : i.find(l => l !== e && l.state.isPaused);
            return (a == null ? void 0 : a.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        gt.batch( () => {
            R(this, Kn).forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            ),
            R(this, Kn).clear(),
            R(this, wn).clear()
        }
        )
    }
    getAll() {
        return Array.from(R(this, Kn))
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => jg(r, i))
    }
    findAll(e={}) {
        return this.getAll().filter(r => jg(e, r))
    }
    notify(e) {
        gt.batch( () => {
            this.listeners.forEach(r => {
                r(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const e = this.getAll().filter(r => r.state.isPaused);
        return gt.batch( () => Promise.all(e.map(r => r.continue().catch(Ft))))
    }
}
,
Kn = new WeakMap,
wn = new WeakMap,
zo = new WeakMap,
rv);
function fl(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}
var An, sv, kk = (sv = class extends qo {
    constructor(e={}) {
        super();
        pe(this, An);
        this.config = e,
        Z(this, An, new Map)
    }
    build(e, r, i) {
        const a = r.queryKey
          , l = r.queryHash ?? Cf(a, r);
        let u = this.get(l);
        return u || (u = new mk({
            client: e,
            queryKey: a,
            queryHash: l,
            options: e.defaultQueryOptions(r),
            state: i,
            defaultOptions: e.getQueryDefaults(a)
        }),
        this.add(u)),
        u
    }
    add(e) {
        R(this, An).has(e.queryHash) || (R(this, An).set(e.queryHash, e),
        this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        const r = R(this, An).get(e.queryHash);
        r && (e.destroy(),
        r === e && R(this, An).delete(e.queryHash),
        this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        gt.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return R(this, An).get(e)
    }
    getAll() {
        return [...R(this, An).values()]
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => Og(r, i))
    }
    findAll(e={}) {
        const r = this.getAll();
        return Object.keys(e).length > 0 ? r.filter(i => Og(e, i)) : r
    }
    notify(e) {
        gt.batch( () => {
            this.listeners.forEach(r => {
                r(e)
            }
            )
        }
        )
    }
    onFocus() {
        gt.batch( () => {
            this.getAll().forEach(e => {
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        gt.batch( () => {
            this.getAll().forEach(e => {
                e.onOnline()
            }
            )
        }
        )
    }
}
,
An = new WeakMap,
sv), Qe, Rr, Ar, li, ui, Nr, ci, di, iv, Ek = (iv = class {
    constructor(t={}) {
        pe(this, Qe);
        pe(this, Rr);
        pe(this, Ar);
        pe(this, li);
        pe(this, ui);
        pe(this, Nr);
        pe(this, ci);
        pe(this, di);
        Z(this, Qe, t.queryCache || new kk),
        Z(this, Rr, t.mutationCache || new Sk),
        Z(this, Ar, t.defaultOptions || {}),
        Z(this, li, new Map),
        Z(this, ui, new Map),
        Z(this, Nr, 0)
    }
    mount() {
        ll(this, Nr)._++,
        R(this, Nr) === 1 && (Z(this, ci, _f.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            R(this, Qe).onFocus())
        }
        )),
        Z(this, di, Ml.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            R(this, Qe).onOnline())
        }
        )))
    }
    unmount() {
        var t, e;
        ll(this, Nr)._--,
        R(this, Nr) === 0 && ((t = R(this, ci)) == null || t.call(this),
        Z(this, ci, void 0),
        (e = R(this, di)) == null || e.call(this),
        Z(this, di, void 0))
    }
    isFetching(t) {
        return R(this, Qe).findAll({
            ...t,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(t) {
        return R(this, Rr).findAll({
            ...t,
            status: "pending"
        }).length
    }
    getQueryData(t) {
        var r;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (r = R(this, Qe).get(e.queryHash)) == null ? void 0 : r.state.data
    }
    ensureQueryData(t) {
        const e = this.defaultQueryOptions(t)
          , r = R(this, Qe).build(this, e)
          , i = r.state.data;
        return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(jr(e.staleTime, r)) && this.prefetchQuery(e),
        Promise.resolve(i))
    }
    getQueriesData(t) {
        return R(this, Qe).findAll(t).map( ({queryKey: e, state: r}) => {
            const i = r.data;
            return [e, i]
        }
        )
    }
    setQueryData(t, e, r) {
        const i = this.defaultQueryOptions({
            queryKey: t
        })
          , a = R(this, Qe).get(i.queryHash)
          , l = a == null ? void 0 : a.state.data
          , u = sk(e, l);
        if (u !== void 0)
            return R(this, Qe).build(this, i).setData(u, {
                ...r,
                manual: !0
            })
    }
    setQueriesData(t, e, r) {
        return gt.batch( () => R(this, Qe).findAll(t).map( ({queryKey: i}) => [i, this.setQueryData(i, e, r)]))
    }
    getQueryState(t) {
        var r;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (r = R(this, Qe).get(e.queryHash)) == null ? void 0 : r.state
    }
    removeQueries(t) {
        const e = R(this, Qe);
        gt.batch( () => {
            e.findAll(t).forEach(r => {
                e.remove(r)
            }
            )
        }
        )
    }
    resetQueries(t, e) {
        const r = R(this, Qe);
        return gt.batch( () => (r.findAll(t).forEach(i => {
            i.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...t
        }, e)))
    }
    cancelQueries(t, e={}) {
        const r = {
            revert: !0,
            ...e
        }
          , i = gt.batch( () => R(this, Qe).findAll(t).map(a => a.cancel(r)));
        return Promise.all(i).then(Ft).catch(Ft)
    }
    invalidateQueries(t, e={}) {
        return gt.batch( () => (R(this, Qe).findAll(t).forEach(r => {
            r.invalidate()
        }
        ),
        (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...t,
            type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
        }, e)))
    }
    refetchQueries(t, e={}) {
        const r = {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }
          , i = gt.batch( () => R(this, Qe).findAll(t).filter(a => !a.isDisabled() && !a.isStatic()).map(a => {
            let l = a.fetch(void 0, r);
            return r.throwOnError || (l = l.catch(Ft)),
            a.state.fetchStatus === "paused" ? Promise.resolve() : l
        }
        ));
        return Promise.all(i).then(Ft)
    }
    fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const r = R(this, Qe).build(this, e);
        return r.isStaleByTime(jr(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
    }
    prefetchQuery(t) {
        return this.fetchQuery(t).then(Ft).catch(Ft)
    }
    fetchInfiniteQuery(t) {
        return t.behavior = Bg(t.pages),
        this.fetchQuery(t)
    }
    prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(Ft).catch(Ft)
    }
    ensureInfiniteQueryData(t) {
        return t.behavior = Bg(t.pages),
        this.ensureQueryData(t)
    }
    resumePausedMutations() {
        return Ml.isOnline() ? R(this, Rr).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return R(this, Qe)
    }
    getMutationCache() {
        return R(this, Rr)
    }
    getDefaultOptions() {
        return R(this, Ar)
    }
    setDefaultOptions(t) {
        Z(this, Ar, t)
    }
    setQueryDefaults(t, e) {
        R(this, li).set(Ao(t), {
            queryKey: t,
            defaultOptions: e
        })
    }
    getQueryDefaults(t) {
        const e = [...R(this, li).values()]
          , r = {};
        return e.forEach(i => {
            No(t, i.queryKey) && Object.assign(r, i.defaultOptions)
        }
        ),
        r
    }
    setMutationDefaults(t, e) {
        R(this, ui).set(Ao(t), {
            mutationKey: t,
            defaultOptions: e
        })
    }
    getMutationDefaults(t) {
        const e = [...R(this, ui).values()]
          , r = {};
        return e.forEach(i => {
            No(t, i.mutationKey) && Object.assign(r, i.defaultOptions)
        }
        ),
        r
    }
    defaultQueryOptions(t) {
        if (t._defaulted)
            return t;
        const e = {
            ...R(this, Ar).queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0
        };
        return e.queryHash || (e.queryHash = Cf(e.queryKey, e)),
        e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"),
        e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
        !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
        e.queryFn === Tf && (e.enabled = !1),
        e
    }
    defaultMutationOptions(t) {
        return t != null && t._defaulted ? t : {
            ...R(this, Ar).mutations,
            ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        R(this, Qe).clear(),
        R(this, Rr).clear()
    }
}
,
Qe = new WeakMap,
Rr = new WeakMap,
Ar = new WeakMap,
li = new WeakMap,
ui = new WeakMap,
Nr = new WeakMap,
ci = new WeakMap,
di = new WeakMap,
iv), Uv = L.createContext(void 0), Ck = t => {
    const e = L.useContext(Uv);
    if (!e)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e
}
, Tk = ({client: t, children: e}) => (L.useEffect( () => (t.mount(),
() => {
    t.unmount()
}
), [t]),
v.jsx(Uv.Provider, {
    value: t,
    children: e
})), zv = L.createContext(!1), _k = () => L.useContext(zv);
zv.Provider;
function Pk() {
    let t = !1;
    return {
        clearReset: () => {
            t = !1
        }
        ,
        reset: () => {
            t = !0
        }
        ,
        isReset: () => t
    }
}
var Rk = L.createContext(Pk())
  , Ak = () => L.useContext(Rk)
  , Nk = (t, e, r) => {
    const i = r != null && r.state.error && typeof t.throwOnError == "function" ? Lv(t.throwOnError, [r.state.error, r]) : t.throwOnError;
    (t.suspense || t.experimental_prefetchInRender || i) && (e.isReset() || (t.retryOnMount = !1))
}
  , Ok = t => {
    L.useEffect( () => {
        t.clearReset()
    }
    , [t])
}
  , jk = ({result: t, errorResetBoundary: e, throwOnError: r, query: i, suspense: a}) => t.isError && !e.isReset() && !t.isFetching && i && (a && t.data === void 0 || Lv(r, [t.error, i]))
  , Mk = t => {
    if (t.suspense) {
        const r = a => a === "static" ? a : Math.max(a ?? 1e3, 1e3)
          , i = t.staleTime;
        t.staleTime = typeof i == "function" ? (...a) => r(i(...a)) : r(i),
        typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3))
    }
}
  , Lk = (t, e) => t.isLoading && t.isFetching && !e
  , Dk = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending
  , zg = (t, e, r) => e.fetchOptimistic(t).catch( () => {
    r.clearReset()
}
);
function Ik(t, e, r) {
    var w, k, T, E;
    const i = _k()
      , a = Ak()
      , l = Ck()
      , u = l.defaultQueryOptions(t);
    (k = (w = l.getDefaultOptions().queries) == null ? void 0 : w._experimental_beforeQuery) == null || k.call(w, u);
    const d = l.getQueryCache().get(u.queryHash);
    u._optimisticResults = i ? "isRestoring" : "optimistic",
    Mk(u),
    Nk(u, a, d),
    Ok(a);
    const h = !l.getQueryCache().get(u.queryHash)
      , [m] = L.useState( () => new e(l,u))
      , g = m.getOptimisticResult(u)
      , y = !i && t.subscribed !== !1;
    if (L.useSyncExternalStore(L.useCallback(S => {
        const b = y ? m.subscribe(gt.batchCalls(S)) : Ft;
        return m.updateResult(),
        b
    }
    , [m, y]), () => m.getCurrentResult(), () => m.getCurrentResult()),
    L.useEffect( () => {
        m.setOptions(u)
    }
    , [u, m]),
    Dk(u, g))
        throw zg(u, m, a);
    if (jk({
        result: g,
        errorResetBoundary: a,
        throwOnError: u.throwOnError,
        query: d,
        suspense: u.suspense
    }))
        throw g.error;
    if ((E = (T = l.getDefaultOptions().queries) == null ? void 0 : T._experimental_afterQuery) == null || E.call(T, u, g),
    u.experimental_prefetchInRender && !ys && Lk(g, i)) {
        const S = h ? zg(u, m, a) : d == null ? void 0 : d.promise;
        S == null || S.catch(Ft).finally( () => {
            m.updateResult()
        }
        )
    }
    return u.notifyOnChangeProps ? g : m.trackResult(g)
}
function Fk(t, e) {
    return Ik(t, gk)
}
const Vk = new Ek({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});
av();
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ll() {
    return Ll = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }
    ,
    Ll.apply(this, arguments)
}
var Or;
(function(t) {
    t.Pop = "POP",
    t.Push = "PUSH",
    t.Replace = "REPLACE"
}
)(Or || (Or = {}));
const $g = "popstate";
function Bk(t) {
    t === void 0 && (t = {});
    function e(i, a) {
        let {pathname: l, search: u, hash: d} = i.location;
        return qd("", {
            pathname: l,
            search: u,
            hash: d
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }
    function r(i, a) {
        return typeof a == "string" ? a : Hv(a)
    }
    return zk(e, r, null, t)
}
function Bt(t, e) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(e)
}
function $v(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}
function Uk() {
    return Math.random().toString(36).substr(2, 8)
}
function Hg(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}
function qd(t, e, r, i) {
    return r === void 0 && (r = null),
    Ll({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? Ql(e) : e, {
        state: r,
        key: e && e.key || i || Uk()
    })
}
function Hv(t) {
    let {pathname: e="/", search: r="", hash: i=""} = t;
    return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r),
    i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i),
    e
}
function Ql(t) {
    let e = {};
    if (t) {
        let r = t.indexOf("#");
        r >= 0 && (e.hash = t.substr(r),
        t = t.substr(0, r));
        let i = t.indexOf("?");
        i >= 0 && (e.search = t.substr(i),
        t = t.substr(0, i)),
        t && (e.pathname = t)
    }
    return e
}
function zk(t, e, r, i) {
    i === void 0 && (i = {});
    let {window: a=document.defaultView, v5Compat: l=!1} = i
      , u = a.history
      , d = Or.Pop
      , h = null
      , m = g();
    m == null && (m = 0,
    u.replaceState(Ll({}, u.state, {
        idx: m
    }), ""));
    function g() {
        return (u.state || {
            idx: null
        }).idx
    }
    function y() {
        d = Or.Pop;
        let S = g()
          , b = S == null ? null : S - m;
        m = S,
        h && h({
            action: d,
            location: E.location,
            delta: b
        })
    }
    function w(S, b) {
        d = Or.Push;
        let P = qd(E.location, S, b);
        m = g() + 1;
        let A = Hg(P, m)
          , M = E.createHref(P);
        try {
            u.pushState(A, "", M)
        } catch (F) {
            if (F instanceof DOMException && F.name === "DataCloneError")
                throw F;
            a.location.assign(M)
        }
        l && h && h({
            action: d,
            location: E.location,
            delta: 1
        })
    }
    function k(S, b) {
        d = Or.Replace;
        let P = qd(E.location, S, b);
        m = g();
        let A = Hg(P, m)
          , M = E.createHref(P);
        u.replaceState(A, "", M),
        l && h && h({
            action: d,
            location: E.location,
            delta: 0
        })
    }
    function T(S) {
        let b = a.location.origin !== "null" ? a.location.origin : a.location.href
          , P = typeof S == "string" ? S : Hv(S);
        return P = P.replace(/ $/, "%20"),
        Bt(b, "No window.location.(origin|href) available to create URL for href: " + P),
        new URL(P,b)
    }
    let E = {
        get action() {
            return d
        },
        get location() {
            return t(a, u)
        },
        listen(S) {
            if (h)
                throw new Error("A history only accepts one active listener");
            return a.addEventListener($g, y),
            h = S,
            () => {
                a.removeEventListener($g, y),
                h = null
            }
        },
        createHref(S) {
            return e(a, S)
        },
        createURL: T,
        encodeLocation(S) {
            let b = T(S);
            return {
                pathname: b.pathname,
                search: b.search,
                hash: b.hash
            }
        },
        push: w,
        replace: k,
        go(S) {
            return u.go(S)
        }
    };
    return E
}
var qg;
(function(t) {
    t.data = "data",
    t.deferred = "deferred",
    t.redirect = "redirect",
    t.error = "error"
}
)(qg || (qg = {}));
function $k(t, e, r) {
    return r === void 0 && (r = "/"),
    Hk(t, e, r)
}
function Hk(t, e, r, i) {
    let a = typeof e == "string" ? Ql(e) : e
      , l = Kv(a.pathname || "/", r);
    if (l == null)
        return null;
    let u = qv(t);
    qk(u);
    let d = null;
    for (let h = 0; d == null && h < u.length; ++h) {
        let m = r5(l);
        d = e5(u[h], m)
    }
    return d
}
function qv(t, e, r, i) {
    e === void 0 && (e = []),
    r === void 0 && (r = []),
    i === void 0 && (i = "");
    let a = (l, u, d) => {
        let h = {
            relativePath: d === void 0 ? l.path || "" : d,
            caseSensitive: l.caseSensitive === !0,
            childrenIndex: u,
            route: l
        };
        h.relativePath.startsWith("/") && (Bt(h.relativePath.startsWith(i), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        h.relativePath = h.relativePath.slice(i.length));
        let m = Zs([i, h.relativePath])
          , g = r.concat(h);
        l.children && l.children.length > 0 && (Bt(l.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + m + '".')),
        qv(l.children, e, g, m)),
        !(l.path == null && !l.index) && e.push({
            path: m,
            score: Jk(m, l.index),
            routesMeta: g
        })
    }
    ;
    return t.forEach( (l, u) => {
        var d;
        if (l.path === "" || !((d = l.path) != null && d.includes("?")))
            a(l, u);
        else
            for (let h of Wv(l.path))
                a(l, u, h)
    }
    ),
    e
}
function Wv(t) {
    let e = t.split("/");
    if (e.length === 0)
        return [];
    let[r,...i] = e
      , a = r.endsWith("?")
      , l = r.replace(/\?$/, "");
    if (i.length === 0)
        return a ? [l, ""] : [l];
    let u = Wv(i.join("/"))
      , d = [];
    return d.push(...u.map(h => h === "" ? l : [l, h].join("/"))),
    a && d.push(...u),
    d.map(h => t.startsWith("/") && h === "" ? "/" : h)
}
function qk(t) {
    t.sort( (e, r) => e.score !== r.score ? r.score - e.score : Zk(e.routesMeta.map(i => i.childrenIndex), r.routesMeta.map(i => i.childrenIndex)))
}
const Wk = /^:[\w-]+$/
  , Kk = 3
  , Qk = 2
  , Gk = 1
  , Yk = 10
  , Xk = -2
  , Wg = t => t === "*";
function Jk(t, e) {
    let r = t.split("/")
      , i = r.length;
    return r.some(Wg) && (i += Xk),
    e && (i += Qk),
    r.filter(a => !Wg(a)).reduce( (a, l) => a + (Wk.test(l) ? Kk : l === "" ? Gk : Yk), i)
}
function Zk(t, e) {
    return t.length === e.length && t.slice(0, -1).every( (i, a) => i === e[a]) ? t[t.length - 1] - e[e.length - 1] : 0
}
function e5(t, e, r) {
    let {routesMeta: i} = t
      , a = {}
      , l = "/"
      , u = [];
    for (let d = 0; d < i.length; ++d) {
        let h = i[d]
          , m = d === i.length - 1
          , g = l === "/" ? e : e.slice(l.length) || "/"
          , y = t5({
            path: h.relativePath,
            caseSensitive: h.caseSensitive,
            end: m
        }, g)
          , w = h.route;
        if (!y)
            return null;
        Object.assign(a, y.params),
        u.push({
            params: a,
            pathname: Zs([l, y.pathname]),
            pathnameBase: s5(Zs([l, y.pathnameBase])),
            route: w
        }),
        y.pathnameBase !== "/" && (l = Zs([l, y.pathnameBase]))
    }
    return u
}
function t5(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let[r,i] = n5(t.path, t.caseSensitive, t.end)
      , a = e.match(r);
    if (!a)
        return null;
    let l = a[0]
      , u = l.replace(/(.)\/+$/, "$1")
      , d = a.slice(1);
    return {
        params: i.reduce( (m, g, y) => {
            let {paramName: w, isOptional: k} = g;
            if (w === "*") {
                let E = d[y] || "";
                u = l.slice(0, l.length - E.length).replace(/(.)\/+$/, "$1")
            }
            const T = d[y];
            return k && !T ? m[w] = void 0 : m[w] = (T || "").replace(/%2F/g, "/"),
            m
        }
        , {}),
        pathname: l,
        pathnameBase: u,
        pattern: t
    }
}
function n5(t, e, r) {
    e === void 0 && (e = !1),
    r === void 0 && (r = !0),
    $v(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = []
      , a = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (u, d, h) => (i.push({
        paramName: d,
        isOptional: h != null
    }),
    h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
        paramName: "*"
    }),
    a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : t !== "" && t !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a,e ? void 0 : "i"), i]
}
function r5(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return $v(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")),
        t
    }
}
function Kv(t, e) {
    if (e === "/")
        return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase()))
        return null;
    let r = e.endsWith("/") ? e.length - 1 : e.length
      , i = t.charAt(r);
    return i && i !== "/" ? null : t.slice(r) || "/"
}
const Zs = t => t.join("/").replace(/\/\/+/g, "/")
  , s5 = t => t.replace(/\/+$/, "").replace(/^\/*/, "/");
function i5(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data"in t
}
const Qv = ["post", "put", "patch", "delete"];
new Set(Qv);
const o5 = ["get", ...Qv];
new Set(o5);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Dl() {
    return Dl = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }
    ,
    Dl.apply(this, arguments)
}
const a5 = L.createContext(null)
  , l5 = L.createContext(null)
  , Gv = L.createContext(null)
  , Gl = L.createContext(null)
  , Yl = L.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Yv = L.createContext(null);
function Rf() {
    return L.useContext(Gl) != null
}
function Xv() {
    return Rf() || Bt(!1),
    L.useContext(Gl).location
}
function u5(t, e) {
    return c5(t, e)
}
function c5(t, e, r, i) {
    Rf() || Bt(!1);
    let {navigator: a} = L.useContext(Gv)
      , {matches: l} = L.useContext(Yl)
      , u = l[l.length - 1]
      , d = u ? u.params : {};
    u && u.pathname;
    let h = u ? u.pathnameBase : "/";
    u && u.route;
    let m = Xv(), g;
    if (e) {
        var y;
        let S = typeof e == "string" ? Ql(e) : e;
        h === "/" || (y = S.pathname) != null && y.startsWith(h) || Bt(!1),
        g = S
    } else
        g = m;
    let w = g.pathname || "/"
      , k = w;
    if (h !== "/") {
        let S = h.replace(/^\//, "").split("/");
        k = "/" + w.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let T = $k(t, {
        pathname: k
    })
      , E = m5(T && T.map(S => Object.assign({}, S, {
        params: Object.assign({}, d, S.params),
        pathname: Zs([h, a.encodeLocation ? a.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? h : Zs([h, a.encodeLocation ? a.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), l, r, i);
    return e && E ? L.createElement(Gl.Provider, {
        value: {
            location: Dl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, g),
            navigationType: Or.Pop
        }
    }, E) : E
}
function d5() {
    let t = x5()
      , e = i5(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t)
      , r = t instanceof Error ? t.stack : null
      , a = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return L.createElement(L.Fragment, null, L.createElement("h2", null, "Unexpected Application Error!"), L.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), r ? L.createElement("pre", {
        style: a
    }, r) : null, null)
}
const f5 = L.createElement(d5, null);
class h5 extends L.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, r) {
        return r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation
        }
    }
    componentDidCatch(e, r) {
        console.error("React Router caught the following error during render", e, r)
    }
    render() {
        return this.state.error !== void 0 ? L.createElement(Yl.Provider, {
            value: this.props.routeContext
        }, L.createElement(Yv.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function p5(t) {
    let {routeContext: e, match: r, children: i} = t
      , a = L.useContext(a5);
    return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    L.createElement(Yl.Provider, {
        value: e
    }, i)
}
function m5(t, e, r, i) {
    var a;
    if (e === void 0 && (e = []),
    r === void 0 && (r = null),
    i === void 0 && (i = null),
    t == null) {
        var l;
        if (!r)
            return null;
        if (r.errors)
            t = r.matches;
        else if ((l = i) != null && l.v7_partialHydration && e.length === 0 && !r.initialized && r.matches.length > 0)
            t = r.matches;
        else
            return null
    }
    let u = t
      , d = (a = r) == null ? void 0 : a.errors;
    if (d != null) {
        let g = u.findIndex(y => y.route.id && (d == null ? void 0 : d[y.route.id]) !== void 0);
        g >= 0 || Bt(!1),
        u = u.slice(0, Math.min(u.length, g + 1))
    }
    let h = !1
      , m = -1;
    if (r && i && i.v7_partialHydration)
        for (let g = 0; g < u.length; g++) {
            let y = u[g];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = g),
            y.route.id) {
                let {loaderData: w, errors: k} = r
                  , T = y.route.loader && w[y.route.id] === void 0 && (!k || k[y.route.id] === void 0);
                if (y.route.lazy || T) {
                    h = !0,
                    m >= 0 ? u = u.slice(0, m + 1) : u = [u[0]];
                    break
                }
            }
        }
    return u.reduceRight( (g, y, w) => {
        let k, T = !1, E = null, S = null;
        r && (k = d && y.route.id ? d[y.route.id] : void 0,
        E = y.route.errorElement || f5,
        h && (m < 0 && w === 0 ? (w5("route-fallback"),
        T = !0,
        S = null) : m === w && (T = !0,
        S = y.route.hydrateFallbackElement || null)));
        let b = e.concat(u.slice(0, w + 1))
          , P = () => {
            let A;
            return k ? A = E : T ? A = S : y.route.Component ? A = L.createElement(y.route.Component, null) : y.route.element ? A = y.route.element : A = g,
            L.createElement(p5, {
                match: y,
                routeContext: {
                    outlet: g,
                    matches: b,
                    isDataRoute: r != null
                },
                children: A
            })
        }
        ;
        return r && (y.route.ErrorBoundary || y.route.errorElement || w === 0) ? L.createElement(h5, {
            location: r.location,
            revalidation: r.revalidation,
            component: E,
            error: k,
            children: P(),
            routeContext: {
                outlet: null,
                matches: b,
                isDataRoute: !0
            }
        }) : P()
    }
    , null)
}
var Jv = (function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseLoaderData = "useLoaderData",
    t.UseActionData = "useActionData",
    t.UseRouteError = "useRouteError",
    t.UseNavigation = "useNavigation",
    t.UseRouteLoaderData = "useRouteLoaderData",
    t.UseMatches = "useMatches",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t.UseRouteId = "useRouteId",
    t
}
)(Jv || {});
function g5(t) {
    let e = L.useContext(l5);
    return e || Bt(!1),
    e
}
function y5(t) {
    let e = L.useContext(Yl);
    return e || Bt(!1),
    e
}
function v5(t) {
    let e = y5()
      , r = e.matches[e.matches.length - 1];
    return r.route.id || Bt(!1),
    r.route.id
}
function x5() {
    var t;
    let e = L.useContext(Yv)
      , r = g5(Jv.UseRouteError)
      , i = v5();
    return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[i]
}
const Kg = {};
function w5(t, e, r) {
    Kg[t] || (Kg[t] = !0)
}
function b5(t, e) {
    t == null || t.v7_startTransition,
    t == null || t.v7_relativeSplatPath
}
function Wd(t) {
    Bt(!1)
}
function S5(t) {
    let {basename: e="/", children: r=null, location: i, navigationType: a=Or.Pop, navigator: l, static: u=!1, future: d} = t;
    Rf() && Bt(!1);
    let h = e.replace(/^\/*/, "/")
      , m = L.useMemo( () => ({
        basename: h,
        navigator: l,
        static: u,
        future: Dl({
            v7_relativeSplatPath: !1
        }, d)
    }), [h, d, l, u]);
    typeof i == "string" && (i = Ql(i));
    let {pathname: g="/", search: y="", hash: w="", state: k=null, key: T="default"} = i
      , E = L.useMemo( () => {
        let S = Kv(g, h);
        return S == null ? null : {
            location: {
                pathname: S,
                search: y,
                hash: w,
                state: k,
                key: T
            },
            navigationType: a
        }
    }
    , [h, g, y, w, k, T, a]);
    return E == null ? null : L.createElement(Gv.Provider, {
        value: m
    }, L.createElement(Gl.Provider, {
        children: r,
        value: E
    }))
}
function k5(t) {
    let {children: e, location: r} = t;
    return u5(Kd(e), r)
}
new Promise( () => {}
);
function Kd(t, e) {
    e === void 0 && (e = []);
    let r = [];
    return L.Children.forEach(t, (i, a) => {
        if (!L.isValidElement(i))
            return;
        let l = [...e, a];
        if (i.type === L.Fragment) {
            r.push.apply(r, Kd(i.props.children, l));
            return
        }
        i.type !== Wd && Bt(!1),
        !i.props.index || !i.props.children || Bt(!1);
        let u = {
            id: i.props.id || l.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (u.children = Kd(i.props.children, l)),
        r.push(u)
    }
    ),
    r
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const E5 = "6";
try {
    window.__reactRouterVersion = E5
} catch {}
const C5 = "startTransition"
  , Qg = v2[C5];
function T5(t) {
    let {basename: e, children: r, future: i, window: a} = t
      , l = L.useRef();
    l.current == null && (l.current = Bk({
        window: a,
        v5Compat: !0
    }));
    let u = l.current
      , [d,h] = L.useState({
        action: u.action,
        location: u.location
    })
      , {v7_startTransition: m} = i || {}
      , g = L.useCallback(y => {
        m && Qg ? Qg( () => h(y)) : h(y)
    }
    , [h, m]);
    return L.useLayoutEffect( () => u.listen(g), [u, g]),
    L.useEffect( () => b5(i), [i]),
    L.createElement(S5, {
        basename: e,
        children: r,
        location: d.location,
        navigationType: d.action,
        navigator: u,
        future: i
    })
}
var Gg;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration",
    t.UseSubmit = "useSubmit",
    t.UseSubmitFetcher = "useSubmitFetcher",
    t.UseFetcher = "useFetcher",
    t.useViewTransitionState = "useViewTransitionState"
}
)(Gg || (Gg = {}));
var Yg;
(function(t) {
    t.UseFetcher = "useFetcher",
    t.UseFetchers = "useFetchers",
    t.UseScrollRestoration = "useScrollRestoration"
}
)(Yg || (Yg = {}));
function Zv(t, e) {
    return function() {
        return t.apply(e, arguments)
    }
}
const {toString: _5} = Object.prototype
  , {getPrototypeOf: hi} = Object
  , {iterator: Wo, toStringTag: ex} = Symbol
  , Il = ( ({hasOwnProperty: t}) => (e, r) => t.call(e, r))(Object.prototype)
  , Oo = (t, e) => {
    let r = t;
    const i = [];
    for (; r != null && r !== Object.prototype; ) {
        if (i.indexOf(r) !== -1)
            return !1;
        if (i.push(r),
        Il(r, e))
            return !0;
        r = hi(r)
    }
    return !1
}
  , P5 = (t, e) => t != null && Oo(t, e) ? t[e] : void 0
  , Af = (t => e => {
    const r = _5.call(e);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Sn = t => (t = t.toLowerCase(),
e => Af(e) === t)
  , Xl = t => e => typeof e === t
  , {isArray: vs} = Array
  , pi = Xl("undefined");
function xi(t) {
    return t !== null && !pi(t) && t.constructor !== null && !pi(t.constructor) && Vt(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const tx = Sn("ArrayBuffer");
function R5(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && tx(t.buffer),
    e
}
const A5 = Xl("string")
  , Vt = Xl("function")
  , nx = Xl("number")
  , wi = t => t !== null && typeof t == "object"
  , N5 = t => t === !0 || t === !1
  , Sl = t => {
    if (!wi(t))
        return !1;
    const e = hi(t);
    return (e === null || e === Object.prototype || hi(e) === null) && !Oo(t, ex) && !Oo(t, Wo)
}
  , O5 = t => {
    if (!wi(t) || xi(t))
        return !1;
    try {
        return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype
    } catch {
        return !1
    }
}
  , j5 = Sn("Date")
  , M5 = Sn("File")
  , L5 = t => !!(t && typeof t.uri < "u")
  , D5 = t => t && typeof t.getParts < "u"
  , I5 = Sn("Blob")
  , F5 = Sn("FileList")
  , V5 = t => wi(t) && Vt(t.pipe);
function B5() {
    return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}
}
const Xg = B5()
  , Jg = typeof Xg.FormData < "u" ? Xg.FormData : void 0
  , U5 = t => {
    if (!t)
        return !1;
    if (Jg && t instanceof Jg)
        return !0;
    const e = hi(t);
    if (!e || e === Object.prototype || !Vt(t.append))
        return !1;
    const r = Af(t);
    return r === "formdata" || r === "object" && Vt(t.toString) && t.toString() === "[object FormData]"
}
  , z5 = Sn("URLSearchParams")
  , [$5,H5,q5,W5] = ["ReadableStream", "Request", "Response", "Headers"].map(Sn)
  , K5 = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ko(t, e, {allOwnKeys: r=!1}={}) {
    if (t === null || typeof t > "u")
        return;
    let i, a;
    if (typeof t != "object" && (t = [t]),
    vs(t))
        for (i = 0,
        a = t.length; i < a; i++)
            e.call(null, t[i], i, t);
    else {
        if (xi(t))
            return;
        const l = r ? Object.getOwnPropertyNames(t) : Object.keys(t)
          , u = l.length;
        let d;
        for (i = 0; i < u; i++)
            d = l[i],
            e.call(null, t[d], d, t)
    }
}
function rx(t, e) {
    if (xi(t))
        return null;
    e = e.toLowerCase();
    const r = Object.keys(t);
    let i = r.length, a;
    for (; i-- > 0; )
        if (a = r[i],
        e === a.toLowerCase())
            return a;
    return null
}
const rs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , sx = t => !pi(t) && t !== rs;
function Qd(...t) {
    const {caseless: e, skipUndefined: r} = sx(this) && this || {}
      , i = {}
      , a = (l, u) => {
        if (u === "__proto__" || u === "constructor" || u === "prototype")
            return;
        const d = e && typeof u == "string" && rx(i, u) || u
          , h = Il(i, d) ? i[d] : void 0;
        Sl(h) && Sl(l) ? i[d] = Qd(h, l) : Sl(l) ? i[d] = Qd({}, l) : vs(l) ? i[d] = l.slice() : (!r || !pi(l)) && (i[d] = l)
    }
    ;
    for (let l = 0, u = t.length; l < u; l++) {
        const d = t[l];
        if (!d || xi(d) || (Ko(d, a),
        typeof d != "object" || vs(d)))
            continue;
        const h = Object.getOwnPropertySymbols(d);
        for (let m = 0; m < h.length; m++) {
            const g = h[m];
            iE.call(d, g) && a(d[g], g)
        }
    }
    return i
}
const Q5 = (t, e, r, {allOwnKeys: i}={}) => (Ko(e, (a, l) => {
    r && Vt(a) ? Object.defineProperty(t, l, {
        __proto__: null,
        value: Zv(a, r),
        writable: !0,
        enumerable: !0,
        configurable: !0
    }) : Object.defineProperty(t, l, {
        __proto__: null,
        value: a,
        writable: !0,
        enumerable: !0,
        configurable: !0
    })
}
, {
    allOwnKeys: i
}),
t)
  , G5 = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)),
t)
  , Y5 = (t, e, r, i) => {
    t.prototype = Object.create(e.prototype, i),
    Object.defineProperty(t.prototype, "constructor", {
        __proto__: null,
        value: t,
        writable: !0,
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t, "super", {
        __proto__: null,
        value: e.prototype
    }),
    r && Object.assign(t.prototype, r)
}
  , X5 = (t, e, r, i) => {
    let a, l, u;
    const d = {};
    if (e = e || {},
    t == null)
        return e;
    do {
        for (a = Object.getOwnPropertyNames(t),
        l = a.length; l-- > 0; )
            u = a[l],
            (!i || i(u, t, e)) && !d[u] && (e[u] = t[u],
            d[u] = !0);
        t = r !== !1 && hi(t)
    } while (t && (!r || r(t, e)) && t !== Object.prototype);
    return e
}
  , J5 = (t, e, r) => {
    t = String(t),
    (r === void 0 || r > t.length) && (r = t.length),
    r -= e.length;
    const i = t.indexOf(e, r);
    return i !== -1 && i === r
}
  , Z5 = t => {
    if (!t)
        return null;
    if (vs(t))
        return t;
    let e = t.length;
    if (!nx(e))
        return null;
    const r = new Array(e);
    for (; e-- > 0; )
        r[e] = t[e];
    return r
}
  , eE = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && hi(Uint8Array))
  , tE = (t, e) => {
    const i = (t && t[Wo]).call(t);
    let a;
    for (; (a = i.next()) && !a.done; ) {
        const l = a.value;
        e.call(t, l[0], l[1])
    }
}
  , nE = (t, e) => {
    let r;
    const i = [];
    for (; (r = t.exec(e)) !== null; )
        i.push(r);
    return i
}
  , rE = Sn("HTMLFormElement")
  , sE = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, i, a) {
    return i.toUpperCase() + a
})
  , {propertyIsEnumerable: iE} = Object.prototype
  , oE = Sn("RegExp")
  , ix = (t, e) => {
    const r = Object.getOwnPropertyDescriptors(t)
      , i = {};
    Ko(r, (a, l) => {
        let u;
        (u = e(a, l, t)) !== !1 && (i[l] = u || a)
    }
    ),
    Object.defineProperties(t, i)
}
  , aE = t => {
    ix(t, (e, r) => {
        if (Vt(t) && ["arguments", "caller", "callee"].includes(r))
            return !1;
        const i = t[r];
        if (Vt(i)) {
            if (e.enumerable = !1,
            "writable"in e) {
                e.writable = !1;
                return
            }
            e.set || (e.set = () => {
                throw Error("Can not rewrite read-only method '" + r + "'")
            }
            )
        }
    }
    )
}
  , lE = (t, e) => {
    const r = {}
      , i = a => {
        a.forEach(l => {
            r[l] = !0
        }
        )
    }
    ;
    return vs(t) ? i(t) : i(String(t).split(e)),
    r
}
  , uE = () => {}
  , cE = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function dE(t) {
    return !!(t && Vt(t.append) && t[ex] === "FormData" && t[Wo])
}
const fE = t => {
    const e = new WeakSet
      , r = i => {
        if (wi(i)) {
            if (e.has(i))
                return;
            if (xi(i))
                return i;
            if (!("toJSON"in i)) {
                e.add(i);
                const a = vs(i) ? [] : {};
                return Ko(i, (l, u) => {
                    const d = r(l);
                    !pi(d) && (a[u] = d)
                }
                ),
                e.delete(i),
                a
            }
        }
        return i
    }
    ;
    return r(t)
}
  , hE = Sn("AsyncFunction")
  , pE = t => t && (wi(t) || Vt(t)) && Vt(t.then) && Vt(t.catch)
  , ox = ( (t, e) => t ? setImmediate : e ? ( (r, i) => (rs.addEventListener("message", ({source: a, data: l}) => {
    a === rs && l === r && i.length && i.shift()()
}
, !1),
a => {
    i.push(a),
    rs.postMessage(r, "*")
}
))(`axios@${Math.random()}`, []) : r => setTimeout(r))(typeof setImmediate == "function", Vt(rs.postMessage))
  , mE = typeof queueMicrotask < "u" ? queueMicrotask.bind(rs) : typeof process < "u" && process.nextTick || ox
  , ax = t => t != null && Vt(t[Wo])
  , gE = t => t != null && Oo(t, Wo) && ax(t)
  , j = {
    isArray: vs,
    isArrayBuffer: tx,
    isBuffer: xi,
    isFormData: U5,
    isArrayBufferView: R5,
    isString: A5,
    isNumber: nx,
    isBoolean: N5,
    isObject: wi,
    isPlainObject: Sl,
    isEmptyObject: O5,
    isReadableStream: $5,
    isRequest: H5,
    isResponse: q5,
    isHeaders: W5,
    isUndefined: pi,
    isDate: j5,
    isFile: M5,
    isReactNativeBlob: L5,
    isReactNative: D5,
    isBlob: I5,
    isRegExp: oE,
    isFunction: Vt,
    isStream: V5,
    isURLSearchParams: z5,
    isTypedArray: eE,
    isFileList: F5,
    forEach: Ko,
    merge: Qd,
    extend: Q5,
    trim: K5,
    stripBOM: G5,
    inherits: Y5,
    toFlatObject: X5,
    kindOf: Af,
    kindOfTest: Sn,
    endsWith: J5,
    toArray: Z5,
    forEachEntry: tE,
    matchAll: nE,
    isHTMLForm: rE,
    hasOwnProperty: Il,
    hasOwnProp: Il,
    hasOwnInPrototypeChain: Oo,
    getSafeProp: P5,
    reduceDescriptors: ix,
    freezeMethods: aE,
    toObjectSet: lE,
    toCamelCase: sE,
    noop: uE,
    toFiniteNumber: cE,
    findKey: rx,
    global: rs,
    isContextDefined: sx,
    isSpecCompliantForm: dE,
    toJSONObject: fE,
    isAsyncFn: hE,
    isThenable: pE,
    setImmediate: ox,
    asap: mE,
    isIterable: ax,
    isSafeIterable: gE
}
  , yE = j.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , vE = t => {
    const e = {};
    let r, i, a;
    return t && t.split(`
`).forEach(function(u) {
        a = u.indexOf(":"),
        r = u.substring(0, a).trim().toLowerCase(),
        i = u.substring(a + 1).trim(),
        !(!r || e[r] && yE[r]) && (r === "set-cookie" ? e[r] ? e[r].push(i) : e[r] = [i] : e[r] = e[r] ? e[r] + ", " + i : i)
    }),
    e
}
;
function xE(t) {
    let e = 0
      , r = t.length;
    for (; e < r; ) {
        const i = t.charCodeAt(e);
        if (i !== 9 && i !== 32)
            break;
        e += 1
    }
    for (; r > e; ) {
        const i = t.charCodeAt(r - 1);
        if (i !== 9 && i !== 32)
            break;
        r -= 1
    }
    return e === 0 && r === t.length ? t : t.slice(e, r)
}
const wE = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g")
  , bE = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");
function Nf(t, e) {
    return j.isArray(t) ? t.map(r => Nf(r, e)) : xE(String(t).replace(e, ""))
}
const SE = t => Nf(t, wE)
  , kE = t => Nf(t, bE);
function lx(t) {
    const e = Object.create(null);
    return j.forEach(t.toJSON(), (r, i) => {
        e[i] = kE(r)
    }
    ),
    e
}
const Zg = Symbol("internals");
function co(t) {
    return t && String(t).trim().toLowerCase()
}
function kl(t) {
    return t === !1 || t == null ? t : j.isArray(t) ? t.map(kl) : SE(String(t))
}
function EE(t) {
    const e = Object.create(null)
      , r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = r.exec(t); )
        e[i[1]] = i[2];
    return e
}
const CE = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function od(t, e, r, i, a) {
    if (j.isFunction(i))
        return i.call(this, e, r);
    if (a && (e = r),
    !!j.isString(e)) {
        if (j.isString(i))
            return e.indexOf(i) !== -1;
        if (j.isRegExp(i))
            return i.test(e)
    }
}
function TE(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, i) => r.toUpperCase() + i)
}
function _E(t, e) {
    const r = j.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(t, i + r, {
            __proto__: null,
            value: function(a, l, u) {
                return this[i].call(this, e, a, l, u)
            },
            configurable: !0
        })
    }
    )
}
let _t = class {
    constructor(e) {
        e && this.set(e)
    }
    set(e, r, i) {
        const a = this;
        function l(d, h, m) {
            const g = co(h);
            if (!g)
                return;
            const y = j.findKey(a, g);
            (!y || a[y] === void 0 || m === !0 || m === void 0 && a[y] !== !1) && (a[y || h] = kl(d))
        }
        const u = (d, h) => j.forEach(d, (m, g) => l(m, g, h));
        if (j.isPlainObject(e) || e instanceof this.constructor)
            u(e, r);
        else if (j.isString(e) && (e = e.trim()) && !CE(e))
            u(vE(e), r);
        else if (j.isObject(e) && j.isSafeIterable(e)) {
            let d = Object.create(null), h, m;
            for (const g of e) {
                if (!j.isArray(g))
                    throw new TypeError("Object iterator must return a key-value pair");
                m = g[0],
                j.hasOwnProp(d, m) ? (h = d[m],
                d[m] = j.isArray(h) ? [...h, g[1]] : [h, g[1]]) : d[m] = g[1]
            }
            u(d, r)
        } else
            e != null && l(r, e, i);
        return this
    }
    get(e, r) {
        if (e = co(e),
        e) {
            const i = j.findKey(this, e);
            if (i) {
                const a = this[i];
                if (!r)
                    return a;
                if (r === !0)
                    return EE(a);
                if (j.isFunction(r))
                    return r.call(this, a, i);
                if (j.isRegExp(r))
                    return r.exec(a);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, r) {
        if (e = co(e),
        e) {
            const i = j.findKey(this, e);
            return !!(i && this[i] !== void 0 && (!r || od(this, this[i], i, r)))
        }
        return !1
    }
    delete(e, r) {
        const i = this;
        let a = !1;
        function l(u) {
            if (u = co(u),
            u) {
                const d = j.findKey(i, u);
                d && (!r || od(i, i[d], d, r)) && (delete i[d],
                a = !0)
            }
        }
        return j.isArray(e) ? e.forEach(l) : l(e),
        a
    }
    clear(e) {
        const r = Object.keys(this);
        let i = r.length
          , a = !1;
        for (; i--; ) {
            const l = r[i];
            (!e || od(this, this[l], l, e, !0)) && (delete this[l],
            a = !0)
        }
        return a
    }
    normalize(e) {
        const r = this
          , i = {};
        return j.forEach(this, (a, l) => {
            const u = j.findKey(i, l);
            if (u) {
                r[u] = kl(a),
                delete r[l];
                return
            }
            const d = e ? TE(l) : String(l).trim();
            d !== l && delete r[l],
            r[d] = kl(a),
            i[d] = !0
        }
        ),
        this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const r = Object.create(null);
        return j.forEach(this, (i, a) => {
            i != null && i !== !1 && (r[a] = e && j.isArray(i) ? i.join(", ") : i)
        }
        ),
        r
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([e,r]) => e + ": " + r).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...r) {
        const i = new this(e);
        return r.forEach(a => i.set(a)),
        i
    }
    static accessor(e) {
        const i = (this[Zg] = this[Zg] = {
            accessors: {}
        }).accessors
          , a = this.prototype;
        function l(u) {
            const d = co(u);
            i[d] || (_E(a, u),
            i[d] = !0)
        }
        return j.isArray(e) ? e.forEach(l) : l(e),
        this
    }
}
;
_t.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
j.reduceDescriptors(_t.prototype, ({value: t}, e) => {
    let r = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(i) {
            this[r] = i
        }
    }
}
);
j.freezeMethods(_t);
const PE = "[REDACTED ****]";
function RE(t) {
    if (j.hasOwnProp(t, "toJSON"))
        return !0;
    let e = Object.getPrototypeOf(t);
    for (; e && e !== Object.prototype; ) {
        if (j.hasOwnProp(e, "toJSON"))
            return !0;
        e = Object.getPrototypeOf(e)
    }
    return !1
}
function AE(t, e) {
    const r = new Set(e.map(l => String(l).toLowerCase()))
      , i = []
      , a = l => {
        if (l === null || typeof l != "object" || j.isBuffer(l))
            return l;
        if (i.indexOf(l) !== -1)
            return;
        l instanceof _t && (l = l.toJSON()),
        i.push(l);
        let u;
        if (j.isArray(l))
            u = [],
            l.forEach( (d, h) => {
                const m = a(d);
                j.isUndefined(m) || (u[h] = m)
            }
            );
        else {
            if (!j.isPlainObject(l) && RE(l))
                return i.pop(),
                l;
            u = Object.create(null);
            for (const [d,h] of Object.entries(l)) {
                const m = r.has(d.toLowerCase()) ? PE : a(h);
                j.isUndefined(m) || (u[d] = m)
            }
        }
        return i.pop(),
        u
    }
    ;
    return a(t)
}
let X = class ux extends Error {
    static from(e, r, i, a, l, u) {
        const d = new ux(e.message,r || e.code,i,a,l);
        return d.cause = e,
        d.name = e.name,
        e.status != null && d.status == null && (d.status = e.status),
        u && Object.assign(d, u),
        d
    }
    constructor(e, r, i, a, l) {
        super(e),
        Object.defineProperty(this, "message", {
            __proto__: null,
            value: e,
            enumerable: !0,
            writable: !0,
            configurable: !0
        }),
        this.name = "AxiosError",
        this.isAxiosError = !0,
        r && (this.code = r),
        i && (this.config = i),
        a && (this.request = a),
        l && (this.response = l,
        this.status = l.status)
    }
    toJSON() {
        const e = this.config
          , r = e && j.hasOwnProp(e, "redact") ? e.redact : void 0
          , i = j.isArray(r) && r.length > 0 ? AE(e, r) : j.toJSONObject(e);
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: i,
            code: this.code,
            status: this.status
        }
    }
}
;
X.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
X.ERR_BAD_OPTION = "ERR_BAD_OPTION";
X.ECONNABORTED = "ECONNABORTED";
X.ETIMEDOUT = "ETIMEDOUT";
X.ECONNREFUSED = "ECONNREFUSED";
X.ERR_NETWORK = "ERR_NETWORK";
X.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
X.ERR_DEPRECATED = "ERR_DEPRECATED";
X.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
X.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
X.ERR_CANCELED = "ERR_CANCELED";
X.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
X.ERR_INVALID_URL = "ERR_INVALID_URL";
X.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const NE = null
  , cx = 100;
function Gd(t) {
    return j.isPlainObject(t) || j.isArray(t)
}
function dx(t) {
    return j.endsWith(t, "[]") ? t.slice(0, -2) : t
}
function ad(t, e, r) {
    return t ? t.concat(e).map(function(a, l) {
        return a = dx(a),
        !r && l ? "[" + a + "]" : a
    }).join(r ? "." : "") : e
}
function OE(t) {
    return j.isArray(t) && !t.some(Gd)
}
const jE = j.toFlatObject(j, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});
function Jl(t, e, r) {
    if (!j.isObject(t))
        throw new TypeError("target must be an object");
    e = e || new FormData,
    r = j.toFlatObject(r, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(P, A) {
        return !j.isUndefined(A[P])
    });
    const i = r.metaTokens
      , a = r.visitor || T
      , l = r.dots
      , u = r.indexes
      , d = r.Blob || typeof Blob < "u" && Blob
      , h = r.maxDepth === void 0 ? cx : r.maxDepth
      , m = d && j.isSpecCompliantForm(e)
      , g = [];
    if (!j.isFunction(a))
        throw new TypeError("visitor must be a function");
    function y(b) {
        if (b === null)
            return "";
        if (j.isDate(b))
            return b.toISOString();
        if (j.isBoolean(b))
            return b.toString();
        if (!m && j.isBlob(b))
            throw new X("Blob is not supported. Use a Buffer instead.");
        return j.isArrayBuffer(b) || j.isTypedArray(b) ? m && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b
    }
    function w(b) {
        if (b > h)
            throw new X("Object is too deeply nested (" + b + " levels). Max depth: " + h,X.ERR_FORM_DATA_DEPTH_EXCEEDED)
    }
    function k(b, P) {
        if (h === 1 / 0)
            return JSON.stringify(b);
        const A = [];
        return JSON.stringify(b, function(F, $) {
            if (!j.isObject($))
                return $;
            for (; A.length && A[A.length - 1] !== this; )
                A.pop();
            return A.push($),
            w(P + A.length - 1),
            $
        })
    }
    function T(b, P, A) {
        let M = b;
        if (j.isReactNative(e) && j.isReactNativeBlob(b))
            return e.append(ad(A, P, l), y(b)),
            !1;
        if (b && !A && typeof b == "object") {
            if (j.endsWith(P, "{}"))
                P = i ? P : P.slice(0, -2),
                b = k(b, 1);
            else if (j.isArray(b) && OE(b) || (j.isFileList(b) || j.endsWith(P, "[]")) && (M = j.toArray(b)))
                return P = dx(P),
                M.forEach(function($, J) {
                    !(j.isUndefined($) || $ === null) && e.append(u === !0 ? ad([P], J, l) : u === null ? P : P + "[]", y($))
                }),
                !1
        }
        return Gd(b) ? !0 : (e.append(ad(A, P, l), y(b)),
        !1)
    }
    const E = Object.assign(jE, {
        defaultVisitor: T,
        convertValue: y,
        isVisitable: Gd
    });
    function S(b, P, A=0) {
        if (!j.isUndefined(b)) {
            if (w(A),
            g.indexOf(b) !== -1)
                throw new Error("Circular reference detected in " + P.join("."));
            g.push(b),
            j.forEach(b, function(F, $) {
                (!(j.isUndefined(F) || F === null) && a.call(e, F, j.isString($) ? $.trim() : $, P, E)) === !0 && S(F, P ? P.concat($) : [$], A + 1)
            }),
            g.pop()
        }
    }
    if (!j.isObject(t))
        throw new TypeError("data must be an object");
    return S(t),
    e
}
function e0(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20/g, function(i) {
        return e[i]
    })
}
function Of(t, e) {
    this._pairs = [],
    t && Jl(t, this, e)
}
const fx = Of.prototype;
fx.append = function(e, r) {
    this._pairs.push([e, r])
}
;
fx.toString = function(e) {
    const r = e ? function(i) {
        return e.call(this, i, e0)
    }
    : e0;
    return this._pairs.map(function(a) {
        return r(a[0]) + "=" + r(a[1])
    }, "").join("&")
}
;
function ME(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}
function hx(t, e, r) {
    if (!e)
        return t;
    const i = j.isFunction(r) ? {
        serialize: r
    } : r
      , a = j.getSafeProp(i, "encode") || ME
      , l = j.getSafeProp(i, "serialize");
    let u;
    if (l ? u = l(e, i) : u = j.isURLSearchParams(e) ? e.toString() : new Of(e,i).toString(a),
    u) {
        const d = t.indexOf("#");
        d !== -1 && (t = t.slice(0, d)),
        t += (t.indexOf("?") === -1 ? "?" : "&") + u
    }
    return t
}
class t0 {
    constructor() {
        this.handlers = []
    }
    use(e, r, i) {
        return this.handlers.push({
            fulfilled: e,
            rejected: r,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        j.forEach(this.handlers, function(i) {
            i !== null && e(i)
        })
    }
}
const jf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
    advertiseZstdAcceptEncoding: !1,
    validateStatusUndefinedResolves: !0
}
  , LE = typeof URLSearchParams < "u" ? URLSearchParams : Of
  , DE = typeof FormData < "u" ? FormData : null
  , IE = typeof Blob < "u" ? Blob : null
  , FE = {
    isBrowser: !0,
    classes: {
        URLSearchParams: LE,
        FormData: DE,
        Blob: IE
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Mf = typeof window < "u" && typeof document < "u"
  , Yd = typeof navigator == "object" && navigator || void 0
  , VE = Mf && (!Yd || ["ReactNative", "NativeScript", "NS"].indexOf(Yd.product) < 0)
  , BE = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , UE = Mf && window.location.href || "http://localhost"
  , zE = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Mf,
    hasStandardBrowserEnv: VE,
    hasStandardBrowserWebWorkerEnv: BE,
    navigator: Yd,
    origin: UE
}, Symbol.toStringTag, {
    value: "Module"
}))
  , yt = {
    ...zE,
    ...FE
};
function $E(t, e) {
    return Jl(t, new yt.classes.URLSearchParams, {
        visitor: function(r, i, a, l) {
            return yt.isNode && j.isBuffer(r) ? (this.append(i, r.toString("base64")),
            !1) : l.defaultVisitor.apply(this, arguments)
        },
        ...e
    })
}
const n0 = cx;
function px(t) {
    if (t > n0)
        throw new X("FormData field is too deeply nested (" + t + " levels). Max depth: " + n0,X.ERR_FORM_DATA_DEPTH_EXCEEDED)
}
function HE(t) {
    const e = []
      , r = /\w+|\[(\w*)]/g;
    let i;
    for (; (i = r.exec(t)) !== null; )
        px(e.length),
        e.push(i[0] === "[]" ? "" : i[1] || i[0]);
    return e
}
function qE(t) {
    const e = {}
      , r = Object.keys(t);
    let i;
    const a = r.length;
    let l;
    for (i = 0; i < a; i++)
        l = r[i],
        e[l] = t[l];
    return e
}
function mx(t) {
    function e(r, i, a, l) {
        px(l);
        let u = r[l++];
        if (u === "__proto__")
            return !0;
        const d = Number.isFinite(+u)
          , h = l >= r.length;
        return u = !u && j.isArray(a) ? a.length : u,
        h ? (j.hasOwnProp(a, u) ? a[u] = j.isArray(a[u]) ? a[u].concat(i) : [a[u], i] : a[u] = i,
        !d) : ((!j.hasOwnProp(a, u) || !j.isObject(a[u])) && (a[u] = []),
        e(r, i, a[u], l) && j.isArray(a[u]) && (a[u] = qE(a[u])),
        !d)
    }
    if (j.isFormData(t) && j.isFunction(t.entries)) {
        const r = {};
        return j.forEachEntry(t, (i, a) => {
            e(HE(i), a, r, 0)
        }
        ),
        r
    }
    return null
}
const Ws = (t, e) => t != null && j.hasOwnProp(t, e) ? t[e] : void 0;
function WE(t, e, r) {
    if (j.isString(t))
        try {
            return (e || JSON.parse)(t),
            j.trim(t)
        } catch (i) {
            if (i.name !== "SyntaxError")
                throw i
        }
    return (r || JSON.stringify)(t)
}
const Qo = {
    transitional: jf,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, r) {
        const i = r.getContentType() || ""
          , a = i.indexOf("application/json") > -1
          , l = j.isObject(e);
        if (l && j.isHTMLForm(e) && (e = new FormData(e)),
        j.isFormData(e))
            return a ? JSON.stringify(mx(e)) : e;
        if (j.isArrayBuffer(e) || j.isBuffer(e) || j.isStream(e) || j.isFile(e) || j.isBlob(e) || j.isReadableStream(e))
            return e;
        if (j.isArrayBufferView(e))
            return e.buffer;
        if (j.isURLSearchParams(e))
            return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            e.toString();
        let d;
        if (l) {
            const h = Ws(this, "formSerializer");
            if (i.indexOf("application/x-www-form-urlencoded") > -1)
                return $E(e, h).toString();
            if ((d = j.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                const m = Ws(this, "env")
                  , g = m && m.FormData;
                return Jl(d ? {
                    "files[]": e
                } : e, g && new g, h)
            }
        }
        return l || a ? (r.setContentType("application/json", !1),
        WE(e)) : e
    }
    ],
    transformResponse: [function(e) {
        const r = Ws(this, "transitional") || Qo.transitional
          , i = r && r.forcedJSONParsing
          , a = Ws(this, "responseType")
          , l = a === "json";
        if (j.isResponse(e) || j.isReadableStream(e))
            return e;
        if (e && j.isString(e) && (i && !a || l)) {
            const d = !(r && r.silentJSONParsing) && l;
            try {
                return JSON.parse(e, Ws(this, "parseReviver"))
            } catch (h) {
                if (d)
                    throw h.name === "SyntaxError" ? X.from(h, X.ERR_BAD_RESPONSE, this, null, Ws(this, "response")) : h
            }
        }
        return e
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: yt.classes.FormData,
        Blob: yt.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
j.forEach(["delete", "get", "head", "post", "put", "patch", "query"], t => {
    Qo.headers[t] = {}
}
);
function ld(t, e) {
    const r = this || Qo
      , i = e || r
      , a = _t.from(i.headers);
    let l = i.data;
    return j.forEach(t, function(d) {
        l = d.call(r, l, a.normalize(), e ? e.status : void 0)
    }),
    a.normalize(),
    l
}
function gx(t) {
    return !!(t && t.__CANCEL__)
}
let Go = class extends X {
    constructor(e, r, i) {
        super(e ?? "canceled", X.ERR_CANCELED, r, i),
        this.name = "CanceledError",
        this.__CANCEL__ = !0
    }
}
;
function yx(t, e, r) {
    const i = r.config.validateStatus;
    !r.status || !i || i(r.status) ? t(r) : e(new X("Request failed with status code " + r.status,r.status >= 400 && r.status < 500 ? X.ERR_BAD_REQUEST : X.ERR_BAD_RESPONSE,r.config,r.request,r))
}
function KE(t) {
    const e = /^([-+\w]{1,25}):(?:\/\/)?/.exec(t);
    return e && e[1] || ""
}
function QE(t, e) {
    t = t || 10;
    const r = new Array(t)
      , i = new Array(t);
    let a = 0, l = 0, u;
    return e = e !== void 0 ? e : 1e3,
    function(h) {
        const m = Date.now()
          , g = i[l];
        u || (u = m),
        r[a] = h,
        i[a] = m;
        let y = l
          , w = 0;
        for (; y !== a; )
            w += r[y++],
            y = y % t;
        if (a = (a + 1) % t,
        a === l && (l = (l + 1) % t),
        m - u < e)
            return;
        const k = g && m - g;
        return k ? Math.round(w * 1e3 / k) : void 0
    }
}
function GE(t, e) {
    let r = 0, i = 1e3 / e, a, l;
    const u = (m, g=Date.now()) => {
        r = g,
        a = null,
        l && (clearTimeout(l),
        l = null),
        t(...m)
    }
    ;
    return [ (...m) => {
        const g = Date.now()
          , y = g - r;
        y >= i ? u(m, g) : (a = m,
        l || (l = setTimeout( () => {
            l = null,
            u(a)
        }
        , i - y)))
    }
    , () => a && u(a)]
}
const Fl = (t, e, r=3) => {
    let i = 0;
    const a = QE(50, 250);
    return GE(l => {
        if (!l || typeof l.loaded != "number")
            return;
        const u = l.loaded
          , d = l.lengthComputable ? l.total : void 0
          , h = d != null ? Math.min(u, d) : u
          , m = Math.max(0, h - i)
          , g = a(m);
        i = Math.max(i, h);
        const y = {
            loaded: h,
            total: d,
            progress: d ? h / d : void 0,
            bytes: m,
            rate: g || void 0,
            estimated: g && d ? (d - h) / g : void 0,
            event: l,
            lengthComputable: d != null,
            [e ? "download" : "upload"]: !0
        };
        t(y)
    }
    , r)
}
  , r0 = (t, e) => {
    const r = t != null;
    return [i => e[0]({
        lengthComputable: r,
        total: t,
        loaded: i
    }), e[1]]
}
  , s0 = t => (...e) => j.asap( () => t(...e))
  , YE = yt.hasStandardBrowserEnv ? ( (t, e) => r => (r = new URL(r,yt.origin),
t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(new URL(yt.origin), yt.navigator && /(msie|trident)/i.test(yt.navigator.userAgent)) : () => !0
  , XE = yt.hasStandardBrowserEnv ? {
    write(t, e, r, i, a, l, u) {
        if (typeof document > "u")
            return;
        const d = [`${t}=${encodeURIComponent(e)}`];
        j.isNumber(r) && d.push(`expires=${new Date(r).toUTCString()}`),
        j.isString(i) && d.push(`path=${i}`),
        j.isString(a) && d.push(`domain=${a}`),
        l === !0 && d.push("secure"),
        j.isString(u) && d.push(`SameSite=${u}`),
        document.cookie = d.join("; ")
    },
    read(t) {
        if (typeof document > "u")
            return null;
        const e = document.cookie.split(";");
        for (let r = 0; r < e.length; r++) {
            const i = e[r].replace(/^\s+/, "")
              , a = i.indexOf("=");
            if (a !== -1 && i.slice(0, a) === t)
                return decodeURIComponent(i.slice(a + 1))
        }
        return null
    },
    remove(t) {
        this.write(t, "", Date.now() - 864e5, "/")
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function JE(t) {
    return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}
function ZE(t, e) {
    return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
}
const eC = /^https?:(?!\/\/)/i
  , tC = /[\t\n\r]/g;
function nC(t) {
    let e = 0;
    for (; e < t.length && t.charCodeAt(e) <= 32; )
        e++;
    return t.slice(e)
}
function rC(t) {
    return nC(t).replace(tC, "")
}
function i0(t, e) {
    if (typeof t == "string" && eC.test(rC(t)))
        throw new X('Invalid URL: missing "//" after protocol',X.ERR_INVALID_URL,e)
}
function vx(t, e, r, i) {
    i0(e, i);
    let a = !JE(e);
    return t && (a || r === !1) ? (i0(t, i),
    ZE(t, e)) : e
}
const o0 = t => t instanceof _t ? {
    ...t
} : t;
function xs(t, e) {
    e = e || {};
    const r = Object.create(null);
    Object.defineProperty(r, "hasOwnProperty", {
        __proto__: null,
        value: Object.prototype.hasOwnProperty,
        enumerable: !1,
        writable: !0,
        configurable: !0
    });
    function i(g, y, w, k) {
        return j.isPlainObject(g) && j.isPlainObject(y) ? j.merge.call({
            caseless: k
        }, g, y) : j.isPlainObject(y) ? j.merge({}, y) : j.isArray(y) ? y.slice() : y
    }
    function a(g, y, w, k) {
        if (j.isUndefined(y)) {
            if (!j.isUndefined(g))
                return i(void 0, g, w, k)
        } else
            return i(g, y, w, k)
    }
    function l(g, y) {
        if (!j.isUndefined(y))
            return i(void 0, y)
    }
    function u(g, y) {
        if (j.isUndefined(y)) {
            if (!j.isUndefined(g))
                return i(void 0, g)
        } else
            return i(void 0, y)
    }
    function d(g) {
        const y = j.hasOwnProp(e, "transitional") ? e.transitional : void 0;
        if (!j.isUndefined(y))
            if (j.isPlainObject(y)) {
                if (j.hasOwnProp(y, g))
                    return y[g]
            } else
                return;
        const w = j.hasOwnProp(t, "transitional") ? t.transitional : void 0;
        if (j.isPlainObject(w) && j.hasOwnProp(w, g))
            return w[g]
    }
    function h(g, y, w) {
        if (j.hasOwnProp(e, w))
            return i(g, y);
        if (j.hasOwnProp(t, w))
            return i(void 0, g)
    }
    const m = {
        url: l,
        method: l,
        data: l,
        baseURL: u,
        transformRequest: u,
        transformResponse: u,
        paramsSerializer: u,
        timeout: u,
        timeoutMessage: u,
        withCredentials: u,
        withXSRFToken: u,
        adapter: u,
        responseType: u,
        xsrfCookieName: u,
        xsrfHeaderName: u,
        onUploadProgress: u,
        onDownloadProgress: u,
        decompress: u,
        maxContentLength: u,
        maxBodyLength: u,
        beforeRedirect: u,
        transport: u,
        httpAgent: u,
        httpsAgent: u,
        cancelToken: u,
        socketPath: u,
        allowedSocketPaths: u,
        responseEncoding: u,
        validateStatus: h,
        headers: (g, y, w) => a(o0(g), o0(y), w, !0)
    };
    return j.forEach(Object.keys({
        ...t,
        ...e
    }), function(y) {
        if (y === "__proto__" || y === "constructor" || y === "prototype")
            return;
        const w = j.hasOwnProp(m, y) ? m[y] : a
          , k = j.hasOwnProp(t, y) ? t[y] : void 0
          , T = j.hasOwnProp(e, y) ? e[y] : void 0
          , E = w(k, T, y);
        j.isUndefined(E) && w !== h || (r[y] = E)
    }),
    j.hasOwnProp(e, "validateStatus") && j.isUndefined(e.validateStatus) && d("validateStatusUndefinedResolves") === !1 && (j.hasOwnProp(t, "validateStatus") ? r.validateStatus = i(void 0, t.validateStatus) : delete r.validateStatus),
    r
}
const sC = ["content-type", "content-length"];
function iC(t, e, r) {
    if (r !== "content-only") {
        t.set(e);
        return
    }
    Object.entries(e).forEach( ([i,a]) => {
        sC.includes(i.toLowerCase()) && t.set(i, a)
    }
    )
}
const oC = t => encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi, (e, r) => String.fromCharCode(parseInt(r, 16)));
function xx(t) {
    const e = xs({}, t)
      , r = w => j.hasOwnProp(e, w) ? e[w] : void 0
      , i = r("data");
    let a = r("withXSRFToken");
    const l = r("xsrfHeaderName")
      , u = r("xsrfCookieName");
    let d = r("headers");
    const h = r("auth")
      , m = r("baseURL")
      , g = r("allowAbsoluteUrls")
      , y = r("url");
    if (e.headers = d = _t.from(d),
    e.url = hx(vx(m, y, g, e), r("params"), r("paramsSerializer")),
    h) {
        const w = j.getSafeProp(h, "username") || ""
          , k = j.getSafeProp(h, "password") || "";
        d.set("Authorization", "Basic " + btoa(w + ":" + (k ? oC(k) : "")))
    }
    if (j.isFormData(i) && (yt.hasStandardBrowserEnv || yt.hasStandardBrowserWebWorkerEnv || j.isReactNative(i) ? d.setContentType(void 0) : j.isFunction(i.getHeaders) && iC(d, i.getHeaders(), r("formDataHeaderPolicy"))),
    yt.hasStandardBrowserEnv && (j.isFunction(a) && (a = a(e)),
    a === !0 || a == null && YE(e.url))) {
        const k = l && u && XE.read(u);
        k && d.set(l, k)
    }
    return e
}
const aC = typeof XMLHttpRequest < "u"
  , lC = aC && function(t) {
    return new Promise(function(r, i) {
        const a = xx(t);
        let l = a.data;
        const u = _t.from(a.headers).normalize();
        let {responseType: d, onUploadProgress: h, onDownloadProgress: m} = a, g, y, w, k, T;
        function E() {
            k && k(),
            T && T(),
            a.cancelToken && a.cancelToken.unsubscribe(g),
            a.signal && a.signal.removeEventListener("abort", g)
        }
        let S = new XMLHttpRequest;
        S.open(a.method.toUpperCase(), a.url, !0),
        S.timeout = a.timeout;
        function b() {
            if (!S)
                return;
            const A = _t.from("getAllResponseHeaders"in S && S.getAllResponseHeaders())
              , F = {
                data: !d || d === "text" || d === "json" ? S.responseText : S.response,
                status: S.status,
                statusText: S.statusText,
                headers: A,
                config: t,
                request: S
            };
            yx(function(J) {
                r(J),
                E()
            }, function(J) {
                i(J),
                E()
            }, F),
            S = null
        }
        "onloadend"in S ? S.onloadend = b : S.onreadystatechange = function() {
            !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.startsWith("file:")) || setTimeout(b)
        }
        ,
        S.onabort = function() {
            S && (i(new X("Request aborted",X.ECONNABORTED,t,S)),
            E(),
            S = null)
        }
        ,
        S.onerror = function(M) {
            const F = M && M.message ? M.message : "Network Error"
              , $ = new X(F,X.ERR_NETWORK,t,S);
            $.event = M || null,
            i($),
            E(),
            S = null
        }
        ,
        S.ontimeout = function() {
            let M = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
            const F = a.transitional || jf;
            a.timeoutErrorMessage && (M = a.timeoutErrorMessage),
            i(new X(M,F.clarifyTimeoutError ? X.ETIMEDOUT : X.ECONNABORTED,t,S)),
            E(),
            S = null
        }
        ,
        l === void 0 && u.setContentType(null),
        "setRequestHeader"in S && j.forEach(lx(u), function(M, F) {
            S.setRequestHeader(F, M)
        }),
        j.isUndefined(a.withCredentials) || (S.withCredentials = !!a.withCredentials),
        d && d !== "json" && (S.responseType = a.responseType),
        m && ([w,T] = Fl(m, !0),
        S.addEventListener("progress", w)),
        h && S.upload && ([y,k] = Fl(h),
        S.upload.addEventListener("progress", y),
        S.upload.addEventListener("loadend", k)),
        (a.cancelToken || a.signal) && (g = A => {
            S && (i(!A || A.type ? new Go(null,t,S) : A),
            S.abort(),
            E(),
            S = null)
        }
        ,
        a.cancelToken && a.cancelToken.subscribe(g),
        a.signal && (a.signal.aborted ? g() : a.signal.addEventListener("abort", g)));
        const P = KE(a.url);
        if (P && !yt.protocols.includes(P)) {
            i(new X("Unsupported protocol " + P + ":",X.ERR_BAD_REQUEST,t));
            return
        }
        S.send(l || null)
    }
    )
}
  , uC = (t, e) => {
    if (t = t ? t.filter(Boolean) : [],
    !e && !t.length)
        return;
    const r = new AbortController;
    let i = !1;
    const a = function(h) {
        if (!i) {
            i = !0,
            u();
            const m = h instanceof Error ? h : this.reason;
            r.abort(m instanceof X ? m : new Go(m instanceof Error ? m.message : m))
        }
    };
    let l = e && setTimeout( () => {
        l = null,
        a(new X(`timeout of ${e}ms exceeded`,X.ETIMEDOUT))
    }
    , e);
    const u = () => {
        t && (l && clearTimeout(l),
        l = null,
        t.forEach(h => {
            h.unsubscribe ? h.unsubscribe(a) : h.removeEventListener("abort", a)
        }
        ),
        t = null)
    }
    ;
    t.forEach(h => h.addEventListener("abort", a));
    const {signal: d} = r;
    return d.unsubscribe = () => j.asap(u),
    d
}
  , cC = function*(t, e) {
    let r = t.byteLength;
    if (r < e) {
        yield t;
        return
    }
    let i = 0, a;
    for (; i < r; )
        a = i + e,
        yield t.slice(i, a),
        i = a
}
  , dC = async function*(t, e) {
    for await(const r of fC(t))
        yield*cC(r, e)
}
  , fC = async function*(t) {
    if (t[Symbol.asyncIterator]) {
        yield*t;
        return
    }
    const e = t.getReader();
    try {
        for (; ; ) {
            const {done: r, value: i} = await e.read();
            if (r)
                break;
            yield i
        }
    } finally {
        await e.cancel()
    }
}
  , a0 = (t, e, r, i) => {
    const a = dC(t, e);
    let l = 0, u, d = h => {
        u || (u = !0,
        i && i(h))
    }
    ;
    return new ReadableStream({
        async pull(h) {
            try {
                const {done: m, value: g} = await a.next();
                if (m) {
                    d(),
                    h.close();
                    return
                }
                let y = g.byteLength;
                if (r) {
                    let w = l += y;
                    r(w)
                }
                h.enqueue(new Uint8Array(g))
            } catch (m) {
                throw d(m),
                m
            }
        },
        cancel(h) {
            return d(h),
            a.return()
        }
    },{
        highWaterMark: 2
    })
}
  , Vl = t => t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102
  , hC = (t, e, r) => e + 2 < r && Vl(t.charCodeAt(e + 1)) && Vl(t.charCodeAt(e + 2));
function pC(t) {
    if (!t || typeof t != "string" || !t.startsWith("data:"))
        return 0;
    const e = t.indexOf(",");
    if (e < 0)
        return 0;
    const r = t.slice(5, e)
      , i = t.slice(e + 1);
    if (/;base64/i.test(r)) {
        let u = i.length;
        const d = i.length;
        for (let k = 0; k < d; k++)
            if (i.charCodeAt(k) === 37 && k + 2 < d) {
                const T = i.charCodeAt(k + 1)
                  , E = i.charCodeAt(k + 2);
                Vl(T) && Vl(E) && (u -= 2,
                k += 2)
            }
        let h = 0
          , m = d - 1;
        const g = k => k >= 2 && i.charCodeAt(k - 2) === 37 && i.charCodeAt(k - 1) === 51 && (i.charCodeAt(k) === 68 || i.charCodeAt(k) === 100);
        m >= 0 && (i.charCodeAt(m) === 61 ? (h++,
        m--) : g(m) && (h++,
        m -= 3)),
        h === 1 && m >= 0 && (i.charCodeAt(m) === 61 || g(m)) && h++;
        const w = Math.floor(u / 4) * 3 - (h || 0);
        return w > 0 ? w : 0
    }
    let l = 0;
    for (let u = 0, d = i.length; u < d; u++) {
        const h = i.charCodeAt(u);
        if (h === 37 && hC(i, u, d))
            l += 1,
            u += 2;
        else if (h < 128)
            l += 1;
        else if (h < 2048)
            l += 2;
        else if (h >= 55296 && h <= 56319 && u + 1 < d) {
            const m = i.charCodeAt(u + 1);
            m >= 56320 && m <= 57343 ? (l += 4,
            u++) : l += 3
        } else
            l += 3
    }
    return l
}
const Lf = "1.18.0"
  , l0 = 64 * 1024
  , {isFunction: hl} = j
  , mC = t => encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi, (e, r) => String.fromCharCode(parseInt(r, 16)))
  , u0 = t => {
    if (!j.isString(t))
        return t;
    try {
        return decodeURIComponent(t)
    } catch {
        return t
    }
}
  , c0 = (t, ...e) => {
    try {
        return !!t(...e)
    } catch {
        return !1
    }
}
  , gC = t => {
    const e = t.indexOf("://");
    let r = t;
    return e !== -1 && (r = r.slice(e + 3)),
    r.includes("@") || r.includes(":")
}
  , yC = t => {
    const e = j.global !== void 0 && j.global !== null ? j.global : globalThis
      , {ReadableStream: r, TextEncoder: i} = e;
    t = j.merge.call({
        skipUndefined: !0
    }, {
        Request: e.Request,
        Response: e.Response
    }, t);
    const {fetch: a, Request: l, Response: u} = t
      , d = a ? hl(a) : typeof fetch == "function"
      , h = hl(l)
      , m = hl(u);
    if (!d)
        return !1;
    const g = d && hl(r)
      , y = d && (typeof i == "function" ? (b => P => b.encode(P))(new i) : async b => new Uint8Array(await new l(b).arrayBuffer()))
      , w = h && g && c0( () => {
        let b = !1;
        const P = new l(yt.origin,{
            body: new r,
            method: "POST",
            get duplex() {
                return b = !0,
                "half"
            }
        })
          , A = P.headers.has("Content-Type");
        return P.body != null && P.body.cancel(),
        b && !A
    }
    )
      , k = m && g && c0( () => j.isReadableStream(new u("").body))
      , T = {
        stream: k && (b => b.body)
    };
    d && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(b => {
        !T[b] && (T[b] = (P, A) => {
            let M = P && P[b];
            if (M)
                return M.call(P);
            throw new X(`Response type '${b}' is not supported`,X.ERR_NOT_SUPPORT,A)
        }
        )
    }
    );
    const E = async b => {
        if (b == null)
            return 0;
        if (j.isBlob(b))
            return b.size;
        if (j.isSpecCompliantForm(b))
            return (await new l(yt.origin,{
                method: "POST",
                body: b
            }).arrayBuffer()).byteLength;
        if (j.isArrayBufferView(b) || j.isArrayBuffer(b))
            return b.byteLength;
        if (j.isURLSearchParams(b) && (b = b + ""),
        j.isString(b))
            return (await y(b)).byteLength
    }
      , S = async (b, P) => {
        const A = j.toFiniteNumber(b.getContentLength());
        return A ?? E(P)
    }
    ;
    return async b => {
        let {url: P, method: A, data: M, signal: F, cancelToken: $, timeout: J, onDownloadProgress: V, onUploadProgress: ee, responseType: ue, headers: le, withCredentials: Ae="same-origin", fetchOptions: ze, maxContentLength: Re, maxBodyLength: De} = xx(b);
        const Ne = j.isNumber(Re) && Re > -1
          , me = j.isNumber(De) && De > -1
          , Q = G => j.hasOwnProp(b, G) ? b[G] : void 0;
        let oe = a || fetch;
        ue = ue ? (ue + "").toLowerCase() : "text";
        let U = uC([F, $ && $.toAbortSignal()], J)
          , O = null;
        const z = U && U.unsubscribe && ( () => {
            U.unsubscribe()
        }
        );
        let ye, ve = null;
        const he = () => new X("Request body larger than maxBodyLength limit",X.ERR_BAD_REQUEST,b,O);
        try {
            let G;
            const Se = Q("auth");
            if (Se) {
                const be = j.getSafeProp(Se, "username") || ""
                  , dt = j.getSafeProp(Se, "password") || "";
                G = {
                    username: be,
                    password: dt
                }
            }
            if (gC(P)) {
                const be = new URL(P,yt.origin);
                if (!G && (be.username || be.password)) {
                    const dt = u0(be.username)
                      , un = u0(be.password);
                    G = {
                        username: dt,
                        password: un
                    }
                }
                (be.username || be.password) && (be.username = "",
                be.password = "",
                P = be.href)
            }
            if (G && (le.delete("authorization"),
            le.set("Authorization", "Basic " + btoa(mC((G.username || "") + ":" + (G.password || ""))))),
            Ne && typeof P == "string" && P.startsWith("data:") && pC(P) > Re)
                throw new X("maxContentLength size of " + Re + " exceeded",X.ERR_BAD_RESPONSE,b,O);
            if (me && A !== "get" && A !== "head") {
                const be = await E(M);
                if (typeof be == "number" && isFinite(be) && (ye = be,
                be > De))
                    throw he()
            }
            const Ce = me && (j.isReadableStream(M) || j.isStream(M))
              , we = (be, dt, un) => a0(be, l0, cn => {
                if (me && cn > De)
                    throw ve = he();
                dt && dt(cn)
            }
            , un);
            if (w && A !== "get" && A !== "head" && (ee || Ce)) {
                if (ye = ye ?? await S(le, M),
                ye !== 0 || Ce) {
                    let be = new l(P,{
                        method: "POST",
                        body: M,
                        duplex: "half"
                    }), dt;
                    if (j.isFormData(M) && (dt = be.headers.get("content-type")) && le.setContentType(dt),
                    be.body) {
                        const [un,cn] = ee && r0(ye, Fl(s0(ee))) || [];
                        M = we(be.body, un, cn)
                    }
                }
            } else if (Ce && !h && g && A !== "get" && A !== "head")
                M = we(M);
            else if (Ce && h && !w && A !== "get" && A !== "head")
                throw new X("Stream request bodies are not supported by the current fetch implementation",X.ERR_NOT_SUPPORT,b,O);
            j.isString(Ae) || (Ae = Ae ? "include" : "omit");
            const it = h && "credentials"in l.prototype;
            if (j.isFormData(M)) {
                const be = le.getContentType();
                be && /^multipart\/form-data/i.test(be) && !/boundary=/i.test(be) && le.delete("content-type")
            }
            le.set("User-Agent", "axios/" + Lf, !1);
            const Kt = {
                ...ze,
                signal: U,
                method: A.toUpperCase(),
                headers: lx(le.normalize()),
                body: M,
                duplex: "half",
                credentials: it ? Ae : void 0
            };
            O = h && new l(P,Kt);
            let ct = await (h ? oe(O, ze) : oe(P, Kt));
            const ln = _t.from(ct.headers);
            if (Ne) {
                const be = j.toFiniteNumber(ln.getContentLength());
                if (be != null && be > Re)
                    throw new X("maxContentLength size of " + Re + " exceeded",X.ERR_BAD_RESPONSE,b,O)
            }
            const Qt = k && (ue === "stream" || ue === "response");
            if (k && ct.body && (V || Ne || Qt && z)) {
                const be = {};
                ["status", "statusText", "headers"].forEach(Ln => {
                    be[Ln] = ct[Ln]
                }
                );
                const dt = j.toFiniteNumber(ln.getContentLength())
                  , [un,cn] = V && r0(dt, Fl(s0(V), !0)) || [];
                let Zn = 0;
                const er = Ln => {
                    if (Ne && (Zn = Ln,
                    Zn > Re))
                        throw new X("maxContentLength size of " + Re + " exceeded",X.ERR_BAD_RESPONSE,b,O);
                    un && un(Ln)
                }
                ;
                ct = new u(a0(ct.body, l0, er, () => {
                    cn && cn(),
                    z && z()
                }
                ),be)
            }
            ue = ue || "text";
            let Gt = await T[j.findKey(T, ue) || "text"](ct, b);
            if (Ne && !k && !Qt) {
                let be;
                if (Gt != null && (typeof Gt.byteLength == "number" ? be = Gt.byteLength : typeof Gt.size == "number" ? be = Gt.size : typeof Gt == "string" && (be = typeof i == "function" ? new i().encode(Gt).byteLength : Gt.length)),
                typeof be == "number" && be > Re)
                    throw new X("maxContentLength size of " + Re + " exceeded",X.ERR_BAD_RESPONSE,b,O)
            }
            return !Qt && z && z(),
            await new Promise( (be, dt) => {
                yx(be, dt, {
                    data: Gt,
                    headers: _t.from(ct.headers),
                    status: ct.status,
                    statusText: ct.statusText,
                    config: b,
                    request: O
                })
            }
            )
        } catch (G) {
            if (z && z(),
            U && U.aborted && U.reason instanceof X) {
                const Se = U.reason;
                throw Se.config = b,
                O && (Se.request = O),
                G !== Se && (Se.cause = G),
                Se
            }
            throw ve ? (O && !ve.request && (ve.request = O),
            ve) : G instanceof X ? (O && !G.request && (G.request = O),
            G) : G && G.name === "TypeError" && /Load failed|fetch/i.test(G.message) ? Object.assign(new X("Network Error",X.ERR_NETWORK,b,O,G && G.response), {
                cause: G.cause || G
            }) : X.from(G, G && G.code, b, O, G && G.response)
        }
    }
}
  , vC = new Map
  , wx = t => {
    let e = t && t.env || {};
    const {fetch: r, Request: i, Response: a} = e
      , l = [i, a, r];
    let u = l.length, d = u, h, m, g = vC;
    for (; d--; )
        h = l[d],
        m = g.get(h),
        m === void 0 && g.set(h, m = d ? new Map : yC(e)),
        g = m;
    return m
}
;
wx();
const Df = {
    http: NE,
    xhr: lC,
    fetch: {
        get: wx
    }
};
j.forEach(Df, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                __proto__: null,
                value: e
            })
        } catch {}
        Object.defineProperty(t, "adapterName", {
            __proto__: null,
            value: e
        })
    }
}
);
const d0 = t => `- ${t}`
  , xC = t => j.isFunction(t) || t === null || t === !1;
function wC(t, e) {
    t = j.isArray(t) ? t : [t];
    const {length: r} = t;
    let i, a;
    const l = {};
    for (let u = 0; u < r; u++) {
        i = t[u];
        let d;
        if (a = i,
        !xC(i) && (a = Df[(d = String(i)).toLowerCase()],
        a === void 0))
            throw new X(`Unknown adapter '${d}'`);
        if (a && (j.isFunction(a) || (a = a.get(e))))
            break;
        l[d || "#" + u] = a
    }
    if (!a) {
        const u = Object.entries(l).map( ([h,m]) => `adapter ${h} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build"));
        let d = r ? u.length > 1 ? `since :
` + u.map(d0).join(`
`) : " " + d0(u[0]) : "as no adapter specified";
        throw new X("There is no suitable adapter to dispatch the request " + d,"ERR_NOT_SUPPORT")
    }
    return a
}
const bx = {
    getAdapter: wC,
    adapters: Df
};
function ud(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
        throw new Go(null,t)
}
function f0(t) {
    return ud(t),
    t.headers = _t.from(t.headers),
    t.data = ld.call(t, t.transformRequest),
    ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1),
    bx.getAdapter(t.adapter || Qo.adapter, t)(t).then(function(i) {
        ud(t),
        t.response = i;
        try {
            i.data = ld.call(t, t.transformResponse, i)
        } finally {
            delete t.response
        }
        return i.headers = _t.from(i.headers),
        i
    }, function(i) {
        if (!gx(i) && (ud(t),
        i && i.response)) {
            t.response = i.response;
            try {
                i.response.data = ld.call(t, t.transformResponse, i.response)
            } finally {
                delete t.response
            }
            i.response.headers = _t.from(i.response.headers)
        }
        return Promise.reject(i)
    })
}
const Zl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (t, e) => {
    Zl[t] = function(i) {
        return typeof i === t || "a" + (e < 1 ? "n " : " ") + t
    }
}
);
const h0 = {};
Zl.transitional = function(e, r, i) {
    function a(l, u) {
        return "[Axios v" + Lf + "] Transitional option '" + l + "'" + u + (i ? ". " + i : "")
    }
    return (l, u, d) => {
        if (e === !1)
            throw new X(a(u, " has been removed" + (r ? " in " + r : "")),X.ERR_DEPRECATED);
        return r && !h0[u] && (h0[u] = !0,
        console.warn(a(u, " has been deprecated since v" + r + " and will be removed in the near future"))),
        e ? e(l, u, d) : !0
    }
}
;
Zl.spelling = function(e) {
    return (r, i) => (console.warn(`${i} is likely a misspelling of ${e}`),
    !0)
}
;
function bC(t, e, r) {
    if (typeof t != "object")
        throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(t);
    let a = i.length;
    for (; a-- > 0; ) {
        const l = i[a]
          , u = Object.prototype.hasOwnProperty.call(e, l) ? e[l] : void 0;
        if (u) {
            const d = t[l]
              , h = d === void 0 || u(d, l, t);
            if (h !== !0)
                throw new X("option " + l + " must be " + h,X.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (r !== !0)
            throw new X("Unknown option " + l,X.ERR_BAD_OPTION)
    }
}
const El = {
    assertOptions: bC,
    validators: Zl
}
  , kt = El.validators;
let ps = class {
    constructor(e) {
        this.defaults = e || {},
        this.interceptors = {
            request: new t0,
            response: new t0
        }
    }
    async request(e, r) {
        try {
            return await this._request(e, r)
        } catch (i) {
            if (i instanceof Error) {
                let a = {};
                Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error;
                const l = ( () => {
                    if (!a.stack)
                        return "";
                    const u = a.stack.indexOf(`
`);
                    return u === -1 ? "" : a.stack.slice(u + 1)
                }
                )();
                try {
                    if (!i.stack)
                        i.stack = l;
                    else if (l) {
                        const u = l.indexOf(`
`)
                          , d = u === -1 ? -1 : l.indexOf(`
`, u + 1)
                          , h = d === -1 ? "" : l.slice(d + 1);
                        String(i.stack).endsWith(h) || (i.stack += `
` + l)
                    }
                } catch {}
            }
            throw i
        }
    }
    _request(e, r) {
        typeof e == "string" ? (r = r || {},
        r.url = e) : r = e || {},
        r = xs(this.defaults, r);
        const {transitional: i, paramsSerializer: a, headers: l} = r;
        i !== void 0 && El.assertOptions(i, {
            silentJSONParsing: kt.transitional(kt.boolean),
            forcedJSONParsing: kt.transitional(kt.boolean),
            clarifyTimeoutError: kt.transitional(kt.boolean),
            legacyInterceptorReqResOrdering: kt.transitional(kt.boolean),
            advertiseZstdAcceptEncoding: kt.transitional(kt.boolean),
            validateStatusUndefinedResolves: kt.transitional(kt.boolean)
        }, !1),
        a != null && (j.isFunction(a) ? r.paramsSerializer = {
            serialize: a
        } : El.assertOptions(a, {
            encode: kt.function,
            serialize: kt.function
        }, !0)),
        r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0),
        El.assertOptions(r, {
            baseUrl: kt.spelling("baseURL"),
            withXsrfToken: kt.spelling("withXSRFToken")
        }, !0),
        r.method = (r.method || this.defaults.method || "get").toLowerCase();
        let u = l && j.merge(l.common, l[r.method]);
        l && j.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], T => {
            delete l[T]
        }
        ),
        r.headers = _t.concat(u, l);
        const d = [];
        let h = !0;
        this.interceptors.request.forEach(function(E) {
            if (typeof E.runWhen == "function" && E.runWhen(r) === !1)
                return;
            h = h && E.synchronous;
            const S = r.transitional || jf;
            S && S.legacyInterceptorReqResOrdering ? d.unshift(E.fulfilled, E.rejected) : d.push(E.fulfilled, E.rejected)
        });
        const m = [];
        this.interceptors.response.forEach(function(E) {
            m.push(E.fulfilled, E.rejected)
        });
        let g, y = 0, w;
        if (!h) {
            const T = [f0.bind(this), void 0];
            for (T.unshift(...d),
            T.push(...m),
            w = T.length,
            g = Promise.resolve(r); y < w; )
                g = g.then(T[y++], T[y++]);
            return g
        }
        w = d.length;
        let k = r;
        for (; y < w; ) {
            const T = d[y++]
              , E = d[y++];
            try {
                k = T(k)
            } catch (S) {
                E.call(this, S);
                break
            }
        }
        try {
            g = f0.call(this, k)
        } catch (T) {
            return Promise.reject(T)
        }
        for (y = 0,
        w = m.length; y < w; )
            g = g.then(m[y++], m[y++]);
        return g
    }
    getUri(e) {
        e = xs(this.defaults, e);
        const r = vx(e.baseURL, e.url, e.allowAbsoluteUrls, e);
        return hx(r, e.params, e.paramsSerializer)
    }
}
;
j.forEach(["delete", "get", "head", "options"], function(e) {
    ps.prototype[e] = function(r, i) {
        return this.request(xs(i || {}, {
            method: e,
            url: r,
            data: i && j.hasOwnProp(i, "data") ? i.data : void 0
        }))
    }
});
j.forEach(["post", "put", "patch", "query"], function(e) {
    function r(i) {
        return function(l, u, d) {
            return this.request(xs(d || {}, {
                method: e,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: l,
                data: u
            }))
        }
    }
    ps.prototype[e] = r(),
    e !== "query" && (ps.prototype[e + "Form"] = r(!0))
});
let SC = class Sx {
    constructor(e) {
        if (typeof e != "function")
            throw new TypeError("executor must be a function.");
        let r;
        this.promise = new Promise(function(l) {
            r = l
        }
        );
        const i = this;
        this.promise.then(a => {
            if (!i._listeners)
                return;
            let l = i._listeners.length;
            for (; l-- > 0; )
                i._listeners[l](a);
            i._listeners = null
        }
        ),
        this.promise.then = a => {
            let l;
            const u = new Promise(d => {
                i.subscribe(d),
                l = d
            }
            ).then(a);
            return u.cancel = function() {
                i.unsubscribe(l)
            }
            ,
            u
        }
        ,
        e(function(l, u, d) {
            i.reason || (i.reason = new Go(l,u,d),
            r(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners)
            return;
        const r = this._listeners.indexOf(e);
        r !== -1 && this._listeners.splice(r, 1)
    }
    toAbortSignal() {
        const e = new AbortController
          , r = i => {
            e.abort(i)
        }
        ;
        return this.subscribe(r),
        e.signal.unsubscribe = () => this.unsubscribe(r),
        e.signal
    }
    static source() {
        let e;
        return {
            token: new Sx(function(a) {
                e = a
            }
            ),
            cancel: e
        }
    }
}
;
function kC(t) {
    return function(r) {
        return t.apply(null, r)
    }
}
function EC(t) {
    return j.isObject(t) && t.isAxiosError === !0
}
const Xd = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(Xd).forEach( ([t,e]) => {
    Xd[e] = t
}
);
function kx(t) {
    const e = new ps(t)
      , r = Zv(ps.prototype.request, e);
    return j.extend(r, ps.prototype, e, {
        allOwnKeys: !0
    }),
    j.extend(r, e, null, {
        allOwnKeys: !0
    }),
    r.create = function(a) {
        return kx(xs(t, a))
    }
    ,
    r
}
const Ze = kx(Qo);
Ze.Axios = ps;
Ze.CanceledError = Go;
Ze.CancelToken = SC;
Ze.isCancel = gx;
Ze.VERSION = Lf;
Ze.toFormData = Jl;
Ze.AxiosError = X;
Ze.Cancel = Ze.CanceledError;
Ze.all = function(e) {
    return Promise.all(e)
}
;
Ze.spread = kC;
Ze.isAxiosError = EC;
Ze.mergeConfig = xs;
Ze.AxiosHeaders = _t;
Ze.formToJSON = t => mx(j.isHTMLForm(t) ? new FormData(t) : t);
Ze.getAdapter = bx.getAdapter;
Ze.HttpStatusCode = Xd;
Ze.default = Ze;
const {Axios: p3, AxiosError: m3, CanceledError: g3, isCancel: y3, CancelToken: v3, VERSION: x3, all: w3, Cancel: b3, isAxiosError: S3, spread: k3, toFormData: E3, AxiosHeaders: C3, HttpStatusCode: T3, formToJSON: _3, getAdapter: P3, mergeConfig: R3, create: A3} = Ze
  , Ex = typeof window > "u"
  , p0 = !Ex && window.self !== window.top
  , CC = !Ex && typeof document > "u"
  , cd = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  , pt = [];
for (let t = 0; t < 256; ++t)
    pt.push((t + 256).toString(16).slice(1));
function TC(t, e=0) {
    return (pt[t[e + 0]] + pt[t[e + 1]] + pt[t[e + 2]] + pt[t[e + 3]] + "-" + pt[t[e + 4]] + pt[t[e + 5]] + "-" + pt[t[e + 6]] + pt[t[e + 7]] + "-" + pt[t[e + 8]] + pt[t[e + 9]] + "-" + pt[t[e + 10]] + pt[t[e + 11]] + pt[t[e + 12]] + pt[t[e + 13]] + pt[t[e + 14]] + pt[t[e + 15]]).toLowerCase()
}
let dd;
const _C = new Uint8Array(16);
function PC() {
    if (!dd) {
        if (typeof crypto > "u" || !crypto.getRandomValues)
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        dd = crypto.getRandomValues.bind(crypto)
    }
    return dd(_C)
}
const RC = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , m0 = {
    randomUUID: RC
};
function AC(t, e, r) {
    var a;
    t = t || {};
    const i = t.random ?? ((a = t.rng) == null ? void 0 : a.call(t)) ?? PC();
    if (i.length < 16)
        throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64,
    i[8] = i[8] & 63 | 128,
    TC(i)
}
function NC(t, e, r) {
    return m0.randomUUID && !t ? m0.randomUUID() : AC(t)
}
const fo = typeof window < "u" ? window : {
    base44SharedInstances: {}
};
function OC(t, e) {
    return fo.base44SharedInstances || (fo.base44SharedInstances = {}),
    fo.base44SharedInstances[t] || (fo.base44SharedInstances[t] = {
        instance: e()
    }),
    fo.base44SharedInstances[t].instance
}
const jC = "__user_heartbeat_event__"
  , MC = "__initialization_event__"
  , LC = "__session_duration_event__"
  , g0 = "analytics-enable"
  , y0 = "base44_analytics_session_id"
  , DC = {
    enabled: !0,
    maxQueueSize: 1e3,
    throttleTime: 1e3,
    batchSize: 30,
    heartBeatInterval: 60 * 1e3
}
  , IC = "analytics"
  , Ie = OC(IC, () => ({
    requestsQueue: [],
    isProcessing: !1,
    isHeartBeatProcessing: !1,
    wasInitializationTracked: !1,
    sessionContext: null,
    sessionStartTime: null,
    config: {
        ...DC,
        ...qC()
    }
}))
  , FC = ({axiosClient: t, serverUrl: e, appId: r, userAuthModule: i}) => {
    var a;
    const {maxQueueSize: l, throttleTime: u, batchSize: d} = Ie.config;
    if (!(!((a = Ie.config) === null || a === void 0) && a.enabled) || CC)
        return {
            track: () => {}
            ,
            cleanup: () => {}
        };
    let h;
    const m = `${e}/api/apps/${r}/analytics/track/batch`
      , g = async A => {
        await t.request({
            method: "POST",
            url: `/apps/${r}/analytics/track/batch`,
            data: {
                events: A
            }
        })
    }
      , y = A => {
        try {
            const M = JSON.stringify({
                events: A
            })
              , F = new Blob([M],{
                type: "application/json"
            });
            return typeof navigator > "u" || M.length > 6e4 || !navigator.sendBeacon(m, F)
        } catch {
            return !1
        }
    }
      , w = async (A, M={}) => {
        if (A.length === 0)
            return;
        const F = await HC(i)
          , $ = A.map($C(F));
        try {
            (!M.isBeacon || !y($)) && await g($)
        } catch {}
    }
      , k = () => {
        x0(w, {
            throttleTime: u,
            batchSize: d
        })
    }
      , T = A => {
        if (Ie.requestsQueue.length >= l)
            return;
        const M = zC();
        Ie.requestsQueue.push({
            ...A,
            ...M
        }),
        k()
    }
      , E = () => {
        x0(w, {
            throttleTime: u,
            batchSize: d
        }),
        h = w0(T),
        BC()
    }
      , S = () => {
        v0(),
        h == null || h(),
        UC(T);
        const A = Ie.requestsQueue.splice(0);
        w(A, {
            isBeacon: !0
        })
    }
      , b = () => {
        typeof window > "u" || (document.visibilityState === "hidden" ? S() : document.visibilityState === "visible" && E())
    }
      , P = () => {
        v0(),
        h == null || h(),
        typeof window < "u" && window.removeEventListener("visibilitychange", b)
    }
    ;
    return k(),
    h = w0(T),
    VC(T),
    typeof window < "u" && window.addEventListener("visibilitychange", b),
    {
        track: T,
        cleanup: P
    }
}
;
function v0() {
    Ie.isProcessing = !1
}
async function x0(t, e) {
    if (Ie.isProcessing)
        return;
    Ie.isProcessing = !0;
    const {throttleTime: r=1e3, batchSize: i=30} = e ?? {};
    for (; Ie.isProcessing && Ie.requestsQueue.length > 0; ) {
        const a = Ie.requestsQueue.splice(0, i);
        a.length && await t(a),
        await new Promise(l => setTimeout(l, r))
    }
    Ie.isProcessing = !1
}
function w0(t) {
    var e;
    if (Ie.isHeartBeatProcessing || ((e = Ie.config.heartBeatInterval) !== null && e !== void 0 ? e : 0) < 10)
        return () => {}
        ;
    Ie.isHeartBeatProcessing = !0;
    const r = setInterval( () => {
        t({
            eventName: jC
        })
    }
    , Ie.config.heartBeatInterval);
    return () => {
        clearInterval(r),
        Ie.isHeartBeatProcessing = !1
    }
}
function VC(t) {
    typeof window > "u" || Ie.wasInitializationTracked || (Ie.wasInitializationTracked = !0,
    t({
        eventName: MC,
        properties: {
            referrer: document == null ? void 0 : document.referrer
        }
    }))
}
function BC() {
    typeof window > "u" || Ie.sessionStartTime !== null || (Ie.sessionStartTime = new Date().toISOString())
}
function UC(t) {
    if (typeof window > "u" || Ie.sessionStartTime === null)
        return;
    const e = new Date().getTime() - new Date(Ie.sessionStartTime).getTime();
    Ie.sessionStartTime = null,
    t({
        eventName: LC,
        properties: {
            sessionDuration: e
        }
    })
}
function zC() {
    return {
        timestamp: new Date().toISOString(),
        pageUrl: typeof window < "u" ? window.location.pathname : null
    }
}
function $C(t) {
    return e => ({
        event_name: e.eventName,
        properties: e.properties,
        timestamp: e.timestamp,
        page_url: e.pageUrl,
        ...t
    })
}
let fd = null;
async function HC(t) {
    if (!Ie.sessionContext) {
        if (!fd) {
            const e = If();
            fd = t.me().then(r => ({
                user_id: r.id,
                session_id: e
            })).catch( () => ({
                user_id: null,
                session_id: e
            }))
        }
        Ie.sessionContext = await fd
    }
    return Ie.sessionContext
}
function qC() {
    if (typeof window > "u" || !window.location)
        return;
    const e = new URLSearchParams(window.location.search).get(g0);
    if (e == null || !e.length)
        return;
    const r = new URLSearchParams(window.location.search);
    r.delete(g0);
    const i = window.location.pathname + (r.toString() ? "?" + r.toString() : "");
    return window.history.replaceState({}, "", i),
    {
        enabled: e === "true"
    }
}
function If() {
    if (typeof window > "u")
        return cd();
    try {
        const t = localStorage.getItem(y0);
        if (!t) {
            const e = cd();
            return localStorage.setItem(y0, e),
            e
        }
        return t
    } catch {
        return cd()
    }
}
class WC extends Error {
    constructor(e, r, i, a, l) {
        super(e),
        this.name = "Base44Error",
        this.status = r,
        this.code = i,
        this.data = a,
        this.originalError = l
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}
function go({baseURL: t, headers: e={}, token: r, interceptResponses: i=!0, onError: a}) {
    const l = Ze.create({
        baseURL: t,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...e
        }
    });
    return r && (l.defaults.headers.common.Authorization = `Bearer ${r}`),
    l.interceptors.request.use(u => {
        typeof window < "u" && window.location && (u.headers.set("X-Origin-URL", window.location.href),
        u.headers.get("Authorization") || u.headers.set("X-Base44-Anonymous-Id", If()));
        const d = NC();
        if (u.requestId = d,
        p0)
            try {
                window.parent.postMessage({
                    type: "api-request-start",
                    requestId: d,
                    data: {
                        url: t + u.url,
                        method: u.method,
                        body: u.data instanceof FormData ? "[FormData object]" : u.data
                    }
                }, "*")
            } catch {}
        return u
    }
    ),
    i && l.interceptors.response.use(u => {
        var d;
        const h = (d = u.config) === null || d === void 0 ? void 0 : d.requestId;
        try {
            p0 && h && window.parent.postMessage({
                type: "api-request-end",
                requestId: h,
                data: {
                    statusCode: u.status,
                    response: u.data
                }
            }, "*")
        } catch {}
        return u.data
    }
    , u => {
        var d, h, m, g, y, w, k, T;
        const E = ((h = (d = u.response) === null || d === void 0 ? void 0 : d.data) === null || h === void 0 ? void 0 : h.message) || ((g = (m = u.response) === null || m === void 0 ? void 0 : m.data) === null || g === void 0 ? void 0 : g.detail) || u.message
          , S = new WC(E,(y = u.response) === null || y === void 0 ? void 0 : y.status,(k = (w = u.response) === null || w === void 0 ? void 0 : w.data) === null || k === void 0 ? void 0 : k.code,(T = u.response) === null || T === void 0 ? void 0 : T.data,u);
        return a == null || a(S),
        Promise.reject(S)
    }
    ),
    l
}
function b0(t) {
    const {axios: e, appId: r, getSocket: i} = t;
    return new Proxy({},{
        get(a, l) {
            if (!(typeof l != "string" || l === "then" || l.startsWith("_")))
                return QC(e, r, l, i)
        }
    })
}
function KC(t) {
    var e;
    try {
        const r = JSON.parse(t);
        return {
            type: r.type,
            data: r.data,
            id: r.id || ((e = r.data) === null || e === void 0 ? void 0 : e.id),
            timestamp: r.timestamp || new Date().toISOString()
        }
    } catch (r) {
        return console.warn("[Base44 SDK] Failed to parse realtime message:", r),
        null
    }
}
function QC(t, e, r, i) {
    const a = `/apps/${e}/entities/${r}`;
    return {
        async list(l, u, d, h) {
            const m = {};
            return l && (m.sort = l),
            u && (m.limit = u),
            d && (m.skip = d),
            h && (m.fields = Array.isArray(h) ? h.join(",") : h),
            t.get(a, {
                params: m
            })
        },
        async filter(l, u, d, h, m) {
            const g = {
                q: JSON.stringify(l)
            };
            return u && (g.sort = u),
            d && (g.limit = d),
            h && (g.skip = h),
            m && (g.fields = Array.isArray(m) ? m.join(",") : m),
            t.get(a, {
                params: g
            })
        },
        async get(l) {
            return t.get(`${a}/${l}`)
        },
        async create(l) {
            return t.post(a, l)
        },
        async update(l, u) {
            return t.put(`${a}/${l}`, u)
        },
        async delete(l) {
            return t.delete(`${a}/${l}`)
        },
        async deleteMany(l) {
            return t.delete(a, {
                data: l
            })
        },
        async bulkCreate(l) {
            return t.post(`${a}/bulk`, l)
        },
        async updateMany(l, u) {
            return t.patch(`${a}/update-many`, {
                query: l,
                data: u
            })
        },
        async bulkUpdate(l) {
            return t.put(`${a}/bulk`, l)
        },
        async importEntities(l) {
            const u = new FormData;
            return u.append("file", l, l.name),
            t.post(`${a}/import`, u, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        },
        subscribe(l) {
            const u = `entities:${e}:${r}`;
            return i().subscribeToRoom(u, {
                update_model: m => {
                    var g;
                    const y = KC(m.data);
                    if (y) {
                        y.type !== "delete" && (!((g = y.data) === null || g === void 0) && g._oversize) && console.error(`[Base44 SDK] Realtime broadcast for ${r}#${y.id} was oversize and got slimmed for transport. Fields >10 KB are empty and the rest of the record may be a stub. Call \`entities.${r}.get("${y.id}")\` to fetch the full record.`);
                        try {
                            l(y)
                        } catch (w) {
                            console.error("[Base44 SDK] Subscription callback error:", w)
                        }
                    }
                }
            })
        }
    }
}
function GC(t, e) {
    return {
        async call(r, i, a) {
            if (!(r != null && r.trim()))
                throw new Error("Integration slug is required and cannot be empty");
            if (!(i != null && i.trim()))
                throw new Error("Operation ID is required and cannot be empty");
            const {pathParams: l, queryParams: u, ...d} = a ?? {}
              , h = {
                ...d,
                ...l && {
                    path_params: l
                },
                ...u && {
                    query_params: u
                }
            };
            return await t.post(`/apps/${e}/integrations/custom/${r}/${i}`, h)
        }
    }
}
function S0(t, e) {
    const r = GC(t, e);
    return new Proxy({},{
        get(i, a) {
            if (!(typeof a != "string" || a === "then" || a.startsWith("_")))
                return a === "custom" ? r : new Proxy({},{
                    get(l, u) {
                        if (!(typeof u != "string" || u === "then" || u.startsWith("_")))
                            return async d => {
                                if (typeof d == "string")
                                    throw new Error(`Integration ${u} must receive an object with named parameters, received: ${d}`);
                                let h, m;
                                return d instanceof FormData || d && Object.values(d).some(g => g instanceof File) ? (h = new FormData,
                                Object.keys(d).forEach(g => {
                                    d[g]instanceof File ? h.append(g, d[g], d[g].name) : typeof d[g] == "object" && d[g] !== null ? h.append(g, JSON.stringify(d[g])) : h.append(g, d[g])
                                }
                                ),
                                m = "multipart/form-data") : (h = d,
                                m = "application/json"),
                                a === "Core" ? t.post(`/apps/${e}/integration-endpoints/Core/${u}`, h || d, {
                                    headers: {
                                        "Content-Type": m
                                    }
                                }) : t.post(`/apps/${e}/integration-endpoints/installable/${a}/integration-endpoints/${u}`, h || d, {
                                    headers: {
                                        "Content-Type": m
                                    }
                                })
                            }
                    }
                })
        }
    })
}
function YC() {
    return typeof window > "u" ? !1 : window !== window.parent
}
function XC(t, e, r) {
    const l = Math.round(window.screenX + (window.outerWidth - 500) / 2)
      , u = Math.round(window.screenY + (window.outerHeight - 600) / 2)
      , d = window.open(t, "base44_auth", `width=500,height=600,left=${l},top=${u},resizable=yes,scrollbars=yes`);
    if (!d)
        return;
    const h = () => {
        window.removeEventListener("message", m),
        clearInterval(g),
        d.closed || d.close()
    }
      , m = y => {
        var w;
        if (y.origin !== r || y.source !== d || !(!((w = y.data) === null || w === void 0) && w.access_token))
            return;
        h();
        const k = new URL(e)
          , {access_token: T, is_new_user: E} = y.data;
        k.searchParams.set("access_token", T),
        E != null && k.searchParams.set("is_new_user", String(E)),
        window.location.href = k.toString()
    }
      , g = setInterval( () => {
        d.closed && h()
    }
    , 500);
    window.addEventListener("message", m)
}
function JC(t, e, r, i) {
    return {
        async me() {
            return t.get(`/apps/${r}/entities/User/me`)
        },
        async updateMe(a) {
            return t.put(`/apps/${r}/entities/User/me`, a)
        },
        redirectToLogin(a) {
            if (typeof window > "u")
                throw new Error("Login method can only be used in a browser environment");
            const l = a ? new URL(a,window.location.origin).toString() : window.location.href
              , u = `${i.appBaseUrl}/login?from_url=${encodeURIComponent(l)}`;
            window.location.href = u
        },
        loginWithProvider(a, l="/") {
            const u = new URL(l,window.location.origin).toString()
              , d = `app_id=${r}&from_url=${encodeURIComponent(u)}`;
            let h;
            a === "sso" ? h = `/apps/${r}/auth/sso/login` : h = `/apps/auth${a === "google" ? "" : `/${a}`}/login`;
            const m = `${i.appBaseUrl}/api${h}?${d}`;
            if (YC()) {
                const g = `${m}&popup_origin=${encodeURIComponent(window.location.origin)}`;
                return XC(g, u, window.location.origin)
            }
            window.location.href = m
        },
        logout(a) {
            if (delete t.defaults.headers.common.Authorization,
            typeof window < "u") {
                if (window.localStorage)
                    try {
                        window.localStorage.removeItem("base44_access_token"),
                        window.localStorage.removeItem("token")
                    } catch (d) {
                        console.error("Failed to remove token from localStorage:", d)
                    }
                const l = a || window.location.href
                  , u = `${i.appBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(l)}`;
                window.location.href = u
            }
        },
        setToken(a, l=!0) {
            if (a && (t.defaults.headers.common.Authorization = `Bearer ${a}`,
            e.defaults.headers.common.Authorization = `Bearer ${a}`,
            l && typeof window < "u" && window.localStorage))
                try {
                    window.localStorage.setItem("base44_access_token", a),
                    window.localStorage.setItem("token", a)
                } catch (u) {
                    console.error("Failed to save token to localStorage:", u)
                }
        },
        async loginViaEmailPassword(a, l, u) {
            var d;
            try {
                const h = await t.post(`/apps/${r}/auth/login`, {
                    email: a,
                    password: l,
                    ...u && {
                        turnstile_token: u
                    }
                })
                  , {access_token: m, user: g} = h;
                return m && this.setToken(m),
                {
                    access_token: m,
                    user: g
                }
            } catch (h) {
                throw ((d = h.response) === null || d === void 0 ? void 0 : d.status) === 401 && await this.logout(),
                h
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(),
                !0
            } catch {
                return !1
            }
        },
        inviteUser(a, l) {
            return t.post(`/apps/${r}/users/invite-user`, {
                user_email: a,
                role: l
            })
        },
        register(a) {
            return t.post(`/apps/${r}/auth/register`, a)
        },
        verifyOtp({email: a, otpCode: l}) {
            return t.post(`/apps/${r}/auth/verify-otp`, {
                email: a,
                otp_code: l
            })
        },
        resendOtp(a) {
            return t.post(`/apps/${r}/auth/resend-otp`, {
                email: a
            })
        },
        resetPasswordRequest(a) {
            return t.post(`/apps/${r}/auth/reset-password-request`, {
                email: a
            })
        },
        resetPassword({resetToken: a, newPassword: l}) {
            return t.post(`/apps/${r}/auth/reset-password`, {
                reset_token: a,
                new_password: l
            })
        },
        changePassword({userId: a, currentPassword: l, newPassword: u}) {
            return t.post(`/apps/${r}/auth/change-password`, {
                user_id: a,
                current_password: l,
                new_password: u
            })
        }
    }
}
function ZC(t, e) {
    return {
        async getAccessToken(r) {
            const i = `/apps/${e}/auth/sso/accesstoken/${r}`;
            return t.get(i)
        }
    }
}
function eT(t, e) {
    return {
        async getAccessToken(r) {
            if (!r || typeof r != "string")
                throw new Error("Integration type is required and must be a string");
            return (await t.get(`/apps/${e}/external-auth/tokens/${r}`)).access_token
        },
        async getConnection(r) {
            var i;
            if (!r || typeof r != "string")
                throw new Error("Integration type is required and must be a string");
            const l = await t.get(`/apps/${e}/external-auth/tokens/${r}`);
            return {
                accessToken: l.access_token,
                connectionConfig: (i = l.connection_config) !== null && i !== void 0 ? i : null
            }
        },
        async getWorkspaceConnection(r) {
            var i;
            if (!r || typeof r != "string")
                throw new Error("Connector ID is required and must be a string");
            const l = await t.get(`/apps/${e}/external-auth/tokens/connectors/${r}`);
            return {
                accessToken: l.access_token,
                connectionConfig: (i = l.connection_config) !== null && i !== void 0 ? i : null
            }
        },
        async getCurrentAppUserAccessToken(r) {
            if (!r || typeof r != "string")
                throw new Error("Connector ID is required and must be a string");
            return (await t.get(`/apps/${e}/app-user-auth/connectors/${r}/token`)).access_token
        },
        async getCurrentAppUserConnection(r) {
            var i;
            if (!r || typeof r != "string")
                throw new Error("Connector ID is required and must be a string");
            const l = await t.get(`/apps/${e}/app-user-auth/connectors/${r}/token`);
            return {
                accessToken: l.access_token,
                connectionConfig: (i = l.connection_config) !== null && i !== void 0 ? i : null
            }
        }
    }
}
function tT(t, e) {
    return {
        async connectAppUser(r) {
            if (!r || typeof r != "string")
                throw new Error("Connector ID is required and must be a string");
            return (await t.post(`/apps/${e}/app-user-auth/connectors/${r}/initiate`)).redirect_url
        },
        async disconnectAppUser(r) {
            if (!r || typeof r != "string")
                throw new Error("Connector ID is required and must be a string");
            await t.delete(`/apps/${e}/app-user-auth/connectors/${r}`)
        }
    }
}
function mi(t={}) {
    const {storageKey: e="base44_access_token", paramName: r="access_token", saveToStorage: i=!0, removeFromUrl: a=!0} = t;
    let l = null;
    if (typeof window < "u" && window.location)
        try {
            const u = new URLSearchParams(window.location.search);
            if (l = u.get(r),
            l) {
                if (i && nT(l, {
                    storageKey: e
                }),
                a) {
                    u.delete(r);
                    const d = `${window.location.pathname}${u.toString() ? `?${u.toString()}` : ""}${window.location.hash}`;
                    window.history.replaceState({}, document.title, d)
                }
                return l
            }
        } catch (u) {
            console.error("Error retrieving token from URL:", u)
        }
    if (typeof window < "u" && window.localStorage)
        try {
            return l = window.localStorage.getItem(e),
            l
        } catch (u) {
            console.error("Error retrieving token from local storage:", u)
        }
    return null
}
function nT(t, e) {
    const {storageKey: r="base44_access_token"} = e;
    if (typeof window > "u" || !window.localStorage || !t)
        return !1;
    try {
        return window.localStorage.setItem(r, t),
        window.localStorage.setItem("token", t),
        !0
    } catch (i) {
        return console.error("Error saving token to local storage:", i),
        !1
    }
}
function k0(t, e, r) {
    const i = (l, u) => l ? `${String(l).replace(/\/$/, "")}${u}` : u
      , a = l => {
        const u = new Headers;
        if (r != null && r.getAuthHeaders) {
            const d = r.getAuthHeaders();
            Object.entries(d).forEach( ([h,m]) => {
                m != null && u.set(h, String(m))
            }
            )
        }
        return l && new Headers(l).forEach( (d, h) => {
            u.set(h, d)
        }
        ),
        u
    }
    ;
    return {
        async invoke(l, u) {
            if (typeof u == "string")
                throw new Error(`Function ${l} must receive an object with named parameters, received: ${u}`);
            let d, h;
            return u instanceof FormData || u && Object.values(u).some(m => m instanceof File) ? (d = new FormData,
            Object.keys(u).forEach(m => {
                u[m]instanceof File ? d.append(m, u[m], u[m].name) : typeof u[m] == "object" && u[m] !== null ? d.append(m, JSON.stringify(u[m])) : d.append(m, u[m])
            }
            ),
            h = "multipart/form-data") : (d = u,
            h = "application/json"),
            t.post(`/apps/${e}/functions/${l}`, d || u, {
                headers: {
                    "Content-Type": h
                }
            })
        },
        async fetch(l, u={}) {
            const h = `/functions${l.startsWith("/") ? l : `/${l}`}`
              , m = a(u.headers)
              , g = {
                ...u,
                headers: m
            };
            return await fetch(i(r == null ? void 0 : r.baseURL, h), g)
        }
    }
}
function E0({axios: t, getSocket: e, appId: r, serverUrl: i, token: a}) {
    const l = `/apps/${r}/agents`
      , u = {}
      , d = () => t.get(`${l}/conversations`)
      , h = E => t.get(`${l}/conversations/${E}`);
    return {
        getConversations: d,
        getConversation: h,
        listConversations: E => t.get(`${l}/conversations`, {
            params: E
        }),
        createConversation: E => t.post(`${l}/conversations`, E),
        addMessage: async (E, S) => t.post(`${l}/conversations/v2/${E.id}/messages`, S),
        subscribeToConversation: (E, S) => {
            const b = `/agent-conversations/${E}`
              , P = e()
              , A = h(E).then(M => (u[E] = M,
            M));
            return P.subscribeToRoom(b, {
                connect: () => {}
                ,
                update_model: async ({data: M}) => {
                    const F = JSON.parse(M);
                    if (F._message) {
                        await A;
                        const $ = F._message
                          , J = u[E];
                        if (J) {
                            const V = J.messages || []
                              , ee = V.findIndex(le => le.id === $.id)
                              , ue = ee !== -1 ? V.map( (le, Ae) => Ae === ee ? $ : le) : [...V, $];
                            u[E] = {
                                ...J,
                                messages: ue
                            },
                            S == null || S(u[E])
                        }
                    }
                }
            })
        }
        ,
        getWhatsAppConnectURL: E => {
            const S = `${i}/api/apps/${r}/agents/${encodeURIComponent(E)}/whatsapp`
              , b = a ?? mi();
            return b ? `${S}?token=${b}` : S
        }
        ,
        getTelegramConnectURL: E => {
            const S = `${i}/api/apps/${r}/agents/${encodeURIComponent(E)}/telegram`
              , b = a ?? mi();
            return b ? `${S}?token=${b}` : S
        }
    }
}
function C0({serverUrl: t, token: e, appId: r}) {
    return {
        connection: () => {
            var a;
            return {
                baseURL: `${t}/api/apps/${r}/ai/openai/v1`,
                token: (a = e ?? mi()) !== null && a !== void 0 ? a : ""
            }
        }
    }
}
function T0(t, e) {
    const r = `/app-logs/${e}`;
    return {
        async logUserInApp(i) {
            await t.post(`${r}/log-user-in-app/${i}`)
        },
        async fetchLogs(i={}) {
            return await t.get(r, {
                params: i
            })
        },
        async getStats(i={}) {
            return await t.get(`${r}/stats`, {
                params: i
            })
        }
    }
}
function rT(t, e) {
    return {
        async inviteUser(r, i) {
            if (i !== "user" && i !== "admin")
                throw new Error(`Invalid role: "${i}". Role must be either "user" or "admin".`);
            return await t.post(`/apps/${e}/runtime/users/invite-user`, {
                user_email: r,
                role: i
            })
        }
    }
}
const Mn = Object.create(null);
Mn.open = "0";
Mn.close = "1";
Mn.ping = "2";
Mn.pong = "3";
Mn.message = "4";
Mn.upgrade = "5";
Mn.noop = "6";
const Cl = Object.create(null);
Object.keys(Mn).forEach(t => {
    Cl[Mn[t]] = t
}
);
const Jd = {
    type: "error",
    data: "parser error"
}
  , Cx = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"
  , Tx = typeof ArrayBuffer == "function"
  , _x = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer
  , Ff = ({type: t, data: e}, r, i) => Cx && e instanceof Blob ? r ? i(e) : _0(e, i) : Tx && (e instanceof ArrayBuffer || _x(e)) ? r ? i(e) : _0(new Blob([e]), i) : i(Mn[t] + (e || ""))
  , _0 = (t, e) => {
    const r = new FileReader;
    return r.onload = function() {
        const i = r.result.split(",")[1];
        e("b" + (i || ""))
    }
    ,
    r.readAsDataURL(t)
}
;
function P0(t) {
    return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer,t.byteOffset,t.byteLength)
}
let hd;
function sT(t, e) {
    if (Cx && t.data instanceof Blob)
        return t.data.arrayBuffer().then(P0).then(e);
    if (Tx && (t.data instanceof ArrayBuffer || _x(t.data)))
        return e(P0(t.data));
    Ff(t, !1, r => {
        hd || (hd = new TextEncoder),
        e(hd.encode(r))
    }
    )
}
const R0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , yo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < R0.length; t++)
    yo[R0.charCodeAt(t)] = t;
const iT = t => {
    let e = t.length * .75, r = t.length, i, a = 0, l, u, d, h;
    t[t.length - 1] === "=" && (e--,
    t[t.length - 2] === "=" && e--);
    const m = new ArrayBuffer(e)
      , g = new Uint8Array(m);
    for (i = 0; i < r; i += 4)
        l = yo[t.charCodeAt(i)],
        u = yo[t.charCodeAt(i + 1)],
        d = yo[t.charCodeAt(i + 2)],
        h = yo[t.charCodeAt(i + 3)],
        g[a++] = l << 2 | u >> 4,
        g[a++] = (u & 15) << 4 | d >> 2,
        g[a++] = (d & 3) << 6 | h & 63;
    return m
}
  , oT = typeof ArrayBuffer == "function"
  , Vf = (t, e) => {
    if (typeof t != "string")
        return {
            type: "message",
            data: Px(t, e)
        };
    const r = t.charAt(0);
    return r === "b" ? {
        type: "message",
        data: aT(t.substring(1), e)
    } : Cl[r] ? t.length > 1 ? {
        type: Cl[r],
        data: t.substring(1)
    } : {
        type: Cl[r]
    } : Jd
}
  , aT = (t, e) => {
    if (oT) {
        const r = iT(t);
        return Px(r, e)
    } else
        return {
            base64: !0,
            data: t
        }
}
  , Px = (t, e) => {
    switch (e) {
    case "blob":
        return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
        return t instanceof ArrayBuffer ? t : t.buffer
    }
}
  , Rx = ""
  , lT = (t, e) => {
    const r = t.length
      , i = new Array(r);
    let a = 0;
    t.forEach( (l, u) => {
        Ff(l, !1, d => {
            i[u] = d,
            ++a === r && e(i.join(Rx))
        }
        )
    }
    )
}
  , uT = (t, e) => {
    const r = t.split(Rx)
      , i = [];
    for (let a = 0; a < r.length; a++) {
        const l = Vf(r[a], e);
        if (i.push(l),
        l.type === "error")
            break
    }
    return i
}
;
function cT() {
    return new TransformStream({
        transform(t, e) {
            sT(t, r => {
                const i = r.length;
                let a;
                if (i < 126)
                    a = new Uint8Array(1),
                    new DataView(a.buffer).setUint8(0, i);
                else if (i < 65536) {
                    a = new Uint8Array(3);
                    const l = new DataView(a.buffer);
                    l.setUint8(0, 126),
                    l.setUint16(1, i)
                } else {
                    a = new Uint8Array(9);
                    const l = new DataView(a.buffer);
                    l.setUint8(0, 127),
                    l.setBigUint64(1, BigInt(i))
                }
                t.data && typeof t.data != "string" && (a[0] |= 128),
                e.enqueue(a),
                e.enqueue(r)
            }
            )
        }
    })
}
let pd;
function pl(t) {
    return t.reduce( (e, r) => e + r.length, 0)
}
function ml(t, e) {
    if (t[0].length === e)
        return t.shift();
    const r = new Uint8Array(e);
    let i = 0;
    for (let a = 0; a < e; a++)
        r[a] = t[0][i++],
        i === t[0].length && (t.shift(),
        i = 0);
    return t.length && i < t[0].length && (t[0] = t[0].slice(i)),
    r
}
function dT(t, e) {
    pd || (pd = new TextDecoder);
    const r = [];
    let i = 0
      , a = -1
      , l = !1;
    return new TransformStream({
        transform(u, d) {
            for (r.push(u); ; ) {
                if (i === 0) {
                    if (pl(r) < 1)
                        break;
                    const h = ml(r, 1);
                    l = (h[0] & 128) === 128,
                    a = h[0] & 127,
                    a < 126 ? i = 3 : a === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (pl(r) < 2)
                        break;
                    const h = ml(r, 2);
                    a = new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),
                    i = 3
                } else if (i === 2) {
                    if (pl(r) < 8)
                        break;
                    const h = ml(r, 8)
                      , m = new DataView(h.buffer,h.byteOffset,h.length)
                      , g = m.getUint32(0);
                    if (g > Math.pow(2, 21) - 1) {
                        d.enqueue(Jd);
                        break
                    }
                    a = g * Math.pow(2, 32) + m.getUint32(4),
                    i = 3
                } else {
                    if (pl(r) < a)
                        break;
                    const h = ml(r, a);
                    d.enqueue(Vf(l ? h : pd.decode(h), e)),
                    i = 0
                }
                if (a === 0 || a > t) {
                    d.enqueue(Jd);
                    break
                }
            }
        }
    })
}
const Ax = 4;
function tt(t) {
    if (t)
        return fT(t)
}
function fT(t) {
    for (var e in tt.prototype)
        t[e] = tt.prototype[e];
    return t
}
tt.prototype.on = tt.prototype.addEventListener = function(t, e) {
    return this._callbacks = this._callbacks || {},
    (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
    this
}
;
tt.prototype.once = function(t, e) {
    function r() {
        this.off(t, r),
        e.apply(this, arguments)
    }
    return r.fn = e,
    this.on(t, r),
    this
}
;
tt.prototype.off = tt.prototype.removeListener = tt.prototype.removeAllListeners = tt.prototype.removeEventListener = function(t, e) {
    if (this._callbacks = this._callbacks || {},
    arguments.length == 0)
        return this._callbacks = {},
        this;
    var r = this._callbacks["$" + t];
    if (!r)
        return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + t],
        this;
    for (var i, a = 0; a < r.length; a++)
        if (i = r[a],
        i === e || i.fn === e) {
            r.splice(a, 1);
            break
        }
    return r.length === 0 && delete this._callbacks["$" + t],
    this
}
;
tt.prototype.emit = function(t) {
    this._callbacks = this._callbacks || {};
    for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], i = 1; i < arguments.length; i++)
        e[i - 1] = arguments[i];
    if (r) {
        r = r.slice(0);
        for (var i = 0, a = r.length; i < a; ++i)
            r[i].apply(this, e)
    }
    return this
}
;
tt.prototype.emitReserved = tt.prototype.emit;
tt.prototype.listeners = function(t) {
    return this._callbacks = this._callbacks || {},
    this._callbacks["$" + t] || []
}
;
tt.prototype.hasListeners = function(t) {
    return !!this.listeners(t).length
}
;
const eu = typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, r) => r(e, 0)
  , an = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
  , hT = "arraybuffer";
function Nx(t, ...e) {
    return e.reduce( (r, i) => (t.hasOwnProperty(i) && (r[i] = t[i]),
    r), {})
}
const pT = an.setTimeout
  , mT = an.clearTimeout;
function tu(t, e) {
    e.useNativeTimers ? (t.setTimeoutFn = pT.bind(an),
    t.clearTimeoutFn = mT.bind(an)) : (t.setTimeoutFn = an.setTimeout.bind(an),
    t.clearTimeoutFn = an.clearTimeout.bind(an))
}
const gT = 1.33;
function yT(t) {
    return typeof t == "string" ? vT(t) : Math.ceil((t.byteLength || t.size) * gT)
}
function vT(t) {
    let e = 0
      , r = 0;
    for (let i = 0, a = t.length; i < a; i++)
        e = t.charCodeAt(i),
        e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (i++,
        r += 4);
    return r
}
function Ox() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function xT(t) {
    let e = "";
    for (let r in t)
        t.hasOwnProperty(r) && (e.length && (e += "&"),
        e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
    return e
}
function wT(t) {
    let e = {}
      , r = t.split("&");
    for (let i = 0, a = r.length; i < a; i++) {
        let l = r[i].split("=");
        e[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
    }
    return e
}
class bT extends Error {
    constructor(e, r, i) {
        super(e),
        this.description = r,
        this.context = i,
        this.type = "TransportError"
    }
}
class Bf extends tt {
    constructor(e) {
        super(),
        this.writable = !1,
        tu(this, e),
        this.opts = e,
        this.query = e.query,
        this.socket = e.socket,
        this.supportsBinary = !e.forceBase64
    }
    onError(e, r, i) {
        return super.emitReserved("error", new bT(e,r,i)),
        this
    }
    open() {
        return this.readyState = "opening",
        this.doOpen(),
        this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
        this.onClose()),
        this
    }
    send(e) {
        this.readyState === "open" && this.write(e)
    }
    onOpen() {
        this.readyState = "open",
        this.writable = !0,
        super.emitReserved("open")
    }
    onData(e) {
        const r = Vf(e, this.socket.binaryType);
        this.onPacket(r)
    }
    onPacket(e) {
        super.emitReserved("packet", e)
    }
    onClose(e) {
        this.readyState = "closed",
        super.emitReserved("close", e)
    }
    pause(e) {}
    createUri(e, r={}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r)
    }
    _hostname() {
        const e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(e) {
        const r = xT(e);
        return r.length ? "?" + r : ""
    }
}
class ST extends Bf {
    constructor() {
        super(...arguments),
        this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(e) {
        this.readyState = "pausing";
        const r = () => {
            this.readyState = "paused",
            e()
        }
        ;
        if (this._polling || !this.writable) {
            let i = 0;
            this._polling && (i++,
            this.once("pollComplete", function() {
                --i || r()
            })),
            this.writable || (i++,
            this.once("drain", function() {
                --i || r()
            }))
        } else
            r()
    }
    _poll() {
        this._polling = !0,
        this.doPoll(),
        this.emitReserved("poll")
    }
    onData(e) {
        const r = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(),
            i.type === "close")
                return this.onClose({
                    description: "transport closed by the server"
                }),
                !1;
            this.onPacket(i)
        }
        ;
        uT(e, this.socket.binaryType).forEach(r),
        this.readyState !== "closed" && (this._polling = !1,
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll())
    }
    doClose() {
        const e = () => {
            this.write([{
                type: "close"
            }])
        }
        ;
        this.readyState === "open" ? e() : this.once("open", e)
    }
    write(e) {
        this.writable = !1,
        lT(e, r => {
            this.doWrite(r, () => {
                this.writable = !0,
                this.emitReserved("drain")
            }
            )
        }
        )
    }
    uri() {
        const e = this.opts.secure ? "https" : "http"
          , r = this.query || {};
        return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = Ox()),
        !this.supportsBinary && !r.sid && (r.b64 = 1),
        this.createUri(e, r)
    }
}
let jx = !1;
try {
    jx = typeof XMLHttpRequest < "u" && "withCredentials"in new XMLHttpRequest
} catch {}
const kT = jx;
function ET() {}
class CT extends ST {
    constructor(e) {
        if (super(e),
        typeof location < "u") {
            const r = location.protocol === "https:";
            let i = location.port;
            i || (i = r ? "443" : "80"),
            this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port
        }
    }
    doWrite(e, r) {
        const i = this.request({
            method: "POST",
            data: e
        });
        i.on("success", r),
        i.on("error", (a, l) => {
            this.onError("xhr post error", a, l)
        }
        )
    }
    doPoll() {
        const e = this.request();
        e.on("data", this.onData.bind(this)),
        e.on("error", (r, i) => {
            this.onError("xhr poll error", r, i)
        }
        ),
        this.pollXhr = e
    }
}
class Nn extends tt {
    constructor(e, r, i) {
        super(),
        this.createRequest = e,
        tu(this, i),
        this._opts = i,
        this._method = i.method || "GET",
        this._uri = r,
        this._data = i.data !== void 0 ? i.data : null,
        this._create()
    }
    _create() {
        var e;
        const r = Nx(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        r.xdomain = !!this._opts.xd;
        const i = this._xhr = this.createRequest(r);
        try {
            i.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let a in this._opts.extraHeaders)
                        this._opts.extraHeaders.hasOwnProperty(a) && i.setRequestHeader(a, this._opts.extraHeaders[a])
                }
            } catch {}
            if (this._method === "POST")
                try {
                    i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}
            (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(i),
            "withCredentials"in i && (i.withCredentials = this._opts.withCredentials),
            this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout),
            i.onreadystatechange = () => {
                var a;
                i.readyState === 3 && ((a = this._opts.cookieJar) === null || a === void 0 || a.parseCookies(i.getResponseHeader("set-cookie"))),
                i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn( () => {
                    this._onError(typeof i.status == "number" ? i.status : 0)
                }
                , 0))
            }
            ,
            i.send(this._data)
        } catch (a) {
            this.setTimeoutFn( () => {
                this._onError(a)
            }
            , 0);
            return
        }
        typeof document < "u" && (this._index = Nn.requestsCount++,
        Nn.requests[this._index] = this)
    }
    _onError(e) {
        this.emitReserved("error", e, this._xhr),
        this._cleanup(!0)
    }
    _cleanup(e) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = ET,
            e)
                try {
                    this._xhr.abort()
                } catch {}
            typeof document < "u" && delete Nn.requests[this._index],
            this._xhr = null
        }
    }
    _onLoad() {
        const e = this._xhr.responseText;
        e !== null && (this.emitReserved("data", e),
        this.emitReserved("success"),
        this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
Nn.requestsCount = 0;
Nn.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", A0);
    else if (typeof addEventListener == "function") {
        const t = "onpagehide"in an ? "pagehide" : "unload";
        addEventListener(t, A0, !1)
    }
}
function A0() {
    for (let t in Nn.requests)
        Nn.requests.hasOwnProperty(t) && Nn.requests[t].abort()
}
const TT = (function() {
    const t = Mx({
        xdomain: !1
    });
    return t && t.responseType !== null
}
)();
class _T extends CT {
    constructor(e) {
        super(e);
        const r = e && e.forceBase64;
        this.supportsBinary = TT && !r
    }
    request(e={}) {
        return Object.assign(e, {
            xd: this.xd
        }, this.opts),
        new Nn(Mx,this.uri(),e)
    }
}
function Mx(t) {
    const e = t.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || kT))
            return new XMLHttpRequest
    } catch {}
    if (!e)
        try {
            return new an[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
}
const Lx = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class PT extends Bf {
    get name() {
        return "websocket"
    }
    doOpen() {
        const e = this.uri()
          , r = this.opts.protocols
          , i = Lx ? {} : Nx(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(e, r, i)
        } catch (a) {
            return this.emitReserved("error", a)
        }
        this.ws.binaryType = this.socket.binaryType,
        this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(),
            this.onOpen()
        }
        ,
        this.ws.onclose = e => this.onClose({
            description: "websocket connection closed",
            context: e
        }),
        this.ws.onmessage = e => this.onData(e.data),
        this.ws.onerror = e => this.onError("websocket error", e)
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r]
              , a = r === e.length - 1;
            Ff(i, this.supportsBinary, l => {
                try {
                    this.doWrite(i, l)
                } catch {}
                a && eu( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}
        ,
        this.ws.close(),
        this.ws = null)
    }
    uri() {
        const e = this.opts.secure ? "wss" : "ws"
          , r = this.query || {};
        return this.opts.timestampRequests && (r[this.opts.timestampParam] = Ox()),
        this.supportsBinary || (r.b64 = 1),
        this.createUri(e, r)
    }
}
const md = an.WebSocket || an.MozWebSocket;
class RT extends PT {
    createSocket(e, r, i) {
        return Lx ? new md(e,r,i) : r ? new md(e,r) : new md(e)
    }
    doWrite(e, r) {
        this.ws.send(r)
    }
}
class AT extends Bf {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
        } catch (e) {
            return this.emitReserved("error", e)
        }
        this._transport.closed.then( () => {
            this.onClose()
        }
        ).catch(e => {
            this.onError("webtransport error", e)
        }
        ),
        this._transport.ready.then( () => {
            this._transport.createBidirectionalStream().then(e => {
                const r = dT(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                  , i = e.readable.pipeThrough(r).getReader()
                  , a = cT();
                a.readable.pipeTo(e.writable),
                this._writer = a.writable.getWriter();
                const l = () => {
                    i.read().then( ({done: d, value: h}) => {
                        d || (this.onPacket(h),
                        l())
                    }
                    ).catch(d => {}
                    )
                }
                ;
                l();
                const u = {
                    type: "open"
                };
                this.query.sid && (u.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(u).then( () => this.onOpen())
            }
            )
        }
        )
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r]
              , a = r === e.length - 1;
            this._writer.write(i).then( () => {
                a && eu( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        var e;
        (e = this._transport) === null || e === void 0 || e.close()
    }
}
const NT = {
    websocket: RT,
    webtransport: AT,
    polling: _T
}
  , OT = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  , jT = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function Zd(t) {
    if (t.length > 8e3)
        throw "URI too long";
    const e = t
      , r = t.indexOf("[")
      , i = t.indexOf("]");
    r != -1 && i != -1 && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length));
    let a = OT.exec(t || "")
      , l = {}
      , u = 14;
    for (; u--; )
        l[jT[u]] = a[u] || "";
    return r != -1 && i != -1 && (l.source = e,
    l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"),
    l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    l.ipv6uri = !0),
    l.pathNames = MT(l, l.path),
    l.queryKey = LT(l, l.query),
    l
}
function MT(t, e) {
    const r = /\/{2,9}/g
      , i = e.replace(r, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1),
    e.slice(-1) == "/" && i.splice(i.length - 1, 1),
    i
}
function LT(t, e) {
    const r = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, a, l) {
        a && (r[a] = l)
    }),
    r
}
const ef = typeof addEventListener == "function" && typeof removeEventListener == "function"
  , Tl = [];
ef && addEventListener("offline", () => {
    Tl.forEach(t => t())
}
, !1);
class Mr extends tt {
    constructor(e, r) {
        if (super(),
        this.binaryType = hT,
        this.writeBuffer = [],
        this._prevBufferLen = 0,
        this._pingInterval = -1,
        this._pingTimeout = -1,
        this._maxPayload = -1,
        this._pingTimeoutTime = 1 / 0,
        e && typeof e == "object" && (r = e,
        e = null),
        e) {
            const i = Zd(e);
            r.hostname = i.host,
            r.secure = i.protocol === "https" || i.protocol === "wss",
            r.port = i.port,
            i.query && (r.query = i.query)
        } else
            r.host && (r.hostname = Zd(r.host).host);
        tu(this, r),
        this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:",
        r.hostname && !r.port && (r.port = this.secure ? "443" : "80"),
        this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"),
        this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"),
        this.transports = [],
        this._transportsByName = {},
        r.transports.forEach(i => {
            const a = i.prototype.name;
            this.transports.push(a),
            this._transportsByName[a] = i
        }
        ),
        this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, r),
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
        typeof this.opts.query == "string" && (this.opts.query = wT(this.opts.query)),
        ef && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(),
            this.transport.close())
        }
        ,
        addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
        this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }
        ,
        Tl.push(this._offlineEventListener))),
        this.opts.withCredentials && (this._cookieJar = void 0),
        this._open()
    }
    createTransport(e) {
        const r = Object.assign({}, this.opts.query);
        r.EIO = Ax,
        r.transport = e,
        this.id && (r.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: r,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](i)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn( () => {
                this.emitReserved("error", "No transports available")
            }
            , 0);
            return
        }
        const e = this.opts.rememberUpgrade && Mr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const r = this.createTransport(e);
        r.open(),
        this.setTransport(r)
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(),
        this.transport = e,
        e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", r => this._onClose("transport close", r))
    }
    onOpen() {
        this.readyState = "open",
        Mr.priorWebsocketSuccess = this.transport.name === "websocket",
        this.emitReserved("open"),
        this.flush()
    }
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
            switch (this.emitReserved("packet", e),
            this.emitReserved("heartbeat"),
            e.type) {
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "ping":
                this._sendPacket("pong"),
                this.emitReserved("ping"),
                this.emitReserved("pong"),
                this._resetPingTimeout();
                break;
            case "error":
                const r = new Error("server error");
                r.code = e.data,
                this._onError(r);
                break;
            case "message":
                this.emitReserved("data", e.data),
                this.emitReserved("message", e.data);
                break
            }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e),
        this.id = e.sid,
        this.transport.query.sid = e.sid,
        this._pingInterval = e.pingInterval,
        this._pingTimeout = e.pingTimeout,
        this._maxPayload = e.maxPayload,
        this.onOpen(),
        this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e,
        this._pingTimeoutTimer = this.setTimeoutFn( () => {
            this._onClose("ping timeout")
        }
        , e),
        this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen),
        this._prevBufferLen = 0,
        this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this._getWritablePackets();
            this.transport.send(e),
            this._prevBufferLen = e.length,
            this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
            return this.writeBuffer;
        let r = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const a = this.writeBuffer[i].data;
            if (a && (r += yT(a)),
            i > 0 && r > this._maxPayload)
                return this.writeBuffer.slice(0, i);
            r += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return !0;
        const e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0,
        eu( () => {
            this._onClose("ping timeout")
        }
        , this.setTimeoutFn)),
        e
    }
    write(e, r, i) {
        return this._sendPacket("message", e, r, i),
        this
    }
    send(e, r, i) {
        return this._sendPacket("message", e, r, i),
        this
    }
    _sendPacket(e, r, i, a) {
        if (typeof r == "function" && (a = r,
        r = void 0),
        typeof i == "function" && (a = i,
        i = null),
        this.readyState === "closing" || this.readyState === "closed")
            return;
        i = i || {},
        i.compress = i.compress !== !1;
        const l = {
            type: e,
            data: r,
            options: i
        };
        this.emitReserved("packetCreate", l),
        this.writeBuffer.push(l),
        a && this.once("flush", a),
        this.flush()
    }
    close() {
        const e = () => {
            this._onClose("forced close"),
            this.transport.close()
        }
          , r = () => {
            this.off("upgrade", r),
            this.off("upgradeError", r),
            e()
        }
          , i = () => {
            this.once("upgrade", r),
            this.once("upgradeError", r)
        }
        ;
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing",
        this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : e()
        }
        ) : this.upgrading ? i() : e()),
        this
    }
    _onError(e) {
        if (Mr.priorWebsocketSuccess = !1,
        this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
            return this.transports.shift(),
            this._open();
        this.emitReserved("error", e),
        this._onClose("transport error", e)
    }
    _onClose(e, r) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            ef && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
            this._offlineEventListener)) {
                const i = Tl.indexOf(this._offlineEventListener);
                i !== -1 && Tl.splice(i, 1)
            }
            this.readyState = "closed",
            this.id = null,
            this.emitReserved("close", e, r),
            this.writeBuffer = [],
            this._prevBufferLen = 0
        }
    }
}
Mr.protocol = Ax;
class DT extends Mr {
    constructor() {
        super(...arguments),
        this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(),
        this.readyState === "open" && this.opts.upgrade)
            for (let e = 0; e < this._upgrades.length; e++)
                this._probe(this._upgrades[e])
    }
    _probe(e) {
        let r = this.createTransport(e)
          , i = !1;
        Mr.priorWebsocketSuccess = !1;
        const a = () => {
            i || (r.send([{
                type: "ping",
                data: "probe"
            }]),
            r.once("packet", y => {
                if (!i)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0,
                        this.emitReserved("upgrading", r),
                        !r)
                            return;
                        Mr.priorWebsocketSuccess = r.name === "websocket",
                        this.transport.pause( () => {
                            i || this.readyState !== "closed" && (g(),
                            this.setTransport(r),
                            r.send([{
                                type: "upgrade"
                            }]),
                            this.emitReserved("upgrade", r),
                            r = null,
                            this.upgrading = !1,
                            this.flush())
                        }
                        )
                    } else {
                        const w = new Error("probe error");
                        w.transport = r.name,
                        this.emitReserved("upgradeError", w)
                    }
            }
            ))
        }
        ;
        function l() {
            i || (i = !0,
            g(),
            r.close(),
            r = null)
        }
        const u = y => {
            const w = new Error("probe error: " + y);
            w.transport = r.name,
            l(),
            this.emitReserved("upgradeError", w)
        }
        ;
        function d() {
            u("transport closed")
        }
        function h() {
            u("socket closed")
        }
        function m(y) {
            r && y.name !== r.name && l()
        }
        const g = () => {
            r.removeListener("open", a),
            r.removeListener("error", u),
            r.removeListener("close", d),
            this.off("close", h),
            this.off("upgrading", m)
        }
        ;
        r.once("open", a),
        r.once("error", u),
        r.once("close", d),
        this.once("close", h),
        this.once("upgrading", m),
        this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn( () => {
            i || r.open()
        }
        , 200) : r.open()
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades),
        super.onHandshake(e)
    }
    _filterUpgrades(e) {
        const r = [];
        for (let i = 0; i < e.length; i++)
            ~this.transports.indexOf(e[i]) && r.push(e[i]);
        return r
    }
}
let IT = class extends DT {
    constructor(e, r={}) {
        const i = typeof e == "object" ? e : r;
        (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map(a => NT[a]).filter(a => !!a)),
        super(e, i)
    }
}
;
function FT(t, e="", r) {
    let i = t;
    r = r || typeof location < "u" && location,
    t == null && (t = r.protocol + "//" + r.host),
    typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t),
    /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t),
    i = Zd(t)),
    i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
    i.path = i.path || "/";
    const l = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + l + ":" + i.port + e,
    i.href = i.protocol + "://" + l + (r && r.port === i.port ? "" : ":" + i.port),
    i
}
const VT = typeof ArrayBuffer == "function"
  , BT = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
  , Dx = Object.prototype.toString
  , UT = typeof Blob == "function" || typeof Blob < "u" && Dx.call(Blob) === "[object BlobConstructor]"
  , zT = typeof File == "function" || typeof File < "u" && Dx.call(File) === "[object FileConstructor]";
function Uf(t) {
    return VT && (t instanceof ArrayBuffer || BT(t)) || UT && t instanceof Blob || zT && t instanceof File
}
function _l(t, e) {
    if (!t || typeof t != "object")
        return !1;
    if (Array.isArray(t)) {
        for (let r = 0, i = t.length; r < i; r++)
            if (_l(t[r]))
                return !0;
        return !1
    }
    if (Uf(t))
        return !0;
    if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
        return _l(t.toJSON(), !0);
    for (const r in t)
        if (Object.prototype.hasOwnProperty.call(t, r) && _l(t[r]))
            return !0;
    return !1
}
function $T(t) {
    const e = []
      , r = t.data
      , i = t;
    return i.data = tf(r, e),
    i.attachments = e.length,
    {
        packet: i,
        buffers: e
    }
}
function tf(t, e) {
    if (!t)
        return t;
    if (Uf(t)) {
        const r = {
            _placeholder: !0,
            num: e.length
        };
        return e.push(t),
        r
    } else if (Array.isArray(t)) {
        const r = new Array(t.length);
        for (let i = 0; i < t.length; i++)
            r[i] = tf(t[i], e);
        return r
    } else if (typeof t == "object" && !(t instanceof Date)) {
        const r = {};
        for (const i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (r[i] = tf(t[i], e));
        return r
    }
    return t
}
function HT(t, e) {
    return t.data = nf(t.data, e),
    delete t.attachments,
    t
}
function nf(t, e) {
    if (!t)
        return t;
    if (t && t._placeholder === !0) {
        if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
            return e[t.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(t))
        for (let r = 0; r < t.length; r++)
            t[r] = nf(t[r], e);
    else if (typeof t == "object")
        for (const r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (t[r] = nf(t[r], e));
    return t
}
const qT = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var Pe;
(function(t) {
    t[t.CONNECT = 0] = "CONNECT",
    t[t.DISCONNECT = 1] = "DISCONNECT",
    t[t.EVENT = 2] = "EVENT",
    t[t.ACK = 3] = "ACK",
    t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR",
    t[t.BINARY_EVENT = 5] = "BINARY_EVENT",
    t[t.BINARY_ACK = 6] = "BINARY_ACK"
}
)(Pe || (Pe = {}));
class WT {
    constructor(e) {
        this.replacer = e
    }
    encode(e) {
        return (e.type === Pe.EVENT || e.type === Pe.ACK) && _l(e) ? this.encodeAsBinary({
            type: e.type === Pe.EVENT ? Pe.BINARY_EVENT : Pe.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [this.encodeAsString(e)]
    }
    encodeAsString(e) {
        let r = "" + e.type;
        return (e.type === Pe.BINARY_EVENT || e.type === Pe.BINARY_ACK) && (r += e.attachments + "-"),
        e.nsp && e.nsp !== "/" && (r += e.nsp + ","),
        e.id != null && (r += e.id),
        e.data != null && (r += JSON.stringify(e.data, this.replacer)),
        r
    }
    encodeAsBinary(e) {
        const r = $T(e)
          , i = this.encodeAsString(r.packet)
          , a = r.buffers;
        return a.unshift(i),
        a
    }
}
class zf extends tt {
    constructor(e) {
        super(),
        this.reviver = e
    }
    add(e) {
        let r;
        if (typeof e == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            r = this.decodeString(e);
            const i = r.type === Pe.BINARY_EVENT;
            i || r.type === Pe.BINARY_ACK ? (r.type = i ? Pe.EVENT : Pe.ACK,
            this.reconstructor = new KT(r),
            r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r)
        } else if (Uf(e) || e.base64)
            if (this.reconstructor)
                r = this.reconstructor.takeBinaryData(e),
                r && (this.reconstructor = null,
                super.emitReserved("decoded", r));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + e)
    }
    decodeString(e) {
        let r = 0;
        const i = {
            type: Number(e.charAt(0))
        };
        if (Pe[i.type] === void 0)
            throw new Error("unknown packet type " + i.type);
        if (i.type === Pe.BINARY_EVENT || i.type === Pe.BINARY_ACK) {
            const l = r + 1;
            for (; e.charAt(++r) !== "-" && r != e.length; )
                ;
            const u = e.substring(l, r);
            if (u != Number(u) || e.charAt(r) !== "-")
                throw new Error("Illegal attachments");
            i.attachments = Number(u)
        }
        if (e.charAt(r + 1) === "/") {
            const l = r + 1;
            for (; ++r && !(e.charAt(r) === "," || r === e.length); )
                ;
            i.nsp = e.substring(l, r)
        } else
            i.nsp = "/";
        const a = e.charAt(r + 1);
        if (a !== "" && Number(a) == a) {
            const l = r + 1;
            for (; ++r; ) {
                const u = e.charAt(r);
                if (u == null || Number(u) != u) {
                    --r;
                    break
                }
                if (r === e.length)
                    break
            }
            i.id = Number(e.substring(l, r + 1))
        }
        if (e.charAt(++r)) {
            const l = this.tryParse(e.substr(r));
            if (zf.isPayloadValid(i.type, l))
                i.data = l;
            else
                throw new Error("invalid payload")
        }
        return i
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(e, r) {
        switch (e) {
        case Pe.CONNECT:
            return N0(r);
        case Pe.DISCONNECT:
            return r === void 0;
        case Pe.CONNECT_ERROR:
            return typeof r == "string" || N0(r);
        case Pe.EVENT:
        case Pe.BINARY_EVENT:
            return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && qT.indexOf(r[0]) === -1);
        case Pe.ACK:
        case Pe.BINARY_ACK:
            return Array.isArray(r)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(),
        this.reconstructor = null)
    }
}
class KT {
    constructor(e) {
        this.packet = e,
        this.buffers = [],
        this.reconPack = e
    }
    takeBinaryData(e) {
        if (this.buffers.push(e),
        this.buffers.length === this.reconPack.attachments) {
            const r = HT(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
            r
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null,
        this.buffers = []
    }
}
function N0(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
const QT = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: zf,
    Encoder: WT,
    get PacketType() {
        return Pe
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
function bn(t, e, r) {
    return t.on(e, r),
    function() {
        t.off(e, r)
    }
}
const GT = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class Ix extends tt {
    constructor(e, r, i) {
        super(),
        this.connected = !1,
        this.recovered = !1,
        this.receiveBuffer = [],
        this.sendBuffer = [],
        this._queue = [],
        this._queueSeq = 0,
        this.ids = 0,
        this.acks = {},
        this.flags = {},
        this.io = e,
        this.nsp = r,
        i && i.auth && (this.auth = i.auth),
        this._opts = Object.assign({}, i),
        this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs)
            return;
        const e = this.io;
        this.subs = [bn(e, "open", this.onopen.bind(this)), bn(e, "packet", this.onpacket.bind(this)), bn(e, "error", this.onerror.bind(this)), bn(e, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this)
    }
    open() {
        return this.connect()
    }
    send(...e) {
        return e.unshift("message"),
        this.emit.apply(this, e),
        this
    }
    emit(e, ...r) {
        var i, a, l;
        if (GT.hasOwnProperty(e))
            throw new Error('"' + e.toString() + '" is a reserved event name');
        if (r.unshift(e),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(r),
            this;
        const u = {
            type: Pe.EVENT,
            data: r
        };
        if (u.options = {},
        u.options.compress = this.flags.compress !== !1,
        typeof r[r.length - 1] == "function") {
            const g = this.ids++
              , y = r.pop();
            this._registerAckCallback(g, y),
            u.id = g
        }
        const d = (a = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || a === void 0 ? void 0 : a.writable
          , h = this.connected && !(!((l = this.io.engine) === null || l === void 0) && l._hasPingExpired());
        return this.flags.volatile && !d || (h ? (this.notifyOutgoingListeners(u),
        this.packet(u)) : this.sendBuffer.push(u)),
        this.flags = {},
        this
    }
    _registerAckCallback(e, r) {
        var i;
        const a = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (a === void 0) {
            this.acks[e] = r;
            return
        }
        const l = this.io.setTimeoutFn( () => {
            delete this.acks[e];
            for (let d = 0; d < this.sendBuffer.length; d++)
                this.sendBuffer[d].id === e && this.sendBuffer.splice(d, 1);
            r.call(this, new Error("operation has timed out"))
        }
        , a)
          , u = (...d) => {
            this.io.clearTimeoutFn(l),
            r.apply(this, d)
        }
        ;
        u.withError = !0,
        this.acks[e] = u
    }
    emitWithAck(e, ...r) {
        return new Promise( (i, a) => {
            const l = (u, d) => u ? a(u) : i(d);
            l.withError = !0,
            r.push(l),
            this.emit(e, ...r)
        }
        )
    }
    _addToQueue(e) {
        let r;
        typeof e[e.length - 1] == "function" && (r = e.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        e.push( (a, ...l) => (this._queue[0],
        a !== null ? i.tryCount > this._opts.retries && (this._queue.shift(),
        r && r(a)) : (this._queue.shift(),
        r && r(null, ...l)),
        i.pending = !1,
        this._drainQueue())),
        this._queue.push(i),
        this._drainQueue()
    }
    _drainQueue(e=!1) {
        if (!this.connected || this._queue.length === 0)
            return;
        const r = this._queue[0];
        r.pending && !e || (r.pending = !0,
        r.tryCount++,
        this.flags = r.flags,
        this.emit.apply(this, r.args))
    }
    packet(e) {
        e.nsp = this.nsp,
        this.io._packet(e)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(e => {
            this._sendConnectPacket(e)
        }
        ) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(e) {
        this.packet({
            type: Pe.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, e) : e
        })
    }
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e)
    }
    onclose(e, r) {
        this.connected = !1,
        delete this.id,
        this.emitReserved("disconnect", e, r),
        this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(e => {
            if (!this.sendBuffer.some(i => String(i.id) === e)) {
                const i = this.acks[e];
                delete this.acks[e],
                i.withError && i.call(this, new Error("socket has been disconnected"))
            }
        }
        )
    }
    onpacket(e) {
        if (e.nsp === this.nsp)
            switch (e.type) {
            case Pe.CONNECT:
                e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case Pe.EVENT:
            case Pe.BINARY_EVENT:
                this.onevent(e);
                break;
            case Pe.ACK:
            case Pe.BINARY_ACK:
                this.onack(e);
                break;
            case Pe.DISCONNECT:
                this.ondisconnect();
                break;
            case Pe.CONNECT_ERROR:
                this.destroy();
                const i = new Error(e.data.message);
                i.data = e.data.data,
                this.emitReserved("connect_error", i);
                break
            }
    }
    onevent(e) {
        const r = e.data || [];
        e.id != null && r.push(this.ack(e.id)),
        this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r))
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            const r = this._anyListeners.slice();
            for (const i of r)
                i.apply(this, e)
        }
        super.emit.apply(this, e),
        this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1])
    }
    ack(e) {
        const r = this;
        let i = !1;
        return function(...a) {
            i || (i = !0,
            r.packet({
                type: Pe.ACK,
                id: e,
                data: a
            }))
        }
    }
    onack(e) {
        const r = this.acks[e.id];
        typeof r == "function" && (delete this.acks[e.id],
        r.withError && e.data.unshift(null),
        r.apply(this, e.data))
    }
    onconnect(e, r) {
        this.id = e,
        this.recovered = r && this._pid === r,
        this._pid = r,
        this.connected = !0,
        this.emitBuffered(),
        this._drainQueue(!0),
        this.emitReserved("connect")
    }
    emitBuffered() {
        this.receiveBuffer.forEach(e => this.emitEvent(e)),
        this.receiveBuffer = [],
        this.sendBuffer.forEach(e => {
            this.notifyOutgoingListeners(e),
            this.packet(e)
        }
        ),
        this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(),
        this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(e => e()),
        this.subs = void 0),
        this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: Pe.DISCONNECT
        }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
    }
    close() {
        return this.disconnect()
    }
    compress(e) {
        return this.flags.compress = e,
        this
    }
    get volatile() {
        return this.flags.volatile = !0,
        this
    }
    timeout(e) {
        return this.flags.timeout = e,
        this
    }
    onAny(e) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.push(e),
        this
    }
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.unshift(e),
        this
    }
    offAny(e) {
        if (!this._anyListeners)
            return this;
        if (e) {
            const r = this._anyListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i])
                    return r.splice(i, 1),
                    this
        } else
            this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.push(e),
        this
    }
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.unshift(e),
        this
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners)
            return this;
        if (e) {
            const r = this._anyOutgoingListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i])
                    return r.splice(i, 1),
                    this
        } else
            this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const r = this._anyOutgoingListeners.slice();
            for (const i of r)
                i.apply(this, e.data)
        }
    }
}
function bi(t) {
    t = t || {},
    this.ms = t.min || 100,
    this.max = t.max || 1e4,
    this.factor = t.factor || 2,
    this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
    this.attempts = 0
}
bi.prototype.duration = function() {
    var t = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random()
          , r = Math.floor(e * this.jitter * t);
        t = (Math.floor(e * 10) & 1) == 0 ? t - r : t + r
    }
    return Math.min(t, this.max) | 0
}
;
bi.prototype.reset = function() {
    this.attempts = 0
}
;
bi.prototype.setMin = function(t) {
    this.ms = t
}
;
bi.prototype.setMax = function(t) {
    this.max = t
}
;
bi.prototype.setJitter = function(t) {
    this.jitter = t
}
;
class rf extends tt {
    constructor(e, r) {
        var i;
        super(),
        this.nsps = {},
        this.subs = [],
        e && typeof e == "object" && (r = e,
        e = void 0),
        r = r || {},
        r.path = r.path || "/socket.io",
        this.opts = r,
        tu(this, r),
        this.reconnection(r.reconnection !== !1),
        this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(r.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3),
        this.randomizationFactor((i = r.randomizationFactor) !== null && i !== void 0 ? i : .5),
        this.backoff = new bi({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }),
        this.timeout(r.timeout == null ? 2e4 : r.timeout),
        this._readyState = "closed",
        this.uri = e;
        const a = r.parser || QT;
        this.encoder = new a.Encoder,
        this.decoder = new a.Decoder,
        this._autoConnect = r.autoConnect !== !1,
        this._autoConnect && this.open()
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e,
        e || (this.skipReconnect = !0),
        this) : this._reconnection
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e,
        this)
    }
    reconnectionDelay(e) {
        var r;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e,
        (r = this.backoff) === null || r === void 0 || r.setMin(e),
        this)
    }
    randomizationFactor(e) {
        var r;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e,
        (r = this.backoff) === null || r === void 0 || r.setJitter(e),
        this)
    }
    reconnectionDelayMax(e) {
        var r;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e,
        (r = this.backoff) === null || r === void 0 || r.setMax(e),
        this)
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e,
        this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(e) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new IT(this.uri,this.opts);
        const r = this.engine
          , i = this;
        this._readyState = "opening",
        this.skipReconnect = !1;
        const a = bn(r, "open", function() {
            i.onopen(),
            e && e()
        })
          , l = d => {
            this.cleanup(),
            this._readyState = "closed",
            this.emitReserved("error", d),
            e ? e(d) : this.maybeReconnectOnOpen()
        }
          , u = bn(r, "error", l);
        if (this._timeout !== !1) {
            const d = this._timeout
              , h = this.setTimeoutFn( () => {
                a(),
                l(new Error("timeout")),
                r.close()
            }
            , d);
            this.opts.autoUnref && h.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(h)
            }
            )
        }
        return this.subs.push(a),
        this.subs.push(u),
        this
    }
    connect(e) {
        return this.open(e)
    }
    onopen() {
        this.cleanup(),
        this._readyState = "open",
        this.emitReserved("open");
        const e = this.engine;
        this.subs.push(bn(e, "ping", this.onping.bind(this)), bn(e, "data", this.ondata.bind(this)), bn(e, "error", this.onerror.bind(this)), bn(e, "close", this.onclose.bind(this)), bn(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(e) {
        try {
            this.decoder.add(e)
        } catch (r) {
            this.onclose("parse error", r)
        }
    }
    ondecoded(e) {
        eu( () => {
            this.emitReserved("packet", e)
        }
        , this.setTimeoutFn)
    }
    onerror(e) {
        this.emitReserved("error", e)
    }
    socket(e, r) {
        let i = this.nsps[e];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new Ix(this,e,r),
        this.nsps[e] = i),
        i
    }
    _destroy(e) {
        const r = Object.keys(this.nsps);
        for (const i of r)
            if (this.nsps[i].active)
                return;
        this._close()
    }
    _packet(e) {
        const r = this.encoder.encode(e);
        for (let i = 0; i < r.length; i++)
            this.engine.write(r[i], e.options)
    }
    cleanup() {
        this.subs.forEach(e => e()),
        this.subs.length = 0,
        this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0,
        this._reconnecting = !1,
        this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(e, r) {
        var i;
        this.cleanup(),
        (i = this.engine) === null || i === void 0 || i.close(),
        this.backoff.reset(),
        this._readyState = "closed",
        this.emitReserved("close", e, r),
        this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            this._reconnecting = !1;
        else {
            const r = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn( () => {
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                !e.skipReconnect && e.open(a => {
                    a ? (e._reconnecting = !1,
                    e.reconnect(),
                    this.emitReserved("reconnect_error", a)) : e.onreconnect()
                }
                ))
            }
            , r);
            this.opts.autoUnref && i.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(i)
            }
            )
        }
    }
    onreconnect() {
        const e = this.backoff.attempts;
        this._reconnecting = !1,
        this.backoff.reset(),
        this.emitReserved("reconnect", e)
    }
}
const ho = {};
function Pl(t, e) {
    typeof t == "object" && (e = t,
    t = void 0),
    e = e || {};
    const r = FT(t, e.path || "/socket.io")
      , i = r.source
      , a = r.id
      , l = r.path
      , u = ho[a] && l in ho[a].nsps
      , d = e.forceNew || e["force new connection"] || e.multiplex === !1 || u;
    let h;
    return d ? h = new rf(i,e) : (ho[a] || (ho[a] = new rf(i,e)),
    h = ho[a]),
    r.query && !e.query && (e.query = r.queryKey),
    h.socket(r.path, e)
}
Object.assign(Pl, {
    Manager: rf,
    Socket: Ix,
    io: Pl,
    connect: Pl
});
const YT = 250;
function O0(t, e) {
    var r;
    const i = (r = t.token) !== null && r !== void 0 ? r : mi()
      , a = {
        app_id: t.appId,
        token: i
    };
    i || (a.anonymous_id = If());
    const l = Pl(t.serverUrl, {
        path: t.mountPath,
        transports: t.transports,
        query: a
    });
    return l.on("connect", async () => {
        var u;
        return console.log("connect", l.id),
        (u = e.connect) === null || u === void 0 ? void 0 : u.call(e)
    }
    ),
    l.on("update_model", async u => {
        var d;
        return (d = e.update_model) === null || d === void 0 ? void 0 : d.call(e, u)
    }
    ),
    l.on("error", async u => {
        var d;
        return (d = e.error) === null || d === void 0 ? void 0 : d.call(e, u)
    }
    ),
    l.on("connect_error", async u => {
        var d;
        return console.error("connect_error", u),
        (d = e.error) === null || d === void 0 ? void 0 : d.call(e, u)
    }
    ),
    l
}
function XT({config: t}) {
    let e = {
        ...t
    };
    const r = {}
      , i = {}
      , a = {
        connect: async () => {
            const b = [];
            Object.keys(r).forEach(P => {
                const A = w(P);
                A.length !== 0 && (m(P),
                A.forEach( ({connect: M}) => {
                    const F = async () => M == null ? void 0 : M();
                    b.push(F())
                }
                ))
            }
            ),
            await Promise.all(b)
        }
        ,
        update_model: async b => {
            const A = w(b.room).map(M => {
                var F;
                return (F = M.update_model) === null || F === void 0 ? void 0 : F.call(M, b)
            }
            );
            await Promise.all(A)
        }
        ,
        error: async b => {
            console.error("error", b);
            const P = Object.values(r).flat().map(A => {
                var M;
                return (M = A.error) === null || M === void 0 ? void 0 : M.call(A, b)
            }
            );
            await Promise.all(P)
        }
    };
    let l = O0(t, a);
    function u() {
        d()
    }
    function d() {
        T(),
        l && l.disconnect()
    }
    function h(b) {
        u(),
        e = {
            ...e,
            ...b
        },
        l = O0(e, a)
    }
    function m(b) {
        l.emit("join", b)
    }
    function g(b) {
        l.emit("leave", b)
    }
    async function y(b, P) {
        var A;
        const M = JSON.stringify(P);
        return (A = a.update_model) === null || A === void 0 ? void 0 : A.call(a, {
            room: b,
            data: M
        })
    }
    function w(b) {
        var P;
        return (P = r[b]) !== null && P !== void 0 ? P : []
    }
    function k(b) {
        const P = i[b];
        P && (clearTimeout(P),
        delete i[b])
    }
    function T() {
        Object.keys(i).forEach(b => {
            var P, A;
            clearTimeout(i[b]),
            delete i[b],
            ((A = (P = r[b]) === null || P === void 0 ? void 0 : P.length) !== null && A !== void 0 ? A : 0) === 0 && delete r[b]
        }
        )
    }
    function E(b) {
        k(b),
        i[b] = setTimeout( () => {
            var P, A;
            delete i[b],
            !(((A = (P = r[b]) === null || P === void 0 ? void 0 : P.length) !== null && A !== void 0 ? A : 0) > 0) && (g(b),
            delete r[b])
        }
        , YT)
    }
    return {
        socket: l,
        subscribeToRoom: (b, P) => {
            r[b] ? k(b) : (m(b),
            r[b] = []),
            r[b].push(P);
            let A = !1;
            return () => {
                var M, F;
                A || (A = !0,
                r[b] = (F = (M = r[b]) === null || M === void 0 ? void 0 : M.filter($ => $ !== P)) !== null && F !== void 0 ? F : [],
                r[b].length === 0 && E(b))
            }
        }
        ,
        updateConfig: h,
        updateModel: y,
        disconnect: d
    }
}
function JT(t) {
    var e, r;
    const {serverUrl: i="https://base44.app", appId: a, token: l, serviceToken: u, requiresAuth: d=!1, appBaseUrl: h, options: m, functionsVersion: g, headers: y} = t
      , w = typeof h == "string" ? h : ""
      , k = {
        serverUrl: i,
        mountPath: "/ws-user-apps/socket.io/",
        transports: ["websocket"],
        appId: a,
        token: l
    };
    let T = null;
    const E = () => (T || (T = XT({
        config: k
    })),
    T)
      , S = {
        ...y,
        "X-App-Id": String(a)
    }
      , b = g ? {
        ...S,
        "Base44-Functions-Version": g
    } : S
      , P = go({
        baseURL: `${i}/api`,
        headers: S,
        token: l,
        onError: m == null ? void 0 : m.onError
    })
      , A = go({
        baseURL: `${i}/api`,
        headers: b,
        token: l,
        interceptResponses: !1,
        onError: m == null ? void 0 : m.onError
    })
      , M = {
        ...S,
        ...l ? {
            "on-behalf-of": `Bearer ${l}`
        } : {}
    }
      , F = go({
        baseURL: `${i}/api`,
        headers: M,
        token: u,
        onError: m == null ? void 0 : m.onError
    })
      , $ = go({
        baseURL: `${i}/api`,
        headers: b,
        token: u,
        interceptResponses: !1
    })
      , J = JC(P, A, a, {
        appBaseUrl: w
    });
    if (typeof window < "u") {
        const le = l || mi();
        le && J.setToken(le)
    }
    const V = {
        entities: b0({
            axios: P,
            appId: a,
            getSocket: E
        }),
        integrations: S0(P, a),
        connectors: tT(P, a),
        auth: J,
        functions: k0(A, a, {
            getAuthHeaders: () => {
                const le = {}
                  , Ae = l || mi();
                return Ae && (le.Authorization = `Bearer ${Ae}`),
                le
            }
            ,
            baseURL: (e = A.defaults) === null || e === void 0 ? void 0 : e.baseURL
        }),
        agents: E0({
            axios: P,
            getSocket: E,
            appId: a,
            serverUrl: i,
            token: l
        }),
        aiGateway: C0({
            serverUrl: i,
            token: l,
            appId: a
        }),
        appLogs: T0(P, a),
        users: rT(P, a),
        analytics: FC({
            axiosClient: P,
            serverUrl: i,
            appId: a,
            userAuthModule: J
        }),
        cleanup: () => {
            V.analytics.cleanup(),
            T && T.disconnect()
        }
    }
      , ee = {
        entities: b0({
            axios: F,
            appId: a,
            getSocket: E
        }),
        integrations: S0(F, a),
        sso: ZC(F, a),
        connectors: eT(F, a),
        functions: k0($, a, {
            getAuthHeaders: () => {
                const le = {};
                return u && (le.Authorization = `Bearer ${u}`),
                le
            }
            ,
            baseURL: (r = $.defaults) === null || r === void 0 ? void 0 : r.baseURL
        }),
        agents: E0({
            axios: F,
            getSocket: E,
            appId: a,
            serverUrl: i,
            token: l
        }),
        aiGateway: C0({
            serverUrl: i,
            token: u,
            appId: a
        }),
        appLogs: T0(F, a),
        cleanup: () => {
            T && T.disconnect()
        }
    };
    return d && typeof window < "u" && setTimeout(async () => {
        try {
            await V.auth.isAuthenticated() || V.auth.redirectToLogin(window.location.href)
        } catch (le) {
            console.error("Authentication check failed:", le),
            V.auth.redirectToLogin(window.location.href)
        }
    }
    , 0),
    {
        ...V,
        setToken(le) {
            V.auth.setToken(le),
            T && T.updateConfig({
                token: le
            }),
            k.token = le
        },
        getConfig() {
            return {
                serverUrl: i,
                appId: a,
                requiresAuth: d
            }
        },
        get asServiceRole() {
            if (!u)
                throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return ee
        }
    }
}
const Fx = typeof window > "u"
  , ZT = Fx ? {
    localStorage: new Map
} : window
  , Eo = ZT.localStorage
  , e_ = t => t.replace(/([A-Z])/g, "_$1").toLowerCase()
  , Ks = (t, {defaultValue: e=void 0, removeFromUrl: r=!1}={}) => {
    if (Fx)
        return e;
    const i = `base44_${e_(t)}`
      , a = new URLSearchParams(window.location.search)
      , l = a.get(t);
    if (r) {
        a.delete(t);
        const d = `${window.location.pathname}${a.toString() ? `?${a.toString()}` : ""}${window.location.hash}`;
        window.history.replaceState({}, document.title, d)
    }
    if (l)
        return Eo.setItem(i, l),
        l;
    if (e)
        return Eo.setItem(i, e),
        e;
    const u = Eo.getItem(i);
    return u || null
}
  , t_ = () => (Ks("clear_access_token") === "true" && (Eo.removeItem("base44_access_token"),
Eo.removeItem("token")),
{
    appId: Ks("app_id", {
        defaultValue: "69d556893fee4bb038ae6d4b"
    }),
    token: Ks("access_token", {
        removeFromUrl: !0
    }),
    fromUrl: Ks("from_url", {
        defaultValue: window.location.href
    }),
    functionsVersion: Ks("functions_version", {
        defaultValue: "prod"
    }),
    appBaseUrl: Ks("app_base_url", {
        defaultValue: void 0
    })
})
  , vo = {
    ...t_()
}
  , {appId: n_, token: r_, functionsVersion: s_, appBaseUrl: i_} = vo
  , xo = JT({
    appId: n_,
    token: r_,
    functionsVersion: s_,
    serverUrl: "",
    requiresAuth: !1,
    appBaseUrl: i_
});
function o_({}) {
    var a;
    const e = Xv().pathname.substring(1)
      , {data: r, isFetched: i} = Fk({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                return {
                    user: await xo.auth.me(),
                    isAuthenticated: !0
                }
            } catch {
                return {
                    user: null,
                    isAuthenticated: !1
                }
            }
        }
    });
    return v.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: v.jsx("div", {
            className: "max-w-md w-full",
            children: v.jsxs("div", {
                className: "text-center space-y-6",
                children: [v.jsxs("div", {
                    className: "space-y-2",
                    children: [v.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), v.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), v.jsxs("div", {
                    className: "space-y-3",
                    children: [v.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), v.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", v.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', e, '"']
                        }), " could not be found in this application."]
                    })]
                }), i && r.isAuthenticated && ((a = r.user) == null ? void 0 : a.role) === "admin" && v.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: v.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [v.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: v.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), v.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [v.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), v.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), v.jsx("div", {
                    className: "pt-6",
                    children: v.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [v.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: v.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const Vx = L.createContext()
  , a_ = ({children: t}) => {
    const [e,r] = L.useState(null)
      , [i,a] = L.useState(!1)
      , [l,u] = L.useState(!0)
      , [d,h] = L.useState(!0)
      , [m,g] = L.useState(null)
      , [y,w] = L.useState(null);
    L.useEffect( () => {
        k()
    }
    , []);
    const k = async () => {
        var b, P;
        try {
            h(!0),
            g(null);
            const A = go({
                baseURL: "/api/apps/public",
                headers: {
                    "X-App-Id": vo.appId
                },
                token: vo.token,
                interceptResponses: !0
            });
            try {
                const M = await A.get(`/prod/public-settings/by-id/${vo.appId}`);
                w(M),
                vo.token ? await T() : (u(!1),
                a(!1)),
                h(!1)
            } catch (M) {
                if (console.error("App state check failed:", M),
                M.status === 403 && ((P = (b = M.data) == null ? void 0 : b.extra_data) != null && P.reason)) {
                    const F = M.data.extra_data.reason;
                    g(F === "auth_required" ? {
                        type: "auth_required",
                        message: "Authentication required"
                    } : F === "user_not_registered" ? {
                        type: "user_not_registered",
                        message: "User not registered for this app"
                    } : {
                        type: F,
                        message: M.message
                    })
                } else
                    g({
                        type: "unknown",
                        message: M.message || "Failed to load app"
                    });
                h(!1),
                u(!1)
            }
        } catch (A) {
            console.error("Unexpected error:", A),
            g({
                type: "unknown",
                message: A.message || "An unexpected error occurred"
            }),
            h(!1),
            u(!1)
        }
    }
      , T = async () => {
        try {
            u(!0);
            const b = await xo.auth.me();
            r(b),
            a(!0),
            u(!1)
        } catch (b) {
            console.error("User auth check failed:", b),
            u(!1),
            a(!1),
            (b.status === 401 || b.status === 403) && g({
                type: "auth_required",
                message: "Authentication required"
            })
        }
    }
      , E = (b=!0) => {
        r(null),
        a(!1),
        b ? xo.auth.logout(window.location.href) : xo.auth.logout()
    }
      , S = () => {
        xo.auth.redirectToLogin(window.location.href)
    }
    ;
    return v.jsx(Vx.Provider, {
        value: {
            user: e,
            isAuthenticated: i,
            isLoadingAuth: l,
            isLoadingPublicSettings: d,
            authError: m,
            appPublicSettings: y,
            logout: E,
            navigateToLogin: S,
            checkAppState: k
        },
        children: t
    })
}
  , l_ = () => {
    const t = L.useContext(Vx);
    if (!t)
        throw new Error("useAuth must be used within an AuthProvider");
    return t
}
  , u_ = () => v.jsx("div", {
    className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
    children: v.jsx("div", {
        className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
        children: v.jsxs("div", {
            className: "text-center",
            children: [v.jsx("div", {
                className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                children: v.jsx("svg", {
                    className: "w-8 h-8 text-orange-600",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: v.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    })
                })
            }), v.jsx("h1", {
                className: "text-3xl font-bold text-slate-900 mb-4",
                children: "Access Restricted"
            }), v.jsx("p", {
                className: "text-slate-600 mb-8",
                children: "You are not registered to use this application. Please contact the app administrator to request access."
            }), v.jsxs("div", {
                className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                children: [v.jsx("p", {
                    children: "If you believe this is an error, you can:"
                }), v.jsxs("ul", {
                    className: "list-disc list-inside mt-2 space-y-1",
                    children: [v.jsx("li", {
                        children: "Verify you are logged in with the correct account"
                    }), v.jsx("li", {
                        children: "Contact the app administrator for access"
                    }), v.jsx("li", {
                        children: "Try logging out and back in again"
                    })]
                })]
            })]
        })
    })
});
function c_() {
    return v.jsxs("div", {
        className: "fixed inset-0 -z-10 overflow-hidden",
        children: [v.jsx("div", {
            className: "absolute inset-0",
            style: {
                background: "linear-gradient(160deg, #0b0b1e 0%, #0a0c1c 55%, #110b1c 100%)"
            }
        }), v.jsx("div", {
            className: "absolute -top-[15%] -left-[5%] w-[50vw] h-[50vw] rounded-full",
            style: {
                background: "radial-gradient(circle, rgba(110,50,220,0.28) 0%, transparent 58%)",
                filter: "blur(70px)"
            }
        }), v.jsx("div", {
            className: "absolute top-[10%] right-[0%] w-[40vw] h-[40vw] rounded-full",
            style: {
                background: "radial-gradient(circle, rgba(40,90,230,0.2) 0%, transparent 58%)",
                filter: "blur(75px)"
            }
        }), v.jsx("div", {
            className: "absolute bottom-[-5%] left-[8%] w-[35vw] h-[35vw] rounded-full",
            style: {
                background: "radial-gradient(circle, rgba(190,80,25,0.16) 0%, transparent 58%)",
                filter: "blur(75px)"
            }
        }), v.jsx("div", {
            className: "absolute top-[30%] left-[20%] w-[60vw] h-[40vw] rounded-full",
            style: {
                background: "radial-gradient(ellipse, rgba(80,50,180,0.07) 0%, transparent 65%)",
                filter: "blur(90px)"
            }
        })]
    })
}
const $f = L.createContext({});
function Hf(t) {
    const e = L.useRef(null);
    return e.current === null && (e.current = t()),
    e.current
}
const nu = L.createContext(null)
  , qf = L.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
});
class d_ extends L.Component {
    getSnapshotBeforeUpdate(e) {
        const r = this.props.childRef.current;
        if (r && e.isPresent && !this.props.isPresent) {
            const i = this.props.sizeRef.current;
            i.height = r.offsetHeight || 0,
            i.width = r.offsetWidth || 0,
            i.top = r.offsetTop,
            i.left = r.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function f_({children: t, isPresent: e}) {
    const r = L.useId()
      , i = L.useRef(null)
      , a = L.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: l} = L.useContext(qf);
    return L.useInsertionEffect( () => {
        const {width: u, height: d, top: h, left: m} = a.current;
        if (e || !i.current || !u || !d)
            return;
        i.current.dataset.motionPopId = r;
        const g = document.createElement("style");
        return l && (g.nonce = l),
        document.head.appendChild(g),
        g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${d}px !important;
            top: ${h}px !important;
            left: ${m}px !important;
          }
        `),
        () => {
            document.head.removeChild(g)
        }
    }
    , [e]),
    v.jsx(d_, {
        isPresent: e,
        childRef: i,
        sizeRef: a,
        children: L.cloneElement(t, {
            ref: i
        })
    })
}
const h_ = ({children: t, initial: e, isPresent: r, onExitComplete: i, custom: a, presenceAffectsLayout: l, mode: u}) => {
    const d = Hf(p_)
      , h = L.useId()
      , m = L.useCallback(y => {
        d.set(y, !0);
        for (const w of d.values())
            if (!w)
                return;
        i && i()
    }
    , [d, i])
      , g = L.useMemo( () => ({
        id: h,
        initial: e,
        isPresent: r,
        custom: a,
        onExitComplete: m,
        register: y => (d.set(y, !1),
        () => d.delete(y))
    }), l ? [Math.random(), m] : [r, m]);
    return L.useMemo( () => {
        d.forEach( (y, w) => d.set(w, !1))
    }
    , [r]),
    L.useEffect( () => {
        !r && !d.size && i && i()
    }
    , [r]),
    u === "popLayout" && (t = v.jsx(f_, {
        isPresent: r,
        children: t
    })),
    v.jsx(nu.Provider, {
        value: g,
        children: t
    })
}
;
function p_() {
    return new Map
}
function Bx(t=!0) {
    const e = L.useContext(nu);
    if (e === null)
        return [!0, null];
    const {isPresent: r, onExitComplete: i, register: a} = e
      , l = L.useId();
    L.useEffect( () => {
        t && a(l)
    }
    , [t]);
    const u = L.useCallback( () => t && i && i(l), [l, i, t]);
    return !r && i ? [!1, u] : [!0]
}
const gl = t => t.key || "";
function j0(t) {
    const e = [];
    return L.Children.forEach(t, r => {
        L.isValidElement(r) && e.push(r)
    }
    ),
    e
}
const Wf = typeof window < "u"
  , Ux = Wf ? L.useLayoutEffect : L.useEffect
  , Gn = ({children: t, custom: e, initial: r=!0, onExitComplete: i, presenceAffectsLayout: a=!0, mode: l="sync", propagate: u=!1}) => {
    const [d,h] = Bx(u)
      , m = L.useMemo( () => j0(t), [t])
      , g = u && !d ? [] : m.map(gl)
      , y = L.useRef(!0)
      , w = L.useRef(m)
      , k = Hf( () => new Map)
      , [T,E] = L.useState(m)
      , [S,b] = L.useState(m);
    Ux( () => {
        y.current = !1,
        w.current = m;
        for (let M = 0; M < S.length; M++) {
            const F = gl(S[M]);
            g.includes(F) ? k.delete(F) : k.get(F) !== !0 && k.set(F, !1)
        }
    }
    , [S, g.length, g.join("-")]);
    const P = [];
    if (m !== T) {
        let M = [...m];
        for (let F = 0; F < S.length; F++) {
            const $ = S[F]
              , J = gl($);
            g.includes(J) || (M.splice(F, 0, $),
            P.push($))
        }
        l === "wait" && P.length && (M = P),
        b(j0(M)),
        E(m);
        return
    }
    const {forceRender: A} = L.useContext($f);
    return v.jsx(v.Fragment, {
        children: S.map(M => {
            const F = gl(M)
              , $ = u && !d ? !1 : m === S || g.includes(F)
              , J = () => {
                if (k.has(F))
                    k.set(F, !0);
                else
                    return;
                let V = !0;
                k.forEach(ee => {
                    ee || (V = !1)
                }
                ),
                V && (A == null || A(),
                b(w.current),
                u && (h == null || h()),
                i && i())
            }
            ;
            return v.jsx(h_, {
                isPresent: $,
                initial: !y.current || r ? void 0 : !1,
                custom: $ ? void 0 : e,
                presenceAffectsLayout: a,
                mode: l,
                onExitComplete: $ ? void 0 : J,
                children: M
            }, F)
        }
        )
    })
}
  , qt = t => t;
let zx = qt;
function Kf(t) {
    let e;
    return () => (e === void 0 && (e = t()),
    e)
}
const gi = (t, e, r) => {
    const i = e - t;
    return i === 0 ? 1 : (r - t) / i
}
  , Yn = t => t * 1e3
  , Xn = t => t / 1e3
  , m_ = {
    useManualTiming: !1
};
function g_(t) {
    let e = new Set
      , r = new Set
      , i = !1
      , a = !1;
    const l = new WeakSet;
    let u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function d(m) {
        l.has(m) && (h.schedule(m),
        t()),
        m(u)
    }
    const h = {
        schedule: (m, g=!1, y=!1) => {
            const k = y && i ? e : r;
            return g && l.add(m),
            k.has(m) || k.add(m),
            m
        }
        ,
        cancel: m => {
            r.delete(m),
            l.delete(m)
        }
        ,
        process: m => {
            if (u = m,
            i) {
                a = !0;
                return
            }
            i = !0,
            [e,r] = [r, e],
            e.forEach(d),
            e.clear(),
            i = !1,
            a && (a = !1,
            h.process(m))
        }
    };
    return h
}
const yl = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , y_ = 40;
function $x(t, e) {
    let r = !1
      , i = !0;
    const a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = () => r = !0
      , u = yl.reduce( (b, P) => (b[P] = g_(l),
    b), {})
      , {read: d, resolveKeyframes: h, update: m, preRender: g, render: y, postRender: w} = u
      , k = () => {
        const b = performance.now();
        r = !1,
        a.delta = i ? 1e3 / 60 : Math.max(Math.min(b - a.timestamp, y_), 1),
        a.timestamp = b,
        a.isProcessing = !0,
        d.process(a),
        h.process(a),
        m.process(a),
        g.process(a),
        y.process(a),
        w.process(a),
        a.isProcessing = !1,
        r && e && (i = !1,
        t(k))
    }
      , T = () => {
        r = !0,
        i = !0,
        a.isProcessing || t(k)
    }
    ;
    return {
        schedule: yl.reduce( (b, P) => {
            const A = u[P];
            return b[P] = (M, F=!1, $=!1) => (r || T(),
            A.schedule(M, F, $)),
            b
        }
        , {}),
        cancel: b => {
            for (let P = 0; P < yl.length; P++)
                u[yl[P]].cancel(b)
        }
        ,
        state: a,
        steps: u
    }
}
const {schedule: Ue, cancel: Lr, state: mt, steps: gd} = $x(typeof requestAnimationFrame < "u" ? requestAnimationFrame : qt, !0)
  , Hx = L.createContext({
    strict: !1
})
  , M0 = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , yi = {};
for (const t in M0)
    yi[t] = {
        isEnabled: e => M0[t].some(r => !!e[r])
    };
function v_(t) {
    for (const e in t)
        yi[e] = {
            ...yi[e],
            ...t[e]
        }
}
const x_ = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Bl(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || x_.has(t)
}
let qx = t => !Bl(t);
function w_(t) {
    t && (qx = e => e.startsWith("on") ? !Bl(e) : t(e))
}
try {
    w_(require("@emotion/is-prop-valid").default)
} catch {}
function b_(t, e, r) {
    const i = {};
    for (const a in t)
        a === "values" && typeof t.values == "object" || (qx(a) || r === !0 && Bl(a) || !e && !Bl(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
    return i
}
function S_(t) {
    if (typeof Proxy > "u")
        return t;
    const e = new Map
      , r = (...i) => t(...i);
    return new Proxy(r,{
        get: (i, a) => a === "create" ? t : (e.has(a) || e.set(a, t(a)),
        e.get(a))
    })
}
const ru = L.createContext({});
function jo(t) {
    return typeof t == "string" || Array.isArray(t)
}
function su(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Qf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Gf = ["initial", ...Qf];
function iu(t) {
    return su(t.animate) || Gf.some(e => jo(t[e]))
}
function Wx(t) {
    return !!(iu(t) || t.variants)
}
function k_(t, e) {
    if (iu(t)) {
        const {initial: r, animate: i} = t;
        return {
            initial: r === !1 || jo(r) ? r : void 0,
            animate: jo(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function E_(t) {
    const {initial: e, animate: r} = k_(t, L.useContext(ru));
    return L.useMemo( () => ({
        initial: e,
        animate: r
    }), [L0(e), L0(r)])
}
function L0(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const C_ = Symbol.for("motionComponentSymbol");
function Qs(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function T_(t, e, r) {
    return L.useCallback(i => {
        i && t.onMount && t.onMount(i),
        e && (i ? e.mount(i) : e.unmount()),
        r && (typeof r == "function" ? r(i) : Qs(r) && (r.current = i))
    }
    , [e])
}
const Yf = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , __ = "framerAppearId"
  , Kx = "data-" + Yf(__)
  , {schedule: Xf} = $x(queueMicrotask, !1)
  , Qx = L.createContext({});
function P_(t, e, r, i, a) {
    var l, u;
    const {visualElement: d} = L.useContext(ru)
      , h = L.useContext(Hx)
      , m = L.useContext(nu)
      , g = L.useContext(qf).reducedMotion
      , y = L.useRef(null);
    i = i || h.renderer,
    !y.current && i && (y.current = i(t, {
        visualState: e,
        parent: d,
        props: r,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const w = y.current
      , k = L.useContext(Qx);
    w && !w.projection && a && (w.type === "html" || w.type === "svg") && R_(y.current, r, a, k);
    const T = L.useRef(!1);
    L.useInsertionEffect( () => {
        w && T.current && w.update(r, m)
    }
    );
    const E = r[Kx]
      , S = L.useRef(!!E && !(!((l = window.MotionHandoffIsComplete) === null || l === void 0) && l.call(window, E)) && ((u = window.MotionHasOptimisedAnimation) === null || u === void 0 ? void 0 : u.call(window, E)));
    return Ux( () => {
        w && (T.current = !0,
        window.MotionIsMounted = !0,
        w.updateFeatures(),
        Xf.render(w.render),
        S.current && w.animationState && w.animationState.animateChanges())
    }
    ),
    L.useEffect( () => {
        w && (!S.current && w.animationState && w.animationState.animateChanges(),
        S.current && (queueMicrotask( () => {
            var b;
            (b = window.MotionHandoffMarkAsComplete) === null || b === void 0 || b.call(window, E)
        }
        ),
        S.current = !1))
    }
    ),
    w
}
function R_(t, e, r, i) {
    const {layoutId: a, layout: l, drag: u, dragConstraints: d, layoutScroll: h, layoutRoot: m} = e;
    t.projection = new r(t.latestValues,e["data-framer-portal-id"] ? void 0 : Gx(t.parent)),
    t.projection.setOptions({
        layoutId: a,
        layout: l,
        alwaysMeasureLayout: !!u || d && Qs(d),
        visualElement: t,
        animationType: typeof l == "string" ? l : "both",
        initialPromotionConfig: i,
        layoutScroll: h,
        layoutRoot: m
    })
}
function Gx(t) {
    if (t)
        return t.options.allowProjection !== !1 ? t.projection : Gx(t.parent)
}
function A_({preloadedFeatures: t, createVisualElement: e, useRender: r, useVisualState: i, Component: a}) {
    var l, u;
    t && v_(t);
    function d(m, g) {
        let y;
        const w = {
            ...L.useContext(qf),
            ...m,
            layoutId: N_(m)
        }
          , {isStatic: k} = w
          , T = E_(m)
          , E = i(m, k);
        if (!k && Wf) {
            O_();
            const S = j_(w);
            y = S.MeasureLayout,
            T.visualElement = P_(a, E, w, e, S.ProjectionNode)
        }
        return v.jsxs(ru.Provider, {
            value: T,
            children: [y && T.visualElement ? v.jsx(y, {
                visualElement: T.visualElement,
                ...w
            }) : null, r(a, m, T_(E, T.visualElement, g), E, k, T.visualElement)]
        })
    }
    d.displayName = `motion.${typeof a == "string" ? a : `create(${(u = (l = a.displayName) !== null && l !== void 0 ? l : a.name) !== null && u !== void 0 ? u : ""})`}`;
    const h = L.forwardRef(d);
    return h[C_] = a,
    h
}
function N_({layoutId: t}) {
    const e = L.useContext($f).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function O_(t, e) {
    L.useContext(Hx).strict
}
function j_(t) {
    const {drag: e, layout: r} = yi;
    if (!e && !r)
        return {};
    const i = {
        ...e,
        ...r
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || r != null && r.isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const M_ = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Jf(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(M_.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function D0(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach( (r, i) => {
        e[0][i] = r.get(),
        e[1][i] = r.getVelocity()
    }
    ),
    e
}
function Zf(t, e, r, i) {
    if (typeof e == "function") {
        const [a,l] = D0(i);
        e = e(r !== void 0 ? r : t.custom, a, l)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function") {
        const [a,l] = D0(i);
        e = e(r !== void 0 ? r : t.custom, a, l)
    }
    return e
}
const sf = t => Array.isArray(t)
  , L_ = t => !!(t && typeof t == "object" && t.mix && t.toValue)
  , D_ = t => sf(t) ? t[t.length - 1] || 0 : t
  , Tt = t => !!(t && t.getVelocity);
function Rl(t) {
    const e = Tt(t) ? t.get() : t;
    return L_(e) ? e.toValue() : e
}
function I_({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: r}, i, a, l) {
    const u = {
        latestValues: F_(i, a, l, t),
        renderState: e()
    };
    return r && (u.onMount = d => r({
        props: i,
        current: d,
        ...u
    }),
    u.onUpdate = d => r(d)),
    u
}
const Yx = t => (e, r) => {
    const i = L.useContext(ru)
      , a = L.useContext(nu)
      , l = () => I_(t, e, i, a);
    return r ? l() : Hf(l)
}
;
function F_(t, e, r, i) {
    const a = {}
      , l = i(t, {});
    for (const w in l)
        a[w] = Rl(l[w]);
    let {initial: u, animate: d} = t;
    const h = iu(t)
      , m = Wx(t);
    e && m && !h && t.inherit !== !1 && (u === void 0 && (u = e.initial),
    d === void 0 && (d = e.animate));
    let g = r ? r.initial === !1 : !1;
    g = g || u === !1;
    const y = g ? d : u;
    if (y && typeof y != "boolean" && !su(y)) {
        const w = Array.isArray(y) ? y : [y];
        for (let k = 0; k < w.length; k++) {
            const T = Zf(t, w[k]);
            if (T) {
                const {transitionEnd: E, transition: S, ...b} = T;
                for (const P in b) {
                    let A = b[P];
                    if (Array.isArray(A)) {
                        const M = g ? A.length - 1 : 0;
                        A = A[M]
                    }
                    A !== null && (a[P] = A)
                }
                for (const P in E)
                    a[P] = E[P]
            }
        }
    }
    return a
}
const Si = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , bs = new Set(Si)
  , Xx = t => e => typeof e == "string" && e.startsWith(t)
  , Jx = Xx("--")
  , V_ = Xx("var(--")
  , eh = t => V_(t) ? B_.test(t.split("/*")[0].trim()) : !1
  , B_ = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Zx = (t, e) => e && typeof t == "number" ? e.transform(t) : t
  , Jn = (t, e, r) => r > e ? e : r < t ? t : r
  , ki = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , Mo = {
    ...ki,
    transform: t => Jn(0, 1, t)
}
  , vl = {
    ...ki,
    default: 1
}
  , Yo = t => ({
    test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
})
  , kr = Yo("deg")
  , On = Yo("%")
  , ge = Yo("px")
  , U_ = Yo("vh")
  , z_ = Yo("vw")
  , I0 = {
    ...On,
    parse: t => On.parse(t) / 100,
    transform: t => On.transform(t * 100)
}
  , $_ = {
    borderWidth: ge,
    borderTopWidth: ge,
    borderRightWidth: ge,
    borderBottomWidth: ge,
    borderLeftWidth: ge,
    borderRadius: ge,
    radius: ge,
    borderTopLeftRadius: ge,
    borderTopRightRadius: ge,
    borderBottomRightRadius: ge,
    borderBottomLeftRadius: ge,
    width: ge,
    maxWidth: ge,
    height: ge,
    maxHeight: ge,
    top: ge,
    right: ge,
    bottom: ge,
    left: ge,
    padding: ge,
    paddingTop: ge,
    paddingRight: ge,
    paddingBottom: ge,
    paddingLeft: ge,
    margin: ge,
    marginTop: ge,
    marginRight: ge,
    marginBottom: ge,
    marginLeft: ge,
    backgroundPositionX: ge,
    backgroundPositionY: ge
}
  , H_ = {
    rotate: kr,
    rotateX: kr,
    rotateY: kr,
    rotateZ: kr,
    scale: vl,
    scaleX: vl,
    scaleY: vl,
    scaleZ: vl,
    skew: kr,
    skewX: kr,
    skewY: kr,
    distance: ge,
    translateX: ge,
    translateY: ge,
    translateZ: ge,
    x: ge,
    y: ge,
    z: ge,
    perspective: ge,
    transformPerspective: ge,
    opacity: Mo,
    originX: I0,
    originY: I0,
    originZ: ge
}
  , F0 = {
    ...ki,
    transform: Math.round
}
  , th = {
    ...$_,
    ...H_,
    zIndex: F0,
    size: ge,
    fillOpacity: Mo,
    strokeOpacity: Mo,
    numOctaves: F0
}
  , q_ = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , W_ = Si.length;
function K_(t, e, r) {
    let i = ""
      , a = !0;
    for (let l = 0; l < W_; l++) {
        const u = Si[l]
          , d = t[u];
        if (d === void 0)
            continue;
        let h = !0;
        if (typeof d == "number" ? h = d === (u.startsWith("scale") ? 1 : 0) : h = parseFloat(d) === 0,
        !h || r) {
            const m = Zx(d, th[u]);
            if (!h) {
                a = !1;
                const g = q_[u] || u;
                i += `${g}(${m}) `
            }
            r && (e[u] = m)
        }
    }
    return i = i.trim(),
    r ? i = r(e, a ? "" : i) : a && (i = "none"),
    i
}
function nh(t, e, r) {
    const {style: i, vars: a, transformOrigin: l} = t;
    let u = !1
      , d = !1;
    for (const h in e) {
        const m = e[h];
        if (bs.has(h)) {
            u = !0;
            continue
        } else if (Jx(h)) {
            a[h] = m;
            continue
        } else {
            const g = Zx(m, th[h]);
            h.startsWith("origin") ? (d = !0,
            l[h] = g) : i[h] = g
        }
    }
    if (e.transform || (u || r ? i.transform = K_(e, t.transform, r) : i.transform && (i.transform = "none")),
    d) {
        const {originX: h="50%", originY: m="50%", originZ: g=0} = l;
        i.transformOrigin = `${h} ${m} ${g}`
    }
}
const Q_ = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , G_ = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function Y_(t, e, r=1, i=0, a=!0) {
    t.pathLength = 1;
    const l = a ? Q_ : G_;
    t[l.offset] = ge.transform(-i);
    const u = ge.transform(e)
      , d = ge.transform(r);
    t[l.array] = `${u} ${d}`
}
function V0(t, e, r) {
    return typeof t == "string" ? t : ge.transform(e + r * t)
}
function X_(t, e, r) {
    const i = V0(e, t.x, t.width)
      , a = V0(r, t.y, t.height);
    return `${i} ${a}`
}
function rh(t, {attrX: e, attrY: r, attrScale: i, originX: a, originY: l, pathLength: u, pathSpacing: d=1, pathOffset: h=0, ...m}, g, y) {
    if (nh(t, m, y),
    g) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: w, style: k, dimensions: T} = t;
    w.transform && (T && (k.transform = w.transform),
    delete w.transform),
    T && (a !== void 0 || l !== void 0 || k.transform) && (k.transformOrigin = X_(T, a !== void 0 ? a : .5, l !== void 0 ? l : .5)),
    e !== void 0 && (w.x = e),
    r !== void 0 && (w.y = r),
    i !== void 0 && (w.scale = i),
    u !== void 0 && Y_(w, u, d, h, !1)
}
const sh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , ew = () => ({
    ...sh(),
    attrs: {}
})
  , ih = t => typeof t == "string" && t.toLowerCase() === "svg";
function tw(t, {style: e, vars: r}, i, a) {
    Object.assign(t.style, e, a && a.getProjectionStyles(i));
    for (const l in r)
        t.style.setProperty(l, r[l])
}
const nw = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function rw(t, e, r, i) {
    tw(t, e, void 0, i);
    for (const a in e.attrs)
        t.setAttribute(nw.has(a) ? a : Yf(a), e.attrs[a])
}
const Ul = {};
function J_(t) {
    Object.assign(Ul, t)
}
function sw(t, {layout: e, layoutId: r}) {
    return bs.has(t) || t.startsWith("origin") || (e || r !== void 0) && (!!Ul[t] || t === "opacity")
}
function oh(t, e, r) {
    var i;
    const {style: a} = t
      , l = {};
    for (const u in a)
        (Tt(a[u]) || e.style && Tt(e.style[u]) || sw(u, t) || ((i = r == null ? void 0 : r.getValue(u)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (l[u] = a[u]);
    return l
}
function iw(t, e, r) {
    const i = oh(t, e, r);
    for (const a in t)
        if (Tt(t[a]) || Tt(e[a])) {
            const l = Si.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            i[l] = t[a]
        }
    return i
}
function Z_(t, e) {
    try {
        e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
    } catch {
        e.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const B0 = ["x", "y", "width", "height", "cx", "cy", "r"]
  , eP = {
    useVisualState: Yx({
        scrapeMotionValuesFromProps: iw,
        createRenderState: ew,
        onUpdate: ({props: t, prevProps: e, current: r, renderState: i, latestValues: a}) => {
            if (!r)
                return;
            let l = !!t.drag;
            if (!l) {
                for (const d in a)
                    if (bs.has(d)) {
                        l = !0;
                        break
                    }
            }
            if (!l)
                return;
            let u = !e;
            if (e)
                for (let d = 0; d < B0.length; d++) {
                    const h = B0[d];
                    t[h] !== e[h] && (u = !0)
                }
            u && Ue.read( () => {
                Z_(r, i),
                Ue.render( () => {
                    rh(i, a, ih(r.tagName), t.transformTemplate),
                    rw(r, i)
                }
                )
            }
            )
        }
    })
}
  , tP = {
    useVisualState: Yx({
        scrapeMotionValuesFromProps: oh,
        createRenderState: sh
    })
};
function ow(t, e, r) {
    for (const i in e)
        !Tt(e[i]) && !sw(i, r) && (t[i] = e[i])
}
function nP({transformTemplate: t}, e) {
    return L.useMemo( () => {
        const r = sh();
        return nh(r, e, t),
        Object.assign({}, r.vars, r.style)
    }
    , [e])
}
function rP(t, e) {
    const r = t.style || {}
      , i = {};
    return ow(i, r, t),
    Object.assign(i, nP(t, e)),
    i
}
function sP(t, e) {
    const r = {}
      , i = rP(t, e);
    return t.drag && t.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
function iP(t, e, r, i) {
    const a = L.useMemo( () => {
        const l = ew();
        return rh(l, e, ih(i), t.transformTemplate),
        {
            ...l.attrs,
            style: {
                ...l.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const l = {};
        ow(l, t.style, t),
        a.style = {
            ...l,
            ...a.style
        }
    }
    return a
}
function oP(t=!1) {
    return (r, i, a, {latestValues: l}, u) => {
        const h = (Jf(r) ? iP : sP)(i, l, u, r)
          , m = b_(i, typeof r == "string", t)
          , g = r !== L.Fragment ? {
            ...m,
            ...h,
            ref: a
        } : {}
          , {children: y} = i
          , w = L.useMemo( () => Tt(y) ? y.get() : y, [y]);
        return L.createElement(r, {
            ...g,
            children: w
        })
    }
}
function aP(t, e) {
    return function(i, {forwardMotionProps: a}={
        forwardMotionProps: !1
    }) {
        const u = {
            ...Jf(i) ? eP : tP,
            preloadedFeatures: t,
            useRender: oP(a),
            createVisualElement: e,
            Component: i
        };
        return A_(u)
    }
}
function aw(t, e) {
    if (!Array.isArray(e))
        return !1;
    const r = e.length;
    if (r !== t.length)
        return !1;
    for (let i = 0; i < r; i++)
        if (e[i] !== t[i])
            return !1;
    return !0
}
function ou(t, e, r) {
    const i = t.getProps();
    return Zf(i, e, r !== void 0 ? r : i.custom, t)
}
const lP = Kf( () => window.ScrollTimeline !== void 0);
class uP {
    constructor(e) {
        this.stop = () => this.runAll("stop"),
        this.animations = e.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(e => "finished"in e ? e.finished : e))
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, r) {
        for (let i = 0; i < this.animations.length; i++)
            this.animations[i][e] = r
    }
    attachTimeline(e, r) {
        const i = this.animations.map(a => {
            if (lP() && a.attachTimeline)
                return a.attachTimeline(e);
            if (typeof r == "function")
                return r(a)
        }
        );
        return () => {
            i.forEach( (a, l) => {
                a && a(),
                this.animations[l].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let r = 0; r < this.animations.length; r++)
            e = Math.max(e, this.animations[r].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(r => r[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class cP extends uP {
    then(e, r) {
        return Promise.all(this.animations).then(e).catch(r)
    }
}
function ah(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const of = 2e4;
function lw(t) {
    let e = 0;
    const r = 50;
    let i = t.next(e);
    for (; !i.done && e < of; )
        e += r,
        i = t.next(e);
    return e >= of ? 1 / 0 : e
}
function lh(t) {
    return typeof t == "function"
}
function U0(t, e) {
    t.timeline = e,
    t.onfinish = null
}
const uh = t => Array.isArray(t) && typeof t[0] == "number"
  , dP = {
    linearEasing: void 0
};
function fP(t, e) {
    const r = Kf(t);
    return () => {
        var i;
        return (i = dP[e]) !== null && i !== void 0 ? i : r()
    }
}
const zl = fP( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , uw = (t, e, r=10) => {
    let i = "";
    const a = Math.max(Math.round(e / r), 2);
    for (let l = 0; l < a; l++)
        i += t(gi(0, a - 1, l)) + ", ";
    return `linear(${i.substring(0, i.length - 2)})`
}
;
function cw(t) {
    return !!(typeof t == "function" && zl() || !t || typeof t == "string" && (t in af || zl()) || uh(t) || Array.isArray(t) && t.every(cw))
}
const wo = ([t,e,r,i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`
  , af = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: wo([0, .65, .55, 1]),
    circOut: wo([.55, 0, 1, .45]),
    backIn: wo([.31, .01, .66, -.59]),
    backOut: wo([.33, 1.53, .69, .99])
};
function dw(t, e) {
    if (t)
        return typeof t == "function" && zl() ? uw(t, e) : uh(t) ? wo(t) : Array.isArray(t) ? t.map(r => dw(r, e) || af.easeOut) : af[t]
}
const vn = {
    x: !1,
    y: !1
};
function fw() {
    return vn.x || vn.y
}
function hw(t, e, r) {
    var i;
    if (t instanceof Element)
        return [t];
    if (typeof t == "string") {
        let a = document;
        const l = (i = void 0) !== null && i !== void 0 ? i : a.querySelectorAll(t);
        return l ? Array.from(l) : []
    }
    return Array.from(t)
}
function pw(t, e) {
    const r = hw(t)
      , i = new AbortController
      , a = {
        passive: !0,
        ...e,
        signal: i.signal
    };
    return [r, a, () => i.abort()]
}
function z0(t) {
    return e => {
        e.pointerType === "touch" || fw() || t(e)
    }
}
function hP(t, e, r={}) {
    const [i,a,l] = pw(t, r)
      , u = z0(d => {
        const {target: h} = d
          , m = e(d);
        if (typeof m != "function" || !h)
            return;
        const g = z0(y => {
            m(y),
            h.removeEventListener("pointerleave", g)
        }
        );
        h.addEventListener("pointerleave", g, a)
    }
    );
    return i.forEach(d => {
        d.addEventListener("pointerenter", u, a)
    }
    ),
    l
}
const mw = (t, e) => e ? t === e ? !0 : mw(t, e.parentElement) : !1
  , ch = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1
  , pP = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function mP(t) {
    return pP.has(t.tagName) || t.tabIndex !== -1
}
const bo = new WeakSet;
function $0(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}
function yd(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const gP = (t, e) => {
    const r = t.currentTarget;
    if (!r)
        return;
    const i = $0( () => {
        if (bo.has(r))
            return;
        yd(r, "down");
        const a = $0( () => {
            yd(r, "up")
        }
        )
          , l = () => yd(r, "cancel");
        r.addEventListener("keyup", a, e),
        r.addEventListener("blur", l, e)
    }
    );
    r.addEventListener("keydown", i, e),
    r.addEventListener("blur", () => r.removeEventListener("keydown", i), e)
}
;
function H0(t) {
    return ch(t) && !fw()
}
function yP(t, e, r={}) {
    const [i,a,l] = pw(t, r)
      , u = d => {
        const h = d.currentTarget;
        if (!H0(d) || bo.has(h))
            return;
        bo.add(h);
        const m = e(d)
          , g = (k, T) => {
            window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", w),
            !(!H0(k) || !bo.has(h)) && (bo.delete(h),
            typeof m == "function" && m(k, {
                success: T
            }))
        }
          , y = k => {
            g(k, r.useGlobalTarget || mw(h, k.target))
        }
          , w = k => {
            g(k, !1)
        }
        ;
        window.addEventListener("pointerup", y, a),
        window.addEventListener("pointercancel", w, a)
    }
    ;
    return i.forEach(d => {
        !mP(d) && d.getAttribute("tabindex") === null && (d.tabIndex = 0),
        (r.useGlobalTarget ? window : d).addEventListener("pointerdown", u, a),
        d.addEventListener("focus", m => gP(m, a), a)
    }
    ),
    l
}
function vP(t) {
    return t === "x" || t === "y" ? vn[t] ? null : (vn[t] = !0,
    () => {
        vn[t] = !1
    }
    ) : vn.x || vn.y ? null : (vn.x = vn.y = !0,
    () => {
        vn.x = vn.y = !1
    }
    )
}
const gw = new Set(["width", "height", "top", "left", "right", "bottom", ...Si]);
let Al;
function xP() {
    Al = void 0
}
const jn = {
    now: () => (Al === void 0 && jn.set(mt.isProcessing || m_.useManualTiming ? mt.timestamp : performance.now()),
    Al),
    set: t => {
        Al = t,
        queueMicrotask(xP)
    }
};
function dh(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function fh(t, e) {
    const r = t.indexOf(e);
    r > -1 && t.splice(r, 1)
}
class hh {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return dh(this.subscriptions, e),
        () => fh(this.subscriptions, e)
    }
    notify(e, r, i) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1)
                this.subscriptions[0](e, r, i);
            else
                for (let l = 0; l < a; l++) {
                    const u = this.subscriptions[l];
                    u && u(e, r, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function yw(t, e) {
    return e ? t * (1e3 / e) : 0
}
const q0 = 30
  , wP = t => !isNaN(parseFloat(t));
class bP {
    constructor(e, r={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (i, a=!0) => {
            const l = jn.now();
            this.updatedAt !== l && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(i),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.owner = r.owner
    }
    setCurrent(e) {
        this.current = e,
        this.updatedAt = jn.now(),
        this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = wP(this.current))
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, r) {
        this.events[e] || (this.events[e] = new hh);
        const i = this.events[e].add(r);
        return e === "change" ? () => {
            i(),
            Ue.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : i
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, r) {
        this.passiveEffect = e,
        this.stopPassiveEffect = r
    }
    set(e, r=!0) {
        !r || !this.passiveEffect ? this.updateAndNotify(e, r) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, r, i) {
        this.set(r),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, r=!0) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        r && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = jn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > q0)
            return 0;
        const r = Math.min(this.updatedAt - this.prevUpdatedAt, q0);
        return yw(parseFloat(this.current) - parseFloat(this.prevFrameValue), r)
    }
    start(e) {
        return this.stop(),
        new Promise(r => {
            this.hasAnimated = !0,
            this.animation = e(r),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Lo(t, e) {
    return new bP(t,e)
}
function SP(t, e, r) {
    t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, Lo(r))
}
function kP(t, e) {
    const r = ou(t, e);
    let {transitionEnd: i={}, transition: a={}, ...l} = r || {};
    l = {
        ...l,
        ...i
    };
    for (const u in l) {
        const d = D_(l[u]);
        SP(t, u, d)
    }
}
function EP(t) {
    return !!(Tt(t) && t.add)
}
function lf(t, e) {
    const r = t.getValue("willChange");
    if (EP(r))
        return r.add(e)
}
function vw(t) {
    return t.props[Kx]
}
const xw = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t
  , CP = 1e-7
  , TP = 12;
function _P(t, e, r, i, a) {
    let l, u, d = 0;
    do
        u = e + (r - e) / 2,
        l = xw(u, i, a) - t,
        l > 0 ? r = u : e = u;
    while (Math.abs(l) > CP && ++d < TP);
    return u
}
function Xo(t, e, r, i) {
    if (t === e && r === i)
        return qt;
    const a = l => _P(l, 0, 1, t, r);
    return l => l === 0 || l === 1 ? l : xw(a(l), e, i)
}
const ww = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , bw = t => e => 1 - t(1 - e)
  , Sw = Xo(.33, 1.53, .69, .99)
  , ph = bw(Sw)
  , kw = ww(ph)
  , Ew = t => (t *= 2) < 1 ? .5 * ph(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , mh = t => 1 - Math.sin(Math.acos(t))
  , Cw = bw(mh)
  , Tw = ww(mh)
  , _w = t => /^0[^.\s]+$/u.test(t);
function PP(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || _w(t) : !0
}
const Co = t => Math.round(t * 1e5) / 1e5
  , gh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function RP(t) {
    return t == null
}
const AP = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , yh = (t, e) => r => !!(typeof r == "string" && AP.test(r) && r.startsWith(t) || e && !RP(r) && Object.prototype.hasOwnProperty.call(r, e))
  , Pw = (t, e, r) => i => {
    if (typeof i != "string")
        return i;
    const [a,l,u,d] = i.match(gh);
    return {
        [t]: parseFloat(a),
        [e]: parseFloat(l),
        [r]: parseFloat(u),
        alpha: d !== void 0 ? parseFloat(d) : 1
    }
}
  , NP = t => Jn(0, 255, t)
  , vd = {
    ...ki,
    transform: t => Math.round(NP(t))
}
  , ss = {
    test: yh("rgb", "red"),
    parse: Pw("red", "green", "blue"),
    transform: ({red: t, green: e, blue: r, alpha: i=1}) => "rgba(" + vd.transform(t) + ", " + vd.transform(e) + ", " + vd.transform(r) + ", " + Co(Mo.transform(i)) + ")"
};
function OP(t) {
    let e = ""
      , r = ""
      , i = ""
      , a = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    r = t.substring(3, 5),
    i = t.substring(5, 7),
    a = t.substring(7, 9)) : (e = t.substring(1, 2),
    r = t.substring(2, 3),
    i = t.substring(3, 4),
    a = t.substring(4, 5),
    e += e,
    r += r,
    i += i,
    a += a),
    {
        red: parseInt(e, 16),
        green: parseInt(r, 16),
        blue: parseInt(i, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const uf = {
    test: yh("#"),
    parse: OP,
    transform: ss.transform
}
  , Gs = {
    test: yh("hsl", "hue"),
    parse: Pw("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: r, alpha: i=1}) => "hsla(" + Math.round(t) + ", " + On.transform(Co(e)) + ", " + On.transform(Co(r)) + ", " + Co(Mo.transform(i)) + ")"
}
  , Ct = {
    test: t => ss.test(t) || uf.test(t) || Gs.test(t),
    parse: t => ss.test(t) ? ss.parse(t) : Gs.test(t) ? Gs.parse(t) : uf.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? ss.transform(t) : Gs.transform(t)
}
  , jP = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function MP(t) {
    var e, r;
    return isNaN(t) && typeof t == "string" && (((e = t.match(gh)) === null || e === void 0 ? void 0 : e.length) || 0) + (((r = t.match(jP)) === null || r === void 0 ? void 0 : r.length) || 0) > 0
}
const Rw = "number"
  , Aw = "color"
  , LP = "var"
  , DP = "var("
  , W0 = "${}"
  , IP = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Do(t) {
    const e = t.toString()
      , r = []
      , i = {
        color: [],
        number: [],
        var: []
    }
      , a = [];
    let l = 0;
    const d = e.replace(IP, h => (Ct.test(h) ? (i.color.push(l),
    a.push(Aw),
    r.push(Ct.parse(h))) : h.startsWith(DP) ? (i.var.push(l),
    a.push(LP),
    r.push(h)) : (i.number.push(l),
    a.push(Rw),
    r.push(parseFloat(h))),
    ++l,
    W0)).split(W0);
    return {
        values: r,
        split: d,
        indexes: i,
        types: a
    }
}
function Nw(t) {
    return Do(t).values
}
function Ow(t) {
    const {split: e, types: r} = Do(t)
      , i = e.length;
    return a => {
        let l = "";
        for (let u = 0; u < i; u++)
            if (l += e[u],
            a[u] !== void 0) {
                const d = r[u];
                d === Rw ? l += Co(a[u]) : d === Aw ? l += Ct.transform(a[u]) : l += a[u]
            }
        return l
    }
}
const FP = t => typeof t == "number" ? 0 : t;
function VP(t) {
    const e = Nw(t);
    return Ow(t)(e.map(FP))
}
const Dr = {
    test: MP,
    parse: Nw,
    createTransformer: Ow,
    getAnimatableNone: VP
}
  , BP = new Set(["brightness", "contrast", "saturate", "opacity"]);
function UP(t) {
    const [e,r] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [i] = r.match(gh) || [];
    if (!i)
        return t;
    const a = r.replace(i, "");
    let l = BP.has(e) ? 1 : 0;
    return i !== r && (l *= 100),
    e + "(" + l + a + ")"
}
const zP = /\b([a-z-]*)\(.*?\)/gu
  , cf = {
    ...Dr,
    getAnimatableNone: t => {
        const e = t.match(zP);
        return e ? e.map(UP).join(" ") : t
    }
}
  , $P = {
    ...th,
    color: Ct,
    backgroundColor: Ct,
    outlineColor: Ct,
    fill: Ct,
    stroke: Ct,
    borderColor: Ct,
    borderTopColor: Ct,
    borderRightColor: Ct,
    borderBottomColor: Ct,
    borderLeftColor: Ct,
    filter: cf,
    WebkitFilter: cf
}
  , vh = t => $P[t];
function jw(t, e) {
    let r = vh(t);
    return r !== cf && (r = Dr),
    r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
}
const HP = new Set(["auto", "none", "0"]);
function qP(t, e, r) {
    let i = 0, a;
    for (; i < t.length && !a; ) {
        const l = t[i];
        typeof l == "string" && !HP.has(l) && Do(l).values.length && (a = t[i]),
        i++
    }
    if (a && r)
        for (const l of e)
            t[l] = jw(r, a)
}
const K0 = t => t === ki || t === ge
  , Q0 = (t, e) => parseFloat(t.split(", ")[e])
  , G0 = (t, e) => (r, {transform: i}) => {
    if (i === "none" || !i)
        return 0;
    const a = i.match(/^matrix3d\((.+)\)$/u);
    if (a)
        return Q0(a[1], e);
    {
        const l = i.match(/^matrix\((.+)\)$/u);
        return l ? Q0(l[1], t) : 0
    }
}
  , WP = new Set(["x", "y", "z"])
  , KP = Si.filter(t => !WP.has(t));
function QP(t) {
    const e = [];
    return KP.forEach(r => {
        const i = t.getValue(r);
        i !== void 0 && (e.push([r, i.get()]),
        i.set(r.startsWith("scale") ? 1 : 0))
    }
    ),
    e
}
const vi = {
    width: ({x: t}, {paddingLeft: e="0", paddingRight: r="0"}) => t.max - t.min - parseFloat(e) - parseFloat(r),
    height: ({y: t}, {paddingTop: e="0", paddingBottom: r="0"}) => t.max - t.min - parseFloat(e) - parseFloat(r),
    top: (t, {top: e}) => parseFloat(e),
    left: (t, {left: e}) => parseFloat(e),
    bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
    right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
    x: G0(4, 13),
    y: G0(5, 14)
};
vi.translateX = vi.x;
vi.translateY = vi.y;
const ms = new Set;
let df = !1
  , ff = !1;
function Mw() {
    if (ff) {
        const t = Array.from(ms).filter(i => i.needsMeasurement)
          , e = new Set(t.map(i => i.element))
          , r = new Map;
        e.forEach(i => {
            const a = QP(i);
            a.length && (r.set(i, a),
            i.render())
        }
        ),
        t.forEach(i => i.measureInitialState()),
        e.forEach(i => {
            i.render();
            const a = r.get(i);
            a && a.forEach( ([l,u]) => {
                var d;
                (d = i.getValue(l)) === null || d === void 0 || d.set(u)
            }
            )
        }
        ),
        t.forEach(i => i.measureEndState()),
        t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        }
        )
    }
    ff = !1,
    df = !1,
    ms.forEach(t => t.complete()),
    ms.clear()
}
function Lw() {
    ms.forEach(t => {
        t.readKeyframes(),
        t.needsMeasurement && (ff = !0)
    }
    )
}
function GP() {
    Lw(),
    Mw()
}
class xh {
    constructor(e, r, i, a, l, u=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...e],
        this.onComplete = r,
        this.name = i,
        this.motionValue = a,
        this.element = l,
        this.isAsync = u
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (ms.add(this),
        df || (df = !0,
        Ue.read(Lw),
        Ue.resolveKeyframes(Mw))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, name: r, element: i, motionValue: a} = this;
        for (let l = 0; l < e.length; l++)
            if (e[l] === null)
                if (l === 0) {
                    const u = a == null ? void 0 : a.get()
                      , d = e[e.length - 1];
                    if (u !== void 0)
                        e[0] = u;
                    else if (i && r) {
                        const h = i.readValue(r, d);
                        h != null && (e[0] = h)
                    }
                    e[0] === void 0 && (e[0] = d),
                    a && u === void 0 && a.set(e[0])
                } else
                    e[l] = e[l - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        ms.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        ms.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Dw = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
  , YP = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function XP(t) {
    const e = YP.exec(t);
    if (!e)
        return [, ];
    const [,r,i,a] = e;
    return [`--${r ?? i}`, a]
}
function Iw(t, e, r=1) {
    const [i,a] = XP(t);
    if (!i)
        return;
    const l = window.getComputedStyle(e).getPropertyValue(i);
    if (l) {
        const u = l.trim();
        return Dw(u) ? parseFloat(u) : u
    }
    return eh(a) ? Iw(a, e, r + 1) : a
}
const Fw = t => e => e.test(t)
  , JP = {
    test: t => t === "auto",
    parse: t => t
}
  , Vw = [ki, ge, On, kr, z_, U_, JP]
  , Y0 = t => Vw.find(Fw(t));
class Bw extends xh {
    constructor(e, r, i, a, l) {
        super(e, r, i, a, l, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, element: r, name: i} = this;
        if (!r || !r.current)
            return;
        super.readKeyframes();
        for (let h = 0; h < e.length; h++) {
            let m = e[h];
            if (typeof m == "string" && (m = m.trim(),
            eh(m))) {
                const g = Iw(m, r.current);
                g !== void 0 && (e[h] = g),
                h === e.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(),
        !gw.has(i) || e.length !== 2)
            return;
        const [a,l] = e
          , u = Y0(a)
          , d = Y0(l);
        if (u !== d)
            if (K0(u) && K0(d))
                for (let h = 0; h < e.length; h++) {
                    const m = e[h];
                    typeof m == "string" && (e[h] = parseFloat(m))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: e, name: r} = this
          , i = [];
        for (let a = 0; a < e.length; a++)
            PP(e[a]) && i.push(a);
        i.length && qP(e, i, r)
    }
    measureInitialState() {
        const {element: e, unresolvedKeyframes: r, name: i} = this;
        if (!e || !e.current)
            return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = vi[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
        r[0] = this.measuredOrigin;
        const a = r[r.length - 1];
        a !== void 0 && e.getValue(i, a).jump(a, !1)
    }
    measureEndState() {
        var e;
        const {element: r, name: i, unresolvedKeyframes: a} = this;
        if (!r || !r.current)
            return;
        const l = r.getValue(i);
        l && l.jump(this.measuredOrigin, !1);
        const u = a.length - 1
          , d = a[u];
        a[u] = vi[i](r.measureViewportBox(), window.getComputedStyle(r.current)),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach( ([h,m]) => {
            r.getValue(h).set(m)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const X0 = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Dr.test(t) || t === "0") && !t.startsWith("url("));
function ZP(t) {
    const e = t[0];
    if (t.length === 1)
        return !0;
    for (let r = 0; r < t.length; r++)
        if (t[r] !== e)
            return !0
}
function eR(t, e, r, i) {
    const a = t[0];
    if (a === null)
        return !1;
    if (e === "display" || e === "visibility")
        return !0;
    const l = t[t.length - 1]
      , u = X0(a, e)
      , d = X0(l, e);
    return !u || !d ? !1 : ZP(t) || (r === "spring" || lh(r)) && i
}
const tR = t => t !== null;
function au(t, {repeat: e, repeatType: r="loop"}, i) {
    const a = t.filter(tR)
      , l = e && r !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
    return !l || i === void 0 ? a[l] : i
}
const nR = 40;
class Uw {
    constructor({autoplay: e=!0, delay: r=0, type: i="keyframes", repeat: a=0, repeatDelay: l=0, repeatType: u="loop", ...d}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = jn.now(),
        this.options = {
            autoplay: e,
            delay: r,
            type: i,
            repeat: a,
            repeatDelay: l,
            repeatType: u,
            ...d
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > nR ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && GP(),
        this._resolved
    }
    onKeyframesResolved(e, r) {
        this.resolvedAt = jn.now(),
        this.hasAttemptedResolve = !0;
        const {name: i, type: a, velocity: l, delay: u, onComplete: d, onUpdate: h, isGenerator: m} = this.options;
        if (!m && !eR(e, i, a, l))
            if (u)
                this.options.duration = 0;
            else {
                h && h(au(e, this.options, r)),
                d && d(),
                this.resolveFinishedPromise();
                return
            }
        const g = this.initPlayback(e, r);
        g !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: r,
            ...g
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(e, r) {
        return this.currentFinishedPromise.then(e, r)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        }
        )
    }
}
const We = (t, e, r) => t + (e - t) * r;
function xd(t, e, r) {
    return r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
}
function rR({hue: t, saturation: e, lightness: r, alpha: i}) {
    t /= 360,
    e /= 100,
    r /= 100;
    let a = 0
      , l = 0
      , u = 0;
    if (!e)
        a = l = u = r;
    else {
        const d = r < .5 ? r * (1 + e) : r + e - r * e
          , h = 2 * r - d;
        a = xd(h, d, t + 1 / 3),
        l = xd(h, d, t),
        u = xd(h, d, t - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(l * 255),
        blue: Math.round(u * 255),
        alpha: i
    }
}
function $l(t, e) {
    return r => r > 0 ? e : t
}
const wd = (t, e, r) => {
    const i = t * t
      , a = r * (e * e - i) + i;
    return a < 0 ? 0 : Math.sqrt(a)
}
  , sR = [uf, ss, Gs]
  , iR = t => sR.find(e => e.test(t));
function J0(t) {
    const e = iR(t);
    if (!e)
        return !1;
    let r = e.parse(t);
    return e === Gs && (r = rR(r)),
    r
}
const Z0 = (t, e) => {
    const r = J0(t)
      , i = J0(e);
    if (!r || !i)
        return $l(t, e);
    const a = {
        ...r
    };
    return l => (a.red = wd(r.red, i.red, l),
    a.green = wd(r.green, i.green, l),
    a.blue = wd(r.blue, i.blue, l),
    a.alpha = We(r.alpha, i.alpha, l),
    ss.transform(a))
}
  , oR = (t, e) => r => e(t(r))
  , Jo = (...t) => t.reduce(oR)
  , hf = new Set(["none", "hidden"]);
function aR(t, e) {
    return hf.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t
}
function lR(t, e) {
    return r => We(t, e, r)
}
function wh(t) {
    return typeof t == "number" ? lR : typeof t == "string" ? eh(t) ? $l : Ct.test(t) ? Z0 : dR : Array.isArray(t) ? zw : typeof t == "object" ? Ct.test(t) ? Z0 : uR : $l
}
function zw(t, e) {
    const r = [...t]
      , i = r.length
      , a = t.map( (l, u) => wh(l)(l, e[u]));
    return l => {
        for (let u = 0; u < i; u++)
            r[u] = a[u](l);
        return r
    }
}
function uR(t, e) {
    const r = {
        ...t,
        ...e
    }
      , i = {};
    for (const a in r)
        t[a] !== void 0 && e[a] !== void 0 && (i[a] = wh(t[a])(t[a], e[a]));
    return a => {
        for (const l in i)
            r[l] = i[l](a);
        return r
    }
}
function cR(t, e) {
    var r;
    const i = []
      , a = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let l = 0; l < e.values.length; l++) {
        const u = e.types[l]
          , d = t.indexes[u][a[u]]
          , h = (r = t.values[d]) !== null && r !== void 0 ? r : 0;
        i[l] = h,
        a[u]++
    }
    return i
}
const dR = (t, e) => {
    const r = Dr.createTransformer(e)
      , i = Do(t)
      , a = Do(e);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? hf.has(t) && !a.values.length || hf.has(e) && !i.values.length ? aR(t, e) : Jo(zw(cR(i, a), a.values), r) : $l(t, e)
}
;
function $w(t, e, r) {
    return typeof t == "number" && typeof e == "number" && typeof r == "number" ? We(t, e, r) : wh(t)(t, e)
}
const fR = 5;
function Hw(t, e, r) {
    const i = Math.max(e - fR, 0);
    return yw(r - t(i), e - i)
}
const Ge = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , bd = .001;
function hR({duration: t=Ge.duration, bounce: e=Ge.bounce, velocity: r=Ge.velocity, mass: i=Ge.mass}) {
    let a, l, u = 1 - e;
    u = Jn(Ge.minDamping, Ge.maxDamping, u),
    t = Jn(Ge.minDuration, Ge.maxDuration, Xn(t)),
    u < 1 ? (a = m => {
        const g = m * u
          , y = g * t
          , w = g - r
          , k = pf(m, u)
          , T = Math.exp(-y);
        return bd - w / k * T
    }
    ,
    l = m => {
        const y = m * u * t
          , w = y * r + r
          , k = Math.pow(u, 2) * Math.pow(m, 2) * t
          , T = Math.exp(-y)
          , E = pf(Math.pow(m, 2), u);
        return (-a(m) + bd > 0 ? -1 : 1) * ((w - k) * T) / E
    }
    ) : (a = m => {
        const g = Math.exp(-m * t)
          , y = (m - r) * t + 1;
        return -bd + g * y
    }
    ,
    l = m => {
        const g = Math.exp(-m * t)
          , y = (r - m) * (t * t);
        return g * y
    }
    );
    const d = 5 / t
      , h = mR(a, l, d);
    if (t = Yn(t),
    isNaN(h))
        return {
            stiffness: Ge.stiffness,
            damping: Ge.damping,
            duration: t
        };
    {
        const m = Math.pow(h, 2) * i;
        return {
            stiffness: m,
            damping: u * 2 * Math.sqrt(i * m),
            duration: t
        }
    }
}
const pR = 12;
function mR(t, e, r) {
    let i = r;
    for (let a = 1; a < pR; a++)
        i = i - t(i) / e(i);
    return i
}
function pf(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const gR = ["duration", "bounce"]
  , yR = ["stiffness", "damping", "mass"];
function ey(t, e) {
    return e.some(r => t[r] !== void 0)
}
function vR(t) {
    let e = {
        velocity: Ge.velocity,
        stiffness: Ge.stiffness,
        damping: Ge.damping,
        mass: Ge.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!ey(t, yR) && ey(t, gR))
        if (t.visualDuration) {
            const r = t.visualDuration
              , i = 2 * Math.PI / (r * 1.2)
              , a = i * i
              , l = 2 * Jn(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
            e = {
                ...e,
                mass: Ge.mass,
                stiffness: a,
                damping: l
            }
        } else {
            const r = hR(t);
            e = {
                ...e,
                ...r,
                mass: Ge.mass
            },
            e.isResolvedFromDuration = !0
        }
    return e
}
function qw(t=Ge.visualDuration, e=Ge.bounce) {
    const r = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {restSpeed: i, restDelta: a} = r;
    const l = r.keyframes[0]
      , u = r.keyframes[r.keyframes.length - 1]
      , d = {
        done: !1,
        value: l
    }
      , {stiffness: h, damping: m, mass: g, duration: y, velocity: w, isResolvedFromDuration: k} = vR({
        ...r,
        velocity: -Xn(r.velocity || 0)
    })
      , T = w || 0
      , E = m / (2 * Math.sqrt(h * g))
      , S = u - l
      , b = Xn(Math.sqrt(h / g))
      , P = Math.abs(S) < 5;
    i || (i = P ? Ge.restSpeed.granular : Ge.restSpeed.default),
    a || (a = P ? Ge.restDelta.granular : Ge.restDelta.default);
    let A;
    if (E < 1) {
        const F = pf(b, E);
        A = $ => {
            const J = Math.exp(-E * b * $);
            return u - J * ((T + E * b * S) / F * Math.sin(F * $) + S * Math.cos(F * $))
        }
    } else if (E === 1)
        A = F => u - Math.exp(-b * F) * (S + (T + b * S) * F);
    else {
        const F = b * Math.sqrt(E * E - 1);
        A = $ => {
            const J = Math.exp(-E * b * $)
              , V = Math.min(F * $, 300);
            return u - J * ((T + E * b * S) * Math.sinh(V) + F * S * Math.cosh(V)) / F
        }
    }
    const M = {
        calculatedDuration: k && y || null,
        next: F => {
            const $ = A(F);
            if (k)
                d.done = F >= y;
            else {
                let J = 0;
                E < 1 && (J = F === 0 ? Yn(T) : Hw(A, F, $));
                const V = Math.abs(J) <= i
                  , ee = Math.abs(u - $) <= a;
                d.done = V && ee
            }
            return d.value = d.done ? u : $,
            d
        }
        ,
        toString: () => {
            const F = Math.min(lw(M), of)
              , $ = uw(J => M.next(F * J).value, F, 30);
            return F + "ms " + $
        }
    };
    return M
}
function ty({keyframes: t, velocity: e=0, power: r=.8, timeConstant: i=325, bounceDamping: a=10, bounceStiffness: l=500, modifyTarget: u, min: d, max: h, restDelta: m=.5, restSpeed: g}) {
    const y = t[0]
      , w = {
        done: !1,
        value: y
    }
      , k = V => d !== void 0 && V < d || h !== void 0 && V > h
      , T = V => d === void 0 ? h : h === void 0 || Math.abs(d - V) < Math.abs(h - V) ? d : h;
    let E = r * e;
    const S = y + E
      , b = u === void 0 ? S : u(S);
    b !== S && (E = b - y);
    const P = V => -E * Math.exp(-V / i)
      , A = V => b + P(V)
      , M = V => {
        const ee = P(V)
          , ue = A(V);
        w.done = Math.abs(ee) <= m,
        w.value = w.done ? b : ue
    }
    ;
    let F, $;
    const J = V => {
        k(w.value) && (F = V,
        $ = qw({
            keyframes: [w.value, T(w.value)],
            velocity: Hw(A, V, w.value),
            damping: a,
            stiffness: l,
            restDelta: m,
            restSpeed: g
        }))
    }
    ;
    return J(0),
    {
        calculatedDuration: null,
        next: V => {
            let ee = !1;
            return !$ && F === void 0 && (ee = !0,
            M(V),
            J(V)),
            F !== void 0 && V >= F ? $.next(V - F) : (!ee && M(V),
            w)
        }
    }
}
const xR = Xo(.42, 0, 1, 1)
  , wR = Xo(0, 0, .58, 1)
  , Ww = Xo(.42, 0, .58, 1)
  , bR = t => Array.isArray(t) && typeof t[0] != "number"
  , SR = {
    linear: qt,
    easeIn: xR,
    easeInOut: Ww,
    easeOut: wR,
    circIn: mh,
    circInOut: Tw,
    circOut: Cw,
    backIn: ph,
    backInOut: kw,
    backOut: Sw,
    anticipate: Ew
}
  , ny = t => {
    if (uh(t)) {
        zx(t.length === 4);
        const [e,r,i,a] = t;
        return Xo(e, r, i, a)
    } else if (typeof t == "string")
        return SR[t];
    return t
}
;
function kR(t, e, r) {
    const i = []
      , a = r || $w
      , l = t.length - 1;
    for (let u = 0; u < l; u++) {
        let d = a(t[u], t[u + 1]);
        if (e) {
            const h = Array.isArray(e) ? e[u] || qt : e;
            d = Jo(h, d)
        }
        i.push(d)
    }
    return i
}
function ER(t, e, {clamp: r=!0, ease: i, mixer: a}={}) {
    const l = t.length;
    if (zx(l === e.length),
    l === 1)
        return () => e[0];
    if (l === 2 && e[0] === e[1])
        return () => e[1];
    const u = t[0] === t[1];
    t[0] > t[l - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const d = kR(e, i, a)
      , h = d.length
      , m = g => {
        if (u && g < t[0])
            return e[0];
        let y = 0;
        if (h > 1)
            for (; y < t.length - 2 && !(g < t[y + 1]); y++)
                ;
        const w = gi(t[y], t[y + 1], g);
        return d[y](w)
    }
    ;
    return r ? g => m(Jn(t[0], t[l - 1], g)) : m
}
function CR(t, e) {
    const r = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const a = gi(0, e, i);
        t.push(We(r, 1, a))
    }
}
function TR(t) {
    const e = [0];
    return CR(e, t.length - 1),
    e
}
function _R(t, e) {
    return t.map(r => r * e)
}
function PR(t, e) {
    return t.map( () => e || Ww).splice(0, t.length - 1)
}
function Hl({duration: t=300, keyframes: e, times: r, ease: i="easeInOut"}) {
    const a = bR(i) ? i.map(ny) : ny(i)
      , l = {
        done: !1,
        value: e[0]
    }
      , u = _R(r && r.length === e.length ? r : TR(e), t)
      , d = ER(u, e, {
        ease: Array.isArray(a) ? a : PR(e, a)
    });
    return {
        calculatedDuration: t,
        next: h => (l.value = d(h),
        l.done = h >= t,
        l)
    }
}
const RR = t => {
    const e = ({timestamp: r}) => t(r);
    return {
        start: () => Ue.update(e, !0),
        stop: () => Lr(e),
        now: () => mt.isProcessing ? mt.timestamp : jn.now()
    }
}
  , AR = {
    decay: ty,
    inertia: ty,
    tween: Hl,
    keyframes: Hl,
    spring: qw
}
  , NR = t => t / 100;
class bh extends Uw {
    constructor(e) {
        super(e),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: h} = this.options;
            h && h()
        }
        ;
        const {name: r, motionValue: i, element: a, keyframes: l} = this.options
          , u = (a == null ? void 0 : a.KeyframeResolver) || xh
          , d = (h, m) => this.onKeyframesResolved(h, m);
        this.resolver = new u(l,d,r,i,a),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {type: r="keyframes", repeat: i=0, repeatDelay: a=0, repeatType: l, velocity: u=0} = this.options
          , d = lh(r) ? r : AR[r] || Hl;
        let h, m;
        d !== Hl && typeof e[0] != "number" && (h = Jo(NR, $w(e[0], e[1])),
        e = [0, 100]);
        const g = d({
            ...this.options,
            keyframes: e
        });
        l === "mirror" && (m = d({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -u
        })),
        g.calculatedDuration === null && (g.calculatedDuration = lw(g));
        const {calculatedDuration: y} = g
          , w = y + a
          , k = w * (i + 1) - a;
        return {
            generator: g,
            mirroredGenerator: m,
            mapPercentToKeyframes: h,
            calculatedDuration: y,
            resolvedDuration: w,
            totalDuration: k
        }
    }
    onPostResolved() {
        const {autoplay: e=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, r=!1) {
        const {resolved: i} = this;
        if (!i) {
            const {keyframes: V} = this.options;
            return {
                done: !0,
                value: V[V.length - 1]
            }
        }
        const {finalKeyframe: a, generator: l, mirroredGenerator: u, mapPercentToKeyframes: d, keyframes: h, calculatedDuration: m, totalDuration: g, resolvedDuration: y} = i;
        if (this.startTime === null)
            return l.next(0);
        const {delay: w, repeat: k, repeatType: T, repeatDelay: E, onUpdate: S} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - g / this.speed, this.startTime)),
        r ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const b = this.currentTime - w * (this.speed >= 0 ? 1 : -1)
          , P = this.speed >= 0 ? b < 0 : b > g;
        this.currentTime = Math.max(b, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = g);
        let A = this.currentTime
          , M = l;
        if (k) {
            const V = Math.min(this.currentTime, g) / y;
            let ee = Math.floor(V)
              , ue = V % 1;
            !ue && V >= 1 && (ue = 1),
            ue === 1 && ee--,
            ee = Math.min(ee, k + 1),
            !!(ee % 2) && (T === "reverse" ? (ue = 1 - ue,
            E && (ue -= E / y)) : T === "mirror" && (M = u)),
            A = Jn(0, 1, ue) * y
        }
        const F = P ? {
            done: !1,
            value: h[0]
        } : M.next(A);
        d && (F.value = d(F.value));
        let {done: $} = F;
        !P && m !== null && ($ = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
        const J = this.holdTime === null && (this.state === "finished" || this.state === "running" && $);
        return J && a !== void 0 && (F.value = au(h, this.options, a)),
        S && S(F.value),
        J && this.finish(),
        F
    }
    get duration() {
        const {resolved: e} = this;
        return e ? Xn(e.calculatedDuration) : 0
    }
    get time() {
        return Xn(this.currentTime)
    }
    set time(e) {
        e = Yn(e),
        this.currentTime = e,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const r = this.playbackSpeed !== e;
        this.playbackSpeed = e,
        r && (this.time = Xn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: e=RR, onPlay: r, startTime: i} = this.options;
        this.driver || (this.driver = e(l => this.tick(l))),
        r && r();
        const a = this.driver.now();
        this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = i ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: e} = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0,
        this.tick(e, !0)
    }
}
const OR = new Set(["opacity", "clipPath", "filter", "transform"]);
function jR(t, e, r, {delay: i=0, duration: a=300, repeat: l=0, repeatType: u="loop", ease: d="easeInOut", times: h}={}) {
    const m = {
        [e]: r
    };
    h && (m.offset = h);
    const g = dw(d, a);
    return Array.isArray(g) && (m.easing = g),
    t.animate(m, {
        delay: i,
        duration: a,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: l + 1,
        direction: u === "reverse" ? "alternate" : "normal"
    })
}
const MR = Kf( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , ql = 10
  , LR = 2e4;
function DR(t) {
    return lh(t.type) || t.type === "spring" || !cw(t.ease)
}
function IR(t, e) {
    const r = new bh({
        ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: t[0]
    };
    const a = [];
    let l = 0;
    for (; !i.done && l < LR; )
        i = r.sample(l),
        a.push(i.value),
        l += ql;
    return {
        times: void 0,
        keyframes: a,
        duration: l - ql,
        ease: "linear"
    }
}
const Kw = {
    anticipate: Ew,
    backInOut: kw,
    circInOut: Tw
};
function FR(t) {
    return t in Kw
}
class ry extends Uw {
    constructor(e) {
        super(e);
        const {name: r, motionValue: i, element: a, keyframes: l} = this.options;
        this.resolver = new Bw(l, (u, d) => this.onKeyframesResolved(u, d),r,i,a),
        this.resolver.scheduleResolve()
    }
    initPlayback(e, r) {
        let {duration: i=300, times: a, ease: l, type: u, motionValue: d, name: h, startTime: m} = this.options;
        if (!d.owner || !d.owner.current)
            return !1;
        if (typeof l == "string" && zl() && FR(l) && (l = Kw[l]),
        DR(this.options)) {
            const {onComplete: y, onUpdate: w, motionValue: k, element: T, ...E} = this.options
              , S = IR(e, E);
            e = S.keyframes,
            e.length === 1 && (e[1] = e[0]),
            i = S.duration,
            a = S.times,
            l = S.ease,
            u = "keyframes"
        }
        const g = jR(d.owner.current, h, e, {
            ...this.options,
            duration: i,
            times: a,
            ease: l
        });
        return g.startTime = m ?? this.calcStartTime(),
        this.pendingTimeline ? (U0(g, this.pendingTimeline),
        this.pendingTimeline = void 0) : g.onfinish = () => {
            const {onComplete: y} = this.options;
            d.set(au(e, this.options, r)),
            y && y(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: g,
            duration: i,
            times: a,
            type: u,
            ease: l,
            keyframes: e
        }
    }
    get duration() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {duration: r} = e;
        return Xn(r)
    }
    get time() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {animation: r} = e;
        return Xn(r.currentTime || 0)
    }
    set time(e) {
        const {resolved: r} = this;
        if (!r)
            return;
        const {animation: i} = r;
        i.currentTime = Yn(e)
    }
    get speed() {
        const {resolved: e} = this;
        if (!e)
            return 1;
        const {animation: r} = e;
        return r.playbackRate
    }
    set speed(e) {
        const {resolved: r} = this;
        if (!r)
            return;
        const {animation: i} = r;
        i.playbackRate = e
    }
    get state() {
        const {resolved: e} = this;
        if (!e)
            return "idle";
        const {animation: r} = e;
        return r.playState
    }
    get startTime() {
        const {resolved: e} = this;
        if (!e)
            return null;
        const {animation: r} = e;
        return r.startTime
    }
    attachTimeline(e) {
        if (!this._resolved)
            this.pendingTimeline = e;
        else {
            const {resolved: r} = this;
            if (!r)
                return qt;
            const {animation: i} = r;
            U0(i, e)
        }
        return qt
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r} = e;
        r.playState === "finished" && this.updateFinishedPromise(),
        r.play()
    }
    pause() {
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r} = e;
        r.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r, keyframes: i, duration: a, type: l, ease: u, times: d} = e;
        if (r.playState === "idle" || r.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: m, onUpdate: g, onComplete: y, element: w, ...k} = this.options
              , T = new bh({
                ...k,
                keyframes: i,
                duration: a,
                type: l,
                ease: u,
                times: d,
                isGenerator: !0
            })
              , E = Yn(this.time);
            m.setWithVelocity(T.sample(E - ql).value, T.sample(E).value, ql)
        }
        const {onStop: h} = this.options;
        h && h(),
        this.cancel()
    }
    complete() {
        const {resolved: e} = this;
        e && e.animation.finish()
    }
    cancel() {
        const {resolved: e} = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {motionValue: r, name: i, repeatDelay: a, repeatType: l, damping: u, type: d} = e;
        if (!r || !r.owner || !(r.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: h, transformTemplate: m} = r.owner.getProps();
        return MR() && i && OR.has(i) && !h && !m && !a && l !== "mirror" && u !== 0 && d !== "inertia"
    }
}
const VR = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , BR = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , UR = {
    type: "keyframes",
    duration: .8
}
  , zR = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , $R = (t, {keyframes: e}) => e.length > 2 ? UR : bs.has(t) ? t.startsWith("scale") ? BR(e[1]) : VR : zR;
function HR({when: t, delay: e, delayChildren: r, staggerChildren: i, staggerDirection: a, repeat: l, repeatType: u, repeatDelay: d, from: h, elapsed: m, ...g}) {
    return !!Object.keys(g).length
}
const Sh = (t, e, r, i={}, a, l) => u => {
    const d = ah(i, t) || {}
      , h = d.delay || i.delay || 0;
    let {elapsed: m=0} = i;
    m = m - Yn(h);
    let g = {
        keyframes: Array.isArray(r) ? r : [null, r],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...d,
        delay: -m,
        onUpdate: w => {
            e.set(w),
            d.onUpdate && d.onUpdate(w)
        }
        ,
        onComplete: () => {
            u(),
            d.onComplete && d.onComplete()
        }
        ,
        name: t,
        motionValue: e,
        element: l ? void 0 : a
    };
    HR(d) || (g = {
        ...g,
        ...$R(t, g)
    }),
    g.duration && (g.duration = Yn(g.duration)),
    g.repeatDelay && (g.repeatDelay = Yn(g.repeatDelay)),
    g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0,
    g.delay === 0 && (y = !0)),
    y && !l && e.get() !== void 0) {
        const w = au(g.keyframes, d);
        if (w !== void 0)
            return Ue.update( () => {
                g.onUpdate(w),
                g.onComplete()
            }
            ),
            new cP([])
    }
    return !l && ry.supports(g) ? new ry(g) : new bh(g)
}
;
function qR({protectedKeys: t, needsAnimating: e}, r) {
    const i = t.hasOwnProperty(r) && e[r] !== !0;
    return e[r] = !1,
    i
}
function Qw(t, e, {delay: r=0, transitionOverride: i, type: a}={}) {
    var l;
    let {transition: u=t.getDefaultTransition(), transitionEnd: d, ...h} = e;
    i && (u = i);
    const m = []
      , g = a && t.animationState && t.animationState.getState()[a];
    for (const y in h) {
        const w = t.getValue(y, (l = t.latestValues[y]) !== null && l !== void 0 ? l : null)
          , k = h[y];
        if (k === void 0 || g && qR(g, y))
            continue;
        const T = {
            delay: r,
            ...ah(u || {}, y)
        };
        let E = !1;
        if (window.MotionHandoffAnimation) {
            const b = vw(t);
            if (b) {
                const P = window.MotionHandoffAnimation(b, y, Ue);
                P !== null && (T.startTime = P,
                E = !0)
            }
        }
        lf(t, y),
        w.start(Sh(y, w, k, t.shouldReduceMotion && gw.has(y) ? {
            type: !1
        } : T, t, E));
        const S = w.animation;
        S && m.push(S)
    }
    return d && Promise.all(m).then( () => {
        Ue.update( () => {
            d && kP(t, d)
        }
        )
    }
    ),
    m
}
function mf(t, e, r={}) {
    var i;
    const a = ou(t, e, r.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {transition: l=t.getDefaultTransition() || {}} = a || {};
    r.transitionOverride && (l = r.transitionOverride);
    const u = a ? () => Promise.all(Qw(t, a, r)) : () => Promise.resolve()
      , d = t.variantChildren && t.variantChildren.size ? (m=0) => {
        const {delayChildren: g=0, staggerChildren: y, staggerDirection: w} = l;
        return WR(t, e, g + m, y, w, r)
    }
    : () => Promise.resolve()
      , {when: h} = l;
    if (h) {
        const [m,g] = h === "beforeChildren" ? [u, d] : [d, u];
        return m().then( () => g())
    } else
        return Promise.all([u(), d(r.delay)])
}
function WR(t, e, r=0, i=0, a=1, l) {
    const u = []
      , d = (t.variantChildren.size - 1) * i
      , h = a === 1 ? (m=0) => m * i : (m=0) => d - m * i;
    return Array.from(t.variantChildren).sort(KR).forEach( (m, g) => {
        m.notify("AnimationStart", e),
        u.push(mf(m, e, {
            ...l,
            delay: r + h(g)
        }).then( () => m.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(u)
}
function KR(t, e) {
    return t.sortNodePosition(e)
}
function QR(t, e, r={}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const a = e.map(l => mf(t, l, r));
        i = Promise.all(a)
    } else if (typeof e == "string")
        i = mf(t, e, r);
    else {
        const a = typeof e == "function" ? ou(t, e, r.custom) : e;
        i = Promise.all(Qw(t, a, r))
    }
    return i.then( () => {
        t.notify("AnimationComplete", e)
    }
    )
}
const GR = Gf.length;
function Gw(t) {
    if (!t)
        return;
    if (!t.isControllingVariants) {
        const r = t.parent ? Gw(t.parent) || {} : {};
        return t.props.initial !== void 0 && (r.initial = t.props.initial),
        r
    }
    const e = {};
    for (let r = 0; r < GR; r++) {
        const i = Gf[r]
          , a = t.props[i];
        (jo(a) || a === !1) && (e[i] = a)
    }
    return e
}
const YR = [...Qf].reverse()
  , XR = Qf.length;
function JR(t) {
    return e => Promise.all(e.map( ({animation: r, options: i}) => QR(t, r, i)))
}
function ZR(t) {
    let e = JR(t)
      , r = sy()
      , i = !0;
    const a = h => (m, g) => {
        var y;
        const w = ou(t, g, h === "exit" ? (y = t.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (w) {
            const {transition: k, transitionEnd: T, ...E} = w;
            m = {
                ...m,
                ...E,
                ...T
            }
        }
        return m
    }
    ;
    function l(h) {
        e = h(t)
    }
    function u(h) {
        const {props: m} = t
          , g = Gw(t.parent) || {}
          , y = []
          , w = new Set;
        let k = {}
          , T = 1 / 0;
        for (let S = 0; S < XR; S++) {
            const b = YR[S]
              , P = r[b]
              , A = m[b] !== void 0 ? m[b] : g[b]
              , M = jo(A)
              , F = b === h ? P.isActive : null;
            F === !1 && (T = S);
            let $ = A === g[b] && A !== m[b] && M;
            if ($ && i && t.manuallyAnimateOnMount && ($ = !1),
            P.protectedKeys = {
                ...k
            },
            !P.isActive && F === null || !A && !P.prevProp || su(A) || typeof A == "boolean")
                continue;
            const J = eA(P.prevProp, A);
            let V = J || b === h && P.isActive && !$ && M || S > T && M
              , ee = !1;
            const ue = Array.isArray(A) ? A : [A];
            let le = ue.reduce(a(b), {});
            F === !1 && (le = {});
            const {prevResolvedValues: Ae={}} = P
              , ze = {
                ...Ae,
                ...le
            }
              , Re = me => {
                V = !0,
                w.has(me) && (ee = !0,
                w.delete(me)),
                P.needsAnimating[me] = !0;
                const Q = t.getValue(me);
                Q && (Q.liveStyle = !1)
            }
            ;
            for (const me in ze) {
                const Q = le[me]
                  , oe = Ae[me];
                if (k.hasOwnProperty(me))
                    continue;
                let U = !1;
                sf(Q) && sf(oe) ? U = !aw(Q, oe) : U = Q !== oe,
                U ? Q != null ? Re(me) : w.add(me) : Q !== void 0 && w.has(me) ? Re(me) : P.protectedKeys[me] = !0
            }
            P.prevProp = A,
            P.prevResolvedValues = le,
            P.isActive && (k = {
                ...k,
                ...le
            }),
            i && t.blockInitialAnimation && (V = !1),
            V && (!($ && J) || ee) && y.push(...ue.map(me => ({
                animation: me,
                options: {
                    type: b
                }
            })))
        }
        if (w.size) {
            const S = {};
            w.forEach(b => {
                const P = t.getBaseTarget(b)
                  , A = t.getValue(b);
                A && (A.liveStyle = !0),
                S[b] = P ?? null
            }
            ),
            y.push({
                animation: S
            })
        }
        let E = !!y.length;
        return i && (m.initial === !1 || m.initial === m.animate) && !t.manuallyAnimateOnMount && (E = !1),
        i = !1,
        E ? e(y) : Promise.resolve()
    }
    function d(h, m) {
        var g;
        if (r[h].isActive === m)
            return Promise.resolve();
        (g = t.variantChildren) === null || g === void 0 || g.forEach(w => {
            var k;
            return (k = w.animationState) === null || k === void 0 ? void 0 : k.setActive(h, m)
        }
        ),
        r[h].isActive = m;
        const y = u(h);
        for (const w in r)
            r[w].protectedKeys = {};
        return y
    }
    return {
        animateChanges: u,
        setActive: d,
        setAnimateFunction: l,
        getState: () => r,
        reset: () => {
            r = sy(),
            i = !0
        }
    }
}
function eA(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !aw(e, t) : !1
}
function Zr(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function sy() {
    return {
        animate: Zr(!0),
        whileInView: Zr(),
        whileHover: Zr(),
        whileTap: Zr(),
        whileDrag: Zr(),
        whileFocus: Zr(),
        exit: Zr()
    }
}
class Fr {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
class tA extends Fr {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = ZR(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        su(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: r} = this.node.prevProps || {};
        e !== r && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let nA = 0;
class rA extends Fr {
    constructor() {
        super(...arguments),
        this.id = nA++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: r} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i)
            return;
        const a = this.node.animationState.setActive("exit", !e);
        r && !e && a.then( () => r(this.id))
    }
    mount() {
        const {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const sA = {
    animation: {
        Feature: tA
    },
    exit: {
        Feature: rA
    }
};
function Io(t, e, r, i={
    passive: !0
}) {
    return t.addEventListener(e, r, i),
    () => t.removeEventListener(e, r)
}
function Zo(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const iA = t => e => ch(e) && t(e, Zo(e));
function To(t, e, r, i) {
    return Io(t, e, iA(r), i)
}
const iy = (t, e) => Math.abs(t - e);
function oA(t, e) {
    const r = iy(t.x, e.x)
      , i = iy(t.y, e.y);
    return Math.sqrt(r ** 2 + i ** 2)
}
class Yw {
    constructor(e, r, {transformPagePoint: i, contextWindow: a, dragSnapToOrigin: l=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = kd(this.lastMoveEventInfo, this.history)
              , w = this.startEvent !== null
              , k = oA(y.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!w && !k)
                return;
            const {point: T} = y
              , {timestamp: E} = mt;
            this.history.push({
                ...T,
                timestamp: E
            });
            const {onStart: S, onMove: b} = this.handlers;
            w || (S && S(this.lastMoveEvent, y),
            this.startEvent = this.lastMoveEvent),
            b && b(this.lastMoveEvent, y)
        }
        ,
        this.handlePointerMove = (y, w) => {
            this.lastMoveEvent = y,
            this.lastMoveEventInfo = Sd(w, this.transformPagePoint),
            Ue.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (y, w) => {
            this.end();
            const {onEnd: k, onSessionEnd: T, resumeAnimation: E} = this.handlers;
            if (this.dragSnapToOrigin && E && E(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const S = kd(y.type === "pointercancel" ? this.lastMoveEventInfo : Sd(w, this.transformPagePoint), this.history);
            this.startEvent && k && k(y, S),
            T && T(y, S)
        }
        ,
        !ch(e))
            return;
        this.dragSnapToOrigin = l,
        this.handlers = r,
        this.transformPagePoint = i,
        this.contextWindow = a || window;
        const u = Zo(e)
          , d = Sd(u, this.transformPagePoint)
          , {point: h} = d
          , {timestamp: m} = mt;
        this.history = [{
            ...h,
            timestamp: m
        }];
        const {onSessionStart: g} = r;
        g && g(e, kd(d, this.history)),
        this.removeListeners = Jo(To(this.contextWindow, "pointermove", this.handlePointerMove), To(this.contextWindow, "pointerup", this.handlePointerUp), To(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Lr(this.updatePoint)
    }
}
function Sd(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function oy(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function kd({point: t}, e) {
    return {
        point: t,
        delta: oy(t, Xw(e)),
        offset: oy(t, aA(e)),
        velocity: lA(e, .1)
    }
}
function aA(t) {
    return t[0]
}
function Xw(t) {
    return t[t.length - 1]
}
function lA(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let r = t.length - 1
      , i = null;
    const a = Xw(t);
    for (; r >= 0 && (i = t[r],
    !(a.timestamp - i.timestamp > Yn(e))); )
        r--;
    if (!i)
        return {
            x: 0,
            y: 0
        };
    const l = Xn(a.timestamp - i.timestamp);
    if (l === 0)
        return {
            x: 0,
            y: 0
        };
    const u = {
        x: (a.x - i.x) / l,
        y: (a.y - i.y) / l
    };
    return u.x === 1 / 0 && (u.x = 0),
    u.y === 1 / 0 && (u.y = 0),
    u
}
const Jw = 1e-4
  , uA = 1 - Jw
  , cA = 1 + Jw
  , Zw = .01
  , dA = 0 - Zw
  , fA = 0 + Zw;
function Wt(t) {
    return t.max - t.min
}
function hA(t, e, r) {
    return Math.abs(t - e) <= r
}
function ay(t, e, r, i=.5) {
    t.origin = i,
    t.originPoint = We(e.min, e.max, t.origin),
    t.scale = Wt(r) / Wt(e),
    t.translate = We(r.min, r.max, t.origin) - t.originPoint,
    (t.scale >= uA && t.scale <= cA || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= dA && t.translate <= fA || isNaN(t.translate)) && (t.translate = 0)
}
function _o(t, e, r, i) {
    ay(t.x, e.x, r.x, i ? i.originX : void 0),
    ay(t.y, e.y, r.y, i ? i.originY : void 0)
}
function ly(t, e, r) {
    t.min = r.min + e.min,
    t.max = t.min + Wt(e)
}
function pA(t, e, r) {
    ly(t.x, e.x, r.x),
    ly(t.y, e.y, r.y)
}
function uy(t, e, r) {
    t.min = e.min - r.min,
    t.max = t.min + Wt(e)
}
function Po(t, e, r) {
    uy(t.x, e.x, r.x),
    uy(t.y, e.y, r.y)
}
function mA(t, {min: e, max: r}, i) {
    return e !== void 0 && t < e ? t = i ? We(e, t, i.min) : Math.max(t, e) : r !== void 0 && t > r && (t = i ? We(r, t, i.max) : Math.min(t, r)),
    t
}
function cy(t, e, r) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
    }
}
function gA(t, {top: e, left: r, bottom: i, right: a}) {
    return {
        x: cy(t.x, r, a),
        y: cy(t.y, e, i)
    }
}
function dy(t, e) {
    let r = e.min - t.min
      , i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([r,i] = [i, r]),
    {
        min: r,
        max: i
    }
}
function yA(t, e) {
    return {
        x: dy(t.x, e.x),
        y: dy(t.y, e.y)
    }
}
function vA(t, e) {
    let r = .5;
    const i = Wt(t)
      , a = Wt(e);
    return a > i ? r = gi(e.min, e.max - i, t.min) : i > a && (r = gi(t.min, t.max - a, e.min)),
    Jn(0, 1, r)
}
function xA(t, e) {
    const r = {};
    return e.min !== void 0 && (r.min = e.min - t.min),
    e.max !== void 0 && (r.max = e.max - t.min),
    r
}
const gf = .35;
function wA(t=gf) {
    return t === !1 ? t = 0 : t === !0 && (t = gf),
    {
        x: fy(t, "left", "right"),
        y: fy(t, "top", "bottom")
    }
}
function fy(t, e, r) {
    return {
        min: hy(t, e),
        max: hy(t, r)
    }
}
function hy(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const py = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Ys = () => ({
    x: py(),
    y: py()
})
  , my = () => ({
    min: 0,
    max: 0
})
  , Je = () => ({
    x: my(),
    y: my()
});
function rn(t) {
    return [t("x"), t("y")]
}
function e1({top: t, left: e, right: r, bottom: i}) {
    return {
        x: {
            min: e,
            max: r
        },
        y: {
            min: t,
            max: i
        }
    }
}
function bA({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function SA(t, e) {
    if (!e)
        return t;
    const r = e({
        x: t.left,
        y: t.top
    })
      , i = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: r.y,
        left: r.x,
        bottom: i.y,
        right: i.x
    }
}
function Ed(t) {
    return t === void 0 || t === 1
}
function yf({scale: t, scaleX: e, scaleY: r}) {
    return !Ed(t) || !Ed(e) || !Ed(r)
}
function es(t) {
    return yf(t) || t1(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function t1(t) {
    return gy(t.x) || gy(t.y)
}
function gy(t) {
    return t && t !== "0%"
}
function Wl(t, e, r) {
    const i = t - r
      , a = e * i;
    return r + a
}
function yy(t, e, r, i, a) {
    return a !== void 0 && (t = Wl(t, a, i)),
    Wl(t, r, i) + e
}
function vf(t, e=0, r=1, i, a) {
    t.min = yy(t.min, e, r, i, a),
    t.max = yy(t.max, e, r, i, a)
}
function n1(t, {x: e, y: r}) {
    vf(t.x, e.translate, e.scale, e.originPoint),
    vf(t.y, r.translate, r.scale, r.originPoint)
}
const vy = .999999999999
  , xy = 1.0000000000001;
function kA(t, e, r, i=!1) {
    const a = r.length;
    if (!a)
        return;
    e.x = e.y = 1;
    let l, u;
    for (let d = 0; d < a; d++) {
        l = r[d],
        u = l.projectionDelta;
        const {visualElement: h} = l.options;
        h && h.props.style && h.props.style.display === "contents" || (i && l.options.layoutScroll && l.scroll && l !== l.root && Js(t, {
            x: -l.scroll.offset.x,
            y: -l.scroll.offset.y
        }),
        u && (e.x *= u.x.scale,
        e.y *= u.y.scale,
        n1(t, u)),
        i && es(l.latestValues) && Js(t, l.latestValues))
    }
    e.x < xy && e.x > vy && (e.x = 1),
    e.y < xy && e.y > vy && (e.y = 1)
}
function Xs(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function wy(t, e, r, i, a=.5) {
    const l = We(t.min, t.max, a);
    vf(t, e, r, l, i)
}
function Js(t, e) {
    wy(t.x, e.x, e.scaleX, e.scale, e.originX),
    wy(t.y, e.y, e.scaleY, e.scale, e.originY)
}
function r1(t, e) {
    return e1(SA(t.getBoundingClientRect(), e))
}
function EA(t, e, r) {
    const i = r1(t, r)
      , {scroll: a} = e;
    return a && (Xs(i.x, a.offset.x),
    Xs(i.y, a.offset.y)),
    i
}
const s1 = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , CA = new WeakMap;
class TA {
    constructor(e) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Je(),
        this.visualElement = e
    }
    start(e, {snapToCursor: r=!1}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const a = g => {
            const {dragSnapToOrigin: y} = this.getProps();
            y ? this.pauseAnimation() : this.stopAnimation(),
            r && this.snapToCursor(Zo(g).point)
        }
          , l = (g, y) => {
            const {drag: w, dragPropagation: k, onDragStart: T} = this.getProps();
            if (w && !k && (this.openDragLock && this.openDragLock(),
            this.openDragLock = vP(w),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            rn(S => {
                let b = this.getAxisMotionValue(S).get() || 0;
                if (On.test(b)) {
                    const {projection: P} = this.visualElement;
                    if (P && P.layout) {
                        const A = P.layout.layoutBox[S];
                        A && (b = Wt(A) * (parseFloat(b) / 100))
                    }
                }
                this.originPoint[S] = b
            }
            ),
            T && Ue.postRender( () => T(g, y)),
            lf(this.visualElement, "transform");
            const {animationState: E} = this.visualElement;
            E && E.setActive("whileDrag", !0)
        }
          , u = (g, y) => {
            const {dragPropagation: w, dragDirectionLock: k, onDirectionLock: T, onDrag: E} = this.getProps();
            if (!w && !this.openDragLock)
                return;
            const {offset: S} = y;
            if (k && this.currentDirection === null) {
                this.currentDirection = _A(S),
                this.currentDirection !== null && T && T(this.currentDirection);
                return
            }
            this.updateAxis("x", y.point, S),
            this.updateAxis("y", y.point, S),
            this.visualElement.render(),
            E && E(g, y)
        }
          , d = (g, y) => this.stop(g, y)
          , h = () => rn(g => {
            var y;
            return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) === null || y === void 0 ? void 0 : y.play())
        }
        )
          , {dragSnapToOrigin: m} = this.getProps();
        this.panSession = new Yw(e,{
            onSessionStart: a,
            onStart: l,
            onMove: u,
            onSessionEnd: d,
            resumeAnimation: h
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: m,
            contextWindow: s1(this.visualElement)
        })
    }
    stop(e, r) {
        const i = this.isDragging;
        if (this.cancel(),
        !i)
            return;
        const {velocity: a} = r;
        this.startAnimation(a);
        const {onDragEnd: l} = this.getProps();
        l && Ue.postRender( () => l(e, r))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: r} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: i} = this.getProps();
        !i && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        r && r.setActive("whileDrag", !1)
    }
    updateAxis(e, r, i) {
        const {drag: a} = this.getProps();
        if (!i || !xl(e, a, this.currentDirection))
            return;
        const l = this.getAxisMotionValue(e);
        let u = this.originPoint[e] + i[e];
        this.constraints && this.constraints[e] && (u = mA(u, this.constraints[e], this.elastic[e])),
        l.set(u)
    }
    resolveConstraints() {
        var e;
        const {dragConstraints: r, dragElastic: i} = this.getProps()
          , a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
          , l = this.constraints;
        r && Qs(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && a ? this.constraints = gA(a.layoutBox, r) : this.constraints = !1,
        this.elastic = wA(i),
        l !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && rn(u => {
            this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = xA(a.layoutBox[u], this.constraints[u]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: r} = this.getProps();
        if (!e || !Qs(e))
            return !1;
        const i = e.current
          , {projection: a} = this.visualElement;
        if (!a || !a.layout)
            return !1;
        const l = EA(i, a.root, this.visualElement.getTransformPagePoint());
        let u = yA(a.layout.layoutBox, l);
        if (r) {
            const d = r(bA(u));
            this.hasMutatedConstraints = !!d,
            d && (u = e1(d))
        }
        return u
    }
    startAnimation(e) {
        const {drag: r, dragMomentum: i, dragElastic: a, dragTransition: l, dragSnapToOrigin: u, onDragTransitionEnd: d} = this.getProps()
          , h = this.constraints || {}
          , m = rn(g => {
            if (!xl(g, r, this.currentDirection))
                return;
            let y = h && h[g] || {};
            u && (y = {
                min: 0,
                max: 0
            });
            const w = a ? 200 : 1e6
              , k = a ? 40 : 1e7
              , T = {
                type: "inertia",
                velocity: i ? e[g] : 0,
                bounceStiffness: w,
                bounceDamping: k,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...l,
                ...y
            };
            return this.startAxisValueAnimation(g, T)
        }
        );
        return Promise.all(m).then(d)
    }
    startAxisValueAnimation(e, r) {
        const i = this.getAxisMotionValue(e);
        return lf(this.visualElement, e),
        i.start(Sh(e, i, 0, r, this.visualElement, !1))
    }
    stopAnimation() {
        rn(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        rn(e => {
            var r;
            return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.pause()
        }
        )
    }
    getAnimationState(e) {
        var r;
        return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.state
    }
    getAxisMotionValue(e) {
        const r = `_drag${e.toUpperCase()}`
          , i = this.visualElement.getProps()
          , a = i[r];
        return a || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        rn(r => {
            const {drag: i} = this.getProps();
            if (!xl(r, i, this.currentDirection))
                return;
            const {projection: a} = this.visualElement
              , l = this.getAxisMotionValue(r);
            if (a && a.layout) {
                const {min: u, max: d} = a.layout.layoutBox[r];
                l.set(e[r] - We(u, d, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: r} = this.getProps()
          , {projection: i} = this.visualElement;
        if (!Qs(r) || !i || !this.constraints)
            return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        rn(u => {
            const d = this.getAxisMotionValue(u);
            if (d && this.constraints !== !1) {
                const h = d.get();
                a[u] = vA({
                    min: h,
                    max: h
                }, this.constraints[u])
            }
        }
        );
        const {transformTemplate: l} = this.visualElement.getProps();
        this.visualElement.current.style.transform = l ? l({}, "") : "none",
        i.root && i.root.updateScroll(),
        i.updateLayout(),
        this.resolveConstraints(),
        rn(u => {
            if (!xl(u, e, null))
                return;
            const d = this.getAxisMotionValue(u)
              , {min: h, max: m} = this.constraints[u];
            d.set(We(h, m, a[u]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        CA.set(this.visualElement, this);
        const e = this.visualElement.current
          , r = To(e, "pointerdown", h => {
            const {drag: m, dragListener: g=!0} = this.getProps();
            m && g && this.start(h)
        }
        )
          , i = () => {
            const {dragConstraints: h} = this.getProps();
            Qs(h) && h.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: a} = this.visualElement
          , l = a.addEventListener("measure", i);
        a && !a.layout && (a.root && a.root.updateScroll(),
        a.updateLayout()),
        Ue.read(i);
        const u = Io(window, "resize", () => this.scalePositionWithinConstraints())
          , d = a.addEventListener("didUpdate", ( ({delta: h, hasLayoutChanged: m}) => {
            this.isDragging && m && (rn(g => {
                const y = this.getAxisMotionValue(g);
                y && (this.originPoint[g] += h[g].translate,
                y.set(y.get() + h[g].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            u(),
            r(),
            l(),
            d && d()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: r=!1, dragDirectionLock: i=!1, dragPropagation: a=!1, dragConstraints: l=!1, dragElastic: u=gf, dragMomentum: d=!0} = e;
        return {
            ...e,
            drag: r,
            dragDirectionLock: i,
            dragPropagation: a,
            dragConstraints: l,
            dragElastic: u,
            dragMomentum: d
        }
    }
}
function xl(t, e, r) {
    return (e === !0 || e === t) && (r === null || r === t)
}
function _A(t, e=10) {
    let r = null;
    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"),
    r
}
class PA extends Fr {
    constructor(e) {
        super(e),
        this.removeGroupControls = qt,
        this.removeListeners = qt,
        this.controls = new TA(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || qt
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const by = t => (e, r) => {
    t && Ue.postRender( () => t(e, r))
}
;
class RA extends Fr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = qt
    }
    onPointerDown(e) {
        this.session = new Yw(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: s1(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: r, onPan: i, onPanEnd: a} = this.node.getProps();
        return {
            onSessionStart: by(e),
            onStart: by(r),
            onMove: i,
            onEnd: (l, u) => {
                delete this.session,
                a && Ue.postRender( () => a(l, u))
            }
        }
    }
    mount() {
        this.removePointerDownListener = To(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Nl = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Sy(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const po = {
    correct: (t, e) => {
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (ge.test(t))
                t = parseFloat(t);
            else
                return t;
        const r = Sy(t, e.target.x)
          , i = Sy(t, e.target.y);
        return `${r}% ${i}%`
    }
}
  , AA = {
    correct: (t, {treeScale: e, projectionDelta: r}) => {
        const i = t
          , a = Dr.parse(t);
        if (a.length > 5)
            return i;
        const l = Dr.createTransformer(t)
          , u = typeof a[0] != "number" ? 1 : 0
          , d = r.x.scale * e.x
          , h = r.y.scale * e.y;
        a[0 + u] /= d,
        a[1 + u] /= h;
        const m = We(d, h, .5);
        return typeof a[2 + u] == "number" && (a[2 + u] /= m),
        typeof a[3 + u] == "number" && (a[3 + u] /= m),
        l(a)
    }
};
class NA extends L.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: r, switchLayoutGroup: i, layoutId: a} = this.props
          , {projection: l} = e;
        J_(OA),
        l && (r.group && r.group.add(l),
        i && i.register && a && i.register(l),
        l.root.didUpdate(),
        l.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        l.setOptions({
            ...l.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Nl.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: r, visualElement: i, drag: a, isPresent: l} = this.props
          , u = i.projection;
        return u && (u.isPresent = l,
        a || e.layoutDependency !== r || r === void 0 ? u.willUpdate() : this.safeToRemove(),
        e.isPresent !== l && (l ? u.promote() : u.relegate() || Ue.postRender( () => {
            const d = u.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        Xf.postRender( () => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: r, switchLayoutGroup: i} = this.props
          , {projection: a} = e;
        a && (a.scheduleCheckAfterUnmount(),
        r && r.group && r.group.remove(a),
        i && i.deregister && i.deregister(a))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function i1(t) {
    const [e,r] = Bx()
      , i = L.useContext($f);
    return v.jsx(NA, {
        ...t,
        layoutGroup: i,
        switchLayoutGroup: L.useContext(Qx),
        isPresent: e,
        safeToRemove: r
    })
}
const OA = {
    borderRadius: {
        ...po,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: po,
    borderTopRightRadius: po,
    borderBottomLeftRadius: po,
    borderBottomRightRadius: po,
    boxShadow: AA
};
function jA(t, e, r) {
    const i = Tt(t) ? t : Lo(t);
    return i.start(Sh("", i, e, r)),
    i.animation
}
function MA(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
const LA = (t, e) => t.depth - e.depth;
class DA {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        dh(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        fh(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(LA),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function IA(t, e) {
    const r = jn.now()
      , i = ({timestamp: a}) => {
        const l = a - r;
        l >= e && (Lr(i),
        t(l - e))
    }
    ;
    return Ue.read(i, !0),
    () => Lr(i)
}
const o1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , FA = o1.length
  , ky = t => typeof t == "string" ? parseFloat(t) : t
  , Ey = t => typeof t == "number" || ge.test(t);
function VA(t, e, r, i, a, l) {
    a ? (t.opacity = We(0, r.opacity !== void 0 ? r.opacity : 1, BA(i)),
    t.opacityExit = We(e.opacity !== void 0 ? e.opacity : 1, 0, UA(i))) : l && (t.opacity = We(e.opacity !== void 0 ? e.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, i));
    for (let u = 0; u < FA; u++) {
        const d = `border${o1[u]}Radius`;
        let h = Cy(e, d)
          , m = Cy(r, d);
        if (h === void 0 && m === void 0)
            continue;
        h || (h = 0),
        m || (m = 0),
        h === 0 || m === 0 || Ey(h) === Ey(m) ? (t[d] = Math.max(We(ky(h), ky(m), i), 0),
        (On.test(m) || On.test(h)) && (t[d] += "%")) : t[d] = m
    }
    (e.rotate || r.rotate) && (t.rotate = We(e.rotate || 0, r.rotate || 0, i))
}
function Cy(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const BA = a1(0, .5, Cw)
  , UA = a1(.5, .95, qt);
function a1(t, e, r) {
    return i => i < t ? 0 : i > e ? 1 : r(gi(t, e, i))
}
function Ty(t, e) {
    t.min = e.min,
    t.max = e.max
}
function nn(t, e) {
    Ty(t.x, e.x),
    Ty(t.y, e.y)
}
function _y(t, e) {
    t.translate = e.translate,
    t.scale = e.scale,
    t.originPoint = e.originPoint,
    t.origin = e.origin
}
function Py(t, e, r, i, a) {
    return t -= e,
    t = Wl(t, 1 / r, i),
    a !== void 0 && (t = Wl(t, 1 / a, i)),
    t
}
function zA(t, e=0, r=1, i=.5, a, l=t, u=t) {
    if (On.test(e) && (e = parseFloat(e),
    e = We(u.min, u.max, e / 100) - u.min),
    typeof e != "number")
        return;
    let d = We(l.min, l.max, i);
    t === l && (d -= e),
    t.min = Py(t.min, e, r, d, a),
    t.max = Py(t.max, e, r, d, a)
}
function Ry(t, e, [r,i,a], l, u) {
    zA(t, e[r], e[i], e[a], e.scale, l, u)
}
const $A = ["x", "scaleX", "originX"]
  , HA = ["y", "scaleY", "originY"];
function Ay(t, e, r, i) {
    Ry(t.x, e, $A, r ? r.x : void 0, i ? i.x : void 0),
    Ry(t.y, e, HA, r ? r.y : void 0, i ? i.y : void 0)
}
function Ny(t) {
    return t.translate === 0 && t.scale === 1
}
function l1(t) {
    return Ny(t.x) && Ny(t.y)
}
function Oy(t, e) {
    return t.min === e.min && t.max === e.max
}
function qA(t, e) {
    return Oy(t.x, e.x) && Oy(t.y, e.y)
}
function jy(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}
function u1(t, e) {
    return jy(t.x, e.x) && jy(t.y, e.y)
}
function My(t) {
    return Wt(t.x) / Wt(t.y)
}
function Ly(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class WA {
    constructor() {
        this.members = []
    }
    add(e) {
        dh(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (fh(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const r = this.members[this.members.length - 1];
            r && this.promote(r)
        }
    }
    relegate(e) {
        const r = this.members.findIndex(a => e === a);
        if (r === 0)
            return !1;
        let i;
        for (let a = r; a >= 0; a--) {
            const l = this.members[a];
            if (l.isPresent !== !1) {
                i = l;
                break
            }
        }
        return i ? (this.promote(i),
        !0) : !1
    }
    promote(e, r) {
        const i = this.lead;
        if (e !== i && (this.prevLead = i,
        this.lead = e,
        e.show(),
        i)) {
            i.instance && i.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = i,
            r && (e.resumeFrom.preserveOpacity = !0),
            i.snapshot && (e.snapshot = i.snapshot,
            e.snapshot.latestValues = i.animationValues || i.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: a} = e.options;
            a === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {options: r, resumingFrom: i} = e;
            r.onExitComplete && r.onExitComplete(),
            i && i.options.onExitComplete && i.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function KA(t, e, r) {
    let i = "";
    const a = t.x.translate / e.x
      , l = t.y.translate / e.y
      , u = (r == null ? void 0 : r.z) || 0;
    if ((a || l || u) && (i = `translate3d(${a}px, ${l}px, ${u}px) `),
    (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
    r) {
        const {transformPerspective: m, rotate: g, rotateX: y, rotateY: w, skewX: k, skewY: T} = r;
        m && (i = `perspective(${m}px) ${i}`),
        g && (i += `rotate(${g}deg) `),
        y && (i += `rotateX(${y}deg) `),
        w && (i += `rotateY(${w}deg) `),
        k && (i += `skewX(${k}deg) `),
        T && (i += `skewY(${T}deg) `)
    }
    const d = t.x.scale * e.x
      , h = t.y.scale * e.y;
    return (d !== 1 || h !== 1) && (i += `scale(${d}, ${h})`),
    i || "none"
}
const ts = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , So = typeof window < "u" && window.MotionDebug !== void 0
  , Cd = ["", "X", "Y", "Z"]
  , QA = {
    visibility: "hidden"
}
  , Dy = 1e3;
let GA = 0;
function Td(t, e, r, i) {
    const {latestValues: a} = e;
    a[t] && (r[t] = a[t],
    e.setStaticValue(t, 0),
    i && (i[t] = 0))
}
function c1(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: e} = t.options;
    if (!e)
        return;
    const r = vw(e);
    if (window.MotionHasOptimisedAnimation(r, "transform")) {
        const {layout: a, layoutId: l} = t.options;
        window.MotionCancelOptimisedAnimation(r, "transform", Ue, !(a || l))
    }
    const {parent: i} = t;
    i && !i.hasCheckedOptimisedAppear && c1(i)
}
function d1({attachResizeListener: t, defaultParent: e, measureScroll: r, checkIsScrollRoot: i, resetTransform: a}) {
    return class {
        constructor(u={}, d=e == null ? void 0 : e()) {
            this.id = GA++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                So && (ts.totalNodes = ts.resolvedTargetDeltas = ts.recalculatedProjection = 0),
                this.nodes.forEach(JA),
                this.nodes.forEach(r4),
                this.nodes.forEach(s4),
                this.nodes.forEach(ZA),
                So && window.MotionDebug.record(ts)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = u,
            this.root = d ? d.root || d : this,
            this.path = d ? [...d.path, d] : [],
            this.parent = d,
            this.depth = d ? d.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++)
                this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new DA)
        }
        addEventListener(u, d) {
            return this.eventHandlers.has(u) || this.eventHandlers.set(u, new hh),
            this.eventHandlers.get(u).add(d)
        }
        notifyListeners(u, ...d) {
            const h = this.eventHandlers.get(u);
            h && h.notify(...d)
        }
        hasListeners(u) {
            return this.eventHandlers.has(u)
        }
        mount(u, d=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = MA(u),
            this.instance = u;
            const {layoutId: h, layout: m, visualElement: g} = this.options;
            if (g && !g.current && g.mount(u),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            d && (m || h) && (this.isLayoutDirty = !0),
            t) {
                let y;
                const w = () => this.root.updateBlockedByResize = !1;
                t(u, () => {
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = IA(w, 250),
                    Nl.hasAnimatedSinceResize && (Nl.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Fy))
                }
                )
            }
            h && this.root.registerSharedNode(h, this),
            this.options.animate !== !1 && g && (h || m) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: w, hasRelativeTargetChanged: k, layout: T}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const E = this.options.transition || g.getDefaultTransition() || u4
                  , {onLayoutAnimationStart: S, onLayoutAnimationComplete: b} = g.getProps()
                  , P = !this.targetLayout || !u1(this.targetLayout, T) || k
                  , A = !w && k;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || A || w && (P || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(y, A);
                    const M = {
                        ...ah(E, "layout"),
                        onPlay: S,
                        onComplete: b
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (M.delay = 0,
                    M.type = !1),
                    this.startAnimation(M)
                } else
                    w || Fy(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = T
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const u = this.getStack();
            u && u.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Lr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(i4),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: u} = this.options;
            return u && u.getProps().transformTemplate
        }
        willUpdate(u=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && c1(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                y.shouldResetTransform = !0,
                y.updateScroll("snapshot"),
                y.options.layoutRoot && y.willUpdate(!1)
            }
            const {layoutId: d, layout: h} = this.options;
            if (d === void 0 && !h)
                return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            u && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Iy);
                return
            }
            this.isUpdating || this.nodes.forEach(t4),
            this.isUpdating = !1,
            this.nodes.forEach(n4),
            this.nodes.forEach(YA),
            this.nodes.forEach(XA),
            this.clearAllSnapshots();
            const d = jn.now();
            mt.delta = Jn(0, 1e3 / 60, d - mt.timestamp),
            mt.timestamp = d,
            mt.isProcessing = !0,
            gd.update.process(mt),
            gd.preRender.process(mt),
            gd.render.process(mt),
            mt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Xf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(e4),
            this.sharedNodes.forEach(o4)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ue.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ue.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++)
                    this.path[h].updateScroll();
            const u = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Je(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: d} = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, u ? u.layoutBox : void 0)
        }
        updateScroll(u="measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === u && (d = !1),
            d) {
                const h = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: u,
                    isRoot: h,
                    offset: r(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!a)
                return;
            const u = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , d = this.projectionDelta && !l1(this.projectionDelta)
              , h = this.getTransformTemplate()
              , m = h ? h(this.latestValues, "") : void 0
              , g = m !== this.prevTransformTemplateValue;
            u && (d || es(this.latestValues) || g) && (a(this.instance, m),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(u=!0) {
            const d = this.measurePageBox();
            let h = this.removeElementScroll(d);
            return u && (h = this.removeTransform(h)),
            c4(h),
            {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: d} = this.options;
            if (!d)
                return Je();
            const h = d.measureViewportBox();
            if (!(((u = this.scroll) === null || u === void 0 ? void 0 : u.wasRoot) || this.path.some(d4))) {
                const {scroll: g} = this.root;
                g && (Xs(h.x, g.offset.x),
                Xs(h.y, g.offset.y))
            }
            return h
        }
        removeElementScroll(u) {
            var d;
            const h = Je();
            if (nn(h, u),
            !((d = this.scroll) === null || d === void 0) && d.wasRoot)
                return h;
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m]
                  , {scroll: y, options: w} = g;
                g !== this.root && y && w.layoutScroll && (y.wasRoot && nn(h, u),
                Xs(h.x, y.offset.x),
                Xs(h.y, y.offset.y))
            }
            return h
        }
        applyTransform(u, d=!1) {
            const h = Je();
            nn(h, u);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                !d && g.options.layoutScroll && g.scroll && g !== g.root && Js(h, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }),
                es(g.latestValues) && Js(h, g.latestValues)
            }
            return es(this.latestValues) && Js(h, this.latestValues),
            h
        }
        removeTransform(u) {
            const d = Je();
            nn(d, u);
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h];
                if (!m.instance || !es(m.latestValues))
                    continue;
                yf(m.latestValues) && m.updateSnapshot();
                const g = Je()
                  , y = m.measurePageBox();
                nn(g, y),
                Ay(d, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g)
            }
            return es(this.latestValues) && Ay(d, this.latestValues),
            d
        }
        setTargetDelta(u) {
            this.targetDelta = u,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(u) {
            this.options = {
                ...this.options,
                ...u,
                crossfade: u.crossfade !== void 0 ? u.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== mt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(u=!1) {
            var d;
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== h;
            if (!(u || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: w} = this.options;
            if (!(!this.layout || !(y || w))) {
                if (this.resolvedRelativeTargetAt = mt.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const k = this.getClosestProjectingParent();
                    k && k.layout && this.animationProgress !== 1 ? (this.relativeParent = k,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Je(),
                    this.relativeTargetOrigin = Je(),
                    Po(this.relativeTargetOrigin, this.layout.layoutBox, k.layout.layoutBox),
                    nn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Je(),
                    this.targetWithTransforms = Je()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    pA(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nn(this.target, this.layout.layoutBox),
                    n1(this.target, this.targetDelta)) : nn(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const k = this.getClosestProjectingParent();
                        k && !!k.resumingFrom == !!this.resumingFrom && !k.options.layoutScroll && k.target && this.animationProgress !== 1 ? (this.relativeParent = k,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Je(),
                        this.relativeTargetOrigin = Je(),
                        Po(this.relativeTargetOrigin, this.target, k.target),
                        nn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    So && ts.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || yf(this.parent.latestValues) || t1(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var u;
            const d = this.getLead()
              , h = !!this.resumingFrom || this !== d;
            let m = !0;
            if ((this.isProjectionDirty || !((u = this.parent) === null || u === void 0) && u.isProjectionDirty) && (m = !1),
            h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
            this.resolvedRelativeTargetAt === mt.timestamp && (m = !1),
            m)
                return;
            const {layout: g, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(g || y))
                return;
            nn(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x
              , k = this.treeScale.y;
            kA(this.layoutCorrected, this.treeScale, this.path, h),
            d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
            d.targetWithTransforms = Je());
            const {target: T} = d;
            if (!T) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (_y(this.prevProjectionDelta.x, this.projectionDelta.x),
            _y(this.prevProjectionDelta.y, this.projectionDelta.y)),
            _o(this.projectionDelta, this.layoutCorrected, T, this.latestValues),
            (this.treeScale.x !== w || this.treeScale.y !== k || !Ly(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ly(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", T)),
            So && ts.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(u=!0) {
            var d;
            if ((d = this.options.visualElement) === null || d === void 0 || d.scheduleRender(),
            u) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Ys(),
            this.projectionDelta = Ys(),
            this.projectionDeltaWithTransform = Ys()
        }
        setAnimationOrigin(u, d=!1) {
            const h = this.snapshot
              , m = h ? h.latestValues : {}
              , g = {
                ...this.latestValues
            }
              , y = Ys();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !d;
            const w = Je()
              , k = h ? h.source : void 0
              , T = this.layout ? this.layout.source : void 0
              , E = k !== T
              , S = this.getStack()
              , b = !S || S.members.length <= 1
              , P = !!(E && !b && this.options.crossfade === !0 && !this.path.some(l4));
            this.animationProgress = 0;
            let A;
            this.mixTargetDelta = M => {
                const F = M / 1e3;
                Vy(y.x, u.x, F),
                Vy(y.y, u.y, F),
                this.setTargetDelta(y),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Po(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                a4(this.relativeTarget, this.relativeTargetOrigin, w, F),
                A && qA(this.relativeTarget, A) && (this.isProjectionDirty = !1),
                A || (A = Je()),
                nn(A, this.relativeTarget)),
                E && (this.animationValues = g,
                VA(g, m, this.latestValues, F, P, b)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = F
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(u) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Lr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ue.update( () => {
                Nl.hasAnimatedSinceResize = !0,
                this.currentAnimation = jA(0, Dy, {
                    ...u,
                    onUpdate: d => {
                        this.mixTargetDelta(d),
                        u.onUpdate && u.onUpdate(d)
                    }
                    ,
                    onComplete: () => {
                        u.onComplete && u.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const u = this.getStack();
            u && u.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Dy),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const u = this.getLead();
            let {targetWithTransforms: d, target: h, layout: m, latestValues: g} = u;
            if (!(!d || !h || !m)) {
                if (this !== u && this.layout && m && f1(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    h = this.target || Je();
                    const y = Wt(this.layout.layoutBox.x);
                    h.x.min = u.target.x.min,
                    h.x.max = h.x.min + y;
                    const w = Wt(this.layout.layoutBox.y);
                    h.y.min = u.target.y.min,
                    h.y.max = h.y.min + w
                }
                nn(d, h),
                Js(d, g),
                _o(this.projectionDeltaWithTransform, this.layoutCorrected, d, g)
            }
        }
        registerSharedNode(u, d) {
            this.sharedNodes.has(u) || this.sharedNodes.set(u, new WA),
            this.sharedNodes.get(u).add(d);
            const m = d.options.initialPromotionConfig;
            d.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const u = this.getStack();
            return u ? u.lead === this : !0
        }
        getLead() {
            var u;
            const {layoutId: d} = this.options;
            return d ? ((u = this.getStack()) === null || u === void 0 ? void 0 : u.lead) || this : this
        }
        getPrevLead() {
            var u;
            const {layoutId: d} = this.options;
            return d ? (u = this.getStack()) === null || u === void 0 ? void 0 : u.prevLead : void 0
        }
        getStack() {
            const {layoutId: u} = this.options;
            if (u)
                return this.root.sharedNodes.get(u)
        }
        promote({needsReset: u, transition: d, preserveFollowOpacity: h}={}) {
            const m = this.getStack();
            m && m.promote(this, h),
            u && (this.projectionDelta = void 0,
            this.needsReset = !0),
            d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const u = this.getStack();
            return u ? u.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: u} = this.options;
            if (!u)
                return;
            let d = !1;
            const {latestValues: h} = u;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (d = !0),
            !d)
                return;
            const m = {};
            h.z && Td("z", u, m, this.animationValues);
            for (let g = 0; g < Cd.length; g++)
                Td(`rotate${Cd[g]}`, u, m, this.animationValues),
                Td(`skew${Cd[g]}`, u, m, this.animationValues);
            u.render();
            for (const g in m)
                u.setStaticValue(g, m[g]),
                this.animationValues && (this.animationValues[g] = m[g]);
            u.scheduleRender()
        }
        getProjectionStyles(u) {
            var d, h;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return QA;
            const m = {
                visibility: ""
            }
              , g = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                m.opacity = "",
                m.pointerEvents = Rl(u == null ? void 0 : u.pointerEvents) || "",
                m.transform = g ? g(this.latestValues, "") : "none",
                m;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const E = {};
                return this.options.layoutId && (E.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                E.pointerEvents = Rl(u == null ? void 0 : u.pointerEvents) || ""),
                this.hasProjected && !es(this.latestValues) && (E.transform = g ? g({}, "") : "none",
                this.hasProjected = !1),
                E
            }
            const w = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(),
            m.transform = KA(this.projectionDeltaWithTransform, this.treeScale, w),
            g && (m.transform = g(w, m.transform));
            const {x: k, y: T} = this.projectionDelta;
            m.transformOrigin = `${k.origin * 100}% ${T.origin * 100}% 0`,
            y.animationValues ? m.opacity = y === this ? (h = (d = w.opacity) !== null && d !== void 0 ? d : this.latestValues.opacity) !== null && h !== void 0 ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : m.opacity = y === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
            for (const E in Ul) {
                if (w[E] === void 0)
                    continue;
                const {correct: S, applyTo: b} = Ul[E]
                  , P = m.transform === "none" ? w[E] : S(w[E], y);
                if (b) {
                    const A = b.length;
                    for (let M = 0; M < A; M++)
                        m[b[M]] = P
                } else
                    m[E] = P
            }
            return this.options.layoutId && (m.pointerEvents = y === this ? Rl(u == null ? void 0 : u.pointerEvents) || "" : "none"),
            m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(u => {
                var d;
                return (d = u.currentAnimation) === null || d === void 0 ? void 0 : d.stop()
            }
            ),
            this.root.nodes.forEach(Iy),
            this.root.sharedNodes.clear()
        }
    }
}
function YA(t) {
    t.updateLayout()
}
function XA(t) {
    var e;
    const r = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
        const {layoutBox: i, measuredBox: a} = t.layout
          , {animationType: l} = t.options
          , u = r.source !== t.layout.source;
        l === "size" ? rn(y => {
            const w = u ? r.measuredBox[y] : r.layoutBox[y]
              , k = Wt(w);
            w.min = i[y].min,
            w.max = w.min + k
        }
        ) : f1(l, r.layoutBox, i) && rn(y => {
            const w = u ? r.measuredBox[y] : r.layoutBox[y]
              , k = Wt(i[y]);
            w.max = w.min + k,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[y].max = t.relativeTarget[y].min + k)
        }
        );
        const d = Ys();
        _o(d, i, r.layoutBox);
        const h = Ys();
        u ? _o(h, t.applyTransform(a, !0), r.measuredBox) : _o(h, i, r.layoutBox);
        const m = !l1(d);
        let g = !1;
        if (!t.resumeFrom) {
            const y = t.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {snapshot: w, layout: k} = y;
                if (w && k) {
                    const T = Je();
                    Po(T, r.layoutBox, w.layoutBox);
                    const E = Je();
                    Po(E, i, k.layoutBox),
                    u1(T, E) || (g = !0),
                    y.options.layoutRoot && (t.relativeTarget = E,
                    t.relativeTargetOrigin = T,
                    t.relativeParent = y)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: r,
            delta: h,
            layoutDelta: d,
            hasLayoutChanged: m,
            hasRelativeTargetChanged: g
        })
    } else if (t.isLead()) {
        const {onExitComplete: i} = t.options;
        i && i()
    }
    t.options.transition = void 0
}
function JA(t) {
    So && ts.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function ZA(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function e4(t) {
    t.clearSnapshot()
}
function Iy(t) {
    t.clearMeasurements()
}
function t4(t) {
    t.isLayoutDirty = !1
}
function n4(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function Fy(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function r4(t) {
    t.resolveTargetDelta()
}
function s4(t) {
    t.calcProjection()
}
function i4(t) {
    t.resetSkewAndRotation()
}
function o4(t) {
    t.removeLeadSnapshot()
}
function Vy(t, e, r) {
    t.translate = We(e.translate, 0, r),
    t.scale = We(e.scale, 1, r),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function By(t, e, r, i) {
    t.min = We(e.min, r.min, i),
    t.max = We(e.max, r.max, i)
}
function a4(t, e, r, i) {
    By(t.x, e.x, r.x, i),
    By(t.y, e.y, r.y, i)
}
function l4(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const u4 = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Uy = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , zy = Uy("applewebkit/") && !Uy("chrome/") ? Math.round : qt;
function $y(t) {
    t.min = zy(t.min),
    t.max = zy(t.max)
}
function c4(t) {
    $y(t.x),
    $y(t.y)
}
function f1(t, e, r) {
    return t === "position" || t === "preserve-aspect" && !hA(My(e), My(r), .2)
}
function d4(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const f4 = d1({
    attachResizeListener: (t, e) => Io(t, "resize", e),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , _d = {
    current: void 0
}
  , h1 = d1({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!_d.current) {
            const t = new f4({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            _d.current = t
        }
        return _d.current
    }
    ,
    resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , h4 = {
    pan: {
        Feature: RA
    },
    drag: {
        Feature: PA,
        ProjectionNode: h1,
        MeasureLayout: i1
    }
};
function Hy(t, e, r) {
    const {props: i} = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", r === "Start");
    const a = "onHover" + r
      , l = i[a];
    l && Ue.postRender( () => l(e, Zo(e)))
}
class p4 extends Fr {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = hP(e, r => (Hy(this.node, r, "Start"),
        i => Hy(this.node, i, "End"))))
    }
    unmount() {}
}
class m4 extends Fr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Jo(Io(this.node.current, "focus", () => this.onFocus()), Io(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function qy(t, e, r) {
    const {props: i} = t;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", r === "Start");
    const a = "onTap" + (r === "End" ? "" : r)
      , l = i[a];
    l && Ue.postRender( () => l(e, Zo(e)))
}
class g4 extends Fr {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = yP(e, r => (qy(this.node, r, "Start"),
        (i, {success: a}) => qy(this.node, i, a ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const xf = new WeakMap
  , Pd = new WeakMap
  , y4 = t => {
    const e = xf.get(t.target);
    e && e(t)
}
  , v4 = t => {
    t.forEach(y4)
}
;
function x4({root: t, ...e}) {
    const r = t || document;
    Pd.has(r) || Pd.set(r, {});
    const i = Pd.get(r)
      , a = JSON.stringify(e);
    return i[a] || (i[a] = new IntersectionObserver(v4,{
        root: t,
        ...e
    })),
    i[a]
}
function w4(t, e, r) {
    const i = x4(e);
    return xf.set(t, r),
    i.observe(t),
    () => {
        xf.delete(t),
        i.unobserve(t)
    }
}
const b4 = {
    some: 0,
    all: 1
};
class S4 extends Fr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: r, margin: i, amount: a="some", once: l} = e
          , u = {
            root: r ? r.current : void 0,
            rootMargin: i,
            threshold: typeof a == "number" ? a : b4[a]
        }
          , d = h => {
            const {isIntersecting: m} = h;
            if (this.isInView === m || (this.isInView = m,
            l && !m && this.hasEnteredView))
                return;
            m && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {onViewportEnter: g, onViewportLeave: y} = this.node.getProps()
              , w = m ? g : y;
            w && w(h)
        }
        ;
        return w4(this.node.current, u, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: r} = this.node;
        ["amount", "margin", "root"].some(k4(e, r)) && this.startObserver()
    }
    unmount() {}
}
function k4({viewport: t={}}, {viewport: e={}}={}) {
    return r => t[r] !== e[r]
}
const E4 = {
    inView: {
        Feature: S4
    },
    tap: {
        Feature: g4
    },
    focus: {
        Feature: m4
    },
    hover: {
        Feature: p4
    }
}
  , C4 = {
    layout: {
        ProjectionNode: h1,
        MeasureLayout: i1
    }
}
  , wf = {
    current: null
}
  , p1 = {
    current: !1
};
function T4() {
    if (p1.current = !0,
    !!Wf)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = () => wf.current = t.matches;
            t.addListener(e),
            e()
        } else
            wf.current = !1
}
const _4 = [...Vw, Ct, Dr]
  , P4 = t => _4.find(Fw(t))
  , Wy = new WeakMap;
function R4(t, e, r) {
    for (const i in e) {
        const a = e[i]
          , l = r[i];
        if (Tt(a))
            t.addValue(i, a);
        else if (Tt(l))
            t.addValue(i, Lo(a, {
                owner: t
            }));
        else if (l !== a)
            if (t.hasValue(i)) {
                const u = t.getValue(i);
                u.liveStyle === !0 ? u.jump(a) : u.hasAnimated || u.set(a)
            } else {
                const u = t.getStaticValue(i);
                t.addValue(i, Lo(u !== void 0 ? u : a, {
                    owner: t
                }))
            }
    }
    for (const i in r)
        e[i] === void 0 && t.removeValue(i);
    return e
}
const Ky = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class A4 {
    scrapeMotionValuesFromProps(e, r, i) {
        return {}
    }
    constructor({parent: e, props: r, presenceContext: i, reducedMotionConfig: a, blockInitialAnimation: l, visualState: u}, d={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = xh,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const k = jn.now();
            this.renderScheduledAt < k && (this.renderScheduledAt = k,
            Ue.render(this.render, !1, !0))
        }
        ;
        const {latestValues: h, renderState: m, onUpdate: g} = u;
        this.onUpdate = g,
        this.latestValues = h,
        this.baseTarget = {
            ...h
        },
        this.initialValues = r.initial ? {
            ...h
        } : {},
        this.renderState = m,
        this.parent = e,
        this.props = r,
        this.presenceContext = i,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = a,
        this.options = d,
        this.blockInitialAnimation = !!l,
        this.isControllingVariants = iu(r),
        this.isVariantNode = Wx(r),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: y, ...w} = this.scrapeMotionValuesFromProps(r, {}, this);
        for (const k in w) {
            const T = w[k];
            h[k] !== void 0 && Tt(T) && T.set(h[k], !1)
        }
    }
    mount(e) {
        this.current = e,
        Wy.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (r, i) => this.bindToMotionValue(i, r)),
        p1.current || T4(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : wf.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Wy.delete(this.current),
        this.projection && this.projection.unmount(),
        Lr(this.notifyUpdate),
        Lr(this.render),
        this.valueSubscriptions.forEach(e => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features) {
            const r = this.features[e];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, r) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const i = bs.has(e)
          , a = r.on("change", d => {
            this.latestValues[e] = d,
            this.props.onUpdate && Ue.preRender(this.notifyUpdate),
            i && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , l = r.on("renderRequest", this.scheduleRender);
        let u;
        window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, e, r)),
        this.valueSubscriptions.set(e, () => {
            a(),
            l(),
            u && u(),
            r.owner && r.stop()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in yi) {
            const r = yi[e];
            if (!r)
                continue;
            const {isEnabled: i, Feature: a} = r;
            if (!this.features[e] && a && i(this.props) && (this.features[e] = new a(this)),
            this.features[e]) {
                const l = this.features[e];
                l.isMounted ? l.update() : (l.mount(),
                l.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Je()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, r) {
        this.latestValues[e] = r
    }
    update(e, r) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = r;
        for (let i = 0; i < Ky.length; i++) {
            const a = Ky[i];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](),
            delete this.propEventSubscriptions[a]);
            const l = "on" + a
              , u = e[l];
            u && (this.propEventSubscriptions[a] = this.on(a, u))
        }
        this.prevMotionValues = R4(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const r = this.getClosestVariantNode();
        if (r)
            return r.variantChildren && r.variantChildren.add(e),
            () => r.variantChildren.delete(e)
    }
    addValue(e, r) {
        const i = this.values.get(e);
        r !== i && (i && this.removeValue(e),
        this.bindToMotionValue(e, r),
        this.values.set(e, r),
        this.latestValues[e] = r.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const r = this.valueSubscriptions.get(e);
        r && (r(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, r) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let i = this.values.get(e);
        return i === void 0 && r !== void 0 && (i = Lo(r === null ? void 0 : r, {
            owner: this
        }),
        this.addValue(e, i)),
        i
    }
    readValue(e, r) {
        var i;
        let a = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
        return a != null && (typeof a == "string" && (Dw(a) || _w(a)) ? a = parseFloat(a) : !P4(a) && Dr.test(r) && (a = jw(e, r)),
        this.setBaseTarget(e, Tt(a) ? a.get() : a)),
        Tt(a) ? a.get() : a
    }
    setBaseTarget(e, r) {
        this.baseTarget[e] = r
    }
    getBaseTarget(e) {
        var r;
        const {initial: i} = this.props;
        let a;
        if (typeof i == "string" || typeof i == "object") {
            const u = Zf(this.props, i, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
            u && (a = u[e])
        }
        if (i && a !== void 0)
            return a;
        const l = this.getBaseTargetFromProps(this.props, e);
        return l !== void 0 && !Tt(l) ? l : this.initialValues[e] !== void 0 && a === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, r) {
        return this.events[e] || (this.events[e] = new hh),
        this.events[e].add(r)
    }
    notify(e, ...r) {
        this.events[e] && this.events[e].notify(...r)
    }
}
class m1 extends A4 {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Bw
    }
    sortInstanceNodePosition(e, r) {
        return e.compareDocumentPosition(r) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, r) {
        return e.style ? e.style[r] : void 0
    }
    removeValueFromRenderState(e, {vars: r, style: i}) {
        delete r[e],
        delete i[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        Tt(e) && (this.childSubscription = e.on("change", r => {
            this.current && (this.current.textContent = `${r}`)
        }
        ))
    }
}
function N4(t) {
    return window.getComputedStyle(t)
}
class O4 extends m1 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = tw
    }
    readValueFromInstance(e, r) {
        if (bs.has(r)) {
            const i = vh(r);
            return i && i.default || 0
        } else {
            const i = N4(e)
              , a = (Jx(r) ? i.getPropertyValue(r) : i[r]) || 0;
            return typeof a == "string" ? a.trim() : a
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: r}) {
        return r1(e, r)
    }
    build(e, r, i) {
        nh(e, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return oh(e, r, i)
    }
}
class j4 extends m1 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Je
    }
    getBaseTargetFromProps(e, r) {
        return e[r]
    }
    readValueFromInstance(e, r) {
        if (bs.has(r)) {
            const i = vh(r);
            return i && i.default || 0
        }
        return r = nw.has(r) ? r : Yf(r),
        e.getAttribute(r)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return iw(e, r, i)
    }
    build(e, r, i) {
        rh(e, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, r, i, a) {
        rw(e, r, i, a)
    }
    mount(e) {
        this.isSVGTag = ih(e.tagName),
        super.mount(e)
    }
}
const M4 = (t, e) => Jf(t) ? new j4(e) : new O4(e,{
    allowProjection: t !== L.Fragment
})
  , L4 = aP({
    ...sA,
    ...E4,
    ...h4,
    ...C4
}, M4)
  , fe = S_(L4)
  , D4 = {
    some: 0,
    all: 1
};
function I4(t, e, {root: r, margin: i, amount: a="some"}={}) {
    const l = hw(t)
      , u = new WeakMap
      , d = m => {
        m.forEach(g => {
            const y = u.get(g.target);
            if (g.isIntersecting !== !!y)
                if (g.isIntersecting) {
                    const w = e(g);
                    typeof w == "function" ? u.set(g.target, w) : h.unobserve(g.target)
                } else
                    typeof y == "function" && (y(g),
                    u.delete(g.target))
        }
        )
    }
      , h = new IntersectionObserver(d,{
        root: r,
        rootMargin: i,
        threshold: typeof a == "number" ? a : D4[a]
    });
    return l.forEach(m => h.observe(m)),
    () => h.disconnect()
}
function F4(t, {root: e, margin: r, amount: i, once: a=!1}={}) {
    const [l,u] = L.useState(!1);
    return L.useEffect( () => {
        if (!t.current || a && l)
            return;
        const d = () => (u(!0),
        a ? void 0 : () => u(!1))
          , h = {
            root: e && e.current || void 0,
            margin: r,
            amount: i
        };
        return I4(t.current, d, h)
    }
    , [e, t, r, a, i]),
    l
}
const V4 = [{
    icon: Kl,
    value: "20k+",
    label: "Players Managed"
}, {
    icon: tS,
    value: "Always Open",
    label: "For Staff Positions"
}, {
    icon: $o,
    value: "Multi-Server",
    label: "Experience"
}];
function B4() {
    const t = Array.from({
        length: 18
    }, (e, r) => r);
    return v.jsx("div", {
        className: "absolute inset-0 overflow-hidden pointer-events-none",
        children: t.map(e => v.jsx(fe.div, {
            className: "absolute rounded-full",
            style: {
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: e % 3 === 0 ? "rgba(167,139,250,0.6)" : e % 3 === 1 ? "rgba(96,165,250,0.5)" : "rgba(52,211,153,0.4)"
            },
            animate: {
                y: [0, -30, 0],
                opacity: [.2, .8, .2],
                scale: [1, 1.4, 1]
            },
            transition: {
                duration: 4 + e % 5,
                repeat: 1 / 0,
                delay: e * .4 % 5,
                ease: "easeInOut"
            }
        }, e))
    })
}
function U4() {
    const t = () => {
        const i = document.getElementById("server-section");
        i && i.scrollIntoView({
            behavior: "smooth"
        })
    }
      , e = () => {
        const i = document.getElementById("vouches-section");
        i && i.scrollIntoView({
            behavior: "smooth"
        })
    }
      , r = () => {
        const i = document.getElementById("leave-a-vouch");
        i && i.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return v.jsxs("section", {
        className: "relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-12 overflow-hidden",
        children: [v.jsx(B4, {}), v.jsx("div", {
            className: "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] rounded-full pointer-events-none",
            style: {
                background: "radial-gradient(ellipse, rgba(109,40,217,0.13) 0%, transparent 65%)",
                filter: "blur(60px)"
            }
        }), v.jsx("div", {
            className: "absolute bottom-0 right-0 w-[40vw] h-[40vh] rounded-full pointer-events-none",
            style: {
                background: "radial-gradient(ellipse, rgba(30,80,200,0.1) 0%, transparent 65%)",
                filter: "blur(80px)"
            }
        }), v.jsxs(fe.div, {
            initial: {
                opacity: 0,
                y: -12
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .6,
                delay: .1
            },
            className: "mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase",
            style: {
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.25)",
                color: "rgba(196,181,253,0.85)"
            },
            children: [v.jsx("span", {
                className: "w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"
            }), "Minecraft Staff Portfolio"]
        }), v.jsx(fe.h1, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .8,
                delay: .2,
                ease: [.25, 1, .35, 1]
            },
            className: "font-display text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 max-w-4xl",
            style: {
                background: "linear-gradient(135deg, #e2d9f3 0%, #c4b5fd 30%, #93c5fd 65%, #6ee7b7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 40px rgba(139,92,246,0.2))"
            },
            children: "Professional Minecraft Staff Experience"
        }), v.jsx(fe.div, {
            initial: {
                opacity: 0,
                y: 16
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .7,
                delay: .35
            },
            className: "flex flex-wrap justify-center gap-3 sm:gap-4 mb-10",
            children: V4.map( ({icon: i, value: a, label: l}, u) => v.jsxs(fe.div, {
                initial: {
                    opacity: 0,
                    scale: .9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: .5,
                    delay: .4 + u * .1
                },
                className: "flex items-center gap-2.5 px-4 py-2.5 rounded-xl",
                style: {
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)"
                },
                children: [v.jsx("div", {
                    className: "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0",
                    style: {
                        background: "rgba(139,92,246,0.15)",
                        border: "1px solid rgba(139,92,246,0.2)"
                    },
                    children: v.jsx(i, {
                        className: "w-3.5 h-3.5 text-violet-400"
                    })
                }), v.jsxs("div", {
                    className: "text-left",
                    children: [v.jsx("div", {
                        className: "text-xs font-bold text-white/90 font-display tracking-wide",
                        children: a
                    }), v.jsx("div", {
                        className: "text-[10px] text-white/40 leading-tight",
                        children: l
                    })]
                })]
            }, l))
        }), v.jsxs(fe.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .8,
                delay: .55
            },
            className: "relative max-w-2xl w-full mb-10 p-6 sm:p-7 rounded-2xl text-center",
            style: {
                background: "linear-gradient(135deg, rgba(22,22,42,0.9) 0%, rgba(14,14,28,0.95) 100%)",
                border: "1px solid rgba(139,92,246,0.15)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
            },
            children: [v.jsx("div", {
                className: "absolute top-0 left-0 right-0 h-px rounded-t-2xl",
                style: {
                    background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)"
                }
            }), v.jsxs("div", {
                className: "flex items-center justify-center gap-2 mb-3",
                children: [v.jsx("div", {
                    className: "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-display",
                    style: {
                        background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(96,165,250,0.2))",
                        border: "1px solid rgba(139,92,246,0.3)",
                        color: "rgba(196,181,253,0.9)"
                    },
                    children: "S"
                }), v.jsx("span", {
                    className: "text-sm font-semibold text-white/70 font-display tracking-wider",
                    children: "Sxuq"
                }), v.jsx("span", {
                    className: "px-2 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider",
                    style: {
                        background: "rgba(139,92,246,0.15)",
                        color: "rgba(196,181,253,0.8)",
                        border: "1px solid rgba(139,92,246,0.2)"
                    },
                    children: "Staff Member"
                })]
            }), v.jsxs("p", {
                className: "text-sm sm:text-base text-white/50 leading-relaxed font-body font-light",
                children: ["Hey, I'm ", v.jsx("span", {
                    className: "text-violet-300/90 font-medium",
                    children: "Sxuq"
                }), " — a 14-year-old experienced Minecraft staff member with experience across multiple servers' Passionate about moderation, helping servers' grow, and creating positive player experiences."]
            })]
        }), v.jsxs("div", {
            className: "flex flex-wrap justify-center gap-3",
            children: [v.jsxs(fe.button, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    delay: .7
                },
                onClick: t,
                whileHover: {
                    scale: 1.04
                },
                whileTap: {
                    scale: .97
                },
                className: "group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold font-display tracking-wide transition-all duration-300",
                style: {
                    background: "linear-gradient(135deg, rgba(139,92,246,0.25) 0%, rgba(99,102,241,0.2) 100%)",
                    border: "1px solid rgba(167,139,250,0.35)",
                    color: "rgba(221,214,254,0.9)",
                    boxShadow: "0 4px 20px rgba(139,92,246,0.15)"
                },
                onMouseEnter: i => {
                    i.currentTarget.style.boxShadow = "0 6px 28px rgba(139,92,246,0.3)",
                    i.currentTarget.style.borderColor = "rgba(167,139,250,0.55)"
                }
                ,
                onMouseLeave: i => {
                    i.currentTarget.style.boxShadow = "0 4px 20px rgba(139,92,246,0.15)",
                    i.currentTarget.style.borderColor = "rgba(167,139,250,0.35)"
                }
                ,
                children: ["View Experience", v.jsx(fe.div, {
                    animate: {
                        y: [0, 3, 0]
                    },
                    transition: {
                        duration: 1.5,
                        repeat: 1 / 0,
                        ease: "easeInOut"
                    },
                    children: v.jsx(B2, {
                        className: "w-4 h-4"
                    })
                })]
            }), v.jsxs(fe.button, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    delay: .78
                },
                onClick: e,
                whileHover: {
                    scale: 1.04
                },
                whileTap: {
                    scale: .97
                },
                className: "group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold font-display tracking-wide transition-all duration-300",
                style: {
                    background: "linear-gradient(135deg, rgba(250,204,21,0.18) 0%, rgba(248,122,11,0.15) 100%)",
                    border: "1px solid rgba(250,204,21,0.35)",
                    color: "rgba(253,224,71,0.9)",
                    boxShadow: "0 4px 20px rgba(250,204,21,0.12)"
                },
                onMouseEnter: i => {
                    i.currentTarget.style.boxShadow = "0 6px 28px rgba(250,204,21,0.28)",
                    i.currentTarget.style.borderColor = "rgba(250,204,21,0.55)"
                }
                ,
                onMouseLeave: i => {
                    i.currentTarget.style.boxShadow = "0 4px 20px rgba(250,204,21,0.12)",
                    i.currentTarget.style.borderColor = "rgba(250,204,21,0.35)"
                }
                ,
                children: [v.jsx(fi, {
                    className: "w-4 h-4"
                }), "Vouches & Proof"]
            }), v.jsxs(fe.button, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    delay: .86
                },
                onClick: r,
                whileHover: {
                    scale: 1.04
                },
                whileTap: {
                    scale: .97
                },
                className: "group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold font-display tracking-wide transition-all duration-300",
                style: {
                    background: "linear-gradient(135deg, rgba(244,63,94,0.22) 0%, rgba(236,72,153,0.18) 100%)",
                    border: "1px solid rgba(244,63,94,0.4)",
                    color: "rgba(253,164,175,0.95)",
                    boxShadow: "0 4px 20px rgba(244,63,94,0.18)"
                },
                onMouseEnter: i => {
                    i.currentTarget.style.boxShadow = "0 6px 28px rgba(244,63,94,0.35)",
                    i.currentTarget.style.borderColor = "rgba(244,63,94,0.6)"
                }
                ,
                onMouseLeave: i => {
                    i.currentTarget.style.boxShadow = "0 4px 20px rgba(244,63,94,0.18)",
                    i.currentTarget.style.borderColor = "rgba(244,63,94,0.4)"
                }
                ,
                children: [v.jsx(Rd, {
                    className: "w-4 h-4",
                    fill: "rgba(244,63,94,0.8)"
                }), "Leave a Vouch"]
            })]
        })]
    })
}
const z4 = [{
    name: "Moderation",
    pct: 92,
    color: "#a78bfa"
}, {
    name: "Leadership",
    pct: 92,
    color: "#818cf8"
}, {
    name: "Staff Management",
    pct: 87,
    color: "#f87171"
}, {
    name: "Communication",
    pct: 93,
    color: "#60a5fa"
}, {
    name: "Community Support",
    pct: 87,
    color: "#34d399"
}, {
    name: "Problem Solving",
    pct: 86,
    color: "#a78bfa"
}, {
    name: "Ticket Handling",
    pct: 88,
    color: "#60a5fa"
}, {
    name: "Conflict Resolution",
    pct: 88,
    color: "#818cf8"
}, {
    name: "Event Hosting",
    pct: 89,
    color: "#f472b6"
}, {
    name: "Anti-Cheat Knowledge",
    pct: 85,
    color: "#34d399"
}];
function $4({skill: t, index: e, triggered: r}) {
    const [i,a] = L.useState(!1);
    return v.jsxs(fe.div, {
        initial: {
            opacity: 0,
            x: -16
        },
        animate: r ? {
            opacity: 1,
            x: 0
        } : {},
        transition: {
            duration: .5,
            delay: e * .07,
            ease: [.25, 1, .35, 1]
        },
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        className: "group",
        children: [v.jsxs("div", {
            className: "flex justify-between items-center mb-1.5",
            children: [v.jsx("span", {
                className: "text-xs sm:text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors duration-200",
                children: t.name
            }), v.jsxs(fe.span, {
                className: "text-xs font-bold font-display tabular-nums",
                style: {
                    color: t.color
                },
                animate: r ? {
                    opacity: 1
                } : {
                    opacity: 0
                },
                transition: {
                    duration: .4,
                    delay: e * .07 + .3
                },
                children: [t.pct, "%"]
            })]
        }), v.jsxs("div", {
            className: "relative h-2 rounded-full overflow-hidden",
            style: {
                background: "rgba(255,255,255,0.06)"
            },
            children: [v.jsx(fe.div, {
                className: "absolute inset-y-0 left-0 rounded-full",
                style: {
                    background: `linear-gradient(90deg, ${t.color}99, ${t.color})`,
                    boxShadow: i ? `0 0 10px ${t.color}88` : `0 0 4px ${t.color}44`,
                    transition: "box-shadow 0.3s ease"
                },
                initial: {
                    width: "0%"
                },
                animate: r ? {
                    width: `${t.pct}%`
                } : {
                    width: "0%"
                },
                transition: {
                    duration: 1,
                    delay: e * .07 + .2,
                    ease: [.25, 1, .35, 1]
                }
            }), r && v.jsx(fe.div, {
                className: "absolute inset-y-0 w-8 rounded-full",
                style: {
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                    left: `${t.pct - 8}%`
                },
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: [0, 1, 0]
                },
                transition: {
                    duration: .6,
                    delay: e * .07 + .9
                }
            })]
        })]
    })
}
function H4() {
    const t = L.useRef(null)
      , e = F4(t, {
        once: !0,
        margin: "-80px"
    });
    return v.jsxs("section", {
        ref: t,
        className: "relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
        children: [v.jsxs(fe.div, {
            className: "text-center mb-10",
            initial: {
                opacity: 0,
                y: 16
            },
            animate: e ? {
                opacity: 1,
                y: 0
            } : {},
            transition: {
                duration: .6,
                ease: [.25, 1, .35, 1]
            },
            children: [v.jsxs("div", {
                className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase mb-4",
                style: {
                    background: "rgba(139,92,246,0.1)",
                    border: "1px solid rgba(139,92,246,0.22)",
                    color: "rgba(196,181,253,0.8)"
                },
                children: [v.jsx("span", {
                    className: "w-1.5 h-1.5 rounded-full bg-violet-400"
                }), "Skills & Experience"]
            }), v.jsx("h2", {
                className: "font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight",
                style: {
                    background: "linear-gradient(120deg, #c4b5fd 0%, #a5b4fc 50%, #93c5fd 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                },
                children: "Core Competencies"
            }), v.jsx("p", {
                className: "mt-3 text-sm text-white/35 max-w-md mx-auto font-light",
                children: "Proficiency levels refined through real-world moderation and staff experience."
            })]
        }), v.jsxs(fe.div, {
            className: "relative p-6 sm:p-8 rounded-2xl",
            style: {
                background: "linear-gradient(160deg, rgba(22,22,42,0.9) 0%, rgba(14,14,28,0.95) 100%)",
                border: "1px solid rgba(139,92,246,0.12)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)"
            },
            children: [v.jsx("div", {
                className: "absolute top-0 left-0 right-0 h-px rounded-t-2xl",
                style: {
                    background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.25), transparent)"
                }
            }), v.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5",
                children: z4.map( (r, i) => v.jsx($4, {
                    skill: r,
                    index: i,
                    triggered: e
                }, r.name))
            })]
        })]
    })
}
const q4 = ["All", "Owner", "Co-Owner", "Administrator", "Moderator", "Jr Mod", "Helper"]
  , Qy = {
    "Staff Management": ["Staff Manager", "SMA"],
    "Community Management": ["Community Manager", "CMA"],
    "General Management": ["Staff Manager", "Community Manager", "Manager"],
    "Media Management": ["MMA"],
    "Senior Moderator": ["Sr Mod"]
}
  , gs = {
    Owner: {
        border: "rgba(250,204,21,0.38)",
        borderHover: "rgba(250,204,21,0.65)",
        glow: "rgba(250,204,21,0.18)",
        glowHover: "rgba(250,204,21,0.38)",
        iconAccent: "rgba(250,204,21,0.16)",
        badge: "bg-yellow-400/12 text-yellow-300/85 border-yellow-400/35"
    },
    "Co-Owner": {
        border: "rgba(202,138,4,0.40)",
        borderHover: "rgba(202,138,4,0.68)",
        glow: "rgba(202,138,4,0.18)",
        glowHover: "rgba(202,138,4,0.38)",
        iconAccent: "rgba(202,138,4,0.16)",
        badge: "bg-yellow-600/12 text-yellow-500/90 border-yellow-600/40"
    },
    Overseer: {
        border: "rgba(255,236,81,0.38)",
        borderHover: "rgba(255,236,81,0.65)",
        glow: "rgba(255,236,81,0.18)",
        glowHover: "rgba(255,236,81,0.38)",
        iconAccent: "rgba(255,236,81,0.16)",
        badge: "bg-[#ffec51]/12 text-[#ffec51]/90 border-[#ffec51]/40"
    },
    "Staff Manager": {
        border: "rgba(235,18,255,0.38)",
        borderHover: "rgba(235,18,255,0.65)",
        glow: "rgba(235,18,255,0.18)",
        glowHover: "rgba(235,18,255,0.38)",
        iconAccent: "rgba(235,18,255,0.16)",
        badge: "bg-fuchsia-500/12 text-fuchsia-300/90 border-fuchsia-500/40"
    },
    SMA: {
        border: "rgba(232,121,249,0.35)",
        borderHover: "rgba(232,121,249,0.62)",
        glow: "rgba(232,121,249,0.16)",
        glowHover: "rgba(232,121,249,0.35)",
        iconAccent: "rgba(232,121,249,0.14)",
        badge: "bg-fuchsia-300/12 text-fuchsia-200/85 border-fuchsia-300/35"
    },
    "Community Manager": {
        border: "rgba(192,132,252,0.38)",
        borderHover: "rgba(192,132,252,0.65)",
        glow: "rgba(192,132,252,0.18)",
        glowHover: "rgba(192,132,252,0.38)",
        iconAccent: "rgba(192,132,252,0.16)",
        badge: "bg-purple-300/12 text-purple-300/90 border-purple-300/40"
    },
    CMA: {
        border: "rgba(168,85,247,0.38)",
        borderHover: "rgba(168,85,247,0.65)",
        glow: "rgba(168,85,247,0.18)",
        glowHover: "rgba(168,85,247,0.38)",
        iconAccent: "rgba(168,85,247,0.16)",
        badge: "bg-purple-500/12 text-purple-500/90 border-purple-500/40"
    },
    MMA: {
        border: "rgba(219,39,119,0.38)",
        borderHover: "rgba(219,39,119,0.65)",
        glow: "rgba(219,39,119,0.18)",
        glowHover: "rgba(219,39,119,0.38)",
        iconAccent: "rgba(219,39,119,0.16)",
        badge: "bg-pink-700/12 text-pink-400/90 border-pink-700/40"
    },
    Recruiter: {
        border: "rgba(248,113,113,0.38)",
        borderHover: "rgba(248,113,113,0.65)",
        glow: "rgba(248,113,113,0.18)",
        glowHover: "rgba(248,113,113,0.38)",
        iconAccent: "rgba(248,113,113,0.16)",
        badge: "bg-red-400/12 text-red-300/85 border-red-400/35"
    },
    Administrator: {
        border: "rgba(255,23,31,0.38)",
        borderHover: "rgba(255,23,31,0.65)",
        glow: "rgba(255,23,31,0.18)",
        glowHover: "rgba(255,23,31,0.38)",
        iconAccent: "rgba(255,23,31,0.16)",
        badge: "bg-red-500/12 text-red-400/90 border-red-500/40"
    },
    Admin: {
        border: "rgba(219,56,24,0.40)",
        borderHover: "rgba(219,56,24,0.68)",
        glow: "rgba(219,56,24,0.18)",
        glowHover: "rgba(219,56,24,0.38)",
        iconAccent: "rgba(219,56,24,0.16)",
        badge: "bg-[#DB3818]/12 text-[#DB3818]/90 border-[#DB3818]/40"
    },
    "Sr Mod": {
        border: "rgba(248,122,11,0.40)",
        borderHover: "rgba(248,122,11,0.68)",
        glow: "rgba(248,122,11,0.18)",
        glowHover: "rgba(248,122,11,0.38)",
        iconAccent: "rgba(248,122,11,0.16)",
        badge: "bg-[#f87a0b]/12 text-[#f87a0b]/90 border-[#f87a0b]/40"
    },
    Moderator: {
        border: "rgba(34,211,238,0.35)",
        borderHover: "rgba(34,211,238,0.62)",
        glow: "rgba(34,211,238,0.16)",
        glowHover: "rgba(34,211,238,0.35)",
        iconAccent: "rgba(34,211,238,0.14)",
        badge: "bg-cyan-400/12 text-cyan-300/85 border-cyan-400/35"
    },
    Helper: {
        border: "rgba(134,239,172,0.38)",
        borderHover: "rgba(134,239,172,0.65)",
        glow: "rgba(134,239,172,0.18)",
        glowHover: "rgba(134,239,172,0.38)",
        iconAccent: "rgba(134,239,172,0.16)",
        badge: "bg-green-300/12 text-green-300/90 border-green-300/35"
    },
    "Jr Mod": {
        border: "rgba(125,211,252,0.35)",
        borderHover: "rgba(125,211,252,0.62)",
        glow: "rgba(125,211,252,0.16)",
        glowHover: "rgba(125,211,252,0.35)",
        iconAccent: "rgba(125,211,252,0.14)",
        badge: "bg-sky-400/12 text-sky-300/85 border-sky-400/35"
    },
    Manager: {
        border: "rgba(99,102,241,0.38)",
        borderHover: "rgba(99,102,241,0.65)",
        glow: "rgba(99,102,241,0.18)",
        glowHover: "rgba(99,102,241,0.38)",
        iconAccent: "rgba(99,102,241,0.16)",
        badge: "bg-indigo-500/12 text-indigo-300/90 border-indigo-500/40"
    }
}
  , Ro = [{
    name: "MineSMP",
    members: "250+",
    role: "Staff Manager",
    icon: "🎯",
    resigned: !1,
    shutdown: !0,
    duration: "3 months",
    proofImages: [],
    journey: [{
        role: "Sr Mod"
    }, {
        role: "Sr Admin"
    }, {
        role: "SMA"
    }, {
        role: "Staff Manager"
    }],
    vouches: [{
        username: "lostlt3",
        role: "Manager",
        rating: 5,
        message: "surely 5 stars, worked with sxuq on servers and he was the best admin i had; i would love to him as my back in other servers too.",
        date: "2026-06-21",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/85eff377a_Screenshot2026-06-21073045.png"
    }, {
        username: "LakshayTheW",
        role: "Owner",
        rating: 5,
        message: "Vouch, bro is multi talented I hired him as a SMA or sometime SM he worked excellent and managed all the staff team & the other activities in a professional way very talented guy! 5/5",
        date: "2026-06-24",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/aac2fd63b_Screenshot2026-06-24175324.png"
    }]
}, {
    name: "BlazeVanilla",
    members: "1.5k+",
    role: "Helper",
    icon: "🔥",
    resigned: !0,
    duration: "2 months",
    proofImages: [],
    vouches: []
}, {
    name: "Vanillaxtra",
    members: "4.5k+",
    role: "Moderator",
    icon: "🌿",
    resigned: !0,
    duration: "5 months",
    proofImages: [],
    journey: [{
        role: "Helper"
    }, {
        role: "Moderator"
    }],
    vouches: []
}, {
    name: "LiteMC",
    members: "300+",
    role: "Moderator",
    icon: "⚡",
    resigned: !1,
    shutdown: !0,
    duration: "1 month",
    proofImages: [],
    vouches: [],
    journey: [{
        role: "Helper",
        note: "Started"
    }, {
        role: "Jr Mod",
        note: "Promoted"
    }, {
        role: "Moderator",
        note: "Final role"
    }]
}, {
    name: "SparkMC",
    members: "600+",
    role: "MMA",
    icon: "🏰",
    resigned: !1,
    shutdown: !0,
    duration: "4 months",
    proofImages: [],
    journey: [{
        role: "Moderator"
    }, {
        role: "Sr Mod"
    }, {
        role: "Admin"
    }, {
        role: "MMA"
    }],
    vouches: [{
        username: "GersBes",
        role: "Media Manager",
        rating: 4,
        message: "I vouch for Sxuq staffed with him on many servers and always been great, he always types fast responses knows commands and is alway open to help! I give sxuq a: ⭐ ⭐ ⭐ ⭐",
        date: "2026-06-22",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/a1bb67cb5_Screenshot2026-06-22153147.png"
    }, {
        username: "iqslvr",
        role: "Owner",
        rating: 4.5,
        message: "Vouch for sxuq 4.5/5 Stars",
        date: "2026-06-24",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/696f6f4fe_Screenshot2026-06-24175833.png"
    }, {
        username: "_fichoz_",
        role: "Helper",
        rating: 5,
        message: "5 stars for me, you are always great person <3 sxuq",
        date: "2026-06-26",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/d8a4430a4_Screenshot2026-06-26150631.png"
    }]
}, {
    name: "ShardSMP",
    members: "800+",
    role: "Community Manager",
    icon: "💎",
    resigned: !0,
    duration: "6 months",
    proofImages: [],
    journey: [{
        role: "Moderator"
    }, {
        role: "Sr Mod"
    }, {
        role: "Sr Admin"
    }, {
        role: "SMA"
    }, {
        role: "Community Manager"
    }],
    vouches: [{
        username: "acetech__",
        role: "Staff Manager",
        rating: 4,
        message: "I vouch for Sxuq, he was my Staff Management Assistant and has done great work! I give sxuq a Solid 4 star",
        date: "2026-07-11",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/79e8bab58_Screenshot2026-07-11104841.png"
    }]
}, {
    name: "DomikonSMP",
    members: "650+",
    role: "Moderator",
    icon: "🛡️",
    resigned: !0,
    duration: "2 months",
    proofImages: [],
    journey: [{
        role: "Helper"
    }, {
        role: "Moderator"
    }],
    vouches: []
}, {
    name: "CentralPvP",
    members: "4k+",
    role: "Helper",
    icon: "⚔️",
    resigned: !0,
    duration: "3 months",
    proofImages: [],
    vouches: []
}, {
    name: "UnionSMP",
    members: "750+",
    role: "Moderator",
    icon: "🌟",
    resigned: !0,
    duration: "4 months",
    proofImages: [],
    journey: [{
        role: "Jr Mod"
    }, {
        role: "Moderator"
    }],
    vouches: []
}, {
    name: "EclipseMC",
    members: "150+",
    role: "Moderator",
    icon: "🌑",
    resigned: !1,
    shutdown: !0,
    duration: "2 weeks",
    proofImages: [],
    vouches: []
}, {
    name: "MyxoSMP",
    members: "600+",
    role: "Staff Manager",
    icon: "🌀",
    resigned: !1,
    shutdown: !0,
    duration: "3 months",
    proofImages: [],
    journey: [{
        role: "Helper"
    }, {
        role: "Jr Mod"
    }, {
        role: "Moderator"
    }, {
        role: "Admin"
    }, {
        role: "Staff Manager"
    }],
    vouches: []
}, {
    name: "Godly Vanilla",
    members: "50+",
    role: "Co-Owner",
    icon: "👑",
    resigned: !1,
    shutdown: !0,
    duration: "1 month",
    proofImages: [],
    vouches: []
}, {
    name: "RaiderSMP",
    members: "150+",
    role: "Staff Manager",
    icon: "⚔️",
    shutdown: !0,
    duration: "1 month",
    proofImages: [],
    vouches: [{
        username: "CRYLVEX",
        role: "Owner",
        rating: 4,
        message: "I give sxuq a ⭐ ⭐ ⭐ ⭐",
        date: "2026-06-20",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/129a4ddce_Screenshot2026-06-20183847.png"
    }]
}, {
    name: "FrogDupe",
    members: "100+",
    role: "Owner",
    icon: "🐸",
    resigned: !1,
    duration: "6 months",
    proofImages: [],
    vouches: [{
        username: "nolramthekiller_28285",
        role: "Helper",
        rating: 4,
        message: "I Vouch Sxuq ⭐ ⭐ ⭐ ⭐",
        date: "2026-06-20",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/8ce599682_Screenshot2026-06-20200905.png"
    }]
}, {
    name: "MonkeyVanilla",
    members: "400+",
    role: "Co-Owner",
    icon: "🐵",
    shutdown: !0,
    duration: "5 months",
    proofImages: [],
    vouches: [{
        username: "u2gd",
        role: "Owner",
        rating: 5,
        message: "OMG VOUCH DADDY @sxuq 5/5",
        date: "2026-06-21",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/995901a93_Screenshot2026-06-21072349.png"
    }, {
        username: "lwberry",
        role: "Moderator",
        rating: 5,
        message: "vouch for sxuq my e kitten @sxuq",
        date: "2026-06-21",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/8d5a4ff7c_Screenshot2026-06-21072346.png"
    }, {
        username: "xsaaacc",
        role: "Manager",
        rating: 4,
        message: "vouch @sxuq compassionate and very active 4/5",
        date: "2026-06-21",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/f4ab80fb4_Screenshot2026-06-21072519.png"
    }]
}, {
    name: "Spicysmp",
    members: "900+",
    role: "CMA",
    icon: "🌶️",
    resigned: !1,
    shutdown: !0,
    duration: "3 months",
    proofImages: [],
    journey: [{
        role: "Moderator"
    }, {
        role: "Sr Mod"
    }, {
        role: "Admin"
    }, {
        role: "CMA"
    }],
    vouches: []
}, {
    name: "Maxzii's Pack Hub",
    members: "500+",
    role: "Admin",
    icon: "📦",
    resigned: !0,
    duration: "2 months",
    proofImages: [],
    journey: [{
        role: "Helper"
    }, {
        role: "Admin"
    }],
    vouches: []
}, {
    name: "PapayaSMP",
    members: "1.5k+",
    role: "Sr Mod",
    icon: "🥭",
    resigned: !0,
    duration: "4 months",
    proofImages: [],
    vouches: [{
        username: "minato_13337",
        role: "Moderator",
        rating: 5,
        message: "I vouch for Sxuq because he seems like a cool guy. Dont really know him tbh but i wanna get to know him 😃👍",
        date: "2026-06-20",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/a1e59b0b9_image.png"
    }]
}, {
    name: "RusticSMP",
    members: "150+",
    role: "Overseer",
    icon: "⚙️",
    resigned: !0,
    duration: "",
    proofImages: [],
    journey: [{
        role: "Staff Manager"
    }, {
        role: "Overseer"
    }],
    vouches: [{
        username: "CRYLVEX",
        role: "Owner",
        rating: 4,
        message: "I give sxuq a ⭐ ⭐ ⭐ ⭐",
        date: "2026-06-20",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/129a4ddce_Screenshot2026-06-20183847.png"
    }]
}, {
    name: "Toxiss",
    members: "8k+",
    role: "Helper",
    icon: "☠️",
    resigned: !0,
    duration: "",
    proofImages: [],
    vouches: []
}, {
    name: "TurtleSMP",
    members: "300+",
    role: "Admin",
    icon: "🐢",
    resigned: !0,
    duration: "1 month",
    proofImages: [],
    vouches: []
}, {
    name: "MoneySMP",
    members: "500+",
    role: "CMA",
    icon: "💰",
    resigned: !1,
    duration: "",
    proofImages: [],
    journey: [{
        role: "Admin"
    }, {
        role: "CMA"
    }],
    vouches: [{
        username: "acetech__",
        role: "SMA",
        rating: 4,
        message: "I vouch for Sxuq, he was my Staff Management Assistant and has done great work! I give sxuq a Solid 4 star",
        date: "2026-07-11",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/79e8bab58_Screenshot2026-07-11104841.png"
    }]
}, {
    name: "IncomeMC",
    members: "500+",
    role: "Helper",
    icon: "💵",
    resigned: !1,
    duration: "",
    proofImages: [],
    vouches: []
}, {
    name: "ShardMC",
    members: "2k+",
    role: "Manager",
    icon: "💠",
    resigned: !0,
    duration: "",
    proofImages: [],
    vouches: [{
        username: "Chawks",
        role: "Manager",
        rating: 4.5,
        message: "Vouch, decent guy.",
        date: "2026-07-20",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/cd8534555_Screenshot2026-07-20160044.png"
    }]
}, {
    name: "SilentMC",
    members: "1.25k+",
    role: "Manager",
    icon: "🤫",
    resigned: !1,
    duration: "",
    proofImages: [],
    vouches: []
}, {
    name: "HypeMC",
    members: "700+",
    role: "Community Manager",
    icon: "🚀",
    resigned: !1,
    shutdown: !0,
    duration: "",
    proofImages: [],
    journey: [{
        role: "SMA"
    }, {
        role: "Staff Manager"
    }, {
        role: "Community Manager"
    }],
    vouches: [{
        username: "lostlt3",
        role: "Staff Manager",
        rating: 5,
        message: "surely 5 stars, worked with sxuq on servers and he was the best admin i had; i would love to him as my back in other servers too.",
        date: "2026-06-21",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/85eff377a_Screenshot2026-06-21073045.png"
    }, {
        username: "LakshayTheW",
        role: "Owner",
        rating: 5,
        message: "Vouch, bro is multi talented I hired him as a SMA or sometime SM he worked excellent and managed all the staff team & the other activities in a professional way very talented guy! 5/5",
        date: "2026-06-24",
        proofImage: "https://media.base44.com/images/public/69d556893fee4bb038ae6d4b/aac2fd63b_Screenshot2026-06-24175324.png"
    }]
}]
  , W4 = ["Toxiss", "Vanillaxtra", "ShardMC", "Spicysmp", "ShardSMP", "PapayaSMP", "MyxoSMP"];
function K4({server: t, index: e, onClick: r}) {
    var d;
    const i = gs[t.role] || gs.Moderator
      , [a,l] = L.useState(!1)
      , u = ((d = t.vouches) == null ? void 0 : d.length) || 0;
    return v.jsxs(fe.div, {
        layout: !0,
        initial: {
            opacity: 0,
            y: 24,
            scale: .96
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        transition: {
            duration: .5,
            delay: e * .08,
            ease: [.25, 1, .35, 1]
        },
        whileHover: {
            y: -7,
            scale: 1.02,
            transition: {
                duration: .25,
                ease: "easeOut"
            }
        },
        onHoverStart: () => l(!0),
        onHoverEnd: () => l(!1),
        onClick: () => r && r(t),
        className: "group relative cursor-pointer",
        children: [v.jsx("div", {
            className: "absolute inset-0 rounded-2xl pointer-events-none -z-10",
            style: {
                background: `radial-gradient(ellipse at 50% 100%, ${i.glowHover} 0%, transparent 60%)`,
                filter: "blur(18px)",
                transform: "scale(1.12) translateY(6px)",
                opacity: a ? 1 : .5,
                transition: "opacity 0.3s ease"
            }
        }), v.jsxs("div", {
            className: "relative rounded-2xl p-5 overflow-hidden",
            style: {
                background: "linear-gradient(160deg, rgba(24,24,44,0.95) 0%, rgba(14,14,30,0.98) 100%)",
                border: `1px solid ${a ? i.borderHover : i.border}`,
                boxShadow: a ? `0 12px 40px rgba(0,0,0,0.55), 0 0 24px ${i.glowHover}` : `0 4px 20px rgba(0,0,0,0.4), 0 0 14px ${i.glow}`,
                transition: "border 0.25s ease, box-shadow 0.25s ease"
            },
            children: [v.jsx("div", {
                className: "absolute top-0 left-0 w-40 h-40 rounded-full pointer-events-none",
                style: {
                    background: `radial-gradient(circle, ${a ? i.glowHover : i.glow} 0%, transparent 70%)`,
                    filter: "blur(26px)",
                    opacity: a ? .7 : .42,
                    transition: "opacity 0.3s ease"
                }
            }), v.jsx("div", {
                className: "absolute top-0 left-0 right-0 h-px pointer-events-none",
                style: {
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)"
                }
            }), v.jsxs("div", {
                className: "relative",
                children: [v.jsxs("div", {
                    className: "absolute top-0 right-0 z-10 flex flex-col items-end gap-1",
                    children: [t.resigned && v.jsx("span", {
                        className: "px-2 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider text-white/70 border border-white/20",
                        style: {
                            background: "rgba(255,255,255,0.07)"
                        },
                        children: "Resigned"
                    }), t.shutdown && v.jsx("span", {
                        className: "px-2 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider text-white/70 border border-white/20",
                        style: {
                            background: "rgba(255,255,255,0.07)"
                        },
                        children: "Server Shut Down"
                    }), t.workingAs && v.jsxs("span", {
                        className: "px-2 py-0.5 rounded-full text-[9px] font-medium tracking-wider text-emerald-300/80 border border-emerald-400/25",
                        style: {
                            background: "rgba(16,185,129,0.08)"
                        },
                        children: ["Currently working as ", t.workingAs]
                    })]
                }), v.jsx("div", {
                    className: "w-9 h-9 rounded-xl flex items-center justify-center text-lg mb-4",
                    style: {
                        background: a ? `linear-gradient(135deg, ${i.iconAccent}, rgba(255,255,255,0.05))` : "rgba(255,255,255,0.05)",
                        border: `1px solid ${a ? i.border : "rgba(255,255,255,0.07)"}`,
                        transition: "background 0.25s ease, border 0.25s ease"
                    },
                    children: t.icon
                }), v.jsx("h3", {
                    className: "font-display text-sm font-bold text-white/90 tracking-wide mb-2 leading-snug",
                    children: t.name
                }), v.jsxs("div", {
                    className: "flex items-center gap-1.5 mb-4",
                    children: [v.jsx(Kl, {
                        className: "w-3.5 h-3.5 text-white/30"
                    }), v.jsxs("span", {
                        className: "text-xs text-white/40 font-medium",
                        children: [t.members, " members"]
                    })]
                }), v.jsx("div", {
                    className: `inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${i.badge}`,
                    children: t.role
                }), v.jsxs("div", {
                    className: "mt-4 flex items-center gap-1.5 text-[10px] font-medium transition-all duration-300",
                    style: {
                        color: a ? "rgba(196,181,254,0.85)" : "rgba(255,255,255,0.3)"
                    },
                    children: [v.jsx($o, {
                        className: "w-3 h-3"
                    }), u > 0 ? `${u} Vouch${u > 1 ? "es" : ""} Available` : "Click for Details"]
                })]
            })]
        })]
    })
}
function Q4({servers: t=Ro, onServerClick: e}) {
    const r = W4.map(i => t.find(a => a.name.toLowerCase() === i.toLowerCase())).filter(Boolean);
    return v.jsxs("section", {
        className: "relative z-10 max-w-7xl mx-auto px-4 pt-14 pb-4",
        children: [v.jsxs(fe.div, {
            className: "text-center mb-8",
            initial: {
                opacity: 0,
                y: -16
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .7,
                ease: [.25, 1, .35, 1]
            },
            children: [v.jsxs(fe.div, {
                className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5",
                style: {
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)"
                },
                initial: {
                    opacity: 0,
                    scale: .92
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: .6,
                    delay: .1
                },
                children: [v.jsx(fi, {
                    className: "w-3.5 h-3.5 text-amber-400"
                }), v.jsx("span", {
                    className: "text-xs font-medium tracking-widest uppercase text-white/50",
                    children: "Highlights"
                })]
            }), v.jsx(fe.h2, {
                className: "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4",
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .7,
                    delay: .15
                },
                style: {
                    background: "linear-gradient(120deg, #fcd34d 0%, #f0abfc 45%, #a5b4fc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 28px rgba(250,204,21,0.2))"
                },
                children: "Featured Servers"
            }), v.jsx(fe.p, {
                className: "text-sm sm:text-base text-white/40 max-w-lg mx-auto leading-relaxed font-body font-light",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: .6,
                    delay: .25
                },
                children: "Some of my most notable staff positions and achievements."
            })]
        }), v.jsx(fe.div, {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: .6,
                delay: .3
            },
            children: r.map( (i, a) => v.jsx(K4, {
                server: i,
                index: a,
                onClick: e
            }, i.name))
        })]
    })
}
function G4() {
    return v.jsxs(fe.div, {
        className: "text-center pt-14 pb-8 px-4",
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: .8,
            ease: [.25, 1, .35, 1]
        },
        children: [v.jsxs(fe.div, {
            className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6",
            style: {
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)"
            },
            initial: {
                opacity: 0,
                scale: .92
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: {
                duration: .6,
                delay: .1
            },
            children: [v.jsx(J2, {
                className: "w-3.5 h-3.5 text-violet-400"
            }), v.jsx("span", {
                className: "text-xs font-medium tracking-widest uppercase text-white/50",
                children: "Staff Portfolio"
            })]
        }), v.jsx(fe.h1, {
            className: "font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-5",
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .7,
                delay: .15
            },
            style: {
                background: "linear-gradient(120deg, #c4b5fd 0%, #a5b4fc 40%, #93c5fd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 32px rgba(167,139,250,0.25))"
            },
            children: "Server Experience"
        }), v.jsx(fe.p, {
            className: "text-sm sm:text-base text-white/40 max-w-md mx-auto leading-relaxed font-body font-light",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: .6,
                delay: .25
            },
            children: "A comprehensive record of staff roles, contributions, and experience across various Minecraft servers."
        }), v.jsxs(fe.div, {
            className: "mt-7 inline-flex items-center gap-5 px-5 py-2.5 rounded-full text-xs text-white/40",
            style: {
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)"
            },
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: .6,
                delay: .35
            },
            children: [v.jsxs("div", {
                className: "flex items-center gap-1.5",
                children: [v.jsx("div", {
                    className: "w-1.5 h-1.5 rounded-full bg-emerald-400"
                }), v.jsx("span", {
                    children: "22 Servers"
                })]
            }), v.jsx("div", {
                className: "w-px h-3 bg-white/10"
            }), v.jsx("span", {
                children: "Multiple Roles"
            }), v.jsx("div", {
                className: "w-px h-3 bg-white/10"
            }), v.jsx("span", {
                children: "Active & Resigned"
            })]
        })]
    })
}
const Y4 = {
    "Co-Owner": ["Overseer", "Staff Management", "Community Management", "General Management", "Media Management"],
    Administrator: ["Senior Moderator"]
}
  , X4 = ( () => {
    const t = [];
    for (const e of q4) {
        t.push({
            type: "role",
            value: e
        });
        for (const r of Y4[e] || [])
            t.push({
                type: "group",
                value: r
            })
    }
    return t
}
)();
function J4({activeFilter: t, onFilterChange: e}) {
    return v.jsx(fe.div, {
        className: "flex flex-wrap justify-center gap-2 px-4 py-5",
        initial: {
            opacity: 0,
            y: 14
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: .6,
            delay: .2,
            ease: [.25, 1, .35, 1]
        },
        children: X4.map( ({value: r}) => {
            const i = t === r;
            return v.jsxs("button", {
                onClick: () => e(r),
                className: "relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 select-none",
                style: {
                    background: i ? "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(99,102,241,0.12) 100%)" : "rgba(255,255,255,0.03)",
                    border: i ? "1px solid rgba(167,139,250,0.3)" : "1px solid rgba(255,255,255,0.06)",
                    color: i ? "rgba(221,214,254,0.9)" : "rgba(255,255,255,0.3)",
                    boxShadow: i ? "0 2px 16px rgba(139,92,246,0.1)" : "none"
                },
                children: [i && v.jsx(fe.div, {
                    layoutId: "activeFilter",
                    className: "absolute inset-0 rounded-full",
                    style: {
                        background: "rgba(139,92,246,0.1)"
                    },
                    transition: {
                        type: "spring",
                        bounce: .15,
                        duration: .5
                    }
                }), v.jsx("span", {
                    className: "relative z-10",
                    children: r
                })]
            }, r)
        }
        )
    })
}
function Z4({server: t, index: e, onClick: r}) {
    var u;
    const i = gs[t.role] || gs.Moderator
      , [a,l] = L.useState(!1);
    return (u = t.vouches) != null && u.length,
    v.jsxs(fe.div, {
        layout: !0,
        initial: {
            opacity: 0,
            y: 20,
            scale: .97
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: .97
        },
        transition: {
            duration: .4,
            delay: e * .045,
            ease: [.25, 1, .35, 1]
        },
        whileHover: {
            y: -5,
            scale: 1.015,
            transition: {
                duration: .2,
                ease: "easeOut"
            }
        },
        onHoverStart: () => l(!0),
        onHoverEnd: () => l(!1),
        onClick: () => r && r(t),
        className: "group relative cursor-pointer",
        children: [v.jsx("div", {
            className: "absolute inset-0 rounded-2xl pointer-events-none -z-10",
            style: {
                background: `radial-gradient(ellipse at 50% 100%, ${i.glowHover} 0%, transparent 65%)`,
                filter: "blur(12px)",
                transform: "scale(1.06) translateY(4px)",
                opacity: a ? 1 : 0,
                transition: "opacity 0.3s ease"
            }
        }), v.jsxs("div", {
            className: "relative rounded-2xl p-5 overflow-hidden",
            style: {
                background: "linear-gradient(160deg, rgba(22,22,40,0.95) 0%, rgba(14,14,28,0.98) 100%)",
                border: `1px solid ${a ? i.borderHover : i.border}`,
                boxShadow: a ? `0 8px 28px rgba(0,0,0,0.5), 0 0 12px ${i.glow}` : "0 2px 14px rgba(0,0,0,0.4)",
                transition: "border 0.25s ease, box-shadow 0.25s ease"
            },
            children: [v.jsx("div", {
                className: "absolute top-0 left-0 w-32 h-32 rounded-full pointer-events-none",
                style: {
                    background: `radial-gradient(circle, ${a ? i.glowHover : i.glow} 0%, transparent 70%)`,
                    filter: "blur(20px)",
                    opacity: a ? .55 : .3,
                    transition: "opacity 0.3s ease"
                }
            }), v.jsx("div", {
                className: "absolute top-0 left-0 right-0 h-px pointer-events-none",
                style: {
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
                }
            }), v.jsxs("div", {
                className: "relative",
                children: [v.jsxs("div", {
                    className: "absolute top-0 right-0 z-10 flex flex-col items-end gap-1",
                    children: [t.specialBadge && v.jsx("span", {
                        className: "special-badge px-2 py-0.5 rounded-full text-[10px] font-bold tracking-widest font-display",
                        children: t.specialBadge
                    }), t.resigned && v.jsx("span", {
                        className: "px-2 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider text-white/70 border border-white/20",
                        style: {
                            background: "rgba(255,255,255,0.07)"
                        },
                        children: "Resigned"
                    }), t.shutdown && v.jsx("span", {
                        className: "px-2 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider text-white/70 border border-white/20",
                        style: {
                            background: "rgba(255,255,255,0.07)"
                        },
                        children: "Server Shut Down"
                    }), t.workingAs && v.jsxs("span", {
                        className: "px-2 py-0.5 rounded-full text-[9px] font-medium tracking-wider text-emerald-300/80 border border-emerald-400/25",
                        style: {
                            background: "rgba(16,185,129,0.08)"
                        },
                        children: ["Currently working as ", t.workingAs]
                    })]
                }), v.jsx("div", {
                    className: "flex items-start justify-between mb-4",
                    children: v.jsx("div", {
                        className: "flex flex-col gap-2",
                        children: v.jsx("div", {
                            className: "w-9 h-9 rounded-xl flex items-center justify-center text-lg",
                            style: {
                                background: a ? `linear-gradient(135deg, ${i.iconAccent}, rgba(255,255,255,0.05))` : "rgba(255,255,255,0.05)",
                                border: `1px solid ${a ? i.border : "rgba(255,255,255,0.07)"}`,
                                transition: "background 0.25s ease, border 0.25s ease"
                            },
                            children: t.icon
                        })
                    })
                }), v.jsx("h3", {
                    className: "font-display text-sm font-bold text-white/90 tracking-wide mb-1.5 leading-snug",
                    children: t.name
                }), v.jsxs("div", {
                    className: "flex items-center gap-1.5 mb-4",
                    children: [v.jsx(Kl, {
                        className: "w-3 h-3 text-white/30"
                    }), v.jsxs("span", {
                        className: "text-xs text-white/35 font-medium",
                        children: [t.members, " members"]
                    })]
                }), v.jsx("div", {
                    className: `inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${i.badge}`,
                    children: t.role
                }), v.jsxs("div", {
                    className: "mt-3 flex items-center gap-1.5 text-[10px] font-medium transition-all duration-300",
                    style: {
                        color: a ? "rgba(196,181,253,0.8)" : "rgba(255,255,255,0.28)"
                    },
                    children: [v.jsx($o, {
                        className: "w-3 h-3"
                    }), "Click for More Info"]
                })]
            })]
        })]
    })
}
function e3({servers: t, onServerClick: e}) {
    return v.jsxs(fe.div, {
        className: "px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: .5,
            delay: .5
        },
        children: [v.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5",
            children: v.jsx(Gn, {
                mode: "popLayout",
                children: t.map( (r, i) => v.jsx(Z4, {
                    server: r,
                    index: i,
                    onClick: e
                }, r.name))
            })
        }), t.length === 0 && v.jsx(fe.div, {
            className: "text-center py-20",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            children: v.jsx("p", {
                className: "text-muted-foreground text-sm",
                children: "No servers found for this filter."
            })
        })]
    })
}
function t3({src: t, onClose: e}) {
    return v.jsxs(fe.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        onClick: e,
        className: "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm",
        children: [v.jsx("button", {
            onClick: e,
            className: "absolute top-4 right-4 z-10 w-8 h-8 rounded-lg flex items-center justify-center",
            style: {
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)"
            },
            children: v.jsx(Ol, {
                className: "w-4 h-4 text-white/70"
            })
        }), v.jsx(fe.img, {
            initial: {
                scale: .9,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            exit: {
                scale: .9,
                opacity: 0
            },
            src: t,
            alt: "Proof",
            className: "max-w-full max-h-[90vh] rounded-xl object-contain",
            onClick: r => r.stopPropagation()
        })]
    })
}
function g1({vouch: t, index: e}) {
    const [r,i] = L.useState(!1);
    return v.jsxs(v.Fragment, {
        children: [v.jsxs(fe.div, {
            layout: !0,
            initial: {
                opacity: 0,
                y: 16
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .4,
                delay: e * .08,
                ease: [.25, 1, .35, 1]
            },
            className: "relative rounded-xl p-5",
            style: {
                background: "linear-gradient(160deg, rgba(22,22,40,0.9) 0%, rgba(14,14,28,0.95) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)"
            },
            children: [v.jsx("div", {
                className: "absolute top-0 left-0 right-0 h-px rounded-t-xl pointer-events-none",
                style: {
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)"
                }
            }), v.jsxs("div", {
                className: "flex items-center justify-between mb-3",
                children: [v.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [v.jsx("div", {
                        className: "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-display",
                        style: {
                            background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(96,165,250,0.15))",
                            border: "1px solid rgba(139,92,246,0.25)",
                            color: "rgba(196,181,253,0.9)"
                        },
                        children: t.username.charAt(0).toUpperCase()
                    }), v.jsxs("div", {
                        children: [v.jsx("span", {
                            className: "text-xs font-semibold text-white/70",
                            children: t.username
                        }), t.role && v.jsx("span", {
                            className: "ml-1.5 px-1.5 py-0.5 rounded-full text-[9px] font-medium text-white/40",
                            style: {
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.08)"
                            },
                            children: t.role
                        })]
                    })]
                }), v.jsx("div", {
                    className: "flex items-center gap-0.5",
                    children: [1, 2, 3, 4, 5].map(a => {
                        const l = a <= Math.floor(t.rating);
                        return a === Math.ceil(t.rating) && !Number.isInteger(t.rating) ? v.jsx(rS, {
                            className: "w-3.5 h-3.5",
                            fill: "rgba(250,204,21,0.9)",
                            stroke: "rgba(250,204,21,0.9)",
                            style: {
                                filter: "drop-shadow(0 0 4px rgba(250,204,21,0.4))"
                            }
                        }, a) : v.jsx(fi, {
                            className: "w-3.5 h-3.5",
                            fill: l ? "rgba(250,204,21,0.9)" : "none",
                            stroke: l ? "rgba(250,204,21,0.9)" : "rgba(255,255,255,0.15)",
                            style: {
                                filter: l ? "drop-shadow(0 0 4px rgba(250,204,21,0.4))" : "none"
                            }
                        }, a)
                    }
                    )
                })]
            }), v.jsx("p", {
                className: "text-xs text-white/50 leading-relaxed mb-2 font-body",
                children: t.message
            }), t.proofImage && v.jsx("div", {
                className: "mb-2 rounded-lg overflow-hidden relative group cursor-pointer",
                onClick: () => i(!0),
                children: v.jsxs("div", {
                    className: "relative",
                    style: {
                        border: "1px solid rgba(255,255,255,0.08)"
                    },
                    children: [v.jsx("img", {
                        src: t.proofImage,
                        alt: "Proof",
                        className: "w-full object-cover max-h-48"
                    }), v.jsx("div", {
                        className: "absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center",
                        children: v.jsx(dv, {
                            className: "w-4 h-4 text-white/0 group-hover:text-white/80 transition-all duration-200"
                        })
                    })]
                })
            }), !t.proofImage && v.jsxs("div", {
                className: "mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[9px] font-medium tracking-wide",
                style: {
                    background: "rgba(244,63,94,0.1)",
                    border: "1px solid rgba(244,63,94,0.25)",
                    color: "rgba(253,164,175,0.85)"
                },
                children: [v.jsx(H2, {
                    className: "w-2.5 h-2.5"
                }), "Submitted via Website"]
            }), v.jsx("p", {
                className: "text-[10px] text-white/25 font-medium mt-1",
                children: new Date(t.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })
            })]
        }), v.jsx(Gn, {
            children: r && t.proofImage && v.jsx(t3, {
                src: t.proofImage,
                onClose: () => i(!1)
            })
        })]
    })
}
function n3({extraVouches: t=[]}) {
    const e = L.useMemo( () => {
        const i = Ro.filter(l => {
            var u;
            return ((u = l.vouches) == null ? void 0 : u.length) > 0
        }
        ).flatMap(l => l.vouches.map(u => ({
            ...u,
            serverName: l.name,
            serverRole: l.role
        })));
        return [...t.map(l => ({
            ...l,
            serverName: l.serverName || "General",
            serverRole: l.serverRole || "",
            isUserVouch: !0
        })), ...i].sort( (l, u) => new Date(u.date) - new Date(l.date))
    }
    , [t])
      , r = L.useMemo( () => {
        const i = e.length
          , a = i > 0 ? (e.reduce( (u, d) => u + d.rating, 0) / i).toFixed(1) : "0"
          , l = [...new Set(e.map(u => u.serverName))].length;
        return {
            total: i,
            avgRating: a,
            serversWithVouches: l
        }
    }
    , [e]);
    return v.jsxs(fe.section, {
        id: "vouches-section",
        className: "relative z-10 max-w-5xl mx-auto px-4 pt-16 pb-24",
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        viewport: {
            once: !0,
            margin: "-100px"
        },
        transition: {
            duration: .6
        },
        children: [v.jsxs(fe.div, {
            className: "text-center mb-12",
            initial: {
                opacity: 0,
                y: -20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .6
            },
            children: [v.jsxs("div", {
                className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5",
                style: {
                    background: "rgba(139,92,246,0.08)",
                    border: "1px solid rgba(139,92,246,0.2)"
                },
                children: [v.jsx($o, {
                    className: "w-3.5 h-3.5 text-violet-400"
                }), v.jsx("span", {
                    className: "text-xs font-medium tracking-widest uppercase text-violet-300/80",
                    children: "Vouches & Proof"
                })]
            }), v.jsx("h2", {
                className: "font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3",
                style: {
                    background: "linear-gradient(120deg, #e2d9f3 0%, #c4b5fd 40%, #a5b4fc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 24px rgba(139,92,246,0.2))"
                },
                children: "Staff Vouches"
            }), v.jsx("p", {
                className: "text-sm text-white/35 max-w-md mx-auto",
                children: "Verified testimonials from server owners, admins, and fellow staff members across all positions."
            }), v.jsxs("div", {
                className: "flex justify-center gap-4 mt-5",
                children: [v.jsxs("div", {
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl",
                    style: {
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)"
                    },
                    children: [v.jsx(Gn, {
                        mode: "popLayout",
                        initial: !1,
                        children: v.jsx(fe.span, {
                            initial: {
                                opacity: 0,
                                y: -8,
                                scale: .7
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: 8,
                                scale: .7
                            },
                            transition: {
                                duration: .35,
                                ease: [.25, 1, .35, 1]
                            },
                            className: "text-xs font-bold text-white/80 font-display",
                            children: r.total
                        }, r.total)
                    }), v.jsx("span", {
                        className: "text-xs text-white/35",
                        children: "Vouches"
                    })]
                }), v.jsxs("div", {
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl",
                    style: {
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)"
                    },
                    children: [v.jsx(Gn, {
                        mode: "popLayout",
                        initial: !1,
                        children: v.jsx(fe.span, {
                            initial: {
                                opacity: 0,
                                y: -8,
                                scale: .7
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: 8,
                                scale: .7
                            },
                            transition: {
                                duration: .35,
                                ease: [.25, 1, .35, 1]
                            },
                            className: "text-xs font-bold text-white/80 font-display",
                            children: r.serversWithVouches
                        }, r.serversWithVouches)
                    }), v.jsx("span", {
                        className: "text-xs text-white/35",
                        children: "Servers"
                    })]
                }), v.jsxs("div", {
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl",
                    style: {
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)"
                    },
                    children: [v.jsx(Gn, {
                        mode: "popLayout",
                        initial: !1,
                        children: v.jsx(fe.span, {
                            initial: {
                                opacity: 0,
                                y: -8,
                                scale: .7
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: 8,
                                scale: .7
                            },
                            transition: {
                                duration: .35,
                                ease: [.25, 1, .35, 1]
                            },
                            className: "text-xs font-bold text-yellow-400/90 font-display",
                            children: r.avgRating
                        }, r.avgRating)
                    }), v.jsx("span", {
                        className: "text-xs text-white/35",
                        children: "Avg Rating"
                    })]
                })]
            })]
        }), e.length > 0 ? v.jsx(fe.div, {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
            initial: {
                opacity: 0
            },
            whileInView: {
                opacity: 1
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .5,
                delay: .15
            },
            children: v.jsx(Gn, {
                children: e.map( (i, a) => v.jsxs(fe.div, {
                    layout: !0,
                    exit: {
                        opacity: 0,
                        scale: .9,
                        transition: {
                            duration: .3
                        }
                    },
                    children: [v.jsx(g1, {
                        vouch: i,
                        index: a
                    }), v.jsxs("p", {
                        className: "mt-1.5 ml-1 text-[10px] text-white/25 font-medium",
                        children: [i.serverName, " • ", i.serverRole]
                    })]
                }, `${i.username}-${i.date}`))
            })
        }) : v.jsx("p", {
            className: "text-center text-white/25 text-sm py-12",
            children: "No vouches available yet."
        })]
    })
}
function r3({value: t, onChange: e}) {
    const [r,i] = L.useState(0);
    return v.jsxs("div", {
        className: "flex items-center gap-1.5",
        onMouseLeave: () => i(0),
        children: [[1, 2, 3, 4, 5].map(a => {
            const l = r || t
              , u = a <= Math.floor(l)
              , d = a === Math.ceil(l) && !Number.isInteger(l);
            return v.jsxs("div", {
                className: "relative flex",
                children: [v.jsx("button", {
                    type: "button",
                    onClick: () => e(a - .5),
                    onMouseEnter: () => i(a - .5),
                    className: "w-4 h-8 cursor-pointer",
                    "aria-label": `${a - .5} stars`
                }), v.jsx("button", {
                    type: "button",
                    onClick: () => e(a),
                    onMouseEnter: () => i(a),
                    className: "w-4 h-8 cursor-pointer",
                    "aria-label": `${a} stars`
                }), v.jsx(fi, {
                    className: "absolute inset-0 m-auto w-7 h-7 pointer-events-none",
                    fill: u ? "rgba(250,204,21,0.9)" : "none",
                    stroke: u ? "rgba(250,204,21,0.9)" : d ? "rgba(250,204,21,0.7)" : "rgba(255,255,255,0.18)",
                    style: {
                        clipPath: d ? "inset(0 50% 0 0)" : "none",
                        filter: u || d ? "drop-shadow(0 0 5px rgba(250,204,21,0.45))" : "none"
                    }
                }), d && v.jsx(fi, {
                    className: "absolute inset-0 m-auto w-7 h-7 pointer-events-none",
                    fill: "rgba(250,204,21,0.9)",
                    stroke: "rgba(250,204,21,0.9)",
                    style: {
                        clipPath: "inset(0 50% 0 0)",
                        filter: "drop-shadow(0 0 5px rgba(250,204,21,0.45))"
                    }
                })]
            }, a)
        }
        ), v.jsx("span", {
            className: "ml-2 text-xs font-medium text-white/40 min-w-[28px]",
            children: t > 0 ? `${t}⭐` : "—"
        })]
    })
}
const Gy = "portfolio_vouch_submitted_v10";
function s3({onSubmit: t, existingUsernames: e=[]}) {
    const [r,i] = L.useState( () => localStorage.getItem(Gy) === "1")
      , [a,l] = L.useState("")
      , [u,d] = L.useState("")
      , [h,m] = L.useState("")
      , [g,y] = L.useState(0)
      , [w,k] = L.useState(!1)
      , [T,E] = L.useState("")
      , S = b => {
        if (b.preventDefault(),
        !a.trim() || !h.trim() || g === 0) {
            E("Please fill in your Discord username, vouch, and a star rating.");
            return
        }
        if (e.includes(a.trim().toLowerCase())) {
            E("This Discord username has already left a vouch. Thank you for your feedback! ❤️");
            return
        }
        E(""),
        t({
            username: a.trim(),
            message: h.trim(),
            rating: g,
            date: new Date().toISOString(),
            serverName: u.trim() || "General"
        }),
        localStorage.setItem(Gy, "1"),
        i(!0),
        k(!0),
        l(""),
        d(""),
        m(""),
        y(0),
        setTimeout( () => k(!1), 5e3)
    }
    ;
    return v.jsxs(fe.section, {
        id: "leave-a-vouch",
        className: "relative z-10 max-w-3xl mx-auto px-4 pt-8 pb-24",
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        viewport: {
            once: !0,
            margin: "-80px"
        },
        transition: {
            duration: .6
        },
        children: [v.jsxs(fe.div, {
            className: "text-center mb-8",
            initial: {
                opacity: 0,
                y: -16
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .6
            },
            children: [v.jsxs("div", {
                className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5",
                style: {
                    background: "rgba(244,63,94,0.08)",
                    border: "1px solid rgba(244,63,94,0.22)"
                },
                children: [v.jsx(Rd, {
                    className: "w-3.5 h-3.5 text-rose-400",
                    fill: "rgba(244,63,94,0.6)"
                }), v.jsx("span", {
                    className: "text-xs font-medium tracking-widest uppercase text-rose-300/80",
                    children: "Leave a Vouch"
                })]
            }), v.jsx("h2", {
                className: "font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3",
                style: {
                    background: "linear-gradient(120deg, #fda4af 0%, #f0abfc 45%, #a5b4fc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 26px rgba(244,63,94,0.22))"
                },
                children: "Enjoyed working with me?"
            }), v.jsxs("p", {
                className: "text-sm text-white/40 max-w-md mx-auto leading-relaxed",
                children: ["I'd really appreciate a vouch for my staff portfolio! ", v.jsx("span", {
                    className: "text-rose-400/80",
                    children: "❤️"
                }), v.jsx("br", {}), "Your feedback helps show my experience and professionalism across different Minecraft communities."]
            })]
        }), v.jsxs(fe.form, {
            onSubmit: S,
            className: "relative rounded-2xl p-6 sm:p-8 overflow-hidden",
            style: {
                background: "linear-gradient(160deg, rgba(22,22,40,0.9) 0%, rgba(14,14,28,0.95) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.45), 0 0 20px rgba(139,92,246,0.08)",
                backdropFilter: "blur(16px)"
            },
            initial: {
                opacity: 0,
                y: 24
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .6,
                delay: .1
            },
            children: [v.jsx("div", {
                className: "absolute -top-20 -right-20 w-56 h-56 rounded-full pointer-events-none",
                style: {
                    background: "radial-gradient(circle, rgba(244,63,94,0.16) 0%, transparent 70%)",
                    filter: "blur(28px)"
                }
            }), v.jsx("div", {
                className: "absolute -bottom-20 -left-20 w-56 h-56 rounded-full pointer-events-none",
                style: {
                    background: "radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 70%)",
                    filter: "blur(28px)"
                }
            }), r ? v.jsxs("div", {
                className: "relative flex flex-col items-center justify-center text-center py-10 px-4",
                children: [v.jsx("div", {
                    className: "w-14 h-14 rounded-full flex items-center justify-center mb-4",
                    style: {
                        background: "rgba(244,63,94,0.1)",
                        border: "1px solid rgba(244,63,94,0.25)"
                    },
                    children: v.jsx(Rd, {
                        className: "w-7 h-7 text-rose-400",
                        fill: "rgba(244,63,94,0.5)"
                    })
                }), v.jsxs("p", {
                    className: "text-sm font-medium text-white/75 leading-relaxed max-w-xs",
                    children: ["You've already submitted a vouch from this device.", v.jsx("br", {}), "Thank you for your feedback! ", v.jsx("span", {
                        className: "text-rose-400/80",
                        children: "❤️"
                    })]
                })]
            }) : v.jsxs("div", {
                className: "relative space-y-5",
                children: [v.jsxs("div", {
                    children: [v.jsxs("label", {
                        className: "block text-xs font-semibold text-white/55 uppercase tracking-wider mb-2",
                        children: ["Discord Username ", v.jsx("span", {
                            className: "text-rose-400/80",
                            children: "*"
                        })]
                    }), v.jsx("input", {
                        type: "text",
                        value: a,
                        onChange: b => l(b.target.value),
                        placeholder: "e.g. sxuq",
                        className: "w-full px-4 py-3 rounded-xl text-sm text-white/85 placeholder-white/25 transition-all outline-none",
                        style: {
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)"
                        }
                    })]
                }), v.jsxs("div", {
                    children: [v.jsxs("label", {
                        className: "block text-xs font-semibold text-white/55 uppercase tracking-wider mb-2",
                        children: ["Server Name ", v.jsx("span", {
                            className: "text-white/25 normal-case tracking-normal font-normal",
                            children: "(optional)"
                        })]
                    }), v.jsx("input", {
                        type: "text",
                        value: u,
                        onChange: b => d(b.target.value),
                        placeholder: "e.g. MineSMP",
                        className: "w-full px-4 py-3 rounded-xl text-sm text-white/85 placeholder-white/25 transition-all outline-none",
                        style: {
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)"
                        }
                    })]
                }), v.jsxs("div", {
                    children: [v.jsxs("label", {
                        className: "block text-xs font-semibold text-white/55 uppercase tracking-wider mb-2",
                        children: ["Star Rating ", v.jsx("span", {
                            className: "text-rose-400/80",
                            children: "*"
                        })]
                    }), v.jsx(r3, {
                        value: g,
                        onChange: y
                    })]
                }), v.jsxs("div", {
                    children: [v.jsxs("label", {
                        className: "block text-xs font-semibold text-white/55 uppercase tracking-wider mb-2",
                        children: ["Your Vouch ", v.jsx("span", {
                            className: "text-rose-400/80",
                            children: "*"
                        })]
                    }), v.jsx("textarea", {
                        value: h,
                        onChange: b => m(b.target.value),
                        placeholder: "Share your experience working with me…",
                        rows: 4,
                        className: "w-full px-4 py-3 rounded-xl text-sm text-white/85 placeholder-white/25 transition-all outline-none resize-none",
                        style: {
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)"
                        }
                    })]
                }), T && v.jsx("p", {
                    className: "text-xs text-rose-400/85 font-medium",
                    children: T
                }), v.jsxs("button", {
                    type: "submit",
                    className: "w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02]",
                    style: {
                        background: "linear-gradient(135deg, rgba(139,92,246,0.85) 0%, rgba(244,63,94,0.75) 100%)",
                        border: "1px solid rgba(167,139,250,0.4)",
                        boxShadow: "0 6px 24px rgba(139,92,246,0.25)",
                        color: "#fff"
                    },
                    children: [v.jsx(Y2, {
                        className: "w-4 h-4"
                    }), "Submit Vouch"]
                })]
            }), v.jsx(Gn, {
                children: w && v.jsxs(fe.div, {
                    initial: {
                        opacity: 0,
                        y: 12,
                        scale: .96
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: -8,
                        scale: .96
                    },
                    transition: {
                        duration: .4,
                        ease: [.25, 1, .35, 1]
                    },
                    className: "mt-5 flex items-center gap-3 px-4 py-3.5 rounded-xl",
                    style: {
                        background: "rgba(16,185,129,0.1)",
                        border: "1px solid rgba(52,211,153,0.3)"
                    },
                    children: [v.jsx(z2, {
                        className: "w-5 h-5 text-emerald-400 flex-shrink-0"
                    }), v.jsxs("p", {
                        className: "text-sm text-emerald-200/90 font-medium",
                        children: ["Thank you for taking the time to leave a vouch! ", v.jsx("span", {
                            className: "text-rose-400/80",
                            children: "❤️"
                        })]
                    })]
                })
            })]
        })]
    })
}
function i3({server: t, onClose: e}) {
    var y, w, k, T, E;
    const [r,i] = L.useState(null);
    if (!t)
        return null;
    const a = gs[t.role] || gs.Moderator
      , l = ((y = t.vouches) == null ? void 0 : y.length) || 0
      , u = l > 0 ? (t.vouches.reduce( (S, b) => S + b.rating, 0) / l).toFixed(1) : "N/A"
      , d = (w = t.journey) != null && w.length ? t.journey : [{
        role: t.role,
        note: t.resigned ? "Final role" : "Current role"
    }]
      , h = ((k = t.responsibilities) == null ? void 0 : k.length) > 0
      , m = ((T = t.achievements) == null ? void 0 : T.length) > 0
      , g = ((E = t.proofImages) == null ? void 0 : E.length) > 0;
    return v.jsxs(Gn, {
        children: [v.jsx(fe.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            onClick: e,
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",
            children: v.jsxs(fe.div, {
                initial: {
                    opacity: 0,
                    scale: .92,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: .92,
                    y: 20
                },
                transition: {
                    duration: .35,
                    ease: [.25, 1, .35, 1]
                },
                onClick: S => S.stopPropagation(),
                className: "relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl",
                style: {
                    background: "linear-gradient(160deg, rgba(20,20,38,0.98) 0%, rgba(10,10,22,0.99) 100%)",
                    border: `1px solid ${a.border}`,
                    boxShadow: `0 16px 48px rgba(0,0,0,0.6), 0 0 24px ${a.glow}`
                },
                children: [v.jsx("div", {
                    className: "absolute top-0 left-0 w-40 h-40 rounded-full pointer-events-none",
                    style: {
                        background: `radial-gradient(circle, ${a.glow} 0%, transparent 70%)`,
                        filter: "blur(28px)",
                        opacity: .4
                    }
                }), v.jsx("div", {
                    className: "absolute bottom-0 right-0 w-36 h-36 rounded-full pointer-events-none",
                    style: {
                        background: `radial-gradient(circle, ${a.glowHover} 0%, transparent 70%)`,
                        filter: "blur(24px)",
                        opacity: .3
                    }
                }), v.jsx("button", {
                    onClick: e,
                    className: "absolute top-4 right-4 z-10 w-8 h-8 rounded-lg flex items-center justify-center transition-all",
                    style: {
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)"
                    },
                    children: v.jsx(Ol, {
                        className: "w-4 h-4 text-white/50"
                    })
                }), v.jsxs("div", {
                    className: "relative p-6 sm:p-7",
                    children: [v.jsxs("div", {
                        className: "flex items-center gap-4 mb-5",
                        children: [v.jsx("div", {
                            className: "w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0",
                            style: {
                                background: `linear-gradient(135deg, ${a.iconAccent}, rgba(255,255,255,0.05))`,
                                border: `1px solid ${a.border}`
                            },
                            children: t.icon
                        }), v.jsxs("div", {
                            children: [v.jsx("h2", {
                                className: "font-display text-lg font-bold text-white/90",
                                children: t.name
                            }), v.jsx("div", {
                                className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border mt-1 ${a.badge}`,
                                children: t.role
                            })]
                        })]
                    }), v.jsxs("div", {
                        className: "grid grid-cols-2 gap-3 mb-5",
                        children: [v.jsxs("div", {
                            className: "rounded-xl p-3 text-center",
                            style: {
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.06)"
                            },
                            children: [v.jsx(Kl, {
                                className: "w-4 h-4 text-white/30 mx-auto mb-1"
                            }), v.jsx("p", {
                                className: "text-xs font-bold text-white/80",
                                children: t.members
                            }), v.jsx("p", {
                                className: "text-[10px] text-white/35",
                                children: "Members"
                            })]
                        }), v.jsxs("div", {
                            className: "rounded-xl p-3 text-center",
                            style: {
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.06)"
                            },
                            children: [v.jsx(fi, {
                                className: "w-4 h-4 text-yellow-400/50 mx-auto mb-1"
                            }), v.jsx("p", {
                                className: "text-xs font-bold text-white/80",
                                children: u
                            }), v.jsx("p", {
                                className: "text-[10px] text-white/35",
                                children: "Avg Rating"
                            })]
                        })]
                    }), (t.resigned || t.shutdown || t.workingAs) && v.jsxs("div", {
                        className: "flex flex-wrap gap-2 mb-6",
                        children: [t.resigned && v.jsx("span", {
                            className: "px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider text-white/70 border border-white/20",
                            style: {
                                background: "rgba(255,255,255,0.07)"
                            },
                            children: "Resigned"
                        }), !t.resigned && v.jsx("span", {
                            className: "px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider text-emerald-300/80 border border-emerald-400/25",
                            style: {
                                background: "rgba(16,185,129,0.08)"
                            },
                            children: "Active"
                        }), t.shutdown && v.jsx("span", {
                            className: "px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider text-white/70 border border-white/20",
                            style: {
                                background: "rgba(255,255,255,0.07)"
                            },
                            children: "Server Shut Down"
                        }), t.workingAs && v.jsxs("span", {
                            className: "px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wider text-emerald-300/80 border border-emerald-400/25",
                            style: {
                                background: "rgba(16,185,129,0.08)"
                            },
                            children: ["Currently working as ", t.workingAs]
                        })]
                    }), v.jsxs("div", {
                        className: "mb-6",
                        children: [v.jsxs("h3", {
                            className: "flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-3",
                            children: [v.jsx(oS, {
                                className: "w-3.5 h-3.5"
                            }), "My Journey"]
                        }), v.jsxs("div", {
                            className: "relative pl-5",
                            children: [v.jsx("div", {
                                className: "absolute left-[5px] top-1 bottom-1 w-px",
                                style: {
                                    background: `linear-gradient(to bottom, ${a.borderHover}, transparent)`
                                }
                            }), v.jsx("div", {
                                className: "space-y-3",
                                children: d.map( (S, b) => {
                                    const P = gs[S.role] || a;
                                    return v.jsxs(fe.div, {
                                        initial: {
                                            opacity: 0,
                                            x: -10
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            duration: .3,
                                            delay: .1 + b * .08
                                        },
                                        className: "relative flex items-center gap-3",
                                        children: [v.jsx("div", {
                                            className: "absolute -left-5 w-2.5 h-2.5 rounded-full flex-shrink-0",
                                            style: {
                                                background: `linear-gradient(135deg, ${P.borderHover}, ${P.glow})`,
                                                border: "1px solid rgba(255,255,255,0.15)",
                                                boxShadow: `0 0 8px ${P.glowHover}`
                                            }
                                        }), v.jsxs("div", {
                                            className: "flex-1",
                                            children: [v.jsx("span", {
                                                className: `inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${P.badge}`,
                                                children: S.role
                                            }), S.note && v.jsx("span", {
                                                className: "ml-2 text-[10px] text-white/35",
                                                children: S.note
                                            })]
                                        })]
                                    }, b)
                                }
                                )
                            })]
                        })]
                    }), h && v.jsxs("div", {
                        className: "mb-6",
                        children: [v.jsxs("h3", {
                            className: "flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-3",
                            children: [v.jsx(F2, {
                                className: "w-3.5 h-3.5"
                            }), "Responsibilities"]
                        }), v.jsx("ul", {
                            className: "space-y-1.5",
                            children: t.responsibilities.map( (S, b) => v.jsxs("li", {
                                className: "flex items-start gap-2 text-xs text-white/55 leading-relaxed",
                                children: [v.jsx("span", {
                                    className: "mt-1 w-1 h-1 rounded-full bg-white/30 flex-shrink-0"
                                }), S]
                            }, b))
                        })]
                    }), m && v.jsxs("div", {
                        className: "mb-6",
                        children: [v.jsxs("h3", {
                            className: "flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-3",
                            children: [v.jsx(D2, {
                                className: "w-3.5 h-3.5"
                            }), "Achievements"]
                        }), v.jsx("ul", {
                            className: "space-y-1.5",
                            children: t.achievements.map( (S, b) => v.jsxs("li", {
                                className: "flex items-start gap-2 text-xs text-white/55 leading-relaxed",
                                children: [v.jsx("span", {
                                    className: "mt-1 w-1 h-1 rounded-full bg-yellow-400/50 flex-shrink-0"
                                }), S]
                            }, b))
                        })]
                    }), g && v.jsxs("div", {
                        className: "mb-6",
                        children: [v.jsxs("h3", {
                            className: "flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-3",
                            children: [v.jsx(K2, {
                                className: "w-3.5 h-3.5"
                            }), "Screenshots / Proof"]
                        }), v.jsx("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: t.proofImages.map( (S, b) => v.jsxs("div", {
                                className: "aspect-video rounded-lg overflow-hidden relative group cursor-pointer",
                                style: {
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.08)"
                                },
                                onClick: () => i(S),
                                children: [v.jsx("img", {
                                    src: S,
                                    alt: `Proof ${b + 1}`,
                                    className: "w-full h-full object-cover"
                                }), v.jsx("div", {
                                    className: "absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center",
                                    children: v.jsx(dv, {
                                        className: "w-4 h-4 text-white/0 group-hover:text-white/80 transition-all duration-200"
                                    })
                                })]
                            }, b))
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsxs("h3", {
                            className: "flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-3",
                            children: [v.jsx($o, {
                                className: "w-3.5 h-3.5"
                            }), "Vouches ", l > 0 && `(${l})`]
                        }), l > 0 ? v.jsx("div", {
                            className: "space-y-3",
                            children: t.vouches.map( (S, b) => v.jsx(g1, {
                                vouch: S,
                                index: b
                            }, b))
                        }) : v.jsx("p", {
                            className: "text-xs text-white/25 italic py-4 text-center",
                            children: "No vouches yet for this server."
                        })]
                    })]
                })]
            })
        }), v.jsx(Gn, {
            children: r && v.jsxs(fe.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                onClick: S => {
                    S.stopPropagation(),
                    i(null)
                }
                ,
                className: "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm",
                children: [v.jsx("button", {
                    onClick: () => i(null),
                    className: "absolute top-4 right-4 z-10 w-8 h-8 rounded-lg flex items-center justify-center",
                    style: {
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.15)"
                    },
                    children: v.jsx(Ol, {
                        className: "w-4 h-4 text-white/70"
                    })
                }), v.jsx(fe.img, {
                    initial: {
                        scale: .9,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        scale: .9,
                        opacity: 0
                    },
                    src: r,
                    alt: "Proof",
                    className: "max-w-full max-h-[90vh] rounded-xl object-contain",
                    onClick: S => S.stopPropagation()
                })]
            })
        })]
    })
}
function o3() {
    return v.jsx(fe.footer, {
        className: "relative z-10 flex justify-center items-center py-12 mt-4",
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: .7,
            delay: .6
        }
    })
}
function a3() {
    const [t,e] = L.useState("All")
      , [r,i] = L.useState(null)
      , [a,l] = L.useState( () => {
        try {
            return JSON.parse(localStorage.getItem("portfolio_vouches_v10") || "[]")
        } catch {
            return []
        }
    }
    );
    L.useEffect( () => {
        localStorage.setItem("portfolio_vouches_v10", JSON.stringify(a))
    }
    , [a]),
    L.useEffect( () => {
        const k = T => {
            if (T.key === "portfolio_vouches_v10" && T.newValue)
                try {
                    l(JSON.parse(T.newValue))
                } catch {}
        }
        ;
        return window.addEventListener("storage", k),
        () => window.removeEventListener("storage", k)
    }
    , []);
    const u = k => {
        const T = (k.serverName || "").trim()
          , E = Ro.find(S => S.name.toLowerCase() === T.toLowerCase());
        l(S => [{
            ...k,
            serverName: E ? E.name : T || "General"
        }, ...S])
    }
      , d = L.useMemo( () => {
        const k = new Set;
        return Ro.forEach(T => (T.vouches || []).forEach(E => k.add((E.username || "").toLowerCase()))),
        a.forEach(T => k.add((T.username || "").toLowerCase())),
        [...k]
    }
    , [a])
      , h = L.useMemo( () => Ro.map(k => {
        const T = a.filter(E => (E.serverName || "").trim().toLowerCase() === k.name.toLowerCase());
        return T.length ? {
            ...k,
            vouches: [...T, ...k.vouches || []]
        } : k
    }
    ), [a])
      , m = {
        Owner: 0,
        "Co-Owner": 1,
        Overseer: 2,
        "Staff Manager": 3,
        Manager: 3.5,
        "Community Manager": 4,
        SMA: 5,
        CMA: 6,
        MMA: 7,
        Recruiter: 8,
        Administrator: 9,
        Admin: 9,
        "Sr Mod": 10,
        Moderator: 11,
        "Jr Mod": 11.5,
        Helper: 12
    }
      , g = k => {
        const T = parseFloat(k.replace(/[^0-9.]/g, ""));
        return k.includes("k") ? T * 1e3 : T
    }
      , y = k => [...k].sort( (T, E) => {
        const S = (m[T.role] ?? 99) - (m[E.role] ?? 99);
        return S !== 0 ? S : g(E.members) - g(T.members)
    }
    )
      , w = L.useMemo( () => {
        if (t === "All")
            return y(h);
        if (Qy[t]) {
            const k = Qy[t];
            return y(h.filter(T => k.includes(T.role)))
        }
        return y(t === "Administrator" ? h.filter(k => k.role === "Administrator" || k.role === "Admin") : h.filter(k => k.role === t))
    }
    , [t, h]);
    return v.jsxs("div", {
        className: "min-h-screen relative",
        children: [v.jsx(c_, {}), v.jsx(U4, {}), v.jsx(H4, {}), v.jsx(Q4, {
            servers: h,
            onServerClick: i
        }), v.jsxs("div", {
            id: "server-section",
            className: "relative z-10 max-w-7xl mx-auto",
            children: [v.jsx(G4, {}), v.jsx(J4, {
                activeFilter: t,
                onFilterChange: e
            }), v.jsx(e3, {
                servers: w,
                onServerClick: i
            }), v.jsx(n3, {
                extraVouches: a
            }), v.jsx(s3, {
                onSubmit: u,
                existingUsernames: d
            }), v.jsx(o3, {}), v.jsx(i3, {
                server: r,
                onClose: () => i(null)
            })]
        })]
    })
}
const l3 = () => {
    const {isLoadingAuth: t, isLoadingPublicSettings: e, authError: r, navigateToLogin: i} = l_();
    if (e || t)
        return v.jsx("div", {
            className: "fixed inset-0 flex items-center justify-center",
            children: v.jsx("div", {
                className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
            })
        });
    if (r) {
        if (r.type === "user_not_registered")
            return v.jsx(u_, {});
        if (r.type === "auth_required")
            return i(),
            null
    }
    return v.jsxs(k5, {
        children: [v.jsx(Wd, {
            path: "/",
            element: v.jsx(a3, {})
        }), v.jsx(Wd, {
            path: "*",
            element: v.jsx(o_, {})
        })]
    })
}
;
function u3() {
    return v.jsx(a_, {
        children: v.jsxs(Tk, {
            client: Vk,
            children: [v.jsx(T5, {
                children: v.jsx(l3, {})
            }), v.jsx(ek, {})]
        })
    })
}
E2.createRoot(document.getElementById("root")).render(v.jsx(u3, {}));
