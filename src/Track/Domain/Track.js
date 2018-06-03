const availableSizes = {
  small: 64,
  medium: 300,
  big: 640
}

export class Track {
  constructor ({ album, duration, name, popularity, images, id } = {}) {
    this.id = id
    this.album = album
    this.duration = duration
    this.name = name
    this.popularity = popularity
    this.images = images
  }

  getSmallImage () {
    return this.images.find(image => image.width === availableSizes.small)
  }

  getPreviewUrl () {
    return this.previewUrl
  }
}
