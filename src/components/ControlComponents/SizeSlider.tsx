import { useState } from "react";
import useAlgoStore from "../../utils/store";
import { GoGraph } from "react-icons/go";
import zustand from "zustand";

function SizeSlider() {
  //@ts-ignore
  const size = useAlgoStore((state) => state.size);

  const maxsize = 100;

  return (
    <div className="flex-row flex items-center ">
      <GoGraph className="text-4xl" />
      <input
        type="range"
        min="10"
        aria-label="size"
        max={maxsize}
        value={size}
        className="range max-w-sm"
        onChange={(e) => {
          useAlgoStore.getState().setSize(parseInt(e.target.value));
        }}
      />
      <h1 className="text-2xl text-black">{size}</h1>
    </div>
  );
}

export default SizeSlider;
