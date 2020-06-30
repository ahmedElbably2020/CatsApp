import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './actionTypes'


export default function Reducer(state, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                cart: [
                    ...state.cart,
                    {
                        product: action.productInfo,
                        quantity: action.quantity
                    }
                ]
            }
        }

        case REMOVE_FROM_CART: {
            const index = action.index
            const newState = { ...state }
            newState.cart.splice(index, 1)
            return newState
        }


        case CLEAR_CART: {
            const newState = { ...state }
            newState.cart = []
            return newState
        }

        default:
            return state
    }
}