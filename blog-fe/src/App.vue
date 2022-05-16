<template>
  <div id="app">
    <router-view/>
  </div>
</template>
  
  
<script setup lang='ts'>
defineOptions({
  name: 'App'
})
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
</style>