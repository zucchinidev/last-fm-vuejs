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
import MFooter from './Footer/Footer'
import RightAside from './RightAside/RightAside'
import MainMenu from './MainMenu/MainMenu'
import LeftAside from './LeftAside/LeftAside'
import Toolbar from './Toolbar/Toolbar'

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
  Vue.component('Toolbar', Toolbar)
  Vue.component('LeftAside', LeftAside)
  Vue.component('MainMenu', MainMenu)
  Vue.component('RightAside', RightAside)
  Vue.component('MFooter', MFooter)
  Vue.component('Player', Player)
}
