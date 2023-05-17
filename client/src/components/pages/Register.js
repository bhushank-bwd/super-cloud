import React from "react";

const Register = () => {
  return (
    <section id="form">
      <div className="row form-row">
        <div className="col-md-6"></div>
        <div className="col-md-6 form-col p-4">
          <form action="/action_page.php">
            <h2>Register</h2>
            <div className="form-group">
              <label for="username">Username:</label>
              <input type="email" className="form-control" id="username" />
            </div>
            <div className="form-group">
              <label for="email">Email address:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label for="pwd">Phone No:</label>
              <input type="number" className="form-control" id="mob" />
            </div>
            <div className="form-group">
              <label for="pwd">Password:</label>
              <input type="password" className="form-control" id="passworrd" />
            </div>

            <div className="form-group">
              <label for="pwd">Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                id="confirm_passworrd"
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
              <label for="pwd"></label>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
