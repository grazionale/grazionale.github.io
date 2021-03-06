! function() {
    "use strict";

    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(t)
    }

    function t(e, t, n, r, i, a, o) {
        try {
            var u = e[a](o),
                c = u.value
        } catch (e) {
            return void n(e)
        }
        u.done ? t(c) : Promise.resolve(c).then(r, i)
    }

    function n(e) {
        return function() {
            var n = this,
                r = arguments;
            return new Promise(function(i, a) {
                var o = e.apply(n, r);

                function u(e) {
                    t(o, i, a, u, c, "next", e)
                }

                function c(e) {
                    t(o, i, a, u, c, "throw", e)
                }
                u(void 0)
            })
        }
    }

    function r(e, t) {
        return (r = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function i(e, t, n) {
        return (i = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }() ? Reflect.construct : function(e, t, n) {
            var i = [null];
            i.push.apply(i, t);
            var a = new(Function.bind.apply(e, i));
            return n && r(a, n.prototype), a
        }).apply(null, arguments)
    }

    function a(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = [],
                r = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, u = e[Symbol.iterator](); !(r = (o = u.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    r || null == u.return || u.return()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function o(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var u = regeneratorRuntime.mark(L),
        c = [ArrayBuffer, MessagePort],
        s = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        l = Symbol("proxyValue"),
        d = Symbol("throw"),
        f = new Map([
            ["PROXY", {
                canHandle: function(e) {
                    return e && e[l]
                },
                serialize: function(e) {
                    var t = new MessageChannel,
                        r = t.port1,
                        a = t.port2;
                    return function(e, t) {
                        k(t) && (t = m(t));
                        if (!b(t)) throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");
                        w(t), S(t, (r = n(regeneratorRuntime.mark(function n(r) {
                            var a, u, c, s, l;
                            return regeneratorRuntime.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r.data.id && r.data.callPath) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        return a = r.data, n.next = 5, a.callPath.slice(0, -1).reduce(function(e, t) {
                                            return e[t]
                                        }, e);
                                    case 5:
                                        return u = n.sent, n.next = 8, a.callPath.reduce(function(e, t) {
                                            return e[t]
                                        }, e);
                                    case 8:
                                        if (c = n.sent, s = c, l = [], "APPLY" !== a.type && "CONSTRUCT" !== a.type || (l = a.argumentsList.map(g)), "APPLY" !== a.type) {
                                            n.next = 23;
                                            break
                                        }
                                        return n.prev = 13, n.next = 16, c.apply(u, l);
                                    case 16:
                                        s = n.sent, n.next = 23;
                                        break;
                                    case 19:
                                        n.prev = 19, n.t0 = n.catch(13), (s = n.t0)[d] = !0;
                                    case 23:
                                        if ("CONSTRUCT" === a.type) try {
                                            s = p(s = i(c, o(l)))
                                        } catch (e) {
                                            (s = e)[d] = !0
                                        }
                                        return "SET" === a.type && (c[a.property] = a.value, s = !0), (s = E(s)).id = a.id, n.abrupt("return", t.postMessage(s, R([s])));
                                    case 28:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, this, [
                                [13, 19]
                            ])
                        })), function(e) {
                            return r.apply(this, arguments)
                        }));
                        var r
                    }(e, r), a
                },
                deserialize: function(e) {
                    return v(e)
                }
            }],
            ["THROW", {
                canHandle: function(e) {
                    return e && e[d]
                },
                serialize: function(e) {
                    return e.toString() + "\n" + e.stack
                },
                deserialize: function(e) {
                    throw Error(e)
                }
            }]
        ]),
        h = 0;

    function v(e, t) {
        if (k(e) && (e = m(e)), !b(e)) throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");
        return w(e),
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                return new Proxy(r, {
                    construct: function(e, r, i) {
                        return t({
                            type: "CONSTRUCT",
                            callPath: n,
                            argumentsList: r
                        })
                    },
                    apply: function(r, i, a) {
                        return "bind" === n[n.length - 1] ? e(t, n.slice(0, -1)) : t({
                            type: "APPLY",
                            callPath: n,
                            argumentsList: a
                        })
                    },
                    get: function(r, i, a) {
                        if ("then" === i && 0 === n.length) return {
                            then: function() {
                                return a
                            }
                        };
                        if ("then" === i) {
                            var o = t({
                                type: "GET",
                                callPath: n
                            });
                            return Promise.resolve(o).then.bind(o)
                        }
                        return e(t, n.concat(i), r[i])
                    },
                    set: function(e, r, i, a) {
                        return t({
                            type: "SET",
                            callPath: n,
                            property: r,
                            value: i
                        })
                    }
                })
            }(function() {
                var t = n(regeneratorRuntime.mark(function t(n) {
                    var r, i, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = [], "APPLY" !== n.type && "CONSTRUCT" !== n.type || (r = n.argumentsList.map(y)), t.next = 4, C(e, Object.assign({}, n, {
                                    argumentsList: r
                                }), R(r));
                            case 4:
                                return i = t.sent, a = i.data, t.abrupt("return", g(a.value));
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(), [], t)
    }

    function p(e) {
        return e[l] = !0, e
    }

    function y(e) {
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var i, o = f[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                var u = a(i.value, 2),
                    c = u[0];
                if ((k = u[1]).canHandle(e)) return {
                    type: c,
                    value: k.serialize(e)
                }
            }
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                t || null == o.return || o.return()
            } finally {
                if (n) throw r
            }
        }
        var s = [],
            l = !0,
            d = !1,
            h = void 0;
        try {
            for (var v, p = L(e)[Symbol.iterator](); !(l = (v = p.next()).done); l = !0) {
                var y = v.value,
                    g = !0,
                    m = !1,
                    b = void 0;
                try {
                    for (var w, S = f[Symbol.iterator](); !(g = (w = S.next()).done); g = !0) {
                        var k, C = a(w.value, 2);
                        c = C[0];
                        (k = C[1]).canHandle(y.value) && s.push({
                            path: y.path,
                            wrappedValue: {
                                type: c,
                                value: k.serialize(y.value)
                            }
                        })
                    }
                } catch (e) {
                    m = !0, b = e
                } finally {
                    try {
                        g || null == S.return || S.return()
                    } finally {
                        if (m) throw b
                    }
                }
            }
        } catch (e) {
            d = !0, h = e
        } finally {
            try {
                l || null == p.return || p.return()
            } finally {
                if (d) throw h
            }
        }
        for (var x = 0; x < s.length; x++) {
            var R = s[x];
            R.path.slice(0, -1).reduce(function(e, t) {
                return e[t]
            }, e)[R.path[R.path.length - 1]] = null
        }
        return {
            type: "RAW",
            value: e,
            wrappedChildren: s
        }
    }

    function g(e) {
        var t, n, r, i;
        if (f.has(e.type)) return f.get(e.type).deserialize(e.value);
        if (function(e) {
                return "RAW" === e.type
            }(e)) {
            var a = !0,
                o = !1,
                u = void 0;
            try {
                for (var c, s = (e.wrappedChildren || [])[Symbol.iterator](); !(a = (c = s.next()).done); a = !0) {
                    var l = c.value;
                    if (!f.has(l.wrappedValue.type)) throw Error('Unknown value type "'.concat(e.type, '" at ').concat(l.path.join(".")));
                    var d = f.get(l.wrappedValue.type).deserialize(l.wrappedValue.value);
                    t = e.value, n = l.path, r = d, void 0, void 0, i = n.slice(-1)[0], n.slice(0, -1).reduce(function(e, t) {
                        return e[t]
                    }, t)[i] = r
                }
            } catch (e) {
                o = !0, u = e
            } finally {
                try {
                    a || null == s.return || s.return()
                } finally {
                    if (o) throw u
                }
            }
            return e.value
        }
        throw Error('Unknown value type "'.concat(e.type, '"'))
    }

    function m(e) {
        if ("Window" !== self.constructor.name) throw Error("self is not a window");
        return {
            addEventListener: self.addEventListener.bind(self),
            removeEventListener: self.removeEventListener.bind(self),
            postMessage: function(t, n) {
                return e.postMessage(t, "*", n)
            }
        }
    }

    function b(e) {
        return "addEventListener" in e && "removeEventListener" in e && "postMessage" in e
    }

    function w(e) {
        (function(e) {
            return "MessagePort" === e.constructor.name
        })(e) && e.start()
    }

    function S(e, t) {
        e.addEventListener("message", t)
    }

    function k(e) {
        return ["window", "length", "location", "parent", "opener"].every(function(t) {
            return t in e
        })
    }

    function C(e, t, n) {
        var r = "".concat(s, "-").concat(h++);
        return new Promise(function(i) {
            S(e, function t(n) {
                n.data.id === r && (! function(e, t) {
                    e.removeEventListener("message", t)
                }(e, t), i(n))
            }), t = Object.assign({}, t, {
                id: r
            }), e.postMessage(t, n)
        })
    }

    function x(e) {
        return c.some(function(t) {
            return e instanceof t
        })
    }

    function L(t) {
        var n, r, i, a, c, s = arguments;
        return regeneratorRuntime.wrap(function(u) {
            for (;;) switch (u.prev = u.next) {
                case 0:
                    if (n = s.length > 1 && void 0 !== s[1] ? s[1] : [], r = s.length > 2 && void 0 !== s[2] ? s[2] : null, t) {
                        u.next = 4;
                        break
                    }
                    return u.abrupt("return");
                case 4:
                    if (r || (r = new WeakSet), !r.has(t)) {
                        u.next = 7;
                        break
                    }
                    return u.abrupt("return");
                case 7:
                    if ("string" != typeof t) {
                        u.next = 9;
                        break
                    }
                    return u.abrupt("return");
                case 9:
                    if ("object" === e(t) && r.add(t), !ArrayBuffer.isView(t)) {
                        u.next = 12;
                        break
                    }
                    return u.abrupt("return");
                case 12:
                    return u.next = 14, {
                        value: t,
                        path: n
                    };
                case 14:
                    i = Object.keys(t), a = 0;
                case 16:
                    if (!(a < i.length)) {
                        u.next = 22;
                        break
                    }
                    return c = i[a], u.delegateYield(L(t[c], o(n).concat([c]), r), "t0", 19);
                case 19:
                    a++, u.next = 16;
                    break;
                case 22:
                case "end":
                    return u.stop()
            }
        }, u, this)
    }

    function R(e) {
        var t = [],
            n = !0,
            r = !1,
            i = void 0;
        try {
            for (var a, o = L(e)[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                var u = a.value;
                x(u.value) && t.push(u.value)
            }
        } catch (e) {
            r = !0, i = e
        } finally {
            try {
                n || null == o.return || o.return()
            } finally {
                if (r) throw i
            }
        }
        return t
    }

    function E(e) {
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var i, o = f[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                var u = a(i.value, 2),
                    c = u[0],
                    s = u[1];
                if (s.canHandle(e)) return {
                    value: {
                        type: c,
                        value: s.serialize(e)
                    }
                }
            }
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                t || null == o.return || o.return()
            } finally {
                if (n) throw r
            }
        }
        return {
            value: {
                type: "RAW",
                value: e
            }
        }
    }
    var D, U, P, M, q, A, T, z, O = v(new Worker("/scripts/qrworker.js")),
        W = function() {
            var e = n(regeneratorRuntime.mark(function e(t) {
                var n, r, i, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, n = t.canvas, r = n.width, i = n.height, a = t.getImageData(0, 0, r, i), e.next = 7, O.detectUrl(r, i, a);
                        case 7:
                            return e.abrupt("return", e.sent);
                        case 10:
                            e.prev = 10, e.t0 = e.catch(0), console.log(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }, e, this, [
                    [0, 10]
                ])
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
    D = function(e) {
        e.querySelector(".QRCodeSuccessDialogCallback-name");
        var t, n, r = e.querySelector(".QRCodeSuccessDialogCallback-domain"),
            i = !1;
        this.setQrCode = function(e) {
            n = e
        };
        var a = function(e) {
            if ("" === document.referrer) return !1;
            var t = new URL(document.referrer);
            return void 0 !== e && t.origin == e.origin && "https" !== t.scheme
        };
        t = function() {
            var e = new URL(window.location);
            if ("searchParams" in e && e.searchParams.has("x-callback-url")) return new URL(e.searchParams.get("x-callback-url"))
        }(), i = a(t), t && (e.addEventListener("click", function() {
            t.searchParams.set("qrcode", n), location = t
        }), e.classList.remove("hidden"), 0 == i && r.classList.add("invalid"), r.innerText = t.origin)
    }, U = function(e) {
        var t;
        try {
            t = new URL(e)
        } catch (e) {
            return
        }
        return t
    }, P = function(e) {
        var t = document.getElementById(e),
            r = t.querySelector(".QRCodeSuccessDialog-data"),
            i = t.querySelector(".QRCodeSuccessDialog-navigate"),
            a = t.querySelector(".QRCodeSuccessDialog-ignore"),
            o = t.querySelector(".QRCodeSuccessDialog-share"),
            u = t.querySelector(".QRCodeSuccessDialog-callback"),
            c = new D(u),
            s = this;
        this.currentUrl = void 0, navigator.share && o.classList.remove("hidden"), this.detectQRCode = function() {
            var e = n(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, W(t);
                        case 2:
                            return void 0 !== (n = e.sent) && (r = U(n), s.currentUrl = r), e.abrupt("return", r);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), this.showDialog = function(e) {
            t.style.display = "block", r.innerText = e, c.setQrCode(e)
        }, this.closeDialog = function() {
            t.style.display = "none", r.innerText = ""
        }, a.addEventListener("click", function() {
            this.closeDialog()
        }.bind(this)), o.addEventListener("click", function() {
            navigator.share && navigator.share({
                title: this.currentUrl,
                text: this.currentUrl,
                url: this.currentUrl
            }).then(function() {
                s.closeDialog()
            }).catch(function() {
                s.closeDialog()
            })
        }.bind(this)), i.addEventListener("click", function() {
            "javascript:" !== this.currentUrl.protocol ? (window.location = this.currentUrl, this.closeDialog()) : console.log("XSS prevented!")
        }.bind(this))
    }, M = function(e) {
        var t = document.getElementById(e),
            n = t.querySelector(".QRCodeAboutDialog-close");
        this.showDialog = function() {
            t.style.display = "block"
        }, this.closeDialog = function() {
            t.style.display = "none"
        }, n.addEventListener("click", function() {
            this.closeDialog()
        }.bind(this))
    }, q = function(e) {
        var t, n, r = e.querySelector(".Camera-toggle-input"),
            i = e.querySelector(".Camera-toggle"),
            a = e.querySelector(".Camera-video");
        this.resize = function(e, r) {
            e && r && (n = r, t = e);
            var i = this.getDimensions();
            a.style.transform = "translate(-50%, -50%) scale(" + i.scaleFactor + ")"
        }.bind(this);
        var o = new T(a);
        this.getDimensions = function() {
            var e = o.getDimensions(),
                r = e.height / n,
                i = e.width / t,
                a = 1 / Math.min(r, i);
            return e.scaleFactor = Number.isFinite(a) ? a : 1, e
        }, this.onDimensionsChanged = function() {}, o.onDimensionsChanged = function() {
            this.onDimensionsChanged(), this.resize()
        }.bind(this), o.getCameras(function(e) {
            e.length <= 1 && (i.style.display = "none"), o.setCamera(0)
        }), o.onframeready = function(e) {
            this.onframeready(e)
        }.bind(this), r.addEventListener("change", function(e) {
            var t = 0;
            !0 === e.target.checked && (t = 1), o.stop(), o.setCamera(t)
        }), this.stop = function() {
            o.stop()
        }, this.start = function() {
            var e = 0;
            !0 === r.checked && (e = 1), o.setCamera(e)
        }, document.addEventListener("visibilitychange", function() {
            "hidden" === document.visibilityState ? this.stop() : this.start()
        }.bind(this))
    }, A = function(e) {
        var t = e.querySelector(".CameraFallback-form"),
            n = e.querySelector(".CameraFallback-input"),
            r = new Image;
        this.onframeready = function() {}, this.onDimensionsChanged = function() {}, this.resize = function() {}, t.addEventListener("submit", function(e) {
            return e.preventDefault(), !1
        }), n.addEventListener("change", function(e) {
            var t = URL.createObjectURL(e.target.files[0]);
            r.onload = function() {
                this.onDimensionsChanged(), this.onframeready(r), URL.revokeObjectURL(t)
            }.bind(this), r.src = t
        }.bind(this)), this.getDimensions = function() {
            return {
                width: r.naturalWidth,
                height: r.naturalHeight,
                scaleFactor: 1
            }
        }
    }, T = function(e) {
        var t, n, r = null,
            i = this,
            a = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || null,
            o = -1;
        this.stop = function() {
            o = -1, t && t.getTracks().forEach(function(e) {
                e.stop()
            })
        }, this.getDimensions = function() {
            return {
                width: e.videoWidth,
                height: e.videoHeight
            }
        }, this.onDimensionsChanged = function() {}, this.getCameras = function(e) {
            e = e || function() {}, "enumerateDevices" in navigator.mediaDevices ? navigator.mediaDevices.enumerateDevices().then(function(e) {
                return e.filter(function(e) {
                    return "videoinput" == e.kind
                })
            }).then(function(t) {
                r = [], t.forEach(function(e) {
                    e.label.indexOf("facing back") >= 0 ? r.unshift(e) : r.push(e)
                }), e(r)
            }).catch(function(e) {
                console.error("Enumeration Error", e)
            }) : "getSources" in MediaStreamTrack ? MediaStreamTrack.getSources(function(t) {
                r = [];
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    "video" === i.kind && ("environment" === i.facing ? r.unshift(i) : r.push(i))
                }
                e(r)
            }) : e(r = [])
        }, this.setCamera = function(u) {
            if (o !== u && null !== r) {
                var c;
                o = u;
                var s = r[u];
                cancelAnimationFrame(n), c = void 0 === s && 0 == r.length ? {
                    video: !0,
                    audio: !1
                } : {
                    video: {
                        deviceId: {
                            exact: s.deviceId || s.id
                        }
                    },
                    audio: !1
                }, a.call(navigator, c, function(r) {
                    t = r, e.addEventListener("loadeddata", function(t) {
                        i.onDimensionsChanged(), n = requestAnimationFrame(function t() {
                            e.videoWidth > 0 && i.onframeready(e), -1 !== o && (n = requestAnimationFrame(t))
                        })
                    }), e.srcObject = t, e.load(), e.play().catch(function(e) {
                        console.error("Auto Play Error", e)
                    })
                }, console.error)
            }
        }
    }, z = function(e) {
        var t = this,
            n = !1,
            r = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || null;
        "#nogum" == location.hash && (r = null), "#canvasdebug" == location.hash && (n = !0);
        var i, a, o = document.getElementById(e);
        null === r ? (i = o.querySelector(".CameraFallback"), a = new A(i)) : (i = o.querySelector(".CameraRealtime"), a = new q(i)), n && o.classList.add("debug"), i.classList.remove("hidden");
        var u, c, s, l, d = o.querySelector(".Camera-display"),
            f = o.querySelector(".Camera-overlay"),
            h = d.getContext("2d"),
            v = 0,
            p = 0;
        a.onframeready = function(e) {
            h.drawImage(e, v, p, l, s, 0, 0, u, c), t.onframe && t.onframe(h)
        };
        this.resize = function(e, t) {
            e && t || (e = o.parentNode.offsetWidth, t = o.parentNode.offsetHeight), a.resize(e, t);
            var n, r, i, h, y, g, m = a.getDimensions(),
                b = m.height,
                w = m.width,
                S = (n = e, r = t, {
                    minLength: i = Math.min(n, r),
                    width: i - 64,
                    height: i - 64,
                    paddingHeight: (r + 64 - i) / 2,
                    paddingWidth: (n + 64 - i) / 2
                });
            c = u = S.width / m.scaleFactor, d.width = u, d.height = u, v = w / 2 - u / 2, p = b / 2 - c / 2, l = u, s = c, y = (h = S).paddingHeight, g = h.paddingWidth, f.style.borderTopWidth = y + "px", f.style.borderLeftWidth = g + "px", f.style.borderRightWidth = g + "px", f.style.borderBottomWidth = y + "px"
        }, window.addEventListener("resize", this.resize), a.onDimensionsChanged = this.resize, this.resize()
    }, new function(e) {
        var t = new z("camera"),
            r = new P("qrcode"),
            i = new M("about");
        document.querySelector(".about").onclick = function() {
            i.showDialog()
        };
        var a, o = !1;
        t.onframe = (a = n(regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (0 != o) {
                            e.next = 7;
                            break
                        }
                        return o = !0, e.next = 4, r.detectQRCode(t);
                    case 4:
                        void 0 !== (n = e.sent) && (ga && ga("send", "event", "urlfound"), r.showDialog(n)), o = !1;
                    case 7:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        })), function(e) {
            return a.apply(this, arguments)
        })
    }, window.addEventListener("unhandledrejection", function(e) {
        console.error("Unhandled rejection (promise: ", e.promise, ", reason: ", e.reason, ").")
    })
}();