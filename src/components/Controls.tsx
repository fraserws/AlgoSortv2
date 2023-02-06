import AlgoSelector from "./ControlComponents/AlgoSelector";
import DelaySlider from "./ControlComponents/DelaySlider";
import NewArrayBtn from "./ControlComponents/NewArrayBtn";
import PlayButton from "./ControlComponents/PlayButton";
import SizeSlider from "./ControlComponents/SizeSlider";

function Controls() {
  return (
    <div className="rows-span-1 bg-primary justify-center shadow-xl m-2 rounded-lg p-3">
      <div className="flex lg:flex-row flex-col gap-10">
        <NewArrayBtn />
        <SizeSlider />
        <DelaySlider />
        <PlayButton />
        <AlgoSelector />
      </div>
    </div>
  );
}

export default Controls;
