const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "this is first heading")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "this is second heading")
  ),
]);

const heading = React.createElement("h1", {}, "Hello World From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root.render(heading);
root2.render(parent);
