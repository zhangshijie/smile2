// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueResource from 'vue-resource'
import './assets/less/index.less'

Vue.config.productionTip = false
Vue.config.debug = true
Vue.use(VueResource)
Vue.http.options.emulateHTTP = true

/* eslint-disable no-new */
// new Vue({
//   el: '#appIndex',
//   router,
//   template: '<App/>',
//   components: { App }
//   // render: h => h(App)
// })

new Vue({
  el: '#appIndex',
  router,
  template: '<App/>',
  components: { App }
})
