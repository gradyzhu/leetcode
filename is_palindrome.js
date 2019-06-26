// leetcode #125. Valid Palindrome

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

var isPalindrome = function(s) {
  let newWord = removePuncs(s);
  for (let i = 0; i < newWord.length / 2; i++) {
      if (newWord[i] !== newWord[newWord.length - 1 - i]) {
          return false;
      }
  }
  return true;
};

const removePuncs = str => {
    let res = "";
    let puncs = {
        "/": true, ";": true, ",": true, ":": true,
        ".": true, "@": true, "$": true, "?": true,
        "^": true, "%": true, "*": true, "(": true,
        ")": true, "[": true, "]": true, "|": true,
        " ": true, "!": true, "{": true, "}": true,
        "#": true, "-": true, "+": true, "=": true,
        ">": true, "<": true, "\\": true, '"': true,
        "'": true, "`": true,
    };

    for (let i = 0; i < str.length; i++) {
      if (!puncs[str[i]]) {
        res += str[i].toLowerCase();
      }
    }
    return res;
};
