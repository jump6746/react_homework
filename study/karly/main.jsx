import React from "react";
import { createRoot } from "react-dom/client";

function App(props) {
  console.log(props);
  return (
    <div>
      <span>123</span>
    </div>
  );
}

const rootElement = document.getElementById("header");
const root = createRoot(rootElement);

root.render(
  <App className="hello" id="hi">
    hi
  </App>
);
