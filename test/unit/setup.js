import Vue from 'vue'
import { registerSharedComponents } from '../../src/Infrastructure/Vue/components'
import Router from 'vue-router'
import { Bus } from '@Vue/plugins/bus'

registerSharedComponents()

Vue.use(Bus)
Vue.use(Router)
Vue.config.productionTip = false
