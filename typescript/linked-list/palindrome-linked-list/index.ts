// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function isPalindrome(head: ListNode | null): boolean {
  let reverseList = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;

    const tmp = reverseList;
    reverseList = new ListNode(slow.val, tmp);
    slow = slow.next;
  }

  if (fast) {
    slow = slow.next;
  }

  while (reverseList && reverseList.val === slow.val) {
    reverseList = reverseList.next;
    slow = slow.next;
  }

  return !reverseList;
}
