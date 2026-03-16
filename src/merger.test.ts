import { merge } from './merger';

describe('Merge Three Sorted Arrays', () => {
  test('merge basic positive numbers', () => {
    const result = merge([1, 5, 9], [2, 6, 10], [8, 4]);
    expect(result).toEqual([1, 2, 4, 5, 6, 8, 9, 10]);
  });

  test('merge with empty arrays', () => {
    const result = merge([], [1, 2, 3], [6, 5, 4]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('merge with duplicates', () => {
    const result = merge([1, 3, 5], [1, 3, 5], [5, 3, 1]);
    expect(result).toEqual([1, 1, 1, 3, 3, 3, 5, 5, 5]);
  });

  test('merge with negative numbers', () => {
    const result = merge([-5, -1, 3], [-3, 0, 2], [4, 1, -2]);
    expect(result).toEqual([-5, -3, -2, -1, 0, 1, 2, 3, 4]);
  });

  test('merge different sizes', () => {
    const result = merge([1], [2, 3, 4, 5, 6, 7], [12, 11, 10, 9, 8]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  test('result is always sorted ascending', () => {
    const result = merge([1, 5, 9], [2, 6, 10], [16, 12, 8, 4]);
    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i]).toBeLessThanOrEqual(result[i + 1]);
    }
  });

  test('all elements included', () => {
    const result = merge([1, 5], [2, 6], [8, 4]);
    expect(result.length).toBe(6);
    expect(result).toContain(1);
    expect(result).toContain(4);
    expect(result).toContain(8);
  });
});
