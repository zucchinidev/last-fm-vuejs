export const Bus = {
  install (Vue) {
    Vue.prototype.$bus = new Vue()
  }
}
