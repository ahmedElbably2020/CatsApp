import React from 'react'
import { Link } from 'react-router-dom'
function ProductItem(props) {
    const { img, name, price, ProductId } = props
    return (
        <div className="card my-3">
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: {price}$</p>
                <Link to={`/products/${ProductId}`} className="btn btn-primary">Buy</Link>
            </div>

        </div>
    )
}

export default ProductItem
