const initState = {
  workspaces: []
};

const workspaceReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_SUCCESS":
      console.log(action.payload);
      return {
        workspaces: action.payload
      };
    case "GET_ERROR":
      console.log(action.payload);
      return action.payload;
    case "CREATE_SUCCESS":
      console.log(action.payload);
      return {
        workspaces: [...state.workspaces, action.payload]
      };
    case "CREATE_ERROR":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default workspaceReducer;
