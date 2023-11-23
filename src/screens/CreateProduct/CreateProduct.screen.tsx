import styles from "./CreateProduct.screen.styles";
import { CreateProductProps as Props } from "./CreateProduct.screen.types";
import CreateProductForm from "components/createProduct/CreateProductForm/CreateProductForm";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const CreateProductScreen: React.FC<Props> = () => {
  return (
    <ScreenTemplate scrollable style={styles.container}>
      <CreateProductForm />
    </ScreenTemplate>
  );
};

export default CreateProductScreen;
