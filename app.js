import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxheading = <h1 className="head">Namaste React by JavaScript 1</h1>;

console.log(jsxheading);

//React Component
const Title = function () {
  return(
    <h1 className="head2">Namaste React by JavaScript 2</h1>
  )
}

const HeadingComponent = () => (
  <div id = "container">
    <Title />
    <h1 className="head">Namaste React by JavaScript 3</h1>
    {jsxheading}
    <Title></Title>
    {5789+348}
    {Title()}
  </div> 
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<HeadingComponent/>);