import PageObject from '../../../../../PageObject'

export class SearchPageObject extends PageObject {
  getInputWrapper () {
    return this.wrapper.find('input')
  }

  getNativeInput () {
    return this.getInputWrapper().element
  }

  getInputValue () {
    return this.getNativeInput().value
  }

  getTrimInputValue () {
    return this.getInputValue().trim()
  }

  getEmittedEvent (event) {
    return this.wrapper.emitted()[event]
  }

  triggerInputEvent () {
    this.getInputWrapper().trigger('input')
  }

  triggerSearch () {
    this.getInputWrapper().trigger('keyup.enter')
  }
}
