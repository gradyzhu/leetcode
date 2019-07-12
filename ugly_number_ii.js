// Write a program to find the n-th ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

// Example:

// Input: n = 10
// Output: 12
// Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
// Note:  

// 1 is typically treated as an ugly number.
// n does not exceed 1690.

var nthUglyNumber = function(n) {
  if (n == 0) return null;
  let dp = [1];
  
  let idx2 = 0;
  let idx3 = 0;
  let idx5 = 0;
  
  let i = 1;
  while (dp.length !== n) {
      let next2m = dp[idx2] * 2;
      let next3m = dp[idx3] * 3;
      let next5m = dp[idx5] * 5;
      
      dp[i] = Math.min(next2m, next3m, next5m);
      
      if (dp[i] === next2m) idx2++;
      if (dp[i] === next3m) idx3++;
      if (dp[i] === next5m) idx5++;
      
      i++;
  }
  
  return dp[n-1];
};