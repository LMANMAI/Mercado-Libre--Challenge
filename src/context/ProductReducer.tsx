import { SET_QUESTION, SET_ACTIVEPRODUCT, SET_BASKET } from "./types";
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
      };
    default:
      return {
        ...state,
      };
  }
};
