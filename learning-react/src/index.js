import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./learnContext/ContextProvider";
import { ThemeSetting } from "./learnContext/ThemeSetting";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider>
      <ThemeSetting />
    </ThemeProvider>
  </>
);

