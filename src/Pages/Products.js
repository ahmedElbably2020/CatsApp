import React from 'react'
import ProductItem from '../Components/ProductItem'
function Products() {
    return (
        <div className='container mt-4'>
            <h1>Products</h1>
            <div className='row'>
                <div className='col-4'>
                    <ProductItem />
                </div>
                <div className='col-4'>
                    <ProductItem />
                </div>
                <div className='col-4'>
                    <ProductItem />
                </div>
                <div className='col-4'>
                    <ProductItem />
                </div>
                <div className='col-4'>
                    <ProductItem />
                </div>
                <div className='col-4'>
                    <ProductItem />
                </div>
            </div>
        </div>
    )
}

export default Products
