import React, { useState, useEffect } from 'react'
import { getById } from '../Api/Products'

function Product(props) {

    const [product, setProduct] = useState({})
    useEffect(() => {
        const productId = props.match.params.id
        getById(+productId).then(productData => {
            setProduct(productData)
        })

    }, [])
    return (

        <div className='container mt-4'>
            <div className='row'>
                <img src={product.image} className='col-5' />
                <div className='col-7'>
                    <h2>{product.name}</h2>
                    <p className='mt-4'>Price : {product.price}</p>
                    <p className='text-muted mt-4'>{product.description}</p>
                    <div className='mt-4'>
                        Quantity :
                        <input type='number' className='ml-3' />
                    </div>
                    <button className='btn mt-4 text-white'>Add To Cart</button>
                </div>
            </div>
        </div>

    )
}

export default Product
