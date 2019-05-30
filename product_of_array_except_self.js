// leetcode #238

// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// O(n) solution

var productExceptSelf = function(nums) {
  let res = [];
  let left = [1];
  let right = [];
  
  for (let i = 1; i < nums.length; i++) {
      left[i] = left[i-1] * nums[i-1];
  }
  
  for (let i = nums.length - 1; i >= 0; i--) {
      if (i === nums.length - 1) {
          right[i] = 1;
          res[i] = right[i] * left[i];
          continue;
      }
      right[i] = right[i+1] * nums[i+1];
      res[i] = right[i] * left[i];
  }
  
  return res;
};