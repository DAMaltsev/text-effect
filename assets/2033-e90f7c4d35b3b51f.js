(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2033],
  {
    27980: function (e, t) {
      "use strict";
      t.Z = (e, t) => {
        const r = t || n;
        let o, i;
        return function () {
          return o && r(arguments, o)
            ? i
            : (i = e.apply(null, (o = arguments)));
        };
      };
      const n = (e, t) =>
        e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
    },
    4586: function (e, t) {
      "use strict";
      t.Z = class {
        constructor() {
          let e, t;
          (this.set = void 0),
            (this.get = void 0),
            (this.get = (n) => (n === e ? t : void 0)),
            (this.set = (n, r) => {
              (e = n), (t = r);
            });
        }
      };
    },
    64125: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z6: function () {
          return d;
        },
        aM: function () {
          return h;
        },
      });
      let r = "undefined",
        o = typeof window !== r ? window : {},
        i = typeof performance !== r ? performance : Date,
        a = () => i.now(),
        s = "AnimationFrame",
        c = "cancel" + s,
        u = "request" + s,
        l = o[u] && o[u].bind(o),
        f = o[c] && o[c].bind(o);
      if (!l || !f) {
        let e = 0;
        (l = (t) => {
          let n = a(),
            r = Math.max(e + 1e3 / 60, n);
          return setTimeout(() => {
            t((e = r));
          }, r - n);
        }),
          (f = function (e) {
            return clearTimeout(e);
          });
      }
      const d = (e) => {
          f(e.v || -1);
        },
        h = (e, t) => {
          const n = a(),
            r = {},
            o = () => {
              a() - n >= t ? e.call(null) : (r.v = l(o));
            };
          return (r.v = l(o)), r;
        };
    },
    25312: function (e, t, n) {
      "use strict";
      var r = n(67294);
      t.Z = function (e, t, n, o) {
        const i = r.useRef(n),
          a = r.useRef(o);
        r.useEffect(() => {
          (i.current = n), (a.current = o);
        }),
          r.useEffect(() => {
            const n = e && "current" in e ? e.current : e;
            if (!n) return;
            let r = 0;
            function o(...e) {
              r || i.current.apply(this, e);
            }
            n.addEventListener(t, o);
            const s = a.current;
            return () => {
              (r = 1), n.removeEventListener(t, o), s && s();
            };
          }, [e, t]);
      };
    },
    65355: function (e, t, n) {
      "use strict";
      var r = n(67294);
      t.Z = (e) => {
        const t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          t
        );
      };
    },
    50394: function (e, t, n) {
      "use strict";
      const r =
        n(67294)[
          "undefined" !== typeof document && void 0 !== document.createElement
            ? "useLayoutEffect"
            : "useEffect"
        ];
      t.Z = r;
    },
    42820: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = n(67294),
        o = n(65355);
      const i = "undefined" !== typeof performance ? performance : Date,
        a = () => i.now();
      function s(e, t = 30, n = !1) {
        const i = (0, o.Z)(e),
          s = 1e3 / t,
          c = r.useRef(0),
          u = r.useRef(),
          l = () => u.current && clearTimeout(u.current),
          f = [t, n, i];
        function d() {
          (c.current = 0), l();
        }
        return (
          r.useEffect(() => d, f),
          r.useCallback(function () {
            const e = arguments,
              t = a(),
              r = () => {
                (c.current = t), l(), i.current.apply(null, e);
              },
              o = c.current;
            if (n && 0 === o) return r();
            if (t - o > s) {
              if (o > 0) return r();
              c.current = t;
            }
            l(),
              (u.current = setTimeout(() => {
                r(), (c.current = 0);
              }, s));
          }, f)
        );
      }
      var c = n(25312);
      const u = "undefined" === typeof window ? null : window,
        l = () =>
          void 0 !== u.scrollY
            ? u.scrollY
            : void 0 === u.pageYOffset
            ? 0
            : u.pageYOffset;
      var f = (e = 30) => {
        const t = (function (e, t, n) {
          const o = r.useState(e);
          return [o[0], s(o[1], t, n)];
        })("undefined" === typeof window ? 0 : l, e, !0);
        return (0, c.Z)(u, "scroll", () => t[1](l())), t[0];
      };
    },
    65440: function (e, t, n) {
      "use strict";
      n.d(t, {
        iP: function () {
          return l;
        },
      });
      var r = n(67294),
        o = n(65355);
      const i = (e, t = 100, n = !1) => {
        const i = (0, o.Z)(e),
          a = r.useRef(),
          s = [t, n, i];
        function c() {
          a.current && clearTimeout(a.current), (a.current = void 0);
        }
        function u() {
          a.current = void 0;
        }
        return (
          r.useEffect(() => c, s),
          r.useCallback(function () {
            const e = arguments,
              { current: r } = a;
            if (void 0 === r && n)
              return (a.current = setTimeout(u, t)), i.current.apply(null, e);
            r && clearTimeout(r),
              (a.current = setTimeout(() => {
                (a.current = void 0), i.current.apply(null, e);
              }, t));
          }, s)
        );
      };
      var a = n(25312);
      const s = {},
        c = "undefined" === typeof window ? null : window,
        u = () => [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight,
        ],
        l = (e = s) => {
          const {
              wait: t,
              leading: n,
              initialWidth: o = 0,
              initialHeight: l = 0,
            } = e,
            [f, d] = ((e, t, n) => {
              const o = r.useState(e);
              return [o[0], i(o[1], t, n)];
            })("undefined" === typeof document ? [o, l] : u, t, n),
            h = () => d(u);
          return (
            (0, a.Z)(c, "resize", h), (0, a.Z)(c, "orientationchange", h), f
          );
        };
    },
    66698: function (e) {
      !(function (t, n) {
        var r = r || {};
        "function" == typeof r && r.amd ? r([], n) : (e.exports = n());
      })(0, function () {
        const e = {
            year: 31536e6,
            month: 2628e6,
            day: 864e5,
            hour: 36e5,
            minute: 6e4,
            second: 1e3,
          },
          t = { numeric: "auto" };
        function n(e) {
          (e = {
            locale: (e = e || {}).locale || "en",
            options: { ...t, ...e.options },
          }),
            (this.rtf = new Intl.RelativeTimeFormat(e.locale, e.options));
        }
        return (
          (n.prototype = {
            from(t, n) {
              const r = t - (n || new Date());
              for (let o in e)
                if (Math.abs(r) > e[o] || "second" == o)
                  return this.rtf.format(Math.round(r / e[o]), o);
            },
          }),
          n
        );
      });
    },
    20640: function (e, t, n) {
      "use strict";
      var r = n(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          i,
          a,
          s,
          c,
          u,
          l = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((a = r()),
            (s = document.createRange()),
            (c = document.getSelection()),
            ((u = document.createElement("span")).textContent = e),
            (u.style.all = "unset"),
            (u.style.position = "fixed"),
            (u.style.top = 0),
            (u.style.clip = "rect(0, 0, 0, 0)"),
            (u.style.whiteSpace = "pre"),
            (u.style.webkitUserSelect = "text"),
            (u.style.MozUserSelect = "text"),
            (u.style.msUserSelect = "text"),
            (u.style.userSelect = "text"),
            u.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), t.format))
                if (
                  (r.preventDefault(), "undefined" === typeof r.clipboardData)
                ) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var i = o[t.format] || o.default;
                  window.clipboardData.setData(i, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(t.format, e);
              t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
            }),
            document.body.appendChild(u),
            s.selectNodeContents(u),
            c.addRange(s),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          l = !0;
        } catch (f) {
          n && console.error("unable to copy using execCommand: ", f),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (l = !0);
          } catch (f) {
            n && console.error("unable to copy using clipboardData: ", f),
              n && console.error("falling back to prompt"),
              (i = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(i, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(s)
              : c.removeAllRanges()),
            u && document.body.removeChild(u),
            a();
        }
        return l;
      };
    },
    36860: function () {},
    5729: function (e, t) {
      "use strict";
      t.Z = function (e) {
        var t = [],
          n = null,
          r = function () {
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            (t = o),
              n ||
                (n = requestAnimationFrame(function () {
                  (n = null), e.apply(void 0, t);
                }));
          };
        return (
          (r.cancel = function () {
            n && (cancelAnimationFrame(n), (n = null));
          }),
          r
        );
      };
    },
    82023: function (e, t, n) {
      (e = n.nmd(e)),
        (function (n, r) {
          var o = (function () {
            var e = null,
              t = {};
            p();
            var n = [],
              r = function (t) {
                if (
                  void 0 !== (t = t || {}).seed &&
                  null !== t.seed &&
                  t.seed === parseInt(t.seed, 10)
                )
                  e = t.seed;
                else if ("string" === typeof t.seed) e = b(t.seed);
                else {
                  if (void 0 !== t.seed && null !== t.seed)
                    throw new TypeError(
                      "The seed value must be an integer or string"
                    );
                  e = null;
                }
                var c, u;
                if (null !== t.count && void 0 !== t.count) {
                  for (var l = t.count, f = [], d = 0; d < t.count; d++)
                    n.push(!1);
                  for (t.count = null; l > f.length; ) {
                    var h = r(t);
                    null !== e && (t.seed = e), f.push(h);
                  }
                  return (t.count = l), f;
                }
                return s([(c = o(t)), (u = i(c, t)), a(c, u, t)], t);
              };
            function o(e) {
              if (n.length > 0) {
                var t = d((i = y(e.hue))),
                  r = (i[1] - i[0]) / n.length,
                  o = parseInt((t - i[0]) / r);
                return (
                  !0 === n[o] ? (o = (o + 2) % n.length) : (n[o] = !0),
                  (t = d(
                    (i = [(i[0] + o * r) % 359, (i[0] + (o + 1) * r) % 359])
                  )) < 0 && (t = 360 + t),
                  t
                );
              }
              var i;
              return (t = d((i = u(e.hue)))) < 0 && (t = 360 + t), t;
            }
            function i(e, t) {
              if ("monochrome" === t.hue) return 0;
              if ("random" === t.luminosity) return d([0, 100]);
              var n = l(e),
                r = n[0],
                o = n[1];
              switch (t.luminosity) {
                case "bright":
                  r = 55;
                  break;
                case "dark":
                  r = o - 10;
                  break;
                case "light":
                  o = 55;
              }
              return d([r, o]);
            }
            function a(e, t, n) {
              var r = c(e, t),
                o = 100;
              switch (n.luminosity) {
                case "dark":
                  o = r + 20;
                  break;
                case "light":
                  r = (o + r) / 2;
                  break;
                case "random":
                  (r = 0), (o = 100);
              }
              return d([r, o]);
            }
            function s(e, t) {
              switch (t.format) {
                case "hsvArray":
                  return e;
                case "hslArray":
                  return g(e);
                case "hsl":
                  var n = g(e);
                  return "hsl(" + n[0] + ", " + n[1] + "%, " + n[2] + "%)";
                case "hsla":
                  var r = g(e),
                    o = t.alpha || Math.random();
                  return (
                    "hsla(" +
                    r[0] +
                    ", " +
                    r[1] +
                    "%, " +
                    r[2] +
                    "%, " +
                    o +
                    ")"
                  );
                case "rgbArray":
                  return m(e);
                case "rgb":
                  return "rgb(" + m(e).join(", ") + ")";
                case "rgba":
                  var i = m(e);
                  o = t.alpha || Math.random();
                  return "rgba(" + i.join(", ") + ", " + o + ")";
                default:
                  return h(e);
              }
            }
            function c(e, t) {
              for (var n = f(e).lowerBounds, r = 0; r < n.length - 1; r++) {
                var o = n[r][0],
                  i = n[r][1],
                  a = n[r + 1][0],
                  s = n[r + 1][1];
                if (t >= o && t <= a) {
                  var c = (s - i) / (a - o);
                  return c * t + (i - c * o);
                }
              }
              return 0;
            }
            function u(e) {
              if ("number" === typeof parseInt(e)) {
                var n = parseInt(e);
                if (n < 360 && n > 0) return [n, n];
              }
              if ("string" === typeof e)
                if (t[e]) {
                  var r = t[e];
                  if (r.hueRange) return r.hueRange;
                } else if (e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
                  var o = w(e)[0];
                  return [o, o];
                }
              return [0, 360];
            }
            function l(e) {
              return f(e).saturationRange;
            }
            function f(e) {
              for (var n in (e >= 334 && e <= 360 && (e -= 360), t)) {
                var r = t[n];
                if (r.hueRange && e >= r.hueRange[0] && e <= r.hueRange[1])
                  return t[n];
              }
              return "Color not found";
            }
            function d(t) {
              if (null === e) {
                var n = 0.618033988749895,
                  r = Math.random();
                return (
                  (r += n), (r %= 1), Math.floor(t[0] + r * (t[1] + 1 - t[0]))
                );
              }
              var o = t[1] || 1,
                i = t[0] || 0,
                a = (e = (9301 * e + 49297) % 233280) / 233280;
              return Math.floor(i + a * (o - i));
            }
            function h(e) {
              var t = m(e);
              function n(e) {
                var t = e.toString(16);
                return 1 == t.length ? "0" + t : t;
              }
              return "#" + n(t[0]) + n(t[1]) + n(t[2]);
            }
            function v(e, n, r) {
              var o = r[0][0],
                i = r[r.length - 1][0],
                a = r[r.length - 1][1],
                s = r[0][1];
              t[e] = {
                hueRange: n,
                lowerBounds: r,
                saturationRange: [o, i],
                brightnessRange: [a, s],
              };
            }
            function p() {
              v("monochrome", null, [
                [0, 0],
                [100, 0],
              ]),
                v(
                  "red",
                  [-26, 18],
                  [
                    [20, 100],
                    [30, 92],
                    [40, 89],
                    [50, 85],
                    [60, 78],
                    [70, 70],
                    [80, 60],
                    [90, 55],
                    [100, 50],
                  ]
                ),
                v(
                  "orange",
                  [18, 46],
                  [
                    [20, 100],
                    [30, 93],
                    [40, 88],
                    [50, 86],
                    [60, 85],
                    [70, 70],
                    [100, 70],
                  ]
                ),
                v(
                  "yellow",
                  [46, 62],
                  [
                    [25, 100],
                    [40, 94],
                    [50, 89],
                    [60, 86],
                    [70, 84],
                    [80, 82],
                    [90, 80],
                    [100, 75],
                  ]
                ),
                v(
                  "green",
                  [62, 178],
                  [
                    [30, 100],
                    [40, 90],
                    [50, 85],
                    [60, 81],
                    [70, 74],
                    [80, 64],
                    [90, 50],
                    [100, 40],
                  ]
                ),
                v(
                  "blue",
                  [178, 257],
                  [
                    [20, 100],
                    [30, 86],
                    [40, 80],
                    [50, 74],
                    [60, 60],
                    [70, 52],
                    [80, 44],
                    [90, 39],
                    [100, 35],
                  ]
                ),
                v(
                  "purple",
                  [257, 282],
                  [
                    [20, 100],
                    [30, 87],
                    [40, 79],
                    [50, 70],
                    [60, 65],
                    [70, 59],
                    [80, 52],
                    [90, 45],
                    [100, 42],
                  ]
                ),
                v(
                  "pink",
                  [282, 334],
                  [
                    [20, 100],
                    [30, 90],
                    [40, 86],
                    [60, 84],
                    [80, 80],
                    [90, 75],
                    [100, 73],
                  ]
                );
            }
            function m(e) {
              var t = e[0];
              0 === t && (t = 1), 360 === t && (t = 359), (t /= 360);
              var n = e[1] / 100,
                r = e[2] / 100,
                o = Math.floor(6 * t),
                i = 6 * t - o,
                a = r * (1 - n),
                s = r * (1 - i * n),
                c = r * (1 - (1 - i) * n),
                u = 256,
                l = 256,
                f = 256;
              switch (o) {
                case 0:
                  (u = r), (l = c), (f = a);
                  break;
                case 1:
                  (u = s), (l = r), (f = a);
                  break;
                case 2:
                  (u = a), (l = r), (f = c);
                  break;
                case 3:
                  (u = a), (l = s), (f = r);
                  break;
                case 4:
                  (u = c), (l = a), (f = r);
                  break;
                case 5:
                  (u = r), (l = a), (f = s);
              }
              return [
                Math.floor(255 * u),
                Math.floor(255 * l),
                Math.floor(255 * f),
              ];
            }
            function w(e) {
              e =
                3 === (e = e.replace(/^#/, "")).length
                  ? e.replace(/(.)/g, "$1$1")
                  : e;
              var t = parseInt(e.substr(0, 2), 16) / 255,
                n = parseInt(e.substr(2, 2), 16) / 255,
                r = parseInt(e.substr(4, 2), 16) / 255,
                o = Math.max(t, n, r),
                i = o - Math.min(t, n, r),
                a = o ? i / o : 0;
              switch (o) {
                case t:
                  return [(((n - r) / i) % 6) * 60 || 0, a, o];
                case n:
                  return [60 * ((r - t) / i + 2) || 0, a, o];
                case r:
                  return [60 * ((t - n) / i + 4) || 0, a, o];
              }
            }
            function g(e) {
              var t = e[0],
                n = e[1] / 100,
                r = e[2] / 100,
                o = (2 - n) * r;
              return [
                t,
                Math.round(((n * r) / (o < 1 ? o : 2 - o)) * 1e4) / 100,
                (o / 2) * 100,
              ];
            }
            function b(e) {
              for (
                var t = 0, n = 0;
                n !== e.length && !(t >= Number.MAX_SAFE_INTEGER);
                n++
              )
                t += e.charCodeAt(n);
              return t;
            }
            function y(e) {
              if (isNaN(e)) {
                if ("string" === typeof e)
                  if (t[e]) {
                    var n = t[e];
                    if (n.hueRange) return n.hueRange;
                  } else if (e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
                    return f(w(e)[0]).hueRange;
                  }
              } else {
                var r = parseInt(e);
                if (r < 360 && r > 0) return f(e).hueRange;
              }
              return [0, 360];
            }
            return r;
          })();
          e && e.exports && (t = e.exports = o), (t.randomColor = o);
        })();
    },
    91033: function (e, t, n) {
      "use strict";
      var r = (function () {
          if ("undefined" !== typeof Map) return Map;
          function e(e, t) {
            var n = -1;
            return (
              e.some(function (e, r) {
                return e[0] === t && ((n = r), !0);
              }),
              n
            );
          }
          return (function () {
            function t() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(t.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.get = function (t) {
                var n = e(this.__entries__, t),
                  r = this.__entries__[n];
                return r && r[1];
              }),
              (t.prototype.set = function (t, n) {
                var r = e(this.__entries__, t);
                ~r
                  ? (this.__entries__[r][1] = n)
                  : this.__entries__.push([t, n]);
              }),
              (t.prototype.delete = function (t) {
                var n = this.__entries__,
                  r = e(n, t);
                ~r && n.splice(r, 1);
              }),
              (t.prototype.has = function (t) {
                return !!~e(this.__entries__, t);
              }),
              (t.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (t.prototype.forEach = function (e, t) {
                void 0 === t && (t = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                  var o = r[n];
                  e.call(t, o[1], o[0]);
                }
              }),
              t
            );
          })();
        })(),
        o =
          "undefined" !== typeof window &&
          "undefined" !== typeof document &&
          window.document === document,
        i =
          "undefined" !== typeof n.g && n.g.Math === Math
            ? n.g
            : "undefined" !== typeof self && self.Math === Math
            ? self
            : "undefined" !== typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        a =
          "function" === typeof requestAnimationFrame
            ? requestAnimationFrame.bind(i)
            : function (e) {
                return setTimeout(function () {
                  return e(Date.now());
                }, 1e3 / 60);
              };
      var s = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        c = "undefined" !== typeof MutationObserver,
        u = (function () {
          function e() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (e, t) {
                var n = !1,
                  r = !1,
                  o = 0;
                function i() {
                  n && ((n = !1), e()), r && c();
                }
                function s() {
                  a(i);
                }
                function c() {
                  var e = Date.now();
                  if (n) {
                    if (e - o < 2) return;
                    r = !0;
                  } else (n = !0), (r = !1), setTimeout(s, t);
                  o = e;
                }
                return c;
              })(this.refresh.bind(this), 20));
          }
          return (
            (e.prototype.addObserver = function (e) {
              ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_();
            }),
            (e.prototype.removeObserver = function (e) {
              var t = this.observers_,
                n = t.indexOf(e);
              ~n && t.splice(n, 1),
                !t.length && this.connected_ && this.disconnect_();
            }),
            (e.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (e.prototype.updateObservers_ = function () {
              var e = this.observers_.filter(function (e) {
                return e.gatherActive(), e.hasActive();
              });
              return (
                e.forEach(function (e) {
                  return e.broadcastActive();
                }),
                e.length > 0
              );
            }),
            (e.prototype.connect_ = function () {
              o &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.addEventListener("resize", this.refresh),
                c
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (e.prototype.disconnect_ = function () {
              o &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (e.prototype.onTransitionEnd_ = function (e) {
              var t = e.propertyName,
                n = void 0 === t ? "" : t;
              s.some(function (e) {
                return !!~n.indexOf(e);
              }) && this.refresh();
            }),
            (e.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new e()), this.instance_
              );
            }),
            (e.instance_ = null),
            e
          );
        })(),
        l = function (e, t) {
          for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var o = r[n];
            Object.defineProperty(e, o, {
              value: t[o],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return e;
        },
        f = function (e) {
          return (e && e.ownerDocument && e.ownerDocument.defaultView) || i;
        },
        d = g(0, 0, 0, 0);
      function h(e) {
        return parseFloat(e) || 0;
      }
      function v(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return t.reduce(function (t, n) {
          return t + h(e["border-" + n + "-width"]);
        }, 0);
      }
      function p(e) {
        var t = e.clientWidth,
          n = e.clientHeight;
        if (!t && !n) return d;
        var r = f(e).getComputedStyle(e),
          o = (function (e) {
            for (
              var t = {}, n = 0, r = ["top", "right", "bottom", "left"];
              n < r.length;
              n++
            ) {
              var o = r[n],
                i = e["padding-" + o];
              t[o] = h(i);
            }
            return t;
          })(r),
          i = o.left + o.right,
          a = o.top + o.bottom,
          s = h(r.width),
          c = h(r.height);
        if (
          ("border-box" === r.boxSizing &&
            (Math.round(s + i) !== t && (s -= v(r, "left", "right") + i),
            Math.round(c + a) !== n && (c -= v(r, "top", "bottom") + a)),
          !(function (e) {
            return e === f(e).document.documentElement;
          })(e))
        ) {
          var u = Math.round(s + i) - t,
            l = Math.round(c + a) - n;
          1 !== Math.abs(u) && (s -= u), 1 !== Math.abs(l) && (c -= l);
        }
        return g(o.left, o.top, s, c);
      }
      var m =
        "undefined" !== typeof SVGGraphicsElement
          ? function (e) {
              return e instanceof f(e).SVGGraphicsElement;
            }
          : function (e) {
              return (
                e instanceof f(e).SVGElement && "function" === typeof e.getBBox
              );
            };
      function w(e) {
        return o
          ? m(e)
            ? (function (e) {
                var t = e.getBBox();
                return g(0, 0, t.width, t.height);
              })(e)
            : p(e)
          : d;
      }
      function g(e, t, n, r) {
        return { x: e, y: t, width: n, height: r };
      }
      var b = (function () {
          function e(e) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = g(0, 0, 0, 0)),
              (this.target = e);
          }
          return (
            (e.prototype.isActive = function () {
              var e = w(this.target);
              return (
                (this.contentRect_ = e),
                e.width !== this.broadcastWidth ||
                  e.height !== this.broadcastHeight
              );
            }),
            (e.prototype.broadcastRect = function () {
              var e = this.contentRect_;
              return (
                (this.broadcastWidth = e.width),
                (this.broadcastHeight = e.height),
                e
              );
            }),
            e
          );
        })(),
        y = function (e, t) {
          var n = (function (e) {
            var t = e.x,
              n = e.y,
              r = e.width,
              o = e.height,
              i =
                "undefined" !== typeof DOMRectReadOnly
                  ? DOMRectReadOnly
                  : Object,
              a = Object.create(i.prototype);
            return (
              l(a, {
                x: t,
                y: n,
                width: r,
                height: o,
                top: n,
                right: t + r,
                bottom: o + n,
                left: t,
              }),
              a
            );
          })(t);
          l(this, { target: e, contentRect: n });
        },
        k = (function () {
          function e(e, t, n) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new r()),
              "function" !== typeof e)
            )
              throw new TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.callback_ = e),
              (this.controller_ = t),
              (this.callbackCtx_ = n);
          }
          return (
            (e.prototype.observe = function (e) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" !== typeof Element && Element instanceof Object) {
                if (!(e instanceof f(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) ||
                  (t.set(e, new b(e)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (e.prototype.unobserve = function (e) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" !== typeof Element && Element instanceof Object) {
                if (!(e instanceof f(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) &&
                  (t.delete(e),
                  t.size || this.controller_.removeObserver(this));
              }
            }),
            (e.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (e.prototype.gatherActive = function () {
              var e = this;
              this.clearActive(),
                this.observations_.forEach(function (t) {
                  t.isActive() && e.activeObservations_.push(t);
                });
            }),
            (e.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var e = this.callbackCtx_,
                  t = this.activeObservations_.map(function (e) {
                    return new y(e.target, e.broadcastRect());
                  });
                this.callback_.call(e, t, e), this.clearActive();
              }
            }),
            (e.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (e.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            e
          );
        })(),
        E = "undefined" !== typeof WeakMap ? new WeakMap() : new r(),
        x = function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          var n = u.getInstance(),
            r = new k(t, n, this);
          E.set(this, r);
        };
      ["observe", "unobserve", "disconnect"].forEach(function (e) {
        x.prototype[e] = function () {
          var t;
          return (t = E.get(this))[e].apply(t, arguments);
        };
      });
      var _ = "undefined" !== typeof i.ResizeObserver ? i.ResizeObserver : x;
      t.Z = _;
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], r = 0;
          r < e.rangeCount;
          r++
        )
          n.push(e.getRangeAt(r));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    50579: function (e, t) {
      "use strict";
      const n = (e) => {
        try {
          return new e();
        } catch (t) {
          const e = {};
          return {
            set(t, n) {
              e[t] = n;
            },
            get: (t) => e[t],
          };
        }
      };
      t.Z = (e, t) => {
        let r;
        const { g: o, s: i } = ((e) => {
          const t = e.length,
            r = n(e[0]);
          let o, i, a, s;
          const c = 1 === t;
          return t < 3
            ? {
                g: (e) => (void 0 === (o = r.get(e[0])) || c ? o : o.get(e[1])),
                s: (t, a) => (
                  c
                    ? r.set(t[0], a)
                    : void 0 === (o = r.get(t[0]))
                    ? ((i = n(e[1])), i.set(t[1], a), r.set(t[0], i))
                    : o.set(t[1], a),
                  a
                ),
              }
            : {
                g: (e) => {
                  for (s = r, a = 0; a < t; a++)
                    if (void 0 === (s = s.get(e[a]))) return;
                  return s;
                },
                s: (o, c) => {
                  for (s = r, a = 0; a < t - 1; a++)
                    void 0 === (i = s.get(o[a]))
                      ? ((i = n(e[a + 1])), s.set(o[a], i), (s = i))
                      : (s = i);
                  return s.set(o[t - 1], c), c;
                },
              };
        })(e);
        return function () {
          return void 0 === (r = o(arguments))
            ? i(arguments, t.apply(null, arguments))
            : r;
        };
      };
    },
    95825: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__assign) ||
        function () {
          return (
            (r =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            r.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useTextSelection = void 0);
      var o = n(67294);
      function i(e) {
        for (var t = r({}, e), n = 0, o = Object.keys(t); n < o.length; n++) {
          var i = o[n];
          t[i] = Math.round(t[i]);
        }
        return t;
      }
      var a = {};
      t.useTextSelection = function (e) {
        var t = o.useState(a),
          n = t[0],
          r = n.clientRect,
          s = n.isCollapsed,
          c = n.textContent,
          u = t[1],
          l =
            (o.useCallback(function () {
              u(a);
            }, []),
            o.useCallback(
              function () {
                var t,
                  n = window.getSelection(),
                  o = {};
                if (null != n && n.rangeCount) {
                  var a = n.getRangeAt(0);
                  if (null == e || e.contains(a.commonAncestorContainer))
                    if (null != a) {
                      var s = a.cloneContents();
                      null != s.textContent && (o.textContent = s.textContent);
                      var c = a.getClientRects();
                      if (0 === c.length && null != a.commonAncestorContainer) {
                        t = i(
                          a.commonAncestorContainer
                            .getBoundingClientRect()
                            .toJSON()
                        );
                      } else {
                        if (c.length < 1) return;
                        t = i(c[0].toJSON());
                      }
                      (function (e, t) {
                        if (null != e && null != t)
                          for (
                            var n = 0, r = Object.keys(t);
                            n < r.length;
                            n++
                          ) {
                            var o = r[n];
                            if (e[o] != t[o]) return !0;
                          }
                        else if (e != t) return !0;
                        return !1;
                      })(r, t) && (o.clientRect = t),
                        (o.isCollapsed = a.collapsed),
                        u(o);
                    } else u(o);
                  else u(o);
                } else u(o);
              },
              [e]
            ));
        return (
          o.useLayoutEffect(
            function () {
              return (
                document.addEventListener("selectionchange", l),
                document.addEventListener("keydown", l),
                document.addEventListener("keyup", l),
                window.addEventListener("resize", l),
                function () {
                  document.removeEventListener("selectionchange", l),
                    document.removeEventListener("keydown", l),
                    document.removeEventListener("keyup", l),
                    window.removeEventListener("resize", l);
                }
              );
            },
            [e]
          ),
          { clientRect: r, isCollapsed: s, textContent: c }
        );
      };
    },
    67719: function (e, t, n) {
      "use strict";
      var r = n(68697);
      t.Z = function (e) {
        if (!(0, r.Z)(e)) throw TypeError("Invalid UUID");
        var t,
          n = new Uint8Array(16);
        return (
          (n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
          (n[1] = (t >>> 16) & 255),
          (n[2] = (t >>> 8) & 255),
          (n[3] = 255 & t),
          (n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
          (n[5] = 255 & t),
          (n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
          (n[7] = 255 & t),
          (n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
          (n[9] = 255 & t),
          (n[10] = ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
          (n[11] = (t / 4294967296) & 255),
          (n[12] = (t >>> 24) & 255),
          (n[13] = (t >>> 16) & 255),
          (n[14] = (t >>> 8) & 255),
          (n[15] = 255 & t),
          n
        );
      };
    },
    3958: function (e, t, n) {
      "use strict";
      for (var r = n(68697), o = [], i = 0; i < 256; ++i)
        o.push((i + 256).toString(16).substr(1));
      t.Z = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (
            o[e[t + 0]] +
            o[e[t + 1]] +
            o[e[t + 2]] +
            o[e[t + 3]] +
            "-" +
            o[e[t + 4]] +
            o[e[t + 5]] +
            "-" +
            o[e[t + 6]] +
            o[e[t + 7]] +
            "-" +
            o[e[t + 8]] +
            o[e[t + 9]] +
            "-" +
            o[e[t + 10]] +
            o[e[t + 11]] +
            o[e[t + 12]] +
            o[e[t + 13]] +
            o[e[t + 14]] +
            o[e[t + 15]]
          ).toLowerCase();
        if (!(0, r.Z)(n)) throw TypeError("Stringified UUID is invalid");
        return n;
      };
    },
    68697: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      var o = function (e) {
        return "string" === typeof e && r.test(e);
      };
    },
    335: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return k;
        },
      });
      var r = n(67294),
        o = n(12351),
        i = n(19946),
        a = n(61363),
        s = n(64103),
        c = n(16723),
        u = n(23784),
        l = n(73781);
      let f = (0, r.createContext)(null);
      function d() {
        let e = (0, r.useContext)(f);
        if (null === e) {
          let e = new Error(
            "You used a <Label /> component, but it is not inside a relevant parent."
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(e, d), e);
        }
        return e;
      }
      function h() {
        let [e, t] = (0, r.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, r.useMemo)(
            () =>
              function (e) {
                let n = (0, l.z)(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let n = t.slice(),
                            r = n.indexOf(e);
                          return -1 !== r && n.splice(r, 1), n;
                        })
                    )
                  ),
                  o = (0, r.useMemo)(
                    () => ({
                      register: n,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                    }),
                    [n, e.slot, e.name, e.props]
                  );
                return r.createElement(f.Provider, { value: o }, e.children);
              },
            [t]
          ),
        ];
      }
      let v = (0, o.yV)(function (e, t) {
        let { passive: n = !1, ...r } = e,
          a = d(),
          s = `headlessui-label-${(0, i.M)()}`,
          l = (0, u.T)(t);
        (0, c.e)(() => a.register(s), [s, a.register]);
        let f = { ref: l, ...a.props, id: s };
        return (
          n &&
            ("onClick" in f && delete f.onClick,
            "onClick" in r && delete r.onClick),
          (0, o.sY)({
            ourProps: f,
            theirProps: r,
            slot: a.slot || {},
            defaultTag: "label",
            name: a.name || "Label",
          })
        );
      });
      var p = n(39516),
        m = n(14157),
        w = n(46045);
      let g = (0, r.createContext)(null);
      g.displayName = "GroupContext";
      let b = r.Fragment;
      let y = (0, o.yV)(function (e, t) {
          let {
              checked: n,
              defaultChecked: c = !1,
              onChange: f,
              name: d,
              value: h,
              ...v
            } = e,
            p = `headlessui-switch-${(0, i.M)()}`,
            b = (0, r.useContext)(g),
            y = (0, r.useRef)(null),
            k = (0, u.T)(y, t, null === b ? null : b.setSwitch),
            [E, x] = (function (e, t, n) {
              let [o, i] = (0, r.useState)(n),
                a = void 0 !== e,
                s = (0, r.useRef)(a),
                c = (0, r.useRef)(!1),
                u = (0, r.useRef)(!1);
              return (
                !a || s.current || c.current
                  ? !a &&
                    s.current &&
                    !u.current &&
                    ((u.current = !0),
                    (s.current = a),
                    console.error(
                      "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen."
                    ))
                  : ((c.current = !0),
                    (s.current = a),
                    console.error(
                      "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen."
                    )),
                [
                  a ? e : o,
                  (0, l.z)((e) => (a || i(e), null == t ? void 0 : t(e))),
                ]
              );
            })(n, f, c),
            _ = (0, l.z)(() => (null == x ? void 0 : x(!E))),
            L = (0, l.z)((e) => {
              if ((0, s.P)(e.currentTarget)) return e.preventDefault();
              e.preventDefault(), _();
            }),
            M = (0, l.z)((e) => {
              e.key === a.R.Space
                ? (e.preventDefault(), _())
                : e.key === a.R.Enter &&
                  (function (e) {
                    var t;
                    let n =
                      null != (t = null == e ? void 0 : e.form)
                        ? t
                        : e.closest("form");
                    if (n)
                      for (let r of n.elements)
                        if (
                          ("INPUT" === r.tagName && "submit" === r.type) ||
                          ("BUTTON" === r.tagName && "submit" === r.type) ||
                          ("INPUT" === r.nodeName && "image" === r.type)
                        )
                          return void r.click();
                  })(e.currentTarget);
            }),
            C = (0, l.z)((e) => e.preventDefault()),
            R = (0, r.useMemo)(() => ({ checked: E }), [E]),
            O = {
              id: p,
              ref: k,
              role: "switch",
              type: (0, m.f)(e, y),
              tabIndex: 0,
              "aria-checked": E,
              "aria-labelledby": null == b ? void 0 : b.labelledby,
              "aria-describedby": null == b ? void 0 : b.describedby,
              onClick: L,
              onKeyUp: M,
              onKeyPress: C,
            };
          return r.createElement(
            r.Fragment,
            null,
            null != d &&
              E &&
              r.createElement(w._, {
                features: w.A.Hidden,
                ...(0, o.oA)({
                  as: "input",
                  type: "checkbox",
                  hidden: !0,
                  readOnly: !0,
                  checked: E,
                  name: d,
                  value: h,
                }),
              }),
            (0, o.sY)({
              ourProps: O,
              theirProps: v,
              slot: R,
              defaultTag: "button",
              name: "Switch",
            })
          );
        }),
        k = Object.assign(y, {
          Group: function (e) {
            let [t, n] = (0, r.useState)(null),
              [i, a] = h(),
              [s, c] = (0, p.f)(),
              u = (0, r.useMemo)(
                () => ({
                  switch: t,
                  setSwitch: n,
                  labelledby: i,
                  describedby: s,
                }),
                [t, n, i, s]
              ),
              l = e;
            return r.createElement(
              c,
              { name: "Switch.Description" },
              r.createElement(
                a,
                {
                  name: "Switch.Label",
                  props: {
                    onClick() {
                      !t || (t.click(), t.focus({ preventScroll: !0 }));
                    },
                  },
                },
                r.createElement(
                  g.Provider,
                  { value: u },
                  (0, o.sY)({
                    ourProps: {},
                    theirProps: l,
                    defaultTag: b,
                    name: "Switch.Group",
                  })
                )
              )
            );
          },
          Label: v,
          Description: p.d,
        });
    },
    8471: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
          })
        );
      });
      t.Z = o;
    },
    67471: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
          })
        );
      });
      t.Z = o;
    },
    71335: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M14 5l7 7m0 0l-7 7m7-7H3",
          })
        );
      });
      t.Z = o;
    },
    8639: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13 7l5 5m0 0l-5 5m5-5H6",
          })
        );
      });
      t.Z = o;
    },
    49209: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
          })
        );
      });
      t.Z = o;
    },
    12450: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
          })
        );
      });
      t.Z = o;
    },
    64343: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5 13l4 4L19 7",
          })
        );
      });
      t.Z = o;
    },
    28598: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5 11l7-7 7 7M5 19l7-7 7 7",
          })
        );
      });
      t.Z = o;
    },
    68121: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15 19l-7-7 7-7",
          })
        );
      });
      t.Z = o;
    },
    10822: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5 15l7-7 7 7",
          })
        );
      });
      t.Z = o;
    },
    15186: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
          })
        );
      });
      t.Z = o;
    },
    52758: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
          })
        );
      });
      t.Z = o;
    },
    49050: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
          })
        );
      });
      t.Z = o;
    },
    56365: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
          })
        );
      });
      t.Z = o;
    },
    92439: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
          })
        );
      });
      t.Z = o;
    },
    91962: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4",
          })
        );
      });
      t.Z = o;
    },
    40779: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
          }),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z",
          })
        );
      });
      t.Z = o;
    },
    48285: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9",
          })
        );
      });
      t.Z = o;
    },
    22350: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
          })
        );
      });
      t.Z = o;
    },
    44320: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13 10V3L4 14h7v7l9-11h-7z",
          })
        );
      });
      t.Z = o;
    },
    46596: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M18 12H6",
          })
        );
      });
      t.Z = o;
    },
    16896: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
          })
        );
      });
      t.Z = o;
    },
    24634: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
          })
        );
      });
      t.Z = o;
    },
    60219: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
          })
        );
      });
      t.Z = o;
    },
    76763: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 4v16m8-8H4",
          })
        );
      });
      t.Z = o;
    },
    19351: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6v6m0 0v6m0-6h6m-6 0H6",
          })
        );
      });
      t.Z = o;
    },
    21628: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01",
          })
        );
      });
      t.Z = o;
    },
    5966: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
          })
        );
      });
      t.Z = o;
    },
    76749: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
          })
        );
      });
      t.Z = o;
    },
    38945: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
          })
        );
      });
      t.Z = o;
    },
    44681: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
          })
        );
      });
      t.Z = o;
    },
    96857: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6",
          })
        );
      });
      t.Z = o;
    },
    41748: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
          })
        );
      });
      t.Z = o;
    },
    71738: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }),
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
            clipRule: "evenodd",
          })
        );
      });
      t.Z = o;
    },
    77481: function (e, t, n) {
      "use strict";
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",
            clipRule: "evenodd",
          }),
          r.createElement("path", {
            d: "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z",
          })
        );
      });
      t.Z = o;
    },
    84849: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return s;
        },
        Z: function () {
          return a;
        },
      });
      var r = n(67294);
      const o = r.createContext({});
      function i({
        baseColor: e,
        highlightColor: t,
        width: n,
        height: r,
        borderRadius: o,
        circle: i,
        direction: a,
        duration: s,
        enableAnimation: c = true,
      }) {
        const u = {};
        return (
          "rtl" === a && (u["--animation-direction"] = "reverse"),
          "number" === typeof s && (u["--animation-duration"] = `${s}s`),
          c || (u["--pseudo-element-display"] = "none"),
          ("string" !== typeof n && "number" !== typeof n) || (u.width = n),
          ("string" !== typeof r && "number" !== typeof r) || (u.height = r),
          ("string" !== typeof o && "number" !== typeof o) ||
            (u.borderRadius = o),
          i && (u.borderRadius = "50%"),
          "undefined" !== typeof e && (u["--base-color"] = e),
          "undefined" !== typeof t && (u["--highlight-color"] = t),
          u
        );
      }
      function a({
        count: e = 1,
        wrapper: t,
        className: n,
        containerClassName: a,
        containerTestId: s,
        circle: c = !1,
        style: u,
        ...l
      }) {
        var f, d, h;
        const v = r.useContext(o),
          p = { ...l };
        for (const [r, o] of Object.entries(l))
          "undefined" === typeof o && delete p[r];
        const m = { ...v, ...p, circle: c },
          w = { ...u, ...i(m) };
        let g = "react-loading-skeleton";
        n && (g += ` ${n}`);
        const b = null !== (f = m.inline) && void 0 !== f && f,
          y = [],
          k = Math.ceil(e);
        for (let o = 0; o < k; o++) {
          let t = w;
          if (k > e && o === k - 1) {
            const n = null !== (d = t.width) && void 0 !== d ? d : "100%",
              r = e % 1,
              o = "number" === typeof n ? n * r : `calc(${n} * ${r})`;
            t = { ...t, width: o };
          }
          const n = r.createElement(
            "span",
            { className: g, style: t, key: o },
            "\u200c"
          );
          b
            ? y.push(n)
            : y.push(
                r.createElement(
                  r.Fragment,
                  { key: o },
                  n,
                  r.createElement("br", null)
                )
              );
        }
        return r.createElement(
          "span",
          {
            className: a,
            "data-testid": s,
            "aria-live": "polite",
            "aria-busy": null === (h = m.enableAnimation) || void 0 === h || h,
          },
          t ? y.map((e, n) => r.createElement(t, { key: n }, e)) : y
        );
      }
      function s({ children: e, ...t }) {
        return r.createElement(o.Provider, { value: t }, e);
      }
    },
    44593: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return h;
        },
      });
      var r = n(67294),
        o = n(95591),
        i = n(11753),
        a = n(61688);
      function s(e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function c(e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" === typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (s) {
                  (i = [6, s]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, s]);
          };
        }
      }
      function u(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (s) {
          o = { error: s };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      var l = "$inf$",
        f = Promise.resolve(),
        d = function (e) {
          return (0, i.qC)(e ? e(0, null) : null)[0];
        },
        h = (0, i.xD)(o.ZP, function (e) {
          return function (t, n, o) {
            var h,
              v = (0, r.useRef)(!1),
              p = (0, r.useRef)(),
              m = o.cache,
              w = o.initialSize,
              g = void 0 === w ? 1 : w,
              b = o.revalidateAll,
              y = void 0 !== b && b,
              k = o.persistSize,
              E = void 0 !== k && k,
              x = o.revalidateFirstPage,
              _ = void 0 === x || x,
              L = o.revalidateOnMount,
              M = void 0 !== L && L;
            try {
              (h = d(t)) && (h = l + h);
            } catch (D) {}
            var C = u((0, i.JN)(m, h), 3),
              R = C[0],
              O = C[1],
              j = C[2],
              A = (0, r.useCallback)(
                function () {
                  return (0, i.o8)(R()._l) ? g : R()._l;
                },
                [m, h, g]
              );
            (0, a.useSyncExternalStore)(
              (0, r.useCallback)(
                function (e) {
                  return h
                    ? j(h, function () {
                        e();
                      })
                    : function () {};
                },
                [m, h]
              ),
              A,
              A
            );
            var Z = (0, r.useCallback)(
                function () {
                  var e = R()._l;
                  return (0, i.o8)(e) ? g : e;
                },
                [h, g]
              ),
              T = (0, r.useRef)(Z());
            (0, i.LI)(
              function () {
                v.current
                  ? h && O({ _l: E ? T.current : g })
                  : (v.current = !0);
              },
              [h, m]
            );
            var z = M && !v.current,
              S = e(
                h,
                function () {
                  return s(void 0, void 0, void 0, function () {
                    var e, r, a, s, l, f, d, h, v, w, g, b, k, E, x;
                    return c(this, function (c) {
                      switch (c.label) {
                        case 0:
                          (e = u(R()._i || [], 2)),
                            (r = e[0]),
                            (a = e[1]),
                            (s = []),
                            (l = Z()),
                            (f = null),
                            (d = 0),
                            (c.label = 1);
                        case 1:
                          return d < l
                            ? ((h = u((0, i.qC)(t(d, f)), 2)),
                              (v = h[0]),
                              (w = h[1]),
                              v
                                ? ((g = u((0, i.JN)(m, v), 2)),
                                  (b = g[0]),
                                  (k = g[1]),
                                  (E = b().data),
                                  (x =
                                    y ||
                                    r ||
                                    (0, i.o8)(E) ||
                                    (_ && !d && !(0, i.o8)(p.current)) ||
                                    z ||
                                    (a &&
                                      !(0, i.o8)(a[d]) &&
                                      !o.compare(a[d], E))),
                                  n && x ? [4, n(w)] : [3, 3])
                                : [3, 5])
                            : [3, 5];
                        case 2:
                          (E = c.sent()), k({ data: E, _k: w }), (c.label = 3);
                        case 3:
                          s.push(E), (f = E), (c.label = 4);
                        case 4:
                          return ++d, [3, 1];
                        case 5:
                          return O({ _i: i.i_ }), [2, s];
                      }
                    });
                  });
                },
                o
              );
            (0, i.LI)(
              function () {
                p.current = S.data;
              },
              [S.data]
            );
            var B = (0, r.useCallback)(
                function (e, t) {
                  var n = "boolean" === typeof t ? { revalidate: t } : t || {},
                    r = !1 !== n.revalidate;
                  if (!h) return f;
                  if (r)
                    if ((0, i.o8)(e)) O({ _i: [!0] });
                    else {
                      var o = p.current;
                      O({ _i: [!1, o] });
                    }
                  return arguments.length ? S.mutate(e, r) : S.mutate();
                },
                [h, m]
              ),
              W = (0, r.useCallback)(
                function (e) {
                  return h
                    ? ((0, i.mf)(e)
                        ? (n = e(Z()))
                        : "number" == typeof e && (n = e),
                      "number" != typeof n
                        ? f
                        : (O({ _l: n }),
                          (T.current = n),
                          B(
                            (function (e) {
                              for (var n, r = [], o = null, a = 0; a < e; ++a) {
                                var s = u((0, i.qC)(t(a, o)), 1)[0],
                                  c = s
                                    ? null === (n = m.get(s)) || void 0 === n
                                      ? void 0
                                      : n.data
                                    : i.i_;
                                if ((0, i.o8)(c)) return p.current;
                                r.push(c), (o = c);
                              }
                              return r;
                            })(n)
                          )))
                    : f;
                  var n;
                },
                [h, Z, B, m]
              );
            return {
              size: Z(),
              setSize: W,
              mutate: B,
              get data() {
                return S.data;
              },
              get error() {
                return S.error;
              },
              get isValidating() {
                return S.isValidating;
              },
              get isLoading() {
                return S.isLoading;
              },
            };
          };
        });
    },
  },
]);
