import { RiTimeFill } from "react-icons/ri";
import { useState } from "react";
import useAlgoStore from "../../utils/store";

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
        aria-label="delay"
      />
      <h1 className="text-2xl text-black">{useAlgoStore.getState().delay}</h1>
    </div>
  );
}

export default DelaySlider;
