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
import { VTextField, VCard } from 'vuetify/es5/components'

import '../../../../node_modules/vuetify/src/stylus/app.styl'
import ArtistListItem from './ArtistListItem/ArtistListItem'
import TrackCardItem from './TrackCardItem/TrackCardItem'
import Search from './Search/Search'
import Player from './Player/Player'

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
      VTextField,
      VCard
    }
  })
  Vue.component('ArtistListItem', ArtistListItem)
  Vue.component('TrackCardItem', TrackCardItem)
  Vue.component('Search', Search)
  Vue.component('Player', Player)
}
