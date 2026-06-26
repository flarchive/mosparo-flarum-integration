/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/components/Mosparo.tsx"
/*!******************************************!*\
  !*** ./src/forum/components/Mosparo.tsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mosparo)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);


function loadMosparoScript() {
  if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().mosparoScriptLoaded)) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().data)['mosparo.host'] + '/build/mosparo-frontend.js';
    script.async = true;
    script.onload = () => {
      (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().mosparoScriptLoaded) = true;
      resolve(true);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
class Mosparo extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  view() {
    return m("div", {
      className: "Form-group"
    }, m("div", {
      className: "mosparo",
      id: this.attrs.id
    }));
  }
  oncreate(vnode) {
    super.oncreate(vnode);
    loadMosparoScript().then(() => {
      const initInterval = setInterval(() => {
        if (typeof window.mosparo !== 'undefined') {
          clearInterval(initInterval);
          this.attrs.state.render(this.attrs.id);
        }
      }, 200);
    });
  }
}
flarum.reg.add('mosparo-integration', 'forum/components/Mosparo', Mosparo);

/***/ },

/***/ "./src/forum/extendForgotPasswordModal.ts"
/*!************************************************!*\
  !*** ./src/forum/extendForgotPasswordModal.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extendForgotPasswordModal)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Mosparo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Mosparo */ "./src/forum/components/Mosparo.tsx");
/* harmony import */ var _states_MosparoState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/MosparoState */ "./src/forum/states/MosparoState.ts");



function extendForgotPasswordModal() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)('flarum/forum/components/ForgotPasswordModal', 'oninit', function () {
    this.mosparo = new _states_MosparoState__WEBPACK_IMPORTED_MODULE_2__["default"]();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)('flarum/forum/components/ForgotPasswordModal', 'requestParams', function (data) {
    if (!this.mosparo) return;
    data['mosparo_submit_token'] = this.mosparo.getSubmitToken();
    data['mosparo_validation_token'] = this.mosparo.getValidationToken();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)('flarum/forum/components/ForgotPasswordModal', 'fields', function (fields) {
    fields.add('mosparo', _components_Mosparo__WEBPACK_IMPORTED_MODULE_1__["default"].component({
      id: 'mosparo-box-forgot-password',
      state: this.mosparo
    }), 1);
  });
}

/***/ },

/***/ "./src/forum/extendLogInModal.ts"
/*!***************************************!*\
  !*** ./src/forum/extendLogInModal.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extendLogInModal)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Mosparo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Mosparo */ "./src/forum/components/Mosparo.tsx");
/* harmony import */ var _states_MosparoState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/MosparoState */ "./src/forum/states/MosparoState.ts");



function extendLogInModal() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)('flarum/forum/components/LogInModal', 'oninit', function () {
    this.mosparo = new _states_MosparoState__WEBPACK_IMPORTED_MODULE_2__["default"]();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)('flarum/forum/components/LogInModal', 'loginParams', function (data) {
    if (!this.mosparo) return;
    data['mosparo_submit_token'] = this.mosparo.getSubmitToken();
    data['mosparo_validation_token'] = this.mosparo.getValidationToken();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)('flarum/forum/components/LogInModal', 'fields', function (fields) {
    fields.add('mosparo', _components_Mosparo__WEBPACK_IMPORTED_MODULE_1__["default"].component({
      id: 'mosparo-box-login',
      state: this.mosparo
    }), 1);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)('flarum/forum/components/LogInModal', 'onerror', function (error) {
    if (!this.mosparo) return;
    this.mosparo.reset();
  });
}

/***/ },

/***/ "./src/forum/extendSignUpModal.ts"
/*!****************************************!*\
  !*** ./src/forum/extendSignUpModal.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extendSignUpModal)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Mosparo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Mosparo */ "./src/forum/components/Mosparo.tsx");
/* harmony import */ var _states_MosparoState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/MosparoState */ "./src/forum/states/MosparoState.ts");



function extendSignUpModal() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)('flarum/forum/components/SignUpModal', 'oninit', function () {
    this.mosparo = new _states_MosparoState__WEBPACK_IMPORTED_MODULE_2__["default"]();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)('flarum/forum/components/SignUpModal', 'submitData', function (data) {
    if (!this.mosparo) return;
    data['mosparo_submit_token'] = this.mosparo.getSubmitToken();
    data['mosparo_validation_token'] = this.mosparo.getValidationToken();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)('flarum/forum/components/SignUpModal', 'fields', function (fields) {
    fields.add('mosparo', _components_Mosparo__WEBPACK_IMPORTED_MODULE_1__["default"].component({
      id: 'mosparo-box-sign-up',
      state: this.mosparo
    }), 1);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)('flarum/forum/components/SignUpModal', 'onerror', function (error) {
    if (!this.mosparo) return;
    this.mosparo.reset();
  });
}

/***/ },

/***/ "./src/forum/index.ts"
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extendSignUpModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extendSignUpModal */ "./src/forum/extendSignUpModal.ts");
/* harmony import */ var _extendLogInModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extendLogInModal */ "./src/forum/extendLogInModal.ts");
/* harmony import */ var _extendForgotPasswordModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extendForgotPasswordModal */ "./src/forum/extendForgotPasswordModal.ts");




flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('mosparo-integration', () => {
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().mosparoScriptLoaded) = false;
  (0,_extendSignUpModal__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_extendLogInModal__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_extendForgotPasswordModal__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ },

/***/ "./src/forum/states/MosparoState.ts"
/*!******************************************!*\
  !*** ./src/forum/states/MosparoState.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MosparoState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);


class MosparoState {
  constructor() {
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "widget", void 0);
    this.widget = null;
  }
  render(id) {
    this.widget = new mosparo(id, (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().data)['mosparo.host'], (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().data)['mosparo.uuid'], (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().data)['mosparo.publicKey'], {
      loadCssResource: true
    });
  }
  getSubmitToken() {
    return this.widget.getSubmitToken();
  }
  getValidationToken() {
    return this.widget.getValidationToken();
  }
  reset() {
    this.widget.resetState();
    this.widget.requestSubmitToken();
  }
}
flarum.reg.add('mosparo-integration', 'forum/states/MosparoState', MosparoState);

/***/ },

/***/ "flarum/common/Component"
/*!*************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/Component')" ***!
  \*************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/Component');

/***/ },

/***/ "flarum/common/extend"
/*!**********************************************************!*\
  !*** external "flarum.reg.get('core', 'common/extend')" ***!
  \**********************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/extend');

/***/ },

/***/ "flarum/forum/app"
/*!******************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/app')" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/app');

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js"
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js"
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		flarum.reg._webpack_runtimes["mosparo-integration"] ||= __webpack_require__;// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map