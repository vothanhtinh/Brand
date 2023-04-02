import { combineReducers } from 'redux';
import CartReducer from './reducers/reducer';
import authReducer from './redux/authSlice';
const rootReducer = combineReducers({
    cart: CartReducer,
    auth: authReducer,
});
export default rootReducer;
