import React from "react";

import InputDatePicker from "./InputDatePicker";
import { render } from "test/setupFilesAfterEnv";

describe("InputDatePicker", () => {
  it("renders with default props", () => {
    render(<InputDatePicker name="" />);
  });
});
