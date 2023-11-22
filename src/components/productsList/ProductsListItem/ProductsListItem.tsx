import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./ProductsListItem.styles";
import { ProductsListItemProps as Props } from "./ProductsListItem.types";

import ChevronSVG from "assets/icons/chevron.svg";

const ProductsListItem: React.FC<Props> = props => {
  const { product } = props;
  const { id, name } = product;
  return (
    <Link
      href={
        {
          pathname: "/product/[id]",
          params: { id }
        } as never
      }
      asChild
    >
      <TouchableOpacity style={styles.container}>
        <View style={styles.textWrapper}>
          <Text>{name}</Text>
          <Text style={styles.id}>ID: {id}</Text>
        </View>
        <ChevronSVG />
      </TouchableOpacity>
    </Link>
  );
};

export default ProductsListItem;
