const initState = {
  isLoading: true,
  data: {},
  url: ""
};

const ogpReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_OGP_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_OGP_SUCCESS":
      return {
        isLoading: false,
        data: action.payload.data,
        url: action.payload.url
      };
    case "GET_OGP_ERROR":
      return {
        isLoading: false,
        data: {},
        url: action.payload.url
      };
    default:
      return state;
  }
};

export default ogpReducer;
