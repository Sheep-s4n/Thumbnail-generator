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
exports.id = "pages/result";
exports.ids = ["pages/result"];
exports.modules = {

/***/ "./pages/api/downlaodImage.js":
/*!************************************!*\
  !*** ./pages/api/downlaodImage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stream */ \"stream\");\n/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst pipeline = (0,util__WEBPACK_IMPORTED_MODULE_2__.promisify)((stream__WEBPACK_IMPORTED_MODULE_1___default().pipeline));\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  let url = \"http://localhost:3000\" + decodeURI(decodeURI(req.url.split('%22')[1]));\n  console.log(url); //const url = `http://localhost:3000/api/createImage?image=${image}&text=${text}&zoom=${searchParams.get(\"zoom\")}`\n\n  const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url); // replace this with your API call & options\n\n  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);\n  res.setHeader(\"Content-Type\", \"image/png\");\n  res.setHeader(\"Content-Disposition\", `attachment; filename=your_image.png`);\n  await pipeline(response.body, res);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZG93bmxhb2RJbWFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUcsUUFBUSxHQUFHRCwrQ0FBUyxDQUFDRCx3REFBRCxDQUExQjtBQUVBLDZCQUFlLDBDQUFnQkcsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0VBQ3JDLElBQUlDLEdBQUcsR0FBRywwQkFBd0JDLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDSCxHQUFHLENBQUNFLEdBQUosQ0FBUUUsS0FBUixDQUFjLEtBQWQsRUFBcUIsQ0FBckIsQ0FBRCxDQUFWLENBQTNDO0VBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFaLEVBRnFDLENBSXJDOztFQUNBLE1BQU1LLFFBQVEsR0FBRyxNQUFNWCxpREFBSyxDQUFDTSxHQUFELENBQTVCLENBTHFDLENBS0Y7O0VBQ25DLElBQUksQ0FBQ0ssUUFBUSxDQUFDQyxFQUFkLEVBQWtCLE1BQU0sSUFBSUMsS0FBSixDQUFXLHVCQUFzQkYsUUFBUSxDQUFDRyxVQUFXLEVBQXJELENBQU47RUFFbEJULEdBQUcsQ0FBQ1UsU0FBSixDQUFjLGNBQWQsRUFBOEIsV0FBOUI7RUFDQVYsR0FBRyxDQUFDVSxTQUFKLENBQWMscUJBQWQsRUFBc0MscUNBQXRDO0VBQ0EsTUFBTVosUUFBUSxDQUFDUSxRQUFRLENBQUNLLElBQVYsRUFBZ0JYLEdBQWhCLENBQWQ7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3N2Zy1nZW5lcmF0b3IvLi9wYWdlcy9hcGkvZG93bmxhb2RJbWFnZS5qcz81MzA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiXHJcbmltcG9ydCBzdHJlYW0gZnJvbSBcInN0cmVhbVwiO1xyXG5pbXBvcnQgeyBwcm9taXNpZnkgfSBmcm9tIFwidXRpbFwiO1xyXG5cclxuY29uc3QgcGlwZWxpbmUgPSBwcm9taXNpZnkoc3RyZWFtLnBpcGVsaW5lKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykgeyBcclxuICAgIGxldCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiK2RlY29kZVVSSShkZWNvZGVVUkkocmVxLnVybC5zcGxpdCgnJTIyJylbMV0pKVxyXG4gICAgY29uc29sZS5sb2codXJsKVxyXG4gICAgXHJcbiAgICAvL2NvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NyZWF0ZUltYWdlP2ltYWdlPSR7aW1hZ2V9JnRleHQ9JHt0ZXh0fSZ6b29tPSR7c2VhcmNoUGFyYW1zLmdldChcInpvb21cIil9YFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpOyAvLyByZXBsYWNlIHRoaXMgd2l0aCB5b3VyIEFQSSBjYWxsICYgb3B0aW9uc1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGB1bmV4cGVjdGVkIHJlc3BvbnNlICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKVxyXG4gICAgXHJcbiAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiaW1hZ2UvcG5nXCIpXHJcbiAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1EaXNwb3NpdGlvblwiLCBgYXR0YWNobWVudDsgZmlsZW5hbWU9eW91cl9pbWFnZS5wbmdgKVxyXG4gICAgYXdhaXQgcGlwZWxpbmUocmVzcG9uc2UuYm9keSwgcmVzKVxyXG59Il0sIm5hbWVzIjpbImZldGNoIiwic3RyZWFtIiwicHJvbWlzaWZ5IiwicGlwZWxpbmUiLCJyZXEiLCJyZXMiLCJ1cmwiLCJkZWNvZGVVUkkiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0Iiwic2V0SGVhZGVyIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/downlaodImage.js\n");

/***/ }),

/***/ "./pages/result/index.js":
/*!*******************************!*\
  !*** ./pages/result/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/home.module.css */ \"./styles/home.module.css\");\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _api_downlaodImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/downlaodImage */ \"./pages/api/downlaodImage.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"D:\\\\Programmation\\\\JavaScript\\\\react\\\\svg-generator\\\\pages\\\\result\\\\index.js\";\n\n\n\n\n\n\n\nconst getBody = util__WEBPACK_IMPORTED_MODULE_2___default().promisify(body_parser__WEBPACK_IMPORTED_MODULE_1___default().urlencoded());\nfunction Home({\n  body\n}) {\n  const text = body.text ?? \"\";\n  const imageURL = `/api/createImage?image=${encodeURI(body.image)}&text=${encodeURI(text)}${body.hasZoom === \"on\" ? \"&zoom=true\" : \"\"}` ?? 0;\n  const downlaodURL = `/api/downlaodImage?url=\"${encodeURI(imageURL)}\"gqKV5$Yti379yqyP9GTt` ?? 0;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: \"Thumbnail generator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        property: \"og:image\",\n        content: imageURL\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainContent),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n        className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n        children: \"Your Image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n        className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().image),\n        src: imageURL\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        class: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().flexContainer),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n          class: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().downlaodButton),\n          target: \"_blank\",\n          href: downlaodURL,\n          children: \"Download\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n          class: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().downlaodButton),\n          href: \"/\",\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n}\nasync function getServerSideProps({\n  req,\n  res\n}) {\n  await getBody(req, res);\n\n  if (req.method !== \"POST\") {\n    return {\n      redirect: {\n        destination: '/',\n        permanent: true\n      }\n    };\n  }\n\n  return {\n    props: {\n      body: req.body\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXN1bHQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxNQUFNSyxPQUFPLEdBQUdILHFEQUFBLENBQWVELDZEQUFBLEVBQWYsQ0FBaEI7QUFHZSxTQUFTTyxJQUFULENBQWM7RUFBQ0M7QUFBRCxDQUFkLEVBQXNCO0VBRW5DLE1BQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDQyxJQUFMLElBQWEsRUFBMUI7RUFDQSxNQUFNQyxRQUFRLEdBQUksMEJBQXlCQyxTQUFTLENBQUNILElBQUksQ0FBQ0ksS0FBTixDQUFhLFNBQVFELFNBQVMsQ0FBQ0YsSUFBRCxDQUFPLEdBQUVELElBQUksQ0FBQ0ssT0FBTCxLQUFpQixJQUFqQixHQUF3QixZQUF4QixHQUF1QyxFQUFHLEVBQXBILElBQXlILENBQTFJO0VBQ0EsTUFBTUMsV0FBVyxHQUFJLDJCQUEwQkgsU0FBUyxDQUFDRCxRQUFELENBQVcsdUJBQS9DLElBQXlFLENBQTdGO0VBRUEsb0JBQ0U7SUFBQSx3QkFDQSw4REFBQyxrREFBRDtNQUFBLHdCQUNJO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREosZUFFSTtRQUFNLFFBQVEsRUFBQyxVQUFmO1FBQTBCLE9BQU8sRUFBRUE7TUFBbkM7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZKO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURBLGVBS0E7TUFBSyxTQUFTLEVBQUVSLDRFQUFoQjtNQUFBLHdCQUNFO1FBQU0sU0FBUyxFQUFFQSxzRUFBakI7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixlQUVFO1FBQUssU0FBUyxFQUFFQSxzRUFBaEI7UUFBMkIsR0FBRyxFQUFFUTtNQUFoQztRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkYsZUFHRTtRQUFLLEtBQUssRUFBRVIsOEVBQVo7UUFBQSx3QkFDRTtVQUFHLEtBQUssRUFBRUEsK0VBQVY7VUFBOEIsTUFBTSxFQUFFLFFBQXRDO1VBQWdELElBQUksRUFBRVksV0FBdEQ7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFERixlQUVFO1VBQUcsS0FBSyxFQUFFWiwrRUFBVjtVQUE4QixJQUFJLEVBQUUsR0FBcEM7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFGRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFIRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFMQTtFQUFBLGdCQURGO0FBZ0JEO0FBRU0sZUFBZWlCLGtCQUFmLENBQWtDO0VBQUNDLEdBQUQ7RUFBT0M7QUFBUCxDQUFsQyxFQUE4QztFQUNqRCxNQUFNakIsT0FBTyxDQUFDZ0IsR0FBRCxFQUFNQyxHQUFOLENBQWI7O0VBQ0EsSUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMEI7SUFDeEIsT0FBTztNQUNMQyxRQUFRLEVBQUU7UUFDUkMsV0FBVyxFQUFFLEdBREw7UUFFUkMsU0FBUyxFQUFFO01BRkg7SUFETCxDQUFQO0VBTUQ7O0VBQ0QsT0FBTztJQUNIQyxLQUFLLEVBQUc7TUFBQ2xCLElBQUksRUFBR1ksR0FBRyxDQUFDWjtJQUFaO0VBREwsQ0FBUDtBQUdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ZnLWdlbmVyYXRvci8uL3BhZ2VzL3Jlc3VsdC9pbmRleC5qcz84OWRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcbmltcG9ydCB1dGlsIGZyb20gXCJ1dGlsXCI7XHJcbmltcG9ydCBDU1MgZnJvbSBcIi4uLy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgZG93bmxhb2QgZnJvbSBcIi4uL2FwaS9kb3dubGFvZEltYWdlXCI7XHJcblxyXG5cclxuY29uc3QgZ2V0Qm9keSA9IHV0aWwucHJvbWlzaWZ5KGJvZHlQYXJzZXIudXJsZW5jb2RlZCgpKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtib2R5fSkge1xyXG5cclxuICBjb25zdCB0ZXh0ID0gYm9keS50ZXh0ID8/IFwiXCJcclxuICBjb25zdCBpbWFnZVVSTCA9IGAvYXBpL2NyZWF0ZUltYWdlP2ltYWdlPSR7ZW5jb2RlVVJJKGJvZHkuaW1hZ2UpfSZ0ZXh0PSR7ZW5jb2RlVVJJKHRleHQpfSR7Ym9keS5oYXNab29tID09PSBcIm9uXCIgPyBcIiZ6b29tPXRydWVcIiA6IFwiXCJ9YCA/PyBcIi9hcGkvY3JlYXRlSW1hZ2VcIlxyXG4gIGNvbnN0IGRvd25sYW9kVVJMID0gYC9hcGkvZG93bmxhb2RJbWFnZT91cmw9XCIke2VuY29kZVVSSShpbWFnZVVSTCl9XCJncUtWNSRZdGkzNzl5cXlQOUdUdGAgPz8gXCIuXCJcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGh1bWJuYWlsIGdlbmVyYXRvcjwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlVVJMfSAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e0NTUy5tYWluQ29udGVudH0+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Q1NTLnRpdGxlfT5Zb3VyIEltYWdlPC9zcGFuPlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT17Q1NTLmltYWdlfSBzcmM9e2ltYWdlVVJMfT48L2ltZz5cclxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmZsZXhDb250YWluZXJ9PlxyXG4gICAgICAgIDxhIGNsYXNzPXtDU1MuZG93bmxhb2RCdXR0b259IHRhcmdldD17XCJfYmxhbmtcIn0gaHJlZj17ZG93bmxhb2RVUkx9PkRvd25sb2FkPC9hPlxyXG4gICAgICAgIDxhIGNsYXNzPXtDU1MuZG93bmxhb2RCdXR0b259IGhyZWY9e1wiL1wifT5Ib21lPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtyZXEgLCByZXN9KXtcclxuICAgIGF3YWl0IGdldEJvZHkocmVxLCByZXMpO1xyXG4gICAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgZGVzdGluYXRpb246ICcvJyxcclxuICAgICAgICAgIHBlcm1hbmVudDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBwcm9wcyA6IHtib2R5IDogcmVxLmJvZHl9LFxyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOlsiSGVhZCIsImJvZHlQYXJzZXIiLCJ1dGlsIiwiQ1NTIiwiZG93bmxhb2QiLCJnZXRCb2R5IiwicHJvbWlzaWZ5IiwidXJsZW5jb2RlZCIsIkhvbWUiLCJib2R5IiwidGV4dCIsImltYWdlVVJMIiwiZW5jb2RlVVJJIiwiaW1hZ2UiLCJoYXNab29tIiwiZG93bmxhb2RVUkwiLCJtYWluQ29udGVudCIsInRpdGxlIiwiZmxleENvbnRhaW5lciIsImRvd25sYW9kQnV0dG9uIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/result/index.js\n");

/***/ }),

/***/ "./styles/home.module.css":
/*!********************************!*\
  !*** ./styles/home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"mainContent\": \"home_mainContent__aYyrR\",\n\t\"title\": \"home_title__1hzQa\",\n\t\"input\": \"home_input__J8oEK\",\n\t\"button\": \"home_button__5p6hV\",\n\t\"image\": \"home_image__HPI7E\",\n\t\"invisible\": \"home_invisible__e9Ytp\",\n\t\"flexContainer\": \"home_flexContainer__fr6oe\",\n\t\"checkbox\": \"home_checkbox__AhICY\",\n\t\"downlaodButton\": \"home_downlaodButton__TI6lg\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N2Zy1nZW5lcmF0b3IvLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzPzcwY2EiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpbkNvbnRlbnRcIjogXCJob21lX21haW5Db250ZW50X19hWXlyUlwiLFxuXHRcInRpdGxlXCI6IFwiaG9tZV90aXRsZV9fMWh6UWFcIixcblx0XCJpbnB1dFwiOiBcImhvbWVfaW5wdXRfX0o4b0VLXCIsXG5cdFwiYnV0dG9uXCI6IFwiaG9tZV9idXR0b25fXzVwNmhWXCIsXG5cdFwiaW1hZ2VcIjogXCJob21lX2ltYWdlX19IUEk3RVwiLFxuXHRcImludmlzaWJsZVwiOiBcImhvbWVfaW52aXNpYmxlX19lOVl0cFwiLFxuXHRcImZsZXhDb250YWluZXJcIjogXCJob21lX2ZsZXhDb250YWluZXJfX2ZyNm9lXCIsXG5cdFwiY2hlY2tib3hcIjogXCJob21lX2NoZWNrYm94X19BaElDWVwiLFxuXHRcImRvd25sYW9kQnV0dG9uXCI6IFwiaG9tZV9kb3dubGFvZEJ1dHRvbl9fVEk2bGdcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/home.module.css\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/result/index.js"));
module.exports = __webpack_exports__;

})();