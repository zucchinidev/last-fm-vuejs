import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'
import '../../../../node_modules/vuetify/src/stylus/app.styl'
import ArtistListItem from './ArtistListItem/ArtistListItem'

export function registerSharedComponents () {
  Vue.use(Vuetify, {
    components: {
      VApp,
      VNavigationDrawer,
      VFooter,
      VList,
      VBtn,
      VIcon,
      VGrid,
      VToolbar,
      transitions
    }
  })
  Vue.component('ArtistListItem', ArtistListItem)
}
