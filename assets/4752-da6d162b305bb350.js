"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4752],
  {
    14468: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var i = t(85893),
        a = t(67294);
      function r() {
        var e,
          n,
          t =
            ((e = [
              " ___         _      ____                               \n|  _|___  __| | ___|  __|__   __  _____  ___  _ _ _  _ \n| |_/ _ \\/ _| |/ -_) |_|/  \\ / _||_   _|/ _ \\| '_| || |  |1||\n|___\\___/\\__,_|\\___|_| /_/\\_\\\\__|  |_|  \\___/|_| \\_, / | |_||_\\___|\\_, |\n                                                 |__/  ",
            ]),
            (n = [
              " ___         _      ____                               \n|  _|___  __| | ___|  __|__   __  _____  ___  _ _ _  _ \n| |_/ _ \\/ _| |/ -_) |_|/  \\ / _||_   _|/ _ \\| '_| || |  |1||\n|___\\___/\\__,_|\\___|_| /_/\\_\\\\__|  |_|  \\___/|_| \\_, / | |_||_\\___|\\_, |\n                                                 |__/  ",
            ]) || (n = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
            ));
        return (
          (r = function () {
            return t;
          }),
          t
        );
      }
      var o,
        s,
        c,
        l,
        _,
        g,
        h,
        u,
        d,
        m,
        f = Math.sin,
        p = Math.cos,
        w = Math.round,
        v = Math.sqrt,
        y = Math.max,
        b = String.raw(r());
      function x() {
        for (var e = 0; e < _.length; e++) o.removeChild(_[e]);
        _ = [];
        for (var n = 0; n < g.length; n++) o.removeChild(g[n]);
        (g = []),
          o.setAttribute(
            "viewBox",
            "0 0 "
              .concat(window.innerWidth, " ")
              .concat(y(100, window.innerHeight))
          ),
          (m = c.length);
        for (var t = (o.viewBox.baseVal.height - 10) / m, i = 0; i < m; i++) {
          var a = document.createElementNS(o.namespaceURI, "text");
          a.setAttribute("x", 5),
            a.setAttribute("y", i * t + 5),
            (a.style.fontSize = "".concat(0.95 * t, "px")),
            (a.style.fontFamily = "monospace"),
            (a.style.dominantBaseline = "hanging"),
            (a.style.whiteSpace = "pre"),
            a.setAttribute("fill", "#7d9ddf"),
            o.appendChild(a),
            (_[i] = a);
        }
        _[0].textContent = "".padStart(1e3, "W");
        var r = _[0].getBBox().width / 1e3;
        (_[0].textContent = ""),
          (s = w((o.viewBox.baseVal.width - 10) / r)),
          (h = w(s / 2 - l[0].length / 2) - 1),
          (u = w(m / 2 - l.length / 2) - 1);
        for (var d = 0; d < l.length; d++) {
          var f = document.createElementNS(o.namespaceURI, "text");
          f.setAttribute("x", 5 + (h + 1) * r),
            f.setAttribute("y", d * t + 5 + (u + 1) * t),
            (f.style.fontSize = "".concat(0.95 * t, "px")),
            (f.style.fontFamily = "monospace"),
            (f.style.dominantBaseline = "hanging"),
            (f.style.whiteSpace = "pre"),
            f.setAttribute("font-weight", "bold"),
            f.setAttribute("fill", "white"),
            o.appendChild(f),
            (g[d] = f);
        }
      }
      function k(e) {
        d || (d = 0.001 * e), requestAnimationFrame(k);
        for (
          var n = 0.001 * e - d,
            t = (function (e) {
              return e < 0.5
                ? (1 - v(1 - Math.pow(2 * e, 2))) / 2
                : (v(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2;
            })(j(0.5 * (n - 1), 0, 1)),
            i = 0;
          i < _.length;
          i++
        ) {
          for (
            var a = "", r = "", o = 1 - (2 * i) / _.length, m = 0;
            m < s;
            m++
          ) {
            var b = (2 * m) / s - 1,
              x = v(b * b + o * o),
              M = (0.1 * n) / y(0.1, x),
              S = f(M),
              A = p(M),
              B = b * S - o * A,
              z = w(((b * A + o * S + 1) / 2) * s),
              E = w(((B + 1) / 2) * c.length) % c.length,
              L =
                z < 0 || z >= s || E < 0 || E >= _.length
                  ? " "
                  : c[E][z] || " ";
            if (
              window.innerWidth / window.innerHeight > 0.5 &&
              i > u &&
              i < u + l.length + 1 &&
              m > h &&
              m < h + l[0].length + 1
            ) {
              var R = m - h - 1,
                q = i - u - 1,
                O = l[q][R] || L,
                H = " " != l[q][R - 1],
                V = " " != l[q][R + 1];
              if (" " != O || H || V) {
                var F = L.charCodeAt(0),
                  W = O.charCodeAt(0);
                (r += L = String.fromCharCode(w(C(F, W, t)))),
                  1 == t && (L = " ");
              } else r += " ";
              m == h + l[0].length &&
                ((g[q].textContent = r), g[q].setAttribute("fill-opacity", t));
            }
            a += L;
          }
          _[i].textContent = a;
        }
      }
      var C = function (e, n, t) {
          return e * (1 - t) + n * t;
        },
        j = function (e, n, t) {
          return e < n ? n : e > t ? t : e;
        };
      function M() {
        return (
          (0, a.useEffect)(function () {
            if ("?animate=false" !== document.location.search)
              return (
                (o = document.getElementById("bannerSVG")),
                (c =
                  "/imagine close up, modern cowboy on a ranch, his eyes are filled with the cosmos, realistic\n    /imagine city areal perspective. streets glowing, concrete architecture, green roofs, people on the streets\n    /imagine the beginning of the universe by Monet\n    /imagine looking up a never ending staircase by Jean Giraud Moebius\n    /imagine abstract, cycle, organic, powerful, behance\n    /imagine gorgeous bouquet still life painting in the style of Odilon Redon and Henri Fantin-Latour\n    /imagine a warm sunny beach near an ocean full of pikachu's\n    /imagine 3d render of gold rings, geometric, circles, triangles, psychedelic, infinity pool, eccojams, vaporwave, oneohtrix point never, golden hour, glossy reflections and light rays, portals into other worlds\n    /imagine intricate jungle landscape by albrecht durer, henri rousseau, pieter brueghel the elder, mattisse\n    /imagine cyberpunk cat rabbit hacker, googles, anime style\n    /imagine banana with glasses dancing, ghibli style\n    /imagine corgis dancing in vibrant victorian dresses, Rococo style, in a large luxurious ballroom\n    /imagine A wise/meditating/fantasy wizard sitting in complex/intricate meadow with mountains/fields, painted by Japanese artist Koji Miromoto using detailed/hyperfine/lineart/print black paper ink techniques and exotic glowy psychedelic ink, autochrome colors/style. Stylized/detailed/textured, gradients, graduated colors, fine line details.\n    /imagine 1960s illustration of the beginning of life on Earth\n    /imagine commodore 1351 mouse. 80s sythwave style. hyper realistic\n    /imagine map of steampunk desert\n    /imagine francisco goya scene oil painting watercolor sci-fi science fiction cyberpunk time machine\n    /imagine Portrait of a cyber glitch sorceress causing video corruption with her magic\n    /imagine a realistic ancient temple, crumbling stone, vines, extreme detail, statues, octane render, volumetric fog, realistic lighting, reflections\n    /imagine giant red crystals in a desert with two suns\n    /imagine Robin Williams in the style of John Allison\n    /imagine standing in front of a castle\n    /imagine a professional photorealistic Portrait of an Astronaut by Peter Mohrbacher,Shaun Tan and Seb McKinnon,realistic eyes,realistic hair,,Beautiful Hit Tech costume and Helmet details,Beautiful dramatic dark moody lighting,Cinematographic Atmosphere,photorealism glossy magazine painting,Octane Render,Deep Color,8k Resolution,High Details,Flickr,DSLR,CGsociety,Artstation\n    /imagine Matter condensed from energy, life built upon matter, consciousness upon life\n    /imagine hyperreal swirling watercolors trapped in a soap bubble, 4k render\n    /imagine beautiful painting of clouds with sunrise, by john martin, Trending on artstation, pastel aesthetic\n    /imagine modern futuristic lampshade with art nouveau inspiration\n    /imagine photo shot on Leica IIIf with 50mm f/2 Summar; 1/50 sec; f/4\n    /imagine sharp alphabet typography by Walter Gropius\n    /imagine four dogs playing poker in a crowded room, by Malcolm Liepke and Lovis Corinth, oilpainting\n    /imagine invitation made with old paper written with cursive font pyrographic words in the center | red wax seal above in the top-left corner, cinematic light, artstation\n    /imagine aisle view of the festival street market in AlUla, many booths, seating areas, natural materials, cinematic shot\n    /imagine japanese temple, sakura, detailed oil painting, by Mateusz Urbanowicz\n    /imagine a stegosaurus drawn by John Singer Sargent\n    /imagine a mysterious forest with many fireflies, trees with large roots covered in moss, green vegetation, Studio Ghibli animation style, Japanese animation film background,\n    /imagine the universe in our ancestors eyes\n    /imagine The inside of a gothic cathedral that looks like a tropical alien utopian jungle rainforest, dramatic cinematic lighting\n    /imagine A hero stands alone, artstation, highly detailed, cinematic\n    /imagine symmetric texture repetition on a tree on a beautiful mountain landscape\n    /imagine midcentury luchador mask, risograph\n    /imagine ultra detailed line drawing, black and white and red, pen and ink, high tech cyberpunk geisha with headphones and sunglasses and VR goggles in style of Shohei Otomo\n    /imagine interior of master bedroom in victorian mansion, window, dan mindel cinematography, 35mm, movie scene, pitch black, realistic lighting, perspective shots, moody atmosphere, light coming from outside, HDRI\n    /imagine the alien robot queen holding a party at the dome castle in HQ Cloud City during a technicolor sunset\n    /imagine corporate memphis style, mural, pride month, white background, vector, characters waving pride flags, celebration\n    /imagine abstract painting of coral reef\n    /imagine a calico cat taking a nap on a kiwi\n    /imagine Dreamy landscape depiction inspired by the works of Katsushika Hokusai, trending on artstation\n    /imagine garden bridge over swan pond monet garden lillies and hanging trees art\n    /imagine green dragon roosting above its lair in the ruins of a fantasy medieval city\n    /imagine rainwater flowing through a complex system of ancient stone pipes and a gargoyle watching\n    /imagine butterflies flit in a sunlit field. Hiroshige Japanese woodblock print.\n    /imagine an illustration of a wooden magic wand with an aura of void around it, stars glitter subtly around it, closeup, fantasy card game art trending on artstation concept art by Jason Chan"
                    .split("\n")
                    .map(function (e) {
                      return e.replace(/\t/g, "    ");
                    })),
                (l = b.split("\n").map(function (e) {
                  return e.replace(/\t/g, "    ");
                })),
                (_ = []),
                (g = []),
                x(),
                window.addEventListener("resize", x),
                requestAnimationFrame(k),
                function () {
                  window.removeEventListener("resize", x);
                }
              );
          }, []),
          (0, i.jsx)("svg", {
            id: "bannerSVG",
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 800 400",
            style: { background: "#09073a" },
          })
        );
      }
    },
    87825: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      });
      var i = t(85893),
        a = t(67294);
      function r() {
        var e,
          n,
          t =
            ((e = [
              " __  __ _    _  _                            \n|  /  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _ \n| |/| | / _| || / _  || | '_| ' / -_) || |\n|_|  |_|___,_|/ ___/_,_|_| |_||____|_, |\n             |__/                       |__/ ",
            ]),
            (n = [
              " __  __ _    _  _                            \n|  \\/  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _ \n| |\\/| | / _| || / _ \\ || | '_| ' \\/ -_) || |\n|_|  |_|_\\__,_|/ \\___/\\_,_|_| |_||_\\___|\\_, |\n             |__/                       |__/ ",
            ]) || (n = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
            ));
        return (
          (r = function () {
            return t;
          }),
          t
        );
      }
      var o,
        s,
        c,
        l,
        _,
        g,
        h = Math.sin,
        u = Math.cos,
        d = Math.round,
        m = Math.sqrt,
        f = Math.max,
        p = String.raw(r());
      function w() {
        for (var e = 0; e < l.length; e++) o.removeChild(l[e]);
        l = [];
        for (var n = 0; n < _.length; n++) o.removeChild(_[n]);
        (_ = []),
          o.setAttribute(
            "viewBox",
            "0 0 "
              .concat(window.innerWidth, " ")
              .concat(f(100, window.innerHeight))
          ),
          (g = c.length);
        for (var t = (o.viewBox.baseVal.height - 10) / g, i = 0; i < g; i++) {
          var a = document.createElementNS(o.namespaceURI, "text");
          a.setAttribute("x", 5),
            a.setAttribute("y", i * t + 5),
            (a.style.fontSize = "".concat(0.95 * t, "px")),
            (a.style.fontFamily = "monospace"),
            (a.style.dominantBaseline = "hanging"),
            (a.style.whiteSpace = "pre"),
            a.setAttribute("fill", "#7d9ddf"),
            o.appendChild(a),
            (l[i] = a);
        }
        l[0].textContent = "".padStart(1e3, "W");
        var r = l[0].getBBox().width / 1e3;
        (l[0].textContent = ""), (s = d((o.viewBox.baseVal.width - 10) / r));
      }
      function v(e) {
        requestAnimationFrame(v);
        for (
          var n = 1e-4 * e,
            t =
              ((function (e) {
                e < 0.5
                  ? m(1 - Math.pow(2 * e, 2))
                  : m(1 - Math.pow(-2 * e + 2, 2));
              })(y(0.5 * (n - 1), 0, 1)),
              0);
          t < l.length;
          t++
        ) {
          for (var i = "", a = 1 - (2 * t) / l.length, r = 0; r < s; r++) {
            var o = (2 * r) / s - 1,
              _ = m(o * o + a * a),
              g = (0.1 * n) / f(0.1, _),
              p = h(g),
              w = u(g),
              b = o * p - a * w,
              x = d(((o * w + a * p + 1) / 2) * s),
              k = d(((b + 1) / 2) * c.length) % c.length;
            i +=
              x < 0 || x >= s || k < 0 || k >= l.length ? " " : c[k][x] || " ";
          }
          l[t].textContent = i;
        }
      }
      var y = function (e, n, t) {
        return e < n ? n : e > t ? t : e;
      };
      function b(e) {
        var n = e.num,
          t = void 0 === n ? 0 : n;
        return (
          (0, a.useEffect)(function () {
            return (
              (o = document.getElementById("bgSVG".concat(t))),
              (c =
                "\n  \n                              u                                                                                             u                                                                     y      y\n  \n  \n                                     e                                     e\n  \n                                              n                                                                                             n                                                                               j                                j\n  \n  \n  \n                                                            q                                                                                             q                                     k    k\n  \n  \n  \n                                               k                                                                                             k                                                                                                                                                            h                h\n  \n  \n  \n  \n  \n  \n                                                                                                                                                                                                  f      f\n  \n  \n                                                  u                                                                                             u                                                           y                y\n  \n  \n  \n  \n         n                                                          n                                                 d                                                ld                                                l\n  \n  \n  \n a                                                                  n a                                                                  n\n  \n  \n                                                    c                                                    c\n  \n  \n  \n  \n  \n                                x                          n w                g                                x                          n w                g\n  \n  \n  \n                                                  z                                                  z\n  \n  \n  \n"
                  .split("\n")
                  .map(function (e) {
                    return e.replace(/\t/g, "    ");
                  })),
              p.split("\n").map(function (e) {
                return e.replace(/\t/g, "    ");
              }),
              (l = []),
              (_ = []),
              w(),
              window.addEventListener("resize", w),
              requestAnimationFrame(v),
              function () {
                window.removeEventListener("resize", w);
              }
            );
          }, []),
          (0, i.jsx)("svg", {
            id: "bgSVG".concat(t),
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 800 400",
          })
        );
      }
    },
    57196: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      });
      var i = t(85893),
        a = t(67294);
      function r() {
        var e,
          n,
          t =
            ((e = [
              " __  __ _    _  _                            \n|  /  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _ \n| |/| | / _| || / _  || | '_| ' / -_) || |\n|_|  |_|___,_|/ ___/_,_|_| |_||____|_, |\n             |__/                       |__/ ",
            ]),
            (n = [
              " __  __ _    _  _                            \n|  \\/  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _ \n| |\\/| | / _| || / _ \\ || | '_| ' \\/ -_) || |\n|_|  |_|_\\__,_|/ \\___/\\_,_|_| |_||_\\___|\\_, |\n             |__/                       |__/ ",
            ]) || (n = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
            ));
        return (
          (r = function () {
            return t;
          }),
          t
        );
      }
      var o,
        s,
        c,
        l,
        _,
        g,
        h = Math.sin,
        u = Math.cos,
        d = Math.round,
        m = Math.sqrt,
        f = Math.max,
        p = String.raw(r());
      function w() {
        for (var e = 0; e < l.length; e++) o.removeChild(l[e]);
        l = [];
        for (var n = 0; n < _.length; n++) o.removeChild(_[n]);
        (_ = []),
          o.setAttribute(
            "viewBox",
            "0 0 "
              .concat(window.innerWidth, " ")
              .concat(f(100, window.innerHeight))
          ),
          (g = c.length);
        for (var t = (o.viewBox.baseVal.height - 10) / g, i = 0; i < g; i++) {
          var a = document.createElementNS(o.namespaceURI, "text");
          a.setAttribute("x", 5),
            a.setAttribute("y", i * t + 5),
            (a.style.fontSize = "".concat(0.95 * t, "px")),
            (a.style.fontFamily = "monospace"),
            (a.style.dominantBaseline = "hanging"),
            (a.style.whiteSpace = "pre"),
            a.setAttribute("fill", "#7d9ddf"),
            o.appendChild(a),
            (l[i] = a);
        }
        l[0].textContent = "".padStart(1e3, "W");
        var r = l[0].getBBox().width / 1e3;
        (l[0].textContent = ""), (s = d((o.viewBox.baseVal.width - 10) / r));
      }
      function v(e) {
        requestAnimationFrame(v);
        for (
          var n = 1e-4 * e,
            t =
              ((function (e) {
                e < 0.5
                  ? m(1 - Math.pow(2 * e, 2))
                  : m(1 - Math.pow(-2 * e + 2, 2));
              })(y(0.5 * (n - 1), 0, 1)),
              0);
          t < l.length;
          t++
        ) {
          for (var i = "", a = 1 - (2 * t) / l.length, r = 0; r < s; r++) {
            var o = (2 * r) / s - 1,
              _ = m(o * o + a * a),
              g = (0.1 * n) / f(0.1, _),
              p = h(g),
              w = u(g),
              b = o * p - a * w,
              x = d(((o * w + a * p + 1) / 2) * s),
              k = d(((b + 1) / 2) * c.length) % c.length;
            i +=
              x < 0 || x >= s || k < 0 || k >= l.length ? " " : c[k][x] || " ";
          }
          l[t].textContent = i;
        }
      }
      var y = function (e, n, t) {
        return e < n ? n : e > t ? t : e;
      };
      function b(e) {
        var n = e.num,
          t = void 0 === n ? 0 : n;
        return (
          (0, a.useEffect)(function () {
            return (
              (o = document.getElementById("bgSVG".concat(t))),
              (c =
                "\n  \n                              u                                                                                             u                                                                     y      y\n  \n  \n                                     e                                     e\n  \n                                              n                                                                                             n                                                                               j                                j\n  \n  \n  \n                                                            q                                                                                             q                                     k    k\n  \n  \n  \n                                               k                                                                                             k                                                                                                                                                            h                h\n  \n  \n  \n  \n  \n  \n                                                                                                                                                                                                  f      f\n  \n  \n                                                  u                                                                                             u                                                           y                y\n  \n  \n  \n  \n         n                                                          n                                                 d                                                ld                                                l\n  \n  \n  \n a                                                                  n a                                                                  n\n  \n  \n                                                    c                                                    c\n  \n  \n  \n  \n  \n                                x                          n w                g                                x                          n w                g\n  \n  \n  \n                                                  z                                                  z\n  \n  \n  \n"
                  .split("\n")
                  .map(function (e) {
                    return e.replace(/\t/g, "    ");
                  })),
              p.split("\n").map(function (e) {
                return e.replace(/\t/g, "    ");
              }),
              (l = []),
              (_ = []),
              w(),
              window.addEventListener("resize", w),
              requestAnimationFrame(v),
              function () {
                window.removeEventListener("resize", w);
              }
            );
          }, []),
          (0, i.jsx)("svg", {
            id: "bgSVG".concat(t),
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 800 400",
          })
        );
      }
    },
    25482: function (e, n, t) {
      t.d(n, {
        h: function () {
          return l;
        },
      });
      var i = t(85893),
        a = t(2962),
        r = t(9008),
        o = t(11163),
        s = "Midjourney",
        c = "en",
        l = function (e) {
          var n = (0, o.useRouter)();
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(r.default, {
                children: [
                  (0, i.jsx)("meta", { charSet: "UTF-8" }, "charset"),
                  (0, i.jsx)("meta", {
                    name: "viewport",
                    content:
                      "width=device-width, initial-scale=1, maximum-scale=1",
                  }),
                  (0, i.jsx)(
                    "link",
                    {
                      rel: "apple-touch-icon",
                      href: "".concat(n.basePath, "/apple-touch-icon.png"),
                    },
                    "apple"
                  ),
                  (0, i.jsx)(
                    "link",
                    {
                      rel: "icon",
                      type: "image/png",
                      sizes: "32x32",
                      href: "".concat(n.basePath, "/favicon-32x32.png"),
                    },
                    "icon32"
                  ),
                  (0, i.jsx)(
                    "link",
                    {
                      rel: "icon",
                      type: "image/png",
                      sizes: "16x16",
                      href: "".concat(n.basePath, "/favicon-16x16.png"),
                    },
                    "icon16"
                  ),
                  (0, i.jsx)(
                    "link",
                    {
                      rel: "icon",
                      href: "".concat(n.basePath, "/favicon.ico"),
                    },
                    "favicon"
                  ),
                ],
              }),
              (0, i.jsx)(a.PB, {
                title: e.title,
                description: e.description,
                canonical: e.canonical,
                openGraph: {
                  title: e.title,
                  description: e.description,
                  url: e.canonical,
                  locale: c,
                  site_name: s,
                },
              }),
            ],
          });
        };
    },
    80943: function (e, n, t) {
      var i = t(67294);
      const a = i.forwardRef(function (e, n) {
        return i.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: n,
            },
            e
          ),
          i.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
          })
        );
      });
      n.Z = a;
    },
    64810: function (e, n, t) {
      var i = t(67294);
      const a = i.forwardRef(function (e, n) {
        return i.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: n,
            },
            e
          ),
          i.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1",
          })
        );
      });
      n.Z = a;
    },
    24634: function (e, n, t) {
      var i = t(67294);
      const a = i.forwardRef(function (e, n) {
        return i.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: n,
            },
            e
          ),
          i.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
          })
        );
      });
      n.Z = a;
    },
    44681: function (e, n, t) {
      var i = t(67294);
      const a = i.forwardRef(function (e, n) {
        return i.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: n,
            },
            e
          ),
          i.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
          })
        );
      });
      n.Z = a;
    },
  },
]);
