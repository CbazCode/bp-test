import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { View } from "react-native";

import styles from "./ProductForm.styles";
import { ProductFormProps as Props } from "./ProductForm.types";
import Input from "../Input/Input";
import InputDatePicker from "../InputDatePicker/InputDatePicker";
import { InputDatePickerMethods } from "../InputDatePicker/InputDatePicker.types";
import Colors from "styles/Colors";
import { ProductFormSchema } from "types/forms.types";

const ProductForm: React.FC<Props> = props => {
  const { editable = true } = props;
  const { defaultValues, editableValues } = props;
  const dateReleaseRef = useRef<InputDatePickerMethods>(null);
  const dateRevisionRef = useRef<InputDatePickerMethods>(null);
  const { register, formState } = useFormContext<ProductFormSchema>();
  const { errors } = formState;

  const resetDatePickers = () => {
    dateReleaseRef.current?.reset();
    dateRevisionRef.current?.reset();
  };

  return (
    <>
      <View style={styles.container}>
        <Input
          {...register("id")}
          label="ID"
          placeholder="06632"
          placeholderTextColor={Colors.light.darkGray}
          error={errors.id?.message}
          editable={editable && (editableValues?.id ?? true)}
          defaultValue={defaultValues?.id}
        />
        <Input
          {...register("name")}
          label="Nombre"
          placeholder="Tarjetas de crédito"
          placeholderTextColor={Colors.light.darkGray}
          error={errors.name?.message}
          editable={editable && (editableValues?.name ?? true)}
          defaultValue={defaultValues?.name}
        />
        <Input
          {...register("description")}
          label="Descripción"
          placeholder="Tarjeta de consumo bajo la modalidad de crédito"
          placeholderTextColor={Colors.light.darkGray}
          error={errors.description?.message}
          editable={editable && (editableValues?.description ?? true)}
          defaultValue={defaultValues?.description}
        />
        <Input
          {...register("logo")}
          label="Logo"
          placeholder="https://www.logo.png"
          placeholderTextColor={Colors.light.darkGray}
          error={errors.logo?.message}
          editable={editable && (editableValues?.logo ?? true)}
          defaultValue={defaultValues?.logo}
        />
        <InputDatePicker
          {...register("date_release")}
          ref={dateReleaseRef}
          label="Fecha Liberación"
          placeholder="24-01-2024"
          placeholderTextColor={Colors.light.darkGray}
          error={errors.date_release?.message}
          editable={editable && (editableValues?.date_release ?? true)}
          defaultValue={defaultValues?.date_release}
        />
        <InputDatePicker
          {...register("date_revision")}
          ref={dateRevisionRef}
          label="Fecha Revisión"
          placeholder="24-01-2025"
          placeholderTextColor={Colors.light.darkGray}
          error={errors.date_revision?.message}
          editable={editable && (editableValues?.date_revision ?? true)}
          defaultValue={defaultValues?.date_revision}
        />
      </View>
      {props.render?.({ resetDatePickers })}
    </>
  );
};

export default ProductForm;
