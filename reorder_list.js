
// leetcode #143. Reorder List

// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You may not modify the values in the list's nodes, only nodes itself may be changed.

var reorderList = function(head) {
  if (!head) return null;
  if (!head.next) return head;
  let arr = makeArr(head);
  let curr = head;
  let back = true;
  
  while (arr.length) {
      if (back) {
          curr.next = arr.pop();
          curr = curr.next;
          back = false;
      } else {
          curr.next = arr.shift();
          curr = curr.next;
          back = true;
      }
  }
  
  curr.next = null;
  
  return head;
};

const makeArr = head => {
  let arr = [];
  
  let curr = head.next;
  while (curr) {
     arr.push(curr);
      curr = curr.next;
  }
  
  return arr;
};