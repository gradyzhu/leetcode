
// leetcode #39 - Combination Sum

// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:

// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]


var combinationSum = function(candidates, target) {
  explore(candidates, target, 0, [], res = []);
  return res;
};

const explore = (candidates, target, idx, combo, res) => {
  if (target < 0) return;
  if (target == 0) {
      res.push(combo);
  }
  for (let i = idx; i < candidates.length; i++) {
      if (candidates[i] > target) continue;
      explore(candidates, target - candidates[i], i, combo.concat(candidates[i]), res);
  }
};