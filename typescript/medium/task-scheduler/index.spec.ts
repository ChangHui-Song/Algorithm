import { leastInterval } from '.';

describe('621. Task Scheduler', () => {
  test('example test 1', () => {
    const output = leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2);
    const expected = 8;
    expect(output).toEqual(expected);
  });

  test('example test 1', () => {
    const output = leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0);
    const expected = 6;
    expect(output).toEqual(expected);
  });

  test('example test 1', () => {
    const output = leastInterval(
      ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
      2
    );
    const expected = 16;
    expect(output).toEqual(expected);
  });
});
