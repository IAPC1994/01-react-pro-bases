import { Counter } from "./components/Counter";
import { CounterBy } from "./components/CounterBy";
import { CounterEffect } from "./components/CounterEffect";

const App = () => {
  return (
    <>
      <Counter initialValue={ 15 } />
      <CounterBy />
      <CounterEffect />
    </>
  );
}

export default App;
