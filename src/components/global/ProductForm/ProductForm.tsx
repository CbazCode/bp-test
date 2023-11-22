import React from "react";
import { useFormContext } from "react-hook-form";
import { View } from "react-native";

import styles from "./ProductForm.styles";
import { ProductFormProps as Props } from "./ProductForm.types";
import Input from "../Input/Input";
import Colors from "styles/Colors";
import { Product } from "types/products.types";

const ProductForm: React.FC<Props> = props => {
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
      />
      <Input
        {...register("name")}
        label="Nombre"
        placeholder="Tarjetas de crédito"
        placeholderTextColor={Colors.light.darkGray}
        error={errors.name?.message}
      />
      <Input
        {...register("description")}
        label="Descripción"
        placeholder="Tarjeta de consumo bajo la modalidad de crédito"
        placeholderTextColor={Colors.light.darkGray}
        error={errors.description?.message}
      />
      <Input
        {...register("logo")}
        label="Logo"
        placeholder="https://www.logo.png"
        placeholderTextColor={Colors.light.darkGray}
        error={errors.logo?.message}
      />
      <Input
        {...register("date_release")}
        label="Fecha Liberación"
        placeholder="12-01-24"
        placeholderTextColor={Colors.light.darkGray}
        error={errors.date_release?.message}
      />
      <Input
        {...register("date_revision")}
        label="Fecha Revisión"
        placeholder="12-01-24"
        placeholderTextColor={Colors.light.darkGray}
        error={errors.date_revision?.message}
      />
    </View>
  );
};

ProductForm.defaultProps = {};

export default ProductForm;
