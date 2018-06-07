<template>
  <v-flex v-bind="breakPoints" wrap v-if="track && track.album">
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex xs7>
            <div class="text-xs-center">
              <template v-if="!extendedData">
                <div class="title">
                  <p>Album</p>
                  <p class="album-name">
                    {{track.album.name}}
                  </p>
                </div>
                <p class="track-name">
                  {{track.name}}
                </p>
                <p>Duration
                  <v-icon>arrow_right_alt</v-icon>
                  {{track.duration | ms-to-mm}}
                </p>
              </template>
              <template v-if="extendedData">
                <p class="title">Album
                  <v-icon>arrow_right_alt</v-icon>
                  {{track.album.name}}
                </p>
                <p>Track name
                  <v-icon>arrow_right_alt</v-icon>
                  {{track.name}}
                </p>
                <p>Release
                  <v-icon>arrow_right_alt</v-icon>
                  {{track.album.release}}
                </p>
                <p> Popularity
                  <v-icon>arrow_right_alt</v-icon>
                  {{track.popularity}}
                </p>
                <div>
                  <p class="display-1 text-xs-left">
                    Artists
                    <v-icon>trending_down</v-icon>
                  </p>
                  <ul>
                    <li
                      class="text-xs-center"
                      :key="index"
                      v-for="(artist, index) in track.album.artists">
                      <v-chip>
                        {{artist}}
                      </v-chip>
                    </li>
                  </ul>
                </div>
              </template>
            </div>
          </v-flex>
          <v-flex xs5>
            <v-card-media
              :src="imageSrc"
              height="125px"
              contain
            ></v-card-media>
            <v-card-actions v-if="!extendedData">
              <v-spacer></v-spacer>
              <v-btn class="play-arrow" icon @click="selectTrack">
                <v-icon>play_arrow</v-icon>
              </v-btn>
              <v-btn icon @click="goToTrack">
                <v-icon>remove_red_eye</v-icon>
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
    },
    breakPointsWrapper: {
      type: Object,
      default: () => ({})
    },
    extendedData: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageSrc () {
      let url = ''
      if (Object.keys(this.track).length) {
        const image = this.extendedData ? this.track.getBigImage() : this.track.getSmallImage()
        if (image) {
          url = image.url
        }
      }
      return url
    },
    breakPoints () {
      const defaultBreakPoints = {
        'xs12': true,
        'sm6': true,
        'md4': true,
        'lg4': true
      }
      return {
        ...defaultBreakPoints,
        ...this.breakPointsWrapper
      }
    }
  },
  methods: {
    selectTrack () {
      this.$emit('selectTrack', this.track)
    },
    goToTrack () {
      this.$router.push({ name: 'TrackDetail', params: { id: this.track.id } })
    }
  }
}
</script>
<style lang="stylus">
  ul
    display flex
    list-style none
    margin-bottom 1rem
</style>
