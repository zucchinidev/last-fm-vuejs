<template>
  <v-navigation-drawer
    temporary
    right
    v-model="model"
    fixed
    app
    @input="onChangeNavigation"
  >
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>compare_arrows</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'RightAside',
  props: {
    rightDrawer: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      model: this.rightDrawer
    }
  },
  watch: {
    rightDrawer (val) {
      this.model = val
    }
  },
  methods: {
    onChangeNavigation () {
      this.$emit('change', this.model)
    }
  }
}
</script>
