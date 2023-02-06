import create from "zustand";
import { randomArray, algorithms } from "./array";

interface State {
  array: number[];
  maxValue: number;
  states: number[];
  size: number;
  setSize: (size: number) => void;
  animation: [[number[], number[]]];
  isAnimating: boolean;
  animationIndex: number;
  setAnimationIndex: (index: number) => void;
  isSorted: boolean;
  delay: number;
  algorithm: string;
  isProgressSlider: boolean;
}

const initialSize = 10;
const initialValues = randomArray(initialSize);
const initialStates = new Array<number>(initialSize).fill(0);
const initialDelay = 10;
const initialAlgorithm = algorithms.entries().next().value[0];

const useAlgoStore = create<State>()((set, get) => ({
  array: initialValues,
  maxValue: Math.max(...initialValues),
  states: initialStates,
  size: initialSize,
  setSize: (newSize: number) => {
    if (newSize < 1) {
      newSize = get().size;
    }
    const newValues = randomArray(newSize);
    const newStates = new Array<number>(newSize).fill(0);
    const newMaxValue = Math.max(...newValues);
    set({
      array: newValues,
      maxValue: newMaxValue,
      states: newStates,
      size: newSize,
      animation: [[newValues, newStates]],
      isAnimating: false,
      animationIndex: 0,
      isSorted: false,
    });
  },
  animation: [[initialValues, initialStates]],
  isAnimating: false,
  animationIndex: 0,
  isSorted: false,
  delay: initialDelay,
  algorithm: initialAlgorithm,
  setAnimationIndex: (index: number) => {
    const animation = get().animation;
    if (index < 0) {
      index = animation.length - 1;
    }
    set({ animationIndex: index });
    if (index > animation.length - 1) {
      index = animation.length - 1;
    }
    const frame = get().animation[index] as [number[], number[]];
    set({
      array: frame[0],
      states: frame[1],
    });
  },
  isProgressSlider: false,
  isAlertBogo: false,
  isExplode: false,
  isWindow: true,
}));

export default useAlgoStore;
