import Vue from 'vue'
import App from './App'
import router from './router/index'
import { registerSharedComponents } from './components'
import { Bus } from './plugins/bus'

Vue.config.productionTip = false

registerSharedComponents()
Vue.use(Bus)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
