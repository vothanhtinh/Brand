import { combineReducers } from 'redux';
import CartReducer from './reducers/reducer';

const rootReducer = combineReducers({
    cart: CartReducer,
});
export default rootReducer;
