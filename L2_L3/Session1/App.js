import React from "react";
import ReactDOM from "react-dom/client";

//React.creatElement=> React Element - JS object => Render in the Dom as HTML element
const heading = React.createElement("h1", { id: "heading" }, "HemelReact");

// JSX=> React.creatElement=> React Element - JS object => Render in the Dom as HTML element

//****React Element
const jsxHeading = (
  <h1 className="head" tabIndex={5}>
    HemelReact with the help of JSX
  </h1>
);

////****React Component
const HeadingComponet = () => {
  return <h1>This is the first Component write by Riha</h1>;
};

const HeadingComponet3 = () => {
  return <h1>This is the first Component write by Riha1</h1>;
};

////****React Component syntax2
const HeadingComponet2 = () => (
  <div id="container">
    <HeadingComponet3></HeadingComponet3>
    <h1 className="heading">This is the first Component write by Hemel2</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponet2></HeadingComponet2>);
