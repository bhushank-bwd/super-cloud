import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [loginData, setRegisterData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
  };
  const onChange = (e) => {
    setRegisterData({ ...loginData, [e.target.name]: e.target.value });
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
                onChange={onChange}
                value={loginData.username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={onChange}
                value={loginData.password}
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
