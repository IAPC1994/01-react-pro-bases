import { Counter } from "./components/Counter";
import { CounterBy } from "./components/CounterBy";
import { CounterEffect } from "./components/CounterEffect";
import { CounterHook } from "./components/CounterHook";
import { CounterReducer } from "./components/CounterReducer";

const App = () => {
  return (
    <>
      <Counter initialValue={ 15 } />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducer />
    </>
  );
}

export default App;
