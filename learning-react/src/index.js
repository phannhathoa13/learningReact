import React from "react";
import ReactDOM from "react-dom/client";
import { CacthUserScroll, DisplayListUser, DisplayRealTime, LogUseEffectOneTime } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <LogUseEffectOneTime />
    <DisplayListUser />
    <DisplayRealTime />
    <CacthUserScroll />
  </>
);

