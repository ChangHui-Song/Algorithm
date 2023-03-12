import { MyCircularDeque } from '.';

describe('circular deque test suit', () => {
  let circularDeque: MyCircularDeque;
  beforeAll(() => {
    circularDeque = new MyCircularDeque(3);
  });

  afterAll(() => {
    circularDeque = undefined;
  });
  test('insertLast', () => {
    expect(circularDeque.insertLast(1)).toBe(true);
    expect(circularDeque.getFront()).toBe(1);
    expect(circularDeque.getRear()).toBe(1);
  });
  test('insertLast', () => {
    expect(circularDeque.insertLast(2)).toBe(true);
    expect(circularDeque.getFront()).toBe(1);
    expect(circularDeque.getRear()).toBe(2);
  });
  test('insertFront', () => {
    expect(circularDeque.insertFront(3)).toBe(true);
    expect(circularDeque.getFront()).toBe(3);
    expect(circularDeque.getRear()).toBe(2);
  });
  test('insertFront', () => {
    expect(circularDeque.insertFront(4)).toBe(false);
    expect(circularDeque.getFront()).toBe(3);
    expect(circularDeque.getRear()).toBe(2);
  });
  test('getRear', () => {
    expect(circularDeque.getRear()).toBe(2);
  });
  test('deleteLast', () => {
    expect(circularDeque.deleteLast()).toBe(true);
    expect(circularDeque.getFront()).toBe(3);
    expect(circularDeque.getRear()).toBe(1);
  });
  test('insertFront', () => {
    expect(circularDeque.insertFront(4)).toBe(true);
    expect(circularDeque.getFront()).toBe(4);
    expect(circularDeque.getRear()).toBe(1);
  });
  test('getFront', () => {
    expect(circularDeque.getFront()).toBe(4);
  });
});
