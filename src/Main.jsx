import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { VictorLlavesApp } from "./VictorLlavesApp";
import "./Index.css";

ReactDOM.createRoot( document.querySelector("#root")).render(
    <BrowserRouter>
        <React.StrictMode>
            <VictorLlavesApp/>
        </React.StrictMode>
    </BrowserRouter>
);