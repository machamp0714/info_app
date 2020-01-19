const initState = {
  user: {
    name: "",
    email: "",
    image: ""
  },
  headers: {
    "access-token": "",
    client: "",
    uid: ""
  },
  loggedIn: false,
  logout: false,
  errors: []
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        user: action.payload,
        headers: action.meta,
        loggedIn: true
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        loggedIn: false,
        errors: action.payload
      };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        headers: action.meta,
        loggedIn: true
      };
    case "SIGNIN_ERROR":
      return {
        ...state,
        loggedIn: false,
        errors: [action.payload]
      };
    case "SIGNOUT_SUCCESS":
      return {
        ...state,
        logout: true
      };
    case "SIGNOUT_ERROR":
      return {
        ...state,
        logout: false,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
