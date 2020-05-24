import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavbarComponent  from "./components/Shared/Navbar.component";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/Login/Login.component";
import ProductsPage from './components/Product/ProductsPage';
import ProductDetail from './components/Product/ProductDetail.component.jsx';

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
      </Switch>
    </React.Fragment>
  );
}

export default App;
