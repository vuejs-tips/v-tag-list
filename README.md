[![npm](https://img.shields.io/npm/v/v-tag-input.svg.svg)]()

# Vue Tag Input

Tiny tag input for Vue.js

## Demo

https://jsfiddle.net/neves/7wenm8rv/3/

## Usage

Just bind an array of tags to `v-model` property

```html
<template>
<div>
  <v-tag-input v-model="tags"></v-tag-input> {{tags}}
</div>
</template>

<script>
import VTagInput from 'v-tag-input'

export default {
  components: {VTagInput},
  data () {
    return {
      tags: ['foo', 'bar']
    }
  }
}
</script>
```

## Installation

### Using yarn

`yarn add v-tag-input`

### Using npm

`npm i v-tag-input`

## Contribution

You're free to contribute to this project by submitting [issues](https://github.com/vuejs-tips/v-tag-input.svg/issues) and/or [pull requests](https://github.com/vuejs-tips/v-tag-input.svg/pulls). This project is test-driven, so keep in mind that every change and new feature should be covered by tests. Your name will be added to the hall of fame ;)

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
Build inspired by [vue-plugin-template](https://github.com/posva/vue-plugin-template)
