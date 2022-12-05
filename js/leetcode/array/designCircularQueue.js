/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.q = new Array(k).fill(null);
  this.maxlen = k;
  this.p1 = 0;
  this.p2 = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.q[this.p2] !== null) return false;

  this.q[this.p2] = value;
  this.p2 = (this.p2 + 1) % this.maxlen;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.q[this.p1] === null) return false;

  this.q[this.p1] = null;
  this.p1 = (this.p1 + 1) % this.maxlen;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.q[this.p1] !== null ? this.q[this.p1] : -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  let last = this.p2 - 1 === -1 ? this.maxlen - 1 : this.p2 - 1;
  return this.q[last] !== null ? this.q[last] : -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.p1 === this.p2 && this.q[this.p1] === null;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.p1 === this.p2 && this.q[this.p1] !== null;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
