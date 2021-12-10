import { Product } from "../product/types";
import {
  SET_QUESTION,
  SET_ACTIVEPRODUCT,
  SET_BASKET,
  REMOVE_PRODUCT,
  BUY_IT,
} from "./types";
export default (state: any, action: any) => {
  switch (action.type) {
    case SET_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    case SET_ACTIVEPRODUCT:
      return {
        ...state,
        productActive: action.payload,
      };
    case SET_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
        basketvalue: state.basketvalue + action.payload.price,
      };
    case REMOVE_PRODUCT:
      const index = state.basket.findIndex(
        (basketItem: Product) => basketItem._id === action.payload._id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
        state.basket = newBasket;
        state.basketvalue = state.basketvalue - action.payload.price;
      } else {
        console.warn(
          `No sé pudo remover el producto: ${action.payload._id} no  esta en el carrito`
        );
      }
      return {
        ...state,
        basket: newBasket,
        basketvalue: state.basketvalue - action.payload?.price,
      };
    case BUY_IT:
      return {
        ...state,
        basket: [],
      };
    default:
      return {
        ...state,
      };
  }
};
