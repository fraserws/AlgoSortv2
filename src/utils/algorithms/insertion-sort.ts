import { accessArray, swap, checkSorted } from "../array";

const insertionSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      accessArray([...array], [...states], animation, [j - 1, j], 1);
      swap(array, j, j - 1);
      accessArray([...array], [...states], animation, [j - 1, j], 2);
      j--;
    }
  }

  checkSorted(array);
};

export default insertionSort;
