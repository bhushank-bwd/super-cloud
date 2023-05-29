import { createStore } from "redux";
import getToken from "../functions/getCookie";
const initialState = {
  isLoggedIn: getToken("token") ? true : false,
  loggerName: getToken("userName") ? getToken("userName") : "Get Started",
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
