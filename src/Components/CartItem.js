import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function ProductItem(props) {
    const { img, name, price } = props
    return (
        <div className="card my-3">
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text my-1">Price: {price}$</p>
                <p className="card-text my-1">Quantity: 0</p>
                <p className="card-text my-1">Total: 0$</p>
                <a href="#" className="btn text-white mt-2">
                    Delete
                    <FontAwesomeIcon icon={faTrash} className='ml-2' />
                </a>
            </div>

        </div>
    )
}

export default ProductItem
