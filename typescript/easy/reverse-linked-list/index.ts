import { ListNode } from '../../utils';

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;
  const reverse = (node: ListNode, prev: ListNode | null = null): ListNode => {
    if (!node) return prev;

    const next = node.next;
    node.next = prev;

    return reverse(next, node);
  };

  return reverse(head);
}
