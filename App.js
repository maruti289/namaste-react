const headingOne = document.createElement("h1");
headingOne.innerHTML = "This is Heading Tag 1";

const headingTwo = document.createElement("h2");
headingTwo.innerHTML = "This is Heading Tag 2";

const headingThree = document.createElement("h3");
headingThree.innerHTML = "This is Heading Tag 3";

//Modern way:It takes "Node objects" divided by comma not "Strings"
root.append(headingOne, headingTwo, headingThree);

//Older way Only one function takes only one "Node Object" and not Strings
root.appendChild(headingOne);
root.appendChild(headingTwo);
root.appendChild(headingThree);

const p = React.createElement("div", { id: "01", className: "paraClass" }, [
  React.createElement(
    "p",
    { id: "01", className: "paraClass" },
    "This is the Paragraph tag created by React Element"
  ),
  React.createElement(
    "p",
    { id: "02", className: "paraClass" },
    "This is the Paragraph tag created by React Element"
  ),
]);

console.log(p);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(p);
