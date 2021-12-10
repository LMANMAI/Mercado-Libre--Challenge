import React, { useReducer } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";
import mock from "../product/mock";
import { Product } from "../product/types";
import {
  SET_QUESTION,
  SET_ACTIVEPRODUCT,
  SET_BASKET,
  REMOVE_PRODUCT,
  BUY_IT,
} from "./types";
interface IProps {
  children: JSX.Element | JSX.Element[] | Product;
}
const ProductState = ({ children }: IProps) => {
  const initialState = {
    product: mock.product,
    productActive: null,
    questions: [],
    basket: [],
    basketvalue: 0,
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
  const setbasket = (product: Product) => {
    dispatch({
      type: SET_BASKET,
      payload: product,
    });
  };
  const removeProduct = (producto: Product) => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: producto,
    });
  };
  const buyIT = () => {
    dispatch({
      type: BUY_IT,
    });
  };
  return (
    <ProductContext.Provider
      value={{
        product: state.product,
        productActive: state.productActive,
        questions: state.questions,
        basket: state.basket,
        basketvalue: state.basketvalue,
        setQuestions,
        setProductActive,
        setbasket,
        removeProduct,
        buyIT,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductState;
