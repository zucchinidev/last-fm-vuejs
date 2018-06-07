import Vue from 'vue/dist/vue'
import { previewUrlEmpty } from '@Vue/directives/previewUrlEmpty'
import { PreviewUrlEmptyPageObject } from './PreviewUrlEmptyPageObject'

Vue.use(previewUrlEmpty)

describe('previewUrlEmpty directive', () => {
  /** @type PreviewUrlEmptyPageObject */
  let page
  let vm
  beforeEach(() => {
    const template = `
      <div>
        <div v-preview-url-empty="hasPreview">
          <div class="card__media">Card Media</div>
          <div class="card__actions">
            <button class="play-arrow">Button</button>
          </div>
        </div>
      </div>`
    vm = new Vue({
      template,
      data: {
        hasPreview: false
      }
    }).$mount()
    page = new PreviewUrlEmptyPageObject(vm)
  })
  it('should change the visualization of the internal html', async () => {
    expect(page.isFilterApplied()).toBe(true)
    expect(page.hasCursorNotAllowed()).toBe(true)
    expect(page.hasPlayButtonDisabled()).toBe(true)
    page.changeHasPreview(true)
    await Vue.nextTick()
    expect(page.isFilterApplied()).toBe(false)
    expect(page.hasCursorNotAllowed()).toBe(false)
    expect(page.hasPlayButtonDisabled()).toBe(false)
  })
})
