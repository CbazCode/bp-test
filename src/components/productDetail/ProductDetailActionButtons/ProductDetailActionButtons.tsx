import { router } from "expo-router";
import React, { useState } from "react";

import styles from "./ProductDetailActionButtons.styles";
import { ProductDetailActionButtonsProps as Props } from "./ProductDetailActionButtons.types";
import ActionButtons from "components/global/ActionButtons/ActionButtons";
import { useUnMount } from "hooks/useUnMount";
import { useProductsStore } from "stores/products/products.store";

const ProductDetailActionButtons: React.FC<Props> = props => {
  const { product } = props;
  const { push } = router;
  const [showModal, setShowModal] = useState(false);
  const setSelectedProduct = useProductsStore(s => s.setSelectedProduct);
  const reset = useProductsStore(s => s.reset);

  const onEditProduct = () => {
    setSelectedProduct(product);
    push(`/edit`);
  };
  const onDeleteProduct = () => setShowModal(true);

  useUnMount(() => reset());

  return (
    <>
      <ActionButtons
        textAbove="Editar"
        textBelow="Eliminar"
        styleAbove={styles.edit}
        styleBelow={styles.delete}
        textStyleAbove={styles.textEdit}
        textStyleBelow={styles.textDelete}
        onPressAbove={onEditProduct}
        onPressBelow={onDeleteProduct}
      />
      {props.render?.(showModal, setShowModal)}
    </>
  );
};

ProductDetailActionButtons.defaultProps = {};

export default ProductDetailActionButtons;
