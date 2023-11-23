import { z } from "zod";

import { maxMessage, minMessage } from "./forms.messages.utils";
import { requiredMessage, validDateMessage } from "./forms.messages.utils";
import { today } from "./forms.messages.utils";

export const validation = {
  id: z
    .string({ required_error: requiredMessage })
    .min(3, { message: minMessage(3) })
    .max(10, { message: maxMessage(10) }),
  name: z
    .string({ required_error: requiredMessage })
    .min(5, { message: minMessage(5) })
    .max(100, { message: maxMessage(100) }),
  description: z
    .string({ required_error: requiredMessage })
    .min(10, { message: minMessage(10) })
    .max(200, { message: maxMessage(200) }),
  logo: z.string({ required_error: requiredMessage }).min(1, {
    message: requiredMessage
  }),
  date_release: z
    .string({
      required_error: requiredMessage,
      invalid_type_error: validDateMessage
    })
    .pipe(
      z.coerce
        .date({
          required_error: requiredMessage,
          invalid_type_error: validDateMessage
        })
        .min(today, {
          message: "Debe ser mayor a la fecha actual"
        })
    ),
  date_revision: z
    .string({
      required_error: requiredMessage,
      invalid_type_error: validDateMessage
    })
    .pipe(
      z.coerce.date({
        required_error: requiredMessage,
        invalid_type_error: validDateMessage
      })
    )
};
