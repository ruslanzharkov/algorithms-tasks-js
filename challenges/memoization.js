/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  const hashMap = {};

  return function(...args) {
    const resolveKey = typeof resolver === 'function' ? resolver.apply(this, args) : args.join('_');

    if (hashMap[resolveKey] !== undefined) {
      return hashMap[resolveKey];
    }

    const res = func.apply(this, args);
    hashMap[resolveKey] = res;
    return res;
  };
}
