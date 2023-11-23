import { useLocalSearchParams } from "expo-router";

import styles from "./ProductDetail.screen.styles";
import { ProductDetailProps as Props } from "./ProductDetail.screen.types";
import Error from "components/global/Error/Error";
import Loading from "components/global/Loading/Loading";
import DeleteActionModal from "components/productDetail/DeleteActionModal/DeleteActionModal";
import ProductDetail from "components/productDetail/ProductDetail/ProductDetail";
import ProductDetailActionButtons from "components/productDetail/ProductDetailActionButtons/ProductDetailActionButtons";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";
import { useGetFinancialProduct } from "services";

const ProductDetailScreen: React.FC<Props> = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: product, isFetching, isError } = useGetFinancialProduct({ id });
  const { name = "" } = product ?? {};
  if (isFetching) return <Loading />;
  if (isError) return <Error />;
  if (!product) return null;

  return (
    <ScreenTemplate style={styles.container}>
      <ProductDetail product={product} />
      <ProductDetailActionButtons
        product={product}
        render={(showModal, setShowModal) => (
          <DeleteActionModal
            id={id}
            name={name}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      />
    </ScreenTemplate>
  );
};

export default ProductDetailScreen;
