
// 268. Missing Number

// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

var missingNumber = function(nums) {
  let fullArr = new Array(nums.length + 1).fill(null);
  
  for (let i = 0; i < nums.length; i++) {
      let curr = nums[i];
      fullArr[curr] = curr;
  }

  for (let idx in fullArr) {
      if (fullArr[idx] == null) return idx;
  }
  
};