// Interfaces and types from component DeleteActionModal

import { Dispatch, SetStateAction } from "react";

import { Product } from "types/products.types";

// Component Props
export interface DeleteActionModalProps {
  id: Product["id"];
  name: Product["name"];
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}
