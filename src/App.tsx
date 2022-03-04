import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Testing from "./components/Testing";
import { Counter } from "./components/Counter";

function App() {
  const userData = [
    { firstname: "Asad", lastname: "Khan" },
    { firstname: "A", lastname: "K" },
  ];
  return (
    <div className="App">
      <Greet name={"asad"} age={2} />
      <Testing data={userData} />
      <Counter />
    </div>
  );
}

export default App;
