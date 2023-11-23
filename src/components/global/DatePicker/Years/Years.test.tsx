import dayjs from "dayjs";
import React from "react";

import Years from "./Years";
import { render } from "test/setupFilesAfterEnv";

describe("Years", () => {
  it("renders with default props", () => {
    render(<Years selectedDate={dayjs()} setSelectedDate={() => {}} />);
  });
});
