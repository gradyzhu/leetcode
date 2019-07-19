// leetcode 81

var search = function(nums, target) {
  if (nums.length == 0) return false;
  if (nums.length == 1) return nums[0] === target;
  if (nums[0] == target || nums[nums.length -1] == target) return true;
  if (nums[0] < nums[nums.length - 1]) {
      return bSearch(nums, target);
  } else {
      let pivot = findPivot(nums);
      if (pivot == -1) return false;
      if (target == nums[pivot]) return true;
      if (target > nums[pivot] && target <= nums[nums.length - 1]) {
          return bSearch(nums.slice(pivot + 1), target);
      } else {
          return bSearch(nums.slice(0, pivot), target);
      }
  }
};

const bSearch = (arr, target) => {
  let mid = Math.floor(arr.length / 2);
  if (arr.length == 0) return false;
  if (target == arr[mid]) return true;
  if (target < arr[mid]) {
      return bSearch(arr.slice(0, mid), target);
  } else {
      return bSearch(arr.slice(mid+1), target);
  }
}


const findPivot = arr => {
  let low = 0;
  let high = arr.length - 1;
  
  while (arr[low] === arr[high] && arr.length) {
      arr.pop();
      high--;
  }
  
  if (!arr.length) return -1;
  
  while (low < high) {
      let mid = Math.floor((low + high) / 2)
      if (arr[mid] > arr[high]) {
          low = mid + 1;
      } else {
          high = mid;
      }
  }
  return low;
  
}