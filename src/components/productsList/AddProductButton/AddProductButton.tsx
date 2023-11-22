import { router } from "expo-router";
import React from "react";

import styles from "./AddProductButton.styles";
import { AddProductButtonProps as Props } from "./AddProductButton.types";
import Button from "components/global/Button/Button";

const AddProductButton: React.FC<Props> = () => {
  const { push } = router;

  return (
    <Button
      text="Agregar"
      style={styles.button}
      onPress={() => push("/create")}
    />
  );
};
export default AddProductButton;
