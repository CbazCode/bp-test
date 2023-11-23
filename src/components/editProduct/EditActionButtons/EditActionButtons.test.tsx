import React from "react";

import EditActionButtons from "./EditActionButtons";
import { getEditPayload } from "./EditActionButtons.helpers";
import { render } from "test/setupFilesAfterEnv";
import { ProductFormSchema } from "types/forms.types";

describe("EditActionButtons", () => {
  it("renders with default props", () => {
    render(<EditActionButtons resetDatePickers={() => {}} />);
  });
  it("should have payload for create product", () => {
    const product: ProductFormSchema = {
      id: "123",
      name: "Tarjetas de crédito",
      description: "Tarjeta de consumo bajo la modalidad de crédito",
      logo: "https://www.logo.png",
      date_release: new Date().toISOString(),
      date_revision: new Date().toISOString()
    };
    const payload = getEditPayload(product);
    expect(payload).toEqual({
      ...product,
      date_release: new Date(product.date_release),
      date_revision: new Date(product.date_revision)
    });
  });
});
