// iteratively 

// N = arr.length, M = depth -> O(N*M) since on the each while loop we are checking is array inside arr or not
function flat(arr, depth = 1) { 
  let res = [...arr]
  
  while (depth > 0 && res.some(Array.isArray)) {
    depth--
    res = [].concat(...res)
  }

  return res
}

// recursive

function flat(arr, depth = 1) { 
  return arr.reduce((acc, val) => {
    if (Array.isArray(val) && depth >= 1) {
      acc = flat(acc.concat(val), depth - 1)
    } else {
      acc.push(val)
    }
    return acc;
  }, []);
}
