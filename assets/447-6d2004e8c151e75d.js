"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [447],
  {
    93432: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Z;
        },
      });
      var r = n(85893),
        a = n(67294),
        s = n(10197),
        o = n(36659),
        l = n(38264),
        i = n(61782),
        c = n(88305),
        u = n(24697),
        d = n(36090),
        f = n(12197),
        m = n(95862),
        p = n(3202),
        x = n(45332),
        h = n(34051),
        y = n.n(h);
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function g(e, t, n, r, a, s, o) {
        try {
          var l = e[s](o),
            i = l.value;
        } catch (c) {
          return void n(c);
        }
        l.done ? t(i) : Promise.resolve(i).then(r, a);
      }
      function b(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var s = e.apply(t, n);
            function o(e) {
              g(s, r, a, o, l, "next", e);
            }
            function l(e) {
              g(s, r, a, o, l, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function j(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                s = [],
                o = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (s.push(r.value), !t || s.length !== t);
                  o = !0
                );
              } catch (i) {
                (l = !0), (a = i);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (l) throw a;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return v(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return v(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function w(e, t) {
        var n = [],
          r = !0,
          a = !1,
          s = void 0;
        try {
          for (
            var o, l = e.entries()[Symbol.iterator]();
            !(r = (o = l.next()).done);
            r = !0
          ) {
            var i = j(o.value, 2),
              c = i[0],
              u = i[1];
            "rejected" !== t[c].status &&
              n.push({ input: t[c].value, name: u.name });
          }
        } catch (d) {
          (a = !0), (s = d);
        } finally {
          try {
            r || null == l.return || l.return();
          } finally {
            if (a) throw s;
          }
        }
        return n;
      }
      function k(e, t, n) {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = b(
          y().mark(function e(t, r, a) {
            var s, o, l, i, c, u, d, f, m, p, h, v;
            return y().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), n.e(8256).then(n.bind(n, 48256));
                    case 2:
                      return (
                        (s = e.sent.downloadZip),
                        a({
                          type: "updateSelection",
                          payload: {
                            edits: [
                              { key: "state", value: "downloading" },
                              { key: "progress", value: 0 },
                            ],
                            index: t,
                          },
                        }),
                        (e.prev = 4),
                        (i = []),
                        r.jobs.forEach(function (e) {
                          i.push({
                            name: "".concat(
                              (0, x.gI)(
                                "".concat(e.username, "_").concat(e.prompt),
                                e.id
                              ),
                              ".png"
                            ),
                            url: ""
                              .concat("https://cdn.midjourney.com", "/")
                              .concat(e.id, "/grid_0.png"),
                          });
                        }),
                        (c = i.map(function (e) {
                          return fetch(e.url).then(function (e) {
                            return (
                              e.ok &&
                                a({
                                  type: "updateSelection",
                                  payload: {
                                    edits: [
                                      {
                                        key: "progress",
                                        value: r.progress + 1,
                                      },
                                    ],
                                    index: t,
                                  },
                                }),
                              e
                            );
                          });
                        })),
                        (e.next = 11),
                        Promise.allSettled(c)
                      );
                    case 11:
                      return (
                        (u = e.sent), (d = w(i, u)), (e.next = 15), s(d).blob()
                      );
                    case 15:
                      return (
                        (f = e.sent),
                        ((m = document.createElement("a")).href =
                          URL.createObjectURL(f)),
                        (p = ""),
                        (h = new Date()),
                        (p = r.date
                          ? "archive_"
                              .concat(r.date.y, "-")
                              .concat(r.date.m, "-")
                              .concat(r.date.d)
                          : "selection_"
                              .concat(h.getFullYear(), "-")
                              .concat(h.getMonth() + 1, "-")
                              .concat(h.getDate(), "_")
                              .concat(h.getHours())
                              .concat(h.getMinutes())
                              .concat(h.getSeconds())),
                        (v = r.range
                          ? ""
                              .concat(
                                (null === (o = r.range) || void 0 === o
                                  ? void 0
                                  : o[0]) || 1,
                                "-"
                              )
                              .concat(
                                (null === (l = r.range) || void 0 === l
                                  ? void 0
                                  : l[1]) || r.total
                              )
                          : "".concat(r.total)),
                        (m.download = "midjourney_"
                          .concat(p, "_[")
                          .concat(v, "].zip")),
                        a({
                          type: "updateSelection",
                          payload: {
                            edits: [
                              { key: "state", value: "complete" },
                              { key: "downloadLink", value: m },
                            ],
                            index: t,
                          },
                        }),
                        e.abrupt("return", { status: "success", link: m })
                      );
                    case 27:
                      return (
                        (e.prev = 27),
                        (e.t0 = e.catch(4)),
                        console.log(e.t0.stack),
                        a({
                          type: "updateSelection",
                          payload: {
                            edits: [{ key: "state", value: "error" }],
                            index: t,
                          },
                        }),
                        e.abrupt("return", { status: "error" })
                      );
                    case 32:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[4, 27]]
            );
          })
        )).apply(this, arguments);
      }
      function B() {
        return (B = b(
          y().mark(function e(t, n) {
            var r, a, s;
            return y().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    console.log("ping"), (r = 0);
                  case 2:
                    if (!(r < t.selections.length)) {
                      e.next = 11;
                      break;
                    }
                    return (
                      (a = new Promise(function (e) {
                        k(r, t.selections[r], n).then(function (t) {
                          e(t);
                        });
                      })),
                      (e.next = 6),
                      a
                    );
                  case 6:
                    (s = e.sent).link && s.link.click();
                  case 8:
                    r++, (e.next = 2);
                    break;
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var S = n(30658),
        C = function (e) {
          var t,
            n,
            l = e.selection,
            i = e.selectionsDispatch,
            c = e.index,
            d = e.busy,
            m = (0, a.useState)(0),
            p = m[0],
            h = m[1],
            y = (0, a.useRef)();
          (0, a.useEffect)(
            function () {
              "downloading" === l.state
                ? (y.current = setTimeout(function () {
                    h(p + 1);
                  }, 1e3))
                : clearTimeout(y.current);
            },
            [l.state, p]
          );
          var v = (0, u.zl)(
            function () {
              return Math.max(Math.ceil(l.total * (p / l.progress)) - p, 0);
            },
            1e3,
            { leading: !0 }
          );
          return (0, r.jsxs)("div", {
            className:
              "group flex flex-col gap-1 justify-between items-start p-4 py-3 w-full bg-blue-900/10 rounded-lg border border-blue-900",
            children: [
              (0, r.jsxs)("div", {
                className: "grid grid-cols-2 w-full",
                children: [
                  (0, r.jsx)("h3", {
                    className:
                      "flex justify-start text-base font-normal text-slate-200",
                    children: l.title,
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex gap-4 justify-self-end",
                    children: [
                      "downloading" !== l.state &&
                        (0, r.jsx)("button", {
                          className:
                            "hidden group-hover:flex justify-center justify-self-end items-center max-w-min font-normal text-slate-500 hover:text-white hover:text-red-800 hover:underline rounded",
                          onClick: function () {
                            return i({ type: "removeByIndex", payload: c });
                          },
                          children: "Clear",
                        }),
                      "downloading" === l.state
                        ? (0, r.jsxs)("div", {
                            className:
                              "flex gap-2 justify-end justify-self-end text-slate-100",
                            children: [
                              l.progress === l.total
                                ? "Zipping..."
                                : "Downloading...",
                              (0, r.jsx)(f.gb, {
                                color: "",
                                height: "20",
                                className:
                                  "justify-self-end text-white animate-spin",
                              }),
                            ],
                          })
                        : (0, r.jsx)("button", {
                            title: l.downloadLink
                              ? "Download"
                              : d
                              ? "Busy"
                              : "Prepare",
                            className: (0, x.CN)(
                              "flex gap-1 cursor-pointer justify-end justify-self-end items-center font-medium  ",
                              l.downloadLink
                                ? "text-emerald-500"
                                : "text-blue-400",
                              d && !l.downloadLink
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:underline active:opacity-80"
                            ),
                            disabled: d && !l.downloadLink,
                            onClick: function () {
                              var e;
                              l.downloadLink
                                ? null === (e = l.downloadLink) ||
                                  void 0 === e ||
                                  e.click()
                                : d || k(c, l, i);
                            },
                            children: l.downloadLink
                              ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsx)(s.Z, { height: 18 }),
                                    " Save Zip",
                                  ],
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    " ",
                                    (0, r.jsx)(o.Z, { height: 18 }),
                                    " Prepare Zip",
                                  ],
                                }),
                          }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "grid grid-cols-3 w-full",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "w-full text-sm font-medium text-left text-slate-500 ",
                    children: [
                      (0, r.jsx)("span", {
                        className: " text-slate-400",
                        children: "Jobs:",
                      }),
                      " ",
                      (0, r.jsx)("span", {
                        className: "",
                        children: l.range
                          ? ""
                              .concat(
                                (null === (t = l.range) || void 0 === t
                                  ? void 0
                                  : t[0]) || 0,
                                " to\n            "
                              )
                              .concat(
                                (null === (n = l.range) || void 0 === n
                                  ? void 0
                                  : n[1]) || l.total
                              )
                          : l.total,
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "w-full text-sm font-medium text-left text-slate-500 ",
                    children: [
                      (0, r.jsx)("span", {
                        className: " text-slate-400",
                        children: "Est. Left:",
                      }),
                      " ",
                      (0, r.jsx)("span", {
                        className: "",
                        children: p
                          ? "".concat((0, x.bs)(v() || 0), "s")
                          : "N/A",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "w-full text-sm font-medium text-right text-slate-500 ",
                    children: [
                      (0, r.jsx)("span", {
                        className: " text-slate-400",
                        children: "Resolved:",
                      }),
                      " ",
                      (0, r.jsxs)("span", {
                        className: "",
                        children: [l.progress || 0, "/", l.total],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function Z(e) {
        var t = e.setOpen,
          n = e.open,
          s = (0, c.u)(p.Z),
          o = s.selections,
          u = s.selectionsDispatch,
          f = s.batchSize;
        (0, a.useEffect)(
          function () {
            n && u({ type: "createSelectionBatches" });
          },
          [n, u]
        );
        var x = {
          open: n,
          setOpen: t,
          title: "Download Jobs",
          type: "standard",
          containerStyle:
            "md:max-h-[60vh] !pt-0 !px-0 overflow-y-overlay miniScrollbar overflow-x-show",
          showClose: !0,
          ActionButton: function () {
            return (0, r.jsx)(d.Z, {
              title: "Coming soon",
              className:
                "inline-flex justify-center py-2 px-4 w-full min-h-[3rem] text-base font-medium text-white disabled:text-gray-900 bg-emerald-600 hover:bg-emerald-800 disabled:!bg-gray-600 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-sm disabled:cursor-not-allowed sm:text-base",
              onClick: function () {
                return (function (e, t) {
                  return B.apply(this, arguments);
                })(o, u);
              },
              children: "Download All",
            });
          },
          BackButton: function () {
            return (0, r.jsx)(d.Z, {
              disabled: o.busy,
              onClick: function () {
                o.busy || (t(!1), u({ type: "clear" }));
              },
              children: "Clear All",
            });
          },
        };
        (0, a.useEffect)(
          function () {
            n && 0 === o.total && t(!1);
          },
          [n, o.total, t]
        );
        var h = (0, a.useMemo)(function () {
          return [20, 50, 100, 250, 500, 1e3].map(function (e) {
            return {
              title: e.toString(),
              value: e,
              onClick: function () {
                return f.set(e);
              },
            };
          });
        }, []);
        return (0, r.jsx)(S.Z, {
          modalBaseProps: x,
          children: (0, r.jsxs)("div", {
            className: "flex flex-col gap-4 ",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "flex justify-between items-center p-4 bg-darkBlue-500/50 sm:px-6",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex flex-col justify-start items-start",
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-base text-left text-slate-200",
                        children: "Batch Size",
                      }),
                      (0, r.jsxs)("p", {
                        className: "text-sm text-left text-slate-500",
                        children: [
                          (0, r.jsx)(l.Z, {
                            height: "14",
                            className: "inline",
                          }),
                          " Use smaller batches on slower devices or internet.",
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(m.Z, {
                    optionArray: h,
                    selected: f.get,
                    itemsClassName: "w-24",
                    placement: "bottom-end",
                    offset: [0, 0],
                    children: (0, r.jsxs)(d.Z, {
                      title: "Open Batch Size Options",
                      className:
                        "capitalize hover:bg-darkBlue-700 pl-4 text-slate-100 !justify-between text-right",
                      children: [
                        (0, r.jsx)("span", {
                          className: "flex items-center",
                          children: f.get,
                        }),
                        (0, r.jsx)(i.Z, { height: "18", className: "ml-3" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "flex flex-col gap-2 !py-2 px-4 sm:p-6",
                children: o.selections.map(function (e, t) {
                  var n;
                  return (
                    e.total > 0 &&
                    (0, r.jsx)(
                      C,
                      {
                        selection: e,
                        index: t,
                        selectionsDispatch: u,
                        busy: o.busy,
                      },
                      ""
                        .concat(e.title, "-")
                        .concat(
                          null === (n = e.range) || void 0 === n ? void 0 : n[1]
                        )
                    )
                  );
                }),
              }),
            ],
          }),
        });
      }
    },
    30658: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var r = n(85893),
        a = n(67294),
        s = n(11355),
        o = n(59506),
        l = n(68715),
        i = n(19965),
        c = n(13902),
        u = n(5506),
        d = n(36090);
      function f(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++)
              (n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (r = 0; r < s.length; r++)
            (n = s[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var m = function (e) {
        var t = e.BackButton,
          n = e.ActionButton,
          a = e.stackButtons;
        return (0, r.jsxs)("div", {
          className:
            "flex flex-col-reverse xs:flex-row flex-wrap gap-4 ".concat(
              !a && "xs:flex-nowrap"
            ),
          children: [
            "object" === typeof t
              ? (0, r.jsx)("button", {
                  className: "btn btn-primary ".concat(t.className),
                  type: "button",
                  children: t.label,
                })
              : t && (0, r.jsx)(t, {}),
            "object" === typeof n
              ? (0, r.jsx)("button", {
                  className: "btn btn-primary ".concat(n.className),
                  type: "button",
                  children: n.label,
                })
              : n && (0, r.jsx)(n, {}),
          ],
        });
      };
      function p(e) {
        var t = e.modalBaseProps.showButtons,
          n = void 0 === t || t,
          p = e.children,
          x = f(e.modalBaseProps, ["showButtons"]),
          h = (0, a.useMemo)(
            function () {
              switch (x.type) {
                case "success":
                  return {
                    border: "border-green-900/40",
                    Icon: (0, r.jsx)(l.Z, {
                      height: 28,
                      className: "text-green-700 $",
                    }),
                  };
                case "error":
                  return {
                    border: "border-red-900/50",
                    Icon: (0, r.jsx)(i.Z, {
                      height: 28,
                      className: "text-red-700",
                    }),
                  };
                case "warning":
                  return {
                    border: "border-darkBlue-500/50",
                    Icon: (0, r.jsx)(c.Z, {
                      height: 28,
                      className: "text-yellow-600",
                    }),
                  };
                default:
                  return { border: "border-darkBlue-500/50", Icon: x.Icon };
              }
            },
            [x.type]
          );
        return (0, r.jsx)(s.u.Root, {
          show: x.open,
          appear: !0,
          as: a.Fragment,
          children: (0, r.jsx)(o.V, {
            as: "div",
            className: "overflow-y-auto overscroll-none fixed inset-0 z-[499]",
            onClose: function () {
              x.closeCallback ? x.closeCallback() : x.setOpen(!1);
            },
            children: (0, r.jsxs)("div", {
              className:
                "flex overflow-auto justify-center items-end pt-4 min-h-screen text-center sm:block sm:p-0 md:px-4 md:pb-20",
              children: [
                (0, r.jsx)(s.u.Child, {
                  as: a.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, r.jsx)(o.V.Overlay, {
                    className:
                      "overflow-auto fixed inset-0 bg-darkBlue-700 !bg-opacity-95 transition-opacity cursor-pointer md:bg-darkBlue-900",
                  }),
                }),
                (0, r.jsx)("span", {
                  className:
                    "hidden sm:inline-block sm:h-screen sm:align-middle",
                  "aria-hidden": "true",
                  children: "\u200b",
                }),
                (0, r.jsxs)(s.u.Child, {
                  enter: "ease-out duration-300",
                  enterFrom:
                    "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  enterTo: "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                  leaveTo:
                    "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  className:
                    "inline-block overflow-auto relative text-left align-bottom bg-darkBlue-500 rounded-t-xl md:rounded-2xl md:border-2 "
                      .concat(
                        h.border,
                        " shadow-xl transition-all sm:my-8 w-full sm:max-w-lg sm:align-middle "
                      )
                      .concat(x.maxHeight),
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "flex items-center p-6 py-5 bg-darkBlue-900/90",
                      children: [
                        (0, r.jsxs)(o.V.Title, {
                          as: "h3",
                          className:
                            "inline-flex gap-3 justify-start items-center w-full font-medium leading-6 text-left text-white text-md",
                          children: [h.Icon, " ", x.title],
                        }),
                        x.showClose &&
                          (0, r.jsx)("div", {
                            className: "relative w-6 h-6",
                            children: (0, r.jsx)(d.Z, {
                              className:
                                "absolute focus:text-slate-300 focus:ring-2 centerAbs w-10 h-10 text-slate-500 hover:!bg-transparent hover:text-slate-300",
                              onClick: function (e) {
                                e.stopPropagation(),
                                  e.preventDefault(),
                                  x.closeCallback
                                    ? x.closeCallback()
                                    : x.setOpen(!1);
                              },
                              children: (0, r.jsx)(u.Z, { height: 24 }),
                            }),
                          }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "shrink-0 py-6 px-4 bg-darkBlue-900/50 sm:p-6  ".concat(
                          x.containerStyle
                        ),
                      children: (0, r.jsx)("div", {
                        className: "text-center",
                        children: p,
                      }),
                    }),
                    (x.BackButton || x.ActionButton) &&
                      n &&
                      (0, r.jsx)("div", {
                        className:
                          "px-4 pb-4 bg-darkBlue-900/50 sm:p-6 sm:pt-2",
                        children: (0, r.jsx)(m, {
                          BackButton: x.BackButton,
                          ActionButton: x.ActionButton,
                          stackButtons: x.stackButtons,
                        }),
                      }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    60670: function (e, t, n) {
      var r = n(85893),
        a = n(41664);
      t.Z = function (e) {
        var t = e.href,
          n = e.className,
          s = e.children,
          o = e.target,
          l = void 0 === o ? "" : o,
          i = e.shallow,
          c = void 0 === i || i;
        return (0, r.jsx)(a.default, {
          href: t,
          shallow: c,
          children: (0, r.jsx)("a", {
            target: l,
            className:
              "hover:bg-uiBlue-600/80 active:bg-slate-800 active:ring-uiBlue-600\n       flex  justify-center items-center py-2 px-2 w-full text-base font-medium text-white   bg-opacity-80 rounded-md focus:outline-none active:ring-2   shadow-sm ".concat(
                n
              ),
            children: s,
          }),
        });
      };
    },
    13709: function (e, t, n) {
      var r = n(85893),
        a = n(67294),
        s = n(91483),
        o = n.n(s),
        l = n(53316),
        i = n.n(l);
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                s = [],
                o = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (s.push(r.value), !t || s.length !== t);
                  o = !0
                );
              } catch (i) {
                (l = !0), (a = i);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (l) throw a;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return c(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return c(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var d = new (o())({ saturation: 1 }),
        f = function (e) {
          return d.hex(e);
        },
        m = i()(function (e) {
          var t = e.substring(0, e.length / 2),
            n = e.substring(e.length / 2);
          return [f(t), f(n)];
        }),
        p = function (e) {
          var t = e.username,
            n = e.size,
            s = void 0 === n ? 256 : n,
            o = e.className,
            l = void 0 === o ? "" : o,
            i = (0, a.useMemo)(
              function () {
                return 0 !== (null === t || void 0 === t ? void 0 : t.length)
                  ? t
                  : "placeholder";
              },
              [t]
            ),
            c = u(m(i), 2),
            d = c[0],
            f = c[1];
          return (0, r.jsxs)("svg", {
            width: s,
            height: s,
            viewBox: "0 0 ".concat(s, " ").concat(s),
            className: l || "",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("circle", {
                cx: s / 2,
                cy: s / 2,
                r: s / 2,
                fill: "url(#".concat(i, ")"),
              }),
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: i,
                  x1: "0",
                  y1: "0",
                  x2: s,
                  y2: s,
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: d }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: f }),
                  ],
                }),
              }),
            ],
          });
        },
        x = (0, a.memo)(p);
      t.ZP = x;
    },
  },
]);
