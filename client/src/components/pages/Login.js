import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import getToken from "../../functions/getCookie";
import { useDispatch, useSelector } from "react-redux";
import { stepLogin } from "../../redux_toolkit/slices/loginSlice";
import { setProgress } from "../../redux_toolkit/slices/siteSettingSlice";
import { loginAPI } from "../../redux_toolkit/slices/loginSlice";
export const Login = () => {
  const dispatch = useDispatch();
  const { loginInfo } = useSelector((state) => state);
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });
  let navigate = useNavigate();
  useEffect(() => {
    if (getToken("token")) {
      navigate("/");
    }
    dispatch(setProgress(100));
    // eslint-disable-next-line
  }, [navigate]);

  const loginAPIData = useSelector((state) => state.loginInfo.loginAPIData);

  useEffect(() => {
    if (loginAPIData) {
      const json = loginAPIData;
      if (json.status) {
        const userName = json.userName;
        const payload = { userName: userName };
        dispatch(stepLogin(payload));
        Cookies.set("token", json.authtoken, { expires: 1 });
        Cookies.set("userName", userName, { expires: 1 });
        navigate("/");
      } else {
        console.log(json.message);
      }
    }
    // eslint-disable-next-line
  }, [loginAPIData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginAPI(loginData));
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
                {loginInfo.isLoading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </>
                ) : (
                  "Submit"
                )}
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
