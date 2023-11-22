import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { FormProvider, useForm } from "react-hook-form";
import { Text } from "react-native";

import styles from "./EditProductForm.styles";
import { EditProductFormProps as Props } from "./EditProductForm.types";
import EditActionButtons from "../EditActionButtons/EditActionButtons";
import ProductForm from "components/global/ProductForm/ProductForm";
import { useProductsStore } from "stores/products/products.store";
import { productSchema } from "utils/forms.utils";

const EditProductForm: React.FC<Props> = () => {
  const selectedProduct = useProductsStore(s => s.selectedProduct);
  const { date_release, date_revision } = selectedProduct ?? {};
  const formMethods = useForm({
    mode: "onChange",
    resolver: zodResolver(productSchema),
    defaultValues: {
      ...selectedProduct,
      date_release: dayjs(date_release).format("YYYY-MM-DD"),
      date_revision: dayjs(date_revision).format("YYYY-MM-DD")
    }
  });

  return (
    <FormProvider {...formMethods}>
      <Text style={styles.title}>Formulario de registro</Text>
      <ProductForm editableInputId={false} />
      <EditActionButtons />
    </FormProvider>
  );
};

EditProductForm.defaultProps = {};

export default EditProductForm;
