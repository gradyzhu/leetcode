// leetcode #78

// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

function subsets(set) {
  let res = [[]];
  for (let i = 0; i < set.length; i++) {
    let subs = [];
    for (let j = 0; j < res.length; j++) {
      subs.push(res[j].concat(set[i]));
    }
    res = res.concat(subs);
  }
  return res;
}
