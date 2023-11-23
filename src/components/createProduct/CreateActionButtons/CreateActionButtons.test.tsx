import { screen } from "@testing-library/react-native";
import React from "react";

import CreateActionButtons from "./CreateActionButtons";
import { render } from "test/setupFilesAfterEnv";

describe("CreateActionButtons", () => {
  it("renders with default props", () => {
    render(<CreateActionButtons resetDatePickers={() => {}} />);
  });

  it("should be render two buttons", () => {
    render(<CreateActionButtons resetDatePickers={() => {}} />);
    const button = screen.getAllByTestId("action-button");
    expect(button.length).toBe(2);
  });
});
