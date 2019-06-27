// leetcode 188. Best Time to Buy and Sell Stock IV

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete at most k transactions.

// Note:
// You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).



var maxProfit = function(k, prices) {
  if (prices.length < 1) return 0;
  let dp = new Array(k+1).fill(null).map(row => new Array(prices.length).fill(0));
  for (let i = 1; i <= k; i++) {
      let maxDiff = -prices[0];
      for (let j = 1; j < prices.length; j++) { 
          maxDiff = Math.max(maxDiff, dp[i-1][j-1] - prices[j-1]);
          let noTransProfit = dp[i][j - 1];
          let transProfit = maxDiff + prices[j];
          dp[i][j] = Math.max(noTransProfit, transProfit);
      }
  }
      
  return dp[k][prices.length -1];
};
