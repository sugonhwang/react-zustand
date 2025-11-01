import { useEffect, useState } from "react";
import "./App.css";
import CounterBox from "./components/CounterBox";
import counterStore from "./stores/CounterStore";

function App() {
  const { count, increase, decrease, increaseBy } = counterStore();
  const [animate, setAnimate] = useState(false);

  // 숫자 증감 시 확대/축소
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 200);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="container">
      <div className={`count-value ${animate ? "changed" : ""}`}>
        <h1>count:{count}</h1>
        <CounterBox />
      </div>
      <div className="count-btn">
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={() => increaseBy(10)}>+10</button>
      </div>
    </div>
  );
}

export default App;
