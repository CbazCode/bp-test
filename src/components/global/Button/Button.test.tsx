import React from "react";

import Button from "./Button";
import { render } from "test/setupFilesAfterEnv";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button text="text" />);
  });
});
