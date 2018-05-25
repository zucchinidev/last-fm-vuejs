import HelloWorld from '@Vue/components/HelloWorld'
import { ArtistRepository } from '@/Artist/Domain/ArtistRepository'
import { WrapComponent } from '../../../../helpers'
import HelloWorldPageObject from './HelloWorldPageObject'

jest.mock('@/Artist/Domain/ArtistRepository', () => {
  return {
    ArtistRepository: {
      getTopArtistsByCountry: jest.fn(() => Promise.resolve([{
        name: 'fake artist'
      }]))
    }
  }
})
describe('HelloWorld.vue', () => {
  let wrapper
  /** @type HelloWorldPageObject */
  let page
  beforeEach(() => {
    wrapper = WrapComponent(HelloWorld).mount()
    page = new HelloWorldPageObject(wrapper)
  })
  it('should render correct contents', () => {
    const listOfArtist = page.getListOfArtist()
    expect(page.getBlockQuoteTextContent()).toEqual('First, solve the problem. Then, write the code.')
    expect(listOfArtist.length).toEqual(1)
    expect(Array.from(listOfArtist).pop().textContent).toContain('fake artist')
    expect(ArtistRepository.getTopArtistsByCountry).toHaveBeenCalled()
  })
})
