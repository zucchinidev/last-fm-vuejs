import Vue from 'vue'
import App from './App'
import router from './router/index'
import { registerSharedComponents } from './components'
import { Bus } from './plugins/bus'
import { millisecondsToMinutes } from './filters/milliseconds-to-minutes'

Vue.use(Bus)
Vue.config.productionTip = false
Vue.use(millisecondsToMinutes)
registerSharedComponents()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
