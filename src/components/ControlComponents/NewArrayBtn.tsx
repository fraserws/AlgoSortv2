import { AiOutlineReload } from "react-icons/ai";
import useAlgoStore from "../../utils/store";

function NewArrayBtn() {
  const newArray = () => {
    useAlgoStore.getState().setSize(useAlgoStore.getState().size);
  };

  return (
    <div>
      <button
        onClick={newArray}
        //buttons do not have accesible names
        aria-label="New Array"
        className="btn btn-secondary new-array-button text-black flex w-full"
      >
        <AiOutlineReload className="text-2xl" />
      </button>
    </div>
  );
}

export default NewArrayBtn;
