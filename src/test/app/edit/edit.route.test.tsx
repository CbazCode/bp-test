import Edit from "app/edit";
import { render } from "test/setupFilesAfterEnv";

describe("Edit Screen", () => {
  it("renders with default props", () => {
    const component = render(<Edit />);
    expect(component).toMatchSnapshot();
  });
});
