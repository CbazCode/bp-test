import { useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

import styles from "./CreateActionButtons.styles";
import { CreateActionButtonsProps as Props } from "./CreateActionButtons.types";
import ActionButtons from "components/global/ActionButtons/ActionButtons";
import ErrorComponent from "components/global/Error/Error";
import { verifyFinancialProductId } from "services";
import { usePostFinancialProduct } from "services";
import { Product } from "types/products.types";

const CreateActionButtons: React.FC<Props> = () => {
  const { handleSubmit, reset, setError } = useFormContext<Product>();
  const client = useQueryClient();
  const postProductHook = usePostFinancialProduct();
  const [isValidating, setIsValidating] = useState(false);
  const { back } = router;
  const { mutateAsync: postProduct } = postProductHook;
  const { isError, isPending } = postProductHook;

  const verifyProductId = async (id: string) => {
    try {
      setIsValidating(true);
      const exist = await client.fetchQuery({
        queryKey: ["verify-product", id],
        queryFn: () => verifyFinancialProductId({ id }),
        staleTime: 0
      });
      const message = "ID inválido, el producto ya existe";
      if (exist) setError("id", { message });
      return exist;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setIsValidating(false);
    }
  };

  const onResetForm = () => reset();
  const onSubmit = async (product: Product) => {
    try {
      const { id } = product;
      const exists = await verifyProductId(id);
      if (exists) return;
      await postProduct({ product });
      back();
    } catch (error) {
      // TODO: ADD TOAST
      console.error(error);
    }
  };
  const onCreateProduct = async () => handleSubmit(onSubmit)();

  return (
    <>
      {isError ? (
        <ErrorComponent message="Ocurrió un error, vuelve a intentarlo" />
      ) : null}
      <ActionButtons
        textAbove="Enviar"
        textBelow="Reiniciar"
        styleAbove={styles.send}
        styleBelow={styles.reset}
        textStyleAbove={styles.text}
        textStyleBelow={styles.text}
        onPressAbove={onCreateProduct}
        onPressBelow={onResetForm}
        loadingAbove={isPending || isValidating}
        disabledBelow={isPending || isValidating}
      />
    </>
  );
};

export default CreateActionButtons;
