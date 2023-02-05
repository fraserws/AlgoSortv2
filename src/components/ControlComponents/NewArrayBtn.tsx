import { useAlgoStore } from "../../utils/store";

function NewArrayBtn() {
  const size = useAlgoStore.getState().size;
  const newArray = () => {
    useAlgoStore.getState().setSize(size);
  };

  return (
    <div>
      <button onClick={newArray} className="btn btn-secondary">
        Generate New Array
      </button>
    </div>
  );
}

export default NewArrayBtn;
