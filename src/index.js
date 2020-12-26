import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import BadgeNew from "./pages/BadgeNew";

// const element = <h1>Hello, Platzi Badges from React</h1>
const container = document.getElementById("app");

ReactDOM.render(<BadgeNew />, container);
