<template>
  <v-flex xs12 sm6 md3 lg3 wrap>
    <v-card class="white--text">
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex xs7>
            <div>
              <div class="headline">{{track.album.name}}</div>
              <div>{{track.name}}</div>
            </div>
          </v-flex>
          <v-flex xs5>
            <v-card-media
              :src="imageSrc"
              height="125px"
              contain
            ></v-card-media>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="selectTrack">
                <v-icon>play_arrow</v-icon>
              </v-btn>
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
  name: 'TrackCardItem',
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
  },
  methods: {
    selectTrack () {
      this.$emit('selectTrack', this.track.id)
    }
  }
}
</script>
<style scoped lang="stylus">

</style>