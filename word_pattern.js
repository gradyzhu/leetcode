
// leetcde 290

var wordPattern = function(pattern, str) {
  let hash = {};
  let words = str.split(" ");
  
  if (pattern.split('').length !== words.length) return false;
  for (let i = 0; i < pattern.length; i++) {
      let char = pattern[i];
      let word = words[i];
      if (!hash[char] && valueExists(hash, word)) {
          hash[char] = word;
      } else {
          if (hash[char] !== word) return false;
      }
  }
  
  return true;
};

const valueExists = (hash, word) => {
  let values = Object.values(hash);
  return values.every(value => value !== word);
};
