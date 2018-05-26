import PageObject from '@unit/PageObject'
import ArtistListItem from '@Vue/components/ArtistListItem/ArtistListItem'

export default class HelloWorldPageObject extends PageObject {
  getBlockQuoteTextContent () {
    return this.wrapper.vm.$el.querySelector('blockquote').textContent
  }

  getListOfArtist () {
    return this.wrapper.findAll(ArtistListItem)
  }
}
