import { HttpRepository } from '../../Infrastructure/http/HttpRepository'
import trackMapper from './trackMapper'

const urls = {
  search: 'search',
  getById: 'tracks'
}

const configuration = {
  baseURL: process.env.API_MUSIC_BASE_URL
}
export const TrackRepository = {
  async searchTrack (searchTerm) {
    const params = {
      q: searchTerm,
      type: 'track'
    }
    const { data } = await HttpRepository.get(urls.search, params, configuration)
    return data.tracks.items.map(trackMapper)
  },
  async getById (id) {
    const { data } = await HttpRepository.get(`${urls.getById}/${id}`, {}, configuration)
    return data
  }
}
