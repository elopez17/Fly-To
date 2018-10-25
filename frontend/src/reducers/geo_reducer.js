import { RECEIVE_ALL_GEO } from "../actions/flights_actions";

const geoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_GEO:
      return action.payload;
    default:
      return state;
  }
};

export default geoReducer;
