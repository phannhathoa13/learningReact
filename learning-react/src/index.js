import React from "react";
import ReactDOM from "react-dom/client";
import { ChekcUserInputUsername, ShowFormInputNameAndAge } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ShowFormInputNameAndAge />
    <ChekcUserInputUsername />
  </>
);

