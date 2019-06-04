
// leetcode #46

// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

var permute = function(nums) {
  // base - when length < 1, it is the only permutation, a 2d array
  if (nums.length <= 1) return [nums];  
  
  let res = [];
  
  for (let i = 0; i < nums.length; i++) {
      let curr = nums[i];
      let rest = nums.slice(0, i).concat(nums.slice(i+1));
      let permsOfRest = permute(rest);  // expecting [[2,3][3,2]]
  
      // iterating through the permutations
      // we concat curr iteration's char with each perm, and add it to the 
      for (let j = 0; j < permsOfRest.length; j++) {
        // when i = 0, j = 1, [1].concat([2,3])
        // when i = 0, j = 2, [1].concat([3,2])
        // when i = 1, j = 1, [2].concat([2,3])
        // when i = 1, j = 2, [2].concat([3,2])
        // when i = 2, j = 1, [2].concat([2,3])
        // when i = 2, j = 2, [2].concat([3,2])
        res.push([curr].concat(permsOfRest[j])); 
      }
  }
  
  return res;
};