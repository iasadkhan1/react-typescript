import React from "react";
import { TestingProps } from "../components.types";

function Testing(props: TestingProps) {
  return (
    <div>
      {props.data.map((item) => {
        return <h2>{item.firstname}</h2>;
      })}
    </div>
  );
}

export default Testing;
