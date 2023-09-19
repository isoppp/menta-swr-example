import logo from "./logo.svg";
import "./App.css";
import { Example } from "./Example";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button type="button" onClick={() => setShow((v) => !v)}>
        toggle
      </button>
      {show && <Example />}
    </div>
  );
}

export default App;
