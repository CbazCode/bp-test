import { UseQueryOptions } from "@tanstack/react-query";

import { Product, PutProduct } from "types/products.types";

export interface GetProductsConfig {
  signal?: AbortSignal;
}
export interface GetProductConfig {
  id: Product["id"];
  signal?: AbortSignal;
}

export interface PostProductConfig {
  product: Product;
  signal?: AbortSignal;
}

export interface PutProductConfig {
  product: PutProduct;
  signal?: AbortSignal;
}

export interface DeleteProductConfig {
  id: Product["id"];
}

export interface VerifyProductConfig {
  id: string;
  signal?: AbortSignal;
}

export interface QueryOptions extends Pick<UseQueryOptions, "enabled"> {}
