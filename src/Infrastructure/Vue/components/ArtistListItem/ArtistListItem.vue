<template>
  <li>
    <h2>
      <a :href="artist.url" target="_blank">
        {{artist.name}}
      </a>
    </h2>
    <img :src="getImage()" alt="artist image">
  </li>
</template>
<script>
export default {
  name: 'ArtistListItem',
  props: {
    /** @type Artist */
    artist: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImage () {
      // TODO set not found image url
      let url = ''
      if (Object.keys(this.artist).length) {
        const image = this.artist.images.find(image => image.size === 'medium')
        if (image) {
          url = image.url
        }
      }
      return url
    }
  }
}
</script>
<style scoped lang="stylus">
  li
    display block
    margin 10px 0
</style>
