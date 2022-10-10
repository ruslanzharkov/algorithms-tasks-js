function debounce(func, wait) {
  let timeout = null;
  return function(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func.apply(this, args), wait);
  }
}
