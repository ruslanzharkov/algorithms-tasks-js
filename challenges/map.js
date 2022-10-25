Array.prototype.myMap = function(callback, obj = {}) {
  if (typeof callback !== 'function') throw new TypeError('Callback should be a function');

  const length = this.length
  const arr = new Array(length);

  for (let i = 0; i < length; i++) {
    if (i in this) {
      const result = callback.apply(obj, [this[i], i, this]);
      arr[i] = result;
    }
  }

  return arr;
}
