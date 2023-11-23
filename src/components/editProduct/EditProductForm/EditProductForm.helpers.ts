// Helpers for edit product form component

import { ProductFormSchema } from "types/forms.types";
import { Product } from "types/products.types";
import { formatDate } from "utils/date.utils";

export const getDefaultValuesForForm = (
  product?: Product
): Partial<ProductFormSchema> => {
  if (!product) return {} as ProductFormSchema;
  const { date_release, date_revision } = product ?? {};
  const productForm: Partial<ProductFormSchema> = {
    date_release: formatDate(date_release),
    date_revision: formatDate(date_revision)
  };
  return productForm;
};

export const getEditableValuesForForm = (): Partial<
  Record<keyof ProductFormSchema, boolean>
> => {
  const editableValues = { id: false };
  return editableValues;
};
