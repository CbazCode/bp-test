import { useFormContext } from "react-hook-form";
import { View } from "react-native";

import styles from "./ProductForm.styles";
import { ProductFormProps as Props } from "./ProductForm.types";
import Input from "../Input/Input";
import Colors from "styles/Colors";
import { Product } from "types/products.types";

const ProductForm: React.FC<Props> = props => {
  const { editableInputId = true, editable = true } = props;
  const { register, formState } = useFormContext<Product>();
  const { errors } = formState;

  return (
    <View style={styles.container}>
      <Input
        {...register("id")}
        label="ID"
        placeholder="06632"
        placeholderTextColor={Colors.light.darkGray}
        error={errors.id?.message}
        editable={editable && editableInputId}
      />
      <Input
        {...register("name")}
        label="Nombre"
        placeholder="Tarjetas de crédito"
        placeholderTextColor={Colors.light.darkGray}
        error={errors.name?.message}
        editable={editable}
      />
      <Input
        {...register("description")}
        label="Descripción"
        placeholder="Tarjeta de consumo bajo la modalidad de crédito"
        placeholderTextColor={Colors.light.darkGray}
        error={errors.description?.message}
        editable={editable}
      />
      <Input
        {...register("logo")}
        label="Logo"
        placeholder="https://www.logo.png"
        placeholderTextColor={Colors.light.darkGray}
        error={errors.logo?.message}
        editable={editable}
      />
      <Input
        {...register("date_release")}
        label="Fecha Liberación"
        placeholder="2024-01-24"
        placeholderTextColor={Colors.light.darkGray}
        error={errors.date_release?.message}
        editable={editable}
      />
      <Input
        {...register("date_revision")}
        label="Fecha Revisión"
        placeholder="2024-01-24"
        placeholderTextColor={Colors.light.darkGray}
        error={errors.date_revision?.message}
        editable={editable}
      />
    </View>
  );
};

ProductForm.defaultProps = {};

export default ProductForm;
