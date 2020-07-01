import { createStore, applyMiddleware, compose } from 'redux'
import Reducer from './reducers'
import thunk from 'redux-thunk'

const initialValues = {
    cart: [

    ]
}


const store = createStore(Reducer, initialValues, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store