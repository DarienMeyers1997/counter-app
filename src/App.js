import "./App.css";
import { useState } from "react";
import Form from "./Component/Form";
import Info from "./Component/Info";

function App() {
  const [number, setNumber] = useState(0);
  const plus = () => {
    setNumber(number + 1);
  };
  const minus = () => {
    setNumber(number - 1);
  };
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <Form />
      <Info />
    </div>
  );
}

export default App;
