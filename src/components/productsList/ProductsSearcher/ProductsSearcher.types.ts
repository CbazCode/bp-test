// Interfaces and types from component ProductsSearcher

import { Dispatch, SetStateAction } from "react";
import { TextInputProps } from "react-native";

// Component Props
export interface ProductsSearcherProps extends TextInputProps {
  text: string | null;
  setText: Dispatch<SetStateAction<string | null>>;
}
