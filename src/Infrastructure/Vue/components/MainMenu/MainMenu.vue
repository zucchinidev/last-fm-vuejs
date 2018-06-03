<template>
  <v-list>
    <v-list-tile
      v-for="(item, index) in items"
      :key="index" @click="">

      <v-list-tile-action>
        <v-icon v-html="item.icon"></v-icon>
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title v-text="item.title"></v-list-tile-title>
      </v-list-tile-content>

    </v-list-tile>

  </v-list>
</template>

<script>
export default {
  name: 'MainMenu',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
