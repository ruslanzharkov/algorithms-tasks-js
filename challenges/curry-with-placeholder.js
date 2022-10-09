/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curried(...args) {
    const cleaned = args.slice(0, fn.length);
    const hasPlaceholder = args.some(arg => arg === curry.placeholder);

    if (!hasPlaceholder && cleaned.length >= fn.length) {
      return fn.apply(this, cleaned);
    } else {
      return function additional(...rest) {
        return curried.apply(this, merge(cleaned, rest))
      }
    }
  }
}

function merge(args, nextArgs) {
  return args.reduce((acc, val) => {
    if (val === curry.placeholder) {
      acc.push(nextArgs.shift());
    } else {
      acc.push(val)
    }
    return acc;
  }, []).concat(nextArgs);
}

curry.placeholder = Symbol()



