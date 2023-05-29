import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import getToken from "../../functions/getCookie";
import { useDispatch } from "react-redux";


export const Login = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });
  let navigate = useNavigate();
  useEffect(() => {
    if (getToken()) {
      navigate("/");
    }
  }, [navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      const userName = json.userName;
      const payload = {userName:userName};
      dispatch({ type: 'LOGIN', payload: payload });
      Cookies.set("token", json.authtoken, { expires: 1 });
      Cookies.set("username", userName, { expires: 1 });
      navigate("/");
    } else {
      alert("login error");
    }
  };
  const onChange = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  };
  return (
    <section id="form">
      <div className="row form-row">
        <div className="col-md-6"></div>
        <div className="col-md-6 form-col p-4">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                onChange={onChange}
                value={loginData.username}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={onChange}
                value={loginData.password}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="pwd"></label>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <small>
              Don't have account, <Link to={"/register"}>register here</Link>
            </small>
          </form>
        </div>
      </div>
    </section>
  );
};
