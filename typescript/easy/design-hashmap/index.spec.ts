import { MyHashMap } from '.';

describe(' description', () => {
  let myHashMap: MyHashMap;
  beforeAll(() => {
    myHashMap = new MyHashMap();
  });

  afterAll(() => {
    myHashMap = null;
  });

  test('put [ 1: 1 ] in hashmap', () => {
    myHashMap.put(1, 1);
    expect(myHashMap.get(1)).toBe(1);
  });
  test('put [ 2: 2 ] in hashmap', () => {
    myHashMap.put(6, 6);
    expect(myHashMap.get(6)).toBe(6);
  });
  test('get key: 1 in hashmap', () => {
    expect(myHashMap.get(1)).toBe(1);
  });
  test('get key: 3 in hashmap', () => {
    expect(myHashMap.get(3)).toBe(-1);
  });
  test('put [ 2: 1 ] in hashmap', () => {
    myHashMap.put(2, 1);
    expect(myHashMap.get(2)).toBe(1);
  });
  test('get key: 2 in hashmap', () => {
    expect(myHashMap.get(2)).toBe(1);
  });
  test('remove key: 2 in hashmap', () => {
    myHashMap.remove(6);
    expect(myHashMap.get(6)).toBe(-1);
  });
  test('get key: 2 in hashmap', () => {
    expect(myHashMap.get(6)).toBe(-1);
  });
});
