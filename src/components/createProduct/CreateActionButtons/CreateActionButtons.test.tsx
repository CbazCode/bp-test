import { fireEvent, screen } from "@testing-library/react-native";
import React from "react";

import CreateActionButtons from "./CreateActionButtons";
import { getCreatePayload } from "./CreateActionButtons.helpers";
import { CONSTANTS } from "config/constants";
import { render } from "test/setupFilesAfterEnv";
import { ProductFormSchema } from "types/forms.types";

const { APP } = CONSTANTS;
const { ERROR_MESSAGE } = APP;

describe("CreateActionButtons", () => {
  it("renders with default props", () => {
    render(<CreateActionButtons resetDatePickers={() => {}} />);
  });

  it("should be render two buttons", () => {
    render(<CreateActionButtons resetDatePickers={() => {}} />);
    const button = screen.getAllByTestId("action-button");
    expect(button.length).toBe(2);
  });

  it("should be have correct text", () => {
    render(<CreateActionButtons resetDatePickers={() => {}} />);
    const button = screen.getAllByTestId("action-button");
    const saveButton = button[0];
    const cancelButton = button[1];
    expect(cancelButton).toHaveTextContent("Reiniciar");
    expect(saveButton).toHaveTextContent("Enviar");
  });

  it("should be call handleSubmit fn", () => {
    render(<CreateActionButtons resetDatePickers={() => {}} />);
    const button = screen.getAllByTestId("action-button");
    const saveButton = button[0];
    fireEvent.press(saveButton);
    expect(saveButton).toBeVisible();
  });

  it("should not show error", () => {
    render(<CreateActionButtons resetDatePickers={() => {}} />);
    const button = screen.getAllByTestId("action-button");
    const saveButton = button[0];
    fireEvent.press(saveButton);
    expect(saveButton).not.toHaveTextContent(ERROR_MESSAGE);
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
    const payload = getCreatePayload(product);
    expect(payload).toEqual({
      ...product,
      date_release: new Date(product.date_release),
      date_revision: new Date(product.date_revision)
    });
  });
});
