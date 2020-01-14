const initState = {
  isLoading: true,
  workspaces: [],
  errors: []
};

const workspaceReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_LOADING":
      return {
        isLoading: true,
        workspaces: state.workspaces,
        errors: []
      };
    case "GET_SUCCESS":
      return {
        isLoading: false,
        workspaces: action.payload,
        errors: []
      };
    case "GET_ERROR":
      return state;
    case "CREATE_SUCCESS":
      return {
        isLoading: false,
        workspaces: [...state.workspaces, action.payload],
        errors: []
      };
    case "CREATE_ERROR":
      return {
        isLoading: false,
        workspaces: [...state.workspaces],
        errors: action.payload
      };
    default:
      return state;
  }
};

export default workspaceReducer;
