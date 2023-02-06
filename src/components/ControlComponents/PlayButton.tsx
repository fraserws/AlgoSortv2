import { useState } from "react";
import { FiPlay, FiPause } from "react-icons/fi";
import useAlgoStore from "../../utils/store";
import { sort } from "../../utils/array";

const isSorted = useAlgoStore.getState().isSorted;

function PlayButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  //@ts-ignore
  const isAnimating = useAlgoStore((state) => state.isAnimating);
  const playPause = async () => {
    useAlgoStore.setState({ isAnimating: !isAnimating });
    if (!useAlgoStore.getState().isSorted) {
      sort();
      useAlgoStore.getState().setAnimationIndex(0);
    }
    if (useAlgoStore.getState().isAnimating) {
      animate();
    }
  };

  const animate = async () => {
    const animation = useAlgoStore.getState().animation;
    if (useAlgoStore.getState().animationIndex >= animation.length - 1) {
      useAlgoStore.getState().setAnimationIndex(0);
    }
    while (
      useAlgoStore.getState().isAnimating &&
      useAlgoStore.getState().animationIndex < animation.length
    ) {
      useAlgoStore
        .getState()
        .setAnimationIndex(useAlgoStore.getState().animationIndex + 1);
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(null);
        }, useAlgoStore.getState().delay)
      );
    }
    useAlgoStore.setState({
      isAnimating: false,
    });
  };

  return (
    <div className="pt-1">
      <button
        className="btn play-pause-button  "
        onClick={() => {
          setIsPlaying(!isPlaying);
          playPause();
        }}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying || isSorted ? (
          <FiPause className="text-2xl" />
        ) : (
          <FiPlay className="text-2xl" />
        )}
      </button>
    </div>
  );
}

export default PlayButton;
