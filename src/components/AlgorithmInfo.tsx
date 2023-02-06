import { useEffect, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import useAlgoStore from "../utils/store";

function AlgorithmInfo() {
  const [algorithm, setAlgorithm] = useState(useAlgoStore.getState().algorithm);
  const algorithmLink = `https://www.wikiwand.com/en/${algorithm.replace(
    / /g,
    "_"
  )}`;

  useEffect(() => {
    const unsubscribe = useAlgoStore.subscribe(() => {
      setAlgorithm(useAlgoStore.getState().algorithm);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="w-screen pt-3 pr-3">
      <div className="flex flex-row justify-end items-center">
        <div
          className="tooltip tooltip-left"
          data-tip="Link to Wikipedia article"
        >
          <a
            href={algorithmLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Algorithm Info"
          >
            <AiOutlineQuestionCircle className="text-2xl " />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AlgorithmInfo;
