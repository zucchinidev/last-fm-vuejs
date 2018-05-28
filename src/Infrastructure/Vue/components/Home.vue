<template>
  <v-container fluid>
    <v-flex xs12>
      <search
        label="Search"
        v-model="searchTerm"
        @input="onSearchTerm"
      ></search>
      <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
      <blockquote>First, solve the problem. Then, write the code.</blockquote>
    </v-flex>
    <v-container v-bind="{'grid-list-lg': true}" fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout row wrap>
          <track-card-item v-for="(track, index) in tracks" :key="index" :track="track"></track-card-item>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </v-container>
</template>
<script>
import { TrackRepository } from '../../../Track/Domain/TrackRepository'

export default {
  name: 'Home',
  data () {
    return {
      tracks: [],
      searchTerm: ''
    }
  },
  methods: {
    async onSearchTerm (term) {
      if (term && term.length >= 3) {
        this.tracks = await TrackRepository.searchTrack(term)
      } else {
        this.tracks = []
      }
    }
  }
}
</script>
<style scoped lang="stylus">
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
</style>
