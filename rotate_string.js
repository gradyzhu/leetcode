
// leetcode 796

var rotateString = function(a, b) {
  if (a.length !== b.length) return false;
  if (!a.length) return true;
  for (let i = 0; i < a.length; i++) {
      a = a.slice(1) + a[0];
      if (a == b) return true;
  }
  return false;
};