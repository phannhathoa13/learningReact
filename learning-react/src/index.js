import React from "react";
import ReactDOM from "react-dom/client";
import { DisplayListProducts, DisplayListUser } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <DisplayListProducts />
        <DisplayListUser />
    </>
);

