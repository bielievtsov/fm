let initialState = {
  isLoggedIn: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN": {
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
