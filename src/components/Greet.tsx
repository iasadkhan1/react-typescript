import React from "react";
import { GreetProps } from "../components.types";

function Greet(props: GreetProps) {
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <h3>I have been as a Frontend Developer for last {props.age} years. </h3>
    </div>
  );
}

export default Greet;
