import NewArrayBtn from "./ControlComponents/NewArrayBtn";
import SizeSlider from "./ControlComponents/SizeSlider";
import DelaySlider from "./ControlComponents/DelaySlider";

function Controls() {
  return (
    <div className="rows-span-1 bg-primary justify-center shadow-xl m-2 rounded-lg p-3">
      <div className="flex flex-row gap-10">
        <NewArrayBtn />
        <SizeSlider />
        <DelaySlider />
      </div>
    </div>
  );
}

export default Controls;
