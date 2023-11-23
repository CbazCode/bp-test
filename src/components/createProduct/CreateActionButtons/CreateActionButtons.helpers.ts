// Helpers for EditActionButtons component

import { ProductFormSchema } from "types/forms.types";
import { Product } from "types/products.types";

export const getCreatePayload = (values: ProductFormSchema): Product => {
  const { date_release, date_revision } = values;
  const product: Product = {
    ...values,
    date_release: new Date(date_release),
    date_revision: new Date(date_revision)
  };
  return product;
};
