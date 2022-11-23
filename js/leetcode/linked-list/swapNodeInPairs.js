/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const root = new ListNode();
  let prev = root;
  prev.next = head;

  while (head && head.next) {
    let b = head.next;
    head.next = b.next;
    b.next = head;

    prev.next = b;

    head = head.next;
    prev = prev.next.next;
  }

  return root.next;
};
