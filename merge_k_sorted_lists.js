// #leetcode 23

// Merge k Sorted Lists

// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

var mergeKLists = function(lists) {
  let res = null;
  for (let i = 0; i < lists.length; i++) {
      if (!res) {
          res = lists[i];
      } else {
          res = mergetwoList(res, lists[i]);
      }
  }
  return res;
};

const mergetwoList = (l1, l2) => {
if (!l1 && !l2) return null;
if (!l1) return l2;
if (!l2) return l1;

let curr = l1.val < l2.val ? l1 : l2;
let other = curr === l1 ? l2 : l1;
let head = curr;

while (curr) {
    let next = curr.next;

    if (!next) {
        curr.next = other;
        curr = null;
        continue;
    }
    
    if (next.val > other.val) {
        curr.next = other;
        curr = other;
        other = next;
    } else {
        curr = next;
    }
}

return head;
}