import PageObject from '@unit/PageObject'
import TrackListItem from '@Vue/components/TrackListItem/TrackListItem'

export default class HelloWorldPageObject extends PageObject {
  getBlockQuoteTextContent () {
    return this.wrapper.vm.$el.querySelector('blockquote').textContent
  }

  getListOfTracks () {
    return this.wrapper.findAll(TrackListItem)
  }
}
