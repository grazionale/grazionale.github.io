const TRANSFERABLE_TYPES = [ArrayBuffer, MessagePort],
    uid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    proxyValueSymbol = Symbol("proxyValue"),
    throwSymbol = Symbol("throw"),
    proxyTransferHandler = {
        canHandle: e => e && e[proxyValueSymbol],
        serialize: e => {
            const {
                port1: t,
                port2: n
            } = new MessageChannel;
            return expose(e, t), n
        },
        deserialize: e => proxy(e)
    },
    throwTransferHandler = {
        canHandle: e => e && e[throwSymbol],
        serialize: e => e.toString() + "\n" + e.stack,
        deserialize: e => {
            throw Error(e)
        }
    },
    transferHandlers = new Map([
        ["PROXY", proxyTransferHandler],
        ["THROW", throwTransferHandler]
    ]);
let pingPongMessageCounter = 0;

function proxy(e, t) {
    if (isWindow(e) && (e = windowEndpoint(e)), !isEndpoint(e)) throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");
    return activateEndpoint(e), cbProxy(async t => {
        let n = [];
        return "APPLY" !== t.type && "CONSTRUCT" !== t.type || (n = t.argumentsList.map(wrapValue)), unwrapValue((await pingPongMessage(e, Object.assign({}, t, {
            argumentsList: n
        }), transferableProperties(n))).data.value)
    }, [], t)
}

function proxyValue(e) {
    return e[proxyValueSymbol] = !0, e
}

function expose(e, t) {
    if (isWindow(t) && (t = windowEndpoint(t)), !isEndpoint(t)) throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");
    activateEndpoint(t), attachMessageHandler(t, async function(n) {
        if (!n.data.id || !n.data.callPath) return;
        const r = n.data;
        let a = await r.callPath.slice(0, -1).reduce((e, t) => e[t], e),
            i = await r.callPath.reduce((e, t) => e[t], e),
            o = i,
            s = [];
        if ("APPLY" !== r.type && "CONSTRUCT" !== r.type || (s = r.argumentsList.map(unwrapValue)), "APPLY" === r.type) try {
            o = await i.apply(a, s)
        } catch (e) {
            (o = e)[throwSymbol] = !0
        }
        if ("CONSTRUCT" === r.type) try {
            o = proxyValue(o = new i(...s))
        } catch (e) {
            (o = e)[throwSymbol] = !0
        }
        return "SET" === r.type && (i[r.property] = r.value, o = !0), (o = makeInvocationResult(o)).id = r.id, t.postMessage(o, transferableProperties([o]))
    })
}

function wrapValue(e) {
    for (const [t, n] of transferHandlers)
        if (n.canHandle(e)) return {
            type: t,
            value: n.serialize(e)
        };
    let t = [];
    for (const n of iterateAllProperties(e))
        for (const [e, r] of transferHandlers) r.canHandle(n.value) && t.push({
            path: n.path,
            wrappedValue: {
                type: e,
                value: r.serialize(n.value)
            }
        });
    for (const n of t) {
        n.path.slice(0, -1).reduce((e, t) => e[t], e)[n.path[n.path.length - 1]] = null
    }
    return {
        type: "RAW",
        value: e,
        wrappedChildren: t
    }
}

function unwrapValue(e) {
    if (transferHandlers.has(e.type)) {
        return transferHandlers.get(e.type).deserialize(e.value)
    }
    if (isRawWrappedValue(e)) {
        for (const t of e.wrappedChildren || []) {
            if (!transferHandlers.has(t.wrappedValue.type)) throw Error(`Unknown value type "${e.type}" at ${t.path.join(".")}`);
            const n = transferHandlers.get(t.wrappedValue.type).deserialize(t.wrappedValue.value);
            replaceValueInObjectAtPath(e.value, t.path, n)
        }
        return e.value
    }
    throw Error(`Unknown value type "${e.type}"`)
}

function replaceValueInObjectAtPath(e, t, n) {
    const r = t.slice(-1)[0];
    t.slice(0, -1).reduce((e, t) => e[t], e)[r] = n
}

function isRawWrappedValue(e) {
    return "RAW" === e.type
}

function windowEndpoint(e) {
    if ("Window" !== self.constructor.name) throw Error("self is not a window");
    return {
        addEventListener: self.addEventListener.bind(self),
        removeEventListener: self.removeEventListener.bind(self),
        postMessage: (t, n) => e.postMessage(t, "*", n)
    }
}

function isEndpoint(e) {
    return "addEventListener" in e && "removeEventListener" in e && "postMessage" in e
}

function activateEndpoint(e) {
    isMessagePort(e) && e.start()
}

function attachMessageHandler(e, t) {
    e.addEventListener("message", t)
}

function detachMessageHandler(e, t) {
    e.removeEventListener("message", t)
}

function isMessagePort(e) {
    return "MessagePort" === e.constructor.name
}

function isWindow(e) {
    return ["window", "length", "location", "parent", "opener"].every(t => t in e)
}

function pingPongMessage(e, t, n) {
    const r = `${uid}-${pingPongMessageCounter++}`;
    return new Promise(a => {
        attachMessageHandler(e, function t(n) {
            n.data.id === r && (detachMessageHandler(e, t), a(n))
        }), t = Object.assign({}, t, {
            id: r
        }), e.postMessage(t, n)
    })
}

function cbProxy(e, t = [], n = function() {}) {
    return new Proxy(n, {
        construct: (n, r, a) => e({
            type: "CONSTRUCT",
            callPath: t,
            argumentsList: r
        }),
        apply: (n, r, a) => "bind" === t[t.length - 1] ? cbProxy(e, t.slice(0, -1)) : e({
            type: "APPLY",
            callPath: t,
            argumentsList: a
        }),
        get(n, r, a) {
            if ("then" === r && 0 === t.length) return {
                then: () => a
            };
            if ("then" === r) {
                const n = e({
                    type: "GET",
                    callPath: t
                });
                return Promise.resolve(n).then.bind(n)
            }
            return cbProxy(e, t.concat(r), n[r])
        },
        set: (n, r, a, i) => e({
            type: "SET",
            callPath: t,
            property: r,
            value: a
        })
    })
}

function isTransferable(e) {
    return TRANSFERABLE_TYPES.some(t => e instanceof t)
}

function* iterateAllProperties(e, t = [], n = null) {
    if (!e) return;
    if (n || (n = new WeakSet), n.has(e)) return;
    if ("string" == typeof e) return;
    if ("object" == typeof e && n.add(e), ArrayBuffer.isView(e)) return;
    yield {
        value: e,
        path: t
    };
    const r = Object.keys(e);
    for (const a of r) yield * iterateAllProperties(e[a], [...t, a], n)
}

function transferableProperties(e) {
    const t = [];
    for (const n of iterateAllProperties(e)) isTransferable(n.value) && t.push(n.value);
    return t
}

function makeInvocationResult(e) {
    for (const [t, n] of transferHandlers)
        if (n.canHandle(e)) {
            return {
                value: {
                    type: t,
                    value: n.serialize(e)
                }
            }
        }
    return {
        value: {
            type: "RAW",
            value: e
        }
    }
}
const proxy$1 = proxy(new Worker("/scripts/qrworker.js")),
    decode = async function(e) {
        try {
            let t = e.canvas,
                n = t.width,
                r = t.height,
                a = e.getImageData(0, 0, n, r);
            return await proxy$1.detectUrl(n, r, a)
        } catch (e) {
            console.log(e)
        }
    };
! function() {
    var e = function(e) {
            e.querySelector(".QRCodeSuccessDialogCallback-name");
            var t, n, r = e.querySelector(".QRCodeSuccessDialogCallback-domain"),
                a = !1;
            this.setQrCode = function(e) {
                n = e
            };
            var i = function(e) {
                if ("" === document.referrer) return !1;
                var t = new URL(document.referrer);
                return void 0 !== e && t.origin == e.origin && "https" !== t.scheme
            };
            t = function() {
                var e = new URL(window.location);
                if ("searchParams" in e && e.searchParams.has("x-callback-url")) return new URL(e.searchParams.get("x-callback-url"))
            }(), a = i(t), t && (e.addEventListener("click", function() {
                t.searchParams.set("qrcode", n), location = t
            }), e.classList.remove("hidden"), 0 == a && r.classList.add("invalid"), r.innerText = t.origin)
        },
        t = function(t) {
            var n = document.getElementById(t),
                r = n.querySelector(".QRCodeSuccessDialog-data"),
                a = n.querySelector(".QRCodeSuccessDialog-navigate"),
                i = n.querySelector(".QRCodeSuccessDialog-ignore"),
                o = n.querySelector(".QRCodeSuccessDialog-share"),
                s = n.querySelector(".QRCodeSuccessDialog-callback"),
                c = new e(s),
                l = this;
            this.currentUrl = void 0, navigator.share && o.classList.remove("hidden"), this.detectQRCode = async function(e) {
                let t, n = await decode(e);
                return void 0 !== n && (t = function(e) {
                    var t;
                    try {
                        t = new URL(e)
                    } catch (e) {
                        return
                    }
                    return t
                }(n), l.currentUrl = t), t
            }, this.showDialog = function(e) {
                n.style.display = "block", r.innerText = e, c.setQrCode(e)
            }, this.closeDialog = function() {
                n.style.display = "none", r.innerText = ""
            }, i.addEventListener("click", function() {
                this.closeDialog()
            }.bind(this)), o.addEventListener("click", function() {
                navigator.share && navigator.share({
                    title: this.currentUrl,
                    text: this.currentUrl,
                    url: this.currentUrl
                }).then(function() {
                    l.closeDialog()
                }).catch(function() {
                    l.closeDialog()
                })
            }.bind(this)), a.addEventListener("click", function() {
                "javascript:" !== this.currentUrl.protocol ? (window.location = this.currentUrl, this.closeDialog()) : console.log("XSS prevented!")
            }.bind(this))
        };
    let n = function(e) {
        let t = document.getElementById(e),
            n = t.querySelector(".QRCodeAboutDialog-close");
        this.showDialog = function() {
            t.style.display = "block"
        }, this.closeDialog = function() {
            t.style.display = "none"
        }, n.addEventListener("click", function() {
            this.closeDialog()
        }.bind(this))
    };
    var r = function(e) {
            var t, n, r = e.querySelector(".Camera-toggle-input"),
                a = e.querySelector(".Camera-toggle"),
                o = e.querySelector(".Camera-video");
            this.resize = function(e, r) {
                e && r && (n = r, t = e);
                var a = this.getDimensions();
                o.style.transform = "translate(-50%, -50%) scale(" + a.scaleFactor + ")"
            }.bind(this);
            var s = new i(o);
            this.getDimensions = function() {
                var e = s.getDimensions(),
                    r = e.height / n,
                    a = e.width / t,
                    i = 1 / Math.min(r, a);
                return e.scaleFactor = Number.isFinite(i) ? i : 1, e
            }, this.onDimensionsChanged = function() {}, s.onDimensionsChanged = function() {
                this.onDimensionsChanged(), this.resize()
            }.bind(this), s.getCameras(function(e) {
                e.length <= 1 && (a.style.display = "none"), s.setCamera(0)
            }), s.onframeready = function(e) {
                this.onframeready(e)
            }.bind(this), r.addEventListener("change", function(e) {
                var t = 0;
                !0 === e.target.checked && (t = 1), s.stop(), s.setCamera(t)
            }), this.stop = function() {
                s.stop()
            }, this.start = function() {
                var e = 0;
                !0 === r.checked && (e = 1), s.setCamera(e)
            }, document.addEventListener("visibilitychange", function() {
                "hidden" === document.visibilityState ? this.stop() : this.start()
            }.bind(this))
        },
        a = function(e) {
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
        },
        i = function(e) {
            var t, n, r = null,
                a = this,
                i = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || null,
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
                }).catch(e => {
                    console.error("Enumeration Error", e)
                }) : "getSources" in MediaStreamTrack ? MediaStreamTrack.getSources(function(t) {
                    r = [];
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        "video" === a.kind && ("environment" === a.facing ? r.unshift(a) : r.push(a))
                    }
                    e(r)
                }) : e(r = [])
            }, this.setCamera = function(s) {
                if (o !== s && null !== r) {
                    var c;
                    o = s;
                    var l = r[s];
                    cancelAnimationFrame(n), c = void 0 === l && 0 == r.length ? {
                        video: !0,
                        audio: !1
                    } : {
                        video: {
                            deviceId: {
                                exact: l.deviceId || l.id
                            }
                        },
                        audio: !1
                    }, i.call(navigator, c, function(r) {
                        t = r, e.addEventListener("loadeddata", function(t) {
                            var r = function() {
                                e.videoWidth > 0 && a.onframeready(e), -1 !== o && (n = requestAnimationFrame(r))
                            };
                            a.onDimensionsChanged(), n = requestAnimationFrame(r)
                        }), e.srcObject = t, e.load(), e.play().catch(e => {
                            console.error("Auto Play Error", e)
                        })
                    }, console.error)
                }
            }
        },
        o = function(e) {
            var t = this,
                n = !1,
                i = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || null;
            "#nogum" == location.hash && (i = null), "#canvasdebug" == location.hash && (n = !0);
            var o, s, c = document.getElementById(e);
            null === i ? (o = c.querySelector(".CameraFallback"), s = new a(o)) : (o = c.querySelector(".CameraRealtime"), s = new r(o)), n && c.classList.add("debug"), o.classList.remove("hidden");
            var l, d, u, h, f = c.querySelector(".Camera-display"),
                p = c.querySelector(".Camera-overlay"),
                g = f.getContext("2d"),
                v = 0,
                m = 0;
            s.onframeready = function(e) {
                g.drawImage(e, v, m, h, u, 0, 0, l, d), t.onframe && t.onframe(g)
            };
            this.resize = function(e, t) {
                e && t || (e = c.parentNode.offsetWidth, t = c.parentNode.offsetHeight), s.resize(e, t);
                var n, r, a, i, o, g, y = s.getDimensions(),
                    w = y.height,
                    b = y.width,
                    E = (n = e, r = t, {
                        minLength: a = Math.min(n, r),
                        width: a - 64,
                        height: a - 64,
                        paddingHeight: (r + 64 - a) / 2,
                        paddingWidth: (n + 64 - a) / 2
                    });
                d = l = E.width / y.scaleFactor, f.width = l, f.height = l, v = b / 2 - l / 2, m = w / 2 - d / 2, h = l, u = d, o = (i = E).paddingHeight, g = i.paddingWidth, p.style.borderTopWidth = o + "px", p.style.borderLeftWidth = g + "px", p.style.borderRightWidth = g + "px", p.style.borderBottomWidth = o + "px"
            }, window.addEventListener("resize", this.resize), s.onDimensionsChanged = this.resize, this.resize()
        };
    new function(e) {
        var r = new o("camera"),
            a = new t("qrcode"),
            i = new n("about");
        document.querySelector(".about").onclick = function() {
            i.showDialog()
        };
        var s = !1;
        r.onframe = async function(e) {
            if (0 == s) {
                s = !0;
                let t = await a.detectQRCode(e);
                void 0 !== t && (ga && ga("send", "event", "urlfound"), a.showDialog(t)), s = !1
            }
        }
    }
}(), window.addEventListener("unhandledrejection", function(e) {
    console.error("Unhandled rejection (promise: ", e.promise, ", reason: ", e.reason, ").")
});