import { TrackRepository } from '../../../../Track/Domain/TrackRepository'
import trackMapper from '../../../../Track/Domain/trackMapper'

export async function getTrackById ({ commit }, trackId) {
  const data = await TrackRepository.getById(trackId)
  const track = trackMapper(data)
  commit('selectTrack', track)
  return track
}
