import React from "react";
import ReactDOM from "react-dom/client";
import { DisplayMyNameAndDate, DisplayTrueFlag } from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <DisplayMyNameAndDate />
    <DisplayTrueFlag />
  </>
);

