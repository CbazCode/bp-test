import React from "react";

import DatePicker from "./DatePicker";
import { render } from "test/setupFilesAfterEnv";

describe("DatePicker", () => {
  it("renders with default props", () => {
    render(<DatePicker visible onClose={() => {}} onSave={() => {}} />);
  });
});
