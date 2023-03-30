import {
  LiveReload,
  Outlet
} from "/build/_shared/chunk-XYPIKOIY.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// app/styles/index.css
var styles_default = "/build/_assets/index-ZJUSTWUN.css";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [
    { rel: "stylesheet", href: styles_default }
  ];
};
function Main() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "This will be the landing page" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "About the DJ Team (aka the jockeys)" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
export {
  Main as default,
  links
};
//# sourceMappingURL=/build/routes/_index-CPVVHSLR.js.map
