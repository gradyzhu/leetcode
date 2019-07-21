
// leetcode 213. House Robber II

var rob = function(nums) {
  if (!nums.length) return 0;
  if (nums.length == 1) return nums[0];
  return Math.max(
      robRange(nums.slice(0, nums.length - 1)), 
      robRange(nums.slice(1, nums.length)));
};

const robRange = (arr) => {
  if (arr.length == 0) return 0;
  if (arr.length == 1) return arr[0];
  if (arr.length == 2) return Math.max(arr[0], arr[1]);
  
  let dp = new Array(arr.length);
  dp[0] = arr[0];
  dp[1] = Math.max(arr[0], arr[1]);
  
  for (let i = 2; i < arr.length; i++) {
      dp[i] = Math.max(arr[i] + dp[i-2], dp[i-1]);
  }
  
  return dp[dp.length - 1];
};