import React, { createContext, useState } from "react";
import { Product } from "../product/types";
import mock from "../product/mock";
interface ProductContext {
  product: Product;
}
export const ProductContext = createContext<null | ProductContext>(null);

export const ProductProvider: React.FC<Product> = (props) => {
  const [product, setProduct] = useState(mock.product);

  return (
    <ProductContext.Provider
      value={{
        product,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
