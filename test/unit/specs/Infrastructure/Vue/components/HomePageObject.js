import PageObject from '@unit/PageObject'
import TrackCardItem from '@Vue/components/TrackCardItem/TrackCardItem'
import Search from '@Vue/components/Search/Search'

export default class HomePageObject extends PageObject {
  writeSearchTermAsync (term) {
    const input = this.wrapper.find(Search)
    input.vm.setValueOfInput(term)
  }

  getBlockQuoteTextContent () {
    return this.wrapper.vm.$el.querySelector('blockquote').textContent
  }

  getListOfTracks () {
    return this.wrapper.findAll(TrackCardItem)
  }
}
