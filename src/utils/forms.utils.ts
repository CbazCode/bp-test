import dayjs from "dayjs";
import { z } from "zod";

import { validation as v } from "./forms.validations.utils";

export const productSchema = z
  .object({
    id: v.id,
    name: v.name,
    description: v.description,
    logo: v.logo,
    date_release: v.date_release,
    date_revision: v.date_revision
  })
  .superRefine((values, ctx) => {
    const { date_release, date_revision, logo } = values;
    const dateRelease = dayjs(date_release);
    const dateRevision = dayjs(date_revision);
    const dateReleaseInOneYear = dateRelease.add(1, "year");
    const isSameDate = dateRevision.isSame(dateReleaseInOneYear);
    const isAfterDateRevision = dateRevision.isAfter(dateReleaseInOneYear);
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

    if (!urlRegex.test(logo)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Debe ser una URL válida",
        path: ["logo"]
      });
    }

    if (!isSameDate && !isAfterDateRevision) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "La fecha de revisión debe ser mayor a la fecha de liberación por 1 año",
        path: ["date_revision"]
      });
    }
  });
