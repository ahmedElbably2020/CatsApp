import React from 'react'
import catImg from '../cat.jpg'
function ProductItem() {
    return (
        <div className="card my-3">
            <img className="card-img-top" src={catImg} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">New Cat</h5>
                <p className="card-text">Price: 2000$</p>
                <a href="#" class="btn btn-primary">Buy</a>
            </div>

        </div>
    )
}

export default ProductItem
