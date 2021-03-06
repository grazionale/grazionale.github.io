! function() {
    "use strict";
    self.addEventListener("fetch", function(t) {
        t.request;
        const s = new URL(t.request.url),
            r = t.request.method,
            n = e.findRoute(s, r);
        n && n.callback(t, {
            params: n.params
        })
    });
    const e = new function() {
            const e = {
                get: [],
                post: []
            };
            this.parseRoute = function(e) {
                return this.parseGroups = function(e) {
                    for (var t = new RegExp(":([^/.\\\\]+)", "g"), s = "" + e, r = {}, n = null, i = 0; n = t.exec(e);) r[n[1]] = i++, s = s.replace(n[0], "([^/.\\\\]+)");
                    return s += "$", {
                        groups: r,
                        regexp: new RegExp(s)
                    }
                }, this.parseGroups(e)
            };
            this.registerRoute = function(t, s, r, n) {
                let i;
                s instanceof RegExp ? i = {
                    regexp: s
                } : "string" == typeof s && (i = this.parseRoute(s)), e[t].push({
                    regex: i,
                    callback: r,
                    options: n || {}
                })
            }, this.get = function(e, t, s) {
                this.registerRoute("get", e, t, s)
            }, this.post = function(e, t, s) {
                this.registerRoute("get", e, t, s)
            }, this.findRoute = function(t, s) {
                return function(t, s) {
                    var r = null;
                    const n = s.toLowerCase();
                    if (n in e != 0)
                        for (let s = 0; r = e[n][s]; s++) {
                            const e = r.options.urlMatchProperty,
                                s = e in t ? t[e] : t.toString(),
                                n = r.regex.regexp.exec(s);
                            if (0 != !!n) {
                                var i = {};
                                for (var o in r.regex.groups) {
                                    var c = r.regex.groups[o];
                                    i[o] = n[c + 1]
                                }
                                return r.params = i, r
                            }
                        }
                }(t, s)
            }
        },
        t = ["/", "/images/ic_camera_front_24px.svg", "/images/ic_camera_rear_24px.svg", "/images/ic_file_upload_24px.svg", "/images/help_outline-24px.svg", "/images/touch/ms-touch-icon-144x144-precomposed.png", "/images/touch/chrome-touch-icon-192x192.png", "/images/touch/apple-touch-icon.png", "/images/touch/icon-128x128.png", "/styles/app.css", "/scripts/main.js", "/scripts/main.mjs", "/scripts/qrworker.js"];
    e.get(/\?kill-sw=true/, function() {
        self.registration.unregister(), caches.keys().then(e => Promise.all(e.map(e => caches.delete(e))))
    }, {
        urlMatchProperty: "search"
    }), e.get(`${self.location.origin}`, e => {
        e.respondWith(caches.match(e.request, {
            ignoreSearch: !0,
            cacheName: "0.2.2"
        }).then(t => t || fetch(e.request)))
    }, {
        urlMatchProperty: "origin"
    }), self.addEventListener("activate", function(e) {
        e.waitUntil(self.clients.claim())
    }), self.addEventListener("install", function(e) {
        self.skipWaiting(), e.waitUntil(caches.open("0.2.2").then(function(e) {
            return e.addAll(t)
        }))
    })
}();