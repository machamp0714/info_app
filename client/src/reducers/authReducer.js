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
  isLoading: true,
  errors: []
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_USER_LOADING":
      return {
        ...state,
        loggedIn: false,
        isLoading: true
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        loggedIn: true,
        isLoading: false
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        loggedIn: false,
        isLoading: false
      };
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
