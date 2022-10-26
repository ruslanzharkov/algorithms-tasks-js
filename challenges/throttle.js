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


// approach 2

function throttle2(func, wait) {
  let isThrottled = false;
  let savedArgs = null;
  
  function wrapper(...args) {
    if (isThrottled) {
      savedArgs = args;
      return;
    }

    func.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;

      if (savedArgs) {
        wrapper.apply(this, savedArgs);
        savedArgs = null
      }
    }, wait);

  }

  return wrapper;
}
