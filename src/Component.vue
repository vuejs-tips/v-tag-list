<template lang="html">
  <div class="v-tag-list">
    <span v-for="tag, index in value" :class="activeTheme.tag" style="margin-right: 2px">
      {{tag}}
      <i v-if="removable" :class="activeTheme.remove" @click="remove(index)">
        <span v-if="theme === 'bootstrap'">&times;</span>
        <span v-if="theme === 'materialize'">close</span>
      </i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'v-tag-list',
  props: {
    value: {
      type: Array,
      default: () => [] // factory function
    },
    theme: {
      type: [String, Object],
      default: ''
    },
    removable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    activeTheme () {
      return (typeof this.theme === 'string') ? (this.$options.themes[this.theme] || {})
                                              : (this.theme || {})
    }
  },
  methods: {
    remove (index) {
      var clonedValue = this.value.slice()
      clonedValue.splice(index, 1)
      this.$emit('input', clonedValue)
    }
  },
  themes: {
    bulma: {
      tag: 'tag is-info',
      remove: 'delete is-small'
    },
    'semantic-ui': {
      tag: 'ui small blue label tag',
      remove: 'delete icon'
    },
    materialize: {
      tag: 'chip',
      remove: 'close material-icons'
    },
    bootstrap: {
      tag: 'badge badge-primary d-inline-flex align-items-center',
      remove: 'close'
    }
  }
}
</script>
