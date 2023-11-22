import { router } from "expo-router";
import { useFormContext } from "react-hook-form";

import styles from "./EditActionButtons.styles";
import { EditActionButtonsProps as Props } from "./EditActionButtons.types";
import ActionButtons from "components/global/ActionButtons/ActionButtons";
import Error from "components/global/Error/Error";
import { usePutFinancialProduct } from "services";
import { Product } from "types/products.types";

const EditActionButtons: React.FC<Props> = () => {
  const { handleSubmit, resetField, formState } = useFormContext<Product>();
  const { isDirty } = formState;
  const putProductHook = usePutFinancialProduct();
  const { back } = router;
  const { mutateAsync: putProduct } = putProductHook;
  const { isError, isPending } = putProductHook;

  const onSubmit = async (product: Product) => {
    try {
      if (!isDirty) return back();
      await putProduct({ product });
      back();
    } catch (error) {
      // TODO: ADD TOAST
      console.error(error);
    }
  };
  const onUpdateProduct = async () => handleSubmit(onSubmit)();
  const resetInput = (name: keyof Product) => {
    resetField(name, { defaultValue: "" });
  };
  const onResetForm = () => {
    resetInput("name");
    resetInput("description");
    resetInput("logo");
    resetInput("date_release");
    resetInput("date_revision");
  };

  return (
    <>
      {isError ? (
        <Error message="Ocurrió un error, vuelve a intentarlo" />
      ) : null}
      <ActionButtons
        textAbove="Actualizar"
        textBelow="Reiniciar"
        styleAbove={styles.update}
        styleBelow={styles.reset}
        textStyleAbove={styles.text}
        textStyleBelow={styles.text}
        onPressAbove={onUpdateProduct}
        onPressBelow={onResetForm}
        loadingAbove={isPending}
        disabledBelow={isPending}
      />
    </>
  );
};

export default EditActionButtons;
