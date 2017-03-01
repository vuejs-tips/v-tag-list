<template lang="html">
<div>
  <h4>v-model</h4>
  <v-tag-input v-model="tags"></v-tag-input>

  <h4>:value only</h4>
  <v-tag-input :value="tags"></v-tag-input>

  <h4>@input only</h4>
  <v-tag-input @input="tags = arguments[0]"></v-tag-input>

  <h4>Use comma as separator</h4>
  <v-tag-input v-model="tags" separator=","></v-tag-input>

  <h4>v-model undefined data</h4>
  <v-tag-input v-model="undef"></v-tag-input>{{undef}}

  <h4>v-model null data</h4>
  <v-tag-input v-model="nil"></v-tag-input>{{nil}}

  <pre>{{tags}}</pre>
</div>
</template>

<script>
// can import from js, or directly from .vue
import {VTagInput} from './v-tag-input.js'
// import VTagInput from './v-tag-input.vue'

export default {
  components: {VTagInput},
  data () {
    return {
      tags: ['foo', 'bar'],
      undef: undefined,
      nil: null
    }
  }
}
</script>
