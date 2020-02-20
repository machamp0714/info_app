const initState = {
  url: "",
  stocks: []
};

const stockReducer = (state = initState, action) => {
  switch (action) {
    case "GET_URL_SUCCESS":
      return {
        ...state,
        url: action.payload
      };
    case "GET_URL_ERROR":
      return state;
    default:
      return state;
  }
};

export default stockReducer;
