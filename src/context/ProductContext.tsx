import React, { createContext } from "react";
interface IProductContext {
  product: Product;
  productActive: Product;
  cart: 0;
  questions: [string];
  setQuestions: Function;
  setProductActive: Function;
  setCart: Function;
}
import { Product } from "../product/types";

import mock from "../product/mock";
export const ProductContext = createContext<IProductContext>({
  product: mock.product,
  productActive: mock.product,
  cart: 0,
  questions: [""],
  setQuestions: () => {},
  setProductActive: () => {},
  setCart: () => {},
});
export default ProductContext;
