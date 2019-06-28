
// #leetcode 77. Combinations

// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

var combine = function(n, k) {
  dfs(1, k, [], res = [], n);
  return res;
};

const dfs = (idx, k, combo, res, n) => {
  if (combo.length == k) {
      res.push(combo);
      return;
  }
  
  for (let i = idx; i <= n; i++) {
      dfs(i+1, k, combo.concat(i), res, n);
  }
};

