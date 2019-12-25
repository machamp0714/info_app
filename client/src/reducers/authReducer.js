const initState = {
  loggedIn: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        data: action.payload,
        loggedIn: true
      };
    case "SIGNUP_ERROR":
      return {
        loggedIn: false
      };
    default:
      return state;
  }
};

export default authReducer;
