import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement ==> ReactElement(Object) ==> HTML Element
const p = React.createElement("div", { id: "01", className: "paraClass" }, [
  React.createElement(
    "p",
    { id: "01", key: 1, className: "paraClass" },
    "This is the Paragraph tag created by React Element"
  ),
  React.createElement(
    "p",
    { id: "02", key: 2, className: "paraClass" },
    "This is the Paragraph tag created by React Element"
  ),
]);
console.log(p);

//JSX Element (Uses Bable Package to Transfile the JSX Code JSEngine understandable code)===> ReactElement ===> HTMLElement(Render)
const jsxHeading = <h1>This is the Heading by using JSX🚀</h1>;
console.log(jsxHeading);

//Functional Component:Normal JavaScript funcion which return some piece of JSX
const HeadingComponent = () => {
  return (
    <div>
      <h1>Hello from Functional Component with(MultilLine)</h1>
      <h2>Hello from Functional Component with(Multiline 2)</h2>
    </div>
  );
};

const HeadingComponentSingleLine = () => (
  <>
    <HeadingComponent />
    <h1>Hello from Functional Component with(SingleLine)</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponentSingleLine />);
