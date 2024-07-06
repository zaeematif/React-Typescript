import { Button1, Button2, Button3, Button4, Button5, Button6, Button7, Button8 } from "./components/PropsButton";
import { useState } from "react";
import UseStateTs from "./components/HooksAndTips";

function App() {
  const onClick = (test: string) => {
    const val = parseInt(test+5);

    return val;
  }

  const [count, setCount] = useState(0);

  return (
    <>
      <UseStateTs count={'5'} countHistory={['2', '5', '3']}/>
    </>
  );
}

export default App;
