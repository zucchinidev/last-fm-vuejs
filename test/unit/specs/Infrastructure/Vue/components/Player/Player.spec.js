import Player from '@Vue/components/Player/Player'
import { WrapComponent } from '../../../../../helpers'
import { Track } from '../../../../../../../src/Track/Domain/Track'
import * as fixture from '../../../../../fixtures/trackFixture'
import PlayerPageObject from './PlayerPageObject'
import { calculateResult } from '../../../../../../../src/Infrastructure/Vue/filters/milliseconds-to-minutes'

const { track: trackFixture } = fixture
describe('Player.vue', () => {
  let wrapper
  /** @type Track */
  let track
  /** @type PlayerPageObject */
  let page
  beforeEach(() => {
    track = new Track(trackFixture)
    wrapper = WrapComponent(Player).withProps({ track }).mount()
    page = new PlayerPageObject(wrapper)
  })
  it('should render correct contents', async () => {
    await page.wait()
    expect(page.getTrackName()).toEqual(trackFixture.name)
    expect(page.getDuration()).toEqual(calculateResult(trackFixture.duration))
    expect(page.getPoster()).toEqual(track.getSmallImage().url)
    expect(page.getAudio()).toEqual(track.getPreviewUrl())
  })

  it('must receive a track as property', () => {
    expect(wrapper.props().track).toEqual(track)
  })

  it('should has correct html', function () {
    page.matchSnapshot()
  })
})
