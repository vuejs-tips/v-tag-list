<template lang="html">
  <input type="text" v-model="editableValue">
</template>

<script>
const VTagInput = {
  name: 'v-tag-input',
  props: {
    value: {
      type: Array,
      default: () => [] // factory function
    },
    separator: {
      type: String,
      default: ' '
    }
  },
  computed: {
    editableValue: {
      get () {
        return (this.value || []).join(this.separator)
      },
      set (newValue) {
        this.$emit('input', newValue.split(this.separator))
      }
    }
  }
}

export default VTagInput

if (windows && window.Vue) { // auto register if Vue is global
  Vue.component(VTagInput.name, VTagInput)
}
</script>
