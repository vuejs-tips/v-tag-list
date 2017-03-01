import VTagInput from './v-tag-input.vue'

function plugin (Vue) {
  Vue.component('v-tag-input', VTagInput)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
export {VTagInput}
