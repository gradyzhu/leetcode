// 300. Longest Increasing Subsequence

var lengthOfLIS = function(nums) {
  if (!nums.length) return [];
  let dp = new Array(nums.length).fill(1);
  let i = 1;
  
  while (i < nums.length) {
      let j = 0;
      while (j < i) {
          if (nums[j] < nums[i]) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
          }
          j++;
      }
      i++;
  }

  return Math.max(...dp);
};


