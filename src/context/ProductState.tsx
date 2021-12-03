import React, { useReducer } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";
import mock from "../product/mock";
import { Product } from "../product/types";
import { SET_QUESTION } from "./types";
interface IProps {
  children: JSX.Element | JSX.Element[] | Product;
}
const ProductState = ({ children }: IProps) => {
  const initialState = {
    product: mock.product,
    questions: [],
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  //funciones
  const setQuestions = (comment: String) => {
    dispatch({
      type: SET_QUESTION,
      payload: comment,
    });
  };

  //return
  return (
    <ProductContext.Provider
      value={{
        product: state.product,
        questions: state.questions,
        setQuestions,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductState;
