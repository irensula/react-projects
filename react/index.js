import React from "react";
import ReactDOM from "react-dom";

const fName = "Irina";
const lName = "Sula";
const num = 9;
const currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Hello, {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {num}.</p>
    {/*  any JS expression can be in curly braces */}
    <p>Created by {fName}.</p>
    <p>And your lucky random number is {Math.floor(Math.random() * 10)}.</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
