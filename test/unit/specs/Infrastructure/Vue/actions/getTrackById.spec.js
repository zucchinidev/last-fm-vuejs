import { TrackRepository } from '../../../../../../src/Track/Domain/TrackRepository'
import trackMapper from '../../../../../../src/Track/Domain/trackMapper'

import { getTrackById } from '@Vue/store/actions/getTrackById'

jest.mock('../../../../../../src/Track/Domain/TrackRepository', () => {
  return {
    TrackRepository: {
      getById: jest.fn(() => Promise.resolve('track'))
    }
  }
})

jest.mock('../../../../../../src/Track/Domain/trackMapper', () => {
  return jest.fn(() => 'mappedTrack')
})

describe('getTrackById action', () => {
  let commitSpy
  let trackId
  beforeEach(() => {
    TrackRepository.getById.mockClear()
    trackMapper.mockClear()
    commitSpy = jest.fn()
    trackId = 1
  })

  it('should save the search track in the global state', async () => {
    const track = await getTrackById({ commit: commitSpy }, trackId)
    expect(TrackRepository.getById).toHaveBeenCalledTimes(1)
    expect(TrackRepository.getById).toHaveBeenCalledWith(trackId)
    expect(trackMapper).toHaveBeenCalledTimes(1)
    expect(trackMapper).toHaveBeenCalledWith('track')
    expect(commitSpy).toHaveBeenCalledWith('selectTrack', 'mappedTrack')
    expect(track).toEqual('mappedTrack')
  })
})
