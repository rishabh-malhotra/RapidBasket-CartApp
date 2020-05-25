import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { productReducer } from './productInfoReducer';
import { searchReducer } from './searchReducer'

const rootReducer = combineReducers({
    products:productsReducer,
    product: productReducer,
    searchProducts:searchReducer
});

export default rootReducer;