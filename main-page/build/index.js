var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toESM(require("react-dom/server")), import_react = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = import_server.default.renderToString(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.jsx",
      lineNumber: 11,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => Root
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Root() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Remix DJ" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Welcome to Remix DJ-THE devtool for RemixJS*" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "*This is going to be the permanent header" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Main
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Main() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "This will be the landing page" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/about.$name.tsx
var about_name_exports = {};
__export(about_name_exports, {
  default: () => Team,
  loader: () => loader
});
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function loader({ params }) {
  return console.log(params.name), params.name;
}
function Team() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: data }, void 0, !1, {
      fileName: "app/routes/about.$name.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
      fileName: "app/routes/about.$name.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.$name.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/about_.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "About Us" }, void 0, !1, {
      fileName: "app/routes/about_.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { children: "Adam" }, void 0, !1, {
      fileName: "app/routes/about_.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { children: "Matt" }, void 0, !1, {
      fileName: "app/routes/about_.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { children: "Molly" }, void 0, !1, {
      fileName: "app/routes/about_.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { children: "Tim" }, void 0, !1, {
      fileName: "app/routes/about_.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { children: "Victoria" }, void 0, !1, {
      fileName: "app/routes/about_.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
      fileName: "app/routes/about_.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
      fileName: "app/routes/about_.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about_.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/testimonial.tsx
var testimonial_exports = {};
__export(testimonial_exports, {
  default: () => Testimonial
});
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Testimonial() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "This is where testimonials will be" }, void 0, !1, {
      fileName: "app/routes/testimonial.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
      fileName: "app/routes/testimonial.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/testimonial.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/testimonial.feedback.tsx
var testimonial_feedback_exports = {};
__export(testimonial_feedback_exports, {
  default: () => Feedback
});
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Feedback() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: "This will be a form?" }, void 0, !1, {
    fileName: "app/routes/testimonial.feedback.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/testimonial.feedback.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/tutorial.tsx
var tutorial_exports = {};
__export(tutorial_exports, {
  default: () => Tutorial
});
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Tutorial() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "This is where the tutorial will be" }, void 0, !1, {
    fileName: "app/routes/tutorial.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/tutorial.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "1f3aaab3", entry: { module: "/build/entry.client-Q5SS26LR.js", imports: ["/build/_shared/chunk-XYPIKOIY.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XHVIYRHE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-MN3Q2WVD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about.$name": { id: "routes/about.$name", parentId: "root", path: "about/:name", index: void 0, caseSensitive: void 0, module: "/build/routes/about.$name-ULOBW63N.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about_": { id: "routes/about_", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about_-UNQWNLNL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/testimonial": { id: "routes/testimonial", parentId: "root", path: "testimonial", index: void 0, caseSensitive: void 0, module: "/build/routes/testimonial-7ZDPMU5Q.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/testimonial.feedback": { id: "routes/testimonial.feedback", parentId: "routes/testimonial", path: "feedback", index: void 0, caseSensitive: void 0, module: "/build/routes/testimonial.feedback-B4PUDDU2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tutorial": { id: "routes/tutorial", parentId: "root", path: "tutorial", index: void 0, caseSensitive: void 0, module: "/build/routes/tutorial-CKX2D4GY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-1F3AAAB3.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about.$name": {
    id: "routes/about.$name",
    parentId: "root",
    path: "about/:name",
    index: void 0,
    caseSensitive: void 0,
    module: about_name_exports
  },
  "routes/about_": {
    id: "routes/about_",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/testimonial": {
    id: "routes/testimonial",
    parentId: "root",
    path: "testimonial",
    index: void 0,
    caseSensitive: void 0,
    module: testimonial_exports
  },
  "routes/testimonial.feedback": {
    id: "routes/testimonial.feedback",
    parentId: "routes/testimonial",
    path: "feedback",
    index: void 0,
    caseSensitive: void 0,
    module: testimonial_feedback_exports
  },
  "routes/tutorial": {
    id: "routes/tutorial",
    parentId: "root",
    path: "tutorial",
    index: void 0,
    caseSensitive: void 0,
    module: tutorial_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
