import CreateProductScreen from "./CreateProduct.screen";
import { render } from "test/setupFilesAfterEnv";

describe("CreateProduct screen", () => {
  it("renders without crashing", () => {
    render(<CreateProductScreen />);
  });
});
