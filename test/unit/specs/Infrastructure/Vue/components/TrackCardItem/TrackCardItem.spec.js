import TrackCardItem from '@Vue/components/TrackCardItem/TrackCardItem'
import { WrapComponent } from '../../../../../helpers'
import { Track } from '../../../../../../../src/Track/Domain/Track'
import * as fixture from '../../../../../fixtures/trackFixture'
import TrackCardItemPageObject from './TrackCardItemPageObject'

const { track: trackFixture } = fixture
describe('TrackCardItem.vue', () => {
  let wrapper
  /** @type Track */
  let track
  /** @type TrackCardItemPageObject */
  let page
  beforeEach(() => {
    track = new Track(trackFixture)
    wrapper = WrapComponent(TrackCardItem).withProps({track}).mount()
    page = new TrackCardItemPageObject(wrapper)
  })
  it('should render correct contents', async () => {
    await page.wait()
    expect(page.getAlbumTitle()).toEqual(trackFixture.album.name)
    expect(page.getTrackTitle()).toEqual(trackFixture.name)
    expect(page.getPoster()).toEqual(track.getSmallImage().url)
    page.clickPlayButton()
    expect(page.isSelectTrackEventEmitted()).toBeTruthy()
    expect(page.isSelectTrackEventEmitted()).toEqual([[track.id]])
  })

  it('must receive a track as property', () => {
    expect(wrapper.props().track).toEqual(track)
  })

  it('should has correct html', function () {
    page.matchSnapshot()
  })
})
