import { TrackRepository } from '../../../../../../src/Track/Domain/TrackRepository'

import { searchTrack } from '@Vue/store/actions/searchTrack'

const mockTracks = ['track']
jest.mock('../../../../../../src/Track/Domain/TrackRepository', () => {
  return {
    TrackRepository: {
      searchTrack: jest.fn(() => Promise.resolve(mockTracks))
    }
  }
})

describe('searchTrack action', () => {
  let commitSpy
  let term
  beforeEach(() => {
    TrackRepository.searchTrack.mockClear()
    commitSpy = jest.fn()
    term = 'muchachito'
  })

  it('should save the search track in the global state', async () => {
    const tracks = await searchTrack({ commit: commitSpy }, term)
    expect(TrackRepository.searchTrack).toHaveBeenCalledTimes(1)
    expect(TrackRepository.searchTrack).toHaveBeenCalledWith(term)
    expect(commitSpy).toHaveBeenCalledWith('selectTracks', mockTracks)
    expect(tracks).toEqual(mockTracks)
  })
})
