import { MyCircularQueue } from '.';

describe('example test suit', () => {
  let circularq: MyCircularQueue;
  beforeAll(() => {
    circularq = new MyCircularQueue(3);
  });

  afterAll(() => {
    circularq = undefined;
  });

  test('enQueue 1', () => {
    expect(circularq.Front()).toBe(-1);
    expect(circularq.enQueue(1)).toBe(true);
  });
  test('enQueue 2', () => {
    expect(circularq.Front()).toBe(1);
    expect(circularq.enQueue(2)).toBe(true);
  });
  test('enQueue 3', () => {
    expect(circularq.Front()).toBe(1);
    expect(circularq.enQueue(3)).toBe(true);
  });
  test('enQueue 4', () => {
    expect(circularq.Front()).toBe(1);
    expect(circularq.enQueue(4)).toBe(false);
  });
  test('Rear', () => {
    expect(circularq.Rear()).toBe(3);
  });
  test('isFull', () => {
    expect(circularq.isFull()).toBe(true);
  });
  test('deQueue', () => {
    expect(circularq.deQueue()).toBe(true);
  });
  test('enQueue 4', () => {
    expect(circularq.Front()).toBe(2);
    expect(circularq.enQueue(4)).toBe(true);
  });
  test('Rear', () => {
    expect(circularq.Rear()).toBe(4);
  });
});
