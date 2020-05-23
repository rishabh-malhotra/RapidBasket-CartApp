import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { productInfoReducer } from './productInfoReducer';

const rootReducer = combineReducers({
    products:productsReducer,
    productInfo: productInfoReducer
});

export default rootReducer;