import dayjs from "dayjs";
import { z } from "zod";

const currentDate = dayjs().startOf("day").toDate();

export const validation = {
  id: z
    .string({
      required_error: "Este campo es requerido"
    })
    .min(3, { message: "Debe tener por lo menos 3 caracteres" })
    .max(10, { message: "Debe tener como máximo 10 caracteres" }),
  name: z
    .string({
      required_error: "Este campo es requerido"
    })
    .min(5, {
      message: "Debe tener por lo menos 5 caracteres"
    })
    .max(100, {
      message: "Debe tener como máximo 100 caracteres"
    }),
  description: z
    .string({
      required_error: "Este campo es requerido"
    })
    .min(10, {
      message: "Debe tener por lo menos 10 caracteres"
    })
    .max(200, {
      message: "Debe tener como máximo 200 caracteres"
    }),
  logo: z
    .string({ required_error: "Este campo es requerido" })
    .url({ message: "Debe ser una URL válida" }),
  date_release: z
    .date({
      required_error: "Este campo es requerido"
    })
    .min(currentDate, {
      message: "Debe ser mayor a la fecha actual"
    }),
  date_revision: z.date({
    required_error: "Este campo es requerido"
  })
};
