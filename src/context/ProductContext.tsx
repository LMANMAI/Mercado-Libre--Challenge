import React, { createContext } from "react";
interface IProductContext {
  product: Product;
  questions: [string];
  setQuestions: Function;
}
import { Product } from "../product/types";

import mock from "../product/mock";
export const ProductContext = createContext<IProductContext>({
  product: mock.product,
  questions: [""],
  setQuestions: () => {},
});
export default ProductContext;
