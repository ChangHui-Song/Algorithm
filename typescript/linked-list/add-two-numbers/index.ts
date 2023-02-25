import { ListNode } from '../utils';

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const head = new ListNode(-1);
  let cur = head;
  let up = 0;

  while (l1 || l2 || up) {
    let sum = up;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    cur.next = new ListNode(sum % 10);
    up = Math.floor(sum / 10);
    cur = cur.next;
  }

  return head.next;
}
