import { MyStack } from '.';

describe(' description', () => {
  let stack: MyStack;

  beforeAll(() => {
    stack = new MyStack();
  });

  afterAll(() => {
    stack = null;
  });

  test('push test in stack', () => {
    stack.push(1);
    expect(stack.top()).toBe(1);
  });

  test('push test in stack', () => {
    stack.push(2);
    expect(stack.top()).toBe(2);
  });

  test('top test in stack', () => {
    const top = stack.top();
    expect(top).toBe(2);
  });

  test('pop test in stack', () => {
    const data = stack.pop();
    expect(data).toBe(2);
  });

  test('empty test in stack', () => {
    const isEmpty = stack.empty();
    expect(isEmpty).toBe(false);
  });
});
