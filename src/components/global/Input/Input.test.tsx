import React from "react";

import Input from "./Input";
import { render } from "test/setupFilesAfterEnv";

describe("Input", () => {
  it("renders with default props", () => {
    render(<Input name="name" />);
  });
});
