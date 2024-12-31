import { INCREMENT, DECREMENT, REINISILASER } from "./Actions";

const initialState = {
  cte: 0
}


export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        cte: state.cte + 1,
      };
    case DECREMENT:
      return {
        ...state,
        cte: state.cte - 1,
      };
    case REINISILASER:
      return {
        ...state,
        cte: 0,
      };
    default:
      return state;
  }
};
