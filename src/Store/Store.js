import { createStore } from 'redux'

const initialValues = {
    cart: [
        {
            product: {
                "id": 1,
                "name": "White Cat",
                "price": 100,
                "image": "https://i.ibb.co/DWhc0Fh/1.jpg",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            quantity: 5
        }
    ]
}

function reducer(state) {
    return state
}

const store = createStore(reducer, initialValues)

export default store