
// 75. Sort Colors

var sortColors = function(nums) {
  let j = 0;
  let k = nums.length - 1;
  
  for (let i = 0; i <= k; i++) {
      if (nums[i] == 0) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          j++;
      } else if (nums[i] == 2) {
          [nums[i], nums[k]] = [nums[k], nums[i]];
          i--;
          k--;
      }
  }
  
  return nums;
};