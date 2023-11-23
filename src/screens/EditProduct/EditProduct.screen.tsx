import styles from "./EditProduct.screen.styles";
import { EditProductProps as Props } from "./EditProduct.screen.types";
import EditProductForm from "components/editProduct/EditProductForm/EditProductForm";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const EditProductScreen: React.FC<Props> = () => {
  return (
    <ScreenTemplate scrollable style={styles.container}>
      <EditProductForm />
    </ScreenTemplate>
  );
};

export default EditProductScreen;
