import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './actionTypes'


export function add_to_cart(productInfo, quantity) {
    return {
        type: ADD_TO_CART,
        productInfo,
        quantity
    }
}


export function create_remove_from_cart(index) {
    return {
        type: REMOVE_FROM_CART,
        index
    }
}

// Uses Redux Thunk
export function remove_from_cart(index) {
    return (dispatch) => {
        dispatch(create_remove_from_cart(index))
    }
}

export function clear_cart() {
    return {
        type: CLEAR_CART
    }
}