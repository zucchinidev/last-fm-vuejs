<template>
  <v-footer :fixed="fixed" height="90" app>
    <player></player>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: ['fixed']
}
</script>
<style lang="stylus" scoped>
  footer.footer.footer--fixed
    min-width: 620px
    border-top: 1px solid #cbcbcb
</style>
