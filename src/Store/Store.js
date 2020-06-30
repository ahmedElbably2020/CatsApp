import { createStore } from 'redux'
import Reducer from './reducers'

const initialValues = {
    cart: [

    ]
}


const store = createStore(Reducer, initialValues)

export default store