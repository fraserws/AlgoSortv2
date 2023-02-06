import { swap } from "../../utils/array";
import useAlgoStore from "../../utils/store";

const array = useAlgoStore.getState().array;

function NewArrayBtn() {
  const size = useAlgoStore.getState().size;
  const newArray = () => {
    useAlgoStore.getState().setSize(useAlgoStore.getState().size);
  };

  return (
    <div>
      <button onClick={newArray} className="btn btn-secondary new-array-button">
        Generate New Array
      </button>
      <button
        onClick={() => {
          console.log(array);
          swap(array, 0, 1);
          console.log(array);
        }}
      ></button>
    </div>
  );
}

export default NewArrayBtn;
