import { INCREMENT, DECREMENT, RESET } from "../actions/counterActions";
import { initialState } from "../store/store";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.amount };
    case DECREMENT:
      return { count: state.count - action.amount };
    case RESET:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
