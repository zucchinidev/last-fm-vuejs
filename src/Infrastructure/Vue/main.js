import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router/index'
import { registerSharedComponents } from './components'
import { Bus } from './plugins/bus'
import { millisecondsToMinutes } from './filters/milliseconds-to-minutes'
import { previewUrlEmpty } from './directives/previewUrlEmpty'
import store from './store/store'

Vue.use(Bus)
Vue.config.productionTip = false
Vue.use(millisecondsToMinutes)
Vue.use(previewUrlEmpty)
Vue.use(Vuex)

registerSharedComponents()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: new Vuex.Store(store),
  components: { App },
  template: '<App/>'
})
