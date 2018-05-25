import { HttpRepository } from '../../Infrastructure/http/HttpRepository'
import config from '../../Infrastructure/lastFmApi/config'
import { Artist } from './Artist'
const urls = {
  getArtistsByCountry: ''
}

const configuration = {
  slug: 'contacts',
  baseURL: 'http://ws.audioscrobbler.com/2.0/'
}
export const ArtistRepository = {
  async getTopArtistsByCountry (country = 'spain') {
    const params = {
      method: 'geo.gettopartists',
      country,
      api_key: config.apiKey,
      format: 'json'
    }
    const { data } = await HttpRepository.get(urls.getArtistsByCountry, params, configuration)
    return data.topartists.artist.map(artist => new Artist({
      images: artist.image.map(image => ({url: image['#text'], size: image.size})),
      url: artist.url,
      name: artist.name
    }))
  }
}
