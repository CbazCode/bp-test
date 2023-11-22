import React from "react";

import DeleteActionModal from "./DeleteActionModal";
import { render } from "test/setupFilesAfterEnv";

describe("DeleteActionModal", () => {
  it("renders with default props", () => {
    render(
      <DeleteActionModal id="1" name="name" setShowModal={() => {}} showModal />
    );
  });
});
