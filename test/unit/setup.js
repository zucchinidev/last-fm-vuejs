import Vue from 'vue'
import { registerSharedComponents } from '../../src/components'
import Router from 'vue-router'
registerSharedComponents()

Vue.use(Router)
Vue.config.productionTip = false
