import React from "react";

import ProductDetailActionButtons from "./ProductDetailActionButtons";
import { render } from "test/setupFilesAfterEnv";

describe("ProductDetailActionButtons", () => {
  it("renders with default props", () => {
    const product = {
      id: "1",
      name: "Product 1",
      description: "Description 1",
      logo: "https://picsum.photos/200",
      date_release: new Date(),
      date_revision: new Date()
    };
    render(<ProductDetailActionButtons product={product} />);
  });
});
