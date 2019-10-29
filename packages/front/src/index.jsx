import React from "react";
import { render } from "react-dom";

import { TestComponent } from "./components/testComponent/testComponent.jsx";

document.addEventListener("DOMContentLoaded", () => {
  render(<TestComponent />, document.getElementById("container"));
});
