import React, { useState, useEffect } from 'react'
import ProductItem from '../Components/ProductItem'
import getAll from '../Api/Products'

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
            <h1>Products</h1>
            <div className='row'>
                {
                    products.map(cat => {
                        return <div className='col-4' key={cat.id}>
                            <ProductItem img={cat.image} name={cat.name} price={cat.price} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Products
