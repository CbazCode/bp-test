import { FlatList, RefreshControl, View } from "react-native";

import styles from "./ProductsList.styles";
import { ProductsListProps as Props } from "./ProductsList.types";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import Error from "components/global/Error/Error";
import Loading from "components/global/Loading/Loading";
import { useGetProducts } from "services/products/products.services.hooks";
import Colors from "styles/Colors";

const errorMessage = "Ocurrió un problema, vuelve a intentarlo";

const ProductsList: React.FC<Props> = () => {
  const getProductsHook = useGetProducts();
  const { isLoading, error, products } = getProductsHook;
  const { refetchProducts, isRefetching } = getProductsHook;

  if (isLoading) return <Loading />;
  if (error) return <Error message={errorMessage} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductsListItem product={item} />}
        keyExtractor={item => item.id}
        indicatorStyle="black"
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetchProducts}
            progressViewOffset={50}
            tintColor={Colors.light.primary}
            style={styles.refreshControl}
          />
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default ProductsList;
