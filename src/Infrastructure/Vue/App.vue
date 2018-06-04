<template>
  <v-app dark>
    <left-aside :items="items" :miniVariant="miniVariant" :drawer="drawer"></left-aside>

    <toolbar
      :title="title"
      @leftAsidePressed="onLeftAsidePressed"
      @rightAsidePressed="onRightAsidePressed"
      @miniVariantPressed="onMiniVariantPressed"
    ></toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <right-aside :rightDrawer="rightDrawer" @change="onChangeRightNavigation"></right-aside>
    <m-footer :fixed="fixed"></m-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'dashboard',
          title: 'Dashboard',
          routeName: 'Home'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          routeName: 'Home'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Last FM'
    }
  },
  methods: {
    onChangeRightNavigation (value) {
      this.rightDrawer = value
    },
    onLeftAsidePressed () {
      this.drawer = !this.drawer
    },
    onRightAsidePressed () {
      this.rightDrawer = !this.rightDrawer
    },
    onMiniVariantPressed () {
      this.miniVariant = !this.miniVariant
    }
  }
}
</script>
