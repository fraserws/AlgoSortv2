import NewArrayBtn from "./ControlComponents/NewArrayBtn";
import SizeSlider from "./ControlComponents/SizeSlider";
import DelaySlider from "./ControlComponents/DelaySlider";
import AlgoSelector from "./ControlComponents/AlgoSelector";
import PlayButton from "./ControlComponents/PlayButton";

function Controls() {
  return (
    <div className="rows-span-1 bg-primary justify-center shadow-xl m-2 rounded-lg p-3">
      <div className="flex flex-row gap-10">
        <NewArrayBtn />
        <SizeSlider />
        <PlayButton />
        <AlgoSelector />
      </div>
    </div>
  );
}

export default Controls;
