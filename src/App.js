import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavbarComponent from "./components/Shared/Navbar.component";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./components/Login/Login.component";
import { ProductsPage, ProductDetail } from "./components/Product";
import { connect } from "react-redux";
import { login } from "./redux/actions/userActions";
import CheckoutPage from './components/Checkout/Checkout.component'

const TITLE = "Rapid Basket";
class App extends React.Component {
  componentDidMount() {
   
    document.title = TITLE;
    
    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem("user"));
     
      this.props.login({ username: user.name, password: user.password });
    }
  }

  

  render() {
   
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
          <Route exact path="/cart" component={CheckoutPage} />
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
