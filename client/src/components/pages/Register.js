import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    mob: "",
    password: "",
    confirm_password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(registerData);
  };
  const onChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  return (
    <section id="form">
      <div className="row form-row">
        <div className="col-md-6"></div>
        <div className="col-md-6 form-col p-4">
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                onChange={onChange}
                value={registerData.username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={onChange}
                value={registerData.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Phone No:</label>
              <input
                type="number"
                className="form-control"
                id="mob"
                name="mob"
                onChange={onChange}
                value={registerData.mob}
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
                value={registerData.password}
              />
            </div>

            <div className="form-group">
              <label htmlFor="pwd">Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                id="confirm_password"
                name="confirm_password"
                onChange={onChange}
                value={registerData.confirm_password}
              />
            </div>
            <div className="checkbox">
              <label>
                <small>
                  <input type="checkbox" /> I accept terms and condition
                </small>
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="pwd"></label>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <small>
              Already have account, <Link to={"/login"}>login here</Link>
            </small>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
