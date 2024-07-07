/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
  let isThrottled = false;
  let savedArgs = null;
  
  return function wrapper(...args) {
    if (isThrottled) {
      savedArgs = args;
    } else {
      func.apply(this, args);
      isThrottled = true;
      
      setTimeout(() => {
        isThrottled = false;
        if (savedArgs) {
          func.apply(this, savedArgs)
        }
      }, wait); 
    }
  }
}


// approach 2 recursive function
function throttle2(fn, t) {
  let savedArgs = null
    let isThrottling = false

    const setTimer = () => {
        setTimeout(() => {
            isThrottling = false
            if (savedArgs) {
                fn.apply(this, savedArgs)
                savedArgs = null
                isThrottling = true
                setTimer()
            }
        }, t)
    }

    return function(...args) {
        if (!isThrottling) {
            fn.apply(this, args)
            isThrottling = true
        } else {
            savedArgs = args
            return
        }

        setTimer()
    }
}
