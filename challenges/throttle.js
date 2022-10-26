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
