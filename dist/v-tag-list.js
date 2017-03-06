var VTagList=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=5)}([function(e,t,n){var r=n(2);e.exports=r,r.install=function(e){return e.component(r.name,r)},r.version="0.0.1","undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"v-tag-list",props:{value:{type:Array,default:function(){return[]}},theme:{type:[String,Object],default:""},removable:{type:Boolean,default:!0}},computed:{activeTheme:function(){return"string"==typeof this.theme?this.$options.themes[this.theme]||{}:this.theme||{}}},methods:{remove:function(e){var t=this.value.slice();t.splice(e,1),this.$emit("input",t)}},themes:{bulma:{tag:"tag is-info",remove:"delete is-small"},"semantic-ui":{tag:"ui small blue label tag",remove:"delete icon"},materialize:{tag:"chip",remove:"close material-icons"},bootstrap:{tag:"badge badge-primary d-inline-flex align-items-center",remove:"close"}}}},function(e,t,n){var r=n(3)(n(1),n(4),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var u=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];u[e]=function(){return t}})}return{esModule:o,exports:i,options:s}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-tag-list"},e._l(e.value,function(t,r){return n("span",{class:e.activeTheme.tag,staticStyle:{"margin-right":"2px"}},[e._v("\n    "+e._s(t)+"\n    "),e.removable?n("i",{class:e.activeTheme.remove,on:{click:function(t){e.remove(r)}}},["bootstrap"===e.theme?n("span",[e._v("×")]):e._e(),e._v(" "),"materialize"===e.theme?n("span",[e._v("close")]):e._e()]):e._e()])}))},staticRenderFns:[]}},function(e,t,n){e.exports=n(0)}]);