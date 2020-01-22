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
    case "CREATE_COLUMN_SUCCESS":
      return {
        ...state,
        columns: [...state.columns, action.payload]
      };
    case "CREATE_COLUMN_ERROR":
      return {
        ...state,
        errors: action.payload
      };
    case "EDIT_COLUMN_SUCCESS":
      return {
        ...state,
        columns: state.columns
      };
    case "EDIT_COLUMN_ERROR":
      return {
        ...state,
        errors: [action.payload]
      };
    case "DELETE_COLUMN_SUCCESS":
      return {
        ...state,
        columns: state.columns.filter(column => column.id !== action.payload)
      };
    case "DELETE_COLUMN_ERROR":
      return {
        ...state,
        errors: [action.payload]
      };
    default:
      return state;
  }
};

export default columnReducer;
