import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faMobileAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand exact activeClassName="current" as={Link} to={'/'}>RapidBasket</Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink exact activeStyle={{ color: 'green' }} className="nav-link" as={NavLink} to='/'>
          <FontAwesomeIcon icon={faMobileAlt} /> Products
          </NavLink>
      </Nav>
      <Nav className="ml-auto">
        <NavLink exact className="nav-link" as={NavLink} to="cart"><FontAwesomeIcon icon={faShoppingCart} /> Cart (0)</NavLink>
        <NavDropdown title="Logout" id="basic-nav-dropdown">
          <NavDropdown.Item>Username</NavDropdown.Item>
        </NavDropdown>
        <NavLink exact activeStyle={{ color: 'green' }} className="nav-link" as={NavLink} to='/login'>
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </NavLink>

      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
