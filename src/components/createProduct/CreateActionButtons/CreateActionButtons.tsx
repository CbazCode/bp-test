import { useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { getCreatePayload } from "./CreateActionButtons.helpers";
import styles from "./CreateActionButtons.styles";
import { CreateActionButtonsProps as Props } from "./CreateActionButtons.types";
import ActionButtons from "components/global/ActionButtons/ActionButtons";
import ErrorComponent from "components/global/Error/Error";
import { toast } from "components/global/Toast/Toast.helpers";
import { CONSTANTS } from "config/constants";
import { verifyFinancialProductId } from "services";
import { usePostFinancialProduct } from "services";
import { ProductFormSchema } from "types/forms.types";

const { APP } = CONSTANTS;
const { ERROR_MESSAGE } = APP;

const message = "Producto creado correctamente";

const CreateActionButtons: React.FC<Props> = props => {
  const { resetDatePickers } = props;
  const { handleSubmit, reset, setError } = useFormContext<ProductFormSchema>();
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

  const onResetForm = () => {
    reset();
    resetDatePickers();
  };

  const onSubmit = async (values: ProductFormSchema) => {
    try {
      const { id } = values;
      const exists = await verifyProductId(id);
      if (exists) return;
      const product = getCreatePayload(values);
      await postProduct({ product });
      toast.success({
        message
      });
      back();
    } catch (e) {
      toast.danger({ message: e.message ?? ERROR_MESSAGE });
    }
  };
  const onCreateProduct = async () => handleSubmit(onSubmit)();

  return (
    <>
      {isError ? <ErrorComponent message={ERROR_MESSAGE} /> : null}
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
