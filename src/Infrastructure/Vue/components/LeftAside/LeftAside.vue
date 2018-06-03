<template>
  <v-navigation-drawer
    persistent
    :mini-variant="miniVariant"
    clipped
    v-model="drawer"
    enable-resize-watcher
    fixed
    app
  >
    <main-menu :items="items"></main-menu>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'LeftAside',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    miniVariant: Boolean,
    drawer: Boolean
  }
}
</script>
