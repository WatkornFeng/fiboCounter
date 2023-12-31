import { useState } from "react";
import "./App.css";
import calFibo from "./calFibo";

function App() {
  const [count, setCount] = useState(0);

  const value = calFibo(count);

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
        <button onClick={decrement} disabled={count === 0}>
          -
        </button>
        <button onClick={increment}>+</button>
      </div>
      <div>Number {count}</div>
      <div>Fibo &apos; s Value is {value}</div>
    </>
  );
}

export default App;
