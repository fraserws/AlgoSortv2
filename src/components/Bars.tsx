import { useAlgoStore } from "../utils/store";

function Bars() {
  const { array } = useAlgoStore();
  return (
    <div
      className=" w-screen flex flex-row  row-span-6  "
      style={{ display: "flex", height: "100%", alignItems: "flex-end" }}
    >
      {array.map((value: number, index: number) => (
        <div
          className="m-1 bg-blue-500 h-max  align-baseline"
          key={index}
          style={{
            width: `${100 / array.length}%`,
            height: `${value * 0.75}vh`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default Bars;
