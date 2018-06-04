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
import { TrackRepository } from '../../../../Track/Domain/TrackRepository'
import trackMapper from '../../../../Track/Domain/trackMapper'

export default {
  name: 'TrackDetail',
  data () {
    return {
      track: {}
    }
  },
  computed: {
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
  async created () {
    const data = await TrackRepository.getById(this.$route.params.id)
    this.track = trackMapper(data)
  }
}
</script>
