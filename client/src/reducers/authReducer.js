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
  }
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        user: action.payload,
        headers: action.meta
      };
    case "SIGNUP_ERROR":
      return {
        ...state
      };
    default:
      return state;
  }
};

export default authReducer;
