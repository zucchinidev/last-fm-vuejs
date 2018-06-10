<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs3>
        <div class="track__data__container" v-if="hasTrack()">
          <img :src="getTrackImage()" :alt="getTrackAlt()">
          <div>
            <p class="title">
              {{track.album.name}}
            </p>
            <p>
              {{track.name}}
              <span v-if="hasTrack()">{{track.duration | ms-to-mm}}</span>
            </p>
          </div>
        </div>
      </v-flex>
      <v-flex xs9>
        <div class="audio__container">
          <audio v-if="hasTrack()" :src="getPreviewUrl()" controls></audio>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>

export default {
  name: 'Player',
  props: {
    /** @type Track */
    selectedTrack: {
      type: Object
    }
  },
  data () {
    return {
      track: {}
    }
  },
  methods: {
    hasTrack () {
      return this.track && this.track.album
    },
    getTrackImage () {
      let url = ''
      const image = this.track.getSmallImage()
      if (image) {
        url = image.url
      }
      return url
    },
    getTrackAlt () {
      return this.track.name
    },
    getPreviewUrl () {
      return this.track.getPreviewUrl()
    }
  },
  created () {
    this.$bus.$on('set-track', track => (this.track = track))
    if (this.selectedTrack) {
      const Ctrl = Object.getPrototypeOf(this.selectedTrack).constructor
      this.track = Object.assign(new Ctrl(), this.selectedTrack)
    }
  }
}
</script>
<style scoped lang="stylus">
  .card__media
    clip-path: circle(25%)

  .audio__container
    text-align: center

  .track__data__container
    display flex
    > img
      margin-right: 10px

  .container
    padding-top: 5px

  audio
    margin-top: 20px
</style>
