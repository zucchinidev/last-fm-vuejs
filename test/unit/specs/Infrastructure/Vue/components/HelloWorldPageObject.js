import PageObject from '@unit/PageObject'

export default class HelloWorldPageObject extends PageObject {
  getBlockQuoteTextContent () {
    return this.wrapper.vm.$el.querySelector('blockquote').textContent
  }

  getListOfArtist () {
    return this.wrapper.vm.$el.querySelectorAll('li')
  }
}
