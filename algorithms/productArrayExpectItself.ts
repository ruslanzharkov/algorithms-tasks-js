
/**
* This functions uses Bidirectional product accumulation approach, first we mutliple items by shifting array to 1 position further
* then we traverse array again from right to left with the same shift not including current item element
*/
function productExceptSelf(nums: number[]): number[] {
  let left = 1
  const product = [left]; //initializing with left as 1 because of multiplication by 1 and except the item itself

  for (let i = 1; i < nums.length; i++) {
    left *= nums[i-1]; // multiplication of current left with previous to always have prev result
    product[i] = left; // setting prev resulst which means except current item
  }

  // below we are doing the same, but form the right side
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    product[i] = product[i] * right; 
    right *= nums[i];
  }

  return product
};
