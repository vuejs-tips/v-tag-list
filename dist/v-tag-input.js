(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VTagInput"] = factory();
	else
		root["VTagInput"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(3),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'v-tag-input',
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      } // factory function
    },
    separator: {
      type: String,
      default: ' '
    }
  },
  computed: {
    editableValue: {
      get: function get() {
        return (this.value || []).join(this.separator);
      },
      set: function set(newValue) {
        this.$emit('input', newValue.split(this.separator));
      }
    }
  }
};

if (window && window.Vue && this.default) {
  // auto register if Vue is global
  Vue.component(this.default.name, this.default);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInYtdGFnLWlucHV0LnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwicHJvcHMiLCJ2YWx1ZSIsInR5cGUiLCJBcnJheSIsImRlZmF1bHQiLCJzZXBhcmF0b3IiLCJTdHJpbmciLCJjb21wdXRlZCIsImVkaXRhYmxlVmFsdWUiLCJnZXQiLCJqb2luIiwic2V0IiwibmV3VmFsdWUiLCIkZW1pdCIsInNwbGl0Iiwid2luZG93IiwiVnVlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2JBLFFBQU0sYUFETztBQUViQyxTQUFPO0FBQ0xDLFdBQU87QUFDTEMsWUFBTUMsS0FERDtBQUVMQyxlQUFTO0FBQUEsZUFBTSxFQUFOO0FBQUEsT0FGSixDQUVhO0FBRmIsS0FERjtBQUtMQyxlQUFXO0FBQ1RILFlBQU1JLE1BREc7QUFFVEYsZUFBUztBQUZBO0FBTE4sR0FGTTtBQVliRyxZQUFVO0FBQ1JDLG1CQUFlO0FBQ2JDLFNBRGEsaUJBQ047QUFDTCxlQUFPLENBQUMsS0FBS1IsS0FBTCxJQUFjLEVBQWYsRUFBbUJTLElBQW5CLENBQXdCLEtBQUtMLFNBQTdCLENBQVA7QUFDRCxPQUhZO0FBSWJNLFNBSmEsZUFJUkMsUUFKUSxFQUlFO0FBQ2IsYUFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JELFNBQVNFLEtBQVQsQ0FBZSxLQUFLVCxTQUFwQixDQUFwQjtBQUNEO0FBTlk7QUFEUDtBQVpHLENBQWY7O0FBd0JBLElBQUlVLFVBQVVBLE9BQU9DLEdBQWpCLElBQXdCLEtBQUtaLE9BQWpDLEVBQTBDO0FBQUU7QUFDMUNZLE1BQUlDLFNBQUosQ0FBYyxLQUFLYixPQUFMLENBQWFMLElBQTNCLEVBQWlDLEtBQUtLLE9BQXRDO0FBQ0QiLCJmaWxlIjoidi10YWctaW5wdXQudnVlIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uZXZlcy9Eb2N1bWVudHMvZ2l0L3Z1ZWpzLXRpcHMvdi10YWctaW5wdXQiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICd2LXRhZy1pbnB1dCcsXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10gLy8gZmFjdG9yeSBmdW5jdGlvblxuICAgIH0sXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnICdcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZWRpdGFibGVWYWx1ZToge1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlIHx8IFtdKS5qb2luKHRoaXMuc2VwYXJhdG9yKVxuICAgICAgfSxcbiAgICAgIHNldCAobmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBuZXdWYWx1ZS5zcGxpdCh0aGlzLnNlcGFyYXRvcikpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlmICh3aW5kb3cgJiYgd2luZG93LlZ1ZSAmJiB0aGlzLmRlZmF1bHQpIHsgLy8gYXV0byByZWdpc3RlciBpZiBWdWUgaXMgZ2xvYmFsXG4gIFZ1ZS5jb21wb25lbnQodGhpcy5kZWZhdWx0Lm5hbWUsIHRoaXMuZGVmYXVsdClcbn1cbiJdfQ==

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editableValue),
      expression: "editableValue"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm._s(_vm.editableValue)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editableValue = $event.target.value
      }
    }
  })
},staticRenderFns: []}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});