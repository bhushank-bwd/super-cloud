import { combineReducers } from "redux";
import  siteSettingReducer  from "./siteSettingReducer";
import { createStore } from "redux";
import loginReducer from "./loginInfoReducer";
const rootReducer = combineReducers({
  siteInfo: siteSettingReducer,
  loginInfo:loginReducer
});
export const store = createStore(rootReducer);
