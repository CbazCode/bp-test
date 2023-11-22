import { z } from "zod";

import { validation as v } from "./forms.validations.utils";

export const productSchema = z.object({
  id: v.id,
  name: v.name,
  description: v.description,
  logo: v.logo,
  date_release: v.date_release,
  date_revision: v.date_revision
});
