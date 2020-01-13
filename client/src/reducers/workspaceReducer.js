const initState = {
  isLoading: true,
  workspaces: []
};

const workspaceReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_LOADING":
      return {
        isLoading: true,
        workspaces: state.workspaces
      };
    case "GET_SUCCESS":
      return {
        isLoading: false,
        workspaces: action.payload
      };
    case "GET_ERROR":
      return state;
    case "CREATE_SUCCESS":
      return {
        isLoading: false,
        workspaces: [...state.workspaces, action.payload]
      };
    case "CREATE_ERROR":
      return {
        isLoading: false,
        workspaces: []
      };
    default:
      return state;
  }
};

export default workspaceReducer;
