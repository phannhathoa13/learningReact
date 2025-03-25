import React from "react";
import ReactDOM from "react-dom/client";
import {  DisplayTitle, CounterButton, FormInput, ToggleText, ToogleDarkMode } from "./App";  // Import App.js để hiển thị nội dung

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    {/* <MyButton /> */}
    {/* <CountClickButton /> */}
    <CounterButton />
    <ToggleText />
    <FormInput />
    <ToogleDarkMode />
    <DisplayTitle />
  </>
);

