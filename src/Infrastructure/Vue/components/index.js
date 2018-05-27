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
import TrackListItem from './TrackListItem/TrackListItem'

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
  Vue.component('TrackListItem', TrackListItem)
}
