import { motion } from "framer-motion";
import useAlgoStore from "../utils/store";

function Bars() {
  const array = useAlgoStore((state) => state.array);
  const states = useAlgoStore((state) => state.states);

  return (
    <div
      className=" w-screen flex flex-row  row-span-6  "
      style={{ display: "flex", height: "100%", alignItems: "flex-end" }}
    >
      {array.map((value: number, index: number) => {
        let backgroundColor = "#5e81ac";
        if (states[index] === 0) {
          backgroundColor = "#5e81ac";
        } else if (states[index] === 1) {
          backgroundColor = "#d08770";
        } else if (states[index] === 2) {
          backgroundColor = "#bf616a";
        }

        return (
          <motion.div
            className="shadow-xl m-1 rounded-lg"
            key={index}
            style={{
              width: `${100 / array.length}%`,
              height: `${value * 0.75}vh`,
              backgroundColor: backgroundColor,
            }}
            initial={{ height: 0 }}
            animate={{ height: `${value * 0.75}vh` }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        );
      })}
    </div>
  );
}

export default Bars;
