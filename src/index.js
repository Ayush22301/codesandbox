// var React = require("react");
// var ReactDOM = require("react-dom");

//New method in ES6 JS

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello</h1>, document.getElementById("root")); //what to show,where to show,callback func
//this (html inside js) is done by a JS compiler Babel inside React module
// if to do the same thing in vanilla js::
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello";
// document.getElementById("root").appendChild(h1);

// Babel converts all next gen JS into original browser compatble js

//we can pass only one html element in render

//to pass more than 1 embed them all in a single div
