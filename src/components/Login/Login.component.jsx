import React, { Component } from "react";
import { connect } from "react-redux";
import "./Login.component.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }
  
  render() {
    return (
      <div className="container top-buffer">
        <div className="row auth-wrapper">
          <div className="col-md-6 col-md-offset-3 auth-inner">
            <form>
              <h3>Sign In</h3>

              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  autoComplete="on"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
