import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const startApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

startApp();

// if (!window.cordova) {
//   startApp();
// } else {
//   document.addEventListener("deviceready", startApp, false);
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();