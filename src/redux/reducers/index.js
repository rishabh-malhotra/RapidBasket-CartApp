import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { productReducer } from './productInfoReducer';
import { searchReducer } from './searchReducer';
import {userReducer} from './userReducer'

const rootReducer = combineReducers({
    products:productsReducer,
    product: productReducer,
    searchProducts:searchReducer,
    user:userReducer
});

export default rootReducer;