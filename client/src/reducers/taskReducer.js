const initState = {
  tasks: []
};

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TASK_SUCCESS":
      return {
        tasks: [...state.tasks, action.payload]
      };
    case "CREATE_TASK_ERROR":
      return state;
    default:
      return state;
  }
};

export default taskReducer;
