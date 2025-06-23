import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./learnContext/ContextProvider";
import { ShowThemeSetting } from "./learnContext/ThemeSetting";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider>
      <ShowThemeSetting />
    </ThemeProvider >
  </>
);

