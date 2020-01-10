const initState = {
  user: {
    name: "",
    email: "",
    password: ""
  },
  headers: {
    "access-token": "",
    client: "",
    uid: ""
  },
  loggedIn: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        user: action.payload,
        headers: action.meta,
        loggedIn: true
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        loggedIn: false
      };
    case "SIGNIN_SUCCESS":
      return {
        user: action.payload,
        headers: action.meta,
        loggedIn: true
      };
    case "SIGNIN_ERROR":
      return {
        ...state,
        loggedIn: false
      };
    case "SIGNOUT_SUCCESS":
      return {
        ...state,
        loggedIn: false
      };
    case "SIGNOUT_ERROR":
      return {
        ...state,
        loggedIn: true
      };
    default:
      return state;
  }
};

export default authReducer;
