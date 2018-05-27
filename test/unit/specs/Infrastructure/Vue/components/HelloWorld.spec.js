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
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {})
    TrackRepository.searchTrack.mockClear()
    wrapper = WrapComponent(HelloWorld).mount()
    page = new HelloWorldPageObject(wrapper)
    spy.mockReset()
  })
  it('should render correct contents', async () => {
    page.writeSearchTermAsync('muchacha')
    await page.wait()
    const listOfTracks = page.getListOfTracks()
    expect(listOfTracks.length).toEqual(1)
    expect(page.getBlockQuoteTextContent()).toEqual('First, solve the problem. Then, write the code.')
    expect(TrackRepository.searchTrack).toHaveBeenCalled()
    expect(TrackRepository.searchTrack).toHaveBeenCalledWith('muchacha')
  })
})
