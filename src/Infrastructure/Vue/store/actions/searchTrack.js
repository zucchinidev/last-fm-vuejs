import { TrackRepository } from '../../../../Track/Domain/TrackRepository'

export async function searchTrack ({ commit }, term) {
  const tracks = await TrackRepository.searchTrack(term)
  commit('selectTracks', tracks)
  return tracks
}
