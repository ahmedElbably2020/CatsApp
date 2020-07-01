import React from 'react'
import { Link } from 'react-router-dom'
function ProductItem(props) {
    const { img, name, price, ProductId } = props
    return (
        <div className="card my-3 border-0">
            <div className='img-container position-relative'>
                <img className="card-img-top" src={img} alt="Card image cap" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text" style={{ color: 'green', fontWeight: 'bold' }}>Price: {price}$</p>
                <Link to={`/products/${ProductId}`} className="btn btn-primary rounded-pill px-4 position-relative overflow-hidden">Buy</Link>
            </div>

        </div>
    )
}

export default ProductItem
