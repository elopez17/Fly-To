// import some action from actions/somefile

const loadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case false:
      
      break;
  
    default:
      return state;
  }
};

export default loadingReducer;