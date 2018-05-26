import HelloWorld from '@Vue/components/HelloWorld'
import { ArtistRepository } from '@/Artist/Domain/ArtistRepository'
import { WrapComponent } from '../../../../helpers'
import HelloWorldPageObject from './HelloWorldPageObject'

jest.mock('@/Artist/Domain/ArtistRepository', () => {
  return {
    ArtistRepository: {
      getTopArtistsByCountry: jest.fn(() => Promise.resolve([{
        name: 'fake artist',
        images: [{size: 'medium', url: ''}],
        url: 'fake artist url'
      }]))
    }
  }
})
describe('HelloWorld.vue', () => {
  let wrapper
  /** @type HelloWorldPageObject */
  let page
  beforeEach(() => {
    ArtistRepository.getTopArtistsByCountry.mockClear()
    wrapper = WrapComponent(HelloWorld).mount()
    page = new HelloWorldPageObject(wrapper)
  })
  it('should render correct contents', async () => {
    await page.wait()
    const listOfArtist = page.getListOfArtist()
    const item = listOfArtist.at(0)
    expect(listOfArtist.length).toEqual(1)
    expect(page.getBlockQuoteTextContent()).toEqual('First, solve the problem. Then, write the code.')
    expect(item.is('li')).toBe(true)
    expect(item.contains('h2')).toBe(true)
    expect(item.contains('a')).toBe(true)
    expect(item.contains('img')).toBe(true)
    expect(item.find('a').html()).toContain('fake artist')
    expect(item.vm.$el.querySelector('a').href).toEqual('fake artist url')
    expect(ArtistRepository.getTopArtistsByCountry).toHaveBeenCalled()
  })
})
