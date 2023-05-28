import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/Login";
import Cookies from "js-cookie";
export const Navbar = () => {
  const loginState = useContext(LoginContext);
  let navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userName");
    loginState.setLoginData({
      ...loginState.loginData,
      isLoggedIn: false,
      loggerName: "",
    });
    navigate("/");
  };
  return (
    <header className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand px-md-4" to="/">
          <img src="assets/img/logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Feature
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" a="#">
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {loginState.loginData.isLoggedIn
                  ? loginState.loginData.loggerName
                  : "Get Started"}
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                {!loginState.loginData.isLoggedIn ? (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/register">
                        Register
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={handleLogout}
                    >
                      Log out
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
