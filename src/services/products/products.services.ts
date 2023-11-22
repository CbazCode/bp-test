import { DeleteProductConfig } from "./products.services.types";
import { GetProductsConfig } from "./products.services.types";
import { VerifyProductConfig } from "./products.services.types";
import { PostProductConfig, PutProductConfig } from "./products.services.types";
import { CONSTANTS } from "../../config/constants";
import { buildHeaders } from "services/services.helpers";
import { Product } from "types/products.types";

const { API } = CONSTANTS;
const { API_URL } = API;

const baseUrl = "bp/products";
const url = `${API_URL}/${baseUrl}`;

export const getFinancialProducts = async (
  config: GetProductsConfig
): Promise<Product[]> => {
  try {
    const { signal } = config;
    const headers = buildHeaders();
    const response = await fetch(url, { headers, signal });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const postFinancialProduct = async (
  config: PostProductConfig
): Promise<Product> => {
  try {
    const { product } = config;
    const headers = buildHeaders();
    const body = JSON.stringify(product);
    const reqConfig = { method: "POST", body, headers };
    const response = await fetch(url, reqConfig);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const putFinancialProduct = async (
  config: PutProductConfig
): Promise<Product> => {
  try {
    const { product, signal } = config;
    const headers = buildHeaders();
    const body = JSON.stringify(product);
    const reqConfig = { method: "PUT", body, headers, signal };
    const response = await fetch(url, reqConfig);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const deleteFinancialProduct = async (
  config: DeleteProductConfig
): Promise<string> => {
  try {
    const { id } = config;
    const headers = buildHeaders();
    const reqUrl = `${url}?id=${id}`;
    const response = await fetch(reqUrl, { method: "DELETE", headers });
    if (!response.ok) throw new Error(response.statusText);
    if (response.status === 200) return "Product successfully removed";
    if (response.status === 404) return "Not product found with that id";
    if (response.status === 400) return "Header authorId is missing";
    throw new Error("Something went wrong");
  } catch (e) {
    throw new Error(e.message);
  }
};

export const verifyFinancialProductId = async (
  config: VerifyProductConfig
): Promise<boolean> => {
  try {
    const { id, signal } = config;
    const headers = buildHeaders();
    const reqUrl = `${url}/verification/${id}`;
    const response = await fetch(reqUrl, { headers, signal });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
