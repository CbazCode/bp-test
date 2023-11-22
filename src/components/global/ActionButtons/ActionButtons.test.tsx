import React from "react";

import ActionButtons from "./ActionButtons";
import { render } from "test/setupFilesAfterEnv";

describe("ActionButtons", () => {
  it("renders with default props", () => {
    render(
      <ActionButtons
        onPressAbove={() => {}}
        onPressBelow={() => {}}
        styleAbove={{}}
        styleBelow={{}}
        textAbove="textAbove"
        textBelow="textBelow"
      />
    );
  });
});
