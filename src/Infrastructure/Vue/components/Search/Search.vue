<template>
  <v-text-field
    :label="label"
    :value="model"
    single-line
    full-width
    @input="setValueOfInput"
    color="teal"
    prepend-icon="search"
    dark
    clearable
  ></v-text-field>
</template>
<script>
export default {
  name: 'Search',
  data () {
    return {
      model: this.value
    }
  },
  props: {
    label: String,
    trim: {
      type: Boolean,
      default: true
    },
    value: String
  },
  methods: {
    setValueOfInput (event) {
      let value = event && event.target ? event.target.value : event
      if (this.trim && value) {
        value = value.trim()
      }
      this.model = value
      this.$emit('input', value)
    }
  }
}
</script>
<style scoped lang="stylus">
  li
    display block
    margin 10px 0
</style>
