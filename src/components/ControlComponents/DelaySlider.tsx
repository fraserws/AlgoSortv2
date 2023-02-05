import { useState } from "react";
import { useAlgoStore } from "../../utils/store";
import { RiTimeFill } from "react-icons/ri";

function DelaySlider() {
  const [size, setSize] = useState(useAlgoStore.getState().size);

  const newArray = () => {
    useAlgoStore.getState().setSize(size);
  };

  return (
    <div className="flex-row flex items-center ">
      <RiTimeFill className="text-4xl" />
      <input
        type="range"
        min="0"
        max="500"
        value={useAlgoStore.getState().delay}
        onChange={(e) => {
          useAlgoStore.getState().setDelay(e.target.value);
        }}
        className="range max-w-sm"
      />
      <h1 className="text-2xl">{useAlgoStore.getState().delay}</h1>
    </div>
  );
}

export default DelaySlider;
