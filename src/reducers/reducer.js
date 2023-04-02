import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_CART, REDUCE_CART, REMOVE_ALL_CART } from '~/redux/type';
const initialState = {
    cartItems: [],
    totalPrice: 0,
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            //tim san co trong gio hang hay chua
            const productInCart = state.cartItems?.find((p) => p.id === action.payload.id);
            if (!productInCart) {
                action.payload = {
                    ...action.payload,
                    quantity: 1,
                    totalPrice: action.payload.price,
                };
                return {
                    cartItems: [...state.cartItems, action.payload],
                };
            } else {
                //luu gio hang hien tai
                let newCart = state.cartItems;

                return {
                    cartItems: newCart.map((item) => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                                totalPrice: action.payload.price * (item.quantity + 1),
                            };
                        }
                        return item;
                    }),
                };
            }
        case REMOVE_FROM_CART:
            const newCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            return {
                cartItems: [...newCartItems],
            };
        case INCREASE_CART:
            let increase = state.cartItems;

            return {
                cartItems: increase.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: action.payload.quantity + 1,
                            totalPrice: action.payload.price * (action.payload.quantity + 1),
                        };
                    }
                    return item;
                }),
            };
        case REDUCE_CART:
            let reduce = state.cartItems;
            return {
                cartItems: reduce.map((item) => {
                    if (item.id === action.payload.id) {
                        if (action.payload.quantity > 1) {
                            return {
                                ...item,
                                quantity: action.payload.quantity - 1,
                                totalPrice: action.payload.price * (action.payload.quantity - 1),
                            };
                        }
                    }
                    return item;
                }),
            };
        case REMOVE_ALL_CART:
            return {
                ...state,
                cartItems: [],
            };
        // other cases

        default:
            return state;
    }
};

export default CartReducer;
