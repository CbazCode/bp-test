import React from "react";

import AddProductButton from "./AddProductButton";
import { render } from "test/setupFilesAfterEnv";

describe("AddProductButton", () => {
  it("renders with default props", () => {
    render(<AddProductButton />);
  });
});
