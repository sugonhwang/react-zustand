import "./App.css";
import CounterBox from "./components/CounterBox";
import counterStore from "./stores/CounterStore";

function App() {
  // const [count, setCount] = useState(0);

  const { count, increase, decrease, increaseBy } = counterStore();
  return (
    <div className="container">
      <h1>count:{count}</h1>
      <CounterBox />
      <div className="count-btn">
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={() => increaseBy(10)}>+10</button>
      </div>
    </div>
  );
}

export default App;
