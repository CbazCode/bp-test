import React from "react";

import { CreateProductProps as Props } from "./CreateProduct.screen.types";
import CreateProductForm from "components/createProduct/CreateProductForm/CreateProductForm";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const CreateProduct: React.FC<Props> = props => {
  return (
    <ScreenTemplate scrollable>
      <CreateProductForm />
    </ScreenTemplate>
  );
};

CreateProduct.defaultProps = {};

export default CreateProduct;
