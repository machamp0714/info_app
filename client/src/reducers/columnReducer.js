const initState = {
  columns: [],
  errors: []
};

const columnReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_COLUMNS_SUCCESS":
      return {
        columns: action.payload
      };
    case "GET_COLUMNS_ERROR":
      return state;
    case "CREATE_SUCCESS":
      return {
        ...state,
        columns: [...state.columns, action.payload]
      };
    case "CREATE_ERROR":
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default columnReducer;
