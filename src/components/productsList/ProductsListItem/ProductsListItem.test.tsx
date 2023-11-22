import React from "react";

import ProductsListItem from "./ProductsListItem";
import { render } from "test/setupFilesAfterEnv";

describe("ProductsListItem", () => {
  it("renders with default props", () => {
    const product = {
      id: "1",
      name: "Product 1",
      description: "Description 1",
      logo: "https://picsum.photos/200",
      date_release: "2021-01-01",
      date_revision: "2021-01-01"
    };
    render(<ProductsListItem product={product} />);
  });
});
