import { Product } from "types/products.types";
import { productSchema } from "utils/forms.utils";

describe("form utils", () => {
  it("should be pass super refine", () => {
    const product: Product = {
      id: "123",
      name: "Tarjetas de crédito",
      description: "Tarjeta de consumo bajo la modalidad de crédito",
      logo: "https://www.logo.png",
      date_release: new Date(),
      date_revision: new Date("2025-01-01")
    };
    expect(
      productSchema.parse({
        ...product,
        date_release: product.date_release.toISOString(),
        date_revision: product.date_revision.toISOString()
      })
    ).toBeTruthy();
  });

  it("should be validate the the date_revision is after for 1 year to date_release", () => {
    const product: Product = {
      id: "123",
      name: "Tarjetas de crédito",
      description: "Tarjeta de consumo bajo la modalidad de crédito",
      logo: "https://www.logo.png",
      date_release: new Date(),
      date_revision: new Date()
    };
    try {
      productSchema.parse({
        ...product,
        date_release: product.date_release.toISOString(),
        date_revision: product.date_revision.toISOString()
      });
    } catch (error) {
      expect(error.message).toContain(
        "La fecha de revisión debe ser mayor a la fecha de liberación por 1 año"
      );
    }
  });

  it("should be validate url logo", () => {
    const product: Product = {
      id: "123",
      name: "Tarjetas de crédito",
      description: "Tarjeta de consumo bajo la modalidad de crédito",
      logo: "abc",
      date_release: new Date(),
      date_revision: new Date()
    };
    try {
      productSchema.parse({
        ...product,
        date_release: product.date_release.toISOString(),
        date_revision: product.date_revision.toISOString()
      });
    } catch (error) {
      expect(error.message).toContain("Debe ser una URL válida");
    }
  });
});
