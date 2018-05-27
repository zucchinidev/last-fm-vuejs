import { WrapComponent } from '../../../../../helpers'
import Search from '@Vue/components/Search/Search'
import { SearchPageObject } from './SearchPageObject'

describe('Search.vue', () => {
  let wrapper
  let value
  let page
  let props
  beforeEach(() => {
    value = '       fake_value'
    props = { value }
    wrapper = WrapComponent(Search).withProps(props).mount()
    page = new SearchPageObject(wrapper)
  })

  it('should correctly insert the value in the input field', () => {
    expect(page.getInputValue()).toEqual(value)
    page.fireInputEvent()
    expect(page.getTrimInputValue()).toEqual(value.trim())
    expect(page.getEmittedEvent('input')).toBeTruthy()
  })

  it('has the expected html structure', () => {
    page.matchSnapshot()
  })
})