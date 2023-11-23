import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Text } from "react-native";

import styles from "./CreateProductForm.styles";
import { CreateProductFormProps as Props } from "./CreateProductForm.types";
import CreateActionButtons from "../CreateActionButtons/CreateActionButtons";
import ProductForm from "components/global/ProductForm/ProductForm";
import { ProductFormSchema } from "types/forms.types";
import { productSchema } from "utils/forms.utils";

const CreateProductForm: React.FC<Props> = () => {
  const formMethods = useForm<ProductFormSchema>({
    mode: "onChange",
    resolver: zodResolver(productSchema)
  });

  return (
    <FormProvider {...formMethods}>
      <Text style={styles.title}>Formulario de registro</Text>
      <ProductForm
        render={({ resetDatePickers }) => (
          <CreateActionButtons resetDatePickers={resetDatePickers} />
        )}
      />
    </FormProvider>
  );
};

export default CreateProductForm;
