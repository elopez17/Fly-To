const resultsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case false:
      break;
    default:
      return state;
  }
};

export default resultsReducer;
