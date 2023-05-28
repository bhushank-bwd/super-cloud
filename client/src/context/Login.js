import { createContext, useContext, useState } from "react";
import getToken from "../functions/getCookie";

export const LoginContext = createContext(null);

export const useLogin = ()=>{
  const loginState = useContext(LoginContext);
  return loginState;
}

export const LoginProvider = (props) => {
  const [loginData, setLoginData] = useState({
    isLoggedIn: getToken("token") ? true : false,
    loggerName: getToken("userName") ? getToken("userName") : "Get Started",
  });

  return (
    <LoginContext.Provider value={{ loginData, setLoginData }}>
      {props.children}
    </LoginContext.Provider>
  );
};
