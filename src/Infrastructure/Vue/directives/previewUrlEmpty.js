function setBlur (el, binding) {
  el.querySelector('.card__media').style.filter = !binding.value ? 'blur(3px)' : ''
  const actions = el.querySelector('.card__actions')
  const playButton = actions.querySelector('button.play-arrow')
  if (!binding.value) {
    actions.style.cursor = 'not-allowed'
    playButton.setAttribute('disabled', 'disabled')
    playButton.classList.add('btn--disabled')
  } else {
    actions.style.cursor = 'inherit'
    playButton.removeAttribute('disabled')
    playButton.classList.remove('btn--disabled')
  }
}

export const previewUrlEmpty = {
  install (Vue) {
    Vue.directive('previewUrlEmpty', {
      bind: setBlur
    })
  }
}
