const initState = {
  url: "",
  isAsync: "",
  stocks: []
};

const stockReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_URL_ERROR":
      return state;
    case "CHECK_ASYNC":
      return {
        ...state,
        isAsync: action.payload
      };
    case "CHECK_ASYNC_ERROR":
      return state;
    default:
      return state;
  }
};

export default stockReducer;
