import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./constants";

const initialState = {
  isAuthenticated: localStorage.getItem('authApp') || false,
  user: { email: "user@gmail.com", pass: "asdf" }
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('authApp', true)
      return {
        ...state,
        isAuthenticated: true
      };

    case LOGOUT_SUCCESS:
      localStorage.setItem('authApp', false)
      return {
        ...state,
        isAuthenticated: false
      };

    default:
      return state;
  }
};

export default AuthReducer;