import trackMapper from '../../../../../src/Track/Domain/trackMapper'
import fixture from './trackMapper.fixture'
import { Track } from '../../../../../src/Track/Domain/Track'
import { track } from '../../../fixtures/trackFixture'

describe('trackMapper', () => {
  it('must create track entities correctly from the data', () => {
    const data = fixture.items.map(trackMapper)
    expect(data.length).toEqual(2)
    expect(data.slice().pop()).toEqual(new Track(track))
  })
})
