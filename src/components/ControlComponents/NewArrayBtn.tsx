import { swap } from "../../utils/array";
import useAlgoStore from "../../utils/store";
import { AiOutlineReload } from "react-icons/ai";

const array = useAlgoStore.getState().array;

function NewArrayBtn() {
  const size = useAlgoStore.getState().size;
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
