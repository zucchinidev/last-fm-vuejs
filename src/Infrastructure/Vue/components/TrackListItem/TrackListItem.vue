<template>
  <li>
    <h2>
      {{track.album.name}}
    </h2>
    <h3>
      {{track.name}}
    </h3>
    <img :src="imageSrc" alt="track image">
  </li>
</template>
<script>
export default {
  name: 'TrackListItem',
  props: {
    /** @type Track */
    track: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageSrc () {
      let url = ''
      if (Object.keys(this.track).length) {
        const image = this.track.getSmallImage()
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
