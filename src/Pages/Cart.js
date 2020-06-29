import React, { useState, useEffect } from 'react'
import CartItem from '../Components/CartItem'
import { getAll } from '../Api/Products'

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAll().then(data => {
            setProducts(data)
        })

    }, [])
    console.log(products)
    return (
        <div className='container mt-4'>
            <h1>Cart</h1>
            <div className='row'>
                {
                    products.map(cat => {
                        return <div className='col-3' key={cat.id}>
                            <CartItem img={cat.image} name={cat.name} price={cat.price} />
                        </div>
                    })
                }

                <h3>Total : 3000$</h3>
                <button className='btn btn-success w-100 my-3'>Pay</button>
            </div>
        </div>
    )
}

export default Products
