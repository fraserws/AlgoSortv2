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
