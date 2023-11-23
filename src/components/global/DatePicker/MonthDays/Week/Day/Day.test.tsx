import dayjs from "dayjs";
import React from "react";

import Day from "./Day";
import { render } from "test/setupFilesAfterEnv";

describe("Day", () => {
  it("renders with default props", () => {
    render(
      <Day
        selectedDate={dayjs()}
        hideExtraDays
        date={dayjs()}
        setSelectedDate={() => {}}
      />
    );
  });
});
