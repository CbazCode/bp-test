import App from "app";
import { render } from "test/setupFilesAfterEnv";

describe("App", () => {
  it("renders with default props", () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});
