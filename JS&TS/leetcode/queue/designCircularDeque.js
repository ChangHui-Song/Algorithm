var ListNode = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.head = new ListNode(null);
  this.tail = new ListNode(null);
  this.k = k;
  this.len = 0;
  this.head.right = this.tail;
  this.tail.left = this.head;
};

/**
 * @param {ListNode} node
 * @param {ListNode} newNode
 */
MyCircularDeque.prototype.add = function (node, newNode) {
  const n = node.right;
  node.right = newNode;
  newNode.left = node;
  newNode.right = n;
  n.left = newNode;
};

/**
 * @param {ListNode} node
 */
MyCircularDeque.prototype.del = function (node) {
  const n = node.right.right;
  node.right = n;
  n.left = node;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.k === this.len) return false;

  this.len += 1;
  const newNode = new ListNode(value);
  this.add(this.head, newNode);
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.k === this.len) return false;

  this.len += 1;
  const newNode = new ListNode(value);
  this.add(this.tail.left, newNode);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (!this.len) return false;

  this.len -= 1;
  this.del(this.head);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (!this.len) return false;

  this.len -= 1;
  this.del(this.tail.left.left);
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  return this.len ? this.head.right.val : -1;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  return this.len ? this.tail.left.val : -1;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.len === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.len === this.k;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
