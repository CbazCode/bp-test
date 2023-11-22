import React from "react";

import CreateProductForm from "./CreateProductForm";
import { render } from "test/setupFilesAfterEnv";

describe("CreateProductForm", () => {
  it("renders with default props", () => {
    render(<CreateProductForm />);
  });
});
