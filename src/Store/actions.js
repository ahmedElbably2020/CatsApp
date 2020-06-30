import { ADD_TO_CART } from './actionTypes'

export function add_to_cart(productInfo, quantity) {
    return {
        type: ADD_TO_CART,
        productInfo,
        quantity
    }
}