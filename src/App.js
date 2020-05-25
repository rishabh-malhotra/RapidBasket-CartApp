import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavbarComponent from "./components/Shared/Navbar.component";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./components/Login/Login.component";
import { ProductsPage, ProductDetail } from "./components/Product";
import { CartPage } from "./components/Cart";
import { connect } from "react-redux";
import { login } from "./redux/actions/userActions";

const TITLE = "Rapid Basket";
class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
    document.title = TITLE;
    console.log("äsdasdasd" + localStorage.getItem("user"));
    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem("user"));
      console.log("------------------------------------USER", user);
      this.props.login({ username: user.name, password: user.password });
    }
  }

  // console.log(user)
  // if(user){
  //   this.props.login(user)
  // }

  render() {
    console.log("-------------currentuser",this.props.currentUser)
    return (
      <React.Fragment>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={ProductsPage} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser !=null ? <Redirect to="/" /> : <LoginPage />
            }
          />
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route exact path="/cart" component={CartPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.user?state.user.user.name:null
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (args) => dispatch(login(args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
