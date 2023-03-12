import { convertArrayToList, ListNode } from '../../utils';

export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head || left === right) return head;

  const root = new ListNode(0, head);
  let start = root;
  for (let i = 0; i < left - 1; i++) {
    start = start.next;
  }
  const end = start.next;

  for (let i = 0; i < right - left; i++) {
    const tmp = end.next;
    end.next = tmp.next;
    tmp.next = start.next;
    start.next = tmp;
  }

  return root.next;
}
