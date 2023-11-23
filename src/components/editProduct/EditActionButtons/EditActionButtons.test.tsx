import React from "react";

import EditActionButtons from "./EditActionButtons";
import { render } from "test/setupFilesAfterEnv";

describe("EditActionButtons", () => {
  it("renders with default props", () => {
    render(<EditActionButtons resetDatePickers={() => {}} />);
  });
});
