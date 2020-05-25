import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { productReducer } from './productInfoReducer';
import { searchReducer } from './searchReducer';
import {userReducer} from './userReducer';
import {sortReducer} from './sortReducer'

const rootReducer = combineReducers({
    products:productsReducer,
    product: productReducer,
    searchProducts:searchReducer,
    sortProducts:sortReducer,
    user:userReducer,
    
});

export default rootReducer;