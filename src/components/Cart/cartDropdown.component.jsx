import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

//import CustomButton from '../custom-button/custom-button.component';
import CartItem from './Carttem.component';
import { selectCartItems } from '../../redux/selectors/cartSelector';
import { toggleCartHidden } from '../../redux/actions/cartActions';

import './cartDropdown.style.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <button
      className="btn btn-primary"
      onClick={() => {
        history.push('/cart');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));