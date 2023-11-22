import { z } from "zod";

import { productSchema as ProductSchema } from "utils/forms.utils";

export type Product = z.infer<typeof ProductSchema>;

export type PutProduct = { id: string } & Partial<Omit<Product, "id">>;
