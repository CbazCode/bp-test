import { View, Text, TouchableOpacity } from "react-native";
import { Modal } from "react-native";

import styles from "./ConfirmActionModal.styles";
import { ConfirmActionModalProps as Props } from "./ConfirmActionModal.types";
import ActionButtons from "../ActionButtons/ActionButtons";
import Error from "../Error/Error";

import XSVG from "assets/icons/x.svg";

const ConfirmActionModal: React.FC<Props> = props => {
  const { onConfirm, onCancel, title = "?", visible = false } = props;
  const { loadingAbove, loadingBelow, disabledAbove, disabledBelow } = props;
  const { isError } = props;
  return (
    <Modal
      {...props}
      presentationStyle="overFullScreen"
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.background} onTouchStart={onCancel} />
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onCancel} hitSlop={styles.hitSlop}>
            <XSVG />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{`¿Estás seguro ${title}`}</Text>
          </View>
          {isError ? (
            <Error message="Ocurrió un error, vuelve a intentarlo" />
          ) : null}
          <ActionButtons
            style={styles.buttonsContainer}
            textAbove="Confirmar"
            textBelow="Cancelar"
            styleAbove={styles.confirmButton}
            styleBelow={styles.cancelButton}
            textStyleAbove={styles.buttonText}
            textStyleBelow={styles.buttonText}
            onPressAbove={onConfirm}
            onPressBelow={onCancel}
            loadingAbove={loadingAbove}
            loadingBelow={loadingBelow}
            disabledAbove={disabledAbove}
            disabledBelow={disabledBelow}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmActionModal;
