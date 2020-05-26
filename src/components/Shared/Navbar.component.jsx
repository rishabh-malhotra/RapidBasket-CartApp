import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logOut } from '../../redux/actions/userActions';
import CartIcon from '../Cart/cart-icon';
import CartDropDown from '../Cart/cartDropdown.component'

const NavbarComponent = (props) => {
  function handleLogout() {
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

      {
        props.currentUser ?
          <Nav className="ml-auto">

            <NavDropdown title={props.currentUser} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :

          <Nav className="ml-auto">
            <NavLink exact activeStyle={{ color: 'green' }} className="nav-link" as={NavLink} to='/login'>
              <FontAwesomeIcon icon={faSignInAlt} /> Login
              </NavLink>
          </Nav>
      }
      <CartIcon />
      <div>
        {
          props.hidden ? null : <CartDropDown />
        }
      </div>
    </Navbar>

  )

};

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut())
})

const mapStateToProps = state => {
  return {
    currentUser: state.user.user ? state.user.user.name : null,
    hidden: state.cart.hidden
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
