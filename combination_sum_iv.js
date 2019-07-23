// 377. Combination Sum IV

const combinationSum4 = (nums, target, memo = {}) => {
  if (target in memo) return memo[target];
  if (target == 0) return 1;
  nums = nums.sort((a,b) => a-b);
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
      let curr = nums[i];
      if (curr > target) break;
      memo[target-curr] = combinationSum4(nums, target - curr, memo);
      count += memo[target-curr];
  }
  
  return count;
};