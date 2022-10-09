

/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  return function(value) {
    const res = funcs.reduce((acc, val) => {
      return val(acc)
    }, value);
    return res;
  }
}
