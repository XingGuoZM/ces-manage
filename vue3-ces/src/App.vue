<template>
  <div id="app">
      <el-button>el-button</el-button>
      <index-layout></index-layout>
  </div>
</template>

<script>
import IndexLayout from '@/components/page/IndexLayout.vue'

export default {
  name: 'app',
  components: {
    IndexLayout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
