import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_CART, REDUCE_CART, REMOVE_ALL_CART } from './type';

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
};
export const removeFromCart = (product) => ({
    type: REMOVE_FROM_CART,
    payload: product,
});

export const increaseCart = (product) => ({
    type: INCREASE_CART,
    payload: product,
});
export const reduceCart = (product) => ({
    type: REDUCE_CART,
    payload: product,
});
export const removeAllCart = () => ({
    type: REMOVE_ALL_CART,
});
//////////////////AUTH//////////
