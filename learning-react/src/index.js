import React from "react";
import ReactDOM from "react-dom/client";
import { ChangeColorDisplay, ChangeStateDisplay, Counter, DisplayTextInput } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Counter />
    <DisplayTextInput />
    <ChangeStateDisplay />
    <ChangeColorDisplay />
  </>
);

