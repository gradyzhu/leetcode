
// leetcode #347

// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Note:

// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */

var topKFrequent = function(nums, k) {
  let hash = {};
  let res = [];
    
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] in hash) {
          hash[nums[i]]++;
      } else {
          hash[nums[i]] = 1;
      }
  }

  let sortedKeys = Object.keys(hash).sort((a,b) => hash[b] - hash[a]);
  
  let prev = null;
  while (res.length < k) {
      if (sortedKeys[0]) {
          res.push(sortedKeys[0]);
          prev = sortedKeys[0];
      } else {
          res.push(prev);
      }
      sortedKeys.shift();
  }
  
  return res;
};