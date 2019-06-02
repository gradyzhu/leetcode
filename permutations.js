
// permutations #46

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
  if (nums.length <= 1) return [nums];
  
  let res = [];
  
  for (let i = 0; i < nums.length; i++) {
      let curr = nums[i];
      let rest = nums.slice(0, i).concat(nums.slice(i+1));
      let permsOfRest = permute(rest);
  
      for (let i = 0; i < permsOfRest.length; i++) {
          res.push([curr].concat(permsOfRest[i]));
      }
  }
  
  return res;
};