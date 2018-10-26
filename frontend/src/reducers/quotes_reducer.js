import { RECEIVE_ALL_QUOTES } from "../actions/flights_actions";

const quotesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_QUOTES:
      return action.payload.Quotes;
    default:
      return state;
  }
};


export default quotesReducer;
