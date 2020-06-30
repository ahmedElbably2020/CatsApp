import { ADD_TO_CART } from './actionTypes'
import { REMOVE_FROM_CART } from './actionTypes'


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

        default:
            return state
    }
}