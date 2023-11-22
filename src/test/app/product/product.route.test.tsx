import Product from "app/product/[id]";
import { render } from "test/setupFilesAfterEnv";

describe("Product Screen", () => {
  it("renders with default props", () => {
    const component = render(<Product />);
    expect(component).toMatchSnapshot();
  });
});
