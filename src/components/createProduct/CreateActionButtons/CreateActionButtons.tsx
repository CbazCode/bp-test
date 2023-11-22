import { router } from "expo-router";
import { useFormContext } from "react-hook-form";

import styles from "./CreateActionButtons.styles";
import { CreateActionButtonsProps as Props } from "./CreateActionButtons.types";
import ActionButtons from "components/global/ActionButtons/ActionButtons";
import Error from "components/global/Error/Error";
import { usePostFinancialProduct } from "services/products/products.services.hooks";
import { Product } from "types/products.types";

const CreateActionButtons: React.FC<Props> = () => {
  const { handleSubmit, reset } = useFormContext<Product>();
  const postProductHook = usePostFinancialProduct();
  const { back } = router;
  const { mutateAsync: postProduct } = postProductHook;
  const { isError, isPending } = postProductHook;

  const onResetForm = () => reset();
  const onSubmit = async (product: Product) => {
    try {
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
        <Error message="Ocurrió un error, vuelve a intentarlo" />
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
        loadingAbove={isPending}
        disabledBelow={isPending}
      />
    </>
  );
};

CreateActionButtons.defaultProps = {};

export default CreateActionButtons;
