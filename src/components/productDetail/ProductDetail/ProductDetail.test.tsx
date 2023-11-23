import React from "react";

import ProductDetail from "./ProductDetail";
import { render } from "test/setupFilesAfterEnv";

describe("ProductDetail", () => {
  it("renders with default props", () => {
    const product = {
      id: "1",
      name: "Product 1",
      description: "Description 1",
      logo: "https://picsum.photos/200",
      date_release: new Date(),
      date_revision: new Date()
    };
    render(<ProductDetail product={product} />);
  });
});
