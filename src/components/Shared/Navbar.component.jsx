import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as ={Link} to={'/'}>RapidBasket</Navbar.Brand>
      {/* <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="\home"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                </Nav> */}
      <Nav className="ml-auto">
        <Nav.Link as={NavLink} to="/login">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </Nav.Link>
        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </Nav>
      {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
    </Navbar>
  );
};

export default NavbarComponent;
