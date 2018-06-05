import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import TrackDetail from '../components/TrackDetail/TrackDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tracks/:id',
      name: 'TrackDetail',
      component: TrackDetail
    }
  ]
})
