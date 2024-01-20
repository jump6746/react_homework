import React from "react";
import ReactDOM from "react-dom/client";
import {header} from "/src/bigComponents/index.js";

const headerElement = document.getElementById("header");

const headerRoot = ReactDOM.createRoot(headerElement);

headerRoot.render(header());