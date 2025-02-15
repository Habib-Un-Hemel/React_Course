//nested things
/*

<div id="parent">
    <div id="child">
        <h1> I am H1 tag</h1>
        <h2> I am H2 tag</h2>
    </div>
    <div id="child2">
        <h1> I am H1 tag</h1>
        <h2> I am H2 tag</h2>
    </div>
<div>




//reactElement(give object)  => convert => HTML(understand by the Browser)

*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am H1 tag"),
      React.createElement("h2", {}, "I am H2 tag"),
    ]),
  ],
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
