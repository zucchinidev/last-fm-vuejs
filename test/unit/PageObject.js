export default class PageObject {
  constructor (wrapper) {
    this.wrapper = wrapper
  }

  wait () {
    return new Promise(resolve => setImmediate(resolve))
  }

  update () {
    return this.wrapper.update()
  }

  text () {
    return this.wrapper.text()
  }

  html () {
    return this.wrapper.html()
  }

  contains (text) {
    expect(this.text()).toContain(text)
  }

  matchSnapshot () {
    expect(this.wrapper.html()).toMatchSnapshot()
  }

  setData (data) {
    this.wrapper.setData({ ...data })
  }

  setProps (data) {
    this.wrapper.setProps({ ...data })
  }

  checkCurrentPath (state, path) {
    expect(this.wrapper.vm.$store.state.route.path).toBe(path)
  }
}
