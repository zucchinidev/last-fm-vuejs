<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon
      @click.stop="onClickLeftAsideButton"
    ></v-toolbar-side-icon>

    <v-btn icon @click.stop="onClickMiniVariantButton">
      <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
    </v-btn>

    <v-toolbar-title v-text="title"></v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click.stop="onClickRightAsideButton">
      <v-icon>menu</v-icon>
    </v-btn>

  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    miniVariant: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    }
  },
  methods: {
    onClickLeftAsideButton () {
      this.$emit('leftAsidePressed')
    },
    onClickRightAsideButton () {
      this.$emit('rightAsidePressed')
    },
    onClickMiniVariantButton () {
      this.$emit('miniVariantPressed')
    }
  }
}
</script>
