import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Bars from "./components/Bars";

function App() {
  const [count, setCount] = useState(0);

  return <Bars />;
}

export default App;
