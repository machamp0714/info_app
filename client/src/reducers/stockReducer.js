const initState = {
  url: "",
  stocks: []
};

const stockReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_URL_ERROR":
      return state;
    default:
      return state;
  }
};

export default stockReducer;
