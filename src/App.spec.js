import * as React from "react";
import { act } from "react-dom/test-utils";
import * as ReactDOM from "react-dom";
import { App } from "./App";
const { runCLI } = require("@jest/core");

describe("App", function () {
  it("should display default text", function () {
    let container = window.document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<App />, container);
    });
    getByText(/app goes here2/i);
  });
});
