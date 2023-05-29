import { createStore } from "redux";
const initialState = {
  isLoggedIn: false,
  loggerName: "Get Started",
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        loggerName: action.payload.userName,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        loggerName: "Get Started",
      };
    default:
      return state;
  }
};
export const store = createStore(loginReducer);
