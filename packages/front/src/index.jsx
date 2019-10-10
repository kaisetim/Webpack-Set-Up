import React from "react";
import ReactDOM from "react-dom";

import { TestCom } from "./components/testCom/testCom.jsx";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<TestCom />, document.getElementById("container"));
});
