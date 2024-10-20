import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  let [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
    console.log(count);
  }

  function reset() {
    setCount((count = 0));
    console.log(count);
  }

  function dec() {
    setCount(count - 1);
    console.log(count);
  }

  return (
    <>
      <Counter count={count} add={add} reset={reset} dec={dec} />
    </>
  );
};

export default App;
