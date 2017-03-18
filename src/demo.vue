<template lang="html">
<div class="ui container" style="padding-top: 50px">

  <h1 class="title is-1">v-tag-list ({{version}})</h1>

  <link v-if="theme == 'semantic-ui'" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css" rel="stylesheet">
  <link v-if="theme == 'bulma'" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.2/css/bulma.min.css" rel="stylesheet">
  <link v-if="theme == 'materialize'" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet">
  <link v-if="theme == 'bootstrap'" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" rel="stylesheet">

  <v-tag-list v-model="tags" :theme="theme" :removable="removable"></v-tag-list>

  <div class="input-field">
    <input id="none" type="radio" v-model="theme" value="">
    <label for="none">None</label>
  </div>
  <div v-for="name in themes">
    <div class="input-field">
      <input :id="name" type="radio" v-model="theme" :value="name">
      <label :for="name">{{name}}</label>
    </div>
  </div>

  <div class="input-field">
    <input id="removable" type="checkbox" v-model="removable">
    <label for="removable">Removable</label>
  </div>

  <pre>{{tags}}</pre>
</div>
</template>

<script>

import VTagList from '../src/index.js'

export default {
  components: {VTagList},
  data () {
    return {
      tags: ['php', 'ruby', 'javascript', 'python', 'java', 'c#', 'scala', 'closure'],
      themes: Object.keys(VTagList.themes),
      theme: 'bulma',
      removable: true,
      version: VTagList.version
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
</style>
