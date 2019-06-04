// leetcod #19

// Given a linked list, remove the n-th node from the end of list and return its head.


var removeNthFromEnd = function(head, n) {
  let lengths = length(head);
  if (lengths == 1 && n == 1) return null;
  if (lengths == n) return head.next;
  
  let count = lengths - n - 1;
  let curr = head;
  
  while(count && curr.next) {
      curr = curr.next;
      count--;
  }

  if (curr.next) {
      curr.next = curr.next.next;
      return head;
  }

};

const length = head => {
  let length = 0;
  let curr = head;
  while(curr) {
      curr = curr.next;
      length++;
  }
  return length;
};