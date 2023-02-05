import React from "react";
import { useAlgoStore } from "../utils/store";

function Bars() {
  const { array } = useAlgoStore();
  return (
    <div className="flex h-screen w-screen flex-row">
      {array.map((value: number, index: number) => (
        <div
          className="m-1 w-3 bg-blue-500 h-full"
          key={index}
          style={{ height: `${value}%` }}
        ></div>
      ))}
    </div>
  );
}

export default Bars;
