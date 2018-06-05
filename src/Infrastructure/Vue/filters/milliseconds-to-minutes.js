export const calculateResult = (originalValue) => {
  const milliseconds = Number(originalValue)
  const minutes = Math.floor(milliseconds / 60000)
  const seconds = (minutes % 60000 / 1000).toFixed(0)
  let result = minutes < 10 ? `0${minutes}:` : `${minutes}:`
  result += seconds < 10 ? `0${seconds}` : seconds
  return result
}
export const millisecondsToMinutes = {
  install (Vue) {
    Vue.filter('ms-to-mm', calculateResult)
  }
}
