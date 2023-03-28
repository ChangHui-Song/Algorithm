import { convertArrayToTree } from '../../utils';
import { serialize, deserialize } from '.';

describe('', () => {
  test('example test 1', () => {
    const input = '1 2 3 null null 4 5';
    const outputOfDeserialize = deserialize(input);
    const expectedOfDeserialize = convertArrayToTree([
      1,
      2,
      3,
      null,
      null,
      4,
      5,
    ]);
    expect(outputOfDeserialize).toEqual(expectedOfDeserialize);
    const outputOfSerialize = serialize(outputOfDeserialize);
    const expectedOfSerialize = '1 2 3   4 5';
    expect(outputOfSerialize).toEqual(expectedOfSerialize);
  });
});
