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
  let table = [[]];
  for (let i = 0; i < set.length; i++) {
    let subs = [];
    for (let j = 0; j < table.length; j++) {
      subs.push(table[j].concat(set[i]));
    }
    table = table.concat(subs);
  }
  return table;
}

function subsets(set, memo = {}) {
  if (set in memo) return memo[set];
  if (set.length == 0) return [[]];
  let last = set[set.length - 1];
  let sliced = set.slice(0, set.length - 1);
  memo[sliced] = subsets(sliced, memo);
  debugger;
  memo[sliced].forEach(sub => {
    debugger;
    let temp = sub.slice();
    let arr = [];
    arr.push(temp.concat(last));
    memo[set] = arr;
  });
  return memo[set];
}
