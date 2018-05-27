import PageObject from '@unit/PageObject'

export default class TrackListItemPageObject extends PageObject {
  getAlbumTitle () {
    return this.wrapper.vm.$el.querySelector('h2').textContent.trim()
  }
  getTrackTitle () {
    return this.wrapper.vm.$el.querySelector('h3').textContent.trim()
  }
  getPoster () {
    return this.wrapper.vm.$el.querySelector('img')
  }
}
