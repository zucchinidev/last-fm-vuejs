import Vuex from 'vuex'
import Home from '@Vue/components/Home'
import { TrackRepository } from '@/Track/Domain/TrackRepository'
import { cloneProductionStore, WrapComponent } from '../../../../helpers'
import HomePageObject from './HomePageObject'
import { track } from '../../../../fixtures/trackFixture'

const mockTrack = track
jest.mock('@/Track/Domain/TrackRepository', () => {
  return {
    TrackRepository: {
      searchTrack: jest.fn(() => Promise.resolve([mockTrack]))
    }
  }
})

describe('Home.vue', () => {
  let wrapper
  /** @type HomePageObject */
  let page
  let productionStore
  let spy
  beforeAll(() => (spy = jest.spyOn(console, 'error').mockImplementation(() => {})))

  beforeEach(() => {
    TrackRepository.searchTrack.mockClear()
    productionStore = cloneProductionStore()
    const store = new Vuex.Store(productionStore)
    wrapper = WrapComponent(Home).withStore(store).mount()
    page = new HomePageObject(wrapper)
  })

  afterAll(() => spy.mockReset())

  it('should render correct contents', async () => {
    page.writeSearchTermAsync('muchacha')
    page.triggerSearch()
    await page.wait()
    const listOfTracks = page.getListOfTracks()
    expect(listOfTracks.length).toEqual(1)
    expect(TrackRepository.searchTrack).toHaveBeenCalled()
    expect(TrackRepository.searchTrack).toHaveBeenCalledWith('muchacha')
  })
})
