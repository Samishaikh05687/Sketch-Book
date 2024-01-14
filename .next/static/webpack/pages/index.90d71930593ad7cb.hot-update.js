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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/constants */ \"./src/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_slice_menuslice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/src/slice/menuslice */ \"./src/slice/menuslice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Board = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const drawHistory = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);\n    const historyPointer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);\n    const shouldDraw = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    const { activeMenuItem, actionMenuItem } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.menu);\n    const { color, size } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.toolbox[activeMenuItem]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        if (actionMenuItem === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.DOWNLOAD) {\n            const URL = canvas.toDataURL();\n            const anchor = document.createElement(\"a\");\n            anchor.href = URL;\n            anchor.download = \"sketch.jpg\";\n            anchor.click();\n            console.log(URL);\n        } else if (_src_slice_menuslice__WEBPACK_IMPORTED_MODULE_4__.actionItemClick === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.UNDO || _src_slice_menuslice__WEBPACK_IMPORTED_MODULE_4__.actionItemClick === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.REDO) {\n            if (historyPointer.current > 0 && _src_slice_menuslice__WEBPACK_IMPORTED_MODULE_4__.actionItemClick === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.UNDO) historyPointer.current -= 1;\n            if (historyPointer.current < drawHistory.current.length - 1 && _src_slice_menuslice__WEBPACK_IMPORTED_MODULE_4__.actionItemClick === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.REDO) historyPointer.current += 1;\n            const imageData = drawHistory.current[historyPointer.current];\n            context.putImageData(imageData, 0, 0);\n        }\n        dispatch((0,_src_slice_menuslice__WEBPACK_IMPORTED_MODULE_4__.actionItemClick)(null));\n    }, [\n        actionMenuItem,\n        dispatch\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        const changeConfig = ()=>{\n            context.strokeStyle = color;\n            context.lineWidth = size;\n        };\n        changeConfig();\n    }, [\n        color,\n        size\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        canvas.width = window.innerWidth;\n        canvas.height = window.innerHeight;\n        const beginPath = (x, y)=>{\n            context.beginPath();\n            context.moveTo(x, y);\n        };\n        const drawLine = (x, y)=>{\n            context.lineTo(x, y);\n            context.stroke();\n        };\n        const handleMouseDown = (e)=>{\n            shouldDraw.current = true;\n            beginPath(e.clientX, e.clientY);\n        };\n        const handleMouseMove = (e)=>{\n            if (!shouldDraw.current) return;\n            drawLine(e.clientX, e.clientY);\n        };\n        const handleMouseUp = (e)=>{\n            shouldDraw.current = false;\n            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);\n            drawHistory.current.push(imageData);\n            historyPointer.current = drawHistory.current.length - 1;\n        };\n        canvas.addEventListener(\"mousedown\", handleMouseDown);\n        canvas.addEventListener(\"mousemove\", handleMouseMove);\n        canvas.addEventListener(\"mouseup\", handleMouseUp);\n        return ()=>{\n            canvas.removeEventListener(\"mousedown\", handleMouseDown);\n            canvas.removeEventListener(\"mousemove\", handleMouseMove);\n            canvas.removeEventListener(\"mouseup\", handleMouseUp);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef\n    }, void 0, false, {\n        fileName: \"D:\\\\Data\\\\projects\\\\sketchbook\\\\src\\\\components\\\\board\\\\index.js\",\n        lineNumber: 99,\n        columnNumber: 13\n    }, undefined);\n};\n_s(Board, \"V/VrQ4zWrHKj0v+HzysgxQRJbBo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDO1lBQ3BCNUMsV0FBV1EsT0FBTyxHQUFHO1lBQ3JCNEIsVUFBVVEsRUFBRUMsT0FBTyxFQUFFRCxFQUFFRSxPQUFPO1FBQ25DO1FBRUEsTUFBTUMsa0JBQWtCLENBQUNIO1lBQ25CLElBQUcsQ0FBQzVDLFdBQVdRLE9BQU8sRUFBRTtZQUN4QmdDLFNBQVNJLEVBQUVDLE9BQU8sRUFBRUQsRUFBRUUsT0FBTztRQUVuQztRQUVBLE1BQU1FLGdCQUFnQixDQUFDSjtZQUNsQjVDLFdBQVdRLE9BQU8sR0FBRztZQUNyQixNQUFNa0IsWUFBWWhCLFFBQVF1QyxZQUFZLENBQUMsR0FBRSxHQUFFeEMsT0FBT3NCLEtBQUssRUFBQ3RCLE9BQU95QixNQUFNO1lBQ3JFcEMsWUFBWVUsT0FBTyxDQUFDMEMsSUFBSSxDQUFDeEI7WUFDekIzQixlQUFlUyxPQUFPLEdBQUdWLFlBQVlVLE9BQU8sQ0FBQ2lCLE1BQU0sR0FBRztRQUUzRDtRQUVEaEIsT0FBTzBDLGdCQUFnQixDQUFDLGFBQVlSO1FBQ3BDbEMsT0FBTzBDLGdCQUFnQixDQUFDLGFBQVlKO1FBQ3BDdEMsT0FBTzBDLGdCQUFnQixDQUFDLFdBQVVIO1FBRWxDLE9BQU87WUFDTnZDLE9BQU8yQyxtQkFBbUIsQ0FBQyxhQUFZVDtZQUN2Q2xDLE9BQU8yQyxtQkFBbUIsQ0FBQyxhQUFZTDtZQUN2Q3RDLE9BQU8yQyxtQkFBbUIsQ0FBQyxXQUFVSjtRQUN0QztJQUNILEdBQUUsRUFBRTtJQUdKLHFCQUFRLDhEQUFDdkM7UUFBTzRDLEtBQUt4RDs7Ozs7O0FBR3pCO0dBOUZNRjs7UUFDZUgsb0RBQVdBO1FBS1lELG9EQUFXQTtRQUM5QkEsb0RBQVdBOzs7S0FQOUJJO0FBZ0dOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2JvYXJkL2luZGV4LmpzPzFjNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTUVOVV9JVEVNUyB9IGZyb20gXCJAL3NyYy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQgeyBtZW51SXRlbUNsaWNrLGFjdGlvbkl0ZW1DbGljayB9IGZyb20gJ0Avc3JjL3NsaWNlL21lbnVzbGljZSdcclxuXHJcblxyXG5jb25zdCBCb2FyZCA9ICgpID0+e1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IGRyYXdIaXN0b3J5ID0gdXNlUmVmKFtdKVxyXG4gICAgY29uc3QgaGlzdG9yeVBvaW50ZXIgPSB1c2VSZWYoMClcclxuICAgIGNvbnN0IHNob3VsZERyYXcgPSB1c2VSZWYoZmFsc2UpXHJcbiAgICBjb25zdCB7YWN0aXZlTWVudUl0ZW0sYWN0aW9uTWVudUl0ZW19ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tZW51KVxyXG4gICAgY29uc3Qge2NvbG9yLCBzaXplfT0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50b29sYm94W2FjdGl2ZU1lbnVJdGVtXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKCFjYW52YXNSZWYuY3VycmVudCkgcmV0dXJuXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICBpZihhY3Rpb25NZW51SXRlbSA9PT0gTUVOVV9JVEVNUy5ET1dOTE9BRCl7XHJcbiAgICAgICAgICAgIGNvbnN0IFVSTCA9IGNhbnZhcy50b0RhdGFVUkwoKVxyXG4gICAgICAgICAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgICAgICAgICAgYW5jaG9yLmhyZWYgPSBVUkxcclxuICAgICAgICAgICAgYW5jaG9yLmRvd25sb2FkID0gXCJza2V0Y2guanBnXCJcclxuICAgICAgICAgICAgYW5jaG9yLmNsaWNrKClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coKFVSTCkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uSXRlbUNsaWNrID09PSBNRU5VX0lURU1TLlVORE8gfHwgYWN0aW9uSXRlbUNsaWNrID09PSBNRU5VX0lURU1TLlJFRE8pe1xyXG4gICAgICAgICAgICBpZihoaXN0b3J5UG9pbnRlci5jdXJyZW50ID4gMCAmJiBhY3Rpb25JdGVtQ2xpY2sgPT09IE1FTlVfSVRFTVMuVU5ETykgaGlzdG9yeVBvaW50ZXIuY3VycmVudCAtPSAxXHJcbiAgICAgICAgICAgIGlmKGhpc3RvcnlQb2ludGVyLmN1cnJlbnQgPCBkcmF3SGlzdG9yeS5jdXJyZW50Lmxlbmd0aCAtIDEgJiYgYWN0aW9uSXRlbUNsaWNrID09PSBNRU5VX0lURU1TLlJFRE8pIGhpc3RvcnlQb2ludGVyLmN1cnJlbnQgKz0gMVxyXG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBkcmF3SGlzdG9yeS5jdXJyZW50W2hpc3RvcnlQb2ludGVyLmN1cnJlbnRdXHJcbiAgICAgICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMClcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uSXRlbUNsaWNrKG51bGwpKVxyXG4gICAgfSxbYWN0aW9uTWVudUl0ZW0sZGlzcGF0Y2hdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoIWNhbnZhc1JlZi5jdXJyZW50KSByZXR1cm5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNoYW5nZUNvbmZpZyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yXHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gc2l6ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hhbmdlQ29uZmlnKClcclxuICAgIH0sW2NvbG9yLHNpemVdKVxyXG5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PntcclxuICAgICAgICBpZighY2FudmFzUmVmLmN1cnJlbnQpIHJldHVyblxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XHJcblxyXG4gICAgICAgIGNvbnN0ICBiZWdpblBhdGggPSh4LHkpID0+IHtcclxuICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKClcclxuICAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHgsIHkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkcmF3TGluZSA9ICh4LHkpID0+IHtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oeCx5KVxyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICBzaG91bGREcmF3LmN1cnJlbnQgPSB0cnVlXHJcbiAgICAgICAgICAgICBiZWdpblBhdGgoZS5jbGllbnRYLCBlLmNsaWVudFkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmKCFzaG91bGREcmF3LmN1cnJlbnQpIHJldHVyblxyXG4gICAgICAgICAgICAgIGRyYXdMaW5lKGUuY2xpZW50WCwgZS5jbGllbnRZKVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgc2hvdWxkRHJhdy5jdXJyZW50ID0gZmFsc2VcclxuICAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsMCxjYW52YXMud2lkdGgsY2FudmFzLmhlaWdodClcclxuICAgICAgICAgICAgIGRyYXdIaXN0b3J5LmN1cnJlbnQucHVzaChpbWFnZURhdGEpXHJcbiAgICAgICAgICAgICBoaXN0b3J5UG9pbnRlci5jdXJyZW50ID0gZHJhd0hpc3RvcnkuY3VycmVudC5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsaGFuZGxlTW91c2VEb3duKVxyXG4gICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsaGFuZGxlTW91c2VNb3ZlKVxyXG4gICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLGhhbmRsZU1vdXNlVXApXHJcblxyXG4gICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJyxoYW5kbGVNb3VzZURvd24pXHJcbiAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsaGFuZGxlTW91c2VNb3ZlKVxyXG4gICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJyxoYW5kbGVNb3VzZVVwKVxyXG4gICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0+PC9jYW52YXM+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDsiXSwibmFtZXMiOlsiTUVOVV9JVEVNUyIsInVzZUVmZmVjdCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJtZW51SXRlbUNsaWNrIiwiYWN0aW9uSXRlbUNsaWNrIiwiQm9hcmQiLCJkaXNwYXRjaCIsImNhbnZhc1JlZiIsImRyYXdIaXN0b3J5IiwiaGlzdG9yeVBvaW50ZXIiLCJzaG91bGREcmF3IiwiYWN0aXZlTWVudUl0ZW0iLCJhY3Rpb25NZW51SXRlbSIsInN0YXRlIiwibWVudSIsImNvbG9yIiwic2l6ZSIsInRvb2xib3giLCJjdXJyZW50IiwiY2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJET1dOTE9BRCIsIlVSTCIsInRvRGF0YVVSTCIsImFuY2hvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwiY29uc29sZSIsImxvZyIsIlVORE8iLCJSRURPIiwibGVuZ3RoIiwiaW1hZ2VEYXRhIiwicHV0SW1hZ2VEYXRhIiwiY2hhbmdlQ29uZmlnIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImJlZ2luUGF0aCIsIngiLCJ5IiwibW92ZVRvIiwiZHJhd0xpbmUiLCJsaW5lVG8iLCJzdHJva2UiLCJoYW5kbGVNb3VzZURvd24iLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZVVwIiwiZ2V0SW1hZ2VEYXRhIiwicHVzaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/board/index.js\n"));

/***/ })

});