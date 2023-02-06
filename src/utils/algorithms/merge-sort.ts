import { accessArray, swap, checkSorted } from "../array";

const merge = (
  array: number[],
  l: number,
  m: number,
  r: number,
  states: number[],
  animation: [[number[], number[]]]
) => {
  let i: number, j: number, k: number;
  let n1 = m - l + 1;
  let n2 = r - m;

  let L: number[] = [];
  let R: number[] = [];

  for (i = 0; i < n1; i++) {
    L[i] = array[l + i];
    accessArray([...array], [...states], animation, [l + i], 1);
  }
  for (j = 0; j < n2; j++) {
    R[j] = array[m + 1 + j];
    accessArray([...array], [...states], animation, [m + 1 + j], 1);
  }

  i = 0;
  j = 0;
  k = l;
  while (i < n1 && j < n2) {
    accessArray([...array], [...states], animation, [L[i], R[j]], 2);
    if (L[i] <= R[j]) {
      array[k] = L[i];
      i++;
    } else {
      array[k] = R[j];
      j++;
    }
    accessArray([...array], [...states], animation, [k], 2);
    k++;
  }

  while (i < n1) {
    array[k] = L[i];
    i++;
    k++;
    accessArray([...array], [...states], animation, [k - 1], 2);
  }

  while (j < n2) {
    array[k] = R[j];
    j++;
    k++;
    accessArray([...array], [...states], animation, [k - 1], 2);
  }
};

const mergeSort = (
  array: number[],
  l: number,
  r: number,
  states: number[],
  animation: [[number[], number[]]]
) => {
  if (l < r) {
    let m = Math.floor((l + r) / 2);
    mergeSort(array, l, m, states, animation);
    mergeSort(array, m + 1, r, states, animation);
    merge(array, l, m, r, states, animation);
  }
};

const runMergeSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  let n = array.length;
  mergeSort(array, 0, n - 1, states, animation);
  checkSorted(array);
};

export default runMergeSort;
