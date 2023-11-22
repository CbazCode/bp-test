import RootLayout from "app/_layout";
import { render } from "test/setupFilesAfterEnv";

describe("Layout", () => {
  it("renders with default props", () => {
    const component = render(<RootLayout />);
    expect(component).toMatchSnapshot();
  });
});
