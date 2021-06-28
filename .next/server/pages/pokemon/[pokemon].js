(function() {
var exports = {};
exports.id = "pages/pokemon/[pokemon]";
exports.ids = ["pages/pokemon/[pokemon]"];
exports.modules = {

/***/ "./pages/pokemon/[pokemon].js":
/*!************************************!*\
  !*** ./pages/pokemon/[pokemon].js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pokemon.module.css */ "./pages/pokemon/Pokemon.module.css");
/* harmony import */ var _Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\reaga\\Documents\\Education\\NextJS\\netlify-next-project\\pages\\pokemon\\[pokemon].js";



const Pokemon = ({
  pokemon
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Pokemon: ", pokemon === null || pokemon === void 0 ? void 0 : pokemon.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Hello Trainer!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["This is a page all about ", pokemon === null || pokemon === void 0 ? void 0 : pokemon.name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: pokemon === null || pokemon === void 0 ? void 0 : pokemon.sprites.front_default,
        alt: "Squirtle Front Sprite"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

async function getStaticPaths() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const pokemon = await res.json();
  let paths = pokemon.results.map(p => {
    return `/pokemon/${p.name}`;
  });
  return {
    paths,
    fallback: false
  }; // if you set fallback to true, it changes the component to SSR (on certain deploys)
}
async function getStaticProps({
  params
}) {
  // the property we want from params is the name of the file, so here "pokemon"
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
  const pokemon = await res.json();
  return {
    props: {
      pokemon
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Pokemon);

/***/ }),

/***/ "./pages/pokemon/Pokemon.module.css":
/*!******************************************!*\
  !*** ./pages/pokemon/Pokemon.module.css ***!
  \******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Pokemon_container__1sVYt"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon/[pokemon].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXRsaWZ5LW5leHQtcHJvamVjdC8uL3BhZ2VzL3Bva2Vtb24vW3Bva2Vtb25dLmpzIiwid2VicGFjazovL25ldGxpZnktbmV4dC1wcm9qZWN0Ly4vcGFnZXMvcG9rZW1vbi9Qb2tlbW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV0bGlmeS1uZXh0LXByb2plY3QvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXRsaWZ5LW5leHQtcHJvamVjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlBva2Vtb24iLCJwb2tlbW9uIiwibmFtZSIsImNsYXNzZXMiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwicGF0aHMiLCJyZXN1bHRzIiwibWFwIiwicCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBaUI7QUFDaEMsc0JBQ0M7QUFBQSw0QkFDQyw4REFBQyxrREFBRDtBQUFBLDhCQUNDO0FBQUEsZ0NBQWlCQSxPQUFqQixhQUFpQkEsT0FBakIsdUJBQWlCQSxPQUFPLENBQUVDLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQ0MsWUFBSSxFQUFDLFVBRE47QUFFQyxlQUFPLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQVFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJELGVBU0M7QUFBSyxlQUFTLEVBQUVDLHNFQUFoQjtBQUFBLDhCQUNDO0FBQUEsZ0RBQTZCRixPQUE3QixhQUE2QkEsT0FBN0IsdUJBQTZCQSxPQUFPLENBQUVDLElBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQ0MsV0FBRyxFQUFFRCxPQUFGLGFBQUVBLE9BQUYsdUJBQUVBLE9BQU8sQ0FBRUcsT0FBVCxDQUFpQkMsYUFEdkI7QUFFQyxXQUFHLEVBQUM7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURDtBQUFBLGtCQUREO0FBbUJBLENBcEJEOztBQXNCTyxlQUFlQyxjQUFmLEdBQWdDO0FBQ3RDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsNkNBQUQsQ0FBdkI7QUFDQSxRQUFNUCxPQUFPLEdBQUcsTUFBTU0sR0FBRyxDQUFDRSxJQUFKLEVBQXRCO0FBRUEsTUFBSUMsS0FBSyxHQUFHVCxPQUFPLENBQUNVLE9BQVIsQ0FBZ0JDLEdBQWhCLENBQXFCQyxDQUFELElBQU87QUFDdEMsV0FBUSxZQUFXQSxDQUFDLENBQUNYLElBQUssRUFBMUI7QUFDQSxHQUZXLENBQVo7QUFJQSxTQUFPO0FBQ05RLFNBRE07QUFFTkksWUFBUSxFQUFFO0FBRkosR0FBUCxDQVJzQyxDQWF0QztBQUNBO0FBRU0sZUFBZUMsY0FBZixDQUE4QjtBQUFFQztBQUFGLENBQTlCLEVBQTBDO0FBQ2hEO0FBQ0EsUUFBTVQsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDckIscUNBQW9DUSxNQUFNLENBQUNmLE9BQVEsRUFEOUIsQ0FBdkI7QUFHQSxRQUFNQSxPQUFPLEdBQUcsTUFBTU0sR0FBRyxDQUFDRSxJQUFKLEVBQXRCO0FBQ0EsU0FBTztBQUNOUSxTQUFLLEVBQUU7QUFDTmhCO0FBRE07QUFERCxHQUFQO0FBS0E7QUFFRCwrREFBZUQsT0FBZixFOzs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9wb2tlbW9uL1twb2tlbW9uXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUG9rZW1vbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBQb2tlbW9uID0gKHsgcG9rZW1vbiB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5Qb2tlbW9uOiB7cG9rZW1vbj8ubmFtZX08L3RpdGxlPlxyXG5cdFx0XHRcdDxtZXRhXHJcblx0XHRcdFx0XHRuYW1lPSd2aWV3cG9ydCdcclxuXHRcdFx0XHRcdGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8aDI+SGVsbG8gVHJhaW5lciE8L2gyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG5cdFx0XHRcdDxwPlRoaXMgaXMgYSBwYWdlIGFsbCBhYm91dCB7cG9rZW1vbj8ubmFtZX0gPC9wPlxyXG5cdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdHNyYz17cG9rZW1vbj8uc3ByaXRlcy5mcm9udF9kZWZhdWx0fVxyXG5cdFx0XHRcdFx0YWx0PSdTcXVpcnRsZSBGcm9udCBTcHJpdGUnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTE1MVwiKTtcclxuXHRjb25zdCBwb2tlbW9uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcblx0bGV0IHBhdGhzID0gcG9rZW1vbi5yZXN1bHRzLm1hcCgocCkgPT4ge1xyXG5cdFx0cmV0dXJuIGAvcG9rZW1vbi8ke3AubmFtZX1gO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cGF0aHMsXHJcblx0XHRmYWxsYmFjazogZmFsc2UsXHJcblx0fTtcclxuXHJcblx0Ly8gaWYgeW91IHNldCBmYWxsYmFjayB0byB0cnVlLCBpdCBjaGFuZ2VzIHRoZSBjb21wb25lbnQgdG8gU1NSIChvbiBjZXJ0YWluIGRlcGxveXMpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcblx0Ly8gdGhlIHByb3BlcnR5IHdlIHdhbnQgZnJvbSBwYXJhbXMgaXMgdGhlIG5hbWUgb2YgdGhlIGZpbGUsIHNvIGhlcmUgXCJwb2tlbW9uXCJcclxuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuXHRcdGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtwYXJhbXMucG9rZW1vbn1gXHJcblx0KTtcclxuXHRjb25zdCBwb2tlbW9uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0cG9rZW1vbixcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vbjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUG9rZW1vbl9jb250YWluZXJfXzFzVll0XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==