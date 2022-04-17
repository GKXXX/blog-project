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

/***/ "./components/AppContext.js":
/*!**********************************!*\
  !*** ./components/AppContext.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContextProvider\": () => (/* binding */ AppContextProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api */ \"./components/services/api.js\");\n\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst AppContextProvider = (props)=>{\n    const { pageComponent: Page , router , ...otherProps } = props;\n    const { 0: session1 , 1: setSession  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const initSession = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((jwt)=>{\n        if (!jwt) {\n            setSession(null);\n            return;\n        }\n        const [, payload] = jwt.split(\".\");\n        const session = atob(payload);\n        setSession(session);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const jwt = localStorage.getItem(\"jwt\");\n        initSession(jwt);\n    }, [\n        initSession\n    ]);\n    const signIn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (username, password)=>{\n        try {\n            const { data: { jwt  } ,  } = await _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/user/sign-in\", {\n                username,\n                password\n            });\n            localStorage.setItem(\"jwt\", jwt);\n            initSession(jwt);\n        } catch (err) {\n            alert(err.response.data.error);\n        }\n    }, [\n        initSession,\n        router\n    ]);\n    const signUp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (username, password, email)=>{\n        try {\n            await _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/user/register\", {\n                username,\n                password,\n                email\n            });\n        } catch (err) {\n            alert(err.response.data.error);\n        }\n    }, [\n        router\n    ]);\n    const signOut = ()=>{\n        localStorage.clear();\n        setSession(null);\n        router.push(\"/signin\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        ...otherProps,\n        value: {\n            router,\n            session: session1,\n            signIn,\n            signUp,\n            signOut\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\dev\\\\front-blog\\\\front-blog\\\\components\\\\AppContext.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXVFO0FBQ3ZDO0FBRWhDLE1BQU1LLFVBQVUsaUJBQUdMLG9EQUFhLENBQUMsRUFBRSxDQUFDO0FBRTdCLE1BQU1NLGtCQUFrQixHQUFHLENBQUNDLEtBQUssR0FBSztJQUMzQyxNQUFNLEVBQUVDLGFBQWEsRUFBRUMsSUFBSSxHQUFFQyxNQUFNLEdBQUUsR0FBR0MsVUFBVSxFQUFFLEdBQUdKLEtBQUs7SUFFNUQsTUFBTSxFQVJSLEdBUVNLLFFBQU8sR0FSaEIsR0FRa0JDLFVBQVUsTUFBSVYsK0NBQVEsRUFBRTtJQUV4QyxNQUFNVyxXQUFXLEdBQUdiLGtEQUFXLENBQUMsQ0FBQ2MsR0FBRyxHQUFLO1FBQ3ZDLElBQUksQ0FBQ0EsR0FBRyxFQUFFO1lBQ1JGLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFFaEIsT0FBTTtTQUNQO1FBRUQsTUFBTSxHQUFHRyxPQUFPLENBQUMsR0FBR0QsR0FBRyxDQUFDRSxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2xDLE1BQU1MLE9BQU8sR0FBR00sSUFBSSxDQUFDRixPQUFPLENBQUM7UUFFN0JILFVBQVUsQ0FBQ0QsT0FBTyxDQUFDO0tBQ3BCLEVBQUUsRUFBRSxDQUFDO0lBRU5WLGdEQUFTLENBQUMsSUFBTTtRQUNkLE1BQU1hLEdBQUcsR0FBR0ksWUFBWSxDQUFDQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRXZDTixXQUFXLENBQUNDLEdBQUcsQ0FBQztLQUNqQixFQUFFO1FBQUNELFdBQVc7S0FBQyxDQUFDO0lBRWpCLE1BQU1PLE1BQU0sR0FBR3BCLGtEQUFXLENBQ3hCLE9BQU9xQixRQUFRLEVBQUVDLFFBQVEsR0FBSztRQUM1QixJQUFJO1lBQ0YsTUFBTSxFQUNKQyxJQUFJLEVBQUUsRUFBRVQsR0FBRyxHQUFFLEtBQ2QsR0FBRyxNQUFNWCwwREFBUSxDQUFDLGVBQWUsRUFBRTtnQkFBRWtCLFFBQVE7Z0JBQUVDLFFBQVE7YUFBQyxDQUFDO1lBRTFESixZQUFZLENBQUNPLE9BQU8sQ0FBQyxLQUFLLEVBQUVYLEdBQUcsQ0FBQztZQUNoQ0QsV0FBVyxDQUFDQyxHQUFHLENBQUM7U0FFakIsQ0FBQyxPQUFPWSxHQUFHLEVBQUU7WUFDWkMsS0FBSyxDQUFDRCxHQUFHLENBQUNFLFFBQVEsQ0FBQ0wsSUFBSSxDQUFDTSxLQUFLLENBQUM7U0FDL0I7S0FDRixFQUNEO1FBQUNoQixXQUFXO1FBQUVKLE1BQU07S0FBQyxDQUN0QjtJQUVELE1BQU1xQixNQUFNLEdBQUc5QixrREFBVyxDQUN4QixPQUFPcUIsUUFBUSxFQUFFQyxRQUFRLEVBQUVTLEtBQUssR0FBSztRQUNuQyxJQUFJO1lBQ0YsTUFBTTVCLDBEQUFRLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQUVrQixRQUFRO2dCQUFFQyxRQUFRO2dCQUFFUyxLQUFLO2FBQUUsQ0FBQztTQUNoRSxDQUFDLE9BQU9MLEdBQUcsRUFBRTtZQUNaQyxLQUFLLENBQUNELEdBQUcsQ0FBQ0UsUUFBUSxDQUFDTCxJQUFJLENBQUNNLEtBQUssQ0FBQztTQUMvQjtLQUNGLEVBQ0Q7UUFBQ3BCLE1BQU07S0FBQyxDQUNUO0lBRUQsTUFBTXVCLE9BQU8sR0FBRyxJQUFNO1FBQ3BCZCxZQUFZLENBQUNlLEtBQUssRUFBRTtRQUNwQnJCLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEJILE1BQU0sQ0FBQ3lCLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7SUFFRCxxQkFDRSw4REFBQzlCLFVBQVUsQ0FBQytCLFFBQVE7UUFDakIsR0FBR3pCLFVBQVU7UUFDZDBCLEtBQUssRUFBRTtZQUNMM0IsTUFBTTtZQUNORSxPQUFPLEVBQVBBLFFBQU87WUFDUFMsTUFBTTtZQUNOVSxNQUFNO1lBQ05FLE9BQU87U0FDUjs7Ozs7aUJBQ0QsQ0FDSDtDQUNGO0FBRUQsaUVBQWU1QixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtYmxvZy8uL2NvbXBvbmVudHMvQXBwQ29udGV4dC5qcz8zNmU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGlcIlxyXG5cclxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwYWdlQ29tcG9uZW50OiBQYWdlLCByb3V0ZXIsIC4uLm90aGVyUHJvcHMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgY29uc3QgaW5pdFNlc3Npb24gPSB1c2VDYWxsYmFjaygoand0KSA9PiB7XHJcbiAgICBpZiAoIWp3dCkge1xyXG4gICAgICBzZXRTZXNzaW9uKG51bGwpXHJcblxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbLCBwYXlsb2FkXSA9IGp3dC5zcGxpdChcIi5cIilcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhdG9iKHBheWxvYWQpXHJcblxyXG4gICAgc2V0U2Vzc2lvbihzZXNzaW9uKVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgand0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIilcclxuXHJcbiAgICBpbml0U2Vzc2lvbihqd3QpXHJcbiAgfSwgW2luaXRTZXNzaW9uXSlcclxuXHJcbiAgY29uc3Qgc2lnbkluID0gdXNlQ2FsbGJhY2soXHJcbiAgICBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgZGF0YTogeyBqd3QgfSxcclxuICAgICAgICB9ID0gYXdhaXQgYXBpLnBvc3QoXCIvdXNlci9zaWduLWluXCIsIHsgdXNlcm5hbWUsIHBhc3N3b3JkfSlcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJqd3RcIiwgand0KVxyXG4gICAgICAgIGluaXRTZXNzaW9uKGp3dClcclxuXHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0KGVyci5yZXNwb25zZS5kYXRhLmVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2luaXRTZXNzaW9uLCByb3V0ZXJdXHJcbiAgKVxyXG5cclxuICBjb25zdCBzaWduVXAgPSB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQsIGVtYWlsKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgYXBpLnBvc3QoXCIvdXNlci9yZWdpc3RlclwiLCB7IHVzZXJuYW1lLCBwYXNzd29yZCwgZW1haWwgfSlcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbcm91dGVyXVxyXG4gIClcclxuXHJcbiAgY29uc3Qgc2lnbk91dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgICBzZXRTZXNzaW9uKG51bGwpXHJcbiAgICByb3V0ZXIucHVzaChcIi9zaWduaW5cIilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICByb3V0ZXIsXHJcbiAgICAgICAgc2Vzc2lvbixcclxuICAgICAgICBzaWduSW4sXHJcbiAgICAgICAgc2lnblVwLFxyXG4gICAgICAgIHNpZ25PdXQsXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGV4dCJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwaSIsIkFwcENvbnRleHQiLCJBcHBDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInBhZ2VDb21wb25lbnQiLCJQYWdlIiwicm91dGVyIiwib3RoZXJQcm9wcyIsInNlc3Npb24iLCJzZXRTZXNzaW9uIiwiaW5pdFNlc3Npb24iLCJqd3QiLCJwYXlsb2FkIiwic3BsaXQiLCJhdG9iIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNpZ25JbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJkYXRhIiwicG9zdCIsInNldEl0ZW0iLCJlcnIiLCJhbGVydCIsInJlc3BvbnNlIiwiZXJyb3IiLCJzaWduVXAiLCJlbWFpbCIsInNpZ25PdXQiLCJjbGVhciIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppContext.js\n");

/***/ }),

/***/ "./components/services/api.js":
/*!************************************!*\
  !*** ./components/services/api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nlet jwt = null;\nconst getJWT = ()=>{\n    jwt = jwt !== null && jwt !== void 0 ? jwt : localStorage.getItem(\"jwt\");\n    return jwt;\n};\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3000\",\n    transformRequest: [\n        (data, headers)=>{\n            headers.authentication = getJWT();\n            headers.post[\"Content-Type\"] = \"application/json\";\n            headers.patch[\"Content-Type\"] = \"application/json\";\n            headers.put[\"Content-Type\"] = \"application/json\";\n            headers.delete[\"Content-Type\"] = \"application/json\";\n            return JSON.stringify(data);\n        }, \n    ]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlcnZpY2VzL2FwaS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFFekIsSUFBSUMsR0FBRyxHQUFHLElBQUk7QUFFZCxNQUFNQyxNQUFNLEdBQUcsSUFBTTtJQUNuQkQsR0FBRyxHQUFHQSxHQUFHLGFBQUhBLEdBQUcsY0FBSEEsR0FBRyxHQUFJRSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFFeEMsT0FBT0gsR0FBRztDQUNYO0FBRUQsTUFBTUksR0FBRyxHQUFHTCxtREFBWSxDQUFDO0lBQ3ZCTyxPQUFPLEVBQUVDLHVCQUFvQztJQUM3Q0csZ0JBQWdCLEVBQUU7UUFDaEIsQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLEdBQUs7WUFDakJBLE9BQU8sQ0FBQ0MsY0FBYyxHQUFHWixNQUFNLEVBQUU7WUFDakNXLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLGtCQUFrQjtZQUNqREYsT0FBTyxDQUFDRyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsa0JBQWtCO1lBQ2xESCxPQUFPLENBQUNJLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxrQkFBa0I7WUFDaERKLE9BQU8sQ0FBQ0ssTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLGtCQUFrQjtZQUVuRCxPQUFPQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDO1NBQzVCO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsaUVBQWVQLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1ibG9nLy4vY29tcG9uZW50cy9zZXJ2aWNlcy9hcGkuanM/ZTUwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbmxldCBqd3QgPSBudWxsXHJcblxyXG5jb25zdCBnZXRKV1QgPSAoKSA9PiB7XHJcbiAgand0ID0gand0ID8/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpXHJcblxyXG4gIHJldHVybiBqd3RcclxufVxyXG5cclxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwsXHJcbiAgdHJhbnNmb3JtUmVxdWVzdDogW1xyXG4gICAgKGRhdGEsIGhlYWRlcnMpID0+IHtcclxuICAgICAgaGVhZGVycy5hdXRoZW50aWNhdGlvbiA9IGdldEpXVCgpXHJcbiAgICAgIGhlYWRlcnMucG9zdFtcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIGhlYWRlcnMucGF0Y2hbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICBoZWFkZXJzLnB1dFtcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIGhlYWRlcnMuZGVsZXRlW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuXHJcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpIl0sIm5hbWVzIjpbImF4aW9zIiwiand0IiwiZ2V0SldUIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwidHJhbnNmb3JtUmVxdWVzdCIsImRhdGEiLCJoZWFkZXJzIiwiYXV0aGVudGljYXRpb24iLCJwb3N0IiwicGF0Y2giLCJwdXQiLCJkZWxldGUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/services/api.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppContext */ \"./components/AppContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps , ...otherProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps,\n            ...otherProps\n        }, void 0, false, {\n            fileName: \"C:\\\\dev\\\\front-blog\\\\front-blog\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\dev\\\\front-blog\\\\front-blog\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTZEO0FBQy9CO0FBRTlCLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxHQUFHQyxVQUFVLEVBQUMsRUFBRTtJQUNyRCxxQkFDRSw4REFBQ0osc0VBQWtCO2tCQUNqQiw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7WUFBRyxHQUFHQyxVQUFVOzs7OztnQkFBSTs7Ozs7WUFDekIsQ0FFdEI7Q0FDRjtBQUVELGlFQUFlSCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtYmxvZy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0FwcENvbnRleHQnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgLi4ub3RoZXJQcm9wc30pIHtcbiAgcmV0dXJuKFxuICAgIDxBcHBDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IHsuLi5vdGhlclByb3BzfSAvPlxuICAgIDwvQXBwQ29udGV4dFByb3ZpZGVyPlxuICAgIFxuICApIFxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkFwcENvbnRleHRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwib3RoZXJQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();