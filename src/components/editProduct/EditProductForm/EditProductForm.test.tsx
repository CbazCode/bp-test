import React from "react";

import EditProductForm from "./EditProductForm";
import { render } from "test/setupFilesAfterEnv";

describe("EditProductForm", () => {
  it("renders with default props", () => {
    render(<EditProductForm />);
  });
});
