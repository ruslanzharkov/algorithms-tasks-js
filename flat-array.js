// iteratively 

// N = arr.length, M = depth -> O(N*M) since on the each while loop we are checking is array inside arr or not
function flat(arr, depth = 1) {
  while (depth > 0 && arr.some(Array.isArray)) {
    depth--;
    arr = [].concat(...arr)
  }
  return arr
}
