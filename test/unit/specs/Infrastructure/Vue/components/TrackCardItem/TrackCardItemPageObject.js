import PageObject from '@unit/PageObject'
import { VCardMedia } from 'vuetify/es5/components/VCard'

export default class TrackCardItemPageObject extends PageObject {
  getAlbumTitle () {
    return this.wrapper.vm.$el.querySelector('.headline').textContent.trim()
  }

  getTrackTitle () {
    return this.wrapper.vm.$el.querySelector('.headline + div').textContent.trim()
  }

  getPoster () {
    return this.wrapper.find(VCardMedia).props().src
  }

  clickPlayButton () {
    return this.wrapper.find('button').trigger('click')
  }

  isSelectTrackEventEmitted () {
    return this.wrapper.emitted('selectTrack')
  }
}
