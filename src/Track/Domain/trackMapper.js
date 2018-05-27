import { Track } from './Track'

export default (data) => {
  const artists = (data.album.artists || []).map(artist => artist.name)
  const images = data.album.images || {}
  return new Track({
    album: {
      artists,
      name: data.album.name,
      release: data.album.release_date
    },
    images,
    duration: data.duration_ms,
    name: data.name,
    popularity: data.popularity
  })
}
