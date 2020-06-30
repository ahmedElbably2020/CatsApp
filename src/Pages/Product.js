import React, { useState, useEffect } from 'react'
import { getById } from '../Api/Products'
import { connect } from 'react-redux'
import { add_to_cart } from '../Store/actions'
import { ADD_TO_CART } from '../Store/actionTypes'

function Product(props) {

    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        const productId = props.match.params.id
        getById(+productId).then(productData => {
            setProduct(productData)
        })

    }, [])

    let handleQuantityChange = e => {
        setQuantity(e.target.value)
    }

    let addToCart = (product) => {
        props.add_to_cart(product, quantity)
    }
    return (

        <div className='container mt-4'>
            <div className='row'>
                <img src={product.image} className='col-5' />
                <div className='col-7'>
                    <h2>{product.name}</h2>
                    <p className='badge badge-success mt-3 d-inline-block p-2'>Price : {product.price}</p>
                    <p className='text-muted mt-2'>{product.description}</p>
                    <div className='mt-4 d-flex align-items-center'>
                        Quantity :
                        <input type='number' min='0' className='ml-3' value={quantity} onChange={handleQuantityChange} />
                        {
                            quantity == 0 ? null : (
                                <div className='ml-3 text-success font-weight-bold'>
                                    Total : {quantity * product.price} $
                                </div>
                            )
                        }
                    </div>
                    <button className='btn mt-4 text-white' onClick={() => addToCart(product)}>Add To Cart</button>
                </div>
            </div>
        </div>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        add_to_cart: (productInfo, quantity) => dispatch(add_to_cart(productInfo, quantity))
    }
}

export default connect(null, mapDispatchToProps)(Product)
