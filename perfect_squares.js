// leetcode 279

// initution
// we find all solutions for 1... n;
// fill dp table with an arbitrarily large number
// take the minimum between the current solution, and all possible solutions for numbers that when squared are below n.

// dp table represents the min number of squares needed to make that value.

var numSquares = function(n) {
  let dp = new Array(n+1).fill(Infinity);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 1; i <= n; i++) {
      let currValue = i; 
      for (let j = 1; j * j <= currValue; j++) {
        let squareValue = j * j;
        let difference = currValue - squareValue;
        dp[i] = Math.min(dp[i], dp[difference] + 1);
      }
  }
  
  return dp[n];
};