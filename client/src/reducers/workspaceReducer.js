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
    case "EDIT_WORKSPACE_SUCCESS":
      return {
        ...state,
        workspaces: state.workspaces.map(workspace =>
          workspace.id === action.meta ? action.payload : workspace
        )
      };
    case "EDIT_WORKSPACE_ERROR":
      return state;
    case "DELETE_WORKSPACE_SUCCESS":
      return {
        ...state,
        workspaces: state.workspaces.filter(
          workspace => workspace.id !== action.payload
        )
      };
    case "DELETE_WORKSPACE_ERROR":
      return {
        ...state,
        errors: [action.payload]
      };
    default:
      return state;
  }
};

export default workspaceReducer;
