import React from "react";
import {Navbar,Nav,FormControl,Button,Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () =>{
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">RapidBasket</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href="#features"><FontAwesomeIcon icon={faSignInAlt} /> Login</Nav.Link>
                {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form> */}
        </Navbar>
    )
}

export default NavbarComponent;
