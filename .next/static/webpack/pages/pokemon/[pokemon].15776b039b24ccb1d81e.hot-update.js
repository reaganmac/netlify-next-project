self["webpackHotUpdate_N_E"]("pages/pokemon/[pokemon]",{

/***/ "./pages/pokemon/[pokemon].js":
/*!************************************!*\
  !*** ./pages/pokemon/[pokemon].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pokemon.module.css */ "./pages/pokemon/Pokemon.module.css");
/* harmony import */ var _Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\reaga\\Documents\\Education\\NextJS\\netlify-next-project\\pages\\pokemon\\[pokemon].js",
    _this = undefined;




var Pokemon = function Pokemon(_ref) {
  var pokemon = _ref.pokemon;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Pokemon: ", pokemon === null || pokemon === void 0 ? void 0 : pokemon.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Hello Trainer!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["This is a page all about ", pokemon === null || pokemon === void 0 ? void 0 : pokemon.name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: pokemon === null || pokemon === void 0 ? void 0 : pokemon.sprites.front_default,
        alt: "Squirtle Front Sprite"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_c = Pokemon;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Pokemon);

var _c;

$RefreshReg$(_c, "Pokemon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi9bcG9rZW1vbl0uanMiXSwibmFtZXMiOlsiUG9rZW1vbiIsInBva2Vtb24iLCJuYW1lIiwiY2xhc3NlcyIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDaEMsc0JBQ0M7QUFBQSw0QkFDQyw4REFBQyxrREFBRDtBQUFBLDhCQUNDO0FBQUEsZ0NBQWlCQSxPQUFqQixhQUFpQkEsT0FBakIsdUJBQWlCQSxPQUFPLENBQUVDLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUM7QUFDQyxZQUFJLEVBQUMsVUFETjtBQUVDLGVBQU8sRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQVFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkQsZUFTQztBQUFLLGVBQVMsRUFBRUMsc0VBQWhCO0FBQUEsOEJBQ0M7QUFBQSxnREFBNkJGLE9BQTdCLGFBQTZCQSxPQUE3Qix1QkFBNkJBLE9BQU8sQ0FBRUMsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQztBQUNDLFdBQUcsRUFBRUQsT0FBRixhQUFFQSxPQUFGLHVCQUFFQSxPQUFPLENBQUVHLE9BQVQsQ0FBaUJDLGFBRHZCO0FBRUMsV0FBRyxFQUFDO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVREO0FBQUEsa0JBREQ7QUFtQkEsQ0FwQkQ7O0tBQU1MLE87O0FBbUROLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bva2Vtb24vW3Bva2Vtb25dLjE1Nzc2YjAzOWIyNGNjYjFkODFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Bva2Vtb24ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgUG9rZW1vbiA9ICh7IHBva2Vtb24gfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+UG9rZW1vbjoge3Bva2Vtb24/Lm5hbWV9PC90aXRsZT5cclxuXHRcdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdFx0bmFtZT0ndmlld3BvcnQnXHJcblx0XHRcdFx0XHRjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJ1xyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PGgyPkhlbGxvIFRyYWluZXIhPC9oMj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuXHRcdFx0XHQ8cD5UaGlzIGlzIGEgcGFnZSBhbGwgYWJvdXQge3Bva2Vtb24/Lm5hbWV9IDwvcD5cclxuXHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRzcmM9e3Bva2Vtb24/LnNwcml0ZXMuZnJvbnRfZGVmYXVsdH1cclxuXHRcdFx0XHRcdGFsdD0nU3F1aXJ0bGUgRnJvbnQgU3ByaXRlJ1xyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD0xNTFcIik7XHJcblx0Y29uc3QgcG9rZW1vbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG5cdGxldCBwYXRocyA9IHBva2Vtb24ucmVzdWx0cy5tYXAoKHApID0+IHtcclxuXHRcdHJldHVybiBgL3Bva2Vtb24vJHtwLm5hbWV9YDtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHBhdGhzLFxyXG5cdFx0ZmFsbGJhY2s6IGZhbHNlLFxyXG5cdH07XHJcblxyXG5cdC8vIGlmIHlvdSBzZXQgZmFsbGJhY2sgdG8gdHJ1ZSwgaXQgY2hhbmdlcyB0aGUgY29tcG9uZW50IHRvIFNTUiAob24gY2VydGFpbiBkZXBsb3lzKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG5cdC8vIHRoZSBwcm9wZXJ0eSB3ZSB3YW50IGZyb20gcGFyYW1zIGlzIHRoZSBuYW1lIG9mIHRoZSBmaWxlLCBzbyBoZXJlIFwicG9rZW1vblwiXHJcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcblx0XHRgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7cGFyYW1zLnBva2Vtb259YFxyXG5cdCk7XHJcblx0Y29uc3QgcG9rZW1vbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHBva2Vtb24sXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBva2Vtb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=