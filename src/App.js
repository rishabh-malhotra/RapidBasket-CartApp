import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavbarComponent  from "./components/Shared/Navbar.component";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/Login/Login.component";
import ProductList from './components/Product/ProductList.component'

const TITLE = "Rapid Basket";
function App() {
  document.title = TITLE;
  return (
    <React.Fragment>
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
