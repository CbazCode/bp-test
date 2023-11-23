import { Product } from "types/products.types";
import { getStoreSetState } from "utils/store.utils";

describe("store utils", () => {
  it("should be return selected item object passing function", () => {
    const product: Product = {
      id: "123",
      name: "Tarjetas de crédito",
      description: "Tarjeta de consumo bajo la modalidad de crédito",
      logo: "https://www.logo.png",
      date_release: new Date(),
      date_revision: new Date("2025-01-01")
    };
    const selectedProduct = getStoreSetState<Product>(product, product);
    expect(typeof selectedProduct).not.toBe("function");
  });
  it("should be return selected item object passing function", () => {
    const product: Product = {
      id: "123",
      name: "Tarjetas de crédito",
      description: "Tarjeta de consumo bajo la modalidad de crédito",
      logo: "https://www.logo.png",
      date_release: new Date(),
      date_revision: new Date("2025-01-01")
    };
    const get = (product: Product) => product;
    const selectedProduct = getStoreSetState<Product>(get, product);
    expect(typeof selectedProduct).not.toBe("function");
  });
});
