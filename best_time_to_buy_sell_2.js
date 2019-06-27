// leetcode 122. Best Time to Buy and Sell Stock II

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

var maxProfit = function(prices) {
  let maxProfit = 0;
  let i = 0;
  let j = 1;

  while (j < prices.length) {
      let curr = prices[i];
      let next = prices[j];
      let afterNext = prices[j+1];
      
      if (prices[i] >= prices[j]) {
          i = j;
          j++;
          continue;
      }
      
      if (curr < next && afterNext > next) {
          j++;
          continue;
      } 
       
      if (curr > next) {
          maxProfit += curr - next;
      } else {
          maxProfit += next - curr;
      }
      
      i = j+1;
      j = j+2;
  }
  
  return maxProfit;
};