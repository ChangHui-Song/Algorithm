/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let rev = undefined;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    let temp = rev;
    rev = new ListNode(slow.val, temp);
    slow = slow.next;
  }
  if (fast) {
    slow = slow.next;
  }

  while (rev && rev.val === slow.val) {
    slow = slow.next;
    rev = rev.next;
  }
  return !rev;
};
