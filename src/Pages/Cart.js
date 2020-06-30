import React, { useState, useEffect } from 'react'
import CartItem from '../Components/CartItem'
import { connect } from 'react-redux'

function Products(props) {

    const [products, setProducts] = useState([])
    const cartLength = products.length

    useEffect(() => {
        setProducts(props.allCart)
    }, [])


    return (

        <div className='container mt-4'>
            <h1>Cart</h1>
            <div className='row'>
                {cartLength === 0 ? <div className='badge badge-danger w-75 mx-auto p-3'>Empty Cart</div> : (
                    products.map((cat, index) => {
                        return <div className='col-3' key={cat.product.id}>
                            <CartItem id={index} img={cat.product.image} name={cat.product.name} quantity={cat.quantity} price={cat.product.price} total={cat.product.price * cat.quantity} />
                        </div>
                    })
                )}

            </div>
            {
                cartLength > 0 ? (
                    <div>
                        <h3>Total : {props.totalPrice}$</h3>
                        <button className='btn btn-success w-100 my-3'>Pay</button>
                    </div>
                ) : null
            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        allCart: state.cart,
        totalPrice: state.cart.reduce((acc, item) => acc += item.product.price * item.quantity, 0)
    }
}
export default connect(mapStateToProps)(Products)
