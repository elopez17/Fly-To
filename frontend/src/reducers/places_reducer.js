import { RECEIVE_ALL_QUOTES } from '../actions/flights_actions';

const placesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_QUOTES:
      return action.payload.Places;
    default:
      return state;
  }
};

export default placesReducer;
