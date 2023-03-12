export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const convertArrayToList = (array: number[]): ListNode | null => {
  if (!array) return null;

  const head = new ListNode(-1);
  let prev = head;

  for (let i = 0; i < array.length; i++) {
    prev.next = new ListNode(array[i]);
    prev = prev.next;
  }

  return head.next;
};
