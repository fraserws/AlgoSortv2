import { FiPause, FiPlay } from "react-icons/fi";
import { sort } from "../../utils/array";
import useAlgoStore from "../../utils/store";

function PlayButton() {
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
    <div className="flex-row flex items-center ">
      <button
        aria-label="New Array"
        className="btn btn-accent new-array-button text-black flex w-full"
        onClick={playPause}
      >
        {useAlgoStore.getState().isAnimating ? (
          <FiPause className="text-4xl" />
        ) : (
          <FiPlay className="text-4xl" />
        )}
      </button>
    </div>
  );
}

export default PlayButton;
