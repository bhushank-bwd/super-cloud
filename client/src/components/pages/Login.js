import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import getToken from "../../functions/getCookie";
import { LoginContext } from "../../context/Login";
import "react-toastify/dist/ReactToastify.css";
export const Login = () => {
  const loginState = useContext(LoginContext);
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
    const response = await loginState.login(loginData);
    if (response === true) {
      navigate("/");
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
