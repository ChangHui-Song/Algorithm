export class MyCircularDeque {
  private deque: Array<number>;
  private head: number;
  private tail: number;
  private maxLen: number;

  constructor(k: number) {
    this.deque = new Array(k).fill(undefined);
    this.head = 0;
    this.tail = 0;
    this.maxLen = k;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    if (!this.isEmpty()) {
      this.head = (this.head - 1 + this.maxLen) % this.maxLen;
    }
    this.deque[this.head] = value;

    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    if (!this.isEmpty()) {
      this.tail = (this.tail + 1) % this.maxLen;
    }
    this.deque[this.tail] = value;

    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    this.deque[this.head] = undefined;
    if (this.head !== this.tail) {
      this.head = (this.head + 1) % this.maxLen;
    }
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    this.deque[this.tail] = undefined;
    if (this.head !== this.tail) {
      this.tail = (this.tail - 1 + this.maxLen) % this.maxLen;
    }
    return true;
  }

  getFront(): number {
    return this.isEmpty() ? -1 : this.deque[this.head];
  }

  getRear(): number {
    return this.isEmpty() ? -1 : this.deque[this.tail];
  }

  isEmpty(): boolean {
    return this.head === this.tail && this.deque[this.head] === undefined;
  }

  isFull(): boolean {
    const nextIndex = (this.tail + 1) % this.maxLen;
    return this.deque[nextIndex] !== undefined;
  }
}
