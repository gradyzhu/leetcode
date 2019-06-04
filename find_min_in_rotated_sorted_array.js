
// leetcode #153. Find Minimum in Rotated Sorted Array

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.

var findMin = function(nums) {
  if (nums.length == 1) return nums[0];
  if (nums[0] < nums[nums.length - 1]) return nums[0];
  if (nums[0] > nums[1]) return nums[1];
  if (nums[0] > nums[nums.length - 1]) {
      for (let i = nums.length - 1; i > 0; i--) {
          if (nums[i] < nums[i - 1]) return nums[i];
      }
  }
};