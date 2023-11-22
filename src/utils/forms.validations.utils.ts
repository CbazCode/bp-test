import { z } from "zod";

export const validation = {
  id: z
    .string()
    .min(3, { message: "Must be at least 3 characters" })
    .max(10, { message: "Must be less than 10 characters" }),
  name: z
    .string()
    .min(5, {
      message: "Must be at least 5 characters"
    })
    .max(100, {
      message: "Must be less than 100 characters"
    }),
  description: z
    .string()
    .min(10, {
      message: "Must be at least 10 characters"
    })
    .max(200, {
      message: "Must be less than 200 characters"
    }),
  logo: z.string({ required_error: "Logo is required" }),
  date_release: z
    .string({
      required_error: "Date release is required"
    })
    .min(6),
  date_revision: z
    .string({
      required_error: "Date release is required"
    })
    .min(6)
};
