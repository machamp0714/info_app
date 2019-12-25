const initState = {
  loggedIn: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      console.log(action.user);
      return {
        ...state,
        user: action.user,
        loggedIn: true
      };
    case "SIGNUP_ERROR":
      console.log(action.error);
      return {
        ...state,
        error: action.error,
        loggedIn: false
      };
    default:
      return state;
  }
};

export default authReducer;
