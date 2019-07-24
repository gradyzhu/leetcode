// 35. Search Insert Position

var searchInsert = function(nums, target) {
  let searchRes = bSearch(nums, target);
  if (searchRes !== -1) {
      return searchRes;
  } else {
      return insert(nums, target);
  }
};

const bSearch = (arr, target) => {
  if (!arr.length) return -1;
  let mid = Math.floor(arr.length / 2); // 2
  if (arr[mid] == target) return mid;
  if (arr[mid] > target) {
      return bSearch(arr.slice(0, mid), target);
  } else {
      let right = bSearch(arr.slice(mid+1), target);
      if (right == -1) return -1;
      return mid + right + 1;
  }
};

const insert = (nums, target) => {
  let i = 0;
  while (true) {
      let curr = nums[i];
      let next = nums[i+1];
      if (target > curr && target < next) {
          return i+1;
      }
      else if (target < curr) {
          return i;
      }
      else if (i == nums.length) {
          return nums.length;
      }
      i++;
  }
};