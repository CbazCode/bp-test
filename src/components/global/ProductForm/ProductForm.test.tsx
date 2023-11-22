import React from "react";

import ProductForm from "./ProductForm";
import { render } from "test/setupFilesAfterEnv";

describe("ProductForm", () => {
  it("renders with default props", () => {
    render(<ProductForm />);
  });
});
