import React from "react";

import GoBack from "./GoBack";
import { render } from "test/setupFilesAfterEnv";

describe("GoBack", () => {
  it("renders with default props", () => {
    render(<GoBack />);
  });
});
