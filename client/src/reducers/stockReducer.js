const initState = {
  url: "",
  isAsync: "",
  isLoading: false,
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
    case "GET_STOCKS_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_STOCKS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        stocks: action.payload
      };
    case "GET_STOCKS_ERROR":
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default stockReducer;
