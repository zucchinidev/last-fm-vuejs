<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <v-container>
          <v-layout row>
            <player :selectedTrack="track"></player>
          </v-layout>
        </v-container>
        <v-container>
          <v-layout row>
            <track-card-item
              :track="track"
              :break-points-wrapper="breakPoints"
              extendedData
            ></track-card-item>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'TrackDetail',
  computed: {
    ...mapState([
      'track'
    ]),
    breakPoints () {
      return {
        xs12: true,
        sm6: true,
        'offset-sm3': true,
        md6: true,
        'offset-md3': true,
        lg6: true,
        'offset-lg3': true
      }
    }
  },
  methods: {
    ...mapActions(['getTrackById'])
  },
  async created () {
    const id = this.$route.params.id
    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById(id)
    }
  }
}
</script>
