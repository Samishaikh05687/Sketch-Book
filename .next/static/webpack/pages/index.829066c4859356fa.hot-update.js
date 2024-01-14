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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/constants */ \"./src/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_slice_menuslice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/src/slice/menuslice */ \"./src/slice/menuslice.js\");\n/* harmony import */ var _src_socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/src/socket */ \"./src/socket.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Board = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const drawHistory = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);\n    const historyPointer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);\n    const shouldDraw = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    const { activeMenuItem, actionMenuItem } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.menu);\n    const { color, size } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.toolbox[activeMenuItem]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        if (actionMenuItem === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.DOWNLOAD) {\n            const URL = canvas.toDataURL();\n            const anchor = document.createElement(\"a\");\n            anchor.href = URL;\n            anchor.download = \"sketch.jpg\";\n            anchor.click();\n        } else if (actionMenuItem === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.UNDO || actionMenuItem === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.REDO) {\n            if (historyPointer.current > 0 && actionMenuItem === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.UNDO) historyPointer.current -= 1;\n            if (historyPointer.current < drawHistory.current.length - 1 && actionMenuItem === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.REDO) historyPointer.current += 1;\n            const imageData = drawHistory.current[historyPointer.current];\n            context.putImageData(imageData, 0, 0);\n        }\n        dispatch((0,_src_slice_menuslice__WEBPACK_IMPORTED_MODULE_4__.actionItemClick)(null));\n    }, [\n        actionMenuItem,\n        dispatch\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        const changeConfig = ()=>{\n            context.strokeStyle = color;\n            context.lineWidth = size;\n        };\n        changeConfig();\n    }, [\n        color,\n        size\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        canvas.width = window.innerWidth;\n        canvas.height = window.innerHeight;\n        const beginPath = (x, y)=>{\n            context.beginPath();\n            context.moveTo(x, y);\n        };\n        const drawLine = (x, y)=>{\n            context.lineTo(x, y);\n            context.stroke();\n        };\n        const handleMouseDown = (e)=>{\n            shouldDraw.current = true;\n            beginPath(e.clientX, e.clientY);\n            _src_socket__WEBPACK_IMPORTED_MODULE_5__.socket.emit(\"beginPath\", {\n                x: e.clientX,\n                y: e.clientY\n            });\n        };\n        const handleMouseMove = (e)=>{\n            if (!shouldDraw.current) return;\n            drawLine(e.clientX, e.clientY);\n            _src_socket__WEBPACK_IMPORTED_MODULE_5__.socket.emit(\"drawLine\", {\n                x: e.clientX,\n                y: e.clientY\n            });\n        };\n        const handleMouseUp = (e)=>{\n            shouldDraw.current = false;\n            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);\n            drawHistory.current.push(imageData);\n            historyPointer.current = drawHistory.current.length - 1;\n        };\n        const handleBeginPath = (path)=>{\n            beginPath(path.x, path.y);\n        };\n        const handleDrawLine = (path)=>{\n            drawLine(path.x, path.y);\n        };\n        canvas.addEventListener(\"mousedown\", handleMouseDown);\n        canvas.addEventListener(\"mousemove\", handleMouseMove);\n        canvas.addEventListener(\"mouseup\", handleMouseUp);\n        _src_socket__WEBPACK_IMPORTED_MODULE_5__.socket.on(\"beginPath\", handleBeginPath);\n        _src_socket__WEBPACK_IMPORTED_MODULE_5__.socket.on(\"drawLine\", handleDrawLine);\n        return ()=>{\n            canvas.removeEventListener(\"mousedown\", handleMouseDown);\n            canvas.removeEventListener(\"mousemove\", handleMouseMove);\n            canvas.removeEventListener(\"mouseup\", handleMouseUp);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef\n    }, void 0, false, {\n        fileName: \"D:\\\\Data\\\\projects\\\\sketchbook\\\\src\\\\components\\\\board\\\\index.js\",\n        lineNumber: 111,\n        columnNumber: 13\n    }, undefined);\n};\n_s(Board, \"V/VrQ4zWrHKj0v+HzysgxQRJbBo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1CQUFtQixDQUFDLGFBQVlkO1lBQ3ZDaEMsT0FBTzhDLG1CQUFtQixDQUFDLGFBQVlUO1lBQ3ZDckMsT0FBTzhDLG1CQUFtQixDQUFDLFdBQVVSO1FBQ3RDO0lBQ0gsR0FBRSxFQUFFO0lBR0oscUJBQVEsOERBQUN0QztRQUFPK0MsS0FBSzNEOzs7Ozs7QUFHekI7R0F6R01GOztRQUNlSixvREFBV0E7UUFLWUQsb0RBQVdBO1FBQzlCQSxvREFBV0E7OztLQVA5Qks7QUEyR04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYm9hcmQvaW5kZXguanM/MWM0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNRU5VX0lURU1TIH0gZnJvbSBcIkAvc3JjL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLHVzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7IG1lbnVJdGVtQ2xpY2ssYWN0aW9uSXRlbUNsaWNrIH0gZnJvbSAnQC9zcmMvc2xpY2UvbWVudXNsaWNlJ1xyXG5cclxuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSBcIkAvc3JjL3NvY2tldFwiO1xyXG5cclxuY29uc3QgQm9hcmQgPSAoKSA9PntcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBkcmF3SGlzdG9yeSA9IHVzZVJlZihbXSlcclxuICAgIGNvbnN0IGhpc3RvcnlQb2ludGVyID0gdXNlUmVmKDApXHJcbiAgICBjb25zdCBzaG91bGREcmF3ID0gdXNlUmVmKGZhbHNlKVxyXG4gICAgY29uc3Qge2FjdGl2ZU1lbnVJdGVtLGFjdGlvbk1lbnVJdGVtfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWVudSlcclxuICAgIGNvbnN0IHtjb2xvciwgc2l6ZX09IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudG9vbGJveFthY3RpdmVNZW51SXRlbV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZighY2FudmFzUmVmLmN1cnJlbnQpIHJldHVyblxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgaWYoYWN0aW9uTWVudUl0ZW0gPT09IE1FTlVfSVRFTVMuRE9XTkxPQUQpe1xyXG4gICAgICAgICAgICBjb25zdCBVUkwgPSBjYW52YXMudG9EYXRhVVJMKClcclxuICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICAgICAgICAgIGFuY2hvci5ocmVmID0gVVJMXHJcbiAgICAgICAgICAgIGFuY2hvci5kb3dubG9hZCA9IFwic2tldGNoLmpwZ1wiXHJcbiAgICAgICAgICAgIGFuY2hvci5jbGljaygpXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uTWVudUl0ZW0gPT09IE1FTlVfSVRFTVMuVU5ETyB8fCBhY3Rpb25NZW51SXRlbSA9PT0gTUVOVV9JVEVNUy5SRURPKXtcclxuICAgICAgICAgICAgaWYoaGlzdG9yeVBvaW50ZXIuY3VycmVudCA+IDAgJiYgYWN0aW9uTWVudUl0ZW0gPT09IE1FTlVfSVRFTVMuVU5ETykgaGlzdG9yeVBvaW50ZXIuY3VycmVudCAtPSAxXHJcbiAgICAgICAgICAgIGlmKGhpc3RvcnlQb2ludGVyLmN1cnJlbnQgPCBkcmF3SGlzdG9yeS5jdXJyZW50Lmxlbmd0aCAtIDEgJiYgYWN0aW9uTWVudUl0ZW0gPT09IE1FTlVfSVRFTVMuUkVETykgaGlzdG9yeVBvaW50ZXIuY3VycmVudCArPSAxXHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGRyYXdIaXN0b3J5LmN1cnJlbnRbaGlzdG9yeVBvaW50ZXIuY3VycmVudF1cclxuICAgICAgICAgICAgY29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaChhY3Rpb25JdGVtQ2xpY2sobnVsbCkpXHJcbiAgICB9LFthY3Rpb25NZW51SXRlbSxkaXNwYXRjaF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZighY2FudmFzUmVmLmN1cnJlbnQpIHJldHVyblxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2hhbmdlQ29uZmlnID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3JcclxuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBzaXplXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGFuZ2VDb25maWcoKVxyXG4gICAgfSxbY29sb3Isc2l6ZV0pXHJcblxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+e1xyXG4gICAgICAgIGlmKCFjYW52YXNSZWYuY3VycmVudCkgcmV0dXJuXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuXHJcbiAgICAgICAgY29uc3QgIGJlZ2luUGF0aCA9KHgseSkgPT4ge1xyXG4gICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKVxyXG4gICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oeCwgeSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRyYXdMaW5lID0gKHgseSkgPT4ge1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyh4LHkpXHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGUpID0+IHtcclxuICAgICAgICAgICAgIHNob3VsZERyYXcuY3VycmVudCA9IHRydWVcclxuICAgICAgICAgICAgIGJlZ2luUGF0aChlLmNsaWVudFgsIGUuY2xpZW50WSlcclxuICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdiZWdpblBhdGgnLCB7eDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFl9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICBpZighc2hvdWxkRHJhdy5jdXJyZW50KSByZXR1cm5cclxuICAgICAgICAgICAgICBkcmF3TGluZShlLmNsaWVudFgsIGUuY2xpZW50WSlcclxuICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnZHJhd0xpbmUnLCB7eDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFl9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKGUpID0+IHtcclxuICAgICAgICAgICAgIHNob3VsZERyYXcuY3VycmVudCA9IGZhbHNlXHJcbiAgICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLDAsY2FudmFzLndpZHRoLGNhbnZhcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICBkcmF3SGlzdG9yeS5jdXJyZW50LnB1c2goaW1hZ2VEYXRhKVxyXG4gICAgICAgICAgICAgaGlzdG9yeVBvaW50ZXIuY3VycmVudCA9IGRyYXdIaXN0b3J5LmN1cnJlbnQubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVCZWdpblBhdGggPSAocGF0aCkgPT4ge1xyXG4gICAgICAgICAgICBiZWdpblBhdGgocGF0aC54LHBhdGgueSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaGFuZGxlRHJhd0xpbmUgPSAocGF0aCkgPT4ge1xyXG4gICAgICAgICAgICBkcmF3TGluZShwYXRoLngscGF0aC55KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJyxoYW5kbGVNb3VzZURvd24pXHJcbiAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyxoYW5kbGVNb3VzZU1vdmUpXHJcbiAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsaGFuZGxlTW91c2VVcClcclxuXHJcbiAgICAgICBzb2NrZXQub24oJ2JlZ2luUGF0aCcsaGFuZGxlQmVnaW5QYXRoKVxyXG4gICAgICAgc29ja2V0Lm9uKCdkcmF3TGluZScsaGFuZGxlRHJhd0xpbmUpXHJcblxyXG4gICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJyxoYW5kbGVNb3VzZURvd24pXHJcbiAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsaGFuZGxlTW91c2VNb3ZlKVxyXG4gICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJyxoYW5kbGVNb3VzZVVwKVxyXG4gICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0+PC9jYW52YXM+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDsiXSwibmFtZXMiOlsiTUVOVV9JVEVNUyIsInVzZUVmZmVjdCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJtZW51SXRlbUNsaWNrIiwiYWN0aW9uSXRlbUNsaWNrIiwic29ja2V0IiwiQm9hcmQiLCJkaXNwYXRjaCIsImNhbnZhc1JlZiIsImRyYXdIaXN0b3J5IiwiaGlzdG9yeVBvaW50ZXIiLCJzaG91bGREcmF3IiwiYWN0aXZlTWVudUl0ZW0iLCJhY3Rpb25NZW51SXRlbSIsInN0YXRlIiwibWVudSIsImNvbG9yIiwic2l6ZSIsInRvb2xib3giLCJjdXJyZW50IiwiY2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJET1dOTE9BRCIsIlVSTCIsInRvRGF0YVVSTCIsImFuY2hvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwiVU5ETyIsIlJFRE8iLCJsZW5ndGgiLCJpbWFnZURhdGEiLCJwdXRJbWFnZURhdGEiLCJjaGFuZ2VDb25maWciLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiYmVnaW5QYXRoIiwieCIsInkiLCJtb3ZlVG8iLCJkcmF3TGluZSIsImxpbmVUbyIsInN0cm9rZSIsImhhbmRsZU1vdXNlRG93biIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsImVtaXQiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZVVwIiwiZ2V0SW1hZ2VEYXRhIiwicHVzaCIsImhhbmRsZUJlZ2luUGF0aCIsInBhdGgiLCJoYW5kbGVEcmF3TGluZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/board/index.js\n"));

/***/ })

});