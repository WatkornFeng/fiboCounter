import { useEffect, useState } from "react";
import "./App.css";
import f from "./fiboCalFn";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fiboNum = f(count);
    setValue(fiboNum);
  }, [count]);

  function increment() {
    setCount((prevState) => prevState + 1);
  }
  function decrement() {
    if (count === 0) return;
    setCount((prevState) => prevState - 1);
  }

  return (
    <>
      <h1>Fibonacci Number</h1>
      <div className="card">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <div>Number {count}</div>
      <div>Fibo &apos; s Value is {value}</div>
    </>
  );
}

export default App;
