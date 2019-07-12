
// 64. Minimum Path Sum

var minPathSum = function(grid) {
  if (!grid.length) return 0;
  let m = grid.length;
  let n = grid[0].length;
  
  let dp = new Array(m).fill(null).map(row => new Array(n).fill(0));
  
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (i == 0 && j == 0) {
              dp[i][j] = grid[i][j];
              continue;
          }
          if (i == 0) {
              dp[i][j] = grid[i][j] + dp[i][j-1];
              continue;
          }
          if (j == 0) {
              dp[i][j] = grid[i][j] + dp[i-1][j];
              continue;
          }
          dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1])
      }
  }
  
  return dp[m-1][n-1];
};