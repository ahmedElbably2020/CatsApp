import { createStore } from 'redux'
import Reducer from './reducers'

const initialValues = {
    cart: [

    ]
}


const store = createStore(Reducer, initialValues, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store