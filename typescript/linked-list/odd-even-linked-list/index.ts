import { ListNode } from '../utils';

export function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return head;

  const evenHead = head.next;
  let odd = head;
  let even = evenHead;

  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
}
