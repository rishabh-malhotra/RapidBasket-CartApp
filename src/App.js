import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavbarComponent  from "./components/Shared/Navbar.component";
import { Route, Switch,Redirect } from "react-router-dom";
import LoginPage from "./components/Login/Login.component";
import {ProductsPage,ProductDetail} from './components/Product';
import {CartPage} from'./components/Cart';

const TITLE = "Rapid Basket";
function App() {
  document.title = TITLE;
  return (
    <React.Fragment>
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/cart" component={CartPage} />
        <Redirect from='*' to='/' />
      </Switch>
    </React.Fragment>
  );
}

export default App;
