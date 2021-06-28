(function() {
var exports = {};
exports.id = "pages/pokemon";
exports.ids = ["pages/pokemon"];
exports.modules = {

/***/ "./pages/pokemon.js":
/*!**************************!*\
  !*** ./pages/pokemon.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\reaga\\Documents\\Education\\NextJS\\netlify-next-project\\pages\\pokemon.js";


const Pokemon = ({
  pokemon
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Pokemon: ", pokemon === null || pokemon === void 0 ? void 0 : pokemon.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Hello Trainer!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["This is a page all about ", pokemon === null || pokemon === void 0 ? void 0 : pokemon.name, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: pokemon === null || pokemon === void 0 ? void 0 : pokemon.sprites.front_default,
        alt: "Squirtle Front Sprite"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/blastoise");
  const pokemon = await res.json();
  return {
    props: {
      pokemon
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Pokemon);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXRsaWZ5LW5leHQtcHJvamVjdC8uL3BhZ2VzL3Bva2Vtb24uanMiLCJ3ZWJwYWNrOi8vbmV0bGlmeS1uZXh0LXByb2plY3QvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXRsaWZ5LW5leHQtcHJvamVjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlBva2Vtb24iLCJwb2tlbW9uIiwibmFtZSIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlCO0FBQ2hDLHNCQUNDO0FBQUEsNEJBQ0MsOERBQUMsa0RBQUQ7QUFBQSw4QkFDQztBQUFBLGdDQUFpQkEsT0FBakIsYUFBaUJBLE9BQWpCLHVCQUFpQkEsT0FBTyxDQUFFQyxJQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFFQztBQUNDLFlBQUksRUFBQyxVQUROO0FBRUMsZUFBTyxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFRQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRCxlQVNDO0FBQUEsOENBQTZCRCxPQUE3QixhQUE2QkEsT0FBN0IsdUJBQTZCQSxPQUFPLENBQUVDLElBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURCxlQVVDO0FBQUEsNkJBQ0M7QUFDQyxXQUFHLEVBQUVELE9BQUYsYUFBRUEsT0FBRix1QkFBRUEsT0FBTyxDQUFFRSxPQUFULENBQWlCQyxhQUR2QjtBQUVDLFdBQUcsRUFBQztBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZEO0FBQUEsa0JBREQ7QUFtQkEsQ0FwQkQ7O0FBc0JPLGVBQWVDLGNBQWYsR0FBZ0M7QUFDdEMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyw2Q0FBRCxDQUF2QjtBQUNBLFFBQU1OLE9BQU8sR0FBRyxNQUFNSyxHQUFHLENBQUNFLElBQUosRUFBdEI7QUFFQSxTQUFPO0FBQ05DLFNBQUssRUFBRTtBQUNOUjtBQURNO0FBREQsR0FBUDtBQUtBO0FBRUQsK0RBQWVELE9BQWYsRTs7Ozs7Ozs7Ozs7QUNuQ0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvcG9rZW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmNvbnN0IFBva2Vtb24gPSAoeyBwb2tlbW9uIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPlBva2Vtb246IHtwb2tlbW9uPy5uYW1lfTwvdGl0bGU+XHJcblx0XHRcdFx0PG1ldGFcclxuXHRcdFx0XHRcdG5hbWU9J3ZpZXdwb3J0J1xyXG5cdFx0XHRcdFx0Y29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCdcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxoMj5IZWxsbyBUcmFpbmVyITwvaDI+XHJcblx0XHRcdDxwPlRoaXMgaXMgYSBwYWdlIGFsbCBhYm91dCB7cG9rZW1vbj8ubmFtZX0gPC9wPlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdHNyYz17cG9rZW1vbj8uc3ByaXRlcy5mcm9udF9kZWZhdWx0fVxyXG5cdFx0XHRcdFx0YWx0PSdTcXVpcnRsZSBGcm9udCBTcHJpdGUnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uL2JsYXN0b2lzZVwiKTtcclxuXHRjb25zdCBwb2tlbW9uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHBva2Vtb24sXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBva2Vtb247XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9