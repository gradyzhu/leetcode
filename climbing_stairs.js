// leetcode #70

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// O(n) - memoization solution
var climbStairs = function(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1) return 1;
  if (n === 2) return 2;
  
  memo[n-1] = climbStairs(n-1, memo);
  memo[n-2] = climbStairs(n-2, memo);
  memo[n] = memo[n-1] + memo[n-2];
  
  return memo[n];
};

// 0(n) - tabulation solution
var climbStairs = function(n) {
  let table = new Array(n + 1);   // create array with length n + 1
  table[0] = 1;
  table[1] = 1;
  for (let i = 2; i < table.length; i++) {
      table[i] = table[i-1] + table[i-2];
  }
  return table[table.length-1];
};