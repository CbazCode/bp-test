import dayjs from "dayjs";
import React from "react";

import MonthDays from "./MonthDays";
import { render } from "test/setupFilesAfterEnv";

describe("MonthDays", () => {
  it("renders with default props", () => {
    render(<MonthDays selectedDate={dayjs()} setSelectedDate={() => {}} />);
  });
});
