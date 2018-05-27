import TrackListItem from '@Vue/components/TrackListItem/TrackListItem'
import { WrapComponent } from '../../../../../helpers'
import { Track } from '../../../../../../../src/Track/Domain/Track'
import * as fixture from '../../../../../fixtures/trackFixture'
import TrackListItemPageObject from './TrackListItemPageObject'

const { track: trackFixture } = fixture
describe('TrackListItem.vue', () => {
  let wrapper
  /** @type Track */
  let track
  /** @type TrackListItemPageObject */
  let page
  beforeEach(() => {
    track = new Track(trackFixture)
    wrapper = WrapComponent(TrackListItem).withProps({track}).mount()
    page = new TrackListItemPageObject(wrapper)
  })
  it('should render correct contents', () => {
    expect(page.getAlbumTitle()).toEqual(trackFixture.album.name)
    expect(page.getTrackTitle()).toEqual(trackFixture.name)
    expect(page.getPoster().src).toEqual(track.getSmallImage().url)
    expect(page.getPoster().alt).toEqual('track image')
  })

  it('must receive a track as property', () => {
    expect(wrapper.props().track).toEqual(track)
  })

  it('should has correct html', function () {
    page.matchSnapshot()
  })
})
