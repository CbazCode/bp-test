import { router } from "expo-router";
import { useFormContext } from "react-hook-form";

import { getEditPayload } from "./EditActionButtons.helpers";
import styles from "./EditActionButtons.styles";
import { EditActionButtonsProps as Props } from "./EditActionButtons.types";
import ActionButtons from "components/global/ActionButtons/ActionButtons";
import Error from "components/global/Error/Error";
import { toast } from "components/global/Toast/Toast.helpers";
import { CONSTANTS } from "config/constants";
import { usePutFinancialProduct } from "services";
import { ProductFormSchema } from "types/forms.types";

const { APP } = CONSTANTS;
const { ERROR_MESSAGE } = APP;

const message = "Producto actualizado correctamente";

const EditActionButtons: React.FC<Props> = props => {
  const { resetDatePickers } = props;
  const formContext = useFormContext<ProductFormSchema>();
  const { handleSubmit, resetField, formState } = formContext;
  const { isDirty } = formState;
  const putProductHook = usePutFinancialProduct();
  const { back } = router;
  const { mutateAsync: putProduct } = putProductHook;
  const { isError, isPending } = putProductHook;

  const onSubmit = async (values: ProductFormSchema) => {
    try {
      if (!isDirty) return back();
      const product = getEditPayload(values);
      await putProduct({ product });
      toast.success({ message });
      back();
    } catch (e) {
      toast.danger({ message: e.message ?? ERROR_MESSAGE });
    }
  };
  const onUpdateProduct = async () => handleSubmit(onSubmit)();
  const resetInput = (name: keyof ProductFormSchema) => {
    resetField(name, { defaultValue: "" });
  };
  const onResetForm = () => {
    resetInput("name");
    resetInput("description");
    resetInput("logo");
    resetInput("date_release");
    resetInput("date_revision");
    resetDatePickers();
  };

  return (
    <>
      {isError ? <Error message={ERROR_MESSAGE} /> : null}
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
