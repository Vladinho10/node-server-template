(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
        : typeof define === 'function' && define.amd ? define(['exports'], factory)
            : (global = global || self, factory(global.gridjs = {}));
}(this, (exports => {
    /* ! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf
            || ({ __proto__: [] } instanceof Array && function (d, b) {
                d.__proto__ = b;
            })
            || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) {
                        d[p] = b[p];
                    }
                }
            };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) {
                    if (Object.prototype.hasOwnProperty.call(s, p)) {
                        t[p] = s[p];
                    }
                }
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P(resolve => {
                resolve(value);
            });
        }
        return new (P || (P = Promise))((resolve, reject) => {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator.throw(value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent() {
                if (t[0] & 1) {
                    throw t[1];
                } return t[1];
            }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === 'function' && (g[Symbol.iterator] = function () {
            return this;
        }), g;
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) {
                throw new TypeError('Generator is already executing.');
            }
            while (_) {
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) {
                        return t;
                    }
                    if (y = 0, t) {
                        op = [op[0] & 2, t.value];
                    }
                    switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0; continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1]; break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1]; t = op; break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2]; _.ops.push(op); break;
                        }
                        if (t[2]) {
                            _.ops.pop();
                        }
                        _.trys.pop(); continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e]; y = 0;
                } finally {
                    f = t = 0;
                }
            }
            if (op[0] & 5) {
                throw op[1];
            } return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
            s += arguments[i].length;
        }
        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
                r[k] = a[j];
            }
        }
        return r;
    }

    function generateID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    var Base = /** @class */ (function () {
        function Base(id) {
            this._id = id || generateID();
        }
        Object.defineProperty(Base.prototype, 'id', {
            get() {
                return this._id;
            },
            enumerable: false,
            configurable: true,
        });
        return Base;
    }());

    var n, l, u, i, t, r, o, f = {}, e = [], c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n, l) {
        for (var u in l) {
            n[u] = l[u];
        } return n;
    } function a(n) {
        var l = n.parentNode;l && l.removeChild(n);
    } function v(n, l, u) {
        var i, t = arguments, r = {};for (i in l) {
            'key' !== i && 'ref' !== i && (r[i] = l[i]);
        } if (arguments.length > 3) {
            for (u = [u], i = 3;i < arguments.length;i++) {
                u.push(t[i]);
            }
        } if (null != u && (r.children = u), 'function' === typeof n && null != n.defaultProps) {
            for (i in n.defaultProps) {
                void 0 === r[i] && (r[i] = n.defaultProps[i]);
            }
        } return h(n, r, l && l.key, l && l.ref, null);
    } function h(l, u, i, t, r) {
        var o = { type: l, props: u, key: i, ref: t, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: r };return null == r && (o.__v = o), n.vnode && n.vnode(o), o;
    } function y() {
        return { current: null };
    } function p(n) {
        return n.children;
    } function d(n, l) {
        this.props = n, this.context = l;
    } function _(n, l) {
        if (null == l) {
            return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;
        } for (var u;l < n.__k.length;l++) {
            if (null != (u = n.__k[l]) && null != u.__e) {
                return u.__e;
            }
        } return 'function' === typeof n.type ? _(n) : null;
    } function k(n) {
        var l, u;if (null != (n = n.__) && null != n.__c) {
            for (n.__e = n.__c.base = null, l = 0;l < n.__k.length;l++) {
                if (null != (u = n.__k[l]) && null != u.__e) {
                    n.__e = n.__c.base = u.__e;break;
                }
            } return k(n);
        }
    } function w(l) {
        (!l.__d && (l.__d = !0) && u.push(l) && !m.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(m);
    } function m() {
        for (var n;m.__r = u.length;) {
            n = u.sort((n, l) => n.__v.__b - l.__v.__b), u = [], n.some(n => {
                var l, u, i, t, r, o, f;n.__d && (o = (r = (l = n).__v).__e, (f = l.__P) && (u = [], (i = s({}, r)).__v = i, t = T(f, r, i, l.__n, void 0 !== f.ownerSVGElement, null, u, null == o ? _(r) : o), $(u, r), t != o && k(r)));
            });
        }
    } function g(n, l, u, i, t, r, o, c, s, v) {
        var y, d, k, w, m, g, b, A = i && i.__k || e, P = A.length;for (s == f && (s = null != o ? o[0] : P ? _(i, 0) : null), u.__k = [], y = 0;y < l.length;y++) {
            if (null != (w = u.__k[y] = null == (w = l[y]) || 'boolean' === typeof w ? null : 'string' === typeof w || 'number' === typeof w ? h(null, w, null, null, w) : Array.isArray(w) ? h(p, { children: w }, null, null, null) : null != w.__e || null != w.__c ? h(w.type, w.props, w.key, null, w.__v) : w)) {
                if (w.__ = u, w.__b = u.__b + 1, null === (k = A[y]) || k && w.key == k.key && w.type === k.type) {
                    A[y] = void 0;
                } else {
                    for (d = 0;d < P;d++) {
                        if ((k = A[d]) && w.key == k.key && w.type === k.type) {
                            A[d] = void 0;break;
                        }k = null;
                    }
                }m = T(n, w, k = k || f, t, r, o, c, s, v), (d = w.ref) && k.ref != d && (b || (b = []), k.ref && b.push(k.ref, null, w), b.push(d, w.__c || m, w)), null != m ? (null == g && (g = m), s = x(n, w, k, A, o, m, s), 'option' == u.type ? n.value = '' : 'function' === typeof u.type && (u.__d = s)) : s && k.__e == s && s.parentNode != n && (s = _(k));
            }
        } if (u.__e = g, null != o && 'function' !== typeof u.type) {
            for (y = o.length;y--;) {
                null != o[y] && a(o[y]);
            }
        } for (y = P;y--;) {
            null != A[y] && I(A[y], A[y]);
        } if (b) {
            for (y = 0;y < b.length;y++) {
                H(b[y], b[++y], b[++y]);
            }
        }
    } function x(n, l, u, i, t, r, o) {
        var f, e, c;if (void 0 !== l.__d) {
            f = l.__d, l.__d = void 0;
        } else if (t == u || r != o || null == r.parentNode) {
            n:if (null == o || o.parentNode !== n) {
                n.appendChild(r), f = null;
            } else {
                for (e = o, c = 0;(e = e.nextSibling) && c < i.length;c += 2) {
                    if (e == r) {
                        break n;
                    }
                }n.insertBefore(r, o), f = o;
            }
        } return void 0 !== f ? f : r.nextSibling;
    } function A(n, l, u, i, t) {
        var r;for (r in u) {
            'children' === r || 'key' === r || r in l || C(n, r, null, u[r], i);
        } for (r in l) {
            t && 'function' !== typeof l[r] || 'children' === r || 'key' === r || 'value' === r || 'checked' === r || u[r] === l[r] || C(n, r, l[r], u[r], i);
        }
    } function P(n, l, u) {
        '-' === l[0] ? n.setProperty(l, u) : n[l] = 'number' === typeof u && !1 === c.test(l) ? `${u}px` : null == u ? '' : u;
    } function C(n, l, u, i, t) {
        var r, o, f, e, c;if (t ? 'className' === l && (l = 'class') : 'class' === l && (l = 'className'), 'style' === l) {
            if (r = n.style, 'string' === typeof u) {
                r.cssText = u;
            } else {
                if ('string' === typeof i && (r.cssText = '', i = null), i) {
                    for (e in i) {
                        u && e in u || P(r, e, '');
                    }
                } if (u) {
                    for (c in u) {
                        i && u[c] === i[c] || P(r, c, u[c]);
                    }
                }
            }
        } else {
            'o' === l[0] && 'n' === l[1] ? (o = l !== (l = l.replace(/Capture$/, '')), f = l.toLowerCase(), l = (f in n ? f : l).slice(2), u ? (i || n.addEventListener(l, N, o), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, N, o)) : 'list' !== l && 'tagName' !== l && 'form' !== l && 'type' !== l && 'size' !== l && !t && l in n ? n[l] = null == u ? '' : u : 'function' !== typeof u && 'dangerouslySetInnerHTML' !== l && (l !== (l = l.replace(/^xlink:?/, '')) ? null == u || !1 === u ? n.removeAttributeNS('http://www.w3.org/1999/xlink', l.toLowerCase()) : n.setAttributeNS('http://www.w3.org/1999/xlink', l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
        }
    } function N(l) {
        this.l[l.type](n.event ? n.event(l) : l);
    } function z(n, l, u) {
        var i, t;for (i = 0;i < n.__k.length;i++) {
            (t = n.__k[i]) && (t.__ = n, t.__e && ('function' === typeof t.type && t.__k.length > 1 && z(t, l, u), l = x(u, t, t, n.__k, null, t.__e, l), 'function' === typeof n.type && (n.__d = l)));
        }
    } function T(l, u, i, t, r, o, f, e, c) {
        var a, v, h, y, _, k, w, m, b, x, A, P = u.type;if (void 0 !== u.constructor) {
            return null;
        }(a = n.__b) && a(u);try {
            n:if ('function' === typeof P) {
                if (m = u.props, b = (a = P.contextType) && t[a.__c], x = a ? b ? b.props.value : a.__ : t, i.__c ? w = (v = u.__c = i.__c).__ = v.__E : ('prototype' in P && P.prototype.render ? u.__c = v = new P(m, x) : (u.__c = v = new d(m, x), v.constructor = P, v.render = L), b && b.sub(v), v.props = m, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, P.getDerivedStateFromProps(m, v.__s))), y = v.props, _ = v.state, h) {
                    null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);
                } else {
                    if (null == P.getDerivedStateFromProps && m !== y && null != v.componentWillReceiveProps && v.componentWillReceiveProps(m, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(m, v.__s, x) || u.__v === i.__v) {
                        v.props = m, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), z(u, e, l);break n;
                    }null != v.componentWillUpdate && v.componentWillUpdate(m, v.__s, x), null != v.componentDidUpdate && v.__h.push(() => {
                        v.componentDidUpdate(y, _, k);
                    });
                }v.context = x, v.props = m, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = s(s({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (k = v.getSnapshotBeforeUpdate(y, _)), A = null != a && a.type == p && null == a.key ? a.props.children : a, g(l, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, c), v.base = u.__e, v.__h.length && f.push(v), w && (v.__E = v.__ = null), v.__e = !1;
            } else {
                null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = j(i.__e, u, i, t, r, o, f, c);
            }(a = n.diffed) && a(u);
        } catch (l) {
            u.__v = null, n.__e(l, u, i);
        } return u.__e;
    } function $(l, u) {
        n.__c && n.__c(u, l), l.some(u => {
            try {
                l = u.__h, u.__h = [], l.some(n => {
                    n.call(u);
                });
            } catch (l) {
                n.__e(l, u.__v);
            }
        });
    } function j(n, l, u, i, t, r, o, c) {
        var s, a, v, h, y, p = u.props, d = l.props;if (t = 'svg' === l.type || t, null != r) {
            for (s = 0;s < r.length;s++) {
                if (null != (a = r[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
                    n = a, r[s] = null;break;
                }
            }
        } if (null == n) {
            if (null === l.type) {
                return document.createTextNode(d);
            }n = t ? document.createElementNS('http://www.w3.org/2000/svg', l.type) : document.createElement(l.type, d.is && { is: d.is }), r = null, c = !1;
        } if (null === l.type) {
            p !== d && n.data != d && (n.data = d);
        } else {
            if (null != r && (r = e.slice.call(n.childNodes)), v = (p = u.props || f).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
                if (null != r) {
                    for (p = {}, y = 0;y < n.attributes.length;y++) {
                        p[n.attributes[y].name] = n.attributes[y].value;
                    }
                }(h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || ''));
            }A(n, d, p, t, c), h ? l.__k = [] : (s = l.props.children, g(n, Array.isArray(s) ? s : [s], l, u, i, 'foreignObject' !== l.type && t, r, o, f, c)), c || ('value' in d && void 0 !== (s = d.value) && s !== n.value && C(n, 'value', s, p.value, !1), 'checked' in d && void 0 !== (s = d.checked) && s !== n.checked && C(n, 'checked', s, p.checked, !1));
        } return n;
    } function H(l, u, i) {
        try {
            'function' === typeof l ? l(u) : l.current = u;
        } catch (l) {
            n.__e(l, i);
        }
    } function I(l, u, i) {
        var t, r, o;if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || H(t, null, u)), i || 'function' === typeof l.type || (i = null != (r = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
            if (t.componentWillUnmount) {
                try {
                    t.componentWillUnmount();
                } catch (l) {
                    n.__e(l, u);
                }
            }t.base = t.__P = null;
        } if (t = l.__k) {
            for (o = 0;o < t.length;o++) {
                t[o] && I(t[o], u, i);
            }
        }null != r && a(r);
    } function L(n, l, u) {
        return this.constructor(n, u);
    } function M(l, u, i) {
        var t, o, c;n.__ && n.__(l, u), o = (t = i === r) ? null : i && i.__k || u.__k, l = v(p, null, [l]), c = [], T(u, (t ? u : i || u).__k = l, o || f, f, void 0 !== u.ownerSVGElement, i && !t ? [i] : o ? null : u.childNodes.length ? e.slice.call(u.childNodes) : null, c, i || f, t), $(c, l);
    } function q(n) {
        var l = {}, u = { __c: `__cC${o++}`, __: n, Consumer(n, l) {
            return n.children(l);
        }, Provider(n) {
            var i, t = this;return this.getChildContext || (i = [], this.getChildContext = function () {
                return l[u.__c] = t, l;
            }, this.shouldComponentUpdate = function (n) {
                t.props.value !== n.value && i.some(l => {
                    l.context = n.value, w(l);
                });
            }, this.sub = function (n) {
                i.push(n);var l = n.componentWillUnmount;n.componentWillUnmount = function () {
                    i.splice(i.indexOf(n), 1), l && l.call(n);
                };
            }), n.children;
        } };return u.Consumer.contextType = u, u.Provider.__ = u, u;
    }n = { __e(n, l) {
        for (var u, i;l = l.__;) {
            if ((u = l.__c) && !u.__) {
                try {
                    if (u.constructor && null != u.constructor.getDerivedStateFromError && (i = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (i = !0, u.componentDidCatch(n)), i) {
                        return w(u.__E = u);
                    }
                } catch (l) {
                    n = l;
                }
            }
        } throw n;
    } }, l = function (n) {
        return null != n && void 0 === n.constructor;
    }, d.prototype.setState = function (n, l) {
        var u;u = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), 'function' === typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), w(this));
    }, d.prototype.forceUpdate = function (n) {
        this.__v && (this.__e = !0, n && this.__h.push(n), w(this));
    }, d.prototype.render = p, u = [], i = 'function' === typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m.__r = 0, r = f, o = 0;

    /**
     * This is a hack to get the current global config from Preact context.
     * My assumption is that we only need one global context which is the ConfigContext
     *
     * @param context
     */
    function getConfig(context) {
        if (!context) {
            return null;
        }
        var keys = Object.keys(context);
        if (keys.length) {
            // TODO: can we use a better way to capture and return the Config context?
            var ctx = context[keys[0]];
            return ctx.props.value;
        }
        return null;
    }

    var enUS = {
        search: {
            placeholder: 'Type a keyword...',
        },
        sort: {
            sortAsc: 'Sort column ascending',
            sortDesc: 'Sort column descending',
        },
        pagination: {
            previous: 'Previous',
            next: 'Next',
            navigate(page, pages) {
                return `Page ${page} of ${pages}`;
            },
            page(page) {
                return `Page ${page}`;
            },
            showing: 'Showing',
            of: 'of',
            to: 'to',
            results: 'results',
        },
        loading: 'Loading...',
        noRecordsFound: 'No matching records found',
        error: 'An error happened while fetching the data',
    };

    var Translator = /** @class */ (function () {
        function Translator(language) {
            this._language = language;
            this._defaultLanguage = enUS;
        }
        /**
         * Tries to split the message with "." and find
         * the key in the given language
         *
         * @param message
         * @param lang
         */
        Translator.prototype.getString = function (message, lang) {
            if (!lang || !message) {
                return null;
            }
            var splitted = message.split('.');
            var key = splitted[0];
            if (lang[key]) {
                var val_1 = lang[key];
                if (typeof val_1 === 'string') {
                    return function () {
                        return val_1;
                    };
                } else if (typeof val_1 === 'function') {
                    return val_1;
                }

                return this.getString(splitted.slice(1).join('.'), val_1);
            }
            return null;
        };
        Translator.prototype.translate = function (message) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var translated = this.getString(message, this._language);
            var messageFormat;
            if (translated) {
                messageFormat = translated;
            } else {
                messageFormat = this.getString(message, this._defaultLanguage);
            }
            if (messageFormat) {
                return messageFormat.apply(void 0, args);
            }
            return message;
        };
        return Translator;
    }());
    function useTranslator(translator) {
        return function (message) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return translator.translate.apply(translator, __spreadArrays([message], args));
        };
    }

    var BaseComponent = /** @class */ (function (_super) {
        __extends(BaseComponent, _super);
        function BaseComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.config = getConfig(context);
            if (_this.config) {
                _this._ = useTranslator(_this.config.translator);
            }
            return _this;
        }
        return BaseComponent;
    }(d));

    var HTMLElement$1 = /** @class */ (function (_super) {
        __extends(HTMLElement, _super);
        function HTMLElement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HTMLElement.prototype.render = function () {
            return v(this.props.parentElement, {
                dangerouslySetInnerHTML: { __html: this.props.content },
            });
        };
        HTMLElement.defaultProps = {
            parentElement: 'span',
        };
        return HTMLElement;
    }(BaseComponent));

    function html(content, parentElement) {
        return v(HTMLElement$1, { content, parentElement });
    }

    var Cell = /** @class */ (function (_super) {
        __extends(Cell, _super);
        function Cell(data) {
            var _this = _super.call(this) || this;
            _this.setData(data);
            return _this;
        }
        Cell.prototype.cast = function (data) {
            if (data instanceof HTMLElement) {
                return html(data.outerHTML);
            }
            return data;
        };
        Cell.prototype.setData = function (data) {
            this.data = this.cast(data);
            return this;
        };
        return Cell;
    }(Base));

    var Row = /** @class */ (function (_super) {
        __extends(Row, _super);
        function Row(cells) {
            var _this = _super.call(this) || this;
            _this.cells = cells || [];
            return _this;
        }
        Object.defineProperty(Row.prototype, 'cells', {
            get() {
                return this._cells;
            },
            set(cells) {
                this._cells = cells;
            },
            enumerable: false,
            configurable: true,
        });
        /**
         * Creates a new Row from an array of Cell(s)
         * This method generates a new ID for the Row and all nested elements
         *
         * @param cells
         * @returns Row
         */
        Row.fromCells = function (cells) {
            return new Row(cells.map(cell => new Cell(cell.data)));
        };
        Object.defineProperty(Row.prototype, 'length', {
            get() {
                return this.cells.length;
            },
            enumerable: false,
            configurable: true,
        });
        return Row;
    }(Base));

    function oneDtoTwoD(data) {
        if (data[0] && !(data[0] instanceof Array)) {
            return [data];
        }
        return data;
    }

    var Tabular = /** @class */ (function (_super) {
        __extends(Tabular, _super);
        function Tabular(rows) {
            var _this = _super.call(this) || this;
            if (rows instanceof Array) {
                _this.rows = rows;
            } else if (rows instanceof Row) {
                _this.rows = [rows];
            } else {
                _this.rows = [];
            }
            return _this;
        }
        Object.defineProperty(Tabular.prototype, 'rows', {
            get() {
                return this._rows;
            },
            set(rows) {
                this._rows = rows;
            },
            enumerable: false,
            configurable: true,
        });
        Object.defineProperty(Tabular.prototype, 'length', {
            get() {
                return this._length || this.rows.length;
            },
            // we want to sent the length when storage is ServerStorage
            set(len) {
                this._length = len;
            },
            enumerable: false,
            configurable: true,
        });
        /**
         * Creates a new Tabular from an array of Row(s)
         * This method generates a new ID for the Tabular and all nested elements
         *
         * @param rows
         * @returns Tabular
         */
        Tabular.fromRows = function (rows) {
            return new Tabular(rows.map(row => Row.fromCells(row.cells)));
        };
        /**
         * Creates a new Tabular from a 2D array
         * This method generates a new ID for the Tabular and all nested elements
         *
         * @param data
         * @returns Tabular
         */
        Tabular.fromArray = function (data) {
            data = oneDtoTwoD(data);
            return new Tabular(data.map(row => new Row(row.map(cell => new Cell(cell)))));
        };
        return Tabular;
    }(Base));

    function width(width, containerWidth) {
        if (typeof width === 'string') {
            if (width.indexOf('%') > -1) {
                return (containerWidth / 100) * parseInt(width, 10);
            }

            return parseInt(width, 10);
        }
        return width;
    }
    function px(width) {
        if (!width) {
            return '';
        }
        return `${Math.floor(width)}px`;
    }
    /**
     * Accepts a ShadowTable and tries to find the clientWidth
     * that is already rendered on the web browser
     *
     * @param shadowTable
     * @param columnIndex
     */
    function getWidth(shadowTable, columnIndex) {
        if (!shadowTable) {
            return null;
        }
        var tds = shadowTable.querySelectorAll('tr:first-child > td');
        if (tds && tds[columnIndex]) {
            return tds[columnIndex].clientWidth;
        }
        return null;
    }

    var ShadowTable = /** @class */ (function (_super) {
        __extends(ShadowTable, _super);
        function ShadowTable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ShadowTable.prototype.resetStyle = function () {
            return { padding: 0, margin: 0, border: 'none', outline: 'none' };
        };
        ShadowTable.prototype.head = function () {
            var _this = this;
            return (v(
                'thead', { style: this.resetStyle() },
                v('tr', null, this.props.header.columns.map(col => (v('th', { style: __assign(__assign({}, _this.resetStyle()), { whiteSpace: 'nowrap',
                    // pagination buttons
                    paddingRight: col.sort ? '18px' : '0' }) }, col.name)))),
            ));
        };
        ShadowTable.prototype.td = function (cell) {
            return v('td', { style: this.resetStyle() }, cell.data);
        };
        ShadowTable.prototype.tr = function (row) {
            var _this = this;
            return (v('tr', { style: this.resetStyle() }, row.cells.map(cell => _this.td(cell))));
        };
        ShadowTable.prototype.body = function () {
            var _this = this;
            return (v('tbody', { style: this.resetStyle() }, this.props.data
                && this.props.data.rows.map(row => _this.tr(row))));
        };
        ShadowTable.prototype.render = function () {
            return (v(
                'table', { style: __assign({ position: 'absolute', zIndex: '-2147483640', visibility: 'hidden', tableLayout: 'auto', width: 'auto' }, this.resetStyle()) },
                this.head(),
                this.body(),
            ));
        };
        return ShadowTable;
    }(BaseComponent));

    function camelCase(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
            if (+match === 0) {
                return '';
            } // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
    }

    var Header = /** @class */ (function (_super) {
        __extends(Header, _super);
        function Header() {
            var _this = _super.call(this) || this;
            _this._columns = [];
            return _this;
        }
        Object.defineProperty(Header.prototype, 'columns', {
            get() {
                return this._columns;
            },
            set(columns) {
                this._columns = columns;
            },
            enumerable: false,
            configurable: true,
        });
        /**
         * Tries to automatically adjust the width of columns based on:
         *    - Header cell content
         *    - Cell content of the first row
         *    - Cell content of the last row
         *
         * @param container
         * @param tempRef
         * @param data
         * @param autoWidth
         */
        Header.prototype.adjustWidth = function (container, tempRef, data, autoWidth) {
            if (autoWidth === void 0) {
                autoWidth = true;
            }
            if (!container) {
                // we can't calculate the width because the container
                // is unknown at this stage
                return this;
            }
            // pixels
            var containerWidth = container.clientWidth;
            // let's create a shadow table with the first 10 rows of the data
            // and let the browser to render the table with table-layout: auto
            // no padding, margin or border to get the minimum space required
            // to render columns. One the table is rendered and widths are known,
            // we unmount the shadow table from the DOM and set the correct width
            var shadowTable = y();
            if (data && data.length && autoWidth) {
                // render a ShadowTable with the first 10 rows
                var el = v(ShadowTable, {
                    data: Tabular.fromRows(data.rows.slice(0, 10)),
                    header: this,
                });
                el.ref = shadowTable;
                // TODO: we should NOT query the container here. use Refs instead
                M(el, tempRef.current);
            }
            for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (!column.width && autoWidth) {
                    // tries to find the corresponding cell
                    // from the ShadowTable and set the correct width
                    column.width = px(getWidth(shadowTable.current.base, this.columns.indexOf(column)));
                } else {
                    column.width = px(width(column.width, containerWidth));
                }
            }
            if (data && data.length && autoWidth) {
                // unmount the shadow table from temp
                M(null, tempRef.current);
            }
            return this;
        };
        Header.prototype.setSort = function (userConfig) {
            for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
                var column = _a[_i];
                // implicit userConfig.sort flag
                if (column.sort === undefined && userConfig.sort) {
                    column.sort = {
                        enabled: true,
                    };
                }
                // false, null, etc.
                if (!column.sort) {
                    column.sort = {
                        enabled: false,
                    };
                } else if (typeof column.sort === 'object') {
                    column.sort = __assign({ enabled: true }, column.sort);
                }
            }
        };
        Header.prototype.setID = function () {
            for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (!column.id && typeof column.name === 'string') {
                    // let's guess the column ID if it's undefined
                    column.id = camelCase(column.name);
                }
            }
        };
        Header.fromUserConfig = function (userConfig) {
            var header = new Header();
            if (userConfig.from) {
                header.columns = Header.fromHTMLTable(userConfig.from).columns;
            } else if (userConfig.columns) {
                for (var _i = 0, _a = userConfig.columns; _i < _a.length; _i++) {
                    var column = _a[_i];
                    if (typeof column === 'string' || l(column)) {
                        header.columns.push({
                            name: column,
                        });
                    } else if (typeof column === 'object') {
                        header.columns.push(column);
                    }
                }
            } else if (userConfig.data
                && typeof userConfig.data[0] === 'object'
                && !(userConfig.data[0] instanceof Array)) {
                // if data[0] is an object but not an Array
                header.columns = Object.keys(userConfig.data[0]).map(name => ({ name }));
            }
            if (header.columns.length) {
                header.setID();
                header.setSort(userConfig);
                return header;
            }
            return null;
        };
        Header.fromHTMLTable = function (element) {
            var header = new Header();
            var thead = element.querySelector('thead');
            var ths = thead.querySelectorAll('th');
            for (var _i = 0, _a = ths; _i < _a.length; _i++) {
                var th = _a[_i];
                header.columns.push({
                    name: th.innerText,
                    width: th.width,
                });
            }
            return header;
        };
        return Header;
    }(Base));

    var _prefix = 'ID_';
    /**
     * This class is mostly based on Flux's Dispatcher by Facebook
     * https://github.com/facebook/flux/blob/master/src/Dispatcher.js
     */
    var Dispatcher = /** @class */ (function () {
        function Dispatcher() {
            this._callbacks = {};
            this._isDispatching = false;
            this._isHandled = {};
            this._isPending = {};
            this._lastID = 1;
        }
        /**
         * Registers a callback to be invoked with every dispatched payload. Returns
         * a token that can be used with `waitFor()`.
         */
        Dispatcher.prototype.register = function (callback) {
            var id = _prefix + this._lastID++;
            this._callbacks[id] = callback;
            return id;
        };
        /**
         * Removes a callback based on its token.
         */
        Dispatcher.prototype.unregister = function (id) {
            if (!this._callbacks[id]) {
                throw Error(`Dispatcher.unregister(...): ${id} does not map to a registered callback.`);
            }
            delete this._callbacks[id];
        };
        /**
         * Waits for the callbacks specified to be invoked before continuing execution
         * of the current callback. This method should only be used by a callback in
         * response to a dispatched payload.
         */
        Dispatcher.prototype.waitFor = function (ids) {
            if (!this._isDispatching) {
                throw Error('Dispatcher.waitFor(...): Must be invoked while dispatching.');
            }
            for (var ii = 0; ii < ids.length; ii++) {
                var id = ids[ii];
                if (this._isPending[id]) {
                    if (!this._isHandled[id]) {
                        throw Error(`Dispatcher.waitFor(...): Circular dependency detected while ' +\n            'waiting for ${id}.`);
                    }
                    continue;
                }
                if (!this._callbacks[id]) {
                    throw Error(`Dispatcher.waitFor(...): ${id} does not map to a registered callback.`);
                }
                this._invokeCallback(id);
            }
        };
        /**
         * Dispatches a payload to all registered callbacks.
         */
        Dispatcher.prototype.dispatch = function (payload) {
            if (this._isDispatching) {
                throw Error('Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.');
            }
            this._startDispatching(payload);
            try {
                for (var id in this._callbacks) {
                    if (this._isPending[id]) {
                        continue;
                    }
                    this._invokeCallback(id);
                }
            } finally {
                this._stopDispatching();
            }
        };
        /**
         * Is this Dispatcher currently dispatching.
         */
        Dispatcher.prototype.isDispatching = function () {
            return this._isDispatching;
        };
        /**
         * Call the callback stored with the given id. Also do some internal
         * bookkeeping.
         *
         * @internal
         */
        Dispatcher.prototype._invokeCallback = function (id) {
            this._isPending[id] = true;
            this._callbacks[id](this._pendingPayload);
            this._isHandled[id] = true;
        };
        /**
         * Set up bookkeeping needed when dispatching.
         *
         * @internal
         */
        Dispatcher.prototype._startDispatching = function (payload) {
            for (var id in this._callbacks) {
                this._isPending[id] = false;
                this._isHandled[id] = false;
            }
            this._pendingPayload = payload;
            this._isDispatching = true;
        };
        /**
         * Clear bookkeeping used for dispatching.
         *
         * @internal
         */
        Dispatcher.prototype._stopDispatching = function () {
            delete this._pendingPayload;
            this._isDispatching = false;
        };
        return Dispatcher;
    }());

    var Storage = /** @class */ (function () {
        function Storage() {
        }
        return Storage;
    }());

    var MemoryStorage = /** @class */ (function (_super) {
        __extends(MemoryStorage, _super);
        function MemoryStorage(data) {
            var _this = _super.call(this) || this;
            _this.set(data);
            return _this;
        }
        MemoryStorage.prototype.get = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                    case 0: return [4 /* yield*/, this.data()];
                    case 1:
                        data = _a.sent();
                        return [2 /* return*/, {
                            data,
                            total: data.length,
                        }];
                    }
                });
            });
        };
        MemoryStorage.prototype.set = function (data) {
            if (data instanceof Array) {
                this.data = function () {
                    return data;
                };
            } else if (data instanceof Function) {
                this.data = data;
            }
            return this;
        };
        return MemoryStorage;
    }(Storage));

    /**
     * Centralized logging lib
     *
     * This class needs some improvements but so far it has been used to have a coherent way to log
     */
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.prototype.format = function (message, type) {
            return `[Grid.js] [${type.toUpperCase()}]: ${message}`;
        };
        Logger.prototype.error = function (message, throwException) {
            if (throwException === void 0) {
                throwException = false;
            }
            var msg = this.format(message, 'error');
            if (throwException) {
                throw Error(msg);
            } else {
                console.error(msg);
            }
        };
        Logger.prototype.warn = function (message) {
            console.warn(this.format(message, 'warn'));
        };
        Logger.prototype.info = function (message) {
            console.info(this.format(message, 'info'));
        };
        return Logger;
    }());
    var log = new Logger();

    var ServerStorage = /** @class */ (function (_super) {
        __extends(ServerStorage, _super);
        function ServerStorage(options) {
            var _this = _super.call(this) || this;
            _this.options = options;
            return _this;
        }
        ServerStorage.prototype.handler = function (response) {
            if (typeof this.options.handle === 'function') {
                return this.options.handle(response);
            }
            if (response.ok) {
                return response.json();
            }

            log.error(`Could not fetch data: ${response.status} - ${response.statusText}`, true);
            return null;
        };
        ServerStorage.prototype.get = function (options) {
            // this.options is the initial config object
            // options is the runtime config passed by the pipeline (e.g. search component)
            var opts = __assign(__assign({}, this.options), options);
            return fetch(opts.url, opts)
                .then(this.handler.bind(this))
                .then(res => ({
                    data: opts.then(res),
                    total: typeof opts.total === 'function' ? opts.total(res) : undefined,
                }));
        };
        return ServerStorage;
    }(Storage));

    var StorageUtils = /** @class */ (function () {
        function StorageUtils() {
        }
        /**
         * Accepts the userConfig dict and tries to guess and return a Storage type
         *
         * @param userConfig
         */
        StorageUtils.createFromUserConfig = function (userConfig) {
            var storage = null;
            // `data` array is provided
            if (userConfig.data) {
                storage = new MemoryStorage(userConfig.data);
            }
            if (userConfig.from) {
                storage = new MemoryStorage(this.tableElementToArray(userConfig.from));
                // remove the source table element from the DOM
                userConfig.from.style.display = 'none';
            }
            if (userConfig.server) {
                storage = new ServerStorage(userConfig.server);
            }
            if (!storage) {
                log.error('Could not determine the storage type', true);
            }
            return storage;
        };
        /**
         * Accepts a HTML table element and converts it into a 2D array of data
         *
         * TODO: This function can be a step in the pipeline: Convert Table -> Load into a memory storage -> ...
         *
         * @param element
         */
        StorageUtils.tableElementToArray = function (element) {
            var arr = [];
            var tbody = element.querySelector('tbody');
            var rows = tbody.querySelectorAll('tr');
            for (var _i = 0, _a = rows; _i < _a.length; _i++) {
                var row = _a[_i];
                var cells = row.querySelectorAll('td');
                var parsedRow = [];
                for (var _b = 0, cells_1 = cells; _b < cells_1.length; _b++) {
                    var cell = cells_1[_b];
                    // try to capture a TD with single text element first
                    if (cell.childNodes.length === 1
                        && cell.childNodes[0].nodeType === Node.TEXT_NODE) {
                        parsedRow.push(cell.innerText);
                    } else {
                        parsedRow.push(html(cell.innerHTML));
                    }
                }
                arr.push(parsedRow);
            }
            return arr;
        };
        return StorageUtils;
    }());

    var EventEmitter = /** @class */ (function () {
        function EventEmitter() {
        }
        // because we are using EventEmitter as a mixin and the
        // constructor won't be called by the applyMixins function
        // see src/base.ts and src/util/applyMixin.ts
        EventEmitter.prototype.init = function (event) {
            if (!this.callbacks) {
                this.callbacks = {};
            }
            if (event && !this.callbacks[event]) {
                this.callbacks[event] = [];
            }
        };
        EventEmitter.prototype.on = function (event, listener) {
            this.init(event);
            this.callbacks[event].push(listener);
            return this;
        };
        EventEmitter.prototype.off = function (event, listener) {
            var eventName = event;
            this.init();
            if (!this.callbacks[eventName] || this.callbacks[eventName].length === 0) {
                // there is no callbacks with this key
                return this;
            }
            this.callbacks[eventName] = this.callbacks[eventName].filter(value => value != listener);
            return this;
        };
        EventEmitter.prototype.emit = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var eventName = event;
            this.init(eventName);
            if (this.callbacks[eventName].length > 0) {
                this.callbacks[eventName].forEach(value => value.apply(void 0, args));
                return true;
            }
            return false;
        };
        return EventEmitter;
    }());

    var ProcessorType;
    (function (ProcessorType) {
        ProcessorType[ProcessorType.Initiator = 0] = 'Initiator';
        ProcessorType[ProcessorType.ServerFilter = 1] = 'ServerFilter';
        ProcessorType[ProcessorType.ServerSort = 2] = 'ServerSort';
        ProcessorType[ProcessorType.ServerLimit = 3] = 'ServerLimit';
        ProcessorType[ProcessorType.Extractor = 4] = 'Extractor';
        ProcessorType[ProcessorType.Transformer = 5] = 'Transformer';
        ProcessorType[ProcessorType.Filter = 6] = 'Filter';
        ProcessorType[ProcessorType.Sort = 7] = 'Sort';
        ProcessorType[ProcessorType.Limit = 8] = 'Limit';
    })(ProcessorType || (ProcessorType = {}));
    var PipelineProcessor = /** @class */ (function (_super) {
        __extends(PipelineProcessor, _super);
        function PipelineProcessor(props) {
            var _this = _super.call(this) || this;
            _this._props = {};
            _this.id = generateID();
            if (props) {
                _this.setProps(props);
            }
            return _this;
        }
        /**
         * process is used to call beforeProcess and afterProcess callbacks
         * This function is just a wrapper that calls _process()
         *
         * @param args
         */
        PipelineProcessor.prototype.process = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.validateProps instanceof Function) {
                this.validateProps.apply(this, args);
            }
            this.emit.apply(this, __spreadArrays(['beforeProcess'], args));
            var result = this._process.apply(this, args);
            this.emit.apply(this, __spreadArrays(['afterProcess'], args));
            return result;
        };
        PipelineProcessor.prototype.setProps = function (props) {
            Object.assign(this._props, props);
            this.emit('propsUpdated', this);
            return this;
        };
        Object.defineProperty(PipelineProcessor.prototype, 'props', {
            get() {
                return this._props;
            },
            enumerable: false,
            configurable: true,
        });
        return PipelineProcessor;
    }(EventEmitter));

    var Pipeline = /** @class */ (function (_super) {
        __extends(Pipeline, _super);
        function Pipeline(steps) {
            var _this = _super.call(this) || this;
            // available steps for this pipeline
            _this._steps = new Map();
            // used to cache the results of processors using their id field
            _this.cache = new Map();
            // keeps the index of the last updated processor in the registered
            // processors list and will be used to invalidate the cache
            // -1 means all new processors should be processed
            _this.lastProcessorIndexUpdated = -1;
            if (steps) {
                steps.forEach(step => _this.register(step));
            }
            return _this;
        }
        /**
         * Clears the `cache` array
         */
        Pipeline.prototype.clearCache = function () {
            this.cache = new Map();
            this.lastProcessorIndexUpdated = -1;
        };
        /**
         * Registers a new processor
         *
         * @param processor
         * @param priority
         */
        Pipeline.prototype.register = function (processor, priority) {
            if (priority === void 0) {
                priority = null;
            }
            if (processor.type === null) {
                throw Error('Processor type is not defined');
            }
            // binding the propsUpdated callback to the Pipeline
            processor.on('propsUpdated', this.processorPropsUpdated.bind(this));
            this.addProcessorByPriority(processor, priority);
            this.afterRegistered(processor);
        };
        /**
         * Removes a processor from the list
         *
         * @param processor
         */
        Pipeline.prototype.unregister = function (processor) {
            if (!processor) {
                return;
            }
            var subSteps = this._steps.get(processor.type);
            if (subSteps && subSteps.length) {
                this._steps.set(processor.type, subSteps.filter(proc => proc != processor));
                this.emit('updated', processor);
            }
        };
        /**
         * Registers a new processor
         *
         * @param processor
         * @param priority
         */
        Pipeline.prototype.addProcessorByPriority = function (processor, priority) {
            var subSteps = this._steps.get(processor.type);
            if (!subSteps) {
                var newSubStep = [];
                this._steps.set(processor.type, newSubStep);
                subSteps = newSubStep;
            }
            if (priority === null || priority < 0) {
                subSteps.push(processor);
            } else {
                if (!subSteps[priority]) {
                    // slot is empty
                    subSteps[priority] = processor;
                } else {
                    // slot is NOT empty
                    var first = subSteps.slice(0, priority - 1);
                    var second = subSteps.slice(priority + 1);
                    this._steps.set(processor.type, first.concat(processor).concat(second));
                }
            }
        };
        Object.defineProperty(Pipeline.prototype, 'steps', {
            /**
             * Flattens the _steps Map and returns a list of steps with their correct priorities
             */
            get() {
                var steps = [];
                for (var _i = 0, _a = this.getSortedProcessorTypes(); _i < _a.length; _i++) {
                    var type = _a[_i];
                    var subSteps = this._steps.get(type);
                    if (subSteps && subSteps.length) {
                        steps = steps.concat(subSteps);
                    }
                }
                // to remove any undefined elements
                return steps.filter(s => s);
            },
            enumerable: false,
            configurable: true,
        });
        /**
         * Accepts ProcessType and returns an array of the registered processes
         * with the give type
         *
         * @param type
         */
        Pipeline.prototype.getStepsByType = function (type) {
            return this.steps.filter(process => process.type === type);
        };
        /**
         * Returns a list of ProcessorType according to their priority
         */
        Pipeline.prototype.getSortedProcessorTypes = function () {
            return Object.keys(ProcessorType)
                .filter(key => !isNaN(Number(key)))
                .map(key => Number(key));
        };
        /**
         * Runs all registered processors based on their correct priority
         * and returns the final output after running all steps
         *
         * @param data
         */
        Pipeline.prototype.process = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var lastProcessorIndexUpdated, steps, prev, _i, steps_1, processor, processorIndex, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                    case 0:
                        lastProcessorIndexUpdated = this.lastProcessorIndexUpdated;
                        steps = this.steps;
                        prev = data;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        _i = 0, steps_1 = steps;
                        _a.label = 2;
                    case 2:
                        if (!(_i < steps_1.length)) {
                            return [3 /* break*/, 6];
                        }
                        processor = steps_1[_i];
                        processorIndex = this.findProcessorIndexByID(processor.id);
                        if (!(processorIndex >= lastProcessorIndexUpdated)) {
                            return [3 /* break*/, 4];
                        }
                        return [4 /* yield*/, processor.process(prev)];
                    case 3:
                        // we should execute process() here since the last
                        // updated processor was before "processor".
                        // This is to ensure that we always have correct and up to date
                        // data from processors and also to skip them when necessary
                        prev = _a.sent();
                        this.cache.set(processor.id, prev);
                        return [3 /* break*/, 5];
                    case 4:
                        // cached results already exist
                        prev = this.cache.get(processor.id);
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /* break*/, 2];
                    case 6: return [3 /* break*/, 8];
                    case 7:
                        e_1 = _a.sent();
                        log.error(e_1);
                        // trigger the onError callback
                        this.emit('error', prev);
                        // rethrow
                        throw e_1;
                    case 8:
                        // means the pipeline is up to date
                        this.lastProcessorIndexUpdated = steps.length;
                        // triggers the afterProcess callbacks with the results
                        this.emit('afterProcess', prev);
                        return [2 /* return*/, prev];
                    }
                });
            });
        };
        /**
         * Returns the registered processor's index in _steps array
         *
         * @param processorID
         */
        Pipeline.prototype.findProcessorIndexByID = function (processorID) {
            return this.steps.findIndex(p => p.id == processorID);
        };
        /**
         * Sets the last updates processors index locally
         * This is used to invalid or skip a processor in
         * the process() method
         */
        Pipeline.prototype.setLastProcessorIndex = function (processor) {
            var processorIndex = this.findProcessorIndexByID(processor.id);
            if (this.lastProcessorIndexUpdated > processorIndex) {
                this.lastProcessorIndexUpdated = processorIndex;
            }
        };
        Pipeline.prototype.processorPropsUpdated = function (processor) {
            this.setLastProcessorIndex(processor);
            this.emit('propsUpdated');
            this.emit('updated', processor);
        };
        Pipeline.prototype.afterRegistered = function (processor) {
            this.setLastProcessorIndex(processor);
            this.emit('afterRegister');
            this.emit('updated', processor);
        };
        return Pipeline;
    }(EventEmitter));

    var StorageExtractor = /** @class */ (function (_super) {
        __extends(StorageExtractor, _super);
        function StorageExtractor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(StorageExtractor.prototype, 'type', {
            get() {
                return ProcessorType.Extractor;
            },
            enumerable: false,
            configurable: true,
        });
        StorageExtractor.prototype._process = function (opts) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                    case 0: return [4 /* yield*/, this.props.storage.get(opts)];
                    case 1: return [2 /* return*/, _a.sent()];
                    }
                });
            });
        };
        return StorageExtractor;
    }(PipelineProcessor));

    var ArrayToTabularTransformer = /** @class */ (function (_super) {
        __extends(ArrayToTabularTransformer, _super);
        function ArrayToTabularTransformer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ArrayToTabularTransformer.prototype, 'type', {
            get() {
                return ProcessorType.Transformer;
            },
            enumerable: false,
            configurable: true,
        });
        ArrayToTabularTransformer.prototype._process = function (arrayResponse) {
            var tabular = Tabular.fromArray(arrayResponse.data);
            // for server-side storage
            tabular.length = arrayResponse.total;
            return tabular;
        };
        return ArrayToTabularTransformer;
    }(PipelineProcessor));

    var ServerInitiator = /** @class */ (function (_super) {
        __extends(ServerInitiator, _super);
        function ServerInitiator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ServerInitiator.prototype, 'type', {
            get() {
                return ProcessorType.Initiator;
            },
            enumerable: false,
            configurable: true,
        });
        ServerInitiator.prototype._process = function () {
            return {
                url: this.props.serverStorageOptions.url,
                method: this.props.serverStorageOptions.method,
            };
        };
        return ServerInitiator;
    }(PipelineProcessor));

    var StorageResponseToArrayTransformer = /** @class */ (function (_super) {
        __extends(StorageResponseToArrayTransformer, _super);
        function StorageResponseToArrayTransformer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(StorageResponseToArrayTransformer.prototype, 'type', {
            get() {
                return ProcessorType.Transformer;
            },
            enumerable: false,
            configurable: true,
        });
        StorageResponseToArrayTransformer.prototype.castData = function (data) {
            var _this = this;
            if (!data || !data.length) {
                return [];
            }
            // if it's a 2d array already
            if (data[0] instanceof Array) {
                return data;
            }
            // if it's an array of objects (but not array of arrays)
            if (typeof data[0] === 'object' && !(data[0] instanceof Array)) {
                return data.map(row => _this.props.header.columns.map(column => row[column.id]));
            }
            return [];
        };
        StorageResponseToArrayTransformer.prototype._process = function (storageResponse) {
            return {
                data: this.castData(storageResponse.data),
                total: storageResponse.total,
            };
        };
        return StorageResponseToArrayTransformer;
    }(PipelineProcessor));

    var PipelineUtils = /** @class */ (function () {
        function PipelineUtils() {
        }
        PipelineUtils.createFromConfig = function (config) {
            var pipeline = new Pipeline();
            if (config.storage instanceof ServerStorage) {
                pipeline.register(new ServerInitiator({
                    serverStorageOptions: config.server,
                }));
            }
            pipeline.register(new StorageExtractor({ storage: config.storage }));
            pipeline.register(new StorageResponseToArrayTransformer({ header: config.header }));
            pipeline.register(new ArrayToTabularTransformer());
            return pipeline;
        };
        return PipelineUtils;
    }());

    var Config = /** @class */ (function () {
        function Config(config) {
            Object.assign(this, __assign(__assign({}, Config.defaultConfig()), config));
            this._userConfig = {};
        }
        /**
         * Assigns `updatedConfig` keys to the current config file
         *
         * @param updatedConfig
         */
        Config.prototype.assign = function (updatedConfig) {
            for (var _i = 0, _a = Object.keys(updatedConfig); _i < _a.length; _i++) {
                var key = _a[_i];
                // because we don't want to update the _userConfig cache
                if (key === '_userConfig') {
                    continue;
                }
                this[key] = updatedConfig[key];
            }
            return this;
        };
        /**
         * Updates the config from a UserConfig
         *
         * @param userConfig
         */
        Config.prototype.update = function (userConfig) {
            if (!userConfig) {
                return this;
            }
            this._userConfig = __assign(__assign({}, this._userConfig), userConfig);
            this.assign(Config.fromUserConfig(this._userConfig));
            return this;
        };
        Config.defaultConfig = function () {
            return {
                dispatcher: new Dispatcher(),
                tempRef: y(),
                width: '100%',
                autoWidth: true,
                style: {},
                className: {},
            };
        };
        Config.fromUserConfig = function (userConfig) {
            var config = new Config(userConfig);
            // to set the initial _userConfig object
            config._userConfig = userConfig;
            // Sort
            if (typeof userConfig.sort === 'boolean' && userConfig.sort) {
                config.assign({
                    sort: {
                        multiColumn: true,
                    },
                });
            }
            // Header
            config.assign({
                header: Header.fromUserConfig(config),
            });
            config.assign({
                storage: StorageUtils.createFromUserConfig(userConfig),
            });
            config.assign({
                pipeline: PipelineUtils.createFromConfig(config),
            });
            // Pagination
            config.assign({
                pagination: __assign({ enabled: userConfig.pagination === true
                        || userConfig.pagination instanceof Object }, userConfig.pagination),
            });
            // Search
            config.assign({
                search: __assign({ enabled: userConfig.search === true || userConfig.search instanceof Object }, userConfig.search),
            });
            // Translator
            config.assign({
                translator: new Translator(userConfig.language),
            });
            return config;
        };
        return Config;
    }());

    function className() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var prefix = 'gridjs';
        return `${prefix}${args.reduce((prev, cur) => `${prev}-${cur}`, '')}`;
    }
    function classJoin() {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        return classNames
            .filter(x => x)
            .reduce((className, prev) => `${className || ''} ${prev}`, '')
            .trim();
    }

    // container status
    var Status;
    (function (Status) {
        Status[Status.Init = 0] = 'Init';
        Status[Status.Loading = 1] = 'Loading';
        Status[Status.Loaded = 2] = 'Loaded';
        Status[Status.Rendered = 3] = 'Rendered';
        Status[Status.Error = 4] = 'Error';
    })(Status || (Status = {}));

    var TD = /** @class */ (function (_super) {
        __extends(TD, _super);
        function TD() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TD.prototype.content = function () {
            if (this.props.column
                && typeof this.props.column.formatter === 'function') {
                return this.props.column.formatter(this.props.cell.data, this.props.row, this.props.column);
            }
            return this.props.cell.data;
        };
        TD.prototype.handleClick = function (e) {
            this.config.eventEmitter.emit('cellClick', e, this.props.cell, this.props.column, this.props.row);
        };
        TD.prototype.render = function () {
            return (v('td', { role: this.props.role, colSpan: this.props.colSpan, className: classJoin(className('td'), this.props.className, this.config.className.td), style: __assign({}, this.config.style.td), onClick: this.handleClick.bind(this) }, this.content()));
        };
        return TD;
    }(BaseComponent));

    var TR = /** @class */ (function (_super) {
        __extends(TR, _super);
        function TR() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TR.prototype.getColumn = function (cellIndex) {
            if (this.props.header) {
                return this.props.header.columns[cellIndex];
            }
            return null;
        };
        TR.prototype.handleClick = function (e) {
            this.config.eventEmitter.emit('rowClick', e, this.props.row);
        };
        TR.prototype.render = function () {
            var _this = this;
            if (this.props.children) {
                return v('tr', { className: className('tr') }, this.props.children);
            }

            return (v('tr', { className: className('tr'), onClick: this.handleClick.bind(this) }, this.props.row.cells.map((cell, i) => (v(TD, { key: cell.id, cell, row: _this.props.row, column: _this.getColumn(i) })))));
        };
        return TR;
    }(BaseComponent));

    var MessageRow = /** @class */ (function (_super) {
        __extends(MessageRow, _super);
        function MessageRow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MessageRow.prototype.render = function () {
            return (v(
                TR, null,
                v(TD, { role: 'alert', colSpan: this.props.colSpan, cell: new Cell(this.props.message), className: classJoin(className('message'), this.props.className ? this.props.className : null) }),
            ));
        };
        return MessageRow;
    }(BaseComponent));

    var TBody = /** @class */ (function (_super) {
        __extends(TBody, _super);
        function TBody() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TBody.prototype.headerLength = function () {
            if (this.props.header) {
                return this.props.header.columns.length;
            }
            return 0;
        };
        TBody.prototype.render = function () {
            var _this = this;
            return (v(
                'tbody', { className: className('tbody') },
                this.props.data
                && this.props.data.rows.map(row => v(TR, { key: row.id, row, header: _this.props.header })),
                this.props.status === Status.Loading
                && (!this.props.data || this.props.data.length === 0) && (v(MessageRow, { message: this._('loading'), colSpan: this.headerLength(), className: className('loading') })),
                this.props.status === Status.Loaded
                && this.props.data
                && this.props.data.length === 0 && (v(MessageRow, { message: this._('noRecordsFound'), colSpan: this.headerLength(), className: className('notfound') })),
                this.props.status === Status.Error && (v(MessageRow, { message: this._('error'), colSpan: this.headerLength(), className: className('error') })),
            ));
        };
        return TBody;
    }(BaseComponent));

    var NativeSort = /** @class */ (function (_super) {
        __extends(NativeSort, _super);
        function NativeSort() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NativeSort.prototype.validateProps = function () {
            for (var _i = 0, _a = this.props.columns; _i < _a.length; _i++) {
                var condition = _a[_i];
                if (condition.direction === undefined) {
                    condition.direction = 1;
                }
                if (condition.direction !== 1 && condition.direction !== -1) {
                    log.error(`Invalid sort direction ${condition.direction}`);
                }
            }
        };
        Object.defineProperty(NativeSort.prototype, 'type', {
            get() {
                return ProcessorType.Sort;
            },
            enumerable: false,
            configurable: true,
        });
        NativeSort.prototype.compare = function (cellA, cellB) {
            if (cellA > cellB) {
                return 1;
            } else if (cellA < cellB) {
                return -1;
            }
            return 0;
        };
        NativeSort.prototype.compareWrapper = function (a, b) {
            var cmp = 0;
            for (var _i = 0, _a = this.props.columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (cmp === 0) {
                    var cellA = a.cells[column.index].data;
                    var cellB = b.cells[column.index].data;
                    if (typeof column.compare === 'function') {
                        cmp |= column.compare(cellA, cellB) * column.direction;
                    } else {
                        cmp |= this.compare(cellA, cellB) * column.direction;
                    }
                } else {
                    break;
                }
            }
            return cmp;
        };
        NativeSort.prototype._process = function (data) {
            var sortedRows = __spreadArrays(data.rows);
            sortedRows.sort(this.compareWrapper.bind(this));
            var sorted = new Tabular(sortedRows);
            // we have to set the tabular length manually
            // because of the server-side storage
            sorted.length = data.length;
            return sorted;
        };
        return NativeSort;
    }(PipelineProcessor));

    var BaseStore = /** @class */ (function (_super) {
        __extends(BaseStore, _super);
        function BaseStore(dispatcher) {
            var _this = _super.call(this) || this;
            _this.dispatcher = dispatcher;
            _this._state = _this.getInitialState();
            dispatcher.register(_this._handle.bind(_this));
            return _this;
        }
        BaseStore.prototype._handle = function (action) {
            this.handle(action.type, action.payload);
        };
        BaseStore.prototype.setState = function (newState) {
            var prevState = this._state;
            this._state = newState;
            this.emit('updated', newState, prevState);
        };
        Object.defineProperty(BaseStore.prototype, 'state', {
            get() {
                return this._state;
            },
            enumerable: false,
            configurable: true,
        });
        return BaseStore;
    }(EventEmitter));

    var SortStore = /** @class */ (function (_super) {
        __extends(SortStore, _super);
        function SortStore() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SortStore.prototype.getInitialState = function () {
            return [];
        };
        SortStore.prototype.handle = function (type, payload) {
            if (type === 'SORT_COLUMN') {
                var { index } = payload, { direction } = payload, { multi } = payload, { compare } = payload;
                this.sortColumn(index, direction, multi, compare);
            } else if (type === 'SORT_COLUMN_TOGGLE') {
                var { index } = payload, { multi } = payload, { compare } = payload;
                this.sortToggle(index, multi, compare);
            }
        };
        SortStore.prototype.sortToggle = function (index, multi, compare) {
            var columns = __spreadArrays(this.state);
            var column = columns.find(x => x.index === index);
            if (!column) {
                this.sortColumn(index, 1, multi, compare);
            } else {
                this.sortColumn(index, column.direction === 1 ? -1 : 1, multi, compare);
            }
        };
        SortStore.prototype.sortColumn = function (index, direction, multi, compare) {
            var columns = __spreadArrays(this.state);
            var count = columns.length;
            var column = columns.find(x => x.index === index);
            var exists = column !== undefined;
            var add = false;
            var reset = false;
            var remove = false;
            var update = false;
            if (!exists) {
                // the column has not been sorted
                if (count === 0) {
                    // the first column to be sorted
                    add = true;
                } else if (count > 0 && !multi) {
                    // remove the previously sorted column
                    // and sort the current column
                    add = true;
                    reset = true;
                } else if (count > 0 && multi) {
                    // multi-sorting
                    // sort this column as well
                    add = true;
                }
            } else {
                // the column has been sorted before
                if (!multi) {
                    // single column sorting
                    if (count === 1) {
                        update = true;
                    } else if (count > 1) {
                        // this situation happens when we have already entered
                        // multi-sorting mode but then user tries to sort a single column
                        reset = true;
                        add = true;
                    }
                } else {
                    // multi sorting
                    if (column.direction === -1) {
                        // remove the current column from the
                        // sorted columns array
                        remove = true;
                    } else {
                        update = true;
                    }
                }
            }
            if (reset) {
                // resetting the sorted columns
                columns = [];
            }
            if (add) {
                columns.push({
                    index,
                    direction,
                    compare,
                });
            } else if (update) {
                var index_1 = columns.indexOf(column);
                columns[index_1].direction = direction;
            } else if (remove) {
                var index_2 = columns.indexOf(column);
                columns.splice(index_2, 1);
            }
            this.setState(columns);
        };
        return SortStore;
    }(BaseStore));

    var BaseActions = /** @class */ (function () {
        function BaseActions(dispatcher) {
            this.dispatcher = dispatcher;
        }
        BaseActions.prototype.dispatch = function (type, payload) {
            this.dispatcher.dispatch({
                type,
                payload,
            });
        };
        return BaseActions;
    }());

    var SortActions = /** @class */ (function (_super) {
        __extends(SortActions, _super);
        function SortActions() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SortActions.prototype.sortColumn = function (index, direction, multi, compare) {
            this.dispatch('SORT_COLUMN', {
                index,
                direction,
                multi,
                compare,
            });
        };
        SortActions.prototype.sortToggle = function (index, multi, compare) {
            this.dispatch('SORT_COLUMN_TOGGLE', {
                index,
                multi,
                compare,
            });
        };
        return SortActions;
    }(BaseActions));

    var ServerSort = /** @class */ (function (_super) {
        __extends(ServerSort, _super);
        function ServerSort() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ServerSort.prototype, 'type', {
            get() {
                return ProcessorType.ServerSort;
            },
            enumerable: false,
            configurable: true,
        });
        ServerSort.prototype._process = function (options) {
            var updates = {};
            if (this.props.url) {
                updates.url = this.props.url(options.url, this.props.columns);
            }
            if (this.props.body) {
                updates.body = this.props.body(options.body, this.props.columns);
            }
            return __assign(__assign({}, options), updates);
        };
        return ServerSort;
    }(PipelineProcessor));

    var Sort = /** @class */ (function (_super) {
        __extends(Sort, _super);
        function Sort(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.actions = new SortActions(_this.config.dispatcher);
            _this.store = new SortStore(_this.config.dispatcher);
            if (props.enabled) {
                _this.sortProcessor = _this.getOrCreateSortProcessor();
                _this.updateStateFn = _this.updateState.bind(_this);
                _this.store.on('updated', _this.updateStateFn);
                _this.state = { direction: 0 };
            }
            return _this;
        }
        Sort.prototype.componentWillUnmount = function () {
            this.config.pipeline.unregister(this.sortProcessor);
            this.store.off('updated', this.updateStateFn);
            if (this.updateSortProcessorFn) {
                this.store.off('updated', this.updateSortProcessorFn);
            }
        };
        /**
         * Sets the internal state of component
         */
        Sort.prototype.updateState = function () {
            var _this = this;
            var currentColumn = this.store.state.find(x => x.index === _this.props.index);
            if (!currentColumn) {
                this.setState({
                    direction: 0,
                });
            } else {
                this.setState({
                    direction: currentColumn.direction,
                });
            }
        };
        Sort.prototype.updateSortProcessor = function (sortedColumns) {
            // updates the Sorting processor
            this.sortProcessor.setProps({
                columns: sortedColumns,
            });
        };
        Sort.prototype.getOrCreateSortProcessor = function () {
            var processorType = ProcessorType.Sort;
            if (this.config.sort && typeof this.config.sort.server === 'object') {
                processorType = ProcessorType.ServerSort;
            }
            var processors = this.config.pipeline.getStepsByType(processorType);
            // my assumption is that we only have ONE sorting processor in the
            // entire pipeline and that's why I'm displaying a warning here
            var processor;
            // A sort process is already registered
            if (processors.length > 0) {
                processor = processors[0];
            } else {
                // let's create a new sort processor
                // this event listener is here because
                // we want to subscribe to the sort store only once
                this.updateSortProcessorFn = this.updateSortProcessor.bind(this);
                this.store.on('updated', this.updateSortProcessorFn);
                if (processorType === ProcessorType.ServerSort) {
                    processor = new ServerSort(__assign({ columns: this.store.state }, this.config.sort.server));
                } else {
                    processor = new NativeSort({
                        columns: this.store.state,
                    });
                }
                this.config.pipeline.register(processor);
            }
            return processor;
        };
        Sort.prototype.changeDirection = function (e) {
            e.preventDefault();
            e.stopPropagation();
            // to sort two or more columns at the same time
            this.actions.sortToggle(this.props.index, e.shiftKey === true && this.config.sort.multiColumn, this.props.compare);
        };
        Sort.prototype.render = function () {
            if (!this.props.enabled) {
                return null;
            }
            var { direction } = this.state;
            var sortClassName = 'neutral';
            if (direction === 1) {
                sortClassName = 'asc';
            } else if (direction === -1) {
                sortClassName = 'desc';
            }
            return (v('button', {
                // because the corresponding <th> has tabIndex=0
                tabIndex: -1, 'aria-label': this._(`sort.sort${direction === 1 ? 'Desc' : 'Asc'}`), title: this._(`sort.sort${direction === 1 ? 'Desc' : 'Asc'}`), className: classJoin(className('sort'), className('sort', sortClassName)), onClick: this.changeDirection.bind(this) }));
        };
        return Sort;
    }(BaseComponent));

    var TH = /** @class */ (function (_super) {
        __extends(TH, _super);
        function TH() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.sortRef = y();
            return _this;
        }
        TH.prototype.isSortable = function () {
            return this.props.column.sort.enabled;
        };
        TH.prototype.onClick = function (e) {
            e.stopPropagation();
            if (this.isSortable()) {
                this.sortRef.current.changeDirection(e);
            }
        };
        TH.prototype.keyDown = function (e) {
            if (this.isSortable() && e.which === 13) {
                this.onClick(e);
            }
        };
        TH.prototype.render = function () {
            var props = {};
            if (this.isSortable()) {
                props.tabIndex = 0;
            }
            return (v(
                'th', __assign({ className: classJoin(className('th'), this.isSortable() ? className('th', 'sort') : null, this.config.className.th), onClick: this.onClick.bind(this), style: __assign(__assign({}, this.config.style.th), { width: this.props.column.width }), onKeyDown: this.keyDown.bind(this) }, props),
                this.props.column.name,
                this.isSortable() && (v(Sort, __assign({ ref: this.sortRef, index: this.props.index }, this.props.column.sort))),
            ));
        };
        return TH;
    }(BaseComponent));

    var THead = /** @class */ (function (_super) {
        __extends(THead, _super);
        function THead() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        THead.prototype.render = function () {
            if (this.props.header) {
                return (v(
                    'thead', { key: this.props.header.id, className: className('thead') },
                    v(TR, null, this.props.header.columns.map((col, i) => v(TH, { column: col, index: i }))),
                ));
            }
            return null;
        };
        return THead;
    }(BaseComponent));

    var Table = /** @class */ (function (_super) {
        __extends(Table, _super);
        function Table() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Table.prototype.render = function () {
            return (v(
                'table', { role: 'grid', className: classJoin(className('table'), this.config.className.table), style: __assign(__assign({}, this.config.style.table), {
                    width: this.props.width,
                }) },
                v(THead, { header: this.props.header }),
                v(TBody, { data: this.props.data, status: this.props.status, header: this.props.header }),
            ));
        };
        return Table;
    }(BaseComponent));

    function search(keyword, tabular) {
        // escape special regex chars
        keyword = keyword.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        return new Tabular(tabular.rows.filter(row => row.cells.some(cell => {
            if (!cell || !cell.data) {
                return false;
            }
            var data = '';
            if (typeof cell.data === 'object') {
                // HTMLContent element
                var element = cell.data;
                if (element.props && element.props.content) {
                    // TODO: we should only search in the content of the element. props.content is the entire HTML element
                    data = element.props.content;
                }
            } else {
                // primitive types
                data = String(cell.data);
            }
            return new RegExp(keyword, 'gi').test(data);
        })));
    }

    var GlobalSearchFilter = /** @class */ (function (_super) {
        __extends(GlobalSearchFilter, _super);
        function GlobalSearchFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(GlobalSearchFilter.prototype, 'type', {
            get() {
                return ProcessorType.Filter;
            },
            enumerable: false,
            configurable: true,
        });
        GlobalSearchFilter.prototype._process = function (data) {
            if (this.props.keyword) {
                return search(String(this.props.keyword).trim(), data);
            }
            return data;
        };
        return GlobalSearchFilter;
    }(PipelineProcessor));

    var SearchStore = /** @class */ (function (_super) {
        __extends(SearchStore, _super);
        function SearchStore() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SearchStore.prototype.getInitialState = function () {
            return { keyword: null };
        };
        SearchStore.prototype.handle = function (type, payload) {
            if (type === 'SEARCH_KEYWORD') {
                var { keyword } = payload;
                this.search(keyword);
            }
        };
        SearchStore.prototype.search = function (keyword) {
            this.setState({ keyword });
        };
        return SearchStore;
    }(BaseStore));

    var SearchActions = /** @class */ (function (_super) {
        __extends(SearchActions, _super);
        function SearchActions() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SearchActions.prototype.search = function (keyword) {
            this.dispatch('SEARCH_KEYWORD', {
                keyword,
            });
        };
        return SearchActions;
    }(BaseActions));

    var ServerGlobalSearchFilter = /** @class */ (function (_super) {
        __extends(ServerGlobalSearchFilter, _super);
        function ServerGlobalSearchFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ServerGlobalSearchFilter.prototype, 'type', {
            get() {
                return ProcessorType.ServerFilter;
            },
            enumerable: false,
            configurable: true,
        });
        ServerGlobalSearchFilter.prototype._process = function (options) {
            if (!this.props.keyword) {
                return options;
            }
            var updates = {};
            if (this.props.url) {
                updates.url = this.props.url(options.url, this.props.keyword);
            }
            if (this.props.body) {
                updates.body = this.props.body(options.body, this.props.keyword);
            }
            return __assign(__assign({}, options), updates);
        };
        return ServerGlobalSearchFilter;
    }(PipelineProcessor));

    var debounce = function (func, waitFor) {
        var timeout;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new Promise(resolve => {
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(() => resolve(func.apply(void 0, args)), waitFor);
            });
        };
    };

    var Search = /** @class */ (function (_super) {
        __extends(Search, _super);
        function Search(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.actions = new SearchActions(_this.config.dispatcher);
            _this.store = new SearchStore(_this.config.dispatcher);
            var { enabled } = props, { keyword } = props;
            if (enabled) {
                // initial search
                _this.actions.search(keyword);
                _this.storeUpdatedFn = _this.storeUpdated.bind(_this);
                _this.store.on('updated', _this.storeUpdatedFn);
                var searchProcessor = void 0;
                if (props.server) {
                    searchProcessor = new ServerGlobalSearchFilter({
                        keyword: props.keyword,
                        url: props.server.url,
                        body: props.server.body,
                    });
                } else {
                    searchProcessor = new GlobalSearchFilter({
                        keyword: props.keyword,
                    });
                }
                _this.searchProcessor = searchProcessor;
                // adds a new processor to the pipeline
                _this.config.pipeline.register(searchProcessor);
            }
            return _this;
        }
        Search.prototype.componentWillUnmount = function () {
            this.config.pipeline.unregister(this.searchProcessor);
            this.store.off('updated', this.storeUpdatedFn);
        };
        Search.prototype.storeUpdated = function (state) {
            // updates the processor state
            this.searchProcessor.setProps({
                keyword: state.keyword,
            });
        };
        Search.prototype.onChange = function (event) {
            var keyword = event.target.value;
            this.actions.search(keyword);
        };
        Search.prototype.render = function () {
            if (!this.props.enabled) {
                return null;
            }
            var onInput = this.onChange.bind(this);
            // add debounce to input only if it's a server-side search
            if (this.searchProcessor instanceof ServerGlobalSearchFilter) {
                onInput = debounce(onInput, this.props.debounceTimeout);
            }
            return (v(
                'div', { className: className('search') },
                v('input', { type: 'search', placeholder: this._('search.placeholder'), 'aria-label': this._('search.placeholder'), onInput, className: classJoin(className('input'), className('search', 'input')), value: this.store.state.keyword }),
            ));
        };
        Search.defaultProps = {
            debounceTimeout: 250,
        };
        return Search;
    }(BaseComponent));

    var t$1, u$1, r$1, o$1 = 0, i$1 = [], c$1 = n.__r, f$1 = n.diffed, e$1 = n.__c, a$1 = n.unmount;function v$1(t, r) {
        n.__h && n.__h(u$1, t, o$1 || r), o$1 = 0;var i = u$1.__H || (u$1.__H = { __: [], __h: [] });return t >= i.__.length && i.__.push({}), i.__[t];
    } function y$1(r, o) {
        var i = v$1(t$1++, 3);!n.__s && j$1(i.__H, o) && (i.__ = r, i.__H = o, u$1.__H.__h.push(i));
    } function h$1(n) {
        return o$1 = 5, _$1(() => ({ current: n }), []);
    } function _$1(n, u) {
        var r = v$1(t$1++, 7);return j$1(r.__H, u) ? (r.__H = u, r.__h = n, r.__ = n()) : r.__;
    } function q$1() {
        i$1.some(t => {
            if (t.__P) {
                try {
                    t.__H.__h.forEach(b), t.__H.__h.forEach(g$1), t.__H.__h = [];
                } catch (u) {
                    return t.__H.__h = [], n.__e(u, t.__v), !0;
                }
            }
        }), i$1 = [];
    }n.__r = function (n) {
        c$1 && c$1(n), t$1 = 0;var r = (u$1 = n.__c).__H;r && (r.__h.forEach(b), r.__h.forEach(g$1), r.__h = []);
    }, n.diffed = function (t) {
        f$1 && f$1(t);var u = t.__c;u && u.__H && u.__H.__h.length && (1 !== i$1.push(u) && r$1 === n.requestAnimationFrame || ((r$1 = n.requestAnimationFrame) || function (n) {
            var t, u = function () {
                    clearTimeout(r), x$1 && cancelAnimationFrame(t), setTimeout(n);
                }, r = setTimeout(u, 100);x$1 && (t = requestAnimationFrame(u));
        })(q$1));
    }, n.__c = function (t, u) {
        u.some(t => {
            try {
                t.__h.forEach(b), t.__h = t.__h.filter(n => !n.__ || g$1(n));
            } catch (r) {
                u.some(n => {
                    n.__h && (n.__h = []);
                }), u = [], n.__e(r, t.__v);
            }
        }), e$1 && e$1(t, u);
    }, n.unmount = function (t) {
        a$1 && a$1(t);var u = t.__c;if (u && u.__H) {
            try {
                u.__H.__.forEach(b);
            } catch (t) {
                n.__e(t, u.__v);
            }
        }
    };var x$1 = 'function' === typeof requestAnimationFrame;function b(n) {
        'function' === typeof n.u && n.u();
    } function g$1(n) {
        n.u = n.__();
    } function j$1(n, t) {
        return !n || t.some((t, u) => t !== n[u]);
    }

    var HeaderContainer = /** @class */ (function (_super) {
        __extends(HeaderContainer, _super);
        function HeaderContainer(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.headerRef = h$1(null);
            _this.state = {
                isActive: true,
            };
            return _this;
        }
        HeaderContainer.prototype.componentDidMount = function () {
            if (this.headerRef.current.children.length === 0) {
                this.setState({
                    isActive: false,
                });
            }
        };
        HeaderContainer.prototype.render = function () {
            if (this.state.isActive) {
                return (v(
                    'div', { ref: this.headerRef, className: classJoin(className('head'), this.config.className.header), style: __assign({}, this.config.style.header) },
                    v(Search, __assign({}, this.config.search)),
                ));
            }
            return null;
        };
        return HeaderContainer;
    }(BaseComponent));

    var PaginationLimit = /** @class */ (function (_super) {
        __extends(PaginationLimit, _super);
        function PaginationLimit() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PaginationLimit.prototype.validateProps = function () {
            if (isNaN(Number(this.props.limit)) || isNaN(Number(this.props.page))) {
                throw Error('Invalid parameters passed');
            }
        };
        Object.defineProperty(PaginationLimit.prototype, 'type', {
            get() {
                return ProcessorType.Limit;
            },
            enumerable: false,
            configurable: true,
        });
        PaginationLimit.prototype._process = function (data) {
            var { page } = this.props;
            var start = page * this.props.limit;
            var end = (page + 1) * this.props.limit;
            return new Tabular(data.rows.slice(start, end));
        };
        return PaginationLimit;
    }(PipelineProcessor));

    var ServerPaginationLimit = /** @class */ (function (_super) {
        __extends(ServerPaginationLimit, _super);
        function ServerPaginationLimit() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ServerPaginationLimit.prototype, 'type', {
            get() {
                return ProcessorType.ServerLimit;
            },
            enumerable: false,
            configurable: true,
        });
        ServerPaginationLimit.prototype._process = function (options) {
            var updates = {};
            if (this.props.url) {
                updates.url = this.props.url(options.url, this.props.page, this.props.limit);
            }
            if (this.props.body) {
                updates.body = this.props.body(options.body, this.props.page, this.props.limit);
            }
            return __assign(__assign({}, options), updates);
        };
        return ServerPaginationLimit;
    }(PipelineProcessor));

    var Pagination = /** @class */ (function (_super) {
        __extends(Pagination, _super);
        function Pagination(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = {
                limit: props.limit,
                page: props.page || 0,
                total: 0,
            };
            return _this;
        }
        Pagination.prototype.componentWillMount = function () {
            var _this = this;
            if (this.props.enabled) {
                var processor = void 0;
                this.setTotalFromTabularFn = this.setTotalFromTabular.bind(this);
                if (this.props.server) {
                    processor = new ServerPaginationLimit({
                        limit: this.state.limit,
                        page: this.state.page,
                        url: this.props.server.url,
                        body: this.props.server.body,
                    });
                    this.config.pipeline.on('afterProcess', this.setTotalFromTabularFn);
                } else {
                    processor = new PaginationLimit({
                        limit: this.state.limit,
                        page: this.state.page,
                    });
                    // Pagination (all Limit processors) is the last step in the pipeline
                    // and we assume that at this stage, we have the rows that we care about.
                    // Let's grab the rows before processing Pagination and set total number of rows
                    processor.on('beforeProcess', this.setTotalFromTabularFn);
                }
                this.processor = processor;
                this.config.pipeline.register(processor);
                // we need to make sure that the state is set
                // to the default props when an error happens
                this.config.pipeline.on('error', () => {
                    _this.setState({
                        total: 0,
                        page: 0,
                    });
                });
            }
        };
        Pagination.prototype.setTotalFromTabular = function (tabular) {
            this.setTotal(tabular.length);
        };
        Pagination.prototype.onUpdate = function (processor) {
            // this is to ensure that the current page is set to 0
            // when a processor is updated for some reason
            if (this.props.resetPageOnUpdate && processor !== this.processor) {
                this.setPage(0);
            }
        };
        Pagination.prototype.componentDidMount = function () {
            this.onUpdateFn = this.onUpdate.bind(this);
            this.config.pipeline.on('updated', this.onUpdateFn);
        };
        Pagination.prototype.componentWillUnmount = function () {
            this.config.pipeline.unregister(this.processor);
            this.config.pipeline.off('updated', this.onUpdateFn);
        };
        Object.defineProperty(Pagination.prototype, 'pages', {
            get() {
                return Math.ceil(this.state.total / this.state.limit);
            },
            enumerable: false,
            configurable: true,
        });
        Pagination.prototype.setPage = function (page) {
            if (page >= this.pages || page < 0 || page === this.state.page) {
                return null;
            }
            this.setState({
                page,
            });
            this.processor.setProps({
                page,
            });
        };
        Pagination.prototype.setTotal = function (totalRows) {
            // to set the correct total number of rows
            // when running in-memory operations
            this.setState({
                total: totalRows,
            });
        };
        Pagination.prototype.renderPages = function () {
            var _this = this;
            if (this.props.buttonsCount <= 0) {
                return null;
            }
            // how many pagination buttons to render?
            var maxCount = Math.min(this.pages, this.props.buttonsCount);
            var pagePivot = Math.min(this.state.page, Math.floor(maxCount / 2));
            if (this.state.page + Math.floor(maxCount / 2) >= this.pages) {
                pagePivot = maxCount - (this.pages - this.state.page);
            }
            return (v(
                p, null,
                this.pages > maxCount && this.state.page - pagePivot > 0 && (v(
                    p, null,
                    v('button', { tabIndex: 0, onClick: this.setPage.bind(this, 0), title: this._('pagination.firstPage') }, this._('1')),
                    v('button', { tabIndex: -1, className: className('spread') }, '...'),
                )),
                Array.from(Array(maxCount).keys())
                    .map(i => _this.state.page + (i - pagePivot))
                    .map(i => (v('button', { tabIndex: 0, onClick: _this.setPage.bind(_this, i), className: _this.state.page === i ? className('currentPage') : null, title: _this._('pagination.page', i + 1) }, _this._(`${i + 1}`)))),
                this.pages > maxCount && this.pages > this.state.page + pagePivot + 1 && (v(
                    p, null,
                    v('button', { tabIndex: -1, className: className('spread') }, '...'),
                    v('button', { tabIndex: 0, onClick: this.setPage.bind(this, this.pages - 1), title: this._('pagination.page', this.pages) }, this._(`${this.pages}`)),
                )),
            ));
        };
        Pagination.prototype.renderSummary = function () {
            return (v(p, null, this.props.summary && this.state.total > 0 && (v(
                'div', { role: 'status', className: className('summary'), title: this._('pagination.navigate', this.state.page + 1, this.pages) },
                this._('pagination.showing'),
                ' ',
                v('b', null, this._(`${this.state.page * this.state.limit + 1}`)),
                ' ',
                this._('pagination.to'),
                ' ',
                v('b', null, this._(`${Math.min((this.state.page + 1) * this.state.limit, this.state.total)}`)),
                ' ',
                this._('pagination.of'),
                ' ',
                v('b', null, this._(`${this.state.total}`)),
                ' ',
                this._('pagination.results'),
            ))));
        };
        Pagination.prototype.render = function () {
            if (!this.props.enabled) {
                return null;
            }
            return (v(
                'div', { className: className('pagination') },
                this.renderSummary(),
                v(
                    'div', { className: className('pages') },
                    this.props.prevButton && (v('button', { tabIndex: 0, disabled: this.state.page === 0, onClick: this.setPage.bind(this, this.state.page - 1) }, this._('pagination.previous'))),
                    this.renderPages(),
                    this.props.nextButton && (v('button', { tabIndex: 0, disabled: this.pages === this.state.page + 1 || this.pages === 0, onClick: this.setPage.bind(this, this.state.page + 1) }, this._('pagination.next'))),
                ),
            ));
        };
        Pagination.defaultProps = {
            summary: true,
            nextButton: true,
            prevButton: true,
            buttonsCount: 3,
            limit: 10,
            resetPageOnUpdate: true,
        };
        return Pagination;
    }(BaseComponent));

    var FooterContainer = /** @class */ (function (_super) {
        __extends(FooterContainer, _super);
        function FooterContainer(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.footerRef = h$1(null);
            _this.state = {
                isActive: true,
            };
            return _this;
        }
        FooterContainer.prototype.componentDidMount = function () {
            if (this.footerRef.current.children.length === 0) {
                this.setState({
                    isActive: false,
                });
            }
        };
        FooterContainer.prototype.render = function () {
            if (this.state.isActive) {
                return (v(
                    'div', { ref: this.footerRef, className: classJoin(className('footer'), this.config.className.footer), style: __assign({}, this.config.style.footer) },
                    v(Pagination, __assign({}, this.config.pagination)),
                ));
            }
            return null;
        };
        return FooterContainer;
    }(BaseComponent));

    var Container = /** @class */ (function (_super) {
        __extends(Container, _super);
        function Container(props, context) {
            var _this = _super.call(this, props, context) || this;
            // global Config context which is passed to all components
            _this.configContext = q(null);
            _this.state = {
                status: Status.Loading,
                header: props.header,
                data: null,
            };
            return _this;
        }
        Container.prototype.processPipeline = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                    case 0:
                        this.props.config.eventEmitter.emit('beforeLoad');
                        this.setState({
                            status: Status.Loading,
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /* yield*/, this.props.pipeline.process()];
                    case 2:
                        data = _a.sent();
                        this.setState({
                            data,
                            status: Status.Loaded,
                        });
                        this.props.config.eventEmitter.emit('load', data);
                        return [3 /* break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        log.error(e_1);
                        this.setState({
                            status: Status.Error,
                            data: null,
                        });
                        return [3 /* break*/, 4];
                    case 4: return [2];
                    }
                });
            });
        };
        Container.prototype.componentDidMount = function () {
            return __awaiter(this, void 0, void 0, function () {
                var config;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                    case 0:
                        config = this.props.config;
                        // for the initial load
                        return [4 /* yield*/, this.processPipeline()];
                    case 1:
                        // for the initial load
                        _a.sent();
                        if (config.header && this.state.data && this.state.data.length) {
                            // now that we have the data, let's adjust columns width
                            // NOTE: that we only calculate the columns width once
                            this.setState({
                                header: config.header.adjustWidth(config.container, config.tempRef, this.state.data, config.autoWidth),
                            });
                        }
                        this.processPipelineFn = this.processPipeline.bind(this);
                        this.props.pipeline.on('updated', this.processPipelineFn);
                        return [2];
                    }
                });
            });
        };
        Container.prototype.componentWillUnmount = function () {
            this.props.pipeline.off('updated', this.processPipelineFn);
        };
        Container.prototype.render = function () {
            var { configContext } = this;
            return (v(
                configContext.Provider, { value: this.props.config },
                v(
                    'div', { role: 'complementary', className: classJoin('gridjs', className('container'), this.state.status === Status.Loading ? className('loading') : null, this.props.config.className.container), style: __assign(__assign({}, this.props.config.style.container), {
                        width: this.props.width,
                    }) },
                    this.state.status === Status.Loading && (v('div', { className: className('loading-bar') })),
                    v(HeaderContainer, null),
                    v(
                        'div', { className: className('wrapper'), style: { width: this.props.width } },
                        v(Table, { data: this.state.data, header: this.state.header, width: this.props.width, status: this.state.status }),
                    ),
                    v(FooterContainer, null),
                ),
                v('div', { ref: this.props.config.tempRef, id: 'gridjs-temp', className: className('temp') }),
            ));
        };
        return Container;
    }(BaseComponent));

    var Grid = /** @class */ (function (_super) {
        __extends(Grid, _super);
        function Grid(userConfig) {
            var _this = _super.call(this) || this;
            _this.config = new Config({ eventEmitter: _this }).update(userConfig);
            return _this;
        }
        Grid.prototype.updateConfig = function (userConfig) {
            this.config.update(userConfig);
            return this;
        };
        Grid.prototype.createElement = function () {
            return v(Container, {
                config: this.config,
                pipeline: this.config.pipeline,
                header: this.config.header,
                width: this.config.width,
            });
        };
        /**
         * Uses the existing container and tries to clear the cache
         * and re-render the existing Grid.js instance again. This is
         * useful when a new config is set/updated.
         *
         */
        Grid.prototype.forceRender = function () {
            if (!this.config || !this.config.container) {
                log.error('Container is empty. Make sure you call render() before forceRender()', true);
            }
            // clear the pipeline cache
            this.config.pipeline.clearCache();
            // TODO: not sure if it's a good idea to render a null element but I couldn't find a better way
            M(null, this.config.container);
            M(this.createElement(), this.config.container);
            return this;
        };
        /**
         * Mounts the Grid.js instance to the container
         * and renders the instance
         *
         * @param container
         */
        Grid.prototype.render = function (container) {
            if (!container) {
                log.error('Container element cannot be null', true);
            }
            if (container.childNodes.length > 0) {
                log.error(`The container element ${container} is not empty. Make sure the container is empty and call render() again`);
                return this;
            }
            this.config.container = container;
            M(this.createElement(), container);
            return this;
        };
        return Grid;
    }(EventEmitter));

    exports.Component = d;
    exports.Config = Config;
    exports.Grid = Grid;
    exports.createElement = v;
    exports.createRef = y;
    exports.h = v;
    exports.html = html;
    exports.useEffect = y$1;
    exports.useRef = h$1;

    Object.defineProperty(exports, '__esModule', { value: true });
})));
// # sourceMappingURL=gridjs.development.js.map
