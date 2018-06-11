<template>
  <transition name="move">
    <v-footer :fixed="fixed" height="90" v-show="hasTrack" app>
      <player></player>
    </v-footer>
  </transition>
</template>

<script>
export default {
  name: 'Footer',
  props: ['fixed'],
  data: () => ({hasTrack: false}),
  created () {
    this.$bus.$on('set-track', () => (this.hasTrack = true))
  }
}
</script>
<style lang="stylus" scoped>
  footer.footer.footer--fixed
    min-width: 620px
    border-top: 1px solid #cbcbcb
    box-shadow: 0 -2px 18px 3px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)
</style>
