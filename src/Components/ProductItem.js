import React from 'react'
import catImg from '../cat.jpg'
function ProductItem(props) {
    const { img, name, price } = props
    return (
        <div className="card my-3">
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: {price}$</p>
                <a href="#" className="btn btn-primary">Buy</a>
            </div>

        </div>
    )
}

export default ProductItem
