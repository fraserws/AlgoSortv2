import { RiTimeFill } from "react-icons/ri";
import useAlgoStore from "../../utils/store";

function DelaySlider() {
  const delay = useAlgoStore((state) => state.delay);

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
        onChange={(e) => {
          useAlgoStore.setState({ delay: parseInt(e.target.value) });
        }}
      />

      <h1 className="text-2xl text-black">{useAlgoStore.getState().delay}</h1>
    </div>
  );
}

export default DelaySlider;
