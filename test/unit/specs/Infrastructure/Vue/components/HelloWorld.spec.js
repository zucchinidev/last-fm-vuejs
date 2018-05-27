import HelloWorld from '@Vue/components/HelloWorld'
import { TrackRepository } from '@/Track/Domain/TrackRepository'
import { WrapComponent } from '../../../../helpers'
import HelloWorldPageObject from './HelloWorldPageObject'
import { track } from '../../../../fixtures/trackFixture'
const mockTrack = track
jest.mock('@/Track/Domain/TrackRepository', () => {
  return {
    TrackRepository: {
      searchTrack: jest.fn(() => Promise.resolve([mockTrack]))
    }
  }
})
describe('HelloWorld.vue', () => {
  let wrapper
  /** @type HelloWorldPageObject */
  let page
  beforeEach(() => {
    TrackRepository.searchTrack.mockClear()
    wrapper = WrapComponent(HelloWorld).mount()
    page = new HelloWorldPageObject(wrapper)
  })
  it('should render correct contents', async () => {
    await page.wait()
    const listOfArtist = page.getListOfTracks()
    expect(listOfArtist.length).toEqual(1)
    expect(page.getBlockQuoteTextContent()).toEqual('First, solve the problem. Then, write the code.')
    expect(TrackRepository.searchTrack).toHaveBeenCalled()
  })
})
