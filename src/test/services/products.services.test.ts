import {
  deleteFinancialProduct,
  getFinancialProducts,
  postFinancialProduct,
  putFinancialProduct,
  verifyFinancialProductId
} from "services";

describe("product services", () => {
  it("should be fetch products", async () => {
    const products = await getFinancialProducts({});
    expect(products.length).toBeGreaterThan(0);
  });

  it("should be fetch products with error if authorId is missing", async () => {
    try {
      await getFinancialProducts({
        overridesHeaders: { authorId: "" }
      });
    } catch (e) {
      expect(e.message).toBe("Bad Request");
    }
  });

  it("should be create an product", async () => {
    const id = Math.floor(Math.random() * (1000 - 10 + 1) + 10).toString();

    const product = await postFinancialProduct({
      product: {
        id,
        name: "Tarjetas de crédito",
        description: "Tarjeta de consumo bajo la modalidad de crédito",
        logo: "https://www.logo.png",
        date_release: new Date(),
        date_revision: new Date("2025-01-01")
      },
      overridesHeaders: {
        authorId: "101099"
      }
    });
    expect(product).toBeTruthy();
  });

  it("should be throw an error when create an product because is duplicated", async () => {
    try {
      await postFinancialProduct({
        product: {
          id: "777777",
          name: "Tarjetas de crédito",
          description: "Tarjeta de consumo bajo la modalidad de crédito",
          logo: "https://www.logo.png",
          date_release: new Date(),
          date_revision: new Date("2025-01-01")
        },
        overridesHeaders: {
          authorId: "101099"
        }
      });
    } catch (e) {
      expect(e.message).toBe("Bad Request");
    }
  });

  it("should be update an product", async () => {
    const product = await putFinancialProduct({
      product: {
        id: "777777",
        name: "Actualizado",
        description: "Tarjeta de consumo bajo la modalidad de crédito",
        logo: "https://www.logo.png",
        date_release: new Date(),
        date_revision: new Date("2025-01-01")
      },
      overridesHeaders: {
        authorId: "101099"
      }
    });
    expect(product.name).toBe("Actualizado");
  });

  it("should be throw an error when update an product because id doesnt exits", async () => {
    try {
      await postFinancialProduct({
        product: {
          id: "23232",
          name: "Tarjetas de crédito",
          description: "Tarjeta de consumo bajo la modalidad de crédito",
          logo: "https://www.logo.png",
          date_release: new Date(),
          date_revision: new Date("2025-01-01")
        },
        overridesHeaders: {
          authorId: "101099"
        }
      });
    } catch (e) {
      expect(e.message).toBe("Bad Request");
    }
  });

  it("should be delete an product", async () => {
    const message = await deleteFinancialProduct({
      id: "777777",
      overridesHeaders: {
        authorId: "101099"
      }
    });
    expect(message).toBeTruthy();
  });

  it("should be throw an error `Not product found with that id` when delete an product because id doesnt exits", async () => {
    try {
      await deleteFinancialProduct({
        id: "777777",
        overridesHeaders: {
          authorId: "101099"
        }
      });
    } catch (e) {
      expect(e.message).toBe("Not product found with that id");
    }
  });

  it("should be throw an error `Header authorId is missing` when delete an product because id doesnt exits", async () => {
    try {
      await deleteFinancialProduct({
        id: "777777",
        overridesHeaders: {
          authorId: ""
        }
      });
    } catch (e) {
      expect(e.message).toBe("Header authorId is missing");
    }
  });

  it("should be verify the id if exist", async () => {
    const exists = await verifyFinancialProductId({
      id: "777777",
      overridesHeaders: {
        authorId: "101099"
      }
    });
    expect(exists).toBe(false);
  });
});
