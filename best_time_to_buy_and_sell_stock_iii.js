// leetcode #123. Best Time to Buy and Sell Stock III

// the dp table represents the max profit on any
// given day (j) and a number of transactions (i).

// intuition 
    // - all transactions require 2 days, a buy and sell day

    // - we'll iterate through the prices array

    // - at each price, we want to check ALL previous days (m) to see 
    //   if we can find a greater maxProfit.

    // - this requires that we take a range from day 1 (j = 0) 
    //   to day previous to the current day (m = j-1)

    // - day m represents
    //       1. the day we purchased the stock we end up selling on day j
    //       2. the day we sold the stock from the previous transaction

    // - when we decide to transact on day, we have to account for this transaction
    //   by taking the maxProfit[i-1][m]

    // - we arrive at the formula to calculate transacting on any given day

    //      prices[j] - prices[m] + maxProfit[i-1][m]

    // - we'd want to take the greatest out of transacting on day m.
    // - however, if we already have a greater maxProfit, we wouldnt want to transact at all.
    // - we'd just take the previous day

//      prices[i][j-1]

var maxProfit = function(prices) {
  if (!prices.length) return 0;
  let dp = new Array(3).fill(null).map(row => new Array(prices.length).fill(0));
  
  for (let i = 1; i <= 2; i++) {
      for (let j = 1; j < prices.length; j++) {
          let noTransProfit = dp[i][j - 1];
          let transProfit = 0;
          
          for (let m = 0; m < j; m++) {
              let currTrans = prices[j] - prices[m];
              let restOfTrans = dp[i-1][m];
              let profitAtM = currTrans + restOfTrans;
              if (profitAtM > transProfit) transProfit = profitAtM;
          }
          dp[i][j] = Math.max(noTransProfit, transProfit)
      }
  }
      
  return dp[2][prices.length -1]
}
