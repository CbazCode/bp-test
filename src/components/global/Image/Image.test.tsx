import React from "react";

import Image from "./Image";
import { render } from "test/setupFilesAfterEnv";

describe("Image", () => {
  it("renders with default props", () => {
    render(<Image uri="" />);
  });
});
