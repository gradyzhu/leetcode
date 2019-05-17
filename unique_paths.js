
// leetcode #62

// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?


// Above is a 7 x 3 grid. How many possible unique paths are there?

// Note: m and n will be at most 100.

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// Example 2:

// Input: m = 7, n = 3
// Output: 28


// memoizaton solution

var uniquePaths = function(m, n, memo = {}) {
  if ([m, n] in memo) return memo[[m,n]]
  if (m < 2 || n < 2) return 1;
  memo[[m, n]] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
  return memo[[m,n]];
};

// tabulation solution

const uniquePaths2 = function(m, n) {
  let res = Array(m).fill(new Array(n).fill(1));
  
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          res[i][j] = res[i - 1][j] + res[i][j-1];
      }
  }
  
  return res[m - 1][n - 1];
};