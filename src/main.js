// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
// import axios from './http'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

Vue.config.productionTip = false
// Vue.prototype.axios=axios 也可以将axios挂载到prototype上，在组件中可以直接使用this.axios访问

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // axios,
  template: '<App/>',
  components: { App }
})
