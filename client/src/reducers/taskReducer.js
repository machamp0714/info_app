const initState = {
  tasks: []
};

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_TASKS_SUCCESS":
      return {
        tasks: action.payload
      };
    case "GET_TASKS_ERROR":
      return state;
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
