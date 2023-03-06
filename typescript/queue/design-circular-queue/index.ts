export class MyCircularQueue {
  private queue: Array<number>;
  private maxLen: number;
  private p1 = 0;
  private p2 = 0;

  constructor(k: number) {
    this.queue = new Array<number>(k).fill(undefined);
    this.maxLen = k;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    this.queue[this.p2] = value;
    this.p2 = (this.p2 + 1) % this.maxLen;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    this.queue[this.p1] = undefined;
    this.p1 = (this.p1 + 1) % this.maxLen;
    return true;
  }

  Front(): number {
    return this.queue[this.p1] !== undefined ? this.queue[this.p1] : -1;
  }

  Rear(): number {
    return this.queue.at(this.p2 - 1) !== undefined
      ? this.queue.at(this.p2 - 1)
      : -1;
  }

  isEmpty(): boolean {
    return this.p1 === this.p2 && this.queue[this.p1] === undefined;
  }

  isFull(): boolean {
    return this.p1 === this.p2 && this.queue[this.p1] !== undefined;
  }
}
