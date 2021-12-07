import React, { useReducer } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";
import mock from "../product/mock";
import { Product } from "../product/types";
import { SET_QUESTION, SET_ACTIVEPRODUCT, SET_CART } from "./types";
interface IProps {
  children: JSX.Element | JSX.Element[] | Product;
}
const ProductState = ({ children }: IProps) => {
  const initialState = {
    product: mock.product,
    productActive: null,
    questions: [],
    cart: 0,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  //funciones
  const setQuestions = (question: String) => {
    dispatch({
      type: SET_QUESTION,
      payload: question,
    });
  };
  const setProductActive = (product: Product) => {
    dispatch({
      type: SET_ACTIVEPRODUCT,
      payload: product,
    });
  };
  const setCart = () => {
    dispatch({
      type: SET_CART,
    });
  };
  //return
  return (
    <ProductContext.Provider
      value={{
        product: state.product,
        productActive: state.productActive,
        questions: state.questions,
        cart: state.cart,
        setQuestions,
        setProductActive,
        setCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductState;
