import { SET_QUESTION, SET_ACTIVEPRODUCT, SET_CART } from "./types";
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
    case SET_CART:
      return {
        ...state,
        cart: state.cart + 1,
      };
    default:
      return {
        ...state,
      };
  }
};
