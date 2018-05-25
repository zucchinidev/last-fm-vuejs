<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>First, solve the problem. Then, write the code.</blockquote>
        <ul>
          <li v-for="artist in artists">{{artist.name}}</li>
        </ul>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
import { ArtistRepository } from '../../../Artist/Domain/ArtistRepository'

export default {
  name: 'HelloWorld',
  data () {
    return {
      artists: []
    }
  },
  async mounted () {
    this.artists = await ArtistRepository.getTopArtistsByCountry()
  }
}
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
