export class PreviewUrlEmptyPageObject {
  constructor (vm) {
    this.vm = vm
  }

  isFilterApplied () {
    return this.getFilterStyle() === 'blur(3px)'
  }

  getFilterStyle () {
    return this.vm.$el.querySelector('.card__media').style.filter
  }

  hasCursorNotAllowed () {
    return this.getCursorStyle() === 'not-allowed'
  }

  getCursorStyle () {
    return this.vm.$el.querySelector('.card__actions').style.cursor
  }

  hasDefaultFilterStyle () {
    return this.getFilterStyle() === ''
  }

  hasInheritCursor () {
    return this.getCursorStyle() === 'inherit'
  }

  hasPlayButtonDisabled () {
    const button = this.vm.$el.querySelector('button.play-arrow')
    return button.getAttribute('disabled') === 'disabled' && button.classList.contains('btn--disabled')
  }

  changeHasPreview (value) {
    this.vm.hasPreview = value
  }
}
