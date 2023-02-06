import React from "react";
import { algorithms } from "../../utils/array";
import useAlgoStore from "../../utils/store";

//export const algorithms = new Map([
//  ["Bubble Sort", bubbleSort],
// ["Bogo Sort", bogoSort],
//]);

function AlgoSelector() {
  const names: string[] = [];
  algorithms.forEach((value, key) => {
    names.push(key);
  });
  console.log(names);

  return (
    <div className="flex-row flex items-center">
      <select
        className="select"
        onChange={(e) => {
          useAlgoStore.setState({ algorithm: e.target.value as string });
        }}
      >
        {names.map((name) => (
          <option value={name}>{name}</option>
        ))}
      </select>
    </div>
  );
}

export default AlgoSelector;
