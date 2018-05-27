<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>First, solve the problem. Then, write the code.</blockquote>
        <ul>
          <TrackListItem v-for="(track, index) in tracks" :key="index" :track="track"></TrackListItem>
        </ul>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
import { TrackRepository } from '../../../Track/Domain/TrackRepository'

export default {
  name: 'HelloWorld',
  data () {
    return {
      tracks: []
    }
  },
  async mounted () {
    this.tracks = await TrackRepository.searchTrack('muchacha')
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
