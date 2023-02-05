import { useAlgoStore } from "../../utils/store";
import { RiTimeFill } from "react-icons/ri";
import { useState } from "react";

function DelaySlider() {
  const [delay, setDelay] = useState(useAlgoStore.getState().delay);

  return (
    <div className="flex-row flex items-center ">
      <RiTimeFill className="text-4xl" />
      <input
        className="range "
        type="range"
        min="0"
        max="500"
        value={delay}
        onChange={(e) => {
          setDelay(e.target.value);
          useAlgoStore.getState().setDelay(e.target.value);
        }}
      />
      <h1 className="text-2xl">{useAlgoStore.getState().delay}</h1>
    </div>
  );
}

export default DelaySlider;
