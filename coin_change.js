
// 322. Coin Change

var coinChange = function(coins, amount) {
  if (amount == 0) return 0;
  coins.sort((a,b) => a - b);

  let dp = new Array(amount+1).fill(amount + 1);
  dp[0] = 0;
  
  for (let i = 1; i < dp.length; i++) {
      for (let j = 0; j < coins.length; j++) {
          if (i < coins[j]) continue;
          dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};