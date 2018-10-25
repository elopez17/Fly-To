import { IS_LOADING, IS_DONE_LOADING } from '../actions/loading_actions';

const loadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case IS_LOADING:
      return action.payload;
    case IS_DONE_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;