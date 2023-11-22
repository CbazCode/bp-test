// Interfaces and types from component ConfirmActionModal

import { ModalProps } from "react-native";

import { ActionButtonsProps } from "../ActionButtons/ActionButtons.types";

// Component Props
export interface ConfirmActionModalProps
  extends ModalProps,
    Pick<
      ActionButtonsProps,
      "loadingAbove" | "loadingBelow" | "disabledAbove" | "disabledBelow"
    > {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  isError?: boolean;
}
