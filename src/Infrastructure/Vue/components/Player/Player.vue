<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card v-if="hasTrack()" class="white--text">
      <v-container>
        <v-layout row>
          <v-flex xs7>
            <v-card-media
              :src="selectedTrack.getSmallImage().url"
              height="125px"
              contain
            ></v-card-media>
          </v-flex>
          <v-flex xs5>
            <div>
              <div class="headline">
                {{selectedTrack.name}}
              </div>
              <div>
                {{selectedTrack.duration | ms-to-mm}}
              </div>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <audio :src="selectedTrack.getPreviewUrl()" controls></audio>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
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
  methods: {
    hasTrack () {
      return this.selectedTrack && this.selectedTrack.album
    }
  },
  created () {
    this.$bus.$on('set-track', track => (this.selectedTrack = track))
  }
}
</script>
<style scoped>
  .card__media {
    clip-path: circle(30%);
  }
</style>
