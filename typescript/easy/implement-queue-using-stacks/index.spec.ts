import { MyQueue } from '.';

describe(' description', () => {
  let queue: MyQueue;
  beforeAll(() => {
    queue = new MyQueue();
  });

  afterAll(() => {
    queue = null;
  });
  test('push', () => {
    queue.push(1);
    expect(queue.peek()).toBe(1);
  });
  test('push', () => {
    queue.push(2);
    expect(queue.peek()).toBe(1);
  });
  test('peek', () => {
    expect(queue.peek()).toBe(1);
  });
  test('pop', () => {
    expect(queue.pop()).toBe(1);
  });
  test('empty', () => {
    expect(queue.empty()).toBe(false);
  });
});
