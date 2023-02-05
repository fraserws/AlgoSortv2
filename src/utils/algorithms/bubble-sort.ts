// Optimized bubble sort

import { accessArray, swap } from "../array";

// All elements after the last swap are sorted, no need to perform useless checks and swaps
const bubbleSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  let n = array.length;
  do {
    let newn = 0;
    for (let i = 1; i < n; i++) {
      accessArray([...array], [...states], animation, [i - 1, i], 1);
      if ((array[i - 1] as number) > (array[i] as number)) {
        swap(array, i - 1, i);
        accessArray([...array], [...states], animation, [i - 1, i], 2);
        newn = i;
      }
    }
    n = newn;
  } while (n > 1);
};

export default bubbleSort;
