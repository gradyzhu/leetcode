// 162. Find Peak Element

var findPeakElement = function(nums) {
  if (nums.length == 1) return 0;
  if (nums.length == 0) return -1;
  let mid = Math.floor(nums.length / 2);
  if (nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) return mid;
  if (nums[mid] > nums[mid-1]) {
      return mid + findPeakElement(nums.slice(mid+1)) + 1;
  } else {
      return findPeakElement(nums.slice(0, mid));
  }
};