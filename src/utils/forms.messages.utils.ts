import dayjs from "dayjs";

export const validDateMessage = "Debe ser una fecha válida";
export const requiredMessage = "Este campo es requerido";
export const minMessage = (minLength: number) => {
  return `Debe tener por lo menos ${minLength} caracteres`;
};
export const maxMessage = (maxLength: number) => {
  return `Debe tener como máximo ${maxLength} caracteres`;
};
export const today = dayjs().subtract(1, "day").startOf("day").toDate();
