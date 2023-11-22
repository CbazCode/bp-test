import { QueryKey, useMutation } from "@tanstack/react-query";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getFinancialProducts, putFinancialProduct } from "./products.services";
import { verifyFinancialProductId } from "./products.services";
import { deleteFinancialProduct } from "./products.services";
import { postFinancialProduct } from "./products.services";
import { DeleteProductConfig } from "./products.services.types";
import { VerifyProductConfig } from "./products.services.types";
import { GetProductConfig } from "./products.services.types";
import { GetProductsConfig, PutProductConfig } from "./products.services.types";
import { PostProductConfig, QueryOptions } from "./products.services.types";
import { Product, PutProduct } from "types/products.types";

export const useGetFinancialProducts = (
  config?: GetProductsConfig,
  queryOptions: QueryOptions = {}
) => {
  const { signal } = config ?? {};
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: () => getFinancialProducts({ signal }),
    staleTime: 60 * 60 * 1000,
    ...queryOptions
  });
};

export const useGetFinancialProduct = (
  config: GetProductConfig,
  queryOptions: QueryOptions = {}
) => {
  const { id, signal } = config;
  return useQuery<Product[], Error, Product | undefined>({
    queryKey: ["product", id],
    queryFn: () => getFinancialProducts({ signal }),
    select: products => products.find(product => product.id === id),
    staleTime: 60 * 60 * 1000,
    ...queryOptions
  });
};

export const usePostFinancialProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<Product, Error, PostProductConfig, Product[]>({
    mutationFn: postFinancialProduct,
    onMutate: async (
      config: PostProductConfig
    ): Promise<Product[] | undefined> => {
      const { product } = config;
      await queryClient.cancelQueries({ queryKey: ["products"] });
      const previousProducts = queryClient.getQueryData<Product[]>([
        "products"
      ]);
      queryClient.setQueryData<Product[]>(["products"], old => [
        ...(old ?? []),
        product
      ]);
      return previousProducts;
    },
    onError: (
      _errorData: Error,
      _config: PostProductConfig,
      previousProducts: Product[] | undefined
    ) => {
      if (!previousProducts) return;
      queryClient.setQueryData(["products"], previousProducts);
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["products"] })
  });
};

export const usePutFinancialProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<Product, Error, PutProductConfig, Product[]>({
    mutationFn: putFinancialProduct,
    onMutate: async (
      config: PutProductConfig
    ): Promise<Product[] | undefined> => {
      const { product } = config;
      await queryClient.cancelQueries({ queryKey: ["products"] });
      const previousProducts = queryClient.getQueryData<Product[]>([
        "products"
      ]);

      queryClient.setQueryData<Product[], QueryKey, PutProduct[]>(
        ["products"],
        () => {
          return previousProducts?.map(previousProduct => {
            if (previousProduct.id === product.id) {
              return { previousProduct, ...product };
            }
            return previousProduct;
          });
        }
      );
      return previousProducts;
    },
    onError: (
      _errorData: Error,
      _config: PutProductConfig,
      previousProducts: Product[] | undefined
    ) => {
      if (!previousProducts) return;
      queryClient.setQueryData(["products"], previousProducts);
    },
    onSettled: product => {
      const { id } = product ?? {};
      queryClient.invalidateQueries({ queryKey: ["product", id] });
    }
  });
};

export const useDeleteFinancialProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<string, Error, DeleteProductConfig, Product[]>({
    mutationFn: deleteFinancialProduct,
    onMutate: async (
      config: DeleteProductConfig
    ): Promise<Product[] | undefined> => {
      const { id } = config;
      await queryClient.cancelQueries({ queryKey: ["products"] });
      const previousProducts = queryClient.getQueryData<Product[]>([
        "products"
      ]);
      queryClient.setQueryData<Product[]>(["products"], () => {
        return previousProducts?.filter(
          previousProduct => previousProduct.id === id
        );
      });
      return previousProducts;
    },
    onError: (
      _errorData: Error,
      _config: DeleteProductConfig,
      previousProducts: Product[] | undefined
    ) => {
      if (!previousProducts) return;
      queryClient.setQueryData(["products"], previousProducts);
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["products"] })
  });
};

export const useVerifyFinancialProductId = (
  config: VerifyProductConfig,
  queryOptions: QueryOptions
) => {
  const { id, signal } = config;
  return useQuery<boolean, Error>({
    queryKey: ["verify-product", id],
    queryFn: () => verifyFinancialProductId({ id, signal }),
    ...queryOptions
  });
};
