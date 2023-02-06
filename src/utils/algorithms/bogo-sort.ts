import { accessArray, swap, checkSorted } from "../array";

const bogoSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  function isSorted(array: number[]) {
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        return false;
      }
    }
    return true;
  }

  while (!isSorted(array)) {
    for (let i = 0; i < array.length - 1; i++) {
      const j = Math.floor(Math.random() * (array.length - i)) + i;
      swap(array, i, j);
      accessArray([...array], [...states], animation, [i, j], 1);
    }
  }

  checkSorted(array);
};

export default bogoSort;
