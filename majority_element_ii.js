// leetcode 229

var majorityElement = function(nums) {
  let max = Math.floor(nums.length / 3);
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]]) {
          hash[nums[i]] += 1
      } else {
          hash[nums[i]] = 1
      }
  }
  let res = [];
  
  for (let key in hash) {
      if (hash[key] > max) res.push(key);
  }

  return res;
};