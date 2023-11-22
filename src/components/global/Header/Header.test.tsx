import React from "react";

import Header from "./Header";
import { render } from "test/setupFilesAfterEnv";

describe("Header", () => {
  it("renders with default props", () => {
    render(<Header />);
  });
});
