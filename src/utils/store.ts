import { randomArray } from "./array";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  isSorted: boolean;
  isSorting: boolean;
  algorithm: string;
  array: number[];
  size: number;
  delay: number;
}

const defaultSize = 100;
const defaultDelay = 10;
const defaultMaxValue = 100;
const defaultValues = randomArray(defaultSize);
const defaultAlgorithm = "bubbleSort";

//@ts-ignore
export const useAlgoStore = create<AlgoState>((set, get) => ({
  isSorted: false,
  isSorting: false,
  algorithm: defaultAlgorithm,
  size: defaultSize,
  maxValue: defaultMaxValue,
  delay: defaultDelay,
  array: defaultValues,
  setAlgorithm: (algorithm: string) => set({ algorithm }),
  setDelay: (delay: number) => set({ delay }),
  setSize: (newSize: number) => {
    if (newSize < 1) {
      newSize = get().size;
    }
    set({ size: newSize });
    set({ array: randomArray(newSize) });
  },
}));
