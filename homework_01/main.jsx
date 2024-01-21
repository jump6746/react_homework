import React from "react";
import ReactDOM from "react-dom/client";
import {header, navigation} from "/src/bigComponents/index.js";

const headerElement = document.getElementById("header");

const headerRoot = ReactDOM.createRoot(headerElement);

headerRoot.render(header());

const navElement = document.getElementById("nav");

const navRoot = ReactDOM.createRoot(navElement);

navRoot.render(navigation());