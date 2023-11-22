import React from "react";

import ProductsListScreen from "./ProductsList.screen";
import { render } from "test/setupFilesAfterEnv";

describe("ProductsList screen", () => {
  it("renders without crashing", () => {
    render(<ProductsListScreen />);
  });
});
