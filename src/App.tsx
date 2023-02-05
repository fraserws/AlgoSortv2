import { useState } from "react";
import Bars from "./components/Bars";
import Controls from "./components/Controls";

function App() {
  return (
    <div className="grid grid-rows-6  h-screen bg-base-100">
      <Bars />
      <Controls />
    </div>
  );
}

export default App;
