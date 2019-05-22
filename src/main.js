import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('global-component', {
  template: '<h1>我是全域的component</h1>'
})

new Vue({
  render: h => h(App),
}).$mount('#app')