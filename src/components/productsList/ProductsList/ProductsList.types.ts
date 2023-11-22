// Interfaces and types from component ProductsList

import { Dispatch, SetStateAction } from "react";

// Component Props
export interface ProductsListProps {
  render: (
    filterProduct: string | null,
    setFilterProduct: Dispatch<SetStateAction<string | null>>
  ) => React.ReactNode;
}
