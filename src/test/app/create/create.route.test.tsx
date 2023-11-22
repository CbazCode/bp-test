import Create from "app/create";
import { render } from "test/setupFilesAfterEnv";

describe("Create Screen", () => {
  it("renders with default props", () => {
    const component = render(<Create />);
    expect(component).toMatchSnapshot();
  });
});
