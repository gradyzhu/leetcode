// leetcode #21 

// Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

var mergeTwoLists = function(l1, l2) {
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
};