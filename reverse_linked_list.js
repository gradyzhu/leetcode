// leetcode #206

// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (curr) {
      let next = curr.next;
      curr.next = prev; // A now points to Null
      prev = curr; // prev now points to A
      curr = next; // current now points to B
  }
  return prev;
};