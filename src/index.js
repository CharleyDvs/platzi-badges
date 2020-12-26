import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import Badge from "./components/Badge";

// const element = <h1>Hello, Platzi Badges from React</h1>
const container = document.getElementById("app");

ReactDOM.render(<Badge />, container);
