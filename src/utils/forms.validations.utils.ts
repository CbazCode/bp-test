import { z } from "zod";

export const validation = {
  id: z
    .string({
      required_error: "Este campo es requerido"
    })
    .min(3, { message: "Debe tener por lo menos 3 caracteres" })
    .max(10, { message: "Debe tener como máximo 10 caracteres" }),
  name: z
    .string()
    .min(5, {
      message: "Debe tener por lo menos 5 caracteres"
    })
    .max(100, {
      message: "Debe tener como máximo 100 caracteres"
    }),
  description: z
    .string()
    .min(10, {
      message: "Debe tener por lo menos 10 caracteres"
    })
    .max(200, {
      message: "Debe tener como máximo 200 caracteres"
    }),
  logo: z.string({ required_error: "Este campo es requerido" }),
  date_release: z
    .string({
      required_error: "Este campo es requerido"
    })
    .min(6),
  date_revision: z
    .string({
      required_error: "Este campo es requerido"
    })
    .min(6)
};
