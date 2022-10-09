// Kadane's algorithm with index positions of contiguos max sum

let findMaxSumSubArray = function(A) {
  let sum = 0;
  let maxSum = -Infinity;
  let start = 0;
  let end = 0;
  let s = 0;

  for (let i = 0; i < A.length; i++) {
    if (sum < 0) {
      sum = A[i];
      s = i;
    } else {
      sum += A[i];
    }

    if (maxSum < sum) {
      maxSum = sum;
      start = s;
      end = i;
    }
  }

  return maxSum
};
