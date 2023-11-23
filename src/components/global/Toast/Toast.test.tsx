import React from "react";

import Toast from "./Toast";
import { render } from "test/setupFilesAfterEnv";

describe("Toast", () => {
  it("renders with default props", () => {
    render(<Toast />);
  });
});
