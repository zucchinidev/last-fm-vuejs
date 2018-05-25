import Vue from 'vue'
import App from './App'
import router from './router/index'
import { registerSharedComponents } from './components/index'
registerSharedComponents()
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
