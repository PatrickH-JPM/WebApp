(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_react_dist_render_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-react/dist/render_controller.js */ "./vendor/symfony/ux-react/assets/dist/render_controller.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-react--react': _symfony_ux_react_dist_render_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _react_controllers_HabitantForm_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./react/controllers/HabitantForm.jsx */ "./assets/react/controllers/HabitantForm.jsx");
/* harmony import */ var _react_controllers_ListHabitants_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./react/controllers/ListHabitants.jsx */ "./assets/react/controllers/ListHabitants.jsx");


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)





var root = react_dom_client__WEBPACK_IMPORTED_MODULE_4__.createRoot(document.getElementById('mon-composant'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_react_controllers_HabitantForm_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_react_controllers_ListHabitants_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null)));

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/react/controllers/HabitantForm.jsx":
/*!***************************************************!*\
  !*** ./assets/react/controllers/HabitantForm.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





























function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var HabitantForm = function HabitantForm(_ref) {
  var _ref$habitantInitial = _ref.habitantInitial,
    habitantInitial = _ref$habitantInitial === void 0 ? {} : _ref$habitantInitial,
    onCompletion = _ref.onCompletion;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(habitantInitial),
    _useState2 = _slicedToArray(_useState, 2),
    habitant = _useState2[0],
    setHabitant = _useState2[1];
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var url = habitant.id ? "http://localhost:8000/habitants/".concat(habitant.id) : 'http://localhost:8000/habitants';
    var method = habitant.id ? 'put' : 'post';
    (0,axios__WEBPACK_IMPORTED_MODULE_30__["default"])({
      method: method,
      url: url,
      data: habitant
    }).then(function () {
      return onCompletion();
    })["catch"](function (error) {
      return console.error('Erreur lors de la sauvegarde', error);
    });
  };
  var handleChange = function handleChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setHabitant(_objectSpread(_objectSpread({}, habitant), {}, _defineProperty({}, name, value)));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("input", {
    type: "text",
    name: "nom",
    value: habitant.nom,
    onChange: handleChange,
    placeholder: "Nom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("input", {
    type: "text",
    name: "prenom",
    value: habitant.prenom,
    onChange: handleChange,
    placeholder: "Pr\xE9nom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("input", {
    type: "date",
    name: "dateNaissance",
    value: habitant.dateNaissance,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    name: "genre",
    value: habitant.genre,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: ""
  }, "S\xE9lectionnez le genre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "homme"
  }, "Homme"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "femme"
  }, "Femme"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "autre"
  }, "Autre")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("input", {
    type: "number",
    name: "numero",
    value: habitant.numero,
    onChange: handleChange,
    placeholder: "Num\xE9ro de rue"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("input", {
    type: "text",
    name: "nomRue",
    value: habitant.nomRue,
    onChange: handleChange,
    placeholder: "Nom de la rue"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("button", {
    type: "submit"
  }, "Sauvegarder")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HabitantForm);

/***/ }),

/***/ "./assets/react/controllers/ListHabitants.jsx":
/*!****************************************************!*\
  !*** ./assets/react/controllers/ListHabitants.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _HabitantForm_jsx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./HabitantForm.jsx */ "./assets/react/controllers/HabitantForm.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var ListHabitants = function ListHabitants(_ref) {
  var onEdit = _ref.onEdit;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    habitants = _useState2[0],
    setHabitants = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    editingHabitant = _useState4[0],
    setEditingHabitant = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    searchResult = _useState6[0],
    setSearchResult = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)({
      numero: '',
      nomRue: ''
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    searchData = _useState8[0],
    setSearchData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isAddressLocked = _useState10[0],
    setIsAddressLocked = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    addHabitantData = _useState12[0],
    setAddHabitantData = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showList = _useState14[0],
    setShowList = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_31__.useEffect)(function () {
    if (showList) {
      refreshHabitants();
    }
  }, [showList]);
  var deleteHabitant = function deleteHabitant(id) {
    axios__WEBPACK_IMPORTED_MODULE_33__["default"]["delete"]("http://localhost:8000/habitants/".concat(id)).then(function () {
      setHabitants(habitants.filter(function (habitant) {
        return habitant.id !== id;
      }));
    })["catch"](function (error) {
      return console.error('Erreur lors de la suppression', error);
    });
  };
  var editHabitant = function editHabitant(habitant) {
    if (editingHabitant && editingHabitant.id === habitant.id) {
      setEditingHabitant(null);
    } else {
      setEditingHabitant(habitant);
      onEdit(habitant);
    }
  };
  var searchHabitantByAddress = function searchHabitantByAddress() {
    axios__WEBPACK_IMPORTED_MODULE_33__["default"].post('http://localhost:8000/habitants/search', searchData).then(function (response) {
      var sortedSearchResult = response.data.sort(function (a, b) {
        return a.nom.localeCompare(b.nom);
      });
      setSearchResult(response.data);
    })["catch"](function (error) {
      console.error('Erreur lors de la recherche par adresse', error);
      setSearchResult(null);
    });
  };
  var toggleAddHabitantForm = function toggleAddHabitantForm() {
    setIsAddressLocked(!isAddressLocked);
    setAddHabitantData({
      numero: searchData.numero,
      nomRue: searchData.nomRue
    });
  };
  var addHabitantWithSameAddress = function addHabitantWithSameAddress() {
    var newHabitantData = {
      numero: searchData.numero,
      nomRue: searchData.nomRue
    };
    refreshHabitants();
    setAddHabitantData({});
    setIsAddressLocked(true);
  };
  var refreshHabitants = function refreshHabitants() {
    axios__WEBPACK_IMPORTED_MODULE_33__["default"].get('http://localhost:8000/habitants').then(function (response) {
      var sortedHabitants = response.data.sort(function (a, b) {
        return a.nom.localeCompare(b.nom);
      });
      setHabitants(sortedHabitants);
    })["catch"](function (error) {
      return console.error('Erreur lors de la récupération des habitants', error);
    });
  };
  var toggleList = function toggleList() {
    setShowList(!showList);
    if (showList) {
      refreshHabitants();
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
    onClick: toggleList
  }, showList ? 'Masquer la liste des habitants' : 'Afficher la liste des habitants'), showList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
    onClick: refreshHabitants
  }, "Actualiser la liste"), editingHabitant && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("h3", null, "Modification d'un habitant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_HabitantForm_jsx__WEBPACK_IMPORTED_MODULE_32__["default"], {
    habitantInitial: editingHabitant,
    onCompletion: function onCompletion() {
      return setEditingHabitant(null);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("th", null, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("th", null, "Pr\xE9nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("th", null, "Date de Naissance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("th", null, "Genre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("th", null, "Adresse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("tbody", null, habitants.map(function (habitant) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("tr", {
      key: habitant.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("td", null, habitant.nom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("td", null, habitant.prenom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("td", null, habitant.dateNaissance), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("td", null, habitant.genre), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("td", null, habitant.numero, " ", habitant.nomRue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
      onClick: function onClick() {
        return editHabitant(habitant);
      }
    }, editingHabitant && editingHabitant.id === habitant.id ? 'Fermer le formulaire' : 'Modifier'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
      onClick: function onClick() {
        return deleteHabitant(habitant.id);
      }
    }, "Supprimer")));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("h2", null, "Recherche par Adresse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("input", {
    type: "text",
    name: "numero",
    value: searchData.numero,
    onChange: function onChange(e) {
      return setSearchData(_objectSpread(_objectSpread({}, searchData), {}, {
        numero: e.target.value
      }));
    },
    placeholder: "Num\xE9ro de rue"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("input", {
    type: "text",
    name: "nomRue",
    value: searchData.nomRue,
    onChange: function onChange(e) {
      return setSearchData(_objectSpread(_objectSpread({}, searchData), {}, {
        nomRue: e.target.value
      }));
    },
    placeholder: "Nom de la rue"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
    onClick: searchHabitantByAddress
  }, "Rechercher"), searchResult && searchResult.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("h3", null, "R\xE9sultat de la recherche :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("th", null, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("th", null, "Pr\xE9nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("th", null, "Date de Naissance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("th", null, "Genre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("th", null, "Adresse"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("tbody", null, searchResult.map(function (result) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("tr", {
      key: result.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("td", null, result.nom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("td", null, result.prenom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("td", null, result.dateNaissance), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("td", null, result.genre), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("td", null, result.numero, " ", result.nomRue));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
    onClick: toggleAddHabitantForm
  }, isAddressLocked ? 'Fermer le formulaire' : 'Ajouter un habitant avec la même adresse')) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", null, "Aucun r\xE9sultat pour cette adresse.")), isAddressLocked && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_HabitantForm_jsx__WEBPACK_IMPORTED_MODULE_32__["default"], {
    habitantInitial: addHabitantData,
    onCompletion: toggleAddHabitantForm,
    isAddressLocked: isAddressLocked,
    refreshHabitants: refreshHabitants
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListHabitants);

/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/register_controller.js":
/*!********************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/register_controller.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerReactControllerComponents: () => (/* binding */ registerReactControllerComponents)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__);













function registerReactControllerComponents(context) {
  var reactControllers = {};
  var importAllReactComponents = function importAllReactComponents(r) {
    r.keys().forEach(function (key) {
      return reactControllers[key] = r(key)["default"];
    });
  };
  importAllReactComponents(context);
  window.resolveReactComponent = function (name) {
    var component = reactControllers["./".concat(name, ".jsx")] || reactControllers["./".concat(name, ".tsx")];
    if (typeof component === 'undefined') {
      var possibleValues = Object.keys(reactControllers).map(function (key) {
        return key.replace('./', '').replace('.jsx', '').replace('.tsx', '');
      });
      throw new Error("React controller \"".concat(name, "\" does not exist. Possible values: ").concat(possibleValues.join(', ')));
    }
    return component;
  };
}


/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/render_controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/render_controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createRoot;
var m = react_dom__WEBPACK_IMPORTED_MODULE_20__;
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function createRoot(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    _classCallCheck(this, default_1);
    return _super.apply(this, arguments);
  }
  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var props = this.propsValue ? this.propsValue : null;
      this.dispatchEvent('connect', {
        component: this.componentValue,
        props: props
      });
      if (!this.componentValue) {
        throw new Error('No component specified.');
      }
      var component = window.resolveReactComponent(this.componentValue);
      this._renderReactElement( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(component, props, null));
      this.dispatchEvent('mount', {
        componentName: this.componentValue,
        component: component,
        props: props
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.element.root.unmount();
      this.dispatchEvent('unmount', {
        component: this.componentValue,
        props: this.propsValue ? this.propsValue : null
      });
    }
  }, {
    key: "_renderReactElement",
    value: function _renderReactElement(reactElement) {
      var element = this.element;
      if (!element.root) {
        element.root = createRoot(this.element);
      }
      element.root.render(reactElement);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'react'
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__.Controller);
default_1.values = {
  component: String,
  props: Object
};


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_react-dom_client_js-n-7f2255"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnVFO0FBQ3ZFLGlFQUFlO0FBQ2YsOEJBQThCLG1GQUFZO0FBQzFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSCtDOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQUFBQyxRQUFBLDBCQUFBQyxXQUFBO0VBQUFDLFNBQUEsQ0FBQUYsUUFBQSxFQUFBQyxXQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLFFBQUE7RUFBQSxTQUFBQSxTQUFBO0lBQUFLLGVBQUEsT0FBQUwsUUFBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBUixRQUFBO0lBQUFTLEdBQUE7SUFBQUMsS0FBQSxFQVVJLFNBQUFDLFFBQUEsRUFBVTtNQUNOLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLEdBQUcsbUVBQW1FO0lBQ2xHO0VBQUM7RUFBQSxPQUFBYixRQUFBO0FBQUEsRUFId0JELDJEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYK0I7QUFDOUM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQzBCO0FBQ0E7QUFDYztBQUN3QjtBQUNFO0FBRWxFLElBQU1xQixJQUFJLEdBQUdILHdEQUFtQixDQUM1QkssUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUMzQyxDQUFDO0FBRURILElBQUksQ0FBQ0ksTUFBTSxlQUNQUiwwREFBQSxDQUFDQSx5REFBZ0IscUJBQ2JBLDBEQUFBLENBQUNFLDJFQUFZLE1BQUMsQ0FBQyxlQUNmRiwwREFBQSxDQUFDRyw0RUFBYSxNQUFDLENBQ0QsQ0FDdEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCMkQ7O0FBRTVEO0FBQ08sSUFBTVMsR0FBRyxHQUFHRCwwRUFBZ0IsQ0FBQ0UseUlBSW5DLENBQUM7QUFDRjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUd0M7QUFDZDtBQUUxQixJQUFNWCxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQWUsSUFBQSxFQUErQztFQUFBLElBQUFDLG9CQUFBLEdBQUFELElBQUEsQ0FBekNFLGVBQWU7SUFBZkEsZUFBZSxHQUFBRCxvQkFBQSxjQUFHLENBQUMsQ0FBQyxHQUFBQSxvQkFBQTtJQUFFRSxZQUFZLEdBQUFILElBQUEsQ0FBWkcsWUFBWTtFQUN0RCxJQUFBQyxTQUFBLEdBQWdDTixnREFBUSxDQUFDSSxlQUFlLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBbERHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFFNUIsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLEtBQUssRUFBSztJQUM1QkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUN0QixJQUFNQyxHQUFHLEdBQUdMLFFBQVEsQ0FBQ00sRUFBRSxzQ0FBQUMsTUFBQSxDQUFzQ1AsUUFBUSxDQUFDTSxFQUFFLElBQUssaUNBQWlDO0lBQzlHLElBQU1FLE1BQU0sR0FBR1IsUUFBUSxDQUFDTSxFQUFFLEdBQUcsS0FBSyxHQUFHLE1BQU07SUFFM0NkLGtEQUFLLENBQUM7TUFBRWdCLE1BQU0sRUFBTkEsTUFBTTtNQUFFSCxHQUFHLEVBQUhBLEdBQUc7TUFBRUksSUFBSSxFQUFFVDtJQUFTLENBQUMsQ0FBQyxDQUNqQ1UsSUFBSSxDQUFDO01BQUEsT0FBTWQsWUFBWSxDQUFDLENBQUM7SUFBQSxFQUFDLFNBQ3JCLENBQUMsVUFBQWUsS0FBSztNQUFBLE9BQUlDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDhCQUE4QixFQUFFQSxLQUFLLENBQUM7SUFBQSxFQUFDO0VBQzdFLENBQUM7RUFFRCxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSVYsS0FBSyxFQUFLO0lBQzVCLElBQUFXLGFBQUEsR0FBd0JYLEtBQUssQ0FBQ1ksTUFBTTtNQUE1QkMsSUFBSSxHQUFBRixhQUFBLENBQUpFLElBQUk7TUFBRTlDLEtBQUssR0FBQTRDLGFBQUEsQ0FBTDVDLEtBQUs7SUFDbkIrQixXQUFXLENBQUFnQixhQUFBLENBQUFBLGFBQUEsS0FBTWpCLFFBQVEsT0FBQWtCLGVBQUEsS0FBR0YsSUFBSSxFQUFHOUMsS0FBSyxFQUFFLENBQUM7RUFDL0MsQ0FBQztFQUVELG9CQUNJTSwyREFBQSwyQkFDSUEsMkRBQUE7SUFBTTJDLFFBQVEsRUFBRWpCO0VBQWEsZ0JBQ3pCMUIsMkRBQUE7SUFBTzRDLElBQUksRUFBQyxNQUFNO0lBQUNKLElBQUksRUFBQyxLQUFLO0lBQUM5QyxLQUFLLEVBQUU4QixRQUFRLENBQUNxQixHQUFJO0lBQUNDLFFBQVEsRUFBRVQsWUFBYTtJQUFDVSxXQUFXLEVBQUM7RUFBSyxDQUFFLENBQUMsZUFDL0YvQywyREFBQTtJQUFPNEMsSUFBSSxFQUFDLE1BQU07SUFBQ0osSUFBSSxFQUFDLFFBQVE7SUFBQzlDLEtBQUssRUFBRThCLFFBQVEsQ0FBQ3dCLE1BQU87SUFBQ0YsUUFBUSxFQUFFVCxZQUFhO0lBQUNVLFdBQVcsRUFBQztFQUFRLENBQUUsQ0FBQyxlQUN4Ry9DLDJEQUFBO0lBQU80QyxJQUFJLEVBQUMsTUFBTTtJQUFDSixJQUFJLEVBQUMsZUFBZTtJQUFDOUMsS0FBSyxFQUFFOEIsUUFBUSxDQUFDeUIsYUFBYztJQUFDSCxRQUFRLEVBQUVUO0VBQWEsQ0FBRSxDQUFDLGVBQ2pHckMsMkRBQUE7SUFBUXdDLElBQUksRUFBQyxPQUFPO0lBQUM5QyxLQUFLLEVBQUU4QixRQUFRLENBQUMwQixLQUFNO0lBQUNKLFFBQVEsRUFBRVQ7RUFBYSxnQkFDL0RyQywyREFBQTtJQUFRTixLQUFLLEVBQUM7RUFBRSxHQUFDLDBCQUE2QixDQUFDLGVBQy9DTSwyREFBQTtJQUFRTixLQUFLLEVBQUM7RUFBTyxHQUFDLE9BQWEsQ0FBQyxlQUNwQ00sMkRBQUE7SUFBUU4sS0FBSyxFQUFDO0VBQU8sR0FBQyxPQUFhLENBQUMsZUFDcENNLDJEQUFBO0lBQVFOLEtBQUssRUFBQztFQUFPLEdBQUMsT0FBYSxDQUMvQixDQUFDLGVBQ1RNLDJEQUFBO0lBQU80QyxJQUFJLEVBQUMsUUFBUTtJQUFDSixJQUFJLEVBQUMsUUFBUTtJQUFDOUMsS0FBSyxFQUFFOEIsUUFBUSxDQUFDMkIsTUFBTztJQUFDTCxRQUFRLEVBQUVULFlBQWE7SUFBQ1UsV0FBVyxFQUFDO0VBQWUsQ0FBRSxDQUFDLGVBQ2pIL0MsMkRBQUE7SUFBTzRDLElBQUksRUFBQyxNQUFNO0lBQUNKLElBQUksRUFBQyxRQUFRO0lBQUM5QyxLQUFLLEVBQUU4QixRQUFRLENBQUM0QixNQUFPO0lBQUNOLFFBQVEsRUFBRVQsWUFBYTtJQUFDVSxXQUFXLEVBQUM7RUFBZSxDQUFFLENBQUMsZUFFL0cvQywyREFBQTtJQUFRNEMsSUFBSSxFQUFDO0VBQVEsR0FBQyxhQUFtQixDQUN2QyxDQUNMLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWUxQyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUN3QjtBQUN6QjtBQUNvQjtBQUU5QyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUFjLElBQUEsRUFBbUI7RUFBQSxJQUFicUMsTUFBTSxHQUFBckMsSUFBQSxDQUFOcUMsTUFBTTtFQUMzQixJQUFBakMsU0FBQSxHQUFrQ04sZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQU8sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdkNrQyxTQUFTLEdBQUFqQyxVQUFBO0lBQUVrQyxZQUFZLEdBQUFsQyxVQUFBO0VBQzlCLElBQUFtQyxVQUFBLEdBQThDMUMsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTJDLFVBQUEsR0FBQW5DLGNBQUEsQ0FBQWtDLFVBQUE7SUFBckRFLGVBQWUsR0FBQUQsVUFBQTtJQUFFRSxrQkFBa0IsR0FBQUYsVUFBQTtFQUMxQyxJQUFBRyxVQUFBLEdBQXdDOUMsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQStDLFVBQUEsR0FBQXZDLGNBQUEsQ0FBQXNDLFVBQUE7SUFBL0NFLFlBQVksR0FBQUQsVUFBQTtJQUFFRSxlQUFlLEdBQUFGLFVBQUE7RUFDcEMsSUFBQUcsVUFBQSxHQUFvQ2xELGdEQUFRLENBQUM7TUFBRW9DLE1BQU0sRUFBRSxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFHLENBQUMsQ0FBQztJQUFBYyxVQUFBLEdBQUEzQyxjQUFBLENBQUEwQyxVQUFBO0lBQWpFRSxVQUFVLEdBQUFELFVBQUE7SUFBRUUsYUFBYSxHQUFBRixVQUFBO0VBQ2hDLElBQUFHLFVBQUEsR0FBOEN0RCxnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBdUQsV0FBQSxHQUFBL0MsY0FBQSxDQUFBOEMsVUFBQTtJQUF0REUsZUFBZSxHQUFBRCxXQUFBO0lBQUVFLGtCQUFrQixHQUFBRixXQUFBO0VBQzFDLElBQUFHLFdBQUEsR0FBOEMxRCxnREFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUEyRCxXQUFBLEdBQUFuRCxjQUFBLENBQUFrRCxXQUFBO0lBQW5ERSxlQUFlLEdBQUFELFdBQUE7SUFBRUUsa0JBQWtCLEdBQUFGLFdBQUE7RUFDMUMsSUFBQUcsV0FBQSxHQUFnQzlELGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUErRCxXQUFBLEdBQUF2RCxjQUFBLENBQUFzRCxXQUFBO0lBQXhDRSxRQUFRLEdBQUFELFdBQUE7SUFBRUUsV0FBVyxHQUFBRixXQUFBO0VBRTVCekIsaURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBSTBCLFFBQVEsRUFBRTtNQUNWRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RCO0VBQ0osQ0FBQyxFQUFFLENBQUNGLFFBQVEsQ0FBQyxDQUFDO0VBRWQsSUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJcEQsRUFBRSxFQUFLO0lBQzNCZCw4Q0FBSyxVQUFPLG9DQUFBZSxNQUFBLENBQW9DRCxFQUFFLENBQUUsQ0FBQyxDQUNoREksSUFBSSxDQUFDLFlBQU07TUFDUnNCLFlBQVksQ0FBQ0QsU0FBUyxDQUFDNEIsTUFBTSxDQUFDLFVBQUEzRCxRQUFRO1FBQUEsT0FBSUEsUUFBUSxDQUFDTSxFQUFFLEtBQUtBLEVBQUU7TUFBQSxFQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBSyxLQUFLO01BQUEsT0FBSUMsT0FBTyxDQUFDRCxLQUFLLENBQUMsK0JBQStCLEVBQUVBLEtBQUssQ0FBQztJQUFBLEVBQUM7RUFDOUUsQ0FBQztFQUVELElBQU1pRCxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSTVELFFBQVEsRUFBSztJQUMvQixJQUFJbUMsZUFBZSxJQUFJQSxlQUFlLENBQUM3QixFQUFFLEtBQUtOLFFBQVEsQ0FBQ00sRUFBRSxFQUFFO01BQ3ZEOEIsa0JBQWtCLENBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUMsTUFBTTtNQUNIQSxrQkFBa0IsQ0FBQ3BDLFFBQVEsQ0FBQztNQUM1QjhCLE1BQU0sQ0FBQzlCLFFBQVEsQ0FBQztJQUNwQjtFQUNKLENBQUM7RUFFRCxJQUFNNkQsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUF1QkEsQ0FBQSxFQUFTO0lBQ2xDckUsOENBQUssQ0FBQ3NFLElBQUksQ0FBQyx3Q0FBd0MsRUFBRW5CLFVBQVUsQ0FBQyxDQUMzRGpDLElBQUksQ0FBQyxVQUFBcUQsUUFBUSxFQUFJO01BQ2QsSUFBTUMsa0JBQWtCLEdBQUdELFFBQVEsQ0FBQ3RELElBQUksQ0FBQ3dELElBQUksQ0FBQyxVQUFDQyxDQUFDLEVBQUVDLENBQUM7UUFBQSxPQUFLRCxDQUFDLENBQUM3QyxHQUFHLENBQUMrQyxhQUFhLENBQUNELENBQUMsQ0FBQzlDLEdBQUcsQ0FBQztNQUFBLEVBQUM7TUFDbkZtQixlQUFlLENBQUN1QixRQUFRLENBQUN0RCxJQUFJLENBQUM7SUFDbEMsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBRSxLQUFLLEVBQUk7TUFDWkMsT0FBTyxDQUFDRCxLQUFLLENBQUMseUNBQXlDLEVBQUVBLEtBQUssQ0FBQztNQUMvRDZCLGVBQWUsQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQyxDQUFDO0VBQ1YsQ0FBQztFQUVELElBQU02QixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXFCQSxDQUFBLEVBQVM7SUFDaENyQixrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7SUFDcENLLGtCQUFrQixDQUFDO01BQUV6QixNQUFNLEVBQUVnQixVQUFVLENBQUNoQixNQUFNO01BQUVDLE1BQU0sRUFBRWUsVUFBVSxDQUFDZjtJQUFPLENBQUMsQ0FBQztFQUNoRixDQUFDO0VBRUQsSUFBTTBDLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBMEJBLENBQUEsRUFBUztJQUNyQyxJQUFNQyxlQUFlLEdBQUc7TUFDcEI1QyxNQUFNLEVBQUVnQixVQUFVLENBQUNoQixNQUFNO01BQ3pCQyxNQUFNLEVBQUVlLFVBQVUsQ0FBQ2Y7SUFDdkIsQ0FBQztJQUVENkIsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQkwsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEJKLGtCQUFrQixDQUFDLElBQUksQ0FBQztFQUM1QixDQUFDO0VBRUQsSUFBTVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFTO0lBQzNCakUsOENBQUssQ0FBQ2dGLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUN2QzlELElBQUksQ0FBQyxVQUFBcUQsUUFBUSxFQUFJO01BQ2QsSUFBTVUsZUFBZSxHQUFHVixRQUFRLENBQUN0RCxJQUFJLENBQUN3RCxJQUFJLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxDQUFDO1FBQUEsT0FBS0QsQ0FBQyxDQUFDN0MsR0FBRyxDQUFDK0MsYUFBYSxDQUFDRCxDQUFDLENBQUM5QyxHQUFHLENBQUM7TUFBQSxFQUFDO01BQ2hGVyxZQUFZLENBQUN5QyxlQUFlLENBQUM7SUFDakMsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBOUQsS0FBSztNQUFBLE9BQUlDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDhDQUE4QyxFQUFFQSxLQUFLLENBQUM7SUFBQSxFQUFDO0VBQzdGLENBQUM7RUFFRCxJQUFNK0QsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUNyQmxCLFdBQVcsQ0FBQyxDQUFDRCxRQUFRLENBQUM7SUFDdEIsSUFBSUEsUUFBUSxFQUFFO01BQ1ZFLGdCQUFnQixDQUFDLENBQUM7SUFDdEI7RUFDSixDQUFDO0VBRUQsb0JBQ0lqRiwyREFBQSwyQkFDSUEsMkRBQUE7SUFBUW1HLE9BQU8sRUFBRUQ7RUFBVyxHQUN2Qm5CLFFBQVEsR0FBRyxnQ0FBZ0MsR0FBRyxpQ0FDM0MsQ0FBQyxFQUVSQSxRQUFRLGlCQUNML0UsMkRBQUEsMkJBQ0lBLDJEQUFBO0lBQVFtRyxPQUFPLEVBQUVsQjtFQUFpQixHQUFDLHFCQUEyQixDQUFDLEVBQzlEdEIsZUFBZSxpQkFDWjNELDJEQUFBLDJCQUNJQSwyREFBQSxhQUFJLDRCQUE4QixDQUFDLGVBQ25DQSwyREFBQSxDQUFDRSwwREFBWTtJQUFDaUIsZUFBZSxFQUFFd0MsZUFBZ0I7SUFBQ3ZDLFlBQVksRUFBRSxTQUFBQSxhQUFBO01BQUEsT0FBTXdDLGtCQUFrQixDQUFDLElBQUksQ0FBQztJQUFBO0VBQUMsQ0FBRSxDQUM5RixDQUNSLGVBQ0Q1RCwyREFBQSw2QkFDSUEsMkRBQUEsNkJBQ0lBLDJEQUFBLDBCQUNJQSwyREFBQSxhQUFJLEtBQU8sQ0FBQyxlQUNaQSwyREFBQSxhQUFJLFdBQVUsQ0FBQyxlQUNmQSwyREFBQSxhQUFJLG1CQUFxQixDQUFDLGVBQzFCQSwyREFBQSxhQUFJLE9BQVMsQ0FBQyxlQUNkQSwyREFBQSxhQUFJLFNBQVcsQ0FBQyxlQUNoQkEsMkRBQUEsYUFBSSxTQUFXLENBQ2YsQ0FDRCxDQUFDLGVBQ1JBLDJEQUFBLGdCQUNLdUQsU0FBUyxDQUFDNkMsR0FBRyxDQUFDLFVBQUE1RSxRQUFRO0lBQUEsb0JBQ25CeEIsMkRBQUE7TUFBSVAsR0FBRyxFQUFFK0IsUUFBUSxDQUFDTTtJQUFHLGdCQUNqQjlCLDJEQUFBLGFBQUt3QixRQUFRLENBQUNxQixHQUFRLENBQUMsZUFDdkI3QywyREFBQSxhQUFLd0IsUUFBUSxDQUFDd0IsTUFBVyxDQUFDLGVBQzFCaEQsMkRBQUEsYUFBS3dCLFFBQVEsQ0FBQ3lCLGFBQWtCLENBQUMsZUFDakNqRCwyREFBQSxhQUFLd0IsUUFBUSxDQUFDMEIsS0FBVSxDQUFDLGVBQ3pCbEQsMkRBQUEsYUFBS3dCLFFBQVEsQ0FBQzJCLE1BQU0sRUFBQyxHQUFDLEVBQUMzQixRQUFRLENBQUM0QixNQUFXLENBQUMsZUFDNUNwRCwyREFBQSwwQkFDSUEsMkRBQUE7TUFBUW1HLE9BQU8sRUFBRSxTQUFBQSxRQUFBO1FBQUEsT0FBTWYsWUFBWSxDQUFDNUQsUUFBUSxDQUFDO01BQUE7SUFBQyxHQUN6Q21DLGVBQWUsSUFBSUEsZUFBZSxDQUFDN0IsRUFBRSxLQUFLTixRQUFRLENBQUNNLEVBQUUsR0FBRyxzQkFBc0IsR0FBRyxVQUM5RSxDQUFDLGVBQ1Q5QiwyREFBQTtNQUFRbUcsT0FBTyxFQUFFLFNBQUFBLFFBQUE7UUFBQSxPQUFNakIsY0FBYyxDQUFDMUQsUUFBUSxDQUFDTSxFQUFFLENBQUM7TUFBQTtJQUFDLEdBQUMsV0FBaUIsQ0FDckUsQ0FDSixDQUFDO0VBQUEsQ0FDUixDQUNFLENBQ0osQ0FDTixDQUNSLGVBRUQ5QiwyREFBQSwyQkFDSUEsMkRBQUEsYUFBSSx1QkFBeUIsQ0FBQyxlQUM5QkEsMkRBQUE7SUFBTzRDLElBQUksRUFBQyxNQUFNO0lBQUNKLElBQUksRUFBQyxRQUFRO0lBQUM5QyxLQUFLLEVBQUV5RSxVQUFVLENBQUNoQixNQUFPO0lBQUNMLFFBQVEsRUFBRSxTQUFBQSxTQUFDdUQsQ0FBQztNQUFBLE9BQUtqQyxhQUFhLENBQUEzQixhQUFBLENBQUFBLGFBQUEsS0FBTTBCLFVBQVU7UUFBRWhCLE1BQU0sRUFBRWtELENBQUMsQ0FBQzlELE1BQU0sQ0FBQzdDO01BQUssRUFBRSxDQUFDO0lBQUEsQ0FBQztJQUFDcUQsV0FBVyxFQUFDO0VBQWUsQ0FBRSxDQUFDLGVBQ3BLL0MsMkRBQUE7SUFBTzRDLElBQUksRUFBQyxNQUFNO0lBQUNKLElBQUksRUFBQyxRQUFRO0lBQUM5QyxLQUFLLEVBQUV5RSxVQUFVLENBQUNmLE1BQU87SUFBQ04sUUFBUSxFQUFFLFNBQUFBLFNBQUN1RCxDQUFDO01BQUEsT0FBS2pDLGFBQWEsQ0FBQTNCLGFBQUEsQ0FBQUEsYUFBQSxLQUFNMEIsVUFBVTtRQUFFZixNQUFNLEVBQUVpRCxDQUFDLENBQUM5RCxNQUFNLENBQUM3QztNQUFLLEVBQUUsQ0FBQztJQUFBLENBQUM7SUFBQ3FELFdBQVcsRUFBQztFQUFlLENBQUUsQ0FBQyxlQUNwSy9DLDJEQUFBO0lBQVFtRyxPQUFPLEVBQUVkO0VBQXdCLEdBQUMsWUFBa0IsQ0FBQyxFQUU1RHRCLFlBQVksSUFBSUEsWUFBWSxDQUFDdUMsTUFBTSxHQUFHLENBQUMsZ0JBQ3BDdEcsMkRBQUEsMkJBQ0lBLDJEQUFBLGFBQUksK0JBQThCLENBQUMsZUFDbkNBLDJEQUFBLDZCQUNJQSwyREFBQSw2QkFDSUEsMkRBQUEsMEJBQ0lBLDJEQUFBLGFBQUksS0FBTyxDQUFDLGVBQ1pBLDJEQUFBLGFBQUksV0FBVSxDQUFDLGVBQ2ZBLDJEQUFBLGFBQUksbUJBQXFCLENBQUMsZUFDMUJBLDJEQUFBLGFBQUksT0FBUyxDQUFDLGVBQ2RBLDJEQUFBLGFBQUksU0FBVyxDQUNmLENBQ0QsQ0FBQyxlQUNSQSwyREFBQSxnQkFDSytELFlBQVksQ0FBQ3FDLEdBQUcsQ0FBQyxVQUFBRyxNQUFNO0lBQUEsb0JBQ3BCdkcsMkRBQUE7TUFBSVAsR0FBRyxFQUFFOEcsTUFBTSxDQUFDekU7SUFBRyxnQkFDZjlCLDJEQUFBLGFBQUt1RyxNQUFNLENBQUMxRCxHQUFRLENBQUMsZUFDckI3QywyREFBQSxhQUFLdUcsTUFBTSxDQUFDdkQsTUFBVyxDQUFDLGVBQ3hCaEQsMkRBQUEsYUFBS3VHLE1BQU0sQ0FBQ3RELGFBQWtCLENBQUMsZUFDL0JqRCwyREFBQSxhQUFLdUcsTUFBTSxDQUFDckQsS0FBVSxDQUFDLGVBQ3ZCbEQsMkRBQUEsYUFBS3VHLE1BQU0sQ0FBQ3BELE1BQU0sRUFBQyxHQUFDLEVBQUNvRCxNQUFNLENBQUNuRCxNQUFXLENBQ3ZDLENBQUM7RUFBQSxDQUNSLENBQ0UsQ0FDSixDQUFDLGVBQ1JwRCwyREFBQTtJQUFRbUcsT0FBTyxFQUFFTjtFQUFzQixHQUNsQ3RCLGVBQWUsR0FBRyxzQkFBc0IsR0FBRywwQ0FDeEMsQ0FDUCxDQUFDLGdCQUdGdkUsMkRBQUEsWUFBRyx1Q0FBcUMsQ0FFL0MsQ0FBQyxFQUVMdUUsZUFBZSxpQkFDWnZFLDJEQUFBLENBQUNFLDBEQUFZO0lBQ1RpQixlQUFlLEVBQUV3RCxlQUFnQjtJQUNqQ3ZELFlBQVksRUFBRXlFLHFCQUFzQjtJQUNwQ3RCLGVBQWUsRUFBRUEsZUFBZ0I7SUFDakNVLGdCQUFnQixFQUFFQTtFQUFpQixDQUN0QyxDQUVKLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWU5RSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTDVCLFNBQVNKLGlDQUFpQ0EsQ0FBQ2UsT0FBTyxFQUFFO0VBQ2hELElBQU0wRixnQkFBZ0IsR0FBRyxDQUFDLENBQUM7RUFDM0IsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUF3QkEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3BDQSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFDbkgsR0FBRztNQUFBLE9BQU0rRyxnQkFBZ0IsQ0FBQy9HLEdBQUcsQ0FBQyxHQUFHaUgsQ0FBQyxDQUFDakgsR0FBRyxDQUFDLFdBQVE7SUFBQSxDQUFDLENBQUM7RUFDdkUsQ0FBQztFQUNEZ0gsd0JBQXdCLENBQUMzRixPQUFPLENBQUM7RUFDakMrRixNQUFNLENBQUNDLHFCQUFxQixHQUFHLFVBQUN0RSxJQUFJLEVBQUs7SUFDckMsSUFBTXVFLFNBQVMsR0FBR1AsZ0JBQWdCLE1BQUF6RSxNQUFBLENBQU1TLElBQUksVUFBTyxJQUFJZ0UsZ0JBQWdCLE1BQUF6RSxNQUFBLENBQU1TLElBQUksVUFBTztJQUN4RixJQUFJLE9BQU91RSxTQUFTLEtBQUssV0FBVyxFQUFFO01BQ2xDLElBQU1DLGNBQWMsR0FBR0MsTUFBTSxDQUFDTixJQUFJLENBQUNILGdCQUFnQixDQUFDLENBQUNKLEdBQUcsQ0FBQyxVQUFDM0csR0FBRztRQUFBLE9BQUtBLEdBQUcsQ0FBQ3lILE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUNBLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUNBLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO01BQUEsRUFBQztNQUNoSSxNQUFNLElBQUlDLEtBQUssdUJBQUFwRixNQUFBLENBQXNCUyxJQUFJLDBDQUFBVCxNQUFBLENBQXNDaUYsY0FBYyxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUUsQ0FBQztJQUMvRztJQUNBLE9BQU9MLFNBQVM7RUFDcEIsQ0FBQztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkMEI7QUFDUztBQUNhO0FBRWhELElBQUkxRyxVQUFVO0FBRWQsSUFBSWlILENBQUMsR0FBR0QsdUNBQVU7QUFDbEIsSUFBSUUsS0FBcUMsRUFBRSxFQUcxQyxNQUFNO0VBQ0wsSUFBSUksQ0FBQyxHQUFHTCxDQUFDLENBQUNNLGtEQUFrRDtFQUM1RHZILFVBQVUsR0FBRyxTQUFBQSxXQUFTd0gsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDMUJILENBQUMsQ0FBQ0kscUJBQXFCLEdBQUcsSUFBSTtJQUM5QixJQUFJO01BQ0YsT0FBT1QsQ0FBQyxDQUFDakgsVUFBVSxDQUFDd0gsQ0FBQyxFQUFFQyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxTQUFTO01BQ1JILENBQUMsQ0FBQ0kscUJBQXFCLEdBQUcsS0FBSztJQUNqQztFQUNGLENBQUM7QUFDSDtBQUFDLElBRUtDLFNBQVMsMEJBQUEvSSxXQUFBO0VBQUFDLFNBQUEsQ0FBQThJLFNBQUEsRUFBQS9JLFdBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQTRJLFNBQUE7RUFBQSxTQUFBQSxVQUFBO0lBQUEzSSxlQUFBLE9BQUEySSxTQUFBO0lBQUEsT0FBQTdJLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBd0ksU0FBQTtJQUFBdkksR0FBQTtJQUFBQyxLQUFBLEVBQ1gsU0FBQUMsUUFBQSxFQUFVO01BQ04sSUFBTXNJLEtBQUssR0FBRyxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJO01BQ3RELElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsRUFBRTtRQUFFcEIsU0FBUyxFQUFFLElBQUksQ0FBQ3FCLGNBQWM7UUFBRUgsS0FBSyxFQUFFQTtNQUFNLENBQUMsQ0FBQztNQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDRyxjQUFjLEVBQUU7UUFDdEIsTUFBTSxJQUFJakIsS0FBSyxDQUFDLHlCQUF5QixDQUFDO01BQzlDO01BQ0EsSUFBTUosU0FBUyxHQUFHRixNQUFNLENBQUNDLHFCQUFxQixDQUFDLElBQUksQ0FBQ3NCLGNBQWMsQ0FBQztNQUNuRSxJQUFJLENBQUNDLG1CQUFtQixlQUFDckksMkRBQW1CLENBQUMrRyxTQUFTLEVBQUVrQixLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7TUFDckUsSUFBSSxDQUFDRSxhQUFhLENBQUMsT0FBTyxFQUFFO1FBQ3hCRyxhQUFhLEVBQUUsSUFBSSxDQUFDRixjQUFjO1FBQ2xDckIsU0FBUyxFQUFFQSxTQUFTO1FBQ3BCa0IsS0FBSyxFQUFFQTtNQUNYLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQXhJLEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUE2SSxXQUFBLEVBQWE7TUFDVCxJQUFJLENBQUMzSSxPQUFPLENBQUNRLElBQUksQ0FBQ29JLE9BQU8sQ0FBQyxDQUFDO01BQzNCLElBQUksQ0FBQ0wsYUFBYSxDQUFDLFNBQVMsRUFBRTtRQUMxQnBCLFNBQVMsRUFBRSxJQUFJLENBQUNxQixjQUFjO1FBQzlCSCxLQUFLLEVBQUUsSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDQSxVQUFVLEdBQUc7TUFDL0MsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBekksR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQTJJLG9CQUFvQkksWUFBWSxFQUFFO01BQzlCLElBQU03SSxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPO01BQzVCLElBQUksQ0FBQ0EsT0FBTyxDQUFDUSxJQUFJLEVBQUU7UUFDZlIsT0FBTyxDQUFDUSxJQUFJLEdBQUdDLFVBQVUsQ0FBQyxJQUFJLENBQUNULE9BQU8sQ0FBQztNQUMzQztNQUNBQSxPQUFPLENBQUNRLElBQUksQ0FBQ0ksTUFBTSxDQUFDaUksWUFBWSxDQUFDO0lBQ3JDO0VBQUM7SUFBQWhKLEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUF5SSxjQUFjM0YsSUFBSSxFQUFFa0csT0FBTyxFQUFFO01BQ3pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDbkcsSUFBSSxFQUFFO1FBQUVvRyxNQUFNLEVBQUVGLE9BQU87UUFBRUcsTUFBTSxFQUFFO01BQVEsQ0FBQyxDQUFDO0lBQzdEO0VBQUM7RUFBQSxPQUFBYixTQUFBO0FBQUEsRUEvQm1CakosMkRBQVU7QUFpQ2xDaUosU0FBUyxDQUFDYyxNQUFNLEdBQUc7RUFDZi9CLFNBQVMsRUFBRWdDLE1BQU07RUFDakJkLEtBQUssRUFBRWhCO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzFERCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvSGFiaXRhbnRGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvTGlzdEhhYml0YW50cy5qc3giLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVnaXN0ZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LXJlYWN0L2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtcmVhY3QtLXJlYWN0JzogY29udHJvbGxlcl8wLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XG5pbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCBIYWJpdGFudEZvcm0gZnJvbSAnLi9yZWFjdC9jb250cm9sbGVycy9IYWJpdGFudEZvcm0uanN4JztcbmltcG9ydCBMaXN0SGFiaXRhbnRzIGZyb20gJy4vcmVhY3QvY29udHJvbGxlcnMvTGlzdEhhYml0YW50cy5qc3gnO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9uLWNvbXBvc2FudCcpXG4pO1xuXG5yb290LnJlbmRlcihcbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgPEhhYml0YW50Rm9ybS8+XG4gICAgICAgIDxMaXN0SGFiaXRhbnRzLz5cbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4pXG5cblxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgSGFiaXRhbnRGb3JtID0gKHsgaGFiaXRhbnRJbml0aWFsID0ge30sIG9uQ29tcGxldGlvbiB9KSA9PiB7XG4gICAgY29uc3QgW2hhYml0YW50LCBzZXRIYWJpdGFudF0gPSB1c2VTdGF0ZShoYWJpdGFudEluaXRpYWwpO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHVybCA9IGhhYml0YW50LmlkID8gYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9oYWJpdGFudHMvJHtoYWJpdGFudC5pZH1gIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9oYWJpdGFudHMnO1xuICAgICAgICBjb25zdCBtZXRob2QgPSBoYWJpdGFudC5pZCA/ICdwdXQnIDogJ3Bvc3QnO1xuXG4gICAgICAgIGF4aW9zKHsgbWV0aG9kLCB1cmwsIGRhdGE6IGhhYml0YW50IH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiBvbkNvbXBsZXRpb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBzYXV2ZWdhcmRlJywgZXJyb3IpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgc2V0SGFiaXRhbnQoeyAuLi5oYWJpdGFudCwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJub21cIiB2YWx1ZT17aGFiaXRhbnQubm9tfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIk5vbVwiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByZW5vbVwiIHZhbHVlPXtoYWJpdGFudC5wcmVub219IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiUHLDqW5vbVwiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVOYWlzc2FuY2VcIiB2YWx1ZT17aGFiaXRhbnQuZGF0ZU5haXNzYW5jZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJnZW5yZVwiIHZhbHVlPXtoYWJpdGFudC5nZW5yZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Tw6lsZWN0aW9ubmV6IGxlIGdlbnJlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJob21tZVwiPkhvbW1lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmZW1tZVwiPkZlbW1lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhdXRyZVwiPkF1dHJlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwibnVtZXJvXCIgdmFsdWU9e2hhYml0YW50Lm51bWVyb30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJOdW3DqXJvIGRlIHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5vbVJ1ZVwiIHZhbHVlPXtoYWJpdGFudC5ub21SdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiTm9tIGRlIGxhIHJ1ZVwiIC8+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXV2ZWdhcmRlcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGFiaXRhbnRGb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEhhYml0YW50Rm9ybSBmcm9tICcuL0hhYml0YW50Rm9ybS5qc3gnO1xuXG5jb25zdCBMaXN0SGFiaXRhbnRzID0gKHsgb25FZGl0IH0pID0+IHtcbiAgICBjb25zdCBbaGFiaXRhbnRzLCBzZXRIYWJpdGFudHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtlZGl0aW5nSGFiaXRhbnQsIHNldEVkaXRpbmdIYWJpdGFudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc2VhcmNoUmVzdWx0LCBzZXRTZWFyY2hSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3NlYXJjaERhdGEsIHNldFNlYXJjaERhdGFdID0gdXNlU3RhdGUoeyBudW1lcm86ICcnLCBub21SdWU6ICcnIH0pO1xuICAgIGNvbnN0IFtpc0FkZHJlc3NMb2NrZWQsIHNldElzQWRkcmVzc0xvY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2FkZEhhYml0YW50RGF0YSwgc2V0QWRkSGFiaXRhbnREYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbc2hvd0xpc3QsIHNldFNob3dMaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzaG93TGlzdCkge1xuICAgICAgICAgICAgcmVmcmVzaEhhYml0YW50cygpO1xuICAgICAgICB9XG4gICAgfSwgW3Nob3dMaXN0XSk7XG5cbiAgICBjb25zdCBkZWxldGVIYWJpdGFudCA9IChpZCkgPT4ge1xuICAgICAgICBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9oYWJpdGFudHMvJHtpZH1gKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEhhYml0YW50cyhoYWJpdGFudHMuZmlsdGVyKGhhYml0YW50ID0+IGhhYml0YW50LmlkICE9PSBpZCkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbicsIGVycm9yKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVkaXRIYWJpdGFudCA9IChoYWJpdGFudCkgPT4ge1xuICAgICAgICBpZiAoZWRpdGluZ0hhYml0YW50ICYmIGVkaXRpbmdIYWJpdGFudC5pZCA9PT0gaGFiaXRhbnQuaWQpIHtcbiAgICAgICAgICAgIHNldEVkaXRpbmdIYWJpdGFudChudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEVkaXRpbmdIYWJpdGFudChoYWJpdGFudCk7XG4gICAgICAgICAgICBvbkVkaXQoaGFiaXRhbnQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNlYXJjaEhhYml0YW50QnlBZGRyZXNzID0gKCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvaGFiaXRhbnRzL3NlYXJjaCcsIHNlYXJjaERhdGEpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkU2VhcmNoUmVzdWx0ID0gcmVzcG9uc2UuZGF0YS5zb3J0KChhLCBiKSA9PiBhLm5vbS5sb2NhbGVDb21wYXJlKGIubm9tKSk7XG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoUmVzdWx0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcmVjaGVyY2hlIHBhciBhZHJlc3NlJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNldFNlYXJjaFJlc3VsdChudWxsKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVBZGRIYWJpdGFudEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHNldElzQWRkcmVzc0xvY2tlZCghaXNBZGRyZXNzTG9ja2VkKTtcbiAgICAgICAgc2V0QWRkSGFiaXRhbnREYXRhKHsgbnVtZXJvOiBzZWFyY2hEYXRhLm51bWVybywgbm9tUnVlOiBzZWFyY2hEYXRhLm5vbVJ1ZSB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkSGFiaXRhbnRXaXRoU2FtZUFkZHJlc3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0hhYml0YW50RGF0YSA9IHtcbiAgICAgICAgICAgIG51bWVybzogc2VhcmNoRGF0YS5udW1lcm8sXG4gICAgICAgICAgICBub21SdWU6IHNlYXJjaERhdGEubm9tUnVlLFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmVmcmVzaEhhYml0YW50cygpO1xuICAgICAgICBzZXRBZGRIYWJpdGFudERhdGEoe30pO1xuICAgICAgICBzZXRJc0FkZHJlc3NMb2NrZWQodHJ1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlZnJlc2hIYWJpdGFudHMgPSAoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2hhYml0YW50cycpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkSGFiaXRhbnRzID0gcmVzcG9uc2UuZGF0YS5zb3J0KChhLCBiKSA9PiBhLm5vbS5sb2NhbGVDb21wYXJlKGIubm9tKSk7XG4gICAgICAgICAgICAgICAgc2V0SGFiaXRhbnRzKHNvcnRlZEhhYml0YW50cyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBoYWJpdGFudHMnLCBlcnJvcikpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVMaXN0ID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93TGlzdCghc2hvd0xpc3QpO1xuICAgICAgICBpZiAoc2hvd0xpc3QpIHtcbiAgICAgICAgICAgIHJlZnJlc2hIYWJpdGFudHMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVMaXN0fT5cbiAgICAgICAgICAgICAgICB7c2hvd0xpc3QgPyAnTWFzcXVlciBsYSBsaXN0ZSBkZXMgaGFiaXRhbnRzJyA6ICdBZmZpY2hlciBsYSBsaXN0ZSBkZXMgaGFiaXRhbnRzJ31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICB7c2hvd0xpc3QgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVmcmVzaEhhYml0YW50c30+QWN0dWFsaXNlciBsYSBsaXN0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7ZWRpdGluZ0hhYml0YW50ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk1vZGlmaWNhdGlvbiBkJ3VuIGhhYml0YW50PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGFiaXRhbnRGb3JtIGhhYml0YW50SW5pdGlhbD17ZWRpdGluZ0hhYml0YW50fSBvbkNvbXBsZXRpb249eygpID0+IHNldEVkaXRpbmdIYWJpdGFudChudWxsKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Tm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByw6lub208L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZSBkZSBOYWlzc2FuY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+R2VucmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWRyZXNzZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFiaXRhbnRzLm1hcChoYWJpdGFudCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2hhYml0YW50LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aGFiaXRhbnQubm9tfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2hhYml0YW50LnByZW5vbX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntoYWJpdGFudC5kYXRlTmFpc3NhbmNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2hhYml0YW50LmdlbnJlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2hhYml0YW50Lm51bWVyb30ge2hhYml0YW50Lm5vbVJ1ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdEhhYml0YW50KGhhYml0YW50KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlZGl0aW5nSGFiaXRhbnQgJiYgZWRpdGluZ0hhYml0YW50LmlkID09PSBoYWJpdGFudC5pZCA/ICdGZXJtZXIgbGUgZm9ybXVsYWlyZScgOiAnTW9kaWZpZXInfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSGFiaXRhbnQoaGFiaXRhbnQuaWQpfT5TdXBwcmltZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+UmVjaGVyY2hlIHBhciBBZHJlc3NlPC9oMj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibnVtZXJvXCIgdmFsdWU9e3NlYXJjaERhdGEubnVtZXJvfSBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaERhdGEoeyAuLi5zZWFyY2hEYXRhLCBudW1lcm86IGUudGFyZ2V0LnZhbHVlIH0pfSBwbGFjZWhvbGRlcj1cIk51bcOpcm8gZGUgcnVlXCIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibm9tUnVlXCIgdmFsdWU9e3NlYXJjaERhdGEubm9tUnVlfSBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaERhdGEoeyAuLi5zZWFyY2hEYXRhLCBub21SdWU6IGUudGFyZ2V0LnZhbHVlIH0pfSBwbGFjZWhvbGRlcj1cIk5vbSBkZSBsYSBydWVcIiAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VhcmNoSGFiaXRhbnRCeUFkZHJlc3N9PlJlY2hlcmNoZXI8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIHtzZWFyY2hSZXN1bHQgJiYgc2VhcmNoUmVzdWx0Lmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UsOpc3VsdGF0IGRlIGxhIHJlY2hlcmNoZSA6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByw6lub208L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGUgZGUgTmFpc3NhbmNlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5HZW5yZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWRyZXNzZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hSZXN1bHQubWFwKHJlc3VsdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtyZXN1bHQuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cmVzdWx0Lm5vbX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cmVzdWx0LnByZW5vbX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cmVzdWx0LmRhdGVOYWlzc2FuY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jlc3VsdC5nZW5yZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cmVzdWx0Lm51bWVyb30ge3Jlc3VsdC5ub21SdWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVBZGRIYWJpdGFudEZvcm19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0FkZHJlc3NMb2NrZWQgPyAnRmVybWVyIGxlIGZvcm11bGFpcmUnIDogJ0Fqb3V0ZXIgdW4gaGFiaXRhbnQgYXZlYyBsYSBtw6ptZSBhZHJlc3NlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXVjdW4gcsOpc3VsdGF0IHBvdXIgY2V0dGUgYWRyZXNzZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2lzQWRkcmVzc0xvY2tlZCAmJiAoXG4gICAgICAgICAgICAgICAgPEhhYml0YW50Rm9ybVxuICAgICAgICAgICAgICAgICAgICBoYWJpdGFudEluaXRpYWw9e2FkZEhhYml0YW50RGF0YX1cbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0aW9uPXt0b2dnbGVBZGRIYWJpdGFudEZvcm19XG4gICAgICAgICAgICAgICAgICAgIGlzQWRkcmVzc0xvY2tlZD17aXNBZGRyZXNzTG9ja2VkfVxuICAgICAgICAgICAgICAgICAgICByZWZyZXNoSGFiaXRhbnRzPXtyZWZyZXNoSGFiaXRhbnRzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEhhYml0YW50cztcbiIsImZ1bmN0aW9uIHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVhY3RDb250cm9sbGVycyA9IHt9O1xuICAgIGNvbnN0IGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyA9IChyKSA9PiB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4gKHJlYWN0Q29udHJvbGxlcnNba2V5XSA9IHIoa2V5KS5kZWZhdWx0KSk7XG4gICAgfTtcbiAgICBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMoY29udGV4dCk7XG4gICAgd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS5qc3hgXSB8fCByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0udHN4YF07XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3QgcG9zc2libGVWYWx1ZXMgPSBPYmplY3Qua2V5cyhyZWFjdENvbnRyb2xsZXJzKS5tYXAoKGtleSkgPT4ga2V5LnJlcGxhY2UoJy4vJywgJycpLnJlcGxhY2UoJy5qc3gnLCAnJykucmVwbGFjZSgnLnRzeCcsICcnKSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlYWN0IGNvbnRyb2xsZXIgXCIke25hbWV9XCIgZG9lcyBub3QgZXhpc3QuIFBvc3NpYmxlIHZhbHVlczogJHtwb3NzaWJsZVZhbHVlcy5qb2luKCcsICcpfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlcXVpcmUkJDAgZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG52YXIgY3JlYXRlUm9vdDtcblxudmFyIG0gPSByZXF1aXJlJCQwO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgY3JlYXRlUm9vdCA9IG0uY3JlYXRlUm9vdDtcbiAgbS5oeWRyYXRlUm9vdDtcbn0gZWxzZSB7XG4gIHZhciBpID0gbS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcbiAgY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmNyZWF0ZVJvb3QoYywgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGw7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIHsgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogcHJvcHMgfSk7XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21wb25lbnQgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX3JlbmRlclJlYWN0RWxlbWVudChSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMsIG51bGwpKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yb290LnVubW91bnQoKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd1bm1vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVuZGVyUmVhY3RFbGVtZW50KHJlYWN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICBpZiAoIWVsZW1lbnQucm9vdCkge1xuICAgICAgICAgICAgZWxlbWVudC5yb290ID0gY3JlYXRlUm9vdCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQucm9vdC5yZW5kZXIocmVhY3RFbGVtZW50KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ3JlYWN0JyB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIGNvbXBvbmVudDogU3RyaW5nLFxuICAgIHByb3BzOiBPYmplY3QsXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0IiwicmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIiwiUmVhY3QiLCJSZWFjdERPTSIsIkhhYml0YW50Rm9ybSIsIkxpc3RIYWJpdGFudHMiLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiU3RyaWN0TW9kZSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsInVzZVN0YXRlIiwiYXhpb3MiLCJfcmVmIiwiX3JlZiRoYWJpdGFudEluaXRpYWwiLCJoYWJpdGFudEluaXRpYWwiLCJvbkNvbXBsZXRpb24iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJoYWJpdGFudCIsInNldEhhYml0YW50IiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsImlkIiwiY29uY2F0IiwibWV0aG9kIiwiZGF0YSIsInRoZW4iLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVDaGFuZ2UiLCJfZXZlbnQkdGFyZ2V0IiwidGFyZ2V0IiwibmFtZSIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJvblN1Ym1pdCIsInR5cGUiLCJub20iLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwicHJlbm9tIiwiZGF0ZU5haXNzYW5jZSIsImdlbnJlIiwibnVtZXJvIiwibm9tUnVlIiwidXNlRWZmZWN0Iiwib25FZGl0IiwiaGFiaXRhbnRzIiwic2V0SGFiaXRhbnRzIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlZGl0aW5nSGFiaXRhbnQiLCJzZXRFZGl0aW5nSGFiaXRhbnQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInNlYXJjaFJlc3VsdCIsInNldFNlYXJjaFJlc3VsdCIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4Iiwic2VhcmNoRGF0YSIsInNldFNlYXJjaERhdGEiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJpc0FkZHJlc3NMb2NrZWQiLCJzZXRJc0FkZHJlc3NMb2NrZWQiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiYWRkSGFiaXRhbnREYXRhIiwic2V0QWRkSGFiaXRhbnREYXRhIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInNob3dMaXN0Iiwic2V0U2hvd0xpc3QiLCJyZWZyZXNoSGFiaXRhbnRzIiwiZGVsZXRlSGFiaXRhbnQiLCJmaWx0ZXIiLCJlZGl0SGFiaXRhbnQiLCJzZWFyY2hIYWJpdGFudEJ5QWRkcmVzcyIsInBvc3QiLCJyZXNwb25zZSIsInNvcnRlZFNlYXJjaFJlc3VsdCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJ0b2dnbGVBZGRIYWJpdGFudEZvcm0iLCJhZGRIYWJpdGFudFdpdGhTYW1lQWRkcmVzcyIsIm5ld0hhYml0YW50RGF0YSIsImdldCIsInNvcnRlZEhhYml0YW50cyIsInRvZ2dsZUxpc3QiLCJvbkNsaWNrIiwibWFwIiwiZSIsImxlbmd0aCIsInJlc3VsdCIsInJlYWN0Q29udHJvbGxlcnMiLCJpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMiLCJyIiwia2V5cyIsImZvckVhY2giLCJ3aW5kb3ciLCJyZXNvbHZlUmVhY3RDb21wb25lbnQiLCJjb21wb25lbnQiLCJwb3NzaWJsZVZhbHVlcyIsIk9iamVjdCIsInJlcGxhY2UiLCJFcnJvciIsImpvaW4iLCJyZXF1aXJlJCQwIiwibSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImh5ZHJhdGVSb290IiwiaSIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiYyIsIm8iLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJkZWZhdWx0XzEiLCJwcm9wcyIsInByb3BzVmFsdWUiLCJkaXNwYXRjaEV2ZW50IiwiY29tcG9uZW50VmFsdWUiLCJfcmVuZGVyUmVhY3RFbGVtZW50IiwiY29tcG9uZW50TmFtZSIsImRpc2Nvbm5lY3QiLCJ1bm1vdW50IiwicmVhY3RFbGVtZW50IiwicGF5bG9hZCIsImRpc3BhdGNoIiwiZGV0YWlsIiwicHJlZml4IiwidmFsdWVzIiwiU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==