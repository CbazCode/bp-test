import React from "react";

import ProductsList from "./ProductsList";
import { render } from "test/setupFilesAfterEnv";

describe("ProductsList", () => {
  it("renders with default props", () => {
    render(<ProductsList />);
  });
});
