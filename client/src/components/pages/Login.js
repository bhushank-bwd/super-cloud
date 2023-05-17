import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <section id="form">
    <div className="row form-row">
      <div className="col-md-6"></div>
      <div className="col-md-6 form-col p-4">
        <form action="/action_page.php">
          <h2>Login</h2>
          <div className="form-group">
            <label for="email">Email address:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="passworrd" />
          </div>

          
          <div className="form-group">
            <label for="pwd"></label>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <small>Don't have account, <Link to={'/register'}>register here</Link></small>
        </form>
      </div>
    </div>
  </section>
  )
}
