import Vue from 'Vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App)
})
