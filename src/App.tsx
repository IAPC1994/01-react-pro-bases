import { Counter } from "./components/Counter";
import { CounterBy } from "./components/CounterBy";

const App = () => {
  return (
    <>
      <Counter initialValue={ 15 } />
      <CounterBy />
    </>
  );
}

export default App;
