import { accessArray, swap, checkSorted } from "../array";
const quickSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  const partition = (array: number[], low: number, high: number) => {
    let pivotIndex = low;
    const pivotValue = array[high];

    for (let i = low; i < high; i++) {
      if (array[i] < pivotValue) {
        accessArray([...array], [...states], animation, [i, pivotIndex], 1);
        swap(array, i, pivotIndex);
        accessArray([...array], [...states], animation, [i, pivotIndex], 2);
        pivotIndex++;
      }
    }

    accessArray([...array], [...states], animation, [pivotIndex, high], 1);
    swap(array, pivotIndex, high);
    accessArray([...array], [...states], animation, [pivotIndex, high], 2);
    return pivotIndex;
  };

  const sort = (array: number[], low: number, high: number) => {
    if (low < high) {
      const pivotIndex = partition(array, low, high);
      sort(array, low, pivotIndex - 1);
      sort(array, pivotIndex + 1, high);
    }
  };

  sort(array, 0, array.length - 1);
  checkSorted(array);
};

export default quickSort;
