import React from "react";

import Loading from "./Loading";
import { render } from "test/setupFilesAfterEnv";

describe("Loading", () => {
  it("renders with default props", () => {
    render(<Loading />);
  });
});
