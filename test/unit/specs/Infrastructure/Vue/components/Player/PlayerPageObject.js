import PageObject from '@unit/PageObject'
import { VCardMedia } from 'vuetify/es5/components/VCard'

export default class PlayerPageObject extends PageObject {
  getTrackName () {
    return this.wrapper.vm.$el.querySelector('.title').textContent.trim()
  }

  getDuration () {
    return this.wrapper.vm.$el.querySelector('.title + div').textContent.trim()
  }

  getPoster () {
    return this.wrapper.find(VCardMedia).props().src
  }

  getAudio () {
    return this.wrapper.find('audio').element.src
  }
}
