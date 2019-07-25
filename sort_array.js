// 912 Sort an Array

var sortArray = function(nums) {
  if (!nums.length) return [];
  let pivot = nums[0];
  let left = [];
  let right = [];
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] < pivot) {
          left.push(nums[i]);
      } else {
          right.push(nums[i]);
      }
  }
  return sortArray(left).concat([pivot]).concat(sortArray(right));
};