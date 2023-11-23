import { Product } from "./products.types";

export interface ProductFormSchema
  extends Omit<Product, "date_release" | "date_revision"> {
  date_release: string;
  date_revision: string;
}
