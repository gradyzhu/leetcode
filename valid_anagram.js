

// leetcode #242

// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

var isAnagram = function(s, t) {
  let hash = {};
  
  if (s.length !== t.length) return false;
  
  for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) in hash) {
          hash[s.charAt(i)]++;
      } else {
          hash[s.charAt(i)] = 1;
      }
  }
  
  for (let i = 0; i < t.length; i++) {
      if (t.charAt(i) in hash) {
          hash[t.charAt(i)]--;
      } else {
          hash[t.charAt(i)] = 1;
      }
  }
  
  for (var key in hash) {
      if (hash[key] !== 0) return false;
  }
  
  return true;
};