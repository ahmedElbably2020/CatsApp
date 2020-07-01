import { createStore, applyMiddleware, compose } from 'redux'
import Reducer from './reducers'
import thunk from 'redux-thunk'

// Load Products Data From Local Storage
function loadState() {
    try {
        let state = localStorage.getItem('cart')

        if (state !== null) {
            return JSON.parse(state)
        }
    } catch (err) {

    }

    return {
        cart: []
    }

}

// Save Products Data To Local Storage
function saveState(state) {
    return localStorage.setItem('cart', JSON.stringify(state))
}

const store = createStore(Reducer, loadState(), compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

store.subscribe(() => saveState(store.getState()))
export default store