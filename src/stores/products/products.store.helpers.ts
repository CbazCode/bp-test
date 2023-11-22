// BillingData store helper functions and data
import { ProductsStoreValues } from "./products.store.types";
import { StoreInitialValues } from "types/store.types";

export const defaultValues: StoreInitialValues<ProductsStoreValues> = {
  selectedProduct: undefined
};
