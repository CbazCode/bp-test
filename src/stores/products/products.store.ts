// Products store

import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { defaultValues } from "./products.store.helpers";
import { ProductsStoreValues } from "./products.store.types";
import { getStoreSetState } from "utils/store.utils";

export const useProductsStore = create<ProductsStoreValues>()(
  devtools(
    (set, get) => {
      return {
        ...defaultValues,
        setSelectedProduct: payload => {
          const prev = get().selectedProduct;
          const selectedProduct = getStoreSetState(payload, prev);
          set({ selectedProduct }, false, {
            type: "setSelectedProduct",
            payload
          });
        },
        reset: () =>
          set({ ...defaultValues }, false, {
            type: "reset"
          })
      };
    },
    { name: "Products store" }
  )
);
