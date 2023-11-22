import React from "react";

import ConfirmActionModal from "./ConfirmActionModal";
import { render } from "test/setupFilesAfterEnv";

describe("ConfirmActionModal", () => {
  it("renders with default props", () => {
    render(
      <ConfirmActionModal
        title="title"
        onConfirm={() => {}}
        onCancel={() => {}}
      />
    );
  });
});
