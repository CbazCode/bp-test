import { Product } from "types/products.types";

export interface GetProductsConfig {
  signal?: AbortSignal;
}

export interface PostProductConfig {
  product: Product;
  signal?: AbortSignal;
}

export interface PutProductConfig {
  product: Partial<Product>;
  signal?: AbortSignal;
}

export interface DeleteProductConfig {
  id: string;
}

export interface VerifyProductConfig {
  id: string;
  signal?: AbortSignal;
}
