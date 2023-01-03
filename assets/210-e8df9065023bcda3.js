"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [210],
  {
    44717: function (e, a, t) {
      t.d(a, {
        X: function () {
          return b;
        },
      });
      var r = t(85893),
        i = t(67294),
        n = t(64343),
        o = t(46596),
        s = t(19351),
        l = t(60219),
        c = t(25675),
        u = t(84849),
        d = t(36090),
        m = t(1738),
        h = t(60670),
        p = t(13709);
      t(36860);
      function g(e) {
        var a = e.item,
          t = (e.callback, e.buttonClassName),
          i = e.includeDescription;
        return (0, r.jsxs)(
          h.Z,
          {
            href: "/app/collections/".concat(
              (0, m.c7)(null === a || void 0 === a ? void 0 : a.id)
            ),
            className:
              "group relative flex justify-between overflow-hidden grow !p-4 shrink-0 h-20 hover:bg-uiBlue-500/50 tracking-wide bg-blue-900/10 rounded-xl hoverUpSmall "
                .concat(t, " ")
                .concat(i ? "!justify-end !items-start" : ""),
            children: [
              (0, r.jsxs)("div", {
                className: "flex flex-col w-full  ".concat(
                  i ? "items-start text-xl" : "items-center text-lg"
                ),
                children: [
                  (0, r.jsx)("span", {
                    className: "z-10 capitalize line-clamp-1",
                    children: a.title,
                  }),
                  i &&
                    (0, r.jsx)("span", {
                      className:
                        "z-10 text-sm font-normal capitalize line-clamp-1",
                      children: a.description,
                    }),
                ],
              }),
              a.cover_job_id
                ? (0, r.jsx)(c.default, {
                    layout: "fill",
                    className:
                      "opacity-50 group-hover:opacity-75 grayscale-[30%] group-hover:grayscale-0 transition-all",
                    alt: "",
                    unoptimized: !0,
                    objectFit: "cover",
                    src: ""
                      .concat("https://cdn.midjourney.com", "/")
                      .concat(a.cover_job_id, "/grid_0_384_N.webp"),
                  })
                : (0, r.jsx)(p.ZP, {
                    username: null === a || void 0 === a ? void 0 : a.id,
                    size: 1e3,
                    className:
                      "absolute w-auto h-auto opacity-50 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0 transition-all centerAbs",
                  }),
            ],
          },
          a.id
        );
      }
      function f(e) {
        var a = e.item,
          t = e.callback,
          l = e.buttonClassName,
          u = e.includeDescription,
          m = (0, i.useState)(a.job_in_collection || !1),
          h = m[0],
          g = m[1];
        return (
          (0, i.useEffect)(
            function () {
              return g(a.job_in_collection);
            },
            [a.job_in_collection]
          ),
          (0, r.jsxs)(d.Z, {
            onClick: function () {
              return g(!h), a.callback ? a.callback() : t(a.id, !h);
            },
            className:
              "group flex justify-between overflow-hidden relative grow !p-4 shrink-0 h-20 hover:bg-uiBlue-500/50 tracking-wide bg-blue-900/10 rounded-xl hoverUpSmall "
                .concat(l, " ")
                .concat(u ? "!justify-end !items-start" : "", " ")
                .concat(h && "!bg-teal-700 hover:!bg-teal-600"),
            children: [
              (0, r.jsxs)("div", {
                className: "flex flex-col items-start w-full",
                children: [
                  (0, r.jsx)("span", {
                    className: "z-10 text-xl capitalize line-clamp-1",
                    children: a.title,
                  }),
                  u &&
                    (0, r.jsx)("span", {
                      className:
                        "z-10 text-sm font-normal capitalize line-clamp-1",
                      children: a.description,
                    }),
                ],
              }),
              h
                ? (0, r.jsxs)("div", {
                    className: "flex z-10 items-center mr-2 h-full",
                    children: [
                      (0, r.jsx)(n.Z, {
                        height: 22,
                        className: "group-hover:hidden",
                      }),
                      (0, r.jsx)(o.Z, {
                        height: 24,
                        className: "hidden group-hover:block",
                      }),
                    ],
                  })
                : (0, r.jsx)("div", {
                    className:
                      "flex z-10 items-center mr-2 h-full opacity-0 group-hover:opacity-100",
                    children: (0, r.jsx)(s.Z, { height: 24 }),
                  }),
              a.cover_job_id
                ? (0, r.jsx)(c.default, {
                    layout: "fill",
                    className:
                      "opacity-50 group-hover:opacity-75 grayscale-[30%] group-hover:grayscale-0 transition-all",
                    alt: "",
                    unoptimized: !0,
                    objectFit: "cover",
                    src: ""
                      .concat("https://cdn.midjourney.com", "/")
                      .concat(a.cover_job_id, "/grid_0_384_N.webp"),
                  })
                : (0, r.jsx)(p.ZP, {
                    username: null === a || void 0 === a ? void 0 : a.id,
                    size: 1e3,
                    className:
                      "absolute w-auto h-auto opacity-50 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0 transition-all centerAbs",
                  }),
            ],
          })
        );
      }
      function b(e) {
        var a = e.items,
          t = e.callback,
          i = e.className,
          n = void 0 === i ? "" : i,
          o = e.buttonClassName,
          s = void 0 === o ? "" : o,
          c = e.showAddButton,
          m = e.modalCallback,
          h = e.includeDescription,
          p = e.addButtonPos,
          b = e.maxItems,
          y = e.selectable,
          v = void 0 !== y && y,
          w = e.isLoading,
          k =
            (null === a || void 0 === a ? void 0 : a.length) > 0
              ? b
                ? null === a || void 0 === a
                  ? void 0
                  : a.slice(0, b)
                : a
              : [];
        return (0, r.jsxs)("div", {
          className: "flex ".concat(n),
          children: [
            c &&
              "top" === p &&
              (0, r.jsx)(r.Fragment, {
                children: (0, r.jsxs)(d.Z, {
                  onClick: function () {
                    return m(!0);
                  },
                  className:
                    "group flex gap-2 border-2 border-dashed border-slate-600 overflow-hidden relative grow shrink-0  h-20 tracking-wide text-slate-400 hover:!bg-blue-900/10 hover:text-slate-100 hover:border-slate-500 rounded-xl hoverUpSmall ".concat(
                      s
                    ),
                  children: [
                    (0, r.jsx)(l.Z, { height: 24 }),
                    (0, r.jsx)("span", {
                      className: "z-10 capitalize shadow-2xl",
                      children: "New Collection",
                    }),
                  ],
                }),
              }),
            !w &&
              k.length > 0 &&
              (0, r.jsx)(r.Fragment, {
                children: k.map(function (e) {
                  return v
                    ? (0, r.jsx)(
                        f,
                        {
                          callback: t,
                          buttonClassName: s,
                          includeDescription: h,
                          item: e,
                        },
                        e.id
                      )
                    : (0, r.jsx)(
                        g,
                        {
                          callback: t,
                          buttonClassName: s,
                          includeDescription: h,
                          item: e,
                        },
                        e.id
                      );
                }),
              }),
            w &&
              (0, r.jsx)(u.y, {
                inline: !0,
                baseColor: "#24242e3c",
                highlightColor: "#26303b33",
                borderRadius: "12px",
                height: 80,
                width: "100%",
                children: Array.from({ length: 1 }).map(function (e, a) {
                  return (0,
                  r.jsx)(u.Z, { inline: !0, containerClassName: "block shrink grow leading-[0px]" }, a);
                }),
              }),
            c &&
              !w &&
              "top" !== p &&
              (0, r.jsx)(r.Fragment, {
                children:
                  0 === k.length &&
                  (0, r.jsxs)(d.Z, {
                    onClick: function () {
                      return m(!0);
                    },
                    className:
                      "group flex  gap-2 border-2 border-dashed border-slate-600 overflow-hidden relative grow shrink-0  h-20 tracking-wide text-slate-400 hover:!bg-blue-900/10 hover:text-slate-100 hover:border-slate-500 rounded-xl hoverUpSmall ".concat(
                        s
                      ),
                    children: [
                      (0, r.jsx)(l.Z, { height: 24 }),
                      (0, r.jsx)("span", {
                        className: "z-10 capitalize shadow-2xl",
                        children: "New Collection",
                      }),
                    ],
                  }),
              }),
          ],
        });
      }
      a.Z = b;
    },
    29123: function (e, a, t) {
      var r = t(34051),
        i = t.n(r),
        n = t(85893),
        o = t(67294),
        s = t(37051),
        l = t(38945),
        c = t(25675),
        u = t(41664),
        d = t(95591),
        m = t(9281),
        h = t(44824),
        p = t(45332),
        g = t(1738),
        f = t(36090),
        b = t(13709);
      function y(e, a, t, r, i, n, o) {
        try {
          var s = e[n](o),
            l = s.value;
        } catch (c) {
          return void t(c);
        }
        s.done ? a(l) : Promise.resolve(l).then(r, i);
      }
      function v(e) {
        return function () {
          var a = this,
            t = arguments;
          return new Promise(function (r, i) {
            var n = e.apply(a, t);
            function o(e) {
              y(n, r, i, o, s, "next", e);
            }
            function s(e) {
              y(n, r, i, o, s, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function w(e, a) {
        if (null == e) return {};
        var t,
          r,
          i = (function (e, a) {
            if (null == e) return {};
            var t,
              r,
              i = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (t = n[r]), a.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (t = n[r]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (i[t] = e[t]));
        }
        return i;
      }
      a.Z = function (e) {
        var a = e.items,
          t = e.editCallback,
          r = w(e, ["items", "editCallback"]),
          y = (0, d.kY)().mutate,
          k = h.V.useContainer().fullWidth,
          x = (0, m.aC)().userInfo,
          j = (0, o.useCallback)(
            (function () {
              var e = v(
                i().mark(function e(a) {
                  var t, r, n;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !confirm(
                              "Are you sure you want to remove this collection?"
                            )
                          ) {
                            e.next = 11;
                            break;
                          }
                          return (
                            (t = { hidden: !0, collection_id: a || null }),
                            (e.next = 4),
                            fetch("/api/app/collections/", {
                              method: "PUT",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(t),
                            })
                          );
                        case 4:
                          return (r = e.sent), (e.next = 7), r.json();
                        case 7:
                          if (((n = e.sent), r.ok)) {
                            e.next = 10;
                            break;
                          }
                          throw new Error(n.message || "Something went wrong!");
                        case 10:
                          y(
                            ""
                              .concat(
                                "https://www.midjourney.com",
                                "/api/app/collections/?user_id="
                              )
                              .concat(
                                null === x || void 0 === x ? void 0 : x.id
                              ),
                            (function () {
                              var e = v(
                                i().mark(function e(t) {
                                  return i().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return e.abrupt(
                                            "return",
                                            t.filter(function (e) {
                                              return e.id !== a;
                                            })
                                          );
                                        case 1:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function (a) {
                                return e.apply(this, arguments);
                              };
                            })(),
                            {
                              populateCache: !0,
                              rollbackOnError: !0,
                              revalidate: !1,
                            }
                          );
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (a) {
                return e.apply(this, arguments);
              };
            })(),
            [y, null === x || void 0 === x ? void 0 : x.id]
          );
        return (0, n.jsx)("div", {
          className: (0, p.CN)(
            "grid gap-4 pt-5 -mt-5 mb-4 w-full  miniScrollbar sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
            k ? "2xl:grid-cols-6" : ""
          ),
          children:
            a.length > 0
              ? a.map(function (e) {
                  return (0, n.jsx)(
                    u.default,
                    {
                      href: "/app/collections/".concat((0, g.c7)(e.id)),
                      children: (0, n.jsxs)("a", {
                        className:
                          "group flex overflow-hidden relative flex-col grow shrink-0 gap-1 justify-start items-start p-4 w-full h-28 tracking-wide text-white bg-black hover:bg-black !bg-cover rounded-xl sm:h-48 hoverUpSmall",
                        children: [
                          (0, n.jsx)("span", {
                            className: "z-10 font-bold capitalize shadow-2xl",
                            children: e.title,
                          }),
                          (0, n.jsx)("span", {
                            className:
                              "z-10 text-base font-normal text-left shadow-2xl line-clamp-3",
                            children: e.description,
                          }),
                          e.cover_job_id
                            ? (0, n.jsx)(c.default, {
                                layout: "fill",
                                className:
                                  "opacity-50 group-hover:opacity-75 grayscale-[30%] group-hover:grayscale-0 transition-all",
                                alt: "",
                                unoptimized: !0,
                                objectFit: "cover",
                                src: ""
                                  .concat("https://cdn.midjourney.com", "/")
                                  .concat(e.cover_job_id, "/grid_0_384_N.webp"),
                              })
                            : (0, n.jsx)(b.ZP, {
                                username:
                                  null === e || void 0 === e ? void 0 : e.id,
                                size: 1e3,
                                className:
                                  "absolute w-auto h-auto opacity-50 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0 transition-all centerAbs",
                              }),
                          (null === e || void 0 === e
                            ? void 0
                            : e.creator_id) ===
                            (null === x || void 0 === x ? void 0 : x.id) &&
                            r.showEditButtons &&
                            (0, n.jsxs)("div", {
                              className:
                                "flex absolute right-3 bottom-3 z-50 [@media(pointer:fine)]:opacity-0 group-hover:opacity-100",
                              children: [
                                (0, n.jsx)(f.Z, {
                                  title: "Edit collection",
                                  className: "w-auto h-auto transition-opacity",
                                  onClick: function (a) {
                                    a.preventDefault(),
                                      a.stopPropagation(),
                                      t(e);
                                  },
                                  children: (0, n.jsx)(s.Z, { height: 18 }),
                                }),
                                (0, n.jsx)(f.Z, {
                                  title: "Remove collection",
                                  className:
                                    "w-auto h-auto hover:bg-red-800 transition-opacity",
                                  onClick: function (a) {
                                    a.preventDefault(),
                                      a.stopPropagation(),
                                      j(e.id);
                                  },
                                  children: (0, n.jsx)(l.Z, { height: 18 }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    },
                    e.label
                  );
                })
              : (0, n.jsx)(n.Fragment, {}),
        });
      };
    },
    60204: function (e, a, t) {
      var r = t(85893),
        i = t(67294),
        n = t(11163),
        o = (t(36860), t(95591)),
        s = t(45332),
        l = t(1738),
        c = t(44717),
        u = t(29123),
        d = t(7313);
      function m(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      function h(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (a) {
              m(e, a, t[a]);
            });
        }
        return e;
      }
      a.Z = function (e) {
        var a = e.userId,
          t = e.list,
          m = e.home,
          p = e.className,
          g = e.blockClassName,
          f = e.buttonClassName,
          b = e.showAddButton,
          y = e.overrideModalTrigger,
          v = e.maxItems,
          w = e.publicDisplay,
          k = void 0 !== w && w,
          x = e.hideCallback,
          j = (0, n.useRouter)(),
          N = (0, i.useState)(!1),
          z = N[0],
          C = N[1],
          _ = (0, o.ZP)(
            ""
              .concat(
                "https://www.midjourney.com",
                "/api/app/collections/?user_id="
              )
              .concat(a, "&public=")
              .concat(k),
            s.EE,
            {
              revalidateOnFocus: !0,
              revalidateOnReconnect: !0,
              refreshWhenHidden: !1,
              refreshWhenOffline: !1,
            }
          ),
          S = _.data,
          O = _.isLoading,
          P = _.error,
          Z = m ? "/app" : "/app/users/".concat(a),
          A = (0, i.useCallback)(
            function (e) {
              j.push("".concat(Z, "/collections/").concat((0, l.c7)(e)));
            },
            [j, a]
          );
        (0, i.useEffect)(
          function () {
            (P ||
              (null === S || void 0 === S ? void 0 : S.error) ||
              (null === S || void 0 === S ? void 0 : S.msg) ||
              !S ||
              0 === (null === S || void 0 === S ? void 0 : S.length)) &&
              x &&
              !O &&
              x();
          },
          [S, x, O, P]
        );
        var I = {
          className: p,
          buttonClassName: f,
          items: S,
          callback: A,
          showAddButton: b,
          modalCallback: C,
          maxItems: v,
          blockClassName: g,
          isLoading: O,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(d.Z, {
              open: (null === y || void 0 === y ? void 0 : y.open) || z,
              setOpen: (null === y || void 0 === y ? void 0 : y.setOpen) || C,
            }),
            t ? (0, r.jsx)(u.Z, h({}, I)) : (0, r.jsx)(c.X, h({}, I)),
          ],
        });
      };
    },
    7313: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return x;
        },
      });
      var r = t(34051),
        i = t.n(r),
        n = t(85893),
        o = t(67294),
        s = t(38945),
        l = t(60219),
        c = t(25675),
        u = t(95591),
        d = t(68697),
        m = t(30658),
        h = t(36090),
        p = t(67492),
        g = t(9281);
      function f(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, r = new Array(a); t < a; t++) r[t] = e[t];
        return r;
      }
      function b(e, a, t, r, i, n, o) {
        try {
          var s = e[n](o),
            l = s.value;
        } catch (c) {
          return void t(c);
        }
        s.done ? a(l) : Promise.resolve(l).then(r, i);
      }
      function y(e) {
        return function () {
          var a = this,
            t = arguments;
          return new Promise(function (r, i) {
            var n = e.apply(a, t);
            function o(e) {
              b(n, r, i, o, s, "next", e);
            }
            function s(e) {
              b(n, r, i, o, s, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function v(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      function w(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (a) {
              v(e, a, t[a]);
            });
        }
        return e;
      }
      function k(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return f(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, a) {
            if (!e) return;
            if ("string" === typeof e) return f(e, a);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return f(e, a);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function x(e) {
        var a,
          t = e.setOpen,
          r = e.open,
          f = (e.addRoomCallback, e.collection),
          b = (e.setCollections, e.coverIDDefault),
          v = e.handleAddToCollection,
          x = e.mutateUrl,
          j = (0, g.aC)().userInfo,
          N = (0, o.useState)("edit"),
          z = N[0],
          C = N[1],
          _ = (0, o.useState)(
            (null === f || void 0 === f ? void 0 : f.title) || ""
          ),
          S = _[0],
          O = _[1],
          P = (0, o.useState)(
            !1 !== (null === f || void 0 === f ? void 0 : f.public)
          ),
          Z = P[0],
          A = P[1],
          I = (0, o.useState)(
            (null === f || void 0 === f ? void 0 : f.cover_job_id) || b || ""
          ),
          B = I[0],
          q = I[1],
          L = (0, o.useState)(
            (null === f || void 0 === f ? void 0 : f.description) || ""
          ),
          D = L[0],
          M = L[1],
          E = (0, o.useState)(
            (null === f ||
            void 0 === f ||
            null === (a = f.search_terms) ||
            void 0 === a
              ? void 0
              : a[0]) || ""
          ),
          R = E[0],
          T = E[1],
          F = (0, o.useState)(
            (null === f || void 0 === f ? void 0 : f.workspaces) || ""
          ),
          H = F[0],
          U = F[1],
          W = (0, u.kY)().mutate;
        (0, o.useEffect)(
          function () {
            var e;
            r &&
              (C("edit"),
              O((null === f || void 0 === f ? void 0 : f.title) || ""),
              q(
                (null === f || void 0 === f ? void 0 : f.cover_job_id) ||
                  b ||
                  ""
              ),
              M((null === f || void 0 === f ? void 0 : f.description) || ""),
              T(
                (null === f ||
                void 0 === f ||
                null === (e = f.search_terms) ||
                void 0 === e
                  ? void 0
                  : e[0]) || ""
              ),
              U((null === f || void 0 === f ? void 0 : f.workspaces) || ""),
              A(!1 !== (null === f || void 0 === f ? void 0 : f.public)));
          },
          [r, f, b]
        );
        var J = (0, o.useCallback)(
            y(
              i().mark(function e() {
                var a, r, n, o;
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = {
                            title: S,
                            cover_job_id: B || null,
                            description: D,
                            search_terms: R.length > 0 ? [R] : [],
                            workspaces: H,
                            collection_id:
                              (null === f || void 0 === f ? void 0 : f.id) ||
                              null,
                            public: Z,
                          }),
                          (e.next = 3),
                          fetch("/api/app/collections/", {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(a),
                          })
                        );
                      case 3:
                        return (r = e.sent), (e.next = 6), r.json();
                      case 6:
                        if (((n = e.sent), r.ok)) {
                          e.next = 9;
                          break;
                        }
                        throw new Error(n.message || "Something went wrong!");
                      case 9:
                        v && v(n.id, !0),
                          (o = w({}, a, { id: n.id, job_in_collection: !0 })),
                          n.title
                            ? W(
                                ""
                                  .concat(
                                    "https://www.midjourney.com",
                                    "/api/app/collections/?collection_id="
                                  )
                                  .concat(n.id),
                                [w({}, n, { id: n.id })],
                                {
                                  populateCache: !0,
                                  rollbackOnError: !0,
                                  revalidate: !1,
                                }
                              )
                            : W(
                                x ||
                                  ""
                                    .concat(
                                      "https://www.midjourney.com",
                                      "/api/app/collections/?user_id="
                                    )
                                    .concat(
                                      null === j || void 0 === j ? void 0 : j.id
                                    ),
                                (function () {
                                  var e = y(
                                    i().mark(function e(a) {
                                      return i().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return e.abrupt(
                                                "return",
                                                [o].concat(k(a))
                                              );
                                            case 1:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  );
                                  return function (a) {
                                    return e.apply(this, arguments);
                                  };
                                })(),
                                {
                                  populateCache: !0,
                                  rollbackOnError: !0,
                                  revalidate: !1,
                                }
                              ),
                          t(!1);
                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [
              Z,
              S,
              B,
              D,
              R,
              H,
              null === f || void 0 === f ? void 0 : f.id,
              v,
              t,
              W,
              null === j || void 0 === j ? void 0 : j.id,
              x,
            ]
          ),
          V = {
            open: r,
            maxHeight: "",
            containerStyle: " md:overflow-auto miniScrollbar overflow-x-show",
            setOpen: t,
            title: "Edit collection",
            showClose: !0,
            closeCallback: function () {
              return t(!1);
            },
            ActionButton: function () {
              return z
                ? (0, n.jsx)(h.Z, {
                    title: "Coming soon",
                    className:
                      "inline-flex justify-center py-2 px-4 w-full min-h-[3rem] text-base font-medium text-white disabled:text-gray-900 bg-teal-600 hover:bg-teal-800 disabled:!bg-gray-600 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-sm disabled:cursor-not-allowed sm:text-base",
                    onClick: J,
                    children: "Save",
                  })
                : (0, n.jsx)(n.Fragment, {});
            },
            showButtons: !!z,
            BackButton: function () {
              return z
                ? (0, n.jsx)(h.Z, {
                    className:
                      "focus:outline-none focus-within:ring-2 !ring-blue-900",
                    onClick: function () {
                      t(!1);
                    },
                    children: "Cancel",
                  })
                : (0, n.jsx)(n.Fragment, {});
            },
          },
          G = (0, o.useState)(!1),
          Q = G[0],
          K = G[1];
        return (0, n.jsx)(m.Z, {
          modalBaseProps: V,
          children: (0, n.jsxs)("div", {
            className:
              "flex flex-col gap-6 my-2 max-h-screen text-left miniScrollBar",
            children: [
              "create" === z &&
                (0, n.jsxs)("form", {
                  onSubmit: function (e) {
                    e.preventDefault();
                  },
                  className: "flex flex-col gap-4 ",
                  children: [
                    (0, n.jsx)("p", {
                      className: "text-base text-slate-200",
                      children: "Create a new workspace.",
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, n.jsxs)("label", {
                          htmlFor: "room-name",
                          className:
                            "w-16 text-sm font-bold text-blue-600 uppercase",
                          children: [
                            "Name",
                            (0, n.jsx)("span", {
                              className: "text-red-800",
                              children: "*",
                            }),
                          ],
                        }),
                        (0, n.jsx)("input", {
                          required: !0,
                          id: "room-name",
                          value: S,
                          onChange: function (e) {
                            return O(e.target.value);
                          },
                          type: "text",
                          placeholder: "My first workspace",
                          className:
                            "shrink p-3 w-full text-base text-slate-200 placeholder:text-slate-600 bg-darkBlue-500 rounded border-blue-900/50 focus:outline-none focus-within:ring-2 !ring-blue-900",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, n.jsx)("label", {
                          htmlFor: "room-desc",
                          className:
                            "w-16 text-sm font-bold text-blue-600 uppercase",
                          children: "Description",
                        }),
                        (0, n.jsx)("textarea", {
                          required: !0,
                          id: "room-desc",
                          value: D,
                          onChange: function (e) {
                            return M(e.target.value);
                          },
                          type: "text",
                          placeholder: "Where I keep all my ducks...",
                          className:
                            "shrink p-3 w-full text-base text-slate-200 placeholder:text-slate-600 bg-darkBlue-500 rounded border-blue-900/50 focus:outline-none focus-within:ring-2 !ring-blue-900",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "flex justify-between items-center mb-1 w-full text-sm text-slate-500 uppsercase",
                      children: [
                        "Public Collection",
                        (0, n.jsx)(p.Z, {
                          callback: function () {
                            return A(function (e) {
                              return !e;
                            });
                          },
                          initialValue: Z,
                          enabledColor: "bg-teal-700",
                        }),
                      ],
                    }),
                  ],
                }),
              "edit" === z &&
                (0, n.jsxs)("form", {
                  onSubmit: function (e) {
                    e.preventDefault();
                  },
                  className: "flex flex-col gap-6 ",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, n.jsxs)("label", {
                              htmlFor: "room-name",
                              className:
                                "w-16 text-sm font-medium text-slate-500 uppercase",
                              children: [
                                "Title",
                                (0, n.jsx)("span", {
                                  className: "text-red-800",
                                  children: "*",
                                }),
                              ],
                            }),
                            " ",
                            (0, n.jsx)("span", {
                              className: "font-medium text-slate-600",
                              children: 60 - S.length,
                            }),
                          ],
                        }),
                        (0, n.jsx)("input", {
                          required: !0,
                          maxLength: 60,
                          id: "room-name",
                          value: S,
                          onChange: function (e) {
                            return O(e.target.value);
                          },
                          type: "text",
                          placeholder: "My first collection",
                          className:
                            "shrink p-3 w-full text-base text-slate-200 placeholder:text-slate-600 bg-darkBlue-500 rounded border-blue-900/50 focus:outline-none focus-within:ring-2 !ring-blue-900",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, n.jsx)("label", {
                              htmlFor: "room-desc",
                              className:
                                "w-16 text-sm font-medium text-slate-500 uppercase",
                              children: "Description",
                            }),
                            (0, n.jsx)("span", {
                              className: "font-medium text-slate-600",
                              children: 250 - D.length,
                            }),
                          ],
                        }),
                        (0, n.jsx)("textarea", {
                          required: !0,
                          maxLength: 250,
                          id: "room-desc",
                          value: D,
                          onChange: function (e) {
                            return M(e.target.value);
                          },
                          type: "text",
                          placeholder: "Where I keep all my ducks...",
                          className:
                            "shrink p-3 w-full text-base text-slate-200 placeholder:text-slate-600 bg-darkBlue-500 rounded border-blue-900/50 focus:outline-none focus-within:ring-2 !ring-blue-900",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "flex justify-between items-center mb-1 w-full text-sm text-slate-500 uppercase",
                      children: [
                        "Public Collection",
                        (0, n.jsx)(p.Z, {
                          callback: function () {
                            return A(function (e) {
                              return !e;
                            });
                          },
                          initialValue: Z,
                          enabledColor: "bg-teal-700",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, n.jsx)("label", {
                              htmlFor: "room-code",
                              className:
                                "text-sm font-medium text-slate-500 uppercase",
                              children: "Cover Job ID",
                            }),
                            " ",
                            Q &&
                              (0, d.Z)(B) &&
                              (0, n.jsx)("span", {
                                className: "font-medium text-yellow-700",
                                children: "Job not found",
                              }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex rounded focus-within:ring-2 !ring-blue-900 ".concat(
                              Q && ".ring-2 !.ring-red-500"
                            ),
                          children: [
                            (0, n.jsx)("input", {
                              value: B,
                              onChange: function (e) {
                                return q(e.target.value);
                              },
                              id: "room-code",
                              type: "text",
                              placeholder: "ID of a job to use as cover",
                              className:
                                "shrink p-3 w-full text-base text-slate-200 placeholder:text-slate-600 bg-darkBlue-500 rounded-l border-blue-900/50 focus:outline-none",
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "aspect-square relative shrink-0 w-12 h-full bg-darkBlue-700 rounded-r",
                              children: (0, n.jsx)(c.default, {
                                alt: "Cover Image",
                                src: "https://mj-gallery.com/".concat(
                                  B,
                                  "/grid_0.webp"
                                ),
                                layout: "fill",
                                objectFit: "cover",
                                unoptimized: !0,
                                onError: function () {
                                  return K(!0);
                                },
                                onLoadingComplete: function () {
                                  return K(!1);
                                },
                                className: " rounded-r ".concat(
                                  Q && "opacity-0"
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, n.jsx)("label", {
                              htmlFor: "room-desc",
                              className:
                                " text-sm font-medium text-slate-500 uppercase",
                              children: "Search filter",
                            }),
                            (0, n.jsx)("span", {
                              className: "font-medium text-slate-600",
                              children: 250 - R.length,
                            }),
                          ],
                        }),
                        (0, n.jsx)("textarea", {
                          required: !0,
                          maxLength: 250,
                          id: "room-desc",
                          value: R,
                          onChange: function (e) {
                            return T(e.target.value);
                          },
                          type: "text",
                          placeholder:
                            'e.g. "orange cat" and -dog or "blue dog" and -cat',
                          className:
                            "shrink p-3 w-full text-base text-slate-200 placeholder:text-slate-600 bg-darkBlue-500 rounded border-blue-900/50 !outline-blue-900 focus:outline-none",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "",
                      children: [
                        (0, n.jsx)("div", {
                          className: "flex justify-between",
                          children: (0, n.jsx)("label", {
                            htmlFor: "room-desc",
                            className:
                              " text-sm font-medium text-slate-500 uppercase",
                            children: "Workspaces",
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "flex flex-col gap-1 mt-1",
                          children: [
                            H &&
                              H.map(function (e, a) {
                                return (0, n.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "flex shrink justify-between items-center pr-3 w-full text-base text-slate-200 placeholder:text-slate-600 bg-darkBlue-500 rounded border-blue-900/50 focus:outline-none focus-within:ring-2 !ring-blue-900",
                                    children: [
                                      (0, n.jsx)("input", {
                                        value: e,
                                        onChange: function (e) {
                                          var t = k(H);
                                          (t[a] = e.target.value), U(t);
                                        },
                                        placeholder: "Your workspace code",
                                        type: "text",
                                        className:
                                          "shrink p-3 w-full placeholder:text-slate-600 !outline-none",
                                      }),
                                      (0, n.jsx)("button", {
                                        onClick: function (e) {
                                          e.preventDefault(),
                                            U(
                                              H.filter(function (e, t) {
                                                return t !== a;
                                              })
                                            );
                                        },
                                        className:
                                          "flex justify-center items-center w-8 h-8 text-slate-200 bg-darkBlue-500 hover:bg-rose-900 active:bg-rose-900/50 rounded",
                                        children: (0, n.jsx)(s.Z, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                    ],
                                  },
                                  a
                                );
                              }),
                            H.length < 4 &&
                              (0, n.jsxs)("button", {
                                onClick: function (e) {
                                  e.preventDefault(),
                                    U(function (e) {
                                      return e.length < 4
                                        ? k(e).concat([""])
                                        : e;
                                    });
                                },
                                className:
                                  "flex shrink gap-2 justify-center items-center p-3 w-full text-base placeholder:text-slate-600 text-emerald-600 rounded border border-emerald-800/50 border-dashed",
                                children: [
                                  "Add ",
                                  (0, n.jsx)(l.Z, {
                                    className: "shrink-0 w-5 h-5",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        });
      }
    },
    93090: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return d;
        },
      });
      var r = t(85893),
        i = t(67294),
        n = t(95591),
        o = t(44717),
        s = t(7313),
        l = t(9281),
        c = t(45332),
        u = t(30658);
      function d(e) {
        var a,
          t = e.setOpen,
          d = e.open,
          m = e.selections,
          h = (0, l.aC)().userInfo,
          p = (0, i.useState)(!1),
          g = p[0],
          f = p[1],
          b = {
            open: d,
            setOpen: t,
            title: "Add to Collection",
            containerStyle:
              "md:max-h-[60vh] md:overflow-auto miniScrollbar overflow-x-show",
            type: "standard",
            showClose: !0,
            showButtons: !1,
          };
        (0, i.useEffect)(
          function () {
            d && 0 === m.total && t(!1);
          },
          [d, m.total, t]
        );
        var y = (0, n.ZP)(
            ""
              .concat(
                "https://www.midjourney.com",
                "/api/app/collections/?user_id="
              )
              .concat(null === h || void 0 === h ? void 0 : h.id)
              .concat(
                1 === m.jobIdsAll.length
                  ? "&job_id=".concat(m.jobIdsAll[0])
                  : ""
              ),
            c.EE
          ).data,
          v = (0, i.useCallback)(
            function (e, a) {
              if (
                m.jobIdsAll.length < 50 ||
                (m.jobIdsAll.length >= 50 &&
                  confirm(
                    "Are you sure you want to add ".concat(
                      m.jobIdsAll.length,
                      " jobs to collection?"
                    )
                  ))
              ) {
                var t = JSON.stringify({
                  collection_id: e,
                  job_ids: m.jobIdsAll,
                });
                fetch(
                  "".concat(
                    "https://www.midjourney.com",
                    "/api/app/collections-jobs/"
                  ),
                  {
                    method: a ? "PUT" : "DELETE",
                    mode: "cors",
                    cache: "default",
                    headers: { "Content-Type": "application/json" },
                    body: t,
                  }
                ).then(function (e) {
                  200 === e.status
                    ? console.log("Added to collection")
                    : console.log("Error adding to collection");
                });
              }
            },
            [m.jobIdsAll]
          );
        return (0, r.jsxs)(u.Z, {
          modalBaseProps: b,
          children: [
            (0, r.jsx)(s.Z, {
              open: g,
              setOpen: f,
              coverIDDefault:
                null === (a = m.jobIdsAll) || void 0 === a ? void 0 : a[0],
              mutateUrl: ""
                .concat(
                  "https://www.midjourney.com",
                  "/api/app/collections/?user_id="
                )
                .concat(null === h || void 0 === h ? void 0 : h.id)
                .concat(
                  1 === m.jobIdsAll.length
                    ? "&job_id=".concat(m.jobIdsAll[0])
                    : ""
                ),
              handleAddToCollection: v,
            }),
            (0, r.jsx)("div", {
              className: "flex flex-col gap-2",
              children: (0, r.jsx)(o.Z, {
                items: y,
                callback: v,
                className: "flex-col w-full gap-4",
                buttonClassName: "w-full",
                showAddButton: !0,
                modalCallback: f,
                includeDescription: !0,
                addButtonPos: "top",
                selectable: !0,
              }),
            }),
          ],
        });
      }
    },
    67492: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return s;
        },
      });
      var r = t(85893),
        i = t(67294),
        n = t(335),
        o = t(45332);
      function s(e) {
        var a = e.callback,
          t = e.initialValue,
          s = e.enabledColor,
          l = e.title,
          c = (0, i.useState)(t || !1),
          u = c[0],
          d = c[1];
        return (0, r.jsxs)(n.r, {
          title: l,
          checked: u,
          onChange: function (e) {
            d(e), a(e);
          },
          className: (0, o.CN)(
            u ? s || "bg-indigo-600" : "bg-uiBlue-600",
            "relative inline-flex h-4 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:.ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          ),
          children: [
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Use setting",
            }),
            (0, r.jsx)("span", {
              "aria-hidden": "true",
              className: (0, o.CN)(
                u ? "translate-x-4" : "translate-x-0",
                "pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              ),
            }),
          ],
        });
      }
    },
    36380: function (e, a, t) {
      t.d(a, {
        Br: function () {
          return w;
        },
        x6: function () {
          return k;
        },
        eQ: function () {
          return x;
        },
        Yl: function () {
          return j;
        },
        hk: function () {
          return N;
        },
      });
      var r = t(34051),
        i = t.n(r),
        n = t(16896),
        o = t(5966),
        s = t(28598),
        l = t(10822),
        c = t(49209),
        u = t(32429),
        d = t(95591),
        m = t(12197),
        h = t(45332);
      function p(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, r = new Array(a); t < a; t++) r[t] = e[t];
        return r;
      }
      function g(e, a, t, r, i, n, o) {
        try {
          var s = e[n](o),
            l = s.value;
        } catch (c) {
          return void t(c);
        }
        s.done ? a(l) : Promise.resolve(l).then(r, i);
      }
      function f(e) {
        return function () {
          var a = this,
            t = arguments;
          return new Promise(function (r, i) {
            var n = e.apply(a, t);
            function o(e) {
              g(n, r, i, o, s, "next", e);
            }
            function s(e) {
              g(n, r, i, o, s, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function b(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      function y(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (a) {
              b(e, a, t[a]);
            });
        }
        return e;
      }
      function v(e, a) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, a) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                i,
                n = [],
                o = !0,
                s = !1;
              try {
                for (
                  t = t.call(e);
                  !(o = (r = t.next()).done) &&
                  (n.push(r.value), !a || n.length !== a);
                  o = !0
                );
              } catch (l) {
                (s = !0), (i = l);
              } finally {
                try {
                  o || null == t.return || t.return();
                } finally {
                  if (s) throw i;
                }
              }
              return n;
            }
          })(e, a) ||
          (function (e, a) {
            if (!e) return;
            if ("string" === typeof e) return p(e, a);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return p(e, a);
          })(e, a) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var w = { timeline: 0, home: 1, settings: 2, info: 3 };
      function k(e) {
        return (
          {
            imagine: {
              label: "imagined",
              icon: null,
              color: "text-blue-600",
              background: "bg-blue-900",
            },
            variation: {
              label: "varied",
              icon: m.jH,
              color: "text-emerald-600",
              background: "bg-emerald-900",
            },
            remix: {
              label: "remixed",
              icon: n.Z,
              color: "text-emerald-600",
              background: "bg-emerald-900",
            },
            remaster: {
              label: "remastered",
              icon: o.Z,
              color: "text-emerald-600",
              background: "bg-emerald-900",
            },
            upscale: {
              label: "upscaled",
              icon: s.Z,
              color: "text-orange-600",
              background: "bg-orange-900",
            },
            "light-upscale": {
              label: "light upscaled",
              icon: l.Z,
              color: "text-orange-600",
              background: "bg-orange-900",
            },
            "max-upscale": {
              label: "max upscaled",
              icon: c.Z,
              color: "text-orange-600",
              background: "bg-orange-900",
            },
            "beta-upscale": {
              label: "beta upscaled",
              icon: u.Z,
              color: "text-orange-600",
              background: "bg-orange-900",
            },
            "v4-upscale": {
              label: "beta upscaled",
              icon: u.Z,
              color: "text-orange-600",
              background: "bg-orange-900",
            },
          }[null === e || void 0 === e ? void 0 : e.replace("-niji", "")] || {}
        );
      }
      var x = (function () {
          var e = f(
            i().mark(function e(a) {
              var t, r, n, o, s;
              return i().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = v(a, 2)),
                        (r = t[0]),
                        (n = t[1]),
                        (e.next = 4),
                        (0, h.Gf)(r, n, !1, !0, !0)
                      );
                    case 4:
                      if (
                        !(s = e.sent).msg &&
                        !(null === (o = s[0]) || void 0 === o ? void 0 : o.msg)
                      ) {
                        e.next = 7;
                        break;
                      }
                      throw new Error(s.msg);
                    case 7:
                      return e.abrupt("return", s);
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        j = function (e) {
          var a = [],
            t = e
              .replaceAll(/<(http.*?)>/g, function (e) {
                return a.push(e.replace("<", "").replace(">", "")), "";
              })
              .replaceAll(/(https?:\/\/.*?\.(?:png|jpg|webp))/g, function (e) {
                return a.push(e), "";
              });
          return { urls: a, newPrompt: t };
        },
        N = function (e, a, t) {
          (0, d.JG)(
            ""
              .concat(
                "https://www.midjourney.com",
                "/api/app/jobs-actions/?job_id="
              )
              .concat(e),
            (function () {
              var e = f(
                i().mark(function e(r) {
                  var n, o;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n =
                              (null === r || void 0 === r
                                ? void 0
                                : r[a - 1]) || {}),
                            (o =
                              (null === n || void 0 === n ? void 0 : n[t]) ||
                              0),
                            e.abrupt(
                              "return",
                              y({}, r, b({}, a - 1, y({}, n, b({}, t, o + 1))))
                            )
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (a) {
                return e.apply(this, arguments);
              };
            })(),
            { revalidate: !1, populateCache: !0 }
          ),
            setTimeout(function () {
              return (0,
              d.JG)("".concat("https://www.midjourney.com", "/api/app/jobs-actions/?job_id=").concat(e));
            }, 500);
        };
    },
    18019: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return te;
        },
      });
      var r = t(85893),
        i = t(67294),
        n = t(11355),
        o = t(49209),
        s = t(51855),
        l = t(49050),
        c = t(12450),
        u = t(8471),
        d = t(44320),
        m = t(38264),
        h = t(24634),
        p = t(91962),
        g = t(20640),
        f = t.n(g),
        b = t(25675),
        y = t(41664),
        v = t(88305),
        w = JSON.parse(
          '["matte painting","35mm photograph","ross tran","craig mullins","thomas ruff","3d concept","unreal engine","wes anderson","realistic materials","wolfgang tillmans","hiroshi yoshida","seb mckinnon","james jean","studio ghibli","4k portrait","greg rutkowski","concept art","beautiful painting","botanical sanctum","dan mumford","junji ito","marc simonetti","james gurney","character concept","brian froud","character design","35mm photo","oil painting","gustave dore","convex mirror","full color","digital art","peter mohrbacher","juergen teller","white background","beautiful portrait","artstation character","gediminas pranckevicius","ernst haeckel","cg society","3d portrait","70mm photograph","albert bierstadt","god rays","soey milk","gustav klimt","shadow play","jon klassen","yoshitaka amano","alchemical illustration","ivan konstantinovich","ivan aivazovsky","professional portrait","hr giger","vintage polaroid","christine choi","mark zuckerberg","yoshikazu yasuhiko","shaun tan","van gogh","arthur rackham","4k photo","digital painting","esao andrews","alexander jansson","rachel ruysch","terese nielsen","santiago caruso","high definition","new york","comic book","black hole","norman rockwell","red ink","thomas kinkade","elon musk","salvador dali","movie poster","album art","lasse hoile","masamune shirow","ivan shishkin","macro photo","ansel adams","digital portrait","alex grey","zdzislaw beksinski","mona lisa","pablo picasso","4k hd","goya beksinski","8k ultrarealistic","simon stalenhag","dark tones","yasutomo oka","cabinet card","aerial view","ilya repin","john berkey","high throne","baroque paintings","realistic 3d","hieronymus bosch","alphonse mucha","liam wong","jean giraud","realistic portrait","portrait art","modern collage","naoto hattori","los angeles","symmetrical portrait","black ink","mm photo","mat collishaw","edmund dulac","annie leibovitz","takashi murakami","night sky","andy warhol","manga illustration","william blake","brutalist architecture","mark ryden","cyanotype painting","eyvind earle","mary blair","eadweard muybridge","landscape art","d character","black background","hd photo","vladimir putin","planet zug","hazy silhouettes","george inness","ralph steadman","raphael lacoste","xerox scan","high resolution","sharp painting","artstation environment","tarot card","michael jackson","dark colors","storm clouds","tony sart","70mm film","kodak ektar","high quality","rebecca guay","donald trump","silent hill","johfra bosschart","dark souls","jack kirby","hayao miyazaki","neon watercolor","old toad","botanical illustration","motion blur","landscape scene","vast landscape","art nouveau","jeff soto","wide angle","120mm photograph","mantle sits","tyler edlin","art deco","photorealistic portrait","nc wyeth","geof darrow","greg rutowski","jeronimosch bosch","steven belledin","clear clingfilm","fine detail","baroque painting","octane engine","mc escher","hard drive","4k image","jacek yerka","claude monet","watercolor painting","blue sky","edward hopper","james turrell","francis bacon","alien civilization","yosemite valley","syd mead","andrew hem","liu xiaodong","pencil drawing","robot eye","film grain","golden sunshine","35mm print","san francisco","darth vader","jakub rozalski","andrew wyeth","artificial intelligence","saul bass","8k 3d","tim burton","moth king","lab bench","arnold bocklin","young woman","alex ross","gregory crewdson","outer space","national geographic","beautiful woman","cyberpunk city","emoji icon","wide shot","virgil finlay","katsuya terada","scientific illustration","ancient temple","sharp teeth","full moon","forest background","app icon","pixel art","joan mitchell","polaroid photo","vintage photo","macro photography","patchwork fields","naoko takeuchi","hiernonymus bosch","full shot","star wars","landscape painting","extreme closeup","jheronimus bosch","35mm portrait","grainy painting","hallucination world","dungeon creatures","jackson pollock","fujifilm superia","quiet city","various gods","maxfield parrish","hiroo isono","kei mieno","board game","mid century","35mm film","generative art","ice cream","4k painting","frank frazetta","yayoi kusama","national park","uhd 4k","anne leibovitz","starry night","marek okon","macro dof","underground neotokyo","space station","liminal space","david hockney","mickey mouse","nan goldin","michael whelan","zhelong xu","sam spratt","shiny finishes","art station","apache helicopter","full body","dave mckean","professional photograph","red eyes","roger dean","glass cube","kilian eng","keanu reeves","modular sculpture","red monochrome","corporate meeting","blue eyes","electron microscope","victo ngai","chris ryniak","egon schiele","japanese wildflowers","liquid physics","whole world","charcoal drawing","dark forest","rene magritte","sonia delaunay","various rusty","mark rothko","fantasy landscape","stanley kubrick","planet earth","edward gorey","beautiful illustration","serene landscape","gustaf tengggren","grim reaper","captivating portrait","ryohei hase","small stars","8k sense","old man","mike mignola","wikimedia commons","hassan massoudy","colorful style","winslow homer","ethereal victorian","harry potter","magical portal","antoni gaudi","sol lewitt","frida kahlo","jesus christ","glass window","aubrey beardsley","super mario","nighttime portrait","pencil sketch","dense fog","50mm bokeh","fantasy art","boris vallejo","chesley bonestell","glitch art","larry elmore","peter gric","side view","macro photograph","comics style","god greets","rainy day","jim henson","digital schematics","expansive midground","raoul ruiz","super resolution","tetsuya nomura","parametric design","jean delville","artstation hq","yoji shinkawa","paul klee","blade runner","time machine","black hair","gustave repin","futuristic city","hd photography","white wall","big eyes","fiery smoke","aurora borealis","cherry blossoms","roy lichtenstein","klimt murakami","thomas scholes","thomas cole","ronald mcdonald","birthday cake","chris foss","comic strip","dark room","eiffel tower","bob ross","ian mcque","metallic touches","cotton candy","tsutomu nihei","torval breg","comic panels","indoor scenery","times square","propaganda poster","old polaroid","beautiful landscape","deep space","alan lee","minimal vector","prime lenses","lorenzo mattotti","tao art","iso texture","space battle","realistic photograph","botanical drawing","fleshy curiosities","white skin","piet mondrian","cave painting","vladimir kush","warwick goble","small figure","white photo","alien planet","material design","fire spinners","8k image","vector art","wojciech siudmak","bruce pennington","chromatic aberration","black cat","neon necromancer","vin diesel","muir woods","tree trunks","william morris","wayne barlowe","jonathan solter","codex seraphinianus","cinematic chiaroscuro","duncan fegredo","white room","black opal","ilya kuvshinov","vhs glitchcore","8k behance","night vale","vilhelm hammershoi","spray paint","photo portrait","nuclear explosion","technical drawing","facebook marketplace","abstract painting","joe biden","realistic photo","king arthur","vintage photograph","lens flare","5mm photograph","glossy gel","hazy silhouette","indoor scene","chris ware","thomas kincade","akira toriyama","graphic novel","john howe","adobe illustrator","renaissance painting","vast field","twin peaks","moldy basement","ralph mcquarrie","max ernst","soft light","medieval art","chris rock","enki bilal","black tar","periodic table","solar system","high detail","software developer","professional photography","charcoal art","baroque portrait","self portrait","female portrait","misty fog","vast fields","blonde hair","cosmic ooze","nervous system","victorian mansions","hd 35mm","tall jars","leonora carrington","henri rousseau","milky way","giant tree","ink drawing","dark fantasy","deviant art","cgsociety hall","ultrawide shot","barack obama","walter schnackenberg","dark background","bone amputee","white photograph","phil mitchell","star trek","wrecks litter","cindy sherman","angelina jolie","john harris","mushroom cloud","marble sculpture","david lynch","james paik","ancient rome","ghibli style","robert crumb","medical illustration","noah bradley","steve jobs","giant robot","century photograph","death star","vibrant colors","homer simpson","young dude","coral reef","maurice sendak","disney artists","visionary art","francisco goya","flat vector","video game","hong kong","kodak portra","neon lights","paul lehr","satomi ikezaqa","filip hodas","kentaro miura","long hair","grey clouds","cute cat","35mm grainy","anime girl","ada lovelace","optical illusion","portrait artstation","secret ruler","sesame street","ancient city","albert einstein","john bauer","mechanical limbs","maneki neko","princess zelda","pierre bonnard","massive walls","public service","photorealistic painting","clay tile","final boss","da vinci","line drawing","rodeo clown","mort drucker","stanley donwood","noriyoshi ohrai","arabic calligraphy","dark cellar","business meeting","adolph gottlieb","grand canyon","scientific drawing","human brain","yellow flowers","frank miller","jungle landscape","flower spirit","paul rand","latent space","cross section","dark clouds","blue eye","35mm kodak","old sage","gerhard richter","british television","f1 car","retro robots","sunny day","masterful direction","john martin","dark side","neon green","real life","golden eldritch","surreal shapes","professional photo","character portrait","famous scene","portrait painting","phoebe bridgers","josef albers","michael kutsche","kevin dart","dark art","mm portrait","leica film","marek oko","crystal ball","jeff bezos","alien invasion","future city","ismail inceoglu","edgar degas","world war","hello kitty","jeff wall","starry sky","black smoke","mandy jurgens","paul laffoley","red paint","pablo amaringo","richard diebenkorn","void warrior","motion movement","geometric art","tite kubo","golden hour","mecha robot","kazimir malevich","black clay","rainy night","8k hd","point perspective","stardew valley","impressionist painting","eyes pierce","dr seuss","dieter rams","high contrast","tidal wave","convex mirrror","beksinski moebius","richard corben","pro film","zac retz","construction paper","voynich manuscript","soft pastel","great wave","pastel colors","top hat","perfect circle","gas station","kids drawing","interior design","fenghua zhong","8k resolution","jc leyendecker","magical realism","northern lights","dark priest","fighter spaceships","35mm selfie","polaroid photograph","data visualization","mary fedden","glitch wallpaper","fernand leger","hyperrealistic 3d","post processing","anton pieck","otto dix","palm trees","woodblock print","3d model","subway map","odilon redon","australian outback","crepuscular rays","musical instrument","artstation cgsociety","iman maleki","michael jordan","glass jar","intricate details","green skin","antonio lopez","graphite pencil","nice macbook","justin gerard","supreme enlightenment","dark horror","character art","abstract art","game magic","desert landscape","cognitive transcendence","neo tokyo","vija celmins","crude oil","sprite sheet","space odyssey","void farmer","beautiful aquarium","emerald city","empty vessel","soft textures","thin lines","extreme weather","old photography","las vegas","eric carle","color palette","stock photo","bald man","richard avedon","beeple bierstadt","human body","realistic painting","aluminum foil","old photograph","paul robertson","jeff koons","hajime sorayama","death metal","black monochrome","garden wonderland","imax signature","cmyk risograph","sharp grain","event horizon","david bowie","oil slick","japanese headlines","cartoon illustration","young man","buzz lightyear","red dots","white vector","freydoon rassouli","japanese art","french chateau","abstract composition","architectural drawing","early 90s","topdown battlemap","travel poster","accurate biblical","australian suburbia","fluid physics","cyberpunk cityscape","finnian macmanus","akihiko yoshida","beautiful 3d","abraham lincoln","suprematism constructivism","pieter bruegel","richard scarry","marilyn monroe","ayami kojima","brick wall","sailor moon","void mage","grocery store","adam sandler","beautiful princess","divine symmetry","charcoal sketch","sweet dreams","full spectrum","brown durand","white dress","nile river","stubble beard","abel ferrera","lemmy kilmister","howard pyle","edvard munch","white rat","lain iwakura","opium smoke","pigment pastel","marble statue","plastic bags","anime style","hd scan","ethereal portrait","jama jurabaev","uncanny valley","anaglyphic synthwave","beautiful eyes","rubber bands","cute art","nicolas cage","dark space","raoul dufy","issey miyake","masaaki yuasa","slavic mythology","arnold engine","alien landscape","white hair","spongebob squarepants","zaha hadid","mad max","feng zhu","lord venosa","metal album","mount fuji","black holes","internal reflection","graphite drawing","geometric pattern","final fantasy","tiny fireflies","bart simpson","isometric view","mountain range","yellow monochrome","henri matisse","cyberpunk elbphilharmonie","male figure","long dress","ornate cake","gurren lagann","jim burns","character study","hot dog","red sea","pascal blanche","blond hair","red hair","pine forest","daft punk","rare plants","medium closeup","good day","tarkovsky film","pirate ship","cosy terraces","kim kardashian","month portrait","endless sheet","john avon","theme devotion","diego rivera","blond prince","bill sienkiewicz","ballet dancer","frank stella","queen elizabeth","cyberpunk renaissance","synthwave fresco","chiaroscuro neon","tip drawing","crystal rooms","circular speaker","marco mazzoni","pierre huyghe","snowy mountain","time i","maximalist illustration","katsuhiro otomo","open field","top view","vintage postcard","fantasy painting","dust particles","damien hirst","spider web","beautiful girl","vr headset","medieval knight","red lines","analog colors","small world","glass bottle","medium shot","corporate logo","arnold schwarzenegger","garlic plant","8k portrait","cinematic effect","cyberpunk noir","colourful flowers","lush flame","japanese mythology","tiny people","celestial space","random shapes","moss overgrowth","deep eyes","shallow depth","photo credit","tomasz strzalkowski","eiichiro oda","lee krasner","great hall","vector illustration","pastel painting","terry richardson","35m photograph","pamela anderson","terrence malick","lucky cat","ridley scott","city street","lucid dream","aerial photograph","neural network","3d character","ocean waves","children book","fashion model","city map","science fiction","green eyes","dmt lowbrow","long shot","theme happiness","doug chiang","steven universe","principia esoterica","robert hooke","chinese dragon","glass bubble","andreas rocha","ancient jerusalem","behance hd","salt print","color explosion","geoff darrow","female figure","circus sideshow","jon ronson","los angles","space ship","george washington","new orleans","profile picture","human eye","alexander mcqueen","body horror","happy people","alien world","ancient egypt","interesting background","cinema 4d","frederick mccubbin","gathering card","snow leopard","cookie monster","art gallery","i look","unknown rusty","dense forest","35mm photography","iridescent transcendence","edward tufte","fairytale forest","professiona portrait","robert capa","annibale siconolfi","tank girl","asian vajrayana","toad king","norman schneider","tom babbey","tv cameras","mezzotint print","isometric art","early morning","ukraine flag","david downton","redwood forest","concrete poetry","magic realism","satoshi kon","video games","mountain landscape","gon na","molten lava","josephine wall","walter crane","realistic closeup","baroque ambrotintype","plant seed","acid trip","james paick","natural habitat","blotter paper","spaghetti monster","alien spaceship","human bodies","70mm extreme","3d ux","pink vapor","icy water","gothic windows","sublime intergalactic","suburban backyard","nature photo","messy hair","matsuri hino","peony flower","nighttime scene","artemisia gentileschi","wlop artgerm","black mass","ambient occlusion","galactic inquisitor","demon cowboy","virtual reality","vitalik buterin","coffee cup","dark flower","clay circle","dc comics","medieval painting","disposable camera","black domes","central park","life painting","i cant","solarpunk city","odd nerdrum","transparent fractal","handsome portrait","portrait photo","iridescent cube","david romero","jony ive","topographic map","lucian freud","giuseppe arcimboldo","photorealistic 3d","hd photograph","joan miro","visual icon","yuko shimizu","taryn simon","old tree","thom yorke","adorable creature","corrupt data","imp empress","herbert draper","miniature painting","stone golem","creepy clown","character designs","classical colonnade","soft texture","loose pile","wooden base","paint chips","valve body","action figures","leonardo davinci","white house","adorable face","goetic demon","goblin mode","baby yoda","red dragon","donald duck","ultra photorealistic","master chief","lebron james","bonsai tree","alexander calder","william kentridge","forest clearing","pen drawing","grand hall","bright colors","gerald brom","duncan trussell","aircraft carrier","manga style","snow storm","phil hale","warhammer 40k","motion traces","dmt trip","david palumbo","porcelain figurine","baroque neoclassical","tom cruise","black dress","celestial sword","morning winter","fantasy style","fine lines","paul cezanne","fashion illustration","kay nielsen","naturalist illustration","red skin","hd portrait","ivan bilibin","realistic depiction","long exposure","arcane magic","peter elson","aaron horkey","jericho fall","senior designer","victorian catalog","dystopian neotokyo","slay belles","gigantic rusty","dark maroon","dan clowes","julie mehretu","patent drawing","electric sheep","dark lord","osamu tezuka","coca cola","incredible detail","small town","grant wood","boris johnson","gustav dore","blue background","bill watterson","cherry blossom","rivers cuomo","neon signs","snoop dogg","ronald reagan","laurie lipton","hamilton morris","silver mylar","fractal art","negative space","eternal revelation","car door","cinematic poster","hendrik kerstens","tourist map","steve ditko","jasper johns","mucha klimt","mobile phone","walt disney","robert mccall","digital illustration","action figure","abstract shapes","eddie mendoza","fantasy hellscape","marlene dumas","4k impressionism","macro lens","sonoran desert","portrait study","red eye","30mm photograph","marianas trench","3d photorealistic","mythological cyclops","wip painting","brown hair","closeup portrait","sea ranch","airbrush gradient","open room","dreadnought starship","vivian meier","muppet puppet","long legs","jeffrey dahmer","hyper realism","red sky","philip guston","yume nikki","man ray","underwater city","wild flowers","cat ears","magic hour","d monster","tentacle wasteland","brothers hildebrandt","ikea instructions","greg hildebrandt","cute puppy","victorian horror","ernst fuchs","dorian electra","cross stitch","70mm photo","sandro botticelli","dollar bill","wheat field","shadow box","moody painting","young empress","minimalist logo","satellite image","william eggleston","uppercase letter","fumito ueda","detroit factory","andreas gursky","giovanni bellini","geometric shapes","train station","grey sky","kev walker","angus mckie","medieval manuscript","white fractals","remedios varo","artstation landscape","ilya k","key visual","gothic architecture","miku hatsune","bald catgirl","wooden house","heavy smoke","beatrix potter","dark light","sagrada familia","complex intricate","museum shot","low res","wood tables","bauhaus poster","century photo","dark chamber","joaquin sorolla","space travel","ryan mcginley","mossy overgrowth","alena aenami","crystal stars","marc chagall","high fantasy","cute robot","oak tree","steve argyle","global illumination","western landscape","musical instruments","front view","gothic cathedral","human skull","nuclear war","small village","don knotts","astral journey","computer screen","black wires","golden age","magical forest","fantasy illustration","ian miller","indoor garden","solar eclipse","i need","big bird","jon rafman","young girl","corn field","hieronymous bosch","aerial photo","shih tzu","louis wain","graphic design","new world","old woman","el greco","samurai warrior","ben wanat","atomic bomb","carl barks","solar panels","hirohiko araki","euan uglow","cymatic patterns","black woman","tiny legs","mamoru oshii","grainy 90s","maltese dog","bulldog head","matt furie","male basemesh","hookah smoke","organic shapes","film roll","tomo matsumoto","beach photo","black dots","young female","sung choi","giant squid","white tiger","werner herzog","black light","giant warrior","white flowers","city skyline","logo design","faceless man","mad scientist","dpi scan","albrecht durer","oil paint","homer winslow","narrow path","fluffy clouds","henry kissinger","manga art","porcelain skin","anaglyphic embodiment","iridescent bubbles","family photo","petri dish","scale model","interdimensional portal","pattern wallpaper","aerial perspective","santa claus","ancient ruins","dense sea","asteroid impact","miniature diorama","judge dredd","death squad","michael hussar","scuba diver","steampunk airship","leather jacket","daniel merriam","rainbow sand","beautiful volumetric","stone masks","indoor environment","platformer game","fleshy woodlouses","jericho collapse","dnd beholder","strawberry skin","velvet mantle","sheet music","art style","35mm color","light rays","katsushika hokusai","large sweater","winter morning","brad pitt","olafur eliasson","peter max","white paper","adventure time","mike tyson","aluminium foil","flower helm","teddy bears","cyberpunk style","golden ratio","cartoon style","neural bricolage","james ensor","tyrannosaurus rex","vr goggles","server room","dark basement","red lips","endless sea","bill gates","horror art","needle work","princess leia","4k photograph","color photograph","cloudy sky","cartoon drawing","clockwork angel","chess board","koi pond","elvis presley","foggy morning","kali yuga","washington dc","red moon","color scheme","julia roberts","james gourney","neural system","alexander girard","charles demuth","handsome man","carbon fiber","monkey head","elden ring","music score","black nose","yellow eyes","old crayon","trent kaniuga","droopy angular","digital goddess","village scene","camera lenses","realistic cg","yohann schepacz","artificial nightmares","colorful shapes","cardboard diorama","dark hair","silver surfer","narrow hole","transcendental object","massive metropolis","medieval room","wall torches","holi festival","dust storm","country road","own place","birthday party","scott radke","photo realism","tv show","chromatic abberation","long tail","instagram selfie","glitchscape pantheon","ashley wood","cyberpunk jungle","social media","red watercolor","midnight portrait","charley harper","scenic view","crayon drawing","henry moore","white photography","bw photography","gas mask","dark knight","abstract watercolor","donkey kong","drone photography","coffee shop","monster truck","blue jay","urban landscape","tarot art","astral plane","pink floyd","massive panther","porcelain figurines","neon glow","avocado chair","disney princess","maximalist logo","neuschwanstein castle","mosh pit","martin talbot","picasso painting","james coleman","human mind","farel dalrymple","shog janit","mountainous landscape","coffee mug","stock image","dark alley","cozy illustration","akira kurosawa","music video","steven spielberg","forest fire","cgsociety artstation","dark night","joyce allan","bad scan","digital artwork","glam rock","human animals","pov photo","green hills","ukrainian flag","overcast day","vast swaths","insects battlefield","juggernaut tower","emery hawkins","tiny arms","erol otis","gothic neotokyo","patrick nagel","milky liquid","kyle maclachlan","joel meyerowitz","hi res","blackwing7 lense","flyers mascot","old masters","genghis khan","world peace","beautiful female","red background","blue hair","stormy ocean","coffee foam","entire universe","white tone","mount rushmore","stuart davis","good night","glass box","luke skywalker","water pool","fire embers","midjourney bot","spiral galaxy","mad magazine","john blanche","human bones","new jersey","crystal shards","arial view","baba yaga","midjourney logo","black cloud","young prince","glass sphere","white stallion","mario klingemann","flash photo","different colors","cosmic horror","plushie sprite","grainy photograph","surreal painting","wayne thiebaud","ruan jia","ice cube","sistine chapel","new zealand","vr spectrograms","vr spectrogram","sans undertale","neal adams","polaroid portrait","hiroya oku","space elevator","circuit board","low contrast","macro shot","getty images","franz kafka","line art","greg rogowski","elvis impersonator","fantasy world","childs drawing","beautiful sunset","apartment building","wim wenders","modern building","royal portrait","central eye","toulouse lautrec","tree bark","alejandra ghersi","magical power","realistic textures","suburban street","runic magic","white shirt","cottingley fairies","angkor wat","persian rug","4k hdr","wooden floor","strange colors","colorful smoke","dead branches","water hose","calarts style","aron wiesenfeld","blue raccoon","concrete museum","tadanori yokoo","dichroic color","nathan spoor","jamie hewlett","gq horror","large trees","pale colors","kinuko craft","colorful string","herman munster","fiery eyes","solid gold","color paper","walter gropius","amber runes","iryna yermolova","cinematography winner","white paint","pink glasses","dust sparkle","high definiion","milton glaser","giacomo balla","taj mahal","roses design","old drawing","ryan church","nuclear winter","office worker","victor brauner","karel thole","donato giancola","big chungus","time travel","glass orb","dog heads","realistic face","empty room","steve harvey","package tape","philippe druillet","medieval castle","james bond","garden overgrowth","mclaren f1","i wonder","car crash","lush forest","boba fett","alien city","fairy deity","light installation","red dress","cedric peyravernay","flower pot","guy fieri","chicago skyline","pixar character","kurt cobain","indiana jones","4k resolution","wide view","neon colors","full view","happy face","1950s photo","masters study","purple hair","power plant","amusement park","fine art","taras shevchenko","cyberpunk robot","light leaks","hyperrealistic glass","albumen print","ukraine colors","legends fanart","prime lense","wooden background","african masks","vintage film","atm machine","narrow keyhole","medieval nook","american gothic","pascal campion","klarens malluta","fleshy heads","dynamic perspective","wartorn forest","active uranium","curiosity cabinet","homestuck troll","suiseki stone","nice design","mckernan 3d","iridescent bubble","wall street","human heart","black armor","vietnam war","military tank","artstation 4k","straight lines","leica photography","lush jungle","tarot cards","tom hanks","small boy","basil gogos","iridescent colors","seamless texture","pastel palette","ww1 battlefield","kazuo oga","character sheet","astral projection","zack snyder","vintage poster","rtx style","box art","toy story","treasure chest","hans baldung","realistic physics","human soul","victorian homes","dark skin","high priest","nuclear reactor","frat bro","vaporwave monkey","yellow roses","jeff simpson","fairy garden","beautiful man","outsider art","i hope","frank gehry","person orgy","christopher nolan","hatsune miku","anakin skywalker","pixar style","horror movie","stranger things","human head","color photo","high priestess","mf doom","alex jones","secret society","sun shines","3d graphics","chess pieces","dark mode","dark eldritch","ink sketch","cats night","heavy metal","tropical beach","hokusai style","watercolor portrait","historical photo","holographic style","spiral staircase","natural beauty","4k landscape","leekof zilkafski","royal courtyard","delicate layers","david cronenberg","white polaroid","tall ears","ink cutouts","tove jansson","color 120mm","richard misrach","cutest turtle","gods concept","dusk winter","low saturation","byzantine icon","zoot suit","gustav gurney","navy admiral","atmospheric perspective","brown dirt","bill murray","concrete room","cyberpunk labyrinth","robert smithson","caterpillar cocoons","car show","chris mould","peter saul","eccentric woman","glen coco","cobblestones stairs","hd footage","tsuneo goda","grainy texture","mammoth head","yousuf karsh","small dots","violent tornado","brain froud","taika waititi","silken shadow","recursive cosmos","woah wow","pinball machine","technical diagram","yellow submarine","american flag","recursive intricacy","distant hills","film noir","young people","cyberpunk landscape","richard nixon","contemporary sculpture","dollar bills","normal map","lee lawrie","green hair","dark elf","hulk hogan","arshile gorky","renaissance portrait","pixar movie","danny devito","ct scan","chief keef","street art","rush hour","funeral moon","mandarin duck","jenga tower","average user","canvas painting","john lennon","black lace","immense pressure","red rose","yoshiyuki tomino","arid desert","hillary clinton","perlin noise","johannes vermeer","dark cave","grand prix","obake karuta","post apocalyptic","asian woman","cyberpunk empress","hiroshi nagai","overhead view","movement motion","peder mork","flower field","nature background","latte art","sound wave","machine learning","neri oxman","city streets","sublime landscape","gouache painting","shiba inu","17th century","alien technology","snowy mountains","tony hawk","margaret thatcher","pink hoodie","court jester","gold mask","gold frame","medieval illustration","grassy field","night time","wild horses","gil elvgren","dense smog","screen print","edward burtynsky","medieval city","fine details","tiny person","science lab","zombie apocalypse","coal miner","bronze sculpture","nils hamm","marie antoinette","dirt path","prismatic halo","religious icon","full set","musical score","red spider","hans holbein","masao saito","quentin tarantino","cute frog","entomological society","red panda","ron walotsky","neoclassical architecture","happy birthday","tall trees","black eyes","artstation volumetric","light dispersion","chaim soutine","manic smile","paul gauguin","barren wilderness","tight grip","simon bisley","closeup photo","scandinavian mythology","tony roberts","female intuition","glass biodomes","flower tattoos","lush gradients","ai yazawa","right look","d bestiary","android lady","memorial names","game characters","mspaint cross","plain paper","coffee beans","lace pattern","realistic symmetry","ron cobb","john hudson","red barn","blue island","beautiful observatory","long time","glass windows","mana potion","analog photo","tv interference","extreme symmetry","summer solstice","bobby chui","clay sculpture","dyson sphere","epic painting","porcelain plate","cybernetic altar","underwater cathedral","realistic 4k","big mac","lowrider magazine","ken sugimori","time magazine","alien creature","rocky mountains","epic battle","purple dragon","golden light","small people","french landscape","river styx","google logo","beautiful photo","ikea instruction","purple smoke","hammerhead shark","yearbook photo","symmetric portrait","zen garden","desolate landscape","gerardo dottori","alberto mielgo","tron legacy","art blocks","concert poster","health potion","lucid dreams","counter strike","mfw i","teenage boy","forest floor","walker evans","alexander hamilton","autumn forest","secret garden","blue lights","fisheye lens","foggy night","small child","key art","dark deco","acrylic painting","eyes enchant","beautiful face","makoto shinkai","abstract geometry","quantum physics","large block","slender man","gold leaf","heat death","god voxel","postage stamp","good time","steven seagal","futuristic cyberpunk","rat king","humanoid robot","daenerys targaryen","wooden table","human form","realistic style","star destroyer","white bg","stan lee","ascii art","comic panel","new yorker","quantum realm","god halo","android jones","mars attacks","king kong","watercolor style","anatomical diagram","double exposure","bahama mama","george condo","modern house","friendly robot","visual illustration","afghan hound","main character","tropical rainforest","polymer clay","endless room","alien jungle","human experiment","van eyck","beautiful goddess","pink liquid","biomechanical brain","bat wings","long platinum","saran wrap","artstation portrait","mid journey","tall ship","zifiskov repin","cat tail","geodesic dome","socialist realism","isamu noguchi","giger goya","faun girl","emperor varis","goddess athena","tatsuyuki tanaka","cyborg yakuza","yellow background","alex katz","joao ruas","cyberpunk citizen","river runs","minimalistic logo","mike winkelmann","colorful dots","yelp photograph","dean ellis","tim hildebrandt","black hat","ginger cat","ancient alien","passive act","epoxy resin","richard serra","cumulonimbus calvus","fantasy realism","ceramic sculpture","charles burns","large head","small cottage","andy goldsworthy","krenz cushart","foggy moor","dungeon curiosities","geometric complexity","sei shonagon","junji murakami","curl noise","nice buttocks","anne hardy","pixar engine","android cyborg","violet planet","ritual items","middle ages","risograph print","qin dynasty","desert garden","old mill","grey desert","kenneth rocafort","yellow quartz","vicious explosions","intricate fog","puddle scenery","own fears","patrick woodruffe","lush pacific","purple pill","cheshire cat","abstract portrait","peter griffin","white backdrop","machine gun","sun rays","water lilies","disco ball","old gods","zero gravity","karol bak","fire portal","amano yoshitaka","swan lake","entire world","suction cups","water color","cat eyes","ukrainian embroidery","matt griffin","wan na","golden retriever","3d watercolor","rebecca sugar","snowy forest","ayahuasca shaman","john cho","control room","accurate angel","space background","botanical drawings","delicious bowl","electric guitar","victorian era","fortune cat","hotel room","gold foil","exotic flowers","white roses","young goddess","yusuke murata","concept artist","justin roiland","lovecore aesthetic","droste effect","liquid mercury","soap bubble","world tree","sand dunes","subway station","opal flesh","glass mural","beautiful city","dark sky","iridescent shadows","ultra hd","vector logo","mm photograph","night market","community housing","human eyes","final form","scientific diagram","motion view","rabbit hole","john tenniel","void cleric","political cartoon","oil pastel","body builder","uhd wallpaper","spiritual explosion","stormy sea","deep sea","steampunk style","street scene","bismuth crystals","mad hatter","giant bagel","yellow hoodie","ink illustration","white towers","mars landscape","wild things","nicholas cage","romance novel","beautiful art","lush rainforest","franklin booth","70mm print","red roses","dark water","miami beach","jeff goldblum","mount everest","glass dome","infinite reflections","resonance protocols","50mm lens","slime mold","architectural sketch","virgil abloh","ample cubbies","small items","white ink","frozen tundra","olive tree","alfaro siqueiros","william turner","cryengine volumetric","crystal cave","modern architecture","toronto skyline","black elegance","wine glass","luxurious parlor","museum display","maurice denis","tom whalen","tapestry design","infinite recursion","mountain top","clyde caldwell","sam kieth","robert delaunay","small crowd","superheroine portrait","dead fish","laden camels","iridescent sword","rainbow prismatic","horror vacui","blue light","moonlight shines","small window","cute eyes","tropical jungle","tensho shubun","cool alien","tiger octopus","raven knight","stray dogs","urban scene","naoki urasawa","saint phalle","hyperreal sculpture","minimal building","poster design","red cat","nic cage","luigi colani","brimstone rains","dystopic neotokyo","winona nelson","gritty cyberpunk","rob gonsalves","axel scheffler","asap rocky","chumash culture","silver dragon","accurate battle","decorative frosting","galactic atlas","oriental carpet","arnold pixar","social interactions","kow yokoyama","future london","technicolor film","air gleam","silicone mold","troll king","big floofer","beautiful garden","occult ruler","polaroid artstation","apple computer","ghibli painting","bernie sanders","japanese print","accurate depiction","vhs player","royal knight","iian mcque","wadim kashin","wendy froud","realistic diorama","bauhaus petroglyphs","castle tower","future level","scifi illustration","gehenna lord","cute creature","night forest","power rangers","track map","royal palace","beautiful thing","art spiegelman","psychedelic painting","amiet cuno","lyubov popova","attack ships","igor morski","great pyramid","distant planet","clear sky","dramatic painting","wallpaper pattern","j hunsung","blue smoke","natalie portman","pastel drawing","wine bottle","photo i","4k potrait","rorschach test","translucent mitochondria","mountain lake","blue skies","synth wave","botanical gardens","city buildings","yin yang","side profile","peter mendelsund","white knight","cowboy bebop","liquid metal","mushroom kingdom","vhs tape","digital collage","japanese garden","cyberpunk street","ai art","quantum entanglement","illya repin","sound waves","ancient talisman","fractal tree","shipping containers","lady gaga","kawaii girl","steampunk city","middle earth","surrealist painting","dark crystal","ludwig wittgenstein","good morning","mortal kombat","georges seurat","small bouquet","chill mood","large flower","creepy textures","faerie realm","space exploration","tank engine","human anatomy","aerial shot","aerial image","japanese castle","beautiful night","haruka shinoji","bengal tiger","industrial design","nightmare portrait","hard surface","user interface","volumetric fog","kodak ektachrome","bamboo forest","marble floor","underground city","jeff easley","digital photograph","cool cats","giant lobster","ninja turtles","tyler hobbs","wide smile","ethereal flower","high school","monkey island","modern style","terry richarson","hiroshi sugimoto","bouncy castle","white helmet","giant mushroom","jean metzinger","wooden spoon","pink mylar","ink painting","jurassic park","ux diagram","super soldier","blue water","gummy bears","cute girl","miquid lagma","beautiful light","frozen lake","pale skin","blue skin","bruno munari","3d headshot","deer antlers","portfolio piece","gold coins","town guard","diverse group","various artists","tokyo kaiju","desert oasis","military convoy","humanoid aliens","bright light","bill waterson","tom thomson","brutalist city","designer dress","hannah minx","jean arp","biblical queen","empty street","anthropomorphic shrimp","birdseye view","old trees","grayscale design","cn tower","wooden attic","transamerica building","mirage horizon","candy chaos","aether dimension","forest glade","concrete pedestal","building design","pencil lines","klaus burgle","elegant curves","red smoke","david lachapelle","microscopic robots","purple skin","jungi ito","keith thompson","martti ahtisaari","light source","hirschfeld drawing","medieval kitchen","distant shot","button moon","hobby photographer","darren bousman","elton john","sergio toppi","mech goddess","8k cgsociety","alice neel","geometric minimalism","raw fordite","wallace shawn","digital cinematography","maritimes fisherman","dense pacific","defense tower","fernanda rizo","long wings","red lights","egyptian painting","mech pilot","metal slug","slithy toves","scifi city","world map","mountain orbs","owl god","pink hair","botanical illustrations","vivid colors","paul signac","jack davis","humanoid figure","hubble image","dorje bellbrook","white borzoi","real photo","childrens book","great height","r crumb","swamp monster","large crowd","martini glass","vietnamese rainforest","nasa photo","red flowers","george lucas","courtyard garden","neighbor totoro","street lamps","bridget riley","feijoada restaurant","swiss alps","radial symmetry","pipilotti rist","geodesic hypercube","cheese sandwich","i stand","rainbow colors","time traveler","cute kitten","mike wazowski","forest landscape","epic landscape","low angle","scott morrison","gothic castle","equirectangular panorama","film poster","ancient greece","christmas tree","i dream","joe rogan","alternate universe","large pile","jesse kanda","anatomical heart","cyberpunk angel","emmanuel lubezki","paul chadeisson","epic sounds","120mm photo","i sleep","ms paint","beautiful colors","hive mind","35mm blurry","harpy eagle","aboriginal art","aerial photography","time crystal","care bears","realistic dreamy","google maps","drone music","family portrait","animal crossing","ancient aliens","eternal dread","kowloon city","british museum","old kid","mt fuji","civil war","silver silk","indicator lights","moon album","swiss chard","peanut butter","john cena","picasso style","street photography","ancient civilization","ink curves","electronic literature","neural networks","funny meme","rave party","new year","puppet craft","fantasy castle","chocolate mold","euphoric moment","michael hutter","puppet show","analog photograph","magic elixirs","stone statue","satoshi nakamoto","upright vacuum","super hero","distant view","ariana grande","platonic solids","burger king","celestial patterns","reality glasses","vitruvian man","new album","colorful flowers","pointy teeth","satellite photo","hot tub","machine elves","big eye","rainbow lorikeet","isometric map","concentric circles","inviting expression","cowboy hat","luna moth","graph paper","orange cat","glass vase","black lava","laura palmer","bowler hat","yerassimos sklavos","flat earth","gustave courbet","dark matter","bill cosby","park bench","bioluminescent jungle","baroque style","william eggelston","joshua tree","fire goddess","death magic","monster trucks","feng shui","tabletop game","elastic bands","dead end","giant mech","jonas wood","4k cgsociety","wise men","minute details","tokyo tower","tardigrade princess","crt console","egon shiele","dramatic hd","retro album","watercolor poster","isometric hyper","eero saarinen","kingdom hearts","tex avery","black lines","abstract 3d","adorable portrait","wedding dress","everlock school","desert flower","ink vegetables","tree trunk","ghost town","white gown","dominique velsen","zeen chin","large tree","satellite view","expansive view","rough seas","decorative sword","tiny particles","pirate hat","red light","praenuntius infiniti","alexander kostetsky","perfect symmetry","angry vampire","usual shoes","philistine temple","chris barnes","bubble chamber","chinese lanterns","human skeleton","empty classroom","nightmare kitchen","lantern slides","jessica rabbit","chris reccardi","couture dress","night alley","venous systems","dramatic palette","decorative waves","johji manabe","axonometric city","orange fire","rural european","ground mist","zombie book","headless dolls","tall woman","stellar genesis","stage illustration","glass portrait","roman mosaic","medieval bestiary","sachin teng","black visors","beksinski junji","barry bostwick","kristina klebe","time past","glass houses","earthy palette","skull makeup","actual photo","portrait conceptart","nuclear nightmare","garlic skin","holographic bubble","modular synthesizer","japanese woodprint","futuristic humanoid","dog god","baroque figures","kraken awakens","torrential rain","convenience store","surrealism zen","giant reality","fish heads","zac ratz","nathan fowkes","fairy tale","pastel colours","thomas jefferson","nicholas roerich","white stripes","magnus carlsen","steve mcfadden","brutalist building","industrial revolution","black metal","light beam","high res","maira kalman","white rabbit","shinto shrine","miniature city","paper texture","steve buscemi","marc davis","jim lee","raymond swanland","fairy lights","pink clouds","kelp forest","extreme detail","tin tin","cornell box","human embodiment","willow tree","dog head","delicious meal","dark cavern","kansas city","reflective water","fat man","dead channel","agnes martin","photograph portrait","marius borgeaud","red glow","aphex twin","dead planet","deep ocean","particle physics","immortal god","fae boy","keith tyson","red lipstick","joseph stalin","heavy storm","small group","zhang zeduan","white portrait","treasure map","punch man","dark tower","ethereal princess","full armor","media collage","god emperor","fractal landscape","sylvanas windrunner","raymond pettibon","apple logo","blue screen","person view","normal rockwell","spinal cord","white dragon","mind blown","dan seagrave","person perspective","colorful hexaflexagon","quantum mechanics","rock concert","baseball game","joan cornella","shintaro kago","peter thiel","max headroom","gold helm","magical seed","finepoint ink","arctic fox","3d landscape","oskar fischinger","artist painting","space shuttle","red liquid","tee shirt","young boy","cat god","porta photograph","surreal album","pickup truck","orange juice","light show","transparent background","shai hulud","happy meal","old televisions","gordon ramsay","human woman","baseball bat","soviet propaganda","white helm","ghibli spirit","fractal god","anatomical drawing","night city","ground beef","red room","zucc dakimakura","anamorphic lens","portrait cute","flower garden","infinite loop","black wall","giant spider","light bulb","cute dog","egg yolk","tokyo city","palm tree","open mouth","neo kyoto","hp lovecraft","red square","settings gear","virgin mary","tiktok influencer","crop circle","lunar surface","real person","bull elk","bayeux tapestry","new way","vibrant color","rural japan","bento box","blue whale","ruth asawa","cyberpunk humanoid","jun kaneko","frigid tundra","shiny silk","brain syringe","old forest","forest grove","accurate reflections","frozen block","saturniidae moths","pink soap","accurate schematics","gelatinous cube","jorg blondig","opalescent mesh","captain haddock","zhongli cyberpunk","black horns","max beckmann","red hoodie","looney tunes","antique photograph","musical notation","red suit","polka dots","white spots","egyptian pharaoh","intense painting","huge eye","photorealistic chiaroscuro","massive explosion","james tissot","tony viramontes","cartoon character","large eye","3d space","heironymus bosch","fashion goddess","ian mccaig","active projects","stormy sky","tiny house","molotov cocktail","supercomputer overgrown","3d scene","rob liefeld","secret library","jonny greenwood","jungle path","vyshyvanka embroidery","peruvian amazon","geometric abstraction","emma watson","red ocean","massive army","foggy cinematic","black moon","massive caravan","blue sunset","robert rauschenberg","elements planet","fashion drawing","sprite emoji","mahou shoujo","fabric physics","oilspill physics","wing pattern","white man","hot dogs","white walls","alien language","alexander rodchenko","kazuhisa kondo","scifi monoliths","black clouds","dnd map","roger rabbit","wheat fields","colin hay","candy explosions","black turquoise","neoclassical painting","electrical wires","dave rapoza","james guthrie","botanical diagram","scrap metal","spaceship ruins","bruce willis","kuang hong","jupiter storm","inventory screen","polaroid fields","paris catacombs","emotive painter","concept character","red clay","attack tokyo","dim candlelight","gold wires","solomons temple","chromatic ambrotype","kandinsky painting","tadahiro uesugi","fuzzy architecture","modern ballet","trap door","geological map","swan goddess","8k octane","tibor nagy","matt kane","marble bench","ultimate warrior","modern temple","grayscale rectilinear","minimalist icon","voodoo priestess","curiosities vitrine","pyramidal platform","hellish doom","fat thick","furniture catalogue","young vampire","theo prins","ron gilbert","ocean background","tom killion","empty polyhedron","pet monster","entomological portrait","i swear","profile portrait","cutaway drawing","taco bell","patent diagram","princess peach","collaborative painting","kupala night","steve mccurry","surreal meme","ancient sculpture","floor plan","light magic","isometric perspective","hugh ferriss","white fur","bauhaus style","motion animation","steph curry","low light","disney movie","nature photography","big ears","human figure","dariusz zawadzki","sharp fangs","water bottle","fighter jet","amulet pendant","richard dadd","comic style","distant mountains","nightmare fuel","blue hues","greek statue","graphic designer","erol otus","grace jones","klein bottle","akira tetsuo","easter bunny","anne hathaway","jazz band","hollow knight","vivid colours","william hogarth","overgrown forest","gold android","cctv footage","colorful painting","ethereal prince","hdr photo","sarah morris","victorian portrait","venice beach","fight club","sharpie marker","roman empire","ballpoint pen","parallel universe","information overload","product shot","cyberpunk monkey","claire hummel","rare flowers","dreamy palace","legendary lawful","demolition derby","riot police","storybook illustration","foggy forest","dynasty warriors","giant robots","fairy princess","gotham city","marcel caram","mountainous land","beautiful day","hotel lobby","emperor palpatine","moon goddess","alex flores","lynd ward","realistic snoopy","gilles beloeil","dimensional space","sherlock holmes","bank account","paul kirchner","jennybird alcantara","jim carrey","exotic roses","vibrant ambrotype","evil eye","scooby doo","geocities website","black roses","lead singer","christopher alexander","late night","beautiful place","handsome squidward","street fighter","subtle smoke","new type","almighty presence","yoshitomo nara","empty space","minimalist painting","beige smoke","cozy library","pink sky","front page","image credit","beautiful photograph","super saiyan","bubble bath","hyperrealistic photograph","font awesome","tomato sauce","unknown artist","cosmic space","plague doctor","byzantine mosaic","cute rabbit","benjamin franklin","metro map","tea party","robot girl","surrealist style","music album","happy family","tyler greebles","rock johnson","portrait photography","stephen king","atomic age","toilet paper","moody style","aztec temple","psychedelic colors","blue hour","plastic bottles","lavender flowers","dirty keyboard","digital photo","fire emoji","light saber","manhattan skyline","blurry memory","holographic foil","ferris wheel","aluminum armor","old photo","medieval tapestry","concrete wall","black marble","white horse","peter bruegel","nyan cat","xerox copy","stephen shore","legendary pokemon","todd schorr","roller coaster","professional art","world ends","snow globe","bone lord","cute monster","french fries","poster art","data center","deep forest","imperial capitol","sanna marin","renaissance knight","quentin massys","lava lamp","colorful illustration","giant frozen","hairless cat","glitchy girlfriend","lazy dog","demon woman","blue sand","pendleton ward","crazy hair","eldritch horror","japanese spirit","super cute","sun rises","internal organs","abstract scene","realistic scary","dumb cute","sharp hd","major scuffle","klimt mucha","human characters","color theory","black suspenders","sea glass","medieval map","retro poster","captivating adventure","tropical reef","spider legs","illustria princess","julie bell","modern logo","crust punk","white resins","incredible hulk","warm glow","ori gersht","card hustler","dinner party","giant moon","warm light","zdzislaw beksinki","3d cityscape","frank webb","pencil style","black suits","scifi hud","ayn rand","kitsune priestess","path opening","dim lake","pulitzer prize","4k post","intricate smoke","david king","daguerreotype portrait","david roberts","dua lipa","moose antlers","bump maps","apple store","synthwave cyberpunk","neuromancer portrait","pointy ears","doll heads","animal masks","milk thistle","cosmic holographic","oskcar fischinger","asaf hanuka","jason edmiston","tim doyle","celestial lab","red poster","cute sphere","flower demoness","yggdrasil tree","jerusalem israel","string puppet","beautiful lady","avatar movie","childhood companion","christian god","stray dog","anatomical poster","wooden masks","jacquard loom","sparse hair","insects fly","emergency lamp","service entrance","red potato","blue dress","arnold renderer","dark expressionism","opera tosca","dark jester","celestial nudibranch","long arms","symmetrical composition","polo shirt","iridescent cloak","kiki smith","low fi","frog king","dramatic background","oil derrick","white helmets","old desk","zbrush 3d","coral illustration","scientific illustrations","geometrical shapes","brothers grimm","strawberry texture","white bed","ancient vase","night artstation","tall girl","kooky eyes","intricate 4k","jpeg artefacts","eats ants","large dots","equirectangular projection","long toes","old electronics","utopian fractal","burnt bones","palatial anteroom","overcast night","adrian smith","rembrandt style","ornate speeches","abigail larson","philosophical picture","battle mage","big watery","graphic watercolor","foggy evening","tiny god","austin powers","immortal hand","caleb worcester","bird skull","cellar door","alchemy lab","pete davidson","soviet union","giant turtle","autumn leaves","yellow smoke","female warrior","original character","laser eyes","fur physics","red void","artistic freedom","arcade machine","forest monk","squid eyes","button eyes","ladders board","snake oil","isometric portrait","kehinde wiley","big beard","roland rat","god altar","esoteric art","black lagoon","teddy roosevelt","isometric city","pixelart style","universe background","eldritch god","black room","abstract architecture","quentin blake","buenos aires","paper mache","vivid color","airbrush painting","deep dream","tall man","minas tirith","ice queen","uhd 8k","buddhist temple","white guy","shadowy figure","rpg game","golden fields","red sun","misty forest","nikola tesla","pac man","joe jusko","cute cartoon","isometric icon","red balloon","tumultuous sea","glory hole","big nose","patron saint","slytherin crest","bloodshot eyes","akira movie","albert namatjira","victor mosquera","photorealistic polaroid","masquerade mask","hypercube geodisic","fashion photography","dmtlsdtryptaminescaline gaze","thomas heatherwick","virgin sacrifice","pizza hut","digital space","traffic jam","cthulhu priestess","soviet catgirl","technical illustration","quantum foam","city landscape","sublime mylar","abstract sculpture","lush garden","galactic collision","zelda breath","panoramic view","jerry seinfeld","oh god","giant octopus","liang mark","solid snake","garden gnome","oil spill","janelle aisaka","marian apparition","young soldiers","35mm closeup","total eclipse","gold grillz","impressionist style","pure machinery","legendary creature","galactic sky","tropical island","business suit","photographic evidence","edward scissorhands","fire elemental","imperial palace","white car","calla lillies","john park","blue skull","food court","swamp thing","mammon machine","rick astley","james eads","gothic church","ugly lowbrow","modern museum","group photo","grand palace","nintendo switch","white sheep","thing i","black waters","vsauce michael","agostino arrivabene","skeleton warrior","visual kei","tall grass","underground map","clay diorama","test tubes","hollow earth","space princess","glass case","cute bunny","venetian mask","ground zero","man sits","buddha statue","skull skull","crimson instinct","charles conder","warrior princess","yoshiyuki sadamoto","t shirt","maid outfit","ivan seal","hobbit house","adorable eyes","microscope image","black water","photorealistic surreal","cosmic flower","mark riddick","frida khalo","john carmack","caustic reflections","medieval jester","silverfish imperatrix","eyeless exoskeletal","military base","computer graphics","angel spirits","white eyes","infinity mirror","steve belledin","roblox avatar","banana chair","intense battle","crystal skull","large desk","justin trudeau","japanese doll","dense jungle","muscular man","don bluth","iprompt https","basketball court","magic portal","small creature","white wolf","cruise ship","carnivorous plant","umberto boccioni","giant human","beginning god","glass sand","card game","cosmic mystery","mountain dew","gary larson","hubble telescope","fish tank","deep jungle","rainy alley","fractal donut","albino cheetah","geometric forms","art studio","block print","mantis shrimp","black wolf","orange mylar","light fog","positive attitude","good results","white poodle","fra angelico","britney spears","cosmic cataclysm","space marine","battery acid","dead body","charming portrait","void beast","fisheye view","beautiful shot","cutest animal","artstation octane","zeng fanzhi","massive coyote","korean countryside","vocal chords","blue monochrome","realistic cgsociety","mysterious gaze","renaissance garden","fujicolor velvia","endless forest","building facade","glass facade","realistic pepe","big buff","shel silverstein","main protagonist","family cartoon","distant fog","lego bricks","tiny girlfriend","pyroclastic bulk","spider man","el lissitzky","sedona arizona","ramen noodles","elderly catgirl","black rock","samurai cat","crystalline goddess","humanoid crocodile","robot eyes","frozen arctic","wedding photos","yellow lines","brian bolland","cgsociety overgrown","handheld fireball","black snake","stainless steel","wood texture","crystal shadows","team fortress","midnight jazz","high cheekbones","lab coat","dark wood","long nails","rembrandt painting","night lit","animal pelts","robotic eye","huge eyes","bourbon street","laurel burch","cyclops princess","yellow stripes","sea goddess","sound barrier","yves tanguy","cyberpunk priestess","biomechanical portal","watercolor collage","rene gruau","human consciousness","fierce expression","diablo ii","cyberpunk neotokyo","john wick","jiangshi nurse","ancient medieval","anime character","heinrich kley","jeffrey smart","void plasma","tennis ball","raw meat","antique copper","red pastel","giant skeleton","dragon scales","silver teapots","aerith gainsborough","couple coworkers","true masterpiece","ultra instinct","8k uhd","headless woman","mind map","photorealistic mystical","green grass","synthwave style","doom slayer","ukrainian steppe","blonde woman","beautiful tree","ghost soldiers","reza afshar","paris street","golden girls","pink alloy","smoke cloud","fibonacci sequence","vast sea","mediterranean sea","alexandre cabanel","tech company","dank tarn","gregor samsa","uneasy dreams","akiyoshi kitaoka","beautiful person","wormhole portal","princess jasmine","bruce lee","tall tower","precious gemstones","cambrian explosion","alvaro castagnet","frightful symmetry","hd photorealism","medium saturation","underwater photography","tropical birds","floral palace","hans bellmer","black paper","bluegrass guitarist","shiny materials","green snakes","blind date","rien poortvliet","human legs","cyberfemale robot","tenebristic impasto","carl spitzweg","ethereal twilight","incorrect portrait","time disappears","hay heads","dave gibbons","shotaro ishinomori","nice imac","windows glow","garlic clove","jade sculpture","wild grass","desolate park","person pov","new dream","red beard","indoor trees","zoom meeting","molten silver","kamala harris","dead birds","string theory","victor moscoso","mechanical titan","vivid hyper","beautiful clouds","teddy ruxpin","cloud city","white smoke","gargi roy","blue lava","rust fantasy","powerful alchemist","chainlink fence","brutalist scifi","mr blobby","digital objects","stewart lee","circle dance","offset lithograph","dungeon run","medieval town","35mm bokeh","pinball machines","isaac levitan","jakub rozalsk","octane pixar","octane renderer","tv studio","judas preist","kerby rosanes","soup dragon","dust cloud","derek yaniger","crystalline stalactites","star shines","disinformation campaign","audubon illustration","classic ballet","brutalist temple","black adder","wild 3d","soviet computer","control console","cyborg wares","late 90s","st vincent","mario bros","tall eye","alien creatures","paint swirls","floppy disks","wladimir putin","nick sousanis","chromatic diffraction","century hall","freight vehicle","spcie melange","lygon street","sea crash","skeleton gloves","paleolithic scenery","martin deschambault","dramatic pose","mechanical sparrow","investment banker","hyperrealistic 4k","vertical lines","sci fi","rusty pipes","fresh pow","amazing detail","alien plants","symbiote head","black suit","lotus flowers","exotic tulips","photorealistic concept","geometric cityscape","hyperrealistic portrait","vintage holga","mecha robots","race car","element cityscape","dark place","masahiro ito","constellation sagittarius","miami vice","lizard person","tall towers","chriss foss","giant planet","lavender field","dystopian world","football player","old lady","stephen gammell","bird skulls","anni albers","irina french","space suit","satellite photography","chocolate milk","ham sandwich","frat bros","poppy flowers","trunkless legs","stone stand","dwayne johnson","clean lines","place i","soviet poster","cowboy beelzebub","setting sun","castle grayskull","i walk","lizard people","pastel sky","joy division","unbearable lightness","quantum tao","modern art","fantasy library","glass house","sad eyes","light refraction","lisa keene","muppet show","morning dew","double helix","starship captain","astral realm","california poppies","artstation hd","dale keown","rainbow smoke","real world","nyc skyscrapers","black cube","portrait photograph","mystical forest","renewable energy","ink dot","giant rat","teen titans","endless dreamscape","city lights","intricate painting","underwater utopia","jean miro","moebius style","dead man","primary colors","lemon demon","rare flower","round shapes","topographical map","promotional poster","vibrant sunrise","nuclear fusion","white clouds","tom wesselmann","gal gadot","cosmic void","dimensional portal","crimson robe","flash photography","old tv","flash photograph","vector space","real human","cyberpunk dystopia","magical girl","ancient statues","snoop dog","polar bears","visual experimentation","gradient descent","starship enterprise","70mm closeup","millennium falcon","small pieces","neil gaiman","3d printer","blue mountains","piano keys","sea shore","perfect art","fresian horse","holographic iridescent","unbelievable portrait","karl marx","human hand","lunar eclipse","polaroid picture","new species","cyberpunk wizard","4k photography","natural history","sewer queen","chuck norris","eldritch duality","computer parts","ancient gods","4k ambrotype","time dilation","underwater temple","information topology","stock market","gordon ramsey","late afternoon","silkscreen print","space needle","macro closeup","mechanical wings","darth maul","hip hop","space whale","mask helmet","pirate princess","diffraction waves","mana neyestani","disco rave","ancient chinese","long shadow","mountain goat","david holz","biology laboratory","cosmic sky","atomic explosion","white cat","marge simpson","brush strokes","diamond cave","early hours","midnight background","landscape photography","youtube thumbnail","product design","dog park","astral goddess","swiss cheese","antonioni film","mri scan","comic illustration","green hoodie","tokyo street","graphics card","jamba juice","neutron star","humpback whale","stage production","pixelart depiction","ready player","1970s album","intricate detail","golden city","beautiful view","los muertos","capital city","watercolor drawing","japanese polaroid","space time","cumulonimbus clouds","charles manson","cat puppets","artistic depiction","white jumpsuit","jimi hendrix","overlook hotel","computer monitor","space ships","fake news","river cuts","masayoshi suto","ice crystals","religious artwork","colorful watercolor","kodachrome photo","cute alien","dark realm","ethereal flowers","giant kaiju","riso print","high speed","abstract landscape","flower crown","thin veils","red desert","bedroom apartment","unique forms","emperor penguin","desktop computer","scifi art","cubist painting","anime boy","dark shadows","modern city","bubble tea","circus tent","chrome metal","f1 crash","endless ice","machu pichu","dark castle","gq magazine","ultra settings","party hat","monster jam","water cascade","ancient tomb","nativity scene","fractal mandelbrot","80s style","beautiful house","gordon freeman","colors everywhere","red flower","ghost woman","foot wave","heavy fog","long beard","translucent bulk","bob marley","massive mandrill","fashion sketch","character model","huang yong","new life","liminal spaces","space age","ice age","cobblestone road","heavens weep","frigid rain","void clingfilm","armin hofmann","vampire lady","4k screenshot","cloud strife","imperial castrum","fluid acrylic","fluffy creature","renaissance castle","blackhole mage","cyberpunk heaven","cute illustration","romantic sublime","blue magpie","35mm photogrpah","cute portrait","fluffy cat","fantasy portrait","franz sedlacek","verdant garden","bright colours","architectural 3d","closeup headshot","goddess kali","angel wings","newborn baby","northern land","century painting","contemporary art","dew drops","physical form","tall leaves","pink flower","ctenophore mesoglea","ron weasley","creepy photo","glass sculpture","modern cartoon","phone case","human understanding","neon oblivion","hills mansion","supreme court","jaina proudmoore","manual art","rat movie","anarchist tiger","dark spirit","kodak 35mm","artstation scene","leonardo dicaprio","ceramic vase","resonant exogenesis","rat fink","alberto giacometti","ceramic tile","ballet dancers","parlor portrait","blue skeleton","beautiful skies","masculine woman","leather armor","shaggy platinum","powerful sounds","bow tie","santa fe","ancient world","medieval style","space stations","explosive background","female medusa","cyberpunk furry","movie star","wedding cake","velvet curtain","asteroid base","purple liquid","takeshi obata","laser beams","impossible architecture","female humanoid","salt flats","vibrant painting","sweet life","beautiful queen","old child","red scarf","ancient village","city girl","black skin","spring flowers","magic wand","different resins","short skirts","street lights","cosmic energy","intricate stereolithography","sahara desert","large axe","mascot gritty","precious stones","fractal smoke","stand user","ukrainian culture","ninja slayer","theme park","impressive details","large backpack","distant army","fiona apple","hilltop 8k","nuclear submarine","johnny bravo","ukrainian woman","small sheperd","silly werewolf","tiny flowers","mars girl","scientific dissection","tone risograph","tadao ando","hubert robert","tony diterlizzi","expansive painting","fine arts","celestial witch","black backdrop","curvy 3d","eerie morgue","sargent cgsociety","red shapes","icy cobwebs","empire strikes","ray harryhausen","venus flytrap","moonlit night","black museum","barren wasteland","drone footage","anatomy drawing","zombie horde","space opera","italo calvino","brazillian beach","baseball bats","giant raspberry","tiny city","richard doyle","moonlight landscape","walnut burl","intricate evocative","skeleton photo","main stronghold","hairy boars","red strings","max bedulenko","coffee cups","underwater portrait","dirty rags","arabic meme","monet painting","skull train","marble vase","nice computer","pocket house","tyron lebon","technical drawings","academy award","aston martin","old pale","alien dashboard","tokio aoyama","rave archive","amber painting","ash cloud","carel willink","glass walls","aleister crowley","huge obese","long beach","color science","leonard cohen","cyber humanoid","desert hill","peter pan","clear water","diffusion tensor","cgsociety 3d","golden liquid","steam window","farewell kiss","frequency spectrum","watercolor poem","35mm ilford","blue fudo","rumiko takahashi","toxic waste","modern sculpture","desert planet","giant diamond","blank piece","kaiju glow","pastel hues","video nasties","kodacolor photograph","black watercolor","surreal artwork","skull mask","rain storm","ferdinand knab","tropical plants","hope artifact","minimal design","film look","guo pei","sentient city","rainbow hues","whimsical painting","goddess eostre","oval portal","conference room","march madness","mathematical equations","donut stargate","purple potato","torus spaceship","philippe caza","light atop","photorealistic ray","red fox","geometric lines","grain texture","computer panels","ernie bushmiller","crocodile skin","violet dots","tube lights","paw patrol","blue accents","es devlin","cream swirls","metal teeth","wild animals","motoko kusanagi","stencil print","tofino beach","insect robot","sad poem","samurai cats","billie eilish","hrd harmony","golden runes","tiny shipwrecks","film strip","white lines","story board","yokai sage","brad delson","suburban neighborhood","quantum dragon","dusts flow","witch frozen","hindenburg disaster","closet shelf","astronomical drawing","wide steppe","baroque banquet","iridescent clouds","geometric crystals","empyrean chalice","medieval tunnel","blobfish head","stefan koidl","cottage cheese","green blazer","earth fire","tobias stranover","dr jekyll","cyanotype illustration","obese pale","patent illustration","1980s detective","ultraman mask","pretty delicious","greek underworld","jojo pose","snowy owl","sadness monstermash","medieval metropolis","cgsociety sketchfab","carl holsoe","watercolor isometric","french ai","ai paint","barclay shaw","green leaf","river thames","pink fur","blue fur","teal dress","amy winehouse","ivan azaizovsky","young queen","scifi megastructure","ocean orbs","yusei uesugi","data landscape","horror painting","magic staff","cosmic blackness","cosmic nebula","alien artifact","humanoid entity","cyberpunk mech","fur coat","cyborg mime","black flame","mouldy bread","female energy","dylan cole","retro scifi","dark star","lone wolf","realistic cinematic","vital energy","eden guard","biblical jerusalem","vintage topps","josan gonzalez","black box","polaroid album","rococo portrait","dark cloud","old photographs","green leaves","kryptochronic dopamite","accurate egyptians","blue face","lemon scent","stone magazine","snake bones","office building","luke sywalk","secret chord","random landscape","sunset sky","jace beleren","cute style","brown cow","computer mouse","religious art","ancient manuscript","existential dread","cold command","dark world","depth map","noir aesthetic","beautiful alien","tiny creatures","central manhattan","penrose tilings","renaissance art","knight rider","richard feynman","farnsworth house","real face","redwood tree","bob eggleton","morning sunlight","androids dream","140mm photograph","soft toys","star dust","primordial soup","blue fire","chaotic mess","goya painting","cumulus clouds","black night","climate crisis","classical architecture","purple flame","anselm kiefer","vivid colour","penrose triangle","black lotus","alex chow","lake berryessa","drum machine","craig thompson","rockwell kent","ishtar stargate","robin williams","delicious plate","chicken nuggets","new logo","mushroom city","satanic mass","ice golem","small man","art photography","albino gorilla","skater girl","vertical symmetry","impasto painting","alphabet soup","red heart","realistic image","cellular automata","mars rover","9mm handgun","rural landscape","pickle rick","dark skies","death note","suburban home","chocolate cake","prison riot","thomas dodd","george tooker","bruh moment","ww1 battle","cereal box","lamborghini aventador","long neck","mute swan","ragtag misfits","chemical reaction","eternal life","lsd trip","perfect example","cloudscape photography","fluorescent lights","telic recursion","clown plumber","white illustration","oh wow","endless field","ralph horsley","beautiful bird","left hand","amazing painting","van gough","red hat","joel simon","satellite imagery","german expressionism","body parts","ocean water","umm kulthum","kylie jenner","computer daemon","surreal portrait","goose girl","googley eyes","great wall","rusty robot","plasma rifle","masterpiece painting","spotless mind","minecraft steve","hawaiian beach","dustin nguyen","dead god","final battle","eldritch garfield","fast food","soap bubbles","paris hilton","red clouds","anime waifu","memphis design","cozy cabin","m i","chocolate factory","sea serpent","background image","arcteryx jacket","synthetic biology","fenway park","electron microscopy","interior photo","forest mountain","cosmic bazaar","greek mythology","rae jepsen","i weave","hindu mythology","glass dust","gold spheres","days pilgrimage","andrew ferez","desert floor","medieval landscape","gary panter","paul blart","mexico city","infinite mirrors","northern territory","sigmund freud","vintage pulp","mega man","neil armstrong","nature woven","sick clouds","extreme macro","beautiful flowers","realistic horrific","dodge viper","high tech","35mm singular","mandelbrot fractal","isometric architectural","ross train","wonder woman","goddess girl","kodachrome film","spherical panorama","planet saturn","volcanic landscape","poor condition","product photo","islamic art","grand piano","tony abbott","intricate pattern","prism sand","old witch","new planet","dreamy lush","cozy room","collective imagination","witch doctor","construction worker","orange sky","old web","han solo","infinite possibilities","norwegian fjord","light ruvurple","red face","hazmat suit","sock puppet","color palettes","morgan freeman","dark alleyway","peter saville","demon lord","tommy wiseau","tooth fairy","captain picard","strange creatures","conceptual art","black ocean","lovecraftian horror","beautiful horse","sword fight","glass shards","4k uhd","greek god","pokedex entry","neo gothic","morning coffee","audrey hepburn","op art","dreamcore landscape","scale models","art critics","chicken tendies","human portrait","steam train","joyful scene","japanese dolls","great library","jedi knight","gold knight","elizabeth holmes","desk lamp","snowy streets","magnetic fields","singapore skyline","mother teresa","surrealism style","ethereal beauty","sunflower field","haruka places","ivan aivazovski","dark chocolate","flowers portrait","photorealistic scene","ralph bakshi","tamura yumi","realistic waluigi","black void","dense mist","roman bust","fujicolor photograph","nintendo game","snow leopards","twin towers","attention economy","white mylar","emerald cathedral","green slime","patrick star","pit bull","ancient ruin","black knight","pulp fiction","electric slime","photorealistic image","big lebowski","tall skyscrapers","turbulent clouds","sea urchin","dramatic sunset","birthday hat","dinner table","dark neon","cyberpunk portrait","baby shark","sea shells","coffee table","small point","solarpunk style","giant cat","summer camp","mechanical goddess","beautiful human","isaac newton","emp gun","gold eyes","cosmos stars","real surfer","claymation portrait","vampire queen","severe cognitohazard","humanoid raven","psychedelic art","mount rainier","apocalyptic wasteland","color woodblock","shepard fairey","blue bubble","ukranian flag","silk scarves","white rose","jungle planet","prehistoric flora","james cameron","fictional animal","throne room","cyberpunk factory","hyacinth macaw","vampire girlfriend","oil pastels","power armor","adolf hitler","turbulent rapids","beautiful scene","muscular bull","marble bust","black swamp","friedensreich hundertwasser","rocky coast","tropical storm","fernando botero","business man","jellyfish mesoglea","long road","soft focus","giant girlfriend","blue sphere","red paper","psychedelic landscape","jeffrey jones","dark immense","pearl dust","tap water","dynamic composition","wooden throne","coral caverns","german romanticism","steve dillon","nuclear bomb","green forest","monte carlo","planet system","crimson carpet","space helmet","nebula sky","letter b","prehistoric rainforest","provocative painting","blue hoodie","prismatic hues","nihei tsutomu","studio photograph","big creature","beautiful flower","bruce wayne","forest scene","orange fog","human character","giant person","sea creatures","crimson cape","pokemon sprite","couple portrait","psychedelic voyage","spirit seeker","brass band","moon surface","beautiful church","gothic style","war cry","indescribable horror","wild flower","milton glazer","fairytale castle","flat design","blue sea","blue dragon","symbolist painter","solar flares","whole life","prairie wildflowers","cyberpunk princess","bronze statue","bright stars","beautiful studio","erin hanson","dark cloak","blue wallpaper","blue room","realistic sketch","moda ganstrakta","letter m","cinematic photograph","katsuji matsumoto","yellow wildflowers","steampunk zeppelin","balding man","bizarre garden","alex colville","benedict cumberbatch","pink background","yellow eye","amigurumi crochet","doug joebert","greaser woman","battle rages","full plate","mechanical bunny","underground cave","blue mushroom","monument valley","jacek yerta","ominous city","hd 8k","futuristic car","algal blooms","topgolf booth","perfect room","repin wlop","red door","minimal logo","black balloons","tatiana maslany","robocop poster","tennis players","ancient castle","codex page","mohrbacher mumford","captivating image","dumpster fire","king david","dada collage","obese man","richard neutra","louise bourgeois","dennis rodman","detail atmosphere","rocks inukshuk","vintage solargraph","acrylic art","concert hall","magical library","beautiful angel","hud screen","mc donalds","palette watercolor","rainbow watercolour","infinity maze","amongst clouds","concrete architecture","repulsive forest","pink robot","reaction diffusion","design drawing","profile pic","lions den","ayahuasca spirit","gig poster","beautiful nun","photorealistic person","christopher walken","simple shapes","ornate opal","solid crystal","tango dancers","right side","ozzy osbourne","koi fish","black cathedral","feminine portrait","silly string","music festival","ronald searle","water droplet","wall tapestry","small house","nuclear apocalypse","toy robot","blue sunrise","pirate king","1960s illustration","ancient biblical","power poles","nearby haystack","open abdomen","armor submechanophobia","neon tokyo","white cup","candy fireworks","painting portrait","neural connections","axonometric view","concrete bunker","prismatic wavy","digital wings","lise deharme","computer circuits","painting scene","daumier caricature","rental place","tennis court","miles johnston","anders zorn","urs fischer","internet code","star chart","atlanta jewelry","tiny tilt","big grin","arthur radebaugh","rock wlop","8k hdr","tony sandoval","bob dylan","lp sleeve","frank auerbach","grandfather clock","sam bosma","subsurface scatter","shiny slimy","garbage cans","mazda rx7","magnificent throne","jon malin","gold chains","john waltrip","red cats","arantza sestayo","amir zand","bob hope","irregular piece","wes andersen","pink tapestry","morning mist","glass monolith","perfect tweet","laminar flow","mechanical garden","vajrayana ritual","greeble physics","toy shop","black transparency","storage room","chess game","yellow labrador","simple illustration","transdimensional entities","record player","david carson","rodney matthews","dry powdery","white warehouse","child drawing","hockey goalie","toe skeleton","theatre performance","cosy cabin","icelandic coast","meteor giraffe","dark structure","daniel clowes","iridescent luminous","red accents","gas generator","milo manara","galaxy sky","ethiopian queen","futuristic demon","marble masonry","lens aberration","john hubley","green freckle","pink fluffy","photo collage","worms crawl","flat plane","multiple colors","clear images","bioluminescent puddle","junji miyazaki","steam evaporates","kalahari desert","golan levin","brain implants","freddy krueger","cubism style","bathroom cabinet","stage performance","blockchain prophet","wesley snipes","moebius strip","word fun","neon background","green orb","sunny windows","dark brown","exotic wood","telescope eyes","baroque polaroid","fire beetle","thin tentacles","male figures","l desk","pearl dots","crochet dress","pink fluorescent","colorful runes","colorful prisms","searchlight beams","air raid","codex map","timber floor","typography number","minimalist silhouettes","transparent crustacean","protective runes","konstantinovich aivazovsky","terrycloth towels","suicidegirl girl","realistic octopus","brothers hildebrand","spiral tower","spiral stairs","lush blossoms","spring dot","bauhaus teapot","deputy hawk","evening star","tv grabs","golden kid","eerie clown","ub iwerks","dieselpunk spanish","charles bukowski","cyberpunk korean","verdant yokai","octane vray","fairytale princess","midcentury house","ancient victorian","biomechanical heart","tiny imperfections","chris riddell","marble structures","vivid vegetation","peter mohrbachery","century drawing","barbarella doll","funky critter","computer room","cabot trail","grand scale","scissor hands","fuji superia","skinny puppy","clive barker","simulation machine","kiss earth","design sketch","shohei otomo","diorama effect","ceramic hand","engineering schematic","empyrean waters","typical dinner","murderous xorgateo","malevolent alien","monster party","fearful symmetry","john collison","patrick collison","eraser drawing","urination christ","tall single","stone path","gorgeous rococo","yusaku kamekura","angelic meatballs","yellow waveform","kiyomizu dera","gold portrait","vivid psychedelic","void orbs","hyperrealistic painting","fractal parallel","industrial basement","crt televisions","action painting","rough sandpaper","lawren harris","rectangular shapes","horizontal row","renaissance fresco","antoni gaud","sad face","celestial angel","monstera leaf","shiny skyscraper","twas brillig","khe sanh","hockey puck","computer game","things i","straight line","nick thornborrow","samurai jack","blue fleece","grass surrealist","chrome mirror","ghibli movie","ancient atlantis","machinegod portal","ancient cthulu","easter island","mysterious smoke","turner painting","technology altar","grumpy cat","human beings","lucky artifact","handsome face","oil refinery","central sea","new movie","paper collage","digital masculinity","vr glasses","collectible 70s","unicorn sword","scary wings","cyberpunk deer","dark tunnel","rca television","high fashion","modigliani painting","graffiti style","pastel portrait","slow motion","warrior woman","majestic churches","large field","darek zabrocki","petit prince","ice sculpture","hyperrealistic image","solar flare","electronic circuit","artstation polaroid","robot dog","old age","isometric avatar","left side","board games","subtle shadows","jazz concert","halo covenant","religious painting","aztec god","pink eyes","pulp magazine","amazon river","abstract pattern","glass texture","overgrown structure","lovecraftian behemoth","huge crowd","lovecraftian disease","tank top","light leak","jazz music","tiger tiger","moth son","purple sky","military tanks","water drops","planet mars","blue flowers","baseball card","large hill","misty morning","psychic sermon","buddhist monk","zombie portrait","psychedelic astronaut","art portrait","cybernetic meadow","cybernetic forest","apple tree","blue glow","perfect face","colorful portrait","battle mech","disney castle","saint peter","starbucks logo","volcanic eruption","anish kapoor","paul delvaux","8k photograph","manhattan skyscraper","oliver jeffers","dark city","hellish landscape","glass skull","fiery crash","symmetrical scary","kessel run","american dystopia","particle accelerator","garlean empire","light waves","giant throne","twilight sky","digital way","keyframe painting","tiki demon","rainy city","35mm decadent","carbon nanotubes","solitary tree","bad trip","david salle","igor verniy","igor kieryluk","esoteric oracle","black man","natural landscape","ghost girl","purple hues","white lion","surreal ethereal","banana peel","front lawn","green mountains","charles schultz","president putin","final portal","primodial soup","lava field","lava rock","new kind","light painting","dreamy rococo","fashion models","scarlet macaw","family reunion","scarlet macaws","space cowboy","rubber duck","charles schulz","george costanza","chess piece","drone view","crescent moon","fat cat","anime artist","gradient background","space rocket","mountain forest","night streets","cute drawing","sankey diagram","vista scenery","twitter logo","big city","starlight princess","american life","diao chan","architectural diagram","lu bu","black oil","orange poppies","studio portrait","leica 8k","orbital paths","cosmic rays","light beams","homeless man","sanctum sanctorum","late evening","selfie i","oldman scourworth","tuomas kuorpi","asteroid shower","black fur","lush rococo","fusion reactor","watercolor sketch","ringo starr","fluffy bed","meteoric dagger","symmetrical acrylic","humanoid alien","marcel duchamp","jan brueghel","magical artifact","company logo","kristoffer zetterstrand","headshot portrait","fractal city","pascale blanche","eternal sunshine","mushroom forest","important thing","thick fog","ice cubes","albrecht altdorfer","alien species","mystic sanctuary","numerai temple","ultimate showdown","toxic masculinity","robert mcginnis","neil cicierega","rpg inventory","flowers landscape","bubble wrap","elf warrior","fractal structures","yellow freesia","colorful shadows","steampunk robot","sublime horse","time flies","contour map","cosmic cat","johannes voss","i craft","own sweet","mystic gate","victorian knight","pale horse","dirty mirror","collective consciousness","adrian tomine","comic books","square root","female knight","night landscape","tile mosaic","dimensional rift","yellow clingfilm","moss garden","granular synthesis","toon shader","black waves","bioluminescent hive","circuit boards","quilt sewn","black dude","red landscape","aquatic life","friday night","wolfgang tillman","cute ghost","interior shot","peter lik","great artist","shadow theater","watercolor map","30mm screenprint","silt wanderer","apollo hasselblad","camelia flowers","energy crystal","surreal field","3d portal","gold hues","blueberry muffin","black lion","lacrosse player","blurry photograph","ladybird book","quartz composer","houston rapper","8k photo","yellow mylar","helen frankenthaler","hk dvd","realistic ray","old men","isometric temple","geometric archways","evening gown","old daughter","astronaut boy","marabou stork","audio spectrogram","romanesco broccoli","gardeners portrait","jaroslaw jasnikowski","beeple mumford","ludwig deutsch","rocket league","winston churchill","white noise","flower princess","iridescent eyes","white logo","blue chair","tree stump","architectural study","voxel art","green glass","photorealistic photo","forest path","kenneth noland","coral elementals","thick texture","blue cube","shiny eyes","misty mountains","humanoid god","roman sculpture","necromancer princess","cartoon cat","demonic entity","black jacket","atlantis cityscape","absolute unit","graphic style","alien ship","sunken statue","mayan temple","cyberpunk temple","beautiful forest","ocean planet","dark storm","new religion","delicious cake","ito junji","garden seed","weirdcore creature","evocative painting","wizard tower","cereal bowl","alien emoji","julius caesar","oprah winfrey","dream world","large plants","fantasy forest","magnetic transduction","bad day","miyazaki style","alien happiness","uses cgi","fever dream","ross tan","forest spirit","sushi roll","electrical storm","dim sunset","sun icon","french revolution","happy cat","aeon flux","tshirt design","friedrich nietzsche","grainy film","scornful eyes","blue triangle","eugene delacroix","diane arbus","new color","vast ocean","microscopic image","white drawing","paparazzi photo","urban design","goblin shark","concrete floor","julia fox","futuristic house","theatre play","dirty floor","moonlit sky","large windows","fashion show","dark energy","wood floor","oak trees","cute baby","product image","tucker carlson","positive energy","victorian house","black poodle","true nature","disposable photograph","red robes","stencil art","side cartoon","spiral vortex","lava flow","average alien","samus aran","reptilian fetus","warm coffee","lit gallery","robot head","vinyl record","circus clown","alternate reality","futuristic landscape","official poster","trash style","lime green","white truck","michael mann","pacific ocean","freddy kruger","fluid dynamics","strange island","perfect sphere","heavy rain","richard prince","mythical creatures","bay area","bright neon","theme flame","death valley","imaginary landscape","platinum hair","technological singularity","instagram influencer","visual illusion","black dog","factory workers","assembly line","hot springs","beautiful mother","sony walkman","crime scene","yellow circle","sumo wrestler","anime girls","contest winner","sueng hoon","jpeg artifacts","slow loris","cell phone","stormy day","english countryside","video projection","subatomic particles","infinite space","celestial dragon","high heels","wooden desk","torii gate","franz marc","horrific darkness","marker drawing","field backdrop","occult symbols","compact camera","crystal butterflies","galah bird","galapagos islands","black velvet","perfect view","stealthy cyberflauncher","riverside village","fire mage","macro view","hail storm","tennis racket","bunny costumes","joy cyphers","ancient gate","orange skin","space nebula","giant wave","mary poppins","deep focus","radio towers","steampunk cathedral","museum photograph","cyberpunk demon","colossal temple","misty rainforest","john malkovich","placid terror","steel buildings","endless fog","beautiful mermaid","blackhole sword","accurate schematic","palette landscape","bufo alvario","manual artwork","red wine","black grey","tjalf sparnaay","ninja girlfriend","big wings","dawn mist","cuckoo clock","chicken nugget","angry jester","jay leno","desperate king","clip art","pink dress","scientific progress","human fighter","remote control","white dog","ray trace","computer chips","tannhauser gate","creepy portrait","cold water","coral caves","black plant","candid photograph","water droplets","coral castles","japanese temple","ceramic models","scifi painting","stephen bliss","ux interface","everyday life","goat mask","creepy horror","designers republic","grape soda","cobalt mylar","dark attic","captain harlock","vogue magazine","giant heroic","original sin","vaporwave portrait","intricate turbulence","velvet painting","tabloid article","mechanical robot","dramatic sky","50mm portrait","eldritch empress","translucent mesoglea","human arms","bald guy","middle finger","large tusks","sigourney weaver","terracotta tile","charlie harper","octopus tentacles","kufic script","mother circa","rostyslav zagornov","distant future","robert pattinson","sea creature","jotaro kujo","figure skater","taciturn bastion","surrealism mascot","research lab","huge mouth","tetsuo hara","9mm handguns","wizard hat","mario testino","porcelain silk","dirty messy","kaiju battle","vec3 p","int i","honky tonk","own accord","disney land","mario kart","spider priestess","fractal robes","fullbody d","realistic cinema4d","fullbody portrait","brooklyn bridge","hd movie","d gynosphinx","scary stories","bil donovan","wrestler catgirl","wild mane","1950s illustration","ziggy stardust","ominous light","ethereal realm","lion king","promotional material","cool armor","happy day","john stephens","physical capacities","systems supports","infinite wisdom","tank battle","luxembourg gardens","carl larsson","black heart","colorful drawing","4k 3d","purple fog","superresolution stereolithography","tintype photograph","tristan harris","lens distortion","tatsumaki tetsuo","movie akira","karel appel","green ocean","stone tower","glass prism","yellow flower","storm cloud","black liquid","alien humanoids","shadow puppets","sad pepe","lotus pond","colorful photo","purple energy","moon landscape","desert storm","hiroaki fukuda","matte style","multiple exposure","greek gods","world burns","caspian sea","ethereal dreams","magic mushrooms","smiths album","headless horseman","incredible piece","incredible details","violet hair","rainbow watercolor","intergalactic nautilus","puff pastry","ukrainian soldier","kris kuksi","glass heart","zombie friends","kurtis rykovich","tall cliff","cosmic sun","film footage","monster compendium","cyborg mandrill","retro illustration","halloween city","goblin pirate","big ben","ukraine sings","celestial dominion","erratic mage","kandinsky art","paris rooftops","kubla khan","burnt forest","singular eye","hildebrandt brothers","grainy print","paul sheldon","glow worms","modernist house","dominik mayer","rilakkuma plushie","tarp hoodie","saul leiter","raven wings","iain mccaig","renaissance paintings","hajime yatate","animalistic eye","milk carton","kawaii character","modular needle","adorable dragon","small wings","frame animation","technology overwhelms","homemade amateur","travel photo","cyberpunk cyborg","paul giger","bank note","domestic breed","giant mecha","platform game","tower bridge","war propaganda","ayahuasca vision","lot goddess","photoreal painting","dragon ball","cgsociety portrait","sapien ancestor","eiko ishioka","rainbow clouds","intelligent cgsociety","smaug headshot","don maitz","hagia sophia","fierce eyes","milk man","spectral caustics","embers hover","gorgeous sunrise","cherry trees","old robot","triforce emblem","grainy photo","extinction rebellion","hazy shadows","mother earth","google earth","rural aesthetic","iconic view","white sands","white table","white sheet","dario argento","blue theme","ancient babylon","jazz musicians","small city","halo crown","realistic subsurface","vintage paper","color pencil","sun goddess","nice day","bernie wrightson","busy street","blue escarpment","gopro photo","medusa magicka","paul rudd","risograph poster","prime bodhisattva","robot overgrown","watercolor monochrome","figure 1a","wall painting","utopian city","bluebell flowers","space madness","ken price","poster print","human nervous","lucha libre","camp fire","gediminas prackevicius","figeater beetles","crt screens","hayao mizazaki","marble masks","power flower","blockbuster store","baby embryo","cybernetic biomech","tree branches","craig mullen","white photoillustration","alien meme","purple atmosphere","highres permutation","renaissance style","grzegorz domaradzki","things past","heather theurer","trippy art","chest hair","generative bricolage","brutalist style","miles davis","sony a9","deciduous trees","islamic pattern","misty forms","caterpillar curiosities","root limbs","grand buffet","unexpected colors","modern home","goro fujita","spiders web","smoke monster","peter phillips","radiohead album","sharp 8k","clown makeup","sageness fire","high street","barry chuckle","snowy landscape","retail store","space invaders","daguerrotype portrait","angler fish","supermarket shelves","doctor eggman","person shooter","cheese fondue","hedge maze","jet plane","dark resonant","unicorn horn","apple imac","barug zoo","glass tank","80s aesthetic","stone ruins","opium den","frozen mind","wooden stand","skull head","tlingit art","particle dust","frozen bodies","david hasselhoff","good friends","theatre installation","gloomy clouds","black glasses","robin hood","old barn","burial shroud","spiritual journey","venn diagram","black inferno","silly putty","warrior couple","enormous warrior","band jacket","henry fuseli","pink unicorn","black mold","thick paint","old map","russian tank","translucent amber","dolls houses","blue blob","empty lab","gallon toter","french flag","colin christian","chaotic universe","dariusz zawadski","winter scene","realistic tears","blue pill","gold balloons","photograph landscape","eric stanton","portrait colorless","wim crouwel","luxurious palace","pink cloud","pickle chungus","liminal web","ocean photo","visio mystica","white porcelain","spiny cactus","georg baselitz","tin type","thermal image","tennis shadows","don draper","marty krofft","3d object","city scape","decal sheet","game controller","alyssa monks","books everywhere","sofia vergara","fashion design","realistic skin","frick gardens","organic matter","haruyo morita","dennis wojtkiewicz","grid view","bill yates","dark gelatinous","robot drawing","cone cap","minecraft style","romero britto","puppy head","arcane fantasy","jesse treece","plasma core","fluffy beast","amber sludge","pirate lass","cyberpunk version","electric girl","indra net","psychedelic hive","white sketch","roger deakins","greasy clangers","david shrigley","rock garden","ethereal dmt","summer day","golden harp","intricate ideogram","low quality","robins egg","birthday candles","piotr jablonski","fieldstation studio","tapestry painting","smoky room","phillipe druillet","stone floor","impressionist pointillism","human rooster","super villain","dramatic skies","moth legs","colorful spacepilots","cute owl","brad wright","photorealistic texture","electric shavers","queen vic","watercolor cosmological","cityscape background","mobius strip","black amber","cable management","dusk background","gold roll","digital logo","makoto kobayashi","microsoft moviemaker","missiles tower","young scrapper","3d asset","jacket patch","mcdonalds restaurant","shinji aramaki","cream tornado","enormous celestial","orange theory","orange watercolor","retro photo","galaxy bug","phantom airship","chin beard","paper print","ivan albright","voltron universe","karuta shiki","water genasi","antique map","lit cubicle","mcdonalds drivethru","smoke cube","iridescent glory","harrison bergeron","pixar film","josh hernandez","jeff cannata","national flag","agent cooper","marie taillefer","cigarette smoke","taupe background","rob liefield","unusual curiosities","magical elixirs","empty stage","fremen fedaykin","purple demon","dusty photograph","curiosity vitrine","gallery wall","large fluffy","dog knights","canyon landscape","thick squirts","mysterious design","royal guardian","butoh dance","small foliage","august vilella","lush cloud","photorealistic horror","hasselblad h6d","small bits","magic garment","symmetrical robot","henri rosseau","empty man","white egg","steampunk outfit","caillebout painting","tony allain","horizontal color","cabernet wine","barbarella dolls","luc besson","rocket launch","doll girl","light flare","traditional design","fairy wings","nasa gloves","space photorealistic","medieval meadows","peasants huts","parallel universes","blue centipede","mountain turning","serene oceanscape","martian colony","faceless commuters","juniper bonsai","concrete pot","iridescent brain","epic backdrop","allen williams","nat friedman","celestial ruins","toon town","space fortress","nike airmax","water tornado","mouse mice","brown gradient","evil fortress","tabletop dice","punch cartoon","tapaculo cyberbird","giovanni stradano","i notice","i quicken","extreme space","ancient friends","taylor hawkins","algorithmic art","landscape mountains","colorful collage","vegan conference","camera crew","tj foo","spherical petri","cosmic union","red spots","cathedral building","multidimensional fire","furry fluffy","extra eyes","purple clouds","desert sunset","architectural eyesore","hindu god","wlop argerm","purple robes","red sari","modern waterfront","deep reddish","cool guy","giant monster","silver armor","alien worlds","shigeru mizuki","yuppie werewolf","navy seal","futures past","lightsaber duel","ritual sacrifice","juan cena","sand dune","magical world","rainbow oil","black sludge","dark portrait","neon lit","hotline miami","future past","ghost riders","professional headshot","hyperbolic spacetime","grassy plains","buildable playset","lynda barry","ganesha god","strong colors","apple computers","bearskin cape","mountain ladnscape","long cape","foggy meadow","pipe organ","red car","brutalist room","antique skull","street corner","purple moon","water drop","dmt realm","o earth","james clyne","lunch lady","vast nebula","surrealist subversion","zalgo text","warm sands","neotokyo overtaken","doom doomslayer","ancient forest","insect warriors","alien jewelry","gold feathers","distant stars","i desire","steampunk cyberpunk","desert road","chinese ink","demon slayer","cafe racer","dream house","id card","rock climbers","mischievous cat","various sizes","gorgeous painting","distant mech","beautiful mushroom","white lilies","foggy day","futuristic spacecraft","botanical garden","rare pepe","large forest","lovecraftian hellscape","profile view","earnst haeckel","cute creatures","colossal wreck","level sands","wet specimens","black skull","creepy museum","large city","arabian nights","matte portrait","paul putner","fan ho","gold armor","graham ingels","lovecraft style","glass eyes","purple light","hot cup","flow field","ingmar bergman","architectural plan","black gold","human hands","studio photography","matt collishaw","rodel gonzalez","slot machines","pine trees","real skin","small island","luck artifact","watercolor landscape","evening landscape","art installation","fraiser crane","physics simulation","modular synth","optical effect","medieval fortress","ultra high","spiritual enlightenment","konstantin savitsky","bojack horseman","laser gun","finger nails","night garden","old paper","ettore sottsass","gerhard munthe","bunny rabbit","mystical temple","golden dragon","blue moon","pink sunset","grainy illustration","cyberpunk anime","star explode","clint eastwood","red cloud","black space","sports coach","god king","cyberpunk motherbox","flower petals","purple flower","sin city","waterfall landscape","beauford delaney","misty night","anato finnstark","ari gibson","eternal power","toilet bowl","symmetrical woman","anton semenov","victorian lady","alfons mucha","shamanic symbology","orthodox priest","schematic drawings","mont fuji","sylvain sarrailh","clear day","scenic landscape","impossible object","scrap yard","arcane ritual","valentines day","symmetrical painting","posh vaporwave","soylent green","lone girl","jim davis","prismatic thread","subway tunnels","tilda swinton","gta v","perfect alien","black lodge","monty python","garden courtyard","large eyes","4d chess","perfect day","ethereal forest","futuristic cityscape","marcel marceau","windows xp","korean jesus","timothee chalamet","mc hammer","cyberpunk tech","charcoal portrait","incredible attention","luis royo","vampire girl","saarinen design","vhs footage","artillery fire","computer programmer","endless rows","psychedelic portrait","childhood home","infinite life","parental wisdom","frat house","cartoon portrait","short arms","reflective lake","angkor watt","yohichi nishikawa","infinite grains","messy room","dyson vacuum","mechanical angels","mm selfie","fire magic","sick beats","ideal quintessential","exemplar embodiment","atlas moth","renoir painting","gustav courbet","construction site","white marble","big tech","seamless wallpaper","alien woman","edouard manet","larry david","vaporwave landscape","point lobos","late sunset","nabil elderkin","porcelain doll","feedback loop","giant dragon","ancient tree","genshin impact","cyberpunk metropolis","artistic portrait","angela merkel","seamless pattern","thomas gainsborough","justin bieber","emilia clarke","asian calligraphy","guan yu","cursive script","eukaryotic organism","geometric flowers","flower collage","big brother","realistic photography","colour photograph","crt screen","colorful lights","red planet","cyberpunk forest","couple hikers","white bubble","abstract artwork","art print","low depth","aza raskin","katamari damacy","parallel lines","tropical ocean","nuclear wasteland","coma afterward","floral pattern","green eggs","eternal cycle","saul goodman","coldplay concert","moonlit cemetery","doge coin","massive cleft","squid game","seattle skyline","industrial city","colorful paper","vaporwave style","disco elysium","jeepers creepers","romantic comedy","arcane lighthouse","lieutenant spock","eldritch gods","superresolution demo","magical sword","new form","mysterious portrait","cosmic wonder","canova depth","hey man","human knight","pure darkness","austin osman","skeleton cowboy","discord logo","fan art","hr geiger","child prodigy","profound wisdom","police sketch","ethereal alien","horror dvd","mythical court","shadows cast","castle courtyard","dance party","death eaters","nether portal","human knowledge","silvery marmoset","cthulhu belts","becky sloan","beautiful nature","medieval procession","blue roses","seth rogan","bloomberg terminal","seb niark1","nike logo","mfw im","black bg","crystal palace","wes wilson","human warrior","martha stewart","opulent regalia","expressionist painting","herbal magic","arcane medicine","memory palace","mayor mccheese","endless spiral","barry mcgee","jason fabok","own face","white clingfilm","sound system","realistic shades","crest toothpaste","yellow forest","hot spring","evolutionary tree","tuk tuk","vast kingdom","michelangelo sculpture","acid rain","cyberpunk kingdom","infinite jest","rick sanchez","nanobot swarm","blue period","powerpuff girls","orange mesh","stadium audience","linear algebra","night circa","community garden","dutch angle","computer keyboard","oscar ramos","ceremonial japan","gathering art","extreme perspective","scarlett johansson","i stay","menu icon","entire planet","landscape photo","ruby sun","dewdrops drops","yoshihiko tezuka","cataclysmic fusion","plotter paper","ethereal angel","polaroid 1970s","ferrari testarossa","silicon valley","empty void","london skyline","erik bulatov","volcano range","millions pool","recursive painting","blue dot","cat fur","highway system","squid puppets","window pane","3d isometric","underwater jungle","kung fu","marble greek","hard time","lady bug","professional illustration","nature creates","bad tbh","architectural concept","cyberpunk meadow","bald eagle","isometric landscape","boyfriend meme","gameboy color","i forgot","old city","hedge fund","colorful explosion","jan parker","prismatic rainbow","mechanical drawing","japanese girl","pretty girl","gold helmet","memory lane","jack nicholson","fantasy creature","escher painting","galactic empire","old town","new delights","political compass","pokemon card","tonights dinner","cyberpunk painting","za warudo","airport terminal","london street","kodachrome photograph","string quartet","winter climate","pigs fly","space whales","glass globe","black stripes","potential compensation","wildflower field","takehiko inoue","majestic dragon","stadium circa","neon particles","dirty basement","eric cartman","medieval king","hello world","white painting","carl jung","captain kirk","computer programs","different planets","pain harold","circulatory system","rocket launchers","cyclical thoughts","faint face","victorian mansion","bright eyes","pineapple pizza","circular portal","big sur","tech workers","aunt iroh","henry george","old painting","space alien","simon stahlenhag","goosisklewasw beksinkkdisi","uncle sam","greyhound race","infinite library","rainbow road","fractal pattern","glad i","blue couch","blue jeans","stormy night","planet neptune","long table","medieval knights","panda ears","fuji mountain","robot brain","icon svg","entire face","sad expression","arcane energy","surveillance footage","dont hug","hot sauce","business card","japanese dvd","rubix cube","waterbear tardigrade","polaroid camera","rainy streets","tanaka explores","night i","special effects","happy apple","faceapp man","chicken wings","satellite dish","forest druid","happy dog","gold leaves","white tshirt","undisputed master","black seas","football field","baby elephant","vector icon","cyberpunk syntax","tree roots","tileable texture","css art","tony soprano","human evolution","red circle","theme fantasy","cubist style","disney style","beautiful sunrise","white van","angry robot","ancient mayan","michelangelo painting","pop art","i drink","ancient scroll","boston celtics","fire hydrant","earth globe","antikythera mechanism","beer bottles","surreal singular","woody allen","downward spiral","clockwork demon","fractal jellyfish","i stare","mtg art","solid matter","mech warrior","intermediary essence","silver coin","lens style","kobe bryant","arcade game","instagram polaroid","kentucky derby","green apple","xerox photocopy","solid background","russian constructivism","elemental plane","dark brutalism","garden wall","man cave","william wegman","cozy software","golden skull","black cape","gerasimos sklavos","sepia photograph","realistic sonic","dark queen","red tears","architectural digest","white cream","mount olympus","3d blender","gold mylar","white landscape","blue lines","grand altar","prime pathfidner","medium format","dan witz","andromeda galaxy","tortoise shell","candy crush","new age","black jaguar","hospital room","fiery sunset","barn owl","photobooth snapshot","shark attack","own mind","orange flowers","ancient egyptians","life support","strange attractor","disco diffusion","conservative republican","good idea","human life","shiny slime","ancient landscape","art museum","winter landscape","mountain goats","alien abduction","english garden","beautiful scenery","photorealistic watercolor","schematic diagram","young child","komodo dragon","laptop computer","ash thorp","file size","mime type","macro image","abyss gazes","aura cyberquartz","movie scene","bitcoin mine","ancient greek","kitchen table","deepsea monsters","metal gear","art painting","deep dreams","eternal night","vast expanse","image i","cybernetic organism","underwater kingdom","glass cheekbones","eric zemmour","mystical tower","imperial russia","purple skull","cgsociety concept","ancient map","swiss guard","dio brando","bunraku headshot","maple leaves","photo studio","fish eye","armillary sphere","endless cycle","lightborn perfection","tenement windowsill","gigantic creepy","digital landscape","black ducati","deep woods","photorealistic sculpture","faisal laibi","tarkovsky movie","cyberpop princess","midnight blues","giant statue","text editor","cyberpunk soldier","mysterious psychopomp","dmt god","floor removes","hindu temple","chef girlfriend","fractal energies","andrew robinson","john oates","ashcan style","indian temple","jon arbuckle","cyberpunk horror","white orchid","book illustration","giant axolotl","fantasy realm","blue lobster","alien ocean","imperial lord","black form","dark hallway","prince moomin","bizarro superman","afghan hounds","huge stacks","arctic sea","surreal image","yoshimata amano","item icon","board book","sega genesis","death machine","machine guns","mystical sword","latex suit","void thief","iridescent glass","crt tv","yalda younes","meadow kingdom","inner city","silver clingfilm","malick film","big horns","isometric cubes","human flesh","dead eyes","clown juice","beautiful picture","uss enterprise","black lizard","people i","amulet pendent","supreme streetwear","regular stages","dryad girlfriend","short hair","surrealism lisa","colossal gateway","notre dame","familiar shadow","instagram filter","queen bee","skeleton jedi","ito jakuchu","cyril rolando","dream prophet","dragons monster","pizza box","simple unicode","baroque curls","pixelart landscape","snake tail","red poppies","lego art","beautiful pale","cute image","blue flame","disney world","silver wave","ink moon","ashen sun","conveyor belt","radiant heat","protective clothing","lone warrior","sketch artwork","pink fumes","fishnet stockings","captivating photo","bud vase","blue plant","supreme leader","mental illness","pepe frog","bizarre graphic","coral reefs","malachite mylar","opal gemstones","british columbia","ocean view","candy sediments","artillery barrage","comprehensible cloak","resonant protocols","nacreous skies","miley cyrus","desolate frozen","3d cg","kodak c200","gwyneth paltrow","poutine mage","tiny cute","4k model","purple tulip","white milk","artificial superintelligence","random color","inner tangent","shape closes","amazing photo","green plants","anduin wrynn","magenta clingfilm","vr workbench","mechanical keyboard","kiwi cowgirl","rhinestone collar","placid lake","time vortex","large seagull","candid portrait","charming princess","job interview","abstract persian","tech bro","camille corot","plant woman","tiny car","egyptian god","orange hair","tokyo skyline","celestial fae","ethereal plane","mead schaeffer","iphone case","colorful photograph","hexagon fractals","stern expression","concept portrait","psychedelic tiger","artstation 3d","katy perry","star catgirl","lilac garden","street lamp","panel webcomic","huge muscles","odd parents","divination hurricane","gustaf tenggren","colorful game","emotional portrait","imma cap","humanoid tongue","obsidian stone","scientific document","forest canopy","hd outdoor","various biofilms","victorian greenhouse","beautiful valley","generative abstract","game consoles","human planet","nuclear weapons","minimalistic design","16k hdr","cheeky grin","dark japanese","cyborg bull","charles blackman","princess bride","drag queen","prometheus engineers","retrofuture armor","huge cliffs","steampunk robots","plastic toys","skinny jeans","special forces","jhonen vasquez","vibrant art","fractal eyes","electron micrograph","beautiful mouth","massive tusks","pirate lady","ancient robots","banner image","new dawn","pear tree","retrowave polaroid","smoke plumes","olive oil","moon base","fancy hat","space portal","soccer ball","crazy world","steampunk furry","modern tapestry","psychedelic illusion","wooden playground","colorful butterflies","conrad martens","samurai stalks","plant universe","i dare","century netherlands","historical photograph","wool sweater","benjamin sack","topaz mylar","crystal vase","disneyland map","abstract logo","wild boar","hardwood floor","spatial interactions","thesis explores","physical dynamics","significant representations","external objects","transformative tools","geometric garden","priestess garments","wise ones","tank parts","resonant army","infinite radiant","orchestral piece","fire queen","alien spacecraft","doja cat","hubble ultra","foam glaze","tech blissful","maximum entropy","red cape","ai artist","jenny saville","intricate clarity","mystical shaman","spring meadow","filippino lippi","fractal goddess","summertime sadness","resin sculpture","overgrown garden","cell phones","yellow heart","white light","amazon rainforest","underwater world","frederic remington","scifi book","sheet metal","psychedelic fantasy","big frog","summer vacation","rock wall","vajrayana cathedral","jean deville","otl aicher","basketball game","bas meeuws","red afro","rocky desert","sapphire watermelon","gummy worms","volodymyr zelensky","hyperbolic functions","sustainable city","goya kinkade","coffee stain","beautiful watercolor","zen abstract","tiny head","invader zim","alien mothership","chess king","scifi landscape","paul mccartney","creepy tree","school bus","red forest","virtuoso trombone","marlon brando","ash clouds","neutral expression","poster illustration","steampunk snail","abstract mayflower","ryan reynolds","woodcut print","clay pot","logo concept","geometric patterns","gu kaizhi","crochet plushie","drum kit","dillon marsh","galactic princess","mayan motif","scott robertson","aleksey baydakov","brown eyes","jordan grimmer","benedick bana","robot deer","artstation deviantart","impressive boots","canadian dude","red carpet","cosmic dimension","macro fractal","vintage map","full bloom","jazz improvisation","atmospheric cinematic","handsome gucci","celestial god","misty graveyard","inviting smirk","happy robot","nasa photos","foot traffic","cherry tree","black fog","massive bongrip","gabe newell","oh lawdy","big trouble","high def","samurai armor","black sheet","needlefelt monster","thick smoke","beksinski fractal","colorful nebula","disney animation","grape vines","past life","colorful corals","pokemon mew","yellow house","battle scene","hyperrealistic photo","quantum computer","sea foam","aivazovsky style","exquisite lines","treasure trove","quality portrait","underwater landscape","oval office","great adventure","rotten tomatoes","adorable billionaire","silks colors","generative flowers","paranoid android","manuscript illumination","glenn retkuwski","caravaggio paintings","high perspective","fiery gates","moonblood nightmare","foggy breath","giant creature","crocodile skull","objective reality","impressive detail","baby dinosaur","colorful city","independent film","beautiful fairy","female figures","asteroids rain","bushy landscape","realistic trail","cyberpunk dragon","generative snowdrops","old shoes","monotone painting","donna haraway","exxon oil","milk bottle","movie tron","sad children","cricket bat","clockwork soldier","friendly insects","milkflow physics","retro futuristic","evangeline pandora","purple heart","opalescent angel","goblincore lesbians","dystopian city","metrolitan museum","infinite regression","gg allin","circular formation","techno spacesuit","elucidate peace","sad man","cottingley fairie","japanese style","david burliuk","ego separates","baron harkonnen","metropolitan museum","garbage bags","concert cat","hospital bed","brick walls","colorful birds","tu bui","mechanical princess","sunset boulevard","human cleric","cute microcosmos","female robot","nebulaic sky","zach snyder","peaceful soul","ophanim wheel","travis louie","space city","soft colors","satanic ritual","giraffe neck","jan vermeer","tiny wonders","bad vibes","computer program","bbq cookout","mushroom house","dog legs","specular reflection","letter e","crystal city","shiba dog","rainbow cellophane","celestial princess","neutron stars","deathcore vocalist","matteo bassini","alison britton","3d wireframe","shiny metal","crop circles","red mountain","pillar tombs","jrpg protagonist","axiom verge","tower mansion","wayne anderson","fractal castle","leather suit","circular town","dismal marshland","faberge egg","bees wax","magical potions","vintage photography","nasa photography","high birdhouse","unusual birds","grimace reaper","style surrealism","london bridge","skeleton mermaid","goddess portrait","adventurous boy","minimalistic geometry","light breaths","cute teddy","glen keane","viewers direction","eternal fog","hemoglobin physics","final frontier","chinese food","claude mellan","mecha dragon","hairy textures","kenneth nowland","tone silkscreen","miniature worlds","nacreous nurbs","thin rings","japanese masks","cosmic traveler","sun setting","grainy 80s","gelatinous blob","warm sunlight","long tentacles","firey glow","suburb street","hellraiser pinhead","northern spain","frank herbert","copper sculpture","blacklight art","hairy texture","breakdance scene","color samples","tall buildings","graffiti sorcerer","zhichao cai","hannah hoch","soviet style","colorful information","alma tadema","vaughn bode","white canvas","assault weapon","giant spiders","beautiful glitch","man turning","white border","ron swanson","chicken yokai","lifeboat adrift","beautiful temple","water spout","blue crystal","poker table","glass gems","original imac","arcane power","dragonball girl","edward munch","ray caesar","mucha murakami","human figures","uncle aloysius","delicate face","mati klarwein","claude cahun","samurai frog","puff mountains","barcelona skyline","otter waist","ancient book","pieter claesz","betta fish","giger style","thrasher magazine","stag beetle","night glory","hogwarts library","color field","green landscape","game show","magic carpet","4k behance","simple logo","puffy jacket","calendula flowers","toom cruuise","johnny depp","lunar globe","mechanical stand","bad dream","wood beams","texture pattern","crystalline jar","silent bob","beard stubble","glitch theory","francesca baerald","crt television","snake hair","joseph cornell","egyptian hieroglyphs","visual music","cyber tokyo","hokusai painting","areal view","visual poem","craig mullens","3d cube","golden sunset","philip selway","propaganda posters","nasa spacesuit","skin cape","mossy swamp","castle guard","trash baby","yeha leung","ghibli studio","aaron approach","hina doll","phoenix bird","underworld chamber","senior designers","plant species","farm family","diagonal stand","noodley appendages","modern poster","vintage botanical","vignette clowns","vintage illustration","warm fire","adventure game","tiger claws","mural painting","black tentacles","holographic watercolor","clay model","cool car","blurry cube","sequoia emmanuelle","glass angel","stone city","bottom view","crystalline lattice","old hut","oil liquid","motorcycle engines","chrome explosion","chemistry lab","mole wizard","blue paint","photogenic drawing","chrome silhouettes","gaelic glyph","translucent skull","quantum leap","eric sloane","pinhole camera","e neuman","human eyeballs","starship pilot","james ng","circuit diagram","steve zissou","acrylic paint","anna karenina","hanna barbera","black skeleton","black belt","psychedelic soapstone","beta fish","yellow rose","superliminal portal","sea monsters","geometric clouds","green luigis","atmospheric physics","actual asteroid","nicky minaj","tall surfboard","tiny lights","voodoo priest","celestial map","albino snake","arthouse poster","oath seeker","dieselpunk teleporter","mechanical dragon","northern canada","wheat embryos","surrealism painting","lovecraft steampunk","magical water","cartoon eyeballs","simon stahlberg","soul vape","gold rush","colorful spaghetti","ethereal earth","long shadows","particular size","miniature schnauzer","kandinsky style","cryptocurrency art","ink machine","taiyou matsumoto","hd 4k","criag mullins","brief history","evil cat","surreal bubble","3ds max","lawnmower man","sea urchins","campfire celebration","ultrarealistic cgi","interior artstation","green tops","saint rosia","odd shapes","terraria style","cute spheres","banana suit","stealth bomber","tall chair","street view","aspen trees","alchemy diagram","overgrown city","beatle car","white plastic","tech bros","youssef rakha","desert city","shiny toy","outer core","jorge gonzalez","eyes lsd","bokeh bw","red curtains","blown glass","matrioshka russian","modern furniture","winter night","industrial architecture","amazon jungle","exquisite lush","inch nails","realistic muscles","refugee camp","rainbow mushroom","distant human","cloud canopy","luc schuitten","crater rays","world champion","mayan art","oni mask","veggie tales","realistic depth","stevie wonder","open spaces","sepia photo","brodsky utkin","bold contrast","silver spacesuit","mark tennant","blue spiral","sharp photo","james clarke","water simulation","garden mech","boston terrier","favorite painting","hugh ferris","skyscraper ruins","neural model","orthodox cross","grey aliens","mermaid cyclops","2k texture","closeup photography","instagram post","david hewlett","wooden greenhouse","gabriel whaley","keith apicary","insane demon","sunset reflection","fungi fractal","plant blackhole","pokemon battle","yellow fields","ginger afro","computer science","good hair","beautiful symmetry","kidrobot monster","cold cuts","crab zombie","multiple faces","fractal background","national forest","dark book","lewis baltz","gold domino","white face","dark wall","cyanotype portrait","sea waves","cosmic cosmology","cosmic cosmos","business attire","dark academia","matchbox cars","lamborghini diablo","brutalist buildings","cthulhu rises","foggy metropolis","white shades","psychedelic church","technical detail","jon mccoy","body hair","crass logo","orange tulips","large balloon","psychedelic poster","food fight","snowy day","alveolar tafoni","intricate geological","old mansion","orthodox crosses","space jellyfish","heath robinson","action shot","yoshitoshi abe","short swords","hype williams","yoshiharu tsuge","crochet doll","lotus castle","glitterbels polish","fordite gemstone","vampire slayer","david levine","international airport","matt rhodes","crane art","crane feathers","inflatable furniture","soft breeze","bernedoodle puppy","city scene","vash trigun","spookydan walker","dj screw","movie labyrinth","endless series","javascript code","pauline baynes","sea anemone","natalie daoust","silicon wafer","earthy pallette","suicidegirl cooks","thin tendrils","heavy machinery","alien paradise","vintage microphone","algaefluidskull tilt","red robe","raw stone","human warlock","cardboard box","black techno","gay indonesian","obese tomato","attractive buttocks","misty clouds","degree panorama","oculus rift","arakeen bazaar","chrome orb","light rail","giant fluffy","white blouse","black boots","biblical plagues","mastermind game","luminous yokai","liminal corridor","fluid fruit","johannes itten","dnd 5e","dragon prince","cold day","vivid landscape","beautiful stark","main street","azure god","sylvester stallone","silver glitter","goya style","chicken head","dusty cave","pirate captain","new spomenik","neil burnell","woman vampire","postage stamps","large ship","woman hacker","kantha quilt","orc rave","italian futurism","roberto matta","roberto ferri","various weapons","surveillance drones","tackle box","brussels sprouts","worldwide festival","pig head","eyes skull","accent edges","blonde man","cockleshell bay","rhys darby","bloom emancipates","vertical mirrors","culinary school","underwater scaffoldings","mr hyde","monopoly board","brandt peters","oscar statue","letter v","plush toy","modern anteroom","unicorn tiger","figurines diorama","demizu posuka","dutch impressionist","blue stain","mech suit","minds learning","guadeloupe island","diode eyes","young geisha","rick baker","divine city","condominium complexes","hair clip","jesus raccoon","cyberpunk organic","atmospheric painting","grid spaces","violet background","giraffe meteor","recipe page","coldplay realism","frozen pond","cardboard tubes","pleasant voice","lit environment","black dresses","byzantine king","joe buck","superior form","food restaurant","brown wood","1970s aspic","serene mountain","gold symbols","robots curiosities","davinci manuscript","emile bernard","john polgreen","frank tinsley","milton avery","light beings","fur polygons","zombie pizza","multiverse orbs","view masters","distant glitter","january sun","bare place","tyger tyger","celtic palace","carl sagan","endless landscape","nebula cloud","figure 1c","silk curtains","tamale restaurant","long i","lucien freud","bird heads","good rain","spring arrives","drug addict","red sandstorm","metallic fabric","cartoon animals","artstation 8k","analog photography","anton chigurh","green sword","cosmic enlightenment","nasa astronauts","3d hyperrealistic","picture book","island landscape","spiritualcore orbs","front yard","cyberpunk citadel","space cat","cyberpunk cathedral","gusty trees","cloudy seas","purple moor","ron mueck","empty streets","yoahitaka amano","scary clown","japanese anime","clay plate","shadow crossing","grainy 35mm","rich man","aurora polaris","furry staircase","computer circuitry","hubble space","crab nebula","circus collage","cash register","benign growths","industrial cityscape","mekong delta","aztec codex","space aliens","eco city","race track","pool noodles","lee madgwick","immense size","professional footage","great sphinx","lovis corinth","woodland ferns","ancient moth","rare volume","ikko tanaka","vatican city","green dress","soft distance","states flag","russian flag","lady valisua","nightmare angel","superior organism","woman sips","green absinthe","vintage toys","ai artists","stage fright","gold filigree","good guy","insect robots","zen meditation","cosby show","green beer","adam paquette","boardtrack racer","terrible thing","jimmy saville","cybernetic flower","common waste","common gloom","due course","cristiano siqueira","jillian explodes","retro style","ww1 hellscape","temple scene","miniature leprechauns","tropical landscape","human mouth","huge boulder","skin cells","lovecraftian monster","human torch","thee life","thee clothing","softest clothing","tender voice","vales rejoice","enormous boulder","grand floral","andrew loomis","homemade robotics","action movie","chicken feet","shallot schematic","handsome girl","leprechaun shadowverse","eclectic mind","future technology","ui components","military folders","police officer","generative painting","toy cars","ghibli hills","carnivorous eggplant","perfume bottle","coastal city","lifeless things","constructivist style","war crimes","alien style","beautiful dress","plant life","different styles","medieval tavern","funhouse corridor","green sunset","ketamine kthulu","deep abyss","busy day","knight figure","supersonic highway","lone tree","giant worm","guinea pig","huge dirty","graveyard digger","alien anatomy","raver furry","spacesuit troops","old picture","kay sage","molten tungsten","teapots festival","military patches","gold chain","realistic pikachu","mossy rocks","military hero","cosmic patterns","gan art","grassy fields","black mirror","sun glasses","bruce springsteen","middle ground","warm colors","black kitten","acoustic guitar","dirt road","realistic drawing","infinite number","complex machine","ken reid","blast furnace","nanomachine swarm","pure water","twilight zone","crypto punks","sharp details","dark sea","graphic poster","fall asleep","abstract flowers","light trails","gamer girl","volcanic island","void engineers","robert indiana","order circle","frozen wasteland","computer slot","dreams i","restaurant menu","lsd portrait","perfect square","japanese woodcut","orange smoke","dark vintage","royal protocol","steven meisel","don quixote","purple cloud","dragon knight","black sea","motorcycle explosion","clothing store","neon edge","abstract poster","pure night","arcane runes","accurate angels","mechanical brain","forgotten memory","imaginary friend","light years","victorian hones","large painting","eyes everywhere","autumn evening","bill nye","cristoforo moretti","peter morbacher","right click","white gallery","iridescent cellophane","urban decay","young maiden","gris grimley","comic convention","boreal forest","toyota tacoma","anime artwork","metal cube","space octopus","molten core","heath ledger","misty transparent","suguru tanaka","forgotten memories","cyberstone artefact","riot policeman","eco yggdrasil","george whiley","parhelion halo","il conformista","flower armor","modern society","nuclear fission","necro diva","face mask","amethyst walls","chaotic scene","pale flesh","albino elephant","bedroom wall","pole vault","gorefield masterpiece","au5 logo","david firth","35mm dslr","galen rowell","mercenary solider","seth rogen","concrete construction","tarja turunen","luke pearson","century aristocrat","primordial life","indoor cloister","instagram photo","cartoon mascot","pure essence","george luks","australian shepherd","mechanical god","cosmic machine","dark sun","black sun","synthwave album","vesuvio cafe","vector image","usagi yojimbo","utah teapot","ember weaver","oscar ukonu","vivid colourful","magical energy","life force","colorful ink","candlelight princess","whole universe","blah blah","dentist office","whole foods","vast beach","moldy room","cool girl","millenium falcon","infinite loops","football players","cyberpunk ninja","ethereal dreamscape","trench raid","pressure tank","undertale screenshot","aaron griffin","gehry girl","rococo style","plastic wrap","cereal aisle","immortal machine","old vhs","dingy basement","lady yunalesca","dark landscape","disney characters","designer poodles","chibi cthulhu","psychedelic community","empress wears","microscopic photo","final countdown","emad mostaque","artificial intelligences","galactic overlord","internet explorer","dragon tattoo","yellow ogre","busy city","translucent skin","ryan murdock","nature photograph","endless expanse","daikon radish","violent thunderstorm","leica photo","dmt elves","zodiac killer","closeup photograph","sly smile","black swan","blue girl","yeezus wept","rainy landscape","cat emoji","mayan flood","compound eyes","young razzil","dada style","san diego","japanese horror","flower veil","distant lights","stone temple","mellon collie","infinite sadness","miniature forest","sea grass","gentle ocean","yellow paper","old house","stormy seas","jack sparrow","ego death","vector field","flesh batteries","i talk","breastplate armor","surreal art","pastel sunset","rainy season","cytokine storm","massive structure","antique illustration","ben templesmith","infinite universe","horror game","anime eyes","halloween party","primordial mind","massive cougar","cyborg soldier","savannah cat","emil nolde","intricate tapestry","coralpunk city","black throne","rocket launcher","hermione granger","lego characters","keyframe environmental","action photo","immense celebration","steampunk world","small birds","misha gordin","private investigator","abyssal deity","fantasy city","real aesthetic","dream realm","stone gargoyle","karl kopinski","bad idea","rosetta stone","abominable snowman","cosmic tentacles","crab orb","trojan horse","isometric house","endless grid","beautiful dream","guardian angel","tony abbot","serene lake","alien portrait","johnny carson","french magus","m shape","spacetime continuum","uber driver","chris pratt","dusk 1990s","forgotten temple","blue circle","fax machine","dynamic range","chicken parmi","hum basslines","reservoir dogs","dubstep duality","eldritch abomination","art nouvaeu","gradient sky","abyssal goddess","primary abstraction","god particle","slumber party","homeless people","folk art","general relativity","teenage engineering","isometric voxel","blue velvet","apple park","eclipse garden","alien encyclopedia","lysergic inscape","miniature ecosystem","fruit flies","rainbow fish","golden snitch","dark void","long cat","el dorado","low polygon","algebraic topology","sand castle","retro robot","disco party","lit void","metaphysical matrix","fourier transforms","bobby lee","silk painting","moist tentacles","dan reynolds","fertile valley","sound vibrations","baroque demogorgon","magical armor","ultimate power","adorable cryptid","vibrational energies","prismatic demon","nicola tesla","peaceful lake","cormac mccarthy","tom holland","fairy queen","mans land","furry ravers","cognitive resonance","candido portinari","avocado armchair","psychedelic fractal","strip mall","air jordans","psychic deity","4k anime","impressionist portrait","book page","jakub dvorsky","galaxy brain","perfect ring","serene planet","inner voice","dirty snow","ancient cityscape","peace dream","levon biss","beeple kinkade","sanctions uwu","white mouse","green sky","bjarke ingels","vision quest","rna transcription","barren landscape","frequency modulation","benoit mandelbrot","tom brady","glass succulents","fiery formula","amanita design","blutonium armor","armor protects","blunt weapons","portra photograph","existential crisis","mystic lighthouse","grand foyer","magic flowers","peter ferguson","albino lion","coral polyp","happy puppy","vivid dream","mushroom man","stephen mackey","conways game","red cube","eternal struggle","crystal chandelier","armor design","oregon trail","glass bubbles","surreal shrine","weather map","perfect polygon","adorable illustration","painter painting","tiny hands","facial symmetry","silicon chips","alien alphabet","dark temple","glass cubes","black helm","jordan peterson","aluminum tinfoil","generative design","builds reality","bioluminescent summitscape","wilford brimley","audio trail","thomas demand","white robot","pen plotter","pov i","black circle","realistic faces","cool cat","fractal skull","alan moore","big tree","mystical image","seaside town","tiny mushrooms","coffee time","lionel messi","bauhaus design","spaghetti noodles","architectural plans","pencil art","whatsapp style","dmt entity","pink silk","robot fight","eldritch creatures","cutest thing","judge judy","pure mathematics","false color","16mm film","red glass","golden apple","space wormhole","yann lecun","hari seldon","terrorizes cookies","inner demons","shpongle art","mobius garden","90s anime","synthwave portal","symmetric horror","desert island","pet cat","potato salad","gumdrop lounge","chet zar","manual diagrams","candy store","heart emoji","adolph hitler","new style","lebbeus woods","body draws","cyberpunk gradients","cosmic temple","mystical visions","spades card","stone tablets","hu zaobin","dense city","infinite network","football stadium","hero academia","pumpkin patch","mind palace","atom bomb","cubist portrait","beautiful gradient","beautiful world","inkjet print","vladimir lenin","grand bahama","ghibli castle","proboscis monkey","white texture","train tracks","bill clinton","endless tunnel","football quarterback","open doors","balrog smites","religious iconography","rave parties","pepperoni pizza","savannah landscape","floral coral","perfect man","quake engine","giant mechs","luminogram depiction","future nostalgia","leap motion","spinal column","life photographer","digital 3d","craig davison","gravitational waves","ancient artifact","jackie chan","deepest dab","judge death","mick jagger","fleece puppets","torval places","professional studio","dream machine","tropical fruit","community school","salad fingers","paths clothes","carnegie hall","martial arts","beeple beksinski","gossip magazine","glass container","renowned master","industrial light","schizocore scp","life savings","strawberry jam","70mm kodak","botanical empress","salvia trip","warp speed","cheese buldak","desolate wasteland","matthew grabelski","jellyfish man","numerai xray","jim morrison","secret door","zombie happiness","janit places","numerai keith","killer whale","i woke","rubber ducky","drawing style","consensus reality","infinity pool","tv dinner","furry texture","steven janit","mars base","angel princess","young princess","secret ingredient","psychedelic rainforest","postman pat","impressionistic painting","humpty dumpty","eye headshot","winter forest","abstract style","lichtenberg figures","clyde aspevig","feeling devotion","yard stare","insect wings","joker makeup","mc esher","source code","paper airplane","bacon cheeseburger","static noise","el capitan","hipster witch","theme sadness","color swatch","dust mote","d style","massive polar","islands float","computer desk","financial crisis","giant bird","outdoor rave","eyes portrait","orson welles","luigi serafini","sunset valley","bokeh photograph","flower bouquet","american psycho","silk lingerie","halloween costume","prom dress","empty road","white water","roman fresco","lan party","different kinds","physical manifestation","white wireframe","video screens","new home","golden pyramid","blurry painting","warhammer figurines","city center","mind parasite","mint condition","surreal flower","military troops","japanese city","morning fog","alien monolith","rice paddies","interference pattern","optimistic future","wallpaper texture","crack pipe","wool texture","whitney houston","dmt entities","purple forrest","ghibli dreams","traffic cone","photorealistic depiction","big mouth","great forest","absolute names","dark mountain","jean grey","different names","rainbow hair","ben shapiro","inflatable arm","sergio leone","seaside cliff","lotus eaters","green smoke","human organs","violin player","noboru nonaka","portrait robot","koichi sato","military uniform","military personnel","tunnel vision","greek pantheon","fractal samsara","perfect portrait","eyes stare","large knife","denis villeneuve","black sky","public restroom","mamluke warrior","rodeo clowns","iridescent transcendance","art piece","zoomer aesthetic","luxury car","teenage skaters","oblivion spire","neon paint","old temple","massive giraffe","blue mylar","huge biceps","new earth","mirror window","hot girls","albino bull","daytime sky","bull rider","perfume store","good genes","roman statue","crazy frog","santa clause","jimmy neutron","dr suess","sad girl","black stallion","nyc subway","tang dynasty","robotic cat","samurai movie","cosmic buddha","alien princess","black stone","cat girl","human interaction","mythical creature","3d image","steampunk alien","eternal return","skin texture","carbon copy","ear canal","mysterious force","blue ice","baby monkey","calla lilies","circular object","music studio","patricia piccinini","character portraits","bus station","summer landscape","sports car","college party","botanical sketch","apple pie","light caustics","vivid vibrant","entire image","cell shader","muppet babies","i guess","seminal fluid","facial hair","bizarre portrait","large group","destroys tokyo","alec monopoly","fashionable people","surreal landscape","fun night","such thing","yellow moon","beatiful painting","blank canvas","gold uniform","35mm analog","celestial palace","water planet","manus imperatoris","grand entrance","stars fall","beautiful japanese","russian soldiers","breakfast cereal","presidential portrait","city plan","pottery wheel","lotus blossoms","willem dafoe","normal person","large ears","dr octopus","urban community","peppa pig","petra collins","microscopic world","anime mecha","triple goddess","deep valley","serene eden","edo period","summer night","psychedelic tunnel","fleshy biomass","hardware store","items i","lay photography","giant snake","clock tower","pink forest","clean desk","flow state","tall steel","narrow depth","buddhabrot cgsociety","moonless night","illusionistic baroque","cast photo","digital concept","small fish","black mylar","rock band","jennifer aniston","lisa simpson","biological computation","news anchor","perilous seas","brilliant illumination","terrible times","rob schneider","scary catbus","nicobar pigeon","industrial complex","decorative frills","color pallette","void arrows","gold fusion","president trump","cyberpunk imperium","cosmic radiance","daryl hall","tiny elephant","information age","nobuyoshi araki","wood grain","etherealcore princess","virgin gorda","right hand","pink fog","donut cake","root system","mariana trench","angelic goddess","albrect durer","ski lodge","neo surrealism","blue wizard","pocket calculator","ethereal cyclops","water particles","sequoia tree","yves klein","concrete building","small cabin","cellophane lion","gaussian temple","bit dither","white bird","mighty ceruleum","james rosenquist","60mm photograph","magical lights","mid collision","icy tundra","seraphim configuration","country landscape","ballpoint drawing","mobile sculpture","manga portrait","toxic sludge","humanoid poodle","rhinestone jacket","elegant chateau","blond girl","manga color","david rudnick","angry face","miles aldridge","functional coffeepot","steel butterflies","beautiful priestess","greek temple","coffee pot","alien empress","pirate girlfriend","gerard richter","giant eyeballs","purple glass","magenta mylar","adhd wonderland","n64 ghibli","adense mesh","backlit windows","salesforce tower","lungeon sylvantus","frog closeup","angry pepe","strange creature","cold psychopath","warm empathy","angry birds","lorem ipsum","small hut","denim bags","washington monument","steampunk machine","incredibles shot","mondrian jazz","geometric collage","large wings","4k album","fairy dust","unicorn tears","grande jatte","red grooms","colorful cosmic","female body","leng jun","che guevara","ice cave","bright sun","cyberpunk skyscraper","michelin man","glass aquarium","white wings","angsty teen","rap album","chinese calligraphy","borg cube","anime protagonist","eldritch fae","white banners","ethereal hues","massive frozen","denim jeans","tank chain","office job","cartesian theater","nigerian catgirl","giant panda","kevlar chamber","ray gun","sourdough bread","professional bakery","grassy hill","emperor moth","lone figure","light mage","barbican center","water mage","glacial ice","beige mylar","void witch","ski slope","space castle","baseball hat","way things","hd wallpaper","anime portrait","desert witch","zoological illustration","james audubon","ayako ishiguro","corporate memphis","3d sculpture","portal cult","crystalline god","apocalyptic fog","joseph stella","ceruleum energies","tooth fairies","business affairs","ultramarine clingfilm","photorealistic seascape","misty clearing","crash bandicoot","psychedelic forest","focus photo","vhs video","god atlas","modern bricolage","goat head","irish wolfhound","fancy designer","gold clingfilm","humanoid tardigrade","gentle eyes","active volcano","solo performer","iannis xenakis","star platinum","amedeo modigliani","nuclear blast","human inhuman","evil clown","soul unit","black painting","golden book","electronic instruments","people gathering","lavish parlor","fry truck","cold winter","mr bean","golden hair","chiaroscuro watercolor","kodak porta","letter f","tall skyscraper","exogenesis ballroom","high rise","lit mcdonalds","ikea store","cosmic filigree","celestial portrait","nacreous opalescence","ethereal goddess","baphomet sits","fiery voice","minecraft creeper","beautiful witch","cosmic body","timid void","conscious membrane","dtiys portrait","image corruption","purple mylar","goose game","lego sculpture","people painting","cosmic joy","costa rica","mechanical butterflies","color 70mm","humanoid orangutang","color poster","blue ocean","egyptian pyramid","tribal piercings","colorful fish","dwarf priest","day i","long nose","golden eagle","wooden sword","cryptic matrix","coal dust","laser harps","unmade bed","mr marsden","meow wolf","mystical staff","messy keyboard","silver cage","eternal bliss","mannish woman","pure imagination","sonar data","johnny lawrence","strange aura","word tower","suburban sprawl","victory flowers","pink marble","beautiful floral","friendly fishy","ultrawide 4k","stardew sprite","d world","punk succubus","gwendoline christie","cyborg poodle","net result","people shudder","massive chrome","arachnid legs","alien trees","krytyy market","bishounen eyes","beehive academy","mutt dog","crimson drapery","mechanical prince","velvet silk","interior photograph","chinese empress","karate kid","magical storm","coal mine","george innes","ocean sunset","dave dorman","unknown entity","tom selleck","abstract goddess","odelon redon","underwater tintype","yellow hair","tove jannsen","wlop cgsociety","idyllic portrait","charles lee","aquiline cheekbones","colorful rainbow","farcaster portal","human torso","large single","multicellular organisms","photorealistic eyes","medieval fort","shin hanga","native american","briar roses","dantian tao","ipod nano","town square","mary berry","small fruits","herb garden","future illustration","frozen juggalo","mri machine","golden rings","cryptic sigils","bioluminescent trees","big windows","portrait 4k","river delta","yellow ink","graeme base","inner workings","charles addams","fabric art","nether realm","parallel world","grainy screenshot","copper clingfilm","evil god","ar headset","sudden vision","underground part","margot robbie","beautiful eye","stem player","cthulhu gods","1970s illustration","frederik ruysch","superhero team","rainforest river","beautiful image","data reconstruction","fantastic creatures","bad attitude","russian invasion","multiple pairs","blue ink","sunken pastel","musk deer","jack skellington","blue spear","fluffy fractal","frozen world","purple goo","japanese manga","daguerreotype lord","strawberry fields","masanori warugai","nope conceptart","madness conceptart","border collie","berni wrightson","dark swamp","space walk","family guy","body wisdom","dark atmosphere","white hole","pink skyscrapers","human silhouette","humanoid angel","globus cruciger","nihonga style","interaction design","daguerrotype landscape","body problem","final breath","dangerous man","entropic forms","small boys","party fog","kathe kollwitz","magnificent castle","floral shells","robert campin","abstract beauty","royal ornamental","zdislaw beksinski","black ice","glitchcore geocities","jan nieuwenhuys","ayahuasca ceremony","amulet casts","colorful sky","dryad bartender","kazuki takahashi","yoshihiro togashi","fairy forest","empty clingfilm","murky water","wood sculpture","lake michigan","zombie awards","white shapes","sergey kolesov","yellow head","waveguide 5d","tree man","small particles","tiny humans","king solomon","dinosaur bones","joel sternfeld","hellenistic painting","boids simulation","luminescent form","police cars","white mask","future cityscape","cutest kitten","pencil illustration","rocket ship","moody clouds","celestial bodies","beautiful bouquet","white beard","candy cane","cirrocumulus lenticularis","cyclops polyphemus","almighty zeus","sam nielson","egyptian queen","black mountains","incredible sunrise","byzantine art","complex forms","cute turtle","underwater catacomb","ancient statue","artificial light","winsor mccay","family tree","toy playset","transcendent emulsion","film reel","baroque mandelbulb","adorable snail","maga hat","sea serpents","klein bottles","celtic knots","city aesthetic","rick owens","volodymyr zelenskyy","game myst","female acolyte","junya watanabe","ivan marchuk","cosmic architecture","kateryna primachenko","chess rook","corran brownlee","beautiful paintings","tree canopy","spiritual energy","purple palette","movie theater","vegan cat","silly hat","trench coat","w photo","stone sculpture","androgynous person","brown skin","reptilian humanoid","candy land","metal spikes","national flags","orange palette","ammonite penthouse","ww2 city","vegetable garden","norse serpents","peaceful meadow","playboi carti","secret meeting","natural world","8k painting","black leather","iridescent fabric","top hats","wow 4k","eldritch monster","alvin lustig","beautiful beach","kawase hasui","colorful logo","life aquatic","track suit","realistic texture","woman soldier","beach house","realistic eye","teletype i","astronaut helmet","misty foggy","jeff bridges","grainy antique","slawek fedorczuk","snare drum","colonel sanders","apollonia saintclair","misty dusk","charcoal painting","garden gnomes","nighttime fog","aitor throup","fat madame","ivan smirnov","claim waste","japanese album","obsidian statue","shark outfit","mud bath","color triangle","giant doorway","piece suit","heat displacement","ancient land","wild screenshot","lil wayne","court dress","trig point","evil people","lunar lander","nordic village","geopolitical map","retro game","lava fields","different frequencies","light prisms","anime warrior","diego velazquez","royal court","college student","fire dress","field lantern","hopf fibration","8k artstation","totem pole","purple runes","siddhartha gautama","complex isometric","woodchuck chuck","3d logo","malika favre","bioluminescent kraken","immovable object","cyber ballerina","african king","lobster quadrille","golden statue","rococo painting","electric shock","mental breakdown","missoni cat","survival game","cave drawing","birthday card","diagonal composition","space colony","herndon portrait","alien spaceships","rubies sapphires","gold emeralds","perfect perspective","film frame","scare video","non temporal","galactic halls","mushroom god","slick opening","lime juice","70s photograph","awesome poster","attribute points","ordinary cat","underwater scene","mass effect","planet venus","cosmic egg","leafy tree","diego velasquez","erogenous zones","banyan tree","powerpoint slide","blue palette","white orb","knight armour","black hoodie","empty bed","steampunk submarine","christian cross","nuclear fallout","jan berenstain","cutest creature","20th century","naturalist style","siamese cat","pulp novel","realistic human","big arena","social network","beautiful shade","sorry i","anime bjork","graduate texts","mecha bodhisattva","wide stripes","large circles","rainbow ocean","pet cryonics","cute dragon","small bush","big waves","artstation studio","letter r","brigadeiro restaurant","godlike titans","cosmos inhabit","medical diagram","blue neon","glass photorealistic","black head","dark pit","opal gemstone","lunar base","glass cup","young kids","african landscape","alien humanoid","giant goliath","egyptian pyramids","8k omg","arianna grande","infinite regress","ice planet","social web","hot lava","man frozen","glass concept","apocalyptic earth","piet mondriaan","french horn","white cloud","courtroom sketch","marshmallow unicorn","puerto rico","gloomy rocky","lascaux cave","realistic goblins","isopod showman","rain aesthetic","kelli laffer","groucho marx","giant monument","golden girl","long vertical","marker sketch","light speed","small flower","tiny spaceship","rusty robots","subsurface scatterings","engine parts","horror characters","fantastic luminescent","deepest depths","low resolution","great horns","thin air","academic art","degree rotation","lcd display","shiba inus","martin handford","yellow weeds","space cathedral","galactic monster","oldgrowth forest","bernie fuchs","side portrait","manic grin","brock hofer","stoic essence","strong family","battle axe","gene simmons","goblinoid princess","citizen kane","concrete sidewalk","refractive facets","storm thorgerson","sharp focus","isometric cube","control panel","asher siye","cute castle","powerful cgsociety","silk screen","pale watercolor","intense paranoia","old robots","stasis hibernation","century harbor","mid morning","asteroid belt","chicken legs","glass silhouettes","darkest dungeon","magic card","mason jar","shiny surfaces","muscle physics","gold shimmer","open book","purple couch","michiel schrijver","wet floor","medium size","town street","cthulhu ocean","multiple legs","almond milk","john wayne","nutria reactor","vincent price","volcano eruption","velociraptor pastor","alien food","cultic cloak","nightmare ocean","gucci mane","dan flavin","grass vray","proximal source","math wizard","purple horns","bloodandgutseverywhere creepy","gigantic bloodworm","witch elixirs","gigantic insect","vance kovacs","nasa moon","cute castles","field photo","blackhole staff","dmt vision","black cats","lavish springs","big parks","carne griffiths","atmosphere physics","hot girl","ethereal eyes","aoi kotsuhiroi","space monoliths","empty barn","intergalactic day","cyberpunk delinquent","digital design","easter eggs","john kricfalusi","alien fractal","cat priestess","arri zoom","tiny seeds","red line","patrick mchale","atey ghailan","serge marshennikov","medieval scroll","generative spring","monster hound","singular portrait","nuclear cloud","minimalist zombie","sperm whale","octopus chef","luminescent lights","azpir wuntrr","star trails","scottish cliffside","tropical seashore","fairy village","ultimate divine","hammerhead sharks","overworld map","roberto obregon","jeff whitlock","retro sci","bright leds","maya priest","public bathroom","street map","guy harvey","endre penovac","myriad computers","wylie beckert","donald judd","sidewhiskers beard","long dresses","spaceship crash","klimt style","photorealistic 8k","night photography","smooth ribbons","smooth traces","glitchscape utopia","helmut newton","google glass","orchard landscape","nighttime window","long hallway","alan watts","futuristic antenna","spectacular potions","personal computer","cake stand","herbert franke","wonderful vhs","jacques tati","magic kingdom","dragon head","tabby cat","sea cliffs","lambda calculus","caustic smoke","translucent surface","michael turner","point clouds","alien volumetric","court lady","cat mentorship","golden sun","di chirico","minimalistic ink","veiny eyeballs","frog brigade","white colours","spring landscape","woodprint kosmar","colour palette","vivid 80s","fire painting","hairy spider","empty park","forest ambient","full page","gaston bussiere","tiny plants","symmetrical front","central design","beautiful words","exhibition hall","degas painting","saturn rings","modern wonders","press preview","lush ruins","hawaiian shirt","humanoid demon","adaptive camera","sam mayle","eh shepard","green trees","steel beams","sea monster","computer screens","huang guangjian","vinyl toy","world burn","silver coins","slim aarons","white unicorn","design element","ramadan mubarak","brian kesinger","bubble gum","halcyon days","digital humanities","minimalist style","top wallpaper","3d 4k","whole earth","vapour clouds","prismatic bonfire","ska band","airplane window","john dee","albert munsell","giant cave","empty bottles","gadget hackwrench","mind training","microfiche reader","cat jesus","symmetrical grasshoper","jazz trombone","old world","cg concept","pixar incredibles","cargo ship","empty market","letters etu","own fluids","mark bradford","jeremy geddes","eren jaeger","sky concept","ethereal spirals","d horse","fresh prince","heavy mascara","pope wears","basketball hoop","rotational symmetry","chicken peeks","law unto","black point","rainbow cloud","cgi 3d","plasma weapon","idyllic island","burj khalifa","agnes dene","maciej kuciara","huge brain","powerful wizard","cezanne painting","red lasers","jerusalem temple","curious elixir","dutch masters","bonsai forest","deep chasm","maurice pledger","overhead lights","karl lagerfeld","kriss vector","houdini 3d","victorian life","dwight schrute","gold jewelry","underwater life","uv blacklight","balloon animal","ancient tower","rainbow shell","game boy","fluke worm","abstract pastel","cosmic hexagram","tiny crowd","raccoon christ","vaporwave cityscape","shiny swords","blue print","8k cinematic","light scatter","d game","electromagnetic radiation","shibuya crossing","soft thick","street vendor","beksinski style","open door","pierre molinier","spagetti monster","antique wood","rear window","art nuevo","kandinsky music","steampunk diver","extinction event","white grid","big teeth","planet glory","colour artstation","jack gaughan","lotus flower","mojave desert","pixel monsters","rabbit ears","buck teeth","small bubbles","large bricks","metro tunnel","shop floor","tiny rockets","cubic square","color dots","stock photos","black tattoos","aaron draplin","sweet potato","mossy rock","cyber palace","japanese maple","bartek biernacki","gigantic silhouette","henriette grindat","akira style","translucent ghosts","speedy romeo","space force","honeybush patterns","leonid afremov","fractal explosion","eternal drip","human hair","farm field","metropolis poster","fantasy valley","antique lace","yoko ono","coby whitmore","titans gods","infiltrate hell","halos glow","bene gesserit","poisonous plants","chaotic bedlam","porcelain crocodile","chess pawn","eerie darkness","sandy beach","blue energy","blue raccoons","iridescent holographic","evil spirit","beautiful risograph","glitchcore orbs","cyberpunk sorceress","fangoria magazine","vera molnar","collective intelligence","glass beakers","family crest","chrome sphere","night fog","medical waste","longhorn helmet","bugs bunny","light shade","veiny eyes","fantasy fortress","admiral miran","skeletal king","math forms","labrador retriever","karl heilmayer","smooth form","tiny face","virtual world","penguin edition","venus painting","high ceilings","open letter","butcher shop","japanese newsprint","late 80s","fortunato depero","violet flowers","academic paper","light spirit","soul collector","rotten fruits","theatre stage","attractive death","karst mountains","plants atop","trilobyte puppets","stupid zone","land scape","large wall","fashion dress","asian avatamsaka","giraffe asteroid","real giraffe","dana ulama","colorful feathers","green woman","original manga","jello mold","longest cute","life minimal","bold lines","russian army","translucent crystal","akiro kurosawa","rear view","lewis hamilton","interdimensional beings","cyborg widow","black dragon","accurate midnight","aerial bombings","wheat germs","mountains forest","spectrometer stripes","man cry","complex network","large thrusters","william bunge","aquatint print","black lab","speedpaint style","unity octane","tsunemasa iwasaki","fourier transform","empty apartment","dark rituals","floral pagoda","japanese craftsman","bicycle wheel","sakura blossom","rat flock","prayer altar","rare bushes","tsunami wave","albert uderzo","pearl harbor","terrazzo floors","glitch venom","electric wires","andrea rivola","network room","network hardware","mike krzyzewski","japanese painting","acid house","mongol hobgoblin","beautiful rock","dune movie","king diamond","mspaint child","eldritch mansions","nba basketball","inch floppydisk","cozy bauhaus","dimir agent","olden church","casey reas","man stands","vikings fights","alchemical freedomreactor","bullet time","mechanical complexity","scary witch","josh agle","vince mcmahon","tuner car","elevation painting","utagawa kuniyoshi","huge beast","lapis lazuli","blue fog","cute tattoo","modular synthesis","isometric harmony","realistic hyperrealism","diffusion model","huge keyhole","rectangular hole","larry levan","life drawing","naughty dog","symmetrical spaceships","onna bugeisha","prehistoric tree","aerodynamic rock","chocolate chips","work bench","evangelion mecha","islamic tile","andrea serio","chrome spheres","stone 4d","patrick heron","uzumaki sharingan","eames chair","rural village","tall wizard","plunge pool","form space","hairy monster","damascus steel","handheld games","new mexico","paper cutout","perspective painting","kara walker","mary abbott","rats wallows","crust punks","sewage planet","amber hyperrealistic","gloomy aesthetic","bright octane","old friends","music instrument","gold potato","angry snake","ghastly aesthetic","sedum plants","cloud leaves","technical demo","fluid simulation","anna boberg","bong hits","closeup macro","tale screenshot","node network","d artists","endless number","opengl es","java 3d","steam escapes","head illustration","light reflections","natural sunlight","panoramic windows","brain coral","calico cat","ephemeral architecture","fast cars","royal mantle","crystal spires","primal scream","overall view","robot monk","organic composition","earth orbit","train window","jellyfish ufo","blue teal","goblin lass","modern dancer","rocky landscape","anne geddes","club sandwich","overhead photo","portrait photorealistic","happy baby","mother nature","young rachael","anime mech","small fires","blue clouds","halftone print","colorful fluid","giant steps"]'
        ),
        k = t(96458),
        x = t(44824),
        j = t(45332),
        N = t(50402),
        z = t(37940),
        C = t(93090),
        _ = t(36090),
        S = t(22379),
        O = function (e) {
          var a = e.username,
            t = e.userId,
            i = e.className,
            n = e.avatar;
          return (0, r.jsx)(y.default, {
            href: "".concat(z.jk.feed, "/").concat(t),
            prefetch: !1,
            children: (0, r.jsxs)("a", {
              className:
                "group flex overflow-hidden items-center p-[0.35rem] pr-3 mr-2 w-auto text-sm font-medium text-white rounded-full ".concat(
                  i
                ),
              children: [
                (0, r.jsx)(S.Avatar, { user: a, avatar: n, size: 40 }),
                (0, r.jsx)("p", {
                  title: a,
                  className:
                    "ml-4 text-lg font-medium active:text-blue-100 group-hover:underline underline-offset-2 active:underline-offset-4 break-all line-clamp-1 md:text-xl",
                  children: a,
                }),
              ],
            }),
          });
        },
        P = t(12540),
        Z = t(12197),
        A = t(25428),
        I = t(45123),
        B = t(95862),
        q = t(64295),
        L = t(30626),
        D = t(71335),
        M = t(74210),
        E = t(38588);
      function R(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, r = new Array(a); t < a; t++) r[t] = e[t];
        return r;
      }
      function T(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      function F(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (a) {
              T(e, a, t[a]);
            });
        }
        return e;
      }
      function H(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return R(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, a) {
            if (!e) return;
            if ("string" === typeof e) return R(e, a);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return R(e, a);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var U = function (e) {
        var a = e.prompt,
          t = e.currentId,
          n = e.jobTypes,
          o = (e.setJobTypes, (0, v.u)(x.V)),
          s = o.pathname,
          l = o.imageSize,
          c = o.typeFilter,
          u = o.imageLayout,
          d = o.checkingFavourites,
          m = o.dedupe,
          h = o.setModalState,
          p = (o.modalState, o.isSM, o.isXS),
          g = o.setQuery,
          f = (0, (0, v.u)(M.d).useListOfJobs)({
            skipDedupe: !0,
            initialSettings: { jobStatus: "completed", amount: 10 },
          }),
          b = (0, i.useMemo)(
            function () {
              return f.jobsList.filter(function (e) {
                return e.id !== t && e.id;
              });
            },
            [t, f.jobsList, n]
          );
        (0, i.useEffect)(
          function () {
            return (
              f.reset(),
              (f.settings.prompt = a),
              f.firstLoad(),
              function () {
                return f.exit();
              }
            );
          },
          [a]
        ),
          (0, i.useEffect)(
            function () {
              return (
                f.jobsList.length > 0 &&
                  h(function (e) {
                    return F({}, e, { jobDataArrayTemp: H(b) });
                  }),
                function () {
                  h(function (e) {
                    return F({}, e, { jobDataArrayTemp: [] });
                  });
                }
              );
            },
            [b, f.jobsList, h]
          );
        var y = (0, i.useRef)(),
          w = {
            columnGutter: 24,
            rowGutter: 24,
            columnWidth: (function () {
              switch (!0) {
                case !p && "small" === l:
                  return 64;
                case "small" === l:
                  return 126;
                case "medium" === l:
                  return 256;
                default:
                  return 512;
              }
            })(),
            overscanBy: "Infinity",
            render: E.TU,
            itemKey: function (e) {
              return null === e || void 0 === e ? void 0 : e.id;
            },
            pathname: s,
            typeFilter: c,
            dedupe: m,
            checkingFavourites: d,
            imageLayout: u,
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className:
                "flex flex-wrap justify-between items-center mt-16 mb-8",
              children: [
                (0, r.jsxs)("h2", {
                  className: "flex items-center text-2xl",
                  children: [
                    (0, r.jsx)(Z.ol, {
                      height: "28",
                      className: "mr-2 text-[#B8D0FF] ",
                    }),
                    " Explore Related",
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "flex items-center",
                  children: (0, r.jsxs)(_.Z, {
                    title: "Search all jobs",
                    className: "rounded-full !px-4",
                    onClick: function () {
                      return g(a, "".concat(z.jk.home, "/feed"));
                    },
                    children: [
                      "Search more",
                      (0, r.jsx)(D.Z, {
                        height: "18",
                        className: "ml-2 -rotate-45",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "h-full",
              children:
                '"null"' === a
                  ? (0, r.jsx)("h3", {
                      className:
                        "my-16 text-xl leading-[32px] text-center text-white",
                      children: "No other jobs found with this prompt.",
                    })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        "not_loading" === f.loadingState &&
                          0 === b.length &&
                          (0, r.jsx)("h3", {
                            className:
                              "my-16 text-xl leading-[32px] text-center text-white",
                            children: "No other jobs found with this prompt.",
                          }),
                        !f.searching &&
                          f.jobsList[0] &&
                          (0, r.jsx)("div", {
                            className: "flex gap-4 w-full",
                            children: (0, r.jsx)(
                              E.Et,
                              F(
                                {
                                  items: b,
                                  containerRef: y,
                                  refreshApi: f.refreshApi,
                                },
                                w
                              ),
                              f.jobsList[0].id + c + m
                            ),
                          }),
                        "loading" === f.loadingState &&
                          (0, r.jsx)("h3", {
                            className: "my-16 text-xl text-center text-white",
                            children: (0, r.jsx)(Z.gb, {
                              className: "animate-spin",
                              color: "",
                              height: "32",
                            }),
                          }),
                      ],
                    }),
            }),
          ],
        });
      };
      function W(e) {
        return (
          (W = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          W(e)
        );
      }
      function J(e, a) {
        return !a || ("object" !== G(a) && "function" !== typeof a)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : a;
      }
      function V(e, a) {
        return (
          (V =
            Object.setPrototypeOf ||
            function (e, a) {
              return (e.__proto__ = a), e;
            }),
          V(e, a)
        );
      }
      var G = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function Q(e) {
        var a = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = W(e);
          if (a) {
            var i = W(this).constructor;
            t = Reflect.construct(r, arguments, i);
          } else t = r.apply(this, arguments);
          return J(this, t);
        };
      }
      var K = (function (e) {
        !(function (e, a) {
          if ("function" !== typeof a && null !== a)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(a && a.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            a && V(e, a);
        })(t, e);
        var a = Q(t);
        function t(e) {
          var r;
          return (
            (function (e, a) {
              if (!(e instanceof a))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((r = a.call(this, e)).state = { hasError: !1 }),
            r
          );
        }
        var i = t.prototype;
        return (
          (i.componentDidCatch = function (e, a) {
            console.log({ error: e, errorInfo: a });
          }),
          (i.render = function () {
            return this.state.hasError
              ? (0, r.jsx)("h1", {
                  className: "text-base text-slate-400",
                  children: "Oops, something went wrong.",
                })
              : this.props.children;
          }),
          (t.getDerivedStateFromError = function (e) {
            return { hasError: !0 };
          }),
          t
        );
      })(i.Component);
      function $(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, r = new Array(a); t < a; t++) r[t] = e[t];
        return r;
      }
      function X(e, a) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, a) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                i,
                n = [],
                o = !0,
                s = !1;
              try {
                for (
                  t = t.call(e);
                  !(o = (r = t.next()).done) &&
                  (n.push(r.value), !a || n.length !== a);
                  o = !0
                );
              } catch (l) {
                (s = !0), (i = l);
              } finally {
                try {
                  o || null == t.return || t.return();
                } finally {
                  if (s) throw i;
                }
              }
              return n;
            }
          })(e, a) ||
          ee(e, a) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Y(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return $(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          ee(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ee(e, a) {
        if (e) {
          if ("string" === typeof e) return $(e, a);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(t)
              : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? $(e, a)
              : void 0
          );
        }
      }
      var ae = function (e) {
          var a,
            t,
            g,
            S,
            D,
            M,
            E,
            R,
            T,
            F,
            H,
            W,
            J = e.jobData,
            V = e.setLoaded,
            G = e.loaded,
            Q = e.modalRef,
            $ =
              (e.increaseIndex,
              e.decreaseIndex,
              e.loadedDebounce,
              e.preloadIds),
            ee = e.type,
            ae = void 0 === ee ? "modal" : ee,
            te = (0, k.Z)(J),
            re = te.handleFave,
            ie = te.handlePublish,
            ne = te.handleHidden,
            oe = te.handleFlag,
            se = te.handleVote,
            le = te.faved,
            ce = te.hidden,
            ue = te.published,
            de = te.voted,
            me = (0, v.u)(x.V),
            he = me.setQuery,
            pe = me.isMD,
            ge = (me.isXS, me.imageSize, me.isSM, (0, i.useState)(!1)),
            fe = ge[0],
            be = ge[1],
            ye = (0, i.useRef)(null),
            ve = (0, i.useState)(null),
            we = ve[0],
            ke = ve[1];
          (0, i.useEffect)(
            function () {
              return function () {
                be(!1);
              };
            },
            [J, Q]
          );
          var xe = (0, i.useMemo)(
              function () {
                var e = [];
                return (
                  (null === J || void 0 === J ? void 0 : J.prompt) &&
                    J.prompt.length > 1 &&
                    J.prompt.split(" ").map(function (a, t, r) {
                      if (0 !== t) {
                        var i = r[t - 1],
                          n = ""
                            .concat(i.replace(",", ""), " ")
                            .concat(a.replace(",", ""))
                            .toLowerCase();
                        w.includes(n) && e.push(n);
                      }
                    }),
                  Y(new Set(e))
                );
              },
              [null === J || void 0 === J ? void 0 : J.prompt]
            ),
            je = (0, i.useMemo)(
              function () {
                var e, a, t;
                return (0, j.R3)(
                  null === J ||
                    void 0 === J ||
                    null === (e = J.image_paths) ||
                    void 0 === e
                    ? void 0
                    : e.length,
                  null === J ||
                    void 0 === J ||
                    null === (a = J.event) ||
                    void 0 === a
                    ? void 0
                    : a.height,
                  null === J ||
                    void 0 === J ||
                    null === (t = J.event) ||
                    void 0 === t
                    ? void 0
                    : t.width
                );
              },
              [
                null === J ||
                void 0 === J ||
                null === (a = J.event) ||
                void 0 === a
                  ? void 0
                  : a.height,
                null === J ||
                void 0 === J ||
                null === (t = J.event) ||
                void 0 === t
                  ? void 0
                  : t.width,
                null === J ||
                void 0 === J ||
                null === (g = J.image_paths) ||
                void 0 === g
                  ? void 0
                  : g.length,
              ]
            ),
            Ne = je[0],
            ze = je[1],
            Ce = (0, i.useMemo)(
              function () {
                if (Ne && ze) {
                  switch (!0) {
                    case Ne > ze:
                      if (ye.current && Ne > ye.current.offsetHeight) return !0;
                      break;
                    case Ne < ze:
                      if (ye.current && ze <= ye.current.offsetWidth) return !0;
                      break;
                    default:
                      if (ye.current && Ne > ye.current.offsetHeight) return !0;
                  }
                  return !!J.grid_id;
                }
                return !1;
              },
              [Ne, ze, ye.current]
            ),
            _e = (0, i.useState)(null),
            Se = _e[0],
            Oe = _e[1],
            Pe = {
              prompt: J.prompt,
              jobId: J.id,
              username: J.username,
              faved: le,
              faveCallback: re,
              platform_message_id: J.platform_message_id,
              platform_channel_id:
                J.platform_thread_id || J.platform_channel_id,
              platform_channel: J.platform_channel,
              guild_id: J.guild_id,
              userId: J.user_id,
              followed_by_user: J.followed_by_user,
              published: ue,
              hidden: ce,
              full_command: J.full_command,
              handleFlag: oe,
              handleHidden: ne,
              handlePublish: ie,
              handleVote: se,
              voted: de,
              collectionModalCallback: function () {
                return Oe(J.id);
              },
            },
            Ze = (0, A.ZP)(Pe),
            Ae =
              ((0, i.useRef)(),
              (0, i.useRef)(),
              X((0, j.L0)(J.enqueue_time), 2)),
            Ie = Ae[0],
            Be = Ae[1],
            qe = (0, i.useState)(
              "undefined" !== typeof document
                ? null === (S = document.getElementById("imageContainer")) ||
                  void 0 === S
                  ? void 0
                  : S.clientHeight
                : null
            ),
            Le = qe[0],
            De = qe[1];
          (0, i.useEffect)(
            function () {
              var e;
              De(
                null === (e = ye.current) || void 0 === e
                  ? void 0
                  : e.clientHeight
              );
            },
            [ye.current]
          );
          var Me = [
              {
                title: "1",
                disabled: !1,
                CustomButton: (0, r.jsx)(q.t, {
                  className: "rounded-full",
                  handleVote: se,
                  voted: de,
                  type: 1,
                }),
              },
              {
                title: "2",
                disabled: !1,
                CustomButton: (0, r.jsx)(q.t, {
                  className: "rounded-full",
                  handleVote: se,
                  voted: de,
                  type: 2,
                }),
              },
              {
                title: "4",
                disabled: !1,
                CustomButton: (0, r.jsx)(q.t, {
                  className: "rounded-full",
                  handleVote: se,
                  voted: de,
                  type: 4,
                }),
              },
              {
                title: "5",
                disabled: !1,
                CustomButton: (0, r.jsx)(q.t, {
                  className: "rounded-full",
                  handleVote: se,
                  voted: de,
                  type: 5,
                }),
              },
            ],
            Ee = (0, i.useState)(!1),
            Re = Ee[0],
            Te = Ee[1],
            Fe = (0, i.useMemo)(
              function () {
                var e;
                return (
                  (null === (e = J.full_command) || void 0 === e
                    ? void 0
                    : e.includes("--tile")) && 1 === J.event.batchSize
                );
              },
              [J.event.batchSize, J.full_command]
            );
          (0, i.useEffect)(
            function () {
              var e;
              (Ne *
                Math.min(
                  (null === (e = ye.current) || void 0 === e
                    ? void 0
                    : e.clientWidth) || 0,
                  ze
                )) /
                ze <
                0.9 * window.innerHeight &&
                window.innerHeight > window.innerWidth &&
                Ce &&
                be(!0);
            },
            [J, ye.current]
          );
          var He = (0, i.useMemo)(
              function () {
                for (
                  var e = [],
                    a = /<(https:\/\/s.mj.run\/.*?)>/g,
                    t = a.exec(J.full_command);
                  t;

                )
                  e.push(t[1]), (t = a.exec(J.full_command));
                return e;
              },
              [J.full_command]
            ),
            Ue = {
              id: J.reference_job_id,
              img:
                null === (D = J.event) || void 0 === D
                  ? void 0
                  : D.seedImageURL,
              num: parseInt(J.reference_image_num, 10),
            },
            We =
              (null === (M = J.event) || void 0 === M
                ? void 0
                : M.imagePrompts) || He;
          "upscale" !== J.type &&
            (null === (E = J.event) || void 0 === E
              ? void 0
              : E.seedImageURL) &&
            We.length > 0 &&
            We.shift();
          var Je = (0, i.useMemo)(
              function () {
                var e;
                return fe
                  ? Ne * (J.grid_id ? J.grid_cells / 4 : 1)
                  : Math.min(
                      Le ||
                        (null === (e = ye.current) || void 0 === e
                          ? void 0
                          : e.clientHeight) ||
                        500,
                      Ne
                    );
              },
              [Le, fe, Ne]
            ),
            Ve = (0, i.useMemo)(
              function () {
                var e;
                return fe
                  ? ze * (J.grid_id ? J.grid_cells / 4 : 1)
                  : ze *
                      (Math.min(
                        Le ||
                          (null === (e = ye.current) || void 0 === e
                            ? void 0
                            : e.clientHeight) ||
                          500,
                        Ne
                      ) /
                        Ne);
              },
              [Le, fe, Ne, ze]
            );
          (0, i.useMemo)(
            function () {
              return parseInt(J.enqueue_time.split("-", 2)[1], 10);
            },
            [J.enqueue_time]
          );
          return (0, r.jsxs)(r.Fragment, {
            children: [
              !!Se &&
                (0, r.jsx)(C.Z, {
                  open: !!Se,
                  setOpen: function () {
                    return Oe(null);
                  },
                  selections: { jobIdsAll: [Se] },
                }),
              (0, r.jsxs)(K, {
                children: [
                  (0, r.jsx)("div", {
                    className: "mx-auto w-full max-w-5xl h-0",
                    children: (0, r.jsx)("div", {
                      className:
                        "flex absolute justify-end p-4 w-full max-w-5xl ".concat(
                          "standalone" === ae && "mt-6"
                        ),
                      children: (0, r.jsx)("div", {
                        className:
                          "flex gap-1.5 p-1.5 rounded-full .bg-[#0a0e1a]",
                        children: (0, r.jsx)("button", {
                          className: (0, j.CN)(
                            "flex z-50 justify-center  hover:opacity-100 items-center w-9 h-9  backdrop-blur-lg text-white/50 hover:text-white active:bg-uiBlue-500/30 hover:bg-uiBlue-500/50 active:bg-opacity-50 rounded-full border-[#7898D7]/50 hover:border-transparent active:border-[#7898D7] disabled:opacity-0 transition-all mix-blend-exclusion duration-100 ease-in-out",
                            !Ce && G && "opacity-0"
                          ),
                          onClick: function () {
                            ye.current &&
                              (fe || Ce) &&
                              ((Q.current.scrollTop = 0),
                              fe || De(ye.current.clientHeight),
                              be(!fe));
                          },
                          children: G
                            ? (0, r.jsx)(o.Z, { height: 18, className: "" })
                            : (0, r.jsx)(Z.gb, {
                                color: "",
                                height: 18,
                                className: "animate-spin",
                              }),
                        }),
                      }),
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "relative w-full h-auto",
                    children: [
                      (0, r.jsx)(n.u.Child, {
                        enter: "z-50",
                        enterFrom: "opacity-0 z-50 scale-90",
                        enterTo: "opacity-100 z-50 scale-100",
                        className:
                          "z-50 transition-all duration-300 ease-in-out delay-200 select-none",
                        children: (0, r.jsx)("div", {
                          className:
                            "relative shrink-0 rounded-2xl m-auto flex w-full justify-center items-start md:items-center h-full ".concat(
                              "standalone" === ae && "-mt-4"
                            ),
                          children: (0, r.jsx)("div", {
                            ref: ye,
                            id: "imageContainer",
                            className:
                              "  sm:border-[2rem] border-transparent flex relative justify-center items-center w-full h-full rounded-t-3xl "
                                .concat(
                                  "modal" === ae
                                    ? "border-[0.75rem] "
                                    : "border-[0.75rem]",
                                  " "
                                )
                                .concat(
                                  !fe || Fe
                                    ? "aspect-square"
                                    : "standalone" !== ae
                                    ? "!border-0 "
                                    : ""
                                ),
                            style: { maxHeight: pe && !fe ? "80vh" : "" },
                            children: (0, r.jsx)("div", {
                              className:
                                "flex relative justify-center items-center m-auto cursor-pointer w-full h-full",
                              children: (0, r.jsx)(
                                b.default,
                                {
                                  src: J.grid_id
                                    ? ""
                                        .concat(
                                          "https://cdn.midjourney.com",
                                          "/grids/"
                                        )
                                        .concat(J.grid_id, ".png")
                                    : ""
                                        .concat(
                                          "https://cdn.midjourney.com",
                                          "/"
                                        )
                                        .concat(J.id, "/grid_0.png"),
                                  layout: "intrinsic",
                                  height: (J.grid_id, Je),
                                  width: (J.grid_id, Ve),
                                  unoptimized: !0,
                                  loading: "eager",
                                  style: {
                                    backgroundImage: J.grid_id
                                      ? "url("
                                          .concat(
                                            "https://cdn.midjourney.com",
                                            "/grids/"
                                          )
                                          .concat(J.grid_id, "_640_N.webp")
                                      : (null === window || void 0 === window
                                          ? void 0
                                          : window.devicePixelRatio) > 1
                                      ? "url("
                                          .concat(
                                            "https://cdn.midjourney.com",
                                            "/"
                                          )
                                          .concat(J.id, "/grid_0_640_N.webp)")
                                      : "url("
                                          .concat(
                                            "https://cdn.midjourney.com",
                                            "/"
                                          )
                                          .concat(J.id, "/grid_0_384_N.webp)"),
                                    backgroundSize: "cover",
                                  },
                                  objectFit: "cover",
                                  className:
                                    "w-full select-none rounded-xl z-10 rendering-contrast cursor-default self-start justify-self-center  "
                                      .concat(
                                        !G && ".blur-3xl",
                                        "\n                "
                                      )
                                      .concat(
                                        (Ce || Fe) && "!cursor-zoom-in",
                                        "\n                "
                                      )
                                      .concat(
                                        fe && "!cursor-zoom-out",
                                        "\n                "
                                      )
                                      .concat(
                                        fe &&
                                          !Fe &&
                                          "standalone" !== ae &&
                                          "!cursor-zoom-out rounded-t-3xl rounded-b-none",
                                        "\n                "
                                      )
                                      .concat(Fe && !fe && "opacity-0"),
                                  alt: J.prompt,
                                  onClick: function () {
                                    ye.current &&
                                      (fe || Ce || Fe) &&
                                      ((Q.current.scrollTop = 0),
                                      fe || De(ye.current.clientHeight),
                                      be(!fe));
                                  },
                                },
                                J.id
                              ),
                            }),
                          }),
                        }),
                      }),
                      (0, r.jsx)(n.u.Child, {
                        enter:
                          "transition-all z-[-1] duration-300 ease-out delay-100",
                        enterFrom: "translate-y-5 z-[-1] opacity-0",
                        enterTo: "translate-y-0 z-[-1] opacity-100",
                        className:
                          "absolute bottom-0 left-1/2 z-[-100] w-[20000px] h-[20000px] bg-[#0a0e1a] -translate-x-1/2 pointer-events-none ",
                        style: {
                          backgroundImage:
                            Fe && !fe
                              ? "url("
                                  .concat("https://cdn.midjourney.com", "/")
                                  .concat(J.id, "/grid_0_384_N.webp)")
                              : "",
                          backgroundRepeat: "repeat",
                        },
                      }),
                    ],
                  }),
                  (0, r.jsxs)(n.u.Child, {
                    enter:
                      "transition-all z-[-1] duration-300 ease-out delay-100",
                    enterFrom: "translate-y-5 z-[-1] opacity-0",
                    enterTo: "translate-y-0 z-[-1] opacity-100",
                    className:
                      "relative z-[-1] p-8 pt-5 mx-auto w-full max-w-5xl text-white rounded-2xl content",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "flex flex-wrap-reverse justify-between w-full",
                            children: [
                              (0, r.jsxs)("div", {
                                id: "userButton",
                                className:
                                  "flex justify-start items-center -ml-4",
                                children: [
                                  (0, r.jsx)(O, {
                                    username: J.username,
                                    userId: J.user_id,
                                    avatar: J.avatar_job_id,
                                  }),
                                  (0, r.jsx)(L.Z, {
                                    user_id: J.user_id,
                                    followed_by_user: J.followed_by_user,
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "flex gap-4 justify-between items-center mb-4 w-full bg-darkBlue-900 md:justify-end md:mb-0 md:w-auto",
                                children: [
                                  (0, r.jsx)(B.Z, {
                                    hover: !0,
                                    className: "",
                                    optionArray: Ze,
                                    maxWidth: "max-w-max",
                                    buttonHoverStyle:
                                      "bg-uiBlue-500/30 bg-opacity-50 rounded-full",
                                    children: (0, r.jsx)("button", {
                                      className:
                                        "flex justify-center items-center w-10 h-10 text-[#D6DDF0] active:bg-uiBlue-500/30 hover:bg-uiBlue-500/50 active:bg-opacity-50 rounded-full  border-[#7898D7]/50 hover:border-transparent active:border-[#7898D7] disabled:opacity-0 transition-all duration-100 ease-in-out",
                                      children: (0, r.jsx)(Z.bd, {
                                        height: "18",
                                      }),
                                    }),
                                  }),
                                  (0, r.jsx)("button", {
                                    className:
                                      "flex justify-center items-center w-10 h-10 text-[#D6DDF0] active:bg-uiBlue-500/30 hover:bg-uiBlue-500/50 active:bg-opacity-50 rounded-full border-[#7898D7]/50 hover:border-transparent active:border-[#7898D7] disabled:opacity-0 transition-all duration-100 ease-in-out",
                                    onClick: function () {
                                      return (0, j.OJ)(
                                        J.username,
                                        J.id,
                                        J.prompt
                                      );
                                    },
                                    title: "Save with prompt",
                                    children: (0, r.jsx)(Z.vc, {
                                      height: "18",
                                    }),
                                  }),
                                  (0, r.jsx)("button", {
                                    title: "Bookmark",
                                    className:
                                      "\n                  text-[#D6DDF0] disabled:opacity-0\n                 flex rounded-full hover:bg-uiBlue-500/50 active:bg-uiBlue-500/30 justify-center items-center w-10 h-10   transition-all duration-100 ease-in-out",
                                    onClick: re,
                                    children: le
                                      ? (0, r.jsx)(s.Z, {
                                          height: "18",
                                          fill: "#D6DDF0",
                                        })
                                      : (0, r.jsx)(s.Z, { height: "20" }),
                                  }),
                                  (0, r.jsx)(B.Z, {
                                    hover: Re,
                                    setHover: Te,
                                    itemsClassName:
                                      "rounded-full gap-1 flex flex-col shadow-none bg-darkBlue-500",
                                    optionArray: Me,
                                    maxWidth: "max-w-max",
                                    placement: "top",
                                    offset: [0, -41],
                                    buttonHoverStyle:
                                      "bg-uiBlue-500/30 rounded-full",
                                    children: (0, r.jsxs)("button", {
                                      title: "Open Options",
                                      className:
                                        "\n                  text-[#D6DDF0] disabled:opacity-0 flex rounded-full hover:bg-uiBlue-500/50 active:bg-uiBlue-500/30 justify-center items-center w-10 h-10   transition-all duration-100 ease-in-out",
                                      children: [
                                        (0, r.jsx)("div", {
                                          className: "absolute centerAbs",
                                          children: (function () {
                                            switch (de) {
                                              case 1:
                                                return (0, r.jsx)(P.QC, {
                                                  height: 20,
                                                  className:
                                                    "absolute centerAbs",
                                                });
                                              case 2:
                                                return (0, r.jsx)(P.H9, {
                                                  height: 20,
                                                  className:
                                                    "absolute centerAbs",
                                                });
                                              case 4:
                                                return (0, r.jsx)(P.cd, {
                                                  height: 20,
                                                  className:
                                                    "absolute centerAbs",
                                                });
                                              case 5:
                                                return (0, r.jsx)(P.Mx, {
                                                  height: 20,
                                                  className:
                                                    "absolute centerAbs",
                                                });
                                              default:
                                                return (0, r.jsx)(l.Z, {
                                                  height: 20,
                                                });
                                            }
                                          })(),
                                        }),
                                        (0, r.jsx)(l.Z, {
                                          height: 18,
                                          className: "invisible",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", { className: "h-4" }),
                          (0, r.jsxs)("div", {
                            className:
                              "flex flex-col gap-8 items-start md:flex-row md:gap-16",
                            children: [
                              (0, r.jsxs)("div", {
                                id: "modalPrompt",
                                className:
                                  "relative shrink-0 w-full text-lg font-medium text-slate-300 md:w-4/6 md:text-xl",
                                children: [
                                  "string" ===
                                  typeof (null === (R = J.event) || void 0 === R
                                    ? void 0
                                    : R.textPrompt)
                                    ? J.prompt
                                    : null === (T = J.event) || void 0 === T
                                    ? void 0
                                    : T.textPrompt.map(function (e, a) {
                                        return (0,
                                        r.jsxs)("div", { children: [a > 0 && (0, r.jsxs)("div", { className: "flex gap-1 items-center my-2 w-full text-slate-400", children: [(0, r.jsx)("hr", { className: "shrink w-full border-slate-400 opacity-20 border-1" }), (0, r.jsx)("span", { className: "opacity-70", children: "+" }), (0, r.jsx)("hr", { className: "shrink w-full border-slate-400 opacity-20 border-1" })] }), (0, r.jsx)("p", { children: e })] }, e);
                                      }),
                                  "undefined" !== typeof document &&
                                    (0, r.jsx)(I.Z, {
                                      wordRef: "modalPrompt",
                                      setQuery: he,
                                    }),
                                ],
                              }),
                              xe.length > 0 &&
                                (0, r.jsx)("div", {
                                  className:
                                    "flex flex-wrap gap-2 items-start w-full h-auto md:justify-end",
                                  children: xe.map(function (e, a) {
                                    return (0, r.jsx)(
                                      _.Z,
                                      {
                                        className:
                                          "flex justify-center items-center py-1 px-3 w-auto text-[#D6DDF0] bg-uiBlue-500/50 rounded-md",
                                        onClick: function () {
                                          return he(
                                            '"'.concat(e, '"'),
                                            "".concat(z.jk.home, "/feed")
                                          );
                                        },
                                        children: (0, r.jsxs)("p", {
                                          className:
                                            "text-sm font-normal text-white",
                                          children: [
                                            (0, r.jsx)("span", {
                                              className:
                                                "mr-[0.1rem] opacity-50",
                                              children: "#",
                                            }),
                                            e,
                                          ],
                                        }),
                                      },
                                      a
                                    );
                                  }),
                                }),
                            ],
                          }),
                          (0, r.jsx)("div", { className: "h-8" }),
                          (0, r.jsxs)("div", {
                            className: "flex flex-col gap-4 md:flex-row",
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "flex gap-3 justify-between items-center p-2 px-3 text-base text-slate-200 bg-slate-600/20 rounded",
                                children: [
                                  (0, r.jsxs)("span", {
                                    title: "Date",
                                    className:
                                      "flex gap-2 items-center tracking-wider text-blue-200 opacity-50 font-base",
                                    children: [
                                      (0, r.jsx)(c.Z, {
                                        height: 18,
                                        className: "inline",
                                      }),
                                      (0, r.jsx)("span", {
                                        className:
                                          "inline leading-[17px] md:hidden",
                                        children: "Date:",
                                      }),
                                    ],
                                  }),
                                  " ",
                                  (0, r.jsx)("time", {
                                    className: "",
                                    title: Ie,
                                    dateTime: Ie,
                                    children: Be,
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "flex gap-3 justify-between items-center p-2 px-3 text-base text-slate-200 bg-slate-600/20 rounded",
                                children: [
                                  (0, r.jsxs)("span", {
                                    title: "Size",
                                    className:
                                      "flex gap-2 items-center tracking-wider text-blue-200 opacity-50 font-base",
                                    children: [
                                      (0, r.jsx)(o.Z, {
                                        height: 18,
                                        className: "inline",
                                      }),
                                      (0, r.jsx)("span", {
                                        className:
                                          "inline leading-[17px] md:hidden",
                                        children: "Size:",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("span", {
                                    className: "",
                                    children: [
                                      (null === J ||
                                      void 0 === J ||
                                      null === (F = J.event) ||
                                      void 0 === F
                                        ? void 0
                                        : F.width) || 0,
                                      (0, r.jsx)("span", {
                                        className: "mx-1 opacity-50",
                                        children: "x",
                                      }),
                                      (null === J ||
                                      void 0 === J ||
                                      null === (H = J.event) ||
                                      void 0 === H
                                        ? void 0
                                        : H.height) || 0,
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "flex gap-3 justify-between items-center p-2 px-3 text-base text-slate-200 bg-slate-600/20 rounded",
                                children: [
                                  (0, r.jsxs)("span", {
                                    title: "Job Type",
                                    className:
                                      "flex gap-2 items-center tracking-wider text-blue-200 opacity-50 font-base",
                                    children: [
                                      (0, r.jsx)(u.Z, {
                                        height: 18,
                                        className: "inline",
                                      }),
                                      (0, r.jsx)("span", {
                                        className:
                                          "inline leading-[17px] md:hidden",
                                        children: "Mode:",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "flex gap-2 capitalize",
                                    children:
                                      null === J ||
                                      void 0 === J ||
                                      null === (W = J.event) ||
                                      void 0 === W
                                        ? void 0
                                        : W.eventType.replace("-", " "),
                                  }),
                                ],
                              }),
                              null != J.low_priority &&
                                (0, r.jsxs)("div", {
                                  className:
                                    "flex gap-3 justify-between items-center p-2 px-3 text-base text-slate-200 bg-slate-600/20 rounded",
                                  children: [
                                    (0, r.jsxs)("span", {
                                      title: "Job Type",
                                      className:
                                        "flex gap-2 items-center tracking-wider text-blue-200 opacity-50 font-base",
                                      children: [
                                        (0, r.jsx)(d.Z, {
                                          height: 18,
                                          className: "inline",
                                        }),
                                        (0, r.jsx)("span", {
                                          className:
                                            "inline leading-[17px] md:hidden",
                                          children: "Priority:",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "flex gap-2 capitalize",
                                      children: J.low_priority
                                        ? "Relaxed"
                                        : "Fast",
                                    }),
                                  ],
                                }),
                              (null === J || void 0 === J
                                ? void 0
                                : J._parsed_params) &&
                                (0, r.jsxs)("button", {
                                  className:
                                    "hidden relative gap-3 justify-between items-center p-2 px-3 text-base text-slate-200 bg-slate-600/20 rounded cursor-help md:flex group-button",
                                  onClick: function () {
                                    f()(
                                      null === J || void 0 === J
                                        ? void 0
                                        : J.full_command
                                    );
                                  },
                                  children: [
                                    (0, r.jsx)("span", {
                                      title: "Click to copy full command",
                                      className:
                                        "flex gap-2 items-center tracking-wider text-blue-200 opacity-50 font-base",
                                      children: (0, r.jsx)(m.Z, {
                                        height: 18,
                                        className: "inline",
                                      }),
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "absolute !-top-8 p-2 px-4 min-w-max text-sm text-slate-200 bg-darkBlue-500 rounded before:!border-t-darkBlue-500 opacity-0 [.group-button:hover_&]:opacity-100 transition-none [.group-button:hover_&]:transition-opacity !duration-[1ms] delay-300 pointer-events-none tooltipArrow tooltip centerAbs",
                                      children:
                                        (null === J || void 0 === J
                                          ? void 0
                                          : J._parsed_params) &&
                                        Object.keys(
                                          null === J || void 0 === J
                                            ? void 0
                                            : J._parsed_params
                                        ).map(function (e, a) {
                                          var t =
                                            null === J || void 0 === J
                                              ? void 0
                                              : J._parsed_params[e];
                                          if (!(0, j.z5)(t))
                                            return (0, r.jsxs)(
                                              "p",
                                              {
                                                className:
                                                  "flex gap-4 justify-between w-full font-mono",
                                                children: [
                                                  (0, r.jsxs)("span", {
                                                    className: "text-blue-500",
                                                    children: [e, ":"],
                                                  }),
                                                  " ",
                                                  JSON.stringify(t),
                                                ],
                                              },
                                              a
                                            );
                                        }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      (Ue.id || We.length > 0) &&
                        (0, r.jsx)("div", { className: "h-8" }),
                      (0, r.jsxs)("div", {
                        className: "flex flex-row flex-wrap gap-2 gap-y-5",
                        children: [
                          We.length > 0 &&
                            (0, r.jsxs)("div", {
                              className:
                                "rounded-xl lg:border border-slate-400/10 miniScrollbar lg:p-4 bg-darkBlue-900/90 text-base h-auto shadow-black/50 flex gap-3 items-start w-auto max-w-full flex-col flex-wrap",
                              children: [
                                (0, r.jsxs)("span", {
                                  className:
                                    "flex gap-1 justify-start items-center text-sm font-bold tracking-wide leading-[0] text-slate-400 uppercase",
                                  children: [
                                    (0, r.jsx)(h.Z, {
                                      height: 16,
                                      className: "inline",
                                    }),
                                    " Images",
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "flex flex-wrap gap-2",
                                  children:
                                    null === We || void 0 === We
                                      ? void 0
                                      : We.map(function (e, a) {
                                          return (0,
                                          r.jsx)(y.default, { href: e, rel: "noreferrer", children: (0, r.jsx)("a", { href: e, target: "_blank", className: "aspect-square overflow-hidden relative w-20 max-w-[6rem] bg-slate-900/50 rounded-lg cursor-pointer hoverUp", rel: "noreferrer", children: (0, r.jsx)(b.default, { unoptimized: !0, src: e, layout: "fill", objectFit: "cover", alt: "Image prompt ".concat(a + 1), className: "w-full h-auto" }) }) }, e);
                                        }),
                                }),
                              ],
                            }),
                          Ue.id &&
                            (0, r.jsxs)("div", {
                              className:
                                "rounded-xl lg:border border-slate-400/10 miniScrollbar lg:p-4 bg-darkBlue-900/90 text-base h-auto shadow-black/50 flex gap-3 items-start w-auto flex-col",
                              children: [
                                (0, r.jsxs)("span", {
                                  className:
                                    "flex gap-1 justify-start items-center text-sm font-bold tracking-wide leading-[0] text-slate-400 uppercase",
                                  children: [
                                    (0, r.jsx)(p.Z, {
                                      height: 16,
                                      className: "inline",
                                    }),
                                    " Parent",
                                  ],
                                }),
                                (0, r.jsx)(
                                  "button",
                                  {
                                    title: "Open parent",
                                    href: ""
                                      .concat(z.jk.jobs, "/")
                                      .concat(Ue.id),
                                    className:
                                      "overflow-hidden relative w-20 h-20 bg-slate-900/50 rounded-lg cursor-pointer hoverUp",
                                    rel: "noreferrer",
                                    onClick: function () {
                                      return (0, j.rX)(Ue.id);
                                    },
                                    children: (0, r.jsx)(b.default, {
                                      src: "/".concat(Ue.id, "/grid_0.webp"),
                                      loader: N.qs,
                                      layout: "intrinsic",
                                      objectFit: "cover",
                                      height: 80,
                                      width: 80,
                                      alt: "Parent job ".concat(Ue.id),
                                      className: "w-full h-auto",
                                    }),
                                  },
                                  Ue.id
                                ),
                              ],
                            }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "",
                        children: (0, r.jsx)(
                          U,
                          {
                            prompt: '"'.concat(J.prompt, '"'),
                            currentId: J.id,
                            jobTypes: we,
                            setJobTypes: ke,
                          },
                          J.id
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(b.default, {
                src: J.grid_id
                  ? ""
                      .concat("https://cdn.midjourney.com", "/grids/")
                      .concat(J.grid_id, ".png")
                  : ""
                      .concat("https://cdn.midjourney.com", "/")
                      .concat(J.id, "/grid_0.png"),
                layout: "fixed",
                unoptimized: !0,
                loading: "eager",
                priority: !0,
                height: 0,
                width: 0,
                alt: "",
                className: "",
                onLoadingComplete: function () {
                  return V(!0);
                },
              }),
              (null === $ || void 0 === $ ? void 0 : $.next) &&
                G &&
                (0, r.jsx)(b.default, {
                  src: $.nextGrid
                    ? ""
                        .concat("https://cdn.midjourney.com", "/grids/")
                        .concat($.next, ".png")
                    : ""
                        .concat("https://cdn.midjourney.com", "/")
                        .concat($.next, "/grid_0.png"),
                  layout: "fixed",
                  unoptimized: !0,
                  loading: "eager",
                  height: 0,
                  width: 0,
                  alt: "",
                }),
            ],
          });
        },
        te = (0, i.memo)(ae);
    },
    45123: function (e, a, t) {
      var r = t(85893),
        i = t(11355),
        n = t(20640),
        o = t.n(n),
        s = t(23279),
        l = t.n(s),
        c = t(95825),
        u = t(12197);
      a.Z = function (e) {
        var a = e.wordRef,
          t = e.setQuery,
          n = (0, c.useTextSelection)(document.getElementById(a)),
          s = n.clientRect,
          d = (n.isCollapsed, n.textContent),
          m = l()(
            function () {
              return (
                !!d && (null === d || void 0 === d ? void 0 : d.length) > 1
              );
            },
            1e3,
            { leading: !m }
          );
        return null == s
          ? null
          : (0, r.jsxs)(i.u, {
              show: m() || !1,
              enterFrom: "opacity-0 ",
              enterTo: "opacity-100 ",
              enter: "transition-opacity duration-200 ease-in-out",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              leave:
                "transition-opacity transition-trasform duration-200 ease-in-out",
              className:
                "flex absolute top-full z-[500] gap-1 self-start p-1 mt-2 w-auto bg-darkBlue-900/95 rounded-md shadow-md shadow-uiBlue-500/70 backdrop-blur-md",
              children: [
                (0, r.jsx)("button", {
                  className:
                    "aspect-square w-10 hover:bg-uiBlue-500 active:bg-slate-900 rounded active:ring-2",
                  onClick: function () {
                    t(d, location.pathname);
                  },
                  title: "Search selection",
                  children: (0, r.jsx)(u.ol, { height: "16", className: "" }),
                }),
                (0, r.jsx)("button", {
                  className:
                    "aspect-square w-10 hover:bg-uiBlue-500 focus:bg-emerald-700 active:bg-slate-900 rounded active:ring-2",
                  onClick: function () {
                    return o()(d);
                  },
                  title: "Copy selection",
                  children: (0, r.jsx)(u.CK, { height: "16", className: "" }),
                }),
              ],
            });
      };
    },
    40622: function (e, a, t) {
      var r = t(85893),
        i = t(67294),
        n = t(11355),
        o = t(44681),
        s = t(8639),
        l = t(41664),
        c = t(11163),
        u = t(88305),
        d = t(44824),
        m = t(37940),
        h = t(12197),
        p = t(77492),
        g = t(38588);
      function f(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, r = new Array(a); t < a; t++) r[t] = e[t];
        return r;
      }
      function b(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      function y(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (a) {
              b(e, a, t[a]);
            });
        }
        return e;
      }
      function v(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return f(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, a) {
            if (!e) return;
            if ("string" === typeof e) return f(e, a);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return f(e, a);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var w = function (e) {
          var a,
            t,
            f,
            b = e.fixedData,
            w = e.liveData,
            k = e.settings,
            x = void 0 === k ? {} : k,
            j = e.searchCheck,
            N = void 0 === j ? b.searching : j,
            z = e.collectionID,
            C = (0, u.u)(d.V),
            _ = C.pathname,
            S = C.imageSize,
            O = C.typeFilter,
            P = C.imageLayout,
            Z = C.dedupe,
            A = C.isSM,
            I = C.isXS,
            B = C.isLG,
            q = C.adminMode,
            L = (0, i.useState)(0),
            D = L[0],
            M = L[1],
            E = (0, c.useRouter)(),
            R = (0, i.useRef)(),
            T = (0, i.useRef)(),
            F = ((0, i.useRef)(), (0, i.useState)(!1)),
            H = F[0],
            U = F[1],
            W = (0, i.useMemo)(
              function () {
                switch (!0) {
                  case !I && "small" === S:
                  case "small" === S:
                  case "medium" === S && !I:
                    return 126;
                  case "medium" === S && !A:
                    return 186;
                  case "large" === S && !I:
                    return 126;
                  case "large" === S && !A:
                    return 186;
                  case "large" === S && !B:
                  case "medium" === S:
                    return 256;
                  case "large" === S:
                    return 386;
                  default:
                    return 512;
                }
              },
              [I, S, A, B]
            ),
            J = (0, i.useRef)(b.jobsList.length || 0);
          (0, i.useEffect)(
            function () {
              J.current > b.jobsList.length &&
                b.jobsList.length &&
                M(function (e) {
                  return e + 1;
                }),
                (J.current = b.jobsList.length);
            },
            [b.jobsList.length, b.refreshApi]
          );
          var V = {
            columnGutter: "large" === S || "huge" === S ? 24 : 20,
            rowGutter: "large" === S || "huge" === S ? 24 : 20,
            columnWidth: W,
            overscanBy: x.overscanBy || 2,
            render: g.TU,
            itemKey: function (e, a) {
              return x.public
                ? ""
                    .concat(null === e || void 0 === e ? void 0 : e.id, "_")
                    .concat(a)
                : null === e || void 0 === e
                ? void 0
                : e.id;
            },
            pathname: _,
            typeFilter: O,
            dedupe: Z,
            imageLayout: P,
          };
          return (
            (0, i.useEffect)(function () {
              return (
                (window.onscroll = function () {
                  var e;
                  null ===
                    (e =
                      null === document || void 0 === document
                        ? void 0
                        : document.getSelection()) ||
                    void 0 === e ||
                    e.removeAllRanges();
                }),
                setTimeout(function () {
                  U(!0);
                }, 50),
                function () {
                  window.onscroll = null;
                }
              );
            }, []),
            (0, r.jsxs)(n.u, {
              appear: !0,
              show: !0,
              enterFrom: "opacity-0 translate-y-1",
              enterTo: "opacity-100 translate-y-0",
              className: "w-full transition duration-300 select-none",
              leaveTo: "opacity-0",
              leaveFrom: "opacity-100",
              children: [
                (0, r.jsx)(p.K, { feed: b, collectionID: z || null }),
                w &&
                  0 !== w.jobsList.length &&
                  !N &&
                  (0, r.jsx)(
                    g.Et,
                    y(
                      {
                        items: v(
                          w.jobsList.filter(function (e) {
                            return (
                              e.percentage_complete &&
                              e.percentage_complete > 10
                            );
                          })
                        ),
                        containerRef: R,
                        reverseGrid: !0,
                        refreshApi: w.refreshApi,
                        newJobs: !0,
                      },
                      V
                    ),
                    w.jobsList[0].id + O + Z
                  ),
                1 === b.jobsList.length &&
                  "No jobs found." === b.jobsList[0].msg &&
                  !(_ === m.jk.feed && 0 === Object.keys(E.query).length) &&
                  (0, r.jsx)("h3", {
                    className: "mt-12 h-full text-xl text-center text-white",
                    children:
                      x.emptyMessage ||
                      (b.fetchError
                        ? "The API seems to be having issues at the moment, please try again later."
                        : "No jobs found with current filters."),
                  }),
                1 === b.jobsList.length &&
                  "No jobs found." === b.jobsList[0].msg &&
                  _ === m.jk.feed &&
                  0 === Object.keys(E.query).length &&
                  (0, r.jsxs)("h3", {
                    className: "mt-12 h-full text-xl text-center text-white",
                    children: [
                      (0, r.jsxs)("span", {
                        className: "inline-flex gap-1 items-center",
                        children: [
                          "When you",
                          " ",
                          (0, r.jsx)(o.Z, {
                            height: 24,
                            color: "",
                            className: "inline mb-1 ml-1 text-blue-500",
                          }),
                          " ",
                          "follow a user, their jobs will appear here.",
                        ],
                      }),
                      " ",
                      (0, r.jsx)("br", {}),
                      " ",
                      (0, r.jsx)("br", {}),
                      (0, r.jsx)(l.default, {
                        href: m.jk.all,
                        shallow: !0,
                        children: (0, r.jsxs)("a", {
                          className:
                            "text-lg text-slate-400 hover:text-slate-100 underline underline-offset-4",
                          children: [
                            "Find users on the community feed",
                            (0, r.jsx)(s.Z, {
                              height: 24,
                              color: "",
                              className: "inline ml-1 -rotate-45",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                0 !==
                  (null === (a = b.jobsList) || void 0 === a
                    ? void 0
                    : a.length) &&
                  "No jobs found." !==
                    (null === (t = b.jobsList[0]) || void 0 === t
                      ? void 0
                      : t.msg) &&
                  (!!(null === x || void 0 === x ? void 0 : x.noLoader) ||
                    "loading" !== b.loadingState) &&
                  (0, r.jsx)(
                    g.Et,
                    y(
                      {
                        items: b.jobsList,
                        containerRef: T,
                        infinteLoadCallback: b.loadMore,
                        refreshApi: b.refreshApi,
                      },
                      V
                    ),
                    b.jobsList[0].id + O + D + Z + b.settings.orderBy + q
                  ),
                H &&
                  (0 ===
                    (null === b ||
                    void 0 === b ||
                    null === (f = b.jobsList) ||
                    void 0 === f
                      ? void 0
                      : f.length) ||
                    (!(null === x || void 0 === x ? void 0 : x.noLoader) &&
                      "loading" === b.loadingState)) &&
                  (0, r.jsx)("div", {
                    className:
                      "flex justify-center items-center h-32 max-h-[50vh] text-xl text-white md:h-64 item-center",
                    children: (0, r.jsx)(h.gb, {
                      color: "",
                      height: "36",
                      className: "text-center animate-spin",
                    }),
                  }),
                N &&
                  (0, r.jsx)("h3", {
                    className:
                      "flex absolute bottom-0 left-0 z-10 justify-center items-center w-full h-64 text-xl text-center text-white bg-gradient-to-t from-darkBlue-900 via-darkBlue-900 to-transparent",
                    children: (0, r.jsx)(h.gb, {
                      className: "animate-spin",
                      color: "",
                    }),
                  }),
              ],
            })
          );
        },
        k = i.memo(w);
      a.Z = k;
    },
    38588: function (e, a, t) {
      t.d(a, {
        TU: function () {
          return sa;
        },
        Et: function () {
          return na;
        },
      });
      var r = t(85893),
        i = t(67294),
        n = t(65440),
        o = t(11163),
        s = t(88305),
        l = t(41748),
        c = t(25675),
        u = t(82023),
        d = t.n(u),
        m = t(3202),
        h = t(45332),
        p = t(50402),
        g = t(37940),
        f = t(93090),
        b = t(25428),
        y = function (e) {
          switch (e.gridAmnt) {
            case 4:
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "absolute top-1/2 left-0 z-50 w-full border-b-[2px] border-transparent opacity-90 backdrop-brightness-0 -translate-y-1/2",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute top-0 left-1/2 z-50 h-full border-r-[2px] border-transparent opacity-90 backdrop-brightness-0 -translate-x-1/2",
                  }),
                ],
              });
            case 3:
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "absolute top-1/3 left-0 z-50 w-full border-b-[2px] border-transparent opacity-90 backdrop-brightness-0 -translate-y-1/2",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute top-2/3 left-0 z-50 w-full border-b-[2px] border-transparent opacity-90 backdrop-brightness-0 -translate-y-1/2",
                  }),
                ],
              });
            case 2:
              return (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)("div", {
                  className:
                    "absolute top-0 left-1/2 z-50 h-full border-r-[2px] border-transparent opacity-90 backdrop-brightness-0 -translate-x-1/2",
                }),
              });
            default:
              return null;
          }
        },
        v = t(41664),
        w = t(30658);
      function k(e) {
        var a = e.title,
          t = e.link,
          i = void 0 === t ? void 0 : t,
          n = e.externalLink,
          o = e.onClick,
          s = e.icon,
          l = e.danger,
          c = e.warn,
          u = (e.maxWidth, e.CustomButton),
          d = e.disabled,
          m = e.setOpen;
        return u
          ? (0, r.jsxs)("div", {
              disabled: d,
              children: [(0, r.jsx)("div", { children: u }), "}"],
            })
          : i
          ? (0, r.jsx)("div", {
              disabled: d,
              onClick: function () {
                return m(!1);
              },
              children: (0, r.jsx)("div", {
                className: "",
                children: (0, r.jsx)(v.default, {
                  href: i,
                  children: (0, r.jsx)("a", {
                    target: n ? "_blank" : void 0,
                    className:
                      " hover:bg-uiBlue-600/80 group active:bg-slate-800 active:ring-uiBlue-600 flex  justify-start items-center w-full  font-base text-white   bg-opacity-80 rounded-md focus:outline-none group active:ring-2 px-2 py-3 pr-5 text-sm cursor-pointer "
                        .concat(l ? "hover:bg-red-600/80 text-white" : "", "  ")
                        .concat(c ? "hover:bg-yellow-700/80 text-white" : ""),
                    title: a,
                    children: (0, r.jsxs)("span", {
                      className:
                        "group-hover:translate-x-[0.15rem] transform transition-all flex items-center text-left",
                      children: [
                        s &&
                          (0, r.jsx)("span", {
                            className:
                              " group-hover:text-blueGrey text-slate-400 flex items-center mr-3 "
                                .concat(l ? "group-hover:text-white" : "", " ")
                                .concat(c ? "group-hover:text-white" : ""),
                            children: s,
                          }),
                        a,
                      ],
                    }),
                  }),
                }),
              }),
            })
          : o
          ? (0, r.jsx)("div", {
              disabled: d,
              children: (0, r.jsx)("div", {
                className: "",
                children: (0, r.jsx)("button", {
                  onClick:
                    function () {
                      m(!1), o();
                    } || void 0,
                  className:
                    " hover:bg-uiBlue-600/80 group active:bg-slate-800 active:ring-uiBlue-600\n       flex  justify-start items-center w-full  font-base text-white  bg-opacity-80 rounded-md focus:outline-none active:ring-2 px-2 py-3 pr-5 text-sm cursor-pointer "
                      .concat(l ? "hover:bg-red-600/80 text-white" : "", " ")
                      .concat(c ? "hover:bg-yellow-700/80 text-white" : ""),
                  children: (0, r.jsxs)("span", {
                    className:
                      "group-hover:translate-x-[0.15rem] transform transition-all justify-start text-left flex items-center",
                    children: [
                      s &&
                        (0, r.jsx)("span", {
                          className:
                            " group-hover:text-blueGrey text-slate-400 flex items-center mr-3 "
                              .concat(l ? "group-hover:text-white" : "", " ")
                              .concat(c ? "group-hover:text-white" : ""),
                          children: s,
                        }),
                      a,
                    ],
                  }),
                }),
              }),
            })
          : (0, r.jsx)("div", {
              className: "py-1 opacity-20",
              children: (0, r.jsx)("hr", {}),
            });
      }
      function x(e) {
        var a = e.options,
          t = e.open,
          i = e.setOpen,
          n = { open: t, setOpen: i, title: "Options", showClose: !0 };
        return t
          ? (0, r.jsx)(w.Z, {
              modalBaseProps: n,
              children: (0, r.jsx)("div", {
                className: "min-w-[80vw] md:min-w-[auto] md:w-auto",
                children:
                  a.length > 0
                    ? a.map(function (e) {
                        return (0,
                        r.jsx)(k, { title: e.title, icon: e.icon, externalLink: e.externalLink, link: e.link || void 0, onClick: e.onClick || void 0, danger: e.danger || !1, warn: e.warn || !1, setOpen: i, CustomButton: e.CustomButton }, e.key || e.title);
                      })
                    : Object.keys(a).map(function (e) {
                        var t = a[e];
                        return (0, r.jsxs)("div", {
                          className:
                            "p-1 mb-1 bg-darkBlue-900/30 first-of-type:bg-transparent rounded-xl",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "py-3 px-2 text-sm font-medium text-white capitalize",
                              children: e,
                            }),
                            t.map(function (e) {
                              return (0,
                              r.jsx)("div", { className: "opacity-70 hover:opacity-100", children: (0, r.jsx)(k, { title: e.title, icon: e.icon, externalLink: e.externalLink, link: e.link || void 0, onClick: e.onClick || void 0, danger: e.danger || !1, warn: e.warn || !1, setOpen: i, CustomButton: e.CustomButton }, e.key || e.title) });
                            }),
                          ],
                        });
                      }),
              }),
            })
          : null;
      }
      var j = function (e) {
          var a = e.modalCallback,
            t = e.dropDownOptions,
            n = (e.jobid, (0, s.u)(m.Z).selectMode),
            o = (0, i.useRef)(null),
            l = (0, i.useState)(!1),
            c = l[0],
            u = l[1];
          return (
            (0, i.useEffect)(
              function () {
                var e,
                  a = function (e) {
                    "contextmenu" === e.type &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      navigator.vibrate(10),
                      u(!0));
                  };
                return (
                  null === (e = o.current) ||
                    void 0 === e ||
                    e.addEventListener("contextmenu", a),
                  function () {
                    var e;
                    null === (e = o.current) ||
                      void 0 === e ||
                      e.removeEventListener("contextmenu", a);
                  }
                );
              },
              [a]
            ),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(x, { options: t, open: c, setOpen: u }),
                (0, r.jsx)("div", {
                  className:
                    "flex absolute top-0 left-0 z-50 flex-col justify-between w-full h-full text-base opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out cursor-pointer",
                  children: (0, r.jsx)("div", {
                    ref: o,
                    onClick: function () {
                      !n && a();
                    },
                    className:
                      "flex h-full flex-col justify-center items-center w-full text-white overflow-hidden p-4 ",
                  }),
                }),
              ],
            })
          );
        },
        N = t(38945),
        z = t(74523),
        C = t(36090),
        _ = t(22379),
        S = function (e) {
          var a = e.username,
            t = e.userId,
            i = (e.cover, e.avatar);
          return (0, r.jsx)(v.default, {
            href: "".concat(g.jk.users, "/").concat(t),
            prefetch: !1,
            children: (0, r.jsxs)("a", {
              className:
                "flex overflow-hidden items-center p-[0.35rem] pr-3 mr-2 w-auto text-sm font-medium text-slate-300 hover:bg-darkBlue-500 active:bg-slate-800 rounded-full active:ring-2 active:ring-uiBlue-600",
              children: [
                (0, r.jsx)(_.Avatar, { size: 22, user: a, avatar: i }),
                (0, r.jsx)("p", {
                  title: a,
                  className: "ml-2 font-medium break-all line-clamp-1",
                  children: a,
                }),
              ],
            }),
          });
        },
        O = t(12197),
        P = t(95862),
        Z = t(45123),
        A = function (e) {
          var a = e.word,
            t = e.username,
            i = (e.faved, e.modalCallback, e.jobid),
            n = e.imgHeight,
            s = (e.like_count, e.faveCallback, e.dropDownOptions),
            l = e.hover,
            c = e.setHover,
            u = e.setQuery,
            d = e.userId,
            m = e.hidden,
            h = e.flagged,
            p = e.handleFlag,
            f = e.handleHidden,
            b = (0, o.useRouter)().pathname;
          return (0, r.jsxs)("div", {
            className:
              "flex z-50 flex-col justify-between w-full h-full text-base bg-[#171b28] border-t-2 border-darkBlue-900/50 ",
            children: [
              (0, r.jsx)("div", {
                className:
                  "flex flex-col z-[500] self-end w-full text-slate-200  p-4 py-5 .pb-0",
                children: (0, r.jsxs)("p", {
                  id: "".concat(i, "_word"),
                  className:
                    "_promptText_ select-text relative z-[500]  my-0 text-base text-ellipsis \n          ".concat(
                      n > 50,
                      " "
                    ),
                  children: [
                    a,
                    " ",
                    (0, r.jsx)(Z.Z, {
                      wordRef: "".concat(i, "_word"),
                      setQuery: u,
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("div", {
                className: "z-0 p-3 pt-0",
                children: (0, r.jsxs)("div", {
                  className:
                    "flex justify-between self-end p-2 w-full text-base bg-uiBlue-500/40 rounded-xl bg-blend-multiply",
                  children: [
                    (0, r.jsx)(S, { username: t, userId: d }),
                    (0, r.jsxs)("div", {
                      className: "flex",
                      children: [
                        (0, r.jsx)(P.Z, {
                          hover: l,
                          setHover: c,
                          className: "",
                          optionArray: s,
                          maxWidth: "max-w-max",
                          children: (0, r.jsx)(C.Z, {
                            title: "Open Options",
                            className: "".concat(
                              l && "bg-uiBlue-600/80 ring-uiBlue-600"
                            ),
                            children: (0, r.jsx)(O.bd, {
                              className: "",
                              height: "18",
                            }),
                          }),
                        }),
                        g.jk.modtools === b &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(C.Z, {
                                title: "Remove job",
                                className: "hover:bg-red-900/60 ".concat(
                                  m && "bg-red-900/60"
                                ),
                                onClick: function () {
                                  return f();
                                },
                                children: (0, r.jsx)(N.Z, {
                                  className: "text-red-500",
                                  height: "18",
                                }),
                              }),
                              (0, r.jsx)(C.Z, {
                                title: "Unflag job",
                                className: "hover:bg-emerald-900/90 ".concat(
                                  !h && "bg-emerald-900/90"
                                ),
                                onClick: function () {
                                  return p(!1);
                                },
                                children: (0, r.jsx)(z.Z, {
                                  className: "text-emerald-500 ",
                                  height: "18",
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        I = t(11355),
        B = t(96361),
        q = t(49050),
        L = t(51855),
        D = t(71738),
        M = t(12540),
        E = t(64295),
        R = t(9281),
        T = t(44824),
        F = function (e) {
          var a = e.callback,
            t = e.faved,
            i = e.like_count,
            n = e.className,
            o = void 0 === n ? "" : n,
            s = e.showCount,
            l = void 0 !== s && s,
            c = e.Icon,
            u = void 0 === c ? L.Z : c;
          return (0, r.jsxs)(C.Z, {
            className: "".concat(o, " font-mono leading-none"),
            title: "Bookmark",
            onClick: function () {
              return a();
            },
            children: [
              l && i > 0 && i,
              (0, r.jsx)(u, {
                fill: t ? "rgb(249, 115, 22)" : "none",
                className: ""
                  .concat(l && i > 0 ? "ml-1" : "", " ")
                  .concat(t && "text-orange-500"),
                height: "18",
              }),
            ],
          });
        },
        H = t(66698),
        U = t.n(H),
        W = t(36380);
      function J(e, a) {
        if (null == e) return {};
        var t,
          r,
          i = (function (e, a) {
            if (null == e) return {};
            var t,
              r,
              i = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (t = n[r]), a.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (t = n[r]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (i[t] = e[t]));
        }
        return i;
      }
      function V(e) {
        e.hasAccess, e.isHome;
        var a = e.selectMode,
          t = (e.modalCallback, e.word),
          n = e.type,
          o = J(e, [
            "hasAccess",
            "isHome",
            "selectMode",
            "modalCallback",
            "word",
            "type",
          ]),
          s = (0, i.useMemo)(
            function () {
              return (0, W.x6)(n);
            },
            [n]
          ),
          l = (0, i.useMemo)(
            function () {
              return new (U())()
                .from(new Date("".concat(o.enqueueTime.replace(" ", "T"), "Z")))
                .replace("hour", "hr")
                .replace("minute", "min")
                .replace("second", "sec");
            },
            [o.enqueueTime]
          );
        return (0, r.jsx)("div", {
          className:
            "relative shrink p-4 pb-2 flex w-auto h-full min-h-0 text-base ",
          children: (0, r.jsxs)("div", {
            className:
              "select-all overflow-y-auto miniScrollbar min-h-0 w-full h-auto max-h-full self-end cursor-copy shadow-black/50",
            onClick: function (e) {
              e.preventDefault(), e.stopPropagation();
            },
            children: [
              (0, r.jsxs)("span", {
                className: (0, h.CN)(
                  "flex gap-1 items-center pointer-events-none -mt-1 mb-1 w-auto text-xs font-bold text-slate-400  select-none"
                ),
                children: [
                  (0, r.jsxs)("p", {
                    className: (0, h.CN)(
                      "font-mono saturate-150",
                      null === s || void 0 === s ? void 0 : s.color
                    ),
                    children: ["/", n],
                  }),
                  (0, r.jsx)("p", {
                    className: (0, h.CN)(" ml-auto text-slate-400 font-medium"),
                    children: l,
                  }),
                ],
              }),
              (0, r.jsx)("p", {
                className: (0, h.CN)(
                  "_promptText_ w-full relative first-letter:uppercase leading-snug text-slate-300 my-0 select-text cursor-text  text-ellipsis line-clamp-3 text-sm\n             ",
                  (null === a || void 0 === a ? void 0 : a.get) &&
                    "pointer-events-none select-none"
                ),
                children:
                  (null === t || void 0 === t ? void 0 : t.length) > 0
                    ? t
                    : "No text prompt",
              }),
            ],
          }),
        });
      }
      var G = function (e) {
          var a = e.word,
            t = e.eventType,
            n = e.username,
            l = e.faved,
            c = e.modalCallback,
            u =
              (e.imgHeight,
              e.imgWidth,
              e.jobid,
              e.like_count,
              e.touchEnabled,
              e.faveCallback),
            d = e.dropDownOptions,
            p = (e.setQuery, e.userId),
            f = e.handleVote,
            b = e.voted,
            y = e.published,
            v = e.handlePublish,
            w = (e.handleSelected, e.selected, e.enqueueTime),
            k = e.coverJobId,
            x = e.avatarJobId,
            j = (0, R.aC)(),
            N = j.userInfo,
            z = j.hasAccess,
            _ = j.hasPrivate,
            Z = T.V.useContainer(),
            A = Z.showHoverIcons,
            H = Z.adminMode,
            U = (0, s.u)(m.Z).selectMode,
            W = (0, o.useRouter)().pathname,
            J = (0, i.useState)(!1),
            G = J[0],
            Q = J[1],
            K = (0, i.useState)(!1),
            $ = K[0],
            X = K[1],
            Y = (0, i.useState)(!1),
            ee = Y[0],
            ae = Y[1];
          (0, i.useEffect)(
            function () {
              X(!(!G && !ee));
            },
            [G, ee]
          );
          var te = "/app" === W,
            re = [
              {
                title: "1",
                disabled: !1,
                CustomButton: (0, r.jsx)(E.t, {
                  handleVote: f,
                  voted: b,
                  type: 1,
                }),
              },
              {
                title: "2",
                disabled: !1,
                CustomButton: (0, r.jsx)(E.t, {
                  handleVote: f,
                  voted: b,
                  type: 2,
                }),
              },
              {
                title: "4",
                disabled: !1,
                CustomButton: (0, r.jsx)(E.t, {
                  handleVote: f,
                  voted: b,
                  type: 4,
                }),
              },
              {
                title: "5",
                disabled: !1,
                CustomButton: (0, r.jsx)(E.t, {
                  handleVote: f,
                  voted: b,
                  type: 5,
                }),
              },
            ];
          return (0, r.jsxs)("div", {
            className: (0, h.CN)(
              "flex .overflow-hidden absolute justify-end items-end p-2 inset-0 z-50 flex-col w-full h-full !bottom-0 max-h-full rounded-xl cursor-zoom-in"
            ),
            onMouseEnter: function () {
              return X(!0);
            },
            onMouseLeave: function () {
              return X(!1);
            },
            children: [
              (0, r.jsx)("div", {
                className: "absolute inset-0 w-full h-full",
                onClick: z || te ? c : function () {},
              }),
              (0, r.jsx)(I.u, {
                show: $,
                enter: "transition duration-100",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                className: (0, h.CN)(
                  "relative w-full shrink-0 cursor-auto justify-self-end "
                ),
                onClick: function (e) {
                  return e.stopPropagation();
                },
                children: (0, r.jsxs)("div", {
                  className: (0, h.CN)(
                    "flex flex-col justify-between self-end text-slate-600 w-full text-base group-hover:text-slate-400 bg-darkBlue-900 rounded-lg duration-150  transition-color",
                    $ && "!text-slate-400"
                  ),
                  children: [
                    (0, r.jsx)(V, {
                      selectMode: U,
                      hasAccess: z,
                      isHome: te,
                      word: a,
                      modalCallback: c,
                      type: t,
                      enqueueTime: w,
                    }),
                    z || te
                      ? (0, r.jsxs)("div", {
                          className:
                            "flex justify-between self-end p-2 w-full text-base",
                          children: [
                            (0, r.jsx)(S, {
                              username: n,
                              avatar: x,
                              cover: k,
                              userId: p,
                            }),
                            (0, r.jsxs)("div", {
                              className: (0, h.CN)(
                                "flex gap-[0.1rem]",
                                U.get && "pointer-events-none !text-slate-600"
                              ),
                              children: [
                                !W.includes(g.jk.ranking) &&
                                  (0, r.jsx)(P.Z, {
                                    setHover: ae,
                                    className: "",
                                    optionArray: d,
                                    maxWidth: "max-w-max",
                                    placement: "top-end",
                                    offset: [20, 15],
                                    buttonHoverStyle:
                                      "!bg-uiBlue-500/50 ring-uiBlue-600",
                                    children: (0, r.jsx)(C.Z, {
                                      title: "Open Options",
                                      className:
                                        "\n                    text-inherit",
                                      children: (0, r.jsx)(O.bd, {
                                        className: "",
                                        height: "18",
                                      }),
                                    }),
                                  }),
                                te &&
                                  (null === N || void 0 === N
                                    ? void 0
                                    : N.id) === p &&
                                  _ &&
                                  (0, r.jsx)(C.Z, {
                                    title: y
                                      ? "Click to Unpublish"
                                      : "Click to Publish",
                                    className: "text-inherit",
                                    onClick: v,
                                    children: y
                                      ? (0, r.jsx)(D.Z, {
                                          height: "18",
                                          className: "text-indigo-500",
                                        })
                                      : (0, r.jsx)(B.Z, { height: "18" }),
                                  }),
                                z &&
                                  (0, r.jsxs)(r.Fragment, {
                                    children: [
                                      (0, r.jsx)(F, {
                                        callback: u,
                                        faved: l,
                                        className: "text-inherit",
                                      }),
                                      (0, r.jsx)(P.Z, {
                                        setHover: Q,
                                        itemsClassName:
                                          "rounded-xl flex flex-row shadow-none border-none !bg-darkBlue-900 gap-[0.1rem] shadow-[-12px_0_20px_-5px_#080b16]",
                                        optionArray: re,
                                        transformOrigin: "right",
                                        maxWidth: "max-w-max",
                                        placement: "left",
                                        offset: [0, -38],
                                        buttonHoverStyle:
                                          "!bg-uiBlue-500 ring-uiBlue-600",
                                        children: (0, r.jsxs)(C.Z, {
                                          title: "Open rank options",
                                          className:
                                            "\n                    text-inherit text-base relative\n                    ",
                                          children: [
                                            (function () {
                                              switch (b) {
                                                case 1:
                                                  return (0, r.jsx)(M.QC, {
                                                    height: 20,
                                                    className:
                                                      "absolute centerAbs",
                                                  });
                                                case 2:
                                                  return (0, r.jsx)(M.H9, {
                                                    height: 20,
                                                    className:
                                                      "absolute centerAbs",
                                                  });
                                                case 4:
                                                  return (0, r.jsx)(M.cd, {
                                                    height: 20,
                                                    className:
                                                      "absolute centerAbs",
                                                  });
                                                case 5:
                                                  return (0, r.jsx)(M.Mx, {
                                                    height: 20,
                                                    className:
                                                      "absolute centerAbs",
                                                  });
                                                default:
                                                  return (0, r.jsx)(q.Z, {
                                                    height: 20,
                                                    className:
                                                      "absolute centerAbs",
                                                  });
                                              }
                                            })(),
                                            (0, r.jsx)(q.Z, {
                                              height: 18,
                                              className: "invisible",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        })
                      : (0, r.jsxs)("div", {
                          className:
                            "flex justify-between self-end p-2 w-full text-base",
                          children: [
                            (0, r.jsx)("div", {
                              className: "pointer-events-none",
                              children: (0, r.jsx)(S, {
                                username: n,
                                avatar: x,
                                cover: k,
                                userId: p,
                              }),
                            }),
                            (0, r.jsx)(C.Z, {
                              title: "Subscribe for more options",
                              className:
                                "\n                    text-inherit shrink ml-auto hover:bg-transparent active:ring-transparent active:bg-transparent opacity-50 text-base w-auto cursor-not-allowed\n                    ",
                              disabled: !0,
                              children: (0, r.jsx)(O.bd, { height: "18" }),
                            }),
                          ],
                        }),
                  ],
                }),
              }),
              (0, r.jsx)(I.u, {
                show:
                  A && !$ && (!!l || !!b || (_ && U.get && !!y && (te || H))),
                enter: "transition-opacity duration-75",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                className: (0, h.CN)(
                  "absolute bottom-0 translate-y-1/2 right-2 shrink-0 cursor-auto justify-self-end "
                ),
                onClick: function (e) {
                  return e.stopPropagation();
                },
                children: (0, r.jsx)("div", {
                  className: (0, h.CN)(
                    "flex flex-col justify-between self-end text-orange-500 w-full text-base rounded-full  bg-darkBlue-900 duration-150  transition-color border-darkBlue-900 border-[3px]"
                  ),
                  children: (0, r.jsx)("div", {
                    className:
                      "flex gap-1 justify-between items-stretch self-end p-1 w-full min-w-max text-base",
                    children:
                      z &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          _ &&
                            U.get &&
                            y &&
                            (te || H) &&
                            (0, r.jsx)(D.Z, {
                              height: "14",
                              className: "text-indigo-500",
                            }),
                          l &&
                            (0, r.jsx)("div", {
                              className:
                                "aspect-square flex shrink-0 justify-center items-center w-4 h-4",
                              children: (0, r.jsx)(L.Z, {
                                fill: "rgb(249, 115, 22)",
                                height: "14",
                              }),
                            }),
                          b &&
                            (0, r.jsx)("div", {
                              className:
                                "aspect-square flex shrink-0 justify-center items-center w-4 h-4 text-[12px] leading-none",
                              children: (function () {
                                switch (b) {
                                  case 1:
                                    return (0, r.jsx)(M.QC, { height: 12 });
                                  case 2:
                                    return (0, r.jsx)(M.H9, { height: 12 });
                                  case 4:
                                    return (0, r.jsx)(M.cd, { height: 12 });
                                  case 5:
                                    return (0, r.jsx)(M.Mx, { height: 12 });
                                  default:
                                    return null;
                                }
                              })(),
                            }),
                        ],
                      }),
                  }),
                }),
              }),
            ],
          });
        },
        Q = t(68715),
        K = t(19965),
        $ = t(60219);
      function X(e, a) {
        if (null == e) return {};
        var t,
          r,
          i = (function (e, a) {
            if (null == e) return {};
            var t,
              r,
              i = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (t = n[r]), a.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (t = n[r]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (i[t] = e[t]));
        }
        return i;
      }
      function Y(e) {
        var a = e.hasAccess,
          t = e.isHome,
          n = e.hover,
          o = e.selectMode,
          s = e.modalCallback,
          l = e.word,
          c = e.type,
          u = e.enqueueTime,
          d =
            (X(e, [
              "hasAccess",
              "isHome",
              "hover",
              "selectMode",
              "modalCallback",
              "word",
              "type",
              "enqueueTime",
            ]),
            (0, i.useMemo)(
              function () {
                return (0, W.x6)(c);
              },
              [c]
            ) || {}),
          m = (0, i.useMemo)(
            function () {
              return new (U())()
                .from(new Date("".concat(u.replace(" ", "T"), "Z")))
                .replace("hour", "hr")
                .replace("minute", "min")
                .replace("second", "sec");
            },
            [u]
          );
        return (0, r.jsx)("div", {
          className:
            "relative shrink p-2 flex w-auto h-full min-h-0 opacity-0 group-hover:opacity-100 text-base delay-75 .translate-y-2 group-hover:.translate-y-0 .transition .duration-100 ease-in-out  "
              .concat((a || t) && "cursor-pointer", " ")
              .concat(n && "!opacity-0", " ")
              .concat(
                (null === o || void 0 === o ? void 0 : o.get) &&
                  "pointer-events-none"
              ),
          onClick: a || t ? s : function () {},
          children: (0, r.jsxs)("div", {
            className:
              "rounded-xl border border-slate-400/10 select-all z-20  overflow-y-auto miniScrollbar min-h-0 p-4 bg-darkBlue-900/90 backdrop-blur-lg  h-auto max-h-full self-end cursor-copy shadow-black/50 w-4/5 ".concat(
                (null === o || void 0 === o ? void 0 : o.get) && "select-none"
              ),
            onClick: function (e) {
              e.preventDefault(), e.stopPropagation();
            },
            children: [
              (0, r.jsxs)("span", {
                className: (0, h.CN)(
                  "flex gap-1 items-center pointer-events-none -mt-1 mb-1 w-auto text-xs font-bold text-slate-400  select-none"
                ),
                children: [
                  (0, r.jsxs)("p", {
                    className: (0, h.CN)(
                      "font-mono saturate-150",
                      null === d || void 0 === d ? void 0 : d.color
                    ),
                    children: ["/", c],
                  }),
                  (0, r.jsx)("p", {
                    className: (0, h.CN)(" ml-auto text-slate-400 font-medium"),
                    children: m,
                  }),
                ],
              }),
              (0, r.jsx)("p", {
                className: (0, h.CN)(
                  "_promptText_ w-full relative first-letter:uppercase leading-snug text-slate-300 my-0 select-text cursor-text  text-ellipsis line-clamp-3 text-sm\n             ",
                  (null === o || void 0 === o ? void 0 : o.get) &&
                    "pointer-events-none select-none"
                ),
                children:
                  (null === l || void 0 === l ? void 0 : l.length) > 0
                    ? l
                    : "No text prompt",
              }),
            ],
          }),
        });
      }
      var ee = function (e) {
        var a = e.word,
          t = e.username,
          n = e.faved,
          l = e.modalCallback,
          c =
            (e.imgHeight,
            e.imgWidth,
            e.jobid,
            e.like_count,
            e.touchEnabled,
            e.faveCallback),
          u = e.dropDownOptions,
          d = (e.setQuery, e.userId),
          p = e.handleVote,
          f = e.voted,
          b = e.published,
          y = e.handlePublish,
          v = e.handleSelected,
          w = e.selected,
          k = e.avatarJobId,
          x = e.coverJobId,
          j = e.enqueueTime,
          N = e.eventType,
          z = (0, R.aC)(),
          _ = z.userInfo,
          Z = z.hasAccess,
          A = z.hasPrivate,
          I = (0, s.u)(m.Z).selectMode,
          B = (0, i.useState)(!1),
          L = B[0],
          D = B[1],
          M = (0, o.useRouter)().pathname,
          T = (0, i.useState)(!1),
          H = T[0],
          U = T[1],
          W = (0, i.useState)(!1),
          J = W[0],
          V = W[1];
        (0, i.useEffect)(
          function () {
            D(!(!H && !J));
          },
          [H, J]
        );
        var G = "/app" === M,
          X = [
            {
              title: "1",
              disabled: !1,
              CustomButton: (0, r.jsx)(E.t, {
                handleVote: p,
                voted: f,
                type: 1,
              }),
            },
            {
              title: "2",
              disabled: !1,
              CustomButton: (0, r.jsx)(E.t, {
                handleVote: p,
                voted: f,
                type: 2,
              }),
            },
            {
              title: "4",
              disabled: !1,
              CustomButton: (0, r.jsx)(E.t, {
                handleVote: p,
                voted: f,
                type: 4,
              }),
            },
            {
              title: "5",
              disabled: !1,
              CustomButton: (0, r.jsx)(E.t, {
                handleVote: p,
                voted: f,
                type: 5,
              }),
            },
          ];
        return (0, r.jsxs)("div", {
          className: (0, h.CN)(
            "flex overflow-hidden absolute inset-0 z-50 flex-col w-full h-full max-h-full rounded-xl",
            I.get && "cursor-pointer"
          ),
          children: [
            (0, r.jsx)(Y, {
              selectMode: I,
              hasAccess: Z,
              isHome: G,
              word: a,
              modalCallback: l,
              hover: L,
              type: N,
              enqueueTime: j,
            }),
            (0, r.jsx)("div", {
              className: (0, h.CN)(
                "relative z-[500] shrink-0 justify-self-end pt-0 min-h-[50px]"
              ),
              children: (0, r.jsx)("div", {
                className: (0, h.CN)(
                  "flex justify-between self-end text-slate-600 p-2 w-full text-base group-hover:text-slate-400 bg-darkBlue-900  duration-150  transition-color",
                  L && "!text-slate-400"
                ),
                children:
                  Z || G
                    ? (0, r.jsxs)(r.Fragment, {
                        children: [
                          M !== g.jk.home
                            ? (0, r.jsx)(S, {
                                username: t,
                                avatar: k,
                                cover: x,
                                userId: d,
                              })
                            : (0, r.jsx)(C.Z, {
                                className: (0, h.CN)(
                                  "w-8 h-8 !p-0 text-inherit group-scope rounded-full ",
                                  I.get
                                    ? "opacity-100"
                                    : "opacity-0 group-hover:opacity-100"
                                ),
                                onClick: v,
                                children: w
                                  ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                        (0, r.jsx)(Q.Z, {
                                          height: 24,
                                          className:
                                            "flex group-scope:hover:hidden text-emerald-500",
                                        }),
                                        (0, r.jsx)(K.Z, {
                                          height: 24,
                                          className:
                                            "hidden group-scope:hover:flex text-red-500",
                                        }),
                                      ],
                                    })
                                  : (0, r.jsx)($.Z, {
                                      height: 24,
                                      className:
                                        "text-inherit hover:!text-slate-100",
                                    }),
                              }),
                          (0, r.jsxs)("div", {
                            className: (0, h.CN)(
                              "flex gap-[0.1rem]",
                              I.get && "pointer-events-none !text-slate-600"
                            ),
                            children: [
                              !M.includes(g.jk.ranking) &&
                                (0, r.jsx)(P.Z, {
                                  hover: J,
                                  setHover: V,
                                  className: "",
                                  optionArray: u,
                                  maxWidth: "max-w-max",
                                  placement: "top-end",
                                  offset: [20, 15],
                                  buttonHoverStyle:
                                    "!bg-uiBlue-500/50 ring-uiBlue-600",
                                  children: (0, r.jsx)(C.Z, {
                                    title: "Open Options",
                                    className:
                                      "\n                    text-inherit",
                                    children: (0, r.jsx)(O.bd, {
                                      className: "",
                                      height: "18",
                                    }),
                                  }),
                                }),
                              G &&
                                (null === _ || void 0 === _ ? void 0 : _.id) ===
                                  d &&
                                A &&
                                (0, r.jsx)(C.Z, {
                                  title: b ? "Unpublish" : "Publish",
                                  className: "text-inherit",
                                  onClick: y,
                                  children: b
                                    ? (0, r.jsx)(O.zv, { size: "18" })
                                    : (0, r.jsx)(O.$, { size: "18" }),
                                }),
                              Z &&
                                (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsx)(F, {
                                      callback: c,
                                      faved: n,
                                      className: "text-inherit",
                                    }),
                                    (0, r.jsx)(P.Z, {
                                      hover: H,
                                      setHover: U,
                                      itemsClassName:
                                        "rounded-xl flex flex-row shadow-none bg-darkBlue-900 outline-darkBlue-500 outline-2 gap-[0.1rem] shadow-[-12px_0_20px_-5px_#080b16]",
                                      optionArray: X,
                                      transformOrigin: "right",
                                      maxWidth: "max-w-max",
                                      placement: "left",
                                      offset: [-4, -38],
                                      buttonHoverStyle:
                                        "!bg-uiBlue-500 ring-uiBlue-600",
                                      children: (0, r.jsxs)(C.Z, {
                                        title: "Open rank options",
                                        className:
                                          "\n                    text-inherit text-base\n                    ",
                                        children: [
                                          (0, r.jsx)("div", {
                                            className: "absolute centerAbs",
                                            children: (function () {
                                              switch (f) {
                                                case 1:
                                                  return "\ud83e\udd2e";
                                                case 2:
                                                  return "\ud83d\ude12";
                                                case 4:
                                                  return "\ud83d\ude00";
                                                case 5:
                                                  return "\ud83d\ude0d";
                                                default:
                                                  return (0, r.jsx)(q.Z, {
                                                    height: 20,
                                                  });
                                              }
                                            })(),
                                          }),
                                          (0, r.jsx)(q.Z, {
                                            height: 18,
                                            className: "invisible",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)("div", {
                            className: "pointer-events-none",
                            children: (0, r.jsx)(S, { username: t, userId: d }),
                          }),
                          (0, r.jsx)(C.Z, {
                            title: "Subscribe for more options",
                            className:
                              "\n                    text-inherit hover:bg-transparent active:ring-transparent active:bg-transparent opacity-50 text-base w-auto cursor-not-allowed\n                    ",
                            disabled: !0,
                            children: (0, r.jsx)(O.bd, { height: "18" }),
                          }),
                        ],
                      }),
              }),
            }),
          ],
        });
      };
      function ae(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      function te(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (a) {
              ae(e, a, t[a]);
            });
        }
        return e;
      }
      var re = function (e) {
          var a = e.infoProps,
            t = e.imageSize,
            i = e.imageLayout;
          (0, o.useRouter)().pathname;
          return "small" === t || "condensed" === i
            ? (0, r.jsx)(j, te({}, a))
            : "expanded" === i
            ? (0, r.jsx)(A, te({}, a))
            : "tight" === i
            ? (0, r.jsx)(ee, te({}, a))
            : (0, r.jsx)(G, te({}, a));
        },
        ie = (0, i.memo)(re);
      function ne(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      function oe() {
        return (
          (oe =
            Object.assign ||
            function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
          oe.apply(this, arguments)
        );
      }
      function se(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (a) {
              ne(e, a, t[a]);
            });
        }
        return e;
      }
      var le = function (e) {
          var a = oe({}, e),
            t = a.useLayoutState,
            n = (t.refreshed, t.imageLayout),
            o = t.imageSize,
            u = t.touchEnabled,
            v = t.pathname,
            w = t.setQuery,
            k =
              (t.setDedupe,
              t.adminMode,
              t.isSM,
              t.modalState,
              t.session,
              t.imageAspect),
            x = (0, s.u)(m.Z).selectMode,
            j = (0, i.useState)(!1),
            N = j[0],
            z = j[1],
            C = (0, i.useState)(!1),
            _ = (C[0], C[1]),
            S = (0, i.useState)(null),
            O = S[0],
            P = S[1],
            Z = a.like_count,
            A = {
              prompt: a.prompt,
              jobId: a.jobid,
              username: a.username,
              faved: a.faved,
              faveCallback: a.faveCallback,
              platform_message_id: a.platform_message_id,
              platform_channel_id: a.platform_channel_id,
              platform_channel: a.platform_channel,
              guild_id: a.guild_id,
              userId: a.userId,
              followed_by_user: a.followed_by_user,
              published: a.published,
              hidden: a.hidden,
              full_command: a.full_command,
              handleFlag: a.handleFlag,
              handleHidden: a.handleHidden,
              handlePublish: a.handlePublish,
              handleVote: a.handleVote,
              voted: a.voted,
              collectionModalCallback: function () {
                return P(a.jobid);
              },
              batchSize: a.gridAmnt,
            },
            I = (0, b.ZP)(A),
            B = (0, i.useMemo)(
              function () {
                return d()({
                  hue: "monochrome",
                  seed: a.prompt,
                  luminosity: "light",
                });
              },
              [a.prompt]
            ),
            q = (0, i.useMemo)(
              function () {
                return {
                  word: a.prompt,
                  username: a.username,
                  userId: a.userId,
                  faved: a.faved,
                  modalCallback: function () {
                    return !x.get && a.modalCallback();
                  },
                  imgHeight: a.imgHeight,
                  imgWidth: a.imgWidth,
                  jobid: a.jobid,
                  like_count: Z,
                  faveCallback: a.faveCallback,
                  touchEnabled: u.current || !1,
                  dropDownOptions: I,
                  dedupeCount: a.dedupeCount || 0,
                  setQuery: w,
                  handleVote: a.handleVote,
                  voted: a.voted,
                  published: a.published,
                  handlePublish: a.handlePublish,
                  hidden: a.hidden,
                  flagged: a.flagged,
                  selected: a.selected,
                  handleFlag: a.handleFlag,
                  handleHidden: a.handleHidden,
                  handleSelected: a.handleSelected,
                  eventType: a.eventType,
                  enqueueTime: a.enqueue_time,
                  coverJobId: a.coverJobId,
                  avatarJobId: a.avatarJobId,
                };
              },
              [a, Z, u, I, w, x.get]
            ),
            L = (0, i.useMemo)(
              function () {
                return v === g.jk.modtools;
              },
              [v]
            );
          (0, i.useEffect)(function () {
            var e = setTimeout(function () {
              _(!0);
            }, 150);
            return function () {
              clearTimeout(e);
            };
          }, []);
          var D = (0, i.useMemo)(
            function () {
              var e = a.containerWidth || 256,
                t = null;
              return {
                height: (t =
                  1 === k.get
                    ? e
                    : Math.min(a.imgHeight * (e / a.imgWidth), e * k.get)),
                width: e,
                heightPadded: t + 50,
              };
            },
            [a.containerWidth, k.get, a.imgHeight, a.imgWidth]
          );
          return (0, r.jsxs)(r.Fragment, {
            children: [
              !!O &&
                (0, r.jsx)(f.Z, {
                  open: !!O,
                  setOpen: function () {
                    return P(null);
                  },
                  selections: { jobIdsAll: [O] },
                }),
              (0, r.jsxs)("div", {
                className: (0, h.CN)(
                  "group rounded-xl focus:grayscale box-border block .overflow-hidden relative z-[1] flex-col w-full h-auto",
                  a.hidden && !L
                    ? "grayscale opacity-30 blur-md hover:blur-0"
                    : "",
                  a.selected && x.get ? "ring-2 ring-emerald-500" : "",
                  ("condensed" === n || "small" === o) &&
                    "hoverUp active:opacity-70"
                ),
                style: se(
                  {},
                  "tight" === n && "small" !== o && { height: D.heightPadded },
                  ("condensed" === n || "small" === o) && { height: D.height },
                  { width: D.width }
                ),
                onMouseDown: function (e) {
                  if (x.get)
                    if (
                      (e.preventDefault(),
                      e.stopPropagation(),
                      e.shiftKey && a.selected)
                    )
                      a.handleSelected();
                    else {
                      if (e.shiftKey && !a.selected) return null;
                      a.handleSelected();
                    }
                  else
                    ("condensed" !== n && "small" !== o) || a.modalCallback();
                },
                onMouseEnter: function (e) {
                  1 === e.buttons &&
                    x.get &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    e.shiftKey && a.selected && a.handleSelected(),
                    e.shiftKey || a.selected || a.handleSelected());
                },
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "relative text-[0] select-none .overflow-hidden cursor-zoom-in bg-contain",
                    style: { height: D.height },
                    onClick: function (e) {
                      e.preventDefault(),
                        e.stopPropagation(),
                        "tight" !== n && a.modalCallback();
                    },
                    children: [
                      (0, r.jsx)(c.default, {
                        src: "/".concat(a.jobid, "/grid_0.webp"),
                        alt: N ? a.prompt : "",
                        layout: "intrinsic",
                        priority: a.index < 4,
                        loader: function (e) {
                          return (0, p.qs)(e, a.imgWidth);
                        },
                        loading: "eager",
                        lazyBoundary: "".concat(2 * window.innerHeight, "px"),
                        height: D.height,
                        width: D.width,
                        onLoadingComplete: function () {
                          return z(!0);
                        },
                        objectFit: "cover",
                        objectPosition: "center",
                        className:
                          "aspect-auto rounded-xl rendering-contrast w-full h-full transition-opacity duration-100 opacity-100 ".concat(
                            !N && a.index > 8 && "!opacity-0"
                          ),
                        onClick: function (e) {
                          e.preventDefault(),
                            e.stopPropagation(),
                            "tight" === n || x.get || a.modalCallback();
                        },
                      }),
                      a.gridAmnt > 0 &&
                        (0, r.jsx)("div", {
                          style: { height: D.height, width: D.width },
                          className: "absolute top-0 left-0 z-10 w-full h-full",
                          children: (0, r.jsx)(y, { gridAmnt: a.gridAmnt }),
                        }),
                    ],
                  }),
                  a.gridId &&
                    (0, r.jsx)("div", {
                      className:
                        "aspect-square absolute top-2 right-2 z-50 p-2 text-xs font-bold text-right text-slate-400 uppercase bg-darkBlue-900/70 backdrop-blur-lg select-none rounded-xlll",
                      children: (0, r.jsx)(l.Z, { height: 18 }),
                    }),
                  (0, r.jsx)(ie, {
                    infoProps: q,
                    imageLayout: n,
                    imageSize: o,
                  }),
                  (0, r.jsx)("div", {
                    style: {
                      backgroundColor: B,
                      height: D.height,
                      width: D.width,
                    },
                    className:
                      "absolute rounded-xl top-0 left-0 -z-10 w-full h-full mix-blend-screen opacity-[0.035]",
                  }),
                ],
              }),
            ],
          });
        },
        ce = i.memo(le, function (e, a) {
          return (
            e.prompt === a.prompt &&
            e.jobid === a.jobid &&
            e.seedImageURL === a.seedImageURL &&
            e.status === a.status &&
            e.jobType === a.jobType &&
            e.height === a.height &&
            e.width === a.width &&
            e.containerWidth === a.containerWidth &&
            e.gridAmnt === a.gridAmnt &&
            e.username === a.username &&
            e.userId === a.userId &&
            e.like_count === a.like_count &&
            e.dedupeCount === a.dedupeCount &&
            e.finalUrl === a.finalUrl &&
            e.percentage === a.percentage &&
            e.faveCallback === a.faveCallback &&
            e.modalCallback === a.modalCallback &&
            e.faved === a.faved &&
            e.hidden === a.hidden &&
            e.handleHidden === a.handleHidden &&
            e.voted === a.voted &&
            e.handleVoted === a.handleVoted &&
            e.flagged === a.flagged &&
            e.handleFlagged === a.handleFlagged &&
            e.selected === a.selected &&
            e.handleSelected === a.handleSelected &&
            e.published === a.published &&
            e.handlePublish === a.handlePublish &&
            e.useLayoutState.imageAspect.get ===
              a.useLayoutState.imageAspect.get &&
            e.platform_channel === a.platform_channel &&
            e.full_command === a.full_command &&
            e.useLayoutState.refreshed === a.useLayoutState.refreshed &&
            e.useLayoutState.setModalState === a.useLayoutState.setModalState &&
            e.useLayoutState.imageLayout === a.useLayoutState.imageLayout &&
            e.useLayoutState.imageSize === a.useLayoutState.imageSize &&
            e.useLayoutState.touchEnabled === a.useLayoutState.touchEnabled &&
            e.useLayoutState.pathname === a.useLayoutState.pathname &&
            e.useLayoutState.setQuery === a.useLayoutState.setQuery &&
            e.useLayoutState.setDedupe === a.useLayoutState.setDedupe &&
            e.useLayoutState.adminMode === a.useLayoutState.adminMode
          );
        }),
        ue = t(50394);
      function de(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, r = new Array(a); t < a; t++) r[t] = e[t];
        return r;
      }
      function me(e, a) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, a) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                i,
                n = [],
                o = !0,
                s = !1;
              try {
                for (
                  t = t.call(e);
                  !(o = (r = t.next()).done) &&
                  (n.push(r.value), !a || n.length !== a);
                  o = !0
                );
              } catch (l) {
                (s = !0), (i = l);
              } finally {
                try {
                  o || null == t.return || t.return();
                } finally {
                  if (s) throw i;
                }
              }
              return n;
            }
          })(e, a) ||
          (function (e, a) {
            if (!e) return;
            if ("string" === typeof e) return de(e, a);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return de(e, a);
          })(e, a) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var he = [];
      var pe = {
        low: 0,
        max: 0,
        high: 0,
        C: 2,
        P: void 0,
        R: void 0,
        L: void 0,
        list: void 0,
      };
      function ge(e) {
        var a = e.high;
        e.L === pe && e.R === pe
          ? (e.max = a)
          : e.L === pe
          ? (e.max = Math.max(e.R.max, a))
          : e.R === pe
          ? (e.max = Math.max(e.L.max, a))
          : (e.max = Math.max(Math.max(e.L.max, e.R.max), a));
      }
      function fe(e) {
        for (var a = e; a.P !== pe; ) ge(a.P), (a = a.P);
      }
      function be(e, a) {
        if (a.R !== pe) {
          var t = a.R;
          (a.R = t.L),
            t.L !== pe && (t.L.P = a),
            (t.P = a.P),
            a.P === pe ? (e.root = t) : a === a.P.L ? (a.P.L = t) : (a.P.R = t),
            (t.L = a),
            (a.P = t),
            ge(a),
            ge(t);
        }
      }
      function ye(e, a) {
        if (a.L !== pe) {
          var t = a.L;
          (a.L = t.R),
            t.R !== pe && (t.R.P = a),
            (t.P = a.P),
            a.P === pe ? (e.root = t) : a === a.P.R ? (a.P.R = t) : (a.P.L = t),
            (t.R = a),
            (a.P = t),
            ge(a),
            ge(t);
        }
      }
      function ve(e, a, t) {
        a.P === pe ? (e.root = t) : a === a.P.L ? (a.P.L = t) : (a.P.R = t),
          (t.P = a.P);
      }
      function we() {
        var e = { root: pe, size: 0 },
          a = {};
        return {
          insert: function (t, r, i) {
            for (var n = e.root, o = pe; n !== pe && t !== (o = n).low; )
              n = t < n.low ? n.L : n.R;
            if (t === o.low && o !== pe) {
              if (
                !(function (e, a, t) {
                  for (var r, i = e.list; i; ) {
                    if (i.index === t) return !1;
                    if (a > i.high) break;
                    (r = i), (i = i.next);
                  }
                  return (
                    r || (e.list = { index: t, high: a, next: i }),
                    r && (r.next = { index: t, high: a, next: r.next }),
                    !0
                  );
                })(o, r, i)
              )
                return;
              return (
                (o.high = Math.max(o.high, r)),
                ge(o),
                fe(o),
                (a[i] = o),
                void e.size++
              );
            }
            var s = {
              low: t,
              high: r,
              max: r,
              C: 0,
              P: o,
              L: pe,
              R: pe,
              list: { index: i, high: r, next: null },
            };
            o === pe
              ? (e.root = s)
              : (s.low < o.low ? (o.L = s) : (o.R = s), fe(s)),
              (function (e, a) {
                for (var t; 0 === a.P.C; )
                  a.P === a.P.P.L
                    ? 0 === (t = a.P.P.R).C
                      ? ((a.P.C = 1), (t.C = 1), (a.P.P.C = 0), (a = a.P.P))
                      : (a === a.P.R && be(e, (a = a.P)),
                        (a.P.C = 1),
                        (a.P.P.C = 0),
                        ye(e, a.P.P))
                    : 0 === (t = a.P.P.L).C
                    ? ((a.P.C = 1), (t.C = 1), (a.P.P.C = 0), (a = a.P.P))
                    : (a === a.P.L && ye(e, (a = a.P)),
                      (a.P.C = 1),
                      (a.P.P.C = 0),
                      be(e, a.P.P));
                e.root.C = 1;
              })(e, s),
              (a[i] = s),
              e.size++;
          },
          remove: function (t) {
            var r = a[t];
            if (void 0 !== r) {
              delete a[t];
              var i = (function (e, a) {
                var t = e.list;
                if (t.index === a)
                  return null === t.next ? 0 : ((e.list = t.next), 1);
                var r = t;
                for (t = t.next; null !== t; ) {
                  if (t.index === a) return (r.next = t.next), 1;
                  (r = t), (t = t.next);
                }
              })(r, t);
              if (void 0 !== i) {
                if (1 === i)
                  return (r.high = r.list.high), ge(r), fe(r), void e.size--;
                var n,
                  o = r,
                  s = o.C;
                r.L === pe
                  ? ((n = r.R), ve(e, r, r.R))
                  : r.R === pe
                  ? ((n = r.L), ve(e, r, r.L))
                  : ((o = (function (e) {
                      for (; e.L !== pe; ) e = e.L;
                      return e;
                    })(r.R)),
                    (s = o.C),
                    (n = o.R),
                    o.P === r
                      ? (n.P = o)
                      : (ve(e, o, o.R), (o.R = r.R), (o.R.P = o)),
                    ve(e, r, o),
                    (o.L = r.L),
                    (o.L.P = o),
                    (o.C = r.C)),
                  ge(n),
                  fe(n),
                  1 === s &&
                    (function (e, a) {
                      for (var t; a !== pe && 1 === a.C; )
                        a === a.P.L
                          ? (0 === (t = a.P.R).C &&
                              ((t.C = 1), (a.P.C = 0), be(e, a.P), (t = a.P.R)),
                            1 === t.L.C && 1 === t.R.C
                              ? ((t.C = 0), (a = a.P))
                              : (1 === t.R.C &&
                                  ((t.L.C = 1),
                                  (t.C = 0),
                                  ye(e, t),
                                  (t = a.P.R)),
                                (t.C = a.P.C),
                                (a.P.C = 1),
                                (t.R.C = 1),
                                be(e, a.P),
                                (a = e.root)))
                          : (0 === (t = a.P.L).C &&
                              ((t.C = 1), (a.P.C = 0), ye(e, a.P), (t = a.P.L)),
                            1 === t.R.C && 1 === t.L.C
                              ? ((t.C = 0), (a = a.P))
                              : (1 === t.L.C &&
                                  ((t.R.C = 1),
                                  (t.C = 0),
                                  be(e, t),
                                  (t = a.P.L)),
                                (t.C = a.P.C),
                                (a.P.C = 1),
                                (t.L.C = 1),
                                ye(e, a.P),
                                (a = e.root)));
                      a.C = 1;
                    })(e, n),
                  e.size--;
              }
            }
          },
          search: function (a, t, r) {
            for (var i = [e.root]; 0 !== i.length; ) {
              var n = i.pop();
              if (
                !(n === pe || a > n.max) &&
                (n.L !== pe && i.push(n.L),
                n.R !== pe && i.push(n.R),
                n.low <= t && n.high >= a)
              )
                for (var o = n.list; null !== o; )
                  o.high >= a && r(o.index, n.low), (o = o.next);
            }
          },
          get size() {
            return e.size;
          },
        };
      }
      (pe.P = pe), (pe.L = pe), (pe.R = pe);
      t(83454);
      function ke(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, r = new Array(a); t < a; t++) r[t] = e[t];
        return r;
      }
      function xe(e, a) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, a) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                i,
                n = [],
                o = !0,
                s = !1;
              try {
                for (
                  t = t.call(e);
                  !(o = (r = t.next()).done) &&
                  (n.push(r.value), !a || n.length !== a);
                  o = !0
                );
              } catch (l) {
                (s = !0), (i = l);
              } finally {
                try {
                  o || null == t.return || t.return();
                } finally {
                  if (s) throw i;
                }
              }
              return n;
            }
          })(e, a) ||
          (function (e, a) {
            if (!e) return;
            if ("string" === typeof e) return ke(e, a);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return ke(e, a);
          })(e, a) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var je = function (e, a) {
          for (
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : t,
              i = arguments.length > 4 ? arguments[4] : void 0,
              n =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : "tight",
              o = we(),
              s = new Array(e),
              l = [],
              c = new Array(e),
              u = 0;
            u < e;
            u++
          )
            (s[u] = 0), (c[u] = []);
          return {
            columnCount: e,
            columnWidth: a,
            set: function (e) {
              for (
                var u =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  d = 0,
                  m = 1;
                m < s.length;
                m++
              )
                s[m] < s[d] && (d = m);
              var h = s[d] || 0;
              if (e < i.length) {
                var p = i[e][0] || 0,
                  g = i[e][1] || 0;
                u = p * (a / g) + ("tight" === n ? 50 : 0) || 0;
              }
              (s[d] = h + u + r),
                c[d].push(e),
                (l[e] = { left: d * (a + t), top: h, height: u, column: d }),
                o.insert(h, h + u, e);
            },
            get: function (e) {
              return l[e];
            },
            update: function (a) {
              for (var t = new Array(e), i = 0, n = 0; i < a.length - 1; i++) {
                var u = a[i],
                  d = l[u];
                (d.height = a[++i]),
                  o.remove(u),
                  o.insert(d.top, d.top + d.height, u),
                  (t[d.column] =
                    void 0 === t[d.column] ? u : Math.min(u, t[d.column]));
              }
              for (i = 0; i < t.length; i++)
                if (void 0 !== t[i]) {
                  var m = c[i],
                    h = Ne(m, t[i]),
                    p = c[i][h],
                    g = l[p];
                  for (
                    s[i] = g.top + g.height + r, n = h + 1;
                    n < m.length;
                    n++
                  ) {
                    var f = m[n],
                      b = l[f];
                    (b.top = s[i]),
                      (s[i] = b.top + b.height + r),
                      o.remove(f),
                      o.insert(b.top, b.top + b.height, f);
                  }
                }
            },
            range: function (e, a, t) {
              return o.search(e, a, function (e, a) {
                return t(e, l[e].left, a);
              });
            },
            estimateHeight: function (a, t) {
              var r = Math.max(0, Math.max.apply(null, s));
              return a === o.size ? r : r + Math.ceil((a - o.size) / e) * t;
            },
            shortestColumn: function () {
              return s.length > 1 ? Math.min.apply(null, s) : s[0] || 0;
            },
            size: function () {
              return o.size;
            },
            all: function () {
              return l;
            },
          };
        },
        Ne = function (e, a) {
          for (var t = 0, r = e.length - 1; t <= r; ) {
            var i = (t + r) >>> 1,
              n = e[i];
            if (n === a) return i;
            n <= a ? (t = i + 1) : (r = i - 1);
          }
          return -1;
        },
        ze = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 8,
            r = arguments.length > 3 ? arguments[3] : void 0;
          r = r || Math.floor((e + t) / (a + t)) || 1;
          var i = Math.floor((e - t * (r - 1)) / r);
          return [i, r];
        },
        Ce = [],
        _e = t(5729),
        Se = t(91033),
        Oe = t(50579),
        Pe = new WeakMap();
      function Ze() {
        var e = i.useState(Ae)[1];
        return i.useRef(function () {
          return e({});
        }).current;
      }
      var Ae = {};
      (0, _e.Z)(function (e) {});
      var Ie = (0, Oe.Z)([WeakMap], function (e, a) {
          var t = [],
            r = (0, _e.Z)(function () {
              t.length > 0 && (e.update(t), a(t)), (t.length = 0);
            }),
            i = function (a) {
              var i = a.offsetHeight;
              if (i > 0) {
                var n = Pe.get(a);
                if (void 0 !== n) {
                  var o = e.get(n);
                  void 0 !== o && i !== o.height && t.push(n, i);
                }
              }
              r();
            },
            n = new Map(),
            o = new Se.Z(function (e) {
              for (var a = 0; a < e.length; a++) {
                var t = e[a],
                  r = Pe.get(t.target);
                if (void 0 !== r) {
                  var o = n.get(r);
                  o || ((o = (0, _e.Z)(i)), n.set(r, o)), o(t.target);
                }
              }
            }),
            s = o.disconnect.bind(o);
          return (
            (o.disconnect = function () {
              s(),
                n.forEach(function (e) {
                  e.cancel();
                });
            }),
            o
          );
        }),
        Be = t(65355);
      function qe() {
        for (
          var e,
            a,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Le,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 16,
            i = arguments.length > 2 ? arguments[2] : void 0,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 9e9,
            o = arguments.length > 4 ? arguments[4] : void 0,
            s = arguments.length > 5 ? arguments[5] : void 0,
            l = [],
            c = o;
          c <= s;
          c++
        )
          t(c, i)
            ? void 0 !== e && void 0 !== a && (l.push(e, a), (e = a = void 0))
            : ((a = c), void 0 === e && (e = c));
        if (void 0 !== e && void 0 !== a) {
          var u = Math.min(Math.max(a, e + r - 1), n - 1);
          for (c = a + 1; c <= u && !t(c, i); c++) a = c;
          l.push(e, a);
        }
        if (l.length)
          for (var d = l[0], m = l[1]; m - d + 1 < r && d > 0; ) {
            var h = d - 1;
            if (t(h, i)) break;
            l[0] = d = h;
          }
        return l;
      }
      var Le = function (e, a) {
          return void 0 !== a[e];
        },
        De = {},
        Me = t(27980),
        Ee = t(4586);
      t(83454);
      var Re = "0",
        Te = (0, Oe.Z)([Ee.Z, {}, WeakMap, Ee.Z], function (e, a, t, i) {
          return (0, r.jsx)(e, { index: a, data: t, width: i });
        }),
        Fe = (0, Me.Z)(function (e, a) {
          return {
            position: "relative",
            width: "100%",
            maxWidth: "100%",
            height: Math.ceil(a),
            maxHeight: Math.ceil(a),
            willChange: e ? "contents" : void 0,
            pointerEvents: e ? "none" : void 0,
          };
        }),
        He = function (e, a) {
          return e[0] === a[0] && e[1] === a[1];
        },
        Ue = (0, Me.Z)(function (e, a) {
          return Object.assign({}, e, a);
        }, He);
      function We(e, a) {
        return a;
      }
      var Je = (0, Me.Z)(
          function (e) {
            return {
              width: e,
              zIndex: -1e3,
              visibility: "hidden",
              position: "absolute",
              writingMode: "horizontal-tb",
            };
          },
          function (e, a) {
            return e[0] === a[0];
          }
        ),
        Ve = (0, Me.Z)(function (e, a) {
          return function (t) {
            return function (r) {
              null !== r &&
                (a && (a.observe(r), Pe.set(r, t)),
                void 0 === e.get(t) && e.set(t, r.offsetHeight));
            };
          };
        }, He),
        Ge = t(64125),
        Qe = t(42820);
      function Ke(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, r = new Array(a); t < a; t++) r[t] = e[t];
        return r;
      }
      function $e(e, a) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, a) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                i,
                n = [],
                o = !0,
                s = !1;
              try {
                for (
                  t = t.call(e);
                  !(o = (r = t.next()).done) &&
                  (n.push(r.value), !a || n.length !== a);
                  o = !0
                );
              } catch (l) {
                (s = !0), (i = l);
              } finally {
                try {
                  o || null == t.return || t.return();
                } finally {
                  if (s) throw i;
                }
              }
              return n;
            }
          })(e, a) ||
          (function (e, a) {
            if (!e) return;
            if ("string" === typeof e) return Ke(e, a);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return Ke(e, a);
          })(e, a) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      t(83454);
      function Xe(e) {
        var a = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 12,
            t = (0, Qe.Z)(a),
            r = $e(i.useState(!1), 2),
            n = r[0],
            o = r[1],
            s = i.useRef(0);
          return (
            i.useEffect(
              function () {
                1 === s.current && o(!0);
                var e = !1,
                  t = (0, Ge.aM)(function () {
                    e || o(!1);
                  }, 40 + 1e3 / a);
                return (
                  (s.current = 1),
                  function () {
                    (e = !0), (0, Ge.Z6)(t);
                  }
                );
              },
              [a, t]
            ),
            { scrollTop: Math.max(0, t - e), isScrolling: n }
          );
        })(e.offset, e.scrollFps);
        return (function (e) {
          var a,
            t = e.positioner,
            n = e.resizeObserver,
            o = e.items,
            s = e.as,
            l = void 0 === s ? "div" : s,
            c = e.id,
            u = e.className,
            d = e.style,
            m = e.role,
            h = void 0 === m ? "grid" : m,
            p = e.tabIndex,
            g = void 0 === p ? 0 : p,
            f = e.containerRef,
            b = e.itemAs,
            y = void 0 === b ? "div" : b,
            v = e.itemStyle,
            w = e.reverseGrid,
            k = void 0 !== w && w,
            x = e.itemHeightEstimate,
            j = void 0 === x ? 300 : x,
            N = e.itemKey,
            z = void 0 === N ? We : N,
            C = e.overscanBy,
            _ = void 0 === C ? 2 : C,
            S = e.scrollTop,
            O = e.isScrolling,
            P = e.height,
            Z = e.render,
            A = e.onRender,
            I = 0,
            B = (Ze(), Ve(t, n)),
            q = o.length,
            L = t.columnWidth,
            D = t.columnCount,
            M = t.range,
            E = t.estimateHeight,
            R = t.size,
            T = t.shortestColumn,
            F = R(),
            H = T(),
            U = [],
            W = "list" === h ? "listitem" : "grid" === h ? "gridcell" : void 0,
            J = (0, Be.Z)(A),
            V = S + (_ *= P),
            G = H < V && F < q;
          if (
            (M(Math.max(0, S - _), V, function (e, t, i) {
              var n = o[e],
                s = z(n, e),
                l = {
                  top: k ? "unset" : i,
                  bottom: k ? i : "unset",
                  left: t,
                  width: L,
                  writingMode: "horizontal-tb",
                  position: "absolute",
                };
              U.push(
                (0, r.jsx)(
                  y,
                  {
                    ref: B(e),
                    role: W,
                    style:
                      "object" === typeof v && null !== v
                        ? Object.assign({}, l, v)
                        : l,
                    children: Te(Z, e, n, L),
                  },
                  s
                )
              ),
                void 0 === a
                  ? ((I = e), (a = e))
                  : ((I = Math.min(I, e)), (a = Math.max(a, e)));
            }),
            G)
          )
            for (
              var Q = Math.min(q - F, Math.ceil(((S + _ - H) / j) * D)),
                K = F,
                $ = Je(L);
              K < F + Q;
              K++
            ) {
              var X = o[K],
                Y = z(X, K);
              U.push(
                (0, r.jsx)(
                  y,
                  {
                    ref: B(K),
                    role: W,
                    style: "object" === typeof v ? Object.assign({}, $, v) : $,
                    children: Te(Z, K, X, L),
                  },
                  Y
                )
              );
            }
          i.useEffect(
            function () {
              "function" === typeof J.current &&
                void 0 !== a &&
                J.current(I, a, o),
                (Re = "1");
            },
            [I, a, o, J]
          ),
            i.useEffect(function () {}, [G, t]);
          var ee = Fe(O, E(q, j));
          return (0, r.jsx)(
            l,
            {
              ref: f,
              id: c,
              role: h,
              className: u,
              tabIndex: g,
              style: "object" === typeof d ? Ue(ee, d) : ee,
              children: U,
            },
            Re
          );
        })({
          scrollTop: a.scrollTop,
          isScrolling: a.isScrolling,
          positioner: e.positioner,
          resizeObserver: e.resizeObserver,
          items: e.items,
          onRender: e.onRender,
          as: e.as,
          id: e.id,
          className: e.className,
          style: e.style,
          reverseGrid: e.reverseGrid,
          role: e.role,
          tabIndex: e.tabIndex,
          containerRef: e.containerRef,
          itemAs: e.itemAs,
          itemStyle: e.itemStyle,
          itemHeightEstimate: e.itemHeightEstimate,
          itemKey: e.itemKey,
          overscanBy: e.overscanBy,
          height: e.height,
          render: e.render,
        });
      }
      var Ye = t(96458);
      function ea(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, r = new Array(a); t < a; t++) r[t] = e[t];
        return r;
      }
      function aa(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      function ta(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (a) {
              aa(e, a, t[a]);
            });
        }
        return e;
      }
      function ra(e, a) {
        if (null == e) return {};
        var t,
          r,
          i = (function (e, a) {
            if (null == e) return {};
            var t,
              r,
              i = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (t = n[r]), a.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (t = n[r]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (i[t] = e[t]));
        }
        return i;
      }
      function ia(e, a) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, a) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                i,
                n = [],
                o = !0,
                s = !1;
              try {
                for (
                  t = t.call(e);
                  !(o = (r = t.next()).done) &&
                  (n.push(r.value), !a || n.length !== a);
                  o = !0
                );
              } catch (l) {
                (s = !0), (i = l);
              } finally {
                try {
                  o || null == t.return || t.return();
                } finally {
                  if (s) throw i;
                }
              }
              return n;
            }
          })(e, a) ||
          (function (e, a) {
            if (!e) return;
            if ("string" === typeof e) return ea(e, a);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return ea(e, a);
          })(e, a) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var na = function (e) {
          var a = e.columnWidth,
            t = void 0 === a ? 300 : a,
            o = e.columnGutter,
            l = void 0 === o ? 16 : o,
            c = e.rowGutter,
            u = void 0 === c ? 16 : c,
            d = e.containerRef,
            m = e.infinteLoadCallback,
            p = void 0 === m ? function () {} : m,
            g = ra(e, [
              "columnWidth",
              "columnGutter",
              "rowGutter",
              "containerRef",
              "infinteLoadCallback",
            ]),
            f = (0, s.u)(T.V),
            b = (f.imageAspect, f.imageLayout),
            y = f.menuOpen,
            v = ia((0, n.iP)(), 2),
            w = v[0],
            k = v[1];
          (0, i.useEffect)(
            function () {
              0 === k && window.dispatchEvent(new Event("resize"));
            },
            [k]
          );
          var x = (0, i.useRef)(g.items.length),
            j = (function (e) {
              var a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : he,
                t = me(i.useState({ offset: 0, width: 0 }), 2),
                r = t[0],
                n = t[1];
              return (
                (0, ue.Z)(function () {
                  var a = e.current;
                  if (null !== a) {
                    var t = 0,
                      i = a;
                    do {
                      (t += i.offsetTop || 0), (i = i.offsetParent);
                    } while (i);
                    (t === r.offset && a.offsetWidth === r.width) ||
                      n({ offset: t, width: a.offsetWidth });
                  }
                }, a),
                r
              );
            })(d, [w, k, y]),
            N = j.offset,
            z = (function (e) {
              var a = e.width,
                t = e.columnWidth,
                r = void 0 === t ? 200 : t,
                n = e.columnGutter,
                o = void 0 === n ? 0 : n,
                s = e.rowGutter,
                l = e.columnCount,
                c = e.firstRowItems,
                u = e.imageLayout,
                d =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : Ce,
                m = function () {
                  var e = xe(ze(a, r, o, l), 2),
                    t = e[0],
                    i = e[1];
                  return je(i, t, o, null !== s && void 0 !== s ? s : o, c, u);
                },
                h = i.useRef();
              void 0 === h.current && (h.current = m());
              var p = i.useRef(d),
                g = [a, r, o, s, l],
                f = i.useRef(g),
                b = !g.every(function (e, a) {
                  return f.current[a] === e;
                });
              if (
                b ||
                !d.every(function (e, a) {
                  return p.current[a] === e;
                })
              ) {
                var y = h.current,
                  v = m();
                if (((p.current = d), (f.current = g), b))
                  for (var w = y.size(), k = 0; k < w; k++) {
                    var x = y.get(k);
                    v.set(k, void 0 !== x ? x.height : 0);
                  }
                h.current = v;
              }
              return h.current;
            })(
              {
                width: j.width,
                columnWidth: t,
                columnGutter: l,
                rowGutter: u || l,
                menuOpen: y,
                firstRowItems: (0, i.useMemo)(
                  function () {
                    return Array.from(g.items, function (e) {
                      var a, t, r;
                      return (0,
                      h.R3)(null === (a = e.image_paths) || void 0 === a ? void 0 : a.length, null === (t = e.event) || void 0 === t ? void 0 : t.height, null === (r = e.event) || void 0 === r ? void 0 : r.width);
                    }).slice(0, 50);
                  },
                  [g.items]
                ),
                imageLayout: b,
              },
              [x.current > g.items.length && g.items.length, g.dedupe]
            ),
            C = (function (e) {
              var a = Ze(),
                t = Ie(e, a);
              return (
                i.useEffect(
                  function () {
                    return function () {
                      return t.disconnect();
                    };
                  },
                  [t]
                ),
                t
              );
            })(z);
          (0, i.useEffect)(
            function () {
              x.current = g.items.length;
            },
            [g.items.length]
          );
          var _ = (function (e) {
            var a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : De,
              t = a.isItemLoaded,
              r = a.minimumBatchSize,
              n = void 0 === r ? 16 : r,
              o = a.threshold,
              s = void 0 === o ? 16 : o,
              l = a.totalItems,
              c = void 0 === l ? 9e9 : l,
              u = (0, Be.Z)(e),
              d = (0, Be.Z)(t);
            return i.useCallback(
              function (e, a, t) {
                for (
                  var r = qe(
                      d.current,
                      n,
                      t,
                      c,
                      Math.max(0, e - s),
                      Math.min(c - 1, (a || 0) + s)
                    ),
                    i = 0;
                  i < r.length - 1;
                  ++i
                )
                  u.current(r[i], r[++i], t);
              },
              [c, n, s, u, d]
            );
          })(p, { threshold: 16 });
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(
                Xe,
                ta(
                  {
                    positioner: z,
                    onRender: _,
                    offset: N,
                    resizeObserver: C,
                    itemHeightEstimate: t,
                    height: k,
                    containerRef: d,
                    overscanBy: g.reverseGrid ? "Infinity" : g.overscanBy,
                    items: g.items,
                    render: g.render,
                  },
                  g
                )
              ),
              g.newJobs &&
                0 !== g.items.length &&
                (0, r.jsxs)("div", {
                  className:
                    "flex items-center w-full text-sm font-bold tracking-widest text-slate-400",
                  children: [
                    (0, r.jsx)("div", {
                      className: "my-8 w-full border-b border-slate-700",
                    }),
                    (0, r.jsx)("p", {
                      className: "shrink-0 mx-4",
                      children: "^ NEW ^",
                    }),
                    (0, r.jsx)("div", {
                      className: "my-8 w-full border-b border-slate-700",
                    }),
                  ],
                }),
            ],
          });
        },
        oa = function (e) {
          var a,
            t,
            n,
            l,
            c = e.data,
            u = e.width,
            d = e.index,
            m = (0, s.u)(T.V),
            p = m.setModalState,
            g = (m.imageAspect, c),
            f = (0, o.useRouter)(),
            b = (0, Ye.Z)(g),
            y = b.handleFave,
            v = b.handlePublish,
            w = b.handleHidden,
            k = b.handleSelected,
            x = b.handleFlag,
            j = b.handleVote,
            N = b.faved,
            z = b.hidden,
            C = b.flagged,
            _ = b.published,
            S = b.selected,
            O = b.voted,
            P = (0, i.useCallback)(
              function () {
                f.pathname.includes("showcase")
                  ? window.open(
                      ""
                        .concat("https://cdn.midjourney.com", "/")
                        .concat(g.id, "/grid_0.png"),
                      "_blank"
                    )
                  : (p(function (e) {
                      return ta({}, e, {
                        open: !0,
                        returnHref:
                          null == e.returnHref
                            ? (0, h.Mf)({ queryToDelete: "jobId" })
                            : e.returnHref,
                        JobDataArrayTemp: [],
                      });
                    }),
                    (0, h.rX)(g.id));
              },
              [f.asPath, f.query.search, f.pathname, g.id]
            ),
            Z =
              (null === (a = g.image_paths) || void 0 === a
                ? void 0
                : a.length) || 1,
            A = ia((0, h.R3)(Z, g.event.height, g.event.width), 2),
            I = A[0],
            B = A[1],
            q =
              (aa(
                (l = {
                  prompt: g.prompt,
                  jobid: g.id,
                  gridId: g.grid_id,
                  seedImageURL: null,
                  status: g.current_status,
                  jobType: g.type,
                  eventType: g.event.eventType,
                  height:
                    null === (t = g.event) || void 0 === t ? void 0 : t.height,
                  width:
                    null === (n = g.event) || void 0 === n ? void 0 : n.width,
                  containerWidth: u,
                  index: d,
                  gridAmnt: Z,
                  username: g.username,
                  userId: g.user_id,
                  avatarJobId: g.avatar_job_id,
                  coverJobId: g.cover_job_id,
                  like_count: g.like_count,
                  followed_by_user: g.followed_by_user,
                  user_ranking_score: g.user_ranking_score,
                  enqueue_time: g.enqueue_time,
                  finalUrl: "/".concat(g.id, "/grid_0.webp"),
                  percentage: g.percentage_complete
                    ? 100 === g.percentage_complete
                      ? 100
                      : 10 * Math.floor((g.percentage_complete || 0) / 10)
                    : 100,
                  modalCallback: P,
                  faved: N,
                  faveCallback: y,
                  hidden: z,
                  handleHidden: w,
                  selected: S,
                  handleSelected: k,
                  published: _,
                  handlePublish: v,
                  flagged: C,
                  handleFlag: x,
                  voted: O,
                  handleVote: j,
                  full_command: g.full_command,
                  guild_id: g.guild_id,
                  platform_message_id: g.platform_message_id,
                }),
                "platform_message_id",
                g.platform_message_id
              ),
              aa(
                l,
                "platform_channel_id",
                g.platform_thread_id || g.platform_channel_id
              ),
              aa(l, "useLayoutState", m),
              aa(l, "platform_channel", g.platform_channel),
              aa(l, "imgHeight", I),
              aa(l, "imgWidth", B),
              l);
          return (0, r.jsx)(ce, ta({}, q), g.id);
        },
        sa = i.memo(oa);
    },
    47085: function (e, a, t) {
      t.d(a, {
        E: function () {
          return u;
        },
      });
      var r = t(85893),
        i = (t(67294), t(52758)),
        n = t(41748),
        o = t(49209),
        s = t(88305),
        l = t(44824),
        c = t(45332),
        u = function (e) {
          var a = e.params,
            t = (0, s.u)(l.V),
            u = t.formatFilter,
            d = t.setFormatFilter,
            m = [
              {
                title: "All",
                onClick: function () {
                  d("all");
                },
                icon: (0, r.jsx)(i.Z, { height: "18" }),
              },
              {
                title: "Grids",
                onClick: function () {
                  d("grid");
                },
                icon: (0, r.jsx)(n.Z, { height: "18" }),
              },
              {
                title: "Upscales",
                onClick: function () {
                  d("upscale");
                },
                icon: (0, r.jsx)(o.Z, { height: "18" }),
              },
            ];
          return (0, r.jsxs)("div", {
            className: "flex justify-between w-full md:w-auto",
            children: [
              (0, r.jsx)("div", {
                className: (0, c.CN)(
                  "flex text-sm text-slate-400  sm:hidden",
                  (null === a || void 0 === a ? void 0 : a.noResponsive) &&
                    "!hidden"
                ),
                children: "Job Type:",
              }),
              (0, r.jsx)("div", {
                className: (0, c.CN)(
                  " text-base font-medium gap-2 flex text-slate-500",
                  (null === a || void 0 === a ? void 0 : a.noResponsive) &&
                    "!flex !text-lg"
                ),
                children: m.map(function (e, a) {
                  return (0,
                  r.jsx)("button", { className: (0, c.CN)("capitalize hover:underline leading md:mt-0.5 underline-offset-2 items-center transition origin-center !justify-end text-center duration-100 ease-out", u === e.title.toLowerCase().replace(/s$/, "") && "text-slate-200 !cursor-default !no-underline"), onClick: e.onClick, children: e.title }, a);
                }),
              }),
            ],
          });
        };
    },
    82754: function (e, a, t) {
      t.d(a, {
        L: function () {
          return l;
        },
      });
      var r = t(85893),
        i = (t(67294), t(88305)),
        n = t(12540),
        o = t(44824),
        s = t(45332),
        l = function (e) {
          var a = e.params,
            t = (0, i.u)(o.V),
            l = t.rankings,
            c = t.setRankings,
            u = [
              {
                title: "\ud83d\ude36",
                label: "Unrated",
                icon: (0, r.jsx)(n.d, { height: 20 }),
                onClick: function () {
                  c({ value: "0" });
                },
              },
              {
                title: "\ud83d\ude12",
                label: "Meh'd",
                icon: (0, r.jsx)(n.H9, { height: 20 }),
                onClick: function () {
                  c({ value: "2" });
                },
              },
              {
                title: "\ud83d\ude04",
                label: "Liked",
                icon: (0, r.jsx)(n.cd, { height: 20 }),
                onClick: function () {
                  c({ value: "4" });
                },
              },
              {
                title: "\ud83d\ude0d",
                label: "Loved",
                icon: (0, r.jsx)(n.Mx, { height: 20 }),
                onClick: function () {
                  c({ value: "5" });
                },
              },
            ];
          return (0, r.jsxs)("div", {
            className: "flex justify-between w-full md:w-auto",
            children: [
              (0, r.jsx)("div", {
                className: (0, s.CN)("flex text-sm text-slate-400 sm:hidden"),
                children: "Ratings:",
              }),
              (0, r.jsx)("div", {
                className: (0, s.CN)(
                  " text-base md:text-lg gap-1 flex",
                  (null === a || void 0 === a ? void 0 : a.noResponsive) &&
                    "!flex !text-lg"
                ),
                children: u.map(function (e, a) {
                  var t, i;
                  return (0,
                  r.jsxs)("button", { onClick: e.onClick, className: "relative group-button", children: [(0, r.jsx)("span", { className: "absolute !-top-8 p-2 px-4 min-w-max text-sm text-slate-200 bg-darkBlue-500 rounded before:!border-t-darkBlue-500 opacity-0 [.group-button:hover_&]:opacity-100 transition-none [.group-button:hover_&]:transition-opacity !duration-[1ms] delay-300 pointer-events-none tooltipArrow tooltip centerAbs", children: (0, r.jsxs)("p", { className: "flex gap-2 justify-between w-full font-mono", children: [(null === l || void 0 === l || null === (t = l.labels) || void 0 === t ? void 0 : t.includes(e.title)) ? "" : "Not", (0, r.jsx)("span", { className: "", children: e.label }), " "] }) }), (0, r.jsx)("span", { className: (0, s.CN)("capitalize  items-center transition origin-center grayscale scale-90 hover:.scale-100 !justify-end text-center duration-100 ease-out", (null === l || void 0 === l || null === (i = l.labels) || void 0 === i ? void 0 : i.includes(e.title)) && "!grayscale-[25%] hover:grayscale-0  !scale-100"), children: e.icon })] }, a);
                }),
              }),
            ],
          });
        };
    },
    32636: function (e, a, t) {
      t.d(a, {
        c: function () {
          return y;
        },
      });
      var r = t(85893),
        i = t(67294),
        n = t(40779),
        o = t(44320),
        s = t(15186),
        l = t(76749),
        c = t(22350),
        u = t(61782),
        d = t(11163),
        m = t(45332),
        h = t(37940),
        p = t(36090),
        g = t(95862);
      function f(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, r = new Array(a); t < a; t++) r[t] = e[t];
        return r;
      }
      function b(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return f(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, a) {
            if (!e) return;
            if ("string" === typeof e) return f(e, a);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return f(e, a);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function y(e) {
        var a,
          t,
          f,
          y = e.fixedData,
          v = e.params,
          w = e.className,
          k = (0, d.useRouter)(),
          x = k.pathname,
          j = (0, i.useState)(n.Z),
          N = j[0],
          z = j[1],
          C = (0, i.useState)(
            null === (a = y.settings.orderBy) || void 0 === a
              ? void 0
              : a.split("-")[0]
          ),
          _ = C[0],
          S = C[1],
          O = (0, i.useState)(
            null === (t = y.settings.orderBy) || void 0 === t
              ? void 0
              : t.split("-")[1]
          ),
          P = O[0],
          Z = O[1];
        if (
          ((0, i.useEffect)(
            function () {
              var e, a, t;
              if (
                y &&
                ((null === y ||
                void 0 === y ||
                null === (e = y.settings) ||
                void 0 === e
                  ? void 0
                  : e.orderBy.split("-")[0]) !== _ ||
                  (null === y ||
                  void 0 === y ||
                  null === (a = y.settings) ||
                  void 0 === a ||
                  null === (t = a.orderBy) ||
                  void 0 === t
                    ? void 0
                    : t.split("-")[1]) !== P)
              ) {
                var r,
                  i,
                  n = y.settings,
                  o = y.defaultSort;
                if (
                  (S(
                    null === n ||
                      void 0 === n ||
                      null === (r = n.orderBy) ||
                      void 0 === r
                      ? void 0
                      : r.split("-")[0]
                  ),
                  Z(
                    null === n ||
                      void 0 === n ||
                      null === (i = n.orderBy) ||
                      void 0 === i
                      ? void 0
                      : i.split("-")[1]
                  ),
                  (null === n || void 0 === n ? void 0 : n.orderBy) === o ||
                    (null === v || void 0 === v ? void 0 : v.skipURL))
                ) {
                  var s = (0, m.Mf)({ queryToDelete: "sort" });
                  k.replace(s, void 0, { shallow: !0 });
                } else {
                  var l = (0, m.Mf)({
                    queryToAdd: "sort",
                    valueToAdd: n.orderBy,
                  });
                  k.replace(l, void 0, { shallow: !0 });
                }
              }
            },
            [
              y,
              null === y ||
              void 0 === y ||
              null === (f = y.settings) ||
              void 0 === f
                ? void 0
                : f.orderBy,
              _,
              P,
              null === v || void 0 === v ? void 0 : v.skipURL,
              k,
            ]
          ),
          !y)
        )
          return null;
        var A = null === y || void 0 === y ? void 0 : y.settings,
          I = [
            {
              title: "Hot",
              onClick: function () {
                (A.orderBy = "hot"), z(n.Z), y.refresh({});
              },
              icon: (0, r.jsx)(n.Z, { height: "18", className: "" }),
              activeIcon: (0, r.jsx)(n.Z, {
                height: "18",
                className: "text-red-500",
              }),
            },
          ].concat(
            b(
              (null === v || void 0 === v ? void 0 : v.public)
                ? []
                : [
                    {
                      title: "New",
                      onClick: function () {
                        (A.orderBy = "new"), z(o.Z), y.refresh({});
                      },
                      icon: (0, r.jsx)(o.Z, { height: "18", className: "" }),
                      activeIcon: (0, r.jsx)(o.Z, {
                        height: "18",
                        className: "text-yellow-500",
                      }),
                    },
                  ]
            ),
            b(
              x.includes("/feed")
                ? []
                : [
                    {
                      title: "Oldest",
                      onClick: function () {
                        (A.orderBy = "oldest"), z(s.Z), y.refresh({});
                      },
                      icon: (0, r.jsx)(s.Z, { height: "18", className: "" }),
                      activeIcon: (0, r.jsx)(s.Z, {
                        height: "18",
                        className: "text-blue-500 ",
                      }),
                    },
                  ]
            ),
            [
              {
                title: "Top All",
                dropdownOnly: !0,
                onClick: function () {
                  (A.orderBy = "top-all"), z(l.Z), y.refresh({});
                },
                icon: (0, r.jsx)(l.Z, { height: "18" }),
              },
              {
                title: "Top",
                listOnly: !0,
                onClick: function () {
                  (A.orderBy = "top-all"), z(l.Z), y.refresh({});
                },
                icon: (0, r.jsx)(l.Z, { height: "18" }),
                activeIcon: (0, r.jsx)(l.Z, {
                  height: "18",
                  className: "text-orange-500",
                }),
              },
            ],
            b(
              h.jk.favorites === x
                ? [
                    {
                      title: "Most Likes",
                      onClick: function () {
                        (A.orderBy = "like_count"), y.refresh({});
                      },
                      icon: (0, r.jsx)(c.Z, { height: "18" }),
                    },
                  ]
                : []
            )
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(g.Z, {
              hover: !0,
              className: (0, m.CN)(
                "lg:hidden",
                (null === v || void 0 === v ? void 0 : v.dropdownOnly) &&
                  "!block",
                (null === v || void 0 === v ? void 0 : v.buttonsOnly) &&
                  "!hidden"
              ),
              optionArray: I.filter(function (e) {
                return !e.listOnly;
              }),
              maxWidth: "max-w-max",
              placement: "bottom-start",
              offset: [0, 0],
              children: (0, r.jsxs)(p.Z, {
                title: "Open Options",
                className:
                  "capitalize text-sm md:text-base !justify-between text-right",
                children: [
                  (0, r.jsxs)("span", {
                    className: "flex items-center capitalize",
                    children: [
                      (0, r.jsx)(N, {
                        height: 18,
                        className: "mr-2 text-slate-400",
                      }),
                      " ",
                      _,
                    ],
                  }),
                  (0, r.jsx)(u.Z, { height: "18", className: "ml-3" }),
                ],
              }),
            }),
            (0, r.jsx)("div", {
              className: (0, m.CN)(
                " flex-row gap-1 justify-between items-center hidden lg:flex",
                w,
                (null === v || void 0 === v ? void 0 : v.dropdownOnly) &&
                  "!hidden",
                (null === v || void 0 === v ? void 0 : v.buttonsOnly) && "!flex"
              ),
              children: I.filter(function (e) {
                return !e.dropdownOnly;
              }).map(function (e, a) {
                return (0,
                r.jsxs)(p.Z, { onClick: e.onClick, title: "Sort by ".concat(e.title), className: "capitalize rounded-full w-max !px-4 min-w-max flex gap-1 !justify-between text-right ".concat(_.toLowerCase() === (e.slug || e.title).toLowerCase() ? "text-slate-100 bg-slate-800 hover:!bg-slate-800" : "text-slate-400 hover:!bg-slate-800/75", " "), children: [_.toLowerCase() === (e.slug || e.title).toLowerCase() ? e.activeIcon : e.icon, e.title] }, a);
              }),
            }),
          ],
        });
      }
    },
    49306: function (e, a, t) {
      t.d(a, {
        x: function () {
          return f;
        },
      });
      var r = t(85893),
        i = t(67294),
        n = t(92439),
        o = t(36090),
        s = t(47085),
        l = t(71738),
        c = t(77481),
        u = t(13342),
        d = t(45332),
        m = t(95862),
        h = function (e) {
          var a,
            t,
            n,
            o,
            s,
            h = e.fixedData,
            p = e.params,
            g = (0, i.useMemo)(
              function () {
                var e;
                switch (
                  null === h ||
                  void 0 === h ||
                  null === (e = h.settings) ||
                  void 0 === e
                    ? void 0
                    : e.isPublished
                ) {
                  case !0:
                    return l.Z;
                  case !1:
                    return c.Z;
                  default:
                    return l.Z;
                }
              },
              [
                null === h ||
                void 0 === h ||
                null === (a = h.settings) ||
                void 0 === a
                  ? void 0
                  : a.isPublished,
              ]
            ),
            f = [
              {
                title: "All",
                onClick: function () {
                  var e;
                  null === h ||
                    void 0 === h ||
                    null === (e = h.settings) ||
                    void 0 === e ||
                    delete e.isPublished,
                    h.refresh({ hardReset: !1 });
                },
                icon: (0, r.jsx)(l.Z, { height: "18" }),
              },
              {
                title: "Published",
                onClick: function () {
                  (h.settings.isPublished = !0), h.refresh({ hardReset: !0 });
                },
                icon: (0, r.jsx)(l.Z, {
                  height: "18",
                  className: "text-indigo-500",
                }),
              },
              {
                title: "Unpublished",
                onClick: function () {
                  (h.settings.isPublished = !1), h.refresh({ hardReset: !0 });
                },
                icon: (0, r.jsx)(c.Z, {
                  height: "18",
                  className: "text-indigo-500",
                }),
              },
            ];
          return (0, r.jsxs)("div", {
            className: "flex justify-between w-full md:w-auto",
            children: [
              (0, r.jsx)("div", {
                className: "flex text-sm text-slate-400 sm:hidden",
                children: "Published:",
              }),
              (0, r.jsx)(m.Z, {
                hover: !0,
                className: "md:hidden",
                optionArray: f,
                buttonHoverStyle: "hover:bg-transparent",
                maxWidth: "max-w-max",
                placement: "bottom-end",
                offset: [0, 0],
                children: (0, r.jsxs)("button", {
                  title: "Open Options",
                  className:
                    "capitalize items-center flex gap-1 text-base font-medium text-slate-100 !justify-end text-right",
                  children: [
                    (0, r.jsx)(g, {
                      height: 18,
                      className: "hidden sm:text-slate-400 md:inline",
                    }),
                    " ",
                    (0, r.jsx)("span", {
                      className: (0, d.CN)(
                        "ml-2 inline md:hidden",
                        (null === p || void 0 === p
                          ? void 0
                          : p.noResponsive) && "!inline"
                      ),
                      children:
                        null ==
                        (null === h ||
                        void 0 === h ||
                        null === (t = h.settings) ||
                        void 0 === t
                          ? void 0
                          : t.isPublished)
                          ? "All"
                          : (
                              null === h ||
                              void 0 === h ||
                              null === (n = h.settings) ||
                              void 0 === n
                                ? void 0
                                : n.isPublished
                            )
                          ? "Published"
                          : "Unpublished",
                    }),
                    (0, r.jsx)(u.Z, { height: "18", className: "" }),
                  ],
                }),
              }),
              (0, r.jsxs)("button", {
                className: "hidden relative md:inline group-button",
                onClick: function () {
                  var e, a;
                  if (
                    null ==
                    (null === h ||
                    void 0 === h ||
                    null === (e = h.settings) ||
                    void 0 === e
                      ? void 0
                      : e.isPublished)
                  )
                    (h.settings.isPublished = !0), h.refresh({ hardReset: !1 });
                  else if (
                    !0 ===
                    (null === h ||
                    void 0 === h ||
                    null === (a = h.settings) ||
                    void 0 === a
                      ? void 0
                      : a.isPublished)
                  )
                    (h.settings.isPublished = !1), h.refresh({ hardReset: !1 });
                  else {
                    var t;
                    null === h ||
                      void 0 === h ||
                      null === (t = h.settings) ||
                      void 0 === t ||
                      delete t.isPublished,
                      h.refresh({ hardReset: !1 });
                  }
                },
                children: [
                  (0, r.jsx)("span", {
                    className:
                      "absolute !-top-8 p-2 px-4 min-w-max text-sm text-slate-200 bg-darkBlue-500 rounded before:!border-t-darkBlue-500 opacity-0 [.group-button:hover_&]:opacity-100 transition-none [.group-button:hover_&]:transition-opacity !duration-[1ms] delay-300 pointer-events-none tooltipArrow tooltip centerAbs",
                    children: (0, r.jsxs)("p", {
                      className: "flex gap-2 justify-between w-full font-mono",
                      children: [
                        (0, r.jsx)("span", {
                          className: "",
                          children: "Published:",
                        }),
                        " ",
                        null ==
                        (null === h ||
                        void 0 === h ||
                        null === (o = h.settings) ||
                        void 0 === o
                          ? void 0
                          : o.isPublished)
                          ? "All"
                          : (
                              null === h ||
                              void 0 === h ||
                              null === (s = h.settings) ||
                              void 0 === s
                                ? void 0
                                : s.isPublished
                            )
                          ? "True"
                          : "False",
                      ],
                    }),
                  }),
                  (0, r.jsx)(g, {
                    height: 20,
                    className: (0, d.CN)(
                      "",
                      null == h.settings.isPublished &&
                        "grayscale text-slate-400",
                      null != h.settings.isPublished && "text-indigo-500"
                    ),
                  }),
                ],
              }),
            ],
          });
        },
        p = t(82754),
        g = t(32636),
        f = function (e) {
          var a = e.fixedData,
            t = e.CustomButtons,
            l = e.params,
            c = (0, i.useState)(!1),
            u = c[0],
            d = c[1];
          return (0, r.jsxs)("div", {
            className: "flex flex-col items-end mt-4 mb-6 w-full",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "flex flex-wrap gap-4 justify-between items-center w-full",
                children: [
                  (0, r.jsx)(g.c, { fixedData: a, params: l }),
                  (0, r.jsxs)("div", {
                    className:
                      "hidden flex-wrap gap-4 justify-between items-center self-end w-auto h-full md:flex",
                    children: [
                      !!t && (0, r.jsx)(t, {}),
                      a &&
                        !(null === l || void 0 === l ? void 0 : l.public) &&
                        (0, r.jsxs)("div", {
                          className:
                            "flex flex-wrap gap-6 justify-between items-center w-full md:w-auto",
                          children: [
                            (0, r.jsx)(s.E, {}),
                            (null === l || void 0 === l
                              ? void 0
                              : l.showPrivate) &&
                              (0, r.jsx)(h, { fixedData: a }),
                            (0, r.jsx)(p.L, {}),
                          ],
                        }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "flex flex-wrap gap-4 justify-between items-center self-end w-auto h-full md:hidden",
                    children: (0, r.jsxs)(o.Z, {
                      onClick: function () {
                        return d(function (e) {
                          return !e;
                        });
                      },
                      className: "".concat(u && "bg-uiBlue-500 text-slate-100"),
                      children: [
                        " ",
                        (0, r.jsx)(n.Z, {
                          height: 18,
                          className: "sm:mr-2 sm:text-slate-400",
                        }),
                        " ",
                      ],
                    }),
                  }),
                ],
              }),
              u &&
                a &&
                !(null === l || void 0 === l ? void 0 : l.public) &&
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col gap-4 justify-between items-start p-4 mt-2 w-full bg-darkBlue-700 rounded-2xl md:hidden",
                  children: [
                    (0, r.jsx)(s.E, {}),
                    (0, r.jsx)(p.L, {}),
                    (null === l || void 0 === l ? void 0 : l.showPrivate) &&
                      (0, r.jsx)(h, { fixedData: a }),
                  ],
                }),
            ],
          });
        };
    },
    93606: function (e, a, t) {
      t.d(a, {
        H: function () {
          return w;
        },
      });
      var r = t(34051),
        i = t.n(r),
        n = t(85893),
        o = t(67294),
        s = t(11355),
        l = t(5506),
        c = t(68121),
        u = t(11163),
        d = t(88305),
        m = t(44824),
        h = t(45332),
        p = t(12197),
        g = t(18019);
      function f(e, a, t, r, i, n, o) {
        try {
          var s = e[n](o),
            l = s.value;
        } catch (c) {
          return void t(c);
        }
        s.done ? a(l) : Promise.resolve(l).then(r, i);
      }
      function b(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      function y(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (a) {
              b(e, a, t[a]);
            });
        }
        return e;
      }
      var v = function (e) {
          var a,
            t,
            r,
            b,
            v,
            w,
            k,
            x,
            j,
            N,
            z,
            C,
            _,
            S = e.returnHref,
            O = (0, d.u)(m.V),
            P = O.modalState,
            Z = O.setModalState,
            A = (O.pathname, (0, o.useState)(!1)),
            I = A[0],
            B = A[1],
            q = (0, o.useState)(!1),
            L = q[0],
            D = q[1],
            M = (0, o.useState)({}),
            E = M[0],
            R = M[1],
            T = (0, o.useState)(0),
            F = T[0],
            H = T[1],
            U = (0, u.useRouter)(),
            W = U.push,
            J = U.query,
            V = (0, o.useState)(!0),
            G = V[0],
            Q = (V[1], (0, o.useState)(P.JobIdArray || P.jobDataArray)),
            K = Q[0],
            $ = Q[1];
          (0, o.useEffect)(
            function () {
              var e;
              $(
                (null === (e = P.JobIdArray) || void 0 === e
                  ? void 0
                  : e.length) > 0
                  ? P.JobIdArray
                  : P.jobDataArray
              );
            },
            [P.JobIdArray, P.jobDataArray]
          );
          var X,
            Y = (0, o.useCallback)(
              ((X = i().mark(function e() {
                var a, t;
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch(
                            "".concat(
                              "https://www.midjourney.com",
                              "/api/app/job-status/"
                            ),
                            {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ jobIds: [J.jobId] }),
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), (e.next = 5), a.json();
                      case 5:
                        (t = e.sent),
                          R(t),
                          P.ref.current && (P.ref.current.scrollTop = 0);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })),
              function () {
                var e = this,
                  a = arguments;
                return new Promise(function (t, r) {
                  var i = X.apply(e, a);
                  function n(e) {
                    f(i, t, r, n, o, "next", e);
                  }
                  function o(e) {
                    f(i, t, r, n, o, "throw", e);
                  }
                  n(void 0);
                });
              }),
              [J.jobId]
            );
          (0, o.useEffect)(
            function () {
              if ((D(!1), J.jobId)) {
                if (
                  (B(!0),
                  (document.body.style.cssText = "overflow:hidden !important"),
                  K)
                ) {
                  var e = K.findIndex(function (e) {
                    return J.jobId === e.id || J.jobId === e;
                  });
                  -1 !== e
                    ? (H(e),
                      K[0].id ? R(K[e]) : Y(),
                      P.ref.current && (P.ref.current.scrollTop = 0))
                    : (Y(), H(-1));
                }
              } else B(!1), (document.body.style.overflow = "auto");
            },
            [K, P.ref, J.jobId, Y]
          );
          var ee = (0, o.useCallback)(
              function () {
                if (void 0 !== P.returnHref || S)
                  B(!1),
                    Z(
                      y({}, P, {
                        open: !1,
                        returnHref: null,
                        JobDataArrayTemp: [],
                      })
                    ),
                    W(S || P.returnHref, void 0, { shallow: !0 }),
                    R({});
                else {
                  B(!1),
                    Z(
                      y({}, P, {
                        open: !1,
                        returnHref: null,
                        JobDataArrayTemp: [],
                      })
                    );
                  var e = (0, h.Mf)({ queryToDelete: "jobId" });
                  W(e, void 0, { shallow: !0 }), R({});
                }
              },
              [P, Z]
            ),
            ae = (0, o.useCallback)(
              function () {
                if (F < K.length - 1) {
                  var e,
                    a =
                      (null === K ||
                      void 0 === K ||
                      null === (e = K[F + 1]) ||
                      void 0 === e
                        ? void 0
                        : e.id) ||
                      (null === K || void 0 === K ? void 0 : K[F + 1]);
                  (0, h.rX)(a);
                }
              },
              [F, K]
            ),
            te = (0, o.useCallback)(
              function () {
                if (F > 0) {
                  var e,
                    a =
                      (null === K ||
                      void 0 === K ||
                      null === (e = K[F - 1]) ||
                      void 0 === e
                        ? void 0
                        : e.id) ||
                      (null === K || void 0 === K ? void 0 : K[F - 1]);
                  (0, h.rX)(a);
                }
              },
              [K, F]
            ),
            re = (0, o.useCallback)(
              function (e) {
                !e.repeat &&
                  I &&
                  ("ArrowRight" === e.key
                    ? ae()
                    : "ArrowLeft" === e.key
                    ? te()
                    : "Escape" === e.key && ee());
              },
              [ee, te, ae]
            );
          return (
            (0, o.useEffect)(
              function () {
                return (
                  window.addEventListener("keydown", re),
                  function () {
                    window.removeEventListener("keydown", re);
                  }
                );
              },
              [re]
            ),
            (0, o.useEffect)(
              function () {
                I
                  ? ((document.body.style.height = "100%"),
                    (document.getElementsByTagName(
                      "html"
                    )[0].style.scrollbarGutter = "stable"))
                  : ((document.body.style.height = "auto"),
                    (document.getElementsByTagName(
                      "html"
                    )[0].style.scrollbarGutter = "auto"));
              },
              [I]
            ),
            (0, n.jsx)(s.u, {
              appear: !0,
              show: I,
              enter:
                "transition-opacity fixed duration-300 ease-in-out z-[500]",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              children: (0, n.jsxs)("div", {
                ref: P.ref,
                className:
                  "flex overflow-y-scroll fixed top-0 left-0 z-[500] justify-center items-start w-screen h-full",
                children: [
                  (0, n.jsx)("button", {
                    title: "Close",
                    onClick: ee,
                    className:
                      "hidden fixed top-5 right-5 z-50 justify-center items-center w-12 h-12 leading-[0] text-[#D6DDF0] hover:bg-darkBlue-500/80 active:bg-uiBlue-500/60 rounded-full outline-2 active:outline-[#7898D7] active:outline outline-offset-2 disabled:opacity-0 transition-colors lg:flex lg:top-10 lg:right-10 lg:w-14 lg:h-14",
                    children: (0, n.jsx)(l.Z, {
                      height: "24",
                      className: "justify-self-center self-center",
                    }),
                  }),
                  (0, n.jsx)("button", {
                    title: "Next",
                    onClick: ae,
                    className:
                      "hidden fixed top-1/2 right-10 z-50 justify-center items-center w-14 h-14 text-[#D6DDF0] hover:bg-darkBlue-500/80 active:bg-uiBlue-500/60 rounded-full outline-2 active:outline-[#7898D7] active:outline outline-offset-2 disabled:opacity-0 transition-colors -translate-y-1/2 lg:flex",
                    disabled:
                      F ===
                      (null === K || void 0 === K ? void 0 : K.length) - 1,
                    children: (0, n.jsx)(p.Tt, { className: "-rotate-90" }),
                  }),
                  (0, n.jsx)("button", {
                    title: "Previous",
                    onClick: te,
                    className:
                      "hidden fixed top-1/2 left-10 z-50 justify-center items-center w-14 h-14 text-[#D6DDF0] hover:bg-darkBlue-500/80 active:bg-uiBlue-500/60 rounded-full outline-2 active:outline-[#7898D7] active:outline outline-offset-2 disabled:opacity-0 transition-colors -translate-y-1/2 lg:flex",
                    disabled: 0 === F,
                    children: (0, n.jsx)(p.Tt, { className: "rotate-90" }),
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "flex fixed bottom-6 z-[500] gap-8 p-1 leading-[0] text-white bg-black rounded-full border border-slate-900 shadow-2xl lg:hidden",
                    children: [
                      (0, n.jsx)("button", {
                        title: "Previous",
                        onClick: te,
                        disabled: 0 === F,
                        className:
                          "p-3 active:bg-slate-800 rounded-full disabled:opacity-20",
                        children: (0, n.jsx)(c.Z, { height: "26" }),
                      }),
                      (0, n.jsx)("button", {
                        title: "Close",
                        onClick: ee,
                        className: "p-3 active:bg-slate-800 rounded-full",
                        children: (0, n.jsx)(l.Z, { height: "26" }),
                      }),
                      (0, n.jsx)("button", {
                        title: "Next",
                        onClick: ae,
                        disabled:
                          F ===
                          (null === K || void 0 === K ? void 0 : K.length) - 1,
                        className:
                          "p-3 active:bg-slate-800 rounded-full disabled:opacity-20",
                        children: (0, n.jsx)(c.Z, {
                          height: "26",
                          className: "rotate-180",
                        }),
                      }),
                    ],
                  }),
                  J &&
                    (null === J ||
                    void 0 === J ||
                    null === (a = J.jobId) ||
                    void 0 === a
                      ? void 0
                      : a.length) > 0 &&
                    (null === E || void 0 === E ? void 0 : E.id) &&
                    (0, n.jsx)("div", {
                      className:
                        "flex overflow-hidden flex-col relative z-20 w-full max-w-5xl bg-darkBlue-900 border-2 border-darkBlue-500/50 h-auto m-2 lg:my-12 box-border rounded-3xl shadow-2xl",
                      children: (0, n.jsx)(g.Z, {
                        modalRef: P.ref,
                        jobData: E,
                        loaded: L,
                        setLoaded: D,
                        loadedDebounce: G,
                        preloadIds: {
                          prev:
                            (null === (t = P.jobDataArray) ||
                            void 0 === t ||
                            null === (r = t[F - 1]) ||
                            void 0 === r
                              ? void 0
                              : r.grid_id) ||
                            (null === (b = P.jobDataArray) ||
                            void 0 === b ||
                            null === (v = b[F - 1]) ||
                            void 0 === v
                              ? void 0
                              : v.id) ||
                            "",
                          next:
                            (null === (w = P.jobDataArray) ||
                            void 0 === w ||
                            null === (k = w[F + 1]) ||
                            void 0 === k
                              ? void 0
                              : k.grid_id) ||
                            (null === (x = P.jobDataArray) ||
                            void 0 === x ||
                            null === (j = x[F + 1]) ||
                            void 0 === j
                              ? void 0
                              : j.id) ||
                            "",
                          prevGrid: !!(null === (N = P.jobDataArray) ||
                          void 0 === N ||
                          null === (z = N[F - 1]) ||
                          void 0 === z
                            ? void 0
                            : z.grid_id),
                          nextGrid: !!(null === (C = P.jobDataArray) ||
                          void 0 === C ||
                          null === (_ = C[F + 1]) ||
                          void 0 === _
                            ? void 0
                            : _.grid_id),
                        },
                        increaseIndex: ae,
                        decreaseIndex: te,
                      }),
                    }),
                  (0, n.jsx)("div", {
                    className:
                      "fixed top-0 left-0 -z-10 w-full h-full !bg-[#00030f] cursor-zoom-out transition-opacity opacity-0 ".concat(
                        I && "!opacity-95"
                      ),
                    onClick: ee,
                  }),
                ],
              }),
            })
          );
        },
        w = o.memo(v);
    },
    77492: function (e, a, t) {
      t.d(a, {
        K: function () {
          return C;
        },
      });
      var r = t(85893),
        i = t(67294),
        n = t(11355),
        o = t(68715),
        s = t(21628),
        l = t(61782),
        c = t(11163),
        u = t(74931),
        d = t(88305),
        m = t(9281),
        h = t(44824),
        p = t(3202),
        g = t(53158),
        f = t(11434),
        b = t(45332),
        y = t(37940),
        v = t(93432),
        w = t(93090),
        k = t(36090),
        x = t(95862);
      function j(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      function N(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (a) {
              j(e, a, t[a]);
            });
        }
        return e;
      }
      function z(e) {
        return (0, u.ZP)(e, {
          position: "top-right",
          style: {
            margin: "1rem",
            background: "#1d2036",
            minWidth: "225px",
            color: "white",
            fontFamily: '"DM Sans", sans-serif',
            padding: "1rem 1.5rem",
          },
          icon: (0, r.jsx)(o.Z, {
            height: 24,
            className: "shrink-0 text-emerald-500",
          }),
        });
      }
      var C = function (e) {
        var a,
          t = e.feed,
          o = e.collectionID,
          l = (0, d.u)(p.Z),
          u = l.selections,
          x = l.selectionsDispatch,
          j = l.selectMode,
          C = (0, c.useRouter)(),
          O = (0, d.u)(h.V),
          P = O.setHiddenJobs,
          Z = O.setPublishedJobs,
          A = O.adminMode,
          I = O.setAdminMode,
          B = (0, m.aC)().modCheck,
          q = (0, i.useState)(!1),
          L = q[0],
          D = q[1],
          M = (0, i.useState)(!1),
          E = M[0],
          R = M[1];
        (0, i.useEffect)(function () {
          1 === u.total && j.set(!0);
        });
        var T = (0, i.useCallback)(
            function (e) {
              if (
                B("moderator") &&
                confirm(
                  "Are you sure you want to remove ".concat(
                    u.jobIds.length,
                    " jobs?"
                  )
                )
              ) {
                var a = JSON.stringify({
                  value: "mod_hidden" === e,
                  jobIds: u.jobIds,
                  task: e,
                });
                fetch(
                  "".concat(
                    "https://www.midjourney.com",
                    "/api/app/update-jobs/"
                  ),
                  {
                    method: "PUT",
                    mode: "cors",
                    cache: "default",
                    headers: { "Content-Type": "application/json" },
                    body: a,
                  }
                ).then(function (a) {
                  if (200 === a.status)
                    try {
                      "mod_hidden" === e &&
                        P(function (e) {
                          var a = N({}, e);
                          return (
                            u.jobIds.forEach(function (e) {
                              a[e] = !0;
                            }),
                            a
                          );
                        }),
                        "is_published" === e &&
                          Z(function (e) {
                            var a = N({}, e);
                            return (
                              u.jobIds.forEach(function (e) {
                                a[e] = !1;
                              }),
                              a
                            );
                          }),
                        x({ type: "clear" });
                    } catch (t) {
                      console.log(t);
                    }
                  else console.error("error", a);
                });
              }
            },
            [B, u.jobIds, P, Z, x]
          ),
          F = (0, i.useCallback)(
            function (e, a) {
              if (
                confirm(
                  "Are you sure you want to "
                    .concat(e, " ")
                    .concat(u.jobIdsAll.length, " jobs?")
                )
              ) {
                var t = JSON.stringify({
                  value: a,
                  jobIds: u.jobIdsAll,
                  task: "is_published",
                });
                fetch(
                  "".concat(
                    "https://www.midjourney.com",
                    "/api/app/update-jobs/"
                  ),
                  {
                    method: "PUT",
                    mode: "cors",
                    cache: "default",
                    headers: { "Content-Type": "application/json" },
                    body: t,
                  }
                ).then(function (e) {
                  if (200 === e.status) {
                    z("Publish change successfull.");
                    try {
                      Z(function (e) {
                        var t = N({}, e);
                        return (
                          u.jobIdsAll.forEach(function (e) {
                            t[e] = a;
                          }),
                          t
                        );
                      }),
                        x({ type: "clear" });
                    } catch (t) {
                      console.log(t);
                    }
                  } else console.error("error", e);
                });
              }
            },
            [u.jobIdsAll, Z, x]
          ),
          H = (0, i.useCallback)(function () {
            var e = { collection_id: o, job_ids: u.jobIdsAll };
            fetch("/api/app/collections-jobs/", {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            }).then(function (e) {
              200 === e.status
                ? (z(
                    "Manually added images successfully removed. Refresh to see effects."
                  ),
                  x({ type: "clear" }),
                  j.close())
                : console.error("error", e);
            });
          }, []);
        return (0, r.jsx)(f.Z, {
          position: "bottom",
          children: (0, r.jsxs)(n.u, {
            show:
              j.get ||
              ((null === c.default || void 0 === c.default
                ? void 0
                : c.default.pathname) === y.jk.archive &&
                u.total > 0),
            enterFrom: "opacity-0 translate-y-8",
            enterTo: "opacity-100 translate-y-0",
            enter: "transition ease-out duration-300",
            leaveTo: "opacity-0 translate-y-8",
            leaveFrom: "opacity-100 translate-y-0",
            leave: "transition ease-in duration-100",
            className:
              "flex bottom-0 left-0 z-50 justify-center items-center w-full pointer-events-none md:pb-4",
            children: [
              L && (0, r.jsx)(v.Z, { open: L, setOpen: D }),
              E && (0, r.jsx)(w.Z, { open: E, setOpen: R, selections: u }),
              (0, r.jsx)(g.Z, {
                className: "!pb-2 w-full md:!px-8",
                children: (0, r.jsx)("div", {
                  className:
                    "overflow-hidden z-[100] p-3 w-full h-auto bg-darkBlue-900 rounded-3xl border border-slate-300/10 pointer-events-auto sm:rounded-full",
                  children: (0, r.jsxs)("div", {
                    className:
                      "grid flex-wrap grid-cols-1 gap-4 justify-between items-center m-auto w-full max-w-[1440px] sm:flex",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex items-center h-full ",
                        children: [
                          B("moderator") &&
                            (0, r.jsx)(k.Z, {
                              title: "Mod Mode",
                              className: (0, b.CN)(
                                "grow px-3 aspect-square rounded-full max-w-max max-h-max text-base text-slate-400 hover:text-slate-100 hover:underline transition-colors sm:grow-0",
                                A && "bg-red-700"
                              ),
                              onClick: function () {
                                I(function (e) {
                                  return !e;
                                }),
                                  x({ type: "clear" });
                              },
                              children: (0, r.jsx)(s.Z, { height: 20 }),
                            }),
                          (0, r.jsxs)("div", {
                            className:
                              "flex grow justify-center items-baseline px-4 text-base",
                            children: [
                              (0, r.jsx)("span", {
                                className: " text-slate-400",
                                children: "Selected:",
                              }),
                              (0, r.jsx)("span", {
                                className: "ml-2 font-normal text-slate-200",
                                children: u.total,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex flex-wrap gap-4",
                        children: [
                          (0, r.jsx)("button", {
                            className: (0, b.CN)(
                              "grow py-3 px-4 text-base text-slate-400 hover:text-slate-100  hover:underline rounded transition-colors sm:grow-0"
                            ),
                            onClick: function () {
                              j.close(), I(!1), x({ type: "clear" });
                            },
                            children: u.total > 0 ? "Clear" : "Close",
                          }),
                          C.pathname !== y.jk.archive &&
                            (null === t ||
                            void 0 === t ||
                            null === (a = t.jobsList) ||
                            void 0 === a
                              ? void 0
                              : a.length) > 0 &&
                            (0, r.jsx)("button", {
                              className: (0, b.CN)(
                                "grow py-3 px-4 text-base text-slate-300 hover:text-slate-100  hover:underline rounded transition-colors sm:grow-0"
                              ),
                              onClick: function () {
                                var e = t.getJobIds();
                                x({
                                  type: "bulkAddToSelection",
                                  payload: {
                                    jobs: e,
                                    title: "Manual Selections",
                                  },
                                });
                              },
                              children: "Select all",
                            }),
                          A
                            ? (0, r.jsx)(S, { handleHidden: T, selections: u })
                            : (0, r.jsx)(_, {
                                handleHidden: T,
                                setOpen: D,
                                setOpenCollection: R,
                                handlePublish: F,
                                selections: u,
                                handleCollectionRemove: H,
                              }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      };
      function _(e) {
        e.handleHidden;
        var a,
          t,
          n = e.setOpen,
          o = e.setOpenCollection,
          s = e.handlePublish,
          u = e.selections,
          d = e.handleCollectionRemove,
          h = (0, c.useRouter)().pathname,
          p = (0, m.aC)().hasPrivate,
          g = (0, i.useState)("download"),
          f = g[0],
          v = g[1],
          w = N(
            {
              download: {
                title: "Open Downloader",
                slug: "download",
                onClick: function () {
                  n(!0);
                },
              },
            },
            p && {
              publish: {
                title: "Publish",
                slug: "publish",
                onClick: function () {
                  s("publish", !0);
                },
              },
              unpublish: {
                title: "Unpublish",
                slug: "unpublish",
                onClick: function () {
                  s("unpublish", !1);
                },
              },
            },
            {
              add_collection: {
                title: "Add to Collection",
                slug: "add_collection",
                onClick: function () {
                  return o(!0);
                },
              },
            },
            h.includes(y.jk.collections) && {
              remove_collection: {
                title: "Remove from Collection",
                slug: "remove_collection",
                onClick: d,
              },
            }
          ),
          k = Object.values(w).map(function (e) {
            var a = e.title,
              t = e.slug;
            return {
              title: a,
              onClick: function () {
                return v(t);
              },
            };
          });
        return (0, r.jsxs)("div", {
          className:
            "group flex overflow-hidden items-stretch w-full rounded-lg sm:w-auto md:rounded-full",
          children: [
            (0, r.jsx)("button", {
              className: (0, b.CN)(
                "grow py-3 px-5 peer text-base font-medium text-white bg-emerald-800 w-full shrink capitalize  !shadow-sm sm:grow-0 ",
                (null === u || void 0 === u ? void 0 : u.total) > 0
                  ? "cursor-pointer hover:!bg-emerald-900"
                  : "cursor-default !bg-slate-700 text-slate-400"
              ),
              onClick: null === (a = w[f]) || void 0 === a ? void 0 : a.onClick,
              children: null === (t = w[f]) || void 0 === t ? void 0 : t.title,
            }),
            (0, r.jsx)("div", {
              className:
                "bg-emerald-800 hover:bg-emerald-900 peer-hover:bg-emerald-900 ",
              children: (0, r.jsx)(x.Z, {
                maxWidth: "max-w-max",
                placement: "top-end",
                className: "h-full ",
                itemsClassName: "bg-darkBlue-700",
                buttonStyle: "h-full rounded-none",
                buttonHoverStyle: "rounded-none active:bg-darkBlue-900",
                offset: [0, 10],
                optionArray: k,
                children: (0, r.jsx)("button", {
                  title: "Select job type",
                  className: (0, b.CN)(
                    "px-2 pr-3 h-full text-base font-medium text-white !shadow-sm sm:grow-0 ",
                    (null === u || void 0 === u ? void 0 : u.total) > 0
                      ? "cursor-pointer hover:!bg-emerald-900 "
                      : "cursor-default bg-slate-700 text-slate-400"
                  ),
                  children: (0, r.jsx)(l.Z, { height: "24" }),
                }),
              }),
            }),
          ],
        });
      }
      function S(e) {
        var a = e.handleHidden,
          t = e.selections,
          n = (0, i.useState)("mod_hidden"),
          o = n[0],
          s = n[1];
        return (0, r.jsxs)("div", {
          className:
            "group flex overflow-hidden items-stretch w-full rounded-lg sm:w-auto md:rounded-full",
          children: [
            (0, r.jsx)("button", {
              title: "Send ".concat(o.replace("-", " "), " job to bot"),
              className: (0, b.CN)(
                "grow py-3 px-5 peer text-base font-medium text-white bg-red-800 w-full shrink capitalize  !shadow-sm sm:grow-0 ",
                t.total > 0
                  ? "cursor-pointer hover:!bg-red-900"
                  : "cursor-default !bg-slate-700 text-slate-400"
              ),
              onClick: function () {
                a(o);
              },
              children: "mod_hidden" === o ? "Mod Hide" : "Unpublish",
            }),
            (0, r.jsx)("div", {
              className: "bg-red-800 hover:bg-red-900 peer-hover:bg-red-900 ",
              children: (0, r.jsx)(x.Z, {
                maxWidth: "max-w-max",
                placement: "top-end",
                className: "h-full",
                itemsClassName: "bg-darkBlue-700",
                buttonHoverStyle: "rounded-none active:bg-darkBlue-900",
                offset: [0, 10],
                buttonStyle: "h-full rounded-none",
                optionArray: [
                  {
                    title: "Mod Hide",
                    onClick: function () {
                      return s("mod_hidden");
                    },
                  },
                  {
                    title: "Unpublish",
                    onClick: function () {
                      return s("is_published");
                    },
                  },
                ],
                children: (0, r.jsx)("button", {
                  title: "Select job type",
                  className: (0, b.CN)(
                    "grow px-2 pr-3 h-full text-base font-medium text-white !shadow-sm sm:grow-0 ",
                    t.total > 0
                      ? "cursor-pointer hover:!bg-red-900 "
                      : "cursor-default !bg-slate-700 text-slate-400"
                  ),
                  children: (0, r.jsx)(l.Z, { height: "24" }),
                }),
              }),
            }),
          ],
        });
      }
    },
    30626: function (e, a, t) {
      var r = t(85893),
        i = t(67294),
        n = t(44681),
        o = t(96857),
        s = t(36090),
        l = t(12197),
        c = t(95611),
        u = t(45332);
      a.Z = function (e) {
        var a = e.user_id,
          t = e.followed_by_user,
          d = e.className,
          m = (0, c.Z)({ user_id: a, followed_by_user: t }),
          h = m.handleFollow,
          p = m.followed,
          g = (0, i.useState)(!1),
          f = g[0],
          b = g[1];
        return (0, r.jsx)(
          s.Z,
          {
            onClick: function () {
              b(!0), h();
            },
            title: p ? (f ? "Following" : "Unfollow") : "Follow",
            onMouseLeave: function () {
              return b(!1);
            },
            className:
              "group transition min-w-max max-w-max !p-2 text-slate-100 rounded-full border-2 border-slate-800 "
                .concat(p && f && "hover:border-emerald-900", " ")
                .concat(
                  p && !f
                    ? " hover:border-red-700 border-emerald-900 hover:text-red-500 hover:!bg-red-900/10 "
                    : "hover:!bg-slate-900 ",
                  " "
                )
                .concat(d),
            children: p
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(l.nj, {
                      strokeOnly: !0,
                      height: 18,
                      className: (0, u.CN)(!f && "group-hover:hidden"),
                    }),
                    (0, r.jsx)(o.Z, {
                      height: 18,
                      className: (0, u.CN)("hidden", !f && "group-hover:flex"),
                    }),
                  ],
                })
              : (0, r.jsx)(n.Z, { height: 18, className: "inline" }),
          },
          "followButton"
        );
      };
    },
    49119: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return f;
        },
      });
      var r = t(85893),
        i = t(67294),
        n = t(96857),
        o = t(44681),
        s = t(56365),
        l = t(41664),
        c = t(11163),
        u = t(36090),
        d = t(95611),
        m = t(30658),
        h = t(13709),
        p = t(12197),
        g = function (e) {
          var a = e.username,
            t = e.user_id,
            m =
              (e.image,
              (0, c.useRouter)().push,
              (0, d.Z)({ followed_by_user: !0, user_id: t })),
            p = m.handleFollow,
            g = m.followed,
            f = (0, i.useMemo)(
              function () {
                return g ? "unfollow" : "follow";
              },
              [g]
            );
          return (0, r.jsx)(l.default, {
            passHref: !0,
            href: "app/users/".concat(t),
            children: (0, r.jsxs)("a", {
              className:
                "group flex gap-2 !justify-between items-center !p-2 text-lg font-normal text-slate-300 align-baseline hover:!bg-darkBlue-500/50 rounded-lg transition-colors duration-100 cursor-pointer",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-2 ".concat(
                    g ? "" : "opacity-25"
                  ),
                  children: [
                    (0, r.jsx)(h.ZP, {
                      username: a.replace(/[^A-Z0-9]/gi, ""),
                      size: "22",
                      className: "inline-block mr-1",
                    }),
                    a,
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex gap-1 ",
                  children: [
                    (0, r.jsx)(u.Z, {
                      title: f,
                      className:
                        "opacity-0 bg-slate-400/5  group-hover:opacity-100 transition-opacity duration-100",
                      onClick: function (e) {
                        e.preventDefault(), e.stopPropagation(), p(f);
                      },
                      children: g
                        ? (0, r.jsx)(n.Z, { height: 16 })
                        : (0, r.jsx)(o.Z, { height: 16 }),
                    }),
                    (0, r.jsx)(u.Z, {
                      title: "View gallery",
                      className:
                        "opacity-0 bg-slate-400/5  group-hover:opacity-100  transition-opacity duration-100",
                      children: (0, r.jsx)(s.Z, { height: 16 }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      function f(e) {
        var a,
          t,
          i = e.open,
          n = e.setOpen,
          o = (e.userId, e.followData),
          s = e.paginate,
          l = s.size > 0 && o && "undefined" === typeof o[s.size - 1],
          c = {
            open: i,
            setOpen: n,
            title: "Following",
            stackButtons: !1,
            showClose: !0,
          };
        return (0, r.jsx)(m.Z, {
          modalBaseProps: c,
          children: (0, r.jsx)("div", {
            className: "",
            children: (0, r.jsxs)("div", {
              className: "",
              children: [
                (0, r.jsxs)("p", {
                  className:
                    "mb-3 text-base font-medium text-left text-gray-400",
                  children: [
                    "Showing ",
                    Math.min(
                      50 * s.size,
                      null === (a = o[0]) || void 0 === a
                        ? void 0
                        : a.total_count
                    ),
                    " ",
                    "of ",
                    null === (t = o[0]) || void 0 === t
                      ? void 0
                      : t.total_count,
                    " users:",
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "overflow-y-auto max-h-96 miniScrollbar",
                  children: [
                    null === o || void 0 === o
                      ? void 0
                      : o.map(function (e) {
                          var a;
                          return null === e ||
                            void 0 === e ||
                            null === (a = e.users) ||
                            void 0 === a
                            ? void 0
                            : a.map(function (e) {
                                return (0,
                                r.jsx)(g, { user_id: e.user_id, username: e.username, image: e.image }, e.username);
                              });
                        }),
                    (l || o[s.size - 1].has_more) &&
                      (0, r.jsx)("button", {
                        className:
                          "mt-2 p-1 w-full text-slate-400 underline-offset-1 hover:text-slate-300 inline-flex justify-center items-center hover:underline font-medium rounded-lg",
                        onClick: function () {
                          s.setSize(s.size + 1);
                        },
                        children: l
                          ? (0, r.jsx)(p.gb, {
                              size: "24",
                              className: "animate-spin",
                            })
                          : "Load More",
                      }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    96458: function (e, a, t) {
      var r = t(85893),
        i = t(67294),
        n = t(68715),
        o = t(19965),
        s = t(74931),
        l = t(88305),
        c = t(12197),
        u = t(45332),
        d = t(74210),
        m = t(44824),
        h = t(3202),
        p = t(83454);
      function g(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      function f(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (a) {
              g(e, a, t[a]);
            });
        }
        return e;
      }
      a.Z = function (e) {
        var a = (0, l.u)(m.V),
          t = (a.adminMode, a.setFavouriteJobs),
          b = a.setHiddenJobs,
          y = a.setPublishedJobs,
          v = a.setVotedJobs,
          w = a.setFlaggedJobs,
          k = a.favouriteJobs,
          x = a.hiddenJobs,
          j = a.flaggedJobs,
          N = a.publishedJobs,
          z = a.votedJobs,
          C = (0, l.u)(d.d).likeJobCall,
          _ = (0, l.u)(h.Z),
          S = _.selections,
          O = _.selectionsDispatch,
          P = e.id,
          Z =
            (e.hideList,
            {
              platform_message_id: e.platform_message_id,
              platform_channel_id:
                e.platform_thread_id || e.platform_channel_id,
              hideList: e.hideList || [e.id],
            }),
          A = (0, i.useState)(e.id in k ? k[e.id] : e.liked_by_user),
          I = A[0],
          B = A[1],
          q = (0, i.useState)(!!S.jobIds.includes(e.id)),
          L = q[0],
          D = q[1],
          M = (0, i.useState)(e.id in x ? x[e.id] : e.hidden),
          E = M[0],
          R = M[1],
          T = (0, i.useState)(
            Object.keys(j).includes(e.id) ? j[e.id] : e.flagged
          ),
          F = T[0],
          H = T[1],
          U = (0, i.useState)(e.id in N ? N[e.id] : e.is_published),
          W = U[0],
          J = U[1],
          V = (0, i.useState)(e.id in z ? z[e.id] : e.ranking_by_user),
          G = V[0],
          Q = V[1],
          K = (0, i.useCallback)(
            function () {
              var e;
              (e = I ? "decrement" : "increment"),
                t(function (e) {
                  return (0, u.Zs)(e, P, !I);
                }),
                B(function (e) {
                  return !e;
                }),
                C({ id: P, value: e }).catch(function (e) {
                  console.log(e),
                    B(function (e) {
                      return !e;
                    }),
                    t(function (e) {
                      return (0, u.Zs)(e, P, !I);
                    });
                });
            },
            [I, P, C, B, t]
          ),
          $ = (0, i.useCallback)(
            function () {
              var e = JSON.stringify({
                  value: !E,
                  jobIds: Z.hideList,
                  task: "mod_hidden",
                  jobDetails: Z,
                }),
                a = fetch(
                  "".concat(
                    "https://www.midjourney.com",
                    "/api/app/update-jobs/"
                  ),
                  {
                    method: "PUT",
                    mode: "cors",
                    cache: "default",
                    headers: { "Content-Type": "application/json" },
                    body: e,
                  }
                ).then(function (e) {
                  200 === e.status
                    ? (b(function (e) {
                        return (0, u.Zs)(e, P, !E);
                      }),
                      R(function (e) {
                        return !e;
                      }))
                    : console.error("error", e);
                });
              s.ZP.promise(
                a,
                {
                  loading: E ? "Unhiding..." : "Hiding...",
                  success: E ? "Unhidden successfully" : "Hidden successfully",
                  error: E
                    ? "Unhiding failed, please try again."
                    : "Hiding failed, please try again.",
                },
                {
                  position: "top-right",
                  style: {
                    background: "#1d2036",
                    minWidth: "225px",
                    color: "white",
                    fontFamily: '"DM Sans", sans-serif',
                    padding: "1rem 1.5rem",
                  },
                  loading: {
                    icon: (0, r.jsx)(c.gb, {
                      height: "18",
                      className: "text-white animate-spin",
                    }),
                  },
                  success: {
                    icon: (0, r.jsx)(n.Z, {
                      height: 18,
                      className: "text-emerald-500",
                    }),
                  },
                  error: {
                    icon: (0, r.jsx)(o.Z, {
                      height: 18,
                      className: "text-red-500",
                    }),
                  },
                }
              );
            },
            [P, E]
          ),
          X = (0, i.useCallback)(
            function () {
              var e = W,
                a = JSON.stringify({
                  value: !W,
                  jobIds: [P],
                  task: "is_published",
                });
              J(function (e) {
                return !e;
              });
              var t = fetch(
                "".concat(
                  "https://www.midjourney.com",
                  "/api/app/update-jobs/"
                ),
                {
                  method: "PUT",
                  mode: "cors",
                  cache: "default",
                  headers: { "Content-Type": "application/json" },
                  body: a,
                }
              ).then(function (a) {
                200 === a.status
                  ? y(function (e) {
                      return (0, u.Zs)(e, P, !W);
                    })
                  : (console.error("error", a), J(e));
              });
              s.ZP.promise(
                t,
                {
                  loading: W ? "Unpublishing..." : "Publishing...",
                  success: W
                    ? "Unpublished successfully"
                    : "Published successfully",
                  error: W
                    ? "Unpublishing failed, please try again."
                    : "Publishing failed, please try again.",
                },
                {
                  position: "top-right",
                  style: {
                    background: "#1d2036",
                    minWidth: "225px",
                    color: "white",
                    fontFamily: '"DM Sans", sans-serif',
                    padding: "1rem 1.5rem",
                  },
                  loading: {
                    icon: (0, r.jsx)(c.gb, {
                      height: "18",
                      className: "text-white animate-spin",
                    }),
                  },
                  success: {
                    icon: (0, r.jsx)(n.Z, {
                      height: 18,
                      className: "text-emerald-500",
                    }),
                  },
                  error: {
                    icon: (0, r.jsx)(o.Z, {
                      height: 18,
                      className: "text-red-500",
                    }),
                  },
                }
              );
            },
            [P, W, J, y]
          ),
          Y = (0, i.useCallback)(
            function (e) {
              var a = JSON.stringify({ value: e, jobId: P });
              fetch(
                "".concat("https://www.midjourney.com", "/api/app/user-rank/"),
                {
                  method: "PUT",
                  mode: "cors",
                  cache: "default",
                  headers: {
                    "Content-Type": "application/json",
                    "x-api-key": p.env.MJ_API_KEY || "",
                  },
                  body: a,
                }
              ).then(function (e) {
                200 === e.status ? console.log(e) : console.error("error", e);
              });
            },
            [P]
          ),
          ee = (0, i.useCallback)(
            function (e) {
              var a = JSON.stringify({ value: e, jobId: P }),
                t = G;
              Q(function () {
                return e !== G ? e : G;
              }),
                fetch(
                  "".concat(
                    "https://www.midjourney.com",
                    "/api/app/user-rank/"
                  ),
                  {
                    method: "POST",
                    mode: "cors",
                    cache: "default",
                    headers: { "Content-Type": "application/json" },
                    body: a,
                  }
                )
                  .then(function (a) {
                    200 === a.status
                      ? (console.log("voted"),
                        v(function (a) {
                          return (0, u.Zs)(a, P, e);
                        }))
                      : (console.log("error", a), Q(t));
                  })
                  .catch(function (e) {
                    console.log(e), Q(t);
                  });
            },
            [P, G]
          ),
          ae = (0, i.useCallback)(
            function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              H && H(e);
              var a = JSON.stringify({
                  value: e,
                  jobIds: [P],
                  task: "flagged",
                }),
                t = fetch(
                  "".concat(
                    "https://www.midjourney.com",
                    "/api/app/update-jobs/"
                  ),
                  {
                    method: "PUT",
                    mode: "cors",
                    cache: "default",
                    headers: { "Content-Type": "application/json" },
                    body: a,
                  }
                ).then(function (a) {
                  if (!a.ok || 200 !== a.status)
                    throw (H && H(!e), new Error(a.statusText));
                  try {
                    w(function (a) {
                      return f({}, a, g({}, P, e));
                    });
                  } catch (t) {
                    console.log("error: ", t);
                  }
                });
              s.ZP.promise(
                t,
                {
                  loading: e ? "Reporting..." : "Flagging as safe...",
                  success: e
                    ? "Reported successfully"
                    : "Successfully flagged as safe",
                  error: e
                    ? "Report failed, please try again."
                    : "Failed to flag as safe, please try again.",
                },
                {
                  position: "top-right",
                  style: {
                    background: "#1d2036",
                    minWidth: "225px",
                    color: "white",
                    fontFamily: '"DM Sans", sans-serif',
                    padding: "1rem 1.5rem",
                  },
                  loading: {
                    icon: (0, r.jsx)(c.gb, {
                      height: "18",
                      className: "text-white animate-spin",
                    }),
                  },
                  success: {
                    icon: (0, r.jsx)(n.Z, {
                      height: 18,
                      className: "text-emerald-500",
                    }),
                  },
                  error: {
                    icon: (0, r.jsx)(o.Z, {
                      height: 18,
                      className: "text-red-500",
                    }),
                  },
                }
              );
            },
            [P, H, w]
          ),
          te = (0, i.useCallback)(
            function () {
              O({
                type: "toggleFromSelection",
                payload: {
                  title: "Manual Selections",
                  job: { id: P, username: e.username, prompt: e.prompt },
                },
              }),
                D(function (e) {
                  return !e;
                });
            },
            [e.prompt, e.username, P, O]
          );
        return (
          (0, i.useEffect)(
            function () {
              B(e.id in k ? k[e.id] : e.liked_by_user);
            },
            [k, P]
          ),
          (0, i.useEffect)(
            function () {
              R(e.id in x ? x[e.id] : e.hidden);
            },
            [x, P]
          ),
          (0, i.useEffect)(
            function () {
              J(e.id in N ? N[e.id] : e.is_published);
            },
            [N, P]
          ),
          (0, i.useEffect)(
            function () {
              D(S.jobIds.includes(e.id) || !1);
            },
            [P, S.jobIds, e.id]
          ),
          (0, i.useEffect)(
            function () {
              Q(e.id in z ? z[e.id] : e.ranking_by_user);
            },
            [z, P]
          ),
          (0, i.useEffect)(
            function () {
              H(Object.keys(j).includes(e.id) ? j[e.id] : e.flagged);
            },
            [j, P]
          ),
          {
            handleFave: K,
            handleHidden: $,
            handlePublish: X,
            handleSelected: te,
            handleFlag: ae,
            handleRate: Y,
            handleVote: ee,
            faved: I,
            hidden: E,
            flagged: F,
            published: W,
            selected: L,
            voted: G,
          }
        );
      };
    },
    22379: function (e, a, t) {
      t.r(a),
        t.d(a, {
          Avatar: function () {
            return X;
          },
          UserBanner: function () {
            return ae;
          },
          UserBannerInfo: function () {
            return te;
          },
          default: function () {
            return ee;
          },
        });
      var r = t(34051),
        i = t.n(r),
        n = t(85893),
        o = t(67294),
        s = t(16896),
        l = t(38264),
        c = t(67471),
        u = t(56365),
        d = t(92439),
        m = t(1848),
        h = t(8639),
        p = t(25675),
        g = t(41664),
        f = t(11163),
        b = t(1852),
        y = t(88305),
        v = t(60204),
        w = t(36090),
        k = t(60670),
        x = t(13709),
        j = t(12197),
        N = t(40622),
        z = t(95862),
        C = t(49306),
        _ = t(93606),
        S = t(44593),
        O = t(45332),
        P = t(49119),
        Z = function (e) {
          var a,
            t,
            r,
            i = e.id,
            s = e.session_user,
            l = void 0 !== s && s,
            c = (0, S.ZP)(
              function (e) {
                return l
                  ? "/api/app/list-user-follows/?session_id="
                      .concat(i, "&amount=50&page=")
                      .concat(e + 1)
                  : "";
              },
              O.EE,
              {
                fallbackData: [
                  { total_count: "0", users: [], has_more: !1, first_load: !0 },
                ],
                revalidateOnFocus: !1,
                revalidateOnReconnect: !1,
                refreshWhenOffline: !1,
                refreshWhenHidden: !1,
                refreshInterval: 0,
              }
            ),
            u = c.data,
            d = (c.error, c.setSize),
            m = c.size,
            h = (0, o.useState)(!1),
            p = h[0],
            g = h[1];
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (null === (a = u[0]) || void 0 === a ? void 0 : a.total_count) >
                0 &&
                (0, n.jsx)(P.Z, {
                  open: p,
                  setOpen: g,
                  followData: u,
                  paginate: { setSize: d, size: m },
                }),
              l &&
                (null === u || void 0 === u ? void 0 : u.length) > 0 &&
                (0, n.jsxs)("button", {
                  className:
                    "hidden min-w-max max-w-max text-base font-medium text-left text-slate-400 hover:underline md:inline",
                  onClick: function () {
                    var e;
                    (null === (e = u[0]) || void 0 === e
                      ? void 0
                      : e.total_count) > 0 && g(!p);
                  },
                  children: [
                    (0, n.jsx)("span", {
                      className: (
                        null === u ||
                        void 0 === u ||
                        null === (t = u[0]) ||
                        void 0 === t
                          ? void 0
                          : t.first_load
                      )
                        ? "animate-pulse"
                        : "",
                      children:
                        (null === u ||
                        void 0 === u ||
                        null === (r = u[0]) ||
                        void 0 === r
                          ? void 0
                          : r.total_count) || 0,
                    }),
                    " ",
                    "Following",
                  ],
                }),
            ],
          });
        },
        A = t(30658),
        I = t(47085),
        B = t(82754),
        q = t(32636),
        L = t(9281);
      function D(e, a, t, r, i, n, o) {
        try {
          var s = e[n](o),
            l = s.value;
        } catch (c) {
          return void t(c);
        }
        s.done ? a(l) : Promise.resolve(l).then(r, i);
      }
      function M(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      function E(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (a) {
              M(e, a, t[a]);
            });
        }
        return e;
      }
      function R(e) {
        var a,
          t = e.setOpen,
          r = e.open,
          s = e.fixedData,
          l = (0, L.aC)().userData,
          c = (0, o.useCallback)(
            ((a = i().mark(function e() {
              var a, r, n;
              return i().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = {
                          data: E({}, l, {
                            private: E(
                              {},
                              null === l || void 0 === l ? void 0 : l.private,
                              {
                                filters: {
                                  orderBy: s.settings.orderBy,
                                  jobType: s.settings.jobType,
                                  user_id_ranked_score:
                                    s.settings.user_id_ranked_score,
                                },
                              }
                            ),
                          }),
                        }),
                        (e.next = 3),
                        fetch("/api/pg/update-profile/", {
                          method: "PUT",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(a),
                        })
                      );
                    case 3:
                      return (r = e.sent), (e.next = 6), r.json();
                    case 6:
                      if (((n = e.sent), r.ok)) {
                        e.next = 9;
                        break;
                      }
                      throw new Error(n.message || "Something went wrong!");
                    case 9:
                      t(!1);
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })),
            function () {
              var e = this,
                t = arguments;
              return new Promise(function (r, i) {
                var n = a.apply(e, t);
                function o(e) {
                  D(n, r, i, o, s, "next", e);
                }
                function s(e) {
                  D(n, r, i, o, s, "throw", e);
                }
                o(void 0);
              });
            }),
            [
              s.settings.jobType,
              s.settings.orderBy,
              s.settings.user_id_ranked_score,
              l,
              t,
            ]
          ),
          u = {
            open: r,
            maxHeight: "",
            containerStyle: " md:overflow-auto miniScrollbar overflow-x-show",
            setOpen: t,
            title: "Edit default filters",
            showClose: !0,
            closeCallback: function () {
              return t(!1);
            },
            ActionButton: function () {
              return (0, n.jsx)(w.Z, {
                title: "Coming soon",
                className:
                  "inline-flex justify-center py-2 px-4 w-full min-h-[3rem] text-base font-medium text-white disabled:text-gray-900 bg-teal-600 hover:bg-teal-800 disabled:!bg-gray-600 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-sm disabled:cursor-not-allowed sm:text-base",
                onClick: c,
                children: "Save",
              });
            },
            showButtons: !0,
            BackButton: function () {
              return (0, n.jsx)(w.Z, {
                className:
                  "focus:outline-none focus-within:ring-2 !ring-blue-900",
                onClick: function () {
                  t(!1);
                },
                children: "Cancel",
              });
            },
          };
        return (0, n.jsx)(A.Z, {
          modalBaseProps: u,
          children: (0, n.jsxs)("div", {
            className:
              "flex flex-col gap-6 my-2 max-h-screen text-left miniScrollBar",
            children: [
              (0, n.jsx)("p", {
                className: "text-lg text-slate-400",
                children:
                  "Select the default filters for your home page. You can update them whenever you like.",
              }),
              (0, n.jsx)("div", {
                className: "flex flex-col items-end mt-4 mb-6 w-full",
                children: (0, n.jsxs)("div", {
                  className: "flex flex-col gap-2 w-full",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "flex grow justify-between items-center p-4 w-auto h-16 bg-darkBlue-900/50 rounded-lg",
                      children: [
                        (0, n.jsx)("p", {
                          className: "text-lg font-medium text-slate-300",
                          children: "Sorting",
                        }),
                        (0, n.jsx)(q.c, {
                          fixedData: s,
                          className: "flex-wrap w-full",
                          params: { dropdownOnly: !0 },
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "flex grow justify-between items-center p-4 w-auto h-16 bg-darkBlue-900/50 rounded-lg",
                      children: [
                        (0, n.jsx)("div", {
                          className: "flex flex-col",
                          children: (0, n.jsx)("p", {
                            className: "text-lg font-medium text-slate-300",
                            children: "Format",
                          }),
                        }),
                        (0, n.jsx)(I.E, { params: { noResponsive: !0 } }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "flex grow justify-between items-center p-4 pr-5 w-auto h-16 bg-darkBlue-900/50 rounded-lg",
                      children: [
                        (0, n.jsx)("p", {
                          className: "text-lg font-medium text-slate-300",
                          children: "Ratings",
                        }),
                        (0, n.jsx)(B.L, { params: { noResponsive: !0 } }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var T = t(74210),
        F = t(44824),
        H = t(25482),
        U = t(27461),
        W = t(27226),
        J = t(37940);
      function V(e, a, t, r, i, n, o) {
        try {
          var s = e[n](o),
            l = s.value;
        } catch (c) {
          return void t(c);
        }
        s.done ? a(l) : Promise.resolve(l).then(r, i);
      }
      function G(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      function Q(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (a) {
              G(e, a, t[a]);
            });
        }
        return e;
      }
      function K(e, a) {
        if (null == e) return {};
        var t,
          r,
          i = (function (e, a) {
            if (null == e) return {};
            var t,
              r,
              i = {},
              n = Object.keys(e);
            for (r = 0; r < n.length; r++)
              (t = n[r]), a.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (r = 0; r < n.length; r++)
            (t = n[r]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (i[t] = e[t]));
        }
        return i;
      }
      var $ = (function () {
          var e,
            a =
              ((e = i().mark(function e(a) {
                var t, r, n, o;
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((t = a.username),
                          (r = a.setOpenUserModal),
                          console.log("username: ", t),
                          t && !(0, O.rV)(t))
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (e.next = 5),
                          fetch("/api/pg/update-profile/", {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ username: t }),
                          })
                        );
                      case 5:
                        return (n = e.sent), (e.next = 8), n.json();
                      case 8:
                        if (((o = e.sent), n.ok)) {
                          e.next = 12;
                          break;
                        }
                        throw (
                          ((0, W.x)("Error updating username"),
                          new Error(o.message || "Something went wrong!"))
                        );
                      case 12:
                        r(!1),
                          (0, W.z)("Username updated!"),
                          setTimeout(function () {
                            return (0, O.dx)();
                          }, 250);
                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })),
              function () {
                var a = this,
                  t = arguments;
                return new Promise(function (r, i) {
                  var n = e.apply(a, t);
                  function o(e) {
                    V(n, r, i, o, s, "next", e);
                  }
                  function s(e) {
                    V(n, r, i, o, s, "throw", e);
                  }
                  o(void 0);
                });
              });
          return function (e) {
            return a.apply(this, arguments);
          };
        })(),
        X = function (e) {
          var a = e.user,
            t = e.size,
            r = e.editModalCallback,
            i = e.avatar,
            l = (0, o.useMemo)(
              function () {
                return a
                  ? (0, O.$i)(
                      (null === a || void 0 === a ? void 0 : a.name) || a
                    )
                  : "-";
              },
              [a]
            );
          return (0, n.jsxs)("div", {
            className:
              "group flex overflow-hidden relative shrink-0 items-center bg-uiBlue-500/60 rounded-full .p-[0.2rem]",
            children: [
              (0, n.jsx)("div", {
                className: "relative",
                style: { height: t, width: t },
                children: (0, n.jsx)(p.default, {
                  src: i
                    ? "https://mj-gallery.com/".concat(i, "/grid_0_128_N.webp")
                    : (null === a || void 0 === a ? void 0 : a.image)
                    ? null === a || void 0 === a
                      ? void 0
                      : a.image
                    : "/assets/images/avatars/".concat(l, ".png"),
                  layout: "fill",
                  objectFit: "cover",
                  unoptimized: !0,
                  className: "rounded-full",
                  alt: "Profile Picture",
                }),
              }),
              r &&
                (0, n.jsx)("button", {
                  onClick: function () {
                    return r(!0);
                  },
                  className:
                    "flex absolute inset-0 justify-center items-center w-full h-full text-slate-300 bg-slate-500/10 hover:bg-slate-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                  children: (0, n.jsx)(s.Z, { height: 16 }),
                }),
            ],
          });
        };
      function Y() {
        var e = (0, L.aC)().hasAccess,
          a = (0, o.useState)(!1),
          t = a[0],
          r = a[1];
        (0, o.useEffect)(function () {
          var e = sessionStorage.getItem("hasClosedHomeBanner");
          r("true" === e);
        }, []);
        var i = function () {
          r(!0), sessionStorage.setItem("hasClosedHomeBanner", "true");
        };
        return t || e
          ? (0, n.jsx)(n.Fragment, {})
          : (0, n.jsx)("div", {
              className:
                "fixed inset-4 top-auto bottom-5 z-50 mx-auto space-y-4 max-w-7xl lg:space-y-0 content",
              children: (0, n.jsx)("div", {
                className: "p-2 bg-blue-800 rounded-lg shadow-lg sm:p-3",
                children: (0, n.jsxs)("div", {
                  className:
                    "flex flex-wrap gap-3 justify-between items-center ",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "flex flex-1 justify-between items-start w-full xs:items-center md:justify-start md:w-0",
                      children: [
                        (0, n.jsx)("span", {
                          className:
                            "hidden p-2 bg-blue-900 rounded-lg md:flex",
                          children: (0, n.jsx)(l.Z, {
                            className: "w-6 h-6 text-white",
                            "aria-hidden": "true",
                          }),
                        }),
                        (0, n.jsxs)("p", {
                          className: "ml-3 text-lg text-white ",
                          children: [
                            (0, n.jsxs)("span", {
                              className: "md:hidden",
                              children: [
                                (0, n.jsx)(l.Z, {
                                  height: 18,
                                  className: "inline",
                                }),
                                "To generate jobs and access the full gallery, check out our plans.",
                              ],
                            }),
                            (0, n.jsx)("span", {
                              className: "hidden md:inline",
                              children:
                                "To generate jobs and access the full gallery, check out our plans.",
                            }),
                          ],
                        }),
                        (0, n.jsx)(w.Z, {
                          title: "Close",
                          className:
                            "flex justify-center items-center !p-3 w-auto text-sm font-bold hover:bg-darkBlue-500/50 md:hidden",
                          onClick: i,
                          children: (0, n.jsx)(j.x8, { height: "16" }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex gap-4 w-full md:w-auto",
                      children: [
                        (0, n.jsx)(g.default, {
                          href: "/account",
                          children: (0, n.jsxs)("a", {
                            href: "",
                            className:
                              "flex justify-center items-center py-2 px-4 w-full text-sm font-bold text-darkBlue-900 bg-blue-100 hover:bg-white active:bg-blue-200 rounded-md border border-transparent active:ring-1 ring-blue-50 shadow-lg active:shadow-inner md:w-auto",
                            children: [
                              "View plans ",
                              (0, n.jsx)(j.dL, {
                                height: "16",
                                className: "ml-2",
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)(w.Z, {
                          title: "Close",
                          className:
                            "hidden justify-center items-center !p-3 w-auto text-sm font-bold hover:bg-darkBlue-500/50 md:flex",
                          onClick: i,
                          children: (0, n.jsx)(j.x8, { height: "16" }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            });
      }
      var ee = function () {
          var e,
            a,
            t,
            r,
            i,
            l = (0, y.u)(T.d),
            p = (l.FileAttachmentLink, l.useListOfJobs),
            x = (0, y.u)(F.V),
            S = x.setModalState,
            P = x.query,
            A = x.setQueryVal,
            I = x.setTempQuery,
            B = x.setFormatFilter,
            q = x.fullWidth,
            D = x.setRankings,
            M = (0, L.aC)(),
            E = M.hasAccess,
            W = M.hasPrivate,
            V = M.userInfo,
            G = M.userData,
            K = M.session,
            ee = (0, o.useState)(!1),
            te = (ee[0], ee[1], (0, f.useRouter)()),
            re = (0, o.useState)(!1),
            ie = re[0],
            ne = re[1],
            oe = (0, o.useState)(null === V || void 0 === V ? void 0 : V.name),
            se = oe[0],
            le = oe[1],
            ce = (0, o.useState)(!1),
            ue = ce[0],
            de = ce[1],
            me = (0, b.useMediaQuery)({ maxWidth: 768 }),
            he = (0, o.useState)(!0),
            pe = he[0],
            ge = he[1],
            fe =
              null === G ||
              void 0 === G ||
              null === (e = G.private) ||
              void 0 === e
                ? void 0
                : e.filters,
            be = p({
              defaultSort: "new",
              initialSettings: {
                jobStatus: "completed",
                userId: (null === V || void 0 === V ? void 0 : V.id) || 1,
                user_id_ranked_score:
                  null === fe || void 0 === fe
                    ? void 0
                    : fe.user_id_ranked_score,
                orderBy:
                  (null === (a = te.query) || void 0 === a ? void 0 : a.sort) ||
                  (null === fe || void 0 === fe ? void 0 : fe.orderBy) ||
                  "new",
              },
            });
          (0, o.useEffect)(function () {
            var e, a, t;
            (null === (e = te.query) ||
            void 0 === e ||
            null === (a = e.search) ||
            void 0 === a
              ? void 0
              : a.length) > 0 &&
              (be.settings.prompt =
                (null === (t = te.query) || void 0 === t ? void 0 : t.search) ||
                null);
            return (
              B((null === fe || void 0 === fe ? void 0 : fe.jobType) || "all"),
              D({
                value:
                  (null === fe || void 0 === fe
                    ? void 0
                    : fe.user_id_ranked_score) || null,
              }),
              setTimeout(function () {
                return be.firstLoad();
              }, 1),
              function () {
                B("upscales"), D({ value: null }), A(""), I("");
              }
            );
          }, []),
            (0, o.useEffect)(
              function () {
                be.jobsList.length > 0 &&
                  S(function (e) {
                    return Q({}, e, {
                      jobDataArray: be.jobsList,
                      jobDataArrayCache: be.jobsList,
                    });
                  });
              },
              [be.jobsList, S]
            ),
            (0, o.useEffect)(
              function () {
                be.isFirstRun ||
                  (be.settings.prompt === P && !!be.settings.prompt === !!P) ||
                  (P && (be.settings.prompt = P), be.search());
              },
              [be.isFirstRun, be.settings.prompt, P]
            );
          var ye = (0, o.useMemo)(
              function () {
                return [
                  me && {
                    title: "View archive",
                    link: J.jk.archive,
                    icon: (0, n.jsx)(c.Z, { height: 18 }),
                  },
                  {
                    title: "View as visitor",
                    link: ""
                      .concat(J.jk.users, "/")
                      .concat(null === V || void 0 === V ? void 0 : V.id),
                    icon: (0, n.jsx)(u.Z, { height: 18 }),
                  },
                  {
                    title: "Edit filters",
                    onClick: function () {
                      return de(!0);
                    },
                    icon: (0, n.jsx)(d.Z, { height: 18 }),
                  },
                ].filter(Boolean);
              },
              [me, null === V || void 0 === V ? void 0 : V.id]
            ),
            ve = (0, o.useMemo)(
              function () {
                return (0, n.jsxs)(n.Fragment, {
                  children: [
                    !me &&
                      (0, n.jsxs)(
                        k.Z,
                        {
                          href: J.jk.archive,
                          className: (0, O.CN)(
                            "group min-w-max max-w-max !font-bold !px-6 text-darkBlue-500 rounded-full .border-2 bg-slate-300 hover:!bg-slate-200 flex gap-2 items-center justify-center !bg-opacity-100\n          ",
                            E ? "" : "opacity-50 pointer-events-none"
                          ),
                          children: [
                            (0, n.jsx)(c.Z, { height: 18 }),
                            " Archive",
                          ],
                        },
                        "followButton"
                      ),
                    (0, n.jsx)(z.Z, {
                      optionArray: ye,
                      maxWidth: "!w-max",
                      placement: "top-end",
                      className: "h-full",
                      offset: [0, 10],
                      transformOrigin: "top-right",
                      buttonHoverStyle: "!rounded-full",
                      children: (0, n.jsx)(
                        w.Z,
                        {
                          className: (0, O.CN)(
                            "group aspect-square md:text-darkBlue-500 rounded-full .border-2 bg-slate-100/5  md:bg-slate-300 md:hover:!bg-slate-200 flex gap-2 items-center justify-center !bg-opacity-100"
                          ),
                          children: (0, n.jsx)(m.Z, { height: me ? 18 : 24 }),
                        },
                        "options"
                      ),
                    }),
                  ],
                });
              },
              [ye, E, me]
            ),
            we = (0, o.useMemo)(function () {
              return (0,
              n.jsx)(n.Fragment, { children: (0, n.jsxs)(k.Z, { href: J.jk.account, className: (0, O.CN)("group min-w-max max-w-max !font-base !px-6 text-white rounded-full .border-2 bg-emerald-700 hoverUpSmall hover:!bg-emerald-800 flex gap-2 items-center justify-center !bg-opacity-100\n          "), children: ["Purchase Plan ", (0, n.jsx)(j.dL, { height: "16", className: "" })] }, "PlanButton") });
            }, []),
            ke = {
              session: K,
              openUserModal: ie,
              setOpenUserModal: ne,
              customUsername: se,
              setCustomUsername: le,
              customButtons: ve,
              fixedData: be,
              username: null === V || void 0 === V ? void 0 : V.name,
              bannerUrl: "https://mj-gallery.com/".concat(
                (null === V || void 0 === V ? void 0 : V.cover_job_id) ||
                  (null === (t = be.jobsList) ||
                  void 0 === t ||
                  null === (r = t[0]) ||
                  void 0 === r
                    ? void 0
                    : r.id),
                "/grid_0.webp"
              ),
            };
          return (0, n.jsxs)(U.o, {
            fullWidth: q,
            className: O.VU,
            title: (null === V || void 0 === V ? void 0 : V.name) || "User",
            icon: (0, n.jsx)(X, {
              user: V,
              avatar: null === V || void 0 === V ? void 0 : V.avatar_job_id,
              size: 32,
            }),
            meta: (0, n.jsx)(H.h, {
              title: "Your Profile",
              description:
                "View your images in the Midjourney public channels and DMs",
            }),
            children: [
              (0, n.jsx)(Y, {}),
              (0, n.jsxs)(
                ae,
                Q({}, ke, {
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex gap-4 justify-start items-center w-full",
                      children: [
                        (0, n.jsx)(X, {
                          user: V,
                          size: me ? 56 : 72,
                          avatar:
                            null === V || void 0 === V
                              ? void 0
                              : V.avatar_job_id,
                        }),
                        (0, n.jsxs)("div", {
                          className: "flex flex-col shrink gap-1 w-full",
                          children: [
                            ie
                              ? (0, n.jsx)("div", {
                                  className: "flex gap-2",
                                  children: (0, n.jsx)("input", {
                                    type: "text",
                                    autoCorrect: "off",
                                    spellCheck: "false",
                                    value: se,
                                    maxLength: 32,
                                    minLength: 2,
                                    onKeyDown: function (e) {
                                      "Enter" === e.key &&
                                        $({
                                          username:
                                            se ||
                                            (null === V || void 0 === V
                                              ? void 0
                                              : V.discord_name),
                                          setOpenUserModal: ne,
                                        }),
                                        "Escape" === e.key && ne(!1);
                                    },
                                    onChange: function (e) {
                                      le(e.target.value),
                                        (0, O.rV)(e.target.value)
                                          ? e.target.classList.remove(
                                              "!text-red-500"
                                            )
                                          : e.target.classList.add(
                                              "!text-red-500"
                                            );
                                    },
                                    className:
                                      "flex gap-2 items-center max-w-min h-8 text-2xl font-medium text-slate-200 underline decoration-slate-500 decoration-dotted decoration-2 underline-offset-[6px] !outline-none md:h-10 md:!text-4xl !ring-none",
                                    placeholder:
                                      (null === V || void 0 === V
                                        ? void 0
                                        : V.discord_name) || "User",
                                  }),
                                })
                              : (0, n.jsxs)("div", {
                                  className: "group flex gap-2",
                                  children: [
                                    (0, n.jsx)("h1", {
                                      className:
                                        "flex gap-2 items-center text-2xl font-medium leading-none text-slate-200 md:h-10 md:text-4xl",
                                      children:
                                        (null === V || void 0 === V
                                          ? void 0
                                          : V.name) || "User",
                                    }),
                                    (0, n.jsx)("button", {
                                      onClick: function () {
                                        return ne(!0);
                                      },
                                      className:
                                        "aspect-square hidden shrink-0 justify-center items-center p-2 w-9 h-9 text-slate-300 bg-slate-500/10 hover:bg-slate-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity md:flex",
                                      children: (0, n.jsx)(s.Z, { height: 18 }),
                                    }),
                                  ],
                                }),
                            ie
                              ? (0, n.jsxs)("div", {
                                  className:
                                    "hidden gap-2 self-start text-base md:flex",
                                  children: [
                                    (0, n.jsx)("button", {
                                      onClick: function () {
                                        return ne(!1);
                                      },
                                      className:
                                        "text-slate-400 hover:underline",
                                      children: "Cancel",
                                    }),
                                    se !==
                                    (null === V || void 0 === V
                                      ? void 0
                                      : V.name)
                                      ? (0, n.jsx)("button", {
                                          onClick: function () {
                                            $({
                                              username:
                                                se ||
                                                (null === V || void 0 === V
                                                  ? void 0
                                                  : V.discord_name),
                                              setOpenUserModal: ne,
                                            }),
                                              le(
                                                se ||
                                                  (null === V || void 0 === V
                                                    ? void 0
                                                    : V.discord_name)
                                              );
                                          },
                                          className:
                                            "text-slate-300 hover:underline",
                                          children: "Save",
                                        })
                                      : se !==
                                          (null === V || void 0 === V
                                            ? void 0
                                            : V.discord_name) &&
                                        (0, n.jsx)("button", {
                                          onClick: function () {
                                            $({
                                              username:
                                                null === V || void 0 === V
                                                  ? void 0
                                                  : V.discord_name,
                                              setOpenUserModal: ne,
                                            }),
                                              le(
                                                null === V || void 0 === V
                                                  ? void 0
                                                  : V.discord_name
                                              );
                                          },
                                          className:
                                            "text-slate-300 hover:underline",
                                          children: "Clear",
                                        }),
                                  ],
                                })
                              : (0, n.jsx)("p", {
                                  className:
                                    "hidden text-base font-medium text-slate-300 md:flex",
                                  children: (0, n.jsx)(Z, {
                                    session_user: !0,
                                    id:
                                      null === K || void 0 === K
                                        ? void 0
                                        : K.user.id,
                                  }),
                                }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "flex shrink gap-2 justify-end w-full",
                      children: E ? ve : we,
                    }),
                  ],
                })
              ),
              E &&
                (0, n.jsxs)("div", {
                  className:
                    "flex relative flex-col gap-4 md:px-4 mt-4 md:mt-2 mb-6 w-full xl:my-6",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "flex justify-between px-2 -mb-3 w-full text-base",
                      children: [
                        (0, n.jsx)("p", {
                          className: "font-medium text-slate-400",
                        }),
                        pe &&
                          (0, n.jsx)(g.default, {
                            href: "/app/collections",
                            children: (0, n.jsxs)("a", {
                              href: "",
                              className: "text-slate-500 hover:text-slate-300",
                              children: [
                                "View all collections",
                                " ",
                                (0, n.jsx)(h.Z, {
                                  height: 18,
                                  className: "inline -rotate-45",
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                    (0, n.jsx)(v.Z, {
                      userId: null === V || void 0 === V ? void 0 : V.id,
                      home: !0,
                      className:
                        "overflow-x-scroll gap-4 py-2 w-full miniScrollbar",
                      buttonClassName: "md:basis-1 max-w-[50%] md:max-w-[33%]",
                      showAddButton: !0,
                      maxItems: 4,
                      hideCallback: function () {
                        return ge(!1);
                      },
                    }),
                  ],
                }),
              (0, n.jsx)(R, { open: ue, setOpen: de, fixedData: be }),
              (0, n.jsx)(C.x, { fixedData: be, params: { showPrivate: W } }),
              (0, n.jsx)(_.H, {
                query:
                  null === (i = te.query) || void 0 === i ? void 0 : i.jobId,
                returnHref: "/app/",
              }),
              (0, n.jsx)(
                N.Z,
                {
                  fixedData: be,
                  settings: {
                    dedupe: !1,
                    emptyMessage: (0, n.jsx)(n.Fragment, {
                      children: (0, n.jsxs)("h3", {
                        className:
                          "mt-12 h-full text-xl text-center text-white",
                        children: [
                          (0, n.jsx)("span", {
                            className: "inline-flex gap-1 items-center",
                            children:
                              "When you generate an image, it will appear here.",
                          }),
                          " ",
                          (0, n.jsx)("br", {}),
                          " ",
                          (0, n.jsx)("br", {}),
                          (0, n.jsx)(g.default, {
                            href: "https://discord.gg/midjourney",
                            shallow: !0,
                            children: (0, n.jsxs)("a", {
                              className:
                                "text-xl text-blue-400 hover:text-slate-100 underline underline-offset-4",
                              children: [
                                "Join the Discord to start creating!",
                                (0, n.jsx)(h.Z, {
                                  height: 24,
                                  color: "",
                                  className: "inline ml-1 -rotate-45",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  },
                },
                "home"
              ),
            ],
          });
        },
        ae = function (e) {
          var a = e.bannerUrl,
            t = K(e, ["bannerUrl"]),
            r = (0, o.useState)(!1),
            i = r[0],
            s = r[1];
          return (
            (0, o.useEffect)(
              function () {
                i && s(!1);
              },
              [a]
            ),
            (0, n.jsx)("div", {
              className: "flex flex-col -mt-28 mb-6 w-full md:mt-0 md:mb-12",
              children: (0, n.jsxs)("div", {
                className:
                  " md:p-6 md:pb-12 gap-2 flex flex-col justify-end items-end relative grow shrink-0 text-white h-72 md:h-96",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "flex gap-4 justify-between justify-self-start items-center mt-auto w-full",
                    children: t.children,
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "overflow-hidden !absolute inset-0 -inset-x-4 -z-10 max-w-[100vw] pointer-events-none md:inset-x-0 md:rounded-t-3xl 2xl:-inset-x-8",
                    children: [
                      i
                        ? (0, n.jsx)(x.ZP, {
                            username: t.username || "User",
                            size: 3e3,
                            className:
                              "absolute w-auto h-auto opacity-50 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0 transition-all centerAbs",
                          })
                        : (0, n.jsx)(p.default, {
                            layout: "fill",
                            className:
                              " bg-blue-900/10 md:rounded-3xl transition-all pointer-events-none select-none",
                            alt: "",
                            unoptimized: !0,
                            priority: !0,
                            objectFit: "cover",
                            src: a,
                            onError: function () {
                              return s(!0);
                            },
                          }),
                      (0, n.jsx)("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-t from-darkBlue-900 pointer-events-none select-none md:via-darkBlue-900/20",
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        te = function (e) {
          var a = e.customButtons,
            t = e.user,
            r = e.avatar,
            i = e.username,
            o = e.tagline,
            s = (0, b.useMediaQuery)({ maxWidth: 768 });
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className: "flex gap-4 justify-start items-center w-full",
                children: [
                  (0, n.jsx)(X, { user: t, size: s ? 56 : 72, avatar: r }),
                  (0, n.jsxs)("div", {
                    className: "flex flex-col shrink gap-1 w-full",
                    children: [
                      (0, n.jsx)("div", {
                        className: "group flex gap-2",
                        children: (0, n.jsx)("h1", {
                          className:
                            "flex gap-2 items-center text-2xl font-medium leading-none text-slate-200 md:h-10 md:text-4xl",
                          children: i || "User",
                        }),
                      }),
                      (0, n.jsx)("p", {
                        className:
                          "hidden text-base font-medium text-slate-300 md:flex",
                        children: o,
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "flex shrink gap-2 justify-end w-full",
                children: a,
              }),
            ],
          });
        };
    },
    50402: function (e, a, t) {
      function r(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, r = new Array(a); t < a; t++) r[t] = e[t];
        return r;
      }
      function i(e, a) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, a) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                i,
                n = [],
                o = !0,
                s = !1;
              try {
                for (
                  t = t.call(e);
                  !(o = (r = t.next()).done) &&
                  (n.push(r.value), !a || n.length !== a);
                  o = !0
                );
              } catch (l) {
                (s = !0), (i = l);
              } finally {
                try {
                  o || null == t.return || t.return();
                } finally {
                  if (s) throw i;
                }
              }
              return n;
            }
          })(e, a) ||
          (function (e, a) {
            if (!e) return;
            if ("string" === typeof e) return r(e, a);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return r(e, a);
          })(e, a) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      t.d(a, {
        ZP: function () {
          return s;
        },
        qs: function () {
          return l;
        },
      });
      var n = function (e) {
          return e.startsWith("/") ? e.slice(1) : e;
        },
        o = function (e) {
          var a = [],
            t = n(e).split("/");
          a.push(t[0]);
          var r = t[t.length - 1].split(".")[0];
          return a.push(r), a;
        };
      function s(e) {
        var a = e.src,
          t = e.width,
          r = e.quality,
          i = ["width=".concat(t), "format=webp"];
        r && i.push("quality=".concat(r));
        var o = i.join(",");
        return ""
          .concat("https://cdn.midjourney.com", "/cdn-cgi/image/")
          .concat(o, "/")
          .concat(n(a));
      }
      function l(e) {
        var a = e.src,
          t = e.width,
          r =
            (e.quality,
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3e3),
          n = [128, 384, 640, 1024, 1600].reduce(function (e, a) {
            return Math.abs(a - t) < Math.abs(e - t) ? a : e;
          }, 128),
          s = i(o(a), 2),
          l = s[0],
          c = s[1];
        return r && n >= r
          ? ""
              .concat("https://cdn.midjourney.com", "/")
              .concat(l, "/")
              .concat(c, ".webp")
          : ((n = n > 1600 ? null : "_".concat(n)),
            ""
              .concat("https://cdn.midjourney.com", "/")
              .concat(l, "/")
              .concat(c)
              .concat(n, "_N.webp"));
      }
    },
    27226: function (e, a, t) {
      t.d(a, {
        x: function () {
          return s;
        },
        z: function () {
          return l;
        },
      });
      var r = t(85893),
        i = t(19965),
        n = t(68715),
        o = t(74931);
      function s(e) {
        o.ZP.error(e, {
          position: "top-right",
          duration: 1e4,
          style: {
            background: "#1d2036",
            minWidth: "225px",
            fontSize: "0.8rem",
            color: "white",
            fontFamily: '"DM Sans", sans-serif',
            padding: "0.8rem 1rem",
          },
          icon: (0, r.jsx)(i.Z, {
            height: 24,
            className: " shrink-0 text-red-500",
          }),
        });
      }
      function l(e) {
        o.ZP.success(e, {
          position: "top-right",
          duration: 1e4,
          style: {
            background: "#1d2036",
            minWidth: "225px",
            fontSize: "0.8rem",
            color: "white",
            fontFamily: '"DM Sans", sans-serif',
            padding: "0.8rem 1rem",
          },
          icon: (0, r.jsx)(n.Z, {
            height: 24,
            className: " shrink-0 text-emerald-500",
          }),
        });
      }
    },
  },
]);