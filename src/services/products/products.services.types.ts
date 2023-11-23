import { UseQueryOptions } from "@tanstack/react-query";

import { Product, PutProduct } from "types/products.types";

export interface CommonConfig {
  overridesHeaders?: Record<string, string>;
}
export interface GetProductsConfig extends CommonConfig {
  signal?: AbortSignal;
}
export interface GetProductConfig extends CommonConfig {
  id: Product["id"];
  signal?: AbortSignal;
}

export interface PostProductConfig extends CommonConfig {
  product: Product;
  signal?: AbortSignal;
}

export interface PutProductConfig extends CommonConfig {
  product: PutProduct;
  signal?: AbortSignal;
}

export interface DeleteProductConfig extends CommonConfig {
  id: Product["id"];
}

export interface VerifyProductConfig extends CommonConfig {
  id: string;
  signal?: AbortSignal;
}

export interface QueryOptions extends Pick<UseQueryOptions, "enabled"> {}
