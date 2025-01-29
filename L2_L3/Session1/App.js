import React from "react";
import ReactDOM from "react-dom/client";

//React.creatElement(object) => Render in the Dom then => becomes a HTML
const heading = React.createElement("h1", { id: "heading" }, "HemelReact");

const jsxHeading = <h1 id="heading">HemelReact with the help of JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

// heading is React element which is a JS object, ReactDOM libray take the object and conver it into HTML when root.render is called
