import { SET_QUESTION } from "./types";
export default (state: any, action: any) => {
  switch (action.type) {
    case SET_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};
