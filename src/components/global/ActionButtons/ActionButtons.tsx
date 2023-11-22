import { View } from "react-native";

import styles from "./ActionButtons.styles";
import { ActionButtonsProps as Props } from "./ActionButtons.types";
import Button from "../Button/Button";

const ActionButtons: React.FC<Props> = props => {
  const { textAbove, textBelow, styleAbove, styleBelow, style } = props;
  const { textStyleAbove, textStyleBelow, onPressAbove, onPressBelow } = props;
  const { loadingAbove, loadingBelow, disabledAbove, disabledBelow } = props;

  return (
    <View style={[styles.container, style]}>
      <Button
        testID="action-button"
        text={textAbove}
        style={styleAbove}
        textStyle={textStyleAbove}
        onPress={onPressAbove}
        loading={loadingAbove}
        disabled={disabledAbove}
      />
      <View style={styles.separator} />
      <Button
        testID="action-button"
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

export default ActionButtons;
