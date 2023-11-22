import React from "react";

import Error from "./Error";
import { render } from "test/setupFilesAfterEnv";

describe("Error", () => {
  it("renders with default props", () => {
    render(<Error />);
  });
});
