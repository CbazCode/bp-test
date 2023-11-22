import React from "react";
import { View } from "react-native";

import styles from "./ActionButtons.styles";
import { ActionButtonsProps as Props } from "./ActionButtons.types";
import Button from "../Button/Button";

const ActionButtons: React.FC<Props> = props => {
  const { textAbove, textBelow, styleAbove, styleBelow } = props;
  const { textStyleAbove, textStyleBelow, onPressAbove, onPressBelow } = props;
  const { loadingAbove, loadingBelow, disabledAbove, disabledBelow } = props;
  return (
    <View style={styles.container}>
      <Button
        text={textAbove}
        style={styleAbove}
        textStyle={textStyleAbove}
        onPress={onPressAbove}
        loading={loadingAbove}
        disabled={disabledAbove}
      />
      <View style={styles.separator} />
      <Button
        text={textBelow}
        style={styleBelow}
        textStyle={textStyleBelow}
        onPress={onPressBelow}
        loading={loadingBelow}
        disabled={disabledBelow}
      />
    </View>
  );
};

ActionButtons.defaultProps = {};

export default ActionButtons;
