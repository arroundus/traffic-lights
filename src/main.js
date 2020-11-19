import Vue from 'vue'
import App from './App.vue'
import router from './router'
import timer from 'vue-timers'

Vue.config.productionTip = false
Vue.use(timer)

new Vue({
  timer,
  router,
  render: h => h(App)
}).$mount('#app')
