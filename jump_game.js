// leetcode #55 - Jump Game

// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.

//tabulation solution

var canJump = function(nums) {
  let table = new Array(nums.length).fill(false);
  table[0] = true;
  
  for (let i = 0; i < nums.length; i++) {
      if (table[i]) {
          for (let j = 1; j <= nums[i]; j++) {
              if (i + j >= nums.length) return true;
              table[i+j] = true;
          }
      }
  }
  
  return table[nums.length - 1];
};

const canJump2 = nums => {
  let lastPos = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] > lastPos) lastPos = i;
  }

  return lastPos == 0;
};