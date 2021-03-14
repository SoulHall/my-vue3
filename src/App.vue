<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <mysetup></mysetup>
  <reactive></reactive>
  <customref></customref>
  <readonly></readonly> -->
  <practise></practise>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import mysetup from './components/setup.vue'
// import reactive from './components/reactive.vue'
// import customref from './components/mycustomref.vue'
// import readonly from './components/readonly.vue'
import practise from './components/practise.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    // mysetup,
    // reactive,
    // customref,
    // readonly,
    practise
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
