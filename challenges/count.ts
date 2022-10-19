type func = {
  val?: number;
  reset(): void;
  (): number;
}

const count: func = function() {
  count.val = count.val ? count.val : 0;

  return ++count.val;
}

count.reset = () => { count.val = 0 }


// IIFE
const count = ( () => {
  let num = 0;

  const func = () => {
    return ++num;
  }
  func.reset = () => {
    num = 0;
  }
  return func;
})();
