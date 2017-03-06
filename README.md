[![npm](https://img.shields.io/npm/v/v-tag-list.svg)]()

# Vue Tag List

Tiny tag list view for Vue.js

## Demo

https://htmlpreview.github.io/?https://github.com/vuejs-tips/v-tag-list/master/examples/example.html

## Usage

Just bind an array of tags using `v-model` directive or **value** property.

There's a separator property default to use *space*, but you can change it to *comma*.  

```html
<template>
  <div>
    <v-tag-list v-model="tags" theme="semantic-ui"></v-tag-list> {{tags}}
  </div>
</template>

<script>
import VTagList from 'v-tag-list'

export default {
  components: {VTagList},
  data () {
    return {
      tags: ['php', 'ruby', 'javascript', 'python', 'java', 'c#', 'scala', 'closure']
    }
  }
}
</script>
```

## Installation

### Using yarn

`yarn add v-tag-list`

### Using npm

`npm i --save v-tag-list`

## Contribution

You're free to contribute to this project by submitting [issues](https://github.com/vuejs-tips/v-tag-list.svg/issues) and/or [pull requests](https://github.com/vuejs-tips/v-tag-list.svg/pulls). This project is test-driven, so keep in mind that every change and new feature should be covered by tests. Your name will be added to the hall of fame ;)

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)

Build inspired by [vue-plugin-template](https://github.com/posva/vue-plugin-template)
