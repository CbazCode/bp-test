import { router } from "expo-router";

import styles from "./DeleteActionModal.styles";
import { DeleteActionModalProps as Props } from "./DeleteActionModal.types";
import ConfirmActionModal from "components/global/ConfirmActionModal/ConfirmActionModal";
import { useDeleteFinancialProduct } from "services";

const DeleteActionModal: React.FC<Props> = props => {
  const { id, name, showModal, setShowModal } = props;
  const deleteProductHook = useDeleteFinancialProduct();
  const { back } = router;
  const { mutateAsync: deleteProduct, isPending, isError } = deleteProductHook;

  const onDelete = async () => {
    try {
      await deleteProduct({ id });
      setShowModal(false);
      back();
    } catch (error) {
      // TODO: add toast
      console.error(error);
    }
  };
  const onCancel = () => setShowModal(false);
  return (
    <ConfirmActionModal
      style={styles.container}
      visible={showModal}
      title={`de eliminar el producto ${name}?`}
      onConfirm={onDelete}
      onCancel={onCancel}
      loadingAbove={isPending}
      disabledAbove={isPending}
      disabledBelow={isPending}
      isError={isError}
    />
  );
};

export default DeleteActionModal;
