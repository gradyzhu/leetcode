

// 448. Find All Numbers Disappeared in an Array

// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

var findDisappearedNumbers = function(nums) {
  let sorted = nums.sort();
  let res = [];
  let set = new Set();
  
  for (let i = 0; i < nums.length; i++) {
      set.add(nums[i]);
  }
  
  for (let i = 0; i < sorted.length; i++) {
      let next = i+1;
      if (sorted[i] != next) {
          if (!set.has(next)) res.push(next);
      }
  }
  
  return res;
};