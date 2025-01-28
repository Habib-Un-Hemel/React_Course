// ("h1", {}, "Hello World From React!") {} => this is for attribute

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// 1. when we click a button in the brower the DOM tree changed, we need to take care of it in a optimize way as its the heaviest operation

//2. question? what is this => const heading = React.createElement? ANS: this is a React h1 element, a js object, who have props

// 3. props: child + attributes

// 4. follow: Return a Object , root.render ei method convert the object into h1 tag then send to the browser.
 