// leetcode 387

var firstUniqChar = function(s) {
  let obj = new Object;
  if (!s.length) return -1;
  
  for (let i = 0; i < s.length; i++) {
      if (obj[s[i]]) {
          obj[s[i]]++;
      } else {
          obj[s[i]] = 1;
      }
  }
  
  for (let i = 0; i < s.length; i++) {
      if (obj[s[i]] === 1) return i;
  }
  
  return -1;
};