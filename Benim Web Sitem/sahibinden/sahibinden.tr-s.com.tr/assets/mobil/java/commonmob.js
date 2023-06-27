(function(a, d) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = a.document ? d(a, !0) : function(a) {
        if (!a.document) throw Error("jQuery requires a window with a document");
        return d(a)
    } : d(a)
})("undefined" !== typeof window ? window : this, function(a, d) {
    function c(l) {
        var a = "length" in l && l.length,
            b = f.type(l);
        return "function" === b || f.isWindow(l) ? !1 : 1 === l.nodeType && a ? !0 : "array" === b || 0 === a || "number" === typeof a && 0 < a && a - 1 in l
    }

    function b(l, a, b) {
        if (f.isFunction(a)) return f.grep(l, function(l, c) {
            return !!a.call(l,
                c, l) !== b
        });
        if (a.nodeType) return f.grep(l, function(l) {
            return l === a !== b
        });
        if ("string" === typeof a) {
            if (Wa.test(a)) return f.filter(a, l, b);
            a = f.filter(a, l)
        }
        return f.grep(l, function(l) {
            return 0 <= f.inArray(l, a) !== b
        })
    }

    function e(l, a) {
        do l = l[a]; while (l && 1 !== l.nodeType);
        return l
    }

    function g(l) {
        var a = Ea[l] = {};
        f.each(l.match(ma) || [], function(l, b) {
            a[b] = !0
        });
        return a
    }

    function h() {
        I.addEventListener ? (I.removeEventListener("DOMContentLoaded", k, !1), a.removeEventListener("load", k, !1)) : (I.detachEvent("onreadystatechange",
            k), a.detachEvent("onload", k))
    }

    function k() {
        if (I.addEventListener || "load" === event.type || "complete" === I.readyState) h(), f.ready()
    }

    function m(l, a, b) {
        if (void 0 === b && 1 === l.nodeType)
            if (b = "data-" + a.replace(Fb, "-$1").toLowerCase(), b = l.getAttribute(b), "string" === typeof b) {
                try {
                    b = "true" === b ? !0 : "false" === b ? !1 : "null" === b ? null : +b + "" === b ? +b : Gb.test(b) ? f.parseJSON(b) : b
                } catch (c) {}
                f.data(l, a, b)
            } else b = void 0;
        return b
    }

    function p(l) {
        for (var a in l)
            if (("data" !== a || !f.isEmptyObject(l[a])) && "toJSON" !== a) return !1;
        return !0
    }

    function r(l, a, b, c) {
        if (f.acceptData(l)) {
            var e = f.expando,
                d = l.nodeType,
                g = d ? f.cache : l,
                h = d ? l[e] : l[e] && e;
            if (h && g[h] && (c || g[h].data) || void 0 !== b || "string" !== typeof a) {
                h || (h = d ? l[e] = Z.pop() || f.guid++ : e);
                g[h] || (g[h] = d ? {} : {
                    toJSON: f.noop
                });
                if ("object" === typeof a || "function" === typeof a) c ? g[h] = f.extend(g[h], a) : g[h].data = f.extend(g[h].data, a);
                l = g[h];
                c || (l.data || (l.data = {}), l = l.data);
                void 0 !== b && (l[f.camelCase(a)] = b);
                "string" === typeof a ? (b = l[a], null == b && (b = l[f.camelCase(a)])) : b = l;
                return b
            }
        }
    }

    function z(l, a, b) {
        if (f.acceptData(l)) {
            var c,
                e, d = l.nodeType,
                g = d ? f.cache : l,
                h = d ? l[f.expando] : f.expando;
            if (g[h]) {
                if (a && (c = b ? g[h] : g[h].data)) {
                    f.isArray(a) ? a = a.concat(f.map(a, f.camelCase)) : a in c ? a = [a] : (a = f.camelCase(a), a = a in c ? [a] : a.split(" "));
                    for (e = a.length; e--;) delete c[a[e]];
                    if (b ? !p(c) : !f.isEmptyObject(c)) return
                }
                if (!b && (delete g[h].data, !p(g[h]))) return;
                d ? f.cleanData([l], !0) : E.deleteExpando || g != g.window ? delete g[h] : g[h] = null
            }
        }
    }

    function v() {
        return !0
    }

    function A() {
        return !1
    }

    function n() {
        try {
            return I.activeElement
        } catch (l) {}
    }

    function w(l) {
        var a =
            jb.split("|");
        l = l.createDocumentFragment();
        if (l.createElement)
            for (; a.length;) l.createElement(a.pop());
        return l
    }

    function C(l, a) {
        var b, c, e = 0,
            d = "undefined" !== typeof l.getElementsByTagName ? l.getElementsByTagName(a || "*") : "undefined" !== typeof l.querySelectorAll ? l.querySelectorAll(a || "*") : void 0;
        if (!d)
            for (d = [], b = l.childNodes || l; null != (c = b[e]); e++) !a || f.nodeName(c, a) ? d.push(c) : f.merge(d, C(c, a));
        return void 0 === a || a && f.nodeName(l, a) ? f.merge([l], d) : d
    }

    function B(l) {
        Xa.test(l.type) && (l.defaultChecked = l.checked)
    }

    function t(l, a) {
        return f.nodeName(l, "table") && f.nodeName(11 !== a.nodeType ? a : a.firstChild, "tr") ? l.getElementsByTagName("tbody")[0] || l.appendChild(l.ownerDocument.createElement("tbody")) : l
    }

    function F(l) {
        l.type = (null !== f.find.attr(l, "type")) + "/" + l.type;
        return l
    }

    function G(l) {
        var a = Ib.exec(l.type);
        a ? l.type = a[1] : l.removeAttribute("type");
        return l
    }

    function y(l, a) {
        for (var b, c = 0; null != (b = l[c]); c++) f._data(b, "globalEval", !a || f._data(a[c], "globalEval"))
    }

    function H(l, a) {
        if (1 === a.nodeType && f.hasData(l)) {
            var b,
                c, e;
            c = f._data(l);
            l = f._data(a, c);
            var d = c.events;
            if (d)
                for (b in delete l.handle, l.events = {}, d)
                    for (c = 0, e = d[b].length; c < e; c++) f.event.add(a, b, d[b][c]);
            l.data && (l.data = f.extend({}, l.data))
        }
    }

    function O(l, D) {
        var b;
        l = f(D.createElement(l)).appendTo(D.body);
        D = a.getDefaultComputedStyle && (b = a.getDefaultComputedStyle(l[0])) ? b.display : f.css(l[0], "display");
        l.detach();
        return D
    }

    function W(l) {
        var a = I,
            b = kb[l];
        b || (b = O(l, a), "none" !== b && b || (Ia = (Ia || f("\x3ciframe frameborder\x3d'0' width\x3d'0' height\x3d'0'/\x3e")).appendTo(a.documentElement),
            a = (Ia[0].contentWindow || Ia[0].contentDocument).document, a.write(), a.close(), b = O(l, a), Ia.detach()), kb[l] = b);
        return b
    }

    function K(l, a) {
        return {
            get: function() {
                var b = l();
                if (null != b)
                    if (b) delete this.get;
                    else return (this.get = a).apply(this, arguments)
            }
        }
    }

    function ba(l, a) {
        if (a in l) return a;
        for (var b = a.charAt(0).toUpperCase() + a.slice(1), c = a, e = lb.length; e--;)
            if (a = lb[e] + b, a in l) return a;
        return c
    }

    function R(l, a) {
        for (var b, c, e, d = [], g = 0, h = l.length; g < h; g++) c = l[g], c.style && (d[g] = f._data(c, "olddisplay"), b = c.style.display,
            a ? (d[g] || "none" !== b || (c.style.display = ""), "" === c.style.display && Ja(c) && (d[g] = f._data(c, "olddisplay", W(c.nodeName)))) : (e = Ja(c), (b && "none" !== b || !e) && f._data(c, "olddisplay", e ? b : f.css(c, "display"))));
        for (g = 0; g < h; g++) c = l[g], !c.style || a && "none" !== c.style.display && "" !== c.style.display || (c.style.display = a ? d[g] || "" : "none");
        return l
    }

    function fa(l, a, b) {
        return (l = Jb.exec(a)) ? Math.max(0, l[1] - (b || 0)) + (l[2] || "px") : a
    }

    function ga(l, a, b, c, e) {
        a = b === (c ? "border" : "content") ? 4 : "width" === a ? 1 : 0;
        for (var d = 0; 4 > a; a += 2) "margin" ===
            b && (d += f.css(l, b + va[a], !0, e)), c ? ("content" === b && (d -= f.css(l, "padding" + va[a], !0, e)), "margin" !== b && (d -= f.css(l, "border" + va[a] + "Width", !0, e))) : (d += f.css(l, "padding" + va[a], !0, e), "padding" !== b && (d += f.css(l, "border" + va[a] + "Width", !0, e)));
        return d
    }

    function u(l, a, b) {
        var c = !0,
            e = "width" === a ? l.offsetWidth : l.offsetHeight,
            d = wa(l),
            g = E.boxSizing && "border-box" === f.css(l, "boxSizing", !1, d);
        if (0 >= e || null == e) {
            e = xa(l, a, d);
            if (0 > e || null == e) e = l.style[a];
            if (Ma.test(e)) return e;
            c = g && (E.boxSizingReliable() || e === l.style[a]);
            e = parseFloat(e) || 0
        }
        return e + ga(l, a, b || (g ? "border" : "content"), c, d) + "px"
    }

    function Q(l, a, b, c, e) {
        return new Q.prototype.init(l, a, b, c, e)
    }

    function J() {
        setTimeout(function() {
            Fa = void 0
        });
        return Fa = f.now()
    }

    function V(l, a) {
        var b, c = {
                height: l
            },
            e = 0;
        for (a = a ? 1 : 0; 4 > e; e += 2 - a) b = va[e], c["margin" + b] = c["padding" + b] = l;
        a && (c.opacity = c.width = l);
        return c
    }

    function N(l, a, b) {
        for (var c, e = (Ka[a] || []).concat(Ka["*"]), f = 0, d = e.length; f < d; f++)
            if (c = e[f].call(b, a, l)) return c
    }

    function x(l, a) {
        var b, c, e, d, g;
        for (b in l)
            if (c = f.camelCase(b),
                e = a[c], d = l[b], f.isArray(d) && (e = d[1], d = l[b] = d[0]), b !== c && (l[c] = d, delete l[b]), (g = f.cssHooks[c]) && "expand" in g)
                for (b in d = g.expand(d), delete l[c], d) b in l || (l[b] = d[b], a[b] = e);
            else a[c] = e
    }

    function S(l, a, b) {
        var c, e = 0,
            d = Na.length,
            g = f.Deferred().always(function() {
                delete h.elem
            }),
            h = function() {
                if (c) return !1;
                for (var a = Fa || J(), a = Math.max(0, k.startTime + k.duration - a), b = 1 - (a / k.duration || 0), D = 0, e = k.tweens.length; D < e; D++) k.tweens[D].run(b);
                g.notifyWith(l, [k, b, a]);
                if (1 > b && e) return a;
                g.resolveWith(l, [k]);
                return !1
            },
            k = g.promise({
                elem: l,
                props: f.extend({}, a),
                opts: f.extend(!0, {
                    specialEasing: {}
                }, b),
                originalProperties: a,
                originalOptions: b,
                startTime: Fa || J(),
                duration: b.duration,
                tweens: [],
                createTween: function(a, b) {
                    a = f.Tween(l, k.opts, a, b, k.opts.specialEasing[a] || k.opts.easing);
                    k.tweens.push(a);
                    return a
                },
                stop: function(a) {
                    var b = 0,
                        D = a ? k.tweens.length : 0;
                    if (c) return this;
                    for (c = !0; b < D; b++) k.tweens[b].run(1);
                    a ? g.resolveWith(l, [k, a]) : g.rejectWith(l, [k, a]);
                    return this
                }
            });
        b = k.props;
        for (x(b, k.opts.specialEasing); e < d; e++)
            if (a = Na[e].call(k,
                    l, b, k.opts)) return a;
        f.map(b, N, k);
        f.isFunction(k.opts.start) && k.opts.start.call(l, k);
        f.fx.timer(f.extend(h, {
            elem: l,
            anim: k,
            queue: k.opts.queue
        }));
        return k.progress(k.opts.progress).done(k.opts.done, k.opts.complete).fail(k.opts.fail).always(k.opts.always)
    }

    function M(l) {
        return function(a, b) {
            "string" !== typeof a && (b = a, a = "*");
            var c = 0,
                e = a.toLowerCase().match(ma) || [];
            if (f.isFunction(b))
                for (; a = e[c++];) "+" === a.charAt(0) ? (a = a.slice(1) || "*", (l[a] = l[a] || []).unshift(b)) : (l[a] = l[a] || []).push(b)
        }
    }

    function q(l, a, b,
        c) {
        function e(h) {
            var k;
            d[h] = !0;
            f.each(l[h] || [], function(l, f) {
                l = f(a, b, c);
                if ("string" === typeof l && !g && !d[l]) return a.dataTypes.unshift(l), e(l), !1;
                if (g) return !(k = l)
            });
            return k
        }
        var d = {},
            g = l === Ya;
        return e(a.dataTypes[0]) || !d["*"] && e("*")
    }

    function L(l, a) {
        var b, c, e = f.ajaxSettings.flatOptions || {};
        for (c in a) void 0 !== a[c] && ((e[c] ? l : b || (b = {}))[c] = a[c]);
        b && f.extend(!0, l, b);
        return l
    }

    function da(l, a, b, c) {
        var e;
        if (f.isArray(a)) f.each(a, function(a, D) {
            b || Kb.test(l) ? c(l, D) : da(l + "[" + ("object" === typeof D ? a : "") + "]",
                D, b, c)
        });
        else if (b || "object" !== f.type(a)) c(l, a);
        else
            for (e in a) da(l + "[" + e + "]", a[e], b, c)
    }

    function T() {
        try {
            return new a.XMLHttpRequest
        } catch (l) {}
    }

    function aa(a) {
        return f.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var Z = [],
        Y = Z.slice,
        P = Z.concat,
        ea = Z.push,
        pa = Z.indexOf,
        la = {},
        ka = la.toString,
        X = la.hasOwnProperty,
        E = {},
        f = function(a, b) {
            return new f.fn.init(a, b)
        },
        ya = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        na = /^-ms-/,
        Za = /-([\da-z])/gi,
        La = function(a, b) {
            return b.toUpperCase()
        };
    f.fn = f.prototype = {
        jquery: "1.11.3",
        constructor: f,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : Y.call(this)
        },
        pushStack: function(a) {
            a = f.merge(this.constructor(), a);
            a.prevObject = this;
            a.context = this.context;
            return a
        },
        each: function(a, b) {
            return f.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(f.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && a < b ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ea,
        sort: Z.sort,
        splice: Z.splice
    };
    f.extend = f.fn.extend = function() {
        var a, b, c, e, d, g = arguments[0] || {},
            h = 1,
            k = arguments.length,
            m = !1;
        "boolean" === typeof g && (m = g, g = arguments[h] || {}, h++);
        "object" === typeof g || f.isFunction(g) || (g = {});
        h === k && (g = this, h--);
        for (; h < k; h++)
            if (null != (d = arguments[h]))
                for (e in d) a = g[e], c = d[e], g !== c && (m && c && (f.isPlainObject(c) ||
                    (b = f.isArray(c))) ? (b ? (b = !1, a = a && f.isArray(a) ? a : []) : a = a && f.isPlainObject(a) ? a : {}, g[e] = f.extend(m, a, c)) : void 0 !== c && (g[e] = c));
        return g
    };
    f.extend({
        expando: "jQuery" + ("1.11.3" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === f.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === f.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !f.isArray(a) && 0 <= a - parseFloat(a) + 1
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== f.type(a) || a.nodeType || f.isWindow(a)) return !1;
            try {
                if (a.constructor && !X.call(a, "constructor") && !X.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (E.ownLast)
                for (b in a) return X.call(a, b);
            for (b in a);
            return void 0 === b || X.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? la[ka.call(a)] || "object" : typeof a
        },
        globalEval: function(l) {
            l && f.trim(l) && (a.execScript || function(l) {
                a.eval.call(a,
                    l)
            })(l)
        },
        camelCase: function(a) {
            return a.replace(na, "ms-").replace(Za, La)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, e) {
            var f, d = 0,
                g = a.length;
            f = c(a);
            if (e)
                if (f)
                    for (; d < g && (f = b.apply(a[d], e), !1 !== f); d++);
                else
                    for (d in a) {
                        if (f = b.apply(a[d], e), !1 === f) break
                    } else if (f)
                        for (; d < g && (f = b.call(a[d], d, a[d]), !1 !== f); d++);
                    else
                        for (d in a)
                            if (f = b.call(a[d], d, a[d]), !1 === f) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(ya, "")
        },
        makeArray: function(a,
            b) {
            b = b || [];
            null != a && (c(Object(a)) ? f.merge(b, "string" === typeof a ? [a] : a) : ea.call(b, a));
            return b
        },
        inArray: function(a, b, c) {
            var e;
            if (b) {
                if (pa) return pa.call(b, a, c);
                e = b.length;
                for (c = c ? 0 > c ? Math.max(0, e + c) : c : 0; c < e; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, e = 0, f = a.length; e < c;) a[f++] = b[e++];
            if (c !== c)
                for (; void 0 !== b[e];) a[f++] = b[e++];
            a.length = f;
            return a
        },
        grep: function(a, b, c) {
            for (var e = [], f = 0, d = a.length, g = !c; f < d; f++) c = !b(a[f], f), c !== g && e.push(a[f]);
            return e
        },
        map: function(a,
            b, e) {
            var f, d = 0,
                g = a.length,
                h = [];
            if (c(a))
                for (; d < g; d++) f = b(a[d], d, e), null != f && h.push(f);
            else
                for (d in a) f = b(a[d], d, e), null != f && h.push(f);
            return P.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e;
            "string" === typeof b && (e = a[b], b = a, a = e);
            if (f.isFunction(a)) return c = Y.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(Y.call(arguments)))
            }, e.guid = a.guid = a.guid || f.guid++, e
        },
        now: function() {
            return +new Date
        },
        support: E
    });
    f.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function(a, b) {
            la["[object " + b + "]"] = b.toLowerCase()
        });
    var ta = function(a) {
        function b(a, l, c, e) {
            var f, D, d, g, h;
            (l ? l.ownerDocument || l : R) !== T && na(l);
            l = l || T;
            c = c || [];
            g = l.nodeType;
            if ("string" !== typeof a || !a || 1 !== g && 9 !== g && 11 !== g) return c;
            if (!e && C) {
                if (11 !== g && (f = ja.exec(a)))
                    if (d = f[1])
                        if (9 === g)
                            if ((D = l.getElementById(d)) && D.parentNode) {
                                if (D.id === d) return c.push(D), c
                            } else return c;
                else {
                    if (l.ownerDocument && (D = l.ownerDocument.getElementById(d)) && da(l, D) && D.id === d) return c.push(D), c
                } else {
                    if (f[2]) return ka.apply(c,
                        l.getElementsByTagName(a)), c;
                    if ((d = f[3]) && L.getElementsByClassName) return ka.apply(c, l.getElementsByClassName(d)), c
                }
                if (L.qsa && (!Q || !Q.test(a))) {
                    D = f = N;
                    d = l;
                    h = 1 !== g && a;
                    if (1 === g && "object" !== l.nodeName.toLowerCase()) {
                        g = G(a);
                        (f = l.getAttribute("id")) ? D = f.replace(qa, "\\$\x26"): l.setAttribute("id", D);
                        D = "[id\x3d'" + D + "'] ";
                        for (d = g.length; d--;) g[d] = D + B(g[d]);
                        d = Ea.test(a) && t(l.parentNode) || l;
                        h = g.join(",")
                    }
                    if (h) try {
                        return ka.apply(c, d.querySelectorAll(h)), c
                    } catch (U) {} finally {
                        f || l.removeAttribute("id")
                    }
                }
            }
            return u(a.replace(ea,
                "$1"), l, c, e)
        }

        function c() {
            function a(b, c) {
                l.push(b + " ") > J.cacheLength && delete a[l.shift()];
                return a[b + " "] = c
            }
            var l = [];
            return a
        }

        function e(a) {
            a[N] = !0;
            return a
        }

        function f(a) {
            var l = T.createElement("div");
            try {
                return !!a(l)
            } catch (b) {
                return !1
            } finally {
                l.parentNode && l.parentNode.removeChild(l)
            }
        }

        function d(a, l) {
            var b = a.split("|");
            for (a = a.length; a--;) J.attrHandle[b[a]] = l
        }

        function g(a, l) {
            var b = l && a,
                c = b && 1 === a.nodeType && 1 === l.nodeType && (~l.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (c) return c;
            if (b)
                for (; b = b.nextSibling;)
                    if (b === l) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(l) {
                return "input" === l.nodeName.toLowerCase() && l.type === a
            }
        }

        function k(a) {
            return function(l) {
                var b = l.nodeName.toLowerCase();
                return ("input" === b || "button" === b) && l.type === a
            }
        }

        function m(a) {
            return e(function(l) {
                l = +l;
                return e(function(b, c) {
                    for (var e, f = a([], b.length, l), D = f.length; D--;) b[e = f[D]] && (b[e] = !(c[e] = b[e]))
                })
            })
        }

        function t(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }

        function y() {}

        function B(a) {
            for (var l =
                    0, b = a.length, c = ""; l < b; l++) c += a[l].value;
            return c
        }

        function n(a, l, b) {
            var c = l.dir,
                e = b && "parentNode" === c,
                f = E++;
            return l.first ? function(l, b, f) {
                for (; l = l[c];)
                    if (1 === l.nodeType || e) return a(l, b, f)
            } : function(l, b, D) {
                var d, g, h = [M, f];
                if (D)
                    for (; l = l[c];) {
                        if ((1 === l.nodeType || e) && a(l, b, D)) return !0
                    } else
                        for (; l = l[c];)
                            if (1 === l.nodeType || e) {
                                g = l[N] || (l[N] = {});
                                if ((d = g[c]) && d[0] === M && d[1] === f) return h[2] = d[2];
                                g[c] = h;
                                if (h[2] = a(l, b, D)) return !0
                            }
            }
        }

        function H(a) {
            return 1 < a.length ? function(l, b, c) {
                for (var e = a.length; e--;)
                    if (!a[e](l,
                            b, c)) return !1;
                return !0
            } : a[0]
        }

        function q(a, l, b, c, e) {
            for (var f, D = [], d = 0, g = a.length, h = null != l; d < g; d++)
                if (f = a[d])
                    if (!b || b(f, c, e)) D.push(f), h && l.push(d);
            return D
        }

        function v(a, l, c, f, d, g) {
            f && !f[N] && (f = v(f));
            d && !d[N] && (d = v(d, g));
            return e(function(e, g, h, U) {
                var k, ca, ia = [],
                    m = [],
                    ha = g.length,
                    t;
                if (!(t = e)) {
                    t = l || "*";
                    for (var y = h.nodeType ? [h] : h, B = [], n = 0, H = y.length; n < H; n++) b(t, y[n], B);
                    t = B
                }
                t = !a || !e && l ? t : q(t, ia, a, h, U);
                y = c ? d || (e ? a : ha || f) ? [] : g : t;
                c && c(t, y, h, U);
                if (f)
                    for (k = q(y, m), f(k, [], h, U), h = k.length; h--;)
                        if (ca = k[h]) y[m[h]] = !(t[m[h]] = ca);
                if (e) {
                    if (d || a) {
                        if (d) {
                            k = [];
                            for (h = y.length; h--;)(ca = y[h]) && k.push(t[h] = ca);
                            d(null, y = [], k, U)
                        }
                        for (h = y.length; h--;)(ca = y[h]) && -1 < (k = d ? P(e, ca) : ia[h]) && (e[k] = !(g[k] = ca))
                    }
                } else y = q(y === g ? y.splice(ha, y.length) : y), d ? d(null, g, y, U) : ka.apply(g, y)
            })
        }

        function p(a) {
            var l, b, c, e = a.length,
                f = J.relative[a[0].type];
            b = f || J.relative[" "];
            for (var D = f ? 1 : 0, d = n(function(a) {
                    return a === l
                }, b, !0), g = n(function(a) {
                    return -1 < P(l, a)
                }, b, !0), h = [function(a, b, c) {
                    a = !f && (c || b !== w) || ((l = b).nodeType ? d(a, b, c) : g(a, b, c));
                    l = null;
                    return a
                }]; D <
                e; D++)
                if (b = J.relative[a[D].type]) h = [n(H(h), b)];
                else {
                    b = J.filter[a[D].type].apply(null, a[D].matches);
                    if (b[N]) {
                        for (c = ++D; c < e && !J.relative[a[c].type]; c++);
                        return v(1 < D && H(h), 1 < D && B(a.slice(0, D - 1).concat({
                            value: " " === a[D - 2].type ? "*" : ""
                        })).replace(ea, "$1"), b, D < c && p(a.slice(D, c)), c < e && p(a = a.slice(c)), c < e && B(a))
                    }
                    h.push(b)
                }
            return H(h)
        }

        function K(a, l) {
            var c = 0 < l.length,
                f = 0 < a.length,
                d = function(e, d, g, h, U) {
                    var k, ca, ia, m = 0,
                        ha = "0",
                        t = e && [],
                        y = [],
                        B = w,
                        n = e || f && J.find.TAG("*", U),
                        H = M += null == B ? 1 : Math.random() || .1,
                        Hb = n.length;
                    for (U && (w = d !== T && d); ha !== Hb && null != (k = n[ha]); ha++) {
                        if (f && k) {
                            for (ca = 0; ia = a[ca++];)
                                if (ia(k, d, g)) {
                                    h.push(k);
                                    break
                                }
                            U && (M = H)
                        }
                        c && ((k = !ia && k) && m--, e && t.push(k))
                    }
                    m += ha;
                    if (c && ha !== m) {
                        for (ca = 0; ia = l[ca++];) ia(t, y, d, g);
                        if (e) {
                            if (0 < m)
                                for (; ha--;) t[ha] || y[ha] || (y[ha] = fa.call(h));
                            y = q(y)
                        }
                        ka.apply(h, y);
                        U && !e && 0 < y.length && 1 < m + l.length && b.uniqueSort(h)
                    }
                    U && (M = H, w = B);
                    return t
                };
            return c ? e(d) : d
        }
        var O, L, J, x, A, G, F, u, w, W, r, na, T, V, C, Q, z, ba, da, N = "sizzle" + 1 * new Date,
            R = a.document,
            M = 0,
            E = 0,
            Z = c(),
            S = c(),
            Y = c(),
            aa = function(a, l) {
                a === l &&
                    (r = !0);
                return 0
            },
            la = {}.hasOwnProperty,
            I = [],
            fa = I.pop,
            Za = I.push,
            ka = I.push,
            X = I.slice,
            P = function(a, l) {
                for (var b = 0, c = a.length; b < c; b++)
                    if (a[b] === l) return b;
                return -1
            },
            ta = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
            ga = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ta + "))|)[\\x20\\t\\r\\n\\f]*\\]",
            La = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            ga + ")*)|.*)\\)|)",
            Pa = /[\x20\t\r\n\f]+/g,
            ea = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
            pa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            ya = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            za = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
            Oa = new RegExp(La),
            $a = new RegExp("^" + ta + "$"),
            Ga = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ga),
                PSEUDO: new RegExp("^" + La),
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            ma = /^(?:input|select|textarea|button)$/i,
            Wa = /^h\d$/i,
            Aa =
            /^[^{]+\{\s*\[native \w/,
            ja = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Ea = /[+~]/,
            qa = /'|\\/g,
            ra = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
            sa = function(a, l, b) {
                a = "0x" + l - 65536;
                return a !== a || b ? l : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
            },
            oa = function() {
                na()
            };
        try {
            ka.apply(I = X.call(R.childNodes), R.childNodes), I[R.childNodes.length].nodeType
        } catch (oc) {
            ka = {
                apply: I.length ? function(a, l) {
                    Za.apply(a, X.call(l))
                } : function(a, l) {
                    for (var b = a.length, c = 0; a[b++] = l[c++];);
                    a.length =
                        b - 1
                }
            }
        }
        L = b.support = {};
        A = b.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        na = b.setDocument = function(a) {
            var l = a ? a.ownerDocument || a : R;
            if (l === T || 9 !== l.nodeType || !l.documentElement) return T;
            T = l;
            V = l.documentElement;
            (a = l.defaultView) && a !== a.top && (a.addEventListener ? a.addEventListener("unload", oa, !1) : a.attachEvent && a.attachEvent("onunload", oa));
            C = !A(l);
            L.attributes = f(function(a) {
                a.className = "i";
                return !a.getAttribute("className")
            });
            L.getElementsByTagName = f(function(a) {
                a.appendChild(l.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            L.getElementsByClassName = Aa.test(l.getElementsByClassName);
            L.getById = f(function(a) {
                V.appendChild(a).id = N;
                return !l.getElementsByName || !l.getElementsByName(N).length
            });
            L.getById ? (J.find.ID = function(a, l) {
                if ("undefined" !== typeof l.getElementById && C) return (a = l.getElementById(a)) && a.parentNode ? [a] : []
            }, J.filter.ID = function(a) {
                var l = a.replace(ra, sa);
                return function(a) {
                    return a.getAttribute("id") === l
                }
            }) : (delete J.find.ID, J.filter.ID = function(a) {
                var l = a.replace(ra,
                    sa);
                return function(a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === l
                }
            });
            J.find.TAG = L.getElementsByTagName ? function(a, l) {
                if ("undefined" !== typeof l.getElementsByTagName) return l.getElementsByTagName(a);
                if (L.qsa) return l.querySelectorAll(a)
            } : function(a, l) {
                var b = [],
                    c = 0;
                l = l.getElementsByTagName(a);
                if ("*" === a) {
                    for (; a = l[c++];) 1 === a.nodeType && b.push(a);
                    return b
                }
                return l
            };
            J.find.CLASS = L.getElementsByClassName && function(a, l) {
                if (C) return l.getElementsByClassName(a)
            };
            z = [];
            Q = [];
            if (L.qsa = Aa.test(l.querySelectorAll)) f(function(a) {
                V.appendChild(a).innerHTML = "\x3ca id\x3d'" + N + "'\x3e\x3c/a\x3e\x3cselect id\x3d'" + N + "-\f]' msallowcapture\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e";
                a.querySelectorAll("[msallowcapture^\x3d'']").length && Q.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || Q.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll("[id~\x3d" + N + "-]").length || Q.push("~\x3d");
                a.querySelectorAll(":checked").length || Q.push(":checked");
                a.querySelectorAll("a#" + N + "+*").length || Q.push(".#.+[+~]")
            }), f(function(a) {
                var b = l.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("name", "D");
                a.querySelectorAll("[name\x3dd]").length && Q.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?\x3d");
                a.querySelectorAll(":enabled").length || Q.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                Q.push(",.*:")
            });
            (L.matchesSelector = Aa.test(ba = V.matches || V.webkitMatchesSelector || V.mozMatchesSelector || V.oMatchesSelector || V.msMatchesSelector)) && f(function(a) {
                L.disconnectedMatch = ba.call(a, "div");
                ba.call(a, "[s!\x3d'']:x");
                z.push("!\x3d", La)
            });
            Q = Q.length && new RegExp(Q.join("|"));
            z = z.length && new RegExp(z.join("|"));
            da = (a = Aa.test(V.compareDocumentPosition)) || Aa.test(V.contains) ? function(a, l) {
                var b = 9 === a.nodeType ? a.documentElement : a;
                l = l && l.parentNode;
                return a === l || !!(l && 1 === l.nodeType && (b.contains ? b.contains(l) : a.compareDocumentPosition &&
                    a.compareDocumentPosition(l) & 16))
            } : function(a, l) {
                if (l)
                    for (; l = l.parentNode;)
                        if (l === a) return !0;
                return !1
            };
            aa = a ? function(a, b) {
                if (a === b) return r = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (c) return c;
                c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                return c & 1 || !L.sortDetached && b.compareDocumentPosition(a) === c ? a === l || a.ownerDocument === R && da(R, a) ? -1 : b === l || b.ownerDocument === R && da(R, b) ? 1 : W ? P(W, a) - P(W, b) : 0 : c & 4 ? -1 : 1
            } : function(a, b) {
                if (a === b) return r = !0, 0;
                var c =
                    0,
                    e = a.parentNode,
                    f = b.parentNode,
                    D = [a],
                    d = [b];
                if (!e || !f) return a === l ? -1 : b === l ? 1 : e ? -1 : f ? 1 : W ? P(W, a) - P(W, b) : 0;
                if (e === f) return g(a, b);
                for (; a = a.parentNode;) D.unshift(a);
                for (a = b; a = a.parentNode;) d.unshift(a);
                for (; D[c] === d[c];) c++;
                return c ? g(D[c], d[c]) : D[c] === R ? -1 : d[c] === R ? 1 : 0
            };
            return l
        };
        b.matches = function(a, l) {
            return b(a, null, null, l)
        };
        b.matchesSelector = function(a, l) {
            (a.ownerDocument || a) !== T && na(a);
            l = l.replace(za, "\x3d'$1']");
            if (!(!L.matchesSelector || !C || z && z.test(l) || Q && Q.test(l))) try {
                var c = ba.call(a, l);
                if (c ||
                    L.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
            } catch (e) {}
            return 0 < b(l, T, null, [a]).length
        };
        b.contains = function(a, l) {
            (a.ownerDocument || a) !== T && na(a);
            return da(a, l)
        };
        b.attr = function(a, l) {
            (a.ownerDocument || a) !== T && na(a);
            var b = J.attrHandle[l.toLowerCase()],
                b = b && la.call(J.attrHandle, l.toLowerCase()) ? b(a, l, !C) : void 0;
            return void 0 !== b ? b : L.attributes || !C ? a.getAttribute(l) : (b = a.getAttributeNode(l)) && b.specified ? b.value : null
        };
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " +
                a);
        };
        b.uniqueSort = function(a) {
            var l, b = [],
                c = 0,
                e = 0;
            r = !L.detectDuplicates;
            W = !L.sortStable && a.slice(0);
            a.sort(aa);
            if (r) {
                for (; l = a[e++];) l === a[e] && (c = b.push(e));
                for (; c--;) a.splice(b[c], 1)
            }
            W = null;
            return a
        };
        x = b.getText = function(a) {
            var l, b = "",
                c = 0;
            l = a.nodeType;
            if (!l)
                for (; l = a[c++];) b += x(l);
            else if (1 === l || 9 === l || 11 === l) {
                if ("string" === typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) b += x(a)
            } else if (3 === l || 4 === l) return a.nodeValue;
            return b
        };
        J = b.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: Ga,
            attrHandle: {},
            find: {},
            relative: {
                "\x3e": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] = a[1].replace(ra, sa);
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ra, sa);
                    "~\x3d" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] &&
                        b.error(a[0]);
                    return a
                },
                PSEUDO: function(a) {
                    var l, b = !a[6] && a[2];
                    if (Ga.CHILD.test(a[0])) return null;
                    a[3] ? a[2] = a[4] || a[5] || "" : b && Oa.test(b) && (l = G(b, !0)) && (l = b.indexOf(")", b.length - l) - b.length) && (a[0] = a[0].slice(0, l), a[2] = b.slice(0, l));
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function(a) {
                    var l = a.replace(ra, sa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === l
                    }
                },
                CLASS: function(a) {
                    var l = Z[a + " "];
                    return l || (l = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"),
                        Z(a, function(a) {
                            return l.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                        }))
                },
                ATTR: function(a, l, c) {
                    return function(e) {
                        e = b.attr(e, a);
                        if (null == e) return "!\x3d" === l;
                        if (!l) return !0;
                        e += "";
                        return "\x3d" === l ? e === c : "!\x3d" === l ? e !== c : "^\x3d" === l ? c && 0 === e.indexOf(c) : "*\x3d" === l ? c && -1 < e.indexOf(c) : "$\x3d" === l ? c && e.slice(-c.length) === c : "~\x3d" === l ? -1 < (" " + e.replace(Pa, " ") + " ").indexOf(c) : "|\x3d" === l ? e === c || e.slice(0, c.length + 1) === c + "-" : !1
                    }
                },
                CHILD: function(a,
                    l, b, c, e) {
                    var f = "nth" !== a.slice(0, 3),
                        D = "last" !== a.slice(-4),
                        d = "of-type" === l;
                    return 1 === c && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(l, b, g) {
                        var h, U, k, ca, ia;
                        b = f !== D ? "nextSibling" : "previousSibling";
                        var m = l.parentNode,
                            ha = d && l.nodeName.toLowerCase();
                        g = !g && !d;
                        if (m) {
                            if (f) {
                                for (; b;) {
                                    for (U = l; U = U[b];)
                                        if (d ? U.nodeName.toLowerCase() === ha : 1 === U.nodeType) return !1;
                                    ia = b = "only" === a && !ia && "nextSibling"
                                }
                                return !0
                            }
                            ia = [D ? m.firstChild : m.lastChild];
                            if (D && g)
                                for (g = m[N] || (m[N] = {}), h = g[a] || [], ca = h[0] === M && h[1], k = h[0] ===
                                    M && h[2], U = ca && m.childNodes[ca]; U = ++ca && U && U[b] || (k = ca = 0) || ia.pop();) {
                                    if (1 === U.nodeType && ++k && U === l) {
                                        g[a] = [M, ca, k];
                                        break
                                    }
                                } else if (g && (h = (l[N] || (l[N] = {}))[a]) && h[0] === M) k = h[1];
                                else
                                    for (;
                                        (U = ++ca && U && U[b] || (k = ca = 0) || ia.pop()) && ((d ? U.nodeName.toLowerCase() !== ha : 1 !== U.nodeType) || !++k || (g && ((U[N] || (U[N] = {}))[a] = [M, k]), U !== l)););
                            k -= e;
                            return k === c || 0 === k % c && 0 <= k / c
                        }
                    }
                },
                PSEUDO: function(a, l) {
                    var c, f = J.pseudos[a] || J.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(l) : 1 < f.length ? (c = [a,
                        a, "", l
                    ], J.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, b) {
                        for (var c, e = f(a, l), D = e.length; D--;) c = P(a, e[D]), a[c] = !(b[c] = e[D])
                    }) : function(a) {
                        return f(a, 0, c)
                    }) : f
                }
            },
            pseudos: {
                not: e(function(a) {
                    var l = [],
                        b = [],
                        c = F(a.replace(ea, "$1"));
                    return c[N] ? e(function(a, l, b, e) {
                        e = c(a, null, e, []);
                        for (var f = a.length; f--;)
                            if (b = e[f]) a[f] = !(l[f] = b)
                    }) : function(a, e, f) {
                        l[0] = a;
                        c(l, null, f, b);
                        l[0] = null;
                        return !b.pop()
                    }
                }),
                has: e(function(a) {
                    return function(l) {
                        return 0 < b(a, l).length
                    }
                }),
                contains: e(function(a) {
                    a = a.replace(ra,
                        sa);
                    return function(l) {
                        return -1 < (l.textContent || l.innerText || x(l)).indexOf(a)
                    }
                }),
                lang: e(function(a) {
                    $a.test(a || "") || b.error("unsupported lang: " + a);
                    a = a.replace(ra, sa).toLowerCase();
                    return function(l) {
                        var b;
                        do
                            if (b = C ? l.lang : l.getAttribute("xml:lang") || l.getAttribute("lang")) return b = b.toLowerCase(), b === a || 0 === b.indexOf(a + "-"); while ((l = l.parentNode) && 1 === l.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === V
                },
                focus: function(a) {
                    return a ===
                        T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var l = a.nodeName.toLowerCase();
                    return "input" === l && !!a.checked || "option" === l && !!a.selected
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !J.pseudos.empty(a)
                },
                header: function(a) {
                    return Wa.test(a.nodeName)
                },
                input: function(a) {
                    return ma.test(a.nodeName)
                },
                button: function(a) {
                    var l = a.nodeName.toLowerCase();
                    return "input" === l && "button" === a.type || "button" === l
                },
                text: function(a) {
                    var l;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (l = a.getAttribute("type")) || "text" === l.toLowerCase())
                },
                first: m(function() {
                    return [0]
                }),
                last: m(function(a, l) {
                    return [l - 1]
                }),
                eq: m(function(a, l, b) {
                    return [0 > b ? b + l : b]
                }),
                even: m(function(a, l) {
                    for (var b = 0; b < l; b += 2) a.push(b);
                    return a
                }),
                odd: m(function(a, l) {
                    for (var b = 1; b < l; b +=
                        2) a.push(b);
                    return a
                }),
                lt: m(function(a, l, b) {
                    for (l = 0 > b ? b + l : b; 0 <= --l;) a.push(l);
                    return a
                }),
                gt: m(function(a, l, b) {
                    for (b = 0 > b ? b + l : b; ++b < l;) a.push(b);
                    return a
                })
            }
        };
        J.pseudos.nth = J.pseudos.eq;
        for (O in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) J.pseudos[O] = h(O);
        for (O in {
                submit: !0,
                reset: !0
            }) J.pseudos[O] = k(O);
        y.prototype = J.filters = J.pseudos;
        J.setFilters = new y;
        G = b.tokenize = function(a, l) {
            var c, e, f, d, g, h, U;
            if (g = S[a + " "]) return l ? 0 : g.slice(0);
            g = a;
            h = [];
            for (U = J.preFilter; g;) {
                if (!c || (e = pa.exec(g))) e && (g = g.slice(e[0].length) ||
                    g), h.push(f = []);
                c = !1;
                if (e = ya.exec(g)) c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(ea, " ")
                }), g = g.slice(c.length);
                for (d in J.filter) !(e = Ga[d].exec(g)) || U[d] && !(e = U[d](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: d,
                    matches: e
                }), g = g.slice(c.length));
                if (!c) break
            }
            return l ? g.length : g ? b.error(a) : S(a, h).slice(0)
        };
        F = b.compile = function(a, l) {
            var b, c = [],
                e = [],
                f = Y[a + " "];
            if (!f) {
                l || (l = G(a));
                for (b = l.length; b--;) f = p(l[b]), f[N] ? c.push(f) : e.push(f);
                f = Y(a, K(e, c));
                f.selector = a
            }
            return f
        };
        u = b.select = function(a, l, b, c) {
            var e, f,
                D, d, g = "function" === typeof a && a,
                h = !c && G(a = g.selector || a);
            b = b || [];
            if (1 === h.length) {
                f = h[0] = h[0].slice(0);
                if (2 < f.length && "ID" === (D = f[0]).type && L.getById && 9 === l.nodeType && C && J.relative[f[1].type]) {
                    l = (J.find.ID(D.matches[0].replace(ra, sa), l) || [])[0];
                    if (!l) return b;
                    g && (l = l.parentNode);
                    a = a.slice(f.shift().value.length)
                }
                for (e = Ga.needsContext.test(a) ? 0 : f.length; e--;) {
                    D = f[e];
                    if (J.relative[d = D.type]) break;
                    if (d = J.find[d])
                        if (c = d(D.matches[0].replace(ra, sa), Ea.test(f[0].type) && t(l.parentNode) || l)) {
                            f.splice(e, 1);
                            a = c.length && B(f);
                            if (!a) return ka.apply(b, c), b;
                            break
                        }
                }
            }(g || F(a, h))(c, l, !C, b, Ea.test(a) && t(l.parentNode) || l);
            return b
        };
        L.sortStable = N.split("").sort(aa).join("") === N;
        L.detectDuplicates = !!r;
        na();
        L.sortDetached = f(function(a) {
            return a.compareDocumentPosition(T.createElement("div")) & 1
        });
        f(function(a) {
            a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
            return "#" === a.firstChild.getAttribute("href")
        }) || d("type|href|height|width", function(a, l, b) {
            if (!b) return a.getAttribute(l, "type" === l.toLowerCase() ? 1 : 2)
        });
        L.attributes &&
            f(function(a) {
                a.innerHTML = "\x3cinput/\x3e";
                a.firstChild.setAttribute("value", "");
                return "" === a.firstChild.getAttribute("value")
            }) || d("value", function(a, l, b) {
                if (!b && "input" === a.nodeName.toLowerCase()) return a.defaultValue
            });
        f(function(a) {
            return null == a.getAttribute("disabled")
        }) || d("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, l, b) {
            var c;
            if (!b) return !0 === a[l] ? l.toLowerCase() : (c = a.getAttributeNode(l)) && c.specified ?
                c.value : null
        });
        return b
    }(a);
    f.find = ta;
    f.expr = ta.selectors;
    f.expr[":"] = f.expr.pseudos;
    f.unique = ta.uniqueSort;
    f.text = ta.getText;
    f.isXMLDoc = ta.isXML;
    f.contains = ta.contains;
    var Oa = f.expr.match.needsContext,
        Pa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Wa = /^.[^:#\[\.,]*$/;
    f.filter = function(a, b, c) {
        var e = b[0];
        c && (a = ":not(" + a + ")");
        return 1 === b.length && 1 === e.nodeType ? f.find.matchesSelector(e, a) ? [e] : [] : f.find.matches(a, f.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    };
    f.fn.extend({
        find: function(a) {
            var b, c = [],
                e = this,
                d = e.length;
            if ("string" !== typeof a) return this.pushStack(f(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (f.contains(e[b], this)) return !0
            }));
            for (b = 0; b < d; b++) f.find(a, e[b], c);
            c = this.pushStack(1 < d ? f.unique(c) : c);
            c.selector = this.selector ? this.selector + " " + a : a;
            return c
        },
        filter: function(a) {
            return this.pushStack(b(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(b(this, a || [], !0))
        },
        is: function(a) {
            return !!b(this, "string" === typeof a && Oa.test(a) ? f(a) : a || [], !1).length
        }
    });
    var za, I = a.document,
        $a = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (f.fn.init = function(a, b) {
        var c;
        if (!a) return this;
        if ("string" === typeof a) {
            c = "\x3c" === a.charAt(0) && "\x3e" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : $a.exec(a);
            if (!c || !c[1] && b) return !b || b.jquery ? (b || za).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof f ? b[0] : b, f.merge(this, f.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : I, !0)), Pa.test(c[1]) && f.isPlainObject(b))
                    for (c in b)
                        if (f.isFunction(this[c])) this[c](b[c]);
                        else this.attr(c, b[c])
            } else {
                if ((b = I.getElementById(c[2])) && b.parentNode) {
                    if (b.id !==
                        c[2]) return za.find(a);
                    this.length = 1;
                    this[0] = b
                }
                this.context = I;
                this.selector = a
            }
            return this
        }
        if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
        if (f.isFunction(a)) return "undefined" !== typeof za.ready ? za.ready(a) : a(f);
        void 0 !== a.selector && (this.selector = a.selector, this.context = a.context);
        return f.makeArray(a, this)
    }).prototype = f.fn;
    za = f(I);
    var Aa = /^(?:parents|prev(?:Until|All))/,
        Ga = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.extend({
        dir: function(a, b, c) {
            var e = [];
            for (a = a[b]; a && 9 !== a.nodeType &&
                (void 0 === c || 1 !== a.nodeType || !f(a).is(c));) 1 === a.nodeType && e.push(a), a = a[b];
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    f.fn.extend({
        has: function(a) {
            var b, c = f(a, this),
                e = c.length;
            return this.filter(function() {
                for (b = 0; b < e; b++)
                    if (f.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, e = 0, d = this.length, g = [], h = Oa.test(a) || "string" !== typeof a ? f(a, b || this.context) : 0; e < d; e++)
                for (c = this[e]; c && c !== b; c = c.parentNode)
                    if (11 > c.nodeType &&
                        (h ? -1 < h.index(c) : 1 === c.nodeType && f.find.matchesSelector(c, a))) {
                        g.push(c);
                        break
                    }
            return this.pushStack(1 < g.length ? f.unique(g) : g)
        },
        index: function(a) {
            return a ? "string" === typeof a ? f.inArray(this[0], f(a)) : f.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(f.unique(f.merge(this.get(), f(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    f.each({
        parent: function(a) {
            return (a = a.parentNode) &&
                11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return f.sibling(a.firstChild)
        },
        contents: function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.merge([], a.childNodes)
        }
    }, function(a, b) {
        f.fn[a] = function(c, e) {
            var d = f.map(this, b, c);
            "Until" !== a.slice(-5) && (e = c);
            e && "string" === typeof e && (d = f.filter(e, d));
            1 < this.length && (Ga[a] || (d = f.unique(d)), Aa.test(a) && (d = d.reverse()));
            return this.pushStack(d)
        }
    });
    var ma = /\S+/g,
        Ea = {};
    f.Callbacks = function(a) {
        a = "string" === typeof a ? Ea[a] || g(a) : f.extend({},
            a);
        var b, c, e, d, h, k, m = [],
            t = !a.once && [],
            y = function(f) {
                c = a.memory && f;
                e = !0;
                h = k || 0;
                k = 0;
                d = m.length;
                for (b = !0; m && h < d; h++)
                    if (!1 === m[h].apply(f[0], f[1]) && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1;
                m && (t ? t.length && y(t.shift()) : c ? m = [] : B.disable())
            },
            B = {
                add: function() {
                    if (m) {
                        var e = m.length;
                        (function Lb(b) {
                            f.each(b, function(b, c) {
                                b = f.type(c);
                                "function" === b ? a.unique && B.has(c) || m.push(c) : c && c.length && "string" !== b && Lb(c)
                            })
                        })(arguments);
                        b ? d = m.length : c && (k = e, y(c))
                    }
                    return this
                },
                remove: function() {
                    m && f.each(arguments, function(a, l) {
                        for (var c; - 1 <
                            (c = f.inArray(l, m, c));) m.splice(c, 1), b && (c <= d && d--, c <= h && h--)
                    });
                    return this
                },
                has: function(a) {
                    return a ? -1 < f.inArray(a, m) : !(!m || !m.length)
                },
                empty: function() {
                    m = [];
                    d = 0;
                    return this
                },
                disable: function() {
                    m = t = c = void 0;
                    return this
                },
                disabled: function() {
                    return !m
                },
                lock: function() {
                    t = void 0;
                    c || B.disable();
                    return this
                },
                locked: function() {
                    return !t
                },
                fireWith: function(a, l) {
                    !m || e && !t || (l = l || [], l = [a, l.slice ? l.slice() : l], b ? t.push(l) : y(l));
                    return this
                },
                fire: function() {
                    B.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!e
                }
            };
        return B
    };
    f.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", f.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", f.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", f.Callbacks("memory")]
                ],
                c = "pending",
                e = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        d.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var a = arguments;
                        return f.Deferred(function(l) {
                            f.each(b, function(b, c) {
                                var D = f.isFunction(a[b]) && a[b];
                                d[c[1]](function() {
                                    var a = D && D.apply(this, arguments);
                                    if (a && f.isFunction(a.promise)) a.promise().done(l.resolve).fail(l.reject).progress(l.notify);
                                    else l[c[0] + "With"](this === e ? l.promise() : this, D ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? f.extend(a, e) : e
                    }
                },
                d = {};
            e.pipe = e.then;
            f.each(b, function(a, l) {
                var f = l[2],
                    g = l[3];
                e[l[1]] = f.add;
                g && f.add(function() {
                    c = g
                }, b[a ^ 1][2].disable, b[2][2].lock);
                d[l[0]] = function() {
                    d[l[0] + "With"](this === d ? e : this, arguments);
                    return this
                };
                d[l[0] + "With"] = f.fireWith
            });
            e.promise(d);
            a && a.call(d, d);
            return d
        },
        when: function(a) {
            var b = 0,
                c = Y.call(arguments),
                e = c.length,
                d = 1 !== e || a && f.isFunction(a.promise) ?
                e : 0,
                g = 1 === d ? a : f.Deferred(),
                h = function(a, l, b) {
                    return function(c) {
                        l[a] = this;
                        b[a] = 1 < arguments.length ? Y.call(arguments) : c;
                        b === k ? g.notifyWith(l, b) : --d || g.resolveWith(l, b)
                    }
                },
                k, m, t;
            if (1 < e)
                for (k = Array(e), m = Array(e), t = Array(e); b < e; b++) c[b] && f.isFunction(c[b].promise) ? c[b].promise().done(h(b, t, c)).fail(g.reject).progress(h(b, m, k)) : --d;
            d || g.resolveWith(t, c);
            return g.promise()
        }
    });
    var Qa;
    f.fn.ready = function(a) {
        f.ready.promise().done(a);
        return this
    };
    f.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? f.readyWait++ :
                f.ready(!0)
        },
        ready: function(a) {
            if (!0 === a ? !--f.readyWait : !f.isReady) {
                if (!I.body) return setTimeout(f.ready);
                f.isReady = !0;
                !0 !== a && 0 < --f.readyWait || (Qa.resolveWith(I, [f]), f.fn.triggerHandler && (f(I).triggerHandler("ready"), f(I).off("ready")))
            }
        }
    });
    f.ready.promise = function(l) {
        if (!Qa)
            if (Qa = f.Deferred(), "complete" === I.readyState) setTimeout(f.ready);
            else if (I.addEventListener) I.addEventListener("DOMContentLoaded", k, !1), a.addEventListener("load", k, !1);
        else {
            I.attachEvent("onreadystatechange", k);
            a.attachEvent("onload",
                k);
            var b = !1;
            try {
                b = null == a.frameElement && I.documentElement
            } catch (c) {}
            b && b.doScroll && function ca() {
                if (!f.isReady) {
                    try {
                        b.doScroll("left")
                    } catch (a) {
                        return setTimeout(ca, 50)
                    }
                    h();
                    f.ready()
                }
            }()
        }
        return Qa.promise(l)
    };
    for (var Mb in f(E)) break;
    E.ownLast = "0" !== Mb;
    E.inlineBlockNeedsLayout = !1;
    f(function() {
        if ("boolean" !== typeof a.skipJQueryInlineBlockNeedsLayoutTest || !a.skipJQueryInlineBlockNeedsLayoutTest) {
            var l, b, c;
            (b = I.getElementsByTagName("body")[0]) && b.style && (l = I.createElement("div"), c = I.createElement("div"),
                c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", b.appendChild(c).appendChild(l), "undefined" !== typeof l.style.zoom && (l.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", E.inlineBlockNeedsLayout = l = 3 === l.offsetWidth) && (b.style.zoom = 1), b.removeChild(c))
        }
    });
    (function() {
        var a = I.createElement("div");
        if (null == E.deleteExpando) {
            E.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                E.deleteExpando = !1
            }
        }
    })();
    f.acceptData = function(a) {
        var b = f.noData[(a.nodeName +
                " ").toLowerCase()],
            c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || !0 !== b && a.getAttribute("classid") === b
    };
    var Gb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Fb = /([A-Z])/g;
    f.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !p(a)
        },
        data: function(a, b, c) {
            return r(a, b, c)
        },
        removeData: function(a, b) {
            return z(a, b)
        },
        _data: function(a, b, c) {
            return r(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return z(a,
                b, !0)
        }
    });
    f.fn.extend({
        data: function(a, b) {
            var c, e, d, g = this[0],
                h = g && g.attributes;
            if (void 0 === a) {
                if (this.length && (d = f.data(g), 1 === g.nodeType && !f._data(g, "parsedAttrs"))) {
                    for (c = h.length; c--;) h[c] && (e = h[c].name, 0 === e.indexOf("data-") && (e = f.camelCase(e.slice(5)), m(g, e, d[e])));
                    f._data(g, "parsedAttrs", !0)
                }
                return d
            }
            return "object" === typeof a ? this.each(function() {
                f.data(this, a)
            }) : 1 < arguments.length ? this.each(function() {
                f.data(this, a, b)
            }) : g ? m(g, a, f.data(g, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                f.removeData(this,
                    a)
            })
        }
    });
    f.extend({
        queue: function(a, b, c) {
            var e;
            if (a) return b = (b || "fx") + "queue", e = f._data(a, b), c && (!e || f.isArray(c) ? e = f._data(a, b, f.makeArray(c)) : e.push(c)), e || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                e = c.length,
                d = c.shift(),
                g = f._queueHooks(a, b),
                h = function() {
                    f.dequeue(a, b)
                };
            "inprogress" === d && (d = c.shift(), e--);
            d && ("fx" === b && c.unshift("inprogress"), delete g.stop, d.call(a, h, g));
            !e && g && g.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return f._data(a, c) || f._data(a, c, {
                empty: f.Callbacks("once memory").add(function() {
                    f._removeData(a,
                        b + "queue");
                    f._removeData(a, c)
                })
            })
        }
    });
    f.fn.extend({
        queue: function(a, b) {
            var c = 2;
            "string" !== typeof a && (b = a, a = "fx", c--);
            return arguments.length < c ? f.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = f.queue(this, a, b);
                f._queueHooks(this, a);
                "fx" === a && "inprogress" !== c[0] && f.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, e = 1,
                d = f.Deferred(),
                g = this,
                h = this.length,
                k = function() {
                    --e ||
                        d.resolveWith(g, [g])
                };
            "string" !== typeof a && (b = a, a = void 0);
            for (a = a || "fx"; h--;)(c = f._data(g[h], a + "queueHooks")) && c.empty && (e++, c.empty.add(k));
            k();
            return d.promise(b)
        }
    });
    var Ra = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        va = ["Top", "Right", "Bottom", "Left"],
        Ja = function(a, b) {
            a = b || a;
            return "none" === f.css(a, "display") || !f.contains(a.ownerDocument, a)
        },
        Ba = f.access = function(a, b, c, e, d, g, h) {
            var k = 0,
                m = a.length,
                t = null == c;
            if ("object" === f.type(c))
                for (k in d = !0, c) f.access(a, b, k, c[k], !0, g, h);
            else if (void 0 !== e && (d = !0, f.isFunction(e) || (h = !0), t && (h ? (b.call(a, e), b = null) : (t = b, b = function(a, l, b) {
                    return t.call(f(a), b)
                })), b))
                for (; k < m; k++) b(a[k], c, h ? e : e.call(a[k], k, b(a[k], c)));
            return d ? a : t ? b.call(a) : m ? b(a[0], c) : g
        },
        Xa = /^(?:checkbox|radio)$/i;
    (function() {
        var a = I.createElement("input"),
            b = I.createElement("div"),
            c = I.createDocumentFragment();
        b.innerHTML = "  \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
        E.leadingWhitespace = 3 === b.firstChild.nodeType;
        E.tbody = !b.getElementsByTagName("tbody").length;
        E.htmlSerialize = !!b.getElementsByTagName("link").length;
        E.html5Clone = "\x3c:nav\x3e\x3c/:nav\x3e" !== I.createElement("nav").cloneNode(!0).outerHTML;
        a.type = "checkbox";
        a.checked = !0;
        c.appendChild(a);
        E.appendChecked = a.checked;
        b.innerHTML = "\x3ctextarea\x3ex\x3c/textarea\x3e";
        E.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
        c.appendChild(b);
        b.innerHTML = "\x3cinput type\x3d'radio' checked\x3d'checked' name\x3d't'/\x3e";
        E.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked;
        E.noCloneEvent = !0;
        b.attachEvent && (b.attachEvent("onclick", function() {
            E.noCloneEvent = !1
        }), b.cloneNode(!0).click());
        if (null == E.deleteExpando) {
            E.deleteExpando = !0;
            try {
                delete b.test
            } catch (e) {
                E.deleteExpando = !1
            }
        }
    })();
    (function() {
        var l, b, c = I.createElement("div");
        for (l in {
                submit: !0,
                change: !0,
                focusin: !0
            }) b = "on" + l, (E[l + "Bubbles"] = b in a) || (c.setAttribute(b, "t"), E[l + "Bubbles"] = !1 === c.attributes[b].expando)
    })();
    var ab = /^(?:input|select|textarea)$/i,
        Nb = /^key/,
        Ob = /^(?:mouse|pointer|contextmenu)|click/,
        mb = /^(?:focusinfocus|focusoutblur)$/,
        nb = /^([^.]*)(?:\.(.+)|)$/;
    f.event = {
        global: {},
        add: function(a, b, c, e, d) {
            var g, h, k, m, t, y, B, n, H;
            if (k = f._data(a)) {
                c.handler && (m = c, c = m.handler, d = m.selector);
                c.guid || (c.guid = f.guid++);
                (h = k.events) || (h = k.events = {});
                (t = k.handle) || (t = k.handle = function(a) {
                    return "undefined" === typeof f || a && f.event.triggered === a.type ? void 0 : f.event.dispatch.apply(t.elem, arguments)
                }, t.elem = a);
                b = (b || "").match(ma) || [""];
                for (k = b.length; k--;) g = nb.exec(b[k]) || [], n = y = g[1], H = (g[2] || "").split(".").sort(), n && (g = f.event.special[n] || {}, n = (d ?
                    g.delegateType : g.bindType) || n, g = f.event.special[n] || {}, y = f.extend({
                    type: n,
                    origType: y,
                    data: e,
                    handler: c,
                    guid: c.guid,
                    selector: d,
                    needsContext: d && f.expr.match.needsContext.test(d),
                    namespace: H.join(".")
                }, m), (B = h[n]) || (B = h[n] = [], B.delegateCount = 0, g.setup && !1 !== g.setup.call(a, e, H, t) || (a.addEventListener ? a.addEventListener(n, t, !1) : a.attachEvent && a.attachEvent("on" + n, t))), g.add && (g.add.call(a, y), y.handler.guid || (y.handler.guid = c.guid)), d ? B.splice(B.delegateCount++, 0, y) : B.push(y), f.event.global[n] = !0);
                a = null
            }
        },
        remove: function(a, b, c, e, d) {
            var g, h, k, m, t, y, B, n, H, q, v, J = f.hasData(a) && f._data(a);
            if (J && (y = J.events)) {
                b = (b || "").match(ma) || [""];
                for (t = b.length; t--;)
                    if (k = nb.exec(b[t]) || [], H = v = k[1], q = (k[2] || "").split(".").sort(), H) {
                        B = f.event.special[H] || {};
                        H = (e ? B.delegateType : B.bindType) || H;
                        n = y[H] || [];
                        k = k[2] && new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (m = g = n.length; g--;) h = n[g], !d && v !== h.origType || c && c.guid !== h.guid || k && !k.test(h.namespace) || e && e !== h.selector && ("**" !== e || !h.selector) || (n.splice(g, 1), h.selector &&
                            n.delegateCount--, B.remove && B.remove.call(a, h));
                        m && !n.length && (B.teardown && !1 !== B.teardown.call(a, q, J.handle) || f.removeEvent(a, H, J.handle), delete y[H])
                    } else
                        for (H in y) f.event.remove(a, H + b[t], c, e, !0);
                f.isEmptyObject(y) && (delete J.handle, f._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, d) {
            var g, h, k, m, t, y, B = [e || I],
                n = X.call(b, "type") ? b.type : b;
            t = X.call(b, "namespace") ? b.namespace.split(".") : [];
            k = g = e = e || I;
            if (3 !== e.nodeType && 8 !== e.nodeType && !mb.test(n + f.event.triggered) && (0 <= n.indexOf(".") && (t = n.split("."),
                    n = t.shift(), t.sort()), h = 0 > n.indexOf(":") && "on" + n, b = b[f.expando] ? b : new f.Event(n, "object" === typeof b && b), b.isTrigger = d ? 2 : 3, b.namespace = t.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : f.makeArray(c, [b]), t = f.event.special[n] || {}, d || !t.trigger || !1 !== t.trigger.apply(e, c))) {
                if (!d && !t.noBubble && !f.isWindow(e)) {
                    m = t.delegateType || n;
                    mb.test(m + n) || (k = k.parentNode);
                    for (; k; k = k.parentNode) B.push(k), g = k;
                    g ===
                        (e.ownerDocument || I) && B.push(g.defaultView || g.parentWindow || a)
                }
                for (y = 0;
                    (k = B[y++]) && !b.isPropagationStopped();) b.type = 1 < y ? m : t.bindType || n, (g = (f._data(k, "events") || {})[b.type] && f._data(k, "handle")) && g.apply(k, c), (g = h && k[h]) && g.apply && f.acceptData(k) && (b.result = g.apply(k, c), !1 === b.result && b.preventDefault());
                b.type = n;
                if (!(d || b.isDefaultPrevented() || t._default && !1 !== t._default.apply(B.pop(), c)) && f.acceptData(e) && h && e[n] && !f.isWindow(e)) {
                    (g = e[h]) && (e[h] = null);
                    f.event.triggered = n;
                    try {
                        e[n]()
                    } catch (H) {}
                    f.event.triggered =
                        void 0;
                    g && (e[h] = g)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = f.event.fix(a);
            var b, c, e, d, g, h = Y.call(arguments);
            b = (f._data(this, "events") || {})[a.type] || [];
            var k = f.event.special[a.type] || {};
            h[0] = a;
            a.delegateTarget = this;
            if (!k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
                g = f.event.handlers.call(this, a, b);
                for (b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, d = 0;
                        (c = e.handlers[d++]) && !a.isImmediatePropagationStopped();)
                        if (!a.namespace_re || a.namespace_re.test(c.namespace)) a.handleObj =
                            c, a.data = c.data, c = ((f.event.special[c.origType] || {}).handle || c.handler).apply(e.elem, h), void 0 !== c && !1 === (a.result = c) && (a.preventDefault(), a.stopPropagation());
                k.postDispatch && k.postDispatch.call(this, a);
                return a.result
            }
        },
        handlers: function(a, b) {
            var c, e, d, g, h = [],
                k = b.delegateCount,
                m = a.target;
            if (k && m.nodeType && (!a.button || "click" !== a.type))
                for (; m != this; m = m.parentNode || this)
                    if (1 === m.nodeType && (!0 !== m.disabled || "click" !== a.type)) {
                        d = [];
                        for (g = 0; g < k; g++) e = b[g], c = e.selector + " ", void 0 === d[c] && (d[c] = e.needsContext ?
                            0 <= f(c, this).index(m) : f.find(c, this, null, [m]).length), d[c] && d.push(e);
                        d.length && h.push({
                            elem: m,
                            handlers: d
                        })
                    }
            k < b.length && h.push({
                elem: this,
                handlers: b.slice(k)
            });
            return h
        },
        fix: function(a) {
            if (a[f.expando]) return a;
            var b, c, e;
            b = a.type;
            var d = a,
                g = this.fixHooks[b];
            g || (this.fixHooks[b] = g = Ob.test(b) ? this.mouseHooks : Nb.test(b) ? this.keyHooks : {});
            e = g.props ? this.props.concat(g.props) : this.props;
            a = new f.Event(d);
            for (b = e.length; b--;) c = e[b], a[c] = d[c];
            a.target || (a.target = d.srcElement || I);
            3 === a.target.nodeType && (a.target =
                a.target.parentNode);
            a.metaKey = !!a.metaKey;
            return g.filter ? g.filter(a, d) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a,
                b) {
                var c, e, d = b.button,
                    f = b.fromElement;
                null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || I, e = c.documentElement, c = c.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0));
                !a.relatedTarget && f && (a.relatedTarget = f === a.target ? b.toElement : f);
                a.which || void 0 === d || (a.which = d & 1 ? 1 : d & 2 ? 3 : d & 4 ? 2 : 0);
                return a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !==
                        n() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === n() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (f.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(a) {
                    return f.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, e) {
            a = f.extend(new f.Event,
                c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
            e ? f.event.trigger(a, null, b) : f.event.dispatch.call(b, a);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    f.removeEvent = I.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        b = "on" + b;
        a.detachEvent && ("undefined" === typeof a[b] && (a[b] = null), a.detachEvent(b, c))
    };
    f.Event = function(a, b) {
        if (!(this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented ||
            void 0 === a.defaultPrevented && !1 === a.returnValue ? v : A) : this.type = a;
        b && f.extend(this, b);
        this.timeStamp = a && a.timeStamp || f.now();
        this[f.expando] = !0
    };
    f.Event.prototype = {
        isDefaultPrevented: A,
        isPropagationStopped: A,
        isImmediatePropagationStopped: A,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = v;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = v;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = v;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, l = a.relatedTarget,
                    e = a.handleObj;
                if (!l || l !== this && !f.contains(this, l)) a.type = e.origType, c = e.handler.apply(this, arguments),
                    a.type = b;
                return c
            }
        }
    });
    E.submitBubbles || (f.event.special.submit = {
        setup: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function(a) {
                a = a.target;
                (a = f.nodeName(a, "input") || f.nodeName(a, "button") ? a.form : void 0) && !f._data(a, "submitBubbles") && (f.event.add(a, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), f._data(a, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit",
                this.parentNode, a, !0))
        },
        teardown: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    });
    E.changeBubbles || (f.event.special.change = {
        setup: function() {
            if (ab.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) f.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1);
                    f.event.simulate("change", this,
                        a, !0)
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function(a) {
                a = a.target;
                ab.test(a.nodeName) && !f._data(a, "changeBubbles") && (f.event.add(a, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || f.event.simulate("change", this.parentNode, a, !0)
                }), f._data(a, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            f.event.remove(this,
                "._change");
            return !ab.test(this.nodeName)
        }
    });
    E.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    d = f._data(e, b);
                d || e.addEventListener(a, c, !0);
                f._data(e, b, (d || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    d = f._data(e, b) - 1;
                d ? f._data(e, b, d) : (e.removeEventListener(a, c, !0), f._removeData(e, b))
            }
        }
    });
    f.fn.extend({
        on: function(a, b, c, e, d) {
            var g,
                h;
            if ("object" === typeof a) {
                "string" !== typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], d);
                return this
            }
            null == c && null == e ? (e = b, c = b = void 0) : null == e && ("string" === typeof b ? (e = c, c = void 0) : (e = c, c = b, b = void 0));
            if (!1 === e) e = A;
            else if (!e) return this;
            1 === d && (h = e, e = function(a) {
                f().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function() {
                f.event.add(this, a, e, c, b)
            })
        },
        one: function(a, b, c, e) {
            return this.on(a, b, c, e, 1)
        },
        off: function(a, b, c) {
            var e;
            if (a && a.preventDefault &&
                a.handleObj) return e = a.handleObj, f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" === typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            if (!1 === b || "function" === typeof b) c = b, b = void 0;
            !1 === c && (c = A);
            return this.each(function() {
                f.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return f.event.trigger(a, b, c, !0)
        }
    });
    var jb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Pb = / jQuery\d+="(?:null|\d+)"/g,
        ob = new RegExp("\x3c(?:" + jb + ")[\\s/\x3e]", "i"),
        bb = /^\s+/,
        pb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        qb = /<([\w:]+)/,
        rb = /<tbody/i,
        Qb = /<|&#?\w+;/,
        Rb = /<(?:script|style|link)/i,
        Sb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        sb = /^$|\/(?:java|ecma)script/i,
        Ib = /^true\/(.*)/,
        Tb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ja = {
            option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"],
            legend: [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"],
            area: [1,
                "\x3cmap\x3e", "\x3c/map\x3e"
            ],
            param: [1, "\x3cobject\x3e", "\x3c/object\x3e"],
            thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
            tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
            col: [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
            td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
            _default: E.htmlSerialize ? [0, "", ""] : [1, "X\x3cdiv\x3e", "\x3c/div\x3e"]
        },
        cb = w(I).appendChild(I.createElement("div"));
    ja.optgroup = ja.option;
    ja.tbody = ja.tfoot = ja.colgroup = ja.caption = ja.thead;
    ja.th = ja.td;
    f.extend({
        clone: function(a, b, c) {
            var e, d, g, h, k, m = f.contains(a.ownerDocument, a);
            E.html5Clone || f.isXMLDoc(a) || !ob.test("\x3c" + a.nodeName + "\x3e") ? g = a.cloneNode(!0) : (cb.innerHTML = a.outerHTML, cb.removeChild(g = cb.firstChild));
            if (!(E.noCloneEvent && E.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || f.isXMLDoc(a)))
                for (e = C(g), k = C(a), h = 0; null != (d = k[h]); ++h)
                    if (e[h]) {
                        var t = e[h],
                            n, B = void 0,
                            q;
                        if (1 === t.nodeType) {
                            n = t.nodeName.toLowerCase();
                            if (!E.noCloneEvent &&
                                t[f.expando]) {
                                q = f._data(t);
                                for (B in q.events) f.removeEvent(t, B, q.handle);
                                t.removeAttribute(f.expando)
                            }
                            if ("script" === n && t.text !== d.text) F(t).text = d.text, G(t);
                            else if ("object" === n) t.parentNode && (t.outerHTML = d.outerHTML), E.html5Clone && d.innerHTML && !f.trim(t.innerHTML) && (t.innerHTML = d.innerHTML);
                            else if ("input" === n && Xa.test(d.type)) t.defaultChecked = t.checked = d.checked, t.value !== d.value && (t.value = d.value);
                            else if ("option" === n) t.defaultSelected = t.selected = d.defaultSelected;
                            else if ("input" === n || "textarea" ===
                                n) t.defaultValue = d.defaultValue
                        }
                    }
            if (b)
                if (c)
                    for (k = k || C(a), e = e || C(g), h = 0; null != (d = k[h]); h++) H(d, e[h]);
                else H(a, g);
            e = C(g, "script");
            0 < e.length && y(e, !m && C(a, "script"));
            return g
        },
        buildFragment: function(a, b, c, e) {
            for (var d, g, h, k, m, t, n = a.length, H = w(b), q = [], v = 0; v < n; v++)
                if ((g = a[v]) || 0 === g)
                    if ("object" === f.type(g)) f.merge(q, g.nodeType ? [g] : g);
                    else if (Qb.test(g)) {
                h = h || H.appendChild(b.createElement("div"));
                k = (qb.exec(g) || ["", ""])[1].toLowerCase();
                t = ja[k] || ja._default;
                h.innerHTML = t[1] + g.replace(pb, "\x3c$1\x3e\x3c/$2\x3e") +
                    t[2];
                for (d = t[0]; d--;) h = h.lastChild;
                !E.leadingWhitespace && bb.test(g) && q.push(b.createTextNode(bb.exec(g)[0]));
                if (!E.tbody)
                    for (d = (g = "table" !== k || rb.test(g) ? "\x3ctable\x3e" !== t[1] || rb.test(g) ? 0 : h : h.firstChild) && g.childNodes.length; d--;) f.nodeName(m = g.childNodes[d], "tbody") && !m.childNodes.length && g.removeChild(m);
                f.merge(q, h.childNodes);
                for (h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = H.lastChild
            } else q.push(b.createTextNode(g));
            h && H.removeChild(h);
            E.appendChecked || f.grep(C(q, "input"),
                B);
            for (v = 0; g = q[v++];)
                if (!e || -1 === f.inArray(g, e))
                    if (a = f.contains(g.ownerDocument, g), h = C(H.appendChild(g), "script"), a && y(h), c)
                        for (d = 0; g = h[d++];) sb.test(g.type || "") && c.push(g);
            return H
        },
        cleanData: function(a, b) {
            for (var c, e, d, g, h = 0, k = f.expando, m = f.cache, t = E.deleteExpando, y = f.event.special; null != (c = a[h]); h++)
                if (b || f.acceptData(c))
                    if (g = (d = c[k]) && m[d]) {
                        if (g.events)
                            for (e in g.events) y[e] ? f.event.remove(c, e) : f.removeEvent(c, e, g.handle);
                        m[d] && (delete m[d], t ? delete c[k] : "undefined" !== typeof c.removeAttribute ?
                            c.removeAttribute(k) : c[k] = null, Z.push(d))
                    }
        }
    });
    f.fn.extend({
        text: function(a) {
            return Ba(this, function(a) {
                return void 0 === a ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || I).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || t(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b =
                        t(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c = a ? f.filter(a, this) : this, e = 0; null != (a = c[e]); e++) b || 1 !== a.nodeType || f.cleanData(C(a)), a.parentNode && (b && f.contains(a.ownerDocument, a) && y(C(a, "script")), a.parentNode.removeChild(a));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && f.cleanData(C(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && f.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            a = null == a ? !1 : a;
            b = null == b ? a : b;
            return this.map(function() {
                return f.clone(this, a, b)
            })
        },
        html: function(a) {
            return Ba(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    e = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(Pb, "") : void 0;
                if (!("string" !== typeof a || Rb.test(a) ||
                        !E.htmlSerialize && ob.test(a) || !E.leadingWhitespace && bb.test(a) || ja[(qb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(pb, "\x3c$1\x3e\x3c/$2\x3e");
                    try {
                        for (; c < e; c++) b = this[c] || {}, 1 === b.nodeType && (f.cleanData(C(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (l) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            this.domManip(arguments, function(b) {
                a = this.parentNode;
                f.cleanData(C(this));
                a && a.replaceChild(b, this)
            });
            return a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = P.apply([], a);
            var c, e, d, g, h = 0,
                k = this.length,
                m = this,
                t = k - 1,
                y = a[0],
                n = f.isFunction(y);
            if (n || 1 < k && "string" === typeof y && !E.checkClone && Sb.test(y)) return this.each(function(c) {
                var e = m.eq(c);
                n && (a[0] = y.call(this, c, e.html()));
                e.domManip(a, b)
            });
            if (k && (g = f.buildFragment(a, this[0].ownerDocument, !1, this), c = g.firstChild, 1 === g.childNodes.length && (g = c), c)) {
                d = f.map(C(g, "script"), F);
                for (e = d.length; h < k; h++) c = g, h !== t && (c = f.clone(c, !0, !0), e && f.merge(d, C(c, "script"))), b.call(this[h], c, h);
                if (e)
                    for (g = d[d.length - 1].ownerDocument, f.map(d, G), h = 0; h < e; h++) c = d[h], sb.test(c.type || "") && !f._data(c, "globalEval") && f.contains(g, c) && (c.src ? f._evalUrl && f._evalUrl(c.src) : f.globalEval((c.text || c.textContent || c.innerHTML || "").replace(Tb, "")));
                g = c = null
            }
            return this
        }
    });
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        f.fn[a] = function(a) {
            for (var c = 0, e = [], l = f(a), d = l.length - 1; c <= d; c++) a = c === d ? this : this.clone(!0), f(l[c])[b](a),
                ea.apply(e, a.get());
            return this.pushStack(e)
        }
    });
    var Ia, kb = {};
    (function() {
        var a;
        E.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, e;
            if ((c = I.getElementsByTagName("body")[0]) && c.style) return b = I.createElement("div"), e = I.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" !== typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                b.appendChild(I.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a
        }
    })();
    var tb = /^margin/,
        Ma = new RegExp("^(" + Ra + ")(?!px)[a-z%]+$", "i"),
        wa, xa, Ub = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (wa = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }, xa = function(a, b, c) {
        var e, d, g = a.style;
        d = (c = c || wa(a)) ? c.getPropertyValue(b) || c[b] : void 0;
        c && ("" !== d || f.contains(a.ownerDocument, a) || (d = f.style(a,
            b)), Ma.test(d) && tb.test(b) && (a = g.width, b = g.minWidth, e = g.maxWidth, g.minWidth = g.maxWidth = g.width = d, d = c.width, g.width = a, g.minWidth = b, g.maxWidth = e));
        return void 0 === d ? d : d + ""
    }) : I.documentElement.currentStyle && (wa = function(a) {
        return a.currentStyle
    }, xa = function(a, b, c) {
        var e, d, f, g = a.style;
        f = (c = c || wa(a)) ? c[b] : void 0;
        null == f && g && g[b] && (f = g[b]);
        if (Ma.test(f) && !Ub.test(b)) {
            c = g.left;
            if (d = (e = a.runtimeStyle) && e.left) e.left = a.currentStyle.left;
            g.left = "fontSize" === b ? "1em" : f;
            f = g.pixelLeft + "px";
            g.left = c;
            d && (e.left =
                d)
        }
        return void 0 === f ? f : f + "" || "auto"
    });
    (function() {
        function b() {
            var c, e, l, f;
            if ((e = I.getElementsByTagName("body")[0]) && e.style) {
                c = I.createElement("div");
                l = I.createElement("div");
                l.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                e.appendChild(l).appendChild(c);
                c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                d = g = !1;
                k = !0;
                a.getComputedStyle &&
                    (d = "1%" !== (a.getComputedStyle(c, null) || {}).top, g = "4px" === (a.getComputedStyle(c, null) || {
                        width: "4px"
                    }).width, f = c.appendChild(I.createElement("div")), f.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", f.style.marginRight = f.style.width = "0", c.style.width = "1px", k = !parseFloat((a.getComputedStyle(f, null) || {}).marginRight), c.removeChild(f));
                c.innerHTML = "\x3ctable\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e";
                f = c.getElementsByTagName("td");
                f[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                if (h = 0 === f[0].offsetHeight) f[0].style.display = "", f[1].style.display = "none", h = 0 === f[0].offsetHeight;
                e.removeChild(l)
            }
        }
        var c, e, d, g, h, k;
        c = I.createElement("div");
        c.innerHTML = "  \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
        if (e = (e = c.getElementsByTagName("a")[0]) && e.style) e.cssText = "float:left;opacity:.5", E.opacity = "0.5" === e.opacity, E.cssFloat = !!e.cssFloat,
            c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", E.clearCloneStyle = "content-box" === c.style.backgroundClip, E.boxSizing = "" === e.boxSizing || "" === e.MozBoxSizing || "" === e.WebkitBoxSizing, f.extend(E, {
                reliableHiddenOffsets: function() {
                    null == h && b();
                    return h
                },
                boxSizingReliable: function() {
                    null == g && b();
                    return g
                },
                pixelPosition: function() {
                    null == d && b();
                    return d
                },
                reliableMarginRight: function() {
                    null == k && b();
                    return k
                }
            })
    })();
    f.swap = function(a, b, c, e) {
        var d, f = {};
        for (d in b) f[d] = a.style[d], a.style[d] =
            b[d];
        c = c.apply(a, e || []);
        for (d in b) a.style[d] = f[d];
        return c
    };
    var db = /alpha\([^)]*\)/i,
        Vb = /opacity\s*=\s*([^)]*)/,
        Wb = /^(none|table(?!-c[ea]).+)/,
        Jb = new RegExp("^(" + Ra + ")(.*)$", "i"),
        Xb = new RegExp("^([+-])\x3d(" + Ra + ")", "i"),
        Yb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ub = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        lb = ["Webkit", "O", "Moz", "ms"];
    f.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) return a = xa(a, "opacity"), "" === a ? "1" : a
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": E.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var d, g, h, k = f.camelCase(b),
                    m = a.style;
                b = f.cssProps[k] || (f.cssProps[k] = ba(m, k));
                h = f.cssHooks[b] || f.cssHooks[k];
                if (void 0 !== c) {
                    if (g = typeof c, "string" === g && (d = Xb.exec(c)) && (c = (d[1] + 1) * d[2] + parseFloat(f.css(a, b)), g = "number"), null != c && c === c && ("number" !== g || f.cssNumber[k] || (c += "px"), E.clearCloneStyle ||
                            "" !== c || 0 !== b.indexOf("background") || (m[b] = "inherit"), !(h && "set" in h) || void 0 !== (c = h.set(a, c, e)))) try {
                        m[b] = c
                    } catch (t) {}
                } else return h && "get" in h && void 0 !== (d = h.get(a, !1, e)) ? d : m[b]
            }
        },
        css: function(a, b, c, e) {
            var d, g;
            g = f.camelCase(b);
            b = f.cssProps[g] || (f.cssProps[g] = ba(a.style, g));
            (g = f.cssHooks[b] || f.cssHooks[g]) && "get" in g && (d = g.get(a, !0, c));
            void 0 === d && (d = xa(a, b, e));
            "normal" === d && b in ub && (d = ub[b]);
            return "" === c || c ? (a = parseFloat(d), !0 === c || f.isNumeric(a) ? a || 0 : d) : d
        }
    });
    f.each(["height", "width"], function(a,
        b) {
        f.cssHooks[b] = {
            get: function(a, c, e) {
                if (c) return Wb.test(f.css(a, "display")) && 0 === a.offsetWidth ? f.swap(a, Yb, function() {
                    return u(a, b, e)
                }) : u(a, b, e)
            },
            set: function(a, c, e) {
                var l = e && wa(a);
                return fa(a, c, e ? ga(a, b, e, E.boxSizing && "border-box" === f.css(a, "boxSizing", !1, l), l) : 0)
            }
        }
    });
    E.opacity || (f.cssHooks.opacity = {
        get: function(a, b) {
            return Vb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style;
            a = a.currentStyle;
            var e = f.isNumeric(b) ?
                "alpha(opacity\x3d" + 100 * b + ")" : "",
                d = a && a.filter || c.filter || "";
            c.zoom = 1;
            if ((1 <= b || "" === b) && "" === f.trim(d.replace(db, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || a && !a.filter)) return;
            c.filter = db.test(d) ? d.replace(db, e) : d + " " + e
        }
    });
    f.cssHooks.marginRight = K(E.reliableMarginRight, function(a, b) {
        if (b) return f.swap(a, {
            display: "inline-block"
        }, xa, [a, "marginRight"])
    });
    f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        f.cssHooks[a + b] = {
            expand: function(c) {
                var e = 0,
                    d = {};
                for (c = "string" === typeof c ?
                    c.split(" ") : [c]; 4 > e; e++) d[a + va[e] + b] = c[e] || c[e - 2] || c[0];
                return d
            }
        };
        tb.test(a) || (f.cssHooks[a + b].set = fa)
    });
    f.fn.extend({
        css: function(a, b) {
            return Ba(this, function(a, b, c) {
                var e, l = {},
                    d = 0;
                if (f.isArray(b)) {
                    c = wa(a);
                    for (e = b.length; d < e; d++) l[b[d]] = f.css(a, b[d], !1, c);
                    return l
                }
                return void 0 !== c ? f.style(a, b, c) : f.css(a, b)
            }, a, b, 1 < arguments.length)
        },
        show: function() {
            return R(this, !0)
        },
        hide: function() {
            return R(this)
        },
        toggle: function(a) {
            return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ja(this) ?
                    f(this).show() : f(this).hide()
            })
        }
    });
    f.Tween = Q;
    Q.prototype = {
        constructor: Q,
        init: function(a, b, c, e, d, g) {
            this.elem = a;
            this.prop = c;
            this.easing = d || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = g || (f.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Q.propHooks[this.prop];
            return a && a.get ? a.get(this) : Q.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Q.propHooks[this.prop];
            this.pos = this.options.duration ? b = f.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) :
                b = a;
            this.now = (this.end - this.start) * b + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            c && c.set ? c.set(this) : Q.propHooks._default.set(this);
            return this
        }
    };
    Q.prototype.init.prototype = Q.prototype;
    Q.propHooks = {
        _default: {
            get: function(a) {
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (a = f.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0 : a.elem[a.prop]
            },
            set: function(a) {
                if (f.fx.step[a.prop]) f.fx.step[a.prop](a);
                else a.elem.style && (null != a.elem.style[f.cssProps[a.prop]] ||
                    f.cssHooks[a.prop]) ? f.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    f.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    f.fx = Q.prototype.init;
    f.fx.step = {};
    var Fa, Sa, Zb = /^(?:toggle|show|hide)$/,
        vb = new RegExp("^(?:([+-])\x3d|)(" + Ra + ")([a-z%]*)$", "i"),
        $b = /queueHooks$/,
        Na = [function(a, b, c) {
            var e, d, g, h, k, m, t = this,
                y = {},
                n = a.style,
                B = a.nodeType &&
                Ja(a),
                H = f._data(a, "fxshow");
            c.queue || (h = f._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, k = h.empty.fire, h.empty.fire = function() {
                h.unqueued || k()
            }), h.unqueued++, t.always(function() {
                t.always(function() {
                    h.unqueued--;
                    f.queue(a, "fx").length || h.empty.fire()
                })
            }));
            1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], m = f.css(a, "display"), d = "none" === m ? f._data(a, "olddisplay") || W(a.nodeName) : m, "inline" === d && "none" === f.css(a, "float") && (E.inlineBlockNeedsLayout && "inline" !==
                W(a.nodeName) ? n.zoom = 1 : n.display = "inline-block"));
            c.overflow && (n.overflow = "hidden", E.shrinkWrapBlocks() || t.always(function() {
                n.overflow = c.overflow[0];
                n.overflowX = c.overflow[1];
                n.overflowY = c.overflow[2]
            }));
            for (e in b)
                if (d = b[e], Zb.exec(d)) {
                    delete b[e];
                    g = g || "toggle" === d;
                    if (d === (B ? "hide" : "show"))
                        if ("show" === d && H && void 0 !== H[e]) B = !0;
                        else continue;
                    y[e] = H && H[e] || f.style(a, e)
                } else m = void 0;
            if (f.isEmptyObject(y)) "inline" === ("none" === m ? W(a.nodeName) : m) && (n.display = m);
            else
                for (e in H ? "hidden" in H && (B = H.hidden) :
                    H = f._data(a, "fxshow", {}), g && (H.hidden = !B), B ? f(a).show() : t.done(function() {
                        f(a).hide()
                    }), t.done(function() {
                        var b;
                        f._removeData(a, "fxshow");
                        for (b in y) f.style(a, b, y[b])
                    }), y) b = N(B ? H[e] : 0, e, t), e in H || (H[e] = b.start, B && (b.end = b.start, b.start = "width" === e || "height" === e ? 1 : 0))
        }],
        Ka = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    e = c.cur(),
                    d = (b = vb.exec(b)) && b[3] || (f.cssNumber[a] ? "" : "px"),
                    g = (f.cssNumber[a] || "px" !== d && +e) && vb.exec(f.css(c.elem, a)),
                    h = 1,
                    k = 20;
                if (g && g[3] !== d) {
                    d = d || g[3];
                    b = b || [];
                    g = +e || 1;
                    do h = h || ".5",
                        g /= h, f.style(c.elem, a, g + d); while (h !== (h = c.cur() / e) && 1 !== h && --k)
                }
                b && (g = c.start = +g || +e || 0, c.unit = d, c.end = b[1] ? g + (b[1] + 1) * b[2] : +b[2]);
                return c
            }]
        };
    f.Animation = f.extend(S, {
        tweener: function(a, b) {
            f.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, e = 0, d = a.length; e < d; e++) c = a[e], Ka[c] = Ka[c] || [], Ka[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Na.unshift(a) : Na.push(a)
        }
    });
    f.speed = function(a, b, c) {
        var e = a && "object" === typeof a ? f.extend({}, a) : {
            complete: c || !c && b || f.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !f.isFunction(b) &&
                b
        };
        e.duration = f.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in f.fx.speeds ? f.fx.speeds[e.duration] : f.fx.speeds._default;
        if (null == e.queue || !0 === e.queue) e.queue = "fx";
        e.old = e.complete;
        e.complete = function() {
            f.isFunction(e.old) && e.old.call(this);
            e.queue && f.dequeue(this, e.queue)
        };
        return e
    };
    f.fn.extend({
        fadeTo: function(a, b, c, e) {
            return this.filter(Ja).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, e)
        },
        animate: function(a, b, c, e) {
            var d = f.isEmptyObject(a),
                g = f.speed(b, c, e);
            b = function() {
                var b =
                    S(this, f.extend({}, a), g);
                (d || f._data(this, "finish")) && b.stop(!0)
            };
            b.finish = b;
            return d || !1 === g.queue ? this.each(b) : this.queue(g.queue, b)
        },
        stop: function(a, b, c) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            "string" !== typeof a && (c = b, b = a, a = void 0);
            b && !1 !== a && this.queue(a || "fx", []);
            return this.each(function() {
                var b = !0,
                    d = null != a && a + "queueHooks",
                    g = f.timers,
                    h = f._data(this);
                if (d) h[d] && h[d].stop && e(h[d]);
                else
                    for (d in h) h[d] && h[d].stop && $b.test(d) && e(h[d]);
                for (d = g.length; d--;) g[d].elem !== this || null != a &&
                    g[d].queue !== a || (g[d].anim.stop(c), b = !1, g.splice(d, 1));
                !b && c || f.dequeue(this, a)
            })
        },
        finish: function(a) {
            !1 !== a && (a = a || "fx");
            return this.each(function() {
                var b, c = f._data(this),
                    e = c[a + "queue"];
                b = c[a + "queueHooks"];
                var d = f.timers,
                    g = e ? e.length : 0;
                c.finish = !0;
                f.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = d.length; b--;) d[b].elem === this && d[b].queue === a && (d[b].anim.stop(!0), d.splice(b, 1));
                for (b = 0; b < g; b++) e[b] && e[b].finish && e[b].finish.call(this);
                delete c.finish
            })
        }
    });
    f.each(["toggle", "show", "hide"], function(a,
        b) {
        var c = f.fn[b];
        f.fn[b] = function(a, e, d) {
            return null == a || "boolean" === typeof a ? c.apply(this, arguments) : this.animate(V(b, !0), a, e, d)
        }
    });
    f.each({
        slideDown: V("show"),
        slideUp: V("hide"),
        slideToggle: V("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        f.fn[a] = function(a, c, e) {
            return this.animate(b, a, c, e)
        }
    });
    f.timers = [];
    f.fx.tick = function() {
        var a, b = f.timers,
            c = 0;
        for (Fa = f.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || f.fx.stop();
        Fa = void 0
    };
    f.fx.timer = function(a) {
        f.timers.push(a);
        a() ? f.fx.start() : f.timers.pop()
    };
    f.fx.interval = 13;
    f.fx.start = function() {
        Sa || (Sa = setInterval(f.fx.tick, f.fx.interval))
    };
    f.fx.stop = function() {
        clearInterval(Sa);
        Sa = null
    };
    f.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    f.fn.delay = function(a, b) {
        a = f.fx ? f.fx.speeds[a] || a : a;
        return this.queue(b || "fx", function(b, c) {
            var e = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(e)
            }
        })
    };
    (function() {
        var a, b, c, e, d;
        b = I.createElement("div");
        b.setAttribute("className", "t");
        b.innerHTML = "  \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
        e = b.getElementsByTagName("a")[0];
        c = I.createElement("select");
        d = c.appendChild(I.createElement("option"));
        a = b.getElementsByTagName("input")[0];
        e.style.cssText = "top:1px";
        E.getSetAttribute = "t" !== b.className;
        E.style = /top/.test(e.getAttribute("style"));
        E.hrefNormalized = "/a" === e.getAttribute("href");
        E.checkOn = !!a.value;
        E.optSelected = d.selected;
        E.enctype = !!I.createElement("form").enctype;
        c.disabled = !0;
        E.optDisabled = !d.disabled;
        a = I.createElement("input");
        a.setAttribute("value", "");
        E.input = "" === a.getAttribute("value");
        a.value = "t";
        a.setAttribute("type", "radio");
        E.radioValue = "t" === a.value
    })();
    var ac = /\r/g;
    f.fn.extend({
        val: function(a) {
            var b, c, e, d = this[0];
            if (arguments.length) return e = f.isFunction(a), this.each(function(c) {
                1 === this.nodeType && (c = e ? a.call(this, c, f(this).val()) : a, null == c ? c = "" : "number" === typeof c ? c += "" : f.isArray(c) && (c = f.map(c, function(a) {
                    return null == a ? "" : a + ""
                })), b = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, c, "value") || (this.value = c))
            });
            if (d) {
                if ((b =
                        f.valHooks[d.type] || f.valHooks[d.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(d, "value"))) return c;
                c = d.value;
                return "string" === typeof c ? c.replace(ac, "") : null == c ? "" : c
            }
        }
    });
    f.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = f.find.attr(a, "value");
                    return null != b ? b : f.trim(f.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c = a.options, e = a.selectedIndex, d = (a = "select-one" === a.type || 0 > e) ? null : [], g = a ? e + 1 : c.length, h = 0 > e ? g : a ? e : 0; h < g; h++)
                        if (b = c[h], !(!b.selected && h !== e || (E.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) ||
                                b.parentNode.disabled && f.nodeName(b.parentNode, "optgroup"))) {
                            b = f(b).val();
                            if (a) return b;
                            d.push(b)
                        }
                    return d
                },
                set: function(a, b) {
                    for (var c, e = a.options, d = f.makeArray(b), g = e.length; g--;)
                        if (b = e[g], 0 <= f.inArray(f.valHooks.option.get(b), d)) try {
                            b.selected = c = !0
                        } catch (h) {
                            b.scrollHeight
                        } else b.selected = !1;
                    c || (a.selectedIndex = -1);
                    return e
                }
            }
        }
    });
    f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            set: function(a, b) {
                if (f.isArray(b)) return a.checked = 0 <= f.inArray(f(a).val(), b)
            }
        };
        E.checkOn || (f.valHooks[this].get =
            function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
    });
    var Ha, wb, qa = f.expr.attrHandle,
        eb = /^(?:checked|selected)$/i,
        Ca = E.getSetAttribute,
        Ta = E.input;
    f.fn.extend({
        attr: function(a, b) {
            return Ba(this, f.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        }
    });
    f.extend({
        attr: function(a, b, c) {
            var e, d, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) {
                if ("undefined" === typeof a.getAttribute) return f.prop(a, b, c);
                1 === g && f.isXMLDoc(a) || (b = b.toLowerCase(), e = f.attrHooks[b] ||
                    (f.expr.match.bool.test(b) ? wb : Ha));
                if (void 0 !== c)
                    if (null === c) f.removeAttr(a, b);
                    else {
                        if (e && "set" in e && void 0 !== (d = e.set(a, c, b))) return d;
                        a.setAttribute(b, c + "");
                        return c
                    }
                else {
                    if (e && "get" in e && null !== (d = e.get(a, b))) return d;
                    d = f.find.attr(a, b);
                    return null == d ? void 0 : d
                }
            }
        },
        removeAttr: function(a, b) {
            var c, e = 0,
                d = b && b.match(ma);
            if (d && 1 === a.nodeType)
                for (; b = d[e++];) c = f.propFix[b] || b, f.expr.match.bool.test(b) ? Ta && Ca || !eb.test(b) ? a[c] = !1 : a[f.camelCase("default-" + b)] = a[c] = !1 : f.attr(a, b, ""), a.removeAttribute(Ca ? b :
                    c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!E.radioValue && "radio" === b && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b);
                        c && (a.value = c);
                        return b
                    }
                }
            }
        }
    });
    wb = {
        set: function(a, b, c) {
            !1 === b ? f.removeAttr(a, c) : Ta && Ca || !eb.test(c) ? a.setAttribute(!Ca && f.propFix[c] || c, c) : a[f.camelCase("default-" + c)] = a[c] = !0;
            return c
        }
    };
    f.each(f.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = qa[b] || f.find.attr;
        qa[b] = Ta && Ca || !eb.test(b) ? function(a, b, e) {
            var d, g;
            e || (g = qa[b], qa[b] = d, d = null != c(a, b, e) ? b.toLowerCase() :
                null, qa[b] = g);
            return d
        } : function(a, b, c) {
            if (!c) return a[f.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    });
    Ta && Ca || (f.attrHooks.value = {
        set: function(a, b, c) {
            if (f.nodeName(a, "input")) a.defaultValue = b;
            else return Ha && Ha.set(a, b, c)
        }
    });
    Ca || (Ha = {
        set: function(a, b, c) {
            var e = a.getAttributeNode(c);
            e || a.setAttributeNode(e = a.ownerDocument.createAttribute(c));
            e.value = b += "";
            if ("value" === c || b === a.getAttribute(c)) return b
        }
    }, qa.id = qa.name = qa.coords = function(a, b, c) {
        var e;
        if (!c) return (e = a.getAttributeNode(b)) && "" !== e.value ?
            e.value : null
    }, f.valHooks.button = {
        get: function(a, b) {
            if ((a = a.getAttributeNode(b)) && a.specified) return a.value
        },
        set: Ha.set
    }, f.attrHooks.contenteditable = {
        set: function(a, b, c) {
            Ha.set(a, "" === b ? !1 : b, c)
        }
    }, f.each(["width", "height"], function(a, b) {
        f.attrHooks[b] = {
            set: function(a, c) {
                if ("" === c) return a.setAttribute(b, "auto"), c
            }
        }
    }));
    E.style || (f.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var bc = /^(?:input|select|textarea|button|object)$/i,
        cc = /^(?:a|area)$/i;
    f.fn.extend({
        prop: function(a, b) {
            return Ba(this, f.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            a = f.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    });
    f.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var e, d, g;
            g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) {
                if (g = 1 !== g || !f.isXMLDoc(a)) b = f.propFix[b] || b, d = f.propHooks[b];
                return void 0 !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : a[b] = c : d && "get" in d && null !== (e = d.get(a, b)) ? e : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b =
                        f.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : bc.test(a.nodeName) || cc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    });
    E.hrefNormalized || f.each(["href", "src"], function(a, b) {
        f.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    });
    E.optSelected || (f.propHooks.selected = {
        get: function(a) {
            if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
            return null
        }
    });
    f.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        f.propFix[this.toLowerCase()] =
            this
    });
    E.enctype || (f.propFix.enctype = "encoding");
    var fb = /[\t\r\n\f]/g;
    f.fn.extend({
        addClass: function(a) {
            var b, c, e, d, g, h = 0,
                k = this.length;
            b = "string" === typeof a && a;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (b)
                for (b = (a || "").match(ma) || []; h < k; h++)
                    if (c = this[h], e = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(fb, " ") : " ")) {
                        for (g = 0; d = b[g++];) 0 > e.indexOf(" " + d + " ") && (e += d + " ");
                        e = f.trim(e);
                        c.className !== e && (c.className = e)
                    }
            return this
        },
        removeClass: function(a) {
            var b,
                c, e, d, g, h = 0,
                k = this.length;
            b = 0 === arguments.length || "string" === typeof a && a;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (b)
                for (b = (a || "").match(ma) || []; h < k; h++)
                    if (c = this[h], e = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(fb, " ") : "")) {
                        for (g = 0; d = b[g++];)
                            for (; 0 <= e.indexOf(" " + d + " ");) e = e.replace(" " + d + " ", " ");
                        e = a ? f.trim(e) : "";
                        c.className !== e && (c.className = e)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" === typeof b &&
                "string" === c ? b ? this.addClass(a) : this.removeClass(a) : f.isFunction(a) ? this.each(function(c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === c)
                        for (var b, e = 0, d = f(this), g = a.match(ma) || []; b = g[e++];) d.hasClass(b) ? d.removeClass(b) : d.addClass(b);
                    else if ("undefined" === c || "boolean" === c) this.className && f._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : f._data(this, "__className__") || ""
                })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b =
                    0, c = this.length; b < c; b++)
                if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(fb, " ").indexOf(a)) return !0;
            return !1
        }
    });
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        f.fn[b] = function(a, c) {
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        }
    });
    f.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b ||
                a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, e) {
            return this.on(b, a, c, e)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var gb = f.now(),
        hb = /\?/,
        dc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    f.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, e = null,
            d = f.trim(b +
                "");
        return d && !f.trim(d.replace(dc, function(a, b, d, g) {
            c && b && (e = 0);
            if (0 === e) return a;
            c = d || b;
            e += !g - !d;
            return ""
        })) ? Function("return " + d)() : f.error("Invalid JSON: " + b)
    };
    f.parseXML = function(b) {
        var c, e;
        if (!b || "string" !== typeof b) return null;
        try {
            a.DOMParser ? (e = new DOMParser, c = e.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (d) {
            c = void 0
        }
        c && c.documentElement && !c.getElementsByTagName("parsererror").length || f.error("Invalid XML: " + b);
        return c
    };
    var Da,
        oa, ec = /#.*$/,
        xb = /([?&])_=[^&]*/,
        fc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        gc = /^(?:GET|HEAD)$/,
        hc = /^\/\//,
        yb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        zb = {},
        Ya = {},
        Ab = "*/".concat("*");
    try {
        oa = location.href
    } catch (l) {
        oa = I.createElement("a"), oa.href = "", oa = oa.href
    }
    Da = yb.exec(oa.toLowerCase()) || [];
    f.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: oa,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Da[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8",
            accepts: {
                "*": Ab,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, f.ajaxSettings), b) : L(f.ajaxSettings, a)
        },
        ajaxPrefilter: M(zb),
        ajaxTransport: M(Ya),
        ajax: function(a,
            b) {
            function c(a, b, e, l) {
                var t, q, L, p;
                p = b;
                if (2 !== O) {
                    O = 2;
                    h && clearTimeout(h);
                    m = void 0;
                    g = l || "";
                    x.readyState = 0 < a ? 4 : 0;
                    l = 200 <= a && 300 > a || 304 === a;
                    if (e) {
                        L = n;
                        for (var K = x, G, A, F, D, u = L.contents, W = L.dataTypes;
                            "*" === W[0];) W.shift(), void 0 === A && (A = L.mimeType || K.getResponseHeader("Content-Type"));
                        if (A)
                            for (D in u)
                                if (u[D] && u[D].test(A)) {
                                    W.unshift(D);
                                    break
                                }
                        if (W[0] in e) F = W[0];
                        else {
                            for (D in e) {
                                if (!W[0] || L.converters[D + " " + W[0]]) {
                                    F = D;
                                    break
                                }
                                G || (G = D)
                            }
                            F = F || G
                        }
                        F ? (F !== W[0] && W.unshift(F), L = e[F]) : L = void 0
                    }
                    a: {
                        e = n;G = L;A = x;F = l;
                        var w,
                            r, T, K = {},
                            u = e.dataTypes.slice();
                        if (u[1])
                            for (r in e.converters) K[r.toLowerCase()] = e.converters[r];
                        for (D = u.shift(); D;)
                            if (e.responseFields[D] && (A[e.responseFields[D]] = G), !T && F && e.dataFilter && (G = e.dataFilter(G, e.dataType)), T = D, D = u.shift())
                                if ("*" === D) D = T;
                                else if ("*" !== T && T !== D) {
                            r = K[T + " " + D] || K["* " + D];
                            if (!r)
                                for (w in K)
                                    if (L = w.split(" "), L[1] === D && (r = K[T + " " + L[0]] || K["* " + L[0]])) {
                                        !0 === r ? r = K[w] : !0 !== K[w] && (D = L[0], u.unshift(L[1]));
                                        break
                                    }
                            if (!0 !== r)
                                if (r && e["throws"]) G = r(G);
                                else try {
                                    G = r(G)
                                } catch (na) {
                                    L = {
                                        state: "parsererror",
                                        error: r ? na : "No conversion from " + T + " to " + D
                                    };
                                    break a
                                }
                        }
                        L = {
                            state: "success",
                            data: G
                        }
                    }
                    if (l) n.ifModified && ((p = x.getResponseHeader("Last-Modified")) && (f.lastModified[d] = p), (p = x.getResponseHeader("etag")) && (f.etag[d] = p)), 204 === a || "HEAD" === n.type ? p = "nocontent" : 304 === a ? p = "notmodified" : (p = L.state, t = L.data, q = L.error, l = !q);
                    else if (q = p, a || !p) p = "error", 0 > a && (a = 0);
                    x.status = a;
                    x.statusText = (b || p) + "";
                    l ? H.resolveWith(y, [t, p, x]) : H.rejectWith(y, [x, p, q]);
                    x.statusCode(J);
                    J = void 0;
                    k && B.trigger(l ? "ajaxSuccess" : "ajaxError", [x, n, l ? t : q]);
                    v.fireWith(y, [x, p]);
                    k && (B.trigger("ajaxComplete", [x, n]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof a && (b = a, a = void 0);
            b = b || {};
            var e, d, g, h, k, m, t, n = f.ajaxSetup({}, b),
                y = n.context || n,
                B = n.context && (y.nodeType || y.jquery) ? f(y) : f.event,
                H = f.Deferred(),
                v = f.Callbacks("once memory"),
                J = n.statusCode || {},
                L = {},
                p = {},
                O = 0,
                K = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === O) {
                            if (!t)
                                for (t = {}; b = fc.exec(g);) t[b[1].toLowerCase()] = b[2];
                            b = t[a.toLowerCase()]
                        }
                        return null == b ?
                            null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === O ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        O || (a = p[c] = p[c] || a, L[a] = b);
                        return this
                    },
                    overrideMimeType: function(a) {
                        O || (n.mimeType = a);
                        return this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > O)
                                for (b in a) J[b] = [J[b], a[b]];
                            else x.always(a[x.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a || K;
                        m && m.abort(a);
                        c(0, a);
                        return this
                    }
                };
            H.promise(x).complete = v.add;
            x.success = x.done;
            x.error = x.fail;
            n.url = ((a || n.url || oa) + "").replace(ec, "").replace(hc, Da[1] +
                "//");
            n.type = b.method || b.type || n.method || n.type;
            n.dataTypes = f.trim(n.dataType || "*").toLowerCase().match(ma) || [""];
            null == n.crossDomain && (a = yb.exec(n.url.toLowerCase()), n.crossDomain = !(!a || a[1] === Da[1] && a[2] === Da[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Da[3] || ("http:" === Da[1] ? "80" : "443"))));
            n.data && n.processData && "string" !== typeof n.data && (n.data = f.param(n.data, n.traditional));
            q(zb, n, b, x);
            if (2 === O) return x;
            (k = f.event && n.global) && 0 === f.active++ && f.event.trigger("ajaxStart");
            n.type = n.type.toUpperCase();
            n.hasContent = !gc.test(n.type);
            d = n.url;
            n.hasContent || (n.data && (d = n.url += (hb.test(d) ? "\x26" : "?") + n.data, delete n.data), !1 === n.cache && (n.url = xb.test(d) ? d.replace(xb, "$1_\x3d" + gb++) : d + (hb.test(d) ? "\x26" : "?") + "_\x3d" + gb++));
            n.ifModified && (f.lastModified[d] && x.setRequestHeader("If-Modified-Since", f.lastModified[d]), f.etag[d] && x.setRequestHeader("If-None-Match", f.etag[d]));
            (n.data && n.hasContent && !1 !== n.contentType || b.contentType) && x.setRequestHeader("Content-Type", n.contentType);
            x.setRequestHeader("Accept",
                n.dataTypes[0] && n.accepts[n.dataTypes[0]] ? n.accepts[n.dataTypes[0]] + ("*" !== n.dataTypes[0] ? ", " + Ab + "; q\x3d0.01" : "") : n.accepts["*"]);
            for (e in n.headers) x.setRequestHeader(e, n.headers[e]);
            if (n.beforeSend && (!1 === n.beforeSend.call(y, x, n) || 2 === O)) return x.abort();
            K = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[e](n[e]);
            if (m = q(Ya, n, b, x)) {
                x.readyState = 1;
                k && B.trigger("ajaxSend", [x, n]);
                n.async && 0 < n.timeout && (h = setTimeout(function() {
                    x.abort("timeout")
                }, n.timeout));
                try {
                    O = 1, m.send(L, c)
                } catch (G) {
                    if (2 > O) c(-1,
                        G);
                    else throw G;
                }
            } else c(-1, "No Transport");
            return x
        },
        getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return f.get(a, void 0, b, "script")
        }
    });
    f.each(["get", "post"], function(a, b) {
        f[b] = function(a, c, e, d) {
            f.isFunction(c) && (d = d || e, e = c, c = void 0);
            return f.ajax({
                url: a,
                type: b,
                dataType: d,
                data: c,
                success: e
            })
        }
    });
    f._evalUrl = function(a) {
        return f.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    f.fn.extend({
        wrapAll: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).wrapAll(a.call(this,
                    b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return f.isFunction(a) ? this.each(function(b) {
                f(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = f.isFunction(a);
            return this.each(function(c) {
                f(this).wrapAll(b ?
                    a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    f.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !E.reliableHiddenOffsets() && "none" === (a.style && a.style.display || f.css(a, "display"))
    };
    f.expr.filters.visible = function(a) {
        return !f.expr.filters.hidden(a)
    };
    var ic = /%20/g,
        Kb = /\[\]$/,
        Bb = /\r?\n/g,
        jc = /^(?:submit|button|image|reset|file)$/i,
        kc = /^(?:input|select|textarea|keygen)/i;
    f.param =
        function(a, b) {
            var c, e = [],
                d = function(a, b) {
                    b = f.isFunction(b) ? b() : null == b ? "" : b;
                    e[e.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(b)
                };
            void 0 === b && (b = f.ajaxSettings && f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function() {
                d(this.name, this.value)
            });
            else
                for (c in a) da(c, a[c], b, d);
            return e.join("\x26").replace(ic, "+")
        };
    f.fn.extend({
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = f.prop(this,
                    "elements");
                return a ? f.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !f(this).is(":disabled") && kc.test(this.nodeName) && !jc.test(a) && (this.checked || !Xa.test(a))
            }).map(function(a, b) {
                a = f(this).val();
                return null == a ? null : f.isArray(a) ? f.map(a, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Bb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: a.replace(Bb, "\r\n")
                }
            }).get()
        }
    });
    f.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        var b;
        if (!(b = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                T())) a: {
            try {
                b = new a.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (c) {}
            b = void 0
        }
        return b
    } : T;
    var lc = 0,
        Ua = {},
        Va = f.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Ua) Ua[a](void 0, !0)
    });
    E.cors = !!Va && "withCredentials" in Va;
    (Va = E.ajax = !!Va) && f.ajaxTransport(function(a) {
        if (!a.crossDomain || E.cors) {
            var b;
            return {
                send: function(c, e) {
                    var d, g = a.xhr(),
                        h = ++lc;
                    g.open(a.type, a.url, a.async, a.username, a.password);
                    if (a.xhrFields)
                        for (d in a.xhrFields) g[d] = a.xhrFields[d];
                    a.mimeType &&
                        g.overrideMimeType && g.overrideMimeType(a.mimeType);
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (d in c) void 0 !== c[d] && g.setRequestHeader(d, c[d] + "");
                    g.send(a.hasContent && a.data || null);
                    b = function(c, d) {
                        var k, m, t;
                        if (b && (d || 4 === g.readyState))
                            if (delete Ua[h], b = void 0, g.onreadystatechange = f.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                t = {};
                                k = g.status;
                                "string" === typeof g.responseText && (t.text = g.responseText);
                                try {
                                    m = g.statusText
                                } catch (n) {
                                    m = ""
                                }
                                k || !a.isLocal || a.crossDomain ? 1223 ===
                                    k && (k = 204) : k = t.text ? 200 : 404
                            }
                        t && e(k, m, t, g.getAllResponseHeaders())
                    };
                    a.async ? 4 === g.readyState ? setTimeout(b) : g.onreadystatechange = Ua[h] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                f.globalEval(a);
                return a
            }
        }
    });
    f.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET",
            a.global = !1)
    });
    f.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = I.head || f("head")[0] || I.documentElement;
            return {
                send: function(e, d) {
                    b = I.createElement("script");
                    b.async = !0;
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function(a, c) {
                        if (c || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || d(200, "success")
                    };
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    if (b) b.onload(void 0, !0)
                }
            }
        }
    });
    var Cb = [],
        ib = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Cb.pop() || f.expando + "_" + gb++;
            this[a] = !0;
            return a
        }
    });
    f.ajaxPrefilter("json jsonp", function(b, c, e) {
        var d, g, h, k = !1 !== b.jsonp && (ib.test(b.url) ? "url" : "string" === typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ib.test(b.data) && "data");
        if (k || "jsonp" === b.dataTypes[0]) return d = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, k ? b[k] = b[k].replace(ib,
            "$1" + d) : !1 !== b.jsonp && (b.url += (hb.test(b.url) ? "\x26" : "?") + b.jsonp + "\x3d" + d), b.converters["script json"] = function() {
            h || f.error(d + " was not called");
            return h[0]
        }, b.dataTypes[0] = "json", g = a[d], a[d] = function() {
            h = arguments
        }, e.always(function() {
            a[d] = g;
            b[d] && (b.jsonpCallback = c.jsonpCallback, Cb.push(d));
            h && f.isFunction(g) && g(h[0]);
            h = g = void 0
        }), "script"
    });
    f.parseHTML = function(a, b, c) {
        if (!a || "string" !== typeof a) return null;
        "boolean" === typeof b && (c = b, b = !1);
        b = b || I;
        var e = Pa.exec(a);
        c = !c && [];
        if (e) return [b.createElement(e[1])];
        e = f.buildFragment([a], b, c);
        c && c.length && f(c).remove();
        return f.merge([], e.childNodes)
    };
    var Db = f.fn.load;
    f.fn.load = function(a, b, c) {
        if ("string" !== typeof a && Db) return Db.apply(this, arguments);
        var e, d, g, h = this,
            k = a.indexOf(" ");
        0 <= k && (e = f.trim(a.slice(k, a.length)), a = a.slice(0, k));
        f.isFunction(b) ? (c = b, b = void 0) : b && "object" === typeof b && (g = "POST");
        0 < h.length && f.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: b
        }).done(function(a) {
            d = arguments;
            h.html(e ? f("\x3cdiv\x3e").append(f.parseHTML(a)).find(e) : a)
        }).complete(c &&
            function(a, b) {
                h.each(c, d || [a.responseText, b, a])
            });
        return this
    };
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        f.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    f.expr.filters.animated = function(a) {
        return f.grep(f.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Eb = a.document.documentElement;
    f.offset = {
        setOffset: function(a, b, c) {
            var e, d, g, h = f.css(a, "position"),
                k = f(a),
                m = {};
            "static" === h && (a.style.position = "relative");
            g = k.offset();
            d = f.css(a, "top");
            e = f.css(a, "left");
            ("absolute" === h || "fixed" === h) && -1 < f.inArray("auto", [d, e]) ? (e = k.position(), d = e.top, e = e.left) : (d = parseFloat(d) || 0, e = parseFloat(e) || 0);
            f.isFunction(b) && (b = b.call(a, c, g));
            null != b.top && (m.top = b.top - g.top + d);
            null != b.left && (m.left = b.left - g.left + e);
            "using" in b ? b.using.call(a, m) : k.css(m)
        }
    };
    f.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                f.offset.setOffset(this, a, b)
            });
            var b, c, e = {
                    top: 0,
                    left: 0
                },
                d = (c = this[0]) && c.ownerDocument;
            if (d) {
                b = d.documentElement;
                if (!f.contains(b,
                        c)) return e;
                "undefined" !== typeof c.getBoundingClientRect && (e = c.getBoundingClientRect());
                c = aa(d);
                return {
                    top: e.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: e.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    e = this[0];
                "fixed" === f.css(e, "position") ? b = e.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), f.nodeName(a[0], "html") || (c = a.offset()), c.top += f.css(a[0], "borderTopWidth", !0), c.left += f.css(a[0], "borderLeftWidth", !0));
                return {
                    top: b.top - c.top - f.css(e, "marginTop", !0),
                    left: b.left - c.left - f.css(e, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Eb; a && !f.nodeName(a, "html") && "static" === f.css(a, "position");) a = a.offsetParent;
                return a || Eb
            })
        }
    });
    f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        f.fn[a] = function(e) {
            return Ba(this, function(a, e, d) {
                var g = aa(a);
                if (void 0 === d) return g ? b in g ? g[b] : g.document.documentElement[e] : a[e];
                g ? g.scrollTo(c ?
                    f(g).scrollLeft() : d, c ? d : f(g).scrollTop()) : a[e] = d
            }, a, e, arguments.length, null)
        }
    });
    f.each(["top", "left"], function(a, b) {
        f.cssHooks[b] = K(E.pixelPosition, function(a, c) {
            if (c) return c = xa(a, b), Ma.test(c) ? f(a).position()[b] + "px" : c
        })
    });
    f.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        f.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, e) {
            f.fn[e] = function(e, d) {
                var g = arguments.length && (c || "boolean" !== typeof e),
                    h = c || (!0 === e || !0 === d ? "margin" : "border");
                return Ba(this, function(b, c, e) {
                    return f.isWindow(b) ?
                        b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === e ? f.css(b, c, h) : f.style(b, c, e, h)
                }, b, g ? e : void 0, g, null)
            }
        })
    });
    f.fn.size = function() {
        return this.length
    };
    f.fn.andSelf = f.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function() {
        return f
    });
    var mc = a.jQuery,
        nc = a.$;
    f.noConflict = function(b) {
        a.$ === f && (a.$ = nc);
        b && a.jQuery === f && (a.jQuery = mc);
        return f
    };
    "undefined" ===
    typeof d && (a.jQuery = a.$ = f);
    return f
});
(function(a, d, c) {
    function b(b) {
        var c = d.console;
        g[b] || (g[b] = !0, a.migrateWarnings.push(b), c && c.warn && !a.migrateMute && (c.warn("JQMIGRATE: " + b), a.migrateTrace && c.trace && c.trace()))
    }

    function e(c, e, d, g) {
        if (Object.defineProperty) try {
            Object.defineProperty(c, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    b(g);
                    return d
                },
                set: function(a) {
                    b(g);
                    d = a
                }
            });
            return
        } catch (h) {}
        a._definePropertyBroken = !0;
        c[e] = d
    }
    var g = {};
    a.migrateWarnings = [];
    a.migrateMute = !0;
    !a.migrateMute && d.console && d.console.log && d.console.log("JQMIGRATE: Logging is active");
    a.migrateTrace === c && (a.migrateTrace = !0);
    a.migrateReset = function() {
        g = {};
        a.migrateWarnings.length = 0
    };
    "BackCompat" === document.compatMode && b("jQuery is not compatible with Quirks Mode");
    var h = a("\x3cinput/\x3e", {
            size: 1
        }).attr("size") && a.attrFn,
        k = a.attr,
        m = a.attrHooks.value && a.attrHooks.value.get || function() {
            return null
        },
        p = a.attrHooks.value && a.attrHooks.value.set || function() {
            return c
        },
        r = /^(?:input|button)$/i,
        z = /^[238]$/,
        v = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        A = /^(?:checked|selected)$/i;
    e(a, "attrFn", h || {}, "jQuery.attrFn is deprecated");
    a.attr = function(e, d, g, m) {
        var t = d.toLowerCase(),
            n = e && e.nodeType;
        if (m && (4 > k.length && b("jQuery.fn.attr( props, pass ) is deprecated"), e && !z.test(n) && (h ? d in h : a.isFunction(a.fn[d])))) return a(e)[d](g);
        "type" === d && g !== c && r.test(e.nodeName) && e.parentNode && b("Can't change the 'type' of an input or button in IE 6/7/8");
        !a.attrHooks[t] && v.test(t) && (a.attrHooks[t] = {
            get: function(b, e) {
                var d, g = a.prop(b, e);
                return !0 === g || "boolean" !==
                    typeof g && (d = b.getAttributeNode(e)) && !1 !== d.nodeValue ? e.toLowerCase() : c
            },
            set: function(b, c, e) {
                !1 === c ? a.removeAttr(b, e) : (c = a.propFix[e] || e, c in b && (b[c] = !0), b.setAttribute(e, e.toLowerCase()));
                return e
            }
        }, A.test(t) && b("jQuery.fn.attr('" + t + "') may use property instead of attribute"));
        return k.call(a, e, d, g)
    };
    a.attrHooks.value = {
        get: function(a, c) {
            var e = (a.nodeName || "").toLowerCase();
            if ("button" === e) return m.apply(this, arguments);
            "input" !== e && "option" !== e && b("jQuery.fn.attr('value') no longer gets properties");
            return c in a ? a.value : null
        },
        set: function(a, c) {
            var e = (a.nodeName || "").toLowerCase();
            if ("button" === e) return p.apply(this, arguments);
            "input" !== e && "option" !== e && b("jQuery.fn.attr('value', val) no longer sets properties");
            a.value = c
        }
    };
    var n, w, C = a.fn.init,
        B = a.parseJSON,
        t = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function(c, e, d) {
        var g;
        return c && "string" === typeof c && !a.isPlainObject(e) && (g = t.exec(a.trim(c))) && g[0] && ("\x3c" !== c.charAt(0) && b("$(html) HTML strings must start with '\x3c' character"), g[3] && b("$(html) HTML text after last tag is ignored"),
            "#" === g[0].charAt(0) && (b("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && (e = e.context), a.parseHTML) ? C.call(this, a.parseHTML(g[2], e, !0), e, d) : C.apply(this, arguments)
    };
    a.fn.init.prototype = a.fn;
    a.parseJSON = function(a) {
        return a || null === a ? B.apply(this, arguments) : (b("jQuery.parseJSON requires a valid JSON string"), null)
    };
    a.uaMatch = function(a) {
        a = a.toLowerCase();
        a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) ||
            /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {
            browser: a[1] || "",
            version: a[2] || "0"
        }
    };
    a.browser || (n = a.uaMatch(navigator.userAgent), w = {}, n.browser && (w[n.browser] = !0, w.version = n.version), w.chrome ? w.webkit = !0 : w.webkit && (w.safari = !0), a.browser = w);
    e(a, "browser", a.browser, "jQuery.browser is deprecated");
    a.sub = function() {
        function c(a, b) {
            return new c.fn.init(a, b)
        }
        a.extend(!0, c, this);
        c.superclass = this;
        c.fn = c.prototype = this();
        c.fn.constructor = c;
        c.sub =
            this.sub;
        c.fn.init = function(b, d) {
            d && d instanceof a && !(d instanceof c) && (d = c(d));
            return a.fn.init.call(this, b, d, e)
        };
        c.fn.init.prototype = c.fn;
        var e = c(document);
        b("jQuery.sub() is deprecated");
        return c
    };
    a.ajaxSetup({
        converters: {
            "text json": a.parseJSON
        }
    });
    var F = a.fn.data;
    a.fn.data = function(e) {
        var d, g;
        return !(g = this[0]) || "events" !== e || 1 !== arguments.length || (d = a.data(g, e), g = a._data(g, e), d !== c && d !== g || g === c) ? F.apply(this, arguments) : (b("Use of jQuery.fn.data('events') is deprecated"), g)
    };
    var G = /\/(java|ecma)script/i,
        y = a.fn.andSelf || a.fn.addBack;
    a.fn.andSelf = function() {
        b("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
        return y.apply(this, arguments)
    };
    a.clean || (a.clean = function(c, e, d, g) {
        e = e || document;
        e = !e.nodeType && e[0] || e;
        e = e.ownerDocument || e;
        b("jQuery.clean() is deprecated");
        var h, k = [];
        a.merge(k, a.buildFragment(c, e).childNodes);
        if (d)
            for (e = function(a) {
                    if (!a.type || G.test(a.type)) return g ? g.push(a.parentNode ? a.parentNode.removeChild(a) : a) : d.appendChild(a)
                }, c = 0; null != (h = k[c]); c++) a.nodeName(h, "script") && e(h) ||
                (d.appendChild(h), "undefined" !== typeof h.getElementsByTagName && (h = a.grep(a.merge([], h.getElementsByTagName("script")), e), k.splice.apply(k, [c + 1, 0].concat(h)), c += h.length));
        return k
    });
    var H = a.event.add,
        O = a.event.remove,
        W = a.event.trigger,
        K = a.fn.toggle,
        ba = a.fn.live,
        R = a.fn.die,
        fa = /\b(?:ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess)\b/,
        ga = /(?:^|\s)hover(\.\S+|)\b/,
        u = function(c) {
            if ("string" !== typeof c || a.event.special.hover) return c;
            ga.test(c) && b("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
            return c && c.replace(ga, "mouseenter$1 mouseleave$1")
        };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
    a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
    a.event.add = function(a, c, e, d, g) {
        a !== document && fa.test(c) && b("AJAX events should be attached to document: " + c);
        H.call(this, a, u(c || ""), e, d, g)
    };
    a.event.remove = function(a, b, c, e, d) {
        O.call(this, a, u(b) || "", c, e, d)
    };
    a.fn.error =
        function() {
            var a = Array.prototype.slice.call(arguments, 0);
            b("jQuery.fn.error() is deprecated");
            a.splice(0, 0, "error");
            if (arguments.length) return this.bind.apply(this, a);
            this.triggerHandler.apply(this, a);
            return this
        };
    a.fn.toggle = function(c, e) {
        if (!a.isFunction(c) || !a.isFunction(e)) return K.apply(this, arguments);
        b("jQuery.fn.toggle(handler, handler...) is deprecated");
        var d = arguments,
            g = c.guid || a.guid++,
            h = 0,
            k = function(b) {
                var e = (a._data(this, "lastToggle" + c.guid) || 0) % h;
                a._data(this, "lastToggle" + c.guid, e +
                    1);
                b.preventDefault();
                return d[e].apply(this, arguments) || !1
            };
        for (k.guid = g; h < d.length;) d[h++].guid = g;
        return this.click(k)
    };
    a.fn.live = function(c, e, d) {
        b("jQuery.fn.live() is deprecated");
        if (ba) return ba.apply(this, arguments);
        a(this.context).on(c, this.selector, e, d);
        return this
    };
    a.fn.die = function(c, e) {
        b("jQuery.fn.die() is deprecated");
        if (R) return R.apply(this, arguments);
        a(this.context).off(c, this.selector || "**", e);
        return this
    };
    a.event.trigger = function(a, c, e, d) {
        e || fa.test(a) || b("Global events are undocumented and deprecated");
        return W.call(this, a, c, e || document, d)
    };
    a.each("ajaxStart ajaxStop ajaxSend ajaxComplete ajaxError ajaxSuccess".split(" "), function(b, c) {
        a.event.special[c] = {
            setup: function() {
                var b = this;
                b !== document && (a.event.add(document, c + "." + a.guid, function() {
                    a.event.trigger(c, null, b, !0)
                }), a._data(this, c, a.guid++));
                return !1
            },
            teardown: function() {
                this !== document && a.event.remove(document, c + "." + a._data(this, c));
                return !1
            }
        }
    })
})(jQuery, window);
$(function() {
    $.fn.wordify = function(a) {
        var d = {
                I: "\u0131",
                "\u0130": "i",
                "\u015e": "\u015f",
                "\u011e": "\u011f"
            },
            c = {
                "\u0131": "I",
                i: "\u0130",
                "\u015f": "\u015e",
                "\u011f": "\u011e"
            },
            b = $.extend({
                surname: !1,
                surnameQuantity: 1,
                minChar: 1
            }, a),
            e = $(this),
            g = function(a) {
                var b = a.replace(/[^A-Za-z\u00e7\u00c7\u00f6\u00d6\u015f\u015e\u0131\u0130\u011f\u011e\u00fc\u00dc\s]+/g, "");
                a = b.charAt(0).replace(/[\u0131i\u015f\u011f]/g, function(a) {
                    return c[a]
                }).toUpperCase();
                b = b.replace(/[I\u0130\u015e\u011e]/g, function(a) {
                    return d[a]
                }).substr(1).toLowerCase();
                return a + b
            };
        return function() {
            var a = e.val().replace(/\s+/g, " ").split(" "),
                c = a.length,
                d = [],
                p = 0;
            for (p; p < c; p++) a[p].length > b.minChar && (d[p] = g(a[p]));
            a = d.length > b.surnameQuantity ? !1 : !0;
            e.val(d.join(" "));
            if (b.surname) return a
        }()
    }
});
window.placeholderPollyFill = function() {
    var a = "placeholder" in document.createElement("input");
    return function() {
        a || $("input[placeholder]").not(".placeholderFilled").each(function() {
            var a = $(this),
                c = a.attr("placeholder");
            a.focus(function() {
                $(this).removeClass("placeholder");
                $(this).val() == $(this).attr("placeholder") && $(this).val("")
            }).blur(function() {
                "" == $(this).val() && $(this).addClass("placeholder").val($(this).attr("placeholder")).removeClass("dirty")
            }).keyup(function() {
                "" != $(this).val() && $(this).addClass("dirty")
            });
            placeHolderTrigger(a, c);
            a.addClass("placeholderFilled")
        })
    }
}();
$(function() {
    window.placeholderPollyFill()
});
var placeHolderTrigger = function(a, d) {
    "placeholder" in document.createElement("input") || ("" == a.val() && a.val(d), a.val() == d && a.addClass("placeholder"))
};
(function(a) {
    a(["jquery"], function(a) {
        function c(b) {
            return !b.nodeName || -1 !== a.inArray(b.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
        }

        function b(b) {
            return a.isFunction(b) || a.isPlainObject(b) ? b : {
                top: b,
                left: b
            }
        }
        var e = a.scrollTo = function(b, c, e) {
            return a(window).scrollTo(b, c, e)
        };
        e.defaults = {
            axis: "xy",
            duration: 0,
            limit: !0
        };
        a.fn.scrollTo = function(g, h, k) {
            "object" === typeof h && (k = h, h = 0);
            "function" === typeof k && (k = {
                onAfter: k
            });
            "max" === g && (g = 9E9);
            k = a.extend({}, e.defaults, k);
            h = h || k.duration;
            var m =
                k.queue && 1 < k.axis.length;
            m && (h /= 2);
            k.offset = b(k.offset);
            k.over = b(k.over);
            return this.each(function() {
                function p(b) {
                    var c = a.extend({}, k, {
                        queue: !0,
                        duration: h,
                        complete: b && function() {
                            b.call(z, A, k)
                        }
                    });
                    v.animate(n, c)
                }
                if (null !== g) {
                    var r = c(this),
                        z = r ? this.contentWindow || window : this,
                        v = a(z),
                        A = g,
                        n = {},
                        w;
                    switch (typeof A) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(A)) {
                                A = b(A);
                                break
                            }
                            A = r ? a(A) : a(A, z);
                            if (!A.length) return;
                        case "object":
                            if (A.is || A.style) w = (A = a(A)).offset()
                    }
                    var C = a.isFunction(k.offset) &&
                        k.offset(z, A) || k.offset;
                    a.each(k.axis.split(""), function(a, b) {
                        var c = "x" === b ? "Left" : "Top",
                            d = c.toLowerCase(),
                            g = "scroll" + c,
                            h = v[g](),
                            O = e.max(z, b);
                        w ? (n[g] = w[d] + (r ? 0 : h - v.offset()[d]), k.margin && (n[g] -= parseInt(A.css("margin" + c), 10) || 0, n[g] -= parseInt(A.css("border" + c + "Width"), 10) || 0), n[g] += C[d] || 0, k.over[d] && (n[g] += A["x" === b ? "width" : "height"]() * k.over[d])) : (b = A[d], n[g] = b.slice && "%" === b.slice(-1) ? parseFloat(b) / 100 * O : b);
                        k.limit && /^\d+$/.test(n[g]) && (n[g] = 0 >= n[g] ? 0 : Math.min(n[g], O));
                        !a && 1 < k.axis.length && (h ===
                            n[g] ? n = {} : m && (p(k.onAfterFirst), n = {}))
                    });
                    p(k.onAfter)
                }
            })
        };
        e.max = function(b, e) {
            var k = "x" === e ? "Width" : "Height";
            e = "scroll" + k;
            if (!c(b)) return b[e] - a(b)[k.toLowerCase()]();
            var k = "client" + k,
                m = b.ownerDocument || b.document;
            b = m.documentElement;
            m = m.body;
            return Math.max(b[e], m[e]) - Math.min(b[k], m[k])
        };
        a.Tween.propHooks.scrollLeft = a.Tween.propHooks.scrollTop = {
            get: function(b) {
                return a(b.elem)[b.prop]()
            },
            set: function(b) {
                var c = this.get(b);
                if (b.options.interrupt && b._last && b._last !== c) return a(b.elem).stop();
                var e =
                    Math.round(b.now);
                c !== e && (a(b.elem)[b.prop](e), b._last = this.get(b))
            }
        };
        return e
    })
})("function" === typeof define && define.amd ? define : function(a, d) {
    "undefined" !== typeof module && module.exports ? module.exports = d(require("jquery")) : d(jQuery)
});
(function(a) {
    "function" === typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a(jQuery)
})(function(a) {
    function d(a) {
        return a
    }

    function c(a) {
        return decodeURIComponent(a.replace(e, " "))
    }

    function b(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return g.json ? JSON.parse(a) : a
        } catch (b) {}
    }
    var e = /\+/g,
        g = a.cookie = function(e, k, m) {
            if (void 0 !== k) {
                m = a.extend({}, g.defaults, m);
                if ("number" === typeof m.expires) {
                    var p = m.expires,
                        r = m.expires = new Date;
                    r.setDate(r.getDate() +
                        p)
                }
                k = g.json ? JSON.stringify(k) : String(k);
                return document.cookie = [encodeURIComponent(e), "\x3d", g.raw ? k : encodeURIComponent(k), m.expires ? "; expires\x3d" + m.expires.toUTCString() : "", m.path ? "; path\x3d" + m.path : "", m.domain ? "; domain\x3d" + m.domain : "", m.secure ? "; secure" : ""].join("")
            }
            k = g.raw ? d : c;
            m = document.cookie.split("; ");
            for (var p = e ? void 0 : {}, r = 0, z = m.length; r < z; r++) {
                var v = m[r].split("\x3d"),
                    A = k(v.shift()),
                    v = k(v.join("\x3d"));
                if (e && e === A) {
                    p = b(v);
                    break
                }
                e || (p[A] = b(v))
            }
            return p
        };
    g.defaults = {};
    a.removeCookie =
        function(b, c) {
            return void 0 !== a.cookie(b) ? (a.cookie(b, "", a.extend(c, {
                expires: -1
            })), !0) : !1
        }
});
jQuery.url = function() {
    var a = {},
        d = {},
        c = window.location,
        b = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        e = /(?:^|&)([^&=]*)=?([^&]*)/g,
        g = {
            strict: /^(?:([^:\/?]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?]*)(?::(\d*))?))?((((?:[^?\/]*\/)*)([^?]*))(?:\?([^#]*))?(?:(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?]*)(?::(\d*))?)(((\/(?:[^?](?![^?\/]*\.[^?\/.]+(?:[?]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:(.*))?)/
        },
        h = function() {
            str = decodeURI(c);
            for (var a = g.loose.exec(str), d = {}, h = 14; h--;) d[b[h]] = a[h] || "";
            d.queryKey = {};
            d[b[12]].replace(e, function(a, b, c) {
                b && (d.queryKey[b] = c)
            });
            return d
        },
        k = function() {
            d = h();
            var b = d.path;
            a = [];
            a = 1 == d.path.length ? {} : ("/" == b.charAt(b.length - 1) ? b.substring(1, b.length - 1) : path = b.substring(1)).split("/")
        };
    return {
        setMode: function(a) {
            strictMode = "strict" == a ? !0 : !1;
            return this
        },
        setUrl: function(a) {
            c = void 0 === a ? window.location : a;
            k();
            return this
        },
        segment: function(b) {
            d.length || k();
            return void 0 ===
                b ? a.length : "" === a[b] || void 0 === a[b] ? null : a[b]
        },
        attr: function(a) {
            d.length || k();
            return "base" == a ? null !== d.port && "" !== d.port ? d.protocol + "://" + d.host + ":" + d.port + "/" : d.protocol + "://" + d.host + "/" : "" === d[a] ? null : d[a]
        },
        param: function(a) {
            d.length || k();
            return null === d.queryKey[a] ? null : d.queryKey[a]
        }
    }
}();
jQuery.extend(jQuery.url, {
    params: function() {
        var a = this.attr("query") ? this.attr("query").split("\x26") : [],
            d = {},
            c, b;
        for (c in a)
            if (0 < a.length && a[c]) {
                b = a[c].split("\x3d");
                var e = b[0];
                b = b[1];
                var g = d[e];
                g || (g = [], d[e] = g);
                g.push(b)
            }
        return d
    }
});
jQuery.fn.extend({
    everyTime: function(a, d, c, b) {
        return this.each(function() {
            jQuery.timer.add(this, a, d, c, b)
        })
    },
    oneTime: function(a, d, c) {
        return this.each(function() {
            jQuery.timer.add(this, a, d, c, 1)
        })
    },
    stopTime: function(a, d) {
        return this.each(function() {
            jQuery.timer.remove(this, a, d)
        })
    }
});
jQuery.extend({
    timer: {
        global: [],
        guid: 1,
        dataKey: "jQuery.timer",
        regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
        powers: {
            ms: 1,
            cs: 10,
            ds: 100,
            s: 1E3,
            das: 1E4,
            hs: 1E5,
            ks: 1E6
        },
        timeParse: function(a) {
            if (void 0 == a || null == a) return null;
            var d = this.regex.exec(jQuery.trim(a.toString()));
            return d[2] ? parseFloat(d[1]) * (this.powers[d[2]] || 1) : a
        },
        add: function(a, d, c, b, e) {
            var g = 0;
            jQuery.isFunction(c) && (e || (e = b), b = c, c = d);
            d = jQuery.timer.timeParse(d);
            if (!("number" != typeof d || isNaN(d) || 0 > d)) {
                if ("number" != typeof e || isNaN(e) || 0 > e) e = 0;
                e = e || 0;
                var h = jQuery.data(a, this.dataKey) || jQuery.data(a, this.dataKey, {});
                h[c] || (h[c] = {});
                b.timerID = b.timerID || this.guid++;
                var k = function() {
                    (++g > e && 0 !== e || !1 === b.call(a, g)) && jQuery.timer.remove(a, c, b)
                };
                k.timerID = b.timerID;
                h[c][b.timerID] || (h[c][b.timerID] = window.setInterval(k, d));
                this.global.push(a)
            }
        },
        remove: function(a, d, c) {
            var b = jQuery.data(a, this.dataKey),
                e;
            if (b) {
                if (!d)
                    for (d in b) this.remove(a, d, c);
                else if (b[d]) {
                    if (c) c.timerID && (window.clearInterval(b[d][c.timerID]), delete b[d][c.timerID]);
                    else
                        for (c in b[d]) window.clearInterval(b[d][c]),
                            delete b[d][c];
                    for (e in b[d]) break;
                    e || (e = null, delete b[d])
                }
                for (e in b) break;
                e || jQuery.removeData(a, this.dataKey)
            }
        }
    }
});
jQuery(window).bind("unload", function() {
    jQuery.each(jQuery.timer.global, function(a, d) {
        jQuery.timer.remove(d)
    })
});
(function(a) {
    a.extend(a.fn, {
        validate: function(d) {
            if (this.length) {
                var c = a.data(this[0], "validator");
                if (c) return c;
                c = new a.validator(d, this[0]);
                a.data(this[0], "validator", c);
                c.settings.onsubmit && (this.find("input, button").filter(".cancel").click(function() {
                    c.cancelSubmit = !0
                }), c.settings.submitHandler && this.find("input, button").filter(":submit").click(function() {
                    c.submitButton = this
                }), this.submit(function(b) {
                    function e() {
                        if (c.settings.submitHandler) {
                            if (c.submitButton) var b = a("\x3cinput type\x3d'hidden'/\x3e").attr("name",
                                c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm);
                            c.settings.submitHandler.call(c, c.currentForm);
                            c.submitButton && b.remove();
                            return !1
                        }
                        return !0
                    }
                    c.settings.debug && b.preventDefault();
                    if (c.cancelSubmit) return c.cancelSubmit = !1, e();
                    if (c.form()) return c.pendingRequest ? (c.formSubmitted = !0, !1) : e();
                    c.focusInvalid();
                    return !1
                }));
                return c
            }
            d && d.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
        },
        valid: function() {
            if (a(this[0]).is("form")) return this.validate().form();
            var d = !0,
                c = a(this[0].form).validate();
            this.each(function() {
                d &= c.element(this)
            });
            return d
        },
        removeAttrs: function(d) {
            var c = {},
                b = this;
            a.each(d.split(/\s/), function(a, d) {
                c[d] = b.attr(d);
                b.removeAttr(d)
            });
            return c
        },
        rules: function(d, c) {
            var b = this[0];
            if (d) {
                var e = a.data(b.form, "validator").settings,
                    g = e.rules,
                    h = a.validator.staticRules(b);
                switch (d) {
                    case "add":
                        a.extend(h, a.validator.normalizeRule(c));
                        g[b.name] = h;
                        c.messages && (e.messages[b.name] = a.extend(e.messages[b.name], c.messages));
                        break;
                    case "remove":
                        if (!c) return delete g[b.name],
                            h;
                        var k = {};
                        a.each(c.split(/\s/), function(a, b) {
                            k[b] = h[b];
                            delete h[b]
                        });
                        return k
                }
            }
            b = a.validator.normalizeRules(a.extend({}, a.validator.metadataRules(b), a.validator.classRules(b), a.validator.attributeRules(b), a.validator.staticRules(b)), b);
            b.required && (e = b.required, delete b.required, b = a.extend({
                required: e
            }, b));
            return b
        }
    });
    a.extend(a.expr[":"], {
        blank: function(d) {
            return !a.trim("" + d.value)
        },
        filled: function(d) {
            return !!a.trim("" + d.value)
        },
        unchecked: function(a) {
            return !a.checked
        }
    });
    a.validator = function(d, c) {
        this.settings =
            a.extend(!0, {}, a.validator.defaults, d);
        this.currentForm = c;
        this.init()
    };
    a.validator.format = function(d, c) {
        if (1 == arguments.length) return function() {
            var b = a.makeArray(arguments);
            b.unshift(d);
            return a.validator.format.apply(this, b)
        };
        2 < arguments.length && c.constructor != Array && (c = a.makeArray(arguments).slice(1));
        c.constructor != Array && (c = [c]);
        a.each(c, function(a, c) {
            d = d.replace(RegExp("\\{" + a + "\\}", "g"), c)
        });
        return d
    };
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: [],
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(a) {
                (a.name in
                    this.submitted || a == this.lastElement) && this.element(a)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(d, c, b) {
                "radio" === d.type ? this.findByName(d.name).addClass(c).removeClass(b) : a(d).addClass(c).removeClass(b)
            },
            unhighlight: function(d, c, b) {
                "radio" === d.type ? this.findByName(d.name).removeClass(c).addClass(b) : a(d).removeClass(c).addClass(b)
            }
        },
        setDefaults: function(d) {
            a.extend(a.validator.defaults, d)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function d(b) {
                    var c = a.data(this[0].form, "validator");
                    b = "on" + b.type.replace(/^validate/, "");
                    c.settings[b] && c.settings[b].call(c, this[0])
                }
                this.labelContainer =
                    a(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm);
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var c = this.groups = {};
                a.each(this.settings.groups, function(b, d) {
                    a.each(d.split(/\s/), function(a, d) {
                        c[d] = b
                    })
                });
                var b = this.settings.rules;
                a.each(b, function(c, d) {
                    b[c] = a.validator.normalizeRule(d)
                });
                a(this.currentForm).validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", d).validateDelegate(":radio, :checkbox, select, option", "click", d);
                this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                this.checkForm();
                a.extend(this.submitted, this.errorMap);
                this.invalid = a.extend({}, this.errorMap);
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, c = this.currentElements = this.elements(); c[a]; a++) this.check(c[a]);
                return this.valid()
            },
            element: function(d) {
                this.lastElement = d = this.clean(d);
                this.prepareElement(d);
                this.currentElements = a(d);
                var c = this.check(d);
                c ? delete this.invalid[d.name] : this.invalid[d.name] = !0;
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers));
                this.showErrors();
                return c
            },
            showErrors: function(d) {
                if (d) {
                    a.extend(this.errorMap, d);
                    this.errorList = [];
                    for (var c in d) this.errorList.push({
                        message: d[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in d)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm();
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var c =
                    0,
                    b;
                for (b in a) c++;
                return c
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 == this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (d) {}
            },
            findLastActive: function() {
                var d = this.lastActive;
                return d && 1 == a.grep(this.errorList, function(a) {
                        return a.element.name == d.name
                    }).length &&
                    d
            },
            elements: function() {
                var d = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    !this.name && d.settings.debug && window.console && console.error("%o has no name assigned", this);
                    return this.name in c || !d.objectLength(a(this).rules()) ? !1 : c[this.name] = !0
                })
            },
            clean: function(d) {
                return a(d)[0]
            },
            errors: function() {
                return a(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = a([]);
                this.toHide = a([]);
                this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset();
                this.toHide = this.errorsFor(a)
            },
            check: function(d) {
                d = this.clean(d);
                this.checkable(d) && (d = this.findByName(d.name).not(this.settings.ignore)[0]);
                var c = a(d).rules(),
                    b = !1,
                    e;
                for (e in c) {
                    var g = {
                        method: e,
                        parameters: c[e]
                    };
                    try {
                        var h = a.validator.methods[e].call(this, d.value.replace(/\r/g,
                            ""), d, g.parameters);
                        if ("dependency-mismatch" == h) b = !0;
                        else {
                            b = !1;
                            if ("pending" == h) {
                                this.toHide = this.toHide.not(this.errorsFor(d));
                                return
                            }
                            if (!h) return this.formatAndAdd(d, g), !1
                        }
                    } catch (k) {
                        throw this.settings.debug && window.console && console.log("exception occured when checking element " + d.id + ", check the '" + g.method + "' method", k), k;
                    }
                }
                if (!b) return this.objectLength(c) && this.successList.push(d), !0
            },
            customMetaMessage: function(d, c) {
                if (a.metadata) return (d = this.settings.meta ? a(d).metadata()[this.settings.meta] :
                    a(d).metadata()) && d.messages && d.messages[c]
            },
            customMessage: function(a, c) {
                return (a = this.settings.messages[a]) && (a.constructor == String ? a : a[c])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function(d, c) {
                return this.findDefined(this.customMessage(d.name, c), this.customMetaMessage(d, c), !this.settings.ignoreTitle && d.title || void 0, a.validator.messages[c], "\x3cstrong\x3eWarning: No message defined for " + d.name + "\x3c/strong\x3e")
            },
            formatAndAdd: function(a,
                c) {
                var b = this.defaultMessage(a, c.method),
                    e = /\$?\{(\d+)\}/g;
                "function" == typeof b ? b = b.call(this, c.parameters, a) : e.test(b) && (b = jQuery.format(b.replace(e, "{$1}"), c.parameters));
                this.errorList.push({
                    message: b,
                    element: a
                });
                this.errorMap[a.name] = b;
                this.submitted[a.name] = b
            },
            addWrapper: function(a) {
                this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper)));
                return a
            },
            defaultShowErrors: function() {
                for (var a = 0; this.errorList[a]; a++) {
                    var c = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this,
                        c.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(c.element, c.message)
                }
                this.errorList.length && (this.toShow = this.toShow.add(this.containers));
                if (this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, c = this.validElements(); c[a]; a++) this.settings.unhighlight.call(this, c[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(d, c) {
                var b = this.errorsFor(d);
                b.length ? (b.removeClass().addClass(this.settings.errorClass), b.attr("generated") && b.html(c)) : (b = a("\x3c" + this.settings.errorElement + "/\x3e").attr({
                    "for": this.idOrName(d),
                    generated: !0
                }).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (b = b.hide().show().wrap("\x3c" +
                    this.settings.wrapper + "/\x3e").parent()), this.labelContainer.append(b).length || (this.settings.errorPlacement ? this.settings.errorPlacement(b, a(d)) : b.insertAfter(d)));
                !c && this.settings.success && (b.text(""), "string" == typeof this.settings.success ? b.addClass(this.settings.success) : this.settings.success(b));
                this.toShow = this.toShow.add(b)
            },
            errorsFor: function(d) {
                var c = this.idOrName(d);
                return this.errors().filter(function() {
                    return a(this).attr("for") == c
                })
            },
            idOrName: function(a) {
                return this.groups[a.name] ||
                    (this.checkable(a) ? a.name : a.id || a.name)
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(d) {
                var c = this.currentForm;
                return a(document.getElementsByName(d)).map(function(a, e) {
                    return e.form == c && e.name == d && e || null
                })
            },
            getLength: function(d, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return d.length
            },
            depend: function(a, c) {
                return this.dependTypes[typeof a] ?
                    this.dependTypes[typeof a](a, c) : !0
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(d, c) {
                    return !!a(d, c.form).length
                },
                "function": function(a, c) {
                    return a(c)
                }
            },
            optional: function(d) {
                return !a.validator.methods.required.call(this, a.trim(d.value), d) && "dependency-mismatch"
            },
            startRequest: function(a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            },
            stopRequest: function(d, c) {
                this.pendingRequest--;
                0 > this.pendingRequest && (this.pendingRequest = 0);
                delete this.pending[d.name];
                c &&
                    0 == this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 == this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(d) {
                return a.data(d, "previousValue") || a.data(d, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(d, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            dateDE: {
                dateDE: !0
            },
            number: {
                number: !0
            },
            numberDE: {
                numberDE: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(d, c) {
            d.constructor == String ? this.classRuleSettings[d] = c : a.extend(this.classRuleSettings, d)
        },
        classRules: function(d) {
            var c = {};
            (d = a(d).attr("class")) && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            });
            return c
        },
        attributeRules: function(d) {
            var c = {};
            d = a(d);
            for (var b in a.validator.methods) {
                var e = d.attr(b);
                e && (c[b] = e)
            }
            c.maxlength &&
                /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength;
            return c
        },
        metadataRules: function(d) {
            if (!a.metadata) return {};
            var c = a.data(d.form, "validator").settings.meta;
            return c ? a(d).metadata()[c] : a(d).metadata()
        },
        staticRules: function(d) {
            var c = {},
                b = a.data(d.form, "validator");
            b.settings.rules && (c = a.validator.normalizeRule(b.settings.rules[d.name]) || {});
            return c
        },
        normalizeRules: function(d, c) {
            a.each(d, function(b, e) {
                if (!1 === e) delete d[b];
                else if (e.param || e.depends) {
                    var g = !0;
                    switch (typeof e.depends) {
                        case "string":
                            g = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            g = e.depends.call(c, c)
                    }
                    g ? d[b] = void 0 !== e.param ? e.param : !0 : delete d[b]
                }
            });
            a.each(d, function(b, e) {
                d[b] = a.isFunction(e) ? e(c) : e
            });
            a.each(["minlength", "maxlength", "min", "max"], function() {
                d[this] && (d[this] = Number(d[this]))
            });
            a.each(["rangelength", "range"], function() {
                d[this] && (d[this] = [Number(d[this][0]), Number(d[this][1])])
            });
            a.validator.autoCreateRanges && (d.min && d.max && (d.range = [d.min, d.max], delete d.min, delete d.max), d.minlength && d.maxlength && (d.rangelength = [d.minlength, d.maxlength], delete d.minlength, delete d.maxlength));
            d.messages && delete d.messages;
            return d
        },
        normalizeRule: function(d) {
            if ("string" == typeof d) {
                var c = {};
                a.each(d.split(/\s/), function() {
                    c[this] = !0
                });
                d = c
            }
            return d
        },
        addMethod: function(d, c, b) {
            a.validator.methods[d] = c;
            a.validator.messages[d] = void 0 != b ? b : a.validator.messages[d];
            3 > c.length && a.validator.addClassRules(d, a.validator.normalizeRule(d))
        },
        methods: {
            required: function(d, c, b) {
                if (!this.depend(b, c)) return "dependency-mismatch";
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return (d =
                            a(c).val()) && 0 < d.length;
                    case "input":
                        if (this.checkable(c)) return 0 < this.getLength(d, c);
                    default:
                        return 0 < a.trim(d).length
                }
            },
            remote: function(d, c, b) {
                if (this.optional(c)) return "dependency-mismatch";
                var e = this.previousValue(c);
                this.settings.messages[c.name] || (this.settings.messages[c.name] = {});
                e.originalMessage = this.settings.messages[c.name].remote;
                this.settings.messages[c.name].remote = e.message;
                b = "string" == typeof b && {
                    url: b
                } || b;
                if (this.pending[c.name]) return "pending";
                if (e.old === d) return e.valid;
                e.old =
                    d;
                var g = this;
                this.startRequest(c);
                var h = {};
                h[c.name] = d;
                a.ajax(a.extend(!0, {
                    url: b,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: h,
                    success: function(b) {
                        g.settings.messages[c.name].remote = e.originalMessage;
                        var h = !0 === b;
                        if (h) {
                            var p = g.formSubmitted;
                            g.prepareElement(c);
                            g.formSubmitted = p;
                            g.successList.push(c);
                            g.showErrors()
                        } else p = {}, b = b || g.defaultMessage(c, "remote"), p[c.name] = e.message = a.isFunction(b) ? b(d) : b, g.showErrors(p);
                        e.valid = h;
                        g.stopRequest(c, h)
                    }
                }, b));
                return "pending"
            },
            minlength: function(d,
                c, b) {
                return this.optional(c) || this.getLength(a.trim(d), c) >= b
            },
            maxlength: function(d, c, b) {
                return this.optional(c) || this.getLength(a.trim(d), c) <= b
            },
            rangelength: function(d, c, b) {
                d = this.getLength(a.trim(d), c);
                return this.optional(c) || d >= b[0] && d <= b[1]
            },
            min: function(a, c, b) {
                return this.optional(c) || a >= b
            },
            max: function(a, c, b) {
                return this.optional(c) || a <= b
            },
            range: function(a, c, b) {
                return this.optional(c) || a >= b[0] && a <= b[1]
            },
            email: function(a, c) {
                return this.optional(c) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(a)
            },
            url: function(a, c) {
                return this.optional(c) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function(a, c) {
                return this.optional(c) || !/Invalid|NaN/.test(new Date(a))
            },
            dateISO: function(a, c) {
                return this.optional(c) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)
            },
            number: function(a, c) {
                return this.optional(c) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)
            },
            digits: function(a, c) {
                return this.optional(c) || /^\d+$/.test(a)
            },
            creditcard: function(a, c) {
                if (this.optional(c)) return "dependency-mismatch";
                if (/[^0-9-]+/.test(a)) return !1;
                c = 0;
                var b, e = !1;
                a = a.replace(/\D/g, "");
                for (var g = a.length - 1; 0 <= g; g--) b =
                    a.charAt(g), b = parseInt(b, 10), e && 9 < (b *= 2) && (b -= 9), c += b, e = !e;
                return 0 == c % 10
            },
            accept: function(a, c, b) {
                b = "string" == typeof b ? b.replace(/,/g, "|") : "png|jpe?g|gif";
                return this.optional(c) || a.match(RegExp(".(" + b + ")$", "i"))
            },
            equalTo: function(d, c, b) {
                b = a(b).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    a(c).valid()
                });
                return d == b.val()
            }
        }
    });
    a.format = a.validator.format
})(jQuery);
(function(a) {
    var d = {};
    if (a.ajaxPrefilter) a.ajaxPrefilter(function(a, c, g) {
        c = a.port;
        "abort" == a.mode && (d[c] && d[c].abort(), d[c] = g)
    });
    else {
        var c = a.ajax;
        a.ajax = function(b) {
            var e = ("port" in b ? b : a.ajaxSettings).port;
            return "abort" == ("mode" in b ? b : a.ajaxSettings).mode ? (d[e] && d[e].abort(), d[e] = c.apply(this, arguments)) : c.apply(this, arguments)
        }
    }
})(jQuery);
(function(a) {
    !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && a.each({
        focus: "focusin",
        blur: "focusout"
    }, function(d, c) {
        function b(b) {
            b = a.event.fix(b);
            b.type = c;
            return a.event.handle.call(this, b)
        }
        a.event.special[c] = {
            setup: function() {
                this.addEventListener(d, b, !0)
            },
            teardown: function() {
                this.removeEventListener(d, b, !0)
            },
            handler: function(b) {
                arguments[0] = a.event.fix(b);
                arguments[0].type = c;
                return a.event.handle.apply(this, arguments)
            }
        }
    });
    a.extend(a.fn, {
        validateDelegate: function(d,
            c, b) {
            return this.bind(c, function(c) {
                var g = a(c.target);
                if (g.is(d)) return b.apply(g, arguments)
            })
        }
    })
})(jQuery);
(function(a, d, c) {
    function b(b, c, e) {
        b = d.createElement(b);
        c && (b.id = "cbox" + c);
        e && (b.style.cssText = e);
        return a(b)
    }

    function e() {
        return c.innerHeight ? c.innerHeight : a(c).height()
    }

    function g(a) {
        var b = K.length;
        a = (Y + a) % b;
        return 0 > a ? b + a : a
    }

    function h(a, b) {
        return Math.round((/%/.test(a) ? ("x" === b ? ba.width() : e()) / 100 : 1) * parseInt(a, 10))
    }

    function k(a, b) {
        return a.retinaUrl && 1 < c.devicePixelRatio ? b.replace(a.photoRegex, a.retinaSuffix) : b
    }

    function m(a) {
        "contains" in t[0] && !t[0].contains(a.target) && (a.stopPropagation(),
            t.focus())
    }

    function p() {
        var b, c = a.data(Z, "colorbox");
        null == c ? (q = a.extend({}, C), console && console.log && console.log("Error: cboxElement missing settings object")) : q = a.extend({}, c);
        for (b in q) a.isFunction(q[b]) && "on" !== b.slice(0, 2) && (q[b] = q[b].call(Z));
        q.rel = q.rel || Z.rel || a(Z).data("rel") || "nofollow";
        q.href = q.href || a(Z).attr("href");
        q.title = q.title || Z.title;
        "string" === typeof q.href && (q.href = a.trim(q.href))
    }

    function r(b, c) {
        a(d).trigger(b);
        M.trigger(b);
        a.isFunction(c) && c.call(Z)
    }

    function z() {
        var a, b, c,
            e, d;
        q.slideshow && K[1] ? (b = function() {
            clearTimeout(a)
        }, c = function() {
            if (q.loop || K[Y + 1]) a = setTimeout(X.next, q.slideshowSpeed)
        }, e = function() {
            J.html(q.slideshowStop).unbind("click.cbox").one("click.cbox", d);
            M.bind("cbox_complete", c).bind("cbox_load", b).bind("cbox_cleanup", d);
            t.removeClass("cboxSlideshow_off").addClass("cboxSlideshow_on")
        }, d = function() {
            b();
            M.unbind("cbox_complete", c).unbind("cbox_load", b).unbind("cbox_cleanup", d);
            J.html(q.slideshowStart).unbind("click.cbox").one("click.cbox", function() {
                X.next();
                e()
            });
            t.removeClass("cboxSlideshow_on").addClass("cboxSlideshow_off")
        }, q.slideshowAuto ? e() : d()) : t.removeClass("cboxSlideshow_off cboxSlideshow_on")
    }

    function v(c) {
        if (!la) {
            Z = c;
            p();
            K = a(Z);
            Y = 0;
            "nofollow" !== q.rel && (K = a(".cboxElement").filter(function() {
                var b = a.data(this, "colorbox"),
                    c;
                b && (c = a(this).data("rel") || b.rel || this.rel);
                return c === q.rel
            }), Y = K.index(Z), -1 === Y && (K = K.add(Z), Y = K.length - 1));
            B.css({
                opacity: parseFloat(q.opacity),
                cursor: q.overlayClose ? "pointer" : "auto",
                visibility: "visible"
            }).show();
            E && t.add(B).removeClass(E);
            q.className && t.add(B).addClass(q.className);
            E = q.className;
            q.closeButton && x.html(q.close).show();
            if (!ea && (ea = pa = !0, t.css({
                        visibility: "hidden",
                        display: "block"
                    }), R = b("div", "LoadedContent", "width:0; height:0; overflow:hidden").appendTo(G), L = y.height() + W.height() + G.outerHeight(!0) - G.height(), da = H.width() + O.width() + G.outerWidth(!0) - G.width(), T = R.outerHeight(!0), aa = R.outerWidth(!0), q.w = h(q.initialWidth, "x"), q.h = h(q.initialHeight, "y"), X.position(), z(), r("cbox_open", q.onOpen), S.add(u).hide(), t.focus(), q.trapFocus &&
                    d.addEventListener && (d.addEventListener("focus", m, !0), M.one("cbox_closed", function() {
                        d.removeEventListener("focus", m, !0)
                    })), q.returnFocus)) M.one("cbox_closed", function() {
                a(Z).focus()
            });
            w()
        }
    }

    function A() {
        !t && d.body && (ya = !1, ba = a(c), t = b("div").attr({
            id: "colorbox",
            "class": !1 === a.support.opacity ? "cboxIE" : "",
            role: "dialog",
            tabindex: "-1"
        }).hide(), B = b("div", "Overlay").hide(), ga = a([b("div", "LoadingOverlay")[0], b("div", "LoadingGraphic")[0]]), F = b("div", "Wrapper"), G = b("div", "Content").append(u = b("div", "Title"),
            Q = b("div", "Current"), N = a('\x3cbutton type\x3d"button"/\x3e').attr({
                id: "cboxPrevious"
            }), V = a('\x3cbutton type\x3d"button"/\x3e').attr({
                id: "cboxNext"
            }), J = b("button", "Slideshow"), ga, x = a('\x3cbutton type\x3d"button" style\x3d"display:none"/\x3e').attr({
                id: "cboxClose"
            })), F.append(b("div").append(b("div", "TopLeft"), y = b("div", "TopCenter"), b("div", "TopRight")), b("div", !1, "clear:left").append(H = b("div", "MiddleLeft"), G, O = b("div", "MiddleRight")), b("div", !1, "clear:left").append(b("div", "BottomLeft"), W = b("div",
            "BottomCenter"), b("div", "BottomRight"))).find("div div").css({
            "float": "left"
        }), fa = b("div", !1, "position:absolute; width:9999px; visibility:hidden; display:none"), S = V.add(N).add(Q).add(J), a(d.body).append(B, t.append(F, fa)))
    }

    function n() {
        function b(a) {
            1 < a.which || a.shiftKey || a.altKey || a.metaKey || a.ctrlKey || (a.preventDefault(), v(this))
        }
        if (t) {
            if (!ya)
                if (ya = !0, V.click(function() {
                        X.next()
                    }), N.click(function() {
                        X.prev()
                    }), x.click(function() {
                        X.close()
                    }), B.click(function() {
                        q.overlayClose && X.close()
                    }), a(d).bind("keydown.cbox",
                        function(a) {
                            var b = a.keyCode;
                            ea && q.escKey && 27 === b && (a.preventDefault(), X.close());
                            ea && q.arrowKey && K[1] && !a.altKey && (37 === b ? (a.preventDefault(), N.click()) : 39 === b && (a.preventDefault(), V.click()))
                        }), a.isFunction(a.fn.on)) a(d).on("click.cbox", ".cboxElement", b);
                else a(".cboxElement").live("click.cbox", b);
            return !0
        }
        return !1
    }

    function w() {
        var e, g, t = X.prep,
            m, n = ++f;
        pa = !0;
        P = !1;
        Z = K[Y];
        p();
        r("cbox_purge");
        r("cbox_load", q.onLoad);
        q.h = q.height ? h(q.height, "y") - T - L : q.innerHeight && h(q.innerHeight, "y");
        q.w = q.width ? h(q.width,
            "x") - aa - da : q.innerWidth && h(q.innerWidth, "x");
        q.mw = q.w;
        q.mh = q.h;
        q.maxWidth && (q.mw = h(q.maxWidth, "x") - aa - da, q.mw = q.w && q.w < q.mw ? q.w : q.mw);
        q.maxHeight && (q.mh = h(q.maxHeight, "y") - T - L, q.mh = q.h && q.h < q.mh ? q.h : q.mh);
        e = q.href;
        ka = setTimeout(function() {
            ga.show()
        }, 100);
        q.inline ? (m = b("div").hide().insertBefore(a(e)[0]), M.one("cbox_purge", function() {
            m.replaceWith(R.children())
        }), t(a(e))) : q.iframe ? t(" ") : q.html ? t(q.html) : q.photo || q.photoRegex.test(e) ? (e = k(q, e), P = d.createElement("img"), a(P).addClass("cboxPhoto").bind("error",
            function() {
                q.title = !1;
                t(b("div", "Error").html(q.imgError))
            }).one("load", function() {
            var b;
            n === f && (P.alt = a(Z).attr("alt") || a(Z).attr("data-alt") || "", q.retinaImage && 1 < c.devicePixelRatio && (P.height /= c.devicePixelRatio, P.width /= c.devicePixelRatio), q.scalePhotos && (g = function() {
                    P.height -= P.height * b;
                    P.width -= P.width * b
                }, q.mw && P.width > q.mw && (b = (P.width - q.mw) / P.width, g()), q.mh && P.height > q.mh && (b = (P.height - q.mh) / P.height, g())), q.h && (P.style.marginTop = Math.max(q.mh - P.height, 0) / 2 + "px"), K[1] && (q.loop || K[Y + 1]) &&
                (P.style.cursor = "pointer", P.onclick = function() {
                    X.next()
                }), P.style.width = P.width + "px", P.style.height = P.height + "px", setTimeout(function() {
                    t(P)
                }, 1))
        }), setTimeout(function() {
            P.src = e
        }, 1)) : e && fa.load(e, q.data, function(c, e) {
            n === f && t("error" === e ? b("div", "Error").html(q.xhrError) : a(this).contents())
        })
    }
    var C = {
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            inline: !1,
            html: !1,
            iframe: !1,
            fastIframe: !0,
            photo: !1,
            href: !1,
            title: !1,
            rel: !1,
            opacity: .9,
            preloading: !0,
            className: !1,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            open: !1,
            returnFocus: !0,
            trapFocus: !0,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            closeButton: !0,
            data: void 0
        },
        B, t, F, G, y, H, O, W, K, ba, R, fa, ga, u, Q, J, V, N, x, S, M = a("\x3ca/\x3e"),
        q, L, da, T, aa, Z, Y, P, ea, pa, la, ka, X, E, f = 0,
        ya;
    a.colorbox || (a(A), X = a.fn.colorbox = a.colorbox = function(b, c) {
        var e = this;
        b = b || {};
        A();
        if (n()) {
            if (a.isFunction(e)) e = a("\x3ca/\x3e"), b.open = !0;
            else if (!e[0]) return e;
            c && (b.onComplete = c);
            e.each(function() {
                a.data(this, "colorbox", a.extend({},
                    a.data(this, "colorbox") || C, b))
            }).addClass("cboxElement");
            (a.isFunction(b.open) && b.open.call(e) || b.open) && v(e[0])
        }
        return e
    }, X.position = function(a, b) {
        function c(a) {
            y[0].style.width = W[0].style.width = G[0].style.width = parseInt(a.style.width, 10) - da + "px";
            G[0].style.height = H[0].style.height = O[0].style.height = parseInt(a.style.height, 10) - L + "px"
        }
        var d, g = d = 0,
            f = t.offset(),
            k, m;
        ba.unbind("resize.cbox");
        t.css({
            top: -9E4,
            left: -9E4
        });
        k = ba.scrollTop();
        m = ba.scrollLeft();
        q.fixed ? (f.top -= k, f.left -= m, t.css({
                position: "fixed"
            })) :
            (d = k, g = m, t.css({
                position: "absolute"
            }));
        g = !1 !== q.right ? g + Math.max(ba.width() - q.w - aa - da - h(q.right, "x"), 0) : !1 !== q.left ? g + h(q.left, "x") : g + Math.round(Math.max(ba.width() - q.w - aa - da, 0) / 2);
        d = !1 !== q.bottom ? d + Math.max(e() - q.h - T - L - h(q.bottom, "y"), 0) : !1 !== q.top ? d + h(q.top, "y") : d + Math.round(Math.max(e() - q.h - T - L, 0) / 2);
        t.css({
            top: f.top,
            left: f.left,
            visibility: "visible"
        });
        a = t.width() === q.w + aa && t.height() === q.h + T ? 0 : a || 0;
        F[0].style.width = F[0].style.height = "9999px";
        d = {
            width: q.w + aa + da,
            height: q.h + T + L,
            top: d,
            left: g
        };
        0 ===
            a && t.css(d);
        t.dequeue().animate(d, {
            duration: a,
            complete: function() {
                c(this);
                pa = !1;
                F[0].style.width = q.w + aa + da + "px";
                F[0].style.height = q.h + T + L + "px";
                q.reposition && setTimeout(function() {
                    ba.bind("resize.cbox", X.position)
                }, 1);
                b && b()
            },
            step: function() {
                c(this)
            }
        })
    }, X.resize = function(a) {
        var b;
        ea && (a = a || {}, a.width && (q.w = h(a.width, "x") - aa - da), a.innerWidth && (q.w = h(a.innerWidth, "x")), R.css({
            width: q.w
        }), a.height && (q.h = h(a.height, "y") - T - L), a.innerHeight && (q.h = h(a.innerHeight, "y")), a.innerHeight || a.height || (b = R.scrollTop(),
            R.css({
                height: "auto"
            }), q.h = R.height()), R.css({
            height: q.h
        }), b && R.scrollTop(b), X.position("none" === q.transition ? 0 : q.speed))
    }, X.prep = function(c) {
        function e() {
            q.w = q.w || R.width();
            q.w = q.mw && q.mw < q.w ? q.mw : q.w;
            return q.w
        }

        function f() {
            q.h = q.h || R.height();
            q.h = q.mh && q.mh < q.h ? q.mh : q.h;
            return q.h
        }
        if (ea) {
            var h, m = "none" === q.transition ? 0 : q.speed;
            R.empty().remove();
            R = b("div", "LoadedContent").append(c);
            R.hide().appendTo(fa.show()).css({
                width: e(),
                overflow: q.scrolling ? "auto" : "hidden"
            }).css({
                height: f()
            }).prependTo(G);
            fa.hide();
            a(P).css({
                "float": "none"
            });
            h = function() {
                function c() {
                    !1 === a.support.opacity && t[0].style.removeAttribute("filter")
                }
                var e = K.length,
                    f, h;
                ea && (h = function() {
                    clearTimeout(ka);
                    ga.hide();
                    r("cbox_complete", q.onComplete)
                }, u.html(q.title).add(R).show(), 1 < e ? ("string" === typeof q.current && Q.html(q.current.replace("{current}", Y + 1).replace("{total}", e)).show(), V[q.loop || Y < e - 1 ? "show" : "hide"]().html(q.next), N[q.loop || Y ? "show" : "hide"]().html(q.previous), q.slideshow && J.show(), q.preloading && a.each([g(-1), g(1)],
                    function() {
                        var b, c;
                        c = K[this];
                        var e = a.data(c, "colorbox");
                        e && e.href ? (b = e.href, a.isFunction(b) && (b = b.call(c))) : b = a(c).attr("href");
                        b && (e.photo || e.photoRegex.test(b)) && (b = k(e, b), c = d.createElement("img"), c.src = b)
                    })) : S.hide(), q.iframe ? (f = b("iframe")[0], "frameBorder" in f && (f.frameBorder = 0), "allowTransparency" in f && (f.allowTransparency = "true"), q.scrolling || (f.scrolling = "no"), a(f).attr({
                    src: q.href,
                    name: (new Date).getTime(),
                    "class": "cboxIframe",
                    allowFullScreen: !0,
                    webkitAllowFullScreen: !0,
                    mozallowfullscreen: !0
                }).one("load",
                    h).appendTo(R), M.one("cbox_purge", function() {
                    f.src = "//about:blank"
                }), q.fastIframe && a(f).trigger("load")) : h(), "fade" === q.transition ? t.fadeTo(m, 1, c) : c())
            };
            "fade" === q.transition ? t.fadeTo(m, 0, function() {
                X.position(0, h)
            }) : X.position(m, h)
        }
    }, X.next = function() {
        !pa && K[1] && (q.loop || K[Y + 1]) && (Y = g(1), v(K[Y]))
    }, X.prev = function() {
        !pa && K[1] && (q.loop || Y) && (Y = g(-1), v(K[Y]))
    }, X.close = function() {
        ea && !la && (la = !0, ea = !1, r("cbox_cleanup", q.onCleanup), ba.unbind(".cbox"), B.fadeTo(q.fadeOut || 0, 0), t.stop().fadeTo(q.fadeOut ||
            0, 0,
            function() {
                t.add(B).css({
                    opacity: 1,
                    cursor: "auto"
                }).hide();
                r("cbox_purge");
                R.empty().remove();
                setTimeout(function() {
                    la = !1;
                    r("cbox_closed", q.onClosed)
                }, 1)
            }))
    }, X.remove = function() {
        t && (t.stop(), a.colorbox.close(), t.stop().remove(), B.remove(), la = !1, t = null, a(".cboxElement").removeData("colorbox").removeClass("cboxElement"), a(d).unbind("click.cbox"))
    }, X.element = function() {
        return a(Z)
    }, X.settings = C)
})(jQuery, document, window);
var _bindeni18n = {
    "default": {
        "detailedSearch.selectPrevTagCategory": '\x3cspan style\x3d"font-weight: bold;"\x3e{0}\x3c/span\x3e listesi i\u00e7in \u00f6nce \x3cspan style\x3d"font-weight: bold;"\x3e{1}\x3c/span\x3e se\u00e7melisiniz.'
    },
    en: {
        "auto360.dashboard.sell.menu.sellingGuide": "Car Selling Guide",
        "register.form.corporate.address.tooltip": "Firman\u0131z\u0131n bulundu\u011fu adres detay\u0131n\u0131 giriniz, taraf\u0131m\u0131zdan g\u00f6nderilecek her t\u00fcrl\u00fc evrak bu adrese g\u00f6nderilecektir.",
        passwordNotMatch: "Your password does not match with its repetition.",
        "register.form.registerUserNamePolicy": "Belirtmi\u015f oldu\u011funuz kullan\u0131c\u0131 ad\u0131 sahibinden.com \u00fcyelik kurallar\u0131na uymamaktad\u0131r. L\u00fctfen kullan\u0131c\u0131 ad\u0131n\u0131z\u0131 g\u00fcncelleyiniz.",
        "location.pleaseSelectQuarter": "Select",
        "testimonials.sharepath": "/ajax/share-story",
        "mobilePayment.smsCodeNotVerified.title": "G\u00fcncelim sat\u0131n almak i\u00e7in Mobil \u00d6deme i\u015flemine onay vermediniz",
        "search.inMapSearch.mapControl.searchByDrawingInfo": "You can \x3cstrong\x3epinpoint any area on the map\x3c/strong\x3e to see relevant ads.",
        "register.form.specialChar": "\u00d6zel karakter (!,? vb) ve rakam (1,2,3) kullan\u0131lamaz.",
        "month.nov": "November",
        "register.password.hint.1num": "At least 1 number",
        "paymentPage.error.city": "L\u00fctfen il se\u00e7in.",
        "loginForce.info.create.account": "Please sign in to access sahibinden.com. Sign up for free if you do not have an account",
        "paymentPage.error.firstName.minlength": "Ad alan\u0131 en az 2 karakter olmal\u0131d\u0131r.",
        "category.sublist.moreusedProduct": "Show All Used Products",
        "mobile.authentication.mobileError": "Format of your phone number is incorrect.",
        "register.surname.required": "Must contain at least 2 alphabets",
        "month.aug": "August",
        "loginForce.informUsForm.describeCaseInput": "Describe your case",
        "search.results.noMatches": 'No results were found in your \x3ch1\x3e"{0}"\x3c/h1\x3e search.',
        "register.form.gsmOperatorRequired": "Operat\u00f6r alan\u0131n\u0131 bo\u015f b\u0131rakmay\u0131n.",
        "classified.favorite.error.listEmpty": "Favori listeniz yok, yeni liste olu\u015fturun.",
        "mobilePayment.smsCodeFiled.defaultMessage": "\u015eu anda bu i\u015flem ger\u00e7ekle\u015ftirilemiyor. L\u00fctfen daha sonra tekrar deneyin.",
        "register.iban.number.required": "Enter your IBAN number.",
        "loginForce.info.bold.text": "You are trying to access from outside of Turkey",
        "register.form.nameShort": "Ad\u0131n\u0131z en az 2 harften olu\u015fmal\u0131d\u0131r.",
        "auto360.dashboard.buy.href.buyingGuide": "https://www.sahibinden.com/auto360/car-buying-guide",
        "testimonials.dialog.sendtext": "Share My Story",
        "paymentPage.error.phone": "L\u00fctfen telefon numaras\u0131 girin",
        "poi.category.other": "Other",
        "paymentPage.error.savedCvc": "L\u00fctfen g\u00fcvenlik kodu girin. Bu bilgi bankan\u0131z taraf\u0131ndan istenmektedir.",
        "search.inMapSearch.classifiedList.orderByDateDesc": "Descending by date",
        "register.form.securityCode": "G\u00fcvenlik kodu ile girdi\u011finiz karakterler uyu\u015fmuyor.",
        "search.inMapSearch.tabMenu.filters": "Filters",
        "register.form.corporate.type": "\u0130\u015fletme T\u00fcr\u00fc",
        "location.allDistricts": "All Districts",
        "emailActivation.error.notEqual": "Please enter a different e-mail address.",
        "register.form.surnameShort": "Soyad\u0131n\u0131z en az 2 harften olu\u015fmal\u0131d\u0131r.",
        linkDeliveryOptionsError: "\u015eifre de\u011fi\u015fikli\u011finiz i\u00e7in bir y\u00f6ntem se\u00e7in.",
        smsVerificationCodeError: "Onay kodu 6 karakterden olu\u015fmal\u0131d\u0131r.",
        "register.invalid.iban.number.required": "Ge\u00e7ersiz bir IBAN numaras\u0131 girdiniz. L\u00fctfen bilgilerin do\u011frulu\u011funu kontrol ederek tekrar deneyiniz.",
        "register.form.corporate.tckn.tooltip": "11 haneli TC kimlik numaran\u0131z\u0131 giriniz.",
        "search.searchByKeyword.collapseAllStores": "Collapse All Stores",
        "creditOffer.validation.vehicle.landing.loanAmount.error.empty": "Kredi Tutar\u0131 girin.",
        "register.form.selectCountry": "\u00dclke alan\u0131n\u0131 bo\u015f b\u0131rakmay\u0131n.",
        "store.validation.image.upload.mimetype": "Ekleyece\u011finiz dosya jpeg, gif veya png format\u0131nda olmal\u0131d\u0131r.",
        "register.form.isEmailEmpty": "E-posta adresinizi giriniz.",
        "emailActivation.hardbounce.EMAIL_WAITING_ACTIVATION.error": "There is a request for an email change by another user regarding this email.",
        "classified.favorite.error.folderOwnerClassifiedFavoriteLimitExceeded": "Favori liste sahibinin limiti doldu\u011fu i\u00e7in bu listeye favori ilan ekleyemezsiniz.",
        "brandNewCar.searchFilter.validation.gear": "Vites se\u00e7in.",
        "emailActivation.error.newEmailChangeAndResend": "Please enter an e-mail address.",
        "paymentPage.error.expiredDate": "L\u00fctfen ge\u00e7erli son kullanma tarihi girin",
        "emailActivation.hardbounce.EMAIL_IN_USE.error": "This email is used by another member.",
        "register.form.corporate.town": "\u0130l\u00e7e",
        "search.detailedSearch.multipleCategorySelection.showSelection": "Show",
        "expertise.map.post.url": "/auto360/auto-expertise/expertise-companies-and-packages",
        "register.form.signupFormRightText": "sahibinden.com \u00fcyeli\u011finiz varsa a\u015fa\u011f\u0131daki butona t\u0131klayarak \u00fcye giri\u015fi yapabilirsiniz.",
        "creditOffer.validation.vehicle.landing.maturity.error": "Vade se\u00e7in.",
        "search.inMapSearch.mapControl.infoOfNeighbourhood": "Info of Neighbourhood",
        "search.searchByKeyword.closeAll": "Close all",
        "classifiedComparison.classifiedExists": "Classified is already in your list.",
        "testimonials.form.namesurname": "Name Surname",
        "classifiedComparison.canNotRemoveLessThanOne": "At least one classified is required to make a comparison",
        "mobile.authentication.alreadyVerified": "You are mobile phone verified by this mobile phone",
        "search.mapSearchFilter.showOtherSelections": "Show Other Selections",
        "search.inMapSearch.tooltip.classifiedListCondition": "Please, zoom in the map in order to see ads list.",
        "register.form.usernameContainsSSN": "Kullan\u0131c\u0131 ad\u0131n\u0131z formata uygun de\u011fil.",
        "testimonials.share.readbutton": "Read The Stories",
        "mobilePayment.eula.title": "G\u00fcncelim Dopingi Kullan\u0131m Ko\u015fullar\u0131",
        "search.detailedSearch.multipleCategorySelection.select": "Select",
        "oto360.dashboard.sell.menu.sellingGuide": "Car Selling Guide",
        "auto360.dashboard.buy.href.carComparison": "https://www.sahibinden.com/auto360/brand-new-car/car-compare",
        "search.results.short.town": "town",
        "vehiclePriceEvaluation.km.placeholder": "Enter Kilometer",
        "validation.failed.similarIdNumber": "Daha \u00f6nce girmi\u015f oldu\u011funuz TC kimlik numaras\u0131ndan farkl\u0131 bir numara girmeniz gerekmektedir.",
        "vehiclePriceEvaluation.breadcrumb.auto.desktop": "Vehicle Type Selection",
        "search.mapSearchFilter.noSelected": "You can see your selected filters in this area.",
        "projects.message.error": "Please fill message field.",
        "search.mapSearchFilter.saveAsToFavorites": "Save As Favourite Search",
        "paymentPage.error.aggrementMarketPlaceMessage": "L\u00fctfen \u00f6deme kurulu\u015f\u009fu \u00e7er\u00e7eve s\u00f6zle\u015f\u009fmesini onaylay\u0131n",
        "oto360.dashboard.buy.href.carComparison": "https://www.sahibinden.com/auto360/brand-new-car/compare",
        "poi.category.religious_facility": "Religious Facility",
        "paymentPage.error.quarter": "L\u00fctfen mahalle se\u00e7in.",
        "search.mapSearchFilter.hideOtherSelections": "Hide Other Selections",
        "search.location.maxLocations": "You can select at most 5 locations",
        "mobilePayment.validation.txtGsmNumber": "L\u00fctfen cep telefonu numaran\u0131z\u0131 giriniz.",
        "classifiedcomparator.compareList.remove": "Clear List",
        "register.form.corporate.expertise.combo": "Ekspertiz",
        "common.apartmentComplex": "All Apartment Complexes",
        "register.form.corporate.location.show": "Konumumu G\u00f6ster",
        "validation.failed.idNumber": "L\u00fctfen ge\u00e7erli bir T.C. kimlik numaras\u0131 girin",
        "homepage.categories.new": "new",
        "paymentPage.text.creditCardPaymentButton": "\u00d6demeyi Tamamla",
        "register.form.corporate.taxNumber.tooltip": "Ticari unvan\u0131n\u0131za ait 10 haneli vergi numaran\u0131z\u0131 giriniz.",
        "register.form.corporate.location.subtitle": "Adres Detay\u0131n\u0131 girmeniz durumunda firman\u0131z\u0131n konum sorgulamas\u0131n\u0131 yapabilirsiniz.",
        "registerSubUser.eula.required": "You must accept the Membership Agreement and Privacy Policy",
        "category.moreView": "Show all",
        "register.surname.required.max2surname": "Surname can not be longer than two words",
        "classified.detail.virtualNumber.label": "\x3cspan\x3e\x26nbsp;(cell)\x3c/span\x3e",
        "paymentPage.error.addressValidationMessage4PaymentSubmit": "Please check your address information.",
        "classifiedcomparator.preview.action": "Add to Comparison List",
        "search.inMapSearch.mapControl.showBoundariesRegions": "Show Areas",
        "search.inMapSearch.classifiedList.advancedOrder": "Best match",
        "creditOffer.validation.vehicle.landing.loanAmount.error.minVal": "En az {0} TL girin.",
        "search.inMapSearch.mapControl.map": "Map",
        "vehiclePriceEvaluation.km": "Kilometer",
        "classifiedcomparator.preview.content": "Would you like to add this classified to comparison list ?",
        "classified.disputeDescription.placeholder": "Please write details of your complaint here, if any...",
        "register.form.taxNumberExists": "Bu Vergi No ile olu\u015fturulmu\u015f farkl\u0131 bir hesap bulunmaktadir.",
        "common.city": "City",
        "location.pleaseSelectTaxOffice": "Select",
        "search.realEstate.time": "Time",
        "paymentPage.error.aggrementMessage": "L\u00fctfen \u00d6n Bilgilendirme Formunu ve Mesafeli S\u00f6zle\u015fmeyi kabul edin",
        "location.pleaseSelectTown": "Select",
        "paymentPage.error.lastName.single": "En fazla bir adet soyad kullanabilirsiniz.",
        "loginForce.info.selectedLanguage": "EN",
        "loginForce.informUsForm.submit": "Submit",
        "register.form.corporate.location": "Konum",
        "number.thousandSeparator": ",",
        "corporate.contact": "Contact Us",
        "poi.category.transport": "Transportation",
        "register.password.hint.1alph": "At least 1 letter",
        smsVerificationCodeServiceErrorGlobalLimitReached: "Onay kodu hakk\u0131n\u0131z\u0131 doldurdunuz. 24 saat sonra tekrar deneyiniz.",
        "location.allQuarters": "All Quarters",
        "register.form.isSecurePassword": "\u015eifreniz harf ve rakam i\u00e7ermelidir.",
        "mobile.authentication.idNumber.minlength": "Your ID number must be at least 11 digits.",
        "payment.labels.PERSONAL": "Personal",
        passwordContainsUsernameEmail: "Your password cannot contain username or email.",
        "search.realEstate.roomCount": "Room Count",
        "payment.labels.CORPORATE": "Corporate",
        "testimonials.title": "Share My Story",
        "loginForce.informUsForm.surnameInput": "Surname",
        "register.form.corporate.expertise": "Faaliyet Alan\u0131n\u0131z",
        "register.password.required": "Your password must contain at least 8 alphanumeric characters",
        "vehiclePriceEvaluation.error.modelNotFound": "There is not enough data to calculate your vehicle's price",
        "search.detailedSearch.multipleCategorySelection.hideSelection": "Hide",
        "header.proapp.summary": "Ofisim \u00d6zet ",
        "depositPage.error.sellerDeal": "L\u00fctfen sat\u0131c\u0131yla g\u00f6r\u00fc\u015ft\u00fc\u011f\u00fcn\u00fcz\u00fc onaylay\u0131n\u0131z.",
        other: "Other",
        "paymentPage.error.addressName": "L\u00fctfen adres tan\u0131m\u0131 girin.",
        "testimonials.share.button": "Share My Story",
        "paymentPage.error.addressName.length.max": "Adres tan\u0131m\u0131 en fazla 50 karakter olabilir.",
        "auto360.dashboard.buy.href.allCarComparison": "https://www.sahibinden.com/auto360/car-compare",
        "paymentPage.error.year": "L\u00fctfen y\u0131l se\u00e7in",
        "paymentPage.text.bkmPaymentButton": "\u00d6demeyi Tamamla",
        passwordRequired: "Please enter your password.",
        "testimonials.share.info": "Read success stories of members on selling their products at sahibinden.com \x3cbr /\x3e If you have succeed on selling your product at sahibinden.com, share your story with us.",
        "search.searchByKeyword.moreThanFiveProjects": "More than 5 Projects are found",
        usernameRequired: "Please enter your user name.",
        "search.inMapSearch.mapControl.searchByDrawing": "Search by Drawing",
        "register.form.cs.registerEmailExists": "An unknown error occurred.",
        "oto360.dashboard.buy.menu.buyingGuide": "Car Buying Guide",
        "register.form.nameLong": "Ad ve Soyad bilgisi en fazla 32 harften olu\u015fmal\u0131d\u0131r.",
        "loginForce.informUsForm.turkeyRadioValue": "Turkey",
        "register.password.hint.8chars": "At least 8 characters",
        "month.feb": "February",
        "loginForce.informUsForm.otherReasonRadioValue": "Other",
        "register.form.registerUserNameAvailable": "Kullan\u0131c\u0131 ad\u0131 uygundur.",
        "search.searchByKeyword.moreThanFiveStores": "More than 5 Stores are found",
        "search.inMapSearch.searchList.noAd": "No ad found that matches your search criteria.",
        "oto360.dashboard.buy.menu.carValuation": "Car Valuation",
        "register.form.unknown": "\u0130\u015flem ba\u015far\u0131s\u0131z.",
        "brandNewCar.searchFilter.validation.equipment": "Donan\u0131m tipi se\u00e7in.",
        passwordIsWeak: "Your password must be at least 8 characters and should include letters and digits.",
        "search.mapSearchFilter.clear": "Clear All",
        "loginForce.informUsForm.describeCase": "Message area must be filled.",
        "oto360.dashboard.buy.href.carExpertise": "https://www.sahibinden.com/oto-ekspertiz?viewmode\x3dresponsive",
        "search.includeDescriptions": "Include ad descriptions",
        "creditOffer.validation.vehicle.landing.carType.error": "Ara\u00e7 tipi se\u00e7in.",
        "auto360.dashboard.buy.menu.returnDeposite": "Return Deposit",
        "paymentPage.error.companyName": "L\u00fctfen firma ismi girin.",
        "month.sep": "September",
        "common.districtAndQuarter": "District / Quarter",
        "creditOffer.vehicle.landing.loanAmount.error": "Kredi Tutar\u0131 girin.",
        "search.inMapSearch.mapControl.noBoundaries": "Remove Boundaries",
        "mobile.authentication.idNumber.tckn": "Please enter a valid ID number.",
        passwordEmpty: "Please enter password.",
        "creditOffer.validation.vehicle.landing.loanAmount.error.maxVal": "En fazla {0} TL girin.",
        "register.captcha.required": "Please check the security code",
        "register.form.signupFormRightHeader": "sahibinden.com \u00fcyesiyim",
        "dailyOpportunityRefer.cargoType.BUYER_PAID": "Buyer Paid",
        "register.form.select": "Se\u00e7iniz",
        "classified.favorite.error.listExist": "Bu isimle bir listeniz var.",
        "validation.failed.taxNumber": "L\u00fctfen ge\u00e7erli bir vergi kimlik numaras\u0131 girin",
        "paymentPage.error.addressDetail": "L\u00fctfen adres girin.",
        "search.realEstate.choose": "Select",
        "search.inMapSearch.filter.more": "More",
        "register.form.reqMessage": "sahibinden.com'un g\u00f6nderece\u011fi bilgilendirme mesajlar\u0131n\u0131 ve tan\u0131t\u0131m ama\u00e7l\u0131 E-posta ve SMS\u2019lerini almay\u0131 kabul ediyorum.",
        "register.form.corporate.companyName": "Ticari \u00dcnvan",
        "projects.surname.error": "Please fill surname filed.",
        "oto360.dashboard.buy.href.damageInquiry": "https://www.sahibinden.com/hasar-sorgu",
        "sahibindex.selectCity": "City",
        "auto360.dashboard.sell.menu.carValuation": "Car Valuation",
        "poi.category.education": "Education",
        "paymentPage.error.creditCardNumber": "L\u00fctfen ge\u00e7erli bir kart numaras\u0131 girin",
        "search.realEstate.timeshare": "Timeshare",
        "paymentPage.error.lastName": "L\u00fctfen soyad\u0131n\u0131z\u0131 girin.",
        "auto360.dashboard.buy.menu.carValuation": "Car Valuation",
        "paymentPage.error.profileName": "L\u00fctfen kart\u0131n\u0131za bir isim verin.",
        "search.inMapSearch.mapControl.classifiedCountMessageMore": "Zoom in to see more ads.",
        "classifiedComparison.emptyList": "Your comparison list is empty.",
        "common.homePage": "Home Page",
        "brandNewCar.searchFilter.validation.year": "Y\u0131l se\u00e7imi yap\u0131n.",
        "loginForce.informUsForm.iAmInTurkeyRadioInput": "I am in Turkey",
        "oto360.dashboard.buy.menu.returnDeposite": "Return Deposit",
        "search.inMapSearch.searchList.mapPoint": "\x3cp\x3eThe exact location on the map can't be displayed because the creator of the ad requested us not to show it.\x3c/p\x3e",
        "search.realEstate.listSearch": "Show in List",
        "register.form.corporate.taxOffice": "Vergi Dairesi",
        "testimonials.form.story": "My Story",
        "brandNewCar.searchFilter.validation.packet": "Paket tipi se\u00e7in.",
        "location.allCountries": "All Countries",
        "auto360.dashboard.buy.href.damageInquiry": "https://www.sahibinden.com/oto360/hasar-sorgulama",
        "auto360.dashboard.buy.href.carExpertise": "https://www.sahibinden.com/oto360/oto-ekspertiz?viewmode\x3dresponsive",
        "register.form.corporate.taxNumber": "Vergi No",
        "projects.email.error": "Please fill email field.",
        "projects.captchaValue": "Security Code",
        "search.inMapSearch.searchList.doping": "If you want your ad to be on top of the other ads\x3cu\x3e click here\x3c/u\x3e.",
        "month.dec": "December",
        "testimonials.form.securitycode": "Security Code",
        "paymentPage.error.cvc.oneLine": "L\u00fctfen g\u00fcvenlik kodu girin",
        "register.form.registerEmailExists": "Belirtti\u011finiz adres kullan\u0131l\u0131yor veya sahibinden.com \u00fcyelik kurallar\u0131na uygun de\u011fil. Kullan\u0131labilir durumda bir e-posta giriniz.",
        "poi.category.apartment_complex": "Building Complex",
        "search.inMapSearch.mapControl.deleteDrawing": "Delete Drawing",
        "loginForce.info.translate": "T\u00fcrk\u00e7e",
        "search.results.short.city": "city",
        "quickTour.next": "Next",
        "loginForce.informUsForm.title": "Inform Us",
        "paymentPage.error.cardOwner": "L\u00fctfen kart \u00fczerinde yazan ismi girin",
        "mobilePayment.smsCodeFiled.title": "Mobil \u00d6deme i\u015fleminiz ger\u00e7ekle\u015ftirilemedi",
        "depositPage.error.priceError": "Girdi\u011finiz kapora tutar\u0131 X TL - Y TL aral\u0131\u011f\u0131nda olmal\u0131d\u0131r.",
        "classified.favorite.error.listMinlength": "En az 1 (bir) karakter girin.",
        "paymentPage.error.cvc": "L\u00fctfen g\u00fcvenlik \x3c/br\x3e kodu girin",
        "register.form.corporate.companyName.tooltip": "Ticaret Odas\u0131na kay\u0131tl\u0131, ticari faaliyetlerinizi y\u00fcr\u00fct\u00fcrken resmi kurumlarda kulland\u0131\u011f\u0131n\u0131z unvan\u0131n\u0131z\u0131 giriniz. Faturalar\u0131n\u0131z burada belirtece\u011finiz ticari unvan ad\u0131na d\u00fczenlenecektir.",
        "homepage.propertyValuation": "Real-estate appraisal",
        "register.form.noSpecialChars": "T\u00fcrk\u00e7e karakter (i,\u00e7,\u011f, vb.), \u00f6zel karakter (!,? vb.) ve bo\u015fluk kullan\u0131lamaz.",
        "classified.favorite.addedToFavorites": "\u0130lan \x3cstrong\x3e\x3c/strong\x3e Favori Listenize Eklendi",
        "poi.category.green_areas": "Green Fields",
        "auto360.dashboard.buy.menu.buyingGuide": "Car Buying Guide",
        "mobile.authentication.mobileTimesError": "Dear our user, please try to confirm your sahibinden.com subscription via your mobile 24 hours later.",
        "testimonials.share.infoclass": "share-story-info en",
        "common.town": "Town",
        "paymentPage.error.parisMarketPlaceMessage": "L\u00fctfen s\u00f6zle\u015fmeyi okuyup onaylay\u0131n.",
        "poi.category.cultural_facility": "Cultural Centers",
        "testimonials.emptytext": 'No stories found. \x3ca href\x3d"#" class\x3d"share-lb"\x3eClick here, be the first to share a story!\x3c/a\x3e',
        "register.email.required.turkish": "\u00e7, \u011f, \u0131, \u00f6, \u015f, \u00fc harfleri i\u00e7ermeyen e-posta girin.",
        "paymentPage.error.addressName.length.min": "L\u00fctfen adres tan\u0131m\u0131 giriniz.",
        "emailActivation.hardbounce.OTHER.error": "We are unable to proceed. Please try again.",
        "vehiclePriceEvaluation.estimateButton": "Show Value",
        "poi.category.medical": "Health",
        "search.inMapSearch.searchList.priceInfo": "\x26nbsp;TL\x3c/strong\x3e\x3cbr/\x3e starting from prices\x3c/p\x3e\x3c/a\x3e\x3c/li\x3e",
        "mobile.authentication.idNumber.required": "Please enter ID number.",
        "register.form.passwordEmpty": "\u015eifreniz en az 8 karakterden olu\u015fmal\u0131, harf ve rakam i\u00e7ermelidir.",
        "testimonials.dialog.success.title": "Thanks for sharing your story with us.",
        smsVerificationCodeServiceError: "Onay kodunu hatal\u0131 girdiniz. L\u00fctfen tekrar deneyiniz.",
        "projects.name.error": "Please fill name field.",
        "register.form.passwordContainsEmail": "\u015eifreniz, e-posta adresinizi veya kullan\u0131c\u0131 ad\u0131n\u0131z\u0131 i\u00e7ermemelidir.",
        "search.inMapSearch.filter.price": "Price",
        "emailActivation.hardbounce.DOESNT_MATCH_EMAIL_PATTERN.error": "You have entered an invalid e-mail address. Please check.",
        "register.form.corporate.mobile": "Cep Telefonunuz",
        "register.form.corporate.quarter": "Mahalle",
        "loginForce.informUsForm.emailInput": "E-mail Address",
        "oto360.dashboard.sell.menu.carValuation": "Car Valuation",
        "register.form.corporate.address": "Adres Detay\u0131",
        "brandNewCar.searchFilter.validation.bodyType": "Kasa se\u00e7in.",
        "search.searchByKeyword.showAllProjects": "Show All Projects",
        "register.email.required.mailna": "E-mail address you entered is in use or not in line with sahibinden.com membership rules. Please enter an available e-mail address.",
        "month.jun": "June",
        "brandNewCar.searchFilter.validation.brand": "Marka se\u00e7in.",
        "month.jul": "July",
        "classifiedComparison.couldNotDelete": "Classified can not be deleted from your list",
        "classifiedComparison.couldNotAdd": "Classified can not be added to your list",
        "store.validation.image.upload.invalid.dimension": "Ekleyece\u011finiz dosya \u00f6l\u00e7\u00fcleri 240x160 olmal\u0131d\u0131r.",
        "register.form.passwordLength": "Minimum 8 karakterden olu\u015fmal\u0131, harf ve rakam i\u00e7ermelidir.",
        "location.pleaseSelectCity": "Select",
        "classified.favorite.error.userClassifiedFavoriteLimitExceeded": "Favori ilan limitiniz doldu. Favorilerinize yeni ilan eklemek i\u00e7in mevcut favori ilanlar\u0131n\u0131zdan birka\u00e7\u0131n\u0131 silmelisiniz.",
        "mobile.authentication.validateError": "Confirmation code you entered is wrong.  Please try again.",
        "brandNewCar.searchFilter.validation.engine": "Motor se\u00e7in.",
        "register.form.corporate.city": "\u0130l",
        "auto360.dashboard.buy.menu.damageInquiry": "Damage Inquiry",
        "month.may": "May",
        "month.mar": "March",
        "loginForce.info.responsive.signIn": "Please sign in to access sahibinden.com",
        "location.allTowns": "All Towns",
        "mobile.authentication.ssnError": "Format of your ssn is incorrect.",
        "register.form.corporate.location.error": "L\u00fctfen Konum Giriniz.",
        "sahibindex.selectTown": "Town",
        "register.form.registerUserNameExists": "Belirtmi\u015f oldu\u011funuz kullan\u0131c\u0131 ad\u0131 kullan\u0131lmaktad\u0131r. L\u00fctfen kullan\u0131c\u0131 ad\u0131n\u0131z\u0131 g\u00fcncelleyiniz.",
        "register.password.weakPassword": "Please enter a more secure password",
        "mobilePayment.validation.rdCarriers": "L\u00fctfen bir operat\u00f6r se\u00e7iniz.",
        "auto360.dashboard.buy.menu.carComparison": "Car Comparison",
        "store.validation.image.upload.general": "Ma\u011faza logo hatas\u0131.",
        "oto360.dashboard.buy.menu.damageInquiry": "Damage Inquiry",
        "dailyOpportunityRefer.cargoType.FREE_OF_CHARGE": "Free Cargo",
        "register.form.signupFormRightLogIn": "Giri\u015f Yap",
        "register.form.idNumberExists": "Bu TC Kimlik No ile olu\u015fturulmu\u015f farkl\u0131 bir hesap bulunmaktadir.",
        "oto360.dashboard.sell.href.sellingGuide": "https://www.sahibinden.com/auto360/car-selling-guide",
        "classified.favorite.addToFavoriteList": "Ekleyece\u011fin Listeyi Se\u00e7",
        "search.inMapSearch.classifiedList.orderByPriceAsc": "Increasing by price",
        "search.selectAll": "Select All",
        "search.inMapSearch.mapControl.showBoundariesTowns": "Show Districts",
        "register.name.required": "Must contain at least 2 alphabets",
        "paymentPage.error.lastNameAlphaOnly": "Ge\u00e7ersiz soyad.",
        "category.lessView": "Close",
        "month.oct": "October",
        "register.form.corporate.sector": "Faaliyet Alan\u0131n\u0131z",
        "register.global.password.error": "Please check your e-mail, username or password.",
        passwordLength: "Your password must be at least 8 characters and should include letters and digits.",
        "auto360.dashboard.sell.href.sellingGuide": "https://www.sahibinden.com/auto360/car-selling-guide",
        "register.form.passwordIsWeak": "G\u00fcvenli\u011finiz i\u00e7in tahmin edilmesi daha zor bir \u015fifre girin.",
        "paymentPage.error.date": "L\u00fctfen son kullanma tarihinizi girin",
        "paymentPage.error.firstName": "L\u00fctfen ad\u0131n\u0131z\u0131 girin.",
        "register.form.registerNativeAdEmailExists": "Bu e-posta hesab\u0131yla olu\u015fturulmu\u015f bir \u00fcyelik bulunmaktad\u0131r. L\u00fctfen ba\u015fka bir e-posta adresiyle \u00fcye olunuz.",
        "mobilePayment.validation.txtGsmNumber.minlength": "Cep telefonu numaran\u0131z 9 karakterden olu\u015fmal\u0131d\u0131r.",
        "mobilePayment.validation.cbEula": "Devam etmek i\u00e7in kullan\u0131m ko\u015fullar\u0131n\u0131 kabul etmeniz gerekmektedir.",
        "classifiedcomparator.delete.confirm": "Do you want to remove this classified from your comparison list ?",
        "paymentPage.error.lastName.minlength": "Soyad alan\u0131 en az 2 karakter olmal\u0131d\u0131r.",
        "sahibindex.selectQuarter": "Quarter",
        "vehiclePriceEvaluation.breadcrumb.auto": "Auto360 \x3e Car Valuation \x3e Vehicle Type Selection",
        "paymentPage.error.addressDetail.length.min": "Adres alan\u0131 en az 5 karakter olabilir.",
        "register.form.corporate.tckn": "TC Kimlik No",
        "search.inMapSearch.mapControl.cancel": "Cancel",
        "oto360.dashboard.sell.href.carValuation": "https://www.sahibinden.com/vehicle-price-evaluation/seller",
        "register.form.captchaEmpty": "G\u00fcvenlik kodu ile girdi\u011finiz karakterler uyu\u015fmuyor. Kontrol edip yeniden deneyin.",
        "paymentPage.error.firstNameAlphaOnly": "Ge\u00e7ersiz ad.",
        "classified.favorite.createNewFavoriteListName": "Listenize isim verin",
        "register.eula.corporate.required": "You must accept the Membership Agreement and Privacy Policy",
        "emailActivation.hardbounce.VERIFICATION_CODE_ERROR_LIMIT_REACHED.error": "The daily confirmation code error limit is expired, try again.",
        "classified.favorite.error.listServiceError": "\u0130\u015fleminiz yap\u0131lamad\u0131, l\u00fctfen tekrar deneyin.",
        "testimonials.form.email": "E-mail address",
        "search.searchByKeyword.expandAllProjects": "Expand All Projects",
        "search.searchByKeyword.showAll": "Show all",
        "loginForce.informUsForm.nameRequired": "Must contain at least 2 letters.",
        "register.surname.required.max1surname": "Please enter only one surname",
        "paymentPage.error.month": "L\u00fctfen ay se\u00e7in",
        "location.provideLocationKeyword": "Enter region, town, district or quarter",
        "testimonials.dialog.closetext": "Close",
        smsVerificationCodeServiceErrorLimitReached: "Onay kodunu \u00fcst \u00fcste hatal\u0131 girdiniz. 24 saat sonra tekrar deneyiniz.",
        "category.sublist.moreunusedProduct": "Show All Unused Products",
        "search.results.textSelectedAddresses": "{0} {1} selected",
        "oto360.dashboard.buy.href.buyingGuide": "https://www.sahibinden.com/auto360/car-buying-guide",
        "search.inMapSearch.mapControl.showBoundariesCities": "Show Provinces",
        smsVerificationCodeServiceErrorUnknown: "Bir hata olu\u015ftu, l\u00fctfen daha sonra tekrar deneyiniz.",
        "quickTour.close": "Close",
        "search.results.short.district": "district/quarter",
        "paymentPage.error.addressFormUserType": "Yaln\u0131zca bireysel adresiniz ile GeT \u00fcr\u00fcn\u00fc sat\u0131n alabilirsiniz; l\u00fctfen bireysel adresinizi se\u00e7in. Kay\u0131tl\u0131 bireysel adresiniz yok ise 'Yeni Adres Ekle'\u009d butonunu kullanabilirsiniz",
        "loginForce.informUsForm.nameInput": "Name",
        "loginForce.informUsForm.successText": "Thank you for informing us.",
        "register.form.passwordNotMatch": "\u015eifreniz tekrar\u0131 ile uyu\u015fmuyor.",
        "search.inMapSearch.mapControl.showBoundariesQuarters": "Show Quarters",
        "projects.phone.error": "Please fill phone field.",
        "mobilePayment.validation.txtGsmNumber.minlength.alternate": "Cep telefonu numaran\u0131z 11 karakterden olu\u015fmal\u0131d\u0131r.",
        "classifiedComparison.reachMaxClassified": "Maximum number of classified you can compare at the same time is {0}.",
        "oto360.dashboard.buy.menu.carExpertise": "Car Expertise",
        "register.form.registerEmailAvailable": "E-posta adresi uygundur.",
        "register.email.required": "Enter your e-mail address",
        "login.secure.url.prefix": "https://secure.sahibinden.com/login/?return_url\x3d",
        "paymentPage.error.taxNumber": "Vergi No alan\u0131n\u0131 bo\u015f\u009f ge\u00e7emezsiniz.",
        "loginForce.informUsForm.emailRequired": "E-mail address must be written.",
        "loginForce.informUsForm.failText": "Your request cannot be completed right now, try again later.",
        "paymentPage.error.taxNumberNotValid": "Vergi No do\u011fru de\u011fil.",
        "loginForce.info.inform.us": "please inform us",
        "register.form.userNameShort": "Kullan\u0131c\u0131 ad\u0131n\u0131z en az 6 en fazla 20 karakter olmal\u0131d\u0131r.",
        "search.inMapSearch.tabMenu.classifiedAds": "Ads",
        "store.validation.image.upload.maxfilesize": "Ekleyece\u011finiz dosya boyutu en fazla 2MB olmal\u0131d\u0131r.",
        "search.results.short.quarter": "district/quarter",
        "search.realEstate.floorCount": "Floor Count",
        "search.inMapSearch.tooltip.classifiedTabInfo": "You may check ads from this area.",
        "register.form.corporate.sector.combo": "Se\u00e7iniz",
        "emailActivation.hardbounce.VERIFICATION_CODE_GLOBAL_LIMIT_REACHED.error": "The daily confirmation code limit is expired, try again.",
        "classified.favorite.createNewFavoriteList": "Yeni Liste Olu\u015ftur",
        "loginForce.informUsForm.otherRadioInput": "Other",
        "register.form.updateEmailSame": "Mevcut e-posta adresinizden farkl\u0131 bir adres olmal\u0131.",
        "vehiclePriceEvaluation.breadcrumb.auto.head": "Auto360 \x3e Car Valuation",
        "loginForce.info.m.translate": "TR",
        "testimonials.shortdesc": "Share the story of your auction with millions of people",
        "oto360.dashboard.buy.href.carValuation": "https://www.sahibinden.com/vehicle-price-evaluation/buyer",
        "validation.failed.similarTaxNumber": "Daha \u00f6nce girmi\u015f oldu\u011funuz Vergi numaras\u0131ndan farkl\u0131 bir numara girmeniz gerekmektedir.",
        "classified.favorite.error.invalidFolderName": "Bu isimle bir liste olu\u015fturamazs\u0131n\u0131z.",
        "register.form.corporate.expertise.label1": "\u015eah\u0131s \u015eirketi",
        "register.form.userNameEmpty": "Kullan\u0131c\u0131 ad\u0131n\u0131z\u0131 girmediniz. Kullan\u0131c\u0131 ad\u0131n\u0131z T\u00fcrk\u00e7e karakterler ve bo\u015fluk i\u00e7ermemelidir.",
        "register.form.corporate.expertise.label2": "Limited veya Anonim \u015eirketi",
        "common.quarter": "Quarter",
        "location.allCities": "All Cities",
        "auto360.dashboard.buy.href.carValuation": "https://www.sahibinden.com/vehicle-price-evaluation/buyer",
        "search.inMapSearch.mapControl.mapView": "View",
        "poi.category.shopping": "Shopping",
        "search.inMapSearch.ad": "ad",
        "search.detailedSearch.multipleCategorySelection.emptyModel": "Add New Brand / Model",
        "search.searchByKeyword.expandAllStores": "Expand All Stores",
        "register.form.corporate.landPhone1": "Sabit Telefon 1",
        "register.form.endUserLicenceAgreementNotAccepted": "\u00dcye olmak i\u00e7in \u00dcyelik S\u00f6zle\u015fmesi Ko\u015fullar\u0131\u2019n\u0131 ve Gizlilik Politikas\u0131\u2019n\u0131 kabul etmeniz gerekmektedir.",
        "register.form.corporate.landPhone2": "Sabit Telefon 2",
        "mobilePayment.smsConfirmation.title": "numaral\u0131 telefonunuza onay mesaj\u0131 g\u00f6nderildi",
        "search.location.pleaseSelectCityFirst": "Plese select city first",
        "common.district": "District",
        "register.form.reEnterPassword": "\u015eifreniz e\u015fle\u015fmiyor.",
        "emailActivation.error.popup.title": "E-mail Change",
        "search.searchByKeyword.collapseAllProjects": "Collapse All Projects",
        "creditOffer.vehicle.landing.maturity.error": "Vade se\u00e7in.",
        "search.inMapSearch.searchList.filterByKeywords": "\x3cp\x3eFilter by keyword\x3c/p\x3e",
        "register.form.corporate.landPhone1.tooltip": "Firman\u0131za kay\u0131tl\u0131 sabit telefon numaran\u0131z\u0131 giriniz.",
        "brandNewCar.searchFilter.validation.model": "Model se\u00e7in.",
        "login.header.text": "Login",
        "loginForce.informUsForm.infoText": "Why do you think you shouldn't see this page?",
        "register.form.selectCity": "\u015eehir alan\u0131 bo\u015f b\u0131rak\u0131lamaz.",
        "register.eula.required": "You must accept the Membership Agreement and Privacy Policy",
        "auto360.dashboard.sell.href.carValuation": "https://www.sahibinden.com/auto360/vehicle-price-evaluation/seller",
        "search.inMapSearch.classifiedList.orderByDateAsc": "Ascending by date",
        "general.any": "Any",
        "register.form.specialCharSpace": "En fazla bir adet soyad kullanabilirsiniz.",
        "emailActivation.hardbounce.CROSS_VERIFICATION_INVALID_CODE.error": "You entered the confirmation code incorrectly. Please try again.",
        "register.form.corporate.agreement.link": '\x3ca href\x3d"/sozlesmeler/ek-7-magaza-kullanim-kurallari-43" rel\x3d"nofollow" target\x3d"_blank"\x3eMa\u011faza Kullan\u0131m Kurallar\u0131\x3c/a\x3e\'n\u0131 kabul ediyorum.',
        "paymentPage.error.installemntSelect": "L\u00fctfen taksit se\u00e7imi yap\u0131n",
        "location.pleaseSelectCountry": "Select",
        passwordIsSameWithLastPassword: "Your password must be different from your last password.",
        "month.apr": "April",
        "loginForce.informUsForm.surnameRequired": "Must contain at least 2 letters.",
        "quickTour.prev": "Previous",
        "loginForce.informUsForm.requestNumber": "Request Number:",
        "oto360.dashboard.buy.menu.carComparison": "Car Comparison",
        "paymentPage.error.idNumber": "L\u00fctfen TC Kimlik numaras\u0131 girin.",
        "register.form.userNameValid": "Kullan\u0131c\u0131 ad\u0131n\u0131z harf i\u00e7ermelidir.",
        "register.form.isEmailValid": "L\u00fctfen ge\u00e7erli bir e-posta adresi giriniz.",
        "register.form.corporate.location.pin": "Girmi\u015f oldu\u011funuz adrese g\u00f6re firman\u0131z\u0131n konumunu yakla\u015f\u0131k olarak i\u015faretledik. Pin'in yerini de\u011fi\u015ftirerek tam konumunuzu belirleyebilirsiniz.",
        "loginForce.info.message": "If you think you should not see this,",
        "search.deSelectAll": "Deselect All",
        "classified.favorite.saveNewFavoriteListButton": "Kaydet",
        "register.form.phoneRequired": "L\u00fctfen ge\u00e7erli bir telefon numaras\u0131 giriniz.",
        "search.inMapSearch.mapControl.classifiedCountMessage": 'Showing \x3cstrong class\x3d"visible-count-label"\x3e\x3c/strong\x3e ads \x3cspan class\x3d"total-count-container"\x3eout of \x3cstrong class\x3d"total-count-label"\x3e\x3c/strong\x3e ads\x3c/span\x3e for your \x3cstrong class\x3d"search-query-label"\x3e\x3c/strong\x3e search.',
        "classified.lastVisited.title": "Last Visited Ads",
        "month.jan": "January",
        "classifiedComparison.classifiedNotComparable": "Only classified with the same category are comparable. \x3cbr\x3e Please clear your list and create a new comparison list",
        "number.decimalSeparator": ".",
        "sahibindenSelect.defaultOptions.choose": "Select",
        "auto360.dashboard.buy.menu.carExpertise": "Car Expertise",
        "register.form.emailConfirmation": "E-posta adresleri birbiri ile uyu\u015fmuyor.",
        "search.inMapSearch.mapControl.mapFeatures": "Map Features",
        "classifiedComparison.classifiedNotFound": "Classified that you want to compare does not exist.",
        "paymentPage.error.taxOffice": "Vergi Dairesi alan\u0131n\u0131 bo\u015f\u009f ge\u00e7emezsiniz.",
        "search.searchByKeyword.showAllStores": "Show All Stores",
        "paymentPage.error.town": "L\u00fctfen il\u00e7e se\u00e7in.",
        "header.proapp.emlakOfisim": "M\u00fc\u015fteri Y\u00f6netimi",
        "emailActivation.crossVerification.minlength": "The approval code must consist of 6 digits.",
        "search.inMapSearch.searchList.search": "Find",
        "search.inMapSearch.mapControl.satellite": "Satellite",
        "search.inMapSearch.mapControl.locationSearch.placeHolder": "Search by Neighborhood or Quarter",
        "creditOffer.vehicle.landing.carType.error": "Ara\u00e7 tipi se\u00e7in.",
        "paymentPage.error.country": "L\u00fctfen \u00fclke se\u00e7in.",
        "search.inMapSearch.classifiedList.orderByPriceDesc": "Decreasing by price",
        "emailActivation.hardbounce.TOO_MANY_REQUESTS.error": "Daily e-mail change has expired, try again later.",
        "paymentPage.error.parisAgreementMessage": "L\u00fctfen s\u00f6zle\u015fmeleri okuyup onaylay\u0131n.",
        "projects.captcha.error": "Please fill security code.",
        "search.results.short.apartmentComplex": "apartment complex",
        "loginForce.info.responsive.create.account": "Sign up for free if you do not have an account",
        "search.inMapSearch.searchList.favoriteSearchAdd": "Favorite search saved.",
        "paymentPage.error.addressDetail.length.max": "Adres alan\u0131 en fazla 250 karakter olabilir."
    },
    tr: {
        "auto360.dashboard.sell.menu.sellingGuide": "Ara\u00e7 Sat\u0131\u015f Rehberi",
        "register.form.disposable.email": "G\u00fcvenilir olmayan servis sa\u011flay\u0131c\u0131lara ait e-posta adreslerinin kullan\u0131m\u0131na izin verilmemektedir. Farkl\u0131 bir e-posta adresi giriniz.",
        "register.form.corporate.address.tooltip": "Firman\u0131z\u0131n bulundu\u011fu adres detay\u0131n\u0131 giriniz, taraf\u0131m\u0131zdan g\u00f6nderilecek her t\u00fcrl\u00fc evrak bu adrese g\u00f6nderilecektir.",
        passwordNotMatch: "\u015eifreniz tekrar\u0131 ile uyu\u015fmuyor.",
        "register.form.registerUserNamePolicy": "Belirtmi\u015f oldu\u011funuz kullan\u0131c\u0131 ad\u0131 sahibinden.com \u00fcyelik kurallar\u0131na uymamaktad\u0131r. L\u00fctfen kullan\u0131c\u0131 ad\u0131n\u0131z\u0131 g\u00fcncelleyiniz.",
        "location.pleaseSelectQuarter": "Se\u00e7iniz",
        "testimonials.sharepath": "/ajax/hikayeni-paylas",
        "mobilePayment.smsCodeNotVerified.title": "G\u00fcncelim sat\u0131n almak i\u00e7in Mobil \u00d6deme i\u015flemine onay vermediniz",
        "search.inMapSearch.mapControl.searchByDrawingInfo": "Diledi\u011finiz b\u00f6lgedeki ilanlar\u0131 \x3cstrong\x3eharitada \u00e7izerek\x3c/strong\x3e arayabilirsiniz.",
        "register.form.specialChar": "\u00d6zel karakter (!,? vb) ve rakam (1,2,3) kullan\u0131lamaz.",
        "month.nov": "Kas\u0131m",
        "register.password.hint.1num": "En az 1 rakam",
        "paymentPage.error.city": "L\u00fctfen il se\u00e7in",
        "loginForce.info.create.account": "Hesab\u0131n\u0131z yoksa \u00fccretsiz \u00fcye olabilirsiniz",
        "paymentPage.error.firstName.minlength": "Ad alan\u0131 en az 2 karakter olmal\u0131d\u0131r",
        "category.sublist.moreusedProduct": "T\u00fcm \u0130kinci El \u00dcr\u00fcnleri G\u00f6ster",
        "mobile.authentication.mobileError": "Telefon numaras\u0131 format\u0131n\u0131z hatal\u0131d\u0131r.",
        "register.surname.required": "En az 2 harften olu\u015fmal\u0131d\u0131r.",
        "month.aug": "A\u011fustos",
        "loginForce.informUsForm.describeCaseInput": "Durumunuzu anlat\u0131n",
        "register.form.gsmOperatorRequired": "Operat\u00f6r alan\u0131n\u0131 bo\u015f b\u0131rakmay\u0131n.",
        "classified.favorite.error.listEmpty": "Favori listeniz yok, yeni liste olu\u015fturun.",
        "mobilePayment.smsCodeFiled.defaultMessage": "\u015eu anda bu i\u015flem ger\u00e7ekle\u015ftirilemiyor. L\u00fctfen daha sonra tekrar deneyin.",
        "register.iban.number.required": "IBAN Numaras\u0131 giriniz.",
        "loginForce.info.bold.text": "sahibinden.com'a T\u00fcrkiye d\u0131\u015f\u0131ndan eri\u015fmek i\u00e7in \u00fcye giri\u015fi yapman\u0131z gerekmektedir",
        "register.form.nameShort": "Ad\u0131n\u0131z en az 2 harften olu\u015fmal\u0131d\u0131r.",
        "auto360.dashboard.buy.href.buyingGuide": "https://www.sahibinden.com/oto360/arac-alim-rehberi",
        "testimonials.dialog.sendtext": "Hikayeni Payla\u015f",
        "paymentPage.error.phone": "L\u00fctfen telefon numaras\u0131 girin",
        "poi.category.other": "Di\u011fer",
        "paymentPage.error.savedCvc": "L\u00fctfen g\u00fcvenlik kodu girin. Bu bilgi bankan\u0131z taraf\u0131ndan istenmektedir.",
        "search.inMapSearch.classifiedList.orderByDateDesc": "Tarihe g\u00f6re (\u00d6nce en y\u00fcksek)",
        "register.form.securityCode": "G\u00fcvenlik kodu ile girdi\u011finiz karakterler uyu\u015fmuyor.",
        "search.inMapSearch.tabMenu.filters": "Filtreler",
        "register.form.corporate.type": "\u0130\u015fletme T\u00fcr\u00fc",
        "location.allDistricts": "T\u00fcm Semtler",
        "emailActivation.error.notEqual": "Farkl\u0131 e-posta adresi giriniz.",
        "register.form.surnameShort": "Soyad\u0131n\u0131z en az 2 harften olu\u015fmal\u0131d\u0131r.",
        linkDeliveryOptionsError: "\u015eifre de\u011fi\u015fikli\u011finiz i\u00e7in bir y\u00f6ntem se\u00e7in.",
        smsVerificationCodeError: "Onay kodu 6 karakterden olu\u015fmal\u0131d\u0131r.",
        "register.invalid.iban.number.required": "Ge\u00e7ersiz bir IBAN numaras\u0131 girdiniz. L\u00fctfen bilgilerin do\u011frulu\u011funu kontrol ederek tekrar deneyiniz.",
        "register.form.corporate.tckn.tooltip": "11 haneli TC kimlik numaran\u0131z\u0131 giriniz.",
        "search.searchByKeyword.collapseAllStores": "T\u00fcm Ma\u011fazalar\u0131 Kapat",
        "creditOffer.validation.vehicle.landing.loanAmount.error.empty": "Kredi Tutar\u0131 girin.",
        "register.form.selectCountry": "\u00dclke alan\u0131n\u0131 bo\u015f b\u0131rakmay\u0131n.",
        "store.validation.image.upload.mimetype": "Ekleyece\u011finiz dosya jpeg, gif veya png format\u0131nda olmal\u0131d\u0131r.",
        "register.form.isEmailEmpty": "E-posta adresinizi giriniz.",
        "emailActivation.hardbounce.EMAIL_WAITING_ACTIVATION.error": "Bu e-posta ile ilgili ba\u015fka bir kullan\u0131c\u0131n\u0131n e-posta de\u011fi\u015fiklik talebi bulunmaktad\u0131r.",
        "classified.favorite.error.folderOwnerClassifiedFavoriteLimitExceeded": "Favori liste sahibinin limiti doldu\u011fu i\u00e7in bu listeye favori ilan ekleyemezsiniz.",
        "brandNewCar.searchFilter.validation.gear": "Vites se\u00e7in.",
        "emailActivation.error.newEmailChangeAndResend": "E-posta adresinizi giriniz.",
        "paymentPage.error.expiredDate": "L\u00fctfen ge\u00e7erli son kullanma tarihi girin",
        "register.idNumber.idNumberExists": "Bu TC Kimlik No ile olu\u015fturulmu\u015f farkl\u0131 bir hesap bulunmaktadir.",
        "emailActivation.hardbounce.EMAIL_IN_USE.error": "Bu e-posta, ba\u015fka bir \u00fcyemiz taraf\u0131ndan kullan\u0131lmaktad\u0131r.",
        "register.form.corporate.town": "\u0130l\u00e7e",
        "search.detailedSearch.multipleCategorySelection.showSelection": "G\u00f6ster",
        "expertise.map.post.url": "/oto360/oto-ekspertiz/ekspertiz-firmalari-ve-paketleri",
        "register.form.signupFormRightText": "sahibinden.com \u00fcyeli\u011finiz varsa a\u015fa\u011f\u0131daki butona t\u0131klayarak \u00fcye giri\u015fi yapabilirsiniz.",
        "creditOffer.validation.vehicle.landing.maturity.error": "Vade se\u00e7in.",
        "search.inMapSearch.mapControl.infoOfNeighbourhood": "\u00c7evre Bilgisi",
        "search.searchByKeyword.closeAll": "T\u00fcm\u00fcn\u00fc kapat",
        "classifiedComparison.classifiedExists": "\u0130lan zaten kar\u015f\u0131la\u015ft\u0131rma listenizdedir.",
        "testimonials.form.namesurname": "Ad\u0131n\u0131z Soyad\u0131n\u0131z",
        "classifiedComparison.canNotRemoveLessThanOne": "Kar\u015f\u0131la\u015ft\u0131rma yapmak i\u00e7in en az bir ilan gerekmektedir.",
        "mobile.authentication.alreadyVerified": "Bu cep telefonu ile Cebinden Onayl\u0131s\u0131n\u0131z",
        "search.mapSearchFilter.showOtherSelections": "Di\u011fer Filtreleri G\u00f6ster",
        "register.form.usernameContainsSSN": "Kullan\u0131c\u0131 ad\u0131n\u0131z formata uygun de\u011fil.",
        "search.inMapSearch.tooltip.classifiedListCondition": "\u0130lan listesini bu alanda g\u00f6rmek i\u00e7in haritay\u0131 yak\u0131nla\u015ft\u0131r\u0131n.",
        "testimonials.share.readbutton": "Payla\u015f\u0131lanlar\u0131 Oku",
        "mobilePayment.eula.title": "G\u00fcncelim Dopingi Kullan\u0131m Ko\u015fullar\u0131",
        "search.detailedSearch.multipleCategorySelection.select": "Se\u00e7iniz",
        "auto360.dashboard.buy.href.carComparison": "https://www.sahibinden.com/oto360/sifir-araclar/arac-karsilastirma",
        "search.results.short.town": "il\u00e7e",
        "vehiclePriceEvaluation.km.placeholder": "Kilometre giriniz",
        "validation.failed.similarIdNumber": "Daha \u00f6nce girmi\u015f oldu\u011funuz TC kimlik numaras\u0131ndan farkl\u0131 bir numara girmeniz gerekmektedir.",
        "vehiclePriceEvaluation.breadcrumb.auto.desktop": "Ara\u00e7 Tipi Se\u00e7imi",
        "search.mapSearchFilter.noSelected": "Se\u00e7ti\u011finiz filtreleri bu alanda g\u00f6rebilirsiniz.",
        "projects.message.error": "L\u00fctfen mesaj\u0131n\u0131z\u0131 giriniz.",
        "search.mapSearchFilter.saveAsToFavorites": "Aramay\u0131 Favorilere Kaydet",
        "paymentPage.error.aggrementMarketPlaceMessage": "L\u00fctfen \u00f6deme kurulu\u015fu \u00e7er\u00e7eve s\u00f6zle\u015fmesini onaylay\u0131n",
        "poi.category.religious_facility": "Dini Tesisler",
        "paymentPage.error.quarter": "L\u00fctfen mahalle se\u00e7in",
        "search.mapSearchFilter.hideOtherSelections": "Di\u011fer Filtreleri Gizle",
        "search.location.maxLocations": "En fazla 5 yer se\u00e7ebilirsiniz",
        "mobilePayment.validation.txtGsmNumber": "L\u00fctfen cep telefonu numaran\u0131z\u0131 giriniz.",
        "register.form.corporate.expertise.combo": "Ekspertiz",
        "classifiedcomparator.compareList.remove": "Listeyi temizle",
        "register.form.corporate.location.show": "Konumumu G\u00f6ster",
        "common.apartmentComplex": "Site Se\u00e7iniz",
        "validation.failed.idNumber": "L\u00fctfen ge\u00e7erli bir T.C. kimlik numaras\u0131 girin",
        "homepage.categories.new": "yeni",
        "paymentPage.text.creditCardPaymentButton": "\u00d6demeyi Tamamla",
        "register.form.corporate.taxNumber.tooltip": "Ticari unvan\u0131n\u0131za ait 10 haneli vergi numaran\u0131z\u0131 giriniz.",
        "register.form.corporate.location.subtitle": "Adres Detay\u0131n\u0131 girmeniz durumunda firman\u0131z\u0131n konum sorgulamas\u0131n\u0131 yapabilirsiniz.",
        "registerSubUser.eula.required": "\u00dcye olmak i\u00e7in \u00dcyelik S\u00f6zle\u015fme Ko\u015fullar\u0131n\u0131 ve Gizlilik Politikas\u0131n\u0131 kabul etmeniz gerekmektedir.",
        "category.moreView": "T\u00fcm\u00fcn\u00fc g\u00f6ster",
        "register.surname.required.max2surname": "En fazla iki adet soyad kullanabilirsiniz.",
        "classified.detail.virtualNumber.label": "\x3cspan\x3e\x26nbsp;(cep)\x3c/span\x3e",
        "paymentPage.error.addressValidationMessage4PaymentSubmit": "Faturan\u0131n d\u00fczenlenebilmesi i\u00e7in TC Kimlik No ya da Vergi No belirtmeniz gerekiyor. \u201cG\u00fcncelle\u201d butonuna t\u0131klayarak bu bilgileri girebilirsiniz.",
        "classifiedcomparator.preview.action": "Kar\u015f\u0131la\u015ft\u0131rma Listesine Ekle",
        "search.inMapSearch.mapControl.showBoundariesRegions": "B\u00f6lgeleri G\u00f6ster",
        "search.inMapSearch.classifiedList.advancedOrder": "Geli\u015fmi\u015f s\u0131ralama",
        "creditOffer.validation.vehicle.landing.loanAmount.error.minVal": "En az {0} TL girin.",
        "search.inMapSearch.mapControl.map": "Harita",
        "vehiclePriceEvaluation.km": "Kilometre",
        "classifiedcomparator.preview.content": "G\u00f6r\u00fcnt\u00fclemekte oldu\u011funuz ilan\u0131 listeye eklemek ister misiniz?",
        "classified.disputeDescription.placeholder": "Varsa, \u015fikayet a\u00e7\u0131klaman\u0131z\u0131 buraya yaz\u0131n\u0131z...",
        "common.city": "\u0130l",
        "location.pleaseSelectTaxOffice": "-- Vergi Dairesi Se\u00e7iniz --",
        "search.realEstate.time": "S\u00fcre",
        "paymentPage.error.aggrementMessage": "L\u00fctfen \u00d6n Bilgilendirme Formunu ve Mesafeli S\u00f6zle\u015fmeyi kabul edin",
        "location.pleaseSelectTown": "Se\u00e7iniz",
        "paymentPage.error.lastName.single": "En fazla bir adet soyad kullanabilirsiniz.",
        "loginForce.info.selectedLanguage": "TR",
        "loginForce.informUsForm.submit": "G\u00f6nder",
        "register.form.corporate.location": "Konum",
        "number.thousandSeparator": ".",
        "corporate.contact": "\u0130leti\u015fim",
        "poi.category.transport": "Ula\u015f\u0131m",
        "register.password.hint.1alph": "En az 1 harf",
        smsVerificationCodeServiceErrorGlobalLimitReached: "Onay kodu hakk\u0131n\u0131z\u0131 doldurdunuz. 24 saat sonra tekrar deneyiniz.",
        "location.allQuarters": "T\u00fcm Mahalleler",
        "register.form.isSecurePassword": "\u015eifreniz harf ve rakam i\u00e7ermelidir.",
        "mobile.authentication.idNumber.minlength": "T.C. Kimlik numaran\u0131z en az 11 rakamdan olu\u015fmal\u0131d\u0131r.",
        "payment.labels.PERSONAL": "Bireysel",
        passwordContainsUsernameEmail: "\u015eifreniz, e-posta adresinizi veya kullan\u0131c\u0131 ad\u0131n\u0131z\u0131 i\u00e7ermemelidir.",
        "search.realEstate.roomCount": "Oda Say\u0131s\u0131",
        "payment.labels.CORPORATE": "Kurumsal",
        "testimonials.title": "Hikayeni Payla\u015f",
        "loginForce.informUsForm.surnameInput": "Soyad\u0131n\u0131z",
        "register.form.corporate.expertise": "Faaliyet Alan\u0131n\u0131z",
        "register.password.required": "Kurallara uygun bir \u015fifre olu\u015fturun.",
        "vehiclePriceEvaluation.error.modelNotFound": "Arac\u0131n\u0131z\u0131n de\u011ferini hesaplayabilmek i\u00e7in yeterli veri bulunmamaktad\u0131r.",
        "search.detailedSearch.multipleCategorySelection.hideSelection": "Gizle",
        "header.proapp.summary": "Ofisim \u00d6zet",
        "depositPage.error.sellerDeal": "L\u00fctfen sat\u0131c\u0131yla g\u00f6r\u00fc\u015ft\u00fc\u011f\u00fcn\u00fcz\u00fc onaylay\u0131n\u0131z.",
        other: "Di\u011fer",
        "paymentPage.error.addressName": "L\u00fctfen adres tan\u0131m\u0131 girin",
        "testimonials.share.button": "Hikayeni Payla\u015f",
        "paymentPage.error.addressName.length.max": "Adres tan\u0131m\u0131 en fazla 50 karakter olabilir",
        "auto360.dashboard.buy.href.allCarComparison": "https://www.sahibinden.com/oto360/arac-karsilastirma",
        "paymentPage.error.year": "L\u00fctfen y\u0131l se\u00e7in",
        "paymentPage.text.bkmPaymentButton": "\u00d6demeyi Tamamla",
        passwordRequired: "\u015eifrenizi girin.",
        "testimonials.share.info": "sahibinden.com \u00fcyelerimizin sat\u0131\u015f ba\u015far\u0131lar\u0131ndan baz\u0131lar\u0131n\u0131 okuyun.\x3cbr /\x3e Siz de sahibinden.com \u00fczerinden al\u0131m sat\u0131m yapt\u0131ysan\u0131z, buraya t\u0131klayarak hikayenizi bizimle payla\u015f\u0131n.",
        "search.searchByKeyword.moreThanFiveProjects": "Araman\u0131za uygun 5'den fazla Proje bulundu",
        usernameRequired: "E-posta adresinizi veya kullan\u0131c\u0131 ad\u0131n\u0131z\u0131 girin.",
        "search.inMapSearch.mapControl.searchByDrawing": "\u00c7izerek Ara",
        "register.form.cs.registerEmailExists": "Bir hata olu\u015ftu.",
        "register.form.nameLong": "Ad ve Soyad bilgisi en fazla 32 harften olu\u015fmal\u0131d\u0131r.",
        "loginForce.informUsForm.turkeyRadioValue": "Turkey",
        "register.password.hint.8chars": "En az 8 karakter",
        "month.feb": "\u015eubat",
        "loginForce.informUsForm.otherReasonRadioValue": "Other",
        "register.form.registerUserNameAvailable": "Kullan\u0131c\u0131 ad\u0131 uygundur.",
        "search.inMapSearch.classifiedList.noResult": "Arad\u0131\u011f\u0131n\u0131z kriterlere uygun ilan bulunamad\u0131.",
        "search.searchByKeyword.moreThanFiveStores": "Araman\u0131za uygun 5'den fazla Ma\u011faza bulundu",
        "search.inMapSearch.searchList.noAd": "Arad\u0131\u011f\u0131n\u0131z kriterlere uygun ilan bulunamad\u0131.",
        "register.form.unknown": "\u0130\u015flem ba\u015far\u0131s\u0131z.",
        "brandNewCar.searchFilter.validation.equipment": "Donan\u0131m tipi se\u00e7in.",
        passwordIsWeak: "G\u00fcvenli\u011finiz i\u00e7in tahmin edilmesi daha zor bir \u015fifre girin.",
        "search.mapSearchFilter.clear": "T\u00fcm\u00fcn\u00fc Temizle",
        "loginForce.informUsForm.describeCase": "Mesaj alan\u0131 bo\u015f b\u0131rak\u0131lamaz.",
        "search.includeDescriptions": "\u0130lan a\u00e7\u0131klamalar\u0131n\u0131 dahil et.",
        "creditOffer.validation.vehicle.landing.carType.error": "Ara\u00e7 tipi se\u00e7in.",
        "auto360.dashboard.buy.menu.returnDeposite": "\u0130adeli Kapora",
        "paymentPage.error.companyName": "L\u00fctfen firma ismi girin",
        "month.sep": "Eyl\u00fcl",
        "common.districtAndQuarter": "Semt / Mahalle",
        "creditOffer.vehicle.landing.loanAmount.error": "Kredi Tutar\u0131 girin.",
        "search.inMapSearch.mapControl.noBoundaries": "S\u0131n\u0131rlar\u0131 Kald\u0131r",
        "mobile.authentication.idNumber.tckn": "L\u00fctfen ge\u00e7erli bir T.C. Kimlik numaras\u0131 giriniz.",
        passwordEmpty: "L\u00fctfen \u015fifre alan\u0131n\u0131 bo\u015f b\u0131rakmay\u0131n\u0131z.",
        "register.form.phoneRequired.v2": "L\u00fctfen ge\u00e7erli bir telefon numaras\u0131 girin.",
        "creditOffer.validation.vehicle.landing.loanAmount.error.maxVal": "En fazla {0} TL girin.",
        "register.captcha.required": "G\u00fcvenlik kodunu kontrol edip tekrar deneyin.",
        "register.form.signupFormRightHeader": "sahibinden.com \u00fcyesiyim",
        "dailyOpportunityRefer.cargoType.BUYER_PAID": "Al\u0131c\u0131 \u00d6der",
        "register.form.select": "Se\u00e7iniz",
        "classified.favorite.error.listExist": "Bu isimle bir listeniz var.",
        "validation.failed.taxNumber": "L\u00fctfen ge\u00e7erli bir vergi kimlik numaras\u0131 girin",
        "paymentPage.error.addressDetail": "L\u00fctfen adres girin",
        "search.realEstate.choose": "Se\u00e7iniz",
        "register.form.reqMessage": "sahibinden.com'un g\u00f6nderece\u011fi bilgilendirme mesajlar\u0131n\u0131 ve tan\u0131t\u0131m ama\u00e7l\u0131 E-posta ve SMS\u2019lerini almay\u0131 kabul ediyorum.",
        "search.inMapSearch.filter.more": "Daha fazla",
        "register.form.corporate.companyName": "Ticari \u00dcnvan",
        "projects.surname.error": "L\u00fctfen soyad\u0131n\u0131z\u0131 giriniz.",
        "sahibindex.selectCity": "\u0130l",
        "auto360.dashboard.sell.menu.carValuation": "Ara\u00e7 De\u011ferleme",
        "poi.category.education": "E\u011fitim",
        "paymentPage.error.creditCardNumber": "L\u00fctfen ge\u00e7erli bir kart numaras\u0131 girin",
        "search.realEstate.timeshare": "Devrem\u00fclk",
        "paymentPage.error.lastName": "L\u00fctfen soyad\u0131n\u0131z\u0131 girin",
        "auto360.dashboard.buy.menu.carValuation": "Ara\u00e7 De\u011ferleme",
        "paymentPage.error.profileName": "L\u00fctfen kart\u0131n\u0131za bir isim verin.",
        "search.inMapSearch.mapControl.classifiedCountMessageMore": "Daha fazla ilan i\u00e7in yak\u0131nla\u015ft\u0131r\u0131n.",
        "classifiedComparison.emptyList": "Kar\u015f\u0131la\u015ft\u0131rma listeniz bo\u015f.",
        "common.homePage": "Ana Sayfa",
        "brandNewCar.searchFilter.validation.year": "Y\u0131l se\u00e7imi yap\u0131n.",
        "loginForce.informUsForm.iAmInTurkeyRadioInput": "T\u00fcrkiye'deyim",
        "search.inMapSearch.searchList.mapPoint": "\x3cp\x3eBu ilan\u0131n harita \u00fczerindeki tam yeri, ilan sahibinin talebi \u00fczerine g\u00f6sterilmemektedir.\x3c/p\x3e",
        "search.realEstate.listSearch": "Listede G\u00f6ster",
        "register.form.corporate.taxOffice": "Vergi Dairesi",
        "testimonials.form.story": "Hikayeniz",
        "brandNewCar.searchFilter.validation.packet": "Paket tipi se\u00e7in.",
        "location.allCountries": "T\u00fcm \u00dclkeler",
        "auto360.dashboard.buy.href.damageInquiry": "https://www.sahibinden.com/oto360/hasar-sorgulama",
        "auto360.dashboard.buy.href.carExpertise": "https://www.sahibinden.com/oto360/oto-ekspertiz?viewmode\x3dresponsive",
        "register.form.corporate.taxNumber": "Vergi No",
        "projects.email.error": "L\u00fctfen email adresinizi giriniz.",
        "projects.captchaValue": "G\u00fcvenlik Kodu",
        "search.inMapSearch.searchList.doping": "Siz de ilan\u0131n\u0131z\u0131n yukar\u0131da yer almas\u0131n\u0131\x3cbr\x3eistiyorsan\u0131z \x3cu\x3et\u0131klay\u0131n\x3c/u\x3e.",
        "month.dec": "Aral\u0131k",
        "testimonials.form.securitycode": "G\u00fcvenlik kodu",
        "register.form.registerEmailExists": "Belirtti\u011finiz adres kullan\u0131l\u0131yor veya sahibinden.com \u00fcyelik kurallar\u0131na uygun de\u011fil. Kullan\u0131labilir durumda bir e-posta giriniz.",
        "paymentPage.error.cvc.oneLine": "L\u00fctfen g\u00fcvenlik kodu girin",
        "register.taxNumber.taxNumberExists": "Bu Vergi No ile olu\u015fturulmu\u015f farkl\u0131 bir hesap bulunmaktadir.",
        "poi.category.apartment_complex": "Site Bilgisi",
        "search.inMapSearch.mapControl.deleteDrawing": "\u00c7izimi Sil",
        "loginForce.info.translate": "English",
        "search.results.short.city": "il",
        "quickTour.next": "Sonraki",
        "loginForce.informUsForm.title": "Bize Bildirin",
        "paymentPage.error.cardOwner": "L\u00fctfen kart \u00fczerinde yazan ismi girin",
        "mobilePayment.smsCodeFiled.title": "Mobil \u00d6deme i\u015fleminiz ger\u00e7ekle\u015ftirilemedi",
        "depositPage.error.priceError": "Girdi\u011finiz kapora tutar\u0131 X TL - Y TL aral\u0131\u011f\u0131nda olmal\u0131d\u0131r.",
        "classified.favorite.error.listMinlength": "En az 1 (bir) karakter girin.",
        "paymentPage.error.cvc": "L\u00fctfen g\u00fcvenlik\x3c/br\x3e kodu girin",
        "register.form.corporate.companyName.tooltip": "Ticaret Odas\u0131na kay\u0131tl\u0131, ticari faaliyetlerinizi y\u00fcr\u00fct\u00fcrken resmi kurumlarda kulland\u0131\u011f\u0131n\u0131z unvan\u0131n\u0131z\u0131 giriniz. Faturalar\u0131n\u0131z burada belirtece\u011finiz ticari unvan ad\u0131na d\u00fczenlenecektir.",
        "register.form.noSpecialChars": "T\u00fcrk\u00e7e karakter (i,\u00e7,\u011f, vb.), \u00f6zel karakter (!,? vb.) ve bo\u015fluk kullan\u0131lamaz.",
        "homepage.propertyValuation": "Emlak De\u011ferleme",
        "classified.favorite.addedToFavorites": "\u0130lan \x3cstrong\x3e\x3c/strong\x3e Favori Listenize Eklendi",
        "poi.category.green_areas": "Ye\u015fil Alanlar",
        "auto360.dashboard.buy.menu.buyingGuide": "Ara\u00e7 Al\u0131m Rehberi",
        "mobile.authentication.mobileTimesError": "Numara de\u011fi\u015ftirme hakk\u0131n\u0131z\u0131 doldurdunuz.  Yar\u0131n tekrar deneyebilirsiniz.",
        "testimonials.share.infoclass": "share-story-info",
        "common.town": "\u0130l\u00e7e",
        "paymentPage.error.parisMarketPlaceMessage": "L\u00fctfen s\u00f6zle\u015fmeyi okuyup onaylay\u0131n.",
        "poi.category.cultural_facility": "K\u00fclt\u00fcrel Tesisler",
        "testimonials.emptytext": 'Hikaye bulunamad\u0131. \x3ca href\x3d"#" class\x3d"share-lb"\x3eT\u0131klay\u0131ni hikayesini ilk payla\u015fan siz olun!\x3c/a\x3e',
        "register.email.required.turkish": "\u00e7, \u011f, \u0131, \u00f6, \u015f, \u00fc harfleri i\u00e7ermeyen e-posta girin.",
        "paymentPage.error.addressName.length.min": "L\u00fctfen adres tan\u0131m\u0131 giriniz",
        "emailActivation.hardbounce.OTHER.error": "\u0130\u015fleminize devam edemiyoruz. L\u00fctfen tekrar deneyin.",
        "vehiclePriceEvaluation.estimateButton": "Arac\u0131n De\u011ferini G\u00f6ster",
        "search.inMapSearch.searchList.priceInfo": "\x26nbsp;TL\x3c/strong\x3e'den \x3cbr/\x3e ba\u015flayan fiyatlarla\x3c/p\x3e\x3c/a\x3e\x3c/li\x3e",
        "poi.category.medical": "Sa\u011fl\u0131k",
        "register.form.passwordEmpty": "\u015eifreniz en az 8 karakterden olu\u015fmal\u0131, harf ve rakam i\u00e7ermelidir.",
        "mobile.authentication.idNumber.required": "L\u00fctfen T.C. Kimlik no giriniz.",
        "testimonials.dialog.success.title": "Hikayenizi bizimle payla\u015ft\u0131\u011f\u0131n\u0131z i\u00e7in te\u015fekk\u00fcr ederiz.",
        smsVerificationCodeServiceError: "Onay kodunu hatal\u0131 girdiniz. L\u00fctfen tekrar deneyiniz.",
        "projects.name.error": "L\u00fctfen ad\u0131n\u0131z\u0131 giriniz.",
        "register.form.passwordContainsEmail": "\u015eifreniz, e-posta adresinizi veya kullan\u0131c\u0131 ad\u0131n\u0131z\u0131 i\u00e7ermemelidir.",
        "search.inMapSearch.filter.price": "Fiyat",
        "emailActivation.hardbounce.DOESNT_MATCH_EMAIL_PATTERN.error": "Ge\u00e7ersiz bir e-posta adresi girdiniz. L\u00fctfen kontrol edin.",
        "register.form.corporate.mobile": "Cep Telefonunuz",
        "register.form.corporate.quarter": "Mahalle",
        "loginForce.informUsForm.emailInput": "E-posta Adresiniz",
        "register.form.corporate.address": "Adres Detay\u0131",
        "brandNewCar.searchFilter.validation.bodyType": "Kasa se\u00e7in.",
        "search.searchByKeyword.showAllProjects": "Araman\u0131za Uygun Projeler",
        "register.email.required.mailna": "Belirtti\u011finiz adres kullan\u0131l\u0131yor veya sahibinden.com \u00fcyelik kurallar\u0131na uygun de\u011fil. Kullan\u0131labilir durumda bir e-posta giriniz.",
        "month.jun": "Haziran",
        "brandNewCar.searchFilter.validation.brand": "Marka se\u00e7in.",
        "month.jul": "Temmuz",
        "classifiedComparison.couldNotDelete": "\u0130lan kar\u015f\u0131la\u015ft\u0131rma listenizden silinemedi.",
        "classifiedComparison.couldNotAdd": "\u0130lan kar\u015f\u0131la\u015ft\u0131rma listenize eklenemedi.",
        "store.validation.image.upload.invalid.dimension": "Ekleyece\u011finiz dosya \u00f6l\u00e7\u00fcleri 240x160 olmal\u0131d\u0131r.",
        "register.form.passwordLength": "Minimum 8 karakterden olu\u015fmal\u0131, harf ve rakam i\u00e7ermelidir.",
        "location.pleaseSelectCity": "Se\u00e7iniz",
        "classified.favorite.error.userClassifiedFavoriteLimitExceeded": "Favori ilan limitiniz doldu. Favorilerinize yeni ilan eklemek i\u00e7in mevcut favori ilanlar\u0131n\u0131zdan birka\u00e7\u0131n\u0131 silmelisiniz.",
        "mobile.authentication.validateError": "Girdi\u011finiz Onay Kodu hatal\u0131. L\u00fctfen tekrar deneyin.",
        "brandNewCar.searchFilter.validation.engine": "Motor se\u00e7in.",
        "register.form.corporate.city": "\u0130l",
        "auto360.dashboard.buy.menu.damageInquiry": "Ara\u00e7 Hasar Sorgulama",
        "month.may": "May\u0131s",
        "month.mar": "Mart",
        "location.allTowns": "T\u00fcm \u0130l\u00e7eler",
        "mobile.authentication.ssnError": "T.C. kimlik numaras\u0131 format\u0131n\u0131z hatal\u0131d\u0131r.",
        "register.form.corporate.location.error": "L\u00fctfen Konum Giriniz.",
        "sahibindex.selectTown": "\u0130l\u00e7e",
        "register.form.registerUserNameExists": "Belirtmi\u015f oldu\u011funuz kullan\u0131c\u0131 ad\u0131 kullan\u0131lmaktad\u0131r. L\u00fctfen kullan\u0131c\u0131 ad\u0131n\u0131z\u0131 g\u00fcncelleyiniz.",
        "register.password.weakPassword": "\u015eifreniz uygun de\u011fil.",
        "mobilePayment.validation.rdCarriers": "L\u00fctfen bir operat\u00f6r se\u00e7iniz.",
        "auto360.dashboard.buy.menu.carComparison": "Ara\u00e7 Kar\u015f\u0131la\u015ft\u0131rma",
        "store.validation.image.upload.general": "Ma\u011faza logo hatas\u0131.",
        "dailyOpportunityRefer.cargoType.FREE_OF_CHARGE": "\u00dccretsiz Kargo",
        "register.form.signupFormRightLogIn": "Giri\u015f Yap",
        "classified.favorite.addToFavoriteList": "Ekleyece\u011fin Listeyi Se\u00e7",
        "search.inMapSearch.classifiedList.orderByPriceAsc": "Fiyata g\u00f6re (\u00d6nce en d\u00fc\u015f\u00fck)",
        "search.selectAll": "T\u00fcm\u00fcn\u00fc Se\u00e7",
        "search.inMapSearch.mapControl.showBoundariesTowns": "\u0130l\u00e7eleri G\u00f6ster",
        "register.name.required": "En az 2 harften olu\u015fmal\u0131d\u0131r.",
        "paymentPage.error.lastNameAlphaOnly": "Ge\u00e7ersiz soyad",
        "category.lessView": "Kapat",
        "month.oct": "Ekim",
        "register.form.corporate.sector": "Faaliyet Alan\u0131n\u0131z",
        "register.global.password.error": "E-posta adresiniz, kullan\u0131c\u0131 ad\u0131n\u0131z veya \u015fifreniz hatal\u0131.",
        passwordLength: "Minimum 8 karakterden olu\u015fmal\u0131, harf ve rakam i\u00e7ermelidir.",
        "auto360.dashboard.sell.href.sellingGuide": "https://www.sahibinden.com/oto360/arac-satis-rehberi",
        "register.form.passwordIsWeak": "G\u00fcvenli\u011finiz i\u00e7in tahmin edilmesi daha zor bir \u015fifre girin.",
        "paymentPage.error.date": "L\u00fctfen son kullanma tarihinizi girin",
        "paymentPage.error.firstName": "L\u00fctfen ad\u0131n\u0131z\u0131 girin",
        "register.form.registerNativeAdEmailExists": "Bu e-posta hesab\u0131yla olu\u015fturulmu\u015f bir \u00fcyelik bulunmaktad\u0131r. L\u00fctfen ba\u015fka bir e-posta adresiyle \u00fcye olunuz.",
        "mobilePayment.validation.txtGsmNumber.minlength": "Cep telefonu numaran\u0131z 9 karakterden olu\u015fmal\u0131d\u0131r.",
        "mobilePayment.validation.cbEula": "Devam etmek i\u00e7in kullan\u0131m ko\u015fullar\u0131n\u0131 kabul etmeniz gerekmektedir.",
        "classifiedcomparator.delete.confirm": "Bu ilan\u0131 kar\u015f\u0131la\u015ft\u0131rma listesinden \u00e7\u0131karmak istiyor musunuz ?",
        "paymentPage.error.lastName.minlength": "Soyad alan\u0131 en az 2 karakter olmal\u0131d\u0131r",
        "sahibindex.selectQuarter": "Mahalle",
        "vehiclePriceEvaluation.breadcrumb.auto": "Oto360 \x3e Ara\u00e7 De\u011ferleme \x3e Ara\u00e7 Tipi Se\u00e7imi",
        "paymentPage.error.addressDetail.length.min": "Adres alan\u0131 en az 5 karakter olabilir",
        "register.form.corporate.tckn": "TC Kimlik No",
        "search.inMapSearch.mapControl.cancel": "Vazge\u00e7",
        "register.form.captchaEmpty": "G\u00fcvenlik kodu ile girdi\u011finiz karakterler uyu\u015fmuyor. Kontrol edip yeniden deneyin.",
        "paymentPage.error.firstNameAlphaOnly": "Ge\u00e7ersiz ad",
        "classified.favorite.createNewFavoriteListName": "Listenize isim verin",
        "register.eula.corporate.required": "\u00dcye olmak i\u00e7in \u00dcyelik S\u00f6zle\u015fme Ko\u015fullar\u0131n\u0131 ve Gizlilik Politikas\u0131n\u0131 kabul etmeniz gerekmektedir.",
        "emailActivation.hardbounce.VERIFICATION_CODE_ERROR_LIMIT_REACHED.error": "Onay kodunu \u00fcst \u00fcste hatal\u0131 girdiniz. L\u00fctfen 24 saat sonra tekrar deneyin.",
        "classified.favorite.error.listServiceError": "\u0130\u015fleminiz yap\u0131lamad\u0131, l\u00fctfen tekrar deneyin.",
        "testimonials.form.email": "E-posta Adresiniz",
        "search.searchByKeyword.expandAllProjects": "T\u00fcm Projeleri G\u00f6ster",
        "loginForce.informUsForm.nameRequired": "En az 2 harften olu\u015fmal\u0131d\u0131r.",
        "register.surname.required.max1surname": "En fazla bir adet soyad kullanabilirsiniz.",
        "search.searchByKeyword.showAll": "T\u00fcm\u00fcn\u00fc g\u00f6ster",
        "paymentPage.error.month": "L\u00fctfen ay se\u00e7in",
        "location.provideLocationKeyword": "B\u00f6lge, il\u00e7e, semt veya mahalle girin",
        "testimonials.dialog.closetext": "Kapat",
        smsVerificationCodeServiceErrorLimitReached: "Onay kodunu \u00fcst \u00fcste hatal\u0131 girdiniz. 24 saat sonra tekrar deneyiniz.",
        "category.sublist.moreunusedProduct": "T\u00fcm S\u0131f\u0131r \u00dcr\u00fcnleri G\u00f6ster",
        "search.results.textSelectedAddresses": "{0} {1} se\u00e7ildi",
        "search.inMapSearch.mapControl.showBoundariesCities": "\u0130lleri G\u00f6ster",
        smsVerificationCodeServiceErrorUnknown: "Bir hata olu\u015ftu, l\u00fctfen daha sonra tekrar deneyiniz.",
        "quickTour.close": "Kapat",
        "search.results.short.district": "semt/mah.",
        "paymentPage.error.addressFormUserType": "Yaln\u0131zca bireysel adresiniz ile GeT \u00fcr\u00fcn\u00fc sat\u0131n alabilirsiniz; l\u00fctfen bireysel adresinizi se\u00e7in. Kay\u0131tl\u0131 bireysel adresiniz yok ise \u201cYeni Adres Ekle\u201d butonunu kullanabilirsiniz",
        "loginForce.informUsForm.nameInput": "Ad\u0131n\u0131z",
        "loginForce.informUsForm.successText": "Bildiriminiz i\u00e7in te\u015fekk\u00fcr ederiz.",
        "register.form.passwordNotMatch": "\u015eifreniz tekrar\u0131 ile uyu\u015fmuyor.",
        "search.inMapSearch.mapControl.showBoundariesQuarters": "Mahalleleri G\u00f6ster",
        "projects.phone.error": "L\u00fctfen telefon numaran\u0131z\u0131 giriniz.",
        "mobilePayment.validation.txtGsmNumber.minlength.alternate": "Cep telefonu numaran\u0131z 11 karakterden olu\u015fmal\u0131d\u0131r.",
        "classifiedComparison.reachMaxClassified": "Maksimum kar\u015f\u0131la\u015ft\u0131rabilece\u011finiz ilan say\u0131s\u0131 {0}'t\u00fcr.",
        "register.form.registerEmailAvailable": "E-posta adresi uygundur.",
        "register.email.required": "E-posta adresinizi girin.",
        "login.secure.url.prefix": "https://secure.sahibinden.com/giris/?return_url\x3d",
        "paymentPage.error.taxNumber": "Vergi No alan\u0131n\u0131 bo\u015f ge\u00e7emezsiniz",
        "loginForce.informUsForm.emailRequired": "E-posta adresinizi yaz\u0131n.",
        "loginForce.informUsForm.failText": "\u015eu anda talebinizi g\u00f6nderemiyoruz, daha sonra tekrar deneyin.",
        "paymentPage.error.taxNumberNotValid": "Vergi No ge\u00e7erli de\u011fil",
        "loginForce.info.inform.us": "bize bildirin",
        "register.form.userNameShort": "Kullan\u0131c\u0131 ad\u0131n\u0131z en az 6 en fazla 20 karakter olmal\u0131d\u0131r.",
        "search.inMapSearch.tabMenu.classifiedAds": "\u0130lanlar",
        "store.validation.image.upload.maxfilesize": "Ekleyece\u011finiz dosya boyutu en fazla 2MB olmal\u0131d\u0131r.",
        "search.results.short.quarter": "semt/mah.",
        "search.realEstate.floorCount": "Kat Say\u0131s\u0131",
        "search.inMapSearch.tooltip.classifiedTabInfo": "\u0130lanlara liste halinde bu alandan ula\u015fabilirsiniz.",
        "register.form.corporate.sector.combo": "Se\u00e7iniz",
        "emailActivation.hardbounce.VERIFICATION_CODE_GLOBAL_LIMIT_REACHED.error": "Onay kodu hakk\u0131n\u0131z\u0131 doldurdunuz. 24 saat sonra tekrar deneyiniz.",
        "classified.favorite.createNewFavoriteList": "Yeni Liste Olu\u015ftur",
        "loginForce.informUsForm.otherRadioInput": "Di\u011fer",
        "register.form.updateEmailSame": "Mevcut e-posta adresinizden farkl\u0131 bir adres olmal\u0131.",
        "vehiclePriceEvaluation.breadcrumb.auto.head": "Oto360 \x3e Ara\u00e7 De\u011ferleme",
        "loginForce.info.m.translate": "EN",
        "testimonials.shortdesc": "\u0130lan\u0131n\u0131z\u0131n hikayesini girerek Hikayeni Payla\u015f sayfam\u0131zda yay\u0131nlay\u0131p milyonlarca ki\u015fi ile payla\u015fabilirsiniz",
        "validation.failed.similarTaxNumber": "Daha \u00f6nce girmi\u015f oldu\u011funuz Vergi numaras\u0131ndan farkl\u0131 bir numara girmeniz gerekmektedir.",
        "classified.favorite.error.invalidFolderName": "Bu isimle bir liste olu\u015fturamazs\u0131n\u0131z.",
        "register.form.corporate.expertise.label1": "\u015eah\u0131s \u015eirketi",
        "register.form.userNameEmpty": "Kullan\u0131c\u0131 ad\u0131n\u0131z\u0131 girmediniz. Kullan\u0131c\u0131 ad\u0131n\u0131z T\u00fcrk\u00e7e karakterler ve bo\u015fluk i\u00e7ermemelidir.",
        "register.form.corporate.expertise.label2": "Limited veya Anonim \u015eirketi",
        "common.quarter": "Mahalle",
        "location.allCities": "T\u00fcm \u0130ller",
        "auto360.dashboard.buy.href.carValuation": "https://www.sahibinden.com/oto360/arac-degerleme/alirken",
        "search.inMapSearch.mapControl.mapView": "G\u00f6r\u00fcn\u00fcm",
        "poi.category.shopping": "Al\u0131\u015fveri\u015f",
        "search.inMapSearch.ad": "ilan",
        "search.detailedSearch.multipleCategorySelection.emptyModel": "Yeni Marka / Model Ekle",
        "search.searchByKeyword.expandAllStores": "T\u00fcm Ma\u011fazalar\u0131 G\u00f6ster",
        "paymentPage.error.aggrementMarketPlaceAndGuestUserMessage": "L\u00fctfen \u00f6deme kurulu\u015fu \u00e7er\u00e7eve s\u00f6zle\u015fmesini ve \u00fcye olmadan sat\u0131n alma ko\u015fullar\u0131n\u0131 onaylay\u0131n",
        "register.form.corporate.landPhone1": "Sabit Telefon 1",
        "register.form.endUserLicenceAgreementNotAccepted": "\u00dcye olmak i\u00e7in \u00dcyelik S\u00f6zle\u015fmesi Ko\u015fullar\u0131\u2019n\u0131 ve Gizlilik Politikas\u0131\u2019n\u0131 kabul etmeniz gerekmektedir.",
        "register.form.corporate.landPhone2": "Sabit Telefon 2",
        "mobilePayment.smsConfirmation.title": "numaral\u0131 telefonunuza onay mesaj\u0131 g\u00f6nderildi",
        "search.location.pleaseSelectCityFirst": "L\u00fctfen \u00f6nce il se\u00e7iniz",
        "register.form.reEnterPassword": "\u015eifreniz e\u015fle\u015fmiyor.",
        "common.district": "Semt",
        "emailActivation.error.popup.title": "E-posta Adresi De\u011fi\u015fikli\u011fi",
        "search.searchByKeyword.collapseAllProjects": "T\u00fcm Projeleri Kapat",
        "creditOffer.vehicle.landing.maturity.error": "Vade se\u00e7in.",
        "search.inMapSearch.searchList.filterByKeywords": "\x3cp\x3eKelime ile filtrele\x3c/p\x3e",
        "register.form.corporate.landPhone1.tooltip": "Firman\u0131za kay\u0131tl\u0131 sabit telefon numaran\u0131z\u0131 giriniz.",
        "brandNewCar.searchFilter.validation.model": "Model se\u00e7in.",
        "login.header.text": "\u00dcye Giri\u015fi",
        "loginForce.informUsForm.infoText": "Neden bu sayfay\u0131 g\u00f6rmemeniz gerekti\u011fini d\u00fc\u015f\u00fcn\u00fcyorsunuz?",
        "register.form.selectCity": "\u015eehir alan\u0131 bo\u015f b\u0131rak\u0131lamaz.",
        "register.eula.required": "\u00dcye olmak i\u00e7in Bireysel \u00dcyelik S\u00f6zle\u015fmesi ve Ekleri'ni kabul etmeniz gerekmektedir.",
        "auto360.dashboard.sell.href.carValuation": "https://www.sahibinden.com/oto360/arac-degerleme/satarken",
        "search.inMapSearch.classifiedList.orderByDateAsc": "Tarihe g\u00f6re (\u00d6nce en d\u00fc\u015f\u00fck)",
        "general.any": "Hepsi",
        "register.form.specialCharSpace": "En fazla bir adet soyad kullanabilirsiniz.",
        "emailActivation.hardbounce.CROSS_VERIFICATION_INVALID_CODE.error": "Onay kodunu hatal\u0131 girdiniz. L\u00fctfen tekrar deneyiniz.",
        "register.form.corporate.agreement.link": '\x3ca href\x3d"/sozlesmeler/ek-7-magaza-kullanim-kurallari-43" rel\x3d"nofollow" target\x3d"_blank"\x3eMa\u011faza Kullan\u0131m Kurallar\u0131\x3c/a\x3e\'n\u0131 kabul ediyorum.',
        "paymentPage.error.installemntSelect": "L\u00fctfen taksit se\u00e7imi yap\u0131n",
        "location.pleaseSelectCountry": "Se\u00e7iniz",
        passwordIsSameWithLastPassword: "Yeni \u015fifreniz, mevcut \u015fifrenizden farkl\u0131 olmal\u0131d\u0131r.",
        "month.apr": "Nisan",
        "loginForce.informUsForm.surnameRequired": "En az 2 harften olu\u015fmal\u0131d\u0131r.",
        "quickTour.prev": "\u00d6nceki",
        "loginForce.informUsForm.requestNumber": "Talep Numaras\u0131:",
        "paymentPage.error.idNumber": "L\u00fctfen TC Kimlik numaras\u0131 girin",
        "register.form.userNameValid": "Kullan\u0131c\u0131 ad\u0131n\u0131z harf i\u00e7ermelidir.",
        "register.form.isEmailValid": "L\u00fctfen ge\u00e7erli bir e-posta adresi giriniz.",
        "register.form.corporate.location.pin": "Girmi\u015f oldu\u011funuz adrese g\u00f6re firman\u0131z\u0131n konumunu yakla\u015f\u0131k olarak i\u015faretledik. Pin'in yerini de\u011fi\u015ftirerek tam konumunuzu belirleyebilirsiniz.",
        "loginForce.info.message": "Bu mesaj\u0131 g\u00f6rmemeniz gerekti\u011fini d\u00fc\u015f\u00fcn\u00fcyorsan\u0131z",
        "search.deSelectAll": "T\u00fcm\u00fcn\u00fc Kald\u0131r",
        "classified.favorite.saveNewFavoriteListButton": "Kaydet",
        "register.form.phoneRequired": "L\u00fctfen ge\u00e7erli bir telefon numaras\u0131 giriniz.",
        "search.inMapSearch.mapControl.classifiedCountMessage": '\x3cstrong class\x3d"search-query-label"\x3e\x3c/strong\x3e araman\u0131z i\u00e7in \x3cspan class\x3d"total-count-container"\x3e\x3cstrong class\x3d"total-count-label"\x3e\x3c/strong\x3e ilan aras\u0131ndan \x3c/span\x3e\x3cstrong class\x3d"visible-count-label"\x3e\x3c/strong\x3e ilan g\u00f6steriliyor.',
        "classified.lastVisited.title": "Son Gezdi\u011finiz \u0130lanlar",
        "month.jan": "Ocak",
        "classifiedComparison.classifiedNotComparable": "Ayn\u0131 kategorideki ilanlar kar\u015f\u0131la\u015ft\u0131r\u0131labilir.\x3cbr\x3eListenizi temizleyip yeni bir kar\u015f\u0131la\u015ft\u0131rma listesi olu\u015fturabilirsiniz.",
        "number.decimalSeparator": ",",
        "sahibindenSelect.defaultOptions.choose": "Se\u00e7iniz",
        "auto360.dashboard.buy.menu.carExpertise": "Oto Ekspertiz",
        "register.form.emailConfirmation": "E-posta adresleri birbiri ile uyu\u015fmuyor.",
        "search.inMapSearch.mapControl.mapFeatures": "Harita \u00d6zellikleri",
        "classifiedComparison.classifiedNotFound": "Kar\u015f\u0131la\u015ft\u0131rmak istedi\u011finiz ilan bulunamad\u0131!",
        "paymentPage.error.taxOffice": "Vergi Dairesi alan\u0131n\u0131 bo\u015f ge\u00e7emezsiniz",
        "search.searchByKeyword.showAllStores": "T\u00fcm Ma\u011fazalar\u0131 G\u00f6ster",
        "paymentPage.error.town": "L\u00fctfen il\u00e7e se\u00e7in",
        "header.proapp.emlakOfisim": "M\u00fc\u015fteri Y\u00f6netimi",
        "emailActivation.crossVerification.minlength": "Onay kodu 6 rakkamdan olu\u015fmal\u0131d\u0131r.",
        "search.inMapSearch.searchList.search": "Ara",
        "search.inMapSearch.mapControl.satellite": "Uydu",
        "search.inMapSearch.mapControl.locationSearch.placeHolder": "\u0130l\u00e7e, Mahalle veya Semt  Ad\u0131 ile Arama Yap",
        "creditOffer.vehicle.landing.carType.error": "Ara\u00e7 tipi se\u00e7in.",
        "paymentPage.error.country": "L\u00fctfen \u00fclke se\u00e7in",
        "search.inMapSearch.classifiedList.orderByPriceDesc": "Fiyata g\u00f6re (\u00d6nce en y\u00fcksek)",
        "emailActivation.hardbounce.TOO_MANY_REQUESTS.error": "G\u00fcnl\u00fck e-posta de\u011fi\u015fiklik hakk\u0131 doldu, daha sonra tekrar deneyin.",
        "paymentPage.error.parisAgreementMessage": "L\u00fctfen s\u00f6zle\u015fmeleri okuyup onaylay\u0131n.",
        "projects.captcha.error": "L\u00fctfen g\u00fcvenlik kodunu giriniz.",
        "search.results.short.apartmentComplex": "site",
        "search.inMapSearch.searchList.favoriteSearchAdd": "Favori arama kaydedildi.",
        "paymentPage.error.addressDetail.length.max": "Adres alan\u0131 en fazla 250 karakter olabilir"
    }
};
var defaultAjaxMethod = "GET",
    defaultAjaxType = "json",
    defaultAjaxTimeout = 1E4,
    documentLanguage = $("html").attr("lang");
String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
    value: function(a, d) {
        d = 0 < d ? d | 0 : 0;
        return this.substring(d, d + a.length) === a
    }
});
String.prototype.endsWith || (String.prototype.endsWith = function(a, d) {
    if (void 0 === d || d > this.length) d = this.length;
    return this.substring(d - a.length, d) === a
});
void 0 == Element.prototype.getAttributeNames && (Element.prototype.getAttributeNames = function() {
    for (var a = this.attributes, d = a.length, c = Array(d), b = 0; b < d; b++) c[b] = a[b].name;
    return c
});
String.prototype.includes || (String.prototype.includes = function(a, d) {
    if (a instanceof RegExp) throw TypeError("first argument must not be a RegExp");
    void 0 === d && (d = 0);
    return -1 !== this.indexOf(a, d)
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(a, d) {
    var c = this.length >>> 0;
    d = Number(d) || 0;
    d = 0 > d ? Math.ceil(d) : Math.floor(d);
    for (0 > d && (d += c); d < c; d++)
        if (d in this && this[d] === a) return d;
    return -1
});
var passiveEventSupported = !1;
try {
    var options = {
        get passive() {
            passiveEventSupported = !0;
            return !1
        }
    };
    window.addEventListener("test", null, options);
    window.removeEventListener("test", null, options)
} catch (a) {
    passiveEventSupported = !1
}
$.ajaxSetup({
    type: defaultAjaxMethod,
    dataType: defaultAjaxType,
    cache: !1,
    timeout: defaultAjaxTimeout,
    data: {
        lang: documentLanguage,
        time: function() {
            return (new Date).getTime().toString() + "_" + Math.random()
        }
    }
});
window.location.queryString = function(a) {
    if ("" == a) return {};
    for (var d = {}, c = 0; c < a.length; ++c) {
        var b = a[c].split("\x3d", 2);
        d[b[0]] = 1 == b.length ? "" : decodeURIComponent(b[1].replace(/\+/g, " "))
    }
    return d
}(window.location.search.substr(1).split("\x26"));

function UpdateQueryString(a, d, c) {
    c || (c = window.location.href);
    var b = new RegExp("([?\x26])" + a + "\x3d.*?(\x26|#|$)(.*)", "gi"),
        e;
    if (b.test(c)) {
        if ("undefined" !== typeof d && null !== d) return c.replace(b, "$1" + a + "\x3d" + d + "$2$3");
        e = c.split("#");
        c = e[0].replace(b, "$1$3").replace(/(&|\?)$/, "");
        "undefined" !== typeof e[1] && null !== e[1] && (c += "#" + e[1]);
        return c
    }
    "undefined" !== typeof d && null !== d && (b = -1 !== c.indexOf("?") ? "\x26" : "?", e = c.split("#"), c = e[0] + b + a + "\x3d" + d, "undefined" !== typeof e[1] && null !== e[1] && (c += "#" + e[1]));
    return c
}
var checkSelectedCombos = function() {
        setTimeout(function() {
            $("select").each(function() {
                "" === $(this).val() || null === $(this).val() || "0" === $(this).val() ? $(this).removeClass("selectedOption") : $(this).addClass("selectedOption");
                window.navigator.userAgent.match(/(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:|\bEdge\/)(\d+)/) && ($(this).addClass("selectedOption"), "true" !== $(this).attr("rendered") && ($(this).html($(this).html()), $(this).attr("rendered", "true")))
            })
        }, 20)
    },
    checkIfElementExist = function(a, d, c) {
        var b = 0;
        d =
            d || 10;
        var e = setInterval(function() {
            b !== d ? null === document.querySelector(a) ? b++ : (b = 0, clearInterval(e), c(!0, document.querySelector(a))) : (b = 0, clearInterval(e), c(!1))
        }, 200)
    },
    ua = navigator.userAgent,
    isIosWebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ua),
    isAndroidApp = /Sahibinden/i.test(ua),
    isAndroidWebview = /wv/i.test(ua),
    isWebview = isIosWebview || isAndroidWebview || isAndroidApp,
    isIos = /(iphone|ipod|ipad)/i.test(ua),
    isAndroid = /android/i.test(ua),
    isMobile = isIos || isAndroid,
    isMac = -1 < navigator.platform.indexOf("Mac"),
    isWin = -1 < navigator.platform.indexOf("Win"),
    simpleUAChecker = function() {
        checkIfElementExist("body", 20, function(a, d) {
            a && (isMobile ? (d.classList.add(isIos ? "ios" : "android"), isWebview && d.classList.add("webview")) : (d.classList.add("desktop"), d.classList.add(isMac ? "mac" : isWin ? "win" : "other-os")))
        })
    };
simpleUAChecker();
$(function() {
    checkSelectedCombos();
    $("body").on("change", "select", checkSelectedCombos)
});
$(document).ajaxComplete(function() {
    checkSelectedCombos()
});
document.ready = function(a) {
    if (document.addEventListener) document.addEventListener("DOMContentLoaded", a, !1);
    else if (document.attachEvent) {
        try {
            var d = null != window.frameElement
        } catch (b) {}
        if (document.documentElement.doScroll && !d) {
            var c = function() {
                try {
                    document.documentElement.doScroll("left"), a()
                } catch (b) {
                    setTimeout(c, 10)
                }
            };
            c()
        }
        d && document.attachEvent("onreadystatechange", function() {
            "complete" === document.readyState && a()
        })
    }
};
window.debug = function() {
    function a(a) {
        !g || !h && b && b.log || g.apply(d, a)
    }
    for (var d = this, c = Array.prototype.slice, b = d.console, e = {}, g, h, k = 9, m = ["error", "warn", "info", "debug", "log"], p = "assert clear count dir dirxml exception group groupCollapsed groupEnd profile profileEnd table time timeEnd trace".split(" "), r = p.length, z = []; 0 <= --r;)(function(a) {
        e[a] = function() {
            0 !== k && b && b[a] && b[a].apply(b, arguments)
        }
    })(p[r]);
    for (r = m.length; 0 <= --r;)(function(g, h) {
        e[h] = function() {
            var e = c.call(arguments),
                p = [h].concat(e);
            z.push(p);
            a(p);
            b && (0 < k ? k > g : m.length + k <= g) && (b.firebug ? b[h].apply(d, e) : b[h] ? b[h](e) : b.log(e))
        }
    })(r, m[r]);
    e.setLevel = function(a) {
        k = "number" === typeof a ? a : 9
    };
    e.setCallback = function() {
        var b = c.call(arguments),
            e = z.length,
            d = e;
        g = b.shift() || null;
        h = "boolean" === typeof b[0] ? b.shift() : !1;
        for (d -= "number" === typeof b[0] ? b.shift() : e; d < e;) a(z[d++])
    };
    return e
}();

function _e() {
    if ("undefined" === typeof _bindeni18n) return "[]";
    var a = _bindeni18n["default"] || {},
        d = arguments[0],
        c = (_bindeni18n[documentLanguage] || {})[d];
    if (!c && (c = a[d], !c)) return "[]";
    a = arguments.length;
    if (0 == a) return c;
    if (1 < a)
        for (d = 1; d < a; d++) c = c.replace("{" + (d - 1) + "}", arguments[d]);
    return c
};
var cookieUtils = {
    localStorageEnabled: function() {
        try {
            return localStorage.setItem("test", "test"), localStorage.getItem("test"), !0
        } catch (a) {
            return !1
        }
    }(),
    setStorage: function(a, d, c) {
        this.localStorageEnabled ? window.localStorage[a] = d : (c = c ? {
            expires: c
        } : null) ? $.cookie(a, d, c) : $.cookie(a, d)
    },
    setCookie: function(a, d, c) {
        var b = new Date;
        c ? b = c : b.setTime(b.getTime() + 9E5);
        document.cookie = a + "\x3d" + d + ";expires\x3d" + b.toGMTString() + ";domain\x3d.sahibinden.com;path\x3d/"
    },
    readCookie: function(a) {
        a += "\x3d";
        for (var d = document.cookie.split(";"),
                c = 0, b; c < d.length; c++) {
            for (b = d[c];
                " " == b.charAt(0);) b = b.substring(1, b.length);
            if (0 === b.indexOf(a)) return b.substring(a.length, b.length)
        }
        return null
    },
    getStorage: function(a) {
        return this.localStorageEnabled ? window.localStorage[a] : $.cookie(a)
    },
    removeCookie: function(a) {
        a && (document.cookie = a + "\x3d; expires\x3dThu, 01 Jan 1970 00:00:01 GMT; domain\x3d.sahibinden.com; path\x3d/")
    },
    removeStorage: function(a) {
        if (this.localStorageEnabled) return window.localStorage.removeItem(a);
        $.removeCookie(a)
    },
    setSessionStorage: function(a,
        d) {
        window.sessionStorage[a] = d
    },
    getSessionStorage: function(a) {
        return window.sessionStorage[a]
    },
    removeSessionStorage: function(a) {
        return window.sessionStorage.removeItem(a)
    }
};
window.cookieUtils = cookieUtils;
(function() {
    var a = function(a) {
        var c = document.getElementsByTagName("head")[0],
            b = document.createElement("script");
        b.async = !0;
        b.src = "https://tags.bluekai.com/site/39228?ret\x3djs";
        b.onload = a;
        c.appendChild(b)
    };
    cookieUtils.readCookie("segIds") || a(function() {
        if (bk_results) {
            var a = bk_results.campaigns.map(function(a) {
                    return a.campaign
                }).join("|"),
                c = new Date;
            c.setTime(c.getTime() + 864E5);
            cookieUtils.setCookie("segIds", a, c)
        }
    })
})();
var blueKaiHelper;
blueKaiHelper = function() {
    var a = function() {
            $.ajax({
                url: "/ajax/bluekai/match",
                type: "POST",
                data: "",
                dataType: "json",
                contentType: "application/json; charset\x3dutf-8",
                success: function() {}
            })
        },
        d = function(a, c) {
            a = {
                name: a,
                value: c
            };
            null != pageTrackData && pageTrackData.dmpData.push(a)
        },
        c = function() {
            "function" === typeof window.bk_async && bk_async()
        };
    return {
        userBlueKaiMatch: function(b) {
            d("id", b);
            setTimeout(a, 3E3)
        },
        feedPhint: function(a, c) {
            d(a, c)
        },
        addPhintToDmpDataAndExecute: function(a, e) {
            d(a, e);
            c();
            null != pageTrackData &&
                pageTrackData.dmpData.pop()
        },
        feedPhintAndExecute: function(a, c) {
            bk_addPageCtx(a, c);
            BKTAG.doTag(39228, 4)
        },
        executeDmpData: function() {
            c()
        }
    }
}();
$(function() {
    $(document).ready(function() {
        function a(a, b, c, e, d) {
            this.el = a;
            this.key = b;
            this.value = c;
            this.initialized = !1;
            this.type = e;
            this.hrefValue = d
        }

        function d(a) {
            var b = $(this).find("[data-dmp-click]").data("dmpClick"),
                e = $(this).find("[data-dmp-click]").data("dmpValue") || 1;
            c(this, b, e, "submit").handleEvent(a)
        }

        function c(b, c, e, d, r) {
            var z = g[b];
            null == z && (z = new a(b, c, e, d, r), g[b] = z);
            return z
        }

        function b(a, b, c) {
            (a = e(a, c)) && b && "" !== a && blueKaiHelper.addPhintToDmpDataAndExecute(a, b)
        }

        function e(a, b) {
            var c = (window.DMP_HANDLERS || {})[a];
            b = b ? "function" === typeof c ? c.apply(this, [b]) : c : "function" === typeof c ? c.apply(this) : c;
            return a && "" !== a ? b || a : a
        }
        var g = {};
        a.prototype.handleEvent = function(a) {
            var c = this;
            c.initialized || (a.preventDefault(), c.initialized = !0, "href" === c.type && c.hrefValue && "" !== c.hrefValue && (a.stopImmediatePropagation(), b(c.key, c.value, a)), setTimeout(function() {
                    "submit" === c.type ? (b(c.key, c.value, a), c.el.submit()) : "href" === c.type && c.hrefValue && "" !== c.hrefValue ? window.location = c.hrefValue : (b(c.key, c.value, a), c.el.click())
                },
                100))
        };
        $("[data-dmp-click][type\x3dsubmit]:not([href])").each(function() {
            $(this).closest("form").submit(d)
        });
        $("body").on("click", "[data-dmp-click][type!\x3dsubmit]:not([href])", function(a) {
            var b = $(this).data("dmpClick"),
                e = $(this).data("dmpValue") || 1;
            c(this, b, e, "click").handleEvent(a)
        }).on("click", "[data-dmp-click][href]", function(a) {
            var b = $(this).data("dmpClick"),
                e = $(this).data("dmpValue") || 1,
                d = $(this).attr("href");
            c(this, b, e, "href", d).handleEvent(a)
        })
    })
});
$(function() {
    var a = $("body"),
        d = $(".header \x3e ul"),
        c = $(".header .notifications"),
        b = $(".header .messages span"),
        e = $(".username-area a"),
        g = $(".favorite-classified span"),
        h = 0,
        k = !1,
        m, p = function(a) {
            a && (a = "number" == typeof a ? a : parseInt(a), a = 99 <= a ? "99+" : a);
            return a
        },
        r = function(a) {
            var b = new Date(1E3 * a);
            a = "Ocak \u015eubat Mart Nisan May\u0131s Haziran Temmuz A\u011fustos Eyl\u00fcl Ekim Kas\u0131m Aral\u0131k".split(" ")[b.getMonth()];
            var c = b.getDate(),
                e = b.getHours(),
                b = b.getMinutes();
            return c + " " + a + " / " +
                z(e) + ":" + z(b)
        },
        z = function(a) {
            return a = ("0" + a).slice(-2)
        },
        v = function(a) {
            $.ajax({
                url: "https://www.sahibinden.com/ajax/topics?secureTradeOnly\x3d" + a,
                xhrFields: {
                    withCredentials: !0
                },
                complete: function(b) {
                    if (b.responseJSON) {
                        var c = $(".user-messages-tooltip"),
                            e = $("." + (a ? "get-" : "") + "messages-box", c);
                        b = b.responseJSON;
                        var d = b.length,
                            g = "",
                            h, t = 0;
                        k && $(".header-tabs .get-messages-link", c).show();
                        m && (0 < m.normalClassifieds && (h = 99 < m.normalClassifieds ? "99+" : m.normalClassifieds, $(".header-tabs .messages-link", c).addClass("hasNotification").find("span").text(h)),
                            0 < m.informationNotifications && (h = 99 < m.informationNotifications ? "99+" : m.informationNotifications, $(".header-tabs .informations-link", c).addClass("hasNotification").find("span").text(h)), k && m.secureTradeClassifieds && (h = 99 < m.secureTradeClassifieds ? "99+" : m.secureTradeClassifieds, $(".header-tabs .get-messages-link", c).addClass("hasNotification").find("span").text(h)));
                        $(".user-tooltip-content", c).hide();
                        e.show();
                        if (0 < d) {
                            for (t; t < d; t++) h = b[t].messages[0], g += '\x3cli class\x3d"' + (h.unread ? "unread" : "") + '"\x3e\x3ca href\x3d"https://banaozel.sahibinden.com/mesajlarim/detay/' +
                                h.relatedId + "/" + h.threadId + '"\x3e' + (b[t].classified.imageUrl ? '\x3cimg src\x3d"' + b[t].classified.imageUrl + '" width\x3d"53" height\x3d"40" alt\x3d""\x3e' : '\x3cspan class\x3d"classified-photo"\x3e\x3c/span\x3e') + "\x3ch5\x3e" + h.correspondentUser.name + "\x3c/h5\x3e\x3ch6\x3e" + b[t].title + '\x3c/h6\x3e\x3cspan class\x3d"date"\x3e' + r(h.date) + "\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e";
                            $("ul", e).html(g);
                            e.addClass("full")
                        } else e.addClass("empty");
                        c.removeClass("loading-status")
                    }
                }
            })
        },
        A = function() {
            $.ajax({
                url: "https://www.sahibinden.com/ajax/notifications",
                xhrFields: {
                    withCredentials: !0
                },
                complete: function(a) {
                    if (a.responseJSON) {
                        var b = $(".user-messages-tooltip"),
                            c = $(".informations-box", b);
                        a = a.responseJSON;
                        var e = a.length,
                            d = "",
                            g, h = 0;
                        $(".user-tooltip-content", b).hide();
                        c.show();
                        if (0 < e) {
                            for (h; h < e; h++) g = a[h], d += '\x3cli class\x3d"' + ("WAITING" == g.status ? "unread" : "") + '"\x3e\x3ca href\x3d"https://banaozel.sahibinden.com/bilgilendirmeler/' + g.id + '"\x3e\x3ch6\x3e' + g.notificationDetail.title + "\x3c/h6\x3e\x3cp\x3e" + r(g.entryDateTime) + "\x3c/p\x3e\x3c/a\x3e\x3c/li\x3e";
                            $("ul", c).html(d);
                            c.addClass("full")
                        } else c.addClass("empty");
                        b.removeClass("loading-status")
                    }
                }
            })
        },
        n = function(a) {
            $.ajax({
                url: "/ajax/login/info",
                type: "POST",
                complete: function(b) {
                    return b.responseJSON && b.responseJSON.body ? a(b.responseJSON.body) : a()
                }
            })
        },
        w = function(a) {
            var b = location.search;
            a && (b += location.search ? "\x26" + a : "?" + a);
            window.location = "https://secure.sahibinden.com/giris?return_url\x3d" + encodeURIComponent(location.pathname + b)
        },
        C = function(a) {
            $.ajax({
                url: "/ajax/login/userfavorites",
                complete: function(b) {
                    return b.responseJSON &&
                        b.responseJSON.body ? a(b.responseJSON.body) : a()
                }
            })
        },
        B = function(a, b, c) {
            c = c ? c : {};
            if (b) {
                if (b.total) h += b.total;
                else {
                    b.unreadUnboundExpertiseReportAddedCount && (h += b.unreadUnboundExpertiseReportAddedCount);
                    b.unreadBoundExpertiseReportAddedCount && (h += b.unreadBoundExpertiseReportAddedCount);
                    if (b.unreadUnboundExpertiseReportAddedCount || b.unreadBoundExpertiseReportAddedCount) b.total = h;
                    b.total || c.isParis || ($("#" + a).prev().remove(), $("#" + a).remove())
                }
                $.each(b, function(b, c) {
                    c ? $("#" + a + " ." + b).addClass("active").find("span").text(p(c)) :
                        $("#" + a + " ." + b).parent().remove()
                })
            }
        },
        t = function(a) {
            if (a) {
                B("classifiedNotification", a.classifiedNotification);
                a.favoriteNotification.total && g.text(p(a.favoriteNotification.total));
                a.secureTradeNotification && (B("salesNotification", a.secureTradeNotification.sales), B("purchasesNotification", a.secureTradeNotification.purchases));
                if (a.parisNotification) {
                    var b = a.parisNotification.sales,
                        c = a.parisNotification.purchases;
                    b["total-sale"] = b.total;
                    c["total-purchase"] = c.total;
                    var e = b.total + c.total;
                    B("parisNotification",
                        b, {
                            isParis: !0
                        });
                    B("parisNotification", c, {
                        isParis: !0
                    });
                    0 >= e && ($("#parisNotification").prev().remove(), $("#parisNotification").remove())
                }
                a.expertiseNotifications && B("expertiseReportNotification", a.expertiseNotifications);
                a.myDepositNotifications && B("myDepositNotification", a.myDepositNotifications);
                0 != h ? $(".header .notifications span").text(p(h)) : $(".header .notifications span").text("")
            }
        };
    $.ajax({
        url: "https://banaozel.sahibinden.com/ajax/login/info",
        type: "POST",
        xhrFields: {
            withCredentials: !0
        },
        complete: function(g) {
            blueKaiHelper.feedPhint("geoip_city",
                cookieUtils.readCookie("geoipCity"));
            blueKaiHelper.feedPhint("geoip_isp", cookieUtils.readCookie("geoipIsp"));
            var n = window._sift = window._sift || [],
                B = void 0 === function(a) {
                    if (a = document.cookie.match(new RegExp("(^| )" + a + "\x3d([^;]+)"))) return a[2]
                }("testBox") ? "cf7e6c3cf0" : "d9fad17756";
            n.push(["_setAccount", B]);
            g.responseJSON && g.responseJSON.body ? (n.push(["_setUserId", g.responseJSON.body.siftMetaUserId || ""]), n.push(["_setSessionId", g.responseJSON.body.siftMetaSessionId || ""])) : (n.push(["_setUserId", ""]),
                n.push(["_setSessionId", ""]));
            n.push(["_trackPageview"]);
            n = document.createElement("script");
            n.src = "https://cdn.sift.com/s.js";
            document.body.appendChild(n);
            if (g.responseJSON && g.responseJSON.body) {
                var n = g.responseJSON.body,
                    B = n.unreadNotifications,
                    v = $("#profileArea");
                d.addClass("user-login");
                e.text(n.userNameSurname);
                g.responseJSON.storeInfo && g.responseJSON.storeInfo.capabilities && 0 <= g.responseJSON.storeInfo.capabilities.indexOf("FEATURE_MONACO_VIEW") && ($(".header-container .header a").each(function() {
                    if ($(this).attr("href") &&
                        0 <= $(this).attr("href").indexOf("banaozel.")) {
                        var a = $(this).attr("href").replace("banaozel.", "ofisim.");
                        $(this).attr("href", a)
                    }
                }), $("[data-proapp-title]").each(function() {
                    $(this).text(_e($(this).data("proappTitle")))
                }));
                0 != n.headerType && (1 == n.headerType && a.addClass("type-individual"), 2 == n.headerType && a.addClass("type-store-without-set"), 3 == n.headerType && a.addClass("type-store"), (m = n.unreadMessages) && b.text(p(m.total || "")), t(B), $("a", c).click(function() {
                    var a = $(".user-notifications-tooltip");
                    0 == h ?
                        a.addClass("empty").removeClass("full") : (a.removeClass("empty").addClass("full"), $(".header-custom-menu", a).show(), $(".header-tabs .active", a).addClass("hasNotification").find("span").text(p(h)))
                }));
                n.onlyAdUser && ($(".messages").remove(), $(".favorite-classified").remove(), $(".favorite-search").remove(), $(".new-classified").remove(), $(".my-account-classifieds").remove(), $(".get-links").remove(), $(".my-basket-link").remove(), $(".my-account-favorites").remove(), $(".store-management").remove(), $(".classifiedAddFavorite").remove(),
                    $(".followUser").remove(), $(".faceted-save-search").remove(), $(".store-links").remove());
                n.expertiseUser ? ($(".new-classified").remove(), $(".not-allowed-for-expertise").remove(), $(".messages").remove(), $(".add-expertise-report").css("display", "block")) : $(".add-expertise-report").remove();
                n.userBlueKaiMatched || blueKaiHelper.userBlueKaiMatch(n.blueKaiId);
                n.storeInfo ? (n.storeInfo.profilePhoto && 0 === $(".store-profile-photo").length && v.prepend('\x3cimg class\x3d"store-profile-photo" src\x3d"' + n.storeInfo.profilePhoto +
                    '" height\x3d"50" width\x3d"50" alt\x3d""\x3e').find(".add-profile-photo").hide(), v.find(".store-name").text(n.storeInfo.storeName), $(".store-url").attr("href", "https://" + n.storeInfo.storeUrl + ".sahibinden.com")) : $(".store-links").remove();
                v.find(".name-surname").text(n.userNameSurname);
                if (-1 != n.storeInfo.capabilities.indexOf("FEATURE_GET_BUY") || -1 != n.storeInfo.capabilities.indexOf("FEATURE_GET_SELL")) k = !0, $(".get-messages-link").show(); - 1 == n.storeInfo.capabilities.indexOf("FEATURE_GET_BUY") && -1 ==
                    n.storeInfo.capabilities.indexOf("DASHBOARD_INDIVIDUAL") && $(".my-purchase-transactions").remove(); - 1 == n.storeInfo.capabilities.indexOf("FEATURE_GET_SELL") && $(".my-sale-transactions").remove(); - 1 == n.storeInfo.capabilities.indexOf("FEATURE_GET_BUY") && -1 == n.storeInfo.capabilities.indexOf("FEATURE_GET_SELL") && $(".get-links").remove(); - 1 == n.storeInfo.capabilities.indexOf("FEATURE_BULK_PROMOTION_ONLINE") && $(".bulk-promotion").remove(); - 1 == n.storeInfo.capabilities.indexOf("FEATURE_REAL_ESTATE_OFFICE") &&
                    $(".emlak-ofisim").remove();
                0 <= n.storeInfo.capabilities.indexOf("DASHBOARD_VEHICLE") && (window.hasVehicleCorporateFlag = !0);
                0 <= n.storeInfo.capabilities.indexOf("DASHBOARD_INDIVIDUAL") && (window.hasIndividualFlag = !0);
                0 <= n.storeInfo.capabilities.indexOf("JUMP_TO_PHOTO_SECTION") && $("#post-new-classified").attr("href", "https://banaozel.sahibinden.com/ilan-ver/fotograf-video");
                n.storeInfo.capabilities.includes("FEATURE_PARIS") && ($(".get-links").remove(), $(".paris-links").show());
                g = "oto360/hasar-sorgulama"; -
                1 === n.storeInfo.capabilities.indexOf("FEATURE_VEHICLE_DAMAGE_INQUIRY") && -1 !== n.storeInfo.capabilities.indexOf("FEATURE_VEHICLE_DETAIL_INQUIRY") && (g = "arac-detay-sorgu");
                $(".category-damage-inquiry a").attr("href", "https://banaozel.sahibinden.com/" + g);
                $(document).trigger("userDataLoaded", {
                    loggedIn: !0,
                    corporateUser: 2 == n.headerType || 3 == n.headerType,
                    induvidualUser: 1 == n.headerType,
                    vehicleUser: 0 <= n.storeInfo.capabilities.indexOf("DASHBOARD_VEHICLE"),
                    estateUser: 0 <= n.storeInfo.capabilities.indexOf("FEATURE_REAL_ESTATE_OFFICE"),
                    expertiseUser: n.expertiseUser
                })
            } else d.addClass("user-unlogin"), $(document).trigger("userDataLoaded", {
                loggedIn: !1,
                corporateUser: !1,
                induvidualUser: !1,
                vehicleUser: !1,
                estateUser: !1,
                expertiseUser: !1
            });
            $(document).trigger("userCapibilitiesLoaded")
        }
    });
    $(".messages a").click(function(a) {
        a.preventDefault();
        v(!1);
        $(".header-tabs li.messages-link").click()
    });
    $(document).on("click", ".my-basket-link a", function(a) {
        var b = $(this).attr("href");
        a.preventDefault();
        a = "OtherPostAdPage";
        "/eposta-kayit/tebrikler/" == window.location.pathname ?
            a = "RegisterSuccessPage" : "/odeme-basarili" == window.location.pathname ? a = "SuccessStep" : "/odeme" == window.location.pathname ? a = "PaymentStep" : "/" == window.location.pathname || "/en" == window.location.pathname ? a = "HomePage" : -1 < window.location.pathname.indexOf("/ilan/") && (a = "ClassifiedDetailPage");
        $.ajax({
            url: "/ajax/promotion/events/dopingFunnel/trigger",
            type: "POST",
            data: JSON.stringify({
                url: window.location.href,
                clientRepo: "binden",
                page: a,
                action: "BasketView"
            }),
            dataType: "json",
            contentType: "application/json; charset\x3dutf-8",
            xhrFields: {
                withCredentials: !0
            },
            success: function(a) {
                if (a.success) {
                    var c = new Date;
                    c.setTime(c.getTime() + 36E5);
                    $.cookie(a.data.trackCookieName, a.data.trackId, {
                        expires: c,
                        path: "/",
                        domain: "sahibinden.com"
                    })
                }
                window.location = b
            }
        });
        return !1
    });
    $(document).on("click", ".header-tabs li", function(a) {
        a.preventDefault();
        a = $(".user-messages-tooltip");
        var b;
        $(this).removeClass("active").siblings().removeClass("active");
        $(".user-tooltip-content", a).hide();
        a.addClass("loading-status");
        b = $(this).removeClass("hasNotification").removeClass("active").attr("class").replace("link",
            "box");
        $(this).addClass("active");
        $("." + b, a).removeClass("full").removeClass("empty");
        "messages-box" == b && v(!1);
        "get-messages-box" == b && v(!0);
        "informations-box" == b && A()
    });
    $(document).on("click", "#readAllNotifications", function(a) {
        a.preventDefault();
        $.ajax({
            url: "https://www.sahibinden.com/ajax/notifications/markAllAsRead",
            xhrFields: {
                withCredentials: !0
            },
            complete: function() {
                var a = $(".user-notifications-tooltip"),
                    b = function(b) {
                        b = $("#" + b, a);
                        b.prev().remove();
                        b.remove()
                    };
                $("span", c).text("");
                $(".header-tabs .active",
                    a).removeClass("hasNotification").find("span").hide();
                a.addClass("empty").removeClass("full");
                b("classifiedNotification");
                b("salesNotification");
                b("purchasesNotification");
                b("parisNotification")
            }
        })
    });
    $("#clearSearchPhrase").on("click", function(a) {
        a.preventDefault();
        $("#searchText").val("")
    });
    $(".favorite-search a").click(function(a) {
        a.preventDefault();
        window.gaTrackEvent("Tiklama Takibi", "header", "header_favori_aramalar");
        $.ajax({
            url: "/ajax/login/userfavorites",
            complete: function(a) {
                if (a.responseJSON &&
                    a.responseJSON.body) {
                    a = a.responseJSON.body;
                    var b = 0,
                        c = a.favoriteSearches.length,
                        e = $(".favorite-search-tooltip"),
                        d = e.find(".header-custom-menu"),
                        g = e.find(".favorite-search-sub-menu");
                    e.removeClass("loading-status");
                    g.html("");
                    if (0 < c) {
                        for (b; b < c; b++) g.prepend('\x3cli class\x3d"favoriteSearchItem"\x3e\x3ca href\x3d"https://www.sahibinden.com' + a.favoriteSearches[b].searchTerms + '"\x3e' + a.favoriteSearches[b].title + "\x3c/a\x3e\x3c/li\x3e");
                        d.show();
                        e.removeClass("empty").addClass("full")
                    } else e.removeClass("full").addClass("empty")
                }
            }
        })
    });
    $(document).on("click", ".favorite-search-switch", function(a) {
        a.preventDefault();
        n(function(a) {
            a ? ($(".favorite-search-container").toggleClass("close"), $(".favorite-search-container").hasClass("close") || C(function(a) {
                if (a) {
                    var b = 0;
                    a = a.favoriteSearches;
                    $(".favorite-search-container .empty-list").hide();
                    $(".favorite-search-list").empty().removeClass("loading-status").show();
                    if (a.length) {
                        for (b; b < a.length; b++) $(".favorite-search-list").prepend('\x3cli class\x3d"item"\x3e\x3ca href\x3d"https://www.sahibinden.com' +
                            a[b].searchTerms + '"\x3e' + a[b].title + "\x3c/a\x3e\x3c/li\x3e");
                        0 < a.length && $(".favorite-search-container .show-all").css("display", "block")
                    } else $(".favorite-search-list").hide(), $(".favorite-search-container .empty-list").show()
                }
            })) : w("openFavoriteSearch")
        })
    });
    $(document).mouseup(function(a) {
        $(".favorite-search-container").is(a.target) || 0 !== $(".favorite-search-container").has(a.target).length || $(".favorite-search-switch").is(a.target) || 0 !== $(".favorite-search-switch").has(a.target).length || $(".favorite-search-container").addClass("close")
    });
    var F = $(".sourceTrigger");
    if (0 < F.length) try {
        F.click(function() {
            var a = $(this).attr("data-source");
            if (void 0 != a && null != a && "" != a) {
                var b = new Date;
                b.setTime(b.getTime() + 9E5);
                $.cookie("dopingTrigger", a, {
                    expires: b,
                    path: "/",
                    domain: "sahibinden.com"
                })
            }
        })
    } catch (y) {}
    F = $("#post-new-classified, #post-new-classified-sub1, #post-new-classified-from-registration-completed");
    if (0 < F.length) try {
        F.on("click", function(a) {
            var b = $(this).attr("href");
            a.preventDefault();
            a = "PostAdClick";
            "post-new-classified-sub1" == this.id &&
                (a = "PostAdClickSuccessPage");
            var c = "OtherPostAdPage";
            "/eposta-kayit/tebrikler/" == window.location.pathname ? c = "RegisterSuccessPage" : "/odeme-basarili" == window.location.pathname ? c = "SuccessStep" : "/odeme" == window.location.pathname ? c = "PaymentStep" : "/" == window.location.pathname || "/en" == window.location.pathname ? c = "HomePage" : -1 < window.location.pathname.indexOf("/ilan/") && (c = "ClassifiedDetailPage");
            $.ajax({
                url: "/ajax/my/classifieds/events/postClassifiedFunnel/trigger",
                type: "POST",
                data: JSON.stringify({
                    url: window.location.href,
                    clientRepo: "binden",
                    currentPage: c,
                    action: a
                }),
                dataType: "json",
                contentType: "application/json; charset\x3dutf-8",
                xhrFields: {
                    withCredentials: !0
                },
                success: function(a) {
                    if (a.success) {
                        var c = new Date;
                        c.setTime(c.getTime() + 36E5);
                        $.cookie(a.data.trackCookieName, a.data.trackId, {
                            expires: c,
                            path: "/",
                            domain: "sahibinden.com"
                        })
                    }
                    window.location = b
                }
            });
            $.ajax({
                url: "/ajax/promotion/events/dopingFunnel/trigger",
                type: "POST",
                data: JSON.stringify({
                    url: window.location.href,
                    clientRepo: "binden",
                    page: c,
                    action: a
                }),
                dataType: "json",
                contentType: "application/json; charset\x3dutf-8",
                xhrFields: {
                    withCredentials: !0
                },
                success: function(a) {
                    if (a.success) {
                        var c = new Date;
                        c.setTime(c.getTime() + 36E5);
                        $.cookie(a.data.trackCookieName, a.data.trackId, {
                            expires: c,
                            path: "/",
                            domain: "sahibinden.com"
                        })
                    }
                    window.location = b
                }
            });
            return !1
        })
    } catch (y) {
        window.location = F.attr("href")
    }
    $("body").on("click", "[data-funnel-trigger-register]", function(a) {
        a.preventDefault();
        var b = $(this).attr("href"),
            c;
        c = function(a) {
            return -1 < window.location.search.indexOf("?return_url") &&
                -1 < decodeURIComponent(window.location.search).indexOf(a) ? !0 : !1
        };
        a = {
            header: "HeaderUserRegisterClick",
            loginGet: "GETUserRegisterClick",
            login: "LoginUserRegisterClick",
            corporate: "CorporateUserRegisterClick"
        }[$(this).data("funnel-trigger-register")] || "Other";
        c = "/eposta-kayit/tebrikler/" == window.location.pathname ? "RegisterSuccessPage" : "/oto360/arac-degerleme/alirken" == window.location.pathname ? "VehiclePriceEvaluationBuying" : "/oto360/arac-degerleme/satarken" == window.location.pathname ? "VehiclePriceEvaluationSelling" :
            "/oto360/hasar-sorgulama" == window.location.pathname || c("fromDamangeInquiry") ? "VehicleInquiry" : "/oto360/hizmetler/iadeli-kapora" == window.location.pathname ? "DepositLanding" : "/oto360/arac-sigorta-teklifleri" == window.location.pathname ? "InsuranceLanding" : "/emlak360/emlak-endeksi" == window.location.pathname ? "RealEstateIndex" : c("oto360/hasar-sorgulama") ? "VehicleInquiry" : c("/oto360/trafik-sigortasi-teklifi-al") ? "InsuranceLanding" : c("emlak360/emlak-endeksi") ? "RealEstateIndex" : "GETUserRegisterClick" === a || c("/hemen-al?classifiedId") ?
            "SecureTradeBuyNow" : c("showFolders\x3dtrue") || c("ilaniFavoriyeEkle") ? "FavoriteClassified" : c("showAddFavoriteSeller\x3dtrue") || c("saticiyiFavorilereEkle") ? "FavoriteSeller" : c("saveSearch\x3dtrue") || c("addToFavoriteSearches") ? "FavoriteSearch" : c("/ilan-ver/adim-1") ? "PostClassified" : c("/mesajlarim/detay/") ? "UserMessage" : c("/arac-degerleme/alirken") ? "VehiclePriceEvaluationBuying" : c("/arac-degerleme/satarken") ? "VehiclePriceEvaluationSelling" : "/" == window.location.pathname || "/en" == window.location.pathname ?
            "Home" : -1 < window.location.pathname.indexOf("/ilan/") ? "ClassifiedDetail" : "/giris" == window.location.pathname ? "Login" : "/kayit" === window.location.pathname && "CorporateUserRegisterClick" === a ? "UserRegisterForm" : "/neden-magaza" === window.location.pathname ? "StoresInfoPage" : "Other";
        $.ajax({
            url: "/ajax/registration/events/userRegisterFunnel/trigger",
            type: "POST",
            data: JSON.stringify({
                clientRepo: "binden",
                page: c,
                action: a
            }),
            dataType: "json",
            contentType: "application/json; charset\x3dutf-8",
            xhrFields: {
                withCredentials: !0
            },
            success: function(a) {
                if (a.success) {
                    var b = new Date;
                    b.setTime(b.getTime() + 36E5);
                    $.cookie(a.data.trackCookieName, a.data.trackId, {
                        expires: b,
                        path: "/",
                        domain: "sahibinden.com"
                    })
                }
            },
            complete: function() {
                window.location = b
            }
        })
    });
    $("body").on("click", "[data-funnel-trace-register]", function(a) {
        a.preventDefault();
        var b = $(this).attr("href"),
            c = $(this).attr("target"),
            e = $(this).data("funnelTraceRegister");
        a = $(this).data("funnelTraceRegisterTargetid");
        e = {
            registerEmailConfirm: "EmailConfirmationPopUpEditClick",
            mailActivationConfirm: "EmailActivationPageEditClick",
            mailActivationHelp: "ReadHelpArticleClick",
            corporate: "CorporateUserRegisterClick"
        }[e] || "Other";
        e = {
            clientRepo: "binden",
            page: {
                EmailConfirmationPopUpEditClick: "EmailConfirmationPopUp",
                ReadHelpArticleClick: "EmailActivationPage",
                EmailActivationPageEditClick: "EmailActivationPage",
                CorporateUserRegisterClick: "UserRegisterForm"
            }[e] || "Other",
            action: e
        };
        a && (e.email = $("#" + a).val());
        $.ajax({
            url: "/ajax/registration/events/userRegisterFunnel/trace",
            type: "POST",
            data: JSON.stringify(e),
            dataType: "json",
            contentType: "application/json; charset\x3dutf-8",
            xhrFields: {
                withCredentials: !0
            },
            complete: function() {
                b && "#" != b && "javascript:;" != b && (c ? window.open(b, "_blank") : window.location = b)
            }
        })
    });
    var G = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" === a ? b : b & 3 | 8).toString(16)
        })
    };
    $("body").on("click", "[data-funnel-trigger-login]", function(a) {
        a.preventDefault();
        a = $(this).attr("href");
        cookieUtils.setCookie("ulfuid", G());
        window.location = a
    }); - 1 < window.location.search.indexOf("openFavoriteSearch") &&
        $(".favorite-search-switch").trigger("click");
    $("#searchText").on("focus", function() {
        window.galleryKeysEnabled = !1
    }).on("blur", function() {
        window.galleryKeysEnabled = !0
    })
});

function elementHasClass(a, d) {
    var c = "";
    (a = document.querySelector(a)) && (c = " " + a.className + " ");
    return 0 <= c.indexOf(" " + d + " ")
}
document.ready(function() {
    var a = elementHasClass(".header", "only-language-area"),
        d = elementHasClass(".cms_header", "cms_header"),
        c = elementHasClass(".header", "without-search-and-button"),
        b = elementHasClass(".header-container", "without-background");
    (a || d || c || b) && null !== document.querySelector(".freeClassifiedLimitNotice") && (document.querySelector(".freeClassifiedLimitNotice").style.display = "none");
    if (jQuery) {
        var e = $(".language-selection");
        $(document).on("click", function(a) {
            $(a.target).hasClass("current-language") ||
                0 < $(a.target).parents(".current-language").length ? e.toggleClass("active") : e.hasClass("active") && e.removeClass("active")
        });
        $(document).on("userDataLoaded", function(a, b) {
            b.corporateUser && $("[corporate-href]").each(function() {
                $(this).attr("href", $(this).attr("corporate-href"))
            })
        })
    }
});

(function(a, d, c) {
    function b() {
        b.history = b.history || [];
        b.history.push(arguments);
        if ("object" === typeof console) {
            var a = console[console.warn ? "warn" : "log"],
                c = Array.prototype.slice.call(arguments);
            "string" === typeof arguments[0] && (c[0] = "qTip2: " + c[0]);
            a.apply ? a.apply(console, c) : a(c)
        }
    }

    function e(b) {
        var c;
        if (!b || "object" !== typeof b) return !1;
        if (null === b.metadata || "object" !== typeof b.metadata) b.metadata = {
            type: b.metadata
        };
        if ("content" in b) {
            if (null === b.content || "object" !== typeof b.content || b.content.jquery) b.content = {
                text: b.content
            };
            c = b.content.text || !1;
            !a.isFunction(c) && (!c && !c.attr || 1 > c.length || "object" === typeof c && !c.jquery) && (b.content.text = !1);
            if ("title" in b.content) {
                if (null === b.content.title || "object" !== typeof b.content.title) b.content.title = {
                    text: b.content.title
                };
                c = b.content.title.text || !1;
                !a.isFunction(c) && (!c && !c.attr || 1 > c.length || "object" === typeof c && !c.jquery) && (b.content.title.text = !1)
            }
        }
        "position" in b && (null === b.position || "object" !== typeof b.position) && (b.position = {
            my: b.position,
            at: b.position
        });
        "show" in
        b && (null === b.show || "object" !== typeof b.show) && (b.show = b.show.jquery ? {
            target: b.show
        } : {
            event: b.show
        });
        "hide" in b && (null === b.hide || "object" !== typeof b.hide) && (b.hide = b.hide.jquery ? {
            target: b.hide
        } : {
            event: b.hide
        });
        "style" in b && (null === b.style || "object" !== typeof b.style) && (b.style = {
            classes: b.style
        });
        a.each(A, function() {
            this.sanitize && this.sanitize(b)
        });
        return b
    }

    function g(b, g, h, k) {
        function m(a) {
            var b = 0,
                c, e = g;
            for (a = a.split("."); e = e[a[b++]];) b < a.length && (c = e);
            return [c || g, a.pop()]
        }

        function p() {
            var a = g.style.widget;
            x.toggleClass("ui-widget", a).toggleClass("ui-tooltip-default", g.style["default"] && !a);
            M.content.toggleClass("ui-widget-content", a);
            M.titlebar && M.titlebar.toggleClass("ui-widget-header", a);
            M.button && M.button.toggleClass("ui-tooltip-icon", !a)
        }

        function r(a) {
            M.title && (M.titlebar.remove(), M.titlebar = M.title = M.button = null, !1 !== a && u.reposition())
        }

        function z() {
            var b = g.content.title.button,
                c = "string" === typeof b ? b : "Close tooltip";
            M.button && M.button.remove();
            M.button = b.jquery ? b : a("\x3ca /\x3e", {
                "class": "ui-state-default ui-tooltip-close " +
                    (g.style.widget ? "" : "ui-tooltip-icon"),
                title: c,
                "aria-label": c
            }).prepend(a("\x3cspan /\x3e", {
                "class": "ui-icon ui-icon-close",
                html: "\x26times;"
            }));
            M.button.appendTo(M.titlebar).attr("role", "button").click(function(a) {
                x.hasClass("ui-state-disabled") || u.hide(a);
                return !1
            });
            u.redraw()
        }

        function K() {
            var b = J + "-title";
            M.titlebar && r();
            M.titlebar = a("\x3cdiv /\x3e", {
                "class": "ui-tooltip-titlebar " + (g.style.widget ? "ui-widget-header" : "")
            }).append(M.title = a("\x3cdiv /\x3e", {
                id: b,
                "class": "ui-tooltip-title",
                "aria-atomic": !0
            })).insertBefore(M.content).delegate(".ui-tooltip-close",
                "mousedown keydown mouseup keyup mouseout",
                function(b) {
                    a(this).toggleClass("ui-state-active ui-state-focus", "down" === b.type.substr(-4))
                }).delegate(".ui-tooltip-close", "mouseover mouseout", function(b) {
                a(this).toggleClass("ui-state-hover", "mouseover" === b.type)
            });
            g.content.title.button ? z() : u.rendered && u.redraw()
        }

        function ba(c, e) {
            var d = M.title;
            if (!u.rendered || !c) return !1;
            a.isFunction(c) && (c = c.call(b, q.event, u));
            if (!1 === c) return r(!1);
            c.jquery && 0 < c.length ? d.empty().append(c.css({
                display: "block"
            })) : d.html(c);
            u.redraw();
            !1 !== e && u.rendered && x.is(":visible") && u.reposition(q.event)
        }

        function R(e, d) {
            function g(b) {
                function e(c) {
                    c && (delete n[c.src], clearTimeout(u.timers.img[c.src]), a(c).unbind(S));
                    a.isEmptyObject(n) && (u.redraw(), !1 !== d && u.reposition(q.event), b())
                }
                var k, n = {};
                if (0 === (k = h.find("img:not([height]):not([width])")).length) return e();
                k.each(function(b, d) {
                    if (n[d.src] === c) {
                        var g = 0;
                        (function E() {
                            if (d.height || d.width || 3 < g) return e(d);
                            g += 1;
                            u.timers.img[d.src] = setTimeout(E, 700)
                        })();
                        a(d).bind("error" + S + " load" +
                            S,
                            function() {
                                e(this)
                            });
                        n[d.src] = d
                    }
                })
            }
            var h = M.content;
            if (!u.rendered || !e) return !1;
            a.isFunction(e) && (e = e.call(b, q.event, u) || "");
            e.jquery && 0 < e.length ? h.empty().append(e.css({
                display: "block"
            })) : h.html(e);
            0 > u.rendered ? x.queue("fx", g) : (N = 0, g(a.noop));
            return u
        }

        function fa() {
            function c(a) {
                if (x.hasClass("ui-state-disabled")) return !1;
                clearTimeout(u.timers.show);
                clearTimeout(u.timers.hide);
                var b = function() {
                    u.toggle(!0, a)
                };
                0 < g.show.delay ? u.timers.show = setTimeout(b, g.show.delay) : b()
            }

            function e(b) {
                if (x.hasClass("ui-state-disabled") ||
                    V || N) return !1;
                var c = a(b.relatedTarget || b.target),
                    d = c.closest("div.qtip.ui-tooltip")[0] === x[0],
                    c = c[0] === y.show[0];
                clearTimeout(u.timers.show);
                clearTimeout(u.timers.hide);
                if ("mouse" === p.target && d || g.hide.fixed && /mouse(out|leave|move)/.test(b.type) && (d || c)) try {
                    b.preventDefault(), b.stopImmediatePropagation()
                } catch (h) {} else 0 < g.hide.delay ? u.timers.hide = setTimeout(function() {
                    u.hide(b)
                }, g.hide.delay) : u.hide(b)
            }

            function k(a) {
                if (x.hasClass("ui-state-disabled")) return !1;
                clearTimeout(u.timers.inactive);
                u.timers.inactive =
                    setTimeout(function() {
                        u.hide(a)
                    }, g.hide.inactive)
            }

            function m(a) {
                x.is(":visible") && u.reposition(a)
            }
            var p = g.position,
                y = {
                    show: g.show.target,
                    hide: g.hide.target,
                    viewport: a(p.viewport),
                    document: a(document),
                    body: a(document.body),
                    window: a(d)
                },
                G = a.trim("" + g.show.event).split(" "),
                K = a.trim("" + g.hide.event).split(" "),
                r = a.browser.msie && 6 === parseInt(a.browser.version, 10);
            x.bind("mouseenter" + S + " mouseleave" + S, function(a) {
                var b = "mouseenter" === a.type;
                b && u.focus(a);
                x.toggleClass("ui-tooltip-hover", b)
            });
            g.hide.fixed &&
                (y.hide = y.hide.add(x), x.bind("mouseover" + S, function() {
                    x.hasClass("ui-state-disabled") || clearTimeout(u.timers.hide)
                }));
            /mouse(out|leave)/i.test(g.hide.event) ? "window" === g.hide.leave && y.window.bind("mouseout" + S + " blur" + S, function(a) {
                /select|option/.test(a.target) && !a.relatedTarget && u.hide(a)
            }) : /mouse(over|enter)/i.test(g.show.event) && y.hide.bind("mouseleave" + S, function(a) {
                clearTimeout(u.timers.show)
            }); - 1 < ("" + g.hide.event).indexOf("unfocus") && y.body.bind("mousedown" + S, function(c) {
                var e = a(c.target);
                !x.hasClass("ui-state-disabled") &&
                    x.is(":visible");
                e[0] !== x[0] && 0 === e.parents("div.qtip.ui-tooltip").length && 1 < e.add(b).length && !e.attr("disabled") && u.hide(c)
            });
            "number" === typeof g.hide.inactive && (y.show.bind("qtip-" + h + "-inactive", k), a.each(v.inactiveEvents, function(a, b) {
                y.hide.add(M.tooltip).bind(b + S + "-inactive", k)
            }));
            a.each(K, function(b, d) {
                b = a.inArray(d, G);
                var g = a(y.hide); - 1 < b && g.add(y.show).length === g.length || "unfocus" === d ? (y.show.bind(d + S, function(a) {
                    x.is(":visible") ? e(a) : c(a)
                }), delete G[b]) : y.hide.bind(d + S, e)
            });
            a.each(G, function(a,
                b) {
                y.show.bind(b + S, c)
            });
            "number" === typeof g.hide.distance && y.show.add(x).bind("mousemove" + S, function(a) {
                var b = q.origin || {},
                    c = g.hide.distance,
                    e = Math.abs;
                (e(a.pageX - b.pageX) >= c || e(a.pageY - b.pageY) >= c) && u.hide(a)
            });
            "mouse" === p.target && (y.show.bind("mousemove" + S, function(a) {
                n = {
                    pageX: a.pageX,
                    pageY: a.pageY,
                    type: "mousemove"
                }
            }), p.adjust.mouse && (g.hide.event && x.bind("mouseleave" + S, function(a) {
                (a.relatedTarget || a.target) !== y.show[0] && u.hide(a)
            }), y.document.bind("mousemove" + S, function(a) {
                !x.hasClass("ui-state-disabled") &&
                    x.is(":visible") && u.reposition(a || n)
            })));
            (p.adjust.resize || y.viewport.length) && (a.event.special.resize ? y.viewport : y.window).bind("resize" + S, m);
            (y.viewport.length || r && "fixed" === x.css("position")) && y.viewport.bind("scroll" + S, m)
        }

        function ga() {
            var b = [g.show.target[0], g.hide.target[0], u.rendered && M.tooltip[0], g.position.container[0], g.position.viewport[0], d, document];
            u.rendered ? a([]).pushStack(a.grep(b, function(a) {
                return "object" === typeof a
            })).unbind(S) : g.show.target.unbind(S + "-create")
        }
        var u = this,
            Q = document.body,
            J = "ui-tooltip-" + h,
            V = 0,
            N = 0,
            x = a(),
            S = ".qtip-" + h,
            M, q;
        u.id = h;
        u.rendered = !1;
        u.elements = M = {
            target: b
        };
        u.timers = {
            img: {}
        };
        u.options = g;
        u.checks = {};
        u.plugins = {};
        u.cache = q = {
            event: {},
            target: a(),
            disabled: !1,
            attr: k
        };
        u.checks.builtin = {
            "^id$": function(b, c, e) {
                b = !0 === e ? v.nextid : e;
                c = "ui-tooltip-" + b;
                !1 !== b && 0 < b.length && !a("#" + c).length && (x[0].id = c, M.content[0].id = c + "-content", M.title[0].id = c + "-title")
            },
            "^content.text$": function(a, b, c) {
                R(c)
            },
            "^content.title.text$": function(a, b, c) {
                if (!c) return r();
                !M.title && c && K();
                ba(c)
            },
            "^content.title.button$": function(a, b, c) {
                a = M.button;
                b = M.title;
                u.rendered && (c ? (b || K(), z()) : a.remove())
            },
            "^position.(my|at)$": function(a, b, c) {
                "string" === typeof c && (a[b] = new A.Corner(c))
            },
            "^position.container$": function(a, b, c) {
                u.rendered && x.appendTo(c)
            },
            "^show.ready$": function() {
                u.rendered ? u.toggle(!0) : u.render(1)
            },
            "^style.classes$": function(a, b, c) {
                x.attr("class", "ui-tooltip qtip ui-helper-reset " + c)
            },
            "^style.widget|content.title": p,
            "^events.(render|show|move|hide|focus|blur)$": function(b, c, e) {
                x[(a.isFunction(e) ?
                    "" : "un") + "bind"]("tooltip" + c, e)
            },
            "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() {
                var a = g.position;
                x.attr("tracking", "mouse" === a.target && a.adjust.mouse);
                ga();
                fa()
            }
        };
        a.extend(u, {
            render: function(c) {
                if (u.rendered) return u;
                var e = g.content.text,
                    d = g.content.title.text,
                    h = g.position,
                    k = a.Event("tooltiprender");
                a.attr(b[0], "aria-describedby", J);
                x = M.tooltip = a("\x3cdiv/\x3e", {
                    id: J,
                    "class": "ui-tooltip qtip ui-helper-reset ui-tooltip-default " + g.style.classes + " ui-tooltip-pos-" +
                        g.position.my.abbrev(),
                    width: g.style.width || "",
                    height: g.style.height || "",
                    tracking: "mouse" === h.target && h.adjust.mouse,
                    role: "alert",
                    "aria-live": "polite",
                    "aria-atomic": !1,
                    "aria-describedby": J + "-content",
                    "aria-hidden": !0
                }).toggleClass("ui-state-disabled", q.disabled).data("qtip", u).appendTo(g.position.container).append(M.content = a("\x3cdiv /\x3e", {
                    "class": "ui-tooltip-content",
                    id: J + "-content",
                    "aria-atomic": !0
                }));
                u.rendered = -1;
                V = N = 1;
                d && (K(), a.isFunction(d) || ba(d, !1));
                a.isFunction(e) || R(e, !1);
                u.rendered = !0;
                p();
                a.each(g.events, function(b, c) {
                    a.isFunction(c) && x.bind("toggle" === b ? "tooltipshow tooltiphide" : "tooltip" + b, c)
                });
                a.each(A, function() {
                    "render" === this.initialize && this(u)
                });
                fa();
                x.queue("fx", function(a) {
                    k.originalEvent = q.event;
                    x.trigger(k, [u]);
                    V = N = 0;
                    u.redraw();
                    (g.show.ready || c) && u.toggle(!0, q.event, !1);
                    a()
                });
                return u
            },
            get: function(a) {
                switch (a.toLowerCase()) {
                    case "dimensions":
                        a = {
                            height: x.outerHeight(),
                            width: x.outerWidth()
                        };
                        break;
                    case "offset":
                        a = A.offset(x, g.position.container);
                        break;
                    default:
                        a = m(a.toLowerCase()),
                            a = a[0][a[1]], a = a.precedance ? a.string() : a
                }
                return a
            },
            set: function(b, c) {
                var d = /^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,
                    h = /^content\.(title|attr)|style/i,
                    k = !1,
                    n = !1,
                    B = u.checks,
                    p;
                "string" === typeof b ? (p = b, b = {}, b[p] = c) : b = a.extend(!0, {}, b);
                a.each(b, function(c, e) {
                    var g = m(c.toLowerCase()),
                        t;
                    t = g[0][g[1]];
                    g[0][g[1]] = "object" === typeof e && e.nodeType ? a(e) : e;
                    b[c] = [g[0], g[1], e, t];
                    k = d.test(c) || k;
                    n = h.test(c) || n
                });
                e(g);
                V = N = 1;
                a.each(b, function(a, b) {
                    var c, e, d;
                    for (c in B)
                        for (e in B[c])
                            if (d =
                                (new RegExp(e, "i")).exec(a)) b.push(d), B[c][e].apply(u, b)
                });
                V = N = 0;
                x.is(":visible") && u.rendered && (k && u.reposition("mouse" === g.position.target ? null : q.event), n && u.redraw());
                return u
            },
            toggle: function(b, c, e) {
                function d() {
                    b ? (a.browser.msie && x[0].style.removeAttribute("filter"), x.css("overflow", ""), "string" === typeof m.autofocus && a(m.autofocus, x).focus(), G = a.Event("tooltipvisible"), G.originalEvent = c ? q.event : null, x.trigger(G, [u]), m.target.trigger("qtip-" + h + "-inactive")) : x.css({
                        display: "",
                        visibility: "",
                        opacity: "",
                        left: "",
                        top: ""
                    })
                }
                if (!u.rendered) return b ? u.render(1) : u;
                var k = b ? "show" : "hide",
                    m = g[k],
                    B = x.is(":visible"),
                    p = !c || 2 > g[k].target.length || q.target[0] === c.target,
                    y = g.position,
                    v = g.content,
                    G;
                (typeof b).search("boolean|number") && (b = !B);
                if (!x.is(":animated") && B === b && p) return u;
                if (c) {
                    if (/over|enter/.test(c.type) && /out|leave/.test(q.event.type) && c.target === g.show.target[0] && x.has(c.relatedTarget).length) return u;
                    q.event = a.extend({}, c)
                }
                G = a.Event("tooltip" + k);
                G.originalEvent = c ? q.event : null;
                x.trigger(G, [u, 90]);
                if (G.isDefaultPrevented()) return u;
                a.attr(x[0], "aria-hidden", !b);
                b ? (q.origin = a.extend({}, n), u.focus(c), a.isFunction(v.text) && R(v.text, !1), a.isFunction(v.title.text) && ba(v.title.text, !1), !C && "mouse" === y.target && y.adjust.mouse && (a(document).bind("mousemove.qtip", function(a) {
                    n = {
                        pageX: a.pageX,
                        pageY: a.pageY,
                        type: "mousemove"
                    }
                }), C = !0), u.reposition(c, e), (G.solo = !!m.solo) && a("div.qtip.ui-tooltip", m.solo).not(x).qtip("hide", G)) : (clearTimeout(u.timers.show), delete q.origin, C && !a('div.qtip.ui-tooltip[tracking\x3d"true"]:visible', m.solo).not(x).length &&
                    (a(document).unbind("mousemove.qtip"), C = !1), u.blur(c));
                p && x.stop(0, 1);
                !1 === m.effect ? (x[k](), d.call(x)) : a.isFunction(m.effect) ? (m.effect.call(x, u), x.queue("fx", function(a) {
                    d();
                    a()
                })) : x.fadeTo(90, b ? 1 : 0, d);
                b && m.target.trigger("qtip-" + h + "-inactive");
                return u
            },
            show: function(a) {
                return u.toggle(!0, a)
            },
            hide: function(a) {
                return u.toggle(!1, a)
            },
            focus: function(b) {
                if (!u.rendered) return u;
                var c = a("div.qtip.ui-tooltip"),
                    e = parseInt(x[0].style.zIndex, 10),
                    d = v.zindex + c.length;
                b = a.extend({}, b);
                var g;
                x.hasClass("ui-tooltip-focus") ||
                    (g = a.Event("tooltipfocus"), g.originalEvent = b, x.trigger(g, [u, d]), g.isDefaultPrevented() || (e !== d && (c.each(function() {
                        this.style.zIndex > e && --this.style.zIndex
                    }), c.filter(".ui-tooltip-focus").qtip("blur", b)), x.addClass("ui-tooltip-focus")[0].style.zIndex = d));
                return u
            },
            blur: function(b) {
                b = a.extend({}, b);
                var c;
                x.removeClass("ui-tooltip-focus");
                c = a.Event("tooltipblur");
                c.originalEvent = b;
                x.trigger(c, [u]);
                return u
            },
            reposition: function(b, c) {
                if (!u.rendered || V) return u;
                V = 1;
                var e = g.position.target,
                    h = g.position,
                    k = h.my,
                    m = h.at,
                    B = h.adjust,
                    p = B.method.split(" "),
                    y = x.outerWidth(),
                    v = x.outerHeight(),
                    G = 0,
                    K = 0,
                    F = a.Event("tooltipmove"),
                    f = "fixed" === x.css("position"),
                    r = h.viewport,
                    w = {
                        left: 0,
                        top: 0
                    },
                    H = h.container,
                    J = !1,
                    C = u.plugins.tip,
                    O = {
                        horizontal: p[0],
                        vertical: p[1] = p[1] || p[0],
                        enabled: r.jquery && e[0] !== d && e[0] !== Q && "none" !== B.method,
                        left: function(a) {
                            var b = "shift" === O.horizontal,
                                c = -H.offset.left + r.offset.left + r.scrollLeft,
                                e = "left" === k.x ? y : "right" === k.x ? -y : -y / 2,
                                d = "left" === m.x ? G : "right" === m.x ? -G : -G / 2,
                                g = C && C.size ? C.size.width ||
                                0 : 0,
                                f = C && C.corner && "x" === C.corner.precedance && !b ? g : 0,
                                h = c - a + f,
                                n = a + y - r.width - c + f,
                                d = e - ("x" === k.precedance || k.x === k.y ? d : 0),
                                f = "center" === k.x;
                            b ? (f = C && C.corner && "y" === C.corner.precedance ? g : 0, d = ("left" === k.x ? 1 : -1) * e - f, w.left += 0 < h ? h : 0 < n ? -n : 0, w.left = Math.max(-H.offset.left + r.offset.left + (f && "center" === C.corner.x ? C.offset : 0), a - d, Math.min(Math.max(-H.offset.left + r.offset.left + r.width, a + d), w.left))) : (0 < h && ("left" !== k.x || 0 < n) ? w.left -= d : 0 < n && ("right" !== k.x || 0 < h) && (w.left -= f ? -d : d), w.left !== a && f && (w.left -= B.x), w.left <
                                c && -w.left > n && (w.left = a));
                            return w.left - a
                        },
                        top: function(a) {
                            var b = "shift" === O.vertical,
                                c = -H.offset.top + r.offset.top + r.scrollTop,
                                e = "top" === k.y ? v : "bottom" === k.y ? -v : -v / 2,
                                d = "top" === m.y ? K : "bottom" === m.y ? -K : -K / 2,
                                g = C && C.size ? C.size.height || 0 : 0,
                                f = C && C.corner && "y" === C.corner.precedance && !b ? g : 0,
                                h = c - a + f,
                                c = a + v - r.height - c + f,
                                d = e - ("y" === k.precedance || k.x === k.y ? d : 0),
                                f = "center" === k.y;
                            b ? (f = C && C.corner && "x" === C.corner.precedance ? g : 0, d = ("top" === k.y ? 1 : -1) * e - f, w.top += 0 < h ? h : 0 < c ? -c : 0, w.top = Math.max(-H.offset.top + r.offset.top +
                                (f && "center" === C.corner.x ? C.offset : 0), a - d, Math.min(Math.max(-H.offset.top + r.offset.top + r.height, a + d), w.top))) : (0 < h && ("top" !== k.y || 0 < c) ? w.top -= d : 0 < c && ("bottom" !== k.y || 0 < h) && (w.top -= f ? -d : d), w.top !== a && f && (w.top -= B.y), 0 > w.top && -w.top > c && (w.top = a));
                            return w.top - a
                        }
                    };
                if (a.isArray(e) && 2 === e.length) m = {
                    x: "left",
                    y: "top"
                }, w = {
                    left: e[0],
                    top: e[1]
                };
                else if ("mouse" === e && (b && b.pageX || q.event.pageX)) m = {
                    x: "left",
                    y: "top"
                }, b = (!b || "resize" !== b.type && "scroll" !== b.type ? b && b.pageX && "mousemove" === b.type ? b : !n || !n.pageX || !B.mouse &&
                    b && b.pageX ? !B.mouse && q.origin && q.origin.pageX ? q.origin : b : {
                        pageX: n.pageX,
                        pageY: n.pageY
                    } : q.event) || b || q.event || n || {}, w = {
                    top: b.pageY,
                    left: b.pageX
                };
                else {
                    "event" === e ? e = b && b.target && "scroll" !== b.type && "resize" !== b.type ? q.target = a(b.target) : q.target : q.target = a(e);
                    e = a(e).eq(0);
                    if (0 === e.length) return u;
                    e[0] === document || e[0] === d ? (G = A.iOS ? d.innerWidth : e.width(), K = A.iOS ? d.innerHeight : e.height(), e[0] === d && (w = {
                        top: f || A.iOS ? (r || e).scrollTop() : 0,
                        left: f || A.iOS ? (r || e).scrollLeft() : 0
                    })) : e.is("area") && A.imagemap ? w = A.imagemap(e,
                        m, O.enabled ? p : !1) : "http://www.w3.org/2000/svg" === e[0].namespaceURI && A.svg ? w = A.svg(e, m) : (G = e.outerWidth(), K = e.outerHeight(), w = A.offset(e, H));
                    w.offset && (G = w.width, K = w.height, J = w.flipoffset, w = w.offset);
                    if (4.1 > A.iOS && 3.1 < A.iOS || 4.3 == A.iOS || !A.iOS && f) p = a(d), w.left -= p.scrollLeft(), w.top -= p.scrollTop();
                    w.left += "right" === m.x ? G : "center" === m.x ? G / 2 : 0;
                    w.top += "bottom" === m.y ? K : "center" === m.y ? K / 2 : 0
                }
                w.left += B.x + ("right" === k.x ? -y : "center" === k.x ? -y / 2 : 0);
                w.top += B.y + ("bottom" === k.y ? -v : "center" === k.y ? -v / 2 : 0);
                O.enabled ?
                    (r = {
                            elem: r,
                            height: r[(r[0] === d ? "h" : "outerH") + "eight"](),
                            width: r[(r[0] === d ? "w" : "outerW") + "idth"](),
                            scrollLeft: f ? 0 : r.scrollLeft(),
                            scrollTop: f ? 0 : r.scrollTop(),
                            offset: r.offset() || {
                                left: 0,
                                top: 0
                            }
                        }, H = {
                            elem: H,
                            scrollLeft: H.scrollLeft(),
                            scrollTop: H.scrollTop(),
                            offset: H.offset() || {
                                left: 0,
                                top: 0
                            }
                        }, w.adjusted = {
                            left: "none" !== O.horizontal ? O.left(w.left) : 0,
                            top: "none" !== O.vertical ? O.top(w.top) : 0
                        }, w.adjusted.left + w.adjusted.top && x.attr("class", x[0].className.replace(/ui-tooltip-pos-\w+/i, "ui-tooltip-pos-" + k.abbrev())),
                        J && w.adjusted.left && (w.left += J.left), J && w.adjusted.top && (w.top += J.top)) : w.adjusted = {
                        left: 0,
                        top: 0
                    };
                F.originalEvent = a.extend({}, b);
                x.trigger(F, [u, w, r.elem || r]);
                if (F.isDefaultPrevented()) return u;
                delete w.adjusted;
                !1 === c || isNaN(w.left) || isNaN(w.top) || "mouse" === e || !a.isFunction(h.effect) ? x.css(w) : a.isFunction(h.effect) && (h.effect.call(x, u, a.extend({}, w)), x.queue(function(b) {
                    a(this).css({
                        opacity: "",
                        height: ""
                    });
                    a.browser.msie && this.style.removeAttribute("filter");
                    b()
                }));
                V = 0;
                return u
            },
            redraw: function() {
                if (1 >
                    u.rendered || N) return u;
                var a = g.position.container,
                    b, c, e;
                N = 1;
                g.style.height && x.css("height", g.style.height);
                g.style.width ? x.css("width", g.style.width) : (x.css("width", "").addClass("ui-tooltip-fluid"), b = x.width() + 1, c = x.css("max-width") || "", e = x.css("min-width") || "", a = -1 < (c + e).indexOf("%") ? a.width() / 100 : 0, c = (-1 < c.indexOf("%") ? a : 1) * parseInt(c, 10) || b, e = (-1 < e.indexOf("%") ? a : 1) * parseInt(e, 10) || 0, b = c + e ? Math.min(Math.max(b, e), c) : b, x.css("width", Math.round(b)).removeClass("ui-tooltip-fluid"));
                N = 0;
                return u
            },
            disable: function(b) {
                "boolean" !==
                typeof b && (b = !(x.hasClass("ui-state-disabled") || q.disabled));
                u.rendered ? (x.toggleClass("ui-state-disabled", b), a.attr(x[0], "aria-disabled", b)) : q.disabled = !!b;
                return u
            },
            enable: function() {
                return u.disable(!1)
            },
            destroy: function() {
                var c = b[0],
                    e = a.attr(c, "oldtitle"),
                    d = b.data("qtip");
                u.rendered && (x.remove(), a.each(u.plugins, function() {
                    this.destroy && this.destroy()
                }));
                clearTimeout(u.timers.show);
                clearTimeout(u.timers.hide);
                ga();
                d && u !== d || (a.removeData(c, "qtip"), g.suppress && e && (a.attr(c, "title", e), b.removeAttr("oldtitle")),
                    b.removeAttr("aria-describedby"));
                b.unbind(".qtip-" + h);
                delete w[u.id];
                return b
            }
        })
    }

    function h(c, d) {
        var h, k, n, m, p = a(this),
            w = a(document.body),
            r = this === document ? w : p;
        n = p.metadata ? p.metadata(d.metadata) : null;
        var C = "html5" === d.metadata.type && n ? n[d.metadata.name] : null,
            z = p.data(d.metadata.name || "qtipopts");
        try {
            z = "string" === typeof z ? (new Function("return " + z))() : z
        } catch (fa) {
            b("Unable to parse HTML5 attribute data: " + z)
        }
        n = a.extend(!0, {}, v.defaults, d, "object" === typeof z ? e(z) : null, e(C || n));
        d = n.position;
        n.id = c;
        if ("boolean" === typeof n.content.text)
            if (k = p.attr(n.content.attr), !1 !== n.content.attr && k) n.content.text = k;
            else return b("Unable to locate content for tooltip! Aborting render of tooltip on element: ", p), !1;
        d.container.length || (d.container = w);
        !1 === d.target && (d.target = r);
        !1 === n.show.target && (n.show.target = r);
        !0 === n.show.solo && (n.show.solo = w);
        !1 === n.hide.target && (n.hide.target = r);
        !0 === n.position.viewport && (n.position.viewport = d.container);
        d.at = new A.Corner(d.at);
        d.my = new A.Corner(d.my);
        if (a.data(this,
                "qtip"))
            if (n.overwrite) p.qtip("destroy");
            else if (!1 === n.overwrite) return !1;
        n.suppress && (m = a.attr(this, "title")) && a(this).removeAttr("title").attr("oldtitle", m);
        h = new g(p, n, c, !!k);
        a.data(this, "qtip", h);
        p.bind("remove.qtip-" + c, function() {
            h.destroy()
        });
        return h
    }

    function k(b) {
        var c = this,
            e = b.elements.tooltip,
            d = b.options.content.ajax,
            g = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        b.checks.ajax = {
            "^content.ajax": function(a, b, g) {
                "ajax" === b && (d = g);
                "once" === b ? c.init() : d && d.url ? c.load() : e.unbind(".qtip-ajax")
            }
        };
        a.extend(c, {
            init: function() {
                if (d && d.url) e.unbind(".qtip-ajax")[d.once ? "one" : "bind"]("tooltipshow.qtip-ajax", c.load);
                return c
            },
            load: function(e, h) {
                var k = d.url.indexOf(" "),
                    n = d.url,
                    m, p = d.once && !d.loading && h;
                if (p) try {
                    e.preventDefault()
                } catch (w) {} else if (e && e.isDefaultPrevented()) return c; - 1 < k && (m = n.substr(k), n = n.substr(0, k));
                a.ajax(a.extend({
                    success: function(c) {
                        m && (c = a("\x3cdiv/\x3e").append(c.replace(g, "")).find(m));
                        b.set("content.text", c)
                    },
                    error: function(a, c, e) {
                        0 !== a.status && b.set("content.text", c +
                            ": " + e)
                    },
                    context: b
                }, d, {
                    url: n,
                    complete: function() {
                        p && (b.show(e.originalEvent), h = !1);
                        a.isFunction(d.complete) && d.complete.apply(this, arguments)
                    }
                }))
            }
        });
        c.init()
    }

    function m(a, b, c) {
        var e = Math.ceil(b / 2),
            d = Math.ceil(c / 2);
        b = {
            bottomright: [
                [0, 0],
                [b, c],
                [b, 0]
            ],
            bottomleft: [
                [0, 0],
                [b, 0],
                [0, c]
            ],
            topright: [
                [0, c],
                [b, 0],
                [b, c]
            ],
            topleft: [
                [0, 0],
                [0, c],
                [b, c]
            ],
            topcenter: [
                [0, c],
                [e, 0],
                [b, c]
            ],
            bottomcenter: [
                [0, 0],
                [b, 0],
                [e, c]
            ],
            rightcenter: [
                [0, 0],
                [b, d],
                [0, c]
            ],
            leftcenter: [
                [b, 0],
                [b, c],
                [0, d]
            ]
        };
        b.lefttop = b.bottomright;
        b.righttop = b.bottomleft;
        b.leftbottom = b.topright;
        b.rightbottom = b.topleft;
        return b[a.string()]
    }

    function p(b, e) {
        function d(a, e, g, h) {
            if (p.tip) {
                a = k.corner.clone();
                e = g.adjusted;
                var m = b.options.position.adjust.method.split(" ");
                h = m[0];
                var m = m[1] || m[0],
                    t, q, w = 0,
                    r = 0,
                    y, G = {},
                    u;
                !0 !== k.corner.fixed && ("shift" === h && "x" === a.precedance && e.left && "center" !== a.y ? a.precedance = "x" === a.precedance ? "y" : "x" : "flip" === h && e.left && (a.x = "center" === a.x ? 0 < e.left ? "left" : "right" : "left" === a.x ? "right" : "left"), "shift" === m && "y" === a.precedance && e.top && "center" !==
                    a.x ? a.precedance = "y" === a.precedance ? "x" : "y" : "flip" === m && e.top && (a.y = "center" === a.y ? 0 < e.top ? "top" : "bottom" : "top" === a.y ? "bottom" : "top"), a.string() === v.corner.string() || v.top === e.top && v.left === e.left || k.update(a, !1));
                y = k.position(a, e);
                y.right !== c && (y.left = -y.right);
                y.bottom !== c && (y.top = -y.bottom);
                y.user = Math.max(0, n.offset);
                if (t = "shift" === h && !!e.left) "center" === a.x ? G["margin-left"] = w = y["margin-left"] - e.left : (u = y.right !== c ? [e.left, -y.left] : [-e.left, y.left], (w = Math.max(u[0], u[1])) > u[0] && (g.left -= e.left,
                    t = !1), G[y.right !== c ? "right" : "left"] = w);
                if (q = "shift" === m && !!e.top) "center" === a.y ? G["margin-top"] = r = y["margin-top"] - e.top : (u = y.bottom !== c ? [e.top, -y.top] : [-e.top, y.top], (r = Math.max(u[0], u[1])) > u[0] && (g.top -= e.top, q = !1), G[y.bottom !== c ? "bottom" : "top"] = r);
                p.tip.css(G).toggle(!(w && r || "center" === a.x && r || "center" === a.y && w));
                g.left -= y.left.charAt ? y.user : "shift" !== h || q || !t && !q ? y.left : 0;
                g.top -= y.top.charAt ? y.user : "shift" !== m || t || !t && !q ? y.top : 0;
                v.left = e.left;
                v.top = e.top;
                v.corner = a.clone()
            }
        }

        function g(a, b, c) {
            b =
                b ? b : a[a.precedance];
            var e = w.hasClass("ui-tooltip-fluid");
            a = p.titlebar && "top" === a.y ? p.titlebar : p.content;
            b = "border-" + b + "-width";
            w.addClass("ui-tooltip-fluid");
            a = parseInt(a.css(b), 10);
            a = (c ? a || parseInt(w.css(b), 10) : a) || 0;
            w.toggleClass("ui-tooltip-fluid", e);
            return a
        }

        function h(a) {
            var b = "y" === a.precedance,
                c = r[b ? "width" : "height"],
                e = r[b ? "height" : "width"],
                d = -1 < a.string().indexOf("center"),
                g = c * (d ? .5 : 1),
                k = Math.pow;
            a = Math.round;
            var n = Math.sqrt(k(g, 2) + k(e, 2)),
                g = [u / g * n, u / e * n];
            g[2] = Math.sqrt(k(g[0], 2) - k(u, 2));
            g[3] = Math.sqrt(k(g[1], 2) - k(u, 2));
            d = (n + g[2] + g[3] + (d ? 0 : g[0])) / n;
            c = [a(d * e), a(d * c)];
            return {
                height: c[b ? 0 : 1],
                width: c[b ? 1 : 0]
            }
        }
        var k = this,
            n = b.options.style.tip,
            p = b.elements,
            w = p.tooltip,
            v = {
                top: 0,
                left: 0
            },
            r = {
                width: n.width,
                height: n.height
            },
            C, z, u = n.border || 0,
            Q = !!(a("\x3ccanvas /\x3e")[0] || {}).getContext;
        k.corner = null;
        k.mimic = null;
        k.border = u;
        k.offset = n.offset;
        k.size = r;
        b.checks.tip = {
            "^position.my|style.tip.(corner|mimic|border)$": function() {
                k.init() || k.destroy();
                b.reposition()
            },
            "^style.tip.(height|width)$": function() {
                r = {
                    width: n.width,
                    height: n.height
                };
                k.create();
                k.update();
                b.reposition()
            },
            "^content.title.text|style.(classes|widget)$": function() {
                p.tip && k.update()
            }
        };
        a.extend(k, {
            init: function() {
                var b = k.detectCorner() && (Q || a.browser.msie);
                b && (k.create(), k.update(), w.unbind(".qtip-tip").bind("tooltipmove.qtip-tip", d));
                return b
            },
            detectCorner: function() {
                var a = n.corner,
                    c = b.options.position,
                    e = c.at,
                    c = c.my.string ? c.my.string() : c.my;
                if (!1 === a || !1 === c && !1 === e) return !1;
                !0 === a ? k.corner = new A.Corner(c) : a.string || (k.corner = new A.Corner(a),
                    k.corner.fixed = !0);
                return "centercenter" !== k.corner.string()
            },
            detectColours: function(c) {
                var e, d, g = p.tip.css("cssText", "");
                e = c || k.corner;
                var h = e[e.precedance];
                c = "border-" + h + "-color";
                d = "border" + h.charAt(0) + h.substr(1) + "Color";
                var h = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,
                    m = a(document.body).css("color");
                b.elements.content.css("color");
                var t = p.titlebar && ("top" === e.y || "center" === e.y && g.position().top + r.height / 2 + n.offset < p.titlebar.outerHeight(1)) ? p.titlebar : p.content;
                w.addClass("ui-tooltip-fluid");
                C = e = g.css("background-color");
                z = d = g[0].style[d] || g.css(c) || w.css(c);
                if (!e || h.test(e)) C = t.css("background-color") || "transparent", h.test(C) && (C = w.css("background-color") || e);
                if (!d || h.test(d) || d === m) z = t.css(c) || "transparent", h.test(z) && (z = d);
                a("*", g).add(g).css("cssText", "background-color:transparent !important;border:0 !important;");
                w.removeClass("ui-tooltip-fluid")
            },
            create: function() {
                var b = r.width,
                    c = r.height;
                p.tip && p.tip.remove();
                p.tip = a("\x3cdiv /\x3e", {
                    "class": "ui-tooltip-tip"
                }).css({
                    width: b,
                    height: c
                }).prependTo(w);
                Q ? a("\x3ccanvas /\x3e").appendTo(p.tip)[0].getContext("2d").save() : (p.tip.html('\x3cvml:shape coordorigin\x3d"0,0" style\x3d"display:inline-block; position:absolute; behavior:url(#default#VML);"\x3e\x3c/vml:shape\x3e\x3cvml:shape coordorigin\x3d"0,0" style\x3d"display:inline-block; position:absolute; behavior:url(#default#VML);"\x3e\x3c/vml:shape\x3e'), a("*", p.tip).bind("click mousedown", function(a) {
                    a.stopPropagation()
                }))
            },
            update: function(b, c) {
                var e = p.tip,
                    d = e.children(),
                    t = r.width,
                    w = r.height,
                    q = n.mimic,
                    B = Math.round,
                    K, F, aa;
                b || (b = v.corner || k.corner);
                !1 === q ? q = b : (q = new A.Corner(q), q.precedance = b.precedance, "inherit" === q.x ? q.x = b.x : "inherit" === q.y ? q.y = b.y : q.x === q.y && (q[b.precedance] = b[b.precedance]));
                K = q.precedance;
                k.detectColours(b);
                "transparent" !== z && "#123456" !== z ? (u = g(b, null, !0), 0 === n.border && 0 < u && (C = z), k.border = u = !0 !== n.border ? n.border : u) : k.border = u = 0;
                F = m(q, t, w);
                k.size = aa = h(b);
                e.css(aa);
                e = "y" === b.precedance ? [B("left" === q.x ? u : "right" === q.x ? aa.width - t - u : (aa.width - t) / 2), B("top" === q.y ? aa.height - w : 0)] : [B("left" === q.x ? aa.width - t : 0), B("top" === q.y ? u : "bottom" === q.y ? aa.height - w - u : (aa.height - w) / 2)];
                Q ? (d.attr(aa), d = d[0].getContext("2d"), d.restore(), d.save(), d.clearRect(0, 0, 3E3, 3E3), d.translate(e[0], e[1]), d.beginPath(), d.moveTo(F[0][0], F[0][1]), d.lineTo(F[1][0], F[1][1]), d.lineTo(F[2][0], F[2][1]), d.closePath(), d.fillStyle = C, d.strokeStyle = z, d.lineWidth = 2 * u, d.lineJoin = "miter", d.miterLimit = 100, u && d.stroke(), d.fill()) : (F = "m" + F[0][0] + "," + F[0][1] + " l" + F[1][0] + "," + F[1][1] + " " + F[2][0] + "," + F[2][1] + " xe", e[2] = u &&
                    /^(r|b)/i.test(b.string()) ? 8 === parseFloat(a.browser.version, 10) ? 2 : 1 : 0, d.css({
                        antialias: "" + (-1 < q.string().indexOf("center")),
                        left: e[0] - e[2] * Number("x" === K),
                        top: e[1] - e[2] * Number("y" === K),
                        width: t + u,
                        height: w + u
                    }).each(function(b) {
                        var c = a(this);
                        c[c.prop ? "prop" : "attr"]({
                            coordsize: t + u + " " + (w + u),
                            path: F,
                            fillcolor: C,
                            filled: !!b,
                            stroked: !b
                        }).css({
                            display: u || b ? "block" : "none"
                        });
                        b || "" !== c.html() || c.html('\x3cvml:stroke weight\x3d"' + 2 * u + 'px" color\x3d"' + z + '" miterlimit\x3d"1000" joinstyle\x3d"miter"  style\x3d"behavior:url(#default#VML); display:inline-block;" /\x3e')
                    }));
                !1 !== c && k.position(b)
            },
            position: function(b) {
                var c = p.tip,
                    e = {},
                    d = Math.max(0, n.offset),
                    m, t, q;
                if (!1 === n.corner || !c) return !1;
                b = b || k.corner;
                m = b.precedance;
                t = h(b);
                q = [b.x, b.y];
                "x" === m && q.reverse();
                a.each(q, function(c, h) {
                    var k, n;
                    if ("center" === h) k = "y" === m ? "left" : "top", e[k] = "50%", e["margin-" + k] = -Math.round(t["y" === m ? "width" : "height"] / 2) + d;
                    else {
                        k = g(b, h, !0);
                        n = a.browser.mozilla;
                        var q = b.y + (n ? "" : "-") + b.x;
                        n = (n ? "-moz-" : a.browser.webkit ? "-webkit-" : "") + (n ? "border-radius-" + q : "border-" + q + "-radius");
                        n = parseInt((p.titlebar &&
                            "top" === b.y ? p.titlebar : p.content).css(n), 10) || parseInt(w.css(n), 10) || 0;
                        e[h] = c ? u ? g(b, h) : 0 : d + (n > k ? n : 0)
                    }
                });
                e[b[m]] -= t["x" === m ? "width" : "height"];
                c.css({
                    top: "",
                    bottom: "",
                    left: "",
                    right: "",
                    margin: ""
                }).css(e);
                return e
            },
            destroy: function() {
                p.tip && p.tip.remove();
                w.unbind(".qtip-tip")
            }
        });
        v.corner = new A.Corner(k.init())
    }

    function r(b) {
        var c = this,
            e = b.options.show.modal,
            g = b.elements,
            h = g.tooltip,
            k = ".qtipmodal" + b.id,
            n = a(document.body),
            m;
        b.checks.modal = {
            "^show.modal.(on|blur)$": function() {
                c.init();
                g.overlay.toggle(h.is(":visible"))
            }
        };
        a.extend(c, {
            init: function() {
                if (!e.on) return c;
                m = c.create();
                h.attr("is-modal-qtip", !0).css("z-index", A.modal.zindex + a("div.qtip.ui-tooltip[is-modal-qtip]").length).unbind(".qtipmodal").unbind(k).bind("tooltipshow.qtipmodal tooltiphide.qtipmodal", function(b, e, d) {
                    if ((e = b.originalEvent) && "tooltiphide" === b.type && /mouse(leave|enter)/.test(e.type) && a(e.relatedTarget).closest(m[0]).length) try {
                        b.preventDefault()
                    } catch (g) {} else if (!e || e && !e.solo) c[b.type.replace("tooltip", "")](b, d)
                }).bind("tooltipfocus.qtipmodal",
                    function(b) {
                        if (!b.isDefaultPrevented()) {
                            var c = a("div.qtip.ui-tooltip").filter("[is-modal-qtip]"),
                                e = A.modal.zindex + c.length,
                                d = parseInt(h[0].style.zIndex, 10);
                            m[0].style.zIndex = e - 1;
                            c.each(function() {
                                this.style.zIndex > d && --this.style.zIndex
                            });
                            c.end().filter(".ui-tooltip-focus").qtip("blur", b.originalEvent);
                            h.addClass("ui-tooltip-focus")[0].style.zIndex = e;
                            try {
                                b.preventDefault()
                            } catch (g) {}
                        }
                    }).bind("tooltiphide.qtipmodal", function(b) {
                    a("[is-modal-qtip]").filter(":visible").not(h).last().qtip("focus", b)
                });
                e.escape && a(d).unbind(k).bind("keydown" + k, function(a) {
                    27 === a.keyCode && h.hasClass("ui-tooltip-focus") && b.hide(a)
                });
                e.blur && g.overlay.unbind(k).bind("click" + k, function(a) {
                    h.hasClass("ui-tooltip-focus") && b.hide(a)
                });
                return c
            },
            create: function() {
                function b() {
                    m.css({
                        height: a(d).height(),
                        width: a(d).width()
                    })
                }
                var c = a("#qtip-overlay");
                if (c.length) return g.overlay = c.insertAfter(a("div.qtip.ui-tooltip").last());
                m = g.overlay = a("\x3cdiv /\x3e", {
                    id: "qtip-overlay",
                    html: "\x3cdiv\x3e\x3c/div\x3e",
                    mousedown: function() {
                        return !1
                    }
                }).insertAfter(a("div.qtip.ui-tooltip").last());
                a(d).unbind(".qtipmodal").bind("resize.qtipmodal", b);
                b();
                return m
            },
            toggle: function(b, d, g) {
                if (b && b.isDefaultPrevented()) return c;
                b = e.effect;
                var p = d ? "show" : "hide",
                    w = m.is(":visible"),
                    B = a("[is-modal-qtip]").filter(":visible").not(h);
                m || (m = c.create());
                if (m.is(":animated") && w === d || !d && B.length) return c;
                d ? (m.css({
                    left: 0,
                    top: 0
                }), m.toggleClass("blurs", e.blur), n.bind("focusin" + k, function(b) {
                    var c = a(b.target).closest(".qtip");
                    (1 > c.length ? 0 : parseInt(c[0].style.zIndex, 10) > parseInt(h[0].style.zIndex, 10)) || a(b.target).closest("div.qtip.ui-tooltip")[0] ===
                        h[0] || h.find("input:visible").filter(":first").focus()
                })) : n.undelegate("*", "focusin" + k);
                m.stop(!0, !1);
                if (a.isFunction(b)) b.call(m, d);
                else if (!1 === b) m[p]();
                else m.fadeTo(parseInt(g, 10) || 90, d ? 1 : 0, function() {
                    d || a(this).hide()
                });
                d || m.queue(function(a) {
                    m.css({
                        left: "",
                        top: ""
                    });
                    a()
                });
                return c
            },
            show: function(a, b) {
                return c.toggle(a, !0, b)
            },
            hide: function(a, b) {
                return c.toggle(a, !1, b)
            },
            destroy: function() {
                var c = m;
                c && ((c = 1 > a("[is-modal-qtip]").not(h).length) ? (g.overlay.remove(), a(d).unbind(".qtipmodal")) : g.overlay.unbind(".qtipmodal" +
                    b.id), n.undelegate("*", "focusin" + k));
                return h.removeAttr("is-modal-qtip").unbind(".qtipmodal")
            }
        });
        c.init()
    }

    function z(b) {
        var c = this,
            e = b.elements,
            d = e.tooltip,
            g = ".bgiframe-" + b.id;
        a.extend(c, {
            init: function() {
                e.bgiframe = a('\x3ciframe class\x3d"ui-tooltip-bgiframe" frameborder\x3d"0" tabindex\x3d"-1" src\x3d"javascript:\'\';"  style\x3d"display:block; position:absolute; z-index:-1; filter:alpha(opacity\x3d0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d0)";"\x3e\x3c/iframe\x3e');
                e.bgiframe.appendTo(d);
                d.bind("tooltipmove" + g, c.adjust)
            },
            adjust: function() {
                var a = b.get("dimensions"),
                    c = b.plugins.tip,
                    g = e.tip,
                    h;
                h = parseInt(d.css("border-left-width"), 10) || 0;
                h = {
                    left: -h,
                    top: -h
                };
                c && g && (c = "x" === c.corner.precedance ? ["width", "left"] : ["height", "top"], h[c[1]] -= g[c[0]]());
                e.bgiframe.css(h).css(a)
            },
            destroy: function() {
                e.bgiframe.remove();
                d.unbind(g)
            }
        });
        c.init()
    }
    var v, A, n, w = {},
        C;
    v = a.fn.qtip = function(b, d, g) {
        var h = ("" + b).toLowerCase(),
            k = null,
            n = a.makeArray(arguments).slice(1),
            m = n[n.length - 1],
            p = this[0] ? a.data(this[0], "qtip") :
            null;
        if (!arguments.length && p || "api" === h) return p;
        if ("string" === typeof b) return this.each(function() {
            var b = a.data(this, "qtip");
            if (!b) return !0;
            m && m.timeStamp && (b.cache.event = m);
            if ("option" !== h && "options" !== h || !d) b[h] && b[h].apply(b[h], n);
            else if (a.isPlainObject(d) || g !== c) b.set(d, g);
            else return k = b.get(d), !1
        }), null !== k ? k : this;
        if ("object" === typeof b || !arguments.length) return p = e(a.extend(!0, {}, b)), v.bind.call(this, p, m)
    };
    v.bind = function(b, e) {
        return this.each(function(d) {
            function g(b) {
                function e() {
                    C.render("object" ===
                        typeof b || k.show.ready);
                    m.show.add(m.hide).unbind(r)
                }
                if (C.cache.disabled) return !1;
                C.cache.event = a.extend({}, b);
                C.cache.target = b ? a(b.target) : [c];
                0 < k.show.delay ? (clearTimeout(C.timers.show), C.timers.show = setTimeout(e, k.show.delay), p.show !== p.hide && m.hide.bind(p.hide, function() {
                    clearTimeout(C.timers.show)
                })) : e()
            }
            var k, m, p, r, C;
            d = a.isArray(b.id) ? b.id[d] : b.id;
            d = !d || !1 === d || 1 > d.length || w[d] ? v.nextid++ : w[d] = d;
            r = ".qtip-" + d + "-create";
            C = h.call(this, d, b);
            if (!1 === C) return !0;
            k = C.options;
            a.each(A, function() {
                "initialize" ===
                this.initialize && this(C)
            });
            m = {
                show: k.show.target,
                hide: k.hide.target
            };
            p = {
                show: a.trim("" + k.show.event).replace(/ /g, r + " ") + r,
                hide: a.trim("" + k.hide.event).replace(/ /g, r + " ") + r
            };
            /mouse(over|enter)/i.test(p.show) && !/mouse(out|leave)/i.test(p.hide) && (p.hide += " mouseleave" + r);
            m.show.bind("mousemove" + r, function(a) {
                n = {
                    pageX: a.pageX,
                    pageY: a.pageY,
                    type: "mousemove"
                }
            });
            m.show.bind(p.show, g);
            (k.show.ready || k.prerender) && g(e)
        })
    };
    A = v.plugins = {
        Corner: function(a) {
            a = ("" + a).replace(/([A-Z])/, " $1").replace(/middle/gi,
                "center").toLowerCase();
            this.x = (a.match(/left|right/i) || a.match(/center/) || ["inherit"])[0].toLowerCase();
            this.y = (a.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase();
            a = a.charAt(0);
            this.precedance = "t" === a || "b" === a ? "y" : "x";
            this.string = function() {
                return "y" === this.precedance ? this.y + this.x : this.x + this.y
            };
            this.abbrev = function() {
                var a = this.x.substr(0, 1),
                    b = this.y.substr(0, 1);
                return a === b ? a : "c" === a || "c" !== a && "c" !== b ? b + a : a + b
            };
            this.clone = function() {
                return {
                    x: this.x,
                    y: this.y,
                    precedance: this.precedance,
                    string: this.string,
                    abbrev: this.abbrev,
                    clone: this.clone
                }
            }
        },
        offset: function(a, b) {
            a = a.offset();
            var c = b,
                e = 0,
                d = document.body,
                g;
            if (c) {
                do
                    if ("static" !== c.css("position") && (g = c[0] === d ? {
                            left: parseInt(c.css("left"), 10) || 0,
                            top: parseInt(c.css("top"), 10) || 0
                        } : c.position(), a.left -= g.left + (parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("marginLeft"), 10) || 0), a.top -= g.top + (parseInt(c.css("borderTopWidth"), 10) || 0), g = c.css("overflow"), "scroll" !== g && "auto" !== g || e++), c[0] === d) break; while (c = c.offsetParent());
                b[0] !== d && e && (a.left += 1 * b.scrollLeft(), a.top += 1 * b.scrollTop())
            }
            return a
        },
        iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,3})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".")) || !1,
        fn: {
            attr: function(b, c) {
                if (this.length) {
                    var e = this[0],
                        d = a.data(e, "qtip");
                    if ("title" === b && d && "object" === typeof d && d.options.suppress) {
                        if (2 > arguments.length) return a.attr(e, "oldtitle");
                        d && "title" === d.options.content.attr && d.cache.attr && d.set("content.text", c);
                        return this.attr("oldtitle",
                            c)
                    }
                }
                return a.fn.attr_replacedByqTip.apply(this, arguments)
            },
            clone: function(b) {
                a([]);
                var c = a.fn.clone_replacedByqTip.apply(this, arguments);
                b || c.filter("[oldtitle]").attr("title", function() {
                    return a.attr(this, "oldtitle")
                }).removeAttr("oldtitle");
                return c
            },
            remove: a.ui ? null : function(b, c) {
                a.ui || a(this).each(function() {
                    c || b && !a.filter(b, [this]).length || a("*", this).add(this).each(function() {
                        a(this).triggerHandler("remove")
                    })
                })
            }
        }
    };
    a.each(A.fn, function(b, c) {
        if (!c || a.fn[b + "_replacedByqTip"]) return !0;
        var e = a.fn[b +
            "_replacedByqTip"] = a.fn[b];
        a.fn[b] = function() {
            return c.apply(this, arguments) || e.apply(this, arguments)
        }
    });
    v.version = "nightly";
    v.nextid = 0;
    v.inactiveEvents = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" ");
    v.zindex = 15E3;
    v.defaults = {
        prerender: !1,
        id: !1,
        overwrite: !0,
        suppress: !0,
        content: {
            text: !0,
            attr: "title",
            title: {
                text: !1,
                button: !1
            }
        },
        position: {
            my: "top left",
            at: "bottom right",
            target: !1,
            container: !1,
            viewport: !1,
            adjust: {
                x: 0,
                y: 0,
                mouse: !0,
                resize: !0,
                method: "flip flip"
            },
            effect: function(b,
                c, e) {
                a(this).animate(c, {
                    duration: 200,
                    queue: !1
                })
            }
        },
        show: {
            target: !1,
            event: "mouseenter",
            effect: !0,
            delay: 90,
            solo: !1,
            ready: !1,
            autofocus: !1
        },
        hide: {
            target: !1,
            event: "mouseleave",
            effect: !0,
            delay: 0,
            fixed: !1,
            inactive: !1,
            leave: "window",
            distance: !1
        },
        style: {
            classes: "",
            widget: !1,
            width: !1,
            height: !1,
            "default": !0
        },
        events: {
            render: null,
            move: null,
            show: null,
            hide: null,
            toggle: null,
            visible: null,
            focus: null,
            blur: null
        }
    };
    A.ajax = function(a) {
        var b = a.plugins.ajax;
        return "object" === typeof b ? b : a.plugins.ajax = new k(a)
    };
    A.ajax.initialize =
        "render";
    A.ajax.sanitize = function(a) {
        var b = a.content;
        b && "ajax" in b && (b = b.ajax, "object" !== typeof b && (b = a.content.ajax = {
            url: b
        }), "boolean" !== typeof b.once && b.once && (b.once = !!b.once))
    };
    a.extend(!0, v.defaults, {
        content: {
            ajax: {
                loading: !0,
                once: !0
            }
        }
    });
    A.imagemap = function(b, c, e) {
        function d(a, b, c) {
            for (var e, g = 1, h = 1, k, n, m = a.width, p = a.height; 0 < m && 0 < p && 0 < g && 0 < h;)
                for (m = Math.floor(m / 2), p = Math.floor(p / 2), g = "left" === c.x ? m : "right" === c.x ? a.width - m : g + Math.floor(m / 2), h = "top" === c.y ? p : "bottom" === c.y ? a.height - p : h + Math.floor(p /
                        2), e = b.length; e-- && !(2 > b.length);) k = b[e][0] - a.offset.left, n = b[e][1] - a.offset.top, ("left" === c.x && k >= g || "right" === c.x && k <= g || "center" === c.x && (k < g || k > a.width - g) || "top" === c.y && n >= h || "bottom" === c.y && n <= h || "center" === c.y && (n < h || n > a.height - h)) && b.splice(e, 1);
            return {
                left: b[0][0],
                top: b[0][1]
            }
        }
        b.jquery || (b = a(b));
        var g = (b[0].shape || b.attr("shape")).toLowerCase(),
            h = (b[0].coords || b.attr("coords")).split(","),
            k = [];
        b = a('img[usemap\x3d"#' + b.parent("map").attr("name") + '"]');
        var n = b.offset(),
            m = {
                width: 0,
                height: 0,
                offset: {
                    top: 1E10,
                    right: 0,
                    bottom: 0,
                    left: 1E10
                }
            },
            p = 0,
            w = 0;
        n.left += Math.ceil((b.outerWidth() - b.width()) / 2);
        n.top += Math.ceil((b.outerHeight() - b.height()) / 2);
        if ("poly" === g)
            for (p = h.length; p--;) w = [parseInt(h[--p], 10), parseInt(h[p + 1], 10)], w[0] > m.offset.right && (m.offset.right = w[0]), w[0] < m.offset.left && (m.offset.left = w[0]), w[1] > m.offset.bottom && (m.offset.bottom = w[1]), w[1] < m.offset.top && (m.offset.top = w[1]), k.push(w);
        else k = a.map(h, function(a) {
            return parseInt(a, 10)
        });
        switch (g) {
            case "rect":
                m = {
                    width: Math.abs(k[2] - k[0]),
                    height: Math.abs(k[3] -
                        k[1]),
                    offset: {
                        left: Math.min(k[0], k[2]),
                        top: Math.min(k[1], k[3])
                    }
                };
                break;
            case "circle":
                m = {
                    width: k[2] + 2,
                    height: k[2] + 2,
                    offset: {
                        left: k[0],
                        top: k[1]
                    }
                };
                break;
            case "poly":
                a.extend(m, {
                    width: Math.abs(m.offset.right - m.offset.left),
                    height: Math.abs(m.offset.bottom - m.offset.top)
                }), "centercenter" === c.string() ? m.offset = {
                    left: m.offset.left + m.width / 2,
                    top: m.offset.top + m.height / 2
                } : (m.offset = d(m, k.slice(), c), !e || "flip" !== e[0] && "flip" !== e[1] || (m.flipoffset = d(m, k.slice(), {
                    x: "left" === c.x ? "right" : "right" === c.x ? "left" : "center",
                    y: "top" === c.y ? "bottom" : "bottom" === c.y ? "top" : "center"
                }), m.flipoffset.left -= m.offset.left, m.flipoffset.top -= m.offset.top)), m.width = m.height = 0
        }
        m.offset.left += n.left;
        m.offset.top += n.top;
        return m
    };
    A.tip = function(a) {
        var b = a.plugins.tip;
        return "object" === typeof b ? b : a.plugins.tip = new p(a)
    };
    A.tip.initialize = "render";
    A.tip.sanitize = function(a) {
        var b = a.style;
        b && "tip" in b && (b = a.style.tip, "object" !== typeof b && (a.style.tip = {
                corner: b
            }), /string|boolean/i.test(typeof b.corner) || (b.corner = !0), "number" !== typeof b.width &&
            delete b.width, "number" !== typeof b.height && delete b.height, "number" !== typeof b.border && !0 !== b.border && delete b.border, "number" !== typeof b.offset && delete b.offset)
    };
    a.extend(!0, v.defaults, {
        style: {
            tip: {
                corner: !0,
                mimic: !1,
                width: 6,
                height: 6,
                border: !0,
                offset: 0
            }
        }
    });
    A.svg = function(b, c) {
        c = a(document);
        var e = b[0];
        b = {
            width: 0,
            height: 0,
            offset: {
                top: 1E10,
                left: 1E10
            }
        };
        var d, g, h;
        if (e.getBBox && e.parentNode) {
            d = e.getBBox();
            g = e.getScreenCTM();
            e = e.farthestViewportElement || e;
            if (!e.createSVGPoint) return b;
            e = e.createSVGPoint();
            e.x = d.x;
            e.y = d.y;
            h = e.matrixTransform(g);
            b.offset.left = h.x;
            b.offset.top = h.y;
            e.x += d.width;
            e.y += d.height;
            h = e.matrixTransform(g);
            b.width = h.x - b.offset.left;
            b.height = h.y - b.offset.top;
            b.offset.left += c.scrollLeft();
            b.offset.top += c.scrollTop()
        }
        return b
    };
    A.modal = function(a) {
        var b = a.plugins.modal;
        return "object" === typeof b ? b : a.plugins.modal = new r(a)
    };
    A.modal.initialize = "render";
    A.modal.sanitize = function(a) {
        a.show && ("object" !== typeof a.show.modal ? a.show.modal = {
                on: !!a.show.modal
            } : "undefined" === typeof a.show.modal.on &&
            (a.show.modal.on = !0))
    };
    A.modal.zindex = v.zindex + 1E3;
    a.extend(!0, v.defaults, {
        show: {
            modal: {
                on: !1,
                effect: !0,
                blur: !0,
                escape: !0
            }
        }
    });
    A.bgiframe = function(b) {
        var c = a.browser,
            e = b.plugins.bgiframe;
        return 1 > a("select, object").length || !c.msie || "6" !== ("" + c.version).charAt(0) ? !1 : "object" === typeof e ? e : b.plugins.bgiframe = new z(b)
    };
    A.bgiframe.initialize = "render"
})(jQuery, window);

function getkey(a) {
    return window.event ? window.event.keyCode : a ? a.which : null
}

function isNumericKey(a) {
    var d;
    a = getkey(a);
    if (null == a) return !0;
    d = String.fromCharCode(a);
    d = d.toLowerCase();
    return -1 != "0123456789".indexOf(d) || null == a || 0 == a || 8 == a || 9 == a || 13 == a || 27 == a ? !0 : !1
}
$.validator.addMethod("password", function(a, d) {
    a = this.optional(d) || 8 <= a.length && /\d/.test(a) && /[a-z]/i.test(a);
    if (!a) {
        var c = this;
        setTimeout(function() {
            c.blockFocusCleanup = !1
        }, 1)
    }
    return a
});
$.validator.addMethod("namesurname", function(a, d) {
    return /[0-9]/.exec(a) ? !1 : /\w+/.test(a) ? 2 >= a.split(" ").length : !1
});

function buildDefaultJqueryValidatorOptions(a, d, c) {
    return {
        errorPlacement: function(a, e) {
            if ("" == c || null == c) {
                e = $(e);
                var d = ["left center", "right center"],
                    h = 0 < e.parents("dd.inputContainer").length;
                a.is(":empty") ? e.qtip("destroy") : e.filter(":not(.valid)").qtip({
                    overwrite: !0,
                    content: a,
                    position: {
                        my: d[h ? 0 : 1],
                        at: d[h ? 1 : 0],
                        viewport: $(window),
                        adjust: {
                            x: 10
                        }
                    },
                    show: {
                        event: !1,
                        ready: !0
                    },
                    hide: !1,
                    style: {
                        classes: "ui-tooltip-red"
                    }
                }).qtip("option", "content.text", a)
            } else a.appendTo(c)
        },
        showErrors: function(a, c) {
            for (a = 0; c[a]; a++);
            this.defaultShowErrors()
        },
        rules: a,
        onkeyup: !1,
        onsubmit: !1,
        validClass: "valid",
        focusCleanup: !1,
        messages: d,
        success: function(a) {
            $(a).addClass("okForm")
        }
    }
}
$(function() {
    $("body").on("keypress", "input.numericInput, input.uiNumerics", function(a) {
        return isNumericKey(a)
    })
});
var generateOnlyNumber = function(a, d) {
    var c = !1;
    void 0 !== d && 1 == d && (c = !0);
    null !== a && (0 < a.length || c) && a.keyup(function(a) {
        a = $(this);
        var c = a.val().replace(/[^0-9]/g, "");
        a.val(c)
    })
};
$(function() {
    var a = {},
        d = "",
        c = function(a) {
            var c = "unknown";
            $.each($(a).attr("class").split(" "), function(a, b) {
                0 == b.indexOf("trackId_") && (c = b.replace("trackId_", ""))
            });
            return c
        };
    "undefined" !== typeof pageTrackData && "undefined" !== typeof pageTrackData.view && (d = pageTrackData.view);
    $(document).on("click", ".trackClick", function(b) {
        if (2 == b.button) return !1;
        b = c(this);
        var e = $(this),
            g = e.data("clickCategory") ? e.data("clickCategory") : "Tiklama Takibi",
            h = e.data("clickEvent") ? e.data("clickEvent") : d,
            k = e.data("clickLabel") ||
            "unknown",
            e = e.data("eventLimit") || -1,
            m = b && "unknown" !== b ? b : k,
            p = g + "|" + h + "|" + m;
        b = function() {
            if ("undefined" == typeof gaTrackEvent) return !1;
            gaTrackEvent(g, h, m);
            a[p] = (a[p] || 0) + 1
        }; - 1 === e ? b() : (a[p] || 0) < e && b()
    });
    $(document).on("click", ".trackLinkClick", function(a) {
        if (!gaTrackEventWithCallback || 2 == a.button) return !1;
        a.preventDefault();
        var e = c(this);
        a = $(this);
        var d = a.data("clickCategory") ? a.data("clickCategory") : "Tiklama Takibi",
            h = a.data("clickEvent") ? a.data("clickEvent") : h,
            k = a.data("clickLabel") || "unknown",
            e =
            e && "unknown" !== e ? e : k,
            m = a.attr("href");
        gaTrackEventWithCallback(d, h, e, null, function() {
            window.location.href = m
        })
    })
});
$(function() {
    var a = $(".estate-360-menu"),
        d = $(".auto-360-menu");
    a.add(d).find("a").on("click", function(c) {
        if (-1 === $(this).attr("href").indexOf("javascript") && "#" !== $(this).attr("href") && "undefined" !== typeof window.gaTrackEvent) {
            var b = 0 < a.length ? "Emlak360 | Hizmetler" : "Oto360 | Hizmetler",
                e = $(this).attr("href");
            c.preventDefault();
            window.gaTrackEventWithCallback(b, "click", "Anasayfa Navigasyon", null, function() {
                window.location.href = e
            }, !0)
        }
    })
});
$(function() {
    var a = $("body"),
        d = $(".tipitip-trigger"),
        c = d.length,
        b = 0,
        e = 0,
        g, h, k, m, p, r, z, v = function(a, b, c) {
            var e = a.innerWidth(),
                d = a.innerHeight(),
                g = a.offset();
            a = g.top;
            var g = g.left,
                h = c.outerHeight();
            c = c.outerWidth();
            var k = {
                "north-west": [0, 0],
                north: [0, 1],
                "north-east": [0, 2],
                "south-west": [1, 0],
                south: [1, 1],
                "south-east": [1, 2],
                west: [2, 3],
                east: [2, 4]
            };
            return {
                top: [a - (h + 9), a + d + 9, a - (h - d) / 2][k[b][0]],
                left: [g, g - (c - e) / 2, g - c + e, g - c - 13, g + e + 13][k[b][1]]
            }
        },
        A = function(b) {
            var c = $(this),
                e = c.data("ttId"),
                d = $("#" + e);
            if (0 < d.length &&
                d.is(":hidden") || 0 == d.length) {
                var g = c.attr("title") || c.data("title"),
                    k = c.data("position") || "east",
                    m = c.data("stayOpen") ? "tipitip-stay-open" : " ",
                    t = c.data("openEvent") || "mouseenter",
                    C = c.data("closeEvent") || "mouseleave",
                    A = d.length,
                    u = c.data("live"),
                    B = c.data("fixed");
                b.preventDefault();
                b.stopPropagation();
                w();
                if (!(0 < A) || u) {
                    b = c.data("class") ? c.data("class") : "";
                    var F = $('\x3cdiv id\x3d"' + e + '" class\x3d"tipitip ' + b + " " + m + '"\x3e\x3c/div\x3e').appendTo(a),
                        V = c.data("target"),
                        N = c.data("sticky") || !1,
                        e = (V ? $(V).html() :
                            "") || c.data("content") || c.attr("title") || c.data("title");
                    F.addClass("tt-" + k).html(e).css(v(c, k, F)).data("tipitipTrigger", c).on("mouseleave", function() {
                        !0 !== N && $(this).hide()
                    }).on("mouseenter touchstart", function() {
                        clearTimeout(p)
                    });
                    u && (r = setInterval(function() {
                        F.html((V ? $(V).html() : "") || c.data("content") || c.attr("title") || c.data("title"))
                    }, 400))
                }
                d.css(v(c, k, d));
                t == C ? (d.toggle(), c.toggleClass("tipitip-open")) : (d.show(), a.off(C), a.on(C, ".tipitip-trigger", n), c.addClass("tipitip-open"));
                z = function() {
                    $(d.selector).is(":visible") &&
                        $(d.selector).css("top", v(c, k, d).top)
                };
                if (B) $(window).on("scroll", z);
                g && (h = g, c.attr("title") && c.attr("title", ""), c.data("title") && c.data("title", ""))
            }
        },
        n = function() {
            var a = $(this),
                b = a.attr("title") || a.data("title"),
                c = a.data("live"),
                e = a.data("delayTime") || 400;
            c && ($("#" + a.data("ttId")).remove(), clearInterval(r));
            "" === b && (a.attr("title") && a.attr("title", h), a.data("title") && a.data("title", h));
            a.data("stayOpen") || (p && clearTimeout(p), p = setTimeout(function() {
                    $("#" + a.data("ttId")).hide();
                    a.removeClass("tipitip-open")
                },
                e))
        },
        w = function() {
            $(".tipitip").not(".tipitip-stay-open").hide().each(function() {
                $(this).data("tipitipTrigger") && $(this).data("tipitipTrigger").hasClass("tipitip-open") && $(this).data("tipitipTrigger").removeClass("tipitip-open")
            });
            z && $(window).off("scroll", z)
        };
    (function() {
        d = $(".tipitip-trigger");
        c = d.length;
        e = b = 0;
        for (b; b < c; b++) {
            g = $(d[b]);
            k = g.data("onload");
            m = g.data("openEvent") || "mouseenter touchend";
            g.data("ttId", "tt-" + e++);
            if (k) {
                var a = new MouseEvent("click", {
                    bubbles: !0,
                    cancelable: !0,
                    view: window
                });
                A.call(g, a)
            }
            g.on(m, A)
        }
    })();
    a.on("touchend click", function(a) {
        $(a.target).is("a, .tipitip-trigger") || w()
    });
    var C = $(".username-area"),
        B = $(".favorite-search a"),
        t = $(".messages .with-get"),
        F = $(".notifications a");
    $(".breadcrumb-items a").click(function() {
        t.removeClass("tipitip-open");
        F.removeClass("tipitip-open");
        C.removeClass("tipitip-open");
        B.removeClass("tipitip-open");
        $(".user-messages-tooltip").hide();
        $(".user-notifications-tooltip").hide();
        $(".user-menu-tooltip").hide();
        $(".favorite-search-tooltip").hide()
    });
    C.click(function(a) {
        a.stopPropagation();
        B.removeClass("tipitip-open");
        t.removeClass("tipitip-open");
        F.removeClass("tipitip-open");
        $(".favorite-search-tooltip").hide();
        $(".user-messages-tooltip").hide();
        $(".user-notifications-tooltip").hide()
    });
    B.click(function(a) {
        a.stopPropagation();
        C.removeClass("tipitip-open");
        t.removeClass("tipitip-open");
        F.removeClass("tipitip-open");
        $(".user-menu-tooltip").hide();
        $(".user-messages-tooltip").hide();
        $(".user-notifications-tooltip").hide()
    });
    t.click(function(a) {
        a.stopPropagation();
        B.removeClass("tipitip-open");
        C.removeClass("tipitip-open");
        F.removeClass("tipitip-open");
        $(".favorite-search-tooltip").hide();
        $(".user-menu-tooltip").hide();
        $(".user-notifications-tooltip").hide()
    });
    F.click(function(a) {
        a.stopPropagation();
        B.removeClass("tipitip-open");
        C.removeClass("tipitip-open");
        t.removeClass("tipitip-open");
        $(".favorite-search-tooltip").hide();
        $(".user-menu-tooltip").hide();
        $(".user-messages-tooltip").hide()
    });
    $(window).on("orientationchange", function() {
        w()
    });
    $(document).on("mouseleave",
        ".user-notifications-tooltip, .user-messages-tooltip",
        function() {
            $(".user-login \x3e li \x3e a").removeClass("tipitip-open")
        })
});

function lightbox(a, d) {
    if (d.lightbox) return d.lightbox;
    this.element = d;
    this.cache = {
        bodyOverflowX: "",
        bodyOverflowY: ""
    };
    this.getScrollWidth = function() {
        var a = document.createElement("div");
        a.style.visibility = "hidden";
        a.style.width = "100px";
        a.style.msOverflowStyle = "scrollbar";
        document.body.appendChild(a);
        var b = a.offsetWidth;
        a.style.overflow = "scroll";
        var e = document.createElement("div");
        e.style.width = "100%";
        a.appendChild(e);
        e = e.offsetWidth;
        a.parentNode.removeChild(a);
        return b - e
    };
    this.defaultSettings = {
        className: "",
        closeButton: !1,
        locked: !1,
        onOpen: function() {},
        onClose: function() {}
    };
    this.settings = {};
    a = a || {};
    for (key in this.defaultSettings) this.settings[key] = a[key] || (0 == a[key] ? a[key] : this.defaultSettings[key]);
    $(d).wrap('\x3cdiv class\x3d"lightbox"\x3e\x3cdiv class\x3d"lightbox-wrapper"\x3e\x3cdiv class\x3d"lightbox-sizer"\x3e\x3cdiv class\x3d"lightbox-stage"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"lightbox-opac"\x3e\x3c/div\x3e');
    this.settings.closeButton && $(d).parents(".lightbox-stage").append('\x3cdiv class\x3d"lightbox-buttons"\x3e\x3ca href\x3d"javascript:;" class\x3d"lightbox-close-button"\x3eX\x3c/a\x3e\x3c/div\x3e');
    $(d).parents(".lightbox-stage").find(".lightbox-close-button").on("click", function() {
        d.lightbox.close(!0)
    });
    $(d).parents(".lightbox").find(".lightbox-opac").on("click", function() {
        d.lightbox.close(!1)
    });
    $(d).parents(".lightbox").addClass(this.settings.className);
    this.open = function() {
        if ($(d).parents(".lightbox").hasClass("open")) return !1;
        var a = document.getElementsByTagName("body")[0],
            b = document.getElementsByTagName("html")[0],
            e = this.getScrollWidth(),
            g = window.getComputedStyle(a, null);
        d.lightbox.cache.bodyOverflowX =
            g.overflowX;
        d.lightbox.cache.bodyOverflowY = g.overflowY;
        d.lightbox.cache.bodyPaddingRight = g.paddingRight;
        a.style.overflowX = "hidden";
        a.style.overflowY = "hidden";
        b.style.paddingRight = e + "px";
        $(d).parents(".lightbox").addClass("open");
        d.lightbox.settings.onOpen()
    };
    this.close = function(a) {
        if (!this.settings.locked || a) {
            a = document.getElementsByTagName("body")[0];
            var b = document.getElementsByTagName("html")[0];
            a.style.overflowX = d.lightbox.cache.bodyOverflowX || "auto";
            a.style.overflowY = d.lightbox.cache.bodyOverflowY ||
                "auto";
            b.style.paddingRight = d.lightbox.cache.bodyPaddingRight || "0";
            $(d).parents(".lightbox").removeClass("open");
            d.lightbox.settings.onClose()
        }
    };
    this.lock = function() {
        this.settings.locked = !0
    };
    this.unlock = function() {
        this.settings.locked = !1
    }
}
$.fn.lightbox = function(a, d, c) {
    var b = $(this);
    b.each(function(b, g) {
        if ("string" != typeof a && !g.lightbox) g.lightbox = new lightbox(a, g), $(g).addClass("lightbox-element");
        else if (g.lightbox && a) g.lightbox[a](d, c);
        else if (g.lightbox && !a) return g.lightbox
    });
    return {
        open: function() {
            $(b).lightbox("open")
        },
        close: function(a) {
            $(b).lightbox("close", a)
        },
        lock: function() {
            $(b).lightbox("lock")
        },
        unlock: function() {
            $(b).lightbox("unlock")
        }
    }
};
$(document).ready(function() {
    $("[lightbox-id]").each(function() {
        var a = $(this);
        a.lightbox({
            closeButton: a.attr("lightbox-close-button") ? "true" == a.attr("lightbox-close-button") : !1,
            className: a.attr("lightbox-class") || "",
            locked: a.attr("lightbox-locked") ? "true" == a.attr("lightbox-locked") : !1,
            onOpen: a.attr("lightbox-on-open") ? window[a.attr("lightbox-on-open")] ? window[a.attr("lightbox-on-open")] : function() {} : function() {},
            onClose: a.attr("lightbox-on-close") ? window[a.attr("lightbox-on-close")] ? window[a.attr("lightbox-on-close")] :
                function() {} : function() {}
        })
    });
    $("[open-lightbox]").on("click", function(a) {
        var d = $(this).attr("open-lightbox"),
            d = $('[lightbox-id\x3d"' + d + '"]');
        if (0 == d.size()) return !1;
        $(this).attr("no-prevent") || a.preventDefault();
        $(d).lightbox().open()
    });
    $("[close-lightbox]").on("click", function(a) {
        var d = $(this).attr("close-lightbox"),
            d = $('[lightbox-id\x3d"' + d + '"]');
        if (0 == d.size()) return !1;
        $(this).attr("no-prevent") || a.preventDefault();
        $(d).lightbox().close()
    });
    $(document).click(function(a) {
        a = $(a.target);
        var d = a.parents(".lightbox");
        0 == a.parents(".lightbox-stage").size() && 0 < d.size() && d.find(".lightbox-element").lightbox("close")
    })
});
(function(a, d) {
    function c(c, e) {
        var d;
        d = c.nodeName.toLowerCase();
        if ("area" === d) {
            e = c.parentNode;
            d = e.name;
            if (!c.href || !d || "map" !== e.nodeName.toLowerCase()) return !1;
            c = a("img[usemap\x3d#" + d + "]")[0];
            return !!c && b(c)
        }
        return (/input|select|textarea|button|object/.test(d) ? !c.disabled : "a" === d ? c.href || e : e) && b(c)
    }

    function b(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    var e = 0,
        g = /^ui-id-\d+$/;
    a.ui = a.ui || {};
    a.extend(a.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    a.fn.extend({
        focus: function(b) {
            return function(c, e) {
                return "number" === typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus();
                        e && e.call(b)
                    }, c)
                }) : b.apply(this, arguments)
            }
        }(a.fn.focus),
        scrollParent: function() {
            var b;
            b =
                a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0);
            return /fixed/.test(this.css("position")) || !b.length ? a(document) :
                b
        },
        zIndex: function(b) {
            if (b !== d) return this.css("zIndex", b);
            if (this.length) {
                b = a(this[0]);
                for (var c; b.length && b[0] !== document;) {
                    c = b.css("position");
                    if ("absolute" === c || "relative" === c || "fixed" === c)
                        if (c = parseInt(b.css("zIndex"), 10), !isNaN(c) && 0 !== c) return c;
                    b = b.parent()
                }
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++e)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                g.test(this.id) && a(this).removeAttr("id")
            })
        }
    });
    a.extend(a.expr[":"], {
        data: a.expr.createPseudo ?
            a.expr.createPseudo(function(b) {
                return function(c) {
                    return !!a.data(c, b)
                }
            }) : function(b, c, e) {
                return !!a.data(b, e[3])
            },
        focusable: function(b) {
            return c(b, !isNaN(a.attr(b, "tabindex")))
        },
        tabbable: function(b) {
            var e = a.attr(b, "tabindex"),
                d = isNaN(e);
            return (d || 0 <= e) && c(b, !d)
        }
    });
    a("\x3ca\x3e").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
        function e(b, c, d, h) {
            a.each(g, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0;
                d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0);
                h && (c -= parseFloat(a.css(b,
                    "margin" + this)) || 0)
            });
            return c
        }
        var g = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
            r = c.toLowerCase(),
            z = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + c] = function(b) {
            return b === d ? z["inner" + c].call(this) : this.each(function() {
                a(this).css(r, e(this, b) + "px")
            })
        };
        a.fn["outer" + c] = function(b, d) {
            return "number" !== typeof b ? z["outer" + c].call(this, b) : this.each(function() {
                a(this).css(r, e(this, b, !0, d) + "px")
            })
        }
    });
    a.fn.addBack || (a.fn.addBack =
        function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        });
    a("\x3ca\x3e").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData));
    a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    a.support.selectstart = "onselectstart" in document.createElement("div");
    a.fn.extend({
        disableSelection: function() {
            return this.bind((a.support.selectstart ? "selectstart" :
                "mousedown") + ".ui-disableSelection", function(a) {
                a.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    });
    a.extend(a.ui, {
        plugin: {
            add: function(b, c, e) {
                var d;
                b = a.ui[b].prototype;
                for (d in e) b.plugins[d] = b.plugins[d] || [], b.plugins[d].push([c, e[d]])
            },
            call: function(a, b, c) {
                var e = a.plugins[b];
                if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)
                    for (b = 0; b < e.length; b++) a.options[e[b][0]] && e[b][1].apply(a.element, c)
            }
        },
        hasScroll: function(b, c) {
            if ("hidden" ===
                a(b).css("overflow")) return !1;
            c = c && "left" === c ? "scrollLeft" : "scrollTop";
            var e;
            if (0 < b[c]) return !0;
            b[c] = 1;
            e = 0 < b[c];
            b[c] = 0;
            return e
        }
    })
})(jQuery);
(function(a, d) {
    var c = 0,
        b = Array.prototype.slice,
        e = a.cleanData;
    a.cleanData = function(b) {
        for (var c = 0, d; null != (d = b[c]); c++) try {
            a(d).triggerHandler("remove")
        } catch (m) {}
        e(b)
    };
    a.widget = function(b, c, e) {
        var d, p, r, z, v = {},
            A = b.split(".")[0];
        b = b.split(".")[1];
        d = A + "-" + b;
        e || (e = c, c = a.Widget);
        a.expr[":"][d.toLowerCase()] = function(b) {
            return !!a.data(b, d)
        };
        a[A] = a[A] || {};
        p = a[A][b];
        r = a[A][b] = function(a, b) {
            if (!this._createWidget) return new r(a, b);
            arguments.length && this._createWidget(a, b)
        };
        a.extend(r, p, {
            version: e.version,
            _proto: a.extend({}, e),
            _childConstructors: []
        });
        z = new c;
        z.options = a.widget.extend({}, z.options);
        a.each(e, function(b, e) {
            a.isFunction(e) ? v[b] = function() {
                var a = function() {
                        return c.prototype[b].apply(this, arguments)
                    },
                    d = function(a) {
                        return c.prototype[b].apply(this, a)
                    };
                return function() {
                    var b = this._super,
                        c = this._superApply,
                        g;
                    this._super = a;
                    this._superApply = d;
                    g = e.apply(this, arguments);
                    this._super = b;
                    this._superApply = c;
                    return g
                }
            }() : v[b] = e
        });
        r.prototype = a.widget.extend(z, {
            widgetEventPrefix: p ? z.widgetEventPrefix : b
        }, v, {
            constructor: r,
            namespace: A,
            widgetName: b,
            widgetFullName: d
        });
        p ? (a.each(p._childConstructors, function(b, c) {
            b = c.prototype;
            a.widget(b.namespace + "." + b.widgetName, r, c._proto)
        }), delete p._childConstructors) : c._childConstructors.push(r);
        a.widget.bridge(b, r)
    };
    a.widget.extend = function(c) {
        for (var e = b.call(arguments, 1), k = 0, m = e.length, p, r; k < m; k++)
            for (p in e[k]) r = e[k][p], e[k].hasOwnProperty(p) && r !== d && (a.isPlainObject(r) ? c[p] = a.isPlainObject(c[p]) ? a.widget.extend({}, c[p], r) : a.widget.extend({}, r) : c[p] = r);
        return c
    };
    a.widget.bridge = function(c, e) {
        var k = e.prototype.widgetFullName || c;
        a.fn[c] = function(m) {
            var p = "string" === typeof m,
                r = b.call(arguments, 1),
                z = this;
            m = !p && r.length ? a.widget.extend.apply(null, [m].concat(r)) : m;
            p ? this.each(function() {
                var b, e = a.data(this, k);
                if (!e) return a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + m + "'");
                if (!a.isFunction(e[m]) || "_" === m.charAt(0)) return a.error("no such method '" + m + "' for " + c + " widget instance");
                b = e[m].apply(e, r);
                if (b !== e && b !== d) return z =
                    b && b.jquery ? z.pushStack(b.get()) : b, !1
            }) : this.each(function() {
                var b = a.data(this, k);
                b ? b.option(m || {})._init() : a.data(this, k, new e(m, this))
            });
            return z
        }
    };
    a.Widget = function() {};
    a.Widget._childConstructors = [];
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "\x3cdiv\x3e",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(b, e) {
            e = a(e || this.defaultElement || this)[0];
            this.element = a(e);
            this.uuid = c++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = a.widget.extend({},
                this.options, this._getCreateOptions(), b);
            this.bindings = a();
            this.hoverable = a();
            this.focusable = a();
            e !== this && (a.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === e && this.destroy()
                }
            }), this.document = a(e.style ? e.ownerDocument : e.document || e), this.window = a(this.document[0].defaultView || this.document[0].parentWindow));
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(b, c) {
            var e = b,
                m, p, r;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" === typeof b)
                if (e = {}, m = b.split("."), b = m.shift(), m.length) {
                    p = e[b] = a.widget.extend({}, this.options[b]);
                    for (r = 0; r < m.length - 1; r++) p[m[r]] = p[m[r]] || {}, p = p[m[r]];
                    b = m.pop();
                    if (c === d) return p[b] === d ? null : p[b];
                    p[b] = c
                } else {
                    if (c === d) return this.options[b] === d ? null : this.options[b];
                    e[b] = c
                }
            this._setOptions(e);
            return this
        },
        _setOptions: function(a) {
            for (var b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a,
            b) {
            this.options[a] = b;
            "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"));
            return this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(b, c, e) {
            var d, p = this;
            "boolean" !== typeof b && (e = c, c = b, b = !1);
            e ? (c = d = a(c), this.bindings = this.bindings.add(c)) : (e = c, c = this.element, d =
                this.widget());
            a.each(e, function(e, k) {
                function v() {
                    if (b || !0 !== p.options.disabled && !a(this).hasClass("ui-state-disabled")) return ("string" === typeof k ? p[k] : k).apply(p, arguments)
                }
                "string" !== typeof k && (v.guid = k.guid = k.guid || v.guid || a.guid++);
                var A = e.match(/^(\w+)\s*(.*)$/);
                e = A[1] + p.eventNamespace;
                (A = A[2]) ? d.delegate(A, e, v): c.bind(e, v)
            })
        },
        _off: function(a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            a.unbind(b).undelegate(b)
        },
        _delay: function(a, b) {
            var c = this;
            return setTimeout(function() {
                return ("string" ===
                    typeof a ? c[a] : a).apply(c, arguments)
            }, b || 0)
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b);
            this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b);
            this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(b, c, e) {
            var d,
                p = this.options[b];
            e = e || {};
            c = a.Event(c);
            c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase();
            c.target = this.element[0];
            if (b = c.originalEvent)
                for (d in b) d in c || (c[d] = b[d]);
            this.element.trigger(c, e);
            return !(a.isFunction(p) && !1 === p.apply(this.element[0], [c].concat(e)) || c.isDefaultPrevented())
        }
    };
    a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(e, d, p) {
            "string" === typeof d && (d = {
                effect: d
            });
            var r, z = d ? !0 === d || "number" === typeof d ? c : d.effect || c : b;
            d =
                d || {};
            "number" === typeof d && (d = {
                duration: d
            });
            r = !a.isEmptyObject(d);
            d.complete = p;
            d.delay && e.delay(d.delay);
            if (r && a.effects && a.effects.effect[z]) e[b](d);
            else if (z !== b && e[z]) e[z](d.duration, d.easing, p);
            else e.queue(function(c) {
                a(this)[b]();
                p && p.call(e[0]);
                c()
            })
        }
    })
})(jQuery);
(function(a, d) {
    var c = !1;
    a(document).mouseup(function() {
        c = !1
    });
    a.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function(a) {
                return b._mouseDown(a)
            }).bind("click." + this.widgetName, function(c) {
                if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1
            });
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(b) {
            if (!c) {
                this._mouseStarted && this._mouseUp(b);
                this._mouseDownEvent = b;
                var e = this,
                    d = 1 === b.which,
                    h = "string" === typeof this.options.cancel && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
                if (!d || h || !this._mouseCapture(b)) return !0;
                this.mouseDelayMet = !this.options.delay;
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    e.mouseDelayMet = !0
                }, this.options.delay));
                if (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = !1 !== this._mouseStart(b), !this._mouseStarted)) return b.preventDefault(), !0;
                !0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent");
                this._mouseMoveDelegate = function(a) {
                    return e._mouseMove(a)
                };
                this._mouseUpDelegate = function(a) {
                    return e._mouseUp(a)
                };
                a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                b.preventDefault();
                return c = !0
            }
        },
        _mouseMove: function(b) {
            if (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button) return this._mouseUp(b);
            if (this._mouseStarted) return this._mouseDrag(b), b.preventDefault();
            this._mouseDistanceMet(b) && this._mouseDelayMet(b) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, b)) ? this._mouseDrag(b) : this._mouseUp(b));
            return !this._mouseStarted
        },
        _mouseUp: function(b) {
            a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b));
            return !1
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
})(jQuery);
(function(a, d) {
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper ||
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._mouseDestroy()
        },
        _mouseCapture: function(c) {
            var b = this.options;
            if (this.helper || b.disabled || 0 < a(c.target).closest(".ui-resizable-handle").length) return !1;
            this.handle = this._getHandle(c);
            if (!this.handle) return !1;
            a(!0 === b.iframeFix ? "iframe" : b.iframeFix).each(function() {
                a("\x3cdiv class\x3d'ui-draggable-iframeFix' style\x3d'background: #fff;'\x3e\x3c/div\x3e").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1E3
                }).css(a(this).offset()).appendTo("body")
            });
            return !0
        },
        _mouseStart: function(c) {
            var b = this.options;
            this.helper = this._createHelper(c);
            this.helper.addClass("ui-draggable-dragging");
            this._cacheHelperProportions();
            a.ui.ddmanager && (a.ui.ddmanager.current = this);
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent();
            this.offsetParent = this.helper.offsetParent();
            this.offsetParentCssPosition = this.offsetParent.css("position");
            this.offset = this.positionAbs = this.element.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            this.offset.scroll = !1;
            a.extend(this.offset, {
                click: {
                    left: c.pageX - this.offset.left,
                    top: c.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this.position = this._generatePosition(c);
            this.originalPageX = c.pageX;
            this.originalPageY = c.pageY;
            b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt);
            this._setContainment();
            if (!1 === this._trigger("start", c)) return this._clear(), !1;
            this._cacheHelperProportions();
            a.ui.ddmanager && !b.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, c);
            this._mouseDrag(c, !0);
            a.ui.ddmanager && a.ui.ddmanager.dragStart(this, c);
            return !0
        },
        _mouseDrag: function(c, b) {
            "fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset());
            this.position = this._generatePosition(c);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!b) {
                b = this._uiHash();
                if (!1 === this._trigger("drag", c, b)) return this._mouseUp({}), !1;
                this.position = b.position
            }
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px");
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            a.ui.ddmanager && a.ui.ddmanager.drag(this, c);
            return !1
        },
        _mouseStop: function(c) {
            var b = this,
                e = !1;
            a.ui.ddmanager && !this.options.dropBehaviour && (e = a.ui.ddmanager.drop(this, c));
            this.dropped && (e = this.dropped, this.dropped = !1);
            if ("original" === this.options.helper && !a.contains(this.element[0].ownerDocument, this.element[0])) return !1;
            "invalid" === this.options.revert && !e || "valid" === this.options.revert && e || !0 === this.options.revert || a.isFunction(this.options.revert) && this.options.revert.call(this.element, e) ? a(this.helper).animate(this.originalPosition,
                parseInt(this.options.revertDuration, 10),
                function() {
                    !1 !== b._trigger("stop", c) && b._clear()
                }) : !1 !== this._trigger("stop", c) && this._clear();
            return !1
        },
        _mouseUp: function(c) {
            a("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            });
            a.ui.ddmanager && a.ui.ddmanager.dragStop(this, c);
            return a.ui.mouse.prototype._mouseUp.call(this, c)
        },
        cancel: function() {
            this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear();
            return this
        },
        _getHandle: function(c) {
            return this.options.handle ?
                !!a(c.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(c) {
            var b = this.options;
            c = a.isFunction(b.helper) ? a(b.helper.apply(this.element[0], [c])) : "clone" === b.helper ? this.element.clone().removeAttr("id") : this.element;
            c.parents("body").length || c.appendTo("parent" === b.appendTo ? this.element[0].parentNode : b.appendTo);
            c[0] === this.element[0] || /(fixed|absolute)/.test(c.css("position")) || c.css("position", "absolute");
            return c
        },
        _adjustOffsetFromHelper: function(c) {
            "string" ===
            typeof c && (c = c.split(" "));
            a.isArray(c) && (c = {
                left: +c[0],
                top: +c[1] || 0
            });
            "left" in c && (this.offset.click.left = c.left + this.margins.left);
            "right" in c && (this.offset.click.left = this.helperProportions.width - c.right + this.margins.left);
            "top" in c && (this.offset.click.top = c.top + this.margins.top);
            "bottom" in c && (this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var c = this.offsetParent.offset();
            "absolute" === this.cssPosition && this.scrollParent[0] !== document &&
                a.contains(this.scrollParent[0], this.offsetParent[0]) && (c.left += this.scrollParent.scrollLeft(), c.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) c = {
                top: 0,
                left: 0
            };
            return {
                top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.element.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var c, b, e;
            c = this.options;
            if (c.containment)
                if ("window" === c.containment) this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height -
                    this.margins.top
                ];
                else if ("document" === c.containment) this.containment = [0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            else if (c.containment.constructor === Array) this.containment = c.containment;
            else {
                if ("parent" === c.containment && (c.containment = this.helper[0].parentNode), b = a(c.containment), e = b[0]) c = "hidden" !== b.css("overflow"), this.containment = [(parseInt(b.css("borderLeftWidth"),
                        10) || 0) + (parseInt(b.css("paddingLeft"), 10) || 0), (parseInt(b.css("borderTopWidth"), 10) || 0) + (parseInt(b.css("paddingTop"), 10) || 0), (c ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(b.css("borderRightWidth"), 10) || 0) - (parseInt(b.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (c ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(b.css("borderBottomWidth"), 10) || 0) - (parseInt(b.css("paddingBottom"), 10) || 0) - this.helperProportions.height -
                    this.margins.top - this.margins.bottom
                ], this.relative_container = b
            } else this.containment = null
        },
        _convertPositionTo: function(c, b) {
            b || (b = this.position);
            c = "absolute" === c ? 1 : -1;
            var e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            this.offset.scroll || (this.offset.scroll = {
                top: e.scrollTop(),
                left: e.scrollLeft()
            });
            return {
                top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ?
                    -this.scrollParent.scrollTop() : this.offset.scroll.top) * c,
                left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * c
            }
        },
        _generatePosition: function(c) {
            var b, e, d, h = this.options,
                k = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            d = c.pageX;
            e = c.pageY;
            this.offset.scroll || (this.offset.scroll = {
                top: k.scrollTop(),
                left: k.scrollLeft()
            });
            this.originalPosition && (this.containment && (this.relative_container ? (b = this.relative_container.offset(), b = [this.containment[0] + b.left, this.containment[1] + b.top, this.containment[2] + b.left, this.containment[3] + b.top]) : b = this.containment, c.pageX - this.offset.click.left < b[0] && (d = b[0] + this.offset.click.left), c.pageY - this.offset.click.top < b[1] && (e = b[1] + this.offset.click.top), c.pageX - this.offset.click.left > b[2] && (d = b[2] + this.offset.click.left), c.pageY - this.offset.click.top > b[3] && (e = b[3] +
                this.offset.click.top)), h.grid && (e = h.grid[1] ? this.originalPageY + Math.round((e - this.originalPageY) / h.grid[1]) * h.grid[1] : this.originalPageY, e = b ? e - this.offset.click.top >= b[1] || e - this.offset.click.top > b[3] ? e : e - this.offset.click.top >= b[1] ? e - h.grid[1] : e + h.grid[1] : e, d = h.grid[0] ? this.originalPageX + Math.round((d - this.originalPageX) / h.grid[0]) * h.grid[0] : this.originalPageX, d = b ? d - this.offset.click.left >= b[0] || d - this.offset.click.left > b[2] ? d : d - this.offset.click.left >= b[0] ? d - h.grid[0] : d + h.grid[0] : d));
            return {
                top: e -
                    this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: d - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1
        },
        _trigger: function(c, b, e) {
            e = e || this._uiHash();
            a.ui.plugin.call(this, c, [b, e]);
            "drag" === c && (this.positionAbs = this._convertPositionTo("absolute"));
            return a.Widget.prototype._trigger.call(this, c, b, e)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(c, b) {
            var e = a(this).data("ui-draggable"),
                d = e.options,
                h = a.extend({}, b, {
                    item: e.element
                });
            e.sortables = [];
            a(d.connectToSortable).each(function() {
                var b = a.data(this, "ui-sortable");
                b && !b.options.disabled && (e.sortables.push({
                    instance: b,
                    shouldRevert: b.options.revert
                }), b.refreshPositions(), b._trigger("activate", c, h))
            })
        },
        stop: function(c, b) {
            var e = a(this).data("ui-draggable"),
                d = a.extend({}, b, {
                    item: e.element
                });
            a.each(e.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, e.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert),
                    this.instance._mouseStop(c), this.instance.options.helper = this.instance.options._helper, "original" === e.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", c, d))
            })
        },
        drag: function(c, b) {
            var e = a(this).data("ui-draggable"),
                d = this;
            a.each(e.sortables, function() {
                var h = !1,
                    k = this;
                this.instance.positionAbs = e.positionAbs;
                this.instance.helperProportions = e.helperProportions;
                this.instance.offset.click = e.offset.click;
                this.instance._intersectsWith(this.instance.containerCache) &&
                    (h = !0, a.each(e.sortables, function() {
                        this.instance.positionAbs = e.positionAbs;
                        this.instance.helperProportions = e.helperProportions;
                        this.instance.offset.click = e.offset.click;
                        this !== k && this.instance._intersectsWith(this.instance.containerCache) && a.contains(k.instance.element[0], this.instance.element[0]) && (h = !1);
                        return h
                    }));
                h ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(d).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper =
                    this.instance.options.helper, this.instance.options.helper = function() {
                        return b.helper[0]
                    }, c.target = this.instance.currentItem[0], this.instance._mouseCapture(c, !0), this.instance._mouseStart(c, !0, !0), this.instance.offset.click.top = e.offset.click.top, this.instance.offset.click.left = e.offset.click.left, this.instance.offset.parent.left -= e.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= e.offset.parent.top - this.instance.offset.parent.top, e._trigger("toSortable", c), e.dropped =
                    this.instance.element, e.currentItem = e.element, this.instance.fromOutside = e), this.instance.currentItem && this.instance._mouseDrag(c)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", c, this.instance._uiHash(this.instance)), this.instance._mouseStop(c, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(),
                    e._trigger("fromSortable", c), e.dropped = !1)
            })
        }
    });
    a.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var c = a("body"),
                b = a(this).data("ui-draggable").options;
            c.css("cursor") && (b._cursor = c.css("cursor"));
            c.css("cursor", b.cursor)
        },
        stop: function() {
            var c = a(this).data("ui-draggable").options;
            c._cursor && a("body").css("cursor", c._cursor)
        }
    });
    a.ui.plugin.add("draggable", "opacity", {
        start: function(c, b) {
            c = a(b.helper);
            b = a(this).data("ui-draggable").options;
            c.css("opacity") && (b._opacity = c.css("opacity"));
            c.css("opacity",
                b.opacity)
        },
        stop: function(c, b) {
            c = a(this).data("ui-draggable").options;
            c._opacity && a(b.helper).css("opacity", c._opacity)
        }
    });
    a.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var c = a(this).data("ui-draggable");
            c.scrollParent[0] !== document && "HTML" !== c.scrollParent[0].tagName && (c.overflowOffset = c.scrollParent.offset())
        },
        drag: function(c) {
            var b = a(this).data("ui-draggable"),
                e = b.options,
                d = !1;
            b.scrollParent[0] !== document && "HTML" !== b.scrollParent[0].tagName ? (e.axis && "x" === e.axis || (b.overflowOffset.top +
                b.scrollParent[0].offsetHeight - c.pageY < e.scrollSensitivity ? b.scrollParent[0].scrollTop = d = b.scrollParent[0].scrollTop + e.scrollSpeed : c.pageY - b.overflowOffset.top < e.scrollSensitivity && (b.scrollParent[0].scrollTop = d = b.scrollParent[0].scrollTop - e.scrollSpeed)), e.axis && "y" === e.axis || (b.overflowOffset.left + b.scrollParent[0].offsetWidth - c.pageX < e.scrollSensitivity ? b.scrollParent[0].scrollLeft = d = b.scrollParent[0].scrollLeft + e.scrollSpeed : c.pageX - b.overflowOffset.left < e.scrollSensitivity && (b.scrollParent[0].scrollLeft =
                d = b.scrollParent[0].scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (c.pageY - a(document).scrollTop() < e.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - e.scrollSpeed) : a(window).height() - (c.pageY - a(document).scrollTop()) < e.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + e.scrollSpeed))), e.axis && "y" === e.axis || (c.pageX - a(document).scrollLeft() < e.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - e.scrollSpeed) : a(window).width() - (c.pageX - a(document).scrollLeft()) <
                e.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + e.scrollSpeed))));
            !1 !== d && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(b, c)
        }
    });
    a.ui.plugin.add("draggable", "snap", {
        start: function() {
            var c = a(this).data("ui-draggable"),
                b = c.options;
            c.snapElements = [];
            a(b.snap.constructor !== String ? b.snap.items || ":data(ui-draggable)" : b.snap).each(function() {
                var b = a(this),
                    d = b.offset();
                this !== c.element[0] && c.snapElements.push({
                    item: this,
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: d.top,
                    left: d.left
                })
            })
        },
        drag: function(c, b) {
            var e, d, h, k, m, p, r, z, v, A, n = a(this).data("ui-draggable"),
                w = n.options,
                C = w.snapTolerance,
                B = b.offset.left,
                t = B + n.helperProportions.width,
                F = b.offset.top,
                G = F + n.helperProportions.height;
            for (v = n.snapElements.length - 1; 0 <= v; v--) m = n.snapElements[v].left, p = m + n.snapElements[v].width, r = n.snapElements[v].top, z = r + n.snapElements[v].height, t < m - C || B > p + C || G < r - C || F > z + C || !a.contains(n.snapElements[v].item.ownerDocument, n.snapElements[v].item) ? (n.snapElements[v].snapping && n.options.snap.release &&
                n.options.snap.release.call(n.element, c, a.extend(n._uiHash(), {
                    snapItem: n.snapElements[v].item
                })), n.snapElements[v].snapping = !1) : ("inner" !== w.snapMode && (e = Math.abs(r - G) <= C, d = Math.abs(z - F) <= C, h = Math.abs(m - t) <= C, k = Math.abs(p - B) <= C, e && (b.position.top = n._convertPositionTo("relative", {
                top: r - n.helperProportions.height,
                left: 0
            }).top - n.margins.top), d && (b.position.top = n._convertPositionTo("relative", {
                top: z,
                left: 0
            }).top - n.margins.top), h && (b.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: m - n.helperProportions.width
                }).left -
                n.margins.left), k && (b.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: p
            }).left - n.margins.left)), A = e || d || h || k, "outer" !== w.snapMode && (e = Math.abs(r - F) <= C, d = Math.abs(z - G) <= C, h = Math.abs(m - B) <= C, k = Math.abs(p - t) <= C, e && (b.position.top = n._convertPositionTo("relative", {
                    top: r,
                    left: 0
                }).top - n.margins.top), d && (b.position.top = n._convertPositionTo("relative", {
                    top: z - n.helperProportions.height,
                    left: 0
                }).top - n.margins.top), h && (b.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: m
                }).left - n.margins.left),
                k && (b.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: p - n.helperProportions.width
                }).left - n.margins.left)), !n.snapElements[v].snapping && (e || d || h || k || A) && n.options.snap.snap && n.options.snap.snap.call(n.element, c, a.extend(n._uiHash(), {
                snapItem: n.snapElements[v].item
            })), n.snapElements[v].snapping = e || d || h || k || A)
        }
    });
    a.ui.plugin.add("draggable", "stack", {
        start: function() {
            var c, b = this.data("ui-draggable").options,
                b = a.makeArray(a(b.stack)).sort(function(b, c) {
                    return (parseInt(a(b).css("zIndex"), 10) ||
                        0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                });
            b.length && (c = parseInt(a(b[0]).css("zIndex"), 10) || 0, a(b).each(function(b) {
                a(this).css("zIndex", c + b)
            }), this.css("zIndex", c + b.length))
        }
    });
    a.ui.plugin.add("draggable", "zIndex", {
        start: function(c, b) {
            c = a(b.helper);
            b = a(this).data("ui-draggable").options;
            c.css("zIndex") && (b._zIndex = c.css("zIndex"));
            c.css("zIndex", b.zIndex)
        },
        stop: function(c, b) {
            c = a(this).data("ui-draggable").options;
            c._zIndex && a(b.helper).css("zIndex", c._zIndex)
        }
    })
})(jQuery);
(function(a, d) {
    a.widget("ui.droppable", {
        version: "1.10.3",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var c = this.options,
                b = c.accept;
            this.isover = !1;
            this.isout = !0;
            this.accept = a.isFunction(b) ? b : function(a) {
                return a.is(b)
            };
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            };
            a.ui.ddmanager.droppables[c.scope] =
                a.ui.ddmanager.droppables[c.scope] || [];
            a.ui.ddmanager.droppables[c.scope].push(this);
            c.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var c = 0, b = a.ui.ddmanager.droppables[this.options.scope]; c < b.length; c++) b[c] === this && b.splice(c, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(c, b) {
            "accept" === c && (this.accept = a.isFunction(b) ? b : function(a) {
                return a.is(b)
            });
            a.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(c) {
            var b =
                a.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass);
            b && this._trigger("activate", c, this.ui(b))
        },
        _deactivate: function(c) {
            var b = a.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass);
            b && this._trigger("deactivate", c, this.ui(b))
        },
        _over: function(c) {
            var b = a.ui.ddmanager.current;
            b && (b.currentItem || b.element)[0] !== this.element[0] && this.accept.call(this.element[0], b.currentItem || b.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass),
                this._trigger("over", c, this.ui(b)))
        },
        _out: function(c) {
            var b = a.ui.ddmanager.current;
            b && (b.currentItem || b.element)[0] !== this.element[0] && this.accept.call(this.element[0], b.currentItem || b.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", c, this.ui(b)))
        },
        _drop: function(c, b) {
            var e = b || a.ui.ddmanager.current,
                d = !1;
            if (!e || (e.currentItem || e.element)[0] === this.element[0]) return !1;
            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var b =
                    a.data(this, "ui-droppable");
                if (b.options.greedy && !b.options.disabled && b.options.scope === e.options.scope && b.accept.call(b.element[0], e.currentItem || e.element) && a.ui.intersect(e, a.extend(b, {
                        offset: b.element.offset()
                    }), b.options.tolerance)) return d = !0, !1
            });
            return d ? !1 : this.accept.call(this.element[0], e.currentItem || e.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", c,
                this.ui(e)), this.element) : !1
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        }
    });
    a.ui.intersect = function(a, b, e) {
        if (!b.offset) return !1;
        var d = (a.positionAbs || a.position.absolute).left,
            h = d + a.helperProportions.width,
            k = (a.positionAbs || a.position.absolute).top,
            m = k + a.helperProportions.height,
            p = b.offset.left,
            r = p + b.proportions.width,
            z = b.offset.top,
            v = z + b.proportions.height;
        switch (e) {
            case "fit":
                return p <= d && h <= r && z <= k && m <= v;
            case "intersect":
                return p <
                    d + a.helperProportions.width / 2 && h - a.helperProportions.width / 2 < r && z < k + a.helperProportions.height / 2 && m - a.helperProportions.height / 2 < v;
            case "pointer":
                return e = (a.positionAbs || a.position.absolute).left + (a.clickOffset || a.offset.click).left, a = (a.positionAbs || a.position.absolute).top + (a.clickOffset || a.offset.click).top, a > z && a < z + b.proportions.height && e > p && e < p + b.proportions.width;
            case "touch":
                return (k >= z && k <= v || m >= z && m <= v || k < z && m > v) && (d >= p && d <= r || h >= p && h <= r || d < p && h > r);
            default:
                return !1
        }
    };
    a.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(c, b) {
            var e, d, h = a.ui.ddmanager.droppables[c.options.scope] || [],
                k = b ? b.type : null,
                m = (c.currentItem || c.element).find(":data(ui-droppable)").addBack();
            e = 0;
            a: for (; e < h.length; e++)
                if (!(h[e].options.disabled || c && !h[e].accept.call(h[e].element[0], c.currentItem || c.element))) {
                    for (d = 0; d < m.length; d++)
                        if (m[d] === h[e].element[0]) {
                            h[e].proportions.height = 0;
                            continue a
                        }
                    h[e].visible = "none" !== h[e].element.css("display");
                    h[e].visible && ("mousedown" === k && h[e]._activate.call(h[e],
                        b), h[e].offset = h[e].element.offset(), h[e].proportions = {
                        width: h[e].element[0].offsetWidth,
                        height: h[e].element[0].offsetHeight
                    })
                }
        },
        drop: function(c, b) {
            var e = !1;
            a.each((a.ui.ddmanager.droppables[c.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && a.ui.intersect(c, this, this.options.tolerance) && (e = this._drop.call(this, b) || e), !this.options.disabled && this.visible && this.accept.call(this.element[0], c.currentItem || c.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this,
                    b)))
            });
            return e
        },
        dragStart: function(c, b) {
            c.element.parentsUntil("body").bind("scroll.droppable", function() {
                c.options.refreshPositions || a.ui.ddmanager.prepareOffsets(c, b)
            })
        },
        drag: function(c, b) {
            c.options.refreshPositions && a.ui.ddmanager.prepareOffsets(c, b);
            a.each(a.ui.ddmanager.droppables[c.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var e, d, h;
                    h = a.ui.intersect(c, this, this.options.tolerance);
                    var k = !h && this.isover ? "isout" : h && !this.isover ? "isover" : null;
                    k &&
                        (this.options.greedy && (d = this.options.scope, h = this.element.parents(":data(ui-droppable)").filter(function() {
                            return a.data(this, "ui-droppable").options.scope === d
                        }), h.length && (e = a.data(h[0], "ui-droppable"), e.greedyChild = "isover" === k)), e && "isover" === k && (e.isover = !1, e.isout = !0, e._out.call(e, b)), this[k] = !0, this["isout" === k ? "isover" : "isout"] = !1, this["isover" === k ? "_over" : "_out"].call(this, b), e && "isout" === k && (e.isout = !1, e.isover = !0, e._over.call(e, b)))
                }
            })
        },
        dragStop: function(c, b) {
            c.element.parentsUntil("body").unbind("scroll.droppable");
            c.options.refreshPositions || a.ui.ddmanager.prepareOffsets(c, b)
        }
    }
})(jQuery);
(function(a, d) {
    function c(a, b, c) {
        return a > b && a < b + c
    }

    function b(a) {
        return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
    }
    a.widget("ui.sortable", a.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "\x3e *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1E3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var a = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? "x" === a.axis || b(this.items[0].item) : !1;
            this.offset = this.element.offset();
            this._mouseInit();
            this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled");
            this._mouseDestroy();
            for (var a = this.items.length - 1; 0 <= a; a--) this.items[a].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(b, c) {
            "disabled" === b ? (this.options[b] = c, this.widget().toggleClass("ui-sortable-disabled", !!c)) : a.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(b, c) {
            var d = null,
                k = !1,
                m = this;
            if (this.reverting || this.options.disabled || "static" === this.options.type) return !1;
            this._refreshItems(b);
            a(b.target).parents().each(function() {
                if (a.data(this,
                        m.widgetName + "-item") === m) return d = a(this), !1
            });
            a.data(b.target, m.widgetName + "-item") === m && (d = a(b.target));
            if (!d || this.options.handle && !c && (a(this.options.handle, d).find("*").addBack().each(function() {
                    this === b.target && (k = !0)
                }), !k)) return !1;
            this.currentItem = d;
            this._removeCurrentsFromItems();
            return !0
        },
        _mouseStart: function(b, c, d) {
            var k;
            c = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(b);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent =
                this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            this.originalPosition = this._generatePosition(b);
            this.originalPageX = b.pageX;
            this.originalPageY = b.pageY;
            c.cursorAt &&
                this._adjustOffsetFromHelper(c.cursorAt);
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide();
            this._createPlaceholder();
            c.containment && this._setContainment();
            c.cursor && "auto" !== c.cursor && (k = this.document.find("body"), this.storedCursor = k.css("cursor"), k.css("cursor", c.cursor), this.storedStylesheet = a("\x3cstyle\x3e*{ cursor: " + c.cursor + " !important; }\x3c/style\x3e").appendTo(k));
            c.opacity && (this.helper.css("opacity") &&
                (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", c.opacity));
            c.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", c.zIndex));
            this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset());
            this._trigger("start", b, this._uiHash());
            this._preserveHelperProportions || this._cacheHelperProportions();
            if (!d)
                for (d = this.containers.length - 1; 0 <= d; d--) this.containers[d]._trigger("activate",
                    b, this._uiHash(this));
            a.ui.ddmanager && (a.ui.ddmanager.current = this);
            a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b);
            this.dragging = !0;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(b);
            return !0
        },
        _mouseDrag: function(b) {
            var c, d, k, m;
            c = this.options;
            d = !1;
            this.position = this._generatePosition(b);
            this.positionAbs = this._convertPositionTo("absolute");
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            this.options.scroll && (this.scrollParent[0] !== document && "HTML" !==
                this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < c.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + c.scrollSpeed : b.pageY - this.overflowOffset.top < c.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - c.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < c.scrollSensitivity ? this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + c.scrollSpeed : b.pageX -
                    this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - c.scrollSpeed)) : (b.pageY - a(document).scrollTop() < c.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - c.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < c.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + c.scrollSpeed)), b.pageX - a(document).scrollLeft() < c.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - c.scrollSpeed) :
                    a(window).width() - (b.pageX - a(document).scrollLeft()) < c.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + c.scrollSpeed))), !1 !== d && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b));
            this.positionAbs = this._convertPositionTo("absolute");
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px");
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (c = this.items.length - 1; 0 <= c; c--)
                if (d =
                    this.items[c], k = d.item[0], (m = this._intersectsWithPointer(d)) && d.instance === this.currentContainer && k !== this.currentItem[0] && this.placeholder[1 === m ? "next" : "prev"]()[0] !== k && !a.contains(this.placeholder[0], k) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], k) : 1)) {
                    this.direction = 1 === m ? "down" : "up";
                    if ("pointer" === this.options.tolerance || this._intersectsWithSides(d)) this._rearrange(b, d);
                    else break;
                    this._trigger("change", b, this._uiHash());
                    break
                }
            this._contactContainers(b);
            a.ui.ddmanager &&
                a.ui.ddmanager.drag(this, b);
            this._trigger("sort", b, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return !1
        },
        _mouseStop: function(b, c) {
            if (b) {
                a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b);
                if (this.options.revert) {
                    var d = this;
                    c = this.placeholder.offset();
                    var k = this.options.axis,
                        m = {};
                    k && "x" !== k || (m.left = c.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft));
                    k && "y" !== k || (m.top = c.top - this.offset.parent.top -
                        this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop));
                    this.reverting = !0;
                    a(this.helper).animate(m, parseInt(this.options.revert, 10) || 500, function() {
                        d._clear(b)
                    })
                } else this._clear(b, c);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var b = this.containers.length - 1; 0 <= b; b--) this.containers[b]._trigger("deactivate",
                    null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
            }
            this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) :
                a(this.domPosition.parent).prepend(this.currentItem));
            return this
        },
        serialize: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected),
                d = [];
            b = b || {};
            a(c).each(function() {
                var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                c && d.push((b.key || c[1] + "[]") + "\x3d" + (b.key && b.expression ? c[1] : c[2]))
            });
            !d.length && b.key && d.push(b.key + "\x3d");
            return d.join("\x26")
        },
        toArray: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected),
                d = [];
            b = b || {};
            c.each(function() {
                d.push(a(b.item ||
                    this).attr(b.attribute || "id") || "")
            });
            return d
        },
        _intersectsWith: function(a) {
            var b = this.positionAbs.left,
                c = b + this.helperProportions.width,
                d = this.positionAbs.top,
                m = d + this.helperProportions.height,
                p = a.left,
                r = p + a.width,
                z = a.top,
                v = z + a.height,
                A = this.offset.click.top,
                n = this.offset.click.left,
                A = "x" === this.options.axis || d + A > z && d + A < v,
                n = "y" === this.options.axis || b + n > p && b + n < r;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ?
                "width" : "height"] > a[this.floating ? "width" : "height"] ? A && n : p < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < r && z < d + this.helperProportions.height / 2 && m - this.helperProportions.height / 2 < v
        },
        _intersectsWithPointer: function(a) {
            var b = "x" === this.options.axis || c(this.positionAbs.top + this.offset.click.top, a.top, a.height);
            a = "y" === this.options.axis || c(this.positionAbs.left + this.offset.click.left, a.left, a.width);
            b = b && a;
            a = this._getDragVerticalDirection();
            var d = this._getDragHorizontalDirection();
            return b ? this.floating ? d && "right" === d || "down" === a ? 2 : 1 : a && ("down" === a ? 2 : 1) : !1
        },
        _intersectsWithSides: function(a) {
            var b = c(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height);
            a = c(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width);
            var d = this._getDragVerticalDirection(),
                k = this._getDragHorizontalDirection();
            return this.floating && k ? "right" === k && a || "left" === k && !a : d && ("down" === d && b || "up" === d && !b)
        },
        _getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== a && (0 < a ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== a && (0 < a ? "right" : "left")
        },
        refresh: function(a) {
            this._refreshItems(a);
            this.refreshPositions();
            return this
        },
        _connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
        },
        _getItemsAsjQuery: function(b) {
            var c, d, k, m = [],
                p = [],
                r = this._connectWith();
            if (r && b)
                for (b = r.length - 1; 0 <= b; b--)
                    for (d = a(r[b]), c = d.length - 1; 0 <= c; c--)(k =
                        a.data(d[c], this.widgetFullName)) && k !== this && !k.options.disabled && p.push([a.isFunction(k.options.items) ? k.options.items.call(k.element) : a(k.options.items, k.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), k]);
            p.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (b = p.length - 1; 0 <= b; b--) p[b][0].each(function() {
                m.push(this)
            });
            return a(m)
        },
        _removeCurrentsFromItems: function() {
            var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = a.grep(this.items, function(a) {
                for (var c = 0; c < b.length; c++)
                    if (b[c] === a.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(b) {
            this.items = [];
            this.containers = [this];
            var c, d, k, m, p, r = this.items,
                z = [
                    [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                        item: this.currentItem
                    }) : a(this.options.items, this.element), this]
                ];
            if ((p = this._connectWith()) && this.ready)
                for (c =
                    p.length - 1; 0 <= c; c--)
                    for (k = a(p[c]), d = k.length - 1; 0 <= d; d--)(m = a.data(k[d], this.widgetFullName)) && m !== this && !m.options.disabled && (z.push([a.isFunction(m.options.items) ? m.options.items.call(m.element[0], b, {
                        item: this.currentItem
                    }) : a(m.options.items, m.element), m]), this.containers.push(m));
            for (c = z.length - 1; 0 <= c; c--)
                for (b = z[c][1], k = z[c][0], d = 0, p = k.length; d < p; d++) m = a(k[d]), m.data(this.widgetName + "-item", b), r.push({
                    item: m,
                    instance: b,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(b) {
            this.offsetParent &&
                this.helper && (this.offset.parent = this._getParentOffset());
            var c, d, k;
            for (c = this.items.length - 1; 0 <= c; c--) d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (k = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = k.outerWidth(), d.height = k.outerHeight()), k = k.offset(), d.left = k.left, d.top = k.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (c =
                    this.containers.length - 1; 0 <= c; c--) k = this.containers[c].element.offset(), this.containers[c].containerCache.left = k.left, this.containers[c].containerCache.top = k.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
            return this
        },
        _createPlaceholder: function(b) {
            b = b || this;
            var c, d = b.options;
            d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                element: function() {
                    var d =
                        b.currentItem[0].nodeName.toLowerCase(),
                        h = a("\x3c" + d + "\x3e", b.document[0]).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    "tr" === d ? b.currentItem.children().each(function() {
                        a("\x3ctd\x3e\x26#160;\x3c/td\x3e", b.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(h)
                    }) : "img" === d && h.attr("src", b.currentItem.attr("src"));
                    c || h.css("visibility", "hidden");
                    return h
                },
                update: function(a, m) {
                    if (!c || d.forcePlaceholderSize) m.height() || m.height(b.currentItem.innerHeight() -
                        parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), m.width() || m.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10))
                }
            });
            b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem));
            b.currentItem.after(b.placeholder);
            d.placeholder.update(b, b.placeholder)
        },
        _contactContainers: function(e) {
            var d, h, k, m, p, r, z, v, A, n = h = null;
            for (d = this.containers.length - 1; 0 <= d; d--) a.contains(this.currentItem[0],
                this.containers[d].element[0]) || (this._intersectsWith(this.containers[d].containerCache) ? h && a.contains(this.containers[d].element[0], h.element[0]) || (h = this.containers[d], n = d) : this.containers[d].containerCache.over && (this.containers[d]._trigger("out", e, this._uiHash(this)), this.containers[d].containerCache.over = 0));
            if (h)
                if (1 === this.containers.length) this.containers[n].containerCache.over || (this.containers[n]._trigger("over", e, this._uiHash(this)), this.containers[n].containerCache.over = 1);
                else {
                    d = 1E4;
                    k = null;
                    m = (A = h.floating || b(this.currentItem)) ? "left" : "top";
                    p = A ? "width" : "height";
                    r = this.positionAbs[m] + this.offset.click[m];
                    for (h = this.items.length - 1; 0 <= h; h--) !a.contains(this.containers[n].element[0], this.items[h].item[0]) || this.items[h].item[0] === this.currentItem[0] || A && !c(this.positionAbs.top + this.offset.click.top, this.items[h].top, this.items[h].height) || (z = this.items[h].item.offset()[m], v = !1, Math.abs(z - r) > Math.abs(z + this.items[h][p] - r) && (v = !0, z += this.items[h][p]), Math.abs(z - r) < d && (d = Math.abs(z -
                        r), k = this.items[h], this.direction = v ? "up" : "down"));
                    (k || this.options.dropOnEmpty) && this.currentContainer !== this.containers[n] && (k ? this._rearrange(e, k, null, !0) : this._rearrange(e, null, this.containers[n].element, !0), this._trigger("change", e, this._uiHash()), this.containers[n]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[n], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", e, this._uiHash(this)), this.containers[n].containerCache.over =
                        1)
                }
        },
        _createHelper: function(b) {
            var c = this.options;
            b = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
            b.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(b[0]);
            b[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            });
            b[0].style.width && !c.forceHelperSize || b.width(this.currentItem.width());
            b[0].style.height && !c.forceHelperSize || b.height(this.currentItem.height());
            return b
        },
        _adjustOffsetFromHelper: function(b) {
            "string" === typeof b && (b = b.split(" "));
            a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            });
            "left" in b && (this.offset.click.left = b.left + this.margins.left);
            "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left);
            "top" in b && (this.offset.click.top = b.top +
                this.margins.top);
            "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() &&
                a.ui.ie) b = {
                top: 0,
                left: 0
            };
            return {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var b, c, d;
            c = this.options;
            "parent" === c.containment && (c.containment = this.helper[0].parentNode);
            if ("document" === c.containment || "window" === c.containment) this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top -
                this.offset.parent.top, a("document" === c.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" === c.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ];
            /^(document|window|parent)$/.test(c.containment) || (b = a(c.containment)[0], c = a(c.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"),
                    10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height -
                this.margins.top
            ])
        },
        _convertPositionTo: function(b, c) {
            c || (c = this.position);
            b = "absolute" === b ? 1 : -1;
            var d = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                k = /(html|body)/i.test(d[0].tagName);
            return {
                top: c.top + this.offset.relative.top * b + this.offset.parent.top * b - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : k ? 0 : d.scrollTop()) * b,
                left: c.left + this.offset.relative.left * b + this.offset.parent.left *
                    b - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : k ? 0 : d.scrollLeft()) * b
            }
        },
        _generatePosition: function(b) {
            var c, d, k = this.options;
            d = b.pageX;
            c = b.pageY;
            var m = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                p = /(html|body)/i.test(m[0].tagName);
            "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (d = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (c = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (d = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (c = this.containment[3] + this.offset.click.top)), k.grid && (c = this.originalPageY + Math.round((c - this.originalPageY) / k.grid[1]) *
                k.grid[1], c = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - k.grid[1] : c + k.grid[1] : c, d = this.originalPageX + Math.round((d - this.originalPageX) / k.grid[0]) * k.grid[0], d = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - k.grid[0] : d + k.grid[0] : d));
            return {
                top: c - this.offset.click.top - this.offset.relative.top -
                    this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : p ? 0 : m.scrollTop()),
                left: d - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : p ? 0 : m.scrollLeft())
            }
        },
        _rearrange: function(a, b, c, d) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling);
            var m = this.counter = this.counter ? ++this.counter : 1;
            this._delay(function() {
                m ===
                    this.counter && this.refreshPositions(!d)
            })
        },
        _clear: function(a, b) {
            this.reverting = !1;
            var c, d = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem);
            this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (c in this._storedCSS)
                    if ("auto" === this._storedCSS[c] || "static" === this._storedCSS[c]) this._storedCSS[c] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !b && d.push(function(a) {
                this._trigger("receive",
                    a, this._uiHash(this.fromOutside))
            });
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || d.push(function(a) {
                this._trigger("update", a, this._uiHash())
            });
            this === this.currentContainer || b || (d.push(function(a) {
                this._trigger("remove", a, this._uiHash())
            }), d.push(function(a) {
                return function(b) {
                    a._trigger("receive", b, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), d.push(function(a) {
                return function(b) {
                    a._trigger("update",
                        b, this._uiHash(this))
                }
            }.call(this, this.currentContainer)));
            for (c = this.containers.length - 1; 0 <= c; c--) b || d.push(function(a) {
                return function(b) {
                    a._trigger("deactivate", b, this._uiHash(this))
                }
            }.call(this, this.containers[c])), this.containers[c].containerCache.over && (d.push(function(a) {
                return function(b) {
                    a._trigger("out", b, this._uiHash(this))
                }
            }.call(this, this.containers[c])), this.containers[c].containerCache.over = 0);
            this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove());
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity);
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex);
            this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!b) {
                    this._trigger("beforeStop", a, this._uiHash());
                    for (c = 0; c < d.length; c++) d[c].call(this, a);
                    this._trigger("stop", a, this._uiHash())
                }
                return this.fromOutside = !1
            }
            b || this._trigger("beforeStop", a, this._uiHash());
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            this.helper[0] !== this.currentItem[0] &&
                this.helper.remove();
            this.helper = null;
            if (!b) {
                for (c = 0; c < d.length; c++) d[c].call(this, a);
                this._trigger("stop", a, this._uiHash())
            }
            this.fromOutside = !1;
            return !0
        },
        _trigger: function() {
            !1 === a.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(b) {
            var c = b || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || a([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: b ? b.element : null
            }
        }
    })
})(jQuery);
(function(a, d) {
    function c(a, b, c) {
        return [parseFloat(a[0]) * (v.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (v.test(a[1]) ? c / 100 : 1)]
    }

    function b(b) {
        var c = b[0];
        return 9 === c.nodeType ? {
            width: b.width(),
            height: b.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : a.isWindow(c) ? {
            width: b.width(),
            height: b.height(),
            offset: {
                top: b.scrollTop(),
                left: b.scrollLeft()
            }
        } : c.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: c.pageY,
                left: c.pageX
            }
        } : {
            width: b.outerWidth(),
            height: b.outerHeight(),
            offset: b.offset()
        }
    }
    a.ui = a.ui || {};
    var e, g = Math.max,
        h = Math.abs,
        k =
        Math.round,
        m = /left|center|right/,
        p = /top|center|bottom/,
        r = /[\+\-]\d+(\.[\d]+)?%?/,
        z = /^\w+/,
        v = /%$/,
        A = a.fn.position;
    a.position = {
        scrollbarWidth: function() {
            if (e !== d) return e;
            var b, c, g = a("\x3cdiv style\x3d'display:block;width:50px;height:50px;overflow:hidden;'\x3e\x3cdiv style\x3d'height:100px;width:auto;'\x3e\x3c/div\x3e\x3c/div\x3e");
            c = g.children()[0];
            a("body").append(g);
            b = c.offsetWidth;
            g.css("overflow", "scroll");
            c = c.offsetWidth;
            b === c && (c = g[0].clientWidth);
            g.remove();
            return e = b - c
        },
        getScrollInfo: function(b) {
            var c =
                b.isWindow ? "" : b.element.css("overflow-x"),
                e = b.isWindow ? "" : b.element.css("overflow-y"),
                c = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth;
            return {
                width: "scroll" === e || "auto" === e && b.height < b.element[0].scrollHeight ? a.position.scrollbarWidth() : 0,
                height: c ? a.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(b) {
            b = a(b || window);
            var c = a.isWindow(b[0]);
            return {
                element: b,
                isWindow: c,
                offset: b.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: b.scrollLeft(),
                scrollTop: b.scrollTop(),
                width: c ? b.width() : b.outerWidth(),
                height: c ? b.height() : b.outerHeight()
            }
        }
    };
    a.fn.position = function(e) {
        if (!e || !e.of) return A.apply(this, arguments);
        e = a.extend({}, e);
        var d, v, B, t, F, G, y = a(e.of),
            H = a.position.getWithinInfo(e.within),
            O = a.position.getScrollInfo(H),
            W = (e.collision || "flip").split(" "),
            K = {};
        G = b(y);
        y[0].preventDefault && (e.at = "left top");
        v = G.width;
        B = G.height;
        t = G.offset;
        F = a.extend({}, t);
        a.each(["my", "at"], function() {
            var a = (e[this] || "").split(" "),
                b, c;
            1 === a.length && (a = m.test(a[0]) ? a.concat(["center"]) : p.test(a[0]) ? ["center"].concat(a) : ["center", "center"]);
            a[0] = m.test(a[0]) ? a[0] : "center";
            a[1] = p.test(a[1]) ? a[1] : "center";
            b = r.exec(a[0]);
            c = r.exec(a[1]);
            K[this] = [b ? b[0] : 0, c ? c[0] : 0];
            e[this] = [z.exec(a[0])[0], z.exec(a[1])[0]]
        });
        1 === W.length && (W[1] = W[0]);
        "right" === e.at[0] ? F.left += v : "center" === e.at[0] && (F.left += v / 2);
        "bottom" === e.at[1] ? F.top += B : "center" === e.at[1] && (F.top += B / 2);
        d = c(K.at, v, B);
        F.left += d[0];
        F.top += d[1];
        return this.each(function() {
            var b, m, p = a(this),
                r = p.outerWidth(),
                u = p.outerHeight(),
                A = parseInt(a.css(this, "marginLeft"), 10) || 0,
                z =
                parseInt(a.css(this, "marginTop"), 10) || 0,
                G = r + A + (parseInt(a.css(this, "marginRight"), 10) || 0) + O.width,
                N = u + z + (parseInt(a.css(this, "marginBottom"), 10) || 0) + O.height,
                x = a.extend({}, F),
                S = c(K.my, p.outerWidth(), p.outerHeight());
            "right" === e.my[0] ? x.left -= r : "center" === e.my[0] && (x.left -= r / 2);
            "bottom" === e.my[1] ? x.top -= u : "center" === e.my[1] && (x.top -= u / 2);
            x.left += S[0];
            x.top += S[1];
            a.support.offsetFractions || (x.left = k(x.left), x.top = k(x.top));
            b = {
                marginLeft: A,
                marginTop: z
            };
            a.each(["left", "top"], function(c, g) {
                if (a.ui.position[W[c]]) a.ui.position[W[c]][g](x, {
                    targetWidth: v,
                    targetHeight: B,
                    elemWidth: r,
                    elemHeight: u,
                    collisionPosition: b,
                    collisionWidth: G,
                    collisionHeight: N,
                    offset: [d[0] + S[0], d[1] + S[1]],
                    my: e.my,
                    at: e.at,
                    within: H,
                    elem: p
                })
            });
            e.using && (m = function(a) {
                var b = t.left - x.left,
                    c = b + v - r,
                    d = t.top - x.top,
                    k = d + B - u,
                    m = {
                        target: {
                            element: y,
                            left: t.left,
                            top: t.top,
                            width: v,
                            height: B
                        },
                        element: {
                            element: p,
                            left: x.left,
                            top: x.top,
                            width: r,
                            height: u
                        },
                        horizontal: 0 > c ? "left" : 0 < b ? "right" : "center",
                        vertical: 0 > k ? "top" : 0 < d ? "bottom" : "middle"
                    };
                v < r && h(b + c) < v && (m.horizontal = "center");
                B < u && h(d +
                    k) < B && (m.vertical = "middle");
                g(h(b), h(c)) > g(h(d), h(k)) ? m.important = "horizontal" : m.important = "vertical";
                e.using.call(this, a, m)
            });
            p.offset(a.extend(x, {
                using: m
            }))
        })
    };
    a.ui.position = {
        fit: {
            left: function(a, b) {
                var c = b.within,
                    e = c.isWindow ? c.scrollLeft : c.offset.left,
                    d = c.width,
                    h = a.left - b.collisionPosition.marginLeft,
                    c = e - h,
                    k = h + b.collisionWidth - d - e;
                b.collisionWidth > d ? 0 < c && 0 >= k ? (b = a.left + c + b.collisionWidth - d - e, a.left += c - b) : a.left = 0 < k && 0 >= c ? e : c > k ? e + d - b.collisionWidth : e : a.left = 0 < c ? a.left + c : 0 < k ? a.left - k : g(a.left - h,
                    a.left)
            },
            top: function(a, b) {
                var c = b.within,
                    e = c.isWindow ? c.scrollTop : c.offset.top,
                    d = b.within.height,
                    h = a.top - b.collisionPosition.marginTop,
                    c = e - h,
                    k = h + b.collisionHeight - d - e;
                b.collisionHeight > d ? 0 < c && 0 >= k ? (b = a.top + c + b.collisionHeight - d - e, a.top += c - b) : a.top = 0 < k && 0 >= c ? e : c > k ? e + d - b.collisionHeight : e : a.top = 0 < c ? a.top + c : 0 < k ? a.top - k : g(a.top - h, a.top)
            }
        },
        flip: {
            left: function(a, b) {
                var c = b.within,
                    e = c.offset.left + c.scrollLeft,
                    d = c.width,
                    g = c.isWindow ? c.scrollLeft : c.offset.left,
                    k = a.left - b.collisionPosition.marginLeft,
                    c = k -
                    g,
                    m = k + b.collisionWidth - d - g,
                    k = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                    p = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                    r = -2 * b.offset[0];
                if (0 > c) {
                    if (b = a.left + k + p + r + b.collisionWidth - d - e, 0 > b || b < h(c)) a.left += k + p + r
                } else 0 < m && (b = a.left - b.collisionPosition.marginLeft + k + p + r - g, 0 < b || h(b) < m) && (a.left += k + p + r)
            },
            top: function(a, b) {
                var c = b.within,
                    e = c.offset.top + c.scrollTop,
                    d = c.height,
                    g = c.isWindow ? c.scrollTop : c.offset.top,
                    k = a.top - b.collisionPosition.marginTop,
                    c = k - g,
                    m = k + b.collisionHeight -
                    d - g,
                    k = "top" === b.my[1] ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                    p = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                    r = -2 * b.offset[1];
                0 > c ? (b = a.top + k + p + r + b.collisionHeight - d - e, a.top + k + p + r > c && (0 > b || b < h(c)) && (a.top += k + p + r)) : 0 < m && (b = a.top - b.collisionPosition.marginTop + k + p + r - g, a.top + k + p + r > m && (0 < b || h(b) < m) && (a.top += k + p + r))
            }
        },
        flipfit: {
            left: function() {
                a.ui.position.flip.left.apply(this, arguments);
                a.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                a.ui.position.flip.top.apply(this,
                    arguments);
                a.ui.position.fit.top.apply(this, arguments)
            }
        }
    };
    (function() {
        var b, c, e, d, g = document.getElementsByTagName("body")[0];
        e = document.createElement("div");
        b = document.createElement(g ? "div" : "body");
        c = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        g && a.extend(c, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (d in c) b.style[d] = c[d];
        b.appendChild(e);
        c = g || document.documentElement;
        c.insertBefore(b, c.firstChild);
        e.style.cssText = "position: absolute; left: 10.7432222px;";
        e = a(e).offset().left;
        a.support.offsetFractions = 10 < e && 11 > e;
        b.innerHTML = "";
        c.removeChild(b)
    })()
})(jQuery);
(function(a, d) {
    var c = 0;
    a.widget("ui.autocomplete", {
        version: "1.10.3",
        defaultElement: "\x3cinput\x3e",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var b, c, d, h = this.element[0].nodeName.toLowerCase(),
                k = "textarea" === h,
                h = "input" === h;
            this.isMultiLine = k ? !0 : h ? !1 : this.element.prop("isContentEditable");
            this.valueMethod =
                this.element[k || h ? "val" : "text"];
            this.isNewMenu = !0;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(h) {
                    if (this.element.prop("readOnly")) c = d = b = !0;
                    else {
                        c = d = b = !1;
                        var k = a.ui.keyCode;
                        switch (h.keyCode) {
                            case k.PAGE_UP:
                                b = !0;
                                this._move("previousPage", h);
                                break;
                            case k.PAGE_DOWN:
                                b = !0;
                                this._move("nextPage", h);
                                break;
                            case k.UP:
                                b = !0;
                                this._keyEvent("previous", h);
                                break;
                            case k.DOWN:
                                b = !0;
                                this._keyEvent("next", h);
                                break;
                            case k.ENTER:
                            case k.NUMPAD_ENTER:
                                this.menu.active &&
                                    (b = !0, h.preventDefault(), this.menu.select(h));
                                break;
                            case k.TAB:
                                this.menu.active && this.menu.select(h);
                                break;
                            case k.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term), this.close(h), h.preventDefault());
                                break;
                            default:
                                c = !0, this._searchTimeout(h)
                        }
                    }
                },
                keypress: function(d) {
                    if (b) b = !1, this.isMultiLine && !this.menu.element.is(":visible") || d.preventDefault();
                    else if (!c) {
                        var g = a.ui.keyCode;
                        switch (d.keyCode) {
                            case g.PAGE_UP:
                                this._move("previousPage", d);
                                break;
                            case g.PAGE_DOWN:
                                this._move("nextPage", d);
                                break;
                            case g.UP:
                                this._keyEvent("previous", d);
                                break;
                            case g.DOWN:
                                this._keyEvent("next", d)
                        }
                    }
                },
                input: function(a) {
                    d ? (d = !1, a.preventDefault()) : this._searchTimeout(a)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(a) {
                    this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), this._change(a))
                }
            });
            this._initSource();
            this.menu = a("\x3cul\x3e").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu");
            this._on(this.menu.element, {
                mousedown: function(b) {
                    b.preventDefault();
                    this.cancelBlur = !0;
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var c = this.menu.element[0];
                    a(b.target).closest(".ui-menu-item").length || this._delay(function() {
                        var b = this;
                        this.document.one("mousedown", function(e) {
                            e.target === b.element[0] || e.target === c || a.contains(c, e.target) || b.close()
                        })
                    })
                },
                menufocus: function(b, c) {
                    if (this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type))) {
                        this.menu.blur();
                        this.document.one("mousemove", function() {
                            a(b.target).trigger(b.originalEvent)
                        });
                        return
                    }
                    c = c.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", b, {
                        item: c
                    }) ? b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(c.value) : null !== c && this.liveRegion.text(c.value)
                },
                menuselect: function(a, b) {
                    var c = b.item.data("ui-autocomplete-item"),
                        e = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = e, this._delay(function() {
                        this.previous = e;
                        this.selectedItem = c
                    }));
                    !1 !== this._trigger("select", a, {
                        item: c
                    }) && this._value(c.value);
                    this.term =
                        this._value();
                    this.close(a);
                    this.selectedItem = c
                }
            });
            this.liveRegion = a("\x3cspan\x3e", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(a, c) {
            this._super(a, c);
            "source" ===
            a && this._initSource();
            "appendTo" === a && this.menu.element.appendTo(this._appendTo());
            "disabled" === a && c && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var b = this.options.appendTo;
            b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0));
            b || (b = this.element.closest(".ui-front"));
            b.length || (b = this.document[0].body);
            return b
        },
        _initSource: function() {
            var b, c, d = this;
            a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, e) {
                    e(a.ui.autocomplete.filter(b, c.term))
                }) : "string" === typeof this.options.source ?
                (c = this.options.source, this.source = function(b, k) {
                    d.xhr && d.xhr.abort();
                    d.xhr = a.ajax({
                        url: c,
                        data: b,
                        dataType: "json",
                        success: function(a) {
                            k(a)
                        },
                        error: function() {
                            k([])
                        }
                    })
                }) : this.source = this.options.source
        },
        _searchTimeout: function(a) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, a))
            }, this.options.delay)
        },
        search: function(a, c) {
            a = null != a ? a : this._value();
            this.term = this._value();
            if (a.length < this.options.minLength) return this.close(c);
            if (!1 !== this._trigger("search", c)) return this._search(a)
        },
        _search: function(a) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({
                term: a
            }, this._response())
        },
        _response: function() {
            var a = this,
                e = ++c;
            return function(d) {
                e === c && a.__response(d);
                a.pending--;
                a.pending || a.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(a) {
            a && (a = this._normalize(a));
            this._trigger("response", null, {
                content: a
            });
            !this.options.disabled && a && a.length && !this.cancelSearch ?
                (this._suggest(a), this._trigger("open")) : this._close()
        },
        close: function(a) {
            this.cancelSearch = !0;
            this._close(a)
        },
        _close: function(a) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
        },
        _change: function(a) {
            this.previous !== this._value() && this._trigger("change", a, {
                item: this.selectedItem
            })
        },
        _normalize: function(b) {
            return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
                return "string" === typeof b ? {
                    label: b,
                    value: b
                } : a.extend({
                    label: b.label ||
                        b.value,
                    value: b.value || b.label
                }, b)
            })
        },
        _suggest: function(b) {
            var c = this.menu.element.empty();
            this._renderMenu(c, b);
            this.isNewMenu = !0;
            this.menu.refresh();
            c.show();
            this._resizeMenu();
            c.position(a.extend({ of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(b, c) {
            var d = this;
            a.each(c, function(a, c) {
                d._renderItemData(b, c)
            })
        },
        _renderItemData: function(a,
            c) {
            return this._renderItem(a, c).data("ui-autocomplete-item", c)
        },
        _renderItem: function(b, c) {
            return a("\x3cli\x3e").append(a("\x3ca\x3e").text(c.label)).appendTo(b)
        },
        _move: function(a, c) {
            if (this.menu.element.is(":visible"))
                if (this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a)) this._value(this.term), this.menu.blur();
                else this.menu[a](c);
            else this.search(null, c)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(a, c) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(a, c), c.preventDefault()
        }
    });
    a.extend(a.ui.autocomplete, {
        escapeRegex: function(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26")
        },
        filter: function(b, c) {
            var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
            return a.grep(b, function(a) {
                return d.test(a.label || a.value || a)
            })
        }
    });
    a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(a) {
                    return a + (1 < a ?
                        " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(a) {
            var c;
            this._superApply(arguments);
            this.options.disabled || this.cancelSearch || (c = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.text(c))
        }
    })
})(jQuery);
(function(a, d) {
    a.widget("ui.menu", {
        version: "1.10.3",
        defaultElement: "\x3cul\x3e",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = !1;
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" +
                this.eventNamespace, a.proxy(function(a) {
                    this.options.disabled && a.preventDefault()
                }, this));
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
            this._on({
                "mousedown .ui-menu-item \x3e a": function(a) {
                    a.preventDefault()
                },
                "click .ui-state-disabled \x3e a": function(a) {
                    a.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(c) {
                    var b = a(c.target).closest(".ui-menu-item");
                    !this.mouseHandled && b.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(c),
                        b.has(".ui-menu").length ? this.expand(c) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(c) {
                    var b = a(c.currentTarget);
                    b.siblings().children(".ui-state-active").removeClass("ui-state-active");
                    this.focus(c, b)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(a, b) {
                    var e = this.active || this.element.children(".ui-menu-item").eq(0);
                    b || this.focus(a,
                        e)
                },
                blur: function(c) {
                    this._delay(function() {
                        a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(c)
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(c) {
                    a(c.target).closest(".ui-menu").length || this.collapseAll(c);
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var c = a(this);
                c.data("ui-menu-submenu-carat") && c.remove()
            });
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(c) {
            function b(a) {
                return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,
                    "\\$\x26")
            }
            var e, d, h, k, m = !0;
            switch (c.keyCode) {
                case a.ui.keyCode.PAGE_UP:
                    this.previousPage(c);
                    break;
                case a.ui.keyCode.PAGE_DOWN:
                    this.nextPage(c);
                    break;
                case a.ui.keyCode.HOME:
                    this._move("first", "first", c);
                    break;
                case a.ui.keyCode.END:
                    this._move("last", "last", c);
                    break;
                case a.ui.keyCode.UP:
                    this.previous(c);
                    break;
                case a.ui.keyCode.DOWN:
                    this.next(c);
                    break;
                case a.ui.keyCode.LEFT:
                    this.collapse(c);
                    break;
                case a.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(c);
                    break;
                case a.ui.keyCode.ENTER:
                case a.ui.keyCode.SPACE:
                    this._activate(c);
                    break;
                case a.ui.keyCode.ESCAPE:
                    this.collapse(c);
                    break;
                default:
                    m = !1, e = this.previousFilter || "", d = String.fromCharCode(c.keyCode), h = !1, clearTimeout(this.filterTimer), d === e ? h = !0 : d = e + d, k = new RegExp("^" + b(d), "i"), e = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return k.test(a(this).children("a").text())
                        }), e = h && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e, e.length || (d = String.fromCharCode(c.keyCode), k = new RegExp("^" + b(d), "i"), e = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return k.test(a(this).children("a").text())
                        })),
                        e.length ? (this.focus(c, e), 1 < e.length ? (this.previousFilter = d, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1E3)) : delete this.previousFilter) : delete this.previousFilter
            }
            m && c.preventDefault()
        },
        _activate: function(a) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup\x3d'true']").length ? this.expand(a) : this.select(a))
        },
        refresh: function() {
            var c, b = this.options.icons.submenu;
            c = this.element.find(this.options.menus);
            c.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var c = a(this),
                    d = c.prev("a"),
                    h = a("\x3cspan\x3e").addClass("ui-menu-icon ui-icon " + b).data("ui-menu-submenu-carat", !0);
                d.attr("aria-haspopup", "true").prepend(h);
                c.attr("aria-labelledby", d.attr("id"))
            });
            c = c.add(this.element);
            c.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            c.children(":not(.ui-menu-item)").each(function() {
                var b =
                    a(this);
                /[^\-\u2014\u2013\s]/.test(b.text()) || b.addClass("ui-widget-content ui-menu-divider")
            });
            c.children(".ui-state-disabled").attr("aria-disabled", "true");
            this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(a, b) {
            "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu);
            this._super(a, b)
        },
        focus: function(a, b) {
            var d;
            this.blur(a, a &&
                "focus" === a.type);
            this._scrollIntoView(b);
            this.active = b.first();
            d = this.active.children("a").addClass("ui-state-focus");
            this.options.role && this.element.attr("aria-activedescendant", d.attr("id"));
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
            a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay);
            d = b.children(".ui-menu");
            d.length && /^mouse/.test(a.type) && this._startOpening(d);
            this.activeMenu = b.parent();
            this._trigger("focus",
                a, {
                    item: b
                })
        },
        _scrollIntoView: function(c) {
            var b, d, g;
            this._hasScroll() && (b = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, b = c.offset().top - this.activeMenu.offset().top - b - d, d = this.activeMenu.scrollTop(), g = this.activeMenu.height(), c = c.height(), 0 > b ? this.activeMenu.scrollTop(d + b) : b + c > g && this.activeMenu.scrollTop(d + b - g + c))
        },
        blur: function(a, b) {
            b || clearTimeout(this.timer);
            this.active && (this.active.children("a").removeClass("ui-state-focus"),
                this.active = null, this._trigger("blur", a, {
                    item: this.active
                }))
        },
        _startOpening: function(a) {
            clearTimeout(this.timer);
            "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close();
                this._open(a)
            }, this.delay))
        },
        _open: function(c) {
            var b = a.extend({ of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(c.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            c.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(b)
        },
        collapseAll: function(c,
            b) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var d = b ? this.element : a(c && c.target).closest(this.element.find(".ui-menu"));
                d.length || (d = this.element);
                this._close(d);
                this.blur(c);
                this.activeMenu = d
            }, this.delay)
        },
        _close: function(a) {
            a || (a = this.active ? this.active.parent() : this.element);
            a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(a) {
            var b = this.active && this.active.parent().closest(".ui-menu-item",
                this.element);
            b && b.length && (this._close(), this.focus(a, b))
        },
        expand: function(a) {
            var b = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            b && b.length && (this._open(b.parent()), this._delay(function() {
                this.focus(a, b)
            }))
        },
        next: function(a) {
            this._move("next", "first", a)
        },
        previous: function(a) {
            this._move("prev", "last", a)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(a, b, d) {
            var g;
            this.active && (g = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0));
            g && g.length && this.active || (g = this.activeMenu.children(".ui-menu-item")[b]());
            this.focus(d, g)
        },
        nextPage: function(c) {
            var b, d, g;
            this.active ? this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, g = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    b = a(this);
                    return 0 > b.offset().top - d - g
                }),
                this.focus(c, b)) : this.focus(c, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())) : this.next(c)
        },
        previousPage: function(c) {
            var b, d, g;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, g = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                b = a(this);
                return 0 < b.offset().top - d + g
            }), this.focus(c, b)) : this.focus(c, this.activeMenu.children(".ui-menu-item").first())) : this.next(c)
        },
        _hasScroll: function() {
            return this.element.outerHeight() <
                this.element.prop("scrollHeight")
        },
        select: function(c) {
            this.active = this.active || a(c.target).closest(".ui-menu-item");
            var b = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(c, !0);
            this._trigger("select", c, b)
        }
    })
})(jQuery);
(function() {
    for (var a = 0, d = ["ms", "moz", "webkit", "o"], c = 0; c < d.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[d[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[d[c] + "CancelAnimationFrame"] || window[d[c] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(b, c) {
        var d = (new Date).getTime(),
            h = Math.max(0, 16 - (d - a));
        c = window.setTimeout(function() {
            b(d + h)
        }, h);
        a = d + h;
        return c
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame =
        function(a) {
            clearTimeout(a)
        })
})();
window.shbdn_rum = window.shbdn_rum || {};
(function() {
    function a() {
        return {
            cTotal: 0,
            bTrans: 0,
            rStart: -1,
            rEnd: -1,
            eReal: -1,
            vHttp: 10
        }
    }

    function d() {
        var a = document.getElementsByTagName("script")[0],
            b = document.createElement("script");
        b.src = "https://i0.shbdn.com/rum/cp.js?r\x3d" + Math.floor((new Date).getTime() / 3E4);
        b.async = !0;
        b.type = "text/javascript";
        a.parentNode.insertBefore(b, a)
    }

    function c() {
        window.setTimeout(b, 100)
    }

    function b() {
        e.requestType = window.shbdn_rum.requestType;
        var b = window.performance.timing;
        e.pageTiming = {
            eLoad: b.loadEventEnd - b.navigationStart,
            eResp: b.responseEnd - b.requestStart,
            eRend: b.domComplete - b.domLoading
        };
        for (var b = e, c = window.performance.getEntries(), d = {
                document: a(),
                assets: a(),
                photos: a(),
                ajax: a(),
                other: a(),
                external: a()
            }, m = 0; m < c.length; m++) {
            var p = c[m],
                r = null;
            if ("navigation" == p.entryType) r = d.document;
            else if ("resource" == p.entryType) {
                var z;
                r = p.name;
                z = r.indexOf("://");
                z = 5 != z && 6 != z ? r : r.substring(z + 3);
                var r = z,
                    v = r.indexOf("/"),
                    r = -1 == v ? r : r.substring(0, v);
                v = z.indexOf("/"); - 1 != v && (z = z.substring(v));
                v = z.indexOf("?"); - 1 != v && (z = z.substring(0,
                    v));
                v = r;
                v = v.endsWith(".shbdn.com") || v.endsWith(".sahibinden.com") ? !0 : !1;
                if (v) {
                    var v = r,
                        A = z,
                        v = ("s0.shbdn.com" == v || "www.sahibinden.com" == v || "static.sahibinden.com" == v) && A.startsWith("/assets/") || "www.sahibinden.com" == v && A.startsWith("/resources/") ? !0 : !1;
                    v ? r = d.assets : (r = "i0.shbdn.com" != r && "image5.sahibinden.com" != r || !z.startsWith("/photos/") ? !1 : !0, r = r ? d.photos : "xmlhttprequest" == p.initiatorType ? d.ajax : d.other)
                } else r = d.external
            }
            if (null != r) {
                r.cTotal++;
                r.bTrans += p.encodedBodySize;
                r.rStart = -1 == r.rStart ? Math.round(p.startTime) :
                    Math.min(r.rStart, Math.round(p.startTime));
                r.rEnd = -1 == r.rEnd ? Math.round(p.responseEnd) : Math.max(r.rEnd, Math.round(p.responseEnd));
                r.eReal = r.rEnd - r.rStart;
                r.vHttp = 11;
                try {
                    if ("h2" === p.nextHopProtocol || "h2c" === p.nextHopProtocol) r.vHttp = 20
                } catch (w) {}
            }
        }
        for (var n in d) c = d[n], delete c.rStart, delete c.rEnd;
        b.performance = d;
        e.failedRequests = "undefined" !== typeof failedAssets ? failedAssets : [];
        n = new XMLHttpRequest;
        n.open("POST", "https://www.sahibinden.com/rum/collect", !0);
        n.setRequestHeader("Content-Type", "application/json");
        n.send(JSON.stringify(e))
    }
    var e;
    window.shbdn_rum.setEnv = function(a, b) {
        e && e.environment && (e.environment[a] = b)
    };
    (function() {
        var a;
        a = void 0 !== window.performance && void 0 !== window.performance.timing && void 0 !== window.performance.timeOrigin && void 0 !== window.performance.getEntries;
        if (!a) return !1;
        a = window.shbdn_rum.requestType;
        if ("string" === typeof a && 0 < a.length && window.location.href.startsWith("https://www.sahibinden.com/")) {
            a: {
                a = document.cookie.split("; ");
                for (var b = 0; b < a.length; b++) {
                    var c = a[b].split("\x3d");
                    if ("s-rum" === c[0]) {
                        a = c[1];
                        break a
                    }
                }
                a = null
            }
            a = "always" === a ? !0 : 5 > 100 * Math.random()
        }
        else a = !1;
        return a
    })() && (e = {
        originMillis: Math.round(window.performance.timeOrigin),
        environment: {}
    }, d(), "complete" == document.readyState ? b() : window.addEventListener("load", c, !1))
})();
(function(a, d) {
    "object" === typeof exports && "undefined" !== typeof module ? d() : "function" === typeof define && define.amd ? define(d) : d()
})(this, function() {
    function a(a) {
        var b = this.constructor;
        return this.then(function(c) {
            return b.resolve(a()).then(function() {
                return c
            })
        }, function(c) {
            return b.resolve(a()).then(function() {
                return b.reject(c)
            })
        })
    }

    function d() {}

    function c(a, b) {
        return function() {
            a.apply(b, arguments)
        }
    }

    function b(a) {
        if (!(this instanceof b)) throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a) throw new TypeError("not a function");
        this._state = 0;
        this._handled = !1;
        this._value = void 0;
        this._deferreds = [];
        p(a, this)
    }

    function e(a, c) {
        for (; 3 === a._state;) a = a._value;
        0 === a._state ? a._deferreds.push(c) : (a._handled = !0, b._immediateFn(function() {
            var b = 1 === a._state ? c.onFulfilled : c.onRejected;
            if (null === b)(1 === a._state ? g : h)(c.promise, a._value);
            else {
                var d;
                try {
                    d = b(a._value)
                } catch (e) {
                    h(c.promise, e);
                    return
                }
                g(c.promise, d)
            }
        }))
    }

    function g(a, d) {
        try {
            if (d === a) throw new TypeError("A promise cannot be resolved with itself.");
            if (d && ("object" === typeof d || "function" === typeof d)) {
                var e = d.then;
                if (d instanceof b) {
                    a._state = 3;
                    a._value = d;
                    k(a);
                    return
                }
                if ("function" === typeof e) {
                    p(c(e, d), a);
                    return
                }
            }
            a._state = 1;
            a._value = d;
            k(a)
        } catch (g) {
            h(a, g)
        }
    }

    function h(a, b) {
        a._state = 2;
        a._value = b;
        k(a)
    }

    function k(a) {
        2 === a._state && 0 === a._deferreds.length && b._immediateFn(function() {
            a._handled || b._unhandledRejectionFn(a._value)
        });
        for (var c = 0, d = a._deferreds.length; c < d; c++) e(a, a._deferreds[c]);
        a._deferreds = null
    }

    function m(a, b, c) {
        this.onFulfilled = "function" ===
            typeof a ? a : null;
        this.onRejected = "function" === typeof b ? b : null;
        this.promise = c
    }

    function p(a, b) {
        var c = !1;
        try {
            a(function(a) {
                c || (c = !0, g(b, a))
            }, function(a) {
                c || (c = !0, h(b, a))
            })
        } catch (d) {
            c || (c = !0, h(b, d))
        }
    }
    var r = setTimeout;
    b.prototype["catch"] = function(a) {
        return this.then(null, a)
    };
    b.prototype.then = function(a, b) {
        var c = new this.constructor(d);
        e(this, new m(a, b, c));
        return c
    };
    b.prototype["finally"] = a;
    b.all = function(a) {
        return new b(function(b, c) {
            function d(a, h) {
                try {
                    if (h && ("object" === typeof h || "function" === typeof h)) {
                        var k =
                            h.then;
                        if ("function" === typeof k) {
                            k.call(h, function(b) {
                                d(a, b)
                            }, c);
                            return
                        }
                    }
                    e[a] = h;
                    0 === --g && b(e)
                } catch (m) {
                    c(m)
                }
            }
            if (!a || "undefined" === typeof a.length) throw new TypeError("Promise.all accepts an array");
            var e = Array.prototype.slice.call(a);
            if (0 === e.length) return b([]);
            for (var g = e.length, h = 0; h < e.length; h++) d(h, e[h])
        })
    };
    b.resolve = function(a) {
        return a && "object" === typeof a && a.constructor === b ? a : new b(function(b) {
            b(a)
        })
    };
    b.reject = function(a) {
        return new b(function(b, c) {
            c(a)
        })
    };
    b.race = function(a) {
        return new b(function(b,
            c) {
            for (var d = 0, e = a.length; d < e; d++) a[d].then(b, c)
        })
    };
    b._immediateFn = "function" === typeof setImmediate && function(a) {
        setImmediate(a)
    } || function(a) {
        r(a, 0)
    };
    b._unhandledRejectionFn = function(a) {
        "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
    };
    var z = function() {
        if ("undefined" !== typeof self) return self;
        if ("undefined" !== typeof window) return window;
        if ("undefined" !== typeof global) return global;
        throw Error("unable to locate global object");
    }();
    "Promise" in z ? z.Promise.prototype["finally"] ||
        (z.Promise.prototype["finally"] = a) : z.Promise = b
});
$(function() {
    var a = $(".sub-menu"),
        d = $("#postAddWarningPopup"),
        c = $("#openFilterFromHeader"),
        b = $("#hiddenOpenFilterFromHeader"),
        e = $("header .back-button");
    (function(a) {
        $.ajax({
            url: "https://banaozel.sahibinden.com/ajax/login/info",
            type: "POST",
            xhrFields: {
                withCredentials: !0
            },
            complete: function(b) {
                a(b)
            }
        })
    })(function(b) {
        if (b && (b = b.responseJSON) && b.body) {
            b = b.unreadMessages.normalClassifieds + b.unreadMessages.secureTradeClassifieds + (b.unreadNotifications.secureTradeNotification.purchases.total + b.unreadNotifications.secureTradeNotification.sales.total +
                b.unreadNotifications.informationNotification.total + b.unreadNotifications.favoriteNotification.total + b.unreadNotifications.classifiedNotification.total);
            var c = 99 < b ? "99+" : b;
            0 < b && a.find(".my-account").addClass("has-notification").find("span").attr("data-notification-count", c)
        }
    });
    a.find(".post-classified a").on("click", function() {
        navigator.userAgent.match(/Android/) ? d.find(".app-store").addClass("googlePlay") : navigator.userAgent.match(/iPhone|iPad|iPod/) && d.find(".app-store").addClass("appleStore");
        $.colorbox({
            inline: !0,
            href: "#postAddWarningPopup",
            width: "90%",
            transition: "none",
            className: "mobile-postAd-popup",
            fixed: !0
        });
        $.get("/ajax/edr/classifiedResponsiveAttempt")
    });
    e.on("click", function(a) {
        -1 !== document.referrer.indexOf(window.location.host) && a.preventDefault();
        history.back()
    });
    c.on("click", function() {
        b.trigger("click")
    })
});
$(function() {
    function a() {
        $.ajax({
            url: "/ajax/cs/info/" + SB_PAGE.toLowerCase(),
            type: "POST",
            headers: d
        })
    }
    var d = {},
        c = 0,
        b = !1,
        e = document.referrer;
    "undefined" !== typeof SB_CS_TOKEN && "undefined" !== typeof SB_PAGE && (b = !0, d = {
        "x-sbToken": SB_CS_TOKEN,
        "x-sbScreen": SB_PAGE,
        "x-shbdn-prev-page": e
    }, "undefined" !== typeof SB_DELAY && (c = SB_DELAY));
    "undefined" !== typeof SB_CLASSIFIED_CATEGORY && "undefined" !== typeof SB_USER_TYPE && (d["x-shbdn-user-type"] = SB_USER_TYPE, d["x-shbdn-ad-category"] = SB_CLASSIFIED_CATEGORY);
    b && (0 < c ? setTimeout(a,
        c) : a())
});
var screenUtils = {
    setDeviceProperties: function() {
        cookieUtils.readCookie("dp") || (properties = {
            screen: {
                with: screen.width,
                height: screen.height,
                orientation: screen.width > screen.height ? "landscape" : "portrait"
            }
        }, resolution = properties.screen.with + "*" + properties.screen.height + "-" + properties.screen.orientation, cookieUtils.setCookie("dp", resolution))
    }
};