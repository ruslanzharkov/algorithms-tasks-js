// with memo recursion
function fib(n, memo = {}) {
  if(n == 0 || n == 1) return n;

  if(memo[n]) {
      return memo[n];
  }
  memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
  
  return memo[n];
}

// iterative
function fib(n) {
    if(n <= 1) return n;
    
    var pre1 = 0, pre2 = 1;
    
    for(var i = 2; i<=n; i++) {
        var cur = pre1 + pre2;
        pre1 = pre2;
        pre2 = cur;
    }
    return pre2;
}
