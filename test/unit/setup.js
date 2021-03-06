import Vue from 'vue'
import { registerSharedComponents } from '../../src/Infrastructure/Vue/components'
import Router from 'vue-router'
import { Bus } from '@Vue/plugins/bus'
import { millisecondsToMinutes } from '../../src/Infrastructure/Vue/filters/milliseconds-to-minutes'
import { previewUrlEmpty } from '../../src/Infrastructure/Vue/directives/previewUrlEmpty'
import Vuex from 'vuex'

registerSharedComponents()

Vue.use(Bus)
Vue.use(Router)
Vue.use(millisecondsToMinutes)
Vue.use(previewUrlEmpty)
Vue.use(Vuex)
Vue.config.productionTip = false
