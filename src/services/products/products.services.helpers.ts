// Helpers for products services

import { Product, PutProduct } from "types/products.types";
import { productSchema } from "utils/forms.utils";

export const verifyProductSchema = (product: Product | PutProduct): void => {
  const { date_release: dateRelease } = product;
  const { date_revision: dateRevision } = product;
  const date_release = dateRelease?.toISOString();
  const date_revision = dateRevision?.toISOString();
  const newProduct = { ...product, date_release, date_revision };
  productSchema.parse(newProduct);
};
