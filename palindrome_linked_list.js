// 234. Palindrome Linked List

var isPalindrome = function(head) {
  if (!head) return true;
  let mid = findMid(head);
  let reversed = reverseList(mid);
  
  while (reversed) {
      if (head.val !== reversed.val) return false;
      head = head.next;
      reversed = reversed.next;
  }
      
  return true;
};

const reverseList = head => {
  if (!head.next) return head;
  let node = head, previous = null;

  while (node) {
      let tmp = node.next;
      node.next = previous;
      previous = node;
      node = tmp;
  }
  return previous;
};

const findMid = head => {
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      count++;
  }
  
  return slow;
};