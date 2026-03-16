export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // Reverse collection_3; make it ascending
  const reversed3 = reverseArray(collection_3);

  // Merge all of the arrays
  return mergeThreeArrays(collection_1, collection_2, reversed3);
}

function reverseArray(arr: number[]): number[] {
  const result: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

function mergeThreeArrays(
  arr1: number[],
  arr2: number[],
  arr3: number[]
): number[] {
  const result: number[] = [];
  let i = 0, j = 0, k = 0;

  // Compare each arrays
  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    const min = Math.min(arr1[i], arr2[j], arr3[k]);
    result.push(min);
    if (min === arr1[i]) i++;
    else if (min === arr2[j]) j++;
    else k++;
  }

  // Merge remaining from arr1 and arr2
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  // Add remaining elements
  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);
  while (k < arr3.length) result.push(arr3[k++]);

  return result;
}
