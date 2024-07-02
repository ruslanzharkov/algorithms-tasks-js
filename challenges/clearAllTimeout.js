(function() {
  const windowSetTimeout = window.setTimeout
  window.setTimeout = function (...args) {
  const timeout = windowSetTimeout.apply(this, args)
  
  if (Array.isArray(window.timeouts)) {
    window.timeouts.push(timeout)
  } else {
    window.timeouts = [timeout]
  }

  return timeout
}
})()


/**
 * cancel all timer from window.setTimeout
 */
function clearAllTimeout() {
 (window.timeouts || []).forEach((timerId) => {
  clearTimeout(timerId)
 })
}
