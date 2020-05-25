import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faMobileAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logOut } from '../../redux/actions/userActions';

const NavbarComponent = (props) => {
  //let ={props}
  //let user=props.currentUser?props.currentUser.name:null;
  //console.log("-------------USER",user,props.currentUser)
  function handleLogout(){
    console.log("---------------------asdas")
    props.logOut();
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to={'/'}>RapidBasket</Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink exact activeStyle={{ color: 'green' }} className="nav-link" as={NavLink} to='/'>
          <FontAwesomeIcon icon={faMobileAlt} /> Products
          </NavLink>
      </Nav>
      <Nav className="ml-auto">
        <NavLink exact className="nav-link" as={NavLink} to="cart"><FontAwesomeIcon icon={faShoppingCart} /> Cart (0)</NavLink>
        {
            props.currentUser ?
            <NavDropdown title={props.currentUser} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
            </NavDropdown>
             :
            <NavLink exact activeStyle={{ color: 'green' }} className="nav-link" as={NavLink} to='/login'>
              <FontAwesomeIcon icon={faSignInAlt} /> Login
        </NavLink>
         }
      </Nav>
    </Navbar>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logOut:()=> dispatch(logOut())
})

const mapStateToProps = state => {
  console.log(state.user.user)
  return {
    currentUser: state.user.user?state.user.user.name:null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
