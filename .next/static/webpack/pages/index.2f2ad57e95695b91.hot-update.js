"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/board/index.js":
/*!***************************************!*\
  !*** ./src/components/board/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/constants */ \"./src/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Board = ()=>{\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const shouldDraw = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    const { activeMenuItem, actionMenuItem } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.menu);\n    const { color, size } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.toolbox[activeMenuItem]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        if (activeMenuItem === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS) {\n            const URL = canvas.toDataURL();\n            console.log(URL);\n        }\n    }, [\n        actionMenuItem\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        const changeConfig = ()=>{\n            context.strokeStyle = color;\n            context.lineWidth = size;\n        };\n        changeConfig();\n    }, [\n        color,\n        size\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        canvas.width = window.innerWidth;\n        canvas.height = window.innerHeight;\n        const beginPath = (x, y)=>{\n            context.beginPath();\n            context.moveTo(x, y);\n        };\n        const drawLine = (x, y)=>{\n            context.lineTo(x, y);\n            context.stroke();\n        };\n        const handleMouseDown = (e)=>{\n            shouldDraw.current = true;\n            beginPath(e.clientX, e.clientY);\n        };\n        const handleMouseMove = (e)=>{\n            if (!shouldDraw.current) return;\n            drawLine(e.clientX, e.clientY);\n        };\n        const handleMouseUp = (e)=>{\n            shouldDraw.current = false;\n        };\n        canvas.addEventListener(\"mousedown\", handleMouseDown);\n        canvas.addEventListener(\"mousemove\", handleMouseMove);\n        canvas.addEventListener(\"mouseup\", handleMouseUp);\n        return ()=>{\n            canvas.removeEventListener(\"mousedown\", handleMouseDown);\n            canvas.removeEventListener(\"mousemove\", handleMouseMove);\n            canvas.removeEventListener(\"mouseup\", handleMouseUp);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef\n    }, void 0, false, {\n        fileName: \"D:\\\\Data\\\\projects\\\\sketchbook\\\\src\\\\components\\\\board\\\\index.js\",\n        lineNumber: 81,\n        columnNumber: 13\n    }, undefined);\n};\n_s(Board, \"LOzz9WngpPZ9OL2JcswqluINRTE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTUVOVV9JVEVNUyB9IGZyb20gXCJAL3NyYy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5cclxuY29uc3QgQm9hcmQgPSAoKSA9PntcclxuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3Qgc2hvdWxkRHJhdyA9IHVzZVJlZihmYWxzZSlcclxuICAgIGNvbnN0IHthY3RpdmVNZW51SXRlbSxhY3Rpb25NZW51SXRlbX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1lbnUpXHJcbiAgICBjb25zdCB7Y29sb3IsIHNpemV9PSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRvb2xib3hbYWN0aXZlTWVudUl0ZW1dKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoIWNhbnZhc1JlZi5jdXJyZW50KSByZXR1cm5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIGlmKGFjdGl2ZU1lbnVJdGVtID09PSBNRU5VX0lURU1TKXtcclxuICAgICAgICAgICAgY29uc3QgVVJMID0gY2FudmFzLnRvRGF0YVVSTCgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKChVUkwpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFthY3Rpb25NZW51SXRlbV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZighY2FudmFzUmVmLmN1cnJlbnQpIHJldHVyblxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2hhbmdlQ29uZmlnID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3JcclxuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBzaXplXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGFuZ2VDb25maWcoKVxyXG4gICAgfSxbY29sb3Isc2l6ZV0pXHJcblxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+e1xyXG4gICAgICAgIGlmKCFjYW52YXNSZWYuY3VycmVudCkgcmV0dXJuXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuXHJcbiAgICAgICAgY29uc3QgIGJlZ2luUGF0aCA9KHgseSkgPT4ge1xyXG4gICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKVxyXG4gICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oeCwgeSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRyYXdMaW5lID0gKHgseSkgPT4ge1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyh4LHkpXHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGUpID0+IHtcclxuICAgICAgICAgICAgIHNob3VsZERyYXcuY3VycmVudCA9IHRydWVcclxuICAgICAgICAgICAgIGJlZ2luUGF0aChlLmNsaWVudFgsIGUuY2xpZW50WSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYoIXNob3VsZERyYXcuY3VycmVudCkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgZHJhd0xpbmUoZS5jbGllbnRYLCBlLmNsaWVudFkpXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VVcCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICBzaG91bGREcmF3LmN1cnJlbnQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLGhhbmRsZU1vdXNlRG93bilcclxuICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLGhhbmRsZU1vdXNlTW92ZSlcclxuICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJyxoYW5kbGVNb3VzZVVwKVxyXG5cclxuICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsaGFuZGxlTW91c2VEb3duKVxyXG4gICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLGhhbmRsZU1vdXNlTW92ZSlcclxuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsaGFuZGxlTW91c2VVcClcclxuICAgICAgIH1cclxuICAgIH0sW10pXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9PjwvY2FudmFzPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7Il0sIm5hbWVzIjpbIk1FTlVfSVRFTVMiLCJ1c2VFZmZlY3QiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiQm9hcmQiLCJjYW52YXNSZWYiLCJzaG91bGREcmF3IiwiYWN0aXZlTWVudUl0ZW0iLCJhY3Rpb25NZW51SXRlbSIsInN0YXRlIiwibWVudSIsImNvbG9yIiwic2l6ZSIsInRvb2xib3giLCJjdXJyZW50IiwiY2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJVUkwiLCJ0b0RhdGFVUkwiLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlQ29uZmlnIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImJlZ2luUGF0aCIsIngiLCJ5IiwibW92ZVRvIiwiZHJhd0xpbmUiLCJsaW5lVG8iLCJzdHJva2UiLCJoYW5kbGVNb3VzZURvd24iLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZVVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/board/index.js\n"));

/***/ })

});