import React from "react";

import ProductsSearcher from "./ProductsSearcher";
import { render } from "test/setupFilesAfterEnv";

describe("ProductsSearcher", () => {
  it("renders with default props", () => {
    render(<ProductsSearcher text="" setText={() => {}} />);
  });
});
