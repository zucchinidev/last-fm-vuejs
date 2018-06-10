import PageObject from '@unit/PageObject'

export default class PlayerPageObject extends PageObject {
  getTrackName () {
    return this.wrapper.vm.$el.querySelector('.title').textContent.trim()
  }

  getDuration () {
    return this.wrapper.vm.$el.querySelector('.title + p > span').textContent.trim()
  }

  getPoster () {
    return this.wrapper.vm.$el.querySelector('img').src
  }

  getAudio () {
    return this.wrapper.find('audio').element.src
  }
}
