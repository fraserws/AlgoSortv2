import { useState } from "react";
import { useAlgoStore } from "../../utils/store";
import { GoGraph } from "react-icons/go";

function SizeSlider() {
  const [size, setSize] = useState(useAlgoStore.getState().size);

  const newArray = () => {
    useAlgoStore.getState().setSize(size);
  };

  return (
    <div className="flex-row flex items-center ">
      <GoGraph className="text-4xl" />
      <input
        type="range"
        min="10"
        max={useAlgoStore.getState().maxSize}
        onChange={(e) => {
          setSize(e.target.value);
          useAlgoStore.getState().setSize(e.target.value);
        }}
        value={size}
        className="range max-w-sm"
      />
      <h1 className="text-2xl">{size}</h1>
    </div>
  );
}

export default SizeSlider;
