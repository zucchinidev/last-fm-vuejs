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
import { VTextField } from 'vuetify/es5/components'

import '../../../../node_modules/vuetify/src/stylus/app.styl'
import ArtistListItem from './ArtistListItem/ArtistListItem'
import TrackListItem from './TrackListItem/TrackListItem'
import Search from './Search/Search'

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
      transitions,
      VTextField
    }
  })
  Vue.component('ArtistListItem', ArtistListItem)
  Vue.component('TrackListItem', TrackListItem)
  Vue.component('Search', Search)
}
