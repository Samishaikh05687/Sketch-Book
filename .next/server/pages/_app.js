/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   COLORS: () => (/* binding */ COLORS),\n/* harmony export */   MENU_ITEMS: () => (/* binding */ MENU_ITEMS)\n/* harmony export */ });\nconst COLORS = {\n    BLACK: \"black\",\n    RED: \"red\",\n    GREEN: \"green\",\n    BLUE: \"blue\",\n    ORANGE: \"orange\",\n    YELLOW: \"yellow\",\n    WHITE: \"white\"\n};\nconst MENU_ITEMS = {\n    PENCIL: \"PENCIL\",\n    ERASER: \"ERASER\",\n    UNDO: \"UNDO\",\n    REDO: \"REDO\",\n    DOWNLOAD: \"DOWNLOAD\"\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsU0FBUztJQUNiQyxPQUFPO0lBQ1BDLEtBQUk7SUFDSkMsT0FBTTtJQUNOQyxNQUFLO0lBQ0xDLFFBQU87SUFDUEMsUUFBTztJQUNQQyxPQUFNO0FBQ1I7QUFFQSxNQUFNQyxhQUFhO0lBQ2pCQyxRQUFPO0lBQ1BDLFFBQU87SUFDUEMsTUFBSztJQUNMQyxNQUFLO0lBQ0xDLFVBQVM7QUFDWDtBQUUyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3NrZXRjaGJvb2svLi9zcmMvY29uc3RhbnRzLmpzPzJkM2UiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09MT1JTID0ge1xyXG4gIEJMQUNLOiAnYmxhY2snLFxyXG4gIFJFRDoncmVkJyxcclxuICBHUkVFTjonZ3JlZW4nLFxyXG4gIEJMVUU6J2JsdWUnLFxyXG4gIE9SQU5HRTonb3JhbmdlJyxcclxuICBZRUxMT1c6J3llbGxvdycsXHJcbiAgV0hJVEU6J3doaXRlJ1xyXG59XHJcblxyXG5jb25zdCBNRU5VX0lURU1TID0ge1xyXG4gIFBFTkNJTDonUEVOQ0lMJyxcclxuICBFUkFTRVI6J0VSQVNFUicsXHJcbiAgVU5ETzonVU5ETycsXHJcbiAgUkVETzonUkVETycsXHJcbiAgRE9XTkxPQUQ6J0RPV05MT0FEJ1xyXG59XHJcblxyXG5leHBvcnQge0NPTE9SUywgTUVOVV9JVEVNU30iXSwibmFtZXMiOlsiQ09MT1JTIiwiQkxBQ0siLCJSRUQiLCJHUkVFTiIsIkJMVUUiLCJPUkFOR0UiLCJZRUxMT1ciLCJXSElURSIsIk1FTlVfSVRFTVMiLCJQRU5DSUwiLCJFUkFTRVIiLCJVTkRPIiwiUkVETyIsIkRPV05MT0FEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n        store: _store__WEBPACK_IMPORTED_MODULE_2__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\Data\\\\projects\\\\sketchbook\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Data\\\\projects\\\\sketchbook\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBb0M7QUFDSjtBQUVIO0FBR2QsU0FBU0UsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFBTyw4REFBQ0osaURBQVFBO1FBQUNDLE9BQVNBLHlDQUFLQTtrQkFDN0IsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2V0Y2hib29rLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnXG5cbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPFByb3ZpZGVyIHN0b3JlID0ge3N0b3JlfT5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gIDwvUHJvdmlkZXI+XG4gIFxufVxuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/slice/menuslice.js":
/*!********************************!*\
  !*** ./src/slice/menuslice.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   actionItemClick: () => (/* binding */ actionItemClick),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   menuItemClick: () => (/* binding */ menuItemClick),\n/* harmony export */   menuSlice: () => (/* binding */ menuSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\n\nconst initialState = {\n    activeMenuItem: _constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.PENCIL,\n    actionMenuItem: null\n};\nconst menuSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"menu\",\n    initialState,\n    reducers: {\n        menuItemClick: (state, action)=>{\n            state.activeMenuItem = action.payload;\n        },\n        actionItemClick: (state, action)=>{\n            state.actionMenuItem = action.payload;\n        }\n    }\n});\nconst { menuItemClick, actionItemClick } = menuSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2UvbWVudXNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0M7QUFDTDtBQUUxQyxNQUFNRSxlQUFjO0lBQ2ZDLGdCQUFnQkYsa0RBQVVBLENBQUNHLE1BQU07SUFDakNDLGdCQUFnQjtBQUNyQjtBQUVPLE1BQU1DLFlBQVlOLDZEQUFXQSxDQUFDO0lBQ2xDTyxNQUFNO0lBQ05MO0lBQ0FNLFVBQVM7UUFDTkMsZUFBYyxDQUFDQyxPQUFNQztZQUNqQkQsTUFBTVAsY0FBYyxHQUFHUSxPQUFPQyxPQUFPO1FBQ3pDO1FBQ0FDLGlCQUFnQixDQUFDSCxPQUFNQztZQUNyQkQsTUFBTUwsY0FBYyxHQUFHTSxPQUFPQyxPQUFPO1FBQ3ZDO0lBQ0g7QUFDSCxHQUFFO0FBR0ssTUFBTSxFQUFDSCxhQUFhLEVBQUNJLGVBQWUsRUFBQyxHQUFHUCxVQUFVUSxPQUFPO0FBRWhFLGlFQUFlUixVQUFVUyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tldGNoYm9vay8uL3NyYy9zbGljZS9tZW51c2xpY2UuanM/ZmYxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IE1FTlVfSVRFTVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPXtcclxuICAgICBhY3RpdmVNZW51SXRlbTogTUVOVV9JVEVNUy5QRU5DSUwsXHJcbiAgICAgYWN0aW9uTWVudUl0ZW06IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1lbnVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgbmFtZTogJ21lbnUnLFxyXG4gICBpbml0aWFsU3RhdGUsXHJcbiAgIHJlZHVjZXJzOntcclxuICAgICAgbWVudUl0ZW1DbGljazooc3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgICAgICAgc3RhdGUuYWN0aXZlTWVudUl0ZW0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9LFxyXG4gICAgICBhY3Rpb25JdGVtQ2xpY2s6KHN0YXRlLGFjdGlvbikgPT57XHJcbiAgICAgICAgc3RhdGUuYWN0aW9uTWVudUl0ZW0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3Qge21lbnVJdGVtQ2xpY2ssYWN0aW9uSXRlbUNsaWNrfSA9IG1lbnVTbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51U2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsIk1FTlVfSVRFTVMiLCJpbml0aWFsU3RhdGUiLCJhY3RpdmVNZW51SXRlbSIsIlBFTkNJTCIsImFjdGlvbk1lbnVJdGVtIiwibWVudVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwibWVudUl0ZW1DbGljayIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbkl0ZW1DbGljayIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/slice/menuslice.js\n");

/***/ }),

/***/ "./src/slice/toolboxslice.js":
/*!***********************************!*\
  !*** ./src/slice/toolboxslice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeBrushSize: () => (/* binding */ changeBrushSize),\n/* harmony export */   changeColor: () => (/* binding */ changeColor),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toolboxSlice: () => (/* binding */ toolboxSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\n\nconst initialState = {\n    [_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.PENCIL]: {\n        color: _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.BLACK,\n        size: 3\n    },\n    [_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.ERASER]: {\n        color: _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.WHITE,\n        size: 3\n    },\n    [_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.UNDO]: {},\n    [_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.REDO]: {},\n    [_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.DOWNLOAD]: {}\n};\nconst toolboxSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"toolbox\",\n    initialState,\n    reducers: {\n        changeColor: (state, action)=>{\n            state[action.payload.item].color = action.payload.color;\n        },\n        changeBrushSize: (state, action)=>{\n            state[action.payload.item].size = action.payload.size;\n        }\n    }\n});\nconst { changeColor, changeBrushSize } = toolboxSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toolboxSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2UvdG9vbGJveHNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0M7QUFDRTtBQUVqRCxNQUFNRyxlQUFjO0lBQ2hCLENBQUNGLGtEQUFVQSxDQUFDRyxNQUFNLENBQUMsRUFBRTtRQUNqQkMsT0FBT0gsOENBQU1BLENBQUNJLEtBQUs7UUFDbkJDLE1BQU07SUFDVjtJQUNBLENBQUNOLGtEQUFVQSxDQUFDTyxNQUFNLENBQUMsRUFBQztRQUNoQkgsT0FBT0gsOENBQU1BLENBQUNPLEtBQUs7UUFDbkJGLE1BQU07SUFDVjtJQUNBLENBQUNOLGtEQUFVQSxDQUFDUyxJQUFJLENBQUMsRUFBQyxDQUFDO0lBQ25CLENBQUNULGtEQUFVQSxDQUFDVSxJQUFJLENBQUMsRUFBQyxDQUFDO0lBQ25CLENBQUNWLGtEQUFVQSxDQUFDVyxRQUFRLENBQUMsRUFBQyxDQUFDO0FBRTNCO0FBQ08sTUFBTUMsZUFBZWIsNkRBQVdBLENBQUM7SUFDcENjLE1BQU07SUFDTlg7SUFDQVksVUFBUztRQUNOQyxhQUFZLENBQUNDLE9BQU1DO1lBQ2ZELEtBQUssQ0FBQ0MsT0FBT0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBQ2YsS0FBSyxHQUFHYSxPQUFPQyxPQUFPLENBQUNkLEtBQUs7UUFDM0Q7UUFDQWdCLGlCQUFnQixDQUFDSixPQUFNQztZQUN0QkQsS0FBSyxDQUFDQyxPQUFPQyxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDYixJQUFJLEdBQUdXLE9BQU9DLE9BQU8sQ0FBQ1osSUFBSTtRQUN0RDtJQUNIO0FBQ0gsR0FBRTtBQUdLLE1BQU0sRUFBQ1MsV0FBVyxFQUFDSyxlQUFlLEVBQUMsR0FBR1IsYUFBYVMsT0FBTztBQUVqRSxpRUFBZVQsYUFBYVUsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3NrZXRjaGJvb2svLi9zcmMvc2xpY2UvdG9vbGJveHNsaWNlLmpzP2ZkNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBNRU5VX0lURU1TLENPTE9SUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9e1xyXG4gICAgW01FTlVfSVRFTVMuUEVOQ0lMXToge1xyXG4gICAgICAgIGNvbG9yOiBDT0xPUlMuQkxBQ0ssXHJcbiAgICAgICAgc2l6ZTogM1xyXG4gICAgfSxcclxuICAgIFtNRU5VX0lURU1TLkVSQVNFUl06e1xyXG4gICAgICAgIGNvbG9yOiBDT0xPUlMuV0hJVEUsXHJcbiAgICAgICAgc2l6ZTogM1xyXG4gICAgfSxcclxuICAgIFtNRU5VX0lURU1TLlVORE9dOnt9LFxyXG4gICAgW01FTlVfSVRFTVMuUkVET106e30sXHJcbiAgICBbTUVOVV9JVEVNUy5ET1dOTE9BRF06e30sXHJcbiAgICBcclxufVxyXG5leHBvcnQgY29uc3QgdG9vbGJveFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3Rvb2xib3gnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6e1xyXG4gICAgICAgY2hhbmdlQ29sb3I6KHN0YXRlLGFjdGlvbik9PntcclxuICAgICAgICAgICBzdGF0ZVthY3Rpb24ucGF5bG9hZC5pdGVtXS5jb2xvciA9IGFjdGlvbi5wYXlsb2FkLmNvbG9yXHJcbiAgICAgICB9LFxyXG4gICAgICAgY2hhbmdlQnJ1c2hTaXplOihzdGF0ZSxhY3Rpb24pID0+e1xyXG4gICAgICAgIHN0YXRlW2FjdGlvbi5wYXlsb2FkLml0ZW1dLnNpemUgPSBhY3Rpb24ucGF5bG9hZC5zaXplXHJcbiAgICAgICB9XHJcbiAgICB9XHJcbiB9KVxyXG4gXHJcbiBcclxuIGV4cG9ydCBjb25zdCB7Y2hhbmdlQ29sb3IsY2hhbmdlQnJ1c2hTaXplfSA9IHRvb2xib3hTbGljZS5hY3Rpb25zXHJcbiBcclxuIGV4cG9ydCBkZWZhdWx0IHRvb2xib3hTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiTUVOVV9JVEVNUyIsIkNPTE9SUyIsImluaXRpYWxTdGF0ZSIsIlBFTkNJTCIsImNvbG9yIiwiQkxBQ0siLCJzaXplIiwiRVJBU0VSIiwiV0hJVEUiLCJVTkRPIiwiUkVETyIsIkRPV05MT0FEIiwidG9vbGJveFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiY2hhbmdlQ29sb3IiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJpdGVtIiwiY2hhbmdlQnJ1c2hTaXplIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/slice/toolboxslice.js\n");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_slice_menuslice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/slice/menuslice */ \"./src/slice/menuslice.js\");\n/* harmony import */ var _src_slice_toolboxslice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/slice/toolboxslice */ \"./src/slice/toolboxslice.js\");\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        menu: _src_slice_menuslice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        toolbox: _src_slice_toolboxslice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUQ7QUFDRjtBQUNNO0FBRzlDLE1BQU1HLFFBQVFILGdFQUFjQSxDQUFFO0lBQ2pDSSxTQUFRO1FBQ0pDLE1BQU1KLDREQUFXQTtRQUNqQkssU0FBU0osK0RBQWNBO0lBRTNCO0FBQ0osR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NrZXRjaGJvb2svLi9zcmMvc3RvcmUuanM/Y2RhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCBNZW51UmVkdWNlciBmcm9tICdAL3NyYy9zbGljZS9tZW51c2xpY2UnXHJcbmltcG9ydCBUb29sYm94UmVkdWNlciBmcm9tICdAL3NyYy9zbGljZS90b29sYm94c2xpY2UnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUgKHtcclxuICAgIHJlZHVjZXI6e1xyXG4gICAgICAgIG1lbnU6IE1lbnVSZWR1Y2VyLFxyXG4gICAgICAgIHRvb2xib3g6IFRvb2xib3hSZWR1Y2VyXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0pIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiTWVudVJlZHVjZXIiLCJUb29sYm94UmVkdWNlciIsInN0b3JlIiwicmVkdWNlciIsIm1lbnUiLCJ0b29sYm94Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();