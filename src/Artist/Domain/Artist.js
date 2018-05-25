export class Artist {
  constructor ({ name, url, associateImages: images } = {}) {
    this.name = name
    this.url = url
    this.images = images
  }
}
