import { memo } from "react";
import { TextInput, View } from "react-native";

import styles from "./ProductsSearcher.styles";
import { ProductsSearcherProps as Props } from "./ProductsSearcher.types";
import Colors from "styles/Colors";

const ProductsSearcher: React.FC<Props> = props => {
  const { text, setText } = props;
  const onChangeText = (text: string) => setText(text);

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        value={text ?? ""}
        onChangeText={onChangeText}
        placeholder="Buscar..."
        placeholderTextColor={Colors.light.darkGray}
        style={styles.input}
      />
    </View>
  );
};

export default memo(ProductsSearcher);
