const initState = {
  workspaces: []
};

const workspaceReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_SUCCESS":
      return {
        workspaces: action.payload
      };
    case "GET_ERROR":
      return state;
    case "CREATE_SUCCESS":
      return {
        workspaces: [...state.workspaces, action.payload]
      };
    case "CREATE_ERROR":
      return action.payload;
    default:
      return state;
  }
};

export default workspaceReducer;
