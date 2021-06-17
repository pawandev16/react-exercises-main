import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react-lite";
import Counts from "./Counts";
import "./index.css";

const Counter = observer(({ Counts }) => {
  return (
    <div>
      <p className="clicks"> Clicks: {Counts.count}</p>
      <button onClick={Counts.increment}>increment</button>
      <button onClick={Counts.decrement}>decrement</button>
    </div>
  );
});
ReactDOM.render(<Counter Counts={Counts} />, document.getElementById("root"));
