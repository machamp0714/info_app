const initState = {
  columns: []
};

const columnReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_COLUMNS_SUCCESS":
      return {
        columns: action.payload
      };
    case "GET_COLUMNS_ERROR":
      return state;
    default:
      return state;
  }
};

export default columnReducer;
