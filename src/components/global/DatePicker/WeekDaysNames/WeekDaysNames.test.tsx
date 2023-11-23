import React from "react";

import WeekDaysNames from "./WeekDaysNames";
import { render } from "test/setupFilesAfterEnv";

describe("WeekDaysNames", () => {
  it("renders with default props", () => {
    render(<WeekDaysNames />);
  });
});
