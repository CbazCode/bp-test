import EditProductScreen from "./EditProduct.screen";
import { render } from "test/setupFilesAfterEnv";

describe("EditProduct screen", () => {
  it("renders without crashing", () => {
    render(<EditProductScreen />);
  });
});
