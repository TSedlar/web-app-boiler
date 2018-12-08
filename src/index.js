import React from "react";
import ReactDOM from "react-dom";
import Framework7 from "framework7/framework7.esm.bundle.js";
import Framework7React from "framework7-react";

import "./index.css";
import Main from "./App";
import * as serviceWorker from "./serviceWorker";

Framework7.use(Framework7React);

const startApp = () => {
  ReactDOM.render(<Main />, document.getElementById("root"));
  serviceWorker.register();
};

if (!window.cordova) {
  startApp();
} else {
  document.addEventListener("deviceready", startApp, false);
}
