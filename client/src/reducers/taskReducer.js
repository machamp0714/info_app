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
    case "EDIT_TASK_SUCCESS":
      return {
        tasks: state.tasks.map(task =>
          task.id === action.meta ? action.payload : task
        )
      };
    case "EDIT_TASK_ERROR":
      return state;
    case "DELETE_TASK_SUCCESS":
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case "DELETE_TASK_ERROR":
      return state;
    default:
      return state;
  }
};

export default taskReducer;
