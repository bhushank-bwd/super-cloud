import { createContext, useContext, useState } from "react";
import getToken from "../functions/getCookie";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const LoginContext = createContext(null);

export const useLogin = () => {
  const loginState = useContext(LoginContext);
  return loginState;
};

export const LoginProvider = (props) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [loginData, setLoginData] = useState({
    isLoggedIn: getToken("token") ? true : false,
    loggerName: getToken("userName") ? getToken("userName") : "Get Started",
  });
  const login = async (loginData) => {
    const response = await fetch(`${apiUrl}api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginData.username,
        password: loginData.password,
      }),
    });
    const json = await response.json();
    if (json.status) {
      setLoginData({
        ...loginData,
        isLoggedIn: true,
        loggerName: json.userName,
      });
      Cookies.set("token", json.authtoken, { expires: 1 });
      Cookies.set("userName", json.userName, { expires: 1 });
      toast.success("Login successful");
      return true;
    } else {
      toast.error("Login error");
      return false;
    }
  };
  const logout = () =>{
    Cookies.remove("token");
    Cookies.remove("userName");
    setLoginData({
      ...loginData,
      isLoggedIn: false,
      loggerName: "Get Started",
    });
  }
  const register = async (registerData) => {
    const response = await fetch(`${apiUrl}api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: registerData.email,
        password: registerData.password,
        confirm_password: registerData.confirm_password,
        phoneno: registerData.mob,
        username: registerData.username,
      }),
    });
    const json = await response.json();
    if (json.status) {
      toast.success("Register successfully");
      return true;
    } else {
      toast.error("Register error");
      return false;
    }
  };
  return (
    <LoginContext.Provider value={{ loginData, setLoginData, login, register,logout }}>
      {props.children}
    </LoginContext.Provider>
  );
};
