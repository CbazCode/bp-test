import { useMemo, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";

import styles from "./ProductsList.styles";
import { ProductsListProps as Props } from "./ProductsList.types";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import Error from "components/global/Error/Error";
import Loading from "components/global/Loading/Loading";
import { useGetFinancialProducts } from "services";
import Colors from "styles/Colors";

const errorMessage = "Ocurrió un problema, vuelve a intentarlo";

const ProductsList: React.FC<Props> = props => {
  const getProductsHook = useGetFinancialProducts();
  const { isFetching, isError, data: products } = getProductsHook;
  const { refetch, isRefetching } = getProductsHook;
  const [filterProduct, setFilterProduct] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return !!products &&
      typeof filterProduct === "string" &&
      filterProduct.length > 0
      ? products.filter(product =>
          product.name.toLowerCase().includes(filterProduct.toLowerCase())
        )
      : products;
  }, [filterProduct, products]);

  if (isFetching) return <Loading />;
  if (isError) return <Error message={errorMessage} />;

  return (
    <>
      {props.render(filterProduct, setFilterProduct)}
      <View style={styles.container}>
        <FlatList
          data={filteredProducts}
          renderItem={({ item }) => <ProductsListItem product={item} />}
          keyExtractor={item => item.id}
          indicatorStyle="black"
          refreshControl={
            <RefreshControl
              refreshing={isRefetching}
              onRefresh={refetch}
              progressViewOffset={50}
              tintColor={Colors.light.primary}
              style={styles.refreshControl}
            />
          }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.contentContainer}
          ListEmptyComponent={() => (
            <Error message="No hay productos" style={styles.notFound} />
          )}
        />
      </View>
    </>
  );
};

export default ProductsList;
