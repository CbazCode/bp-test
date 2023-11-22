// Interfaces and types from component ProductDetailActionButtons

import { Dispatch, SetStateAction } from "react";

import { Product } from "types/products.types";

// Component Props
export interface ProductDetailActionButtonsProps {
  product: Product;
  render?: (
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>
  ) => React.ReactNode;
}
