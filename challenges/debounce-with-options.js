function debounce(func, wait, {leading, trailing} = {leading: false, trailing: true}) {
  let timeout = null

  return function(...args) {
    // we are using this variable for leadding true and trailing true
    let isLeading = false

    if (leading && !timeout) {
      // if leading option was used and the function was called we need to change flag to true,
      // this will prevent calling trailing option is this called and flag set to true
      func.apply(this, args)
      isLeading = true 
    }

    clearTimeout(timeout) 

    timeout = setTimeout(() => {
      // checking if leading was not called, otherwise we skip trailing because it should be correctly delayed
      // when trailing is true works as usual debounce without options
      if (trailing && !isLeading) {
        func.apply(this, args)
      }
      
      timeout = null
    }, wait)
  }
}
