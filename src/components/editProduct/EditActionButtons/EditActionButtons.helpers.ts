// Helpers for EditActionButtons component

import { ProductFormSchema } from "types/forms.types";
import { PutProduct } from "types/products.types";

export const getEditPayload = (values: ProductFormSchema): PutProduct => {
  const { date_release, date_revision } = values;
  const product: PutProduct = {
    ...values,
    date_release: new Date(date_release),
    date_revision: new Date(date_revision)
  };
  return product;
};
