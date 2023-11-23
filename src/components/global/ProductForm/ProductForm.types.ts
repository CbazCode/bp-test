// Interfaces and types from component ProductForm

import { ProductFormSchema } from "types/forms.types";

// Component Props
export interface ProductFormProps {
  editable?: boolean;
  defaultValues?: Partial<ProductFormSchema>;
  editableValues?: Partial<Record<keyof ProductFormSchema, boolean>>;
  render?: (props: ProductFormRenderProps) => JSX.Element;
}

// Render Props
export interface ProductFormRenderProps {
  resetDatePickers: () => void;
}
