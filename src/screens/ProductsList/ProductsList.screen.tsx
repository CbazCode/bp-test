import styles from "./ProductsList.screen.styles";
import { ProductsListProps as Props } from "./ProductsList.screen.types";
import AddProductButton from "components/productsList/AddProductButton/AddProductButton";
import ProductsList from "components/productsList/ProductsList/ProductsList";
import ProductsSearcher from "components/productsList/ProductsSearcher/ProductsSearcher";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const ProductsListScreen: React.FC<Props> = () => {
  return (
    <ScreenTemplate style={styles.container}>
      <ProductsList
        render={(filteredProduct, setFilteredProduct) => (
          <ProductsSearcher
            text={filteredProduct}
            setText={setFilteredProduct}
          />
        )}
      />
      <AddProductButton />
    </ScreenTemplate>
  );
};

export default ProductsListScreen;
