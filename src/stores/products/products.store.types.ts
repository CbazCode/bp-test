// Products store types

import { Product } from "types/products.types";
import { StoreSetState } from "types/store.types";

export interface ProductsStoreValues {
  selectedProduct: Product | undefined;
  setSelectedProduct: StoreSetState<Product | undefined>;
  reset: () => void;
}
