import React from "react";
import ReactDOM from "react-dom";

const fName = "Irina";
const lName = "Sula";
const num = 9;

ReactDOM.render(
  <div>
    <h1>Hello, {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {num}.</p>
    {/*  any JS expression can be in curly braces */}
    <p>And your lucky random number is {Math.floor(Math.random() * 10)}.</p>
  </div>,
  document.getElementById("root")
);
