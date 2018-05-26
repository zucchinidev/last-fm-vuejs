import { mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'

export function WrapComponent (component) {
  return new Wrap(component)
}

class Wrap {
  constructor (component) {
    this.component = component
  }

  mount () {
    return mount(this.component, this.config())
  }

  shallowMount () {
    return shallowMount(this.component, this.config())
  }

  withProps (props) {
    this.props = props
    return this
  }

  withStubs (stubs) {
    this.stubs = stubs
    return this
  }

  withSlots (slots) {
    this.slots = slots
    return this
  }

  withRouter (router) {
    this.router = router
    return this
  }

  withStore (store) {
    this.store = store
    return this
  }

  config () {
    return {
      propsData: this.props,
      stubs: this.stubs,
      slots: this.slots,
      router: this.router,
      store: this.store
    }
  }
}

export function waitNextTick () {
  return Vue.nextTick()
}

export function waitSetTimeout (delay = 250) {
  return new Promise(resolve => setTimeout(resolve, delay))
}

export function stubNow (isoDate) {
  Date.now = jest.fn(() => new Date(isoDate).valueOf())
}
