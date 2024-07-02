
const windowSetTimeout = window.setTimeout
const windowClearTimeout = window.clearTimeout
const timersMap = {}

window.setTimeout = function (...args) {
  const timer = windowSetTimeout.apply(this, args)
  timersMap[timer] = timer // // adding a new timer takes O(1) time since it's hashmap
  
  return timer
}

window.clearTimeout = function (timer) {
  windowClearTimeout.call(this, timer)
  delete timersMap[timer] // removal takes O(1) time since it's hashmap
}

/**
 * cancel all timer from window.setTimeout
 */
function clearAllTimeout() {
  // clearing all timout takes O(N), where N = all timeouts
 (Object.values(timersMap)).forEach((timerId) => {
  window.clearTimeout(timerId)
 })
}
