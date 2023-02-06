import useAlgoStore from "./store";
import bubbleSort from "./algorithms/bubble-sort";
import bogoSort from "./algorithms/bogo-sort";
import runMergeSort from "./algorithms/merge-sort";

export const algorithms = new Map([
  ["Bubble Sort", bubbleSort],
  ["Bogo Sort", bogoSort],
  ["Merge Sort", runMergeSort],
]);

export const randomArray = (length: number): number[] => {
  const arr = new Array(length);
  for (let i = 0; i < length; ++i) {
    arr[i] = i + 1;
  }
  return shuffle(arr);
};

export const shuffle = (arr: number[], lo = 0): number[] => {
  let m = arr.length;
  let t;
  let i;

  while (m - lo) {
    i = Math.floor(Math.random() * (m - lo) + lo);
    m--;

    t = arr[m] as number;
    arr[m] = arr[i] as number;
    arr[i] = t;
  }

  return arr;
};

export const sort = () => {
  const array = useAlgoStore.getState().array;
  const states = useAlgoStore.getState().states;
  const algorithm = useAlgoStore.getState().algorithm;
  const animation = [[[...array], [...states]]] as [[number[], number[]]];
  const sorter = algorithms.get(algorithm);
  if (sorter) {
    sorter(array, states, animation);
  }

  animation.push([array, states]);
  useAlgoStore.setState({
    animation: animation,
    isSorted: true,
  });
};

export const accessArray = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]],
  indices: number[],
  state: number
) => {
  const s = [...states];
  for (let i = 0; i < indices.length; i++) {
    const index = indices[i] as number;
    s[index] = state;
  }
  animation.push([[...array], [...s]]);
};
export const swap = (arr: number[], i: number, j: number): number[] => {
  const t = arr[i] as number;
  arr[i] = arr[j] as number;
  arr[j] = t;
  return arr;
};

export const checkSorted = (array: number[]): boolean => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      useAlgoStore.setState({
        isSorted: false,
      });
      return false;
    }
  }
  useAlgoStore.setState({
    isSorted: true,
  });
  return true;
};
