<template>
  <v-footer :fixed="fixed" app>
    <span>&copy; 2018</span>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: ['fixed']
}
</script>
<style scoped>
  footer span{
    margin-left: auto;
    margin-right: auto;
  }
</style>
