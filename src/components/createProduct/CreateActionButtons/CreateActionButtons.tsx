import React from "react";
import { useFormContext } from "react-hook-form";

import styles from "./CreateActionButtons.styles";
import { CreateActionButtonsProps as Props } from "./CreateActionButtons.types";
import ActionButtons from "components/global/ActionButtons/ActionButtons";
import Error from "components/global/Error/Error";
import { usePostFinancialProduct } from "services/products/products.services.hooks";
import { Product } from "types/products.types";

const CreateActionButtons: React.FC<Props> = () => {
  const { handleSubmit, reset } = useFormContext<Product>();
  const { isLoading, postProduct, error } = usePostFinancialProduct();

  const onSubmit = async (product: Product) => await postProduct(product);
  const onCreateProduct = async () => handleSubmit(onSubmit)();
  const onResetForm = () => reset();

  return (
    <>
      {error ? <Error message="Ocurrió un error, vuelve a intentarlo" /> : null}
      <ActionButtons
        textAbove="Enviar"
        textBelow="Reiniciar"
        styleAbove={styles.send}
        styleBelow={styles.reset}
        textStyleAbove={styles.text}
        textStyleBelow={styles.text}
        onPressAbove={onCreateProduct}
        onPressBelow={onResetForm}
        loadingAbove={isLoading}
        disabledBelow={isLoading}
      />
    </>
  );
};

CreateActionButtons.defaultProps = {};

export default CreateActionButtons;
