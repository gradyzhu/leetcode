
// leetcode 704;

var search = function(nums, target) {
  if (nums.length == 0) return -1
  let mid = Math.floor(nums.length / 2);
  if (nums[mid] === target) return mid;
  if (target < nums[mid]) {
      return search(nums.slice(0, mid), target)
  } else {
      let res = search(nums.slice(mid+1), target);
      if (res == -1) return res;
      return res + 1 + mid;
 }
};