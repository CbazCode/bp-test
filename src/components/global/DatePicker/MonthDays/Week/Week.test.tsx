import dayjs from "dayjs";
import React from "react";

import Week from "./Week";
import { render } from "test/setupFilesAfterEnv";

describe("Week", () => {
  it("renders with default props", () => {
    render(
      <Week
        dates={[dayjs()]}
        selectedDate={dayjs()}
        setSelectedDate={() => {}}
      />
    );
  });
});
