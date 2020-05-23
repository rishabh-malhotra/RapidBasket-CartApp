import React, { Component } from "react";
import { connect } from "react-redux";
import "./Login.component.css";
import { userService } from '../../services/user.service';
import { productService } from '../../services/products.service'
class LoginPage extends Component {
    constructor(props) {
      super(props);
      userService.login('admin','root');
      productService.getAllProducts();
      productService.getProduct('iphone 11');
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
