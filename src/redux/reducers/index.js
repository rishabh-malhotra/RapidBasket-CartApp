import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { productReducer } from './productInfoReducer';

const rootReducer = combineReducers({
    products:productsReducer,
    product: productReducer
});

export default rootReducer;