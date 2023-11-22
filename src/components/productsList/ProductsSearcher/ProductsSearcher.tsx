import React, { useState } from "react";
import { TextInput } from "react-native";

import styles from "./ProductsSearcher.styles";
import { ProductsSearcherProps as Props } from "./ProductsSearcher.types";
import { View } from "components/Themed";

const ProductsSearcher: React.FC<Props> = props => {
  const [text, setText] = useState("");
  const onChangeText = (text: string) => setText(text);

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        value={text}
        onChangeText={onChangeText}
        placeholder="Search..."
        style={styles.input}
      />
    </View>
  );
};

ProductsSearcher.defaultProps = {};

export default ProductsSearcher;
