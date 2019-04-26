// leetcode #90

// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

var subsetsWithDup = function(nums) {
  let res = [[]];
  let hash = {};
  
  for (let i = 0; i < nums.length; i++) {
      let subs = [];
      for (let j = 0; j < res.length; j++) {
          let currSub = res[j].concat(nums[i]).sort();
          if (!(currSub in hash)) {
              subs.push(currSub);
              hash[currSub] = currSub;
          }
      }
      res = res.concat(subs);
  }
  return res;
};