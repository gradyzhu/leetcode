// #leetcode 49. Group Anagrams

// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

var groupAnagrams = function(strs) {
  let obj = {};
  
  for (let i = 0; i < strs.length; i++) {
      let sorted = strs[i].split('').sort().join('');
      if (obj[sorted]) {
          obj[sorted].push(strs[i]);
      } else {
          obj[sorted] = [strs[i]];
      }
  }
  
  return Object.values(obj);
};