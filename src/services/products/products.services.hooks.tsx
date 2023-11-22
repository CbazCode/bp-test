import { useEffect, useState } from "react";

import { deleteFinancialProduct } from "./products.services";
// This can be improve  with tan stack library
import { verifyFinancialProductId } from "./products.services";
import { getFinancialProducts } from "./products.services";
import { postFinancialProduct, putFinancialProduct } from "./products.services";
import { Product } from "types/products.types";

export const useGetProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(null);
  const controller = new AbortController();

  const fetchProducts = async () => {
    try {
      const config = { signal: controller.signal };
      const products = await getFinancialProducts(config);
      setProducts(products);
    } catch (err) {
      setError(err);
    }
  };

  const getProducts = async () => {
    setIsLoading(true);
    await fetchProducts();
    setIsLoading(false);
  };

  const refetchProducts = async () => {
    setIsRefetching(true);
    await fetchProducts();
    setIsRefetching(false);
  };

  useEffect(() => {
    (async () => {
      await getProducts();
    })();
    return () => controller.abort();
  }, []);

  return { isLoading, products, error, refetchProducts, isRefetching };
};

export const usePostFinancialProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const controller = new AbortController();

  const postProduct = async (product: Product) => {
    setIsLoading(true);
    try {
      const config = { product, signal: controller.signal };
      await postFinancialProduct(config);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  return { isLoading, postProduct, error, postController: controller };
};

export const usePutFinancialProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const controller = new AbortController();

  const putProduct = async (product: Partial<Product>) => {
    setIsLoading(true);
    try {
      const config = { product, signal: controller.signal };
      await putFinancialProduct(config);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  return { isLoading, putProduct, error, putController: controller };
};

export const useDeleteFinancialProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteProduct = async (id: string) => {
    setIsLoading(true);
    try {
      const config = { id };
      await deleteFinancialProduct(config);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  return { isLoading, deleteProduct, error };
};

export const useVerifyFinancialProductId = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const controller = new AbortController();

  const verifyFinancialProduct = async (id: string) => {
    setIsLoading(true);
    try {
      const config = { id, signal: controller.signal };
      const exist = await verifyFinancialProductId(config);
      return exist;
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    verifyFinancialProduct,
    error,
    verifyController: controller
  };
};
