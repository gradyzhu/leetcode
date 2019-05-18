

// leetcode #189

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */

var rotate = function(nums, k) {
  while (k != 0) {
      nums.unshift(nums.pop());
      k--;
  }
  return nums;
};

const rotate2 = (nums, k) => {
  return nums.slice(k+1).concat(nums.slice(0, k+1));
};