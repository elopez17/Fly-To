import { RECEIVE_ORIGIN } from "../actions/flights_actions";

const originReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ORIGIN:
      return action.origin;
    default:
      return state;
  }
};

export default originReducer;