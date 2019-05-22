<template>
  <div id="app">
    <global-component />
    <Test1 />
    <div id="1234">{{ hello }}</div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test1 from './components/Test1.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Test1
  },
  data() {
    window.test = this;
    return {
      hello: 'hello world world'
    }
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
