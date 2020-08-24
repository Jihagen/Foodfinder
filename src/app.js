import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss"
//JSX Javascript XML

//C:\Users\Julia\Documents\Documents\WWU\Techlabs\React Course Projects\Indecision App> 
// babel src/app.js --out-file=public/scripts/app.js --presets="env,react" –watch


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
