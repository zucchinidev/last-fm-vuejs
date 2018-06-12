<template>
  <v-container fluid>
    <v-flex xs12>
      <search
        label="Search"
        v-model="searchTerm"
        @input="onSearchTerm"
      ></search>
    </v-flex>
    <v-container v-bind="{'grid-list-lg': true}" fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout row wrap>
          <track-card-item
            v-preview-url-empty="track.previewUrl"
            v-for="(track, index) in tracks"
            :key="index"
            :track="track"
            :class="{'is-active': track.id === selectedTrack.id}"
            @selectTrack="onSelectTrack"
          ></track-card-item>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </v-container>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      searchTerm: '',
      selectedTrack: {}
    }
  },
  computed: {
    ...mapState(['tracks'])
  },
  methods: {
    ...mapMutations(['selectTrack', 'selectTracks']),
    ...mapActions(['searchTrack']),
    async onSearchTerm (term) {
      if (term && term.length >= 3) {
        this.searchTrack(term)
      } else {
        this.selectTracks([])
      }
    },
    onSelectTrack (track) {
      this.selectedTrack = track
      this.selectTrack(track)
    }
  }
}
</script>
<style lang="stylus">
  h1, h2
    font-weight normal

  ul
    list-style-type none
    padding 0

  li
    display inline-block
    margin 0 10px

  a
    color #42b983

  .is-active
    > div
      border solid 3px #23d160
</style>
