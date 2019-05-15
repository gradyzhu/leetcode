// leetcode #33

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

var search = function(nums, target, count = 0) {
    
  let length = nums.length - 1;
  let frontCount = 0;
  let backCount = 0;

  while (nums.length) {
      if (target < nums[0] && target > nums[length - backCount - frontCount]) return -1;
      if (nums[0] === target) return frontCount;
      if (nums[length - backCount] === target) return length - backCount;
  
      if (target > nums[0]) {
          nums.shift();
          frontCount++;
          continue;
      }

      if (target < nums[length - backCount - frontCount]) {
          nums.pop();
          backCount++;
          continue;
      }
  }
  
  return -1;
};