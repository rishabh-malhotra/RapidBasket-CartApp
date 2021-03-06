import {TOGGLE_CART_HIDDEN,ADD_ITEM,REMOVE_ITEM, CLEAR_ITEM_FROM_CART,EMPTY_CART} from './actionTypes'

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
  });
  
  export const clearItemFromCart = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
  });