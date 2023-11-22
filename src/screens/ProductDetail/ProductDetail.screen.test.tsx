import ProductDetailScreen from "./ProductDetail.screen";
import { render } from "test/setupFilesAfterEnv";

describe("ProductDetail screen", () => {
  it("renders without crashing", () => {
    render(<ProductDetailScreen />);
  });
});
