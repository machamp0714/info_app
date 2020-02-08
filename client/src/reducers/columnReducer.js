const initState = {
  isLoading: true,
  columns: [],
  errors: []
};

const columnReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_COLUMNS_LOADING":
      return state;
    case "GET_COLUMNS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        columns: action.payload
      };
    case "GET_COLUMNS_ERROR":
      return {
        ...state,
        isLoading: false,
        errors: [action.payload]
      };
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
        columns: state.columns.map(column =>
          column.id === action.meta ? action.payload : column
        )
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
