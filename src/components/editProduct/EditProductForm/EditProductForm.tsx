import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Text } from "react-native";

import {
  getDefaultValuesForForm,
  getEditableValuesForForm
} from "./EditProductForm.helpers";
import styles from "./EditProductForm.styles";
import { EditProductFormProps as Props } from "./EditProductForm.types";
import EditActionButtons from "../EditActionButtons/EditActionButtons";
import ProductForm from "components/global/ProductForm/ProductForm";
import { useProductsStore } from "stores/products/products.store";
import { ProductFormSchema } from "types/forms.types";
import { productSchema } from "utils/forms.utils";

const EditProductForm: React.FC<Props> = () => {
  const selectedProduct = useProductsStore(s => s.selectedProduct);
  const { date_release, date_revision } = selectedProduct ?? {};

  const formMethods = useForm<ProductFormSchema>({
    mode: "onChange",
    resolver: zodResolver(productSchema),
    defaultValues: {
      ...selectedProduct,
      date_release: dayjs(date_release).format("YYYY-MM-DD"),
      date_revision: dayjs(date_revision).format("YYYY-MM-DD")
    }
  });

  const defaultDatePickerValues = useMemo(
    () => getDefaultValuesForForm(selectedProduct),
    [selectedProduct]
  );

  const editableValues = useMemo(() => getEditableValuesForForm(), []);

  return (
    <FormProvider {...formMethods}>
      <Text style={styles.title}>Formulario de registro</Text>
      <ProductForm
        editableValues={editableValues}
        defaultValues={defaultDatePickerValues}
        render={({ resetDatePickers }) => (
          <EditActionButtons resetDatePickers={resetDatePickers} />
        )}
      />
    </FormProvider>
  );
};

export default EditProductForm;
