
// 152. Maximum Product Subarray

var maxProduct = function(nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let answer = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      let currMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin);
      let currMin = Math.min(nums[i], nums[i] * prevMax, nums[i] * prevMin);
      
      answer = Math.max(answer, currMax);
      prevMax = currMax;
      prevMin = currMin;
  }
      
  return answer;
};