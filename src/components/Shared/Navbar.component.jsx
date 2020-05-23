import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as ={Link} to={'/'}>RapidBasket</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to='/'><FontAwesomeIcon icon={faMobileAlt} /> Products</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link as={NavLink} to='/login'>
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
