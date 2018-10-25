import { RECEIVE_ALL_DATA } from "../actions/flights_actions";

const quotesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_DATA:
      return action.payload;
    default:
      return state;
  }
};


export default quotesReducer;
